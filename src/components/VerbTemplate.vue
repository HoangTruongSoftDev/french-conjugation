<script setup>
const props = defineProps(["tense", "verb"]);
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
const formattedVerb = formatVerb(props.verb);
console.log(props.verb);
</script>

<template>
  <div class="conjugation-container">
    <h3>{{ props.tense }}</h3>
    <ul>
      <li v-for="currVerb in formattedVerb" v-html="currVerb"></li>
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
