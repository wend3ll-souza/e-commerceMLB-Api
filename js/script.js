const URL =  'https://api.mercadolibre.com/sites/MLB/search?q=car';
const productsSection = document.getElementById('productsSection');

const createImageElement = (src) => {
    const img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = src;
    return img;
}

const createCustomElement = (element, className, innerText) => {
    const Element = document.createElement(element);
    Element .className = className;
    Element .innerText = innerText;
    return Element ;
  }
  
const createProductCard = ({ title, image, price })  => {
    const section = document.createElement('section');
    const div = document.createElement('div');
    
    section.className = 'card';
    section.style = 'width: 18rem;';
    div.className = 'card-body';

    div.appendChild(createCustomElement('h5', 'card-title', title));
    div.appendChild(createCustomElement('span', 'card-text', price));
    div.appendChild(createCustomElement('button', 'btn btn-primary', 'Adicionar ao carrinho!'));
    section.appendChild(createImageElement(image));
    section.appendChild(div)
  
    return section;
  }

const createProductsCard = () => {
    fetch(URL)
    .then(response => response.json())
    .then( data => {
        data.results.map(item => {
            const card = {
                title: item.title,
                image: item.thumbnail,
                price: item.price,
            }

            productsSection.appendChild(createProductCard(card))
        })
    })
}

window.onload = () => {
    createProductsCard();
}