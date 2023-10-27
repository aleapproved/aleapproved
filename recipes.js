var recipeData = [
    {
        name: "Mediterranean Salad",
        dietaryPreference: "vegetarian",
        cookingSkill: "beginner",
        time: "quick",
        ingredients: [
            "1 cup cherry tomatoes",
            "1 cucumber, sliced",
            "1/2 red onion, thinly sliced",
            "1/4 cup Kalamata olives, pitted",
            "1/4 cup feta cheese, crumbled",
            "2 tablespoons extra-virgin olive oil",
            "1 tablespoon red wine vinegar",
            "Salt and pepper to taste"
        ],
        instructions: [
            "In a large bowl, combine cherry tomatoes, cucumber, red onion, olives, and feta cheese.",
            "In a small bowl, whisk together olive oil, red wine vinegar, salt, and pepper.",
            "Drizzle the dressing over the salad and toss to combine.",
            "Serve immediately and enjoy!"
        ]
    },
    // Add more recipes here...
];

function getLunchRecommendation(dietaryPreference, cookingSkill, timeAvailable) {
    // Filter recipes based on user preferences
    const filteredRecipes = recipeData.filter(recipe => {
        return (
            (dietaryPreference === "any" || recipe.dietaryPreference === dietaryPreference) &&
            (cookingSkill === "any" || recipe.cookingSkill === cookingSkill) &&
            (timeAvailable === "any" || recipe.time === timeAvailable)
        );
    });

    let recommendation = "No matching lunch found.";
    if (filteredRecipes.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredRecipes.length);
        recommendation = filteredRecipes[randomIndex];
    }

    return recommendation;
}
