class DoubleLink {
  public prev: DoubleLink | null = null;
  public next: DoubleLink | null = null;
  private value: any;
  private persist: number;
  private modifyTime: number = 0;
  private key: any;
  constructor(key: any, value: any, persist: number) {
    this.key = key;
    this.value = value;
    this.persist = persist;
    this.updateModify();
  }

  updateModify() {
    if (this.persist) {
      this.modifyTime = Date.now();
    }
  }

  getKey() {
    return this.key;
  }

  getValue() {
    this.updateModify();
    return this.value;
  }

  setValue(value: any) {
    this.updateModify();
    this.value = value;
  }

  isOutDate() {
    return this.persist > 0 && Date.now() - this.modifyTime > this.persist;
  }

  clear() {
    this.value = null;
    this.prev = null;
    this.next = null;
    this.modifyTime = 0;
    this.key = null;
    this.persist = 0;
  }
}
export default class LRUCache {
  private size: number = 0;
  private capacity: number;
  private persist: number;
  private map: Map<any, DoubleLink> = new Map();
  private head: DoubleLink = new DoubleLink(null, null, 0);
  private tail: DoubleLink = new DoubleLink(null, null, 0);
  constructor(capacity: number, persist: number = 0) {
    this.capacity = capacity;
    this.persist = persist;
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  put(key: any, value: any): void {
    const node = this.map.get(key);
    if (node) {
      node.setValue(value);
      this.popToHead(node);
    } else {
      this.size += 1;
      const newNode = new DoubleLink(key, value, this.persist);
      this.popToHead(newNode);
      if (this.size > this.capacity && this.size > 0) {
        this.del(this.tail.prev);
      }
      this.map.set(key, newNode);
    }
  }

  private del(node: DoubleLink | null) {
    if (!node) {
      return;
    }
    const { prev, next } = node;
    if (prev) {
      prev.next = next;
    }
    if (next) {
      next.prev = prev;
    }
    this.map.delete(node.getKey());
    node.clear();
  }

  private popToHead(node: DoubleLink) {
    if (this.head.next === node) {
      return;
    }
    const { prev, next } = node;
    const { next: headNext } = this.head;
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next = node;
    if (headNext) {
      headNext.prev = node;
    }
    if (prev) {
      prev.next = next;
    }
    if (next) {
      next.prev = prev;
    }
  }

  get(key: any): any {
    if (this.map.has(key)) {
      const node = <DoubleLink>this.map.get(key);
      if (node.isOutDate()) {
        this.del(node);
        return null;
      }
      this.popToHead(node);
      return node.getValue();
    }
    return null;
  }
}
