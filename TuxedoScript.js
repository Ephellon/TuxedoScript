// TuxedoScript 15.9.0 - Ephellon Dantzler: Tue Sept 8, 2015 23:51 CDT -06:00
// Free for use, as long as my name ("Ephellon Dantzler" or "Mink CBOS"), CoffeeScript, Python, Java, and ECMA are mentioned
function Tuxedo(__) {
  // main function, executes the code as [input-element, output-element*]
  "use strict";
  // use strict mode for all of TuxedoScript
  var JSUNIT, features, window, time, runtime, __dq__, __sq__, __ga__, __rx__, __cms__, __cmm__, dq_, sq_, ga_, rx_, cms_, cmm_, __, _, _o, x, y, z, a, b, c, _eval, _htmleditor, _jseditor, _clean, _math, _advance, _ugly, _hide, _legacy, _wordy, _jsunit, nch_, sch_, tch_, __nch__, __sch__, __tch__, _notch, _sotch, _totch, N, S, T, M, L;
  features = [];
  window = [];
  // declare all variables that Tuxedo will use
  __dq__ = /("[^"]*?")/;
  // used to hide, and keep double quotes from being executed
  __sq__ = /('[^']*?')/;
  // single quotes
  __ga__ = /(`[^`]*?`)/;
  // grave accents
  __rx__ = /([\=\:\[\(,]\s*)(\/[^\/\$\*\?\+].+?\/[gmiyu]*)/;
  // regular expressions ** problem when using quotes and $1 within them **
  __nch__ = /<\$n>([\w\W]*?)<\/\$n>/;
  // no.t.ch
  __sch__ = /<\$s>([\w\W]*?)<\/\$s>/;
  // so.t.ch
  __tch__ = /<([a-z\$_][\w\$]*\s+[a-z\$_][\w\$]*.*?)>/i;
  // to.t.ch
  __cms__ = /([^\:]\/\/.*)/;
  // single-line comments, only replace them so parsing wont generate errors
  __cmm__ = /(\/\*[\w\W]*?\*\/|#\*[\w\W]*?[\*#]#)/;
  // multi-line comments
  time = {
    start: (new Date() + "").replace(/.+(\d{2}\:\d{2}\:\d{2}).+/, "$1") + "." + new Date().getMilliseconds(),
    end: null,
    span: null
  };
  dq_ = [];
  // holder for double-quotes
  sq_ = [];
  // holder for single-quotes
  ga_ = [];
  // holder of grave accents
  rx_ = [];
  // holder of regular expressions
  nch_ = [];
  // holder of no.t.ch
  sch_ = [];
  // holder of so.t.ch
  tch_ = [];
  // holder of to.t.ch
  cms_ = [];
  // holder for sinlge-line comments
  cmm_ = [];
  // holder for multi-line comments ** error with @tags not switching **
  runtime = {
    /*
      ECMAScript features
      (All info. provided by the MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript)
    */
    is: function(e) {
      switch (e + "") {
       case "*":
        return runtime.is("1.8.5");

       case "1.8.5":
        if ("undefined" == typeof Object.create && null === Object.create) return runtime.is("1.8.1");
        /* JavaScript 1.8.5
            Objects:
              Proxy
            Methods:
              Object:
                create, defineProperty, defineProperties, getOwnPropertyDescriptor, keys, getOwnPropertyNames, preventExtensions, isExpandable, seal, isSealed, freeze, isFrozen, isArray
              Date.prototype:
                toJSON
              Function.prototype:
                bind
            Operators:
              get
              set
            */
        break;

       case "1.8.1":
        if ("undefined" == typeof Object.getPrototypeOf && null === Object.getPrototypeOf) return runtime.is("1.8");
        /* JavaScript 1.8.1
            Methods:
              Object:
                getProtototypeOf
              "native" JSON
              String.prototype:
                trim, trimLeft, trimRight, statrsWith
            */
        break;

       // ^ ECMAScript 7
        case "1.8":
        if ("undefined" == typeof Array.prototype.reduce && null === Array.prototype.reduce) return runtime.is("1.7");
        /* JavaScript 1.8
            Methods:
              Array.prototype:
                reduce, reduceRight
            Deprecated:
              "destructing" to NUL
            */
        break;

       // ^ ECMAScript 6
        case "1.7":
        if ("undefined" != typeof Array.prototype.indexOf && null !== Array.prototype.indexOf && "undefined" == typeof Array.prototype.reduce && null === Array.prototype.reduce) return runtime.is("1.6");
        /* JavaScript 1.7
            Et Cetra:
              "destructing" @ {
                [a, b, c, ...] = ["abc", 123, "xyz", ...]
                {a, b, c, ...} = {a: "abc", b: 123, c: "xyz", ...}
              }
            */
        break;

       case "1.6":
        if ("undefined" == typeof Array.prototype.indexOf && null === Array.prototype.indexOf) return runtime.is("1.5");
        /* JavaScript 1.6
            Methods:
              Array:
                indexOf, lastIndexOf, every, filter, forEach, map, some
            Statements:
              for each...in
            Et Cetra:
              XML support
            */
        break;

       // ^ ECMAScript 5
        case "1.5":
        if ("undefined" == typeof Number.prototype.toExponential && null === Number.prototype.toExponential) return runtime.is("1.4");
        /* JavaScript 1.5
            Methods:
              Number.prototype:
                toExponential, toFixed, toPrecision
            Statements:
              const
            Improved:
              /(catch)+/ in try...catch
            */
        break;

       case "1.4":
        if ("undefined" == typeof Function.prototype.length && null === Function.prototype.length) return runtime.is("1.3");
        /* JavaScript 1.4
            Operators:
              in
              instanceof
            Statements:
              throw
              try...catch
            Deprecated:
              Function.arity to Function.length
            */
        break;

       case "1.3":
        if ("undefined" == typeof Function.prototype.apply && null === Function.prototype.apply) return runtime.is("1.2");
        /* JavaScript 1.3
            Globals:
              NaN
              Infinity
              undefined
            Methods:
              isFinite
              Function.prototype:
                apply, call
              Date: *
            Et Cetra:
              ===
              !==
            */
        break;

       case "1.2":
        if ("undefined" == typeof Array.prototype.concat && null === Array.prototype.concat) return runtime.is("1.1");
        /* JavaScript 1.2
            Objects:
              arguments
            Properties:
              Function:
                arity
            Methods:
              Array.prototype:
                concat, slice
              String.prototype:
                charCodeAt, concat, fromCharCode, match, replace, search, slice, substr
            Operators
              delete
              ==
              !=
            Statements:
              "label" @ {
                label_name:
                  statement
              }
              switch
              do...while
              import
              export
            Et Cetra:
              RegExp
            */
        break;

       default:
        return "1.1";
      }
      return e + "";
    },
    has: function(e) {
      if (Tuxedo.support) return Tuxedo.support.indexOf(e) > -1;
      var r = [ "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.8.1", "1.8.5" ], t = 0;
      return t = r.slice(0, r.indexOf(runtime.is("*")) + 1), Tuxedo.runtime = t.slice(t.length - 1, t.length)[0],
      (Tuxedo.support = t).indexOf(e) > -1;
    },
    emulate: function(e) {
      var r = [ "*", "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.8.1", "1.8.5" ];
      return Tuxedo.support = r.slice(0, (r.indexOf(e) || r.indexOf(runtime.is("*"))) + 1),
      Tuxedo.runtime = Tuxedo.support[Tuxedo.support.length - 1] + ".*", Tuxedo.support;
    }
  };
  if (!runtime.has("1.3")) return "/* Tuxedo Script - " + tuxedo.version + " @Requires at least JavaScript 1.3 (@" + Tuxedo.runtime + ") [1.3 - 19 October 1998] */";
  x = y = z = a = b = c = N = S = T = M = L = 0;
  // ## parse runtime emulation
  for (var rq = /##\s*@(\d\.\d\.?\d?)/; rq.test(__); ) {
    __.replace(rq, "$1");
    var k = RegExp.$1, K = runtime.emulate(k);
    __ = __.replace(rq, "\b// emulate " + k);
  }
  // ## parse phantom thread
  for (rq = /##\s*\*\*([\w\$]+)\:\s*(.+)/; rq.test(__); ) {
    __.replace(rq, "$1 $2");
    var k = RegExp.$1, K = RegExp.$2.replace(/;/, ""), r = RegExp("\\$" + k + "([^\\w\\d\\$])", "g");
    __ = __.replace(r, eval(K) + "$1").replace(rq, "\b// " + eval(K) + " -> " + k);
  }
  // ## replace phantom thread
  for (rq = /##\s*\*([\w\$]+)\:\s*(.+)/;rq.test(__); ) {
    // shorthand variables, literal
    __.replace(rq);
    var k = RegExp.$1, K = RegExp.$2.replace(/;/, ""), r = RegExp("\\$" + k + "([^\\w\\d\\$])", "g");
    __ = __.replace(r, K + "$1").replace(rq, "\b// " + K + " -> " + k);
  }
  // patches [use "illegal" characters, so that they never match user code (un)intentionally]
  for (;__.match(__nch__); N++) {
    // remove no.t.ch
    __.replace(__nch__);
    nch_.push(RegExp.$1);
    __ = __.replace(__nch__, "\bnch[" + N + "]\b");
  }
  __nch__ = /([\b]nch\[\d+\][\b])/;
  for (;__.match(__sch__); S++) {
    // remove so.t.ch
    __.replace(__sch__);
    sch_.push(RegExp.$1);
    __ = __.replace(__sch__, "\bsch[" + S + "]\b");
  }
  __sch__ = /([\b]sch\[\d+\][\b])/;
  for (;__.match(__cmm__); M++) {
    // remove multi-line comments
    __.replace(__cmm__);
    cmm_.push(RegExp.$1.replace(/#\*#?/g, "/*").replace(/[\*#]#|\/$/, "*\b/"));
    __ = __.replace(__cmm__, "\bcmm[" + M + "]\b");
  }
  for (;__.match(__cms__); L++) {
    // remove single-line comments
    __.replace(__cms__);
    cms_.push(RegExp.$1);
    __ = __.replace(__cms__, "\bcms[" + L + "]\b");
  }
  __cms__ = /([^\:]\/\/.*|##.*)/;
  __ = __.replace(/\$[\b]?([1-9])/g, "$\b$1").replace(/(\d)(["'`])/g, "$1\b$2").replace(/\\\\/g, "\b.bs.").replace(/\\\//g, "\b.re.").replace(/\\"/g, "\b.dq.").replace(/\\'/g, "\b.sq.").replace(/\\`/g, "\b.ga.").replace(/\\$/g, "\b.dl.").replace(/\\(.)/g, "\b$1\b");
  for (;__.match(__dq__); x++) {
    // remove double-quotes
    __.replace(__dq__);
    dq_.push(RegExp.$1.replace(/^"\n|\n"$/g, '"').replace(/\n/g, " "));
    __ = __.replace(__dq__, "\bdq[" + x + "]\b");
  }
  for (;__.match(__sq__); y++) {
    // remove single-quotes
    __.replace(__sq__);
    sq_.push(RegExp.$1.replace(/^'\n|\n'$/g, "'").replace(/\n/g, " "));
    __ = __.replace(__sq__, "\bsq[" + y + "]\b");
  }
  for (;__.match(__ga__); z++) {
    // remove grave-accent quotes
    __.replace(__ga__);
    ga_.push(RegExp.$1);
    __ = __.replace(__ga__, "\bga[" + z + "]\b");
  }
  for (;__.match(__rx__); a++) {
    // remove regular
    __.replace(__rx__);
    rx_.push(RegExp.$2);
    __ = __.replace(__rx__, RegExp.$1 + "\bre[" + a + "]\b");
  }
  for (;__.match(__tch__); T++) {
    // remove to.t.ch
    __.replace(__tch__);
    tch_.push(RegExp.$1);
    __ = __.replace(__tch__, "\btch[" + T + "]\b");
  }
  __tch__ = /([\b]tch\[\d+\][\b])/;
  __ = __.replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&amp;/g, "&").replace(/([a-z\$_][\w\$]*)(?:[\-]{2})([a-z\$_][\w\$]*)/gi, "$1_$2").replace(/([\w\$\.]+)\s*([\&\|]{1,2})\s*([\w\$\.]+)\s*(\!\!)?\s*(\?\?)/gi, "($of ($1 $2 $4) !== 'undefined' && ($1 $2 $4) !== null)").replace(/([\w\$\.]+)\s*([\&\|]{1,2})\s*([\w\$\.]+)\s*\!\s*(\?\?)/gi, "($of ($1 $2 $3) === 'undefined' || ($1 $2 $3) === null)").replace(/([\w\$\.]+)\s*\!\s*(\?\?)/gi, "($of $1 === 'undefined' || $1 === null)").replace(/([\w\$\.]+)\s*(\?\?)/gi, "($of $1 !== 'undefined' && $1 !== null)").replace(/(\W.+)\?([^\:]+?)\:(\s*.+?)/g, "$1,,,$2,,,,$3").replace(/\((.+?)\)\?([^\:]+?)\:(\s*.+?)/g, "($1),,,$2,,,,$3").replace(/([\:\}])\?(.+)(\s*[\:\{])/g, "} else if($2) {").replace(/\?([^#\]])(.+)(\s*[\:\{])/g, "if($1$2) {").replace(/(\:\:|\}\s*\{)/g, "} else {").replace(/(\x20*)\?#([a-z\$_][\w\$]*)\s*\:\s*([a-z\$_][\w\$]*)(\s*[\:\{])/gi, runtime.has("1.4") ? "$1for(var $2 in $3) {" : "$1for(var $2_in = 0,, $3 = Array($3), $2_in < $3.length,, $2_in++) {\n$1  var $2 = $2_in,,");
  for (k = /\-?\?#([^\n,;]+)([,;\s]+)([^\n,;]+)\2([^\n,;]+)\2([^\n,;]+)(\s*[\:\{])/; k.test(__); ) __ = __.replace(k, function(e) {
    var r = RegExp.$1, t = RegExp.$3, _ = RegExp.$4, a = RegExp.$5, n = "-" !== e[0] || +_ > +t ? "<" : ">", s = "<" === n ? "+" : "-";
    return "for(var " + r + " = " + t + ",, " + r + n + _ + ",, " + r + s + "=" + a + ") {";
  });
  for (k = /\-?\?#([^\n,;]+)([,;\s]+)([^\n,;]+)\2([^\n,;]+)(\s*[\:\{])/; k.test(__); ) __ = __.replace(k, function(e) {
    var r = RegExp.$1, t = RegExp.$3, _ = RegExp.$4, a = "-" !== e[0] || +t > 0 ? "<" : ">", n = "<" === a ? "+" : "-";
    return "for(var " + r + " = 0,, " + r + a + t + ",, " + r + n + "=" + _ + ") {";
  });
  for (k = /\-?\?#([^\n,;]+)([,;\s]+)([^\n,;]+)(\s*[\:\{])/; k.test(__); ) __ = __.replace(k, function(e) {
    var r = RegExp.$1, t = RegExp.$3, _ = "-" !== e[0] || +t > 0 ? "<" : ">", a = "<" === _ ? "++" : "--";
    return "for(var " + r + " = 0,, " + r + _ + t + ",, " + r + a + ") {";
  });
  __ = __.replace(/\?\s*\:/g, "do {").replace(/\?(.+)(\s*[;\{])/g, "while($1)$2".replace(/;/, ",,")).replace(/\?\((.+)\)/g, "switch($1) {\n").replace(/(try|catch|finally)\s*\:/g, "$1 {").replace(/@def(a?u?l?t?\:?)/g, "default:").replace(/#\*#/g, "/**").replace(/#\*/g, "/*").replace(/##/g, "//").replace(/([a-z\$_][\w\$\.]*)#00/gi, "$1[$1.length]").replace(/([a-z\$_][\w\$\.]*)#0([\w\$]+)/gi, "$1[$1.length-$2]").replace(/([a-z\$_][\w\$\.]*)#(\d+|[a-z\$_][\w\$]*)/gi, "$1[$2]").replace(/#([a-z\$_][\w\$]*)/gi, "var $1").replace(/([^\w\$])\$of([^\w\$])/g, "$1typeof$2").replace(/([^\w\$])\$del([^\w\$])/g, "$1delete$2").replace(/([^\w\$])\$args([^\w\$])/g, "$1arguments$2").replace(/([^\w\$])\$doc([^\w\$])/g, "$1document$2").replace(/([^\w\$])\$win([^\w\$])/g, "$1window$2").replace(/([^\w\$])\$nav([^\w\$])/g, "$1navigator$2").replace(/([^\w\$])\$loc([^\w\$])/g, "$1location$2").replace(/([^\w\$])\$cont([^\w\$])/g, "$1continue$2").replace(/([^\w\$])\$con([^\w\$])/g, "$1console$2").replace(/([^\w\$])\$(#|[Oo]bj)([^\w\$])/g, "$1Object$3").replace(/\.\$id([^\w\$])/g, ".getElementById$1").replace(/\.\$class([^\w\$])/g, ".getElementsByClassName$1").replace(/\.\$tag([^\w\$])/g, ".getElementsByTagName$1").replace(/\.\$html([^\w\$])/g, ".innerHTML$1").replace(/\.\$text([^\w\$])/g, ".innerText$1").replace(/\.\$val([^\w\$])/g, ".value$1").replace(/\.\$qy([^\w\$])/g, ".querySelector$1").replace(/\.\$Qy([^\w\$])/g, ".querySelectorAll$1").replace(/<\-([^\w\$])/g, "return$1").replace(/([\:\=,]\s*)\$([^\(\)\{\}\[\]\n]+)(\s*[\:\{])/g, "$1function($2) {").replace(/\$([a-z\$_][\w\$]*)\s+(.+)(\s*[\:\{])/gi, "function $1($2) {").replace(/\$([a-z\$_][\w\$]*)(\s*[\:\{])/gi, "function $1() {").replace(/\$(\s*[\:\{])/g, "function() {").replace(/function\s\(/g, "$(").replace(/@(.+)\:/g, "case $1:").replace(/@([a-z\$_][\w\$]*\s*[^\:])/gi, "this.$1").replace(/;([\s,\}\)]+)/g, "}$1").replace(/,,,,/g, ":").replace(/,,,/g, "?").replace(/,,/g, ";").replace(/\/\/\!/g, '"use strict"; // use strict embed').replace(/(?!\?)([\w\$]+)\s*\:\s*(.+)([^,\{\[\(])(\s$)/gi, "$1: $2$3,$4");
  // [experimental] enable/disable features via ## +feature / ## -feature
  rq = /\/\/\s*\-\s*(eval|ugly|advance|html-editor|js-editor|clean|math|hide|legacy|wordy|js-unit)/;
  for (;rq.test(__); ) {
    // disable attributes
    __.replace(rq);
    var k = RegExp.$1;
    __ = __.replace(rq, "\b// disable " + k + "\b");
  }
  rq = /\/\/\s*\+\s*(eval|ugly|advance|html-editor|js-editor|clean|math|hide|legacy|wordy|js-unit)/;
  for (;rq.test(__); ) {
    // enable attributes
    __.replace(rq);
    var k = RegExp.$1;
    features.push(k);
    __ = __.replace(rq, "\b// enable " + k + "\b");
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
  for (;__.match(__sch__); ) {
    // put so.t.ch back
    S = +__.match(__sch__)[0].replace(/\D/g, "");
    __ = __.replace(__sch__, sch_[S]);
  }
  for (;__.match(__cmm__); M++) {
    // remove multi-line comments
    __.replace(__cmm__);
    cmm_.push(RegExp.$1.replace(/#\*#?/g, "/*").replace(/##|\/$/, "*\b/"));
    __ = __.replace(__cmm__, "\bcmm[" + M + "]\b");
  }
  __cmm__ = /([\b]cmm\[\d+\][\b])/m;
  for (;__.match(__cms__); L++) {
    // remove single line comments
    __.replace(__cms__);
    cms_.push(RegExp.$1.replace(/##/g, "//"));
    __ = __.replace(__cms__, "\bcms[" + L + "]\b");
  }
  __cms__ = /([\b]cms\[\d+\][\b])/;
  for (;__.match(__dq__); x++) {
    // remove double-quotes
    __.replace(__dq__);
    dq_.push(RegExp.$1);
    __ = __.replace(__dq__, "\bdq[" + x + "]\b");
  }
  __dq__ = /([\b]dq\[\d+\][\b])/;
  for (;__.match(__sq__); y++) {
    // remove single-quotes
    __.replace(__sq__);
    sq_.push(RegExp.$1);
    __ = __.replace(__sq__, "\bsq[" + y + "]\b");
  }
  __sq__ = /([\b]sq\[\d+\][\b])/;
  for (;__.match(__ga__); z++) {
    // remove grave-accent quotes
    __.replace(__ga__);
    ga_.push(RegExp.$1);
    __ = __.replace(__ga__, "\bga[" + z + "]\b");
  }
  __ga__ = /([\b]ga\[\d+\][\b])/;
  for (;__.match(__rx__); a++) {
    // remove regular
    __.replace(__rx__);
    rx_.push(RegExp.$1);
    __ = __.replace(__rx__, "\bre[" + a + "]\b");
  }
  __rx__ = /([\b]re\[\d+\][\b])/;
  // other features
  if (_legacy) {
    // JS related
    __ = __.replace(/([a-z\$_@][\w\.\$]*)\s*\~\=\s*([\w\d\$]+)/g, "$1 = -($1 - $2)").replace(/([a-z\$_@][\w\.\$]*)\s*([\&\|])\=/gi, "$1 = $1 $2$2").replace(/(\s*)([a-z\$_][\w\.\$]*)\s*\^\=(.+)/gi, "$1var $2,,\n$1$2 = ($2 !== null)?\n$1  $3:\n$1$2").replace(/(\s*)([a-z\$_][\w\.\$]*)\s*\?\=(.+)/gi, "$1var $2,,\n$1$2 = ($2 === null)?\n$1  $3:\n$1$2").replace(/\[(\-?[\w\$\.]+)\.\.(\-?[\w\$\.]+)\]/gi, ".slice($1, $2)").replace(/\[\.\.(\-?[\w\$]+)\]/gi, ".slice(0, $1)").replace(/\[(\-?[\w\$]+)\.\.\]/gi, ".slice($1)").replace(/\[\.\]/g, ".slice(0)").replace(/\[\*\]<(.+?)>/g, ".split($1)").replace(/\[\*\]/g, '.split("")').replace(/\[\+\]<(.+?)>/g, ".concat($1)").replace(/\[\+\+\]<(.+?)>/g, ".push($1)").replace(/\[<\]/g, ".shift()").replace(/\[>\]<(.+?)>/g, ".unshift($1)").replace(/\[~\]<(.+?)>/g, ".every($1)").replace(/\[&\]<(.*?)>/g, ".join($1)").replace(/\[&\]/g, '.join(",")').replace(/\[\+\?\s*\]<(.+?)>/g, ".indexOf($1)>-1").replace(/\[\?\s*\]<(.+?)>/g, ".indexOf($1)").replace(/\[\-\?\s*\]<(.+?)>/g, ".lastIndexOf($1)").replace(/\[\=\]/g, ".reverse()").replace(/\[\^\]<(.*?)>/g, ".sort($1)").replace(/\[\^\]/g, ".sort()").replace(/\[\-\]/g, ".pop()");
    // [-]
    for (rq = /(\x20*)case[\b]?\s+(\d+)\.\.(\d+)\:/; rq.test(__); ) __ = __.replace(rq, function(e) {
      e = [];
      for (var r, t, _ = r = +RegExp.$2; _ <= (t = +RegExp.$3) && _ > 0; _ += t - r > 1 ? 1 : -1) e.push(RegExp.$1 + "case " + _ + ":");
      return e.toString().replace(/,/g, "\n");
    });
    __ = __.replace(/\.([a-z\$_][\w\$]*)\s+([a-z\$_][\w\$]*)\s*\{/gi, ".$1 $2 {").replace(/([^\w\$])(abstract|arguments|boolean|break|byte|case|catch|char|class|const|continue|debugger|delete|do|double|else|enum|eval|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|let|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|undefined|var|void|volatile|while|with|yield)\s*\:/g, '$1"$2":').replace(/\.(abstract|arguments|boolean|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|eval|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|let|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|undefined|var|void|volatile|while|with|yield)([^\w\$])/g, '["$1"]$2').replace(/\(\s*(abstract|boolean|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|export|extends|final|finally|float|for|goto|if|implements|import|in|instanceof|int|interface|let|long|native|new|null|package|private|protected|public|return|short|static|switch|synchronized|throw|throws|transient|try|typeof|undefined|var|volatile|while|with|yield)\s*\)/g, " $1 ").replace(/([a-z\$_][\w\$]*)\.\.([a-z\$_][\w\$]*)/gi, "$1().$2");
    // a..b
    for (;__.match(/([1-9][\d]*)\[\]/); ) {
      // dimension arrays
      __.replace(/([1-9][\d]*)\[\]/);
      k = +RegExp.$1 - 1;
      __ = __.replace(/([0-9][\d]*)\[\]/, "[/?/]");
      for (var x = 0; k - 1 > x; x++) __ = __.replace(/\/\?\//, "[/?/]");
      __ = __.replace(/\/\?\//, "[]");
    }
  }
  if (_advance) {
    __ = __.replace(/(\W)\.([\s\w\$]+)\s+([\s\w\$]+)\{/gi, runtime.has("1.6") ? "$1class $2 extends $3{" : "$1var $2_class --> new $3.apply(null, arguments);\n$1function $2() {\n$1  $2_class.apply(null, arguments)").replace(/(\W)\.([\s\w\$]+)\{/gi, runtime.has("1.6") ? "$1class $2{" : "$1function $2() {").replace(/([\x20\t]*)@\((.*?)\)/g, runtime.has("1.6") ? "$1constructor($2)" : "$1self = this;\n$1this.constructor = function($2)").replace(/\*\./g, "super.").replace(/(\s*)(.+)\s*\=>\s*([a-z\$_][\w\$]*)/gi, runtime.has("1.5") ? "$1const $3 = $2" : "$1var $3 = $2").replace(/([\s\w\$]+)\s*\-\->(.+)/gi, runtime.has("1.6") ? "$1 = () => $2" : "$1 = function() { return $2 }").replace(/([a-z\$_][\w\$]*|\(.+?\))\s*\->/g, runtime.has("1.6") ? "$1 =>" : "function($1)".replace(/(\(+|\)+)/g, "$1")).replace(/\$\*(.*?)\s*[\:\{]/g, "void function($1) {").replace(/(?:var\s+)?prom\s+([a-z\$_][\.\w\$]*)/gi, "PROM <$1>");
    if (_legacy && !runtime.has("1.7")) {
      // empty beginning splats
      for (// advance + legacy threads
      // Splats
      var rq = /\(\s*\.\.\.,\s*([a-z\$_][\w\$,\s]*)\s?\)\s*\{/i; rq.test(__); ) {
        // splats
        __.replace(rq);
        var k = RegExp.$1.split(",");
        __ = __.replace(rq, "( ){\n/splat/");
        for (var e = 0; e < k.length; e++) __ = __.replace(/\/splat\//, "  var " + k[e].replace(/\s/g, "") + " = <@>[<@>.length-" + (e + 1) + "];\n/splat/");
        __ = __.replace(/\/splat\//g, "");
      }
      rq = /\(\s*([a-z\$_][\w\$]*)\.\.\.\s*\)\s*\{/i;
      // only splats
      __.replace(rq);
      __ = __.replace(rq, "( ){\n/splat/").replace(/\/splat\//, "  var " + RegExp.$1 + " = <@>;");
      rq = /\(\s*([a-z\$_][\w\$]*)\.\.\.,\s*([a-z\$_][\w\$,\s]*)\s?\)\s*\{/i;
      // beginning splats
      for (;rq.test(__); ) {
        // splats
        __.replace(rq);
        var k = RegExp.$1, K = RegExp.$2.split(",");
        __ = __.replace(rq, "( ){\n/splat/");
        __ = __.replace(/\/splat\//, "  var " + k.replace(/\s/g, "") + " = (" + K.length + " <= <@>.length)?<&>(<@>, 0, <@>.length-" + K.length + "):[];\n/splat/");
        for (var e = K.length; e > 0; e--) __ = __.replace(/\/splat\//, "  var " + K[e - 1].replace(/\s/g, "") + " = <@>[<@>.length-" + (K.length - e + 1) + "];\n/splat/");
        __ = __.replace(/\/splat\//g, "");
      }
      rq = /\(\s*(.+),\s*\.\.\.\s*\)\s*\{/i;
      // empty ending splats
      for (;rq.test(__); ) {
        // splats
        __.replace(rq);
        var k = RegExp.$1.split(",");
        __ = __.replace(rq, "( ){\n/splat/");
        for (var e = 0; e < k.length; e++) __ = __.replace(/\/splat\//, "  var " + k[e].replace(/\s/g, "") + " = <@>[" + e + "];\n/splat/");
        __ = __.replace(/\/splat\//g, "");
      }
      rq = /\(\s*(.+),\s*([a-z\$_][\w\$,\s]*)\.\.\.\s*\)\s*\{/i;
      // ending splats
      for (;rq.test(__); ) {
        // splats
        __.replace(rq);
        var k = RegExp.$1.split(","), K = RegExp.$2;
        __ = __.replace(rq, "( ){\n/splat/");
        for (var e = 0; e < k.length; e++) __ = __.replace(/\/splat\//, "  var " + k[e].replace(/\s/g, "") + " = <@>[" + e + "];\n/splat/");
        __ = __.replace(/\/splat\//, "  var " + K.replace(/\s/g, "") + " = (" + (k.length + 1) + " <= <@>.length)?<&>(<@>, " + k.length + "):[];");
      }
      rq = /\(\s*(.+),\s*\.\.\.,\s*(.+)\s*\)\s*\{/i;
      // empty middle splats
      for (;rq.test(__); ) {
        // splats
        __.replace(rq);
        var K = RegExp.$1.split(","), k = RegExp.$2.split(",");
        __ = __.replace(rq, "( ){\n/splat/");
        for (var e = 0; e < K.length; e++) __ = __.replace(/\/splat\//, "  var " + K[e].replace(/\s/g, "") + " = <@>[" + e + "];\n/splat/");
        for (var e = k.length; e > 0; e--) __ = __.replace(/\/splat\//, "  var " + k[e - 1].replace(/\s/g, "") + " = <@>[<@>.length-" + e + "];\n/splat/");
        __ = __.replace(/\/splat\//g, "");
      }
      rq = /\(\s*(.+),\s*([a-z\$_][\w\$,\s]*)\.\.\.,\s*(.+)\s*\)\s*\{/i;
      // middle splats
      for (;rq.test(__); ) {
        // splats
        __.replace(rq);
        var K = RegExp.$1.split(","), j = RegExp.$2, k = RegExp.$3.split(",");
        __ = __.replace(rq, "( ){\n/splat/");
        for (var e = 0; e < K.length; e++) __ = __.replace(/\/splat\//, "  var " + K[e].replace(/\s/g, "") + " = <@>[" + e + "];\n/splat/");
        __ = __.replace(/\/splat\//, "  var " + j.replace(/\s/g, "") + " = (" + (K.length + k.length + 1) + " <= <@>.length)?<&>(<@>, " + K.length + ", <@>.length-" + k.length + "):[];\n/splat/");
        for (var e = K.length - 1; e < K.length + k.length - 1; e++) __ = __.replace(/\/splat\//, "  var " + k[e].replace(/\s/g, "") + " = <@>[<@>.length-" + (k.length - e) + "];\n/splat/");
        __ = __.replace(/\/splat\//g, "");
      }
      __ = __.replace(/([a-z\$_][\w\$\.]*)\s*\(?\s*([a-z\$_][\w\$]*)\.\.\.\s*\)?/gi, "$1.apply(null, $2)\n").replace(/([a-z\$_][\w\$\.]*)\s*\(?(.+),\s*([a-z\$_][\w\$]*)\.\.\.\s*\)?/gi, "$1.apply(null, <&>(<&>($3)))\n").replace(/([a-z\$_][\w\$\.]*)\s*\(?([a-z\$_][\w\$]*)\.\.\.,\s*(.+?)\s*\)?/gi, "$1.apply(null, <&>($3).concat([$2]))\n").replace(/([a-z\$_][\w\$\.]*)\s*\(?\s*(.+),\s*([a-z\$_][\w\$,\s]*)\.\.\.,\s*(.+?)\s*\)?/gi, "$1.apply(null, <&>($2).concat(<&>($3)))\n").replace(/<@>/g, "arguments").replace(/<\&>/g, "[].slice.call");
    } else if ( _legacy) {
      __ = __.replace(/([a-z\$_][\w\$]*)\.\.\./gi, "...$1")
    }
    // Prom "Gussets"
    for (;__.match(__tch__); ) {
      // put to.t.ch back
      T = +__.match(__tch__)[0].replace(/\D/g, "");
      __ = __.replace(__tch__, "<" + tch_[T] + ">");
    }
    for (var n = /PROM\s<([a-z\$_][\w\$]*)>/i; __.match(n); ) {
      __ = __.replace(n, "<\b$1>");
      var m = RegExp.$1, // name
      R = RegExp("(\\x20*)function\\s+" + m.replace(/\$/g, "\\$") + "\\s*\\(<\\.\\.\\.>\\s*\\)\\s*\\{"), r = RegExp("(\\x20*)function\\s+" + m.replace(/\$/g, "\\$") + "\\s*\\(\\s*<(.*)>\\s*\\)\\s*\\{");
      if (-1 === window.indexOf("@" + m)) {
        window["@" + m] = {
          args: [],
          max: [],
          name: m,
          prototype: {},
          splat: R.test(__),
          stamp: new Date(),
          toString: function() {
            return function() {};
          }
        };
        __ = __.replace(R, "function __" + m + "() {");
        for (;r.test(__); ) {
          __.replace(r, "$1");
          var k = RegExp.$2.split(","), K = k.length, s = RegExp.$1, j = k, t = 0, T = [], E = [], u = 0, U = !1;
          K = "" === k ? 0 : K;
          __ = __.replace(r, s + "function " + m + "__" + K + "\bu\b(/?/) {\n" + k.every(function(e) {
            var r = !1;
            e = e.replace(/\*/, "Any").replace(/\((.+)\)/, " $1").replace(/^\s(.+)/, "$1");
            if (r = e.split(" ").length > 1) e = e.split(" ");
            return T.push(!r ? e : -1 === (E.push(e[0]), e[0]).indexOf("Any") ? e[1] : e[1]),
            !0;
          }).toString().replace(/true/, "")).replace(/\/\?\//, T.join(", "));
          window["@" + m].args.push(E);
          window["@" + m].max.push(K);
        }
        r = RegExp("<[\\b](" + m.replace(/\$/g, "\\$") + ")>");
        __ = __.replace(r, "function $1(){\n" + (s += "  ") + "switch(" + ((U = "" !== (E + "").replace(/,/g, "")) ? "tux.typeOf.apply(null, arguments)" : "arguments.length") + "){\n" + s + "/\b/\n  }\n}\n");
        for (var K = 0; K < window["@" + m].max.length; K++) {
          var g = window["@" + m].max[K], G = (U ? (g = '"' + window["@" + m].args[u] + '"',
          window["@" + m].args[u]) : g) + "", E = [];
          __ = __.replace(RegExp(m.replace(/\$/g, "\\$") + "__" + window["@" + m].max[K] + "[\\b]u[\\b]"), U ? m + "__" + window["@" + m].args[u++].toString().replace(/,/g, "_") : m + "__" + window["@" + m].max[K]).replace(/\/[\b]\//, s + "case " + (g = (g + "").toUpperCase()).split(",").every(function() {
            for (var e = g.split(","), r = 0; r < e.length; r++) {
              if (/ANY/.test(e[r])) e[r] = 0 !== r ? '"+tux.typeOf(arguments[' + r + '])+"' : 'tux.typeOf(arguments[0])+"';
              if (r === e.length - 1) e[r] = e[r].replace(/\+"$/, "");
            }
            return E = e, !0;
          }).toString().replace(/true/, E) + ":\n" + s + "    return " + m + "__" + G.replace(/,/g, "_") + ".apply(null, arguments);\n" + s + "    break;\n  /\b/");
        }
        __ = __.replace(/\n?(\s*)\/[\b]\//, R ? "\n$1  default:\n$1    if(typeof __" + m + " === '" + typeof Function() + "'){\n$1      return __" + m + ".apply(null, arguments)\n$1    } else {\n$1      return Error('\b@\b" + m + " (" + tux["typeof"](window["@" + m].args.join("; \b")).replace(/,/g, ", ") + " > ['+tux.typeOf.apply(null, arguments)+'])\\n //No//case//found//')\n$1    }" : "");
      }
    }
  }
  if (_math) {
    __ = __.replace(/\|\s*\|/g, "/or/").replace(/\|\=/g, "/ore/").replace(/([a-z\$_][\w\$]*)\((.+)\)\s*\=\s*(.+)/gi, "function $1($2){return $3}\n").replace(/([^a-z\$_]\d+)(\x20*)([a-z\$_@][\w\$]*)/gi, "$1$2*$2$3").replace(/([\w\$\-\.@]+)\s*~\s*([\w\$\-\.@]+)/gi, "(($1 % $2 + $2) % $2)").replace(/\|(.+?)\|/g, " @.abs($1)").replace(/([^\\][\w\$@]+)\/\?\n?(.+?)\//gi, " @.pow($2, 1/$1)").replace(/\/\?\n?(.+?)\//g, " @.sqrt($1)").replace(/([\w\.\$_\-@]+)\s*(?:\^|\*\*)\s*([\w\.\$_\-@]+)/gi, " @.pow($1, $2)").replace(/([\w\$\-@]+)\s*%%\s*([\w\$\-@]+)/gi, " @.floor($1 / $2)").replace(/(\W)log\s(.+)\s\((.+)\)/g, "$1(@.log($3) / @.log($2))").replace(/@\.([a-z\$_][\w\$]*)/gi, "Math.$1").replace(/\/or\//g, "||").replace(/\/ore\//g, "|=").replace(/0\s\*\s([ex])(\-?\d+)/g, "0$1$2").replace(/(\d)\s\*\se(\-?\d+)/g, "$1e$2");
    // fix e numbers
    Math.modulo = function(e, r) {
      e = +e;
      // Number(a)
      r = +r;
      // Number(b)
      return (e % r + r) % r;
    };
  }
  if (_wordy) {
    // words
    __ = __.replace(/var\s(does|do|NOT|AND|XOR|OR|isnt|on|yes|good|off|no|bad|equals?|is|when|where|from|unless|until|the|maybe)/g, "#0$1").replace(/(does|do|NOT|AND|XOR|OR|isnt|on|yes|good|off|no|bad|equals?|is|when|where|from|unless|until|the|maybe)(\s*\=)/g, "#00$1$2").replace(/\.(does|do|NOT|AND|XOR|OR|isnt|on|yes|good|off|no|bad|equals?|is|when|where|from|unless|until|the|maybe)/g, "#000$1").replace(/([^a-z\$_])(does|do|NOT|AND|XOR|OR|isnt|on|yes|good|off|no|bad|equals?|is|when|where|from|unless|until|the|maybe)\((.+?)\)/g, "$1$2 $3").replace(/\s(does\snot|doesnt|NOT)\s/g, "!").replace(/\s?(does|do)\s?\!\s/g, "!").replace(/\sdoes\s/g, "!!").replace(/([^\w\$])(on|yes|good)([^\w\$])/g, "$1true$3").replace(/([^\w\$])(off|no|bad)([^\w\$])/g, "$1false$3").replace(/([^\w\$])(maybe)([^\w\$])/g, "$1tux.random()$3").replace(/\s(isnt|is\snot)\s/g, " !== ").replace(/\!\s*(equals|equal|is)\s/g, " !== ").replace(/\s(equals|equal|is)\s/g, " === ").replace(/\sthe\s([a-z\$_][\w\$]*)/gi, " $1").replace(/([^a-z\$_])AND([^a-z\$_])/gi, "$1 && $2").replace(/(\!?)\sAND(\W)/g, "&& $2$1").replace(/([\w\$]+)\s+XOR\s+([\w\$]+)/gi, "$1,,,,,$2").replace(/([^a-z\$_])OR([^a-z\$_])/gi, "$1 || $2").replace(/(\!?)\sOR(\W)/g, " ||$2$1").replace(/(\s*)(var|const)\s+([@\w\$\.]+)\s*([\*\/\+\-\%\&\|]?)\=\s*(.+)\s+(if|when|where)(\W.+)([\.;][^\w\$])\)?/gi, "$1$2 $3;\n$1if $7 {\n$1  $3 $4= $5\n$1}\n").replace(/(\s*)([@\w\$\.]+)\s*([\*\/\+\-\%\&\|]?)\=\s*(.+)\s+(if|when|where)(.+)([\.;][^\w\$])\)?/gi, "$1if $6 {\n$1  $2 $3= $4\n$1}").replace(/(\s*)(.+)\s+(if|when|where)(.+)([\.;][^\w\$])\)?/g, "$1if $4 {\n$1  $2\n$1}\n").replace(/(\s*)(var|const)\s+([@\w\$\.]+)\s*([\*\/\+\-\%\&\|]?)\=\s*(.+)\s+(unless)(.+)([\.;][^\w\$])\)?/gi, "$1$2 $3;\n$1if !$7 {\n$1  $3 $4= $5\n$1}\n").replace(/(\s*)([@\w\$\.]+)\s*([\*\/\+\-\%\&\|]?)\=\s*(.+)\s+(unless)(.+)([\.;][^\w\$])\)?/gi, "$1if !$6 {\n$1  $2 $3= $4\n$1}\n").replace(/(\s*)(.+)\s+(unless)(.+)([\.;][^\w\$])\)?/g, "$1if !$4 {\n$1  $2\n$1}\n").replace(/if\s+(.+)\s+then\s+(.+)\s+else\s+(.+)/g, "($1),,,\n    $2,,,,\n  $3").replace(/(:|\})\s*else\s*(if|when|where)(.+)([\:\{])/g, "} else if ($3) {").replace(/unless\s+(.+)([\:\{])(\s+)/g, "if !$1 {\n$3").replace(/if([^\w\$])(.+)([^\)]\s*)\{/g, "if($1$2$3) {").replace(/if([^\w\$])(.+)([^\)]\s*)\{/g, function(e) {
      var r = e.replace(/\{$/, ""), t = 0, _ = "", a = "", n = 0;
      e = r.replace(/\(|\)/g, function(e) {
        if ("(" === e) t--; else t++;
      });
      if (0 === t) return r + "{"; else n = t > 0 ? -1 : 1;
      e = r;
      for (0 > t ? _ = "\\(" : a = "\\)"; 0 != t; t += n) if (/\($/.test(e)) e = e.replace(/\($/, ""); else e = e.replace(RegExp(_ + "(.+?)" + a), "$1");
      return "if (" + e.replace("if", "").replace(/\(\s*/g, "(").replace(/\s*\)/g, ")") + ") {";
    }).replace(/([\.;\}]\s+)else(\s+[^\{])/g, "} else {$2").replace(/([^\}]\s+)else(\s+[^\{])/g, "$1} else {$2").replace(/([a-z\$_][\w\$\.]*)\s*\=\s*(.+)\s+in\s+([a-z\$_][\w\$\.]*)([\.;\n]\s?)/gi, "$1 = $3[$2]\n").replace(/([a-z\$_][\w\$\.]*)\s*\=\s*(.+)\s+from\s+([a-z\$_][\w\$\.]*)([\.;\n]\s?)/gi, "$1 = $3.indexOf($2)\n").replace(/(\s*)(.+)\s+from\s+([a-z\$_][\w\$\.]*)\s+while\s+([a-z\$_][\w\$\.]*)([^;\n]+)([\.;\n]\s?)/gi, "$1for(var $3_<!> = 0; $3_<!> < $3.length; $3_<!>++){\n$1  var $4 = $3[$3_<!>],,\n$1  if($4$5){\n$1    $2\n$1  }\n$1}\n").replace(/(\s*)(.+)\s+from\s+([a-z\$_][\w\$\.]*)\s+while\s+([a-z\$_][\w\$\.]*)([\.;\n]\s?)/gi, "$1for(var $3_<!> = 0; $3_<!> < $3.length; $3_<!>++){\n$1  var $4 = $3[$3_<!>],,\n$1  if($4){\n$1    $2\n$1  }\n$1}\n").replace(/(\s*)([a-z\$_][\w\$\.]*)\s+([a-z\$_][\w\$\.]*)([^\)]*)\s+from\s+([a-z\$_][\w\$\.]*)([\.;\n]\s?)/gi, "$1for(var $5_<!> = 0; $5_<!> < $5.length; $5_<!>++){\n$1  var $3 = $5[$5_<!>],,\n$1  $2($3)\n$1}\n").replace(/(\s*)(.+)\s+from\s+\[([\w\W]+)\]\s+while\s+([a-z\$_][\w\$\.]*)([^;\n]+)([\.;\n]\s?)/gi, "$1var <?> = [$3],,\n$1for(var <?>_<!> = 0; <?>_<!> < <?>.length; <?>_<!>++){\n$1  var $4 = <?>[<?>_<!>],,\n$1  if($4$5){\n$1    $2\n$1  }\n$1}\n").replace(/(\s*)(.+)\s+from\s+([a-z\$_][\w\$\.]*)\s+while\s+\[([\w\W]+)\]([\.;\n]\s?)/gi, "$1var <?> = [$3],,\n$1for(var <?>_<!> = 0; <?>_<!> < <?>.length; <?>_<!>++){\n$1  var $4 = <?>[<?>_<!>],,\n$1  if($4){\n$1    $2\n$1  }\n$1}\n").replace(/(\s*)([a-z\$_][\w\$\.]*)\s+([a-z\$_][\w\$\.]*)([^\)]*)\s+from\s+\[([\w\W]+)\]([\.;\n]\s?)/gi, "$1var <?> = [$5],,\n$1for(var <?>_<!> = 0; <?>_<!> < <?>.length,, <?>_<!>++){\n$1  var $3 = <?>[<?>_<!>],,\n$1  $2($3)\n$1}\n").replace(/(\s*)(?:var\s)?([a-z\$_][\w\$\.]*)\s*\+?\=\s*(?!var\s?)([a-z\$_][\w\$\.]*)\s+in\s+([a-z\$_][\w\$\.]*)\s+while\s+(in|\.\.\.?)([\.;\n]\s?)/gi, "$1var $2 = [],,\n$1for(var $3 in $4){\n$1  $2.push($4[$3])\n$1}\n").replace(/(\s*)(?:var\s)?([a-z\$_][\w\$\.]*)\s*\+?\=\s*(?!var\s?)([a-z\$_][\w\$\.]*)\s+in\s+([a-z\$_][\w\$\.]*)\s+while\s+\2\s+in\s+\3([\.;\n]\s?)/gi, "$1var $2 = [],,\n$1for(var $3 in $4){\n$1  $2.push($4[$3])\n$1}\n").replace(/(\s*)(?:var\s)?([a-z\$_][\w\$\.]*)\s*\+?\=\s*(?!var\s?)([a-z\$_][\w\$\.]*)\s+in\s+([a-z\$_][\w\$\.]*)([\.;\n]\s?)/gi, "$1var $2 = [],,\n$1for(var $3 in $4){\n$1  $2.push($4[$3])\n$1}\n").replace(/(\s*)([a-z\$_].+)\s+while\s+([^;\n]+)([\.;\n]\s?)/gi, "$1while($3){\n$1  $2\n$1}\n").replace(/(\s*)([a-z\$_].+)\s+until\s+([^;\n]+)([\.;\n]\s?)/gi, "$1while(!$3){\n$1  $2\n$1}\n");
    for (k = /\-?for\s+([^\n"'`,;]+)([,;]+)([^\n"'`,;]+)\2([^\n"'`,;]+)\2([^\n"'`,;]+)\s+([\:\{])/; k.test(__); ) __ = __.replace(k, function(e) {
      var r = RegExp.$1, t = RegExp.$3, _ = RegExp.$4, a = RegExp.$5, n = "-" !== e[0] || +_ > +t ? "<" : ">", s = "<" === n ? "+" : "-";
      return "for(var " + r + " = " + t + ",, " + r + n + _ + ",, " + r + s + "=" + a + ") {";
    });
    for (k = /\-?for\s*\s+([^\n"'`,;]+)([,;]+)([^\n"'`,;]+)\2([^\n"'`,;]+)\s+([\:\{])/; k.test(__); ) __ = __.replace(k, function(e) {
      var r = RegExp.$1, t = RegExp.$3, _ = RegExp.$4, a = "-" !== e[0] || +t > 0 ? "<" : ">", n = "<" === a ? "+" : "-";
      return "for(var " + r + " = 0,, " + r + a + t + ",, " + r + n + "=" + _ + ") {";
    });
    for (k = /\-?for\s*\s+([^\n"'`,;]+)([,;]+)([^\n"'`,;]+)\s+([\:\{])/; k.test(__); ) __ = __.replace(k, function(e) {
      var r = RegExp.$1, t = RegExp.$3, _ = "-" !== e[0] || +t > 0 ? "<" : ">", a = "<" === _ ? "++" : "--";
      return "for(var " + r + " = 0,, " + r + _ + t + ",, " + r + a + ") {";
    });
    __ = __.replace(/(\s*)for\s*\s+(var\s+)?([a-z\$_][\w\$]*)(?:\s+in\s+|\s*\:\s*)([a-z\$_][\w\$]*)\s+([\:\{])/gi, runtime.has("1.4") ? "$1for($2$3 in $4) {" : "$1for($2$3_in = 0,, $4_in = Array($4), $3_in < $4_in.length,, $3_in++) {\n$1  var $3 = $4_in[$3_in],,").replace(/(\s*)for\s+([a-z\$_][\w\$]*)(?:\s+in\s+|\s*\:\s*)([a-z\$_][\w\$]*)\s+(?:do|\?)\s+(.+)/gi, "$1for(var $2 = 0,, $2 < $3.length,, $2++) {\n$1  $4\n$1}\n").replace(/\sdo\:?\s*\n/g, "do {").replace(/while\s+(.+?)([\{;\n])/g, "while($1)$2").replace(/until\s+(.+?)([\{;\n])/g, "while(!$1)$2").replace(/switch\s+(.+)([\:\{])/g, "switch($1) {").replace(/\(\s*([\w\$\.])\s*(\&\&|\|\|)\s*([\w\$\.])\s*([\=\!]\=+)\s*([^\)]+?)\s*\)/gi, "($1 $4 $5 $2 $3 $4 $5)").replace(/([\w\$\.]+)\s*(\&\&|\|\|)\s*([\w\$\.]+)\s?\!\!\s?(exists?)/gi, "(typeof ($1 $2 $3) !== '<#>' && ($1 $2 $3) !== null)").replace(/([\w\$\.]+)\s*(\&\&|\|\|)\s*([\w\$\.]+)\s?\!\s?(exists?)/gi, "(typeof ($1 $2 $3) === '<#>' || ($1 $2 $3) === null)").replace(/([\w\$\.]+)\s*(\&\&|\|\|)\s*([\w\$\.]+)\s+(exists?)/gi, "(typeof ($1 $2 $3) !== '<#>' && ($1 $2 $3) !== null)").replace(/([\w\$\.]+)\s+\!\s?(exists?)/gi, "(typeof $1 === '<#>' || $1 === null)").replace(/([\w\$\.]+)\s+(exists?)/gi, "(typeof $1 !== '<#>' && $1 !== null)").replace(/else[-\s](if|when|where)/g, "else if").replace(/,,,,,/g, "^").replace(/,,,,/g, ":").replace(/,,,/g, "?").replace(/,,/g, ";").replace(/#000/g, ".").replace(/#00/g, "").replace(/#0/g, "var ").replace(/<\?>/g, "ANON").replace(/<\!>/g, "index_counter").replace(/<#>/g, "undefined").replace(/\(\s*([\&\|\=\!]+)\s*\)/g, "$1");
  }
  if (_legacy) {
    // expelled: "typeof, false, null, super, this, true"
    for (var L = "abstract|boolean|break|byte|case|char|class|const|continue|debugger|default|delete|do|double|else|enum|eval|export|extends|final|finally|float|function|goto|implements|import|in|instanceof|int|interface|let|long|native|new|package|private|protected|public|return|short|static|synchronized|throw|throws|transient|try|undefined|var|void|volatile|with|yield", k = /(<?[a-z\$_][\w\$]*)\x20+([\w\$@#][\w\$\.]*[^;\n\)\{]*|[\b]([ds]q|ga|re)\[\d+][\b])/i; k.test(__); ) {
      // experimental [apply without ()] // all godets
      var $1 = RegExp.$1, $2 = RegExp.$2, R = RegExp("([^\\w\\$]|^)(" + L + ")([^\\w\\$]|$)"), _1 = L.split("|").indexOf($1), _2 = L.split("|").indexOf($2);
      if (-1 === _1 && !R.test($2) && -1 === "typeof false null true var".split(" ").indexOf($1)) __ = __.replace(k, "$1($2)").replace(/\(\s+/g, "(").replace(/\s+\)/g, ")"); else __ = __.replace(k, "$1//$2");
    }
    __ = __.replace(/\/\//g, " ");
  }
  if (_advance) __ = __.replace(/([a-z\$_][\w\$]*)\s*\((.+)\)\s*\{/gi, runtime.has("1.6") ? "$1 ($2) {" : "this.$1 = function($2) {").replace(/this\.function\s*\=\s*function/g, "function").replace(/this\.(abstract|boolean|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|export|extends|final|finally|float|for|goto|if|implements|import|in|instanceof|int|interface|let|long|native|new|null|package|private|protected|public|return|short|static|switch|synchronized|throw|throws|transient|try|typeof|undefined|var|volatile|while|with|yield)\s*\=\s*function/g, "$1").replace(/function\s+this\.([a-z\$_][\w\$]*)\s+\=\s+function/g, "function $1");
  if (_ugly) {
    __ = __.replace(/([^\:])\/\/(.+)/g, "$1/*$2*/").replace(/\*\/(\s*)\/\*/g, "$1").replace(/([^\w\$])undefined([^\w\$])/g, "$1void 0$2").replace(/([^\w\$])(true|\!false|\!\!true)([^\w\$])/g, "$1!0$2").replace(/([^\w\$])(false|\!true|\!\!false)([^\w\$])/g, "$1!1$2").replace(/([^\w\$])while\s*\((.+)\s?\)/g, "$1for(;$2;)").replace(/([^\w\$])Number\s*\(/g, "$1(+").replace(/\.toString\s*\(\s*\)/g, '+""').replace(/([\&\|])\1/g, "$1").replace(/([\+\-])\s*\=\s*1(\D)/g, "$1$1$2").replace(/([a-z\$_][\w\$]*)\s*\=\s*\1\s*([\&\|]+|[\*\/\+\-\%])/gi, "$1 $2= ");
    for (var zero = 1; __.match(/00+/); ) {
      __.replace(/00+/, "$1");
      k = RegExp.$1;
      __ = __.replace(/0(?=0)/, "/e/");
      zero++;
    }
    __ = __.replace(/\/e\/0/, "e" + zero + " ").replace(/(\/e\/)+/g, "");
    for (k = /(\d*)\.e(\d+)\s(\d+)/; k.test(__); ) __ = __.replace(k, function(e) {
      e = e.split(/[\.\s]/);
      var r = 0 == +e[0] ? e[2] : e[0] + "+" + e[2];
      return zero = -zero, r + e[1].replace("e", "e-");
    });
  }
  __ = __.replace(/\n{2,}|\n\x20+\n/g, "\n").replace(/\.(\s*)([\)\]\}])/g, "$2.$1").replace(/(\s*)\}\.\n/g, ".\n$1}").replace(/([\]\}])\s+(\)|\])/g, "$1$2").replace(/([^;\.,])\n/g, "$1;\n").replace(/,?\s*;(\s*[a-z\$_][\w\$]*)\s*\:/gi, ",$1:");
  if (_htmleditor || _jseditor) {
    __ = __.replace(/\n+/gm, "\n").replace(/\n([a-z])/gi, "\n\n$1").replace(/(.+)([\{\:])\s*\n(.+)/g, "$1$2\n  $3\bind\b");
    for (rq = /[\b]ind[\b]\n([^\}\n]+)/; rq.test(__); ) __ = __.replace(rq, function() {
      for (k = /[\b]ind[\b]\n([^\}\n]+)/; k.test(__); ) __ = __.replace(k, "\n  $1\bind\b");
      return __.replace(k, "");
    });
    __ = __.replace(/\}\n+else([^\w\$])/g, "} else$1").replace(/([;\}])(\s+|\n+)(var|const|console|if|for|switch|function|Object)([^\w\$])/g, "$1\n$3$4").replace(/([;\}])\n(if|for|switch|function|Object)([^\w\$])/g, "$1\n\n$2$3").replace(/\{\s+\}/g, "{}").replace(/function\s+([^\(\)]+?)\{/g, "function($1) {");
  }
  // rebuild
  Tuxedo.precompiled = {
    channels: {
      no: nch_
    },
    comments: {
      plural: cmm_,
      single: cms_
    },
    content: __.replace(/[\b]\.bs\./g, "\\\\").replace(/[\b]\.re\./g, "\\/").replace(/[\b]\.dq\./g, '\\"').replace(/[\b]\.sq\./g, "\\'").replace(/[\b]\.ga\./g, "\\`").replace(/[\b]\.dl\./g, "\\$").replace(/(\W)var\s*\=.+/g, "$1").replace(/@([a-z\$_][\w\$]*)/gi, "this.$1").replace(/(?![\b])@(?![\b])/g, "this").replace(/([\(\[\{,;\:\?\!\*\/\+\-\=%<>]\s*);(\s*)/g, "$1$2").replace(/;(\s*[\*\/\+\-\=%,\.\}\]\?\:]|\s*else|\s*while)/g, "$1").replace(/\*(\s*[\/\+\-%,\.\}\]\?\:]|\s*else|\s*while)/g, "$1").replace(/;(\s*[\)])/g, "$1").replace(/(\s+);(\s+)/g, "$1$2").replace(/(["'])use\sstrict\1/g, "$1use strict$1;").replace(/([^\w\$])switch\((.+)\)\s*;/g, "$1switch($2) {").replace(/([^\w\$])break([,\n])/g, "$1break;\n").replace(/,,/g, ";").replace(/;+/g, ";").replace(/([\(\[\{\:]\s*),/g, "$1").replace(/,\s*([\)\]\}])/g, "$1").replace(/([\w\$]+)@([\w\$]+)/gi, "$1.prototype.$2").replace(/([^\\])\.([\s;\}]+)/g, "$1;$2").replace(/function\s+([^\(\)]+?)\s?\{/g, "function($1) {").replace(/([\{\[\(])\n+/g, "$1\n").replace(/(\$)[\b]([1-9])/g, "$1$2").replace(/[\b](.)[\b]/g, "\\$1").replace(/;\s*[,;]/g, ";").replace(/,\s*[,;]/g, ",").replace(/\*(\s*[\&\|\!\^])/g, "$1").replace(/\$\\([1-9])/g, "$$1").replace(/^\s|\s+$/g, ""),
    regexps: rx_,
    strings: {
      "double": dq_,
      grave: ga_,
      single: sq_
    },
    threads: {
      available: "advance clean eval hide htmleditor jseditor jsunit legacy math ugly wordy".split(" "),
      disabled: function() {
        a = "advance clean eval hide htmleditor jseditor jsunit legacy math ugly wordy".split(" ");
        b = [];
        for (var x = 0; x < a.length; x++) if ("!" !== eval("_" + a[x])) b.push(a[x]);
        return b;
      }(),
      enabled: function() {
        a = "advance clean eval hide htmleditor jseditor jsunit legacy math ugly wordy".split(" ");
        b = [];
        for (var x = 0; x < a.length; x++) if ( eval("_" + a[x])) b.push(a[x]);
        return b;
      }()
    }
  };
  rq = /(abstract|boolean|byte|case|catch|char|const|continue|debugger|default|delete|do|double|else|enum|export|extends|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|let|long|native|new|null|package|private|protected|public|return|short|static|switch|synchronized|throw|throws|transient|try|typeof|undefined|var|volatile|while|with|yield|@|;|\$)/g;
  for (;__.match(__cmm__); ) {
    // put multi-line comments back
    M = +__.match(__cmm__)[0].replace(/\D/g, "");
    __ = __.replace(__cmm__, cmm_[M].replace(rq, "\b$1\b"));
  }
  for (;__.match(__cms__); ) {
    // put single line comments back
    L = +__.match(__cms__)[0].replace(/\D/g, "");
    __ = __.replace(__cms__, cms_[L].replace(rq, "\b$1\b"));
  }
  // @embroideries and fix
  __ = __.replace(/\[([^\[]+?)\]/g, function(e) {
    return e.replace(/\s*[\*,]\s*\]/g, "]").replace(/\s/g, ",").replace(/,+/g, ", ");
  }).replace(/\s*\+\s*,/g, "").replace(/(.+)\/\/(.+)([;,]+)/g, "$1$3 //$2").replace(/\/\/(.+)\n+(;\s*)+/g, "//$1").replace(/([\b]@[\b]|this\.)aut\:(.+[^,])/g, "author: $2").replace(/([\b]@[\b]|this\.)lie\:(.+[^,])/g, "license: $2").replace(/([\b]@[\b]|this\.)dat\:(.+[^,])/g, "date: $2").replace(/([\b]@[\b]|this\.)tie\:(.+[^,])/g, "time: $2").replace(/([\b]@[\b]|this\.)url\:(.+[^,])/g, "URL: $2").replace(/([\b]@[\b]|this\.)ver\:(.+[^,])/g, "Version: $2").replace(/[\b](.)[\b]/g, "$1");
  for (;__.match(__sq__); ) {
    // put single quotes back
    y = +__.match(__sq__)[0].replace(/\D/g, "");
    __ = __.replace(__sq__, sq_[y].replace(RegExp(__dq__.source, "g"), function(e) {
      return dq_[+e.replace(/\D/g, "")]
    })).replace(/''/g, "'\b'");
    if (_legacy) {
      // TS related, and interpolation
      for (;__.match(r = /([1-9][\d]*)\s*\*\s*'(.*?)'/); ) {
        // dimension strings
        __.replace(r);
        k = +RegExp.$1;
        K = RegExp.$2;
        __ = __.replace(r, "/str/");
        for (var y = 0; k > y; y++) __ = __.replace(/\/str\//, "'" + K + "' + /str/");
        __ = __.replace(/\s\+\s\/str\//, "");
      }
      __ = __.replace(/\$\{([^'\}]+?)\}/g, "' + ( $1 ) + '").replace(/''\s\+\s|\s\+\s''/g, "");
    }
  }
  for (;__.match(__dq__); ) {
    // put double quotes back
    x = +__.match(__dq__)[0].replace(/\D/g, "");
    __ = __.replace(__dq__, dq_[x]).replace(/""/g, "\"\b\"");
    if (_legacy) {
      // TS related, and interpolation
      for (;__.match(r = /([1-9][\d]*)\s*\*\s*"(.*?)"/); ) {
        // dimension strings
        __.replace(r);
        k = +RegExp.$1;
        K = RegExp.$2;
        __ = __.replace(r, "/str/");
        for (var x = 0; k > x; x++) __ = __.replace(/\/str\//, '"' + K + '" + /str/');
        __ = __.replace(/\s\+\s\/str\//, "");
      }
      __ = __.replace(/\$\{([^"\}]+?)\}/g, '" + ( $1 ) + "').replace(/""\s\+\s|\s\+\s""/g, "");
    }
  }
  __ = __.replace(/([^\\])`/g, "$1\\'");
  // embeded grave accents
  for (;__.match(__ga__); ) {
    // put grave accents back
    z = +__.match(__ga__)[0].replace(/\D/g, "");
    __ = __.replace(__ga__, ga_[z].replace(/'/g, "\b.sq.").replace(/;\n/g, " ").replace(/``/g, "`\b`"));
    if ( _legacy) {
      // TS related, and interpolation
      for (;__.match(r = /([1-9][\d]*)\s*\*\s*`(.*?)`/); ) {
        // dimension strings
        __.replace(r);
        k = +RegExp.$1;
        K = RegExp.$2;
        __ = __.replace(r, "/str/");
        for (var z = 0; k > z; z++) __ = __.replace(/\/str\//, "`" + K + "` + /str/");
        __ = __.replace(/\s\+\s\/str\//, "");
      }
      __ = __.replace(/\$\{([^`\}]+?)\}/g, runtime.has("1.6") ? "$\b{$1}" : "` + ( $1 ) + `").replace(/``\s\+\s|\s\+\s``/g, "");
    }
  }
  // Again
  for (;__.match(__sq__); ) {
    // put single quotes back, again
    y = +__.match(__sq__)[0].replace(/\D/g, "");
    __ = __.replace(__sq__, sq_[y].replace(/'/g, "\b.sq.").replace(/''/g, "'\b'"));
    if ( _legacy) // TS related, and interpolation
    __ = __.replace(/\$\{([^\}]+?)\}/g, "' + ( $1 ) + '");
  }
  for (;__.match(__dq__); ) {
    // put double quotes back, again
    x = +__.match(__dq__)[0].replace(/\D/g, "");
    __ = __.replace(__dq__, dq_[x].replace(/""/g, "\"\b\""));
    if ( _legacy) // TS related, and interpolation
    __ = __.replace(/\$\{([^\}]+?)\}/g, "' + ( $1 ) + '");
  }
  for (;__.match(__rx__); ) {
    // put regular expressions back
    a = +__.match(__rx__)[0].replace(/\D/g, "");
    __ = __.replace(__rx__, rx_[a]);
  }
  if (_legacy) {
    for (// godets
    var reg = /(["'`])(.*)\1\s+\1(.*)\1/; __.match(reg); ) {
      __.replace(reg);
      var k = RegExp.$1, K = RegExp.$2, j = RegExp.$3;
      __ = __.replace(reg, "$1$2$1 + $1$3$1");
    }
    __ = __.replace(/[\b](.)[\b]/g, "\\$1").replace(/(\\.)\+\+/g, "$1$1+").replace(/\\a/g, "[a-zA-Z]").replace(/\\A/g, "[^a-zA-Z]").replace(/\\j/g, "[a-zA-Z\\$_][\\w\\$]*").replace(/\\J/g, "[^a-zA-Z\\$_][\\w\\$]*");
    // \J
    for (k = /\\k(\[.*?\])/; k.test(__); ) __ = __.replace(k, function() {
      return RegExp.$1.toLowerCase().replace(/(\w\-\w)\1/g, "$1");
    });
    // \k
    for (k = /\\K(\[.*?\])/; k.test(__); ) __ = __.replace(k, function() {
      return RegExp.$1.toUpperCase().replace(/(\w\-\w)\1/g, "$1");
    });
  }
  __ = __.replace(/[\b]\.bs\./g, "\\\\").replace(/[\b]\.re\./g, "\\/").replace(/[\b]\.dq\./g, '\\"').replace(/[\b]\.sq\./g, "\\'").replace(/[\b]\.ga\./g, "\\`").replace(/[\b]\.dl\./g, "\\$");
  // string multi-lining
  __ = __.replace(/`([^`]+?)`/gm, runtime.has("1.6") ? "`$1`" : function(e) {
    if (/[\!\\]white-space/.test(e)) e = e.replace(/[\!\\]white-space/, "").replace(/\s+/g, " ");
    return e.replace(/\n/g, " ").replace(/`/g, "'");
  });
  __ = __.replace(/\\(.)/g, "\b$1\b").replace(/(\W)var\s*\=.+/g, "$1").replace(/@([a-z\$_][\w\$]*)/gi, "this.$1").replace(/(?![\b])@(?![\b])/g, "this").replace(/([\(\[\{,;\:\?\!\*\/\+\-\=%<>]\s*);(\s*)/g, "$1$2").replace(/;(\s*[\*\/\+\-\=%,\.\}\]\?\:]|\s*else|\s*while)/g, "$1").replace(/\*(\s*[\/\+\-%,\.\}\]\?\:]|\s*else|\s*while)/g, "$1").replace(/;(\s*[\)])/g, "$1").replace(/(\s+);(\s+)/g, "$1$2").replace(/(["'])use\sstrict\1/g, "$1use strict$1;").replace(/([^\w\$])switch\((.+)\)\s*;/g, "$1switch($2) {").replace(/([^\w\$])break([,\n])/g, "$1break;\n").replace(/,,/g, ";").replace(/;+/g, ";").replace(/([\(\[\{\:]\s*),/g, "$1").replace(/,\s*([\)\]\}])/g, "$1").replace(/([\w\$]+)@([\w\$]+)/gi, "$1.prototype.$2").replace(/([^\\])\.([\s;\}]+)/g, "$1;$2").replace(/function\s+([^\(\)]+?)\s?\{/g, "function($1) {").replace(/([\{\[\(])\n+/g, "$1\n").replace(/(\$)[\b]([1-9])/g, "$1$2").replace(/[\b](.)[\b]/g, "\\$1").replace(/;\s*[,;]/g, ";").replace(/,\s*[,;]/g, ",").replace(/\*(\s*[\&\|\!\^])/g, "$1").replace(/\$\\([1-9])/g, "\$$1").replace(/^\s|\s+$/g, "");
  // handle other features
  JSUNIT = {};
  if (_jsunit) {
    JSUNIT = {
      after: "",
      before: "",
      count: 1,
      out: function(e) {
        JSUNIT.count++;
        if (!JSUNIT.toconsole) document.body.innerHTML += e.replace(/\n\s\s/g, "\n&nbsp;&nbsp;").replace(/\n/g, "<br>"); else console.log(e);
      },
      test: {},
      toconsole: !1
    };
    for (k = /this\.(Before|After)/; k.test(__); ) __ = __.replace(k, function(e) {
      e = e.replace(/this\./, "");
      if (/Before/.test(e)) JSUNIT.before = "\n" + e + "();"; else if (/After/.test(e)) JSUNIT.after = e + "();\n";
      return "function " + e + "()";
    });
    __ = __.replace(/\(this\.Test(.*)\{/g, "(function($1){" + JSUNIT.before).replace(/\}#\);?/g, JSUNIT.after + "})();").replace(/this\.this/g, "JSUNIT").replace(/JSUNIT\.toconsole/g, function(e) {
      JSUNIT.toconsole = !0;
      return e;
    });
    JSUNIT.assert = function(e, r) {
      r = "[Test #" + JSUNIT.count + "]\n  < assert(" + tux["typeof"](e) + ", " + tux["typeof"](r) + ") >\n  recieved: " + tux["typeof"](r);
      JSUNIT.out(r + "\n");
    };
    JSUNIT.assertTrue = function(e, r) {
      if (e === !0) return JSUNIT.count++;
      r = r || "[Error: Test #" + JSUNIT.count + "]\n  < assertTrue(" + tux["typeof"](e) + ", " + tux["typeof"](r) + ") >\n  expected: true\n  recieved: " + tux["typeof"](e);
      JSUNIT.out(r + "\n");
    };
    JSUNIT.assertFalse = function(e, r) {
      if (e === !1) return JSUNIT.count++;
      r = r || "[Error: Test #" + JSUNIT.count + "]\n  < assertFalse(" + tux["typeof"](e) + ", " + tux["typeof"](r) + ") >\n  expected: false\n  recieved: " + tux["typeof"](e);
      JSUNIT.out(r + "\n");
    };
    JSUNIT.assertEquals = function(e, r, t) {
      if (e === r) return JSUNIT.count++;
      t = t || "[Error: Test #" + JSUNIT.count + "]\n  < assertEquals(" + tux["typeof"](e) + ", " + tux["typeof"](r) + ", " + tux["typeof"](t) + ") >\n  expected: " + tux["typeof"](e) + "\n  recieved: " + tux["typeof"](r);
      JSUNIT.out(t + "\n");
    };
    JSUNIT.assertNotEquals = function(e, r, t) {
      if (e !== r) return JSUNIT.count++;
      t = t || "[Error: Test #" + JSUNIT.count + "]\n  < assertNotEquals(" + tux["typeof"](e) + ", " + tux["typeof"](r) + ", " + tux["typeof"](t) + ") >\n  did not expect: " + tux["typeof"](e) + "\n  recieved: " + tux["typeof"](r);
      JSUNIT.out(t + "\n");
    };
    JSUNIT.assertNull = function(e, r) {
      if (null === e) return JSUNIT.count++;
      r = r || "[Error: Test #" + JSUNIT.count + "]\n  < assertNull(" + tux["typeof"](e) + ", " + tux["typeof"](r) + ") >\n  expected: null\n  recieved: " + tux["typeof"](e);
      JSUNIT.out(r + "\n");
    };
    JSUNIT.assertNotNull = function(e, r) {
      if (null !== e) return JSUNIT.count++;
      r = r || "[Error: Test #" + JSUNIT.count + "]\n  < assertNotNull(" + tux["typeof"](e) + ", " + tux["typeof"](r) + ") >\n  did not expect: null\n  recieved: " + tux["typeof"](e);
      JSUNIT.out(r + "\n");
    };
    JSUNIT.assertUndefined = function(e, r) {
      if (void 0 === e || "undefined" === e) return JSUNIT.count++;
      r = r || "[Error: Test #" + JSUNIT.count + "]\n  < assertUndefined(" + tux["typeof"](e) + ", " + tux["typeof"](r) + ") >\n  expected: undefined\n  recieved: " + tux["typeof"](e);
      JSUNIT.out(r + "\n");
    };
    JSUNIT.assertNotUndefined = function(e, r) {
      if (void 0 !== e || "undefined" !== e) return JSUNIT.count++;
      r = r || "[Error: Test #" + JSUNIT.count + "]\n  < assertNotUndefined(" + tux["typeof"](e) + ", " + tux["typeof"](r) + ") >\n  did not expect: undefined\n  recieved: " + tux["typeof"](e);
      JSUNIT.out(r + "\n");
    };
    JSUNIT.assertNaN = function(e, r) {
      if (0/0 === e || 0/0 === +e) return JSUNIT.count++;
      r = r || "[Error: Test #" + JSUNIT.count + "]\n  < assertNaN(" + tux["typeof"](e) + ", " + tux["typeof"](r) + ") >\n  expected: NaN\n  recieved: " + tux["typeof"](e);
      JSUNIT.out(r + "\n");
    };
    JSUNIT.assertNotNaN = function(e, r) {
      if (0/0 !== e && 0/0 !== +e) return JSUNIT.count++;
      r = r || "[Error: Test #" + JSUNIT.count + "]\n  < assertNotNaN(" + tux["typeof"](e) + ", " + tux["typeof"](r) + ") >\n  did not expect: NaN\n  recieved: " + tux["typeof"](e);
      JSUNIT.out(r + "\n");
    };
    JSUNIT.assertFail = function(e) {
      JSUNIT.out("[Error: Test #" + JSUNIT.count + "]\n  < assertFail(" + tux["typeof"](e) + ") >\n");
    };
  }
  if (!runtime.has("1.6")) {
    __ = __.replace(/\.\.\["arguments\"]/g, "this.constructor.apply(null, arguments)").replace(/this/g, "self").replace(/self\.([a-z\$_][\w\$\.]*)\s*\=\s*function/g, "this.$1 = function").replace(/self\s*\=\s*self/g, "var self = this").replace(/self\.constructor/g, "this.constructor");
    for (k = /(\\+)#/; k.test(__); ) __ = __.replace(k, function(e, r) {
      return r.length % 2 === 0 ? r + "this" : r + "\b#";
    });
  } else {
    __ = __.replace(/\s*\.\.\["arguments\"]/g, "").replace(/([^\w\$\.]this)\s*\=\s*(this[^\w\$\.])/g, "");
    for (k = /(\\+)#/; k.test(__); ) __ = __.replace(k, function(e, r) {
      return r.length % 2 === 0 ? r + "self" : r + "\b#";
    });
  }
  for (;__.match(__nch__); ) {
    // put no.t.ch back
    N = +__.match(__nch__)[0].replace(/\D/g, "");
    __ = __.replace(__nch__, nch_[N]);
  }
  __ = __.replace(/[\b]/g, "");
  // remove trailing \b, fix \char
  __ = __.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  // make parsable
  // if (_eval) eval(__);
  // eval or not
  if (_htmleditor) {
    __ = __.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>").replace(/\t/g, "  ").replace(/\s/g, "&nbsp;");
    __ += // clean-up, make more readable
    "!" !== _clean ? "<br/>/* - TuxedoScript " + tux.version + " - Ephellon Dantzler: Tue Sept 8, 2015 23:51 CDT -06:00 - */<br/>" : "";
  }
  // hide or not
  return time.end = (new Date() + "").replace(/.+(\d{2}\:\d{2}\:\d{2}).+/, "$1") + "." + new Date().getMilliseconds(),
  time.span = (-(+time.start.replace(/:/g, "") - +time.end.replace(/:/g, "")) + "s").replace(/\.(\d{0,4})\d*s/g, ".$1s").replace(/0+s/, "s"),
  Tuxedo.stamp = time, Tuxedo.toString = function() {}, __;
}

var tux, tuxedo, nm;

tux = tuxedo = {};

tux = tuxedo = nm || {
  // nm
  runtime: function() {
    return Tuxedo.runtime;
  },
  support: function() {
    return Tuxedo.support;
  },
  stamp: function() {
    return Tuxedo.stamp;
  },
  version: "15.9.0",
  "typeof": function(e) {
    if (arguments.length > 1) return tux.typeOf.apply(null, arguments);
    var r = "";
    switch (typeof e) {
     case typeof Boolean():
      r = "";
      break;

     case typeof Function():
      r = "";
      break;

     case typeof Number():
      r = "";
      break;

     case typeof Object():
      switch (e.constructor) {
       case RegExp:
        r = "";
        break;

       case Array:
        r = "[]";
        break;

       default:
        r = "{}";
      }
      break;

     case typeof String():
      r = '""';
      break;

     case typeof Symbol():
      r = [ "(@@", ")" ];
      e = e.toString();
      break;

     case "object":
      r = "";
      break;

     case "undefined":
      r = "";
      break;

     default:
      r = "";
    }
    return (r[0] || "") + e + (r[1] || "");
  },
  typeOf: function() {
    for (var e = [], r = 0; r < arguments.length && "undefined" != typeof arguments[r] && null !== arguments[r]; r++) e.push(arguments[r].__proto__.constructor.name || arguments[r].constructor.name);
    return (e + "").replace(/\*/g, "ANY").toUpperCase();
  },
  random: function() {
    return Boolean(Math.round(Math.random()));
  },
  precompiled: function() {
    return Tuxedo.precompiled;
  }
};

println(Tuxedo(JAVA_STRING) + "/* Ephellon Dantzler - 2015 */");