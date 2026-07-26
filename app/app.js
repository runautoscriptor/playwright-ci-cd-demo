const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const logoutButton = document.getElementById('logoutButton');
const message = document.getElementById('message');
const dashboardPage = document.getElementById('dashboardPage');
const profilePage = document.getElementById('profilePage');
const profileLink = document.getElementById('profileLink');
const dashboardLink = document.getElementById('dashboardLink');
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
    profilePage.classList.add('hidden');
    renderProfile();
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
  profilePage.classList.remove('hidden');
  dashboardLink.classList.remove('hidden');
  showProfileView();
});

dashboardLink.addEventListener('click', (event) => {
  event.preventDefault();
  profilePage.classList.add('hidden');
  dashboardPage.classList.remove('hidden');
  dashboardLink.classList.add('hidden');
});

editProfileButton.addEventListener('click', () => {
  showProfileEditor();
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
