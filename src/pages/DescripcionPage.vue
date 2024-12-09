<template>
    <div>
        <router-link :to="`/digimon/${id2}`">
            <button class="back-button">Atras</button>
        </router-link>

        <!-- Digimon {{ id2 }} -->
        <h1>{{ nameList }}</h1>
        
        <div class="descripcion" data-aos="slide-up" data-aos-duration="1000">
            <p>{{ descripcionList.descriptions }}</p>
        </div>
        
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const descripcionList = ref({});
const nameList = ref({});
let route = useRoute();
let id2 = ref(route.params.idrouter);

    onMounted(()=>{
        fetch("https://digi-api.com/api/v1/digimon/" + route.params.idrouter)
        .then(response => response.json())
        .then((data) =>{

            descripcionList.value.descriptions = data.descriptions[1]?.description;
            nameList.value = data.name;
            
        });
    });


</script>
<style scoped>
/* Fuente de estilo Digimon (fuente retro pixelada) */
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    left: 50%;
    min-height: 100vh;
    background-color: #f4f4f9;
    text-align: center;
    font-family: 'Press Start 2P', cursive; /* Fuente estilo Digimon */
}

.descripcion {
    margin-top: 5%;
    margin-left: 15%;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.7); /* Fondo oscuro con transparencia */
    color: white;
    font-size: 1.5em; /* Aumenta el tamaño de la fuente */
    line-height: 1.5;
    width: 80%; /* Ancho del contenedor de la descripción */
    max-width: 70%; /* Ancho máximo para no ocupar toda la pantalla */
    box-sizing: border-box;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    word-wrap: break-word; /* Asegura que el texto no se desborde */
}

h1 {
    font-size: 3.5em; /* Tamaño grande pero no exagerado */
    font-family: 'Arial', sans-serif; /* Fuente limpia y moderna */
    font-weight: 600; /* Peso de la fuente moderado */
    text-align: center; /* Centrado del texto */
    margin: 20px 0; /* Espaciado superior e inferior */
    text-transform: uppercase; /* Mayúsculas */
    letter-spacing: 3px; /* Espaciado entre letras */
    background: linear-gradient(to bottom, #f8bf79, #FF6F00); /* Degradado de blanco a naranja */
    -webkit-background-clip: text; /* Aplica el fondo solo al texto */
    background-clip: text; /* Necesario para la compatibilidad en navegadores no webkit */
    color: transparent; /* Hace que el color de texto sea transparente para ver el degradado */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Sombra suave para darle profundidad */
    -webkit-text-stroke: 2px #ADD8E6; /* Borde de 2px de color azul claro */

}

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

