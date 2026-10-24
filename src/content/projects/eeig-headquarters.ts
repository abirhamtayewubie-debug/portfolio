import { imagesFor } from "../image";
import type { Project } from "../types";

const slug = "eeig-headquarters";
const img = imagesFor(slug);

export const eeigHeadquarters: Project = {
  slug,
  title: "EEIG High-Rise Headquarters",
  short: "EEIG High-Rise",
  category: "Mixed-use high-rise",
  location: "Central Business District, Addis Ababa",
  facts: [
    { label: "Client", value: "Ethiopian Engineering Investment Group" },
    { label: "Height", value: "4B + G + 30" },
    { label: "Programme", value: "Commercial podium, offices, sky-view restaurant" },
    { label: "Recognition", value: "First place, design competition" },
    { label: "Role", value: "Lead architect and design project manager" },
  ],
  summary:
    "The winning competition design for the headquarters of the Ethiopian Engineering Investment Group, a 30-storey mixed-use tower in Addis Ababa’s Central Business District.",
  intro: [
    "Emerging as the winning design from an architectural competition, the EEIG High-Rise (4B+G+30) is to become the new headquarters for the Ethiopian Engineering Investment Group in Addis Ababa’s Central Business District, prominently positioned opposite the La Gare Eagle Hills development.",
    "The mixed-use tower combines a commercial podium with premium office space, culminating in a sky-view restaurant on its 30th floor. Human-scaled floating terraces at the lower levels give way to a sculptural, wavy prefabricated façade above. Gradual setbacks in the massing set up a dialogue with neighbouring developments while establishing the building’s own identity. Adaptive solar shading, rainwater harvesting and vertical greenery respond to Ethiopia’s climate.",
  ],
  section: { kind: "building", above: 31, below: 4, label: "4B+G+30" },
  hero: img("hero", "render", "The EEIG tower rising above a commercial podium and the elevated La Gare light-rail line, palms in the foreground.", { focus: "62% 50%" }),
  cover: img("aerial-night", "render", "Night aerial view of the tower’s lit crown and the curving roads around the site."),
  blocks: [
    {
      type: "inset",
      image: img("urban-context", "site", "Three-dimensional urban map of the CBD with the neighbouring landmark buildings shaded orange and the site marked in red.", {
        caption: "Urban context. The CBD’s buildings of strong architectural character are shaded orange: among them the Medn Insurance building, the Commercial Bank, Bedlu Hintsa, the Construction and Business Bank, the Wabe Shebelle Hotel and the Bunana Shay building, with La Gare and Mexico light-rail stations and the Eagle Hills project.",
      }),
      align: "left",
      note: "“An interface between the bold characters of buildings within the CBD zone and the new contemporary high-rise character.”",
    },
    {
      type: "pair",
      images: [
        img("tower-lobby", "render", "Double-height tower lobby with timber-clad walls, glazing and the EEIG name in light.", { caption: "Tower lobby entrance" }),
        img("podium-lobby", "render", "Podium atrium with escalators, galleries of shops and a glazed barrel roof.", { caption: "Podium lobby entrance" }),
      ],
      offset: true,
    },
    {
      type: "sequence",
      title: "Floor plans",
      columns: 2,
      images: [
        img("plan-basement-and-6-11", "plan", "Floor plans: first to third basement parking level above, and typical sixth-to-eleventh floor offices below.", {
          caption: "First to third basement · 6th–11th floor",
        }),
        img("plans-ground-to-30", "plan", "Four floor plans: ground floor, second floor, 13th–21st floor and 23rd–30th floor.", {
          caption: "Ground · 2nd · 13th–21st · 23rd–30th floor",
        }),
      ],
    },
    { type: "full", image: img("aerial-night", "render", "Night aerial view of the tower’s lit crown and the curving roads around the site.", { caption: "Aerial view" }) },
  ],
};
