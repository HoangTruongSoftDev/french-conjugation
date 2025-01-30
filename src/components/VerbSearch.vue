<script setup>
import { ref } from "vue";
import Json from "../json/mongo-dump";

const searchVerb = ref(); // a string that represents the value of the input

const emit = defineEmits(["searchVerb"]);

const conjugateVerb = () => {
  const foundVerb = Json.find((verb) => verb.infinitif === searchVerb.value);
  console.log(foundVerb);
  emit("searchVerb", foundVerb);
};
</script>

<template>
  <h1>Search a verb</h1>
  <form @submit.prevent="conjugateVerb">
    <input type="text" v-model="searchVerb" />
    <button type="submit">Search</button>
  </form>
</template>
