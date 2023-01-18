/** @type {import('@docusaurus/plugin-content-docs').ThemeConfig.navbar} */
const navbar = {
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
}

module.exports = navbar;