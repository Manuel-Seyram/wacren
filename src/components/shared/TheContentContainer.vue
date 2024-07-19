<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});
</script>

<template>
  <div class="border rounded-md h-82">
    <div>
      <p class="text-center text-xl font-bold font-nunito">{{ title }}</p>
      <p class="mt-2 text-base font-normal font-nunito px-5 mb-5 text-center">
        {{ description }}
      </p>
      <div class="h-10 bg-gray-200"></div>
    </div>
  </div>
</template>
