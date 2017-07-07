/* eslint-env node */
module.exports = {
  description: '',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function() {
    let blueprint = this;

    return blueprint.addAddonsToProject({
      packages: [
        { name: 'ember-cli-inline-content', target: '^0.4.1' }
      ],
      blueprintOptions: {
        saveDev: true
      }
    }).then(function() {
      return blueprint.addAddonsToProject({
        packages: [
          { name: 'ember-cli-babel', target: '^6.6.0' }
        ],
        blueprintOptions: {
          save: true
        }
      })
    }).then(function() {
      return blueprint.addBowerPackagesToProject([
        { name: 'ua-parser-js', target: '^0.7.13' }
      ])
    })
  }
};
