export default {
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    {
      title: 'Is internal link?',
      name: 'isInternalLink',
      type: 'boolean',
      description: 'Select if the link is internal (another cms document) or external',
      initialValue: false,
    },
    {
      title: 'Internal Link',
      name: 'internalLink',
      description: 'Select pages for navigation',
      type: 'reference',
      to: [
        {type: 'homepage'},
        {type: 'about'},
        {type: 'contact'},
        {type: 'projectsArchive'},
        {type: 'page'},
        {type: 'project'},
        {type: 'category'},
      ],
      hidden: ({parent}) => {
        return !parent?.isInternalLink
      },
    },
    {
      name: 'externalUrl',
      title: 'External URL',
      description: 'Use fully qualified URLS for external link',
      type: 'url',
      hidden: ({parent}) => {
        return parent?.isInternalLink
      },
    },
  ],
}
