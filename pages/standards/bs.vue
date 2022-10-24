<template>
  <div>
    <PageTemplateVue
      image="https://images.unsplash.com/photo-1666240073343-9801b7b5b949?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      title="استاندارد"
    />
    <div class="container leading-8 text-lg">
      Lorem ipsum dolor sit , amet consectetur adipisicing elit. Obcaecati
      adipisci architecto nobis eaque quibusdam quis illo ut alias amet! Facilis
      a atque velit ipsam voluptas sint saepe assumenda at sit!
    </div>

    <ShoppingCards2 class="top-5" :cards="co" />

    <br /><br /><br /><br />
    <FooterSection />
  </div>
</template>

<script lang="ts" setup>
import PageTemplateVue from '~/components/inc/PageTemplate.vue'
import ShoppingCards2 from '~/components/ShoppingCards2.vue';

type ShoppingCards2 = InstanceType<typeof ShoppingCards2>["$props"];

const co : ShoppingCards2['cards'] = [{
  text: "string",
    id: "string",
    link: "string",
    linkLabel: "string",
    linkIcon: "chav-left",
}]
</script>
