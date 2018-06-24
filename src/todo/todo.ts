import { TodoFactory } from "./todo-factory";

export interface ITodo {
    setTitle(title: string): void;
    getTitle(): string;

    setDate(date: Date): void;
    getDate(): Date | undefined;

    complete(): void;

    getStatus(): boolean;
}

export class Todo implements ITodo {

    private isCompleted: boolean;

    constructor(private title: string, private date?: Date) {
        this.isCompleted = false;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getTitle(): string {
        return this.title;
    }

    public setDate(date: Date): void {
        this.date = date;
    }

    public getDate(): Date | undefined {
        return this.date;
    }

    public complete(): void {
        this.isCompleted = true;
    }

    public getStatus(): boolean {
        return this.isCompleted;
    }
}
