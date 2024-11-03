let cart = []
const Tax = 0.18
const couponCode = NEW10

function addItem(name, price) {
    let item = cart.find(item => item.name === name);
    if (item) {
        item.quantity += 1
    }
    else {
        cart.push({
            name: "name",
            price: "price",
            quantity: 1
        })
    }
    renderCart()
}

function calculateSubtotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function calculateTotal() {
    const subtotal = calculateSubtotal();
    return subtotal + subtotal * TAX_RATE;
}

function applyDiscount(code) {
    const subtotal = calculateSubtotal();
    let discount = 0;

    if (code === couponCode) {
        discount = subtotal * 0.1; // 10% discount
        alert("Discount applied: " + discount.toFixed(2));
    } else {
        alert("Invalid discount code.");
    }

    return subtotal - discount;
}
function renderCart() {
    const cartDetails = document.getElementById("cartDetails");
    cartDetails.innerHTML = ""; // Clear previous content

    // Display each item in the cart
    cart.forEach(item => {
        const itemElement = document.createElement("p");
        itemElement.innerText = `${item.name} - $${item.price} x ${item.quantity}`;
        cartDetails.appendChild(itemElement);
    });

    // Display totals
    const subtotal = calculateSubtotal();
    const totalWithTax = calculateTotal();
    const subtotalElement = document.createElement("p");
    subtotalElement.innerText = `Subtotal: $${subtotal.toFixed(2)}`;
    const totalElement = document.createElement("p");
    totalElement.innerText = `Total (with tax): $${totalWithTax.toFixed(2)}`;

    cartDetails.appendChild(subtotalElement);
    cartDetails.appendChild(totalElement);
}

// Adding an option to apply discount
function applyDiscountCode() {
    const code = prompt("Enter discount code:");
    const totalAfterDiscount = applyDiscount(code);
    const discountElement = document.createElement("p");
    discountElement.innerText = `Total after discount: $${totalAfterDiscount.toFixed(2)}`;
    document.getElementById("cartDetails").appendChild(discountElement);
}