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

<style scoped>
    .nav-menu{
        padding: 0;
        margin: 0;
    }
</style>
