// assets/js/main.js
document.addEventListener('DOMContentLoaded', () => {
  // Cursor personalizado
  const el = document.getElementById('cursor');
  document.addEventListener('mousemove', e => { 
    if(el){ el.style.left = e.clientX + 'px'; el.style.top = e.clientY + 'px'; } 
  });

  // Buscador
  const btnSearch = document.getElementById('btn-search');
  const searchOverlay = document.getElementById('search-overlay');
  const btnClose = document.getElementById('search-close');

  if(btnSearch) btnSearch.addEventListener('click', () => searchOverlay.classList.add('open'));
  if(btnClose) btnClose.addEventListener('click', () => searchOverlay.classList.remove('open'));
});
