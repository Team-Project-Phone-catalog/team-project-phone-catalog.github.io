(function () {
  const o = document.createElement('link').relList;
  if (o && o.supports && o.supports('modulepreload')) return;
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) s(h);
  new MutationObserver((h) => {
    for (const m of h)
      if (m.type === 'childList')
        for (const p of m.addedNodes)
          p.tagName === 'LINK' && p.rel === 'modulepreload' && s(p);
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
var Ks = { exports: {} },
  Qn = {};
var hh;
function Ev() {
  if (hh) return Qn;
  hh = 1;
  var i = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.fragment');
  function d(s, h, m) {
    var p = null;
    if (
      (m !== void 0 && (p = '' + m),
      h.key !== void 0 && (p = '' + h.key),
      'key' in h)
    ) {
      m = {};
      for (var z in h) z !== 'key' && (m[z] = h[z]);
    } else m = h;
    return (
      (h = m.ref),
      { $$typeof: i, type: s, key: p, ref: h !== void 0 ? h : null, props: m }
    );
  }
  return ((Qn.Fragment = o), (Qn.jsx = d), (Qn.jsxs = d), Qn);
}
var mh;
function Nv() {
  return (mh || ((mh = 1), (Ks.exports = Ev())), Ks.exports);
}
var r = Nv(),
  Js = { exports: {} },
  wn = {},
  $s = { exports: {} },
  ks = {};
var vh;
function Tv() {
  return (
    vh ||
      ((vh = 1),
      (function (i) {
        function o(O, B) {
          var W = O.length;
          O.push(B);
          e: for (; 0 < W; ) {
            var ve = (W - 1) >>> 1,
              pe = O[ve];
            if (0 < h(pe, B)) ((O[ve] = B), (O[W] = pe), (W = ve));
            else break e;
          }
        }
        function d(O) {
          return O.length === 0 ? null : O[0];
        }
        function s(O) {
          if (O.length === 0) return null;
          var B = O[0],
            W = O.pop();
          if (W !== B) {
            O[0] = W;
            e: for (var ve = 0, pe = O.length, b = pe >>> 1; ve < b; ) {
              var U = 2 * (ve + 1) - 1,
                q = O[U],
                X = U + 1,
                ee = O[X];
              if (0 > h(q, W))
                X < pe && 0 > h(ee, q) ?
                  ((O[ve] = ee), (O[X] = W), (ve = X))
                : ((O[ve] = q), (O[U] = W), (ve = U));
              else if (X < pe && 0 > h(ee, W))
                ((O[ve] = ee), (O[X] = W), (ve = X));
              else break e;
            }
          }
          return B;
        }
        function h(O, B) {
          var W = O.sortIndex - B.sortIndex;
          return W !== 0 ? W : O.id - B.id;
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
          var p = Date,
            z = p.now();
          i.unstable_now = function () {
            return p.now() - z;
          };
        }
        var y = [],
          _ = [],
          C = 1,
          T = null,
          H = 3,
          w = !1,
          F = !1,
          Z = !1,
          G = !1,
          K = typeof setTimeout == 'function' ? setTimeout : null,
          Y = typeof clearTimeout == 'function' ? clearTimeout : null,
          k = typeof setImmediate < 'u' ? setImmediate : null;
        function xe(O) {
          for (var B = d(_); B !== null; ) {
            if (B.callback === null) s(_);
            else if (B.startTime <= O)
              (s(_), (B.sortIndex = B.expirationTime), o(y, B));
            else break;
            B = d(_);
          }
        }
        function Se(O) {
          if (((Z = !1), xe(O), !F))
            if (d(y) !== null) ((F = !0), ze || ((ze = !0), tt()));
            else {
              var B = d(_);
              B !== null && Mt(Se, B.startTime - O);
            }
        }
        var ze = !1,
          I = -1,
          Re = 5,
          Ve = -1;
        function pt() {
          return G ? !0 : !(i.unstable_now() - Ve < Re);
        }
        function qt() {
          if (((G = !1), ze)) {
            var O = i.unstable_now();
            Ve = O;
            var B = !0;
            try {
              e: {
                ((F = !1), Z && ((Z = !1), Y(I), (I = -1)), (w = !0));
                var W = H;
                try {
                  t: {
                    for (
                      xe(O), T = d(y);
                      T !== null && !(T.expirationTime > O && pt());
                    ) {
                      var ve = T.callback;
                      if (typeof ve == 'function') {
                        ((T.callback = null), (H = T.priorityLevel));
                        var pe = ve(T.expirationTime <= O);
                        if (((O = i.unstable_now()), typeof pe == 'function')) {
                          ((T.callback = pe), xe(O), (B = !0));
                          break t;
                        }
                        (T === d(y) && s(y), xe(O));
                      } else s(y);
                      T = d(y);
                    }
                    if (T !== null) B = !0;
                    else {
                      var b = d(_);
                      (b !== null && Mt(Se, b.startTime - O), (B = !1));
                    }
                  }
                  break e;
                } finally {
                  ((T = null), (H = W), (w = !1));
                }
                B = void 0;
              }
            } finally {
              B ? tt() : (ze = !1);
            }
          }
        }
        var tt;
        if (typeof k == 'function')
          tt = function () {
            k(qt);
          };
        else if (typeof MessageChannel < 'u') {
          var ql = new MessageChannel(),
            wt = ql.port2;
          ((ql.port1.onmessage = qt),
            (tt = function () {
              wt.postMessage(null);
            }));
        } else
          tt = function () {
            K(qt, 0);
          };
        function Mt(O, B) {
          I = K(function () {
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
            var W = H;
            H = B;
            try {
              return O();
            } finally {
              H = W;
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
            var W = H;
            H = O;
            try {
              return B();
            } finally {
              H = W;
            }
          }),
          (i.unstable_scheduleCallback = function (O, B, W) {
            var ve = i.unstable_now();
            switch (
              (typeof W == 'object' && W !== null ?
                ((W = W.delay),
                (W = typeof W == 'number' && 0 < W ? ve + W : ve))
              : (W = ve),
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
              (pe = W + pe),
              (O = {
                id: C++,
                callback: B,
                priorityLevel: O,
                startTime: W,
                expirationTime: pe,
                sortIndex: -1,
              }),
              W > ve ?
                ((O.sortIndex = W),
                o(_, O),
                d(y) === null &&
                  O === d(_) &&
                  (Z ? (Y(I), (I = -1)) : (Z = !0), Mt(Se, W - ve)))
              : ((O.sortIndex = pe),
                o(y, O),
                F || w || ((F = !0), ze || ((ze = !0), tt()))),
              O
            );
          }),
          (i.unstable_shouldYield = pt),
          (i.unstable_wrapCallback = function (O) {
            var B = H;
            return function () {
              var W = H;
              H = B;
              try {
                return O.apply(this, arguments);
              } finally {
                H = W;
              }
            };
          }));
      })(ks)),
    ks
  );
}
var _h;
function jv() {
  return (_h || ((_h = 1), ($s.exports = Tv())), $s.exports);
}
var Ws = { exports: {} },
  P = {};
var yh;
function zv() {
  if (yh) return P;
  yh = 1;
  var i = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.portal'),
    d = Symbol.for('react.fragment'),
    s = Symbol.for('react.strict_mode'),
    h = Symbol.for('react.profiler'),
    m = Symbol.for('react.consumer'),
    p = Symbol.for('react.context'),
    z = Symbol.for('react.forward_ref'),
    y = Symbol.for('react.suspense'),
    _ = Symbol.for('react.memo'),
    C = Symbol.for('react.lazy'),
    T = Symbol.for('react.activity'),
    H = Symbol.iterator;
  function w(b) {
    return b === null || typeof b != 'object' ?
        null
      : ((b = (H && b[H]) || b['@@iterator']),
        typeof b == 'function' ? b : null);
  }
  var F = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Z = Object.assign,
    G = {};
  function K(b, U, q) {
    ((this.props = b),
      (this.context = U),
      (this.refs = G),
      (this.updater = q || F));
  }
  ((K.prototype.isReactComponent = {}),
    (K.prototype.setState = function (b, U) {
      if (typeof b != 'object' && typeof b != 'function' && b != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, b, U, 'setState');
    }),
    (K.prototype.forceUpdate = function (b) {
      this.updater.enqueueForceUpdate(this, b, 'forceUpdate');
    }));
  function Y() {}
  Y.prototype = K.prototype;
  function k(b, U, q) {
    ((this.props = b),
      (this.context = U),
      (this.refs = G),
      (this.updater = q || F));
  }
  var xe = (k.prototype = new Y());
  ((xe.constructor = k), Z(xe, K.prototype), (xe.isPureReactComponent = !0));
  var Se = Array.isArray;
  function ze() {}
  var I = { H: null, A: null, T: null, S: null },
    Re = Object.prototype.hasOwnProperty;
  function Ve(b, U, q) {
    var X = q.ref;
    return {
      $$typeof: i,
      type: b,
      key: U,
      ref: X !== void 0 ? X : null,
      props: q,
    };
  }
  function pt(b, U) {
    return Ve(b.type, U, b.props);
  }
  function qt(b) {
    return typeof b == 'object' && b !== null && b.$$typeof === i;
  }
  function tt(b) {
    var U = { '=': '=0', ':': '=2' };
    return (
      '$' +
      b.replace(/[=:]/g, function (q) {
        return U[q];
      })
    );
  }
  var ql = /\/+/g;
  function wt(b, U) {
    return typeof b == 'object' && b !== null && b.key != null ?
        tt('' + b.key)
      : U.toString(36);
  }
  function Mt(b) {
    switch (b.status) {
      case 'fulfilled':
        return b.value;
      case 'rejected':
        throw b.reason;
      default:
        switch (
          (typeof b.status == 'string' ?
            b.then(ze, ze)
          : ((b.status = 'pending'),
            b.then(
              function (U) {
                b.status === 'pending' &&
                  ((b.status = 'fulfilled'), (b.value = U));
              },
              function (U) {
                b.status === 'pending' &&
                  ((b.status = 'rejected'), (b.reason = U));
              },
            )),
          b.status)
        ) {
          case 'fulfilled':
            return b.value;
          case 'rejected':
            throw b.reason;
        }
    }
    throw b;
  }
  function O(b, U, q, X, ee) {
    var ae = typeof b;
    (ae === 'undefined' || ae === 'boolean') && (b = null);
    var de = !1;
    if (b === null) de = !0;
    else
      switch (ae) {
        case 'bigint':
        case 'string':
        case 'number':
          de = !0;
          break;
        case 'object':
          switch (b.$$typeof) {
            case i:
            case o:
              de = !0;
              break;
            case C:
              return ((de = b._init), O(de(b._payload), U, q, X, ee));
          }
      }
    if (de)
      return (
        (ee = ee(b)),
        (de = X === '' ? '.' + wt(b, 0) : X),
        Se(ee) ?
          ((q = ''),
          de != null && (q = de.replace(ql, '$&/') + '/'),
          O(ee, U, q, '', function ($a) {
            return $a;
          }))
        : ee != null &&
          (qt(ee) &&
            (ee = pt(
              ee,
              q +
                (ee.key == null || (b && b.key === ee.key) ?
                  ''
                : ('' + ee.key).replace(ql, '$&/') + '/') +
                de,
            )),
          U.push(ee)),
        1
      );
    de = 0;
    var Pe = X === '' ? '.' : X + ':';
    if (Se(b))
      for (var Oe = 0; Oe < b.length; Oe++)
        ((X = b[Oe]), (ae = Pe + wt(X, Oe)), (de += O(X, U, q, ae, ee)));
    else if (((Oe = w(b)), typeof Oe == 'function'))
      for (b = Oe.call(b), Oe = 0; !(X = b.next()).done; )
        ((X = X.value), (ae = Pe + wt(X, Oe++)), (de += O(X, U, q, ae, ee)));
    else if (ae === 'object') {
      if (typeof b.then == 'function') return O(Mt(b), U, q, X, ee);
      throw (
        (U = String(b)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (U === '[object Object]' ?
              'object with keys {' + Object.keys(b).join(', ') + '}'
            : U) +
            '). If you meant to render a collection of children, use an array instead.',
        )
      );
    }
    return de;
  }
  function B(b, U, q) {
    if (b == null) return b;
    var X = [],
      ee = 0;
    return (
      O(b, X, '', '', function (ae) {
        return U.call(q, ae, ee++);
      }),
      X
    );
  }
  function W(b) {
    if (b._status === -1) {
      var U = b._result;
      ((U = U()),
        U.then(
          function (q) {
            (b._status === 0 || b._status === -1) &&
              ((b._status = 1), (b._result = q));
          },
          function (q) {
            (b._status === 0 || b._status === -1) &&
              ((b._status = 2), (b._result = q));
          },
        ),
        b._status === -1 && ((b._status = 0), (b._result = U)));
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var ve =
      typeof reportError == 'function' ? reportError : (
        function (b) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var U = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                (
                  typeof b == 'object' &&
                  b !== null &&
                  typeof b.message == 'string'
                ) ?
                  String(b.message)
                : String(b),
              error: b,
            });
            if (!window.dispatchEvent(U)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', b);
            return;
          }
          console.error(b);
        }
      ),
    pe = {
      map: B,
      forEach: function (b, U, q) {
        B(
          b,
          function () {
            U.apply(this, arguments);
          },
          q,
        );
      },
      count: function (b) {
        var U = 0;
        return (
          B(b, function () {
            U++;
          }),
          U
        );
      },
      toArray: function (b) {
        return (
          B(b, function (U) {
            return U;
          }) || []
        );
      },
      only: function (b) {
        if (!qt(b))
          throw Error(
            'React.Children.only expected to receive a single React element child.',
          );
        return b;
      },
    };
  return (
    (P.Activity = T),
    (P.Children = pe),
    (P.Component = K),
    (P.Fragment = d),
    (P.Profiler = h),
    (P.PureComponent = k),
    (P.StrictMode = s),
    (P.Suspense = y),
    (P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I),
    (P.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (b) {
        return I.H.useMemoCache(b);
      },
    }),
    (P.cache = function (b) {
      return function () {
        return b.apply(null, arguments);
      };
    }),
    (P.cacheSignal = function () {
      return null;
    }),
    (P.cloneElement = function (b, U, q) {
      if (b == null)
        throw Error(
          'The argument must be a React element, but you passed ' + b + '.',
        );
      var X = Z({}, b.props),
        ee = b.key;
      if (U != null)
        for (ae in (U.key !== void 0 && (ee = '' + U.key), U))
          !Re.call(U, ae) ||
            ae === 'key' ||
            ae === '__self' ||
            ae === '__source' ||
            (ae === 'ref' && U.ref === void 0) ||
            (X[ae] = U[ae]);
      var ae = arguments.length - 2;
      if (ae === 1) X.children = q;
      else if (1 < ae) {
        for (var de = Array(ae), Pe = 0; Pe < ae; Pe++)
          de[Pe] = arguments[Pe + 2];
        X.children = de;
      }
      return Ve(b.type, ee, X);
    }),
    (P.createContext = function (b) {
      return (
        (b = {
          $$typeof: p,
          _currentValue: b,
          _currentValue2: b,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (b.Provider = b),
        (b.Consumer = { $$typeof: m, _context: b }),
        b
      );
    }),
    (P.createElement = function (b, U, q) {
      var X,
        ee = {},
        ae = null;
      if (U != null)
        for (X in (U.key !== void 0 && (ae = '' + U.key), U))
          Re.call(U, X) &&
            X !== 'key' &&
            X !== '__self' &&
            X !== '__source' &&
            (ee[X] = U[X]);
      var de = arguments.length - 2;
      if (de === 1) ee.children = q;
      else if (1 < de) {
        for (var Pe = Array(de), Oe = 0; Oe < de; Oe++)
          Pe[Oe] = arguments[Oe + 2];
        ee.children = Pe;
      }
      if (b && b.defaultProps)
        for (X in ((de = b.defaultProps), de))
          ee[X] === void 0 && (ee[X] = de[X]);
      return Ve(b, ae, ee);
    }),
    (P.createRef = function () {
      return { current: null };
    }),
    (P.forwardRef = function (b) {
      return { $$typeof: z, render: b };
    }),
    (P.isValidElement = qt),
    (P.lazy = function (b) {
      return { $$typeof: C, _payload: { _status: -1, _result: b }, _init: W };
    }),
    (P.memo = function (b, U) {
      return { $$typeof: _, type: b, compare: U === void 0 ? null : U };
    }),
    (P.startTransition = function (b) {
      var U = I.T,
        q = {};
      I.T = q;
      try {
        var X = b(),
          ee = I.S;
        (ee !== null && ee(q, X),
          typeof X == 'object' &&
            X !== null &&
            typeof X.then == 'function' &&
            X.then(ze, ve));
      } catch (ae) {
        ve(ae);
      } finally {
        (U !== null && q.types !== null && (U.types = q.types), (I.T = U));
      }
    }),
    (P.unstable_useCacheRefresh = function () {
      return I.H.useCacheRefresh();
    }),
    (P.use = function (b) {
      return I.H.use(b);
    }),
    (P.useActionState = function (b, U, q) {
      return I.H.useActionState(b, U, q);
    }),
    (P.useCallback = function (b, U) {
      return I.H.useCallback(b, U);
    }),
    (P.useContext = function (b) {
      return I.H.useContext(b);
    }),
    (P.useDebugValue = function () {}),
    (P.useDeferredValue = function (b, U) {
      return I.H.useDeferredValue(b, U);
    }),
    (P.useEffect = function (b, U) {
      return I.H.useEffect(b, U);
    }),
    (P.useEffectEvent = function (b) {
      return I.H.useEffectEvent(b);
    }),
    (P.useId = function () {
      return I.H.useId();
    }),
    (P.useImperativeHandle = function (b, U, q) {
      return I.H.useImperativeHandle(b, U, q);
    }),
    (P.useInsertionEffect = function (b, U) {
      return I.H.useInsertionEffect(b, U);
    }),
    (P.useLayoutEffect = function (b, U) {
      return I.H.useLayoutEffect(b, U);
    }),
    (P.useMemo = function (b, U) {
      return I.H.useMemo(b, U);
    }),
    (P.useOptimistic = function (b, U) {
      return I.H.useOptimistic(b, U);
    }),
    (P.useReducer = function (b, U, q) {
      return I.H.useReducer(b, U, q);
    }),
    (P.useRef = function (b) {
      return I.H.useRef(b);
    }),
    (P.useState = function (b) {
      return I.H.useState(b);
    }),
    (P.useSyncExternalStore = function (b, U, q) {
      return I.H.useSyncExternalStore(b, U, q);
    }),
    (P.useTransition = function () {
      return I.H.useTransition();
    }),
    (P.version = '19.2.4'),
    P
  );
}
var gh;
function nf() {
  return (gh || ((gh = 1), (Ws.exports = zv())), Ws.exports);
}
var Fs = { exports: {} },
  Fe = {};
var ph;
function Av() {
  if (ph) return Fe;
  ph = 1;
  var i = nf();
  function o(y) {
    var _ = 'https://react.dev/errors/' + y;
    if (1 < arguments.length) {
      _ += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var C = 2; C < arguments.length; C++)
        _ += '&args[]=' + encodeURIComponent(arguments[C]);
    }
    return (
      'Minified React error #' +
      y +
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
  function m(y, _, C) {
    var T =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: T == null ? null : '' + T,
      children: y,
      containerInfo: _,
      implementation: C,
    };
  }
  var p = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function z(y, _) {
    if (y === 'font') return '';
    if (typeof _ == 'string') return _ === 'use-credentials' ? _ : '';
  }
  return (
    (Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (Fe.createPortal = function (y, _) {
      var C =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_ || (_.nodeType !== 1 && _.nodeType !== 9 && _.nodeType !== 11))
        throw Error(o(299));
      return m(y, _, null, C);
    }),
    (Fe.flushSync = function (y) {
      var _ = p.T,
        C = s.p;
      try {
        if (((p.T = null), (s.p = 2), y)) return y();
      } finally {
        ((p.T = _), (s.p = C), s.d.f());
      }
    }),
    (Fe.preconnect = function (y, _) {
      typeof y == 'string' &&
        (_ ?
          ((_ = _.crossOrigin),
          (_ =
            typeof _ == 'string' ?
              _ === 'use-credentials' ?
                _
              : ''
            : void 0))
        : (_ = null),
        s.d.C(y, _));
    }),
    (Fe.prefetchDNS = function (y) {
      typeof y == 'string' && s.d.D(y);
    }),
    (Fe.preinit = function (y, _) {
      if (typeof y == 'string' && _ && typeof _.as == 'string') {
        var C = _.as,
          T = z(C, _.crossOrigin),
          H = typeof _.integrity == 'string' ? _.integrity : void 0,
          w = typeof _.fetchPriority == 'string' ? _.fetchPriority : void 0;
        C === 'style' ?
          s.d.S(y, typeof _.precedence == 'string' ? _.precedence : void 0, {
            crossOrigin: T,
            integrity: H,
            fetchPriority: w,
          })
        : C === 'script' &&
          s.d.X(y, {
            crossOrigin: T,
            integrity: H,
            fetchPriority: w,
            nonce: typeof _.nonce == 'string' ? _.nonce : void 0,
          });
      }
    }),
    (Fe.preinitModule = function (y, _) {
      if (typeof y == 'string')
        if (typeof _ == 'object' && _ !== null) {
          if (_.as == null || _.as === 'script') {
            var C = z(_.as, _.crossOrigin);
            s.d.M(y, {
              crossOrigin: C,
              integrity: typeof _.integrity == 'string' ? _.integrity : void 0,
              nonce: typeof _.nonce == 'string' ? _.nonce : void 0,
            });
          }
        } else _ == null && s.d.M(y);
    }),
    (Fe.preload = function (y, _) {
      if (
        typeof y == 'string' &&
        typeof _ == 'object' &&
        _ !== null &&
        typeof _.as == 'string'
      ) {
        var C = _.as,
          T = z(C, _.crossOrigin);
        s.d.L(y, C, {
          crossOrigin: T,
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
    (Fe.preloadModule = function (y, _) {
      if (typeof y == 'string')
        if (_) {
          var C = z(_.as, _.crossOrigin);
          s.d.m(y, {
            as: typeof _.as == 'string' && _.as !== 'script' ? _.as : void 0,
            crossOrigin: C,
            integrity: typeof _.integrity == 'string' ? _.integrity : void 0,
          });
        } else s.d.m(y);
    }),
    (Fe.requestFormReset = function (y) {
      s.d.r(y);
    }),
    (Fe.unstable_batchedUpdates = function (y, _) {
      return y(_);
    }),
    (Fe.useFormState = function (y, _, C) {
      return p.H.useFormState(y, _, C);
    }),
    (Fe.useFormStatus = function () {
      return p.H.useHostTransitionStatus();
    }),
    (Fe.version = '19.2.4'),
    Fe
  );
}
var bh;
function Cv() {
  if (bh) return Fs.exports;
  bh = 1;
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
  return (i(), (Fs.exports = Av()), Fs.exports);
}
var Sh;
function Rv() {
  if (Sh) return wn;
  Sh = 1;
  var i = jv(),
    o = nf(),
    d = Cv();
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
  function p(e) {
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
  function z(e) {
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
  function y(e) {
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
          if (u === l) return (y(n), e);
          if (u === a) return (y(n), t);
          u = u.sibling;
        }
        throw Error(s(188));
      }
      if (l.return !== a.return) ((l = n), (a = u));
      else {
        for (var c = !1, f = n.child; f; ) {
          if (f === l) {
            ((c = !0), (l = n), (a = u));
            break;
          }
          if (f === a) {
            ((c = !0), (a = n), (l = u));
            break;
          }
          f = f.sibling;
        }
        if (!c) {
          for (f = u.child; f; ) {
            if (f === l) {
              ((c = !0), (l = u), (a = n));
              break;
            }
            if (f === a) {
              ((c = !0), (a = u), (l = n));
              break;
            }
            f = f.sibling;
          }
          if (!c) throw Error(s(189));
        }
      }
      if (l.alternate !== a) throw Error(s(190));
    }
    if (l.tag !== 3) throw Error(s(188));
    return l.stateNode.current === l ? e : t;
  }
  function C(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = C(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var T = Object.assign,
    H = Symbol.for('react.element'),
    w = Symbol.for('react.transitional.element'),
    F = Symbol.for('react.portal'),
    Z = Symbol.for('react.fragment'),
    G = Symbol.for('react.strict_mode'),
    K = Symbol.for('react.profiler'),
    Y = Symbol.for('react.consumer'),
    k = Symbol.for('react.context'),
    xe = Symbol.for('react.forward_ref'),
    Se = Symbol.for('react.suspense'),
    ze = Symbol.for('react.suspense_list'),
    I = Symbol.for('react.memo'),
    Re = Symbol.for('react.lazy'),
    Ve = Symbol.for('react.activity'),
    pt = Symbol.for('react.memo_cache_sentinel'),
    qt = Symbol.iterator;
  function tt(e) {
    return e === null || typeof e != 'object' ?
        null
      : ((e = (qt && e[qt]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var ql = Symbol.for('react.client.reference');
  function wt(e) {
    if (e == null) return null;
    if (typeof e == 'function')
      return e.$$typeof === ql ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case Z:
        return 'Fragment';
      case K:
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
        case F:
          return 'Portal';
        case k:
          return e.displayName || 'Context';
        case Y:
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
        case I:
          return (
            (t = e.displayName || null),
            t !== null ? t : wt(e.type) || 'Memo'
          );
        case Re:
          ((t = e._payload), (e = e._init));
          try {
            return wt(e(t));
          } catch {}
      }
    return null;
  }
  var Mt = Array.isArray,
    O = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    B = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    W = { pending: !1, data: null, method: null, action: null },
    ve = [],
    pe = -1;
  function b(e) {
    return { current: e };
  }
  function U(e) {
    0 > pe || ((e.current = ve[pe]), (ve[pe] = null), pe--);
  }
  function q(e, t) {
    (pe++, (ve[pe] = e.current), (e.current = t));
  }
  var X = b(null),
    ee = b(null),
    ae = b(null),
    de = b(null);
  function Pe(e, t) {
    switch ((q(ae, t), q(ee, e), q(X, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Bd(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = Bd(t)), (e = qd(t, e)));
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
    (U(X), q(X, e));
  }
  function Oe() {
    (U(X), U(ee), U(ae));
  }
  function $a(e) {
    e.memoizedState !== null && q(de, e);
    var t = X.current,
      l = qd(t, e.type);
    t !== l && (q(ee, e), q(X, l));
  }
  function In(e) {
    (ee.current === e && (U(X), U(ee)),
      de.current === e && (U(de), (Ln._currentValue = W)));
  }
  var Ai, of;
  function Ll(e) {
    if (Ai === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        ((Ai = (t && t[1]) || ''),
          (of =
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
      Ai +
      e +
      of
    );
  }
  var Ci = !1;
  function Ri(e, t) {
    if (!e || Ci) return '';
    Ci = !0;
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
                } catch (A) {
                  var j = A;
                }
                Reflect.construct(e, [], D);
              } else {
                try {
                  D.call();
                } catch (A) {
                  j = A;
                }
                e.call(D.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (A) {
                j = A;
              }
              (D = e()) &&
                typeof D.catch == 'function' &&
                D.catch(function () {});
            }
          } catch (A) {
            if (A && j && typeof A.stack == 'string') return [A.stack, j.stack];
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
        f = u[1];
      if (c && f) {
        var v = c.split(`
`),
          E = f.split(`
`);
        for (
          n = a = 0;
          a < v.length && !v[a].includes('DetermineComponentFrameRoot');
        )
          a++;
        for (; n < E.length && !E[n].includes('DetermineComponentFrameRoot'); )
          n++;
        if (a === v.length || n === E.length)
          for (
            a = v.length - 1, n = E.length - 1;
            1 <= a && 0 <= n && v[a] !== E[n];
          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (v[a] !== E[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || v[a] !== E[n])) {
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
      ((Ci = !1), (Error.prepareStackTrace = l));
    }
    return (l = e ? e.displayName || e.name : '') ? Ll(l) : '';
  }
  function em(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ll(e.type);
      case 16:
        return Ll('Lazy');
      case 13:
        return e.child !== t && t !== null ?
            Ll('Suspense Fallback')
          : Ll('Suspense');
      case 19:
        return Ll('SuspenseList');
      case 0:
      case 15:
        return Ri(e.type, !1);
      case 11:
        return Ri(e.type.render, !1);
      case 1:
        return Ri(e.type, !0);
      case 31:
        return Ll('Activity');
      default:
        return '';
    }
  }
  function df(e) {
    try {
      var t = '',
        l = null;
      do ((t += em(e, l)), (l = e), (e = e.return));
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
  var Oi = Object.prototype.hasOwnProperty,
    Mi = i.unstable_scheduleCallback,
    Di = i.unstable_cancelCallback,
    tm = i.unstable_shouldYield,
    lm = i.unstable_requestPaint,
    ft = i.unstable_now,
    am = i.unstable_getCurrentPriorityLevel,
    hf = i.unstable_ImmediatePriority,
    mf = i.unstable_UserBlockingPriority,
    eu = i.unstable_NormalPriority,
    nm = i.unstable_LowPriority,
    vf = i.unstable_IdlePriority,
    um = i.log,
    im = i.unstable_setDisableYieldValue,
    ka = null,
    rt = null;
  function ol(e) {
    if (
      (typeof um == 'function' && im(e),
      rt && typeof rt.setStrictMode == 'function')
    )
      try {
        rt.setStrictMode(ka, e);
      } catch {}
  }
  var ot = Math.clz32 ? Math.clz32 : fm,
    cm = Math.log,
    sm = Math.LN2;
  function fm(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((cm(e) / sm) | 0)) | 0);
  }
  var tu = 256,
    lu = 262144,
    au = 4194304;
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
  function nu(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = e.suspendedLanes,
      c = e.pingedLanes;
    e = e.warmLanes;
    var f = a & 134217727;
    return (
      f !== 0 ?
        ((a = f & ~u),
        a !== 0 ?
          (n = Yl(a))
        : ((c &= f),
          c !== 0 ? (n = Yl(c)) : l || ((l = f & ~e), l !== 0 && (n = Yl(l)))))
      : ((f = a & ~u),
        f !== 0 ? (n = Yl(f))
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
  function Wa(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function rm(e, t) {
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
  function _f() {
    var e = au;
    return ((au <<= 1), (au & 62914560) === 0 && (au = 4194304), e);
  }
  function Ui(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Fa(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function om(e, t, l, a, n, u) {
    var c = e.pendingLanes;
    ((e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0));
    var f = e.entanglements,
      v = e.expirationTimes,
      E = e.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var R = 31 - ot(l),
        D = 1 << R;
      ((f[R] = 0), (v[R] = -1));
      var j = E[R];
      if (j !== null)
        for (E[R] = null, R = 0; R < j.length; R++) {
          var A = j[R];
          A !== null && (A.lane &= -536870913);
        }
      l &= ~D;
    }
    (a !== 0 && yf(e, a, 0),
      u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(c & ~t)));
  }
  function yf(e, t, l) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - ot(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 261930)));
  }
  function gf(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var a = 31 - ot(l),
        n = 1 << a;
      ((n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n));
    }
  }
  function pf(e, t) {
    var l = t & -t;
    return (
      (l = (l & 42) !== 0 ? 1 : Hi(l)),
      (l & (e.suspendedLanes | t)) !== 0 ? 0 : l
    );
  }
  function Hi(e) {
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
  function Bi(e) {
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
  function bf() {
    var e = B.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : ih(e.type));
  }
  function Sf(e, t) {
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
    dm = '__reactListeners$' + dl,
    hm = '__reactHandles$' + dl,
    xf = '__reactResources$' + dl,
    Pa = '__reactMarker$' + dl;
  function Li(e) {
    (delete e[Ke], delete e[lt], delete e[qi], delete e[dm], delete e[hm]);
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
          for (e = Zd(e); e !== null; ) {
            if ((l = e[Ke])) return l;
            e = Zd(e);
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
  function Ia(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function ra(e) {
    var t = e[xf];
    return (
      t ||
        (t = e[xf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Ge(e) {
    e[Pa] = !0;
  }
  var Ef = new Set(),
    Nf = {};
  function Gl(e, t) {
    (oa(e, t), oa(e + 'Capture', t));
  }
  function oa(e, t) {
    for (Nf[e] = t, e = 0; e < t.length; e++) Ef.add(t[e]);
  }
  var mm = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    Tf = {},
    jf = {};
  function vm(e) {
    return (
      Oi.call(jf, e) ? !0
      : Oi.call(Tf, e) ? !1
      : mm.test(e) ? (jf[e] = !0)
      : ((Tf[e] = !0), !1)
    );
  }
  function uu(e, t, l) {
    if (vm(t))
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
  function iu(e, t, l) {
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
  function zf(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    );
  }
  function _m(e, t, l) {
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
  function Yi(e) {
    if (!e._valueTracker) {
      var t = zf(e) ? 'checked' : 'value';
      e._valueTracker = _m(e, t, '' + e[t]);
    }
  }
  function Af(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = '';
    return (
      e &&
        (a =
          zf(e) ?
            e.checked ?
              'true'
            : 'false'
          : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function cu(e) {
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
  var ym = /[\n"\\]/g;
  function St(e) {
    return e.replace(ym, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Gi(e, t, l, a, n, u, c, f) {
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
      t != null ? Xi(e, c, bt(t))
      : l != null ? Xi(e, c, bt(l))
      : a != null && e.removeAttribute('value'),
      n == null && u != null && (e.defaultChecked = !!u),
      n != null &&
        (e.checked = n && typeof n != 'function' && typeof n != 'symbol'),
      (
        f != null &&
        typeof f != 'function' &&
        typeof f != 'symbol' &&
        typeof f != 'boolean'
      ) ?
        (e.name = '' + bt(f))
      : e.removeAttribute('name'));
  }
  function Cf(e, t, l, a, n, u, c, f) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (e.type = u),
      t != null || l != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || t != null)) {
        Yi(e);
        return;
      }
      ((l = l != null ? '' + bt(l) : ''),
        (t = t != null ? '' + bt(t) : l),
        f || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((a = a ?? n),
      (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
      (e.checked = f ? e.checked : !!a),
      (e.defaultChecked = !!a),
      c != null &&
        typeof c != 'function' &&
        typeof c != 'symbol' &&
        typeof c != 'boolean' &&
        (e.name = c),
      Yi(e));
  }
  function Xi(e, t, l) {
    (t === 'number' && cu(e.ownerDocument) === e) ||
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
  function Rf(e, t, l) {
    if (
      t != null &&
      ((t = '' + bt(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? '' + bt(l) : '';
  }
  function Of(e, t, l, a) {
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
      Yi(e));
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
  var gm = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' ',
    ),
  );
  function Mf(e, t, l) {
    var a = t.indexOf('--') === 0;
    l == null || typeof l == 'boolean' || l === '' ?
      a ? e.setProperty(t, '')
      : t === 'float' ? (e.cssFloat = '')
      : (e[t] = '')
    : a ? e.setProperty(t, l)
    : typeof l != 'number' || l === 0 || gm.has(t) ?
      t === 'float' ?
        (e.cssFloat = l)
      : (e[t] = ('' + l).trim())
    : (e[t] = l + 'px');
  }
  function Df(e, t, l) {
    if (t != null && typeof t != 'object') throw Error(s(62));
    if (((e = e.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf('--') === 0 ? e.setProperty(a, '')
          : a === 'float' ? (e.cssFloat = '')
          : (e[a] = ''));
      for (var n in t)
        ((a = t[n]), t.hasOwnProperty(n) && l[n] !== a && Mf(e, n, a));
    } else for (var u in t) t.hasOwnProperty(u) && Mf(e, u, t[u]);
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
  var pm = new Map([
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
    bm =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function su(e) {
    return bm.test('' + e) ?
        "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Vt() {}
  var wi = null;
  function Zi(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ma = null,
    va = null;
  function Uf(e) {
    var t = fa(e);
    if (t && (e = t.stateNode)) {
      var l = e[lt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (Gi(
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
                Gi(
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
              ((a = l[t]), a.form === e.form && Af(a));
          }
          break e;
        case 'textarea':
          Rf(e, l.value, l.defaultValue);
          break e;
        case 'select':
          ((t = l.value), t != null && da(e, !!l.multiple, t, !1));
      }
    }
  }
  var Vi = !1;
  function Hf(e, t, l) {
    if (Vi) return e(t, l);
    Vi = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((Vi = !1),
        (ma !== null || va !== null) &&
          (ku(), ma && ((t = ma), (e = va), (va = ma = null), Uf(t), e)))
      )
        for (t = 0; t < e.length; t++) Uf(e[t]);
    }
  }
  function en(e, t) {
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
    Ki = !1;
  if (Kt)
    try {
      var tn = {};
      (Object.defineProperty(tn, 'passive', {
        get: function () {
          Ki = !0;
        },
      }),
        window.addEventListener('test', tn, tn),
        window.removeEventListener('test', tn, tn));
    } catch {
      Ki = !1;
    }
  var hl = null,
    Ji = null,
    fu = null;
  function Bf() {
    if (fu) return fu;
    var e,
      t = Ji,
      l = t.length,
      a,
      n = 'value' in hl ? hl.value : hl.textContent,
      u = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++);
    var c = l - e;
    for (a = 1; a <= c && t[l - a] === n[u - a]; a++);
    return (fu = n.slice(e, 1 < a ? 1 - a : void 0));
  }
  function ru(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ?
        ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ou() {
    return !0;
  }
  function qf() {
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
      for (var f in e)
        e.hasOwnProperty(f) && ((l = e[f]), (this[f] = l ? l(u) : u[f]));
      return (
        (this.isDefaultPrevented =
          (
            u.defaultPrevented != null ?
              u.defaultPrevented
            : u.returnValue === !1
          ) ?
            ou
          : qf),
        (this.isPropagationStopped = qf),
        this
      );
    }
    return (
      T(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault ?
              l.preventDefault()
            : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
            (this.isDefaultPrevented = ou));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation ?
              l.stopPropagation()
            : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
            (this.isPropagationStopped = ou));
        },
        persist: function () {},
        isPersistent: ou,
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
    du = at(Xl),
    ln = T({}, Xl, { view: 0, detail: 0 }),
    Sm = at(ln),
    $i,
    ki,
    an,
    hu = T({}, ln, {
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
      getModifierState: Fi,
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
          : (e !== an &&
              (an && e.type === 'mousemove' ?
                (($i = e.screenX - an.screenX), (ki = e.screenY - an.screenY))
              : (ki = $i = 0),
              (an = e)),
            $i);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : ki;
      },
    }),
    Lf = at(hu),
    xm = T({}, hu, { dataTransfer: 0 }),
    Em = at(xm),
    Nm = T({}, ln, { relatedTarget: 0 }),
    Wi = at(Nm),
    Tm = T({}, Xl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    jm = at(Tm),
    zm = T({}, Xl, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Am = at(zm),
    Cm = T({}, Xl, { data: 0 }),
    Yf = at(Cm),
    Rm = {
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
    Om = {
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
    Mm = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function Dm(e) {
    var t = this.nativeEvent;
    return (
      t.getModifierState ? t.getModifierState(e)
      : (e = Mm[e]) ? !!t[e]
      : !1
    );
  }
  function Fi() {
    return Dm;
  }
  var Um = T({}, ln, {
      key: function (e) {
        if (e.key) {
          var t = Rm[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return (
          e.type === 'keypress' ?
            ((e = ru(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup' ?
            Om[e.keyCode] || 'Unidentified'
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
      getModifierState: Fi,
      charCode: function (e) {
        return e.type === 'keypress' ? ru(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return (
          e.type === 'keypress' ? ru(e)
          : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode
          : 0
        );
      },
    }),
    Hm = at(Um),
    Bm = T({}, hu, {
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
    Gf = at(Bm),
    qm = T({}, ln, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Fi,
    }),
    Lm = at(qm),
    Ym = T({}, Xl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Gm = at(Ym),
    Xm = T({}, hu, {
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
    Qm = at(Xm),
    wm = T({}, Xl, { newState: 0, oldState: 0 }),
    Zm = at(wm),
    Vm = [9, 13, 27, 32],
    Pi = Kt && 'CompositionEvent' in window,
    nn = null;
  Kt && 'documentMode' in document && (nn = document.documentMode);
  var Km = Kt && 'TextEvent' in window && !nn,
    Xf = Kt && (!Pi || (nn && 8 < nn && 11 >= nn)),
    Qf = ' ',
    wf = !1;
  function Zf(e, t) {
    switch (e) {
      case 'keyup':
        return Vm.indexOf(t.keyCode) !== -1;
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
  function Vf(e) {
    return (
      (e = e.detail),
      typeof e == 'object' && 'data' in e ? e.data : null
    );
  }
  var _a = !1;
  function Jm(e, t) {
    switch (e) {
      case 'compositionend':
        return Vf(t);
      case 'keypress':
        return t.which !== 32 ? null : ((wf = !0), Qf);
      case 'textInput':
        return ((e = t.data), e === Qf && wf ? null : e);
      default:
        return null;
    }
  }
  function $m(e, t) {
    if (_a)
      return e === 'compositionend' || (!Pi && Zf(e, t)) ?
          ((e = Bf()), (fu = Ji = hl = null), (_a = !1), e)
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
        return Xf && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var km = {
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
  function Kf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!km[e.type] : t === 'textarea';
  }
  function Jf(e, t, l, a) {
    (ma ?
      va ? va.push(a)
      : (va = [a])
    : (ma = a),
      (t = li(t, 'onChange')),
      0 < t.length &&
        ((l = new du('onChange', 'change', null, l, a)),
        e.push({ event: l, listeners: t })));
  }
  var un = null,
    cn = null;
  function Wm(e) {
    Rd(e, 0);
  }
  function mu(e) {
    var t = Ia(e);
    if (Af(t)) return e;
  }
  function $f(e, t) {
    if (e === 'change') return t;
  }
  var kf = !1;
  if (Kt) {
    var Ii;
    if (Kt) {
      var ec = 'oninput' in document;
      if (!ec) {
        var Wf = document.createElement('div');
        (Wf.setAttribute('oninput', 'return;'),
          (ec = typeof Wf.oninput == 'function'));
      }
      Ii = ec;
    } else Ii = !1;
    kf = Ii && (!document.documentMode || 9 < document.documentMode);
  }
  function Ff() {
    un && (un.detachEvent('onpropertychange', Pf), (cn = un = null));
  }
  function Pf(e) {
    if (e.propertyName === 'value' && mu(cn)) {
      var t = [];
      (Jf(t, cn, e, Zi(e)), Hf(Wm, t));
    }
  }
  function Fm(e, t, l) {
    e === 'focusin' ?
      (Ff(), (un = t), (cn = l), un.attachEvent('onpropertychange', Pf))
    : e === 'focusout' && Ff();
  }
  function Pm(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return mu(cn);
  }
  function Im(e, t) {
    if (e === 'click') return mu(t);
  }
  function e0(e, t) {
    if (e === 'input' || e === 'change') return mu(t);
  }
  function t0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var dt = typeof Object.is == 'function' ? Object.is : t0;
  function sn(e, t) {
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
      if (!Oi.call(t, n) || !dt(e[n], t[n])) return !1;
    }
    return !0;
  }
  function If(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function er(e, t) {
    var l = If(e);
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
      l = If(l);
    }
  }
  function tr(e, t) {
    return (
      e && t ?
        e === t ? !0
        : e && e.nodeType === 3 ? !1
        : t && t.nodeType === 3 ? tr(e, t.parentNode)
        : 'contains' in e ? e.contains(t)
        : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1
    );
  }
  function lr(e) {
    e =
      (
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
      ) ?
        e.ownerDocument.defaultView
      : window;
    for (var t = cu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == 'string';
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = cu(e.document);
    }
    return t;
  }
  function tc(e) {
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
  var l0 = Kt && 'documentMode' in document && 11 >= document.documentMode,
    ya = null,
    lc = null,
    fn = null,
    ac = !1;
  function ar(e, t, l) {
    var a =
      l.window === l ? l.document
      : l.nodeType === 9 ? l
      : l.ownerDocument;
    ac ||
      ya == null ||
      ya !== cu(a) ||
      ((a = ya),
      'selectionStart' in a && tc(a) ?
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
      (fn && sn(fn, a)) ||
        ((fn = a),
        (a = li(lc, 'onSelect')),
        0 < a.length &&
          ((t = new du('onSelect', 'select', null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = ya))));
  }
  function Ql(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l['Webkit' + e] = 'webkit' + t),
      (l['Moz' + e] = 'moz' + t),
      l
    );
  }
  var ga = {
      animationend: Ql('Animation', 'AnimationEnd'),
      animationiteration: Ql('Animation', 'AnimationIteration'),
      animationstart: Ql('Animation', 'AnimationStart'),
      transitionrun: Ql('Transition', 'TransitionRun'),
      transitionstart: Ql('Transition', 'TransitionStart'),
      transitioncancel: Ql('Transition', 'TransitionCancel'),
      transitionend: Ql('Transition', 'TransitionEnd'),
    },
    nc = {},
    nr = {};
  Kt &&
    ((nr = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete ga.animationend.animation,
      delete ga.animationiteration.animation,
      delete ga.animationstart.animation),
    'TransitionEvent' in window || delete ga.transitionend.transition);
  function wl(e) {
    if (nc[e]) return nc[e];
    if (!ga[e]) return e;
    var t = ga[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in nr) return (nc[e] = t[l]);
    return e;
  }
  var ur = wl('animationend'),
    ir = wl('animationiteration'),
    cr = wl('animationstart'),
    a0 = wl('transitionrun'),
    n0 = wl('transitionstart'),
    u0 = wl('transitioncancel'),
    sr = wl('transitionend'),
    fr = new Map(),
    uc =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  uc.push('scrollEnd');
  function Dt(e, t) {
    (fr.set(e, t), Gl(t, [e]));
  }
  var vu =
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
    ic = 0;
  function _u() {
    for (var e = pa, t = (ic = pa = 0); t < e; ) {
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
      u !== 0 && rr(l, n, u);
    }
  }
  function yu(e, t, l, a) {
    ((xt[pa++] = e),
      (xt[pa++] = t),
      (xt[pa++] = l),
      (xt[pa++] = a),
      (ic |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function cc(e, t, l, a) {
    return (yu(e, t, l, a), gu(e));
  }
  function Zl(e, t) {
    return (yu(e, null, null, t), gu(e));
  }
  function rr(e, t, l) {
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
  function gu(e) {
    if (50 < On) throw ((On = 0), (_s = null), Error(s(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var ba = {};
  function i0(e, t, l, a) {
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
    return new i0(e, t, l, a);
  }
  function sc(e) {
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
  function or(e, t) {
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
  function pu(e, t, l, a, n, u) {
    var c = 0;
    if (((a = e), typeof e == 'function')) sc(e) && (c = 1);
    else if (typeof e == 'string')
      c =
        ov(e, l, X.current) ? 26
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
        case K:
          return (
            (e = ht(12, l, t, n | 2)),
            (e.elementType = K),
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
              case k:
                c = 10;
                break e;
              case Y:
                c = 9;
                break e;
              case xe:
                c = 11;
                break e;
              case I:
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
  function fc(e, t, l) {
    return ((e = ht(6, e, null, t)), (e.lanes = l), e);
  }
  function dr(e) {
    var t = ht(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function rc(e, t, l) {
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
  var hr = new WeakMap();
  function Et(e, t) {
    if (typeof e == 'object' && e !== null) {
      var l = hr.get(e);
      return l !== void 0 ? l : (
          ((t = { value: e, source: t, stack: df(t) }), hr.set(e, t), t)
        );
    }
    return { value: e, source: t, stack: df(t) };
  }
  var Sa = [],
    xa = 0,
    bu = null,
    rn = 0,
    Nt = [],
    Tt = 0,
    ml = null,
    Lt = 1,
    Yt = '';
  function $t(e, t) {
    ((Sa[xa++] = rn), (Sa[xa++] = bu), (bu = e), (rn = t));
  }
  function mr(e, t, l) {
    ((Nt[Tt++] = Lt), (Nt[Tt++] = Yt), (Nt[Tt++] = ml), (ml = e));
    var a = Lt;
    e = Yt;
    var n = 32 - ot(a) - 1;
    ((a &= ~(1 << n)), (l += 1));
    var u = 32 - ot(t) + n;
    if (30 < u) {
      var c = n - (n % 5);
      ((u = (a & ((1 << c) - 1)).toString(32)),
        (a >>= c),
        (n -= c),
        (Lt = (1 << (32 - ot(t) + n)) | (l << n) | a),
        (Yt = u + e));
    } else ((Lt = (1 << u) | (l << n) | a), (Yt = e));
  }
  function oc(e) {
    e.return !== null && ($t(e, 1), mr(e, 1, 0));
  }
  function dc(e) {
    for (; e === bu; )
      ((bu = Sa[--xa]), (Sa[xa] = null), (rn = Sa[--xa]), (Sa[xa] = null));
    for (; e === ml; )
      ((ml = Nt[--Tt]),
        (Nt[Tt] = null),
        (Yt = Nt[--Tt]),
        (Nt[Tt] = null),
        (Lt = Nt[--Tt]),
        (Nt[Tt] = null));
  }
  function vr(e, t) {
    ((Nt[Tt++] = Lt),
      (Nt[Tt++] = Yt),
      (Nt[Tt++] = ml),
      (Lt = t.id),
      (Yt = t.overflow),
      (ml = e));
  }
  var Je = null,
    Ee = null,
    se = !1,
    vl = null,
    jt = !1,
    hc = Error(s(519));
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
    throw (on(Et(t, e)), hc);
  }
  function _r(e) {
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
        for (l = 0; l < Dn.length; l++) ue(Dn[l], t);
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
          Cf(
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
        (ue('invalid', t), Of(t, a.value, a.defaultValue, a.children));
    }
    ((l = a.children),
      (
        (typeof l != 'string' &&
          typeof l != 'number' &&
          typeof l != 'bigint') ||
        t.textContent === '' + l ||
        a.suppressHydrationWarning === !0 ||
        Ud(t.textContent, l)
      ) ?
        (a.popover != null && (ue('beforetoggle', t), ue('toggle', t)),
        a.onScroll != null && ue('scroll', t),
        a.onScrollEnd != null && ue('scrollend', t),
        a.onClick != null && (t.onclick = Vt),
        (t = !0))
      : (t = !1),
      t || _l(e, !0));
  }
  function yr(e) {
    for (Je = e.return; Je; )
      switch (Je.tag) {
        case 5:
        case 31:
        case 13:
          jt = !1;
          return;
        case 27:
        case 3:
          jt = !0;
          return;
        default:
          Je = Je.return;
      }
  }
  function Ea(e) {
    if (e !== Je) return !1;
    if (!se) return (yr(e), (se = !0), !1);
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type),
          (l =
            !(l !== 'form' && l !== 'button') || Os(e.type, e.memoizedProps))),
        (l = !l)),
      l && Ee && _l(e),
      yr(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      Ee = wd(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      Ee = wd(e);
    } else
      t === 27 ?
        ((t = Ee), Rl(e.type) ? ((e = Bs), (Bs = null), (Ee = e)) : (Ee = t))
      : (Ee = Je ? At(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Kl() {
    ((Ee = Je = null), (se = !1));
  }
  function mc() {
    var e = vl;
    return (
      e !== null &&
        (ct === null ? (ct = e) : ct.push.apply(ct, e), (vl = null)),
      e
    );
  }
  function on(e) {
    vl === null ? (vl = [e]) : vl.push(e);
  }
  var vc = b(null),
    Jl = null,
    kt = null;
  function yl(e, t, l) {
    (q(vc, t._currentValue), (t._currentValue = l));
  }
  function Wt(e) {
    ((e._currentValue = vc.current), U(vc));
  }
  function _c(e, t, l) {
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
  function yc(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var c = n.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var f = u;
          u = n;
          for (var v = 0; v < t.length; v++)
            if (f.context === t[v]) {
              ((u.lanes |= l),
                (f = u.alternate),
                f !== null && (f.lanes |= l),
                _c(u.return, l, e),
                a || (c = null));
              break e;
            }
          u = f.next;
        }
      } else if (n.tag === 18) {
        if (((c = n.return), c === null)) throw Error(s(341));
        ((c.lanes |= l),
          (u = c.alternate),
          u !== null && (u.lanes |= l),
          _c(c, l, e),
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
  function Na(e, t, l, a) {
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
          var f = n.type;
          dt(n.pendingProps.value, c.value) ||
            (e !== null ? e.push(f) : (e = [f]));
        }
      } else if (n === de.current) {
        if (((c = n.alternate), c === null)) throw Error(s(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(Ln) : (e = [Ln]));
      }
      n = n.return;
    }
    (e !== null && yc(t, e, l, a), (t.flags |= 262144));
  }
  function Su(e) {
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
    return gr(Jl, e);
  }
  function xu(e, t) {
    return (Jl === null && $l(e), gr(e, t));
  }
  function gr(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), kt === null)) {
      if (e === null) throw Error(s(308));
      ((kt = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else kt = kt.next = t;
    return l;
  }
  var c0 =
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
    s0 = i.unstable_scheduleCallback,
    f0 = i.unstable_NormalPriority,
    He = {
      $$typeof: k,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function gc() {
    return { controller: new c0(), data: new Map(), refCount: 0 };
  }
  function dn(e) {
    (e.refCount--,
      e.refCount === 0 &&
        s0(f0, function () {
          e.controller.abort();
        }));
  }
  var hn = null,
    pc = 0,
    Ta = 0,
    ja = null;
  function r0(e, t) {
    if (hn === null) {
      var l = (hn = []);
      ((pc = 0),
        (Ta = xs()),
        (ja = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        }));
    }
    return (pc++, t.then(pr, pr), t);
  }
  function pr() {
    if (--pc === 0 && hn !== null) {
      ja !== null && (ja.status = 'fulfilled');
      var e = hn;
      ((hn = null), (Ta = 0), (ja = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function o0(e, t) {
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
  var br = O.S;
  O.S = function (e, t) {
    ((nd = ft()),
      typeof t == 'object' &&
        t !== null &&
        typeof t.then == 'function' &&
        r0(e, t),
      br !== null && br(e, t));
  };
  var kl = b(null);
  function bc() {
    var e = kl.current;
    return e !== null ? e : be.pooledCache;
  }
  function Eu(e, t) {
    t === null ? q(kl, kl.current) : q(kl, t.pool);
  }
  function Sr() {
    var e = bc();
    return e === null ? null : { parent: He._currentValue, pool: e };
  }
  var za = Error(s(460)),
    Sc = Error(s(474)),
    Nu = Error(s(542)),
    Tu = { then: function () {} };
  function xr(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function Er(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(Vt, Vt), (t = l)),
      t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), Tr(e), e);
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
            throw ((e = t.reason), Tr(e), e);
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
  function Nr() {
    if (Fl === null) throw Error(s(459));
    var e = Fl;
    return ((Fl = null), e);
  }
  function Tr(e) {
    if (e === za || e === Nu) throw Error(s(483));
  }
  var Aa = null,
    mn = 0;
  function ju(e) {
    var t = mn;
    return ((mn += 1), Aa === null && (Aa = []), Er(Aa, e, t));
  }
  function vn(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function zu(e, t) {
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
  function jr(e) {
    function t(S, g) {
      if (e) {
        var x = S.deletions;
        x === null ? ((S.deletions = [g]), (S.flags |= 16)) : x.push(g);
      }
    }
    function l(S, g) {
      if (!e) return null;
      for (; g !== null; ) (t(S, g), (g = g.sibling));
      return null;
    }
    function a(S) {
      for (var g = new Map(); S !== null; )
        (S.key !== null ? g.set(S.key, S) : g.set(S.index, S), (S = S.sibling));
      return g;
    }
    function n(S, g) {
      return ((S = Jt(S, g)), (S.index = 0), (S.sibling = null), S);
    }
    function u(S, g, x) {
      return (
        (S.index = x),
        e ?
          ((x = S.alternate),
          x !== null ?
            ((x = x.index), x < g ? ((S.flags |= 67108866), g) : x)
          : ((S.flags |= 67108866), g))
        : ((S.flags |= 1048576), g)
      );
    }
    function c(S) {
      return (e && S.alternate === null && (S.flags |= 67108866), S);
    }
    function f(S, g, x, M) {
      return g === null || g.tag !== 6 ?
          ((g = fc(x, S.mode, M)), (g.return = S), g)
        : ((g = n(g, x)), (g.return = S), g);
    }
    function v(S, g, x, M) {
      var V = x.type;
      return (
        V === Z ? R(S, g, x.props.children, M, x.key)
        : (
          g !== null &&
          (g.elementType === V ||
            (typeof V == 'object' &&
              V !== null &&
              V.$$typeof === Re &&
              Wl(V) === g.type))
        ) ?
          ((g = n(g, x.props)), vn(g, x), (g.return = S), g)
        : ((g = pu(x.type, x.key, x.props, null, S.mode, M)),
          vn(g, x),
          (g.return = S),
          g)
      );
    }
    function E(S, g, x, M) {
      return (
          g === null ||
            g.tag !== 4 ||
            g.stateNode.containerInfo !== x.containerInfo ||
            g.stateNode.implementation !== x.implementation
        ) ?
          ((g = rc(x, S.mode, M)), (g.return = S), g)
        : ((g = n(g, x.children || [])), (g.return = S), g);
    }
    function R(S, g, x, M, V) {
      return g === null || g.tag !== 7 ?
          ((g = Vl(x, S.mode, M, V)), (g.return = S), g)
        : ((g = n(g, x)), (g.return = S), g);
    }
    function D(S, g, x) {
      if (
        (typeof g == 'string' && g !== '') ||
        typeof g == 'number' ||
        typeof g == 'bigint'
      )
        return ((g = fc('' + g, S.mode, x)), (g.return = S), g);
      if (typeof g == 'object' && g !== null) {
        switch (g.$$typeof) {
          case w:
            return (
              (x = pu(g.type, g.key, g.props, null, S.mode, x)),
              vn(x, g),
              (x.return = S),
              x
            );
          case F:
            return ((g = rc(g, S.mode, x)), (g.return = S), g);
          case Re:
            return ((g = Wl(g)), D(S, g, x));
        }
        if (Mt(g) || tt(g))
          return ((g = Vl(g, S.mode, x, null)), (g.return = S), g);
        if (typeof g.then == 'function') return D(S, ju(g), x);
        if (g.$$typeof === k) return D(S, xu(S, g), x);
        zu(S, g);
      }
      return null;
    }
    function j(S, g, x, M) {
      var V = g !== null ? g.key : null;
      if (
        (typeof x == 'string' && x !== '') ||
        typeof x == 'number' ||
        typeof x == 'bigint'
      )
        return V !== null ? null : f(S, g, '' + x, M);
      if (typeof x == 'object' && x !== null) {
        switch (x.$$typeof) {
          case w:
            return x.key === V ? v(S, g, x, M) : null;
          case F:
            return x.key === V ? E(S, g, x, M) : null;
          case Re:
            return ((x = Wl(x)), j(S, g, x, M));
        }
        if (Mt(x) || tt(x)) return V !== null ? null : R(S, g, x, M, null);
        if (typeof x.then == 'function') return j(S, g, ju(x), M);
        if (x.$$typeof === k) return j(S, g, xu(S, x), M);
        zu(S, x);
      }
      return null;
    }
    function A(S, g, x, M, V) {
      if (
        (typeof M == 'string' && M !== '') ||
        typeof M == 'number' ||
        typeof M == 'bigint'
      )
        return ((S = S.get(x) || null), f(g, S, '' + M, V));
      if (typeof M == 'object' && M !== null) {
        switch (M.$$typeof) {
          case w:
            return (
              (S = S.get(M.key === null ? x : M.key) || null),
              v(g, S, M, V)
            );
          case F:
            return (
              (S = S.get(M.key === null ? x : M.key) || null),
              E(g, S, M, V)
            );
          case Re:
            return ((M = Wl(M)), A(S, g, x, M, V));
        }
        if (Mt(M) || tt(M))
          return ((S = S.get(x) || null), R(g, S, M, V, null));
        if (typeof M.then == 'function') return A(S, g, x, ju(M), V);
        if (M.$$typeof === k) return A(S, g, x, xu(g, M), V);
        zu(g, M);
      }
      return null;
    }
    function L(S, g, x, M) {
      for (
        var V = null, fe = null, Q = g, le = (g = 0), ce = null;
        Q !== null && le < x.length;
        le++
      ) {
        Q.index > le ? ((ce = Q), (Q = null)) : (ce = Q.sibling);
        var re = j(S, Q, x[le], M);
        if (re === null) {
          Q === null && (Q = ce);
          break;
        }
        (e && Q && re.alternate === null && t(S, Q),
          (g = u(re, g, le)),
          fe === null ? (V = re) : (fe.sibling = re),
          (fe = re),
          (Q = ce));
      }
      if (le === x.length) return (l(S, Q), se && $t(S, le), V);
      if (Q === null) {
        for (; le < x.length; le++)
          ((Q = D(S, x[le], M)),
            Q !== null &&
              ((g = u(Q, g, le)),
              fe === null ? (V = Q) : (fe.sibling = Q),
              (fe = Q)));
        return (se && $t(S, le), V);
      }
      for (Q = a(Q); le < x.length; le++)
        ((ce = A(Q, S, le, x[le], M)),
          ce !== null &&
            (e &&
              ce.alternate !== null &&
              Q.delete(ce.key === null ? le : ce.key),
            (g = u(ce, g, le)),
            fe === null ? (V = ce) : (fe.sibling = ce),
            (fe = ce)));
      return (
        e &&
          Q.forEach(function (Hl) {
            return t(S, Hl);
          }),
        se && $t(S, le),
        V
      );
    }
    function $(S, g, x, M) {
      if (x == null) throw Error(s(151));
      for (
        var V = null, fe = null, Q = g, le = (g = 0), ce = null, re = x.next();
        Q !== null && !re.done;
        le++, re = x.next()
      ) {
        Q.index > le ? ((ce = Q), (Q = null)) : (ce = Q.sibling);
        var Hl = j(S, Q, re.value, M);
        if (Hl === null) {
          Q === null && (Q = ce);
          break;
        }
        (e && Q && Hl.alternate === null && t(S, Q),
          (g = u(Hl, g, le)),
          fe === null ? (V = Hl) : (fe.sibling = Hl),
          (fe = Hl),
          (Q = ce));
      }
      if (re.done) return (l(S, Q), se && $t(S, le), V);
      if (Q === null) {
        for (; !re.done; le++, re = x.next())
          ((re = D(S, re.value, M)),
            re !== null &&
              ((g = u(re, g, le)),
              fe === null ? (V = re) : (fe.sibling = re),
              (fe = re)));
        return (se && $t(S, le), V);
      }
      for (Q = a(Q); !re.done; le++, re = x.next())
        ((re = A(Q, S, le, re.value, M)),
          re !== null &&
            (e &&
              re.alternate !== null &&
              Q.delete(re.key === null ? le : re.key),
            (g = u(re, g, le)),
            fe === null ? (V = re) : (fe.sibling = re),
            (fe = re)));
      return (
        e &&
          Q.forEach(function (xv) {
            return t(S, xv);
          }),
        se && $t(S, le),
        V
      );
    }
    function ge(S, g, x, M) {
      if (
        (typeof x == 'object' &&
          x !== null &&
          x.type === Z &&
          x.key === null &&
          (x = x.props.children),
        typeof x == 'object' && x !== null)
      ) {
        switch (x.$$typeof) {
          case w:
            e: {
              for (var V = x.key; g !== null; ) {
                if (g.key === V) {
                  if (((V = x.type), V === Z)) {
                    if (g.tag === 7) {
                      (l(S, g.sibling),
                        (M = n(g, x.props.children)),
                        (M.return = S),
                        (S = M));
                      break e;
                    }
                  } else if (
                    g.elementType === V ||
                    (typeof V == 'object' &&
                      V !== null &&
                      V.$$typeof === Re &&
                      Wl(V) === g.type)
                  ) {
                    (l(S, g.sibling),
                      (M = n(g, x.props)),
                      vn(M, x),
                      (M.return = S),
                      (S = M));
                    break e;
                  }
                  l(S, g);
                  break;
                } else t(S, g);
                g = g.sibling;
              }
              x.type === Z ?
                ((M = Vl(x.props.children, S.mode, M, x.key)),
                (M.return = S),
                (S = M))
              : ((M = pu(x.type, x.key, x.props, null, S.mode, M)),
                vn(M, x),
                (M.return = S),
                (S = M));
            }
            return c(S);
          case F:
            e: {
              for (V = x.key; g !== null; ) {
                if (g.key === V)
                  if (
                    g.tag === 4 &&
                    g.stateNode.containerInfo === x.containerInfo &&
                    g.stateNode.implementation === x.implementation
                  ) {
                    (l(S, g.sibling),
                      (M = n(g, x.children || [])),
                      (M.return = S),
                      (S = M));
                    break e;
                  } else {
                    l(S, g);
                    break;
                  }
                else t(S, g);
                g = g.sibling;
              }
              ((M = rc(x, S.mode, M)), (M.return = S), (S = M));
            }
            return c(S);
          case Re:
            return ((x = Wl(x)), ge(S, g, x, M));
        }
        if (Mt(x)) return L(S, g, x, M);
        if (tt(x)) {
          if (((V = tt(x)), typeof V != 'function')) throw Error(s(150));
          return ((x = V.call(x)), $(S, g, x, M));
        }
        if (typeof x.then == 'function') return ge(S, g, ju(x), M);
        if (x.$$typeof === k) return ge(S, g, xu(S, x), M);
        zu(S, x);
      }
      return (
          (typeof x == 'string' && x !== '') ||
            typeof x == 'number' ||
            typeof x == 'bigint'
        ) ?
          ((x = '' + x),
          g !== null && g.tag === 6 ?
            (l(S, g.sibling), (M = n(g, x)), (M.return = S), (S = M))
          : (l(S, g), (M = fc(x, S.mode, M)), (M.return = S), (S = M)),
          c(S))
        : l(S, g);
    }
    return function (S, g, x, M) {
      try {
        mn = 0;
        var V = ge(S, g, x, M);
        return ((Aa = null), V);
      } catch (Q) {
        if (Q === za || Q === Nu) throw Q;
        var fe = ht(29, Q, null, S.mode);
        return ((fe.lanes = M), (fe.return = S), fe);
      }
    };
  }
  var Pl = jr(!0),
    zr = jr(!1),
    gl = !1;
  function xc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ec(e, t) {
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
        (t = gu(e)),
        rr(e, null, l),
        t
      );
    }
    return (yu(e, a, t, l), gu(e));
  }
  function _n(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), gf(e, l));
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
  function yn() {
    if (Tc) {
      var e = ja;
      if (e !== null) throw e;
    }
  }
  function gn(e, t, l, a) {
    Tc = !1;
    var n = e.updateQueue;
    gl = !1;
    var u = n.firstBaseUpdate,
      c = n.lastBaseUpdate,
      f = n.shared.pending;
    if (f !== null) {
      n.shared.pending = null;
      var v = f,
        E = v.next;
      ((v.next = null), c === null ? (u = E) : (c.next = E), (c = v));
      var R = e.alternate;
      R !== null &&
        ((R = R.updateQueue),
        (f = R.lastBaseUpdate),
        f !== c &&
          (f === null ? (R.firstBaseUpdate = E) : (f.next = E),
          (R.lastBaseUpdate = v)));
    }
    if (u !== null) {
      var D = n.baseState;
      ((c = 0), (R = E = v = null), (f = u));
      do {
        var j = f.lane & -536870913,
          A = j !== f.lane;
        if (A ? (ie & j) === j : (a & j) === j) {
          (j !== 0 && j === Ta && (Tc = !0),
            R !== null &&
              (R = R.next =
                {
                  lane: 0,
                  tag: f.tag,
                  payload: f.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var L = e,
              $ = f;
            j = t;
            var ge = l;
            switch ($.tag) {
              case 1:
                if (((L = $.payload), typeof L == 'function')) {
                  D = L.call(ge, D, j);
                  break e;
                }
                D = L;
                break e;
              case 3:
                L.flags = (L.flags & -65537) | 128;
              case 0:
                if (
                  ((L = $.payload),
                  (j = typeof L == 'function' ? L.call(ge, D, j) : L),
                  j == null)
                )
                  break e;
                D = T({}, D, j);
                break e;
              case 2:
                gl = !0;
            }
          }
          ((j = f.callback),
            j !== null &&
              ((e.flags |= 64),
              A && (e.flags |= 8192),
              (A = n.callbacks),
              A === null ? (n.callbacks = [j]) : A.push(j)));
        } else
          ((A = {
            lane: j,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            R === null ? ((E = R = A), (v = D)) : (R = R.next = A),
            (c |= j));
        if (((f = f.next), f === null)) {
          if (((f = n.shared.pending), f === null)) break;
          ((A = f),
            (f = A.next),
            (A.next = null),
            (n.lastBaseUpdate = A),
            (n.shared.pending = null));
        }
      } while (!0);
      (R === null && (v = D),
        (n.baseState = v),
        (n.firstBaseUpdate = E),
        (n.lastBaseUpdate = R),
        u === null && (n.shared.lanes = 0),
        (Tl |= c),
        (e.lanes = c),
        (e.memoizedState = D));
    }
  }
  function Ar(e, t) {
    if (typeof e != 'function') throw Error(s(191, e));
    e.call(t);
  }
  function Cr(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) Ar(l[e], t);
  }
  var Ca = b(null),
    Au = b(0);
  function Rr(e, t) {
    ((e = ul), q(Au, e), q(Ca, t), (ul = e | t.baseLanes));
  }
  function jc() {
    (q(Au, ul), q(Ca, Ca.current));
  }
  function zc() {
    ((ul = Au.current), U(Ca), U(Au));
  }
  var mt = b(null),
    zt = null;
  function Sl(e) {
    var t = e.alternate;
    (q(Me, Me.current & 1),
      q(mt, e),
      zt === null &&
        (t === null || Ca.current !== null || t.memoizedState !== null) &&
        (zt = e));
  }
  function Ac(e) {
    (q(Me, Me.current), q(mt, e), zt === null && (zt = e));
  }
  function Or(e) {
    e.tag === 22 ?
      (q(Me, Me.current), q(mt, e), zt === null && (zt = e))
    : xl();
  }
  function xl() {
    (q(Me, Me.current), q(mt, mt.current));
  }
  function vt(e) {
    (U(mt), zt === e && (zt = null), U(Me));
  }
  var Me = b(0);
  function Cu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || Us(l) || Hs(l)))
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
    Ru = !1,
    Ra = !1,
    Il = !1,
    Ou = 0,
    pn = 0,
    Oa = null,
    d0 = 0;
  function Ae() {
    throw Error(s(321));
  }
  function Cc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!dt(e[l], t[l])) return !1;
    return !0;
  }
  function Rc(e, t, l, a, n, u) {
    return (
      (Ft = u),
      (te = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (O.H = e === null || e.memoizedState === null ? vo : Vc),
      (Il = !1),
      (u = l(a, n)),
      (Il = !1),
      Ra && (u = Dr(t, l, a, n)),
      Mr(e),
      u
    );
  }
  function Mr(e) {
    O.H = xn;
    var t = _e !== null && _e.next !== null;
    if (((Ft = 0), (Be = _e = te = null), (Ru = !1), (pn = 0), (Oa = null), t))
      throw Error(s(300));
    e === null ||
      qe ||
      ((e = e.dependencies), e !== null && Su(e) && (qe = !0));
  }
  function Dr(e, t, l, a) {
    te = e;
    var n = 0;
    do {
      if ((Ra && (Oa = null), (pn = 0), (Ra = !1), 25 <= n))
        throw Error(s(301));
      if (((n += 1), (Be = _e = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((O.H = _o), (u = t(l, a)));
    } while (Ra);
    return u;
  }
  function h0() {
    var e = O.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? bn(t) : t),
      (e = e.useState()[0]),
      (_e !== null ? _e.memoizedState : null) !== e && (te.flags |= 1024),
      t
    );
  }
  function Oc() {
    var e = Ou !== 0;
    return ((Ou = 0), e);
  }
  function Mc(e, t, l) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l));
  }
  function Dc(e) {
    if (Ru) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      Ru = !1;
    }
    ((Ft = 0), (Be = _e = te = null), (Ra = !1), (pn = Ou = 0), (Oa = null));
  }
  function Ie() {
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
  function Mu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function bn(e) {
    var t = pn;
    return (
      (pn += 1),
      Oa === null && (Oa = []),
      (e = Er(Oa, e, t)),
      (t = te),
      (Be === null ? t.memoizedState : Be.next) === null &&
        ((t = t.alternate),
        (O.H = t === null || t.memoizedState === null ? vo : Vc)),
      e
    );
  }
  function Du(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return bn(e);
      if (e.$$typeof === k) return $e(e);
    }
    throw Error(s(438, String(e)));
  }
  function Uc(e) {
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
      l === null && ((l = Mu()), (te.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = pt;
    return (t.index++, l);
  }
  function Pt(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Uu(e) {
    var t = De();
    return Hc(t, _e, e);
  }
  function Hc(e, t, l) {
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
      var f = (c = null),
        v = null,
        E = t,
        R = !1;
      do {
        var D = E.lane & -536870913;
        if (D !== E.lane ? (ie & D) === D : (Ft & D) === D) {
          var j = E.revertLane;
          if (j === 0)
            (v !== null &&
              (v = v.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: E.action,
                  hasEagerState: E.hasEagerState,
                  eagerState: E.eagerState,
                  next: null,
                }),
              D === Ta && (R = !0));
          else if ((Ft & j) === j) {
            ((E = E.next), j === Ta && (R = !0));
            continue;
          } else
            ((D = {
              lane: 0,
              revertLane: E.revertLane,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null,
            }),
              v === null ? ((f = v = D), (c = u)) : (v = v.next = D),
              (te.lanes |= j),
              (Tl |= j));
          ((D = E.action),
            Il && l(u, D),
            (u = E.hasEagerState ? E.eagerState : l(u, D)));
        } else
          ((j = {
            lane: D,
            revertLane: E.revertLane,
            gesture: E.gesture,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null,
          }),
            v === null ? ((f = v = j), (c = u)) : (v = v.next = j),
            (te.lanes |= D),
            (Tl |= D));
        E = E.next;
      } while (E !== null && E !== t);
      if (
        (v === null ? (c = u) : (v.next = f),
        !dt(u, e.memoizedState) && ((qe = !0), R && ((l = ja), l !== null)))
      )
        throw l;
      ((e.memoizedState = u),
        (e.baseState = c),
        (e.baseQueue = v),
        (a.lastRenderedState = u));
    }
    return (n === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function Bc(e) {
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
      (dt(u, t.memoizedState) || (qe = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (l.lastRenderedState = u));
    }
    return [u, a];
  }
  function Ur(e, t, l) {
    var a = te,
      n = De(),
      u = se;
    if (u) {
      if (l === void 0) throw Error(s(407));
      l = l();
    } else l = t();
    var c = !dt((_e || n).memoizedState, l);
    if (
      (c && ((n.memoizedState = l), (qe = !0)),
      (n = n.queue),
      Yc(qr.bind(null, a, n, e), [e]),
      n.getSnapshot !== t || c || (Be !== null && Be.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Ma(9, { destroy: void 0 }, Br.bind(null, a, n, l, t), null),
        be === null)
      )
        throw Error(s(349));
      u || (Ft & 127) !== 0 || Hr(a, t, l);
    }
    return l;
  }
  function Hr(e, t, l) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = te.updateQueue),
      t === null ?
        ((t = Mu()), (te.updateQueue = t), (t.stores = [e]))
      : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e)));
  }
  function Br(e, t, l, a) {
    ((t.value = l), (t.getSnapshot = a), Lr(t) && Yr(e));
  }
  function qr(e, t, l) {
    return l(function () {
      Lr(t) && Yr(e);
    });
  }
  function Lr(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !dt(e, l);
    } catch {
      return !0;
    }
  }
  function Yr(e) {
    var t = Zl(e, 2);
    t !== null && st(t, e, 2);
  }
  function qc(e) {
    var t = Ie();
    if (typeof e == 'function') {
      var l = e;
      if (((e = l()), Il)) {
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
        lastRenderedReducer: Pt,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Gr(e, t, l, a) {
    return ((e.baseState = l), Hc(e, _e, typeof a == 'function' ? a : Pt));
  }
  function m0(e, t, l, a, n) {
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
          ((u.next = t.pending = u), Xr(t, u))
        : ((u.next = l.next), (t.pending = l.next = u)));
    }
  }
  function Xr(e, t) {
    var l = t.action,
      a = t.payload,
      n = e.state;
    if (t.isTransition) {
      var u = O.T,
        c = {};
      O.T = c;
      try {
        var f = l(n, a),
          v = O.S;
        (v !== null && v(c, f), Qr(e, t, f));
      } catch (E) {
        Lc(e, t, E);
      } finally {
        (u !== null && c.types !== null && (u.types = c.types), (O.T = u));
      }
    } else
      try {
        ((u = l(n, a)), Qr(e, t, u));
      } catch (E) {
        Lc(e, t, E);
      }
  }
  function Qr(e, t, l) {
    l !== null && typeof l == 'object' && typeof l.then == 'function' ?
      l.then(
        function (a) {
          wr(e, t, a);
        },
        function (a) {
          return Lc(e, t, a);
        },
      )
    : wr(e, t, l);
  }
  function wr(e, t, l) {
    ((t.status = 'fulfilled'),
      (t.value = l),
      Zr(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), Xr(e, l))));
  }
  function Lc(e, t, l) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = 'rejected'), (t.reason = l), Zr(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function Zr(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Vr(e, t) {
    return t;
  }
  function Kr(e, t) {
    if (se) {
      var l = be.formState;
      if (l !== null) {
        e: {
          var a = te;
          if (se) {
            if (Ee) {
              t: {
                for (var n = Ee, u = jt; n.nodeType !== 8; ) {
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
      (l = Ie()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vr,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = oo.bind(null, te, a)),
      (a.dispatch = l),
      (a = qc(!1)),
      (u = Zc.bind(null, te, !1, a.queue)),
      (a = Ie()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = n),
      (l = m0.bind(null, te, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    );
  }
  function Jr(e) {
    var t = De();
    return $r(t, _e, e);
  }
  function $r(e, t, l) {
    if (
      ((t = Hc(e, t, Vr)[0]),
      (e = Uu(Pt)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var a = bn(t);
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
        Ma(9, { destroy: void 0 }, v0.bind(null, n, l), null)),
      [a, u, e]
    );
  }
  function v0(e, t) {
    e.action = t;
  }
  function kr(e) {
    var t = De(),
      l = _e;
    if (l !== null) return $r(t, l, e);
    (De(), (t = t.memoizedState), (l = De()));
    var a = l.queue.dispatch;
    return ((l.memoizedState = e), [t, a, !1]);
  }
  function Ma(e, t, l, a) {
    return (
      (e = { tag: e, create: l, deps: a, inst: t, next: null }),
      (t = te.updateQueue),
      t === null && ((t = Mu()), (te.updateQueue = t)),
      (l = t.lastEffect),
      l === null ?
        (t.lastEffect = e.next = e)
      : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function Wr() {
    return De().memoizedState;
  }
  function Hu(e, t, l, a) {
    var n = Ie();
    ((te.flags |= e),
      (n.memoizedState = Ma(
        1 | t,
        { destroy: void 0 },
        l,
        a === void 0 ? null : a,
      )));
  }
  function Bu(e, t, l, a) {
    var n = De();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    _e !== null && a !== null && Cc(a, _e.memoizedState.deps) ?
      (n.memoizedState = Ma(t, u, l, a))
    : ((te.flags |= e), (n.memoizedState = Ma(1 | t, u, l, a)));
  }
  function Fr(e, t) {
    Hu(8390656, 8, e, t);
  }
  function Yc(e, t) {
    Bu(2048, 8, e, t);
  }
  function _0(e) {
    te.flags |= 4;
    var t = te.updateQueue;
    if (t === null) ((t = Mu()), (te.updateQueue = t), (t.events = [e]));
    else {
      var l = t.events;
      l === null ? (t.events = [e]) : l.push(e);
    }
  }
  function Pr(e) {
    var t = De().memoizedState;
    return (
      _0({ ref: t, nextImpl: e }),
      function () {
        if ((oe & 2) !== 0) throw Error(s(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Ir(e, t) {
    return Bu(4, 2, e, t);
  }
  function eo(e, t) {
    return Bu(4, 4, e, t);
  }
  function to(e, t) {
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
  function lo(e, t, l) {
    ((l = l != null ? l.concat([e]) : null), Bu(4, 4, to.bind(null, t, e), l));
  }
  function Gc() {}
  function ao(e, t) {
    var l = De();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && Cc(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
  }
  function no(e, t) {
    var l = De();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && Cc(t, a[1])) return a[0];
    if (((a = e()), Il)) {
      ol(!0);
      try {
        e();
      } finally {
        ol(!1);
      }
    }
    return ((l.memoizedState = [a, t]), a);
  }
  function Xc(e, t, l) {
    return l === void 0 || ((Ft & 1073741824) !== 0 && (ie & 261930) === 0) ?
        (e.memoizedState = t)
      : ((e.memoizedState = l), (e = id()), (te.lanes |= e), (Tl |= e), l);
  }
  function uo(e, t, l, a) {
    return (
      dt(l, t) ? l
      : Ca.current !== null ? ((e = Xc(e, l, a)), dt(e, t) || (qe = !0), e)
      : (Ft & 42) === 0 || ((Ft & 1073741824) !== 0 && (ie & 261930) === 0) ?
        ((qe = !0), (e.memoizedState = l))
      : ((e = id()), (te.lanes |= e), (Tl |= e), t)
    );
  }
  function io(e, t, l, a, n) {
    var u = B.p;
    B.p = u !== 0 && 8 > u ? u : 8;
    var c = O.T,
      f = {};
    ((O.T = f), Zc(e, !1, t, l));
    try {
      var v = n(),
        E = O.S;
      if (
        (E !== null && E(f, v),
        v !== null && typeof v == 'object' && typeof v.then == 'function')
      ) {
        var R = o0(v, a);
        Sn(e, t, R, gt(e));
      } else Sn(e, t, a, gt(e));
    } catch (D) {
      Sn(e, t, { then: function () {}, status: 'rejected', reason: D }, gt());
    } finally {
      ((B.p = u),
        c !== null && f.types !== null && (c.types = f.types),
        (O.T = c));
    }
  }
  function y0() {}
  function Qc(e, t, l, a) {
    if (e.tag !== 5) throw Error(s(476));
    var n = co(e).queue;
    io(
      e,
      n,
      t,
      W,
      l === null ? y0 : (
        function () {
          return (so(e), l(a));
        }
      ),
    );
  }
  function co(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: W,
      baseState: W,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Pt,
        lastRenderedState: W,
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
          lastRenderedReducer: Pt,
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
  function so(e) {
    var t = co(e);
    (t.next === null && (t = e.alternate.memoizedState),
      Sn(e, t.next.queue, {}, gt()));
  }
  function wc() {
    return $e(Ln);
  }
  function fo() {
    return De().memoizedState;
  }
  function ro() {
    return De().memoizedState;
  }
  function g0(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = gt();
          e = pl(l);
          var a = bl(t, e, l);
          (a !== null && (st(a, t, l), _n(a, t, l)),
            (t = { cache: gc() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function p0(e, t, l) {
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
        ho(t, l)
      : ((l = cc(e, t, l, a)), l !== null && (st(l, e, a), mo(l, t, a))));
  }
  function oo(e, t, l) {
    var a = gt();
    Sn(e, t, l, a);
  }
  function Sn(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (qu(e)) ho(t, n);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var c = t.lastRenderedState,
            f = u(c, l);
          if (((n.hasEagerState = !0), (n.eagerState = f), dt(f, c)))
            return (yu(e, t, n, 0), be === null && _u(), !1);
        } catch {}
      if (((l = cc(e, t, n, a)), l !== null))
        return (st(l, e, a), mo(l, t, a), !0);
    }
    return !1;
  }
  function Zc(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: xs(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      qu(e))
    ) {
      if (t) throw Error(s(479));
    } else ((t = cc(e, l, a, 2)), t !== null && st(t, e, 2));
  }
  function qu(e) {
    var t = e.alternate;
    return e === te || (t !== null && t === te);
  }
  function ho(e, t) {
    Ra = Ru = !0;
    var l = e.pending;
    (l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t));
  }
  function mo(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), gf(e, l));
    }
  }
  var xn = {
    readContext: $e,
    use: Du,
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
  xn.useEffectEvent = Ae;
  var vo = {
      readContext: $e,
      use: Du,
      useCallback: function (e, t) {
        return ((Ie().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: $e,
      useEffect: Fr,
      useImperativeHandle: function (e, t, l) {
        ((l = l != null ? l.concat([e]) : null),
          Hu(4194308, 4, to.bind(null, t, e), l));
      },
      useLayoutEffect: function (e, t) {
        return Hu(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Hu(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = Ie();
        t = t === void 0 ? null : t;
        var a = e();
        if (Il) {
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
        var a = Ie();
        if (l !== void 0) {
          var n = l(t);
          if (Il) {
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
          (e = e.dispatch = p0.bind(null, te, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ie();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = qc(e);
        var t = e.queue,
          l = oo.bind(null, te, t);
        return ((t.dispatch = l), [e.memoizedState, l]);
      },
      useDebugValue: Gc,
      useDeferredValue: function (e, t) {
        var l = Ie();
        return Xc(l, e, t);
      },
      useTransition: function () {
        var e = qc(!1);
        return (
          (e = io.bind(null, te, e.queue, !0, !1)),
          (Ie().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, l) {
        var a = te,
          n = Ie();
        if (se) {
          if (l === void 0) throw Error(s(407));
          l = l();
        } else {
          if (((l = t()), be === null)) throw Error(s(349));
          (ie & 127) !== 0 || Hr(a, t, l);
        }
        n.memoizedState = l;
        var u = { value: l, getSnapshot: t };
        return (
          (n.queue = u),
          Fr(qr.bind(null, a, u, e), [e]),
          (a.flags |= 2048),
          Ma(9, { destroy: void 0 }, Br.bind(null, a, u, l, t), null),
          l
        );
      },
      useId: function () {
        var e = Ie(),
          t = be.identifierPrefix;
        if (se) {
          var l = Yt,
            a = Lt;
          ((l = (a & ~(1 << (32 - ot(a) - 1))).toString(32) + l),
            (t = '_' + t + 'R_' + l),
            (l = Ou++),
            0 < l && (t += 'H' + l.toString(32)),
            (t += '_'));
        } else ((l = d0++), (t = '_' + t + 'r_' + l.toString(32) + '_'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: wc,
      useFormState: Kr,
      useActionState: Kr,
      useOptimistic: function (e) {
        var t = Ie();
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
          (t = Zc.bind(null, te, !0, l)),
          (l.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Uc,
      useCacheRefresh: function () {
        return (Ie().memoizedState = g0.bind(null, te));
      },
      useEffectEvent: function (e) {
        var t = Ie(),
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
    Vc = {
      readContext: $e,
      use: Du,
      useCallback: ao,
      useContext: $e,
      useEffect: Yc,
      useImperativeHandle: lo,
      useInsertionEffect: Ir,
      useLayoutEffect: eo,
      useMemo: no,
      useReducer: Uu,
      useRef: Wr,
      useState: function () {
        return Uu(Pt);
      },
      useDebugValue: Gc,
      useDeferredValue: function (e, t) {
        var l = De();
        return uo(l, _e.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Uu(Pt)[0],
          t = De().memoizedState;
        return [typeof e == 'boolean' ? e : bn(e), t];
      },
      useSyncExternalStore: Ur,
      useId: fo,
      useHostTransitionStatus: wc,
      useFormState: Jr,
      useActionState: Jr,
      useOptimistic: function (e, t) {
        var l = De();
        return Gr(l, _e, e, t);
      },
      useMemoCache: Uc,
      useCacheRefresh: ro,
    };
  Vc.useEffectEvent = Pr;
  var _o = {
    readContext: $e,
    use: Du,
    useCallback: ao,
    useContext: $e,
    useEffect: Yc,
    useImperativeHandle: lo,
    useInsertionEffect: Ir,
    useLayoutEffect: eo,
    useMemo: no,
    useReducer: Bc,
    useRef: Wr,
    useState: function () {
      return Bc(Pt);
    },
    useDebugValue: Gc,
    useDeferredValue: function (e, t) {
      var l = De();
      return _e === null ? Xc(l, e, t) : uo(l, _e.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Bc(Pt)[0],
        t = De().memoizedState;
      return [typeof e == 'boolean' ? e : bn(e), t];
    },
    useSyncExternalStore: Ur,
    useId: fo,
    useHostTransitionStatus: wc,
    useFormState: kr,
    useActionState: kr,
    useOptimistic: function (e, t) {
      var l = De();
      return _e !== null ?
          Gr(l, _e, e, t)
        : ((l.baseState = e), [e, l.queue.dispatch]);
    },
    useMemoCache: Uc,
    useCacheRefresh: ro,
  };
  _o.useEffectEvent = Pr;
  function Kc(e, t, l, a) {
    ((t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : T({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l));
  }
  var Jc = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = gt(),
        n = pl(a);
      ((n.payload = t),
        l != null && (n.callback = l),
        (t = bl(e, n, a)),
        t !== null && (st(t, e, a), _n(t, e, a)));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = gt(),
        n = pl(a);
      ((n.tag = 1),
        (n.payload = t),
        l != null && (n.callback = l),
        (t = bl(e, n, a)),
        t !== null && (st(t, e, a), _n(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = gt(),
        a = pl(l);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = bl(e, a, l)),
        t !== null && (st(t, e, l), _n(t, e, l)));
    },
  };
  function yo(e, t, l, a, n, u, c) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function' ?
        e.shouldComponentUpdate(a, u, c)
      : t.prototype && t.prototype.isPureReactComponent ? !sn(l, a) || !sn(n, u)
      : !0
    );
  }
  function go(e, t, l, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && Jc.enqueueReplaceState(t, t.state, null));
  }
  function ea(e, t) {
    var l = t;
    if ('ref' in t) {
      l = {};
      for (var a in t) a !== 'ref' && (l[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = T({}, l));
      for (var n in e) l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  function po(e) {
    vu(e);
  }
  function bo(e) {
    console.error(e);
  }
  function So(e) {
    vu(e);
  }
  function Lu(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function xo(e, t, l) {
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
  function $c(e, t, l) {
    return (
      (l = pl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Lu(e, t);
      }),
      l
    );
  }
  function Eo(e) {
    return ((e = pl(e)), (e.tag = 3), e);
  }
  function No(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == 'function') {
      var u = a.value;
      ((e.payload = function () {
        return n(u);
      }),
        (e.callback = function () {
          xo(t, l, a);
        }));
    }
    var c = l.stateNode;
    c !== null &&
      typeof c.componentDidCatch == 'function' &&
      (e.callback = function () {
        (xo(t, l, a),
          typeof n != 'function' &&
            (jl === null ? (jl = new Set([this])) : jl.add(this)));
        var f = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: f !== null ? f : '',
        });
      });
  }
  function b0(e, t, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == 'object' && typeof a.then == 'function')
    ) {
      if (
        ((t = l.alternate),
        t !== null && Na(t, l, n, !0),
        (l = mt.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              zt === null ? Wu() : l.alternate === null && Ce === 0 && (Ce = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === Tu ?
                (l.flags |= 16384)
              : ((t = l.updateQueue),
                t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                ps(e, a, n)),
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
                ps(e, a, n)),
              !1
            );
        }
        throw Error(s(435, l.tag));
      }
      return (ps(e, a, n), Wu(), !1);
    }
    if (se)
      return (
        (t = mt.current),
        t !== null ?
          ((t.flags & 65536) === 0 && (t.flags |= 256),
          (t.flags |= 65536),
          (t.lanes = n),
          a !== hc && ((e = Error(s(422), { cause: a })), on(Et(e, l))))
        : (a !== hc && ((t = Error(s(423), { cause: a })), on(Et(t, l))),
          (e = e.current.alternate),
          (e.flags |= 65536),
          (n &= -n),
          (e.lanes |= n),
          (a = Et(a, l)),
          (n = $c(e.stateNode, a, n)),
          Nc(e, n),
          Ce !== 4 && (Ce = 2)),
        !1
      );
    var u = Error(s(520), { cause: a });
    if (
      ((u = Et(u, l)),
      Rn === null ? (Rn = [u]) : Rn.push(u),
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
            (e = $c(l.stateNode, a, e)),
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
                  (jl === null || !jl.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = Eo(n)),
              No(n, e, l, a),
              Nc(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var kc = Error(s(461)),
    qe = !1;
  function ke(e, t, l, a) {
    t.child = e === null ? zr(t, null, l, a) : Pl(t, e.child, l, a);
  }
  function To(e, t, l, a, n) {
    l = l.render;
    var u = t.ref;
    if ('ref' in a) {
      var c = {};
      for (var f in a) f !== 'ref' && (c[f] = a[f]);
    } else c = a;
    return (
      $l(t),
      (a = Rc(e, t, l, c, u, n)),
      (f = Oc()),
      e !== null && !qe ?
        (Mc(e, t, n), It(e, t, n))
      : (se && f && oc(t), (t.flags |= 1), ke(e, t, a, n), t.child)
    );
  }
  function jo(e, t, l, a, n) {
    if (e === null) {
      var u = l.type;
      return (
          typeof u == 'function' &&
            !sc(u) &&
            u.defaultProps === void 0 &&
            l.compare === null
        ) ?
          ((t.tag = 15), (t.type = u), zo(e, t, u, a, n))
        : ((e = pu(l.type, null, a, t, t.mode, n)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), !as(e, n))) {
      var c = u.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : sn), l(c, a) && e.ref === t.ref)
      )
        return It(e, t, n);
    }
    return (
      (t.flags |= 1),
      (e = Jt(u, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function zo(e, t, l, a, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (sn(u, a) && e.ref === t.ref)
        if (((qe = !1), (t.pendingProps = a = u), as(e, n)))
          (e.flags & 131072) !== 0 && (qe = !0);
        else return ((t.lanes = e.lanes), It(e, t, n));
    }
    return Wc(e, t, l, a, n);
  }
  function Ao(e, t, l, a) {
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
        return Co(e, t, u, l, a);
      }
      if ((l & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Eu(t, u !== null ? u.cachePool : null),
          u !== null ? Rr(t, u) : jc(),
          Or(t));
      else
        return (
          (a = t.lanes = 536870912),
          Co(e, t, u !== null ? u.baseLanes | l : l, l, a)
        );
    } else
      u !== null ?
        (Eu(t, u.cachePool), Rr(t, u), xl(), (t.memoizedState = null))
      : (e !== null && Eu(t, null), jc(), xl());
    return (ke(e, t, n, l), t.child);
  }
  function En(e, t) {
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
  function Co(e, t, l, a, n) {
    var u = bc();
    return (
      (u = u === null ? null : { parent: He._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: l, cachePool: u }),
      e !== null && Eu(t, null),
      jc(),
      Or(t),
      e !== null && Na(e, t, a, !0),
      (t.childLanes = n),
      null
    );
  }
  function Yu(e, t) {
    return (
      (t = Xu({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Ro(e, t, l) {
    return (
      Pl(t, e.child, null, l),
      (e = Yu(t, t.pendingProps)),
      (e.flags |= 2),
      vt(t),
      (t.memoizedState = null),
      e
    );
  }
  function S0(e, t, l) {
    var a = t.pendingProps,
      n = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (se) {
        if (a.mode === 'hidden')
          return ((e = Yu(t, a)), (t.lanes = 536870912), En(null, e));
        if (
          (Ac(t),
          (e = Ee) ?
            ((e = Qd(e, jt)),
            (e = e !== null && e.data === '&' ? e : null),
            e !== null &&
              ((t.memoizedState = {
                dehydrated: e,
                treeContext: ml !== null ? { id: Lt, overflow: Yt } : null,
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (l = dr(e)),
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
      return Yu(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var c = u.dehydrated;
      if ((Ac(t), n))
        if (t.flags & 256) ((t.flags &= -257), (t = Ro(e, t, l)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(s(558));
      else if (
        (qe || Na(e, t, l, !1), (n = (l & e.childLanes) !== 0), qe || n)
      ) {
        if (
          ((a = be),
          a !== null && ((c = pf(a, l)), c !== 0 && c !== u.retryLane))
        )
          throw ((u.retryLane = c), Zl(e, c), st(a, e, c), kc);
        (Wu(), (t = Ro(e, t, l)));
      } else
        ((e = u.treeContext),
          (Ee = At(c.nextSibling)),
          (Je = t),
          (se = !0),
          (vl = null),
          (jt = !1),
          e !== null && vr(t, e),
          (t = Yu(t, a)),
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
  function Gu(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != 'function' && typeof l != 'object') throw Error(s(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Wc(e, t, l, a, n) {
    return (
      $l(t),
      (l = Rc(e, t, l, a, void 0, n)),
      (a = Oc()),
      e !== null && !qe ?
        (Mc(e, t, n), It(e, t, n))
      : (se && a && oc(t), (t.flags |= 1), ke(e, t, l, n), t.child)
    );
  }
  function Oo(e, t, l, a, n, u) {
    return (
      $l(t),
      (t.updateQueue = null),
      (l = Dr(t, a, l, n)),
      Mr(e),
      (a = Oc()),
      e !== null && !qe ?
        (Mc(e, t, u), It(e, t, u))
      : (se && a && oc(t), (t.flags |= 1), ke(e, t, l, u), t.child)
    );
  }
  function Mo(e, t, l, a, n) {
    if (($l(t), t.stateNode === null)) {
      var u = ba,
        c = l.contextType;
      (typeof c == 'object' && c !== null && (u = $e(c)),
        (u = new l(a, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Jc),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        xc(t),
        (c = l.contextType),
        (u.context = typeof c == 'object' && c !== null ? $e(c) : ba),
        (u.state = t.memoizedState),
        (c = l.getDerivedStateFromProps),
        typeof c == 'function' && (Kc(t, l, c, a), (u.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((c = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' &&
            u.UNSAFE_componentWillMount(),
          c !== u.state && Jc.enqueueReplaceState(u, u.state, null),
          gn(t, a, u, n),
          yn(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      u = t.stateNode;
      var f = t.memoizedProps,
        v = ea(l, f);
      u.props = v;
      var E = u.context,
        R = l.contextType;
      ((c = ba), typeof R == 'object' && R !== null && (c = $e(R)));
      var D = l.getDerivedStateFromProps;
      ((R =
        typeof D == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function'),
        (f = t.pendingProps !== f),
        R ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((f || E !== c) && go(t, u, a, c)),
        (gl = !1));
      var j = t.memoizedState;
      ((u.state = j),
        gn(t, a, u, n),
        yn(),
        (E = t.memoizedState),
        f || j !== E || gl ?
          (typeof D == 'function' && (Kc(t, l, D, a), (E = t.memoizedState)),
          (v = gl || yo(t, l, v, a, j, E, c)) ?
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
            (t.memoizedState = E)),
          (u.props = a),
          (u.state = E),
          (u.context = c),
          (a = v))
        : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
          (a = !1)));
    } else {
      ((u = t.stateNode),
        Ec(e, t),
        (c = t.memoizedProps),
        (R = ea(l, c)),
        (u.props = R),
        (D = t.pendingProps),
        (j = u.context),
        (E = l.contextType),
        (v = ba),
        typeof E == 'object' && E !== null && (v = $e(E)),
        (f = l.getDerivedStateFromProps),
        (E =
          typeof f == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((c !== D || j !== v) && go(t, u, a, v)),
        (gl = !1),
        (j = t.memoizedState),
        (u.state = j),
        gn(t, a, u, n),
        yn());
      var A = t.memoizedState;
      (
        c !== D ||
        j !== A ||
        gl ||
        (e !== null && e.dependencies !== null && Su(e.dependencies))
      ) ?
        (typeof f == 'function' && (Kc(t, l, f, a), (A = t.memoizedState)),
        (
          (R =
            gl ||
            yo(t, l, R, a, j, A, v) ||
            (e !== null && e.dependencies !== null && Su(e.dependencies)))
        ) ?
          (E ||
            (typeof u.UNSAFE_componentWillUpdate != 'function' &&
              typeof u.componentWillUpdate != 'function') ||
            (typeof u.componentWillUpdate == 'function' &&
              u.componentWillUpdate(a, A, v),
            typeof u.UNSAFE_componentWillUpdate == 'function' &&
              u.UNSAFE_componentWillUpdate(a, A, v)),
          typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
        : (typeof u.componentDidUpdate != 'function' ||
            (c === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (c === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 1024),
          (t.memoizedProps = a),
          (t.memoizedState = A)),
        (u.props = a),
        (u.state = A),
        (u.context = v),
        (a = R))
      : (typeof u.componentDidUpdate != 'function' ||
          (c === e.memoizedProps && j === e.memoizedState) ||
          (t.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != 'function' ||
          (c === e.memoizedProps && j === e.memoizedState) ||
          (t.flags |= 1024),
        (a = !1));
    }
    return (
      (u = a),
      Gu(e, t),
      (a = (t.flags & 128) !== 0),
      u || a ?
        ((u = t.stateNode),
        (l =
          a && typeof l.getDerivedStateFromError != 'function' ?
            null
          : u.render()),
        (t.flags |= 1),
        e !== null && a ?
          ((t.child = Pl(t, e.child, null, n)), (t.child = Pl(t, null, l, n)))
        : ke(e, t, l, n),
        (t.memoizedState = u.state),
        (e = t.child))
      : (e = It(e, t, n)),
      e
    );
  }
  function Do(e, t, l, a) {
    return (Kl(), (t.flags |= 256), ke(e, t, l, a), t.child);
  }
  var Fc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Pc(e) {
    return { baseLanes: e, cachePool: Sr() };
  }
  function Ic(e, t, l) {
    return ((e = e !== null ? e.childLanes & ~l : 0), t && (e |= yt), e);
  }
  function Uo(e, t, l) {
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
            ((e = Qd(e, jt)),
            (e = e !== null && e.data !== '&' ? e : null),
            e !== null &&
              ((t.memoizedState = {
                dehydrated: e,
                treeContext: ml !== null ? { id: Lt, overflow: Yt } : null,
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (l = dr(e)),
              (l.return = t),
              (t.child = l),
              (Je = t),
              (Ee = null)))
          : (e = null),
          e === null)
        )
          throw _l(t);
        return (Hs(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var f = a.children;
      return (
        (a = a.fallback),
        n ?
          (xl(),
          (n = t.mode),
          (f = Xu({ mode: 'hidden', children: f }, n)),
          (a = Vl(a, n, l, null)),
          (f.return = t),
          (a.return = t),
          (f.sibling = a),
          (t.child = f),
          (a = t.child),
          (a.memoizedState = Pc(l)),
          (a.childLanes = Ic(e, c, l)),
          (t.memoizedState = Fc),
          En(null, a))
        : (Sl(t), es(t, f))
      );
    }
    var v = e.memoizedState;
    if (v !== null && ((f = v.dehydrated), f !== null)) {
      if (u)
        t.flags & 256 ? (Sl(t), (t.flags &= -257), (t = ts(e, t, l)))
        : t.memoizedState !== null ?
          (xl(), (t.child = e.child), (t.flags |= 128), (t = null))
        : (xl(),
          (f = a.fallback),
          (n = t.mode),
          (a = Xu({ mode: 'visible', children: a.children }, n)),
          (f = Vl(f, n, l, null)),
          (f.flags |= 2),
          (a.return = t),
          (f.return = t),
          (a.sibling = f),
          (t.child = a),
          Pl(t, e.child, null, l),
          (a = t.child),
          (a.memoizedState = Pc(l)),
          (a.childLanes = Ic(e, c, l)),
          (t.memoizedState = Fc),
          (t = En(null, a)));
      else if ((Sl(t), Hs(f))) {
        if (((c = f.nextSibling && f.nextSibling.dataset), c)) var E = c.dgst;
        ((c = E),
          (a = Error(s(419))),
          (a.stack = ''),
          (a.digest = c),
          on({ value: a, source: null, stack: null }),
          (t = ts(e, t, l)));
      } else if (
        (qe || Na(e, t, l, !1), (c = (l & e.childLanes) !== 0), qe || c)
      ) {
        if (
          ((c = be),
          c !== null && ((a = pf(c, l)), a !== 0 && a !== v.retryLane))
        )
          throw ((v.retryLane = a), Zl(e, a), st(c, e, a), kc);
        (Us(f) || Wu(), (t = ts(e, t, l)));
      } else
        Us(f) ?
          ((t.flags |= 192), (t.child = e.child), (t = null))
        : ((e = v.treeContext),
          (Ee = At(f.nextSibling)),
          (Je = t),
          (se = !0),
          (vl = null),
          (jt = !1),
          e !== null && vr(t, e),
          (t = es(t, a.children)),
          (t.flags |= 4096));
      return t;
    }
    return n ?
        (xl(),
        (f = a.fallback),
        (n = t.mode),
        (v = e.child),
        (E = v.sibling),
        (a = Jt(v, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = v.subtreeFlags & 65011712),
        E !== null ? (f = Jt(E, f)) : ((f = Vl(f, n, l, null)), (f.flags |= 2)),
        (f.return = t),
        (a.return = t),
        (a.sibling = f),
        (t.child = a),
        En(null, a),
        (a = t.child),
        (f = e.child.memoizedState),
        f === null ?
          (f = Pc(l))
        : ((n = f.cachePool),
          n !== null ?
            ((v = He._currentValue),
            (n = n.parent !== v ? { parent: v, pool: v } : n))
          : (n = Sr()),
          (f = { baseLanes: f.baseLanes | l, cachePool: n })),
        (a.memoizedState = f),
        (a.childLanes = Ic(e, c, l)),
        (t.memoizedState = Fc),
        En(e.child, a))
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
  function es(e, t) {
    return (
      (t = Xu({ mode: 'visible', children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Xu(e, t) {
    return ((e = ht(22, e, null, t)), (e.lanes = 0), e);
  }
  function ts(e, t, l) {
    return (
      Pl(t, e.child, null, l),
      (e = es(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Ho(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), _c(e.return, t, l));
  }
  function ls(e, t, l, a, n, u) {
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
  function Bo(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    a = a.children;
    var c = Me.current,
      f = (c & 2) !== 0;
    if (
      (f ? ((c = (c & 1) | 2), (t.flags |= 128)) : (c &= 1),
      q(Me, c),
      ke(e, t, a, l),
      (a = se ? rn : 0),
      !f && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ho(e, l, t);
        else if (e.tag === 19) Ho(e, l, t);
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
            e !== null && Cu(e) === null && (n = l),
            (l = l.sibling));
        ((l = n),
          l === null ?
            ((n = t.child), (t.child = null))
          : ((n = l.sibling), (l.sibling = null)),
          ls(t, !1, n, l, u, a));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && Cu(e) === null)) {
            t.child = n;
            break;
          }
          ((e = n.sibling), (n.sibling = l), (l = n), (n = e));
        }
        ls(t, !0, l, null, u, a);
        break;
      case 'together':
        ls(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function It(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Tl |= t.lanes),
      (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Na(e, t, l, !1), (l & t.childLanes) === 0)) return null;
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
  function as(e, t) {
    return (e.lanes & t) !== 0 ?
        !0
      : ((e = e.dependencies), !!(e !== null && Su(e)));
  }
  function x0(e, t, l) {
    switch (t.tag) {
      case 3:
        (Pe(t, t.stateNode.containerInfo),
          yl(t, He, e.memoizedState.cache),
          Kl());
        break;
      case 27:
      case 5:
        $a(t);
        break;
      case 4:
        Pe(t, t.stateNode.containerInfo);
        break;
      case 10:
        yl(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Ac(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return (
            a.dehydrated !== null ? (Sl(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0 ? Uo(e, t, l)
            : (Sl(t), (e = It(e, t, l)), e !== null ? e.sibling : null)
          );
        Sl(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (
          ((a = (l & t.childLanes) !== 0),
          a || (Na(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return Bo(e, t, l);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          q(Me, Me.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Ao(e, t, l, t.pendingProps));
      case 24:
        yl(t, He, e.memoizedState.cache);
    }
    return It(e, t, l);
  }
  function qo(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) qe = !0;
      else {
        if (!as(e, l) && (t.flags & 128) === 0) return ((qe = !1), x0(e, t, l));
        qe = (e.flags & 131072) !== 0;
      }
    else ((qe = !1), se && (t.flags & 1048576) !== 0 && mr(t, rn, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = Wl(t.elementType)), (t.type = e), typeof e == 'function'))
            sc(e) ?
              ((a = ea(e, a)), (t.tag = 1), (t = Mo(null, t, e, a, l)))
            : ((t.tag = 0), (t = Wc(null, t, e, a, l)));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === xe) {
                ((t.tag = 11), (t = To(null, t, e, a, l)));
                break e;
              } else if (n === I) {
                ((t.tag = 14), (t = jo(null, t, e, a, l)));
                break e;
              }
            }
            throw ((t = wt(e) || e), Error(s(306, t, '')));
          }
        }
        return t;
      case 0:
        return Wc(e, t, t.type, t.pendingProps, l);
      case 1:
        return ((a = t.type), (n = ea(a, t.pendingProps)), Mo(e, t, a, n, l));
      case 3:
        e: {
          if ((Pe(t, t.stateNode.containerInfo), e === null))
            throw Error(s(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          ((n = u.element), Ec(e, t), gn(t, a, null, l));
          var c = t.memoizedState;
          if (
            ((a = c.cache),
            yl(t, He, a),
            a !== u.cache && yc(t, [He], l, !0),
            yn(),
            (a = c.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = Do(e, t, a, l);
              break e;
            } else if (a !== n) {
              ((n = Et(Error(s(424)), t)), on(n), (t = Do(e, t, a, l)));
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
                  jt = !0,
                  l = zr(t, null, a, l),
                  t.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
          else {
            if ((Kl(), a === n)) {
              t = It(e, t, l);
              break e;
            }
            ke(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Gu(e, t),
          e === null ?
            (l = $d(t.type, null, t.pendingProps, null)) ?
              (t.memoizedState = l)
            : se ||
              ((l = t.type),
              (e = t.pendingProps),
              (a = ai(ae.current).createElement(l)),
              (a[Ke] = t),
              (a[lt] = e),
              We(a, l, e),
              Ge(a),
              (t.stateNode = a))
          : (t.memoizedState = $d(
              t.type,
              e.memoizedProps,
              t.pendingProps,
              e.memoizedState,
            )),
          null
        );
      case 27:
        return (
          $a(t),
          e === null &&
            se &&
            ((a = t.stateNode = Vd(t.type, t.pendingProps, ae.current)),
            (Je = t),
            (jt = !0),
            (n = Ee),
            Rl(t.type) ? ((Bs = n), (Ee = At(a.firstChild))) : (Ee = n)),
          ke(e, t, t.pendingProps.children, l),
          Gu(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            se &&
            ((n = a = Ee) &&
              ((a = P0(a, t.type, t.pendingProps, jt)),
              a !== null ?
                ((t.stateNode = a),
                (Je = t),
                (Ee = At(a.firstChild)),
                (jt = !1),
                (n = !0))
              : (n = !1)),
            n || _l(t)),
          $a(t),
          (n = t.type),
          (u = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (a = u.children),
          Os(n, u) ? (a = null) : c !== null && Os(n, c) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = Rc(e, t, h0, null, null, l)), (Ln._currentValue = n)),
          Gu(e, t),
          ke(e, t, a, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            se &&
            ((e = l = Ee) &&
              ((l = I0(l, t.pendingProps, jt)),
              l !== null ?
                ((t.stateNode = l), (Je = t), (Ee = null), (e = !0))
              : (e = !1)),
            e || _l(t)),
          null
        );
      case 13:
        return Uo(e, t, l);
      case 4:
        return (
          Pe(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = Pl(t, null, a, l)) : ke(e, t, a, l),
          t.child
        );
      case 11:
        return To(e, t, t.type, t.pendingProps, l);
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
        return jo(e, t, t.type, t.pendingProps, l);
      case 15:
        return zo(e, t, t.type, t.pendingProps, l);
      case 19:
        return Bo(e, t, l);
      case 31:
        return S0(e, t, l);
      case 22:
        return Ao(e, t, l, t.pendingProps);
      case 24:
        return (
          $l(t),
          (a = $e(He)),
          e === null ?
            ((n = bc()),
            n === null &&
              ((n = be),
              (u = gc()),
              (n.pooledCache = u),
              u.refCount++,
              u !== null && (n.pooledCacheLanes |= l),
              (n = u)),
            (t.memoizedState = { parent: a, cache: n }),
            xc(t),
            yl(t, He, n))
          : ((e.lanes & l) !== 0 && (Ec(e, t), gn(t, null, null, l), yn()),
            (n = e.memoizedState),
            (u = t.memoizedState),
            n.parent !== a ?
              ((n = { parent: a, cache: a }),
              (t.memoizedState = n),
              t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n),
              yl(t, He, a))
            : ((a = u.cache),
              yl(t, He, a),
              a !== n.cache && yc(t, [He], l, !0))),
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
  function ns(e, t, l, a, n) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (n & 335544128) === n))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (rd()) e.flags |= 8192;
        else throw ((Fl = Tu), Sc);
    } else e.flags &= -16777217;
  }
  function Lo(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Id(t)))
      if (rd()) e.flags |= 8192;
      else throw ((Fl = Tu), Sc);
  }
  function Qu(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? _f() : 536870912), (e.lanes |= t), (Ba |= t)));
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
  function Ne(e) {
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
  function E0(e, t, l) {
    var a = t.pendingProps;
    switch ((dc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ne(t), null);
      case 1:
        return (Ne(t), null);
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
              ((t.flags |= 1024), mc())),
          Ne(t),
          null
        );
      case 26:
        var n = t.type,
          u = t.memoizedState;
        return (
          e === null ?
            (el(t),
            u !== null ? (Ne(t), Lo(t, u)) : (Ne(t), ns(t, n, null, a, l)))
          : u ?
            u !== e.memoizedState ?
              (el(t), Ne(t), Lo(t, u))
            : (Ne(t), (t.flags &= -16777217))
          : ((e = e.memoizedProps), e !== a && el(t), Ne(t), ns(t, n, e, a, l)),
          null
        );
      case 27:
        if (
          (In(t),
          (l = ae.current),
          (n = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== a && el(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166));
            return (Ne(t), null);
          }
          ((e = X.current),
            Ea(t) ? _r(t) : ((e = Vd(n, a, l)), (t.stateNode = e), el(t)));
        }
        return (Ne(t), null);
      case 5:
        if ((In(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && el(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166));
            return (Ne(t), null);
          }
          if (((u = X.current), Ea(t))) _r(t);
          else {
            var c = ai(ae.current);
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
          Ne(t),
          ns(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l),
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
                Ud(e.nodeValue, l)
              )),
              e || _l(t, !0));
          } else
            ((e = ai(e).createTextNode(a)), (e[Ke] = t), (t.stateNode = e));
        }
        return (Ne(t), null);
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
            (Ne(t), (e = !1));
          } else
            ((l = mc()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = l),
              (e = !0));
          if (!e) return t.flags & 256 ? (vt(t), t) : (vt(t), null);
          if ((t.flags & 128) !== 0) throw Error(s(558));
        }
        return (Ne(t), null);
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
            (Ne(t), (n = !1));
          } else
            ((n = mc()),
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
            Ne(t),
            null)
        );
      case 4:
        return (Oe(), e === null && js(t.stateNode.containerInfo), Ne(t), null);
      case 10:
        return (Wt(t.type), Ne(t), null);
      case 19:
        if ((U(Me), (a = t.memoizedState), a === null)) return (Ne(t), null);
        if (((n = (t.flags & 128) !== 0), (u = a.rendering), u === null))
          if (n) Nn(a, !1);
          else {
            if (Ce !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = Cu(e)), u !== null)) {
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
                    (or(l, e), (l = l.sibling));
                  return (
                    q(Me, (Me.current & 1) | 2),
                    se && $t(t, a.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            a.tail !== null &&
              ft() > Ju &&
              ((t.flags |= 128), (n = !0), Nn(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((e = Cu(u)), e !== null)) {
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
                return (Ne(t), null);
            } else
              2 * ft() - a.renderingStartTime > Ju &&
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
            q(Me, n ? (l & 1) | 2 : l & 1),
            se && $t(t, a.treeForkCount),
            e)
          : (Ne(t), null);
      case 22:
      case 23:
        return (
          vt(t),
          zc(),
          (a = t.memoizedState !== null),
          e !== null ?
            (e.memoizedState !== null) !== a && (t.flags |= 8192)
          : a && (t.flags |= 8192),
          a ?
            (l & 536870912) !== 0 &&
            (t.flags & 128) === 0 &&
            (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ne(t),
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
          Ne(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function N0(e, t) {
    switch ((dc(t), t.tag)) {
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
        return (In(t), null);
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
          zc(),
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
  function Yo(e, t) {
    switch ((dc(t), t.tag)) {
      case 3:
        (Wt(He), Oe());
        break;
      case 26:
      case 27:
      case 5:
        In(t);
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
        (vt(t), zc(), e !== null && U(kl));
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
    } catch (f) {
      me(t, t.return, f);
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
              f = c.destroy;
            if (f !== void 0) {
              ((c.destroy = void 0), (n = t));
              var v = l,
                E = f;
              try {
                E();
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
  function Go(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Cr(t, l);
      } catch (a) {
        me(e, e.return, a);
      }
    }
  }
  function Xo(e, t, l) {
    ((l.props = ea(e.type, e.memoizedProps)), (l.state = e.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (a) {
      me(e, t, a);
    }
  }
  function jn(e, t) {
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
  function Qo(e) {
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
  function us(e, t, l) {
    try {
      var a = e.stateNode;
      (K0(a, e.type, l, t), (a[lt] = t));
    } catch (n) {
      me(e, e.return, n);
    }
  }
  function wo(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Rl(e.type)) ||
      e.tag === 4
    );
  }
  function is(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || wo(e.return)) return null;
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
  function cs(e, t, l) {
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
      for (cs(e, t, l), e = e.sibling; e !== null; )
        (cs(e, t, l), (e = e.sibling));
  }
  function wu(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e));
    else if (
      a !== 4 &&
      (a === 27 && Rl(e.type) && (l = e.stateNode), (e = e.child), e !== null)
    )
      for (wu(e, t, l), e = e.sibling; e !== null; )
        (wu(e, t, l), (e = e.sibling));
  }
  function Zo(e) {
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
    Le = !1,
    ss = !1,
    Vo = typeof WeakSet == 'function' ? WeakSet : Set,
    Xe = null;
  function T0(e, t) {
    if (((e = e.containerInfo), (Cs = ri), (e = lr(e)), tc(e))) {
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
              f = -1,
              v = -1,
              E = 0,
              R = 0,
              D = e,
              j = null;
            t: for (;;) {
              for (
                var A;
                D !== l || (n !== 0 && D.nodeType !== 3) || (f = c + n),
                  D !== u || (a !== 0 && D.nodeType !== 3) || (v = c + a),
                  D.nodeType === 3 && (c += D.nodeValue.length),
                  (A = D.firstChild) !== null;
              )
                ((j = D), (D = A));
              for (;;) {
                if (D === e) break t;
                if (
                  (j === l && ++E === n && (f = c),
                  j === u && ++R === a && (v = c),
                  (A = D.nextSibling) !== null)
                )
                  break;
                ((D = j), (j = D.parentNode));
              }
              D = A;
            }
            l = f === -1 || v === -1 ? null : { start: f, end: v };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      Rs = { focusedElem: e, selectionRange: l }, ri = !1, Xe = t;
      Xe !== null;
    )
      if (
        ((t = Xe), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (Xe = e));
      else
        for (; Xe !== null; ) {
          switch (((t = Xe), (u = t.alternate), (e = t.flags), t.tag)) {
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
                  var L = ea(l.type, n);
                  ((e = a.getSnapshotBeforeUpdate(L, u)),
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
                  Ds(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Ds(e);
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
            ((e.return = t.return), (Xe = e));
            break;
          }
          Xe = t.return;
        }
  }
  function Ko(e, t, l) {
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
        (a & 64 && Go(l), a & 512 && jn(l, l.return));
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
            Cr(e, t);
          } catch (c) {
            me(l, l.return, c);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Zo(l);
      case 26:
      case 5:
        (al(e, l), t === null && a & 4 && Qo(l), a & 512 && jn(l, l.return));
        break;
      case 12:
        al(e, l);
        break;
      case 31:
        (al(e, l), a & 4 && ko(e, l));
        break;
      case 13:
        (al(e, l),
          a & 4 && Wo(e, l),
          a & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = U0.bind(null, l)), ev(e, l)))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || tl), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || Le), (n = tl));
          var u = Le;
          ((tl = a),
            (Le = t) && !u ? nl(e, l, (l.subtreeFlags & 8772) !== 0) : al(e, l),
            (tl = n),
            (Le = u));
        }
        break;
      case 30:
        break;
      default:
        al(e, l);
    }
  }
  function Jo(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Jo(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Li(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Te = null,
    nt = !1;
  function ll(e, t, l) {
    for (l = l.child; l !== null; ) ($o(e, t, l), (l = l.sibling));
  }
  function $o(e, t, l) {
    if (rt && typeof rt.onCommitFiberUnmount == 'function')
      try {
        rt.onCommitFiberUnmount(ka, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (Le || Gt(l, t),
          ll(e, t, l),
          l.memoizedState ?
            l.memoizedState.count--
          : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        Le || Gt(l, t);
        var a = Te,
          n = nt;
        (Rl(l.type) && ((Te = l.stateNode), (nt = !1)),
          ll(e, t, l),
          Hn(l.stateNode),
          (Te = a),
          (nt = n));
        break;
      case 5:
        Le || Gt(l, t);
      case 6:
        if (
          ((a = Te),
          (n = nt),
          (Te = null),
          ll(e, t, l),
          (Te = a),
          (nt = n),
          Te !== null)
        )
          if (nt)
            try {
              (Te.nodeType === 9 ? Te.body
              : Te.nodeName === 'HTML' ? Te.ownerDocument.body
              : Te
              ).removeChild(l.stateNode);
            } catch (u) {
              me(l, t, u);
            }
          else
            try {
              Te.removeChild(l.stateNode);
            } catch (u) {
              me(l, t, u);
            }
        break;
      case 18:
        Te !== null &&
          (nt ?
            ((e = Te),
            Gd(
              e.nodeType === 9 ? e.body
              : e.nodeName === 'HTML' ? e.ownerDocument.body
              : e,
              l.stateNode,
            ),
            Za(e))
          : Gd(Te, l.stateNode));
        break;
      case 4:
        ((a = Te),
          (n = nt),
          (Te = l.stateNode.containerInfo),
          (nt = !0),
          ll(e, t, l),
          (Te = a),
          (nt = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (El(2, l, t), Le || El(4, l, t), ll(e, t, l));
        break;
      case 1:
        (Le ||
          (Gt(l, t),
          (a = l.stateNode),
          typeof a.componentWillUnmount == 'function' && Xo(l, t, a)),
          ll(e, t, l));
        break;
      case 21:
        ll(e, t, l);
        break;
      case 22:
        ((Le = (a = Le) || l.memoizedState !== null), ll(e, t, l), (Le = a));
        break;
      default:
        ll(e, t, l);
    }
  }
  function ko(e, t) {
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
  function Wo(e, t) {
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
  function j0(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Vo()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Vo()),
          t
        );
      default:
        throw Error(s(435, e.tag));
    }
  }
  function Zu(e, t) {
    var l = j0(e);
    t.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var n = H0.bind(null, e, a);
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
          f = c;
        e: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (Rl(f.type)) {
                ((Te = f.stateNode), (nt = !1));
                break e;
              }
              break;
            case 5:
              ((Te = f.stateNode), (nt = !1));
              break e;
            case 3:
            case 4:
              ((Te = f.stateNode.containerInfo), (nt = !0));
              break e;
          }
          f = f.return;
        }
        if (Te === null) throw Error(s(160));
        ($o(u, c, n),
          (Te = null),
          (nt = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (Fo(t, e), (t = t.sibling));
  }
  var Ut = null;
  function Fo(e, t) {
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
          a & 512 && (Le || l === null || Gt(l, l.return)),
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
          a & 512 && (Le || l === null || Gt(l, l.return)),
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
                        Ge(u),
                        (a = u));
                      break e;
                    case 'link':
                      var c = Fd('link', 'href', n).get(a + (l.href || ''));
                      if (c) {
                        for (var f = 0; f < c.length; f++)
                          if (
                            ((u = c[f]),
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
                            c.splice(f, 1);
                            break t;
                          }
                      }
                      ((u = n.createElement(a)),
                        We(u, a, l),
                        n.head.appendChild(u));
                      break;
                    case 'meta':
                      if (
                        (c = Fd('meta', 'content', n).get(
                          a + (l.content || ''),
                        ))
                      ) {
                        for (f = 0; f < c.length; f++)
                          if (
                            ((u = c[f]),
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
                            c.splice(f, 1);
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
                  ((u[Ke] = e), Ge(u), (a = u));
                }
                e.stateNode = a;
              } else Pd(n, e.type, e.stateNode);
            else e.stateNode = Wd(n, a, e.memoizedProps);
          else
            u !== a ?
              (u === null ?
                l.stateNode !== null &&
                ((l = l.stateNode), l.parentNode.removeChild(l))
              : u.count--,
              a === null ?
                Pd(n, e.type, e.stateNode)
              : Wd(n, a, e.memoizedProps))
            : a === null &&
              e.stateNode !== null &&
              us(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (ut(t, e),
          it(e),
          a & 512 && (Le || l === null || Gt(l, l.return)),
          l !== null && a & 4 && us(e, e.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (ut(t, e),
          it(e),
          a & 512 && (Le || l === null || Gt(l, l.return)),
          e.flags & 32)
        ) {
          n = e.stateNode;
          try {
            ha(n, '');
          } catch (L) {
            me(e, e.return, L);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), us(e, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (ss = !0));
        break;
      case 6:
        if ((ut(t, e), it(e), a & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          ((a = e.memoizedProps), (l = e.stateNode));
          try {
            l.nodeValue = a;
          } catch (L) {
            me(e, e.return, L);
          }
        }
        break;
      case 3:
        if (
          ((ii = null),
          (n = Ut),
          (Ut = ni(t.containerInfo)),
          ut(t, e),
          (Ut = n),
          it(e),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Za(t.containerInfo);
          } catch (L) {
            me(e, e.return, L);
          }
        ss && ((ss = !1), Po(e));
        break;
      case 4:
        ((a = Ut),
          (Ut = ni(e.stateNode.containerInfo)),
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
            a !== null && ((e.updateQueue = null), Zu(e, a))));
        break;
      case 13:
        (ut(t, e),
          it(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Ku = ft()),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Zu(e, a))));
        break;
      case 22:
        n = e.memoizedState !== null;
        var v = l !== null && l.memoizedState !== null,
          E = tl,
          R = Le;
        if (
          ((tl = E || n),
          (Le = R || v),
          ut(t, e),
          (Le = R),
          (tl = E),
          it(e),
          a & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (l === null || v || tl || Le || ta(e)),
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
                    f = v.stateNode;
                    var D = v.memoizedProps.style,
                      j =
                        D != null && D.hasOwnProperty('display') ?
                          D.display
                        : null;
                    f.style.display =
                      j == null || typeof j == 'boolean' ? '' : ('' + j).trim();
                  }
                } catch (L) {
                  me(v, v.return, L);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                v = t;
                try {
                  v.stateNode.nodeValue = n ? '' : v.memoizedProps;
                } catch (L) {
                  me(v, v.return, L);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                v = t;
                try {
                  var A = v.stateNode;
                  n ? Xd(A, !0) : Xd(v.stateNode, !1);
                } catch (L) {
                  me(v, v.return, L);
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
            l !== null && ((a.retryQueue = null), Zu(e, l))));
        break;
      case 19:
        (ut(t, e),
          it(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Zu(e, a))));
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
          if (wo(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(s(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              u = is(e);
            wu(e, u, n);
            break;
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (ha(c, ''), (l.flags &= -33));
            var f = is(e);
            wu(e, f, c);
            break;
          case 3:
          case 4:
            var v = l.stateNode.containerInfo,
              E = is(e);
            cs(e, E, v);
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
  function Po(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Po(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function al(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Ko(e, t.alternate, t), (t = t.sibling));
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
          (typeof l.componentWillUnmount == 'function' && Xo(t, t.return, l),
            ta(t));
          break;
        case 27:
          Hn(t.stateNode);
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
            } catch (E) {
              me(a, a.return, E);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var f = a.stateNode;
            try {
              var v = n.shared.hiddenCallbacks;
              if (v !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < v.length; n++)
                  Ar(v[n], f);
            } catch (E) {
              me(a, a.return, E);
            }
          }
          (l && c & 64 && Go(u), jn(u, u.return));
          break;
        case 27:
          Zo(u);
        case 26:
        case 5:
          (nl(n, u, l), l && a === null && c & 4 && Qo(u), jn(u, u.return));
          break;
        case 12:
          nl(n, u, l);
          break;
        case 31:
          (nl(n, u, l), l && c & 4 && ko(n, u));
          break;
        case 13:
          (nl(n, u, l), l && c & 4 && Wo(n, u));
          break;
        case 22:
          (u.memoizedState === null && nl(n, u, l), jn(u, u.return));
          break;
        case 30:
          break;
        default:
          nl(n, u, l);
      }
      t = t.sibling;
    }
  }
  function fs(e, t) {
    var l = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && dn(l)));
  }
  function rs(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && dn(e)));
  }
  function Ht(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Io(e, t, l, a), (t = t.sibling));
  }
  function Io(e, t, l, a) {
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
            t !== e && (t.refCount++, e != null && dn(e))));
        break;
      case 12:
        if (n & 2048) {
          (Ht(e, t, l, a), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              c = u.id,
              f = u.onPostCommit;
            typeof f == 'function' &&
              f(
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
            : zn(e, t)
          : u._visibility & 2 ? Ht(e, t, l, a)
          : ((u._visibility |= 2),
            Da(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && fs(c, t));
        break;
      case 24:
        (Ht(e, t, l, a), n & 2048 && rs(t.alternate, t));
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
        f = l,
        v = a,
        E = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (Da(u, c, f, v, n), Tn(8, c));
          break;
        case 23:
          break;
        case 22:
          var R = c.stateNode;
          (c.memoizedState !== null ?
            R._visibility & 2 ?
              Da(u, c, f, v, n)
            : zn(u, c)
          : ((R._visibility |= 2), Da(u, c, f, v, n)),
            n && E & 2048 && fs(c.alternate, c));
          break;
        case 24:
          (Da(u, c, f, v, n), n && E & 2048 && rs(c.alternate, c));
          break;
        default:
          Da(u, c, f, v, n);
      }
      t = t.sibling;
    }
  }
  function zn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            (zn(l, a), n & 2048 && fs(a.alternate, a));
            break;
          case 24:
            (zn(l, a), n & 2048 && rs(a.alternate, a));
            break;
          default:
            zn(l, a);
        }
        t = t.sibling;
      }
  }
  var An = 8192;
  function Ua(e, t, l) {
    if (e.subtreeFlags & An)
      for (e = e.child; e !== null; ) (ed(e, t, l), (e = e.sibling));
  }
  function ed(e, t, l) {
    switch (e.tag) {
      case 26:
        (Ua(e, t, l),
          e.flags & An &&
            e.memoizedState !== null &&
            dv(l, Ut, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Ua(e, t, l);
        break;
      case 3:
      case 4:
        var a = Ut;
        ((Ut = ni(e.stateNode.containerInfo)), Ua(e, t, l), (Ut = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null ?
            ((a = An), (An = 16777216), Ua(e, t, l), (An = a))
          : Ua(e, t, l));
        break;
      default:
        Ua(e, t, l);
    }
  }
  function td(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function Cn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ((Xe = a), ad(a, e));
        }
      td(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (ld(e), (e = e.sibling));
  }
  function ld(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Cn(e), e.flags & 2048 && El(9, e, e.return));
        break;
      case 3:
        Cn(e);
        break;
      case 12:
        Cn(e);
        break;
      case 22:
        var t = e.stateNode;
        (
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
        ) ?
          ((t._visibility &= -3), Vu(e))
        : Cn(e);
        break;
      default:
        Cn(e);
    }
  }
  function Vu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ((Xe = a), ad(a, e));
        }
      td(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (El(8, t, t.return), Vu(t));
          break;
        case 22:
          ((l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Vu(t)));
          break;
        default:
          Vu(t);
      }
      e = e.sibling;
    }
  }
  function ad(e, t) {
    for (; Xe !== null; ) {
      var l = Xe;
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
          dn(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) ((a.return = l), (Xe = a));
      else
        e: for (l = e; Xe !== null; ) {
          a = Xe;
          var n = a.sibling,
            u = a.return;
          if ((Jo(a), a === l)) {
            Xe = null;
            break e;
          }
          if (n !== null) {
            ((n.return = u), (Xe = n));
            break e;
          }
          Xe = u;
        }
    }
  }
  var z0 = {
      getCacheForType: function (e) {
        var t = $e(He),
          l = t.data.get(e);
        return (l === void 0 && ((l = e()), t.data.set(e, l)), l);
      },
      cacheSignal: function () {
        return $e(He).controller.signal;
      },
    },
    A0 = typeof WeakMap == 'function' ? WeakMap : Map,
    oe = 0,
    be = null,
    ne = null,
    ie = 0,
    he = 0,
    _t = null,
    Nl = !1,
    Ha = !1,
    os = !1,
    ul = 0,
    Ce = 0,
    Tl = 0,
    la = 0,
    ds = 0,
    yt = 0,
    Ba = 0,
    Rn = null,
    ct = null,
    hs = !1,
    Ku = 0,
    nd = 0,
    Ju = 1 / 0,
    $u = null,
    jl = null,
    Ye = 0,
    zl = null,
    qa = null,
    il = 0,
    ms = 0,
    vs = null,
    ud = null,
    On = 0,
    _s = null;
  function gt() {
    return (
      (oe & 2) !== 0 && ie !== 0 ? ie & -ie
      : O.T !== null ? xs()
      : bf()
    );
  }
  function id() {
    if (yt === 0)
      if ((ie & 536870912) === 0 || se) {
        var e = lu;
        ((lu <<= 1), (lu & 3932160) === 0 && (lu = 262144), (yt = e));
      } else yt = 536870912;
    return ((e = mt.current), e !== null && (e.flags |= 32), yt);
  }
  function st(e, t, l) {
    (((e === be && (he === 2 || he === 9)) || e.cancelPendingCommit !== null) &&
      (La(e, 0), Al(e, ie, yt, !1)),
      Fa(e, l),
      ((oe & 2) === 0 || e !== be) &&
        (e === be &&
          ((oe & 2) === 0 && (la |= l), Ce === 4 && Al(e, ie, yt, !1)),
        Xt(e)));
  }
  function cd(e, t, l) {
    if ((oe & 6) !== 0) throw Error(s(327));
    var a = (!l && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Wa(e, t),
      n = a ? O0(e, t) : gs(e, t, !0),
      u = a;
    do {
      if (n === 0) {
        Ha && !a && Al(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), u && !C0(l))) {
          ((n = gs(e, t, !1)), (u = !1));
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
              var f = e;
              n = Rn;
              var v = f.current.memoizedState.isDehydrated;
              if ((v && (La(f, c).flags |= 256), (c = gs(f, c, !1)), c !== 2)) {
                if (os && !v) {
                  ((f.errorRecoveryDisabledLanes |= u), (la |= u), (n = 4));
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
          (La(e, 0), Al(e, t, 0, !0));
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
              Al(a, t, yt, !Nl);
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
          if ((t & 62914560) === t && ((n = Ku + 300 - ft()), 10 < n)) {
            if ((Al(a, t, yt, !Nl), nu(a, 0, !0) !== 0)) break e;
            ((il = t),
              (a.timeoutHandle = Ld(
                sd.bind(
                  null,
                  a,
                  l,
                  ct,
                  $u,
                  hs,
                  t,
                  yt,
                  la,
                  Ba,
                  Nl,
                  u,
                  'Throttled',
                  -0,
                  0,
                ),
                n,
              )));
            break e;
          }
          sd(a, l, ct, $u, hs, t, yt, la, Ba, Nl, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Xt(e);
  }
  function sd(e, t, l, a, n, u, c, f, v, E, R, D, j, A) {
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
        ed(t, u, D));
      var L =
        (u & 62914560) === u ? Ku - ft()
        : (u & 4194048) === u ? nd - ft()
        : 0;
      if (((L = hv(D, L)), L !== null)) {
        ((il = u),
          (e.cancelPendingCommit = L(
            _d.bind(null, e, t, u, l, a, n, c, f, v, R, D, null, j, A),
          )),
          Al(e, u, c, !E));
        return;
      }
    }
    _d(e, t, u, l, a, n, c, f, v);
  }
  function C0(e) {
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
    ((t &= ~ds),
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
    l !== 0 && yf(e, l, t);
  }
  function ku() {
    return (oe & 6) === 0 ? (Mn(0), !1) : !0;
  }
  function ys() {
    if (ne !== null) {
      if (he === 0) var e = ne.return;
      else ((e = ne), (kt = Jl = null), Dc(e), (Aa = null), (mn = 0), (e = ne));
      for (; e !== null; ) (Yo(e.alternate, e), (e = e.return));
      ne = null;
    }
  }
  function La(e, t) {
    var l = e.timeoutHandle;
    (l !== -1 && ((e.timeoutHandle = -1), k0(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      (il = 0),
      ys(),
      (be = e),
      (ne = l = Jt(e.current, null)),
      (ie = t),
      (he = 0),
      (_t = null),
      (Nl = !1),
      (Ha = Wa(e, t)),
      (os = !1),
      (Ba = yt = ds = la = Tl = Ce = 0),
      (ct = Rn = null),
      (hs = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - ot(a),
          u = 1 << n;
        ((t |= e[n]), (a &= ~u));
      }
    return ((ul = t), _u(), l);
  }
  function fd(e, t) {
    ((te = null),
      (O.H = xn),
      t === za || t === Nu ? ((t = Nr()), (he = 3))
      : t === Sc ? ((t = Nr()), (he = 4))
      : (he =
          t === kc ? 8
          : t !== null && typeof t == 'object' && typeof t.then == 'function' ?
            6
          : 1),
      (_t = t),
      ne === null && ((Ce = 1), Lu(e, Et(t, e.current))));
  }
  function rd() {
    var e = mt.current;
    return (
      e === null ? !0
      : (ie & 4194048) === ie ? zt === null
      : (ie & 62914560) === ie || (ie & 536870912) !== 0 ? e === zt
      : !1
    );
  }
  function od() {
    var e = O.H;
    return ((O.H = xn), e === null ? xn : e);
  }
  function dd() {
    var e = O.A;
    return ((O.A = z0), e);
  }
  function Wu() {
    ((Ce = 4),
      Nl || ((ie & 4194048) !== ie && mt.current !== null) || (Ha = !0),
      ((Tl & 134217727) === 0 && (la & 134217727) === 0) ||
        be === null ||
        Al(be, ie, yt, !1));
  }
  function gs(e, t, l) {
    var a = oe;
    oe |= 2;
    var n = od(),
      u = dd();
    ((be !== e || ie !== t) && (($u = null), La(e, t)), (t = !1));
    var c = Ce;
    e: do
      try {
        if (he !== 0 && ne !== null) {
          var f = ne,
            v = _t;
          switch (he) {
            case 8:
              (ys(), (c = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              mt.current === null && (t = !0);
              var E = he;
              if (((he = 0), (_t = null), Ya(e, f, v, E), l && Ha)) {
                c = 0;
                break e;
              }
              break;
            default:
              ((E = he), (he = 0), (_t = null), Ya(e, f, v, E));
          }
        }
        (R0(), (c = Ce));
        break;
      } catch (R) {
        fd(e, R);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (kt = Jl = null),
      (oe = a),
      (O.H = n),
      (O.A = u),
      ne === null && ((be = null), (ie = 0), _u()),
      c
    );
  }
  function R0() {
    for (; ne !== null; ) hd(ne);
  }
  function O0(e, t) {
    var l = oe;
    oe |= 2;
    var a = od(),
      n = dd();
    be !== e || ie !== t ?
      (($u = null), (Ju = ft() + 500), La(e, t))
    : (Ha = Wa(e, t));
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
              if (xr(u)) {
                ((he = 0), (_t = null), md(t));
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
              xr(u) ?
                ((he = 0), (_t = null), md(t))
              : ((he = 0), (_t = null), Ya(e, t, u, 7));
              break;
            case 5:
              var c = null;
              switch (ne.tag) {
                case 26:
                  c = ne.memoizedState;
                case 5:
                case 27:
                  var f = ne;
                  if (c ? Id(c) : f.stateNode.complete) {
                    ((he = 0), (_t = null));
                    var v = f.sibling;
                    if (v !== null) ne = v;
                    else {
                      var E = f.return;
                      E !== null ? ((ne = E), Fu(E)) : (ne = null);
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
              (ys(), (Ce = 6));
              break e;
            default:
              throw Error(s(462));
          }
        }
        M0();
        break;
      } catch (R) {
        fd(e, R);
      }
    while (!0);
    return (
      (kt = Jl = null),
      (O.H = a),
      (O.A = n),
      (oe = l),
      ne !== null ? 0 : ((be = null), (ie = 0), _u(), Ce)
    );
  }
  function M0() {
    for (; ne !== null && !tm(); ) hd(ne);
  }
  function hd(e) {
    var t = qo(e.alternate, e, ul);
    ((e.memoizedProps = e.pendingProps), t === null ? Fu(e) : (ne = t));
  }
  function md(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Oo(l, t, t.pendingProps, t.type, void 0, ie);
        break;
      case 11:
        t = Oo(l, t, t.pendingProps, t.type.render, t.ref, ie);
        break;
      case 5:
        Dc(t);
      default:
        (Yo(l, t), (t = ne = or(t, ul)), (t = qo(l, t, ul)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Fu(e) : (ne = t));
  }
  function Ya(e, t, l, a) {
    ((kt = Jl = null), Dc(t), (Aa = null), (mn = 0));
    var n = t.return;
    try {
      if (b0(e, n, t, l, ie)) {
        ((Ce = 1), Lu(e, Et(l, e.current)), (ne = null));
        return;
      }
    } catch (u) {
      if (n !== null) throw ((ne = n), u);
      ((Ce = 1), Lu(e, Et(l, e.current)), (ne = null));
      return;
    }
    t.flags & 32768 ?
      (se || a === 1 ? (e = !0)
      : Ha || (ie & 536870912) !== 0 ? (e = !1)
      : ((Nl = e = !0),
        (a === 2 || a === 9 || a === 3 || a === 6) &&
          ((a = mt.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
      vd(t, e))
    : Fu(t);
  }
  function Fu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        vd(t, Nl);
        return;
      }
      e = t.return;
      var l = E0(t.alternate, t, ul);
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
  function vd(e, t) {
    do {
      var l = N0(e.alternate, e);
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
  function _d(e, t, l, a, n, u, c, f, v) {
    e.cancelPendingCommit = null;
    do Pu();
    while (Ye !== 0);
    if ((oe & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= ic),
        om(e, l, u, c, f, v),
        e === be && ((ne = be = null), (ie = 0)),
        (qa = t),
        (zl = e),
        (il = l),
        (ms = u),
        (vs = n),
        (ud = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ?
          ((e.callbackNode = null),
          (e.callbackPriority = 0),
          B0(eu, function () {
            return (Sd(), null);
          }))
        : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = O.T), (O.T = null), (n = B.p), (B.p = 2), (c = oe), (oe |= 4));
        try {
          T0(e, t, l);
        } finally {
          ((oe = c), (B.p = n), (O.T = a));
        }
      }
      ((Ye = 1), yd(), gd(), pd());
    }
  }
  function yd() {
    if (Ye === 1) {
      Ye = 0;
      var e = zl,
        t = qa,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        ((l = O.T), (O.T = null));
        var a = B.p;
        B.p = 2;
        var n = oe;
        oe |= 4;
        try {
          Fo(t, e);
          var u = Rs,
            c = lr(e.containerInfo),
            f = u.focusedElem,
            v = u.selectionRange;
          if (
            c !== f &&
            f &&
            f.ownerDocument &&
            tr(f.ownerDocument.documentElement, f)
          ) {
            if (v !== null && tc(f)) {
              var E = v.start,
                R = v.end;
              if ((R === void 0 && (R = E), 'selectionStart' in f))
                ((f.selectionStart = E),
                  (f.selectionEnd = Math.min(R, f.value.length)));
              else {
                var D = f.ownerDocument || document,
                  j = (D && D.defaultView) || window;
                if (j.getSelection) {
                  var A = j.getSelection(),
                    L = f.textContent.length,
                    $ = Math.min(v.start, L),
                    ge = v.end === void 0 ? $ : Math.min(v.end, L);
                  !A.extend && $ > ge && ((c = ge), (ge = $), ($ = c));
                  var S = er(f, $),
                    g = er(f, ge);
                  if (
                    S &&
                    g &&
                    (A.rangeCount !== 1 ||
                      A.anchorNode !== S.node ||
                      A.anchorOffset !== S.offset ||
                      A.focusNode !== g.node ||
                      A.focusOffset !== g.offset)
                  ) {
                    var x = D.createRange();
                    (x.setStart(S.node, S.offset),
                      A.removeAllRanges(),
                      $ > ge ?
                        (A.addRange(x), A.extend(g.node, g.offset))
                      : (x.setEnd(g.node, g.offset), A.addRange(x)));
                  }
                }
              }
            }
            for (D = [], A = f; (A = A.parentNode); )
              A.nodeType === 1 &&
                D.push({ element: A, left: A.scrollLeft, top: A.scrollTop });
            for (
              typeof f.focus == 'function' && f.focus(), f = 0;
              f < D.length;
              f++
            ) {
              var M = D[f];
              ((M.element.scrollLeft = M.left), (M.element.scrollTop = M.top));
            }
          }
          ((ri = !!Cs), (Rs = Cs = null));
        } finally {
          ((oe = n), (B.p = a), (O.T = l));
        }
      }
      ((e.current = t), (Ye = 2));
    }
  }
  function gd() {
    if (Ye === 2) {
      Ye = 0;
      var e = zl,
        t = qa,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        ((l = O.T), (O.T = null));
        var a = B.p;
        B.p = 2;
        var n = oe;
        oe |= 4;
        try {
          Ko(e, t.alternate, t);
        } finally {
          ((oe = n), (B.p = a), (O.T = l));
        }
      }
      Ye = 3;
    }
  }
  function pd() {
    if (Ye === 4 || Ye === 3) {
      ((Ye = 0), lm());
      var e = zl,
        t = qa,
        l = il,
        a = ud;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ?
        (Ye = 5)
      : ((Ye = 0), (qa = zl = null), bd(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (
        (n === 0 && (jl = null),
        Bi(l),
        (t = t.stateNode),
        rt && typeof rt.onCommitFiberRoot == 'function')
      )
        try {
          rt.onCommitFiberRoot(ka, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = O.T), (n = B.p), (B.p = 2), (O.T = null));
        try {
          for (var u = e.onRecoverableError, c = 0; c < a.length; c++) {
            var f = a[c];
            u(f.value, { componentStack: f.stack });
          }
        } finally {
          ((O.T = t), (B.p = n));
        }
      }
      ((il & 3) !== 0 && Pu(),
        Xt(e),
        (n = e.pendingLanes),
        (l & 261930) !== 0 && (n & 42) !== 0 ?
          e === _s ?
            On++
          : ((On = 0), (_s = e))
        : (On = 0),
        Mn(0));
    }
  }
  function bd(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), dn(t)));
  }
  function Pu() {
    return (yd(), gd(), pd(), Sd());
  }
  function Sd() {
    if (Ye !== 5) return !1;
    var e = zl,
      t = ms;
    ms = 0;
    var l = Bi(il),
      a = O.T,
      n = B.p;
    try {
      ((B.p = 32 > l ? 32 : l), (O.T = null), (l = vs), (vs = null));
      var u = zl,
        c = il;
      if (((Ye = 0), (qa = zl = null), (il = 0), (oe & 6) !== 0))
        throw Error(s(331));
      var f = oe;
      if (
        ((oe |= 4),
        ld(u.current),
        Io(u, u.current, c, l),
        (oe = f),
        Mn(0, !1),
        rt && typeof rt.onPostCommitFiberRoot == 'function')
      )
        try {
          rt.onPostCommitFiberRoot(ka, u);
        } catch {}
      return !0;
    } finally {
      ((B.p = n), (O.T = a), bd(e, t));
    }
  }
  function xd(e, t, l) {
    ((t = Et(l, t)),
      (t = $c(e.stateNode, t, 2)),
      (e = bl(e, t, 2)),
      e !== null && (Fa(e, 2), Xt(e)));
  }
  function me(e, t, l) {
    if (e.tag === 3) xd(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          xd(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' &&
              (jl === null || !jl.has(a)))
          ) {
            ((e = Et(l, e)),
              (l = Eo(2)),
              (a = bl(t, l, 2)),
              a !== null && (No(l, a, t, e), Fa(a, 2), Xt(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function ps(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new A0();
      var n = new Set();
      a.set(t, n);
    } else ((n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n)));
    n.has(l) ||
      ((os = !0), n.add(l), (e = D0.bind(null, e, t, l)), t.then(e, e));
  }
  function D0(e, t, l) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      be === e &&
        (ie & l) === l &&
        (Ce === 4 || (Ce === 3 && (ie & 62914560) === ie && 300 > ft() - Ku) ?
          (oe & 2) === 0 && La(e, 0)
        : (ds |= l),
        Ba === ie && (Ba = 0)),
      Xt(e));
  }
  function Ed(e, t) {
    (t === 0 && (t = _f()), (e = Zl(e, t)), e !== null && (Fa(e, t), Xt(e)));
  }
  function U0(e) {
    var t = e.memoizedState,
      l = 0;
    (t !== null && (l = t.retryLane), Ed(e, l));
  }
  function H0(e, t) {
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
    (a !== null && a.delete(t), Ed(e, l));
  }
  function B0(e, t) {
    return Mi(e, t);
  }
  var Iu = null,
    Ga = null,
    bs = !1,
    ei = !1,
    Ss = !1,
    Cl = 0;
  function Xt(e) {
    (e !== Ga &&
      e.next === null &&
      (Ga === null ? (Iu = Ga = e) : (Ga = Ga.next = e)),
      (ei = !0),
      bs || ((bs = !0), L0()));
  }
  function Mn(e, t) {
    if (!Ss && ei) {
      Ss = !0;
      do
        for (var l = !1, a = Iu; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var c = a.suspendedLanes,
                f = a.pingedLanes;
              ((u = (1 << (31 - ot(42 | e) + 1)) - 1),
                (u &= n & ~(c & ~f)),
                (u =
                  u & 201326741 ? (u & 201326741) | 1
                  : u ? u | 2
                  : 0));
            }
            u !== 0 && ((l = !0), zd(a, u));
          } else
            ((u = ie),
              (u = nu(
                a,
                a === be ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || Wa(a, u) || ((l = !0), zd(a, u)));
          a = a.next;
        }
      while (l);
      Ss = !1;
    }
  }
  function q0() {
    Nd();
  }
  function Nd() {
    ei = bs = !1;
    var e = 0;
    Cl !== 0 && $0() && (e = Cl);
    for (var t = ft(), l = null, a = Iu; a !== null; ) {
      var n = a.next,
        u = Td(a, t);
      (u === 0 ?
        ((a.next = null),
        l === null ? (Iu = n) : (l.next = n),
        n === null && (Ga = l))
      : ((l = a), (e !== 0 || (u & 3) !== 0) && (ei = !0)),
        (a = n));
    }
    ((Ye !== 0 && Ye !== 5) || Mn(e), Cl !== 0 && (Cl = 0));
  }
  function Td(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        n = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var c = 31 - ot(u),
        f = 1 << c,
        v = n[c];
      (v === -1 ?
        ((f & l) === 0 || (f & a) !== 0) && (n[c] = rm(f, t))
      : v <= t && (e.expiredLanes |= f),
        (u &= ~f));
    }
    if (
      ((t = be),
      (l = ie),
      (l = nu(
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
        a !== null && a !== null && Di(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Wa(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((a !== null && Di(a), Bi(l))) {
        case 2:
        case 8:
          l = mf;
          break;
        case 32:
          l = eu;
          break;
        case 268435456:
          l = vf;
          break;
        default:
          l = eu;
      }
      return (
        (a = jd.bind(null, e)),
        (l = Mi(l, a)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      a !== null && a !== null && Di(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function jd(e, t) {
    if (Ye !== 0 && Ye !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var l = e.callbackNode;
    if (Pu() && e.callbackNode !== l) return null;
    var a = ie;
    return (
      (a = nu(
        e,
        e === be ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      a === 0 ? null : (
        (cd(e, a, t),
        Td(e, ft()),
        e.callbackNode != null && e.callbackNode === l ?
          jd.bind(null, e)
        : null)
      )
    );
  }
  function zd(e, t) {
    if (Pu()) return null;
    cd(e, t, !0);
  }
  function L0() {
    W0(function () {
      (oe & 6) !== 0 ? Mi(hf, q0) : Nd();
    });
  }
  function xs() {
    if (Cl === 0) {
      var e = Ta;
      (e === 0 && ((e = tu), (tu <<= 1), (tu & 261888) === 0 && (tu = 256)),
        (Cl = e));
    }
    return Cl;
  }
  function Ad(e) {
    return (
      e == null || typeof e == 'symbol' || typeof e == 'boolean' ? null
      : typeof e == 'function' ? e
      : su('' + e)
    );
  }
  function Cd(e, t) {
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
  function Y0(e, t, l, a, n) {
    if (t === 'submit' && l && l.stateNode === n) {
      var u = Ad((n[lt] || null).action),
        c = a.submitter;
      c &&
        ((t =
          (t = c[lt] || null) ?
            Ad(t.formAction)
          : c.getAttribute('formAction')),
        t !== null && ((u = t), (c = null)));
      var f = new du('action', 'action', null, a, n);
      e.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Cl !== 0) {
                  var v = c ? Cd(n, c) : new FormData(n);
                  Qc(
                    l,
                    { pending: !0, data: v, method: n.method, action: u },
                    null,
                    v,
                  );
                }
              } else
                typeof u == 'function' &&
                  (f.preventDefault(),
                  (v = c ? Cd(n, c) : new FormData(n)),
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
  for (var Es = 0; Es < uc.length; Es++) {
    var Ns = uc[Es],
      G0 = Ns.toLowerCase(),
      X0 = Ns[0].toUpperCase() + Ns.slice(1);
    Dt(G0, 'on' + X0);
  }
  (Dt(ur, 'onAnimationEnd'),
    Dt(ir, 'onAnimationIteration'),
    Dt(cr, 'onAnimationStart'),
    Dt('dblclick', 'onDoubleClick'),
    Dt('focusin', 'onFocus'),
    Dt('focusout', 'onBlur'),
    Dt(a0, 'onTransitionRun'),
    Dt(n0, 'onTransitionStart'),
    Dt(u0, 'onTransitionCancel'),
    Dt(sr, 'onTransitionEnd'),
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
  var Dn =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    Q0 = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'
        .split(' ')
        .concat(Dn),
    );
  function Rd(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        n = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var c = a.length - 1; 0 <= c; c--) {
            var f = a[c],
              v = f.instance,
              E = f.currentTarget;
            if (((f = f.listener), v !== u && n.isPropagationStopped()))
              break e;
            ((u = f), (n.currentTarget = E));
            try {
              u(n);
            } catch (R) {
              vu(R);
            }
            ((n.currentTarget = null), (u = v));
          }
        else
          for (c = 0; c < a.length; c++) {
            if (
              ((f = a[c]),
              (v = f.instance),
              (E = f.currentTarget),
              (f = f.listener),
              v !== u && n.isPropagationStopped())
            )
              break e;
            ((u = f), (n.currentTarget = E));
            try {
              u(n);
            } catch (R) {
              vu(R);
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
    l.has(a) || (Od(t, e, 2, !1), l.add(a));
  }
  function Ts(e, t, l) {
    var a = 0;
    (t && (a |= 4), Od(l, e, a, t));
  }
  var ti = '_reactListening' + Math.random().toString(36).slice(2);
  function js(e) {
    if (!e[ti]) {
      ((e[ti] = !0),
        Ef.forEach(function (l) {
          l !== 'selectionchange' && (Q0.has(l) || Ts(l, !1, e), Ts(l, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ti] || ((t[ti] = !0), Ts('selectionchange', !1, t));
    }
  }
  function Od(e, t, l, a) {
    switch (ih(t)) {
      case 2:
        var n = _v;
        break;
      case 8:
        n = yv;
        break;
      default:
        n = Xs;
    }
    ((l = n.bind(null, t, l, e)),
      (n = void 0),
      !Ki ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (n = !0),
      a ?
        n !== void 0 ?
          e.addEventListener(t, l, { capture: !0, passive: n })
        : e.addEventListener(t, l, !0)
      : n !== void 0 ? e.addEventListener(t, l, { passive: n })
      : e.addEventListener(t, l, !1));
  }
  function zs(e, t, l, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var f = a.stateNode.containerInfo;
          if (f === n) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var v = c.tag;
              if ((v === 3 || v === 4) && c.stateNode.containerInfo === n)
                return;
              c = c.return;
            }
          for (; f !== null; ) {
            if (((c = sa(f)), c === null)) return;
            if (((v = c.tag), v === 5 || v === 6 || v === 26 || v === 27)) {
              a = u = c;
              continue e;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    Hf(function () {
      var E = u,
        R = Zi(l),
        D = [];
      e: {
        var j = fr.get(e);
        if (j !== void 0) {
          var A = du,
            L = e;
          switch (e) {
            case 'keypress':
              if (ru(l) === 0) break e;
            case 'keydown':
            case 'keyup':
              A = Hm;
              break;
            case 'focusin':
              ((L = 'focus'), (A = Wi));
              break;
            case 'focusout':
              ((L = 'blur'), (A = Wi));
              break;
            case 'beforeblur':
            case 'afterblur':
              A = Wi;
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
              A = Lf;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              A = Em;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              A = Lm;
              break;
            case ur:
            case ir:
            case cr:
              A = jm;
              break;
            case sr:
              A = Gm;
              break;
            case 'scroll':
            case 'scrollend':
              A = Sm;
              break;
            case 'wheel':
              A = Qm;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              A = Am;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              A = Gf;
              break;
            case 'toggle':
            case 'beforetoggle':
              A = Zm;
          }
          var $ = (t & 4) !== 0,
            ge = !$ && (e === 'scroll' || e === 'scrollend'),
            S =
              $ ?
                j !== null ?
                  j + 'Capture'
                : null
              : j;
          $ = [];
          for (var g = E, x; g !== null; ) {
            var M = g;
            if (
              ((x = M.stateNode),
              (M = M.tag),
              (M !== 5 && M !== 26 && M !== 27) ||
                x === null ||
                S === null ||
                ((M = en(g, S)), M != null && $.push(Un(g, M, x))),
              ge)
            )
              break;
            g = g.return;
          }
          0 < $.length &&
            ((j = new A(j, L, null, l, R)), D.push({ event: j, listeners: $ }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((j = e === 'mouseover' || e === 'pointerover'),
            (A = e === 'mouseout' || e === 'pointerout'),
            j &&
              l !== wi &&
              (L = l.relatedTarget || l.fromElement) &&
              (sa(L) || L[ca]))
          )
            break e;
          if (
            (A || j) &&
            ((j =
              R.window === R ? R
              : (j = R.ownerDocument) ? j.defaultView || j.parentWindow
              : window),
            A ?
              ((L = l.relatedTarget || l.toElement),
              (A = E),
              (L = L ? sa(L) : null),
              L !== null &&
                ((ge = m(L)),
                ($ = L.tag),
                L !== ge || ($ !== 5 && $ !== 27 && $ !== 6)) &&
                (L = null))
            : ((A = null), (L = E)),
            A !== L)
          ) {
            if (
              (($ = Lf),
              (M = 'onMouseLeave'),
              (S = 'onMouseEnter'),
              (g = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                (($ = Gf),
                (M = 'onPointerLeave'),
                (S = 'onPointerEnter'),
                (g = 'pointer')),
              (ge = A == null ? j : Ia(A)),
              (x = L == null ? j : Ia(L)),
              (j = new $(M, g + 'leave', A, l, R)),
              (j.target = ge),
              (j.relatedTarget = x),
              (M = null),
              sa(R) === E &&
                (($ = new $(S, g + 'enter', L, l, R)),
                ($.target = x),
                ($.relatedTarget = ge),
                (M = $)),
              (ge = M),
              A && L)
            )
              t: {
                for ($ = w0, S = A, g = L, x = 0, M = S; M; M = $(M)) x++;
                M = 0;
                for (var V = g; V; V = $(V)) M++;
                for (; 0 < x - M; ) ((S = $(S)), x--);
                for (; 0 < M - x; ) ((g = $(g)), M--);
                for (; x--; ) {
                  if (S === g || (g !== null && S === g.alternate)) {
                    $ = S;
                    break t;
                  }
                  ((S = $(S)), (g = $(g)));
                }
                $ = null;
              }
            else $ = null;
            (A !== null && Md(D, j, A, $, !1),
              L !== null && ge !== null && Md(D, ge, L, $, !0));
          }
        }
        e: {
          if (
            ((j = E ? Ia(E) : window),
            (A = j.nodeName && j.nodeName.toLowerCase()),
            A === 'select' || (A === 'input' && j.type === 'file'))
          )
            var fe = $f;
          else if (Kf(j))
            if (kf) fe = e0;
            else {
              fe = Pm;
              var Q = Fm;
            }
          else
            ((A = j.nodeName),
              (
                !A ||
                A.toLowerCase() !== 'input' ||
                (j.type !== 'checkbox' && j.type !== 'radio')
              ) ?
                E && Qi(E.elementType) && (fe = $f)
              : (fe = Im));
          if (fe && (fe = fe(e, E))) {
            Jf(D, fe, l, R);
            break e;
          }
          (Q && Q(e, j, E),
            e === 'focusout' &&
              E &&
              j.type === 'number' &&
              E.memoizedProps.value != null &&
              Xi(j, 'number', j.value));
        }
        switch (((Q = E ? Ia(E) : window), e)) {
          case 'focusin':
            (Kf(Q) || Q.contentEditable === 'true') &&
              ((ya = Q), (lc = E), (fn = null));
            break;
          case 'focusout':
            fn = lc = ya = null;
            break;
          case 'mousedown':
            ac = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((ac = !1), ar(D, l, R));
            break;
          case 'selectionchange':
            if (l0) break;
          case 'keydown':
          case 'keyup':
            ar(D, l, R);
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
            Zf(e, l) && (ce = 'onCompositionEnd')
          : e === 'keydown' && l.keyCode === 229 && (ce = 'onCompositionStart');
        (ce &&
          (Xf &&
            l.locale !== 'ko' &&
            (_a || ce !== 'onCompositionStart' ?
              ce === 'onCompositionEnd' && _a && (le = Bf())
            : ((hl = R),
              (Ji = 'value' in hl ? hl.value : hl.textContent),
              (_a = !0))),
          (Q = li(E, ce)),
          0 < Q.length &&
            ((ce = new Yf(ce, e, null, l, R)),
            D.push({ event: ce, listeners: Q }),
            le ?
              (ce.data = le)
            : ((le = Vf(l)), le !== null && (ce.data = le)))),
          (le = Km ? Jm(e, l) : $m(e, l)) &&
            ((ce = li(E, 'onBeforeInput')),
            0 < ce.length &&
              ((Q = new Yf('onBeforeInput', 'beforeinput', null, l, R)),
              D.push({ event: Q, listeners: ce }),
              (Q.data = le))),
          Y0(D, e, E, l, R));
      }
      Rd(D, t);
    });
  }
  function Un(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function li(e, t) {
    for (var l = t + 'Capture', a = []; e !== null; ) {
      var n = e,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = en(e, l)),
          n != null && a.unshift(Un(e, n, u)),
          (n = en(e, t)),
          n != null && a.push(Un(e, n, u))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function w0(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Md(e, t, l, a, n) {
    for (var u = t._reactName, c = []; l !== null && l !== a; ) {
      var f = l,
        v = f.alternate,
        E = f.stateNode;
      if (((f = f.tag), v !== null && v === a)) break;
      ((f !== 5 && f !== 26 && f !== 27) ||
        E === null ||
        ((v = E),
        n ?
          ((E = en(l, u)), E != null && c.unshift(Un(l, E, v)))
        : n || ((E = en(l, u)), E != null && c.push(Un(l, E, v)))),
        (l = l.return));
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var Z0 = /\r\n?/g,
    V0 = /\u0000|\uFFFD/g;
  function Dd(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Z0,
        `
`,
      )
      .replace(V0, '');
  }
  function Ud(e, t) {
    return ((t = Dd(t)), Dd(e) === t);
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
        iu(e, 'class', a);
        break;
      case 'tabIndex':
        iu(e, 'tabindex', a);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        iu(e, l, a);
        break;
      case 'style':
        Df(e, a, u);
        break;
      case 'data':
        if (t !== 'object') {
          iu(e, 'data', a);
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
        ((a = su('' + a)), e.setAttribute(l, a));
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
        ((a = su('' + a)), e.setAttribute(l, a));
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
        ((l = su('' + a)),
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
        (ue('beforetoggle', e), ue('toggle', e), uu(e, 'popover', a));
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
        uu(e, 'is', a);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== 'o' && l[0] !== 'O') ||
          (l[1] !== 'n' && l[1] !== 'N')) &&
          ((l = pm.get(l) || l), uu(e, l, a));
    }
  }
  function As(e, t, l, a, n, u) {
    switch (l) {
      case 'style':
        Df(e, a, u);
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
        if (!Nf.hasOwnProperty(l))
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
            : uu(e, l, a);
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
        var f = (u = c = n = null),
          v = null,
          E = null;
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
                  E = R;
                  break;
                case 'value':
                  u = R;
                  break;
                case 'defaultValue':
                  f = R;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (R != null) throw Error(s(137, t));
                  break;
                default:
                  ye(e, t, a, R, l, null);
              }
          }
        Cf(e, u, f, v, E, c, n, !1);
        return;
      case 'select':
        (ue('invalid', e), (a = c = u = null));
        for (n in l)
          if (l.hasOwnProperty(n) && ((f = l[n]), f != null))
            switch (n) {
              case 'value':
                u = f;
                break;
              case 'defaultValue':
                c = f;
                break;
              case 'multiple':
                a = f;
              default:
                ye(e, t, n, f, l, null);
            }
        ((t = u),
          (l = c),
          (e.multiple = !!a),
          t != null ? da(e, !!a, t, !1) : l != null && da(e, !!a, l, !0));
        return;
      case 'textarea':
        (ue('invalid', e), (u = n = a = null));
        for (c in l)
          if (l.hasOwnProperty(c) && ((f = l[c]), f != null))
            switch (c) {
              case 'value':
                a = f;
                break;
              case 'defaultValue':
                n = f;
                break;
              case 'children':
                u = f;
                break;
              case 'dangerouslySetInnerHTML':
                if (f != null) throw Error(s(91));
                break;
              default:
                ye(e, t, c, f, l, null);
            }
        Of(e, a, n, u);
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
        for (a = 0; a < Dn.length; a++) ue(Dn[a], e);
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
        for (E in l)
          if (l.hasOwnProperty(E) && ((a = l[E]), a != null))
            switch (E) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(s(137, t));
              default:
                ye(e, t, E, a, l, null);
            }
        return;
      default:
        if (Qi(t)) {
          for (R in l)
            l.hasOwnProperty(R) &&
              ((a = l[R]), a !== void 0 && As(e, t, R, a, l, void 0));
          return;
        }
    }
    for (f in l)
      l.hasOwnProperty(f) && ((a = l[f]), a != null && ye(e, t, f, a, l, null));
  }
  function K0(e, t, l, a) {
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
          f = null,
          v = null,
          E = null,
          R = null;
        for (A in l) {
          var D = l[A];
          if (l.hasOwnProperty(A) && D != null)
            switch (A) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                v = D;
              default:
                a.hasOwnProperty(A) || ye(e, t, A, null, a, D);
            }
        }
        for (var j in a) {
          var A = a[j];
          if (((D = l[j]), a.hasOwnProperty(j) && (A != null || D != null)))
            switch (j) {
              case 'type':
                u = A;
                break;
              case 'name':
                n = A;
                break;
              case 'checked':
                E = A;
                break;
              case 'defaultChecked':
                R = A;
                break;
              case 'value':
                c = A;
                break;
              case 'defaultValue':
                f = A;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (A != null) throw Error(s(137, t));
                break;
              default:
                A !== D && ye(e, t, j, A, a, D);
            }
        }
        Gi(e, c, f, v, E, R, u, n);
        return;
      case 'select':
        A = c = f = j = null;
        for (u in l)
          if (((v = l[u]), l.hasOwnProperty(u) && v != null))
            switch (u) {
              case 'value':
                break;
              case 'multiple':
                A = v;
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
                j = u;
                break;
              case 'defaultValue':
                f = u;
                break;
              case 'multiple':
                c = u;
              default:
                u !== v && ye(e, t, n, u, a, v);
            }
        ((t = f),
          (l = c),
          (a = A),
          j != null ?
            da(e, !!l, j, !1)
          : !!a != !!l &&
            (t != null ? da(e, !!l, t, !0) : da(e, !!l, l ? [] : '', !1)));
        return;
      case 'textarea':
        A = j = null;
        for (f in l)
          if (
            ((n = l[f]),
            l.hasOwnProperty(f) && n != null && !a.hasOwnProperty(f))
          )
            switch (f) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                ye(e, t, f, null, a, n);
            }
        for (c in a)
          if (
            ((n = a[c]),
            (u = l[c]),
            a.hasOwnProperty(c) && (n != null || u != null))
          )
            switch (c) {
              case 'value':
                j = n;
                break;
              case 'defaultValue':
                A = n;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (n != null) throw Error(s(91));
                break;
              default:
                n !== u && ye(e, t, c, n, a, u);
            }
        Rf(e, j, A);
        return;
      case 'option':
        for (var L in l)
          ((j = l[L]),
            l.hasOwnProperty(L) &&
              j != null &&
              !a.hasOwnProperty(L) &&
              (L === 'selected' ? (e.selected = !1) : ye(e, t, L, null, a, j)));
        for (v in a)
          ((j = a[v]),
            (A = l[v]),
            a.hasOwnProperty(v) &&
              j !== A &&
              (j != null || A != null) &&
              (v === 'selected' ?
                (e.selected =
                  j && typeof j != 'function' && typeof j != 'symbol')
              : ye(e, t, v, j, a, A)));
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
          ((j = l[$]),
            l.hasOwnProperty($) &&
              j != null &&
              !a.hasOwnProperty($) &&
              ye(e, t, $, null, a, j));
        for (E in a)
          if (
            ((j = a[E]),
            (A = l[E]),
            a.hasOwnProperty(E) && j !== A && (j != null || A != null))
          )
            switch (E) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (j != null) throw Error(s(137, t));
                break;
              default:
                ye(e, t, E, j, a, A);
            }
        return;
      default:
        if (Qi(t)) {
          for (var ge in l)
            ((j = l[ge]),
              l.hasOwnProperty(ge) &&
                j !== void 0 &&
                !a.hasOwnProperty(ge) &&
                As(e, t, ge, void 0, a, j));
          for (R in a)
            ((j = a[R]),
              (A = l[R]),
              !a.hasOwnProperty(R) ||
                j === A ||
                (j === void 0 && A === void 0) ||
                As(e, t, R, j, a, A));
          return;
        }
    }
    for (var S in l)
      ((j = l[S]),
        l.hasOwnProperty(S) &&
          j != null &&
          !a.hasOwnProperty(S) &&
          ye(e, t, S, null, a, j));
    for (D in a)
      ((j = a[D]),
        (A = l[D]),
        !a.hasOwnProperty(D) ||
          j === A ||
          (j == null && A == null) ||
          ye(e, t, D, j, a, A));
  }
  function Hd(e) {
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
  function J0() {
    if (typeof performance.getEntriesByType == 'function') {
      for (
        var e = 0, t = 0, l = performance.getEntriesByType('resource'), a = 0;
        a < l.length;
        a++
      ) {
        var n = l[a],
          u = n.transferSize,
          c = n.initiatorType,
          f = n.duration;
        if (u && f && Hd(c)) {
          for (c = 0, f = n.responseEnd, a += 1; a < l.length; a++) {
            var v = l[a],
              E = v.startTime;
            if (E > f) break;
            var R = v.transferSize,
              D = v.initiatorType;
            R &&
              Hd(D) &&
              ((v = v.responseEnd), (c += R * (v < f ? 1 : (f - E) / (v - E))));
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
  var Cs = null,
    Rs = null;
  function ai(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Bd(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function qd(e, t) {
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
  function Os(e, t) {
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
  var Ms = null;
  function $0() {
    var e = window.event;
    return (
      e && e.type === 'popstate' ?
        e === Ms ?
          !1
        : ((Ms = e), !0)
      : ((Ms = null), !1)
    );
  }
  var Ld = typeof setTimeout == 'function' ? setTimeout : void 0,
    k0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Yd = typeof Promise == 'function' ? Promise : void 0,
    W0 =
      typeof queueMicrotask == 'function' ? queueMicrotask
      : typeof Yd < 'u' ?
        function (e) {
          return Yd.resolve(null).then(e).catch(F0);
        }
      : Ld;
  function F0(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Rl(e) {
    return e === 'head';
  }
  function Gd(e, t) {
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
        else if (l === 'html') Hn(e.ownerDocument.documentElement);
        else if (l === 'head') {
          ((l = e.ownerDocument.head), Hn(l));
          for (var u = l.firstChild; u; ) {
            var c = u.nextSibling,
              f = u.nodeName;
            (u[Pa] ||
              f === 'SCRIPT' ||
              f === 'STYLE' ||
              (f === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
              l.removeChild(u),
              (u = c));
          }
        } else l === 'body' && Hn(e.ownerDocument.body);
      l = n;
    } while (l);
    Za(t);
  }
  function Xd(e, t) {
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
  function Ds(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (Ds(l), Li(l));
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
  function P0(e, t, l, a) {
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
  function I0(e, t, l) {
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
  function Qd(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !t) ||
        ((e = At(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Us(e) {
    return e.data === '$?' || e.data === '$~';
  }
  function Hs(e) {
    return (
      e.data === '$!' ||
      (e.data === '$?' && e.ownerDocument.readyState !== 'loading')
    );
  }
  function ev(e, t) {
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
  var Bs = null;
  function wd(e) {
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
  function Zd(e) {
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
  function Vd(e, t, l) {
    switch (((t = ai(l)), e)) {
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
  function Hn(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Li(e);
  }
  var Ct = new Map(),
    Kd = new Set();
  function ni(e) {
    return (
      typeof e.getRootNode == 'function' ? e.getRootNode()
      : e.nodeType === 9 ? e
      : e.ownerDocument
    );
  }
  var cl = B.d;
  B.d = { f: tv, r: lv, D: av, C: nv, L: uv, m: iv, X: sv, S: cv, M: fv };
  function tv() {
    var e = cl.f(),
      t = ku();
    return e || t;
  }
  function lv(e) {
    var t = fa(e);
    t !== null && t.tag === 5 && t.type === 'form' ? so(t) : cl.r(e);
  }
  var Xa = typeof document > 'u' ? null : document;
  function Jd(e, t, l) {
    var a = Xa;
    if (a && typeof t == 'string' && t) {
      var n = St(t);
      ((n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof l == 'string' && (n += '[crossorigin="' + l + '"]'),
        Kd.has(n) ||
          (Kd.add(n),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement('link')),
            We(t, 'link', e),
            Ge(t),
            a.head.appendChild(t))));
    }
  }
  function av(e) {
    (cl.D(e), Jd('dns-prefetch', e, null));
  }
  function nv(e, t) {
    (cl.C(e, t), Jd('preconnect', e, t));
  }
  function uv(e, t, l) {
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
          u = Qa(e);
          break;
        case 'script':
          u = wa(e);
      }
      Ct.has(u) ||
        ((e = T(
          {
            rel: 'preload',
            href: t === 'image' && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l,
        )),
        Ct.set(u, e),
        a.querySelector(n) !== null ||
          (t === 'style' && a.querySelector(Bn(u))) ||
          (t === 'script' && a.querySelector(qn(u))) ||
          ((t = a.createElement('link')),
          We(t, 'link', e),
          Ge(t),
          a.head.appendChild(t)));
    }
  }
  function iv(e, t) {
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
          u = wa(e);
      }
      if (
        !Ct.has(u) &&
        ((e = T({ rel: 'modulepreload', href: e }, t)),
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
          Ge(a),
          l.head.appendChild(a));
      }
    }
  }
  function cv(e, t, l) {
    cl.S(e, t, l);
    var a = Xa;
    if (a && e) {
      var n = ra(a).hoistableStyles,
        u = Qa(e);
      t = t || 'default';
      var c = n.get(u);
      if (!c) {
        var f = { loading: 0, preload: null };
        if ((c = a.querySelector(Bn(u)))) f.loading = 5;
        else {
          ((e = T({ 'rel': 'stylesheet', 'href': e, 'data-precedence': t }, l)),
            (l = Ct.get(u)) && qs(e, l));
          var v = (c = a.createElement('link'));
          (Ge(v),
            We(v, 'link', e),
            (v._p = new Promise(function (E, R) {
              ((v.onload = E), (v.onerror = R));
            })),
            v.addEventListener('load', function () {
              f.loading |= 1;
            }),
            v.addEventListener('error', function () {
              f.loading |= 2;
            }),
            (f.loading |= 4),
            ui(c, t, a));
        }
        ((c = { type: 'stylesheet', instance: c, count: 1, state: f }),
          n.set(u, c));
      }
    }
  }
  function sv(e, t) {
    cl.X(e, t);
    var l = Xa;
    if (l && e) {
      var a = ra(l).hoistableScripts,
        n = wa(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(qn(n))),
        u ||
          ((e = T({ src: e, async: !0 }, t)),
          (t = Ct.get(n)) && Ls(e, t),
          (u = l.createElement('script')),
          Ge(u),
          We(u, 'link', e),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function fv(e, t) {
    cl.M(e, t);
    var l = Xa;
    if (l && e) {
      var a = ra(l).hoistableScripts,
        n = wa(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(qn(n))),
        u ||
          ((e = T({ src: e, async: !0, type: 'module' }, t)),
          (t = Ct.get(n)) && Ls(e, t),
          (u = l.createElement('script')),
          Ge(u),
          We(u, 'link', e),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function $d(e, t, l, a) {
    var n = (n = ae.current) ? ni(n) : null;
    if (!n) throw Error(s(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof l.precedence == 'string' && typeof l.href == 'string' ?
            ((t = Qa(l.href)),
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
          e = Qa(l.href);
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
              (u = n.querySelector(Bn(e))) &&
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
                u || rv(n, e, l, c.state))),
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
            ((t = wa(l)),
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
  function Qa(e) {
    return 'href="' + St(e) + '"';
  }
  function Bn(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function kd(e) {
    return T({}, e, { 'data-precedence': e.precedence, 'precedence': null });
  }
  function rv(e, t, l, a) {
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
      Ge(t),
      e.head.appendChild(t));
  }
  function wa(e) {
    return '[src="' + St(e) + '"]';
  }
  function qn(e) {
    return 'script[async]' + e;
  }
  function Wd(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var a = e.querySelector('style[data-href~="' + St(l.href) + '"]');
          if (a) return ((t.instance = a), Ge(a), a);
          var n = T({}, l, {
            'data-href': l.href,
            'data-precedence': l.precedence,
            'href': null,
            'precedence': null,
          });
          return (
            (a = (e.ownerDocument || e).createElement('style')),
            Ge(a),
            We(a, 'style', n),
            ui(a, l.precedence, e),
            (t.instance = a)
          );
        case 'stylesheet':
          n = Qa(l.href);
          var u = e.querySelector(Bn(n));
          if (u) return ((t.state.loading |= 4), (t.instance = u), Ge(u), u);
          ((a = kd(l)),
            (n = Ct.get(n)) && qs(a, n),
            (u = (e.ownerDocument || e).createElement('link')),
            Ge(u));
          var c = u;
          return (
            (c._p = new Promise(function (f, v) {
              ((c.onload = f), (c.onerror = v));
            })),
            We(u, 'link', a),
            (t.state.loading |= 4),
            ui(u, l.precedence, e),
            (t.instance = u)
          );
        case 'script':
          return (
            (u = wa(l.src)),
            (n = e.querySelector(qn(u))) ?
              ((t.instance = n), Ge(n), n)
            : ((a = l),
              (n = Ct.get(u)) && ((a = T({}, l)), Ls(a, n)),
              (e = e.ownerDocument || e),
              (n = e.createElement('script')),
              Ge(n),
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
        ((a = t.instance), (t.state.loading |= 4), ui(a, l.precedence, e));
    return t.instance;
  }
  function ui(e, t, l) {
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
      var f = a[c];
      if (f.dataset.precedence === t) u = f;
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
  function Ls(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var ii = null;
  function Fd(e, t, l) {
    if (ii === null) {
      var a = new Map(),
        n = (ii = new Map());
      n.set(l, a);
    } else ((n = ii), (a = n.get(l)), a || ((a = new Map()), n.set(l, a)));
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
        var f = a.get(c);
        f ? f.push(u) : a.set(c, [u]);
      }
    }
    return a;
  }
  function Pd(e, t, l) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === 'title' ? e.querySelector('head > title') : null,
      ));
  }
  function ov(e, t, l) {
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
  function Id(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  function dv(e, t, l, a) {
    if (
      l.type === 'stylesheet' &&
      (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var n = Qa(a.href),
          u = t.querySelector(Bn(n));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (e.count++, (e = ci.bind(e)), t.then(e, e)),
            (l.state.loading |= 4),
            (l.instance = u),
            Ge(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (a = kd(a)),
          (n = Ct.get(n)) && qs(a, n),
          (u = u.createElement('link')),
          Ge(u));
        var c = u;
        ((c._p = new Promise(function (f, v) {
          ((c.onload = f), (c.onerror = v));
        })),
          We(u, 'link', a),
          (l.instance = u));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (e.count++,
          (l = ci.bind(e)),
          t.addEventListener('load', l),
          t.addEventListener('error', l)));
    }
  }
  var Ys = 0;
  function hv(e, t) {
    return (
      e.stylesheets && e.count === 0 && fi(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount ?
        function (l) {
          var a = setTimeout(function () {
            if ((e.stylesheets && fi(e, e.stylesheets), e.unsuspend)) {
              var u = e.unsuspend;
              ((e.unsuspend = null), u());
            }
          }, 6e4 + t);
          0 < e.imgBytes && Ys === 0 && (Ys = 62500 * J0());
          var n = setTimeout(
            function () {
              if (
                ((e.waitingForImages = !1),
                e.count === 0 &&
                  (e.stylesheets && fi(e, e.stylesheets), e.unsuspend))
              ) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            },
            (e.imgBytes > Ys ? 50 : 800) + t,
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
  function ci() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) fi(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var si = null;
  function fi(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (si = new Map()),
        t.forEach(mv, e),
        (si = null),
        ci.call(e)));
  }
  function mv(e, t) {
    if (!(t.state.loading & 4)) {
      var l = si.get(e);
      if (l) var a = l.get(null);
      else {
        ((l = new Map()), si.set(e, l));
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
        (a = ci.bind(this)),
        n.addEventListener('load', a),
        n.addEventListener('error', a),
        u ?
          u.parentNode.insertBefore(n, u.nextSibling)
        : ((e = e.nodeType === 9 ? e.head : e),
          e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Ln = {
    $$typeof: k,
    Provider: null,
    Consumer: null,
    _currentValue: W,
    _currentValue2: W,
    _threadCount: 0,
  };
  function vv(e, t, l, a, n, u, c, f, v) {
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
      (this.expirationTimes = Ui(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ui(0)),
      (this.hiddenUpdates = Ui(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = v),
      (this.incompleteTransitions = new Map()));
  }
  function eh(e, t, l, a, n, u, c, f, v, E, R, D) {
    return (
      (e = new vv(e, t, l, c, v, E, R, D, f)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = ht(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = gc()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: t }),
      xc(u),
      e
    );
  }
  function th(e) {
    return e ? ((e = ba), e) : ba;
  }
  function lh(e, t, l, a, n, u) {
    ((n = th(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = pl(t)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = bl(e, a, t)),
      l !== null && (st(l, e, t), _n(l, e, t)));
  }
  function ah(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Gs(e, t) {
    (ah(e, t), (e = e.alternate) && ah(e, t));
  }
  function nh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Zl(e, 67108864);
      (t !== null && st(t, e, 67108864), Gs(e, 67108864));
    }
  }
  function uh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = gt();
      t = Hi(t);
      var l = Zl(e, t);
      (l !== null && st(l, e, t), Gs(e, t));
    }
  }
  var ri = !0;
  function _v(e, t, l, a) {
    var n = O.T;
    O.T = null;
    var u = B.p;
    try {
      ((B.p = 2), Xs(e, t, l, a));
    } finally {
      ((B.p = u), (O.T = n));
    }
  }
  function yv(e, t, l, a) {
    var n = O.T;
    O.T = null;
    var u = B.p;
    try {
      ((B.p = 8), Xs(e, t, l, a));
    } finally {
      ((B.p = u), (O.T = n));
    }
  }
  function Xs(e, t, l, a) {
    if (ri) {
      var n = Qs(a);
      if (n === null) (zs(e, t, a, oi, l), ch(e, a));
      else if (pv(n, e, t, l, a)) a.stopPropagation();
      else if ((ch(e, a), t & 4 && -1 < gv.indexOf(e))) {
        for (; n !== null; ) {
          var u = fa(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var c = Yl(u.pendingLanes);
                  if (c !== 0) {
                    var f = u;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; c; ) {
                      var v = 1 << (31 - ot(c));
                      ((f.entanglements[1] |= v), (c &= ~v));
                    }
                    (Xt(u), (oe & 6) === 0 && ((Ju = ft() + 500), Mn(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((f = Zl(u, 2)), f !== null && st(f, u, 2), ku(), Gs(u, 2));
            }
          if (((u = Qs(a)), u === null && zs(e, t, a, oi, l), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else zs(e, t, a, null, l);
    }
  }
  function Qs(e) {
    return ((e = Zi(e)), ws(e));
  }
  var oi = null;
  function ws(e) {
    if (((oi = null), (e = sa(e)), e !== null)) {
      var t = m(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = p(t)), e !== null)) return e;
          e = null;
        } else if (l === 31) {
          if (((e = z(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((oi = e), null);
  }
  function ih(e) {
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
        switch (am()) {
          case hf:
            return 2;
          case mf:
            return 8;
          case eu:
          case nm:
            return 32;
          case vf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Zs = !1,
    Ol = null,
    Ml = null,
    Dl = null,
    Yn = new Map(),
    Gn = new Map(),
    Ul = [],
    gv =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      );
  function ch(e, t) {
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
        Yn.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Gn.delete(t.pointerId);
    }
  }
  function Xn(e, t, l, a, n, u) {
    return e === null || e.nativeEvent !== u ?
        ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        t !== null && ((t = fa(t)), t !== null && nh(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function pv(e, t, l, a, n) {
    switch (t) {
      case 'focusin':
        return ((Ol = Xn(Ol, e, t, l, a, n)), !0);
      case 'dragenter':
        return ((Ml = Xn(Ml, e, t, l, a, n)), !0);
      case 'mouseover':
        return ((Dl = Xn(Dl, e, t, l, a, n)), !0);
      case 'pointerover':
        var u = n.pointerId;
        return (Yn.set(u, Xn(Yn.get(u) || null, e, t, l, a, n)), !0);
      case 'gotpointercapture':
        return (
          (u = n.pointerId),
          Gn.set(u, Xn(Gn.get(u) || null, e, t, l, a, n)),
          !0
        );
    }
    return !1;
  }
  function sh(e) {
    var t = sa(e.target);
    if (t !== null) {
      var l = m(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = p(l)), t !== null)) {
            ((e.blockedOn = t),
              Sf(e.priority, function () {
                uh(l);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = z(l)), t !== null)) {
            ((e.blockedOn = t),
              Sf(e.priority, function () {
                uh(l);
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
  function di(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Qs(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        ((wi = a), l.target.dispatchEvent(a), (wi = null));
      } else return ((t = fa(l)), t !== null && nh(t), (e.blockedOn = l), !1);
      t.shift();
    }
    return !0;
  }
  function fh(e, t, l) {
    di(e) && l.delete(t);
  }
  function bv() {
    ((Zs = !1),
      Ol !== null && di(Ol) && (Ol = null),
      Ml !== null && di(Ml) && (Ml = null),
      Dl !== null && di(Dl) && (Dl = null),
      Yn.forEach(fh),
      Gn.forEach(fh));
  }
  function hi(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Zs ||
        ((Zs = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, bv)));
  }
  var mi = null;
  function rh(e) {
    mi !== e &&
      ((mi = e),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        mi === e && (mi = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            n = e[t + 2];
          if (typeof a != 'function') {
            if (ws(a || l) === null) continue;
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
      return hi(v, e);
    }
    (Ol !== null && hi(Ol, e),
      Ml !== null && hi(Ml, e),
      Dl !== null && hi(Dl, e),
      Yn.forEach(t),
      Gn.forEach(t));
    for (var l = 0; l < Ul.length; l++) {
      var a = Ul[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Ul.length && ((l = Ul[0]), l.blockedOn === null); )
      (sh(l), l.blockedOn === null && Ul.shift());
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          c = n[lt] || null;
        if (typeof u == 'function') c || rh(l);
        else if (c) {
          var f = null;
          if (u && u.hasAttribute('formAction')) {
            if (((n = u), (c = u[lt] || null))) f = c.formAction;
            else if (ws(n) !== null) continue;
          } else f = c.action;
          (typeof f == 'function' ? (l[a + 1] = f) : (l.splice(a, 3), (a -= 3)),
            rh(l));
        }
      }
  }
  function oh() {
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
  function Vs(e) {
    this._internalRoot = e;
  }
  ((vi.prototype.render = Vs.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      var l = t.current,
        a = gt();
      lh(l, a, e, t, null, null);
    }),
    (vi.prototype.unmount = Vs.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (lh(e.current, 2, null, e, null, null), ku(), (t[ca] = null));
        }
      }));
  function vi(e) {
    this._internalRoot = e;
  }
  vi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = bf();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Ul.length && t !== 0 && t < Ul[l].priority; l++);
      (Ul.splice(l, 0, e), l === 0 && sh(e));
    }
  };
  var dh = o.version;
  if (dh !== '19.2.4') throw Error(s(527, dh, '19.2.4'));
  B.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function' ?
          Error(s(188))
        : ((e = Object.keys(e).join(',')), Error(s(268, e)));
    return (
      (e = _(t)),
      (e = e !== null ? C(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Sv = {
    bundleType: 0,
    version: '19.2.4',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: O,
    reconcilerVersion: '19.2.4',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var _i = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_i.isDisabled && _i.supportsFiber)
      try {
        ((ka = _i.inject(Sv)), (rt = _i));
      } catch {}
  }
  return (
    (wn.createRoot = function (e, t) {
      if (!h(e)) throw Error(s(299));
      var l = !1,
        a = '',
        n = po,
        u = bo,
        c = So;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = eh(e, 1, !1, null, null, l, a, null, n, u, c, oh)),
        (e[ca] = t.current),
        js(e),
        new Vs(t)
      );
    }),
    (wn.hydrateRoot = function (e, t, l) {
      if (!h(e)) throw Error(s(299));
      var a = !1,
        n = '',
        u = po,
        c = bo,
        f = So,
        v = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (c = l.onCaughtError),
          l.onRecoverableError !== void 0 && (f = l.onRecoverableError),
          l.formState !== void 0 && (v = l.formState)),
        (t = eh(e, 1, !0, t, l ?? null, a, n, v, u, c, f, oh)),
        (t.context = th(null)),
        (l = t.current),
        (a = gt()),
        (a = Hi(a)),
        (n = pl(a)),
        (n.callback = null),
        bl(l, n, a),
        (l = a),
        (t.current.lanes = l),
        Fa(t, l),
        Xt(t),
        (e[ca] = t.current),
        js(e),
        new vi(t)
      );
    }),
    (wn.version = '19.2.4'),
    wn
  );
}
var xh;
function Ov() {
  if (xh) return Js.exports;
  xh = 1;
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
  return (i(), (Js.exports = Rv()), Js.exports);
}
var Mv = Ov(),
  N = nf();
var Eh = 'popstate';
function Dv(i = {}) {
  function o(h, m) {
    let {
      pathname: p = '/',
      search: z = '',
      hash: y = '',
    } = ia(h.location.hash.substring(1));
    return (
      !p.startsWith('/') && !p.startsWith('.') && (p = '/' + p),
      lf(
        '',
        { pathname: p, search: z, hash: y },
        (m.state && m.state.usr) || null,
        (m.state && m.state.key) || 'default',
      )
    );
  }
  function d(h, m) {
    let p = h.document.querySelector('base'),
      z = '';
    if (p && p.getAttribute('href')) {
      let y = h.location.href,
        _ = y.indexOf('#');
      z = _ === -1 ? y : y.slice(0, _);
    }
    return z + '#' + (typeof m == 'string' ? m : Jn(m));
  }
  function s(h, m) {
    Bt(
      h.pathname.charAt(0) === '/',
      `relative pathnames are not supported in hash history.push(${JSON.stringify(m)})`,
    );
  }
  return Hv(o, d, s, i);
}
function je(i, o) {
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
function Uv() {
  return Math.random().toString(36).substring(2, 10);
}
function Nh(i, o) {
  return { usr: i.state, key: i.key, idx: o };
}
function lf(i, o, d = null, s) {
  return {
    pathname: typeof i == 'string' ? i : i.pathname,
    search: '',
    hash: '',
    ...(typeof o == 'string' ? ia(o) : o),
    state: d,
    key: (o && o.key) || s || Uv(),
  };
}
function Jn({ pathname: i = '/', search: o = '', hash: d = '' }) {
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
function Hv(i, o, d, s = {}) {
  let { window: h = document.defaultView, v5Compat: m = !1 } = s,
    p = h.history,
    z = 'POP',
    y = null,
    _ = C();
  _ == null && ((_ = 0), p.replaceState({ ...p.state, idx: _ }, ''));
  function C() {
    return (p.state || { idx: null }).idx;
  }
  function T() {
    z = 'POP';
    let G = C(),
      K = G == null ? null : G - _;
    ((_ = G), y && y({ action: z, location: Z.location, delta: K }));
  }
  function H(G, K) {
    z = 'PUSH';
    let Y = lf(Z.location, G, K);
    (d && d(Y, G), (_ = C() + 1));
    let k = Nh(Y, _),
      xe = Z.createHref(Y);
    try {
      p.pushState(k, '', xe);
    } catch (Se) {
      if (Se instanceof DOMException && Se.name === 'DataCloneError') throw Se;
      h.location.assign(xe);
    }
    m && y && y({ action: z, location: Z.location, delta: 1 });
  }
  function w(G, K) {
    z = 'REPLACE';
    let Y = lf(Z.location, G, K);
    (d && d(Y, G), (_ = C()));
    let k = Nh(Y, _),
      xe = Z.createHref(Y);
    (p.replaceState(k, '', xe),
      m && y && y({ action: z, location: Z.location, delta: 0 }));
  }
  function F(G) {
    return Bv(G);
  }
  let Z = {
    get action() {
      return z;
    },
    get location() {
      return i(h, p);
    },
    listen(G) {
      if (y) throw new Error('A history only accepts one active listener');
      return (
        h.addEventListener(Eh, T),
        (y = G),
        () => {
          (h.removeEventListener(Eh, T), (y = null));
        }
      );
    },
    createHref(G) {
      return o(h, G);
    },
    createURL: F,
    encodeLocation(G) {
      let K = F(G);
      return { pathname: K.pathname, search: K.search, hash: K.hash };
    },
    push: H,
    replace: w,
    go(G) {
      return p.go(G);
    },
  };
  return Z;
}
function Bv(i, o = !1) {
  let d = 'http://localhost';
  (typeof window < 'u' &&
    (d =
      window.location.origin !== 'null' ?
        window.location.origin
      : window.location.href),
    je(d, 'No window.location.(origin|href) available to create URL'));
  let s = typeof i == 'string' ? i : Jn(i);
  return (
    (s = s.replace(/ $/, '%20')),
    !o && s.startsWith('//') && (s = d + s),
    new URL(s, d)
  );
}
function Ch(i, o, d = '/') {
  return qv(i, o, d, !1);
}
function qv(i, o, d, s) {
  let h = typeof o == 'string' ? ia(o) : o,
    m = rl(h.pathname || '/', d);
  if (m == null) return null;
  let p = Rh(i);
  Lv(p);
  let z = null;
  for (let y = 0; z == null && y < p.length; ++y) {
    let _ = kv(m);
    z = Jv(p[y], _, s);
  }
  return z;
}
function Rh(i, o = [], d = [], s = '', h = !1) {
  let m = (p, z, y = h, _) => {
    let C = {
      relativePath: _ === void 0 ? p.path || '' : _,
      caseSensitive: p.caseSensitive === !0,
      childrenIndex: z,
      route: p,
    };
    if (C.relativePath.startsWith('/')) {
      if (!C.relativePath.startsWith(s) && y) return;
      (je(
        C.relativePath.startsWith(s),
        `Absolute route path "${C.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (C.relativePath = C.relativePath.slice(s.length)));
    }
    let T = fl([s, C.relativePath]),
      H = d.concat(C);
    (p.children &&
      p.children.length > 0 &&
      (je(
        p.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${T}".`,
      ),
      Rh(p.children, o, H, T, y)),
      !(p.path == null && !p.index) &&
        o.push({ path: T, score: Vv(T, p.index), routesMeta: H }));
  };
  return (
    i.forEach((p, z) => {
      if (p.path === '' || !p.path?.includes('?')) m(p, z);
      else for (let y of Oh(p.path)) m(p, z, !0, y);
    }),
    o
  );
}
function Oh(i) {
  let o = i.split('/');
  if (o.length === 0) return [];
  let [d, ...s] = o,
    h = d.endsWith('?'),
    m = d.replace(/\?$/, '');
  if (s.length === 0) return h ? [m, ''] : [m];
  let p = Oh(s.join('/')),
    z = [];
  return (
    z.push(...p.map((y) => (y === '' ? m : [m, y].join('/')))),
    h && z.push(...p),
    z.map((y) => (i.startsWith('/') && y === '' ? '/' : y))
  );
}
function Lv(i) {
  i.sort((o, d) =>
    o.score !== d.score ?
      d.score - o.score
    : Kv(
        o.routesMeta.map((s) => s.childrenIndex),
        d.routesMeta.map((s) => s.childrenIndex),
      ),
  );
}
var Yv = /^:[\w-]+$/,
  Gv = 3,
  Xv = 2,
  Qv = 1,
  wv = 10,
  Zv = -2,
  Th = (i) => i === '*';
function Vv(i, o) {
  let d = i.split('/'),
    s = d.length;
  return (
    d.some(Th) && (s += Zv),
    o && (s += Xv),
    d
      .filter((h) => !Th(h))
      .reduce(
        (h, m) =>
          h +
          (Yv.test(m) ? Gv
          : m === '' ? Qv
          : wv),
        s,
      )
  );
}
function Kv(i, o) {
  return i.length === o.length && i.slice(0, -1).every((s, h) => s === o[h]) ?
      i[i.length - 1] - o[o.length - 1]
    : 0;
}
function Jv(i, o, d = !1) {
  let { routesMeta: s } = i,
    h = {},
    m = '/',
    p = [];
  for (let z = 0; z < s.length; ++z) {
    let y = s[z],
      _ = z === s.length - 1,
      C = m === '/' ? o : o.slice(m.length) || '/',
      T = Si(
        { path: y.relativePath, caseSensitive: y.caseSensitive, end: _ },
        C,
      ),
      H = y.route;
    if (
      (!T &&
        _ &&
        d &&
        !s[s.length - 1].route.index &&
        (T = Si(
          { path: y.relativePath, caseSensitive: y.caseSensitive, end: !1 },
          C,
        )),
      !T)
    )
      return null;
    (Object.assign(h, T.params),
      p.push({
        params: h,
        pathname: fl([m, T.pathname]),
        pathnameBase: Iv(fl([m, T.pathnameBase])),
        route: H,
      }),
      T.pathnameBase !== '/' && (m = fl([m, T.pathnameBase])));
  }
  return p;
}
function Si(i, o) {
  typeof i == 'string' && (i = { path: i, caseSensitive: !1, end: !0 });
  let [d, s] = $v(i.path, i.caseSensitive, i.end),
    h = o.match(d);
  if (!h) return null;
  let m = h[0],
    p = m.replace(/(.)\/+$/, '$1'),
    z = h.slice(1);
  return {
    params: s.reduce((_, { paramName: C, isOptional: T }, H) => {
      if (C === '*') {
        let F = z[H] || '';
        p = m.slice(0, m.length - F.length).replace(/(.)\/+$/, '$1');
      }
      const w = z[H];
      return (
        T && !w ? (_[C] = void 0) : (_[C] = (w || '').replace(/%2F/g, '/')),
        _
      );
    }, {}),
    pathname: m,
    pathnameBase: p,
    pattern: i,
  };
}
function $v(i, o = !1, d = !0) {
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
          (p, z, y) => (
            s.push({ paramName: z, isOptional: y != null }),
            y ? '/?([^\\/]+)?' : '/([^\\/]+)'
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
function kv(i) {
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
var Wv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Fv(i, o = '/') {
  let {
      pathname: d,
      search: s = '',
      hash: h = '',
    } = typeof i == 'string' ? ia(i) : i,
    m;
  return (
    d ?
      ((d = d.replace(/\/\/+/g, '/')),
      d.startsWith('/') ? (m = jh(d.substring(1), '/')) : (m = jh(d, o)))
    : (m = o),
    { pathname: m, search: e1(s), hash: t1(h) }
  );
}
function jh(i, o) {
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
function Pv(i) {
  return i.filter(
    (o, d) => d === 0 || (o.route.path && o.route.path.length > 0),
  );
}
function Mh(i) {
  let o = Pv(i);
  return o.map((d, s) => (s === o.length - 1 ? d.pathname : d.pathnameBase));
}
function Dh(i, o, d, s = !1) {
  let h;
  typeof i == 'string' ?
    (h = ia(i))
  : ((h = { ...i }),
    je(
      !h.pathname || !h.pathname.includes('?'),
      Ps('?', 'pathname', 'search', h),
    ),
    je(
      !h.pathname || !h.pathname.includes('#'),
      Ps('#', 'pathname', 'hash', h),
    ),
    je(!h.search || !h.search.includes('#'), Ps('#', 'search', 'hash', h)));
  let m = i === '' || h.pathname === '',
    p = m ? '/' : h.pathname,
    z;
  if (p == null) z = d;
  else {
    let T = o.length - 1;
    if (!s && p.startsWith('..')) {
      let H = p.split('/');
      for (; H[0] === '..'; ) (H.shift(), (T -= 1));
      h.pathname = H.join('/');
    }
    z = T >= 0 ? o[T] : '/';
  }
  let y = Fv(h, z),
    _ = p && p !== '/' && p.endsWith('/'),
    C = (m || p === '.') && d.endsWith('/');
  return (!y.pathname.endsWith('/') && (_ || C) && (y.pathname += '/'), y);
}
var fl = (i) => i.join('/').replace(/\/\/+/g, '/'),
  Iv = (i) => i.replace(/\/+$/, '').replace(/^\/*/, '/'),
  e1 = (i) =>
    !i || i === '?' ? ''
    : i.startsWith('?') ? i
    : '?' + i,
  t1 = (i) =>
    !i || i === '#' ? ''
    : i.startsWith('#') ? i
    : '#' + i,
  l1 = class {
    constructor(i, o, d, s = !1) {
      ((this.status = i),
        (this.statusText = o || ''),
        (this.internal = s),
        d instanceof Error ?
          ((this.data = d.toString()), (this.error = d))
        : (this.data = d));
    }
  };
function a1(i) {
  return (
    i != null &&
    typeof i.status == 'number' &&
    typeof i.statusText == 'string' &&
    typeof i.internal == 'boolean' &&
    'data' in i
  );
}
function n1(i) {
  return (
    i
      .map((o) => o.route.path)
      .filter(Boolean)
      .join('/')
      .replace(/\/\/*/g, '/') || '/'
  );
}
var Uh =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
function Hh(i, o) {
  let d = i;
  if (typeof d != 'string' || !Wv.test(d))
    return { absoluteURL: void 0, isExternal: !1, to: d };
  let s = d,
    h = !1;
  if (Uh)
    try {
      let m = new URL(window.location.href),
        p = d.startsWith('//') ? new URL(m.protocol + d) : new URL(d),
        z = rl(p.pathname, o);
      p.origin === m.origin && z != null ?
        (d = z + p.search + p.hash)
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
var Bh = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(Bh);
var u1 = ['GET', ...Bh];
new Set(u1);
var Ja = N.createContext(null);
Ja.displayName = 'DataRouter';
var xi = N.createContext(null);
xi.displayName = 'DataRouterState';
var i1 = N.createContext(!1),
  qh = N.createContext({ isTransitioning: !1 });
qh.displayName = 'ViewTransition';
var c1 = N.createContext(new Map());
c1.displayName = 'Fetchers';
var s1 = N.createContext(null);
s1.displayName = 'Await';
var Ot = N.createContext(null);
Ot.displayName = 'Navigation';
var $n = N.createContext(null);
$n.displayName = 'Location';
var Qt = N.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Qt.displayName = 'Route';
var uf = N.createContext(null);
uf.displayName = 'RouteError';
var Lh = 'REACT_ROUTER_ERROR',
  f1 = 'REDIRECT',
  r1 = 'ROUTE_ERROR_RESPONSE';
function o1(i) {
  if (i.startsWith(`${Lh}:${f1}:{`))
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
function d1(i) {
  if (i.startsWith(`${Lh}:${r1}:{`))
    try {
      let o = JSON.parse(i.slice(40));
      if (
        typeof o == 'object' &&
        o &&
        typeof o.status == 'number' &&
        typeof o.statusText == 'string'
      )
        return new l1(o.status, o.statusText, o.data);
    } catch {}
}
function h1(i, { relative: o } = {}) {
  je(
    kn(),
    'useHref() may be used only in the context of a <Router> component.',
  );
  let { basename: d, navigator: s } = N.useContext(Ot),
    { hash: h, pathname: m, search: p } = Wn(i, { relative: o }),
    z = m;
  return (
    d !== '/' && (z = m === '/' ? d : fl([d, m])),
    s.createHref({ pathname: z, search: p, hash: h })
  );
}
function kn() {
  return N.useContext($n) != null;
}
function Bl() {
  return (
    je(
      kn(),
      'useLocation() may be used only in the context of a <Router> component.',
    ),
    N.useContext($n).location
  );
}
var Yh =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Gh(i) {
  N.useContext(Ot).static || N.useLayoutEffect(i);
}
function m1() {
  let { isDataRoute: i } = N.useContext(Qt);
  return i ? z1() : v1();
}
function v1() {
  je(
    kn(),
    'useNavigate() may be used only in the context of a <Router> component.',
  );
  let i = N.useContext(Ja),
    { basename: o, navigator: d } = N.useContext(Ot),
    { matches: s } = N.useContext(Qt),
    { pathname: h } = Bl(),
    m = JSON.stringify(Mh(s)),
    p = N.useRef(!1);
  return (
    Gh(() => {
      p.current = !0;
    }),
    N.useCallback(
      (y, _ = {}) => {
        if ((Bt(p.current, Yh), !p.current)) return;
        if (typeof y == 'number') {
          d.go(y);
          return;
        }
        let C = Dh(y, JSON.parse(m), h, _.relative === 'path');
        (i == null &&
          o !== '/' &&
          (C.pathname = C.pathname === '/' ? o : fl([o, C.pathname])),
          (_.replace ? d.replace : d.push)(C, _.state, _));
      },
      [o, d, m, h, i],
    )
  );
}
N.createContext(null);
function Xh() {
  let { matches: i } = N.useContext(Qt),
    o = i[i.length - 1];
  return o ? o.params : {};
}
function Wn(i, { relative: o } = {}) {
  let { matches: d } = N.useContext(Qt),
    { pathname: s } = Bl(),
    h = JSON.stringify(Mh(d));
  return N.useMemo(() => Dh(i, JSON.parse(h), s, o === 'path'), [i, h, s, o]);
}
function _1(i, o) {
  return Qh(i, o);
}
function Qh(i, o, d, s, h) {
  je(
    kn(),
    'useRoutes() may be used only in the context of a <Router> component.',
  );
  let { navigator: m } = N.useContext(Ot),
    { matches: p } = N.useContext(Qt),
    z = p[p.length - 1],
    y = z ? z.params : {},
    _ = z ? z.pathname : '/',
    C = z ? z.pathnameBase : '/',
    T = z && z.route;
  {
    let Y = (T && T.path) || '';
    Zh(
      _,
      !T || Y.endsWith('*') || Y.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${_}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y === '/' ? '*' : `${Y}/*`}">.`,
    );
  }
  let H = Bl(),
    w;
  if (o) {
    let Y = typeof o == 'string' ? ia(o) : o;
    (je(
      C === '/' || Y.pathname?.startsWith(C),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${C}" but pathname "${Y.pathname}" was given in the \`location\` prop.`,
    ),
      (w = Y));
  } else w = H;
  let F = w.pathname || '/',
    Z = F;
  if (C !== '/') {
    let Y = C.replace(/^\//, '').split('/');
    Z = '/' + F.replace(/^\//, '').split('/').slice(Y.length).join('/');
  }
  let G = Ch(i, { pathname: Z });
  (Bt(
    T || G != null,
    `No routes matched location "${w.pathname}${w.search}${w.hash}" `,
  ),
    Bt(
      G == null ||
        G[G.length - 1].route.element !== void 0 ||
        G[G.length - 1].route.Component !== void 0 ||
        G[G.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let K = S1(
    G &&
      G.map((Y) =>
        Object.assign({}, Y, {
          params: Object.assign({}, y, Y.params),
          pathname: fl([
            C,
            m.encodeLocation ?
              m.encodeLocation(
                Y.pathname.replace(/\?/g, '%3F').replace(/#/g, '%23'),
              ).pathname
            : Y.pathname,
          ]),
          pathnameBase:
            Y.pathnameBase === '/' ?
              C
            : fl([
                C,
                m.encodeLocation ?
                  m.encodeLocation(
                    Y.pathnameBase.replace(/\?/g, '%3F').replace(/#/g, '%23'),
                  ).pathname
                : Y.pathnameBase,
              ]),
        }),
      ),
    p,
    d,
    s,
    h,
  );
  return o && K ?
      N.createElement(
        $n.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              ...w,
            },
            navigationType: 'POP',
          },
        },
        K,
      )
    : K;
}
function y1() {
  let i = j1(),
    o =
      a1(i) ? `${i.status} ${i.statusText}`
      : i instanceof Error ? i.message
      : JSON.stringify(i),
    d = i instanceof Error ? i.stack : null,
    s = 'rgba(200,200,200, 0.5)',
    h = { padding: '0.5rem', backgroundColor: s },
    m = { padding: '2px 4px', backgroundColor: s },
    p = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', i),
    (p = N.createElement(
      N.Fragment,
      null,
      N.createElement('p', null, '💿 Hey developer 👋'),
      N.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        N.createElement('code', { style: m }, 'ErrorBoundary'),
        ' or',
        ' ',
        N.createElement('code', { style: m }, 'errorElement'),
        ' prop on your route.',
      ),
    )),
    N.createElement(
      N.Fragment,
      null,
      N.createElement('h2', null, 'Unexpected Application Error!'),
      N.createElement('h3', { style: { fontStyle: 'italic' } }, o),
      d ? N.createElement('pre', { style: h }, d) : null,
      p,
    )
  );
}
var g1 = N.createElement(y1, null),
  wh = class extends N.Component {
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
        const d = d1(i.digest);
        d && (i = d);
      }
      let o =
        i !== void 0 ?
          N.createElement(
            Qt.Provider,
            { value: this.props.routeContext },
            N.createElement(uf.Provider, {
              value: i,
              children: this.props.component,
            }),
          )
        : this.props.children;
      return this.context ? N.createElement(p1, { error: i }, o) : o;
    }
  };
wh.contextType = i1;
var Is = new WeakMap();
function p1({ children: i, error: o }) {
  let { basename: d } = N.useContext(Ot);
  if (
    typeof o == 'object' &&
    o &&
    'digest' in o &&
    typeof o.digest == 'string'
  ) {
    let s = o1(o.digest);
    if (s) {
      let h = Is.get(o);
      if (h) throw h;
      let m = Hh(s.location, d);
      if (Uh && !Is.get(o))
        if (m.isExternal || s.reloadDocument)
          window.location.href = m.absoluteURL || m.to;
        else {
          const p = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(m.to, {
              replace: s.replace,
            }),
          );
          throw (Is.set(o, p), p);
        }
      return N.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${m.absoluteURL || m.to}`,
      });
    }
  }
  return i;
}
function b1({ routeContext: i, match: o, children: d }) {
  let s = N.useContext(Ja);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = o.route.id),
    N.createElement(Qt.Provider, { value: i }, d)
  );
}
function S1(i, o = [], d = null, s = null, h = null) {
  if (i == null) {
    if (!d) return null;
    if (d.errors) i = d.matches;
    else if (o.length === 0 && !d.initialized && d.matches.length > 0)
      i = d.matches;
    else return null;
  }
  let m = i,
    p = d?.errors;
  if (p != null) {
    let C = m.findIndex((T) => T.route.id && p?.[T.route.id] !== void 0);
    (je(
      C >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(p).join(',')}`,
    ),
      (m = m.slice(0, Math.min(m.length, C + 1))));
  }
  let z = !1,
    y = -1;
  if (d)
    for (let C = 0; C < m.length; C++) {
      let T = m[C];
      if (
        ((T.route.HydrateFallback || T.route.hydrateFallbackElement) && (y = C),
        T.route.id)
      ) {
        let { loaderData: H, errors: w } = d,
          F =
            T.route.loader &&
            !H.hasOwnProperty(T.route.id) &&
            (!w || w[T.route.id] === void 0);
        if (T.route.lazy || F) {
          ((z = !0), y >= 0 ? (m = m.slice(0, y + 1)) : (m = [m[0]]));
          break;
        }
      }
    }
  let _ =
    d && s ?
      (C, T) => {
        s(C, {
          location: d.location,
          params: d.matches?.[0]?.params ?? {},
          unstable_pattern: n1(d.matches),
          errorInfo: T,
        });
      }
    : void 0;
  return m.reduceRight((C, T, H) => {
    let w,
      F = !1,
      Z = null,
      G = null;
    d &&
      ((w = p && T.route.id ? p[T.route.id] : void 0),
      (Z = T.route.errorElement || g1),
      z &&
        (y < 0 && H === 0 ?
          (Zh(
            'route-fallback',
            !1,
            'No `HydrateFallback` element provided to render during initial hydration',
          ),
          (F = !0),
          (G = null))
        : y === H && ((F = !0), (G = T.route.hydrateFallbackElement || null))));
    let K = o.concat(m.slice(0, H + 1)),
      Y = () => {
        let k;
        return (
          w ? (k = Z)
          : F ? (k = G)
          : T.route.Component ? (k = N.createElement(T.route.Component, null))
          : T.route.element ? (k = T.route.element)
          : (k = C),
          N.createElement(b1, {
            match: T,
            routeContext: { outlet: C, matches: K, isDataRoute: d != null },
            children: k,
          })
        );
      };
    return d && (T.route.ErrorBoundary || T.route.errorElement || H === 0) ?
        N.createElement(wh, {
          location: d.location,
          revalidation: d.revalidation,
          component: Z,
          error: w,
          children: Y(),
          routeContext: { outlet: null, matches: K, isDataRoute: !0 },
          onError: _,
        })
      : Y();
  }, null);
}
function cf(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function x1(i) {
  let o = N.useContext(Ja);
  return (je(o, cf(i)), o);
}
function E1(i) {
  let o = N.useContext(xi);
  return (je(o, cf(i)), o);
}
function N1(i) {
  let o = N.useContext(Qt);
  return (je(o, cf(i)), o);
}
function sf(i) {
  let o = N1(i),
    d = o.matches[o.matches.length - 1];
  return (
    je(
      d.route.id,
      `${i} can only be used on routes that contain a unique "id"`,
    ),
    d.route.id
  );
}
function T1() {
  return sf('useRouteId');
}
function j1() {
  let i = N.useContext(uf),
    o = E1('useRouteError'),
    d = sf('useRouteError');
  return i !== void 0 ? i : o.errors?.[d];
}
function z1() {
  let { router: i } = x1('useNavigate'),
    o = sf('useNavigate'),
    d = N.useRef(!1);
  return (
    Gh(() => {
      d.current = !0;
    }),
    N.useCallback(
      async (h, m = {}) => {
        (Bt(d.current, Yh),
          d.current &&
            (typeof h == 'number' ?
              await i.navigate(h)
            : await i.navigate(h, { fromRouteId: o, ...m })));
      },
      [i, o],
    )
  );
}
var zh = {};
function Zh(i, o, d) {
  !o && !zh[i] && ((zh[i] = !0), Bt(!1, d));
}
N.memo(A1);
function A1({ routes: i, future: o, state: d, onError: s }) {
  return Qh(i, void 0, d, s, o);
}
function sl(i) {
  je(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.',
  );
}
function C1({
  basename: i = '/',
  children: o = null,
  location: d,
  navigationType: s = 'POP',
  navigator: h,
  static: m = !1,
  unstable_useTransitions: p,
}) {
  je(
    !kn(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.',
  );
  let z = i.replace(/^\/*/, '/'),
    y = N.useMemo(
      () => ({
        basename: z,
        navigator: h,
        static: m,
        unstable_useTransitions: p,
        future: {},
      }),
      [z, h, m, p],
    );
  typeof d == 'string' && (d = ia(d));
  let {
      pathname: _ = '/',
      search: C = '',
      hash: T = '',
      state: H = null,
      key: w = 'default',
    } = d,
    F = N.useMemo(() => {
      let Z = rl(_, z);
      return Z == null ? null : (
          {
            location: { pathname: Z, search: C, hash: T, state: H, key: w },
            navigationType: s,
          }
        );
    }, [z, _, C, T, H, w, s]);
  return (
    Bt(
      F != null,
      `<Router basename="${z}"> is not able to match the URL "${_}${C}${T}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    F == null ? null : (
      N.createElement(
        Ot.Provider,
        { value: y },
        N.createElement($n.Provider, { children: o, value: F }),
      )
    )
  );
}
function R1({ children: i, location: o }) {
  return _1(af(i), o);
}
function af(i, o = []) {
  let d = [];
  return (
    N.Children.forEach(i, (s, h) => {
      if (!N.isValidElement(s)) return;
      let m = [...o, h];
      if (s.type === N.Fragment) {
        d.push.apply(d, af(s.props.children, m));
        return;
      }
      (je(
        s.type === sl,
        `[${typeof s.type == 'string' ? s.type : s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        je(
          !s.props.index || !s.props.children,
          'An index route cannot have child routes.',
        ));
      let p = {
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
      (s.props.children && (p.children = af(s.props.children, m)), d.push(p));
    }),
    d
  );
}
var pi = 'get',
  bi = 'application/x-www-form-urlencoded';
function Ei(i) {
  return typeof HTMLElement < 'u' && i instanceof HTMLElement;
}
function O1(i) {
  return Ei(i) && i.tagName.toLowerCase() === 'button';
}
function M1(i) {
  return Ei(i) && i.tagName.toLowerCase() === 'form';
}
function D1(i) {
  return Ei(i) && i.tagName.toLowerCase() === 'input';
}
function U1(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function H1(i, o) {
  return i.button === 0 && (!o || o === '_self') && !U1(i);
}
var yi = null;
function B1() {
  if (yi === null)
    try {
      (new FormData(document.createElement('form'), 0), (yi = !1));
    } catch {
      yi = !0;
    }
  return yi;
}
var q1 = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function ef(i) {
  return i != null && !q1.has(i) ?
      (Bt(
        !1,
        `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bi}"`,
      ),
      null)
    : i;
}
function L1(i, o) {
  let d, s, h, m, p;
  if (M1(i)) {
    let z = i.getAttribute('action');
    ((s = z ? rl(z, o) : null),
      (d = i.getAttribute('method') || pi),
      (h = ef(i.getAttribute('enctype')) || bi),
      (m = new FormData(i)));
  } else if (O1(i) || (D1(i) && (i.type === 'submit' || i.type === 'image'))) {
    let z = i.form;
    if (z == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let y = i.getAttribute('formaction') || z.getAttribute('action');
    if (
      ((s = y ? rl(y, o) : null),
      (d = i.getAttribute('formmethod') || z.getAttribute('method') || pi),
      (h =
        ef(i.getAttribute('formenctype')) ||
        ef(z.getAttribute('enctype')) ||
        bi),
      (m = new FormData(z, i)),
      !B1())
    ) {
      let { name: _, type: C, value: T } = i;
      if (C === 'image') {
        let H = _ ? `${_}.` : '';
        (m.append(`${H}x`, '0'), m.append(`${H}y`, '0'));
      } else _ && m.append(_, T);
    }
  } else {
    if (Ei(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((d = pi), (s = null), (h = bi), (p = i));
  }
  return (
    m && h === 'text/plain' && ((p = m), (m = void 0)),
    { action: s, method: d.toLowerCase(), encType: h, formData: m, body: p }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function ff(i, o) {
  if (i === !1 || i === null || typeof i > 'u') throw new Error(o);
}
function Y1(i, o, d, s) {
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
async function G1(i, o) {
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
function X1(i) {
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
        let p = await G1(m, d);
        return p.links ? p.links() : [];
      }
      return [];
    }),
  );
  return K1(
    s
      .flat(1)
      .filter(X1)
      .filter((h) => h.rel === 'stylesheet' || h.rel === 'preload')
      .map((h) =>
        h.rel === 'stylesheet' ?
          { ...h, rel: 'prefetch', as: 'style' }
        : { ...h, rel: 'prefetch' },
      ),
  );
}
function Ah(i, o, d, s, h, m) {
  let p = (y, _) => (d[_] ? y.route.id !== d[_].route.id : !0),
    z = (y, _) =>
      d[_].pathname !== y.pathname ||
      (d[_].route.path?.endsWith('*') && d[_].params['*'] !== y.params['*']);
  return (
    m === 'assets' ? o.filter((y, _) => p(y, _) || z(y, _))
    : m === 'data' ?
      o.filter((y, _) => {
        let C = s.routes[y.route.id];
        if (!C || !C.hasLoader) return !1;
        if (p(y, _) || z(y, _)) return !0;
        if (y.route.shouldRevalidate) {
          let T = y.route.shouldRevalidate({
            currentUrl: new URL(h.pathname + h.search + h.hash, window.origin),
            currentParams: d[0]?.params || {},
            nextUrl: new URL(i, window.origin),
            nextParams: y.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof T == 'boolean') return T;
        }
        return !0;
      })
    : []
  );
}
function w1(i, o, { includeHydrateFallback: d } = {}) {
  return Z1(
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
function Z1(i) {
  return [...new Set(i)];
}
function V1(i) {
  let o = {},
    d = Object.keys(i).sort();
  for (let s of d) o[s] = i[s];
  return o;
}
function K1(i, o) {
  let d = new Set();
  return (
    new Set(o),
    i.reduce((s, h) => {
      let m = JSON.stringify(V1(h));
      return (d.has(m) || (d.add(m), s.push({ key: m, link: h })), s);
    }, [])
  );
}
function Vh() {
  let i = N.useContext(Ja);
  return (
    ff(
      i,
      'You must render this element inside a <DataRouterContext.Provider> element',
    ),
    i
  );
}
function J1() {
  let i = N.useContext(xi);
  return (
    ff(
      i,
      'You must render this element inside a <DataRouterStateContext.Provider> element',
    ),
    i
  );
}
var rf = N.createContext(void 0);
rf.displayName = 'FrameworkContext';
function Kh() {
  let i = N.useContext(rf);
  return (
    ff(i, 'You must render this element inside a <HydratedRouter> element'),
    i
  );
}
function $1(i, o) {
  let d = N.useContext(rf),
    [s, h] = N.useState(!1),
    [m, p] = N.useState(!1),
    {
      onFocus: z,
      onBlur: y,
      onMouseEnter: _,
      onMouseLeave: C,
      onTouchStart: T,
    } = o,
    H = N.useRef(null);
  (N.useEffect(() => {
    if ((i === 'render' && p(!0), i === 'viewport')) {
      let Z = (K) => {
          K.forEach((Y) => {
            p(Y.isIntersecting);
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
    N.useEffect(() => {
      if (s) {
        let Z = setTimeout(() => {
          p(!0);
        }, 100);
        return () => {
          clearTimeout(Z);
        };
      }
    }, [s]));
  let w = () => {
      h(!0);
    },
    F = () => {
      (h(!1), p(!1));
    };
  return (
    d ?
      i !== 'intent' ?
        [m, H, {}]
      : [
          m,
          H,
          {
            onFocus: Zn(z, w),
            onBlur: Zn(y, F),
            onMouseEnter: Zn(_, w),
            onMouseLeave: Zn(C, F),
            onTouchStart: Zn(T, w),
          },
        ]
    : [!1, H, {}]
  );
}
function Zn(i, o) {
  return (d) => {
    (i && i(d), d.defaultPrevented || o(d));
  };
}
function k1({ page: i, ...o }) {
  let { router: d } = Vh(),
    s = N.useMemo(() => Ch(d.routes, i, d.basename), [d.routes, i, d.basename]);
  return s ? N.createElement(F1, { page: i, matches: s, ...o }) : null;
}
function W1(i) {
  let { manifest: o, routeModules: d } = Kh(),
    [s, h] = N.useState([]);
  return (
    N.useEffect(() => {
      let m = !1;
      return (
        Q1(i, o, d).then((p) => {
          m || h(p);
        }),
        () => {
          m = !0;
        }
      );
    }, [i, o, d]),
    s
  );
}
function F1({ page: i, matches: o, ...d }) {
  let s = Bl(),
    { future: h, manifest: m, routeModules: p } = Kh(),
    { basename: z } = Vh(),
    { loaderData: y, matches: _ } = J1(),
    C = N.useMemo(() => Ah(i, o, _, m, s, 'data'), [i, o, _, m, s]),
    T = N.useMemo(() => Ah(i, o, _, m, s, 'assets'), [i, o, _, m, s]),
    H = N.useMemo(() => {
      if (i === s.pathname + s.search + s.hash) return [];
      let Z = new Set(),
        G = !1;
      if (
        (o.forEach((Y) => {
          let k = m.routes[Y.route.id];
          !k ||
            !k.hasLoader ||
            ((
              (!C.some((xe) => xe.route.id === Y.route.id) &&
                Y.route.id in y &&
                p[Y.route.id]?.shouldRevalidate) ||
              k.hasClientLoader
            ) ?
              (G = !0)
            : Z.add(Y.route.id));
        }),
        Z.size === 0)
      )
        return [];
      let K = Y1(i, z, h.unstable_trailingSlashAwareDataRequests, 'data');
      return (
        G &&
          Z.size > 0 &&
          K.searchParams.set(
            '_routes',
            o
              .filter((Y) => Z.has(Y.route.id))
              .map((Y) => Y.route.id)
              .join(','),
          ),
        [K.pathname + K.search]
      );
    }, [z, h.unstable_trailingSlashAwareDataRequests, y, s, m, C, o, i, p]),
    w = N.useMemo(() => w1(T, m), [T, m]),
    F = W1(T);
  return N.createElement(
    N.Fragment,
    null,
    H.map((Z) =>
      N.createElement('link', {
        key: Z,
        rel: 'prefetch',
        as: 'fetch',
        href: Z,
        ...d,
      }),
    ),
    w.map((Z) =>
      N.createElement('link', { key: Z, rel: 'modulepreload', href: Z, ...d }),
    ),
    F.map(({ key: Z, link: G }) =>
      N.createElement('link', {
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
var I1 =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  I1 && (window.__reactRouterVersion = '7.13.0');
} catch {}
function e_({
  basename: i,
  children: o,
  unstable_useTransitions: d,
  window: s,
}) {
  let h = N.useRef();
  h.current == null && (h.current = Dv({ window: s, v5Compat: !0 }));
  let m = h.current,
    [p, z] = N.useState({ action: m.action, location: m.location }),
    y = N.useCallback(
      (_) => {
        d === !1 ? z(_) : N.startTransition(() => z(_));
      },
      [d],
    );
  return (
    N.useLayoutEffect(() => m.listen(y), [m, y]),
    N.createElement(C1, {
      basename: i,
      children: o,
      location: p.location,
      navigationType: p.action,
      navigator: m,
      unstable_useTransitions: d,
    })
  );
}
var Jh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ka = N.forwardRef(function (
    {
      onClick: o,
      discover: d = 'render',
      prefetch: s = 'none',
      relative: h,
      reloadDocument: m,
      replace: p,
      state: z,
      target: y,
      to: _,
      preventScrollReset: C,
      viewTransition: T,
      unstable_defaultShouldRevalidate: H,
      ...w
    },
    F,
  ) {
    let { basename: Z, unstable_useTransitions: G } = N.useContext(Ot),
      K = typeof _ == 'string' && Jh.test(_),
      Y = Hh(_, Z);
    _ = Y.to;
    let k = h1(_, { relative: h }),
      [xe, Se, ze] = $1(s, w),
      I = a_(_, {
        replace: p,
        state: z,
        target: y,
        preventScrollReset: C,
        relative: h,
        viewTransition: T,
        unstable_defaultShouldRevalidate: H,
        unstable_useTransitions: G,
      });
    function Re(pt) {
      (o && o(pt), pt.defaultPrevented || I(pt));
    }
    let Ve = N.createElement('a', {
      ...w,
      ...ze,
      'href': Y.absoluteURL || k,
      'onClick': Y.isExternal || m ? o : Re,
      'ref': P1(F, Se),
      'target': y,
      'data-discover': !K && d === 'render' ? 'true' : void 0,
    });
    return xe && !K ?
        N.createElement(N.Fragment, null, Ve, N.createElement(k1, { page: k }))
      : Ve;
  });
Ka.displayName = 'Link';
var na = N.forwardRef(function (
  {
    'aria-current': o = 'page',
    'caseSensitive': d = !1,
    'className': s = '',
    'end': h = !1,
    'style': m,
    'to': p,
    'viewTransition': z,
    'children': y,
    ..._
  },
  C,
) {
  let T = Wn(p, { relative: _.relative }),
    H = Bl(),
    w = N.useContext(xi),
    { navigator: F, basename: Z } = N.useContext(Ot),
    G = w != null && s_(T) && z === !0,
    K = F.encodeLocation ? F.encodeLocation(T).pathname : T.pathname,
    Y = H.pathname,
    k =
      w && w.navigation && w.navigation.location ?
        w.navigation.location.pathname
      : null;
  (d ||
    ((Y = Y.toLowerCase()),
    (k = k ? k.toLowerCase() : null),
    (K = K.toLowerCase())),
    k && Z && (k = rl(k, Z) || k));
  const xe = K !== '/' && K.endsWith('/') ? K.length - 1 : K.length;
  let Se = Y === K || (!h && Y.startsWith(K) && Y.charAt(xe) === '/'),
    ze =
      k != null &&
      (k === K || (!h && k.startsWith(K) && k.charAt(K.length) === '/')),
    I = { isActive: Se, isPending: ze, isTransitioning: G },
    Re = Se ? o : void 0,
    Ve;
  typeof s == 'function' ?
    (Ve = s(I))
  : (Ve = [
      s,
      Se ? 'active' : null,
      ze ? 'pending' : null,
      G ? 'transitioning' : null,
    ]
      .filter(Boolean)
      .join(' '));
  let pt = typeof m == 'function' ? m(I) : m;
  return N.createElement(
    Ka,
    {
      ..._,
      'aria-current': Re,
      'className': Ve,
      'ref': C,
      'style': pt,
      'to': p,
      'viewTransition': z,
    },
    typeof y == 'function' ? y(I) : y,
  );
});
na.displayName = 'NavLink';
var t_ = N.forwardRef(
  (
    {
      discover: i = 'render',
      fetcherKey: o,
      navigate: d,
      reloadDocument: s,
      replace: h,
      state: m,
      method: p = pi,
      action: z,
      onSubmit: y,
      relative: _,
      preventScrollReset: C,
      viewTransition: T,
      unstable_defaultShouldRevalidate: H,
      ...w
    },
    F,
  ) => {
    let { unstable_useTransitions: Z } = N.useContext(Ot),
      G = i_(),
      K = c_(z, { relative: _ }),
      Y = p.toLowerCase() === 'get' ? 'get' : 'post',
      k = typeof z == 'string' && Jh.test(z),
      xe = (Se) => {
        if ((y && y(Se), Se.defaultPrevented)) return;
        Se.preventDefault();
        let ze = Se.nativeEvent.submitter,
          I = ze?.getAttribute('formmethod') || p,
          Re = () =>
            G(ze || Se.currentTarget, {
              fetcherKey: o,
              method: I,
              navigate: d,
              replace: h,
              state: m,
              relative: _,
              preventScrollReset: C,
              viewTransition: T,
              unstable_defaultShouldRevalidate: H,
            });
        Z && d !== !1 ? N.startTransition(() => Re()) : Re();
      };
    return N.createElement('form', {
      'ref': F,
      'method': Y,
      'action': K,
      'onSubmit': s ? y : xe,
      ...w,
      'data-discover': !k && i === 'render' ? 'true' : void 0,
    });
  },
);
t_.displayName = 'Form';
function l_(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function $h(i) {
  let o = N.useContext(Ja);
  return (je(o, l_(i)), o);
}
function a_(
  i,
  {
    target: o,
    replace: d,
    state: s,
    preventScrollReset: h,
    relative: m,
    viewTransition: p,
    unstable_defaultShouldRevalidate: z,
    unstable_useTransitions: y,
  } = {},
) {
  let _ = m1(),
    C = Bl(),
    T = Wn(i, { relative: m });
  return N.useCallback(
    (H) => {
      if (H1(H, o)) {
        H.preventDefault();
        let w = d !== void 0 ? d : Jn(C) === Jn(T),
          F = () =>
            _(i, {
              replace: w,
              state: s,
              preventScrollReset: h,
              relative: m,
              viewTransition: p,
              unstable_defaultShouldRevalidate: z,
            });
        y ? N.startTransition(() => F()) : F();
      }
    },
    [C, _, T, d, s, o, i, h, m, p, z, y],
  );
}
var n_ = 0,
  u_ = () => `__${String(++n_)}__`;
function i_() {
  let { router: i } = $h('useSubmit'),
    { basename: o } = N.useContext(Ot),
    d = T1(),
    s = i.fetch,
    h = i.navigate;
  return N.useCallback(
    async (m, p = {}) => {
      let { action: z, method: y, encType: _, formData: C, body: T } = L1(m, o);
      if (p.navigate === !1) {
        let H = p.fetcherKey || u_();
        await s(H, d, p.action || z, {
          unstable_defaultShouldRevalidate: p.unstable_defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: C,
          body: T,
          formMethod: p.method || y,
          formEncType: p.encType || _,
          flushSync: p.flushSync,
        });
      } else
        await h(p.action || z, {
          unstable_defaultShouldRevalidate: p.unstable_defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: C,
          body: T,
          formMethod: p.method || y,
          formEncType: p.encType || _,
          replace: p.replace,
          state: p.state,
          fromRouteId: d,
          flushSync: p.flushSync,
          viewTransition: p.viewTransition,
        });
    },
    [s, h, o, d],
  );
}
function c_(i, { relative: o } = {}) {
  let { basename: d } = N.useContext(Ot),
    s = N.useContext(Qt);
  je(s, 'useFormAction must be used inside a RouteContext');
  let [h] = s.matches.slice(-1),
    m = { ...Wn(i || '.', { relative: o }) },
    p = Bl();
  if (i == null) {
    m.search = p.search;
    let z = new URLSearchParams(m.search),
      y = z.getAll('index');
    if (y.some((C) => C === '')) {
      (z.delete('index'),
        y.filter((T) => T).forEach((T) => z.append('index', T)));
      let C = z.toString();
      m.search = C ? `?${C}` : '';
    }
  }
  return (
    (!i || i === '.') &&
      h.route.index &&
      (m.search = m.search ? m.search.replace(/^\?/, '?index&') : '?index'),
    d !== '/' && (m.pathname = m.pathname === '/' ? d : fl([d, m.pathname])),
    Jn(m)
  );
}
function s_(i, { relative: o } = {}) {
  let d = N.useContext(qh);
  je(
    d != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: s } = $h('useViewTransitionState'),
    h = Wn(i, { relative: o });
  if (!d.isTransitioning) return !1;
  let m = rl(d.currentLocation.pathname, s) || d.currentLocation.pathname,
    p = rl(d.nextLocation.pathname, s) || d.nextLocation.pathname;
  return Si(h.pathname, p) != null || Si(h.pathname, m) != null;
}
const f_ = '_menu_fvuuk_1',
  r_ = '_menu__nav_fvuuk_17',
  o_ = '_menu__list_fvuuk_24',
  d_ = '_menu__link_fvuuk_33',
  h_ = '_menu__footer_fvuuk_59',
  m_ = '_footer_btn_fvuuk_66',
  et = {
    'menu': f_,
    'menu--open': '_menu--open_fvuuk_14',
    'menu__nav': r_,
    'menu__list': o_,
    'menu__link': d_,
    'menu__link--active': '_menu__link--active_fvuuk_49',
    'menu__footer': h_,
    'footer_btn': m_,
    'footer_btn--active': '_footer_btn--active_fvuuk_87',
  },
  kh =
    "data:image/svg+xml,%3csvg%20width='16'%20height='14'%20viewBox='0%200%2016%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.296%200.332589C9.82592%200.113015%2010.3939%200%2010.9675%200C11.5411%200%2012.1091%200.113015%2012.6391%200.332589C13.169%200.552163%2013.6504%200.873992%2014.056%201.27969C14.4615%201.68515%2014.7833%202.16654%2015.0028%202.69636C15.2224%203.22628%2015.3354%203.79427%2015.3354%204.36788C15.3354%204.9415%2015.2224%205.50949%2015.0028%206.03941C14.7833%206.56928%2014.4615%207.05071%2014.0558%207.45619C14.0558%207.45623%2014.0559%207.45615%2014.0558%207.45619L8.1625%2013.3495C7.88913%2013.6229%207.44592%2013.6229%207.17255%2013.3495L1.27922%207.45619C0.460149%206.63712%200%205.52622%200%204.36788C0%203.20954%200.460149%202.09865%201.27922%201.27958C2.09829%200.460505%203.20919%200.000356495%204.36753%200.000356495C5.52587%200.000356495%206.63676%200.460505%207.45583%201.27958L7.66753%201.49127L7.8791%201.27969C7.87906%201.27973%207.87914%201.27965%207.8791%201.27969C8.28459%200.874047%208.76613%200.552142%209.296%200.332589ZM13.0658%202.26941C12.7903%201.99378%2012.4632%201.77513%2012.1031%201.62596C11.7431%201.47678%2011.3572%201.4%2010.9675%201.4C10.5778%201.4%2010.1919%201.47678%209.83191%201.62596C9.47189%201.77513%209.14478%201.99378%208.86928%202.26941L8.1625%202.97619C7.88913%203.24956%207.44592%203.24956%207.17255%202.97619L6.46589%202.26953C5.90937%201.71301%205.15456%201.40036%204.36753%201.40036C3.58049%201.40036%202.82569%201.71301%202.26917%202.26953C1.71265%202.82604%201.4%203.58085%201.4%204.36788C1.4%205.15492%201.71265%205.90972%202.26917%206.46624L7.66753%2011.8646L13.0659%206.46624C13.3415%206.19074%2013.5603%205.86352%2013.7095%205.5035C13.8586%205.14347%2013.9354%204.75759%2013.9354%204.36788C13.9354%203.97818%2013.8586%203.59229%2013.7095%203.23227C13.5603%202.87224%2013.3414%202.54491%2013.0658%202.26941Z'%20fill='%23F1F2F9'/%3e%3c/svg%3e",
  Wh =
    "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.46683%200.933323C3.59273%200.765453%203.79032%200.666656%204.00016%200.666656H12.0002C12.21%200.666656%2012.4076%200.765453%2012.5335%200.933323L14.5335%203.59999C14.62%203.71539%2014.6668%203.85574%2014.6668%203.99999V13.3333C14.6668%2013.8638%2014.4561%2014.3725%2014.081%2014.7475C13.706%2015.1226%2013.1973%2015.3333%2012.6668%2015.3333H3.3335C2.80306%2015.3333%202.29436%2015.1226%201.91928%2014.7475C1.54421%2014.3725%201.3335%2013.8638%201.3335%2013.3333V3.99999C1.3335%203.85574%201.38028%203.71539%201.46683%203.59999L3.46683%200.933323ZM4.3335%201.99999L2.66683%204.22221V13.3333C2.66683%2013.5101%202.73707%2013.6797%202.86209%2013.8047C2.98712%2013.9298%203.15669%2014%203.3335%2014H12.6668C12.8436%2014%2013.0132%2013.9298%2013.1382%2013.8047C13.2633%2013.6797%2013.3335%2013.5101%2013.3335%2013.3333V4.22221L11.6668%201.99999H4.3335Z'%20fill='%23F1F2F9'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M1.3335%204.00001C1.3335%203.63182%201.63197%203.33334%202.00016%203.33334H14.0002C14.3684%203.33334%2014.6668%203.63182%2014.6668%204.00001C14.6668%204.3682%2014.3684%204.66668%2014.0002%204.66668H2.00016C1.63197%204.66668%201.3335%204.3682%201.3335%204.00001Z'%20fill='%23F1F2F9'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.33341%206C5.7016%206%206.00008%206.29848%206.00008%206.66667C6.00008%207.1971%206.21079%207.70581%206.58587%208.08088C6.96094%208.45595%207.46965%208.66667%208.00008%208.66667C8.53051%208.66667%209.03922%208.45595%209.41429%208.08088C9.78937%207.70581%2010.0001%207.1971%2010.0001%206.66667C10.0001%206.29848%2010.2986%206%2010.6667%206C11.0349%206%2011.3334%206.29848%2011.3334%206.66667C11.3334%207.55072%2010.9822%208.39857%2010.3571%209.02369C9.73198%209.64881%208.88414%2010%208.00008%2010C7.11603%2010%206.26818%209.64881%205.64306%209.02369C5.01794%208.39857%204.66675%207.55072%204.66675%206.66667C4.66675%206.29848%204.96522%206%205.33341%206Z'%20fill='%23F1F2F9'/%3e%3c/svg%3e",
  v_ = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Phones', path: '/phones' },
    { id: 3, name: 'Tablets', path: '/tablets' },
    { id: 4, name: 'Accessories', path: '/accessories' },
  ],
  __ = ({ isOpen: i, onClose: o }) =>
    r.jsxs('div', {
      className: `${et.menu} ${i ? et['menu--open'] : ''}`,
      children: [
        r.jsx('nav', {
          className: et.menu__nav,
          children: r.jsx('ul', {
            className: et.menu__list,
            children: v_.map((d) =>
              r.jsx(
                'li',
                {
                  className: et.menu__item,
                  children: r.jsx(na, {
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
        r.jsxs('div', {
          className: et.menu__footer,
          children: [
            r.jsx(na, {
              to: '/favorites',
              className: ({ isActive: d }) =>
                d ?
                  `${et.footer_btn} ${et['footer_btn--active']}`
                : et.footer_btn,
              onClick: o,
              children: r.jsx('img', { src: kh, alt: 'Favorites' }),
            }),
            r.jsx(na, {
              to: '/cart',
              className: ({ isActive: d }) =>
                d ?
                  `${et.footer_btn} ${et['footer_btn--active']}`
                : et.footer_btn,
              onClick: o,
              children: r.jsx('img', { src: Wh, alt: 'Cart' }),
            }),
          ],
        }),
      ],
    }),
  y_ = '_header_17x9z_1',
  g_ = '_header__container_17x9z_16',
  p_ = '_header__left_17x9z_23',
  b_ = '_header__right_17x9z_23',
  S_ = '_header__logo_17x9z_27',
  x_ = '_header__nav_17x9z_49',
  E_ = '_header__icons_17x9z_64',
  N_ = '_header__burger_17x9z_72',
  T_ = '_nav_list_17x9z_92',
  j_ = '_nav_list__item_17x9z_109',
  z_ = '_nav_list__link_17x9z_113',
  A_ = '_icon_btn_17x9z_141',
  C_ = '_burger_icon_17x9z_177',
  Ue = {
    'header': y_,
    'header__container': g_,
    'header__left': p_,
    'header__right': b_,
    'header__logo': S_,
    'header__nav': x_,
    'header__icons': E_,
    'header__burger': N_,
    'nav_list': T_,
    'nav_list__item': j_,
    'nav_list__link': z_,
    'nav_list__link--active': '_nav_list__link--active_17x9z_128',
    'icon_btn': A_,
    'icon_btn--active': '_icon_btn--active_17x9z_160',
    'burger_icon': C_,
    'burger_icon--active': '_burger_icon--active_17x9z_194',
  },
  R_ = '/assets/logo-CxS9TFyQ.svg',
  O_ = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Phones', path: '/phones' },
    { id: 3, name: 'Tablets', path: '/tablets' },
    { id: 4, name: 'Accessories', path: '/accessories' },
  ],
  M_ = () => {
    const [i, o] = N.useState(!1);
    N.useEffect(
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
    return r.jsxs(r.Fragment, {
      children: [
        r.jsx('header', {
          className: Ue.header,
          children: r.jsxs('div', {
            className: Ue.header__container,
            children: [
              r.jsxs('div', {
                className: Ue.header__left,
                children: [
                  r.jsx(Ka, {
                    to: '/',
                    className: Ue.header__logo,
                    onClick: () => o(!1),
                    children: r.jsx('img', { src: R_, alt: 'Nice Gadgets' }),
                  }),
                  r.jsx('nav', {
                    className: Ue.header__nav,
                    children: r.jsx('ul', {
                      className: Ue.nav_list,
                      children: O_.map((s) =>
                        r.jsx(
                          'li',
                          {
                            className: Ue.nav_list__item,
                            children: r.jsx(na, {
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
              r.jsxs('div', {
                className: Ue.header__right,
                children: [
                  r.jsxs('div', {
                    className: Ue.header__icons,
                    children: [
                      r.jsx(na, {
                        to: '/favorites',
                        className: ({ isActive: s }) =>
                          s ?
                            `${Ue.icon_btn} ${Ue['icon_btn--active']}`
                          : Ue.icon_btn,
                        children: r.jsx('img', { src: kh, alt: 'Favorites' }),
                      }),
                      r.jsx(na, {
                        to: '/cart',
                        className: ({ isActive: s }) =>
                          s ?
                            `${Ue.icon_btn} ${Ue['icon_btn--active']}`
                          : Ue.icon_btn,
                        children: r.jsx('img', { src: Wh, alt: 'Cart' }),
                      }),
                    ],
                  }),
                  r.jsx('button', {
                    'className': Ue.header__burger,
                    'onClick': d,
                    'aria-label': 'Toggle menu',
                    'children': r.jsxs('div', {
                      className: `${Ue.burger_icon} ${i ? Ue['burger_icon--active'] : ''}`,
                      children: [
                        r.jsx('span', {}),
                        r.jsx('span', {}),
                        r.jsx('span', {}),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        r.jsx(__, { isOpen: i, onClose: () => o(!1) }),
      ],
    });
  },
  D_ = '_footer_7q96a_1',
  U_ = '_container_7q96a_7',
  H_ = '_logo_7q96a_13',
  B_ = '_nav_7q96a_19',
  q_ = '_back_7q96a_37',
  L_ = '_arrow_7q96a_47',
  Va = { footer: D_, container: U_, logo: H_, nav: B_, back: q_, arrow: L_ },
  Y_ = '/assets/logo-BX5z9YCI.svg',
  G_ = () => {
    const i = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return r.jsx('footer', {
      className: Va.footer,
      children: r.jsxs('div', {
        className: Va.container,
        children: [
          r.jsx('img', { src: Y_, alt: 'Nice Gadgets', className: Va.logo }),
          r.jsxs('nav', {
            className: Va.nav,
            children: [
              r.jsx('a', {
                href: 'https://github.com/Team-Project-Phone-catalog/phone-catalog-frontend',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: 'GITHUB',
              }),
              r.jsx('a', { href: '#', children: 'CONTACTS' }),
              r.jsx('a', { href: '#', children: 'RIGHTS' }),
            ],
          }),
          r.jsxs('div', {
            className: Va.back,
            children: [
              r.jsx('span', { children: 'Back to top' }),
              r.jsx('button', {
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
  ji = () => fetch('/api/accessories.json').then((i) => i.json()),
  X_ = () => fetch('/api/products.json').then((i) => i.json()),
  Q_ = async (i, o) => {
    const d = await fetch(`/api/${i}.json`);
    if (!d.ok) throw new Error(`Category not found: ${i}`);
    const h = (await d.json()).find((m) => m.id === o);
    if (!h) throw new Error(`Product not found: ${o}`);
    return h;
  },
  w_ = ({ currentPrice: i, fullPrice: o }) =>
    r.jsxs('p', {
      className: 'product-price',
      children: [
        r.jsxs('span', {
          className: 'product-price__current',
          children: ['$', i],
        }),
        r.jsxs('span', {
          className: 'product-price__full',
          children: ['$', o],
        }),
      ],
    }),
  gi = (i) => i.split(' ').slice(0, 2).join(' '),
  Fh = ({
    screen: i,
    capacity: o,
    ram: d,
    resolution: s,
    showTopLine: h = !0,
  }) =>
    r.jsxs('div', {
      className: `product-features ${h ? '' : 'product-features--no-line'}`,
      children: [
        r.jsxs('p', {
          className: 'product-features__item',
          children: [
            r.jsx('span', {
              className: 'product-features__name',
              children: 'Screen',
            }),
            r.jsx('span', {
              className: 'product-features__value',
              children: gi(i),
            }),
          ],
        }),
        s &&
          r.jsxs('p', {
            className: 'product-features__item',
            children: [
              r.jsx('span', {
                className: 'product-features__name',
                children: 'Resolution',
              }),
              r.jsx('span', {
                className: 'product-features__value',
                children: gi(s),
              }),
            ],
          }),
        r.jsxs('p', {
          className: 'product-features__item',
          children: [
            r.jsx('span', {
              className: 'product-features__name',
              children: 'Capacity',
            }),
            r.jsx('span', {
              className: 'product-features__value',
              children: gi(o),
            }),
          ],
        }),
        r.jsxs('p', {
          className: 'product-features__item',
          children: [
            r.jsx('span', {
              className: 'product-features__name',
              children: 'RAM',
            }),
            r.jsx('span', {
              className: 'product-features__value',
              children: gi(d),
            }),
          ],
        }),
      ],
    }),
  Ph = ({ onAddToCart: i, onToggleFavorite: o, isFavorite: d }) =>
    r.jsxs('div', {
      className: 'product-actions',
      children: [
        r.jsx('button', {
          type: 'button',
          className: 'product-actions__add-to-cart',
          onClick: i,
          children: 'Add to cart',
        }),
        r.jsx('button', {
          'type': 'button',
          'className': `product-actions__favorites ${d ? 'product-actions__favorites--active' : ''}`,
          'onClick': o,
          'aria-label': d ? 'Remove from favorites' : 'Add to favorites',
        }),
      ],
    }),
  ua = ({ product: i, onFavoriteChange: o }) => {
    const [d, s] = N.useState(() =>
      i ?
        JSON.parse(localStorage.getItem('favorites') || '[]').includes(
          String(i.id),
        )
      : !1,
    );
    if (!i) return null;
    const h = i.priceDiscount ?? ('price' in i ? i.price : void 0),
      m = i.priceRegular ?? ('fullPrice' in i ? i.fullPrice : void 0),
      p = 'images' in i ? i.images[0] : i.image,
      z = p ? `/${p}` : null,
      y =
        'itemId' in i ? `/${i.category}/${i.itemId}` : `/${i.category}/${i.id}`,
      _ = () => {
        const C = JSON.parse(localStorage.getItem('favorites') || '[]');
        let T;
        (C.includes(String(i.id)) ?
          (T = C.filter((H) => H !== String(i.id)))
        : (T = [...C, String(i.id)]),
          localStorage.setItem('favorites', JSON.stringify(T)),
          s(!d),
          o?.());
      };
    return r.jsx('div', {
      className: 'card',
      children: r.jsxs('div', {
        className: 'card__container',
        children: [
          r.jsxs(Ka, {
            to: y,
            className: 'card__link',
            children: [
              r.jsx('div', {
                className: 'card__img-container',
                children:
                  z &&
                  r.jsx('img', {
                    className: 'card__image',
                    src: z,
                    alt: i.name,
                  }),
              }),
              r.jsx('div', {
                className: 'card__title-wrapper',
                children: r.jsx('h2', {
                  className: 'card__title',
                  children: i.name,
                }),
              }),
            ],
          }),
          r.jsx(w_, { currentPrice: h, fullPrice: m }),
          r.jsx(Fh, { screen: i.screen, capacity: i.capacity, ram: i.ram }),
          r.jsx(Ph, {
            onAddToCart: (C) => {
              (C.preventDefault(),
                C.stopPropagation(),
                console.log('Added to cart'));
            },
            onToggleFavorite: (C) => {
              (C.preventDefault(), C.stopPropagation(), _());
            },
            isFavorite: d,
          }),
        ],
      }),
    });
  },
  zi = (i) => [...i].sort((o, d) => (d.year || 0) - (o.year || 0)),
  Fn = (i) =>
    [...i].sort((o, d) => {
      const s = (o.priceRegular || 0) - (o.priceDiscount || 0);
      return (d.priceRegular || 0) - (d.priceDiscount || 0) - s;
    }),
  Z_ = '_search_n5u0r_11',
  V_ = '_title_n5u0r_26',
  K_ = '_modelsCount_n5u0r_36',
  J_ = '_controls_n5u0r_44',
  $_ = '_controlsLeft_n5u0r_51',
  k_ = '_control_n5u0r_44',
  W_ = '_label_n5u0r_61',
  F_ = '_select_n5u0r_65',
  P_ = '_searchInput_n5u0r_86',
  Qe = {
    'phones-page__container': '_phones-page__container_n5u0r_1',
    'search': Z_,
    'phones-page': '_phones-page_n5u0r_1',
    'title': V_,
    'modelsCount': K_,
    'phones-page__controls': '_phones-page__controls_n5u0r_41',
    'controls': J_,
    'controlsLeft': $_,
    'control': k_,
    'label': W_,
    'select': F_,
    'searchInput': P_,
    'phones-page__list': '_phones-page__list_n5u0r_97',
  },
  I_ = '_breadcrumbs_mu3xr_1',
  ey = '_breadcrumbs__home_mu3xr_7',
  ty = '_breadcrumbs__separator_mu3xr_16',
  ly = '_breadcrumbs__link_mu3xr_20',
  ay = '_breadcrumbs__current_mu3xr_31',
  aa = {
    breadcrumbs: I_,
    breadcrumbs__home: ey,
    breadcrumbs__separator: ty,
    breadcrumbs__link: ly,
    breadcrumbs__current: ay,
  },
  Pn = () => {
    const i = Bl(),
      { productId: o } = Xh(),
      d = i.pathname.split('/').filter(Boolean);
    if (d.length === 0) return null;
    const s = d[0],
      h = (p) => p.charAt(0).toUpperCase() + p.slice(1),
      m = (p) =>
        p
          .split('-')
          .map((z) => z.charAt(0).toUpperCase() + z.slice(1))
          .join(' ');
    return r.jsxs('nav', {
      className: aa.breadcrumbs,
      children: [
        r.jsx(Ka, {
          to: '/',
          className: aa.breadcrumbs__home,
          children: r.jsx('img', { src: '/img/icons/Home.svg', alt: 'Home' }),
        }),
        r.jsx('span', { className: aa.breadcrumbs__separator, children: '>' }),
        o ?
          r.jsx(Ka, {
            to: `/${s}`,
            className: aa.breadcrumbs__link,
            children: h(s),
          })
        : r.jsx('span', { className: aa.breadcrumbs__current, children: h(s) }),
        o &&
          r.jsxs(r.Fragment, {
            children: [
              r.jsx('span', {
                className: aa.breadcrumbs__separator,
                children: '>',
              }),
              r.jsx('span', {
                className: aa.breadcrumbs__current,
                children: m(o),
              }),
            ],
          }),
      ],
    });
  },
  ny = () => {
    const [i, o] = N.useState([]),
      [d, s] = N.useState('newest'),
      [h, m] = N.useState(16);
    N.useEffect(() => {
      (async () => {
        const _ = await Ni();
        o(_.map((C) => ({ ...C, category: 'phones' })));
      })();
    }, []);
    const p = N.useMemo(() => {
        switch (d) {
          case 'alphabetically':
            return [...i].sort((y, _) => y.name.localeCompare(_.name));
          case 'bestPrice':
            return Fn(i);
          default:
            return zi(i);
        }
      }, [i, d]),
      z = N.useMemo(() => p.slice(0, h), [p, h]);
    return r.jsx('div', {
      className: Qe['phones-page'],
      children: r.jsxs('div', {
        className: Qe['phones-page__container'],
        children: [
          r.jsx(Pn, {}),
          r.jsx('h1', { className: Qe.title, children: 'Mobile phones' }),
          r.jsxs('p', {
            className: Qe.modelsCount,
            children: [i.length, ' models'],
          }),
          r.jsx('section', {
            className: Qe['phones-page__controls'],
            children: r.jsxs('div', {
              className: Qe.controls,
              children: [
                r.jsxs('div', {
                  className: Qe.controlsLeft,
                  children: [
                    r.jsxs('div', {
                      className: Qe.control,
                      children: [
                        r.jsx('label', {
                          className: Qe.label,
                          children: 'Sort by',
                        }),
                        r.jsxs('select', {
                          className: Qe.select,
                          value: d,
                          onChange: (y) => s(y.target.value),
                          children: [
                            r.jsx('option', {
                              value: 'newest',
                              children: 'Newest',
                            }),
                            r.jsx('option', {
                              value: 'alphabetically',
                              children: 'Alphabetically',
                            }),
                            r.jsx('option', {
                              value: 'bestPrice',
                              children: 'Best price',
                            }),
                          ],
                        }),
                      ],
                    }),
                    r.jsxs('div', {
                      className: Qe.control,
                      children: [
                        r.jsx('label', {
                          className: Qe.label,
                          children: 'Items on page',
                        }),
                        r.jsxs('select', {
                          className: Qe.select,
                          value: h,
                          onChange: (y) => m(+y.target.value),
                          children: [
                            r.jsx('option', { value: 16, children: '16' }),
                            r.jsx('option', { value: 32, children: '32' }),
                            r.jsx('option', { value: 64, children: '64' }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: Qe.search,
                  children: [
                    r.jsx('label', {
                      className: Qe.label,
                      children: 'Looking for something?',
                    }),
                    r.jsx('input', {
                      type: 'text',
                      placeholder: 'Type here',
                      className: Qe.searchInput,
                    }),
                  ],
                }),
              ],
            }),
          }),
          r.jsx('section', {
            className: Qe['phones-page__list'],
            children: z.map((y) => r.jsx(ua, { product: y }, y.id)),
          }),
          r.jsx('section', { className: Qe['phones-page__pagination'] }),
        ],
      }),
    });
  },
  uy = '_search_1q3bq_11',
  iy = '_title_1q3bq_26',
  cy = '_modelsCount_1q3bq_36',
  sy = '_controls_1q3bq_44',
  fy = '_controlsLeft_1q3bq_51',
  ry = '_control_1q3bq_44',
  oy = '_label_1q3bq_61',
  dy = '_select_1q3bq_65',
  hy = '_searchInput_1q3bq_87',
  we = {
    'accessories-page__container': '_accessories-page__container_1q3bq_1',
    'search': uy,
    'accessories-page': '_accessories-page_1q3bq_1',
    'title': iy,
    'modelsCount': cy,
    'accessories-page__controls': '_accessories-page__controls_1q3bq_41',
    'controls': sy,
    'controlsLeft': fy,
    'control': ry,
    'label': oy,
    'select': dy,
    'searchInput': hy,
    'accessories-page__list': '_accessories-page__list_1q3bq_98',
  },
  my = () => {
    const [i, o] = N.useState([]),
      [d, s] = N.useState('newest'),
      [h, m] = N.useState(16);
    N.useEffect(() => {
      (async () => {
        const _ = await ji();
        o(_.map((C) => ({ ...C, category: 'accessories' })));
      })();
    }, []);
    const p = N.useMemo(() => {
        switch (d) {
          case 'alphabetically':
            return [...i].sort((y, _) => y.name.localeCompare(_.name));
          case 'bestPrice':
            return Fn(i);
          default:
            return zi(i);
        }
      }, [i, d]),
      z = N.useMemo(() => p.slice(0, h), [p, h]);
    return r.jsx('div', {
      className: we['accessories-page'],
      children: r.jsxs('div', {
        className: we['accessories-page__container'],
        children: [
          r.jsx(Pn, {}),
          r.jsx('h1', { className: we.title, children: 'Accessories' }),
          r.jsxs('p', {
            className: we.modelsCount,
            children: [i.length, ' models'],
          }),
          r.jsx('section', {
            className: we['accessories-page__controls'],
            children: r.jsxs('div', {
              className: we.controls,
              children: [
                r.jsxs('div', {
                  className: we.controlsLeft,
                  children: [
                    r.jsxs('div', {
                      className: we.control,
                      children: [
                        r.jsx('label', {
                          className: we.label,
                          children: 'Sort by',
                        }),
                        r.jsxs('select', {
                          className: we.select,
                          value: d,
                          onChange: (y) => s(y.target.value),
                          children: [
                            r.jsx('option', {
                              value: 'newest',
                              children: 'Newest',
                            }),
                            r.jsx('option', {
                              value: 'alphabetically',
                              children: 'Alphabetically',
                            }),
                            r.jsx('option', {
                              value: 'bestPrice',
                              children: 'Best price',
                            }),
                          ],
                        }),
                      ],
                    }),
                    r.jsxs('div', {
                      className: we.control,
                      children: [
                        r.jsx('label', {
                          className: we.label,
                          children: 'Items on page',
                        }),
                        r.jsxs('select', {
                          className: we.select,
                          value: h,
                          onChange: (y) => m(+y.target.value),
                          children: [
                            r.jsx('option', { value: 16, children: '16' }),
                            r.jsx('option', { value: 32, children: '32' }),
                            r.jsx('option', { value: 64, children: '64' }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: we.search,
                  children: [
                    r.jsx('label', {
                      className: we.label,
                      children: 'Looking for something?',
                    }),
                    r.jsx('input', {
                      type: 'text',
                      placeholder: 'Type here',
                      className: we.searchInput,
                    }),
                  ],
                }),
              ],
            }),
          }),
          r.jsx('section', {
            className: we['accessories-page__list'],
            children: z.map((y) => r.jsx(ua, { product: y }, y.id)),
          }),
          r.jsx('section', { className: we['accessories-page__pagination'] }),
        ],
      }),
    });
  },
  vy = '_cart_1nbcg_8',
  _y = '_title_1nbcg_27',
  yy = '_cartContent_1nbcg_41',
  gy = '_products_1nbcg_66',
  py = '_summary_1nbcg_77',
  Vn = { cart: vy, title: _y, cartContent: yy, products: gy, summary: py },
  by = '_block_1xzjy_1',
  Sy = '_price_1xzjy_7',
  xy = '_info_1xzjy_17',
  Ey = '_button_1xzjy_24',
  Ny = '_buttonCheck_1xzjy_33',
  Kn = { block: by, price: Sy, info: xy, button: Ey, buttonCheck: Ny },
  Ty = () =>
    r.jsxs('div', {
      className: Kn.block,
      children: [
        r.jsx('h2', { className: Kn.price, children: '$2656' }),
        r.jsx('p', { className: Kn.info, children: 'Total for 3 items' }),
        r.jsx('div', {
          className: Kn.button,
          children: r.jsx('button', {
            className: Kn.buttonCheck,
            children: 'Checkout',
          }),
        }),
      ],
    }),
  jy = '_item_18h8g_1',
  zy = '_remove_18h8g_19',
  Ay = '_imageWrapper_18h8g_37',
  Cy = '_image_18h8g_37',
  Ry = '_details_18h8g_57',
  Oy = '_name_18h8g_68',
  My = '_controls_18h8g_76',
  Dy = '_quantity_18h8g_91',
  Uy = '_btnPlus_18h8g_102',
  Hy = '_btnMinus_18h8g_112',
  By = '_count_18h8g_122',
  qy = '_price_18h8g_128',
  Rt = {
    item: jy,
    remove: zy,
    imageWrapper: Ay,
    image: Cy,
    details: Ry,
    name: Oy,
    controls: My,
    quantity: Dy,
    btnPlus: Uy,
    btnMinus: Hy,
    count: By,
    price: qy,
  },
  tf = () =>
    r.jsxs('div', {
      className: Rt.item,
      children: [
        r.jsx('button', {
          className: Rt.remove,
          type: 'button',
          children: 'x',
        }),
        r.jsx('div', {
          className: Rt.imageWrapper,
          children: r.jsx('img', {
            src: '/img/phones/apple-iphone-14-pro/spaceblack/00.webp',
            alt: 'Apple iPhone 14 Pro',
            className: Rt.image,
          }),
        }),
        r.jsx('div', {
          className: Rt.details,
          children: r.jsx('h3', {
            className: Rt.name,
            children: 'Apple iPhone 14 Pro 128GB Silver (MQ023)',
          }),
        }),
        r.jsxs('div', {
          className: Rt.controls,
          children: [
            r.jsxs('div', {
              className: Rt.quantity,
              children: [
                r.jsx('button', { className: Rt.btnMinus, children: '-' }),
                r.jsx('span', { className: Rt.count, children: '1' }),
                r.jsx('button', { className: Rt.btnPlus, children: '+' }),
              ],
            }),
            r.jsx('p', { className: Rt.price, children: '$999' }),
          ],
        }),
      ],
    }),
  Ih = () =>
    r.jsx('div', {
      className: 'buttonBack',
      children: r.jsx('a', {
        className: 'buttonBackLink',
        href: '#',
        children: 'Back',
      }),
    }),
  Ly = () =>
    r.jsxs('div', {
      className: Vn.cart,
      children: [
        r.jsx(Ih, {}),
        r.jsx('div', {
          className: Vn.title,
          children: r.jsx('h1', { children: 'Cart' }),
        }),
        r.jsxs('div', {
          className: Vn.cartContent,
          children: [
            r.jsxs('div', {
              className: Vn.products,
              children: [r.jsx(tf, {}), r.jsx(tf, {}), r.jsx(tf, {})],
            }),
            r.jsx('div', { className: Vn.summary, children: r.jsx(Ty, {}) }),
          ],
        }),
      ],
    }),
  Yy = () =>
    r.jsxs('div', {
      className: 'notFound',
      children: [
        r.jsx('h1', { className: 'title', children: 'Помилка 404' }),
        r.jsx('h2', {
          className: 'title__message',
          children: 'Сторінка не знайдена',
        }),
      ],
    }),
  Gy = '_search_1x13a_11',
  Xy = '_title_1x13a_26',
  Qy = '_modelsCount_1x13a_36',
  wy = '_controls_1x13a_44',
  Zy = '_controlsLeft_1x13a_51',
  Vy = '_control_1x13a_44',
  Ky = '_label_1x13a_61',
  Jy = '_select_1x13a_65',
  $y = '_searchInput_1x13a_86',
  Ze = {
    'tablets-page__container': '_tablets-page__container_1x13a_1',
    'search': Gy,
    'tablets-page': '_tablets-page_1x13a_1',
    'title': Xy,
    'modelsCount': Qy,
    'tablets-page__controls': '_tablets-page__controls_1x13a_41',
    'controls': wy,
    'controlsLeft': Zy,
    'control': Vy,
    'label': Ky,
    'select': Jy,
    'searchInput': $y,
    'tablets-page__list': '_tablets-page__list_1x13a_97',
  },
  ky = () => {
    const [i, o] = N.useState([]),
      [d, s] = N.useState('newest'),
      [h, m] = N.useState(16);
    N.useEffect(() => {
      (async () => {
        const _ = await Ti();
        o(_.map((C) => ({ ...C, category: 'tablets' })));
      })();
    }, []);
    const p = N.useMemo(() => {
        switch (d) {
          case 'alphabetically':
            return [...i].sort((y, _) => y.name.localeCompare(_.name));
          case 'bestPrice':
            return Fn(i);
          default:
            return zi(i);
        }
      }, [i, d]),
      z = N.useMemo(() => p.slice(0, h), [p, h]);
    return r.jsx('div', {
      className: Ze['tablets-page'],
      children: r.jsxs('div', {
        className: Ze['tablets-page__container'],
        children: [
          r.jsx(Pn, {}),
          r.jsx('h1', { className: Ze.title, children: 'Tablets' }),
          r.jsxs('p', {
            className: Ze.modelsCount,
            children: [i.length, ' models'],
          }),
          r.jsx('section', {
            className: Ze['tablets-page__controls'],
            children: r.jsxs('div', {
              className: Ze.controls,
              children: [
                r.jsxs('div', {
                  className: Ze.controlsLeft,
                  children: [
                    r.jsxs('div', {
                      className: Ze.control,
                      children: [
                        r.jsx('label', {
                          className: Ze.label,
                          children: 'Sort by',
                        }),
                        r.jsxs('select', {
                          className: Ze.select,
                          value: d,
                          onChange: (y) => s(y.target.value),
                          children: [
                            r.jsx('option', {
                              value: 'newest',
                              children: 'Newest',
                            }),
                            r.jsx('option', {
                              value: 'alphabetically',
                              children: 'Alphabetically',
                            }),
                            r.jsx('option', {
                              value: 'bestPrice',
                              children: 'Best price',
                            }),
                          ],
                        }),
                      ],
                    }),
                    r.jsxs('div', {
                      className: Ze.control,
                      children: [
                        r.jsx('label', {
                          className: Ze.label,
                          children: 'Items on page',
                        }),
                        r.jsxs('select', {
                          className: Ze.select,
                          value: h,
                          onChange: (y) => m(+y.target.value),
                          children: [
                            r.jsx('option', { value: 16, children: '16' }),
                            r.jsx('option', { value: 32, children: '32' }),
                            r.jsx('option', { value: 64, children: '64' }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: Ze.search,
                  children: [
                    r.jsx('label', {
                      className: Ze.label,
                      children: 'Looking for something?',
                    }),
                    r.jsx('input', {
                      type: 'text',
                      placeholder: 'Type here',
                      className: Ze.searchInput,
                    }),
                  ],
                }),
              ],
            }),
          }),
          r.jsx('section', {
            className: Ze['tablets-page__list'],
            children: z.map((y) => r.jsx(ua, { product: y }, y.id)),
          }),
          r.jsx('section', { className: Ze['tablets-page__pagination'] }),
        ],
      }),
    });
  },
  Wy = '_home_1sewe_1',
  Fy = '_container_1sewe_12',
  Py = '_hero_1sewe_28',
  Iy = '_hero__title_1sewe_41',
  e2 = '_hero__slider_1sewe_59',
  t2 = '_hero__arrow_1sewe_63',
  l2 = '_hero__banner_1sewe_98',
  a2 = '_hero__dots_1sewe_206',
  n2 = '_hero__dot_1sewe_206',
  u2 = '_section_1sewe_235',
  i2 = '_section__header_1sewe_248',
  c2 = '_section__title_1sewe_259',
  s2 = '_section__arrows_1sewe_274',
  f2 = '_categories_1sewe_345',
  J = {
    'home': Wy,
    'container': Fy,
    'hero': Py,
    'hero__title': Iy,
    'hero__slider': e2,
    'hero__arrow': t2,
    'hero__arrow--left': '_hero__arrow--left_1sewe_89',
    'hero__arrow--right': '_hero__arrow--right_1sewe_94',
    'hero__banner': l2,
    'hero__banner-img': '_hero__banner-img_1sewe_116',
    'hero__dots': a2,
    'hero__dot': n2,
    'hero__dot--active': '_hero__dot--active_1sewe_227',
    'section': u2,
    'section__header': i2,
    'section__title': c2,
    'section__arrows': s2,
    'arrow-btn': '_arrow-btn_1sewe_279',
    'products-slider': '_products-slider_1sewe_302',
    'products-slider__track': '_products-slider__track_1sewe_327',
    'categories': f2,
    'category-card': '_category-card_1sewe_363',
    'category-card__image': '_category-card__image_1sewe_369',
    'category-card__image-wrapper': '_category-card__image-wrapper_1sewe_372',
    'category-card__image-tablets': '_category-card__image-tablets_1sewe_398',
    'category-card__image-access': '_category-card__image-access_1sewe_406',
    'category-card__info': '_category-card__info_1sewe_414',
    'category-card__title': '_category-card__title_1sewe_418',
    'category-card__count': '_category-card__count_1sewe_434',
  },
  r2 = () => {
    const [i, o] = N.useState([]),
      [d, s] = N.useState([]),
      [h, m] = N.useState([]),
      [p, z] = N.useState([]),
      y = [...i, ...d, ...h],
      _ = zi(p).slice(0, 12),
      C = Fn(y).slice(0, 12);
    return (
      N.useEffect(() => {
        (Ni()
          .then(o)
          .catch((T) => console.error('Error loading phones:', T)),
          Ti()
            .then(s)
            .catch((T) => console.error('Error loading tablets:', T)),
          ji()
            .then(m)
            .catch((T) => console.error('Error loading accessories:', T)),
          X_()
            .then(z)
            .catch((T) => console.error('Error loading accessories:', T)));
      }, []),
      r.jsx('main', {
        className: J.home,
        children: r.jsxs('div', {
          className: J.container,
          children: [
            r.jsxs('section', {
              className: J.hero,
              children: [
                r.jsx('h1', {
                  className: J.hero__title,
                  children: 'Welcome to Nice Gadgets store!',
                }),
                r.jsxs('div', {
                  className: J.hero__slider,
                  children: [
                    r.jsx('button', {
                      'className': `${J.hero__arrow} ${J['hero__arrow--left']}`,
                      'aria-label': 'Previous slide',
                    }),
                    r.jsx('div', {
                      className: J.hero__banner,
                      children: r.jsx('img', {
                        src: '/img/main-banner.png',
                        alt: 'iPhone 14 Pro promotion',
                        className: J['hero__banner-img'],
                      }),
                    }),
                    r.jsx('button', {
                      'className': `${J.hero__arrow} ${J['hero__arrow--right']}`,
                      'aria-label': 'Next slide',
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: J.hero__dots,
                  children: [
                    r.jsx('button', {
                      'className': `${J.hero__dot} ${J['hero__dot--active']}`,
                      'aria-label': 'Slide 1',
                    }),
                    r.jsx('button', {
                      'className': J.hero__dot,
                      'aria-label': 'Slide 2',
                    }),
                    r.jsx('button', {
                      'className': J.hero__dot,
                      'aria-label': 'Slide 3',
                    }),
                  ],
                }),
              ],
            }),
            r.jsxs('section', {
              className: J.section,
              children: [
                r.jsxs('div', {
                  className: J.section__header,
                  children: [
                    r.jsx('h2', {
                      className: J.section__title,
                      children: 'Brand new models',
                    }),
                    r.jsxs('div', {
                      className: J.section__arrows,
                      children: [
                        r.jsx('button', {
                          'className': J['arrow-btn'],
                          'aria-label': 'Previous',
                        }),
                        r.jsx('button', {
                          'className': J['arrow-btn'],
                          'aria-label': 'Next',
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsx('div', {
                  className: J['products-slider'],
                  children: r.jsx('div', {
                    className: J['products-slider__track'],
                    children: _.map((T) => r.jsx(ua, { product: T }, T.id)),
                  }),
                }),
              ],
            }),
            r.jsxs('section', {
              className: J.section,
              children: [
                r.jsx('h2', {
                  className: J.section__title,
                  children: 'Shop by category',
                }),
                r.jsxs('div', {
                  className: J.categories,
                  children: [
                    r.jsxs('article', {
                      className: J['category-card'],
                      children: [
                        r.jsx('div', {
                          className: J['category-card__image-wrapper'],
                          children: r.jsx('img', {
                            src: '/img/category-phones.png',
                            alt: 'Mobile phones',
                            className: J['category-card__image'],
                          }),
                        }),
                        r.jsxs('div', {
                          className: J['category-card__info'],
                          children: [
                            r.jsx('h3', {
                              className: J['category-card__title'],
                              children: 'Mobile phones',
                            }),
                            r.jsxs('p', {
                              className: J['category-card__count'],
                              children: [i.length, ' models'],
                            }),
                          ],
                        }),
                      ],
                    }),
                    r.jsxs('article', {
                      className: J['category-card'],
                      children: [
                        r.jsx('div', {
                          className: J['category-card__image-wrapper'],
                          children: r.jsx('img', {
                            src: '/img/category-tablets.png',
                            alt: 'Tablets',
                            className: J['category-card__image-tablets'],
                          }),
                        }),
                        r.jsxs('div', {
                          className: J['category-card__info'],
                          children: [
                            r.jsx('h3', {
                              className: J['category-card__title'],
                              children: 'Tablets',
                            }),
                            r.jsxs('p', {
                              className: J['category-card__count'],
                              children: [d.length, ' models'],
                            }),
                          ],
                        }),
                      ],
                    }),
                    r.jsxs('article', {
                      className: J['category-card'],
                      children: [
                        r.jsx('div', {
                          className: J['category-card__image-wrapper'],
                          children: r.jsx('img', {
                            src: '/img/category-accessories.png',
                            alt: 'Accessories',
                            className: J['category-card__image-access'],
                          }),
                        }),
                        r.jsxs('div', {
                          className: J['category-card__info'],
                          children: [
                            r.jsx('h3', {
                              className: J['category-card__title'],
                              children: 'Accessories',
                            }),
                            r.jsxs('p', {
                              className: J['category-card__count'],
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
            r.jsxs('section', {
              className: J.section,
              children: [
                r.jsxs('div', {
                  className: J.section__header,
                  children: [
                    r.jsx('h2', {
                      className: J.section__title,
                      children: 'Hot prices',
                    }),
                    r.jsxs('div', {
                      className: J.section__arrows,
                      children: [
                        r.jsx('button', {
                          'className': J['arrow-btn'],
                          'aria-label': 'Previous',
                        }),
                        r.jsx('button', {
                          'className': J['arrow-btn'],
                          'aria-label': 'Next',
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsx('div', {
                  className: J['products-slider'],
                  children: r.jsx('div', {
                    className: J['products-slider__track'],
                    children: C.map((T) => r.jsx(ua, { product: T }, T.id)),
                  }),
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  o2 = () => {
    const [i, o] = N.useState([]),
      [, d] = N.useState(!0),
      s = async () => {
        d(!0);
        try {
          const h = JSON.parse(localStorage.getItem('favorites') || '[]'),
            [m, p, z] = await Promise.all([Ni(), Ti(), ji()]),
            _ = [...m, ...p, ...z].filter((C) => h.includes('' + C.id));
          o(_);
        } catch (h) {
          console.error('Failed to load favorites:', h);
        } finally {
          d(!1);
        }
      };
    return (
      N.useEffect(() => {
        s();
      }, []),
      r.jsx(r.Fragment, {
        children: r.jsx('div', {
          className: 'favorites-page',
          children: r.jsxs('div', {
            className: 'favorites-page__container',
            children: [
              r.jsx(Pn, {}),
              r.jsxs('div', {
                className: 'favorites-page__text',
                children: [
                  r.jsx('h1', {
                    className: 'favorites-page__title',
                    children: 'Favourites',
                  }),
                  r.jsxs('div', {
                    className: 'favorites-page__items-number',
                    children: [i.length, ' items'],
                  }),
                ],
              }),
              r.jsx('div', {
                className: 'favorites-page__all-favorites',
                children: i.map((h) =>
                  r.jsx(ua, { product: h, onFavoriteChange: s }, h.id),
                ),
              }),
            ],
          }),
        }),
      })
    );
  },
  d2 = () => {
    const i = [
        '/img/phones/apple-iphone-12/black/00.webp',
        '/img/phones/apple-iphone-12/black/01.webp',
        '/img/phones/apple-iphone-12/black/02.webp',
        '/img/phones/apple-iphone-12/black/03.webp',
      ],
      [o, d] = N.useState(i[0]);
    return r.jsxs('div', {
      className: 'gallery',
      children: [
        r.jsx('div', {
          className: 'gallery__main',
          children: r.jsx('img', { src: o, alt: 'Product' }),
        }),
        r.jsx('div', {
          className: 'gallery__thumbs',
          children: i.map((s, h) =>
            r.jsx(
              'div',
              {
                className: `thumb ${o === s ? 'active' : ''}`,
                onClick: () => d(s),
                children: r.jsx('img', { src: s, alt: 'thumb' }),
              },
              h,
            ),
          ),
        }),
      ],
    });
  },
  h2 = () => {
    const i = ['gold', 'blue', 'grey'],
      o = ['64 GB', '128 GB', '256 GB'],
      [d, s] = N.useState(i[0]),
      [h, m] = N.useState(o[0]);
    return r.jsxs('div', {
      className: 'product-options',
      children: [
        r.jsx('div', {
          className: 'product-options__title',
          children: 'Available colors',
        }),
        r.jsx('div', {
          className: 'product-options__colors',
          children: i.map((p, z) =>
            r.jsx(
              'a',
              {
                href: `/${p}`,
                className: `product-options__color-item ${d === p ? 'product-options__color-item--active' : ''}`,
                onClick: () => s(p),
                children: r.jsx('span', {
                  className: 'product-options__color',
                  style: { backgroundColor: p },
                }),
              },
              z,
            ),
          ),
        }),
        r.jsx('div', {
          className: 'product-options__title--capacity',
          children: 'Select capacity',
        }),
        r.jsx('div', {
          className: 'product-options__ram',
          children: o.map((p, z) =>
            r.jsx(
              'a',
              {
                href: `/${p}`,
                className: `product-options__ram-item ${h === p ? 'product-options__ram-item--active' : ''}`,
                onClick: () => m(p),
                children: p,
              },
              z,
            ),
          ),
        }),
      ],
    });
  },
  m2 = () =>
    r.jsxs('div', {
      className: 'purchase',
      children: [
        r.jsxs('div', {
          className: 'purchase-price',
          children: [
            r.jsx('span', {
              className: 'purchase-price__current',
              children: '$799',
            }),
            r.jsx('span', {
              className: 'purchase-price__full',
              children: '$1199',
            }),
          ],
        }),
        r.jsx('div', {
          className: 'purchase__buttons',
          children: r.jsx(Ph, {
            onAddToCart: () => console.log('Added to cart'),
            onToggleFavorite: () => console.log('Toggled favorite'),
          }),
        }),
      ],
    }),
  v2 = () =>
    r.jsxs('div', {
      className: 'ProductDetail',
      children: [
        r.jsx('div', {
          className: 'ProductFeatures',
          children: r.jsx(Fh, {
            screen: '6.1" OLED',
            resolution: '2532x1170',
            capacity: '128 GB',
            ram: '6 GB',
            showTopLine: !1,
          }),
        }),
        r.jsxs('div', {
          className: 'ProductDetail__about',
          children: [
            r.jsx('h3', {
              className: 'ProductDetail__about-title',
              children: 'About',
            }),
            r.jsxs('div', {
              className: 'ProductDetail__about-main',
              children: [
                r.jsx('h4', {
                  className: 'ProductDetail__about-main-title',
                  children: 'And then there was',
                }),
                r.jsx('span', {
                  className: 'ProductDetail__about-main-second',
                  children:
                    'A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  _2 = () =>
    r.jsxs('div', {
      className: 'TechSpecs',
      children: [
        r.jsx('h3', { className: 'TechSpecs__title', children: 'Tech specs' }),
        r.jsxs('p', {
          className: 'TechSpecs__item',
          children: [
            r.jsx('span', { className: 'TechSpecs__name', children: 'Screen' }),
            r.jsx('span', {
              className: 'TechSpecs__value',
              children: '6.5” OLED',
            }),
          ],
        }),
      ],
    }),
  y2 = () => {
    const [i, o] = N.useState([]),
      [d, s] = N.useState([]),
      [h, m] = N.useState([]),
      p = [...i, ...d, ...h],
      z = Fn(p).slice(0, 24);
    return (
      N.useEffect(() => {
        (Ni()
          .then(o)
          .catch((y) => console.error('Error loading phones:', y)),
          Ti()
            .then(s)
            .catch((y) => console.error('Error loading tablets:', y)),
          ji()
            .then(m)
            .catch((y) => console.error('Error loading accessories:', y)));
      }, []),
      r.jsxs('div', {
        className: 'AlsoLike',
        children: [
          r.jsxs('div', {
            className: 'AlsoLike__header',
            children: [
              r.jsx('h3', {
                className: 'AlsoLike__title',
                children: 'You may also like',
              }),
              r.jsxs('div', {
                className: 'AlsoLike__arrows',
                children: [
                  r.jsx('button', {
                    className: 'AlsoLike__arrow-btn',
                    children: '‹',
                  }),
                  r.jsx('button', {
                    className: 'AlsoLike__arrow-btn',
                    children: '›',
                  }),
                ],
              }),
            ],
          }),
          r.jsx('div', {
            className: 'AlsoLike__slider',
            children: r.jsx('div', {
              className: 'AlsoLike__track',
              children: z.map((y) => r.jsx(ua, { product: y }, y.id)),
            }),
          }),
        ],
      })
    );
  },
  g2 = () =>
    r.jsxs('div', {
      className: 'product-card',
      children: [
        r.jsx(d2, {}),
        r.jsx(h2, {}),
        r.jsx(m2, {}),
        r.jsx(v2, {}),
        r.jsx(_2, {}),
        r.jsx(y2, {}),
      ],
    }),
  p2 = '_loader_16313_14',
  b2 = { loader: p2 },
  S2 = () => r.jsx('span', { className: b2.loader }),
  x2 = () => {
    const { category: i, productId: o } = Xh(),
      [d, s] = N.useState(null),
      [h, m] = N.useState(!0),
      [p, z] = N.useState(!1);
    return (
      N.useEffect(() => {
        if (!i || !o) return;
        const y = setTimeout(() => {
          Q_(i, o)
            .then((_) => {
              (s(_), m(!1));
            })
            .catch(() => {
              (z(!0), m(!1));
            });
        }, 1e3);
        return () => clearTimeout(y);
      }, [i, o]),
      h ? r.jsx('div', { className: 'loader-wrapper', children: r.jsx(S2, {}) })
      : p || !d ? r.jsx('h1', { children: 'Товар не знайдено' })
      : r.jsxs('div', {
          className: 'product-details-page',
          children: [
            r.jsx(Pn, {}),
            r.jsx(Ih, {}),
            r.jsx('div', {
              className: 'product-header',
              children: r.jsx('h1', {
                className: 'product-title',
                children: d.name,
              }),
            }),
            r.jsx(g2, { product: d }),
          ],
        })
    );
  },
  E2 = () =>
    r.jsxs('div', {
      className: 'App',
      children: [
        r.jsx(M_, {}),
        r.jsx('div', {
          className: 'container',
          children: r.jsxs(R1, {
            children: [
              r.jsx(sl, { path: '/', element: r.jsx(r2, {}) }),
              r.jsx(sl, { path: '/phones', element: r.jsx(ny, {}) }),
              r.jsx(sl, { path: '/tablets', element: r.jsx(ky, {}) }),
              r.jsx(sl, { path: '/accessories', element: r.jsx(my, {}) }),
              r.jsx(sl, { path: '/cart', element: r.jsx(Ly, {}) }),
              r.jsx(sl, { path: '/favorites', element: r.jsx(o2, {}) }),
              r.jsx(sl, {
                path: '/:category/:productId',
                element: r.jsx(x2, {}),
              }),
              r.jsx(sl, { path: '*', element: r.jsx(Yy, {}) }),
            ],
          }),
        }),
        r.jsx(G_, {}),
      ],
    });
Mv.createRoot(document.getElementById('root')).render(
  r.jsx(e_, { children: r.jsx(E2, {}) }),
);
