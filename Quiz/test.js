const javobt = document.querySelectorAll('#true'),
      notogri = document.querySelectorAll('#false')
      tek = document.querySelectorAll('#erd')
      e = 0

for (let i = 0; i < javobt.length; i++) {
    javobt[i].addEventListener('click', function() {
        e++
    })
}

for (let i = 0; i < tek.length; i++) {
    tek[i].addEventListener('click', function() {
    // location.href = 'tekshirish.html'
    alert(`To'g'ri javoblar soni ${e} ta`)
})
}
