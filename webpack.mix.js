const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js');
mix.sass('resources/sass/app.scss', 'public/css')
    .extract(['vue', 'vuex', 'axios', 'sweetalert2']);

mix.options({extractVueStyles: true});

mix.webpackConfig(webpack => {
    return {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                'sweetalert2$': 'sweetalert2/dist/sweetalert2.js',
            }
        }
    };
});

if (mix.inProduction()) {
    mix.version();
}
