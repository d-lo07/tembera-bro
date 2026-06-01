<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>

<footer class="relative overflow-hidden px-8 py-14 mt-10" style="background: #020617; color: #F1F5F9;">
  <div class="absolute inset-x-0 top-0 h-32" style="background: linear-gradient(180deg, rgba(2,6,23,0.95), transparent); pointer-events: none;"></div>
  <div class="relative mx-auto max-w-7xl">
    <div class="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
      <div class="space-y-5">
        <h3 class="font-semibold text-xl" style="color: #86EFAC;">Tembera URWANDA</h3>
        <p class="max-w-md" style="color: #94A3B8;">Discover the beauty of the land of a thousand hills in a polished dark experience.</p>
        <div class="flex flex-wrap gap-3">
          <span class="inline-flex items-center rounded-full px-3 py-1 text-sm" style="border: 1px solid rgba(148, 163, 184, 0.2); background: rgba(15, 23, 42, 0.9); color: #CBD5E1;">Night mode ready</span>
          <span class="inline-flex items-center rounded-full px-3 py-1 text-sm" style="border: 1px solid rgba(34, 197, 94, 0.18); background: rgba(22, 163, 74, 0.12); color: #86EFAC;">Elegant footer</span>
        </div>
      </div>

      <div>
        <h3 class="font-semibold text-lg mb-4" style="color: #F8FAFC;">Quick links</h3>
        <ul class="space-y-3 text-sm" style="color: #94A3B8;">
          <li><RouterLink to="/" class="transition hover:text-[#22C55E]">Home</RouterLink></li>
          <li><RouterLink to="/about" class="transition hover:text-[#22C55E]">About us</RouterLink></li>
          <li><RouterLink to="/services" class="transition hover:text-[#22C55E]">Services</RouterLink></li>
          <li><RouterLink to="/contact" class="transition hover:text-[#22C55E]">Contact us</RouterLink></li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-lg mb-4" style="color: #F8FAFC;">Destinations</h3>
        <ul class="space-y-3 text-sm" style="color: #94A3B8;">
          <li><RouterLink to="/north" class="transition hover:text-[#22C55E]">Northern Province</RouterLink></li>
          <li><RouterLink to="/south" class="transition hover:text-[#22C55E]">Southern Province</RouterLink></li>
          <li><RouterLink to="/west" class="transition hover:text-[#22C55E]">Western Province</RouterLink></li>
          <li><RouterLink to="/east" class="transition hover:text-[#22C55E]">Eastern Province</RouterLink></li>
          <li><RouterLink to="/kigali" class="transition hover:text-[#22C55E]">Kigali Province</RouterLink></li>
        </ul>
      </div>

      <div class="rounded-3xl p-6 shadow-xl" style="background: rgba(15, 23, 42, 0.92); border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 24px 48px rgba(0, 0, 0, 0.24);">
        <h3 class="font-semibold text-lg mb-4" style="color: #F8FAFC;">Contact us</h3>
        <p class="text-sm mb-4" style="color: #94A3B8;">Reach our team for fast planning and local recommendations.</p>
        <ul class="space-y-3 text-sm" style="color: #94A3B8;">
          <li><span style="color: #F8FAFC; font-weight: 600;">Email</span>: cyusajason209@gmail.com</li>
          <li><span style="color: #F8FAFC; font-weight: 600;">Phone</span>: 0796608954</li>
          <li><span style="color: #F8FAFC; font-weight: 600;">Address</span>: Kagugu, Rwanda</li>
        </ul>
      </div>
    </div>

    <div class="mt-12 pt-6 text-sm flex flex-col gap-3 md:flex-row md:items-center md:justify-between" style="border-top: 1px solid rgba(255, 255, 255, 0.08); color: #94A3B8;">
      <p style="color: #CBD5E1;">&copy; Done By CYUSA JASON.</p>
      <div class="flex flex-wrap items-center gap-4">
        <RouterLink to="/" class="transition hover:text-[#22C55E]">Home</RouterLink>
        <RouterLink to="/about" class="transition hover:text-[#22C55E]">About</RouterLink>
        <RouterLink to="/contact" class="transition hover:text-[#22C55E]">Contact</RouterLink>
      </div>
    </div>
  </div>
</footer>

</template>
