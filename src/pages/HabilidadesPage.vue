<template>
    <div class="container">
        <!-- Botón para regresar -->
        <router-link :to="`/digimon/${id2}`">
            <button class="back-button">Atrás</button>
        </router-link>

        <!-- Título de la página -->
        <div class="title">Habilidades {{ name }}</div>

        <!-- Contenedor de habilidades -->
        <div class="skills-container" data-aos="fade" data-aos-duration="1000">
            <div v-for="data in skillList.skills" :key="data.skill" class="skill-card">
                <h3 class="skill-name">{{ data.skill }}</h3>
                <p class="skill-description">{{ data.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const skillList = ref({});
const name = ref({});
let route = useRoute();
let id2 = ref(route.params.idrouter);

onMounted(() => {
    fetch("https://digi-api.com/api/v1/digimon/" + route.params.idrouter)
        .then(response => response.json())
        .then((data) => {
            skillList.value.skills = data.skills;
            name.value = data.name;
        });
});
</script>

<style scoped>
/* Contenedor principal */
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 20px;
    font-family: 'Arial', sans-serif;
    text-align: center;
    margin: auto;
}

/* Botón de regresar */
.back-button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
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

/* Contenedor de habilidades */
.skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;

}

/* Tarjetas de habilidades */
.skill-card {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    /* transition: transform 0.3s, box-shadow 0.3s; */
}

/* .skill-card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
} */

/* Nombre de la habilidad */
.skill-name {
    font-size: 1.5em;
    color: #4CAF50;
    margin-bottom: 10px;
    font-weight: bold;
}

/* Descripción de la habilidad */
.skill-description {
    font-size: 1.1em;
    color: #555;
    line-height: 1.6;
}

/* Responsividad */
@media (max-width: 1090px) {
    .title {
        font-size: 2em;
        margin-bottom: 20px;
    }

    .skills-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 20px;
        width: 100%;
        max-width: 1200px;
    }

    .skill-card {
        padding: 15px;
    }
}
@media (max-width: 768px) {
    .title {
        font-size: 2em;
        margin-bottom: 20px;
    }

    .skills-container {
        gap: 15px;
        grid-template-columns: 1fr;
    }

    .skill-card {
        padding: 15px;
    }
}

@media (max-width: 480px) {
    .title {
        font-size: 1.5em;
        letter-spacing: 1px;
    }

    .skill-card {
        padding: 10px;
    }

    .skill-name {
        font-size: 1.3em;
    }

    .skill-description {
        font-size: 1em;
    }
}
</style>
