(function () {
  const o = document.createElement('link').relList;
  if (o && o.supports && o.supports('modulepreload')) return;
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) s(h);
  new MutationObserver((h) => {
    for (const m of h)
      if (m.type === 'childList')
        for (const g of m.addedNodes)
          g.tagName === 'LINK' && g.rel === 'modulepreload' && s(g);
  }).observe(document, { childList: !0, subtree: !0 });
  function d(h) {
    const m = {};
    return (
      h.integrity && (m.integrity = h.integrity),
      h.referrerPolicy && (m.referrerPolicy = h.referrerPolicy),
      h.crossOrigin === 'use-credentials' ? (m.credentials = 'include')
      : h.crossOrigin === 'anonymous' ? (m.credentials = 'omit')
      : (m.credentials = 'same-origin'),
      m
    );
  }
  function s(h) {
    if (h.ep) return;
    h.ep = !0;
    const m = d(h);
    fetch(h.href, m);
  }
})();
var Js = { exports: {} },
  Qn = {};
var _h;
function Nv() {
  if (_h) return Qn;
  _h = 1;
  var i = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.fragment');
  function d(s, h, m) {
    var g = null;
    if (
      (m !== void 0 && (g = '' + m),
      h.key !== void 0 && (g = '' + h.key),
      'key' in h)
    ) {
      m = {};
      for (var A in h) A !== 'key' && (m[A] = h[A]);
    } else m = h;
    return (
      (h = m.ref),
      { $$typeof: i, type: s, key: g, ref: h !== void 0 ? h : null, props: m }
    );
  }
  return ((Qn.Fragment = o), (Qn.jsx = d), (Qn.jsxs = d), Qn);
}
var yh;
function Tv() {
  return (yh || ((yh = 1), (Js.exports = Nv())), Js.exports);
}
var f = Tv(),
  $s = { exports: {} },
  Zn = {},
  ks = { exports: {} },
  Ws = {};
var gh;
function zv() {
  return (
    gh ||
      ((gh = 1),
      (function (i) {
        function o(O, B) {
          var F = O.length;
          O.push(B);
          e: for (; 0 < F; ) {
            var ve = (F - 1) >>> 1,
              pe = O[ve];
            if (0 < h(pe, B)) ((O[ve] = B), (O[F] = pe), (F = ve));
            else break e;
          }
        }
        function d(O) {
          return O.length === 0 ? null : O[0];
        }
        function s(O) {
          if (O.length === 0) return null;
          var B = O[0],
            F = O.pop();
          if (F !== B) {
            O[0] = F;
            e: for (var ve = 0, pe = O.length, p = pe >>> 1; ve < p; ) {
              var U = 2 * (ve + 1) - 1,
                L = O[U],
                w = U + 1,
                ee = O[w];
              if (0 > h(L, F))
                w < pe && 0 > h(ee, L) ?
                  ((O[ve] = ee), (O[w] = F), (ve = w))
                : ((O[ve] = L), (O[U] = F), (ve = U));
              else if (w < pe && 0 > h(ee, F))
                ((O[ve] = ee), (O[w] = F), (ve = w));
              else break e;
            }
          }
          return B;
        }
        function h(O, B) {
          var F = O.sortIndex - B.sortIndex;
          return F !== 0 ? F : O.id - B.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == 'object' &&
            typeof performance.now == 'function')
        ) {
          var m = performance;
          i.unstable_now = function () {
            return m.now();
          };
        } else {
          var g = Date,
            A = g.now();
          i.unstable_now = function () {
            return g.now() - A;
          };
        }
        var b = [],
          _ = [],
          S = 1,
          N = null,
          H = 3,
          q = !1,
          k = !1,
          Z = !1,
          G = !1,
          J = typeof setTimeout == 'function' ? setTimeout : null,
          X = typeof clearTimeout == 'function' ? clearTimeout : null,
          W = typeof setImmediate < 'u' ? setImmediate : null;
        function xe(O) {
          for (var B = d(_); B !== null; ) {
            if (B.callback === null) s(_);
            else if (B.startTime <= O)
              (s(_), (B.sortIndex = B.expirationTime), o(b, B));
            else break;
            B = d(_);
          }
        }
        function Se(O) {
          if (((Z = !1), xe(O), !k))
            if (d(b) !== null) ((k = !0), ze || ((ze = !0), tt()));
            else {
              var B = d(_);
              B !== null && Mt(Se, B.startTime - O);
            }
        }
        var ze = !1,
          P = -1,
          Re = 5,
          Ve = -1;
        function pt() {
          return G ? !0 : !(i.unstable_now() - Ve < Re);
        }
        function Lt() {
          if (((G = !1), ze)) {
            var O = i.unstable_now();
            Ve = O;
            var B = !0;
            try {
              e: {
                ((k = !1), Z && ((Z = !1), X(P), (P = -1)), (q = !0));
                var F = H;
                try {
                  t: {
                    for (
                      xe(O), N = d(b);
                      N !== null && !(N.expirationTime > O && pt());
                    ) {
                      var ve = N.callback;
                      if (typeof ve == 'function') {
                        ((N.callback = null), (H = N.priorityLevel));
                        var pe = ve(N.expirationTime <= O);
                        if (((O = i.unstable_now()), typeof pe == 'function')) {
                          ((N.callback = pe), xe(O), (B = !0));
                          break t;
                        }
                        (N === d(b) && s(b), xe(O));
                      } else s(b);
                      N = d(b);
                    }
                    if (N !== null) B = !0;
                    else {
                      var p = d(_);
                      (p !== null && Mt(Se, p.startTime - O), (B = !1));
                    }
                  }
                  break e;
                } finally {
                  ((N = null), (H = F), (q = !1));
                }
                B = void 0;
              }
            } finally {
              B ? tt() : (ze = !1);
            }
          }
        }
        var tt;
        if (typeof W == 'function')
          tt = function () {
            W(Lt);
          };
        else if (typeof MessageChannel < 'u') {
          var Ll = new MessageChannel(),
            Qt = Ll.port2;
          ((Ll.port1.onmessage = Lt),
            (tt = function () {
              Qt.postMessage(null);
            }));
        } else
          tt = function () {
            J(Lt, 0);
          };
        function Mt(O, B) {
          P = J(function () {
            O(i.unstable_now());
          }, B);
        }
        ((i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (i.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O ?
              console.error(
                'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
              )
            : (Re = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return H;
          }),
          (i.unstable_next = function (O) {
            switch (H) {
              case 1:
              case 2:
              case 3:
                var B = 3;
                break;
              default:
                B = H;
            }
            var F = H;
            H = B;
            try {
              return O();
            } finally {
              H = F;
            }
          }),
          (i.unstable_requestPaint = function () {
            G = !0;
          }),
          (i.unstable_runWithPriority = function (O, B) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var F = H;
            H = O;
            try {
              return B();
            } finally {
              H = F;
            }
          }),
          (i.unstable_scheduleCallback = function (O, B, F) {
            var ve = i.unstable_now();
            switch (
              (typeof F == 'object' && F !== null ?
                ((F = F.delay),
                (F = typeof F == 'number' && 0 < F ? ve + F : ve))
              : (F = ve),
              O)
            ) {
              case 1:
                var pe = -1;
                break;
              case 2:
                pe = 250;
                break;
              case 5:
                pe = 1073741823;
                break;
              case 4:
                pe = 1e4;
                break;
              default:
                pe = 5e3;
            }
            return (
              (pe = F + pe),
              (O = {
                id: S++,
                callback: B,
                priorityLevel: O,
                startTime: F,
                expirationTime: pe,
                sortIndex: -1,
              }),
              F > ve ?
                ((O.sortIndex = F),
                o(_, O),
                d(b) === null &&
                  O === d(_) &&
                  (Z ? (X(P), (P = -1)) : (Z = !0), Mt(Se, F - ve)))
              : ((O.sortIndex = pe),
                o(b, O),
                k || q || ((k = !0), ze || ((ze = !0), tt()))),
              O
            );
          }),
          (i.unstable_shouldYield = pt),
          (i.unstable_wrapCallback = function (O) {
            var B = H;
            return function () {
              var F = H;
              H = B;
              try {
                return O.apply(this, arguments);
              } finally {
                H = F;
              }
            };
          }));
      })(Ws)),
    Ws
  );
}
var ph;
function Av() {
  return (ph || ((ph = 1), (ks.exports = zv())), ks.exports);
}
var Fs = { exports: {} },
  I = {};
var bh;
function Cv() {
  if (bh) return I;
  bh = 1;
  var i = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.portal'),
    d = Symbol.for('react.fragment'),
    s = Symbol.for('react.strict_mode'),
    h = Symbol.for('react.profiler'),
    m = Symbol.for('react.consumer'),
    g = Symbol.for('react.context'),
    A = Symbol.for('react.forward_ref'),
    b = Symbol.for('react.suspense'),
    _ = Symbol.for('react.memo'),
    S = Symbol.for('react.lazy'),
    N = Symbol.for('react.activity'),
    H = Symbol.iterator;
  function q(p) {
    return p === null || typeof p != 'object' ?
        null
      : ((p = (H && p[H]) || p['@@iterator']),
        typeof p == 'function' ? p : null);
  }
  var k = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Z = Object.assign,
    G = {};
  function J(p, U, L) {
    ((this.props = p),
      (this.context = U),
      (this.refs = G),
      (this.updater = L || k));
  }
  ((J.prototype.isReactComponent = {}),
    (J.prototype.setState = function (p, U) {
      if (typeof p != 'object' && typeof p != 'function' && p != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, p, U, 'setState');
    }),
    (J.prototype.forceUpdate = function (p) {
      this.updater.enqueueForceUpdate(this, p, 'forceUpdate');
    }));
  function X() {}
  X.prototype = J.prototype;
  function W(p, U, L) {
    ((this.props = p),
      (this.context = U),
      (this.refs = G),
      (this.updater = L || k));
  }
  var xe = (W.prototype = new X());
  ((xe.constructor = W), Z(xe, J.prototype), (xe.isPureReactComponent = !0));
  var Se = Array.isArray;
  function ze() {}
  var P = { H: null, A: null, T: null, S: null },
    Re = Object.prototype.hasOwnProperty;
  function Ve(p, U, L) {
    var w = L.ref;
    return {
      $$typeof: i,
      type: p,
      key: U,
      ref: w !== void 0 ? w : null,
      props: L,
    };
  }
  function pt(p, U) {
    return Ve(p.type, U, p.props);
  }
  function Lt(p) {
    return typeof p == 'object' && p !== null && p.$$typeof === i;
  }
  function tt(p) {
    var U = { '=': '=0', ':': '=2' };
    return (
      '$' +
      p.replace(/[=:]/g, function (L) {
        return U[L];
      })
    );
  }
  var Ll = /\/+/g;
  function Qt(p, U) {
    return typeof p == 'object' && p !== null && p.key != null ?
        tt('' + p.key)
      : U.toString(36);
  }
  function Mt(p) {
    switch (p.status) {
      case 'fulfilled':
        return p.value;
      case 'rejected':
        throw p.reason;
      default:
        switch (
          (typeof p.status == 'string' ?
            p.then(ze, ze)
          : ((p.status = 'pending'),
            p.then(
              function (U) {
                p.status === 'pending' &&
                  ((p.status = 'fulfilled'), (p.value = U));
              },
              function (U) {
                p.status === 'pending' &&
                  ((p.status = 'rejected'), (p.reason = U));
              },
            )),
          p.status)
        ) {
          case 'fulfilled':
            return p.value;
          case 'rejected':
            throw p.reason;
        }
    }
    throw p;
  }
  function O(p, U, L, w, ee) {
    var ae = typeof p;
    (ae === 'undefined' || ae === 'boolean') && (p = null);
    var de = !1;
    if (p === null) de = !0;
    else
      switch (ae) {
        case 'bigint':
        case 'string':
        case 'number':
          de = !0;
          break;
        case 'object':
          switch (p.$$typeof) {
            case i:
            case o:
              de = !0;
              break;
            case S:
              return ((de = p._init), O(de(p._payload), U, L, w, ee));
          }
      }
    if (de)
      return (
        (ee = ee(p)),
        (de = w === '' ? '.' + Qt(p, 0) : w),
        Se(ee) ?
          ((L = ''),
          de != null && (L = de.replace(Ll, '$&/') + '/'),
          O(ee, U, L, '', function (ka) {
            return ka;
          }))
        : ee != null &&
          (Lt(ee) &&
            (ee = pt(
              ee,
              L +
                (ee.key == null || (p && p.key === ee.key) ?
                  ''
                : ('' + ee.key).replace(Ll, '$&/') + '/') +
                de,
            )),
          U.push(ee)),
        1
      );
    de = 0;
    var Ie = w === '' ? '.' : w + ':';
    if (Se(p))
      for (var Oe = 0; Oe < p.length; Oe++)
        ((w = p[Oe]), (ae = Ie + Qt(w, Oe)), (de += O(w, U, L, ae, ee)));
    else if (((Oe = q(p)), typeof Oe == 'function'))
      for (p = Oe.call(p), Oe = 0; !(w = p.next()).done; )
        ((w = w.value), (ae = Ie + Qt(w, Oe++)), (de += O(w, U, L, ae, ee)));
    else if (ae === 'object') {
      if (typeof p.then == 'function') return O(Mt(p), U, L, w, ee);
      throw (
        (U = String(p)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (U === '[object Object]' ?
              'object with keys {' + Object.keys(p).join(', ') + '}'
            : U) +
            '). If you meant to render a collection of children, use an array instead.',
        )
      );
    }
    return de;
  }
  function B(p, U, L) {
    if (p == null) return p;
    var w = [],
      ee = 0;
    return (
      O(p, w, '', '', function (ae) {
        return U.call(L, ae, ee++);
      }),
      w
    );
  }
  function F(p) {
    if (p._status === -1) {
      var U = p._result;
      ((U = U()),
        U.then(
          function (L) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 1), (p._result = L));
          },
          function (L) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 2), (p._result = L));
          },
        ),
        p._status === -1 && ((p._status = 0), (p._result = U)));
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var ve =
      typeof reportError == 'function' ? reportError : (
        function (p) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var U = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                (
                  typeof p == 'object' &&
                  p !== null &&
                  typeof p.message == 'string'
                ) ?
                  String(p.message)
                : String(p),
              error: p,
            });
            if (!window.dispatchEvent(U)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', p);
            return;
          }
          console.error(p);
        }
      ),
    pe = {
      map: B,
      forEach: function (p, U, L) {
        B(
          p,
          function () {
            U.apply(this, arguments);
          },
          L,
        );
      },
      count: function (p) {
        var U = 0;
        return (
          B(p, function () {
            U++;
          }),
          U
        );
      },
      toArray: function (p) {
        return (
          B(p, function (U) {
            return U;
          }) || []
        );
      },
      only: function (p) {
        if (!Lt(p))
          throw Error(
            'React.Children.only expected to receive a single React element child.',
          );
        return p;
      },
    };
  return (
    (I.Activity = N),
    (I.Children = pe),
    (I.Component = J),
    (I.Fragment = d),
    (I.Profiler = h),
    (I.PureComponent = W),
    (I.StrictMode = s),
    (I.Suspense = b),
    (I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P),
    (I.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (p) {
        return P.H.useMemoCache(p);
      },
    }),
    (I.cache = function (p) {
      return function () {
        return p.apply(null, arguments);
      };
    }),
    (I.cacheSignal = function () {
      return null;
    }),
    (I.cloneElement = function (p, U, L) {
      if (p == null)
        throw Error(
          'The argument must be a React element, but you passed ' + p + '.',
        );
      var w = Z({}, p.props),
        ee = p.key;
      if (U != null)
        for (ae in (U.key !== void 0 && (ee = '' + U.key), U))
          !Re.call(U, ae) ||
            ae === 'key' ||
            ae === '__self' ||
            ae === '__source' ||
            (ae === 'ref' && U.ref === void 0) ||
            (w[ae] = U[ae]);
      var ae = arguments.length - 2;
      if (ae === 1) w.children = L;
      else if (1 < ae) {
        for (var de = Array(ae), Ie = 0; Ie < ae; Ie++)
          de[Ie] = arguments[Ie + 2];
        w.children = de;
      }
      return Ve(p.type, ee, w);
    }),
    (I.createContext = function (p) {
      return (
        (p = {
          $$typeof: g,
          _currentValue: p,
          _currentValue2: p,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (p.Provider = p),
        (p.Consumer = { $$typeof: m, _context: p }),
        p
      );
    }),
    (I.createElement = function (p, U, L) {
      var w,
        ee = {},
        ae = null;
      if (U != null)
        for (w in (U.key !== void 0 && (ae = '' + U.key), U))
          Re.call(U, w) &&
            w !== 'key' &&
            w !== '__self' &&
            w !== '__source' &&
            (ee[w] = U[w]);
      var de = arguments.length - 2;
      if (de === 1) ee.children = L;
      else if (1 < de) {
        for (var Ie = Array(de), Oe = 0; Oe < de; Oe++)
          Ie[Oe] = arguments[Oe + 2];
        ee.children = Ie;
      }
      if (p && p.defaultProps)
        for (w in ((de = p.defaultProps), de))
          ee[w] === void 0 && (ee[w] = de[w]);
      return Ve(p, ae, ee);
    }),
    (I.createRef = function () {
      return { current: null };
    }),
    (I.forwardRef = function (p) {
      return { $$typeof: A, render: p };
    }),
    (I.isValidElement = Lt),
    (I.lazy = function (p) {
      return { $$typeof: S, _payload: { _status: -1, _result: p }, _init: F };
    }),
    (I.memo = function (p, U) {
      return { $$typeof: _, type: p, compare: U === void 0 ? null : U };
    }),
    (I.startTransition = function (p) {
      var U = P.T,
        L = {};
      P.T = L;
      try {
        var w = p(),
          ee = P.S;
        (ee !== null && ee(L, w),
          typeof w == 'object' &&
            w !== null &&
            typeof w.then == 'function' &&
            w.then(ze, ve));
      } catch (ae) {
        ve(ae);
      } finally {
        (U !== null && L.types !== null && (U.types = L.types), (P.T = U));
      }
    }),
    (I.unstable_useCacheRefresh = function () {
      return P.H.useCacheRefresh();
    }),
    (I.use = function (p) {
      return P.H.use(p);
    }),
    (I.useActionState = function (p, U, L) {
      return P.H.useActionState(p, U, L);
    }),
    (I.useCallback = function (p, U) {
      return P.H.useCallback(p, U);
    }),
    (I.useContext = function (p) {
      return P.H.useContext(p);
    }),
    (I.useDebugValue = function () {}),
    (I.useDeferredValue = function (p, U) {
      return P.H.useDeferredValue(p, U);
    }),
    (I.useEffect = function (p, U) {
      return P.H.useEffect(p, U);
    }),
    (I.useEffectEvent = function (p) {
      return P.H.useEffectEvent(p);
    }),
    (I.useId = function () {
      return P.H.useId();
    }),
    (I.useImperativeHandle = function (p, U, L) {
      return P.H.useImperativeHandle(p, U, L);
    }),
    (I.useInsertionEffect = function (p, U) {
      return P.H.useInsertionEffect(p, U);
    }),
    (I.useLayoutEffect = function (p, U) {
      return P.H.useLayoutEffect(p, U);
    }),
    (I.useMemo = function (p, U) {
      return P.H.useMemo(p, U);
    }),
    (I.useOptimistic = function (p, U) {
      return P.H.useOptimistic(p, U);
    }),
    (I.useReducer = function (p, U, L) {
      return P.H.useReducer(p, U, L);
    }),
    (I.useRef = function (p) {
      return P.H.useRef(p);
    }),
    (I.useState = function (p) {
      return P.H.useState(p);
    }),
    (I.useSyncExternalStore = function (p, U, L) {
      return P.H.useSyncExternalStore(p, U, L);
    }),
    (I.useTransition = function () {
      return P.H.useTransition();
    }),
    (I.version = '19.2.4'),
    I
  );
}
var Sh;
function uf() {
  return (Sh || ((Sh = 1), (Fs.exports = Cv())), Fs.exports);
}
var Is = { exports: {} },
  Fe = {};
var xh;
function Rv() {
  if (xh) return Fe;
  xh = 1;
  var i = uf();
  function o(b) {
    var _ = 'https://react.dev/errors/' + b;
    if (1 < arguments.length) {
      _ += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var S = 2; S < arguments.length; S++)
        _ += '&args[]=' + encodeURIComponent(arguments[S]);
    }
    return (
      'Minified React error #' +
      b +
      '; visit ' +
      _ +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function d() {}
  var s = {
      d: {
        f: d,
        r: function () {
          throw Error(o(522));
        },
        D: d,
        C: d,
        L: d,
        m: d,
        X: d,
        S: d,
        M: d,
      },
      p: 0,
      findDOMNode: null,
    },
    h = Symbol.for('react.portal');
  function m(b, _, S) {
    var N =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: N == null ? null : '' + N,
      children: b,
      containerInfo: _,
      implementation: S,
    };
  }
  var g = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function A(b, _) {
    if (b === 'font') return '';
    if (typeof _ == 'string') return _ === 'use-credentials' ? _ : '';
  }
  return (
    (Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (Fe.createPortal = function (b, _) {
      var S =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_ || (_.nodeType !== 1 && _.nodeType !== 9 && _.nodeType !== 11))
        throw Error(o(299));
      return m(b, _, null, S);
    }),
    (Fe.flushSync = function (b) {
      var _ = g.T,
        S = s.p;
      try {
        if (((g.T = null), (s.p = 2), b)) return b();
      } finally {
        ((g.T = _), (s.p = S), s.d.f());
      }
    }),
    (Fe.preconnect = function (b, _) {
      typeof b == 'string' &&
        (_ ?
          ((_ = _.crossOrigin),
          (_ =
            typeof _ == 'string' ?
              _ === 'use-credentials' ?
                _
              : ''
            : void 0))
        : (_ = null),
        s.d.C(b, _));
    }),
    (Fe.prefetchDNS = function (b) {
      typeof b == 'string' && s.d.D(b);
    }),
    (Fe.preinit = function (b, _) {
      if (typeof b == 'string' && _ && typeof _.as == 'string') {
        var S = _.as,
          N = A(S, _.crossOrigin),
          H = typeof _.integrity == 'string' ? _.integrity : void 0,
          q = typeof _.fetchPriority == 'string' ? _.fetchPriority : void 0;
        S === 'style' ?
          s.d.S(b, typeof _.precedence == 'string' ? _.precedence : void 0, {
            crossOrigin: N,
            integrity: H,
            fetchPriority: q,
          })
        : S === 'script' &&
          s.d.X(b, {
            crossOrigin: N,
            integrity: H,
            fetchPriority: q,
            nonce: typeof _.nonce == 'string' ? _.nonce : void 0,
          });
      }
    }),
    (Fe.preinitModule = function (b, _) {
      if (typeof b == 'string')
        if (typeof _ == 'object' && _ !== null) {
          if (_.as == null || _.as === 'script') {
            var S = A(_.as, _.crossOrigin);
            s.d.M(b, {
              crossOrigin: S,
              integrity: typeof _.integrity == 'string' ? _.integrity : void 0,
              nonce: typeof _.nonce == 'string' ? _.nonce : void 0,
            });
          }
        } else _ == null && s.d.M(b);
    }),
    (Fe.preload = function (b, _) {
      if (
        typeof b == 'string' &&
        typeof _ == 'object' &&
        _ !== null &&
        typeof _.as == 'string'
      ) {
        var S = _.as,
          N = A(S, _.crossOrigin);
        s.d.L(b, S, {
          crossOrigin: N,
          integrity: typeof _.integrity == 'string' ? _.integrity : void 0,
          nonce: typeof _.nonce == 'string' ? _.nonce : void 0,
          type: typeof _.type == 'string' ? _.type : void 0,
          fetchPriority:
            typeof _.fetchPriority == 'string' ? _.fetchPriority : void 0,
          referrerPolicy:
            typeof _.referrerPolicy == 'string' ? _.referrerPolicy : void 0,
          imageSrcSet:
            typeof _.imageSrcSet == 'string' ? _.imageSrcSet : void 0,
          imageSizes: typeof _.imageSizes == 'string' ? _.imageSizes : void 0,
          media: typeof _.media == 'string' ? _.media : void 0,
        });
      }
    }),
    (Fe.preloadModule = function (b, _) {
      if (typeof b == 'string')
        if (_) {
          var S = A(_.as, _.crossOrigin);
          s.d.m(b, {
            as: typeof _.as == 'string' && _.as !== 'script' ? _.as : void 0,
            crossOrigin: S,
            integrity: typeof _.integrity == 'string' ? _.integrity : void 0,
          });
        } else s.d.m(b);
    }),
    (Fe.requestFormReset = function (b) {
      s.d.r(b);
    }),
    (Fe.unstable_batchedUpdates = function (b, _) {
      return b(_);
    }),
    (Fe.useFormState = function (b, _, S) {
      return g.H.useFormState(b, _, S);
    }),
    (Fe.useFormStatus = function () {
      return g.H.useHostTransitionStatus();
    }),
    (Fe.version = '19.2.4'),
    Fe
  );
}
var Eh;
function Ov() {
  if (Eh) return Is.exports;
  Eh = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (o) {
        console.error(o);
      }
  }
  return (i(), (Is.exports = Rv()), Is.exports);
}
var jh;
function Mv() {
  if (jh) return Zn;
  jh = 1;
  var i = Av(),
    o = uf(),
    d = Ov();
  function s(e) {
    var t = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += '&args[]=' + encodeURIComponent(arguments[l]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function h(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function m(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function g(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function A(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function b(e) {
    if (m(e) !== e) throw Error(s(188));
  }
  function _(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = m(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return (b(n), e);
          if (u === a) return (b(n), t);
          u = u.sibling;
        }
        throw Error(s(188));
      }
      if (l.return !== a.return) ((l = n), (a = u));
      else {
        for (var c = !1, r = n.child; r; ) {
          if (r === l) {
            ((c = !0), (l = n), (a = u));
            break;
          }
          if (r === a) {
            ((c = !0), (a = n), (l = u));
            break;
          }
          r = r.sibling;
        }
        if (!c) {
          for (r = u.child; r; ) {
            if (r === l) {
              ((c = !0), (l = u), (a = n));
              break;
            }
            if (r === a) {
              ((c = !0), (a = u), (l = n));
              break;
            }
            r = r.sibling;
          }
          if (!c) throw Error(s(189));
        }
      }
      if (l.alternate !== a) throw Error(s(190));
    }
    if (l.tag !== 3) throw Error(s(188));
    return l.stateNode.current === l ? e : t;
  }
  function S(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = S(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var N = Object.assign,
    H = Symbol.for('react.element'),
    q = Symbol.for('react.transitional.element'),
    k = Symbol.for('react.portal'),
    Z = Symbol.for('react.fragment'),
    G = Symbol.for('react.strict_mode'),
    J = Symbol.for('react.profiler'),
    X = Symbol.for('react.consumer'),
    W = Symbol.for('react.context'),
    xe = Symbol.for('react.forward_ref'),
    Se = Symbol.for('react.suspense'),
    ze = Symbol.for('react.suspense_list'),
    P = Symbol.for('react.memo'),
    Re = Symbol.for('react.lazy'),
    Ve = Symbol.for('react.activity'),
    pt = Symbol.for('react.memo_cache_sentinel'),
    Lt = Symbol.iterator;
  function tt(e) {
    return e === null || typeof e != 'object' ?
        null
      : ((e = (Lt && e[Lt]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var Ll = Symbol.for('react.client.reference');
  function Qt(e) {
    if (e == null) return null;
    if (typeof e == 'function')
      return e.$$typeof === Ll ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case Z:
        return 'Fragment';
      case J:
        return 'Profiler';
      case G:
        return 'StrictMode';
      case Se:
        return 'Suspense';
      case ze:
        return 'SuspenseList';
      case Ve:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case k:
          return 'Portal';
        case W:
          return e.displayName || 'Context';
        case X:
          return (e._context.displayName || 'Context') + '.Consumer';
        case xe:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case P:
          return (
            (t = e.displayName || null),
            t !== null ? t : Qt(e.type) || 'Memo'
          );
        case Re:
          ((t = e._payload), (e = e._init));
          try {
            return Qt(e(t));
          } catch {}
      }
    return null;
  }
  var Mt = Array.isArray,
    O = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    B = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    F = { pending: !1, data: null, method: null, action: null },
    ve = [],
    pe = -1;
  function p(e) {
    return { current: e };
  }
  function U(e) {
    0 > pe || ((e.current = ve[pe]), (ve[pe] = null), pe--);
  }
  function L(e, t) {
    (pe++, (ve[pe] = e.current), (e.current = t));
  }
  var w = p(null),
    ee = p(null),
    ae = p(null),
    de = p(null);
  function Ie(e, t) {
    switch ((L(ae, t), L(ee, e), L(w, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Yd(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = Yd(t)), (e = Gd(t, e)));
        else
          switch (e) {
            case 'svg':
              e = 1;
              break;
            case 'math':
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (U(w), L(w, e));
  }
  function Oe() {
    (U(w), U(ee), U(ae));
  }
  function ka(e) {
    e.memoizedState !== null && L(de, e);
    var t = w.current,
      l = Gd(t, e.type);
    t !== l && (L(ee, e), L(w, l));
  }
  function eu(e) {
    (ee.current === e && (U(w), U(ee)),
      de.current === e && (U(de), (Yn._currentValue = F)));
  }
  var Ci, mf;
  function ql(e) {
    if (Ci === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        ((Ci = (t && t[1]) || ''),
          (mf =
            (
              -1 <
              l.stack.indexOf(`
    at`)
            ) ?
              ' (<anonymous>)'
            : -1 < l.stack.indexOf('@') ? '@unknown:0:0'
            : ''));
      }
    return (
      `
` +
      Ci +
      e +
      mf
    );
  }
  var Ri = !1;
  function Oi(e, t) {
    if (!e || Ri) return '';
    Ri = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var D = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(D.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(D, []);
                } catch (C) {
                  var z = C;
                }
                Reflect.construct(e, [], D);
              } else {
                try {
                  D.call();
                } catch (C) {
                  z = C;
                }
                e.call(D.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (C) {
                z = C;
              }
              (D = e()) &&
                typeof D.catch == 'function' &&
                D.catch(function () {});
            }
          } catch (C) {
            if (C && z && typeof C.stack == 'string') return [C.stack, z.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        'name',
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var u = a.DetermineComponentFrameRoot(),
        c = u[0],
        r = u[1];
      if (c && r) {
        var v = c.split(`
`),
          T = r.split(`
`);
        for (
          n = a = 0;
          a < v.length && !v[a].includes('DetermineComponentFrameRoot');
        )
          a++;
        for (; n < T.length && !T[n].includes('DetermineComponentFrameRoot'); )
          n++;
        if (a === v.length || n === T.length)
          for (
            a = v.length - 1, n = T.length - 1;
            1 <= a && 0 <= n && v[a] !== T[n];
          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (v[a] !== T[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || v[a] !== T[n])) {
                  var R =
                    `
` + v[a].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      R.includes('<anonymous>') &&
                      (R = R.replace('<anonymous>', e.displayName)),
                    R
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ((Ri = !1), (Error.prepareStackTrace = l));
    }
    return (l = e ? e.displayName || e.name : '') ? ql(l) : '';
  }
  function lm(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ql(e.type);
      case 16:
        return ql('Lazy');
      case 13:
        return e.child !== t && t !== null ?
            ql('Suspense Fallback')
          : ql('Suspense');
      case 19:
        return ql('SuspenseList');
      case 0:
      case 15:
        return Oi(e.type, !1);
      case 11:
        return Oi(e.type.render, !1);
      case 1:
        return Oi(e.type, !0);
      case 31:
        return ql('Activity');
      default:
        return '';
    }
  }
  function vf(e) {
    try {
      var t = '',
        l = null;
      do ((t += lm(e, l)), (l = e), (e = e.return));
      while (e);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var Mi = Object.prototype.hasOwnProperty,
    Di = i.unstable_scheduleCallback,
    Ui = i.unstable_cancelCallback,
    am = i.unstable_shouldYield,
    nm = i.unstable_requestPaint,
    ft = i.unstable_now,
    um = i.unstable_getCurrentPriorityLevel,
    _f = i.unstable_ImmediatePriority,
    yf = i.unstable_UserBlockingPriority,
    tu = i.unstable_NormalPriority,
    im = i.unstable_LowPriority,
    gf = i.unstable_IdlePriority,
    cm = i.log,
    sm = i.unstable_setDisableYieldValue,
    Wa = null,
    rt = null;
  function ol(e) {
    if (
      (typeof cm == 'function' && sm(e),
      rt && typeof rt.setStrictMode == 'function')
    )
      try {
        rt.setStrictMode(Wa, e);
      } catch {}
  }
  var ot = Math.clz32 ? Math.clz32 : om,
    fm = Math.log,
    rm = Math.LN2;
  function om(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((fm(e) / rm) | 0)) | 0);
  }
  var lu = 256,
    au = 262144,
    nu = 4194304;
  function Yl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function uu(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = e.suspendedLanes,
      c = e.pingedLanes;
    e = e.warmLanes;
    var r = a & 134217727;
    return (
      r !== 0 ?
        ((a = r & ~u),
        a !== 0 ?
          (n = Yl(a))
        : ((c &= r),
          c !== 0 ? (n = Yl(c)) : l || ((l = r & ~e), l !== 0 && (n = Yl(l)))))
      : ((r = a & ~u),
        r !== 0 ? (n = Yl(r))
        : c !== 0 ? (n = Yl(c))
        : l || ((l = a & ~e), l !== 0 && (n = Yl(l)))),
      n === 0 ? 0
      : (
        t !== 0 &&
        t !== n &&
        (t & u) === 0 &&
        ((u = n & -n),
        (l = t & -t),
        u >= l || (u === 32 && (l & 4194048) !== 0))
      ) ?
        t
      : n
    );
  }
  function Fa(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function dm(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function pf() {
    var e = nu;
    return ((nu <<= 1), (nu & 62914560) === 0 && (nu = 4194304), e);
  }
  function Hi(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Ia(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function hm(e, t, l, a, n, u) {
    var c = e.pendingLanes;
    ((e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0));
    var r = e.entanglements,
      v = e.expirationTimes,
      T = e.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var R = 31 - ot(l),
        D = 1 << R;
      ((r[R] = 0), (v[R] = -1));
      var z = T[R];
      if (z !== null)
        for (T[R] = null, R = 0; R < z.length; R++) {
          var C = z[R];
          C !== null && (C.lane &= -536870913);
        }
      l &= ~D;
    }
    (a !== 0 && bf(e, a, 0),
      u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(c & ~t)));
  }
  function bf(e, t, l) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - ot(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 261930)));
  }
  function Sf(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var a = 31 - ot(l),
        n = 1 << a;
      ((n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n));
    }
  }
  function xf(e, t) {
    var l = t & -t;
    return (
      (l = (l & 42) !== 0 ? 1 : Bi(l)),
      (l & (e.suspendedLanes | t)) !== 0 ? 0 : l
    );
  }
  function Bi(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Li(e) {
    return (
      (e &= -e),
      2 < e ?
        8 < e ?
          (e & 134217727) !== 0 ?
            32
          : 268435456
        : 8
      : 2
    );
  }
  function Ef() {
    var e = B.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : fh(e.type));
  }
  function jf(e, t) {
    var l = B.p;
    try {
      return ((B.p = e), t());
    } finally {
      B.p = l;
    }
  }
  var dl = Math.random().toString(36).slice(2),
    Ke = '__reactFiber$' + dl,
    lt = '__reactProps$' + dl,
    ca = '__reactContainer$' + dl,
    qi = '__reactEvents$' + dl,
    mm = '__reactListeners$' + dl,
    vm = '__reactHandles$' + dl,
    Nf = '__reactResources$' + dl,
    Pa = '__reactMarker$' + dl;
  function Yi(e) {
    (delete e[Ke], delete e[lt], delete e[qi], delete e[mm], delete e[vm]);
  }
  function sa(e) {
    var t = e[Ke];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[ca] || l[Ke])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = Jd(e); e !== null; ) {
            if ((l = e[Ke])) return l;
            e = Jd(e);
          }
        return t;
      }
      ((e = l), (l = e.parentNode));
    }
    return null;
  }
  function fa(e) {
    if ((e = e[Ke] || e[ca])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function en(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function ra(e) {
    var t = e[Nf];
    return (
      t ||
        (t = e[Nf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Qe(e) {
    e[Pa] = !0;
  }
  var Tf = new Set(),
    zf = {};
  function Gl(e, t) {
    (oa(e, t), oa(e + 'Capture', t));
  }
  function oa(e, t) {
    for (zf[e] = t, e = 0; e < t.length; e++) Tf.add(t[e]);
  }
  var _m = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    Af = {},
    Cf = {};
  function ym(e) {
    return (
      Mi.call(Cf, e) ? !0
      : Mi.call(Af, e) ? !1
      : _m.test(e) ? (Cf[e] = !0)
      : ((Af[e] = !0), !1)
    );
  }
  function iu(e, t, l) {
    if (ym(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t);
            return;
          case 'boolean':
            var a = t.toLowerCase().slice(0, 5);
            if (a !== 'data-' && a !== 'aria-') {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, '' + l);
      }
  }
  function cu(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, '' + l);
    }
  }
  function Zt(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, '' + a);
    }
  }
  function bt(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function Rf(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    );
  }
  function gm(e, t, l) {
    var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof a < 'u' &&
      typeof a.get == 'function' &&
      typeof a.set == 'function'
    ) {
      var n = a.get,
        u = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (c) {
            ((l = '' + c), u.call(this, c));
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (c) {
            l = '' + c;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Gi(e) {
    if (!e._valueTracker) {
      var t = Rf(e) ? 'checked' : 'value';
      e._valueTracker = gm(e, t, '' + e[t]);
    }
  }
  function Of(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = '';
    return (
      e &&
        (a =
          Rf(e) ?
            e.checked ?
              'true'
            : 'false'
          : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function su(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var pm = /[\n"\\]/g;
  function St(e) {
    return e.replace(pm, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Xi(e, t, l, a, n, u, c, r) {
    ((e.name = ''),
      (
        c != null &&
        typeof c != 'function' &&
        typeof c != 'symbol' &&
        typeof c != 'boolean'
      ) ?
        (e.type = c)
      : e.removeAttribute('type'),
      t != null ?
        c === 'number' ?
          ((t === 0 && e.value === '') || e.value != t) &&
          (e.value = '' + bt(t))
        : e.value !== '' + bt(t) && (e.value = '' + bt(t))
      : (c !== 'submit' && c !== 'reset') || e.removeAttribute('value'),
      t != null ? wi(e, c, bt(t))
      : l != null ? wi(e, c, bt(l))
      : a != null && e.removeAttribute('value'),
      n == null && u != null && (e.defaultChecked = !!u),
      n != null &&
        (e.checked = n && typeof n != 'function' && typeof n != 'symbol'),
      (
        r != null &&
        typeof r != 'function' &&
        typeof r != 'symbol' &&
        typeof r != 'boolean'
      ) ?
        (e.name = '' + bt(r))
      : e.removeAttribute('name'));
  }
  function Mf(e, t, l, a, n, u, c, r) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (e.type = u),
      t != null || l != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || t != null)) {
        Gi(e);
        return;
      }
      ((l = l != null ? '' + bt(l) : ''),
        (t = t != null ? '' + bt(t) : l),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((a = a ?? n),
      (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
      (e.checked = r ? e.checked : !!a),
      (e.defaultChecked = !!a),
      c != null &&
        typeof c != 'function' &&
        typeof c != 'symbol' &&
        typeof c != 'boolean' &&
        (e.name = c),
      Gi(e));
  }
  function wi(e, t, l) {
    (t === 'number' && su(e.ownerDocument) === e) ||
      e.defaultValue === '' + l ||
      (e.defaultValue = '' + l);
  }
  function da(e, t, l, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var n = 0; n < l.length; n++) t['$' + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        ((n = t.hasOwnProperty('$' + e[l].value)),
          e[l].selected !== n && (e[l].selected = n),
          n && a && (e[l].defaultSelected = !0));
    } else {
      for (l = '' + bt(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          ((e[n].selected = !0), a && (e[n].defaultSelected = !0));
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Df(e, t, l) {
    if (
      t != null &&
      ((t = '' + bt(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? '' + bt(l) : '';
  }
  function Uf(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(s(92));
        if (Mt(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        l = a;
      }
      (l == null && (l = ''), (t = l));
    }
    ((l = bt(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== '' && a !== null && (e.value = a),
      Gi(e));
  }
  function ha(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var bm = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' ',
    ),
  );
  function Hf(e, t, l) {
    var a = t.indexOf('--') === 0;
    l == null || typeof l == 'boolean' || l === '' ?
      a ? e.setProperty(t, '')
      : t === 'float' ? (e.cssFloat = '')
      : (e[t] = '')
    : a ? e.setProperty(t, l)
    : typeof l != 'number' || l === 0 || bm.has(t) ?
      t === 'float' ?
        (e.cssFloat = l)
      : (e[t] = ('' + l).trim())
    : (e[t] = l + 'px');
  }
  function Bf(e, t, l) {
    if (t != null && typeof t != 'object') throw Error(s(62));
    if (((e = e.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf('--') === 0 ? e.setProperty(a, '')
          : a === 'float' ? (e.cssFloat = '')
          : (e[a] = ''));
      for (var n in t)
        ((a = t[n]), t.hasOwnProperty(n) && l[n] !== a && Hf(e, n, a));
    } else for (var u in t) t.hasOwnProperty(u) && Hf(e, u, t[u]);
  }
  function Qi(e) {
    if (e.indexOf('-') === -1) return !1;
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var Sm = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    xm =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function fu(e) {
    return xm.test('' + e) ?
        "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Vt() {}
  var Zi = null;
  function Vi(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ma = null,
    va = null;
  function Lf(e) {
    var t = fa(e);
    if (t && (e = t.stateNode)) {
      var l = e[lt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (Xi(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (t = l.name),
            l.type === 'radio' && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + St('' + t) + '"][type="radio"]',
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[lt] || null;
                if (!n) throw Error(s(90));
                Xi(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name,
                );
              }
            }
            for (t = 0; t < l.length; t++)
              ((a = l[t]), a.form === e.form && Of(a));
          }
          break e;
        case 'textarea':
          Df(e, l.value, l.defaultValue);
          break e;
        case 'select':
          ((t = l.value), t != null && da(e, !!l.multiple, t, !1));
      }
    }
  }
  var Ki = !1;
  function qf(e, t, l) {
    if (Ki) return e(t, l);
    Ki = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((Ki = !1),
        (ma !== null || va !== null) &&
          (Wu(), ma && ((t = ma), (e = va), (va = ma = null), Lf(t), e)))
      )
        for (t = 0; t < e.length; t++) Lf(e[t]);
    }
  }
  function tn(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[lt] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ((a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !a));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != 'function') throw Error(s(231, t, typeof l));
    return l;
  }
  var Kt = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Ji = !1;
  if (Kt)
    try {
      var ln = {};
      (Object.defineProperty(ln, 'passive', {
        get: function () {
          Ji = !0;
        },
      }),
        window.addEventListener('test', ln, ln),
        window.removeEventListener('test', ln, ln));
    } catch {
      Ji = !1;
    }
  var hl = null,
    $i = null,
    ru = null;
  function Yf() {
    if (ru) return ru;
    var e,
      t = $i,
      l = t.length,
      a,
      n = 'value' in hl ? hl.value : hl.textContent,
      u = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++);
    var c = l - e;
    for (a = 1; a <= c && t[l - a] === n[u - a]; a++);
    return (ru = n.slice(e, 1 < a ? 1 - a : void 0));
  }
  function ou(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ?
        ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function du() {
    return !0;
  }
  function Gf() {
    return !1;
  }
  function at(e) {
    function t(l, a, n, u, c) {
      ((this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = c),
        (this.currentTarget = null));
      for (var r in e)
        e.hasOwnProperty(r) && ((l = e[r]), (this[r] = l ? l(u) : u[r]));
      return (
        (this.isDefaultPrevented =
          (
            u.defaultPrevented != null ?
              u.defaultPrevented
            : u.returnValue === !1
          ) ?
            du
          : Gf),
        (this.isPropagationStopped = Gf),
        this
      );
    }
    return (
      N(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault ?
              l.preventDefault()
            : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
            (this.isDefaultPrevented = du));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation ?
              l.stopPropagation()
            : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
            (this.isPropagationStopped = du));
        },
        persist: function () {},
        isPersistent: du,
      }),
      t
    );
  }
  var Xl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    hu = at(Xl),
    an = N({}, Xl, { view: 0, detail: 0 }),
    Em = at(an),
    ki,
    Wi,
    nn,
    mu = N({}, an, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ii,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return (
          e.relatedTarget === void 0 ?
            e.fromElement === e.srcElement ?
              e.toElement
            : e.fromElement
          : e.relatedTarget
        );
      },
      movementX: function (e) {
        return 'movementX' in e ?
            e.movementX
          : (e !== nn &&
              (nn && e.type === 'mousemove' ?
                ((ki = e.screenX - nn.screenX), (Wi = e.screenY - nn.screenY))
              : (Wi = ki = 0),
              (nn = e)),
            ki);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Wi;
      },
    }),
    Xf = at(mu),
    jm = N({}, mu, { dataTransfer: 0 }),
    Nm = at(jm),
    Tm = N({}, an, { relatedTarget: 0 }),
    Fi = at(Tm),
    zm = N({}, Xl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Am = at(zm),
    Cm = N({}, Xl, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Rm = at(Cm),
    Om = N({}, Xl, { data: 0 }),
    wf = at(Om),
    Mm = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    Dm = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    Um = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function Hm(e) {
    var t = this.nativeEvent;
    return (
      t.getModifierState ? t.getModifierState(e)
      : (e = Um[e]) ? !!t[e]
      : !1
    );
  }
  function Ii() {
    return Hm;
  }
  var Bm = N({}, an, {
      key: function (e) {
        if (e.key) {
          var t = Mm[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return (
          e.type === 'keypress' ?
            ((e = ou(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup' ?
            Dm[e.keyCode] || 'Unidentified'
          : ''
        );
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ii,
      charCode: function (e) {
        return e.type === 'keypress' ? ou(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return (
          e.type === 'keypress' ? ou(e)
          : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode
          : 0
        );
      },
    }),
    Lm = at(Bm),
    qm = N({}, mu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Qf = at(qm),
    Ym = N({}, an, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ii,
    }),
    Gm = at(Ym),
    Xm = N({}, Xl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    wm = at(Xm),
    Qm = N({}, mu, {
      deltaX: function (e) {
        return (
          'deltaX' in e ? e.deltaX
          : 'wheelDeltaX' in e ? -e.wheelDeltaX
          : 0
        );
      },
      deltaY: function (e) {
        return (
          'deltaY' in e ? e.deltaY
          : 'wheelDeltaY' in e ? -e.wheelDeltaY
          : 'wheelDelta' in e ? -e.wheelDelta
          : 0
        );
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Zm = at(Qm),
    Vm = N({}, Xl, { newState: 0, oldState: 0 }),
    Km = at(Vm),
    Jm = [9, 13, 27, 32],
    Pi = Kt && 'CompositionEvent' in window,
    un = null;
  Kt && 'documentMode' in document && (un = document.documentMode);
  var $m = Kt && 'TextEvent' in window && !un,
    Zf = Kt && (!Pi || (un && 8 < un && 11 >= un)),
    Vf = ' ',
    Kf = !1;
  function Jf(e, t) {
    switch (e) {
      case 'keyup':
        return Jm.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function $f(e) {
    return (
      (e = e.detail),
      typeof e == 'object' && 'data' in e ? e.data : null
    );
  }
  var _a = !1;
  function km(e, t) {
    switch (e) {
      case 'compositionend':
        return $f(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Kf = !0), Vf);
      case 'textInput':
        return ((e = t.data), e === Vf && Kf ? null : e);
      default:
        return null;
    }
  }
  function Wm(e, t) {
    if (_a)
      return e === 'compositionend' || (!Pi && Jf(e, t)) ?
          ((e = Yf()), (ru = $i = hl = null), (_a = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return Zf && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Fm = {
    'color': !0,
    'date': !0,
    'datetime': !0,
    'datetime-local': !0,
    'email': !0,
    'month': !0,
    'number': !0,
    'password': !0,
    'range': !0,
    'search': !0,
    'tel': !0,
    'text': !0,
    'time': !0,
    'url': !0,
    'week': !0,
  };
  function kf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Fm[e.type] : t === 'textarea';
  }
  function Wf(e, t, l, a) {
    (ma ?
      va ? va.push(a)
      : (va = [a])
    : (ma = a),
      (t = ai(t, 'onChange')),
      0 < t.length &&
        ((l = new hu('onChange', 'change', null, l, a)),
        e.push({ event: l, listeners: t })));
  }
  var cn = null,
    sn = null;
  function Im(e) {
    Dd(e, 0);
  }
  function vu(e) {
    var t = en(e);
    if (Of(t)) return e;
  }
  function Ff(e, t) {
    if (e === 'change') return t;
  }
  var If = !1;
  if (Kt) {
    var ec;
    if (Kt) {
      var tc = 'oninput' in document;
      if (!tc) {
        var Pf = document.createElement('div');
        (Pf.setAttribute('oninput', 'return;'),
          (tc = typeof Pf.oninput == 'function'));
      }
      ec = tc;
    } else ec = !1;
    If = ec && (!document.documentMode || 9 < document.documentMode);
  }
  function er() {
    cn && (cn.detachEvent('onpropertychange', tr), (sn = cn = null));
  }
  function tr(e) {
    if (e.propertyName === 'value' && vu(sn)) {
      var t = [];
      (Wf(t, sn, e, Vi(e)), qf(Im, t));
    }
  }
  function Pm(e, t, l) {
    e === 'focusin' ?
      (er(), (cn = t), (sn = l), cn.attachEvent('onpropertychange', tr))
    : e === 'focusout' && er();
  }
  function e0(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return vu(sn);
  }
  function t0(e, t) {
    if (e === 'click') return vu(t);
  }
  function l0(e, t) {
    if (e === 'input' || e === 'change') return vu(t);
  }
  function a0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var dt = typeof Object.is == 'function' ? Object.is : a0;
  function fn(e, t) {
    if (dt(e, t)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!Mi.call(t, n) || !dt(e[n], t[n])) return !1;
    }
    return !0;
  }
  function lr(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ar(e, t) {
    var l = lr(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = e + l.textContent.length), e <= t && a >= t))
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = lr(l);
    }
  }
  function nr(e, t) {
    return (
      e && t ?
        e === t ? !0
        : e && e.nodeType === 3 ? !1
        : t && t.nodeType === 3 ? nr(e, t.parentNode)
        : 'contains' in e ? e.contains(t)
        : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1
    );
  }
  function ur(e) {
    e =
      (
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
      ) ?
        e.ownerDocument.defaultView
      : window;
    for (var t = su(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == 'string';
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = su(e.document);
    }
    return t;
  }
  function lc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  var n0 = Kt && 'documentMode' in document && 11 >= document.documentMode,
    ya = null,
    ac = null,
    rn = null,
    nc = !1;
  function ir(e, t, l) {
    var a =
      l.window === l ? l.document
      : l.nodeType === 9 ? l
      : l.ownerDocument;
    nc ||
      ya == null ||
      ya !== su(a) ||
      ((a = ya),
      'selectionStart' in a && lc(a) ?
        (a = { start: a.selectionStart, end: a.selectionEnd })
      : ((a = (
          (a.ownerDocument && a.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (a = {
          anchorNode: a.anchorNode,
          anchorOffset: a.anchorOffset,
          focusNode: a.focusNode,
          focusOffset: a.focusOffset,
        })),
      (rn && fn(rn, a)) ||
        ((rn = a),
        (a = ai(ac, 'onSelect')),
        0 < a.length &&
          ((t = new hu('onSelect', 'select', null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = ya))));
  }
  function wl(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l['Webkit' + e] = 'webkit' + t),
      (l['Moz' + e] = 'moz' + t),
      l
    );
  }
  var ga = {
      animationend: wl('Animation', 'AnimationEnd'),
      animationiteration: wl('Animation', 'AnimationIteration'),
      animationstart: wl('Animation', 'AnimationStart'),
      transitionrun: wl('Transition', 'TransitionRun'),
      transitionstart: wl('Transition', 'TransitionStart'),
      transitioncancel: wl('Transition', 'TransitionCancel'),
      transitionend: wl('Transition', 'TransitionEnd'),
    },
    uc = {},
    cr = {};
  Kt &&
    ((cr = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete ga.animationend.animation,
      delete ga.animationiteration.animation,
      delete ga.animationstart.animation),
    'TransitionEvent' in window || delete ga.transitionend.transition);
  function Ql(e) {
    if (uc[e]) return uc[e];
    if (!ga[e]) return e;
    var t = ga[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in cr) return (uc[e] = t[l]);
    return e;
  }
  var sr = Ql('animationend'),
    fr = Ql('animationiteration'),
    rr = Ql('animationstart'),
    u0 = Ql('transitionrun'),
    i0 = Ql('transitionstart'),
    c0 = Ql('transitioncancel'),
    or = Ql('transitionend'),
    dr = new Map(),
    ic =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  ic.push('scrollEnd');
  function Dt(e, t) {
    (dr.set(e, t), Gl(t, [e]));
  }
  var _u =
      typeof reportError == 'function' ? reportError : (
        function (e) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var t = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                (
                  typeof e == 'object' &&
                  e !== null &&
                  typeof e.message == 'string'
                ) ?
                  String(e.message)
                : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', e);
            return;
          }
          console.error(e);
        }
      ),
    xt = [],
    pa = 0,
    cc = 0;
  function yu() {
    for (var e = pa, t = (cc = pa = 0); t < e; ) {
      var l = xt[t];
      xt[t++] = null;
      var a = xt[t];
      xt[t++] = null;
      var n = xt[t];
      xt[t++] = null;
      var u = xt[t];
      if (((xt[t++] = null), a !== null && n !== null)) {
        var c = a.pending;
        (c === null ? (n.next = n) : ((n.next = c.next), (c.next = n)),
          (a.pending = n));
      }
      u !== 0 && hr(l, n, u);
    }
  }
  function gu(e, t, l, a) {
    ((xt[pa++] = e),
      (xt[pa++] = t),
      (xt[pa++] = l),
      (xt[pa++] = a),
      (cc |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function sc(e, t, l, a) {
    return (gu(e, t, l, a), pu(e));
  }
  function Zl(e, t) {
    return (gu(e, null, null, t), pu(e));
  }
  function hr(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = e.return; u !== null; )
      ((u.childLanes |= l),
        (a = u.alternate),
        a !== null && (a.childLanes |= l),
        u.tag === 22 &&
          ((e = u.stateNode), e === null || e._visibility & 1 || (n = !0)),
        (e = u),
        (u = u.return));
    return e.tag === 3 ?
        ((u = e.stateNode),
        n &&
          t !== null &&
          ((n = 31 - ot(l)),
          (e = u.hiddenUpdates),
          (a = e[n]),
          a === null ? (e[n] = [t]) : a.push(t),
          (t.lane = l | 536870912)),
        u)
      : null;
  }
  function pu(e) {
    if (50 < Mn) throw ((Mn = 0), (ys = null), Error(s(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var ba = {};
  function s0(e, t, l, a) {
    ((this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function ht(e, t, l, a) {
    return new s0(e, t, l, a);
  }
  function fc(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Jt(e, t) {
    var l = e.alternate;
    return (
      l === null ?
        ((l = ht(e.tag, t, e.key, e.mode)),
        (l.elementType = e.elementType),
        (l.type = e.type),
        (l.stateNode = e.stateNode),
        (l.alternate = e),
        (e.alternate = l))
      : ((l.pendingProps = t),
        (l.type = e.type),
        (l.flags = 0),
        (l.subtreeFlags = 0),
        (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function mr(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
      l === null ?
        ((e.childLanes = 0),
        (e.lanes = t),
        (e.child = null),
        (e.subtreeFlags = 0),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.updateQueue = null),
        (e.dependencies = null),
        (e.stateNode = null))
      : ((e.childLanes = l.childLanes),
        (e.lanes = l.lanes),
        (e.child = l.child),
        (e.subtreeFlags = 0),
        (e.deletions = null),
        (e.memoizedProps = l.memoizedProps),
        (e.memoizedState = l.memoizedState),
        (e.updateQueue = l.updateQueue),
        (e.type = l.type),
        (t = l.dependencies),
        (e.dependencies =
          t === null ? null : (
            { lanes: t.lanes, firstContext: t.firstContext }
          ))),
      e
    );
  }
  function bu(e, t, l, a, n, u) {
    var c = 0;
    if (((a = e), typeof e == 'function')) fc(e) && (c = 1);
    else if (typeof e == 'string')
      c =
        hv(e, l, w.current) ? 26
        : e === 'html' || e === 'head' || e === 'body' ? 27
        : 5;
    else
      e: switch (e) {
        case Ve:
          return (
            (e = ht(31, l, t, n)),
            (e.elementType = Ve),
            (e.lanes = u),
            e
          );
        case Z:
          return Vl(l.children, n, u, t);
        case G:
          ((c = 8), (n |= 24));
          break;
        case J:
          return (
            (e = ht(12, l, t, n | 2)),
            (e.elementType = J),
            (e.lanes = u),
            e
          );
        case Se:
          return (
            (e = ht(13, l, t, n)),
            (e.elementType = Se),
            (e.lanes = u),
            e
          );
        case ze:
          return (
            (e = ht(19, l, t, n)),
            (e.elementType = ze),
            (e.lanes = u),
            e
          );
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case W:
                c = 10;
                break e;
              case X:
                c = 9;
                break e;
              case xe:
                c = 11;
                break e;
              case P:
                c = 14;
                break e;
              case Re:
                ((c = 16), (a = null));
                break e;
            }
          ((c = 29),
            (l = Error(s(130, e === null ? 'null' : typeof e, ''))),
            (a = null));
      }
    return (
      (t = ht(c, l, t, n)),
      (t.elementType = e),
      (t.type = a),
      (t.lanes = u),
      t
    );
  }
  function Vl(e, t, l, a) {
    return ((e = ht(7, e, a, t)), (e.lanes = l), e);
  }
  function rc(e, t, l) {
    return ((e = ht(6, e, null, t)), (e.lanes = l), e);
  }
  function vr(e) {
    var t = ht(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function oc(e, t, l) {
    return (
      (t = ht(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var _r = new WeakMap();
  function Et(e, t) {
    if (typeof e == 'object' && e !== null) {
      var l = _r.get(e);
      return l !== void 0 ? l : (
          ((t = { value: e, source: t, stack: vf(t) }), _r.set(e, t), t)
        );
    }
    return { value: e, source: t, stack: vf(t) };
  }
  var Sa = [],
    xa = 0,
    Su = null,
    on = 0,
    jt = [],
    Nt = 0,
    ml = null,
    qt = 1,
    Yt = '';
  function $t(e, t) {
    ((Sa[xa++] = on), (Sa[xa++] = Su), (Su = e), (on = t));
  }
  function yr(e, t, l) {
    ((jt[Nt++] = qt), (jt[Nt++] = Yt), (jt[Nt++] = ml), (ml = e));
    var a = qt;
    e = Yt;
    var n = 32 - ot(a) - 1;
    ((a &= ~(1 << n)), (l += 1));
    var u = 32 - ot(t) + n;
    if (30 < u) {
      var c = n - (n % 5);
      ((u = (a & ((1 << c) - 1)).toString(32)),
        (a >>= c),
        (n -= c),
        (qt = (1 << (32 - ot(t) + n)) | (l << n) | a),
        (Yt = u + e));
    } else ((qt = (1 << u) | (l << n) | a), (Yt = e));
  }
  function dc(e) {
    e.return !== null && ($t(e, 1), yr(e, 1, 0));
  }
  function hc(e) {
    for (; e === Su; )
      ((Su = Sa[--xa]), (Sa[xa] = null), (on = Sa[--xa]), (Sa[xa] = null));
    for (; e === ml; )
      ((ml = jt[--Nt]),
        (jt[Nt] = null),
        (Yt = jt[--Nt]),
        (jt[Nt] = null),
        (qt = jt[--Nt]),
        (jt[Nt] = null));
  }
  function gr(e, t) {
    ((jt[Nt++] = qt),
      (jt[Nt++] = Yt),
      (jt[Nt++] = ml),
      (qt = t.id),
      (Yt = t.overflow),
      (ml = e));
  }
  var Je = null,
    Ee = null,
    se = !1,
    vl = null,
    Tt = !1,
    mc = Error(s(519));
  function _l(e) {
    var t = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ?
          'text'
        : 'HTML',
        '',
      ),
    );
    throw (dn(Et(t, e)), mc);
  }
  function pr(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (((t[Ke] = e), (t[lt] = a), l)) {
      case 'dialog':
        (ue('cancel', t), ue('close', t));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        ue('load', t);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < Un.length; l++) ue(Un[l], t);
        break;
      case 'source':
        ue('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        (ue('error', t), ue('load', t));
        break;
      case 'details':
        ue('toggle', t);
        break;
      case 'input':
        (ue('invalid', t),
          Mf(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ));
        break;
      case 'select':
        ue('invalid', t);
        break;
      case 'textarea':
        (ue('invalid', t), Uf(t, a.value, a.defaultValue, a.children));
    }
    ((l = a.children),
      (
        (typeof l != 'string' &&
          typeof l != 'number' &&
          typeof l != 'bigint') ||
        t.textContent === '' + l ||
        a.suppressHydrationWarning === !0 ||
        Ld(t.textContent, l)
      ) ?
        (a.popover != null && (ue('beforetoggle', t), ue('toggle', t)),
        a.onScroll != null && ue('scroll', t),
        a.onScrollEnd != null && ue('scrollend', t),
        a.onClick != null && (t.onclick = Vt),
        (t = !0))
      : (t = !1),
      t || _l(e, !0));
  }
  function br(e) {
    for (Je = e.return; Je; )
      switch (Je.tag) {
        case 5:
        case 31:
        case 13:
          Tt = !1;
          return;
        case 27:
        case 3:
          Tt = !0;
          return;
        default:
          Je = Je.return;
      }
  }
  function Ea(e) {
    if (e !== Je) return !1;
    if (!se) return (br(e), (se = !0), !1);
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type),
          (l =
            !(l !== 'form' && l !== 'button') || Ms(e.type, e.memoizedProps))),
        (l = !l)),
      l && Ee && _l(e),
      br(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      Ee = Kd(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      Ee = Kd(e);
    } else
      t === 27 ?
        ((t = Ee), Rl(e.type) ? ((e = Ls), (Ls = null), (Ee = e)) : (Ee = t))
      : (Ee = Je ? At(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Kl() {
    ((Ee = Je = null), (se = !1));
  }
  function vc() {
    var e = vl;
    return (
      e !== null &&
        (ct === null ? (ct = e) : ct.push.apply(ct, e), (vl = null)),
      e
    );
  }
  function dn(e) {
    vl === null ? (vl = [e]) : vl.push(e);
  }
  var _c = p(null),
    Jl = null,
    kt = null;
  function yl(e, t, l) {
    (L(_c, t._currentValue), (t._currentValue = l));
  }
  function Wt(e) {
    ((e._currentValue = _c.current), U(_c));
  }
  function yc(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t ?
          ((e.childLanes |= t), a !== null && (a.childLanes |= t))
        : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function gc(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var c = n.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var r = u;
          u = n;
          for (var v = 0; v < t.length; v++)
            if (r.context === t[v]) {
              ((u.lanes |= l),
                (r = u.alternate),
                r !== null && (r.lanes |= l),
                yc(u.return, l, e),
                a || (c = null));
              break e;
            }
          u = r.next;
        }
      } else if (n.tag === 18) {
        if (((c = n.return), c === null)) throw Error(s(341));
        ((c.lanes |= l),
          (u = c.alternate),
          u !== null && (u.lanes |= l),
          yc(c, l, e),
          (c = null));
      } else c = n.child;
      if (c !== null) c.return = n;
      else
        for (c = n; c !== null; ) {
          if (c === e) {
            c = null;
            break;
          }
          if (((n = c.sibling), n !== null)) {
            ((n.return = c.return), (c = n));
            break;
          }
          c = c.return;
        }
      n = c;
    }
  }
  function ja(e, t, l, a) {
    e = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var c = n.alternate;
        if (c === null) throw Error(s(387));
        if (((c = c.memoizedProps), c !== null)) {
          var r = n.type;
          dt(n.pendingProps.value, c.value) ||
            (e !== null ? e.push(r) : (e = [r]));
        }
      } else if (n === de.current) {
        if (((c = n.alternate), c === null)) throw Error(s(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(Yn) : (e = [Yn]));
      }
      n = n.return;
    }
    (e !== null && gc(t, e, l, a), (t.flags |= 262144));
  }
  function xu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!dt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function $l(e) {
    ((Jl = e),
      (kt = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function $e(e) {
    return Sr(Jl, e);
  }
  function Eu(e, t) {
    return (Jl === null && $l(e), Sr(e, t));
  }
  function Sr(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), kt === null)) {
      if (e === null) throw Error(s(308));
      ((kt = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else kt = kt.next = t;
    return l;
  }
  var f0 =
      typeof AbortController < 'u' ? AbortController : (
        function () {
          var e = [],
            t = (this.signal = {
              aborted: !1,
              addEventListener: function (l, a) {
                e.push(a);
              },
            });
          this.abort = function () {
            ((t.aborted = !0),
              e.forEach(function (l) {
                return l();
              }));
          };
        }
      ),
    r0 = i.unstable_scheduleCallback,
    o0 = i.unstable_NormalPriority,
    He = {
      $$typeof: W,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function pc() {
    return { controller: new f0(), data: new Map(), refCount: 0 };
  }
  function hn(e) {
    (e.refCount--,
      e.refCount === 0 &&
        r0(o0, function () {
          e.controller.abort();
        }));
  }
  var mn = null,
    bc = 0,
    Na = 0,
    Ta = null;
  function d0(e, t) {
    if (mn === null) {
      var l = (mn = []);
      ((bc = 0),
        (Na = Es()),
        (Ta = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        }));
    }
    return (bc++, t.then(xr, xr), t);
  }
  function xr() {
    if (--bc === 0 && mn !== null) {
      Ta !== null && (Ta.status = 'fulfilled');
      var e = mn;
      ((mn = null), (Na = 0), (Ta = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function h0(e, t) {
    var l = [],
      a = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      e.then(
        function () {
          ((a.status = 'fulfilled'), (a.value = t));
          for (var n = 0; n < l.length; n++) (0, l[n])(t);
        },
        function (n) {
          for (a.status = 'rejected', a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        },
      ),
      a
    );
  }
  var Er = O.S;
  O.S = function (e, t) {
    ((cd = ft()),
      typeof t == 'object' &&
        t !== null &&
        typeof t.then == 'function' &&
        d0(e, t),
      Er !== null && Er(e, t));
  };
  var kl = p(null);
  function Sc() {
    var e = kl.current;
    return e !== null ? e : be.pooledCache;
  }
  function ju(e, t) {
    t === null ? L(kl, kl.current) : L(kl, t.pool);
  }
  function jr() {
    var e = Sc();
    return e === null ? null : { parent: He._currentValue, pool: e };
  }
  var za = Error(s(460)),
    xc = Error(s(474)),
    Nu = Error(s(542)),
    Tu = { then: function () {} };
  function Nr(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function Tr(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(Vt, Vt), (t = l)),
      t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), Ar(e), e);
      default:
        if (typeof t.status == 'string') t.then(Vt, Vt);
        else {
          if (((e = be), e !== null && 100 < e.shellSuspendCounter))
            throw Error(s(482));
          ((e = t),
            (e.status = 'pending'),
            e.then(
              function (a) {
                if (t.status === 'pending') {
                  var n = t;
                  ((n.status = 'fulfilled'), (n.value = a));
                }
              },
              function (a) {
                if (t.status === 'pending') {
                  var n = t;
                  ((n.status = 'rejected'), (n.reason = a));
                }
              },
            ));
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((e = t.reason), Ar(e), e);
        }
        throw ((Fl = t), za);
    }
  }
  function Wl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == 'object' && typeof l.then == 'function' ?
          ((Fl = l), za)
        : l;
    }
  }
  var Fl = null;
  function zr() {
    if (Fl === null) throw Error(s(459));
    var e = Fl;
    return ((Fl = null), e);
  }
  function Ar(e) {
    if (e === za || e === Nu) throw Error(s(483));
  }
  var Aa = null,
    vn = 0;
  function zu(e) {
    var t = vn;
    return ((vn += 1), Aa === null && (Aa = []), Tr(Aa, e, t));
  }
  function _n(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Au(e, t) {
    throw t.$$typeof === H ?
        Error(s(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          s(
            31,
            e === '[object Object]' ?
              'object with keys {' + Object.keys(t).join(', ') + '}'
            : e,
          ),
        ));
  }
  function Cr(e) {
    function t(x, y) {
      if (e) {
        var E = x.deletions;
        E === null ? ((x.deletions = [y]), (x.flags |= 16)) : E.push(y);
      }
    }
    function l(x, y) {
      if (!e) return null;
      for (; y !== null; ) (t(x, y), (y = y.sibling));
      return null;
    }
    function a(x) {
      for (var y = new Map(); x !== null; )
        (x.key !== null ? y.set(x.key, x) : y.set(x.index, x), (x = x.sibling));
      return y;
    }
    function n(x, y) {
      return ((x = Jt(x, y)), (x.index = 0), (x.sibling = null), x);
    }
    function u(x, y, E) {
      return (
        (x.index = E),
        e ?
          ((E = x.alternate),
          E !== null ?
            ((E = E.index), E < y ? ((x.flags |= 67108866), y) : E)
          : ((x.flags |= 67108866), y))
        : ((x.flags |= 1048576), y)
      );
    }
    function c(x) {
      return (e && x.alternate === null && (x.flags |= 67108866), x);
    }
    function r(x, y, E, M) {
      return y === null || y.tag !== 6 ?
          ((y = rc(E, x.mode, M)), (y.return = x), y)
        : ((y = n(y, E)), (y.return = x), y);
    }
    function v(x, y, E, M) {
      var V = E.type;
      return (
        V === Z ? R(x, y, E.props.children, M, E.key)
        : (
          y !== null &&
          (y.elementType === V ||
            (typeof V == 'object' &&
              V !== null &&
              V.$$typeof === Re &&
              Wl(V) === y.type))
        ) ?
          ((y = n(y, E.props)), _n(y, E), (y.return = x), y)
        : ((y = bu(E.type, E.key, E.props, null, x.mode, M)),
          _n(y, E),
          (y.return = x),
          y)
      );
    }
    function T(x, y, E, M) {
      return (
          y === null ||
            y.tag !== 4 ||
            y.stateNode.containerInfo !== E.containerInfo ||
            y.stateNode.implementation !== E.implementation
        ) ?
          ((y = oc(E, x.mode, M)), (y.return = x), y)
        : ((y = n(y, E.children || [])), (y.return = x), y);
    }
    function R(x, y, E, M, V) {
      return y === null || y.tag !== 7 ?
          ((y = Vl(E, x.mode, M, V)), (y.return = x), y)
        : ((y = n(y, E)), (y.return = x), y);
    }
    function D(x, y, E) {
      if (
        (typeof y == 'string' && y !== '') ||
        typeof y == 'number' ||
        typeof y == 'bigint'
      )
        return ((y = rc('' + y, x.mode, E)), (y.return = x), y);
      if (typeof y == 'object' && y !== null) {
        switch (y.$$typeof) {
          case q:
            return (
              (E = bu(y.type, y.key, y.props, null, x.mode, E)),
              _n(E, y),
              (E.return = x),
              E
            );
          case k:
            return ((y = oc(y, x.mode, E)), (y.return = x), y);
          case Re:
            return ((y = Wl(y)), D(x, y, E));
        }
        if (Mt(y) || tt(y))
          return ((y = Vl(y, x.mode, E, null)), (y.return = x), y);
        if (typeof y.then == 'function') return D(x, zu(y), E);
        if (y.$$typeof === W) return D(x, Eu(x, y), E);
        Au(x, y);
      }
      return null;
    }
    function z(x, y, E, M) {
      var V = y !== null ? y.key : null;
      if (
        (typeof E == 'string' && E !== '') ||
        typeof E == 'number' ||
        typeof E == 'bigint'
      )
        return V !== null ? null : r(x, y, '' + E, M);
      if (typeof E == 'object' && E !== null) {
        switch (E.$$typeof) {
          case q:
            return E.key === V ? v(x, y, E, M) : null;
          case k:
            return E.key === V ? T(x, y, E, M) : null;
          case Re:
            return ((E = Wl(E)), z(x, y, E, M));
        }
        if (Mt(E) || tt(E)) return V !== null ? null : R(x, y, E, M, null);
        if (typeof E.then == 'function') return z(x, y, zu(E), M);
        if (E.$$typeof === W) return z(x, y, Eu(x, E), M);
        Au(x, E);
      }
      return null;
    }
    function C(x, y, E, M, V) {
      if (
        (typeof M == 'string' && M !== '') ||
        typeof M == 'number' ||
        typeof M == 'bigint'
      )
        return ((x = x.get(E) || null), r(y, x, '' + M, V));
      if (typeof M == 'object' && M !== null) {
        switch (M.$$typeof) {
          case q:
            return (
              (x = x.get(M.key === null ? E : M.key) || null),
              v(y, x, M, V)
            );
          case k:
            return (
              (x = x.get(M.key === null ? E : M.key) || null),
              T(y, x, M, V)
            );
          case Re:
            return ((M = Wl(M)), C(x, y, E, M, V));
        }
        if (Mt(M) || tt(M))
          return ((x = x.get(E) || null), R(y, x, M, V, null));
        if (typeof M.then == 'function') return C(x, y, E, zu(M), V);
        if (M.$$typeof === W) return C(x, y, E, Eu(y, M), V);
        Au(y, M);
      }
      return null;
    }
    function Y(x, y, E, M) {
      for (
        var V = null, fe = null, Q = y, le = (y = 0), ce = null;
        Q !== null && le < E.length;
        le++
      ) {
        Q.index > le ? ((ce = Q), (Q = null)) : (ce = Q.sibling);
        var re = z(x, Q, E[le], M);
        if (re === null) {
          Q === null && (Q = ce);
          break;
        }
        (e && Q && re.alternate === null && t(x, Q),
          (y = u(re, y, le)),
          fe === null ? (V = re) : (fe.sibling = re),
          (fe = re),
          (Q = ce));
      }
      if (le === E.length) return (l(x, Q), se && $t(x, le), V);
      if (Q === null) {
        for (; le < E.length; le++)
          ((Q = D(x, E[le], M)),
            Q !== null &&
              ((y = u(Q, y, le)),
              fe === null ? (V = Q) : (fe.sibling = Q),
              (fe = Q)));
        return (se && $t(x, le), V);
      }
      for (Q = a(Q); le < E.length; le++)
        ((ce = C(Q, x, le, E[le], M)),
          ce !== null &&
            (e &&
              ce.alternate !== null &&
              Q.delete(ce.key === null ? le : ce.key),
            (y = u(ce, y, le)),
            fe === null ? (V = ce) : (fe.sibling = ce),
            (fe = ce)));
      return (
        e &&
          Q.forEach(function (Hl) {
            return t(x, Hl);
          }),
        se && $t(x, le),
        V
      );
    }
    function $(x, y, E, M) {
      if (E == null) throw Error(s(151));
      for (
        var V = null, fe = null, Q = y, le = (y = 0), ce = null, re = E.next();
        Q !== null && !re.done;
        le++, re = E.next()
      ) {
        Q.index > le ? ((ce = Q), (Q = null)) : (ce = Q.sibling);
        var Hl = z(x, Q, re.value, M);
        if (Hl === null) {
          Q === null && (Q = ce);
          break;
        }
        (e && Q && Hl.alternate === null && t(x, Q),
          (y = u(Hl, y, le)),
          fe === null ? (V = Hl) : (fe.sibling = Hl),
          (fe = Hl),
          (Q = ce));
      }
      if (re.done) return (l(x, Q), se && $t(x, le), V);
      if (Q === null) {
        for (; !re.done; le++, re = E.next())
          ((re = D(x, re.value, M)),
            re !== null &&
              ((y = u(re, y, le)),
              fe === null ? (V = re) : (fe.sibling = re),
              (fe = re)));
        return (se && $t(x, le), V);
      }
      for (Q = a(Q); !re.done; le++, re = E.next())
        ((re = C(Q, x, le, re.value, M)),
          re !== null &&
            (e &&
              re.alternate !== null &&
              Q.delete(re.key === null ? le : re.key),
            (y = u(re, y, le)),
            fe === null ? (V = re) : (fe.sibling = re),
            (fe = re)));
      return (
        e &&
          Q.forEach(function (jv) {
            return t(x, jv);
          }),
        se && $t(x, le),
        V
      );
    }
    function ge(x, y, E, M) {
      if (
        (typeof E == 'object' &&
          E !== null &&
          E.type === Z &&
          E.key === null &&
          (E = E.props.children),
        typeof E == 'object' && E !== null)
      ) {
        switch (E.$$typeof) {
          case q:
            e: {
              for (var V = E.key; y !== null; ) {
                if (y.key === V) {
                  if (((V = E.type), V === Z)) {
                    if (y.tag === 7) {
                      (l(x, y.sibling),
                        (M = n(y, E.props.children)),
                        (M.return = x),
                        (x = M));
                      break e;
                    }
                  } else if (
                    y.elementType === V ||
                    (typeof V == 'object' &&
                      V !== null &&
                      V.$$typeof === Re &&
                      Wl(V) === y.type)
                  ) {
                    (l(x, y.sibling),
                      (M = n(y, E.props)),
                      _n(M, E),
                      (M.return = x),
                      (x = M));
                    break e;
                  }
                  l(x, y);
                  break;
                } else t(x, y);
                y = y.sibling;
              }
              E.type === Z ?
                ((M = Vl(E.props.children, x.mode, M, E.key)),
                (M.return = x),
                (x = M))
              : ((M = bu(E.type, E.key, E.props, null, x.mode, M)),
                _n(M, E),
                (M.return = x),
                (x = M));
            }
            return c(x);
          case k:
            e: {
              for (V = E.key; y !== null; ) {
                if (y.key === V)
                  if (
                    y.tag === 4 &&
                    y.stateNode.containerInfo === E.containerInfo &&
                    y.stateNode.implementation === E.implementation
                  ) {
                    (l(x, y.sibling),
                      (M = n(y, E.children || [])),
                      (M.return = x),
                      (x = M));
                    break e;
                  } else {
                    l(x, y);
                    break;
                  }
                else t(x, y);
                y = y.sibling;
              }
              ((M = oc(E, x.mode, M)), (M.return = x), (x = M));
            }
            return c(x);
          case Re:
            return ((E = Wl(E)), ge(x, y, E, M));
        }
        if (Mt(E)) return Y(x, y, E, M);
        if (tt(E)) {
          if (((V = tt(E)), typeof V != 'function')) throw Error(s(150));
          return ((E = V.call(E)), $(x, y, E, M));
        }
        if (typeof E.then == 'function') return ge(x, y, zu(E), M);
        if (E.$$typeof === W) return ge(x, y, Eu(x, E), M);
        Au(x, E);
      }
      return (
          (typeof E == 'string' && E !== '') ||
            typeof E == 'number' ||
            typeof E == 'bigint'
        ) ?
          ((E = '' + E),
          y !== null && y.tag === 6 ?
            (l(x, y.sibling), (M = n(y, E)), (M.return = x), (x = M))
          : (l(x, y), (M = rc(E, x.mode, M)), (M.return = x), (x = M)),
          c(x))
        : l(x, y);
    }
    return function (x, y, E, M) {
      try {
        vn = 0;
        var V = ge(x, y, E, M);
        return ((Aa = null), V);
      } catch (Q) {
        if (Q === za || Q === Nu) throw Q;
        var fe = ht(29, Q, null, x.mode);
        return ((fe.lanes = M), (fe.return = x), fe);
      }
    };
  }
  var Il = Cr(!0),
    Rr = Cr(!1),
    gl = !1;
  function Ec(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function jc(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function pl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function bl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (oe & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = pu(e)),
        hr(e, null, l),
        t
      );
    }
    return (gu(e, a, t, l), pu(e));
  }
  function yn(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), Sf(e, l));
    }
  }
  function Nc(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        u = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var c = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (u === null ? (n = u = c) : (u = u.next = c), (l = l.next));
        } while (l !== null);
        u === null ? (n = u = t) : (u = u.next = t);
      } else n = u = t;
      ((l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = l));
      return;
    }
    ((e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t));
  }
  var Tc = !1;
  function gn() {
    if (Tc) {
      var e = Ta;
      if (e !== null) throw e;
    }
  }
  function pn(e, t, l, a) {
    Tc = !1;
    var n = e.updateQueue;
    gl = !1;
    var u = n.firstBaseUpdate,
      c = n.lastBaseUpdate,
      r = n.shared.pending;
    if (r !== null) {
      n.shared.pending = null;
      var v = r,
        T = v.next;
      ((v.next = null), c === null ? (u = T) : (c.next = T), (c = v));
      var R = e.alternate;
      R !== null &&
        ((R = R.updateQueue),
        (r = R.lastBaseUpdate),
        r !== c &&
          (r === null ? (R.firstBaseUpdate = T) : (r.next = T),
          (R.lastBaseUpdate = v)));
    }
    if (u !== null) {
      var D = n.baseState;
      ((c = 0), (R = T = v = null), (r = u));
      do {
        var z = r.lane & -536870913,
          C = z !== r.lane;
        if (C ? (ie & z) === z : (a & z) === z) {
          (z !== 0 && z === Na && (Tc = !0),
            R !== null &&
              (R = R.next =
                {
                  lane: 0,
                  tag: r.tag,
                  payload: r.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var Y = e,
              $ = r;
            z = t;
            var ge = l;
            switch ($.tag) {
              case 1:
                if (((Y = $.payload), typeof Y == 'function')) {
                  D = Y.call(ge, D, z);
                  break e;
                }
                D = Y;
                break e;
              case 3:
                Y.flags = (Y.flags & -65537) | 128;
              case 0:
                if (
                  ((Y = $.payload),
                  (z = typeof Y == 'function' ? Y.call(ge, D, z) : Y),
                  z == null)
                )
                  break e;
                D = N({}, D, z);
                break e;
              case 2:
                gl = !0;
            }
          }
          ((z = r.callback),
            z !== null &&
              ((e.flags |= 64),
              C && (e.flags |= 8192),
              (C = n.callbacks),
              C === null ? (n.callbacks = [z]) : C.push(z)));
        } else
          ((C = {
            lane: z,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          }),
            R === null ? ((T = R = C), (v = D)) : (R = R.next = C),
            (c |= z));
        if (((r = r.next), r === null)) {
          if (((r = n.shared.pending), r === null)) break;
          ((C = r),
            (r = C.next),
            (C.next = null),
            (n.lastBaseUpdate = C),
            (n.shared.pending = null));
        }
      } while (!0);
      (R === null && (v = D),
        (n.baseState = v),
        (n.firstBaseUpdate = T),
        (n.lastBaseUpdate = R),
        u === null && (n.shared.lanes = 0),
        (Nl |= c),
        (e.lanes = c),
        (e.memoizedState = D));
    }
  }
  function Or(e, t) {
    if (typeof e != 'function') throw Error(s(191, e));
    e.call(t);
  }
  function Mr(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) Or(l[e], t);
  }
  var Ca = p(null),
    Cu = p(0);
  function Dr(e, t) {
    ((e = ul), L(Cu, e), L(Ca, t), (ul = e | t.baseLanes));
  }
  function zc() {
    (L(Cu, ul), L(Ca, Ca.current));
  }
  function Ac() {
    ((ul = Cu.current), U(Ca), U(Cu));
  }
  var mt = p(null),
    zt = null;
  function Sl(e) {
    var t = e.alternate;
    (L(Me, Me.current & 1),
      L(mt, e),
      zt === null &&
        (t === null || Ca.current !== null || t.memoizedState !== null) &&
        (zt = e));
  }
  function Cc(e) {
    (L(Me, Me.current), L(mt, e), zt === null && (zt = e));
  }
  function Ur(e) {
    e.tag === 22 ?
      (L(Me, Me.current), L(mt, e), zt === null && (zt = e))
    : xl();
  }
  function xl() {
    (L(Me, Me.current), L(mt, mt.current));
  }
  function vt(e) {
    (U(mt), zt === e && (zt = null), U(Me));
  }
  var Me = p(0);
  function Ru(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || Hs(l) || Bs(l)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === 'forwards' ||
          t.memoizedProps.revealOrder === 'backwards' ||
          t.memoizedProps.revealOrder === 'unstable_legacy-backwards' ||
          t.memoizedProps.revealOrder === 'together')
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Ft = 0,
    te = null,
    _e = null,
    Be = null,
    Ou = !1,
    Ra = !1,
    Pl = !1,
    Mu = 0,
    bn = 0,
    Oa = null,
    m0 = 0;
  function Ae() {
    throw Error(s(321));
  }
  function Rc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!dt(e[l], t[l])) return !1;
    return !0;
  }
  function Oc(e, t, l, a, n, u) {
    return (
      (Ft = u),
      (te = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (O.H = e === null || e.memoizedState === null ? go : Kc),
      (Pl = !1),
      (u = l(a, n)),
      (Pl = !1),
      Ra && (u = Br(t, l, a, n)),
      Hr(e),
      u
    );
  }
  function Hr(e) {
    O.H = En;
    var t = _e !== null && _e.next !== null;
    if (((Ft = 0), (Be = _e = te = null), (Ou = !1), (bn = 0), (Oa = null), t))
      throw Error(s(300));
    e === null ||
      Le ||
      ((e = e.dependencies), e !== null && xu(e) && (Le = !0));
  }
  function Br(e, t, l, a) {
    te = e;
    var n = 0;
    do {
      if ((Ra && (Oa = null), (bn = 0), (Ra = !1), 25 <= n))
        throw Error(s(301));
      if (((n += 1), (Be = _e = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((O.H = po), (u = t(l, a)));
    } while (Ra);
    return u;
  }
  function v0() {
    var e = O.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? Sn(t) : t),
      (e = e.useState()[0]),
      (_e !== null ? _e.memoizedState : null) !== e && (te.flags |= 1024),
      t
    );
  }
  function Mc() {
    var e = Mu !== 0;
    return ((Mu = 0), e);
  }
  function Dc(e, t, l) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l));
  }
  function Uc(e) {
    if (Ou) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      Ou = !1;
    }
    ((Ft = 0), (Be = _e = te = null), (Ra = !1), (bn = Mu = 0), (Oa = null));
  }
  function Pe() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Be === null ? (te.memoizedState = Be = e) : (Be = Be.next = e), Be);
  }
  function De() {
    if (_e === null) {
      var e = te.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = _e.next;
    var t = Be === null ? te.memoizedState : Be.next;
    if (t !== null) ((Be = t), (_e = e));
    else {
      if (e === null)
        throw te.alternate === null ? Error(s(467)) : Error(s(310));
      ((_e = e),
        (e = {
          memoizedState: _e.memoizedState,
          baseState: _e.baseState,
          baseQueue: _e.baseQueue,
          queue: _e.queue,
          next: null,
        }),
        Be === null ? (te.memoizedState = Be = e) : (Be = Be.next = e));
    }
    return Be;
  }
  function Du() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Sn(e) {
    var t = bn;
    return (
      (bn += 1),
      Oa === null && (Oa = []),
      (e = Tr(Oa, e, t)),
      (t = te),
      (Be === null ? t.memoizedState : Be.next) === null &&
        ((t = t.alternate),
        (O.H = t === null || t.memoizedState === null ? go : Kc)),
      e
    );
  }
  function Uu(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return Sn(e);
      if (e.$$typeof === W) return $e(e);
    }
    throw Error(s(438, String(e)));
  }
  function Hc(e) {
    var t = null,
      l = te.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var a = te.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = Du()), (te.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = pt;
    return (t.index++, l);
  }
  function It(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Hu(e) {
    var t = De();
    return Bc(t, _e, e);
  }
  function Bc(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var c = n.next;
        ((n.next = u.next), (u.next = c));
      }
      ((t.baseQueue = n = u), (a.pending = null));
    }
    if (((u = e.baseState), n === null)) e.memoizedState = u;
    else {
      t = n.next;
      var r = (c = null),
        v = null,
        T = t,
        R = !1;
      do {
        var D = T.lane & -536870913;
        if (D !== T.lane ? (ie & D) === D : (Ft & D) === D) {
          var z = T.revertLane;
          if (z === 0)
            (v !== null &&
              (v = v.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: T.action,
                  hasEagerState: T.hasEagerState,
                  eagerState: T.eagerState,
                  next: null,
                }),
              D === Na && (R = !0));
          else if ((Ft & z) === z) {
            ((T = T.next), z === Na && (R = !0));
            continue;
          } else
            ((D = {
              lane: 0,
              revertLane: T.revertLane,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null,
            }),
              v === null ? ((r = v = D), (c = u)) : (v = v.next = D),
              (te.lanes |= z),
              (Nl |= z));
          ((D = T.action),
            Pl && l(u, D),
            (u = T.hasEagerState ? T.eagerState : l(u, D)));
        } else
          ((z = {
            lane: D,
            revertLane: T.revertLane,
            gesture: T.gesture,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null,
          }),
            v === null ? ((r = v = z), (c = u)) : (v = v.next = z),
            (te.lanes |= D),
            (Nl |= D));
        T = T.next;
      } while (T !== null && T !== t);
      if (
        (v === null ? (c = u) : (v.next = r),
        !dt(u, e.memoizedState) && ((Le = !0), R && ((l = Ta), l !== null)))
      )
        throw l;
      ((e.memoizedState = u),
        (e.baseState = c),
        (e.baseQueue = v),
        (a.lastRenderedState = u));
    }
    return (n === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function Lc(e) {
    var t = De(),
      l = t.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      n = l.pending,
      u = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var c = (n = n.next);
      do ((u = e(u, c.action)), (c = c.next));
      while (c !== n);
      (dt(u, t.memoizedState) || (Le = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (l.lastRenderedState = u));
    }
    return [u, a];
  }
  function Lr(e, t, l) {
    var a = te,
      n = De(),
      u = se;
    if (u) {
      if (l === void 0) throw Error(s(407));
      l = l();
    } else l = t();
    var c = !dt((_e || n).memoizedState, l);
    if (
      (c && ((n.memoizedState = l), (Le = !0)),
      (n = n.queue),
      Gc(Gr.bind(null, a, n, e), [e]),
      n.getSnapshot !== t || c || (Be !== null && Be.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Ma(9, { destroy: void 0 }, Yr.bind(null, a, n, l, t), null),
        be === null)
      )
        throw Error(s(349));
      u || (Ft & 127) !== 0 || qr(a, t, l);
    }
    return l;
  }
  function qr(e, t, l) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = te.updateQueue),
      t === null ?
        ((t = Du()), (te.updateQueue = t), (t.stores = [e]))
      : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e)));
  }
  function Yr(e, t, l, a) {
    ((t.value = l), (t.getSnapshot = a), Xr(t) && wr(e));
  }
  function Gr(e, t, l) {
    return l(function () {
      Xr(t) && wr(e);
    });
  }
  function Xr(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !dt(e, l);
    } catch {
      return !0;
    }
  }
  function wr(e) {
    var t = Zl(e, 2);
    t !== null && st(t, e, 2);
  }
  function qc(e) {
    var t = Pe();
    if (typeof e == 'function') {
      var l = e;
      if (((e = l()), Pl)) {
        ol(!0);
        try {
          l();
        } finally {
          ol(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: It,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Qr(e, t, l, a) {
    return ((e.baseState = l), Bc(e, _e, typeof a == 'function' ? a : It));
  }
  function _0(e, t, l, a, n) {
    if (qu(e)) throw Error(s(485));
    if (((e = t.action), e !== null)) {
      var u = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          u.listeners.push(c);
        },
      };
      (O.T !== null ? l(!0) : (u.isTransition = !1),
        a(u),
        (l = t.pending),
        l === null ?
          ((u.next = t.pending = u), Zr(t, u))
        : ((u.next = l.next), (t.pending = l.next = u)));
    }
  }
  function Zr(e, t) {
    var l = t.action,
      a = t.payload,
      n = e.state;
    if (t.isTransition) {
      var u = O.T,
        c = {};
      O.T = c;
      try {
        var r = l(n, a),
          v = O.S;
        (v !== null && v(c, r), Vr(e, t, r));
      } catch (T) {
        Yc(e, t, T);
      } finally {
        (u !== null && c.types !== null && (u.types = c.types), (O.T = u));
      }
    } else
      try {
        ((u = l(n, a)), Vr(e, t, u));
      } catch (T) {
        Yc(e, t, T);
      }
  }
  function Vr(e, t, l) {
    l !== null && typeof l == 'object' && typeof l.then == 'function' ?
      l.then(
        function (a) {
          Kr(e, t, a);
        },
        function (a) {
          return Yc(e, t, a);
        },
      )
    : Kr(e, t, l);
  }
  function Kr(e, t, l) {
    ((t.status = 'fulfilled'),
      (t.value = l),
      Jr(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), Zr(e, l))));
  }
  function Yc(e, t, l) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = 'rejected'), (t.reason = l), Jr(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function Jr(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function $r(e, t) {
    return t;
  }
  function kr(e, t) {
    if (se) {
      var l = be.formState;
      if (l !== null) {
        e: {
          var a = te;
          if (se) {
            if (Ee) {
              t: {
                for (var n = Ee, u = Tt; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (((n = At(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                ((u = n.data), (n = u === 'F!' || u === 'F' ? n : null));
              }
              if (n) {
                ((Ee = At(n.nextSibling)), (a = n.data === 'F!'));
                break e;
              }
            }
            _l(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return (
      (l = Pe()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $r,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = vo.bind(null, te, a)),
      (a.dispatch = l),
      (a = qc(!1)),
      (u = Vc.bind(null, te, !1, a.queue)),
      (a = Pe()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = n),
      (l = _0.bind(null, te, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    );
  }
  function Wr(e) {
    var t = De();
    return Fr(t, _e, e);
  }
  function Fr(e, t, l) {
    if (
      ((t = Bc(e, t, $r)[0]),
      (e = Hu(It)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var a = Sn(t);
      } catch (c) {
        throw c === za ? Nu : c;
      }
    else a = t;
    t = De();
    var n = t.queue,
      u = n.dispatch;
    return (
      l !== t.memoizedState &&
        ((te.flags |= 2048),
        Ma(9, { destroy: void 0 }, y0.bind(null, n, l), null)),
      [a, u, e]
    );
  }
  function y0(e, t) {
    e.action = t;
  }
  function Ir(e) {
    var t = De(),
      l = _e;
    if (l !== null) return Fr(t, l, e);
    (De(), (t = t.memoizedState), (l = De()));
    var a = l.queue.dispatch;
    return ((l.memoizedState = e), [t, a, !1]);
  }
  function Ma(e, t, l, a) {
    return (
      (e = { tag: e, create: l, deps: a, inst: t, next: null }),
      (t = te.updateQueue),
      t === null && ((t = Du()), (te.updateQueue = t)),
      (l = t.lastEffect),
      l === null ?
        (t.lastEffect = e.next = e)
      : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function Pr() {
    return De().memoizedState;
  }
  function Bu(e, t, l, a) {
    var n = Pe();
    ((te.flags |= e),
      (n.memoizedState = Ma(
        1 | t,
        { destroy: void 0 },
        l,
        a === void 0 ? null : a,
      )));
  }
  function Lu(e, t, l, a) {
    var n = De();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    _e !== null && a !== null && Rc(a, _e.memoizedState.deps) ?
      (n.memoizedState = Ma(t, u, l, a))
    : ((te.flags |= e), (n.memoizedState = Ma(1 | t, u, l, a)));
  }
  function eo(e, t) {
    Bu(8390656, 8, e, t);
  }
  function Gc(e, t) {
    Lu(2048, 8, e, t);
  }
  function g0(e) {
    te.flags |= 4;
    var t = te.updateQueue;
    if (t === null) ((t = Du()), (te.updateQueue = t), (t.events = [e]));
    else {
      var l = t.events;
      l === null ? (t.events = [e]) : l.push(e);
    }
  }
  function to(e) {
    var t = De().memoizedState;
    return (
      g0({ ref: t, nextImpl: e }),
      function () {
        if ((oe & 2) !== 0) throw Error(s(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function lo(e, t) {
    return Lu(4, 2, e, t);
  }
  function ao(e, t) {
    return Lu(4, 4, e, t);
  }
  function no(e, t) {
    if (typeof t == 'function') {
      e = e();
      var l = t(e);
      return function () {
        typeof l == 'function' ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function uo(e, t, l) {
    ((l = l != null ? l.concat([e]) : null), Lu(4, 4, no.bind(null, t, e), l));
  }
  function Xc() {}
  function io(e, t) {
    var l = De();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && Rc(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
  }
  function co(e, t) {
    var l = De();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && Rc(t, a[1])) return a[0];
    if (((a = e()), Pl)) {
      ol(!0);
      try {
        e();
      } finally {
        ol(!1);
      }
    }
    return ((l.memoizedState = [a, t]), a);
  }
  function wc(e, t, l) {
    return l === void 0 || ((Ft & 1073741824) !== 0 && (ie & 261930) === 0) ?
        (e.memoizedState = t)
      : ((e.memoizedState = l), (e = fd()), (te.lanes |= e), (Nl |= e), l);
  }
  function so(e, t, l, a) {
    return (
      dt(l, t) ? l
      : Ca.current !== null ? ((e = wc(e, l, a)), dt(e, t) || (Le = !0), e)
      : (Ft & 42) === 0 || ((Ft & 1073741824) !== 0 && (ie & 261930) === 0) ?
        ((Le = !0), (e.memoizedState = l))
      : ((e = fd()), (te.lanes |= e), (Nl |= e), t)
    );
  }
  function fo(e, t, l, a, n) {
    var u = B.p;
    B.p = u !== 0 && 8 > u ? u : 8;
    var c = O.T,
      r = {};
    ((O.T = r), Vc(e, !1, t, l));
    try {
      var v = n(),
        T = O.S;
      if (
        (T !== null && T(r, v),
        v !== null && typeof v == 'object' && typeof v.then == 'function')
      ) {
        var R = h0(v, a);
        xn(e, t, R, gt(e));
      } else xn(e, t, a, gt(e));
    } catch (D) {
      xn(e, t, { then: function () {}, status: 'rejected', reason: D }, gt());
    } finally {
      ((B.p = u),
        c !== null && r.types !== null && (c.types = r.types),
        (O.T = c));
    }
  }
  function p0() {}
  function Qc(e, t, l, a) {
    if (e.tag !== 5) throw Error(s(476));
    var n = ro(e).queue;
    fo(
      e,
      n,
      t,
      F,
      l === null ? p0 : (
        function () {
          return (oo(e), l(a));
        }
      ),
    );
  }
  function ro(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: F,
      baseState: F,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: It,
        lastRenderedState: F,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: It,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function oo(e) {
    var t = ro(e);
    (t.next === null && (t = e.alternate.memoizedState),
      xn(e, t.next.queue, {}, gt()));
  }
  function Zc() {
    return $e(Yn);
  }
  function ho() {
    return De().memoizedState;
  }
  function mo() {
    return De().memoizedState;
  }
  function b0(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = gt();
          e = pl(l);
          var a = bl(t, e, l);
          (a !== null && (st(a, t, l), yn(a, t, l)),
            (t = { cache: pc() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function S0(e, t, l) {
    var a = gt();
    ((l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      qu(e) ?
        _o(t, l)
      : ((l = sc(e, t, l, a)), l !== null && (st(l, e, a), yo(l, t, a))));
  }
  function vo(e, t, l) {
    var a = gt();
    xn(e, t, l, a);
  }
  function xn(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (qu(e)) _o(t, n);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var c = t.lastRenderedState,
            r = u(c, l);
          if (((n.hasEagerState = !0), (n.eagerState = r), dt(r, c)))
            return (gu(e, t, n, 0), be === null && yu(), !1);
        } catch {}
      if (((l = sc(e, t, n, a)), l !== null))
        return (st(l, e, a), yo(l, t, a), !0);
    }
    return !1;
  }
  function Vc(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Es(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      qu(e))
    ) {
      if (t) throw Error(s(479));
    } else ((t = sc(e, l, a, 2)), t !== null && st(t, e, 2));
  }
  function qu(e) {
    var t = e.alternate;
    return e === te || (t !== null && t === te);
  }
  function _o(e, t) {
    Ra = Ou = !0;
    var l = e.pending;
    (l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t));
  }
  function yo(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), Sf(e, l));
    }
  }
  var En = {
    readContext: $e,
    use: Uu,
    useCallback: Ae,
    useContext: Ae,
    useEffect: Ae,
    useImperativeHandle: Ae,
    useLayoutEffect: Ae,
    useInsertionEffect: Ae,
    useMemo: Ae,
    useReducer: Ae,
    useRef: Ae,
    useState: Ae,
    useDebugValue: Ae,
    useDeferredValue: Ae,
    useTransition: Ae,
    useSyncExternalStore: Ae,
    useId: Ae,
    useHostTransitionStatus: Ae,
    useFormState: Ae,
    useActionState: Ae,
    useOptimistic: Ae,
    useMemoCache: Ae,
    useCacheRefresh: Ae,
  };
  En.useEffectEvent = Ae;
  var go = {
      readContext: $e,
      use: Uu,
      useCallback: function (e, t) {
        return ((Pe().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: $e,
      useEffect: eo,
      useImperativeHandle: function (e, t, l) {
        ((l = l != null ? l.concat([e]) : null),
          Bu(4194308, 4, no.bind(null, t, e), l));
      },
      useLayoutEffect: function (e, t) {
        return Bu(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Bu(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = Pe();
        t = t === void 0 ? null : t;
        var a = e();
        if (Pl) {
          ol(!0);
          try {
            e();
          } finally {
            ol(!1);
          }
        }
        return ((l.memoizedState = [a, t]), a);
      },
      useReducer: function (e, t, l) {
        var a = Pe();
        if (l !== void 0) {
          var n = l(t);
          if (Pl) {
            ol(!0);
            try {
              l(t);
            } finally {
              ol(!1);
            }
          }
        } else n = t;
        return (
          (a.memoizedState = a.baseState = n),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (a.queue = e),
          (e = e.dispatch = S0.bind(null, te, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Pe();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = qc(e);
        var t = e.queue,
          l = vo.bind(null, te, t);
        return ((t.dispatch = l), [e.memoizedState, l]);
      },
      useDebugValue: Xc,
      useDeferredValue: function (e, t) {
        var l = Pe();
        return wc(l, e, t);
      },
      useTransition: function () {
        var e = qc(!1);
        return (
          (e = fo.bind(null, te, e.queue, !0, !1)),
          (Pe().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, l) {
        var a = te,
          n = Pe();
        if (se) {
          if (l === void 0) throw Error(s(407));
          l = l();
        } else {
          if (((l = t()), be === null)) throw Error(s(349));
          (ie & 127) !== 0 || qr(a, t, l);
        }
        n.memoizedState = l;
        var u = { value: l, getSnapshot: t };
        return (
          (n.queue = u),
          eo(Gr.bind(null, a, u, e), [e]),
          (a.flags |= 2048),
          Ma(9, { destroy: void 0 }, Yr.bind(null, a, u, l, t), null),
          l
        );
      },
      useId: function () {
        var e = Pe(),
          t = be.identifierPrefix;
        if (se) {
          var l = Yt,
            a = qt;
          ((l = (a & ~(1 << (32 - ot(a) - 1))).toString(32) + l),
            (t = '_' + t + 'R_' + l),
            (l = Mu++),
            0 < l && (t += 'H' + l.toString(32)),
            (t += '_'));
        } else ((l = m0++), (t = '_' + t + 'r_' + l.toString(32) + '_'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Zc,
      useFormState: kr,
      useActionState: kr,
      useOptimistic: function (e) {
        var t = Pe();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = l),
          (t = Vc.bind(null, te, !0, l)),
          (l.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Hc,
      useCacheRefresh: function () {
        return (Pe().memoizedState = b0.bind(null, te));
      },
      useEffectEvent: function (e) {
        var t = Pe(),
          l = { impl: e };
        return (
          (t.memoizedState = l),
          function () {
            if ((oe & 2) !== 0) throw Error(s(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Kc = {
      readContext: $e,
      use: Uu,
      useCallback: io,
      useContext: $e,
      useEffect: Gc,
      useImperativeHandle: uo,
      useInsertionEffect: lo,
      useLayoutEffect: ao,
      useMemo: co,
      useReducer: Hu,
      useRef: Pr,
      useState: function () {
        return Hu(It);
      },
      useDebugValue: Xc,
      useDeferredValue: function (e, t) {
        var l = De();
        return so(l, _e.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Hu(It)[0],
          t = De().memoizedState;
        return [typeof e == 'boolean' ? e : Sn(e), t];
      },
      useSyncExternalStore: Lr,
      useId: ho,
      useHostTransitionStatus: Zc,
      useFormState: Wr,
      useActionState: Wr,
      useOptimistic: function (e, t) {
        var l = De();
        return Qr(l, _e, e, t);
      },
      useMemoCache: Hc,
      useCacheRefresh: mo,
    };
  Kc.useEffectEvent = to;
  var po = {
    readContext: $e,
    use: Uu,
    useCallback: io,
    useContext: $e,
    useEffect: Gc,
    useImperativeHandle: uo,
    useInsertionEffect: lo,
    useLayoutEffect: ao,
    useMemo: co,
    useReducer: Lc,
    useRef: Pr,
    useState: function () {
      return Lc(It);
    },
    useDebugValue: Xc,
    useDeferredValue: function (e, t) {
      var l = De();
      return _e === null ? wc(l, e, t) : so(l, _e.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Lc(It)[0],
        t = De().memoizedState;
      return [typeof e == 'boolean' ? e : Sn(e), t];
    },
    useSyncExternalStore: Lr,
    useId: ho,
    useHostTransitionStatus: Zc,
    useFormState: Ir,
    useActionState: Ir,
    useOptimistic: function (e, t) {
      var l = De();
      return _e !== null ?
          Qr(l, _e, e, t)
        : ((l.baseState = e), [e, l.queue.dispatch]);
    },
    useMemoCache: Hc,
    useCacheRefresh: mo,
  };
  po.useEffectEvent = to;
  function Jc(e, t, l, a) {
    ((t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : N({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l));
  }
  var $c = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = gt(),
        n = pl(a);
      ((n.payload = t),
        l != null && (n.callback = l),
        (t = bl(e, n, a)),
        t !== null && (st(t, e, a), yn(t, e, a)));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = gt(),
        n = pl(a);
      ((n.tag = 1),
        (n.payload = t),
        l != null && (n.callback = l),
        (t = bl(e, n, a)),
        t !== null && (st(t, e, a), yn(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = gt(),
        a = pl(l);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = bl(e, a, l)),
        t !== null && (st(t, e, l), yn(t, e, l)));
    },
  };
  function bo(e, t, l, a, n, u, c) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function' ?
        e.shouldComponentUpdate(a, u, c)
      : t.prototype && t.prototype.isPureReactComponent ? !fn(l, a) || !fn(n, u)
      : !0
    );
  }
  function So(e, t, l, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && $c.enqueueReplaceState(t, t.state, null));
  }
  function ea(e, t) {
    var l = t;
    if ('ref' in t) {
      l = {};
      for (var a in t) a !== 'ref' && (l[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = N({}, l));
      for (var n in e) l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  function xo(e) {
    _u(e);
  }
  function Eo(e) {
    console.error(e);
  }
  function jo(e) {
    _u(e);
  }
  function Yu(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function No(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function kc(e, t, l) {
    return (
      (l = pl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Yu(e, t);
      }),
      l
    );
  }
  function To(e) {
    return ((e = pl(e)), (e.tag = 3), e);
  }
  function zo(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == 'function') {
      var u = a.value;
      ((e.payload = function () {
        return n(u);
      }),
        (e.callback = function () {
          No(t, l, a);
        }));
    }
    var c = l.stateNode;
    c !== null &&
      typeof c.componentDidCatch == 'function' &&
      (e.callback = function () {
        (No(t, l, a),
          typeof n != 'function' &&
            (Tl === null ? (Tl = new Set([this])) : Tl.add(this)));
        var r = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: r !== null ? r : '',
        });
      });
  }
  function x0(e, t, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == 'object' && typeof a.then == 'function')
    ) {
      if (
        ((t = l.alternate),
        t !== null && ja(t, l, n, !0),
        (l = mt.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              zt === null ? Fu() : l.alternate === null && Ce === 0 && (Ce = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === Tu ?
                (l.flags |= 16384)
              : ((t = l.updateQueue),
                t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                bs(e, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === Tu ?
                (l.flags |= 16384)
              : ((t = l.updateQueue),
                t === null ?
                  ((t = {
                    transitions: null,
                    markerInstances: null,
                    retryQueue: new Set([a]),
                  }),
                  (l.updateQueue = t))
                : ((l = t.retryQueue),
                  l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                bs(e, a, n)),
              !1
            );
        }
        throw Error(s(435, l.tag));
      }
      return (bs(e, a, n), Fu(), !1);
    }
    if (se)
      return (
        (t = mt.current),
        t !== null ?
          ((t.flags & 65536) === 0 && (t.flags |= 256),
          (t.flags |= 65536),
          (t.lanes = n),
          a !== mc && ((e = Error(s(422), { cause: a })), dn(Et(e, l))))
        : (a !== mc && ((t = Error(s(423), { cause: a })), dn(Et(t, l))),
          (e = e.current.alternate),
          (e.flags |= 65536),
          (n &= -n),
          (e.lanes |= n),
          (a = Et(a, l)),
          (n = kc(e.stateNode, a, n)),
          Nc(e, n),
          Ce !== 4 && (Ce = 2)),
        !1
      );
    var u = Error(s(520), { cause: a });
    if (
      ((u = Et(u, l)),
      On === null ? (On = [u]) : On.push(u),
      Ce !== 4 && (Ce = 2),
      t === null)
    )
      return !0;
    ((a = Et(a, l)), (l = t));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = n & -n),
            (l.lanes |= e),
            (e = kc(l.stateNode, a, e)),
            Nc(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (u = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (u !== null &&
                  typeof u.componentDidCatch == 'function' &&
                  (Tl === null || !Tl.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = To(n)),
              zo(n, e, l, a),
              Nc(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Wc = Error(s(461)),
    Le = !1;
  function ke(e, t, l, a) {
    t.child = e === null ? Rr(t, null, l, a) : Il(t, e.child, l, a);
  }
  function Ao(e, t, l, a, n) {
    l = l.render;
    var u = t.ref;
    if ('ref' in a) {
      var c = {};
      for (var r in a) r !== 'ref' && (c[r] = a[r]);
    } else c = a;
    return (
      $l(t),
      (a = Oc(e, t, l, c, u, n)),
      (r = Mc()),
      e !== null && !Le ?
        (Dc(e, t, n), Pt(e, t, n))
      : (se && r && dc(t), (t.flags |= 1), ke(e, t, a, n), t.child)
    );
  }
  function Co(e, t, l, a, n) {
    if (e === null) {
      var u = l.type;
      return (
          typeof u == 'function' &&
            !fc(u) &&
            u.defaultProps === void 0 &&
            l.compare === null
        ) ?
          ((t.tag = 15), (t.type = u), Ro(e, t, u, a, n))
        : ((e = bu(l.type, null, a, t, t.mode, n)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), !ns(e, n))) {
      var c = u.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : fn), l(c, a) && e.ref === t.ref)
      )
        return Pt(e, t, n);
    }
    return (
      (t.flags |= 1),
      (e = Jt(u, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ro(e, t, l, a, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (fn(u, a) && e.ref === t.ref)
        if (((Le = !1), (t.pendingProps = a = u), ns(e, n)))
          (e.flags & 131072) !== 0 && (Le = !0);
        else return ((t.lanes = e.lanes), Pt(e, t, n));
    }
    return Fc(e, t, l, a, n);
  }
  function Oo(e, t, l, a) {
    var n = a.children,
      u = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === 'hidden')
    ) {
      if ((t.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | l : l), e !== null)) {
          for (a = t.child = e.child, n = 0; a !== null; )
            ((n = n | a.lanes | a.childLanes), (a = a.sibling));
          a = n & ~u;
        } else ((a = 0), (t.child = null));
        return Mo(e, t, u, l, a);
      }
      if ((l & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && ju(t, u !== null ? u.cachePool : null),
          u !== null ? Dr(t, u) : zc(),
          Ur(t));
      else
        return (
          (a = t.lanes = 536870912),
          Mo(e, t, u !== null ? u.baseLanes | l : l, l, a)
        );
    } else
      u !== null ?
        (ju(t, u.cachePool), Dr(t, u), xl(), (t.memoizedState = null))
      : (e !== null && ju(t, null), zc(), xl());
    return (ke(e, t, n, l), t.child);
  }
  function jn(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Mo(e, t, l, a, n) {
    var u = Sc();
    return (
      (u = u === null ? null : { parent: He._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: l, cachePool: u }),
      e !== null && ju(t, null),
      zc(),
      Ur(t),
      e !== null && ja(e, t, a, !0),
      (t.childLanes = n),
      null
    );
  }
  function Gu(e, t) {
    return (
      (t = wu({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Do(e, t, l) {
    return (
      Il(t, e.child, null, l),
      (e = Gu(t, t.pendingProps)),
      (e.flags |= 2),
      vt(t),
      (t.memoizedState = null),
      e
    );
  }
  function E0(e, t, l) {
    var a = t.pendingProps,
      n = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (se) {
        if (a.mode === 'hidden')
          return ((e = Gu(t, a)), (t.lanes = 536870912), jn(null, e));
        if (
          (Cc(t),
          (e = Ee) ?
            ((e = Vd(e, Tt)),
            (e = e !== null && e.data === '&' ? e : null),
            e !== null &&
              ((t.memoizedState = {
                dehydrated: e,
                treeContext: ml !== null ? { id: qt, overflow: Yt } : null,
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (l = vr(e)),
              (l.return = t),
              (t.child = l),
              (Je = t),
              (Ee = null)))
          : (e = null),
          e === null)
        )
          throw _l(t);
        return ((t.lanes = 536870912), null);
      }
      return Gu(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var c = u.dehydrated;
      if ((Cc(t), n))
        if (t.flags & 256) ((t.flags &= -257), (t = Do(e, t, l)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(s(558));
      else if (
        (Le || ja(e, t, l, !1), (n = (l & e.childLanes) !== 0), Le || n)
      ) {
        if (
          ((a = be),
          a !== null && ((c = xf(a, l)), c !== 0 && c !== u.retryLane))
        )
          throw ((u.retryLane = c), Zl(e, c), st(a, e, c), Wc);
        (Fu(), (t = Do(e, t, l)));
      } else
        ((e = u.treeContext),
          (Ee = At(c.nextSibling)),
          (Je = t),
          (se = !0),
          (vl = null),
          (Tt = !1),
          e !== null && gr(t, e),
          (t = Gu(t, a)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = Jt(e.child, { mode: a.mode, children: a.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Xu(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != 'function' && typeof l != 'object') throw Error(s(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Fc(e, t, l, a, n) {
    return (
      $l(t),
      (l = Oc(e, t, l, a, void 0, n)),
      (a = Mc()),
      e !== null && !Le ?
        (Dc(e, t, n), Pt(e, t, n))
      : (se && a && dc(t), (t.flags |= 1), ke(e, t, l, n), t.child)
    );
  }
  function Uo(e, t, l, a, n, u) {
    return (
      $l(t),
      (t.updateQueue = null),
      (l = Br(t, a, l, n)),
      Hr(e),
      (a = Mc()),
      e !== null && !Le ?
        (Dc(e, t, u), Pt(e, t, u))
      : (se && a && dc(t), (t.flags |= 1), ke(e, t, l, u), t.child)
    );
  }
  function Ho(e, t, l, a, n) {
    if (($l(t), t.stateNode === null)) {
      var u = ba,
        c = l.contextType;
      (typeof c == 'object' && c !== null && (u = $e(c)),
        (u = new l(a, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = $c),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        Ec(t),
        (c = l.contextType),
        (u.context = typeof c == 'object' && c !== null ? $e(c) : ba),
        (u.state = t.memoizedState),
        (c = l.getDerivedStateFromProps),
        typeof c == 'function' && (Jc(t, l, c, a), (u.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((c = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' &&
            u.UNSAFE_componentWillMount(),
          c !== u.state && $c.enqueueReplaceState(u, u.state, null),
          pn(t, a, u, n),
          gn(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      u = t.stateNode;
      var r = t.memoizedProps,
        v = ea(l, r);
      u.props = v;
      var T = u.context,
        R = l.contextType;
      ((c = ba), typeof R == 'object' && R !== null && (c = $e(R)));
      var D = l.getDerivedStateFromProps;
      ((R =
        typeof D == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function'),
        (r = t.pendingProps !== r),
        R ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((r || T !== c) && So(t, u, a, c)),
        (gl = !1));
      var z = t.memoizedState;
      ((u.state = z),
        pn(t, a, u, n),
        gn(),
        (T = t.memoizedState),
        r || z !== T || gl ?
          (typeof D == 'function' && (Jc(t, l, D, a), (T = t.memoizedState)),
          (v = gl || bo(t, l, v, a, z, T, c)) ?
            (R ||
              (typeof u.UNSAFE_componentWillMount != 'function' &&
                typeof u.componentWillMount != 'function') ||
              (typeof u.componentWillMount == 'function' &&
                u.componentWillMount(),
              typeof u.UNSAFE_componentWillMount == 'function' &&
                u.UNSAFE_componentWillMount()),
            typeof u.componentDidMount == 'function' && (t.flags |= 4194308))
          : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
            (t.memoizedProps = a),
            (t.memoizedState = T)),
          (u.props = a),
          (u.state = T),
          (u.context = c),
          (a = v))
        : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
          (a = !1)));
    } else {
      ((u = t.stateNode),
        jc(e, t),
        (c = t.memoizedProps),
        (R = ea(l, c)),
        (u.props = R),
        (D = t.pendingProps),
        (z = u.context),
        (T = l.contextType),
        (v = ba),
        typeof T == 'object' && T !== null && (v = $e(T)),
        (r = l.getDerivedStateFromProps),
        (T =
          typeof r == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((c !== D || z !== v) && So(t, u, a, v)),
        (gl = !1),
        (z = t.memoizedState),
        (u.state = z),
        pn(t, a, u, n),
        gn());
      var C = t.memoizedState;
      (
        c !== D ||
        z !== C ||
        gl ||
        (e !== null && e.dependencies !== null && xu(e.dependencies))
      ) ?
        (typeof r == 'function' && (Jc(t, l, r, a), (C = t.memoizedState)),
        (
          (R =
            gl ||
            bo(t, l, R, a, z, C, v) ||
            (e !== null && e.dependencies !== null && xu(e.dependencies)))
        ) ?
          (T ||
            (typeof u.UNSAFE_componentWillUpdate != 'function' &&
              typeof u.componentWillUpdate != 'function') ||
            (typeof u.componentWillUpdate == 'function' &&
              u.componentWillUpdate(a, C, v),
            typeof u.UNSAFE_componentWillUpdate == 'function' &&
              u.UNSAFE_componentWillUpdate(a, C, v)),
          typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
        : (typeof u.componentDidUpdate != 'function' ||
            (c === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (c === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 1024),
          (t.memoizedProps = a),
          (t.memoizedState = C)),
        (u.props = a),
        (u.state = C),
        (u.context = v),
        (a = R))
      : (typeof u.componentDidUpdate != 'function' ||
          (c === e.memoizedProps && z === e.memoizedState) ||
          (t.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != 'function' ||
          (c === e.memoizedProps && z === e.memoizedState) ||
          (t.flags |= 1024),
        (a = !1));
    }
    return (
      (u = a),
      Xu(e, t),
      (a = (t.flags & 128) !== 0),
      u || a ?
        ((u = t.stateNode),
        (l =
          a && typeof l.getDerivedStateFromError != 'function' ?
            null
          : u.render()),
        (t.flags |= 1),
        e !== null && a ?
          ((t.child = Il(t, e.child, null, n)), (t.child = Il(t, null, l, n)))
        : ke(e, t, l, n),
        (t.memoizedState = u.state),
        (e = t.child))
      : (e = Pt(e, t, n)),
      e
    );
  }
  function Bo(e, t, l, a) {
    return (Kl(), (t.flags |= 256), ke(e, t, l, a), t.child);
  }
  var Ic = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Pc(e) {
    return { baseLanes: e, cachePool: jr() };
  }
  function es(e, t, l) {
    return ((e = e !== null ? e.childLanes & ~l : 0), t && (e |= yt), e);
  }
  function Lo(e, t, l) {
    var a = t.pendingProps,
      n = !1,
      u = (t.flags & 128) !== 0,
      c;
    if (
      ((c = u) ||
        (c =
          e !== null && e.memoizedState === null ? !1 : (Me.current & 2) !== 0),
      c && ((n = !0), (t.flags &= -129)),
      (c = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (se) {
        if (
          (n ? Sl(t) : xl(),
          (e = Ee) ?
            ((e = Vd(e, Tt)),
            (e = e !== null && e.data !== '&' ? e : null),
            e !== null &&
              ((t.memoizedState = {
                dehydrated: e,
                treeContext: ml !== null ? { id: qt, overflow: Yt } : null,
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (l = vr(e)),
              (l.return = t),
              (t.child = l),
              (Je = t),
              (Ee = null)))
          : (e = null),
          e === null)
        )
          throw _l(t);
        return (Bs(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var r = a.children;
      return (
        (a = a.fallback),
        n ?
          (xl(),
          (n = t.mode),
          (r = wu({ mode: 'hidden', children: r }, n)),
          (a = Vl(a, n, l, null)),
          (r.return = t),
          (a.return = t),
          (r.sibling = a),
          (t.child = r),
          (a = t.child),
          (a.memoizedState = Pc(l)),
          (a.childLanes = es(e, c, l)),
          (t.memoizedState = Ic),
          jn(null, a))
        : (Sl(t), ts(t, r))
      );
    }
    var v = e.memoizedState;
    if (v !== null && ((r = v.dehydrated), r !== null)) {
      if (u)
        t.flags & 256 ? (Sl(t), (t.flags &= -257), (t = ls(e, t, l)))
        : t.memoizedState !== null ?
          (xl(), (t.child = e.child), (t.flags |= 128), (t = null))
        : (xl(),
          (r = a.fallback),
          (n = t.mode),
          (a = wu({ mode: 'visible', children: a.children }, n)),
          (r = Vl(r, n, l, null)),
          (r.flags |= 2),
          (a.return = t),
          (r.return = t),
          (a.sibling = r),
          (t.child = a),
          Il(t, e.child, null, l),
          (a = t.child),
          (a.memoizedState = Pc(l)),
          (a.childLanes = es(e, c, l)),
          (t.memoizedState = Ic),
          (t = jn(null, a)));
      else if ((Sl(t), Bs(r))) {
        if (((c = r.nextSibling && r.nextSibling.dataset), c)) var T = c.dgst;
        ((c = T),
          (a = Error(s(419))),
          (a.stack = ''),
          (a.digest = c),
          dn({ value: a, source: null, stack: null }),
          (t = ls(e, t, l)));
      } else if (
        (Le || ja(e, t, l, !1), (c = (l & e.childLanes) !== 0), Le || c)
      ) {
        if (
          ((c = be),
          c !== null && ((a = xf(c, l)), a !== 0 && a !== v.retryLane))
        )
          throw ((v.retryLane = a), Zl(e, a), st(c, e, a), Wc);
        (Hs(r) || Fu(), (t = ls(e, t, l)));
      } else
        Hs(r) ?
          ((t.flags |= 192), (t.child = e.child), (t = null))
        : ((e = v.treeContext),
          (Ee = At(r.nextSibling)),
          (Je = t),
          (se = !0),
          (vl = null),
          (Tt = !1),
          e !== null && gr(t, e),
          (t = ts(t, a.children)),
          (t.flags |= 4096));
      return t;
    }
    return n ?
        (xl(),
        (r = a.fallback),
        (n = t.mode),
        (v = e.child),
        (T = v.sibling),
        (a = Jt(v, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = v.subtreeFlags & 65011712),
        T !== null ? (r = Jt(T, r)) : ((r = Vl(r, n, l, null)), (r.flags |= 2)),
        (r.return = t),
        (a.return = t),
        (a.sibling = r),
        (t.child = a),
        jn(null, a),
        (a = t.child),
        (r = e.child.memoizedState),
        r === null ?
          (r = Pc(l))
        : ((n = r.cachePool),
          n !== null ?
            ((v = He._currentValue),
            (n = n.parent !== v ? { parent: v, pool: v } : n))
          : (n = jr()),
          (r = { baseLanes: r.baseLanes | l, cachePool: n })),
        (a.memoizedState = r),
        (a.childLanes = es(e, c, l)),
        (t.memoizedState = Ic),
        jn(e.child, a))
      : (Sl(t),
        (l = e.child),
        (e = l.sibling),
        (l = Jt(l, { mode: 'visible', children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((c = t.deletions),
          c === null ? ((t.deletions = [e]), (t.flags |= 16)) : c.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function ts(e, t) {
    return (
      (t = wu({ mode: 'visible', children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function wu(e, t) {
    return ((e = ht(22, e, null, t)), (e.lanes = 0), e);
  }
  function ls(e, t, l) {
    return (
      Il(t, e.child, null, l),
      (e = ts(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function qo(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), yc(e.return, t, l));
  }
  function as(e, t, l, a, n, u) {
    var c = e.memoizedState;
    c === null ?
      (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: l,
        tailMode: n,
        treeForkCount: u,
      })
    : ((c.isBackwards = t),
      (c.rendering = null),
      (c.renderingStartTime = 0),
      (c.last = a),
      (c.tail = l),
      (c.tailMode = n),
      (c.treeForkCount = u));
  }
  function Yo(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    a = a.children;
    var c = Me.current,
      r = (c & 2) !== 0;
    if (
      (r ? ((c = (c & 1) | 2), (t.flags |= 128)) : (c &= 1),
      L(Me, c),
      ke(e, t, a, l),
      (a = se ? on : 0),
      !r && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && qo(e, l, t);
        else if (e.tag === 19) qo(e, l, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (n) {
      case 'forwards':
        for (l = t.child, n = null; l !== null; )
          ((e = l.alternate),
            e !== null && Ru(e) === null && (n = l),
            (l = l.sibling));
        ((l = n),
          l === null ?
            ((n = t.child), (t.child = null))
          : ((n = l.sibling), (l.sibling = null)),
          as(t, !1, n, l, u, a));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && Ru(e) === null)) {
            t.child = n;
            break;
          }
          ((e = n.sibling), (n.sibling = l), (l = n), (n = e));
        }
        as(t, !0, l, null, u, a);
        break;
      case 'together':
        as(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Pt(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Nl |= t.lanes),
      (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((ja(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child, l = Jt(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (l = l.sibling = Jt(e, e.pendingProps)),
          (l.return = t));
      l.sibling = null;
    }
    return t.child;
  }
  function ns(e, t) {
    return (e.lanes & t) !== 0 ?
        !0
      : ((e = e.dependencies), !!(e !== null && xu(e)));
  }
  function j0(e, t, l) {
    switch (t.tag) {
      case 3:
        (Ie(t, t.stateNode.containerInfo),
          yl(t, He, e.memoizedState.cache),
          Kl());
        break;
      case 27:
      case 5:
        ka(t);
        break;
      case 4:
        Ie(t, t.stateNode.containerInfo);
        break;
      case 10:
        yl(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Cc(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return (
            a.dehydrated !== null ? (Sl(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0 ? Lo(e, t, l)
            : (Sl(t), (e = Pt(e, t, l)), e !== null ? e.sibling : null)
          );
        Sl(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (
          ((a = (l & t.childLanes) !== 0),
          a || (ja(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return Yo(e, t, l);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          L(Me, Me.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Oo(e, t, l, t.pendingProps));
      case 24:
        yl(t, He, e.memoizedState.cache);
    }
    return Pt(e, t, l);
  }
  function Go(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Le = !0;
      else {
        if (!ns(e, l) && (t.flags & 128) === 0) return ((Le = !1), j0(e, t, l));
        Le = (e.flags & 131072) !== 0;
      }
    else ((Le = !1), se && (t.flags & 1048576) !== 0 && yr(t, on, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = Wl(t.elementType)), (t.type = e), typeof e == 'function'))
            fc(e) ?
              ((a = ea(e, a)), (t.tag = 1), (t = Ho(null, t, e, a, l)))
            : ((t.tag = 0), (t = Fc(null, t, e, a, l)));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === xe) {
                ((t.tag = 11), (t = Ao(null, t, e, a, l)));
                break e;
              } else if (n === P) {
                ((t.tag = 14), (t = Co(null, t, e, a, l)));
                break e;
              }
            }
            throw ((t = Qt(e) || e), Error(s(306, t, '')));
          }
        }
        return t;
      case 0:
        return Fc(e, t, t.type, t.pendingProps, l);
      case 1:
        return ((a = t.type), (n = ea(a, t.pendingProps)), Ho(e, t, a, n, l));
      case 3:
        e: {
          if ((Ie(t, t.stateNode.containerInfo), e === null))
            throw Error(s(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          ((n = u.element), jc(e, t), pn(t, a, null, l));
          var c = t.memoizedState;
          if (
            ((a = c.cache),
            yl(t, He, a),
            a !== u.cache && gc(t, [He], l, !0),
            gn(),
            (a = c.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = Bo(e, t, a, l);
              break e;
            } else if (a !== n) {
              ((n = Et(Error(s(424)), t)), dn(n), (t = Bo(e, t, a, l)));
              break e;
            } else
              for (
                e = t.stateNode.containerInfo,
                  e.nodeType === 9 ?
                    (e = e.body)
                  : (e = e.nodeName === 'HTML' ? e.ownerDocument.body : e),
                  Ee = At(e.firstChild),
                  Je = t,
                  se = !0,
                  vl = null,
                  Tt = !0,
                  l = Rr(t, null, a, l),
                  t.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
          else {
            if ((Kl(), a === n)) {
              t = Pt(e, t, l);
              break e;
            }
            ke(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Xu(e, t),
          e === null ?
            (l = Fd(t.type, null, t.pendingProps, null)) ?
              (t.memoizedState = l)
            : se ||
              ((l = t.type),
              (e = t.pendingProps),
              (a = ni(ae.current).createElement(l)),
              (a[Ke] = t),
              (a[lt] = e),
              We(a, l, e),
              Qe(a),
              (t.stateNode = a))
          : (t.memoizedState = Fd(
              t.type,
              e.memoizedProps,
              t.pendingProps,
              e.memoizedState,
            )),
          null
        );
      case 27:
        return (
          ka(t),
          e === null &&
            se &&
            ((a = t.stateNode = $d(t.type, t.pendingProps, ae.current)),
            (Je = t),
            (Tt = !0),
            (n = Ee),
            Rl(t.type) ? ((Ls = n), (Ee = At(a.firstChild))) : (Ee = n)),
          ke(e, t, t.pendingProps.children, l),
          Xu(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            se &&
            ((n = a = Ee) &&
              ((a = ev(a, t.type, t.pendingProps, Tt)),
              a !== null ?
                ((t.stateNode = a),
                (Je = t),
                (Ee = At(a.firstChild)),
                (Tt = !1),
                (n = !0))
              : (n = !1)),
            n || _l(t)),
          ka(t),
          (n = t.type),
          (u = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (a = u.children),
          Ms(n, u) ? (a = null) : c !== null && Ms(n, c) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = Oc(e, t, v0, null, null, l)), (Yn._currentValue = n)),
          Xu(e, t),
          ke(e, t, a, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            se &&
            ((e = l = Ee) &&
              ((l = tv(l, t.pendingProps, Tt)),
              l !== null ?
                ((t.stateNode = l), (Je = t), (Ee = null), (e = !0))
              : (e = !1)),
            e || _l(t)),
          null
        );
      case 13:
        return Lo(e, t, l);
      case 4:
        return (
          Ie(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = Il(t, null, a, l)) : ke(e, t, a, l),
          t.child
        );
      case 11:
        return Ao(e, t, t.type, t.pendingProps, l);
      case 7:
        return (ke(e, t, t.pendingProps, l), t.child);
      case 8:
        return (ke(e, t, t.pendingProps.children, l), t.child);
      case 12:
        return (ke(e, t, t.pendingProps.children, l), t.child);
      case 10:
        return (
          (a = t.pendingProps),
          yl(t, t.type, a.value),
          ke(e, t, a.children, l),
          t.child
        );
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          $l(t),
          (n = $e(n)),
          (a = a(n)),
          (t.flags |= 1),
          ke(e, t, a, l),
          t.child
        );
      case 14:
        return Co(e, t, t.type, t.pendingProps, l);
      case 15:
        return Ro(e, t, t.type, t.pendingProps, l);
      case 19:
        return Yo(e, t, l);
      case 31:
        return E0(e, t, l);
      case 22:
        return Oo(e, t, l, t.pendingProps);
      case 24:
        return (
          $l(t),
          (a = $e(He)),
          e === null ?
            ((n = Sc()),
            n === null &&
              ((n = be),
              (u = pc()),
              (n.pooledCache = u),
              u.refCount++,
              u !== null && (n.pooledCacheLanes |= l),
              (n = u)),
            (t.memoizedState = { parent: a, cache: n }),
            Ec(t),
            yl(t, He, n))
          : ((e.lanes & l) !== 0 && (jc(e, t), pn(t, null, null, l), gn()),
            (n = e.memoizedState),
            (u = t.memoizedState),
            n.parent !== a ?
              ((n = { parent: a, cache: a }),
              (t.memoizedState = n),
              t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n),
              yl(t, He, a))
            : ((a = u.cache),
              yl(t, He, a),
              a !== n.cache && gc(t, [He], l, !0))),
          ke(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function el(e) {
    e.flags |= 4;
  }
  function us(e, t, l, a, n) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (n & 335544128) === n))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (hd()) e.flags |= 8192;
        else throw ((Fl = Tu), xc);
    } else e.flags &= -16777217;
  }
  function Xo(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !lh(t)))
      if (hd()) e.flags |= 8192;
      else throw ((Fl = Tu), xc);
  }
  function Qu(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? pf() : 536870912), (e.lanes |= t), (Ba |= t)));
  }
  function Nn(e, t) {
    if (!se)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var l = null; t !== null; )
            (t.alternate !== null && (l = t), (t = t.sibling));
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case 'collapsed':
          l = e.tail;
          for (var a = null; l !== null; )
            (l.alternate !== null && (a = l), (l = l.sibling));
          a === null ?
            t || e.tail === null ?
              (e.tail = null)
            : (e.tail.sibling = null)
          : (a.sibling = null);
      }
  }
  function je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = e),
          (n = n.sibling));
    else
      for (n = e.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = e),
          (n = n.sibling));
    return ((e.subtreeFlags |= a), (e.childLanes = l), t);
  }
  function N0(e, t, l) {
    var a = t.pendingProps;
    switch ((hc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (je(t), null);
      case 1:
        return (je(t), null);
      case 3:
        return (
          (l = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Wt(He),
          Oe(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ea(t) ?
              el(t)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), vc())),
          je(t),
          null
        );
      case 26:
        var n = t.type,
          u = t.memoizedState;
        return (
          e === null ?
            (el(t),
            u !== null ? (je(t), Xo(t, u)) : (je(t), us(t, n, null, a, l)))
          : u ?
            u !== e.memoizedState ?
              (el(t), je(t), Xo(t, u))
            : (je(t), (t.flags &= -16777217))
          : ((e = e.memoizedProps), e !== a && el(t), je(t), us(t, n, e, a, l)),
          null
        );
      case 27:
        if (
          (eu(t),
          (l = ae.current),
          (n = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== a && el(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166));
            return (je(t), null);
          }
          ((e = w.current),
            Ea(t) ? pr(t) : ((e = $d(n, a, l)), (t.stateNode = e), el(t)));
        }
        return (je(t), null);
      case 5:
        if ((eu(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && el(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166));
            return (je(t), null);
          }
          if (((u = w.current), Ea(t))) pr(t);
          else {
            var c = ni(ae.current);
            switch (u) {
              case 1:
                u = c.createElementNS('http://www.w3.org/2000/svg', n);
                break;
              case 2:
                u = c.createElementNS('http://www.w3.org/1998/Math/MathML', n);
                break;
              default:
                switch (n) {
                  case 'svg':
                    u = c.createElementNS('http://www.w3.org/2000/svg', n);
                    break;
                  case 'math':
                    u = c.createElementNS(
                      'http://www.w3.org/1998/Math/MathML',
                      n,
                    );
                    break;
                  case 'script':
                    ((u = c.createElement('div')),
                      (u.innerHTML = '<script><\/script>'),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case 'select':
                    ((u =
                      typeof a.is == 'string' ?
                        c.createElement('select', { is: a.is })
                      : c.createElement('select')),
                      a.multiple ?
                        (u.multiple = !0)
                      : a.size && (u.size = a.size));
                    break;
                  default:
                    u =
                      typeof a.is == 'string' ?
                        c.createElement(n, { is: a.is })
                      : c.createElement(n);
                }
            }
            ((u[Ke] = t), (u[lt] = a));
            e: for (c = t.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) u.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                ((c.child.return = c), (c = c.child));
                continue;
              }
              if (c === t) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === t) break e;
                c = c.return;
              }
              ((c.sibling.return = c.return), (c = c.sibling));
            }
            t.stateNode = u;
            e: switch ((We(u, n, a), n)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                a = !!a.autoFocus;
                break e;
              case 'img':
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && el(t);
          }
        }
        return (
          je(t),
          us(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && el(t);
        else {
          if (typeof a != 'string' && t.stateNode === null) throw Error(s(166));
          if (((e = ae.current), Ea(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (a = null),
              (n = Je),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            ((e[Ke] = t),
              (e = !!(
                e.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Ld(e.nodeValue, l)
              )),
              e || _l(t, !0));
          } else
            ((e = ni(e).createTextNode(a)), (e[Ke] = t), (t.stateNode = e));
        }
        return (je(t), null);
      case 31:
        if (((l = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = Ea(t)), l !== null)) {
            if (e === null) {
              if (!a) throw Error(s(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(s(557));
              e[Ke] = t;
            } else
              (Kl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (je(t), (e = !1));
          } else
            ((l = vc()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = l),
              (e = !0));
          if (!e) return t.flags & 256 ? (vt(t), t) : (vt(t), null);
          if ((t.flags & 128) !== 0) throw Error(s(558));
        }
        return (je(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = Ea(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(s(318));
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(s(317));
              n[Ke] = t;
            } else
              (Kl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (je(t), (n = !1));
          } else
            ((n = vc()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (n = !0));
          if (!n) return t.flags & 256 ? (vt(t), t) : (vt(t), null);
        }
        return (
          vt(t),
          (t.flags & 128) !== 0 ?
            ((t.lanes = l), t)
          : ((l = a !== null),
            (e = e !== null && e.memoizedState !== null),
            l &&
              ((a = t.child),
              (n = null),
              a.alternate !== null &&
                a.alternate.memoizedState !== null &&
                a.alternate.memoizedState.cachePool !== null &&
                (n = a.alternate.memoizedState.cachePool.pool),
              (u = null),
              a.memoizedState !== null &&
                a.memoizedState.cachePool !== null &&
                (u = a.memoizedState.cachePool.pool),
              u !== n && (a.flags |= 2048)),
            l !== e && l && (t.child.flags |= 8192),
            Qu(t, t.updateQueue),
            je(t),
            null)
        );
      case 4:
        return (Oe(), e === null && zs(t.stateNode.containerInfo), je(t), null);
      case 10:
        return (Wt(t.type), je(t), null);
      case 19:
        if ((U(Me), (a = t.memoizedState), a === null)) return (je(t), null);
        if (((n = (t.flags & 128) !== 0), (u = a.rendering), u === null))
          if (n) Nn(a, !1);
          else {
            if (Ce !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = Ru(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      Nn(a, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      Qu(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;
                  )
                    (mr(l, e), (l = l.sibling));
                  return (
                    L(Me, (Me.current & 1) | 2),
                    se && $t(t, a.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            a.tail !== null &&
              ft() > $u &&
              ((t.flags |= 128), (n = !0), Nn(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((e = Ru(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (n = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Qu(t, e),
                Nn(a, !0),
                a.tail === null &&
                  a.tailMode === 'hidden' &&
                  !u.alternate &&
                  !se)
              )
                return (je(t), null);
            } else
              2 * ft() - a.renderingStartTime > $u &&
                l !== 536870912 &&
                ((t.flags |= 128), (n = !0), Nn(a, !1), (t.lanes = 4194304));
          a.isBackwards ?
            ((u.sibling = t.child), (t.child = u))
          : ((e = a.last),
            e !== null ? (e.sibling = u) : (t.child = u),
            (a.last = u));
        }
        return a.tail !== null ?
            ((e = a.tail),
            (a.rendering = e),
            (a.tail = e.sibling),
            (a.renderingStartTime = ft()),
            (e.sibling = null),
            (l = Me.current),
            L(Me, n ? (l & 1) | 2 : l & 1),
            se && $t(t, a.treeForkCount),
            e)
          : (je(t), null);
      case 22:
      case 23:
        return (
          vt(t),
          Ac(),
          (a = t.memoizedState !== null),
          e !== null ?
            (e.memoizedState !== null) !== a && (t.flags |= 8192)
          : a && (t.flags |= 8192),
          a ?
            (l & 536870912) !== 0 &&
            (t.flags & 128) === 0 &&
            (je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : je(t),
          (l = t.updateQueue),
          l !== null && Qu(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== l && (t.flags |= 2048),
          e !== null && U(kl),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Wt(He),
          je(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function T0(e, t) {
    switch ((hc(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Wt(He),
          Oe(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ?
            ((t.flags = (e & -65537) | 128), t)
          : null
        );
      case 26:
      case 27:
      case 5:
        return (eu(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((vt(t), t.alternate === null)) throw Error(s(340));
          Kl();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (vt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          Kl();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (U(Me), null);
      case 4:
        return (Oe(), null);
      case 10:
        return (Wt(t.type), null);
      case 22:
      case 23:
        return (
          vt(t),
          Ac(),
          e !== null && U(kl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Wt(He), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function wo(e, t) {
    switch ((hc(t), t.tag)) {
      case 3:
        (Wt(He), Oe());
        break;
      case 26:
      case 27:
      case 5:
        eu(t);
        break;
      case 4:
        Oe();
        break;
      case 31:
        t.memoizedState !== null && vt(t);
        break;
      case 13:
        vt(t);
        break;
      case 19:
        U(Me);
        break;
      case 10:
        Wt(t.type);
        break;
      case 22:
      case 23:
        (vt(t), Ac(), e !== null && U(kl));
        break;
      case 24:
        Wt(He);
    }
  }
  function Tn(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var u = l.create,
              c = l.inst;
            ((a = u()), (c.destroy = a));
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (r) {
      me(t, t.return, r);
    }
  }
  function El(e, t, l) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var c = a.inst,
              r = c.destroy;
            if (r !== void 0) {
              ((c.destroy = void 0), (n = t));
              var v = l,
                T = r;
              try {
                T();
              } catch (R) {
                me(n, v, R);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (R) {
      me(t, t.return, R);
    }
  }
  function Qo(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Mr(t, l);
      } catch (a) {
        me(e, e.return, a);
      }
    }
  }
  function Zo(e, t, l) {
    ((l.props = ea(e.type, e.memoizedProps)), (l.state = e.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (a) {
      me(e, t, a);
    }
  }
  function zn(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == 'function' ? (e.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      me(e, t, n);
    }
  }
  function Gt(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == 'function')
        try {
          a();
        } catch (n) {
          me(e, t, n);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof l == 'function')
        try {
          l(null);
        } catch (n) {
          me(e, t, n);
        }
      else l.current = null;
  }
  function Vo(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          l.autoFocus && a.focus();
          break e;
        case 'img':
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      me(e, e.return, n);
    }
  }
  function is(e, t, l) {
    try {
      var a = e.stateNode;
      ($0(a, e.type, l, t), (a[lt] = t));
    } catch (n) {
      me(e, e.return, n);
    }
  }
  function Ko(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Rl(e.type)) ||
      e.tag === 4
    );
  }
  function cs(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ko(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && Rl(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ss(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode),
        t ?
          (l.nodeType === 9 ? l.body
          : l.nodeName === 'HTML' ? l.ownerDocument.body
          : l
          ).insertBefore(e, t)
        : ((t =
            l.nodeType === 9 ? l.body
            : l.nodeName === 'HTML' ? l.ownerDocument.body
            : l),
          t.appendChild(e),
          (l = l._reactRootContainer),
          l != null || t.onclick !== null || (t.onclick = Vt)));
    else if (
      a !== 4 &&
      (a === 27 && Rl(e.type) && ((l = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (ss(e, t, l), e = e.sibling; e !== null; )
        (ss(e, t, l), (e = e.sibling));
  }
  function Zu(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e));
    else if (
      a !== 4 &&
      (a === 27 && Rl(e.type) && (l = e.stateNode), (e = e.child), e !== null)
    )
      for (Zu(e, t, l), e = e.sibling; e !== null; )
        (Zu(e, t, l), (e = e.sibling));
  }
  function Jo(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      (We(t, a, l), (t[Ke] = e), (t[lt] = l));
    } catch (u) {
      me(e, e.return, u);
    }
  }
  var tl = !1,
    qe = !1,
    fs = !1,
    $o = typeof WeakSet == 'function' ? WeakSet : Set,
    Ze = null;
  function z0(e, t) {
    if (((e = e.containerInfo), (Rs = oi), (e = ur(e)), lc(e))) {
      if ('selectionStart' in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              (l.nodeType, u.nodeType);
            } catch {
              l = null;
              break e;
            }
            var c = 0,
              r = -1,
              v = -1,
              T = 0,
              R = 0,
              D = e,
              z = null;
            t: for (;;) {
              for (
                var C;
                D !== l || (n !== 0 && D.nodeType !== 3) || (r = c + n),
                  D !== u || (a !== 0 && D.nodeType !== 3) || (v = c + a),
                  D.nodeType === 3 && (c += D.nodeValue.length),
                  (C = D.firstChild) !== null;
              )
                ((z = D), (D = C));
              for (;;) {
                if (D === e) break t;
                if (
                  (z === l && ++T === n && (r = c),
                  z === u && ++R === a && (v = c),
                  (C = D.nextSibling) !== null)
                )
                  break;
                ((D = z), (z = D.parentNode));
              }
              D = C;
            }
            l = r === -1 || v === -1 ? null : { start: r, end: v };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      Os = { focusedElem: e, selectionRange: l }, oi = !1, Ze = t;
      Ze !== null;
    )
      if (
        ((t = Ze), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (Ze = e));
      else
        for (; Ze !== null; ) {
          switch (((t = Ze), (u = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (l = 0; l < e.length; l++)
                  ((n = e[l]), (n.ref.impl = n.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                ((e = void 0),
                  (l = t),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = l.stateNode));
                try {
                  var Y = ea(l.type, n);
                  ((e = a.getSnapshotBeforeUpdate(Y, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = e));
                } catch ($) {
                  me(l, l.return, $);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  Us(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Us(e);
                      break;
                    default:
                      e.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (Ze = e));
            break;
          }
          Ze = t.return;
        }
  }
  function ko(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (al(e, l), a & 4 && Tn(5, l));
        break;
      case 1:
        if ((al(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (c) {
              me(l, l.return, c);
            }
          else {
            var n = ea(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              me(l, l.return, c);
            }
          }
        (a & 64 && Qo(l), a & 512 && zn(l, l.return));
        break;
      case 3:
        if ((al(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            Mr(e, t);
          } catch (c) {
            me(l, l.return, c);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Jo(l);
      case 26:
      case 5:
        (al(e, l), t === null && a & 4 && Vo(l), a & 512 && zn(l, l.return));
        break;
      case 12:
        al(e, l);
        break;
      case 31:
        (al(e, l), a & 4 && Io(e, l));
        break;
      case 13:
        (al(e, l),
          a & 4 && Po(e, l),
          a & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = B0.bind(null, l)), lv(e, l)))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || tl), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || qe), (n = tl));
          var u = qe;
          ((tl = a),
            (qe = t) && !u ? nl(e, l, (l.subtreeFlags & 8772) !== 0) : al(e, l),
            (tl = n),
            (qe = u));
        }
        break;
      case 30:
        break;
      default:
        al(e, l);
    }
  }
  function Wo(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Wo(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Yi(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Ne = null,
    nt = !1;
  function ll(e, t, l) {
    for (l = l.child; l !== null; ) (Fo(e, t, l), (l = l.sibling));
  }
  function Fo(e, t, l) {
    if (rt && typeof rt.onCommitFiberUnmount == 'function')
      try {
        rt.onCommitFiberUnmount(Wa, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (qe || Gt(l, t),
          ll(e, t, l),
          l.memoizedState ?
            l.memoizedState.count--
          : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        qe || Gt(l, t);
        var a = Ne,
          n = nt;
        (Rl(l.type) && ((Ne = l.stateNode), (nt = !1)),
          ll(e, t, l),
          Bn(l.stateNode),
          (Ne = a),
          (nt = n));
        break;
      case 5:
        qe || Gt(l, t);
      case 6:
        if (
          ((a = Ne),
          (n = nt),
          (Ne = null),
          ll(e, t, l),
          (Ne = a),
          (nt = n),
          Ne !== null)
        )
          if (nt)
            try {
              (Ne.nodeType === 9 ? Ne.body
              : Ne.nodeName === 'HTML' ? Ne.ownerDocument.body
              : Ne
              ).removeChild(l.stateNode);
            } catch (u) {
              me(l, t, u);
            }
          else
            try {
              Ne.removeChild(l.stateNode);
            } catch (u) {
              me(l, t, u);
            }
        break;
      case 18:
        Ne !== null &&
          (nt ?
            ((e = Ne),
            Qd(
              e.nodeType === 9 ? e.body
              : e.nodeName === 'HTML' ? e.ownerDocument.body
              : e,
              l.stateNode,
            ),
            Za(e))
          : Qd(Ne, l.stateNode));
        break;
      case 4:
        ((a = Ne),
          (n = nt),
          (Ne = l.stateNode.containerInfo),
          (nt = !0),
          ll(e, t, l),
          (Ne = a),
          (nt = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (El(2, l, t), qe || El(4, l, t), ll(e, t, l));
        break;
      case 1:
        (qe ||
          (Gt(l, t),
          (a = l.stateNode),
          typeof a.componentWillUnmount == 'function' && Zo(l, t, a)),
          ll(e, t, l));
        break;
      case 21:
        ll(e, t, l);
        break;
      case 22:
        ((qe = (a = qe) || l.memoizedState !== null), ll(e, t, l), (qe = a));
        break;
      default:
        ll(e, t, l);
    }
  }
  function Io(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Za(e);
      } catch (l) {
        me(t, t.return, l);
      }
    }
  }
  function Po(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Za(e);
      } catch (l) {
        me(t, t.return, l);
      }
  }
  function A0(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new $o()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new $o()),
          t
        );
      default:
        throw Error(s(435, e.tag));
    }
  }
  function Vu(e, t) {
    var l = A0(e);
    t.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var n = L0.bind(null, e, a);
        a.then(n, n);
      }
    });
  }
  function ut(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          u = e,
          c = t,
          r = c;
        e: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
              if (Rl(r.type)) {
                ((Ne = r.stateNode), (nt = !1));
                break e;
              }
              break;
            case 5:
              ((Ne = r.stateNode), (nt = !1));
              break e;
            case 3:
            case 4:
              ((Ne = r.stateNode.containerInfo), (nt = !0));
              break e;
          }
          r = r.return;
        }
        if (Ne === null) throw Error(s(160));
        (Fo(u, c, n),
          (Ne = null),
          (nt = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (ed(t, e), (t = t.sibling));
  }
  var Ut = null;
  function ed(e, t) {
    var l = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ut(t, e),
          it(e),
          a & 4 && (El(3, e, e.return), Tn(3, e), El(5, e, e.return)));
        break;
      case 1:
        (ut(t, e),
          it(e),
          a & 512 && (qe || l === null || Gt(l, l.return)),
          a & 64 &&
            tl &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? a : l.concat(a))))));
        break;
      case 26:
        var n = Ut;
        if (
          (ut(t, e),
          it(e),
          a & 512 && (qe || l === null || Gt(l, l.return)),
          a & 4)
        ) {
          var u = l !== null ? l.memoizedState : null;
          if (((a = e.memoizedState), l === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  ((a = e.type),
                    (l = e.memoizedProps),
                    (n = n.ownerDocument || n));
                  t: switch (a) {
                    case 'title':
                      ((u = n.getElementsByTagName('title')[0]),
                        (!u ||
                          u[Pa] ||
                          u[Ke] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector('head > title'),
                          )),
                        We(u, a, l),
                        (u[Ke] = e),
                        Qe(u),
                        (a = u));
                      break e;
                    case 'link':
                      var c = eh('link', 'href', n).get(a + (l.href || ''));
                      if (c) {
                        for (var r = 0; r < c.length; r++)
                          if (
                            ((u = c[r]),
                            u.getAttribute('href') ===
                              (l.href == null || l.href === '' ?
                                null
                              : l.href) &&
                              u.getAttribute('rel') ===
                                (l.rel == null ? null : l.rel) &&
                              u.getAttribute('title') ===
                                (l.title == null ? null : l.title) &&
                              u.getAttribute('crossorigin') ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            c.splice(r, 1);
                            break t;
                          }
                      }
                      ((u = n.createElement(a)),
                        We(u, a, l),
                        n.head.appendChild(u));
                      break;
                    case 'meta':
                      if (
                        (c = eh('meta', 'content', n).get(
                          a + (l.content || ''),
                        ))
                      ) {
                        for (r = 0; r < c.length; r++)
                          if (
                            ((u = c[r]),
                            u.getAttribute('content') ===
                              (l.content == null ? null : '' + l.content) &&
                              u.getAttribute('name') ===
                                (l.name == null ? null : l.name) &&
                              u.getAttribute('property') ===
                                (l.property == null ? null : l.property) &&
                              u.getAttribute('http-equiv') ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              u.getAttribute('charset') ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            c.splice(r, 1);
                            break t;
                          }
                      }
                      ((u = n.createElement(a)),
                        We(u, a, l),
                        n.head.appendChild(u));
                      break;
                    default:
                      throw Error(s(468, a));
                  }
                  ((u[Ke] = e), Qe(u), (a = u));
                }
                e.stateNode = a;
              } else th(n, e.type, e.stateNode);
            else e.stateNode = Pd(n, a, e.memoizedProps);
          else
            u !== a ?
              (u === null ?
                l.stateNode !== null &&
                ((l = l.stateNode), l.parentNode.removeChild(l))
              : u.count--,
              a === null ?
                th(n, e.type, e.stateNode)
              : Pd(n, a, e.memoizedProps))
            : a === null &&
              e.stateNode !== null &&
              is(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (ut(t, e),
          it(e),
          a & 512 && (qe || l === null || Gt(l, l.return)),
          l !== null && a & 4 && is(e, e.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (ut(t, e),
          it(e),
          a & 512 && (qe || l === null || Gt(l, l.return)),
          e.flags & 32)
        ) {
          n = e.stateNode;
          try {
            ha(n, '');
          } catch (Y) {
            me(e, e.return, Y);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), is(e, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (fs = !0));
        break;
      case 6:
        if ((ut(t, e), it(e), a & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          ((a = e.memoizedProps), (l = e.stateNode));
          try {
            l.nodeValue = a;
          } catch (Y) {
            me(e, e.return, Y);
          }
        }
        break;
      case 3:
        if (
          ((ci = null),
          (n = Ut),
          (Ut = ui(t.containerInfo)),
          ut(t, e),
          (Ut = n),
          it(e),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Za(t.containerInfo);
          } catch (Y) {
            me(e, e.return, Y);
          }
        fs && ((fs = !1), td(e));
        break;
      case 4:
        ((a = Ut),
          (Ut = ui(e.stateNode.containerInfo)),
          ut(t, e),
          it(e),
          (Ut = a));
        break;
      case 12:
        (ut(t, e), it(e));
        break;
      case 31:
        (ut(t, e),
          it(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Vu(e, a))));
        break;
      case 13:
        (ut(t, e),
          it(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Ju = ft()),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Vu(e, a))));
        break;
      case 22:
        n = e.memoizedState !== null;
        var v = l !== null && l.memoizedState !== null,
          T = tl,
          R = qe;
        if (
          ((tl = T || n),
          (qe = R || v),
          ut(t, e),
          (qe = R),
          (tl = T),
          it(e),
          a & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (l === null || v || tl || qe || ta(e)),
              l = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                v = l = t;
                try {
                  if (((u = v.stateNode), n))
                    ((c = u.style),
                      typeof c.setProperty == 'function' ?
                        c.setProperty('display', 'none', 'important')
                      : (c.display = 'none'));
                  else {
                    r = v.stateNode;
                    var D = v.memoizedProps.style,
                      z =
                        D != null && D.hasOwnProperty('display') ?
                          D.display
                        : null;
                    r.style.display =
                      z == null || typeof z == 'boolean' ? '' : ('' + z).trim();
                  }
                } catch (Y) {
                  me(v, v.return, Y);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                v = t;
                try {
                  v.stateNode.nodeValue = n ? '' : v.memoizedProps;
                } catch (Y) {
                  me(v, v.return, Y);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                v = t;
                try {
                  var C = v.stateNode;
                  n ? Zd(C, !0) : Zd(v.stateNode, !1);
                } catch (Y) {
                  me(v, v.return, Y);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (l === t && (l = null), (t = t.return));
            }
            (l === t && (l = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), Vu(e, l))));
        break;
      case 19:
        (ut(t, e),
          it(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Vu(e, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ut(t, e), it(e));
    }
  }
  function it(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (Ko(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(s(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              u = cs(e);
            Zu(e, u, n);
            break;
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (ha(c, ''), (l.flags &= -33));
            var r = cs(e);
            Zu(e, r, c);
            break;
          case 3:
          case 4:
            var v = l.stateNode.containerInfo,
              T = cs(e);
            ss(e, T, v);
            break;
          default:
            throw Error(s(161));
        }
      } catch (R) {
        me(e, e.return, R);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function td(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (td(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function al(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (ko(e, t.alternate, t), (t = t.sibling));
  }
  function ta(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (El(4, t, t.return), ta(t));
          break;
        case 1:
          Gt(t, t.return);
          var l = t.stateNode;
          (typeof l.componentWillUnmount == 'function' && Zo(t, t.return, l),
            ta(t));
          break;
        case 27:
          Bn(t.stateNode);
        case 26:
        case 5:
          (Gt(t, t.return), ta(t));
          break;
        case 22:
          t.memoizedState === null && ta(t);
          break;
        case 30:
          ta(t);
          break;
        default:
          ta(t);
      }
      e = e.sibling;
    }
  }
  function nl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = e,
        u = t,
        c = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (nl(n, u, l), Tn(4, u));
          break;
        case 1:
          if (
            (nl(n, u, l),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == 'function')
          )
            try {
              n.componentDidMount();
            } catch (T) {
              me(a, a.return, T);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var r = a.stateNode;
            try {
              var v = n.shared.hiddenCallbacks;
              if (v !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < v.length; n++)
                  Or(v[n], r);
            } catch (T) {
              me(a, a.return, T);
            }
          }
          (l && c & 64 && Qo(u), zn(u, u.return));
          break;
        case 27:
          Jo(u);
        case 26:
        case 5:
          (nl(n, u, l), l && a === null && c & 4 && Vo(u), zn(u, u.return));
          break;
        case 12:
          nl(n, u, l);
          break;
        case 31:
          (nl(n, u, l), l && c & 4 && Io(n, u));
          break;
        case 13:
          (nl(n, u, l), l && c & 4 && Po(n, u));
          break;
        case 22:
          (u.memoizedState === null && nl(n, u, l), zn(u, u.return));
          break;
        case 30:
          break;
        default:
          nl(n, u, l);
      }
      t = t.sibling;
    }
  }
  function rs(e, t) {
    var l = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && hn(l)));
  }
  function os(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && hn(e)));
  }
  function Ht(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (ld(e, t, l, a), (t = t.sibling));
  }
  function ld(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Ht(e, t, l, a), n & 2048 && Tn(9, t));
        break;
      case 1:
        Ht(e, t, l, a);
        break;
      case 3:
        (Ht(e, t, l, a),
          n & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && hn(e))));
        break;
      case 12:
        if (n & 2048) {
          (Ht(e, t, l, a), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              c = u.id,
              r = u.onPostCommit;
            typeof r == 'function' &&
              r(
                c,
                t.alternate === null ? 'mount' : 'update',
                e.passiveEffectDuration,
                -0,
              );
          } catch (v) {
            me(t, t.return, v);
          }
        } else Ht(e, t, l, a);
        break;
      case 31:
        Ht(e, t, l, a);
        break;
      case 13:
        Ht(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (c = t.alternate),
          t.memoizedState !== null ?
            u._visibility & 2 ?
              Ht(e, t, l, a)
            : An(e, t)
          : u._visibility & 2 ? Ht(e, t, l, a)
          : ((u._visibility |= 2),
            Da(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && rs(c, t));
        break;
      case 24:
        (Ht(e, t, l, a), n & 2048 && os(t.alternate, t));
        break;
      default:
        Ht(e, t, l, a);
    }
  }
  function Da(e, t, l, a, n) {
    for (
      n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var u = e,
        c = t,
        r = l,
        v = a,
        T = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (Da(u, c, r, v, n), Tn(8, c));
          break;
        case 23:
          break;
        case 22:
          var R = c.stateNode;
          (c.memoizedState !== null ?
            R._visibility & 2 ?
              Da(u, c, r, v, n)
            : An(u, c)
          : ((R._visibility |= 2), Da(u, c, r, v, n)),
            n && T & 2048 && rs(c.alternate, c));
          break;
        case 24:
          (Da(u, c, r, v, n), n && T & 2048 && os(c.alternate, c));
          break;
        default:
          Da(u, c, r, v, n);
      }
      t = t.sibling;
    }
  }
  function An(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            (An(l, a), n & 2048 && rs(a.alternate, a));
            break;
          case 24:
            (An(l, a), n & 2048 && os(a.alternate, a));
            break;
          default:
            An(l, a);
        }
        t = t.sibling;
      }
  }
  var Cn = 8192;
  function Ua(e, t, l) {
    if (e.subtreeFlags & Cn)
      for (e = e.child; e !== null; ) (ad(e, t, l), (e = e.sibling));
  }
  function ad(e, t, l) {
    switch (e.tag) {
      case 26:
        (Ua(e, t, l),
          e.flags & Cn &&
            e.memoizedState !== null &&
            mv(l, Ut, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Ua(e, t, l);
        break;
      case 3:
      case 4:
        var a = Ut;
        ((Ut = ui(e.stateNode.containerInfo)), Ua(e, t, l), (Ut = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null ?
            ((a = Cn), (Cn = 16777216), Ua(e, t, l), (Cn = a))
          : Ua(e, t, l));
        break;
      default:
        Ua(e, t, l);
    }
  }
  function nd(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function Rn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ((Ze = a), id(a, e));
        }
      nd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (ud(e), (e = e.sibling));
  }
  function ud(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Rn(e), e.flags & 2048 && El(9, e, e.return));
        break;
      case 3:
        Rn(e);
        break;
      case 12:
        Rn(e);
        break;
      case 22:
        var t = e.stateNode;
        (
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
        ) ?
          ((t._visibility &= -3), Ku(e))
        : Rn(e);
        break;
      default:
        Rn(e);
    }
  }
  function Ku(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ((Ze = a), id(a, e));
        }
      nd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (El(8, t, t.return), Ku(t));
          break;
        case 22:
          ((l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Ku(t)));
          break;
        default:
          Ku(t);
      }
      e = e.sibling;
    }
  }
  function id(e, t) {
    for (; Ze !== null; ) {
      var l = Ze;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          El(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          hn(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) ((a.return = l), (Ze = a));
      else
        e: for (l = e; Ze !== null; ) {
          a = Ze;
          var n = a.sibling,
            u = a.return;
          if ((Wo(a), a === l)) {
            Ze = null;
            break e;
          }
          if (n !== null) {
            ((n.return = u), (Ze = n));
            break e;
          }
          Ze = u;
        }
    }
  }
  var C0 = {
      getCacheForType: function (e) {
        var t = $e(He),
          l = t.data.get(e);
        return (l === void 0 && ((l = e()), t.data.set(e, l)), l);
      },
      cacheSignal: function () {
        return $e(He).controller.signal;
      },
    },
    R0 = typeof WeakMap == 'function' ? WeakMap : Map,
    oe = 0,
    be = null,
    ne = null,
    ie = 0,
    he = 0,
    _t = null,
    jl = !1,
    Ha = !1,
    ds = !1,
    ul = 0,
    Ce = 0,
    Nl = 0,
    la = 0,
    hs = 0,
    yt = 0,
    Ba = 0,
    On = null,
    ct = null,
    ms = !1,
    Ju = 0,
    cd = 0,
    $u = 1 / 0,
    ku = null,
    Tl = null,
    Ye = 0,
    zl = null,
    La = null,
    il = 0,
    vs = 0,
    _s = null,
    sd = null,
    Mn = 0,
    ys = null;
  function gt() {
    return (
      (oe & 2) !== 0 && ie !== 0 ? ie & -ie
      : O.T !== null ? Es()
      : Ef()
    );
  }
  function fd() {
    if (yt === 0)
      if ((ie & 536870912) === 0 || se) {
        var e = au;
        ((au <<= 1), (au & 3932160) === 0 && (au = 262144), (yt = e));
      } else yt = 536870912;
    return ((e = mt.current), e !== null && (e.flags |= 32), yt);
  }
  function st(e, t, l) {
    (((e === be && (he === 2 || he === 9)) || e.cancelPendingCommit !== null) &&
      (qa(e, 0), Al(e, ie, yt, !1)),
      Ia(e, l),
      ((oe & 2) === 0 || e !== be) &&
        (e === be &&
          ((oe & 2) === 0 && (la |= l), Ce === 4 && Al(e, ie, yt, !1)),
        Xt(e)));
  }
  function rd(e, t, l) {
    if ((oe & 6) !== 0) throw Error(s(327));
    var a = (!l && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Fa(e, t),
      n = a ? D0(e, t) : ps(e, t, !0),
      u = a;
    do {
      if (n === 0) {
        Ha && !a && Al(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), u && !O0(l))) {
          ((n = ps(e, t, !1)), (u = !1));
          continue;
        }
        if (n === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var c = 0;
          else
            ((c = e.pendingLanes & -536870913),
              (c =
                c !== 0 ? c
                : c & 536870912 ? 536870912
                : 0));
          if (c !== 0) {
            t = c;
            e: {
              var r = e;
              n = On;
              var v = r.current.memoizedState.isDehydrated;
              if ((v && (qa(r, c).flags |= 256), (c = ps(r, c, !1)), c !== 2)) {
                if (ds && !v) {
                  ((r.errorRecoveryDisabledLanes |= u), (la |= u), (n = 4));
                  break e;
                }
                ((u = ct),
                  (ct = n),
                  u !== null &&
                    (ct === null ? (ct = u) : ct.push.apply(ct, u)));
              }
              n = c;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          (qa(e, 0), Al(e, t, 0, !0));
          break;
        }
        e: {
          switch (((a = e), (u = n), u)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Al(a, t, yt, !jl);
              break e;
            case 2:
              ct = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && ((n = Ju + 300 - ft()), 10 < n)) {
            if ((Al(a, t, yt, !jl), uu(a, 0, !0) !== 0)) break e;
            ((il = t),
              (a.timeoutHandle = Xd(
                od.bind(
                  null,
                  a,
                  l,
                  ct,
                  ku,
                  ms,
                  t,
                  yt,
                  la,
                  Ba,
                  jl,
                  u,
                  'Throttled',
                  -0,
                  0,
                ),
                n,
              )));
            break e;
          }
          od(a, l, ct, ku, ms, t, yt, la, Ba, jl, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Xt(e);
  }
  function od(e, t, l, a, n, u, c, r, v, T, R, D, z, C) {
    if (
      ((e.timeoutHandle = -1),
      (D = t.subtreeFlags),
      D & 8192 || (D & 16785408) === 16785408)
    ) {
      ((D = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Vt,
      }),
        ad(t, u, D));
      var Y =
        (u & 62914560) === u ? Ju - ft()
        : (u & 4194048) === u ? cd - ft()
        : 0;
      if (((Y = vv(D, Y)), Y !== null)) {
        ((il = u),
          (e.cancelPendingCommit = Y(
            pd.bind(null, e, t, u, l, a, n, c, r, v, R, D, null, z, C),
          )),
          Al(e, u, c, !T));
        return;
      }
    }
    pd(e, t, u, l, a, n, c, r, v);
  }
  function O0(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!dt(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        ((l.return = t), (t = l));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Al(e, t, l, a) {
    ((t &= ~hs),
      (t &= ~la),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var n = t; 0 < n; ) {
      var u = 31 - ot(n),
        c = 1 << u;
      ((a[u] = -1), (n &= ~c));
    }
    l !== 0 && bf(e, l, t);
  }
  function Wu() {
    return (oe & 6) === 0 ? (Dn(0), !1) : !0;
  }
  function gs() {
    if (ne !== null) {
      if (he === 0) var e = ne.return;
      else ((e = ne), (kt = Jl = null), Uc(e), (Aa = null), (vn = 0), (e = ne));
      for (; e !== null; ) (wo(e.alternate, e), (e = e.return));
      ne = null;
    }
  }
  function qa(e, t) {
    var l = e.timeoutHandle;
    (l !== -1 && ((e.timeoutHandle = -1), F0(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      (il = 0),
      gs(),
      (be = e),
      (ne = l = Jt(e.current, null)),
      (ie = t),
      (he = 0),
      (_t = null),
      (jl = !1),
      (Ha = Fa(e, t)),
      (ds = !1),
      (Ba = yt = hs = la = Nl = Ce = 0),
      (ct = On = null),
      (ms = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - ot(a),
          u = 1 << n;
        ((t |= e[n]), (a &= ~u));
      }
    return ((ul = t), yu(), l);
  }
  function dd(e, t) {
    ((te = null),
      (O.H = En),
      t === za || t === Nu ? ((t = zr()), (he = 3))
      : t === xc ? ((t = zr()), (he = 4))
      : (he =
          t === Wc ? 8
          : t !== null && typeof t == 'object' && typeof t.then == 'function' ?
            6
          : 1),
      (_t = t),
      ne === null && ((Ce = 1), Yu(e, Et(t, e.current))));
  }
  function hd() {
    var e = mt.current;
    return (
      e === null ? !0
      : (ie & 4194048) === ie ? zt === null
      : (ie & 62914560) === ie || (ie & 536870912) !== 0 ? e === zt
      : !1
    );
  }
  function md() {
    var e = O.H;
    return ((O.H = En), e === null ? En : e);
  }
  function vd() {
    var e = O.A;
    return ((O.A = C0), e);
  }
  function Fu() {
    ((Ce = 4),
      jl || ((ie & 4194048) !== ie && mt.current !== null) || (Ha = !0),
      ((Nl & 134217727) === 0 && (la & 134217727) === 0) ||
        be === null ||
        Al(be, ie, yt, !1));
  }
  function ps(e, t, l) {
    var a = oe;
    oe |= 2;
    var n = md(),
      u = vd();
    ((be !== e || ie !== t) && ((ku = null), qa(e, t)), (t = !1));
    var c = Ce;
    e: do
      try {
        if (he !== 0 && ne !== null) {
          var r = ne,
            v = _t;
          switch (he) {
            case 8:
              (gs(), (c = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              mt.current === null && (t = !0);
              var T = he;
              if (((he = 0), (_t = null), Ya(e, r, v, T), l && Ha)) {
                c = 0;
                break e;
              }
              break;
            default:
              ((T = he), (he = 0), (_t = null), Ya(e, r, v, T));
          }
        }
        (M0(), (c = Ce));
        break;
      } catch (R) {
        dd(e, R);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (kt = Jl = null),
      (oe = a),
      (O.H = n),
      (O.A = u),
      ne === null && ((be = null), (ie = 0), yu()),
      c
    );
  }
  function M0() {
    for (; ne !== null; ) _d(ne);
  }
  function D0(e, t) {
    var l = oe;
    oe |= 2;
    var a = md(),
      n = vd();
    be !== e || ie !== t ?
      ((ku = null), ($u = ft() + 500), qa(e, t))
    : (Ha = Fa(e, t));
    e: do
      try {
        if (he !== 0 && ne !== null) {
          t = ne;
          var u = _t;
          t: switch (he) {
            case 1:
              ((he = 0), (_t = null), Ya(e, t, u, 1));
              break;
            case 2:
            case 9:
              if (Nr(u)) {
                ((he = 0), (_t = null), yd(t));
                break;
              }
              ((t = function () {
                ((he !== 2 && he !== 9) || be !== e || (he = 7), Xt(e));
              }),
                u.then(t, t));
              break e;
            case 3:
              he = 7;
              break e;
            case 4:
              he = 5;
              break e;
            case 7:
              Nr(u) ?
                ((he = 0), (_t = null), yd(t))
              : ((he = 0), (_t = null), Ya(e, t, u, 7));
              break;
            case 5:
              var c = null;
              switch (ne.tag) {
                case 26:
                  c = ne.memoizedState;
                case 5:
                case 27:
                  var r = ne;
                  if (c ? lh(c) : r.stateNode.complete) {
                    ((he = 0), (_t = null));
                    var v = r.sibling;
                    if (v !== null) ne = v;
                    else {
                      var T = r.return;
                      T !== null ? ((ne = T), Iu(T)) : (ne = null);
                    }
                    break t;
                  }
              }
              ((he = 0), (_t = null), Ya(e, t, u, 5));
              break;
            case 6:
              ((he = 0), (_t = null), Ya(e, t, u, 6));
              break;
            case 8:
              (gs(), (Ce = 6));
              break e;
            default:
              throw Error(s(462));
          }
        }
        U0();
        break;
      } catch (R) {
        dd(e, R);
      }
    while (!0);
    return (
      (kt = Jl = null),
      (O.H = a),
      (O.A = n),
      (oe = l),
      ne !== null ? 0 : ((be = null), (ie = 0), yu(), Ce)
    );
  }
  function U0() {
    for (; ne !== null && !am(); ) _d(ne);
  }
  function _d(e) {
    var t = Go(e.alternate, e, ul);
    ((e.memoizedProps = e.pendingProps), t === null ? Iu(e) : (ne = t));
  }
  function yd(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Uo(l, t, t.pendingProps, t.type, void 0, ie);
        break;
      case 11:
        t = Uo(l, t, t.pendingProps, t.type.render, t.ref, ie);
        break;
      case 5:
        Uc(t);
      default:
        (wo(l, t), (t = ne = mr(t, ul)), (t = Go(l, t, ul)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Iu(e) : (ne = t));
  }
  function Ya(e, t, l, a) {
    ((kt = Jl = null), Uc(t), (Aa = null), (vn = 0));
    var n = t.return;
    try {
      if (x0(e, n, t, l, ie)) {
        ((Ce = 1), Yu(e, Et(l, e.current)), (ne = null));
        return;
      }
    } catch (u) {
      if (n !== null) throw ((ne = n), u);
      ((Ce = 1), Yu(e, Et(l, e.current)), (ne = null));
      return;
    }
    t.flags & 32768 ?
      (se || a === 1 ? (e = !0)
      : Ha || (ie & 536870912) !== 0 ? (e = !1)
      : ((jl = e = !0),
        (a === 2 || a === 9 || a === 3 || a === 6) &&
          ((a = mt.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
      gd(t, e))
    : Iu(t);
  }
  function Iu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        gd(t, jl);
        return;
      }
      e = t.return;
      var l = N0(t.alternate, t, ul);
      if (l !== null) {
        ne = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ne = t;
        return;
      }
      ne = t = e;
    } while (t !== null);
    Ce === 0 && (Ce = 5);
  }
  function gd(e, t) {
    do {
      var l = T0(e.alternate, e);
      if (l !== null) {
        ((l.flags &= 32767), (ne = l));
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        ne = e;
        return;
      }
      ne = e = l;
    } while (e !== null);
    ((Ce = 6), (ne = null));
  }
  function pd(e, t, l, a, n, u, c, r, v) {
    e.cancelPendingCommit = null;
    do Pu();
    while (Ye !== 0);
    if ((oe & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= cc),
        hm(e, l, u, c, r, v),
        e === be && ((ne = be = null), (ie = 0)),
        (La = t),
        (zl = e),
        (il = l),
        (vs = u),
        (_s = n),
        (sd = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ?
          ((e.callbackNode = null),
          (e.callbackPriority = 0),
          q0(tu, function () {
            return (jd(), null);
          }))
        : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = O.T), (O.T = null), (n = B.p), (B.p = 2), (c = oe), (oe |= 4));
        try {
          z0(e, t, l);
        } finally {
          ((oe = c), (B.p = n), (O.T = a));
        }
      }
      ((Ye = 1), bd(), Sd(), xd());
    }
  }
  function bd() {
    if (Ye === 1) {
      Ye = 0;
      var e = zl,
        t = La,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        ((l = O.T), (O.T = null));
        var a = B.p;
        B.p = 2;
        var n = oe;
        oe |= 4;
        try {
          ed(t, e);
          var u = Os,
            c = ur(e.containerInfo),
            r = u.focusedElem,
            v = u.selectionRange;
          if (
            c !== r &&
            r &&
            r.ownerDocument &&
            nr(r.ownerDocument.documentElement, r)
          ) {
            if (v !== null && lc(r)) {
              var T = v.start,
                R = v.end;
              if ((R === void 0 && (R = T), 'selectionStart' in r))
                ((r.selectionStart = T),
                  (r.selectionEnd = Math.min(R, r.value.length)));
              else {
                var D = r.ownerDocument || document,
                  z = (D && D.defaultView) || window;
                if (z.getSelection) {
                  var C = z.getSelection(),
                    Y = r.textContent.length,
                    $ = Math.min(v.start, Y),
                    ge = v.end === void 0 ? $ : Math.min(v.end, Y);
                  !C.extend && $ > ge && ((c = ge), (ge = $), ($ = c));
                  var x = ar(r, $),
                    y = ar(r, ge);
                  if (
                    x &&
                    y &&
                    (C.rangeCount !== 1 ||
                      C.anchorNode !== x.node ||
                      C.anchorOffset !== x.offset ||
                      C.focusNode !== y.node ||
                      C.focusOffset !== y.offset)
                  ) {
                    var E = D.createRange();
                    (E.setStart(x.node, x.offset),
                      C.removeAllRanges(),
                      $ > ge ?
                        (C.addRange(E), C.extend(y.node, y.offset))
                      : (E.setEnd(y.node, y.offset), C.addRange(E)));
                  }
                }
              }
            }
            for (D = [], C = r; (C = C.parentNode); )
              C.nodeType === 1 &&
                D.push({ element: C, left: C.scrollLeft, top: C.scrollTop });
            for (
              typeof r.focus == 'function' && r.focus(), r = 0;
              r < D.length;
              r++
            ) {
              var M = D[r];
              ((M.element.scrollLeft = M.left), (M.element.scrollTop = M.top));
            }
          }
          ((oi = !!Rs), (Os = Rs = null));
        } finally {
          ((oe = n), (B.p = a), (O.T = l));
        }
      }
      ((e.current = t), (Ye = 2));
    }
  }
  function Sd() {
    if (Ye === 2) {
      Ye = 0;
      var e = zl,
        t = La,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        ((l = O.T), (O.T = null));
        var a = B.p;
        B.p = 2;
        var n = oe;
        oe |= 4;
        try {
          ko(e, t.alternate, t);
        } finally {
          ((oe = n), (B.p = a), (O.T = l));
        }
      }
      Ye = 3;
    }
  }
  function xd() {
    if (Ye === 4 || Ye === 3) {
      ((Ye = 0), nm());
      var e = zl,
        t = La,
        l = il,
        a = sd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ?
        (Ye = 5)
      : ((Ye = 0), (La = zl = null), Ed(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (
        (n === 0 && (Tl = null),
        Li(l),
        (t = t.stateNode),
        rt && typeof rt.onCommitFiberRoot == 'function')
      )
        try {
          rt.onCommitFiberRoot(Wa, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = O.T), (n = B.p), (B.p = 2), (O.T = null));
        try {
          for (var u = e.onRecoverableError, c = 0; c < a.length; c++) {
            var r = a[c];
            u(r.value, { componentStack: r.stack });
          }
        } finally {
          ((O.T = t), (B.p = n));
        }
      }
      ((il & 3) !== 0 && Pu(),
        Xt(e),
        (n = e.pendingLanes),
        (l & 261930) !== 0 && (n & 42) !== 0 ?
          e === ys ?
            Mn++
          : ((Mn = 0), (ys = e))
        : (Mn = 0),
        Dn(0));
    }
  }
  function Ed(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), hn(t)));
  }
  function Pu() {
    return (bd(), Sd(), xd(), jd());
  }
  function jd() {
    if (Ye !== 5) return !1;
    var e = zl,
      t = vs;
    vs = 0;
    var l = Li(il),
      a = O.T,
      n = B.p;
    try {
      ((B.p = 32 > l ? 32 : l), (O.T = null), (l = _s), (_s = null));
      var u = zl,
        c = il;
      if (((Ye = 0), (La = zl = null), (il = 0), (oe & 6) !== 0))
        throw Error(s(331));
      var r = oe;
      if (
        ((oe |= 4),
        ud(u.current),
        ld(u, u.current, c, l),
        (oe = r),
        Dn(0, !1),
        rt && typeof rt.onPostCommitFiberRoot == 'function')
      )
        try {
          rt.onPostCommitFiberRoot(Wa, u);
        } catch {}
      return !0;
    } finally {
      ((B.p = n), (O.T = a), Ed(e, t));
    }
  }
  function Nd(e, t, l) {
    ((t = Et(l, t)),
      (t = kc(e.stateNode, t, 2)),
      (e = bl(e, t, 2)),
      e !== null && (Ia(e, 2), Xt(e)));
  }
  function me(e, t, l) {
    if (e.tag === 3) Nd(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Nd(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' &&
              (Tl === null || !Tl.has(a)))
          ) {
            ((e = Et(l, e)),
              (l = To(2)),
              (a = bl(t, l, 2)),
              a !== null && (zo(l, a, t, e), Ia(a, 2), Xt(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function bs(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new R0();
      var n = new Set();
      a.set(t, n);
    } else ((n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n)));
    n.has(l) ||
      ((ds = !0), n.add(l), (e = H0.bind(null, e, t, l)), t.then(e, e));
  }
  function H0(e, t, l) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      be === e &&
        (ie & l) === l &&
        (Ce === 4 || (Ce === 3 && (ie & 62914560) === ie && 300 > ft() - Ju) ?
          (oe & 2) === 0 && qa(e, 0)
        : (hs |= l),
        Ba === ie && (Ba = 0)),
      Xt(e));
  }
  function Td(e, t) {
    (t === 0 && (t = pf()), (e = Zl(e, t)), e !== null && (Ia(e, t), Xt(e)));
  }
  function B0(e) {
    var t = e.memoizedState,
      l = 0;
    (t !== null && (l = t.retryLane), Td(e, l));
  }
  function L0(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode,
          n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    (a !== null && a.delete(t), Td(e, l));
  }
  function q0(e, t) {
    return Di(e, t);
  }
  var ei = null,
    Ga = null,
    Ss = !1,
    ti = !1,
    xs = !1,
    Cl = 0;
  function Xt(e) {
    (e !== Ga &&
      e.next === null &&
      (Ga === null ? (ei = Ga = e) : (Ga = Ga.next = e)),
      (ti = !0),
      Ss || ((Ss = !0), G0()));
  }
  function Dn(e, t) {
    if (!xs && ti) {
      xs = !0;
      do
        for (var l = !1, a = ei; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var c = a.suspendedLanes,
                r = a.pingedLanes;
              ((u = (1 << (31 - ot(42 | e) + 1)) - 1),
                (u &= n & ~(c & ~r)),
                (u =
                  u & 201326741 ? (u & 201326741) | 1
                  : u ? u | 2
                  : 0));
            }
            u !== 0 && ((l = !0), Rd(a, u));
          } else
            ((u = ie),
              (u = uu(
                a,
                a === be ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || Fa(a, u) || ((l = !0), Rd(a, u)));
          a = a.next;
        }
      while (l);
      xs = !1;
    }
  }
  function Y0() {
    zd();
  }
  function zd() {
    ti = Ss = !1;
    var e = 0;
    Cl !== 0 && W0() && (e = Cl);
    for (var t = ft(), l = null, a = ei; a !== null; ) {
      var n = a.next,
        u = Ad(a, t);
      (u === 0 ?
        ((a.next = null),
        l === null ? (ei = n) : (l.next = n),
        n === null && (Ga = l))
      : ((l = a), (e !== 0 || (u & 3) !== 0) && (ti = !0)),
        (a = n));
    }
    ((Ye !== 0 && Ye !== 5) || Dn(e), Cl !== 0 && (Cl = 0));
  }
  function Ad(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        n = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var c = 31 - ot(u),
        r = 1 << c,
        v = n[c];
      (v === -1 ?
        ((r & l) === 0 || (r & a) !== 0) && (n[c] = dm(r, t))
      : v <= t && (e.expiredLanes |= r),
        (u &= ~r));
    }
    if (
      ((t = be),
      (l = ie),
      (l = uu(
        e,
        e === t ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (a = e.callbackNode),
      l === 0 ||
        (e === t && (he === 2 || he === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Ui(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Fa(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((a !== null && Ui(a), Li(l))) {
        case 2:
        case 8:
          l = yf;
          break;
        case 32:
          l = tu;
          break;
        case 268435456:
          l = gf;
          break;
        default:
          l = tu;
      }
      return (
        (a = Cd.bind(null, e)),
        (l = Di(l, a)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      a !== null && a !== null && Ui(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Cd(e, t) {
    if (Ye !== 0 && Ye !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var l = e.callbackNode;
    if (Pu() && e.callbackNode !== l) return null;
    var a = ie;
    return (
      (a = uu(
        e,
        e === be ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      a === 0 ? null : (
        (rd(e, a, t),
        Ad(e, ft()),
        e.callbackNode != null && e.callbackNode === l ?
          Cd.bind(null, e)
        : null)
      )
    );
  }
  function Rd(e, t) {
    if (Pu()) return null;
    rd(e, t, !0);
  }
  function G0() {
    I0(function () {
      (oe & 6) !== 0 ? Di(_f, Y0) : zd();
    });
  }
  function Es() {
    if (Cl === 0) {
      var e = Na;
      (e === 0 && ((e = lu), (lu <<= 1), (lu & 261888) === 0 && (lu = 256)),
        (Cl = e));
    }
    return Cl;
  }
  function Od(e) {
    return (
      e == null || typeof e == 'symbol' || typeof e == 'boolean' ? null
      : typeof e == 'function' ? e
      : fu('' + e)
    );
  }
  function Md(e, t) {
    var l = t.ownerDocument.createElement('input');
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute('form', e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function X0(e, t, l, a, n) {
    if (t === 'submit' && l && l.stateNode === n) {
      var u = Od((n[lt] || null).action),
        c = a.submitter;
      c &&
        ((t =
          (t = c[lt] || null) ?
            Od(t.formAction)
          : c.getAttribute('formAction')),
        t !== null && ((u = t), (c = null)));
      var r = new hu('action', 'action', null, a, n);
      e.push({
        event: r,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Cl !== 0) {
                  var v = c ? Md(n, c) : new FormData(n);
                  Qc(
                    l,
                    { pending: !0, data: v, method: n.method, action: u },
                    null,
                    v,
                  );
                }
              } else
                typeof u == 'function' &&
                  (r.preventDefault(),
                  (v = c ? Md(n, c) : new FormData(n)),
                  Qc(
                    l,
                    { pending: !0, data: v, method: n.method, action: u },
                    u,
                    v,
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var js = 0; js < ic.length; js++) {
    var Ns = ic[js],
      w0 = Ns.toLowerCase(),
      Q0 = Ns[0].toUpperCase() + Ns.slice(1);
    Dt(w0, 'on' + Q0);
  }
  (Dt(sr, 'onAnimationEnd'),
    Dt(fr, 'onAnimationIteration'),
    Dt(rr, 'onAnimationStart'),
    Dt('dblclick', 'onDoubleClick'),
    Dt('focusin', 'onFocus'),
    Dt('focusout', 'onBlur'),
    Dt(u0, 'onTransitionRun'),
    Dt(i0, 'onTransitionStart'),
    Dt(c0, 'onTransitionCancel'),
    Dt(or, 'onTransitionEnd'),
    oa('onMouseEnter', ['mouseout', 'mouseover']),
    oa('onMouseLeave', ['mouseout', 'mouseover']),
    oa('onPointerEnter', ['pointerout', 'pointerover']),
    oa('onPointerLeave', ['pointerout', 'pointerover']),
    Gl(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' ',
      ),
    ),
    Gl(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    Gl('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Gl(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Gl(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Gl(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    ));
  var Un =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    Z0 = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'
        .split(' ')
        .concat(Un),
    );
  function Dd(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        n = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var c = a.length - 1; 0 <= c; c--) {
            var r = a[c],
              v = r.instance,
              T = r.currentTarget;
            if (((r = r.listener), v !== u && n.isPropagationStopped()))
              break e;
            ((u = r), (n.currentTarget = T));
            try {
              u(n);
            } catch (R) {
              _u(R);
            }
            ((n.currentTarget = null), (u = v));
          }
        else
          for (c = 0; c < a.length; c++) {
            if (
              ((r = a[c]),
              (v = r.instance),
              (T = r.currentTarget),
              (r = r.listener),
              v !== u && n.isPropagationStopped())
            )
              break e;
            ((u = r), (n.currentTarget = T));
            try {
              u(n);
            } catch (R) {
              _u(R);
            }
            ((n.currentTarget = null), (u = v));
          }
      }
    }
  }
  function ue(e, t) {
    var l = t[qi];
    l === void 0 && (l = t[qi] = new Set());
    var a = e + '__bubble';
    l.has(a) || (Ud(t, e, 2, !1), l.add(a));
  }
  function Ts(e, t, l) {
    var a = 0;
    (t && (a |= 4), Ud(l, e, a, t));
  }
  var li = '_reactListening' + Math.random().toString(36).slice(2);
  function zs(e) {
    if (!e[li]) {
      ((e[li] = !0),
        Tf.forEach(function (l) {
          l !== 'selectionchange' && (Z0.has(l) || Ts(l, !1, e), Ts(l, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[li] || ((t[li] = !0), Ts('selectionchange', !1, t));
    }
  }
  function Ud(e, t, l, a) {
    switch (fh(t)) {
      case 2:
        var n = gv;
        break;
      case 8:
        n = pv;
        break;
      default:
        n = ws;
    }
    ((l = n.bind(null, t, l, e)),
      (n = void 0),
      !Ji ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (n = !0),
      a ?
        n !== void 0 ?
          e.addEventListener(t, l, { capture: !0, passive: n })
        : e.addEventListener(t, l, !0)
      : n !== void 0 ? e.addEventListener(t, l, { passive: n })
      : e.addEventListener(t, l, !1));
  }
  function As(e, t, l, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var r = a.stateNode.containerInfo;
          if (r === n) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var v = c.tag;
              if ((v === 3 || v === 4) && c.stateNode.containerInfo === n)
                return;
              c = c.return;
            }
          for (; r !== null; ) {
            if (((c = sa(r)), c === null)) return;
            if (((v = c.tag), v === 5 || v === 6 || v === 26 || v === 27)) {
              a = u = c;
              continue e;
            }
            r = r.parentNode;
          }
        }
        a = a.return;
      }
    qf(function () {
      var T = u,
        R = Vi(l),
        D = [];
      e: {
        var z = dr.get(e);
        if (z !== void 0) {
          var C = hu,
            Y = e;
          switch (e) {
            case 'keypress':
              if (ou(l) === 0) break e;
            case 'keydown':
            case 'keyup':
              C = Lm;
              break;
            case 'focusin':
              ((Y = 'focus'), (C = Fi));
              break;
            case 'focusout':
              ((Y = 'blur'), (C = Fi));
              break;
            case 'beforeblur':
            case 'afterblur':
              C = Fi;
              break;
            case 'click':
              if (l.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              C = Xf;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              C = Nm;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              C = Gm;
              break;
            case sr:
            case fr:
            case rr:
              C = Am;
              break;
            case or:
              C = wm;
              break;
            case 'scroll':
            case 'scrollend':
              C = Em;
              break;
            case 'wheel':
              C = Zm;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              C = Rm;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              C = Qf;
              break;
            case 'toggle':
            case 'beforetoggle':
              C = Km;
          }
          var $ = (t & 4) !== 0,
            ge = !$ && (e === 'scroll' || e === 'scrollend'),
            x =
              $ ?
                z !== null ?
                  z + 'Capture'
                : null
              : z;
          $ = [];
          for (var y = T, E; y !== null; ) {
            var M = y;
            if (
              ((E = M.stateNode),
              (M = M.tag),
              (M !== 5 && M !== 26 && M !== 27) ||
                E === null ||
                x === null ||
                ((M = tn(y, x)), M != null && $.push(Hn(y, M, E))),
              ge)
            )
              break;
            y = y.return;
          }
          0 < $.length &&
            ((z = new C(z, Y, null, l, R)), D.push({ event: z, listeners: $ }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((z = e === 'mouseover' || e === 'pointerover'),
            (C = e === 'mouseout' || e === 'pointerout'),
            z &&
              l !== Zi &&
              (Y = l.relatedTarget || l.fromElement) &&
              (sa(Y) || Y[ca]))
          )
            break e;
          if (
            (C || z) &&
            ((z =
              R.window === R ? R
              : (z = R.ownerDocument) ? z.defaultView || z.parentWindow
              : window),
            C ?
              ((Y = l.relatedTarget || l.toElement),
              (C = T),
              (Y = Y ? sa(Y) : null),
              Y !== null &&
                ((ge = m(Y)),
                ($ = Y.tag),
                Y !== ge || ($ !== 5 && $ !== 27 && $ !== 6)) &&
                (Y = null))
            : ((C = null), (Y = T)),
            C !== Y)
          ) {
            if (
              (($ = Xf),
              (M = 'onMouseLeave'),
              (x = 'onMouseEnter'),
              (y = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                (($ = Qf),
                (M = 'onPointerLeave'),
                (x = 'onPointerEnter'),
                (y = 'pointer')),
              (ge = C == null ? z : en(C)),
              (E = Y == null ? z : en(Y)),
              (z = new $(M, y + 'leave', C, l, R)),
              (z.target = ge),
              (z.relatedTarget = E),
              (M = null),
              sa(R) === T &&
                (($ = new $(x, y + 'enter', Y, l, R)),
                ($.target = E),
                ($.relatedTarget = ge),
                (M = $)),
              (ge = M),
              C && Y)
            )
              t: {
                for ($ = V0, x = C, y = Y, E = 0, M = x; M; M = $(M)) E++;
                M = 0;
                for (var V = y; V; V = $(V)) M++;
                for (; 0 < E - M; ) ((x = $(x)), E--);
                for (; 0 < M - E; ) ((y = $(y)), M--);
                for (; E--; ) {
                  if (x === y || (y !== null && x === y.alternate)) {
                    $ = x;
                    break t;
                  }
                  ((x = $(x)), (y = $(y)));
                }
                $ = null;
              }
            else $ = null;
            (C !== null && Hd(D, z, C, $, !1),
              Y !== null && ge !== null && Hd(D, ge, Y, $, !0));
          }
        }
        e: {
          if (
            ((z = T ? en(T) : window),
            (C = z.nodeName && z.nodeName.toLowerCase()),
            C === 'select' || (C === 'input' && z.type === 'file'))
          )
            var fe = Ff;
          else if (kf(z))
            if (If) fe = l0;
            else {
              fe = e0;
              var Q = Pm;
            }
          else
            ((C = z.nodeName),
              (
                !C ||
                C.toLowerCase() !== 'input' ||
                (z.type !== 'checkbox' && z.type !== 'radio')
              ) ?
                T && Qi(T.elementType) && (fe = Ff)
              : (fe = t0));
          if (fe && (fe = fe(e, T))) {
            Wf(D, fe, l, R);
            break e;
          }
          (Q && Q(e, z, T),
            e === 'focusout' &&
              T &&
              z.type === 'number' &&
              T.memoizedProps.value != null &&
              wi(z, 'number', z.value));
        }
        switch (((Q = T ? en(T) : window), e)) {
          case 'focusin':
            (kf(Q) || Q.contentEditable === 'true') &&
              ((ya = Q), (ac = T), (rn = null));
            break;
          case 'focusout':
            rn = ac = ya = null;
            break;
          case 'mousedown':
            nc = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((nc = !1), ir(D, l, R));
            break;
          case 'selectionchange':
            if (n0) break;
          case 'keydown':
          case 'keyup':
            ir(D, l, R);
        }
        var le;
        if (Pi)
          e: {
            switch (e) {
              case 'compositionstart':
                var ce = 'onCompositionStart';
                break e;
              case 'compositionend':
                ce = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                ce = 'onCompositionUpdate';
                break e;
            }
            ce = void 0;
          }
        else
          _a ?
            Jf(e, l) && (ce = 'onCompositionEnd')
          : e === 'keydown' && l.keyCode === 229 && (ce = 'onCompositionStart');
        (ce &&
          (Zf &&
            l.locale !== 'ko' &&
            (_a || ce !== 'onCompositionStart' ?
              ce === 'onCompositionEnd' && _a && (le = Yf())
            : ((hl = R),
              ($i = 'value' in hl ? hl.value : hl.textContent),
              (_a = !0))),
          (Q = ai(T, ce)),
          0 < Q.length &&
            ((ce = new wf(ce, e, null, l, R)),
            D.push({ event: ce, listeners: Q }),
            le ?
              (ce.data = le)
            : ((le = $f(l)), le !== null && (ce.data = le)))),
          (le = $m ? km(e, l) : Wm(e, l)) &&
            ((ce = ai(T, 'onBeforeInput')),
            0 < ce.length &&
              ((Q = new wf('onBeforeInput', 'beforeinput', null, l, R)),
              D.push({ event: Q, listeners: ce }),
              (Q.data = le))),
          X0(D, e, T, l, R));
      }
      Dd(D, t);
    });
  }
  function Hn(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function ai(e, t) {
    for (var l = t + 'Capture', a = []; e !== null; ) {
      var n = e,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = tn(e, l)),
          n != null && a.unshift(Hn(e, n, u)),
          (n = tn(e, t)),
          n != null && a.push(Hn(e, n, u))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function V0(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Hd(e, t, l, a, n) {
    for (var u = t._reactName, c = []; l !== null && l !== a; ) {
      var r = l,
        v = r.alternate,
        T = r.stateNode;
      if (((r = r.tag), v !== null && v === a)) break;
      ((r !== 5 && r !== 26 && r !== 27) ||
        T === null ||
        ((v = T),
        n ?
          ((T = tn(l, u)), T != null && c.unshift(Hn(l, T, v)))
        : n || ((T = tn(l, u)), T != null && c.push(Hn(l, T, v)))),
        (l = l.return));
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var K0 = /\r\n?/g,
    J0 = /\u0000|\uFFFD/g;
  function Bd(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        K0,
        `
`,
      )
      .replace(J0, '');
  }
  function Ld(e, t) {
    return ((t = Bd(t)), Bd(e) === t);
  }
  function ye(e, t, l, a, n, u) {
    switch (l) {
      case 'children':
        typeof a == 'string' ?
          t === 'body' || (t === 'textarea' && a === '') || ha(e, a)
        : (typeof a == 'number' || typeof a == 'bigint') &&
          t !== 'body' &&
          ha(e, '' + a);
        break;
      case 'className':
        cu(e, 'class', a);
        break;
      case 'tabIndex':
        cu(e, 'tabindex', a);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        cu(e, l, a);
        break;
      case 'style':
        Bf(e, a, u);
        break;
      case 'data':
        if (t !== 'object') {
          cu(e, 'data', a);
          break;
        }
      case 'src':
      case 'href':
        if (a === '' && (t !== 'a' || l !== 'href')) {
          e.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == 'function' ||
          typeof a == 'symbol' ||
          typeof a == 'boolean'
        ) {
          e.removeAttribute(l);
          break;
        }
        ((a = fu('' + a)), e.setAttribute(l, a));
        break;
      case 'action':
      case 'formAction':
        if (typeof a == 'function') {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == 'function' &&
            (l === 'formAction' ?
              (t !== 'input' && ye(e, t, 'name', n.name, n, null),
              ye(e, t, 'formEncType', n.formEncType, n, null),
              ye(e, t, 'formMethod', n.formMethod, n, null),
              ye(e, t, 'formTarget', n.formTarget, n, null))
            : (ye(e, t, 'encType', n.encType, n, null),
              ye(e, t, 'method', n.method, n, null),
              ye(e, t, 'target', n.target, n, null)));
        if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
          e.removeAttribute(l);
          break;
        }
        ((a = fu('' + a)), e.setAttribute(l, a));
        break;
      case 'onClick':
        a != null && (e.onclick = Vt);
        break;
      case 'onScroll':
        a != null && ue('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && ue('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(s(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(s(60));
            e.innerHTML = l;
          }
        }
        break;
      case 'multiple':
        e.multiple = a && typeof a != 'function' && typeof a != 'symbol';
        break;
      case 'muted':
        e.muted = a && typeof a != 'function' && typeof a != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (
          a == null ||
          typeof a == 'function' ||
          typeof a == 'boolean' ||
          typeof a == 'symbol'
        ) {
          e.removeAttribute('xlink:href');
          break;
        }
        ((l = fu('' + a)),
          e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l));
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        a != null && typeof a != 'function' && typeof a != 'symbol' ?
          e.setAttribute(l, '' + a)
        : e.removeAttribute(l);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        a && typeof a != 'function' && typeof a != 'symbol' ?
          e.setAttribute(l, '')
        : e.removeAttribute(l);
        break;
      case 'capture':
      case 'download':
        a === !0 ? e.setAttribute(l, '')
        : (
          a !== !1 &&
          a != null &&
          typeof a != 'function' &&
          typeof a != 'symbol'
        ) ?
          e.setAttribute(l, a)
        : e.removeAttribute(l);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        (
          a != null &&
          typeof a != 'function' &&
          typeof a != 'symbol' &&
          !isNaN(a) &&
          1 <= a
        ) ?
          e.setAttribute(l, a)
        : e.removeAttribute(l);
        break;
      case 'rowSpan':
      case 'start':
        (
          a == null ||
          typeof a == 'function' ||
          typeof a == 'symbol' ||
          isNaN(a)
        ) ?
          e.removeAttribute(l)
        : e.setAttribute(l, a);
        break;
      case 'popover':
        (ue('beforetoggle', e), ue('toggle', e), iu(e, 'popover', a));
        break;
      case 'xlinkActuate':
        Zt(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
        break;
      case 'xlinkArcrole':
        Zt(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
        break;
      case 'xlinkRole':
        Zt(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
        break;
      case 'xlinkShow':
        Zt(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
        break;
      case 'xlinkTitle':
        Zt(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
        break;
      case 'xlinkType':
        Zt(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
        break;
      case 'xmlBase':
        Zt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
        break;
      case 'xmlLang':
        Zt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
        break;
      case 'xmlSpace':
        Zt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
        break;
      case 'is':
        iu(e, 'is', a);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== 'o' && l[0] !== 'O') ||
          (l[1] !== 'n' && l[1] !== 'N')) &&
          ((l = Sm.get(l) || l), iu(e, l, a));
    }
  }
  function Cs(e, t, l, a, n, u) {
    switch (l) {
      case 'style':
        Bf(e, a, u);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(s(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(s(60));
            e.innerHTML = l;
          }
        }
        break;
      case 'children':
        typeof a == 'string' ?
          ha(e, a)
        : (typeof a == 'number' || typeof a == 'bigint') && ha(e, '' + a);
        break;
      case 'onScroll':
        a != null && ue('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && ue('scrollend', e);
        break;
      case 'onClick':
        a != null && (e.onclick = Vt);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!zf.hasOwnProperty(l))
          e: {
            if (
              l[0] === 'o' &&
              l[1] === 'n' &&
              ((n = l.endsWith('Capture')),
              (t = l.slice(2, n ? l.length - 7 : void 0)),
              (u = e[lt] || null),
              (u = u != null ? u[l] : null),
              typeof u == 'function' && e.removeEventListener(t, u, n),
              typeof a == 'function')
            ) {
              (typeof u != 'function' &&
                u !== null &&
                (l in e ?
                  (e[l] = null)
                : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, a, n));
              break e;
            }
            l in e ? (e[l] = a)
            : a === !0 ? e.setAttribute(l, '')
            : iu(e, l, a);
          }
    }
  }
  function We(e, t, l) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        (ue('error', e), ue('load', e));
        var a = !1,
          n = !1,
          u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var c = l[u];
            if (c != null)
              switch (u) {
                case 'src':
                  a = !0;
                  break;
                case 'srcSet':
                  n = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(s(137, t));
                default:
                  ye(e, t, u, c, l, null);
              }
          }
        (n && ye(e, t, 'srcSet', l.srcSet, l, null),
          a && ye(e, t, 'src', l.src, l, null));
        return;
      case 'input':
        ue('invalid', e);
        var r = (u = c = n = null),
          v = null,
          T = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var R = l[a];
            if (R != null)
              switch (a) {
                case 'name':
                  n = R;
                  break;
                case 'type':
                  c = R;
                  break;
                case 'checked':
                  v = R;
                  break;
                case 'defaultChecked':
                  T = R;
                  break;
                case 'value':
                  u = R;
                  break;
                case 'defaultValue':
                  r = R;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (R != null) throw Error(s(137, t));
                  break;
                default:
                  ye(e, t, a, R, l, null);
              }
          }
        Mf(e, u, r, v, T, c, n, !1);
        return;
      case 'select':
        (ue('invalid', e), (a = c = u = null));
        for (n in l)
          if (l.hasOwnProperty(n) && ((r = l[n]), r != null))
            switch (n) {
              case 'value':
                u = r;
                break;
              case 'defaultValue':
                c = r;
                break;
              case 'multiple':
                a = r;
              default:
                ye(e, t, n, r, l, null);
            }
        ((t = u),
          (l = c),
          (e.multiple = !!a),
          t != null ? da(e, !!a, t, !1) : l != null && da(e, !!a, l, !0));
        return;
      case 'textarea':
        (ue('invalid', e), (u = n = a = null));
        for (c in l)
          if (l.hasOwnProperty(c) && ((r = l[c]), r != null))
            switch (c) {
              case 'value':
                a = r;
                break;
              case 'defaultValue':
                n = r;
                break;
              case 'children':
                u = r;
                break;
              case 'dangerouslySetInnerHTML':
                if (r != null) throw Error(s(91));
                break;
              default:
                ye(e, t, c, r, l, null);
            }
        Uf(e, a, n, u);
        return;
      case 'option':
        for (v in l)
          l.hasOwnProperty(v) &&
            ((a = l[v]), a != null) &&
            (v === 'selected' ?
              (e.selected = a && typeof a != 'function' && typeof a != 'symbol')
            : ye(e, t, v, a, l, null));
        return;
      case 'dialog':
        (ue('beforetoggle', e),
          ue('toggle', e),
          ue('cancel', e),
          ue('close', e));
        break;
      case 'iframe':
      case 'object':
        ue('load', e);
        break;
      case 'video':
      case 'audio':
        for (a = 0; a < Un.length; a++) ue(Un[a], e);
        break;
      case 'image':
        (ue('error', e), ue('load', e));
        break;
      case 'details':
        ue('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (ue('error', e), ue('load', e));
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (T in l)
          if (l.hasOwnProperty(T) && ((a = l[T]), a != null))
            switch (T) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(s(137, t));
              default:
                ye(e, t, T, a, l, null);
            }
        return;
      default:
        if (Qi(t)) {
          for (R in l)
            l.hasOwnProperty(R) &&
              ((a = l[R]), a !== void 0 && Cs(e, t, R, a, l, void 0));
          return;
        }
    }
    for (r in l)
      l.hasOwnProperty(r) && ((a = l[r]), a != null && ye(e, t, r, a, l, null));
  }
  function $0(e, t, l, a) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var n = null,
          u = null,
          c = null,
          r = null,
          v = null,
          T = null,
          R = null;
        for (C in l) {
          var D = l[C];
          if (l.hasOwnProperty(C) && D != null)
            switch (C) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                v = D;
              default:
                a.hasOwnProperty(C) || ye(e, t, C, null, a, D);
            }
        }
        for (var z in a) {
          var C = a[z];
          if (((D = l[z]), a.hasOwnProperty(z) && (C != null || D != null)))
            switch (z) {
              case 'type':
                u = C;
                break;
              case 'name':
                n = C;
                break;
              case 'checked':
                T = C;
                break;
              case 'defaultChecked':
                R = C;
                break;
              case 'value':
                c = C;
                break;
              case 'defaultValue':
                r = C;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (C != null) throw Error(s(137, t));
                break;
              default:
                C !== D && ye(e, t, z, C, a, D);
            }
        }
        Xi(e, c, r, v, T, R, u, n);
        return;
      case 'select':
        C = c = r = z = null;
        for (u in l)
          if (((v = l[u]), l.hasOwnProperty(u) && v != null))
            switch (u) {
              case 'value':
                break;
              case 'multiple':
                C = v;
              default:
                a.hasOwnProperty(u) || ye(e, t, u, null, a, v);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (v = l[n]),
            a.hasOwnProperty(n) && (u != null || v != null))
          )
            switch (n) {
              case 'value':
                z = u;
                break;
              case 'defaultValue':
                r = u;
                break;
              case 'multiple':
                c = u;
              default:
                u !== v && ye(e, t, n, u, a, v);
            }
        ((t = r),
          (l = c),
          (a = C),
          z != null ?
            da(e, !!l, z, !1)
          : !!a != !!l &&
            (t != null ? da(e, !!l, t, !0) : da(e, !!l, l ? [] : '', !1)));
        return;
      case 'textarea':
        C = z = null;
        for (r in l)
          if (
            ((n = l[r]),
            l.hasOwnProperty(r) && n != null && !a.hasOwnProperty(r))
          )
            switch (r) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                ye(e, t, r, null, a, n);
            }
        for (c in a)
          if (
            ((n = a[c]),
            (u = l[c]),
            a.hasOwnProperty(c) && (n != null || u != null))
          )
            switch (c) {
              case 'value':
                z = n;
                break;
              case 'defaultValue':
                C = n;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (n != null) throw Error(s(91));
                break;
              default:
                n !== u && ye(e, t, c, n, a, u);
            }
        Df(e, z, C);
        return;
      case 'option':
        for (var Y in l)
          ((z = l[Y]),
            l.hasOwnProperty(Y) &&
              z != null &&
              !a.hasOwnProperty(Y) &&
              (Y === 'selected' ? (e.selected = !1) : ye(e, t, Y, null, a, z)));
        for (v in a)
          ((z = a[v]),
            (C = l[v]),
            a.hasOwnProperty(v) &&
              z !== C &&
              (z != null || C != null) &&
              (v === 'selected' ?
                (e.selected =
                  z && typeof z != 'function' && typeof z != 'symbol')
              : ye(e, t, v, z, a, C)));
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var $ in l)
          ((z = l[$]),
            l.hasOwnProperty($) &&
              z != null &&
              !a.hasOwnProperty($) &&
              ye(e, t, $, null, a, z));
        for (T in a)
          if (
            ((z = a[T]),
            (C = l[T]),
            a.hasOwnProperty(T) && z !== C && (z != null || C != null))
          )
            switch (T) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (z != null) throw Error(s(137, t));
                break;
              default:
                ye(e, t, T, z, a, C);
            }
        return;
      default:
        if (Qi(t)) {
          for (var ge in l)
            ((z = l[ge]),
              l.hasOwnProperty(ge) &&
                z !== void 0 &&
                !a.hasOwnProperty(ge) &&
                Cs(e, t, ge, void 0, a, z));
          for (R in a)
            ((z = a[R]),
              (C = l[R]),
              !a.hasOwnProperty(R) ||
                z === C ||
                (z === void 0 && C === void 0) ||
                Cs(e, t, R, z, a, C));
          return;
        }
    }
    for (var x in l)
      ((z = l[x]),
        l.hasOwnProperty(x) &&
          z != null &&
          !a.hasOwnProperty(x) &&
          ye(e, t, x, null, a, z));
    for (D in a)
      ((z = a[D]),
        (C = l[D]),
        !a.hasOwnProperty(D) ||
          z === C ||
          (z == null && C == null) ||
          ye(e, t, D, z, a, C));
  }
  function qd(e) {
    switch (e) {
      case 'css':
      case 'script':
      case 'font':
      case 'img':
      case 'image':
      case 'input':
      case 'link':
        return !0;
      default:
        return !1;
    }
  }
  function k0() {
    if (typeof performance.getEntriesByType == 'function') {
      for (
        var e = 0, t = 0, l = performance.getEntriesByType('resource'), a = 0;
        a < l.length;
        a++
      ) {
        var n = l[a],
          u = n.transferSize,
          c = n.initiatorType,
          r = n.duration;
        if (u && r && qd(c)) {
          for (c = 0, r = n.responseEnd, a += 1; a < l.length; a++) {
            var v = l[a],
              T = v.startTime;
            if (T > r) break;
            var R = v.transferSize,
              D = v.initiatorType;
            R &&
              qd(D) &&
              ((v = v.responseEnd), (c += R * (v < r ? 1 : (r - T) / (v - T))));
          }
          if ((--a, (t += (8 * (u + c)) / (n.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return (
        navigator.connection &&
          ((e = navigator.connection.downlink), typeof e == 'number')
      ) ?
        e
      : 5;
  }
  var Rs = null,
    Os = null;
  function ni(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Yd(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Gd(e, t) {
    if (e === 0)
      switch (t) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === 'foreignObject' ? 0 : e;
  }
  function Ms(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ds = null;
  function W0() {
    var e = window.event;
    return (
      e && e.type === 'popstate' ?
        e === Ds ?
          !1
        : ((Ds = e), !0)
      : ((Ds = null), !1)
    );
  }
  var Xd = typeof setTimeout == 'function' ? setTimeout : void 0,
    F0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    wd = typeof Promise == 'function' ? Promise : void 0,
    I0 =
      typeof queueMicrotask == 'function' ? queueMicrotask
      : typeof wd < 'u' ?
        function (e) {
          return wd.resolve(null).then(e).catch(P0);
        }
      : Xd;
  function P0(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Rl(e) {
    return e === 'head';
  }
  function Qd(e, t) {
    var l = t,
      a = 0;
    do {
      var n = l.nextSibling;
      if ((e.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === '/$' || l === '/&')) {
          if (a === 0) {
            (e.removeChild(n), Za(t));
            return;
          }
          a--;
        } else if (
          l === '$' ||
          l === '$?' ||
          l === '$~' ||
          l === '$!' ||
          l === '&'
        )
          a++;
        else if (l === 'html') Bn(e.ownerDocument.documentElement);
        else if (l === 'head') {
          ((l = e.ownerDocument.head), Bn(l));
          for (var u = l.firstChild; u; ) {
            var c = u.nextSibling,
              r = u.nodeName;
            (u[Pa] ||
              r === 'SCRIPT' ||
              r === 'STYLE' ||
              (r === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
              l.removeChild(u),
              (u = c));
          }
        } else l === 'body' && Bn(e.ownerDocument.body);
      l = n;
    } while (l);
    Za(t);
  }
  function Zd(e, t) {
    var l = e;
    e = 0;
    do {
      var a = l.nextSibling;
      if (
        (l.nodeType === 1 ?
          t ?
            ((l._stashedDisplay = l.style.display), (l.style.display = 'none'))
          : ((l.style.display = l._stashedDisplay || ''),
            l.getAttribute('style') === '' && l.removeAttribute('style'))
        : l.nodeType === 3 &&
          (t ?
            ((l._stashedText = l.nodeValue), (l.nodeValue = ''))
          : (l.nodeValue = l._stashedText || '')),
        a && a.nodeType === 8)
      )
        if (((l = a.data), l === '/$')) {
          if (e === 0) break;
          e--;
        } else (l !== '$' && l !== '$?' && l !== '$~' && l !== '$!') || e++;
      l = a;
    } while (l);
  }
  function Us(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (Us(l), Yi(l));
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (l.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(l);
    }
  }
  function ev(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (a) {
        if (!e[Pa])
          switch (t) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (
                ((u = e.getAttribute('rel')),
                u === 'stylesheet' && e.hasAttribute('data-precedence'))
              )
                break;
              if (
                u !== n.rel ||
                e.getAttribute('href') !==
                  (n.href == null || n.href === '' ? null : n.href) ||
                e.getAttribute('crossorigin') !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                e.getAttribute('title') !== (n.title == null ? null : n.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((u = e.getAttribute('src')),
                (u !== (n.src == null ? null : n.src) ||
                  e.getAttribute('type') !== (n.type == null ? null : n.type) ||
                  e.getAttribute('crossorigin') !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === 'input' && e.type === 'hidden') {
        var u = n.name == null ? null : '' + n.name;
        if (n.type === 'hidden' && e.getAttribute('name') === u) return e;
      } else return e;
      if (((e = At(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function tv(e, t, l) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !l) ||
        ((e = At(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Vd(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !t) ||
        ((e = At(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Hs(e) {
    return e.data === '$?' || e.data === '$~';
  }
  function Bs(e) {
    return (
      e.data === '$!' ||
      (e.data === '$?' && e.ownerDocument.readyState !== 'loading')
    );
  }
  function lv(e, t) {
    var l = e.ownerDocument;
    if (e.data === '$~') e._reactRetry = t;
    else if (e.data !== '$?' || l.readyState !== 'loading') t();
    else {
      var a = function () {
        (t(), l.removeEventListener('DOMContentLoaded', a));
      };
      (l.addEventListener('DOMContentLoaded', a), (e._reactRetry = a));
    }
  }
  function At(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === '$' ||
            t === '$!' ||
            t === '$?' ||
            t === '$~' ||
            t === '&' ||
            t === 'F!' ||
            t === 'F')
        )
          break;
        if (t === '/$' || t === '/&') return null;
      }
    }
    return e;
  }
  var Ls = null;
  function Kd(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === '/$' || l === '/&') {
          if (t === 0) return At(e.nextSibling);
          t--;
        } else
          (l !== '$' && l !== '$!' && l !== '$?' && l !== '$~' && l !== '&') ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Jd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === '$' || l === '$!' || l === '$?' || l === '$~' || l === '&') {
          if (t === 0) return e;
          t--;
        } else (l !== '/$' && l !== '/&') || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function $d(e, t, l) {
    switch (((t = ni(l)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(s(452));
        return e;
      case 'head':
        if (((e = t.head), !e)) throw Error(s(453));
        return e;
      case 'body':
        if (((e = t.body), !e)) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function Bn(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Yi(e);
  }
  var Ct = new Map(),
    kd = new Set();
  function ui(e) {
    return (
      typeof e.getRootNode == 'function' ? e.getRootNode()
      : e.nodeType === 9 ? e
      : e.ownerDocument
    );
  }
  var cl = B.d;
  B.d = { f: av, r: nv, D: uv, C: iv, L: cv, m: sv, X: rv, S: fv, M: ov };
  function av() {
    var e = cl.f(),
      t = Wu();
    return e || t;
  }
  function nv(e) {
    var t = fa(e);
    t !== null && t.tag === 5 && t.type === 'form' ? oo(t) : cl.r(e);
  }
  var Xa = typeof document > 'u' ? null : document;
  function Wd(e, t, l) {
    var a = Xa;
    if (a && typeof t == 'string' && t) {
      var n = St(t);
      ((n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof l == 'string' && (n += '[crossorigin="' + l + '"]'),
        kd.has(n) ||
          (kd.add(n),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement('link')),
            We(t, 'link', e),
            Qe(t),
            a.head.appendChild(t))));
    }
  }
  function uv(e) {
    (cl.D(e), Wd('dns-prefetch', e, null));
  }
  function iv(e, t) {
    (cl.C(e, t), Wd('preconnect', e, t));
  }
  function cv(e, t, l) {
    cl.L(e, t, l);
    var a = Xa;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + St(t) + '"]';
      t === 'image' && l && l.imageSrcSet ?
        ((n += '[imagesrcset="' + St(l.imageSrcSet) + '"]'),
        typeof l.imageSizes == 'string' &&
          (n += '[imagesizes="' + St(l.imageSizes) + '"]'))
      : (n += '[href="' + St(e) + '"]');
      var u = n;
      switch (t) {
        case 'style':
          u = wa(e);
          break;
        case 'script':
          u = Qa(e);
      }
      Ct.has(u) ||
        ((e = N(
          {
            rel: 'preload',
            href: t === 'image' && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l,
        )),
        Ct.set(u, e),
        a.querySelector(n) !== null ||
          (t === 'style' && a.querySelector(Ln(u))) ||
          (t === 'script' && a.querySelector(qn(u))) ||
          ((t = a.createElement('link')),
          We(t, 'link', e),
          Qe(t),
          a.head.appendChild(t)));
    }
  }
  function sv(e, t) {
    cl.m(e, t);
    var l = Xa;
    if (l && e) {
      var a = t && typeof t.as == 'string' ? t.as : 'script',
        n =
          'link[rel="modulepreload"][as="' + St(a) + '"][href="' + St(e) + '"]',
        u = n;
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = Qa(e);
      }
      if (
        !Ct.has(u) &&
        ((e = N({ rel: 'modulepreload', href: e }, t)),
        Ct.set(u, e),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (l.querySelector(qn(u))) return;
        }
        ((a = l.createElement('link')),
          We(a, 'link', e),
          Qe(a),
          l.head.appendChild(a));
      }
    }
  }
  function fv(e, t, l) {
    cl.S(e, t, l);
    var a = Xa;
    if (a && e) {
      var n = ra(a).hoistableStyles,
        u = wa(e);
      t = t || 'default';
      var c = n.get(u);
      if (!c) {
        var r = { loading: 0, preload: null };
        if ((c = a.querySelector(Ln(u)))) r.loading = 5;
        else {
          ((e = N({ 'rel': 'stylesheet', 'href': e, 'data-precedence': t }, l)),
            (l = Ct.get(u)) && qs(e, l));
          var v = (c = a.createElement('link'));
          (Qe(v),
            We(v, 'link', e),
            (v._p = new Promise(function (T, R) {
              ((v.onload = T), (v.onerror = R));
            })),
            v.addEventListener('load', function () {
              r.loading |= 1;
            }),
            v.addEventListener('error', function () {
              r.loading |= 2;
            }),
            (r.loading |= 4),
            ii(c, t, a));
        }
        ((c = { type: 'stylesheet', instance: c, count: 1, state: r }),
          n.set(u, c));
      }
    }
  }
  function rv(e, t) {
    cl.X(e, t);
    var l = Xa;
    if (l && e) {
      var a = ra(l).hoistableScripts,
        n = Qa(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(qn(n))),
        u ||
          ((e = N({ src: e, async: !0 }, t)),
          (t = Ct.get(n)) && Ys(e, t),
          (u = l.createElement('script')),
          Qe(u),
          We(u, 'link', e),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function ov(e, t) {
    cl.M(e, t);
    var l = Xa;
    if (l && e) {
      var a = ra(l).hoistableScripts,
        n = Qa(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(qn(n))),
        u ||
          ((e = N({ src: e, async: !0, type: 'module' }, t)),
          (t = Ct.get(n)) && Ys(e, t),
          (u = l.createElement('script')),
          Qe(u),
          We(u, 'link', e),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function Fd(e, t, l, a) {
    var n = (n = ae.current) ? ui(n) : null;
    if (!n) throw Error(s(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof l.precedence == 'string' && typeof l.href == 'string' ?
            ((t = wa(l.href)),
            (l = ra(n).hoistableStyles),
            (a = l.get(t)),
            a ||
              ((a = { type: 'style', instance: null, count: 0, state: null }),
              l.set(t, a)),
            a)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          l.rel === 'stylesheet' &&
          typeof l.href == 'string' &&
          typeof l.precedence == 'string'
        ) {
          e = wa(l.href);
          var u = ra(n).hoistableStyles,
            c = u.get(e);
          if (
            (c ||
              ((n = n.ownerDocument || n),
              (c = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, c),
              (u = n.querySelector(Ln(e))) &&
                !u._p &&
                ((c.instance = u), (c.state.loading = 5)),
              Ct.has(e) ||
                ((l = {
                  rel: 'preload',
                  as: 'style',
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Ct.set(e, l),
                u || dv(n, e, l, c.state))),
            t && a === null)
          )
            throw Error(s(528, ''));
          return c;
        }
        if (t && a !== null) throw Error(s(529, ''));
        return null;
      case 'script':
        return (
          (t = l.async),
          (l = l.src),
          (
            typeof l == 'string' &&
            t &&
            typeof t != 'function' &&
            typeof t != 'symbol'
          ) ?
            ((t = Qa(l)),
            (l = ra(n).hoistableScripts),
            (a = l.get(t)),
            a ||
              ((a = { type: 'script', instance: null, count: 0, state: null }),
              l.set(t, a)),
            a)
          : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, e));
    }
  }
  function wa(e) {
    return 'href="' + St(e) + '"';
  }
  function Ln(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function Id(e) {
    return N({}, e, { 'data-precedence': e.precedence, 'precedence': null });
  }
  function dv(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']') ?
      (a.loading = 1)
    : ((t = e.createElement('link')),
      (a.preload = t),
      t.addEventListener('load', function () {
        return (a.loading |= 1);
      }),
      t.addEventListener('error', function () {
        return (a.loading |= 2);
      }),
      We(t, 'link', l),
      Qe(t),
      e.head.appendChild(t));
  }
  function Qa(e) {
    return '[src="' + St(e) + '"]';
  }
  function qn(e) {
    return 'script[async]' + e;
  }
  function Pd(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var a = e.querySelector('style[data-href~="' + St(l.href) + '"]');
          if (a) return ((t.instance = a), Qe(a), a);
          var n = N({}, l, {
            'data-href': l.href,
            'data-precedence': l.precedence,
            'href': null,
            'precedence': null,
          });
          return (
            (a = (e.ownerDocument || e).createElement('style')),
            Qe(a),
            We(a, 'style', n),
            ii(a, l.precedence, e),
            (t.instance = a)
          );
        case 'stylesheet':
          n = wa(l.href);
          var u = e.querySelector(Ln(n));
          if (u) return ((t.state.loading |= 4), (t.instance = u), Qe(u), u);
          ((a = Id(l)),
            (n = Ct.get(n)) && qs(a, n),
            (u = (e.ownerDocument || e).createElement('link')),
            Qe(u));
          var c = u;
          return (
            (c._p = new Promise(function (r, v) {
              ((c.onload = r), (c.onerror = v));
            })),
            We(u, 'link', a),
            (t.state.loading |= 4),
            ii(u, l.precedence, e),
            (t.instance = u)
          );
        case 'script':
          return (
            (u = Qa(l.src)),
            (n = e.querySelector(qn(u))) ?
              ((t.instance = n), Qe(n), n)
            : ((a = l),
              (n = Ct.get(u)) && ((a = N({}, l)), Ys(a, n)),
              (e = e.ownerDocument || e),
              (n = e.createElement('script')),
              Qe(n),
              We(n, 'link', a),
              e.head.appendChild(n),
              (t.instance = n))
          );
        case 'void':
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), ii(a, l.precedence, e));
    return t.instance;
  }
  function ii(e, t, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        c = 0;
      c < a.length;
      c++
    ) {
      var r = a[c];
      if (r.dataset.precedence === t) u = r;
      else if (u !== n) break;
    }
    u ?
      u.parentNode.insertBefore(e, u.nextSibling)
    : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function qs(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Ys(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var ci = null;
  function eh(e, t, l) {
    if (ci === null) {
      var a = new Map(),
        n = (ci = new Map());
      n.set(l, a);
    } else ((n = ci), (a = n.get(l)), a || ((a = new Map()), n.set(l, a)));
    if (a.has(e)) return a;
    for (
      a.set(e, null), l = l.getElementsByTagName(e), n = 0;
      n < l.length;
      n++
    ) {
      var u = l[n];
      if (
        !(
          u[Pa] ||
          u[Ke] ||
          (e === 'link' && u.getAttribute('rel') === 'stylesheet')
        ) &&
        u.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var c = u.getAttribute(t) || '';
        c = e + c;
        var r = a.get(c);
        r ? r.push(u) : a.set(c, [u]);
      }
    }
    return a;
  }
  function th(e, t, l) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === 'title' ? e.querySelector('head > title') : null,
      ));
  }
  function hv(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (
          typeof t.precedence != 'string' ||
          typeof t.href != 'string' ||
          t.href === ''
        )
          break;
        return !0;
      case 'link':
        if (
          typeof t.rel != 'string' ||
          typeof t.href != 'string' ||
          t.href === '' ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === 'stylesheet' ?
            ((e = t.disabled), typeof t.precedence == 'string' && e == null)
          : !0;
      case 'script':
        if (
          t.async &&
          typeof t.async != 'function' &&
          typeof t.async != 'symbol' &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function lh(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  function mv(e, t, l, a) {
    if (
      l.type === 'stylesheet' &&
      (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var n = wa(a.href),
          u = t.querySelector(Ln(n));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (e.count++, (e = si.bind(e)), t.then(e, e)),
            (l.state.loading |= 4),
            (l.instance = u),
            Qe(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (a = Id(a)),
          (n = Ct.get(n)) && qs(a, n),
          (u = u.createElement('link')),
          Qe(u));
        var c = u;
        ((c._p = new Promise(function (r, v) {
          ((c.onload = r), (c.onerror = v));
        })),
          We(u, 'link', a),
          (l.instance = u));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (e.count++,
          (l = si.bind(e)),
          t.addEventListener('load', l),
          t.addEventListener('error', l)));
    }
  }
  var Gs = 0;
  function vv(e, t) {
    return (
      e.stylesheets && e.count === 0 && ri(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount ?
        function (l) {
          var a = setTimeout(function () {
            if ((e.stylesheets && ri(e, e.stylesheets), e.unsuspend)) {
              var u = e.unsuspend;
              ((e.unsuspend = null), u());
            }
          }, 6e4 + t);
          0 < e.imgBytes && Gs === 0 && (Gs = 62500 * k0());
          var n = setTimeout(
            function () {
              if (
                ((e.waitingForImages = !1),
                e.count === 0 &&
                  (e.stylesheets && ri(e, e.stylesheets), e.unsuspend))
              ) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            },
            (e.imgBytes > Gs ? 50 : 800) + t,
          );
          return (
            (e.unsuspend = l),
            function () {
              ((e.unsuspend = null), clearTimeout(a), clearTimeout(n));
            }
          );
        }
      : null
    );
  }
  function si() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) ri(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var fi = null;
  function ri(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (fi = new Map()),
        t.forEach(_v, e),
        (fi = null),
        si.call(e)));
  }
  function _v(e, t) {
    if (!(t.state.loading & 4)) {
      var l = fi.get(e);
      if (l) var a = l.get(null);
      else {
        ((l = new Map()), fi.set(e, l));
        for (
          var n = e.querySelectorAll(
              'link[data-precedence],style[data-precedence]',
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var c = n[u];
          (c.nodeName === 'LINK' || c.getAttribute('media') !== 'not all') &&
            (l.set(c.dataset.precedence, c), (a = c));
        }
        a && l.set(null, a);
      }
      ((n = t.instance),
        (c = n.getAttribute('data-precedence')),
        (u = l.get(c) || a),
        u === a && l.set(null, n),
        l.set(c, n),
        this.count++,
        (a = si.bind(this)),
        n.addEventListener('load', a),
        n.addEventListener('error', a),
        u ?
          u.parentNode.insertBefore(n, u.nextSibling)
        : ((e = e.nodeType === 9 ? e.head : e),
          e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Yn = {
    $$typeof: W,
    Provider: null,
    Consumer: null,
    _currentValue: F,
    _currentValue2: F,
    _threadCount: 0,
  };
  function yv(e, t, l, a, n, u, c, r, v) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Hi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Hi(0)),
      (this.hiddenUpdates = Hi(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = v),
      (this.incompleteTransitions = new Map()));
  }
  function ah(e, t, l, a, n, u, c, r, v, T, R, D) {
    return (
      (e = new yv(e, t, l, c, v, T, R, D, r)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = ht(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = pc()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: t }),
      Ec(u),
      e
    );
  }
  function nh(e) {
    return e ? ((e = ba), e) : ba;
  }
  function uh(e, t, l, a, n, u) {
    ((n = nh(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = pl(t)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = bl(e, a, t)),
      l !== null && (st(l, e, t), yn(l, e, t)));
  }
  function ih(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Xs(e, t) {
    (ih(e, t), (e = e.alternate) && ih(e, t));
  }
  function ch(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Zl(e, 67108864);
      (t !== null && st(t, e, 67108864), Xs(e, 67108864));
    }
  }
  function sh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = gt();
      t = Bi(t);
      var l = Zl(e, t);
      (l !== null && st(l, e, t), Xs(e, t));
    }
  }
  var oi = !0;
  function gv(e, t, l, a) {
    var n = O.T;
    O.T = null;
    var u = B.p;
    try {
      ((B.p = 2), ws(e, t, l, a));
    } finally {
      ((B.p = u), (O.T = n));
    }
  }
  function pv(e, t, l, a) {
    var n = O.T;
    O.T = null;
    var u = B.p;
    try {
      ((B.p = 8), ws(e, t, l, a));
    } finally {
      ((B.p = u), (O.T = n));
    }
  }
  function ws(e, t, l, a) {
    if (oi) {
      var n = Qs(a);
      if (n === null) (As(e, t, a, di, l), rh(e, a));
      else if (Sv(n, e, t, l, a)) a.stopPropagation();
      else if ((rh(e, a), t & 4 && -1 < bv.indexOf(e))) {
        for (; n !== null; ) {
          var u = fa(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var c = Yl(u.pendingLanes);
                  if (c !== 0) {
                    var r = u;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; c; ) {
                      var v = 1 << (31 - ot(c));
                      ((r.entanglements[1] |= v), (c &= ~v));
                    }
                    (Xt(u), (oe & 6) === 0 && (($u = ft() + 500), Dn(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((r = Zl(u, 2)), r !== null && st(r, u, 2), Wu(), Xs(u, 2));
            }
          if (((u = Qs(a)), u === null && As(e, t, a, di, l), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else As(e, t, a, null, l);
    }
  }
  function Qs(e) {
    return ((e = Vi(e)), Zs(e));
  }
  var di = null;
  function Zs(e) {
    if (((di = null), (e = sa(e)), e !== null)) {
      var t = m(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = g(t)), e !== null)) return e;
          e = null;
        } else if (l === 31) {
          if (((e = A(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((di = e), null);
  }
  function fh(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch (um()) {
          case _f:
            return 2;
          case yf:
            return 8;
          case tu:
          case im:
            return 32;
          case gf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Vs = !1,
    Ol = null,
    Ml = null,
    Dl = null,
    Gn = new Map(),
    Xn = new Map(),
    Ul = [],
    bv =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      );
  function rh(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Ol = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Ml = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Dl = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Gn.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Xn.delete(t.pointerId);
    }
  }
  function wn(e, t, l, a, n, u) {
    return e === null || e.nativeEvent !== u ?
        ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        t !== null && ((t = fa(t)), t !== null && ch(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function Sv(e, t, l, a, n) {
    switch (t) {
      case 'focusin':
        return ((Ol = wn(Ol, e, t, l, a, n)), !0);
      case 'dragenter':
        return ((Ml = wn(Ml, e, t, l, a, n)), !0);
      case 'mouseover':
        return ((Dl = wn(Dl, e, t, l, a, n)), !0);
      case 'pointerover':
        var u = n.pointerId;
        return (Gn.set(u, wn(Gn.get(u) || null, e, t, l, a, n)), !0);
      case 'gotpointercapture':
        return (
          (u = n.pointerId),
          Xn.set(u, wn(Xn.get(u) || null, e, t, l, a, n)),
          !0
        );
    }
    return !1;
  }
  function oh(e) {
    var t = sa(e.target);
    if (t !== null) {
      var l = m(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = g(l)), t !== null)) {
            ((e.blockedOn = t),
              jf(e.priority, function () {
                sh(l);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = A(l)), t !== null)) {
            ((e.blockedOn = t),
              jf(e.priority, function () {
                sh(l);
              }));
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function hi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Qs(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        ((Zi = a), l.target.dispatchEvent(a), (Zi = null));
      } else return ((t = fa(l)), t !== null && ch(t), (e.blockedOn = l), !1);
      t.shift();
    }
    return !0;
  }
  function dh(e, t, l) {
    hi(e) && l.delete(t);
  }
  function xv() {
    ((Vs = !1),
      Ol !== null && hi(Ol) && (Ol = null),
      Ml !== null && hi(Ml) && (Ml = null),
      Dl !== null && hi(Dl) && (Dl = null),
      Gn.forEach(dh),
      Xn.forEach(dh));
  }
  function mi(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Vs ||
        ((Vs = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, xv)));
  }
  var vi = null;
  function hh(e) {
    vi !== e &&
      ((vi = e),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        vi === e && (vi = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            n = e[t + 2];
          if (typeof a != 'function') {
            if (Zs(a || l) === null) continue;
            break;
          }
          var u = fa(l);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Qc(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function Za(e) {
    function t(v) {
      return mi(v, e);
    }
    (Ol !== null && mi(Ol, e),
      Ml !== null && mi(Ml, e),
      Dl !== null && mi(Dl, e),
      Gn.forEach(t),
      Xn.forEach(t));
    for (var l = 0; l < Ul.length; l++) {
      var a = Ul[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Ul.length && ((l = Ul[0]), l.blockedOn === null); )
      (oh(l), l.blockedOn === null && Ul.shift());
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          c = n[lt] || null;
        if (typeof u == 'function') c || hh(l);
        else if (c) {
          var r = null;
          if (u && u.hasAttribute('formAction')) {
            if (((n = u), (c = u[lt] || null))) r = c.formAction;
            else if (Zs(n) !== null) continue;
          } else r = c.action;
          (typeof r == 'function' ? (l[a + 1] = r) : (l.splice(a, 3), (a -= 3)),
            hh(l));
        }
      }
  }
  function mh() {
    function e(u) {
      u.canIntercept &&
        u.info === 'react-transition' &&
        u.intercept({
          handler: function () {
            return new Promise(function (c) {
              return (n = c);
            });
          },
          focusReset: 'manual',
          scroll: 'manual',
        });
    }
    function t() {
      (n !== null && (n(), (n = null)), a || setTimeout(l, 20));
    }
    function l() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: 'react-transition',
            history: 'replace',
          });
      }
    }
    if (typeof navigation == 'object') {
      var a = !1,
        n = null;
      return (
        navigation.addEventListener('navigate', e),
        navigation.addEventListener('navigatesuccess', t),
        navigation.addEventListener('navigateerror', t),
        setTimeout(l, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener('navigate', e),
            navigation.removeEventListener('navigatesuccess', t),
            navigation.removeEventListener('navigateerror', t),
            n !== null && (n(), (n = null)));
        }
      );
    }
  }
  function Ks(e) {
    this._internalRoot = e;
  }
  ((_i.prototype.render = Ks.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      var l = t.current,
        a = gt();
      uh(l, a, e, t, null, null);
    }),
    (_i.prototype.unmount = Ks.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (uh(e.current, 2, null, e, null, null), Wu(), (t[ca] = null));
        }
      }));
  function _i(e) {
    this._internalRoot = e;
  }
  _i.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ef();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Ul.length && t !== 0 && t < Ul[l].priority; l++);
      (Ul.splice(l, 0, e), l === 0 && oh(e));
    }
  };
  var vh = o.version;
  if (vh !== '19.2.4') throw Error(s(527, vh, '19.2.4'));
  B.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function' ?
          Error(s(188))
        : ((e = Object.keys(e).join(',')), Error(s(268, e)));
    return (
      (e = _(t)),
      (e = e !== null ? S(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Ev = {
    bundleType: 0,
    version: '19.2.4',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: O,
    reconcilerVersion: '19.2.4',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var yi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!yi.isDisabled && yi.supportsFiber)
      try {
        ((Wa = yi.inject(Ev)), (rt = yi));
      } catch {}
  }
  return (
    (Zn.createRoot = function (e, t) {
      if (!h(e)) throw Error(s(299));
      var l = !1,
        a = '',
        n = xo,
        u = Eo,
        c = jo;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = ah(e, 1, !1, null, null, l, a, null, n, u, c, mh)),
        (e[ca] = t.current),
        zs(e),
        new Ks(t)
      );
    }),
    (Zn.hydrateRoot = function (e, t, l) {
      if (!h(e)) throw Error(s(299));
      var a = !1,
        n = '',
        u = xo,
        c = Eo,
        r = jo,
        v = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (c = l.onCaughtError),
          l.onRecoverableError !== void 0 && (r = l.onRecoverableError),
          l.formState !== void 0 && (v = l.formState)),
        (t = ah(e, 1, !0, t, l ?? null, a, n, v, u, c, r, mh)),
        (t.context = nh(null)),
        (l = t.current),
        (a = gt()),
        (a = Bi(a)),
        (n = pl(a)),
        (n.callback = null),
        bl(l, n, a),
        (l = a),
        (t.current.lanes = l),
        Ia(t, l),
        Xt(t),
        (e[ca] = t.current),
        zs(e),
        new _i(t)
      );
    }),
    (Zn.version = '19.2.4'),
    Zn
  );
}
var Nh;
function Dv() {
  if (Nh) return $s.exports;
  Nh = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (o) {
        console.error(o);
      }
  }
  return (i(), ($s.exports = Mv()), $s.exports);
}
var Uv = Dv(),
  j = uf();
var Th = 'popstate';
function Hv(i = {}) {
  function o(h, m) {
    let {
      pathname: g = '/',
      search: A = '',
      hash: b = '',
    } = ia(h.location.hash.substring(1));
    return (
      !g.startsWith('/') && !g.startsWith('.') && (g = '/' + g),
      af(
        '',
        { pathname: g, search: A, hash: b },
        (m.state && m.state.usr) || null,
        (m.state && m.state.key) || 'default',
      )
    );
  }
  function d(h, m) {
    let g = h.document.querySelector('base'),
      A = '';
    if (g && g.getAttribute('href')) {
      let b = h.location.href,
        _ = b.indexOf('#');
      A = _ === -1 ? b : b.slice(0, _);
    }
    return A + '#' + (typeof m == 'string' ? m : $n(m));
  }
  function s(h, m) {
    Bt(
      h.pathname.charAt(0) === '/',
      `relative pathnames are not supported in hash history.push(${JSON.stringify(m)})`,
    );
  }
  return Lv(o, d, s, i);
}
function Te(i, o) {
  if (i === !1 || i === null || typeof i > 'u') throw new Error(o);
}
function Bt(i, o) {
  if (!i) {
    typeof console < 'u' && console.warn(o);
    try {
      throw new Error(o);
    } catch {}
  }
}
function Bv() {
  return Math.random().toString(36).substring(2, 10);
}
function zh(i, o) {
  return { usr: i.state, key: i.key, idx: o };
}
function af(i, o, d = null, s) {
  return {
    pathname: typeof i == 'string' ? i : i.pathname,
    search: '',
    hash: '',
    ...(typeof o == 'string' ? ia(o) : o),
    state: d,
    key: (o && o.key) || s || Bv(),
  };
}
function $n({ pathname: i = '/', search: o = '', hash: d = '' }) {
  return (
    o && o !== '?' && (i += o.charAt(0) === '?' ? o : '?' + o),
    d && d !== '#' && (i += d.charAt(0) === '#' ? d : '#' + d),
    i
  );
}
function ia(i) {
  let o = {};
  if (i) {
    let d = i.indexOf('#');
    d >= 0 && ((o.hash = i.substring(d)), (i = i.substring(0, d)));
    let s = i.indexOf('?');
    (s >= 0 && ((o.search = i.substring(s)), (i = i.substring(0, s))),
      i && (o.pathname = i));
  }
  return o;
}
function Lv(i, o, d, s = {}) {
  let { window: h = document.defaultView, v5Compat: m = !1 } = s,
    g = h.history,
    A = 'POP',
    b = null,
    _ = S();
  _ == null && ((_ = 0), g.replaceState({ ...g.state, idx: _ }, ''));
  function S() {
    return (g.state || { idx: null }).idx;
  }
  function N() {
    A = 'POP';
    let G = S(),
      J = G == null ? null : G - _;
    ((_ = G), b && b({ action: A, location: Z.location, delta: J }));
  }
  function H(G, J) {
    A = 'PUSH';
    let X = af(Z.location, G, J);
    (d && d(X, G), (_ = S() + 1));
    let W = zh(X, _),
      xe = Z.createHref(X);
    try {
      g.pushState(W, '', xe);
    } catch (Se) {
      if (Se instanceof DOMException && Se.name === 'DataCloneError') throw Se;
      h.location.assign(xe);
    }
    m && b && b({ action: A, location: Z.location, delta: 1 });
  }
  function q(G, J) {
    A = 'REPLACE';
    let X = af(Z.location, G, J);
    (d && d(X, G), (_ = S()));
    let W = zh(X, _),
      xe = Z.createHref(X);
    (g.replaceState(W, '', xe),
      m && b && b({ action: A, location: Z.location, delta: 0 }));
  }
  function k(G) {
    return qv(G);
  }
  let Z = {
    get action() {
      return A;
    },
    get location() {
      return i(h, g);
    },
    listen(G) {
      if (b) throw new Error('A history only accepts one active listener');
      return (
        h.addEventListener(Th, N),
        (b = G),
        () => {
          (h.removeEventListener(Th, N), (b = null));
        }
      );
    },
    createHref(G) {
      return o(h, G);
    },
    createURL: k,
    encodeLocation(G) {
      let J = k(G);
      return { pathname: J.pathname, search: J.search, hash: J.hash };
    },
    push: H,
    replace: q,
    go(G) {
      return g.go(G);
    },
  };
  return Z;
}
function qv(i, o = !1) {
  let d = 'http://localhost';
  (typeof window < 'u' &&
    (d =
      window.location.origin !== 'null' ?
        window.location.origin
      : window.location.href),
    Te(d, 'No window.location.(origin|href) available to create URL'));
  let s = typeof i == 'string' ? i : $n(i);
  return (
    (s = s.replace(/ $/, '%20')),
    !o && s.startsWith('//') && (s = d + s),
    new URL(s, d)
  );
}
function Mh(i, o, d = '/') {
  return Yv(i, o, d, !1);
}
function Yv(i, o, d, s) {
  let h = typeof o == 'string' ? ia(o) : o,
    m = rl(h.pathname || '/', d);
  if (m == null) return null;
  let g = Dh(i);
  Gv(g);
  let A = null;
  for (let b = 0; A == null && b < g.length; ++b) {
    let _ = Fv(m);
    A = kv(g[b], _, s);
  }
  return A;
}
function Dh(i, o = [], d = [], s = '', h = !1) {
  let m = (g, A, b = h, _) => {
    let S = {
      relativePath: _ === void 0 ? g.path || '' : _,
      caseSensitive: g.caseSensitive === !0,
      childrenIndex: A,
      route: g,
    };
    if (S.relativePath.startsWith('/')) {
      if (!S.relativePath.startsWith(s) && b) return;
      (Te(
        S.relativePath.startsWith(s),
        `Absolute route path "${S.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (S.relativePath = S.relativePath.slice(s.length)));
    }
    let N = fl([s, S.relativePath]),
      H = d.concat(S);
    (g.children &&
      g.children.length > 0 &&
      (Te(
        g.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${N}".`,
      ),
      Dh(g.children, o, H, N, b)),
      !(g.path == null && !g.index) &&
        o.push({ path: N, score: Jv(N, g.index), routesMeta: H }));
  };
  return (
    i.forEach((g, A) => {
      if (g.path === '' || !g.path?.includes('?')) m(g, A);
      else for (let b of Uh(g.path)) m(g, A, !0, b);
    }),
    o
  );
}
function Uh(i) {
  let o = i.split('/');
  if (o.length === 0) return [];
  let [d, ...s] = o,
    h = d.endsWith('?'),
    m = d.replace(/\?$/, '');
  if (s.length === 0) return h ? [m, ''] : [m];
  let g = Uh(s.join('/')),
    A = [];
  return (
    A.push(...g.map((b) => (b === '' ? m : [m, b].join('/')))),
    h && A.push(...g),
    A.map((b) => (i.startsWith('/') && b === '' ? '/' : b))
  );
}
function Gv(i) {
  i.sort((o, d) =>
    o.score !== d.score ?
      d.score - o.score
    : $v(
        o.routesMeta.map((s) => s.childrenIndex),
        d.routesMeta.map((s) => s.childrenIndex),
      ),
  );
}
var Xv = /^:[\w-]+$/,
  wv = 3,
  Qv = 2,
  Zv = 1,
  Vv = 10,
  Kv = -2,
  Ah = (i) => i === '*';
function Jv(i, o) {
  let d = i.split('/'),
    s = d.length;
  return (
    d.some(Ah) && (s += Kv),
    o && (s += Qv),
    d
      .filter((h) => !Ah(h))
      .reduce(
        (h, m) =>
          h +
          (Xv.test(m) ? wv
          : m === '' ? Zv
          : Vv),
        s,
      )
  );
}
function $v(i, o) {
  return i.length === o.length && i.slice(0, -1).every((s, h) => s === o[h]) ?
      i[i.length - 1] - o[o.length - 1]
    : 0;
}
function kv(i, o, d = !1) {
  let { routesMeta: s } = i,
    h = {},
    m = '/',
    g = [];
  for (let A = 0; A < s.length; ++A) {
    let b = s[A],
      _ = A === s.length - 1,
      S = m === '/' ? o : o.slice(m.length) || '/',
      N = xi(
        { path: b.relativePath, caseSensitive: b.caseSensitive, end: _ },
        S,
      ),
      H = b.route;
    if (
      (!N &&
        _ &&
        d &&
        !s[s.length - 1].route.index &&
        (N = xi(
          { path: b.relativePath, caseSensitive: b.caseSensitive, end: !1 },
          S,
        )),
      !N)
    )
      return null;
    (Object.assign(h, N.params),
      g.push({
        params: h,
        pathname: fl([m, N.pathname]),
        pathnameBase: t1(fl([m, N.pathnameBase])),
        route: H,
      }),
      N.pathnameBase !== '/' && (m = fl([m, N.pathnameBase])));
  }
  return g;
}
function xi(i, o) {
  typeof i == 'string' && (i = { path: i, caseSensitive: !1, end: !0 });
  let [d, s] = Wv(i.path, i.caseSensitive, i.end),
    h = o.match(d);
  if (!h) return null;
  let m = h[0],
    g = m.replace(/(.)\/+$/, '$1'),
    A = h.slice(1);
  return {
    params: s.reduce((_, { paramName: S, isOptional: N }, H) => {
      if (S === '*') {
        let k = A[H] || '';
        g = m.slice(0, m.length - k.length).replace(/(.)\/+$/, '$1');
      }
      const q = A[H];
      return (
        N && !q ? (_[S] = void 0) : (_[S] = (q || '').replace(/%2F/g, '/')),
        _
      );
    }, {}),
    pathname: m,
    pathnameBase: g,
    pattern: i,
  };
}
function Wv(i, o = !1, d = !0) {
  Bt(
    i === '*' || !i.endsWith('*') || i.endsWith('/*'),
    `Route path "${i}" will be treated as if it were "${i.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/, '/*')}".`,
  );
  let s = [],
    h =
      '^' +
      i
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (g, A, b) => (
            s.push({ paramName: A, isOptional: b != null }),
            b ? '/?([^\\/]+)?' : '/([^\\/]+)'
          ),
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2');
  return (
    i.endsWith('*') ?
      (s.push({ paramName: '*' }),
      (h += i === '*' || i === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
    : d ? (h += '\\/*$')
    : i !== '' && i !== '/' && (h += '(?:(?=\\/|$))'),
    [new RegExp(h, o ? void 0 : 'i'), s]
  );
}
function Fv(i) {
  try {
    return i
      .split('/')
      .map((o) => decodeURIComponent(o).replace(/\//g, '%2F'))
      .join('/');
  } catch (o) {
    return (
      Bt(
        !1,
        `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`,
      ),
      i
    );
  }
}
function rl(i, o) {
  if (o === '/') return i;
  if (!i.toLowerCase().startsWith(o.toLowerCase())) return null;
  let d = o.endsWith('/') ? o.length - 1 : o.length,
    s = i.charAt(d);
  return s && s !== '/' ? null : i.slice(d) || '/';
}
var Iv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Pv(i, o = '/') {
  let {
      pathname: d,
      search: s = '',
      hash: h = '',
    } = typeof i == 'string' ? ia(i) : i,
    m;
  return (
    d ?
      ((d = d.replace(/\/\/+/g, '/')),
      d.startsWith('/') ? (m = Ch(d.substring(1), '/')) : (m = Ch(d, o)))
    : (m = o),
    { pathname: m, search: l1(s), hash: a1(h) }
  );
}
function Ch(i, o) {
  let d = o.replace(/\/+$/, '').split('/');
  return (
    i.split('/').forEach((h) => {
      h === '..' ? d.length > 1 && d.pop() : h !== '.' && d.push(h);
    }),
    d.length > 1 ? d.join('/') : '/'
  );
}
function Ps(i, o, d, s) {
  return `Cannot include a '${i}' character in a manually specified \`to.${o}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function e1(i) {
  return i.filter(
    (o, d) => d === 0 || (o.route.path && o.route.path.length > 0),
  );
}
function Hh(i) {
  let o = e1(i);
  return o.map((d, s) => (s === o.length - 1 ? d.pathname : d.pathnameBase));
}
function Bh(i, o, d, s = !1) {
  let h;
  typeof i == 'string' ?
    (h = ia(i))
  : ((h = { ...i }),
    Te(
      !h.pathname || !h.pathname.includes('?'),
      Ps('?', 'pathname', 'search', h),
    ),
    Te(
      !h.pathname || !h.pathname.includes('#'),
      Ps('#', 'pathname', 'hash', h),
    ),
    Te(!h.search || !h.search.includes('#'), Ps('#', 'search', 'hash', h)));
  let m = i === '' || h.pathname === '',
    g = m ? '/' : h.pathname,
    A;
  if (g == null) A = d;
  else {
    let N = o.length - 1;
    if (!s && g.startsWith('..')) {
      let H = g.split('/');
      for (; H[0] === '..'; ) (H.shift(), (N -= 1));
      h.pathname = H.join('/');
    }
    A = N >= 0 ? o[N] : '/';
  }
  let b = Pv(h, A),
    _ = g && g !== '/' && g.endsWith('/'),
    S = (m || g === '.') && d.endsWith('/');
  return (!b.pathname.endsWith('/') && (_ || S) && (b.pathname += '/'), b);
}
var fl = (i) => i.join('/').replace(/\/\/+/g, '/'),
  t1 = (i) => i.replace(/\/+$/, '').replace(/^\/*/, '/'),
  l1 = (i) =>
    !i || i === '?' ? ''
    : i.startsWith('?') ? i
    : '?' + i,
  a1 = (i) =>
    !i || i === '#' ? ''
    : i.startsWith('#') ? i
    : '#' + i,
  n1 = class {
    constructor(i, o, d, s = !1) {
      ((this.status = i),
        (this.statusText = o || ''),
        (this.internal = s),
        d instanceof Error ?
          ((this.data = d.toString()), (this.error = d))
        : (this.data = d));
    }
  };
function u1(i) {
  return (
    i != null &&
    typeof i.status == 'number' &&
    typeof i.statusText == 'string' &&
    typeof i.internal == 'boolean' &&
    'data' in i
  );
}
function i1(i) {
  return (
    i
      .map((o) => o.route.path)
      .filter(Boolean)
      .join('/')
      .replace(/\/\/*/g, '/') || '/'
  );
}
var Lh =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
function qh(i, o) {
  let d = i;
  if (typeof d != 'string' || !Iv.test(d))
    return { absoluteURL: void 0, isExternal: !1, to: d };
  let s = d,
    h = !1;
  if (Lh)
    try {
      let m = new URL(window.location.href),
        g = d.startsWith('//') ? new URL(m.protocol + d) : new URL(d),
        A = rl(g.pathname, o);
      g.origin === m.origin && A != null ?
        (d = A + g.search + g.hash)
      : (h = !0);
    } catch {
      Bt(
        !1,
        `<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: s, isExternal: h, to: d };
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var Yh = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(Yh);
var c1 = ['GET', ...Yh];
new Set(c1);
var $a = j.createContext(null);
$a.displayName = 'DataRouter';
var Ei = j.createContext(null);
Ei.displayName = 'DataRouterState';
var s1 = j.createContext(!1),
  Gh = j.createContext({ isTransitioning: !1 });
Gh.displayName = 'ViewTransition';
var f1 = j.createContext(new Map());
f1.displayName = 'Fetchers';
var r1 = j.createContext(null);
r1.displayName = 'Await';
var Ot = j.createContext(null);
Ot.displayName = 'Navigation';
var kn = j.createContext(null);
kn.displayName = 'Location';
var wt = j.createContext({ outlet: null, matches: [], isDataRoute: !1 });
wt.displayName = 'Route';
var cf = j.createContext(null);
cf.displayName = 'RouteError';
var Xh = 'REACT_ROUTER_ERROR',
  o1 = 'REDIRECT',
  d1 = 'ROUTE_ERROR_RESPONSE';
function h1(i) {
  if (i.startsWith(`${Xh}:${o1}:{`))
    try {
      let o = JSON.parse(i.slice(28));
      if (
        typeof o == 'object' &&
        o &&
        typeof o.status == 'number' &&
        typeof o.statusText == 'string' &&
        typeof o.location == 'string' &&
        typeof o.reloadDocument == 'boolean' &&
        typeof o.replace == 'boolean'
      )
        return o;
    } catch {}
}
function m1(i) {
  if (i.startsWith(`${Xh}:${d1}:{`))
    try {
      let o = JSON.parse(i.slice(40));
      if (
        typeof o == 'object' &&
        o &&
        typeof o.status == 'number' &&
        typeof o.statusText == 'string'
      )
        return new n1(o.status, o.statusText, o.data);
    } catch {}
}
function v1(i, { relative: o } = {}) {
  Te(
    Wn(),
    'useHref() may be used only in the context of a <Router> component.',
  );
  let { basename: d, navigator: s } = j.useContext(Ot),
    { hash: h, pathname: m, search: g } = Fn(i, { relative: o }),
    A = m;
  return (
    d !== '/' && (A = m === '/' ? d : fl([d, m])),
    s.createHref({ pathname: A, search: g, hash: h })
  );
}
function Wn() {
  return j.useContext(kn) != null;
}
function Bl() {
  return (
    Te(
      Wn(),
      'useLocation() may be used only in the context of a <Router> component.',
    ),
    j.useContext(kn).location
  );
}
var wh =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Qh(i) {
  j.useContext(Ot).static || j.useLayoutEffect(i);
}
function sf() {
  let { isDataRoute: i } = j.useContext(wt);
  return i ? A1() : _1();
}
function _1() {
  Te(
    Wn(),
    'useNavigate() may be used only in the context of a <Router> component.',
  );
  let i = j.useContext($a),
    { basename: o, navigator: d } = j.useContext(Ot),
    { matches: s } = j.useContext(wt),
    { pathname: h } = Bl(),
    m = JSON.stringify(Hh(s)),
    g = j.useRef(!1);
  return (
    Qh(() => {
      g.current = !0;
    }),
    j.useCallback(
      (b, _ = {}) => {
        if ((Bt(g.current, wh), !g.current)) return;
        if (typeof b == 'number') {
          d.go(b);
          return;
        }
        let S = Bh(b, JSON.parse(m), h, _.relative === 'path');
        (i == null &&
          o !== '/' &&
          (S.pathname = S.pathname === '/' ? o : fl([o, S.pathname])),
          (_.replace ? d.replace : d.push)(S, _.state, _));
      },
      [o, d, m, h, i],
    )
  );
}
j.createContext(null);
function ff() {
  let { matches: i } = j.useContext(wt),
    o = i[i.length - 1];
  return o ? o.params : {};
}
function Fn(i, { relative: o } = {}) {
  let { matches: d } = j.useContext(wt),
    { pathname: s } = Bl(),
    h = JSON.stringify(Hh(d));
  return j.useMemo(() => Bh(i, JSON.parse(h), s, o === 'path'), [i, h, s, o]);
}
function y1(i, o) {
  return Zh(i, o);
}
function Zh(i, o, d, s, h) {
  Te(
    Wn(),
    'useRoutes() may be used only in the context of a <Router> component.',
  );
  let { navigator: m } = j.useContext(Ot),
    { matches: g } = j.useContext(wt),
    A = g[g.length - 1],
    b = A ? A.params : {},
    _ = A ? A.pathname : '/',
    S = A ? A.pathnameBase : '/',
    N = A && A.route;
  {
    let X = (N && N.path) || '';
    Kh(
      _,
      !N || X.endsWith('*') || X.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${_}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X === '/' ? '*' : `${X}/*`}">.`,
    );
  }
  let H = Bl(),
    q;
  if (o) {
    let X = typeof o == 'string' ? ia(o) : o;
    (Te(
      S === '/' || X.pathname?.startsWith(S),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${X.pathname}" was given in the \`location\` prop.`,
    ),
      (q = X));
  } else q = H;
  let k = q.pathname || '/',
    Z = k;
  if (S !== '/') {
    let X = S.replace(/^\//, '').split('/');
    Z = '/' + k.replace(/^\//, '').split('/').slice(X.length).join('/');
  }
  let G = Mh(i, { pathname: Z });
  (Bt(
    N || G != null,
    `No routes matched location "${q.pathname}${q.search}${q.hash}" `,
  ),
    Bt(
      G == null ||
        G[G.length - 1].route.element !== void 0 ||
        G[G.length - 1].route.Component !== void 0 ||
        G[G.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let J = x1(
    G &&
      G.map((X) =>
        Object.assign({}, X, {
          params: Object.assign({}, b, X.params),
          pathname: fl([
            S,
            m.encodeLocation ?
              m.encodeLocation(
                X.pathname.replace(/\?/g, '%3F').replace(/#/g, '%23'),
              ).pathname
            : X.pathname,
          ]),
          pathnameBase:
            X.pathnameBase === '/' ?
              S
            : fl([
                S,
                m.encodeLocation ?
                  m.encodeLocation(
                    X.pathnameBase.replace(/\?/g, '%3F').replace(/#/g, '%23'),
                  ).pathname
                : X.pathnameBase,
              ]),
        }),
      ),
    g,
    d,
    s,
    h,
  );
  return o && J ?
      j.createElement(
        kn.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              ...q,
            },
            navigationType: 'POP',
          },
        },
        J,
      )
    : J;
}
function g1() {
  let i = z1(),
    o =
      u1(i) ? `${i.status} ${i.statusText}`
      : i instanceof Error ? i.message
      : JSON.stringify(i),
    d = i instanceof Error ? i.stack : null,
    s = 'rgba(200,200,200, 0.5)',
    h = { padding: '0.5rem', backgroundColor: s },
    m = { padding: '2px 4px', backgroundColor: s },
    g = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', i),
    (g = j.createElement(
      j.Fragment,
      null,
      j.createElement('p', null, '💿 Hey developer 👋'),
      j.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        j.createElement('code', { style: m }, 'ErrorBoundary'),
        ' or',
        ' ',
        j.createElement('code', { style: m }, 'errorElement'),
        ' prop on your route.',
      ),
    )),
    j.createElement(
      j.Fragment,
      null,
      j.createElement('h2', null, 'Unexpected Application Error!'),
      j.createElement('h3', { style: { fontStyle: 'italic' } }, o),
      d ? j.createElement('pre', { style: h }, d) : null,
      g,
    )
  );
}
var p1 = j.createElement(g1, null),
  Vh = class extends j.Component {
    constructor(i) {
      (super(i),
        (this.state = {
          location: i.location,
          revalidation: i.revalidation,
          error: i.error,
        }));
    }
    static getDerivedStateFromError(i) {
      return { error: i };
    }
    static getDerivedStateFromProps(i, o) {
      return (
          o.location !== i.location ||
            (o.revalidation !== 'idle' && i.revalidation === 'idle')
        ) ?
          { error: i.error, location: i.location, revalidation: i.revalidation }
        : {
            error: i.error !== void 0 ? i.error : o.error,
            location: o.location,
            revalidation: i.revalidation || o.revalidation,
          };
    }
    componentDidCatch(i, o) {
      this.props.onError ?
        this.props.onError(i, o)
      : console.error(
          'React Router caught the following error during render',
          i,
        );
    }
    render() {
      let i = this.state.error;
      if (
        this.context &&
        typeof i == 'object' &&
        i &&
        'digest' in i &&
        typeof i.digest == 'string'
      ) {
        const d = m1(i.digest);
        d && (i = d);
      }
      let o =
        i !== void 0 ?
          j.createElement(
            wt.Provider,
            { value: this.props.routeContext },
            j.createElement(cf.Provider, {
              value: i,
              children: this.props.component,
            }),
          )
        : this.props.children;
      return this.context ? j.createElement(b1, { error: i }, o) : o;
    }
  };
Vh.contextType = s1;
var ef = new WeakMap();
function b1({ children: i, error: o }) {
  let { basename: d } = j.useContext(Ot);
  if (
    typeof o == 'object' &&
    o &&
    'digest' in o &&
    typeof o.digest == 'string'
  ) {
    let s = h1(o.digest);
    if (s) {
      let h = ef.get(o);
      if (h) throw h;
      let m = qh(s.location, d);
      if (Lh && !ef.get(o))
        if (m.isExternal || s.reloadDocument)
          window.location.href = m.absoluteURL || m.to;
        else {
          const g = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(m.to, {
              replace: s.replace,
            }),
          );
          throw (ef.set(o, g), g);
        }
      return j.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${m.absoluteURL || m.to}`,
      });
    }
  }
  return i;
}
function S1({ routeContext: i, match: o, children: d }) {
  let s = j.useContext($a);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = o.route.id),
    j.createElement(wt.Provider, { value: i }, d)
  );
}
function x1(i, o = [], d = null, s = null, h = null) {
  if (i == null) {
    if (!d) return null;
    if (d.errors) i = d.matches;
    else if (o.length === 0 && !d.initialized && d.matches.length > 0)
      i = d.matches;
    else return null;
  }
  let m = i,
    g = d?.errors;
  if (g != null) {
    let S = m.findIndex((N) => N.route.id && g?.[N.route.id] !== void 0);
    (Te(
      S >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(g).join(',')}`,
    ),
      (m = m.slice(0, Math.min(m.length, S + 1))));
  }
  let A = !1,
    b = -1;
  if (d)
    for (let S = 0; S < m.length; S++) {
      let N = m[S];
      if (
        ((N.route.HydrateFallback || N.route.hydrateFallbackElement) && (b = S),
        N.route.id)
      ) {
        let { loaderData: H, errors: q } = d,
          k =
            N.route.loader &&
            !H.hasOwnProperty(N.route.id) &&
            (!q || q[N.route.id] === void 0);
        if (N.route.lazy || k) {
          ((A = !0), b >= 0 ? (m = m.slice(0, b + 1)) : (m = [m[0]]));
          break;
        }
      }
    }
  let _ =
    d && s ?
      (S, N) => {
        s(S, {
          location: d.location,
          params: d.matches?.[0]?.params ?? {},
          unstable_pattern: i1(d.matches),
          errorInfo: N,
        });
      }
    : void 0;
  return m.reduceRight((S, N, H) => {
    let q,
      k = !1,
      Z = null,
      G = null;
    d &&
      ((q = g && N.route.id ? g[N.route.id] : void 0),
      (Z = N.route.errorElement || p1),
      A &&
        (b < 0 && H === 0 ?
          (Kh(
            'route-fallback',
            !1,
            'No `HydrateFallback` element provided to render during initial hydration',
          ),
          (k = !0),
          (G = null))
        : b === H && ((k = !0), (G = N.route.hydrateFallbackElement || null))));
    let J = o.concat(m.slice(0, H + 1)),
      X = () => {
        let W;
        return (
          q ? (W = Z)
          : k ? (W = G)
          : N.route.Component ? (W = j.createElement(N.route.Component, null))
          : N.route.element ? (W = N.route.element)
          : (W = S),
          j.createElement(S1, {
            match: N,
            routeContext: { outlet: S, matches: J, isDataRoute: d != null },
            children: W,
          })
        );
      };
    return d && (N.route.ErrorBoundary || N.route.errorElement || H === 0) ?
        j.createElement(Vh, {
          location: d.location,
          revalidation: d.revalidation,
          component: Z,
          error: q,
          children: X(),
          routeContext: { outlet: null, matches: J, isDataRoute: !0 },
          onError: _,
        })
      : X();
  }, null);
}
function rf(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function E1(i) {
  let o = j.useContext($a);
  return (Te(o, rf(i)), o);
}
function j1(i) {
  let o = j.useContext(Ei);
  return (Te(o, rf(i)), o);
}
function N1(i) {
  let o = j.useContext(wt);
  return (Te(o, rf(i)), o);
}
function of(i) {
  let o = N1(i),
    d = o.matches[o.matches.length - 1];
  return (
    Te(
      d.route.id,
      `${i} can only be used on routes that contain a unique "id"`,
    ),
    d.route.id
  );
}
function T1() {
  return of('useRouteId');
}
function z1() {
  let i = j.useContext(cf),
    o = j1('useRouteError'),
    d = of('useRouteError');
  return i !== void 0 ? i : o.errors?.[d];
}
function A1() {
  let { router: i } = E1('useNavigate'),
    o = of('useNavigate'),
    d = j.useRef(!1);
  return (
    Qh(() => {
      d.current = !0;
    }),
    j.useCallback(
      async (h, m = {}) => {
        (Bt(d.current, wh),
          d.current &&
            (typeof h == 'number' ?
              await i.navigate(h)
            : await i.navigate(h, { fromRouteId: o, ...m })));
      },
      [i, o],
    )
  );
}
var Rh = {};
function Kh(i, o, d) {
  !o && !Rh[i] && ((Rh[i] = !0), Bt(!1, d));
}
j.memo(C1);
function C1({ routes: i, future: o, state: d, onError: s }) {
  return Zh(i, void 0, d, s, o);
}
function sl(i) {
  Te(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.',
  );
}
function R1({
  basename: i = '/',
  children: o = null,
  location: d,
  navigationType: s = 'POP',
  navigator: h,
  static: m = !1,
  unstable_useTransitions: g,
}) {
  Te(
    !Wn(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.',
  );
  let A = i.replace(/^\/*/, '/'),
    b = j.useMemo(
      () => ({
        basename: A,
        navigator: h,
        static: m,
        unstable_useTransitions: g,
        future: {},
      }),
      [A, h, m, g],
    );
  typeof d == 'string' && (d = ia(d));
  let {
      pathname: _ = '/',
      search: S = '',
      hash: N = '',
      state: H = null,
      key: q = 'default',
    } = d,
    k = j.useMemo(() => {
      let Z = rl(_, A);
      return Z == null ? null : (
          {
            location: { pathname: Z, search: S, hash: N, state: H, key: q },
            navigationType: s,
          }
        );
    }, [A, _, S, N, H, q, s]);
  return (
    Bt(
      k != null,
      `<Router basename="${A}"> is not able to match the URL "${_}${S}${N}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    k == null ? null : (
      j.createElement(
        Ot.Provider,
        { value: b },
        j.createElement(kn.Provider, { children: o, value: k }),
      )
    )
  );
}
function O1({ children: i, location: o }) {
  return y1(nf(i), o);
}
function nf(i, o = []) {
  let d = [];
  return (
    j.Children.forEach(i, (s, h) => {
      if (!j.isValidElement(s)) return;
      let m = [...o, h];
      if (s.type === j.Fragment) {
        d.push.apply(d, nf(s.props.children, m));
        return;
      }
      (Te(
        s.type === sl,
        `[${typeof s.type == 'string' ? s.type : s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        Te(
          !s.props.index || !s.props.children,
          'An index route cannot have child routes.',
        ));
      let g = {
        id: s.props.id || m.join('-'),
        caseSensitive: s.props.caseSensitive,
        element: s.props.element,
        Component: s.props.Component,
        index: s.props.index,
        path: s.props.path,
        middleware: s.props.middleware,
        loader: s.props.loader,
        action: s.props.action,
        hydrateFallbackElement: s.props.hydrateFallbackElement,
        HydrateFallback: s.props.HydrateFallback,
        errorElement: s.props.errorElement,
        ErrorBoundary: s.props.ErrorBoundary,
        hasErrorBoundary:
          s.props.hasErrorBoundary === !0 ||
          s.props.ErrorBoundary != null ||
          s.props.errorElement != null,
        shouldRevalidate: s.props.shouldRevalidate,
        handle: s.props.handle,
        lazy: s.props.lazy,
      };
      (s.props.children && (g.children = nf(s.props.children, m)), d.push(g));
    }),
    d
  );
}
var bi = 'get',
  Si = 'application/x-www-form-urlencoded';
function ji(i) {
  return typeof HTMLElement < 'u' && i instanceof HTMLElement;
}
function M1(i) {
  return ji(i) && i.tagName.toLowerCase() === 'button';
}
function D1(i) {
  return ji(i) && i.tagName.toLowerCase() === 'form';
}
function U1(i) {
  return ji(i) && i.tagName.toLowerCase() === 'input';
}
function H1(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function B1(i, o) {
  return i.button === 0 && (!o || o === '_self') && !H1(i);
}
var gi = null;
function L1() {
  if (gi === null)
    try {
      (new FormData(document.createElement('form'), 0), (gi = !1));
    } catch {
      gi = !0;
    }
  return gi;
}
var q1 = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function tf(i) {
  return i != null && !q1.has(i) ?
      (Bt(
        !1,
        `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Si}"`,
      ),
      null)
    : i;
}
function Y1(i, o) {
  let d, s, h, m, g;
  if (D1(i)) {
    let A = i.getAttribute('action');
    ((s = A ? rl(A, o) : null),
      (d = i.getAttribute('method') || bi),
      (h = tf(i.getAttribute('enctype')) || Si),
      (m = new FormData(i)));
  } else if (M1(i) || (U1(i) && (i.type === 'submit' || i.type === 'image'))) {
    let A = i.form;
    if (A == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let b = i.getAttribute('formaction') || A.getAttribute('action');
    if (
      ((s = b ? rl(b, o) : null),
      (d = i.getAttribute('formmethod') || A.getAttribute('method') || bi),
      (h =
        tf(i.getAttribute('formenctype')) ||
        tf(A.getAttribute('enctype')) ||
        Si),
      (m = new FormData(A, i)),
      !L1())
    ) {
      let { name: _, type: S, value: N } = i;
      if (S === 'image') {
        let H = _ ? `${_}.` : '';
        (m.append(`${H}x`, '0'), m.append(`${H}y`, '0'));
      } else _ && m.append(_, N);
    }
  } else {
    if (ji(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((d = bi), (s = null), (h = Si), (g = i));
  }
  return (
    m && h === 'text/plain' && ((g = m), (m = void 0)),
    { action: s, method: d.toLowerCase(), encType: h, formData: m, body: g }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function df(i, o) {
  if (i === !1 || i === null || typeof i > 'u') throw new Error(o);
}
function G1(i, o, d, s) {
  let h =
    typeof i == 'string' ?
      new URL(
        i,
        typeof window > 'u' ? 'server://singlefetch/' : window.location.origin,
      )
    : i;
  return (
    d ?
      h.pathname.endsWith('/') ?
        (h.pathname = `${h.pathname}_.${s}`)
      : (h.pathname = `${h.pathname}.${s}`)
    : h.pathname === '/' ? (h.pathname = `_root.${s}`)
    : o && rl(h.pathname, o) === '/' ?
      (h.pathname = `${o.replace(/\/$/, '')}/_root.${s}`)
    : (h.pathname = `${h.pathname.replace(/\/$/, '')}.${s}`),
    h
  );
}
async function X1(i, o) {
  if (i.id in o) return o[i.id];
  try {
    let d = await import(i.module);
    return ((o[i.id] = d), d);
  } catch (d) {
    return (
      console.error(
        `Error loading route module \`${i.module}\`, reloading page...`,
      ),
      console.error(d),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function w1(i) {
  return (
    i == null ? !1
    : i.href == null ?
      i.rel === 'preload' &&
      typeof i.imageSrcSet == 'string' &&
      typeof i.imageSizes == 'string'
    : typeof i.rel == 'string' && typeof i.href == 'string'
  );
}
async function Q1(i, o, d) {
  let s = await Promise.all(
    i.map(async (h) => {
      let m = o.routes[h.route.id];
      if (m) {
        let g = await X1(m, d);
        return g.links ? g.links() : [];
      }
      return [];
    }),
  );
  return J1(
    s
      .flat(1)
      .filter(w1)
      .filter((h) => h.rel === 'stylesheet' || h.rel === 'preload')
      .map((h) =>
        h.rel === 'stylesheet' ?
          { ...h, rel: 'prefetch', as: 'style' }
        : { ...h, rel: 'prefetch' },
      ),
  );
}
function Oh(i, o, d, s, h, m) {
  let g = (b, _) => (d[_] ? b.route.id !== d[_].route.id : !0),
    A = (b, _) =>
      d[_].pathname !== b.pathname ||
      (d[_].route.path?.endsWith('*') && d[_].params['*'] !== b.params['*']);
  return (
    m === 'assets' ? o.filter((b, _) => g(b, _) || A(b, _))
    : m === 'data' ?
      o.filter((b, _) => {
        let S = s.routes[b.route.id];
        if (!S || !S.hasLoader) return !1;
        if (g(b, _) || A(b, _)) return !0;
        if (b.route.shouldRevalidate) {
          let N = b.route.shouldRevalidate({
            currentUrl: new URL(h.pathname + h.search + h.hash, window.origin),
            currentParams: d[0]?.params || {},
            nextUrl: new URL(i, window.origin),
            nextParams: b.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof N == 'boolean') return N;
        }
        return !0;
      })
    : []
  );
}
function Z1(i, o, { includeHydrateFallback: d } = {}) {
  return V1(
    i
      .map((s) => {
        let h = o.routes[s.route.id];
        if (!h) return [];
        let m = [h.module];
        return (
          h.clientActionModule && (m = m.concat(h.clientActionModule)),
          h.clientLoaderModule && (m = m.concat(h.clientLoaderModule)),
          d &&
            h.hydrateFallbackModule &&
            (m = m.concat(h.hydrateFallbackModule)),
          h.imports && (m = m.concat(h.imports)),
          m
        );
      })
      .flat(1),
  );
}
function V1(i) {
  return [...new Set(i)];
}
function K1(i) {
  let o = {},
    d = Object.keys(i).sort();
  for (let s of d) o[s] = i[s];
  return o;
}
function J1(i, o) {
  let d = new Set();
  return (
    new Set(o),
    i.reduce((s, h) => {
      let m = JSON.stringify(K1(h));
      return (d.has(m) || (d.add(m), s.push({ key: m, link: h })), s);
    }, [])
  );
}
function Jh() {
  let i = j.useContext($a);
  return (
    df(
      i,
      'You must render this element inside a <DataRouterContext.Provider> element',
    ),
    i
  );
}
function $1() {
  let i = j.useContext(Ei);
  return (
    df(
      i,
      'You must render this element inside a <DataRouterStateContext.Provider> element',
    ),
    i
  );
}
var hf = j.createContext(void 0);
hf.displayName = 'FrameworkContext';
function $h() {
  let i = j.useContext(hf);
  return (
    df(i, 'You must render this element inside a <HydratedRouter> element'),
    i
  );
}
function k1(i, o) {
  let d = j.useContext(hf),
    [s, h] = j.useState(!1),
    [m, g] = j.useState(!1),
    {
      onFocus: A,
      onBlur: b,
      onMouseEnter: _,
      onMouseLeave: S,
      onTouchStart: N,
    } = o,
    H = j.useRef(null);
  (j.useEffect(() => {
    if ((i === 'render' && g(!0), i === 'viewport')) {
      let Z = (J) => {
          J.forEach((X) => {
            g(X.isIntersecting);
          });
        },
        G = new IntersectionObserver(Z, { threshold: 0.5 });
      return (
        H.current && G.observe(H.current),
        () => {
          G.disconnect();
        }
      );
    }
  }, [i]),
    j.useEffect(() => {
      if (s) {
        let Z = setTimeout(() => {
          g(!0);
        }, 100);
        return () => {
          clearTimeout(Z);
        };
      }
    }, [s]));
  let q = () => {
      h(!0);
    },
    k = () => {
      (h(!1), g(!1));
    };
  return (
    d ?
      i !== 'intent' ?
        [m, H, {}]
      : [
          m,
          H,
          {
            onFocus: Vn(A, q),
            onBlur: Vn(b, k),
            onMouseEnter: Vn(_, q),
            onMouseLeave: Vn(S, k),
            onTouchStart: Vn(N, q),
          },
        ]
    : [!1, H, {}]
  );
}
function Vn(i, o) {
  return (d) => {
    (i && i(d), d.defaultPrevented || o(d));
  };
}
function W1({ page: i, ...o }) {
  let { router: d } = Jh(),
    s = j.useMemo(() => Mh(d.routes, i, d.basename), [d.routes, i, d.basename]);
  return s ? j.createElement(I1, { page: i, matches: s, ...o }) : null;
}
function F1(i) {
  let { manifest: o, routeModules: d } = $h(),
    [s, h] = j.useState([]);
  return (
    j.useEffect(() => {
      let m = !1;
      return (
        Q1(i, o, d).then((g) => {
          m || h(g);
        }),
        () => {
          m = !0;
        }
      );
    }, [i, o, d]),
    s
  );
}
function I1({ page: i, matches: o, ...d }) {
  let s = Bl(),
    { future: h, manifest: m, routeModules: g } = $h(),
    { basename: A } = Jh(),
    { loaderData: b, matches: _ } = $1(),
    S = j.useMemo(() => Oh(i, o, _, m, s, 'data'), [i, o, _, m, s]),
    N = j.useMemo(() => Oh(i, o, _, m, s, 'assets'), [i, o, _, m, s]),
    H = j.useMemo(() => {
      if (i === s.pathname + s.search + s.hash) return [];
      let Z = new Set(),
        G = !1;
      if (
        (o.forEach((X) => {
          let W = m.routes[X.route.id];
          !W ||
            !W.hasLoader ||
            ((
              (!S.some((xe) => xe.route.id === X.route.id) &&
                X.route.id in b &&
                g[X.route.id]?.shouldRevalidate) ||
              W.hasClientLoader
            ) ?
              (G = !0)
            : Z.add(X.route.id));
        }),
        Z.size === 0)
      )
        return [];
      let J = G1(i, A, h.unstable_trailingSlashAwareDataRequests, 'data');
      return (
        G &&
          Z.size > 0 &&
          J.searchParams.set(
            '_routes',
            o
              .filter((X) => Z.has(X.route.id))
              .map((X) => X.route.id)
              .join(','),
          ),
        [J.pathname + J.search]
      );
    }, [A, h.unstable_trailingSlashAwareDataRequests, b, s, m, S, o, i, g]),
    q = j.useMemo(() => Z1(N, m), [N, m]),
    k = F1(N);
  return j.createElement(
    j.Fragment,
    null,
    H.map((Z) =>
      j.createElement('link', {
        key: Z,
        rel: 'prefetch',
        as: 'fetch',
        href: Z,
        ...d,
      }),
    ),
    q.map((Z) =>
      j.createElement('link', { key: Z, rel: 'modulepreload', href: Z, ...d }),
    ),
    k.map(({ key: Z, link: G }) =>
      j.createElement('link', {
        key: Z,
        nonce: d.nonce,
        ...G,
        crossOrigin: G.crossOrigin ?? d.crossOrigin,
      }),
    ),
  );
}
function P1(...i) {
  return (o) => {
    i.forEach((d) => {
      typeof d == 'function' ? d(o) : d != null && (d.current = o);
    });
  };
}
var e_ =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  e_ && (window.__reactRouterVersion = '7.13.0');
} catch {}
function t_({
  basename: i,
  children: o,
  unstable_useTransitions: d,
  window: s,
}) {
  let h = j.useRef();
  h.current == null && (h.current = Hv({ window: s, v5Compat: !0 }));
  let m = h.current,
    [g, A] = j.useState({ action: m.action, location: m.location }),
    b = j.useCallback(
      (_) => {
        d === !1 ? A(_) : j.startTransition(() => A(_));
      },
      [d],
    );
  return (
    j.useLayoutEffect(() => m.listen(b), [m, b]),
    j.createElement(R1, {
      basename: i,
      children: o,
      location: g.location,
      navigationType: g.action,
      navigator: m,
      unstable_useTransitions: d,
    })
  );
}
var kh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ka = j.forwardRef(function (
    {
      onClick: o,
      discover: d = 'render',
      prefetch: s = 'none',
      relative: h,
      reloadDocument: m,
      replace: g,
      state: A,
      target: b,
      to: _,
      preventScrollReset: S,
      viewTransition: N,
      unstable_defaultShouldRevalidate: H,
      ...q
    },
    k,
  ) {
    let { basename: Z, unstable_useTransitions: G } = j.useContext(Ot),
      J = typeof _ == 'string' && kh.test(_),
      X = qh(_, Z);
    _ = X.to;
    let W = v1(_, { relative: h }),
      [xe, Se, ze] = k1(s, q),
      P = n_(_, {
        replace: g,
        state: A,
        target: b,
        preventScrollReset: S,
        relative: h,
        viewTransition: N,
        unstable_defaultShouldRevalidate: H,
        unstable_useTransitions: G,
      });
    function Re(pt) {
      (o && o(pt), pt.defaultPrevented || P(pt));
    }
    let Ve = j.createElement('a', {
      ...q,
      ...ze,
      'href': X.absoluteURL || W,
      'onClick': X.isExternal || m ? o : Re,
      'ref': P1(k, Se),
      'target': b,
      'data-discover': !J && d === 'render' ? 'true' : void 0,
    });
    return xe && !J ?
        j.createElement(j.Fragment, null, Ve, j.createElement(W1, { page: W }))
      : Ve;
  });
Ka.displayName = 'Link';
var na = j.forwardRef(function (
  {
    'aria-current': o = 'page',
    'caseSensitive': d = !1,
    'className': s = '',
    'end': h = !1,
    'style': m,
    'to': g,
    'viewTransition': A,
    'children': b,
    ..._
  },
  S,
) {
  let N = Fn(g, { relative: _.relative }),
    H = Bl(),
    q = j.useContext(Ei),
    { navigator: k, basename: Z } = j.useContext(Ot),
    G = q != null && f_(N) && A === !0,
    J = k.encodeLocation ? k.encodeLocation(N).pathname : N.pathname,
    X = H.pathname,
    W =
      q && q.navigation && q.navigation.location ?
        q.navigation.location.pathname
      : null;
  (d ||
    ((X = X.toLowerCase()),
    (W = W ? W.toLowerCase() : null),
    (J = J.toLowerCase())),
    W && Z && (W = rl(W, Z) || W));
  const xe = J !== '/' && J.endsWith('/') ? J.length - 1 : J.length;
  let Se = X === J || (!h && X.startsWith(J) && X.charAt(xe) === '/'),
    ze =
      W != null &&
      (W === J || (!h && W.startsWith(J) && W.charAt(J.length) === '/')),
    P = { isActive: Se, isPending: ze, isTransitioning: G },
    Re = Se ? o : void 0,
    Ve;
  typeof s == 'function' ?
    (Ve = s(P))
  : (Ve = [
      s,
      Se ? 'active' : null,
      ze ? 'pending' : null,
      G ? 'transitioning' : null,
    ]
      .filter(Boolean)
      .join(' '));
  let pt = typeof m == 'function' ? m(P) : m;
  return j.createElement(
    Ka,
    {
      ..._,
      'aria-current': Re,
      'className': Ve,
      'ref': S,
      'style': pt,
      'to': g,
      'viewTransition': A,
    },
    typeof b == 'function' ? b(P) : b,
  );
});
na.displayName = 'NavLink';
var l_ = j.forwardRef(
  (
    {
      discover: i = 'render',
      fetcherKey: o,
      navigate: d,
      reloadDocument: s,
      replace: h,
      state: m,
      method: g = bi,
      action: A,
      onSubmit: b,
      relative: _,
      preventScrollReset: S,
      viewTransition: N,
      unstable_defaultShouldRevalidate: H,
      ...q
    },
    k,
  ) => {
    let { unstable_useTransitions: Z } = j.useContext(Ot),
      G = c_(),
      J = s_(A, { relative: _ }),
      X = g.toLowerCase() === 'get' ? 'get' : 'post',
      W = typeof A == 'string' && kh.test(A),
      xe = (Se) => {
        if ((b && b(Se), Se.defaultPrevented)) return;
        Se.preventDefault();
        let ze = Se.nativeEvent.submitter,
          P = ze?.getAttribute('formmethod') || g,
          Re = () =>
            G(ze || Se.currentTarget, {
              fetcherKey: o,
              method: P,
              navigate: d,
              replace: h,
              state: m,
              relative: _,
              preventScrollReset: S,
              viewTransition: N,
              unstable_defaultShouldRevalidate: H,
            });
        Z && d !== !1 ? j.startTransition(() => Re()) : Re();
      };
    return j.createElement('form', {
      'ref': k,
      'method': X,
      'action': J,
      'onSubmit': s ? b : xe,
      ...q,
      'data-discover': !W && i === 'render' ? 'true' : void 0,
    });
  },
);
l_.displayName = 'Form';
function a_(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Wh(i) {
  let o = j.useContext($a);
  return (Te(o, a_(i)), o);
}
function n_(
  i,
  {
    target: o,
    replace: d,
    state: s,
    preventScrollReset: h,
    relative: m,
    viewTransition: g,
    unstable_defaultShouldRevalidate: A,
    unstable_useTransitions: b,
  } = {},
) {
  let _ = sf(),
    S = Bl(),
    N = Fn(i, { relative: m });
  return j.useCallback(
    (H) => {
      if (B1(H, o)) {
        H.preventDefault();
        let q = d !== void 0 ? d : $n(S) === $n(N),
          k = () =>
            _(i, {
              replace: q,
              state: s,
              preventScrollReset: h,
              relative: m,
              viewTransition: g,
              unstable_defaultShouldRevalidate: A,
            });
        b ? j.startTransition(() => k()) : k();
      }
    },
    [S, _, N, d, s, o, i, h, m, g, A, b],
  );
}
var u_ = 0,
  i_ = () => `__${String(++u_)}__`;
function c_() {
  let { router: i } = Wh('useSubmit'),
    { basename: o } = j.useContext(Ot),
    d = T1(),
    s = i.fetch,
    h = i.navigate;
  return j.useCallback(
    async (m, g = {}) => {
      let { action: A, method: b, encType: _, formData: S, body: N } = Y1(m, o);
      if (g.navigate === !1) {
        let H = g.fetcherKey || i_();
        await s(H, d, g.action || A, {
          unstable_defaultShouldRevalidate: g.unstable_defaultShouldRevalidate,
          preventScrollReset: g.preventScrollReset,
          formData: S,
          body: N,
          formMethod: g.method || b,
          formEncType: g.encType || _,
          flushSync: g.flushSync,
        });
      } else
        await h(g.action || A, {
          unstable_defaultShouldRevalidate: g.unstable_defaultShouldRevalidate,
          preventScrollReset: g.preventScrollReset,
          formData: S,
          body: N,
          formMethod: g.method || b,
          formEncType: g.encType || _,
          replace: g.replace,
          state: g.state,
          fromRouteId: d,
          flushSync: g.flushSync,
          viewTransition: g.viewTransition,
        });
    },
    [s, h, o, d],
  );
}
function s_(i, { relative: o } = {}) {
  let { basename: d } = j.useContext(Ot),
    s = j.useContext(wt);
  Te(s, 'useFormAction must be used inside a RouteContext');
  let [h] = s.matches.slice(-1),
    m = { ...Fn(i || '.', { relative: o }) },
    g = Bl();
  if (i == null) {
    m.search = g.search;
    let A = new URLSearchParams(m.search),
      b = A.getAll('index');
    if (b.some((S) => S === '')) {
      (A.delete('index'),
        b.filter((N) => N).forEach((N) => A.append('index', N)));
      let S = A.toString();
      m.search = S ? `?${S}` : '';
    }
  }
  return (
    (!i || i === '.') &&
      h.route.index &&
      (m.search = m.search ? m.search.replace(/^\?/, '?index&') : '?index'),
    d !== '/' && (m.pathname = m.pathname === '/' ? d : fl([d, m.pathname])),
    $n(m)
  );
}
function f_(i, { relative: o } = {}) {
  let d = j.useContext(Gh);
  Te(
    d != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: s } = Wh('useViewTransitionState'),
    h = Fn(i, { relative: o });
  if (!d.isTransitioning) return !1;
  let m = rl(d.currentLocation.pathname, s) || d.currentLocation.pathname,
    g = rl(d.nextLocation.pathname, s) || d.nextLocation.pathname;
  return xi(h.pathname, g) != null || xi(h.pathname, m) != null;
}
const r_ = '_menu_fvuuk_1',
  o_ = '_menu__nav_fvuuk_17',
  d_ = '_menu__list_fvuuk_24',
  h_ = '_menu__link_fvuuk_33',
  m_ = '_menu__footer_fvuuk_59',
  v_ = '_footer_btn_fvuuk_66',
  et = {
    'menu': r_,
    'menu--open': '_menu--open_fvuuk_14',
    'menu__nav': o_,
    'menu__list': d_,
    'menu__link': h_,
    'menu__link--active': '_menu__link--active_fvuuk_49',
    'menu__footer': m_,
    'footer_btn': v_,
    'footer_btn--active': '_footer_btn--active_fvuuk_87',
  },
  Fh =
    "data:image/svg+xml,%3csvg%20width='16'%20height='14'%20viewBox='0%200%2016%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.296%200.332589C9.82592%200.113015%2010.3939%200%2010.9675%200C11.5411%200%2012.1091%200.113015%2012.6391%200.332589C13.169%200.552163%2013.6504%200.873992%2014.056%201.27969C14.4615%201.68515%2014.7833%202.16654%2015.0028%202.69636C15.2224%203.22628%2015.3354%203.79427%2015.3354%204.36788C15.3354%204.9415%2015.2224%205.50949%2015.0028%206.03941C14.7833%206.56928%2014.4615%207.05071%2014.0558%207.45619C14.0558%207.45623%2014.0559%207.45615%2014.0558%207.45619L8.1625%2013.3495C7.88913%2013.6229%207.44592%2013.6229%207.17255%2013.3495L1.27922%207.45619C0.460149%206.63712%200%205.52622%200%204.36788C0%203.20954%200.460149%202.09865%201.27922%201.27958C2.09829%200.460505%203.20919%200.000356495%204.36753%200.000356495C5.52587%200.000356495%206.63676%200.460505%207.45583%201.27958L7.66753%201.49127L7.8791%201.27969C7.87906%201.27973%207.87914%201.27965%207.8791%201.27969C8.28459%200.874047%208.76613%200.552142%209.296%200.332589ZM13.0658%202.26941C12.7903%201.99378%2012.4632%201.77513%2012.1031%201.62596C11.7431%201.47678%2011.3572%201.4%2010.9675%201.4C10.5778%201.4%2010.1919%201.47678%209.83191%201.62596C9.47189%201.77513%209.14478%201.99378%208.86928%202.26941L8.1625%202.97619C7.88913%203.24956%207.44592%203.24956%207.17255%202.97619L6.46589%202.26953C5.90937%201.71301%205.15456%201.40036%204.36753%201.40036C3.58049%201.40036%202.82569%201.71301%202.26917%202.26953C1.71265%202.82604%201.4%203.58085%201.4%204.36788C1.4%205.15492%201.71265%205.90972%202.26917%206.46624L7.66753%2011.8646L13.0659%206.46624C13.3415%206.19074%2013.5603%205.86352%2013.7095%205.5035C13.8586%205.14347%2013.9354%204.75759%2013.9354%204.36788C13.9354%203.97818%2013.8586%203.59229%2013.7095%203.23227C13.5603%202.87224%2013.3414%202.54491%2013.0658%202.26941Z'%20fill='%23F1F2F9'/%3e%3c/svg%3e",
  Ih =
    "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.46683%200.933323C3.59273%200.765453%203.79032%200.666656%204.00016%200.666656H12.0002C12.21%200.666656%2012.4076%200.765453%2012.5335%200.933323L14.5335%203.59999C14.62%203.71539%2014.6668%203.85574%2014.6668%203.99999V13.3333C14.6668%2013.8638%2014.4561%2014.3725%2014.081%2014.7475C13.706%2015.1226%2013.1973%2015.3333%2012.6668%2015.3333H3.3335C2.80306%2015.3333%202.29436%2015.1226%201.91928%2014.7475C1.54421%2014.3725%201.3335%2013.8638%201.3335%2013.3333V3.99999C1.3335%203.85574%201.38028%203.71539%201.46683%203.59999L3.46683%200.933323ZM4.3335%201.99999L2.66683%204.22221V13.3333C2.66683%2013.5101%202.73707%2013.6797%202.86209%2013.8047C2.98712%2013.9298%203.15669%2014%203.3335%2014H12.6668C12.8436%2014%2013.0132%2013.9298%2013.1382%2013.8047C13.2633%2013.6797%2013.3335%2013.5101%2013.3335%2013.3333V4.22221L11.6668%201.99999H4.3335Z'%20fill='%23F1F2F9'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M1.3335%204.00001C1.3335%203.63182%201.63197%203.33334%202.00016%203.33334H14.0002C14.3684%203.33334%2014.6668%203.63182%2014.6668%204.00001C14.6668%204.3682%2014.3684%204.66668%2014.0002%204.66668H2.00016C1.63197%204.66668%201.3335%204.3682%201.3335%204.00001Z'%20fill='%23F1F2F9'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.33341%206C5.7016%206%206.00008%206.29848%206.00008%206.66667C6.00008%207.1971%206.21079%207.70581%206.58587%208.08088C6.96094%208.45595%207.46965%208.66667%208.00008%208.66667C8.53051%208.66667%209.03922%208.45595%209.41429%208.08088C9.78937%207.70581%2010.0001%207.1971%2010.0001%206.66667C10.0001%206.29848%2010.2986%206%2010.6667%206C11.0349%206%2011.3334%206.29848%2011.3334%206.66667C11.3334%207.55072%2010.9822%208.39857%2010.3571%209.02369C9.73198%209.64881%208.88414%2010%208.00008%2010C7.11603%2010%206.26818%209.64881%205.64306%209.02369C5.01794%208.39857%204.66675%207.55072%204.66675%206.66667C4.66675%206.29848%204.96522%206%205.33341%206Z'%20fill='%23F1F2F9'/%3e%3c/svg%3e",
  __ = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Phones', path: '/phones' },
    { id: 3, name: 'Tablets', path: '/tablets' },
    { id: 4, name: 'Accessories', path: '/accessories' },
  ],
  y_ = ({ isOpen: i, onClose: o }) =>
    f.jsxs('div', {
      className: `${et.menu} ${i ? et['menu--open'] : ''}`,
      children: [
        f.jsx('nav', {
          className: et.menu__nav,
          children: f.jsx('ul', {
            className: et.menu__list,
            children: __.map((d) =>
              f.jsx(
                'li',
                {
                  className: et.menu__item,
                  children: f.jsx(na, {
                    to: d.path,
                    className: ({ isActive: s }) =>
                      s ?
                        `${et.menu__link} ${et['menu__link--active']}`
                      : et.menu__link,
                    onClick: o,
                    children: d.name,
                  }),
                },
                d.id,
              ),
            ),
          }),
        }),
        f.jsxs('div', {
          className: et.menu__footer,
          children: [
            f.jsx(na, {
              to: '/favorites',
              className: ({ isActive: d }) =>
                d ?
                  `${et.footer_btn} ${et['footer_btn--active']}`
                : et.footer_btn,
              onClick: o,
              children: f.jsx('img', { src: Fh, alt: 'Favorites' }),
            }),
            f.jsx(na, {
              to: '/cart',
              className: ({ isActive: d }) =>
                d ?
                  `${et.footer_btn} ${et['footer_btn--active']}`
                : et.footer_btn,
              onClick: o,
              children: f.jsx('img', { src: Ih, alt: 'Cart' }),
            }),
          ],
        }),
      ],
    }),
  g_ = '_header_17x9z_1',
  p_ = '_header__container_17x9z_16',
  b_ = '_header__left_17x9z_23',
  S_ = '_header__right_17x9z_23',
  x_ = '_header__logo_17x9z_27',
  E_ = '_header__nav_17x9z_49',
  j_ = '_header__icons_17x9z_64',
  N_ = '_header__burger_17x9z_72',
  T_ = '_nav_list_17x9z_92',
  z_ = '_nav_list__item_17x9z_109',
  A_ = '_nav_list__link_17x9z_113',
  C_ = '_icon_btn_17x9z_141',
  R_ = '_burger_icon_17x9z_177',
  Ue = {
    'header': g_,
    'header__container': p_,
    'header__left': b_,
    'header__right': S_,
    'header__logo': x_,
    'header__nav': E_,
    'header__icons': j_,
    'header__burger': N_,
    'nav_list': T_,
    'nav_list__item': z_,
    'nav_list__link': A_,
    'nav_list__link--active': '_nav_list__link--active_17x9z_128',
    'icon_btn': C_,
    'icon_btn--active': '_icon_btn--active_17x9z_160',
    'burger_icon': R_,
    'burger_icon--active': '_burger_icon--active_17x9z_194',
  },
  O_ = '/assets/logo-CxS9TFyQ.svg',
  M_ = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Phones', path: '/phones' },
    { id: 3, name: 'Tablets', path: '/tablets' },
    { id: 4, name: 'Accessories', path: '/accessories' },
  ],
  D_ = () => {
    const [i, o] = j.useState(!1);
    j.useEffect(
      () => (
        i ?
          (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'unset'),
        () => {
          document.body.style.overflow = 'unset';
        }
      ),
      [i],
    );
    const d = () => {
      o((s) => !s);
    };
    return f.jsxs(f.Fragment, {
      children: [
        f.jsx('header', {
          className: Ue.header,
          children: f.jsxs('div', {
            className: Ue.header__container,
            children: [
              f.jsxs('div', {
                className: Ue.header__left,
                children: [
                  f.jsx(Ka, {
                    to: '/',
                    className: Ue.header__logo,
                    onClick: () => o(!1),
                    children: f.jsx('img', { src: O_, alt: 'Nice Gadgets' }),
                  }),
                  f.jsx('nav', {
                    className: Ue.header__nav,
                    children: f.jsx('ul', {
                      className: Ue.nav_list,
                      children: M_.map((s) =>
                        f.jsx(
                          'li',
                          {
                            className: Ue.nav_list__item,
                            children: f.jsx(na, {
                              to: s.path,
                              className: ({ isActive: h }) =>
                                h ?
                                  `${Ue.nav_list__link} ${Ue['nav_list__link--active']}`
                                : Ue.nav_list__link,
                              children: s.name,
                            }),
                          },
                          s.id,
                        ),
                      ),
                    }),
                  }),
                ],
              }),
              f.jsxs('div', {
                className: Ue.header__right,
                children: [
                  f.jsxs('div', {
                    className: Ue.header__icons,
                    children: [
                      f.jsx(na, {
                        to: '/favorites',
                        className: ({ isActive: s }) =>
                          s ?
                            `${Ue.icon_btn} ${Ue['icon_btn--active']}`
                          : Ue.icon_btn,
                        children: f.jsx('img', { src: Fh, alt: 'Favorites' }),
                      }),
                      f.jsx(na, {
                        to: '/cart',
                        className: ({ isActive: s }) =>
                          s ?
                            `${Ue.icon_btn} ${Ue['icon_btn--active']}`
                          : Ue.icon_btn,
                        children: f.jsx('img', { src: Ih, alt: 'Cart' }),
                      }),
                    ],
                  }),
                  f.jsx('button', {
                    'className': Ue.header__burger,
                    'onClick': d,
                    'aria-label': 'Toggle menu',
                    'children': f.jsxs('div', {
                      className: `${Ue.burger_icon} ${i ? Ue['burger_icon--active'] : ''}`,
                      children: [
                        f.jsx('span', {}),
                        f.jsx('span', {}),
                        f.jsx('span', {}),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        f.jsx(y_, { isOpen: i, onClose: () => o(!1) }),
      ],
    });
  },
  U_ = '_footer_7q96a_1',
  H_ = '_container_7q96a_7',
  B_ = '_logo_7q96a_13',
  L_ = '_nav_7q96a_19',
  q_ = '_back_7q96a_37',
  Y_ = '_arrow_7q96a_47',
  Va = { footer: U_, container: H_, logo: B_, nav: L_, back: q_, arrow: Y_ },
  G_ = '/assets/logo-BX5z9YCI.svg',
  X_ = () => {
    const i = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return f.jsx('footer', {
      className: Va.footer,
      children: f.jsxs('div', {
        className: Va.container,
        children: [
          f.jsx('img', { src: G_, alt: 'Nice Gadgets', className: Va.logo }),
          f.jsxs('nav', {
            className: Va.nav,
            children: [
              f.jsx('a', {
                href: 'https://github.com/Team-Project-Phone-catalog/phone-catalog-frontend',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: 'GITHUB',
              }),
              f.jsx('a', { href: '#', children: 'CONTACTS' }),
              f.jsx('a', { href: '#', children: 'RIGHTS' }),
            ],
          }),
          f.jsxs('div', {
            className: Va.back,
            children: [
              f.jsx('span', { children: 'Back to top' }),
              f.jsx('button', {
                type: 'button',
                onClick: i,
                className: Va.arrow,
                children: '↑',
              }),
            ],
          }),
        ],
      }),
    });
  },
  Ni = () => fetch('/api/phones.json').then((i) => i.json()),
  Ti = () => fetch('/api/tablets.json').then((i) => i.json()),
  zi = () => fetch('/api/accessories.json').then((i) => i.json()),
  w_ = () => fetch('/api/products.json').then((i) => i.json()),
  Q_ = async (i, o) => {
    const d = await fetch(`/api/${i}.json`);
    if (!d.ok) throw new Error(`Category not found: ${i}`);
    const h = (await d.json()).find((m) => m.id === o);
    if (!h) throw new Error(`Product not found: ${o}`);
    return h;
  },
  Z_ = ({ currentPrice: i, fullPrice: o }) =>
    f.jsxs('p', {
      className: 'product-price',
      children: [
        f.jsxs('span', {
          className: 'product-price__current',
          children: ['$', i],
        }),
        f.jsxs('span', {
          className: 'product-price__full',
          children: ['$', o],
        }),
      ],
    }),
  pi = (i) => i.split(' ').slice(0, 2).join(' '),
  Ph = ({
    screen: i,
    capacity: o,
    ram: d,
    resolution: s,
    showTopLine: h = !0,
  }) =>
    f.jsxs('div', {
      className: `product-features ${h ? '' : 'product-features--no-line'}`,
      children: [
        f.jsxs('p', {
          className: 'product-features__item',
          children: [
            f.jsx('span', {
              className: 'product-features__name',
              children: 'Screen',
            }),
            f.jsx('span', {
              className: 'product-features__value',
              children: pi(i),
            }),
          ],
        }),
        s &&
          f.jsxs('p', {
            className: 'product-features__item',
            children: [
              f.jsx('span', {
                className: 'product-features__name',
                children: 'Resolution',
              }),
              f.jsx('span', {
                className: 'product-features__value',
                children: pi(s),
              }),
            ],
          }),
        f.jsxs('p', {
          className: 'product-features__item',
          children: [
            f.jsx('span', {
              className: 'product-features__name',
              children: 'Capacity',
            }),
            f.jsx('span', {
              className: 'product-features__value',
              children: pi(o),
            }),
          ],
        }),
        f.jsxs('p', {
          className: 'product-features__item',
          children: [
            f.jsx('span', {
              className: 'product-features__name',
              children: 'RAM',
            }),
            f.jsx('span', {
              className: 'product-features__value',
              children: pi(d),
            }),
          ],
        }),
      ],
    }),
  em = ({ onAddToCart: i, onToggleFavorite: o, isFavorite: d }) =>
    f.jsxs('div', {
      className: 'product-actions',
      children: [
        f.jsx('button', {
          type: 'button',
          className: 'product-actions__add-to-cart',
          onClick: i,
          children: 'Add to cart',
        }),
        f.jsx('button', {
          'type': 'button',
          'className': `product-actions__favorites ${d ? 'product-actions__favorites--active' : ''}`,
          'onClick': o,
          'aria-label': d ? 'Remove from favorites' : 'Add to favorites',
        }),
      ],
    }),
  ua = ({ product: i, onFavoriteChange: o }) => {
    const [d, s] = j.useState(() =>
      i ?
        JSON.parse(localStorage.getItem('favorites') || '[]').includes(
          String(i.id),
        )
      : !1,
    );
    if (!i) return null;
    const h = i.priceDiscount ?? ('price' in i ? i.price : void 0),
      m = i.priceRegular ?? ('fullPrice' in i ? i.fullPrice : void 0),
      g = 'images' in i ? i.images[0] : i.image,
      A = g ? `/${g}` : null,
      b =
        'itemId' in i ? `/${i.category}/${i.itemId}` : `/${i.category}/${i.id}`,
      _ = () => {
        const S = JSON.parse(localStorage.getItem('favorites') || '[]');
        let N;
        (S.includes(String(i.id)) ?
          (N = S.filter((H) => H !== String(i.id)))
        : (N = [...S, String(i.id)]),
          localStorage.setItem('favorites', JSON.stringify(N)),
          s(!d),
          o?.());
      };
    return f.jsx('div', {
      className: 'card',
      children: f.jsxs('div', {
        className: 'card__container',
        children: [
          f.jsxs(Ka, {
            to: b,
            className: 'card__link',
            children: [
              f.jsx('div', {
                className: 'card__img-container',
                children:
                  A &&
                  f.jsx('img', {
                    className: 'card__image',
                    src: A,
                    alt: i.name,
                  }),
              }),
              f.jsx('div', {
                className: 'card__title-wrapper',
                children: f.jsx('h2', {
                  className: 'card__title',
                  children: i.name,
                }),
              }),
            ],
          }),
          f.jsx(Z_, { currentPrice: h, fullPrice: m }),
          f.jsx(Ph, { screen: i.screen, capacity: i.capacity, ram: i.ram }),
          f.jsx(em, {
            onAddToCart: (S) => {
              (S.preventDefault(),
                S.stopPropagation(),
                console.log('Added to cart'));
            },
            onToggleFavorite: (S) => {
              (S.preventDefault(), S.stopPropagation(), _());
            },
            isFavorite: d,
          }),
        ],
      }),
    });
  },
  Ai = (i) => [...i].sort((o, d) => (d.year || 0) - (o.year || 0)),
  In = (i) =>
    [...i].sort((o, d) => {
      const s = (o.priceRegular || 0) - (o.priceDiscount || 0);
      return (d.priceRegular || 0) - (d.priceDiscount || 0) - s;
    }),
  V_ = '_search_1flgh_19',
  K_ = '_title_1flgh_34',
  J_ = '_modelsCount_1flgh_44',
  $_ = '_controls_1flgh_52',
  k_ = '_controlsLeft_1flgh_59',
  W_ = '_control_1flgh_52',
  F_ = '_label_1flgh_69',
  I_ = '_select_1flgh_73',
  P_ = '_searchInput_1flgh_94',
  Ge = {
    'loader-wrapper': '_loader-wrapper_1flgh_1',
    'phones-page__container': '_phones-page__container_1flgh_9',
    'search': V_,
    'phones-page': '_phones-page_1flgh_9',
    'title': K_,
    'modelsCount': J_,
    'phones-page__controls': '_phones-page__controls_1flgh_49',
    'controls': $_,
    'controlsLeft': k_,
    'control': W_,
    'label': F_,
    'select': I_,
    'searchInput': P_,
    'phones-page__list': '_phones-page__list_1flgh_105',
  },
  ey = '_breadcrumbs_mu3xr_1',
  ty = '_breadcrumbs__home_mu3xr_7',
  ly = '_breadcrumbs__separator_mu3xr_16',
  ay = '_breadcrumbs__link_mu3xr_20',
  ny = '_breadcrumbs__current_mu3xr_31',
  aa = {
    breadcrumbs: ey,
    breadcrumbs__home: ty,
    breadcrumbs__separator: ly,
    breadcrumbs__link: ay,
    breadcrumbs__current: ny,
  },
  Ja = () => {
    const i = Bl(),
      { productId: o } = ff(),
      d = i.pathname.split('/').filter(Boolean);
    if (d.length === 0) return null;
    const s = d[0],
      h = (g) => g.charAt(0).toUpperCase() + g.slice(1),
      m = (g) =>
        g
          .split('-')
          .map((A) => A.charAt(0).toUpperCase() + A.slice(1))
          .join(' ');
    return f.jsxs('nav', {
      className: aa.breadcrumbs,
      children: [
        f.jsx(Ka, {
          to: '/',
          className: aa.breadcrumbs__home,
          children: f.jsx('img', { src: '/img/icons/Home.svg', alt: 'Home' }),
        }),
        f.jsx('span', { className: aa.breadcrumbs__separator, children: '>' }),
        o ?
          f.jsx(Ka, {
            to: `/${s}`,
            className: aa.breadcrumbs__link,
            children: h(s),
          })
        : f.jsx('span', { className: aa.breadcrumbs__current, children: h(s) }),
        o &&
          f.jsxs(f.Fragment, {
            children: [
              f.jsx('span', {
                className: aa.breadcrumbs__separator,
                children: '>',
              }),
              f.jsx('span', {
                className: aa.breadcrumbs__current,
                children: m(o),
              }),
            ],
          }),
      ],
    });
  },
  uy = '_loader_16313_14',
  iy = { loader: uy },
  Pn = () => f.jsx('span', { className: iy.loader }),
  cy = () => {
    const [i, o] = j.useState([]),
      [d, s] = j.useState('newest'),
      [h, m] = j.useState(16),
      [g, A] = j.useState(!0);
    j.useEffect(() => {
      (async () => {
        const N = await Ni();
        (o(N.map((H) => ({ ...H, category: 'phones' }))),
          setTimeout(() => A(!1), 1e3));
      })();
    }, []);
    const b = j.useMemo(() => {
        switch (d) {
          case 'alphabetically':
            return [...i].sort((S, N) => S.name.localeCompare(N.name));
          case 'bestPrice':
            return In(i);
          default:
            return Ai(i);
        }
      }, [i, d]),
      _ = j.useMemo(() => b.slice(0, h), [b, h]);
    return g ?
        f.jsx('div', {
          className: Ge['loader-wrapper'],
          children: f.jsx(Pn, {}),
        })
      : f.jsx('div', {
          className: Ge['phones-page'],
          children: f.jsxs('div', {
            className: Ge['phones-page__container'],
            children: [
              f.jsx(Ja, {}),
              f.jsx('h1', { className: Ge.title, children: 'Mobile phones' }),
              f.jsxs('p', {
                className: Ge.modelsCount,
                children: [i.length, ' models'],
              }),
              f.jsx('section', {
                className: Ge['phones-page__controls'],
                children: f.jsxs('div', {
                  className: Ge.controls,
                  children: [
                    f.jsxs('div', {
                      className: Ge.controlsLeft,
                      children: [
                        f.jsxs('div', {
                          className: Ge.control,
                          children: [
                            f.jsx('label', {
                              className: Ge.label,
                              children: 'Sort by',
                            }),
                            f.jsxs('select', {
                              className: Ge.select,
                              value: d,
                              onChange: (S) => s(S.target.value),
                              children: [
                                f.jsx('option', {
                                  value: 'newest',
                                  children: 'Newest',
                                }),
                                f.jsx('option', {
                                  value: 'alphabetically',
                                  children: 'Alphabetically',
                                }),
                                f.jsx('option', {
                                  value: 'bestPrice',
                                  children: 'Best price',
                                }),
                              ],
                            }),
                          ],
                        }),
                        f.jsxs('div', {
                          className: Ge.control,
                          children: [
                            f.jsx('label', {
                              className: Ge.label,
                              children: 'Items on page',
                            }),
                            f.jsxs('select', {
                              className: Ge.select,
                              value: h,
                              onChange: (S) => m(+S.target.value),
                              children: [
                                f.jsx('option', { value: 16, children: '16' }),
                                f.jsx('option', { value: 32, children: '32' }),
                                f.jsx('option', { value: 64, children: '64' }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    f.jsxs('div', {
                      className: Ge.search,
                      children: [
                        f.jsx('label', {
                          className: Ge.label,
                          children: 'Looking for something?',
                        }),
                        f.jsx('input', {
                          type: 'text',
                          placeholder: 'Type here',
                          className: Ge.searchInput,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              f.jsx('section', {
                className: Ge['phones-page__list'],
                children: _.map((S) => f.jsx(ua, { product: S }, S.id)),
              }),
              f.jsx('section', { className: Ge['phones-page__pagination'] }),
            ],
          }),
        });
  },
  sy = '_search_6oh3h_19',
  fy = '_title_6oh3h_34',
  ry = '_modelsCount_6oh3h_44',
  oy = '_controls_6oh3h_52',
  dy = '_controlsLeft_6oh3h_59',
  hy = '_control_6oh3h_52',
  my = '_label_6oh3h_69',
  vy = '_select_6oh3h_73',
  _y = '_searchInput_6oh3h_95',
  Xe = {
    'loader-wrapper': '_loader-wrapper_6oh3h_1',
    'accessories-page__container': '_accessories-page__container_6oh3h_9',
    'search': sy,
    'accessories-page': '_accessories-page_6oh3h_9',
    'title': fy,
    'modelsCount': ry,
    'accessories-page__controls': '_accessories-page__controls_6oh3h_49',
    'controls': oy,
    'controlsLeft': dy,
    'control': hy,
    'label': my,
    'select': vy,
    'searchInput': _y,
    'accessories-page__list': '_accessories-page__list_6oh3h_106',
  },
  yy = () => {
    const [i, o] = j.useState([]),
      [d, s] = j.useState('newest'),
      [h, m] = j.useState(16),
      [g, A] = j.useState(!0);
    j.useEffect(() => {
      (async () => {
        const N = await zi();
        (o(N.map((H) => ({ ...H, category: 'accessories' }))),
          setTimeout(() => {
            A(!1);
          }, 1e3));
      })();
    }, []);
    const b = j.useMemo(() => {
        switch (d) {
          case 'alphabetically':
            return [...i].sort((S, N) => S.name.localeCompare(N.name));
          case 'bestPrice':
            return In(i);
          default:
            return Ai(i);
        }
      }, [i, d]),
      _ = j.useMemo(() => b.slice(0, h), [b, h]);
    return g ?
        f.jsx('div', {
          className: Xe['loader-wrapper'],
          children: f.jsx(Pn, {}),
        })
      : f.jsx('div', {
          className: Xe['accessories-page'],
          children: f.jsxs('div', {
            className: Xe['accessories-page__container'],
            children: [
              f.jsx(Ja, {}),
              f.jsx('h1', { className: Xe.title, children: 'Accessories' }),
              f.jsxs('p', {
                className: Xe.modelsCount,
                children: [i.length, ' models'],
              }),
              f.jsx('section', {
                className: Xe['accessories-page__controls'],
                children: f.jsxs('div', {
                  className: Xe.controls,
                  children: [
                    f.jsxs('div', {
                      className: Xe.controlsLeft,
                      children: [
                        f.jsxs('div', {
                          className: Xe.control,
                          children: [
                            f.jsx('label', {
                              className: Xe.label,
                              children: 'Sort by',
                            }),
                            f.jsxs('select', {
                              className: Xe.select,
                              value: d,
                              onChange: (S) => s(S.target.value),
                              children: [
                                f.jsx('option', {
                                  value: 'newest',
                                  children: 'Newest',
                                }),
                                f.jsx('option', {
                                  value: 'alphabetically',
                                  children: 'Alphabetically',
                                }),
                                f.jsx('option', {
                                  value: 'bestPrice',
                                  children: 'Best price',
                                }),
                              ],
                            }),
                          ],
                        }),
                        f.jsxs('div', {
                          className: Xe.control,
                          children: [
                            f.jsx('label', {
                              className: Xe.label,
                              children: 'Items on page',
                            }),
                            f.jsxs('select', {
                              className: Xe.select,
                              value: h,
                              onChange: (S) => m(+S.target.value),
                              children: [
                                f.jsx('option', { value: 16, children: '16' }),
                                f.jsx('option', { value: 32, children: '32' }),
                                f.jsx('option', { value: 64, children: '64' }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    f.jsxs('div', {
                      className: Xe.search,
                      children: [
                        f.jsx('label', {
                          className: Xe.label,
                          children: 'Looking for something?',
                        }),
                        f.jsx('input', {
                          type: 'text',
                          placeholder: 'Type here',
                          className: Xe.searchInput,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              f.jsx('section', {
                className: Xe['accessories-page__list'],
                children: _.map((S) => f.jsx(ua, { product: S }, S.id)),
              }),
              f.jsx('section', {
                className: Xe['accessories-page__pagination'],
              }),
            ],
          }),
        });
  },
  gy = '_cart_1nbcg_8',
  py = '_title_1nbcg_27',
  by = '_cartContent_1nbcg_41',
  Sy = '_products_1nbcg_66',
  xy = '_summary_1nbcg_77',
  Kn = { cart: gy, title: py, cartContent: by, products: Sy, summary: xy },
  Ey = '_block_1xzjy_1',
  jy = '_price_1xzjy_7',
  Ny = '_info_1xzjy_17',
  Ty = '_button_1xzjy_24',
  zy = '_buttonCheck_1xzjy_33',
  Jn = { block: Ey, price: jy, info: Ny, button: Ty, buttonCheck: zy },
  Ay = () =>
    f.jsxs('div', {
      className: Jn.block,
      children: [
        f.jsx('h2', { className: Jn.price, children: '$2656' }),
        f.jsx('p', { className: Jn.info, children: 'Total for 3 items' }),
        f.jsx('div', {
          className: Jn.button,
          children: f.jsx('button', {
            className: Jn.buttonCheck,
            children: 'Checkout',
          }),
        }),
      ],
    }),
  Cy = '_item_18h8g_1',
  Ry = '_remove_18h8g_19',
  Oy = '_imageWrapper_18h8g_37',
  My = '_image_18h8g_37',
  Dy = '_details_18h8g_57',
  Uy = '_name_18h8g_68',
  Hy = '_controls_18h8g_76',
  By = '_quantity_18h8g_91',
  Ly = '_btnPlus_18h8g_102',
  qy = '_btnMinus_18h8g_112',
  Yy = '_count_18h8g_122',
  Gy = '_price_18h8g_128',
  Rt = {
    item: Cy,
    remove: Ry,
    imageWrapper: Oy,
    image: My,
    details: Dy,
    name: Uy,
    controls: Hy,
    quantity: By,
    btnPlus: Ly,
    btnMinus: qy,
    count: Yy,
    price: Gy,
  },
  lf = () =>
    f.jsxs('div', {
      className: Rt.item,
      children: [
        f.jsx('button', {
          className: Rt.remove,
          type: 'button',
          children: 'x',
        }),
        f.jsx('div', {
          className: Rt.imageWrapper,
          children: f.jsx('img', {
            src: '/img/phones/apple-iphone-14-pro/spaceblack/00.webp',
            alt: 'Apple iPhone 14 Pro',
            className: Rt.image,
          }),
        }),
        f.jsx('div', {
          className: Rt.details,
          children: f.jsx('h3', {
            className: Rt.name,
            children: 'Apple iPhone 14 Pro 128GB Silver (MQ023)',
          }),
        }),
        f.jsxs('div', {
          className: Rt.controls,
          children: [
            f.jsxs('div', {
              className: Rt.quantity,
              children: [
                f.jsx('button', { className: Rt.btnMinus, children: '-' }),
                f.jsx('span', { className: Rt.count, children: '1' }),
                f.jsx('button', { className: Rt.btnPlus, children: '+' }),
              ],
            }),
            f.jsx('p', { className: Rt.price, children: '$999' }),
          ],
        }),
      ],
    }),
  tm = () =>
    f.jsx('div', {
      className: 'buttonBack',
      children: f.jsx('a', {
        className: 'buttonBackLink',
        href: '#',
        children: 'Back',
      }),
    }),
  Xy = () =>
    f.jsxs('div', {
      className: Kn.cart,
      children: [
        f.jsx(tm, {}),
        f.jsx('div', {
          className: Kn.title,
          children: f.jsx('h1', { children: 'Cart' }),
        }),
        f.jsxs('div', {
          className: Kn.cartContent,
          children: [
            f.jsxs('div', {
              className: Kn.products,
              children: [f.jsx(lf, {}), f.jsx(lf, {}), f.jsx(lf, {})],
            }),
            f.jsx('div', { className: Kn.summary, children: f.jsx(Ay, {}) }),
          ],
        }),
      ],
    }),
  wy = () =>
    f.jsxs('div', {
      className: 'notFound',
      children: [
        f.jsx('h1', { className: 'title', children: 'Помилка 404' }),
        f.jsx('h2', {
          className: 'title__message',
          children: 'Сторінка не знайдена',
        }),
      ],
    }),
  Qy = '_search_clix4_19',
  Zy = '_title_clix4_34',
  Vy = '_modelsCount_clix4_44',
  Ky = '_controls_clix4_52',
  Jy = '_controlsLeft_clix4_59',
  $y = '_control_clix4_52',
  ky = '_label_clix4_69',
  Wy = '_select_clix4_73',
  Fy = '_searchInput_clix4_94',
  we = {
    'loader-wrapper': '_loader-wrapper_clix4_1',
    'tablets-page__container': '_tablets-page__container_clix4_9',
    'search': Qy,
    'tablets-page': '_tablets-page_clix4_9',
    'title': Zy,
    'modelsCount': Vy,
    'tablets-page__controls': '_tablets-page__controls_clix4_49',
    'controls': Ky,
    'controlsLeft': Jy,
    'control': $y,
    'label': ky,
    'select': Wy,
    'searchInput': Fy,
    'tablets-page__list': '_tablets-page__list_clix4_105',
  },
  Iy = () => {
    const [i, o] = j.useState([]),
      [d, s] = j.useState('newest'),
      [h, m] = j.useState(16),
      [g, A] = j.useState(!0);
    j.useEffect(() => {
      (async () => {
        const N = await Ti();
        (o(N.map((H) => ({ ...H, category: 'tablets' }))),
          setTimeout(() => A(!1), 1e3));
      })();
    }, []);
    const b = j.useMemo(() => {
        switch (d) {
          case 'alphabetically':
            return [...i].sort((S, N) => S.name.localeCompare(N.name));
          case 'bestPrice':
            return In(i);
          default:
            return Ai(i);
        }
      }, [i, d]),
      _ = j.useMemo(() => b.slice(0, h), [b, h]);
    return g ?
        f.jsx('div', {
          className: we['loader-wrapper'],
          children: f.jsx(Pn, {}),
        })
      : f.jsx('div', {
          className: we['tablets-page'],
          children: f.jsxs('div', {
            className: we['tablets-page__container'],
            children: [
              f.jsx(Ja, {}),
              f.jsx('h1', { className: we.title, children: 'Tablets' }),
              f.jsxs('p', {
                className: we.modelsCount,
                children: [i.length, ' models'],
              }),
              f.jsx('section', {
                className: we['tablets-page__controls'],
                children: f.jsxs('div', {
                  className: we.controls,
                  children: [
                    f.jsxs('div', {
                      className: we.controlsLeft,
                      children: [
                        f.jsxs('div', {
                          className: we.control,
                          children: [
                            f.jsx('label', {
                              className: we.label,
                              children: 'Sort by',
                            }),
                            f.jsxs('select', {
                              className: we.select,
                              value: d,
                              onChange: (S) => s(S.target.value),
                              children: [
                                f.jsx('option', {
                                  value: 'newest',
                                  children: 'Newest',
                                }),
                                f.jsx('option', {
                                  value: 'alphabetically',
                                  children: 'Alphabetically',
                                }),
                                f.jsx('option', {
                                  value: 'bestPrice',
                                  children: 'Best price',
                                }),
                              ],
                            }),
                          ],
                        }),
                        f.jsxs('div', {
                          className: we.control,
                          children: [
                            f.jsx('label', {
                              className: we.label,
                              children: 'Items on page',
                            }),
                            f.jsxs('select', {
                              className: we.select,
                              value: h,
                              onChange: (S) => m(+S.target.value),
                              children: [
                                f.jsx('option', { value: 16, children: '16' }),
                                f.jsx('option', { value: 32, children: '32' }),
                                f.jsx('option', { value: 64, children: '64' }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    f.jsxs('div', {
                      className: we.search,
                      children: [
                        f.jsx('label', {
                          className: we.label,
                          children: 'Looking for something?',
                        }),
                        f.jsx('input', {
                          type: 'text',
                          placeholder: 'Type here',
                          className: we.searchInput,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              f.jsx('section', {
                className: we['tablets-page__list'],
                children: _.map((S) => f.jsx(ua, { product: S }, S.id)),
              }),
              f.jsx('section', { className: we['tablets-page__pagination'] }),
            ],
          }),
        });
  },
  Py = '_home_1j3w9_9',
  e2 = '_container_1j3w9_20',
  t2 = '_hero_1j3w9_36',
  l2 = '_hero__title_1j3w9_49',
  a2 = '_hero__slider_1j3w9_67',
  n2 = '_hero__arrow_1j3w9_71',
  u2 = '_hero__banner_1j3w9_106',
  i2 = '_hero__dots_1j3w9_214',
  c2 = '_hero__dot_1j3w9_214',
  s2 = '_section_1j3w9_243',
  f2 = '_section__header_1j3w9_256',
  r2 = '_section__title_1j3w9_267',
  o2 = '_section__arrows_1j3w9_282',
  d2 = '_categories_1j3w9_353',
  K = {
    'loader-wrapper': '_loader-wrapper_1j3w9_1',
    'home': Py,
    'container': e2,
    'hero': t2,
    'hero__title': l2,
    'hero__slider': a2,
    'hero__arrow': n2,
    'hero__arrow--left': '_hero__arrow--left_1j3w9_97',
    'hero__arrow--right': '_hero__arrow--right_1j3w9_102',
    'hero__banner': u2,
    'hero__banner-img': '_hero__banner-img_1j3w9_124',
    'hero__dots': i2,
    'hero__dot': c2,
    'hero__dot--active': '_hero__dot--active_1j3w9_235',
    'section': s2,
    'section__header': f2,
    'section__title': r2,
    'section__arrows': o2,
    'arrow-btn': '_arrow-btn_1j3w9_287',
    'products-slider': '_products-slider_1j3w9_310',
    'products-slider__track': '_products-slider__track_1j3w9_335',
    'categories': d2,
    'category-card': '_category-card_1j3w9_371',
    'category-card__image': '_category-card__image_1j3w9_377',
    'category-card__image-wrapper': '_category-card__image-wrapper_1j3w9_380',
    'category-card__image-tablets': '_category-card__image-tablets_1j3w9_406',
    'category-card__image-access': '_category-card__image-access_1j3w9_414',
    'category-card__info': '_category-card__info_1j3w9_422',
    'category-card__title': '_category-card__title_1j3w9_426',
    'category-card__count': '_category-card__count_1j3w9_442',
  },
  h2 = () => {
    const [i, o] = j.useState([]),
      [d, s] = j.useState([]),
      [h, m] = j.useState([]),
      [g, A] = j.useState([]),
      [b, _] = j.useState(!0),
      S = [...i, ...d, ...h],
      N = Ai(g).slice(0, 12),
      H = In(S).slice(0, 12);
    return (
      j.useEffect(() => {
        Promise.all([
          Ni(),
          Ti(),
          zi(),
          w_(),
          new Promise((q) => setTimeout(q, 1e3)),
        ])
          .then(([q, k, Z, G]) => {
            (o(q), s(k), m(Z), A(G));
          })
          .catch((q) => console.error('Error loading data:', q))
          .finally(() => _(!1));
      }, []),
      b ?
        f.jsx('main', {
          className: K.home,
          children: f.jsx('div', {
            className: K['loader-wrapper'],
            children: f.jsx(Pn, {}),
          }),
        })
      : f.jsx('main', {
          className: K.home,
          children: f.jsxs('div', {
            className: K.container,
            children: [
              f.jsxs('section', {
                className: K.hero,
                children: [
                  f.jsx('h1', {
                    className: K.hero__title,
                    children: 'Welcome to Nice Gadgets store!',
                  }),
                  f.jsxs('div', {
                    className: K.hero__slider,
                    children: [
                      f.jsx('button', {
                        'className': `${K.hero__arrow} ${K['hero__arrow--left']}`,
                        'aria-label': 'Previous slide',
                      }),
                      f.jsx('div', {
                        className: K.hero__banner,
                        children: f.jsx('img', {
                          src: '/img/main-banner.png',
                          alt: 'iPhone 14 Pro promotion',
                          className: K['hero__banner-img'],
                        }),
                      }),
                      f.jsx('button', {
                        'className': `${K.hero__arrow} ${K['hero__arrow--right']}`,
                        'aria-label': 'Next slide',
                      }),
                    ],
                  }),
                  f.jsxs('div', {
                    className: K.hero__dots,
                    children: [
                      f.jsx('button', {
                        'className': `${K.hero__dot} ${K['hero__dot--active']}`,
                        'aria-label': 'Slide 1',
                      }),
                      f.jsx('button', {
                        'className': K.hero__dot,
                        'aria-label': 'Slide 2',
                      }),
                      f.jsx('button', {
                        'className': K.hero__dot,
                        'aria-label': 'Slide 3',
                      }),
                    ],
                  }),
                ],
              }),
              f.jsxs('section', {
                className: K.section,
                children: [
                  f.jsxs('div', {
                    className: K.section__header,
                    children: [
                      f.jsx('h2', {
                        className: K.section__title,
                        children: 'Brand new models',
                      }),
                      f.jsxs('div', {
                        className: K.section__arrows,
                        children: [
                          f.jsx('button', {
                            'className': K['arrow-btn'],
                            'aria-label': 'Previous',
                          }),
                          f.jsx('button', {
                            'className': K['arrow-btn'],
                            'aria-label': 'Next',
                          }),
                        ],
                      }),
                    ],
                  }),
                  f.jsx('div', {
                    className: K['products-slider'],
                    children: f.jsx('div', {
                      className: K['products-slider__track'],
                      children: N.map((q) => f.jsx(ua, { product: q }, q.id)),
                    }),
                  }),
                ],
              }),
              f.jsxs('section', {
                className: K.section,
                children: [
                  f.jsx('h2', {
                    className: K.section__title,
                    children: 'Shop by category',
                  }),
                  f.jsxs('div', {
                    className: K.categories,
                    children: [
                      f.jsxs('article', {
                        className: K['category-card'],
                        children: [
                          f.jsx('div', {
                            className: K['category-card__image-wrapper'],
                            children: f.jsx('img', {
                              src: '/img/category-phones.png',
                              alt: 'Mobile phones',
                              className: K['category-card__image'],
                            }),
                          }),
                          f.jsxs('div', {
                            className: K['category-card__info'],
                            children: [
                              f.jsx('h3', {
                                className: K['category-card__title'],
                                children: 'Mobile phones',
                              }),
                              f.jsxs('p', {
                                className: K['category-card__count'],
                                children: [i.length, ' models'],
                              }),
                            ],
                          }),
                        ],
                      }),
                      f.jsxs('article', {
                        className: K['category-card'],
                        children: [
                          f.jsx('div', {
                            className: K['category-card__image-wrapper'],
                            children: f.jsx('img', {
                              src: '/img/category-tablets.png',
                              alt: 'Tablets',
                              className: K['category-card__image-tablets'],
                            }),
                          }),
                          f.jsxs('div', {
                            className: K['category-card__info'],
                            children: [
                              f.jsx('h3', {
                                className: K['category-card__title'],
                                children: 'Tablets',
                              }),
                              f.jsxs('p', {
                                className: K['category-card__count'],
                                children: [d.length, ' models'],
                              }),
                            ],
                          }),
                        ],
                      }),
                      f.jsxs('article', {
                        className: K['category-card'],
                        children: [
                          f.jsx('div', {
                            className: K['category-card__image-wrapper'],
                            children: f.jsx('img', {
                              src: '/img/category-accessories.png',
                              alt: 'Accessories',
                              className: K['category-card__image-access'],
                            }),
                          }),
                          f.jsxs('div', {
                            className: K['category-card__info'],
                            children: [
                              f.jsx('h3', {
                                className: K['category-card__title'],
                                children: 'Accessories',
                              }),
                              f.jsxs('p', {
                                className: K['category-card__count'],
                                children: [h.length, ' models'],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              f.jsxs('section', {
                className: K.section,
                children: [
                  f.jsxs('div', {
                    className: K.section__header,
                    children: [
                      f.jsx('h2', {
                        className: K.section__title,
                        children: 'Hot prices',
                      }),
                      f.jsxs('div', {
                        className: K.section__arrows,
                        children: [
                          f.jsx('button', {
                            'className': K['arrow-btn'],
                            'aria-label': 'Previous',
                          }),
                          f.jsx('button', {
                            'className': K['arrow-btn'],
                            'aria-label': 'Next',
                          }),
                        ],
                      }),
                    ],
                  }),
                  f.jsx('div', {
                    className: K['products-slider'],
                    children: f.jsx('div', {
                      className: K['products-slider__track'],
                      children: H.map((q) => f.jsx(ua, { product: q }, q.id)),
                    }),
                  }),
                ],
              }),
            ],
          }),
        })
    );
  },
  m2 = () => {
    const [i, o] = j.useState([]),
      [, d] = j.useState(!0),
      s = async () => {
        d(!0);
        try {
          const h = JSON.parse(localStorage.getItem('favorites') || '[]'),
            [m, g, A] = await Promise.all([Ni(), Ti(), zi()]),
            _ = [...m, ...g, ...A].filter((S) => h.includes('' + S.id));
          o(_);
        } catch (h) {
          console.error('Failed to load favorites:', h);
        } finally {
          d(!1);
        }
      };
    return (
      j.useEffect(() => {
        s();
      }, []),
      f.jsx(f.Fragment, {
        children: f.jsx('div', {
          className: 'favorites-page',
          children: f.jsxs('div', {
            className: 'favorites-page__container',
            children: [
              f.jsx(Ja, {}),
              f.jsxs('div', {
                className: 'favorites-page__text',
                children: [
                  f.jsx('h1', {
                    className: 'favorites-page__title',
                    children: 'Favourites',
                  }),
                  f.jsxs('div', {
                    className: 'favorites-page__items-number',
                    children: [i.length, ' items'],
                  }),
                ],
              }),
              f.jsx('div', {
                className: 'favorites-page__all-favorites',
                children: i.map((h) =>
                  f.jsx(ua, { product: h, onFavoriteChange: s }, h.id),
                ),
              }),
            ],
          }),
        }),
      })
    );
  },
  v2 = ({ images: i, name: o }) => {
    const [d, s] = j.useState(i[0]);
    return (
      j.useEffect(() => {
        s(i[0]);
      }, [i]),
      f.jsxs('div', {
        className: 'gallery',
        children: [
          f.jsx('div', {
            className: 'gallery__main',
            children: f.jsx('img', { src: `/${d}`, alt: o }),
          }),
          f.jsx('div', {
            className: 'gallery__thumbs',
            children: i.map((h, m) =>
              f.jsx(
                'div',
                {
                  className: `thumb ${d === h ? 'active' : ''}`,
                  onClick: () => s(h),
                  children: f.jsx('img', {
                    src: `/${h}`,
                    alt: `${o} ${m + 1}`,
                  }),
                },
                m,
              ),
            ),
          }),
        ],
      })
    );
  },
  _2 = ({
    namespaceId: i,
    colorsAvailable: o,
    currentColor: d,
    capacityAvailable: s,
    currentCapacity: h,
  }) => {
    const m = sf(),
      { category: g } = ff(),
      A = (S, N) => {
        const H = S.toLowerCase().replace(/\s+/g, '-'),
          q = N.toLowerCase().replace(/\s+/g, '-');
        return `${i}-${H}-${q}`;
      },
      b = (S) => {
        const N = A(h, S);
        m(`/${g}/${N}`);
      },
      _ = (S) => {
        const N = A(S, d);
        m(`/${g}/${N}`);
      };
    return f.jsxs('div', {
      className: 'product-options',
      children: [
        f.jsx('div', {
          className: 'product-options__title',
          children: 'Available colors',
        }),
        f.jsx('div', {
          className: 'product-options__colors',
          children: o.map((S) =>
            f.jsx(
              'button',
              {
                className: `product-options__color-item ${d === S ? 'product-options__color-item--active' : ''}`,
                onClick: () => b(S),
                children: f.jsx('span', {
                  className: 'product-options__color',
                  style: { backgroundColor: S },
                }),
              },
              S,
            ),
          ),
        }),
        f.jsx('div', {
          className: 'product-options__title--capacity',
          children: 'Select capacity',
        }),
        f.jsx('div', {
          className: 'product-options__ram',
          children: s.map((S) =>
            f.jsx(
              'button',
              {
                className: `product-options__ram-item ${h === S ? 'product-options__ram-item--active' : ''}`,
                onClick: () => _(S),
                children: S,
              },
              S,
            ),
          ),
        }),
      ],
    });
  },
  y2 = ({ priceRegular: i, priceDiscount: o }) =>
    f.jsxs('div', {
      className: 'purchase',
      children: [
        f.jsxs('div', {
          className: 'purchase-price',
          children: [
            f.jsxs('span', {
              className: 'purchase-price__current',
              children: ['$', o],
            }),
            f.jsxs('span', {
              className: 'purchase-price__full',
              children: ['$', i],
            }),
          ],
        }),
        f.jsx('div', {
          className: 'purchase__buttons',
          children: f.jsx(em, {
            onAddToCart: () => console.log('Added to cart'),
            onToggleFavorite: () => console.log('Toggled favorite'),
          }),
        }),
      ],
    }),
  g2 = ({ description: i, screen: o, resolution: d, capacity: s, ram: h }) =>
    f.jsxs('div', {
      className: 'ProductDetail',
      children: [
        f.jsx('div', {
          className: 'ProductFeatures',
          children: f.jsx(Ph, {
            screen: o,
            resolution: d,
            capacity: s,
            ram: h,
            showTopLine: !1,
          }),
        }),
        f.jsxs('div', {
          className: 'ProductDetail__about',
          children: [
            f.jsx('h3', {
              className: 'ProductDetail__about-title',
              children: 'About',
            }),
            f.jsx('div', {
              className: 'ProductDetail__about-main',
              children: i.map((m, g) =>
                f.jsxs(
                  'div',
                  {
                    className: 'ProductDetail__about-main',
                    children: [
                      f.jsx('h4', {
                        className: 'ProductDetail__about-main-title',
                        children: m.title,
                      }),
                      m.text.map((A, b) =>
                        f.jsx(
                          'span',
                          {
                            className: 'ProductDetail__about-main-second',
                            children: A,
                          },
                          b,
                        ),
                      ),
                    ],
                  },
                  g,
                ),
              ),
            }),
          ],
        }),
      ],
    }),
  p2 = ({
    id: i,
    screen: o,
    resolution: d,
    processor: s,
    ram: h,
    capacity: m,
    camera: g,
    zoom: A,
    cell: b,
  }) => {
    const _ = [
      { label: 'Screen', value: o },
      { label: 'Resolution', value: d },
      { label: 'Processor', value: s },
      { label: 'RAM', value: h },
      { label: 'Built in memory', value: m },
      { label: 'Camera', value: g },
      { label: 'Zoom', value: A },
      { label: 'Cell', value: String(b) },
    ];
    return f.jsxs('div', {
      className: 'TechSpecs',
      children: [
        f.jsx('h3', { className: 'TechSpecs__title', children: 'Tech specs' }),
        _.map(
          (S) =>
            S.value &&
            f.jsxs(
              'p',
              {
                className: 'TechSpecs__item',
                children: [
                  f.jsx('span', {
                    className: 'TechSpecs__name',
                    children: S.label,
                  }),
                  f.jsx('span', {
                    className: 'TechSpecs__value',
                    children: S.value,
                  }),
                ],
              },
              i,
            ),
        ),
      ],
    });
  },
  b2 = () => {
    const [i, o] = j.useState([]),
      [d, s] = j.useState([]),
      [h, m] = j.useState([]),
      g = [...i, ...d, ...h],
      A = In(g).slice(0, 24);
    return (
      j.useEffect(() => {
        (Ni()
          .then(o)
          .catch((b) => console.error('Error loading phones:', b)),
          Ti()
            .then(s)
            .catch((b) => console.error('Error loading tablets:', b)),
          zi()
            .then(m)
            .catch((b) => console.error('Error loading accessories:', b)));
      }, []),
      f.jsxs('div', {
        className: 'AlsoLike',
        children: [
          f.jsxs('div', {
            className: 'AlsoLike__header',
            children: [
              f.jsx('h3', {
                className: 'AlsoLike__title',
                children: 'You may also like',
              }),
              f.jsxs('div', {
                className: 'AlsoLike__arrows',
                children: [
                  f.jsx('button', {
                    className: 'AlsoLike__arrow-btn',
                    children: '‹',
                  }),
                  f.jsx('button', {
                    className: 'AlsoLike__arrow-btn',
                    children: '›',
                  }),
                ],
              }),
            ],
          }),
          f.jsx('div', {
            className: 'AlsoLike__slider',
            children: f.jsx('div', {
              className: 'AlsoLike__track',
              children: A.map((b) => f.jsx(ua, { product: b }, b.id)),
            }),
          }),
        ],
      })
    );
  },
  S2 = ({ product: i }) =>
    f.jsxs('div', {
      className: 'product-card',
      children: [
        f.jsx(v2, { images: i.images, name: i.name }),
        f.jsx(_2, {
          itemId: i.id,
          namespaceId: i.namespaceId,
          colorsAvailable: i.colorsAvailable,
          currentColor: i.color,
          capacityAvailable: i.capacityAvailable,
          currentCapacity: i.capacity,
        }),
        f.jsx(y2, {
          priceDiscount: i.priceDiscount,
          priceRegular: i.priceRegular,
        }),
        f.jsx(g2, {
          description: i.description,
          screen: i.screen,
          resolution: i.resolution,
          capacity: i.capacity,
          ram: i.ram,
        }),
        f.jsx(p2, {
          id: i.id,
          screen: i.screen,
          resolution: i.resolution,
          processor: i.processor,
          ram: i.ram,
          capacity: i.capacity,
          camera: i.camera,
          zoom: i.zoom,
          cell: i.cell,
        }),
        f.jsx(b2, {}),
      ],
    }),
  x2 = () => {
    const { category: i, productId: o } = ff(),
      d = sf(),
      [s, h] = j.useState(null),
      [m, g] = j.useState(!0),
      [A, b] = j.useState(!1);
    return (
      j.useEffect(() => {
        if (!i || !o) return;
        (g(!0), b(!1));
        const _ = setTimeout(() => {
          Q_(i, o)
            .then((S) => {
              (h(S), g(!1));
            })
            .catch(() => {
              (b(!0), g(!1));
            });
        }, 1e3);
        return () => clearTimeout(_);
      }, [i, o]),
      m ? f.jsx('div', { className: 'loader-wrapper', children: f.jsx(Pn, {}) })
      : A || !s ?
        f.jsx('div', {
          className: 'product-details-page',
          children: f.jsxs('div', {
            className: 'product-not-found',
            children: [
              f.jsx(Ja, {}),
              f.jsxs('div', {
                className: 'product-not-found__content',
                children: [
                  f.jsx('h1', {
                    className: 'product-not-found__title',
                    children: 'Unfortunately, the product is unknown.',
                  }),
                  f.jsx('p', {
                    className: 'product-not-found__text',
                    children:
                      'We couldnt find the product youre looking for. It may have been removed or the link is outdated.',
                  }),
                  f.jsx('button', {
                    className: 'product-not-found__button',
                    onClick: () => d(-1),
                    children: 'Go back',
                  }),
                ],
              }),
            ],
          }),
        })
      : f.jsxs('div', {
          className: 'product-details-page',
          children: [
            f.jsx(Ja, {}),
            f.jsx(tm, {}),
            f.jsx('div', {
              className: 'product-header',
              children: f.jsx('h1', {
                className: 'product-title',
                children: s.name,
              }),
            }),
            f.jsx(S2, { product: s }),
          ],
        })
    );
  },
  E2 = () =>
    f.jsxs('div', {
      className: 'App',
      children: [
        f.jsx(D_, {}),
        f.jsx('div', {
          className: 'container',
          children: f.jsxs(O1, {
            children: [
              f.jsx(sl, { path: '/', element: f.jsx(h2, {}) }),
              f.jsx(sl, { path: '/phones', element: f.jsx(cy, {}) }),
              f.jsx(sl, { path: '/tablets', element: f.jsx(Iy, {}) }),
              f.jsx(sl, { path: '/accessories', element: f.jsx(yy, {}) }),
              f.jsx(sl, { path: '/cart', element: f.jsx(Xy, {}) }),
              f.jsx(sl, { path: '/favorites', element: f.jsx(m2, {}) }),
              f.jsx(sl, {
                path: '/:category/:productId',
                element: f.jsx(x2, {}),
              }),
              f.jsx(sl, { path: '*', element: f.jsx(wy, {}) }),
            ],
          }),
        }),
        f.jsx(X_, {}),
      ],
    });
Uv.createRoot(document.getElementById('root')).render(
  f.jsx(t_, { children: f.jsx(E2, {}) }),
);
