// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GiltEdged Studio',
  tagline: 'An agent-based model development and study of household asset portfolio strategies within a government money system. Context: United Kingdom of Great Britain and Northern Ireland (UK).',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://gilt-edged-studio.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'danodriscoll', // Usually your GitHub org/user name.
  projectName: 'danodriscoll', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-QJPXVD4XSV',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },      
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'GiltEdged',
        logo: {
          alt: 'GiltEdged Logo',
          src: 'img/development_icon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'modelSidebar',
            position: 'left',
            label: 'Model',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          // {to: '/data-apps', label: 'Data Apps', position: 'right'},
          {
            href: 'https://www.danielodriscoll.me.uk/',
            label: 'Personal Site',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },      
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} GiltEdged Studio.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
