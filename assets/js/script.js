document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = this.dataset.post;
    document.querySelectorAll('.post').forEach(p => p.style.display='none');
    document.getElementById(target).style.display='block';
  });
});
