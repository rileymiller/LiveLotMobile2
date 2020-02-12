module.exports = function (plop) {
  // plop generator code
  plop.setGenerator('screen', {
    description: 'Application Screen',
    prompts: [
      {
        type: 'input',
        name: 'screen_name',
        message: 'Please enter a screen name 📱 (just the screen name, \"Screen\" will be automatically appended):'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/screens/{{ pascalCase screen_name }}Screen/{{ pascalCase screen_name }}Screen.tsx',
        templateFile: 'plop-templates/screen.hbs',
        skipIfExists: false,
        force: false,
        data: {},
        abortOnFail: true
      },
      {
        type: 'add',
        path: 'src/screens/{{ pascalCase screen_name }}Screen/{{ pascalCase screen_name }}Screen.test.tsx',
        templateFile: 'plop-templates/screen-test.hbs',
        skipIfExists: false,
        force: false,
        data: {},
        abortOnFail: true
      }
    ]
  })

  plop.setGenerator('component', {
    description: 'New Component',
    prompts: [
      {
        type: 'input',
        name: 'component_name',
        message: 'Please enter a component name  🚧  (i.e PaymentForm):'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{ pascalCase component_name }}/{{ pascalCase component_name }}.tsx',
        templateFile: 'plop-templates/component.hbs',
        skipIfExists: false,
        force: false,
        data: {},
        abortOnFail: true
      },
      {
        type: 'add',
        path: 'src/components/{{ pascalCase component_name }}/{{ pascalCase component_name }}.test.tsx',
        templateFile: 'plop-templates/component-test.hbs',
        skipIfExists: false,
        force: false,
        data: {},
        abortOnFail: true
      },
    ]
  })
};
