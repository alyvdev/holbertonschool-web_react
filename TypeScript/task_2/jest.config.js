module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: {
        target: 'es6',                // Cible ES6 uniquement pour Jest
        module: 'commonjs',            // Utilise CommonJS pour Jest
        esModuleInterop: true          // Active l'interopérabilité des modules ES
      },
    },
  },
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
};
