import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

// icons: https://react-icons.github.io/react-icons/search/

import {RxAvatar} from 'react-icons/rx'
import {IoDocumentsOutline} from 'react-icons/io5'
import {TagsIcon} from '@sanity/icons'
import {GrNavigate} from 'react-icons/gr'
import {CiGrid42} from 'react-icons/ci'
import {BsMailbox} from 'react-icons/bs'

import {GoHome} from 'react-icons/go'
import {GoFileDirectory} from 'react-icons/go'

import {GoGear} from 'react-icons/go'

export const structure = (S, context) =>
  S.list()
    .title('Content')
    .items([
      S.divider(),
      S.listItem()
        .title('Home')
        .id('homepage')
        .icon(GoHome)
        .child(S.document().schemaType('homepage').documentId('homepage')),
      S.listItem()
        .title('Work')
        .id('projectsArchive')
        .icon(CiGrid42)
        .child(S.document().schemaType('projectsArchive').documentId('projectsArchive')),
      S.listItem()
        .title('About')
        .id('about')
        .icon(RxAvatar)
        .child(S.document().schemaType('about').documentId('about')),
      S.listItem()
        .title('Contact')
        .id('contact')
        .icon(BsMailbox)
        .child(S.document().schemaType('contact').documentId('contact')),
      S.listItem().title(`Other Pages`).child(S.documentTypeList('page')).icon(IoDocumentsOutline),
      S.divider(),
      orderableDocumentListDeskItem({
        type: 'project',
        title: 'Projects',
        createIntent: true,
        S,
        context,
        icon: GoFileDirectory,
      }),
      orderableDocumentListDeskItem({
        type: 'category',
        title: 'Categories',
        createIntent: true,
        S,
        context,
        icon: TagsIcon,
      }),
      S.divider(),
      S.listItem().title('Nav menus').child(S.documentTypeList('navigation')).icon(GrNavigate),
      S.divider(),
      S.listItem()
        .title('Site Settings')
        .id('siteConfig')
        .icon(GoGear)
        .child(S.document().schemaType('siteConfig').documentId('siteConfig')),
      S.divider(),
    ])
