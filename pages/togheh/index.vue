<template>
  <div>
    <PageTemplate
      :title="pageInfo.title"
      :body="pageInfo.content"
      :image="pageInfo.image"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, useContext } from '@nuxtjs/composition-api'
import { useQuery } from '@vue/apollo-composable/dist'
import PageTemplate from '@/components/inc/PageTemplate.vue'
import { TogheHomeQuery, TogheHomeQueryVariables } from '@/types/types'
import PAGE from '@/apollo/toghe/home.gql'

const ctx = useContext()

const { onError, loading, result } = useQuery<
  TogheHomeQuery,
  TogheHomeQueryVariables
>(PAGE, {
  id: '465'
})

onError(() => {
  ctx.error({ message: '_SOMETHING_WENTWRONG', statusCode: 500 })
})

const pageInfo = computed(() => {
  return {
    title: result.value?.page?.title || '',
    content: result.value?.page?.content || '',
    image: result.value?.page?.featuredImage?.node?.sourceUrl || '',
    alttext: result.value?.page?.featuredImage?.node?.altText || ''
  }
})
</script>
