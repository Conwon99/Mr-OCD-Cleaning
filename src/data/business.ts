/** Central business config — single source of truth for NAP, SEO, assets, and schema. */

export type BusinessAddress = {
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
  postalCode?: string;
  streetAddress?: string;
};

export type BusinessAssets = {
  hero: string;
  logo: string;
  about: string;
  gallery: [string, string, string, string, string, string];
};

export type OpeningHoursSpec = {
  dayOfWeek: string[];
  opens: string;
  closes: string;
};

export type BusinessConfig = {
  businessName: string;
  alternateName: string;
  tagline: string;
  gbpCategory: string;
  phone: string;
  phoneDisplay: string;
  phoneLocal: string;
  /** Set to enable client-side tracking number swap; null = canonical everywhere */
  trackingPhone: string | null;
  trackingPhoneLocal: string | null;
  email: string;
  siteUrl: string;
  facebookUrl: string;
  googleMapsUrl: string;
  whatsappUrl: string | null;
  primaryCity: string;
  secondaryCity: string;
  region: string;
  geoRegion: string;
  address: BusinessAddress;
  mapCenter: [number, number];
  serviceAreaPolygon: [number, number][];
  assets: BusinessAssets;
  serviceTypes: string[];
  openingHours: OpeningHoursSpec[];
  /** Google Analytics measurement ID — empty string to disable */
  googleAnalyticsId: string;
  /** Google Ads conversion ID — empty string to disable */
  googleAdsId: string;
};

export const business: BusinessConfig = {
  businessName: "Mr OCD Cleaning",
  alternateName: "Mr OCD Cleaning",
  tagline: "Professional exterior cleaning — pressure washing, soft washing and roof cleaning with tidy results and free quotes.",
  gbpCategory: "Cleaning Service",

  phone: "+44 7931 257558",
  phoneDisplay: "+44 7931 257558",
  phoneLocal: "07931 257558",
  trackingPhone: null,
  trackingPhoneLocal: null,

  email: "mrocdcleaning@yahoo.com",
  siteUrl: "https://www.mrocdcleaning.co.uk",
  facebookUrl: "https://www.facebook.com/share/1EF4WTqtMq/",
  googleMapsUrl: "https://maps.google.com/maps?q=55.80863036%2C-4.55137010&hl=en",
  whatsappUrl: null,

  primaryCity: "Johnstone",
  secondaryCity: "Glasgow",
  region: "Renfrewshire",
  geoRegion: "GB-SCT",

  address: {
    addressLocality: "Johnstone",
    addressRegion: "Renfrewshire",
    addressCountry: "GB",
    streetAddress: "Howwood",
  },

  mapCenter: [55.84, -4.50],
  serviceAreaPolygon: [
    [55.75, -4.85],
    [55.75, -4.18],
    [55.97, -4.18],
    [55.97, -4.85],
    [55.75, -4.85],
  ],

  assets: {
    hero: "/mr-ocd-hero.jpg",
    logo: "/mr-ocd-logo.png",
    about: "/mr-ocd-about.jpg",
    gallery: ["/mr-ocd-gal_01.jpg", "/mr-ocd-gal_02.jpg", "/mr-ocd-gal_03.jpg", "/mr-ocd-gal_04.jpg", "/mr-ocd-gal_05.jpg", "/mr-ocd-gal_06.jpg"],
  },

  serviceTypes: [
    "Pressure washing",
    "Soft washing",
    "Roof cleaning",
    "Driveway cleaning",
    "Patio and path cleaning",
    "Decking cleaning",
    "Render and wall cleaning",
    "Free quotes",
  ],

  openingHours: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],

  googleAnalyticsId: "",
  googleAdsId: "",
};

export const SITE_URL = business.siteUrl;

export const absoluteUrl = (path = ""): string => {
  if (!path) return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export const truncateMeta = (text: string, maxLength = 155): string => {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLength) return cleaned;
  return `${cleaned.slice(0, maxLength - 1).replace(/[\s,.;:-]+$/, "")}…`;
};

export const brandName = () => business.alternateName;

export const citiesLabel = () => `${business.primaryCity} & ${business.secondaryCity}`;

export const homepageTitle = () =>
  `${business.alternateName} | Pressure Washing & Exterior Cleaning in ${citiesLabel()}`;

export const homepageDescription = () =>
  truncateMeta(
    `${business.alternateName} provides professional pressure washing, soft washing and roof cleaning across ${citiesLabel()} and ${business.region}. Free quotes available.`,
  );

export const homepageH1 = () => `Pressure Washing & Exterior Cleaning in ${citiesLabel()}`;

export const defaultKeywords = () =>
  `pressure washing ${business.primaryCity}, exterior cleaning ${business.secondaryCity}, roof cleaning, ${business.alternateName}, free quote`;

export const defaultOgImageAlt = () =>
  `${business.alternateName} — pressure washing and exterior cleaning in ${citiesLabel()}`;

export const schemaImages = (): string[] => [
  absoluteUrl(business.assets.logo),
  absoluteUrl(business.assets.hero),
  absoluteUrl(business.assets.about),
  ...business.assets.gallery.map((path) => absoluteUrl(path)),
];
