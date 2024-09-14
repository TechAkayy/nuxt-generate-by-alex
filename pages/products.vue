<script setup lang="ts">
  const route = useRoute()
  const count = ref(0)
  const {data} = await useFetch('/api/data')
  prerenderRoutes('/api/data')

  const {products, date} = data.value
</script>

<template>
  <div>
    <h1>
      Route: {{ route.path }}
      <br />
      Server date: {{ date }}
      <br />
      Product Count: {{ products.length }}
    </h1>

    <button class="bg-gray-200 p-2 rounded-lg" id="count" @click="count++">
      Count: {{ count }}
    </button>

    <ClientOnly>
      <h2>Client Only Info</h2>
      <p>This is not rendered on the server.</p>
      <p>Client date: {{ new Date().toISOString() }}</p>
    </ClientOnly>
  </div>
</template>

<style scoped></style>
