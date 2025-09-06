<script setup lang="ts" generic="TData, TValue">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ColumnDef, Table as VueTable } from "@tanstack/vue-table";
import { FlexRender } from "@tanstack/vue-table";

const { table, columns, data } = defineProps<{
  table: VueTable<TData>;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}>();
</script>

<template>
  <Table
    class="table-fixed border-separate border-spacing-0 [&_tr:not(:last-child)_td]:border-b"
  >
    <TableHeader>
      <TableRow
        v-for="headerGroup in table.getHeaderGroups()"
        :key="headerGroup.id"
        class="hover:bg-transparent"
      >
        <TableHead
          v-for="header in headerGroup.headers"
          :key="header.id"
          :style="{ width: `${header.getSize()}px` }"
          class="bg-sidebar border-border relative h-9 border-y select-none first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r"
        >
          <div
            v-if="!header.isPlaceholder && header.column.getCanSort()"
            :class="
              cn(
                header.column.getCanSort() &&
                  'flex h-full cursor-pointer items-center gap-2 select-none',
              )
            "
            @click="header.column.getToggleSortingHandler()?.($event)"
            @keydown.enter="header.column.getToggleSortingHandler()?.($event)"
            :tabindex="header.column.getCanSort() ? 0 : undefined"
          >
            <FlexRender :render="header.column.columnDef.header" />
            <Icon
              v-if="header.column.getIsSorted() === 'asc'"
              :key="'asc'"
              name="ri:arrow-up-s-line"
              class="shrink-0 opacity-60"
              size="16"
              aria-hidden="true"
            />
            <Icon
              v-if="header.column.getIsSorted() === 'desc'"
              :key="'desc'"
              name="ri:arrow-down-s-line"
              class="shrink-0 opacity-60"
              size="16"
              aria-hidden="true"
            />
          </div>
          <FlexRender v-else :render="header.column.columnDef.header" />
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <template v-if="table.getRowModel().rows?.length">
        <TableRow
          v-for="row in table.getRowModel().rows"
          :key="row.id"
          :data-state="row.getIsSelected() ? 'selected' : undefined"
          class="hover:bg-accent/50 h-px border-0 [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
        >
          <TableCell
            v-for="cell in row.getVisibleCells()"
            :key="cell.id"
            class="h-[inherit] p-3 last:py-0"
          >
            <FlexRender
              :render="cell.column.columnDef.cell"
              :props="cell.getContext()"
            />
          </TableCell>
        </TableRow>
      </template>
      <template v-else>
        <TableRow
          class="hover:bg-transparent [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
        >
          <TableCell :colspan="columns.length" class="h-24 text-center">
            No results.
          </TableCell>
        </TableRow>
      </template>
    </TableBody>
  </Table>
</template>
