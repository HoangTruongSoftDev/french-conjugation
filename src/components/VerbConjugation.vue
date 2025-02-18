<script setup>
import VerbTemplate from "./VerbTemplate.vue";
const props = defineProps(["searchVerb"]);
import {
  verbTenseIndicatifs,
  verbTenseNameIndicatifs,
  verbTenseSubjonctifs,
  verbTenseNameSubjonctifs,
  verbTenseConditionnels,
  verbTenseNameConditionnels,
  verbTensePasses,
  verbTenseNamePasses,
  verbTenseImperatifs,
  verbTenseNameImperatifs,
} from "../model/Utility";
import { vowels, pronoms } from "../model/Utility";

function chunkTenses(verbTenses, chunkSize) {
  const chunkedTenses = [];
  for (let i = 0; i < verbTenses.length; i += chunkSize) {
    chunkedTenses.push(verbTenses.slice(i, i + chunkSize));
  }
  return chunkedTenses;
}
function concatenatePronoms(verbs) {
  console.log("concatenatePronoms1: " + verbs);
  return pronoms.map((pronom, idx) => {
    console.log(verbs[idx]);
    if (pronom === "je" && vowels.includes(verbs[idx][0])) {
      return "j'" + verbs[idx];
    }
    return `${pronom} ${verbs[idx]}`;
  });
}

function boldVerb(phrases) {
  console.log("======= ");
  console.log(phrases);
  return phrases.map((phrase) => {
    const verbComponents = phrase.split(" ");
    console.log("++++++++ " + phrase);
    const modifiedLastComponent = `<strong>${
      verbComponents[verbComponents.length - 1]
    }</strong>`;
    return [...verbComponents.slice(0, -1), modifiedLastComponent].join(" ");
  });
}
function boldAll(phrases) {
  return phrases.map((phrase) => {
    return `<strong>${phrase}</strong>`;
  });
}
function concatenateSubjonctif(phrases) {
  return phrases.map((phrase) => {
    if (vowels.includes(phrase[0])) {
      return `qu'${phrase}`;
    } else return `que ${phrase}`;
  });
}
function toArray(verbs) {
  return Array.isArray(verbs) ? verbs : [verbs];
}
function concatenateAuxiliaire(verb, auxiliary) {
  if (auxiliary === "être") {
    let phrase = `étant ${verb}-étant ${verb}e`;
    phrase = phrase.split("-");
    return phrase;
  } else {
    let phrase = `ayant ${verb}`;
    return toArray(phrase);
  }
}
function concatenateGenderNumber(verb) {
  let phrase = `masc.sg.: ${verb}-masc.pl.: ${verb}s-fém.sg.: ${verb}e-fém.pl.: ${verb}es`;
  phrase = phrase.split("-");
  return phrase;
}
function formatPhrase(verbs, mode) {
  console.log("+=_++++_+_++_+_+_+_+_+Checking: " + verbs);

  let formattedPhrase = verbs;
  if (mode === "imperatif") {
    formattedPhrase = boldAll(verbs);
    return formattedPhrase;
  }
  switch (mode) {
    case "indicatif":
      formattedPhrase = concatenatePronoms(formattedPhrase);
      break;
    case "subjonctif":
      formattedPhrase = concatenatePronoms(formattedPhrase);
      formattedPhrase = concatenateSubjonctif(formattedPhrase);
      break;
    case "conditionnel":
      formattedPhrase = concatenatePronoms(formattedPhrase);
    case "participe present":
      formattedPhrase = toArray(verbs);
      break;
    case "participe passe compose":
      formattedPhrase = concatenateAuxiliaire(
        formattedPhrase,
        props.searchVerb.auxiliaire
      );
      console.log("Checking Auxilaire: " + formattedPhrase);
      break;
    case "participe passe":
      formattedPhrase = concatenateGenderNumber(formattedPhrase);
      break;
    default:
      break;
  }
  formattedPhrase = boldVerb(formattedPhrase);
  return formattedPhrase;
}
</script>

<template>
  <div id="div-indicatif">
    <h2>Indicatif</h2>
    <!--  
    const verbTenseIndicatifs = ["present","imparfait","futurSimple","passeSimple","passeCompose","plusQueParfait","passeAnterieur","futurAnterieur",]; 
    Loop: chunkedTenses = [["present","imparfait","futurSimple"], ["passeSimple","passeCompose","plusQueParfait"], ["passeAnterieur","futurAnterieur"]]
    -->
    <div
      class="div-component"
      v-for="chunkedTenses in chunkTenses(verbTenseIndicatifs, 3)"
    >
      <div v-for="verbTense in chunkedTenses">
        <VerbTemplate
          class="verb-template"
          :verbTense="verbTenseNameIndicatifs[verbTense]"
          :verb="formatPhrase(props.searchVerb[verbTense], 'indicatif')"
        />
      </div>
    </div>
  </div>
  <div id="div-subjonctif">
    <h2>Subjonctif</h2>
    <div class="div-component">
      <div v-for="verbTense in verbTenseSubjonctifs">
        <VerbTemplate
          class="verb-template"
          :verbTense="verbTenseNameSubjonctifs[verbTense]"
          :verb="formatPhrase(props.searchVerb[verbTense], 'subjonctif')"
        />
      </div>
    </div>
  </div>
  <div id="div-conditionnel">
    <h2>Conditionnel</h2>
    <div class="div-component">
      <div v-for="verbTense in verbTenseConditionnels">
        <VerbTemplate
          class="verb-template"
          :verbTense="verbTenseNameConditionnels[verbTense]"
          :verb="formatPhrase(props.searchVerb[verbTense], 'conditionnel')"
        />
      </div>
    </div>
  </div>
  <!-- const verbTensePasses = ["participePresent", "participePasse"]; -->
  <div id="div-participe">
    <h2>Participe</h2>
    <div class="div-component">
      <VerbTemplate
        class="verb-template"
        :verbTense="verbTenseNamePasses[`${verbTensePasses[0]}`]"
        :verb="
          formatPhrase(
            props.searchVerb[`${verbTensePasses[0]}`],
            'participe present'
          )
        "
      />
      <VerbTemplate
        class="verb-template"
        :verbTense="verbTenseNamePasses[`${verbTensePasses[1]}`]"
        :verb="
          formatPhrase(
            props.searchVerb[`${verbTensePasses[1]}`],
            'participe passe compose'
          )
        "
      />
      <VerbTemplate
        class="verb-template"
        verbTense="Passé"
        :verb="
          formatPhrase(
            props.searchVerb[`${verbTensePasses[1]}`],
            'participe passe'
          )
        "
      />
    </div>
  </div>
  <div id="div-imperatif">
    <h2>Impératif</h2>
    <div class="div-component">
      <VerbTemplate
        class="verb-template"
        :verbTense="verbTenseNameImperatifs[verbTenseImperatifs[0]]"
        :verb="
          formatPhrase(props.searchVerb[verbTenseImperatifs[0]], 'imperatif')
        "
      />
      <VerbTemplate
        class="verb-template"
        :verbTense="verbTenseNameImperatifs[verbTenseImperatifs[1]]"
        :verb="
          formatPhrase(props.searchVerb[verbTenseImperatifs[1]], 'imperatif')
        "
      />
    </div>
  </div>
</template>
<style scoped>
.div-component {
  display: flex;
  justify-content: space-around;
}
.verb-template {
  margin: 10px;
}
</style>
