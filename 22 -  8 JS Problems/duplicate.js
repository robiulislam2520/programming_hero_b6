const stds = ['Abul', 'Babul', 'Abul', 'Dabul', 'Ebul', 'Gabul', 'Babul', 'Cabul', 'kabul', 'Abul'];


function removeDuplicate(stds){
    let uniqueName = [];
    for(let i = 0; i < stds.length; i++){
        if(uniqueName.includes(stds[i]) === false ){
            uniqueName.push(stds[i])
        }
    }
    return uniqueName;
}

console.log(removeDuplicate(stds))
