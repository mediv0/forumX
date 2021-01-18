<template>
    <ul class="tags">
        <li v-for="(t, i) in tags" :key="i" class="tags__item">{{ t }}</li>
    </ul>
</template>

<script>
export default {
    props: {
        tags: {
            type: Array,
            default: () => [],
        },
    },
};
</script>

<style lang="scss" scoped>
.tags {
    display: flex;
    flex-wrap: wrap;

    &__item {
        font-size: 0.714rem;
        color: $gray-1;
        background: $gray-border;
        border-radius: 2px;
        padding: 3px 5px;
        margin-right: 3px;
        margin-bottom: 3px;
    }
}
</style>
