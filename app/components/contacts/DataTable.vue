<script setup lang="ts">
import { getCoreRowModel, useVueTable } from "@tanstack/vue-table";
import { columns, type Contact } from "~/components/contacts/columns";

const data = shallowRef<Contact[]>([
  {
    id: "VPK-74083",
    image:
      "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342643/avatar-40-18_atswv7.jpg",
    name: "Marco Rossi",
    status: "Inactive",
    location: "Madrid, Spain",
    verified: false,
    referral: {
      name: "Hiroshi Yamamoto",
      image:
        "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342643/avatar-40-16_zn3ygb.jpg",
    },
    value: 45,
    joinDate: "2023-08-20",
  },
  {
    id: "PGC-49264",
    image:
      "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342644/avatar-40-04_x4qdcu.jpg",
    name: "Yuki Tanaka",
    status: "Inactive",
    location: "Warsaw, PL",
    verified: true,
    referral: {
      name: "Astrid Andersen",
      image:
        "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342643/avatar-40-10_qyybkj.jpg",
    },
    value: 53,
    joinDate: "2023-05-15",
  },
  {
    id: "OQZ-19348",
    image:
      "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342644/avatar-40-04_x4qdcu.jpg",
    name: "Mike Allison",
    status: "Inactive",
    location: "San Francisco, US",
    verified: true,
    referral: {
      name: "Lena Müller",
      image:
        "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342643/avatar-40-15_fguzbs.jpg",
    },
    value: 30,
    joinDate: "2023-04-10",
  },
  {
    id: "WTY-78045",
    image:
      "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342644/avatar-40-05_xli7l8.jpg",
    name: "Anna Visconti",
    status: "Active",
    location: "Rome, IT",
    verified: true,
    referral: {
      name: "Fatim Al-Sayed",
      image:
        "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342644/avatar-40-11_jtjhsp.jpg",
    },
    value: 82,
    joinDate: "2024-02-20",
  },
  {
    id: "NBQ-30871",
    image:
      "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342644/avatar-40-06_rhmjht.jpg",
    name: "David Kim",
    status: "Inactive",
    location: "Paris, FR",
    verified: true,
    referral: {
      name: "Olivia Brown",
      image:
        "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342644/avatar-40-14_xnyo8y.jpg",
    },
    value: 58,
    joinDate: "2023-06-15",
  },
  {
    id: "BJL-57028",
    image:
      "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342644/avatar-40-09_zsh2r5.jpg",
    name: "Lucia Sorna",
    status: "Inactive",
    location: "Copenhagen, DK",
    verified: true,
    referral: {
      name: "Alex Allan",
      image:
        "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342644/avatar-40-13_fyeref.jpg",
    },
    value: 73,
    joinDate: "2023-03-20",
  },
  {
    id: "XYG-09214",
    image:
      "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342644/avatar-40-12_plokt8.jpg",
    name: "Samuel Carteron",
    status: "Inactive",
    location: "San Francisco, US",
    verified: false,
    referral: {
      name: "Lena Müller",
      image:
        "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342643/avatar-40-15_fguzbs.jpg",
    },
    value: 40,
    joinDate: "2023-04-25",
  },
  {
    id: "TRD-64851",
    image:
      "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342644/avatar-40-13_fyeref.jpg",
    name: "Alex Allan",
    status: "Inactive",
    location: "São Paulo, BR",
    verified: true,
    referral: {
      name: "Hiroshi Yamamoto",
      image:
        "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342643/avatar-40-16_zn3ygb.jpg",
    },
    value: 80,
    joinDate: "2023-07-10",
  },
  {
    id: "DQE-15940",
    image:
      "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342644/avatar-40-14_xnyo8y.jpg",
    name: "Olivia Brown",
    status: "Inactive",
    location: "Sydney, AU",
    verified: false,
    referral: {
      name: "Olivia Brown",
      image:
        "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342644/avatar-40-14_xnyo8y.jpg",
    },
    value: 55,
    joinDate: "2023-09-15",
  },
  {
    id: "LZR-37429",
    image:
      "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342643/avatar-40-16_zn3ygb.jpg",
    name: "Hiroshi Yamamoto",
    status: "Active",
    location: "Osaka, JP",
    verified: true,
    referral: {
      name: "Alex Allan",
      image:
        "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342644/avatar-40-13_fyeref.jpg",
    },
    value: 89,
    joinDate: "2023-10-25",
  },
  {
    id: "GVF-29130",
    image:
      "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342644/avatar-40-07_c5uzfo.jpg",
    name: "Sophie Dubois",
    status: "Inactive",
    location: "Montreal, CA",
    verified: false,
    referral: {
      name: "Hiroshi Yamamoto",
      image:
        "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342643/avatar-40-16_zn3ygb.jpg",
    },
    value: 68,
    joinDate: "2023-05-20",
  },
  {
    id: "ZXP-40865",
    image:
      "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342644/avatar-40-07_c5uzfo.jpg",
    name: "Diego Mendoza",
    status: "Active",
    location: "Mexico City, MX",
    verified: false,
    referral: {
      name: "Lena Müller",
      image:
        "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342643/avatar-40-15_fguzbs.jpg",
    },
    value: 92,
    joinDate: "2023-08-15",
  },
  {
    id: "MNY-52034",
    image:
      "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342643/avatar-40-15_fguzbs.jpg",
    name: "Lena Müller",
    status: "Inactive",
    location: "Vienna, AT",
    verified: true,
    referral: {
      name: "Astrid Andersen",
      image:
        "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342643/avatar-40-10_qyybkj.jpg",
    },
    value: 37,
    joinDate: "2023-11-10",
  },
  {
    id: "JTK-30751",
    image:
      "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342643/avatar-40-17_vwikrz.jpg",
    name: "Raj Patel",
    status: "Inactive",
    location: "Mumbai, IN",
    verified: false,
    referral: {
      image:
        "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342644/avatar-40-04_x4qdcu.jpg",
      name: "Yuki Tanaka",
    },
    value: 47,
    joinDate: "2023-12-15",
  },
  {
    id: "FWH-68247",
    image:
      "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342643/avatar-40-10_qyybkj.jpg",
    name: "Astrid Andersen",
    status: "Inactive",
    location: "Oslo, NO",
    verified: true,
    referral: {
      name: "Astrid Andersen",
      image:
        "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342643/avatar-40-10_qyybkj.jpg",
    },
    value: 100,
    joinDate: "2023-06-20",
  },
  {
    id: "XCU-85036",
    image:
      "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342644/avatar-40-11_jtjhsp.jpg",
    name: "Fatim Al-Sayed",
    status: "Active",
    location: "Cairo, EG",
    verified: false,
    referral: {
      image:
        "https://res.cloudinary.com/dlzlfasou/image/upload/v1738342644/avatar-40-05_xli7l8.jpg",
      name: "Anna Visconti",
    },
    value: 64,
    joinDate: "2023-09-10",
  },
]);

const table = useVueTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
});
</script>
<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-center gap-3">
        <div class="relative">
          <Input
            ref="inputRef"
            id="search"
            placeholder="Search by name"
            type="text"
            aria-label="Search by name"
            :class="
              cn(
                'peer bg-background from-accent/60 to-accent min-w-60 bg-gradient-to-br ps-9',
                Boolean(table.getColumn('name')?.getFilterValue()) && 'pe-9',
              )
            "
            :value="table.getColumn('name')?.getFilterValue() ?? ''"
            @update:modelValue="
              (value) => table.getColumn('name')?.setFilterValue(value)
            "
          />
          <div
            class="text-muted-foreground/60 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50"
          >
            <Icon name="ri-search-2-line" class="size-5" aria-hidden="true" />
          </div>
          <button
            v-if="Boolean(table.getColumn('name')?.getFilterValue())"
            class="text-muted-foreground/60 hover:text-foreground focus-visible:outline-ring/70 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg outline-offset-2 transition-colors focus:z-10 focus-visible:outline-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Clear filter"
            @click="table.getColumn('name')?.setFilterValue('')"
          >
            <Icon
              name="ri-close-circle-line"
              class="size-5"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <AlertDialog v-if="table.getSelectedRowModel().rows.length > 0">
          <AlertDialogTrigger as-child>
            <Button class="ml-auto" variant="outline">
              <Icon
                name="ri-delete-bin-line"
                class="size-4"
                aria-hidden="true"
              />
              <span>delete</span>
              <span
                class="border-border bg-background text-muted-foreground/70 ms-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium"
              >
                {{ table.getSelectedRowModel().rows.length }}
              </span>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <div
              class="flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4"
            >
              <div
                class="border-border flex size-9 shrink-0 items-center justify-center rounded-full border"
                aria-hidden="true"
              >
                <Icon name="ri-error-warning-line" class="size-4 opacity-80" />
              </div>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure you want to delete these rows?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  {{ table.getSelectedRowModel().rows.length }} selected rows.
                </AlertDialogDescription>
              </AlertDialogHeader>
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="outline">
              <Icon name="ri-filter-3-line" class="size-4" aria-hidden="true" />
              Filter
            </Button>
          </PopoverTrigger>
          <PopoverContent class="w-auto min-w-36 p-3" align="end">
            <div class="space-y-3">
              <div
                class="text-muted-foreground/60 text-xs font-medium uppercase"
              >
                Status
              </div>
              <div class="space-y-3">
                <Label class="flex items-center gap-2">
                  <Checkbox
                    @update:modelValue="
                      (value) =>
                        table
                          .getColumn('status')
                          ?.setFilterValue(value ? ['Active'] : '')
                    "
                  />
                  <span class="flex grow justify-between gap-2 font-normal">
                    Active
                    <span class="text-muted-foreground ms-2 text-xs">
                      {{
                        data.filter((item) => item.status === "Active").length
                      }}
                    </span>
                  </span>
                </Label>
                <Label class="flex items-center gap-2">
                  <Checkbox
                    @update:modelValue="
                      (value) =>
                        table
                          .getColumn('status')
                          ?.setFilterValue(value ? ['Inactive'] : '')
                    "
                  />
                  <span class="flex grow justify-between gap-2 font-normal">
                    Inactive
                    <span class="text-muted-foreground ms-2 text-xs">
                      {{
                        data.filter((item) => item.status === "Inactive").length
                      }}
                    </span>
                  </span>
                </Label>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <Button variant="outline">
          <Icon name="ri-filter-3-line" class="size-4" aria-hidden="true" />
          New Filter
        </Button>
      </div>
    </div>
    <DataTable :table="table" :columns="columns" :data="data" />
  </div>
</template>
