<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const logoImage = '/logo.svg'

const { locale } = useI18n()

type LocaleCode = 'en' | 'fr' | 'rw'

const changeLanguage = (lang: LocaleCode) => {
  locale.value = lang
  localStorage.setItem('locale', lang)
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white text-slate-900 px-6 py-4 flex flex-wrap items-center justify-between gap-4 shadow-sm">
    <div class="flex items-center gap-3">
      <img :src="logoImage" class="h-11 w-11 rounded-full object-cover" alt="logo" />
      <div>
          <p class="text-sm uppercase tracking-[0.3em] text-[#06b6d4]">{{ $t('navbar.brand') }}</p>
          <p class="font-semibold text-lg text-slate-900">{{ $t('navbar.rwanda') }}</p>
      </div>
    </div>

      <ul class="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-700">
      <li><router-link to="/" class="transition hover:text-emerald-300">{{ $t('navbar.home') }}</router-link></li>
      <li><router-link to="/about" class="transition hover:text-emerald-300">{{ $t('navbar.about') }}</router-link></li>
      <li><router-link to="/services" class="transition hover:text-emerald-300">{{ $t('navbar.services') }}</router-link></li>
      <li><router-link to="/gallery" class="transition hover:text-emerald-300">{{ $t('navbar.gallery') }}</router-link></li>

      <!-- Destination Dropdown -->
      <li class="relative group">
        <button class="inline-flex items-center gap-1 transition hover:text-emerald-300">
          {{ $t('navbar.destination') }} <span>▾</span>
        </button>

        <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute right-0 mt-2 w-56 rounded-2xl bg-white border border-slate-200/40 p-2 shadow-md transition-all z-50">

          <!-- Overview -->
          <li>
            <router-link to="/destination" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-700 hover:bg-[#06b6d4]/10 hover:text-[#06b6d4] transition group/item">
              <span class="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover/item:bg-emerald-500/20 flex-shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
              </span>
              <span class="text-sm font-medium">{{ $t('navbar.overview') }}</span>
            </router-link>
          </li>

          <li class="my-1.5 border-t border-slate-200/40"></li>

          <!-- Kigali -->
          <li>
            <router-link to="/kigali" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-700 hover:bg-[#06b6d4]/10 hover:text-[#06b6d4] transition group/item">
              <span class="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover/item:bg-emerald-500/20 flex-shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </span>
              <span class="text-sm font-medium">{{ $t('navbar.kigali') }}</span>
            </router-link>
          </li>

          <!-- North -->
          <li>
            <router-link to="/north" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-700 hover:bg-[#06b6d4]/10 hover:text-[#06b6d4] transition group/item">
              <span class="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover/item:bg-emerald-500/20 flex-shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <span class="text-sm font-medium">{{ $t('navbar.north') }}</span>
            </router-link>
          </li>

          <!-- South -->
          <li>
            <router-link to="/south" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-700 hover:bg-[#06b6d4]/10 hover:text-[#06b6d4] transition group/item">
              <span class="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover/item:bg-emerald-500/20 flex-shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <span class="text-sm font-medium">{{ $t('navbar.south') }}</span>
            </router-link>
          </li>

          <!-- West -->
          <li>
            <router-link to="/west" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-700 hover:bg-[#06b6d4]/10 hover:text-[#06b6d4] transition group/item">
              <span class="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover/item:bg-emerald-500/20 flex-shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 12H3m0 0l3-3m-3 3l3 3" />
                </svg>
              </span>
              <span class="text-sm font-medium">{{ $t('navbar.west') }}</span>
            </router-link>
          </li>

          <!-- East -->
          <li>
            <router-link to="/east" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-700 hover:bg-[#06b6d4]/10 hover:text-[#06b6d4] transition group/item">
              <span class="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover/item:bg-emerald-500/20 flex-shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 12H21m0 0l-3-3m3 3l-3 3" />
                </svg>
              </span>
              <span class="text-sm font-medium">{{ $t('navbar.east') }}</span>
            </router-link>
          </li>

        </ul>
      </li>

      <li><router-link to="/contact" class="rounded-full border border-slate-300/30 px-4 py-2 text-slate-900 transition hover:bg-[#06b6d4]/10 hover:text-[#06b6d4]">{{ $t('navbar.contact') }}</router-link></li>

      <!-- Language Selector (styled to match destination dropdown) -->
      <li class="relative group">
        <button class="inline-flex items-center gap-2 rounded-full border border-[#06b6d4]/30 px-3 py-2 text-slate-900 transition hover:bg-[#06b6d4]/10">
          🌐 {{ locale.toUpperCase() }} <span>▾</span>
        </button>

        <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute right-0 mt-2 w-56 rounded-2xl bg-white border border-slate-200/40 p-2 shadow-md transition-all z-50">
          <li>
            <button
              @click="changeLanguage('en')"
              class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-700 hover:bg-[#06b6d4]/10 hover:text-[#06b6d4] transition group/item w-full text-left"
            >
              <span class="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover/item:bg-emerald-500/20 flex-shrink-0">🇬🇧</span>
              <span class="text-sm font-medium">English</span>
            </button>
          </li>
          <li>
            <button
              @click="changeLanguage('fr')"
              class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-700 hover:bg-[#06b6d4]/10 hover:text-[#06b6d4] transition group/item w-full text-left"
            >
              <span class="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover/item:bg-emerald-500/20 flex-shrink-0">🇫🇷</span>
              <span class="text-sm font-medium">Français</span>
            </button>
          </li>
          <li>
            <button
              @click="changeLanguage('rw')"
              class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-700 hover:bg-[#06b6d4]/10 hover:text-[#06b6d4] transition group/item w-full text-left"
            >
              <span class="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover/item:bg-emerald-500/20 flex-shrink-0">🇷🇼</span>
              <span class="text-sm font-medium">Kinyarwanda</span>
            </button>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>