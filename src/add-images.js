import Kiwi from './kiwi.jpg'
function addImage(){
    const img = document.createElement('img');
    img.alt = 'kiwi';
    img.src = Kiwi;
    const body = document.querySelector('body')
    body.appendChild(img)
}

export default addImage;