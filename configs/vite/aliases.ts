import path from 'path';

import type { AliasOptions } from 'vite';

export const viteAliases: AliasOptions = [
    {
        find: '@global',
        replacement: path.resolve(__dirname, '../../src/global'),
    },
    {
        find: '@components',
        replacement: path.resolve(__dirname, '../../src/components'),
    },
    {
        find: '@helpers',
        replacement: path.resolve(__dirname, '../../src/helpers'),
    },
    {
        find: '@hooks',
        replacement: path.resolve(__dirname, '../../src/hooks'),
    },
    {
        find: '@modules',
        replacement: path.resolve(__dirname, '../../src/modules'),
    },
    {
        find: '@pages',
        replacement: path.resolve(__dirname, '../../src/pages'),
    },
    {
        find: '@store',
        replacement: path.resolve(__dirname, '../../src/store'),
    },
    {
        find: '@assets',
        replacement: path.resolve(__dirname, '../../src/assets'),
    },
    { find: '@', replacement: path.resolve(__dirname, '../../src') },
];
