import { HomePage } from "./pages/HomePage/index.js";
import { RecipesPage } from "./pages/RecipesPage/index.js";
import { ErrorPage } from "./pages/ErrorPage/index.js";
import './style.css';

const appElement = document.querySelector('#app');

if (window.location.pathname === BASE_PATH + '/' || window.location.pathname === BASE_PATH + '/home') {
  appElement.append(HomePage());
} else if (window.location.pathname === BASE_PATH + '/recepty') {
  appElement.append(RecipesPage({ recipes: 'loading' }));
} else {
  appElement.append(ErrorPage());
};

// if (location.pathname === '/') {
//   appElement.append(HomePage());
// } else if (location.pathname === '/recepty') {
//   appElement.append(RecipesPage({ recipes: 'loading' }));
// } else {
//   appElement.append(ErrorPage());
// };