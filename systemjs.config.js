System.config({
    transpiler: 'typescript',
    typescriptOptions: {
        emitDecoratorMetadata: true,
        experimentalDecorators: true
    },
    map: {
        // our app is within the app folder
        'app': 'app',
        // angular bundles
        '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
        '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
        '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
        '@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
        // other libraries
        'rxjs': 'node_modules/rxjs',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
        app: {
            defaultExtension: 'ts'
        },
        demo: {
            main: './main.ts',
            defaultExtension: 'ts'
        },
        rxjs: {
            defaultExtension: 'js'
        },
        'angular2-in-memory-web-api': {
            main: './index.js',
            defaultExtension: 'js'
        }
    }
});