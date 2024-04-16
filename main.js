const overlay = document.getElementById('overlay')
const modal = document.getElementById('modal')
const login = document.getElementById('login-modal')
const post = document.getElementById('post-modal')

function loginModal() {
  overlay.style.display = 'block'
  modal.style.display = 'block';
  login.style.display = 'block';
}

function postModal() {
  overlay.style.display = 'block'
  modal.style.display = 'block';
  post.style.display = 'block';
}

function closeBtn() {
  overlay.style.display = 'none'
  modal.style.display = 'none';
  login.style.display = 'none';
  post.style.display = 'none';
}