let readmorebtn =document.getElementById('read-more-btn')
let readmorediv = document.getElementById('read-more-div')

readmorebtn.onclick =function(){
    if(readmorediv.style.display=="block"){
        readmorediv.style.display="none"
        readmorebtn.innerText="Click Here To Read More"
    }
    else{
        readmorediv.style.display="block"
        readmorebtn.innerText="Hide"
    }
}