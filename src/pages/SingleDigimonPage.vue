<template>
    <div>
        <router-link to="/digimons">
            <button class="back-button">Atras</button>
        </router-link>

        <!-- Digimon {{ id2 }} -->
        <SingledigimonBoxComponent 
            :attributes="digimon?.attributes" 
            :images="digimon?.images" 
            :types="digimon?.types" 
            :levels="digimon?.levels" 
            :name="digimon?.name"
        />

        <!-- Mostrar evoluciones agrupadas por nivel -->
        <h2>Perfect Evolutions</h2>
        <div v-if="evolutionData.Perfect">
            <div v-for="evolucion in evolutionData.Perfect" :key="evolucion.id">
                <evolutionsBoxComponent 
                    :nombre="evolucion.name" 
                    :image="evolucion.images?.[0]?.href" 
                    :level="evolucion.level"
                />
            </div>
        </div>

        <h2>Ultimate Evolutions</h2>
        <div v-for="evolucion in evolutionData.Ultimate" :key="evolucion.id">
        <evolutionsBoxComponent 
            :nombre="evolucion.name" 
            :image="evolucion.images?.[0]?.href" 
            :level="evolucion.level"
        />
        </div>

        <h2>Chill Evolutions</h2>
        <div v-for="evolucion in evolutionData.Chill" :key="evolucion.id">
        <evolutionsBoxComponent 
            :nombre="evolucion.name" 
            :image="evolucion.images?.[0]?.href" 
            :level="evolucion.level"
        />
        </div>

        <h2>Adult Evolutions</h2>
        <div v-for="evolucion in evolutionData.Adult" :key="evolucion.id">
        <evolutionsBoxComponent 
            :nombre="evolucion.name" 
            :image="evolucion.images?.[0]?.href" 
            :level="evolucion.level"
        />
        </div>

        <h2>Hybrid Evolutions</h2>
        <div v-for="evolucion in evolutionData.hybrid" :key="evolucion.id">
        <evolutionsBoxComponent 
            :nombre="evolucion.name" 
            :image="evolucion.images?.[0]?.href" 
            :level="evolucion.level"
        />
        </div>
    </div>
</template>

<script setup>
import SingledigimonBoxComponent from '@/components/SingledigimonBoxComponent.vue';
import evolutionsBoxComponent from '@/components/evolutionsBoxComponent.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const digimon = ref({});
const evolucionesList = ref([]);

// Cambiar perfect a un array vacío, no objeto
const perfect = ref([]); 

let route = useRoute();
let id2 = ref(route.params.idrouter);

let evolutionData = ref({
});

onMounted(() => {
    fetch("https://digi-api.com/api/v1/digimon/" + route.params.idrouter)
        .then(response => response.json())
        .then(data => {
            digimon.value.name = data.name;
            digimon.value.attributes = data.attributes;
            digimon.value.types = data.types;
            digimon.value.levels = data.levels;
            digimon.value.images = data.images[0]?.href;

            evolucionesList.value = data.nextEvolutions;

            /*evolucionesList.value.forEach((element) => {
                fetch(element.url)
                    .then(response => response.json())
                    .then(data2 => {
                        // Verifica que se recibe la evolución correctamente
                        console.log("Evolución data2:", data2);
                        
                        if (data2.levels?.[0]?.level === "perfect") {
                            // Agregar la evolución perfecta al array 'perfect'
                            perfect.value.push({
                                id: data2.id,
                                name: data2.name,
                                image: data2.images?.[0]?.href,
                                level: data2.levels?.[0]?.level
                            });
                        }
                    });
            });*/

            evolucionesList.value.forEach((element) => {
                fetch(element.url)
                    .then(response => response.json())
                    .then(data2 => {
                        //Perfect
                        let currentLevel = data2.levels[0].level;

                        if(evolutionData.value[currentLevel] ==  undefined){
                            evolutionData.value[currentLevel] = [];
                        }

                        evolutionData.value[currentLevel].push(data2);
                    })});


                console.log(evolutionData.value);
            // Verifica que 'perfect' contiene los datos correctos después de la carga
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
