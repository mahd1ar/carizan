<template>
  <div>
    <div class="h-[400px] w-full overflow-hidden relative">
      <img src="/sample/sample1.jpg" alt="" />
      <!-- overlay -->
      <div class="absolute top-0 left-0 z-10 w-full h-full">
        <div class="flex items-center h-full">
          <div
            class="bg-black h-full w-full"
            style="clip-path: polygon(60% 0%, 100% 0%, 100% 100%, 40% 100%)"
          >
            <div class="container h-full">
              <div class="w-4/12 flex flex-col justify-center h-full">
                <h1 class="text-white text-6xl">متن نمونه</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="container my-10">
        <p class="leading-7 text-lg">
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

    <ShoppingCards />
    <FooterSection />
  </div>
</template>

<script lang="ts">
import {
  ChildCategoriesBySlugQuery,
  ChildCategoriesBySlugQueryVariables,
} from '@/types/types'
import CHILDCATBYSLUG from '@/apollo/query/child-categories-by-slug.gql'
import { useQuery } from '@vue/apollo-composable/dist'
import {
  computed,
  defineComponent,
  useContext,
  useRoute,
  useRouter,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'categoriesWithProducts',
  setup() {
    const { i18n, localePath } = useContext()
    const route = useRoute()
    const router = useRouter()
    const { $mitt } = useContext()

    const variable: ChildCategoriesBySlugQueryVariables = {
      id: route.value.params.id,
    }
    const { result } = useQuery<ChildCategoriesBySlugQuery>(
      CHILDCATBYSLUG,
      variable
    )

    console.log(i18n.locale)
    console.log(route.value.params.id)

    $mitt.on('languageSwitched', () => {
      alert('do something')
      // router.push({
      //   name: localePath('categories/categoriesBySlug'),
      //   params: {
      //     id: slugTranslate(route.value.params.id, i18n.locale as 'fa' | 'en'),
      //   },
      // })
    })

    return {
      items: computed(() => {
        return result.value?.category?.children?.edges?.map((i) => ({
          title: i?.node?.name || '',
          excerpt: i?.node?.description || '',
        }))
      }),
    }
  },
})
</script>
