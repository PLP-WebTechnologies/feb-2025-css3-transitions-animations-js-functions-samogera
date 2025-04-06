document.addEventListener('DOMContentLoaded', () => {
    const animateButton = document.getElementById('animate-button');
    const userPreference = document.getElementById('user-preference');
    const savePreferenceButton = document.getElementById('save-preference');
    const preferenceText = document.getElementById('preference-text');
    const toggleContentButton = document.getElementById('toggle-content');
    const dynamicContent = document.getElementById('dynamic-content');

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
        applyPreference(preference);
    });

    // Load user preference from local storage
    window.onload = () => {
        const savedPreference = localStorage.getItem('userPreference');
        if (savedPreference) {
            userPreference.value = savedPreference;
            preferenceText.textContent = `Loaded preference: ${savedPreference}`;
            applyPreference(savedPreference);
        }
    };

    // Toggle dynamic content
    toggleContentButton.addEventListener('click', () => {
        dynamicContent.classList.toggle('hidden');
    });

    // Apply theme preference
    function applyPreference(preference) {
        if (preference === 'dark') {
            document.body.style.backgroundColor = '#333';
            document.body.style.color = '#fff';
            document.querySelector('header').style.backgroundColor = '#222';
            document.querySelector('main').style.backgroundColor = '#444';
            document.querySelector('footer').style.backgroundColor = '#222';
            document.querySelectorAll('section').forEach(section => {
                section.style.backgroundColor = '#555';
                section.style.borderColor = '#444';
            });
            document.querySelectorAll('h2').forEach(h2 => {
                h2.style.color = '#fff';
            });
        } else {
            document.body.style.backgroundColor = '#f4f4f4';
            document.body.style.color = '#333';
            document.querySelector('header').style.backgroundColor = '#333';
            document.querySelector('main').style.backgroundColor = '#fff';
            document.querySelector('footer').style.backgroundColor = '#333';
            document.querySelectorAll('section').forEach(section => {
                section.style.backgroundColor = '#f9f9f9';
                section.style.borderColor = '#ddd';
            });
            document.querySelectorAll('h2').forEach(h2 => {
                h2.style.color = '#333';
            });
        }
    }
});