<script setup>
import VerbConjugation from "./components/VerbConjugation.vue";
import VerbSearch from "./components/VerbSearch.vue";
import { ref } from "vue";
let searchVerb = ref();
</script>

<template>
  <VerbSearch @searchVerb="(data) => (searchVerb = data)" />
  <VerbConjugation :searchVerb="searchVerb" />
</template>
