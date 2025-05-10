document.querySelectorAll('.header__menu > ul > li').forEach(parentItem => {
    const subMenu = parentItem.querySelector('ul.visually-hidden');
    if (subMenu) {
        parentItem.addEventListener('mouseenter', () => {
            subMenu.classList.remove('visually-hidden');
            subMenu.classList.add('visible');
        });

        parentItem.addEventListener('mouseleave', () => {
            subMenu.classList.add('visually-hidden');
            subMenu.classList.remove('visible');
        });
    }
});