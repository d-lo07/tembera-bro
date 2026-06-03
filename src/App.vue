 <script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';

const route = useRoute()
const pageBgClass = computed(() => (route.meta && route.meta.bg === 'green') ? 'page-green' : 'page-white')
</script>
<template>
  <div :class="['min-h-screen flex flex-col text-slate-900', pageBgClass]">
    <Navbar />
    <main class="flex-1 pt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="bg-white border border-slate-100 rounded-xl shadow-sm p-6">
          <router-view />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>