const loadPhone = async (searchText) =>{
    // isLoading true
    displayLoading(true);
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const phones = await res.json();

    displayPhone(phones.data);

    // isLoading false
    displayLoading(false);
}


const displayPhone = (phones) =>{
    const phonesContainer = document.querySelector('.phone_hunter');
    phonesContainer.innerHTML = '';

    // Not found check
    if(phones.length === 0){
        document.querySelector('#display_none').classList.remove('display_none');
    } else{
        document.querySelector('#display_none').classList.add('display_none'); 
        displayLoading(false);
    }

    phones.forEach(phone =>{
        const div = document.createElement('div');
        div.classList.add('col');
        // console.log(phone)
        div.innerHTML = `
            <div class="card-img">
                <img src="${phone.image}" alt="${phone.phone_name}">
            </div>
            <div class="card_body">
                <small>${phone.brand}</small>
                <h3>${phone.phone_name}</h3>
                <p>Card Description</p>
                <button>Show details</button>
            </div>
        `

        phonesContainer.appendChild(div);
    })
}

document.getElementById('searchBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    const searchfield = document.getElementById('inputField');
    const searchText = searchfield.value;

    if(searchText === ''){
        return alert('Search inout is empty')
    }
    loadPhone(searchText)
    searchfield.value = '';
})


const displayLoading = (isTrue) =>{
    if(isTrue){
        document.querySelector('.loader').style.display = 'block';
    } else{
        document.querySelector('.loader').style.display = 'none';
    }
}

