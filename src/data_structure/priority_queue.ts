interface PriorityQueue<E> {
    add(e: E): boolean;
    clear(): void;
    contains(e: E): boolean;
    peek(): E | null;
    poll(): E | null;
    remove(e: E): boolean;
    size: number;
    isEmpty(): boolean;
}

interface Comparator<E> {
    (a: E, b: E): number;
}



export default class PriorityQueueImpl<E> implements PriorityQueue<E> {
    private stack: E[] = [];
    private comparator: Comparator<E>;
    size: number = 0;
    constructor();
    constructor(comparator: Comparator<E>);
    constructor(list: E[]);
    constructor(list: E[], comparator?: Comparator<E>);
    constructor(listOrComparator?: E[] | Comparator<E>, comparator?: Comparator<E> ) {
        this.comparator = <any>PriorityQueueImpl.defaultCompartor;
        if (Array.isArray(listOrComparator)) {
            if (comparator !== undefined) {
                this.comparator = comparator
            }
            listOrComparator.forEach(e => {
                this.add(e)
            })
        } else if (typeof listOrComparator === 'function') {
            this.comparator = listOrComparator;
        }
    }

    static defaultCompartor: Comparator<number> = (a: number, b: number) => a - b;


    add(e: E) {
        this.size += 1;
        this.slipUp(this.size - 1, e)
        return true;
    }

    remove(e: E) {
        const pos = this.stack.indexOf(e)
        if (pos > -1) {
            const last = this.stack[this.size - 1];
            this.size -= 1;
            this.stack.length = this.size;
            this.slipDown(pos, last)
            if (this.stack[pos] === last) {
                this.slipUp(pos, last)
            }
            return true;
        }
        return false;
    }

    poll() {
        if (this.size === 0) {
            return null;
        }
        const e = this.stack[0];
        const last = this.stack[this.size - 1]
        this.size -= 1;
        this.stack.length = this.size;
        if (this.size !== 0) {
            this.slipDown(0, last)
        }
        return e;
    }


    clear() {
        this.size = 0;
        this.stack = []
    }

  

    contains(e: E) {
        return this.stack.includes(e)
    }

    peek() {
        if (this.size === 0) {
            return null;
        }
        return this.stack[0];
    }

    isEmpty() {
        return this.size === 0;
    }

    private slipUp(index: number, e: E) {
        while (index > 0) {
            const parentIndex = (index - (index % 2 === 0 ? 2 : 1)) / 2
            const parent = this.stack[parentIndex]
            if (this.comparator(e, parent) >= 0) {
                break;
            }
            this.stack[index] = parent;
            index = parentIndex;
        }
        this.stack[index] = e;
    }



    private slipDown(index: number, e: E) {
        while (index < Math.floor(this.size / 2)) {
            let child = index * 2 + 1;
            const right = child + 1;
            if (right < this.size && this.comparator(this.stack[child], this.stack[right]) > 0) {
                child = right;
            }
            if (this.comparator(e, this.stack[child]) < 0) {
                break;
            }
            this.stack[index] = this.stack[child];
            index = child;
        }
        this.stack[index] = e;
    }

}

