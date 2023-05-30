<template>
  <NuxtLayout>
    <div class="prose">
      <h1>Dang</h1>
      <p>It looks like something went wrong</p>
      <p>Status Code</p>
      <pre>{{ error.statusCode }}</pre>
      <p>Message</p>
      <pre>{{ error.message }}</pre>
    </div>
    <button @click="resetError">Go back to application</button>
  </NuxtLayout>
</template>

<script setup>

const error = useError()

function resetError() {
  clearError({
    redirect: '/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3'
  })
}

</script>