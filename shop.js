console.log("bienvenue dans la boutique!")

//Etape 2
const shopName="TechStore";
let itemCount=0;
let isOpen= true;
let specialOffer=null;
let nextDelivery;
const maxStock= 1000n;

console.log(shopName,typeof shopName);  //"TechShore" "String"
console.log(itemCount,typeof itemCount);  // 0 "number"
console.log(isOpen,typeof isOpen);        // true "boolean"    
console.log(specialOffer,typeof specialOffer);   // null "object"
console.log(nextDelivery,typeof nextDelivery);    // undefined "undefined"
console.log(maxStock,typeof maxStock);         // 1000n "bigint"

const product1= {
    id:1,
    name:"clavier mecanique",
    price:79.99,
    stock:15,
    category: "Péripheriques"
};

//Etape 3
const products =[
     {id: 1, name: "Clavier mécanique", price: 79.99, stock: 15},
     {id: 2, name:"Souris gaming", price: 49.99, stock:23},
     {id: 3, name:"ecran 24 pouces", price: 199.99, stock:8},
     {id: 4,name: "casque audio", price: 89.99, stock:12}
];

let cart=[];

console.log("Nombre de produits disponibles:",products.length)

console.log("premier produit du catalogue:", products[0]);

//Etape 4
function checkType(value) {
    console.log("valeur:", value);

    if (value===null) {
        console.log("type:null");    
    } else if (Array.isArray(value)){
        console.log("type:array");
    } else {
        console.log("type:",typeof value);
    }
    console.log("---");
}

checkType(42);  //nombre
checkType("bonjour");  // chaine
checkType({id:1});  // objet
checkType([1,2,3]);  // array
checkType(null);  //null
checkType(undefined);  // undefined

//Etape 5
const displayShopInfo = () => {
    let message = "La boutique est ouverte";
    console.log(message, shopName);
}

displayShopInfo();
// console.log(message)

// if (true) {
//     let discount = 10;
// }
// console.log(discount);
//
let ordersQty = 0;

//Etape 6
const calculateTotal = (price, quantity, discount = 0) => {
    let total = price * quantity;

    if (discount) {
        if (discount < 0 || discount > 100) {
            console.error("La réduction renseignée est invalide.");
            return null;
        }

        total -= (total * (discount / 100));
    }

    ordersQty += 1;
    return total;
}

console.log(calculateTotal(79.99, 2));        // 159.98
console.log(calculateTotal(79.99, 2, 10));    // 143.98 (avec 10% de réduction)
console.log(calculateTotal(79.99, 2, 110));

console.log("Commandes passés :", ordersQty);

// const product = products.findIndex((product) => product.name === "Écras");

// console.log("Produit trouvé à l'index :", product)
// console.log(products[2])


//ETAPE7
function canAddToCart(product,quantity){
    product.stock>0
    quantity <= product.stock
    quantity > 0
   
  return product.stock > 0 && quantity <= product.stock && quantity >0;

}

console.log(canAddToCart(products[0], 5));   // true
console.log(canAddToCart(products[0], 20));  // false
console.log(canAddToCart(products[0], 0));   // false

//Etape8
function getShippingCost(total){
    if (total>=50){
        return 0;
    }
    else if (total>=20) {
        return 5.99;
    }
    else {
        return 8.99;
    }
}

console.log(getShippingCost(60));  //0 
console.log(getShippingCost(35));  // 5.99
console.log(getShippingCost(15));  //8.99 

//Etape 9
function getCategoryIcon(category){
    switch(category){
      case "peripheriques":
        return  "🖱"
      case "audio":
        return  "🎧"
      case "ecrans":
        return  "🖥"
      case "accessoires":
        return "🎒"
      default:
        return  "📦"     
    }
}

console.log(getCategoryIcon("peripheriques"));  // 🖱
console.log(getCategoryIcon("audio"));  // 🎧

//Etape 10
function displayCatalog(){
    for(let i =0; i< products.length;i++){
     let product=products[i];
     
     let id=i+1;

     // on afiche avec le format demandé: 
    " [ID] Nom - Prix€ (Stock: X)"
       console.log("[+ 1 +]"+ "clavier mecanique" + " - " + 79.99 +"€(Stock:" + 15 +")");
       console.log("[+ 2 +]"+ "souris gaming" + " - " + 49.99 +"€(Stock:" + 23 +")");
   }
}

displayCatalog();

//Etape 11
function displayCatalog(){
    products.forEach(function(product,index){
        let id=index + 1;
       console.log("[+ 1 +]"+ "clavier mecanique" + " - " + 79.99 +"€(Stock:" + 15 +")"); 
    });
}
//on comparaison des deux je préfère la version avec forEach parceque celle-ci est courte, on a donc un gain de temps

//Etape 12
function addToCart(product,quantity){
    cart.push({product:product,quantity:quantity });
}

const removeFromCart=(productId)=>{
    cart=cart.filter((item,index)=>index !== productId);
};

const getCartTotal=()=>cart.reduce((total,item)=> total+(item.product.price*item.quantity),0)

addToCart(products[0], 2); 
addToCart(products[1], 1); 
console.log("Total panier :", getCartTotal()); 
removeFromCart(1); 
console.log("Total après suppression :", getCartTotal()); 

//Etape 13
const getProductsById=(Id)=> products.find((product,index)=> index + 1 === id);
const getProductsBCategory=(category) => products.filter(product=> product.category===category);
const getProductsName=()=> products.map(product=> product.name);
const isProductInStock=()=> products.some((product,index)=> index + 1===id && product.stock>0);
const getTotalStock=()=> products.reduce((total,product)=>total + product.stock, 0);

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

//Etape 15
function addToCart(product, quantity) { 
if (!canAddToCart(product, quantity)) { 
console.error("Impossible d'ajouter au panier : stock insuffisant"); 
   return; 
} 

if (product.stock < 5) { 
console.warn("Attention : stock faible pour ce produit"); 
  } 
  
  cart.push({ product, quantity }); 
console.log(`${product.name} ajouté au panier (x${quantity})`);
}


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

//Etape 17
/**
 * Projet: Gestion dune boutique en ligne(techStore)
 * OBJECTIF: simuler le fonctionnement dun catalogue, d'un panier d'achat, et la gestion
 * client avec des logs de débogage
 */

//Etape 18
function applyPromoCode(code){
  if(code==="PROMO10"){
    activeDiscount=10;
    console.log("code PROMO10 appliqué:10% de reduction!");
  }else {
    console.error("Code promo invalide");
  }
}

function checkout(){
  if(cart.lenght===0){
    console.warn("le panier est vide. impossible de commander");
    return;
  }

  customer.orders.push([...cart]);
  cart=[];
  console.log("commande validée et ajoutée à votre historique")
}