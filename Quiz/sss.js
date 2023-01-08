function qoraytirish() {
    const ism = document.getElementById('123'),
        qora = document.querySelector('.qorongi'),
        submmit = document.getElementById('456'),
        reset = document.querySelector('.cansel-btn'),
        input = document.querySelector('.hsdjfkbl'),
        ismYuq = document.querySelector('.quiz_title');

    ism.addEventListener('click', function () {
        qora.style.opacity = 1
        qora.style.display = 'flex'
    })
    document.addEventListener('keydown', e => {
        
            if (e.keyCode === 13) {
                location.href = 'test.html'
            } else if (e.keyCode !== 13) {
                ismYuq.style.color = 'red'  
            }
    })
    // submmit.addEventListener('click', function () {
    //     if (input.value != '') {
    //         location.href = 'test.html'
    //     } else if (input.value == '') {
    //     }
    // })
    // reset.addEventListener('click', function () {
    //     // location.reload()
    //     qora.style.opacity = 0
    //     qora.style.display = 'none'
    // })
}
qoraytirish()