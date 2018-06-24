import "jasmine";

import { ITodo, Todo, TodoFactory } from "./index";

describe("Instance of TodoFactory.makeTodo()", () => {

    it("should be defined", () => {
        expect(TodoFactory.makeTodo("Do Test")).toBeDefined();
    });

    it("should be instanceof of Todo", () => {
        expect(TodoFactory.makeTodo("Go Home") instanceof Todo).toBeTruthy();
    });
});

describe("Todo", () => {

    let todo: ITodo;
    let todoTitle = "Finish Todo Testing";

    beforeEach(() => {
        todo = TodoFactory.makeTodo(todoTitle);
    });

    it("status is not completed", () => {
        expect(todo.getStatus()).toEqual(false);
    });

    it("status should be completed", () => {
        todo.complete();
        expect(todo.getStatus()).toEqual(true);
    });

    it("title equal as defined", () => {
        expect(todo.getTitle()).toEqual(todoTitle);
    });

    it("title should be modified", () => {
        const newTitle = "New Todo Title";

        todo.setTitle(newTitle);

        expect(todo.getTitle()).toEqual(newTitle);
    });

    it("date should be undefined", () => {
        expect(todo.getDate()).toBeUndefined();
    });

    it("date should be equal to new given date", () => {
        const date = new Date(2000, 0, 1);

        todo.setDate(date);

        expect(todo.getDate()!.getTime()).toEqual(date.getTime());
    });
});
