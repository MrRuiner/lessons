const input = document.querySelector('#input')
const button = document.querySelector('#button')
const list = document.querySelector('#list')
const body = document.querySelector('body')
const modebtn = document.querySelector("#mode_btn")

function dark(){
    body.style.backgroundColor = 'black'
}

let todos = []

button.onclick = () => {
    clear()
    add()
    render()
}

function clear() {
    list.innerHTML = ""
}

function add() {
    let text = input.value
    todos.push(text)
}

function render() {
    for (let i = 0; i < todos.length; i++) {

        let dos = todos[i]

        let li = document.createElement('li')
        li.className = 'list-group-item'

        let div = document.createElement('div')
        div.className = 'd-flex'

        let span = document.createElement('span')
        span.className  = 'w-100'
        span.textContent = dos

        let button = document.createElement('button')
        button.className = 'btn btn-sm btn-danger'
        button.textContent = 'x'

        button.onclick = () => {
            todos.splice(i, 1)
            clear()
            render()
        }
        
        div.append(span, button)

        li.appendChild(div)
        list.appendChild(li)
    }
}
