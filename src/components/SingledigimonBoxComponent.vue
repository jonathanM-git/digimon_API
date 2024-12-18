<template>
    <div class="digimonSingle-container">
      <!-- Contenedor principal que agrupa los dos -->
      <div class="content-wrapper">
        <!-- Contenedor de los detalles del Digimon (ligeramente a la izquierda) -->
        <div class="digimon-details-container">
          <!-- Imagen del Digimon -->
          <img :src="images" alt="Imagen del Digimon" class="digimon-image" />
     
          <!-- Nombre del Digimon -->
          <h1 class="digimon-name">{{ name }}</h1>
     
          <!-- Detalles del Digimon -->
          <div class="digimon-details">
            <p v-for="data in attributes" :key="data.attribute" class="digimon-attribute">
              <strong>Atributo:</strong> {{ data.attribute }}
            </p>
            <p v-for="data in types" :key="data.type" class="digimon-type">
              <strong>Tipo:</strong> {{ data.type }}
            </p>
            <p v-for="data in levels" :key="data.level" class="digimon-level">
              <strong>Nivel:</strong> {{ data.level }}
            </p>
          </div>
        </div>
     
        <!-- Contenedor de los botones (ligeramente a la derecha) -->
        <div class="digimon-buttons-container">
          <router-link :to="{name:'Descripcion', params:{ idrouter: id }}">
            <button class="button button-description">Descripción</button>
          </router-link>
          <router-link :to="{ name: 'Campos', params: { idrouter: id } }">
            <button class="button button-fields">Campos</button>
          </router-link>
          <router-link :to="{ name: 'Habilidades', params: { idrouter: id } }">
            <button class="button button-abilities">Habilidades</button>
          </router-link>
          <router-link :to="{ name: 'EvolucionesPrevias', params: { idrouter: id } }">
            <button class="button button-prior-evolutions">Evoluciones Previas</button>
          </router-link>
          <router-link :to="{ name: 'EvolucionesSiguientes', params: { idrouter: id } }">
            <button class="button button-next-evolutions">Siguientes Evoluciones</button>
          </router-link>
        </div>
      </div>
    </div>
  </template>
 
  <script setup>
    const props = defineProps({
      images: String,
      attributes: Array,
      name: String,
      types: Array,
      levels: Array,
      id: Number,
    });
  </script>
