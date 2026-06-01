 <script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';
</script>
<template>
  <div class="min-h-screen flex flex-col bg-white text-slate-900">
    <Navbar />
    <main class="flex-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>