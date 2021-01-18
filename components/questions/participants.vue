<template>
    <div class="question_single__content__participants">
        <p class="question_single__content__participants__title">Participants</p>
        <ul class="question_single__content__participants__list">
            <li v-for="(p, i) in data" :key="i"><img :src="p.creator.image" alt="participant image" /></li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default: () => [],
        },
    },
};
</script>

<style lang="scss" scoped>
.question_single__content__participants {
    @include highlightedBox;
    width: 280px;
    margin-left: 20px;
    padding: 25px 30px;

    &__title {
        font-weight: 700;
    }

    &__list {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;

        & > li {
            width: 40px;
            height: 40px;
            margin-bottom: 10px;
            margin-left: 5px;

            & > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 99px;
            }
        }
    }
}
</style>
