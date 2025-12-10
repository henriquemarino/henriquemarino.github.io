<template>
  <section id="sobre" class="bg-dark py-16 sm:py-24">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12 sm:mb-16">
          <h2 class="section-title text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {{ t('about.title') }}
          </h2>
        </div>

        <div class="flex flex-col md:flex-row gap-8 sm:gap-12 items-center md:items-start">
          <div class="md:w-1/2 flex justify-center">
            <div class="relative max-w-sm w-full">
              <div class="absolute -inset-3 sm:-inset-4 border-2 border-secondary border-opacity-30 rounded-lg"></div>
              <img
                src="../assets/img/profile-picture.jpeg"
                alt="Henrique Marino"
                class="rounded-xl relative z-10 w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>

          <div class="md:w-1/2">
            <h3 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              {{ t('about.greeting') }}
            </h3>
            <p class="text-text-light mb-4">
              {{ t('about.paragraph1') }}
            </p>
            <p class="text-text-light mb-4">
              {{ t('about.paragraph2') }}
            </p>

            <div class="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div class="flex items-center">
                <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-light flex items-center justify-center mr-3">
                  <i class="fas fa-award text-highlight text-sm sm:text-base"></i>
                </div>
                <div>
                  <p class="font-semibold text-sm sm:text-base">3+ Anos</p>
                  <p class="text-xs sm:text-sm text-text-light">
                    {{ t('about.experience') }}
                  </p>
                </div>
              </div>

              <div class="flex items-center">
                <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-light flex items-center justify-center mr-3">
                  <i class="fas fa-project-diagram text-highlight text-sm sm:text-base"></i>
                </div>
                <div>
                  <p class="font-semibold text-sm sm:text-base">30+ Projetos</p>
                  <p class="text-xs sm:text-sm text-text-light">
                    {{ t('about.completed') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useLanguage()
</script>