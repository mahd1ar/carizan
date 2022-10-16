<template>
  <div>
    <div class="h-[400px] w-full overflow-hidden relative">
      <img
        class="w-full h-full object-cover"
        src="/sample/sample1.jpg"
        alt=""
      />
      <!-- overlay -->
      <div class="absolute top-0 left-0 z-10 w-full h-full">
        <div class="flex items-center h-full">
          <div
            class="bg-black h-full w-full"
            style="clip-path: polygon(60% 0%, 100% 0%, 100% 100%, 40% 100%)"
          >
            <div class="container h-full">
              <div class="w-4/12 flex flex-col justify-center h-full">
                <h1 class="text-white text-6xl font-bold">
                  {{ pageInfo.name }}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="container my-10">
        <p class="leading-7 text-lg">
          {{ pageInfo.description }}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          minima fuga in autem, officiis dignissimos quasi libero ipsam deserunt
          adipisci ducimus impedit aliquam vero ab optio unde enim animi.
          Quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Debitis, minima fuga in autem, officiis dignissimos quasi libero ipsam
          deserunt adipisci ducimus impedit aliquam vero ab optio unde enim
          animi. Quaerat. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Debitis, minima fuga in autem, officiis dignissimos quasi libero
          ipsam deserunt adipisci ducimus impedit aliquam vero ab optio unde
          enim animi. Quaerat. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis, minima fuga in autem, officiis dignissimos
          quasi libero ipsam deserunt adipisci ducimus impedit aliquam vero ab
          optio unde enim animi. Quaerat. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis, minima fuga in autem, officiis dignissimos
          quasi libero ipsam deserunt adipisci ducimus impedit aliquam vero ab
          optio unde enim animi. Quaerat. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis, minima fuga in autem, officiis dignissimos
          quasi libero ipsam deserunt adipisci ducimus impedit aliquam vero ab
          optio unde enim animi. Quaerat. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis, minima fuga in autem, officiis dignissimos
          quasi libero ipsam deserunt adipisci ducimus impedit aliquam vero ab
          optio unde enim animi. Quaerat.
        </p>
      </div>
    </div>

    <ShoppingCards :cards="items" />
    <FooterSection />
  </div>
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

export default defineComponent({
  name: 'categoryWithProducts',
  setup() {
    const { i18n, localePath } = useContext()
    const route = useRoute()
    const router = useRouter()
    const { $mitt } = useContext()

    const variable: CategoriesWithProductsQueryVariables = {
      id: route.value.params.id,
    }
    const { result } = useQuery<CategoriesWithProductsQuery>(
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
      name: result.value?.category?.name || '',
      description: result.value?.category?.description || '',
    }))

    const items = computed(
      () =>
        result.value?.category?.contentNodes?.edges?.map((i) =>
          i?.node?.__typename === 'Post'
            ? {
                img: i.node.featuredImage?.node?.sourceUrl || '',
                title: i.node.title || '',
                id: i.node.id,
              }
            : {
                img: '',
                title: '',
                id: '',
              }
        ) || []
    )

    return {
      pageInfo,
      items,
    }
  },
})
</script>
