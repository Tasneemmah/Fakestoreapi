class Product {
    constructor(title, price, description, image) {
        this.title = title
        this.price = price
        this.description = description
        this.image = image
    }
}

let arrData = [];
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {

        json.forEach(element => {
            let product_ = new Product(element.title, element.price, element.description, element.image)
            arrData.push(product_)
        });

        arrData.map(element => {

            let sdcard = document.getElementById("student_card");
            let divContainer = document.createElement('div');
            let image = document.createElement("img");
            image.src = `${element.image}`

            let ul = document.createElement("ul");
            let li1 = document.createElement("li");
            li1.textContent = `title: ${element.title}`;

            let li2 = document.createElement("li");
            li2.textContent = `price: ${element.price}`;
            let li3 = document.createElement("li");
            li3.textContent = `description: ${element.description}`;

            divContainer.appendChild(image);
            ul.appendChild(li1);
            ul.appendChild(li2);
 
            divContainer.appendChild(ul);
            sdcard.appendChild(divContainer);
        });
    })
