# -Online-Pharmacy

#  Health Zone Pharmacy

Online Pharmacy web application built with **HTML, CSS, JavaScript, PHP, and MySQL**.  
The project simulates a real e-commerce system with user authentication, shopping cart, checkout, and admin dashboard.

---

##  Features

###  User System
- User registration & login
- Session-based authentication (PHP)
- Admin vs customer roles

### Shopping System
- Product listing with categories
- Search & filtering system
- Add to cart functionality
- Quantity update / remove items
- Persistent cart (MySQL-based)

###  Checkout System
- Shipping information form
- Payment form (simulation)
- Order creation
- Order items storage
- Cart clearing after purchase

###  Admin Panel
- Add / edit / delete products
- View orders
- View users
- Dashboard statistics (revenue, totals)

---

## 🧱 Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- PHP (backend logic)
- MySQL (database)
- AJAX (fetch API)
- Font Awesome

---

## Project Structure

```bash
HealthZonePharmacy/
│
├── index.html
├── styles.css
├── script.js
│
├── db.php
├── login.php
├── register.php
├── addToCart.php
├── getCart.php
├── removeFromCart.php
├── updateCart.php
├── checkout.php
├── getProducts.php
│
├── database.sql
└── README.md
