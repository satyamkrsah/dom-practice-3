var img = document.querySelector('img')
var love = document.querySelector('#love')

img.addEventListener('dblclick', function () {

    love.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)'
    love.style.opacity = 1

    setTimeout(function () {
        love.style.transform = 'translate(-50%, -500%) scale(1) rotate(60deg)'
        love.style.opacity = 0;
    }, 800)

    setTimeout(function () {
        love.style.transform = 'translate(-50%, -50%) scale(0) rotate(30deg)'
    }, 1200)

})

