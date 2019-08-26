module.exports = {
    navigateFallback: 'src/index.html',
    stripPrefix: 'src/dist',
    root: 'src/dist/',
    staticFileGlobs: [
      'src/dist/index.html',
      'src/dist/**.js',
      'src/dist/**.css'
    ]
  };