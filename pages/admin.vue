<template>
  <main>
    <div id="menu" class="flex items-center fixed">
      <div class="w-64 h-screen top-0 left-0 bg-blue-700 text-xl text-white font-semibold">
        <button @click="productOptions" class="w-full p-2 transition hover:bg-blue-800">Produtos</button>
        <div v-show="showProductOptions" class="flex flex-col">
          <button class="text-start w-full p-2 hover:bg-blue-800">Ver</button>
          <button @click="addProductOption" class="text-start w-full p-2 hover:bg-blue-800">Adicionar</button>
          <button class="text-start w-full p-2 hover:bg-blue-800">Editar</button>
          <button class="text-start w-full p-2 hover:bg-blue-800">Apagar</button>
        </div>
      </div>
      <div @click="showMenuFunc" class="bg-blue-700 h-16 w-8 rounded-r-full flex items-center cursor-pointer">
        <svg v-if="showMenu" class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m14 8-4 4 4 4" />
        </svg>
        <svg v-else class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m10 16 4-4-4-4" />
        </svg>
      </div>
    </div>
    <div class="w-full p-4 flex items-center justify-center">
      <div v-show="showAddProduct">
        <AdminAddProduct ></AdminAddProduct>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  const showMenu = ref(true);
  const showProductOptions = ref(false);
  const showAddProduct = ref(false);

  const productOptions = () => {
    if (!showProductOptions.value) {
      showProductOptions.value = true
      return;
    }
    showProductOptions.value = false
  }

  const showMenuFunc = () => {
    const menu = document.getElementById('menu') as HTMLElement;
    if (showMenu.value) {
      menu.classList.remove('left-0');
      menu.classList.add('-left-64');
      showMenu.value = false;
      return
    }
    menu.classList.remove('-left-64');
    menu.classList.add('left-0');
    showMenu.value = true;
    return
  }

  const addProductOption = () => {
    if (!showAddProduct.value) {
      showAddProduct.value = true
      return;
    }
    showAddProduct.value = false
  }
</script>