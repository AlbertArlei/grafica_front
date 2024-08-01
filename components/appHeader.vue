<template>
    <header class="bg-blue-600 flex justify-center">
        <div class="flex xl:justify-between items-center w-full justify-around xl:max-w-desktop xl:min-w-desktop">
            <a href="/"><img src="/public/logo.svg" alt=""></a>
            <div class="flex items-center">
                <input class="outline-none rounded-l pl-2 border-none lg:w-96 h-10" type="text"
                    placeholder="Pesquise algo">
                <button class="bg-green-500 h-10 rounded-r px-4 hover:bg-green-600">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                    </svg>
                </button>
            </div>
            <nav id="nav-menu"
                class="xl:static xl:flex-row xl:bg-opacity-0 xl:h-full xl:w-auto xl:text-xl flex flex-col items-center gap-4  fixed bg-blue-700 h-screen top-0 -right-64 w-64 text-2xl">
                <ul class="xl:flex flex gap-0 xl:gap-4 text-white xl:h-full xl:flex-row flex-col w-full">
                    <button @click="showMenu()" class="xl:hidden">
                        <svg class="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18 17.94 6M18 18 6.06 6" />
                        </svg>
                    </button>
                    <li><a class="hover:bg-blue-800 h-full flex items-center py-3 xl:px-0 px-2" href="/">Ínicio</a></li>
                    <li><a class="hover:bg-blue-800 h-full flex items-center py-3 xl:px-0 px-2"
                            href="/produtos">Produtos</a></li>
                    <li><a class="hover:bg-blue-800 h-full flex items-center py-3 xl:px-0 px-2"
                            href="/produtos">Sobre</a></li>
                </ul>
                <div v-if="!isLogged"
                    class="flex justify-around w-full xl:justify-normal text-white xl:gap-8 xl:text-base text-xl">
                    <a href="/signup"><button class="bg-green-500 rounded xl:w-24 w-28 p-2 hover:bg-green-600">Criar
                            conta</button></a>
                    <a href="/signin"><button
                            class="bg-green-500 rounded xl:w-24 w-28 p-2 hover:bg-green-600">Entrar</button></a>
                </div>
                <div v-else
                    class="flex justify-around w-full xl:justify-normal text-white xl:gap-8 xl:text-base text-xl">
                    <button @click="goToCart">
                        <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                        </svg>
                    </button>
                    <button @click="goToProfile">
                        <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                    </button>
                </div>
            </nav>
            <button @click="showMenu()" class="xl:hidden">
                <svg class="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
                </svg>
            </button>
        </div>
    </header>
</template>
<script lang="ts">
    export default {
        name: 'AppHeader',
        data() {
            return {
                menu: false,
                isLogged: true,
            }
        },
        methods: {
            isLoggedFunc() {
                const cookie = useCookie('logged');
                if (!cookie.value) {
                    return this.isLogged = false

                }
                return this.isLogged = true

            },
            showMenu() {
                if (!this.menu) {
                    const menu = document.getElementById('nav-menu') as HTMLElement;
                    menu.classList.remove('-right-64');
                    menu.classList.add('right-0');
                    this.menu = true;
                    return;
                }
                const menu = document.getElementById('nav-menu') as HTMLElement;
                menu.classList.remove('right-0');
                menu.classList.add('-right-64');
                this.menu = false;
            },
            goToCart() {
                window.location.href = '/carrinho'
            },
            goToProfile(){
                window.location.href = '/perfil'
            }
        },
        mounted() {
            this.isLoggedFunc()
        }
    }
</script>