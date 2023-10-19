const hamburger = document.querySelector('.navbar__hamburger') // Menu hamburger
const menu = document.querySelector('.navbar__list') // Ul do header
const list = document.querySelectorAll('.navbar__list__item') // Li dentro do ul do header


// Quando o menu for clicado
hamburger.addEventListener('click', (e) => {
    const target = e.target
    hamburger.classList.toggle('active')
    target ? menu.classList.toggle('active') : ''
    list.forEach((item, index) => {
        item.style.animation ? item.style.animation = '' : item.style.animation = `fadeMenu 0.5s ease-in forwards ${index / 7 + 0.3}s`
    })
})

// Verifica o scroll para esconder o menu e animação
document.addEventListener('scroll', () => {
    if (window.scrollY >= 576) {
        menu.classList.remove('active')
        list.forEach(item =>{
            item.style.animation = ''
        })
    }
})