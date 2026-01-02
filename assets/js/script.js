// _posts klasöründeki yazıları listele
const posts = [
  { file: 'posts/2026-01-02-ilk-yazi.md', title: 'İlk Yazım' },
  { file: 'posts/2026-01-02-ikinci-yazi.md', title: 'İkinci Yazım' }
];

const sidebar = document.getElementById('sidebar-list');
const content = document.getElementById('content');

// Sidebar linklerini oluştur
posts.forEach(post => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = '#';
  a.textContent = post.title;
  a.dataset.file = post.file;

  a.addEventListener('click', function(e) {
    e.preventDefault();
    fetch(this.dataset.file)
      .then(res => res.text())
      .then(md => {
        // front matter temizle
        const html = marked(md.replace(/---[\s\S]*?---/, ''));
        content.innerHTML = html;
      })
      .catch(err => {
        content.innerHTML = "<p>Yazı yüklenemedi.</p>";
        console.error(err);
      });
  });

  li.appendChild(a);
  sidebar.appendChild(li);
});
