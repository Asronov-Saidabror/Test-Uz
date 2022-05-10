function qoraytirish() {
    const ism = document.getElementById('123'),
        qora = document.querySelector('.qorongi'),
        submmit = document.getElementById('456'),
        reset = document.querySelector('.cansel-btn'),
        input = document.querySelector('.hsdjfkbl'),
        ismYuq = document.querySelector('.ndso');

    ism.addEventListener('click', function () {
        qora.style.opacity = 1
        qora.style.display = 'flex'
    })
    submmit.addEventListener('click', function() {
        if (input.value != '') {
            location.href = 'test.html'
        } else if (input.value == '') {
            ismYuq.style.display = 'block'
        }
    })
    reset.addEventListener('click', function() {
        location.reload()
    })
}
qoraytirish()