let iconcart = document.querySelector('.icon-cart');
let closecart = document.querySelector('.tutup');
let body = document.querySelector('body');
let listproducthtml = document.querySelector('.listproduct');
let listcarthtml = document.querySelector('.listcart');
let iconcartspan = document.querySelector ('.icon-cart span');

let listproducts = [];
let carts = [];

iconcart.addEventListener('click', () => {
    body.classList.toggle('showcart')
})
closecart.addEventListener('click', () => {
    body.classList.toggle('showcart')
})

const addDataToHTML = () => {
    listproducthtml.innerHTML = '';
    if(listproducts.length > 0){
        listproducts.forEach(product => {
            let newproduct = document.createElement('div');
            newproduct.classList.add('item');
            newproduct.dataset.id = product.id
            newproduct.innerHTML =`
            <img class="lepaul" src="${product.image}" alt="">
          <h5 class="brgtr1">${product.name}</h5>
          <h4 class="brgtr2">$${product.price}</h4>
          <button class="pro-btn">Pesan</button>
          `;
          listproducthtml.appendChild(newproduct);
        })
    }
} 
listproducthtml.addEventListener('click', (event) => {
    let positionclick = event.target;
    if(positionclick.classList.contains('Pesan')){
        let product_id = positionclick.parentElement.dataset.id;
        Pesan(product_id);
    }
})

const addtocart = (product_id) => {
    let positionthisproductincart = carts.findIndex((value) => value.product_id == product_id);
    if(carts.length <= 0){
        carts = [{
            product_id: product_id,
            quantity: 1
        }]
    }else if(positionthisproductincart < 0) {
        carts.push({
            product_id: product_id,
            quantity: 1
        });
    }else {
        carts[positionthisproductincart].quantity = carts[positionthisproductincart].quantity * 1
    }
    console.log(carts);
}

const initApp = () => {
    // get data form json
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        listproducts = data;
        console.log(listproducts);
    })
}
initApp();