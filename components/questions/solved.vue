<template>
    <article class="question_single__best__content">
        <div class="question_single__landing__img">
            <img :src="author.image" alt="profile image" width="35" height="35" />
            <p>
                <b>{{ author.name }}</b> said:
            </p>
        </div>
        <p>{{ body }}</p>
    </article>
</template>

<script>
export default {
    props: {
        author: {
            type: Object,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.question_single__best__content {
    padding: 40px 30px;
    border: 2.5px solid $color-green;
    border-radius: $btn-border-radius;
    background: lighten($color: $color-green, $amount: 55);

    & > p {
        margin-top: 16px;
    }
}
</style>
