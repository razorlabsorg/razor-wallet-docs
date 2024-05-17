import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Razor Wallet Docs',
  tagline: 'Doumentation are Guides',
  favicon: 'img/favicon.ico',
  url: 'https://docs.razorwallet.xyz',
  baseUrl: '/',

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
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/razorlabsorg/razor-wallet-docs',
          includeCurrentVersion: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    /*algolia: {
      apiKey: '0d691d74af037160c6de552d359b4207',
      indexName: 'razor-wallet',
      appId: 'EM3DRHBXJE'
    },*/
    navbar: {
      title: 'Razor Wallet Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://github.com/razorlabsorg/razor-wallet-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Products',
          items: [
            {
              label: 'Chrome Extension',
              href: 'https://chromewebstore.google.com/detail/razor-wallet/fdcnegogpncmfejlfnffnofpngdiejii',
            },
          ],
        },
        {
          title: 'Developers',
          items: [
            {
              label: 'Wallet Kit',
              href: 'https://kit.razorwallet.xyz',
            },
            {
              label: 'M1 Wallet SDK',
              href: 'https://github.com/razorlabsorg/m1-wallet-sdk',
            },
            {
              label: 'M2 Wallet SDK',
              href: 'https://github.com/razorlabsorg/m2-wallet-sdk',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/razordao',
            },
            {
              label: 'Twitter (X)',
              href: 'https://twitter.com/RazorDAO',
            },
            {
              label: 'Blog',
              href: 'https://razorwallet.xyz/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Razor Labs. Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
