// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Team Linebreak',
    url: 'https://teamlinebreak.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
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
                    id: 'scouting',
                    path: 'scouting',
                    routeBasePath: 'scouting',
                    sidebarPath: require.resolve('./config/sidebars.js'),
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'secrets',
                path: 'secrets',
                routeBasePath: 'secrets',
                sidebarPath: require.resolve('./config/sidebarHidden.js'),
                // ... other options
            },
        ],
        [
            '@docusaurus/plugin-client-redirects',
            {
                redirects: [
                    {
                        to: '/scouting',
                        from: '/qr-redirect-1',
                    },
                    {
                        to: '/',
                        from: '/qr-redirect-2',
                    },
                ],
            },
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: require('./config/navbar.js'),
            footer: require('./config/footer.js'),
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
