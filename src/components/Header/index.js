import './style.css';

export const Header = () => {
  const element = document.createElement('header');
  element.innerHTML = `
    <div class="container header-container">
      <div class="brand">
        <div class="brand__logo"></div>
        <div class="brand__name">Nákupy</div>
      </div>
      <nav class="navigation">
        <a href="home" class="nav-home navlink">Domů</a>
        <a href="recepty" class="nav-recipes navlink">Recepty</a>
      </nav>
    </div>
  `;

  if (window.location.pathname === BASE_PATH + '/' || window.location.pathname === BASE_PATH + '/home') {
    element.querySelector('.nav-home').classList.add('navlink--active');
  } else if (window.location.pathname === BASE_PATH + '/recepty') {
    element.querySelector('.nav-recipes').classList.add('navlink--active');
  }

  // if (location.pathname === '/') {
  //   element.querySelector('.nav-home').classList.add('navlink--active');
  // } else if (location.pathname === '/recepty') {
  //   element.querySelector('.nav-recipes').classList.add('navlink--active');
  // }

  const brandElm = element.querySelector('.brand');
  console.log(brandElm);

  brandElm.addEventListener('click', () => {
    console.log('click');
    location.href = '/';
  });

  brandElm.addEventListener('mouseover', () => {
    console.log('mouseover');
    brandElm.style.cursor = 'pointer';
  });

  return element;
}
