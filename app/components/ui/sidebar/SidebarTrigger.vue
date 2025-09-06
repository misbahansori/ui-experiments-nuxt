<script setup lang="ts">
import { Button } from "@/components/ui/button";
import type { HTMLAttributes } from "vue";
import { cn } from "~/utils/cn";
import { useSidebar } from "./utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { toggleSidebar } = useSidebar();
</script>

<template>
  <Button
    data-sidebar="trigger"
    variant="ghost"
    size="icon"
    :class="cn('h-7 w-7', props.class)"
    @click="toggleSidebar"
  >
    <Icon name="ri-layout-left-line" class="size-5.5" aria-hidden="true" />
    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>
