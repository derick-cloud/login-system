console.log('Script register.js carregado com sucesso!');
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');
  const message = document.getElementById('message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        message.textContent = result.message;
        message.style.color = '#00ff9d';

        // ⏳ Aguarda 1 segundo e redireciona para a página de login
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 1000);
      } else {
        message.textContent = result.message;
        message.style.color = '#ff5c5c';
      }
    } catch (error) {
      console.error('Erro:', error);
      message.textContent = 'Erro ao conectar ao servidor.';
      message.style.color = '#ff5c5c';
    }
  });
});
setTimeout(() => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 400);
}, 1000);