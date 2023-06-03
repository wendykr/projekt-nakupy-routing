import { Header } from "../../components/Header/index.js";
import { Footer } from "../../components/Footer/index.js";

import './style.css';

export const ErrorPage = () => {

  const element = document.createElement('div');
  element.classList.add('page');
  element.append(Header());
  element.innerHTML += `
    <main class="container flex-align">
      <div class="notfound">
        <div class="notfound-404"></div>
        <h1>404</h1>
        <h2>Oops! Page Not Be Found</h2>
        <p>Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarily unavailable</p>
        <a href="home">Back to homepage</a>
      </div>
    </main>
  `;

  element.append(Footer());
  return element;
}