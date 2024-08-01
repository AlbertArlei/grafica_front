<template>
    <AppHeader></AppHeader>
    <main class="flex flex-col gap-2 mt-12 items-center">
        <div class="w-full grid grid-cols-galery gap-2 xl:max-w-desktop xl:min-w-desktop">
            <ProdutosCardComponent v-for="data of products" :id="data.id" :title="data.title" :discount="data.discount" :price="data.price" :sold="data.sold" :image="data.image[0]"></ProdutosCardComponent>
        </div>
    </main>
</template>
<script setup lang="ts">
    import { ref } from "vue";
    interface IProduct {
        id: number,
        title: string,
        discount: string,
        price: string,
        sold: string,
        image: string[]
    }
    const products = ref({} as IProduct[]);
    const getAllProduct = async () => {
        const url = `${useRuntimeConfig().public.apiUrl}/product`;
        const req = await fetch(url, {
            method: 'GET'
        });
        const res = await req.json();
        products.value = res;
    }
    getAllProduct();
</script>