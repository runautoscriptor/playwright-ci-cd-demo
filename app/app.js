const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const logoutButton = document.getElementById('logoutButton');
const message = document.getElementById('message');
const dashboardPage = document.getElementById('dashboardPage');
const productsSection = document.getElementById('productsSection');
const cartSection = document.getElementById('cartSection');
const searchPage = document.getElementById('searchPage');
const profilePage = document.getElementById('profilePage');
const profileLink = document.getElementById('profileLink');
const cartLink = document.getElementById('cartLink');
const searchLink = document.getElementById('searchLink');
const dashboardLink = document.getElementById('dashboardLink');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const sortFilter = document.getElementById('sortFilter');
const searchResults = document.getElementById('searchResults');
const noProductsMessage = document.getElementById('noProductsMessage');
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
  { name: 'Laptop', price: 1000, category: 'Electronics', date: '2024-01-01' },
  { name: 'Gaming Laptop', price: 1500, category: 'Electronics', date: '2024-02-01' },
  { name: 'Mouse', price: 50, category: 'Accessories', date: '2024-03-01' },
  { name: 'Wireless Mouse', price: 45, category: 'Accessories', date: '2024-03-02' },
  { name: 'Keyboard', price: 120, category: 'Accessories', date: '2024-04-01' },
  { name: 'Mechanical Keyboard', price: 120, category: 'Accessories', date: '2024-04-02' },
  { name: 'Monitor', price: 350, category: 'Electronics', date: '2024-05-01' },
  { name: 'USB Cable', price: 20, category: 'Accessories', date: '2024-06-01' },
  { name: 'Headphones', price: 80, category: 'Electronics', date: '2024-07-01' },
  { name: 'Webcam', price: 60, category: 'Office', date: '2024-08-01' },
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

function getFilteredProducts() {
  const searchText = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;
  const selectedPrice = priceFilter.value;
  const selectedSort = sortFilter.value;

  let filtered = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchText);
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice =
      selectedPrice === 'all' ||
      (selectedPrice === 'under-100' && product.price < 100) ||
      (selectedPrice === '100-500' && product.price >= 100 && product.price <= 500) ||
      (selectedPrice === 'above-500' && product.price > 500);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  if (selectedSort === 'price-asc') {
    filtered = filtered.sort((a, b) => a.price - b.price);
  } else if (selectedSort === 'price-desc') {
    filtered = filtered.sort((a, b) => b.price - a.price);
  } else if (selectedSort === 'alpha') {
    filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selectedSort === 'newest') {
    filtered = filtered.sort((a, b) => b.date.localeCompare(a.date));
  }

  return filtered;
}

function renderSearchResults() {
  const filteredProducts = getFilteredProducts();

  if (filteredProducts.length === 0) {
    searchResults.innerHTML = '';
    noProductsMessage.classList.remove('hidden');
    return;
  }

  noProductsMessage.classList.add('hidden');
  searchResults.innerHTML = filteredProducts
    .map((product) => {
      return `
        <div class="search-product">
          <h3>${product.name}</h3>
          <p>Price: $${product.price}</p>
          <p>Category: ${product.category}</p>
          <button type="button" data-product-name="${product.name}">Add To Cart</button>
        </div>
      `;
    })
    .join('');
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
    searchPage.classList.add('hidden');
    profilePage.classList.add('hidden');
    renderProfile();
    renderCart();
    renderSearchResults();
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
  searchPage.classList.add('hidden');
  profilePage.classList.remove('hidden');
  dashboardLink.classList.remove('hidden');
  showProfileView();
});

cartLink.addEventListener('click', (event) => {
  event.preventDefault();
  dashboardPage.classList.add('hidden');
  productsSection.classList.remove('hidden');
  cartSection.classList.remove('hidden');
  searchPage.classList.add('hidden');
  profilePage.classList.add('hidden');
  dashboardLink.classList.remove('hidden');
  renderCart();
});

dashboardLink.addEventListener('click', (event) => {
  event.preventDefault();
  profilePage.classList.add('hidden');
  cartSection.classList.add('hidden');
  searchPage.classList.add('hidden');
  dashboardPage.classList.remove('hidden');
  productsSection.classList.remove('hidden');
  dashboardLink.classList.add('hidden');
});

editProfileButton.addEventListener('click', () => {
  showProfileEditor();
});

searchLink.addEventListener('click', (event) => {
  event.preventDefault();
  dashboardPage.classList.add('hidden');
  productsSection.classList.add('hidden');
  cartSection.classList.add('hidden');
  searchPage.classList.remove('hidden');
  profilePage.classList.add('hidden');
  dashboardLink.classList.remove('hidden');
  renderSearchResults();
});

searchInput.addEventListener('input', renderSearchResults);
categoryFilter.addEventListener('change', renderSearchResults);
priceFilter.addEventListener('change', renderSearchResults);
sortFilter.addEventListener('change', renderSearchResults);

continueShoppingButton.addEventListener('click', () => {
  cartSection.classList.add('hidden');
  productsSection.classList.remove('hidden');
  continueShoppingButton.classList.add('hidden');
});

document.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-product-name]');

  if (!button) {
    return;
  }

  const name = button.getAttribute('data-product-name');
  const existingItem = cart.find((item) => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price: products.find((product) => product.name === name).price, quantity: 1 });
  }

  cartSection.classList.remove('hidden');
  productsSection.classList.remove('hidden');
  searchPage.classList.add('hidden');
  continueShoppingButton.classList.remove('hidden');
  renderCart();
  renderSearchResults();
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
renderSearchResults();
