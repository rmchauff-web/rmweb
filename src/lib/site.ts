export const site = {
  name: "RM Chauffeur London",
  shortName: "RM Chauffeur",
  monogram: "RM",
  tagline: "Driven by excellence. Defined by trust.",
  url: "https://www.rmchauffeurlondon.co.uk",
  // Replace with the live reservations number when ready — this is the
  // placeholder shown on the brand guideline card.
  phone: "+44 7XXX XXXXXX",
  phoneHref: "tel:+447000000000",
  email: "bookings@rmchauffeur.com",
  emailHref: "mailto:bookings@rmchauffeur.com",
  address: {
    line1: "London",
    line2: "United Kingdom",
  },
  hours: "Available 24 hours a day, 7 days a week",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Fleet" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export type Service = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  points: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "airport-transfers",
    title: "Airport Transfers",
    summary:
      "Prompt, comfortable transfers to and from every London airport, with your flight monitored from departure.",
    detail:
      "Whether you are flying from Heathrow at dawn or landing at Gatwick after midnight, your chauffeur is already there. We track your flight, adjust the collection time automatically, and meet you in arrivals — so a delay never becomes your problem.",
    points: [
      "All six London airports covered — Heathrow, Gatwick, City, Luton, Stansted and Southend",
      "Flight monitoring with automatic pick-up adjustments",
      "Meet and greet in the arrivals hall",
      "Mercedes S-Class for up to 3 passengers, V-Class for up to 6",
    ],
    image: "/images/chauffeur-door.png",
    imageAlt:
      "A chauffeur in a black suit opening the rear door of a black Mercedes-Benz",
  },
  {
    slug: "weddings",
    title: "Weddings",
    summary:
      "Arrive in style on your special day, in an immaculate Mercedes dressed with wedding ribbons.",
    detail:
      "Your wedding day is one to remember forever, so make your entrance unforgettable. Our wedding fleet blends elegance, comfort and sophistication — an S-Class with ribbons for the bride or groom, a V-Class for family, and our party bus for guests who want the celebration to start early.",
    points: [
      "Mercedes S-Class with wedding ribbons for the bride or groom",
      "Mercedes V-Class with ribbons for family and friends",
      "Mercedes party bus with sound system for the wedding party",
      "Timings planned with your venue and photographer",
    ],
    image: "/images/wedding-car.png",
    imageAlt:
      "A black Mercedes-Benz decorated with white wedding ribbons outside a church",
  },
  {
    slug: "special-occasions",
    title: "Special Occasions",
    summary:
      "Birthdays, anniversaries and celebrations — with personalised touches arranged before you step in.",
    detail:
      "Booking for a special event? We can make the day even more memorable with custom, personalised extras waiting in the vehicle. Our party van is a favourite: surround-sound speakers, two large televisions and a bar area mean the celebration travels with you.",
    points: [
      "Personalised cupcakes and birthday cakes",
      "Balloons and hampers arranged to order",
      "Drinks and snacks stocked for the journey",
      "Party van with surround sound, two TVs and a bar area",
    ],
    image: "/images/fleet-party-bus.png",
    imageAlt:
      "The interior of a luxury party bus with leather seating, televisions and ambient lighting",
  },
  {
    slug: "private-hire",
    title: "Private Hire",
    summary:
      "A chauffeur at your disposal for the day, the week or longer — at rates better than our fixed tariff.",
    detail:
      "Need a chauffeur for more than a day? From business itineraries with back-to-back meetings to extended family visits, we build the schedule around you. For longer engagements we can usually offer a better price than our fixed rates — contact us for a personal quotation.",
    points: [
      "Daily, weekly and longer-term arrangements",
      "One chauffeur and one vehicle throughout",
      "Business meetings, events and personal itineraries",
      "Preferential rates for extended bookings",
    ],
    image: "/images/fleet-s-class.png",
    imageAlt:
      "A black Mercedes-Benz S-Class parked on an elegant London street at night",
  },
];

export type Airport = {
  code: string;
  name: string;
  location: string;
  distance: string;
  time: string;
};

export const airports: Airport[] = [
  {
    code: "LHR",
    name: "Heathrow",
    location: "West London",
    distance: "~15 miles (24 km) from Central London",
    time: "45–60 minutes",
  },
  {
    code: "LGW",
    name: "Gatwick",
    location: "South of London",
    distance: "~28 miles (45 km) from Central London",
    time: "60–90 minutes",
  },
  {
    code: "LCY",
    name: "London City",
    location: "East London",
    distance: "~7 miles (11 km) from Central London",
    time: "25–40 minutes",
  },
  {
    code: "LTN",
    name: "Luton",
    location: "North of London",
    distance: "~34 miles (55 km) from Central London",
    time: "60–90 minutes",
  },
  {
    code: "STN",
    name: "Stansted",
    location: "Northeast of London",
    distance: "~40 miles (64 km) from Central London",
    time: "70–100 minutes",
  },
  {
    code: "SEN",
    name: "Southend",
    location: "East of London",
    distance: "~40 miles (64 km) from Central London",
    time: "70–100 minutes",
  },
];

export type Vehicle = {
  slug: string;
  name: string;
  klass: string;
  passengers: string;
  luggage: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
};

export const fleet: Vehicle[] = [
  {
    slug: "s-class",
    name: "Mercedes-Benz S-Class",
    klass: "Executive Saloon",
    passengers: "3 passengers",
    luggage: "2 suitcases",
    description:
      "The benchmark for executive travel. A quiet, deeply comfortable rear cabin that lets you work, rest or simply arrive composed.",
    features: [
      "Seating for up to 3 passengers and 2 suitcases",
      "Reclining rear seats with extended legroom",
      "Climate-controlled, near-silent cabin",
      "The preferred choice for airports and business travel",
    ],
    image: "/images/fleet-s-class.png",
    imageAlt:
      "A black Mercedes-Benz S-Class parked on an elegant London street at night",
  },
  {
    slug: "v-class",
    name: "Mercedes-Benz V-Class",
    klass: "Luxury MPV",
    passengers: "6 passengers",
    luggage: "6 suitcases",
    description:
      "Generous space for families, groups and full-luggage arrivals, without any compromise on comfort or presence.",
    features: [
      "Seating for up to 6 passengers and 6 suitcases",
      "Individual leather seating",
      "Ideal for group airport transfers",
      "Room for pushchairs, golf clubs and extra luggage",
    ],
    image: "/images/fleet-v-class.png",
    imageAlt: "A black Mercedes-Benz V-Class parked outside a modern London building",
  },
  {
    slug: "party-bus",
    name: "Mercedes Party Bus",
    klass: "Celebrations",
    passengers: "Group seating",
    luggage: "By arrangement",
    description:
      "A popular choice for birthdays, weddings and nights out. Celebrate all the way to your destination in a private, moving venue.",
    features: [
      "Surround-sound speaker system",
      "Two large televisions",
      "Bar area to store and serve your drinks",
      "Perfect for wedding parties and special occasions",
    ],
    image: "/images/fleet-party-bus.png",
    imageAlt:
      "The interior of a luxury party bus with leather seating, televisions and a bar area",
  },
];

export const values = [
  {
    title: "Safety",
    body: "Professional, experienced chauffeurs and meticulously maintained vehicles, so every journey is as secure as it is comfortable.",
  },
  {
    title: "Punctuality",
    body: "We plan the route, watch the traffic and arrive early. Your schedule is the fixed point everything else moves around.",
  },
  {
    title: "Professionalism",
    body: "Smartly presented, courteous and discreet. Our chauffeurs are there when you need them and invisible when you don't.",
  },
  {
    title: "Luxury",
    body: "A Mercedes-Benz fleet kept in immaculate condition, with every detail of the cabin prepared before you step in.",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Tell us your journey",
    body: "Use the booking page or email us with your pick-up, destination, date and passenger numbers.",
  },
  {
    step: "02",
    title: "Receive your quotation",
    body: "We confirm availability and reply with a clear, personal quotation for your journey.",
  },
  {
    step: "03",
    title: "Travel in comfort",
    body: "Your chauffeur arrives early in an immaculate Mercedes, and the journey unfolds exactly as planned.",
  },
] as const;

export const faqs = [
  {
    question: "How do I book a journey?",
    answer:
      "The quickest way is the booking page on this site — tell us your pick-up, destination, date and time, and we will come back to you with a quotation and confirmation. You can also email us directly at bookings@rmchauffeur.com.",
  },
  {
    question: "Which airports do you cover?",
    answer:
      "All six London airports: Heathrow, Gatwick, London City, Luton, Stansted and Southend. We monitor your flight and adjust the collection time automatically, so delays never affect your transfer.",
  },
  {
    question: "Which vehicle should I choose?",
    answer:
      "The Mercedes S-Class seats up to 3 passengers with 2 suitcases and is ideal for business and airport travel. The Mercedes V-Class seats up to 6 passengers with 6 suitcases, perfect for families and groups. For celebrations, our Mercedes party bus offers surround sound, two televisions and a bar area.",
  },
  {
    question: "Can you provide a chauffeur for more than a day?",
    answer:
      "Yes. For multi-day and longer-term private hire we can usually offer a better price than our fixed rates. Contact us at bookings@rmchauffeur.com with your itinerary for a personal quotation.",
  },
  {
    question: "Do you cater for weddings and special occasions?",
    answer:
      "We do. Wedding vehicles are dressed with ribbons, and for birthdays and celebrations we can arrange personalised cakes, balloons, hampers, drinks and snacks. Our party van — with surround sound, two large TVs and a bar area — is a popular choice.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We are based in London and cover the whole of the capital, all London airports and long-distance journeys across the United Kingdom.",
  },
] as const;
