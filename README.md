# script-injector-sync [![Flattr this!](https://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=hughskennedy&url=http://github.com/hughsk/script-injector-sync&title=script-injector-sync&description=hughsk/script-injector-sync%20on%20GitHub&language=en_GB&tags=flattr,github,javascript&category=software)[![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

Inject JavaScript into HTML, synchronously – intended as an alternative to
[script-injector](http://github.com/dlmanning/script-injector).

## Usage ##

[![script-injector-sync](https://nodei.co/npm/script-injector-sync.png?mini=true)](https://nodei.co/npm/script-injector-sync)

### html = inject(html, script) ###

Returns a modified version of `html` with `script` inlined. The script will
either be inserted before the first script on the page, or if there are none
available it will be inserted before the `<body>`'s closing tag.

`script` is just arbitrary JavaScript – anything you would otherwise put in a
file or inline manually. 

## License ##

MIT. See [LICENSE.md](http://github.com/hughsk/script-injector-sync/blob/master/LICENSE.md) for details.
