Package.describe({
  name: 'praxie:froala-no-conflict',
  version: '1.0.0',
  summary: 'Creates an alias for $.fn.editable - $.fn.froalaEditor. Uses official froala:editor package',
  git: 'https://github.com/Praxie/meteor-froala-no-conflict.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['froala:editor', 'jquery'], 'client');
  api.addFiles('froala-no-conflict.js', 'client');
});