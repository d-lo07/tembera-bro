<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>

<footer class="relative overflow-hidden px-8 py-14 mt-10 bg-card-dark text-slate-100">
  <div class="relative mx-auto max-w-7xl">
    <div class="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
      <div class="space-y-5">
        <h3 class="font-semibold text-xl text-primary">Tembera URWANDA</h3>
        <p class="max-w-md text-slate-300">Discover the beauty of the land of a thousand hills in a refreshed dark experience.</p>
        <div class="flex flex-wrap gap-3">
          <span class="inline-flex items-center rounded-full px-3 py-1 text-sm border" style="border-color: var(--border-dark); color: var(--text-light)">Dark mode</span>
          <span class="inline-flex items-center rounded-full px-3 py-1 text-sm border" style="border-color: rgba(6,182,212,0.18); color: var(--primary)">Refreshed</span>
        </div>
      </div>

      <div>
        <h3 class="font-semibold text-lg mb-4">Quick links</h3>
        <ul class="space-y-3 text-sm text-slate-300">
          <li><RouterLink to="/" class="transition hover:text-primary">Home</RouterLink></li>
          <li><RouterLink to="/about" class="transition hover:text-primary">About us</RouterLink></li>
          <li><RouterLink to="/services" class="transition hover:text-primary">Services</RouterLink></li>
          <li><RouterLink to="/contact" class="transition hover:text-primary">Contact us</RouterLink></li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-lg mb-4">Destinations</h3>
        <ul class="space-y-3 text-sm text-slate-300">
          <li><RouterLink to="/north" class="transition hover:text-primary">Northern Province</RouterLink></li>
          <li><RouterLink to="/south" class="transition hover:text-primary">Southern Province</RouterLink></li>
          <li><RouterLink to="/west" class="transition hover:text-primary">Western Province</RouterLink></li>
          <li><RouterLink to="/east" class="transition hover:text-primary">Eastern Province</RouterLink></li>
          <li><RouterLink to="/kigali" class="transition hover:text-primary">Kigali Province</RouterLink></li>
        </ul>
      </div>

      <div class="rounded-3xl p-6 shadow-sm bg-card-dark border" style="border-color: var(--border-dark)">
        <h3 class="font-semibold text-lg mb-4">Contact us</h3>
        <p class="text-sm mb-4 text-slate-300">Reach our team for fast planning and local recommendations.</p>
        <ul class="space-y-3 text-sm text-slate-300">
          <li><span class="font-semibold text-slate-100">Email</span>: idheureux07@gmail.com</li>
          <li><span class="font-semibold text-slate-100">Phone</span>: 070000000</li>
          <li><span class="font-semibold text-slate-100">Address</span>: Kagugu, Rwanda</li>
        </ul>
      </div>
    </div>

    <div class="mt-12 pt-6 text-sm flex flex-col gap-3 md:flex-row md:items-center md:justify-between" style="border-top:1px solid var(--border-dark); color: var(--muted)">
      <p style="color: var(--muted)">&copy; Done By IRANGABIYE DORLIN.</p>
      <div class="flex flex-wrap items-center gap-4">
        <RouterLink to="/" class="transition hover:text-primary">Home</RouterLink>
        <RouterLink to="/about" class="transition hover:text-primary">About</RouterLink>
        <RouterLink to="/contact" class="transition hover:text-primary">Contact</RouterLink>
      </div>
    </div>
  </div>
</footer>

</template>
