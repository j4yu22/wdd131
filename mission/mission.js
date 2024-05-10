const themeSelector = document.getElementById('theme-selector');

function changeTheme() {
    const selectedTheme = themeSelector.value;

    if (selectedTheme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

themeSelector.addEventListener('change', changeTheme);
