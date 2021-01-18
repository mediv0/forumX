<template>
    <main class="null-question noselect noevents">
        <img src="~/assets/images/questionEmptyState.svg" alt="404 question not found" width="70" height="70" />
        <p>404, question not found</p>
    </main>
</template>

<style lang="scss" scoped>
.null-question {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & > img {
        display: block;
        margin: 0 auto;
    }

    & > p {
        text-align: center;
        font-weight: 400;
        font-size: 15px;
        margin-top: 12px;
    }
}
</style>
