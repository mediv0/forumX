<template>
    <ul class="tags">
        <li class="tags__input"><input v-model="tagValue" type="text" placeholder="tag name + enter" @keypress.enter.prevent="add" /></li>
        <div class="tags__items">
            <li v-for="(tgs, i) in tags" :key="i" class="tags__items__item">
                {{ tgs }}
                <div @click="remove(i)">X</div>
            </li>
        </div>
    </ul>
</template>

<script>
export default {
    props: {
        clear: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            tagValue: null,
            tags: [],
        };
    },
    watch: {
        tags() {
            this.$emit("tags", this.tags);
        },
        clear(nV, oV) {
            nV === true && (this.tags = []);
        },
    },
    methods: {
        add() {
            if (this.tagValue) {
                this.tags.push(this.tagValue);
                this.tagValue = null;
            }
        },
        remove(index) {
            this.tags.splice(index, 1);
        },
    },
};
</script>

<style lang="scss" scoped>
.tags {
    &__input {
        display: block;
    }

    &__items {
        display: flex;
        flex-wrap: wrap;

        &__item {
            padding: 4px 7px;
            color: $gray-1;
            background: $gray-border;
            border-radius: 7px;
            margin: 5px;

            display: flex;
            align-items: center;

            & > div {
                cursor: pointer;
                margin-left: 10px;
                color: black;
            }
        }
    }
}
</style>
