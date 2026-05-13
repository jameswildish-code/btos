/**
 * Seed script — run once locally to populate Sanity with dummy content.
 * Usage: node scripts/seed-integrations.js
 *
 * Requires: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_TOKEN in .env.local
 */

const { createClient } = require("@sanity/client");
const fs = require("fs");
const path = require("path");

// Read .env.local
const envPath = path.join(__dirname, "../.env.local");
const env = fs.readFileSync(envPath, "utf8").split("\n").reduce((acc, line) => {
  const [k, ...v] = line.split("=");
  if (k) acc[k.trim()] = v.join("=").trim();
  return acc;
}, {});

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: env.SANITY_API_TOKEN,
});

const categories = [
  { _id: "cat-wearables",   _type: "integrationCategory", title: "Wearables & devices",         slug: { _type: "slug", current: "wearables" },  order: 1, description: "Every wearable and consumer device your people already own. Heart rate, HRV, sleep, training load, glucose, weight, blood oxygen — deduplicated across overlapping sources." },
  { _id: "cat-labs",        _type: "integrationCategory", title: "Labs & blood panels",          slug: { _type: "slug", current: "labs" },        order: 2, description: "Comprehensive blood biomarker panels ingested directly into the person's record. Annual or quarterly cadence; auto-trended against wearable signals." },
  { _id: "cat-genomics",    _type: "integrationCategory", title: "Genomics & DNA",               slug: { _type: "slug", current: "genomics" },    order: 3, description: "Whole-genome and microarray data, securely imported once and referenced throughout the record — pharmacogenomic interactions, risk variants, traits." },
  { _id: "cat-epigenetics", _type: "integrationCategory", title: "Epigenetic age & methylation", slug: { _type: "slug", current: "epigenetics" }, order: 4, description: "Biological-age tests, methylation panels, and glycan biomarkers — re-tested at intervals, charted alongside the rest of the record so protocols actually have a number to move." },
  { _id: "cat-medications", _type: "integrationCategory", title: "Medications & Rx",             slug: { _type: "slug", current: "medications" }, order: 5, description: "Prescription, refill, and adherence data from pharmacy partners and e-prescribing networks — charted on the same timeline as biometrics, so changes have context." },
  { _id: "cat-ehr",         _type: "integrationCategory", title: "Clinical & EHR",               slug: { _type: "slug", current: "ehr" },         order: 6, description: "Bidirectional pipelines into the EHRs your team already runs. We close the loop you've been holding shut with spreadsheets." },
];

function ref(id) { return { _type: "reference", _ref: id }; }

const integrations = [
  // Wearables — 12 items to demonstrate pagination (shows 8, then load more for 4)
  { _id: "int-apple",    _type: "integration", name: "Apple Health",     tagline: "HealthKit · activity, sleep, ECG",        status: "live", logoText: "AH", order: 1,  category: ref("cat-wearables") },
  { _id: "int-whoop",    _type: "integration", name: "Whoop",            tagline: "Strain, recovery, sleep stages",           status: "live", logoText: "W",  order: 2,  category: ref("cat-wearables") },
  { _id: "int-garmin",   _type: "integration", name: "Garmin Connect",   tagline: "Training load, VO₂ max, Forerunner",       status: "live", logoText: "G",  order: 3,  category: ref("cat-wearables") },
  { _id: "int-oura",     _type: "integration", name: "Oura",             tagline: "Ring · sleep, HRV, temperature",           status: "live", logoText: "O",  order: 4,  category: ref("cat-wearables") },
  { _id: "int-withings", _type: "integration", name: "Withings",         tagline: "Scale, blood pressure, sleep mat",         status: "live", logoText: "W",  order: 5,  category: ref("cat-wearables") },
  { _id: "int-polar",    _type: "integration", name: "Polar",            tagline: "Vantage, Pacer Pro, H10 chest strap",      status: "live", logoText: "P",  order: 6,  category: ref("cat-wearables") },
  { _id: "int-samsung",  _type: "integration", name: "Samsung Health",   tagline: "Galaxy Watch · Fit series",                status: "live", logoText: "S",  order: 7,  category: ref("cat-wearables") },
  { _id: "int-reebok",   _type: "integration", name: "Reebok Smart Ring",tagline: "HR, HRV, recovery tracking",               status: "live", logoText: "R",  order: 8,  category: ref("cat-wearables") },
  { _id: "int-dexcom",   _type: "integration", name: "Dexcom",           tagline: "CGM · G7 continuous glucose",              status: "beta", logoText: "D",  order: 9,  category: ref("cat-wearables") },
  { _id: "int-levels",   _type: "integration", name: "Levels / Lingo",   tagline: "CGM streams & metabolic scoring",          status: "beta", logoText: "L",  order: 10, category: ref("cat-wearables") },
  { _id: "int-fitbit",   _type: "integration", name: "Fitbit",           tagline: "Charge, Sense, Versa series",              status: "live", logoText: "F",  order: 11, category: ref("cat-wearables") },
  { _id: "int-8sleep",   _type: "integration", name: "Eight Sleep",      tagline: "Pod · sleep temperature tracking",         status: "soon", statusLabel: "Q3", logoText: "8", order: 12, category: ref("cat-wearables") },

  // Labs — KP Pharma as featured
  { _id: "int-kp",       _type: "integration", name: "KP Pharma",        tagline: "Blood panels · launch partner",            status: "live", logoText: "KP", order: 1, featured: true, featuredTitle: "KP Pharma.\nOur blood-panel\nlaunch partner.", featuredDescription: "Order, draw, and result flow lands directly in the person's BiotrackOS record — no manual upload, no PDFs. Trended automatically against the rest of the record.", marketplaceSlug: "", category: ref("cat-labs") },
  { _id: "int-medilab",  _type: "integration", name: "MediLab",          tagline: "Private lab network · London & SE",        status: "beta", logoText: "ML", order: 2, category: ref("cat-labs") },
  { _id: "int-mylab",    _type: "integration", name: "MyLab",            tagline: "At-home blood testing · 48h turnaround",  status: "soon", logoText: "ML", order: 3, category: ref("cat-labs") },

  // Genomics
  { _id: "int-muhdo-g",  _type: "integration", name: "Muhdo",            tagline: "DNA insights · launch partner",            status: "live", logoText: "M",  order: 1, category: ref("cat-genomics") },
  { _id: "int-23andme",  _type: "integration", name: "23andMe",          tagline: "SNP health & ancestry reports",            status: "beta", logoText: "23", order: 2, category: ref("cat-genomics") },

  // Epigenetics
  { _id: "int-muhdo-e1", _type: "integration", name: "Muhdo",            tagline: "Epigenetic age · launch partner",          status: "live", logoText: "M",  order: 1, category: ref("cat-epigenetics") },
  { _id: "int-muhdo-e2", _type: "integration", name: "Muhdo",            tagline: "Methylation panel & glycan markers",       status: "live", logoText: "M",  order: 2, category: ref("cat-epigenetics") },
  { _id: "int-trudiag",  _type: "integration", name: "TruDiagnostic",    tagline: "TruAge · biological age testing",          status: "soon", logoText: "TD", order: 3, category: ref("cat-epigenetics") },

  // Medications
  { _id: "int-datapharm",_type: "integration", name: "DataPharm",        tagline: "Prescription data · launch partner",       status: "live", logoText: "DP", order: 1, category: ref("cat-medications") },
  { _id: "int-pharmsw",  _type: "integration", name: "PharmSwitch",      tagline: "e-Prescribing & refill tracking",          status: "beta", logoText: "PS", order: 2, category: ref("cat-medications") },

  // EHR
  { _id: "int-cityehr",  _type: "integration", name: "CityEHR",          tagline: "EHR · launch partner",                    status: "live", logoText: "C",  order: 1, category: ref("cat-ehr") },
  { _id: "int-fhir",     _type: "integration", name: "FHIR direct",      tagline: "R4 export / inbound webhook",              status: "live", logoText: "F",  order: 2, category: ref("cat-ehr") },
  { _id: "int-emis",     _type: "integration", name: "EMIS Web",         tagline: "NHS primary care · GP connect",            status: "soon", logoText: "E",  order: 3, category: ref("cat-ehr") },
];

// Marketplace seed data
const partners = [
  { _id: "mp-apple",    _type: "partner", name: "Apple Health",     category: "Wearables & devices", status: "Live",         description: "Activity, heart rate, sleep, ECG and 70+ HealthKit metrics from iPhone and Apple Watch." },
  { _id: "mp-whoop",    _type: "partner", name: "WHOOP",            category: "Wearables & devices", status: "Live",         description: "HRV, strain, recovery, and sleep from WHOOP 4.0 and 5.0." },
  { _id: "mp-garmin",   _type: "partner", name: "Garmin",           category: "Wearables & devices", status: "Live",         description: "Activity, VO₂ max, training load, and GPS-based sport modes." },
  { _id: "mp-oura",     _type: "partner", name: "Oura",             category: "Wearables & devices", status: "Live",         description: "Readiness, sleep stages, HRV, and temperature deviation from the Oura Ring." },
  { _id: "mp-withings", _type: "partner", name: "Withings",         category: "Wearables & devices", status: "Live",         description: "Weight, body composition, blood pressure, and SpO₂." },
  { _id: "mp-samsung",  _type: "partner", name: "Samsung Health",   category: "Wearables & devices", status: "Live",         description: "Galaxy Watch activity, sleep, and heart metrics." },
  { _id: "mp-kp",       _type: "partner", name: "KP Pharma",        category: "Labs & blood panels",  status: "Live",         description: "Full blood panel, hormones, and metabolic markers. UK launch partner." },
  { _id: "mp-medilab",  _type: "partner", name: "MediLab",          category: "Labs & blood panels",  status: "Beta",         description: "Private lab network across London and the South East. 200+ biomarkers." },
  { _id: "mp-muhdo-g",  _type: "partner", name: "Muhdo",            category: "Genomics & DNA",       status: "Live",         description: "Whole genome sequencing and SNP-based health insights." },
  { _id: "mp-23andme",  _type: "partner", name: "23andMe",          category: "Genomics & DNA",       status: "Beta",         description: "SNP health and ancestry reports linked to your BiotrackOS record." },
  { _id: "mp-muhdo-e",  _type: "partner", name: "Muhdo",            category: "Epigenetics",          status: "Live",         description: "Biological age, methylation, and epigenetic health markers." },
  { _id: "mp-trudiag",  _type: "partner", name: "TruDiagnostic",    category: "Epigenetics",          status: "Coming soon",  description: "TruAge biological age testing — quantified methylation clock." },
  { _id: "mp-datapharm",_type: "partner", name: "DataPharm",        category: "Medications & Rx",     status: "Live",         description: "Prescription history, adherence tracking, and supplement logging." },
  { _id: "mp-pharmsw",  _type: "partner", name: "PharmSwitch",      category: "Medications & Rx",     status: "Beta",         description: "e-Prescribing, refill management, and controlled-drug audit trails." },
  { _id: "mp-cityehr",  _type: "partner", name: "CityEHR",          category: "Clinical / EHR",       status: "Live",         description: "NHS-compatible EHR integration. FHIR R4 native, bidirectional." },
  { _id: "mp-emis",     _type: "partner", name: "EMIS Web",         category: "Clinical / EHR",       status: "Coming soon",  description: "NHS primary care integration via GP Connect. In development." },
];

const addons = [
  { _id: "ao-chat",       _type: "addon", name: "Chat & messaging",         markets: ["Clinical","Performance","Wellness"],      tier: "Team",       price: "€49/mo",  description: "In-app secure messaging between care team and members." },
  { _id: "ao-cv",         _type: "addon", name: "Cardiovascular risk score", markets: ["Clinical","Insurance"],                   tier: "Team",       price: "€79/mo",  description: "Validated CV risk calculation from continuous biometric streams." },
  { _id: "ao-metabolic",  _type: "addon", name: "Metabolic risk calculator", markets: ["Clinical","Research"],                    tier: "Team",       price: "€79/mo",  description: "Metabolic syndrome risk scoring, updated in real time." },
  { _id: "ao-sched",      _type: "addon", name: "Scheduling module",         markets: ["Clinical","Performance"],                 tier: "Starter",    price: "€29/mo",  description: "Book appointments and check-ins directly from member records." },
  { _id: "ao-wl",         _type: "addon", name: "White-label member app",    markets: ["Clinical","Insurance","Wellness"],        tier: "Enterprise", price: "Custom",   description: "Your branding, your domain — powered by BiotrackOS." },
  { _id: "ao-ins",        _type: "addon", name: "Insurance claims module",   markets: ["Insurance"],                              tier: "Enterprise", price: "Custom",   description: "Route wearable-backed wellness data into claims and underwriting." },
  { _id: "ao-export",     _type: "addon", name: "Cohort export & reporting", markets: ["Research","Clinical"],                    tier: "Team",       price: "€49/mo",  description: "Structured FHIR and CSV exports with configurable field sets." },
  { _id: "ao-consent",    _type: "addon", name: "eConsent & trial enrolment",markets: ["Research"],                               tier: "Team",       price: "€79/mo",  description: "Regulatory-grade electronic consent flows for clinical studies." },
];

const programmes = [
  { _id: "pr-metabolic",  _type: "programme", name: "12-week metabolic reset",         author: "Dr. Isabel Ferreira",  specialty: "Metabolic & nutrition",   duration: "12 weeks", price: "€299" },
  { _id: "pr-marathon",   _type: "programme", name: "Marathon training biometrics",     author: "James Rønne, MSc",     specialty: "Sports performance",       duration: "16 weeks", price: "€199" },
  { _id: "pr-cardiac",    _type: "programme", name: "Post-op cardiac rehab",            author: "Dr. Nils Bjørnsson",   specialty: "Cardiology",               duration: "8 weeks",  price: "€249" },
  { _id: "pr-longevity",  _type: "programme", name: "Longevity optimization protocol",  author: "Dr. Sofia Holm",       specialty: "Longevity medicine",        duration: "12 weeks", price: "€399" },
  { _id: "pr-exec",       _type: "programme", name: "Executive wellness programme",     author: "Eva Kaur, NMC",        specialty: "Occupational health",       duration: "8 weeks",  price: "€349" },
  { _id: "pr-peri",       _type: "programme", name: "Perimenopause hormone support",    author: "Dr. Aisha Okonkwo",    specialty: "Women's health",            duration: "12 weeks", price: "€299" },
];

async function seed() {
  const all = [...categories, ...integrations, ...partners, ...addons, ...programmes];
  const mutations = all.map(doc => ({ createOrReplace: doc }));

  console.log(`Seeding ${mutations.length} documents...`);
  const result = await client.mutate(mutations);
  console.log(`Done. ${result.results?.length ?? 0} documents created/updated.`);
}

seed().catch(err => {
  console.error("Seed failed:", err.message);
  process.exit(1);
});
