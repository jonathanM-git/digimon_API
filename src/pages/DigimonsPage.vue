<template>
    <div class="container">
        <!-- Buscador de Digimon -->
        <div class="busqueda">
            <input v-model="nombreBusqueda" @input="filtrarDigimons" type="text" placeholder="Buscar por nombre" />
            <button @click="resetearBusqueda">Resetear Búsqueda</button> <!-- Botón para resetear -->
        </div>

        <!-- Contenedor principal -->
        <div class="digimon-container">
            <digimonBoxComponent v-for="digimon in digimonList" :key="digimon.id" :name="digimon.name" :id="digimon.id" :image="digimon.image" data-aos="zoom-in" data-aos-delay="300"/>
        </div>
    
        <!-- Controles de paginación -->
        <div class="pagination-controls">
            <button @click="PaginaAnterior">Anterior</button>
            <button @click="PaginaSiguiente">Siguiente</button>
        </div>
        <button @click="mostrarInformacion" class="info-button">
            Informacion
        </button>
        
    </div>

</template>

<script setup>
    import { ref, watch } from 'vue';
    import digimonBoxComponent from '@/components/digimonBoxComponent.vue';
    import Swal from 'sweetalert2'; // Importar SweetAlert2


    const digimonList = ref([]);
    const PaginaActual = ref(0);
    const nombreBusqueda = ref(""); // El valor de la búsqueda

    const fetchDigimons = (page) => {
        fetch(`https://digi-api.com/api/v1/digimon?pageSize=10&page=${page}`)
            .then(response => response.json())
            .then(data => {
                digimonList.value = data.content;
            });
    };

    // Función para filtrar los Digimons mientras escribes en el buscador
    const filtrarDigimons = () => {
        if (nombreBusqueda.value.trim()) {
            fetch(`https://digi-api.com/api/v1/digimon?name=${nombreBusqueda.value}&pageSize=100`)
                .then(response => response.json())
                .then(data => {
                    if (data.content && data.content.length > 0) {
                        digimonList.value = data.content;
                    } 
                    // else {
                    //     digimonList.value = [];
                    //     alert("No se encontró ningún digimon con ese nombre.");
                    // }
                })
        } else {
            fetchDigimons(PaginaActual.value);  // Si no hay búsqueda, mostrar todos los digimons
        }
    };

    // Función para resetear la búsqueda y mostrar todos los digimons
    const resetearBusqueda = () => {
        nombreBusqueda.value = "";
        fetchDigimons(PaginaActual.value);  // Volver a cargar todos los digimons
    };

    // Inicializar con la primera página
    fetchDigimons(PaginaActual.value);

    // Función para ir a la página anterior
    const PaginaAnterior = () => {
        if (PaginaActual.value > 0) {
            PaginaActual.value--;
            fetchDigimons(PaginaActual.value);
        }
    };

    // Función para ir a la página siguiente
    const PaginaSiguiente = () => {
        PaginaActual.value++;
        fetchDigimons(PaginaActual.value);
    };

    // Función para mostrar información sobre los Digimons
    const mostrarInformacion = () => {
        Swal.fire({
            title: '¿Qué son los Digimons?',
            text: 'Los Digimons son criaturas digitales que evolucionan a lo largo de varias etapas. Cada Digimon tiene habilidades únicas y campos específicos. ¡Explora su mundo y aprende más!',
            icon: 'info',
            confirmButtonText: 'Entendido',
            background: '#f9f9f9',
            color: '#333',
            confirmButtonColor: '#4CAF50',
        });
    };
</script>

