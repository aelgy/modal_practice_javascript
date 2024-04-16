const modal = document.getElementById('modal')
const login = document.getElementById('login-modal')
const post = document.getElementById('post-modal')

function loginModal() {
  modal.style.display = 'block';
  login.style.display = 'block';
}

function postModal() {
  modal.style.display = 'block';
  post.style.display = 'block';
}

function closeBtn() {
  modal.style.display = 'none';
  login.style.display = 'none';
  post.style.display = 'none';
}