import { imagesFor } from "../image";
import type { Project } from "../types";

const slug = "reality-apartment";
const img = imagesFor(slug);

export const realityApartment: Project = {
  slug,
  title: "Reality Apartment",
  category: "Mixed-use residential tower",
  location: "Near Gazebo Square, Addis Ababa",
  facts: [
    { label: "Height", value: "3B + G + 16" },
    { label: "Units", value: "160 apartments, 1–3 bedrooms" },
    { label: "Typical floor", value: "Ten units around a central core" },
    { label: "Role", value: "Architect" },
  ],
  summary:
    "A 3B+G+16 apartment tower on an irregular site near Gazebo Square, its units arranged around a central structural core.",
  intro: [
    "This 3B+G+16 mixed-use apartment building near Gazebo Square, Addis Ababa, combines affordability, efficiency and sustainability in a compact high-rise. To overcome an irregular site, three ramped basements and the ground floor are given to parking. The sixteen residential floors each hold ten units, from one to three bedrooms, in repetitive, space-efficient layouts for cost-effective construction; a gym, sauna and event space on the roof bring residents together.",
    "The central structural core does two jobs: it provides earthquake-resistant stability and organises the apartments around it, so that every unit gets city views, daylight and cross-ventilation.",
  ],
  section: { kind: "building", above: 17, below: 3, label: "3B+G+16" },
  hero: img("hero", "render", "The white and grey apartment tower against a blue sky, balconies stacked in a rhythmic grid.", { focus: "50% 40%" }),
  blocks: [
    {
      type: "sequence",
      title: "Site and basements",
      columns: 4,
      images: [
        img("plan-site", "site", "Site plan of the two wings on the irregular plot beside a 10 m road.", { caption: "Site plan" }),
        img("plan-basement-3", "plan", "Third basement floor plan with parking.", { caption: "Third basement" }),
        img("plan-basement-2", "plan", "Second basement floor plan with parking.", { caption: "Second basement" }),
        img("plan-basement-1", "plan", "First basement floor plan with parking.", { caption: "First basement" }),
      ],
    },
    {
      type: "sequence",
      title: "Tower",
      columns: 3,
      images: [
        img("plan-ground", "plan", "Ground floor plan.", { caption: "Ground floor" }),
        img("plan-typical", "plan", "Typical floor plan for the first to sixteenth floors, apartments arranged around the core.", { caption: "1st–16th floor, typical" }),
        img("plan-roof", "plan", "Roof plan with terraces and planting.", { caption: "Roof" }),
      ],
    },
    {
      type: "pair",
      images: [
        img("living", "render", "Living, dining and kitchen in one long room, with a fireplace.", { caption: "Living, dining, kitchen" }),
        img("bedroom", "render", "Bedroom with sheer curtains and timber panelling.", { caption: "Bedroom" }),
      ],
      offset: true,
    },
  ],
};
