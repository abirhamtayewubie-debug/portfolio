import type { Profile } from "./types";

/**
 * Personal information, taken from the CV (October 2026) and the portfolio
 * PDF (pages 2–3 and the certificates at the end). Nothing here is inferred
 * beyond those sources; award years and certificate details come from the
 * portfolio, which gives them where the CV does not.
 */
export const profile: Profile = {
  name: "Abirham Taye",
  descriptor: "Architect and urban designer",
  location: "Addis Ababa, Ethiopia",
  statement: "Buildings, interiors and cities, from 780 m² to 548 hectares.",
  bio: [
    "I am an architect and urban designer based in Addis Ababa, with more than eight years of experience delivering high-rise, mixed-use and housing projects from concept to completion.",
    "The work moves between scales: an exhibition interior of 780 m², student housing and apartment buildings, competition headquarters towers of thirty storeys, and masterplans for new city districts in Ethiopia and Iraq.",
    "Alongside design I lead multidisciplinary teams and coordinate the work across disciplines, from BIM-driven documentation to detailed design, so that the design intent holds through to a buildable, high-quality result.",
  ],
  portrait: {
    src: "/images/about/portrait.webp",
    width: 394,
    height: 656,
    kind: "photo",
    alt: "Portrait of Abirham Taye, arms folded, in a dark short-sleeved shirt.",
  },
  email: "abirham.taye.wubie@gmail.com",
  phone: "+251 98 582 2275",
  experience: [
    {
      period: "2026 – present",
      title: "Senior Architect, Design Coordinator, BIM Specialist",
      place: "AZAD Design Build PLC",
      location: "Addis Ababa, Ethiopia",
      points: [
        "Leading architectural design and documentation, coordinating design disciplines across projects.",
        "Developing and managing BIM models and coordination workflows.",
      ],
    },
    {
      period: "2023 – 2026",
      title: "Senior Architect, Architectural Team Leader",
      place: "Ovid Kling Consult PLC",
      location: "Addis Ababa, Ethiopia",
      points: ["Large-scale planning and design projects.", "Leading a team on multiple housing projects."],
    },
    {
      period: "2024",
      title: "Project Architect",
      place: "Kling Consult",
      location: "Dubai, UAE",
      points: ["High-rise design projects.", "Preparing design documents with a BIM methodology."],
    },
    {
      period: "Jan 2019 – Feb 2023",
      title: "Architect",
      place: "Ethiopian Construction Design & Supervision Works Corporation (ECDSWC)",
      location: "Addis Ababa, Ethiopia",
      points: [
        "Four masterplan design projects.",
        "Design and coordination of housing and office projects.",
        "Led the team on a high-rise mixed-use project.",
      ],
    },
  ],
  education: [
    {
      period: "2019",
      title: "B.Sc. in Architecture, very great distinction (CGPA 3.76)",
      place: "Addis Ababa University, Ethiopian Institute of Architecture, Building Construction and City Development (EiABC)",
    },
  ],
  recognition: [
    { period: "2020", title: "First place", place: "EEIG headquarters high-rise building design competition" },
    { title: "Second place", place: "EEU headquarters high-rise building design competition" },
    { period: "2021", title: "Second place", place: "EEIG logo design competition" },
  ],
  certificates: [
    { period: "2022", title: "Project Management, 50 hours", place: "Addis Ababa University, School of Commerce" },
    { title: "BIM Execution Plans", place: "Autodesk" },
    { title: "Conceptual Design with Autodesk Forma", place: "Autodesk" },
    { title: "Deep Dive into BIM", place: "Autodesk" },
  ],
  skills: [
    { heading: "Disciplines", items: ["Building design", "Landscape design", "Urban design", "Graphic design"] },
    { heading: "Software", items: ["AutoCAD", "Autodesk Revit", "Adobe Illustrator", "Adobe Premiere", "Lumion"] },
    { heading: "Languages", items: ["English", "Amharic"] },
  ],
  quote: { text: "Any architectural work that doesn’t express serenity is an error.", author: "Luis Barragán" },
};
