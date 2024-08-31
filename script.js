// Sample review data (replace with your own data)
const reviews = [
    { category: "Visit", venue: "Restaurant A", review: "Excellent food and service!" },
    { category: "Neutral", venue: "Hotel B", review: "Average stay, could be better." },
    // ... more reviews
];

// Function to dynamically add reviews
function addReviews() {
    const sections = document.querySelectorAll('section');
    reviews.forEach(review => {
        const section = sections[review.category.toLowerCase()];
        const listItem = document.createElement('li');
        listItem.textContent = `${review.venue}: ${review.review}`;
        section.querySelector('ul').appendChild(listItem);
    });
}

// Call the function to add reviews
addReviews();
