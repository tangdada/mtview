import Select from './components/select'

const mtview = {
  version: process.env.VERSION, // eslint-disable-line no-undef
  'mt-select': Select
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
  install,
  Select
}

module.exports.default = module.exports = API   // eslint-disable-line no-undef
