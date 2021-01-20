<template>
    <section class="dLanding">
        <img :src="userData && userData.image" alt="user avatar" />
        <div class="dLanding__content">
            <p class="dLanding__content__name">
                Welcome back <b>{{ userData.name || "anonymous" }} </b>
            </p>
            <p class="dLanding__content__questions_count">{{ new Date() }}</p>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            userData: [],
        };
    },
    created() {
        this.userData = this.$store.getters.GET_USERDATA;
    },
};
</script>

<style lang="scss" scoped>
.dLanding {
    margin: 20px 0;
    display: flex;
    align-items: center;
    img {
        width: 70px;
        height: 70px;
        border-radius: 99px;
        background: black;
    }

    &__content {
        margin-left: 30px;
        &__name {
            font-weight: 400;
            font-size: 18px;
        }
        &__questions_count {
            color: $gray-1;
            font-size: 13px;
        }
    }
}
</style>
