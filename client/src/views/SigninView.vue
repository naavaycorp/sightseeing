<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { authClient } from "../../lib/auth-client";

const router = useRouter();

const email = ref("");
const password = ref("");

onMounted(async () => {
  const { data: session } = await authClient.getSession();
  if (session) {
    router.replace("/about");
  }
});

const handleSubmit = async () => {
  await authClient.signIn.email({
    email: email.value,
    password: password.value,
  });

  router.push("/");
};
</script>
<template>
  <h1>sign In Page</h1>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="email">email : </label>
      <input
        type="text"
        id="email"
        v-model="email"
        placeholder="enter your email"
      />
    </div>
    <div>
      <label for="password">password : </label>
      <input
        type="text"
        id="password"
        v-model="password"
        placeholder="enter your password"
      />
    </div>
    <div>
      <button>Submit</button>
    </div>
  </form>
</template>
