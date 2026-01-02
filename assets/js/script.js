document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const targetId = this.dataset.id;

    document.querySelectorAll('.post').forEach(p => p.style.display='none');
    document.getElementById(targetId).style.display='block';
  });
});
