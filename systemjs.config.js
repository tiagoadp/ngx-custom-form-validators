System.config({
    transpiler: 'typescript',
    typescriptOptions: {
        emitDecoratorMetadata: true,
        experimentalDecorators: true
    },
    paths: {
        'npm:': 'node_modules/'
      },
    map: {
        // our app is within the app folder
        'app': 'app',
        // angular bundles
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        // other libraries
        'rxjs': 'npm:rxjs',
        'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api'
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