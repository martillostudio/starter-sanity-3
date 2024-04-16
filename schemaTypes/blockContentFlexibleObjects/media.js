export default {
  name: 'media',
  title: 'Media',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      description: 'Image to display or poster image if video',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
    },
    {
      name: 'isVideo',
      title: 'Add video?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'videoUrl',
      title: 'Video url',
      type: 'url',
      description:
        'Video url from cdn like Google Cloud Storage url or a Vimeo Pro direct file link',
      hidden: ({parent}) => {
        return !parent?.isVideo
      },
    },
  ],
  preview: {
    select: {
      imageUrl: 'image',
      caption: 'caption',
    },
    prepare(selection) {
      const {imageUrl, caption} = selection
      return {
        title: 'Media',
        media: imageUrl,
      }
    },
  },
}
