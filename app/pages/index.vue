<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset class="overflow-hidden px-4 md:px-6 lg:px-8">
      <header class="flex h-16 shrink-0 items-center gap-2 border-b">
        <div class="flex flex-1 items-center gap-2 px-3">
          <SidebarTrigger
            class="text-muted-foreground/60 hover:text-foreground -ms-4"
          />
          <Separator
            orientation="vertical"
            class="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem class="hidden md:block">
                <BreadcrumbLink href="#" class="flex items-center gap-2">
                  <Icon
                    name="ri-scan-line"
                    aria-hidden="true"
                    class="text-muted-foreground/60 hover:text-foreground size-5.5"
                  />
                  <span class="sr-only">Dashboard</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator class="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Contacts</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div class="ml-auto flex gap-3">
          <FeedbackDialog />
          <UserDropdown />
        </div>
      </header>
      <div class="flex flex-1 flex-col gap-4 py-4 lg:gap-6 lg:py-6">
        <!-- Page intro -->
        <div class="flex items-center justify-between gap-4">
          <div class="space-y-1">
            <h1 class="text-2xl font-semibold">Oilà, Larry!</h1>
            <p class="text-muted-foreground text-sm">
              Here's an overview of your contacts. Manage or create new ones
              with ease!
            </p>
          </div>
          <Button class="px-3">Add Contact</Button>
        </div>
        <!-- Numbers -->
        <StatsGrid />
        <!-- Table -->
        <div class="min-h-[100vh] flex-1 md:min-h-min">
          <ContactsDataTable />
        </div>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
