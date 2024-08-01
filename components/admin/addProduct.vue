<template>
    <div class="flex flex-col w-72 sm:w-[600px] border border-blue-600 rounded p-4 gap-2">
        <div class="flex flex-col gap-2">
            <label for="title">Titulo</label>
            <input class="border border-black w-full h-10 pl-2 outline-none rounded" type="text" placeholder="titulo" id="titulo" v-model="title">
        </div>
        <div class="flex flex-col gap-2">
            <label for="price">Preço</label>
            <input class="border border-black w-full h-10 pl-2 outline-none rounded" type="text" placeholder="preço" id="price" v-model="price">
        </div>
        <div class="flex flex-col gap-2">
            <label for="discount">Desconto</label>
            <input class="border border-black w-full h-10 pl-2 outline-none rounded" type="text" placeholder="desconto" id="discount" v-model="discount">
        </div>
        <div class="flex flex-col gap-2">
            <label for="description">Descrição</label>
            <input class="border border-black w-full h-10 pl-2 outline-none rounded" type="text" placeholder="descrição" id="description" v-model="description">
        </div>
        <div class="flex flex-col gap-2">
        <label for="quantity">quantidade</label>
        <input class="border border-black w-full h-10 pl-2 outline-none rounded" type="text" placeholder="quantidade" id="quantity" v-model="quantity">
      </div> 
      <div class="flex flex-col gap-2">
        <label for="sold">vendido</label>
        <input class="border border-black w-full h-10 pl-2 outline-none rounded" type="text" placeholder="vendido" id="sold" v-model="sold">
      </div>
      <div class="flex flex-col gap-2">
        <label for="image-1">imagem 1</label>
        <input class="border border-black w-full h-10 pl-2 outline-none rounded" type="text" placeholder="imagem 1" id="image-1" v-model="image1">
      </div> 
      <div class="flex flex-col gap-2">
        <label for="image-2">imagem 2</label>
        <input class="border border-black w-full h-10 pl-2 outline-none rounded" type="text" placeholder="imagem 2" id="image-2" v-model="image2">
      </div> 
      <div class="flex flex-col gap-2">
        <label for="image-3">imagem 3</label>
        <input class="border border-black w-full h-10 pl-2 outline-none rounded" type="text" placeholder="imagem 3" id="image-3" v-model="image3">
      </div>  
      <div class="flex flex-col gap-2">
        <label for="image-4">imagem 4</label>
        <input class="border border-black w-full h-10 pl-2 outline-none rounded" type="text" placeholder="imagem 4" id="image-4" v-model="image4">
      </div> 
      <div class="flex flex-col gap-2">
        <label for="image-5">imagem 5</label>
        <input class="border border-black w-full h-10 pl-2 outline-none rounded" type="text" placeholder="imagem 5" id="image-5" v-model="image5">
      </div>
    <button @click="sendProduct" class="w-full bg-green-500 text-xl text-white rounded hover:bg-green-600 p-2">Criar</button>
    </div>
</template>
<script lang="ts">
    export default {
        name: 'AddProduct',
        data() {
            return {
              title: '',
              price: '',
              discount: '',
              description: '',
              quantity:'',
              sold:'',
              image1:'',
              image2:'',
              image3:'',
              image4:'',
              image5:'',
            }
        },
        methods:{
          async sendProduct(){
            const data = {
              title: this.title,
              price: this.price,
              discount: this.discount,
              description: this.description,
              quantity: this.quantity,
              sold: this.sold,
              image: [this.image1, this.image2, this.image3, this.image4, this.image5]
            }
            const url = `${useRuntimeConfig().public.apiUrl}/product`;
            const req = await fetch(url, {
              method: 'POST',
              headers:{
                'Content-Type':'application/json'
              },
              body: JSON.stringify(data)
            });
            const res = req.status;
            console.log(res)
          }
        }
    }
</script>