const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

/* ========================= */
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Obtén una referencia al botón de "Confirmar Compra"
const confirmButton = document.getElementById("confirm-button");

// Obtén una referencia al formulario y al contenedor del carrito
const cartForm = document.querySelector(".cart-form");
const cartProducts = document.querySelector(".cart-products");

// Agrega un controlador de eventos para mostrar el formulario
confirmButton.addEventListener("click", function () {
    cartForm.style.display = "block";
});

// Agrega un controlador de eventos para el envío del formulario
const purchaseForm = document.getElementById("purchase-form");
purchaseForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Realiza cálculos relacionados con la compra (puedes personalizar esta parte)
    const total = calcularTotalCompra();

    // Muestra el total al usuario
    alert(`Total de la compra: $${total.toFixed(2)}`);

    // Restablece el formulario
    purchaseForm.reset();

    // Limpia el carrito (puedes personalizar esta parte)
    cartProducts.innerHTML = "";
    cartForm.style.display = "none";
});

// Función para calcular el total de la compra
function calcularTotalCompra() {
    const cartProducts = document.querySelectorAll(".cart-product");
    let total = 0;

    cartProducts.forEach((product) => {
        const price = parseFloat(product.querySelector(".precio-producto-carrito").textContent.replace("$", ""));
        const quantity = parseInt(product.querySelector(".cantidad-producto-carrito").textContent);
        total += price * quantity;
    });

    return total;
}


// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});

// Funcion para mostrar  HTML
const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
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