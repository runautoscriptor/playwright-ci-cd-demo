const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const logoutButton = document.getElementById('logoutButton');
const message = document.getElementById('message');

const correctUsername = 'qa';
const correctPassword = 'pass123';

function showMessage(text, type) {
  message.textContent = text;
  message.className = `message ${type}`;
}

function resetForm() {
  usernameInput.value = '';
  passwordInput.value = '';
  loginButton.classList.remove('hidden');
  logoutButton.classList.add('hidden');
  showMessage('', '');
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
  } else {
    showMessage('Invalid username or password.', 'error');
  }
});

logoutButton.addEventListener('click', () => {
  resetForm();
  showMessage('You have logged out.', 'success');
});
