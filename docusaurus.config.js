// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Team Linebreak',
    tagline: 'Building robots since 2020',
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
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Team Linebreak',
                logo: {
                    alt: 'Team Linebreak logo',
                    src: 'img/logoDark.png',
                    srcDark: 'img/logo.png',
                },
                items: [
                    {
                        to: '/hello-world',
                        label: 'About',
                        position: 'left'
                    },
                    {
                        to: '/docs/',
                        label: 'Info for Scouts',
                        position: 'left'
                    },
                    {
                        href: 'https://github.com/FIRSTTeamLinebreak',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Contact Us',
                        items: [
                            {
                                label: 'info@teamlinebreak.com',
                                href: 'mailto:info@teamlinebreak.com'
                            },
                            {
                                label: 'captain@teamlinebreak.com',
                                href: 'mailto:captain@teamlinebreak.com'
                            },
                        ],
                    },
                    {
                        title: 'Socials',
                        items: [
                            {
                                label: 'Instagram',
                                href: 'https://instagram.com/firstteam8546?igshid=YmMyMTA2M2Y=',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/FIRSTTeamLinebreak',
                            },
                        ]
                    }
                ],
                copyright: `This site is licensed under the MIT license. Made by team 8546 with vsCode and Docusaurus`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
