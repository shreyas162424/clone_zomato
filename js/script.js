// Animation for the search input field to focus with a soft bounce
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('main input');

    // Add an event listener for when the user clicks on the input field
    searchInput.addEventListener('focus', function () {
        searchInput.style.transform = 'scale(1.05)';
    });

    // Revert the input field to its original size after the focus is lost
    searchInput.addEventListener('blur', function () {
        searchInput.style.transform = 'scale(1)';
    });
});
