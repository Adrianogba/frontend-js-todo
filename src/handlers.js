import {listTodos, saveTodo, deleteTodo, updateTodo} from "./todo_api";
import {getTodoItem} from "./elements";

function getNewTodoName() {
    const input = document.querySelector("[name=new-todo-name]");
    return input.value;
}

export function listenSubmit() {
    const button = document.getElementById("new-todo");
    button.onclick = async () => {
        const inputValue = getNewTodoName();
        await saveTodo({
            name: inputValue,
            status: "pending",
        });
        refreshTodoList();
    };
}

async function refreshTodoList() {
    const todoList = await listTodos();
    const todoElements = document.getElementById("todo-list");

    todoElements.innerHTML = "";

    todoList.forEach((todo) => {
        const onDelete = async () => {
            await deleteTodo(todo.id);
            refreshTodoList();
        };

        const onUpdate = async () => {
            await updateTodo(todo);
            refreshTodoList();
        };

        todoElements.append(
            getTodoItem({
                ...todo,
                onDelete,
                onUpdate,
            })
        );
    });
}

export function loadTodoList() {
    refreshTodoList();
}
