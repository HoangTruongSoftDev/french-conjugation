<script setup>
import VerbTemplate from "./VerbTemplate.vue";
import { ref } from "vue";
const props = defineProps(["searchVerb"]);
</script>

<template>
  <div>
    <p v-if="props.searchVerb === null || props.searchVerb === undefined">
      There's no verb has been found
    </p>
    <div v-else>
      <div id="div-indicatif">
        <h2>Indicatif</h2>
        <div class="div-component">
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
        </div>
        <div class="div-component">
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
        </div>
        <div class="div-component">
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
              verbTense="Présent"
              :verb="props.searchVerb.subjonctifPresent"
            />
          </div>
        </div>
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
