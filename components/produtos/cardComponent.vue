<template>
  <div @click="goToProduct()"
    class="w-48 h-72 cursor-pointer rounded transition  border border-white hover:border-zinc-300">
    <img :src="image" alt="">
    <div class="flex flex-col gap-4">
      <span class="text-sm line-clamp-2 px-2">{{ title }}</span>
      <div class="flex items-end px-4 text-green-500">
        <span class="text-2xl">R$</span>
        <span class="text-2xl">{{ price?.split('.')[0] }}</span>
        <span class="text-xs self-start">{{ price?.split('.')[1] }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'CardComponent',
    props: {
      id: Number,
      title: String,
      price: String,
      sold: String,
      discount: String,
      image: String,
    },
    data() {
      return {}
    },
    methods: {
      goToProduct() {
        window.location.href = '/product/' + this.id
      }
    }
  }
</script>