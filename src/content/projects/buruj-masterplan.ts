import { imagesFor } from "../image";
import type { Project } from "../types";

const slug = "buruj-masterplan";
const img = imagesFor(slug);

export const burujMasterplan: Project = {
  slug,
  title: "Buruj Masterplan",
  category: "Masterplan and residential towers",
  location: "Baghdad, Iraq",
  facts: [
    { label: "Developer", value: "Modon" },
    { label: "Plot", value: "290,000 m²" },
    { label: "Phase 2", value: "10 residential towers, 1,264 units" },
    { label: "Podium", value: "Two levels, 41,704 m² BUA" },
    { label: "Role", value: "Architect" },
  ],
  summary:
    "A 290,000 m² masterplan near Baghdad International Airport: residential towers on a continuous two-level podium of parks, schools, markets and services.",
  intro: [
    "Led by one of Iraq’s prominent real-estate companies, the project aims to make a substantial contribution to Baghdad’s housing needs. Modon set out to develop a masterplan that is part of the rise of the city and aligned with the Baghdad 2030 vision: a green, playful and cultured community.",
    "On a 290,000 m² plot, the plan includes residential towers, educational and community centres, markets, social and service centres, children’s playgrounds, sports fields and outdoor gardens. The site lies 3.5 km from Baghdad International Airport, 13 km from the administrative centre of the capital and 12 km from the Baghdad International Exhibition Center.",
  ],
  section: { kind: "plate", label: "290,000 m²", span: 2 },
  hero: img("hero", "render", "Aerial view of residential towers set around landscaped courts and two oval pools on a podium, desert land beyond.", { focus: "50% 55%" }),
  blocks: [
    {
      type: "pair",
      images: [
        img("site", "site", "Site plan of zones A and B, the existing Al Zahra residential complex, and the Phase 2 focus area.", { caption: "Overall project site" }),
        img("site-aerial", "site", "Aerial photograph with the proposed towers overlaid in colour.", { caption: "The site in its context" }),
      ],
    },
    {
      type: "figures",
      heading: "Phase 2",
      items: [
        { value: "10", label: "Residential towers: 4 R3B (25,003 m² BUA) and 6 central R2RB (23,001 m²)" },
        { value: "1,264", label: "Housing units" },
        { value: "41,704 m²", label: "Two-level podium with public parks, across the whole phase" },
        { value: "8,808 m²", label: "Ground-level apartments and services beneath the podium" },
        { value: "1,500 m²", label: "Retail market inside the podium" },
        { value: "623", label: "Podium parking spaces" },
      ],
      note: "The Buruj Hub at the entrance to Phase 2 groups administration (355 m²), cafés (1,000 m²) and a nursery (368 m²); a fire station (633 m²) and utilities complete the phase.",
    },
    {
      type: "sequence",
      title: "Masterplan and landscape",
      columns: 3,
      images: [
        img("access-vehicular", "diagram", "Plan diagram of vehicular strategies in orange.", { caption: "Accessibility: vehicular strategies" }),
        img("access-pedestrian", "diagram", "Plan diagram of pedestrian strategies in green.", { caption: "Accessibility: pedestrian strategies" }),
        img("access-podium-access", "diagram", "Plan diagram of podium access in dark green.", { caption: "Accessibility: podium access" }),
        img("strategy-service", "diagram", "Plan diagram of service strategies in blue.", { caption: "Accessibility: service strategies" }),
        img("strategy-coverage", "diagram", "Plan diagram of 45 m range coverage circles.", { caption: "Accessibility: 45 m range coverage" }),
        img("strategy-programme", "diagram", "Plan diagram of the programme, Zumurud and Fayrouz towers in blue and green.", { caption: "Facilities: programme" }),
        img("strategy-levels", "diagram", "Plan diagram of podium and tower levels.", { caption: "Levels: podiums and towers" }),
        img("strategy-landscape", "diagram", "Plan diagram of pools, landscape and installations.", { caption: "Levels: pools, landscape and installations" }),
        img("strategy-commercial", "diagram", "Plan diagram of commercial spaces and amenities in pink, including the fire station and supermarket.", { caption: "Facilities: commercial spaces and amenities" }),
      ],
    },
    { type: "inset", image: img("podium-render", "render", "The podium entrance under a large white canopy, with water and planting before the towers.", { caption: "Podium levels" }), align: "left" },
    {
      type: "sequence",
      title: "Podium strategies",
      columns: 3,
      images: [
        img("podium-vehicular", "diagram", "Podium vehicular strategy diagram.", { caption: "Vehicular strategy" }),
        img("podium-pedestrian", "diagram", "Podium pedestrian strategy diagram.", { caption: "Pedestrian strategies" }),
        img("podium-fire", "diagram", "Podium fire and life safety strategy with 60 m hose range circles.", { caption: "Fire and life safety" }),
      ],
    },
    { type: "drawing", image: img("podium-parking-plan", "diagram", "Plan of the Phase 2 podium parking at +1.50 m, 623 spaces."), title: "Podium parking", note: "+1.50 m · 623 spaces" },
    { type: "chapter", title: "Zumurud Tower" },
    {
      type: "inset",
      image: img("zumurud-tower", "render", "The Zumurud towers: tall white residential slabs with recessed balconies above palm-lined streets."),
      align: "right",
      note: "The Zumurud towers rise twenty floors. Each floor holds six units in three apartment types of two, three or four bedrooms, with views towards the green areas.",
    },
    { type: "drawing", image: img("zumurud-axo", "diagram", "Axonometric of Phase 2 with the Zumurud towers highlighted in gold."), title: "Buruj Masterplan, Phase 2" },
    {
      type: "sequence",
      title: "Plans",
      columns: 2,
      images: [
        img("plan-ground", "plan", "Zumurud tower ground level plan.", { caption: "Ground level" }),
        img("plan-podium-roof", "plan", "Level 01 plan at the podium roof.", { caption: "Level 01 at podium roof" }),
        img("plan-typical-2-16", "plan", "Typical floor plan, levels 2 to 16.", { caption: "Typical floor, levels 2–16" }),
        img("plan-typical-17-19", "plan", "Typical floor plan, levels 17 to 19.", { caption: "Typical floor, levels 17–19" }),
      ],
    },
    {
      type: "pair",
      images: [
        img("towers", "render", "Street view of three white residential towers behind a parking court and palms.", { caption: "Towers" }),
        img("aerial", "render", "Aerial view of Phase 2 towers among planted courts, the expressway alongside.", { caption: "Aerial view" }),
      ],
      offset: true,
    },
  ],
};
