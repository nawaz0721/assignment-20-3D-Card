var products = [
    {
        name: "Smartphone",
        category: "Electronics",
        price: 699.99,
        description: "A high-end smartphone with a large display and powerful processor.",
        image: "images/mobile.avif"
    },
    {
        name: "Laptop",
        category: "Computers",
        price: 1199.99,
        description: "A lightweight laptop with a high-resolution display and long battery life.",
        image: "images/laptop.avif"
    },
    {
        name: "Headphones",
        category: "Audio",
        price: 199.99,
        description: "Noise-cancelling headphones with superior sound quality.",
        image: "images/headphone.avif"
    },
    {
        name: "Smartwatch",
        category: "Wearables",
        price: 299.99,
        description: "A smartwatch with fitness tracking and notification features.",
        image: "images/watch.avif"
    },
    {
        name: "Camera",
        category: "Photography",
        price: 899.99,
        description: "A digital camera with a powerful zoom lens and high-resolution sensor.",
        image: "images/camera.avif"
    },
    {
        name: "Gaming Console",
        category: "Gaming",
        price: 499.99,
        description: "A popular gaming console with a wide selection of games and accessories.",
        image: "images/game.avif"
    },
    {
        name: "Electric Kettle",
        category: "Kitchen Appliances",
        price: 49.99,
        description: "A fast-boiling electric kettle with automatic shut-off feature.",
        image: "images/kettle.avif"
    },
    {
        name: "Vacuum Cleaner",
        category: "Home Appliances",
        price: 249.99,
        description: "A high-performance vacuum cleaner with multiple attachments.",
        image: "images/Cleaner.jpg"
    }
];

  var list = document.getElementById("list");

  products.forEach(function (data, ind) {
    var ele = `<div class="container" id="${ind}">
    <div class="card" style="background-image: url(${data.image});">
    <div class="content">
        <h1>${products[id].name}</h1>
        <span>${data.category}</span>
        <h4>$${data.price}</h4>
        <p>${data.description}</p>
        <button onclick="updateDesc(this)">Update</button>
        <button onclick="deleteCard(this)">Delete Card</button>
    </div>
    </div>
    </div>`;
    list.innerHTML += ele;
});

function deleteCard(){
    var parent = event.target.parentNode.parentNode.parentNode;
    parent.remove();
    products.forEach(function (data, ind) {
        var ele = `<div class="container" id="${ind}">
        <div class="card" style="background-image: url(${data.image});">
        <div class="content">
            <h1>${data.name}</h1>
            <span>${data.category}</span>
            <h4>$${data.price}</h4>
            <p>${data.description}</p>
            <button onclick="updateDesc(this)">Update</button>
            <button onclick="deleteCard(this)">Delete Card</button>
        </div>
        </div>
        </div>`;
    });
}

function updateDesc(ele) {
    var id = ele.parentNode.parentNode.parentNode.id;
    var desc = prompt("Enter new description", products[id].description);
    products[id].description = desc;
    var card = ele.parentNode.parentNode;
    card.innerHTML = `<div class="content">
        <h1>${products[id].name}</h1>
        <span>${products[id].category}</span>
        <h4>$${products[id].price}</h4>
        <p>${products[id].description}</p>
        <button onclick="updateDesc(this)">Update</button>
        <button onclick="deleteCard(this)">Delete Card</button>
    </div>`;
    VanillaTilt.init(card, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 1,
    });
}



VanillaTilt.init(document.querySelectorAll(".card"),{
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1,
});

