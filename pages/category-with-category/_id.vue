<template>
 
    <loading-indicator :isLoading="loading">

      <CategoryWithItems :page-info="pageInfo" :items="items" />
      <FooterSection />
    </loading-indicator>
</template>

<script lang="ts">
import {
  CategoriesWithCategoriesQuery,
  CategoriesWithCategoriesQueryVariables,
} from '@/types/types'
import CATWITHPRODS from '@/apollo/query/categories-with-categories.gql'
import { useQuery } from '@vue/apollo-composable/dist'
import {
  computed,
  defineComponent,
  useContext,
  useRoute,
  useRouter,
} from '@nuxtjs/composition-api'
import CategoryWithItems from '~/components/inc/CategoryWithItems.vue'


export default defineComponent({
  components : {CategoryWithItems},
  name: 'categoryWithCategory',
  setup() {
    const { i18n, localePath } = useContext()
    const route = useRoute()
    const router = useRouter()
    const { $mitt } = useContext()

    const variable: CategoriesWithCategoriesQueryVariables = {
      id: route.value.params.id,
    }
    const { result , loading } = useQuery<CategoriesWithCategoriesQuery>(
      CATWITHPRODS,
      variable
    )

    $mitt.on('languageSwitched', () => {
      alert('do something')
      // router.push({
      //   name: localePath('categories/categoriesBySlug'),
      //   params: {
      //     id: slugTranslate(route.value.params.id, i18n.locale as 'fa' | 'en'),
      //   },
      // })
    })

    const pageInfo = computed(() => ({
      title: result.value?.category?.name || '',
      description: result.value?.category?.description || '',
      image : result.value?.category?.cat_cf?.image?.sourceUrl || ''
    }))

    const items = computed(
      () => {

        return result.value?.category?.children?.edges ? result.value.category.children.edges.map( i => {
          return { 
            title : i?.node?.name || '' , 
            id : i?.node?.id ,
            image : i?.node?.cat_cf?.image,
            link : localePath('/category-with-products/' + i!.node!.id)
           }
        } ) : []
          
      }
    )

    return {
      pageInfo,
      items,
      loading
    }
  },
})
</script>
