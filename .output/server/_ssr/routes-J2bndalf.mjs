import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Phone, c as ExternalLink, d as ChevronLeft, f as ArrowUpRight, i as Star, l as Clock, n as Wine, o as MapPin, p as ArrowDown, r as UtensilsCrossed, s as Eye, t as X, u as ChevronRight } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-J2bndalf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
			outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline",
			primary: "border-primary bg-primary text-primary-foreground hover:bg-primary/85"
		},
		size: {
			default: "h-10 px-4 py-2",
			sm: "h-9 px-3",
			lg: "h-11 px-8",
			icon: "h-10 w-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var tavolina44_default = "/assets/tavolina44-DNFwVASZ.png";
function TavolinaLogo({ className = "", imgClassName = "", withBackdrop = false, size = "md" }) {
	const sizeClasses = {
		sm: "h-9 sm:h-10 w-auto",
		md: "h-12 sm:h-14 w-auto",
		lg: "h-20 sm:h-24 md:h-28 w-auto",
		xl: "h-28 sm:h-36 md:h-44 w-auto"
	}[size];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative inline-flex items-center justify-center shrink-0 ${className}`,
		children: [withBackdrop && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute -inset-3 rounded-full bg-radial from-gold/15 via-gold/5 to-transparent blur-md -z-10",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: tavolina44_default,
			alt: "Tavolina 44 — Italian & American Cuisine",
			className: `object-contain transition-transform duration-500 will-change-transform ${sizeClasses} ${imgClassName}`,
			loading: "eager",
			decoding: "async"
		})]
	});
}
var hero_luxury_default = "/assets/hero-luxury-xxLx8ejU.jpg";
var branzino_default = "/assets/branzino-8b4bDtx-.jpg";
var burrata_default = "/assets/burrata-BxYJhu57.jpg";
var dining_room_default = "/assets/dining-room-QmmmjRUV.jpg";
var dining_experience_default = "/assets/dining-experience-BpVKDtCG.jpg";
var cocktail_bar_default = "/assets/cocktail-bar-BFa63126.jpg";
var ingredients_default = "/assets/ingredients-Bg-4H3iW.jpg";
var pizza_default = "/assets/pizza-hF9odjuO.jpg";
var steak_default = "/assets/steak-BBjTSFBb.jpg";
var wine_default = "/assets/wine-DoA5p8A5.jpg";
var DINNER_MENU = [
	{
		category: "Cold Appetizers",
		tagline: "Antipasti Freddi",
		items: [
			{
				name: "Charcuterie & Cheese Board",
				price: "$18 / $27",
				subprice: "$18 for one / $27 for two",
				description: "Prosciutto, hot capicola, house-made sujuk, imported cheeses, fruit, crostini",
				badge: "Chef's Board"
			},
			{
				name: "Beet & Goat Cheese",
				price: "$15",
				description: "Seasonal greens, oranges, basil vinaigrette"
			},
			{
				name: "Arugula & Parmesan",
				price: "$14",
				description: "Arugula, cherry tomatoes, shaved Grana Padano, lemon vinaigrette"
			},
			{
				name: "Little Gem Caesar*",
				price: "$15",
				description: "Herbed croutons, house-made Caesar dressing, olive oil, parmesan (Add grilled chicken +$10)"
			},
			{
				name: "Caprese Burrata",
				price: "$19",
				description: "Fresh burrata, cherry tomatoes, basil, olive oil, balsamic glaze, sea salt, country-style bread",
				badge: "Signature"
			}
		]
	},
	{
		category: "Hot Appetizers",
		tagline: "Antipasti Caldi",
		items: [
			{
				name: "Arancini Albanese",
				price: "$18",
				description: "Crispy risotto balls, house-made sujuk, mozzarella, marinara",
				badge: "House Favorite"
			},
			{
				name: "Fërgese",
				price: "$16",
				description: "Fire-roasted peppers, plum tomatoes, onions, garlic, feta, yogurt, country-style bread"
			},
			{
				name: "Crab Cake",
				price: "$24",
				description: "Blue crab lump, rosemary aioli, potato crisp, balsamic glaze",
				badge: "Prime Lump"
			},
			{
				name: "Roman-Style Meatballs",
				price: "$18",
				description: "Meatballs simmered in tomato sauce, ricotta, Pecorino Romano, country-style bread"
			}
		]
	},
	{
		category: "Pizza",
		tagline: "Hearth-Fired Artisan Pies",
		items: [
			{
				name: "Margherita",
				price: "$19",
				description: "Fresh mozzarella, basil",
				badge: "Classic"
			},
			{
				name: "Artichoke & Pesto",
				price: "$22",
				description: "Artichoke, ricotta, mozzarella, house-made pesto, fresh arugula"
			},
			{
				name: "Sujuk",
				price: "$23",
				description: "House-made sujuk, mozzarella, parmesan, fresh basil (Add goat cheese +$2)",
				badge: "House Specialty"
			},
			{
				name: "Three Cheese",
				price: "$21",
				description: "Goat cheese, Grana Padano, mozzarella, fresh basil"
			},
			{
				name: "Garlic & Mushroom",
				price: "$20",
				description: "Cremini, mushrooms, garlic, mozzarella, Asiago"
			},
			{
				name: "Goat Cheese & Prosciutto",
				price: "$24",
				description: "Mozzarella, goat cheese, prosciutto, fresh arugula, balsamic glaze (Swap goat cheese for burrata +$3)"
			}
		]
	},
	{
		category: "Pasta & Risotto",
		tagline: "All Pastas Are Made In-House",
		items: [
			{
				name: "Dromesat",
				price: "$24",
				description: "Casarecce, hot capicola, tomato sauce, garlic, onions, herbs, Pecorino Romano",
				badge: "Chef's Creation"
			},
			{
				name: "Spaghetti Tavolina 44",
				price: "$25",
				description: "Shrimp, cremini mushrooms, garlic, mascarpone, parmesan",
				badge: "Signature 44"
			},
			{
				name: "Cacio e Pepe",
				price: "$22",
				description: "Linguine, Pecorino Romano, black pepper"
			},
			{
				name: "Pappardelle with Meat Ragù",
				price: "$23",
				description: "Traditional meat ragù, parmesan, basil"
			},
			{
				name: "Fusilli",
				price: "$24",
				description: "Broccolini, house-made sujuk, herbs"
			},
			{
				name: "Herb Risotto",
				price: "$21",
				description: "Parsley, basil, rosemary, oregano"
			},
			{
				name: "Seafood Risotto",
				price: "$27",
				description: "Calamari, shrimp, plum tomatoes, parmesan, herbs",
				badge: "Coastal Catch"
			}
		]
	},
	{
		category: "Main Courses",
		tagline: "Ember-Charred & Prime Secondi",
		items: [
			{
				name: "Tavolina 44 Burger*",
				price: "$21",
				description: "Brioche bun, 8 oz beef patty, goat cheese, arugula, peppers, rosemary aioli, fries"
			},
			{
				name: "Chicken Milanese",
				price: "$24",
				description: "Breaded chicken cutlet, arugula salad"
			},
			{
				name: "Salmon",
				price: "$34",
				description: "Coho salmon, charred baby bok choy"
			},
			{
				name: "Grilled Branzino",
				price: "$32",
				description: "Mediterranean sea bass, broccolini, potatoes, herb oil (Whole Branzino +$8)",
				badge: "Signature Catch"
			},
			{
				name: "Crab Cake & Shrimp",
				price: "$35",
				description: "Blue crab lump meat, scampi-style shrimp, herb risotto"
			},
			{
				name: "Grilled Octopus",
				price: "$37",
				description: "Polenta, fresh herb oil",
				badge: "Hearth Charred"
			},
			{
				name: "Osso Bucco",
				price: "$39",
				description: "Slow-braised beef shank, polenta"
			},
			{
				name: "Steak of the Day*",
				price: "Market Price",
				description: "Fingerling potatoes, gorgonzola sauce"
			},
			{
				name: "Filet Mignon*",
				price: "$45",
				description: "8 oz filet, fingerling potatoes, gorgonzola sauce",
				badge: "Prime Cut"
			}
		]
	},
	{
		category: "Sides",
		tagline: "Contorni",
		items: [
			{
				name: "Sautéed Broccolini",
				price: "$11",
				description: "Garlic, extra virgin olive oil, sea salt"
			},
			{
				name: "Fingerling Potatoes with Herbs",
				price: "$8",
				description: "Roasted with rosemary, thyme, and coarse sea salt"
			},
			{
				name: "Baby Bok Choy",
				price: "$10",
				description: "Charred over open embers with light citrus olive oil"
			}
		]
	}
];
var DRINKS_MENU = [
	{
		category: "Craft Cocktails",
		tagline: "Artisan Mixology & House Aperitivi",
		items: [
			{
				name: "Spritz Cardinale",
				price: "$12",
				description: "Bombay Sapphire Gin, elderflower liqueur, basil, lime juice, prosecco",
				badge: "Signature Spritz"
			},
			{
				name: "Milano Mule",
				price: "$13",
				description: "Ketel One, Aperol, ginger liqueur, ginger beer, lime"
			},
			{
				name: "Fernet Margarita",
				price: "$11",
				description: "Fernet Branca, triple sec, orange juice, lime, simple syrup"
			},
			{
				name: "Paper Plane",
				price: "$13",
				description: "Aviation Gin, Campari, sweet vermouth, lime, simple syrup, bitters"
			},
			{
				name: "Ristretto Martini",
				price: "$13",
				description: "Tito's Vodka, Irish cream, Kahlúa, espresso, chocolate",
				badge: "House Favorite"
			},
			{
				name: "Tropical Storm",
				price: "$12",
				description: "Tequila, Cruzan Mango Rum, passion fruit purée, lime"
			},
			{
				name: "Partini",
				price: "$12",
				description: "Prickly pear vodka, peach purée, triple sec, lime"
			},
			{
				name: "Brooklyn Botanical",
				price: "$14",
				description: "Brooklyn Gin, basil, rosemary, cucumber, lime, tonic"
			},
			{
				name: "Good Old Fashioned",
				price: "$13",
				description: "Bulleit Rye, bergamot tea, brown sugar, star anise, clove, bitters",
				badge: "Classic"
			},
			{
				name: "Via 44",
				price: "$12",
				description: "Pear brandy, triple sec, lemoncello, bitters, prosecco",
				badge: "Tavolina Specialty"
			}
		]
	},
	{
		category: "Wine by the Glass",
		tagline: "Sparkling, Bianco & Rosso",
		items: [
			{
				name: "Poggio Costa Prosecco",
				price: "$10",
				description: "Sparkling · Veneto, Italy"
			},
			{
				name: "Mercat Cava Brut NV",
				price: "$11",
				description: "Sparkling · Penedès, Spain"
			},
			{
				name: "Denny Bini Lambrusco",
				price: "$11",
				description: "Sparkling Red · Emilia-Romagna, Italy"
			},
			{
				name: "Franco Serra Gavi 2025",
				price: "$12",
				description: "White · Piedmont, Italy"
			},
			{
				name: "Frecciarossa Pinot Grigio Pavese 2024",
				price: "$14",
				description: "White · Lombardy, Italy"
			},
			{
				name: "Lunaria Civitas Pecorino 2024",
				price: "$12",
				description: "White · Terre di Abruzzo, Italy"
			},
			{
				name: "Viticcio Vermentino Toscana 2023",
				price: "$13",
				description: "White · Tuscany, Italy"
			},
			{
				name: "Piper Sonoma Chardonnay 2024",
				price: "$15",
				description: "White · Sonoma County, California"
			},
			{
				name: "Patch Montepulciano d'Abruzzo",
				price: "$11",
				description: "Red · Abruzzo, Italy"
			},
			{
				name: "No Curfew Pinot Noir 2023",
				price: "$12",
				description: "Red · California"
			},
			{
				name: "Casa Emma Chianti Classico",
				price: "$14",
				description: "Red · Tuscany, Italy"
			},
			{
				name: "Oberon Cabernet Sauvignon 2023",
				price: "$15",
				description: "Red · Napa Valley, California"
			},
			{
				name: "Il Borro Borrigiano Toscana",
				price: "$14",
				description: "Red · Tuscany, Italy"
			}
		]
	},
	{
		category: "Draft & Bottled Beer",
		tagline: "Local Texas Craft & European Favorites",
		items: [
			{
				name: "Altstadt Hefeweizen (5.2%)",
				price: "$7",
				description: "Draft · Fredericksburg, TX"
			},
			{
				name: "Superbloom IPA (6.5%)",
				price: "$7",
				description: "Draft · Houston, TX"
			},
			{
				name: "Frost Bier Kölsch (5.0%)",
				price: "$7",
				description: "Draft · Houston, TX"
			},
			{
				name: "Stella Artois (5.0%)",
				price: "$7",
				description: "Draft · Belgium"
			},
			{
				name: "Warsteiner Pilsner (5.0%)",
				price: "$7",
				description: "Draft · Germany"
			},
			{
				name: "Michelob Ultra (4.2%)",
				price: "$7",
				description: "Draft · St. Louis, MO"
			},
			{
				name: "Bottled Beers",
				price: "Selection",
				description: "Peroni, Moretti, Bud Light, Modelo, Lagunitas IPA, Blue Moon, Yuengling"
			}
		]
	}
];
var SIGNATURE_PLATES = [
	{
		index: "01",
		title: "Spaghetti Tavolina 44",
		subtitle: "Pasta Fatta in Casa",
		category: "Pasta & Risotto",
		description: "House-extruded pasta tossed with succulent tender shrimp, earthy cremini mushrooms, aromatic garlic, and rich whipped mascarpone finished with aged parmesan.",
		price: "$25",
		image: hero_luxury_default,
		note: "All pastas extruded fresh daily in our kitchen"
	},
	{
		index: "02",
		title: "Grilled Branzino",
		subtitle: "Secondi di Pesce",
		category: "Main Courses",
		description: "Mediterranean sea bass crisped over white oak hearth embers, accompanied by charred tender broccolini, roasted fingerling potatoes, and fragrant rosemary herb oil.",
		price: "$32",
		image: branzino_default,
		note: "Whole Branzino available tableside (+$8)"
	},
	{
		index: "03",
		title: "Caprese Burrata",
		subtitle: "Antipasti Freddi",
		category: "Cold Appetizers",
		description: "Lush sweet burrata paired with ripe cherry tomatoes, fragrant garden basil, cold-pressed olive oil, 25-year balsamic glaze, sea salt flakes, and wood-toasted country bread.",
		price: "$19",
		image: burrata_default,
		note: "Crafted with artisanal Puglia burrata"
	},
	{
		index: "04",
		title: "Filet Mignon*",
		subtitle: "Secondi dal Fuoco",
		category: "Main Courses",
		description: "8 oz center-cut tenderloin seared to a smoky caramelized crust over Texas live embers, served alongside herbed fingerling potatoes and a rich silken gorgonzola reduction.",
		price: "$45",
		image: steak_default,
		note: "Prime beef paired with rich gorgonzola sauce"
	},
	{
		index: "05",
		title: "Arancini Albanese",
		subtitle: "Antipasti Caldi",
		category: "Hot Appetizers",
		description: "Golden crispy risotto croquettes infused with house-made savory sujuk and molten mozzarella, resting on slow-simmered San Marzano marinara.",
		price: "$18",
		image: pizza_default,
		note: "House-made specialty recipe"
	}
];
var VERIFIED_REVIEWS = [
	{
		quote: "Tavolina 44 is such a breath of fresh air for Katy. The dining room is upscale yet remarkably warm and welcoming. Every detail—from the candlelight to the attentiveness of the team—made our evening special.",
		diner: "Verified Diner",
		source: "Google Business Review",
		rating: 5,
		highlight: "Warm hospitality & intimate atmosphere",
		photo: dining_experience_default
	},
	{
		quote: "The handmade pasta here is extraordinary. The texture holds beautifully and the richness of the sauces is balanced and authentic. You can immediately tell the kitchen uses high-caliber ingredients.",
		diner: "Verified Diner",
		source: "Google Business Review",
		rating: 5,
		highlight: "House-crafted pasta & refined flavors",
		photo: hero_luxury_default
	},
	{
		quote: "A stunning Italian-American experience at Villagio Town Center. The bar is sophisticated with superb cocktails, the service is genuinely friendly, and the atmosphere makes you want to linger.",
		diner: "Verified Diner",
		source: "Google Business Review",
		rating: 5,
		highlight: "Atmospheric bar & curated libations",
		photo: cocktail_bar_default
	}
];
var GALLERY_IMAGES = [
	{
		src: hero_luxury_default,
		title: "Fresh Ribbon Pasta",
		caption: "House-extruded pasta tossed in velvety sauce with fresh basil",
		span: "col-span-12 md:col-span-7 aspect-[16/10]"
	},
	{
		src: dining_room_default,
		title: "The Dining Room",
		caption: "Atmospheric evening dining at Villagio Town Center",
		span: "col-span-12 md:col-span-5 aspect-[4/3]"
	},
	{
		src: cocktail_bar_default,
		title: "The Bar at Tavolina 44",
		caption: "Polished dark marble, amber backlighting, and craft cocktails",
		span: "col-span-12 md:col-span-6 aspect-[16/10]"
	},
	{
		src: dining_experience_default,
		title: "Table Conviviality",
		caption: "Vintage decanter wine service and shared plates with friends",
		span: "col-span-12 md:col-span-6 aspect-[16/10]"
	},
	{
		src: branzino_default,
		title: "Herb-Grilled Branzino",
		caption: "Oak-fired whole sea bass with roasted lemon and herb oil",
		span: "col-span-12 md:col-span-4 aspect-[4/5]"
	},
	{
		src: wine_default,
		title: "Cellar & Libations",
		caption: "Curated Italian reds and contemporary craft cocktails",
		span: "col-span-12 md:col-span-4 aspect-[4/5]"
	},
	{
		src: burrata_default,
		title: "Caprese Burrata",
		caption: "Fresh burrata, cherry tomatoes, and aged balsamic glaze",
		span: "col-span-12 md:col-span-4 aspect-[4/5]"
	},
	{
		src: steak_default,
		title: "Prime Filet Mignon",
		caption: "Charred over open embers with gorgonzola potatoes",
		span: "col-span-12 md:col-span-6 aspect-[16/10]"
	},
	{
		src: pizza_default,
		title: "Hearth-Fired Pizza",
		caption: "Blistered San Marzano crust with fresh fior di latte",
		span: "col-span-12 md:col-span-6 aspect-[16/10]"
	}
];
var GOOGLE_MAPS_URL = "https://maps.app.goo.gl/Rg1dKN1i4kSxwqRL9";
function Index() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [activeMenuType, setActiveMenuType] = (0, import_react.useState)("dinner");
	const [activeDinnerCategory, setActiveDinnerCategory] = (0, import_react.useState)("All");
	const [activeDuality, setActiveDuality] = (0, import_react.useState)("both");
	const [lightboxImg, setLightboxImg] = (0, import_react.useState)(null);
	const [currentReviewIdx, setCurrentReviewIdx] = (0, import_react.useState)(0);
	const sculptureRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 40);
		};
		const handleMouseMove = (e) => {
			if (sculptureRef.current) {
				const rect = sculptureRef.current.getBoundingClientRect();
				const centerX = rect.left + rect.width / 2;
				const centerY = rect.top + rect.height / 2;
				const rotateX = (e.clientY - centerY) / window.innerHeight * -22;
				const rotateY = (e.clientX - centerX) / window.innerWidth * 26;
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
	(0, import_react.useEffect)(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) entry.target.classList.add("is-visible");
			});
		}, {
			threshold: .12,
			rootMargin: "0px 0px -40px 0px"
		});
		const revealElements = document.querySelectorAll(".reveal-on-scroll");
		revealElements.forEach((el) => observer.observe(el));
		return () => {
			revealElements.forEach((el) => observer.unobserve(el));
			observer.disconnect();
		};
	}, [activeMenuType, activeDinnerCategory]);
	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) element.scrollIntoView({ behavior: "smooth" });
		setMobileOpen(false);
	};
	const navItems = [
		{
			label: "Our Story",
			id: "our-story"
		},
		{
			label: "Menu",
			id: "menu"
		},
		{
			label: "Gallery",
			id: "gallery"
		},
		{
			label: "Location",
			id: "location"
		},
		{
			label: "Contact",
			id: "contact"
		}
	];
	const filteredDinnerMenu = activeDinnerCategory === "All" ? DINNER_MENU : DINNER_MENU.filter((group) => group.category === activeDinnerCategory);
	const activeReview = VERIFIED_REVIEWS[currentReviewIdx] ?? VERIFIED_REVIEWS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-espresso text-ivory selection:bg-gold/30 selection:text-ivory overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none fixed inset-0 z-50 opacity-[0.04] mix-blend-screen",
				style: { backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "nav-blur py-3.5" : "bg-gradient-to-b from-espresso/90 via-espresso/40 to-transparent py-5 lg:py-6"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#home",
							onClick: (e) => {
								e.preventDefault();
								scrollToSection("home");
							},
							className: "group inline-flex items-center focus:outline-none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TavolinaLogo, {
								size: "sm",
								className: "transition-opacity duration-300 group-hover:opacity-85",
								imgClassName: "h-10 sm:h-11 md:h-12 w-auto"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-8 md:flex lg:gap-10 xl:gap-12",
							"aria-label": "Main Navigation",
							children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => scrollToSection(item.id),
								className: "group relative py-1 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-ivory/70 transition-colors duration-300 hover:text-ivory",
								children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-0.5 left-0 h-[1px] w-0 bg-gold transition-all duration-300 ease-out group-hover:w-full" })]
							}, item.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setMobileOpen(!mobileOpen),
							className: "relative flex h-11 w-11 flex-col items-center justify-center gap-1.5 text-ivory md:hidden focus:outline-none hover:text-gold transition-colors",
							"aria-label": mobileOpen ? "Close navigation menu" : "Open navigation menu",
							"aria-expanded": mobileOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-[1px] w-6 bg-current transition-all duration-300 ease-out ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-[1px] w-6 bg-current transition-all duration-300 ease-out ${mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""}` })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `fixed inset-x-0 top-0 z-[-1] flex min-h-screen flex-col justify-between bg-espresso/98 px-8 pb-12 pt-28 backdrop-blur-2xl transition-all duration-500 md:hidden ${mobileOpen ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-4"}`,
					"aria-hidden": !mobileOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-col space-y-5",
						children: navItems.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => scrollToSection(item.id),
							className: "group flex items-baseline justify-between border-b border-ivory/10 pb-3 text-left font-serif text-3xl font-light text-ivory transition-colors hover:text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "transition-transform duration-300 group-hover:translate-x-1",
								children: item.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-sans text-xs tracking-widest text-gold/50",
								children: ["0", idx + 1]
							})]
						}, item.id))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-ivory/10 pt-8 text-xs text-bone/60 space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans tracking-[0.24em] uppercase text-gold font-medium",
								children: "Villagio Town Center · Suite 180"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "22756 Westheimer Parkway · Katy, TX 77450" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-ivory/80",
								children: "(346) 387-6092"
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "home",
					className: "relative flex min-h-[100svh] w-full items-end justify-center overflow-hidden pb-16 pt-32 lg:pb-24 lg:pt-36",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 z-0 overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_luxury_default,
								alt: "Artisan handmade pasta ribbons tossed in rich sauce in dark restaurant lighting",
								className: "h-full w-full object-cover object-center brightness-[0.70] contrast-[1.08] anim-hero-bg anim-hero-drift"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-espresso via-espresso/55 to-espresso/35" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 hero-vignette" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-10 lg:grid-cols-12 lg:items-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "anim-hero-eyebrow flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[1px] w-8 bg-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "eyebrow-tag text-gold",
											children: "Italian & American Cuisine · Katy, Texas"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "mt-5 font-serif text-[clamp(3.5rem,8.5vw,7.8rem)] font-light leading-[0.9] tracking-tight text-ivory",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block anim-hero-h1-1",
											children: "Italian Soul."
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block anim-hero-h1-2 mt-1",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
												className: "font-serif italic font-normal text-gold/95",
												children: "American Spirit."
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "anim-hero-desc mt-7 max-w-xl text-base font-light leading-relaxed text-bone/85 sm:text-lg",
										children: "An elevated culinary sanctuary at Villagio Town Center. Where daily hand-rolled pastas, ember-charred prime cuts, and genuine Texas hospitality converge around a shared table."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "anim-hero-cta mt-9 flex flex-wrap items-center gap-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											onClick: () => scrollToSection("menu"),
											className: "group relative overflow-hidden rounded-none bg-gold px-8 py-6 text-xs font-semibold uppercase tracking-[0.24em] text-espresso transition-all duration-500 hover:bg-ivory hover:shadow-[0_0_35px_rgba(203,167,118,0.35)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "relative z-10 flex items-center gap-3",
												children: ["Explore Menu", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
													size: 15,
													className: "transition-transform duration-300 group-hover:translate-y-1"
												})]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "hidden sm:flex items-center gap-2.5 text-xs tracking-widest uppercase text-ivory/60",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Dinner Service 5:00 PM Tonight" })]
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "anim-hero-meta hidden lg:col-span-4 lg:flex lg:flex-col lg:items-end",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-l border-gold/40 pl-6 text-right",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-serif text-3xl font-light text-gold/95",
											children: "Villagio"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-xs uppercase tracking-[0.24em] text-ivory/70 mt-1",
											children: "Town Center · Katy, TX"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-xs leading-relaxed text-bone/60 max-w-[15rem]",
											children: "Wood-fired hearth, daily extruded pasta, and an extensive reserve wine list."
										})
									]
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-14 flex items-center justify-between border-t border-ivory/10 pt-5 text-[0.65rem] uppercase tracking-[0.24em] text-ivory/45",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Scroll to Begin Experience" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "EST. 2026 · KATY, TEXAS" })]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "our-story",
					className: "relative bg-charcoal py-28 lg:py-36 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-7xl px-6 lg:px-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-16 lg:grid-cols-12 lg:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-7 reveal-on-scroll",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow-tag text-gold",
										children: "01 · Our Philosophy"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "mt-5 font-serif text-[clamp(2.6rem,5.5vw,5rem)] font-light leading-[0.95] tracking-tight text-ivory",
										children: [
											"Italian tradition.",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
												className: "italic text-gold font-normal",
												children: "American character."
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 space-y-6 text-base font-light leading-relaxed text-bone/85 sm:text-lg",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tavolina 44 was born from a desire to strip away cliché and honor the true essence of dining: the gathering of people around food cooked with patience, fire, and purpose." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Here in Katy, we unite two culinary legacies. The Italian reverence for pure ingredients, slow-simmered sauces, and house-made pasta meets the American devotion to prime oak-charred steaks, vibrant convivial energy, and hospitality that makes every guest feel like family." })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-10 grid grid-cols-2 gap-8 border-t border-ivory/10 pt-8 sm:grid-cols-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block font-serif text-3xl text-gold font-light",
												children: "Hearth"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[0.68rem] uppercase tracking-[0.2em] text-ivory/60",
												children: "Live Oak Wood Fire"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block font-serif text-3xl text-gold font-light",
												children: "Fatto a Mano"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[0.68rem] uppercase tracking-[0.2em] text-ivory/60",
												children: "Daily Fresh Pasta"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block font-serif text-3xl text-gold font-light",
												children: "Cantina"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[0.68rem] uppercase tracking-[0.2em] text-ivory/60",
												children: "Estate Wine Pairings"
											})] })
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative lg:col-span-5 reveal-on-scroll delay-200",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "editorial-img-container shadow-2xl border border-ivory/10 aspect-[4/5] w-full",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: dining_room_default,
											alt: "Atmospheric dining room and warm candlelight at Tavolina 44",
											className: "editorial-img h-full w-full object-cover brightness-95",
											loading: "lazy"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-espresso/85 via-transparent to-transparent" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute bottom-6 left-6 right-6",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "eyebrow-tag text-gold",
												children: "Villagio Town Center"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 font-serif text-xl text-ivory font-light",
												children: "Intimacy & Architecture"
											})]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute -bottom-6 -left-6 hidden border border-gold/30 bg-espresso/95 p-5 shadow-2xl backdrop-blur-md sm:block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-serif text-2xl text-gold font-light",
										children: "44"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[0.6rem] uppercase tracking-widest text-ivory/70",
										children: "A Table for Everyone"
									})]
								})]
							})]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "identity",
					className: "relative overflow-hidden bg-espresso py-28 lg:py-36",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-6 lg:px-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mb-20 overflow-hidden border border-ivory/10 shadow-2xl reveal-on-scroll",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-[21/9] w-full max-h-[340px] overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: ingredients_default,
										alt: "Raw artisanal San Marzano tomatoes, cold pressed olive oil and fresh rosemary",
										className: "h-full w-full object-cover brightness-[0.85] contrast-[1.05]",
										loading: "lazy"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 bg-gradient-to-r from-espresso/95 via-espresso/50 to-transparent flex items-center p-8 sm:p-14",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "max-w-md",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "eyebrow-tag text-gold",
												children: "Purity of Ingredients"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-serif text-2xl sm:text-3xl text-ivory mt-2 font-light",
												children: "The Art of Simplicity"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs sm:text-sm text-bone/80 font-light mt-2 leading-relaxed",
												children: "Imported cold-pressed Puglia olive oils, flour milled for morning pasta, and aromatic rosemary cut fresh for ember roasting."
											})
										]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center reveal-on-scroll",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow-tag text-gold",
										children: "02 · The Convergence"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "mt-4 font-serif text-[clamp(2.4rem,5vw,4.5rem)] font-light text-ivory",
										children: [
											"Two Culinary Identities.",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
												className: "italic text-gold font-normal",
												children: "One Table."
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-bone/70",
										children: "Explore the dual forces that define our kitchen. Toggle between them or experience their unified balance in our dining room."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 inline-flex border border-ivory/15 bg-charcoal/60 p-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setActiveDuality("both"),
												className: `px-5 py-2 text-[0.68rem] uppercase tracking-[0.22em] transition-all ${activeDuality === "both" ? "bg-gold text-espresso font-semibold" : "text-ivory/60 hover:text-ivory"}`,
												children: "Convergence"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setActiveDuality("italian"),
												className: `px-5 py-2 text-[0.68rem] uppercase tracking-[0.22em] transition-all ${activeDuality === "italian" ? "bg-wine text-ivory font-semibold" : "text-ivory/60 hover:text-ivory"}`,
												children: "Italian Soul"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setActiveDuality("american"),
												className: `px-5 py-2 text-[0.68rem] uppercase tracking-[0.22em] transition-all ${activeDuality === "american" ? "bg-terracotta text-ivory font-semibold" : "text-ivory/60 hover:text-ivory"}`,
												children: "American Spirit"
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-16 grid items-center gap-12 lg:grid-cols-12",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `transition-all duration-700 lg:col-span-4 ${activeDuality === "american" ? "opacity-30 blur-[1px]" : "opacity-100"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border-t border-gold/30 pt-6",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-serif text-[clamp(3.2rem,6vw,5.5rem)] font-light leading-none tracking-tight text-ivory block",
													children: "ITALIAN"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mt-2 block eyebrow-tag text-gold",
													children: "Puglia · Emilia-Romagna · Campania"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-4 text-sm font-light leading-relaxed text-bone/80",
													children: "A profound respect for seasonality, simplicity, and patience. Morning-kneaded dough, San Marzano tomatoes, whole cold-water Branzino, and velvety burrata."
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
													className: "mt-6 space-y-2 text-xs tracking-wider uppercase text-ivory/70",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
															className: "flex items-center gap-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 bg-gold rounded-full" }), "Hand-Crafted Pasta Shapes"]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
															className: "flex items-center gap-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 bg-gold rounded-full" }), "Aged Balsamico di Modena"]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
															className: "flex items-center gap-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 bg-gold rounded-full" }), "Crispy Arancini Albanese"]
														})
													]
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-col items-center justify-center lg:col-span-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "sculpture-wrapper flex flex-col items-center justify-center py-6",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													ref: sculptureRef,
													className: "sculpture-glyph sculpture-glow select-none cursor-grab active:cursor-grabbing text-center",
													title: "Interactive 3D 44 Emblem — Move cursor to inspect perspective",
													children: "44"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mt-2 text-[0.62rem] uppercase tracking-[0.3em] text-gold/80",
													children: "Sculptural Artisan Bronze"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mt-1 font-serif text-sm italic text-ivory/40",
													children: "Tavolina 44 · Katy, Texas"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `transition-all duration-700 lg:col-span-4 ${activeDuality === "italian" ? "opacity-30 blur-[1px]" : "opacity-100"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border-t border-terracotta/40 pt-6 text-left lg:text-right",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-serif text-[clamp(3.2rem,6vw,5.5rem)] font-light leading-none tracking-tight text-terracotta block",
													children: "AMERICAN"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mt-2 block eyebrow-tag text-gold lg:text-right",
													children: "Texas Ember & Modern Energy"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-4 text-sm font-light leading-relaxed text-bone/80",
													children: "The vibrancy of modern American dining. Prime aged Filet Mignon charred over red-hot oak, bold craft cocktail mixology, and unstuffy, heartfelt hospitality."
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
													className: "mt-6 space-y-2 text-xs tracking-wider uppercase text-ivory/70 lg:items-end",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
															className: "flex items-center gap-2 lg:justify-end",
															children: ["Prime Oak-Charred Steaks", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 bg-terracotta rounded-full" })]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
															className: "flex items-center gap-2 lg:justify-end",
															children: ["Jumbo Lump Blue Crab Cakes", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 bg-terracotta rounded-full" })]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
															className: "flex items-center gap-2 lg:justify-end",
															children: ["Contemporary Katy Gathering", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 bg-terracotta rounded-full" })]
														})
													]
												})
											]
										})
									})
								]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "atmosphere",
					className: "relative overflow-hidden bg-charcoal py-28 lg:py-36",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-7xl px-6 lg:px-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-16 lg:grid-cols-12 lg:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-5 reveal-on-scroll",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow-tag text-gold",
										children: "03 · Ambience & Hospitality"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "mt-4 font-serif text-[clamp(2.6rem,5vw,4.8rem)] font-light leading-[0.95] text-ivory",
										children: [
											"Candlelight, conversation, &",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
												className: "italic text-gold font-normal",
												children: "hearth."
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 space-y-5 text-sm sm:text-base font-light leading-relaxed text-bone/80",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Step through our doors at Villagio Town Center into a space designed for lingering. The dining room glows in amber candlelight, textured stone, and deep leather banquettes." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "From the rhythmic clinking of glassware at our marble cocktail bar to the aroma of oak-fire and roasted garlic rising from the kitchen, every element is curated to make time slow down." })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-10 border-l border-gold/40 pl-6 text-xs text-ivory/70 space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-serif text-lg text-gold italic",
											children: "\"An intimate sanctuary where dinner becomes an evening to remember.\""
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "uppercase tracking-[0.2em] text-[0.62rem] text-ivory/50",
											children: "Villagio Town Center · Katy, Texas"
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-5 lg:col-span-7 reveal-on-scroll delay-200",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "editorial-img-container border border-ivory/10 shadow-2xl cursor-pointer",
									onClick: () => setLightboxImg({
										src: cocktail_bar_default,
										title: "The Bar at Tavolina 44",
										caption: "Handcrafted cocktails and Italian aperitivi in an amber-lit setting."
									}),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: cocktail_bar_default,
											alt: "Polished dark marble bar with cocktail glass and amber glowing bottles",
											className: "editorial-img aspect-[3/4] w-full object-cover brightness-95",
											loading: "lazy"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-80" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute bottom-4 left-4 right-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "eyebrow-tag text-gold text-[0.58rem]",
												children: "The Bar"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-serif text-lg text-ivory leading-tight mt-1 font-light",
												children: "Artisan Spirits"
											})]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "editorial-img-container border border-ivory/10 shadow-2xl mt-8 cursor-pointer",
									onClick: () => setLightboxImg({
										src: dining_experience_default,
										title: "Table Conviviality",
										caption: "Shared bottles, rustic bread, and memories created over the table."
									}),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: dining_experience_default,
											alt: "Convivial table dinner with red wine decanter and sharing plates",
											className: "editorial-img aspect-[3/4] w-full object-cover brightness-95",
											loading: "lazy"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-80" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute bottom-4 left-4 right-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "eyebrow-tag text-gold text-[0.58rem]",
												children: "The Table"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-serif text-lg text-ivory leading-tight mt-1 font-light",
												children: "Wine & Conviviality"
											})]
										})
									]
								})]
							})]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "reviews",
					className: "relative bg-espresso py-28 lg:py-36 overflow-hidden border-y border-ivory/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-6 lg:px-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col md:flex-row md:items-end justify-between border-b border-ivory/15 pb-8 reveal-on-scroll",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow-tag text-gold",
								children: "04 · Guest Experiences"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-4 font-serif text-[clamp(2.6rem,5.5vw,5rem)] font-light leading-none text-ivory",
								children: [
									"At the",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "italic text-gold font-normal",
										children: "Table."
									})
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 md:mt-0 flex items-center gap-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: GOOGLE_MAPS_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold hover:text-ivory transition-colors border-b border-gold/40 pb-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Read all reviews on Google" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 13 })]
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-14 grid items-center gap-12 lg:grid-cols-12 reveal-on-scroll delay-200",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lg:col-span-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "editorial-img-container relative border border-ivory/15 shadow-2xl aspect-[16/11] overflow-hidden cursor-pointer",
									onClick: () => setLightboxImg({
										src: activeReview.photo,
										title: activeReview.highlight,
										caption: activeReview.quote
									}),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: activeReview.photo,
											alt: activeReview.highlight,
											className: "editorial-img h-full w-full object-cover brightness-[0.92]"
										}, activeReview.photo),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-espresso/85 via-transparent to-transparent" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute bottom-6 left-6 right-6",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[0.62rem] uppercase tracking-[0.25em] text-gold/90 bg-espresso/90 px-3 py-1.5 border border-gold/20",
												children: activeReview.highlight
											})
										})
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-6 lg:pl-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5 text-gold",
										children: [[...Array(activeReview.rating)].map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
											size: 18,
											fill: "currentColor"
										}, idx)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-3 text-xs uppercase tracking-[0.2em] text-ivory/60 font-sans",
											children: "5.0 Star Rating"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
										className: "mt-7 font-serif text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed text-ivory",
										children: [
											"\"",
											activeReview.quote,
											"\""
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 flex items-center justify-between border-t border-ivory/15 pt-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-serif text-xl font-normal text-gold",
											children: activeReview.diner
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs uppercase tracking-[0.22em] text-ivory/50",
											children: [activeReview.source, " · Villagio Town Center"]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setCurrentReviewIdx((prev) => (prev - 1 + VERIFIED_REVIEWS.length) % VERIFIED_REVIEWS.length),
												className: "flex h-11 w-11 items-center justify-center border border-ivory/20 text-ivory hover:border-gold hover:text-gold transition-colors",
												"aria-label": "Previous Review",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 18 })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setCurrentReviewIdx((prev) => (prev + 1) % VERIFIED_REVIEWS.length),
												className: "flex h-11 w-11 items-center justify-center border border-ivory/20 text-ivory hover:border-gold hover:text-gold transition-colors",
												"aria-label": "Next Review",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 18 })
											})]
										})]
									})
								]
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "plates",
					className: "relative bg-charcoal py-28 lg:py-36",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-6 lg:px-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col md:flex-row md:items-end justify-between border-b border-ivory/15 pb-8 reveal-on-scroll",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow-tag text-gold",
								children: "05 · Culinary Highlights"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-4 font-serif text-[clamp(2.6rem,5.5vw,5rem)] font-light leading-[0.95] text-ivory",
								children: [
									"Plates with",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "italic text-gold font-normal",
										children: "presence."
									})
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xs text-xs uppercase tracking-[0.2em] text-ivory/50 md:mt-0 md:text-right",
								children: "Verified signature dishes from our official dinner menu cards."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-20 space-y-28 lg:space-y-36",
							children: SIGNATURE_PLATES.map((dish, i) => {
								const isEven = i % 2 === 1;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "grid items-center gap-12 lg:grid-cols-12 reveal-on-scroll",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "editorial-img-container relative border border-ivory/10 shadow-2xl group cursor-pointer",
											onClick: () => setLightboxImg({
												src: dish.image,
												title: dish.title,
												caption: dish.description
											}),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: dish.image,
													alt: dish.title,
													className: "editorial-img aspect-[16/11] w-full object-cover brightness-[0.95]",
													loading: "lazy"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "absolute bottom-5 left-5 hidden sm:block",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[0.62rem] uppercase tracking-[0.25em] text-gold/90 bg-espresso/85 px-3 py-1.5 border border-gold/20",
														children: dish.note
													})
												})
											]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-baseline justify-between border-b border-ivory/10 pb-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-serif text-5xl font-light text-gold/50",
													children: dish.index
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs uppercase tracking-[0.22em] text-gold",
													children: dish.category
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-5 block text-xs uppercase tracking-[0.24em] text-ivory/50",
												children: dish.subtitle
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-ivory",
												children: dish.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-5 text-sm sm:text-base font-light leading-relaxed text-bone/85",
												children: dish.description
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-8 flex items-center justify-between border-t border-ivory/10 pt-6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-serif text-3xl font-normal text-gold",
													children: dish.price
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													onClick: () => {
														setActiveMenuType("dinner");
														setActiveDinnerCategory(dish.category);
														scrollToSection("menu");
													},
													className: "group flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-ivory/70 hover:text-gold transition-colors",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View on Menu" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
														size: 14,
														className: "transition-transform group-hover:translate-x-1 text-gold"
													})]
												})]
											})
										]
									})]
								}, dish.title);
							})
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "menu",
					className: "relative bg-espresso py-28 lg:py-36",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-6 lg:px-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center reveal-on-scroll",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow-tag text-gold",
										children: "06 · Official Menu"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "mt-4 font-serif text-[clamp(2.8rem,5.5vw,5rem)] font-light leading-none text-ivory",
										children: [
											"The Curated",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
												className: "italic text-gold font-normal",
												children: "Collection"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-4 max-w-lg text-sm font-light text-bone/70",
										children: "Verified dinner and drinks selection at Villagio Town Center. All pastas extruded fresh in-house. Prime meats charred over live white oak coals."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 inline-flex border border-gold/30 bg-charcoal/80 p-1.5 shadow-lg",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setActiveMenuType("dinner"),
											className: `flex items-center gap-2.5 px-6 py-2.5 text-xs uppercase tracking-[0.22em] transition-all duration-300 ${activeMenuType === "dinner" ? "bg-gold text-espresso font-semibold" : "text-ivory/70 hover:text-ivory"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UtensilsCrossed, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Dinner Menu" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setActiveMenuType("drinks"),
											className: `flex items-center gap-2.5 px-6 py-2.5 text-xs uppercase tracking-[0.22em] transition-all duration-300 ${activeMenuType === "drinks" ? "bg-gold text-espresso font-semibold" : "text-ivory/70 hover:text-ivory"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wine, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Drinks & Cellar" })]
										})]
									}),
									activeMenuType === "dinner" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 flex flex-wrap justify-center gap-2 sm:gap-2.5",
										children: [
											"All",
											"Cold Appetizers",
											"Hot Appetizers",
											"Pizza",
											"Pasta & Risotto",
											"Main Courses",
											"Sides"
										].map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setActiveDinnerCategory(cat),
											className: `px-4 py-1.5 text-[0.68rem] uppercase tracking-[0.2em] transition-all duration-200 border ${activeDinnerCategory === cat ? "border-gold bg-gold/20 text-gold font-medium" : "border-ivory/15 bg-charcoal/30 text-ivory/60 hover:border-gold/40 hover:text-ivory"}`,
											children: cat
										}, cat))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 flex justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setLightboxImg({
												src: activeMenuType === "dinner" ? "/menu-card-1.jpg" : "/menu-card-2.jpg",
												title: activeMenuType === "dinner" ? "Official Tavolina 44 Dinner Menu Card" : "Official Tavolina 44 Drinks & Cellar Menu Card",
												caption: "Authentic scanned printed menu card from Tavolina 44 at Villagio Town Center."
											}),
											className: "inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.22em] text-gold/80 hover:text-gold border-b border-gold/30 pb-0.5 transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 13 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												"View Original Physical Menu Card (",
												activeMenuType === "dinner" ? "Dinner" : "Drinks",
												")"
											] })]
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-14 space-y-16",
								children: activeMenuType === "dinner" ? filteredDinnerMenu.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border border-ivory/10 bg-charcoal/45 p-7 sm:p-11 backdrop-blur-sm shadow-xl reveal-on-scroll",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col sm:flex-row sm:items-end justify-between border-b border-gold/30 pb-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "eyebrow-tag text-gold/90",
											children: group.tagline
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-1 font-serif text-3xl sm:text-4xl font-light text-ivory",
											children: group.category
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-2 sm:mt-0 text-[0.65rem] uppercase tracking-[0.25em] text-ivory/50 font-sans",
											children: "Tavolina 44 Verified"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-8 divide-y divide-ivory/10",
										children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "group py-5 first:pt-0 last:pb-0 transition-colors hover:bg-ivory/[0.02]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-baseline justify-between gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-wrap items-center gap-2.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "font-serif text-xl sm:text-2xl font-light text-ivory group-hover:text-gold transition-colors",
														children: item.name
													}), item.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "border border-gold/30 bg-wine/30 px-2 py-0.5 text-[0.58rem] uppercase tracking-widest text-gold font-medium",
														children: item.badge
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-sans text-lg font-light text-gold shrink-0 tabular-nums",
													children: item.price
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1.5 max-w-2xl text-xs sm:text-sm font-light text-bone/75 leading-relaxed",
												children: item.description
											})]
										}, item.name))
									})]
								}, group.category)) : DRINKS_MENU.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border border-ivory/10 bg-charcoal/45 p-7 sm:p-11 backdrop-blur-sm shadow-xl reveal-on-scroll",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col sm:flex-row sm:items-end justify-between border-b border-gold/30 pb-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "eyebrow-tag text-gold/90",
											children: group.tagline
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-1 font-serif text-3xl sm:text-4xl font-light text-ivory",
											children: group.category
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-2 sm:mt-0 text-[0.65rem] uppercase tracking-[0.25em] text-ivory/50 font-sans",
											children: "Cellar & Bar"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-8 divide-y divide-ivory/10",
										children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "group py-5 first:pt-0 last:pb-0 transition-colors hover:bg-ivory/[0.02]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-baseline justify-between gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-wrap items-center gap-2.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "font-serif text-xl sm:text-2xl font-light text-ivory group-hover:text-gold transition-colors",
														children: item.name
													}), item.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "border border-gold/30 bg-wine/30 px-2 py-0.5 text-[0.58rem] uppercase tracking-widest text-gold font-medium",
														children: item.badge
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-sans text-lg font-light text-gold shrink-0 tabular-nums",
													children: item.price
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1.5 max-w-2xl text-xs sm:text-sm font-light text-bone/75 leading-relaxed",
												children: item.description
											})]
										}, item.name))
									})]
								}, group.category))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-14 border-t border-ivory/10 pt-7 text-center space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs tracking-wider text-ivory/60 font-light",
										children: "* Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs tracking-wider text-ivory/60 font-light",
										children: "* Please inform your server of any food allergies before placing your order."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[0.68rem] uppercase tracking-[0.24em] text-gold/80 pt-2 font-medium",
										children: "Reserve Bottle List & Sommelier Pairings Available Upon Request"
									})
								]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "gallery",
					className: "relative bg-charcoal py-28 lg:py-36",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-6 lg:px-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col md:flex-row md:items-end justify-between border-b border-ivory/15 pb-8 reveal-on-scroll",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow-tag text-gold",
								children: "07 · Visual Archive"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-4 font-serif text-[clamp(2.6rem,5.5vw,5rem)] font-light leading-none text-ivory",
								children: ["At the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "italic text-gold font-normal",
									children: "Table"
								})]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-4 text-xs uppercase tracking-[0.24em] text-ivory/50 md:mt-0 font-sans",
								children: "Click any photograph to view high-resolution detail"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-14 grid grid-cols-12 gap-5 reveal-on-scroll delay-200",
							children: GALLERY_IMAGES.map((img) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `${img.span} editorial-img-container group relative cursor-pointer border border-ivory/10 shadow-xl`,
								onClick: () => setLightboxImg(img),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: img.src,
										alt: img.title,
										className: "editorial-img h-full w-full object-cover brightness-95",
										loading: "lazy"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-espresso/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "eyebrow-tag text-gold text-[0.62rem]",
												children: "Gallery"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "font-serif text-2xl text-ivory font-light",
												children: img.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-bone/80 font-light mt-1",
												children: img.caption
											})
										]
									})
								]
							}, img.src))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "location",
					className: "relative bg-espresso py-28 lg:py-36",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-7xl px-6 lg:px-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-16 lg:grid-cols-12 lg:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-5 reveal-on-scroll",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow-tag text-gold",
										children: "08 · Visit & Hours"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "mt-4 font-serif text-[clamp(2.6rem,5vw,4.8rem)] font-light leading-[0.95] text-ivory",
										children: ["FIND ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
											className: "italic text-gold font-normal",
											children: "US"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 space-y-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-4 border-b border-ivory/10 pb-6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
													className: "text-gold shrink-0 mt-1",
													size: 20
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-xs uppercase tracking-[0.22em] text-gold font-medium",
													children: "Villagio Town Center"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
													className: "not-italic text-base sm:text-lg font-light text-ivory mt-1 leading-relaxed",
													children: [
														"22756 Westheimer Parkway",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
														"Suite 180",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
														"Katy, TX 77450"
													]
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-4 border-b border-ivory/10 pb-6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
													className: "text-gold shrink-0 mt-1",
													size: 20
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-xs uppercase tracking-[0.22em] text-gold font-medium",
													children: "Opening Hours"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-2 space-y-1.5 text-sm sm:text-base font-light text-bone/90",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "flex justify-between gap-8",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-ivory/70",
															children: "Sun – Thu:"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-normal text-ivory",
															children: "5:00 PM – 10:00 PM"
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "flex justify-between gap-8",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-ivory/70",
															children: "Fri & Sat:"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-normal text-ivory",
															children: "5:00 PM – 11:00 PM"
														})]
													})]
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-4 pb-6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
													className: "text-gold shrink-0 mt-1",
													size: 20
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-xs uppercase tracking-[0.22em] text-gold font-medium",
													children: "Phone"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "tel:+13463876092",
													className: "mt-1 block text-lg font-light text-ivory hover:text-gold transition-colors",
													children: "(346) 387-6092"
												})] })]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-8 flex flex-wrap gap-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											className: "group rounded-none bg-gold px-8 py-6 text-xs font-semibold uppercase tracking-[0.22em] text-espresso hover:bg-ivory transition-colors",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: GOOGLE_MAPS_URL,
												target: "_blank",
												rel: "noopener noreferrer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Get Directions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
													size: 16,
													className: "transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
												})]
											})
										})
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lg:col-span-7 reveal-on-scroll delay-200",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "luxury-map-frame aspect-[4/3] w-full sm:aspect-[16/11]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
										title: "Interactive Google Map to Tavolina 44 at Villagio Town Center",
										src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.4527805151647!2d-95.76331166892572!3d29.735606580394073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864121c924351fc1%3A0xc7f61377e29b99f2!2sTavolina%2044!5e0!3m2!1sen!2sin!4v1788974332540!5m2!1sen!2sin",
										loading: "lazy",
										allowFullScreen: true,
										className: "h-full w-full border-0",
										referrerPolicy: "strict-origin-when-cross-origin"
									})
								})
							})]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					id: "contact",
					className: "relative overflow-hidden bg-ink pt-28 pb-12 lg:pt-36",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-6 lg:px-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-12 border-b border-ivory/15 pb-16 lg:grid-cols-12",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "lg:col-span-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TavolinaLogo, {
												size: "md",
												withBackdrop: true,
												className: "origin-left",
												imgClassName: "h-12 sm:h-14 w-auto"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-6 max-w-sm text-sm font-light leading-relaxed text-bone/70",
												children: "Italian soul and American spirit converging at Villagio Town Center in Katy, Texas. Dedicated to the craft of the table."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-7 text-xs uppercase tracking-[0.24em] text-gold/80 font-medium",
												children: "Villagio Town Center · Suite 180"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "lg:col-span-4 lg:col-start-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "eyebrow-tag text-gold",
											children: "Navigation"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-6 grid grid-cols-2 gap-4 text-sm font-light text-bone/80",
											children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => scrollToSection(item.id),
												className: "text-left hover:text-gold transition-colors",
												children: item.label
											}, item.id))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "lg:col-span-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "eyebrow-tag text-gold",
											children: "Direct Contact & Hours"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-6 space-y-3 text-sm font-light text-bone/80",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "22756 Westheimer Parkway, Suite 180" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Katy, TX 77450" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "tel:+13463876092",
													className: "text-gold hover:underline font-normal",
													children: "(346) 387-6092"
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "pt-2 text-xs text-ivory/50",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sun–Thu: 5–10 PM" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Fri & Sat: 5–11 PM" })]
												})
											]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative select-none overflow-hidden pt-10 pb-6 text-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-serif text-[clamp(4.5rem,14vw,14rem)] font-light leading-none tracking-tighter text-ivory/[0.04]",
									children: "TAVOLINA 44"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row items-center justify-between border-t border-ivory/10 pt-8 text-[0.68rem] uppercase tracking-[0.22em] text-ivory/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 Tavolina 44. All rights reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 sm:mt-0",
									children: "Villagio Town Center · Katy, Texas · Italian & American Dining"
								})]
							})
						]
					})
				})
			] }),
			lightboxImg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-espresso/98 p-4 sm:p-6 backdrop-blur-xl animate-in fade-in duration-300",
				role: "dialog",
				"aria-modal": "true",
				onClick: () => setLightboxImg(null),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setLightboxImg(null),
					className: "absolute right-6 top-6 sm:right-8 sm:top-8 flex h-12 w-12 items-center justify-center border border-ivory/20 text-ivory hover:border-gold hover:text-gold transition-colors",
					"aria-label": "Close image lightbox",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 24 })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative max-h-[90vh] max-w-5xl overflow-hidden border border-ivory/15 bg-charcoal p-3 sm:p-4 shadow-2xl",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: lightboxImg.src,
						alt: lightboxImg.title,
						className: "max-h-[75vh] w-auto object-contain mx-auto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-2xl font-light text-ivory",
							children: lightboxImg.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs sm:text-sm text-bone/75 font-light",
							children: lightboxImg.caption
						})]
					})]
				})]
			})
		]
	});
}
//#endregion
export { Index as component };
