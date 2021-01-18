<template>
    <section class="question_single__comments">
        <div class="comments_divider"></div>
        <h1 class="question_single__comments__title">Comments</h1>
        <div class="comments_divider"></div>
        <textarea ref="commentArea" name="comment_input" rows="10" placeholder="Say something..."></textarea>
        <button @click="addComment">Submit your answer</button>
        <!-- comments list -->
        <ul class="question_single__comments__list">
            <comments-single v-for="(cm, i) in comments" :key="i" :creator="cm.creator" :body="cm.text" :is-q-creator="isQuestionCreator" :question-id="postId" />
        </ul>
    </section>
</template>

<script>
import commentsSingle from "@/components/questions/commentsSingle";
export default {
    components: {
        commentsSingle,
    },
    props: {
        data: {
            type: Array,
            default: () => [],
        },
        postId: {
            type: String,
            required: true,
        },
        isQuestionCreator: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            comments: this.data,
        };
    },
    methods: {
        addComment() {
            const _val = this.$refs.commentArea.value;
            if (_val) {
                // send api request
                // get loggedIn user
                const commentTemplate = {
                    creator: {
                        name: "anonymous",
                        image: "https://dwpdobr8xeaso.cloudfront.net/wgvs-images/avatars/profile_llama@4x.png",
                    },
                    text: _val,
                };

                if (this.$store.getters.GET_AUTH_STATUS) {
                    const userData = this.$store.getters.GET_USERDATA;
                    commentTemplate.creator.name = userData.name;
                    commentTemplate.creator.image = userData.image;
                }

                this.$axios
                    .$post("/addComment", {
                        ...commentTemplate,
                        id: this.postId,
                    })
                    .then(() => {
                        this.comments.unshift(commentTemplate);
                    });
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.question_single__comments {
    width: 800px;
    margin: 0 auto;
    margin: 80px auto 1000px auto;

    &__title {
        font-size: 19px;
        font-weight: 400;
        margin: 30px 0;
    }

    &__list {
        margin-top: 40px;

        & > li {
            margin-bottom: 40px;
            padding-bottom: 40px;
        }

        & > li:not(:last-child) {
            border-bottom: 1px solid $gray-border;
        }
    }

    & > button {
        background: $color-primary;
        color: white;
        padding: 11px 14px;
        border-radius: $btn-border-radius;
    }
}

.comments_divider {
    width: 100%;
    height: 1px;
    border: 1px dashed $gray-4;
}

textarea {
    font-family: inherit;
    min-width: 100%;
    max-width: 100%;
    margin-top: 30px;
}
</style>
