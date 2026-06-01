<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const logoImage = new URL('../assets/images/rwanda-flag.jpg', import.meta.url).href

const { locale } = useI18n()

type LocaleCode = 'en' | 'fr' | 'rw'

const changeLanguage = (lang: LocaleCode) => {
  locale.value = lang
  localStorage.setItem('locale', lang)
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-[#020617]/95 text-slate-100 px-6 py-4 flex flex-wrap items-center justify-between gap-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
    <div class="flex items-center gap-3">
      <img :src="logoImage" class="h-11 w-11 rounded-full object-cover" alt="logo" />
      <div>
        <p class="text-sm uppercase tracking-[0.3em] text-emerald-300">{{ $t('navbar.brand') }}</p>
        <p class="font-semibold text-lg text-white">{{ $t('navbar.rwanda') }}</p>
      </div>
    </div>

    <ul class="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-200">
      <li><router-link to="/" class="transition hover:text-emerald-300">{{ $t('navbar.home') }}</router-link></li>
      <li><router-link to="/about" class="transition hover:text-emerald-300">{{ $t('navbar.about') }}</router-link></li>
      <li><router-link to="/services" class="transition hover:text-emerald-300">{{ $t('navbar.services') }}</router-link></li>
      <li><router-link to="/gallery" class="transition hover:text-emerald-300">{{ $t('navbar.gallery') }}</router-link></li>
      <li class="relative group">
        <button class="inline-flex items-center gap-1 transition hover:text-emerald-300">
          {{ $t('navbar.destination') }} <span>▾</span>
        </button>
        <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute right-0 mt-2 w-44 rounded-2xl bg-[#0F172A] p-2 shadow-2xl shadow-black/40 transition-all z-50">
          <li><router-link to="/destination" class="block rounded-xl px-4 py-2 text-slate-200 transition hover:bg-slate-900/80">{{ $t('navbar.overview') }}</router-link></li>
          <li><router-link to="/kigali" class="block rounded-xl px-4 py-2 text-slate-200 transition hover:bg-slate-900/80">{{ $t('navbar.kigali') }}</router-link></li>
          <li><router-link to="/north" class="block rounded-xl px-4 py-2 text-slate-200 transition hover:bg-slate-900/80">{{ $t('navbar.north') }}</router-link></li>
          <li><router-link to="/south" class="block rounded-xl px-4 py-2 text-slate-200 transition hover:bg-slate-900/80">{{ $t('navbar.south') }}</router-link></li>
          <li><router-link to="/west" class="block rounded-xl px-4 py-2 text-slate-200 transition hover:bg-slate-900/80">{{ $t('navbar.west') }}</router-link></li>
          <li><router-link to="/east" class="block rounded-xl px-4 py-2 text-slate-200 transition hover:bg-slate-900/80">{{ $t('navbar.east') }}</router-link></li>
        </ul>
      </li>
      <li><router-link to="/contact" class="rounded-full border border-slate-200/20 px-4 py-2 text-slate-100 transition hover:bg-emerald-500/20 hover:text-white">{{ $t('navbar.contact') }}</router-link></li>

      <!-- Language Selector -->
      <li class="relative group">
        <button class="inline-flex items-center gap-1 rounded-full border border-emerald-300/50 px-3 py-2 text-slate-100 transition hover:bg-emerald-500/20">
          🌐 {{ locale.toUpperCase() }} <span>▾</span>
        </button>
        <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute right-0 mt-2 w-32 rounded-2xl bg-[#0F172A] p-2 shadow-2xl shadow-black/40 transition-all z-50">
          <li>
            <button
              @click="changeLanguage('en')"
              :class="['w-full text-left block rounded-xl px-4 py-2 text-slate-200', locale === 'en' ? 'bg-emerald-500/30' : 'hover:bg-slate-900/80']"
            >
              🇬🇧 English
            </button>
          </li>
          <li>
            <button
              @click="changeLanguage('fr')"
              :class="['w-full text-left block rounded-xl px-4 py-2 text-slate-200', locale === 'fr' ? 'bg-emerald-500/30' : 'hover:bg-slate-900/80']"
            >
              🇫🇷 Français
            </button>
          </li>
          <li>
            <button
              @click="changeLanguage('rw')"
              :class="['w-full text-left block rounded-xl px-4 py-2 text-slate-200', locale === 'rw' ? 'bg-emerald-500/30' : 'hover:bg-slate-900/80']"
            >
              🇷🇼 Kinyarwanda
            </button>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>