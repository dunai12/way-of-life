<template>
    <div class="progress-line">
        <div class="progress-line__date">{{date}}</div>
        <div class="progress-line__line">
            <div class="progress-line__part progress-line__part_success" :style="widths.success" />
            <div class="progress-line__part progress-line__part_fail" :style="widths.fail" />
        </div>
        <switch-popup :show="switchPopup.show" :buttons="switchPopup.buttons"/>
    </div>
</template>

<script>
import SwitchPopup from './SwitchPopup.vue';

let switchPopupButtons = [
    {
        name: 'Текущая недель',
        event: () => {
            console.log('Текущая недель');
        }
    },
    {
        name: 'Месяц',
        event: () => {
            console.log('Месяц');
        }
    }
];

export default {
    data: function() {
        return {
            switchPopup: {
                show: false,
                buttons: [
                    {
                        name: 'Текущая недель',
                        event: () => {
                            console.log('Текущая недель');
                        }
                    },
                    {
                        name: 'Месяц',
                        event: () => {
                            console.log('Месяц');
                        }
                    }
                ]
            }
        };
    },
    props: {
        percents: {
            type: Object,
            default: function() {
                return {
                    success: 0,
                    fail: 0
                };
            }
        },
        date: {
            type: String,
            required: true
        }
    },
    computed: {
        widths: function() {
            let pers = this.percents;
            return {
                success: {width: pers.success + '%'},
                fail: {width: pers.fail + '%'}
            };
        }
    },
    components: {
        SwitchPopup
    }
};
</script>

<style lang="scss" scoped>
    .progress-line{

    }
    .progress-line__date{
        color: $blue;
        font-size: 12px;
        font-weight: 600;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        &:after{
            content: "";
            margin-left: 5px;
            border: 4px solid transparent;
            border-top-color: $blue;
        }
    }
    .progress-line__line{
        display: flex;
        height: 10px;
        border-radius: 5px;
        overflow: hidden;
        background-color: $light-gray;
    }
    .progress-line__part{
        height: 100%;
        &_success{
            background-color: $green;
        }
        &_fail{
            background-color: $red;
        }
    }
</style>
