import { imagesFor } from "../image";
import type { Project } from "../types";

const slug = "eeu-district-office";
const img = imagesFor(slug);

export const eeuDistrictOffice: Project = {
  slug,
  title: "EEU District Office",
  category: "Office building",
  location: "Near Sealit Mehiret Square, Addis Ababa",
  facts: [
    { label: "Client", value: "Ethiopian Electric Utility" },
    { label: "Height", value: "B + G + 11" },
    { label: "Programme", value: "Offices around a central atrium" },
    { label: "Role", value: "Lead architect" },
  ],
  summary:
    "An L-shaped district office for the Ethiopian Electric Utility, its glazed wings screened by perforated aluminium and anchored on a stone base.",
  intro: [
    "Located near Sealit Mehiret Square, the B+G+11 district office is the interface between Megenagna–Hayat Road and the EEU Excellence Centre. A four-storey entrance opens into a functional, campus-like office complex. The L-shaped volume separates different office types while responding to the site’s topography through stepped forms and cantilevers.",
    "Full-height glazing on the front and rear elevations is screened by rhythmically perforated aluminium shades, balancing transparency and solar control; a solid stone base anchors the building to its context. Inside, open-plan workspace occupies the street-facing wing and quieter offices the rear wing, connected by a central atrium.",
  ],
  section: { kind: "building", above: 12, below: 1, label: "B+G+11" },
  hero: img("hero", "render", "The district office from the road: a glazed office bar lifted above a stone-clad base marked EEU Excellence Center.", { focus: "55% 50%" }),
  blocks: [
    {
      type: "pair",
      images: [
        img("perspective", "render", "Perspective of the entrance canopy and the stepped glazed volume beside the light-rail line.", { caption: "Perspective view" }),
        img("entrance-lobby", "render", "The four-storey entrance under the building, opening to a court with a sculpture and water.", { caption: "Entrance lobby" }),
      ],
      offset: true,
    },
    {
      type: "sequence",
      title: "Floor plans",
      columns: 3,
      images: [
        img("plan-ground", "plan", "Ground floor plan of the L-shaped building.", { caption: "Ground floor" }),
        img("plan-4th", "plan", "Fourth floor plan with offices along both wings.", { caption: "4th floor" }),
        img("plan-9th-10th", "plan", "Ninth and tenth floor plan of the street wing.", { caption: "9th & 10th floor" }),
      ],
    },
    { type: "full", image: img("aerial", "render", "Aerial view of the office and its landscaped forecourt within the surrounding campus.", { caption: "Aerial view" }) },
  ],
};
