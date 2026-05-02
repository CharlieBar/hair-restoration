// src/content/global/site.ts
// Global business info. Shared across Essence and Katona Hair Restoration sub-brand.
// Phone, address, hours, booking — single source of truth.

export const site = {
  // Parent brand
  name: "Essence MedSpa & Wellness Center",
  shortName: "Essence MedSpa",

  // Sub-brand (Katona Hair Restoration housed inside Essence)
  subBrand: {
    name: "Katona Hair Restoration at Essence",
    shortName: "Katona Hair Restoration",
    rootPath: "/katona-hair-restoration",
    tagline: "27 years. 20,000+ procedures. One surgeon.",
  },

  // ASSUMPTION: Use Essence's existing NAP. Confirm phone routing for Katona consultations.
  phone: "+1-773-XXX-XXXX",  // CONFIRM: Essence's primary phone or dedicated Katona line
  phoneDisplay: "(773) XXX-XXXX",
  email: "info@essencemedspachicago.com", // CONFIRM
  katonaConsultEmail: "consult@essencemedspachicago.com", // CONFIRM: dedicated or shared

  address: {
    street: "5418 W. Devon Avenue", // CONFIRM: actual Essence Edgebrook street address
    city: "Chicago",
    neighborhood: "Edgebrook",
    state: "IL",
    zip: "60646",
    country: "US",
  },

  hours: {
    // CONFIRM: actual hours
    monday: "9:00 AM – 7:00 PM",
    tuesday: "9:00 AM – 7:00 PM",
    wednesday: "9:00 AM – 7:00 PM",
    thursday: "9:00 AM – 7:00 PM",
    friday: "9:00 AM – 6:00 PM",
    saturday: "10:00 AM – 4:00 PM",
    sunday: "Closed",
  },

  booking: {
    primary: "/contact", // CONFIRM: Essence's booking flow URL
    katonaConsult: "/katona-hair-restoration/consultation",
    phone: "tel:+1773XXXXXXX",
  },

  reviews: {
    // ASSUMPTION: Update with real Google review count + rating before launch.
    googleRating: "4.9",
    googleReviewCount: "200+",
    googleProfileUrl: "https://g.page/essence-medspa-edgebrook", // CONFIRM
  },

  social: {
    instagram: "https://instagram.com/essencemedspa", // CONFIRM
    facebook: "https://facebook.com/essencemedspa", // CONFIRM
  },

  geo: {
    // ASSUMPTION: Edgebrook approximate coordinates. Replace with exact lat/lng.
    latitude: 41.9989,
    longitude: -87.7625,
  },
} as const;

export const katonaCredentials = {
  yearsExperience: "27+",
  proceduresPerformed: "20,000+",
  fueStartYear: "1996",
  countriesLicensed: "US + UK",
  licensesActive: ["Illinois", "Florida", "Georgia", "United Kingdom"],
  boardCertifications: [
    "Diplomate, American Board of Hair Restoration Surgeons (ABHRS)",
    "Fellow, International Society of Hair Restoration Surgeons (FISHRS)",
  ],
} as const;
