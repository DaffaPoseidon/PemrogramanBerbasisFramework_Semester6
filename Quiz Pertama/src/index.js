const container = document.querySelector('.blogs');
const searchForm = document.querySelector('.search');

const renderPosts = async () => {
  let uri = 'http://localhost:3000/posts';

  const res = await fetch(uri);
  const posts = await res.json();

  let template = '';
  posts.forEach(post => {
    template += `
      <div class="post">
        <h3>${post.nama}</h3>
        <p>${post.nim}</p>
        <p>${post.alamat.slice(0, 200)}...</p>
        <a href="/details.html">Read more ... </a>
      </div>
    `
  })
  container.innerHTML = template;
}
window.addEventListener('DOMContentLoaded', () => renderPosts());