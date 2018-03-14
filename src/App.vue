<template>
    <div class="main-container">
        <nav-menu></nav-menu>
    </div>
</template>

<script>
import navMenu from './components/NavMenu.vue';
export default {
    name: 'App',
    components: {
        navMenu
    }
};
</script>

<style lang="scss" scoped>
    // @import "./main.scss";
    .main-container{
        background-color: #fff;
        max-width: 768px;
        margin: 0 auto;
        height: 100%;
        display: flex;
    }
</style>
