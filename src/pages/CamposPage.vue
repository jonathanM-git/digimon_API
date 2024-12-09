<template>
    <div class="container">
        <router-link :to="`/digimon/${id2}`">
            <button class="back-button">Atras</button>
        </router-link>
    
        <div class="title">Campos {{ name }}</div>
        
        <!-- Mostrar el campo field y la imagen relacionada -->
        <div class="descripcion" data-aos="slide-up" data-aos-duration="1000">
            <ul>
            <li v-for="data in fieldsList.fields" class="field-item">
                <div class="field-container">
                <!-- Mostrar el campo -->
                <span class="field-text">{{ data.field }}</span>
                <!-- Mostrar la imagen asociada al campo -->
                <img :src="data.image" class="field-image" alt="Imagen relacionada con el campo"/>
                </div>
            </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    
    const fieldsList = ref({});
    const name = ref({});
    let route = useRoute();
    let id2 = ref(route.params.idrouter);
    
    onMounted(() => {
        fetch("https://digi-api.com/api/v1/digimon/" + route.params.idrouter)
        .then(response => response.json())
        .then((data) => {
            fieldsList.value.fields = data.fields;
            name.value = data.name;
        });
    });
</script>

<style scoped>
  /* Contenedor principal centrado */
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        font-family: 'Arial', sans-serif;
        margin: auto;
    }
    
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
    
    /* Estilo para el título */
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
    
    /* Estilo de la descripción de los campos */
    .descripcion {
        width: 80%;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        font-size: 1.2em;
        line-height: 1.6;
        text-align: center;
    }
    
    .field-item {
        margin: 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #ddd;
    }
    
    .field-container {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease;
    }
    
    .field-text {
        font-size: 1.2em;
        font-weight: 500;
        margin-right: 15px;
        color: #555;
    }
    
    /* Estilo para las imágenes */
    .field-image {
        width: 60px;
        height: 60px;
        border-radius: 8px;
        object-fit: cover;
        transition: transform 0.3s ease;
    }
    .field-container:hover {
        transform: scale(1.1);
    }
    
    @media (max-width: 768px) {
        .container {
            padding: 10px;
        }
    
        .descripcion {
            width: 100%;
        }
    }
</style>
