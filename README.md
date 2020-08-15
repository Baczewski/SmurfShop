# OdinSmurfs - smurf accounts React Ecommerce Application

OdinSmurfs is an eCommerce application built on ReactJS and NodeJS as a project for the SoftUni ReactJS Course. It's purpose is to provide different types of smurfs (with BE or with many champions). The application also provides admin functionality where everything can be easily maganged - accept or decline orders, create and modify smurf, ban/unban users.

The application has three levels of accessibility: guest user, administrator and registered user

## Routes
| Route  | Description | Access Level |
| ------------- | ------------- | ------------- |
| /  | Home Page  | All users |
| /about  | About us Page  | All users |
| /shop  | Shop Page  | All users |
| /accounts/:accountType  | Page with accounts of current type  | All users |
| /accounts/:accountType/:id  | Page with details of the selected smurf  | All users |
| /user/cart  | Current user's cart  | Registered only |
| /user/orders  | Current user's orders  | Registered only |
| /create  | Create an account (smurf)  | Administrator |
| /admin/pending-orders  | All pending orders  | Administrator |
| /smurf/edit/:accountType/:id  | Edit page for the selected smurf  | Administrator |
| /users  | All registered users page  | Administrator |
| /login  | Login page  | Guests only |
| /register  | Register page  | Guests only |
    
The already logged in user is authenticated to not only able to see the smurfs in the shop section, he is able to add unlimited quantity of smurfs in his Cart, after successful checkout he can track the status of his own orders. If you add an item in your Cart by mistake, you can remove it. To receive the smurf login information (username and password) - admin should Accept the order.

Administrator has full accessibility, he can add smurfs, edit them if something changes such as level etc... He can see a page with all registered users, by clicking on a button, he can ban/unban people, so they cannot log anymore. If the administrator accepts the specific order, the user that have made the order will receive the smurf login information.

## Usage

**Home page**

route: '/'

Just a welcome page.

**About us**

route: '/about'

A page with some information about our services.

**Shop**

route: '/shop'

A page with three types of accounts: unverified, champion and premium champion accounts.

**Single type of accounts page**

route: '/accounts/:accountType'

A page displaying the current type of accounts, you can filter the accounts by region.

**Single account details page**

route: '/accounts/:accountType/:id'

A page displaying the selected account's details.

*Note!* To access the 'Add to cart' button, you have to be logged in, w/e there will be information displaying this.

**Cart page**

route: '/user/cart'

A page displaying all items that have been added to the cart, you can remove items or just click the 'Checkout' button and the magic happens.

**User orders page**

route: '/user/orders'

A page displaying all orders, made by the current user. If an order is accepted, you will receive the username and password.

**Create account (smurf) page**

route: '/create'

A page where only the admin can create accounts, while choosing between three types of accounts.

**Pending orders page**

route: '/admin/pending-orders'

A page where only admin see all pending orders, he can accept and reject them, depends of his mood.

**Edit account (smurf) page**

route: '/smurf/edit/:accountType/:id'

A page where only admin can modify the current selected smurf.

**All registered users page**

route: '/users'

A page displaying all registered users, information about them and ban/unban button, so don't blame.

**Login page**

route: '/login'

A login page, nothing special.

**Register page**

route: '/register'

A register page, with a surprise - Free RP Button, don't wait, click it. =)

## Run the application

Download the code from github, extract the zip file with WinRar or other PAID software. For both folders you have to open terminal and write: 

    npm install
    
To start the Back-End part, you have to write one more command:

    node index
    
The last thing you have to do is to write this command to start the Front-End part and the site will appear on the browser:

    npm start
