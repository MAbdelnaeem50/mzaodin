<template>
    <div class="flex justify-right w-full lg:px-20 mb-8">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="[
          'lg:px-20 px-4 py-2 font-semibold rounded-3xl bg-blue-100 ml-1',
          selectedTab === tab.id ? 'bg-blue-500 text-white' : 'text-black'
        ]"
        @click="$emit('tabSelected', tab.id)"
      >
        {{ tab.label }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tabs: Array,
      selectedTab: String,
    },
  };
  </script>