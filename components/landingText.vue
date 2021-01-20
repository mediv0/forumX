<template>
    <article class="description">
        <h1 class="description__title">
            <p>👋</p>
            Questions are everywhere, answers are on <span>ForumX</span>
        </h1>
        <p class="description__info">Stack Overflow is an open community for anyone that codes. We help you get answers to your toughest coding questions, share knowledge with your coworkers in private, and find your next dream job.</p>
    </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.description {
    width: 50%;
    margin-top: 60px;

    @include query(896px) {
        width: 80%;
        text-align: center;
    }

    @include query(501px) {
        width: 100%;
    }
    &__title {
        font-weight: 400;
        font-size: 2.543rem;
        line-height: 38px;

        p {
            margin-bottom: 20px;
        }

        & > span {
            font-weight: 700;
        }
    }

    &__info {
        margin-top: 15px;
        width: 84%;
        color: $gray-1;
        font-size: 1.143rem;

        @include query(896px) {
            width: 100%;
        }
    }
}
</style>
