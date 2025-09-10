document.addEventListener('DOMContentLoaded', () => {
    const languageToggle = document.getElementById('language-toggle');
    const languageMenu = document.getElementById('language-menu');
    const languageDisplay = languageToggle.querySelector('span');
    const subtitle = document.querySelector('.sub-title');
    const mainTitle = document.querySelector('.main-title h1');
    const category = document.querySelector('.category p');
    const categoryButtons = document.querySelectorAll('.category-btn');

    const translations = { 
        'en': {
            display: 'EN',
            subtitle: 'Your favorite food, right to your door.',
            mainTitle: 'What would you like to order today?',
            category: 'Choose your category:',
            categories: {
                japanese: 'Japanese Food',
                chinese: 'Chinese Food',
                italian: 'Italian Food',
                mexican: 'Mexican Food',
                brazilian: 'Brazilian Food'
            }
        },
        'pt': {
            display: 'PT',
            subtitle: 'Sua comida favorita, direto na sua porta.',
            mainTitle: 'O que você gostaria de pedir hoje?',
            category: 'Escolha sua categoria:',
            categories: {
                japanese: 'Comida Japonesa',
                chinese: 'Comida Chinesa',
                italian: 'Comida Italiana',
                mexican: 'Comida Mexicana',
                brazilian: 'Comida Brasileira'
            }
        }
    };

    function setLanguage(lang) {
        languageDisplay.textContent = translations[lang].display;
        subtitle.textContent = translations[lang].subtitle;
        mainTitle.textContent = translations[lang].mainTitle;
        category.textContent = translations[lang].category;
        categoryButtons.forEach(button => {
            const categoryKey = button.dataset.category;
            const spanText = button.querySelector('span');
            spanText.textContent = translations[lang].categories[categoryKey];
        });
        languageMenu.style.display = 'none';
    }

    languageToggle.addEventListener('click', () => {
        languageMenu.style.display = languageMenu.style.display === 'block' ? 'none' : 'block';
    });

    languageMenu.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            const selectedLang = event.target.dataset.lang;
            setLanguage(selectedLang);
        }
    });

    setLanguage('en');
});