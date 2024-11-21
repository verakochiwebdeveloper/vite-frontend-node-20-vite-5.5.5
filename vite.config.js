import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import sassGlobImports from 'vite-plugin-sass-glob-import';
import { imageminPlugin } from 'vite-plugin-imagemin';

export default defineConfig({
    plugins: [
        injectHTML({
            tagName: 'include',
        }),
        imageminPlugin({
            verbose: true,
            input: 'src/assets/img/**/*', // Указываем путь к изображениям
            output: 'src/img', // Указываем выходную директорию для конвертированных изображений
            plugins: [
                {
                    name: 'imagemin-mozjpeg',
                    options: {
                        quality: 75,
                    },
                },
                {
                    name: 'imagemin-pngquant',
                    options: {
                        quality: [0.6, 0.8],
                    },
                },
                {
                    name: 'imagemin-webp',
                    options: {
                        quality: 75, // Уровень качества для webp
                    },
                },
                'imagemin-svgo', // Для оптимизации SVG
            ],
        }),
        sassGlobImports(),
    ],
    css: {
        preprocessorOptions: {
            scss: {},
        },
    },
});
