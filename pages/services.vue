<template>
  <loading-indicator :isLoading="loading" class="w-full">
    
    <GeneralCategory v-if="!!items" :items="items" />
    <FooterSection />
  </loading-indicator>
</template>

<script lang="ts" setup>
import {
  CategoryItemsQuery,
  CategoryItemsQueryVariables,
  LanguageCodeEnum,
} from '@/types/types'
import CATITEMS from '@/apollo/query/category-items.gql'
import { useQuery } from '@vue/apollo-composable/dist'
import { computed, useContext } from '@nuxtjs/composition-api'
import {stripHtml} from "@/data/utils"

const { i18n, localePath } = useContext()

const variable: CategoryItemsQueryVariables = {
  id: 'dGVybTozMw==',
  language:
    i18n.locale.toLocaleUpperCase() === 'fa'
      ? LanguageCodeEnum.En
      : LanguageCodeEnum.Fa,
}

const { result, loading } = useQuery<CategoryItemsQuery>(
    CATITEMS,
  variable
)

  const items = computed(() => {
    return result.value?.category?.contentNodes?.nodes?.map((i) => (
    i?.__typename === 'Page' ?    
    {
      title: i?.title || '',
      excerpt: stripHtml( i?.content || '' ),
      link: localePath('/page?id=' + i!.id),
      image: i.featuredImage?.node?.sourceUrl || '',
    } : { title : '' , excerpt : '' , link : '' , image : '' } ))
  })

</script>
