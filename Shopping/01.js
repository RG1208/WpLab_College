let cart = [];
const TAX_RATE = 0.18;
const couponCode = "NEW10";

function addItem(name, price) {
    let item = cart.find(item => item.name === name);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }
    renderCart();
}

function calculateSubtotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function calculateTotal() {
    const subtotal = calculateSubtotal();
    return subtotal + subtotal * TAX_RATE;
}


function renderCart() {
    const cartItems = document.getElementById("cartItems");
    const finalValueSection = document.getElementById("finalValueSection");

    cartItems.innerHTML = "";
    finalValueSection.innerHTML = "";

    cart.forEach(item => {
        const itemElement = document.createElement("p");
        itemElement.classList.add("itemElement");
        itemElement.innerText = `${item.name} - ₹${item.price} x ${item.quantity}`;
        cartItems.appendChild(itemElement);
    });

    const subtotal = calculateSubtotal();
    const totalWithTax = calculateTotal();
    const subtotalElement = document.createElement("p");
    subtotalElement.innerText = `Subtotal: ₹${subtotal.toFixed(2)}`;
    const totalElement = document.createElement("p");
    totalElement.innerText = `Total (with tax): ₹${totalWithTax.toFixed(2)}`;

    finalValueSection.appendChild(subtotalElement);
    finalValueSection.appendChild(totalElement);
}

function applyDiscount(code) {
    const subtotal = calculateSubtotal();
    let discount = 0;

    if (code === couponCode) {
        discount = subtotal * 0.1;
        alert("Discount applied: ₹" + discount.toFixed(2));
    } else {
        alert("Invalid discount code.");
    }

    return subtotal - discount;
}

function applyDiscountCode() {
    const codeInput = document.getElementById("couponCodeInput").value;
    const finalValueSection = document.getElementById("finalValueSection");

    const totalAfterDiscount = applyDiscount(codeInput);
    const discountElement = document.createElement("p");
    discountElement.innerText = `Total after discount: ₹${totalAfterDiscount.toFixed(2)}`;

    // Append the discounted total
    finalValueSection.appendChild(discountElement);
}
