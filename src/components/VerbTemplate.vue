<script setup>
import { vowels, pronoms } from "../model/Utility";
const props = defineProps(["verbTense", "verb"]);

console.log("Checking: " + props.verb);
console.log(props.verbTense);

// ex: verbs =  ["vais", "vas", "va", "allons", "allez", "vont"]
function concatenatePronoms(verbs) {
  return pronoms.map((pronom, idx) => {
    if (pronom === "je" && vowels.includes(props.verb[idx][0])) {
      return "j'" + verbs[idx];
    }
    return `${pronom} ${verbs[idx]}`;
  });
}

function boldVerb(phrases) {
  return phrases.map((phrase) => {
    const verbComponents = phrase.split(" ");
    const modifiedLastComponent = `<strong>${
      verbComponents[verbComponents.length - 1]
    }</strong>`;
    return [...verbComponents.slice(0, -1), modifiedLastComponent].join(" ");
  });
}
// ex: phrases = ["je vais", "tu vas", "il va", "nous allons", "vous allez", "ils vont]
function concatenateSubjonctif(phrases) {
  return phrases.map((phrase) => {
    if (vowels.includes(phrase[0])) {
      return `qu'${phrase}`;
    } else return `que ${phrase}`;
  });
}
function formatPhrase(verbs) {
  let formattedPhrase = boldVerb(verbs);
  formattedPhrase = concatenatePronoms(formattedPhrase);
  formattedPhrase = props.verbTense.includes("Subjonctif")
    ? concatenateSubjonctif(formattedPhrase)
    : formattedPhrase;
  return formattedPhrase;
}
</script>

<template>
  <div class="conjugation-container">
    <h3>
      {{
        props.verbTense.includes("Subjonctif")
          ? props.verbTense.split(" ")[1]
          : props.verbTense
      }}
    </h3>
    <ul>
      <li v-for="currVerb in formatPhrase(props.verb)" v-html="currVerb"></li>
    </ul>
  </div>
</template>

<style scoped>
.conjugation-container {
  background-color: #d3eaff;
  border: 1px solid #000;
  padding: 10px;
  text-align: center;
}

.conjugation-container h2 {
  font-weight: bold;
}

.conjugation-container ul {
  list-style-type: none;
  padding: 0;
}
</style>
