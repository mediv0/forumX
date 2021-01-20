<template>
    <section class="dQuestions">
        <h1>Your Questions</h1>
        <ul class="dQuestions__list">
            <li v-for="(q, i) in questions" :key="i" class="dQuestions__list__item">
                <details>
                    <summary>
                        <p>{{ q.title }}</p>
                        <p v-if="q.comments.length" class="dQuestions__label dQuestions__label--blue">{{ q.comments.length }}</p>
                        <p v-if="q.solved" class="dQuestions__label dQuestions__label--green">SOLVED</p>
                    </summary>
                    {{ q.body }}
                </details>
                <p @click="remove(q._id, i)" class="dQuestions__list__item__remove">Remove</p>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    async fetch() {
        const { email } = this.$store.getters.GET_USERDATA;
        this.questions = await this.$axios.get(`/user/${email}`).then((res) => res.data);
    },
    data() {
        return {
            questions: [],
        };
    },
    methods: {
        async remove(id, index) {
            try {
                await this.$axios.post("/remove", {
                    id,
                });
                this.questions.splice(index, 1);
            } catch (e) {
                console.log("something is wrong");
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.dQuestions {
    margin: 50px 0;

    &__list {
        &__item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid $gray-border;

            &__remove {
                font-weight: 700;
                font-size: 13px;
                color: red;
                cursor: pointer;
                margin-left: 50px;
            }
        }
    }
    &__label {
        font-size: 10px;
        color: white;
        font-weight: 400;
        padding: 2px 6px;
        border-radius: 99px;

        &--blue {
            background: $color-primary;
            margin-left: 10px;
        }

        &--green {
            background: $color-green;
            margin-left: 4px;
        }
    }
}

h1 {
    font-weight: 400;
    border-bottom: 1px solid $gray-border;
    padding-bottom: 8px;
}

details {
    margin-top: 19px;
    padding-bottom: 19px;
    font-size: 14px;
    font-weight: 400;
    color: $gray-1;
    summary {
        cursor: pointer;
        display: flex;
        align-items: center;
        outline: none;
        border: none;
        font-size: 18px;
        font-weight: 700;
        color: black;
        margin-bottom: 4px;
    }
}
</style>
