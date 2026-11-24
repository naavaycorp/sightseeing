<script setup lang="ts">
import HelloWorld from "../components/HelloWorld.vue";
import { authClient } from "../../lib/auth-client.ts";
import { useRouter } from "vue-router";

const router = useRouter();

const handleSignout = async () => {
  await authClient.signOut();
  router.replace("/");
};
</script>
<template>
  <h1>This is About view</h1>
  <button @click="handleSignout">signOut</button>
  <HelloWorld />
</template>
