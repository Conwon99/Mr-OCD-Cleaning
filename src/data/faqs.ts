import { brandName, business, citiesLabel } from "@/data/business";

export type FaqItem = {
  question: string;
  answer: string;
};

const brand = brandName();
const cities = citiesLabel();

export const homepageFaqs: FaqItem[] = [
  {
    question: "Do you offer free quotes?",
    answer: `Yes. Contact ${brand} by phone or message with details of your enquiry and we will discuss a free, no-obligation quote. Photos of the area are always helpful.`,
  },
  {
    question: "What areas do you cover?",
    answer: `${brand} serves ${cities} and surrounding areas across ${business.region}, Inverclyde and East Renfrewshire. If you are nearby, get in touch and we can confirm availability.`,
  },
  {
    question: "What exterior cleaning services do you offer?",
    answer: `${brand} provides pressure washing for driveways, patios, paths and mono blocking; soft washing and specialist treatment for roofs; and exterior cleaning for decking and rendered walls.`,
  },
  {
    question: "Do you pressure wash roofs?",
    answer: `No — we do not pressure wash roofs as this can cause damage. Instead, we use a safe soft washing method with all moss and debris removed by hand and a specialist biocidal treatment applied that works with the weather over the following months.`,
  },
  {
    question: "How do I get started?",
    answer: `Call ${brand} on 07931 257558 or use the contact form with a brief description of the work and your location. Photos of the area are helpful and allow us to respond quickly.`,
  },
];

export const buildFaqSchema = (faqs: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
