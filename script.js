const button = document.querySelector('.my-button')
const input = document.querySelector('.title')

function addToDo(){
    let inputValue = input.value
    if (inputValue.length === 0){
        alert('You must write something')
    } else{
        let newElement = document.createElement('div')
        newElement.classList.add('newElement')
        newElement.textContent = inputValue
        document.body.appendChild(newElement)
        let cross = document.createElement('span')
        cross.textContent = '✖'
        cross.className = 'cross'
        newElement.appendChild(cross)
        input.value = ''  

        cross.addEventListener('click',function(){
            newElement.style.display = 'none'
        })
        
        newElement.addEventListener('click', function(){
            newElement.classList.toggle('action-done')
        })
    }
}

input.addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
        addToDo()
    }
})

button.addEventListener('click', addToDo)  

