<script setup>
import { ref } from 'vue'

const installCommands = [
  {
    label: 'go install',
    command: 'go install github.com/envm-org/envm@latest',
  },
  { label: 'curl', command: 'curl -fsSL https://envm.dev/install.sh | sh' },
  { label: 'docker', command: 'docker pull ghcr.io/envm-org/envm:latest' },
]

const activeCommand = ref(0)
const copied = ref(false)

function copyCommand() {
  navigator.clipboard.writeText(installCommands[activeCommand.value].command)
  copied.value = true
  setTimeout(() => copied.value = false, 2000)
}
</script>

<template>
  <header class="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 dark:bg-[#1b1b1f]">
    <!-- Subtle gradient glow -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

    <div class="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-12 relative z-10">
      <!-- Left: text content -->
      <div class="flex-1 text-left max-w-2xl">
        <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          ENVM
        </h1>
        <p class="mt-4 text-xl md:text-2xl text-white/60 font-medium leading-relaxed">
          Secure Environment Variable Management & Sync Tool
        </p>
        <p class="mt-4 text-base md:text-lg text-white/40 leading-relaxed max-w-lg">
          Manage, encrypt, and sync environment variables across your team.
          Stop sharing secrets in Slack and start using ENVM.
        </p>

        <div class="flex items-center gap-4 mt-8 flex-wrap">
          <a
            class="inline-flex items-center px-6 py-3 rounded-full bg-purple-600 text-white font-semibold text-sm hover:bg-purple-500 transition-all hover:shadow-lg hover:shadow-purple-600/25 hover:no-underline hover:text-white"
            href="/docs/intro"
          >
            Get Started
          </a>
          <a
            class="inline-flex items-center px-6 py-3 rounded-full border border-white/20 text-white/80 font-semibold text-sm hover:border-white/40 hover:bg-white/5 transition-all hover:no-underline hover:text-white"
            href="https://github.com/envm-org/envm"
          >
            View on GitHub
          </a>
        </div>

        <div class="mt-10 max-w-xl">
          <div class="flex gap-0 border-b border-white/10">
            <button
              v-for="(cmd, i) in installCommands"
              :key="cmd.label"
              type="button"
              @click="activeCommand = i"
              :class="[
                'px-4 py-2 text-sm font-medium transition-colors cursor-pointer border-0 bg-transparent',
                i === activeCommand
                  ? 'text-purple-400 border-b-2 border-purple-400'
                  : 'text-white/50 hover:text-white/80'
              ]"
            >
              {{ cmd.label }}
            </button>
          </div>
          <div class="mt-0 rounded-b-lg bg-white/[0.03] border border-t-0 border-white/10 px-5 py-3 font-mono text-sm text-white/90 flex items-center justify-between">
            <span>
              <span class="text-purple-400 mr-2">$</span>
              {{ installCommands[activeCommand].command }}
            </span>
            <button
              type="button"
              @click="copyCommand"
              class="ml-4 text-white/30 hover:text-white/70 transition-colors cursor-pointer bg-transparent border-0 text-sm"
              title="Copy"
            >
              {{ copied ? '✅' : '📋' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Right: decorative graphic -->
      <div class="hidden lg:flex flex-1 items-center justify-center">
        <div class="relative w-72 h-72">
          <!-- Stacked cards like Vite's graphic -->
          <div class="absolute inset-8 rounded-2xl bg-purple-600/10 border border-purple-500/20 transform rotate-6" />
          <div class="absolute inset-4 rounded-2xl bg-purple-600/15 border border-purple-500/25 transform rotate-3" />
          <div class="absolute inset-0 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
            <div class="text-center">
              <div class="text-5xl mb-3">🔐</div>
              <span class="text-white/40 text-sm font-mono tracking-wider">
                ENVM
              </span>
            </div>
          </div>
          <!-- Floating dots -->
          <div class="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-purple-500/30 border border-purple-500/40" />
          <div class="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-violet-500/30 border border-violet-500/40" />
          <div class="absolute top-1/2 -right-6 w-3 h-3 rounded-full bg-indigo-500/30 border border-indigo-500/40" />
        </div>
      </div>
    </div>
  </header>
</template>
