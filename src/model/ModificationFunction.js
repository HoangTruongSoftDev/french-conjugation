// function formatVerb(verbs) {
//   return verbs.map((phrase) => {
//     const verbComponent = phrase.split(/[\s']/);
//     let completedVerb = "";
//     for (let i = 0; i < verbComponent.length; i++) {
//       if (i === 0) {
//         if (phrase.includes("'")) {
//           completedVerb = `<strong>${verbComponent[0]}'</strong>`;
//         } else {
//           completedVerb = `<strong>${verbComponent[0]}</strong> `;
//         }
//       } else {
//         completedVerb += verbComponent[i] + " ";
//       }
//     }
//     return completedVerb;
//   });
// }

function formatVerb(verbs) {
  return verbs.map((verb) => {
    const [firstWord, secondWord, ...rest] = verb.split(/[\s']/);
    const modifiedFirstWord = `<strong>${firstWord}${
      verb.includes("'") ? "'" : ""
    }</strong>`;

    return verb.includes("'")
      ? [modifiedFirstWord + secondWord, ...rest].join(" ")
      : [modifiedFirstWord, secondWord, ...rest].join(" ");
  });
}

// ==========================================================
function concatenatePronoms(verbs) {
  const pronoms = ["je", "tu", "il/elle/on", "nous", "vous", "ils/elles"];
  const vowel = ["a", "e", "i", "o", "u", "y", "é", "h"];
  return pronoms.map((pronom, idx) => {
    if (pronom === "je" && vowel.includes(verbs[idx][0])) {
      return "j'" + verbs[idx];
    }
    return `${pronom} ${verbs[idx]}`;
  });
}
