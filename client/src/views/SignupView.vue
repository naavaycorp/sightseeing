<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { authClient } from "../../lib/auth-client";

const name = ref("");
const email = ref("");
const password = ref("");
const router = useRouter();

onMounted(async () => {
  const { data: session } = await authClient.getSession();
  if (session) {
    await router.replace("/about");
  }
});

const handleSubmit = async () => {
  try {
    await authClient.signUp.email({
      name: name.value,
      email: email.value,
      password: password.value,
    });

    name.value = "";
    email.value = "";
    password.value = "";

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
  <h1>Sign Up</h1>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="name" id="name">Name :</label>
      <input type="text" v-model="name" placeholder="Enter your Name" />
    </div>
    <div>
      <label for="email" id="email">email :</label>
      <input type="email" v-model="email" placeholder="Enter your email" />
    </div>
    <div>
      <label for="password" id="password">password :</label>
      <input
        type="password"
        v-model="password"
        placeholder="Enter your password"
      />
    </div>
    <div>
      <button>Submit</button>
    </div>
  </form>
</template>
