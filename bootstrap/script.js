 // An array of objects to hold our products
        var shoppingCart = [];

        // The total price of all products in our shopping cart
        var totalPrice = 0;

//        // The array that holds the pricing for our products
//        var productPrices = [];
//        productPrices["Apple"] = 5;
//        productPrices["Orange"] = 3;

        // A functiont that turns a number into a currency format
        function getCurrency(value){
            return value = '$' + value.toFixed(2);
        }

        // Gets all elements with a class of product-image
        var productListeners = document.getElementsByClassName("add-to-cart");

        // Loop through the elements with a class of product-image and add a click event listener
        for (var i = 0; i < productListeners.length; i++) {
            productListeners[i].addEventListener('click', addToCart, false);
        }

        // Function to add the product to the cart
        function addToCart(){
            var productName = this.getAttribute('data-product-name');

            // Loops through the shoppingCart array and sees if the product exists
            var productInCart = false;
            for(var i = 0; i < shoppingCart.length; i++) {
                if (shoppingCart[i].name == productName) {
                    // Lets us know that this item exists
                    productInCart = true;
                    // Adds an item to the cart
                    shoppingCart[i].quantity ++;
                    break;
                }
            }

            // If the item does not exist in the cart already, we add it here
            if(!productInCart){
                shoppingCart.push({name: productName, quantity: 1, price: 5});
            }

            // Adds the price of the product to totalPrice
            totalPrice += productPrices[productName];

            var cartMessage = "";

            // Adds all of the products to the shopping cart message
            for(i = 0; i < shoppingCart.length; i++){
                if(i > 0) cartMessage += ' and';
                cartMessage += ` has ${shoppingCart[i].quantity} ${shoppingCart[i].name}(s) `;
            }

            // Adds total price to the cart message
            cartMessage += ` for a total cost of ${getCurrency(totalPrice)}`;

            // Writes the cart message to the screen
            document.getElementById('shoppingBasketMessage').innerHTML = cartMessage;
        }
    var lowerSlider = document.querySelector('#lower');
var  upperSlider = document.querySelector('#upper');

document.querySelector('#two').value=upperSlider.value;
document.querySelector('#one').value=lowerSlider.value;

var  lowerVal = parseInt(lowerSlider.value);
var upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4;
        if (lowerVal == lowerSlider.min) {
        upperSlider.value = 4;
        }
    }
    document.querySelector('#two').value=this.value
};

lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (lowerVal > upperVal - 4) {
        upperSlider.value = lowerVal + 4;
        if (upperVal == upperSlider.max) {
            lowerSlider.value = parseInt(upperSlider.max) - 4;
        }
    }
    document.querySelector('#one').value=this.value
}; 