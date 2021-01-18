<template>
    <section class="questions">
        <div class="questions__sidebar">
            <p>🔥 <span>Have a question?</span> Ask your question by clicking on the ask button to post your question</p>
        </div>
        <div class="questions__content">
            <questions-list v-for="q in questions" :key="q.id" :data="q" class="qt" />
            <p class="questions__content__endTXT">End of the list</p>
        </div>
    </section>
</template>

<script>
import questionsList from "@/components/questionsList";
export default {
    components: {
        questionsList,
    },
    async fetch() {
        this.questions = await this.$axios.get("/questions").then((res) => res.data);
    },
    data() {
        return {
            questions: [],
        };
    },
};
</script>

<style lang="scss" scoped>
.questions {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 60px;

    &__sidebar {
        width: 300px;
        font-weight: 400;
        padding: 30px 25px;
        margin-top: 30px;

        position: -webkit-sticky;
        position: sticky;
        top: 20px;
        text-align: center;
        @include highlightedBox;

        & > p > span {
            font-weight: 700;
        }

        & > button {
            margin-top: 15px;
            padding: 5px 8px;
            color: white;
            background: $color-primary;
            border-radius: $btn-border-radius;

            &:hover {
                background: darken($color: $color-primary, $amount: 5);
            }
        }
    }

    &__content {
        flex: 1;
        height: 1000px;
        margin-left: 20px;

        &__endTXT {
            color: $gray-1;
            text-align: center;
            margin-top: 15px;
        }
    }
}

.qt {
    border-bottom: 1px solid $gray-border;
}
</style>
