<template>
    <h1>temporarily redirect</h1>
</template>

<script lang="ts" setup>
import { useContext } from '@nuxtjs/composition-api';


useContext().redirect(301,"/pich-gostar")

</script>