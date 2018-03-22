<template>
    <div class="main-container">
        <div class="main-container__content">
            <mainContent></mainContent>
        </div>
        <div class="main-container__nav">
            <nav-menu></nav-menu>
        </div>
    </div>
</template>

<script>
import navMenu from './components/rootComponents/NavMenu.vue';
import mainContent from './components/rootComponents/MainContent.vue';
export default {
    name: 'App',
    components: {
        navMenu,
        mainContent
    }
};
</script>

<style lang="scss" scoped>
    .main-container{
        background-color: #fff;
        max-width: 768px;
        margin: 0 auto;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .main-container__content{
        flex: 1 1 100%;
    }
    .main-container__nav{
        flex-grow: 0 0 auto;
    }
</style>
