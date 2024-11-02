let groceryList = [];

function renderList() {
    const list = document.getElementById("groceryList");
    list.innerHTML = "";

    groceryList.forEach((item, index) => {
        const listItem = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = item;

        const editButton = document.createElement("span");
        editButton.textContent = "Edit";
        editButton.classList.add("edit-btn");
        editButton.onclick = () => editItem(index);

        const deleteButton = document.createElement("span");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick = () => deleteItem(index);

        listItem.appendChild(span);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        list.appendChild(listItem);
    });
}

function addItem() {
    const input = document.getElementById("groceryItem");
    const item = input.value.trim();

    if (item) {
        groceryList.push(item);
        input.value = "";
        renderList();
    } else {
        alert("Please enter an item");
    }
}

function editItem(index) {
    const item = groceryList[index];
    const newItem = prompt("Edit item:", item);

    if (newItem !== null && newItem.trim()) {
        groceryList[index] = newItem.trim();
        renderList();
    }
}

function deleteItem(index) {
    groceryList.splice(index, 1);
    renderList();
}