<script setup lang="ts">
  const route = useRoute()
  const count = ref(0)
  const {data} = await useFetch('/api/data')
  prerenderRoutes('/api/data')
  const {products, date} = data.value
</script>
<template>
  <div>
    <slot name="title" />
    <h2>
      Route: {{ route.path }}
      <br />
      Server date: {{ date }}
      <br />
      Product Count: {{ products.length }}
    </h2>

    <v-btn class="bg-gray-200 p-2 rounded-lg" id="count" @click="count++">
      Count: {{ count }}
    </v-btn>

    <ClientOnly>
      <h2 class="mt-4">Client Only Info</h2>
      <p>This is not rendered on the server.</p>
      <p>Client date: {{ new Date().toISOString() }}</p>
    </ClientOnly>
  </div>
</template>

<style scoped></style>
