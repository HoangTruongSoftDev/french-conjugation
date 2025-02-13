<script setup>
import VerbTemplate from "./VerbTemplate.vue";
import { ref } from "vue";
const props = defineProps(["searchVerb"]);
import {
  verbTenseIndicatifs,
  verbTenseNameIndicatifs,
  verbTenseSubjonctifs,
  verbTenseNameSubjonctifs,
} from "../model/Utility";
function chunkTenses(verbTenses, chunkSize) {
  const chunkedTenses = [];
  for (let i = 0; i < verbTenses.length; i += chunkSize) {
    chunkedTenses.push(verbTenses.slice(i, i + chunkSize));
  }
  return chunkedTenses;
}
</script>

<template>
  <div id="div-indicatif">
    <h2>Indicatif</h2>
    <!--  
    const verbTenses = ["present","imparfait","futurSimple","passeSimple","passeCompose","plusQueParfait","passeAnterieur","futurAnterieur",]; 
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
          :verb="props.searchVerb[verbTense]"
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
          :verb="props.searchVerb[verbTense]"
        />
      </div>
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
