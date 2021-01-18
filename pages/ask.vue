<template>
    <form class="ask" @submit.prevent="createQuestion">
        <label for="titleInput">Title</label>
        <input ref="title" class="input" type="text" name="titleInput" placeholder="Q: what is php...." />
        <label for="description">Your Question</label>
        <input ref="desc" class="input input__area" type="text" name="description" placeholder="Question Description..." />
        <div class="ask__divider"></div>
        <label for="tags">Question Tags</label>
        <tags :clear="done" @tags="setTags" />
        <button class="ask__submit">CREATE THIS QUESTION</button>
        <p v-if="done" class="err_msg">Your question is created!</p>
    </form>
</template>

<script>
import tags from "@/components/ask/tags";
export default {
    components: {
        tags,
    },
    middleware({ store, redirect }) {
        if (!store.state.isAuthorized) {
            return redirect("/");
        }
    },
    data() {
        return {
            tagsArray: [],
            done: false,
        };
    },
    methods: {
        createQuestion() {
            this.done = false;
            const params = this.setQuestionParams();
            this.$axios.post("/createQuestion", params).then(() => {
                this.done = true;
                this.clearInputs();
            });
        },
        setTags(val) {
            this.tagsArray = val;
        },
        setQuestionParams() {
            const __PARAMS__ = {};
            __PARAMS__.title = this.$refs.title.value;
            __PARAMS__.body = this.$refs.desc.value;
            __PARAMS__.tags = this.tagsArray;
            __PARAMS__.snippet = this.getSnippet();
            __PARAMS__.creator = this.$store.getters.GET_USERDATA;

            return __PARAMS__;
        },
        clearInputs() {
            this.$refs.title.value = null;
            this.$refs.desc.value = null;
        },
        getSnippet() {
            const descriptionValue = this.$refs.desc.value;
            return descriptionValue.length > 170 ? descriptionValue.slice(0, 170) + "..." : descriptionValue;
        },
    },
};
</script>

<style lang="scss" scoped>
.ask {
    width: 700px;
    margin: 60px auto 0 auto;

    &__divider {
        margin: 20px 0;
        width: 100%;
        height: 1px;
        background: $gray-border;
    }

    &__submit {
        width: 100%;
        color: white;
        background: $color-primary;
        margin-top: 30px;
        padding: 20px 0;
        border-radius: $btn-border-radius;
    }
}

.err_msg {
    font-size: 12px;
    color: $color-green;
    font-weight: 700;
}
</style>
