function pickDinner() {
    // Get user selections
    const dietaryPreference = document.getElementById("dietary").value;
    const timeAvailable = document.getElementById("time").value;

    // Replace with your recipe data (JSON format)
    const recipeData = [
        {
            name: "Spaghetti Carbonara",
            diet: "any",
            time: 30,
            description: "A classic Italian pasta dish with bacon, eggs, and cheese."
        },
        {
            name: "Vegan Stir-Fry",
            diet: "vegan",
            time: 15,
            description: "A quick and delicious stir-fry with tofu and vegetables."
        },
        // Add more recipes
    ];

    // Filter recipes based on user preferences
    const suitableRecipes = recipeData.filter(recipe => (
        (dietaryPreference === "any" || recipe.diet === dietaryPreference) &&
        (timeAvailable === "any" || recipe.time <= parseInt(timeAvailable))
    ));

    if (suitableRecipes.length === 0) {
        document.getElementById("recipe-display").style.display = "none";
        alert("No suitable recipes found. Please adjust your preferences.");
    } else {
        const randomIndex = Math.floor(Math.random() * suitableRecipes.length);
        const selectedRecipe = suitableRecipes[randomIndex];

        document.getElementById("recipe-name").textContent = selectedRecipe.name;
        document.getElementById("recipe-details").textContent = `Diet: ${selectedRecipe.diet}, Time: ${selectedRecipe.time} minutes, Description: ${selectedRecipe.description}`;
        document.getElementById("recipe-display").style.display = "block";
    }
}
