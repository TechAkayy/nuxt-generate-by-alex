<script setup lang="ts">
  const route = useRoute()

  if (route.path === '/no-js') {
    useServerHead({
      script: [
        {
          innerHTML: `
      const button = document.querySelector('#count');
      button.addEventListener('click', () => {
        button.innerHTML = 'Count: ' + (parseInt(button.innerHTML.split(' ')[1]))
      })`,
          tagPosition: 'bodyClose',
        },
      ],
    })
  }
</script>

<template>
  <div>
    <v-app class="pa-10">
      <v-main class="py-4">
        <AlexCard>
          <template #title>
            <h1>Inside v-main, doesn't work, check app.vue!</h1>
          </template>
        </AlexCard>
      </v-main>
    </v-app>
  </div>
</template>

<style scoped></style>
