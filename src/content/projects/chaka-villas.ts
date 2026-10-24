import { imagesFor } from "../image";
import type { Project } from "../types";

const slug = "chaka-villas";
const img = imagesFor(slug);

export const chakaVillas: Project = {
  slug,
  title: "Chaka Villas",
  category: "Hillside residences",
  location: "Chaka Phase One, Addis Ababa",
  facts: [
    { label: "Houses", value: "214: 120 front access, 94 rear access" },
    { label: "Typologies", value: "Two four-bedroom villa types" },
    { label: "Role", value: "Lead architect" },
  ],
  summary:
    "Villas set into the forested slopes of Chaka Phase One, in two types: one entered at the ground, one entered from above and descending the hill.",
  intro: [
    "Set on the slopes of Chaka Phase One, these villas look out over the city across uninterrupted views. The first villa type has ground-level access leading up to sunlit living spaces; the second has a top-entry design that descends the hillside.",
    "Strong horizontal lines, floor-to-ceiling windows and natural materials join inside and outside. Open-plan interiors lead onto infinity pools and outdoor lounges, in a minimal but warm language for hillside living in Addis Ababa.",
  ],
  section: { kind: "building", above: 3, below: 1, label: "214 houses" },
  hero: img("hero", "render", "Aerial view of long, flat-roofed villas stepping down a forested hillside along winding roads.", { focus: "45% 50%" }),
  blocks: [
    {
      type: "pair",
      images: [
        img("masterplan", "site", "Masterplan of the hillside with house plots following the contours and arrows marking access points.", { caption: "Masterplan" }),
        img("access-plan", "site", "Access plan colouring the 94 rear-access houses red and the 120 front-access houses blue.", { caption: "94 rear-access and 120 front-access houses" }),
      ],
    },
    { type: "chapter", title: "Typology 1", subtitle: "High-end four-bedroom luxury villa" },
    {
      type: "pair",
      images: [
        img("t1-street", "render", "Typology 1 from the street: timber garage doors below cantilevered white floors against the trees.", { caption: "Street level" }),
        img("t1-above", "render", "Typology 1 from above: planted terraces and a black infinity pool.", { caption: "From above" }),
      ],
    },
    {
      type: "sequence",
      columns: 2,
      images: [
        img("t1-plan-basement", "plan", "Typology 1 basement floor plan with parking, gym and pool.", { caption: "Basement" }),
        img("t1-plan-ground", "plan", "Typology 1 ground floor plan with living and dining hall.", { caption: "Ground floor" }),
        img("t1-plan-first", "plan", "Typology 1 first floor plan with bedrooms.", { caption: "First floor" }),
        img("t1-plan-second", "plan", "Typology 1 second floor plan.", { caption: "Second floor" }),
      ],
    },
    { type: "chapter", title: "Typology 2", subtitle: "High-end four-bedroom luxury villa" },
    { type: "full", image: img("t2-hillside", "render", "Typology 2: long white terraces emerging from dense trees on the slope.") },
    {
      type: "sequence",
      columns: 2,
      images: [
        img("t2-plan-ground", "plan", "Typology 2 ground floor plan.", { caption: "Ground floor" }),
        img("t2-plan-first", "plan", "Typology 2 first floor plan.", { caption: "First floor" }),
        img("t2-plan-second", "plan", "Typology 2 second floor plan.", { caption: "Second floor" }),
        img("t2-plan-third", "plan", "Typology 2 third floor plan.", { caption: "Third floor" }),
      ],
    },
    { type: "inset", image: img("t2-above", "render", "Typology 2 from above: the roof, planted terraces and pool cut into the forest."), align: "right" },
    { type: "chapter", title: "Interiors" },
    {
      type: "pair",
      images: [
        img("living-01", "render", "Living room with a grand piano, low sofas and timber wall.", { caption: "Living, dining, kitchen" }),
        img("dining", "render", "Dining table under a spiral pendant, with the terrace beyond.", { caption: "Living, dining, kitchen" }),
      ],
    },
    {
      type: "pair",
      images: [
        img("kitchen", "render", "Kitchen and dining area with timber cabinetry.", { caption: "Living, dining, kitchen" }),
        img("family-room", "render", "Family room with a sunken fire pit and white sofas.", { caption: "Family room" }),
      ],
      offset: true,
    },
    {
      type: "pair",
      images: [
        img("master-bedroom", "render", "Master bedroom with slatted wall panels and a painting above the bed.", { caption: "Master bedroom" }),
        img("bedroom-01", "render", "Bedroom with tall grey curtains.", { caption: "Bedroom" }),
      ],
    },
  ],
};
