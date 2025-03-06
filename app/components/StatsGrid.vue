<script setup lang="ts">
const stats = [
  {
    title: "Connections",
    value: "427,296",
    change: {
      value: "+12%",
      trend: "up",
    },
    icon: "ri-donut-chart-line",
  },
  {
    title: "Contacts",
    value: "37,429",
    change: {
      value: "+42%",
      trend: "up",
    },
    icon: "ri-database-2-line",
  },
  {
    title: "Value",
    value: "$82,439",
    change: {
      value: "+37%",
      trend: "up",
    },
    icon: "ri-speed-up-line",
  },
  {
    title: "Referrals",
    value: "3,497",
    change: {
      value: "-17%",
      trend: "down",
    },
    icon: "ri-pen-nib-line",
  },
];

const isPositive = (trend: string) => trend === "up";
const trendColor = (trend: string) =>
  isPositive(trend) ? "text-emerald-500" : "text-red-500";
</script>

<template>
  <div
    class="border-border from-sidebar/60 to-sidebar grid grid-cols-2 rounded-xl border bg-gradient-to-br min-[1200px]:grid-cols-4"
  >
    <div v-for="stat in stats" :key="stat.title">
      <div
        class="group before:from-input/30 before:via-input before:to-input/30 relative p-4 before:absolute before:inset-y-8 before:right-0 before:w-px before:bg-gradient-to-b last:before:hidden lg:p-5"
      >
        <div class="relative flex items-center gap-4">
          <div
            class="flex size-10 items-center justify-center rounded-full border border-emerald-600/50 bg-emerald-600/25 text-emerald-500 max-[480px]:hidden"
          >
            <Icon :name="stat.icon" class="size-6 shrink-0" />
          </div>
          <div>
            <a
              href="#"
              class="text-muted-foreground/60 text-xs font-medium tracking-widest uppercase before:absolute before:inset-0"
            >
              {{ stat.title }}
            </a>
            <div class="mb-2 text-2xl font-semibold">{{ stat.value }}</div>
            <div class="text-muted-foreground/60 text-xs">
              <span class="font-medium" :class="trendColor(stat.change.trend)">
                {{ isPositive(stat.change.trend) ? "↗" : "↘" }}
                {{ stat.change.value }}
              </span>
              vs last week
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
