<template>
        <CategoryPage :id="id"></CategoryPage>
</template>

<script lang="ts" setup>
import { useContext , computed } from '@nuxtjs/composition-api';
import CategoryPage from '~/components/page/CategoryPage.vue';

const {i18n} = useContext()

const id = computed(()=>{
    // TODO : change id for en lang
    return i18n.locale === 'fa' ? "dGVybToxNQ==" : 'dGVybToxNQ=='
})
</script>