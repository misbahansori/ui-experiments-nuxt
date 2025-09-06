<script setup lang="ts">
const props = defineProps<{
  value: number;
}>();
</script>
<template>
  <TooltipProvider :delay-duration="0">
    <Tooltip :align="'start'" :side-offset="-8">
      <TooltipTrigger class="w-full">
        <Progress :modelValue="props.value" class="h-1 w-full max-w-14" />
      </TooltipTrigger>
      <TooltipContent :align="'start'" :side-offset="-8">
        <p>{{ props.value + "%" }}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
