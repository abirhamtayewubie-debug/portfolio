import { imagesFor } from "../image";
import type { Project } from "../types";

const slug = "ai-museum";
const img = imagesFor(slug);

export const aiMuseum: Project = {
  slug,
  title: "AI Museum",
  category: "Exhibition interior",
  location: "Ethiopian Museum of Art and Science, Addis Ababa",
  facts: [
    { label: "Area", value: "780 m²" },
    { label: "Programme", value: "Entry portal and five thematic zones" },
    { label: "Role", value: "Architect" },
  ],
  summary:
    "A 780 m² exhibition on the evolution of artificial intelligence, laid out as one continuous path through five zones.",
  intro: [
    "The AI Museum, in the southwest wing of the Ethiopian Museum of Art and Science, is a 780 m² immersive exhibition on the evolution and impact of artificial intelligence. Designed as a single narrative journey, it leads visitors through five zones: The Genesis, The Rise of AI, AI in Action, Creative AI and the Arts, and Visions of Tomorrow.",
    "Interactive holograms, touch-responsive screens and hybrid physical-digital displays create a multi-sensory experience, while minimal architecture with adaptive lighting sets the atmosphere.",
  ],
  section: { kind: "plate", label: "780 m²", span: 1 },
  surface: "night",
  hero: img("hero", "render", "The final zone: curved walls wrapped in a vivid futuristic cityscape image, a white pod at the end of the path and visitors among the exhibits.", { focus: "50% 50%" }),
  blocks: [
    {
      type: "text",
      heading: "Path of experience",
      body: [
        "The exhibition space is laid out along a specific path that visitors take. To make the best use of the space given to the topic, the design concentrates on seamless transitions between zones, so that each space reads as part of one story.",
      ],
    },
    {
      type: "sequence",
      columns: 3,
      images: [
        img("path-01", "diagram", "Diagram of the exhibition path weaving through the gallery.", { caption: "Path of experience" }),
        img("path-02", "diagram", "Diagram of circular zones placed along the path.", { caption: "Zones along the path" }),
        img("path-03", "diagram", "Diagram of programmes distributed through the zones.", { caption: "Programmes distributed along the zones" }),
      ],
    },
    { type: "drawing", image: img("zoning", "diagram", "Spatial zoning: five coloured, overlapping zones from the entry portal to Zone 05."), title: "Spatial zoning", note: "Five zones, one connected story." },
    {
      type: "sequence",
      title: "Floor plan",
      columns: 3,
      images: [
        img("plan-01", "plan", "Line floor plan with numbered exhibits.", { caption: "Floor plan" }),
        img("plan-02", "plan", "Coloured floor plan of the five zones.", { caption: "Zones" }),
        img("plan-03", "plan", "Three-dimensional cut-away of the gallery.", { caption: "Cut-away" }),
      ],
    },
    {
      type: "pair",
      images: [
        img("portal-01", "render", "The entry portal: a round doorway patterned with circuit lines on one side and a brain on the other, titled Museum of AI.", {
          caption: "Entry portal. The Portal of Intelligence represents three stages of intelligence: biological, collective and machine.",
        }),
        img("portal-02", "render", "Through the portal, the blue hologram column of the first zone.", { caption: "Through the portal" }),
      ],
    },
    {
      type: "sequence",
      title: "The zones in plan",
      columns: 6,
      images: [
        img("zone-plan-00", "plan", "Circular plan detail of the entry portal.", { caption: "Entry portal" }),
        img("zone-plan-01", "plan", "Circular plan detail of Zone 1.", { caption: "1 · The Genesis" }),
        img("zone-plan-02", "plan", "Circular plan detail of Zone 2.", { caption: "2 · The Rise of AI" }),
        img("zone-plan-03", "plan", "Circular plan detail of Zone 3.", { caption: "3 · AI in Action" }),
        img("zone-plan-04", "plan", "Circular plan detail of Zone 4.", { caption: "4 · Creative AI and the Arts" }),
        img("zone-plan-05", "plan", "Circular plan detail of Zone 5.", { caption: "5 · Visions of Tomorrow" }),
      ],
    },
    {
      type: "inset",
      image: img("zone1-01", "render", "Zone 1: a blue hologram column at the centre of a white room.", { caption: "Zone 1 · The Genesis" }),
      align: "left",
      note: "A timeline of humanity’s milestones in studying intelligence, from Aristotle’s logic to Ada Lovelace’s first algorithm, Alan Turing’s theories and the rise of neural networks.",
    },
    {
      type: "inset",
      image: img("zone2-02", "render", "Zone 2: a visitor reading wall panels beside the hologram column.", { caption: "Zone 2 · The Rise of Artificial Intelligence" }),
      align: "right",
      note: "From the birth of computing and symbolic AI to machines that learn: the progression from rule-based systems to neural networks.",
    },
    {
      type: "pair",
      images: [
        img("zone3-02", "render", "Zone 3: screens and hologram plinths under signs for AI in transportation, healthcare and agriculture.", { caption: "Zone 3 · AI in Action" }),
        img("zone3-03", "render", "Zone 3: exhibits on the skills of tomorrow and AI in finance.", { caption: "Real-world AI tools, their benefits and challenges" }),
      ],
    },
    {
      type: "pair",
      images: [
        img("zone4-01", "render", "Zone 4: a white egg-shaped pavilion with a dark opening.", { caption: "Zone 4 · Creative AI and the Arts" }),
        img("zone4-02", "render", "Zone 4: a visitor standing in a heart-shaped portal filled with stars.", { caption: "AI as a collaborator in art, music and stories" }),
      ],
      offset: true,
    },
  ],
};
