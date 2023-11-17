<script lang="ts" setup>
const step = ref<number>(0);
const items = [
  {
    title: 'Finished',
    description: 'This is a description.',
  },
  {
    title: 'In Progress',
    description: 'This is a description.',
  },
  {
    title: 'Waiting',
    description: 'This is a description.',
  },
];

const next = () => {
  step.value++;
};
const prev = () => {
  step.value--;
};
</script>

<template>
  <section class="flex flex-col justify-center items-top w-screen h-screen p-10 space-y-4 bg-slate-200">
    <p class="text-center">
      This page will be displayed at the /step route.
    </p>
    <div class="bg-slate-100 p-8">
      <a-steps
        :current="step"
        :items="items"
      />
      <div class="steps-content p-10 bg-gray-200 rounded border border-black">
        {{ items[step].description }}
      </div>
      <div class="steps-action">
        <a-button
          v-if="step < items.length - 1"
          type="primary"
          @click="next"
        >
          Next
        </a-button>
        <a-button
          v-if="step == items.length - 1"
          type="primary"
          @click="message.success('Processing complete!')"
        >
          Done
        </a-button>
        <a-button
          v-if="step > 0"
          style="margin-left: 8px"
          @click="prev"
        >
          Previous
        </a-button>
      </div>
    </div>
  </section>
</template>
