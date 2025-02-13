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

// ==========================================================
function boldFirstWord(phrases) {
  return phrases.map((phrase) => {
    const [firstWord, secondWord, ...rest] = phrase.split(/[\s']/);
    const modifiedFirstWord = `<strong>${firstWord}${
      phrase.includes("'") ? "'" : ""
    }</strong>`;
    return phrase.includes("'")
      ? [modifiedFirstWord + secondWord, ...rest].join(" ")
      : [modifiedFirstWord, secondWord, ...rest].join(" ");
  });
}

// ==========================================================

/*
        <VerbTemplate
          class="verb-template"
          verbTense="Présent"
          :verb="props.searchVerb.present"
        />

        <VerbTemplate
          class="verb-template"
          verbTense="Imparfait"
          :verb="props.searchVerb.imparfait"
        />

        <VerbTemplate
          class="verb-template"
          verbTense="Futur simple"
          :verb="props.searchVerb.futurSimple"
        />

        <VerbTemplate
          class="verb-template"
          verbTense="Passé simple"
          :verb="props.searchVerb.passeSimple"
        />

        <VerbTemplate
          class="verb-template"
          verbTense="Passé composé"
          :verb="props.searchVerb.passeCompose"
        />

        <VerbTemplate
          class="verb-template"
          verbTense="Plus-que-parfait"
          :verb="props.searchVerb.plusQueParfait"
        />

         <VerbTemplate
          class="verb-template"
          verbTense="Passé antérieur"
          :verb="props.searchVerb.passeAnterieur"
        />
        <VerbTemplate
          class="verb-template"
          verbTense="Futur antérieur"
          :verb="props.searchVerb.futurAnterieur"
        />
        <div>
          <h2>Subjonctif</h2>
          <VerbTemplate
            class="verb-template"
            verbTense="Subjonctif Présent"
            isSubjonctif="true"
            :verb="props.searchVerb.subjonctifPresent"
          />
        </div>
*/

// ==========================================================
// <div id="div-indicatif">
//     <h2>Indicatif</h2>
//     <div class="div-component">
//       <div v-for="(verbTense, idx) in verbTenses.slice(0, 3)">
//         <VerbTemplate
//           class="verb-template"
//           :verbTense="verbTenseNames[idx]"
//           :verb="props.searchVerb[verbTense]"
//         />
//       </div>
//     </div>
//     <div class="div-component">
//       <div v-for="(verbTense, idx) in verbTenses.slice(3, 6)">
//         <VerbTemplate
//           class="verb-template"
//           :verbTense="verbTenseNames[idx + 3]"
//           :verb="props.searchVerb[verbTense]"
//         />
//       </div>
//     </div>
//     <div class="div-component">
//       <div v-for="(verbTense, idx) in verbTenses.slice(6, 8)">
//         <VerbTemplate
//           class="verb-template"
//           :verbTense="verbTenseNames[idx + 6]"
//           :verb="props.searchVerb[verbTense]"
//         />
//       </div>
//     </div>
//   </div>
