<template>
    <div>
        <button v-for="(button, index) in buttons" :key="index">
            {{ button.name }}
        </button>
    </div>
</template>

<script>
export default {
    props: {
        buttons: Array
    }
};
</script>

<style scoped>

</style>
