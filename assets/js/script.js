const posts = [
  { file: '_posts/2026-01-02-ilk-yazi.md', title: 'İlk Yazım' },
  { file: '_posts/2026-01-02-ikinci-yazi.md', title: 'İkinci Yazım' }
];

const sidebar = document.getElementById('sidebar-list');
const content = document.getElementById('content');

// Sidebar linklerini oluştur
posts.forEach((post, index) => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = '#';
  a.textContent = post.title;
  a.addEventListener('click', function(e) {
    e.preventDefault();
    fetch(post.file)
      .then(res => res.text())
      .then(md => {
        // Front matter temizle
        const html = marked(md.replace(/---[\s\S]*?---/, ''));
        content.innerHTML = html;
      });
  });
  li.appendChild(a);
  sidebar.appendChild(li);
});
