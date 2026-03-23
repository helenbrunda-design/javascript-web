console.clear();
// Étape 1
console.log("Bienvenue dans la boutique en ligne !");
console.log(process.version);

// Étape 2
const shopName = "TechStore"; // string
let itemCount = 0; // number
let isOpen = true; // boolean
let specialOffer = null; // null
let nextDelivery; // undefined
const maxStock = 1000n; // bigint

console.log(shopName); // string
console.log(itemCount); // number
console.log(isOpen); // boolean
console.log(specialOffer); // null
console.log(nextDelivery); // undefined
console.log(maxStock); // bigint

// Étape 3

const product1 = {
  id: 1,
  name: "Clavier mécanique",
  price: 79.99,
  stock: 15,
  category: "Périphériques",
};

const product2 = {
  id: 2,
  name: "Souris gaming",
  price: 49.99,
  stock: 23,
  category: "Périphériques",
};

const product3 = {
  id: 3,
  name: "Écran 24 pouces",
  price: 199.99,
  stock: 8,
  category: "Ecrans",
};

const product4 = {
  id: 4,
  name: "Casque audio",
  price: 89.99,
  stock: 12,
  category: "Audio",
};

const products = [product1, product2, product3, product4];

const cart = [];

console.log(products.length);
console.log(products[0]);

let totalProducts = 0;

products.forEach((product) => (totalProducts += product.stock));

console.log("Stock total:", totalProducts);

// Étape 4
function checkType(value) {
  console.log("Valeur à vérifier :", value);
  const typeValue =
    value === null ? null : Array.isArray(value) ? "array" : typeof value;
  console.log("Type :", typeValue);

  //   const typeValue = typeof value;
  //   let retValue;

  //   switch (typeValue) {
  //     case "object":
  //       if (Array.isArray(value)) {
  //         retValue = "array";
  //       } else {
  //         retValue = "object";
  //       }
  //       break;
  //     default:
  //       if (value === null) {
  //         retValue = null;
  //       } else {
  //         retValue = typeValue;
  //       }
  //       break;
  //   }

  //   console.log("Type :", retValue);
}

checkType(1234);
checkType("1234");
checkType(product1);
checkType(products);
checkType(null);
checkType(undefined);

// Étape 5

const displayShopInfo = () => {
  let message = "La boutique est ouverte";
  console.log(message, shopName);
};

displayShopInfo();
// console.log(message)

// if (true) {
//     let discount = 10;
// }
// console.log(discount);
//
let ordersQty = 0;

const calculateTotal = (price, quantity, discount = 0) => {
  let total = price * quantity;

  if (discount) {
    if (discount < 0 || discount > 100) {
      console.error("La réduction renseignée est invalide.");
      return null;
    }

    total -= total * (discount / 100);
  }

  ordersQty += 1;
  return total;
};

console.log(calculateTotal(79.99, 2)); // 159.98
console.log(calculateTotal(79.99, 2, 10)); // 143.98 (avec 10% de réduction)
console.log(calculateTotal(79.99, 2, 110));

console.log("Commandes passés :", ordersQty);

// const product = products.findIndex((product) => product.name === "Écras");

// console.log("Produit trouvé à l'index :", product)
// console.log(products[2])

// Étape 7
// function canAddToCart(product, quantity) {}
// const canAddToCart = (product, quantity) => {
//   return product.stock > 0 && quantity <= product.stock && quantity > 0;
// };

const canAddToCart = (product, quantity) => {
  if (quantity <= 0) {
    console.log("Quantité insuffisante");
    return false;
  } else if (product.stock < 0 || quantity >= product.stock) {
    console.log("Stock insuffisant");
    return false;
  }

  console.log("Le produit peut être ajouté au panier");
  return true;
};

console.log(canAddToCart(products[0], 5)); // true
console.log(canAddToCart(products[0], 20)); // false
console.log(canAddToCart(products[0], 0)); // false

// Étape 8
// const getShippingCost = (total) => {
//   if (total >= 50) {
//     return 0;
//   } else if (total >= 20 && total < 50) {
//     return 5.99;
//   }

//   return 8.99;
// };

const getShippingCost = (total) => {
  return total >= 50 ? 0 : total >= 20 ? 5.99 : 8.99;
};

console.log(getShippingCost(60)); // 0
console.log(getShippingCost(35)); // 5.99
console.log(getShippingCost(15)); // 8.99

// Étape 9

const getCategoryIcon = (category) => {
  switch (category) {
    case "Périphériques":
      return "⌨️";
    case "Audio":
      return "🎧";
    case "Ecrans":
      return "📺";
    case "Accessoires":
      return "🎒";
    default:
      return "🥡";
  }
};

console.log(getCategoryIcon("Périphériques"));
console.log(getCategoryIcon("Audio"));
console.log(getCategoryIcon("Ecrans"));
console.log(getCategoryIcon("Accessoires"));
console.log(getCategoryIcon("Autre"));

// Étape 10
// const displayCatalog = () => {
//   for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     console.log(`[${product.id}] ${product.name} - ${product.price}€ (Stock: ${product.stock})`);
//   }
// }

// Étape 11
const displayCatalog = () => {
  products.forEach((product) => {
    console.log(
      `[${product.id}] ${product.name} - ${product.price}€ (Stock: ${product.stock})`,
    );
  });
};

displayCatalog();

// Étape 12
const addToCart = (product, quantity) => {
  if (!canAddToCart(product, quantity)) {
    console.error("Le produit n'a pas été ajouté au panier");
    return;
  }

  product.stock -= quantity;

  if (product.stock < 5) {
    console.warn("Attention, stock faible pour ce produit !");
  }

  cart.push({ product, quantity });
  console.log("Le produit a bien été rajouté au panier.");
};

const removeFromCart = (productId) => {
  const cartItemId = cart.findIndex(
    (cartItem) => cartItem.product.id === productId,
  );

  // Si index non trouvé, cartItemId = -1 (attention, 0 en js correspond à false donc attention à la condition utilisée)
  if (cartItemId < 0) {
    console.error("Aucun produit de ce type dans le panier.");
    return;
  }

  cart.splice(cartItemId, 1);
  console.log("Produit retiré du panier.");
};

const getCartTotal = () =>
  cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

// Tests
addToCart(products[0], 2);
addToCart(products[1], 1);
console.log("Total panier :", getCartTotal());
removeFromCart(1);
console.log("Total après suppression :", getCartTotal());

// Étape 13
// const findProductById = (id) => {
//   const product = products.find((p) => p.id === id);

//   if (!product) {
//     console.error(`Le produit ${id} n'existe pas.`);
//     return;
//   }

//   return product;
// }
const findProductById = (id) =>
  products.find((product) => product.id === id) ||
  console.error(`Le produit ${id} n'existe pas.`);
const getProductsByCategory = (category) =>
  products.filter((product) => product.category === category) ||
  console.warn("Aucun produit n'est disponible dans cette catégorie.");
const getProductNames = () => products.map((product) => product.name);
const isProductInStock = (id) =>
  products.find((product) => product.id === id)?.stock > 0 ||
  console.error("Le produit n'existe pas.");
const getTotalStock = () =>
  products.reduce((total, product) => total + product.stock, 0);

// Étape 14
const customer = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@gmail.com",
  isVIP: false,
  orders: [],
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

customer.loyaltyPoints = 0;

console.log(customer.getFullName());
console.log("Points de fidélité:", customer.loyaltyPoints);

// Étape 16
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const loadProducts = async () => {
  console.log("Chargement des produits...");
  await wait(2000);
  console.log("Produits chargés !");
  return products;
};

const init = async () => {
  const loadedProducts = await loadProducts();
  console.log(`${loadedProducts.length} produits disponibles`);
  displayCatalog();
};

init();

const promoCodes = [
  {
    code: "ABCD-1234",
    reduction: 20,
    nbOfUses: 0,
    maxUse: 5
  },
  {
    code: "EFGH-5678",
    reduction: 30,
    nbOfUses: 0,
    maxUse: 5
  },
  {
    code: "IJKL-9123",
    reduction: 50,
    nbOfUses: 0,
    maxUse: 5
  },
]