<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZANTIQ: Legacy in Style | Luxury Home Decor & Jewellery</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400&display=swap" rel="stylesheet">
    
    <style>
        /* --- General Reset & Variables --- */
        :root {
            --color-primary: #1a1a1a; /* Deep Charcoal Black */
            --color-secondary: #c9a45e; /* Elegant Gold */
            --color-text: #333333;
            --color-background: #ffffff;
            --font-serif: 'Playfair Display', serif;
            --font-sans: 'Lato', sans-serif;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: var(--font-sans);
            color: var(--color-text);
            background-color: var(--color-background);
            line-height: 1.6;
        }

        /* --- Utility Classes --- */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .cta-button {
            display: inline-block;
            padding: 12px 30px;
            margin-top: 15px;
            border: 2px solid var(--color-secondary);
            background-color: transparent;
            color: var(--color-secondary);
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 0.9em;
            transition: all 0.3s ease;
        }

        .cta-button:hover {
            background-color: var(--color-secondary);
            color: var(--color-background);
        }

        /* --- Header & Navigation --- */
        header {
            background-color: var(--color-background);
            border-bottom: 1px solid #eeeeee;
            padding: 20px 0;
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-family: var(--font-serif);
            font-size: 2.5em;
            font-weight: 700;
            color: var(--color-primary);
            text-decoration: none;
            letter-spacing: 1px;
        }

        .nav-links a {
            color: var(--color-primary);
            text-decoration: none;
            margin-left: 30px;
            font-weight: 400;
            text-transform: uppercase;
            font-size: 0.9em;
            transition: color 0.3s;
        }

        .nav-links a:hover {
            color: var(--color-secondary);
        }

        /* --- Hero Section --- */
        #home {
            height: 80vh; /* Adjust height based on desired viewport coverage */
            background-image: url('placeholder_hero_image.jpg'); /* Replace with a high-res image of a combined decor/jewellery scene */
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            text-align: center;
            color: #ffffff;
            position: relative;
        }

        #home::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.4); /* Dark overlay for text contrast */
        }

        .hero-content {
            position: relative;
            z-index: 10;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }

        .hero-content h1 {
            font-family: var(--font-serif);
            font-size: 4em;
            margin-bottom: 10px;
            font-weight: 700;
        }

        .hero-content p {
            font-size: 1.5em;
            margin-bottom: 30px;
            font-style: italic;
            color: #f0f0f0;
        }

        .hero-actions .cta-button {
            margin: 0 10px;
            border-color: #ffffff;
            color: #ffffff;
            background-color: rgba(255, 255, 255, 0.1);
        }

        .hero-actions .cta-button:hover {
            background-color: var(--color-secondary);
            border-color: var(--color-secondary);
            color: var(--color-background);
        }

        /* --- Section Styling --- */
        section {
            padding: 80px 0;
            text-align: center;
        }

        section h2 {
            font-family: var(--font-serif);
            font-size: 3em;
            margin-bottom: 10px;
            color: var(--color-primary);
        }

        .section-subtitle {
            font-family: var(--font-serif);
            font-size: 1.2em;
            color: var(--color-secondary);
            margin-bottom: 50px;
        }

        /* --- Product Grid Styling --- */
        .product-grid {
            display: flex;
            gap: 30px;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 40px;
        }

        .product-item {
            width: calc(33% - 20px); /* 3 items per row */
            text-align: left;
            transition: transform 0.3s;
        }

        .product-item:hover {
            transform: translateY(-5px);
        }

        .product-item img {
            width: 100%;
            height: auto;
            display: block;
            margin-bottom: 15px;
            border: 1px solid #f0f0f0;
        }

        .product-item h3 {
            font-family: var(--font-serif);
            font-size: 1.4em;
            color: var(--color-primary);
            margin-bottom: 5px;
        }

        .product-item p {
            color: #666;
            font-size: 0.9em;
        }

        /* --- Footer --- */
        footer {
            background-color: var(--color-primary);
            color: #cccccc;
            padding: 40px 0;
            font-size: 0.9em;
        }

        .footer-content {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            text-align: left;
        }

        .footer-section {
            width: 30%;
            margin-bottom: 20px;
        }

        .footer-section h4 {
            color: var(--color-secondary);
            margin-bottom: 15px;
            text-transform: uppercase;
            font-size: 1em;
            letter-spacing: 1px;
        }

        .footer-section a {
            display: block;
            color: #cccccc;
            text-decoration: none;
            margin-bottom: 8px;
            transition: color 0.3s;
        }

        .footer-section a:hover {
            color: var(--color-secondary);
        }

        .footer-bottom {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #333333;
            text-align: center;
        }

        /* --- Responsive Adjustments --- */
        @media (max-width: 768px) {
            .logo { font-size: 2em; }
            .nav-links { display: none; } /* Simplified mobile nav */
            .hero-content h1 { font-size: 3em; }
            .hero-content p { font-size: 1.2em; }
            section { padding: 50px 0; }
            .product-item { width: calc(50% - 15px); } /* 2 items per row on tablet */
            .footer-section { width: 45%; }
        }

        @media (max-width: 480px) {
            .product-item { width: 100%; } /* 1 item per row on phone */
            .footer-section { width: 100%; }
            .hero-actions .cta-button { margin-bottom: 15px; }
        }
    </style>
</head>
<body>

    <header>
        <div class="container">
            <nav>
                <a href="#home" class="logo">ZANTIQ</a>
                <div class="nav-links">
                    <a href="#decor">Home Decor</a>
                    <a href="#jewellery">Jewellery</a>
                    <a href="about.html">About Us</a>
                    <a href="contact.html">Contact</a>
                </div>
            </nav>
        </div>
    </header>

    <section id="home">
        <div class="hero-content">
            <h1>ZANTIQ</h1>
            <p class="tagline">Legacy in Style</p>
            <p>Curating Elegance for Your Life and Home. Discover collections where timeless quality meets effortless sophistication.</p>
            <div class="hero-actions">
                <a href="#decor" class="cta-button">Explore Home Decor</a>
                <a href="#jewellery" class="cta-button">Discover Jewellery</a>
            </div>
        </div>
    </section>

    <section id="decor" style="background-color: #f9f9f9;">
        <div class="container">
            <h2>The Art of Living</h2>
            <p class="section-subtitle">Luxurious ZANTIQ Home Decor Collections</p>
            
            <div class="product-grid">
                <div class="product-item">
                    <img src="placeholder_decor_1.jpg" alt="Marble Sculpture">
                    <h3>Sculptural Marble Vase</h3>
                    <p>Hand-carved Carrara marble, Limited Edition.</p>
                </div>
                <div class="product-item">
                    <img src="placeholder_decor_2.jpg" alt="Brass Lamp">
                    <h3>Gilded Brass Floor Lamp</h3>
                    <p>Artisan crafted lighting with natural silk shade.</p>
                </div>
                <div class="product-item">
                    <img src="placeholder_decor_3.jpg" alt="Cashmere Throw">
                    <h3>Supersoft Cashmere Throw</h3>
                    <p>Woven in Italy, unparalleled comfort and texture.</p>
                </div>
            </div>
            <a href="decor.html" class="cta-button" style="margin-top: 40px;">View All Decor</a>
        </div>
    </section>

    <section id="jewellery">
        <div class="container">
            <h2>Personal Luxuries</h2>
            <p class="section-subtitle">Exquisite ZANTIQ Jewellery for Adornment</p>
            
            <div class="product-grid">
                <div class="product-item">
                    <img src="placeholder_jewel_1.jpg" alt="Diamond Ring">
                    <h3>The Zenith Diamond Ring</h3>
                    <p>18k White Gold, 2.5 Carat Solitaire.</p>
                </div>
                <div class="product-item">
                    <img src="placeholder_jewel_2.jpg" alt="Gold Necklace">
                    <h3>Venetian Gold Chain</h3>
                    <p>Hand-linked 24k Gold, timeless craftsmanship.</p>
                </div>
                <div class="product-item">
                    <img src="placeholder_jewel_3.jpg" alt="Pearl Earrings">
                    <h3>Tahitian Pearl Drop Earrings</h3>
                    <p>Sustainably sourced, signature Rose Gold setting.</p>
                </div>
            </div>
            <a href="jewellery.html" class="cta-button" style="margin-top: 40px;">View All Jewellery</a>
        </div>
    </section>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>ZANTIQ</h4>
                    <p>Legacy in Style. We are committed to providing the finest home decor and personal luxuries, crafted for generations.</p>
                </div>
                <div class="footer-section">
                    <h4>Collections</h4>
                    <a href="#decor">Home Decor</a>
                    <a href="#jewellery">Jewellery</a>
                    <a href="#">Limited Editions</a>
                    <a href="#">New Arrivals</a>
                </div>
                <div class="footer-section">
                    <h4>Customer Care</h4>
                    <a href="#">Contact Us</a>
                    <a href="#">Shipping & Returns</a>
                    <a href="#">FAQ / Care Guides</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
            <div class="footer-bottom">
                &copy; 2025 ZANTIQ. All Rights Reserved.
            </div>
        </div>
    </footer>

</body>
</html>
