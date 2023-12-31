/**
 * ScriptName: autoload.js
 * Version: 3.2
 *
 * FoodConnection
 * http://foodconnection.jp/
 * http://foodconnection.vn/
 *
 */


function ___query(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (decodeURIComponent(pair[0]) == variable) return decodeURIComponent(pair[1]);
  }
}


/*!
 * modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csscolumns-customelements-flexbox-history-picture-pointerevents-postmessage-sizes-srcset-webgl-websockets-webworkers-addtest-domprefixes-hasevent-mq-prefixedcssvalue-prefixes-setclasses-testallprops-testprop-teststyles
 */

! function (e, t, n) {
  function r(e, t) {
    return typeof e === t
  }

  function o() {
    var e, t, n, o, i, s, a;
    for (var l in b)
      if (b.hasOwnProperty(l)) {
        if (e = [], t = b[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
          for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
        for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++) s = e[i], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), C.push((o ? "" : "no-") + a.join("-"))
      }
  }

  function i(e) {
    var t = x.className,
      n = Modernizr._config.classPrefix || "";
    if (_ && (t = t.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2")
    }
    Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), _ ? x.className.baseVal = t : x.className = t)
  }

  function s(e, t) {
    if ("object" == typeof e)
      for (var n in e) P(e, n) && s(n, e[n]);
    else {
      e = e.toLowerCase();
      var r = e.split("."),
        o = Modernizr[r[0]];
      if (2 == r.length && (o = o[r[1]]), "undefined" != typeof o) return Modernizr;
      t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), i([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t)
    }
    return Modernizr
  }

  function a() {
    return "function" != typeof t.createElement ? t.createElement(arguments[0]) : _ ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
  }

  function l() {
    var e = t.body;
    return e || (e = a(_ ? "svg" : "body"), e.fake = !0), e
  }

  function u(e, n, r, o) {
    var i, s, u, f, d = "modernizr",
      c = a("div"),
      p = l();
    if (parseInt(r, 10))
      for (; r--;) u = a("div"), u.id = o ? o[r] : d + (r + 1), c.appendChild(u);
    return i = a("style"), i.type = "text/css", i.id = "s" + d, (p.fake ? p : c).appendChild(i), p.appendChild(c), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), c.id = d, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = x.style.overflow, x.style.overflow = "hidden", x.appendChild(p)), s = n(c, e), p.fake ? (p.parentNode.removeChild(p), x.style.overflow = f, x.offsetHeight) : c.parentNode.removeChild(c), !!s
  }

  function f(e, t) {
    return !!~("" + e).indexOf(t)
  }

  function d(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
      return t + n.toUpperCase()
    }).replace(/^-/, "")
  }

  function c(e, t) {
    return function () {
      return e.apply(t, arguments)
    }
  }

  function p(e, t, n) {
    var o;
    for (var i in e)
      if (e[i] in t) return n === !1 ? e[i] : (o = t[e[i]], r(o, "function") ? c(o, n || t) : o);
    return !1
  }

  function m(t, n, r) {
    var o;
    if ("getComputedStyle" in e) {
      o = getComputedStyle.call(e, t, n);
      var i = e.console;
      if (null !== o) r && (o = o.getPropertyValue(r));
      else if (i) {
        var s = i.error ? "error" : "log";
        i[s].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
      }
    } else o = !n && t.currentStyle && t.currentStyle[r];
    return o
  }

  function h(e) {
    return e.replace(/([A-Z])/g, function (e, t) {
      return "-" + t.toLowerCase()
    }).replace(/^ms-/, "-ms-")
  }

  function v(t, r) {
    var o = t.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--;)
        if (e.CSS.supports(h(t[o]), r)) return !0;
      return !1
    }
    if ("CSSSupportsRule" in e) {
      for (var i = []; o--;) i.push("(" + h(t[o]) + ":" + r + ")");
      return i = i.join(" or "), u("@supports (" + i + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" == m(e, null, "position")
      })
    }
    return n
  }

  function A(e, t, o, i) {
    function s() {
      u && (delete N.style, delete N.modElem)
    }
    if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) {
      var l = v(e, o);
      if (!r(l, "undefined")) return l
    }
    for (var u, c, p, m, h, A = ["modernizr", "tspan", "samp"]; !N.style && A.length;) u = !0, N.modElem = a(A.shift()), N.style = N.modElem.style;
    for (p = e.length, c = 0; p > c; c++)
      if (m = e[c], h = N.style[m], f(m, "-") && (m = d(m)), N.style[m] !== n) {
        if (i || r(o, "undefined")) return s(), "pfx" == t ? m : !0;
        try {
          N.style[m] = o
        } catch (g) {}
        if (N.style[m] != h) return s(), "pfx" == t ? m : !0
      } return s(), !1
  }

  function g(e, t, n, o, i) {
    var s = e.charAt(0).toUpperCase() + e.slice(1),
      a = (e + " " + O.join(s + " ") + s).split(" ");
    return r(t, "string") || r(t, "undefined") ? A(a, t, o, i) : (a = (e + " " + E.join(s + " ") + s).split(" "), p(a, t, n))
  }

  function y(e, t, r) {
    return g(e, n, n, t, r)
  }
  var C = [],
    b = [],
    w = {
      _version: "3.6.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function (e, t) {
        var n = this;
        setTimeout(function () {
          t(n[e])
        }, 0)
      },
      addTest: function (e, t, n) {
        b.push({
          name: e,
          fn: t,
          options: n
        })
      },
      addAsyncTest: function (e) {
        b.push({
          name: null,
          fn: e
        })
      }
    },
    Modernizr = function () {};
  Modernizr.prototype = w, Modernizr = new Modernizr, Modernizr.addTest("webworkers", "Worker" in e);
  var S = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  w._prefixes = S;
  var x = t.documentElement,
    _ = "svg" === x.nodeName.toLowerCase(),
    T = "Moz O ms Webkit",
    E = w._config.usePrefixes ? T.toLowerCase().split(" ") : [];
  w._domPrefixes = E;
  var P;
  ! function () {
    var e = {}.hasOwnProperty;
    P = r(e, "undefined") || r(e.call, "undefined") ? function (e, t) {
      return t in e && r(e.constructor.prototype[t], "undefined")
    } : function (t, n) {
      return e.call(t, n)
    }
  }(), w._l = {}, w.on = function (e, t) {
    this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function () {
      Modernizr._trigger(e, Modernizr[e])
    }, 0)
  }, w._trigger = function (e, t) {
    if (this._l[e]) {
      var n = this._l[e];
      setTimeout(function () {
        var e, r;
        for (e = 0; e < n.length; e++)(r = n[e])(t)
      }, 0), delete this._l[e]
    }
  }, Modernizr._q.push(function () {
    w.addTest = s
  });
  var k = function () {
    function e(e, t) {
      var o;
      return e ? (t && "string" != typeof t || (t = a(t || "div")), e = "on" + e, o = e in t, !o && r && (t.setAttribute || (t = a("div")), t.setAttribute(e, ""), o = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), o) : !1
    }
    var r = !("onblur" in t.documentElement);
    return e
  }();
  w.hasEvent = k;
  var z = function (e, t) {
    var n = !1,
      r = a("div"),
      o = r.style;
    if (e in o) {
      var i = E.length;
      for (o[e] = t, n = o[e]; i-- && !n;) o[e] = "-" + E[i] + "-" + t, n = o[e]
    }
    return "" === n && (n = !1), n
  };
  w.prefixedCSSValue = z;
  var B = function () {
    var t = e.matchMedia || e.msMatchMedia;
    return t ? function (e) {
      var n = t(e);
      return n && n.matches || !1
    } : function (t) {
      var n = !1;
      return u("@media " + t + " { #modernizr { position: absolute; } }", function (t) {
        n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
      }), n
    }
  }();
  w.mq = B;
  var O = (w.testStyles = u, w._config.usePrefixes ? T.split(" ") : []);
  w._cssomPrefixes = O;
  var L = {
    elem: a("modernizr")
  };
  Modernizr._q.push(function () {
    delete L.elem
  });
  var N = {
    style: L.elem.style
  };
  Modernizr._q.unshift(function () {
    delete N.style
  });
  w.testProp = function (e, t, r) {
    return A([e], n, t, r)
  };
  w.testAllProps = g, w.testAllProps = y, Modernizr.addTest("customelements", "customElements" in e), Modernizr.addTest("history", function () {
    var t = navigator.userAgent;
    return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") || "file:" === location.protocol ? e.history && "pushState" in e.history : !1
  }), Modernizr.addTest("pointerevents", function () {
    var e = !1,
      t = E.length;
    for (e = Modernizr.hasEvent("pointerdown"); t-- && !e;) k(E[t] + "pointerdown") && (e = !0);
    return e
  }), Modernizr.addTest("postmessage", "postMessage" in e);
  var R = !1;
  try {
    R = "WebSocket" in e && 2 === e.WebSocket.CLOSING
  } catch (j) {}
  Modernizr.addTest("websockets", R), Modernizr.addTest("webgl", function () {
      var t = a("canvas"),
        n = "probablySupportsContext" in t ? "probablySupportsContext" : "supportsContext";
      return n in t ? t[n]("webgl") || t[n]("experimental-webgl") : "WebGLRenderingContext" in e
    }), Modernizr.addTest("cssanimations", y("animationName", "a", !0)),
    function () {
      Modernizr.addTest("csscolumns", function () {
        var e = !1,
          t = y("columnCount");
        try {
          e = !!t, e && (e = new Boolean(e))
        } catch (n) {}
        return e
      });
      for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++) e = n[r].toLowerCase(), t = y("column" + n[r]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || y(n[r])), Modernizr.addTest("csscolumns." + e, t)
    }(), Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)), Modernizr.addAsyncTest(function () {
      var e, t, n, r = a("img"),
        o = "sizes" in r;
      !o && "srcset" in r ? (t = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==", e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", n = function () {
        s("sizes", 2 == r.width)
      }, r.onload = n, r.onerror = n, r.setAttribute("sizes", "9px"), r.srcset = e + " 1w," + t + " 8w", r.src = e) : s("sizes", o)
    }), Modernizr.addTest("picture", "HTMLPictureElement" in e), Modernizr.addTest("srcset", "srcset" in a("img")), o(), i(C), delete w.addTest, delete w.addAsyncTest;
  for (var M = 0; M < Modernizr._q.length; M++) Modernizr._q[M]();
  e.Modernizr = Modernizr
}(window, document);


/*!
 * clipboard.js v2.0.0
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT Â© Zeno Rocha
 */

! function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e()
}(this, function () {
  return function (t) {
    function e(o) {
      if (n[o]) return n[o].exports;
      var r = n[o] = {
        i: o,
        l: !1,
        exports: {}
      };
      return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.i = function (t) {
      return t
    }, e.d = function (t, n, o) {
      e.o(t, n) || Object.defineProperty(t, n, {
        configurable: !1,
        enumerable: !0,
        get: o
      })
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default
      } : function () {
        return t
      };
      return e.d(n, "a", n), n
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 3)
  }([function (t, e, n) {
    var o, r, i;
    ! function (a, c) {
      r = [t, n(7)], o = c, void 0 !== (i = "function" == typeof o ? o.apply(e, r) : o) && (t.exports = i)
    }(0, function (t, e) {
      "use strict";

      function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }
      var o = function (t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(e),
        r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
          return typeof t
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        i = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
          }
          return function (e, n, o) {
            return n && t(e.prototype, n), o && t(e, o), e
          }
        }(),
        a = function () {
          function t(e) {
            n(this, t), this.resolveOptions(e), this.initSelection()
          }
          return i(t, [{
            key: "resolveOptions",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
            }
          }, {
            key: "initSelection",
            value: function () {
              this.text ? this.selectFake() : this.target && this.selectTarget()
            }
          }, {
            key: "selectFake",
            value: function () {
              var t = this,
                e = "rtl" == document.documentElement.getAttribute("dir");
              this.removeFake(), this.fakeHandlerCallback = function () {
                return t.removeFake()
              }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
              var n = window.pageYOffset || document.documentElement.scrollTop;
              this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, o.default)(this.fakeElem), this.copyText()
            }
          }, {
            key: "removeFake",
            value: function () {
              this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
            }
          }, {
            key: "selectTarget",
            value: function () {
              this.selectedText = (0, o.default)(this.target), this.copyText()
            }
          }, {
            key: "copyText",
            value: function () {
              var t = void 0;
              try {
                t = document.execCommand(this.action)
              } catch (e) {
                t = !1
              }
              this.handleResult(t)
            }
          }, {
            key: "handleResult",
            value: function (t) {
              this.emitter.emit(t ? "success" : "error", {
                action: this.action,
                text: this.selectedText,
                trigger: this.trigger,
                clearSelection: this.clearSelection.bind(this)
              })
            }
          }, {
            key: "clearSelection",
            value: function () {
              this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
            }
          }, {
            key: "destroy",
            value: function () {
              this.removeFake()
            }
          }, {
            key: "action",
            set: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
              if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
            },
            get: function () {
              return this._action
            }
          }, {
            key: "target",
            set: function (t) {
              if (void 0 !== t) {
                if (!t || "object" !== (void 0 === t ? "undefined" : r(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                this._target = t
              }
            },
            get: function () {
              return this._target
            }
          }]), t
        }();
      t.exports = a
    })
  }, function (t, e, n) {
    function o(t, e, n) {
      if (!t && !e && !n) throw new Error("Missing required arguments");
      if (!c.string(e)) throw new TypeError("Second argument must be a String");
      if (!c.fn(n)) throw new TypeError("Third argument must be a Function");
      if (c.node(t)) return r(t, e, n);
      if (c.nodeList(t)) return i(t, e, n);
      if (c.string(t)) return a(t, e, n);
      throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
    }

    function r(t, e, n) {
      return t.addEventListener(e, n), {
        destroy: function () {
          t.removeEventListener(e, n)
        }
      }
    }

    function i(t, e, n) {
      return Array.prototype.forEach.call(t, function (t) {
        t.addEventListener(e, n)
      }), {
        destroy: function () {
          Array.prototype.forEach.call(t, function (t) {
            t.removeEventListener(e, n)
          })
        }
      }
    }

    function a(t, e, n) {
      return u(document.body, t, e, n)
    }
    var c = n(6),
      u = n(5);
    t.exports = o
  }, function (t, e) {
    function n() {}
    n.prototype = {
      on: function (t, e, n) {
        var o = this.e || (this.e = {});
        return (o[t] || (o[t] = [])).push({
          fn: e,
          ctx: n
        }), this
      },
      once: function (t, e, n) {
        function o() {
          r.off(t, o), e.apply(n, arguments)
        }
        var r = this;
        return o._ = e, this.on(t, o, n)
      },
      emit: function (t) {
        var e = [].slice.call(arguments, 1),
          n = ((this.e || (this.e = {}))[t] || []).slice(),
          o = 0,
          r = n.length;
        for (o; o < r; o++) n[o].fn.apply(n[o].ctx, e);
        return this
      },
      off: function (t, e) {
        var n = this.e || (this.e = {}),
          o = n[t],
          r = [];
        if (o && e)
          for (var i = 0, a = o.length; i < a; i++) o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
        return r.length ? n[t] = r : delete n[t], this
      }
    }, t.exports = n
  }, function (t, e, n) {
    var o, r, i;
    ! function (a, c) {
      r = [t, n(0), n(2), n(1)], o = c, void 0 !== (i = "function" == typeof o ? o.apply(e, r) : o) && (t.exports = i)
    }(0, function (t, e, n, o) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }

      function a(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
      }

      function c(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
      }

      function u(t, e) {
        var n = "data-clipboard-" + t;
        if (e.hasAttribute(n)) return e.getAttribute(n)
      }
      var l = r(e),
        s = r(n),
        f = r(o),
        d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
          return typeof t
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        h = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
          }
          return function (e, n, o) {
            return n && t(e.prototype, n), o && t(e, o), e
          }
        }(),
        p = function (t) {
          function e(t, n) {
            i(this, e);
            var o = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return o.resolveOptions(n), o.listenClick(t), o
          }
          return c(e, t), h(e, [{
            key: "resolveOptions",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === d(t.container) ? t.container : document.body
            }
          }, {
            key: "listenClick",
            value: function (t) {
              var e = this;
              this.listener = (0, f.default)(t, "click", function (t) {
                return e.onClick(t)
              })
            }
          }, {
            key: "onClick",
            value: function (t) {
              var e = t.delegateTarget || t.currentTarget;
              this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new l.default({
                action: this.action(e),
                target: this.target(e),
                text: this.text(e),
                container: this.container,
                trigger: e,
                emitter: this
              })
            }
          }, {
            key: "defaultAction",
            value: function (t) {
              return u("action", t)
            }
          }, {
            key: "defaultTarget",
            value: function (t) {
              var e = u("target", t);
              if (e) return document.querySelector(e)
            }
          }, {
            key: "defaultText",
            value: function (t) {
              return u("text", t)
            }
          }, {
            key: "destroy",
            value: function () {
              this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
            }
          }], [{
            key: "isSupported",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                e = "string" == typeof t ? [t] : t,
                n = !!document.queryCommandSupported;
              return e.forEach(function (t) {
                n = n && !!document.queryCommandSupported(t)
              }), n
            }
          }]), e
        }(s.default);
      t.exports = p
    })
  }, function (t, e) {
    function n(t, e) {
      for (; t && t.nodeType !== o;) {
        if ("function" == typeof t.matches && t.matches(e)) return t;
        t = t.parentNode
      }
    }
    var o = 9;
    if ("undefined" != typeof Element && !Element.prototype.matches) {
      var r = Element.prototype;
      r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector
    }
    t.exports = n
  }, function (t, e, n) {
    function o(t, e, n, o, r) {
      var a = i.apply(this, arguments);
      return t.addEventListener(n, a, r), {
        destroy: function () {
          t.removeEventListener(n, a, r)
        }
      }
    }

    function r(t, e, n, r, i) {
      return "function" == typeof t.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function (t) {
        return o(t, e, n, r, i)
      }))
    }

    function i(t, e, n, o) {
      return function (n) {
        n.delegateTarget = a(n.target, e), n.delegateTarget && o.call(t, n)
      }
    }
    var a = n(4);
    t.exports = r
  }, function (t, e) {
    e.node = function (t) {
      return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
    }, e.nodeList = function (t) {
      var n = Object.prototype.toString.call(t);
      return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in t && (0 === t.length || e.node(t[0]))
    }, e.string = function (t) {
      return "string" == typeof t || t instanceof String
    }, e.fn = function (t) {
      return "[object Function]" === Object.prototype.toString.call(t)
    }
  }, function (t, e) {
    function n(t) {
      var e;
      if ("SELECT" === t.nodeName) t.focus(), e = t.value;
      else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
        var n = t.hasAttribute("readonly");
        n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value
      } else {
        t.hasAttribute("contenteditable") && t.focus();
        var o = window.getSelection(),
          r = document.createRange();
        r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), e = o.toString()
      }
      return e
    }
    t.exports = n
  }])
});
