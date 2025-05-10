let cart = [];
let paymentMethod = '';

function toggleCart() {
  const cartElement = document.getElementById('cart');
  cartElement.style.display = cartElement.style.display === 'block' ? 'none' : 'block';
}



function addToCart(name, price) {
  const item = { id: cart.length + 1, name, price };
  cart.push(item);
  updateCartDisplay();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartCount = document.getElementById('cart-count');
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('cart-item');
    div.innerHTML = `
      <span>${item.name} - ₹${item.price}</span>
      <button onclick="removeFromCart(${item.id})">Remove</button>`;
    cartItems.appendChild(div);
    total += item.price;
  });

  cartTotal.textContent = `Total: ₹${total}`;
  cartCount.textContent = cart.length;
}

function goToCheckout() {
  document.getElementById('checkout-form').style.display = 'block';
  document.getElementById('cart').style.display = 'none';
  window.scrollTo({ top: document.getElementById('checkout-form').offsetTop, behavior: 'smooth' });
}

function selectPaymentMethod(method, e) {
  paymentMethod = method;
  document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('selected'));
  e.currentTarget.classList.add('selected');

  document.getElementById('payment-details').style.display = (method === 'online') ? 'block' : 'none';
}

function processOrder(event) {
  event.preventDefault();

  cart = [];
  updateCartDisplay();
  document.getElementById('checkout-form').style.display = 'none';

  document.getElementById('order-message').innerText = "🎉Your order has been placed successfully!🎉 ";
  document.getElementById('order-message').style.display = 'block';
}


function closeCart() {
  const cartSection = document.getElementById('cart');
  cartSection.style.display = 'none';
}
function toggleCart() {
  const cart = document.getElementById("cart");
  cart.style.display = (cart.style.display === "block") ? "none" : "block";
}
