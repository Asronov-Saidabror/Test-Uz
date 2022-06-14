window.addEventListener('DOMContentLoaded', function () {
    const loader = document.querySelector('.loader')
    const web = document.querySelector('.web')

    setTimeout(() => {
        loader.style.display = 'none'
        web.style.display = 'block'
    }, 1000);


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


    const submi = document.querySelector('.submit_button')
    
    submi.addEventListener('click', function () {
        location.href = '#teskt'
    })

    const BtnN1 = document.querySelector('.N2'),
          BtnN2 = document.querySelector('.N1'),
          MSec1 = document.querySelector('.mini_section-1'),
          MSec2 = document.querySelector('.mini_section-2');

    BtnN1.addEventListener('click', function() {
        MSec2.style.display = 'none'
        MSec1.style.display = 'block'
        BtnN1.style = `
            background: #000;
            color: #fff;
        `
        BtnN2.style = `
            background: #fff;
            color: #000;
        `

    })
    BtnN2.addEventListener('click', function() {
        MSec1.style.display = 'none'
        MSec2.style.display = 'block'
        BtnN2.style = `
            background: #000;
            color: #fff;
        `
        BtnN1.style = `
            background: #fff;
            color: #000;
        `
    })

    
})