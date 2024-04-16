# Llos Sanity Studio Starter

Welcome to LLOS& starter for Sanity Content Studio. Sanity is an **open source** modern headless CMS (Content Management System). Sanity uses **structured content** to endlessly re-use content across any channel and a composable approach to help businesses connect to any third-party technology, data source, and front end framework.

You can see our Studio working at **demo site** in the Llos' sanity.io account:
https://llos-starter.sanity.studio/

## Getting Started: the local studio

First, install [sanity CLI](https://www.sanity.io/docs/cli) for managing, developing, debugging, and deploying Sanity Studio.

Then, install the necessary dependencies:

```sh-session
$ sanity install
```

Create a sanity.io project and generate `.env` file with mandatory vars SANITY_STUDIO_PROJECT_ID and SANITY_STUDIO_DATASET using:

```sh-session
$ sanity init --env .env
```

Create `.env.local` from `.env.local.example` and upadte vars to match your project

Finally, start the development server (localhost:3333):

```sh-session
$ sanity dev
```

## Manage and deploy: the Sanity.io studio

The content of the project is **always synced between localhost and sanity.io**.

To sync the code, you can upload code changes to sanity.io project anytime you need with:

```sh-session
$ sanity deploy
```

You can quickly open sanity.io project desk from terminal by using sanity manage command:

```sh-session
$ sanity manage
```

## Sanity CLI export/import

Export a full data backup:

```sh-session
$ sanity dataset export
```

Import/replace a full data backup:

```sh-session
$ sanity dataset import
```

## Plugins we are using in the studio:

- `@sanity/vision`: adds a groq query playground for debugging purposes.

- `sanity-plugin-media`: adds visual media library to allow to manage media from management UI.

- `@sanity/orderable-document-list`: allows us to add custom ordering to documents.

- `@sanity/dashboard`: creates a dashboard area where you can add widgets as Netlify deploy.

- `sanity-plugin-dashboard-widget-netlify`: adds the netlify deploy widget to the dashboard area.

## Other resources

If you like you can now explore the following resources:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [How to extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)
