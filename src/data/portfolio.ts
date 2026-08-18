import { domains } from "./domains";
import { projects } from "./projects";

export const portfolioContext = JSON.stringify(
  {
    person: {
      name: "Tomáš Nachtigal",
      location: "Písek, Česko",
      focus: "Navrhuje a staví weby, e-shopy a datové nástroje pro firmy.",
      contact: {
        email: "nachtigal.tom@proton.me",
        phone: "+420 721 419 183",
        linkedin: "https://www.linkedin.com/in/tomasnachtigal/",
      },
    },
    projects: projects.map(({ image, accentColor, ...project }) => project),
    domains,
  },
  null,
  2,
);
