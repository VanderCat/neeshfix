import copy from 'rollup-plugin-copy'
import scss from 'rollup-plugin-scss'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import json from '@rollup/plugin-json';

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/js/main.js',
        format: 'iife',
        //sourcemap: 'inline',
    },
    plugins: [
        copy({
            targets: [
                {
                    src: 'public/*',
                    dest: 'dist'
                },
                {
                    src: 'node_modules/material-design-icons-iconfont/dist/*',
                    dest: 'dist/css'
                }
                ,
                {
                    src: 'node_modules/@fontsource/roboto/files/*',
                    dest: 'dist/css/files'
                }
            ]
        }),
        scss({
            output: "dist/css/main.css",
            //sourceMap: true,
            //sourceMapEmbed: true,
            include: ["./src/scss/*.scss"],
            includePaths: [
                require("path").join(__dirname, '../../node_modules/'),
                'node_modules/'
              ]
        }),
        nodePolyfills(),
        commonjs(),
        json(),
        nodeResolve(),
    ]
  };