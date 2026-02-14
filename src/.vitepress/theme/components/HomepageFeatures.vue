<script setup>
const features = [
  {
    title: 'Secure by Default',
    icon: '🔐',
    description: 'End-to-end AES-256 encryption for all your secrets. Role-based access control, comprehensive audit logging, and secure key management keep your sensitive data protected.'
  },
  {
    title: 'Team Collaboration',
    icon: '👥',
    description: 'Share environment variables with your team without exposing sensitive values. Admins can grant access to secrets that team members can use but never see in plain text.'
  },
  {
    title: 'CLI & Web GUI',
    icon: '⌨️',
    description: 'Powerful command-line interface built with Go for maximum performance, plus an intuitive web dashboard for managing variables visually.'
  },
  {
    title: 'Multi-Environment',
    icon: '🌍',
    description: 'Seamlessly manage dev, staging, and production environments. Support for environment inheritance and variable overrides makes configuration a breeze.'
  },
  {
    title: 'Version Control',
    icon: '📜',
    description: 'Track every change to your environment variables with full history. Rollback to any previous version instantly when things go wrong.'
  },
  {
    title: 'Import & Export',
    icon: '🔄',
    description: 'Compatible with existing tools. Import from .env, JSON, or YAML files. Export to any format for maximum flexibility and easy migration.'
  }
]
</script>

<template>
  <section class="py-20 border-t border-white/[0.06] dark:bg-[#1b1b1f]">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col items-center justify-center text-center mb-16">
        <h2 class="flex flex-row items-center justify-center text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
          Everything You Need
        </h2>
        <p class="flex flex-row items-center justify-center text-base md:text-lg text-white/40 max-w-lg mx-auto leading-relaxed">
          ENVM provides a complete solution for managing environment variables
          across your entire development lifecycle.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div 
          v-for="(feature, idx) in features" 
          :key="idx"
          class="group rounded-xl bg-white/[0.02] border border-white/[0.06] p-6 transition-all duration-300 hover:bg-white/[0.04] hover:border-purple-500/20 hover:shadow-lg hover:shadow-purple-900/10"
        >
          <div class="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-lg mb-4">
            {{ feature.icon }}
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">
            {{ feature.title }}
          </h3>
          <p class="text-sm text-white/50 leading-relaxed m-0">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
