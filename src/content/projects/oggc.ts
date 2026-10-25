import { imagesFor } from "../image";
import type { Project } from "../types";

const slug = "oggc";
const img = imagesFor(slug);

export const oggc: Project = {
  slug,
  title: "Ovid Gellan Gurra City",
  short: "OGGC",
  category: "Urban masterplan",
  location: "Southeast of Addis Ababa",
  facts: [
    { label: "Site", value: "547.83 ha" },
    { label: "Residents", value: "300,000+" },
    { label: "Dwellings", value: "60,000 units in 16 towns" },
    { label: "Phase 1", value: "20,000 units" },
    { label: "Role", value: "Urban designer and architect" },
  ],
  summary:
    "A new city for over 300,000 residents on a 548-hectare site southeast of Addis Ababa, organised as sixteen towns of 4,000 to 6,000 households.",
  intro: [
    "Ovid Gellan Gurra City is an urban development on a 548-hectare site southeast of Addis Ababa, designed as a fully integrated city for over 300,000 residents in 60,000 dwelling units. The masterplan organises the city into 16 towns of 4,000–6,000 households, each with complete neighbourhood amenities: a network of self-sufficient yet connected communities.",
    "Residential typologies from high-rise apartments to townhouses sit alongside commercial, educational, healthcare and recreational facilities. A layered transport system prioritises walking while connecting every district, and parks, plazas and ecological corridors run through the plan. Infrastructure for renewable energy, smart utilities and water management is planned in from the start.",
  ],
  section: { kind: "plate", label: "548 ha", span: 3 },
  heroFullScreen: true,
  hero: img("hero", "render", "Aerial view of the new city: dense blocks of white towers beside a river and forest, with chequered farmland plots.", { focus: "50% 50%" }),
  blocks: [
    {
      type: "text",
      heading: "Site analysis",
      body: [
        "The site lies southeast of the city on land currently used for informal crop and livestock farming, close to the international airport and to industrial and logistics hubs.",
        "The land is relatively flat except along the river, where steep slopes are unsuitable for building and are protected by setbacks. A line of electrical pylons crosses it from north to south, with a smaller corridor in the southeast; utility reserves keep these corridors free of development. Of the 11.48 km perimeter, 5.9 km follows the river edge, 770 m meets a power substation and 4.81 km runs along existing and future roads.",
      ],
    },
    {
      type: "pair",
      images: [
        img("site-city", "site", "Satellite image of Addis Ababa with the city boundary outlined in yellow and the site filled in yellow at its southeast edge.", { caption: "The site within Addis Ababa" }),
        img("site-context", "site", "Dark satellite map with rings at 2.5, 5, 7.5 and 10 km around the site, the airport, industry park, river and transit lines.", {
          caption: "Context: airport, industry park, freight and LRT terminals, MRT, LRT, BRT and national railway",
        }),
      ],
    },
    {
      type: "sequence",
      title: "Land-use framework",
      columns: 2,
      images: [
        img("map-land-use", "site", "Land-use map of the whole city.", { caption: "Land use" }),
        img("map-residential", "site", "Residential land-use map by typology: standard, deluxe, premium, townhouse.", { caption: "Residential land use" }),
        img("map-centres", "site", "Map of district and community centres.", { caption: "District and community centres" }),
        img("map-community", "site", "Map of community services: health, schools, worship.", { caption: "Community services" }),
        img("map-roads", "site", "Road hierarchy map: 30, 25, 20 and 12 m roads.", { caption: "Road hierarchy" }),
        img("map-open-space", "site", "Open space map: parks, pedestrian links, sports and the river bed.", { caption: "Open space" }),
        img("map-utilities", "site", "Primary utilities map: power-line reserves and water pipeline.", { caption: "Primary utilities" }),
        img("map-towns", "site", "Map dividing the city into sixteen numbered towns.", { caption: "Sixteen towns" }),
      ],
    },
    {
      type: "figures",
      heading: "Land coverage",
      items: [
        { value: "30.70%", label: "Townhouses and apartments" },
        { value: "16.31%", label: "Main roads" },
        { value: "7.22%", label: "Power-line reserve and farming" },
        { value: "6.26%", label: "Pedestrian routes and public recreation" },
        { value: "4.19%", label: "Central market, mixed use and retail" },
        { value: "4.05%", label: "Education" },
        { value: "1.35%", label: "Utilities" },
        { value: "0.70%", label: "Transit hub" },
        { value: "0.54%", label: "Worship" },
        { value: "0.50%", label: "Sport facilities" },
        { value: "0.21%", label: "Health" },
      ],
    },
    { type: "chapter", title: "First phase", subtitle: "20,000 units" },
    {
      type: "text",
      body: [
        "Phase 1 is defined as 20,000 units, delivered through a number of clusters and one of the district centres. It therefore contains a complete cross-section of land uses, leaving room to revisit the mix as the development market changes.",
      ],
    },
    { type: "full", image: img("skyline", "render", "Panorama of the first phase: a long, even skyline of white residential towers above trees.") },
    {
      type: "pair",
      images: [
        img("phase1-a", "render", "Aerial view of Phase 1 from the south, the river curving around the blocks.", { caption: "Phase 1" }),
        img("phase1-b", "render", "Aerial view of Phase 1 from the north.", { caption: "Phase 1" }),
      ],
    },
    {
      type: "sequence",
      title: "Residential typologies",
      columns: 6,
      images: [
        img("typology-01", "render", "Typology 01, standard: twin white slab blocks.", { caption: "Standard" }),
        img("typology-02", "render", "Typology 02: white residential blocks."),
        img("typology-03", "render", "Typology 03: residential blocks around a crossing."),
        img("typology-04", "render", "Typology 04: lower residential blocks around a lawn."),
        img("typology-05", "render", "Typology 05: blocks behind a large tree."),
        img("typology-06", "render", "Typology 06: tall blocks along a street."),
        img("typology-07", "render", "Typology 07: blocks behind street trees."),
        img("typology-08", "render", "Typology 08, deluxe: a gridded tower.", { caption: "Deluxe" }),
        img("typology-09", "render", "Typology 09, premium: towers with balconies.", { caption: "Premium" }),
        img("typology-10", "render", "Typology 10, premium: a slender tower.", { caption: "Premium" }),
        img("typology-tw1", "render", "Townhouse type 1: two-storey white houses with a picket fence.", { caption: "TW1 Townhouse" }),
        img("typology-tw2", "render", "Townhouse type 2: three-storey white houses.", { caption: "TW2 Townhouse" }),
      ],
    },
    {
      type: "pair",
      images: [
        img("t7-plan", "plan", "Typology 7 floor plan: two- and three-bedroom units around a shared core.", {
          caption: "Standard typology 7, Ride Fam. Kazanchis-inspired. 2-bed 58.41 m² · 3-bed 78.63 m²",
        }),
        img("t7-render", "render", "Typology 7 blocks along a tree-lined street.", { caption: "Typology 7" }),
      ],
    },
    {
      type: "pair",
      images: [
        img("t8-plan", "plan", "Typology 8 floor plan with studio, one-, two- and three-bedroom units.", {
          caption: "Standard typology 8, Deluxe. Middle income. Studio 17.64 m² · 1-bed 42.13 m² · 2-bed 68.64 m² · 3-bed 91.49 m²",
        }),
        img("t9-plan", "plan", "Typology 9 floor plan with one-, two- and three-bedroom units.", {
          caption: "Standard typology 9, Premium. High income. 1-bed 158.01 m² · 2-bed 158.01 m² · 3-bed 179.65 m²",
        }),
      ],
      offset: true,
    },
    {
      type: "inset",
      image: img("t10-plan", "plan", "Typology 10 floor plan with two- and three-bedroom units around a double core.", {
        caption: "Standard typology 10, Exclusive. Very high-end apartments. 2-bed 158.01 m² · 3-bed 179.65 m²",
      }),
      align: "center",
    },
    {
      type: "sequence",
      title: "Interiors",
      columns: 4,
      images: [
        img("interior-01", "render", "Living room in pale tones.", { caption: "Living room" }),
        img("interior-02", "render", "Small dining corner with a wall clock.", { caption: "Dining" }),
        img("interior-03", "render", "Compact bedroom.", { caption: "Bedroom" }),
        img("interior-05", "render", "Open kitchen and living room.", { caption: "Kitchen and living" }),
      ],
    },
    { type: "chapter", title: "Visualisations" },
    { type: "full", image: img("aerial", "render", "Aerial view along the river: the city’s towers, a green linear park and the main boulevard.") },
    {
      type: "pair",
      images: [
        img("street-01", "render", "A street between tall white buildings, trees and a crossing.", { caption: "Street" }),
        img("street-02", "render", "A slender tower beside a park.", { caption: "Park edge" }),
      ],
    },
    {
      type: "sequence",
      columns: 4,
      images: [
        img("street-03", "render", "A boulevard with a planted median.", { caption: "Boulevard" }),
        img("street-04", "render", "A row of townhouses across a street.", { caption: "Townhouses" }),
        img("street-05", "render", "Residential blocks seen across a park.", { caption: "From the park" }),
        img("street-06", "render", "A bus stop on a tree-lined street.", { caption: "Transit stop" }),
      ],
    },
  ],
};
