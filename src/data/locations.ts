import { business, brandName } from "@/data/business";
import { categories } from "@/data/categories";

export type LocationFaq = {
  question: string;
  answer: string;
};

export type LocationPage = {
  slug: string;
  name: string;
  shortName?: string;
  title: string;
  description: string;
  intro: string;
  nearby: string[];
  locationFaqs: LocationFaq[];
};

const brand = brandName();
const categoryNames = categories.map((c) => c.name).join(", ");

const makeLocationFaqs = (name: string): LocationFaq[] => [
  {
    question: `Do you cover ${name}?`,
    answer: `Yes. ${brand} provides ${categoryNames.toLowerCase()} in ${name} and nearby areas. Get in touch to confirm availability for your property.`,
  },
  {
    question: `What exterior cleaning services do you carry out in ${name}?`,
    answer: `${brand} helps customers in ${name} with ${categoryNames.toLowerCase()} and related exterior cleaning work. This includes driveways, patios, paths, decking, render and roofs.`,
  },
  {
    question: `How do I get a quote for cleaning work in ${name}?`,
    answer: `Contact ${brand} by phone on 07931 257558 or through the contact form with a brief description of the work and your location in ${name}. Photos are helpful. Free quotes are available with no obligation.`,
  },
  {
    question: `Do you serve areas near ${name}?`,
    answer: `Yes. ${brand} covers ${name} and surrounding towns across ${business.region} and neighbouring areas. If you are nearby, get in touch and we can confirm coverage.`,
  },
  {
    question: `Is there a pressure washing contractor near ${name}?`,
    answer: `Yes. ${brand} is a local exterior cleaning specialist serving ${name} and nearby areas with free quotes across ${business.region}.`,
  },
];

const locationEntries = [
  {
    slug: "johnstone",
    name: "Johnstone",
    description: `${brand} provides pressure washing, roof cleaning and exterior cleaning in Johnstone and surrounding areas of Renfrewshire.`,
    intro: `For customers in Johnstone, ${brand} provides reliable exterior cleaning including driveway pressure washing, patio cleaning, roof cleaning and decking restoration. Peter is based locally and covers Johnstone and the surrounding area with free quotes and tidy workmanship.`,
    nearby: ["Paisley", "Linwood", "Kilbarchan", "Howwood"],
  },
  {
    slug: "glasgow",
    name: "Glasgow",
    description: `${brand} provides pressure washing, roof cleaning and exterior cleaning in Glasgow and surrounding areas.`,
    intro: `${brand} covers Glasgow and surrounding areas with professional exterior cleaning services — driveway and patio pressure washing, roof cleaning, decking cleaning and render soft washing. Free quotes are available across the city and surrounding suburbs.`,
    nearby: ["Paisley", "Johnstone", "Barrhead", "Erskine"],
  },
  {
    slug: "paisley",
    name: "Paisley",
    description: `${brand} provides pressure washing, roof cleaning and exterior cleaning in Paisley and surrounding Renfrewshire areas.`,
    intro: `${brand} provides professional exterior cleaning in Paisley — from driveway and patio pressure washing to roof cleaning and render soft washing. Free quotes are available for residential and commercial properties across Paisley.`,
    nearby: ["Johnstone", "Glasgow", "Renfrew", "Elderslie"],
  },
  {
    slug: "renfrew",
    name: "Renfrew",
    description: `${brand} provides pressure washing, roof cleaning and exterior cleaning in Renfrew and surrounding areas.`,
    intro: `${brand} helps homeowners and businesses in Renfrew with driveway cleaning, patio washing, roof cleaning and exterior soft washing. Free quotes are available across Renfrew and the surrounding area.`,
    nearby: ["Paisley", "Glasgow", "Erskine", "Johnstone"],
  },
  {
    slug: "linwood",
    name: "Linwood",
    description: `${brand} provides pressure washing, roof cleaning and exterior cleaning in Linwood and surrounding Renfrewshire areas.`,
    intro: `${brand} covers Linwood with professional exterior cleaning — driveway pressure washing, patio and path cleaning, roof cleaning and decking restoration. Free quotes available with no obligation.`,
    nearby: ["Johnstone", "Paisley", "Kilbarchan", "Elderslie"],
  },
  {
    slug: "bridge-of-weir",
    name: "Bridge of Weir",
    description: `${brand} provides pressure washing, roof cleaning and exterior cleaning in Bridge of Weir and surrounding Renfrewshire areas.`,
    intro: `${brand} provides professional exterior cleaning in Bridge of Weir, covering driveways, patios, paths, decking, render and roofs. Free quotes available for properties in Bridge of Weir and surrounding villages.`,
    nearby: ["Kilbarchan", "Johnstone", "Howwood", "Linwood"],
  },
  {
    slug: "kilbarchan",
    name: "Kilbarchan",
    description: `${brand} provides pressure washing, roof cleaning and exterior cleaning in Kilbarchan and nearby Renfrewshire areas.`,
    intro: `${brand} covers Kilbarchan with reliable exterior cleaning services — pressure washing for driveways and patios, roof cleaning and exterior soft washing. Free quotes with no obligation.`,
    nearby: ["Johnstone", "Bridge of Weir", "Linwood", "Howwood"],
  },
  {
    slug: "howwood",
    name: "Howwood",
    description: `${brand} provides pressure washing, roof cleaning and exterior cleaning in Howwood and surrounding areas.`,
    intro: `Based in Howwood, ${brand} provides expert exterior cleaning across the local area — driveway washing, patio cleaning, roof treatment and decking restoration. Free quotes available in and around Howwood.`,
    nearby: ["Johnstone", "Kilbarchan", "Bridge of Weir", "Lochwinnoch"],
  },
  {
    slug: "erskine",
    name: "Erskine",
    description: `${brand} provides pressure washing, roof cleaning and exterior cleaning in Erskine and surrounding Renfrewshire areas.`,
    intro: `${brand} provides professional exterior cleaning in Erskine — driveway and patio pressure washing, roof cleaning and exterior soft washing for render. Free quotes available across Erskine.`,
    nearby: ["Renfrew", "Glasgow", "Paisley", "Johnstone"],
  },
  {
    slug: "elderslie",
    name: "Elderslie",
    description: `${brand} provides pressure washing, roof cleaning and exterior cleaning in Elderslie and surrounding areas.`,
    intro: `${brand} covers Elderslie with professional exterior cleaning — driveway and patio pressure washing, paving restoration, roof cleaning and render soft washing. Free quotes available.`,
    nearby: ["Paisley", "Johnstone", "Linwood", "Barrhead"],
  },
  {
    slug: "barrhead",
    name: "Barrhead",
    description: `${brand} provides pressure washing, roof cleaning and exterior cleaning in Barrhead and East Renfrewshire.`,
    intro: `${brand} helps homeowners in Barrhead with professional exterior cleaning — driveway washing, patio and path cleaning, roof treatment and exterior soft washing. Free quotes available for properties across Barrhead.`,
    nearby: ["Glasgow", "Paisley", "Newton-Mearns", "Elderslie"],
  },
  {
    slug: "newton-mearns",
    name: "Newton Mearns",
    shortName: "Newton Mearns",
    description: `${brand} provides pressure washing, roof cleaning and exterior cleaning in Newton Mearns and East Renfrewshire.`,
    intro: `${brand} covers Newton Mearns with professional exterior cleaning services — pressure washing for driveways and patios, roof cleaning, decking cleaning and render soft washing. Free quotes available.`,
    nearby: ["Barrhead", "Glasgow", "Clarkston", "Paisley"],
  },
  {
    slug: "clarkston",
    name: "Clarkston",
    description: `${brand} provides pressure washing, roof cleaning and exterior cleaning in Clarkston and East Renfrewshire.`,
    intro: `${brand} provides exterior cleaning in Clarkston — driveway pressure washing, patio cleaning, roof treatment and exterior soft washing. Free quotes available for Clarkston and surrounding East Renfrewshire areas.`,
    nearby: ["Newton-Mearns", "Barrhead", "Glasgow", "Paisley"],
  },
  {
    slug: "greenock",
    name: "Greenock",
    description: `${brand} provides pressure washing, roof cleaning and exterior cleaning in Greenock and Inverclyde.`,
    intro: `${brand} covers Greenock and the wider Inverclyde area with professional exterior cleaning — driveway and patio pressure washing, roof cleaning and exterior soft washing. Free quotes available.`,
    nearby: ["Johnstone", "Bridge of Weir", "Paisley", "Kilbarchan"],
  },
  {
    slug: "lochwinnoch",
    name: "Lochwinnoch",
    description: `${brand} provides pressure washing, roof cleaning and exterior cleaning in Lochwinnoch and surrounding Renfrewshire areas.`,
    intro: `${brand} covers Lochwinnoch with professional exterior cleaning for driveways, patios, roofs and decking. Free quotes available in and around Lochwinnoch.`,
    nearby: ["Howwood", "Kilbarchan", "Bridge of Weir", "Johnstone"],
  },
];

export const locations: LocationPage[] = locationEntries.map((location) => ({
  ...location,
  title: `Exterior Cleaning in ${location.name} | ${brand}`,
  locationFaqs: makeLocationFaqs(location.name),
}));

export const getNearbyLocationLinks = (location: LocationPage) =>
  location.nearby
    .map((name) => locations.find((item) => item.name === name))
    .filter((item): item is LocationPage => Boolean(item));

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);
