import { ITodo, Todo } from "./todo";

export class TodoFactory {
    public static makeTodo(title: string, date?: Date): ITodo {
        return new Todo(title, date);
    }
}
