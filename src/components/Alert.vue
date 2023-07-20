<template>
    <div class="alert" v-for="value in errors">
        <small>Ошибка {{ value }}</small>
    </div>
</template>

<script setup lang="ts">
    defineProps(["errors"]);
</script>

<style scoped>
.alert{

}

</style>