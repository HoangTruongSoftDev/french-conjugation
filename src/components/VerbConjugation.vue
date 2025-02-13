<script setup>
import VerbTemplate from "./VerbTemplate.vue";

const props = defineProps(["searchVerb"]);
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
            tense="Présent"
            :verb="concatenatePronoms(props.searchVerb.present)"
          />
          <VerbTemplate
            class="verb-template"
            tense="Imparfait"
            :verb="concatenatePronoms(props.searchVerb.imparfait)"
          />

          <VerbTemplate
            class="verb-template"
            tense="Futur simple"
            :verb="concatenatePronoms(props.searchVerb.futurSimple)"
          />
        </div>
        <div class="div-component">
          <VerbTemplate
            class="verb-template"
            tense="Passé simple"
            :verb="concatenatePronoms(props.searchVerb.passeSimple)"
          />
          <VerbTemplate
            class="verb-template"
            tense="Passé composé"
            :verb="concatenatePronoms(props.searchVerb.passeCompose)"
          />
          <VerbTemplate
            class="verb-template"
            tense="Plus-que-parfait"
            :verb="concatenatePronoms(props.searchVerb.plusQueParfait)"
          />
        </div>
        <div class="div-component">
          <VerbTemplate
            class="verb-template"
            tense="Passé antérieur"
            :verb="concatenatePronoms(props.searchVerb.passeAnterieur)"
          />
          <VerbTemplate
            class="verb-template"
            tense="Futur antérieur"
            :verb="concatenatePronoms(props.searchVerb.futurAnterieur)"
          />
          <div>
            <h2>Subjonctif</h2>
            <VerbTemplate
              class="verb-template"
              tense="Présent"
              :verb="concatenatePronoms(props.searchVerb.subjonctifPresent)"
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
