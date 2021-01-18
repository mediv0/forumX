<template>
    <div class="container">
        <landing-header />
        <Nuxt />
    </div>
</template>

<script>
import header from "@/components/header";
export default {
    components: {
        landingHeader: header,
    },
};
</script>

<style lang="scss" scoped></style>
