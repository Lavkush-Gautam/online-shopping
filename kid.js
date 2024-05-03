
let itemsContainerElement = document.querySelector('.items_container');


let items = [
    {
        id: '001',
        image: 'kid1.jpg',
        company: 'KELVIN',
        item_name: 'New women black frock',

    },

    {
        id: '002',
        image: 'kid2.jpg',
        company: 'PUMA',
        item_name: 'Women summer Dress',
        
    },
    {
        id: '003',
        image: 'kid3.jpg',
        company: 'ZARA',
        item_name: 'women jeans',
        
    },
    {
        id: '004',
        image: 'kid4.jpg',
        company: 'PUMA',
        item_name: 'Women casual shoes',

    },
    {
        id: '001',
        image: 'kid5.jpg',
        company: 'PUMA',
        item_name: 'New wedding suit',

    },

    {
        id: '002',
        image: 'kid6.jpg',
        company: 'NIKE',
        item_name: 'New men shoes',
      
    },
    {
        id: '003',
        image: 'kid7.jpg',
        company: 'LEVIS',
        item_name: 'lather men purse',
       
    },
    {
        id: '004',
        image: 'kid8.jpg',
        company: 'RAYBON',
        item_name: 'new sunglasses',
        
    },
    {
        id: '004',
        image: 'kid9.jpg',
        company: 'KELVIN KLEIN',
        item_name: 'indian green shirt',

    },
];

    let innerHTML =''
items.forEach(items => {
    innerHTML += `

    <div class="item_container">
        <img class="imgitem" src="${items.image}" alt="item-img">
      

    

        <button class="btn">Add to bag</button>
    </div>`
});

itemsContainerElement.innerHTML = innerHTML;

