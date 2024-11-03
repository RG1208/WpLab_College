let groceryItems = [];

// Function to add a new item to the list
function addItem() {
    const itemName = document.getElementById("itemName").value;
    const itemQuantity = document.getElementById("itemQuantity").value;

    if (itemName.trim() === "" || itemQuantity <= 0) {
        alert("Please enter a valid item name and quantity.");
        return;
    }

    const newItem = {
        name: itemName,
        quantity: itemQuantity
    };

    groceryItems.push(newItem);

    document.getElementById("itemName").value = "";
    document.getElementById("itemQuantity").value = 1;

    renderList();
}

// Function to render the grocery list
function renderList() {
    const groceryList = document.getElementById("groceryList");
    groceryList.innerHTML = "";

    groceryItems.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.className = "grocery-item";

        listItem.innerHTML = `
            <p>${item.name} - Quantity: ${item.quantity}</p>
            <button onclick="editItem(${index})">Edit</button>
            <button onclick="deleteItem(${index})">Delete</button>
        `;

        groceryList.appendChild(listItem);
    });
}

// Function to delete an item from the list
function deleteItem(index) {
    groceryItems.splice(index, 1);
    renderList();
}

// Function to edit an existing item in the list
function editItem(index) {
    const itemName = prompt("Edit item name:", groceryItems[index].name);
    const itemQuantity = prompt("Edit quantity:", groceryItems[index].quantity);

    if (itemName !== null && itemQuantity !== null && itemQuantity > 0) {
        groceryItems[index].name = itemName;
        groceryItems[index].quantity = itemQuantity;
        renderList();
    } else {
        alert("Please enter a valid item name and quantity.");
    }
}
