<template>
    <section id="landing">
        <landing-text />
        <img src="@/assets/images/landingImg.JPG" alt="landing image" />
    </section>
</template>

<script>
import landingText from "@/components/landingText";
export default {
    components: {
        landingText,
    },
};
</script>

<style lang="scss" scoped>
#landing {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 38px;

    & > img {
        margin-top: 37px;
        width: 47%;
    }
}
</style>
