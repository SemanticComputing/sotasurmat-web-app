require('@babel/register');
require.extensions['.jpg'] = () => {};
require.extensions['.jpeg'] = () => {};
require.extensions['.gif'] = () => {};
require.extensions['.png'] = () => {};
require.extensions['.svg'] = () => {};

const router = require('./components/RoutesForSitemap').default;
const Sitemap = require('react-router-sitemap').default;

function generateSitemap() {
  return (
    new Sitemap(router)
      .build('https://sotasurmat.narc.fi/')
      .save('./src/client/sitemap.xml')
  );
}

generateSitemap();
