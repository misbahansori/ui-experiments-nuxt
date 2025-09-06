<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/utils/cn";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <caption :class="cn('text-muted-foreground mt-4 text-sm', props.class)">
    <slot />
  </caption>
</template>
