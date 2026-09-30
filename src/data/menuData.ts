import { MenuItem, CategoryInfo } from '../types/menu';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'all',
    name: 'All Offerings',
    italianSubtitle: 'Tutto il Menù',
    description: 'Explore the full repertoire of Italian wood-fired craftsmanship and Tuscan hospitality.'
  },
  {
    id: 'pizza',
    name: 'Wood-Fired Pizza',
    italianSubtitle: 'Le Pizze Tradizionali',
    description: 'Blistered at 450°C in our heritage refractory brick wood oven. Slow fermented for 48 hours with Italian Caputo flour.'
  },
  {
    id: 'pasta',
    name: 'Handmade Pasta',
    italianSubtitle: 'Pasta Fatta in Casa',
    description: 'Extruded with bronze dies and rolled by hand every morning using durum semolina and mountain farm fresh eggs.'
  },
  {
    id: 'desserts',
    name: 'Dolci & Gelato',
    italianSubtitle: 'Dolci Artigianali',
    description: 'Traditional Italian confectionery, house-churned authentic gelato, and signature Illy espresso pairings.'
  },
  {
    id: 'breakfast',
    name: 'Breakfast',
    italianSubtitle: 'Colazione & Caffè',
    description: 'Daily from 8:00 AM. Flaky warm cornetti, farm egg frittatas, and freshly pulled morning espresso.'
  },
  {
    id: 'insalate',
    name: 'Insalate & Antipasti',
    italianSubtitle: 'Antipasti & Insalate',
    description: 'Crisp organic Himalayan mountain greens, imported Italian olive oils, aged balsamico, and artisanal cured antipasti.'
  },
  {
    id: 'beverages',
    name: 'Beverages & Wine',
    italianSubtitle: 'Vini & Bevande',
    description: 'Hand-selected Italian regional DOCG wines, artisanal aperitifs, San Pellegrino sodas, and barista espresso.'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // PIZZAS
  {
    id: 'pizza-fire-ice-special',
    name: 'Fire & Ice Special',
    italianName: 'Pizza Speciale Fire & Ice',
    category: 'pizza',
    price: 1280,
    description: 'Our iconic signature since 1996. Imported fior di latte mozzarella, spicy Italian artisan salami, sweet wood-roasted bell peppers, and crushed mountain oregano over San Marzano DOP reduction.',
    ingredients: ['San Marzano DOP Tomato Pulp', 'Fior di Latte Mozzarella', 'Spicy Artisan Salami', 'Fire-Roasted Peppers', 'Mountain Oregano', 'Cold-Pressed EVOO'],
    tags: ['Spicy', 'Chef Choice', 'House Specialty'],
    badge: "Chef's Signature Since '96",
    crustType: '12" Neapolitan Wood-Blistered Crust',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZJrPRskN5GyhPljjNIic9GdUyAd4CLiUPdRlV-4J4B2MnMKTmyod1pJBWBsj792RZ9hIC2NLvF7Vci6T5pD3jsY0oDuuhmms-VC3zS8Mm0SeFUhQ-FNkumeiaIqE6hTMnYCd4IDnzfMBbJjpolNVYFQ0j_nAi8zDKRLMjo9hPdkGhWwG6qGVWsXVP34PNMZrMuKFBJsdWnTntjq-D_LqJO_4tWW62QhapuDHXk48SPJvWFTyM-r3qSA',
    available: true,
    calories: 840,
    preparationNote: 'Baked in our 450°C refractory hearth oven for 90 seconds.'
  },
  {
    id: 'pizza-margherita-classica',
    name: 'Margherita Classica',
    italianName: 'Margherita Tradizionale',
    category: 'pizza',
    price: 920,
    description: 'The purist standard. Sweet San Marzano tomato pulp, whole milk mozzarella, extra virgin olive oil from Tuscany, and fragrant fresh sweet basil leaves.',
    ingredients: ['San Marzano Tomatoes', 'Whole Milk Mozzarella', 'Fresh Sweet Basil', 'Tuscan Extra Virgin Olive Oil', 'Sea Salt'],
    tags: ['Vegetarian', 'House Specialty'],
    badge: 'Classic 1996 Recipe',
    crustType: '12" Neapolitan Crust',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1UUXYhO_Hscx7jwY4l7Tm70zaC9AHMzTdmq-H8mdevRgE-SV3Ufk6JLdOQR7UM_qkhxk6xsUtFY2c9qAPQ29373K6jFfh0E4jGmAUOtPFDbT1U75DcYy825UeHOeFyY0RNXUJllhFP9AUUZnpyd1hkenxgJ1WlVMsJiZSz2-bRUUfS6eFCqxK2vfCLleiZ6Y68li1xNxHdm3p2pxPe0lEQ2wnsa0P9J-31UY5gEHkP8knV-mGiZUVnHsxg',
    available: true,
    calories: 720,
    preparationNote: 'Simple perfection with DOP certified Italian ingredients.'
  },
  {
    id: 'pizza-quattro-formaggi',
    name: 'Quattro Formaggi',
    italianName: 'I Quattro Formaggi Nobili',
    category: 'pizza',
    price: 1250,
    description: 'Rich white base harmonious blend of creamy fior di latte, aged blue Gorgonzola dolce, shaved Grana Padano, and artisanal smoked scamorza.',
    ingredients: ['Fior di Latte', 'Gorgonzola Dolce DOP', 'Grana Padano 16-month', 'Smoked Scamorza', 'Fresh Thyme'],
    tags: ['Vegetarian'],
    badge: 'DOP Cheeses',
    crustType: '12" Bianco Crust',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZJrPRskN5GyhPljjNIic9GdUyAd4CLiUPdRlV-4J4B2MnMKTmyod1pJBWBsj792RZ9hIC2NLvF7Vci6T5pD3jsY0oDuuhmms-VC3zS8Mm0SeFUhQ-FNkumeiaIqE6hTMnYCd4IDnzfMBbJjpolNVYFQ0j_nAi8zDKRLMjo9hPdkGhWwG6qGVWsXVP34PNMZrMuKFBJsdWnTntjq-D_LqJO_4tWW62QhapuDHXk48SPJvWFTyM-r3qSA',
    available: true,
    calories: 910
  },
  {
    id: 'pizza-prosciutto-funghi',
    name: 'Prosciutto e Funghi',
    italianName: 'Prosciutto Cotto e Funghi Selvatici',
    category: 'pizza',
    price: 1320,
    description: 'Delicate Italian prosciutto cotto ham, sauteed forest button mushrooms, garden thyme, tomato sauce, and molten mozzarella.',
    ingredients: ['Prosciutto Cotto', 'Sauteed Forest Mushrooms', 'Mozzarella', 'San Marzano Sauce', 'Thyme'],
    tags: ['Chef Choice'],
    badge: 'Guest Favorite',
    crustType: '12" Neapolitan Crust',
    available: true,
    calories: 820
  },
  {
    id: 'pizza-ortolana-rustica',
    name: 'Ortolana Rustica',
    italianName: 'Ortolana dell’Orto',
    category: 'pizza',
    price: 1050,
    description: 'Char-grilled organic zucchini, slow-baked purple eggplant, sweet red peppers, taggiasca olives, and fior di latte mozzarella.',
    ingredients: ['Grilled Zucchini', 'Roasted Eggplant', 'Sweet Red Peppers', 'Taggiasca Olives', 'Mozzarella'],
    tags: ['Vegetarian'],
    badge: 'From Local Organic Farms',
    crustType: '12" Rustic Crust',
    available: true,
    calories: 690
  },
  {
    id: 'pizza-calzone-tradizionale',
    name: 'Calzone Tradizionale',
    italianName: 'Calzone Farcito al Forno',
    category: 'pizza',
    price: 1180,
    description: 'Folded golden wood-fired crust filled with fresh whipped buffalo ricotta, Napoli salami, and bubbling mozzarella, brushed with virgin olive oil.',
    ingredients: ['Whipped Buffalo Ricotta', 'Napoli Salami', 'Mozzarella', 'San Marzano Glaze', 'Fresh Basil'],
    tags: ['House Specialty'],
    badge: 'Folded Hearth Baked',
    crustType: 'Stuffed Hearth Calzone',
    available: true,
    calories: 890
  },
  {
    id: 'pizza-diavola-speziata',
    name: 'Diavola Speziata',
    italianName: 'La Diavola Piccante',
    category: 'pizza',
    price: 1180,
    description: 'Authentic spicy Italian pepperoni salami, crushed mountain red chili flakes, wood-roasted bell peppers, and bubbling mozzarella.',
    ingredients: ['Calabrese Salami', 'Chili Flakes', 'Roasted Sweet Peppers', 'Mozzarella', 'San Marzano Tomatoes'],
    tags: ['Spicy'],
    badge: 'Fiery & Bold',
    crustType: '12" Neapolitan Crust',
    available: true,
    calories: 860
  },

  // PASTAS
  {
    id: 'pasta-spaghetti-bolognese',
    name: 'Spaghetti alla Bolognese',
    italianName: 'Spaghetti al Ragù Tradizionale',
    category: 'pasta',
    price: 1150,
    description: 'Eight-hour slow-braised tender beef ragù simmered with Sangiovese wine, fresh rosemary, mirepoix, aged Parmigiano Reggiano, and flat parsley.',
    ingredients: ['Handmade Spaghetti', '8-Hour Beef Ragù', 'Sangiovese Reduction', 'Parmigiano Reggiano DOP', 'Fresh Herbs'],
    tags: ['House Specialty'],
    badge: '8-Hour Slow Ragù',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZJrPRskN5GyhPljjNIic9GdUyAd4CLiUPdRlV-4J4B2MnMKTmyod1pJBWBsj792RZ9hIC2NLvF7Vci6T5pD3jsY0oDuuhmms-VC3zS8Mm0SeFUhQ-FNkumeiaIqE6hTMnYCd4IDnzfMBbJjpolNVYFQ0j_nAi8zDKRLMjo9hPdkGhWwG6qGVWsXVP34PNMZrMuKFBJsdWnTntjq-D_LqJO_4tWW62QhapuDHXk48SPJvWFTyM-r3qSA',
    available: true,
    calories: 780
  },
  {
    id: 'pasta-penne-arrabbiata',
    name: 'Penne all\'Arrabbiata',
    italianName: 'Penne all\'Arrabbiata con Aglio e Peperoncino',
    category: 'pasta',
    price: 950,
    description: 'Extruded bronze penne tossed vigorously with fiery crushed chili, golden sliced garlic, sweet San Marzano tomato coulis, and cold-pressed olive oil.',
    ingredients: ['Bronze Cut Penne', 'Garlic Confit', 'Fresh Red Chilies', 'San Marzano Coulis', 'Flat Parsley', 'EVOO'],
    tags: ['Vegetarian', 'Vegan', 'Spicy'],
    badge: 'Fiery Roman Recipe',
    available: true,
    calories: 590
  },
  {
    id: 'pasta-lasagna-al-forno',
    name: 'Lasagna al Forno',
    italianName: 'Lasagna Emiliana Tradizionale',
    category: 'pasta',
    price: 1220,
    description: 'Five silky sheets of fresh egg pasta layered with nutmeg-scented béchamel sauce, rich Bolognese ragù, and oven-crusted Grana Padano in a clay terrine.',
    ingredients: ['Fresh Egg Pasta Sheets', 'Nutmeg Béchamel', 'Bolognese Ragù', 'Grana Padano', 'Fior di Latte'],
    tags: ['Chef Choice', 'House Specialty'],
    badge: 'Clay Hearth Baked',
    available: true,
    calories: 880
  },
  {
    id: 'pasta-tagliatelle-funghi',
    name: 'Tagliatelle ai Funghi Porcini',
    italianName: 'Tagliatelle all’Uovo con Porcini',
    category: 'pasta',
    price: 1120,
    description: 'Fresh handcrafted egg ribbon pasta folded through aromatic wild porcini mushrooms, Himalayan thyme, and a velvety alpine butter glaze.',
    ingredients: ['Egg Ribbon Tagliatelle', 'Wild Porcini Mushrooms', 'Alpine Butter', 'Mountain Thyme', 'Aged Parmesan'],
    tags: ['Vegetarian', 'Chef Choice'],
    badge: 'Handmade Daily',
    available: true,
    calories: 670
  },
  {
    id: 'pasta-ravioli-ricotta',
    name: 'Ravioli di Ricotta e Spinaci',
    italianName: 'Ravioli Fatti a Mano con Salvia e Burro',
    category: 'pasta',
    price: 1100,
    description: 'Pillows of fresh semolina pasta stuffed with creamy buffalo ricotta and mountain baby spinach, pan-tossed in brown sage butter.',
    ingredients: ['Semolina Egg Pasta', 'Buffalo Ricotta', 'Baby Spinach', 'Nutmeg', 'Brown Butter Sage Sauce'],
    tags: ['Vegetarian'],
    badge: 'Hand Stuffed Daily',
    available: true,
    calories: 640
  },

  // DOLCI & GELATO
  {
    id: 'dessert-tiramisu',
    name: 'Traditional Tiramisù',
    italianName: 'Il Vero Tiramisù della Nonna',
    category: 'desserts',
    price: 620,
    description: 'Our celebrated recipe prepared fresh every morning. Velvety Italian mascarpone sabayon, Illy espresso-soaked Savoiardi ladyfingers, and Dutch bitter cocoa powder.',
    ingredients: ['Italian Mascarpone', 'Savoiardi Ladyfingers', 'Illy Espresso Roast', 'Pasteurized Egg Yolks', 'Dutch Bitter Cocoa'],
    tags: ['Vegetarian', 'House Specialty'],
    badge: 'Fire & Ice Recipe Since 1996',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZJrPRskN5GyhPljjNIic9GdUyAd4CLiUPdRlV-4J4B2MnMKTmyod1pJBWBsj792RZ9hIC2NLvF7Vci6T5pD3jsY0oDuuhmms-VC3zS8Mm0SeFUhQ-FNkumeiaIqE6hTMnYCd4IDnzfMBbJjpolNVYFQ0j_nAi8zDKRLMjo9hPdkGhWwG6qGVWsXVP34PNMZrMuKFBJsdWnTntjq-D_LqJO_4tWW62QhapuDHXk48SPJvWFTyM-r3qSA',
    available: true,
    calories: 450
  },
  {
    id: 'dessert-artisanal-gelato',
    name: 'Artisanal Gelato (Two Scoops)',
    italianName: 'Gelato Artigianale Tradizionale',
    category: 'desserts',
    price: 480,
    description: 'Two generous scoops churned daily in our authentic Italian batch freezer. Choice of Sicilian Bronte Pistachio, 70% Dark Chocolate, or Madagascan Fior di Latte.',
    ingredients: ['Fresh Organic Whole Milk', 'Heavy Cream', 'Bronte Pistachio Paste', 'Valrhona Cocoa', 'Bourbon Vanilla Bean'],
    tags: ['Vegetarian', 'Gluten-Free', 'House Specialty'],
    badge: 'House Churned Daily',
    available: true,
    calories: 320
  },
  {
    id: 'dessert-panna-cotta',
    name: 'Panna Cotta al Caramello',
    italianName: 'Panna Cotta Piemontese',
    category: 'desserts',
    price: 520,
    description: 'Silky Piedmontese cooked cream infused with Madagascar vanilla bean, accompanied by sea-salted warm caramel drizzle.',
    ingredients: ['Double Cream', 'Madagascar Vanilla Pod', 'Demerara Sugar', 'Sea Salted Caramel'],
    tags: ['Vegetarian', 'Gluten-Free'],
    badge: 'Piedmont Recipe',
    available: true,
    calories: 390
  },
  {
    id: 'dessert-affogato',
    name: 'Affogato al Caffè',
    italianName: 'Affogato Tradizionale con Illy',
    category: 'desserts',
    price: 450,
    description: 'A scoop of handmade Fior di Latte gelato "drowned" table-side in a freshly pulled scalding double shot of dark Italian Illy espresso.',
    ingredients: ['Fior di Latte Gelato', 'Illy Double Espresso', 'Amaretti Biscuit Crumb'],
    tags: ['Vegetarian'],
    badge: 'Table-side Pour',
    available: true,
    calories: 220
  },

  // BREAKFAST
  {
    id: 'breakfast-cornetto-cappuccino',
    name: 'Cornetto Caldo & Cappuccino',
    italianName: 'Colazione Tradizionale Italiana',
    category: 'breakfast',
    price: 460,
    description: 'The ritual Italian morning breakfast. Flaky golden butter cornetto baked at dawn, paired with a velvety hot cappuccino dusted with cocoa.',
    ingredients: ['Laminated Butter Pastry', 'Whole Milk Micro-foam', 'Arabica Espresso', 'Cocoa Powder'],
    tags: ['Vegetarian', 'House Specialty'],
    badge: 'Morning Classic (8am-11am)',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1VbEFk6zpn_uan6ecvtSze59qdzhd1ifTlolO4CTL5jP2ZhXLPiagUnVydLp9sm2ndHVVgqiP19e5DjHuoGNIQoVDAov0x8iPttZfp0Un0V9h9Czc9IBOIpriqbarBkDD8x9-_SqwOS09CWCRkmJ8a8zP73SjV2I_nLGyNt7ELqjqUQ-puN2J4_LkkaoHPYPWOoOsHQhP7xKNiWQfpcamDqGu0ykPyD0Vp0nkhZAJPh6KWibY0ll9OEsukk',
    available: true,
    calories: 410
  },
  {
    id: 'breakfast-tuscan-frittata',
    name: 'Tuscan Herb Frittata',
    italianName: 'Frittata di Campagna alle Erbe',
    category: 'breakfast',
    price: 680,
    description: 'Three free-range eggs gently baked in cast iron with fresh rosemary, sweet shallots, melted provolone cheese, and served with wood-fired bread toast.',
    ingredients: ['Free-Range Eggs', 'Provolone Dolce', 'Fresh Rosemary', 'Shallots', 'Artisan Sourdough Toast'],
    tags: ['Vegetarian', 'Gluten-Free'],
    badge: 'Cast Iron Baked',
    available: true,
    calories: 520
  },
  {
    id: 'breakfast-fruit-bowl',
    name: 'Seasonal Himalayan Fruit & Yogurt Bowl',
    italianName: 'Coppa di Frutta di Stagione e Yogurt',
    category: 'breakfast',
    price: 520,
    description: 'Locally sourced mountain apples, sweet papaya, fresh banana, organic wild honey, and thick curd with toasted almonds and pumpkin seeds.',
    ingredients: ['Fresh Seasonal Fruits', 'Organic Himalayan Curd', 'Wild Honey', 'Roasted Almonds', 'Chia Seeds'],
    tags: ['Vegetarian', 'Gluten-Free'],
    badge: 'Farm Fresh',
    available: true,
    calories: 340
  },

  // INSALATE & ANTIPASTI
  {
    id: 'insalate-caprese',
    name: 'Insalata Caprese di Bufala',
    italianName: 'Caprese Tradizionale di Sorrento',
    category: 'insalate',
    price: 840,
    description: 'Ripe mountain beefsteak tomatoes paired with thick slices of fresh buffalo mozzarella, hand-torn sweet basil, and aged Modena balsamic drizzle.',
    ingredients: ['Ripe Vine Tomatoes', 'Fresh Buffalo Mozzarella', 'Sweet Genovese Basil', 'Aged Modena Balsamic', 'Extra Virgin Olive Oil'],
    tags: ['Vegetarian', 'Gluten-Free', 'House Specialty'],
    badge: 'Campanian Mozzarella',
    available: true,
    calories: 420
  },
  {
    id: 'insalate-bruschetta-rustica',
    name: 'Bruschetta al Pomodoro e Basilico',
    italianName: 'Bruschetta Rustica al Fuoco di Legna',
    category: 'insalate',
    price: 580,
    description: 'Wood-oven toasted Italian sourdough rubbed with fresh garlic clove, crowned with diced heirloom tomatoes, basil, and fragrant olive oil.',
    ingredients: ['Wood-Fired Sourdough', 'Heirloom Tomatoes', 'Garlic Rub', 'Fresh Basil', 'Flaky Sea Salt', 'EVOO'],
    tags: ['Vegetarian', 'Vegan'],
    badge: 'Wood Oven Toasted',
    available: true,
    calories: 330
  },
  {
    id: 'insalate-della-casa',
    name: 'Insalata della Casa',
    italianName: 'Insalata Mista dell’Orto',
    category: 'insalate',
    price: 620,
    description: 'Crisp mixed salad leaves from Kathmandu Valley farms, shaved fennel, cherry tomatoes, kalamata olives, and house honey-dijon vinaigrette.',
    ingredients: ['Valley Greens', 'Shaved Fennel', 'Cherry Tomatoes', 'Kalamata Olives', 'Honey Dijon Vinaigrette'],
    tags: ['Vegetarian', 'Gluten-Free'],
    badge: 'Crisp Valley Greens',
    available: true,
    calories: 220
  },

  // BEVERAGES & WINE
  {
    id: 'bev-espresso-doppio',
    name: 'Espresso Doppio (Illy)',
    italianName: 'Caffè Espresso Doppio',
    category: 'beverages',
    price: 320,
    description: 'Double extraction of authentic Italian Illy dark roast, crowned with a rich hazelnut crema.',
    ingredients: ['100% Arabica Illy Roast', 'Mountain Mineral Water'],
    tags: ['Vegetarian', 'Vegan', 'Gluten-Free'],
    badge: 'Illy Master Certified',
    available: true,
    calories: 5
  },
  {
    id: 'bev-san-pellegrino-soda',
    name: 'San Pellegrino Limonata / Aranciata',
    italianName: 'Bibite San Pellegrino',
    category: 'beverages',
    price: 380,
    description: 'Chilled sparkling Italian citrus beverage made with real Mediterranean sun-ripened lemons and oranges.',
    ingredients: ['Sparkling Natural Mineral Water', 'Real Fruit Juice', 'Natural Cane Sugar'],
    tags: ['Vegetarian', 'Vegan', 'Gluten-Free'],
    badge: 'Imported from Italy',
    available: true,
    calories: 120
  },
  {
    id: 'bev-chianti-glass',
    name: 'Chianti Classico DOCG (Glass)',
    italianName: 'Chianti Classico Riserva',
    category: 'beverages',
    price: 980,
    description: 'Estate-bottled Tuscan red wine from Sangiovese grapes. Aromas of wild cherries, violet petals, dried thyme, and subtle French oak.',
    ingredients: ['Sangiovese Grapes (13.5% ABV)', 'Contains Sulfites'],
    tags: ['Vegan', 'Gluten-Free'],
    badge: 'Tuscan Estate DOCG',
    available: true,
    calories: 130
  }
];
