import {IoShareSocialOutline} from 'react-icons/io5'
import {CiGlobe} from 'react-icons/ci'
import {CiShare2} from 'react-icons/ci'
import {MdOutlineEmail} from 'react-icons/md'
// import {MdOutlinePrivacyTip} from 'react-icons/md'
import {GrNavigate} from 'react-icons/gr'
import {FaCreativeCommons} from 'react-icons/fa'
import {IoMdAnalytics} from 'react-icons/io'

export default {
  name: 'siteConfig',
  title: 'Site Global',
  type: 'document',
  groups: [
    {
      name: 'site',
      title: 'Site',
      default: true,
      icon: CiGlobe,
    },
    {
      name: 'social',
      title: 'Social',
      icon: CiShare2,
    },
    {
      name: 'contact',
      title: 'Contact',
      icon: MdOutlineEmail,
    },
    {
      name: 'navigation',
      title: 'Navigation',
      icon: GrNavigate,
    },
    {
      name: 'credits',
      title: 'Credits',
      icon: FaCreativeCommons,
    },
    {
      name: 'seo',
      title: 'SEO',
      icon: IoMdAnalytics,
    },
  ],
  fieldsets: [
    {
      name: 'brand',
      title: 'Branding',
      options: {columns: 2},
    },
  ],
  fields: [
    {
      title: 'Site Title',
      name: 'siteTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'site',
    },
    {
      title: 'Site URL',
      name: 'siteUrl',
      type: 'url',
      validation: (Rule) => Rule.required(),
      group: 'site',
    },
    {
      name: 'siteLanguage',
      title: 'Site Language Code (ISO 639-1)',
      type: 'string',
      initialValue: 'en',
      group: 'site',
    },
    {
      title: 'Site Logo',
      name: 'siteLogo',
      type: 'image',
      validation: (Rule) => Rule.required(),
      group: 'site',
      fieldset: 'brand',
    },
    {
      title: 'Site Favicon',
      name: 'siteFavicon',
      type: 'image',
      validation: (Rule) => Rule.required(),
      group: 'site',
      fieldset: 'brand',
    },

    {
      title: 'Social links',
      name: 'socialLinks',
      type: 'array',
      description: 'Add links to your social profiles (instagram, linkedin, twitter, etc.)',
      group: 'social',
      of: [
        {
          name: 'socialLink',
          title: 'Link',
          type: 'object',
          icon: IoShareSocialOutline,
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },

    {
      title: 'Main navigation',
      name: 'mainNav',
      description: 'Select menu for main navigation',
      type: 'reference',
      to: {type: 'navigation'},
      group: 'navigation',
    },
    {
      title: 'Footer navigation',
      name: 'footerNav',
      description: 'Select menu for footer navigation',
      type: 'reference',
      to: {type: 'navigation'},
      group: 'navigation',
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'object',
      group: 'contact',
      fields: [
        {
          name: 'email',
          title: 'EMAIL',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        // {
        //   name: 'phone',
        //   title: 'PHONE',
        //   type: 'phone',
        // },
        {
          name: 'address',
          title: 'ADDRESS',
          type: 'text',
          rows: 3,
        },
      ],
    },
    {
      name: 'credits',
      title: 'Credits',
      type: 'textContent',
      group: 'credits',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    },
  ],
}
