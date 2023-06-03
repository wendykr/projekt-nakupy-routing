import './style.css';

export const Footer = () => {
  const element = document.createElement('footer');
  element.innerHTML = `
    <footer>
      <div class="container">
        <p class="footer__text">
          Cvičná aplikace pro výuku JavaScriptu.
        </p>
      </div> 
    </footer>
  `;

  return element;
}
