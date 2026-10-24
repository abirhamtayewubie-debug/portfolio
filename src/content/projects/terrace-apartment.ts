import { imagesFor } from "../image";
import type { Project } from "../types";

const slug = "terrace-apartment";
const img = imagesFor(slug);

export const terraceApartment: Project = {
  slug,
  title: "Terrace Apartment",
  category: "Residential building",
  location: "Megenagna, Addis Ababa",
  facts: [
    { label: "Height", value: "Basement, ground + 6 upper levels" },
    { label: "Units", value: "Garden duplexes, single-level apartments" },
    { label: "Roof", value: "Green event space, gym, sauna" },
    { label: "Role", value: "Lead architect" },
  ],
  summary:
    "A residential building in Megenagna wrapped in cantilevered terraces that work as both outdoor rooms and sunshades.",
  intro: [
    "This residential building in Megenagna offers urban living across a basement, ground floor and six upper levels. The ground floor holds garden-access duplex units; the floors above contain single-level apartments, all extended by cantilevered terraces that serve as both outdoor living space and sunshades. The roof hosts a green event space, gym and sauna.",
    "Floor-to-ceiling glazing connects the interiors with the terraces, and a palette of stone, metal and glass gives the building its modern character. A green roof, native landscaping and passive shading make up its sustainable strategy, balancing privacy and community with daylight, ventilation and outdoor space.",
  ],
  section: { kind: "building", above: 7, below: 1, label: "B+G+6" },
  hero: img("hero", "render", "The white apartment block with deep cantilevered terraces staggered across its corner, under a cloudy sky.", { focus: "58% 50%" }),
  blocks: [
    {
      type: "pair",
      images: [
        img("aerial", "render", "Aerial view of the building’s staggered terraces and timber-slatted roof.", { caption: "Aerial view" }),
        img("front", "render", "Front elevation, where the terrace bands fold around the façade like a continuous ribbon.", { caption: "Street elevation" }),
      ],
    },
    {
      type: "sequence",
      title: "Plans",
      columns: 6,
      images: [
        img("plan-site", "site", "Site plan.", { caption: "Site plan" }),
        img("plan-basement", "plan", "Basement floor plan with parking and ramp.", { caption: "Basement" }),
        img("plan-ground", "plan", "Ground floor plan with garden duplexes.", { caption: "Ground floor" }),
        img("plan-first", "plan", "First floor plan.", { caption: "First floor" }),
        img("plan-2nd-5th", "plan", "Typical second-to-fifth floor plan.", { caption: "2nd–5th floor" }),
        img("plan-6th", "plan", "Sixth floor plan with the roof terrace.", { caption: "6th floor" }),
      ],
    },
    { type: "full", image: img("living-01", "render", "A double-height living and dining room with full-height curtains and a long dining table.", { caption: "Living room" }) },
    {
      type: "pair",
      images: [
        img("living-02", "render", "Living room looking through to the dining area and a mezzanine.", { caption: "Living room" }),
        img("living-03", "render", "Living room with tall drapes and a round black coffee table.", { caption: "Living room" }),
      ],
      offset: true,
    },
    {
      type: "pair",
      images: [
        img("kitchen", "render", "Open kitchen with a long window onto greenery.", { caption: "Open kitchen" }),
        img("roof-terrace", "render", "Covered roof terrace with a long table on artificial grass.", { caption: "Roof terrace" }),
      ],
    },
    { type: "inset", image: img("master-bedroom", "render", "Master bedroom in grey timber tones.", { caption: "Master bedroom" }), align: "center" },
  ],
};
