const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const logoutButton = document.getElementById('logoutButton');
const message = document.getElementById('message');
const dashboardPage = document.getElementById('dashboardPage');
const productsSection = document.getElementById('productsSection');
const cartSection = document.getElementById('cartSection');
const profilePage = document.getElementById('profilePage');
const profileLink = document.getElementById('profileLink');
const cartLink = document.getElementById('cartLink');
const dashboardLink = document.getElementById('dashboardLink');
const continueShoppingButton = document.getElementById('continueShoppingButton');
const cartItems = document.getElementById('cartItems');
const emptyCartMessage = document.getElementById('emptyCartMessage');
const subtotal = document.getElementById('subtotal');
const totalItems = document.getElementById('totalItems');
const cartCount = document.getElementById('cartCount');
const editProfileButton = document.getElementById('editProfileButton');
const fullNameValue = document.getElementById('fullNameValue');
const emailValue = document.getElementById('emailValue');
const mobileValue = document.getElementById('mobileValue');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const mobileInput = document.getElementById('mobileNumber');
const saveProfileButton = document.getElementById('saveProfileButton');
const profileMessage = document.getElementById('profileMessage');
const profileView = document.getElementById('profileView');
const profileForm = document.getElementById('profileForm');

const correctUsername = 'qa';
const correctPassword = 'pass123';

let profileData = {
  fullName: 'Jane Doe',
  email: 'jane@example.com',
  mobileNumber: '9876543210',
};

const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Mouse', price: 50 },
  { name: 'Keyboard', price: 120 },
  { name: 'Monitor', price: 350 },
];

let cart = [];

function showMessage(text, type) {
  message.textContent = text;
  message.className = `message ${type}`;
}

function showProfileMessage(text, type) {
  profileMessage.textContent = text;
  profileMessage.className = `message ${type}`;
}

function resetForm() {
  usernameInput.value = '';
  passwordInput.value = '';
  loginButton.classList.remove('hidden');
  logoutButton.classList.add('hidden');
  form.classList.remove('hidden');
  dashboardPage.classList.add('hidden');
  productsSection.classList.add('hidden');
  cartSection.classList.add('hidden');
  profilePage.classList.add('hidden');
  profileForm.classList.add('hidden');
  profileView.classList.remove('hidden');
  dashboardLink.classList.add('hidden');
  showMessage('', '');
  showProfileMessage('', '');
}

function renderProfile() {
  fullNameValue.textContent = profileData.fullName;
  emailValue.textContent = profileData.email;
  mobileValue.textContent = profileData.mobileNumber;
  fullNameInput.value = profileData.fullName;
  emailInput.value = profileData.email;
  mobileInput.value = profileData.mobileNumber;
}

function showProfileEditor() {
  profileView.classList.add('hidden');
  profileForm.classList.remove('hidden');
  renderProfile();
  showProfileMessage('', '');
}

function renderCart() {
  if (cart.length === 0) {
    emptyCartMessage.classList.remove('hidden');
    cartItems.innerHTML = '';
    continueShoppingButton.classList.add('hidden');
  } else {
    emptyCartMessage.classList.add('hidden');
    continueShoppingButton.classList.remove('hidden');
    cartItems.innerHTML = cart
      .map((item) => {
        return `
          <div class="cart-item" data-product-name="${item.name}">
            <div>
              <strong>${item.name}</strong>
              <p>$${item.price}</p>
            </div>
            <div class="qty-controls">
              <button type="button" class="decrease-btn">-</button>
              <span class="quantity">${item.quantity}</span>
              <button type="button" class="increase-btn">+</button>
              <button type="button" class="remove-btn">Remove</button>
            </div>
          </div>
        `;
      })
      .join('');
  }

  const subtotalValue = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  subtotal.textContent = `$${subtotalValue}`;
  totalItems.textContent = totalItemCount;
  cartCount.textContent = totalItemCount;
}

function showProfileView() {
  profileView.classList.remove('hidden');
  profileForm.classList.add('hidden');
  renderProfile();
  showProfileMessage('', '');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username) {
    showMessage('Username is required.', 'error');
    return;
  }

  if (!password) {
    showMessage('Password is required.', 'error');
    return;
  }

  if (username === correctUsername && password === correctPassword) {
    showMessage('Login successful! Welcome back.', 'success');
    loginButton.classList.add('hidden');
    logoutButton.classList.remove('hidden');
    form.classList.add('hidden');
    dashboardPage.classList.remove('hidden');
    productsSection.classList.remove('hidden');
    cartSection.classList.add('hidden');
    profilePage.classList.add('hidden');
    renderProfile();
    renderCart();
  } else {
    showMessage('Invalid username or password.', 'error');
  }
});

logoutButton.addEventListener('click', () => {
  resetForm();
  showMessage('You have logged out.', 'success');
});

profileLink.addEventListener('click', (event) => {
  event.preventDefault();
  dashboardPage.classList.add('hidden');
  productsSection.classList.add('hidden');
  cartSection.classList.add('hidden');
  profilePage.classList.remove('hidden');
  dashboardLink.classList.remove('hidden');
  showProfileView();
});

cartLink.addEventListener('click', (event) => {
  event.preventDefault();
  dashboardPage.classList.add('hidden');
  productsSection.classList.remove('hidden');
  cartSection.classList.remove('hidden');
  profilePage.classList.add('hidden');
  dashboardLink.classList.remove('hidden');
  renderCart();
});

dashboardLink.addEventListener('click', (event) => {
  event.preventDefault();
  profilePage.classList.add('hidden');
  cartSection.classList.add('hidden');
  dashboardPage.classList.remove('hidden');
  productsSection.classList.remove('hidden');
  dashboardLink.classList.add('hidden');
});

editProfileButton.addEventListener('click', () => {
  showProfileEditor();
});

continueShoppingButton.addEventListener('click', () => {
  cartSection.classList.add('hidden');
  productsSection.classList.remove('hidden');
  continueShoppingButton.classList.add('hidden');
});

document.querySelectorAll('button[data-product-name]').forEach((button) => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-product-name');
    const existingItem = cart.find((item) => item.name === name);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name, price: products.find((product) => product.name === name).price, quantity: 1 });
    }

    cartSection.classList.remove('hidden');
    productsSection.classList.remove('hidden');
    continueShoppingButton.classList.remove('hidden');
    renderCart();
  });
});

cartItems.addEventListener('click', (event) => {
  const target = event.target;
  const cartItem = target.closest('.cart-item');

  if (!cartItem) {
    return;
  }

  const name = cartItem.getAttribute('data-product-name');
  const item = cart.find((entry) => entry.name === name);

  if (!item) {
    return;
  }

  if (target.classList.contains('increase-btn')) {
    item.quantity += 1;
  } else if (target.classList.contains('decrease-btn')) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    }
  } else if (target.classList.contains('remove-btn')) {
    cart = cart.filter((entry) => entry.name !== name);
  }

  renderCart();
});

saveProfileButton.addEventListener('click', () => {
  const fullName = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const mobileNumber = mobileInput.value.trim();

  if (!fullName) {
    showProfileMessage('Full name is required', 'error');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showProfileMessage('Please enter a valid email', 'error');
    return;
  }

  profileData = {
    fullName,
    email,
    mobileNumber,
  };

  renderProfile();
  showProfileView();
  showProfileMessage('Profile Updated Successfully', 'success');
});

renderProfile();
showProfileView();
renderCart();
