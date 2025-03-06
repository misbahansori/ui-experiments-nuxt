<template>
  <form>
    <SidebarGroup className="py-0">
      <SidebarGroupContent className="relative">
        <div class="relative">
          <SidebarInput
            type="search"
            placeholder="Search..."
            class="h-9 ps-9 pe-9"
          />
          <div
            class="text-muted-foreground/60 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50"
          >
            <Icon name="ri-search-2-line" size="20" aria-hidden="true" />
          </div>
          <div
            class="text-muted-foreground pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-2"
          >
            <kbd
              class="bg-input text-muted-foreground/70 inline-flex size-5 max-h-full items-center justify-center rounded px-1 font-[inherit] text-[0.625rem] font-medium"
            >
              /
            </kbd>
          </div>
        </div>
      </SidebarGroupContent>
    </SidebarGroup>
  </form>
</template>
