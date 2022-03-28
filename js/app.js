// window.onload = function() {

//     var canvas = document.getElementById('snow');
//     var ctx = canvas.getContext('2d');

//     var W = window.innerWidth;
//     var H = window.innerHeight;
//     canvas.width = W;
//     canvas.height = H;

//     var mf = 100;
//     var flakes = [];

//     for (let i = 0; i < mf; i++) {
//         flakes.push({
//             x:Math.random() * W,
//             y:Math.random() * H,
//             r:Math.random() * 5 + 2,
//             d:Math.random() + 1
//         })
//     }

//     function drawFlakes() {
//         ctx.clearRect(0, 0, W, H);
//         ctx.beginPath();
//         for (let i = 0; i < mf; i++) {
//             var f = flakes[i];
//             ctx.moveTo(f.x, f.y);
//             ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true)
//         }
//         ctx.fill();
//         moveFlakes();
//     }

//     var angle = 0;

//     function moveFlakes() {
//         angle += 0.01;
//         for (let i = 0; i < mf; i++) {
//             var f = flakes[i];

//             f.y += Math.pow(f.d, 2) + 1;
//             f.x += Math.sin(angle) * 2;

//             if (f.y > H) {
//                 flakes[i] = {x: Math.random() * W, y: 0, r: f.r, d: f.d};
//             }
//         }
//     }

//     setInterval(drawFlakes, 25);

// }

window.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.nav');
        navbar.classList.toggle('nav2', window.scrollY > 0)
    })
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.nav');
        navbar.classList.toggle('nav3', window.scrollY > 700)
    })
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.nav');
        navbar.classList.toggle('nav4', window.scrollY > 2000)
    })

    const menuBtn = document.querySelector('.menuBtn'),
        nava = document.querySelector('.nav_list')

    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('active')
        nava.classList.toggle('active')
    })
})



// pastdagi boshqa narsa

function qoraytirish() {
    const ism = document.querySelector('.submit_button'),
        qora = document.querySelector('.qorongi'),
        submmit = document.querySelector('.submit-btn'),
        reset = document.querySelector('.cansel-btn');

    ism.addEventListener('click', function () {
        qora.style.opacity = 1
        qora.style.display = 'flex'
    })
    submmit.addEventListener('click', function() {
        location.href = 'test.html'
    })
    reset.addEventListener('click', function() {
        qora.style.opacity = 0
        qora.style.display = 'none'
    })
}
qoraytirish()