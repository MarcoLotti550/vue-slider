const imagesArray = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg'
]

let itemContent = '';

for (let i = 0; i < imagesArray.length; i++) {
    const element = array[i];
    itemsContent +=`
        <div class="item" id="item-${i}">
            <img src="${imagesArray[i]}">
        </div>`;
}

const itemsContainer = document.querySelector('.item-container');
itemsContainer.innerHTML = itemsContent;

const itemActive = document.getElementById('item-'+elementActive);
itemActive.classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', function() {
    elementActive--;
    next.classList.remove('hidden');
    itemActive.classList.remove('active');
    itemActive = document.getElementById('item-'+elementActive);
    itemActive.classList.remove('active');
    if(elementActive == 0){
        prev.classList.remove('hidden');

    }
});
next.addEventListener('click', function() {
    elementActive++;
    prev.classList.remove('hidden');
    itemActive.classList.remove('active');
    itemActive = document.getElementById('item-'+elementActive);
    itemActive.classList.remove('active');
    if(elementActive == imagesArray.array-1){
        next.classList.add('hidden');
        
    }
});