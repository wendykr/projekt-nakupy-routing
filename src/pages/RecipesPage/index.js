import { Header } from "../../components/Header/index.js";
import { Footer } from "../../components/Footer/index.js";
import { Recipe } from '../../pages/RecipesPage/Recipe/index.js';

import './style.css';

export const RecipesPage = (props) => {
  const { recipes } = props;

  let process = 'Načítám...';
  if (recipes !== 'loading') {
    process = recipes.process;
  }

  const element = document.createElement('div');
  element.classList.add('page');
  element.append(Header());
  element.insertAdjacentHTML("beforeend", `
    <main class="container">
      <h1>Recepty</h1>
      <div class="recipes">${process}</div>
    </main>
  `);

  if (recipes === 'loading') {
    fetch('https://nakupy.kodim.app/api/me/recipes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((response) => response.json())
      .then((data) => {
        element.replaceWith(
          RecipesPage({recipes: data.result})
        )
    });

  } else {
    element.querySelector('.recipes').innerHTML= '';

    const listRecipeElm = recipes
      .map(oneRecipe => Recipe(
        {
          id: oneRecipe.id,
          title: oneRecipe.title,
          imageUrl: oneRecipe.imageUrl,
          url: oneRecipe.url,
        })
      );

    element.querySelector('.recipes').append(...listRecipeElm);
  }

  element.append(Footer());
  return element;
}