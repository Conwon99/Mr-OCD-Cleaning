import { business, brandName, citiesLabel } from "@/data/business";

export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  navTitle: string;
  parentCategorySlug: string | null;
  description: string;
  cardDescription: string;
  iconUrl: string;
  iconAlt: string;
  image: string;
  imageAlt: string;
  about: string;
  why: string;
  signsYouNeed: string;
  options: string;
  localContext: string;
  whatToExpect: string;
  whyChooseUs: string;
  benefits: string[];
  process: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

const serviceIconBase = "https://c.animaapp.com/mial13ktyN5Jkh/assets";
const brand = brandName();
const cities = citiesLabel();
const { assets } = business;

export const services: ServicePage[] = [
  {
    slug: "driveway-cleaning",
    title: "Driveway Cleaning",
    shortTitle: "Driveway Cleaning",
    navTitle: "Driveway Cleaning",
    parentCategorySlug: "pressure-washing-johnstone-glasgow",
    description: `Professional driveway cleaning in ${cities} and ${business.region}. High-pressure washing restores driveways, block paving and mono blocking to like-new condition. Free quotes from ${brand}.`,
    cardDescription: `Restore your driveway, block paving or mono blocking with high-pressure washing. Tidy results across ${cities}.`,
    iconUrl: "https://c.animaapp.com/mhqqhnhjBr0jWt/assets/670f922acd8bf79374aa2c10_service-01.svg",
    iconAlt: "Driveway cleaning icon",
    image: assets.gallery[0],
    imageAlt: `Driveway pressure washing by ${brand} in ${business.primaryCity}`,
    about: `${brand} provides professional driveway cleaning for homeowners across ${business.region}. Using high-pressure washing equipment, we remove years of moss, algae, oil stains, dirt and discolouration from block paving, tarmac, concrete and mono blocking. The difference is dramatic — driveways come back to life and customers are regularly amazed at results they didn't realise were possible.`,
    why: `Peter and the team at ${brand} take pride in every job, ensuring surfaces are cleaned thoroughly and left spotless. No mess is left behind and the area is left ready to use straight away. Customers across ${cities} consistently recommend the service for reliability, fair pricing and the quality of the finish.`,
    signsYouNeed: `If your driveway looks grey, green or stained, or if weeds are pushing through block paving joints, a professional pressure wash can make a significant difference. Moss and algae growth makes surfaces slippery and speeds up wear. Block paving and mono blocking that looks permanently discoloured often just needs a thorough clean to reveal the original colours underneath — as many customers are surprised to discover.`,
    options: `${brand} can pressure wash tarmac, concrete, block paving and mono blocking driveways. For block paving, we can also re-sand joints after cleaning to help keep weeds out for longer. If weeds and moss are particularly heavy, a biocidal treatment can be applied after washing to slow regrowth. Get in touch for a free quote covering your specific driveway type and size.`,
    localContext: `Driveways across ${cities} and ${business.region} are regularly affected by the damp Scottish climate, which encourages moss and algae growth. If you are searching for driveway cleaning near ${business.primaryCity} or ${business.secondaryCity}, ${brand} provides a full service across the local area with free quotes.`,
    whatToExpect: `Contact ${brand} with your driveway type and size and we will arrange a free quote. On the day, Peter will arrive as scheduled, set up the equipment and work methodically across the surface. The area is left clean and tidy — no mess, no pooling water left unmanaged, and no surprises on the bill.`,
    whyChooseUs: `${brand} has built a strong reputation across ${cities} for reliable, high-quality driveway cleaning. With 18 five-star reviews and 100% recommendation rate on Facebook, customers know they can rely on Peter to turn up when he says he will and do a job that exceeds expectations. Free quotes and fair pricing make it easy to get started.`,
    benefits: [
      "High-pressure washing removes moss, algae, stains and discolouration.",
      "Block paving, tarmac, concrete and mono blocking all covered.",
      "No mess left behind — area ready to use immediately.",
      `Free quotes for driveways across ${cities} and ${business.region}.`,
    ],
    process: [
      "Contact us with your driveway type and size for a free quote.",
      "Peter arrives on the agreed day with professional pressure washing equipment.",
      "The surface is cleaned methodically, removing all moss, algae and staining.",
      "The area is left clean and tidy — no pooling water or mess left behind.",
    ],
    faq: [
      {
        question: "Can you clean block paving and mono blocking?",
        answer: `Yes. ${brand} cleans block paving and mono blocking driveways across ${cities}. Joints can be re-sanded after cleaning where required.`,
      },
      {
        question: "Will pressure washing damage my driveway?",
        answer: `No — ${brand} uses the correct pressure settings for each surface type. Tarmac, concrete and block paving are all cleaned safely without damage.`,
      },
      {
        question: `Do you offer driveway cleaning near me in ${business.primaryCity} or ${business.secondaryCity}?`,
        answer: `Yes. ${brand} provides driveway pressure washing across ${cities} and surrounding areas in ${business.region}. Contact us for a free quote.`,
      },
    ],
  },
  {
    slug: "patio-cleaning",
    title: "Patio & Path Cleaning",
    shortTitle: "Patio Cleaning",
    navTitle: "Patio & Path Cleaning",
    parentCategorySlug: "pressure-washing-johnstone-glasgow",
    description: `Patio and path pressure washing in ${cities} and ${business.region}. Remove moss, algae and staining from paving slabs, stone and concrete. Free quotes from ${brand}.`,
    cardDescription: `Bring patio slabs, stone paving and garden paths back to life with professional pressure washing across ${cities}.`,
    iconUrl: `${serviceIconBase}/670f922a6c5c1d8102612221_service-02.svg`,
    iconAlt: "Patio cleaning icon",
    image: assets.gallery[1],
    imageAlt: `Patio pressure washing by ${brand}`,
    about: `${brand} pressure washes patios, garden paths and paved areas for homeowners and businesses across ${business.region}. Paving slabs, natural stone, concrete and block paving can all be restored with professional cleaning — removing the layers of moss, algae, lichen and general dirt that build up over the years. Many customers are genuinely shocked at the improvement a single clean makes.`,
    why: `Slippery moss on patio slabs and paths is a genuine safety risk, especially in wet conditions. Professional pressure washing removes the growth at its root, leaving surfaces clean and safer underfoot. ${brand} takes care to work around garden furniture and planting, leaving the space clean and ready to enjoy.`,
    signsYouNeed: `Green or black discolouration on patio slabs, paths that feel slippery underfoot, or lichen and moss growth between and across pavers are all signs a professional clean is needed. Older patios may look permanently stained when the underlying stone is actually in excellent condition — pressure washing often reveals a colour and finish customers had forgotten about.`,
    options: `${brand} cleans paving slab patios, natural stone areas, concrete paths and block-paved garden paths. Where lichen or algae growth is heavy, a post-clean treatment can be applied to slow regrowth. Garden steps and boundary paths can be included in the same visit. Contact us for a free quote covering your full outdoor space.`,
    localContext: `Patios across ${cities} and ${business.region} tend to accumulate moss and algae quickly in the damp climate. If you are searching for patio cleaning near ${business.primaryCity} or ${business.secondaryCity}, ${brand} covers the full local area with free quotes and flexible scheduling.`,
    whatToExpect: `${brand} will discuss the patio size, surface type and condition before providing a quote. On the day, the team works carefully around furniture and planting, cleans the surface thoroughly, and leaves the area tidy with no pooling water or mess. You can use the space again straight away.`,
    whyChooseUs: `Customers across ${cities} consistently recommend ${brand} for patio cleaning — not just for the quality of the result but for the reliability, punctuality and fair pricing. Peter turns up when he says he will and takes as much care with a small garden path as a large commercial patio.`,
    benefits: [
      "Removes moss, algae, lichen and staining from all paved surfaces.",
      "Safe and effective on paving slabs, natural stone and concrete.",
      "Work carried out carefully around planting and garden furniture.",
      `Free quotes across ${cities} and ${business.region}.`,
    ],
    process: [
      "Discuss the surface type, size and condition for a free quote.",
      "Arrive on schedule with professional pressure washing equipment.",
      "Clean the patio and paths thoroughly, working around garden features.",
      "Leave the area tidy and ready to use immediately.",
    ],
    faq: [
      {
        question: "Can you clean natural stone patios?",
        answer: `Yes. ${brand} adjusts pressure settings to suit natural stone, ensuring effective cleaning without causing damage.`,
      },
      {
        question: "Can you clean garden steps and paths at the same time as my patio?",
        answer: `Yes. ${brand} can include garden steps, paths and surrounding paved areas in the same visit. Mention these when requesting a quote.`,
      },
      {
        question: `Do you offer patio cleaning near ${business.primaryCity}?`,
        answer: `Yes. ${brand} provides patio and path pressure washing across ${cities} and ${business.region}. Get in touch for a free quote.`,
      },
    ],
  },
  {
    slug: "decking-cleaning",
    title: "Decking Cleaning",
    shortTitle: "Decking Cleaning",
    navTitle: "Decking Cleaning",
    parentCategorySlug: "exterior-cleaning-johnstone-glasgow",
    description: `Decking cleaning in ${cities} and ${business.region}. Remove algae, mould and green slime from timber, composite and PVC decking. Free quotes from ${brand}.`,
    cardDescription: `Professional decking cleaning for timber, composite and PVC decking across ${cities}. Restore your deck safely and effectively.`,
    iconUrl: `${serviceIconBase}/670f922a0e27a271e441091e_service-03.svg`,
    iconAlt: "Decking cleaning icon",
    image: assets.gallery[4],
    imageAlt: `Decking cleaning by ${brand}`,
    about: `${brand} provides professional decking cleaning for residential and commercial customers across ${business.region}. Decking surfaces become slippery and unsightly quickly — algae and mould growth in the UK climate is almost inevitable without regular cleaning. ${brand} uses appropriate pressure and specialist treatments to restore decking safely, whether it is traditional softwood, hardwood, composite or PVC.`,
    why: `Green, slippery decking is a safety hazard and deteriorates faster when algae and mould are left to grow. Professional cleaning removes the build-up safely and effectively without causing damage to the decking boards. ${brand} has experience cleaning commercial restaurant decking and residential garden decks, ensuring the right approach for each surface.`,
    signsYouNeed: `Slippery decking, green or black discolouration, visible mould or algae growth, and decking that looks permanently stained are all signs professional cleaning is needed. Composite and PVC decking can still harbour algae and benefit from a thorough professional clean even if it is not visibly heavy.`,
    options: `${brand} can clean softwood, hardwood, composite and PVC decking to a high standard. Pressure is adjusted for each material to avoid damage. A protective treatment can be applied after cleaning to slow future algae and mould growth. Garden furniture and planters can be worked around during the clean. Contact ${brand} for a free quote.`,
    localContext: `Decking across ${cities} and ${business.region} is affected by the damp climate year-round. If you are searching for decking cleaning near ${business.primaryCity} or ${business.secondaryCity}, ${brand} covers the full area with free quotes. Commercial premises such as restaurants and hospitality venues are also catered for.`,
    whatToExpect: `${brand} will discuss the decking type, size and condition before quoting. On the day, the surface is cleaned thoroughly with the right equipment, furniture and planters worked around, and the area left tidy. A post-clean treatment can be included if required.`,
    whyChooseUs: `${brand} has cleaned restaurant decking commercially and residential garden decks to the same high standard. Customers value the punctuality, quality of finish and straightforward pricing. Free quotes are available across ${cities}.`,
    benefits: [
      "Safe and effective cleaning for timber, composite and PVC decking.",
      "Removes algae, mould and green slime without damaging boards.",
      "Commercial and residential decking covered.",
      `Free quotes across ${cities} and ${business.region}.`,
    ],
    process: [
      "Contact ${brand} with decking type and size for a free quote.",
      "Arrive on schedule with appropriate cleaning equipment.",
      "Clean the decking thoroughly, adjusting pressure for the surface type.",
      "Leave the area tidy — protective treatment available on request.",
    ],
    faq: [
      {
        question: "Can you clean composite decking?",
        answer: `Yes. ${brand} adjusts pressure and method for composite decking to ensure effective cleaning without causing damage to the boards.`,
      },
      {
        question: "Do you clean commercial decking?",
        answer: `Yes. ${brand} has cleaned restaurant and commercial decking to a high standard. Get in touch for a quote on commercial premises.`,
      },
      {
        question: `Do you offer decking cleaning near ${business.primaryCity}?`,
        answer: `Yes. ${brand} provides decking cleaning across ${cities} and ${business.region}. Contact us for a free quote.`,
      },
    ],
  },
  {
    slug: "render-cleaning",
    title: "Render & Wall Cleaning",
    shortTitle: "Render Cleaning",
    navTitle: "Render & Wall Cleaning",
    parentCategorySlug: "exterior-cleaning-johnstone-glasgow",
    description: `Render and exterior wall cleaning in ${cities} and ${business.region}. Soft washing removes algae, mould and staining from rendered surfaces safely. Free quotes from ${brand}.`,
    cardDescription: `Soft washing for rendered walls and exterior surfaces across ${cities}. Gentle, effective cleaning that does not damage the render.`,
    iconUrl: "https://c.animaapp.com/mhqqhnhjBr0jWt/assets/670f922acd8bf79374aa2c10_service-01.svg",
    iconAlt: "Render cleaning icon",
    image: assets.gallery[5],
    imageAlt: `Render and wall cleaning by ${brand}`,
    about: `${brand} cleans rendered walls and exterior surfaces using soft washing — a low-pressure method with specialist cleaning solutions that removes algae, moss, mould and staining without the risk of damage that high-pressure washing on render can cause. Properties across ${business.region} often develop black streaks and green discolouration on rendered surfaces, which can be effectively treated to restore the original appearance.`,
    why: `High-pressure washing on render can force water behind the surface and cause cracking, delamination and damp ingress. Soft washing uses low pressure with appropriate chemical treatments to clean deeply without these risks. ${brand} uses the correct method for rendered surfaces, ensuring the finish is clean without causing damage to the property.`,
    signsYouNeed: `Green or black discolouration on rendered walls, visible moss or algae growth, streaking from gutters, or a generally dingy appearance to exterior walls are signs that a professional soft wash is needed. Render that has not been cleaned for several years can look permanently discoloured when the surface is actually in good condition beneath the biological growth.`,
    options: `${brand} provides soft washing for smooth render, roughcast and pebbledash. Brick and stone walls can also be cleaned. A biocidal treatment is applied during cleaning to kill growth at the root and slow regrowth over the coming months. Contact ${brand} for a free quote on your property.`,
    localContext: `Rendered properties across ${cities} and ${business.region} are particularly susceptible to algae and moss in the Scottish climate. If you are searching for render cleaning near ${business.primaryCity} or ${business.secondaryCity}, ${brand} provides professional soft washing across the full service area.`,
    whatToExpect: `${brand} will discuss the wall surface type, area size and level of soiling before quoting. Soft washing is carried out at low pressure with specialist solutions, which are safe for most plants and surfaces when applied correctly. The treatment continues to work in the weeks following the clean as weather removes loosened growth.`,
    whyChooseUs: `${brand} uses the correct approach for rendered surfaces — not just blasting with a pressure washer. Customers appreciate the careful, professional approach and the lasting results. Free quotes are available across ${cities}.`,
    benefits: [
      "Low-pressure soft washing — safe for all render types.",
      "Removes algae, moss, mould and streaking from exterior walls.",
      "Biocidal treatment slows regrowth over the following months.",
      `Free quotes for properties across ${cities} and ${business.region}.`,
    ],
    process: [
      "Discuss the surface type and level of soiling for a free quote.",
      "Apply specialist soft washing solution at low pressure.",
      "Allow the treatment to work on deeper biological growth.",
      "Leave the surface clean — the treatment continues working with weather over the weeks ahead.",
    ],
    faq: [
      {
        question: "Is soft washing safe for pebbledash and roughcast render?",
        answer: `Yes. ${brand} uses low-pressure soft washing with appropriate solutions, making it safe for pebbledash, roughcast and smooth render.`,
      },
      {
        question: "How long does the render cleaning last?",
        answer: `Results typically last 2–4 years depending on local conditions and aspect. The biocidal treatment continues working with the weather to slow regrowth after the initial clean.`,
      },
      {
        question: `Do you offer render cleaning near ${business.primaryCity}?`,
        answer: `Yes. ${brand} provides render and wall soft washing across ${cities} and ${business.region}. Get in touch for a free quote.`,
      },
    ],
  },
  {
    slug: "roof-cleaning",
    title: "Roof Cleaning",
    shortTitle: "Roof Cleaning",
    navTitle: "Roof Cleaning",
    parentCategorySlug: "roof-cleaning-johnstone-glasgow",
    description: `Roof cleaning in ${cities} and ${business.region}. Safe soft washing with specialist treatment — no pressure washing. Moss removed by hand and biocidal treatment applied. Free quotes from ${brand}.`,
    cardDescription: `Specialist roof cleaning without pressure washing — moss removed by hand and treatment applied for lasting results across ${cities}.`,
    iconUrl: `${serviceIconBase}/670f922a6c5c1d8102612221_service-02.svg`,
    iconAlt: "Roof cleaning icon",
    image: assets.gallery[3],
    imageAlt: `Roof cleaning by ${brand} in ${business.primaryCity}`,
    about: `${brand} provides specialist roof cleaning across ${business.region} using a safe, non-damaging method. Unlike some contractors, ${brand} does not pressure wash roofs — this can blast away granules, lift tiles and force water under the surface, causing lasting damage. Instead, moss and debris are removed by hand and a specialist biocidal treatment is applied. The treatment works with the weather over the following months, killing off remaining growth and slowing regrowth for an extended period.`,
    why: `Moss and algae on roofs cause serious long-term problems — retaining moisture against tiles and slates accelerates wear, and growth can lift tiles and allow water ingress. Having the roof cleaned professionally protects the structure of the property and improves its appearance. ${brand}'s method is safe, thorough and effective without the risks associated with pressure washing roof tiles.`,
    signsYouNeed: `Visible moss or green growth on roof tiles, black or dark streaking on the roof surface, heavy moss build-up around ridges and valleys, or neighbours who have had roof cleaning work done on similar-aged properties are all signs it may be time to have your roof treated. Leaving heavy moss growth unchecked accelerates damage to tiles and the underlying roof structure.`,
    options: `${brand} cleans slate, clay tile, concrete tile and flat roofs. The process includes manual removal of moss and debris by hand, followed by application of a specialist biocidal treatment that continues working over the following months. Top-up treatments are recommended over time, but the heavy scraping work usually does not need to be repeated. Contact ${brand} for a free quote based on your roof size and condition.`,
    localContext: `Roofs across ${cities} and ${business.region} accumulate moss and algae growth quickly in the damp Scottish climate. If you are searching for roof cleaning near ${business.primaryCity} or ${business.secondaryCity}, ${brand} provides safe, professional treatment across the full service area without pressure washing.`,
    whatToExpect: `${brand} will assess the roof condition and provide a free quote based on size and level of growth. On the day, moss and debris are removed by hand and the specialist treatment is applied. The treatment then works with rain and weather over the following weeks and months, progressively cleaning the surface and inhibiting regrowth. You will notice the roof continuing to improve over time.`,
    whyChooseUs: `${brand} uses the correct, damage-free method for roof cleaning that many property owners do not know is available. Pressure washing a roof can cause real damage that is expensive to repair. The specialist treatment approach is safer, more effective long-term and protects the property value. Free quotes are available across ${cities}.`,
    benefits: [
      "No pressure washing — safe for all tile and slate types.",
      "Moss and debris removed by hand before treatment.",
      "Specialist biocidal treatment works with weather over the following months.",
      `Free roof cleaning quotes across ${cities} and ${business.region}.`,
    ],
    process: [
      "Contact ${brand} for a free quote based on roof size and condition.",
      "Moss and debris removed manually from the roof surface.",
      "Specialist biocidal treatment applied to kill remaining growth.",
      "Treatment works with weather over the following weeks and months for lasting results.",
    ],
    faq: [
      {
        question: "Do you pressure wash roofs?",
        answer: `No. ${brand} does not pressure wash roofs as this can damage tiles and force water under the surface. Moss is removed by hand and a specialist treatment is applied instead.`,
      },
      {
        question: "How long does roof cleaning treatment last?",
        answer: `The biocidal treatment continues working for months after application. Top-up treatments are recommended periodically, but the heavy manual removal work usually does not need to be repeated each time.`,
      },
      {
        question: `Do you offer roof cleaning near ${business.primaryCity} or ${business.secondaryCity}?`,
        answer: `Yes. ${brand} provides specialist roof cleaning across ${cities} and ${business.region}. Contact us for a free quote.`,
      },
      {
        question: "Can you clean flat roofs as well as pitched roofs?",
        answer: `Yes. ${brand} cleans flat roofs, pitched tile roofs and slate roofs. Get in touch with details of your roof for a specific quote.`,
      },
    ],
  },
  {
    slug: "free-quotes",
    title: "Free Quotes",
    shortTitle: "Free Quotes",
    navTitle: "Free Quotes",
    parentCategorySlug: null,
    description: `Request a free quote from ${brand} for pressure washing, roof cleaning and exterior cleaning across ${cities} and ${business.region}.`,
    cardDescription: `Message or call ${brand} on 07931 257558 to discuss your project and arrange a free, no-obligation quote.`,
    iconUrl: "https://c.animaapp.com/mhqqhnhjBr0jWt/assets/670f922acd8bf79374aa2c10_service-01.svg",
    iconAlt: "Free quote icon",
    image: assets.gallery[5],
    imageAlt: `Exterior cleaning completed by ${brand}`,
    about: `If you are not sure where to start, send ${brand} a message or call Peter directly on 07931 257558 with a few details about the work. We can discuss your options, confirm coverage for your area and advise on the best approach for your property.`,
    why: `A quick conversation or message helps clarify the work needed, confirm the service area and identify whether a site visit is required before providing a quote. There is no obligation to proceed.`,
    signsYouNeed: `If you know work is needed but are unsure of scope, cost or timing, a free quote is the best first step. Photos of the area and your postcode allow ${brand} to respond quickly with practical advice and a fair price.`,
    options: `${brand} quotes for all listed services: driveway cleaning, patio and path cleaning, decking cleaning, render and wall cleaning, and roof cleaning. You can call, message through the contact form, or email with details. Free quotes are available for residential and commercial properties across ${cities} and ${business.region}.`,
    localContext: `${brand} covers ${cities} and towns across ${business.region}, Inverclyde and East Renfrewshire. If you are in the local area, get in touch to confirm coverage for your property.`,
    whatToExpect: `Send a message or call with the service you need and your location. Share photos if they help explain the job. ${brand} will respond quickly, confirm coverage and arrange a quote or site visit as needed.`,
    whyChooseUs: `Free quotes, fair pricing and 100% recommendation rate from 18 Facebook reviews. Customers across ${cities} value the reliable service and honest advice they get from ${brand} before any work begins.`,
    benefits: [
      "Free, no-obligation quotes for all services.",
      "Quick response — photos help us quote faster.",
      `Local service across ${cities} and ${business.region}.`,
      "Honest advice on the most practical option for your property.",
    ],
    process: [
      "Send a message or call Peter on 07931 257558 with your enquiry.",
      "Share photos of the area and your postcode if they help.",
      "Receive a free quote — a site visit can be arranged where needed.",
      "Agree the work, timing and price before anything starts.",
    ],
    faq: [
      {
        question: "What details should I send for a quote?",
        answer: `A short description of the work, your location and photos of the area are most helpful. A postcode allows ${brand} to confirm coverage quickly.`,
      },
      {
        question: "Which areas do you quote for?",
        answer: `${brand} covers ${cities} and surrounding areas across ${business.region}, Inverclyde and East Renfrewshire.`,
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
