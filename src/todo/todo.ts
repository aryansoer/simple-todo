export interface ITodo {
    title: string;
    isCompleted: boolean;
    date?: Date;

    complete(): void;
}

export class Todo implements ITodo {

    public isCompleted: boolean;

    constructor(public title: string, public date?: Date) {
        this.isCompleted = false;
    }

    public complete(): void {
        this.isCompleted = true;
    }
}
