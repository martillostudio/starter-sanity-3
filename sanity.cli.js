import {defineCliConfig} from 'sanity/cli'
export const projectId = process.env.SANITY_STUDIO_PROJECT_ID

export default defineCliConfig({
  api: {
    projectId: projectId,
    dataset: 'production',
  },
})
