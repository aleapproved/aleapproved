function pickDinner() {
    const dietaryPreference = document.getElementById("dietary").value;
    const timeAvailable = document.getElementById("time").value;

    fetch("recipes.json")
        .then(response => response.json())
        .then(data => {
            const suitableRecipes = data.recipes.filter(recipe => (
                (recipe.diet === dietaryPreference) &&
                (recipe.time <= parseInt(timeAvailable))
            ));

            if (suitableRecipes.length === 0) {
                document.getElementById("recipe-display").style.display = "none";
                alert("No suitable recipes found. Please adjust your preferences.");
            } else {
                const randomIndex = Math.floor(Math.random() * suitableRecipes.length);
                const selectedRecipe = suitableRecipes[randomIndex];

                document.getElementById("recipe-name").textContent = selectedRecipe.name;
                document.getElementById("recipe-details").textContent = `Recipe:\n${selectedRecipe.recipe}`;
                document.getElementById("recipe-display").style.display = "block";
            }
        })
        .catch(error => console.error("Error fetching recipe data: " + error));
}
