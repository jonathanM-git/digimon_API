<template>
    <div>
      <img :src="image" alt="Imagen de la evolución" />
      <p>{{ nombre }} (Nivel: {{ level }})</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    nombre: String,
    image: String,
    level: String
  });
  </script>
  