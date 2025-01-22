type EventCallback = (...args: any[]) => void;

export class EventEmitter {
    private static _instance: EventEmitter;
    private listeners: Map<string, EventCallback[]>;

    private constructor() {
        this.listeners = new Map();
    }

    public static getInstance(): EventEmitter {
        if (!EventEmitter._instance) {
            EventEmitter._instance = new EventEmitter();
        }
        return EventEmitter._instance;
    }

    public on(event: string, callback: EventCallback): void {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        this.listeners.get(event)?.push(callback);
    }

    public off(event: string, callback: EventCallback): void {
        const callbacks = this.listeners.get(event);
        if (callbacks) {
            const index = callbacks.indexOf(callback);
            if (index !== -1) {
                callbacks.splice(index, 1);
            }
        }
    }

    public emit(event: string, ...args: any[]): void {
        const callbacks = this.listeners.get(event);
        if (callbacks) {
            callbacks.forEach(callback => callback(...args));
        }
    }
}
