<template>
    <nuxt-link
        tag="div"
        :to="{
            name: 'question',
            path: '/:question',
            params: {
                question: `${data._id}`,
                data: {
                    ...data,
                },
            },
        }"
        class="question_preview_single"
    >
        <div class="question_preview_single__content">
            <h1 class="question_preview_single__content__title">{{ data.title }}</h1>
            <p class="question_preview_single__content__preview">{{ data.snippet }}</p>
        </div>
        <div class="question_preview_single__details">
            <tags :tags="data.tags" />
            <div class="question_preview_single__details__right">
                <div class="question_preview_single__details__author">
                    <img :src="data.creator.image" alt="profile image" width="25" height="25" />
                    <b>{{ data.creator.name }}</b>
                </div>
                <p v-if="data.comments > 0" class="question_preview_single__details__score">{{ data.comments }}</p>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
import tags from "@/components/tagList";
export default {
    components: {
        tags,
    },
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.question_preview_single {
    padding: 30px 20px 30px 20px;
    cursor: pointer;

    &__content {
        &__title {
            font-weight: 700;
            font-size: 15px;
        }
        &__preview {
            font-weight: 400;
            font-size: 13px;
            color: $gray-2;

            margin-bottom: 10px;
        }
    }

    &__details {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__right {
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            width: 300px;
        }

        &__author {
            display: flex;
            align-items: center;
            margin-left: 15px;
            font-size: 12px;

            & > img {
                margin-right: 5px;
                border-radius: 7px;
            }
        }

        &__score {
            font-weight: 700;
            font-size: 11px;
            color: $color-primary;
        }
    }

    &:hover {
        background: lighten($color: #000000, $amount: 97);
    }

    &:hover &__content__title {
        color: $color-link;
    }
}
</style>
