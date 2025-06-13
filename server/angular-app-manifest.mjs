
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 14978, hash: '69f9ffb181ebbc00329ee42072a6353de0c84fdefe87271e1071aff95916dcec', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8443, hash: '8cfe1335a4625f5b9baec1093c22eb6baa23886e937f59fbcc116dc9c0be02c3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 52780, hash: '057f952fec49d1255df0f6235d976ce244844fff6f1ab54c8e963f4e420ff5de', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6LMRHS22.css': {size: 8613, hash: 'N7dtYh7695Y', text: () => import('./assets-chunks/styles-6LMRHS22_css.mjs').then(m => m.default)}
  },
};
