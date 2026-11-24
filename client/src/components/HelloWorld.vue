<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { AppType } from "../../../server/index";
import { hc } from "hono/client";

const client = hc<AppType>("/");
type People = {
  id: number;
  name: string;
};

const family = ref<People[]>([]);

onMounted(async () => {
  const resp = await client.api.people.$get();
  const result = await resp.json();
  family.value = result;
});
</script>

<template>
  <h1 class="text-3xl font-black text-red-500">Sight Seeing</h1>
  <div v-for="member in family" :key="member.id">{{ member.name }}</div>
</template>
