<template>
  <div class="file-explorer max-w-4xl mx-auto">
    <!-- Explorer Header -->
    <div class="explorer-header">
      <div class="window-title">{{ t('skills.explorerTitle') }}</div>
      <div class="explorer-path">
        <i class="fas fa-folder"></i>
        <span>/habilidades-tecnicas</span>
      </div>
    </div>

    <div class="explorer-body">
      <div class="sidebar">
        <div
          v-for="folder in folders"
          :key="folder.id"
          class="folder"
          :class="{ active: activeFolder === folder.id }"
          @click="setActiveFolder(folder.id)"
        >
          <i class="fas fa-folder folder-icon"></i>
          <span>{{ t(folder.translationKey) }}</span>
        </div>
      </div>

      <div class="content-area">
        <div class="current-directory">
          /habilidades-tecnicas/{{ currentFolder.id }}
        </div>

        <div class="file-grid">
          <div
            v-for="(file, index) in currentFolder.files"
            :key="index"
            class="file-item"
          >
            <i :class="file.icon + ' file-icon'"></i>
            <span class="file-name">{{ file.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useLanguage()
const { activeFolder, folders, currentFolder, setActiveFolder } = useFileExplorer()
</script>