 // Come back to talk about functions with mike

function addItem (cart, item, quantity){    // adds items to the cart and updates the quantity 
   for (i = 0 ; i < quantity ; i++){
      cart.push(item); 
     
   }
   console.log(`the item ${item} has been added to the cart with a quantity of ${quantity}.`); 
   return cart; 
};



function removeItem (cart, item){    // removes item from the cart and updates the quantity 
   index = cart.indexOf(item)
   if (index > -1){
      cart.splice(index, 1); 
   }
   console.log(`the item ${item} has been removed from the cart.`) 
   return cart; 
};

 

 function getTotalItems(cart){  
   totalItems = cart.length                                      //return the total number of items in the cart 
   console.log(`You have a total of ${totalItems} in your cart.`)   
   return cart                                                                              
}; 



module.exports = {addItem, removeItem, getTotalItems}; 