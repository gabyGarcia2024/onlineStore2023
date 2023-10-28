 // Esta función añade un producto al carrito de compras
 function addToCart(name, price) {
    // Crear un elemento li con el nombre y el precio del producto
    let li = document.createElement("li");
    li.textContent = name + " - $" + price;

    // Añadir el elemento li al elemento ul con id "items"
    let items = document.getElementById("items");
    items.appendChild(li);

    // Actualizar el elemento p con id "total" con el nuevo total
    let total = document.getElementById("total");
    let currentTotal = Number(total.textContent.split("$")[1]);
    let newTotal = currentTotal + price;
    total.textContent = "Total: $" + newTotal;
}

//------------------------------------------------------------------------------
// Esta función muestra el formulario de compra al hacer clic en el botón de hacer compra
function showForm() {
    // Obtener el elemento form con id "buy-form"
    let form = document.getElementById("buy-form");
    // Cambiar la clase del elemento form a "flex flex-col gap-2 mt-4" para mostrarlo
    form.className = "flex flex-col gap-2 mt-4";
}


// Esta función valida los datos del formulario y muestra un mensaje al hacer clic en el botón de confirmar compra
function confirmPurchase() {
    // Obtener los valores de los elementos input del formulario
    let cardNumber = document.getElementById("card-number").value;
    let cardPassword = document.getElementById("card-password").value;
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let address = document.getElementById("address").value;

    // Verificar que los valores sean válidos
    if (cardNumber == 12345 && cardPassword == 1234 && name && surname && address) {
        // Mostrar un mensaje de éxito con el nombre y el total de la compra
        let total = document.getElementById("total").textContent;
        alert(`Gracias por tu compra, ${name}. Tu total es ${total}.`);
    } else {
        // Mostrar un mensaje de error con los datos inválidos
        alert(`Los datos que ingresaste son inválidos. Por favor, verifica tu número de tarjeta, tu contraseña y tus datos personales.`);
    }
}

// Limpiar HTML
rowProduct.innerHTML = '';

let total = 0;
let totalOfProducts = 0;

allProducts.forEach(product => {
    const containerProduct = document.createElement('div');
    containerProduct.classList.add('cart-product');

    containerProduct.innerHTML = `
        <div class="info-cart-product">
            <span class="cantidad-producto-carrito">${product.quantity}</span>
            <p class="titulo-producto-carrito">${product.title}</p>
            <span class="precio-producto-carrito">${product.price}</span>
        </div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="icon-close"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    `;

    rowProduct.append(containerProduct);

    total =
        total + parseInt(product.quantity * product.price.slice(1));
    totalOfProducts = totalOfProducts + product.quantity;
});

valorTotal.innerText = `$${total}`;
countProducts.innerText = totalOfProducts;
};