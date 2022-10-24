<template>
  <div>
    <PageTemplate
      title="استانداردها"
      image="https://images.unsplash.com/photo-1664715934138-5b7621936796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&dpr=2&auto=format%2Ccompress&fit=crop&w=999&h=594"
      :body="body"
    />

    <ShoppingCards3 :cards="items" />
    <br /><br /><br /><br />

    <FooterSection />
  </div>
</template>

<script lang="ts" setup>
import PageTemplate from '~/components/inc/PageTemplate.vue'
import FooterSection from '~/components/FooterSection.vue'
import ShoppingCards3 from '~/components/ShoppingCards3.vue'

type ShoppingCards3Props = InstanceType<typeof ShoppingCards3>['$props']

const body = `
لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده
`
const items: ShoppingCards3Props['cards'] = [
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/DIN-Logo.svg/1024px-DIN-Logo.svg.png',
    title: 'استاندارد های BS',
    link: '/standards/bs',
    altImage: '',
    id: '11',
  },
]
</script>
