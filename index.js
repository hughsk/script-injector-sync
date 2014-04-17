var cheerio = require('cheerio')

module.exports = inject

function inject(html, script) {
  script += ''
  script = script.replace(/<\/script/g, '<\\\/script')

  var $ = cheerio.load(html += '')
  var $script = $('script').get(0)
  var $added = $('<script>'+script+'</script>')

  $(
    $script || 'body'
  )[
    $script ? 'before' : 'append'
  ](
    $added
  )

  return $.html()
}
