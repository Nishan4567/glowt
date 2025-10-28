let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `<p>${item.product} - $${item.price} <button onclick="removeItem(${index})">Remove</button></p>`;
    });
    document.getElementById('total-price').innerText = `Total: $${total}`;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Checkout successful! Total amount: $' + cart.reduce((a,b) => a+b.price, 0));
        cart = [];
        updateCart();
    }
}

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Message sent! We will contact you soon.');
    this.reset();
});