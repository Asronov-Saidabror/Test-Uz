const javobt = document.querySelectorAll('#true'),
    notogri = document.querySelectorAll('#false')
tek = document.querySelectorAll('#erd')
e = 0

for (let i = 0; i < javobt.length; i++) {
    javobt[i].addEventListener('click', function () {
        e++
    })
}

for (let i = 0; i < tek.length; i++) {
    tek[i].addEventListener('click', function () {
        // location.href = 'tekshirish.html'
        alert(`To'g'ri javoblar soni ${e} ta`)
    })
}

const loader = document.querySelector('.loader')
const web = document.querySelector('.web')

window.addEventListener('load', function () {
    loader.style.display = 'none'
    web.style.display = 'block'
})


// boshqa

const ff = document.querySelectorAll('#f'),
    tt = document.querySelectorAll('#t'),
    qor = document.querySelector('.qorongi'),
    qor2 = document.querySelector('.qorongi2'),
    tim = document.querySelector('.dsalomtinme'),
    tb1 = document.querySelector('.TBody'),
    tb2 = document.querySelector('.TBody2'),
    tb3 = document.querySelector('.TBody3'),
    tb4 = document.querySelector('.TBody4'),
    tb5 = document.querySelector('.TBody5'),
    tb6 = document.querySelector('.TBody6'),
    tb7 = document.querySelector('.TBody7'),
    tb8 = document.querySelector('.TBody8'),
    tb9 = document.querySelector('.TBody9'),
    tb10 = document.querySelector('.TBody0'),
    qol = document.querySelector('.qolgani');
    
    let NT = 1
    
    qol.innerHTML = `${NT}/10`
for (let i = 0; i < tt.length; i++) {
    tt[i].addEventListener('click', function () {
        timeNone()
        qor.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            tb2.style.display = 'flex'
            tb1.style.display = 'none'
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            qor.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
}
for (let i = 0; i < ff.length; i++) {
    ff[i].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            tb2.style.display = 'flex'
            tb1.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
}




function timeLine() {
    tim.style.width = '100%'
    tim.style.animation = 'time 30s linear'
}
function timeNone() {
    tim.style.animation = 'none'
}