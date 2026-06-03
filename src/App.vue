 <script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';

const pageBgClass = 'page-dark'
</script>
<template>
  <div :class="['min-h-screen flex flex-col text-slate-100', pageBgClass]">
    <Navbar />
    <main class="flex-1 pt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="bg-card-dark border border-surface rounded-[1.25rem] shadow-[0_24px_80px_rgba(0,0,0,0.35)] p-6">
          <router-view />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>