<template>
    <loading-indicator :isLoading="loading">

      <CategoryWithItems :page-info="pageInfo" :items="items" />
      <FooterSection />
    </loading-indicator>
</template>

<script lang="ts">
import {
  CategoriesWithProductsQuery,
  CategoriesWithProductsQueryVariables,
} from '@/types/types'
import CATWITHPRODS from '@/apollo/query/categories-with-products.gql'
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
  name: 'categoryWithProducts',
  setup() {
    const { i18n, localePath } = useContext()
    const route = useRoute()
    const router = useRouter()
    const { $mitt } = useContext()

    const variable: CategoriesWithProductsQueryVariables = {
      id: route.value.params.id,
    }
    const { result , loading } = useQuery<CategoriesWithProductsQuery>(
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
       () =>
      result.value?.category?.contentNodes?.edges ? result.value.category.contentNodes.edges.map((i) =>
        i?.node?.__typename === 'Post'
          ? {
              image: i.node.featuredImage?.node?.sourceUrl || '',
              title: i.node?.title ? i.node.title.split("\\").join("<br />") : '',
              id: i.node.id,
              link : localePath('/product?id=' + i.node!.id)
            }
            : {
              image: '',
              title: '',
              id: '',
              link : '/'
            }
      ) || [] : []
    )

    return {
      pageInfo,
      items,
      loading
    }
  },
})
</script>
