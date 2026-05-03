document.addEventListener('DOMContentLoaded', () => {
  // Cursor personalizado
  const el = document.getElementById('cursor');
  document.addEventListener('mousemove', e => { 
    if(el){ el.style.left = e.clientX + 'px'; el.style.top = e.clientY + 'px'; } 
  });

  // Lógica del Buscador
  const btnSearch = document.getElementById('btn-search');
  const searchOverlay = document.getElementById('search-overlay');
  const btnSearchClose = document.getElementById('search-close');

  if(btnSearch) btnSearch.addEventListener('click', () => searchOverlay.classList.add('open'));
  if(btnSearchClose) btnSearchClose.addEventListener('click', () => searchOverlay.classList.remove('open'));

  // Lógica del Menú Móvil
  const btnMenu = document.getElementById('btn-menu');
  const menuOverlay = document.getElementById('menu-overlay');
  const btnMenuClose = document.getElementById('menu-close');

  if(btnMenu) btnMenu.addEventListener('click', () => menuOverlay.classList.add('open'));
  if(btnMenuClose) btnMenuClose.addEventListener('click', () => menuOverlay.classList.remove('open'));

  // Cerrar todo con la tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      searchOverlay.classList.remove('open');
      menuOverlay.classList.remove('open');
    }
  });
});
