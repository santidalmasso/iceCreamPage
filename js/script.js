const menu = document.querySelector('.menu')
const btnBurger = document.querySelector('.burger-button')

btnBurger.addEventListener('click',hideShow)

function hideShow() {
    if(menu.classList.contains('is-active')){
        menu.classList.remove('is-active')
    }else{
        menu.classList.add('is-active')
    }
}

document.querySelector('#eInicio').addEventListener('click',()=>menu.classList.remove('is-active'))
document.querySelector('#eFavoritos').addEventListener('click',()=>menu.classList.remove('is-active'))
document.querySelector('#eNosotros').addEventListener('click',()=>menu.classList.remove('is-active'))