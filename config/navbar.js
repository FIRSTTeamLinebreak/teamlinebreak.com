// @ts-check
/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
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
            to: '/scouting/',
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