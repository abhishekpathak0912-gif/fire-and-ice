export interface BranchDetails {
  id: 'thamel' | 'sanepa';
  name: string;
  subtitle: string;
  tagline: string;
  established: string;
  address: string;
  neighborhood: string;
  city: string;
  phone: string;
  displayPhone: string;
  email: string;
  hours: {
    weekdays: string;
    weekends: string;
    breakfast?: string;
  };
  mapsUrl: string;
  deliveryPartnerUrl: string;
  description: string;
  historicalContext: string;
  heroImage: string;
  galleryImages: string[];
  amenities: string[];
  directionsNote: string;
}

export const BRANCHES: Record<'thamel' | 'sanepa', BranchDetails> = {
  thamel: {
    id: 'thamel',
    name: 'Thamel (The Original)',
    subtitle: 'Kathmandu Flagship Hearth',
    tagline: 'Where Nepal’s wood-fired pizza legacy began in 1996.',
    established: '1996',
    address: 'Sanchayakosh Bhawan, 219 Tridevi Marg, Thamel',
    neighborhood: 'Thamel (Near Garden of Dreams)',
    city: 'Kathmandu 44600, Nepal',
    phone: '+97714250210',
    displayPhone: '+977 1 4250210 / 4250211',
    email: 'thamel@fireandicepizzeria.com',
    hours: {
      weekdays: '8:00 AM – 10:00 PM',
      weekends: '8:00 AM – 10:00 PM',
      breakfast: '8:00 AM – 11:30 AM Daily'
    },
    mapsUrl: 'https://maps.google.com/?q=Fire+and+Ice+Pizzeria+Thamel+Kathmandu',
    deliveryPartnerUrl: 'https://foodmandu.com/Restaurant/Details/246',
    description: 'The iconic hearth that introduced true Neapolitan wood-fired pizza and Italian artisanal gelato to Nepal in 1996. A warm, bustling culinary haven beloved by climbers, diplomats, generations of Nepali families, and world travelers.',
    historicalContext: 'Founded by Italian native Annamaria Forgione, Fire and Ice imported the first refractory clay brick oven and gelato machine into Kathmandu, setting the benchmark for Italian hospitality in the Himalayas.',
    heroImage: 'https://lh3.googleusercontent.com/aida/AEtjO1Ust25BswzzbZ_5ZPx7U9pptfOHD7z1X6XHzVUy3nDW4MhOzLMEh04pNc2pb52rXlgRGEmiPNY2nU8qjDglt4ywHo5KQWWwOccItTs17B6_TCruOfp4S2OMdeTQ5e3Od4IdVL9FjMtE-JyX_5h1j4q_tuVmWGYeDt15Z0pGp5DCo5e3FuYSvOftwPEWna57MJ1O7Bi5AteiMib5gRTKr7hcbw7465R4S06GSUAVmUJ4moNjMWkcGFYZYY-D',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida/AEtjO1UUXYhO_Hscx7jwY4l7Tm70zaC9AHMzTdmq-H8mdevRgE-SV3Ufk6JLdOQR7UM_qkhxk6xsUtFY2c9qAPQ29373K6jFfh0E4jGmAUOtPFDbT1U75DcYy825UeHOeFyY0RNXUJllhFP9AUUZnpyd1hkenxgJ1WlVMsJiZSz2-bRUUfS6eFCqxK2vfCLleiZ6Y68li1xNxHdm3p2pxPe0lEQ2wnsa0P9J-31UY5gEHkP8knV-mGiZUVnHsxg',
      'https://lh3.googleusercontent.com/aida/AEtjO1VbEFk6zpn_uan6ecvtSze59qdzhd1ifTlolO4CTL5jP2ZhXLPiagUnVydLp9sm2ndHVVgqiP19e5DjHuoGNIQoVDAov0x8iPttZfp0Un0V9h9Czc9IBOIpriqbarBkDD8x9-_SqwOS09CWCRkmJ8a8zP73SjV2I_nLGyNt7ELqjqUQ-puN2J4_LkkaoHPYPWOoOsHQhP7xKNiWQfpcamDqGu0ykPyD0Vp0nkhZAJPh6KWibY0ll9OEsukk'
    ],
    amenities: [
      '450°C Refractory Brick Wood Oven',
      'Illy Master Barista Espresso Bar',
      'Tuscan & Piedmontese Wine Cellar',
      'Air Conditioned Dining Room',
      'High-Speed Guest Fiber WiFi',
      'Street-view Terrace Seating'
    ],
    directionsNote: 'Conveniently situated on Tridevi Marg opposite Sanchayakosh Bhawan, a short 2-minute stroll west of the historic Garden of Dreams.'
  },
  sanepa: {
    id: 'sanepa',
    name: 'Sanepa (Lalitpur Garden)',
    subtitle: 'Tranquil Patan Courtyard',
    tagline: 'Open-air Tuscan garden dining in Lalitpur’s vibrant artistic hub.',
    established: '2021',
    address: 'Sanepa Heights, Jhamsikhel Road, Lalitpur',
    neighborhood: 'Jhamsikhel / Sanepa Enclave',
    city: 'Lalitpur 44700, Nepal',
    phone: '+97715538825',
    displayPhone: '+977 1 5538825 / 5538914',
    email: 'sanepa@fireandicepizzeria.com',
    hours: {
      weekdays: '10:00 AM – 10:00 PM',
      weekends: '10:00 AM – 10:00 PM',
      breakfast: '10:00 AM – 11:30 AM Brunch'
    },
    mapsUrl: 'https://maps.google.com/?q=Fire+and+Ice+Pizzeria+Sanepa+Lalitpur',
    deliveryPartnerUrl: 'https://foodmandu.com/Restaurant/Details/246',
    description: 'Our relaxed sister location nestled among the leafy residential avenues of Sanepa and Jhamsikhel. Featuring a serene open garden terrace, warm brick interiors, and the exact same artisanal wood-fired standards.',
    historicalContext: 'Opened to bring the signature Fire & Ice experience closer to our long-standing patrons in Patan, Kupondole, and the Lalitpur diplomatic enclave.',
    heroImage: 'https://lh3.googleusercontent.com/aida/AEtjO1Ust25BswzzbZ_5ZPx7U9pptfOHD7z1X6XHzVUy3nDW4MhOzLMEh04pNc2pb52rXlgRGEmiPNY2nU8qjDglt4ywHo5KQWWwOccItTs17B6_TCruOfp4S2OMdeTQ5e3Od4IdVL9FjMtE-JyX_5h1j4q_tuVmWGYeDt15Z0pGp5DCo5e3FuYSvOftwPEWna57MJ1O7Bi5AteiMib5gRTKr7hcbw7465R4S06GSUAVmUJ4moNjMWkcGFYZYY-D',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCZJrPRskN5GyhPljjNIic9GdUyAd4CLiUPdRlV-4J4B2MnMKTmyod1pJBWBsj792RZ9hIC2NLvF7Vci6T5pD3jsY0oDuuhmms-VC3zS8Mm0SeFUhQ-FNkumeiaIqE6hTMnYCd4IDnzfMBbJjpolNVYFQ0j_nAi8zDKRLMjo9hPdkGhWwG6qGVWsXVP34PNMZrMuKFBJsdWnTntjq-D_LqJO_4tWW62QhapuDHXk48SPJvWFTyM-r3qSA',
      'https://lh3.googleusercontent.com/aida/AEtjO1VbEFk6zpn_uan6ecvtSze59qdzhd1ifTlolO4CTL5jP2ZhXLPiagUnVydLp9sm2ndHVVgqiP19e5DjHuoGNIQoVDAov0x8iPttZfp0Un0V9h9Czc9IBOIpriqbarBkDD8x9-_SqwOS09CWCRkmJ8a8zP73SjV2I_nLGyNt7ELqjqUQ-puN2J4_LkkaoHPYPWOoOsHQhP7xKNiWQfpcamDqGu0ykPyD0Vp0nkhZAJPh6KWibY0ll9OEsukk'
    ],
    amenities: [
      'Leafy Open-Air Garden Terrace',
      'Wood-Fired Hearth Oven',
      'Dedicated Customer Vehicle Parking',
      'Private Family Celebration Alcove',
      'Pet-Friendly Outdoor Seating',
      'Acoustic Warm Hearth Fireplace'
    ],
    directionsNote: 'Located along the main Jhamsikhel-Sanepa stretch, 300 meters from the British School turnoff, with secure parking on-site.'
  }
};
