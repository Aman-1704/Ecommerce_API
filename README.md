# Ecommerce_API



# ABOUT
This is an API for an ecommerce platform admin to manage product inventory 

STEPS TO USE THE API:
1) run "npm init" command on terminal in this projects directory
2) start the server using node index.js
3) Open postman
4) Make a GET request on 127.0.0.1:6050/products
5) The products should be visible

STEPS TO CREATE A NEW PRODUCT: 
1) start the server using node index.js
2) Open postman
3) put 127.0.0.1:6050/products/create as the url. 
4) Select Body tab below the url textarea and then select x-www-form-urlencoded
5) Add name & quantity as the keys and set the desired values for the keys.
6) Make a POST request.
8) The product is created. Check it out by making a GET request at 127.0.0.1:6050/products
   
STEPS TO DELETE A PRODUCT:
1) copy the object id of the product you want to delete.
2) add the id after 127.0.0.1:6050/products/
3) Make a DELETE request.
4) You will recieve a message saying deleted successfully.

STEPS TO UPDATE THE QUANTITY OF A PRODUCT:
1) Copy the object id of the product whose quantity you want to update
2) Put the id after 127.0.0.1:6050/products/
3) After putting the id add /update_quantity/?number={x} in the url where x is the number by which you want to increase or decrease the quantity.
4) the url should be looking like 127.0.0.1:6050/products/{id}/update_quantity/?number={x}
5) Make a POST request and you should get a message containing the update product


# TECHSTACK
Node.Js, MongoDB
