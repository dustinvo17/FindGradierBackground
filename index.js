const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const body = document.querySelector('body')
const header3 = document.querySelector('h3')
const but = document.querySelector('button')

function color(input1, input2) {
    return (input1.value ? `linear-gradient(to right , ${input1.value},${input2.value})` : `linear-gradient(to right , ${input1},${input2})`)

}
but.addEventListener('click', function (e) {
    const randomnumber1 = Math.ceil(Math.random() * 1000000)
    const randomnumber2 = Math.ceil(Math.random() * 1000000)
    const inp1 = `#${randomnumber1}`
    const inp2 = `#${randomnumber2}`
    header3.innerHTML = color(inp1, inp2)
    body.style.backgroundImage = color(inp1, inp2)
    input1.value = `#${randomnumber1}`
    input2.value = `#${randomnumber2}`
})

function currentCSS() {
    header3.innerHTML = color(input1, input2)
    body.style.backgroundImage = color(input1, input2)
}

function changeBackground(input1, input2) {
    currentCSS()

    input2.addEventListener('change', currentCSS)
    input1.addEventListener('change', currentCSS)



}
changeBackground(input1, input2)