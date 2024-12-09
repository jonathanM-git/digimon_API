<template>
    <div class="container">
        <!-- Botón de regreso alineado a la izquierda -->
        <div class="back-button-container">
            <router-link :to="`/digimon/${id2}`">
                <button class="back-button">Atrás</button>
            </router-link>
        </div>

        <!-- Título del Digimon -->
        <div class="title">{{ name }}</div>

        <!-- Carrusel de evoluciones -->
        <div class="digimons-container">
            <Splide :options="{ gap: 20, perPage: 3, padding: { left: 80, right: 80 }, pagination: false  }" class="home-carrousel">
                <SplideSlide v-for="digimon in evolucionesList.nextEvolutions">
                    <div class="digimon-card">
                        <!-- Imagen del Digimon -->
                        <img :src="digimon?.image" alt="Imagen del Digimon" class="digimon-image" />
                        <!-- Nombre del Digimon -->
                        <div class="digimon-name">{{ "#" + digimon?.id + " " + digimon?.digimon }}</div>
                        <!-- Botón para ver características -->
                        <router-link :to="{ name: 'SingleDigimonPage', params: { idrouter: digimon?.id }}">
                            <button class="button button-caracteristicas">Ver características</button>
                        </router-link>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import '@splidejs/splide/dist/css/splide.min.css';

const evolucionesList = ref({ nextEvolutions: [] });
const name = ref('');
const route = useRoute();
const id2 = ref(route.params.idrouter);

onMounted(() => {
    fetch(`https://digi-api.com/api/v1/digimon/${route.params.idrouter}`)
        .then((response) => response.json())
        .then((data) => {
            evolucionesList.value.nextEvolutions = data.nextEvolutions;
            name.value = data.name;
        });
});
</script>

<style scoped>
/* Contenedor general */
.container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    padding: 20px;
}

/* Botón de regreso */
.back-button-container {
    align-self: flex-start;
    margin-bottom: 20px;
}
.back-button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
.back-button:hover {
    background-color: #45a049;
}

/* Título */
.title {
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

/* Contenedor del carrusel */
.digimons-container {
    width: 100%;
    max-width: 1200px;
    padding: 40px 0;
}

/* Carrusel */
.home-carrousel {
    margin: 0 auto;
}

/* Tarjeta de cada Digimon */
.digimon-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10px;
    background: #ffffff;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}
/* .digimon-card:hover {
    transform: scale(1.05);
} */

/* Imagen del Digimon */
.digimon-image {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 10px;
}

/* Nombre del Digimon */
.digimon-name {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
}

/* Botón de descripción */
.button-caracteristicas {
    width: 100%; /* Asegura que ocupe todo el ancho de la tarjeta */
    padding: 10px;
    margin-top: 10px;
    font-size: 14px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
.button-caracteristicas:hover {
    background-color: #0056b3;
}
</style>
