<template>
  <div>
    <div class="prose mb-12">
      <h1>
        <span class="font-medium">
          Course:
          <span class="font-bold">{{ course.title }}</span>
        </span>
      </h1>
    </div>

    <div class="flex flex-row justify-center flex-grow">
      <div class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col">
        <h3>Chapters</h3>
        <div
          class="space-y-1 mb-4 flex flex-col"
          v-for="chapter in course.chapters"
          :key="chapter.slug"
        >
          <h4>{{ chapter.title }}</h4>
          <NuxtLink
            v-for="(lesson, index) in chapter.lessons"
            :key="lesson.slug"
            class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4"
            :to="lesson.path"
            :class="{
              'text-blue-500':
                lesson.path === $route.fullPath,
              'text-gray-600':
                lesson.path !== $route.fullPath,
            }"
          >
            <span class="text-gray-500">{{ index + 1 }}.</span>
            <span>{{ lesson.title }}</span>
          </NuxtLink>
        </div>
      </div>

      <div class="prose p-12 bg-white rounded-md w-[65ch]">
        <NuxtErrorBoundary>
          <NuxtPage />
          <template #error="{ error }">
            <div class="p-12 bg-red-100 w-full h-full min-h-screen flex flex-col items-center">
              <h1 class="text-red-500">Error</h1>
              <p class="text-red-500">{{ error }}</p>
              <button
                class="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
                @click="handleError(error)"
              >RESET Error</button>
            </div>
          </template>
        </NuxtErrorBoundary>
      </div>
    </div>
  </div>
</template>

<script setup>

const course = await useCourse();
const firstLesson = await useFirstLesson();


async function handleError(error) {
  await navigateTo(firstLesson.path);
  error.value = null;
}


definePageMeta({
  layout: 'custom'
});

</script>
