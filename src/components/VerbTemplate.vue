<script setup>
const props = defineProps(["verbTense", "verb"]);
function concatenatePronoms(verbs) {
  const pronoms = ["je", "tu", "il/elle/on", "nous", "vous", "ils/elles"];
  const vowel = ["a", "e", "i", "o", "u"];
  return pronoms.map((pronom, idx) => {
    if (pronom === "je" && vowel.includes(verbs[idx][0])) {
      return "j'" + verbs[idx];
    }
    return `${pronom} ${verbs[idx]}`;
  });
}
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
</script>

<template>
  <div class="conjugation-container">
    <h3>{{ props.verbTense }}</h3>
    <ul>
      <li
        v-for="currVerb in formatVerb(concatenatePronoms(props.verb))"
        v-html="currVerb"
      ></li>
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
