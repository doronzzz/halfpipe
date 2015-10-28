requirejs.config({
  wrap: true,
  insertRequire: ['my-app'],
  deps: ['my-app'],
  shim: {
  },
  paths: {
    'my-app': 'main',
    'jquery': '../../../../../bower_components/jquery/dist/jquery',
    'nestedMod':'nestedMods/nestedMod',
    'jquery-ujs': '../../../../../bower_components/jquery-ujs/src/rails'

  }
})
