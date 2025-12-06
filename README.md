<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZANTIQ: Legacy in Style | Luxury Home Decor & Jewellery</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400&display=swap" rel="stylesheet">
    
    <style>
        /* --- ZANTIQ Luxury Color Palette --- */
        :root {
            /* Extracted from the provided logo/design image */
            --color-primary: #1a1a1a;        /* Deep Black/Charcoal */
            --color-color-secondary: #c9a45e; /* Primary Gold/Tan (CTAs/Highlights) */
            --color-tertiary: #b0914d;       /* Darker Gold/Accent */
            --color-text: #333333;
            --color-background: #ffffff;
            --color-light-bg: #f5f5f5;       /* Very light grey for contrast sections */
            
            --font-serif: 'Playfair Display', serif;
            --font-sans: 'Lato', sans-serif;
            --border-radius-sm: 4px;         /* Small rounded corners */
        }

        /* --- General Reset & Utility --- */
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

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* --- Buttons & CTAs --- */
        .cta-button {
            display: inline-block;
            padding: 12px 30px;
            margin-top: 15px;
            border: 2px solid var(--color-color-secondary);
            background-color: transparent;
            color: var(--color-color-secondary);
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 0.9em;
            transition: all 0.3s ease;
            border-radius: var(--border-radius-sm); /* Rounded corners applied */
        }

        .cta-button:hover {
            background-color: var(--color-color-secondary);
            color: var(--color-background);
        }

        /* --- Header & Navigation --- */
        header {
            background-color: var(--color-background);
            border-bottom: 1px solid var(--color-light-bg);
            padding: 15px 0;
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        /* New Logo Container Styling */
        .logo-container {
            display: flex;
            align-items: center;
        }

        .logo-container img {
            /* Placeholder for your actual logo image file */
            height: 40px; 
            width: auto;
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
            color: var(--color-color-secondary);
        }

        /* --- Hero Section --- */
        #home {
            height: 70vh;
            background-image: url('placeholder_hero_image.jpg'); 
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
            background: rgba(0, 0, 0, 0.45); 
        }

        .hero-content {
            position: relative;
            z-index: 10;
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
        }

        .hero-content h1 {
            font-family: var(--font-serif);
            font-size: 4.5em;
            margin-bottom: 15px;
            font-weight: 700;
        }

        .hero-content p.tagline {
            font-size: 1.8em;
            margin-bottom: 30px;
            font-style: italic;
            color: var(--color-color-secondary);
        }

        .hero-actions .cta-button {
            margin: 0 15px;
            border-color: var(--color-color-secondary);
            color: var(--color-color-secondary);
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
            font-family: var(--font-sans);
            font-size: 1.2em;
            color: #666;
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
            width: calc(33% - 20px); 
            text-align: left;
            transition: transform 0.3s, box-shadow 0.3s;
            border-radius: var(--border-radius-sm); /* Rounded corners applied */
            overflow: hidden;
        }

        .product-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
        }

        .product-item img {
            width: 100%;
            height: auto;
            display: block;
            margin-bottom: 15px;
            border-radius: var(--border-radius-sm) var(--border-radius-sm) 0 0; /* Only top corners rounded */
        }
        
        .product-info {
            padding: 0 15px 20px;
        }

        .product-info h3 {
            font-family: var(--font-serif);
            font-size: 1.4em;
            color: var(--color-primary);
            margin-bottom: 5px;
        }

        .product-info p {
            color: #666;
            font-size: 0.9em;
        }

        /* --- Color Palette Showcase --- */
        #color-palette {
            background-color: var(--color-light-bg);
        }
        
        .palette-display {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-top: 40px;
        }
        
        .color-swatch {
            width: 150px;
            height: 150px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 10px;
            color: #fff;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-radius: 10px; /* Highly rounded corners for demonstration */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        /* Individual Color Definitions */
        .swatch-primary { background-color: var(--color-primary); }
        .swatch-secondary { background-color: var(--color-color-secondary); color: var(--color-primary); }
        .swatch-tertiary { background-color: var(--color-tertiary); }
        .swatch-background { background-color: var(--color-background); color: var(--color-primary); border: 1px solid #ddd; }

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
            color: var(--color-color-secondary);
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
            color: var(--color-color-secondary);
        }

        .footer-bottom {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #333333;
            text-align: center;
        }

        /* --- Responsive Adjustments (Omitted for brevity, but kept structure) --- */
    </style>
</head>
<body>

    <header>
        <div class="container">
            <nav>
                <div class="logo-container">
                    <a href="#home">
                        <img src="zantid_logo_placeholder.png" alt="ZANTIQ Logo - Legacy in Style">
                    </a>
                </div>
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
            <h1>Elevating Life Through Design</h1>
            <p class="tagline">Legacy in Style</p>
            <p>Discover ZANTIQ collections where timeless quality meets effortless sophistication for your home and personal adornment.</p>
            <div class="hero-actions">
                <a href="#decor" class="cta-button">Explore Home Decor</a>
                <a href="#jewellery" class="cta-button">Discover Jewellery</a>
            </div>
        </div>
    </section>

    <section id="decor" style="background-color: var(--color-light-bg);">
        <div class="container">
            <h2>The Art of Living</h2>
            <p class="section-subtitle">Meticulously designed ZANTIQ Home Decor Collections</p>
            
            <div class="product-grid">
                <div class="product-item">
                    <img src="placeholder_decor_1.jpg" alt="Marble Sculpture">
                    <div class="product-info">
                        <h3>Sculptural Marble Vase</h3>
                        <p>Hand-carved Carrara marble, Limited Edition.</p>
                    </div>
                </div>
                <div class="product-item">
                    <img src="placeholder_decor_2.jpg" alt="Brass Lamp">
                    <div class="product-info">
                        <h3>Gilded Brass Floor Lamp</h3>
                        <p>Artisan crafted lighting with natural silk shade.</p>
                    </div>
                </div>
                <div class="product-item">
                    <img src="placeholder_decor_3.jpg" alt="Cashmere Throw">
                    <div class="product-info">
                        <h3>Supersoft Cashmere Throw</h3>
                        <p>Woven in Italy, unparalleled comfort and texture.</p>
                    </div>
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
                    <div class="product-info">
                        <h3>The Zenith Diamond Ring</h3>
                        <p>18k White Gold, 2.5 Carat Solitaire.</p>
                    </div>
                </div>
                <div class="product-item">
                    <img src="placeholder_jewel_2.jpg" alt="Gold Necklace">
                    <div class="product-info">
                        <h3>Venetian Gold Chain</h3>
                        <p>Hand-linked 24k Gold, timeless craftsmanship.</p>
                    </div>
                </div>
                <div class="product-item">
                    <img src="placeholder_jewel_3.jpg" alt="Pearl Earrings">
                    <div class="product-info">
                        <h3>Tahitian Pearl Drop Earrings</h3>
                        <p>Sustainably sourced, signature Rose Gold setting.</p>
                    </div>
                </div>
            </div>
            <a href="jewellery.html" class="cta-button" style="margin-top: 40px;">View All Jewellery</a>
        </div>
    </section>
    
    <hr>

    <section id="color-palette">
        <div class="container">
            <h2>ZANTIQ Color Palette</h2>
            <p class="section-subtitle">Defined by elegance and luxury, inspired by our style.</p>
            
            <div class="palette-display">
                <div class="color-swatch swatch-primary">
                    Primary (#1A1A1A)
                </div>
                <div class="color-swatch swatch-secondary">
                    Gold (#C9A45E)
                </div>
                <div class="color-swatch swatch-tertiary">
                    Accent (#B0914D)
                </div>
                <div class="color-swatch swatch-background">
                    Background (#FFFFFF)
                </div>
            </div>
        </div>
    </section>

    <hr>

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
