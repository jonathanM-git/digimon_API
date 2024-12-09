<template>
  <div class="home-container">
    <!-- Video de fondo -->
    <video class="background-video" autoplay loop muted>
      <source src="/video/Digimon Adventure 01 Opening Español Latino (720p).mp4" type="video/mp4" />
      Tu navegador no soporta videos HTML5.
    </video>

    <!-- Botón centrado en la parte inferior -->
    <div class="button-container">
      <router-link to="/digimons">
        <button class="digimon-button">Adentrate en el mundo de Digimon</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Swal from 'sweetalert2'; // Importar SweetAlert2
onMounted(() => {
  Swal.fire({
      title: '¡Bienvenido a Digimon!',
      text: 'Explora los Digimons y sus características.',
      confirmButtonText: 'Acceder', // Texto del botón
      confirmButtonColor: '#28a745',   // Verde estilo Bootstrap
    });
});
</script>

<style scoped>
/* Contenedor principal para la página */
.home-container {
  position: fixed; /* Ocupa toda la pantalla y permanece fijo */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Oculta cualquier desbordamiento */
  z-index: 1;
}

/* Video de fondo */
.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw; /* Ancho total de la pantalla */
  height: 100vh; /* Altura total de la pantalla */
  object-fit: cover; /* Ajusta el video para cubrir toda el área */
  z-index: -1; /* Envía el video detrás de los demás elementos */
}

/* Contenedor para el botón */
.button-container {
  position: absolute;
  bottom: 20px; /* Espaciado desde la parte inferior */
  width: 100%;
  display: flex;
  justify-content: center;
}

/* Estilo del botón */
.digimon-button {
  background-color: #ffcc00; /* Amarillo estilo Digimon */
  color: #333;
  font-size: 1.5em;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, background-color 0.3s;
}

.digimon-button:hover {
  background-color: #ffaa00;
  transform: scale(1.1); /* Efecto de agrandamiento */
}
</style>
