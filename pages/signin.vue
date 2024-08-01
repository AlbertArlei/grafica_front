<template>
    <AppHeader></AppHeader>
    <main class="flex flex-col items-center mt-12">
        <div class="border-blue-600 border rounded flex flex-col gap-4 p-4  shadow-shadow">
            <div class="flex flex-col gap-2">
                <label for="input-email">Seu E-mail</label>
                <input class="w-full h-10 border border-blue-600 rounded pl-2 outline-none" type="text"
                    placeholder="Ex: JoaoBatista@email.com" v-model="email" id="input-email">
            </div>
            <div class="flex flex-col gap-2">
                <label for="input-password">Sua senha</label>
                <input class="w-full h-10 border border-blue-600 rounded pl-2 outline-none" type="text"
                    placeholder="Ex: João Pedro Batista" v-model="password" id="input-password">
            </div>
            <button @click="login()" class="bg-green-500 text-white rounded p-2 hover:bg-green-600">Entrar</button>
            <GoogleSignInButton @success="handleLoginSuccess" @error="handleLoginError"></GoogleSignInButton>
            <span>você ainda não tem uma conta? <a class="text-blue-600 font-bold border-b border-blue-600"
                    href="/signup">Criar conta</a></span>

        </div>
    </main>
</template>
<script setup lang="ts">
    import { ref } from "vue";
    import {
        GoogleSignInButton,
        type CredentialResponse,
    } from "vue3-google-signin";

    const email = ref('');
    const password = ref('');

    const login = async ()=>{
        const data = {
            email: email.value,
            password: password.value
        }
        const url = `${useRuntimeConfig().public.apiUrl}/user/loginByWebsite`;
        const req = await fetch(url, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data)
        });
        const res = req.status;
        if(res > 199 && res < 300) window.location.href = '/';
    }

    // handle success event
    const handleLoginSuccess = (response: CredentialResponse) => {
        const { credential } = response;
        console.log("Access Token", credential);
    };

    // handle an error event
    const handleLoginError = () => {
        console.error("Login failed");
    };
</script>