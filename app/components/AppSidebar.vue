<script setup lang="ts">
const data = {
  teams: [
    {
      name: "InnovaCraft",
      logo: "/logo-01.png",
    },
    {
      name: "Acme Corp.",
      logo: "/logo-01.png",
    },
    {
      name: "Evil Corp.",
      logo: "/logo-01.png",
    },
  ],
  navMain: [
    {
      title: "Sections",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "#",
          icon: "ri-scan-line",
        },
        {
          title: "Insights",
          url: "#",
          icon: "ri-bard-line",
        },
        {
          title: "Contacts",
          url: "#",
          icon: "ri-user-follow-line",
          isActive: true,
        },
        {
          title: "Tools",
          url: "#",
          icon: "ri-code-s-slash-line",
        },
        {
          title: "Integration",
          url: "#",
          icon: "ri-login-circle-line",
        },
        {
          title: "Layouts",
          url: "#",
          icon: "ri-layout-left-line",
        },
        {
          title: "Reports",
          url: "#",
          icon: "ri-leaf-line",
        },
      ],
    },
    {
      title: "Other",
      url: "#",
      items: [
        {
          title: "Settings",
          url: "#",
          icon: "ri-settings-3-line",
        },
        {
          title: "Help Center",
          url: "#",
          icon: "ri-leaf-line",
        },
      ],
    },
  ],
};
</script>

<template>
  <Sidebar v-bind="$attrs">
    <SidebarHeader>
      <TeamSwitcher :teams="data.teams" />
      <hr class="border-border mx-2 -mt-px border-t" />
      <SearchForm class="mt-3" />
    </SidebarHeader>
    <SidebarContent>
      <!-- We create a SidebarGroup for each parent. -->
      <SidebarGroup v-for="item in data.navMain" :key="item.title">
        <SidebarGroupLabel class="text-muted-foreground/60 uppercase">
          {{ item.title }}
        </SidebarGroupLabel>
        <SidebarGroupContent class="px-2">
          <SidebarMenu>
            <SidebarMenuItem
              v-for="menuItem in item.items"
              :key="menuItem.title"
            >
              <SidebarMenuButton
                as-child
                class="group/menu-button hover:from-sidebar-accent hover:to-sidebar-accent/40 data-[active=true]:from-primary/20 data-[active=true]:to-primary/5 h-9 gap-3 rounded-md bg-gradient-to-r font-medium hover:bg-transparent [&>svg]:size-auto"
                :is-active="menuItem.isActive"
              >
                <NuxtLink :to="menuItem.url">
                  <Icon
                    v-if="menuItem.icon"
                    :name="menuItem.icon"
                    class="text-muted-foreground/60 group-data-[active=true]/menu-button:text-primary"
                    :size="22"
                    aria-hidden="true"
                  />
                  <span>{{ menuItem.title }}</span>
                </NuxtLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <hr class="border-border mx-2 -mt-px border-t" />
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            class="hover:from-sidebar-accent hover:to-sidebar-accent/40 data-[active=true]:from-primary/20 data-[active=true]:to-primary/5 h-9 gap-3 rounded-md bg-gradient-to-r font-medium hover:bg-transparent [&>svg]:size-auto"
          >
            <Icon
              name="ri-logout-box-line"
              class="text-muted-foreground/60 group-data-[active=true]/menu-button:text-primary size-5.5"
              aria-hidden="true"
            />
            <span>Sign Out</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
