<template>
    <AppHeader></AppHeader>
    <main class="mt-12 flex flex-col items-center">
        <div class="flex justify-between md:max-w-tablet md:min-w-tablet xl:max-w-desktop xl:min-w-desktop sm:w-full sm:flex-row flex-col">
            <div class="flex flex-col items-center gap-2 sm:w-1/2">
                <div class="w-72 h-72">
                    <img v-if="product.image" :src="product.image[0]" alt="">
                </div>
                <div class="flex gap-2">
                    <button class="w-12 h-12 border border-blue-600 rounded p-1">
                        <img v-if="product.image" :src="product.image[0]" alt="">
                    </button>
                    <button class="w-12 h-12 border border-blue-600 rounded p-1">
                        <img v-if="product.image" :src="product.image[1]" alt="">
                    </button>
                    <button class="w-12 h-12 border border-blue-600 rounded p-1">
                        <img v-if="product.image" :src="product.image[2]" alt="">
                    </button>
                    <button class="w-12 h-12 border border-blue-600 rounded p-1">
                        <img v-if="product.image" :src="product.image[3]" alt="">
                    </button>
                    <button class="w-12 h-12 border border-blue-600 rounded p-1">
                        <img v-if="product.image" :src="product.image[4]" alt="">
                    </button>
                </div>
            </div>
            <div class="flex flex-col gap-2 sm:w-1/2">
                <div class="flex gap-2 text-zinc-600 justify-between">
                    <span>{{ product.sold }} vendidos</span>
                    <button>
                        <svg class="w-8 h-8 text-gray-800 dark:text-blue-600" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                        </svg>
                    </button>
                </div>
                <h1 class="font-bold text-3xl">{{ product.title }}</h1>

                <div class="w-12 flex flex-col">
                    <div v-if="product.discount && product.discount !== '0'"
                        class="flex items-end text-zinc-500 relative before:content-start before:w-full before:border before:absolute before:top-1/2 before:border-zinc-500 before:left-0 before:bg-black before:z-10">
                        <span>R$</span>
                        <span class="text-2xl">{{ product.discount.split('.')[0] }}</span>
                        <span class="text-xs self-start">{{ product.discount.split('.')[1] }}</span>
                    </div>
                    <div v-if="product.price" class="flex gap-4">
                        <div class="flex items-end">
                            <span class="text-4xl">R$</span>
                            <span class="text-4xl">{{ product.price.split('.')[0] }}</span>
                            <span class="text-xs self-start">{{ product.price.split('.')[1] }}</span>
                        </div>
                        <div v-if="product.discount !== '0'" class="flex items-center gap-2">
                            <span class="text-green-600 text-sm">13%</span>
                            <span class="text-green-600 text-xl">OFF</span>
                        </div>
                    </div>
                </div>

                <span>Quantidade</span>

                <div class="flex">
                    <button class="bg-blue-600 rounded-l p-2"><svg class="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                            viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m14 8-4 4 4 4" />
                        </svg>
                    </button>
                    <input class="border border-black w-12 outline-none text-center" v-model="product.quantity"
                        type="text">
                    <button class="bg-blue-600 rounded-r p-2">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m10 16 4-4-4-4" />
                        </svg>
                    </button>
                </div>
                <button
                    class="bg-green-500 p-2 w-72 text-white text-xl font-bold rounded transition hover:bg-green-600">Adicionar
                    no carrinho</button>
                <p>{{ product.description }}</p>
            </div>
        </div>
        <ProdutosSuggestionsComponent></ProdutosSuggestionsComponent>
        <ProdutosCommentsComponent></ProdutosCommentsComponent>
    </main>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    interface IProduct {
        id: number,
        title: string,
        price: string,
        discount: string,
        quantity: string,
        description: string,
        sold: string,
        image: string[]
    }
    const product = ref({} as IProduct);
    const getProductById = async () => {
        const url = `${useRuntimeConfig().public.apiUrl}/product/${route.params.id}`
        const req = await fetch(url, {
            method: 'GET'
        });
        const res = await req.json();
        product.value = res;
    }
    getProductById()
</script>