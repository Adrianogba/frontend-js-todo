export const TODO_URL = 'https://sc845087gd.execute-api.us-east-1.amazonaws.com'

export async function saveTodo(todo) {
    const response = await fetch(`${TODO_URL}/todos`, {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {'Content-Type': 'application/json'}
    });
    return await response.json();
}

export async function updateTodo(todo) {
    const response = await fetch(`${TODO_URL}/todos/${todo.id}`, {
        method: 'PUT',
        body: JSON.stringify(todo),
        headers: {'Content-Type': 'application/json'}
    });
    return await response.json();
}

export async function listTodos() {
    const response = await fetch(`${TODO_URL}/todos`);
    return (await response.json()).Items;
}

export async function deleteTodo(id) {
    const response = await fetch(`${TODO_URL}/todos/${id}`, {method: 'DELETE'})
    return await response.json();
}