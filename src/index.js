import Selcect from './components/select'

const mtview = {
  version: process.env.VERSION, // eslint-disable-line no-undef
  Selcect
}

const install = function (Vue, opts = {}) {
  // locale.use(opts.locale);
  // locale.i18n(opts.i18n);

  Object.keys(mtview).forEach(key => {
    Vue.component(key, mtview[key])
  })
}

const API = {
  version: process.env.VERSION, // eslint-disable-line no-undef
  Selcect
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports.default = module.exports = API   // eslint-disable-line no-undef
