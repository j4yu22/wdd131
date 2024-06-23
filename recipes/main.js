import recipes from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const recipeList = document.getElementById('recipe-list');

    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');

        const tags = recipe.tags.map(tag => `<span class="tags">${tag}</span>`).join(' ');

        recipeElement.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <div>
                ${tags}
                <h2>${recipe.name}</h2>
                <div class="rating" aria-label="Rating: ${recipe.rating} out of 5 stars">
                    ${'⭐'.repeat(Math.floor(recipe.rating))}${'☆'.repeat(5 - Math.floor(recipe.rating))}
                </div>
                <p class="description">${recipe.description}</p>
            </div>
        `;

        recipeList.appendChild(recipeElement);
    });
});
