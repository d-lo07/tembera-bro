<script setup>
import PageLayout from '../components/PageLayout.vue'
import { pages } from '../data/pageContent'
const page = pages.about
</script>

<template>
  <PageLayout :page="page" />
</template>
