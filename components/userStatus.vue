<template>
    <div>
        <button v-if="!isAuthorized" class="header__login" @click="login">
            <span class="header__login__value">login with google</span>
        </button>
        <div v-else class="header__login__panel">
            <nuxt-link tag="button" to="/ask" class="header__login__panel__btn">Ask Something</nuxt-link>
            <img :src="userData.PK" alt="user img" width="30" height="30" />
            <p>{{ userData.Ed }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userData: {},
        };
    },
    computed: {
        isAuthorized() {
            return this.$store.getters.GET_AUTH_STATUS;
        },
    },
    methods: {
        async login() {
            try {
                const loggedInUser = await this.$gAuth.signIn();
                this.userData = loggedInUser.getBasicProfile();
                this.$store.commit("SET_USERDATA", {
                    userId: this.userData.OU,
                    image: this.userData.PK,
                    name: this.userData.Ed,
                    email: this.userData.tu,
                });
                this.$store.commit("SET_AUTH_STATUS", this.$gAuth.isAuthorized);
            } catch (e) {}
        },
    },
};
</script>

<style lang="scss" scoped>
$google-btn-color: #ef233c;
.header__login {
    font-weight: 700;
    display: flex;
    align-items: center;
    color: $google-btn-color;
    background: white;
    border: 2px solid $google-btn-color;
    padding: 9px 52px;
    border-radius: $btn-border-radius;
    transition: 0.1s ease;

    &:hover {
        color: white;
        background: $google-btn-color;
    }

    &__panel {
        display: flex;
        align-items: center;

        & > img {
            border-radius: 9px;
            margin-right: 7px;
        }

        &__btn {
            text-align: center;
            padding: 5px 7px;
            background: $color-primary;
            color: white;
            border-radius: $btn-border-radius;
            margin-right: 10px;
        }
    }
}
</style>
