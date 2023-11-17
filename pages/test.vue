<script lang="ts" setup>
import type { TableColumnType } from 'ant-design-vue';

type TableDataType = {
  key: string;
  name: string;
  age: number;
  address: string;
};

const columns: TableColumnType<TableDataType>[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: 'Action',
    key: 'action',
  },
];

const dataSource = [
  {
    key: '1',
    name: 'Anatasya',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Catur',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Dhea',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
</script>

<template>
  <section class="flex flex-col justify-center items-top w-screen h-screen p-10 space-y-4 bg-slate-200">
    <p class="text-center">
      This page will be displayed at the /test route.
    </p>
    <a-table
      :data-source="dataSource"
      :columns="columns"
    />
  </section>
</template>
