function loadData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(posts){
    const postContainer = document.querySelector('.post_container');
    posts.map(post => {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
            <h5>User - ${post.id}</h5>
            <h4>${post.title}</h4>
            <p>${post.body}</p>
        `
        postContainer.appendChild(div)
    })
}


loadData()