
window.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.nav');
        navbar.classList.toggle('nav2', window.scrollY > 0)
    })
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.nav');
        navbar.classList.toggle('nav3', window.scrollY > 1555)
    })

    const menuBtn = document.querySelector('.menuBtn'),
        nava = document.querySelector('.nav_list')

    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('active')
        nava.classList.toggle('active')
    })
})


const submi = document.querySelector('.submit_button')

submi.addEventListener('click', function() {
    location.href = '#teskt'
})

const loader = document.querySelector('.loader')
const web = document.querySelector('.web')

setTimeout(() => {
    loader.style.display = 'none'
    web.style.display = 'block'
}, 2000);