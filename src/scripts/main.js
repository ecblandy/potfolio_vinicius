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
        hamburger.classList.remove('active')
        list.forEach(item => {
            item.style.animation = ''
        })
    }
})

const digitando = document.querySelector('.digitando')
function letraShow() {
    const arrTexto = digitando.innerHTML.split('')
    digitando.innerHTML = ''
    arrTexto.forEach((letra, index) => {
        setTimeout(() => {
            digitando.innerHTML += letra
        }, 75 * index)
    })
}

letraShow()

const buttons = document.querySelectorAll('.projectbutton')
const lista = document.querySelectorAll('.portfolio__armazenamento__list__item')
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const alvo = e.target

        buttons.forEach(button => {
            if (button !== alvo) {
                button.classList.remove('active')
            }
        })
        alvo.classList.add('active')


        lista.forEach(item =>{
            if (alvo.id == 'todos' || alvo.id == 'frontend' && item.classList.contains('frontend') || alvo.id == 'backend' && item.classList.contains('backend')){
                item.style.display = 'block'
                item.style.animation = 'teste forwards .7s ease-in'
                if(alvo.id == 'todos'){
                    item.style.animation = 'animaImg forwards .7s ease-in'
                }
            } else{
                item.style.display = 'none'
                item.style.animation = ''
            }
        })           
    })
})


// if (alvo.id === 'todos' ||
//             (alvo.id === 'frontend' && item.classList.contains('frontend')) ||
//             (alvo.id === 'backend' && item.classList.contains('backend'))) {
//                 // Adicione a animação de novo
                
//             } else {
                
//             }