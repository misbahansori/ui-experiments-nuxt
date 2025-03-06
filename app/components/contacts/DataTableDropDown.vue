<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Contact } from "~/components/contacts/columns";

defineProps<{
  contact: Contact;
}>();

function copy(id: string) {
  navigator.clipboard.writeText(id);
}
</script>

<template>
  <DropdownMenu>
    <div class="flex justify-end">
      <DropdownMenuTrigger as-child>
        <Button
          size="icon"
          variant="ghost"
          class="text-muted-foreground/60 shadow-none"
          aria-label="Edit item"
        >
          <Icon name="ri-more-fill" class="size-5" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
    </div>
    <DropdownMenuContent align="end" class="w-auto">
      <DropdownMenuGroup>
        <DropdownMenuItem>
          {{
            contact.status === "Active"
              ? "Deactivate contact"
              : "Activate contact"
          }}
        </DropdownMenuItem>
        <DropdownMenuItem>
          {{ contact.verified ? "Unverify contact" : "Verify contact" }}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          variant="destructive"
          class="dark:data-[variant=destructive]:focus:bg-destructive/10"
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
