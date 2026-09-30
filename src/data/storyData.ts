export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export interface PressQuote {
  quote: string;
  source: string;
  year: string;
  stars?: number;
}

export const TIMELINE: TimelineMilestone[] = [
  {
    year: '1996',
    title: 'Annamaria’s Vision in Thamel',
    description: 'Italian native Annamaria Forgione arrives in Kathmandu and dreams of genuine Neapolitan pizza. She commissions Italian refractory clay bricks and opens the doors of Fire and Ice on Tridevi Marg.'
  },
  {
    year: '2001',
    title: 'The Artisanal Gelato Revolution',
    description: 'Importing the first Carpigiani batch freezer into Nepal, Fire and Ice introduces true Italian gelato using organic Himalayan milk, fresh pistachios, and rich chocolate.'
  },
  {
    year: '2012',
    title: 'Expanding the Culinary Repertoire',
    description: 'Fresh bronze-extruded pastas, 8-hour braised Bolognese, and authentic Italian morning espresso become staple traditions for climbers and locals alike.'
  },
  {
    year: '2021',
    title: 'Opening the Sanepa Garden',
    description: 'A second sanctuary opens in the leafy neighborhood of Sanepa, Lalitpur, offering serene open-air courtyard dining and a dedicated wood-fired hearth.'
  },
  {
    year: 'Today',
    title: 'Over 28 Years of Hearth & Hospitality',
    description: 'Now spanning nearly three decades, Fire and Ice remains Kathmandu’s benchmark for uncompromising Italian warmth, handmade dough, and timeless memories.'
  }
];

export const PRESS_QUOTES: PressQuote[] = [
  {
    quote: 'A legendary culinary landmark. Fire and Ice redefined Thamel dining and still bakes arguably the finest wood-fired pies east of Rome.',
    source: 'Lonely Planet Nepal',
    year: 'Guidebook Edition',
    stars: 5
  },
  {
    quote: 'For nearly three decades, this sanctuary on Tridevi Marg has hosted generations of trekkers, ambassadors, and Kathmandu foodies.',
    source: 'The Kathmandu Post',
    year: 'Food & Culture Feature',
    stars: 5
  },
  {
    quote: 'Uncompromising authenticity, authentic cheeses, imported Italian flour, and heartwarming hospitality that endures.',
    source: 'Nepali Times',
    year: 'Culinary Review',
    stars: 5
  }
];

export const FAQS = [
  {
    q: 'Do you make your dough and pasta fresh every day?',
    a: 'Yes, absolutely. Our pizza dough undergoes a strict 48-hour slow cold fermentation using Italian Caputo Tipo 00 flour. Our pastas are extruded with bronze dies and hand-rolled each morning using fresh farm eggs.'
  },
  {
    q: 'Are vegetarian and vegan choices available?',
    a: 'We offer an extensive selection of vegetarian dishes including our Margherita Classica, Ortolana Rustica, Quattro Formaggi, Penne all’Arrabbiata, and fresh salads. Vegan adjustments can be requested for any pasta or pizza without cheese.'
  },
  {
    q: 'Can I order delivery to my home or hotel in Kathmandu or Patan?',
    a: 'Yes! While our website provides a full client-side demo cart and checkout, real doorstep delivery is available across Kathmandu and Patan via verified delivery partners like Foodmandu or by calling our branches directly.'
  },
  {
    q: 'Do I need a reservation for dinner?',
    a: 'Walk-ins are always welcomed warmly at both Thamel and Sanepa. However, during weekend evenings (Friday & Saturday) and peak trekking seasons (Autumn and Spring), we recommend reserving ahead via our reservation form or telephone.'
  }
];
