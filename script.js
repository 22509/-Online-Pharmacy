document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }


  const medicines = [
    {
      id: 1,
      name: "Ibuprofen 200mg",
      brand: "Advil",
      image: "https://pics.walgreens.com/prodimg/563815/900.jpg",
      price: 8.99,
      category: "Pain Relief",
      dosage: "Tablet",
      prescription: false,
    },
    {
      id: 2,
      name: "Loratadine 10mg",
      brand: "Claritin",
      image:
        "https://res.cloudinary.com/oxford-online-pharmacy/image/upload/w_1000,h_1000/loratine-10mg-tablet-30-crescent.jpg",
      price: 14.99,
      category: "Allergy",
      dosage: "Tablet",
      prescription: false,
    },
    {
      id: 3,
      name: "Vitamin D3 1000IU",
      brand: "Nature Made",
      image:
        "https://galen.bg/media/catalog/product/cache/4587ace2ea33d73df121dcde1c6b054a/9/7-53504-46173/vitamin-d3-1000-iu-25-ug-h-365-meki-kapsuli-nutravita-.jpg",
      price: 9.49,
      category: "Vitamins",
      dosage: "Softgel",
      prescription: false,
    },
    {
      id: 4,
      name: "Amoxicillin 500mg",
      brand: "Generic",
      image:
        "https://pokupharmagh.com/wp-content/uploads/2017/07/AmoxicillinCapsules-750x688.png",
      price: 22.5,
      category: "Prescription",
      dosage: "Capsule",
      prescription: true,
    },
    {
      id: 5,
      name: "Acetaminophen 500mg",
      brand: "Tylenol",
      image:
        "https://kingsrxandwellness.com/wp-content/uploads/2020/12/aceta-500.jpg",
      price: 7.99,
      category: "Pain Relief",
      dosage: "Caplet",
      prescription: false,
    },
    {
      id: 6,
      name: "Vitamin C 1000mg",
      brand: "Nature's Bounty",
      image: "https://cdn6.aptekapromahon.com/0033984032804a1.jpg",
      price: 12.99,
      category: "Vitamins",
      dosage: "Caplet",
      prescription: false,
    },
    
    {
      id: 7,
      name: "Retinol Cream",
      brand: "CeraVe",
      image:
        "https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/skincare/serums/resurfacing-retinol-serum/retinol/desktop-700x785/retinol-packshot-with-carton-desktop-700x785-v1.jpg?rev=f86170d06b104c3c85818ba712b4140a&w=900&hash=21B1A918C751D662A0023845EA721EB9",
      price: 18.99,
      category: "Skincare",
      dosage: "Cream",
      prescription: false,
    },
    {
      id: 8,
      name: "Hyaluronic Acid Serum",
      brand: "The Ordinary",
      image:
        "https://cdn.notinoimg.com/social/the_ordinary/769915233506_01-o/hyaluronic-acid-2-b5___250117.jpg",
      price: 12.5,
      category: "Skincare",
      dosage: "Serum",
      prescription: false,
    },
    {
      id: 9,
      name: "Sunscreen SPF 50",
      brand: "La Roche-Posay",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHYuNDgGVAaZuw5asmTyC_eAsJN2SE_maIQ&s",
      price: 22.75,
      category: "Skincare",
      dosage: "Lotion",
      prescription: false,
    },
   
    {
      id: 10,
      name: "Whey Protein Powder",
      brand: "Optimum Nutrition",
      image:
        "https://www.silabg.com/uf/product/176_pm_2270.jpg",
      price: 34.99,
      category: "Fitness",
      dosage: "Powder",
      prescription: false,
    },
    {
      id: 11,
      name: "Pre-Workout Energizer",
      brand: "C4",
      image:
        "https://nutrafit.bg/image/catalog/data/347591_web_CAN%20Cellucor%20C4%20Original%20Blue%20Razz_Front_Tub.jpg",
      price: 29.99,
      category: "Fitness",
      dosage: "Powder",
      prescription: false,
    },
    {
      id: 12,
      name: "BCAA Amino Acids",
      brand: "XTEND",
      image:
        "https://www.silabg.com/uf/product/10043_pm_bc.jpg",
      price: 26.5,
      category: "Fitness",
      dosage: "Powder",
      prescription: false,
    },

    {
      id: 13,
      name: "Blood Pressure Monitor",
      brand: "Omron",
      image:
        "https://m.media-amazon.com/images/I/71cmS2aR41L._UF894,1000_QL80_.jpg",
      price: 49.99,
      category: "Equipment",
      dosage: "Device",
      prescription: false,
    },
    {
      id: 14,
      name: "Digital Thermometer",
      brand: "iProven",
      image:
        "https://iproven.com/cdn/shop/products/ami_dtr-1221a_image1_v3-0_us_m.jpg?v=1617363788",
      price: 15.99,
      category: "Equipment",
      dosage: "Device",
      prescription: false,
    },
    {
      id: 15,
      name: "Nebulizer Machine",
      brand: "Philips",
      image:
        "https://images.philips.com/is/image/philipsconsumer/12a6f60dc5d249008d88a96800f81c9b?$pnglarge$&wid=1250",
      price: 89.99,
      category: "Equipment",
      dosage: "Device",
      prescription: true,
    },
    {
      id: 16,
      name: "Glucometer Kit",
      brand: "Contour Next",
      image:
        "https://m.media-amazon.com/images/I/81xtKyeFcBL.jpg",
      price: 32.5,
      category: "Equipment",
      dosage: "Kit",
      prescription: false,
    },
  ];

  let cart = [];
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
  let adminUsers = JSON.parse(localStorage.getItem("adminUsers")) || [
    {
      email: "admin@healthzone.com",
      password: "admin123",
      name: "System Administrator",
    },
  ];

  function initApp() {
    renderProducts(medicines);
    loadCart();
    updateCartCount();
    setupEventListeners();
    setupSearch();
    setupCategoryFilters();
    setupCheckoutProcess();

    if (!currentUser) {
      updateLoginState();
    } else {
      updateLoginState();
    }
  }

  function setupEventListeners() {
 
    const loginBtn = document.getElementById("loginBtn");
    if (loginBtn) {
      loginBtn.addEventListener("click", function () {
        if (currentUser) {
          handleLogout();
        } else {
          showLoginModal();
        }
      });
    }


    const cartBtn = document.getElementById("cartBtn");
    if (cartBtn) {
      cartBtn.addEventListener("click", function () {
        renderCartItems();
        document.getElementById("cartModal").style.display = "block";
      });
    }


    document.querySelectorAll(".close").forEach(button => {
      button.addEventListener("click", function() {
        this.closest(".modal").style.display = "none";
      });
    });


    window.addEventListener("click", function(event) {
      if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
      }
    });

  
    const showRegister = document.getElementById("showRegister");
    if (showRegister) {
      showRegister.addEventListener("click", showRegisterModal);
    }

    const showLogin = document.getElementById("showLogin");
    if (showLogin) {
      showLogin.addEventListener("click", showLoginModal);
    }

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", handleLogin);
    }

    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
      registerForm.addEventListener("submit", handleRegister);
    }


    const checkoutBtn = document.getElementById("checkoutBtn");
    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", handleCheckout);
    }


    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        this.classList.add("active");
        filterProducts(this.getAttribute("data-filter"));
      });
    });


    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) {
      sortSelect.addEventListener("change", function () {
        sortProducts(this.value);
      });
    }

    
    const addProductBtn = document.getElementById("addProductBtn");
    if (addProductBtn) {
      addProductBtn.addEventListener("click", addNewProduct);
    }


    const addProductForm = document.getElementById("addProductForm");
    if (addProductForm) {
      addProductForm.addEventListener("submit", function (e) {
        e.preventDefault();
        handleAddProduct();
      });
    }


    const clearSearchBtn = document.getElementById("clearSearchBtn");
    if (clearSearchBtn) {
      clearSearchBtn.addEventListener("click", clearSearch);
    }

    const shopNowBtn = document.getElementById("shopNowBtn");
    if (shopNowBtn) {
      shopNowBtn.addEventListener("click", function() {
        renderProducts(medicines);
        document.querySelectorAll(".category-card").forEach(card => {
          card.classList.remove("active");
        });
        document.querySelector('.category-card[data-category="all"]').classList.add("active");
      });
    }
  }

  function loadCart() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      cart = JSON.parse(savedCart);
    }
  }

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function updateCartCount() {
    const countElement = document.getElementById("cartCount");
    if (countElement) {
      const count = cart.reduce((total, item) => total + item.quantity, 0);
      countElement.textContent = count;
    }
  }

  function addToCart(product) {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
    }

    saveCart();
    updateCartCount();
    showCartNotification(product.name);
  }

  function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCartItems();
  }

  function updateCartItemQuantity(productId, newQuantity) {
    const item = cart.find((item) => item.id === productId);
    if (item) {
      if (newQuantity > 0) {
        item.quantity = newQuantity;
      } else {
        removeFromCart(productId);
      }
    }
    saveCart();
    updateCartCount();
    renderCartItems();
  }

  function showCartNotification(productName) {
    const notification = document.createElement("div");
    notification.className = "cart-notification";
    notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            ${productName} added to cart
        `;
    
    const notificationArea = document.getElementById("notificationArea");
    if (notificationArea) {
      notificationArea.appendChild(notification);
    }

    setTimeout(() => {
      notification.classList.add("show");
    }, 10);

    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        if (notificationArea && notification.parentNode) {
          notificationArea.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }

  function renderCartItems() {
    const cartItemsContainer = document.getElementById("cartItems");
    const cartTotalElement = document.getElementById("cartTotal");

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "<p>Your cart is empty</p>";
      if (cartTotalElement) cartTotalElement.textContent = "0.00";
      return;
    }

    cartItemsContainer.innerHTML = "";

    let total = 0;

    cart.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      const cartItemElement = document.createElement("div");
      cartItemElement.className = "cart-item";
      cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="decrease-quantity" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase-quantity" data-id="${item.id}">+</button>
                </div>
                <i class="fas fa-trash cart-item-remove" data-id="${item.id}"></i>
            `;

      cartItemsContainer.appendChild(cartItemElement);
    });

    if (cartTotalElement) cartTotalElement.textContent = total.toFixed(2);

   
    document.querySelectorAll(".decrease-quantity").forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = parseInt(this.getAttribute("data-id"));
        const item = cart.find((item) => item.id === id);
        if (item) {
          updateCartItemQuantity(id, item.quantity - 1);
        }
      });
    });

    document.querySelectorAll(".increase-quantity").forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = parseInt(this.getAttribute("data-id"));
        const item = cart.find((item) => item.id === id);
        if (item) {
          updateCartItemQuantity(id, item.quantity + 1);
        }
      });
    });

    document.querySelectorAll(".cart-item-remove").forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = parseInt(this.getAttribute("data-id"));
        removeFromCart(id);
      });
    });
  }

  function showLoginModal() {
    const loginModal = document.getElementById("loginModal");
    if (loginModal) {
      loginModal.style.display = "block";
      const loginEmail = document.getElementById("loginEmail");
      if (loginEmail) loginEmail.focus();
    }
  }

  function showRegisterModal() {
    const loginModal = document.getElementById("loginModal");
    const registerModal = document.getElementById("registerModal");

    if (loginModal) loginModal.style.display = "none";
    if (registerModal) {
      registerModal.style.display = "block";
      const registerName = document.getElementById("registerName");
      if (registerName) registerName.focus();
    }
  }

  function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

     const adminUser = adminUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (adminUser) {
      currentUser = adminUser;
      localStorage.setItem("currentUser", JSON.stringify(adminUser));
      document.getElementById("loginModal").style.display = "none";
      updateLoginState();
      showAdminPanel();
      return;
    }

 
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      currentUser = user;
      localStorage.setItem("currentUser", JSON.stringify(user));
      document.getElementById("loginModal").style.display = "none";
      updateLoginState();
    } else {
      alert("Invalid email or password");
    }
  }

  function isAdmin(user) {
    return adminUsers.some((admin) => admin.email === user.email);
  }

  function handleRegister(e) {
    e.preventDefault();

    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("registerConfirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (users.some((user) => user.email === email)) {
      alert("Email already registered");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    currentUser = newUser;
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    alert("Registration successful! You are now logged in.");
    document.getElementById("registerModal").style.display = "none";
    updateLoginState();
  }

  function handleLogout() {
    currentUser = null;
    localStorage.removeItem("currentUser");
    updateLoginState();
    alert("You have been logged out.");
  }

function updateLoginState() {
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", handleLogout);
}

const adminBtn = document.getElementById("adminBtn");
if (adminBtn) {
  adminBtn.addEventListener("click", showAdminPanel);
}
  
  if (!loginBtn || !logoutBtn || !adminBtn) return;

  if (currentUser) {
    loginBtn.style.display = "none";
    logoutBtn.style.display = "flex";
    
   
    if (isAdmin(currentUser)) {
      adminBtn.style.display = "flex";
    } else {
      adminBtn.style.display = "none";
    }
  } else {
    loginBtn.style.display = "flex";
    logoutBtn.style.display = "none";
    adminBtn.style.display = "none";
  }
}

  function addAdminButton() {
    let adminBtn = document.getElementById("adminBtn");
    if (!adminBtn) {
      adminBtn = document.createElement("button");
      adminBtn.id = "adminBtn";
      adminBtn.className = "admin-btn";
      adminBtn.innerHTML = '<i class="fas fa-cog"></i> Admin';
      adminBtn.addEventListener("click", showAdminPanel);

      const headerControls = document.querySelector(".header-controls");
      if (headerControls) {
        headerControls.appendChild(adminBtn);
      }
    }
  }

  function handleCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty");
    return;
  }

  document.getElementById("cartModal").style.display = "none";
  document.getElementById("checkoutModal").style.display = "block";
}

  function renderProducts(products, searchTerm = "", isExactMatch = false) {
    const productsContainer = document.getElementById("productGrid");
    if (!productsContainer) return;

    productsContainer.innerHTML = "";

    if (products.length === 0) {
      productsContainer.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>No products found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                </div>
            `;
      return;
    }

    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.className = "product-card";

      if (isExactMatch && (product.name.toLowerCase() === searchTerm || product.brand.toLowerCase() === searchTerm)) {
        productElement.classList.add("exact-match");
      }

      const productName = searchTerm
        ? highlightSearchTerm(product.name, searchTerm, isExactMatch)
        : product.name;
      const productBrand = searchTerm
        ? highlightSearchTerm(product.brand, searchTerm, isExactMatch)
        : product.brand;

      productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">${productName}</h3>
                    <p class="product-brand">${productBrand}</p>
                    <div class="product-details">
                        <span>${product.category}</span>
                        <span>${product.dosage}</span>
                    </div>
                    ${product.prescription
                      ? '<span class="prescription-badge required">RX</span>'
                      : '<span class="prescription-badge">OTC</span>'
                    }
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <button class="add-to-cart" data-id="${product.id}">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            `;

      productsContainer.appendChild(productElement);
    });

  
    document.querySelectorAll(".add-to-cart").forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = parseInt(this.getAttribute("data-id"));
        const product = medicines.find((item) => item.id === id);
        if (product) addToCart(product);
      });
    });
  }

  function filterProducts(category) {
    if (category === "all") {
      renderProducts(medicines);
    } else {
      const filtered = medicines.filter((medicine) => medicine.category === category);
      renderProducts(filtered);
    }
  }

  function sortProducts(sortBy) {
    const sorted = [...medicines];

    switch (sortBy) {
      case "popular":
        break;
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    renderProducts(sorted);
  }

  function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const icon = themeToggle.querySelector("i");
    if (document.body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  }

  function setupSearch() {
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");

    if (searchInput && searchBtn) {

      searchBtn.addEventListener("click", performSearch);


      searchInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          performSearch();
        }
      });
    }
  }

  function performSearch() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.trim().toLowerCase();
    const searchResultsHeader = document.getElementById("searchResultsHeader");
    const categorySection = document.querySelector(".category-section");

    if (searchTerm === "") {

      renderProducts(medicines);
      searchResultsHeader.style.display = "none";
      if (categorySection) categorySection.style.display = "block";
      return;
    }

  
    if (categorySection) categorySection.style.display = "none";


    searchResultsHeader.style.display = "flex";

 
    const exactMatch = medicines.filter(
      (product) =>
        product.name.toLowerCase() === searchTerm ||
        product.brand.toLowerCase() === searchTerm
    );

    if (exactMatch.length > 0) {
      renderProducts(exactMatch, searchTerm, true);
      updateSearchResultsCount(exactMatch.length, searchTerm, true);
      return;
    }


    const partialMatch = medicines.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.dosage.toLowerCase().includes(searchTerm)
      );
    });

    renderProducts(partialMatch, searchTerm, false);
    updateSearchResultsCount(partialMatch.length, searchTerm, false);
  }

  function updateSearchResultsCount(count, searchTerm, isExactMatch) {
    const searchResultsHeader = document.getElementById("searchResultsHeader");
    let countElement = searchResultsHeader.querySelector(".search-results-count");

    if (!countElement) {
      countElement = document.createElement("div");
      countElement.className = "search-results-count";
      searchResultsHeader.insertBefore(countElement, searchResultsHeader.querySelector("button"));
    }

    if (count === 0) {
      countElement.textContent = `No results found for "${searchTerm}"`;
    } else if (isExactMatch) {
      countElement.textContent = `Found ${count} exact match${count !== 1 ? "es" : ""} for "${searchTerm}"`;
    } else {
      countElement.textContent = `Found ${count} result${count !== 1 ? "s" : ""} for "${searchTerm}"`;
    }
  }

  function clearSearch() {
    const searchInput = document.getElementById("searchInput");
    const searchResultsHeader = document.getElementById("searchResultsHeader");
    const categorySection = document.querySelector(".category-section");

    searchInput.value = "";
    renderProducts(medicines);
    searchResultsHeader.style.display = "none";

   
    if (categorySection) categorySection.style.display = "block";
  }


  function setupCategoryFilters() {
   
    const categoryCards = document.querySelectorAll(".category-card");
    categoryCards.forEach((card) => {
      card.addEventListener("click", function () {
        const category = this.getAttribute("data-category");
        filterProductsByCategory(category);

        
        categoryCards.forEach((c) => c.classList.remove("active"));
        this.classList.add("active");

     
        document.getElementById("searchInput").value = "";
      });
    });


    const navLinks = document.querySelectorAll(".main-nav a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const category = this.getAttribute("data-category");
        if (category && category !== "all") {
          filterProductsByCategory(category);

       
          navLinks.forEach((l) => l.classList.remove("active"));
          this.classList.add("active");

      
          document.getElementById("searchInput").value = "";
        } else if (category === "all") {
          renderProducts(medicines);

          
          navLinks.forEach((l) => l.classList.remove("active"));
          this.classList.add("active");

       
          document.getElementById("searchInput").value = "";
        }
      });
    });

 
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const filter = this.getAttribute("data-filter");
        filterProductsByCategory(filter);

      
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");

  
        document.getElementById("searchInput").value = "";
      });
    });
  }

  function filterProductsByCategory(category) {
    if (category === "all") {
      renderProducts(medicines);
      return;
    }

    const filtered = medicines.filter((medicine) => medicine.category === category);
    renderProducts(filtered);
  }


  function setupCheckoutProcess() {
    const checkoutBtn = document.getElementById("checkoutBtn");
    const toPaymentBtn = document.getElementById("toPaymentBtn");
    const backToShippingBtn = document.getElementById("backToShippingBtn");
    const paymentForm = document.getElementById("paymentForm");
    const continueShoppingBtn = document.getElementById("continueShoppingBtn");

    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", function () {
        if (cart.length === 0) {
          alert("Your cart is empty");
          return;
        }
        document.getElementById("cartModal").style.display = "none";
        document.getElementById("checkoutModal").style.display = "block";
      });
    }

    if (toPaymentBtn) {
      toPaymentBtn.addEventListener("click", function () {
        const shippingForm = document.getElementById("shippingForm");
        if (shippingForm.checkValidity()) {

          document.getElementById("shippingStep").classList.remove("active");
          document.getElementById("paymentStep").classList.add("active");

          document.querySelector('.step[data-step="1"]').classList.remove("active");
          document.querySelector('.step[data-step="2"]').classList.add("active");
        } else {
          shippingForm.reportValidity();
        }
      });
    }

    if (backToShippingBtn) {
      backToShippingBtn.addEventListener("click", function () {
 
        document.getElementById("paymentStep").classList.remove("active");
        document.getElementById("shippingStep").classList.add("active");

    
        document.querySelector('.step[data-step="2"]').classList.remove("active");
        document.querySelector('.step[data-step="1"]').classList.add("active");
      });
    }

    if (paymentForm) {
      paymentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        document.getElementById("paymentStep").classList.remove("active");
        document.getElementById("confirmationStep").classList.add("active");

      
        document.querySelector('.step[data-step="2"]').classList.remove("active");
        document.querySelector('.step[data-step="3"]').classList.add("active");

       
        const orderNumber = "HZ-" + Math.floor(10000 + Math.random() * 90000);
        document.getElementById("orderNumber").textContent = orderNumber;

        
        saveOrder(orderNumber);
      });
    }

    if (continueShoppingBtn) {
      continueShoppingBtn.addEventListener("click", function () {
       
        document.getElementById("checkoutModal").style.display = "none";

        
        resetCheckoutProcess();

    
        cart = [];
        saveCart();
        updateCartCount();
      });
    }

 
    const cardNumberInput = document.getElementById("cardNumber");
    if (cardNumberInput) {
      cardNumberInput.addEventListener("input", function (e) {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 16) value = value.substring(0, 16);

       
        value = value.replace(/(\d{4})/g, "$1 ").trim();
        e.target.value = value;
      });
    }

 
    const expDateInput = document.getElementById("expDate");
    if (expDateInput) {
      expDateInput.addEventListener("input", function (e) {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 4) value = value.substring(0, 4);

        if (value.length > 2) {
          value = value.substring(0, 2) + "/" + value.substring(2);
        }
        e.target.value = value;
      });
    }
  }

  function saveOrder(orderNumber) {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const shippingForm = document.getElementById("shippingForm");

    const order = {
      id: orderNumber,
      date: new Date().toISOString(),
      items: cart,
      total: cart.reduce((total, item) => total + item.price * item.quantity, 0),
      customer: {
        name: `${document.getElementById("firstName").value} ${document.getElementById("lastName").value}`,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        zipCode: document.getElementById("zipCode").value,
        phone: document.getElementById("phone").value,
      },
      status: "Completed",
    };

    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));
  }

  function resetCheckoutProcess() {
    
    document.getElementById("shippingForm").reset();
    document.getElementById("paymentForm").reset();

  
    document.getElementById("shippingStep").classList.add("active");
    document.getElementById("paymentStep").classList.remove("active");
    document.getElementById("confirmationStep").classList.remove("active");

    document.querySelector('.step[data-step="1"]').classList.add("active");
    document.querySelector('.step[data-step="2"]').classList.remove("active");
    document.querySelector('.step[data-step="3"]').classList.remove("active");
  }

  function highlightSearchTerm(text, searchTerm, isExactMatch = false) {
    if (!searchTerm) return text;

    if (isExactMatch && text.toLowerCase() === searchTerm) {
      return `<span class="highlight">${text}</span>`;
    }

    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.replace(regex, '<span class="highlight">$1</span>');
  }

 
  function showAdminPanel() {
    if (!currentUser || !isAdmin(currentUser)) {
      alert("Access denied. Admin privileges required.");
      return;
    }

    const modal = document.getElementById("adminModal");
    modal.style.display = "block";

    loadAdminDashboard();
    loadAdminProducts();
    loadAdminOrders();
    loadAdminUsers();

    setupAdminTabs();
  }

  function setupAdminTabs() {
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabBtns.forEach((b) => b.classList.remove("active"));
        tabPanes.forEach((p) => p.classList.remove("active"));

        btn.classList.add("active");

        const tabName = btn.getAttribute("data-tab");
        document.getElementById(`${tabName}-tab`).classList.add("active");
      });
    });
  }

  function loadAdminDashboard() {
    const products = medicines;
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const users = JSON.parse(localStorage.getItem("users")) || [];

    document.getElementById("totalProducts").textContent = products.length;
    document.getElementById("totalOrders").textContent = orders.length;
    document.getElementById("totalUsers").textContent = users.length;

    const totalRevenue = orders.reduce((total, order) => total + order.total, 0);
    document.getElementById("totalRevenue").textContent = `$${totalRevenue.toFixed(2)}`;

    const recentOrders = orders.slice(-5).reverse();
    const recentOrdersList = document.getElementById("recentOrdersList");
    recentOrdersList.innerHTML = "";

    if (recentOrders.length === 0) {
      recentOrdersList.innerHTML = "<p>No orders yet.</p>";
      return;
    }

    recentOrders.forEach((order) => {
      const orderDate = new Date(order.date).toLocaleDateString();
      const orderEl = document.createElement("div");
      orderEl.className = "order-item";
      orderEl.innerHTML = `
                <div>
                    <strong>Order #${order.id}</strong>
                    <p>${order.items.length} items | ${orderDate}</p>
                </div>
                <div>
                    <strong>$${order.total.toFixed(2)}</strong>
                    <p>${order.status || "Processing"}</p>
                </div>
            `;
      recentOrdersList.appendChild(orderEl);
    });
  }

  function loadAdminProducts() {
    const products = medicines;
    const productsList = document.getElementById("productsList");

    if (products.length === 0) {
      productsList.innerHTML = "<p>No products found.</p>";
      return;
    }

    let tableHTML = `
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Dosage</th>
                        <th>Prescription</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
        `;

    products.forEach((product) => {
      tableHTML += `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>$${product.price.toFixed(2)}</td>
                    <td>${product.category}</td>
                    <td>${product.dosage}</td>
                    <td>${product.prescription ? "Yes" : "No"}</td>
                    <td>
                        <button class="action-btn edit-btn" data-id="${product.id}">Edit</button>
                        <button class="action-btn delete-btn" data-id="${product.id}">Delete</button>
                    </td>
                </tr>
            `;
    });

    tableHTML += `</tbody></table>`;
    productsList.innerHTML = tableHTML;

    document.querySelectorAll(".edit-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const productId = btn.getAttribute("data-id");
        editProduct(productId);
      });
    });

    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const productId = btn.getAttribute("data-id");
        deleteProduct(productId);
      });
    });
  }

  function loadAdminOrders() {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const ordersList = document.getElementById("ordersList");

    if (orders.length === 0) {
      ordersList.innerHTML = "<p>No orders found.</p>";
      return;
    }

    let tableHTML = `
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Items</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
        `;

    orders.forEach((order) => {
      const orderDate = new Date(order.date).toLocaleDateString();
      tableHTML += `
                <tr>
                    <td>#${order.id}</td>
                    <td>${order.customerEmail || order.customer?.email || "N/A"}</td>
                    <td>${orderDate}</td>
                    <td>${order.items.length} items</td>
                    <td>$${order.total.toFixed(2)}</td>
                    <td>${order.status || "Processing"}</td>
                    <td>
                        <button class="action-btn edit-btn" data-id="${order.id}">View</button>
                    </td>
                </tr>
            `;
    });

    tableHTML += `</tbody></table>`;
    ordersList.innerHTML = tableHTML;
  }

  function loadAdminUsers() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const usersList = document.getElementById("usersList");

    if (users.length === 0) {
      usersList.innerHTML = "<p>No users found.</p>";
      return;
    }

    let tableHTML = `
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Orders</th>
                    </tr>
                </thead>
                <tbody>
        `;

    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    users.forEach((user) => {
      const userOrders = orders.filter(
        (order) =>
          order.customerEmail === user.email ||
          (order.customer && order.customer.email === user.email)
      ).length;

      tableHTML += `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${userOrders}</td>
                </tr>
            `;
    });

    tableHTML += `</tbody></table>`;
    usersList.innerHTML = tableHTML;
  }

  function addNewProduct() {
    const modal = document.getElementById("addProductModal");
    modal.style.display = "block";
  }

  function handleAddProduct() {
    const name = document.getElementById("productName").value;
    const price = parseFloat(document.getElementById("productPrice").value);
    const description = document.getElementById("productDescription").value;
    const image = document.getElementById("productImage").value;
    const category = document.getElementById("productCategory").value;
    const stock = parseInt(document.getElementById("productStock").value);

    if (!name || isNaN(price) || !category || isNaN(stock)) {
      alert("Please fill all required fields with valid values");
      return;
    }

    const newProduct = {
      id: medicines.length > 0 ? Math.max(...medicines.map((p) => p.id)) + 1 : 1,
      name,
      brand: "Generic",
      image: image || "https://via.placeholder.com/150",
      price,
      category,
      dosage: "Tablet",
      prescription: category === "Prescription",
      stock,
    };

    medicines.push(newProduct);
    alert("Product added successfully!");

    document.getElementById("addProductModal").style.display = "none";
    document.getElementById("addProductForm").reset();

    loadAdminProducts();
  }

  function editProduct(productId) {
    const product = medicines.find((p) => p.id === parseInt(productId));

    if (!product) {
      alert("Product not found!");
      return;
    }

    const newName = prompt("Enter new product name:", product.name);
    if (newName === null) return;

    const newPrice = parseFloat(prompt("Enter new price:", product.price));
    if (isNaN(newPrice)) return;

    product.name = newName;
    product.price = newPrice;

    alert("Product updated successfully!");
    loadAdminProducts();
  }

  function deleteProduct(productId) {
    if (!confirm("Are you sure you want to delete this product?")) return;

    const index = medicines.findIndex((p) => p.id === parseInt(productId));
    if (index !== -1) {
      medicines.splice(index, 1);
      alert("Product deleted successfully!");
      loadAdminProducts();
    }
  }

  initApp();
});
