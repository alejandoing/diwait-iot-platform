const load_components = (req) => req.keys().forEach((key) => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1')
  module.exports[componentName] = req(key).default
})

load_components( require.context('.', true, /\.\/widgets\/[^/]+\/index\.js$/) )
load_components( require.context('.', true, /\.\/_molecules\/[^/]+\/index\.js$/) )
load_components( require.context('.', true, /\.\/_organisms\/[^/]+\/index\.js$/) )
load_components( require.context('.', true, /\.\/pages\/[^/]+\/index\.js$/) )
load_components( require.context('.', true, /\.\/templates\/[^/]+\/index\.js$/) )
load_components( require.context('.', true, /\.\/themes\/[^/]+\/index\.js$/) )