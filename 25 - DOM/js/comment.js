const postBtn = document.getElementById('post'),
commentContainer = document.getElementById('commentContainer'),
commentBox = document.getElementById('commentBox');


postBtn.addEventListener('click', function(){
    const comment = commentBox.value;

    // create a p element
    const p = document.createElement('p');
    p.innerText = comment;
    commentContainer.appendChild(p)


    commentBox.value = '';
})