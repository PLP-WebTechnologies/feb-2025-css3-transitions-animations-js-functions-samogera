document.addEventListener('DOMContentLoaded', () => {
    const animateButton = document.getElementById('animate-button');
    const userPreference = document.getElementById('user-preference');
    const savePreferenceButton = document.getElementById('save-preference');
    const preferenceText = document.getElementById('preference-text');

    // Animation on button hover
    animateButton.addEventListener('mouseover', () => {
        animateButton.style.transform = 'scale(1.1)';
    });

    animateButton.addEventListener('mouseout', () => {
        animateButton.style.transform = 'scale(1)';
    });

    // Save user preference to local storage
    savePreferenceButton.addEventListener('click', () => {
        const preference = userPreference.value;
        localStorage.setItem('userPreference', preference);
        preferenceText.textContent = `Preference saved: ${preference}`;
    });

    // Load user preference from local storage
    window.onload = () => {
        const savedPreference = localStorage.getItem('userPreference');
        if (savedPreference) {
            userPreference.value = savedPreference;
            preferenceText.textContent = `Loaded preference: ${savedPreference}`;
        }
    };
});