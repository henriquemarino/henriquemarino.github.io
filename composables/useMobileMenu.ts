export const useMobileMenu = () => {
  const isOpen = useState<boolean>('mobileMenuOpen', () => false)

  const openMenu = () => {
    isOpen.value = true
    if (process.client) {
      document.body.style.overflow = 'hidden'
    }
  }

  const closeMenu = () => {
    isOpen.value = false
    if (process.client) {
      document.body.style.overflow = 'auto'
    }
  }

  const toggleMenu = () => {
    if (isOpen.value) {
      closeMenu()
    } else {
      openMenu()
    }
  }

  return {
    isOpen,
    openMenu,
    closeMenu,
    toggleMenu
  }
}