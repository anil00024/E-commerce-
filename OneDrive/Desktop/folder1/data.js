// Product data
const products = [
    {
        id: 1,
        title: "Money Tree",
        price:  1599,
        description: "The Money Tree was named after the Feng Shui belief that it will foster positive energy and bring good luck to its owner. This plant may also reduce stress, anxiety, and may also help to relieve sleeping disorders. A Clean Air Study by NASA named the Money Tree as one of the most effective houseplants for clearing toxins from the air of your home.",
        images: ["Money Tree1.jpg", "Money Tree2.jpg", "Money Tree3.jpg", "Money Tree4.jpg"],
        reviews: [
            { name: "Priya S.", rating: 5, comment: "Beautiful plant arrived in perfect condition. Already seeing new growth!" },
            { name: "Rahul M.", rating: 4, comment: "Healthy plant with lovely braided trunk. Shipping was fast." }
        ]
    },
    {
        id: 2,
        title: "Coffee Plant",
        price: 599,
        description: "Perk up your plant collection with the Coffee Plant. This leafy plant features glossy green foliage that thrives in bright indirect sunlight. Caring for the Coffee Plant easier than preparing your morning cup of brew, making it a low-maintenance and delightful addition to your living space. Originating from Ethiopia, the coffee plant’s preference is for bright, indirect sunlight, having evolved in the shaded embrace of forest floors. Exercise caution with direct sunlight, as excessive exposure can lead to browning of the leaves. This plant is all about staying well-hydrated! Water when 25% of the soil volume is dry to keep this plant happy. ",
        images: ["coffee1.jpg", "coffee2.jpg", "coffee3.jpg", "coffee4.jpg"],
        reviews: [
            { name: "Ananya K.", rating: 5, comment: "Great quality plants at an affordable price. Highly recommend!" },
            { name: "Vikram J.", rating: 3, comment: "Plants were smaller than expected but healthy." }
        ]
    },
    {
        id: 3,
        title: "Jade Plant",
        price: 699,
        description: "Jade Plants are one of the most beloved succulents. This easy to care for, long-lasting plant can be passed down for generations, becoming your own family heirloom. Keep in indirect to bright light and water only when the soil is completely dry. Keep this plant’s round leaves pest-free by dusting regularly. The Jade Plant is native to South America but popular all around the world. This plant is also easy to propagate, either for yourself or to gift to someone special.",
        images: ["jade1.jpg", "jade2.jpg", "jade3.jpeg", "jade4.jpg"],
        reviews: [
            { name: "Deepak R.", rating: 5, comment: "My Jade plant is thriving even in my low-light apartment. Love it!" },
            { name: "Meera T.", rating: 5, comment: "Such a low-maintenance plant. Perfect for busy people." }
        ]
    },
    {
        id: 4,
        title: "Red Prayer Plant",
        price: 800,
        description: "The Maranta Red Prayer Plant has soft dark green leaves with feathered, painterly-like centers of light green and red veins. The colorful foliage and slow growth make this a perfect plant for window sills, mantles, or shelves in need of a splash of color. The Red Prayer Plant is an easy plant — place it in a sunny spot, keep its soil damp, and mist its leaves once a week and it will flourish.",
        images: ["red prayer1.jpg", "red prayer2.jpg", "red prayer3.jpg", "red prayer4.jpg"],
        reviews: [
            { name: "Sanjay P.", rating: 4, comment: "Beautiful foliage, but took some time to adjust to my home." },
            { name: "Kavita S.", rating: 5, comment: "Stunning plant that has grown significantly in just a few months!" }
        ]
    },
    {
        id: 5,
        title: "Lucky Bamboo Plant",
        price: 1090,
        description: "Lucky bamboo will benefit from occasional pruning to maintain its appearance. In general, it's not a good idea to cut the main stalk of lucky bamboo. Instead, cut the offshoots using sterile snippers, and trim them back to within an inch or two off the main stem. New shoots will emerge with fuller growth. To discourage new growth, dip the cut end in paraffin.",
        images: ["bamboo1.webp", "bamboo2.webp", "bamboo3.webp", "bamboo4.webp"],
        reviews: [
            { name: "Arjun M.", rating: 3, comment: "Beautiful but requires more care than I expected with humidity needs." },
            { name: "Lakshmi N.", rating: 4, comment: "Gorgeous fern, arrived in great condition with detailed care instructions." }
        ]
    },
    {
        id: 6,
        title: "Bonsai-Bliss Plant",
        price: 999,
        description: "Bougainvillea bonsai is a delightful and captivating plant that has gained popularity among bonsai enthusiasts worldwide. This unique form of bonsai showcases the vibrant and colorful blooms of the Bougainvillea plant, adding a touch of tropical beauty to any collection. In this complete guide, we will explore the fascinating world of Bougainvillea bonsai, from selecting the right species to caring for its specific needs.",
        images: ["bonsai-bliss_1.jpg", "bonsai-bliss_2.webp", "bonsai-bliss_3.webp", "bonsai-bliss_4.webp"],
        reviews: [
            { name: "Aditya K.", rating: 5, comment: "My Bonsai-Bliss Plant has grown so quickly! Such a rewarding plant to own." },
            { name: "Nisha G.", rating: 5, comment: "Beautiful trailing plant that has brightened up my home office." }
        ]
    },
    {
        id: 7,
        title: "Elephant Bush Plant",
        price: 1090,
        description: "The Elephant Bush, scientifically known as Portulacaria afra, is a captivating succulent native to South Africa. This hardy plant features thick, fleshy leaves that are a vibrant green, making it a popular choice for both indoor and outdoor gardens. Known for its resilience, the Elephant Bush can thrive in various conditions, making it an ideal addition to any plant lover's collection.",
        images: ["elephant-bush 1.webp", "elephant-bush 2.webp", "elephant-bush 3.webp", "elephant-bush 4.webp"],
        reviews: [
            { name: "Akhil M.", rating: 3, comment: "Beautiful but requires more care than I expected with humidity needs." },
            { name: "Latha N.", rating: 4, comment: "Gorgeous fern, arrived in great condition with detailed care instructions." }
        ]
    },
    {
        id: 8,
        title: "Ficus Compacta Plant",
        price: 1090,
        description: "The Ficus Ginseng is a stately tropical tree with a compact nature. This plant is quite popular among Bonsai enthusiasts for its ease of care. With a unique, bulbous trunk surrounded by a condensed canopy of green leaves, this plant will surely stand out in any space. Prune the tree back occasionally to keep its dense shape and encourage new growth.",
        images: ["ficus compacta 1.webp", "ficus compacta 2.webp", "ficus compacta 3.webp", "ficus compacta 4.webp"],
        reviews: [
            { name: "Anu M.", rating: 3, comment: "Beautiful but requires more care than I expected with humidity needs." },
            { name: "Lakshmi N.", rating: 4, comment: "Gorgeous fern, arrived in great condition with detailed care instructions." }
        ]
    },
    {
        id: 9,
        title: "Girisha Traders",
        price: 1090,
        description: "Two Layered Bamboo Is Perhaps The Most Popular Indoor Plant In The World. According To Feng Shui Masters, Wherever Bamboo Is Placed, Good Fortune Is Sure To Follow. It's A Traditional Symbol Of Happiness, Wealth And Health. It Is Said That Every New Growing Leaf Will Bring Luck And Prosperity To The Owner. A Perfect Green Gift For Virtually Anyone. It Also Helps That They Have A Well-Earned Reputation As Nearly Indestructible. These Tough Stalks Can Survive In Vases Of Pure Water Or In Soil, And In A Wide Variety Of Light Conditions. Even A Poorly Kept Lucky Bamboo Plant Will Live For A Long Time. Green Petals Specially Crafted Plants Are Not Only Beautiful And Easy To Maintain.",
        images: ["snake-plant 1.webp", "snake-plant 2.webp", "snake-plant 3.webp", "snake-plant 4.webp"],
        reviews: [
            { name: "Anush M.", rating: 3, comment: "Beautiful but requires more care than I expected with humidity needs." },
            { name: "Ravi N.", rating: 4, comment: "Gorgeous fern, arrived in great condition with detailed care instructions." }
        ]
    },
    {
        id: 10,
        title: "Calla Lily",
        price: 1090,
        description: "Welcome spring into your home with the ever-charming Calla Lily. This plant features deep fuchsia or light pink flowers that stand above bright green stems. These flowers will last throughout the spring, around 6-8 weeks, and will rebloom again after a mild dormancy. Keep it in bright indirect sunlight indoors, and feel free to move the plant outdoors once it is warmer to encourage reblooming.",
        images: ["calla lily 1.png", "calla lily 2.png", "calla lily 3.png", "calla lily 4.png"],
        reviews: [
            { name: "Anil G.", rating: 3, comment: "Beautiful but requires more care than I expected with humidity needs." },
            { name: "Vasu M.", rating: 4, comment: "Gorgeous fern, arrived in great condition with detailed care instructions." }
        ]
    },
    {
        id: 11,
        title: "Fiddle Leaf Fig",
        price: 2090,
        description: "The Fiddle Leaf Fig is easily recognizable and loved for its distinctive foliage. This tall, dramatic plant has very large, heavily veined, violin-shaped leaves that grow upright. It’s not bushy, making it a beautiful interior design addition for a brightly lit corner or cozy nook in your home.",
        images: ["Fiddle Leaf Fig 1.jpg", "Fiddle Leaf Fig 2.jpg", "Fiddle Leaf Fig 3.jpeg", "Fiddle Leaf Fig 4.jpg"],
        reviews: [
            { name: "Vinoth K.", rating: 3, comment: "Beautiful but requires more care than I expected with humidity needs." },
            { name: "Ravi N.", rating: 4, comment: "Gorgeous fern, arrived in great condition with detailed care instructions." }
        ]
    },
    {
        id: 12,
        title: "Philodendron Heartleaf",
        price: 1799,
        description: "The Philodendron Heartleaf is a fast-growing, easy, vining plant. Its glossy, heart-shaped leaves trail gracefully on long stems and thrive in low to bright light. Native to Africa and the Canary Islands, the Heartleaf can be grown as a trailer or climber. This full, trailing plant is perfect on top of bookshelves or in a plant hanger where its vines can ‘spill’ out.",
        images: ["Philodendron Heartleaf 1.jpg", "Philodendron Heartleaf 2.jpg", "Philodendron Heartleaf 3.webp", "Philodendron Heartleaf 4.jpg"],
        reviews: [
            { name: "Anush M.", rating: 3, comment: "Beautiful but requires more care than I expected with humidity needs." },
            { name: "Ravi N.", rating: 4, comment: "Gorgeous fern, arrived in great condition with detailed care instructions." }
        ]
    },
    {
        id: 13,
        title: "Red Anthurium",
        price: 899,
        description: "The Red Anthurium is an eye-catching plant with its long-lasting and bright “flowers.” These flowers, which are actually a modified leaf called a bract, surround a spike of tiny flowers and are one of the main appealing aspects of this plant. The dazzling color of this plant can last in your home for months, and with proper care it will continually produce new bracts and flowers.",
        images: ["Red Anthurium 1.jpg", "Red Anthurium 2.jpg", "Red Anthurium 3.jpg", "Red Anthurium 4.jpg"],
        reviews: [
            { name: "Anush M.", rating: 3, comment: "Beautiful but requires more care than I expected with humidity needs." },
            { name: "Ravi N.", rating: 4, comment: "Gorgeous fern, arrived in great condition with detailed care instructions." }
        ]
    },
    {
        id: 14,
        title: "Arabian Jasmine",
        price: 650,
        description: "Arabian Jasmine (Jasminum sambac) is a fragrant flowering plant native to South and Southeast Asia.It produces small, white, star-shaped flowers with a sweet, intense fragrance.The flowers bloom primarily at night and are often used in perfumes and teas.Arabian Jasmine is the national flower of the Philippines and one of the three national flowers of Indonesia.It thrives in warm, humid climates and grows well in pots or garden beds.This evergreen shrub requires well-drained soil and plenty of sunlight.The plant is also popular in religious ceremonies and traditional garlands.",
        images: ["Arabian Jasmine 1.webp", "Arabian Jasmine 2.webp", "Arabian Jasmine 3.jpg", "Arabian Jasmine 4.jpg"],
        reviews: [
            { name: "Anush M.", rating: 3, comment: "Beautiful but requires more care than I expected with humidity needs." },
            { name: "Ravi N.", rating: 4, comment: "Gorgeous fern, arrived in great condition with detailed care instructions." }
        ]
    },
    {
        id: 15,
        title: "Tropical Hibiscus",
        price: 750,
        description: "The Tropical Hibiscus is a vibrant flowering plant known for its large, colorful blooms that come in shades of red, pink, orange, yellow, and white. It thrives in warm, sunny climates and is often used to add a tropical flair to gardens and patios. The plant has glossy, dark green leaves that provide a lush background for its striking flowers. Tropical Hibiscus blooms throughout the warmer months, attracting pollinators like butterflies and hummingbirds. It requires well-drained soil and regular watering to maintain its health and beauty. This plant can be grown in containers or directly in the ground. With proper care, it can bloom profusely and become a stunning focal point in any landscape.",
        images: ["Tropical Hibiscus 1.webp", "Tropical Hibiscus 2.jpeg", "Tropical Hibiscus 3.jpeg", "Tropical Hibiscus 4.jpg", "Tropical Hibiscus 5.jpg"],
        reviews: [
            { name: "Anush M.", rating: 3, comment: "Beautiful but requires more care than I expected with humidity needs." },
            { name: "Ravi N.", rating: 4, comment: "Gorgeous fern, arrived in great condition with detailed care instructions." }
        ]
    },
    {
        id: 16,
        title: "Mini Rose Plant",
        price: 599,
        description: "The Mini Rose Plant adds a charming touch to any indoor or outdoor space with its compact size and vibrant blooms.Perfect for gifting or personal decor, it symbolizes love, admiration, and appreciation.Its delicate petals come in a variety of colors, making each plant uniquely beautiful.Despite its small size, it offers a big impact with continuous blooming throughout the season.Easy to care for, it thrives in well-drained soil with moderate sunlight.Ideal for balconies, windowsills, or tabletops, it brings nature closer to you.",
        images: ["Mini Rose Plant 1.jpg", "Mini Rose Plant 2.jpeg", "Mini Rose Plant 3.jpg", "Mini Rose Plant 4.jpg"],
        reviews: [
            { name: "Anush M.", rating: 3, comment: "Beautiful but requires more care than I expected with humidity needs." },
            { name: "Ravi N.", rating: 4, comment: "Gorgeous fern, arrived in great condition with detailed care instructions." }
        ]
    },
    {
        id: 17,
        title: "Marigold Plant",
        price: 399,
        description: "The Marigold plant is known for its vibrant, golden-orange blooms that add a cheerful touch to any garden. It thrives in full sunlight and well-drained soil, making it easy to grow for beginners. Marigolds are often used as natural pest repellents due to their strong scent. They bloom throughout the summer and are excellent for borders, beds, and containers. These hardy plants require minimal maintenance and regular watering. Marigolds also have cultural significance and are used in festivals and decorations. Their bright flowers attract pollinators like bees and butterflies, enhancing garden health.",
        images: ["Marigold Plant 1.webp", "Marigold Plant 2.jpg", "Marigold Plant 3.jpg", "Marigold Plant 4.webp"],
        reviews: [
            { name: "Deepak R.", rating: 5, comment: "My Jade plant is thriving even in my low-light apartment. Love it!" },
            { name: "Meera T.", rating: 5, comment: "Such a low-maintenance plant. Perfect for busy people." }
        ]
    },
    {
        id: 18,
        title: "Azalea Plant",
        price: 950,
        description: "Azaleas are vibrant flowering shrubs known for their stunning, colorful blooms.They thrive in well-drained, acidic soil and prefer partial shade for best growth.These plants bloom primarily in spring, offering a spectacular display of color.Available in a wide range of hues—pink, red, white, purple—they suit any garden.Azaleas require regular watering, especially during dry spells, to stay healthy.",
        images: ["Azalea Plant 1.jpg", "Azalea Plant 2.webp", "Azalea Plant 3.jpg", "Azalea Plant 4.webp"],
        reviews: [
            { name: "Deepak R.", rating: 5, comment: "My Jade plant is thriving even in my low-light apartment. Love it!" },
            { name: "Meera T.", rating: 5, comment: "Such a low-maintenance plant. Perfect for busy people." }
        ]
    },
    {
        id: 19,
        title: "Bougainvillea",
        price: 699,
        description: "Bougainvillea is a vibrant, fast-growing ornamental plant known for its colorful bracts that resemble flowers. These bracts come in a variety of colors, including pink, purple, red, orange, and white. The true flowers are small, usually white or yellow, and nestled within the vivid bracts. Bougainvillea thrives in warm climates and requires full sunlight for optimal blooming. It is often used as a decorative vine on fences, walls, and trellises. The plant is drought-tolerant and can adapt to poor soil conditions.",
        images: ["Bougainvillea 1.jpg", "Bougainvillea 2.jpg", "Bougainvillea 3.jpeg", "Bougainvillea 4.jpg"],
        reviews: [
            { name: "Deepak R.", rating: 5, comment: "My Jade plant is thriving even in my low-light apartment. Love it!" },
            { name: "Meera T.", rating: 5, comment: "Such a low-maintenance plant. Perfect for busy people." }
        ]
    },
    {
        id: 20,
        title: "Gardenia",
        price: 1099,
        description: "Gardenia is a fragrant evergreen shrub known for its creamy white, waxy flowers.It thrives in warm, humid climates and prefers acidic, well-drained soil.The blooms often appear from late spring to early summer, filling gardens with a sweet aroma.Its glossy green leaves provide year-round beauty even when not in bloom.Gardenias are commonly used in ornamental gardens, patios, and indoor pots.",
        images: ["Gardenia 1.jpg", "Gardenia 2.jpeg", "Gardenia 3.jpg", "Gardenia 4.jpg"],
        reviews: [
            { name: "Deepak R.", rating: 5, comment: "My Jade plant is thriving even in my low-light apartment. Love it!" },
            { name: "Meera T.", rating: 5, comment: "Such a low-maintenance plant. Perfect for busy people." }
        ]
    },
    {
        id: 21,
        title: "Snake Plant",
        price: 799,
        description: "The timeless Snake Plant, or sansevieria, is one of the most beloved indoor houseplants thanks to its sturdy upright leaves, green markings, and adaptability to almost any environment. These plants can adapt to any indoor lighting and like to dry between waterings which makes them the ideal no-fuss plant.",
        images: ["Snake Plant 1.jpg", "Snake Plant 2.jpg", "Snake Plant 3.jpg", "Snake Plant 4.webp"],
        reviews: [
            { name: "Deepak R.", rating: 5, comment: "My Jade plant is thriving even in my low-light apartment. Love it!" },
            { name: "Meera T.", rating: 5, comment: "Such a low-maintenance plant. Perfect for busy people." }
        ]
    },
    {
        id: 22,
        title: "Spider Plant",
        price: 599,
        description: "The Spider Plant is among the most adaptable houseplants and is very easy to grow. A graceful plant that makes a statement anywhere—from a tabletop to a mantle, or as a hanging plant with its lovely arching leaves. The pet-friendly spider plant is also known for its air-purifying qualities, making it a healthy addition to your home.",
        images: ["Spider Plant 1.webp", "Spider Plant 2.jpg", "Spider Plant 3.jpeg", "Spider Plant 4.jpg"],
        reviews: [
            { name: "Deepak R.", rating: 5, comment: "My Jade plant is thriving even in my low-light apartment. Love it!" },
            { name: "Meera T.", rating: 5, comment: "Such a low-maintenance plant. Perfect for busy people." }
        ]
    },
    {
        id: 23,
        title: "Aloe Vera",
        price: 599,
        description: "Aloe vera plants are grown for medicinal value including improving digestion and boosting the immune system. They are also grown for extraction of the gel inside the leaves. The gel is used in desserts, yoghourts and beverages. The gel is also commonly used as a home remedy for treatment of burns and to prevent constipation. It is also used as a skin and hair nourisher.",
        images: ["Aloe Vera 1.jpg", "Aloe Vera 2.jpg", "Aloe Vera 3.jpg", "Aloe Vera 4.jpg"],
        reviews: [
            { name: "Deepak R.", rating: 5, comment: "My Jade plant is thriving even in my low-light apartment. Love it!" },
            { name: "Meera T.", rating: 5, comment: "Such a low-maintenance plant. Perfect for busy people." }
        ]
    },
    {
        id: 24,
        title: "Areca Palm",
        price: 1299,
        description: "he Areca Palm Tree, scientific name Chrysalidocarpus lutescens, is certainly one of the more popular palms in tropical and subtropical areas because of its gorgeous appearance and ease of care.  This palm tree can be grown indoors or outdoors. Make sure when you buy it that it was grown in either shade or sun, depending on your needs. ",
        images: ["Areca Palm 1.jpg", "Areca Palm 2.jpg", "Areca Palm 3.jpg", "Areca Palm 4.webp"],
        reviews: [
            { name: "Deepak R.", rating: 5, comment: "My Jade plant is thriving even in my low-light apartment. Love it!" },
            { name: "Meera T.", rating: 5, comment: "Such a low-maintenance plant. Perfect for busy people." }
        ]
    },
    {
        id: 25,
        title: "Rubber Plant",
        price: 899,
        description: "The Burgundy Rubber Tree is a spectacular indoor plant with thick, shiny leaves that range from its signature burgundy red to rich green and nearly black tones. A strong and sturdy plant, it’s ready to fill that bright spot in your home with a dose of drama. Though generally low-maintenance, it doesn’t like change—so pick the perfect spot and let it do its thing!",
        images: ["Rubber Plant 1.jpg", "Rubber Plant 2.jpg", "Rubber Plant 3.jpg", "Rubber Plant 4.jpg"],
        reviews: [
            { name: "Deepak R.", rating: 5, comment: "My Jade plant is thriving even in my low-light apartment. Love it!" },
            { name: "Meera T.", rating: 5, comment: "Such a low-maintenance plant. Perfect for busy people." }
        ]
    },
    {
        id: 26,
        title: "ZZ Plant",
        price: 849,
        description: "Nearly indestructible, the ZZ Plant is ideal for beginner plant owners and those who don’t have the time for an extensive plant care routine. The ZZ is adaptable to many indoor environments, and is tolerant of low light and less than frequent waterings.",
        images: ["ZZ Plant 1.jpg", "ZZ Plant 2.webp", "ZZ Plant 3.jpeg", "ZZ Plant 4.avif"],
        reviews: [
            { name: "Deepak R.", rating: 5, comment: "My Jade plant is thriving even in my low-light apartment. Love it!" },
            { name: "Meera T.", rating: 5, comment: "Such a low-maintenance plant. Perfect for busy people." }
        ]
    },
    {
        id: 28,
        title: "Peace Lily",
        price: 999,
        description: "The Peace Lily is one of the most popular staple plants in the houseplant world. Its broad, deep green leaves bring a lush tropical vibe reminiscent of the jungles it comes from. The creamy white blooms are called spathes, which house tiny flowers. The rich white color of the spathes has come to signify peace, prosperity, and remembrance.",
        images: ["Peace Lily 1.jpg", "Peace Lily 2.avif", "Peace Lily 3.jpeg", "Peace Lily 4.jpg"],
        reviews: [
            { name: "Deepak R.", rating: 5, comment: "My Jade plant is thriving even in my low-light apartment. Love it!" },
            { name: "Meera T.", rating: 5, comment: "Such a low-maintenance plant. Perfect for busy people." }
        ]
    },
    {
        id: 27,
        title: "Boston Fern",
        price: 699,
        description: "Boston Fern is an incredibly popular houseplant that belongs to the species of fern in the family Lomariopsidaceae native to tropical regions throughout the world. It is an evergreen perennial herbaceous plant that can reach up to a height of 16-35 inches. The Boston Fern plant is known for its lush foliage and feathery ferns which are best displayed when hanging.",
        images: ["Boston Fern 1.webp", "Boston Fern 2.jpg", "Boston Fern 3.jpg", "Boston Fern 4.jpeg"],
        reviews: [
            { name: "Deepak R.", rating: 5, comment: "My Jade plant is thriving even in my low-light apartment. Love it!" },
            { name: "Meera T.", rating: 5, comment: "Such a low-maintenance plant. Perfect for busy people." }
        ]
    },
    {
        id: 29,
        title: "Dracaena",
        price: 799,
        description: "The Dracaena Golden Heart is one of the easiest indoor plants around. The brightly striped leaves of this plant will flourish and adapt to almost any indoor environment. With glossy green to yellow foliage, this upright tropical houseplant thrives as a low-light interior plant and even adapts to fluorescent lighting. Also able to grow well in indirect bright light, the foliage will lighten in color. The Dracaena Golden Heart is native to tropical regions of Africa.",
        images: ["Dracaena 1.jpg", "Dracaena 2.webp", "Dracaena 3.jpg", "Dracaena 4.jpg"],
        reviews: [
            { name: "Deepak R.", rating: 5, comment: "My Jade plant is thriving even in my low-light apartment. Love it!" },
            { name: "Meera T.", rating: 5, comment: "Such a low-maintenance plant. Perfect for busy people." }
        ]
    },
    {
        id: 30,
        title: "English Ivy",
        price: 399,
        description: "English ivy comes in many shades of green, as well as silver, white, gold or chartreuse speckled shades. Leaf shapes also depend on the exact species, with some having smaller three-pronged leaves and others have wider or pointy leaves. Some species also produce dark, berry-like fruits.",
        images: ["English Ivy 1.jpg", "English Ivy 2.jpg", "English Ivy 3.webp", "English Ivy 4.jpg"],
        reviews: [
            { name: "Deepak R.", rating: 5, comment: "My Jade plant is thriving even in my low-light apartment. Love it!" },
            { name: "Meera T.", rating: 5, comment: "Such a low-maintenance plant. Perfect for busy people." }
        ]
    },

];

// Global variables
let cart = [];
let currentOrder = null;
let orders = [];
let currentSlide = 0;
let slideInterval;

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the site
    initSlider();
    setupEventListeners();
    showSection('home-section');
});

function initSlider() {
    // Start automatic slider
    slideInterval = setInterval(nextSlide, 5000);
    
    // Set up slider dots
    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            goToSlide(index);
            slideInterval = setInterval(nextSlide, 5000);
        });
    });
}

function setupEventListeners() {
    // Navigation
    document.getElementById('home-link').addEventListener('click', () => showSection('home-section'));
    document.getElementById('cart-link').addEventListener('click', () => {
        updateCartView();
        showSection('cart-section');
    });
    
    // Slider navigation
    document.getElementById('prev-slide').addEventListener('click', () => {
        clearInterval(slideInterval);
        prevSlide();
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    document.getElementById('next-slide').addEventListener('click', () => {
        clearInterval(slideInterval);
        nextSlide();
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const productId = parseInt(card.getAttribute('data-id'));
            showProductDetails(productId);
        });
    });
    
    // Product detail buttons
    document.getElementById('buy-now-btn').addEventListener('click', buyNow);
    document.getElementById('add-to-cart-btn').addEventListener('click', addToCartFromDetails);
    document.getElementById('back-btn').addEventListener('click', () => showSection('home-section'));
    
    // Cart buttons
    document.getElementById('checkout-btn').addEventListener('click', () => {
        if (cart.length > 0) {
            updateOrderSummary();
            showSection('payment-section');
        } else {
            alert('Your cart is empty!');
        }
    });
    document.getElementById('continue-shopping-btn').addEventListener('click', () => showSection('home-section'));
    
    // Payment buttons
    document.getElementById('place-order-btn').addEventListener('click', placeOrder);
    document.getElementById('back-to-cart-btn').addEventListener('click', () => showSection('cart-section'));
    
    // Order confirmation
    document.getElementById('continue-shopping-after-order').addEventListener('click', () => {
        cart = [];
        updateCartCounter();
        showSection('home-section');
    });
    
    // Your orders
    document.getElementById('back-to-home-from-orders').addEventListener('click', () => showSection('home-section'));
}

// Slider functions
function goToSlide(slideIndex) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
    currentSlide = slideIndex;
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + 1) % slides.length;
    goToSlide(currentSlide);
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(currentSlide);
}

// Section visibility
function showSection(sectionId) {
    // Hide all sections
    const sections = [
        'home-section', 
        'product-details', 
        'cart-section', 
        'payment-section', 
        'order-confirmation',
        'your-order-section'
    ];
    
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.style.display = 'none';
        }
    });
    
    // Show the requested section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}
// Product details functions
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Set product details
    document.getElementById('details-title').textContent = product.title;
    document.getElementById('details-price').textContent = `₹${product.price}`;
    document.getElementById('details-description').textContent = product.description;
    
    // Set up gallery
    const galleryContainer = document.getElementById('gallery-container');
    const galleryThumbnails = document.getElementById('gallery-thumbnails');
    
    galleryContainer.innerHTML = '';
    galleryThumbnails.innerHTML = '';
    
    product.images.forEach((image, index) => {
        // Add main image
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = `${product.title} Image ${index + 1}`;
        imgElement.className = index === 0 ? 'gallery-image active' : 'gallery-image';
        galleryContainer.appendChild(imgElement);
        
        // Add thumbnail
        const thumbElement = document.createElement('img');
        thumbElement.src = image;
        thumbElement.alt = `${product.title} Thumbnail ${index + 1}`;
        thumbElement.className = index === 0 ? 'gallery-thumbnail active' : 'gallery-thumbnail';
        thumbElement.addEventListener('click', () => {
            document.querySelectorAll('.gallery-image').forEach(img => img.classList.remove('active'));
            document.querySelectorAll('.gallery-thumbnail').forEach(thumb => thumb.classList.remove('active'));
            document.querySelectorAll('.gallery-image')[index].classList.add('active');
            thumbElement.classList.add('active');
        });
        galleryThumbnails.appendChild(thumbElement);
    });
    
    // Set up gallery navigation
    document.getElementById('prev-image').addEventListener('click', prevImage);
    document.getElementById('next-image').addEventListener('click', nextImage);
    
    // Set up reviews
    const reviewsContainer = document.getElementById('product-reviews');
    reviewsContainer.innerHTML = '';
    
    if (product.reviews && product.reviews.length > 0) {
        product.reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.className = 'review';
            
            const ratingStars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
            
            reviewElement.innerHTML = `
                <div class="review-header">
                    <div class="review-name">${review.name}</div>
                    <div class="review-rating">${ratingStars}</div>
                </div>
                <div class="review-comment">${review.comment}</div>
            `;
            
            reviewsContainer.appendChild(reviewElement);
        });
    } else {
        reviewsContainer.innerHTML = '<p>No reviews yet for this product.</p>';
    }
    
    // Store current product ID in a data attribute for the cart
    document.getElementById('add-to-cart-btn').setAttribute('data-id', productId);
    document.getElementById('buy-now-btn').setAttribute('data-id', productId);
    
    // Show the product details section
    showSection('product-details');
}

function prevImage() {
    const images = document.querySelectorAll('.gallery-image');
    const thumbnails = document.querySelectorAll('.gallery-thumbnail');
    const activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    
    const newIndex = (activeIndex - 1 + images.length) % images.length;
    
    images.forEach(img => img.classList.remove('active'));
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    
    images[newIndex].classList.add('active');
    thumbnails[newIndex].classList.add('active');
}

function nextImage() {
    const images = document.querySelectorAll('.gallery-image');
    const thumbnails = document.querySelectorAll('.gallery-thumbnail');
    const activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    
    const newIndex = (activeIndex + 1) % images.length;
    
    images.forEach(img => img.classList.remove('active'));
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    
    images[newIndex].classList.add('active');
    thumbnails[newIndex].classList.add('active');
}

// Cart functions
function addToCartFromDetails() {
    const productId = parseInt(document.getElementById('add-to-cart-btn').getAttribute('data-id'));
    addToCart(productId);
}

function buyNow() {
    const productId = parseInt(document.getElementById('buy-now-btn').getAttribute('data-id'));
    addToCart(productId);
    updateCartView();
    showSection('cart-section');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Check if product is already in cart
    const existingItem = cart.find(item => item.product.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            product: product,
            quantity: 1
        });
    }
    
    updateCartCounter();
    showAddToCartConfirmation(product.title);
}

function updateCartCounter() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const cartLink = document.getElementById('cart-link');
    cartLink.textContent = `🛒 Cart (${totalItems})`;
}

function showAddToCartConfirmation(productTitle) {
    // Create a floating notification
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = `${productTitle} added to cart!`;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 2500);
}

function updateCartView() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total-price');
    
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-message">Your cart is empty. <a href="#" id="empty-cart-link">Start shopping!</a></p>';
        document.getElementById('empty-cart-link').addEventListener('click', () => showSection('home-section'));
        cartTotalElement.textContent = '₹0';
        return;
    }
    
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.product.price * item.quantity;
        total += itemTotal;
        
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.product.images[0]}" alt="${item.product.title}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.product.title}</div>
                <div class="cart-item-price">₹${item.product.price}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn decrease" data-index="${index}">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn increase" data-index="${index}">+</button>
            </div>
            <div class="cart-item-total">₹${itemTotal}</div>
            <button class="remove-item-btn" data-index="${index}">×</button>
        `;
        
        cartItemsContainer.appendChild(cartItemElement);
    });
    
    // Add event listeners to quantity buttons
    document.querySelectorAll('.quantity-btn.decrease').forEach(btn => {
        btn.addEventListener('click', () => decreaseQuantity(parseInt(btn.getAttribute('data-index'))));
    });
    
    document.querySelectorAll('.quantity-btn.increase').forEach(btn => {
        btn.addEventListener('click', () => increaseQuantity(parseInt(btn.getAttribute('data-index'))));
    });
    
    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item-btn').forEach(btn => {
        btn.addEventListener('click', () => removeCartItem(parseInt(btn.getAttribute('data-index'))));
    });
    
    cartTotalElement.textContent = `₹${total}`;
}
function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        removeCartItem(index);
        return;
    }
    updateCartView();
    updateCartCounter();
}

function increaseQuantity(index) {
    cart[index].quantity += 1;
    updateCartView();
    updateCartCounter();
}

function removeCartItem(index) {
    cart.splice(index, 1);
    updateCartView();
    updateCartCounter();
}

// Checkout functions
function updateOrderSummary() {
    const orderItemsContainer = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');
    
    orderItemsContainer.innerHTML = '';
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.product.price * item.quantity;
        total += itemTotal;
        
        const orderItemElement = document.createElement('div');
        orderItemElement.className = 'order-item';
        orderItemElement.innerHTML = `
            <div class="order-item-name">${item.product.title} × ${item.quantity}</div>
            <div class="order-item-price">₹${itemTotal}</div>
        `;
        
        orderItemsContainer.appendChild(orderItemElement);
    });
    
    orderTotalElement.textContent = `Total: ₹${total}`;
}

function placeOrder() {
    // Validate form fields
    const requiredFields = [
        'name', 'address', 'city', 'pincode', 'phone',
        'card-number', 'expiry', 'cvv', 'name-on-card'
    ];
    
    let isValid = true;
    
    requiredFields.forEach(field => {
        const input = document.getElementById(field);
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });
    
    if (!isValid) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Create order
    const orderNumber = generateOrderNumber();
    const orderDate = new Date().toLocaleDateString('en-IN');
    const trackingNumber = generateTrackingNumber();
    
    currentOrder = {
        id: orderNumber,
        date: orderDate,
        items: [...cart],
        total: cart.reduce((total, item) => total + (item.product.price * item.quantity), 0),
        shippingDetails: {
            name: document.getElementById('name').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            pincode: document.getElementById('pincode').value,
            phone: document.getElementById('phone').value
        },
        trackingNumber: trackingNumber,
        status: 'Processing'
    };
    
    // Add to orders history
    orders.push(currentOrder);
    
    // Update confirmation view
    document.getElementById('order-id').textContent = orderNumber;
    document.getElementById('order-date').textContent = orderDate;
    
    const confirmationItemsContainer = document.getElementById('confirmation-items');
    confirmationItemsContainer.innerHTML = '';
    
    currentOrder.items.forEach(item => {
        const confirmationItemElement = document.createElement('div');
        confirmationItemElement.className = 'confirmation-item';
        confirmationItemElement.innerHTML = `
            <div class="confirmation-item-name">${item.product.title} × ${item.quantity}</div>
            <div class="confirmation-item-price">₹${item.product.price * item.quantity}</div>
        `;
        
        confirmationItemsContainer.appendChild(confirmationItemElement);
    });
    
    document.getElementById('confirmation-total').textContent = `₹${currentOrder.total}`;
    
    document.getElementById('shipping-address').innerHTML = `
        <p>${currentOrder.shippingDetails.name}<br>
        ${currentOrder.shippingDetails.address}<br>
        ${currentOrder.shippingDetails.city}, ${currentOrder.shippingDetails.pincode}<br>
        Phone: ${currentOrder.shippingDetails.phone}</p>
    `;
    
    document.getElementById('tracking-number').textContent = trackingNumber;
    
    // Clear cart
    cart = [];
    updateCartCounter();
    
    // Show confirmation
    showSection('order-confirmation');
}

function generateOrderNumber() {
    const prefix = 'VL';
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 900) + 100; // 3-digit random number
    return `${prefix}${timestamp}${random}`;
}

function generateTrackingNumber() {
    const prefix = 'VLTRK';
    const random = Math.floor(Math.random() * 9000000) + 1000000; // 7-digit random number
    return `${prefix}${random}IN`;
}

// Your Orders functions
document.addEventListener('DOMContentLoaded', function() {
    // Add Your Order link click event
    const yourOrderLink = document.querySelector('a[href="#"]:nth-child(3)');
    if (yourOrderLink) {
        yourOrderLink.addEventListener('click', function(e) {
            e.preventDefault();
            showYourOrders();
            showSection('your-order-section');
        });
    }
});

function showYourOrders() {
    const ordersContainer = document.getElementById('orders-container');
    
    ordersContainer.innerHTML = '';
    
    if (orders.length === 0) {
        ordersContainer.innerHTML = '<div class="no-orders-message">You don\'t have any orders yet.</div>';
        return;
    }
    
    orders.forEach(order => {
        const orderElement = document.createElement('div');
        orderElement.className = 'order-card';
        
        const orderDate = new Date(order.date).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        let itemsList = '';
        order.items.forEach(item => {
            itemsList += `<li>${item.product.title} × ${item.quantity}</li>`;
        });
        
        orderElement.innerHTML = `
            <div class="order-header">
                <div class="order-id-container">
                    <div class="order-label">Order ID:</div>
                    <div class="order-id-value">${order.id}</div>
                </div>
                <div class="order-date-container">
                    <div class="order-label">Placed on:</div>
                    <div class="order-date-value">${orderDate}</div>
                </div>
            </div>
            
            <div class="order-items-summary">
                <h4>Items:</h4>
                <ul>${itemsList}</ul>
            </div>
            
            <div class="order-footer">
                <div class="order-status ${order.status.toLowerCase()}">
                    <span class="status-indicator"></span>
                    ${order.status}
                </div>
                <div class="order-total">Total: ₹${order.total}</div>
            </div>
            
            <div class="order-tracking">
                <div class="tracking-label">Tracking Number:</div>
                <div class="tracking-value">${order.trackingNumber}</div>
            </div>
        `;
        
        ordersContainer.appendChild(orderElement);
    });
}

// Add some CSS rules programmatically
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .cart-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #4CAF50;
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            z-index: 1000;
            opacity: 1;
            transition: opacity 0.5s;
        }
        
        .error {
            border: 1px solid #f44336 !important;
            background-color: #fff8f8;
        }
        
        .processing .status-indicator {
            background-color: #FFC107;
        }
        
        .shipped .status-indicator {
            background-color: #2196F3;
        }
        
        .delivered .status-indicator {
            background-color: #4CAF50;
        }
        
        
    `;
    document.head.appendChild(style);
});

// Order Tracking & Cancellation System
document.addEventListener('DOMContentLoaded', function() {
    // Initialize order tracking modal
    initOrderTrackingSystem();
    
    // Initialize animations
    initAnimations();
    
    // Perfect image adjustments
    adjustImages();
});

function initOrderTrackingSystem() {
    // Create order tracking modal
    const trackingModal = document.createElement('div');
    trackingModal.id = 'tracking-modal';
    trackingModal.className = 'modal';
    trackingModal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>Order Tracking</h2>
            <div class="tracking-container">
                <div class="tracking-header">
                    <div>
                        <h3>Order: <span id="modal-order-id"></span></h3>
                        <p>Placed on: <span id="modal-order-date"></span></p>
                    </div>
                    <div id="order-status-badge" class="order-status-badge processing">Processing</div>
                </div>
                
                <div class="tracking-progress">
                    <div class="tracking-step completed">
                        <div class="step-icon">📋</div>
                        <div class="step-line"></div>
                        <div class="step-content">
                            <h4>Order Placed</h4>
                            <p>Your order has been received</p>
                            <div class="step-date" id="step-order-date"></div>
                        </div>
                    </div>
                    
                    <div class="tracking-step" id="processing-step">
                        <div class="step-icon">🔄</div>
                        <div class="step-line"></div>
                        <div class="step-content">
                            <h4>Processing</h4>
                            <p>Your order is being processed</p>
                            <div class="step-date" id="step-processing-date"></div>
                        </div>
                    </div>
                    
                    <div class="tracking-step" id="shipped-step">
                        <div class="step-icon">📦</div>
                        <div class="step-line"></div>
                        <div class="step-content">
                            <h4>Shipped</h4>
                            <p>Your order is on the way</p>
                            <div class="step-date" id="step-shipped-date"></div>
                        </div>
                    </div>
                    
                    <div class="tracking-step" id="delivered-step">
                        <div class="step-icon">🏡</div>
                        <div class="step-content">
                            <h4>Delivered</h4>
                            <p>Your order has been delivered</p>
                            <div class="step-date" id="step-delivered-date"></div>
                        </div>
                    </div>
                </div>
                
                <div class="tracking-details">
                    <h3>Shipping Details</h3>
                    <div id="modal-shipping-address"></div>
                    
                    <h3>Items</h3>
                    <div id="modal-order-items"></div>
                    
                    <div class="tracking-total">
                        Total: <span id="modal-order-total"></span>
                    </div>
                </div>
                
                <div class="tracking-actions" id="tracking-actions">
                    <button id="cancel-order-btn" class="btn btn-danger">Cancel Order</button>
                    <button id="contact-support-btn" class="btn btn-secondary">Contact Support</button>
                </div>
                
                <div id="cancellation-confirmation" class="cancellation-confirmation" style="display: none;">
                    <div class="confirmation-message">
                        <h3>Are you sure you want to cancel this order?</h3>
                        <p>This action cannot be undone.</p>
                    </div>
                    <div class="confirmation-buttons">
                        <button id="confirm-cancel-btn" class="btn btn-danger">Yes, Cancel Order</button>
                        <button id="cancel-cancel-btn" class="btn btn-secondary">No, Keep Order</button>
                    </div>
                </div>
                
                <div id="cancellation-success" class="cancellation-success" style="display: none;">
                    <div class="success-icon">✓</div>
                    <h3>Order Cancelled Successfully</h3>
                    <p>Your order has been cancelled and a refund will be processed within 5-7 business days.</p>
                    <button id="close-success-btn" class="btn btn-primary">Close</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(trackingModal);
    
    // Close modal on X click
    document.querySelector('.close-modal').addEventListener('click', closeTrackingModal);
    
    // Close modal on outside click
    window.addEventListener('click', function(event) {
        if (event.target === trackingModal) {
            closeTrackingModal();
        }
    });
    
    // Cancel order button
    document.getElementById('cancel-order-btn').addEventListener('click', function() {
        document.getElementById('tracking-actions').style.display = 'none';
        document.getElementById('cancellation-confirmation').style.display = 'block';
    });
    
    // Confirm cancellation
    document.getElementById('confirm-cancel-btn').addEventListener('click', function() {
        const orderId = document.getElementById('modal-order-id').textContent;
        cancelOrder(orderId);
        document.getElementById('cancellation-confirmation').style.display = 'none';
        document.getElementById('cancellation-success').style.display = 'block';
    });
    
    // Cancel cancellation
    document.getElementById('cancel-cancel-btn').addEventListener('click', function() {
        document.getElementById('cancellation-confirmation').style.display = 'none';
        document.getElementById('tracking-actions').style.display = 'flex';
    });
    
    // Close success message
    document.getElementById('close-success-btn').addEventListener('click', function() {
        closeTrackingModal();
        showYourOrders();
    });
    
    // Contact support - simulate opening a support chat
    document.getElementById('contact-support-btn').addEventListener('click', function() {
        alert('Our customer support team will contact you shortly regarding your order.');
    });
}

function showTrackingModal(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    
    // Fill modal with order details
    document.getElementById('modal-order-id').textContent = order.id;
    document.getElementById('modal-order-date').textContent = order.date;
    document.getElementById('step-order-date').textContent = order.date;
    
    // Set order status
    const statusBadge = document.getElementById('order-status-badge');
    statusBadge.className = `order-status-badge ${order.status.toLowerCase()}`;
    statusBadge.textContent = order.status;
    
    // Update tracking steps based on status
    const processingStep = document.getElementById('processing-step');
    const shippedStep = document.getElementById('shipped-step');
    const deliveredStep = document.getElementById('delivered-step');
    
    // Reset all steps
    processingStep.className = 'tracking-step';
    shippedStep.className = 'tracking-step';
    deliveredStep.className = 'tracking-step';
    
    document.getElementById('step-processing-date').textContent = '';
    document.getElementById('step-shipped-date').textContent = '';
    document.getElementById('step-delivered-date').textContent = '';
    
    // Set step dates and classes based on status
    const today = new Date();
    
    if (order.status === 'Processing' || order.status === 'Shipped' || order.status === 'Delivered') {
        processingStep.classList.add('completed');
        document.getElementById('step-processing-date').textContent = 
            new Date(today.setDate(today.getDate() - 1)).toLocaleDateString('en-IN');
    }
    
    if (order.status === 'Shipped' || order.status === 'Delivered') {
        shippedStep.classList.add('completed');
        document.getElementById('step-shipped-date').textContent = 
            new Date(today.setDate(today.getDate() - 1)).toLocaleDateString('en-IN');
    }
    
    if (order.status === 'Delivered') {
        deliveredStep.classList.add('completed');
        document.getElementById('step-delivered-date').textContent = 
            new Date().toLocaleDateString('en-IN');
    }
    
    // Cancel button visibility based on status
    if (order.status === 'Cancelled' || order.status === 'Delivered') {
        document.getElementById('cancel-order-btn').style.display = 'none';
    } else {
        document.getElementById('cancel-order-btn').style.display = 'block';
    }
    
    // Shipping address
    document.getElementById('modal-shipping-address').innerHTML = `
        <p>${order.shippingDetails.name}<br>
        ${order.shippingDetails.address}<br>
        ${order.shippingDetails.city}, ${order.shippingDetails.pincode}<br>
        Phone: ${order.shippingDetails.phone}</p>
    `;
    
    // Order items
    const itemsContainer = document.getElementById('modal-order-items');
    itemsContainer.innerHTML = '';
    
    order.items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'tracking-item';
        
        itemElement.innerHTML = `
            <div class="tracking-item-name">${item.product.title} × ${item.quantity}</div>
            <div class="tracking-item-price">₹${item.product.price * item.quantity}</div>
        `;
        
        itemsContainer.appendChild(itemElement);
    });
    
    // Order total
    document.getElementById('modal-order-total').textContent = `₹${order.total}`;
    
    // Reset cancellation UI
    document.getElementById('tracking-actions').style.display = 'flex';
    document.getElementById('cancellation-confirmation').style.display = 'none';
    document.getElementById('cancellation-success').style.display = 'none';
    
    // Show modal
    document.getElementById('tracking-modal').style.display = 'block';
    
    // Add animation
    setTimeout(() => {
        document.querySelector('.modal-content').classList.add('show-modal');
    }, 10);
}

function closeTrackingModal() {
    document.querySelector('.modal-content').classList.remove('show-modal');
    
    setTimeout(() => {
        document.getElementById('tracking-modal').style.display = 'none';
    }, 300);
}

function cancelOrder(orderId) {
    const orderIndex = orders.findIndex(o => o.id === orderId);
    if (orderIndex === -1) return;
    
    orders[orderIndex].status = 'Cancelled';
    
    // Update orders view
    showYourOrders();
}

// Enhance showYourOrders to include tracking and cancel buttons
function showYourOrders() {
    const ordersContainer = document.getElementById('orders-container');
    
    ordersContainer.innerHTML = '';
    
    if (orders.length === 0) {
        ordersContainer.innerHTML = '<div class="no-orders-message">You don\'t have any orders yet.</div>';
        return;
    }
    
    orders.forEach(order => {
        const orderElement = document.createElement('div');
        orderElement.className = 'order-card';
        
        const orderDate = new Date(order.date).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        let itemsList = '';
        order.items.forEach(item => {
            itemsList += `<li>${item.product.title} × ${item.quantity}</li>`;
        });
        
        // Show cancel button only for processing orders
        const cancelButton = order.status !== 'Cancelled' && order.status !== 'Delivered' ? 
            `<button class="btn btn-danger cancel-order-list-btn" data-id="${order.id}">Cancel</button>` : '';
        
        orderElement.innerHTML = `
            <div class="order-header">
                <div class="order-id-container">
                    <div class="order-label">Order ID:</div>
                    <div class="order-id-value">${order.id}</div>
                </div>
                <div class="order-date-container">
                    <div class="order-label">Placed on:</div>
                    <div class="order-date-value">${orderDate}</div>
                </div>
            </div>
            
            <div class="order-items-summary">
                <h4>Items:</h4>
                <ul>${itemsList}</ul>
            </div>
            
            <div class="order-footer">
                <div class="order-status ${order.status.toLowerCase()}">
                    <span class="status-indicator"></span>
                    ${order.status}
                </div>
                <div class="order-total">Total: ₹${order.total}</div>
            </div>
            
            <div class="order-tracking">
                <div class="tracking-label">Tracking Number:</div>
                <div class="tracking-value">${order.trackingNumber}</div>
            </div>
            
            <div class="order-actions">
                <button class="btn btn-primary track-order-btn" data-id="${order.id}">Track Order</button>
                ${cancelButton}
            </div>
        `;
        
        ordersContainer.appendChild(orderElement);
    });
    
    // Add event listeners to track buttons
    document.querySelectorAll('.track-order-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const orderId = this.getAttribute('data-id');
            showTrackingModal(orderId);
        });
    });
    
    // Add event listeners to cancel buttons
    document.querySelectorAll('.cancel-order-list-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const orderId = this.getAttribute('data-id');
            
            if (confirm('Are you sure you want to cancel this order?')) {
                cancelOrder(orderId);
                
                // Show confirmation message
                const confirmationMessage = document.createElement('div');
                confirmationMessage.className = 'order-cancelled-message';
                confirmationMessage.textContent = 'Order cancelled successfully!';
                
                // Insert after the button
                this.parentNode.insertBefore(confirmationMessage, this.nextSibling);
                
                // Remove button
                this.remove();
                
                // Remove message after 3 seconds
                setTimeout(() => {
                    confirmationMessage.remove();
                }, 3000);
            }
        });
    });
}
// Image adjustment and animation functions
function adjustImages() {
    // Product card image hover effects
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const frontImage = card.querySelector('.product-image');
        const backImage = card.querySelector('.product-image-back');
        
        if (frontImage && backImage) {
            // Make sure images have proper dimensions and object-fit
            frontImage.style.width = '100%';
            frontImage.style.height = '500px';
            frontImage.style.objectFit = 'cover';
            
            backImage.style.width = '100%';
            backImage.style.height = '500px';
            backImage.style.objectFit = 'cover';
        }
    });
    
    // Gallery images in product details
    const galleryContainer = document.getElementById('gallery-container');
    if (galleryContainer) {
        galleryContainer.style.height = '500px';
        galleryContainer.style.width = '100%';
        galleryContainer.style.overflow = 'hidden';
        
        // Make sure all gallery images have proper dimensions
        const galleryImages = galleryContainer.querySelectorAll('img');
        galleryImages.forEach(img => {
            img.style.width = '100%';
            img.style.height = '500px';
            img.style.objectFit = 'contain';
        });
    }
    
    // Banner images
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.style.backgroundSize = 'cover';
        slide.style.backgroundPosition = 'center';
        slide.style.height = '500px';
    });
    
    // Cart item images
    document.addEventListener('DOMContentLoaded', function() {
        adjustCartImages();
    });
    
    // Adjust thumbnail images in product details
    const thumbnails = document.querySelectorAll('.gallery-thumbnail');
    thumbnails.forEach(thumb => {
        thumb.style.width = '60px';
        thumb.style.height = '80px';
        thumb.style.objectFit = 'cover';
        thumb.style.borderRadius = '4px';
    });
}

function adjustCartImages() {
    const cartItemImages = document.querySelectorAll('.cart-item-image img');
    cartItemImages.forEach(img => {
        img.style.width = '80px';
        img.style.height = '100px';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '4px';
    });
}

function initAnimations() {
    // Add animation classes
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        /* Animation keyframes */
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideInRight {
            from { transform: translateX(50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInLeft {
            from { transform: translateX(-50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes zoomIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-20px); }
            60% { transform: translateY(-10px); }
        }
        
        /* Applied animations */
        .slide.active .slide-content {
            animation: slideInRight 0.8s ease forwards;
        }
        
        .product-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .product-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .product-image-wrapper {
            overflow: hidden;
            position: relative;
        }
        
        .product-image {
            transition: all 0.5s ease;
        }
        
        .product-image-back {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        .product-card:hover .product-image {
            opacity: 0;
        }
        
        .product-card:hover .product-image-back {
            opacity: 1;
        }
        
        .btn {
            transition: all 0.3s ease;
        }
        
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .product-details-container {
            animation: fadeIn 0.8s ease forwards;
        }
        
        .product-gallery img.active {
            animation: zoomIn 0.5s ease forwards;
        }
        
        .cart-item {
            animation: slideInLeft 0.5s ease forwards;
        }
        
        .order-card {
            animation: fadeIn 0.8s ease forwards;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .order-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }
        
        .tracking-step.completed {
            animation: pulse 1s ease;
        }
        
        .modal-content {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        .modal-content.show-modal {
            opacity: 1;
            transform: translateY(0);
        }
        
        .order-success-icon {
            animation: bounce 1s ease;
        }
        
        .step-icon {
            animation: pulse 2s infinite;
        }
        
        /* Additional styling */
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.5);
            padding-top: 60px;
        }
        
        .modal-content {
            background-color: #fefefe;
            margin: 5% auto;
            padding: 20px;
            border-radius: 8px;
            width: 80%;
            max-width: 800px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .close-modal {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
        }
        
        .close-modal:hover {
            color: black;
        }
        
        .tracking-container {
            padding: 20px;
        }
        
        .tracking-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }
        
        .order-status-badge {
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: bold;
            color: white;
        }
        
        .order-status-badge.processing {
            background-color: #FFC107;
        }
        
        .order-status-badge.shipped {
            background-color: #2196F3;
        }
        
        .order-status-badge.delivered {
            background-color: #4CAF50;
        }
        
        .order-status-badge.cancelled {
            background-color: #F44336;
        }
        
        .tracking-progress {
            margin: 40px 0;
        }
        
        .tracking-step {
            display: flex;
            align-items: flex-start;
            position: relative;
            margin-bottom: 30px;
        }
        
        .step-icon {
            width: 40px;
            height: 40px;
            background-color: #e0e0e0;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            margin-right: 20px;
            z-index: 1;
        }
        
        .tracking-step.completed .step-icon {
            background-color: #4CAF50;
            color: white;
        }
        
        .step-line {
            position: absolute;
            top: 40px;
            left: 20px;
            width: 2px;
            height: 30px;
            background-color: #e0e0e0;
        }
        
        .tracking-step.completed .step-line {
            background-color: #4CAF50;
        }
        
        .tracking-step:last-child .step-line {
            display: none;
        }
        
        .step-content {
            flex: 1;
        }
        
        .step-content h4 {
            margin: 0 0 5px 0;
        }
        
        .step-content p {
            margin: 0;
            color: #757575;
        }
        
        .step-date {
            color: #9e9e9e;
            font-size: 0.9em;
            margin-top: 5px;
        }
        
        .tracking-details {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
        }
        
        .tracking-item {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #f0f0f0;
        }
        
        .tracking-total {
            text-align: right;
            font-weight: bold;
            margin-top: 20px;
            font-size: 1.1em;
        }
        
        .tracking-actions {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            margin-top: 30px;
        }
        
        .cancellation-confirmation {
            background-color: #fff8f8;
            border: 1px solid #ffcdd2;
            border-radius: 8px;
            padding: 20px;
            margin-top: 30px;
            text-align: center;
        }
        
        .confirmation-buttons {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 20px;
        }
        
        .cancellation-success {
            text-align: center;
            padding: 30px 20px;
        }
        
        .success-icon {
            font-size: 40px;
            color: #4CAF50;
            background-color: #e8f5e9;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto 20px;
        }
        
        .btn-danger {
            background-color: #f44336;
            color: white;
            border: none;
        }
        
        .btn-danger:hover {
            background-color: #d32f2f;
        }
        
        .order-cancelled-message {
            color: #4CAF50;
            font-weight: bold;
            margin-top: 10px;
            animation: fadeIn 0.5s ease forwards;
        }
        
        /* Better product card styling */
        .product-card {
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .product-info {
            padding: 15px;
        }
        
        .product-title {
            font-weight: bold;
            margin-bottom: 5px;
        }
        
        .product-price {
            color: #4CAF50;
            font-weight: 600;
        }
    `;
    
    document.head.appendChild(styleElement);
    
    // Add animation to product cards on load
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeIn 0.5s ease forwards ${0.1 * index}s`;
    });
    
    // Add animation to footer sections
    const footerSections = document.querySelectorAll('.footer-section');
    footerSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.animation = `slideInUp 0.5s ease forwards ${0.1 * index}s`;
    });
    
    // Add scroll animations
    document.addEventListener('scroll', function() {
        animateOnScroll();
    });
}
// Scroll animation function
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animated');
        }
    });
}

// Add scroll animation class to elements
document.addEventListener('DOMContentLoaded', function() {
    // Add animation class to various elements
    document.querySelectorAll('.category-title, .product-card, .footer-section').forEach(el => {
        el.classList.add('animate-on-scroll');
    });
    
    // Initial animation check
    animateOnScroll();
    
    // Add CSS for scroll animations
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .animate-on-scroll.animated {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Button animation styles */
        .btn {
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        
        .btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: all 0.4s ease;
        }
        
        .btn:hover::before {
            left: 100%;
        }
        
        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .btn:active {
            transform: translateY(0);
        }
        
        /* Add to cart button animation */
        .add-to-cart-btn {
            transition: all 0.3s ease;
        }
        
        .add-to-cart-btn.added {
            background-color: #4CAF50 !important;
            color: white !important;
        }
    `;
    document.head.appendChild(styleElement);
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Button animations
    initButtonAnimations();
});

// Button click animations
function initButtonAnimations() {
    // Add to cart button animation
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Store original text
            const originalText = this.textContent;
            
            // Add 'added' class for color change
            this.classList.add('added');
            this.textContent = 'Added ✓';
            
            // Small scale animation
            this.style.transform = 'scale(1.1)';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                
                // Reset button after 2 seconds
                setTimeout(() => {
                    this.classList.remove('added');
                    this.textContent = originalText;
                }, 1500);
            }, 200);
            
            // Simulate adding to cart (would connect to cart functionality)
            updateCartCount();
        });
    });
    
    // Wishlist button animation
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');
    
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Toggle active class
            this.classList.toggle('active');
            
            // Heart animation
            if (this.classList.contains('active')) {
                this.innerHTML = '<i class="fas fa-heart"></i>';
                this.style.color = '#ff5252';
            } else {
                this.innerHTML = '<i class="far fa-heart"></i>';
                this.style.color = '';
            }
            
            // Pulse animation
            this.classList.add('pulse');
            setTimeout(() => {
                this.classList.remove('pulse');
            }, 500);
        });
    });
    
    // Quick view button animation
    const quickViewButtons = document.querySelectorAll('.quick-view-btn');
    
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            
            this.appendChild(ripple);
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size/2}px`;
            ripple.style.top = `${e.clientY - rect.top - size/2}px`;
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Additional logic to show quick view modal would go here
        });
    });
}

// Cart counter update animation
function updateCartCount() {
    const cartCounter = document.querySelector('.cart-count');
    
    if (cartCounter) {
        // Get current count
        let currentCount = parseInt(cartCounter.textContent);
        
        // Increment count
        currentCount++;
        
        // Apply animation
        cartCounter.classList.add('cart-count-animation');
        
        // Update count
        setTimeout(() => {
            cartCounter.textContent = currentCount;
            
            // Remove animation class
            setTimeout(() => {
                cartCounter.classList.remove('cart-count-animation');
            }, 300);
        }, 150);
    }
}

// Add CSS for button animations
const buttonStyleElement = document.createElement('style');
buttonStyleElement.textContent = `
    /* Ripple effect for quick view */
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    /* Wishlist button pulse */
    .pulse {
        animation: pulse 0.5s ease-in-out;
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
    
    /* Cart count animation */
    .cart-count {
        display: inline-block;
        transition: all 0.3s ease;
    }
    
    .cart-count-animation {
        animation: bounce 0.5s ease;
    }
    
    @keyframes bounce {
        0% { transform: scale(1); }
        50% { transform: scale(1.5); }
        100% { transform: scale(1); }
    }
    
    /* Hover effects for product cards */
    .product-card {
        transition: all 0.3s ease;
    }
    
    .product-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
    
    .product-card .product-image {
        transition: all 0.5s ease;
    }
    
    .product-card:hover .product-image {
        transform: scale(1.05);
    }
`;
document.head.appendChild(buttonStyleElement);

// Scroll animation function
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animated');
        }
    });
}

// Main initialization function
document.addEventListener('DOMContentLoaded', function() {
    // Add animation class to various elements
    document.querySelectorAll('.category-title, .product-card, .footer-section').forEach(el => {
        el.classList.add('animate-on-scroll');
    });
    
    // Initial animation check
    animateOnScroll();
    
    // Add CSS for all animations
    addCoreStyles();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Initialize all animations
    initButtonAnimations();
    
    // Advanced animations (will be called later when we add them)
});

// Add core styles for all animations
function addCoreStyles() {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        /* Scroll animations */
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .animate-on-scroll.animated {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Button animation styles */
        .btn {
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        
        .btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: all 0.4s ease;
        }
        
        .btn:hover::before {
            left: 100%;
        }
        
        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .btn:active {
            transform: translateY(0);
        }
        
        /* Add to cart button animation */
        .add-to-cart-btn {
            transition: all 0.3s ease;
        }
        
        .add-to-cart-btn.added {
            background-color: #4CAF50 !important;
            color: white !important;
        }
        
        /* Ripple effect for quick view */
        .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        /* Wishlist button pulse */
        .pulse {
            animation: pulse 0.5s ease-in-out;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }
        
        /* Cart count animation */
        .cart-count {
            display: inline-block;
            transition: all 0.3s ease;
        }
        
        .cart-count-animation {
            animation: bounce 0.5s ease;
        }
        
        @keyframes bounce {
            0% { transform: scale(1); }
            50% { transform: scale(1.5); }
            100% { transform: scale(1); }
        }
        
        /* Hover effects for product cards */
        .product-card {
            transition: all 0.3s ease;
        }
        
        .product-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .product-card .product-image {
            transition: all 0.5s ease;
        }
        
        .product-card:hover .product-image {
            transform: scale(1.05);
        }
    `;
    document.head.appendChild(styleElement);
}

// Button click animations
function initButtonAnimations() {
    // Add to cart button animation
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Store original text
            const originalText = this.textContent;
            
            // Add 'added' class for color change
            this.classList.add('added');
            this.textContent = 'Added ✓';
            
            // Small scale animation
            this.style.transform = 'scale(1.1)';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                
                // Reset button after 2 seconds
                setTimeout(() => {
                    this.classList.remove('added');
                    this.textContent = originalText;
                }, 1500);
            }, 200);
            
            // Simulate adding to cart (would connect to cart functionality)
            updateCartCount();
        });
    });
    
    // Wishlist button animation
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');
    
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Toggle active class
            this.classList.toggle('active');
            
            // Heart animation
            if (this.classList.contains('active')) {
                this.innerHTML = '<i class="fas fa-heart"></i>';
                this.style.color = '#ff5252';
            } else {
                this.innerHTML = '<i class="far fa-heart"></i>';
                this.style.color = '';
            }
            
            // Pulse animation
            this.classList.add('pulse');
            setTimeout(() => {
                this.classList.remove('pulse');
            }, 500);
        });
    });
    
    // Quick view button animation
    const quickViewButtons = document.querySelectorAll('.quick-view-btn');
    
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            
            this.appendChild(ripple);
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size/2}px`;
            ripple.style.top = `${e.clientY - rect.top - size/2}px`;
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Additional logic to show quick view modal would go here
        });
    });
}

// Cart counter update animation
function updateCartCount() {
    const cartCounter = document.querySelector('.cart-count');
    
    if (cartCounter) {
        // Get current count
        let currentCount = parseInt(cartCounter.textContent);
        
        // Increment count
        currentCount++;
        
        // Apply animation
        cartCounter.classList.add('cart-count-animation');
        
        // Update count
        setTimeout(() => {
            cartCounter.textContent = currentCount;
            
            // Remove animation class
            setTimeout(() => {
                cartCounter.classList.remove('cart-count-animation');
            }, 300);
        }, 150);
    }
}
// Advanced animation features
document.addEventListener('DOMContentLoaded', function() {
    // Image parallax effect for hero section
    initParallaxEffect();
    
    // Lazy loading with fade-in for product images
    initLazyLoadImages();
    
    // Interactive category filter animations
    initCategoryFilters();
    
    // Product image zoom on hover
    initProductZoom();
    
    // Add confetti effect when adding to cart
    initConfettiEffect();
    
    // Add progress bar for limited-time offers
    initLimitedTimeOffers();
    
    // Add seasonal theme transitions
    initSeasonalThemes();
    
    // Add back-to-top button with scroll progress
    addBackToTopButton();
});

// Parallax effect for hero section
function initParallaxEffect() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    const heroBackground = document.createElement('div');
    heroBackground.classList.add('hero-background');
    heroSection.prepend(heroBackground);
    
    // Add CSS for parallax effect
    const parallaxStyle = document.createElement('style');
    parallaxStyle.textContent = `
        .hero-section {
            position: relative;
            overflow: hidden;
        }
        
        .hero-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('/assets/images/hero-bg.jpg');
            background-size: cover;
            background-position: center;
            transform: scale(1.1);
            z-index: -1;
        }
    `;
    document.head.appendChild(parallaxStyle);
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        if (scrollPosition <= window.innerHeight) {
            heroBackground.style.transform = `scale(1.1) translateY(${scrollPosition * 0.05}px)`;
            heroSection.querySelector('.container').style.transform = `translateY(${scrollPosition * 0.03}px)`;
            heroSection.querySelector('.container').style.opacity = 1 - (scrollPosition * 0.002);
        }
    });
}

// Lazy loading with fade-in for images
function initLazyLoadImages() {
    const productImages = document.querySelectorAll('.product-image img');
    
    const lazyLoadOptions = {
        rootMargin: '0px 0px 200px 0px',
        threshold: 0.1
    };
    
    const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                
                if (src) {
                    img.src = src;
                    img.style.opacity = 0;
                    
                    img.onload = function() {
                        // Fade in animation
                        setTimeout(() => {
                            img.style.transition = 'opacity 0.5s ease';
                            img.style.opacity = 1;
                        }, 100);
                    };
                    
                    observer.unobserve(img);
                }
            }
        });
    }, lazyLoadOptions);
    
    productImages.forEach(img => {
        // Set placeholder and move real src to data-src
        const realSrc = img.src;
        img.setAttribute('data-src', realSrc);
        img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"%3E%3Crect width="300" height="300" fill="%23f0f0f0"/%3E%3C/svg%3E';
        
        lazyLoadObserver.observe(img);
    });
}

// Interactive category filters with animations
function initCategoryFilters() {
    const filterButtons = document.querySelectorAll('.category-filter-btn');
    if (!filterButtons.length) return;
    
    // Add active indicator line
    const filterContainer = filterButtons[0].parentElement;
    const activeIndicator = document.createElement('span');
    activeIndicator.classList.add('filter-active-indicator');
    filterContainer.appendChild(activeIndicator);
    
    // Add CSS for filter animation
    const filterStyle = document.createElement('style');
    filterStyle.textContent = `
        .filter-container {
            position: relative;
            display: flex;
            gap: 20px;
            padding-bottom: 10px;
        }
        
        .category-filter-btn {
            position: relative;
            padding: 10px 15px;
            cursor: pointer;
            transition: all 0.3s ease;
            background: transparent;
            border: none;
        }
        
        .category-filter-btn.active {
            color: #2c8b3f;
            font-weight: 500;
        }
        
        .filter-active-indicator {
            position: absolute;
            bottom: 0;
            height: 3px;
            background-color: #2c8b3f;
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        
        .product-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
        }
        
        .product-card {
            transition: all 0.5s ease;
        }
        
        .product-card.filtered-out {
            opacity: 0;
            transform: scale(0.8);
            position: absolute;
        }
        
        .product-card.filtered-in {
            opacity: 1;
            transform: scale(1);
            position: relative;
        }
    `;
    document.head.appendChild(filterStyle);
    
    // Initialize the active indicator
    setTimeout(() => {
        const activeButton = document.querySelector('.category-filter-btn.active') || filterButtons[0];
        const buttonRect = activeButton.getBoundingClientRect();
        const containerRect = filterContainer.getBoundingClientRect();
        
        activeIndicator.style.width = `${buttonRect.width}px`;
        activeIndicator.style.left = `${buttonRect.left - containerRect.left}px`;
        
        // Add active class to first button if none is active
        if (!document.querySelector('.category-filter-btn.active')) {
            activeButton.classList.add('active');
        }
    }, 100);
    
    // Add click event to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button and indicator
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const buttonRect = this.getBoundingClientRect();
            const containerRect = filterContainer.getBoundingClientRect();
            
            activeIndicator.style.width = `${buttonRect.width}px`;
            activeIndicator.style.left = `${buttonRect.left - containerRect.left}px`;
            
            // Filter products with animation
            const category = this.getAttribute('data-category');
            const products = document.querySelectorAll('.product-card');
            
            products.forEach(product => {
                const productCategory = product.getAttribute('data-category');
                
                if (category === 'all' || productCategory === category) {
                    product.classList.remove('filtered-out');
                    product.classList.add('filtered-in');
                } else {
                    product.classList.remove('filtered-in');
                    product.classList.add('filtered-out');
                }
            });
        });
    });
}

// Product image zoom effect
function initProductZoom() {
    const productImages = document.querySelectorAll('.product-image');
    
    productImages.forEach(imageContainer => {
        const img = imageContainer.querySelector('img');
        if (!img) return;
        
        imageContainer.style.overflow = 'hidden';
        
        imageContainer.addEventListener('mousemove', function(e) {
            const { left, top, width, height } = this.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;
            
            img.style.transformOrigin = `${x * 100}% ${y * 100}%`;
        });
        
        imageContainer.addEventListener('mouseenter', function() {
            img.style.transition = 'transform 0.3s ease';
            img.style.transform = 'scale(1.2)';
        });
        
        imageContainer.addEventListener('mouseleave', function() {
            img.style.transition = 'transform 0.3s ease';
            img.style.transform = 'scale(1)';
        });
    });
}

// Confetti effect when adding product to cart
function initConfettiEffect() {
    const confettiStyle = document.createElement('style');
    confettiStyle.textContent = `
        .confetti-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9999;
        }
        
        .confetti {
            position: absolute;
            width: 10px;
            height: 10px;
            opacity: 0;
        }
        
        @keyframes confetti-fall {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(confettiStyle);
    
    // Create confetti container
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');
    document.body.appendChild(confettiContainer);
    
    // Update add to cart function to include confetti
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create confetti effect
            createConfetti(e.clientX, e.clientY);
        });
    });
}

// Create confetti particles
function createConfetti(x, y) {
    const container = document.querySelector('.confetti-container');
    const colors = ['#2c8b3f', '#4CAF50', '#8bc34a', '#cddc39', '#ffeb3b'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Random confetti properties
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = Math.random() < 0.5 ? '50%' : '0';
        
        // Random position and animation
        const startX = x;
        const startY = y;
        const angle = Math.random() * 360;
        const velocity = Math.random() * 10 + 5;
        const duration = Math.random() * 3 + 1;
        
        // Apply styles
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.backgroundColor = color;
        confetti.style.borderRadius = shape;
        confetti.style.left = `${startX}px`;
        confetti.style.top = `${startY}px`;
        confetti.style.animation = `confetti-fall ${duration}s ease forwards`;
        
        // Random animation delay
        confetti.style.animationDelay = `${Math.random() * 0.5}s`;
        
        // Add to container and remove after animation
        container.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000 + 500);
    }
}

// Limited time offer progress bar
function initLimitedTimeOffers() {
    const offerElements = document.querySelectorAll('.limited-time-offer');
    
    offerElements.forEach(offer => {
        const endTime = offer.getAttribute('data-end-time');
        if (!endTime) return;
        
        // Create progress bar
        const progressContainer = document.createElement('div');
        progressContainer.classList.add('offer-progress-container');
        
        const progressBar = document.createElement('div');
        progressBar.classList.add('offer-progress-bar');
        
        const timeRemaining = document.createElement('div');
        timeRemaining.classList.add('time-remaining');
        
        progressContainer.appendChild(progressBar);
        progressContainer.appendChild(timeRemaining);
        offer.appendChild(progressContainer);
        
        // Add CSS for progress bar
        const progressStyle = document.createElement('style');
        progressStyle.textContent = `
            .offer-progress-container {
                width: 100%;
                height: 5px;
                background-color: #e0e0e0;
                border-radius: 3px;
                margin-top: 10px;
                position: relative;
                overflow: hidden;
            }
            
            .offer-progress-bar {
                height: 100%;
                background: linear-gradient(90deg, #2c8b3f, #4CAF50);
                border-radius: 3px;
                transition: width 1s linear;
            }
            
            .time-remaining {
                font-size: 12px;
                color: #666;
                text-align: center;
                margin-top: 5px;
            }
            
            @keyframes pulse-warning {
                0% { background: linear-gradient(90deg, #ff9800, #f44336); }
                50% { background: linear-gradient(90deg, #f44336, #ff9800); }
                100% { background: linear-gradient(90deg, #ff9800, #f44336); }
            }
        `;
        document.head.appendChild(progressStyle);
        
        // Update progress bar
        function updateProgressBar() {
            const now = new Date().getTime();
            const endDate = new Date(endTime).getTime();
            const startDate = endDate - (24 * 60 * 60 * 1000); // 24 hours before end
            
            const totalDuration = endDate - startDate;
            const elapsed = now - startDate;
            const remaining = endDate - now;
            
            if (remaining <= 0) {
                // Offer ended
                progressBar.style.width = '0%';
                timeRemaining.textContent = 'Offer ended';
                offer.classList.add('offer-ended');
                return;
            }
            
            // Calculate progress (inverted, as we want to show time remaining)
            const progress = 100 - (elapsed / totalDuration * 100);
            progressBar.style.width = `${progress}%`;
            
            // Add warning animation when less than 20% time remaining
            if (progress < 20) {
                progressBar.style.animation = 'pulse-warning 2s infinite';
            }
            
            // Format time remaining
            const hours = Math.floor(remaining / (60 * 60 * 1000));
            const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
            
            timeRemaining.textContent = `${hours}h ${minutes}m remaining`;
            
            // Schedule next update
            setTimeout(updateProgressBar, 60000); // Update every minute
        }
        
        // Initial update
        updateProgressBar();
    });
}

// Seasonal theme transitions
function initSeasonalThemes() {
    // Check current season - this is a simplified example
    const date = new Date();
    const month = date.getMonth();
    
    // Define seasonal themes
    let theme = 'default';
    
    if (month >= 2 && month <= 4) {
        theme = 'spring';
    } else if (month >= 5 && month <= 7) {
        theme = 'summer';
    } else if (month >= 8 && month <= 10) {
        theme = 'autumn';
    } else {
        theme = 'winter';
    }
    
    // Apply theme to body
    document.body.setAttribute('data-theme', theme);
    
    // Add seasonal CSS
    const seasonalStyle = document.createElement('style');
    seasonalStyle.textContent = `
        body {
            transition: background-color 1s ease, color 1s ease;
        }
        
        body[data-theme="spring"] {
            --accent-color: #72b01d;
            --bg-light: #f0f7e6;
        }
        
        body[data-theme="summer"] {
            --accent-color: #4CAF50;
            --bg-light: #e8f5e9;
        }
        
        body[data-theme="autumn"] {
            --accent-color: #ff7043;
            --bg-light: #fff3e0;
        }
        
        body[data-theme="winter"] {
            --accent-color: #26a69a;
            --bg-light: #e0f2f1;
        }
        
        .seasonal-icon {
            display: none;
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 24px;
        }
        
        body[data-theme="spring"] .seasonal-icon.spring {
            display: block;
        }
        
        body[data-theme="summer"] .seasonal-icon.summer {
            display: block;
        }
        
        body[data-theme="autumn"] .seasonal-icon.autumn {
            display: block;
        }
        
        body[data-theme="winter"] .seasonal-icon.winter {
            display: block;
        }
    `;
    document.head.appendChild(seasonalStyle);
    
    // Add seasonal icons to product cards
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        // Create seasonal icons
        const seasonalIcons = document.createElement('div');
        seasonalIcons.innerHTML = `
            <span class="seasonal-icon spring">🌱</span>
            <span class="seasonal-icon summer">☀️</span>
            <span class="seasonal-icon autumn">🍂</span>
            <span class="seasonal-icon winter">❄️</span>
        `;
        
        card.style.position = 'relative';
        card.appendChild(seasonalIcons);
        
        // Add seasonal badge to seasonal products
        if (card.getAttribute('data-seasonal') === 'true') {
            const badge = document.createElement('div');
            badge.classList.add('seasonal-badge');
            
            const badgeStyle = document.createElement('style');
            badgeStyle.textContent = `
                .seasonal-badge {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    background-color: var(--accent-color);
                    color: white;
                    padding: 5px 10px;
                    border-radius: 20px;
                    font-size: 12px;
                    z-index: 1;
                }
                
                body[data-theme="spring"] .seasonal-badge::before {
                    content: "Spring Special";
                }
                
                body[data-theme="summer"] .seasonal-badge::before {
                    content: "Summer Special";
                }
                
                body[data-theme="autumn"] .seasonal-badge::before {
                    content: "Autumn Special";
                }
                
                body[data-theme="winter"] .seasonal-badge::before {
                    content: "Winter Special";
                }
            `;
            document.head.appendChild(badgeStyle);
            
            card.appendChild(badge);
        }
    });
}

// Back to top button with scroll progress
function addBackToTopButton() {
    // Create back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.classList.add('back-to-top');
    backToTopBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
        <svg class="progress-ring" width="44" height="44">
            <circle class="progress-ring-circle" stroke="currentColor" stroke-width="2" fill="transparent" r="20" cx="22" cy="22"/>
        </svg>
    `;
    document.body.appendChild(backToTopBtn);
    
    // Add CSS for back to top button
    const backToTopStyle = document.createElement('style');
    backToTopStyle.textContent = `
        .back-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background-color: white;
            color: #2c8b3f;
            border: none;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 100;
        }
        
        .back-to-top.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .back-to-top svg:not(.progress-ring) {
            position: absolute;
        }
        
        .progress-ring {
            transform: rotate(-90deg);
        }
        
        .progress-ring-circle {
            stroke-dasharray: 125.6;
            stroke-dashoffset: 125.6;
            transition: stroke-dashoffset 0.3s ease;
        }
    `;
    document.head.appendChild(backToTopStyle);
    
    // Get progress ring circle
    const circle = backToTopBtn.querySelector('.progress-ring-circle');
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;
    
    // Set circle progress based on scroll
    function setProgress(percent) {
        const offset = circumference - (percent / 100 * circumference);
        circle.style.strokeDashoffset = offset;
    }
    
    // Handle scroll event
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight * 100;
        
        // Update progress ring
        setProgress(scrollPercent);
        
        // Show button after scrolling down a bit
        if (scrollTop > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

