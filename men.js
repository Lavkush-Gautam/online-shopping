

let itemsContainerElement = document.querySelector('.items_container');


let items = [
    {
        id: '001',
        image: 'men1.jpg',
        company: 'HIMALAYA',
        item_name: 'New men facewash',
        
    },

    {
        id: '002',
        image: 'loose pants.webp',
        company: 'PUMA',
        item_name: 'Men loose pants Dress',
       
    },
    {
        id: '003',
        image: 'printsrt.webp',
        company: 'ZARA',
        item_name: 'printed shirt',
        
    },
    {
        id: '004',
        image: 'check.webp',
        company: 'kalyan',
        item_name: 'Indian check shirt',

    },
    {
        id: '001',
        image: 'wastren.webp',
        company: 'PUMA',
       
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

    let innerHTML = '';
items.forEach(items => {
    innerHTML += `

    <div class="item_container">
        <img class="imgitem" src="${items.image}" alt="item-img">
       
        <div class="company_name">${items.company}</div>
        <div class="item_name">${items.item_name}</div>

        

        <button class="btn">Add to bag</button>
    </div>`
});

itemsContainerElement.innerHTML = innerHTML;

