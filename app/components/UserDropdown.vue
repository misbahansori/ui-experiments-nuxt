<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="h-auto p-0 hover:bg-transparent">
        <Avatar class="size-8">
          <AvatarImage
            src="./user.png"
            width="32"
            height="32"
            alt="Profile image"
          />
          <AvatarFallback>KK</AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="max-w-64" align="end">
      <DropdownMenuLabel class="flex min-w-0 flex-col">
        <span class="text-foreground truncate text-sm font-medium">
          Keith Kennedy
        </span>
        <span class="text-muted-foreground truncate text-xs font-normal">
          k.kennedy@originui.com
        </span>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Icon
            name="ri-settings-line"
            :size="16"
            class="opacity-60"
            aria-hidden="true"
          />
          <span>Account settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon
            name="ri-team-line"
            :size="16"
            class="opacity-60"
            aria-hidden="true"
          />
          <span>Affiliate area</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Icon
          name="ri-logout-box-line"
          :size="16"
          class="opacity-60"
          aria-hidden="true"
        />
        <span>Sign out</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
