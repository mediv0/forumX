<template>
    <main>
        <d-landing />
        <d-questions />
    </main>
</template>

<script>
import dLanding from "@/components/dashboard/dLanding";
import dQuestions from "@/components/dashboard/dQuestions";
export default {
    components: {
        dLanding,
        dQuestions,
    },
    middleware: "authenticated",
};
</script>

<style lang="scss" scoped></style>
