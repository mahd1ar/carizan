<template>
  <loading-indicator :isLoading="loading">
    <CategoryWithItems :page-info="pageInfo" :items="items" />
    HINT : from components/catwhitcatpage
    <FooterSection />
  </loading-indicator>
</template>

<script lang="ts" setup>
import {
  CategoriesWithCategoriesQuery,
  CategoriesWithCategoriesQueryVariables,
LanguageCodeEnum,
} from '@/types/types'
import CATWITHPRODS from '@/apollo/query/categories-with-categories.gql'
import { useQuery } from '@vue/apollo-composable/dist'
import { computed, useContext,PropType, useRoute } from '@nuxtjs/composition-api'
import CategoryWithItems from '~/components/inc/CategoryWithItems.vue'

const { id } = defineProps({
  id: {
    type: String as PropType<string | null | undefined>,
  },
})

const { localePath , i18n } = useContext()
const route = useRoute()
const q = route.value.query as {en : string , fa : string}
// console.log(route.value.fullPath)
// console.log(route.value.path)
const variable: CategoriesWithCategoriesQueryVariables = {id , language : i18n.locale === 'fa' ? LanguageCodeEnum.En : LanguageCodeEnum.Fa }

const { result, loading } = useQuery<CategoriesWithCategoriesQuery>(
  CATWITHPRODS,
  variable
)

const pageInfo = computed(() => ({
  title: result.value?.category?.name || '',
  description: result.value?.category?.description || '',
  image: result.value?.category?.cat_cf?.image?.sourceUrl || '',
}))

const items = computed(() => {

  return result.value?.category?.children?.edges
    ? result.value.category.children.edges.map((i) => {
        return {
          title: i?.node?.name || '',
          id: i!.node!.id,
          body: i?.node?.description || '',
          image: i?.node?.cat_cf?.image?.sourceUrl || '',
          link: route.value.path + '/' +   i!.node!.name  + `?fa=${i!.node!.id}&en=${i!.node!.translation!.id}` 
        }
      })
    : []
})

</script>
