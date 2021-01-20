/* eslint-disable prettier/prettier */
<template>
    <main v-if="qData" class="question_single">
        <section class="question_single__landing">
            <div class="question_single__landing__img">
                <img :src="qData.creator.image" alt="profile image" width="35" height="35" />
                <p>{{ qData.creator.name }}</p>
            </div>
            <p class="question_single__landing__title">Q: {{ qData.title }}</p>
            <div class="question_single__landing__tags">
                <tags :tags="qData.tags" class="question_single__landing__tags__tg" />
                <p class="question_single__landing__tags__date">Created At {{ qData.createdAt }}</p>
                <p>{{ qData.comments.length }} Answers</p>
                <p v-if="qData.solved.status" class="question_single__landing__tags__label">SOLVED</p>
            </div>
        </section>
        <section class="question_single__content">
            <article class="question_single__content__asked">{{ qData.body }}</article>
            <participants :data="qData.comments" />
        </section>
        <section v-if="qData.solved.status" class="question_single__best">
            <h1 class="question_single__best__title">Best Answer</h1>
            <solved :author="qData.solved.creator" :body="qData.solved.text" />
        </section>
        <comments :data="qData.comments" :post-id="qData._id" :is-question-creator="isQuestionCreator" />
    </main>
    <null-question v-else />
</template>

<script>
import tags from "@/components/tagList";
import participants from "@/components/questions/participants";
import comments from "@/components/questions/comments";
import nullQuestion from "@/components/questions/nullQuestion";
import solved from "@/components/questions/solved";
export default {
    components: {
        tags,
        participants,
        comments,
        nullQuestion,
        solved,
    },
    async asyncData({ redirect, params, route, $axios }) {
        let qData = null;
        if (route.params.data) {
            qData = route.params.data;
            return { qData };
        }

        try {
            qData = await $axios.get(`/questions/${params.question}`).then((res) => res.data);
        } catch (e) {
            qData = null;
        }

        return { qData };
    },
    computed: {
        isQuestionCreator() {
            const { email } = this.$store.getters.GET_USERDATA;
            return email === this.qData.creator.email;
        },
    },
};
</script>

<style lang="scss" scoped>
.question_single {
    margin-top: 80px;
    &__landing {
        &__img {
            display: flex;
            align-items: center;
            font-size: 15px;

            & > p {
                margin-left: 5px;
            }
        }

        &__title {
            font-size: 27px;
            margin-bottom: 40px;
            margin-top: 5px;
        }

        &__tags {
            display: flex;
            align-items: center;
            @include query(649px) {
                flex-direction: column;
                align-items: flex-start;
            }

            &__tg {
                margin-top: 3px;
            }

            &__date {
                margin-right: 100px;
                margin-left: 10px;
                font-weight: 700;
                font-size: 13px;
                color: $gray-3;

                @include query(649px) {
                    margin-right: 0px;
                    margin-left: 0px;
                }

                & ~ p {
                    font-size: 12px;
                }

                & + p {
                    // answers p tag
                    margin-right: 10px;
                    color: $color-primary;
                }
            }

            &__label {
                background: $color-green;
                color: white;
                padding: 4px 7px;
                border-radius: 5px;
            }
        }
    }

    &__content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 80px;

        @include query(762px) {
            flex-direction: column;
        }
        &__asked {
            flex: 1;
            border-radius: $btn-border-radius;
            box-shadow: 1px 1px 50px rgba($color: #000000, $alpha: 0.2);
            padding: 40px 50px;

            font-size: 15px;
            line-height: 32px;

            @include query(762px) {
                width: 100%;
            }
        }
    }

    &__best {
        margin-top: 40px;

        &__title {
            font-size: 17px;
            font-weight: 700;
            margin-bottom: 10px;
        }
    }
}
</style>
