const vowels = [
  "a",
  "e",
  "i",
  "o",
  "u",
  "y",
  "h",
  "é",
  "à",
  "è",
  "ù",
  "â",
  "ê",
  "î",
  "ô",
  "û",
  "ë",
  "ï",
  "ü",
];
const pronoms = ["je", "tu", "il/elle/on", "nous", "vous", "ils/elles"];
const verbTenseNameIndicatifs = {
  present: "Présent",
  imparfait: "Imparfait",
  futurSimple: "Futur simple",
  passeSimple: "Passé simple",
  passeCompose: "Passé composé",
  plusQueParfait: "Plus-que-parfait",
  passeAnterieur: "Passé antérieur",
  futurAnterieur: "Futur antérieur",
};
const verbTenseIndicatifs = [
  "present",
  "imparfait",
  "futurSimple",
  "passeSimple",
  "passeCompose",
  "plusQueParfait",
  "passeAnterieur",
  "futurAnterieur",
];
const verbTenseNameSubjonctifs = {
  subjonctifPresent: "Présent",
  subjonctifImparfait: "Imparfait",
  subjonctifPlusQueParfait: "Plus-que-parfait",
  subjonctifPasse: "Passé",
};

const verbTenseSubjonctifs = [
  "subjonctifPresent",
  "subjonctifImparfait",
  "subjonctifPlusQueParfait",
  "subjonctifPasse",
];
const verbTenseNameConditionnels = {
  conditionnelPresent: "Présent",
  conditionnelPasse: "Passé première forme",
  conditionnelPasseII: "Passé deuxième forme",
};
const verbTenseConditionnels = [
  "conditionnelPresent",
  "conditionnelPasse",
  "conditionnelPasseII",
];
const verbTensePasses = ["participePresent", "participePasse"];
const verbTenseNamePasses = {
  participePresent: "Présent",
  participePasse: "Passé composé",
};
const verbTenseImperatifs = ["imperatif", "imperatifPasse"];
const verbTenseNameImperatifs = {
  imperatif: "Présent",
  imperatifPasse: "Passé",
};

export {
  pronoms,
  vowels,
  verbTenseNameIndicatifs,
  verbTenseIndicatifs,
  verbTenseSubjonctifs,
  verbTenseNameSubjonctifs,
  verbTenseConditionnels,
  verbTenseNameConditionnels,
  verbTensePasses,
  verbTenseNamePasses,
  verbTenseImperatifs,
  verbTenseNameImperatifs,
};
