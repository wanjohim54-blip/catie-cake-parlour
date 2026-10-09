/* ==========================================
   CATIE CAKE PARLOUR
   COMPLETE MENU, CART & CHECKOUT
========================================== */

const EMAILJS_PUBLIC_KEY = "A9tOPwagwkrBqO1SQ";
const EMAILJS_SERVICE_ID = "service_catie26";
const EMAILJS_TEMPLATE_ID = "template_qucurhb";
const CART_STORAGE_KEY = "catieCakeCart";

/* ==========================================
   ALL 23 CAKE FLAVOURS AND PRICES
========================================== */

const cakes = [
  { name: "Black Forest", prices: { "0.5": 1200, "1": 1850, "2": 3200, "3": 4190 }, image: "photo-1578985545062-69928b1d9587" },
  { name: "White Forest", prices: { "0.5": 1200, "1": 1850, "2": 3000, "3": 3800 }, image: "photo-1563729784474-d77dbb933a9e" },
  { name: "Red Velvet", prices: { "0.5": 1200, "1": 1850, "2": 3200, "3": 4190 }, image: "photo-1586788680434-30d324b2d5e8" },
  { name: "Passion", prices: { "0.5": 1200, "1": 1850, "2": 3200, "3": 4100 }, image: "photo-1535141192574-5d4897c12636" },
  { name: "Vanilla", prices: { "0.5": 1200, "1": 1699, "2": 3000, "3": 4000 }, image: "photo-1464349095431-e9a21285b5f3" },
  { name: "Passion Forest", prices: { "0.5": 1200, "1": 1850, "2": 3400, "3": 4200 }, image: "photo-1558301211-0d8c8ddee6ec" },
  { name: "Strawberry", prices: { "0.5": 1200, "1": 1600, "2": 3000, "3": 4150 }, image: "photo-1565958011703-44f9829ba187" },
  { name: "Banana", prices: { "0.5": 1200, "1": 1600, "2": 3000, "3": 4150 }, image: "photo-1578985545062-69928b1d9587" },
  { name: "Oreo", prices: { "0.5": 1200, "1": 1900, "2": 3600, "3": 4200 }, image: "photo-1606890737304-57a1ca8a5b62" },
  { name: "Caramel", prices: { "0.5": 1200, "1": 1700, "2": 3200, "3": 4200 }, image: "photo-1542826438-bd32f43d626f" },
  { name: "Coconut", prices: { "0.5": 1200, "1": 1899, "2": 3400, "3": 4200 }, image: "photo-1571115177098-24ec42ed204d" },
  { name: "Cookie & Cream", prices: { "0.5": 1199, "1": 1899, "2": 3400, "3": 4200 }, image: "photo-1606313564200-e75d5e30476c" },
  { name: "Rich Fruit", prices: { "0.5": 1499, "1": 2200, "2": 3800, "3": 5000 }, image: "photo-1519869325930-281384150729" },
  { name: "Blueberry", prices: { "0.5": 1300, "1": 1820, "2": 3200, "3": 4200 }, image: "photo-1464195244916-405fa0a82545" },
  { name: "Light Fruit Cake", prices: { "0.5": 1300, "1": 1999, "2": 3000, "3": 4200 }, image: "photo-1578985545062-69928b1d9587" },
  { name: "Choc Fudge", prices: { "0.5": 1200, "1": 1950, "2": 2900, "3": 3800 }, image: "photo-1606313564200-e75d5e30476c" },
  { name: "Mocha Cake", prices: { "0.5": 1700, "1": 2200, "2": 3900, "3": 5000 }, image: "photo-1578985545062-69928b1d9587" },
  { name: "Orange Cake", prices: { "0.5": 1099, "1": 1600, "2": 3000, "3": 3800 }, image: "photo-1488477181946-6428a0291777" },
  { name: "Pinacolada", prices: { "0.5": 1499, "1": 2300, "2": 3400, "3": 4490 }, image: "photo-1562777717-dc6984f65a63" },
  { name: "Mint Cake", prices: { "0.5": 1200, "1": 1800, "2": 3000, "3": 5000 }, image: "photo-1578985545062-69928b1d9587" },
  { name: "Carrot Cake", prices: { "0.5": 1200, "1": 1999, "2": 3200, "3": 5000 }, image: "photo-1621303837174-89787a7d4729" },
  { name: "Lemon Cake", prices: { "0.5": 1100, "1": 1700, "2": 3200, "3": 4200 }, image: "photo-1519869325930-281384150729" },
  { name: "Irish Coffee Cake", prices: { "0.5": 1500, "1": 2200, "2": 3900, "3": 5000 }, image: "photo-1578985545062-69928b1d9587" }
];

/* ==========================================
   OTHER PRODUCTS AND PRICES
========================================== */

const CUPCAKE_BOX_PRICE = 600;
const CAKE_SLICE_PRICE = 200;

const cupcakeFlavours = [
  "Passion",
  "Piña Colada",
  "Vanilla"
];

const otherTreats = [
  {
    id: "small-combo",
    name: "Small Combo Box",
    description: "A small box of mandazi and samosas.",
    price: 400,
    emoji: "🥟"
  },
  {
    id: "large-combo",
    name: "Large Combo Box",
    description: "A large box of mandazi and samosas.",
    price: 1000,
    emoji: "🥟"
  }
];

/* ==========================================
   GENERAL HELPERS
========================================== */

function money(amount) {
  return "KSh " + Number(amount).toLocaleString("en-KE");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function imageURL(photoId) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=700&q=80`;
}

function productImage(photoId, alt, emoji = "🍰") {
  if (!photoId) {
    return `<div class="product-image-fallback" role="img" aria-label="${escapeHTML(alt)}">${emoji}</div>`;
  }

  return `
    <img class="product-image"
      src="${imageURL(photoId)}"
      alt="${escapeHTML(alt)}"
      loading="lazy"
      onerror="this.onerror=null;this.outerHTML='<div class=&quot;product-image-fallback&quot;>🍰</div>';">
  `;
}

function quantityOptions(id, label = "items", maximum = 20) {
  return `
    <label for="${id}">Quantity</label>
    <select id="${id}">
      ${Array.from({ length: maximum }, (_, index) => index + 1)
        .map(quantity => `
          <option value="${quantity}">
            ${quantity} ${label}
          </option>
        `).join("")}
    </select>
  `;
}

/* ==========================================
   CAKE CATALOGUE
========================================== */

function loadCakeMenu() {
  const container = document.getElementById("cake-menu");
  if (!container) return;

  container.innerHTML = cakes.map((cake, index) => `
    <article class="cake-card product-card">
      ${productImage(cake.image, cake.name + " cake")}

      <div class="product-content">
        <h3>${escapeHTML(cake.name)}</h3>
        <p class="product-description">
          Freshly prepared for your special moments.
        </p>

        <div class="price-list">
          ${Object.entries(cake.prices).map(([size, price]) => `
            <div class="price-row">
              <span>${size} kg</span>
              <strong>${money(price)}</strong>
            </div>
          `).join("")}
        </div>

        <div class="product-controls">
          <div>
            <label for="cake-size-${index}">Choose cake size</label>
            <select id="cake-size-${index}">
              <option value="0.5">0.5 kg</option>
              <option value="1" selected>1 kg</option>
              <option value="2">2 kg</option>
              <option value="3">3 kg</option>
            </select>
          </div>

          <div>
            <label for="cake-frosting-${index}">Choose frosting</label>
            <select id="cake-frosting-${index}">
              <option value="0">Standard frosting — included</option>
              <option value="400">Extra frosting (+KSh 400)</option>
            </select>
          </div>

          <div class="price-row">
            <span>Selected price</span>
            <strong id="cake-price-${index}">
              ${money(cake.prices["1"])}
            </strong>
          </div>

          <button class="btn" type="button"
            onclick="addCakeToCart(${index})">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  `).join("");

  cakes.forEach((cake, index) => {
    const sizeSelect = document.getElementById(`cake-size-${index}`);
    const frostingSelect = document.getElementById(`cake-frosting-${index}`);

    function updatePrice() {
      const amount = cake.prices[sizeSelect.value]
        + Number(frostingSelect.value);

      document.getElementById(`cake-price-${index}`).textContent =
        money(amount);
    }

    sizeSelect.addEventListener("change", updatePrice);
    frostingSelect.addEventListener("change", updatePrice);
  });
}

/* ==========================================
   MIXED CUPCAKE BOX
   KSH 600 PER BOX
========================================== */

function loadCupcakes() {
  const container = document.getElementById("cupcake-menu");
  if (!container) return;

  container.innerHTML = `
    <article class="treat-card product-card">
      ${productImage(
        "photo-1519869325930-281384150729",
        "Mixed cupcake box"
      )}

      <div class="product-content">
        <h3>Mixed Cupcake Box</h3>
        <p>
          A delicious mixed box featuring Passion, Piña Colada and Vanilla.
        </p>

        <p class="product-description">
          Flavours: ${cupcakeFlavours.join(", ")}.
        </p>

        <p class="treat-price">${money(CUPCAKE_BOX_PRICE)} per box</p>

        <div class="product-controls">
          <div>
            <label for="cupcake-quantity">Number of boxes</label>
            <select id="cupcake-quantity">
              ${[1, 2, 3, 4, 5, 6, 10, 15, 20].map(quantity => `
                <option value="${quantity}">
                  ${quantity} box${quantity === 1 ? "" : "es"}
                </option>
              `).join("")}
            </select>
          </div>

          <div class="price-row">
            <span>Selected total</span>
            <strong id="cupcake-selected-total">${money(CUPCAKE_BOX_PRICE)}</strong>
          </div>

          <button class="btn" type="button" onclick="addCupcakeBoxesToCart()">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  `;

  document.getElementById("cupcake-quantity")
    .addEventListener("change", updateCupcakePrice);
}

function updateCupcakePrice() {
  const quantity = Number(
    document.getElementById("cupcake-quantity").value
  );

  document.getElementById("cupcake-selected-total").textContent =
    money(quantity * CUPCAKE_BOX_PRICE);
}

function addCupcakeBoxesToCart() {
  const quantity = Number(
    document.getElementById("cupcake-quantity").value
  );

  addItemToCart({
    key: "mixed-cupcake-box",
    name: "Mixed Cupcake Box",
    details: "Passion, Piña Colada and Vanilla",
    price: CUPCAKE_BOX_PRICE,
    quantity,
    type: "cupcakes"
  });

  showOrderStatus("Mixed cupcake box added to your cart.", "success");
}

/* ==========================================
   CAKE SLICES AND COMBO BOXES
========================================== */

function loadOtherTreats() {
  const container = document.getElementById("other-treats");
  if (!container) return;

  const slicesCard = `
    <article class="treat-card product-card">
      ${productImage(
        "photo-1563729784474-d77dbb933a9e",
        "Cake slices"
      )}

      <div class="product-content">
        <h3>Cake Slices</h3>
        <p>Choose the cake flavour you would like to enjoy.</p>
        <p class="treat-price">${money(CAKE_SLICE_PRICE)} per slice</p>

        <div class="product-controls">
          <div>
            <label for="slice-flavour">Choose flavour</label>
            <select id="slice-flavour">
              ${cakes.map(cake => `
                <option value="${escapeHTML(cake.name)}">
                  ${escapeHTML(cake.name)}
                </option>
              `).join("")}
            </select>
          </div>

          <div>
            ${quantityOptions("slice-quantity", "slice(s)", 20)}
          </div>

          <div class="price-row">
            <span>Selected total</span>
            <strong id="slice-selected-total">${money(CAKE_SLICE_PRICE)}</strong>
          </div>

          <button class="btn" type="button" onclick="addCakeSlicesToCart()">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  `;

  const comboCards = otherTreats.map(item => `
    <article class="treat-card product-card">
      ${productImage(null, item.name, item.emoji)}

      <div class="product-content">
        <h3>${escapeHTML(item.name)}</h3>
        <p>${escapeHTML(item.description)}</p>
        <p class="treat-price">${money(item.price)} per box</p>

        <div class="product-controls">
          <div>
            <label for="${item.id}-quantity">Number of boxes</label>
            <select id="${item.id}-quantity">
              ${[1, 2, 3, 4, 5, 6, 10, 15, 20].map(quantity => `
                <option value="${quantity}">
                  ${quantity} box${quantity === 1 ? "" : "es"}
                </option>
              `).join("")}
            </select>
          </div>

          <div class="price-row">
            <span>Selected total</span>
            <strong id="${item.id}-total">${money(item.price)}</strong>
          </div>

          <button class="btn" type="button"
            onclick="addComboToCart('${item.id}')">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  `).join("");

  container.innerHTML = slicesCard + comboCards;

  document.getElementById("slice-quantity")
    .addEventListener("change", updateSlicePrice);

  document.getElementById("slice-flavour")
    .addEventListener("change", updateSlicePrice);

  otherTreats.forEach(item => {
    document.getElementById(`${item.id}-quantity`)
      .addEventListener("change", () => updateComboPrice(item));
  });
}

function updateSlicePrice() {
  const quantity = Number(
    document.getElementById("slice-quantity").value
  );

  document.getElementById("slice-selected-total").textContent =
    money(quantity * CAKE_SLICE_PRICE);
}

function addCakeSlicesToCart() {
  const flavour = document.getElementById("slice-flavour").value;
  const quantity = Number(
    document.getElementById("slice-quantity").value
  );

  addItemToCart({
    key: `cake-slice-${flavour}`,
    name: `${flavour} Cake Slices`,
    details: `${flavour} flavour · ${money(CAKE_SLICE_PRICE)} each`,
    price: CAKE_SLICE_PRICE,
    quantity,
    type: "cake-slice"
  });

  showOrderStatus(`${quantity} ${flavour} cake slice(s) added to your cart.`, "success");
}

function updateComboPrice(item) {
  const quantity = Number(
    document.getElementById(`${item.id}-quantity`).value
  );

  document.getElementById(`${item.id}-total`).textContent =
    money(quantity * item.price);
}

function addComboToCart(id) {
  const item = otherTreats.find(treat => treat.id === id);
  if (!item) return;

  const quantity = Number(
    document.getElementById(`${item.id}-quantity`).value
  );

  addItemToCart({
    key: item.id,
    name: item.name,
    details: `${money(item.price)} per box`,
    price: item.price,
    quantity,
    type: "combo"
  });

  showOrderStatus(`${quantity} ${item.name.toLowerCase()} added to your cart.`, "success");
}

/* ==========================================
   SHOPPING CART
========================================== */

let cart = loadSavedCart();

function loadSavedCart() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(CART_STORAGE_KEY) || "[]"
    );

    if (!Array.isArray(saved)) return [];

    return saved.filter(item =>
      item &&
      typeof item.name === "string" &&
      Number.isFinite(Number(item.price)) &&
      Number.isFinite(Number(item.quantity)) &&
      Number(item.price) >= 0 &&
      Number(item.quantity) > 0
    ).map(item => ({
      ...item,
      price: Number(item.price),
      quantity: Number(item.quantity)
    }));
  } catch (error) {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.warn("Cart could not be saved in this browser.");
  }
}

function addItemToCart(item) {
  if (
    !item ||
    !Number.isFinite(item.price) ||
    !Number.isFinite(item.quantity) ||
    item.price < 0 ||
    item.quantity < 1
  ) return;

  const existing = cart.find(cartItem => cartItem.key === item.key);

  if (existing) {
    existing.quantity += item.quantity;
  } else {
    cart.push(item);
  }

  saveCart();
  renderCart();
}

function addCakeToCart(index) {
  const cake = cakes[index];
  if (!cake) return;

  const size = document.getElementById(`cake-size-${index}`).value;
  const frosting = Number(
    document.getElementById(`cake-frosting-${index}`).value
  );

  addItemToCart({
    key: `cake-${index}-${size}-${frosting}`,
    name: cake.name,
    details: `${size} kg · ${frosting ? "Extra frosting" : "Standard frosting"}`,
    price: cake.prices[size] + frosting,
    quantity: 1,
    type: "cake"
  });

  showOrderStatus(`${cake.name} added to your cart.`, "success");
}

function changeQuantity(index, change) {
  if (!cart[index]) return;

  cart[index].quantity += change;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
  renderCart();
}

function removeCartItem(index) {
  if (!cart[index]) return;

  cart.splice(index, 1);
  saveCart();
  renderCart();
}

function clearCart() {
  if (!cart.length) return;

  if (!window.confirm("Are you sure you want to clear your cart?")) {
    return;
  }

  cart = [];
  saveCart();
  renderCart();
}

function getCartTotal() {
  return cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

function getCartQuantity() {
  return cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
}

function renderCart() {
  const container = document.getElementById("cartItems");
  if (!container) return;

  const count = document.getElementById("cartCount");
  const subtotal = document.getElementById("cartSubtotal");
  const total = document.getElementById("cartTotal");
  const checkoutSummary = document.getElementById("checkoutSummary");
  const checkoutTotal = document.getElementById("checkoutTotal");
  const checkoutBtn = document.getElementById("checkoutBtn");

  if (count) count.textContent = getCartQuantity();

  if (!cart.length) {
    container.innerHTML = `
      <p class="empty-cart">
        Your cart is empty. Add something delicious from our menu!
      </p>
    `;
  } else {
    container.innerHTML = cart.map((item, index) => `
      <div class="cart-item">
        <div>
          <h3>${escapeHTML(item.name)}</h3>
          <p>${escapeHTML(item.details || "")}</p>

          <div class="cart-line-actions">
            <div class="quantity-control">
              <button type="button"
                aria-label="Decrease quantity"
                onclick="changeQuantity(${index}, -1)">−</button>
              <span>${item.quantity}</span>
              <button type="button"
                aria-label="Increase quantity"
                onclick="changeQuantity(${index}, 1)">+</button>
            </div>

            <button type="button" class="remove-item"
              onclick="removeCartItem(${index})">
              Remove
            </button>
          </div>
        </div>

        <div class="cart-item-price">
          ${money(item.price * item.quantity)}
        </div>
      </div>
    `).join("");
  }

  const amount = getCartTotal();

  if (subtotal) subtotal.textContent = money(amount);
  if (total) total.textContent = money(amount);
  if (checkoutTotal) checkoutTotal.textContent = money(amount);

  if (checkoutSummary) {
    checkoutSummary.textContent = cart.length
      ? cart.map(item =>
          `${item.quantity} × ${item.name} (${item.details}) = ${money(item.price * item.quantity)}`
        ).join("\n")
      : "Your cart is empty.";
  }

  if (checkoutBtn) checkoutBtn.disabled = cart.length === 0;
}

/* ==========================================
   CHECKOUT
========================================== */

function goToCheckout() {
  if (!cart.length) {
    showOrderStatus("Please add items to your cart first.", "error");
    document.getElementById("cart").scrollIntoView({ behavior: "smooth" });
    return;
  }

  renderCart();
  document.getElementById("checkout").scrollIntoView({ behavior: "smooth" });
}

function makeOrderNumber() {
  return `CCP-${Date.now().toString().slice(-7)}-${Math.floor(100 + Math.random() * 900)}`;
}

function showOrderStatus(message, type = "") {
  const status = document.getElementById("orderStatus");
  if (!status) return;

  status.textContent = message;
  status.className = `order-status ${type}`;

  if (type === "success" || type === "error") {
    status.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

/* ==========================================
   SEND ORDER EMAIL WITH EMAILJS
========================================== */

let orderSubmitting = false;

async function sendOrder(event) {
  event.preventDefault();

  if (orderSubmitting) return;

  if (!cart.length) {
    showOrderStatus("Your cart is empty. Add products before placing your order.", "error");
    return;
  }

  const customerName = document.getElementById("customerName").value.trim();
  const customerPhone = document.getElementById("customerPhone").value.trim();
  const deliveryMethod = document.getElementById("deliveryMethod").value;
  const deliveryDetails = document.getElementById("deliveryDetails").value.trim();
  const specialInstructions = document.getElementById("specialInstructions").value.trim();

  if (!customerName || !customerPhone || !deliveryMethod || !deliveryDetails) {
    showOrderStatus("Please fill in all required fields.", "error");
    return;
  }

  if (typeof emailjs === "undefined") {
    showOrderStatus("The email service did not load. Check your connection and refresh the page.", "error");
    return;
  }

  const submitButton = document.getElementById("submitOrderBtn");
  const confirmation = document.getElementById("orderConfirmation");
  const orderNumberElement = document.getElementById("orderNumber");

  orderSubmitting = true;

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = "Submitting Order...";
  }

  if (confirmation) confirmation.hidden = true;

  showOrderStatus("Sending your order to Catie Cake Parlour...", "loading");

  const orderNumber = makeOrderNumber();
  const total = getCartTotal();

  const orderDetails = cart.map(item =>
    `${item.quantity} x ${item.name} (${item.details}) = ${money(item.price * item.quantity)}`
  ).join("\n") + `\n\nORDER TOTAL: ${money(total)}`;

  const fullDeliveryDetails =
    `Method: ${deliveryMethod}\n` +
    `Address / Collection Details: ${deliveryDetails}\n` +
    `Special Instructions: ${specialInstructions || "None provided"}`;

  const templateParams = {
    order_number: orderNumber,
    customer_name: customerName,
    customer_phone: customerPhone,
    order_details: orderDetails,
    delivery_details: fullDeliveryDetails,
    order_time: new Date().toLocaleString("en-KE", {
      timeZone: "Africa/Nairobi",
      dateStyle: "medium",
      timeStyle: "short"
    }),
    total_amount: money(total)
  };

  try {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (orderNumberElement) {
      orderNumberElement.textContent = `Order reference: ${orderNumber}`;
    }

    if (confirmation) confirmation.hidden = false;

    showOrderStatus(
      "Your order was emailed successfully. Catie Cake Parlour will contact you to confirm it.",
      "success"
    );

    cart = [];
    saveCart();
    renderCart();

    document.getElementById("orderForm").reset();

    confirmation.scrollIntoView({ behavior: "smooth", block: "center" });

  } catch (error) {
    console.error("EmailJS order submission failed:", error);

    showOrderStatus(
      "We could not send your order email. Your cart has been kept. Please check your connection and try again.",
      "error"
    );

  } finally {
    orderSubmitting = false;

    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = "Place Order";
    }
  }
}

/* ==========================================
   START WEBSITE
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  try {
    if (typeof emailjs !== "undefined") {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    }
  } catch (error) {
    console.warn("EmailJS initialization issue:", error);
  }

  loadCakeMenu();
  loadCupcakes();
  loadOtherTreats();
  renderCart();

  const year = document.getElementById("currentYear");
  if (year) year.textContent = new Date().getFullYear();
});