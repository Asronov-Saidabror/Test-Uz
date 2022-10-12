const javobt = document.querySelectorAll('#true'),
    notogri = document.querySelectorAll('#false')
tek = document.querySelectorAll('#erd')
var e = 0

for (let i = 0; i < javobt.length; i++) {
    javobt[i].addEventListener('click', function () {
        e++
    })
}

for (let i = 0; i < tek.length; i++) {
    tek[i].addEventListener('click', function () {
        location.href = 'tekshirish.html'
        // alert(`To'g'ri javoblar soni ${e} ta`);
        // var r2 = e*e/10
        // alert(`Siz ${e}% to'pladingsiz`);
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
    ballllr = document.querySelector('.Ball'),
    qol = document.querySelector('.qolgani');
    
    let NT = 1
    var ball = 0
    
    qol.innerHTML = `${NT}/10`
for (let i = 0; i < tt.length; i++) {
    tt[0].addEventListener('click', function () {
        timeNone()
        qor.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            tb2.style.display = 'flex'
            tb1.style.display = 'none'
            timeLine()
            qol.innerHTML = `${NT++}/10`
            qor.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
}
// setTimeout(() => {
//     timeNone()
//     qor2.style = `
//     display: flex;
//     opacity: 1;
//     `
//     setTimeout(() => {
//         timeLine()
//         qol.innerHTML = `${NT + 1}/10`
//         tb2.style.display = 'flex'
//         tb1.style.display = 'none'
//         qor2.style = `
//         display: none;
//         opacity: 0;
//         `
//     }, 2000);
// }, 30000);
for (let i = 0; i < ff.length; i++) {
    ff[0].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT++}/10`
            tb2.style.display = 'flex'
            tb1.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
    ff[1].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT++}/10`
            tb2.style.display = 'flex'
            tb1.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
    ff[2].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT++}/10`
            tb2.style.display = 'flex'
            tb1.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
}
for (let i = 0; i < tt.length; i++) {
    tt[1].addEventListener('click', function () {
        timeNone()
        qor.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            tb3.style.display = 'flex'
            tb2.style.display = 'none'
            timeLine()
            qol.innerHTML = `${NT++}/10`
            qor.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
}
// setTimeout(() => {
//     timeNone()
//     qor2.style = `
//     display: flex;
//     opacity: 1;
//     `
//     setTimeout(() => {
//         timeLine()
//         qol.innerHTML = `${NT + 1}/10`
//         tb3.style.display = 'flex'
//         tb2.style.display = 'none'
//         qor2.style = `
//         display: none;
//         opacity: 0;
//         `
//     }, 2000);
// }, 30000);
for (let i = 0; i < ff.length; i++) {
    ff[3].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            tb3.style.display = 'flex'
            tb2.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
    ff[4].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            tb3.style.display = 'flex'
            tb2.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
    ff[5].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            tb3.style.display = 'flex'
            tb2.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
}
for (let i = 0; i < tt.length; i++) {
    tt[2].addEventListener('click', function () {
        timeNone()
        qor.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            tb4.style.display = 'flex'
            tb3.style.display = 'none'
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            qor.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
}
// setTimeout(() => {
//     timeNone()
//     qor2.style = `
//     display: flex;
//     opacity: 1;
//     `
//     setTimeout(() => {
//         timeLine()
//         qol.innerHTML = `${NT + 1}/10`
//         tb3.style.display = 'flex'
//         tb2.style.display = 'none'
//         qor2.style = `
//         display: none;
//         opacity: 0;
//         `
//     }, 2000);
// }, 30000);
for (let i = 0; i < ff.length; i++) {
    ff[6].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            tb4.style.display = 'flex'
            tb3.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
    ff[7].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            tb4.style.display = 'flex'
            tb3.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
    ff[8].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            tb4.style.display = 'flex'
            tb3.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
}
for (let i = 0; i < tt.length; i++) {
    tt[3].addEventListener('click', function () {
        timeNone()
        qor.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            tb5.style.display = 'flex'
            tb4.style.display = 'none'
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            qor.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
}
// setTimeout(() => {
//     timeNone()
//     qor2.style = `
//     display: flex;
//     opacity: 1;
//     `
//     setTimeout(() => {
//         timeLine()
//         qol.innerHTML = `${NT + 1}/10`
//         tb3.style.display = 'flex'
//         tb2.style.display = 'none'
//         qor2.style = `
//         display: none;
//         opacity: 0;
//         `
//     }, 2000);
// }, 30000);
for (let i = 0; i < ff.length; i++) {
    ff[9].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            tb5.style.display = 'flex'
            tb4.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
    ff[10].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            tb5.style.display = 'flex'
            tb4.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
    ff[11].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            tb5.style.display = 'flex'
            tb4.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
}
for (let i = 0; i < tt.length; i++) {
    tt[4].addEventListener('click', function () {
        timeNone()
        qor.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            tb6.style.display = 'flex'
            tb5.style.display = 'none'
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            qor.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
}
// setTimeout(() => {
//     timeNone()
//     qor2.style = `
//     display: flex;
//     opacity: 1;
//     `
//     setTimeout(() => {
//         timeLine()
//         qol.innerHTML = `${NT + 1}/10`
//         tb3.style.display = 'flex'
//         tb2.style.display = 'none'
//         qor2.style = `
//         display: none;
//         opacity: 0;
//         `
//     }, 2000);
// }, 30000);
for (let i = 0; i < ff.length; i++) {
    ff[12].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            tb6.style.display = 'flex'
            tb5.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
    ff[13].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            tb6.style.display = 'flex'
            tb5.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
    ff[14].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            tb6.style.display = 'flex'
            tb5.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
}
for (let i = 0; i < tt.length; i++) {
    tt[5].addEventListener('click', function () {
        timeNone()
        qor.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            tb7.style.display = 'flex'
            tb6.style.display = 'none'
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            qor.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
}
// setTimeout(() => {
//     timeNone()
//     qor2.style = `
//     display: flex;
//     opacity: 1;
//     `
//     setTimeout(() => {
//         timeLine()
//         qol.innerHTML = `${NT + 1}/10`
//         tb3.style.display = 'flex'
//         tb2.style.display = 'none'
//         qor2.style = `
//         display: none;
//         opacity: 0;
//         `
//     }, 2000);
// }, 30000);
for (let i = 0; i < ff.length; i++) {
    ff[15].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            tb7.style.display = 'flex'
            tb6.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
    ff[16].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            tb7.style.display = 'flex'
            tb6.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
    ff[17].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            tb7.style.display = 'flex'
            tb6.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
}
for (let i = 0; i < tt.length; i++) {
    tt[6].addEventListener('click', function () {
        timeNone()
        qor.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            tb8.style.display = 'flex'
            tb7.style.display = 'none'
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            qor.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
}
// setTimeout(() => {
//     timeNone()
//     qor2.style = `
//     display: flex;
//     opacity: 1;
//     `
//     setTimeout(() => {
//         timeLine()
//         qol.innerHTML = `${NT + 1}/10`
//         tb3.style.display = 'flex'
//         tb2.style.display = 'none'
//         qor2.style = `
//         display: none;
//         opacity: 0;
//         `
//     }, 2000);
// }, 30000);
for (let i = 0; i < ff.length; i++) {
    ff[18].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            tb8.style.display = 'flex'
            tb7.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
    ff[19].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            tb8.style.display = 'flex'
            tb7.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
    ff[20].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            tb8.style.display = 'flex'
            tb7.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
}
for (let i = 0; i < tt.length; i++) {
    tt[7].addEventListener('click', function () {
        timeNone()
        qor.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            tb9.style.display = 'flex'
            tb8.style.display = 'none'
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            qor.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
}
// setTimeout(() => {
//     timeNone()
//     qor2.style = `
//     display: flex;
//     opacity: 1;
//     `
//     setTimeout(() => {
//         timeLine()
//         qol.innerHTML = `${NT + 1}/10`
//         tb3.style.display = 'flex'
//         tb2.style.display = 'none'
//         qor2.style = `
//         display: none;
//         opacity: 0;
//         `
//     }, 2000);
// }, 30000);
for (let i = 0; i < ff.length; i++) {
    ff[21].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            tb9.style.display = 'flex'
            tb8.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
    ff[22].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            tb9.style.display = 'flex'
            tb8.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
    ff[23].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            tb9.style.display = 'flex'
            tb8.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
}
for (let i = 0; i < tt.length; i++) {
    tt[8].addEventListener('click', function () {
        timeNone()
        qor.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            tb10.style.display = 'flex'
            tb9.style.display = 'none'
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            qor.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
}
// setTimeout(() => {
//     timeNone()
//     qor2.style = `
//     display: flex;
//     opacity: 1;
//     `
//     setTimeout(() => {
//         timeLine()
//         qol.innerHTML = `${NT + 1}/10`
//         tb3.style.display = 'flex'
//         tb2.style.display = 'none'
//         qor2.style = `
//         display: none;
//         opacity: 0;
//         `
//     }, 2000);
// }, 30000);
for (let i = 0; i < ff.length; i++) {
    ff[24].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            tb10.style.display = 'flex'
            tb9.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
    ff[25].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            tb10.style.display = 'flex'
            tb9.style.display = 'none'
            qor2.style = `
            display: none;
            opacity: 0;
            `
        }, 2000);
    })
    ff[26].addEventListener('click', function () {
        
        timeNone()
        qor2.style = `
        display: flex;
        opacity: 1;
        `
        setTimeout(() => {
            timeLine()
            qol.innerHTML = `${NT + 1}/10`
            tb10.style.display = 'flex'
            tb9.style.display = 'none'
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