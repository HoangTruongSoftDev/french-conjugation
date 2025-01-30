<script setup>
defineProps(["verbName"]);
</script>

<template>
  <li>
    <span @click="$emit('textClicked', verbName)">{{ verbName }}</span>
    <button @click="$emit('buttonClicked')">+</button>
  </li>
</template>
