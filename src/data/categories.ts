import { services, type ServicePage } from "@/data/services";
import { business, brandName, citiesLabel } from "@/data/business";

export type LocationServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceCategory = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  localParagraph: string;
  image: string;
  imageAlt: string;
  serviceSlugs: string[];
  /** Matrix page SEO fields — used by locationServices.ts */
  matrixTitleSuffix: string;
  serviceNameLower: string;
  contractorPhrase: string;
  nearMePhrase: string;
  metaTemplate: (displayName: string) => string;
  introTemplate: (town: string) => string;
  localTemplate: (town: string, nearby: string[]) => string;
  bodyTemplate: (town: string) => string;
  faqTemplates: (town: string) => LocationServiceFaq[];
};

const brand = brandName();
const cities = citiesLabel();
const { assets, region } = business;

export const categories: ServiceCategory[] = [
  {
    slug: "pressure-washing-johnstone-glasgow",
    name: "Pressure Washing",
    title: `Pressure Washing in ${cities}`,
    description: `Professional pressure washing for driveways, patios and paths across ${cities} and ${region}. Restore block paving, tarmac and paving slabs with ${brand}.`,
    intro: `${brand} provides professional pressure washing for driveways, patios, paths and mono blocking across ${region}. Using commercial-grade equipment, surfaces are restored to like-new condition with no mess left behind and free quotes available.`,
    localParagraph: `Properties across ${cities} and the surrounding area accumulate moss, algae and staining in the Scottish climate. ${brand} works locally and provides reliable pressure washing with fair pricing and tidy workmanship.`,
    image: assets.gallery[0],
    imageAlt: `Pressure washing by ${brand} in ${business.primaryCity}`,
    serviceSlugs: ["driveway-cleaning", "patio-cleaning"],
    matrixTitleSuffix: "Pressure Washing",
    serviceNameLower: "pressure washing",
    contractorPhrase: "pressure washing specialist",
    nearMePhrase: "pressure washing near me",
    metaTemplate: (displayName) =>
      `Professional pressure washing in ${displayName} by ${brand}. Driveways, patios and paths restored with free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} provides professional pressure washing in ${town} for driveways, patios, paths and block paving. Surfaces are restored thoroughly with no mess left behind and free quotes available.`,
    localTemplate: (town, nearby) =>
      `Properties in ${town} often develop moss and algae growth on driveways and patios in the local climate. If you are searching for pressure washing near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `From driveway cleaning to patio washing and path restoration, ${brand} helps customers in ${town} with professional pressure washing. All surfaces are left clean and tidy. Contact ${brand} for a free quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you provide pressure washing in ${town}?`,
        answer: `Yes. ${brand} provides driveway, patio and path pressure washing in ${town} and nearby areas. Free quotes are available.`,
      },
      {
        question: `Can you clean driveways and patios in ${town}?`,
        answer: `Yes. ${brand} cleans block paving driveways, tarmac, concrete patios and paving slabs in ${town}. Contact us with your surface type for a free quote.`,
      },
      {
        question: `How do I get a pressure washing quote in ${town}?`,
        answer: `Call ${brand} or use the contact form with photos and your location in ${town}. Free, no-obligation quotes are available.`,
      },
    ],
  },
  {
    slug: "roof-cleaning-johnstone-glasgow",
    name: "Roof Cleaning",
    title: `Roof Cleaning in ${cities}`,
    description: `Safe, professional roof cleaning across ${cities} and ${region}. No pressure washing — moss removed by hand and specialist treatment applied for lasting results. Free quotes from ${brand}.`,
    intro: `${brand} provides safe, specialist roof cleaning across ${region}. Moss and debris are removed by hand — not pressure washed — and a biocidal treatment is applied that works with the weather over the following months. This protects tiles from damage and delivers lasting results.`,
    localParagraph: `Roofs across ${cities} and the wider ${region} area accumulate moss and algae quickly in the damp Scottish climate. ${brand} provides the correct, safe method for roof cleaning — no pressure washing — across the full service area.`,
    image: assets.gallery[3],
    imageAlt: `Roof cleaning by ${brand} in ${business.primaryCity}`,
    serviceSlugs: ["roof-cleaning"],
    matrixTitleSuffix: "Roof Cleaning",
    serviceNameLower: "roof cleaning",
    contractorPhrase: "roof cleaning specialist",
    nearMePhrase: "roof cleaning near me",
    metaTemplate: (displayName) =>
      `Safe roof cleaning in ${displayName} by ${brand}. Moss removed by hand, specialist treatment applied — no pressure washing. Free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} provides safe, professional roof cleaning in ${town}. Moss is removed by hand and a specialist biocidal treatment applied — no pressure washing that could damage tiles. Free quotes available.`,
    localTemplate: (town, nearby) =>
      `Roofs in ${town} build up moss and algae growth that can damage tiles if left untreated. If you are searching for roof cleaning near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `${brand} helps homeowners in ${town} with safe, effective roof cleaning. Moss is removed manually and a specialist treatment applied that continues working over the following months. Contact ${brand} for a free roof cleaning quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you offer roof cleaning in ${town}?`,
        answer: `Yes. ${brand} provides specialist roof cleaning in ${town} — moss removed by hand and biocidal treatment applied. No pressure washing. Free quotes available.`,
      },
      {
        question: `Is pressure washing safe for roofs in ${town}?`,
        answer: `No — pressure washing can damage tiles and lift slates. ${brand} uses a safe soft wash and manual removal method for all roof cleaning in ${town}.`,
      },
      {
        question: `How do I get a roof cleaning quote in ${town}?`,
        answer: `Contact ${brand} with your roof type and approximate size. Photos help us provide an accurate quote for roof cleaning in ${town}.`,
      },
    ],
  },
  {
    slug: "exterior-cleaning-johnstone-glasgow",
    name: "Exterior Cleaning",
    title: `Exterior Cleaning in ${cities}`,
    description: `Professional exterior cleaning for decking, render and walls across ${cities} and ${region}. Soft washing and pressure washing to restore external surfaces. Free quotes from ${brand}.`,
    intro: `${brand} provides exterior cleaning for decking, rendered walls, brick and other external surfaces across ${region}. The right method is used for each surface — soft washing for render and delicate materials, pressure washing where appropriate — leaving properties looking their best.`,
    localParagraph: `External surfaces across ${cities} and ${region} need regular attention to prevent algae, mould and staining from building up. ${brand} works across the full service area with the equipment and expertise to handle all external surface types.`,
    image: assets.gallery[4],
    imageAlt: `Exterior cleaning by ${brand}`,
    serviceSlugs: ["decking-cleaning", "render-cleaning"],
    matrixTitleSuffix: "Exterior Cleaning",
    serviceNameLower: "exterior cleaning",
    contractorPhrase: "exterior cleaning specialist",
    nearMePhrase: "exterior cleaning near me",
    metaTemplate: (displayName) =>
      `Professional exterior cleaning in ${displayName} by ${brand}. Decking, render and walls restored with the right method for each surface. Free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} provides professional exterior cleaning in ${town} for decking, rendered walls and other external surfaces. Soft washing and pressure washing used appropriately for each surface type. Free quotes available.`,
    localTemplate: (town, nearby) =>
      `Exterior surfaces in ${town} accumulate algae and moss growth throughout the year. If you are searching for exterior cleaning near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `${brand} helps customers in ${town} restore decking, rendered walls and other exterior surfaces. The correct method is used for each material to ensure effective cleaning without damage. Contact ${brand} for a free exterior cleaning quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you offer exterior cleaning in ${town}?`,
        answer: `Yes. ${brand} provides decking cleaning, render cleaning and general exterior surface cleaning in ${town}. Free quotes are available.`,
      },
      {
        question: `Can you clean rendered walls in ${town}?`,
        answer: `Yes. ${brand} uses soft washing for render in ${town} — low pressure with specialist solutions to clean without risk of damage.`,
      },
      {
        question: `How do I book exterior cleaning in ${town}?`,
        answer: `Contact ${brand} with details of the surfaces you need cleaned and your location in ${town}. Photos are helpful. Free quotes with no obligation to proceed.`,
      },
    ],
  },
];

export const getCategoryBySlug = (slug: string) =>
  categories.find((category) => category.slug === slug);

export const getCategoryForService = (serviceSlug: string) =>
  categories.find((category) => category.serviceSlugs.includes(serviceSlug));

export const getServicesForCategory = (category: ServiceCategory): ServicePage[] =>
  category.serviceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is ServicePage => Boolean(service));

export const getRelatedServices = (serviceSlug: string): ServicePage[] => {
  const category = getCategoryForService(serviceSlug);
  if (!category) return [];
  return getServicesForCategory(category).filter((service) => service.slug !== serviceSlug);
};

export const getFormServiceOptions = (): string[] => [
  ...categories.map((category) => category.name),
  ...services.filter((service) => service.slug !== "free-quotes").map((service) => service.shortTitle),
  "Other / Not Sure",
];
