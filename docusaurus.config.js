// @ts-check
const prismThemes = require('prism-react-renderer').themes;
const packageJson = require('./package.json');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI contextFlow',
  tagline: 'Context-First AI Engineering',
  favicon: 'img/logo.png',

  // Setze hier deine Produktions-URL ein
  url: 'https://ai-contextFlow.com',
  baseUrl: '/',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
        language: ["en"],
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: "/",
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Serve the docs at the site's root
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'description', content: 'A context-first system that keeps architecture, intent, and product decisions aligned across sessions.'},
        {name: 'keywords', content: 'AI contextFlow, context-first, ai engineering, software architecture, llm governance, ai framework'},
        {name: 'og:title', content: 'AI contextFlow | Context-First AI Engineering'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'og:image', content: 'https://ai-contextFlow.com/img/preview-img.jpg'},
        {name: 'twitter:image', content: 'https://ai-contextFlow.com/img/preview-img.jpg'},
      ],
      image: 'img/preview-img.jpg', // Default Social Card
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'AI contextFlow',
        logo: {
          alt: 'AI contextFlow Repo',
          src: 'img/logo.png', // Switched to PNG
        },
        items: [
          {
            href: 'https://github.com/gbm-labs/ai-contextflow',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://github.com/gbm-labs/ai-contextflow/archive/refs/heads/main.zip',
            label: 'Download Kit',
            position: 'right',
            className: 'button button--primary navbar-cta-button',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `
          <div class="footer-content">
            <div class="footer-line">
              <span class="footer-version">AI contextFlow v${packageJson.version}</span>
              <span class="footer-sep">·</span>
              <a href="https://tally.so/r/pboXNy" target="_blank" rel="noopener noreferrer" class="footer-link-updates">
                ✨ Get Updates & Insiders
              </a>
              <span class="footer-sep">·</span>
              <a href="https://github.com/gbm-labs/ai-contextflow" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">GitHub</a>
              <span class="footer-sep">·</span>
              <span class="footer-license">MIT License</span>
              <span class="footer-sep">·</span>
              <a href="/imprint" class="footer-link-imprint" style="color: inherit; text-decoration: none;">Imprint</a>
            </div>
            <div class="footer-line-secondary">
              Copyright © ${new Date().getFullYear()} Joscha Griesbaum. Built with Docusaurus.
            </div>
          </div>
        `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
