var cheerio = require('cheerio')
var inject = require('./')
var test = require('tape')
var fs = require('fs')

var script = 'console.log("lorem ipsum")'
var fixtures = {
    index: fs.readFileSync(__dirname + '/fixtures/index.html')
  , script: fs.readFileSync(__dirname + '/fixtures/script.html')
}

test('no script', function(t) {
  var injected = inject(fixtures.index, script)
  var $ = cheerio.load(injected)
  var $script = $('script')[0]

  t.equal($script.parent.type, 'tag', 'parent is a tag')
  t.equal($script.parent.name, 'body', 'parent is a <body>')
  t.equal($($script).html(), script, 'matches injected script')

  t.end()
})


test('with script', function(t) {
  var injected = inject(fixtures.script, script)
  var $ = cheerio.load(injected)
  var $script = $('script')[0]

  t.equal($script.parent.type, 'tag', 'parent is a tag')
  t.equal($script.parent.name, 'head', 'parent is a <head>')
  t.equal($($script).html(), script, 'matches injected script')
  t.equal($('script').length, 2, '2 scripts on page now')

  t.end()
})
