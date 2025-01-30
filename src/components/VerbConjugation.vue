<script setup>
const props = defineProps(["searchVerb"]);
function concatenatePronoms(verbs) {
  const pronoms = ["je", "tu", "il/elle/on", "nous", "vous", "ils/elles"];
  const vowel = ["a", "e", "i", "o", "u"];
  return pronoms.map((pronom, idx) => {
    console.log(verbs[idx][0]);
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
        <div>
          <h2>Indicatif</h2>
          <div>
            <h3>Présent</h3>
            <p>{{ concatenatePronoms(props.searchVerb.present) }}</p>
          </div>
          <div>
            <h3>Imparfait</h3>
            <p>{{ concatenatePronoms(props.searchVerb.imparfait) }}</p>
          </div>
          <div>
            <h3>Passé simple</h3>
            <p>{{ concatenatePronoms(props.searchVerb.passeSimple) }}</p>
          </div>
          <div>
            <h3>Futur simple</h3>
            <p>{{ concatenatePronoms(props.searchVerb.futurSimple) }}</p>
          </div>
          <div>
            <h3>Passé composé</h3>
            <p>{{ concatenatePronoms(props.searchVerb.passeCompose) }}</p>
          </div>
          <div>
            <h3>Plus-que-parfait</h3>
            <p>{{ concatenatePronoms(props.searchVerb.plusQueParfait) }}</p>
          </div>
          <div>
            <h3>Futur antérieur</h3>
            <p>{{ concatenatePronoms(props.searchVerb.futurAnterieur) }}</p>
          </div>
          <div>
            <h3>Passé antérieur</h3>
            <p>{{ concatenatePronoms(props.searchVerb.passeAnterieur) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
