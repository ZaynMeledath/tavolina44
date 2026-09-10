import { TavolinaLogo } from "@/components/TavolinaLogo";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  ExternalLink,
  Eye,
  Heart,
  Instagram,
  MapPin,
  Phone,
  Star,
  UtensilsCrossed,
  Wine as WineIcon,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Official Tavolina 44 Social Channels
const INSTAGRAM_URL = "https://www.instagram.com/tavolina.44/";
const INSTAGRAM_HANDLE = "@tavolina.44";

// Curated Luxury Photography Assets
import branzino from "@/assets/branzino.jpg";
import burrata from "@/assets/burrata.jpg";
import heroLuxury from "@/assets/hero-luxury.jpg";
import ingredients from "@/assets/ingredients.jpg";
import pizza from "@/assets/pizza.jpg";
import steak from "@/assets/steak.jpg";

// Verified Tavolina 44 Google Maps & Restaurant Photography
import galleryArtisanPizzaSpread from "@/assets/gallery-artisan-pizza-spread.jpg";
import galleryBarMartiniSpritz from "@/assets/gallery-bar-martini-spritz.jpg";
import galleryBraisedOssoBuco from "@/assets/gallery-braised-osso-buco.jpg";
import galleryCitrusBeetSalad from "@/assets/gallery-citrus-beet-salad.jpg";
import galleryCocktailThyme from "@/assets/gallery-cocktail-thyme.jpg";
import galleryPappardelleBolognese from "@/assets/gallery-pappardelle-bolognese.jpg";
import gallerySalumiAntipastiBoard from "@/assets/gallery-salumi-antipasti-board.jpg";
import gallerySpaghettiTavolina from "@/assets/gallery-spaghetti-tavolina.jpg";
import galleryTableCocktailCoupe from "@/assets/gallery-table-cocktail-coupe.jpg";
import galleryWindowBanquette from "@/assets/gallery-window-banquette.jpg";
import gmapsBarLounge from "@/assets/gmaps-bar-lounge.jpg";
import gmapsBarSpirits from "@/assets/gmaps-bar-spirits.jpg";
import gmapsCalamariWine from "@/assets/gmaps-calamari-wine.jpg";
import gmapsDiningRoom from "@/assets/gmaps-dining-room.jpg";
import gmapsPizzaArtisan from "@/assets/gmaps-pizza-artisan.jpg";
import gmapsPolpette from "@/assets/gmaps-polpette.jpg";
import gmapsTiramisu from "@/assets/gmaps-tiramisu.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tavolina 44 | Italian-American Restaurant in Katy, TX" },
      {
        name: "description",
        content:
          "Tavolina 44 unites Italian soul and American spirit at Villagio Town Center in Katy, Texas. Upscale dining featuring hand-rolled pastas, oak-charred steaks, and craft cocktails.",
      },
    ],
  }),
  component: Index,
});

// =============================================================================
// OFFICIAL VERIFIED DINNER MENU DATA (Extracted from Uploaded Menu Cards)
// =============================================================================
const DINNER_MENU = [
  {
    category: "Cold Appetizers",
    tagline: "Antipasti Freddi",
    items: [
      {
        name: "Charcuterie & Cheese Board",
        price: "$18 / $27",
        subprice: "$18 for one / $27 for two",
        description:
          "Prosciutto, hot capicola, house-made sujuk, imported cheeses, fruit, crostini",
        badge: "Chef's Board",
      },
      {
        name: "Beet & Goat Cheese",
        price: "$15",
        description: "Seasonal greens, oranges, basil vinaigrette",
      },
      {
        name: "Arugula & Parmesan",
        price: "$14",
        description:
          "Arugula, cherry tomatoes, shaved Grana Padano, lemon vinaigrette",
      },
      {
        name: "Little Gem Caesar*",
        price: "$15",
        description:
          "Herbed croutons, house-made Caesar dressing, olive oil, parmesan (Add grilled chicken +$10)",
      },
      {
        name: "Caprese Burrata",
        price: "$19",
        description:
          "Fresh burrata, cherry tomatoes, basil, olive oil, balsamic glaze, sea salt, country-style bread",
        badge: "Signature",
      },
    ],
  },
  {
    category: "Hot Appetizers",
    tagline: "Antipasti Caldi",
    items: [
      {
        name: "Arancini Albanese",
        price: "$18",
        description:
          "Crispy risotto balls, house-made sujuk, mozzarella, marinara",
        badge: "House Favorite",
      },
      {
        name: "Fërgese",
        price: "$16",
        description:
          "Fire-roasted peppers, plum tomatoes, onions, garlic, feta, yogurt, country-style bread",
      },
      {
        name: "Crab Cake",
        price: "$24",
        description:
          "Blue crab lump, rosemary aioli, potato crisp, balsamic glaze",
        badge: "Prime Lump",
      },
      {
        name: "Roman-Style Meatballs",
        price: "$18",
        description:
          "Meatballs simmered in tomato sauce, ricotta, Pecorino Romano, country-style bread",
      },
    ],
  },
  {
    category: "Pizza",
    tagline: "Hearth-Fired Artisan Pies",
    items: [
      {
        name: "Margherita",
        price: "$19",
        description: "Fresh mozzarella, basil",
        badge: "Classic",
      },
      {
        name: "Artichoke & Pesto",
        price: "$22",
        description:
          "Artichoke, ricotta, mozzarella, house-made pesto, fresh arugula",
      },
      {
        name: "Sujuk",
        price: "$23",
        description:
          "House-made sujuk, mozzarella, parmesan, fresh basil (Add goat cheese +$2)",
        badge: "House Specialty",
      },
      {
        name: "Three Cheese",
        price: "$21",
        description: "Goat cheese, Grana Padano, mozzarella, fresh basil",
      },
      {
        name: "Garlic & Mushroom",
        price: "$20",
        description: "Cremini, mushrooms, garlic, mozzarella, Asiago",
      },
      {
        name: "Goat Cheese & Prosciutto",
        price: "$24",
        description:
          "Mozzarella, goat cheese, prosciutto, fresh arugula, balsamic glaze (Swap goat cheese for burrata +$3)",
      },
    ],
  },
  {
    category: "Pasta & Risotto",
    tagline: "All Pastas Are Made In-House",
    items: [
      {
        name: "Dromesat",
        price: "$24",
        description:
          "Casarecce, hot capicola, tomato sauce, garlic, onions, herbs, Pecorino Romano",
        badge: "Chef's Creation",
      },
      {
        name: "Spaghetti Tavolina 44",
        price: "$25",
        description: "Shrimp, cremini mushrooms, garlic, mascarpone, parmesan",
        badge: "Signature 44",
      },
      {
        name: "Cacio e Pepe",
        price: "$22",
        description: "Linguine, Pecorino Romano, black pepper",
      },
      {
        name: "Pappardelle with Meat Ragù",
        price: "$23",
        description: "Traditional meat ragù, parmesan, basil",
      },
      {
        name: "Fusilli",
        price: "$24",
        description: "Broccolini, house-made sujuk, herbs",
      },
      {
        name: "Herb Risotto",
        price: "$21",
        description: "Parsley, basil, rosemary, oregano",
      },
      {
        name: "Seafood Risotto",
        price: "$27",
        description: "Calamari, shrimp, plum tomatoes, parmesan, herbs",
        badge: "Coastal Catch",
      },
    ],
  },
  {
    category: "Main Courses",
    tagline: "Ember-Charred & Prime Secondi",
    items: [
      {
        name: "Tavolina 44 Burger*",
        price: "$21",
        description:
          "Brioche bun, 8 oz beef patty, goat cheese, arugula, peppers, rosemary aioli, fries",
      },
      {
        name: "Chicken Milanese",
        price: "$24",
        description: "Breaded chicken cutlet, arugula salad",
      },
      {
        name: "Salmon",
        price: "$34",
        description: "Coho salmon, charred baby bok choy",
      },
      {
        name: "Grilled Branzino",
        price: "$32",
        description:
          "Mediterranean sea bass, broccolini, potatoes, herb oil (Whole Branzino +$8)",
        badge: "Signature Catch",
      },
      {
        name: "Crab Cake & Shrimp",
        price: "$35",
        description: "Blue crab lump meat, scampi-style shrimp, herb risotto",
      },
      {
        name: "Grilled Octopus",
        price: "$37",
        description: "Polenta, fresh herb oil",
        badge: "Hearth Charred",
      },
      {
        name: "Osso Bucco",
        price: "$39",
        description: "Slow-braised beef shank, polenta",
      },
      {
        name: "Steak of the Day*",
        price: "Market Price",
        description: "Fingerling potatoes, gorgonzola sauce",
      },
      {
        name: "Filet Mignon*",
        price: "$45",
        description: "8 oz filet, fingerling potatoes, gorgonzola sauce",
        badge: "Prime Cut",
      },
    ],
  },
  {
    category: "Sides",
    tagline: "Contorni",
    items: [
      {
        name: "Sautéed Broccolini",
        price: "$11",
        description: "Garlic, extra virgin olive oil, sea salt",
      },
      {
        name: "Fingerling Potatoes with Herbs",
        price: "$8",
        description: "Roasted with rosemary, thyme, and coarse sea salt",
      },
      {
        name: "Baby Bok Choy",
        price: "$10",
        description: "Charred over open embers with light citrus olive oil",
      },
    ],
  },
];

// =============================================================================
// OFFICIAL VERIFIED DRINK MENU DATA (Extracted from Uploaded Drink Card)
// =============================================================================
const DRINKS_MENU = [
  {
    category: "Craft Cocktails",
    tagline: "Artisan Mixology & House Aperitivi",
    items: [
      {
        name: "Spritz Cardinale",
        price: "$12",
        description:
          "Bombay Sapphire Gin, elderflower liqueur, basil, lime juice, prosecco",
        badge: "Signature Spritz",
      },
      {
        name: "Milano Mule",
        price: "$13",
        description: "Ketel One, Aperol, ginger liqueur, ginger beer, lime",
      },
      {
        name: "Fernet Margarita",
        price: "$11",
        description:
          "Fernet Branca, triple sec, orange juice, lime, simple syrup",
      },
      {
        name: "Paper Plane",
        price: "$13",
        description:
          "Aviation Gin, Campari, sweet vermouth, lime, simple syrup, bitters",
      },
      {
        name: "Ristretto Martini",
        price: "$13",
        description: "Tito's Vodka, Irish cream, Kahlúa, espresso, chocolate",
        badge: "House Favorite",
      },
      {
        name: "Tropical Storm",
        price: "$12",
        description: "Tequila, Cruzan Mango Rum, passion fruit purée, lime",
      },
      {
        name: "Partini",
        price: "$12",
        description: "Prickly pear vodka, peach purée, triple sec, lime",
      },
      {
        name: "Brooklyn Botanical",
        price: "$14",
        description: "Brooklyn Gin, basil, rosemary, cucumber, lime, tonic",
      },
      {
        name: "Good Old Fashioned",
        price: "$13",
        description:
          "Bulleit Rye, bergamot tea, brown sugar, star anise, clove, bitters",
        badge: "Classic",
      },
      {
        name: "Via 44",
        price: "$12",
        description: "Pear brandy, triple sec, lemoncello, bitters, prosecco",
        badge: "Tavolina Specialty",
      },
    ],
  },
  {
    category: "Wine by the Glass",
    tagline: "Sparkling, Bianco & Rosso",
    items: [
      {
        name: "Poggio Costa Prosecco",
        price: "$10",
        description: "Sparkling · Veneto, Italy",
      },
      {
        name: "Mercat Cava Brut NV",
        price: "$11",
        description: "Sparkling · Penedès, Spain",
      },
      {
        name: "Denny Bini Lambrusco",
        price: "$11",
        description: "Sparkling Red · Emilia-Romagna, Italy",
      },
      {
        name: "Franco Serra Gavi 2025",
        price: "$12",
        description: "White · Piedmont, Italy",
      },
      {
        name: "Frecciarossa Pinot Grigio Pavese 2024",
        price: "$14",
        description: "White · Lombardy, Italy",
      },
      {
        name: "Lunaria Civitas Pecorino 2024",
        price: "$12",
        description: "White · Terre di Abruzzo, Italy",
      },
      {
        name: "Viticcio Vermentino Toscana 2023",
        price: "$13",
        description: "White · Tuscany, Italy",
      },
      {
        name: "Piper Sonoma Chardonnay 2024",
        price: "$15",
        description: "White · Sonoma County, California",
      },
      {
        name: "Patch Montepulciano d'Abruzzo",
        price: "$11",
        description: "Red · Abruzzo, Italy",
      },
      {
        name: "No Curfew Pinot Noir 2023",
        price: "$12",
        description: "Red · California",
      },
      {
        name: "Casa Emma Chianti Classico",
        price: "$14",
        description: "Red · Tuscany, Italy",
      },
      {
        name: "Oberon Cabernet Sauvignon 2023",
        price: "$15",
        description: "Red · Napa Valley, California",
      },
      {
        name: "Il Borro Borrigiano Toscana",
        price: "$14",
        description: "Red · Tuscany, Italy",
      },
    ],
  },
  {
    category: "Draft & Bottled Beer",
    tagline: "Local Texas Craft & European Favorites",
    items: [
      {
        name: "Altstadt Hefeweizen (5.2%)",
        price: "$7",
        description: "Draft · Fredericksburg, TX",
      },
      {
        name: "Superbloom IPA (6.5%)",
        price: "$7",
        description: "Draft · Houston, TX",
      },
      {
        name: "Frost Bier Kölsch (5.0%)",
        price: "$7",
        description: "Draft · Houston, TX",
      },
      {
        name: "Stella Artois (5.0%)",
        price: "$7",
        description: "Draft · Belgium",
      },
      {
        name: "Warsteiner Pilsner (5.0%)",
        price: "$7",
        description: "Draft · Germany",
      },
      {
        name: "Michelob Ultra (4.2%)",
        price: "$7",
        description: "Draft · St. Louis, MO",
      },
      {
        name: "Bottled Beers",
        price: "Selection",
        description:
          "Peroni, Moretti, Bud Light, Modelo, Lagunitas IPA, Blue Moon, Yuengling",
      },
    ],
  },
];

// =============================================================================
// CURATED SIGNATURE PLATES (Directly from verified menu card)
// =============================================================================
const SIGNATURE_PLATES = [
  {
    index: "01",
    title: "Spaghetti Tavolina 44",
    subtitle: "Pasta Fatta in Casa",
    category: "Pasta & Risotto",
    description:
      "House-extruded pasta tossed with succulent tender shrimp, earthy cremini mushrooms, aromatic garlic, and rich whipped mascarpone finished with aged parmesan.",
    price: "$25",
    image: heroLuxury,
    note: "All pastas extruded fresh daily in our kitchen",
  },
  {
    index: "02",
    title: "Grilled Branzino",
    subtitle: "Secondi di Pesce",
    category: "Main Courses",
    description:
      "Mediterranean sea bass crisped over white oak hearth embers, accompanied by charred tender broccolini, roasted fingerling potatoes, and fragrant rosemary herb oil.",
    price: "$32",
    image: branzino,
    note: "Whole Branzino available tableside (+$8)",
  },
  {
    index: "03",
    title: "Caprese Burrata",
    subtitle: "Antipasti Freddi",
    category: "Cold Appetizers",
    description:
      "Lush sweet burrata paired with ripe cherry tomatoes, fragrant garden basil, cold-pressed olive oil, 25-year balsamic glaze, sea salt flakes, and wood-toasted country bread.",
    price: "$19",
    image: burrata,
    note: "Crafted with artisanal Puglia burrata",
  },
  {
    index: "04",
    title: "Filet Mignon*",
    subtitle: "Secondi dal Fuoco",
    category: "Main Courses",
    description:
      "8 oz center-cut tenderloin seared to a smoky caramelized crust over Texas live embers, served alongside herbed fingerling potatoes and a rich silken gorgonzola reduction.",
    price: "$45",
    image: steak,
    note: "Prime beef paired with rich gorgonzola sauce",
  },
  {
    index: "05",
    title: "Arancini Albanese",
    subtitle: "Antipasti Caldi",
    category: "Hot Appetizers",
    description:
      "Golden crispy risotto croquettes infused with house-made savory sujuk and molten mozzarella, resting on slow-simmered San Marzano marinara.",
    price: "$18",
    image: pizza,
    note: "House-made specialty recipe",
  },
];

// =============================================================================
// VERIFIED GUEST REVIEWS
// =============================================================================
const VERIFIED_REVIEWS = [
  {
    quote:
      "Tavolina 44 is such a breath of fresh air for Katy. The dining room is upscale yet remarkably warm and welcoming. Every detail—from the candlelight to the attentiveness of the team—made our evening special.",
    diner: "Verified Diner",
    source: "Google Business Review",
    rating: 5,
    highlight: "Warm hospitality & intimate atmosphere",
    photo: gmapsCalamariWine,
  },
  {
    quote:
      "The handmade pasta here is extraordinary. The texture holds beautifully and the richness of the sauces is balanced and authentic. You can immediately tell the kitchen uses high-caliber ingredients.",
    diner: "Verified Diner",
    source: "Google Business Review",
    rating: 5,
    highlight: "House-crafted pasta & refined flavors",
    photo: heroLuxury,
  },
  {
    quote:
      "A stunning Italian-American experience at Villagio Town Center. The bar is sophisticated with superb cocktails, the service is genuinely friendly, and the atmosphere makes you want to linger.",
    diner: "Verified Diner",
    source: "Google Business Review",
    rating: 5,
    highlight: "Atmospheric bar & curated libations",
    photo: galleryBarMartiniSpritz,
  },
];

// =============================================================================
// GALLERY IMAGES (Authentic Tavolina 44 Photography & Atmosphere)
// =============================================================================
const GALLERY_IMAGES = [
  // Row 1: Atmospheric Welcome & Wood-Fired Table Feast (7 & 5 cols = 12)
  {
    src: gmapsDiningRoom,
    title: "Dining Room & Ambience",
    alt: "Emerald leather banquettes, exposed brick, and warm rustic timber framing at Tavolina 44 dining room in Katy, Texas",
    caption:
      "Emerald leather banquettes, exposed brick, and warm rustic timber framing at Villagio Town Center",
    span: "col-span-12 md:col-span-7 aspect-[16/10]",
  },
  {
    src: galleryArtisanPizzaSpread,
    title: "Wood-Fired Table Feast",
    alt: "Hand-stretched blistered artisan pizza, oven-baked feta marinara skillet, and cocktail at Tavolina 44 table",
    caption:
      "Hand-stretched blistered pizza, oven-baked feta marinara skillet, toasted country bread, and craft cocktail",
    span: "col-span-12 md:col-span-5 aspect-[4/3]",
  },

  // Row 2: Trio of Hand-Crafted Pastas & Secondi (4, 4 & 4 cols = 12)
  {
    src: gallerySpaghettiTavolina,
    title: "Spaghetti Tavolina 44",
    alt: "House-extruded spaghetti pasta with tender gulf shrimp and cremini mushrooms in mascarpone cream sauce",
    caption:
      "House-extruded pasta with tender gulf shrimp, cremini mushrooms, and velvety mascarpone cream sauce",
    span: "col-span-12 md:col-span-4 aspect-[4/5]",
  },
  {
    src: galleryBraisedOssoBuco,
    title: "Slow-Braised Osso Buco",
    alt: "Tender slow-braised veal osso buco shank with marrow over creamy parmesan polenta and garden rosemary",
    caption:
      "Tender veal shank with rich bone marrow resting over creamy parmesan polenta with fresh garden rosemary",
    span: "col-span-12 md:col-span-4 aspect-[4/5]",
  },
  {
    src: galleryPappardelleBolognese,
    title: "Pappardelle Bolognese",
    alt: "Fresh egg pappardelle ribbon pasta tossed in slow-simmered beef ragù with shaved parmesan at Tavolina 44",
    caption:
      "Silken wide egg ribbon pasta tossed in slow-simmered rich beef ragù with shaved parmesan and crisp white wine",
    span: "col-span-12 md:col-span-4 aspect-[4/5]",
  },

  // Row 3: Artisanal Salumi Board & Window Banquette (6 & 6 cols = 12)
  {
    src: gallerySalumiAntipastiBoard,
    title: "Artisanal Salumi & Antipasti Board",
    alt: "Artisanal antipasti board with imported Italian prosciutto, cheeses, house crostini, and citrus beet carpaccio",
    caption:
      "Imported Italian prosciutto, artisanal cheeses, house crostini, and ruby citrus beet carpaccio with white wine",
    span: "col-span-12 md:col-span-6 aspect-[16/10]",
  },
  {
    src: galleryWindowBanquette,
    title: "Sunlit Window Banquette",
    alt: "Intimate emerald green leather booth dining with crystal stemware overlooking Villagio Town Center",
    caption:
      "Intimate green leather booth dining with crystal stemware, amber votives, and views onto Villagio Town Center",
    span: "col-span-12 md:col-span-6 aspect-[16/10]",
  },

  // Row 4: Cocktails & Cold Antipasti Trio (4, 4 & 4 cols = 12)
  {
    src: galleryBarMartiniSpritz,
    title: "Espresso Martini & Citrus Spritz",
    alt: "Espresso martini with coffee bean garnish and mint citrus spritz cocktail served at Tavolina 44 bar",
    caption:
      "Handcrafted bar mixology featuring rich espresso martini and fresh mint citrus spritz on the concrete bar top",
    span: "col-span-12 md:col-span-4 aspect-[4/5]",
  },
  {
    src: galleryTableCocktailCoupe,
    title: "Signature Shaken Coupé at Table",
    alt: "Ruby botanical craft cocktail in coupe glass with silky foam and fresh thyme in dining room candlelight",
    caption:
      "Ruby botanical craft cocktail with silky foam, fresh thyme, and amber candlelight in the dining room",
    span: "col-span-12 md:col-span-4 aspect-[4/5]",
  },
  {
    src: galleryCitrusBeetSalad,
    title: "Roasted Beet & Goat Cheese Carpaccio",
    alt: "Roasted ruby beet carpaccio with creamy goat cheese, orange citrus supremes, and aged balsamic glaze",
    caption:
      "Tender ruby beets with citrus supremes, creamy goat cheese, microgreens, and 25-year balsamic glaze",
    span: "col-span-12 md:col-span-4 aspect-[4/5]",
  },

  // Row 5: Spirits Collection & Peacock Lounge (6 & 6 cols = 12)
  {
    src: gmapsBarSpirits,
    title: "Curated Spirits & Amari Collection",
    alt: "Illuminated open brick back-bar featuring Italian amari, aperitivi, and small-batch whiskies at Tavolina 44",
    caption:
      "Illuminated open brick back-bar featuring Italian amari, aperitivi, and premium small-batch whiskies",
    span: "col-span-12 md:col-span-6 aspect-[16/10]",
  },
  {
    src: gmapsBarLounge,
    title: "The Bar & Peacock Lounge",
    alt: "Poured-concrete bar counter, high-back leather barstools, and illuminated crest emblem at Tavolina 44",
    caption:
      "Poured-concrete bar top, high-back leather barstools, and Tavolina 44's illuminated crest emblem",
    span: "col-span-12 md:col-span-6 aspect-[16/10]",
  },

  // Row 6: Artisanal Pizza, Thyme Coupe & Tiramisu Trio (4, 4 & 4 cols = 12)
  {
    src: gmapsPizzaArtisan,
    title: "Wood-Fired Artisanal Pizza",
    alt: "Artisan wood-fired pizza with blistered crust, fresh mozzarella, baby arugula, and basil pesto drizzle",
    caption:
      "Hand-stretched blistered crust topped with fresh mozzarella, peppery baby arugula, and house-made pesto drizzle",
    span: "col-span-12 md:col-span-4 aspect-[4/5]",
  },
  {
    src: galleryCocktailThyme,
    title: "Velvety Botanical Coupé",
    alt: "Velvety botanical cocktail with egg white foam and fresh garden thyme sprig on dark wood table",
    caption:
      "Artisan mixology featuring botanical foam and fresh aromatic garden thyme on a dark wood table",
    span: "col-span-12 md:col-span-4 aspect-[4/5]",
  },
  {
    src: gmapsTiramisu,
    title: "Classic House Tiramisu",
    alt: "House-made classic tiramisu with espresso savoiardi, mascarpone cream, and cocoa powder crowned with edible flower",
    caption:
      "Espresso-soaked savoiardi and whipped mascarpone cream dusted with dark cocoa and crowned with an edible orchid",
    span: "col-span-12 md:col-span-4 aspect-[4/5]",
  },

  // Row 7: Warm Hearty Classics (6 & 6 cols = 12)
  {
    src: gmapsPolpette,
    title: "Polpette al Forno",
    alt: "Cast-iron skillet meatballs simmering in San Marzano pomodoro sauce with fresh oregano and focaccia",
    caption:
      "Cast-iron skillet meatballs simmering in rich San Marzano pomodoro, fresh oregano, and grilled country focaccia",
    span: "col-span-12 md:col-span-6 aspect-[16/10]",
  },
  {
    src: gmapsCalamariWine,
    title: "Calamari Fritti & Tuscan Wine",
    alt: "Golden crispy calamari fritti with marinara and lemon, served with glass of red Tuscan wine at table",
    caption:
      "Golden crispy calamari with lemon and house marinara, paired with Morellino di Scansano at the booth",
    span: "col-span-12 md:col-span-6 aspect-[16/10]",
  },
];

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/opKdMxcdpQJWxsRb7";

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenuType, setActiveMenuType] = useState<"dinner" | "drinks">(
    "dinner",
  );
  const [activeDinnerCategory, setActiveDinnerCategory] =
    useState<string>("All");
  const [activeDuality, setActiveDuality] = useState<
    "both" | "italian" | "american"
  >("both");
  const [lightboxImg, setLightboxImg] = useState<{
    src: string;
    title: string;
    caption: string;
  } | null>(null);
  const [currentReviewIdx, setCurrentReviewIdx] = useState(0);

  // 3D Sculpture Reference
  const sculptureRef = useRef<HTMLDivElement>(null);

  // Scroll Position & Mouse Tracking for 3D
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // 3D Tilt calculation for sculptural "44"
      if (sculptureRef.current) {
        const rect = sculptureRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateX = ((e.clientY - centerY) / window.innerHeight) * -22;
        const rotateY = ((e.clientX - centerX) / window.innerWidth) * 26;
        sculptureRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(15px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // IntersectionObserver for Scroll Entrance Animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [activeMenuType, activeDinnerCategory]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }

    const handleHashChange = () => {
      const targetId = window.location.hash.replace("#", "");
      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (typeof window !== "undefined") {
        window.history.pushState(null, "", `#${id}`);
      }
    }
    setMobileOpen(false);
  };

  const navItems = [
    { label: "Our Story", id: "story" },
    { label: "Menu", id: "menu" },
    { label: "Gallery", id: "gallery" },
    { label: "Location", id: "location" },
    { label: "Contact", id: "contact" },
  ];

  const filteredDinnerMenu =
    activeDinnerCategory === "All"
      ? DINNER_MENU
      : DINNER_MENU.filter((group) => group.category === activeDinnerCategory);

  const activeReview =
    VERIFIED_REVIEWS[currentReviewIdx] ?? VERIFIED_REVIEWS[0]!;

  return (
    <div className="min-h-screen bg-espresso text-ivory selection:bg-gold/30 selection:text-ivory overflow-x-hidden">
      {/* Tactile Fine Film Grain Texture */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ======================================================================= */}
      {/* MINIMAL LUXURY NAVIGATION                                               */}
      {/* ======================================================================= */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
          ? "nav-blur py-3.5"
          : "bg-gradient-to-b from-espresso/90 via-espresso/40 to-transparent py-5 lg:py-6"
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Brand Logo Using Real tavolina44.png on the Left */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="group inline-flex items-center focus:outline-none"
            aria-label="Tavolina 44 Homepage"
          >
            <TavolinaLogo
              size="sm"
              className="transition-opacity duration-300 group-hover:opacity-85"
              imgClassName="h-10 sm:h-11 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Nav Links & Subtle Instagram CTA */}
          <div className="hidden items-center gap-6 md:flex lg:gap-8 xl:gap-10">
            <nav
              className="flex items-center gap-7 lg:gap-9 xl:gap-11"
              aria-label="Main Navigation"
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="group relative py-1 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-ivory/70 transition-colors duration-300 hover:text-ivory"
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-gold transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Subtle, refined Instagram CTA in Navbar */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow Tavolina 44 on Instagram ${INSTAGRAM_HANDLE}`}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-gold/30 bg-espresso/60 px-3.5 py-1.5 backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:shadow-[0_0_20px_rgba(203,167,118,0.22)] focus:outline-none focus:ring-1 focus:ring-gold/60"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/60 opacity-75 duration-1000" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              <Instagram className="h-3.5 w-3.5 text-gold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
              <span className="text-[0.66rem] font-medium tracking-[0.18em] uppercase text-ivory/85 transition-colors group-hover:text-gold">
                {INSTAGRAM_HANDLE}
              </span>
              <ArrowUpRight className="h-3 w-3 text-gold/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold" />
            </a>
          </div>

          {/* Mobile Right Controls: Instagram Icon + Smooth Hamburger */}
          <div className="flex items-center gap-2.5 md:hidden">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow Tavolina 44 on Instagram ${INSTAGRAM_HANDLE}`}
              className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-espresso/60 text-gold backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-gold/15 active:scale-95 focus:outline-none"
            >
              <Instagram className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative flex h-11 w-11 flex-col items-center justify-center gap-1.5 text-ivory focus:outline-none hover:text-gold transition-colors"
              aria-label={
                mobileOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
            >
              <span
                className={`h-[1px] w-6 bg-current transition-all duration-300 ease-out ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
                  }`}
              />
              <span
                className={`h-[1px] w-6 bg-current transition-all duration-300 ease-out ${mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
                  }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Drawer with Silky Smooth Open/Close Animation */}
        <div
          className={`fixed inset-x-0 top-0 z-[-1] flex min-h-screen flex-col justify-between bg-espresso/98 px-8 pb-12 pt-28 backdrop-blur-2xl transition-all duration-500 md:hidden ${mobileOpen
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-4"
            }`}
          aria-hidden={!mobileOpen}
        >
          <nav
            className="flex flex-col space-y-5"
            aria-label="Mobile Navigation"
          >
            {navItems.map((item, idx) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className="group flex items-baseline justify-between border-b border-ivory/10 pb-3 text-left font-serif text-3xl font-light text-ivory transition-colors hover:text-gold"
              >
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  {item.label}
                </span>
                <span className="font-sans text-xs tracking-widest text-gold/50">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </nav>

          <div className="space-y-6 pt-6">
            {/* Mobile Drawer Instagram Link */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-sm border border-gold/25 bg-charcoal/80 p-3.5 text-ivory transition-all duration-300 hover:border-gold hover:bg-gold/10"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-espresso text-gold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Instagram className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-gold">
                    Follow Our Journey
                  </p>
                  <p className="font-serif text-base text-ivory">
                    {INSTAGRAM_HANDLE}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-gold/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold" />
            </a>

            <div className="border-t border-ivory/10 pt-6 text-xs text-bone/60 space-y-2">
              <p className="font-sans tracking-[0.24em] uppercase text-gold font-medium">
                Villagio Town Center · Suite 180
              </p>
              <p>22756 Westheimer Parkway · Katy, TX 77450</p>
              <p className="text-ivory/80">(346) 387-6092</p>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* ===================================================================== */}
        {/* 1. HERO SECTION — Full Viewport, Logo using tavolina44.png, Only CTA  */}
        {/* ===================================================================== */}
        <section
          id="home"
          className="relative flex min-h-[100svh] w-full items-end justify-center overflow-hidden pb-16 pt-32 lg:pb-24 lg:pt-36"
        >
          {/* Editorial Background Image with Cinematic Reveal & Continuous Drift */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={heroLuxury}
              alt="Artisan handmade pasta ribbons tossed in rich sauce in dark restaurant lighting at Tavolina 44 in Katy, Texas"
              className="h-full w-full object-cover object-center brightness-[0.70] contrast-[1.08] anim-hero-bg anim-hero-drift"
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
            {/* Deep Moody Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/55 to-espresso/35" />
            <div className="absolute inset-0 hero-vignette" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                {/* Eyebrow Label */}
                <div className="anim-hero-eyebrow flex items-center gap-3">
                  <span className="h-[1px] w-8 bg-gold" />
                  <p className="eyebrow-tag text-gold">
                    Italian &amp; American Cuisine · Katy, Texas
                  </p>
                </div>

                {/* Grand Editorial Headline with Staggered Entrance */}
                <h1 className="mt-5 font-serif text-[clamp(3.5rem,8.5vw,7.8rem)] font-light leading-[0.9] tracking-tight text-ivory">
                  <span className="sr-only">
                    Tavolina 44 — Italian &amp; American Dining in Katy, Texas
                  </span>
                  <span aria-hidden="true" className="block anim-hero-h1-1">
                    Italian Soul.
                  </span>
                  <span
                    aria-hidden="true"
                    className="block anim-hero-h1-2 mt-1"
                  >
                    <em className="font-serif italic font-normal text-gold/95">
                      American Spirit.
                    </em>
                  </span>
                </h1>

                {/* Tagline Narrative */}
                <p className="anim-hero-desc mt-7 max-w-xl text-base font-light leading-relaxed text-bone/85 sm:text-lg">
                  An elevated culinary sanctuary at Villagio Town Center. Where
                  daily hand-rolled pastas, ember-charred prime cuts, and
                  genuine Texas hospitality converge around a shared table.
                </p>

                {/* Primary Action — ONLY 'Explore Menu' as strictly required */}
                <div className="anim-hero-cta mt-9 flex flex-wrap items-center gap-6">
                  <Button
                    onClick={() => scrollToSection("menu")}
                    className="group relative overflow-hidden rounded-none bg-gold px-8 py-6 text-xs font-semibold uppercase tracking-[0.24em] text-espresso transition-all duration-500 hover:bg-ivory hover:shadow-[0_0_35px_rgba(203,167,118,0.35)]"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Explore Menu
                      <ArrowDown
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-y-1"
                      />
                    </span>
                  </Button>

                  <div className="hidden sm:flex items-center gap-2.5 text-xs tracking-widest uppercase text-ivory/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Dinner Service 5:00 PM Tonight</span>
                  </div>
                </div>
              </div>

              {/* Architectural Location Detail Card */}
              <div className="anim-hero-meta hidden lg:col-span-4 lg:flex lg:flex-col lg:items-end">
                <div className="border-l border-gold/40 pl-6 text-right">
                  <span className="block font-serif text-3xl font-light text-gold/95">
                    Villagio
                  </span>
                  <span className="block text-xs uppercase tracking-[0.24em] text-ivory/70 mt-1">
                    Town Center · Katy, TX
                  </span>
                  <p className="mt-3 text-xs leading-relaxed text-bone/60 max-w-[15rem]">
                    Wood-fired hearth, daily extruded pasta, and an extensive
                    reserve wine list.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Hero Divider & Continuity */}
            <div className="mt-14 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-ivory/10 pt-5 text-[0.65rem] uppercase tracking-[0.24em] text-ivory/45">
              <span>Scroll to Begin Experience</span>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-ivory/65 transition-colors duration-300 hover:text-gold"
              >
                <Instagram className="h-3.5 w-3.5 text-gold/80 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                <span className="tracking-[0.22em] transition-colors group-hover:text-gold">
                  {INSTAGRAM_HANDLE}
                </span>
                <span className="text-[0.58rem] normal-case text-gold/60">
                  · stories &amp; craft
                </span>
                <ArrowUpRight className="h-3 w-3 opacity-50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-gold" />
              </a>
              <span>EST. 2026 · KATY, TEXAS</span>
            </div>
          </div>
        </section>

        {/* ===================================================================== */}
        {/* 2. OUR STORY & PHILOSOPHY                                             */}
        {/* ===================================================================== */}
        <section
          id="story"
          className="scroll-mt-24 relative bg-charcoal py-28 lg:py-36 overflow-hidden"
        >
          <span
            id="our-story"
            className="scroll-mt-24 pointer-events-none absolute -top-24"
            aria-hidden="true"
          />

          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 reveal-on-scroll">
                <p className="eyebrow-tag text-gold">01 · Our Philosophy</p>
                <h2 className="mt-5 font-serif text-[clamp(2.6rem,5.5vw,5rem)] font-light leading-[0.95] tracking-tight text-ivory">
                  Italian tradition.
                  <br />
                  <em className="italic text-gold font-normal">
                    American character.
                  </em>
                </h2>

                <div className="mt-8 space-y-6 text-base font-light leading-relaxed text-bone/85 sm:text-lg">
                  <p>
                    Tavolina 44 was born from a desire to strip away cliché and
                    honor the true essence of dining: the gathering of people
                    around food cooked with patience, fire, and purpose.
                  </p>
                  <p>
                    Here in Katy, we unite two culinary legacies. The Italian
                    reverence for pure ingredients, slow-simmered sauces, and
                    house-made pasta meets the American devotion to prime
                    oak-charred steaks, vibrant convivial energy, and
                    hospitality that makes every guest feel like family.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-8 border-t border-ivory/10 pt-8 sm:grid-cols-3">
                  <div>
                    <span className="block font-serif text-3xl text-gold font-light">
                      Hearth
                    </span>
                    <span className="text-[0.68rem] uppercase tracking-[0.2em] text-ivory/60">
                      Live Oak Wood Fire
                    </span>
                  </div>
                  <div>
                    <span className="block font-serif text-3xl text-gold font-light">
                      Fatto a Mano
                    </span>
                    <span className="text-[0.68rem] uppercase tracking-[0.2em] text-ivory/60">
                      Daily Fresh Pasta
                    </span>
                  </div>
                  <div>
                    <span className="block font-serif text-3xl text-gold font-light">
                      Cantina
                    </span>
                    <span className="text-[0.68rem] uppercase tracking-[0.2em] text-ivory/60">
                      Estate Wine Pairings
                    </span>
                  </div>
                </div>
              </div>

              {/* Editorial Photograph */}
              <div className="relative lg:col-span-5 reveal-on-scroll delay-200">
                <div className="editorial-img-container shadow-2xl border border-ivory/10 aspect-[4/5] w-full">
                  <img
                    src={gmapsDiningRoom}
                    alt="Atmospheric dining room with emerald leather booths at Tavolina 44"
                    className="editorial-img h-full w-full object-cover brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="eyebrow-tag text-gold">
                      Villagio Town Center
                    </p>
                    <p className="mt-1 font-serif text-xl text-ivory font-light">
                      Intimacy &amp; Architecture
                    </p>
                  </div>
                </div>

                {/* Floating Accent Badge */}
                {/* <div className="absolute -bottom-6 -left-6 hidden border border-gold/30 bg-espresso/95 p-5 shadow-2xl backdrop-blur-md sm:block">

                  <span className="block text-[0.6rem] uppercase tracking-widest text-ivory/70">
                    TAVOLINA 44
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================== */}
        {/* 3. CULINARY DUALITY & 3D "44" SCULPTURAL EMBLEM                       */}
        {/* ===================================================================== */}
        <section
          id="identity"
          className="scroll-mt-24 relative overflow-hidden bg-espresso py-28 lg:py-36"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            {/* Visual Transition Banner: Artisanal Ingredients */}
            <div className="relative mb-20 overflow-hidden border border-ivory/10 shadow-2xl reveal-on-scroll">
              <div className="aspect-[21/9] w-full max-h-[340px] overflow-hidden">
                <img
                  src={ingredients}
                  alt="Raw artisanal San Marzano tomatoes, cold pressed olive oil and fresh rosemary"
                  className="h-full w-full object-cover brightness-[0.85] contrast-[1.05]"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-espresso/95 via-espresso/50 to-transparent flex items-center p-8 sm:p-14">
                <div className="max-w-md">
                  <p className="eyebrow-tag text-gold">Purity of Ingredients</p>
                  <h3 className="font-serif text-2xl sm:text-3xl text-ivory mt-2 font-light">
                    The Art of Simplicity
                  </h3>
                  <p className="text-xs sm:text-sm text-bone/80 font-light mt-2 leading-relaxed">
                    Imported cold-pressed Puglia olive oils, flour milled for
                    morning pasta, and aromatic rosemary cut fresh for ember
                    roasting.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center reveal-on-scroll">
              <p className="eyebrow-tag text-gold">02 · The Convergence</p>
              <h2 className="mt-4 font-serif text-[clamp(2.4rem,5vw,4.5rem)] font-light text-ivory">
                Two Culinary Identities.{" "}
                <em className="italic text-gold font-normal">One Table.</em>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-bone/70">
                Explore the dual forces that define our kitchen. Toggle between
                them or experience their unified balance in our dining room.
              </p>

              {/* Duality Filter Tabs */}
              <div className="mt-8 mx-auto grid w-full max-w-sm grid-cols-3 border border-ivory/15 bg-charcoal/60 p-1 sm:inline-flex sm:w-auto sm:max-w-none">
                <button
                  onClick={() => setActiveDuality("both")}
                  className={`px-1.5 py-2 sm:px-5 text-[0.58rem] sm:text-[0.68rem] uppercase tracking-[0.08em] sm:tracking-[0.22em] transition-all flex items-center justify-center text-center font-medium leading-tight ${activeDuality === "both"
                    ? "bg-gold text-espresso font-semibold"
                    : "text-ivory/60 hover:text-ivory"
                    }`}
                >
                  Convergence
                </button>
                <button
                  onClick={() => setActiveDuality("italian")}
                  className={`px-1.5 py-2 sm:px-5 text-[0.58rem] sm:text-[0.68rem] uppercase tracking-[0.08em] sm:tracking-[0.22em] transition-all flex items-center justify-center text-center font-medium leading-tight ${activeDuality === "italian"
                    ? "bg-wine text-ivory font-semibold"
                    : "text-ivory/60 hover:text-ivory"
                    }`}
                >
                  Italian Soul
                </button>
                <button
                  onClick={() => setActiveDuality("american")}
                  className={`px-1.5 py-2 sm:px-5 text-[0.58rem] sm:text-[0.68rem] uppercase tracking-[0.08em] sm:tracking-[0.22em] transition-all flex items-center justify-center text-center font-medium leading-tight ${activeDuality === "american"
                    ? "bg-terracotta text-ivory font-semibold"
                    : "text-ivory/60 hover:text-ivory"
                    }`}
                >
                  American Spirit
                </button>
              </div>
            </div>

            {/* Monumental Dual Composition with Central 3D Sculpture & Origin Story */}
            <div className="mt-16 grid items-center gap-10 lg:gap-8 xl:gap-12 lg:grid-cols-12 w-full min-w-0">
              {/* Italian Wing */}
              <div
                className={`transition-all duration-700 min-w-0 w-full lg:col-span-4 ${activeDuality === "american"
                  ? "opacity-30 blur-[1px]"
                  : "opacity-100"
                  }`}
              >
                <div className="border-t border-gold/30 pt-6 min-w-0 w-full">
                  <span className="font-serif text-[clamp(2.1rem,2.8vw,3.6rem)] xl:text-[clamp(2.5rem,3.4vw,4.4rem)] font-light leading-none tracking-tight text-ivory block break-normal">
                    ITALIAN
                  </span>
                  <span className="mt-2 block eyebrow-tag text-gold">
                    Puglia · Emilia-Romagna · Campania
                  </span>
                  <p className="mt-4 text-sm font-light leading-relaxed text-bone/80">
                    A profound respect for seasonality, simplicity, and
                    patience. Morning-kneaded dough, San Marzano tomatoes, whole
                    cold-water Branzino, and velvety burrata.
                  </p>
                  <ul className="mt-6 space-y-2 text-xs tracking-wider uppercase text-ivory/70">
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 bg-gold rounded-full shrink-0" />
                      Hand-Crafted Pasta Shapes
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 bg-gold rounded-full shrink-0" />
                      Aged Balsamico di Modena
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 bg-gold rounded-full shrink-0" />
                      Crispy Arancini Albanese
                    </li>
                  </ul>
                </div>
              </div>

              {/* 3D Brand Sculpture ("44") & Origin Story */}
              <div className="flex flex-col items-center justify-center min-w-0 w-full lg:col-span-4 py-4 lg:py-0">
                <div className="sculpture-wrapper relative flex flex-col items-center justify-center w-full max-w-sm">
                  {/* Origin Tag */}
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/5 px-3.5 py-1 text-[0.62rem] uppercase tracking-[0.24em] text-gold mb-2 shadow-sm">
                    <Heart className="w-3 h-3 text-gold fill-gold/20" />
                    <span>Two Fours · One Story</span>
                  </div>

                  {/* 3D Interactive Bronze Sculpture ("44") */}
                  <div
                    ref={sculptureRef}
                    className="sculpture-glyph sculpture-glow select-none cursor-grab active:cursor-grabbing text-center my-1"
                    title="Interactive 3D 44 Emblem — Move cursor to inspect perspective"
                  >
                    <span>4</span>
                    <span className="opacity-40 text-gold text-[0.7em] mx-[-0.05em] font-sans font-extralight select-none">
                      ·
                    </span>
                    <span>4</span>
                  </div>

                  {/* Duo Sub-tag */}
                  <div className="flex items-center justify-center gap-3 text-[0.64rem] uppercase tracking-[0.22em] text-ivory/70 mt-1">
                    <span className="text-gold/90 font-medium">
                      Her Lucky 4
                    </span>
                    <span className="h-1 w-1 rounded-full bg-gold/40" />
                    <span className="text-terracotta/90 font-medium">
                      His Lucky 4
                    </span>
                  </div>

                  {/* Elegant Origin Story Plaque */}
                  <div className="mt-5 w-full border border-gold/25 bg-gradient-to-b from-charcoal/90 via-espresso/95 to-charcoal/95 p-5 sm:p-6 shadow-2xl backdrop-blur-md rounded-sm text-center relative overflow-hidden group hover:border-gold/50 transition-colors duration-500">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />

                    <div className="flex items-center justify-center gap-2 text-gold text-xs font-serif italic mb-2">
                      <Calendar className="w-3.5 h-3.5 text-gold/80" />
                      <span>Destined on December 4th</span>
                    </div>

                    <p className="text-xs font-light leading-relaxed text-bone/85">
                      For the husband-and-wife founders behind Tavolina 44, the
                      number{" "}
                      <strong className="font-medium text-gold">4</strong> was
                      always their personal lucky number. When life brought them
                      together on{" "}
                      <strong className="font-medium text-ivory">
                        December 4th
                      </strong>
                      —followed by life-changing milestones each falling on the
                      fourth—bringing their two fours together became their
                      symbol of destiny.
                    </p>

                    <div className="mt-4 pt-3 border-t border-ivory/10 flex items-center justify-center gap-2 sm:gap-4 text-[0.58rem] sm:text-[0.62rem] uppercase tracking-[0.16em] text-ivory/60">
                      <span>Two Lives</span>
                      <span className="text-gold">✦</span>
                      <span>Two Cultures</span>
                      <span className="text-gold">✦</span>
                      <span>One Table</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* American Wing */}
              <div
                className={`transition-all duration-700 min-w-0 w-full lg:col-span-4 ${activeDuality === "italian"
                  ? "opacity-30 blur-[1px]"
                  : "opacity-100"
                  }`}
              >
                <div className="border-t border-terracotta/40 pt-6 text-left lg:text-right min-w-0 w-full">
                  <span className="font-serif text-[clamp(2.1rem,2.8vw,3.6rem)] xl:text-[clamp(2.5rem,3.4vw,4.4rem)] font-light leading-none tracking-tight text-terracotta block break-normal">
                    AMERICAN
                  </span>
                  <span className="mt-2 block eyebrow-tag text-gold lg:text-right">
                    Texas Ember &amp; Modern Energy
                  </span>
                  <p className="mt-4 text-sm font-light leading-relaxed text-bone/80">
                    The vibrancy of modern American dining. Prime aged Filet
                    Mignon charred over red-hot oak, bold craft cocktail
                    mixology, and unstuffy, heartfelt hospitality.
                  </p>
                  <ul className="mt-6 space-y-2 text-xs tracking-wider uppercase text-ivory/70">
                    <li className="flex items-center gap-2 lg:justify-end">
                      Prime Oak-Charred Steaks
                      <span className="h-1 w-1 bg-terracotta rounded-full shrink-0" />
                    </li>
                    <li className="flex items-center gap-2 lg:justify-end">
                      Jumbo Lump Blue Crab Cakes
                      <span className="h-1 w-1 bg-terracotta rounded-full shrink-0" />
                    </li>
                    <li className="flex items-center gap-2 lg:justify-end">
                      Contemporary Katy Gathering
                      <span className="h-1 w-1 bg-terracotta rounded-full shrink-0" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================== */}
        {/* 4. ATMOSPHERE & RESTAURANT INTERIOR                                   */}
        {/* ===================================================================== */}
        <section
          id="atmosphere"
          className="scroll-mt-24 relative overflow-hidden bg-charcoal py-28 lg:py-36"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5 reveal-on-scroll">
                <p className="eyebrow-tag text-gold">
                  03 · Ambience &amp; Hospitality
                </p>
                <h2 className="mt-4 font-serif text-[clamp(2.6rem,5vw,4.8rem)] font-light leading-[0.95] text-ivory">
                  Candlelight, conversation, &amp;{" "}
                  <em className="italic text-gold font-normal">hearth.</em>
                </h2>
                <div className="mt-8 space-y-5 text-sm sm:text-base font-light leading-relaxed text-bone/80">
                  <p>
                    Step through our doors at Villagio Town Center into a space
                    designed for lingering. The dining room glows in amber
                    candlelight, textured stone, and deep leather banquettes.
                  </p>
                  <p>
                    From the rhythmic clinking of glassware at our marble
                    cocktail bar to the aroma of oak-fire and roasted garlic
                    rising from the kitchen, every element is curated to make
                    time slow down.
                  </p>
                </div>

                <div className="mt-10 border-l border-gold/40 pl-6 text-xs text-ivory/70 space-y-2">
                  <p className="font-serif text-lg text-gold italic">
                    "An intimate sanctuary where dinner becomes an evening to
                    remember."
                  </p>
                  <p className="uppercase tracking-[0.2em] text-[0.62rem] text-ivory/50">
                    Villagio Town Center · Katy, Texas
                  </p>
                </div>
              </div>

              {/* Visual Showcase: The Bar & The Dining Experience */}
              <div className="grid grid-cols-2 gap-5 lg:col-span-7 reveal-on-scroll delay-200">
                <div
                  className="editorial-img-container border border-ivory/10 shadow-2xl cursor-pointer"
                  onClick={() =>
                    setLightboxImg({
                      src: galleryTableCocktailCoupe,
                      title: "Handcrafted Bar Cocktails",
                      caption:
                        "Artisan mixology, botanical coupes, and refreshing citrus spritzes crafted at Tavolina 44.",
                    })
                  }
                >
                  <img
                    src={galleryTableCocktailCoupe}
                    alt="Handcrafted botanical coupe cocktail with fresh thyme at Tavolina 44 bar"
                    className="editorial-img aspect-[3/4] w-full h-full object-cover brightness-95"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="eyebrow-tag text-gold text-[0.58rem]">
                      The Bar
                    </span>
                    <p className="font-serif text-lg text-ivory leading-tight mt-1 font-light">
                      Artisan Spirits
                    </p>
                  </div>
                </div>

                <div
                  className="editorial-img-container border border-ivory/10 shadow-2xl mt-8 cursor-pointer"
                  onClick={() =>
                    setLightboxImg({
                      src: gmapsDiningRoom,
                      title: "The Dining Room",
                      caption:
                        "Warm amber glow, emerald leather banquettes, and rustic architectural timber at Villagio Town Center.",
                    })
                  }
                >
                  <img
                    src={gmapsDiningRoom}
                    alt="Atmospheric Tavolina 44 dining room with emerald leather banquettes and rustic timber beams"
                    className="editorial-img aspect-[3/4] w-full object-cover brightness-95"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="eyebrow-tag text-gold text-[0.58rem]">
                      The Room
                    </span>
                    <p className="font-serif text-lg text-ivory leading-tight mt-1 font-light">
                      Dining Atmosphere
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================== */}
        {/* 5. GUEST EXPERIENCES & REVIEWS                                        */}
        {/* ===================================================================== */}
        <section
          id="reviews"
          className="scroll-mt-24 relative bg-espresso py-28 lg:py-36 overflow-hidden border-y border-ivory/10"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-ivory/15 pb-8 reveal-on-scroll">
              <div>
                <p className="eyebrow-tag text-gold">04 · Guest Experiences</p>
                <h2 className="mt-4 font-serif text-[clamp(2.6rem,5.5vw,5rem)] font-light leading-none text-ivory">
                  At the{" "}
                  <em className="italic text-gold font-normal">Table.</em>
                </h2>
              </div>
              <div className="mt-4 md:mt-0 flex items-center gap-4">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold hover:text-ivory transition-colors border-b border-gold/40 pb-1"
                >
                  <span>Read all reviews on Google</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Synchronized Review Showcase */}
            <div className="mt-14 grid items-center gap-12 lg:grid-cols-12 reveal-on-scroll delay-200">
              {/* Photograph */}
              <div className="lg:col-span-6">
                <div
                  className="editorial-img-container relative border border-ivory/15 shadow-2xl aspect-[16/11] overflow-hidden cursor-pointer"
                  onClick={() =>
                    setLightboxImg({
                      src: activeReview.photo,
                      title: activeReview.highlight,
                      caption: activeReview.quote,
                    })
                  }
                >
                  <img
                    key={activeReview.photo}
                    src={activeReview.photo}
                    alt={`${activeReview.highlight} at Tavolina 44 in Katy, Texas`}
                    className="editorial-img h-full w-full object-cover brightness-[0.92]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[0.62rem] uppercase tracking-[0.25em] text-gold/90 bg-espresso/90 px-3 py-1.5 border border-gold/20">
                      {activeReview.highlight}
                    </span>
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <div className="lg:col-span-6 lg:pl-6">
                <div className="flex items-center gap-1.5 text-gold">
                  {[...Array(activeReview.rating)].map((_, idx) => (
                    <Star key={idx} size={18} fill="currentColor" />
                  ))}
                  <span className="ml-3 text-xs uppercase tracking-[0.2em] text-ivory/60 font-sans">
                    5.0 Star Rating
                  </span>
                </div>

                <blockquote className="mt-7 font-serif text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed text-ivory">
                  "{activeReview.quote}"
                </blockquote>

                <div className="mt-8 flex items-center justify-between border-t border-ivory/15 pt-6">
                  <div>
                    <span className="block font-serif text-xl font-normal text-gold">
                      {activeReview.diner}
                    </span>
                    <span className="text-xs uppercase tracking-[0.22em] text-ivory/50">
                      {activeReview.source} · Villagio Town Center
                    </span>
                  </div>

                  {/* Carousel Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        setCurrentReviewIdx(
                          (prev) =>
                            (prev - 1 + VERIFIED_REVIEWS.length) %
                            VERIFIED_REVIEWS.length,
                        )
                      }
                      className="flex h-11 w-11 items-center justify-center border border-ivory/20 text-ivory hover:border-gold hover:text-gold transition-colors"
                      aria-label="Previous Review"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentReviewIdx(
                          (prev) => (prev + 1) % VERIFIED_REVIEWS.length,
                        )
                      }
                      className="flex h-11 w-11 items-center justify-center border border-ivory/20 text-ivory hover:border-gold hover:text-gold transition-colors"
                      aria-label="Next Review"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================== */}
        {/* 6. SIGNATURE PLATES (Plates with Presence)                             */}
        {/* ===================================================================== */}
        <section
          id="plates"
          className="scroll-mt-24 relative bg-charcoal py-28 lg:py-36"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-ivory/15 pb-8 reveal-on-scroll">
              <div>
                <p className="eyebrow-tag text-gold">
                  05 · Culinary Highlights
                </p>
                <h2 className="mt-4 font-serif text-[clamp(2.6rem,5.5vw,5rem)] font-light leading-[0.95] text-ivory">
                  Plates with{" "}
                  <em className="italic text-gold font-normal">presence.</em>
                </h2>
              </div>
              <p className="mt-4 max-w-xs text-xs uppercase tracking-[0.2em] text-ivory/50 md:mt-0 md:text-right">
                Verified signature dishes from our official dinner menu cards.
              </p>
            </div>

            {/* Asymmetric Editorial Rows */}
            <div className="mt-20 space-y-28 lg:space-y-36">
              {SIGNATURE_PLATES.map((dish, i) => {
                const isEven = i % 2 === 1;
                return (
                  <article
                    key={dish.title}
                    className="grid items-center gap-12 lg:grid-cols-12 reveal-on-scroll"
                  >
                    {/* Editorial Photo */}
                    <div
                      className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                    >
                      <div
                        className="editorial-img-container relative border border-ivory/10 shadow-2xl group cursor-pointer"
                        onClick={() =>
                          setLightboxImg({
                            src: dish.image,
                            title: dish.title,
                            caption: dish.description,
                          })
                        }
                      >
                        <img
                          src={dish.image}
                          alt={`${dish.title} — ${dish.subtitle} at Tavolina 44 in Katy, Texas`}
                          className="editorial-img aspect-[16/11] w-full object-cover brightness-[0.95]"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700" />
                        <div className="absolute bottom-5 left-5 hidden sm:block">
                          <span className="text-[0.62rem] uppercase tracking-[0.25em] text-gold/90 bg-espresso/85 px-3 py-1.5 border border-gold/20">
                            {dish.note}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Dish Narrative & Details */}
                    <div
                      className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                    >
                      <div className="flex items-baseline justify-between border-b border-ivory/10 pb-4">
                        <span className="font-serif text-5xl font-light text-gold/50">
                          {dish.index}
                        </span>
                        <span className="text-xs uppercase tracking-[0.22em] text-gold">
                          {dish.category}
                        </span>
                      </div>

                      <span className="mt-5 block text-xs uppercase tracking-[0.24em] text-ivory/50">
                        {dish.subtitle}
                      </span>

                      <h3 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-ivory">
                        {dish.title}
                      </h3>

                      <p className="mt-5 text-sm sm:text-base font-light leading-relaxed text-bone/85">
                        {dish.description}
                      </p>

                      <div className="mt-8 flex items-center justify-between border-t border-ivory/10 pt-6">
                        <span className="font-serif text-3xl font-normal text-gold">
                          {dish.price}
                        </span>
                        <button
                          onClick={() => {
                            setActiveMenuType("dinner");
                            setActiveDinnerCategory(dish.category);
                            scrollToSection("menu");
                          }}
                          className="group flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-ivory/70 hover:text-gold transition-colors"
                        >
                          <span>View on Menu</span>
                          <ChevronRight
                            size={14}
                            className="transition-transform group-hover:translate-x-1 text-gold"
                          />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================================== */}
        {/* 7. DIGITAL MENU — SOURCE OF TRUTH: UPLOADED MENU CARDS                */}
        {/* ===================================================================== */}
        <section
          id="menu"
          className="scroll-mt-24 relative bg-espresso py-28 lg:py-36"
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            {/* Editorial Header */}
            <div className="text-center reveal-on-scroll">
              <p className="eyebrow-tag text-gold">06 · Official Menu</p>
              <h2 className="mt-4 font-serif text-[clamp(2.8rem,5.5vw,5rem)] font-light leading-none text-ivory">
                The Curated{" "}
                <em className="italic text-gold font-normal">Collection</em>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm font-light text-bone/70">
                Verified dinner and drinks selection at Villagio Town Center.
                All pastas extruded fresh in-house. Prime meats charred over
                live white oak coals.
              </p>

              {/* Primary Menu Type Toggle (Dinner vs Drinks) */}
              <div className="mt-8 inline-flex border border-gold/30 bg-charcoal/80 p-1.5 shadow-lg">
                <button
                  onClick={() => setActiveMenuType("dinner")}
                  className={`flex items-center gap-2.5 px-6 py-2.5 text-xs uppercase tracking-[0.22em] transition-all duration-300 ${activeMenuType === "dinner"
                    ? "bg-gold text-espresso font-semibold"
                    : "text-ivory/70 hover:text-ivory"
                    }`}
                >
                  <UtensilsCrossed size={14} />
                  <span>Dinner Menu</span>
                </button>
                <button
                  onClick={() => setActiveMenuType("drinks")}
                  className={`flex items-center gap-2.5 px-6 py-2.5 text-xs uppercase tracking-[0.22em] transition-all duration-300 ${activeMenuType === "drinks"
                    ? "bg-gold text-espresso font-semibold"
                    : "text-ivory/70 hover:text-ivory"
                    }`}
                >
                  <WineIcon size={14} />
                  <span>Drinks &amp; Cellar</span>
                </button>
              </div>

              {/* Dinner Category Filter Tabs */}
              {activeMenuType === "dinner" && (
                <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-2.5">
                  {[
                    "All",
                    "Cold Appetizers",
                    "Hot Appetizers",
                    "Pizza",
                    "Pasta & Risotto",
                    "Main Courses",
                    "Sides",
                  ].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveDinnerCategory(cat)}
                      className={`px-4 py-1.5 text-[0.68rem] uppercase tracking-[0.2em] transition-all duration-200 border ${activeDinnerCategory === cat
                        ? "border-gold bg-gold/20 text-gold font-medium"
                        : "border-ivory/15 bg-charcoal/30 text-ivory/60 hover:border-gold/40 hover:text-ivory"
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}

              {/* Button to View Original Printed Menu Cards */}
              <div className="mt-6 flex justify-center">
                <button
                  onClick={() =>
                    setLightboxImg({
                      src:
                        activeMenuType === "dinner"
                          ? "/menu-card-1.jpg"
                          : "/menu-card-2.jpg",
                      title:
                        activeMenuType === "dinner"
                          ? "Official Tavolina 44 Dinner Menu Card"
                          : "Official Tavolina 44 Drinks & Cellar Menu Card",
                      caption:
                        "Authentic scanned printed menu card from Tavolina 44 at Villagio Town Center.",
                    })
                  }
                  className="inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.22em] text-gold/80 hover:text-gold border-b border-gold/30 pb-0.5 transition-colors"
                >
                  <Eye size={13} />
                  <span>
                    View Original Physical Menu Card (
                    {activeMenuType === "dinner" ? "Dinner" : "Drinks"})
                  </span>
                </button>
              </div>
            </div>

            {/* Menu Items Render (Dinner or Drinks) */}
            <div className="mt-14 space-y-16">
              {activeMenuType === "dinner"
                ? filteredDinnerMenu.map((group) => (
                  <div
                    key={group.category}
                    className="border border-ivory/10 bg-charcoal/45 p-7 sm:p-11 backdrop-blur-sm shadow-xl reveal-on-scroll"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-gold/30 pb-5">
                      <div>
                        <span className="eyebrow-tag text-gold/90">
                          {group.tagline}
                        </span>
                        <h3 className="mt-1 font-serif text-3xl sm:text-4xl font-light text-ivory">
                          {group.category}
                        </h3>
                      </div>
                      <span className="mt-2 sm:mt-0 text-[0.65rem] uppercase tracking-[0.25em] text-ivory/50 font-sans">
                        Tavolina 44 Verified
                      </span>
                    </div>

                    <div className="mt-8 divide-y divide-ivory/10">
                      {group.items.map((item) => (
                        <div
                          key={item.name}
                          className="group py-5 first:pt-0 last:pb-0 transition-colors hover:bg-ivory/[0.02]"
                        >
                          <div className="flex items-baseline justify-between gap-4">
                            <div className="flex flex-wrap items-center gap-2.5">
                              <h4 className="font-serif text-xl sm:text-2xl font-light text-ivory group-hover:text-gold transition-colors">
                                {item.name}
                              </h4>
                              {item.badge && (
                                <span className="border border-gold/30 bg-wine/30 px-2 py-0.5 text-[0.58rem] uppercase tracking-widest text-gold font-medium">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <span className="font-sans text-lg font-light text-gold shrink-0 tabular-nums">
                              {item.price}
                            </span>
                          </div>
                          <p className="mt-1.5 max-w-2xl text-xs sm:text-sm font-light text-bone/75 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
                : DRINKS_MENU.map((group) => (
                  <div
                    key={group.category}
                    className="border border-ivory/10 bg-charcoal/45 p-7 sm:p-11 backdrop-blur-sm shadow-xl reveal-on-scroll"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-gold/30 pb-5">
                      <div>
                        <span className="eyebrow-tag text-gold/90">
                          {group.tagline}
                        </span>
                        <h3 className="mt-1 font-serif text-3xl sm:text-4xl font-light text-ivory">
                          {group.category}
                        </h3>
                      </div>
                      <span className="mt-2 sm:mt-0 text-[0.65rem] uppercase tracking-[0.25em] text-ivory/50 font-sans">
                        Cellar &amp; Bar
                      </span>
                    </div>

                    <div className="mt-8 divide-y divide-ivory/10">
                      {group.items.map((item) => (
                        <div
                          key={item.name}
                          className="group py-5 first:pt-0 last:pb-0 transition-colors hover:bg-ivory/[0.02]"
                        >
                          <div className="flex items-baseline justify-between gap-4">
                            <div className="flex flex-wrap items-center gap-2.5">
                              <h4 className="font-serif text-xl sm:text-2xl font-light text-ivory group-hover:text-gold transition-colors">
                                {item.name}
                              </h4>
                              {item.badge && (
                                <span className="border border-gold/30 bg-wine/30 px-2 py-0.5 text-[0.58rem] uppercase tracking-widest text-gold font-medium">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <span className="font-sans text-lg font-light text-gold shrink-0 tabular-nums">
                              {item.price}
                            </span>
                          </div>
                          <p className="mt-1.5 max-w-2xl text-xs sm:text-sm font-light text-bone/75 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>

            {/* Official Disclaimers from Menu Cards */}
            <div className="mt-14 border-t border-ivory/10 pt-7 text-center space-y-2">
              <p className="text-xs tracking-wider text-ivory/60 font-light">
                * Consuming raw or undercooked meats, poultry, seafood,
                shellfish, or eggs may increase your risk of foodborne illness.
              </p>
              <p className="text-xs tracking-wider text-ivory/60 font-light">
                * Please inform your server of any food allergies before placing
                your order.
              </p>
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-gold/80 pt-2 font-medium">
                Reserve Bottle List &amp; Sommelier Pairings Available Upon
                Request
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================== */}
        {/* 8. GALLERY SECTION                                                    */}
        {/* ===================================================================== */}
        <section
          id="gallery"
          className="scroll-mt-24 relative bg-charcoal py-28 lg:py-36"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-ivory/15 pb-8 reveal-on-scroll">
              <div>
                <p className="eyebrow-tag text-gold">07 · Visual Archive</p>
                <h2 className="mt-4 font-serif text-[clamp(2.6rem,5.5vw,5rem)] font-light leading-none text-ivory">
                  Tavolina 44{" "}
                  <em className="italic text-gold font-normal">Gallery</em>
                </h2>
                <p className="mt-4 max-w-2xl text-sm sm:text-base font-light leading-relaxed text-bone/80">
                  An intimate visual showcase of Tavolina 44 in Katy, Texas.
                  Explore our warm dining room, hand-rolled pastas,
                  hearth-charred prime cuts, handcrafted cocktails, and
                  atmospheric bar at Villagio Town Center.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-4 md:mt-0">
                <span className="text-xs uppercase tracking-[0.24em] text-ivory/50 font-sans">
                  Click any photograph to view high-resolution detail
                </span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Tavolina 44 on Instagram for more photos and stories"
                  className="group inline-flex items-center gap-2 rounded-full border border-gold/30 bg-espresso/60 px-3.5 py-1.5 text-[0.68rem] uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:border-gold hover:bg-gold/15 hover:shadow-[0_0_20px_rgba(203,167,118,0.2)]"
                >
                  <Instagram className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  <span>More on Instagram</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </a>
              </div>
            </div>

            {/* Asymmetric Masonry Layout */}
            <div className="mt-14 grid grid-cols-12 gap-5 reveal-on-scroll delay-200">
              {GALLERY_IMAGES.map((img) => (
                <div
                  key={img.src}
                  className={`${img.span} editorial-img-container group relative cursor-pointer border border-ivory/10 shadow-xl`}
                  onClick={() => setLightboxImg(img)}
                >
                  <img
                    src={img.src}
                    alt={img.alt || img.caption || img.title}
                    className="editorial-img h-full w-full object-cover brightness-95"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <span className="eyebrow-tag text-gold text-[0.62rem]">
                      Gallery
                    </span>
                    <h4 className="font-serif text-2xl text-ivory font-light">
                      {img.title}
                    </h4>
                    <p className="text-xs text-bone/80 font-light mt-1">
                      {img.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================== */}
        {/* 9. LOCATION & HOURS                                                   */}
        {/* ===================================================================== */}
        <section
          id="location"
          className="scroll-mt-24 relative bg-espresso py-28 lg:py-36"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
              {/* Location Details */}
              <div className="lg:col-span-5 reveal-on-scroll">
                <p className="eyebrow-tag text-gold">08 · Visit &amp; Hours</p>
                <h2 className="mt-4 font-serif text-[clamp(2.6rem,5vw,4.8rem)] font-light leading-[0.95] text-ivory">
                  FIND <em className="italic text-gold font-normal">US</em>
                </h2>

                <div className="mt-8 space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4 border-b border-ivory/10 pb-6">
                    <MapPin className="text-gold shrink-0 mt-1" size={20} />
                    <div>
                      <span className="block text-xs uppercase tracking-[0.22em] text-gold font-medium">
                        Villagio Town Center
                      </span>
                      <address className="not-italic text-base sm:text-lg font-light text-ivory mt-1 leading-relaxed">
                        22756 Westheimer Parkway
                        <br />
                        Suite 180
                        <br />
                        Katy, TX 77450
                      </address>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4 border-b border-ivory/10 pb-6">
                    <Clock className="text-gold shrink-0 mt-1" size={20} />
                    <div>
                      <span className="block text-xs uppercase tracking-[0.22em] text-gold font-medium">
                        Opening Hours
                      </span>
                      <div className="mt-2 space-y-1.5 text-sm sm:text-base font-light text-bone/90">
                        <p className="flex justify-between gap-8">
                          <span className="text-ivory/70">Sun – Thu:</span>
                          <span className="font-normal text-ivory">
                            5:00 PM – 10:00 PM
                          </span>
                        </p>
                        <p className="flex justify-between gap-8">
                          <span className="text-ivory/70">Fri &amp; Sat:</span>
                          <span className="font-normal text-ivory">
                            5:00 PM – 11:00 PM
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 pb-6">
                    <Phone className="text-gold shrink-0 mt-1" size={20} />
                    <div>
                      <span className="block text-xs uppercase tracking-[0.22em] text-gold font-medium">
                        Phone
                      </span>
                      <a
                        href="tel:+13463876092"
                        className="mt-1 block text-lg font-light text-ivory hover:text-gold transition-colors"
                      >
                        (346) 387-6092
                      </a>
                    </div>
                  </div>
                </div>

                {/* Get Directions Link */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    asChild
                    className="group rounded-none bg-gold px-8 py-6 text-xs font-semibold uppercase tracking-[0.22em] text-espresso hover:bg-ivory transition-colors"
                  >
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Get Directions to Tavolina 44 at Villagio Town Center"
                    >
                      <span>Get Directions to Tavolina 44</span>
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Integrated Dark Google Map */}
              <div className="lg:col-span-7 reveal-on-scroll delay-200">
                <div className="luxury-map-frame aspect-[4/3] w-full sm:aspect-[16/11]">
                  <iframe
                    title="Interactive Google Map to Tavolina 44 at Villagio Town Center"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.4527805151647!2d-95.76331166892572!3d29.735606580394073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864121c924351fc1%3A0xc7f61377e29b99f2!2sTavolina%2044!5e0!3m2!1sen!2sin!4v1788974332540!5m2!1sen!2sin"
                    loading="lazy"
                    allowFullScreen
                    className="h-full w-full border-0"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===================================================================== */}
      {/* 10. CONTACT & DRAMATIC FOOTER — Using Official tavolina44.png Logo    */}
      {/* ===================================================================== */}
      <footer
        id="contact"
        className="scroll-mt-24 relative overflow-hidden bg-ink pt-28 pb-12 lg:pt-36"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 border-b border-ivory/15 pb-16 lg:grid-cols-12">
            {/* Brand Col */}
            <div className="lg:col-span-4">
              <TavolinaLogo
                size="md"
                withBackdrop
                className="origin-left"
                imgClassName="h-12 sm:h-14 w-auto"
              />
              <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-bone/70">
                Italian soul and American spirit converging at Villagio Town
                Center in Katy, Texas. Dedicated to the craft of the table.
              </p>
              <div className="mt-7 text-xs uppercase tracking-[0.24em] text-gold/80 font-medium">
                Villagio Town Center · Suite 180
              </div>

              {/* Prominent Luxury Instagram Card */}
              <div className="mt-8 pt-6 border-t border-ivory/10">
                <p className="eyebrow-tag text-gold text-[0.62rem] mb-3">
                  Connect With Us
                </p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Tavolina 44 on Instagram ${INSTAGRAM_HANDLE}`}
                  className="group relative flex items-center justify-between overflow-hidden rounded-sm border border-gold/30 bg-espresso/70 p-4 transition-all duration-500 hover:border-gold hover:bg-gold/10 hover:shadow-[0_0_30px_rgba(203,167,118,0.2)] focus:outline-none focus:ring-1 focus:ring-gold/60"
                >
                  {/* Shimmer sweep */}
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

                  <div className="relative z-10 flex items-center gap-3.5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-ink text-gold shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:border-gold">
                      <Instagram className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-lg font-light tracking-wide text-ivory transition-colors duration-300 group-hover:text-gold">
                          {INSTAGRAM_HANDLE}
                        </span>
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/60 opacity-75 duration-1000" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                        </span>
                      </div>
                      <p className="text-[0.7rem] uppercase tracking-[0.18em] text-bone/60">
                        Daily Craft · Behind The Hearth
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 text-ivory/60 transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-espresso">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-4 lg:col-start-6">
              <p className="eyebrow-tag text-gold">Navigation</p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm font-light text-bone/80">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className="text-left hover:text-gold transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Direct Contact & Hours */}
            <div className="lg:col-span-3">
              <p className="eyebrow-tag text-gold">
                Direct Contact &amp; Hours
              </p>
              <div className="mt-6 space-y-3 text-sm font-light text-bone/80">
                <p>22756 Westheimer Parkway, Suite 180</p>
                <p>Katy, TX 77450</p>
                <p>
                  <a
                    href="tel:+13463876092"
                    className="text-gold hover:underline font-normal"
                  >
                    (346) 387-6092
                  </a>
                </p>
                <div className="pt-2 text-sm text-ivory/50">
                  <p>Sun – Thu &nbsp;:&nbsp; 5 PM – 10 PM</p>
                  <p>Fri &amp; Sat &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; 5 PM – 11 PM</p>
                </div>

              </div>
            </div>
          </div>

          {/* Monumental Watermark Backdrop */}
          <div className="relative select-none overflow-hidden pt-10 pb-6 text-center">
            <span className="block font-serif text-[clamp(4.5rem,14vw,14rem)] font-light leading-none tracking-tighter text-ivory/[0.04]">
              TAVOLINA 44
            </span>
          </div>

          {/* Bottom Copyright & Verification */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-ivory/10 pt-8 text-[0.68rem] uppercase tracking-[0.22em] text-ivory/40">
            <p>© 2026 Tavolina 44. All rights reserved.</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 sm:mt-0 inline-flex items-center gap-2 text-gold/80 transition-colors duration-300 hover:text-gold hover:underline underline-offset-4"
            >
              <Instagram className="h-3 w-3 text-gold" />
              <span>Follow {INSTAGRAM_HANDLE}</span>
            </a>
            <p className="mt-3 sm:mt-0">
              Villagio Town Center · Katy, Texas · Italian &amp; American Dining
            </p>
          </div>
        </div>
      </footer>

      {/* ===================================================================== */}
      {/* FULLSCREEN LIGHTBOX MODAL                                             */}
      {/* ===================================================================== */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/98 p-4 sm:p-6 backdrop-blur-xl animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute right-6 top-6 sm:right-8 sm:top-8 flex h-12 w-12 items-center justify-center border border-ivory/20 text-ivory hover:border-gold hover:text-gold transition-colors"
            aria-label="Close image lightbox"
          >
            <X size={24} />
          </button>

          <div
            className="relative max-h-[90vh] max-w-5xl overflow-hidden border border-ivory/15 bg-charcoal p-3 sm:p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImg.src}
              alt={lightboxImg.title}
              className="max-h-[75vh] w-auto object-contain mx-auto"
            />
            <div className="p-4 text-center">
              <h3 className="font-serif text-2xl font-light text-ivory">
                {lightboxImg.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-bone/75 font-light">
                {lightboxImg.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
