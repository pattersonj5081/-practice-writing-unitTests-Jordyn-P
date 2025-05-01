
const shoppingCart = require('../cart.js'); //Load Cart file 

 
//addItem Tests  
describe("addItem", function(){

//Positive Case 
test("should add a new item with a valid name and quantity to the cart",
    function(){
        cart = []
        shoppingCart.addItem(cart,"milk", 6)
        expect(cart).toEqual(["milk","milk","milk","milk","milk","milk"])
   });

//later refractoring: might want to make sure the item is always lowercase


//Negative Case 
test("Should not add an item with a negative quantity and return an empty array",
    function(){
        cart = []
        shoppingCart.addItem(cart,"milk",-6)
        expect(cart).toEqual([])
    }); 
//later refractoring: might want to add a console.log for this situation, as it still runs. 


//Edge Case 
test("Should be able to add large quantities",
    function(){
        cart= []
        shoppingCart.addItem(cart,"milk",100)
        expect(cart.length).toBe(100)
    }); 
}); 


//removeItem() Tests
describe("removeItem", function(){

    //Positive Case 
    test("should remove an existing item from the cart",
        function(){
            cart = ["milk","eggs","butter"]
            shoppingCart.removeItem(cart,"butter")
            expect(cart).toEqual(["milk","eggs"])
        });
//later refreactoring: make sure the case of the item is lowercase so this still works 



 //Negative Case    
    test("should not remove an item not in the cart",
        function(){
            cart = ["cheese","jelly"]
            shoppingCart.removeItem(cart,"milk")
            expect(cart).toEqual(["cheese","jelly"])
        }); 
//later refractoring: make a console.log to let the person know this, and that their cart remains unchanged. 


//Edge Case    
    test("Should be able remove the last item in the cart",
        function(){
            cart= ["milk"]
            shoppingCart.removeItem(cart,"milk")
            expect(cart).toEqual([])

        });
        
//later refractoring: maybe add a conosle.log that lets the user know that the cart is empty.
    }); 




//getTotalItems() Tests
describe("getTotalItems", function(){
   
   
    //Positive Case 
    test("should calculate the total number of items correctly",
        function(){
            cart = ["milk","eggs","butter"]
            shoppingCart.getTotalItems(cart)
            expect(cart.length).toBe(3)
       });
 
       
    //Negative Case    
    test("should be able to handle an empty cart",
        function(){
            cart = []
            shoppingCart.getTotalItems(cart)
            expect(cart.length).toBe(0)

        }); 

    //later refractoring: add a console.log to let the person know their cart is empty.  
 


    //Edge Case    
    test("calculate large quantities",
        function(){
            shoppingCart.addItem(cart,"milk",1000)
            shoppingCart.getTotalItems(cart)
            expect(cart.length).toEqual(1000)

        }); 
    }); 