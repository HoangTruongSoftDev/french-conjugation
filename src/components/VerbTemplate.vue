<script setup>
const props = defineProps(["verbTense", "verb"]);
import { ref, watch } from "vue";
// props.verb = Array.isArray(props.verb) ? props.verb : [props.verb];

console.log("Checking: " + props.verb);
console.log("Checking type: " + typeof props.verb);
console.log(props.verbTense);
let verbs = ref(props.verb);
verbs.value = Array.isArray(verbs.value) ? verbs.value : [verbs.value];
console.log("Checking ref truong: " + verbs.value);
// use watch to update verbs when props.verb changes
watch(
  () => props.verb,
  (newValue) => {
    verbs.value = Array.isArray(newValue) ? newValue : [newValue];
  }
);
</script>

<template>
  <div class="conjugation-container">
    <h3>
      {{ props.verbTense }}
    </h3>
    <ul>
      <li v-for="currVerb in verbs" v-html="currVerb"></li>
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
