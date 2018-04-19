<template>
    <div class="journal">
        <div class="journal__header">
            <div class="journal__header-top">
                <div class="journal__change">Change</div>
                <div class="journal__progress-line">
                    <progless-line
                        :percents="{success: 40, fail: 30}"
                        date="Текущая неделя"
                    />
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
    .journal__header-top{
        display: flex;
        /* display: grid;
        grid-template-columns: 100px 200px 100px; */
    }
    .journal__progress-line{
    }
</style>
