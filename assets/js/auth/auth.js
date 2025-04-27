const STORAGE_KEY = 'portfolio_authenticated';
const CORRECT_HASH = '5e884898...'; // Hash SHA-256 de "password"

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const password = document.getElementById('password').value;
  const hashedPassword = sha256(password);

  if (hashedPassword === CORRECT_HASH) {
    localStorage.setItem(STORAGE_KEY, 'true');
    window.location.href = '/protected-content/';
  } else {
    document.getElementById('error').textContent = 'Credenciales inválidas';
  }
});

// Función para verificar autenticación
function checkAuth() {
  if (!localStorage.getItem(STORAGE_KEY) && !window.location.href.includes('login.html')) {
    window.location.href = '/login.html';
  }
}

// Ejecutar al cargar
checkAuth();
