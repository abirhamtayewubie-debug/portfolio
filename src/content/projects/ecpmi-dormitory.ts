import { imagesFor } from "../image";
import type { Project } from "../types";

const slug = "ecpmi-dormitory";
const img = imagesFor(slug);

export const ecpmiDormitory: Project = {
  slug,
  title: "ECPMI Dormitory",
  category: "Student housing",
  location: "Sendafa, Addis Ababa region",
  facts: [
    { label: "Height", value: "G + 5" },
    { label: "Units", value: "45 dormitory units, two bedrooms each" },
    { label: "Ground floor", value: "Student hall, café, administration" },
    { label: "Role", value: "Lead architect" },
  ],
  summary:
    "A compact G+5 dormitory in Sendafa: 45 two-bedroom units above a communal ground floor, under a green roof.",
  intro: [
    "Located in Sendafa, a satellite city of Addis Ababa, this G+5 dormitory is a compact, efficient answer to student housing. The ground floor is a communal hub with a student hall, café and administrative offices; the five floors above hold 45 units, each with two private bedrooms with en-suite bathrooms and a shared living and dining space.",
    "The rectangular form is articulated by extruded dining spaces that break up the mass. A green roof gives students outdoor space and improves the building’s environmental performance. The façade balances solid cladding and glazing, with perforated sunshades modulating light and air; cross-ventilation, efficient glazing and durable local materials keep it low-maintenance and climate-responsive.",
  ],
  section: { kind: "building", above: 6, below: 0, label: "G+5" },
  hero: img("hero", "render", "The dormitory block seen from the street, with timber-toned boxes projecting from a white frame and students walking past.", { focus: "45% 50%" }),
  blocks: [
    {
      type: "pair",
      images: [
        img("courtyard", "render", "A planted courtyard path between dormitory blocks.", { caption: "Courtyard" }),
        img("roof-garden", "render", "Aerial view of the green roof with pergolas at each end.", { caption: "Green roof" }),
      ],
    },
    { type: "drawing", image: img("section", "section", "Section X–X through the stair and five residential floors above the ground-floor hall."), title: "Section X–X" },
    {
      type: "sequence",
      title: "Floor plans",
      columns: 2,
      images: [
        img("plan-ground", "plan", "Ground floor plan with the student hall, café and offices.", { caption: "Ground floor" }),
        img("plan-typical", "plan", "Typical first-to-fifth floor plan of paired dormitory units.", { caption: "Typical 1st–5th floor" }),
      ],
    },
  ],
};
