AOS.init();
function toggleNavButton(x) {
    x.classList.toggle('change');
    document.querySelector('#navLinks').classList.toggle('change');
    document.querySelector('body').classList.toggle('change')
}
(() => {
    const navToggle = document.querySelector('#navToggle')
    navToggle.addEventListener('click', (e) => toggleNavButton(e.target))

    const links = Array.from(document.querySelectorAll('#navLinks > a'))
    links.forEach(link => {
        link.addEventListener('click', (e) => toggleNavButton(e.target))
    })
})()