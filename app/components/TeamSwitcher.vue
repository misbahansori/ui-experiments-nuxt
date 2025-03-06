<script setup lang="ts">
interface Team {
  name: string;
  logo: string;
}

defineProps<{
  teams: Team[];
}>();
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button
            size="lg"
            variant="ghost"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground w-full gap-3 px-1 [&>svg]:size-auto"
          >
            <div class="flex w-full items-center justify-between gap-3">
              <div
                class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center overflow-hidden rounded-md"
              >
                <img
                  :src="teams.at(0)?.logo ?? ''"
                  :alt="teams.at(0)?.name ?? ''"
                  width="36"
                  height="36"
                />
              </div>
              <div class="grid flex-1 text-left text-base leading-tight">
                <span class="truncate font-medium">
                  {{ teams.at(0)?.name ?? "" }}
                </span>
              </div>
              <Icon
                name="ri-expand-up-down-line"
                class="text-muted-foreground/60 ms-auto"
                size="20"
                aria-hidden="true"
              />
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-md"
          align="start"
          side="bottom"
          :side-offset="4"
        >
          <DropdownMenuLabel class="text-muted-foreground/60 text-xs uppercase">
            Teams
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem v-for="team in teams" :key="team.name">
              <div
                class="flex size-6 items-center justify-center overflow-hidden rounded-md"
              >
                <img :src="team.logo" :alt="team.name" width="36" height="36" />
              </div>
              <span class="truncate">{{ team.name }}</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Icon name="ri-add-circle-line" size="20" aria-hidden="true" />
            Add team
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
</template>
