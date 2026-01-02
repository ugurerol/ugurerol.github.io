const posts = [
  { title: "İlk Yazım", content: `
Merhaba! Bu benim ilk test yazım.

![Test Resmi](assets/images/test.jpg)
  ` },
  { title: "İkinci Yazım", content: `
Bu da ikinci test yazısı.

![Başka Resim](assets/images/test2.jpg)
  ` }
];

const sidebar = document.getElementById('sidebar-list');
const content = document.getElementById('content');

posts.forEach((post, i) => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = "#";
  a.textContent = post.title;

  a.addEventListener('click', function(e) {
    e.preventDefault();
    content.innerHTML = marked(post.content);
  });

  li.appendChild(a);
  sidebar.appendChild(li);
});
