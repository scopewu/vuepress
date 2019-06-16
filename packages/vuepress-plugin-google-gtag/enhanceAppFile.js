/* global GA_MEASUREMENT_ID, gtag */

export default ({ router }) => {
// Google analytics integration
  if (process.env.NODE_ENV === 'production' && GA_MEASUREMENT_ID && typeof window !== 'undefined') {
    (function (i, s, o, g, r, a, m) {
      i['dataLayer'] = i['dataLayer'] || []
      i[r] = i[r] || function () {
        dataLayer.push(arguments)
      }
      a = s.createElement(o)
      m = s.getElementsByTagName(o)[0]
      a.async = 1
      a.src = g + '?id=' + GA_MEASUREMENT_ID
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.googletagmanager.com/gtag/js', 'gtag')

    gtag('js', new Date())
    gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true })

    router.afterEach(function (to) {
      gtag('config', GA_MEASUREMENT_ID, { 'page_path': to.fullPath })
      gtag('event', 'page_view', { 'send_to': GA_MEASUREMENT_ID })
    })
  }
}

