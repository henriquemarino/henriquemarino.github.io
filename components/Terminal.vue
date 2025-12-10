<template>
  <div class="terminal-linux max-w-3xl mx-auto mb-10">
    <div class="terminal-header">
      <div class="terminal-buttons">
        <div class="terminal-button close"></div>
        <div class="terminal-button minimize"></div>
        <div class="terminal-button maximize"></div>
      </div>
      <div class="terminal-title">henrique@portfolio:~</div>
    </div>

    <div class="terminal-body">
      <div class="terminal-line">
        <span class="terminal-prompt">henrique@portfolio:~$</span>
        <span class="terminal-command ml-2">whoami</span>
      </div>
      <div class="terminal-output">
        Henrique Marino - Software Engineer
      </div>

      <div class="terminal-line">
        <span class="terminal-prompt">henrique@portfolio:~$</span>
        <span class="terminal-command ml-2">skills --show</span>
      </div>
      <div class="terminal-output">
        Java, JavaScript/TypeScript, Go, SQL, NoSQL, Docker, AWS
      </div>

      <div class="terminal-line">
        <span class="terminal-prompt">henrique@portfolio:~$</span>
        <span class="terminal-command ml-2">contact --get</span>
      </div>
      <div class="terminal-output">
        henriquedotcpp@gmail.com | +55 (11) 91306-4646
      </div>

      <div class="terminal-line">
        <span class="terminal-prompt">henrique@portfolio:~$</span>
        <div class="typing-cursor ml-2" :style="{ opacity: cursorVisible ? 1 : 0 }"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cursorVisible = ref(true)

onMounted(() => {
  setInterval(() => {
    cursorVisible.value = !cursorVisible.value
  }, 500)
})
</script>