<template>
    <header class="header w-full">
        <nuxt-link to="/" class="header__logo"><img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="ForumX logo" /></nuxt-link>
        <user-status />
    </header>
</template>

<script>
import userStatus from "@/components/userStatus";
export default {
    components: {
        userStatus,
    },
};
</script>

<style lang="scss" scoped>
.header {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > * {
        display: block;
    }

    &__logo {
        & > img {
            height: 50px;
        }
    }
}
</style>
