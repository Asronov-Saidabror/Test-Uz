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
        const topBox = document.querySelector('.topBox');
        if (window.scrollY > 100) {
            topBox.style = `
            right: 30px;
            `
        } else {
            topBox.style = `
            right: -100px;
            `
        }
    })
    window.addEventListener('scroll', function () {
        const testbosh = document.querySelector('.test_bosh');
        if (window.scrollY > 50) {
            testbosh.style = `
            opacity: 0;
            right: -500px;
            `
        } else {
            testbosh.style = `
            opacity: 1;
            right: 0;
            `
        }
    })
    window.addEventListener('scroll', function () {
        const maintitle = document.querySelector('.main_title');
        if (window.scrollY > 200) {
            maintitle.style = `
            opacity: 1;
            right: 0;
            `
        } if (window.scrollY > 800) {
            maintitle.style = `
            opacity: 0;
            right: -500px;
            `
        }
    })
    window.addEventListener('scroll', function () {
        const sfkjndgb = document.querySelector('.sfkjndgb');
        if (window.scrollY > 1800) {
            sfkjndgb.style = `
            left: 0;
            `
        } if (window.scrollY > 2200) {
            sfkjndgb.style = `
            left: -500px;
            `
        }
    })
    window.addEventListener('scroll', function () {
        const dawdawd = document.querySelector('.dawdawd');
        if (window.scrollY > 1800) {
            dawdawd.style = `
            right: 0;
            `
        } if (window.scrollY > 2200) {
            dawdawd.style = `
            right: -500px;
            `
        }
    })
    window.addEventListener('scroll', function () {
        const top_cards = document.querySelector('.top_cards');
        if (window.scrollY > 350) {
            top_cards.style = `
            opacity: 1;
            right: 0;
            `
        } if (window.scrollY > 1700) {
            top_cards.style = `
            opacity: 0;
            right: 500px;
            `
        }
    })
    window.addEventListener('scroll', function () {
        const formDiv = document.querySelector('.formDiv');
        if (window.scrollY > 1600) {
            formDiv.style = `
            opacity: 1;
            right: 0;
            `
        } if (window.scrollY > 2400) {
            formDiv.style = `
            opacity: 0;
            right: -500px;
            `
        }
    })
    window.addEventListener('scroll', function () {
        const about = document.querySelector('.about');
        if (window.scrollY > 2400) {
            about.style = `
            opacity: 1;
            left: 0;
            `
        } if (window.scrollY > 2800) {
            about.style = `
            opacity: 0;
            left: -500px;
            `
        }
    })
    window.addEventListener('scroll', function () {
        const devBox = document.querySelector('.devBox');
        if (window.scrollY > 2800) {
            devBox.style = `
            opacity: 1;
            left: 0;
            `
        }
    })
    window.addEventListener('scroll', function () {
        const ompoaef = document.querySelector('.container-sc2 img');
        if (window.scrollY > 2400) {
            ompoaef.style = `
            opacity: 1;
            right: 0;
            `
        } if (window.scrollY > 2800) {
            ompoaef.style = `
            opacity: 0;
            right: -500px;
            `
        }
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
        uploadImg = document.querySelector('.file-input'),
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

    const drop = document.querySelector('.drop');
    const input = document.querySelector('.drop input');
    const text = document.querySelector('.text');
    const progress = document.querySelector('.progress');

    let files = []

    input.addEventListener('change', () => {
        drop.style.display = 'none'
        upload();
    });
    drop.addEventListener('dragover', (e) => {
        e.preventDefault();
        text.innerHTML = "Sichqonchani qo'yib yuboring."
        drop.classList.add("active")
    })
    drop.addEventListener('dragleave', (e) => {
        e.preventDefault();
        text.innerHTML = "Fan rasmini olib kelib tashlang."
        drop.classList.remove("active")
    })
    drop.addEventListener('drop', (e) => {
        e.preventDefault();
        files = e.dataTransfer.files;
        drop.style.display= "none"
        upload();
    })

    //upload logic
    function upload() {
        let intervalCount = 0.25;
        progress.style.display = "block";
        progress.style.width = `${18 * intervalCount}%`;
        const interval = setInterval(() => {
            intervalCount += 0.25;
            progress.style.width = `${18 * intervalCount}%`;
            if (intervalCount == 5) {
                clearInterval(interval)
            }
        }, 100);
    }

    const chizish = document.querySelector(".aboutDev");

    chizish.addEventListener("mousemove", function(e) {
        let ssppan = document.createElement("span");
        ssppan.classList.add("ssppaann")
        let x = e.offsetX;
        let y = e.offsetY;
        ssppan.style.left = x + "px"
        ssppan.style.top = y + "px"


        let transformValue = Math.random * 360
        ssppan.style.transform = `rotate(${transformValue}deg)`

        chizish.appendChild(ssppan);

        setTimeout(() => {
            ssppan.remove()
        }, 2000);
    })
    
})