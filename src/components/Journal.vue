<template>
    <div class="journal">
        <div class="journal__header">
            <div class="journal__header-top">
                <div class="journal__change">Change</div>
                <div class="journal__progress-line">
                    <progless-line/>
                </div>
                <div class="journal__add">+</div>
            </div>
        </div>
        <div class="journal__content"></div>
    </div>
</template>

<script>
import proglessLine from './ProglessLine.vue';
export default {
    components: {
        proglessLine
    }
};
</script>

<style scoped>

</style>
