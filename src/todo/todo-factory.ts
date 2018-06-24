import { ITodo, Todo } from "./index";

export class TodoFactory {
    public static makeTodo(title: string, date?: Date): ITodo {
        return new Todo(title, date);
    }
}
