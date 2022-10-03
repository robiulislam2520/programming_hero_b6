function fetchUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => loadData(data))
}

function loadData(data){
    const ul = document.querySelector('.list');

    data.map( user => {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li)
    })

}