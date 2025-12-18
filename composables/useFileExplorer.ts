export type FolderType = 'linguagens' | 'banco-dados' | 'frameworks' | 'cloud-devops' | 'ferramentas'

export interface FileItem {
  icon: string
  name: string
}

export interface FolderData {
  id: FolderType
  translationKey: string
  files: FileItem[]
}

export const useFileExplorer = () => {
  const activeFolder = useState<FolderType>('activeFolder', () => 'linguagens')

  const folders: FolderData[] = [
    {
      id: 'linguagens',
      translationKey: 'skills.categories.languages',
      files: [
        { icon: 'fab fa-java', name: 'Java' },
        { icon: 'fab fa-js-square', name: 'JavaScript' },
        //{ icon: 'fab fa-golang', name: 'Go' },
        { icon: 'fab fa-brands fa-node', name: 'TypeScript' }
      ]
    },
    {
      id: 'banco-dados',
      translationKey: 'skills.categories.database',
      files: [
        { icon: 'fas fa-database', name: 'MySQL' },
        { icon: 'fas fa-database', name: 'PostgreSQL' },
        { icon: 'fas fa-database', name: 'DynamoDB' },
        { icon: 'fas fa-database', name: 'MongoDB' },
        { icon: 'fas fa-database', name: 'Redis' },
        { icon: 'fas fa-database', name: 'Valkey' },
        { icon: 'fas fa-database', name: 'Elasticsearch' }
      ]
    },
    {
      id: 'frameworks',
      translationKey: 'skills.categories.frameworks',
      files: [
        { icon: 'fas fa-leaf', name: 'Spring Boot' },
        { icon: 'fab fa-node-js', name: 'NestJS' },
        { icon: 'fas fa-cube', name: 'Hibernate' }
      ]
    },
    {
      id: 'cloud-devops',
      translationKey: 'skills.categories.cloud',
      files: [
        { icon: 'fab fa-aws', name: 'AWS' },
        { icon: 'fab fa-docker', name: 'Docker' },
        { icon: 'fas fa-code-branch', name: 'CI/CD' },
        { icon: 'fas fa-server', name: 'Terraform' },
        { icon: 'fab fa-linux', name: 'Linux' }
      ]
    },
    {
      id: 'ferramentas',
      translationKey: 'skills.categories.tools',
      files: [
        { icon: 'fab fa-git-alt', name: 'Git' },
        { icon: 'fas fa-terminal', name: 'CLI' },
        { icon: 'fas fa-bug', name: 'Debugging' },
        { icon: 'fas fa-network-wired', name: 'Postman' }
      ]
    }
  ]

  const currentFolder = computed(() => {
    return folders.find(f => f.id === activeFolder.value) || folders[0]
  })

  const setActiveFolder = (folderId: FolderType) => {
    activeFolder.value = folderId
  }

  return {
    activeFolder,
    folders,
    currentFolder,
    setActiveFolder
  }
}