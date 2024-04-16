import {RiProfileLine} from 'react-icons/ri'
import {IoMdAnalytics} from 'react-icons/io'

export default {
  name: 'about',
  title: 'About',
  type: 'document',
  groups: [
    {
      name: 'page',
      title: 'Page',
      options: {
        collapsible: true,
        collapsed: false,
      },
      default: true,
      icon: RiProfileLine,
    },
    {
      name: 'seo',
      title: 'SEO',
      options: {
        collapsible: true,
        collapsed: false,
      },
      icon: IoMdAnalytics,
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'page',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'The slug for the page, it must be unique. Click on "Generate" to create a slug automatically based on the title.',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
      group: 'page',
    },
    {
      title: 'Main content',
      name: 'content',
      type: 'pageBuilder',
      group: 'page',
      description:
        'This is the main content of the page. It works as a flexible page builder, you can add block types like text, media, and galleries. using the "Add item" button.',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    },
  ],
}
