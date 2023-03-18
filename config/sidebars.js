/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docs: [
        {
            type: 'doc',
            label: 'Scouting FAQ',
            id: 'index',
        },
        {
            type: 'category',
            label: 'Drivetrain',
            items: [
                {
                    type: 'doc',
                    id: 'Drivetrain/Swerve',
                    label: 'Swerve',
                },
                {
                    type: 'doc',
                    id: 'Drivetrain/Field-Strategy',
                    label: 'Field Strategy',
                },
            ],
        },
        {
            type: 'category',
            label: 'Autonomous',
            items: [
                {
                    type: 'doc',
                    id: 'Autonomous/Strategy',
                    label: 'Strategies',
                },
                {
                    type: 'doc',
                    id: 'Autonomous/Goals',
                    label: 'Goals',
                },
            ],
        },
        {
            type: 'doc',
            id: 'vision',
            label: 'Vision',
        },
    ]
};

module.exports = sidebars;
