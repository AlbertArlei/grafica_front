<template>
    <div class="bg-zinc-100 -z-10 fixed w-screen h-screen"></div>
    <AppHeader></AppHeader>
    <main class="flex flex-col items-center mt-12">
        <div class="flex justify-between gap-4 w-full xl:max-w-desktop xl:min-w-desktop">
            <div class="flex flex-col w-1/3 bg-white p-2 items-start gap-2 text-lg">
                <span class="font-bold">Minha Conta</span>
                <button>Visão geral</button>
                <button>Pedidos</button>
                <button>Comentarios</button>
                <button>Reembolsos e devoluções</button>
                <button>Endereço de entrega</button>
                <button>Suporte</button>
            </div>
            <div class="flex flex-col w-2/3 gap-12">
                <div class="bg-white p-2">
                    <div class="flex gap-2 items-center">
                        <div
                            class="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-white text-3xl font-bold ">
                            <span>A</span>
                        </div>
                        <span>Alice santos</span>
                    </div>
                    <div class="flex justify-evenly">
                        <button class="flex flex-col items-center">
                            <svg class="w-12 h-12 text-gray-800 dark:text-black" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                            </svg>
                            <span>Pedidos</span>
                        </button>
                        <button class="flex flex-col items-center">
                            <svg class="w-12 h-12 text-gray-800 dark:text-black" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                            </svg>
                            <span>Pedidos</span>
                        </button>
                        <button class="flex flex-col items-center">
                            <svg class="w-12 h-12 text-gray-800 dark:text-black" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z"
                                    clip-rule="evenodd" />
                            </svg>

                            <span>Endereços</span>
                        </button>
                    </div>
                </div>
                <div class="bg-white flex flex-col gap-2 p-2">
                    <span>Pedidos</span>
                    <div class="flex gap-4 p-2 items-start justify-between">
                        <button class="flex flex-col items-center w-40">
                            <svg class="w-16 h-16 text-gray-800 dark:text-black" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4Zm0 6h16v6H4v-6Z"
                                    clip-rule="evenodd" />
                                <path fill-rule="evenodd"
                                    d="M5 14a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm5 0a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>Pedidos aguardando pagamento</span>
                        </button>
                        <button class="flex flex-col items-center w-40">
                            <svg class="w-16 h-16 text-gray-800 dark:text-black" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"
                                    clip-rule="evenodd" />
                                <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z" />
                            </svg>
                            <span>Pedidos aguardando envio</span>
                        </button>
                        <button class="flex flex-col items-center w-40">
                            <svg class="text-black w-16 h-16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">

                                <path d="M0 0h48v48H0z" fill="none" />
                                <path d="M38.932,13H21.73c-2.115,0-4.041,1.162-5.026,3.032L13.559,22H9.766H9.47c-3.685,0-6.715,2.998-6.753,6.684l-0.055,5.296
		c-0.005,0.534,0.203,1.048,0.579,1.428C3.616,35.786,4.128,36,4.662,36h2.452c0.825,2.329,3.04,4,5.651,4s4.827-1.671,5.651-4
		h8.698c0.825,2.329,3.04,4,5.651,4s4.827-1.671,5.651-4H42c1.104,0,2-0.896,2-2V18.068C44,15.273,41.727,13,38.932,13z
		 M20.243,17.896C20.535,17.344,21.104,17,21.73,17h17.202C39.521,17,40,17.479,40,18.068V22H18.081L20.243,17.896z M12.766,36
		c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2S13.869,36,12.766,36z M32.766,36c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2
		S33.869,36,32.766,36z" />
                            </svg>
                            <span>Pedidos enviados</span>
                        </button>
                        <button class="flex flex-col items-center w-40">
                            <svg class="w-16 h-16 text-gray-800 dark:text-black" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>Pedidos entregues</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>
<script lang="ts" setup>
</script>