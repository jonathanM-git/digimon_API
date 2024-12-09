<template>
    <div>
        <router-link to="/digimons">
            <button class="back-button">Atras</button>
        </router-link>

        <!-- Digimon {{ id2 }} -->
        

        <SingledigimonBoxComponent :attributes="digimon?.attributes" :images="digimon?.images" :types="digimon?.types" :levels="digimon?.levels" :name="digimon?.name"></SingledigimonBoxComponent>
        
    </div>
</template>

<script setup>
import SingledigimonBoxComponent from '@/components/SingledigimonBoxComponent.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const digimon = ref({});
let route = useRoute();
let id2 = ref(route.params.idrouter);
// const attributes = ref([]); // Lista de atributos
// const types = ref([]); // Lista de tipos
// const levels = ref([]); // Lista de niveles

    onMounted(()=>{
        fetch("https://digi-api.com/api/v1/digimon/" + route.params.idrouter)
        .then(response => response.json())
        .then((data) =>{

            digimon.value.name = data.name;
            digimon.value.attributes = data.attributes;
            digimon.value.types = data.types;
            digimon.value.levels = data.levels;
            digimon.value.images = data.images[0]?.href // Asignamos la URL de la imagen

        });
    });


</script>

<style scoped>
/* Estilo para el botón de regresar */
.back-button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

.back-button:hover {
    background-color: #45a049;
}
</style>