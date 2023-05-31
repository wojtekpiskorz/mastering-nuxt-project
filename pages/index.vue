<template>
  <NuxtLink
    class="prose"
    :to="firstLesson.path"
  >
    Go to first lesson</NuxtLink>
</template>


<script setup lang="ts">

const firstLesson = await useFirstLesson()

const pass = 'postgres://postgres:hci6g4uXJisqcBsm@db.lsunucgkfmlihfrhbtny.supabase.co:6543/postgres?pgbouncer=true?connection_limit=1'

</script>

