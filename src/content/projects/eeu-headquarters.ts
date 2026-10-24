import { imagesFor } from "../image";
import type { Project } from "../types";

const slug = "eeu-headquarters";
const img = imagesFor(slug);

export const eeuHeadquarters: Project = {
  slug,
  title: "EEU Headquarters",
  short: "EEU Headquarters",
  category: "High-rise mixed-use tower",
  location: "Roosevelt Street, Addis Ababa",
  facts: [
    { label: "Client", value: "Ethiopian Electric Utility" },
    { label: "Height", value: "4B + G + 30" },
    { label: "Programme", value: "Offices, auditorium, street-front retail" },
    { label: "Street frontage", value: "120 m" },
    { label: "Recognition", value: "Second place, design competition" },
    { label: "Role", value: "Lead architect" },
  ],
  summary:
    "A 30-storey headquarters for the Ethiopian Electric Utility on Roosevelt Street: a diamond-patterned glass tower, an auditorium and a retail block arranged around a shared public court.",
  intro: [
    "The Ethiopian Electric Utility headquarters is a 4B+G+30 landmark tower on Roosevelt Street, Addis Ababa, bringing together corporate offices, an auditorium and commercial space in three interconnected volumes: a glazed 30-storey office tower with a diamond-patterned façade, a flexible auditorium, and an active street-front retail block.",
    "Positioned for visibility and urban engagement, the tower’s transparent exterior is meant to stand for innovation while respecting the cityscape; the commercial wing energises the street and the auditorium supports corporate events. Recognised with second place in its design competition, the project uses energy-efficient glazing in line with the client’s sustainability goals.",
  ],
  section: { kind: "building", above: 31, below: 4, label: "4B+G+30" },
  surface: "night",
  hero: img("hero", "render", "Night aerial of the EEU tower, its rounded edges outlined in warm light above the podium and a lit boulevard.", { focus: "40% 50%" }),
  blocks: [
    {
      type: "sequence",
      title: "Conceptual development",
      columns: 4,
      images: [
        img("concept-01", "diagram", "Massing study 1: the empty pentagonal site at the T-junction.", {
          caption: "The pentagon-shaped site has 120 m of street frontage on a T-junction with a partial expressway and slopes about 3 m from right to left.",
        }),
        img("concept-02", "diagram", "Massing study 2: a single volume set back from the street edge.", {
          caption: "A 12 m setback opens a public frontage for the pedestrian flow expected in the CBD; the basement entrance sits away from the junction.",
        }),
        img("concept-03", "diagram", "Massing study 3: separate office tower, commercial block and auditorium.", {
          caption: "Three programme zones (office tower, commercial block, auditorium) give clear functional zoning and a human scale to each block.",
        }),
        img("concept-04", "diagram", "Massing study 4: the three blocks facing a central green court.", {
          caption: "The blocks face a central court of sculpture and planting, linked by a depressed ground floor that keeps the court apart from the street.",
        }),
      ],
    },
    { type: "drawing", image: img("sections", "section", "Long sections through the auditorium, tower base and basements."), title: "Sections" },
    {
      type: "pair",
      images: [
        img("tower-entrance", "render", "Street view of the tower entrance, cyclists and traffic passing the diamond-gridded glass base.", { caption: "Tower entrance" }),
        img("podium-lobby", "render", "Stepped seating and sculpture in the shared court between the blocks.", { caption: "Podium lobby" }),
      ],
    },
    {
      type: "sequence",
      title: "Floor plans",
      columns: 2,
      images: [
        img("plan-ground", "plan", "Ground floor plan showing the auditorium, the retail block and the tower core around the central court.", { caption: "Ground floor" }),
        img("plans-upper", "plan", "Upper floor plans of the rounded tower: 3rd–4th, 5th–12th and 13th–30th floors.", { caption: "3rd–4th · 5th–12th · 13th–30th floor" }),
      ],
    },
    { type: "inset", image: img("street-view", "render", "The tower’s full height from the street, with the glazed podium at its foot."), align: "right" },
  ],
};
