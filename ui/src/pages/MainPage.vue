<script setup lang="ts">
import { PlAlert, PlBlockPage, PlTextField } from '@platforma-sdk/ui-vue';
import { useApp } from '../app';

const app = useApp();

</script>

<template>
  <PlBlockPage>
  
    <PlTextField v-model="app.model.args.deduplication" label="Deduplication trick" clearable />

    <pre>

      {{ app.model.outputs.message }}

    </pre>

  </PlBlockPage>
</template>
