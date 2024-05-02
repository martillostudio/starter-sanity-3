import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

// Branding customizations
import BrandLogo from './src/components/BrandLogo'

// plugins
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import {dashboardTool} from '@sanity/dashboard'
import {netlifyWidget} from 'sanity-plugin-dashboard-widget-netlify'
import {structure} from './src/structure'

// env variables from .env file
export const projectId = process.env.SANITY_STUDIO_PROJECT_ID
export const dataset = process.env.SANITY_STUDIO_DATASET
export const productionUrl = process.env.SANITY_STUDIO_PRODUCTION_URL
export const previewUrl = process.env.SANITY_STUDIO_PREVIEW_URLstruc
export const netlifySiteId = process.env.SANITY_STUDIO_NETLIFY_SITE_ID
export const netlifyBuildHookId = process.env.SANITY_STUDIO_NETLIFY_API_BUILD_HOOK_ID

export default defineConfig({
  name: 'martillo-starter',
  title: 'Martillo Starter',
  projectId: projectId,
  dataset: dataset,
  icon: BrandLogo,
  document: {
    // prev is the result from previous plugins and thus can be composed
    productionUrl: async (prev, context) => {
      // context includes the client and other details
      if (context?.document?._id === 'homepage' || context?.document?._id === 'drafts.homepage') {
        return `${previewUrl}`
      }

      if (context?.document?._id === 'about' || context?.document?._id === 'drafts.about') {
        return `${previewUrl}/about/`
      }

      if (
        context?.document?._id === 'projectsArchive' ||
        context?.document?._id === 'drafts.projectsArchive'
      ) {
        return `${previewUrl}/work/`
      }

      if (context?.document?._type === 'project') {
        return `${previewUrl}/work/${context?.document?.slug?.current}/`
      }

      if (context?.document?._id === 'contact' || context?.document?._id === 'drafts.contact') {
        return `${previewUrl}/contact/`
      }

      if (context?.document?._type === 'page') {
        return `${previewUrl}/${context?.document?.slug?.current}/`
      }

      return prev
    },
  },
  // remove the tab for all filelds when using tabs to organize fields
  form: {
    components: {
      input: (props) => {
        if (Array.isArray(props.groups) && props.groups.length > 0) {
          if (props.groups[0].name === 'all-fields') {
            props.groups.shift()
          }
        }

        return props.renderDefault(props)
      },
    },
  },
  // plugins configuration
  plugins: [
    // structure tool controls the elements and order of the sidebar and the top bar of the studio UI
    structureTool({
      structure,
    }),
    // vision tool is a plugin that allows you to add groq queries playground to the studio
    visionTool(),
    // media plugin is a plugin that allows you to add media to the studio
    media(),
    // dashboard tool is a plugin that allows you to add a dashboard area for widgets to the top bar of studio
    dashboardTool({
      title: 'Dashboard (deploy site) ',
      widgets: [
        // add the widget for netlify deploys in the dashboard
        netlifyWidget({
          title: 'My Netlify deploys',
          sites: [
            {
              title: 'Website build ',
              // in netlify site configuration -> general -> site details -> Site ID. Please update the .env file variable SANITY_STUDIO_PROJECT_ID with this value.
              apiId: netlifySiteId,
              // in netlify site configuration -> general -> build & deploy -> build hooks (only the numbers in the last part of the hook url). Please update the .env file variable SANITY_STUDIO_NETLIFY_BUILD_HOOK_ID with this value.
              buildHookId: netlifyBuildHookId,
              // your production site url. Please update the .env file variable SANITY_STUDIO_PRODUCTION_URL with the url.
              url: productionUrl,
            },
          ],
        }),
      ],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
