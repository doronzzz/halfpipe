'use strict';

define('my-app',
  [
    // Add your dependencies here
    'jquery',
    'jquery-ujs',
    'myNewMod',
    'nestedMod'
  ],

  function($,ui,myNewMod,nested){
    alert(nested);
      // Add your initialization code here

  }
);
