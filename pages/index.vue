<template>
  <NuxtLink
    class="prose"
    :to="firstLesson.path"
  >
    Go to first lesson</NuxtLink>
</template>


<script setup lang="ts">

const firstLesson = useFirstLesson()

</script>