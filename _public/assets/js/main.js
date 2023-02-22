const navItems = document.querySelectorAll('.c-header__item');

navItems.forEach((ele) => {
    ele.addEventListener('click',(e) => {
        if (e.target.className == 'is-active') {
            e.preventDefault();
        }
    })
})

