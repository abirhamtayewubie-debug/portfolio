import { imagesFor } from "../image";
import type { Project } from "../types";

const slug = "imamu-ahmed-masjid";
const img = imagesFor(slug);

export const imamuAhmedMasjid: Project = {
  slug,
  title: "Imamu Ahmed Masjid and Madrasah",
  short: "Imamu Ahmed Masjid",
  category: "Religious and educational complex",
  location: "Addis Ababa",
  facts: [
    { label: "Programme", value: "Mosque, madrasah, commercial block" },
    { label: "Levels", value: "Basement, semi-basement, ground + 3" },
    { label: "Parking", value: "240 cars on two terraced levels" },
    { label: "Recognition", value: "Award-winning design" },
    { label: "Role", value: "Architect" },
  ],
  summary:
    "An award-winning masjid and madrasah complex in Addis Ababa, organised around the idea of a “fortress for the mind”.",
  intro: [
    "This award-winning design for a masjid and madrasah complex brings a large mosque, an Islamic school and a commercial block together as one response to the site’s topography, religious needs and urban context. The mosque, as the focal point, faces a public square; segmented access routes separate men’s and women’s entrances and functions. The madrasah echoes the mosque’s architectural language, and the commercial block sits on the main road for accessibility and life.",
    "A terraced basement car park follows the natural slope, while landscaped courtyards and arcades encourage community interaction. The massing is simple and expressive, with Islamic geometric influences that blend modern and traditional elements.",
  ],
  section: { kind: "building", above: 4, below: 2, label: "2B+G+3" },
  hero: img("hero", "render", "Aerial view of the mosque’s white prayer hall and dome, its tall minaret, and the terraced madrasah wing beside a roundabout.", { focus: "30% 50%" }),
  blocks: [
    {
      type: "text",
      heading: "Fortress for the mind",
      body: [
        "The concept is taken from the pattern of the existing mosque on the site and from the Muslim community around it: the entry points and axes come directly from the existing mosque. The other source is the history of Imamu Ahmed and his role in defending Islam.",
        "“Fortress for the mind” was chosen because it expresses the core identity of the mosque and gives the community a place for engagement, knowledge sharing and worship.",
      ],
    },
    {
      type: "sequence",
      title: "Existing conditions",
      columns: 3,
      images: [
        img("existing-01", "diagram", "Site model showing the existing programmes.", { caption: "Existing programmes" }),
        img("existing-02", "diagram", "Site model showing the existing circulation and male and female entries.", { caption: "Existing circulation" }),
        img("existing-03", "diagram", "Site model showing parking and greenery.", { caption: "Parking and greenery" }),
      ],
    },
    {
      type: "sequence",
      title: "Mass evolution",
      columns: 4,
      images: [
        img("mass-evolution-01", "diagram", "Step 1: the site mass after road setbacks and the river buffer.", { caption: "Site mass after two road setbacks and the river buffer." }),
        img("mass-evolution-02", "diagram", "Step 2: the mass split into two platforms.", { caption: "Splitting the mass into two platforms following the topography, creating the basements." }),
        img("mass-evolution-03", "diagram", "Step 3: major axes and entry points.", { caption: "Setting the major axes and entry points with the prayer hall’s orientation." }),
        img("mass-evolution-04", "diagram", "Step 4: programme masses placed on the site.", { caption: "Placing the main programme masses by interaction and area requirements." }),
      ],
    },
    {
      type: "sequence",
      title: "Building massing",
      columns: 5,
      images: [
        img("building-massing-01", "diagram", "Massing 1: ablution spaces.", { caption: "Men’s ablution under the main prayer hall; women’s ablution back to back, with a separate entrance." }),
        img("building-massing-02", "diagram", "Massing 2: prayer halls.", { caption: "The main prayer hall above the men’s ablution; the women’s prayer space on a mezzanine with its own core." }),
        img("building-massing-03", "diagram", "Massing 3: the madrasah block.", { caption: "The madrasah: cascading floors of lecture halls, library and offices, dormitories on top under a green roof." }),
        img("building-massing-04", "diagram", "Massing 4: the minaret.", { caption: "The minaret rises from the imam’s offices, ending the long horizontal mass with an upward extension." }),
        img("building-massing-05", "diagram", "Massing 5: the unified complex.", { caption: "Connecting masses unify the whole, with emphasis on details such as the main prayer hall exit." }),
      ],
    },
    {
      type: "pair",
      images: [
        img("massing-axo", "diagram", "Axonometric of the complex with parking entries and axes marked.", { caption: "Axes and parking entries" }),
        img("madrasah-terraces", "render", "The madrasah’s terraced, perforated façade with the minaret behind.", { caption: "The madrasah" }),
      ],
    },
    { type: "full", image: img("main-view", "render", "The mosque from the street: arched white prayer-hall façade, dome and minaret, with the stepped madrasah to the left.") },
    {
      type: "sequence",
      title: "Plans",
      intro: "Basement 3,907 m², 126 cars · Semi-basement 6,057 m², 114 cars · Ground floor 6,410 m² · First 4,278 m² · Second and third 3,249 m² each.",
      columns: 3,
      images: [
        img("plan-site", "site", "Site plan with numbered legend.", { caption: "Site plan" }),
        img("plan-basement", "plan", "Basement floor plan: parking on the sloping site.", { caption: "Basement" }),
        img("plan-semi-basement", "plan", "Semi-basement floor plan.", { caption: "Semi-basement" }),
        img("plan-ground", "plan", "Ground floor plan with the main prayer hall.", { caption: "Ground floor" }),
        img("plan-first", "plan", "First floor plan.", { caption: "First floor" }),
        img("plan-second", "plan", "Second floor plan.", { caption: "Second floor" }),
      ],
    },
    {
      type: "sequence",
      title: "Elevations",
      columns: 2,
      images: [
        img("elevation-front", "elevation", "Front elevation.", { caption: "Front elevation" }),
        img("elevation-right", "elevation", "Right side elevation.", { caption: "Right side elevation" }),
        img("elevation-left", "elevation", "Left side elevation.", { caption: "Left side elevation" }),
        img("elevation-rear", "elevation", "Rear elevation.", { caption: "Rear elevation" }),
      ],
    },
    {
      type: "pair",
      images: [
        img("interior-01", "render", "The white prayer hall, light falling from a ring of clerestory windows, with pendant rings and pierced screens.", { caption: "Prayer hall" }),
        img("arcade", "render", "An arcade of round arches under a perforated screen wall.", { caption: "Arcade" }),
      ],
    },
    {
      type: "pair",
      images: [
        img("interior-02", "render", "The prayer hall from the mezzanine, with layered galleries.", { caption: "Galleries" }),
        img("stair", "render", "A broad outdoor stair between arched walls, a palm at the top.", { caption: "Stair to the upper court" }),
      ],
      offset: true,
    },
    { type: "inset", image: img("minaret-street", "render", "The minaret and commercial block from the main road.", { caption: "From the main road" }), align: "right" },
  ],
};
