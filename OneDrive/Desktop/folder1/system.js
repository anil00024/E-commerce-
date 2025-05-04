<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Velonil Plant Shop</title>
    <style>
        /* Reset and Base Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        body {
            color: #333;
            background-color: #f9f9f9;
            line-height: 1.6;
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        /* Header Styles */
        header {
            background-color: #fff;
            box-shadow: 0 2px 15px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 5%;
            max-width: 1400px;
            margin: 0 auto;
        }

        .logo {
            font-size: 24px;
            font-weight: 700;
            color: #2e7d32;
        }

        .nav-links {
            display: flex;
            gap: 20px;
        }

        .nav-links a {
            padding: 8px 15px;
            border-radius: 4px;
            transition: background-color 0.3s;
        }

        .nav-links a:hover {
            background-color: #f0f0f0;
        }

        .search-container {
            flex: 1;
            max-width: 500px;
            margin: 0 20px;
            position: relative;
        }

        .search-container input {
            width: 100%;
            padding: 10px 40px 10px 15px;
            border: 1px solid #ddd;
            border-radius: 50px;
            font-size: 14px;
        }

        .search-container button {
            position: absolute;
            right: 5px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            cursor: pointer;
            padding: 5px;
        }

        /* Hero Section Styles */
        .hero-section {
            position: relative;
            height: 500px;
            overflow: hidden;
        }

        .slider {
            width: 100%;
            height: 100%;
            position: relative;
        }

        .slide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            padding: 0 10%;
        }

        .slide.active {
            opacity: 1;
        }

        .slide-content {
            max-width: 500px;
            color: #fff;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
        }

        .slide-content h2 {
            font-size: 42px;
            margin-bottom: 15px;
        }

        .slide-content p {
            font-size: 18px;
            margin-bottom: 20px;
        }

        .btn {
            padding: 12px 24px;
            background-color: #2e7d32;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
            display: inline-block;
        }

        .btn:hover {
            background-color: #1b5e20;
        }

        .btn-outline {
            background-color: transparent;
            border: 2px solid #2e7d32;
            color: #2e7d32;
        }

        .btn-outline:hover {
            background-color: #2e7d32;
            color: white;
        }

        .btn-secondary {
            background-color: #757575;
        }

        .btn-secondary:hover {
            background-color: #616161;
        }

        .slider-controls {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 10px;
        }

        .slider-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: rgba(255,255,255,0.5);
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .slider-dot.active {
            background-color: white;
        }

        .slider-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(255,255,255,0.7);
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            transition: background-color 0.3s;
        }

        .slider-nav:hover {
            background-color: white;
        }

        #prev-slide {
            left: 20px;
        }

        #next-slide {
            right: 20px;
        }

        /* Featured Products Section */
        .featured-products {
            padding: 50px 5%;
            max-width: 1400px;
            margin: 0 auto;
        }

        .section-title {
            font-size: 28px;
            text-align: center;
            margin-bottom: 30px;
            position: relative;
        }

        .section-title:after {
            content: '';
            display: block;
            width: 60px;
            height: 3px;
            background-color: #2e7d32;
            margin: 15px auto 0;
        }

        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 30px;
        }

        .product-card {
            background-color: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s, box-shadow 0.3s;
            cursor: pointer;
        }

        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }

        .product-image-wrapper {
            position: relative;
            padding-top: 100%;
            overflow: hidden;
        }

        .product-image, .product-image-back {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: opacity 0.3s;
        }

        .product-image-back {
            opacity: 0;
        }

        .product-card:hover .product-image {
            opacity: 0;
        }

        .product-card:hover .product-image-back {
            opacity: 1;
        }

        .product-info {
            padding: 15px;
        }

        .product-title {
            font-weight: 600;
            margin-bottom: 5px;
        }

        .product-price {
            color: #2e7d32;
            font-weight: 500;
        }

        /* Product Details Section */
        #product-details {
            padding: 50px 5%;
            max-width: 1200px;
            margin: 0 auto;
            display: none;
        }

        .product-details-container {
            display: flex;
            gap: 40px;
            margin-bottom: 40px;
        }

        .product-gallery {
            flex: 1;
            position: relative;
        }

        #gallery-container {
            width: 100%;
            aspect-ratio: 1/1;
            position: relative;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .gallery-item {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            opacity: 0;
            transition: opacity 0.3s;
        }

        .gallery-item.active {
            opacity: 1;
        }

        .gallery-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(255,255,255,0.7);
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            z-index: 10;
        }

        #prev-image {
            left: 10px;
        }

        #next-image {
            right: 10px;
        }

        #gallery-thumbnails {
            display: flex;
            gap: 10px;
            margin-top: 15px;
        }

        .gallery-thumbnail {
            width: 70px;
            height: 70px;
            border-radius: 4px;
            background-size: cover;
            background-position: center;
            cursor: pointer;
            opacity: 0.7;
            transition: opacity 0.3s;
        }

        .gallery-thumbnail.active {
            opacity: 1;
            box-shadow: 0 0 0 2px #2e7d32;
        }

        .product-info-detail {
            flex: 1;
        }

        #details-title {
            font-size: 28px;
            margin-bottom: 10px;
        }

        #details-price {
            font-size: 24px;
            color: #2e7d32;
            font-weight: 600;
            margin-bottom: 20px;
        }

        #details-description {
            margin-bottom: 30px;
            line-height: 1.8;
        }

        .action-buttons {
            display: flex;
            gap: 15px;
            margin-bottom: 30px;
        }

        .product-reviews-section {
            margin-top: 50px;
        }

        .product-reviews-section h3 {
            font-size: 20px;
            margin-bottom: 20px;
        }

        .review {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 15px;
        }

        .review-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
        }

        .review-name {
            font-weight: 600;
        }

        .review-rating {
            color: #ff9800;
        }

        .review-date {
            color: #757575;
            font-size: 14px;
        }

        /* Cart Section */
        #cart-section {
            padding: 50px 5%;
            max-width: 1000px;
            margin: 0 auto;
            display: none;
        }

        .cart-header {
            display: grid;
            grid-template-columns: 1fr 3fr 1fr 1fr auto;
            gap: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #ddd;
            font-weight: 600;
        }

        .cart-item {
            display: grid;
            grid-template-columns: 1fr 3fr 1fr 1fr auto;
            gap: 20px;
            padding: 20px 0;
            border-bottom: 1px solid #ddd;
            align-items: center;
        }

        .cart-item-image {
            width: 80px;
            height: 80px;
            border-radius: 4px;
            background-size: cover;
            background-position: center;
        }

        .cart-item-quantity {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .quantity-btn {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: #f0f0f0;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
        }

        .remove-item-btn {
            background-color: transparent;
            border: none;
            cursor: pointer;
            font-size: 20px;
            color: #757575;
        }

        .cart-total {
            margin-top: 30px;
            text-align: right;
            font-size: 20px;
            font-weight: 600;
        }

        .cart-actions {
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
        }

        .empty-cart {
            padding: 50px 0;
            text-align: center;
            color: #757575;
        }

        /* Payment Section */
        #payment-section {
            padding: 50px 5%;
            max-width: 1000px;
            margin: 0 auto;
            display: none;
        }

        .payment-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
        }

        .payment-form {
            background-color: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: 500;
        }

        .form-group input {
            width: 100%;
            padding: 10px 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
        }

        .form-group input:focus {
            outline: none;
            border-color: #2e7d32;
        }

        .payment-summary {
            background-color: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .order-item {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #f0f0f0;
        }

        .order-item.shipping {
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid #ddd;
        }

        #order-total {
            margin-top: 20px;
            text-align: right;
            font-size: 20px;
            font-weight: 600;
            color: #2e7d32;
        }

        .payment-actions {
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
        }

        /* Order Confirmation Section */
        #order-confirmation {
            padding: 50px 5%;
            max-width: 800px;
            margin: 0 auto;
            display: none;
        }

        .confirmation-container {
            background-color: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            text-align: center;
        }

        .confirmation-header {
            margin-bottom: 30px;
        }

        .confirmation-header h2 {
            color: #2e7d32;
            margin-bottom: 10px;
        }

        .order-details {
            text-align: left;
            margin-bottom: 30px;
        }

        .order-details-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .confirmation-item {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #f0f0f0;
        }

        .confirmation-total {
            text-align: right;
            margin-top: 20px;
            font-size: 18px;
            font-weight: 600;
        }

        .shipping-details {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
        }

        .tracking-details {
            margin-bottom: 30px;
        }

        /* Your Orders Section */
        #your-order-section {
            padding: 50px 5%;
            max-width: 1000px;
            margin: 0 auto;
            display: none;
        }

        .order-item {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            padding: 20px;
            margin-bottom: 20px;
        }

        .order-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
        }

        .order-status {
            padding: 5px 10px;
            border-radius: 4px;
            font-weight: 500;
        }

        .order-status.processing {
            background-color: #fff3e0;
            color: #e65100;
        }

        .order-status.shipped {
            background-color: #e0f2f1;
            color: #00695c;
        }

        .order-status.delivered {
            background-color: #e8f5e9;
            color: #2e7d32;
        }

        .order-summary {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
        }

        .order-tracking {
            margin-bottom: 15px;
            color: #757575;
        }

        .order-items-preview {
            display: flex;
            gap: 10px;
        }

        .order-item-preview {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
        }

        .preview-image {
            width: 60px;
            height: 60px;
            border-radius: 4px;
            background-size: cover;
            background-position: center;
        }

        .preview-title {
            font-size: 14px;
            text-align: center;
            max-width: 80px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .more-items {
            display: flex;
            align-items: center;
            color: #757575;
        }

        .no-orders-message {
            padding: 50px 0;
            text-align: center;
            color: #757575;
        }

        /* Features Section */
        .features-section {
            background-color: #f5f5f5;
            padding: 50px 5%;
        }

        .features-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            max-width: 1400px;
            margin: 0 auto;
        }

        .feature {
            text-align: center;
            padding: 20px;
        }

        .feature-icon {
            font-size: 40px;
            color: #2e7d32;
            margin-bottom: 15px;
        }

        .feature h3 {
            margin-bottom: 10px;
        }

        /* Newsletter Section */
        .newsletter-section {
            background-color: #2e7d32;
            color: white;
            padding: 50px 5%;
            text-align: center;
        }

        .newsletter-container {
            max-width: 600px;
            margin: 0 auto;
        }

        .newsletter-container h2 {
            margin-bottom: 20px;
        }

        .newsletter-container p {
            margin-bottom: 30px;
        }

        .newsletter-form {
            display: flex;
            gap: 10px;
        }

        .newsletter-form input {
            flex: 1;
            padding: 12px 15px;
            border: none;
            border-radius: 4px;
            font-size: 16px;
        }

        .newsletter-success {
            background-color: rgba(255,255,255,0.2);
            padding: 15px;
            border-radius: 4px;
        }

        /* Footer */
        footer {
            background-color: #333;
            color: white;
            padding: 50px 5% 20px;
        }

        .footer-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 40px;
            max-width: 1400px;
            margin: 0 auto 40px;
        }

        .footer-section h3 {
            margin-bottom: 20px;
            position: relative;
        }

        .footer-section h3:after {
            content: '';
            display: block;
            width: 30px;
            height: 2px;
            background-color: #2e7d32;
            margin-top: 10px;
        }

        .footer-links {
            list-style: none;
        }

        .footer-links li {
            margin-bottom: 10px;
        }

        .footer-links a {
            opacity: 0.8;
            transition: opacity 0.3s;
        }

        .footer-links a:hover {
            opacity: 1;
        }

        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 15px;
        }

        .social-links a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background-color: rgba(255,255,255,0.1);
            border-radius: 50%;
            transition: background-color 0.3s;
        }

        .social-links a:hover {
            background-color: #2e7d32;
        }

        .copyright {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid rgba(255,255,255,0.1);
            opacity: 0.7;
            font-size: 14px;
        }

        /* Wishlist Button */
        .wishlist-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: white;
            border: none;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 10;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        /* Additional Styles for Small Products */
        .products-grid.small {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 15px;
        }

        .product-card.small .product-info {
            padding: 10px;
        }

        .product-card.small .product-title {
            font-size: 14px;
        }

        .product-card.small .product-price {
            font-size: 14px;
        }

        /* Popup Feedback */
        .add-to-cart-feedback {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #2e7d32;
            color: white;
            padding: 15px 20px;
            border-radius: 4px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.3s, transform 0.3s;
            z-index: 1000;
        }

        .add-to-cart-feedback.show {
            opacity: 1;
            transform: translateY(0);
        }

        /* Filter Styles */
        .filters-container {
            margin-bottom: 30px;
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.05);
        }

        .category-filters, .price-filters, .sort-options {
            flex: 1;
            min-width: 200px;
        }

        .filter-options {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 10px;
        }

        .filter-option {
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
        }

        #sort-select {
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin-top: 10px;
            width: 100%;
        }

        /* Wishlist Section */
        .wishlist-section {
            padding: 50px 5%;
            max-width: 1000px;
            margin: 0 auto;
            display: none;
        }

        .wishlist-item {
            display: grid;
            grid-template-columns: 100px 1fr auto;
            gap: 20px;
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.05);
            margin-bottom: 15px;
            align-items: center;
        }

        .wishlist-item-image {
            width: 100px;
            height: 100px;
            border-radius: 4px;
            background-size: cover;
            background-position: center;
        }

        .wishlist-item-actions {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .empty-wishlist {
            padding: 50px 0;
            text-align: center;
            color: #757575;
        }

        /* Search Results */
        .search-results {
            padding: 50px 5%;
            max-width: 1400px;
            margin: 0 auto;
            display: none;
        }

        .search-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            flex-wrap: wrap;
            gap: 10px;
        }

        .no-results {
            padding: 50px 0;
            text-align: center;
            color: #757575;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
            .product-details-container {
                flex-direction: column;
            }

            .payment-container {
                grid-template-columns: 1fr;
            }

            .cart-header {
                display: none;
            }

            .cart-item {
                grid-template-columns: 80px 1fr;
                grid-template-rows: auto auto auto;
                padding: 15px;
                gap: 10px;
            }

            .cart-item-image {
                grid-row: span 3;
            }

            .cart-item-quantity, .cart-item-total {
                grid-column: 2;
            }

            .remove-item-btn {
                position: absolute;
                top: 10px;
                right: 10px;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="header-container">
            <a href="#" class="logo">Velonil Plants</a>
            
            <div class="search-container">
                <input type="text" placeholder="Search for plants...">
                <button>🔍</button>
            </div>
            
            <div class="nav-links">
                <a href="#" id="home-link">Home</a>
                <a href="#" id="cart-link">🛒 Cart (0)</a>
            </div>
        </div>
    </header>

    <!-- Home Section -->
    <section id="home-section">
        <!-- Hero Slider -->
        <div class="hero-section">
            <div class="slider">
                <div class="slide active" style="background-image: url('https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');">
                    <div class="slide-content">
                        <h2>Bring Nature Indoors</h2>
                        <p>Transform your space with our beautiful collection of indoor plants.</p>
                        <a href="#products" class="btn">Shop Now</a>
                    </div>
                </div>
                <div class="slide" style="background-image: url('https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');">
                    <div class="slide-content">
                        <h2>Air Purifying Plants</h2>
                        <p>Breathe cleaner air with our selection of natural air purifiers
























                        <!DOCTYPE html>
                        <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Velonil Plant Shop</title>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="logo">
            <h1>Velonil Plant Shop</h1>
        </div>
        <nav>
            <div class="nav-links">
                <a href="#" id="home-link">Home</a>
                <a href="#" id="cart-link">🛒 Cart (0)</a>
                <!-- Wishlist link will be added dynamically -->
            </div>
        </nav>
        <div class="search-container">
            <input type="text" placeholder="Search for plants...">
            <button type="button">Search</button>
        </div>
    </header>

    <!-- Home Section -->
    <section id="home-section">
        <!-- Hero Slider -->
        <div class="hero-slider">
            <div class="slides">
                <div class="slide active">
                    <div class="slide-content">
                        <h2>Bring Nature Indoors</h2>
                        <p>Discover our collection of beautiful indoor plants</p>
                        <button class="btn">Shop Now</button>
                    </div>
                </div>
                <div class="slide">
                    <div class="slide-content">
                        <h2>Air Purifying Plants</h2>
                        <p>Breathe better with our selection of air purifying plants</p>
                        <button class="btn">Explore</button>
                    </div>
                </div>
                <div class="slide">
                    <div class="slide-content">
                        <h2>Easy Care Collection</h2>
                        <p>Perfect plants for beginners</p>
                        <button class="btn">View Collection</button>
                    </div>
                </div>
            </div>
            <div class="slider-controls">
                <button id="prev-slide">❮</button>
                <div class="slider-dots">
                    <div class="slider-dot active"></div>
                    <div class="slider-dot"></div>
                    <div class="slider-dot"></div>
                </div>
                <button id="next-slide">❯</button>
            </div>
        </div>

        <!-- Products Grid -->
        <h2>Our Plants</h2>
        <div class="products-grid">
            <!-- Product Card 1 -->
            <div class="product-card" data-id="1">
                <div class="product-image-wrapper">
                    <img src="Money Tree1.jpg" alt="Money Tree Front" class="product-image">
                    <img src="Money Tree2.jpg" alt="Money Tree Back" class="product-image-back">
                    <button class="wishlist-btn" data-id="1">🤍</button>
                </div>
                <div class="product-info">
                    <div class="product-title">Money Tree</div>
                    <div class="product-price">From ₹1,599</div>
                </div>
            </div>

            <!-- Product Card 2 -->
            <div class="product-card" data-id="2">
                <div class="product-image-wrapper">
                    <img src="img2.webp" alt="GIRISHA TRADERS Front" class="product-image">
                    <img src="img3.webp" alt="GIRISHA TRADERS Back" class="product-image-back">
                    <button class="wishlist-btn" data-id="2">🤍</button>
                </div>
                <div class="product-info">
                    <div class="product-title">GIRISHA TRADERS</div>
                    <div class="product-price">From ₹599</div>
                </div>
            </div>

            <!-- Product Card 3 -->
            <div class="product-card" data-id="3">
                <div class="product-image-wrapper">
                    <img src="img3.webp" alt="Snake Plants Front" class="product-image">
                    <img src="img4.webp" alt="Snake Plants Back" class="product-image-back">
                    <button class="wishlist-btn" data-id="3">🤍</button>
                </div>
                <div class="product-info">
                    <div class="product-title">Snake Plants</div>
                    <div class="product-price">From ₹699</div>
                </div>
            </div>

            <!-- Product Card 4 -->
            <div class="product-card" data-id="4">
                <div class="product-image-wrapper">
                    <img src="pic1.jpg" alt="Rubber Plants Front" class="product-image">
                    <img src="pic2.jpg" alt="Rubber Plants Back" class="product-image-back">
                    <button class="wishlist-btn" data-id="4">🤍</button>
                </div>
                <div class="product-info">
                    <div class="product-title">Rubber Plants</div>
                    <div class="product-price">From ₹800</div>
                </div>
            </div>

            <!-- Product Card 5 -->
            <div class="product-card" data-id="5">
                <div class="product-image-wrapper">
                    <img src="pic2.jpg" alt="Ferns Front" class="product-image">
                    <img src="pic3.avif" alt="Ferns Back" class="product-image-back">
                    <button class="wishlist-btn" data-id="5">🤍</button>
                </div>
                <div class="product-info">
                    <div class="product-title">Ferns</div>
                    <div class="product-price">From ₹1,090</div>
                </div>
            </div>

            <!-- Product Card 6 -->
            <div class="product-card" data-id="6">
                <div class="product-image-wrapper">
                    <img src="pic5.avif" alt="Pothos Front" class="product-image">
                    <img src="pic6.avif" alt="Pothos Back" class="product-image-back">
                    <button class="wishlist-btn" data-id="6">🤍</button>
                </div>
                <div class="product-info">
                    <div class="product-title">Pothos</div>
                    <div class="product-price">From ₹999</div>
                </div>
            </div>
        </div>

        <!-- Newsletter Section -->
        <div class="newsletter">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get updates on new plants, care tips, and exclusive offers</p>
            <form class="newsletter-form">
                <input type="email" placeholder="Your email address" required>
                <button type="submit" class="btn">Subscribe</button>
            </form>
        </div>
    </section>

    <!-- Product Details Section -->
    <section id="product-details" style="display: none;">
        <div class="product-gallery">
            <div class="gallery-controls">
                <button id="prev-image">❮</button>
                <button id="next-image">❯</button>
            </div>
            <div id="gallery-container"></div>
            <div id="gallery-thumbnails"></div>
        </div>
        <div class="product-info-container">
            <h2 id="details-title"></h2>
            <div id="details-price" class="details-price"></div>
            <p id="details-description" class="details-description"></p>
            <div class="action-buttons">
                <button id="buy-now-btn" class="btn btn-primary">Buy Now</button>
                <button id="add-to-cart-btn" class="btn btn-secondary">Add to Cart</button>
                <button id="back-btn" class="btn btn-outline">Back</button>
            </div>
        </div>
        <div class="product-reviews-container">
            <h3>Customer Reviews</h3>
            <div id="product-reviews"></div>
        </div>
    </section>

    <!-- Cart Section -->
    <section id="cart-section" style="display: none;">
        <h2>Your Shopping Cart</h2>
        <div id="cart-items"></div>
        <div class="cart-summary">
            <div class="cart-total">
                <span>Total:</span>
                <span id="cart-total-price"></span>
            </div>
            <div class="cart-buttons">
                <button id="checkout-btn" class="btn btn-primary">Checkout</button>
                <button id="continue-shopping-btn" class="btn btn-secondary">Continue Shopping</button>
            </div>
        </div>
    </section>

    <!-- Payment Section -->
    <section id="payment-section" style="display: none;">
        <h2>Checkout</h2>
        <div class="checkout-container">
            <div class="order-summary">
                <h3>Order Summary</h3>
                <div id="order-items"></div>
                <div id="order-total" class="order-total"></div>
            </div>
            <div class="payment-details">
                <h3>Shipping Information</h3>
                <form id="payment-form">
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" required>
                    </div>
                    <div class="form-group">
                        <label for="address">Address</label>
                        <input type="text" id="address" required>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="city">City</label>
                            <input type="text" id="city" required>
                        </div>
                        <div class="form-group">
                            <label for="pincode">Pincode</label>
                            <input type="text" id="pincode" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone</label>
                        <input type="tel" id="phone" required>
                    </div>
                    
                    <h3>Payment Information</h3>
                    <div class="form-group">
                        <label for="card-number">Card Number</label>
                        <input type="text" id="card-number" placeholder="XXXX XXXX XXXX XXXX" required>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="expiry">Expiry Date</label>
                            <input type="text" id="expiry" placeholder="MM/YY" required>
                        </div>
                        <div class="form-group">
                            <label for="cvv">CVV</label>
                            <input type="text" id="cvv" placeholder="XXX" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="name-on-card">Name on Card</label>
                        <input type="text" id="name-on-card" required>
                    </div>
                    
                    <div class="checkout-buttons">
                        <button type="button" id="place-order-btn" class="btn btn-primary">Place Order</button>
                        <button type="button" id="back-to-cart-btn" class="btn btn-secondary">Back to Cart</button>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <!-- Order Confirmation Section -->
    <section id="order-confirmation" style="display: none;">
        <div class="confirmation-container">
            <div class="confirmation-header">
                <h2>Order Confirmed!</h2>
                <p>Thank you for your purchase</p>
            </div>
            <div class="confirmation-details">
                <div class="confirmation-info">
                    <p>Order ID: <span id="order-id"></span></p>
                    <p>Order Date: <span id="order-date"></span></p>
                </div>
                <div class="confirmation-items-container">
                    <h3>Items</h3>
                    <div id="confirmation-items"></div>
                    <div class="confirmation-total">
                        <span>Total:</span>
                        <span id="confirmation-total"></span>
                    </div>
                </div>
                <div class="shipping-details">
                    <h3>Shipping Details</h3>
                    <div id="shipping-address"></div>
                </div>
                <div class="tracking-info">
                    <h3>Tracking Information</h3>
                    <p>Tracking Number: <span id="tracking-number"></span></p>
                    <p>Estimated Delivery: 3-5 business days</p>
                </div>
            </div>
            <div class="confirmation-buttons">
                <button id="continue-shopping-after-order" class="btn btn-primary">Continue Shopping</button>
            </div>
        </div>
    </section>

    <!-- Your Orders Section -->
    <section id="your-order-section" style="display: none;">
        <h2>Your Orders</h2>
        <div id="orders-container"></div>
        <button id="back-to-home-from-orders" class="btn btn-outline">Back to Home</button>
    </section>

    <!-- Script - Place at the end of the body -->
    <script>
        // Velonil Plant Shop JavaScript
        document.addEventListener('DOMContentLoaded', function() {
            // =============== DATA MODELS ===============
            // Product data
            const products = [
                {
                    id: 1,
                    title: "Money Tree",
                    price: 1599,
                    description: "Also known as Prayer Plant, Money Tree is famous for its beautiful patterned leaves that fold up at night. This Money Tree thrives in indirect light and adds a touch of the tropics to any space.",
                    images: ["Money Tree1.jpg", "Money Tree2.jpg", "Money Tree1.jpg", "Money Tree2.jpg"],
                    stock: 15,
                    category: "Indoor Plants"
                },
                {
                    id: 2,
                    title: "GIRISHA TRADERS",
                    price: 599,
                    description: "A collection of premium quality indoor plants specially curated to enhance your living space. These plants are easy to maintain and perfect for beginners and experienced plant parents alike.",
                    images: ["img2.webp", "img3.webp", "img1.webp", "img4.webp"],
                    stock: 8,
                    category: "Indoor Plants"
                },
                {
                    id: 3,
                    title: "Snake Plants",
                    price: 699,
                    description: "Snake Plants (Sansevieria) are virtually indestructible and perfect for beginners. These air-purifying plants thrive in almost any condition and require minimal watering, making them ideal for busy people.",
                    images: ["img3.webp", "img4.webp", "img1.webp", "img2.webp"],
                    stock: 20,
                    category: "Air Purifying Plants"
                },
                {
                    id: 4,
                    title: "Rubber Plants",
                    price: 800,
                    description: "Rubber Plants (Ficus elastica) feature glossy, leathery leaves and are known for their air-purifying qualities. These hardy plants can grow quite tall and make a striking addition to any room.",
                    images: ["pic1.jpg", "pic2.jpg", "pic3.avif", "pic5.avif"],
                    stock: 10,
                    category: "Indoor Plants"
                },
                {
                    id: 5,
                    title: "Ferns",
                    price: 1090,
                    description: "Ferns add a lush, prehistoric feel to your space with their delicate fronds. These plants thrive in humid environments and prefer indirect light, making them perfect for bathrooms or kitchens.",
                    images: ["pic2.jpg", "pic3.avif", "pic5.avif", "pic6.avif"],
                    stock: 12,
                    category: "Indoor Plants"
                },
                {
                    id: 6,
                    title: "Pothos",
                    price: 999,
                    description: "Pothos is one of the easiest houseplants to grow. With heart-shaped leaves and trailing vines, it's perfect for hanging baskets or climbing up trellises. It tolerates low light and irregular watering.",
                    images: ["pic5.avif", "pic6.avif", "pic1.jpg", "pic2.jpg"],
                    stock: 18,
                    category: "Indoor Plants"
                }
            ];

            // Reviews data
            const reviews = {
                1: [
                    { name: "Ravi Kumar", rating: 5, comment: "Beautiful plant! Arrived in perfect condition and is thriving in my living room.", date: "2025-03-15" },
                    { name: "Priya Sharma", rating: 4, comment: "Lovely addition to my plant collection. The leaves are so pretty!", date: "2025-03-10" }
                ],
                2: [
                    { name: "Amit Singh", rating: 5, comment: "Great collection of plants! All arrived healthy and as described.", date: "2025-04-02" },
                    { name: "Meera Patel", rating: 3, comment: "Plants were smaller than expected, but they're growing well.", date: "2025-03-25" }
                ],
                3: [
                    { name: "Vikram Joshi", rating: 5, comment: "My snake plant is thriving! So easy to care for and looks great.", date: "2025-04-12" },
                    { name: "Neha Gupta", rating: 5, comment: "Perfect low-maintenance plant. Shipped quickly and in great condition.", date: "2025-04-05" }
                ],
                4: [
                    { name: "Deepak Verma", rating: 4, comment: "The rubber plant is growing well and looks stunning in my office.", date: "2025-03-30" }
                ],
                5: [
                    { name: "Sanjay Reddy", rating: 4, comment: "Beautiful fern but requires more care than I expected. Still happy with my purchase.", date: "2025-04-08" },
                    { name: "Leela Krishna", rating: 5, comment: "The fern arrived in perfect condition and is thriving in my bathroom.", date: "2025-03-22" }
                ],
                6: [
                    { name: "Ananya Desai", rating: 5, comment: "My pothos is growing so fast! Very happy with this purchase.", date: "2025-04-15" },
                    { name: "Rajesh Malhotra", rating: 4, comment: "Nice healthy plant. Good value for money.", date: "2025-04-10" }
                ]
            };

            // =============== STATE MANAGEMENT ===============
            // App state
            const state = {
                currentSection: 'home-section',
                cart: [],
                orders: [],
                currentProduct: null,
                sliderIndex: 0,
                galleryIndex: 0,
                wishlist: [],
                recentlyViewed: []
            };

            // =============== DOM ELEMENTS ===============
            // Navigation
            const homeLink = document.getElementById('home-link');
            const cartLink = document.getElementById('cart-link');
            
            // Sections
            const homeSection = document.getElementById('home-section');
            const productDetailsSection = document.getElementById('product-details');
            const cartSection = document.getElementById('cart-section');
            const paymentSection = document.getElementById('payment-section');
            const orderConfirmationSection = document.getElementById('order-confirmation');
            const yourOrderSection = document.getElementById('your-order-section');
            
            // Slider controls
            const sliderDots = document.querySelectorAll('.slider-dot');
            const prevSlide = document.getElementById('prev-slide');
            const nextSlide = document.getElementById('next-slide');
            const slides = document.querySelectorAll('.slide');
            
            // Product details elements
            const galleryContainer = document.getElementById('gallery-container');
            const galleryThumbnails = document.getElementById('gallery-thumbnails');
            const prevImage = document.getElementById('prev-image');
            const nextImage = document.getElementById('next-image');
            const detailsTitle = document.getElementById('details-title');
            const detailsPrice = document.getElementById('details-price');
            const detailsDescription = document.getElementById('details-description');
            const productReviews = document.getElementById('product-reviews');
            
            // Action buttons
            const buyNowBtn = document.getElementById('buy-now-btn');
            const addToCartBtn = document.getElementById('add-to-cart-btn');
            const backBtn = document.getElementById('back-btn');
            const checkoutBtn = document.getElementById('checkout-btn');
            const continueShoppingBtn = document.getElementById('continue-shopping-btn');
            const placeOrderBtn = document.getElementById('place-order-btn');
            const backToCartBtn = document.getElementById('back-to-cart-btn');
            const continueShoppingAfterOrder = document.getElementById('continue-shopping-after-order');
            const backToHomeFromOrders = document.getElementById('back-to-home-from-orders');

            // =============== UTILITY FUNCTIONS ===============
            // Show a specific section and hide others
            function showSection(sectionId) {
                const sections = [homeSection, productDetailsSection, cartSection, paymentSection, orderConfirmationSection, yourOrderSection];
                sections.forEach(section => {
                    if (section && section.id === sectionId) {
                        section.style.display = 'block';
                    } else if (section) {
                        section.style.display = 'none';
                    }
                });
                state.currentSection = sectionId;
                
                // Scroll to top when changing sections
                window.scrollTo(0, 0);
            }

            // Format price
            function formatPrice(price) {
                return '₹' + price.toLocaleString('en-IN');
            }

            // Generate random order ID
            function generateOrderId() {
                return 'VEL' + Math.floor(100000 + Math.random() * 900000);
            }

            // Generate random tracking number
            function generateTrackingNumber() {
                return 'TRK' + Math.floor(10000000 + Math.random() * 90000000);
            }

            // Get current date in format: April 29, 2025
            function getCurrentDate() {
                const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                const now = new Date();
                return `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
            }

            // Calculate cart total
            function calculateCartTotal(cartItems) {
                return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
            }

            // =============== RENDER FUNCTIONS ===============
            // Render product cards
            function renderProductCards() {
                const productCards = document.querySelectorAll('.product-card');
                productCards.forEach(card => {
                    card.addEventListener('click', function(e) {
                        // Ignore clicks on wishlist button
                        if (e.target.classList.contains('wishlist-btn')) {
                            return;
                        }
                        
                        const productId = parseInt(this.getAttribute('data-id'));
                        const product = products.find(p => p.id === productId);
                        if (product) {
                            state.currentProduct = product;
                            renderProductDetails(product);
                            showSection('product-details');
                        }
                    });
                });
                
                // Add wishlist button functionality
                document.querySelectorAll('.wishlist-btn').forEach(btn => {
                    btn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        const productId = parseInt(this.getAttribute('data-id'));
                        const product = products.find(p => p.id === productId);
                        
                        if (product) {
                            const isAdded = toggleWishlist(product);
                            this.textContent = isAdded ? '❤️' : '🤍';
                        }
                    });
                });
            }

            // Render product details
            function renderProductDetails(product) {
                detailsTitle.textContent = product.title;
                detailsPrice.textContent = formatPrice(product.price);
                detailsDescription.textContent = product.description;
                
                // Render gallery
                galleryContainer.innerHTML = '';
                galleryThumbnails.innerHTML = '';
                
                product.images.forEach((image, index) => {
                    // Create gallery item
                    const galleryItem = document.createElement('div');
                    galleryItem.className = `gallery-item ${index === 0 ? 'active' : ''}`;
                    galleryItem.style.backgroundImage = `url(${image})`;
                    galleryContainer.appendChild(galleryItem);
                    
                    // Create thumbnail
                    const thumbnail = document.createElement('div');
                    thumbnail.className = `gallery-thumbnail ${index === 0 ? 'active' : ''}`;
                    thumbnail.style.backgroundImage = `url(${image})`;
                    thumbnail.setAttribute('data-index', index);
                    thumbnail.addEventListener('click', function() {
                        state.galleryIndex = parseInt(this.getAttribute('data-index'));
                        updateGallery();
                    });
                    galleryThumbnails.appendChild(thumbnail);
                });
                
                // Reset gallery index
                state.galleryIndex = 0;
                
                // Render reviews
                renderReviews(product.id);
                
                // Add to recently viewed
                addToRecentlyViewed(product);
                
                // Add wishlist button to product details
                const actionButtons = document.querySelector('.action-buttons');
                
                // Remove existing wishlist button if any
                const existingWishlistBtn = document.getElementById('add-to-wishlist-btn');
                if (existingWishlistBtn) {
                    existingWishlistBtn.remove();
                }
                
                // Create new wishlist button
                const wishlistBtn = document.createElement('button');
                wishlistBtn.className = 'btn btn-outline';
                wishlistBtn.id = 'add-to-wishlist-btn';
                
                const isInWishlist = state.wishlist.some(item => item.id === product.id);
                wishlistBtn.textContent = isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist';
                wishlistBtn.dataset.inWishlist = isInWishlist;
                
                wishlistBtn.addEventListener('click', function() {
                    const isAdded = toggleWishlist(product);
                    this.textContent = isAdded ? 'Remove from Wishlist' : 'Add to Wishlist';
                    this.dataset.inWishlist = isAdded;
                });
                
                // Insert after Add to Cart but before Back
                actionButtons.insertBefore(wishlistBtn, document.getElementById('back-btn'));
            }

            // Render reviews
            function renderReviews(productId) {
                productReviews.innerHTML = '';
                
                const productReviewsData = reviews[productId] || [];
                
                if (productReviewsData.length === 0) {
                    productReviews.innerHTML = '<p>No reviews yet for this product.</p>';
                    return;
                }
                
                productReviewsData.forEach(review => {
                    const reviewElement = document.createElement('div');
                    reviewElement.className = 'review';
                    
                    const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
                    
                    reviewElement.innerHTML = `
                        <div class="review-header">
                            <span class="review-name">${review.name}</span>
                            <span class="review-rating">${stars}</span>
                            <span class="review-date">${review.date}</span>
                        </div>
                        <div class="review-comment">${review.comment}</div>
                    `;
                    
                    productReviews.appendChild(reviewElement);
                });
            }

            // Render cart items
            function renderCartItems() {
                const cartItemsContainer = document.getElementById('cart-items');
                const cartTotalPrice = document.getElementById('cart-total-price');
                
                cartItemsContainer.innerHTML = '';
                
                if (state.cart.length === 0) {
                    cartItemsContainer.innerHTML = '<div class="empty-cart">Your cart is empty.</div>';
                    cartTotalPrice.textContent = formatPrice(0);
                    return;
                }
                
                state.cart.forEach(item => {
                    const cartItem = document.createElement('div');
                    cartItem.className = 'cart-item';
                    
                    cartItem.innerHTML = `
                        <div class="cart-item-image" style="background-image: url(${item.images[0]})"></div>
                        <div class="cart-item-details">
                            <div class="cart-item-title">${item.title}</div>
                            <div class="cart-item-price">${formatPrice(item.price)}</div>
                        </div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn minus" data-id="${item.id}">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn plus" data-id="${item.id}">+</button>
                        </div>
                        <div class="cart-item-total">${formatPrice(item.price * item.quantity)}</div>
                        <button class="remove-item-btn" data-id="${item.id}">×</button>
                    `;
                    
                    cartItemsContainer.appendChild(cartItem);
                });
                
                // Add event listeners to quantity buttons
                document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
                    btn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        const productId = parseInt(this.getAttribute('data-id'));
                        updateCartItemQuantity(productId, -1);
                    });
                });
                
                document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
                    btn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        const productId = parseInt(this.getAttribute('data-id'));
                        updateCartItemQuantity(productId, 1);
                    });
                });
                
                // Add event listeners to remove buttons
                document.querySelectorAll('.remove-item-btn').forEach(btn => {
                    btn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        const productId = parseInt(this.