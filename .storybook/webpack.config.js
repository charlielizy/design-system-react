const path = require('path');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push(
    {
      test: /\.scss$/,
      sideEffects: true,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        // To let storybook import the types correctly, this is needed. It takes care of
        // resolving the url() import paths.
        { loader: 'resolve-url-loader' },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          }
        }
      ]
    },
  );
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });
  config.module.rules.push({
    test: /\.(stories|story)\.mdx$/,
    use: [
      {
        loader: 'babel-loader',
        // may or may not need this line depending on your app's setup
        // plugins: ['@babel/plugin-transform-react-jsx'],
      },
      {
        loader: '@mdx-js/loader',
        options: {
          compilers: [createCompiler({})],
        },
      },
    ],
  });
  config.module.rules.push({
    test: /\.(stories|story)\.[tj]sx?$/,
    loader: require.resolve('@storybook/source-loader'),
    exclude: [/node_modules/],
    enforce: 'pre',
  });
  config.resolve.extensions.push('.js', '.ts', '.tsx');
  config.resolve.alias = {
    // for importing 'exported' elements of the package
    'local-build': path.resolve(__dirname, '../dist'),
    // for importing 'non-exported' elements of the package
    dist: path.resolve(__dirname, '../dist/'),
  };
  config.devServer = {
    stats: 'minimal'
  };
  // Return the altered config
  return config;
};
