

let itemsContainerElement = document.querySelector('.items_container');


let items = [
    {
        id: '001',
        image: 'blkfrock.jpg',
        company: 'KELVIN',
        item_name: 'New women black frock',

    },

    {
        id: '002',
        image: 'smr.jpg',
        company: 'PUMA',
        item_name: 'Women summer Dress',
        
    },
    {
        id: '003',
        image: 'wjeans.jpg',
        company: 'ZARA',
        item_name: 'women jeans',
        
    },
    {
        id: '004',
        image: 'wsoes.jpg',
        company: 'PUMA',
        item_name: 'Women casual shoes',

    },
    {
        id: '001',
        image: 'red frock.jpg',
        company: 'PUMA',
        item_name: 'New wedding suit',

    },

    {
        id: '002',
        image: 'office shoes.jpg',
        company: 'NIKE',
        item_name: 'New men shoes',
      
    },
    {
        id: '003',
        image: 'purse.jpg',
        company: 'LEVIS',
        item_name: 'lather men purse',
       
    },
    {
        id: '004',
        image: 'greenlens.jpg',
        company: 'RAYBON',
        item_name: 'new sunglasses',
        
    },
    {
        id: '004',
        image: 'green.webp',
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

