import './style.css';

export const Recipe = ( props ) => {
    const { title, imageUrl, url } = props;

    const element = document.createElement('div');
    element.classList.add('recipe');
    element.innerHTML = `
        <h2 class="recipe__title"><a class="recipe__link "href="${url}">${title}</a></h2>
            <a class="recipe__link "href="${url}">
                <img class="recipe__img" src="${imageUrl}"/ title="${title}"></a>
    `;

    return element;
}