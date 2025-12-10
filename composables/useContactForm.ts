export interface ContactFormData {
  name: string
  email: string
  message: string
}

export const useContactForm = () => {
  const formData = reactive<ContactFormData>({
    name: '',
    email: '',
    message: ''
  })

  const isSubmitting = ref(false)

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor, preencha todos os campos.')
      return
    }

    isSubmitting.value = true

    try {
      console.log('Form data:', formData)

      await new Promise(resolve => setTimeout(resolve, 1000))

      alert('Mensagem enviada com sucesso! Entrarei em contato em breve.')

      formData.name = ''
      formData.email = ''
      formData.message = ''
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error)
      alert('Erro ao enviar mensagem. Tente novamente.')
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    formData,
    isSubmitting,
    handleSubmit
  }
}