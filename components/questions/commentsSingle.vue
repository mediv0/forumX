<template>
    <li class="comment_single_item">
        <div class="comment_single_item__side">
            <img :src="creator.image" alt="user avatar" width="80" height="80" />
            <button v-if="isQCreator" @click="markAsSolved">accept</button>
        </div>
        <div class="comment_single_item__content">
            <p>
                <b>{{ creator.name }}</b> said:
            </p>
            <p>
                {{ body }}
            </p>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        creator: {
            type: undefined,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        isQCreator: {
            type: Boolean,
            default: false,
        },
        questionId: {
            type: String,
            required: true,
        },
    },
    methods: {
        markAsSolved() {
            this.$axios.post("/markAsSolved", {
                id: this.questionId,
                status: true,
                text: this.body,
                creator: this.creator,
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.comment_single_item {
    width: 100%;
    display: flex;
    align-items: flex-start;

    &__content > p {
        line-height: 27px;
    }

    &__side {
        margin-right: 25px;
    }

    &__side > button {
        width: 80px;
        text-align: center;
        font-size: 11px;
        color: white;
        background: $color-primary;
        padding: 7px 0;
        margin-top: 5px;
        border-radius: 5px;
    }

    &__side > img {
        display: block;
        border-radius: 5px;
    }
}
</style>
