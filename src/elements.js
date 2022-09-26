export function getTodoItem({id, name, status, onDelete, onUpdate}) {
    const element = document.createElement("div");
    element.className = "row mt-2";

    const elementComplete = document.createElement("div");
    elementComplete.className = "col-4";
    elementComplete.append(getCheckbox({status, onClick: onUpdate}));

    element.append(elementComplete);

    const elementName = document.createElement("div");
    elementName.className = "col-4";
    elementName.append(name);

    element.append(elementName);

    const elementDelete = document.createElement("div");
    elementDelete.className = "col-4 d-flex flex-row-reverse";
    elementDelete.append(getDeleteButton({onClick: onDelete}));

    element.append(elementDelete);
    return element;
}

export function getDeleteButton({onClick}) {
    const button = document.createElement("button");
    button.className = "btn btn-danger ml-2";
    button.append("Deletar");

    button.onclick = () => {
        button.disabled = true;
        onClick();
    };

    return button;
}

export function getCheckbox({status, onClick}) {
    const button = document.createElement("input");
    button.setAttribute("type", "checkbox");
    button.checked = status === "complete";

    button.onclick = () => {
        const check = button.checked;
        button.checked = check;
        button.disabled = true;
        if (check) {
            status = 'pending'
        } else {
            status = 'complete'
        }
        onClick()
    };

    return button;
}
