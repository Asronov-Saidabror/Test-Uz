window.addEventListener('DOMContentLoaded', function () {
    const loader = document.querySelector('.loader')
    const web = document.querySelector('.web')

    this.window.addEventListener('load', function () {
        setTimeout(() => {
            loader.style.display = 'none'
            web.style.display = 'block'
        }, 300);
    })



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

    BtnN1.addEventListener('click', function () {
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
    BtnN2.addEventListener('click', function () {
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


    const blackBg = document.querySelector('.blackBg'),
        addb = document.querySelector('.addb'),
        uploadImg = document.querySelector('.uploadImg'),
        addc = document.querySelector('.addc'),
        addButton = document.querySelector('.addButton');

    addb.addEventListener('click', function () {
        const div = document.createElement('div'),
            img = document.createElement('img'),
            div2 = document.createElement('div'),
            h3 = document.createElement('h3'),
            p = document.createElement('p'),
            div3 = document.createElement('div'),
            a = document.createElement('a');
        div.classList.add('main_card');
        img.src = uploadImg;
        div2.classList.add('content');
        h3.classList.add('card_title');
        p.classList.add('card_text');
        div.classList.add('view');
        a.classList.add('card_view');

        div.appendChild(img);
        div.appendChild(div2);
        div2.appendChild(h3);
        div.appendChild(p);
        div.appendChild(div3);
        div3.appendChild(a);
    })

    addButton.addEventListener('click', function () {
        blackBg.style = `
            display: flex;
            opacity: 1;
        `
    })
    addc.addEventListener('click', function () {
        blackBg.style = `
            display: none;
            opacity: 0;
        `
    })
    var s = scrollr.init()
})