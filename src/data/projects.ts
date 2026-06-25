import { business, brandName } from "@/data/business";

export type ProjectPage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  details: string;
  highlights: string[];
  serviceType: string;
  location: string;
  image: string;
  imageAlt: string;
};

const brand = brandName();
const { assets } = business;

export const projects: ProjectPage[] = [
  {
    slug: "driveway-pressure-washing-johnstone",
    title: `Driveway Pressure Washing in ${business.primaryCity}`,
    description: `Block paving driveway restored by ${brand} in ${business.primaryCity}. Moss, algae and staining removed — surface left looking like new.`,
    intro: `This project involved a full pressure wash of a block paving driveway in ${business.primaryCity} that had built up significant moss and algae growth over several years. The customer was amazed at the colour of the paving that emerged.`,
    details: `${brand} assessed the driveway, identified the areas of heaviest moss and algae growth and worked methodically across the full surface. High-pressure washing removed years of discolouration, revealing the original block paving colours that the customer had forgotten about. The joints were cleaned throughout and the area left spotless with no mess. Peter completed the job in a single visit and the customer was able to use the driveway immediately. Customers across ${business.region} often find that a single professional pressure wash makes a bigger difference than they expected — driveways that looked permanently grey or green are frequently restored to their original appearance.`,
    highlights: [
      "Full block paving driveway restored in a single visit",
      "Years of moss, algae and discolouration removed",
      "Original paving colours revealed",
      "No mess left — area usable immediately after completion",
    ],
    serviceType: "Pressure Washing",
    location: business.primaryCity,
    image: assets.gallery[0],
    imageAlt: `Driveway pressure washing by ${brand} in ${business.primaryCity}`,
  },
  {
    slug: "patio-and-path-cleaning-renfrewshire",
    title: "Patio and Path Cleaning in Renfrewshire",
    description: `Patio, paths and garden paving restored by ${brand} in Renfrewshire. Moss and algae removed from all surfaces in a single visit.`,
    intro: `This project covered a full patio and surrounding garden paths for a homeowner in Renfrewshire. The paving slabs had become slippery with moss growth and the customer wanted the whole outdoor space cleaned in one visit.`,
    details: `${brand} cleaned the main patio area, garden steps, side paths and boundary paving in a single visit. The pressure washing removed heavy moss and algae growth from paving slabs that had become genuinely slippery underfoot. The customer noted they had not realised the slabs were a different colour until the moss was removed. Peter worked carefully around garden planting and left the entire outdoor area clean and tidy. The job included cleaning under garden furniture and around planting borders. Customers in ${business.region} regularly book patio and path cleaning together — covering the full outdoor space is often more cost-effective than treating areas separately.`,
    highlights: [
      "Full patio, steps and garden paths cleaned in a single visit",
      "Slippery moss growth removed from all paved surfaces",
      "Original slab colours revealed underneath",
      "Work carried out carefully around planting and garden furniture",
    ],
    serviceType: "Pressure Washing",
    location: "Renfrewshire",
    image: assets.gallery[1],
    imageAlt: `Patio and path cleaning by ${brand} in Renfrewshire`,
  },
  {
    slug: "roof-cleaning-johnstone",
    title: `Roof Cleaning in ${business.primaryCity}`,
    description: `Specialist roof cleaning by ${brand} in ${business.primaryCity}. Moss removed by hand and biocidal treatment applied — no pressure washing used.`,
    intro: `This roof cleaning project in ${business.primaryCity} involved heavy moss growth across the full roof area. ${brand} removed all moss by hand and applied a specialist biocidal treatment to kill remaining growth and inhibit future regrowth.`,
    details: `The property had significant moss growth concentrated around the ridge and north-facing sections of the roof. ${brand} removed all loose moss and debris by hand — not by pressure washing, which can damage tiles and force water under the surface. Once the manual removal was complete, a specialist biocidal treatment was applied across the full roof area. This treatment works with rain and weather over the following weeks and months, progressively clearing remaining growth and inhibiting regrowth for an extended period. The customer noticed the roof continuing to improve in the weeks after the treatment as the solution did its work. Roof cleaning in ${business.region} is particularly relevant given the damp climate, which accelerates moss growth on north-facing and shaded roof sections.`,
    highlights: [
      "Heavy moss growth removed manually across the full roof",
      "Specialist biocidal treatment applied for lasting results",
      "No pressure washing — tiles protected from damage",
      "Roof continued to improve in the weeks following treatment",
    ],
    serviceType: "Roof Cleaning",
    location: business.primaryCity,
    image: assets.gallery[3],
    imageAlt: `Roof cleaning by ${brand} in ${business.primaryCity}`,
  },
  {
    slug: "decking-cleaning-commercial-johnstone",
    title: "Commercial Decking Cleaning in Renfrewshire",
    description: `Restaurant decking restored by ${brand} in Renfrewshire. High standard commercial clean completed promptly for reopening.`,
    intro: `This project involved cleaning the exterior decking area of a restaurant in Renfrewshire ahead of reopening. ${brand} attended promptly, assessed the area and completed the clean to the highest standard with the job done on time.`,
    details: `The restaurant required the full decking area cleaned before reopening to customers. ${brand} came out promptly following the initial enquiry to assess the decking type and condition, confirmed a competitive quote and completed the work within the required timeframe. The decking was cleaned thoroughly, removing algae and general soiling that had built up over the winter period. The result was a clean, safe surface ready for outdoor dining. Commercial premises require the same professional standards as residential work — in some cases with tighter scheduling requirements. ${brand} covers both residential and commercial exterior cleaning across ${business.region} with the same commitment to quality and reliable attendance.`,
    highlights: [
      "Commercial restaurant decking restored to highest standard",
      "Prompt attendance and competitive quote from initial enquiry",
      "Completed within required timeframe for reopening",
      "Algae and winter soiling fully removed from all decking areas",
    ],
    serviceType: "Exterior Cleaning",
    location: "Renfrewshire",
    image: assets.gallery[4],
    imageAlt: `Commercial decking cleaning by ${brand}`,
  },
  {
    slug: "mono-blocking-restoration-glasgow",
    title: "Mono Blocking Restoration in Glasgow",
    description: `Driveway and garden mono blocking restored by ${brand} in Glasgow. Block paving cleaned to look as good as new.`,
    intro: `This project covered a full mono blocking driveway and rear garden area for a homeowner in Glasgow. The customer was looking for results on block paving that had not been cleaned professionally for several years.`,
    details: `${brand} cleaned the full mono blocking driveway at the front of the property and the block-paved rear garden area in a single visit. The mono blocking had developed significant moss and algae growth between the joints and across the paving surface. High-pressure washing removed the build-up thoroughly, restoring the original colour and appearance of the blocks. The customer noted the driveway and back garden looked as good as new — the kind of result that consistently impresses. Mono blocking and block paving respond particularly well to professional pressure washing because the original surface is preserved beneath the biological growth rather than being permanently damaged. Customers across Glasgow regularly contact ${brand} for driveway and patio restoration as part of wider property maintenance.`,
    highlights: [
      "Full driveway and rear garden mono blocking cleaned in one visit",
      "Significant moss and algae growth removed from all paved areas",
      "Original block colour restored — looked as good as new",
      "Front and rear areas covered in a single efficient visit",
    ],
    serviceType: "Pressure Washing",
    location: "Glasgow",
    image: assets.gallery[2],
    imageAlt: `Mono blocking restoration by ${brand} in Glasgow`,
  },
  {
    slug: "render-soft-wash-renfrewshire",
    title: "Render Soft Washing in Renfrewshire",
    description: `Rendered exterior walls cleaned by ${brand} in Renfrewshire. Soft washing removed algae and discolouration safely without risk of damage.`,
    intro: `This project involved soft washing a rendered property in Renfrewshire where algae and black streaking had built up on the exterior walls. The soft wash method was used to clean effectively without the risk of damage associated with pressure washing render.`,
    details: `The property had developed significant green algae discolouration and dark streaking on the rendered exterior walls, particularly on the north-facing elevations. ${brand} used a low-pressure soft washing approach with specialist cleaning solutions to treat the render safely. High-pressure washing on render can cause delamination, cracking and water ingress — soft washing cleans effectively without these risks. A biocidal treatment was applied as part of the process, killing growth at the root and inhibiting regrowth over the following months. The walls were visibly improved immediately after treatment and continued to improve further as the treatment worked with the weather. Properties across ${business.region} with rendered exteriors benefit significantly from periodic soft washing to maintain appearance and protect the render surface.`,
    highlights: [
      "Rendered exterior walls cleaned with safe soft washing method",
      "Algae, black streaking and discolouration removed",
      "Low-pressure treatment — no risk of damage to render",
      "Biocidal treatment inhibits regrowth over the following months",
    ],
    serviceType: "Exterior Cleaning",
    location: "Renfrewshire",
    image: assets.gallery[5],
    imageAlt: `Render soft washing by ${brand} in Renfrewshire`,
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
