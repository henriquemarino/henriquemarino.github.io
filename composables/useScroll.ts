export const useScroll = () => {
  const scrollY = useState<number>('scrollY', () => 0)
  const showBackToTop = computed(() => scrollY.value > 500)
  const isScrolled = computed(() => scrollY.value > 100)

  const handleScroll = () => {
    if (process.client) {
      scrollY.value = window.scrollY
    }
  }

  const scrollToTop = () => {
    if (process.client) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  const scrollToSection = (sectionId: string) => {
    if (process.client) {
      const element = document.querySelector(sectionId)
      if (element) {
        const offsetTop = (element as HTMLElement).offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    }
  }

  // Adicionar listener de scroll
  onMounted(() => {
    if (process.client) {
      window.addEventListener('scroll', handleScroll)
      handleScroll() // Inicializar valor
    }
  })

  onUnmounted(() => {
    if (process.client) {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return {
    scrollY,
    showBackToTop,
    isScrolled,
    scrollToTop,
    scrollToSection
  }
}