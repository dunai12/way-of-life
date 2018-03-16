<template>
    <ul class="nav-menu">
        <router-link
            v-for="(item, index) in items"
            :key="index"
            tag="li"
            class="nav-menu__item"
            active-class="nav-menu__item_active"
            :to="item.route">
            <span
                class="nav-menu__icon fas"
                :class="item.icon">
            </span>
            {{item.name}}
        </router-link>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    name: 'Журнал',
                    icon: 'fa-list-alt',
                    route: '/journal'
                },
                {
                    name: 'Графики',
                    icon: 'fa-signal',
                    route: '/statistics'
                },
                {
                    name: 'Заметки',
                    icon: 'fa-sticky-note',
                    route: '/notes'
                },
                {
                    name: 'Напоминания',
                    icon: 'fa-bell',
                    route: '/notifications'
                },
                {
                    name: 'Настройки',
                    icon: 'fa-cog',
                    route: '/settings'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
    // @import "../scss/variables";

    .nav-menu{
        width: 100%;
        display: flex;
        padding: 0;
        margin: 0;
        list-style: none;
        border-top: 1px solid $gray;
        align-self: flex-end;

        &__item{
            color: $gray;
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            padding: 10px 0 5px;
            font-size: 11px;
        }
        &__icon{
            font-size: 16px;
            margin-bottom: 5px;
        }
    }
</style>
