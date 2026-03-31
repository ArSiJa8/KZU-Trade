<script setup lang="ts">

const countDown = ref(5);
onMounted(() => {
  const timer = setInterval(() => {
    if (countDown.value > 0) {
      countDown.value--
    } else {
      clearInterval(timer)
      navigateTo('/')
    }
  }, 1000)
})

</script>


<template>
  <main>
    <UContainer> <p>Test abgeschlossen</p>
      <p>Redirecting you to home in {{ countDown }}</p>
    </UContainer>
  </main>
</template>