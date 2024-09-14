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
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
