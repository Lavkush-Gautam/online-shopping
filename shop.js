

let itemsContainerElement = document.querySelector('.items_container');

let items = [
    {
        id: '001',
        image: '1.jpg',
        company: 'Carlton London',
        item_name: 'Rhodium-Plated CZ Floral Studs',


    {
        id: '002',
        image: '2.jpg',
        company: 'CUKOO',
        item_name: 'Women Padded Halter Neck Swimming Dress',

    },
    {
        id: '003',
        image: '3.jpg',
        company: 'NUEVOSDAMAS',
        item_name: 'Women Red & White Printed A-Line Knee-Length Skirts',
      
    },
    {
        id: '004',
        image: '4.jpg',
        company: 'ADIDAS',
        item_name: 'Indian Cricket ODI Jersey',

    },
    {
        id: '005',
        image: '5.jpg',
        company: 'Roadster',
        item_name: 'Pure Cotton T-shirt',
        
    },
    {
        id: '006',
        image: '6.jpg',
        company: 'Nike',
        
    },
    {
        id: '007',
        image: '7.jpg',
        company: 'The Indian Garage Co',
        item_name: 'Men Slim Fit Regular Shorts',
       
    },
    {
        id: '008',
        image: '8.jpg',
        company: 'Nivea',
        item_name: 'Men Fresh Deodrant 150ml',
       
    },
    {
        id: '009',
        image: 'medicine.jpg',
        company: 'Cipla',
        item_name: 'Fresh medicine tablet',

    },
    {
        id: '010',
        image: 'office shoes.jpg',
        company: 'Bata',
        item_name: 'New stylish shoes',
       
    },
    {
        id: '011',
        image: 'gaming.jpg',
        company: 'Tata',
        item_name: 'New Gaming chair',
       
    },
    {
        id: '012',
        image: 'clothes.jpg',
        company: 'ZARA',
        item_name: 'New stylish clothes',

    },
    {
        id: '013',
        image: 'camra.jpg',
        company: 'Nicon',
        item_name: 'New 4k HD camera',
      
    },
    {
        id: '014',
        image: 'cream.jpg',
        company: 'GANIER',
        item_name: 'New latest cream',

    },{
        id: '015',
        image: 'monitor.jpg',
        company: 'SAMSUNG',
        item_name: 'New latest 4k quality',
      
    },{
        id: '016',
        image: 'headphones.jpg',
        company: 'BOAT HEADPHONE' ,
        item_name: 'New latest sound vibe',
       
    },{
        id: '017',
        image: 'e watch.jpg',
        company: 'BOAT WATCHES',
        item_name: 'New latest fashion',

    },
    
    
];


let innerHTML = '';
items.forEach(items => {
    innerHTML += `

    <div class="item_container">
        <img class="imgitem" src="${items.image}" alt="item-img">


        <button class="btn"">Add to bag</button>
    </div>`
});

itemsContainerElement.innerHTML = innerHTML;

