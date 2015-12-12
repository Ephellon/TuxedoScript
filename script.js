// TuxedoScript 11.6 - Ephellon Dantzler: Tue Sept 8, 2015 23:51 CDT -06:00
// Free for use, as long as my name ("Ephellon Dantzler" or "Mink CBOS"), CoffeeScript, Python, Java, and ECMA are mentioned
"use strict"; // use strict mode for all of TuxedoScript

function Tuxedo(__) { // main function, executes the code as [input-element, output-element*]
  var __dq__, __sq__, __ga__, __rx__, __cms__, __cmm__, dq_, sq_, ga_, rx_, cms_, cmm_, __, _, _o, x, y, z, a, b, c, _eval, _htmleditor, _jseditor, _clean, _math, _advance, _ugly, _hide, _legacy, _wordy, _jsunit, nch_, sch_, tch_, __nch__, __sch__, __tch__, _notch, _sotch, _totch, N, S, T, M, L, features = [], window; // declare all variables that Tuxedo will use
  window = window || {};

  __dq__ = /(".+?")/; // used to hide, and keep double quotes from being executed
  __sq__ = /('.+?')/; // single quotes
  __ga__ = /(`.+?`)/; // grave accents
  __rx__ = /(\/.+\/[gmiy,\.;\n])/; // regular expressions ** problem when using quotes and $1 within them **
  __nch__ = /<\$n>([\w\W]+?)<\/\$n>/m; // no.t.ch
  __sch__ = /<\$s>([\w\W]+?)<\/\$s>/m; // so.t.ch
  __tch__ = /<\$t>([\w\W]+?)<\/\$t>/m; // to.t.ch [no reason so far, proposed]
  __cms__ = /(\/\/[^\*].+\n)/m; // single-line comments, only replace them so parsing wont generate errors
  __cmm__ = /(\/\*[\w\W]+?\*\/|#\*[\w\W]+?##)/m; // multi-line comments

  dq_ = []; // holder for double-quotes
  sq_ = []; // holder for single-quotes
  ga_ = []; // holder of grave accents
  rx_ = []; // holder of regular expressions
  nch_ = []; // holder of no.t.ch
  sch_ = []; // holder of so.t.ch
  tch_ = []; // holder of to.t.ch
  cms_ = []; // holder for sinlge-line comments
  cmm_ = []; // holder for multi-line comments ** error with @tags not switching **

  x = y = z = a = b = c = N = S = T = M = L = 0; // set all iterators to 0

  __ = __
    .replace(/\\\$/g, "$\b") // \$ fix
    .replace(/\$([1-9])/g, "$\b$1") // $1 fix
    .replace(/(\d)(["'`])/g, "$1\b$2"); // number fix

  // patches [use "illegal" characters, so that they never match user code (un)intentionally]
  for(;__.match(__nch__);) { // remove no.t.ch
    __.replace(__nch__, '$1');
    nch_.push(RegExp.$1);
    __ = __.replace(__nch__, '\bnch[' + N + ']\b');
    N++;
  } __nch__ = /([\b]nch\[\d+\][\b])/;
  for(;__.match(__sch__);) { // remove so.t.ch
    __.replace(__sch__, '$1');
    sch_.push(RegExp.$1);
    __ = __.replace(__sch__, '\bsch[' + S + ']\b');
    S++;
  } __sch__ = /([\b]sch\[\d+\][\b])/;
  for(;__.match(__cmm__);) { // remove multi-line comments
    __.replace(__cmm__, '$1');
    cmm_.push(RegExp.$1.replace(/#\*#?/g, "/* ").replace(/##|\/$/g, "**/"));
    __ = __.replace(__cmm__, '\bcmm[' + M + ']\b');
    M++;
  } __cmm__ = /([\b]cmm\[\d+\][\b])/m;
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  __ = __
    .replace(/\\\//g, "\b.re.")
    .replace(/\\"/g, "\b.dq.")
    .replace(/\\'/g, "\b.sq.")
    .replace(/\\`/g, "\b.ga.")
    .replace(/\\([@#\$%\^\&\*\\\+\-\/\.<>\:;\(\)\[\]\{\}\|])/g, "\b#$1\b");

  for(;__.match(__rx__);) { // remove regular expressions
    __.replace(__rx__, '$1');
    rx_.push(RegExp.$1);
    __ = __.replace(__rx__, '\bre[' + a + ']\b');
    a++;
  } __rx__ = /([\b]re\[\d+\][\b])/;
  for(;__.match(__dq__);) { // remove double-quotes
    __.replace(__dq__, '$1');
    dq_.push(RegExp.$1);
    __ = __.replace(__dq__, '\bdq[' + x + ']\b');
    x++;
  } __dq__ = /([\b]dq\[\d+\][\b])/;
  for(;__.match(__sq__);) { // remove single-quotes
    __.replace(__sq__, '$1');
    sq_.push(RegExp.$1);
    __ = __.replace(__sq__, '\bsq[' + y + ']\b');
    y++;
  } __sq__ = /([\b]sq\[\d+\][\b])/;
  for(;__.match(__ga__);) { // remove grave-accent quotes
    __.replace(__ga__, '$1');
    ga_.push(RegExp.$1);
    __ = __.replace(__ga__, '\bga[' + z + ']\b');
    z++;
  } __ga__ = /([\b]ga\[\d+\][\b])/;

  __ = __
    .replace(/\\\//g, "\\\\\/") // redo all escape forward-slashes
    .replace(/\\([\/\\&?:;.@#%])/g, '[\b]$1[\b]'); // most code wont accept a \b after a symbol

  var rq = (/##\s*\*\*([\w\d\$]+)\:\s*(.+)/); // ## parse phantom thread
  for(;rq.test(__);) { // shorthand variables, parseable
    __.replace(rq, '$1 $2');
    var k = RegExp.$1;
    var K = RegExp.$2.replace(/;/, "");
    var r = RegExp('\\$' + k + '([^\\w\\d\\$])', 'g');
    __ = __.replace(r, eval(K) + "$1").replace(rq, "// " + eval(K) + " => " + k);
  }

  var rq = (/##\s*\*([\w\d\$]+)\:\s*(.+)/); // ## replace phantom thread
  for(;rq.test(__);) { // shorthand variables, literal
    __.replace(rq, '$1 $2');
    var k = RegExp.$1;
    var K = RegExp.$2.replace(/;/, "");
    var r = RegExp('\\$' + k + '([^\\w\\d\\$])', 'g');
    __ = __.replace(r, K + "$1").replace(rq, "// " + K + " => " + k);
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  __ = __ // tuxedo-script
  // [a-z\$_][\w\d\$]* = proper JS variables
  // [a-z\$_][\w\d\.\$]* = proper JS objects
  // pre-process
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/&amp;/g, "&") // in this order to prevent &amp;gt; from becoming > and &amp;lt; < 
  //.replace(/<(\w+.+)>/g, "&lt;$1&gt;") // replace HTML
    .replace(/([a-z\$_][\w\d\$]*)(?:[\-]{2})([a-z\$_][\w\d\$]*)/gi, "$1_$2") // automatic _
  // loops and statements
    .replace(/([\w\d\$\.]+)\s*([\&\|]{1,2})\s*([\w\d\$\.]+)\s*(\!\!)?\s*(\?\?)/gi, "($of ($1 $2 $4) !== 'undefined' && ($1 $2 $4) !== null)") // exists
    .replace(/([\w\d\$\.]+)\s*([\&\|]{1,2})\s*([\w\d\$\.]+)\s*\!\s*(\?\?)/gi, "($of ($1 $2 $3) === 'undefined' || ($1 $2 $3) === null)") // not exists
    .replace(/([\w\d\$\.]+)\s*\!\s*(\?\?)/gi, "(typeof $1 === 'undefined' || $1 === null)") // does not exist
    .replace(/([\w\d\$\.]+)\s*(\?\?)/gi, "(typeof $1 !== 'undefined' && $1 !== null)") // exists
    .replace(/(\W.+)\?([^\:]+?)\:(\s*.+?)/g, '$1,,,$2,,,,$3') // terenary operator
    .replace(/\((.+?)\)\?([^\:]+?)\:(\s*.+?)/g, '($1),,,$2,,,,$3') // terenary operator
    .replace(/([\:\}])\?(.+)[\:\{]/g, "}else if ($2){") // }? condition{
    .replace(/\?([^#\]])(.+)[\:\{](\s+)/g, "if($1$2){$3") // ?condition {
    .replace(/(\:\:|\}\{)/g, "}else{") // }{
    .replace(/\?#([a-z\$_][\w\d\$]*)\s*\:\s*([a-z\$_][\w\d\$]*)\s*[\:\{]/gi, "for(var $1 in $2){")
    .replace(/\-\?#([^\n,;]+)([,;\s]+)([^\n,;]+)\2([^\n,;]+)\2([^\n,;]+)([\:\{])/g, "for(var $1=$3,,$1>$4,,$1-=$5){")
    .replace(/\-\?#([^\n,;]+)([,;\s]+)([^\n,;]+)\2([^\n,;]+)([\:\{])/g, "for(var $1=0,,$1>$3,,$1-=$4){")
    .replace(/\-\?#([^\n,;]+)([,;\s]+)([^\n,;]+)([\:\{])/g, "for(var $1=0,,$1>$3,,$1--){")
    .replace(/\?#([^\n,;]+)([,;\s]+)([^\n,;]+)\2([^\n,;]+)\2([^\n,;]+)([\:\{])/g, "for(var $1=$3,,$1<$4,,$1+=$5){")
    .replace(/\?#([^\n,;]+)([,;\s]+)([^\n,;]+)\2([^\n,;]+)([\:\{])/g, "for(var $1=0,,$1<$3,,$1+=$4){")
    .replace(/\?#([^\n,;]+)([,;\s]+)([^\n,;]+)([\:\{])/g, "for(var $1=0,,$1<$3,,$1++){")
    .replace(/\?\:/g, "do{")
    .replace(/\?(.+);/g, "while($1),,")
    .replace(/\?\((.+)\)/g, "switch($1){\n")
    .replace(/(try|catch|finally)\:/g, "$1{")

    .replace(/@def(a?u?l?t?\:?)/g, "default:") // accepts def...
  // comments
    .replace(/#\*#/g, "/**")
    .replace(/#\*/g, "/*")
    .replace(/##/g, "//")
  // JS and phantom threads
    .replace(/([a-z\$_][\w\d\$\.]*)#00/gi, "$1[$1.length]")
    .replace(/([a-z\$_][\w\d\$\.]*)#0([\w1-9\$]+)/gi, "$1[$1.length-$2]")
    .replace(/([a-z\$_][\w\d\$\.]*)#(\d+|[a-z\$_][\w\d\$]*)/gi, "$1[$2]")
    .replace(/#([a-z\$_][\w\d\$]*)/gi, "var $1") // #([a-z\$_][\w\d\$]*)
    .replace(/\$of([^\w\d\$])/g, 'typeof$1')
    .replace(/\$del([^\w\d\$])/g, "delete$1")
    .replace(/\$args([^\w\d\$])/g, "arguments$1")
    .replace(/\$doc([^\w\d\$])/g, "document$1")
    .replace(/\$win([^\w\d\$])/g, "window$1")
    .replace(/\$nav([^\w\d\$])/g, 'navigator$1')
    .replace(/\$loc([^\w\d\$])/g, 'location$1')
    .replace(/\$cont([^\w\d\$])/g, "continue$1")
    .replace(/\$con([^\w\d\$])/g, "console$1")
    .replace(/\$(#|[Oo]bj)([^\w\d\$])/g, 'Object$2')
  // phantom thread methods
    .replace(/\.\$id([^\w\d\$])/g, ".getElementById$1")
    .replace(/\.\$class([^\w\d\$])/g, ".getElementsByClassName$1")
    .replace(/\.\$tag([^\w\d\$])/g, ".getElementsByTagName$1")
    .replace(/\.\$html([^\w\d\$])/g, ".innerHTML$1")
    .replace(/\.\$text([^\w\d\$])/g, ".innerText$1")
    .replace(/\.\$val([^\w\d\$])/g, ".value$1")
    .replace(/\.\$qy([^\w\d\$])/g, ".querySelector$1")
    .replace(/\.\$Qy([^\w\d\$])/g, ".querySelectorAll$1")
  // functions
    .replace(/<\-\s(.+)/g, "return $1")
    .replace(/([\:\=,]\s*)\$([^\(\)\{\}\[\]\n]+)\s*(\:|\{)/g, "$1function($2){")
    .replace(/\$([a-z\$_][\w\d\$]*)\s+(.+)\s*\s?(\:|\{)/gi, "function $1($2){")
    .replace(/\$([a-z\$_][\w\d\$]*)\s*(\:|\{)/gi, "function $1(){")
    .replace(/\$\s*(\:|\{)/g, "function(){")
    .replace(/function\s\(/g, "$(")
  // TS
    .replace(/@(.+)\:/g, "case $1:")
    .replace(/@([a-z\$_][\w\d\$]*)/gi, "this.$1")
    .replace(/case\s([\w\d\$]+)\s*\=\s?/gi, "this.$1 = ")
    .replace(/;([\s\n,\}\)]+)/g, "}$1")
    .replace(/,,,,/g, ":")
    .replace(/,,,/g, "?")
    .replace(/,,/g, ";")
    .replace(/\/\/\!/g, '"use strict"; // use strict embed')
    .replace(/(?!\?)([\w\d\$]+)\s*\:\s*(.+)([^,\{\[\(])\n$/gi, "$1: $2$3,\n");
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // [experimental] enable/disable features via ## +feature / ## -feature

  var rq = (/\/\/\s*\-\s*(eval|ugly|advance|html-editor|js-editor|clean|math|hide|legacy|wordy|js-unit)/);
  for(;rq.test(__);) { // disable attributes
    __.replace(rq, '$1');
    var k = RegExp.$1;
    // features.push(k);
    __ = __.replace(rq, '// disable ' + k);
  }

  var rq = (/\/\/\s*\+\s*(eval|ugly|advance|html-editor|js-editor|clean|math|hide|legacy|wordy|js-unit)/);
  for(;rq.test(__);) { // enable attributes
    __.replace(rq, '$1');
    var k = RegExp.$1;
    features.push(k);
    __ = __.replace(rq, '// enable ' + k);
  }

  // threads
  _eval = features.indexOf("eval") > -1;
  _htmleditor = features.indexOf("html-editor") > -1;
  _jseditor = features.indexOf("js-editor") > -1;
  _clean = features.indexOf("clean") > -1;
  _math = features.indexOf("math") > -1;
  _advance = features.indexOf("advance") > -1;
  _ugly = features.indexOf("ugly") > -1;
  _hide = features.indexOf("hide") > -1;
  _legacy = features.indexOf("legacy") > -1;
  _wordy = features.indexOf("wordy") > -1;
  _jsunit = features.indexOf("js-unit") > -1;

  for(;__.match(__cms__);) { // remove single line comments
    __.replace(__cms__, '$1');
    cms_.push(RegExp.$1.replace(/##/g, "//"));
    __ = __.replace(__cms__, '\n\n\bcms[' + L + ']\b');
    L++;
  } __cms__ = /([\b]cms\[\d+\][\b])/;
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // other features

  S = 0;
  for(;__.match(__sch__);) { // put so.t.ch back
    __ = __.replace(__sch__, sch_[S]);
    S++;
  }

  if(_legacy) { // JS related
    __ = __
      .replace(/([a-z\$_][\w\d\.\$]*)\s*\&\=/gi, "$1 = $1&&") // &=
      .replace(/([a-z\$_][\w\d\.\$]*)\s*\|\=/gi, "$1 = $1||") // |=
      .replace(/([a-z\$_][\w\d\.\$]*)\s*\^\=(.+)([\.;\n]\s)/gi, "var $1,,\n$1 = ($1 !== null)?$2: $1$3\n}") // ^=
      .replace(/([a-z\$_][\w\d\.\$]*)\s*\?\=(.+)([\.;\n]\s)/gi, "var $1,,\n$1 = ($1 === null)?$2: $1$3\n}") // ?=
      .replace(/\[(\-?[\w\d\$\.]+)\.\.(\-?[\w\d\$\.]+)\]/gi, ".slice($1, $2)") // [a..b]
      .replace(/\[\.\.(\-?[\w\d\$]+)\]/gi, ".slice(0, $1)") // [..b]
      .replace(/\[(\-?[\w\d\$]+)\.\.\]/gi, ".slice($1)") // [a..]
      .replace(/\[\.\]/g, ".slice(0)") // [.]
      .replace(/\[\*\]<(.+?)>/g, ".split($1)") // [*]<...>
      .replace(/\[\*\]/g, ".split(\"\")") // [*]
      .replace(/\[\+\]<(.+?)>/g, ".concat($1)") // [+]<...>
      .replace(/\[\+\+\]<(.+?)>/g, ".push($1)") // [++]<...>
      .replace(/\[<\]/g, ".shift()") // [<]
      .replace(/\[>\]<(.+?)>/g, ".unshift($1)") // [>]<...>
      .replace(/\[~\]<(.+?)>/g, ".every($1)") // [~]<...>
      .replace(/\[&\]<(.*?)>/g, ".join($1)") // [&]<...>
      .replace(/\[\+\?\]<(.+?)>/g, ".indexOf($1)>-1") // [+?]<...>
      .replace(/\[\?\]<(.+?)>/g, ".indexOf($1)") // [?]<...>
      .replace(/\[\-\?\]<(.+?)>/g, ".lastIndexOf($1)") // [-?]<...>
      .replace(/\[\=\]/g, ".reverse()") // [=]
      .replace(/\[\^\]<(.*?)>/g, ".sort($1)") // [^]<...>
      .replace(/\[\-\]/g, ".pop()") // [-]
      .replace(/(\x20*)case\s(\d+)\.\.(\d+)\:/g, function(e){
      e = [];
      var x, y;
      for(var k = (x = +RegExp.$2); k <= (y = +RegExp.$3); k += (y - x) > 1? 1: -1) {
        e.push(RegExp.$1 + "case " + k + ":");
      }
      return e.toString().replace(/,/g, "\n")
    })
      .replace(/([a-z\$_][\w\d\$]*)\x20+([\b].+?[\b])/gi, "$1($2)") // experimental [apply without ()] // whitespace godets
      .replace(/([a-z\$_][\w\d\$]*)\x20+([\w\d\$@][\w\d\$\.]*)/gi, "$1($2)") // experimental [apply without ()] // all godets
      .replace(/\(([\b]cms\[\d+\][\b])\)/g, "\n$1") // comments
      .replace(/(\W)(var|const|return|i[fn]|for|while|else|true|false|new)\((.+?)\)/g, "$1$2 $3") // remove () before these reserved words
      .replace(/(\W)(var|const|return|i[fn]|for|while|else|true|false|new)\(/g, "$1($2") // must run twice to re-enter code
      .replace(/function\((.+)\)\s*\((.*)\)/g, "function $1($2)") // fix function($1)($2)
      .replace(/([^\w\d\$]+)(abstract|arguments|boolean|break|byte|case|catch|char|class|const|continue|debugger|delete|do|double|else|enum|eval|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|let|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|var|void|volatile|while|with|yield)\s?\:/g, '$1"$2":') // quote reserved words, expelled: "default"
      .replace(/\.(abstract|arguments|boolean|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|eval|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|let|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|var|void|volatile|while|with|yield)([^\w\d\$]+)/gi, "[\"$1\"]$2") // bracket reserved words
      .replace(/\((abstract|boolean|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|export|extends|final|finally|float|for|goto|if|implements|import|in|instanceof|int|interface|let|long|native|new|null|package|private|protected|public|return|short|static|switch|synchronized|throw|throws|transient|try|typeof|var|volatile|while|with|yield)\)/gi, " $1 ") // fix (reserved word)
      .replace(/([a-z\$_][\w\d\$]*)\.\.([a-z\$_][\w\d\$]*)/gi, "$1().$2") // a..b
      .replace(/\.([a-z\$_][\w\d\$]*)\(([a-z\$_][\w\d\$]*)\)\s*\{/gi, ".$1 $2 {"); // restructure .class extends
    for(;__.match(/([1-9][\d]*)\[\]/);) { // dimension arrays
      __.replace(/([1-9][\d]*)\[\]/, '$1');
      k = Number(RegExp.$1)-1;
      __ = __.replace(/([0-9][\d]*)\[\]/, "[/dim/]");
      for(var x = 0; x < k-1; x++) {
        __ = __.replace(/\/dim\//, "[/dim/]");
      }
      __ = __.replace(/\/dim\//, "[]");
    }
  }

  if (_advance) {
    __ = __ // advance, experimental features
      .replace(/(\W)\.([\s\w\d\$]+)\s+([\s\w\d\$]+)\{/gi, "$1class $2 extends $3{") // class extends
      .replace(/(\W)\.([\s\w\d\$]+)\{/gi, "$1class $2{") // class
      .replace(/@\((.*?)\)/g, "constructor($1)") // constructor
      .replace(/\*\./g, "super.") // super
      .replace(/(.+)\s*\=>\s*([a-z\$_][\w\d\$]*)/gi, "const $2 = $1") // set constants
      .replace(/([\s\w\d\$]+)\s*\-\->(\s*.+)/gi, "$1 = (args) => $2") // $1 = function(args) { return $2 }
      .replace(/\->/g, "=>")
      .replace(/\$\*(.*?)\s*[\:\{]/g, "void function($1){")
      .replace(/(?:var\s+)?prom\s([a-z\$_][\.\w\d\$]*)/gi, "PROM <$1>");

    if(_legacy) { // advance + legacy threads
      // Splats
      var rq = /\(\s*\.\.\.,\s*([a-z\$_][\w\d\$,\s]*)\s?\)\s*\{/i; // empty beginning splats
      for(;rq.test(__);) { // splats
        __.replace(rq, '$1');
        var k = RegExp.$1.split(',');
        __ = __.replace(rq, "( ){\n/splat/");
        for(var e = 0; e < k.length; e++) {
          __ = __.replace(/\/splat\//, "var " + k[e] + " = <@>[<@>.length-" + (e+1) + "];\n/splat/");
        }
        __ = __.replace(/\/splat\//g, "");
      }

      var rq = /\(\s*([a-z\$_][\w\d\$]*)\.\.\.\s*\)\s*\{/i; // only splats
      __.replace(rq, "$1");
      __ = __
        .replace(rq, "( ){\n/splat/")
        .replace(/\/splat\//, "var " + RegExp.$1 + " = <@>;");

      var rq = /\(\s*([a-z\$_][\w\d\$]*)\.\.\.,\s*([a-z\$_][\w\d\$,\s]*)\s?\)\s*\{/i; // beginning splats
      for(;rq.test(__);) { // splats
        __.replace(rq, '$1,$2');
        var k = RegExp.$1;
        var K = RegExp.$2.split(',');
        __ = __.replace(rq, "( ){\n/splat/");
        __ = __.replace(/\/splat\//, "var " + k + " = (" + (K.length) + " <= <@>.length)?<&>(<@>, 0, <@>.length-" + (K.length) + "):[];\n/splat/");
        for(var e = K.length; e > 0; e--) {
          __ = __.replace(/\/splat\//, "var " + K[e-1] + " = <@>[<@>.length-" + ((K.length-e)+1) + "];\n/splat/");
        }
        __ = __.replace(/\/splat\//g, "");
      }

      var rq = /\(\s*(.+),\s*\.\.\.\s*\)\s*\{/i; // empty ending splats
      for(;rq.test(__);) { // splats
        __.replace(rq, '$1');
        var k = RegExp.$1.split(',');
        __ = __.replace(rq, "( ){\n/splat/");
        for(var e = 0; e < k.length; e++) {
          __ = __.replace(/\/splat\//, "var " + k[e] + " = <@>[" + e + "];\n/splat/");
        }
        __ = __.replace(/\/splat\//g, "");
      }

      var rq = /\(\s*(.+),\s*([a-z\$_][\w\d\$,\s]*)\.\.\.\s*\)\s*\{/i; // ending splats
      for(;rq.test(__);) { // splats
        __.replace(rq, '$1,$2');
        var k = RegExp.$1.split(',');
        var K = RegExp.$2;
        __ = __.replace(rq, "( ){\n/splat/");
        for(var e = 0; e < k.length; e++) {
          __ = __.replace(/\/splat\//, "var " + k[e] + " = <@>[" + e + "];\n/splat/");
        }
        __ = __.replace(/\/splat\//, "var " + K + " = (" + (k.length+1) + " <= <@>.length)?<&>(<@>, " + (k.length) + "):[];");
      }

      var rq = /\(\s*(.+),\s*\.\.\.,\s*(.+)\s*\)\s*\{/i; // empty middle splats
      for(;rq.test(__);) { // splats
        __.replace(rq, '$1,$2');
        var K = RegExp.$1.split(',');
        var k = RegExp.$2.split(',');
        __ = __.replace(rq, "( ){\n/splat/");
        for(var e = 0; e < K.length; e++) {
          __ = __.replace(/\/splat\//, "var " + K[e] + " = <@>[" + e + "];\n/splat/");
        }
        for(var e = k.length; e > 0; e--) {
          __ = __.replace(/\/splat\//, "var " + k[e-1] + " = <@>[<@>.length-" + e + "];\n/splat/");
        }
        __ = __.replace(/\/splat\//g, "");
      }

      var rq = /\(\s*(.+),\s*([a-z\$_][\w\d\$,\s]*)\.\.\.,\s*(.+)\s*\)\s*\{/i; // middle splats
      for(;rq.test(__);) { // splats
        __.replace(rq, '$1,$2,$3');
        var K = RegExp.$1.split(',');
        var j = RegExp.$2;
        var k = RegExp.$3.split(',');
        __ = __.replace(rq, "( ){\n/splat/");
        for(var e = 0; e < K.length; e++) {
          __ = __.replace(/\/splat\//, "var " + K[e] + " = <@>[" + e + "];\n/splat/");
        }
        __ = __.replace(/\/splat\//, "var " + j + " = (" + (K.length+k.length+1) + " <= <@>.length)?<&>(<@>, " + (K.length) + ", <@>.length-" + (k.length) + "):[];\n/splat/");
        for(var e = K.length-1; e < K.length + k.length-1; e++) {
          __ = __.replace(/\/splat\//, "var " + k[e] + " = <@>[<@>.length-" + (k.length-e) + "];\n/splat/");
        }
        __ = __.replace(/\/splat\//g, "");
      }

      __ = __
        .replace(/([a-z\$_][\w\d\$\.]*)\s*\(\s*([a-z\$_][\w\d\$]*)\.\.\.\s*\)/gi, "$1.apply(null, $2)") // $1.apply(null, $2)
        .replace(/([a-z\$_][\w\d\$\.]*)\s*\((.+),\s*([a-z\$_][\w\d\$]*)\.\.\.\s*\)/gi, "$1.apply(null, <&>(<&>($3)))")
        .replace(/([a-z\$_][\w\d\$\.]*)\s*\(([a-z\$_][\w\d\$]*)\.\.\.,\s*(.+?)\s*\)/gi, "$1.apply(null, <&>($3).concat([$2]))")
        .replace(/([a-z\$_][\w\d\$\.]*)\s*\(\s*(.+),\s*([a-z\$_][\w\d\$,\s]*)\.\.\.,\s*(.+?)\s*\)/gi, "$1.apply(null, <&>($2).concat(<&>($3)))")
        .replace(/<@>/g, "arguments")
        .replace(/<\&>/g, "[].slice.call");
    }

    // Prom "Gussets"
    var n = /PROM\s<([a-z\$_][\w\d\$]*)>/i;
    for(;__.match(n);) {
      __ = __.replace(n, "<\b$1>");
      var m = RegExp.$1; // name
      var R = RegExp("function\\s+" + m.replace(/\$/g, "\\$") + "\\s*\\(<\\.\\.\\.>\\s*\\)\\s*\\{");
      var r = RegExp("function\\s+" + m.replace(/\$/g, "\\$") + "\\s*\\(<(.*)>\\s*\\)\\s*\\{");
      if(Array(window).indexOf(m) === -1) {
        window[m] = {
          args: [],
          max: [],
          name: m,
          prototype: {},
          splat: R.test(__),
          stamp: new Date(),
          toString: function() {
            return {}, "function *() {[native code]}"
          }
        };
        __ = __.replace(R, "function __" + m + "() {");
        for(;__.match(r);) {
          __.replace(r, "$1");
          var k = RegExp.$1.split(","),
              K = k.length,
              j = k,
              t = 0,
              T = [],
              E = [],
              u = 0,
              U = false;
          K = (k === "")?0: K;
          __ = __.replace(r, "function " + m + "__" + K + "\bu\b() {\n" + k.every(function(e){
            var g = false, gg = g;
            e = e
              .replace(/\*/, "Any")
              .replace(/\((.+)\)/, " $1")
              .replace(/^\s(.+)/, "$1");
            if(g = e.split(" ").length > 1) {
              e = e.split(" ");
            }
            return T.push(!g?
                          "  var " + e + " = arguments[" + (t++) + "];\n":
                          (E.push(e[0]), e[0]).indexOf("Any") === -1?
                          "  var " + e[1] + " = tux.typeOf(arguments[" + t + "]) === \"" + e[0].toUpperCase() + "\"? arguments[" + (t++) + "]: null;\n":
                          " var " + e[1] + " = arguments[" + (t++) + "];\n"
                         ), true;
          }).toString().replace(/true/, (T + "").replace(/,/g, "") ));
          window[m].args.push(E);
          window[m].max.push(K);
        }
        r = RegExp("<[\\b](" + m.replace(/\$/g, "\\$") + ")>");
        __ = __
          .replace(r, "function $1(){\n  switch(" + ((U = (E + "").replace(/,/g, "") !== "")? "tux.typeOf.apply(null, arguments)": "arguments.length") + "){\n  /\b/\n  }\n}");
        for(var K = 0; K < window[m].max.length; K++) {
          var g = window[m].max[K];
          var G = ((U)? (g = '"' + window[m].args[u] + '"', window[m].args[u]): g) + "";
          var E = [];
          __ = __
            .replace(RegExp(m.replace(/\$/g, "\\$") + "__" + window[m].max[K] + "[\\b]u[\\b]"), ((U)?m + "__" + window[m].args[u++].toString().replace(/,/g, "_"): m + "__" + window[m].max[K]))
            .replace(/\/[\b]\//, "  case " + (g = (g + "").toUpperCase())
                     .split(",").every(function(e){
            var r = g.split(",");
            for(var k = 0; k < r.length; k++) {
              if(/ANY/.test(r[k])) {
                r[k] = '"+tux.typeOf(arguments[' + k + '])+"'
              }
              if(k === r.length-1) {
                r[k] = r[k].replace(/\+"$/, "");
              }
            }
            return E = r, true
          }).toString().replace(/true/, E) + ":\n      return " + m + "__" + G.replace(/,/g, "_") + ".apply(null, arguments);\n      break;\n  /\b/");
        }
        __ = __
          .replace(/\/[\b]\//, R? "default: return __" + m + ".apply(null, arguments)": "");
      }
    }
  }

  if (_math) {
    __ = __ // enable math shortcuts
      .replace(/\|\|/g, "/or/")
      .replace(/\|\=/g, "/ore/")
      .replace(/([\w\d\$]+)\((.+)\)\s?\=\s?([^\=].+)\n/gi, "function $1($2){return $3}\n")
      .replace(/([^\a-z+]\d+)(\x20*)([a-z\$_@]+)/gi, "$1$2*$2$3")
      .replace(/([\w\d\$-]+)\s*~\s*([\w\d\$-]+)/gi, "(($1 % $2 + $2) % $2)")
      .replace(/\|(.+?)\|/g, " @.abs($1)")
      .replace(/([^\\][\w\d\$]+)\\(.+?)\\/gi, " @.pow($2, 1/$1)") // x\y\
      .replace(/\\(.+?)\\/g, " @.sqrt($1)") // \x\
      .replace(/([\w\d\.\$_-]+)\s*(?:\^|\*\*)\s*([\w\d\.\$_-]+)/gi, " @.pow($1, $2)") // $1 ** $2 may not be supported
      .replace(/([\w\d\$]+)\s+_\s+([\w\d\$]+)/gi, " @.floor($1 / $2)")
      .replace(/(\W)log\s(.+)\s\((.+)\)/g, "$1(@.log($3) / @.log($2))")
      .replace(/@\.([a-z\$_][\w\d\$]*)/gi, "Math.$1") // Math
      .replace(/\/or\//g, "||")
      .replace(/\/ore\//g, "|=")
      .replace(/0\s\*\s([ex])(\-?\d+)/g, "0$1$2") // fix hex, and e numbers
      .replace(/(\d)\s\*\se(\-?\d+)/g, "$1e$2"); // fix e numbers
    Math.modulo = function(a, b) {
      a = +a; // Numnber(a)
      b = +b; // Numnber(b)
      return ((a % b) + b) % b; // ([a % b] + b) % b
    }
  }

  if(_wordy) { // words
    __ = __
      .replace(/var\s(does|do|NOT|AND|XOR|OR|isnt|on|yes|good|off|no|bad|equals?|is|when|where|from|unless|until|the|maybe)/g, "#0$1")
      .replace(/\\(does|do|NOT|AND|XOR|OR|isnt|on|yes|good|off|no|bad|equals?|is|when|where|from|unless|until|the|maybe)/g, "#00$1")
      .replace(/\.(does|do|NOT|AND|XOR|OR|isnt|on|yes|good|off|no|bad|equals?|is|when|where|from|unless|until|the|maybe)/g, "#000$1")
      .replace(/\((does|do|NOT|AND|XOR|OR|isnt|on|yes|good|off|no|bad|equals?|is|when|where|from|unless|until|the|maybe)\)/g, " $1") // remove () before these reserved words
      .replace(/(\W)(does|do|NOT|AND|XOR|OR|isnt|on|yes|good|off|no|bad|equals?|is|when|where|from|unless|until|the|maybe)\((.+?)\)/g, "$1$2 $3") // must run twice to re-enter code
      .replace(/\s(does\snot|doesnt|NOT)\s/g, "!")
      .replace(/\s?(does|do)\s?\!\s/g, "!")
      .replace(/\sdoes\s/g, "!!")
      .replace(/([^\w\d\$])(on|yes|good)([^\w\d\$])/gi, "$1true$3")
      .replace(/([^\w\d\$])(off|no|bad)([^\w\d\$])/gi, "$1false$3")
      .replace(/([^\w\d\$])(maybe)([^\w\d\$])/g, "$1tux.random()$3")
      .replace(/\s(isnt|is\snot)\s/g, "!==")
      .replace(/\!\s?(equals|equal|is)\s/g, "!==")
      .replace(/\s(equals|equal|is)\s/g, "===")
      .replace(/\sthe\s([a-z\$_][\w\d\$]*)/gi, " $1") // the "the" keyword
      .replace(/(\W)AND(\W)/g, "$1 && $2")
      .replace(/(\!?)\sAND([\s\!])/g, "&& $2$1")
      .replace(/([\w\d\$]+)\s+XOR\s+([\w\d\$]+)/gi, "$1,,,,,$2")
      .replace(/(\W)OR(\W)/g, "$1 || $2")
      .replace(/(\!?)\sOR([\s\!]?)/g, " || $2$1")
      .replace(/(var|const)\s+([@%\w\d\$\.]+)\s*([\*\/\+\-\%\&\|]?)\=\s*(.+)\s+(if|when|where)\s+(.+)\.\s/gi, "$1 $2;\nif($6){\n$2 $3= $4\n}")
      .replace(/([@%\w\d\$\.]+)\s*([\*\/\+\-\%\&\|]?)\=\s*(.+)\s+(if|when|where)\s+(.+)\.\s/gi, "if($5){\n$1 $2= $3\n}")
      .replace(/(.+)\s+(if|when|where)\s+(.+)\.\s/g, "if($3){\n$1\n}")
      .replace(/(var|const)\s+([@%\w\d\$\.]+)\s*([\*\/\+\-\%\&\|]?)\=\s*(.+)\s+(unless)\s+(.+)\.\s/gi, "$1 $2;\nif(!$6){\n$2 $3= $4\n}")
      .replace(/([@%\w\d\$\.]+)\s*([\*\/\+\-\%\&\|]?)\=\s*(.+)\s+(unless)\s+(.+)\.\s/gi, "if(!$5){\n$1 $2= $3\n}")
      .replace(/(.+)\s+(unless)\s+(.+)\.\s/g, "if(!$3){\n$1\n}")
      .replace(/([\w\d\$]+)\s*\:\s*(.+)\s+if\s+(.+)(,?)/gi, "$1,,,, ($3),,,$2,,,,null$4")
      .replace(/if\s+(.+)\s+then\s+(.+)\s+else\s+(.+)/g, '($1),,,$2,,,,$3') // terenary operator
      .replace(/(:|\})\s*else\s*(if|when|where)(.+)([\:\{])/g, "}else if ($3){")
      .replace(/if\s+(.+)([\:\{])(\s+)/g, "if($1){$3")
      .replace(/([\.;\}]\s+)else(\s+[^\{])/g, "}else{$2")
      .replace(/([^\}]\s+)else(\s+[^\{])/g, "$1}else{$2")

    // from-while, and from loops and logics
      .replace(/([a-z\$_][\w\d\$\.]*)\s*\=\s*(.+)\s+in\s+([a-z\$_][\w\d\$\.]*)([\.;\n]\s?)/gi, "$1 = $3[$2].\n")
      .replace(/([a-z\$_][\w\d\$\.]*)\s*\=\s*(.+)\s+from\s+([a-z\$_][\w\d\$\.]*)([\.;\n]\s?)/gi, "$1 = $3.indexOf($2).\n")
      .replace(/(.+)\s+from\s+([a-z\$_][\w\d\$\.]*)\s+while\s+([a-z\$_][\w\d\$\.]*)([^;\n]+)([\.;\n]\s?)/gi, "for(var $2_<!> = 0; $2_<!> < $2.length; $2_<!>++){\n  var $3 = $2[$2_<!>],,\n  if($3$4){\n    $1.\n  }\n}\n")
      .replace(/(.+)\s+from\s+([a-z\$_][\w\d\$\.]*)\s+while\s+([a-z\$_][\w\d\$\.]*)([\.;\n]\s?)/gi, "for(var $2_<!> = 0; $2_<!> < $2.length; $2_<!>++){\n  var $3 = $2[$2_<!>],,\n  if($3){\n    $1.\n  }\n}\n")
      .replace(/([a-z\$_][\w\d\$\.]*)\(([a-z\$_][\w\d\$\.]*)([^\)]*)\s?\)\s+from\s+([a-z\$_][\w\d\$\.]*)([\.;\n]\s?)/gi, "for(var $4_<!> = 0; $4_<!> < $4.length; $4_<!>++){\n  var $2 = $4[$4_<!>],,\n  $1($2).\n}\n")

      .replace(/(.+)\s+from\s+\[([\w\W]+)\]\s+while\s+([a-z\$_][\w\d\$\.]*)([^;\n]+)([\.;\n]\s?)/gi, "var <?> = [$2],,\nfor(var <?>_<!> = 0; <?>_<!> < <?>.length; <?>_<!>++){\n  var $3 = <?>[<?>_<!>],,\n  if($3$4){\n    $1.\n  }\n}\n")
      .replace(/(.+)\s+from\s+([a-z\$_][\w\d\$\.]*)\s+while\s+\[([\w\W]+)\]([\.;\n]\s?)/gi, "var <?> = [$2],,\nfor(var <?>_<!> = 0; <?>_<!> < <?>.length; <?>_<!>++){\n  var $3 = <?>[<?>_<!>],,\n  if($3){\n    $1.\n  }\n}\n")
      .replace(/([a-z\$_][\w\d\$\.]*)\(([a-z\$_][\w\d\$\.]*)([^\)]*)\s?\)\s+from\s+\[([\w\W]+)\]([\.;\n]\s?)/gi, "var <?> = [$4],,\nfor(var <?>_<!> = 0; <?>_<!> < <?>.length,, <?>_<!>++){\n  var $2 = <?>[<?>_<!>],,\n  $1($2).\n}\n")

      .replace(/(?:var\s)?([a-z\$_][\w\d\$\.]*)\s*\+?\=\s*(?!var\s?)([a-z\$_][\w\d\$\.]*)\s+in\s+([a-z\$_][\w\d\$\.]*)\s+while\s+(in|\.\.\.?)([\.;\n]\s?)/gi, "var $1 = [],,\nfor(var $2 in $3){\n  $1.push($3[$2]).\n}\n")
      .replace(/(?:var\s)?([a-z\$_][\w\d\$\.]*)\s*\+?\=\s*(?!var\s?)([a-z\$_][\w\d\$\.]*)\s+in\s+([a-z\$_][\w\d\$\.]*)\s+while\s+\2\s+in\s+\3([\.;\n]\s?)/gi, "var $1 = [],,\nfor(var $2 in $3){\n  $1.push($3[$2]).\n}\n")
      .replace(/(?:var\s)?([a-z\$_][\w\d\$\.]*)\s*\+?\=\s*(?!var\s?)([a-z\$_][\w\d\$\.]*)\s+in\s+([a-z\$_][\w\d\$\.]*)([\.;\n]\s?)/gi, "var $1 = [],,\nfor(var $2 in $3){\n  $1.push($3[$2]).\n}\n")
      .replace(/([a-z\$_].+)\s+while\s+([^;\n]+)([\.;\n]\s?)/gi, "while($2){\n  $1.\n}\n")
      .replace(/([a-z\$_].+)\s+until\s+([^;\n]+)([\.;\n]\s?)/gi, "while(!$2){\n  $1.\n}\n")

      .replace(/\-for\s+([^\n"'`,;]+)([,;]+)([^\n"'`,;]+)\2([^\n"'`,;]+)\2([^\n"'`,;]+)([\:\{])(\s+)/g, "for(var $1=$3,,$1>$4,,$1-=$5){$7")
      .replace(/\-for\s+([^\n"'`,;]+)([,;]+)([^\n"'`,;]+)\2([^\n"'`,;]+)([\:\{])(\s+)/g, "for(var $1=0,,$1>$3,,$1-=$4){$6")
      .replace(/\-for\s+([^\n"'`,;]+)([,;]+)([^\n"'`,;]+)([\:\{])(\s+)/g, "for(var $1=0,,$1>$3,,$1--){$5")
      .replace(/for\s+([^\n"'`,;]+)([,;]+)([^\n"'`,;]+)\2([^\n"'`,;]+)\2([^\n"'`,;]+)([\:\{])(\s+)/g, "for(var $1=$3,,$1<$4,,$1+=$5){$7")
      .replace(/for\s+([^\n"'`,;]+)([,;]+)([^\n"'`,;]+)\2([^\n"'`,;]+)([\:\{])(\s+)/g, "for(var $1=0,,$1<$3,,$1+=$4){$6")
      .replace(/for\s+([^\n"'`,;]+)([,;]+)([^\n"'`,;]+)([\:\{])(\s+)/g, "for(var $1=0,,$1<$3,,$1++){$5")
      .replace(/for\s+([a-z\$_][\w\d\$]*)\s+(?:in|\:)\s+([a-z\$_][\w\d\$]*)\s*([\:\{])(\s+)/gi, "for(var $1 in $2){$4")
      .replace(/for\s+([a-z\$_][\w\d\$]*)\s+(?:in|\:)\s+([a-z\$_][\w\d\$]*)\s+(?:do|\?)\s+(.+)/gi, "for(var $1=0,,$1<$2.length,,$1++){\n  $3\n}")
      .replace(/\sdo\:?\s*\n/g, "do{")
      .replace(/while\s*(?:[^\(])(.+)([\.;\n]\s*)/g, "while($1),,")
      .replace(/until\s*(?:[^\(])(.+)([\.;\n]\s*)/g, "while(!$1),,")
      .replace(/switch\s+(.+)(?:[\{\:]?)/g, "switch($1){")
      .replace(/\(([\w\d\$\.])\s*(\&\&|\|\|)\s*([\w\d\$\.])\s*([\=\!]\=+)\s*([^\)]+)\s?\)/gi, "($1 $4 $5 $2 $3 $4 $5)")
      .replace(/([\w\d\$\.]+)\s*(\&\&|\|\|)\s*([\w\d\$\.]+)\s?\!\!\s?(exists|exist)/gi, "(typeof ($1 $2 $3) !== '<#>' || ($1 $2 $3) === null)")
      .replace(/([\w\d\$\.]+)\s*(\&\&|\|\|)\s*([\w\d\$\.]+)\s?\!\s?(exists|exist)/gi, "(typeof ($1 $2 $3) === '<#>' || ($1 $2 $3) === null)")
      .replace(/([\w\d\$\.]+)\s*(\&\&|\|\|)\s*([\w\d\$\.]+)\s+(exists|exist)/gi, "(typeof ($1 $2 $3) !== '<#>' && ($1 $2 $3) !== null)")
      .replace(/([\w\d\$\.]+)\s+\!\s?(exists|exist)/gi, "(typeof $1 === '<#>' || $1 === null)")
      .replace(/([\w\d\$\.]+)\s+(exists|exist)/gi, "(typeof $1 !== '<#>' && $1 !== null)")
      .replace(/else[-\s](if|when|where)/g, "else if")
      .replace(/,,,,,/g, "^")
      .replace(/,,,,/g, ":")
      .replace(/,,,/g, "?")
      .replace(/,,/g, ";")
      .replace(/#000/g, ".")
      .replace(/#00/g, "")
      .replace(/#0/g, "var ")
      .replace(/<\?>/g, "ANON")
      .replace(/<\!>/g, "index_counter")
      .replace(/<#>/g, "undefined")
      .replace(/\(\s*([\&\|\=\!]+)\s*\)/g, "$1");
  }

  if (_ugly) {
    __ = __ // ugly
      .replace(/\/\/(?:\*\/)*(.+)/g, "/*$1*/")
      .replace(/\*\/(\s+)\/\*/g, "$1")
      .replace(/undefined/g, "void 0")
      .replace(/(true|\!false|\!\!true)/g, "!0")
      .replace(/(false|\!true|\!\!false)/g, "!1")
      .replace(/while\((.+)\s?\)/g, "for(;$1;)")
      .replace(/Number\(/g, "(+")
      .replace(/\.toString\(\s?\)/g, "+\"\"")
      .replace(/([\&\|])\1/g, "$1");
    var zero = 1;
    for(;__.match(/00+/);) {
      __.replace(/00+/, '$1');
      k = RegExp.$1;
      __ = __.replace(/0(?=0)/, "/e/");
      zero++;
    }
    __ = __
      .replace(/\/e\/0/, 'e' + zero)
      .replace(/(\/e\/)+/g, "")
      .replace(/(\d*)\.e(\d)/, function(e){
      e = Number(RegExp.$1) !== 0? RegExp.$1 + "+": "";
      return (zero = -zero, e + "e" + zero)
    })
      .replace(RegExp("e" + zero + "(\\d+)"), "$1e" + zero);
  }

  __ = __
    .replace(/\n{2,}|\n\x20+\n/g, "\n")
    .replace(/\.(\s*)([\)\]\}])/g, "$2.$1")
    .replace(/\}\./g, ".\n}")
    .replace(/([\]\}])\s+(\)|\])/g, "$1$2")
    .replace(/([\)\]\}]\s)\s+\}/g, "$1}")
    .replace(/([^;\.,])\n/g, "$1;\n")
    .replace(/;(\s*[a-z\$_][\w\d\$]*)\:/gi, ",$1:");

  if(_htmleditor || _jseditor) {
    __ = __
      .replace(/\n+/gm, "\n") // multiple \n
      .replace(/\n([a-z])/gi, "\n\n$1") // outside words, like function, if, etc.
      .replace(/\}\s+(.+);/g, "}\n\n$1;") // anything following a }
      .replace(/([\)\]\};\+\-])\}/g, "$1\n}") // anything before a }
      .replace(/([\w\)\]\}]+)\s*(\{)(.+)/gi, "$1 $2\n$3") // before {
      .replace(/(\})\s*([\w\(\[\{]+)/gi, "$1\n$2") // after }
      .replace(/\}\nelse/g, "} else")
      .replace(/([;\}])(\s|\n+)(var|const|console|if|for|switch|function|Object)/g, "$1\n$3") // var, const, etc.
      .replace(/([;\}])\n(if|for|switch|function|Object)/g, "$1\n\n$2") // var, const, etc. fix
      .replace(/\{\s+\}/g, "{}") // fix {}
      .replace(/\!\s*([^\=a-z\$_\("'`])/gi, "!== $1") // fix wordy
      .replace(/function\s?([^\(\)]+?)\{/g, "function($1) {");
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // rebuild

  M = L = 0;

  for(;__.match(__cmm__);) { // put multi-line comments back
    __ = __.replace(__cmm__, cmm_[M]);
    M++;
  }

  for(;__.match(__cms__);) { // put single line comments back
    __ = __.replace(__cms__, cms_[L]);
    L++;
  }


  // @embroideries
  __ = __
    .replace(/(@|this\.)aut\:(.+[^,])/g, "author: $2")
    .replace(/(@|this\.)lie\:(.+[^,])/g, "license: $2")
    .replace(/(@|this\.)dat\:(.+[^,])/g, "date: $2")
    .replace(/(@|this\.)tie\:(.+[^,])/g, "time: $2")
    .replace(/(@|this\.)url\:(.+[^,])/g, "URL: $2")
    .replace(/(@|this\.)ver\:(.+[^,])/g, "Version: $2");

  x = y = z = a = 0;
  for(;__.match(__sq__);) { // put single quotes back
    __ = __.replace(__sq__, sq_[y]);
    if(_legacy) { // TS related, and interpolation
      for(;__.match(r = /([1-9][\d]*)'(.*?)'/);) { // dimension strings
        __.replace(r, '$1 $2');
        k = Number(RegExp.$1);
        K = RegExp.$2;
        __ = __.replace(r, "'" + K + "' + /str/");
        for(var x = 0; x < k-1; x++) {
          __ = __.replace(/\/str\//, "'" + K + "' + /str/");
        }
        __ = __.replace(/\s\+\s\/str\//, "");
      }
      __ = __
        .replace(/\$\{([^'\}]+)\}/g, "' + ( $1 ) + '") // interpolation "${}"
        .replace(/''\s\+\s|\s\+\s''/g, "");
    }
    y++;
  }
  for(;__.match(__dq__);) { // put double quotes back
    __ = __.replace(__dq__, dq_[x]);
    if(_legacy) { // TS related, and interpolation
      for(;__.match(r = /([1-9][\d]*)"(.*?)"/);) { // dimension strings
        __.replace(r, '$1 $2');
        k = Number(RegExp.$1);
        K = RegExp.$2;
        __ = __.replace(r, "\"" + K + "\" + /str/");
        for(var x = 0; x < k-1; x++) {
          __ = __.replace(/\/str\//, "\"" + K + "\" + /str/");
        }
        __ = __.replace(/\s\+\s\/str\//, "");
      }
      __ = __
        .replace(/\$\{([^"\}]+)\}/g, "\" + ( $1 ) + \"") // interpolation "${}"
        .replace(/""\s\+\s|\s\+\s""/g, "");
    }
    x++;
  } __ = __.replace(/([^\\])`/g, "$1\\'"); // embeded grave accents

  for(;__.match(__ga__);) { // put grave accents back
    __ = __.replace(__ga__, ga_[z]);
    for(;__.match(r = /([1-9][\d]*)`(.*?)`/);) { // dimension strings
      __.replace(r, '$1 $2');
      k = Number(RegExp.$1);
      K = RegExp.$2;
      __ = __.replace(r, "`" + K + "` + /str/");
      for(var x = 0; x < k-1; x++) {
        __ = __.replace(/\/str\//, "`" + K + "` + /str/");
      }
      __ = __.replace(/\s\+\s\/str\//, "");
    }
    if(_legacy) { // TS related, and interpolation
      __ = __
        .replace(/\$\{([^'\}]+)\}/g, "` + ( $1 ) + `") // interpolation `${}`
        .replace(/``\s\+\s|\s\+\s``/g, "");
    }
    z++;
  }

  for(;__.match(__rx__);) { // put regular expressions back
    __ = __.replace(__rx__, rx_[a]);
    a++;
  }

  if(_legacy) {
    var reg = /(["'`])(.*)\1\s+\1(.*)\1/;
    for(;__.match(reg);) {
      __.replace(reg, "$1 $2 $3");
      var k = RegExp.$1;
      var K = RegExp.$2;
      var j = RegExp.$3;
      __ = __.replace(reg, "$1$2$1 + $1$3$1");
    }
    __ = __
      .replace(/\\j/g, "[a-zA-Z\\$_][\\w\\d\\$]*") // \j
      .replace(/\\J/g, "[^a-zA-Z\\$_][\\w\\d\\$]*"); // \J
  }

  __ = __
    .replace(/[\b]\.re\./g, "\\\/")
    .replace(/[\b]\.dq\./g, "\\\"")
    .replace(/[\b]\.sq\./g, "\\'")
    .replace(/[\b]\.ga\./g, "\\`");

  // string multi-lining
  __ = __
    .replace(/`(.*)\n+([\w\W]+?)`/gm, function(e) {
    e = e
      .replace(/\n/g, "\\n")
      .replace(/`(.+)`/g, function(e) {
      if(/\!white-space/.test(e)) {
        e = e
          .replace(/\!white-space/, "")
          .replace(/\s+/g, " ");
      }
      return e
        .replace(/(["'])/g, "\\$1")
        .replace(/`/g, "'")
        .replace(/;\\n/g, " ");
    });
    return e;
  });

  __ = __
    .replace(/@([a-z\$_][\w\d\$]*)/gi, "this.$1")
    .replace(/(?![\b])@(?![\b])/g, "this")
    .replace(/([\(\[\{,;\:\?\!\*\/\+\-\=%<>]);(\s+)/g, "$1$2")
    .replace(/;(\s*[\*\/\+\-\=%,\.\}\]\?\:]|\s*else|\s*while)/g, "$1")
    .replace(/\*(\s*[\/\+\-%,\.\}\]\?\:]|\s*else|\s*while)/g, "$1")
    .replace(/;(\s+[\)])/g, "$1")
    .replace(/(\s+);(\s+)/g, "$1$2")
    .replace(/(["'])use\sstrict\1/g, "$1use strict$1,,")
    .replace(/(["'])use\(strict\)\1/g, "$1use strict$1")
    .replace(/switch\((.+)\);/g, "switch($1){")
    .replace(/break([,\n])/g, "break,,\n")
    .replace(/,,/g, ";")
    .replace(/;+/g, ";")
    .replace(/([\(\[\{]\s*),/g, "$1")
    .replace(/([\w\d\$]+)@([\w\d\$]+)/gi, "$1.prototype.$2")
    .replace(/([^\\])\.([\s;\}]+)/g, "$1;$2") // ;
    .replace(/[\b]([1-9])/g, "$\b$1") // $1 fix
    .replace(/\$[\b]/g, "$")
    .replace(/function\s+([^\(\)]+?)\s?\{/g, "function($1) {")
    .replace(/([\{\[\(])\n+/g, "$1\n")
    .replace(/[\b]#([@#\$%\^\&\*\\\+\-\/\.<>\:;\(\)\[\]\{\}\|])[\b]/g, "$1")
    .replace(/(.+)\/\/(.+)([;,])/g, "$1$3 //$2")
    .replace(/\/\/(.+)\n+;/g, "//$1")
    .replace(/;\s*,/g, ";")
    .replace(/,\s*;/g, ",")
    .replace(/[\b]/g, ''); // remove trailing \b, fix \char
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // handle other features

  N = 0;
  for(;__.match(__nch__);) { // put no.t.ch back
    __ = __.replace(__nch__, nch_[N]);
    N++;
  }

  JSUNIT = {};

  if(_jsunit) {
    JSUNIT = {
      after: '',
      before: '',
      count: 0,
      test: {},
      toconsole: false,

      assert: function(t, c) {
        JSUNIT.count++;
        c = "[Test #" + JSUNIT.count + "]\n  < assert(" + tux.typeof(t) + ", " + tux.typeof(c) + ") >\n  recieved: " + tux.typeof(c);
        println(c + '\n');
      },
      assertTrue: function(t, c) {
        JSUNIT.count++;
        if(t === true) {
          return;
        }
        c = c || "[Error: Test #" + JSUNIT.count + "]\n  < assertTrue(" + tux.typeof(t) + ", " + tux.typeof(c) + ") >\n  expected: true\n  recieved: " + tux.typeof(t);
        println(c + '\n');
      },
      assertFalse: function(t, c) {
        JSUNIT.count++;
        if(t === false) {
          return;
        }
        c = c || "[Error: Test #" + JSUNIT.count + "]\n  < assertFalse(" + tux.typeof(t) + ", " + tux.typeof(c) + ") >\n  expected: false\n  recieved: " + tux.typeof(t);
        println(c + '\n');
      },
      assertEquals: function(t, u, c) {
        JSUNIT.count++;
        if(t === u) {
          return;
        }
        c = c || "[Error: Test #" + JSUNIT.count + "]\n  < assertEquals(" + tux.typeof(t) + ", " + tux.typeof(u) + ", " + tux.typeof(c) + ") >\n  expected: " + tux.typeof(t) + "\n  recieved: " + tux.typeof(u);
        println(c + '\n');
      },
      assertNotEquals: function(t, u, c) {
        JSUNIT.count++;
        if(t !== u) {
          return;
        }
        c = c || "[Error: Test #" + JSUNIT.count + "]\n  < assertNotEquals(" + tux.typeof(t) + ", " + tux.typeof(u) + ", " + tux.typeof(c) + ") >\n  did not expect: " + tux.typeof(t) + "\n  recieved: " + tux.typeof(u);
        println(c + '\n');
      },
      assertNull: function(t, c) {
        JSUNIT.count++;
        if(t === null) {
          return;
        }
        c = c || "[Error: Test #" + JSUNIT.count + "]\n  < assertNull(" + tux.typeof(t) + ", " + tux.typeof(c) + ") >\n  expected: null\n  recieved: " + tux.typeof(t);
        println(c + '\n');
      },
      assertNotNull: function(t, c) {
        JSUNIT.count++;
        if(t !== null) {
          return;
        }
        c = c || "[Error: Test #" + JSUNIT.count + "]\n  < assertNotNull(" + tux.typeof(t) + ", " + tux.typeof(c) + ") >\n  did not expect: null\n  recieved: " + tux.typeof(t);
        println(c + '\n');
      },
      assertUndefined: function(t, c) {
        JSUNIT.count++;
        if(t === undefined || t === "undefined") {
          return;
        }
        c = c || "[Error: Test #" + JSUNIT.count + "]\n  < assertUndefined(" + tux.typeof(t) + ", " + tux.typeof(c) + ") >\n  expected: undefined\n  recieved: " + tux.typeof(t);
        println(c + '\n');
      },
      assertNotUndefined: function(t, c) {
        JSUNIT.count++;
        if(t !== undefined || t !== "undefined") {
          return;
        }
        c = c || "[Error: Test #" + JSUNIT.count + "]\n  < assertNotUndefined(" + tux.typeof(t) + ", " + tux.typeof(c) + ") >\n  did not expect: undefined\n  recieved: " + tux.typeof(t);
        println(c + '\n');
      },
      assertNaN: function(t, c) {
        JSUNIT.count++;
        if(t === NaN) {
          return;
        }
        c = c || "[Error: Test #" + JSUNIT.count + "]\n  < assertNaN(" + tux.typeof(t) + ", " + tux.typeof(c) + ") >\n  expected: NaN\n  recieved: " + tux.typeof(t);
        println(c + '\n');
      },
      assertNotNaN: function(t, c) {
        JSUNIT.count++;
        if(t !== NaN) {
          return;
        }
        c = c || "[Error: Test #" + JSUNIT.count + "]\n  < assertNotNaN(" + tux.typeof(t) + ", " + tux.typeof(c) + ") >\n  did not expect: NaN\n  recieved: " + tux.typeof(t);
        println(c + '\n');
      },
      assertFail: function(c) {
        JSUNIT.count++;
        println("[Error: Test #" + JSUNIT.count + "]\n  < assertFail(" + tux.typeof(c) + ") >\n");
      }
    }
    __ = __
      .replace(/this\.(Before|After)/g, function(c) {
      c = c.replace(/this\./, "");
      if(/Before/.test(c)) {
        JSUNIT.before = c + '();';
      } else if(/After/.test(c)) {
        JSUNIT.after = c + '();\n';
      }
      return "function " + c + "()";
    })
      .replace(/\(this\.Test(.+)\{/g, "(function($1){\n" + JSUNIT.before)
      .replace(/\}#\);?/g, JSUNIT.after + "})();")
      .replace(/this\.this/g, "JSUNIT")
      .replace(/JSUNIT\.toconsole/g, function(c) {
      JSUNIT.toconsole = true;
      return c;
    });
  }

  if(_eval) {
    eval(__); // eval or not
  }

  if(_htmleditor) {
    __ = __
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\n/g, "<br/>")
      .replace(/\s/g, "&nbsp;");
    __ += // clean-up, make more readable
      (("!" != _clean)?
       "<br/>/* - TuxedoScript " + tux.version + " - Ephellon Dantzler: Tue Sept 8, 2015 23:51 CDT -06:00 - */<br/>":
       "");
  }

  return Tuxedo.toString = (function toString(){ ["compiled code"] }), __;
}

var tux, tuxedo, nm;
tux = tuxedo = {};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
tux = tuxedo = nm || { // nm
  version: "11.6",
  "typeof": function(e) {
    if(arguments.length > 1) return tux.typeOf.apply(null, arguments);
    var n = "";
    switch(typeof e) {
      case typeof Boolean():
        n = "";
        break;
      case typeof Function():
        n = "";
        break;
      case typeof Number():
        n = "";
        break;
      case typeof Object():
        switch(e.constructor) {
          case RegExp:
            n = "";
            break;
          case Array:
            n = "[]";
            break;
          default:
            n = "{}";
            break;
        }
        break;
      case typeof String():
        n = "\"\"";
        break;
      case typeof Symbol():
        n = ["(@@", ")"];
        e = e.toString();
        break;
      case typeof null:
        n = "";
        break;
      case typeof undefined:
        n = "";
        break;
      default:
        n = "";
    }
    return (n[0] || "") + e + (n[1] || "");
  },
  typeOf: function() {
    var E = [];
    for(var x = 0; x < arguments.length; x++) {
      E.push(arguments[x].__proto__.constructor.name || arguments[x].constructor.name);
    }
    return (E + "").replace(/\*/g, "ANY").toUpperCase();
  },
  random: function() {
    return Boolean(Math.round(Math.random()));
  }
};

var dummy = Tuxedo(JAVA_STRING);
println(dummy);