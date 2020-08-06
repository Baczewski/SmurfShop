**eSmurf - smurf accounts React Ecommerce Application**

eSmurf is an eCommerce application built on ReactJS and NodeJS as a project for the SoftUni ReactJS Course. It's purpose is to provide different types of smurfs (with BE or with many champions). The application also provides admin functionality where everything can be easily maganged - accept or decline orders, create and modify smurf, ban/unban users.

The application has three levels of accessibility: guest user, administrator and registered user

**The guest can access the following pages:** 

    homepage
    about us page
    shop page
    smurf details page (certain levels of accessibility)
    register + login pages
    
**The admin can access the following pages:**

    create smurf page
    pending orders page
    edit smurf page
    ban/unban users page
    
**Registered users can access the following pages:**

    cart
    orders he have made
    
The already logged in user is authenticated to not only able to see the smurfs in the shop section, he is able to add unlimited quantity of smurfs in his Cart, after successful checkout he can track the status of his own orders. If you add an item in your Cart by mistake, you can remove it. To receive the smurf login information (username and password) - admin should Accept the order.

Administrator has full accessibility, he can add smurfs, edit them if something changes such as level etc... He can see a page with all registered users, by clicking on a button, he can ban/unban people, so they cannot log anymore. If the administrator accepts the specific order, the user that have made the order will receive the smurf login information.

**When the project is downloaded or cloned, open the terminal/command prompt for both BackEnd and FrontEnd folders and type:**
   
    npm install / npm i

**To start the BackEnd part you should type the following command:**

    node index
  
**To start the FrontEnd part you should type the following command:**

    npm start
  
**The React application will listen on:**

    localhost:3000
