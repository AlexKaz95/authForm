<template>
    <div class="titles-container">
        <div class="title" :class="{active: tab.active}" v-for="tab in tabs" @click="$emit('title-click', tab.title)">
            <span>{{ tab.title }}</span>
        </div>
    </div>
    <div class="tabs-container">
        <template v-for="tab in tabs">
            <div class="tab" v-if="tab.active">
                <component :is="tab.content"></component>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
    defineProps(['tabs']);
    defineEmits(['title-click'])
</script>

<style scoped>
.titles-container{
    display: flex;
}
.tabs-container{
}   
.title{
    border: 1px solid #ddd;
    background-color: #ddd;
    padding: 8px 16px;
    cursor: pointer;
}

.title.active{
    font-weight: bold;
    background-color: #fff;
}
.tab{
    border: 1px solid #ddd;
}
</style>