import { Icon } from "#components";
import type { ColumnDef } from "@tanstack/vue-table";
import { h } from "vue";
import ContactValue from "~/components/contacts/ContactValue.vue";
import DataTableDropDown from "~/components/contacts/DataTableDropDown.vue";
import Badge from "~/components/ui/badge/Badge.vue";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Progress } from "~/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export type Contact = {
  id: string;
  image: string;
  name: string;
  status: string;
  location: string;
  verified: boolean;
  referral: {
    name: string;
    image: string;
  };
  value: number;
  joinDate: string;
};

export const columns: ColumnDef<Contact>[] = [
  {
    id: "select",
    header: ({ table }) =>
      h(Checkbox, {
        ariaLabel: "Select all",
      }),
    cell: ({ row, table }) =>
      h(Checkbox, {
        modelValue: row.getIsSelected(),
        "onUpdate:modelValue": (value) => row.toggleSelected(!!value),
        ariaLabel: "Select row",
      }),
    size: 32,
    enableSorting: false,
    enableHiding: false,
  },
  {
    header: "Name",
    accessorKey: "name",
    cell: ({ row }) =>
      h("div", { class: "flex items-center gap-3" }, [
        h("img", {
          class: "rounded-full",
          src: row.original.image,
          width: 32,
          height: 32,
          alt: row.getValue("name"),
        }),
        h("div", { class: "font-medium" }, row.getValue("name")),
      ]),
    size: 180,
    enableHiding: false,
  },
  {
    header: "ID",
    accessorKey: "id",
    cell: ({ row }) =>
      h("span", { class: "text-muted-foreground" }, row.getValue("id")),
    size: 110,
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) =>
      h("div", { class: "flex items-center h-full" }, [
        h(
          Badge,
          {
            variant: "outline",
            class:
              "gap-1 py-0.5 px-2 font-normal text-muted-foreground text-sm",
          },
          [
            row.original.status === "Active"
              ? h(Icon, {
                  name: "ri-check-line",
                  class: "text-emerald-500",
                  size: 14,
                  ariaHidden: "true",
                })
              : "- ",
            row.original.status,
          ],
        ),
      ]),
    size: 110,
  },
  {
    header: "Location",
    accessorKey: "location",
    cell: ({ row }) =>
      h("span", { class: "text-muted-foreground" }, row.getValue("location")),
  },
  {
    header: "Verified",
    accessorKey: "verified",
    cell: ({ row }) =>
      h("div", {}, [
        h(
          "span",
          { class: "sr-only" },
          row.getValue("verified") ? "Verified" : "Not Verified",
        ),
        h(Icon, {
          name: "ri-verified-badge-fill",
          class: row.getValue("verified")
            ? "text-emerald-500"
            : "text-muted-foreground/50",
          size: 20,
          ariaHidden: "true",
        }),
      ]),
  },
  {
    header: "Referral",
    accessorKey: "referral",
    cell: ({ row }) =>
      h("div", { class: "flex items-center h-full gap-3" }, [
        h("img", {
          class: "rounded-full",
          src: row.original.referral.image,
          width: 20,
          height: 20,
          alt: row.original.referral.name,
        }),
        h(
          "div",
          { class: "text-muted-foreground whitespace-pre-wrap" },
          row.original.referral.name,
        ),
      ]),
    size: 140,
  },
  {
    header: "Value",
    accessorKey: "value",
    cell: ({ row }) =>
      h(ContactValue, { value: row.original.value, class: "w-full" }),
    size: 140,
  },
  {
    id: "actions",
    header: () => h("span", { class: "sr-only" }, "Actions"),
    cell: ({ row }) => h(DataTableDropDown, { contact: row.original }),
    size: 60,
    enableHiding: false,
  },
];
