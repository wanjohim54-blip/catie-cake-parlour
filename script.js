/* =========================================================
   CATIE CAKE PARLOUR
   EMAILJS ORDER SYSTEM
   ========================================================= */


/* =========================================================
   EMAILJS SETUP
   ========================================================= */

emailjs.init({
    publicKey: "A9tOPwagwkrBqO1SQ"
});


/* =========================================================
   CAKE MENU
   ========================================================= */

const cakes = [

    {
        name: "Black Forest",
        prices: {
            "0.5": 1200,
            "1": 1850,
            "2": 3200,
            "3": 4190
        }
    },

    {
        name: "White Forest",
        prices: {
            "0.5": 1200,
            "1": 1850,
            "2": 3000,
            "3": 3800
        }
    },

    {
        name: "Red Velvet",
        prices: {
            "0.5": 1200,
            "1": 1850,
            "2": 3200,
            "3": 4190
        }
    },

    {
        name: "Passion",
        prices: {
            "0.5": 1200,
            "1": 1850,
            "2": 3200,
            "3": 4100
        }
    },

    {
        name: "Vanilla",
        prices: {
            "0.5": 1200,
            "1": 1699,
            "2": 3000,
            "3": 4000
        }
    },

    {
        name: "Passion Forest",
        prices: {
            "0.5": 1200,
            "1": 1850,
            "2": 3400,
            "3": 4200
        }
    },

    {
        name: "Strawberry",
        prices: {
            "0.5": 1200,
            "1": 1600,
            "2": 3000,
            "3": 4150
        }
    },

    {
        name: "Banana",
        prices: {
            "0.5": 1200,
            "1": 1600,
            "2": 3000,
            "3": 4150
        }
    },

    {
        name: "Oreo",
        prices: {
            "0.5": 1200,
            "1": 1900,
            "2": 3600,
            "3": 4200
        }
    },

    {
        name: "Caramel",
        prices: {
            "0.5": 1200,
            "1": 1700,
            "2": 3200,
            "3": 4200
        }
    },

    {
        name: "Coconut",
        prices: {
            "0.5": 1200,
            "1": 1899,
            "2": 3400,
            "3": 4200
        }
    },

    {
        name: "Cookie & Cream",
        prices: {
            "0.5": 1199,
            "1": 1899,
            "2": 3400,
            "3": 4200
        }
    },

    {
        name: "Rich Fruit",
        prices: {
            "0.5": 1499,
            "1": 2200,
            "2": 3800,
            "3": 5000
        }
    },

    {
        name: "Blueberry",
        prices: {
            "0.5": 1300,
            "1": 1820,
            "2": 3200,
            "3": 4200
        }
    },

    {
        name: "Light Fruit Cake",
        prices: {
            "0.5": 1300,
            "1": 1999,
            "2": 3000,
            "3": 4200
        }
    },

    {
        name: "Choc Fudge",
        prices: {
            "0.5": 1200,
            "1": 1950,
            "2": 2900,
            "3": 3800
        }
    },

    {
        name: "Mocha Cake",
        prices: {
            "0.5": 1700,
            "1": 2200,
            "2": 3900,
            "3": 5000
        }
    },

    {
        name: "Orange Cake",
        prices: {
            "0.5": 1099,
            "1": 1600,
            "2": 3000,
            "3": 3800
        }
    },

    {
        name: "Pinacolada",
        prices: {
            "0.5": 1499,
            "1": 2300,
            "2": 3400,
            "3": 4490
        }
    },

    {
        name: "Mint Cake",
        prices: {
            "0.5": 1200,
            "1": 1800,
            "2": 3000,
            "3": 5000
        }
    },

    {
        name: "Carrot Cake",
        prices: {
            "0.5": 1200,
            "1": 1999,
            "2": 3200,
            "3": 5000
        }
    },

    {
        name: "Lemon Cake",
        prices: {
            "0.5": 1100,
            "1": 1700,
            "2": 3200,
            "3": 4200
        }
    },

    {
        name: "Irish Coffee Cake",
        prices: {
            "0.5": 1500,
            "1": 2200,
            "2": 3900,
            "3": 5000
        }
    }

];


/* =========================================================
   LOAD CAKE MENU
   ========================================================= */

function loadCakeMenu() {

    const menu = document.getElementById("cake-menu");
    const flavourSelect = document.getElementById("cakeFlavour");

    if (!menu || !flavourSelect) {
        return;
    }

    menu.innerHTML = "";
    flavourSelect.innerHTML =
        '<option value="">Choose a cake flavour</option>';


    cakes.forEach(function(cake) {

        /* Cake card */

        const card = document.createElement("div");

        card.className = "cake-card";

        card.innerHTML = `

            <h3>${cake.name}</h3>

            <div class="cake-prices">

                <p>
                    <strong>0.5 Kg:</strong>
                    KSh ${cake.prices["0.5"].toLocaleString()}
                </p>

                <p>
                    <strong>1 Kg:</strong>
                    KSh ${cake.prices["1"].toLocaleString()}
                </p>

                <p>
                    <strong>2 Kg:</strong>
                    KSh ${cake.prices["2"].toLocaleString()}
                </p>

                <p>
                    <strong>3 Kg:</strong>
                    KSh ${cake.prices["3"].toLocaleString()}
                </p>

            </div>

            <button
                type="button"
                onclick="selectCake('${cake.name}')">
                Order This Cake
            </button>

        `;

        menu.appendChild(card);


        /* Dropdown option */

        const option = document.createElement("option");

        option.value = cake.name;
        option.textContent = cake.name;

        flavourSelect.appendChild(option);

    });

}


/* =========================================================
   SELECT CAKE
   ========================================================= */

function selectCake(cakeName) {

    const flavour = document.getElementById("cakeFlavour");
    const customize = document.getElementById("customize");

    if (flavour) {
        flavour.value = cakeName;
    }

    if (customize) {
        customize.scrollIntoView({
            behavior: "smooth"
        });
    }

}


/* =========================================================
   CURRENT CAKE ORDER
   ========================================================= */

let currentCakeOrder = null;


/* =========================================================
   CALCULATE CAKE PRICE
   ========================================================= */

function calculateCake() {

    const flavour =
        document.getElementById("cakeFlavour").value;

    const size =
        document.getElementById("cakeSize").value;

    const frosting =
        Number(document.getElementById("frosting").value);

    const result =
        document.getElementById("priceResult");

    const addButton =
        document.getElementById("addCakeToOrderBtn");


    if (!flavour) {

        result.innerHTML =
            "<p>Please choose a cake flavour.</p>";

        addButton.style.display = "none";

        return;
    }


    if (!size) {

        result.innerHTML =
            "<p>Please choose a cake size.</p>";

        addButton.style.display = "none";

        return;
    }


    const selectedCake =
        cakes.find(function(cake) {
            return cake.name === flavour;
        });


    if (!selectedCake) {
        return;
    }


    const cakePrice =
        selectedCake.prices[size];

    const total =
        cakePrice + frosting;


    currentCakeOrder = {

        name: flavour,

        size: size,

        cakePrice: cakePrice,

        frosting: frosting,

        total: total

    };


    result.innerHTML = `

        <div class="price-box">

            <h3>${flavour}</h3>

            <p>
                Size: ${size} Kg
            </p>

            <p>
                Cake: KSh ${cakePrice.toLocaleString()}
            </p>

            <p>
                Extra frosting:
                KSh ${frosting.toLocaleString()}
            </p>

            <h3>
                Total:
                KSh ${total.toLocaleString()}
            </h3>

        </div>

    `;


    addButton.style.display = "block";

}


/* =========================================================
   ADD CAKE TO ORDER
   ========================================================= */

function addCakeToOrder() {

    if (!currentCakeOrder) {

        alert("Please calculate your cake first.");

        return;
    }


    const orderDetails =
        document.getElementById("orderDetails");


    const frostingText =
        currentCakeOrder.frosting > 0
        ? "Extra frosting"
        : "Standard frosting";


    const cakeText =

        `${currentCakeOrder.name} - ` +
        `${currentCakeOrder.size} Kg - ` +
        `${frostingText} - ` +
        `KSh ${currentCakeOrder.total.toLocaleString()}`;


    if (orderDetails.value.trim() !== "") {

        orderDetails.value +=
            "\n\n" + cakeText;

    } else {

        orderDetails.value =
            cakeText;

    }


    document
        .getElementById("order")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================================
   ORDER COMBO
   ========================================================= */

function orderCombo(name, price, quantityId) {

    const quantityElement =
        document.getElementById(quantityId);


    const quantity =
        Number(quantityElement.value);


    const total =
        price * quantity;


    const orderDetails =
        document.getElementById("orderDetails");


    const comboText =

        `${name} x ${quantity} - ` +
        `KSh ${total.toLocaleString()}`;


    if (orderDetails.value.trim() !== "") {

        orderDetails.value +=
            "\n\n" + comboText;

    } else {

        orderDetails.value =
            comboText;

    }


    document
        .getElementById("order")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================================
   GENERATE ORDER NUMBER
   ========================================================= */

function generateOrderNumber() {

    const randomNumber =
        Math.floor(100000 + Math.random() * 900000);


    return "CCP-" + randomNumber;

}


/* =========================================================
   SEND ORDER
   ========================================================= */

function sendOrder(event) {

    event.preventDefault();


    const name =
        document.getElementById("customerName").value.trim();

    const phone =
        document.getElementById("customerPhone").value.trim();

    const details =
        document.getElementById("orderDetails").value.trim();

    const delivery =
        document.getElementById("deliveryDetails").value.trim();


    const status =
        document.getElementById("orderStatus");

    const confirmation =
        document.getElementById("orderConfirmation");

    const orderNumberElement =
        document.getElementById("orderNumber");

    const submitButton =
        document.getElementById("submitOrderBtn");


    /* Check order details */

    if (!details) {

        status.innerHTML =
            "<p>Please add something to your order.</p>";

        return;
    }


    /* Generate order number */

    const orderNumber =
        generateOrderNumber();


    /* Current Kenya time */

    const orderTime =
        new Date().toLocaleString(
            "en-KE",
            {
                timeZone: "Africa/Nairobi"
            }
        );


    /* Disable button while sending */

    submitButton.disabled = true;

    submitButton.textContent =
        "Sending Order...";


    status.innerHTML =
        "<p>Sending your order...</p>";


    /* =====================================================
       EMAILJS
       ===================================================== */

    emailjs.send(

        "service_catie26",

        "template_qucurhb",

        {

            order_number:
                orderNumber,

            customer_name:
                name,

            customer_phone:
                phone,

            order_details:
                details,

            delivery_details:
                delivery,

            order_time:
                orderTime

        }

    )


    .then(function(response) {

        console.log(
            "SUCCESS!",
            response.status,
            response.text
        );


        /* Save a backup copy */

        const savedOrders =
            JSON.parse(
                localStorage.getItem(
                    "catieCakeOrders"
                )
            ) || [];


        savedOrders.push({

            orderNumber:
                orderNumber,

            customerName:
                name,

            customerPhone:
                phone,

            orderDetails:
                details,

            deliveryDetails:
                delivery,

            orderTime:
                orderTime

        });


        localStorage.setItem(
            "catieCakeOrders",
            JSON.stringify(savedOrders)
        );


        /* Show confirmation */

        status.innerHTML =
            "";


        orderNumberElement.textContent =
            orderNumber;


        confirmation.style.display =
            "block";


        /* Clear form */

        document
            .getElementById("orderForm")
            .reset();


        submitButton.disabled =
            false;


        submitButton.textContent =
            "Place Order";


        confirmation.scrollIntoView({
            behavior: "smooth"
        });

    })


    .catch(function(error) {

        console.error(
            "EMAILJS ERROR:",
            error
        );


        status.innerHTML = `

            <p>
                Sorry, we couldn't send your order.
                Please check your details and try again.
            </p>

        `;


        submitButton.disabled =
            false;


        submitButton.textContent =
            "Place Order";

    });

}


/* =========================================================
   GET SAVED ORDERS
   ========================================================= */

function getOrders() {

    return JSON.parse(
        localStorage.getItem(
            "catieCakeOrders"
        )
    ) || [];

}


/* =========================================================
   START WEBSITE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadCakeMenu();

    }
);