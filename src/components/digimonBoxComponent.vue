<template>
    <div class="digimon-box-item">
        <router-link :to="{name:'SingleDigimonPage', params:{ idrouter: id }}">
            <div class="digimon-box-img-container">
                <img :src="image">
            </div>

            <span>{{ "#" + id + " " + name }}</span>
            <img :src="imagenfield">
            <!-- <ul>                fields[i].field -->
                <!-- <li v-for="data in field">  {{data.field }}</li>
            </ul>
            <ol>
                <li v-for="data2 in attributes">  {{data2.attribute }}</li>
            </ol> -->
        </router-link>

    </div>

</template>

<script setup>
    const props = defineProps({
        image: String,
        name: String,
        id: Number
        // imagenfield: String,
        // field:Array,
        // attributes: Array,
    });
</script>