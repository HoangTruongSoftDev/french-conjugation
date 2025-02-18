<script setup>
import VerbSearch from "./components/VerbSearch.vue";
import VerbConjugation from "./components/VerbConjugation.vue";
import { ref } from "vue";
let searchVerb = ref();
</script>

<template>
  <VerbSearch @searchVerb="(data) => (searchVerb = data)" />
  <VerbConjugation v-if="searchVerb !== undefined" :searchVerb="searchVerb" />
  <p v-else>There's no verb has been found</p>
</template>
