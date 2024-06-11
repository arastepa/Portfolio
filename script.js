function myFunction(element) {
  element.classList.toggle('show');
  const el = document.querySelector('.image-div ul');
  el.classList.toggle('hide-mobile');
  const img = document.querySelector('.icon img');
  if (img.src.includes('menu.svg')) {
    img.src = './photos/close.svg';
} else {
    img.src = './photos/menu.svg';
}
}