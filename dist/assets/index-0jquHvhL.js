(function () {
  const o = document.createElement('link').relList;
  if (o && o.supports && o.supports('modulepreload')) return;
  for (const m of document.querySelectorAll('link[rel="modulepreload"]')) f(m);
  new MutationObserver((m) => {
    for (const y of m)
      if (y.type === 'childList')
        for (const S of y.addedNodes)
          S.tagName === 'LINK' && S.rel === 'modulepreload' && f(S);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(m) {
    const y = {};
    return (
      m.integrity && (y.integrity = m.integrity),
      m.referrerPolicy && (y.referrerPolicy = m.referrerPolicy),
      m.crossOrigin === 'use-credentials' ? (y.credentials = 'include')
      : m.crossOrigin === 'anonymous' ? (y.credentials = 'omit')
      : (y.credentials = 'same-origin'),
      y
    );
  }
  function f(m) {
    if (m.ep) return;
    m.ep = !0;
    const y = r(m);
    fetch(m.href, y);
  }
})();
var Bf = { exports: {} },
  Yn = {};
var uh;
function sv() {
  if (uh) return Yn;
  uh = 1;
  var c = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.fragment');
  function r(f, m, y) {
    var S = null;
    if (
      (y !== void 0 && (S = '' + y),
      m.key !== void 0 && (S = '' + m.key),
      'key' in m)
    ) {
      y = {};
      for (var R in m) R !== 'key' && (y[R] = m[R]);
    } else y = m;
    return (
      (m = y.ref),
      { $$typeof: c, type: f, key: S, ref: m !== void 0 ? m : null, props: y }
    );
  }
  return ((Yn.Fragment = o), (Yn.jsx = r), (Yn.jsxs = r), Yn);
}
var ih;
function ov() {
  return (ih || ((ih = 1), (Bf.exports = sv())), Bf.exports);
}
var h = ov(),
  qf = { exports: {} },
  Ln = {},
  Yf = { exports: {} },
  Lf = {};
var ch;
function rv() {
  return (
    ch ||
      ((ch = 1),
      (function (c) {
        function o(O, H) {
          var k = O.length;
          O.push(H);
          t: for (; 0 < k; ) {
            var yt = (k - 1) >>> 1,
              _t = O[yt];
            if (0 < m(_t, H)) ((O[yt] = H), (O[k] = _t), (k = yt));
            else break t;
          }
        }
        function r(O) {
          return O.length === 0 ? null : O[0];
        }
        function f(O) {
          if (O.length === 0) return null;
          var H = O[0],
            k = O.pop();
          if (k !== H) {
            O[0] = k;
            t: for (var yt = 0, _t = O.length, p = _t >>> 1; yt < p; ) {
              var U = 2 * (yt + 1) - 1,
                B = O[U],
                X = U + 1,
                tt = O[X];
              if (0 > m(B, k))
                X < _t && 0 > m(tt, B) ?
                  ((O[yt] = tt), (O[X] = k), (yt = X))
                : ((O[yt] = B), (O[U] = k), (yt = U));
              else if (X < _t && 0 > m(tt, k))
                ((O[yt] = tt), (O[X] = k), (yt = X));
              else break t;
            }
          }
          return H;
        }
        function m(O, H) {
          var k = O.sortIndex - H.sortIndex;
          return k !== 0 ? k : O.id - H.id;
        }
        if (
          ((c.unstable_now = void 0),
          typeof performance == 'object' &&
            typeof performance.now == 'function')
        ) {
          var y = performance;
          c.unstable_now = function () {
            return y.now();
          };
        } else {
          var S = Date,
            R = S.now();
          c.unstable_now = function () {
            return S.now() - R;
          };
        }
        var b = [],
          v = [],
          D = 1,
          A = null,
          q = 3,
          Z = !1,
          F = !1,
          V = !1,
          G = !1,
          w = typeof setTimeout == 'function' ? setTimeout : null,
          L = typeof clearTimeout == 'function' ? clearTimeout : null,
          W = typeof setImmediate < 'u' ? setImmediate : null;
        function Et(O) {
          for (var H = r(v); H !== null; ) {
            if (H.callback === null) f(v);
            else if (H.startTime <= O)
              (f(v), (H.sortIndex = H.expirationTime), o(b, H));
            else break;
            H = r(v);
          }
        }
        function bt(O) {
          if (((V = !1), Et(O), !F))
            if (r(b) !== null) ((F = !0), Nt || ((Nt = !0), kt()));
            else {
              var H = r(v);
              H !== null && Oe(bt, H.startTime - O);
            }
        }
        var Nt = !1,
          P = -1,
          Ot = 5,
          Xt = -1;
        function ge() {
          return G ? !0 : !(c.unstable_now() - Xt < Ot);
        }
        function He() {
          if (((G = !1), Nt)) {
            var O = c.unstable_now();
            Xt = O;
            var H = !0;
            try {
              t: {
                ((F = !1), V && ((V = !1), L(P), (P = -1)), (Z = !0));
                var k = q;
                try {
                  e: {
                    for (
                      Et(O), A = r(b);
                      A !== null && !(A.expirationTime > O && ge());
                    ) {
                      var yt = A.callback;
                      if (typeof yt == 'function') {
                        ((A.callback = null), (q = A.priorityLevel));
                        var _t = yt(A.expirationTime <= O);
                        if (((O = c.unstable_now()), typeof _t == 'function')) {
                          ((A.callback = _t), Et(O), (H = !0));
                          break e;
                        }
                        (A === r(b) && f(b), Et(O));
                      } else f(b);
                      A = r(b);
                    }
                    if (A !== null) H = !0;
                    else {
                      var p = r(v);
                      (p !== null && Oe(bt, p.startTime - O), (H = !1));
                    }
                  }
                  break t;
                } finally {
                  ((A = null), (q = k), (Z = !1));
                }
                H = void 0;
              }
            } finally {
              H ? kt() : (Nt = !1);
            }
          }
        }
        var kt;
        if (typeof W == 'function')
          kt = function () {
            W(He);
          };
        else if (typeof MessageChannel < 'u') {
          var Hl = new MessageChannel(),
            Ge = Hl.port2;
          ((Hl.port1.onmessage = He),
            (kt = function () {
              Ge.postMessage(null);
            }));
        } else
          kt = function () {
            w(He, 0);
          };
        function Oe(O, H) {
          P = w(function () {
            O(c.unstable_now());
          }, H);
        }
        ((c.unstable_IdlePriority = 5),
          (c.unstable_ImmediatePriority = 1),
          (c.unstable_LowPriority = 4),
          (c.unstable_NormalPriority = 3),
          (c.unstable_Profiling = null),
          (c.unstable_UserBlockingPriority = 2),
          (c.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (c.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O ?
              console.error(
                'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
              )
            : (Ot = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (c.unstable_getCurrentPriorityLevel = function () {
            return q;
          }),
          (c.unstable_next = function (O) {
            switch (q) {
              case 1:
              case 2:
              case 3:
                var H = 3;
                break;
              default:
                H = q;
            }
            var k = q;
            q = H;
            try {
              return O();
            } finally {
              q = k;
            }
          }),
          (c.unstable_requestPaint = function () {
            G = !0;
          }),
          (c.unstable_runWithPriority = function (O, H) {
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
            var k = q;
            q = O;
            try {
              return H();
            } finally {
              q = k;
            }
          }),
          (c.unstable_scheduleCallback = function (O, H, k) {
            var yt = c.unstable_now();
            switch (
              (typeof k == 'object' && k !== null ?
                ((k = k.delay),
                (k = typeof k == 'number' && 0 < k ? yt + k : yt))
              : (k = yt),
              O)
            ) {
              case 1:
                var _t = -1;
                break;
              case 2:
                _t = 250;
                break;
              case 5:
                _t = 1073741823;
                break;
              case 4:
                _t = 1e4;
                break;
              default:
                _t = 5e3;
            }
            return (
              (_t = k + _t),
              (O = {
                id: D++,
                callback: H,
                priorityLevel: O,
                startTime: k,
                expirationTime: _t,
                sortIndex: -1,
              }),
              k > yt ?
                ((O.sortIndex = k),
                o(v, O),
                r(b) === null &&
                  O === r(v) &&
                  (V ? (L(P), (P = -1)) : (V = !0), Oe(bt, k - yt)))
              : ((O.sortIndex = _t),
                o(b, O),
                F || Z || ((F = !0), Nt || ((Nt = !0), kt()))),
              O
            );
          }),
          (c.unstable_shouldYield = ge),
          (c.unstable_wrapCallback = function (O) {
            var H = q;
            return function () {
              var k = q;
              q = H;
              try {
                return O.apply(this, arguments);
              } finally {
                q = k;
              }
            };
          }));
      })(Lf)),
    Lf
  );
}
var fh;
function dv() {
  return (fh || ((fh = 1), (Yf.exports = rv())), Yf.exports);
}
var Gf = { exports: {} },
  I = {};
var sh;
function hv() {
  if (sh) return I;
  sh = 1;
  var c = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.portal'),
    r = Symbol.for('react.fragment'),
    f = Symbol.for('react.strict_mode'),
    m = Symbol.for('react.profiler'),
    y = Symbol.for('react.consumer'),
    S = Symbol.for('react.context'),
    R = Symbol.for('react.forward_ref'),
    b = Symbol.for('react.suspense'),
    v = Symbol.for('react.memo'),
    D = Symbol.for('react.lazy'),
    A = Symbol.for('react.activity'),
    q = Symbol.iterator;
  function Z(p) {
    return p === null || typeof p != 'object' ?
        null
      : ((p = (q && p[q]) || p['@@iterator']),
        typeof p == 'function' ? p : null);
  }
  var F = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    V = Object.assign,
    G = {};
  function w(p, U, B) {
    ((this.props = p),
      (this.context = U),
      (this.refs = G),
      (this.updater = B || F));
  }
  ((w.prototype.isReactComponent = {}),
    (w.prototype.setState = function (p, U) {
      if (typeof p != 'object' && typeof p != 'function' && p != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, p, U, 'setState');
    }),
    (w.prototype.forceUpdate = function (p) {
      this.updater.enqueueForceUpdate(this, p, 'forceUpdate');
    }));
  function L() {}
  L.prototype = w.prototype;
  function W(p, U, B) {
    ((this.props = p),
      (this.context = U),
      (this.refs = G),
      (this.updater = B || F));
  }
  var Et = (W.prototype = new L());
  ((Et.constructor = W), V(Et, w.prototype), (Et.isPureReactComponent = !0));
  var bt = Array.isArray;
  function Nt() {}
  var P = { H: null, A: null, T: null, S: null },
    Ot = Object.prototype.hasOwnProperty;
  function Xt(p, U, B) {
    var X = B.ref;
    return {
      $$typeof: c,
      type: p,
      key: U,
      ref: X !== void 0 ? X : null,
      props: B,
    };
  }
  function ge(p, U) {
    return Xt(p.type, U, p.props);
  }
  function He(p) {
    return typeof p == 'object' && p !== null && p.$$typeof === c;
  }
  function kt(p) {
    var U = { '=': '=0', ':': '=2' };
    return (
      '$' +
      p.replace(/[=:]/g, function (B) {
        return U[B];
      })
    );
  }
  var Hl = /\/+/g;
  function Ge(p, U) {
    return typeof p == 'object' && p !== null && p.key != null ?
        kt('' + p.key)
      : U.toString(36);
  }
  function Oe(p) {
    switch (p.status) {
      case 'fulfilled':
        return p.value;
      case 'rejected':
        throw p.reason;
      default:
        switch (
          (typeof p.status == 'string' ?
            p.then(Nt, Nt)
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
  function O(p, U, B, X, tt) {
    var at = typeof p;
    (at === 'undefined' || at === 'boolean') && (p = null);
    var dt = !1;
    if (p === null) dt = !0;
    else
      switch (at) {
        case 'bigint':
        case 'string':
        case 'number':
          dt = !0;
          break;
        case 'object':
          switch (p.$$typeof) {
            case c:
            case o:
              dt = !0;
              break;
            case D:
              return ((dt = p._init), O(dt(p._payload), U, B, X, tt));
          }
      }
    if (dt)
      return (
        (tt = tt(p)),
        (dt = X === '' ? '.' + Ge(p, 0) : X),
        bt(tt) ?
          ((B = ''),
          dt != null && (B = dt.replace(Hl, '$&/') + '/'),
          O(tt, U, B, '', function (Va) {
            return Va;
          }))
        : tt != null &&
          (He(tt) &&
            (tt = ge(
              tt,
              B +
                (tt.key == null || (p && p.key === tt.key) ?
                  ''
                : ('' + tt.key).replace(Hl, '$&/') + '/') +
                dt,
            )),
          U.push(tt)),
        1
      );
    dt = 0;
    var $t = X === '' ? '.' : X + ':';
    if (bt(p))
      for (var Mt = 0; Mt < p.length; Mt++)
        ((X = p[Mt]), (at = $t + Ge(X, Mt)), (dt += O(X, U, B, at, tt)));
    else if (((Mt = Z(p)), typeof Mt == 'function'))
      for (p = Mt.call(p), Mt = 0; !(X = p.next()).done; )
        ((X = X.value), (at = $t + Ge(X, Mt++)), (dt += O(X, U, B, at, tt)));
    else if (at === 'object') {
      if (typeof p.then == 'function') return O(Oe(p), U, B, X, tt);
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
    return dt;
  }
  function H(p, U, B) {
    if (p == null) return p;
    var X = [],
      tt = 0;
    return (
      O(p, X, '', '', function (at) {
        return U.call(B, at, tt++);
      }),
      X
    );
  }
  function k(p) {
    if (p._status === -1) {
      var U = p._result;
      ((U = U()),
        U.then(
          function (B) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 1), (p._result = B));
          },
          function (B) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 2), (p._result = B));
          },
        ),
        p._status === -1 && ((p._status = 0), (p._result = U)));
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var yt =
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
    _t = {
      map: H,
      forEach: function (p, U, B) {
        H(
          p,
          function () {
            U.apply(this, arguments);
          },
          B,
        );
      },
      count: function (p) {
        var U = 0;
        return (
          H(p, function () {
            U++;
          }),
          U
        );
      },
      toArray: function (p) {
        return (
          H(p, function (U) {
            return U;
          }) || []
        );
      },
      only: function (p) {
        if (!He(p))
          throw Error(
            'React.Children.only expected to receive a single React element child.',
          );
        return p;
      },
    };
  return (
    (I.Activity = A),
    (I.Children = _t),
    (I.Component = w),
    (I.Fragment = r),
    (I.Profiler = m),
    (I.PureComponent = W),
    (I.StrictMode = f),
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
    (I.cloneElement = function (p, U, B) {
      if (p == null)
        throw Error(
          'The argument must be a React element, but you passed ' + p + '.',
        );
      var X = V({}, p.props),
        tt = p.key;
      if (U != null)
        for (at in (U.key !== void 0 && (tt = '' + U.key), U))
          !Ot.call(U, at) ||
            at === 'key' ||
            at === '__self' ||
            at === '__source' ||
            (at === 'ref' && U.ref === void 0) ||
            (X[at] = U[at]);
      var at = arguments.length - 2;
      if (at === 1) X.children = B;
      else if (1 < at) {
        for (var dt = Array(at), $t = 0; $t < at; $t++)
          dt[$t] = arguments[$t + 2];
        X.children = dt;
      }
      return Xt(p.type, tt, X);
    }),
    (I.createContext = function (p) {
      return (
        (p = {
          $$typeof: S,
          _currentValue: p,
          _currentValue2: p,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (p.Provider = p),
        (p.Consumer = { $$typeof: y, _context: p }),
        p
      );
    }),
    (I.createElement = function (p, U, B) {
      var X,
        tt = {},
        at = null;
      if (U != null)
        for (X in (U.key !== void 0 && (at = '' + U.key), U))
          Ot.call(U, X) &&
            X !== 'key' &&
            X !== '__self' &&
            X !== '__source' &&
            (tt[X] = U[X]);
      var dt = arguments.length - 2;
      if (dt === 1) tt.children = B;
      else if (1 < dt) {
        for (var $t = Array(dt), Mt = 0; Mt < dt; Mt++)
          $t[Mt] = arguments[Mt + 2];
        tt.children = $t;
      }
      if (p && p.defaultProps)
        for (X in ((dt = p.defaultProps), dt))
          tt[X] === void 0 && (tt[X] = dt[X]);
      return Xt(p, at, tt);
    }),
    (I.createRef = function () {
      return { current: null };
    }),
    (I.forwardRef = function (p) {
      return { $$typeof: R, render: p };
    }),
    (I.isValidElement = He),
    (I.lazy = function (p) {
      return { $$typeof: D, _payload: { _status: -1, _result: p }, _init: k };
    }),
    (I.memo = function (p, U) {
      return { $$typeof: v, type: p, compare: U === void 0 ? null : U };
    }),
    (I.startTransition = function (p) {
      var U = P.T,
        B = {};
      P.T = B;
      try {
        var X = p(),
          tt = P.S;
        (tt !== null && tt(B, X),
          typeof X == 'object' &&
            X !== null &&
            typeof X.then == 'function' &&
            X.then(Nt, yt));
      } catch (at) {
        yt(at);
      } finally {
        (U !== null && B.types !== null && (U.types = B.types), (P.T = U));
      }
    }),
    (I.unstable_useCacheRefresh = function () {
      return P.H.useCacheRefresh();
    }),
    (I.use = function (p) {
      return P.H.use(p);
    }),
    (I.useActionState = function (p, U, B) {
      return P.H.useActionState(p, U, B);
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
    (I.useImperativeHandle = function (p, U, B) {
      return P.H.useImperativeHandle(p, U, B);
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
    (I.useReducer = function (p, U, B) {
      return P.H.useReducer(p, U, B);
    }),
    (I.useRef = function (p) {
      return P.H.useRef(p);
    }),
    (I.useState = function (p) {
      return P.H.useState(p);
    }),
    (I.useSyncExternalStore = function (p, U, B) {
      return P.H.useSyncExternalStore(p, U, B);
    }),
    (I.useTransition = function () {
      return P.H.useTransition();
    }),
    (I.version = '19.2.4'),
    I
  );
}
var oh;
function $f() {
  return (oh || ((oh = 1), (Gf.exports = hv())), Gf.exports);
}
var Xf = { exports: {} },
  Jt = {};
var rh;
function mv() {
  if (rh) return Jt;
  rh = 1;
  var c = $f();
  function o(b) {
    var v = 'https://react.dev/errors/' + b;
    if (1 < arguments.length) {
      v += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var D = 2; D < arguments.length; D++)
        v += '&args[]=' + encodeURIComponent(arguments[D]);
    }
    return (
      'Minified React error #' +
      b +
      '; visit ' +
      v +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function r() {}
  var f = {
      d: {
        f: r,
        r: function () {
          throw Error(o(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    m = Symbol.for('react.portal');
  function y(b, v, D) {
    var A =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: m,
      key: A == null ? null : '' + A,
      children: b,
      containerInfo: v,
      implementation: D,
    };
  }
  var S = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function R(b, v) {
    if (b === 'font') return '';
    if (typeof v == 'string') return v === 'use-credentials' ? v : '';
  }
  return (
    (Jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
    (Jt.createPortal = function (b, v) {
      var D =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!v || (v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11))
        throw Error(o(299));
      return y(b, v, null, D);
    }),
    (Jt.flushSync = function (b) {
      var v = S.T,
        D = f.p;
      try {
        if (((S.T = null), (f.p = 2), b)) return b();
      } finally {
        ((S.T = v), (f.p = D), f.d.f());
      }
    }),
    (Jt.preconnect = function (b, v) {
      typeof b == 'string' &&
        (v ?
          ((v = v.crossOrigin),
          (v =
            typeof v == 'string' ?
              v === 'use-credentials' ?
                v
              : ''
            : void 0))
        : (v = null),
        f.d.C(b, v));
    }),
    (Jt.prefetchDNS = function (b) {
      typeof b == 'string' && f.d.D(b);
    }),
    (Jt.preinit = function (b, v) {
      if (typeof b == 'string' && v && typeof v.as == 'string') {
        var D = v.as,
          A = R(D, v.crossOrigin),
          q = typeof v.integrity == 'string' ? v.integrity : void 0,
          Z = typeof v.fetchPriority == 'string' ? v.fetchPriority : void 0;
        D === 'style' ?
          f.d.S(b, typeof v.precedence == 'string' ? v.precedence : void 0, {
            crossOrigin: A,
            integrity: q,
            fetchPriority: Z,
          })
        : D === 'script' &&
          f.d.X(b, {
            crossOrigin: A,
            integrity: q,
            fetchPriority: Z,
            nonce: typeof v.nonce == 'string' ? v.nonce : void 0,
          });
      }
    }),
    (Jt.preinitModule = function (b, v) {
      if (typeof b == 'string')
        if (typeof v == 'object' && v !== null) {
          if (v.as == null || v.as === 'script') {
            var D = R(v.as, v.crossOrigin);
            f.d.M(b, {
              crossOrigin: D,
              integrity: typeof v.integrity == 'string' ? v.integrity : void 0,
              nonce: typeof v.nonce == 'string' ? v.nonce : void 0,
            });
          }
        } else v == null && f.d.M(b);
    }),
    (Jt.preload = function (b, v) {
      if (
        typeof b == 'string' &&
        typeof v == 'object' &&
        v !== null &&
        typeof v.as == 'string'
      ) {
        var D = v.as,
          A = R(D, v.crossOrigin);
        f.d.L(b, D, {
          crossOrigin: A,
          integrity: typeof v.integrity == 'string' ? v.integrity : void 0,
          nonce: typeof v.nonce == 'string' ? v.nonce : void 0,
          type: typeof v.type == 'string' ? v.type : void 0,
          fetchPriority:
            typeof v.fetchPriority == 'string' ? v.fetchPriority : void 0,
          referrerPolicy:
            typeof v.referrerPolicy == 'string' ? v.referrerPolicy : void 0,
          imageSrcSet:
            typeof v.imageSrcSet == 'string' ? v.imageSrcSet : void 0,
          imageSizes: typeof v.imageSizes == 'string' ? v.imageSizes : void 0,
          media: typeof v.media == 'string' ? v.media : void 0,
        });
      }
    }),
    (Jt.preloadModule = function (b, v) {
      if (typeof b == 'string')
        if (v) {
          var D = R(v.as, v.crossOrigin);
          f.d.m(b, {
            as: typeof v.as == 'string' && v.as !== 'script' ? v.as : void 0,
            crossOrigin: D,
            integrity: typeof v.integrity == 'string' ? v.integrity : void 0,
          });
        } else f.d.m(b);
    }),
    (Jt.requestFormReset = function (b) {
      f.d.r(b);
    }),
    (Jt.unstable_batchedUpdates = function (b, v) {
      return b(v);
    }),
    (Jt.useFormState = function (b, v, D) {
      return S.H.useFormState(b, v, D);
    }),
    (Jt.useFormStatus = function () {
      return S.H.useHostTransitionStatus();
    }),
    (Jt.version = '19.2.4'),
    Jt
  );
}
var dh;
function yv() {
  if (dh) return Xf.exports;
  dh = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (o) {
        console.error(o);
      }
  }
  return (c(), (Xf.exports = mv()), Xf.exports);
}
var hh;
function vv() {
  if (hh) return Ln;
  hh = 1;
  var c = dv(),
    o = $f(),
    r = yv();
  function f(t) {
    var e = 'https://react.dev/errors/' + t;
    if (1 < arguments.length) {
      e += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += '&args[]=' + encodeURIComponent(arguments[l]);
    }
    return (
      'Minified React error #' +
      t +
      '; visit ' +
      e +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function m(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function y(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function S(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function R(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function b(t) {
    if (y(t) !== t) throw Error(f(188));
  }
  function v(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = y(t)), e === null)) throw Error(f(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
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
          if (u === l) return (b(n), t);
          if (u === a) return (b(n), e);
          u = u.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) ((l = n), (a = u));
      else {
        for (var i = !1, s = n.child; s; ) {
          if (s === l) {
            ((i = !0), (l = n), (a = u));
            break;
          }
          if (s === a) {
            ((i = !0), (a = n), (l = u));
            break;
          }
          s = s.sibling;
        }
        if (!i) {
          for (s = u.child; s; ) {
            if (s === l) {
              ((i = !0), (l = u), (a = n));
              break;
            }
            if (s === a) {
              ((i = !0), (a = u), (l = n));
              break;
            }
            s = s.sibling;
          }
          if (!i) throw Error(f(189));
        }
      }
      if (l.alternate !== a) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? t : e;
  }
  function D(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = D(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var A = Object.assign,
    q = Symbol.for('react.element'),
    Z = Symbol.for('react.transitional.element'),
    F = Symbol.for('react.portal'),
    V = Symbol.for('react.fragment'),
    G = Symbol.for('react.strict_mode'),
    w = Symbol.for('react.profiler'),
    L = Symbol.for('react.consumer'),
    W = Symbol.for('react.context'),
    Et = Symbol.for('react.forward_ref'),
    bt = Symbol.for('react.suspense'),
    Nt = Symbol.for('react.suspense_list'),
    P = Symbol.for('react.memo'),
    Ot = Symbol.for('react.lazy'),
    Xt = Symbol.for('react.activity'),
    ge = Symbol.for('react.memo_cache_sentinel'),
    He = Symbol.iterator;
  function kt(t) {
    return t === null || typeof t != 'object' ?
        null
      : ((t = (He && t[He]) || t['@@iterator']),
        typeof t == 'function' ? t : null);
  }
  var Hl = Symbol.for('react.client.reference');
  function Ge(t) {
    if (t == null) return null;
    if (typeof t == 'function')
      return t.$$typeof === Hl ? null : t.displayName || t.name || null;
    if (typeof t == 'string') return t;
    switch (t) {
      case V:
        return 'Fragment';
      case w:
        return 'Profiler';
      case G:
        return 'StrictMode';
      case bt:
        return 'Suspense';
      case Nt:
        return 'SuspenseList';
      case Xt:
        return 'Activity';
    }
    if (typeof t == 'object')
      switch (t.$$typeof) {
        case F:
          return 'Portal';
        case W:
          return t.displayName || 'Context';
        case L:
          return (t._context.displayName || 'Context') + '.Consumer';
        case Et:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ''),
              (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
            t
          );
        case P:
          return (
            (e = t.displayName || null),
            e !== null ? e : Ge(t.type) || 'Memo'
          );
        case Ot:
          ((e = t._payload), (t = t._init));
          try {
            return Ge(t(e));
          } catch {}
      }
    return null;
  }
  var Oe = Array.isArray,
    O = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    H = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    k = { pending: !1, data: null, method: null, action: null },
    yt = [],
    _t = -1;
  function p(t) {
    return { current: t };
  }
  function U(t) {
    0 > _t || ((t.current = yt[_t]), (yt[_t] = null), _t--);
  }
  function B(t, e) {
    (_t++, (yt[_t] = t.current), (t.current = e));
  }
  var X = p(null),
    tt = p(null),
    at = p(null),
    dt = p(null);
  function $t(t, e) {
    switch ((B(at, e), B(tt, t), B(X, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? jd(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = jd(e)), (t = Rd(e, t)));
        else
          switch (t) {
            case 'svg':
              t = 1;
              break;
            case 'math':
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (U(X), B(X, t));
  }
  function Mt() {
    (U(X), U(tt), U(at));
  }
  function Va(t) {
    t.memoizedState !== null && B(dt, t);
    var e = X.current,
      l = Rd(e, t.type);
    e !== l && (B(tt, t), B(X, l));
  }
  function Jn(t) {
    (tt.current === t && (U(X), U(tt)),
      dt.current === t && (U(dt), (Un._currentValue = k)));
  }
  var gi, as;
  function Bl(t) {
    if (gi === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        ((gi = (e && e[1]) || ''),
          (as =
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
      gi +
      t +
      as
    );
  }
  var pi = !1;
  function _i(t, e) {
    if (!t || pi) return '';
    pi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var C = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(C.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(C, []);
                } catch (x) {
                  var z = x;
                }
                Reflect.construct(t, [], C);
              } else {
                try {
                  C.call();
                } catch (x) {
                  z = x;
                }
                t.call(C.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                z = x;
              }
              (C = t()) &&
                typeof C.catch == 'function' &&
                C.catch(function () {});
            }
          } catch (x) {
            if (x && z && typeof x.stack == 'string') return [x.stack, z.stack];
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
        i = u[0],
        s = u[1];
      if (i && s) {
        var d = i.split(`
`),
          T = s.split(`
`);
        for (
          n = a = 0;
          a < d.length && !d[a].includes('DetermineComponentFrameRoot');
        )
          a++;
        for (; n < T.length && !T[n].includes('DetermineComponentFrameRoot'); )
          n++;
        if (a === d.length || n === T.length)
          for (
            a = d.length - 1, n = T.length - 1;
            1 <= a && 0 <= n && d[a] !== T[n];
          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (d[a] !== T[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || d[a] !== T[n])) {
                  var j =
                    `
` + d[a].replace(' at new ', ' at ');
                  return (
                    t.displayName &&
                      j.includes('<anonymous>') &&
                      (j = j.replace('<anonymous>', t.displayName)),
                    j
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ((pi = !1), (Error.prepareStackTrace = l));
    }
    return (l = t ? t.displayName || t.name : '') ? Bl(l) : '';
  }
  function Gh(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Bl(t.type);
      case 16:
        return Bl('Lazy');
      case 13:
        return t.child !== e && e !== null ?
            Bl('Suspense Fallback')
          : Bl('Suspense');
      case 19:
        return Bl('SuspenseList');
      case 0:
      case 15:
        return _i(t.type, !1);
      case 11:
        return _i(t.type.render, !1);
      case 1:
        return _i(t.type, !0);
      case 31:
        return Bl('Activity');
      default:
        return '';
    }
  }
  function ns(t) {
    try {
      var e = '',
        l = null;
      do ((e += Gh(t, l)), (l = t), (t = t.return));
      while (t);
      return e;
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
  var Si = Object.prototype.hasOwnProperty,
    bi = c.unstable_scheduleCallback,
    Ei = c.unstable_cancelCallback,
    Xh = c.unstable_shouldYield,
    Qh = c.unstable_requestPaint,
    ne = c.unstable_now,
    Zh = c.unstable_getCurrentPriorityLevel,
    us = c.unstable_ImmediatePriority,
    is = c.unstable_UserBlockingPriority,
    $n = c.unstable_NormalPriority,
    Vh = c.unstable_LowPriority,
    cs = c.unstable_IdlePriority,
    Kh = c.log,
    wh = c.unstable_setDisableYieldValue,
    Ka = null,
    ue = null;
  function sl(t) {
    if (
      (typeof Kh == 'function' && wh(t),
      ue && typeof ue.setStrictMode == 'function')
    )
      try {
        ue.setStrictMode(Ka, t);
      } catch {}
  }
  var ie = Math.clz32 ? Math.clz32 : Wh,
    Jh = Math.log,
    $h = Math.LN2;
  function Wh(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Jh(t) / $h) | 0)) | 0);
  }
  var Wn = 256,
    kn = 262144,
    Fn = 4194304;
  function ql(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
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
        return t;
    }
  }
  function In(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = t.suspendedLanes,
      i = t.pingedLanes;
    t = t.warmLanes;
    var s = a & 134217727;
    return (
      s !== 0 ?
        ((a = s & ~u),
        a !== 0 ?
          (n = ql(a))
        : ((i &= s),
          i !== 0 ? (n = ql(i)) : l || ((l = s & ~t), l !== 0 && (n = ql(l)))))
      : ((s = a & ~u),
        s !== 0 ? (n = ql(s))
        : i !== 0 ? (n = ql(i))
        : l || ((l = a & ~t), l !== 0 && (n = ql(l)))),
      n === 0 ? 0
      : (
        e !== 0 &&
        e !== n &&
        (e & u) === 0 &&
        ((u = n & -n),
        (l = e & -e),
        u >= l || (u === 32 && (l & 4194048) !== 0))
      ) ?
        e
      : n
    );
  }
  function wa(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function kh(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
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
        return e + 5e3;
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
  function fs() {
    var t = Fn;
    return ((Fn <<= 1), (Fn & 62914560) === 0 && (Fn = 4194304), t);
  }
  function Ti(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Ja(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function Fh(t, e, l, a, n, u) {
    var i = t.pendingLanes;
    ((t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0));
    var s = t.entanglements,
      d = t.expirationTimes,
      T = t.hiddenUpdates;
    for (l = i & ~l; 0 < l; ) {
      var j = 31 - ie(l),
        C = 1 << j;
      ((s[j] = 0), (d[j] = -1));
      var z = T[j];
      if (z !== null)
        for (T[j] = null, j = 0; j < z.length; j++) {
          var x = z[j];
          x !== null && (x.lane &= -536870913);
        }
      l &= ~C;
    }
    (a !== 0 && ss(t, a, 0),
      u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e)));
  }
  function ss(t, e, l) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var a = 31 - ie(e);
    ((t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 261930)));
  }
  function os(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var a = 31 - ie(l),
        n = 1 << a;
      ((n & e) | (t[a] & e) && (t[a] |= e), (l &= ~n));
    }
  }
  function rs(t, e) {
    var l = e & -e;
    return (
      (l = (l & 42) !== 0 ? 1 : zi(l)),
      (l & (t.suspendedLanes | e)) !== 0 ? 0 : l
    );
  }
  function zi(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function xi(t) {
    return (
      (t &= -t),
      2 < t ?
        8 < t ?
          (t & 134217727) !== 0 ?
            32
          : 268435456
        : 8
      : 2
    );
  }
  function ds() {
    var t = H.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Id(t.type));
  }
  function hs(t, e) {
    var l = H.p;
    try {
      return ((H.p = t), e());
    } finally {
      H.p = l;
    }
  }
  var ol = Math.random().toString(36).slice(2),
    Qt = '__reactFiber$' + ol,
    Ft = '__reactProps$' + ol,
    aa = '__reactContainer$' + ol,
    Ai = '__reactEvents$' + ol,
    Ih = '__reactListeners$' + ol,
    Ph = '__reactHandles$' + ol,
    ms = '__reactResources$' + ol,
    $a = '__reactMarker$' + ol;
  function Ni(t) {
    (delete t[Qt], delete t[Ft], delete t[Ai], delete t[Ih], delete t[Ph]);
  }
  function na(t) {
    var e = t[Qt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[aa] || l[Qt])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = Bd(t); t !== null; ) {
            if ((l = t[Qt])) return l;
            t = Bd(t);
          }
        return e;
      }
      ((t = l), (l = t.parentNode));
    }
    return null;
  }
  function ua(t) {
    if ((t = t[Qt] || t[aa])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function Wa(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function ia(t) {
    var e = t[ms];
    return (
      e ||
        (e = t[ms] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Lt(t) {
    t[$a] = !0;
  }
  var ys = new Set(),
    vs = {};
  function Yl(t, e) {
    (ca(t, e), ca(t + 'Capture', e));
  }
  function ca(t, e) {
    for (vs[t] = e, t = 0; t < e.length; t++) ys.add(e[t]);
  }
  var tm = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    gs = {},
    ps = {};
  function em(t) {
    return (
      Si.call(ps, t) ? !0
      : Si.call(gs, t) ? !1
      : tm.test(t) ? (ps[t] = !0)
      : ((gs[t] = !0), !1)
    );
  }
  function Pn(t, e, l) {
    if (em(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case 'undefined':
          case 'function':
          case 'symbol':
            t.removeAttribute(e);
            return;
          case 'boolean':
            var a = e.toLowerCase().slice(0, 5);
            if (a !== 'data-' && a !== 'aria-') {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, '' + l);
      }
  }
  function tu(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, '' + l);
    }
  }
  function Xe(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, '' + a);
    }
  }
  function pe(t) {
    switch (typeof t) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return t;
      case 'object':
        return t;
      default:
        return '';
    }
  }
  function _s(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === 'input' &&
      (e === 'checkbox' || e === 'radio')
    );
  }
  function lm(t, e, l) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof a < 'u' &&
      typeof a.get == 'function' &&
      typeof a.set == 'function'
    ) {
      var n = a.get,
        u = a.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (i) {
            ((l = '' + i), u.call(this, i));
          },
        }),
        Object.defineProperty(t, e, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (i) {
            l = '' + i;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function ji(t) {
    if (!t._valueTracker) {
      var e = _s(t) ? 'checked' : 'value';
      t._valueTracker = lm(t, e, '' + t[e]);
    }
  }
  function Ss(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      a = '';
    return (
      t &&
        (a =
          _s(t) ?
            t.checked ?
              'true'
            : 'false'
          : t.value),
      (t = a),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function eu(t) {
    if (
      ((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var am = /[\n"\\]/g;
  function _e(t) {
    return t.replace(am, function (e) {
      return '\\' + e.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Ri(t, e, l, a, n, u, i, s) {
    ((t.name = ''),
      (
        i != null &&
        typeof i != 'function' &&
        typeof i != 'symbol' &&
        typeof i != 'boolean'
      ) ?
        (t.type = i)
      : t.removeAttribute('type'),
      e != null ?
        i === 'number' ?
          ((e === 0 && t.value === '') || t.value != e) &&
          (t.value = '' + pe(e))
        : t.value !== '' + pe(e) && (t.value = '' + pe(e))
      : (i !== 'submit' && i !== 'reset') || t.removeAttribute('value'),
      e != null ? Oi(t, i, pe(e))
      : l != null ? Oi(t, i, pe(l))
      : a != null && t.removeAttribute('value'),
      n == null && u != null && (t.defaultChecked = !!u),
      n != null &&
        (t.checked = n && typeof n != 'function' && typeof n != 'symbol'),
      (
        s != null &&
        typeof s != 'function' &&
        typeof s != 'symbol' &&
        typeof s != 'boolean'
      ) ?
        (t.name = '' + pe(s))
      : t.removeAttribute('name'));
  }
  function bs(t, e, l, a, n, u, i, s) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (t.type = u),
      e != null || l != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || e != null)) {
        ji(t);
        return;
      }
      ((l = l != null ? '' + pe(l) : ''),
        (e = e != null ? '' + pe(e) : l),
        s || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((a = a ?? n),
      (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
      (t.checked = s ? t.checked : !!a),
      (t.defaultChecked = !!a),
      i != null &&
        typeof i != 'function' &&
        typeof i != 'symbol' &&
        typeof i != 'boolean' &&
        (t.name = i),
      ji(t));
  }
  function Oi(t, e, l) {
    (e === 'number' && eu(t.ownerDocument) === t) ||
      t.defaultValue === '' + l ||
      (t.defaultValue = '' + l);
  }
  function fa(t, e, l, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var n = 0; n < l.length; n++) e['$' + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        ((n = e.hasOwnProperty('$' + t[l].value)),
          t[l].selected !== n && (t[l].selected = n),
          n && a && (t[l].defaultSelected = !0));
    } else {
      for (l = '' + pe(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          ((t[n].selected = !0), a && (t[n].defaultSelected = !0));
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Es(t, e, l) {
    if (
      e != null &&
      ((e = '' + pe(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? '' + pe(l) : '';
  }
  function Ts(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if (Oe(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      (l == null && (l = ''), (e = l));
    }
    ((l = pe(e)),
      (t.defaultValue = l),
      (a = t.textContent),
      a === l && a !== '' && a !== null && (t.value = a),
      ji(t));
  }
  function sa(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var nm = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' ',
    ),
  );
  function zs(t, e, l) {
    var a = e.indexOf('--') === 0;
    l == null || typeof l == 'boolean' || l === '' ?
      a ? t.setProperty(e, '')
      : e === 'float' ? (t.cssFloat = '')
      : (t[e] = '')
    : a ? t.setProperty(e, l)
    : typeof l != 'number' || l === 0 || nm.has(e) ?
      e === 'float' ?
        (t.cssFloat = l)
      : (t[e] = ('' + l).trim())
    : (t[e] = l + 'px');
  }
  function xs(t, e, l) {
    if (e != null && typeof e != 'object') throw Error(f(62));
    if (((t = t.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf('--') === 0 ? t.setProperty(a, '')
          : a === 'float' ? (t.cssFloat = '')
          : (t[a] = ''));
      for (var n in e)
        ((a = e[n]), e.hasOwnProperty(n) && l[n] !== a && zs(t, n, a));
    } else for (var u in e) e.hasOwnProperty(u) && zs(t, u, e[u]);
  }
  function Mi(t) {
    if (t.indexOf('-') === -1) return !1;
    switch (t) {
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
  var um = new Map([
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
    im =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function lu(t) {
    return im.test('' + t) ?
        "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Qe() {}
  var Ci = null;
  function Di(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var oa = null,
    ra = null;
  function As(t) {
    var e = ua(t);
    if (e && (t = e.stateNode)) {
      var l = t[Ft] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case 'input':
          if (
            (Ri(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (e = l.name),
            l.type === 'radio' && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + _e('' + e) + '"][type="radio"]',
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[Ft] || null;
                if (!n) throw Error(f(90));
                Ri(
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
            for (e = 0; e < l.length; e++)
              ((a = l[e]), a.form === t.form && Ss(a));
          }
          break t;
        case 'textarea':
          Es(t, l.value, l.defaultValue);
          break t;
        case 'select':
          ((e = l.value), e != null && fa(t, !!l.multiple, e, !1));
      }
    }
  }
  var Ui = !1;
  function Ns(t, e, l) {
    if (Ui) return t(e, l);
    Ui = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((Ui = !1),
        (oa !== null || ra !== null) &&
          (Zu(), oa && ((e = oa), (t = ra), (ra = oa = null), As(e), t)))
      )
        for (e = 0; e < t.length; e++) As(t[e]);
    }
  }
  function ka(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[Ft] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
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
          ((t = t.type),
          (a = !(
            t === 'button' ||
            t === 'input' ||
            t === 'select' ||
            t === 'textarea'
          ))),
          (t = !a));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != 'function') throw Error(f(231, e, typeof l));
    return l;
  }
  var Ze = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Hi = !1;
  if (Ze)
    try {
      var Fa = {};
      (Object.defineProperty(Fa, 'passive', {
        get: function () {
          Hi = !0;
        },
      }),
        window.addEventListener('test', Fa, Fa),
        window.removeEventListener('test', Fa, Fa));
    } catch {
      Hi = !1;
    }
  var rl = null,
    Bi = null,
    au = null;
  function js() {
    if (au) return au;
    var t,
      e = Bi,
      l = e.length,
      a,
      n = 'value' in rl ? rl.value : rl.textContent,
      u = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++);
    var i = l - t;
    for (a = 1; a <= i && e[l - a] === n[u - a]; a++);
    return (au = n.slice(t, 1 < a ? 1 - a : void 0));
  }
  function nu(t) {
    var e = t.keyCode;
    return (
      'charCode' in t ?
        ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function uu() {
    return !0;
  }
  function Rs() {
    return !1;
  }
  function It(t) {
    function e(l, a, n, u, i) {
      ((this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null));
      for (var s in t)
        t.hasOwnProperty(s) && ((l = t[s]), (this[s] = l ? l(u) : u[s]));
      return (
        (this.isDefaultPrevented =
          (
            u.defaultPrevented != null ?
              u.defaultPrevented
            : u.returnValue === !1
          ) ?
            uu
          : Rs),
        (this.isPropagationStopped = Rs),
        this
      );
    }
    return (
      A(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault ?
              l.preventDefault()
            : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
            (this.isDefaultPrevented = uu));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation ?
              l.stopPropagation()
            : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
            (this.isPropagationStopped = uu));
        },
        persist: function () {},
        isPersistent: uu,
      }),
      e
    );
  }
  var Ll = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    iu = It(Ll),
    Ia = A({}, Ll, { view: 0, detail: 0 }),
    cm = It(Ia),
    qi,
    Yi,
    Pa,
    cu = A({}, Ia, {
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
      getModifierState: Gi,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return (
          t.relatedTarget === void 0 ?
            t.fromElement === t.srcElement ?
              t.toElement
            : t.fromElement
          : t.relatedTarget
        );
      },
      movementX: function (t) {
        return 'movementX' in t ?
            t.movementX
          : (t !== Pa &&
              (Pa && t.type === 'mousemove' ?
                ((qi = t.screenX - Pa.screenX), (Yi = t.screenY - Pa.screenY))
              : (Yi = qi = 0),
              (Pa = t)),
            qi);
      },
      movementY: function (t) {
        return 'movementY' in t ? t.movementY : Yi;
      },
    }),
    Os = It(cu),
    fm = A({}, cu, { dataTransfer: 0 }),
    sm = It(fm),
    om = A({}, Ia, { relatedTarget: 0 }),
    Li = It(om),
    rm = A({}, Ll, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    dm = It(rm),
    hm = A({}, Ll, {
      clipboardData: function (t) {
        return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
      },
    }),
    mm = It(hm),
    ym = A({}, Ll, { data: 0 }),
    Ms = It(ym),
    vm = {
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
    gm = {
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
    pm = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function _m(t) {
    var e = this.nativeEvent;
    return (
      e.getModifierState ? e.getModifierState(t)
      : (t = pm[t]) ? !!e[t]
      : !1
    );
  }
  function Gi() {
    return _m;
  }
  var Sm = A({}, Ia, {
      key: function (t) {
        if (t.key) {
          var e = vm[t.key] || t.key;
          if (e !== 'Unidentified') return e;
        }
        return (
          t.type === 'keypress' ?
            ((t = nu(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
          : t.type === 'keydown' || t.type === 'keyup' ?
            gm[t.keyCode] || 'Unidentified'
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
      getModifierState: Gi,
      charCode: function (t) {
        return t.type === 'keypress' ? nu(t) : 0;
      },
      keyCode: function (t) {
        return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
      },
      which: function (t) {
        return (
          t.type === 'keypress' ? nu(t)
          : t.type === 'keydown' || t.type === 'keyup' ? t.keyCode
          : 0
        );
      },
    }),
    bm = It(Sm),
    Em = A({}, cu, {
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
    Cs = It(Em),
    Tm = A({}, Ia, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Gi,
    }),
    zm = It(Tm),
    xm = A({}, Ll, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Am = It(xm),
    Nm = A({}, cu, {
      deltaX: function (t) {
        return (
          'deltaX' in t ? t.deltaX
          : 'wheelDeltaX' in t ? -t.wheelDeltaX
          : 0
        );
      },
      deltaY: function (t) {
        return (
          'deltaY' in t ? t.deltaY
          : 'wheelDeltaY' in t ? -t.wheelDeltaY
          : 'wheelDelta' in t ? -t.wheelDelta
          : 0
        );
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    jm = It(Nm),
    Rm = A({}, Ll, { newState: 0, oldState: 0 }),
    Om = It(Rm),
    Mm = [9, 13, 27, 32],
    Xi = Ze && 'CompositionEvent' in window,
    tn = null;
  Ze && 'documentMode' in document && (tn = document.documentMode);
  var Cm = Ze && 'TextEvent' in window && !tn,
    Ds = Ze && (!Xi || (tn && 8 < tn && 11 >= tn)),
    Us = ' ',
    Hs = !1;
  function Bs(t, e) {
    switch (t) {
      case 'keyup':
        return Mm.indexOf(e.keyCode) !== -1;
      case 'keydown':
        return e.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function qs(t) {
    return (
      (t = t.detail),
      typeof t == 'object' && 'data' in t ? t.data : null
    );
  }
  var da = !1;
  function Dm(t, e) {
    switch (t) {
      case 'compositionend':
        return qs(e);
      case 'keypress':
        return e.which !== 32 ? null : ((Hs = !0), Us);
      case 'textInput':
        return ((t = e.data), t === Us && Hs ? null : t);
      default:
        return null;
    }
  }
  function Um(t, e) {
    if (da)
      return t === 'compositionend' || (!Xi && Bs(t, e)) ?
          ((t = js()), (au = Bi = rl = null), (da = !1), t)
        : null;
    switch (t) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case 'compositionend':
        return Ds && e.locale !== 'ko' ? null : e.data;
      default:
        return null;
    }
  }
  var Hm = {
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
  function Ys(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === 'input' ? !!Hm[t.type] : e === 'textarea';
  }
  function Ls(t, e, l, a) {
    (oa ?
      ra ? ra.push(a)
      : (ra = [a])
    : (oa = a),
      (e = ku(e, 'onChange')),
      0 < e.length &&
        ((l = new iu('onChange', 'change', null, l, a)),
        t.push({ event: l, listeners: e })));
  }
  var en = null,
    ln = null;
  function Bm(t) {
    Ed(t, 0);
  }
  function fu(t) {
    var e = Wa(t);
    if (Ss(e)) return t;
  }
  function Gs(t, e) {
    if (t === 'change') return e;
  }
  var Xs = !1;
  if (Ze) {
    var Qi;
    if (Ze) {
      var Zi = 'oninput' in document;
      if (!Zi) {
        var Qs = document.createElement('div');
        (Qs.setAttribute('oninput', 'return;'),
          (Zi = typeof Qs.oninput == 'function'));
      }
      Qi = Zi;
    } else Qi = !1;
    Xs = Qi && (!document.documentMode || 9 < document.documentMode);
  }
  function Zs() {
    en && (en.detachEvent('onpropertychange', Vs), (ln = en = null));
  }
  function Vs(t) {
    if (t.propertyName === 'value' && fu(ln)) {
      var e = [];
      (Ls(e, ln, t, Di(t)), Ns(Bm, e));
    }
  }
  function qm(t, e, l) {
    t === 'focusin' ?
      (Zs(), (en = e), (ln = l), en.attachEvent('onpropertychange', Vs))
    : t === 'focusout' && Zs();
  }
  function Ym(t) {
    if (t === 'selectionchange' || t === 'keyup' || t === 'keydown')
      return fu(ln);
  }
  function Lm(t, e) {
    if (t === 'click') return fu(e);
  }
  function Gm(t, e) {
    if (t === 'input' || t === 'change') return fu(e);
  }
  function Xm(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var ce = typeof Object.is == 'function' ? Object.is : Xm;
  function an(t, e) {
    if (ce(t, e)) return !0;
    if (
      typeof t != 'object' ||
      t === null ||
      typeof e != 'object' ||
      e === null
    )
      return !1;
    var l = Object.keys(t),
      a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!Si.call(e, n) || !ce(t[n], e[n])) return !1;
    }
    return !0;
  }
  function Ks(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function ws(t, e) {
    var l = Ks(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = t + l.textContent.length), t <= e && a >= e))
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Ks(l);
    }
  }
  function Js(t, e) {
    return (
      t && e ?
        t === e ? !0
        : t && t.nodeType === 3 ? !1
        : e && e.nodeType === 3 ? Js(t, e.parentNode)
        : 'contains' in t ? t.contains(e)
        : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1
    );
  }
  function $s(t) {
    t =
      (
        t != null &&
        t.ownerDocument != null &&
        t.ownerDocument.defaultView != null
      ) ?
        t.ownerDocument.defaultView
      : window;
    for (var e = eu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == 'string';
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = eu(t.document);
    }
    return e;
  }
  function Vi(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === 'input' &&
        (t.type === 'text' ||
          t.type === 'search' ||
          t.type === 'tel' ||
          t.type === 'url' ||
          t.type === 'password')) ||
        e === 'textarea' ||
        t.contentEditable === 'true')
    );
  }
  var Qm = Ze && 'documentMode' in document && 11 >= document.documentMode,
    ha = null,
    Ki = null,
    nn = null,
    wi = !1;
  function Ws(t, e, l) {
    var a =
      l.window === l ? l.document
      : l.nodeType === 9 ? l
      : l.ownerDocument;
    wi ||
      ha == null ||
      ha !== eu(a) ||
      ((a = ha),
      'selectionStart' in a && Vi(a) ?
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
      (nn && an(nn, a)) ||
        ((nn = a),
        (a = ku(Ki, 'onSelect')),
        0 < a.length &&
          ((e = new iu('onSelect', 'select', null, e, l)),
          t.push({ event: e, listeners: a }),
          (e.target = ha))));
  }
  function Gl(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l['Webkit' + t] = 'webkit' + e),
      (l['Moz' + t] = 'moz' + e),
      l
    );
  }
  var ma = {
      animationend: Gl('Animation', 'AnimationEnd'),
      animationiteration: Gl('Animation', 'AnimationIteration'),
      animationstart: Gl('Animation', 'AnimationStart'),
      transitionrun: Gl('Transition', 'TransitionRun'),
      transitionstart: Gl('Transition', 'TransitionStart'),
      transitioncancel: Gl('Transition', 'TransitionCancel'),
      transitionend: Gl('Transition', 'TransitionEnd'),
    },
    Ji = {},
    ks = {};
  Ze &&
    ((ks = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete ma.animationend.animation,
      delete ma.animationiteration.animation,
      delete ma.animationstart.animation),
    'TransitionEvent' in window || delete ma.transitionend.transition);
  function Xl(t) {
    if (Ji[t]) return Ji[t];
    if (!ma[t]) return t;
    var e = ma[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in ks) return (Ji[t] = e[l]);
    return t;
  }
  var Fs = Xl('animationend'),
    Is = Xl('animationiteration'),
    Ps = Xl('animationstart'),
    Zm = Xl('transitionrun'),
    Vm = Xl('transitionstart'),
    Km = Xl('transitioncancel'),
    to = Xl('transitionend'),
    eo = new Map(),
    $i =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  $i.push('scrollEnd');
  function Me(t, e) {
    (eo.set(t, e), Yl(e, [t]));
  }
  var su =
      typeof reportError == 'function' ? reportError : (
        function (t) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var e = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                (
                  typeof t == 'object' &&
                  t !== null &&
                  typeof t.message == 'string'
                ) ?
                  String(t.message)
                : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', t);
            return;
          }
          console.error(t);
        }
      ),
    Se = [],
    ya = 0,
    Wi = 0;
  function ou() {
    for (var t = ya, e = (Wi = ya = 0); e < t; ) {
      var l = Se[e];
      Se[e++] = null;
      var a = Se[e];
      Se[e++] = null;
      var n = Se[e];
      Se[e++] = null;
      var u = Se[e];
      if (((Se[e++] = null), a !== null && n !== null)) {
        var i = a.pending;
        (i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
          (a.pending = n));
      }
      u !== 0 && lo(l, n, u);
    }
  }
  function ru(t, e, l, a) {
    ((Se[ya++] = t),
      (Se[ya++] = e),
      (Se[ya++] = l),
      (Se[ya++] = a),
      (Wi |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a));
  }
  function ki(t, e, l, a) {
    return (ru(t, e, l, a), du(t));
  }
  function Ql(t, e) {
    return (ru(t, null, null, e), du(t));
  }
  function lo(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = t.return; u !== null; )
      ((u.childLanes |= l),
        (a = u.alternate),
        a !== null && (a.childLanes |= l),
        u.tag === 22 &&
          ((t = u.stateNode), t === null || t._visibility & 1 || (n = !0)),
        (t = u),
        (u = u.return));
    return t.tag === 3 ?
        ((u = t.stateNode),
        n &&
          e !== null &&
          ((n = 31 - ie(l)),
          (t = u.hiddenUpdates),
          (a = t[n]),
          a === null ? (t[n] = [e]) : a.push(e),
          (e.lane = l | 536870912)),
        u)
      : null;
  }
  function du(t) {
    if (50 < Nn) throw ((Nn = 0), (uf = null), Error(f(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var va = {};
  function wm(t, e, l, a) {
    ((this.tag = t),
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
      (this.pendingProps = e),
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
  function fe(t, e, l, a) {
    return new wm(t, e, l, a);
  }
  function Fi(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function Ve(t, e) {
    var l = t.alternate;
    return (
      l === null ?
        ((l = fe(t.tag, e, t.key, t.mode)),
        (l.elementType = t.elementType),
        (l.type = t.type),
        (l.stateNode = t.stateNode),
        (l.alternate = t),
        (t.alternate = l))
      : ((l.pendingProps = e),
        (l.type = t.type),
        (l.flags = 0),
        (l.subtreeFlags = 0),
        (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function ao(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return (
      l === null ?
        ((t.childLanes = 0),
        (t.lanes = e),
        (t.child = null),
        (t.subtreeFlags = 0),
        (t.memoizedProps = null),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.dependencies = null),
        (t.stateNode = null))
      : ((t.childLanes = l.childLanes),
        (t.lanes = l.lanes),
        (t.child = l.child),
        (t.subtreeFlags = 0),
        (t.deletions = null),
        (t.memoizedProps = l.memoizedProps),
        (t.memoizedState = l.memoizedState),
        (t.updateQueue = l.updateQueue),
        (t.type = l.type),
        (e = l.dependencies),
        (t.dependencies =
          e === null ? null : (
            { lanes: e.lanes, firstContext: e.firstContext }
          ))),
      t
    );
  }
  function hu(t, e, l, a, n, u) {
    var i = 0;
    if (((a = t), typeof t == 'function')) Fi(t) && (i = 1);
    else if (typeof t == 'string')
      i =
        Fy(t, l, X.current) ? 26
        : t === 'html' || t === 'head' || t === 'body' ? 27
        : 5;
    else
      t: switch (t) {
        case Xt:
          return (
            (t = fe(31, l, e, n)),
            (t.elementType = Xt),
            (t.lanes = u),
            t
          );
        case V:
          return Zl(l.children, n, u, e);
        case G:
          ((i = 8), (n |= 24));
          break;
        case w:
          return (
            (t = fe(12, l, e, n | 2)),
            (t.elementType = w),
            (t.lanes = u),
            t
          );
        case bt:
          return (
            (t = fe(13, l, e, n)),
            (t.elementType = bt),
            (t.lanes = u),
            t
          );
        case Nt:
          return (
            (t = fe(19, l, e, n)),
            (t.elementType = Nt),
            (t.lanes = u),
            t
          );
        default:
          if (typeof t == 'object' && t !== null)
            switch (t.$$typeof) {
              case W:
                i = 10;
                break t;
              case L:
                i = 9;
                break t;
              case Et:
                i = 11;
                break t;
              case P:
                i = 14;
                break t;
              case Ot:
                ((i = 16), (a = null));
                break t;
            }
          ((i = 29),
            (l = Error(f(130, t === null ? 'null' : typeof t, ''))),
            (a = null));
      }
    return (
      (e = fe(i, l, e, n)),
      (e.elementType = t),
      (e.type = a),
      (e.lanes = u),
      e
    );
  }
  function Zl(t, e, l, a) {
    return ((t = fe(7, t, a, e)), (t.lanes = l), t);
  }
  function Ii(t, e, l) {
    return ((t = fe(6, t, null, e)), (t.lanes = l), t);
  }
  function no(t) {
    var e = fe(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function Pi(t, e, l) {
    return (
      (e = fe(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var uo = new WeakMap();
  function be(t, e) {
    if (typeof t == 'object' && t !== null) {
      var l = uo.get(t);
      return l !== void 0 ? l : (
          ((e = { value: t, source: e, stack: ns(e) }), uo.set(t, e), e)
        );
    }
    return { value: t, source: e, stack: ns(e) };
  }
  var ga = [],
    pa = 0,
    mu = null,
    un = 0,
    Ee = [],
    Te = 0,
    dl = null,
    Be = 1,
    qe = '';
  function Ke(t, e) {
    ((ga[pa++] = un), (ga[pa++] = mu), (mu = t), (un = e));
  }
  function io(t, e, l) {
    ((Ee[Te++] = Be), (Ee[Te++] = qe), (Ee[Te++] = dl), (dl = t));
    var a = Be;
    t = qe;
    var n = 32 - ie(a) - 1;
    ((a &= ~(1 << n)), (l += 1));
    var u = 32 - ie(e) + n;
    if (30 < u) {
      var i = n - (n % 5);
      ((u = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (n -= i),
        (Be = (1 << (32 - ie(e) + n)) | (l << n) | a),
        (qe = u + t));
    } else ((Be = (1 << u) | (l << n) | a), (qe = t));
  }
  function tc(t) {
    t.return !== null && (Ke(t, 1), io(t, 1, 0));
  }
  function ec(t) {
    for (; t === mu; )
      ((mu = ga[--pa]), (ga[pa] = null), (un = ga[--pa]), (ga[pa] = null));
    for (; t === dl; )
      ((dl = Ee[--Te]),
        (Ee[Te] = null),
        (qe = Ee[--Te]),
        (Ee[Te] = null),
        (Be = Ee[--Te]),
        (Ee[Te] = null));
  }
  function co(t, e) {
    ((Ee[Te++] = Be),
      (Ee[Te++] = qe),
      (Ee[Te++] = dl),
      (Be = e.id),
      (qe = e.overflow),
      (dl = t));
  }
  var Zt = null,
    Tt = null,
    ft = !1,
    hl = null,
    ze = !1,
    lc = Error(f(519));
  function ml(t) {
    var e = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ?
          'text'
        : 'HTML',
        '',
      ),
    );
    throw (cn(be(e, t)), lc);
  }
  function fo(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps;
    switch (((e[Qt] = t), (e[Ft] = a), l)) {
      case 'dialog':
        (ut('cancel', e), ut('close', e));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        ut('load', e);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < Rn.length; l++) ut(Rn[l], e);
        break;
      case 'source':
        ut('error', e);
        break;
      case 'img':
      case 'image':
      case 'link':
        (ut('error', e), ut('load', e));
        break;
      case 'details':
        ut('toggle', e);
        break;
      case 'input':
        (ut('invalid', e),
          bs(
            e,
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
        ut('invalid', e);
        break;
      case 'textarea':
        (ut('invalid', e), Ts(e, a.value, a.defaultValue, a.children));
    }
    ((l = a.children),
      (
        (typeof l != 'string' &&
          typeof l != 'number' &&
          typeof l != 'bigint') ||
        e.textContent === '' + l ||
        a.suppressHydrationWarning === !0 ||
        Ad(e.textContent, l)
      ) ?
        (a.popover != null && (ut('beforetoggle', e), ut('toggle', e)),
        a.onScroll != null && ut('scroll', e),
        a.onScrollEnd != null && ut('scrollend', e),
        a.onClick != null && (e.onclick = Qe),
        (e = !0))
      : (e = !1),
      e || ml(t, !0));
  }
  function so(t) {
    for (Zt = t.return; Zt; )
      switch (Zt.tag) {
        case 5:
        case 31:
        case 13:
          ze = !1;
          return;
        case 27:
        case 3:
          ze = !0;
          return;
        default:
          Zt = Zt.return;
      }
  }
  function _a(t) {
    if (t !== Zt) return !1;
    if (!ft) return (so(t), (ft = !0), !1);
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== 'form' && l !== 'button') || bf(t.type, t.memoizedProps))),
        (l = !l)),
      l && Tt && ml(t),
      so(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(f(317));
      Tt = Hd(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(f(317));
      Tt = Hd(t);
    } else
      e === 27 ?
        ((e = Tt), jl(t.type) ? ((t = Af), (Af = null), (Tt = t)) : (Tt = e))
      : (Tt = Zt ? Ae(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Vl() {
    ((Tt = Zt = null), (ft = !1));
  }
  function ac() {
    var t = hl;
    return (
      t !== null &&
        (le === null ? (le = t) : le.push.apply(le, t), (hl = null)),
      t
    );
  }
  function cn(t) {
    hl === null ? (hl = [t]) : hl.push(t);
  }
  var nc = p(null),
    Kl = null,
    we = null;
  function yl(t, e, l) {
    (B(nc, e._currentValue), (e._currentValue = l));
  }
  function Je(t) {
    ((t._currentValue = nc.current), U(nc));
  }
  function uc(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e ?
          ((t.childLanes |= e), a !== null && (a.childLanes |= e))
        : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function ic(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var s = u;
          u = n;
          for (var d = 0; d < e.length; d++)
            if (s.context === e[d]) {
              ((u.lanes |= l),
                (s = u.alternate),
                s !== null && (s.lanes |= l),
                uc(u.return, l, t),
                a || (i = null));
              break t;
            }
          u = s.next;
        }
      } else if (n.tag === 18) {
        if (((i = n.return), i === null)) throw Error(f(341));
        ((i.lanes |= l),
          (u = i.alternate),
          u !== null && (u.lanes |= l),
          uc(i, l, t),
          (i = null));
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (((n = i.sibling), n !== null)) {
            ((n.return = i.return), (i = n));
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function Sa(t, e, l, a) {
    t = null;
    for (var n = e, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(f(387));
        if (((i = i.memoizedProps), i !== null)) {
          var s = n.type;
          ce(n.pendingProps.value, i.value) ||
            (t !== null ? t.push(s) : (t = [s]));
        }
      } else if (n === dt.current) {
        if (((i = n.alternate), i === null)) throw Error(f(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (t !== null ? t.push(Un) : (t = [Un]));
      }
      n = n.return;
    }
    (t !== null && ic(e, t, l, a), (e.flags |= 262144));
  }
  function yu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ce(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function wl(t) {
    ((Kl = t),
      (we = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function Vt(t) {
    return oo(Kl, t);
  }
  function vu(t, e) {
    return (Kl === null && wl(t), oo(t, e));
  }
  function oo(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), we === null)) {
      if (t === null) throw Error(f(308));
      ((we = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else we = we.next = e;
    return l;
  }
  var Jm =
      typeof AbortController < 'u' ? AbortController : (
        function () {
          var t = [],
            e = (this.signal = {
              aborted: !1,
              addEventListener: function (l, a) {
                t.push(a);
              },
            });
          this.abort = function () {
            ((e.aborted = !0),
              t.forEach(function (l) {
                return l();
              }));
          };
        }
      ),
    $m = c.unstable_scheduleCallback,
    Wm = c.unstable_NormalPriority,
    Ut = {
      $$typeof: W,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function cc() {
    return { controller: new Jm(), data: new Map(), refCount: 0 };
  }
  function fn(t) {
    (t.refCount--,
      t.refCount === 0 &&
        $m(Wm, function () {
          t.controller.abort();
        }));
  }
  var sn = null,
    fc = 0,
    ba = 0,
    Ea = null;
  function km(t, e) {
    if (sn === null) {
      var l = (sn = []);
      ((fc = 0),
        (ba = df()),
        (Ea = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        }));
    }
    return (fc++, e.then(ro, ro), e);
  }
  function ro() {
    if (--fc === 0 && sn !== null) {
      Ea !== null && (Ea.status = 'fulfilled');
      var t = sn;
      ((sn = null), (ba = 0), (Ea = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Fm(t, e) {
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
      t.then(
        function () {
          ((a.status = 'fulfilled'), (a.value = e));
          for (var n = 0; n < l.length; n++) (0, l[n])(e);
        },
        function (n) {
          for (a.status = 'rejected', a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        },
      ),
      a
    );
  }
  var ho = O.S;
  O.S = function (t, e) {
    ((kr = ne()),
      typeof e == 'object' &&
        e !== null &&
        typeof e.then == 'function' &&
        km(t, e),
      ho !== null && ho(t, e));
  };
  var Jl = p(null);
  function sc() {
    var t = Jl.current;
    return t !== null ? t : St.pooledCache;
  }
  function gu(t, e) {
    e === null ? B(Jl, Jl.current) : B(Jl, e.pool);
  }
  function mo() {
    var t = sc();
    return t === null ? null : { parent: Ut._currentValue, pool: t };
  }
  var Ta = Error(f(460)),
    oc = Error(f(474)),
    pu = Error(f(542)),
    _u = { then: function () {} };
  function yo(t) {
    return ((t = t.status), t === 'fulfilled' || t === 'rejected');
  }
  function vo(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(Qe, Qe), (e = l)),
      e.status)
    ) {
      case 'fulfilled':
        return e.value;
      case 'rejected':
        throw ((t = e.reason), po(t), t);
      default:
        if (typeof e.status == 'string') e.then(Qe, Qe);
        else {
          if (((t = St), t !== null && 100 < t.shellSuspendCounter))
            throw Error(f(482));
          ((t = e),
            (t.status = 'pending'),
            t.then(
              function (a) {
                if (e.status === 'pending') {
                  var n = e;
                  ((n.status = 'fulfilled'), (n.value = a));
                }
              },
              function (a) {
                if (e.status === 'pending') {
                  var n = e;
                  ((n.status = 'rejected'), (n.reason = a));
                }
              },
            ));
        }
        switch (e.status) {
          case 'fulfilled':
            return e.value;
          case 'rejected':
            throw ((t = e.reason), po(t), t);
        }
        throw ((Wl = e), Ta);
    }
  }
  function $l(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == 'object' && typeof l.then == 'function' ?
          ((Wl = l), Ta)
        : l;
    }
  }
  var Wl = null;
  function go() {
    if (Wl === null) throw Error(f(459));
    var t = Wl;
    return ((Wl = null), t);
  }
  function po(t) {
    if (t === Ta || t === pu) throw Error(f(483));
  }
  var za = null,
    on = 0;
  function Su(t) {
    var e = on;
    return ((on += 1), za === null && (za = []), vo(za, t, e));
  }
  function rn(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function bu(t, e) {
    throw e.$$typeof === q ?
        Error(f(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          f(
            31,
            t === '[object Object]' ?
              'object with keys {' + Object.keys(e).join(', ') + '}'
            : t,
          ),
        ));
  }
  function _o(t) {
    function e(_, g) {
      if (t) {
        var E = _.deletions;
        E === null ? ((_.deletions = [g]), (_.flags |= 16)) : E.push(g);
      }
    }
    function l(_, g) {
      if (!t) return null;
      for (; g !== null; ) (e(_, g), (g = g.sibling));
      return null;
    }
    function a(_) {
      for (var g = new Map(); _ !== null; )
        (_.key !== null ? g.set(_.key, _) : g.set(_.index, _), (_ = _.sibling));
      return g;
    }
    function n(_, g) {
      return ((_ = Ve(_, g)), (_.index = 0), (_.sibling = null), _);
    }
    function u(_, g, E) {
      return (
        (_.index = E),
        t ?
          ((E = _.alternate),
          E !== null ?
            ((E = E.index), E < g ? ((_.flags |= 67108866), g) : E)
          : ((_.flags |= 67108866), g))
        : ((_.flags |= 1048576), g)
      );
    }
    function i(_) {
      return (t && _.alternate === null && (_.flags |= 67108866), _);
    }
    function s(_, g, E, M) {
      return g === null || g.tag !== 6 ?
          ((g = Ii(E, _.mode, M)), (g.return = _), g)
        : ((g = n(g, E)), (g.return = _), g);
    }
    function d(_, g, E, M) {
      var K = E.type;
      return (
        K === V ? j(_, g, E.props.children, M, E.key)
        : (
          g !== null &&
          (g.elementType === K ||
            (typeof K == 'object' &&
              K !== null &&
              K.$$typeof === Ot &&
              $l(K) === g.type))
        ) ?
          ((g = n(g, E.props)), rn(g, E), (g.return = _), g)
        : ((g = hu(E.type, E.key, E.props, null, _.mode, M)),
          rn(g, E),
          (g.return = _),
          g)
      );
    }
    function T(_, g, E, M) {
      return (
          g === null ||
            g.tag !== 4 ||
            g.stateNode.containerInfo !== E.containerInfo ||
            g.stateNode.implementation !== E.implementation
        ) ?
          ((g = Pi(E, _.mode, M)), (g.return = _), g)
        : ((g = n(g, E.children || [])), (g.return = _), g);
    }
    function j(_, g, E, M, K) {
      return g === null || g.tag !== 7 ?
          ((g = Zl(E, _.mode, M, K)), (g.return = _), g)
        : ((g = n(g, E)), (g.return = _), g);
    }
    function C(_, g, E) {
      if (
        (typeof g == 'string' && g !== '') ||
        typeof g == 'number' ||
        typeof g == 'bigint'
      )
        return ((g = Ii('' + g, _.mode, E)), (g.return = _), g);
      if (typeof g == 'object' && g !== null) {
        switch (g.$$typeof) {
          case Z:
            return (
              (E = hu(g.type, g.key, g.props, null, _.mode, E)),
              rn(E, g),
              (E.return = _),
              E
            );
          case F:
            return ((g = Pi(g, _.mode, E)), (g.return = _), g);
          case Ot:
            return ((g = $l(g)), C(_, g, E));
        }
        if (Oe(g) || kt(g))
          return ((g = Zl(g, _.mode, E, null)), (g.return = _), g);
        if (typeof g.then == 'function') return C(_, Su(g), E);
        if (g.$$typeof === W) return C(_, vu(_, g), E);
        bu(_, g);
      }
      return null;
    }
    function z(_, g, E, M) {
      var K = g !== null ? g.key : null;
      if (
        (typeof E == 'string' && E !== '') ||
        typeof E == 'number' ||
        typeof E == 'bigint'
      )
        return K !== null ? null : s(_, g, '' + E, M);
      if (typeof E == 'object' && E !== null) {
        switch (E.$$typeof) {
          case Z:
            return E.key === K ? d(_, g, E, M) : null;
          case F:
            return E.key === K ? T(_, g, E, M) : null;
          case Ot:
            return ((E = $l(E)), z(_, g, E, M));
        }
        if (Oe(E) || kt(E)) return K !== null ? null : j(_, g, E, M, null);
        if (typeof E.then == 'function') return z(_, g, Su(E), M);
        if (E.$$typeof === W) return z(_, g, vu(_, E), M);
        bu(_, E);
      }
      return null;
    }
    function x(_, g, E, M, K) {
      if (
        (typeof M == 'string' && M !== '') ||
        typeof M == 'number' ||
        typeof M == 'bigint'
      )
        return ((_ = _.get(E) || null), s(g, _, '' + M, K));
      if (typeof M == 'object' && M !== null) {
        switch (M.$$typeof) {
          case Z:
            return (
              (_ = _.get(M.key === null ? E : M.key) || null),
              d(g, _, M, K)
            );
          case F:
            return (
              (_ = _.get(M.key === null ? E : M.key) || null),
              T(g, _, M, K)
            );
          case Ot:
            return ((M = $l(M)), x(_, g, E, M, K));
        }
        if (Oe(M) || kt(M))
          return ((_ = _.get(E) || null), j(g, _, M, K, null));
        if (typeof M.then == 'function') return x(_, g, E, Su(M), K);
        if (M.$$typeof === W) return x(_, g, E, vu(g, M), K);
        bu(g, M);
      }
      return null;
    }
    function Y(_, g, E, M) {
      for (
        var K = null, st = null, Q = g, lt = (g = 0), ct = null;
        Q !== null && lt < E.length;
        lt++
      ) {
        Q.index > lt ? ((ct = Q), (Q = null)) : (ct = Q.sibling);
        var ot = z(_, Q, E[lt], M);
        if (ot === null) {
          Q === null && (Q = ct);
          break;
        }
        (t && Q && ot.alternate === null && e(_, Q),
          (g = u(ot, g, lt)),
          st === null ? (K = ot) : (st.sibling = ot),
          (st = ot),
          (Q = ct));
      }
      if (lt === E.length) return (l(_, Q), ft && Ke(_, lt), K);
      if (Q === null) {
        for (; lt < E.length; lt++)
          ((Q = C(_, E[lt], M)),
            Q !== null &&
              ((g = u(Q, g, lt)),
              st === null ? (K = Q) : (st.sibling = Q),
              (st = Q)));
        return (ft && Ke(_, lt), K);
      }
      for (Q = a(Q); lt < E.length; lt++)
        ((ct = x(Q, _, lt, E[lt], M)),
          ct !== null &&
            (t &&
              ct.alternate !== null &&
              Q.delete(ct.key === null ? lt : ct.key),
            (g = u(ct, g, lt)),
            st === null ? (K = ct) : (st.sibling = ct),
            (st = ct)));
      return (
        t &&
          Q.forEach(function (Dl) {
            return e(_, Dl);
          }),
        ft && Ke(_, lt),
        K
      );
    }
    function $(_, g, E, M) {
      if (E == null) throw Error(f(151));
      for (
        var K = null, st = null, Q = g, lt = (g = 0), ct = null, ot = E.next();
        Q !== null && !ot.done;
        lt++, ot = E.next()
      ) {
        Q.index > lt ? ((ct = Q), (Q = null)) : (ct = Q.sibling);
        var Dl = z(_, Q, ot.value, M);
        if (Dl === null) {
          Q === null && (Q = ct);
          break;
        }
        (t && Q && Dl.alternate === null && e(_, Q),
          (g = u(Dl, g, lt)),
          st === null ? (K = Dl) : (st.sibling = Dl),
          (st = Dl),
          (Q = ct));
      }
      if (ot.done) return (l(_, Q), ft && Ke(_, lt), K);
      if (Q === null) {
        for (; !ot.done; lt++, ot = E.next())
          ((ot = C(_, ot.value, M)),
            ot !== null &&
              ((g = u(ot, g, lt)),
              st === null ? (K = ot) : (st.sibling = ot),
              (st = ot)));
        return (ft && Ke(_, lt), K);
      }
      for (Q = a(Q); !ot.done; lt++, ot = E.next())
        ((ot = x(Q, _, lt, ot.value, M)),
          ot !== null &&
            (t &&
              ot.alternate !== null &&
              Q.delete(ot.key === null ? lt : ot.key),
            (g = u(ot, g, lt)),
            st === null ? (K = ot) : (st.sibling = ot),
            (st = ot)));
      return (
        t &&
          Q.forEach(function (fv) {
            return e(_, fv);
          }),
        ft && Ke(_, lt),
        K
      );
    }
    function pt(_, g, E, M) {
      if (
        (typeof E == 'object' &&
          E !== null &&
          E.type === V &&
          E.key === null &&
          (E = E.props.children),
        typeof E == 'object' && E !== null)
      ) {
        switch (E.$$typeof) {
          case Z:
            t: {
              for (var K = E.key; g !== null; ) {
                if (g.key === K) {
                  if (((K = E.type), K === V)) {
                    if (g.tag === 7) {
                      (l(_, g.sibling),
                        (M = n(g, E.props.children)),
                        (M.return = _),
                        (_ = M));
                      break t;
                    }
                  } else if (
                    g.elementType === K ||
                    (typeof K == 'object' &&
                      K !== null &&
                      K.$$typeof === Ot &&
                      $l(K) === g.type)
                  ) {
                    (l(_, g.sibling),
                      (M = n(g, E.props)),
                      rn(M, E),
                      (M.return = _),
                      (_ = M));
                    break t;
                  }
                  l(_, g);
                  break;
                } else e(_, g);
                g = g.sibling;
              }
              E.type === V ?
                ((M = Zl(E.props.children, _.mode, M, E.key)),
                (M.return = _),
                (_ = M))
              : ((M = hu(E.type, E.key, E.props, null, _.mode, M)),
                rn(M, E),
                (M.return = _),
                (_ = M));
            }
            return i(_);
          case F:
            t: {
              for (K = E.key; g !== null; ) {
                if (g.key === K)
                  if (
                    g.tag === 4 &&
                    g.stateNode.containerInfo === E.containerInfo &&
                    g.stateNode.implementation === E.implementation
                  ) {
                    (l(_, g.sibling),
                      (M = n(g, E.children || [])),
                      (M.return = _),
                      (_ = M));
                    break t;
                  } else {
                    l(_, g);
                    break;
                  }
                else e(_, g);
                g = g.sibling;
              }
              ((M = Pi(E, _.mode, M)), (M.return = _), (_ = M));
            }
            return i(_);
          case Ot:
            return ((E = $l(E)), pt(_, g, E, M));
        }
        if (Oe(E)) return Y(_, g, E, M);
        if (kt(E)) {
          if (((K = kt(E)), typeof K != 'function')) throw Error(f(150));
          return ((E = K.call(E)), $(_, g, E, M));
        }
        if (typeof E.then == 'function') return pt(_, g, Su(E), M);
        if (E.$$typeof === W) return pt(_, g, vu(_, E), M);
        bu(_, E);
      }
      return (
          (typeof E == 'string' && E !== '') ||
            typeof E == 'number' ||
            typeof E == 'bigint'
        ) ?
          ((E = '' + E),
          g !== null && g.tag === 6 ?
            (l(_, g.sibling), (M = n(g, E)), (M.return = _), (_ = M))
          : (l(_, g), (M = Ii(E, _.mode, M)), (M.return = _), (_ = M)),
          i(_))
        : l(_, g);
    }
    return function (_, g, E, M) {
      try {
        on = 0;
        var K = pt(_, g, E, M);
        return ((za = null), K);
      } catch (Q) {
        if (Q === Ta || Q === pu) throw Q;
        var st = fe(29, Q, null, _.mode);
        return ((st.lanes = M), (st.return = _), st);
      }
    };
  }
  var kl = _o(!0),
    So = _o(!1),
    vl = !1;
  function rc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function dc(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function gl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function pl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (rt & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
        (a.pending = e),
        (e = du(t)),
        lo(t, null, l),
        e
      );
    }
    return (ru(t, a, e, l), du(t));
  }
  function dn(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
    ) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (l |= a), (e.lanes = l), os(t, l));
    }
  }
  function hc(t, e) {
    var l = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        u = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var i = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (u === null ? (n = u = i) : (u = u.next = i), (l = l.next));
        } while (l !== null);
        u === null ? (n = u = e) : (u = u.next = e);
      } else n = u = e;
      ((l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = l));
      return;
    }
    ((t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e));
  }
  var mc = !1;
  function hn() {
    if (mc) {
      var t = Ea;
      if (t !== null) throw t;
    }
  }
  function mn(t, e, l, a) {
    mc = !1;
    var n = t.updateQueue;
    vl = !1;
    var u = n.firstBaseUpdate,
      i = n.lastBaseUpdate,
      s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var d = s,
        T = d.next;
      ((d.next = null), i === null ? (u = T) : (i.next = T), (i = d));
      var j = t.alternate;
      j !== null &&
        ((j = j.updateQueue),
        (s = j.lastBaseUpdate),
        s !== i &&
          (s === null ? (j.firstBaseUpdate = T) : (s.next = T),
          (j.lastBaseUpdate = d)));
    }
    if (u !== null) {
      var C = n.baseState;
      ((i = 0), (j = T = d = null), (s = u));
      do {
        var z = s.lane & -536870913,
          x = z !== s.lane;
        if (x ? (it & z) === z : (a & z) === z) {
          (z !== 0 && z === ba && (mc = !0),
            j !== null &&
              (j = j.next =
                {
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var Y = t,
              $ = s;
            z = e;
            var pt = l;
            switch ($.tag) {
              case 1:
                if (((Y = $.payload), typeof Y == 'function')) {
                  C = Y.call(pt, C, z);
                  break t;
                }
                C = Y;
                break t;
              case 3:
                Y.flags = (Y.flags & -65537) | 128;
              case 0:
                if (
                  ((Y = $.payload),
                  (z = typeof Y == 'function' ? Y.call(pt, C, z) : Y),
                  z == null)
                )
                  break t;
                C = A({}, C, z);
                break t;
              case 2:
                vl = !0;
            }
          }
          ((z = s.callback),
            z !== null &&
              ((t.flags |= 64),
              x && (t.flags |= 8192),
              (x = n.callbacks),
              x === null ? (n.callbacks = [z]) : x.push(z)));
        } else
          ((x = {
            lane: z,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            j === null ? ((T = j = x), (d = C)) : (j = j.next = x),
            (i |= z));
        if (((s = s.next), s === null)) {
          if (((s = n.shared.pending), s === null)) break;
          ((x = s),
            (s = x.next),
            (x.next = null),
            (n.lastBaseUpdate = x),
            (n.shared.pending = null));
        }
      } while (!0);
      (j === null && (d = C),
        (n.baseState = d),
        (n.firstBaseUpdate = T),
        (n.lastBaseUpdate = j),
        u === null && (n.shared.lanes = 0),
        (Tl |= i),
        (t.lanes = i),
        (t.memoizedState = C));
    }
  }
  function bo(t, e) {
    if (typeof t != 'function') throw Error(f(191, t));
    t.call(e);
  }
  function Eo(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) bo(l[t], e);
  }
  var xa = p(null),
    Eu = p(0);
  function To(t, e) {
    ((t = ll), B(Eu, t), B(xa, e), (ll = t | e.baseLanes));
  }
  function yc() {
    (B(Eu, ll), B(xa, xa.current));
  }
  function vc() {
    ((ll = Eu.current), U(xa), U(Eu));
  }
  var se = p(null),
    xe = null;
  function _l(t) {
    var e = t.alternate;
    (B(Ct, Ct.current & 1),
      B(se, t),
      xe === null &&
        (e === null || xa.current !== null || e.memoizedState !== null) &&
        (xe = t));
  }
  function gc(t) {
    (B(Ct, Ct.current), B(se, t), xe === null && (xe = t));
  }
  function zo(t) {
    t.tag === 22 ?
      (B(Ct, Ct.current), B(se, t), xe === null && (xe = t))
    : Sl();
  }
  function Sl() {
    (B(Ct, Ct.current), B(se, se.current));
  }
  function oe(t) {
    (U(se), xe === t && (xe = null), U(Ct));
  }
  var Ct = p(0);
  function Tu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || zf(l) || xf(l)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === 'forwards' ||
          e.memoizedProps.revealOrder === 'backwards' ||
          e.memoizedProps.revealOrder === 'unstable_legacy-backwards' ||
          e.memoizedProps.revealOrder === 'together')
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var $e = 0,
    et = null,
    vt = null,
    Ht = null,
    zu = !1,
    Aa = !1,
    Fl = !1,
    xu = 0,
    yn = 0,
    Na = null,
    Im = 0;
  function jt() {
    throw Error(f(321));
  }
  function pc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!ce(t[l], e[l])) return !1;
    return !0;
  }
  function _c(t, e, l, a, n, u) {
    return (
      ($e = u),
      (et = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (O.H = t === null || t.memoizedState === null ? cr : Uc),
      (Fl = !1),
      (u = l(a, n)),
      (Fl = !1),
      Aa && (u = Ao(e, l, a, n)),
      xo(t),
      u
    );
  }
  function xo(t) {
    O.H = pn;
    var e = vt !== null && vt.next !== null;
    if ((($e = 0), (Ht = vt = et = null), (zu = !1), (yn = 0), (Na = null), e))
      throw Error(f(300));
    t === null ||
      Bt ||
      ((t = t.dependencies), t !== null && yu(t) && (Bt = !0));
  }
  function Ao(t, e, l, a) {
    et = t;
    var n = 0;
    do {
      if ((Aa && (Na = null), (yn = 0), (Aa = !1), 25 <= n))
        throw Error(f(301));
      if (((n += 1), (Ht = vt = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((O.H = fr), (u = e(l, a)));
    } while (Aa);
    return u;
  }
  function Pm() {
    var t = O.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == 'function' ? vn(e) : e),
      (t = t.useState()[0]),
      (vt !== null ? vt.memoizedState : null) !== t && (et.flags |= 1024),
      e
    );
  }
  function Sc() {
    var t = xu !== 0;
    return ((xu = 0), t);
  }
  function bc(t, e, l) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l));
  }
  function Ec(t) {
    if (zu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      zu = !1;
    }
    (($e = 0), (Ht = vt = et = null), (Aa = !1), (yn = xu = 0), (Na = null));
  }
  function Wt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ht === null ? (et.memoizedState = Ht = t) : (Ht = Ht.next = t), Ht);
  }
  function Dt() {
    if (vt === null) {
      var t = et.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = vt.next;
    var e = Ht === null ? et.memoizedState : Ht.next;
    if (e !== null) ((Ht = e), (vt = t));
    else {
      if (t === null)
        throw et.alternate === null ? Error(f(467)) : Error(f(310));
      ((vt = t),
        (t = {
          memoizedState: vt.memoizedState,
          baseState: vt.baseState,
          baseQueue: vt.baseQueue,
          queue: vt.queue,
          next: null,
        }),
        Ht === null ? (et.memoizedState = Ht = t) : (Ht = Ht.next = t));
    }
    return Ht;
  }
  function Au() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function vn(t) {
    var e = yn;
    return (
      (yn += 1),
      Na === null && (Na = []),
      (t = vo(Na, t, e)),
      (e = et),
      (Ht === null ? e.memoizedState : Ht.next) === null &&
        ((e = e.alternate),
        (O.H = e === null || e.memoizedState === null ? cr : Uc)),
      t
    );
  }
  function Nu(t) {
    if (t !== null && typeof t == 'object') {
      if (typeof t.then == 'function') return vn(t);
      if (t.$$typeof === W) return Vt(t);
    }
    throw Error(f(438, String(t)));
  }
  function Tc(t) {
    var e = null,
      l = et.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var a = et.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = Au()), (et.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = ge;
    return (e.index++, l);
  }
  function We(t, e) {
    return typeof e == 'function' ? e(t) : e;
  }
  function ju(t) {
    var e = Dt();
    return zc(e, vt, t);
  }
  function zc(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        ((n.next = u.next), (u.next = i));
      }
      ((e.baseQueue = n = u), (a.pending = null));
    }
    if (((u = t.baseState), n === null)) t.memoizedState = u;
    else {
      e = n.next;
      var s = (i = null),
        d = null,
        T = e,
        j = !1;
      do {
        var C = T.lane & -536870913;
        if (C !== T.lane ? (it & C) === C : ($e & C) === C) {
          var z = T.revertLane;
          if (z === 0)
            (d !== null &&
              (d = d.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: T.action,
                  hasEagerState: T.hasEagerState,
                  eagerState: T.eagerState,
                  next: null,
                }),
              C === ba && (j = !0));
          else if (($e & z) === z) {
            ((T = T.next), z === ba && (j = !0));
            continue;
          } else
            ((C = {
              lane: 0,
              revertLane: T.revertLane,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null,
            }),
              d === null ? ((s = d = C), (i = u)) : (d = d.next = C),
              (et.lanes |= z),
              (Tl |= z));
          ((C = T.action),
            Fl && l(u, C),
            (u = T.hasEagerState ? T.eagerState : l(u, C)));
        } else
          ((z = {
            lane: C,
            revertLane: T.revertLane,
            gesture: T.gesture,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null,
          }),
            d === null ? ((s = d = z), (i = u)) : (d = d.next = z),
            (et.lanes |= C),
            (Tl |= C));
        T = T.next;
      } while (T !== null && T !== e);
      if (
        (d === null ? (i = u) : (d.next = s),
        !ce(u, t.memoizedState) && ((Bt = !0), j && ((l = Ea), l !== null)))
      )
        throw l;
      ((t.memoizedState = u),
        (t.baseState = i),
        (t.baseQueue = d),
        (a.lastRenderedState = u));
    }
    return (n === null && (a.lanes = 0), [t.memoizedState, a.dispatch]);
  }
  function xc(t) {
    var e = Dt(),
      l = e.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch,
      n = l.pending,
      u = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var i = (n = n.next);
      do ((u = t(u, i.action)), (i = i.next));
      while (i !== n);
      (ce(u, e.memoizedState) || (Bt = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (l.lastRenderedState = u));
    }
    return [u, a];
  }
  function No(t, e, l) {
    var a = et,
      n = Dt(),
      u = ft;
    if (u) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = e();
    var i = !ce((vt || n).memoizedState, l);
    if (
      (i && ((n.memoizedState = l), (Bt = !0)),
      (n = n.queue),
      jc(Oo.bind(null, a, n, t), [t]),
      n.getSnapshot !== e || i || (Ht !== null && Ht.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ja(9, { destroy: void 0 }, Ro.bind(null, a, n, l, e), null),
        St === null)
      )
        throw Error(f(349));
      u || ($e & 127) !== 0 || jo(a, e, l);
    }
    return l;
  }
  function jo(t, e, l) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = et.updateQueue),
      e === null ?
        ((e = Au()), (et.updateQueue = e), (e.stores = [t]))
      : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t)));
  }
  function Ro(t, e, l, a) {
    ((e.value = l), (e.getSnapshot = a), Mo(e) && Co(t));
  }
  function Oo(t, e, l) {
    return l(function () {
      Mo(e) && Co(t);
    });
  }
  function Mo(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ce(t, l);
    } catch {
      return !0;
    }
  }
  function Co(t) {
    var e = Ql(t, 2);
    e !== null && ae(e, t, 2);
  }
  function Ac(t) {
    var e = Wt();
    if (typeof t == 'function') {
      var l = t;
      if (((t = l()), Fl)) {
        sl(!0);
        try {
          l();
        } finally {
          sl(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: We,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Do(t, e, l, a) {
    return ((t.baseState = l), zc(t, vt, typeof a == 'function' ? a : We));
  }
  function ty(t, e, l, a, n) {
    if (Mu(t)) throw Error(f(485));
    if (((t = e.action), t !== null)) {
      var u = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          u.listeners.push(i);
        },
      };
      (O.T !== null ? l(!0) : (u.isTransition = !1),
        a(u),
        (l = e.pending),
        l === null ?
          ((u.next = e.pending = u), Uo(e, u))
        : ((u.next = l.next), (e.pending = l.next = u)));
    }
  }
  function Uo(t, e) {
    var l = e.action,
      a = e.payload,
      n = t.state;
    if (e.isTransition) {
      var u = O.T,
        i = {};
      O.T = i;
      try {
        var s = l(n, a),
          d = O.S;
        (d !== null && d(i, s), Ho(t, e, s));
      } catch (T) {
        Nc(t, e, T);
      } finally {
        (u !== null && i.types !== null && (u.types = i.types), (O.T = u));
      }
    } else
      try {
        ((u = l(n, a)), Ho(t, e, u));
      } catch (T) {
        Nc(t, e, T);
      }
  }
  function Ho(t, e, l) {
    l !== null && typeof l == 'object' && typeof l.then == 'function' ?
      l.then(
        function (a) {
          Bo(t, e, a);
        },
        function (a) {
          return Nc(t, e, a);
        },
      )
    : Bo(t, e, l);
  }
  function Bo(t, e, l) {
    ((e.status = 'fulfilled'),
      (e.value = l),
      qo(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), Uo(t, l))));
  }
  function Nc(t, e, l) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do ((e.status = 'rejected'), (e.reason = l), qo(e), (e = e.next));
      while (e !== a);
    }
    t.action = null;
  }
  function qo(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Yo(t, e) {
    return e;
  }
  function Lo(t, e) {
    if (ft) {
      var l = St.formState;
      if (l !== null) {
        t: {
          var a = et;
          if (ft) {
            if (Tt) {
              e: {
                for (var n = Tt, u = ze; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break e;
                  }
                  if (((n = Ae(n.nextSibling)), n === null)) {
                    n = null;
                    break e;
                  }
                }
                ((u = n.data), (n = u === 'F!' || u === 'F' ? n : null));
              }
              if (n) {
                ((Tt = Ae(n.nextSibling)), (a = n.data === 'F!'));
                break t;
              }
            }
            ml(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return (
      (l = Wt()),
      (l.memoizedState = l.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yo,
        lastRenderedState: e,
      }),
      (l.queue = a),
      (l = nr.bind(null, et, a)),
      (a.dispatch = l),
      (a = Ac(!1)),
      (u = Dc.bind(null, et, !1, a.queue)),
      (a = Wt()),
      (n = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = n),
      (l = ty.bind(null, et, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = t),
      [e, l, !1]
    );
  }
  function Go(t) {
    var e = Dt();
    return Xo(e, vt, t);
  }
  function Xo(t, e, l) {
    if (
      ((e = zc(t, e, Yo)[0]),
      (t = ju(We)[0]),
      typeof e == 'object' && e !== null && typeof e.then == 'function')
    )
      try {
        var a = vn(e);
      } catch (i) {
        throw i === Ta ? pu : i;
      }
    else a = e;
    e = Dt();
    var n = e.queue,
      u = n.dispatch;
    return (
      l !== e.memoizedState &&
        ((et.flags |= 2048),
        ja(9, { destroy: void 0 }, ey.bind(null, n, l), null)),
      [a, u, t]
    );
  }
  function ey(t, e) {
    t.action = e;
  }
  function Qo(t) {
    var e = Dt(),
      l = vt;
    if (l !== null) return Xo(e, l, t);
    (Dt(), (e = e.memoizedState), (l = Dt()));
    var a = l.queue.dispatch;
    return ((l.memoizedState = t), [e, a, !1]);
  }
  function ja(t, e, l, a) {
    return (
      (t = { tag: t, create: l, deps: a, inst: e, next: null }),
      (e = et.updateQueue),
      e === null && ((e = Au()), (et.updateQueue = e)),
      (l = e.lastEffect),
      l === null ?
        (e.lastEffect = t.next = t)
      : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function Zo() {
    return Dt().memoizedState;
  }
  function Ru(t, e, l, a) {
    var n = Wt();
    ((et.flags |= t),
      (n.memoizedState = ja(
        1 | e,
        { destroy: void 0 },
        l,
        a === void 0 ? null : a,
      )));
  }
  function Ou(t, e, l, a) {
    var n = Dt();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    vt !== null && a !== null && pc(a, vt.memoizedState.deps) ?
      (n.memoizedState = ja(e, u, l, a))
    : ((et.flags |= t), (n.memoizedState = ja(1 | e, u, l, a)));
  }
  function Vo(t, e) {
    Ru(8390656, 8, t, e);
  }
  function jc(t, e) {
    Ou(2048, 8, t, e);
  }
  function ly(t) {
    et.flags |= 4;
    var e = et.updateQueue;
    if (e === null) ((e = Au()), (et.updateQueue = e), (e.events = [t]));
    else {
      var l = e.events;
      l === null ? (e.events = [t]) : l.push(t);
    }
  }
  function Ko(t) {
    var e = Dt().memoizedState;
    return (
      ly({ ref: e, nextImpl: t }),
      function () {
        if ((rt & 2) !== 0) throw Error(f(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function wo(t, e) {
    return Ou(4, 2, t, e);
  }
  function Jo(t, e) {
    return Ou(4, 4, t, e);
  }
  function $o(t, e) {
    if (typeof e == 'function') {
      t = t();
      var l = e(t);
      return function () {
        typeof l == 'function' ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Wo(t, e, l) {
    ((l = l != null ? l.concat([t]) : null), Ou(4, 4, $o.bind(null, e, t), l));
  }
  function Rc() {}
  function ko(t, e) {
    var l = Dt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && pc(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
  }
  function Fo(t, e) {
    var l = Dt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && pc(e, a[1])) return a[0];
    if (((a = t()), Fl)) {
      sl(!0);
      try {
        t();
      } finally {
        sl(!1);
      }
    }
    return ((l.memoizedState = [a, e]), a);
  }
  function Oc(t, e, l) {
    return l === void 0 || (($e & 1073741824) !== 0 && (it & 261930) === 0) ?
        (t.memoizedState = e)
      : ((t.memoizedState = l), (t = Ir()), (et.lanes |= t), (Tl |= t), l);
  }
  function Io(t, e, l, a) {
    return (
      ce(l, e) ? l
      : xa.current !== null ? ((t = Oc(t, l, a)), ce(t, e) || (Bt = !0), t)
      : ($e & 42) === 0 || (($e & 1073741824) !== 0 && (it & 261930) === 0) ?
        ((Bt = !0), (t.memoizedState = l))
      : ((t = Ir()), (et.lanes |= t), (Tl |= t), e)
    );
  }
  function Po(t, e, l, a, n) {
    var u = H.p;
    H.p = u !== 0 && 8 > u ? u : 8;
    var i = O.T,
      s = {};
    ((O.T = s), Dc(t, !1, e, l));
    try {
      var d = n(),
        T = O.S;
      if (
        (T !== null && T(s, d),
        d !== null && typeof d == 'object' && typeof d.then == 'function')
      ) {
        var j = Fm(d, a);
        gn(t, e, j, he(t));
      } else gn(t, e, a, he(t));
    } catch (C) {
      gn(t, e, { then: function () {}, status: 'rejected', reason: C }, he());
    } finally {
      ((H.p = u),
        i !== null && s.types !== null && (i.types = s.types),
        (O.T = i));
    }
  }
  function ay() {}
  function Mc(t, e, l, a) {
    if (t.tag !== 5) throw Error(f(476));
    var n = tr(t).queue;
    Po(
      t,
      n,
      e,
      k,
      l === null ? ay : (
        function () {
          return (er(t), l(a));
        }
      ),
    );
  }
  function tr(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: k,
      baseState: k,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: We,
        lastRenderedState: k,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: We,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function er(t) {
    var e = tr(t);
    (e.next === null && (e = t.alternate.memoizedState),
      gn(t, e.next.queue, {}, he()));
  }
  function Cc() {
    return Vt(Un);
  }
  function lr() {
    return Dt().memoizedState;
  }
  function ar() {
    return Dt().memoizedState;
  }
  function ny(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = he();
          t = gl(l);
          var a = pl(e, t, l);
          (a !== null && (ae(a, e, l), dn(a, e, l)),
            (e = { cache: cc() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function uy(t, e, l) {
    var a = he();
    ((l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Mu(t) ?
        ur(e, l)
      : ((l = ki(t, e, l, a)), l !== null && (ae(l, t, a), ir(l, e, a))));
  }
  function nr(t, e, l) {
    var a = he();
    gn(t, e, l, a);
  }
  function gn(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Mu(t)) ur(e, n);
    else {
      var u = t.alternate;
      if (
        t.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = e.lastRenderedReducer), u !== null)
      )
        try {
          var i = e.lastRenderedState,
            s = u(i, l);
          if (((n.hasEagerState = !0), (n.eagerState = s), ce(s, i)))
            return (ru(t, e, n, 0), St === null && ou(), !1);
        } catch {}
      if (((l = ki(t, e, n, a)), l !== null))
        return (ae(l, t, a), ir(l, e, a), !0);
    }
    return !1;
  }
  function Dc(t, e, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: df(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Mu(t))
    ) {
      if (e) throw Error(f(479));
    } else ((e = ki(t, l, a, 2)), e !== null && ae(e, t, 2));
  }
  function Mu(t) {
    var e = t.alternate;
    return t === et || (e !== null && e === et);
  }
  function ur(t, e) {
    Aa = zu = !0;
    var l = t.pending;
    (l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e));
  }
  function ir(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (l |= a), (e.lanes = l), os(t, l));
    }
  }
  var pn = {
    readContext: Vt,
    use: Nu,
    useCallback: jt,
    useContext: jt,
    useEffect: jt,
    useImperativeHandle: jt,
    useLayoutEffect: jt,
    useInsertionEffect: jt,
    useMemo: jt,
    useReducer: jt,
    useRef: jt,
    useState: jt,
    useDebugValue: jt,
    useDeferredValue: jt,
    useTransition: jt,
    useSyncExternalStore: jt,
    useId: jt,
    useHostTransitionStatus: jt,
    useFormState: jt,
    useActionState: jt,
    useOptimistic: jt,
    useMemoCache: jt,
    useCacheRefresh: jt,
  };
  pn.useEffectEvent = jt;
  var cr = {
      readContext: Vt,
      use: Nu,
      useCallback: function (t, e) {
        return ((Wt().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: Vt,
      useEffect: Vo,
      useImperativeHandle: function (t, e, l) {
        ((l = l != null ? l.concat([t]) : null),
          Ru(4194308, 4, $o.bind(null, e, t), l));
      },
      useLayoutEffect: function (t, e) {
        return Ru(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        Ru(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = Wt();
        e = e === void 0 ? null : e;
        var a = t();
        if (Fl) {
          sl(!0);
          try {
            t();
          } finally {
            sl(!1);
          }
        }
        return ((l.memoizedState = [a, e]), a);
      },
      useReducer: function (t, e, l) {
        var a = Wt();
        if (l !== void 0) {
          var n = l(e);
          if (Fl) {
            sl(!0);
            try {
              l(e);
            } finally {
              sl(!1);
            }
          }
        } else n = e;
        return (
          (a.memoizedState = a.baseState = n),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: n,
          }),
          (a.queue = t),
          (t = t.dispatch = uy.bind(null, et, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Wt();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = Ac(t);
        var e = t.queue,
          l = nr.bind(null, et, e);
        return ((e.dispatch = l), [t.memoizedState, l]);
      },
      useDebugValue: Rc,
      useDeferredValue: function (t, e) {
        var l = Wt();
        return Oc(l, t, e);
      },
      useTransition: function () {
        var t = Ac(!1);
        return (
          (t = Po.bind(null, et, t.queue, !0, !1)),
          (Wt().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, l) {
        var a = et,
          n = Wt();
        if (ft) {
          if (l === void 0) throw Error(f(407));
          l = l();
        } else {
          if (((l = e()), St === null)) throw Error(f(349));
          (it & 127) !== 0 || jo(a, e, l);
        }
        n.memoizedState = l;
        var u = { value: l, getSnapshot: e };
        return (
          (n.queue = u),
          Vo(Oo.bind(null, a, u, t), [t]),
          (a.flags |= 2048),
          ja(9, { destroy: void 0 }, Ro.bind(null, a, u, l, e), null),
          l
        );
      },
      useId: function () {
        var t = Wt(),
          e = St.identifierPrefix;
        if (ft) {
          var l = qe,
            a = Be;
          ((l = (a & ~(1 << (32 - ie(a) - 1))).toString(32) + l),
            (e = '_' + e + 'R_' + l),
            (l = xu++),
            0 < l && (e += 'H' + l.toString(32)),
            (e += '_'));
        } else ((l = Im++), (e = '_' + e + 'r_' + l.toString(32) + '_'));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Cc,
      useFormState: Lo,
      useActionState: Lo,
      useOptimistic: function (t) {
        var e = Wt();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = l),
          (e = Dc.bind(null, et, !0, l)),
          (l.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: Tc,
      useCacheRefresh: function () {
        return (Wt().memoizedState = ny.bind(null, et));
      },
      useEffectEvent: function (t) {
        var e = Wt(),
          l = { impl: t };
        return (
          (e.memoizedState = l),
          function () {
            if ((rt & 2) !== 0) throw Error(f(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Uc = {
      readContext: Vt,
      use: Nu,
      useCallback: ko,
      useContext: Vt,
      useEffect: jc,
      useImperativeHandle: Wo,
      useInsertionEffect: wo,
      useLayoutEffect: Jo,
      useMemo: Fo,
      useReducer: ju,
      useRef: Zo,
      useState: function () {
        return ju(We);
      },
      useDebugValue: Rc,
      useDeferredValue: function (t, e) {
        var l = Dt();
        return Io(l, vt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = ju(We)[0],
          e = Dt().memoizedState;
        return [typeof t == 'boolean' ? t : vn(t), e];
      },
      useSyncExternalStore: No,
      useId: lr,
      useHostTransitionStatus: Cc,
      useFormState: Go,
      useActionState: Go,
      useOptimistic: function (t, e) {
        var l = Dt();
        return Do(l, vt, t, e);
      },
      useMemoCache: Tc,
      useCacheRefresh: ar,
    };
  Uc.useEffectEvent = Ko;
  var fr = {
    readContext: Vt,
    use: Nu,
    useCallback: ko,
    useContext: Vt,
    useEffect: jc,
    useImperativeHandle: Wo,
    useInsertionEffect: wo,
    useLayoutEffect: Jo,
    useMemo: Fo,
    useReducer: xc,
    useRef: Zo,
    useState: function () {
      return xc(We);
    },
    useDebugValue: Rc,
    useDeferredValue: function (t, e) {
      var l = Dt();
      return vt === null ? Oc(l, t, e) : Io(l, vt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = xc(We)[0],
        e = Dt().memoizedState;
      return [typeof t == 'boolean' ? t : vn(t), e];
    },
    useSyncExternalStore: No,
    useId: lr,
    useHostTransitionStatus: Cc,
    useFormState: Qo,
    useActionState: Qo,
    useOptimistic: function (t, e) {
      var l = Dt();
      return vt !== null ?
          Do(l, vt, t, e)
        : ((l.baseState = t), [t, l.queue.dispatch]);
    },
    useMemoCache: Tc,
    useCacheRefresh: ar,
  };
  fr.useEffectEvent = Ko;
  function Hc(t, e, l, a) {
    ((e = t.memoizedState),
      (l = l(a, e)),
      (l = l == null ? e : A({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l));
  }
  var Bc = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var a = he(),
        n = gl(a);
      ((n.payload = e),
        l != null && (n.callback = l),
        (e = pl(t, n, a)),
        e !== null && (ae(e, t, a), dn(e, t, a)));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var a = he(),
        n = gl(a);
      ((n.tag = 1),
        (n.payload = e),
        l != null && (n.callback = l),
        (e = pl(t, n, a)),
        e !== null && (ae(e, t, a), dn(e, t, a)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = he(),
        a = gl(l);
      ((a.tag = 2),
        e != null && (a.callback = e),
        (e = pl(t, a, l)),
        e !== null && (ae(e, t, l), dn(e, t, l)));
    },
  };
  function sr(t, e, l, a, n, u, i) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == 'function' ?
        t.shouldComponentUpdate(a, u, i)
      : e.prototype && e.prototype.isPureReactComponent ? !an(l, a) || !an(n, u)
      : !0
    );
  }
  function or(t, e, l, a) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == 'function' &&
        e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
        e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && Bc.enqueueReplaceState(e, e.state, null));
  }
  function Il(t, e) {
    var l = e;
    if ('ref' in e) {
      l = {};
      for (var a in e) a !== 'ref' && (l[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = A({}, l));
      for (var n in t) l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  function rr(t) {
    su(t);
  }
  function dr(t) {
    console.error(t);
  }
  function hr(t) {
    su(t);
  }
  function Cu(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function mr(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function qc(t, e, l) {
    return (
      (l = gl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Cu(t, e);
      }),
      l
    );
  }
  function yr(t) {
    return ((t = gl(t)), (t.tag = 3), t);
  }
  function vr(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == 'function') {
      var u = a.value;
      ((t.payload = function () {
        return n(u);
      }),
        (t.callback = function () {
          mr(e, l, a);
        }));
    }
    var i = l.stateNode;
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (t.callback = function () {
        (mr(e, l, a),
          typeof n != 'function' &&
            (zl === null ? (zl = new Set([this])) : zl.add(this)));
        var s = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: s !== null ? s : '',
        });
      });
  }
  function iy(t, e, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == 'object' && typeof a.then == 'function')
    ) {
      if (
        ((e = l.alternate),
        e !== null && Sa(e, l, n, !0),
        (l = se.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              xe === null ? Vu() : l.alternate === null && Rt === 0 && (Rt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === _u ?
                (l.flags |= 16384)
              : ((e = l.updateQueue),
                e === null ? (l.updateQueue = new Set([a])) : e.add(a),
                sf(t, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === _u ?
                (l.flags |= 16384)
              : ((e = l.updateQueue),
                e === null ?
                  ((e = {
                    transitions: null,
                    markerInstances: null,
                    retryQueue: new Set([a]),
                  }),
                  (l.updateQueue = e))
                : ((l = e.retryQueue),
                  l === null ? (e.retryQueue = new Set([a])) : l.add(a)),
                sf(t, a, n)),
              !1
            );
        }
        throw Error(f(435, l.tag));
      }
      return (sf(t, a, n), Vu(), !1);
    }
    if (ft)
      return (
        (e = se.current),
        e !== null ?
          ((e.flags & 65536) === 0 && (e.flags |= 256),
          (e.flags |= 65536),
          (e.lanes = n),
          a !== lc && ((t = Error(f(422), { cause: a })), cn(be(t, l))))
        : (a !== lc && ((e = Error(f(423), { cause: a })), cn(be(e, l))),
          (t = t.current.alternate),
          (t.flags |= 65536),
          (n &= -n),
          (t.lanes |= n),
          (a = be(a, l)),
          (n = qc(t.stateNode, a, n)),
          hc(t, n),
          Rt !== 4 && (Rt = 2)),
        !1
      );
    var u = Error(f(520), { cause: a });
    if (
      ((u = be(u, l)),
      An === null ? (An = [u]) : An.push(u),
      Rt !== 4 && (Rt = 2),
      e === null)
    )
      return !0;
    ((a = be(a, l)), (l = e));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = n & -n),
            (l.lanes |= t),
            (t = qc(l.stateNode, a, t)),
            hc(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (u = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == 'function' ||
                (u !== null &&
                  typeof u.componentDidCatch == 'function' &&
                  (zl === null || !zl.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = yr(n)),
              vr(n, t, l, a),
              hc(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Yc = Error(f(461)),
    Bt = !1;
  function Kt(t, e, l, a) {
    e.child = t === null ? So(e, null, l, a) : kl(e, t.child, l, a);
  }
  function gr(t, e, l, a, n) {
    l = l.render;
    var u = e.ref;
    if ('ref' in a) {
      var i = {};
      for (var s in a) s !== 'ref' && (i[s] = a[s]);
    } else i = a;
    return (
      wl(e),
      (a = _c(t, e, l, i, u, n)),
      (s = Sc()),
      t !== null && !Bt ?
        (bc(t, e, n), ke(t, e, n))
      : (ft && s && tc(e), (e.flags |= 1), Kt(t, e, a, n), e.child)
    );
  }
  function pr(t, e, l, a, n) {
    if (t === null) {
      var u = l.type;
      return (
          typeof u == 'function' &&
            !Fi(u) &&
            u.defaultProps === void 0 &&
            l.compare === null
        ) ?
          ((e.tag = 15), (e.type = u), _r(t, e, u, a, n))
        : ((t = hu(l.type, null, a, e, e.mode, n)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((u = t.child), !wc(t, n))) {
      var i = u.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : an), l(i, a) && t.ref === e.ref)
      )
        return ke(t, e, n);
    }
    return (
      (e.flags |= 1),
      (t = Ve(u, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function _r(t, e, l, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (an(u, a) && t.ref === e.ref)
        if (((Bt = !1), (e.pendingProps = a = u), wc(t, n)))
          (t.flags & 131072) !== 0 && (Bt = !0);
        else return ((e.lanes = t.lanes), ke(t, e, n));
    }
    return Lc(t, e, l, a, n);
  }
  function Sr(t, e, l, a) {
    var n = a.children,
      u = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === 'hidden')
    ) {
      if ((e.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | l : l), t !== null)) {
          for (a = e.child = t.child, n = 0; a !== null; )
            ((n = n | a.lanes | a.childLanes), (a = a.sibling));
          a = n & ~u;
        } else ((a = 0), (e.child = null));
        return br(t, e, u, l, a);
      }
      if ((l & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && gu(e, u !== null ? u.cachePool : null),
          u !== null ? To(e, u) : yc(),
          zo(e));
      else
        return (
          (a = e.lanes = 536870912),
          br(t, e, u !== null ? u.baseLanes | l : l, l, a)
        );
    } else
      u !== null ?
        (gu(e, u.cachePool), To(e, u), Sl(), (e.memoizedState = null))
      : (t !== null && gu(e, null), yc(), Sl());
    return (Kt(t, e, n, l), e.child);
  }
  function _n(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function br(t, e, l, a, n) {
    var u = sc();
    return (
      (u = u === null ? null : { parent: Ut._currentValue, pool: u }),
      (e.memoizedState = { baseLanes: l, cachePool: u }),
      t !== null && gu(e, null),
      yc(),
      zo(e),
      t !== null && Sa(t, e, a, !0),
      (e.childLanes = n),
      null
    );
  }
  function Du(t, e) {
    return (
      (e = Hu({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Er(t, e, l) {
    return (
      kl(e, t.child, null, l),
      (t = Du(e, e.pendingProps)),
      (t.flags |= 2),
      oe(e),
      (e.memoizedState = null),
      t
    );
  }
  function cy(t, e, l) {
    var a = e.pendingProps,
      n = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (ft) {
        if (a.mode === 'hidden')
          return ((t = Du(e, a)), (e.lanes = 536870912), _n(null, t));
        if (
          (gc(e),
          (t = Tt) ?
            ((t = Ud(t, ze)),
            (t = t !== null && t.data === '&' ? t : null),
            t !== null &&
              ((e.memoizedState = {
                dehydrated: t,
                treeContext: dl !== null ? { id: Be, overflow: qe } : null,
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (l = no(t)),
              (l.return = e),
              (e.child = l),
              (Zt = e),
              (Tt = null)))
          : (t = null),
          t === null)
        )
          throw ml(e);
        return ((e.lanes = 536870912), null);
      }
      return Du(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if ((gc(e), n))
        if (e.flags & 256) ((e.flags &= -257), (e = Er(t, e, l)));
        else if (e.memoizedState !== null)
          ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(f(558));
      else if (
        (Bt || Sa(t, e, l, !1), (n = (l & t.childLanes) !== 0), Bt || n)
      ) {
        if (
          ((a = St),
          a !== null && ((i = rs(a, l)), i !== 0 && i !== u.retryLane))
        )
          throw ((u.retryLane = i), Ql(t, i), ae(a, t, i), Yc);
        (Vu(), (e = Er(t, e, l)));
      } else
        ((t = u.treeContext),
          (Tt = Ae(i.nextSibling)),
          (Zt = e),
          (ft = !0),
          (hl = null),
          (ze = !1),
          t !== null && co(e, t),
          (e = Du(e, a)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = Ve(t.child, { mode: a.mode, children: a.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Uu(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != 'function' && typeof l != 'object') throw Error(f(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Lc(t, e, l, a, n) {
    return (
      wl(e),
      (l = _c(t, e, l, a, void 0, n)),
      (a = Sc()),
      t !== null && !Bt ?
        (bc(t, e, n), ke(t, e, n))
      : (ft && a && tc(e), (e.flags |= 1), Kt(t, e, l, n), e.child)
    );
  }
  function Tr(t, e, l, a, n, u) {
    return (
      wl(e),
      (e.updateQueue = null),
      (l = Ao(e, a, l, n)),
      xo(t),
      (a = Sc()),
      t !== null && !Bt ?
        (bc(t, e, u), ke(t, e, u))
      : (ft && a && tc(e), (e.flags |= 1), Kt(t, e, l, u), e.child)
    );
  }
  function zr(t, e, l, a, n) {
    if ((wl(e), e.stateNode === null)) {
      var u = va,
        i = l.contextType;
      (typeof i == 'object' && i !== null && (u = Vt(i)),
        (u = new l(a, u)),
        (e.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Bc),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = a),
        (u.state = e.memoizedState),
        (u.refs = {}),
        rc(e),
        (i = l.contextType),
        (u.context = typeof i == 'object' && i !== null ? Vt(i) : va),
        (u.state = e.memoizedState),
        (i = l.getDerivedStateFromProps),
        typeof i == 'function' && (Hc(e, l, i, a), (u.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((i = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' &&
            u.UNSAFE_componentWillMount(),
          i !== u.state && Bc.enqueueReplaceState(u, u.state, null),
          mn(e, a, u, n),
          hn(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == 'function' && (e.flags |= 4194308),
        (a = !0));
    } else if (t === null) {
      u = e.stateNode;
      var s = e.memoizedProps,
        d = Il(l, s);
      u.props = d;
      var T = u.context,
        j = l.contextType;
      ((i = va), typeof j == 'object' && j !== null && (i = Vt(j)));
      var C = l.getDerivedStateFromProps;
      ((j =
        typeof C == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function'),
        (s = e.pendingProps !== s),
        j ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((s || T !== i) && or(e, u, a, i)),
        (vl = !1));
      var z = e.memoizedState;
      ((u.state = z),
        mn(e, a, u, n),
        hn(),
        (T = e.memoizedState),
        s || z !== T || vl ?
          (typeof C == 'function' && (Hc(e, l, C, a), (T = e.memoizedState)),
          (d = vl || sr(e, l, d, a, z, T, i)) ?
            (j ||
              (typeof u.UNSAFE_componentWillMount != 'function' &&
                typeof u.componentWillMount != 'function') ||
              (typeof u.componentWillMount == 'function' &&
                u.componentWillMount(),
              typeof u.UNSAFE_componentWillMount == 'function' &&
                u.UNSAFE_componentWillMount()),
            typeof u.componentDidMount == 'function' && (e.flags |= 4194308))
          : (typeof u.componentDidMount == 'function' && (e.flags |= 4194308),
            (e.memoizedProps = a),
            (e.memoizedState = T)),
          (u.props = a),
          (u.state = T),
          (u.context = i),
          (a = d))
        : (typeof u.componentDidMount == 'function' && (e.flags |= 4194308),
          (a = !1)));
    } else {
      ((u = e.stateNode),
        dc(t, e),
        (i = e.memoizedProps),
        (j = Il(l, i)),
        (u.props = j),
        (C = e.pendingProps),
        (z = u.context),
        (T = l.contextType),
        (d = va),
        typeof T == 'object' && T !== null && (d = Vt(T)),
        (s = l.getDerivedStateFromProps),
        (T =
          typeof s == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((i !== C || z !== d) && or(e, u, a, d)),
        (vl = !1),
        (z = e.memoizedState),
        (u.state = z),
        mn(e, a, u, n),
        hn());
      var x = e.memoizedState;
      (
        i !== C ||
        z !== x ||
        vl ||
        (t !== null && t.dependencies !== null && yu(t.dependencies))
      ) ?
        (typeof s == 'function' && (Hc(e, l, s, a), (x = e.memoizedState)),
        (
          (j =
            vl ||
            sr(e, l, j, a, z, x, d) ||
            (t !== null && t.dependencies !== null && yu(t.dependencies)))
        ) ?
          (T ||
            (typeof u.UNSAFE_componentWillUpdate != 'function' &&
              typeof u.componentWillUpdate != 'function') ||
            (typeof u.componentWillUpdate == 'function' &&
              u.componentWillUpdate(a, x, d),
            typeof u.UNSAFE_componentWillUpdate == 'function' &&
              u.UNSAFE_componentWillUpdate(a, x, d)),
          typeof u.componentDidUpdate == 'function' && (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
        : (typeof u.componentDidUpdate != 'function' ||
            (i === t.memoizedProps && z === t.memoizedState) ||
            (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (i === t.memoizedProps && z === t.memoizedState) ||
            (e.flags |= 1024),
          (e.memoizedProps = a),
          (e.memoizedState = x)),
        (u.props = a),
        (u.state = x),
        (u.context = d),
        (a = j))
      : (typeof u.componentDidUpdate != 'function' ||
          (i === t.memoizedProps && z === t.memoizedState) ||
          (e.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != 'function' ||
          (i === t.memoizedProps && z === t.memoizedState) ||
          (e.flags |= 1024),
        (a = !1));
    }
    return (
      (u = a),
      Uu(t, e),
      (a = (e.flags & 128) !== 0),
      u || a ?
        ((u = e.stateNode),
        (l =
          a && typeof l.getDerivedStateFromError != 'function' ?
            null
          : u.render()),
        (e.flags |= 1),
        t !== null && a ?
          ((e.child = kl(e, t.child, null, n)), (e.child = kl(e, null, l, n)))
        : Kt(t, e, l, n),
        (e.memoizedState = u.state),
        (t = e.child))
      : (t = ke(t, e, n)),
      t
    );
  }
  function xr(t, e, l, a) {
    return (Vl(), (e.flags |= 256), Kt(t, e, l, a), e.child);
  }
  var Gc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Xc(t) {
    return { baseLanes: t, cachePool: mo() };
  }
  function Qc(t, e, l) {
    return ((t = t !== null ? t.childLanes & ~l : 0), e && (t |= de), t);
  }
  function Ar(t, e, l) {
    var a = e.pendingProps,
      n = !1,
      u = (e.flags & 128) !== 0,
      i;
    if (
      ((i = u) ||
        (i =
          t !== null && t.memoizedState === null ? !1 : (Ct.current & 2) !== 0),
      i && ((n = !0), (e.flags &= -129)),
      (i = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (ft) {
        if (
          (n ? _l(e) : Sl(),
          (t = Tt) ?
            ((t = Ud(t, ze)),
            (t = t !== null && t.data !== '&' ? t : null),
            t !== null &&
              ((e.memoizedState = {
                dehydrated: t,
                treeContext: dl !== null ? { id: Be, overflow: qe } : null,
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (l = no(t)),
              (l.return = e),
              (e.child = l),
              (Zt = e),
              (Tt = null)))
          : (t = null),
          t === null)
        )
          throw ml(e);
        return (xf(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var s = a.children;
      return (
        (a = a.fallback),
        n ?
          (Sl(),
          (n = e.mode),
          (s = Hu({ mode: 'hidden', children: s }, n)),
          (a = Zl(a, n, l, null)),
          (s.return = e),
          (a.return = e),
          (s.sibling = a),
          (e.child = s),
          (a = e.child),
          (a.memoizedState = Xc(l)),
          (a.childLanes = Qc(t, i, l)),
          (e.memoizedState = Gc),
          _n(null, a))
        : (_l(e), Zc(e, s))
      );
    }
    var d = t.memoizedState;
    if (d !== null && ((s = d.dehydrated), s !== null)) {
      if (u)
        e.flags & 256 ? (_l(e), (e.flags &= -257), (e = Vc(t, e, l)))
        : e.memoizedState !== null ?
          (Sl(), (e.child = t.child), (e.flags |= 128), (e = null))
        : (Sl(),
          (s = a.fallback),
          (n = e.mode),
          (a = Hu({ mode: 'visible', children: a.children }, n)),
          (s = Zl(s, n, l, null)),
          (s.flags |= 2),
          (a.return = e),
          (s.return = e),
          (a.sibling = s),
          (e.child = a),
          kl(e, t.child, null, l),
          (a = e.child),
          (a.memoizedState = Xc(l)),
          (a.childLanes = Qc(t, i, l)),
          (e.memoizedState = Gc),
          (e = _n(null, a)));
      else if ((_l(e), xf(s))) {
        if (((i = s.nextSibling && s.nextSibling.dataset), i)) var T = i.dgst;
        ((i = T),
          (a = Error(f(419))),
          (a.stack = ''),
          (a.digest = i),
          cn({ value: a, source: null, stack: null }),
          (e = Vc(t, e, l)));
      } else if (
        (Bt || Sa(t, e, l, !1), (i = (l & t.childLanes) !== 0), Bt || i)
      ) {
        if (
          ((i = St),
          i !== null && ((a = rs(i, l)), a !== 0 && a !== d.retryLane))
        )
          throw ((d.retryLane = a), Ql(t, a), ae(i, t, a), Yc);
        (zf(s) || Vu(), (e = Vc(t, e, l)));
      } else
        zf(s) ?
          ((e.flags |= 192), (e.child = t.child), (e = null))
        : ((t = d.treeContext),
          (Tt = Ae(s.nextSibling)),
          (Zt = e),
          (ft = !0),
          (hl = null),
          (ze = !1),
          t !== null && co(e, t),
          (e = Zc(e, a.children)),
          (e.flags |= 4096));
      return e;
    }
    return n ?
        (Sl(),
        (s = a.fallback),
        (n = e.mode),
        (d = t.child),
        (T = d.sibling),
        (a = Ve(d, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = d.subtreeFlags & 65011712),
        T !== null ? (s = Ve(T, s)) : ((s = Zl(s, n, l, null)), (s.flags |= 2)),
        (s.return = e),
        (a.return = e),
        (a.sibling = s),
        (e.child = a),
        _n(null, a),
        (a = e.child),
        (s = t.child.memoizedState),
        s === null ?
          (s = Xc(l))
        : ((n = s.cachePool),
          n !== null ?
            ((d = Ut._currentValue),
            (n = n.parent !== d ? { parent: d, pool: d } : n))
          : (n = mo()),
          (s = { baseLanes: s.baseLanes | l, cachePool: n })),
        (a.memoizedState = s),
        (a.childLanes = Qc(t, i, l)),
        (e.memoizedState = Gc),
        _n(t.child, a))
      : (_l(e),
        (l = t.child),
        (t = l.sibling),
        (l = Ve(l, { mode: 'visible', children: a.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((i = e.deletions),
          i === null ? ((e.deletions = [t]), (e.flags |= 16)) : i.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function Zc(t, e) {
    return (
      (e = Hu({ mode: 'visible', children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Hu(t, e) {
    return ((t = fe(22, t, null, e)), (t.lanes = 0), t);
  }
  function Vc(t, e, l) {
    return (
      kl(e, t.child, null, l),
      (t = Zc(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Nr(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    (a !== null && (a.lanes |= e), uc(t.return, e, l));
  }
  function Kc(t, e, l, a, n, u) {
    var i = t.memoizedState;
    i === null ?
      (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: l,
        tailMode: n,
        treeForkCount: u,
      })
    : ((i.isBackwards = e),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = a),
      (i.tail = l),
      (i.tailMode = n),
      (i.treeForkCount = u));
  }
  function jr(t, e, l) {
    var a = e.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    a = a.children;
    var i = Ct.current,
      s = (i & 2) !== 0;
    if (
      (s ? ((i = (i & 1) | 2), (e.flags |= 128)) : (i &= 1),
      B(Ct, i),
      Kt(t, e, a, l),
      (a = ft ? un : 0),
      !s && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Nr(t, l, e);
        else if (t.tag === 19) Nr(t, l, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (n) {
      case 'forwards':
        for (l = e.child, n = null; l !== null; )
          ((t = l.alternate),
            t !== null && Tu(t) === null && (n = l),
            (l = l.sibling));
        ((l = n),
          l === null ?
            ((n = e.child), (e.child = null))
          : ((n = l.sibling), (l.sibling = null)),
          Kc(e, !1, n, l, u, a));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (((t = n.alternate), t !== null && Tu(t) === null)) {
            e.child = n;
            break;
          }
          ((t = n.sibling), (n.sibling = l), (l = n), (n = t));
        }
        Kc(e, !0, l, null, u, a);
        break;
      case 'together':
        Kc(e, !1, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function ke(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Tl |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Sa(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(f(153));
    if (e.child !== null) {
      for (
        t = e.child, l = Ve(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (l = l.sibling = Ve(t, t.pendingProps)),
          (l.return = e));
      l.sibling = null;
    }
    return e.child;
  }
  function wc(t, e) {
    return (t.lanes & e) !== 0 ?
        !0
      : ((t = t.dependencies), !!(t !== null && yu(t)));
  }
  function fy(t, e, l) {
    switch (e.tag) {
      case 3:
        ($t(e, e.stateNode.containerInfo),
          yl(e, Ut, t.memoizedState.cache),
          Vl());
        break;
      case 27:
      case 5:
        Va(e);
        break;
      case 4:
        $t(e, e.stateNode.containerInfo);
        break;
      case 10:
        yl(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), gc(e), null);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return (
            a.dehydrated !== null ? (_l(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0 ? Ar(t, e, l)
            : (_l(e), (t = ke(t, e, l)), t !== null ? t.sibling : null)
          );
        _l(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (
          ((a = (l & e.childLanes) !== 0),
          a || (Sa(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
          n)
        ) {
          if (a) return jr(t, e, l);
          e.flags |= 128;
        }
        if (
          ((n = e.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          B(Ct, Ct.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), Sr(t, e, l, e.pendingProps));
      case 24:
        yl(e, Ut, t.memoizedState.cache);
    }
    return ke(t, e, l);
  }
  function Rr(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Bt = !0;
      else {
        if (!wc(t, l) && (e.flags & 128) === 0) return ((Bt = !1), fy(t, e, l));
        Bt = (t.flags & 131072) !== 0;
      }
    else ((Bt = !1), ft && (e.flags & 1048576) !== 0 && io(e, un, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (((t = $l(e.elementType)), (e.type = t), typeof t == 'function'))
            Fi(t) ?
              ((a = Il(t, a)), (e.tag = 1), (e = zr(null, e, t, a, l)))
            : ((e.tag = 0), (e = Lc(null, e, t, a, l)));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === Et) {
                ((e.tag = 11), (e = gr(null, e, t, a, l)));
                break t;
              } else if (n === P) {
                ((e.tag = 14), (e = pr(null, e, t, a, l)));
                break t;
              }
            }
            throw ((e = Ge(t) || t), Error(f(306, e, '')));
          }
        }
        return e;
      case 0:
        return Lc(t, e, e.type, e.pendingProps, l);
      case 1:
        return ((a = e.type), (n = Il(a, e.pendingProps)), zr(t, e, a, n, l));
      case 3:
        t: {
          if (($t(e, e.stateNode.containerInfo), t === null))
            throw Error(f(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          ((n = u.element), dc(t, e), mn(e, a, null, l));
          var i = e.memoizedState;
          if (
            ((a = i.cache),
            yl(e, Ut, a),
            a !== u.cache && ic(e, [Ut], l, !0),
            hn(),
            (a = i.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: i.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = xr(t, e, a, l);
              break t;
            } else if (a !== n) {
              ((n = be(Error(f(424)), e)), cn(n), (e = xr(t, e, a, l)));
              break t;
            } else
              for (
                t = e.stateNode.containerInfo,
                  t.nodeType === 9 ?
                    (t = t.body)
                  : (t = t.nodeName === 'HTML' ? t.ownerDocument.body : t),
                  Tt = Ae(t.firstChild),
                  Zt = e,
                  ft = !0,
                  hl = null,
                  ze = !0,
                  l = So(e, null, a, l),
                  e.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
          else {
            if ((Vl(), a === n)) {
              e = ke(t, e, l);
              break t;
            }
            Kt(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Uu(t, e),
          t === null ?
            (l = Gd(e.type, null, e.pendingProps, null)) ?
              (e.memoizedState = l)
            : ft ||
              ((l = e.type),
              (t = e.pendingProps),
              (a = Fu(at.current).createElement(l)),
              (a[Qt] = e),
              (a[Ft] = t),
              wt(a, l, t),
              Lt(a),
              (e.stateNode = a))
          : (e.memoizedState = Gd(
              e.type,
              t.memoizedProps,
              e.pendingProps,
              t.memoizedState,
            )),
          null
        );
      case 27:
        return (
          Va(e),
          t === null &&
            ft &&
            ((a = e.stateNode = qd(e.type, e.pendingProps, at.current)),
            (Zt = e),
            (ze = !0),
            (n = Tt),
            jl(e.type) ? ((Af = n), (Tt = Ae(a.firstChild))) : (Tt = n)),
          Kt(t, e, e.pendingProps.children, l),
          Uu(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            ft &&
            ((n = a = Tt) &&
              ((a = Yy(a, e.type, e.pendingProps, ze)),
              a !== null ?
                ((e.stateNode = a),
                (Zt = e),
                (Tt = Ae(a.firstChild)),
                (ze = !1),
                (n = !0))
              : (n = !1)),
            n || ml(e)),
          Va(e),
          (n = e.type),
          (u = e.pendingProps),
          (i = t !== null ? t.memoizedProps : null),
          (a = u.children),
          bf(n, u) ? (a = null) : i !== null && bf(n, i) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((n = _c(t, e, Pm, null, null, l)), (Un._currentValue = n)),
          Uu(t, e),
          Kt(t, e, a, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            ft &&
            ((t = l = Tt) &&
              ((l = Ly(l, e.pendingProps, ze)),
              l !== null ?
                ((e.stateNode = l), (Zt = e), (Tt = null), (t = !0))
              : (t = !1)),
            t || ml(e)),
          null
        );
      case 13:
        return Ar(t, e, l);
      case 4:
        return (
          $t(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = kl(e, null, a, l)) : Kt(t, e, a, l),
          e.child
        );
      case 11:
        return gr(t, e, e.type, e.pendingProps, l);
      case 7:
        return (Kt(t, e, e.pendingProps, l), e.child);
      case 8:
        return (Kt(t, e, e.pendingProps.children, l), e.child);
      case 12:
        return (Kt(t, e, e.pendingProps.children, l), e.child);
      case 10:
        return (
          (a = e.pendingProps),
          yl(e, e.type, a.value),
          Kt(t, e, a.children, l),
          e.child
        );
      case 9:
        return (
          (n = e.type._context),
          (a = e.pendingProps.children),
          wl(e),
          (n = Vt(n)),
          (a = a(n)),
          (e.flags |= 1),
          Kt(t, e, a, l),
          e.child
        );
      case 14:
        return pr(t, e, e.type, e.pendingProps, l);
      case 15:
        return _r(t, e, e.type, e.pendingProps, l);
      case 19:
        return jr(t, e, l);
      case 31:
        return cy(t, e, l);
      case 22:
        return Sr(t, e, l, e.pendingProps);
      case 24:
        return (
          wl(e),
          (a = Vt(Ut)),
          t === null ?
            ((n = sc()),
            n === null &&
              ((n = St),
              (u = cc()),
              (n.pooledCache = u),
              u.refCount++,
              u !== null && (n.pooledCacheLanes |= l),
              (n = u)),
            (e.memoizedState = { parent: a, cache: n }),
            rc(e),
            yl(e, Ut, n))
          : ((t.lanes & l) !== 0 && (dc(t, e), mn(e, null, null, l), hn()),
            (n = t.memoizedState),
            (u = e.memoizedState),
            n.parent !== a ?
              ((n = { parent: a, cache: a }),
              (e.memoizedState = n),
              e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n),
              yl(e, Ut, a))
            : ((a = u.cache),
              yl(e, Ut, a),
              a !== n.cache && ic(e, [Ut], l, !0))),
          Kt(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(f(156, e.tag));
  }
  function Fe(t) {
    t.flags |= 4;
  }
  function Jc(t, e, l, a, n) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (n & 335544128) === n))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (ld()) t.flags |= 8192;
        else throw ((Wl = _u), oc);
    } else t.flags &= -16777217;
  }
  function Or(t, e) {
    if (e.type !== 'stylesheet' || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Kd(e)))
      if (ld()) t.flags |= 8192;
      else throw ((Wl = _u), oc);
  }
  function Bu(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? fs() : 536870912), (t.lanes |= e), (Ca |= e)));
  }
  function Sn(t, e) {
    if (!ft)
      switch (t.tailMode) {
        case 'hidden':
          e = t.tail;
          for (var l = null; e !== null; )
            (e.alternate !== null && (l = e), (e = e.sibling));
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case 'collapsed':
          l = t.tail;
          for (var a = null; l !== null; )
            (l.alternate !== null && (a = l), (l = l.sibling));
          a === null ?
            e || t.tail === null ?
              (t.tail = null)
            : (t.tail.sibling = null)
          : (a.sibling = null);
      }
  }
  function zt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      a = 0;
    if (e)
      for (var n = t.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = t),
          (n = n.sibling));
    else
      for (n = t.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = t),
          (n = n.sibling));
    return ((t.subtreeFlags |= a), (t.childLanes = l), e);
  }
  function sy(t, e, l) {
    var a = e.pendingProps;
    switch ((ec(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (zt(e), null);
      case 1:
        return (zt(e), null);
      case 3:
        return (
          (l = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          Je(Ut),
          Mt(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (_a(e) ?
              Fe(e)
            : t === null ||
              (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
              ((e.flags |= 1024), ac())),
          zt(e),
          null
        );
      case 26:
        var n = e.type,
          u = e.memoizedState;
        return (
          t === null ?
            (Fe(e),
            u !== null ? (zt(e), Or(e, u)) : (zt(e), Jc(e, n, null, a, l)))
          : u ?
            u !== t.memoizedState ?
              (Fe(e), zt(e), Or(e, u))
            : (zt(e), (e.flags &= -16777217))
          : ((t = t.memoizedProps), t !== a && Fe(e), zt(e), Jc(e, n, t, a, l)),
          null
        );
      case 27:
        if (
          (Jn(e),
          (l = at.current),
          (n = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== a && Fe(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return (zt(e), null);
          }
          ((t = X.current),
            _a(e) ? fo(e) : ((t = qd(n, a, l)), (e.stateNode = t), Fe(e)));
        }
        return (zt(e), null);
      case 5:
        if ((Jn(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && Fe(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return (zt(e), null);
          }
          if (((u = X.current), _a(e))) fo(e);
          else {
            var i = Fu(at.current);
            switch (u) {
              case 1:
                u = i.createElementNS('http://www.w3.org/2000/svg', n);
                break;
              case 2:
                u = i.createElementNS('http://www.w3.org/1998/Math/MathML', n);
                break;
              default:
                switch (n) {
                  case 'svg':
                    u = i.createElementNS('http://www.w3.org/2000/svg', n);
                    break;
                  case 'math':
                    u = i.createElementNS(
                      'http://www.w3.org/1998/Math/MathML',
                      n,
                    );
                    break;
                  case 'script':
                    ((u = i.createElement('div')),
                      (u.innerHTML = '<script><\/script>'),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case 'select':
                    ((u =
                      typeof a.is == 'string' ?
                        i.createElement('select', { is: a.is })
                      : i.createElement('select')),
                      a.multiple ?
                        (u.multiple = !0)
                      : a.size && (u.size = a.size));
                    break;
                  default:
                    u =
                      typeof a.is == 'string' ?
                        i.createElement(n, { is: a.is })
                      : i.createElement(n);
                }
            }
            ((u[Qt] = e), (u[Ft] = a));
            t: for (i = e.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === e) break t;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === e) break t;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            e.stateNode = u;
            t: switch ((wt(u, n, a), n)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                a = !!a.autoFocus;
                break t;
              case 'img':
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && Fe(e);
          }
        }
        return (
          zt(e),
          Jc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && Fe(e);
        else {
          if (typeof a != 'string' && e.stateNode === null) throw Error(f(166));
          if (((t = at.current), _a(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (a = null),
              (n = Zt),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            ((t[Qt] = e),
              (t = !!(
                t.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Ad(t.nodeValue, l)
              )),
              t || ml(e, !0));
          } else
            ((t = Fu(t).createTextNode(a)), (t[Qt] = e), (e.stateNode = t));
        }
        return (zt(e), null);
      case 31:
        if (((l = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((a = _a(e)), l !== null)) {
            if (t === null) {
              if (!a) throw Error(f(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(f(557));
              t[Qt] = e;
            } else
              (Vl(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (zt(e), (t = !1));
          } else
            ((l = ac()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = l),
              (t = !0));
          if (!t) return e.flags & 256 ? (oe(e), e) : (oe(e), null);
          if ((e.flags & 128) !== 0) throw Error(f(558));
        }
        return (zt(e), null);
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((n = _a(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!n) throw Error(f(318));
              if (
                ((n = e.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(f(317));
              n[Qt] = e;
            } else
              (Vl(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (zt(e), (n = !1));
          } else
            ((n = ac()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (n = !0));
          if (!n) return e.flags & 256 ? (oe(e), e) : (oe(e), null);
        }
        return (
          oe(e),
          (e.flags & 128) !== 0 ?
            ((e.lanes = l), e)
          : ((l = a !== null),
            (t = t !== null && t.memoizedState !== null),
            l &&
              ((a = e.child),
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
            l !== t && l && (e.child.flags |= 8192),
            Bu(e, e.updateQueue),
            zt(e),
            null)
        );
      case 4:
        return (Mt(), t === null && vf(e.stateNode.containerInfo), zt(e), null);
      case 10:
        return (Je(e.type), zt(e), null);
      case 19:
        if ((U(Ct), (a = e.memoizedState), a === null)) return (zt(e), null);
        if (((n = (e.flags & 128) !== 0), (u = a.rendering), u === null))
          if (n) Sn(a, !1);
          else {
            if (Rt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((u = Tu(t)), u !== null)) {
                  for (
                    e.flags |= 128,
                      Sn(a, !1),
                      t = u.updateQueue,
                      e.updateQueue = t,
                      Bu(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;
                  )
                    (ao(l, t), (l = l.sibling));
                  return (
                    B(Ct, (Ct.current & 1) | 2),
                    ft && Ke(e, a.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            a.tail !== null &&
              ne() > Xu &&
              ((e.flags |= 128), (n = !0), Sn(a, !1), (e.lanes = 4194304));
          }
        else {
          if (!n)
            if (((t = Tu(u)), t !== null)) {
              if (
                ((e.flags |= 128),
                (n = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Bu(e, t),
                Sn(a, !0),
                a.tail === null &&
                  a.tailMode === 'hidden' &&
                  !u.alternate &&
                  !ft)
              )
                return (zt(e), null);
            } else
              2 * ne() - a.renderingStartTime > Xu &&
                l !== 536870912 &&
                ((e.flags |= 128), (n = !0), Sn(a, !1), (e.lanes = 4194304));
          a.isBackwards ?
            ((u.sibling = e.child), (e.child = u))
          : ((t = a.last),
            t !== null ? (t.sibling = u) : (e.child = u),
            (a.last = u));
        }
        return a.tail !== null ?
            ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = ne()),
            (t.sibling = null),
            (l = Ct.current),
            B(Ct, n ? (l & 1) | 2 : l & 1),
            ft && Ke(e, a.treeForkCount),
            t)
          : (zt(e), null);
      case 22:
      case 23:
        return (
          oe(e),
          vc(),
          (a = e.memoizedState !== null),
          t !== null ?
            (t.memoizedState !== null) !== a && (e.flags |= 8192)
          : a && (e.flags |= 8192),
          a ?
            (l & 536870912) !== 0 &&
            (e.flags & 128) === 0 &&
            (zt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : zt(e),
          (l = e.updateQueue),
          l !== null && Bu(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== l && (e.flags |= 2048),
          t !== null && U(Jl),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          Je(Ut),
          zt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function oy(t, e) {
    switch ((ec(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          Je(Ut),
          Mt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0 ?
            ((e.flags = (t & -65537) | 128), e)
          : null
        );
      case 26:
      case 27:
      case 5:
        return (Jn(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((oe(e), e.alternate === null)) throw Error(f(340));
          Vl();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (oe(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(f(340));
          Vl();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (U(Ct), null);
      case 4:
        return (Mt(), null);
      case 10:
        return (Je(e.type), null);
      case 22:
      case 23:
        return (
          oe(e),
          vc(),
          t !== null && U(Jl),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (Je(Ut), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Mr(t, e) {
    switch ((ec(e), e.tag)) {
      case 3:
        (Je(Ut), Mt());
        break;
      case 26:
      case 27:
      case 5:
        Jn(e);
        break;
      case 4:
        Mt();
        break;
      case 31:
        e.memoizedState !== null && oe(e);
        break;
      case 13:
        oe(e);
        break;
      case 19:
        U(Ct);
        break;
      case 10:
        Je(e.type);
        break;
      case 22:
      case 23:
        (oe(e), vc(), t !== null && U(Jl));
        break;
      case 24:
        Je(Ut);
    }
  }
  function bn(t, e) {
    try {
      var l = e.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var u = l.create,
              i = l.inst;
            ((a = u()), (i.destroy = a));
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (s) {
      mt(e, e.return, s);
    }
  }
  function bl(t, e, l) {
    try {
      var a = e.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst,
              s = i.destroy;
            if (s !== void 0) {
              ((i.destroy = void 0), (n = e));
              var d = l,
                T = s;
              try {
                T();
              } catch (j) {
                mt(n, d, j);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (j) {
      mt(e, e.return, j);
    }
  }
  function Cr(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        Eo(e, l);
      } catch (a) {
        mt(t, t.return, a);
      }
    }
  }
  function Dr(t, e, l) {
    ((l.props = Il(t.type, t.memoizedProps)), (l.state = t.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (a) {
      mt(t, e, a);
    }
  }
  function En(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == 'function' ? (t.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      mt(t, e, n);
    }
  }
  function Ye(t, e) {
    var l = t.ref,
      a = t.refCleanup;
    if (l !== null)
      if (typeof a == 'function')
        try {
          a();
        } catch (n) {
          mt(t, e, n);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof l == 'function')
        try {
          l(null);
        } catch (n) {
          mt(t, e, n);
        }
      else l.current = null;
  }
  function Ur(t) {
    var e = t.type,
      l = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          l.autoFocus && a.focus();
          break t;
        case 'img':
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      mt(t, t.return, n);
    }
  }
  function $c(t, e, l) {
    try {
      var a = t.stateNode;
      (Cy(a, t.type, l, e), (a[Ft] = e));
    } catch (n) {
      mt(t, t.return, n);
    }
  }
  function Hr(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && jl(t.type)) ||
      t.tag === 4
    );
  }
  function Wc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Hr(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && jl(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function kc(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      ((t = t.stateNode),
        e ?
          (l.nodeType === 9 ? l.body
          : l.nodeName === 'HTML' ? l.ownerDocument.body
          : l
          ).insertBefore(t, e)
        : ((e =
            l.nodeType === 9 ? l.body
            : l.nodeName === 'HTML' ? l.ownerDocument.body
            : l),
          e.appendChild(t),
          (l = l._reactRootContainer),
          l != null || e.onclick !== null || (e.onclick = Qe)));
    else if (
      a !== 4 &&
      (a === 27 && jl(t.type) && ((l = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (kc(t, e, l), t = t.sibling; t !== null; )
        (kc(t, e, l), (t = t.sibling));
  }
  function qu(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      ((t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t));
    else if (
      a !== 4 &&
      (a === 27 && jl(t.type) && (l = t.stateNode), (t = t.child), t !== null)
    )
      for (qu(t, e, l), t = t.sibling; t !== null; )
        (qu(t, e, l), (t = t.sibling));
  }
  function Br(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      (wt(e, a, l), (e[Qt] = t), (e[Ft] = l));
    } catch (u) {
      mt(t, t.return, u);
    }
  }
  var Ie = !1,
    qt = !1,
    Fc = !1,
    qr = typeof WeakSet == 'function' ? WeakSet : Set,
    Gt = null;
  function ry(t, e) {
    if (((t = t.containerInfo), (_f = ni), (t = $s(t)), Vi(t))) {
      if ('selectionStart' in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
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
              break t;
            }
            var i = 0,
              s = -1,
              d = -1,
              T = 0,
              j = 0,
              C = t,
              z = null;
            e: for (;;) {
              for (
                var x;
                C !== l || (n !== 0 && C.nodeType !== 3) || (s = i + n),
                  C !== u || (a !== 0 && C.nodeType !== 3) || (d = i + a),
                  C.nodeType === 3 && (i += C.nodeValue.length),
                  (x = C.firstChild) !== null;
              )
                ((z = C), (C = x));
              for (;;) {
                if (C === t) break e;
                if (
                  (z === l && ++T === n && (s = i),
                  z === u && ++j === a && (d = i),
                  (x = C.nextSibling) !== null)
                )
                  break;
                ((C = z), (z = C.parentNode));
              }
              C = x;
            }
            l = s === -1 || d === -1 ? null : { start: s, end: d };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      Sf = { focusedElem: t, selectionRange: l }, ni = !1, Gt = e;
      Gt !== null;
    )
      if (
        ((e = Gt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        ((t.return = e), (Gt = t));
      else
        for (; Gt !== null; ) {
          switch (((e = Gt), (u = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (l = 0; l < t.length; l++)
                  ((n = t[l]), (n.ref.impl = n.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                ((t = void 0),
                  (l = e),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = l.stateNode));
                try {
                  var Y = Il(l.type, n);
                  ((t = a.getSnapshotBeforeUpdate(Y, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = t));
                } catch ($) {
                  mt(l, l.return, $);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  Tf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Tf(t);
                      break;
                    default:
                      t.textContent = '';
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
              if ((t & 1024) !== 0) throw Error(f(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (Gt = t));
            break;
          }
          Gt = e.return;
        }
  }
  function Yr(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (tl(t, l), a & 4 && bn(5, l));
        break;
      case 1:
        if ((tl(t, l), a & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (i) {
              mt(l, l.return, i);
            }
          else {
            var n = Il(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              mt(l, l.return, i);
            }
          }
        (a & 64 && Cr(l), a & 512 && En(l, l.return));
        break;
      case 3:
        if ((tl(t, l), a & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            Eo(t, e);
          } catch (i) {
            mt(l, l.return, i);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Br(l);
      case 26:
      case 5:
        (tl(t, l), e === null && a & 4 && Ur(l), a & 512 && En(l, l.return));
        break;
      case 12:
        tl(t, l);
        break;
      case 31:
        (tl(t, l), a & 4 && Xr(t, l));
        break;
      case 13:
        (tl(t, l),
          a & 4 && Qr(t, l),
          a & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = Sy.bind(null, l)), Gy(t, l)))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || Ie), !a)) {
          ((e = (e !== null && e.memoizedState !== null) || qt), (n = Ie));
          var u = qt;
          ((Ie = a),
            (qt = e) && !u ? el(t, l, (l.subtreeFlags & 8772) !== 0) : tl(t, l),
            (Ie = n),
            (qt = u));
        }
        break;
      case 30:
        break;
      default:
        tl(t, l);
    }
  }
  function Lr(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), Lr(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Ni(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var xt = null,
    Pt = !1;
  function Pe(t, e, l) {
    for (l = l.child; l !== null; ) (Gr(t, e, l), (l = l.sibling));
  }
  function Gr(t, e, l) {
    if (ue && typeof ue.onCommitFiberUnmount == 'function')
      try {
        ue.onCommitFiberUnmount(Ka, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (qt || Ye(l, e),
          Pe(t, e, l),
          l.memoizedState ?
            l.memoizedState.count--
          : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        qt || Ye(l, e);
        var a = xt,
          n = Pt;
        (jl(l.type) && ((xt = l.stateNode), (Pt = !1)),
          Pe(t, e, l),
          Mn(l.stateNode),
          (xt = a),
          (Pt = n));
        break;
      case 5:
        qt || Ye(l, e);
      case 6:
        if (
          ((a = xt),
          (n = Pt),
          (xt = null),
          Pe(t, e, l),
          (xt = a),
          (Pt = n),
          xt !== null)
        )
          if (Pt)
            try {
              (xt.nodeType === 9 ? xt.body
              : xt.nodeName === 'HTML' ? xt.ownerDocument.body
              : xt
              ).removeChild(l.stateNode);
            } catch (u) {
              mt(l, e, u);
            }
          else
            try {
              xt.removeChild(l.stateNode);
            } catch (u) {
              mt(l, e, u);
            }
        break;
      case 18:
        xt !== null &&
          (Pt ?
            ((t = xt),
            Cd(
              t.nodeType === 9 ? t.body
              : t.nodeName === 'HTML' ? t.ownerDocument.body
              : t,
              l.stateNode,
            ),
            Ga(t))
          : Cd(xt, l.stateNode));
        break;
      case 4:
        ((a = xt),
          (n = Pt),
          (xt = l.stateNode.containerInfo),
          (Pt = !0),
          Pe(t, e, l),
          (xt = a),
          (Pt = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (bl(2, l, e), qt || bl(4, l, e), Pe(t, e, l));
        break;
      case 1:
        (qt ||
          (Ye(l, e),
          (a = l.stateNode),
          typeof a.componentWillUnmount == 'function' && Dr(l, e, a)),
          Pe(t, e, l));
        break;
      case 21:
        Pe(t, e, l);
        break;
      case 22:
        ((qt = (a = qt) || l.memoizedState !== null), Pe(t, e, l), (qt = a));
        break;
      default:
        Pe(t, e, l);
    }
  }
  function Xr(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        Ga(t);
      } catch (l) {
        mt(e, e.return, l);
      }
    }
  }
  function Qr(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Ga(t);
      } catch (l) {
        mt(e, e.return, l);
      }
  }
  function dy(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new qr()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new qr()),
          e
        );
      default:
        throw Error(f(435, t.tag));
    }
  }
  function Yu(t, e) {
    var l = dy(t);
    e.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var n = by.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function te(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          u = t,
          i = e,
          s = i;
        t: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (jl(s.type)) {
                ((xt = s.stateNode), (Pt = !1));
                break t;
              }
              break;
            case 5:
              ((xt = s.stateNode), (Pt = !1));
              break t;
            case 3:
            case 4:
              ((xt = s.stateNode.containerInfo), (Pt = !0));
              break t;
          }
          s = s.return;
        }
        if (xt === null) throw Error(f(160));
        (Gr(u, i, n),
          (xt = null),
          (Pt = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) (Zr(e, t), (e = e.sibling));
  }
  var Ce = null;
  function Zr(t, e) {
    var l = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (te(e, t),
          ee(t),
          a & 4 && (bl(3, t, t.return), bn(3, t), bl(5, t, t.return)));
        break;
      case 1:
        (te(e, t),
          ee(t),
          a & 512 && (qt || l === null || Ye(l, l.return)),
          a & 64 &&
            Ie &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? a : l.concat(a))))));
        break;
      case 26:
        var n = Ce;
        if (
          (te(e, t),
          ee(t),
          a & 512 && (qt || l === null || Ye(l, l.return)),
          a & 4)
        ) {
          var u = l !== null ? l.memoizedState : null;
          if (((a = t.memoizedState), l === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  ((a = t.type),
                    (l = t.memoizedProps),
                    (n = n.ownerDocument || n));
                  e: switch (a) {
                    case 'title':
                      ((u = n.getElementsByTagName('title')[0]),
                        (!u ||
                          u[$a] ||
                          u[Qt] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector('head > title'),
                          )),
                        wt(u, a, l),
                        (u[Qt] = t),
                        Lt(u),
                        (a = u));
                      break t;
                    case 'link':
                      var i = Zd('link', 'href', n).get(a + (l.href || ''));
                      if (i) {
                        for (var s = 0; s < i.length; s++)
                          if (
                            ((u = i[s]),
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
                            i.splice(s, 1);
                            break e;
                          }
                      }
                      ((u = n.createElement(a)),
                        wt(u, a, l),
                        n.head.appendChild(u));
                      break;
                    case 'meta':
                      if (
                        (i = Zd('meta', 'content', n).get(
                          a + (l.content || ''),
                        ))
                      ) {
                        for (s = 0; s < i.length; s++)
                          if (
                            ((u = i[s]),
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
                            i.splice(s, 1);
                            break e;
                          }
                      }
                      ((u = n.createElement(a)),
                        wt(u, a, l),
                        n.head.appendChild(u));
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  ((u[Qt] = t), Lt(u), (a = u));
                }
                t.stateNode = a;
              } else Vd(n, t.type, t.stateNode);
            else t.stateNode = Qd(n, a, t.memoizedProps);
          else
            u !== a ?
              (u === null ?
                l.stateNode !== null &&
                ((l = l.stateNode), l.parentNode.removeChild(l))
              : u.count--,
              a === null ?
                Vd(n, t.type, t.stateNode)
              : Qd(n, a, t.memoizedProps))
            : a === null &&
              t.stateNode !== null &&
              $c(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (te(e, t),
          ee(t),
          a & 512 && (qt || l === null || Ye(l, l.return)),
          l !== null && a & 4 && $c(t, t.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (te(e, t),
          ee(t),
          a & 512 && (qt || l === null || Ye(l, l.return)),
          t.flags & 32)
        ) {
          n = t.stateNode;
          try {
            sa(n, '');
          } catch (Y) {
            mt(t, t.return, Y);
          }
        }
        (a & 4 &&
          t.stateNode != null &&
          ((n = t.memoizedProps), $c(t, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (Fc = !0));
        break;
      case 6:
        if ((te(e, t), ee(t), a & 4)) {
          if (t.stateNode === null) throw Error(f(162));
          ((a = t.memoizedProps), (l = t.stateNode));
          try {
            l.nodeValue = a;
          } catch (Y) {
            mt(t, t.return, Y);
          }
        }
        break;
      case 3:
        if (
          ((ti = null),
          (n = Ce),
          (Ce = Iu(e.containerInfo)),
          te(e, t),
          (Ce = n),
          ee(t),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Ga(e.containerInfo);
          } catch (Y) {
            mt(t, t.return, Y);
          }
        Fc && ((Fc = !1), Vr(t));
        break;
      case 4:
        ((a = Ce),
          (Ce = Iu(t.stateNode.containerInfo)),
          te(e, t),
          ee(t),
          (Ce = a));
        break;
      case 12:
        (te(e, t), ee(t));
        break;
      case 31:
        (te(e, t),
          ee(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Yu(t, a))));
        break;
      case 13:
        (te(e, t),
          ee(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Gu = ne()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Yu(t, a))));
        break;
      case 22:
        n = t.memoizedState !== null;
        var d = l !== null && l.memoizedState !== null,
          T = Ie,
          j = qt;
        if (
          ((Ie = T || n),
          (qt = j || d),
          te(e, t),
          (qt = j),
          (Ie = T),
          ee(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = n ? e._visibility & -2 : e._visibility | 1,
              n && (l === null || d || Ie || qt || Pl(t)),
              l = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                d = l = e;
                try {
                  if (((u = d.stateNode), n))
                    ((i = u.style),
                      typeof i.setProperty == 'function' ?
                        i.setProperty('display', 'none', 'important')
                      : (i.display = 'none'));
                  else {
                    s = d.stateNode;
                    var C = d.memoizedProps.style,
                      z =
                        C != null && C.hasOwnProperty('display') ?
                          C.display
                        : null;
                    s.style.display =
                      z == null || typeof z == 'boolean' ? '' : ('' + z).trim();
                  }
                } catch (Y) {
                  mt(d, d.return, Y);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                d = e;
                try {
                  d.stateNode.nodeValue = n ? '' : d.memoizedProps;
                } catch (Y) {
                  mt(d, d.return, Y);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                d = e;
                try {
                  var x = d.stateNode;
                  n ? Dd(x, !0) : Dd(d.stateNode, !1);
                } catch (Y) {
                  mt(d, d.return, Y);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (l === e && (l = null), (e = e.return));
            }
            (l === e && (l = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), Yu(t, l))));
        break;
      case 19:
        (te(e, t),
          ee(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Yu(t, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (te(e, t), ee(t));
    }
  }
  function ee(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (Hr(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              u = Wc(t);
            qu(t, u, n);
            break;
          case 5:
            var i = l.stateNode;
            l.flags & 32 && (sa(i, ''), (l.flags &= -33));
            var s = Wc(t);
            qu(t, s, i);
            break;
          case 3:
          case 4:
            var d = l.stateNode.containerInfo,
              T = Wc(t);
            kc(t, T, d);
            break;
          default:
            throw Error(f(161));
        }
      } catch (j) {
        mt(t, t.return, j);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Vr(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (Vr(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function tl(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (Yr(t, e.alternate, e), (e = e.sibling));
  }
  function Pl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (bl(4, e, e.return), Pl(e));
          break;
        case 1:
          Ye(e, e.return);
          var l = e.stateNode;
          (typeof l.componentWillUnmount == 'function' && Dr(e, e.return, l),
            Pl(e));
          break;
        case 27:
          Mn(e.stateNode);
        case 26:
        case 5:
          (Ye(e, e.return), Pl(e));
          break;
        case 22:
          e.memoizedState === null && Pl(e);
          break;
        case 30:
          Pl(e);
          break;
        default:
          Pl(e);
      }
      t = t.sibling;
    }
  }
  function el(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        n = t,
        u = e,
        i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (el(n, u, l), bn(4, u));
          break;
        case 1:
          if (
            (el(n, u, l),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == 'function')
          )
            try {
              n.componentDidMount();
            } catch (T) {
              mt(a, a.return, T);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var s = a.stateNode;
            try {
              var d = n.shared.hiddenCallbacks;
              if (d !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < d.length; n++)
                  bo(d[n], s);
            } catch (T) {
              mt(a, a.return, T);
            }
          }
          (l && i & 64 && Cr(u), En(u, u.return));
          break;
        case 27:
          Br(u);
        case 26:
        case 5:
          (el(n, u, l), l && a === null && i & 4 && Ur(u), En(u, u.return));
          break;
        case 12:
          el(n, u, l);
          break;
        case 31:
          (el(n, u, l), l && i & 4 && Xr(n, u));
          break;
        case 13:
          (el(n, u, l), l && i & 4 && Qr(n, u));
          break;
        case 22:
          (u.memoizedState === null && el(n, u, l), En(u, u.return));
          break;
        case 30:
          break;
        default:
          el(n, u, l);
      }
      e = e.sibling;
    }
  }
  function Ic(t, e) {
    var l = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && fn(l)));
  }
  function Pc(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && fn(t)));
  }
  function De(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Kr(t, e, l, a), (e = e.sibling));
  }
  function Kr(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (De(t, e, l, a), n & 2048 && bn(9, e));
        break;
      case 1:
        De(t, e, l, a);
        break;
      case 3:
        (De(t, e, l, a),
          n & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && fn(t))));
        break;
      case 12:
        if (n & 2048) {
          (De(t, e, l, a), (t = e.stateNode));
          try {
            var u = e.memoizedProps,
              i = u.id,
              s = u.onPostCommit;
            typeof s == 'function' &&
              s(
                i,
                e.alternate === null ? 'mount' : 'update',
                t.passiveEffectDuration,
                -0,
              );
          } catch (d) {
            mt(e, e.return, d);
          }
        } else De(t, e, l, a);
        break;
      case 31:
        De(t, e, l, a);
        break;
      case 13:
        De(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        ((u = e.stateNode),
          (i = e.alternate),
          e.memoizedState !== null ?
            u._visibility & 2 ?
              De(t, e, l, a)
            : Tn(t, e)
          : u._visibility & 2 ? De(t, e, l, a)
          : ((u._visibility |= 2),
            Ra(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && Ic(i, e));
        break;
      case 24:
        (De(t, e, l, a), n & 2048 && Pc(e.alternate, e));
        break;
      default:
        De(t, e, l, a);
    }
  }
  function Ra(t, e, l, a, n) {
    for (
      n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;
    ) {
      var u = t,
        i = e,
        s = l,
        d = a,
        T = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (Ra(u, i, s, d, n), bn(8, i));
          break;
        case 23:
          break;
        case 22:
          var j = i.stateNode;
          (i.memoizedState !== null ?
            j._visibility & 2 ?
              Ra(u, i, s, d, n)
            : Tn(u, i)
          : ((j._visibility |= 2), Ra(u, i, s, d, n)),
            n && T & 2048 && Ic(i.alternate, i));
          break;
        case 24:
          (Ra(u, i, s, d, n), n && T & 2048 && Pc(i.alternate, i));
          break;
        default:
          Ra(u, i, s, d, n);
      }
      e = e.sibling;
    }
  }
  function Tn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          a = e,
          n = a.flags;
        switch (a.tag) {
          case 22:
            (Tn(l, a), n & 2048 && Ic(a.alternate, a));
            break;
          case 24:
            (Tn(l, a), n & 2048 && Pc(a.alternate, a));
            break;
          default:
            Tn(l, a);
        }
        e = e.sibling;
      }
  }
  var zn = 8192;
  function Oa(t, e, l) {
    if (t.subtreeFlags & zn)
      for (t = t.child; t !== null; ) (wr(t, e, l), (t = t.sibling));
  }
  function wr(t, e, l) {
    switch (t.tag) {
      case 26:
        (Oa(t, e, l),
          t.flags & zn &&
            t.memoizedState !== null &&
            Iy(l, Ce, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        Oa(t, e, l);
        break;
      case 3:
      case 4:
        var a = Ce;
        ((Ce = Iu(t.stateNode.containerInfo)), Oa(t, e, l), (Ce = a));
        break;
      case 22:
        t.memoizedState === null &&
          ((a = t.alternate),
          a !== null && a.memoizedState !== null ?
            ((a = zn), (zn = 16777216), Oa(t, e, l), (zn = a))
          : Oa(t, e, l));
        break;
      default:
        Oa(t, e, l);
    }
  }
  function Jr(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function xn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          ((Gt = a), Wr(a, t));
        }
      Jr(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) ($r(t), (t = t.sibling));
  }
  function $r(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (xn(t), t.flags & 2048 && bl(9, t, t.return));
        break;
      case 3:
        xn(t);
        break;
      case 12:
        xn(t);
        break;
      case 22:
        var e = t.stateNode;
        (
          t.memoizedState !== null &&
          e._visibility & 2 &&
          (t.return === null || t.return.tag !== 13)
        ) ?
          ((e._visibility &= -3), Lu(t))
        : xn(t);
        break;
      default:
        xn(t);
    }
  }
  function Lu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          ((Gt = a), Wr(a, t));
        }
      Jr(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (bl(8, e, e.return), Lu(e));
          break;
        case 22:
          ((l = e.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Lu(e)));
          break;
        default:
          Lu(e);
      }
      t = t.sibling;
    }
  }
  function Wr(t, e) {
    for (; Gt !== null; ) {
      var l = Gt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          bl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          fn(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) ((a.return = l), (Gt = a));
      else
        t: for (l = t; Gt !== null; ) {
          a = Gt;
          var n = a.sibling,
            u = a.return;
          if ((Lr(a), a === l)) {
            Gt = null;
            break t;
          }
          if (n !== null) {
            ((n.return = u), (Gt = n));
            break t;
          }
          Gt = u;
        }
    }
  }
  var hy = {
      getCacheForType: function (t) {
        var e = Vt(Ut),
          l = e.data.get(t);
        return (l === void 0 && ((l = t()), e.data.set(t, l)), l);
      },
      cacheSignal: function () {
        return Vt(Ut).controller.signal;
      },
    },
    my = typeof WeakMap == 'function' ? WeakMap : Map,
    rt = 0,
    St = null,
    nt = null,
    it = 0,
    ht = 0,
    re = null,
    El = !1,
    Ma = !1,
    tf = !1,
    ll = 0,
    Rt = 0,
    Tl = 0,
    ta = 0,
    ef = 0,
    de = 0,
    Ca = 0,
    An = null,
    le = null,
    lf = !1,
    Gu = 0,
    kr = 0,
    Xu = 1 / 0,
    Qu = null,
    zl = null,
    Yt = 0,
    xl = null,
    Da = null,
    al = 0,
    af = 0,
    nf = null,
    Fr = null,
    Nn = 0,
    uf = null;
  function he() {
    return (
      (rt & 2) !== 0 && it !== 0 ? it & -it
      : O.T !== null ? df()
      : ds()
    );
  }
  function Ir() {
    if (de === 0)
      if ((it & 536870912) === 0 || ft) {
        var t = kn;
        ((kn <<= 1), (kn & 3932160) === 0 && (kn = 262144), (de = t));
      } else de = 536870912;
    return ((t = se.current), t !== null && (t.flags |= 32), de);
  }
  function ae(t, e, l) {
    (((t === St && (ht === 2 || ht === 9)) || t.cancelPendingCommit !== null) &&
      (Ua(t, 0), Al(t, it, de, !1)),
      Ja(t, l),
      ((rt & 2) === 0 || t !== St) &&
        (t === St &&
          ((rt & 2) === 0 && (ta |= l), Rt === 4 && Al(t, it, de, !1)),
        Le(t)));
  }
  function Pr(t, e, l) {
    if ((rt & 6) !== 0) throw Error(f(327));
    var a = (!l && (e & 127) === 0 && (e & t.expiredLanes) === 0) || wa(t, e),
      n = a ? gy(t, e) : ff(t, e, !0),
      u = a;
    do {
      if (n === 0) {
        Ma && !a && Al(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), u && !yy(l))) {
          ((n = ff(t, e, !1)), (u = !1));
          continue;
        }
        if (n === 2) {
          if (((u = e), t.errorRecoveryDisabledLanes & u)) var i = 0;
          else
            ((i = t.pendingLanes & -536870913),
              (i =
                i !== 0 ? i
                : i & 536870912 ? 536870912
                : 0));
          if (i !== 0) {
            e = i;
            t: {
              var s = t;
              n = An;
              var d = s.current.memoizedState.isDehydrated;
              if ((d && (Ua(s, i).flags |= 256), (i = ff(s, i, !1)), i !== 2)) {
                if (tf && !d) {
                  ((s.errorRecoveryDisabledLanes |= u), (ta |= u), (n = 4));
                  break t;
                }
                ((u = le),
                  (le = n),
                  u !== null &&
                    (le === null ? (le = u) : le.push.apply(le, u)));
              }
              n = i;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          (Ua(t, 0), Al(t, e, 0, !0));
          break;
        }
        t: {
          switch (((a = t), (u = n), u)) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Al(a, e, de, !El);
              break t;
            case 2:
              le = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && ((n = Gu + 300 - ne()), 10 < n)) {
            if ((Al(a, e, de, !El), In(a, 0, !0) !== 0)) break t;
            ((al = e),
              (a.timeoutHandle = Od(
                td.bind(
                  null,
                  a,
                  l,
                  le,
                  Qu,
                  lf,
                  e,
                  de,
                  ta,
                  Ca,
                  El,
                  u,
                  'Throttled',
                  -0,
                  0,
                ),
                n,
              )));
            break t;
          }
          td(a, l, le, Qu, lf, e, de, ta, Ca, El, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Le(t);
  }
  function td(t, e, l, a, n, u, i, s, d, T, j, C, z, x) {
    if (
      ((t.timeoutHandle = -1),
      (C = e.subtreeFlags),
      C & 8192 || (C & 16785408) === 16785408)
    ) {
      ((C = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Qe,
      }),
        wr(e, u, C));
      var Y =
        (u & 62914560) === u ? Gu - ne()
        : (u & 4194048) === u ? kr - ne()
        : 0;
      if (((Y = Py(C, Y)), Y !== null)) {
        ((al = u),
          (t.cancelPendingCommit = Y(
            fd.bind(null, t, e, u, l, a, n, i, s, d, j, C, null, z, x),
          )),
          Al(t, u, i, !T));
        return;
      }
    }
    fd(t, e, u, l, a, n, i, s, d);
  }
  function yy(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!ce(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
        ((l.return = e), (e = l));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function Al(t, e, l, a) {
    ((e &= ~ef),
      (e &= ~ta),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes));
    for (var n = e; 0 < n; ) {
      var u = 31 - ie(n),
        i = 1 << u;
      ((a[u] = -1), (n &= ~i));
    }
    l !== 0 && ss(t, l, e);
  }
  function Zu() {
    return (rt & 6) === 0 ? (jn(0), !1) : !0;
  }
  function cf() {
    if (nt !== null) {
      if (ht === 0) var t = nt.return;
      else ((t = nt), (we = Kl = null), Ec(t), (za = null), (on = 0), (t = nt));
      for (; t !== null; ) (Mr(t.alternate, t), (t = t.return));
      nt = null;
    }
  }
  function Ua(t, e) {
    var l = t.timeoutHandle;
    (l !== -1 && ((t.timeoutHandle = -1), Hy(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      (al = 0),
      cf(),
      (St = t),
      (nt = l = Ve(t.current, null)),
      (it = e),
      (ht = 0),
      (re = null),
      (El = !1),
      (Ma = wa(t, e)),
      (tf = !1),
      (Ca = de = ef = ta = Tl = Rt = 0),
      (le = An = null),
      (lf = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - ie(a),
          u = 1 << n;
        ((e |= t[n]), (a &= ~u));
      }
    return ((ll = e), ou(), l);
  }
  function ed(t, e) {
    ((et = null),
      (O.H = pn),
      e === Ta || e === pu ? ((e = go()), (ht = 3))
      : e === oc ? ((e = go()), (ht = 4))
      : (ht =
          e === Yc ? 8
          : e !== null && typeof e == 'object' && typeof e.then == 'function' ?
            6
          : 1),
      (re = e),
      nt === null && ((Rt = 1), Cu(t, be(e, t.current))));
  }
  function ld() {
    var t = se.current;
    return (
      t === null ? !0
      : (it & 4194048) === it ? xe === null
      : (it & 62914560) === it || (it & 536870912) !== 0 ? t === xe
      : !1
    );
  }
  function ad() {
    var t = O.H;
    return ((O.H = pn), t === null ? pn : t);
  }
  function nd() {
    var t = O.A;
    return ((O.A = hy), t);
  }
  function Vu() {
    ((Rt = 4),
      El || ((it & 4194048) !== it && se.current !== null) || (Ma = !0),
      ((Tl & 134217727) === 0 && (ta & 134217727) === 0) ||
        St === null ||
        Al(St, it, de, !1));
  }
  function ff(t, e, l) {
    var a = rt;
    rt |= 2;
    var n = ad(),
      u = nd();
    ((St !== t || it !== e) && ((Qu = null), Ua(t, e)), (e = !1));
    var i = Rt;
    t: do
      try {
        if (ht !== 0 && nt !== null) {
          var s = nt,
            d = re;
          switch (ht) {
            case 8:
              (cf(), (i = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              se.current === null && (e = !0);
              var T = ht;
              if (((ht = 0), (re = null), Ha(t, s, d, T), l && Ma)) {
                i = 0;
                break t;
              }
              break;
            default:
              ((T = ht), (ht = 0), (re = null), Ha(t, s, d, T));
          }
        }
        (vy(), (i = Rt));
        break;
      } catch (j) {
        ed(t, j);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (we = Kl = null),
      (rt = a),
      (O.H = n),
      (O.A = u),
      nt === null && ((St = null), (it = 0), ou()),
      i
    );
  }
  function vy() {
    for (; nt !== null; ) ud(nt);
  }
  function gy(t, e) {
    var l = rt;
    rt |= 2;
    var a = ad(),
      n = nd();
    St !== t || it !== e ?
      ((Qu = null), (Xu = ne() + 500), Ua(t, e))
    : (Ma = wa(t, e));
    t: do
      try {
        if (ht !== 0 && nt !== null) {
          e = nt;
          var u = re;
          e: switch (ht) {
            case 1:
              ((ht = 0), (re = null), Ha(t, e, u, 1));
              break;
            case 2:
            case 9:
              if (yo(u)) {
                ((ht = 0), (re = null), id(e));
                break;
              }
              ((e = function () {
                ((ht !== 2 && ht !== 9) || St !== t || (ht = 7), Le(t));
              }),
                u.then(e, e));
              break t;
            case 3:
              ht = 7;
              break t;
            case 4:
              ht = 5;
              break t;
            case 7:
              yo(u) ?
                ((ht = 0), (re = null), id(e))
              : ((ht = 0), (re = null), Ha(t, e, u, 7));
              break;
            case 5:
              var i = null;
              switch (nt.tag) {
                case 26:
                  i = nt.memoizedState;
                case 5:
                case 27:
                  var s = nt;
                  if (i ? Kd(i) : s.stateNode.complete) {
                    ((ht = 0), (re = null));
                    var d = s.sibling;
                    if (d !== null) nt = d;
                    else {
                      var T = s.return;
                      T !== null ? ((nt = T), Ku(T)) : (nt = null);
                    }
                    break e;
                  }
              }
              ((ht = 0), (re = null), Ha(t, e, u, 5));
              break;
            case 6:
              ((ht = 0), (re = null), Ha(t, e, u, 6));
              break;
            case 8:
              (cf(), (Rt = 6));
              break t;
            default:
              throw Error(f(462));
          }
        }
        py();
        break;
      } catch (j) {
        ed(t, j);
      }
    while (!0);
    return (
      (we = Kl = null),
      (O.H = a),
      (O.A = n),
      (rt = l),
      nt !== null ? 0 : ((St = null), (it = 0), ou(), Rt)
    );
  }
  function py() {
    for (; nt !== null && !Xh(); ) ud(nt);
  }
  function ud(t) {
    var e = Rr(t.alternate, t, ll);
    ((t.memoizedProps = t.pendingProps), e === null ? Ku(t) : (nt = e));
  }
  function id(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Tr(l, e, e.pendingProps, e.type, void 0, it);
        break;
      case 11:
        e = Tr(l, e, e.pendingProps, e.type.render, e.ref, it);
        break;
      case 5:
        Ec(e);
      default:
        (Mr(l, e), (e = nt = ao(e, ll)), (e = Rr(l, e, ll)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Ku(t) : (nt = e));
  }
  function Ha(t, e, l, a) {
    ((we = Kl = null), Ec(e), (za = null), (on = 0));
    var n = e.return;
    try {
      if (iy(t, n, e, l, it)) {
        ((Rt = 1), Cu(t, be(l, t.current)), (nt = null));
        return;
      }
    } catch (u) {
      if (n !== null) throw ((nt = n), u);
      ((Rt = 1), Cu(t, be(l, t.current)), (nt = null));
      return;
    }
    e.flags & 32768 ?
      (ft || a === 1 ? (t = !0)
      : Ma || (it & 536870912) !== 0 ? (t = !1)
      : ((El = t = !0),
        (a === 2 || a === 9 || a === 3 || a === 6) &&
          ((a = se.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
      cd(e, t))
    : Ku(e);
  }
  function Ku(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        cd(e, El);
        return;
      }
      t = e.return;
      var l = sy(e.alternate, e, ll);
      if (l !== null) {
        nt = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        nt = e;
        return;
      }
      nt = e = t;
    } while (e !== null);
    Rt === 0 && (Rt = 5);
  }
  function cd(t, e) {
    do {
      var l = oy(t.alternate, t);
      if (l !== null) {
        ((l.flags &= 32767), (nt = l));
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        nt = t;
        return;
      }
      nt = t = l;
    } while (t !== null);
    ((Rt = 6), (nt = null));
  }
  function fd(t, e, l, a, n, u, i, s, d) {
    t.cancelPendingCommit = null;
    do wu();
    while (Yt !== 0);
    if ((rt & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      if (
        ((u = e.lanes | e.childLanes),
        (u |= Wi),
        Fh(t, l, u, i, s, d),
        t === St && ((nt = St = null), (it = 0)),
        (Da = e),
        (xl = t),
        (al = l),
        (af = u),
        (nf = n),
        (Fr = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ?
          ((t.callbackNode = null),
          (t.callbackPriority = 0),
          Ey($n, function () {
            return (hd(), null);
          }))
        : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = O.T), (O.T = null), (n = H.p), (H.p = 2), (i = rt), (rt |= 4));
        try {
          ry(t, e, l);
        } finally {
          ((rt = i), (H.p = n), (O.T = a));
        }
      }
      ((Yt = 1), sd(), od(), rd());
    }
  }
  function sd() {
    if (Yt === 1) {
      Yt = 0;
      var t = xl,
        e = Da,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        ((l = O.T), (O.T = null));
        var a = H.p;
        H.p = 2;
        var n = rt;
        rt |= 4;
        try {
          Zr(e, t);
          var u = Sf,
            i = $s(t.containerInfo),
            s = u.focusedElem,
            d = u.selectionRange;
          if (
            i !== s &&
            s &&
            s.ownerDocument &&
            Js(s.ownerDocument.documentElement, s)
          ) {
            if (d !== null && Vi(s)) {
              var T = d.start,
                j = d.end;
              if ((j === void 0 && (j = T), 'selectionStart' in s))
                ((s.selectionStart = T),
                  (s.selectionEnd = Math.min(j, s.value.length)));
              else {
                var C = s.ownerDocument || document,
                  z = (C && C.defaultView) || window;
                if (z.getSelection) {
                  var x = z.getSelection(),
                    Y = s.textContent.length,
                    $ = Math.min(d.start, Y),
                    pt = d.end === void 0 ? $ : Math.min(d.end, Y);
                  !x.extend && $ > pt && ((i = pt), (pt = $), ($ = i));
                  var _ = ws(s, $),
                    g = ws(s, pt);
                  if (
                    _ &&
                    g &&
                    (x.rangeCount !== 1 ||
                      x.anchorNode !== _.node ||
                      x.anchorOffset !== _.offset ||
                      x.focusNode !== g.node ||
                      x.focusOffset !== g.offset)
                  ) {
                    var E = C.createRange();
                    (E.setStart(_.node, _.offset),
                      x.removeAllRanges(),
                      $ > pt ?
                        (x.addRange(E), x.extend(g.node, g.offset))
                      : (E.setEnd(g.node, g.offset), x.addRange(E)));
                  }
                }
              }
            }
            for (C = [], x = s; (x = x.parentNode); )
              x.nodeType === 1 &&
                C.push({ element: x, left: x.scrollLeft, top: x.scrollTop });
            for (
              typeof s.focus == 'function' && s.focus(), s = 0;
              s < C.length;
              s++
            ) {
              var M = C[s];
              ((M.element.scrollLeft = M.left), (M.element.scrollTop = M.top));
            }
          }
          ((ni = !!_f), (Sf = _f = null));
        } finally {
          ((rt = n), (H.p = a), (O.T = l));
        }
      }
      ((t.current = e), (Yt = 2));
    }
  }
  function od() {
    if (Yt === 2) {
      Yt = 0;
      var t = xl,
        e = Da,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        ((l = O.T), (O.T = null));
        var a = H.p;
        H.p = 2;
        var n = rt;
        rt |= 4;
        try {
          Yr(t, e.alternate, e);
        } finally {
          ((rt = n), (H.p = a), (O.T = l));
        }
      }
      Yt = 3;
    }
  }
  function rd() {
    if (Yt === 4 || Yt === 3) {
      ((Yt = 0), Qh());
      var t = xl,
        e = Da,
        l = al,
        a = Fr;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ?
        (Yt = 5)
      : ((Yt = 0), (Da = xl = null), dd(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (
        (n === 0 && (zl = null),
        xi(l),
        (e = e.stateNode),
        ue && typeof ue.onCommitFiberRoot == 'function')
      )
        try {
          ue.onCommitFiberRoot(Ka, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((e = O.T), (n = H.p), (H.p = 2), (O.T = null));
        try {
          for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
            var s = a[i];
            u(s.value, { componentStack: s.stack });
          }
        } finally {
          ((O.T = e), (H.p = n));
        }
      }
      ((al & 3) !== 0 && wu(),
        Le(t),
        (n = t.pendingLanes),
        (l & 261930) !== 0 && (n & 42) !== 0 ?
          t === uf ?
            Nn++
          : ((Nn = 0), (uf = t))
        : (Nn = 0),
        jn(0));
    }
  }
  function dd(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), fn(e)));
  }
  function wu() {
    return (sd(), od(), rd(), hd());
  }
  function hd() {
    if (Yt !== 5) return !1;
    var t = xl,
      e = af;
    af = 0;
    var l = xi(al),
      a = O.T,
      n = H.p;
    try {
      ((H.p = 32 > l ? 32 : l), (O.T = null), (l = nf), (nf = null));
      var u = xl,
        i = al;
      if (((Yt = 0), (Da = xl = null), (al = 0), (rt & 6) !== 0))
        throw Error(f(331));
      var s = rt;
      if (
        ((rt |= 4),
        $r(u.current),
        Kr(u, u.current, i, l),
        (rt = s),
        jn(0, !1),
        ue && typeof ue.onPostCommitFiberRoot == 'function')
      )
        try {
          ue.onPostCommitFiberRoot(Ka, u);
        } catch {}
      return !0;
    } finally {
      ((H.p = n), (O.T = a), dd(t, e));
    }
  }
  function md(t, e, l) {
    ((e = be(l, e)),
      (e = qc(t.stateNode, e, 2)),
      (t = pl(t, e, 2)),
      t !== null && (Ja(t, 2), Le(t)));
  }
  function mt(t, e, l) {
    if (t.tag === 3) md(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          md(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' &&
              (zl === null || !zl.has(a)))
          ) {
            ((t = be(l, t)),
              (l = yr(2)),
              (a = pl(e, l, 2)),
              a !== null && (vr(l, a, e, t), Ja(a, 2), Le(a)));
            break;
          }
        }
        e = e.return;
      }
  }
  function sf(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new my();
      var n = new Set();
      a.set(e, n);
    } else ((n = a.get(e)), n === void 0 && ((n = new Set()), a.set(e, n)));
    n.has(l) ||
      ((tf = !0), n.add(l), (t = _y.bind(null, t, e, l)), e.then(t, t));
  }
  function _y(t, e, l) {
    var a = t.pingCache;
    (a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      St === t &&
        (it & l) === l &&
        (Rt === 4 || (Rt === 3 && (it & 62914560) === it && 300 > ne() - Gu) ?
          (rt & 2) === 0 && Ua(t, 0)
        : (ef |= l),
        Ca === it && (Ca = 0)),
      Le(t));
  }
  function yd(t, e) {
    (e === 0 && (e = fs()), (t = Ql(t, e)), t !== null && (Ja(t, e), Le(t)));
  }
  function Sy(t) {
    var e = t.memoizedState,
      l = 0;
    (e !== null && (l = e.retryLane), yd(t, l));
  }
  function by(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode,
          n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    (a !== null && a.delete(e), yd(t, l));
  }
  function Ey(t, e) {
    return bi(t, e);
  }
  var Ju = null,
    Ba = null,
    of = !1,
    $u = !1,
    rf = !1,
    Nl = 0;
  function Le(t) {
    (t !== Ba &&
      t.next === null &&
      (Ba === null ? (Ju = Ba = t) : (Ba = Ba.next = t)),
      ($u = !0),
      of || ((of = !0), zy()));
  }
  function jn(t, e) {
    if (!rf && $u) {
      rf = !0;
      do
        for (var l = !1, a = Ju; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes,
                s = a.pingedLanes;
              ((u = (1 << (31 - ie(42 | t) + 1)) - 1),
                (u &= n & ~(i & ~s)),
                (u =
                  u & 201326741 ? (u & 201326741) | 1
                  : u ? u | 2
                  : 0));
            }
            u !== 0 && ((l = !0), _d(a, u));
          } else
            ((u = it),
              (u = In(
                a,
                a === St ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || wa(a, u) || ((l = !0), _d(a, u)));
          a = a.next;
        }
      while (l);
      rf = !1;
    }
  }
  function Ty() {
    vd();
  }
  function vd() {
    $u = of = !1;
    var t = 0;
    Nl !== 0 && Uy() && (t = Nl);
    for (var e = ne(), l = null, a = Ju; a !== null; ) {
      var n = a.next,
        u = gd(a, e);
      (u === 0 ?
        ((a.next = null),
        l === null ? (Ju = n) : (l.next = n),
        n === null && (Ba = l))
      : ((l = a), (t !== 0 || (u & 3) !== 0) && ($u = !0)),
        (a = n));
    }
    ((Yt !== 0 && Yt !== 5) || jn(t), Nl !== 0 && (Nl = 0));
  }
  function gd(t, e) {
    for (
      var l = t.suspendedLanes,
        a = t.pingedLanes,
        n = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;
    ) {
      var i = 31 - ie(u),
        s = 1 << i,
        d = n[i];
      (d === -1 ?
        ((s & l) === 0 || (s & a) !== 0) && (n[i] = kh(s, e))
      : d <= e && (t.expiredLanes |= s),
        (u &= ~s));
    }
    if (
      ((e = St),
      (l = it),
      (l = In(
        t,
        t === e ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (a = t.callbackNode),
      l === 0 ||
        (t === e && (ht === 2 || ht === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Ei(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || wa(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((a !== null && Ei(a), xi(l))) {
        case 2:
        case 8:
          l = is;
          break;
        case 32:
          l = $n;
          break;
        case 268435456:
          l = cs;
          break;
        default:
          l = $n;
      }
      return (
        (a = pd.bind(null, t)),
        (l = bi(l, a)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      a !== null && a !== null && Ei(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function pd(t, e) {
    if (Yt !== 0 && Yt !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var l = t.callbackNode;
    if (wu() && t.callbackNode !== l) return null;
    var a = it;
    return (
      (a = In(
        t,
        t === St ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      a === 0 ? null : (
        (Pr(t, a, e),
        gd(t, ne()),
        t.callbackNode != null && t.callbackNode === l ?
          pd.bind(null, t)
        : null)
      )
    );
  }
  function _d(t, e) {
    if (wu()) return null;
    Pr(t, e, !0);
  }
  function zy() {
    By(function () {
      (rt & 6) !== 0 ? bi(us, Ty) : vd();
    });
  }
  function df() {
    if (Nl === 0) {
      var t = ba;
      (t === 0 && ((t = Wn), (Wn <<= 1), (Wn & 261888) === 0 && (Wn = 256)),
        (Nl = t));
    }
    return Nl;
  }
  function Sd(t) {
    return (
      t == null || typeof t == 'symbol' || typeof t == 'boolean' ? null
      : typeof t == 'function' ? t
      : lu('' + t)
    );
  }
  function bd(t, e) {
    var l = e.ownerDocument.createElement('input');
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute('form', t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function xy(t, e, l, a, n) {
    if (e === 'submit' && l && l.stateNode === n) {
      var u = Sd((n[Ft] || null).action),
        i = a.submitter;
      i &&
        ((e =
          (e = i[Ft] || null) ?
            Sd(e.formAction)
          : i.getAttribute('formAction')),
        e !== null && ((u = e), (i = null)));
      var s = new iu('action', 'action', null, a, n);
      t.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Nl !== 0) {
                  var d = i ? bd(n, i) : new FormData(n);
                  Mc(
                    l,
                    { pending: !0, data: d, method: n.method, action: u },
                    null,
                    d,
                  );
                }
              } else
                typeof u == 'function' &&
                  (s.preventDefault(),
                  (d = i ? bd(n, i) : new FormData(n)),
                  Mc(
                    l,
                    { pending: !0, data: d, method: n.method, action: u },
                    u,
                    d,
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var hf = 0; hf < $i.length; hf++) {
    var mf = $i[hf],
      Ay = mf.toLowerCase(),
      Ny = mf[0].toUpperCase() + mf.slice(1);
    Me(Ay, 'on' + Ny);
  }
  (Me(Fs, 'onAnimationEnd'),
    Me(Is, 'onAnimationIteration'),
    Me(Ps, 'onAnimationStart'),
    Me('dblclick', 'onDoubleClick'),
    Me('focusin', 'onFocus'),
    Me('focusout', 'onBlur'),
    Me(Zm, 'onTransitionRun'),
    Me(Vm, 'onTransitionStart'),
    Me(Km, 'onTransitionCancel'),
    Me(to, 'onTransitionEnd'),
    ca('onMouseEnter', ['mouseout', 'mouseover']),
    ca('onMouseLeave', ['mouseout', 'mouseover']),
    ca('onPointerEnter', ['pointerout', 'pointerover']),
    ca('onPointerLeave', ['pointerout', 'pointerover']),
    Yl(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' ',
      ),
    ),
    Yl(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    Yl('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Yl(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Yl(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Yl(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    ));
  var Rn =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    jy = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'
        .split(' ')
        .concat(Rn),
    );
  function Ed(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l],
        n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var i = a.length - 1; 0 <= i; i--) {
            var s = a[i],
              d = s.instance,
              T = s.currentTarget;
            if (((s = s.listener), d !== u && n.isPropagationStopped()))
              break t;
            ((u = s), (n.currentTarget = T));
            try {
              u(n);
            } catch (j) {
              su(j);
            }
            ((n.currentTarget = null), (u = d));
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((s = a[i]),
              (d = s.instance),
              (T = s.currentTarget),
              (s = s.listener),
              d !== u && n.isPropagationStopped())
            )
              break t;
            ((u = s), (n.currentTarget = T));
            try {
              u(n);
            } catch (j) {
              su(j);
            }
            ((n.currentTarget = null), (u = d));
          }
      }
    }
  }
  function ut(t, e) {
    var l = e[Ai];
    l === void 0 && (l = e[Ai] = new Set());
    var a = t + '__bubble';
    l.has(a) || (Td(e, t, 2, !1), l.add(a));
  }
  function yf(t, e, l) {
    var a = 0;
    (e && (a |= 4), Td(l, t, a, e));
  }
  var Wu = '_reactListening' + Math.random().toString(36).slice(2);
  function vf(t) {
    if (!t[Wu]) {
      ((t[Wu] = !0),
        ys.forEach(function (l) {
          l !== 'selectionchange' && (jy.has(l) || yf(l, !1, t), yf(l, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Wu] || ((e[Wu] = !0), yf('selectionchange', !1, e));
    }
  }
  function Td(t, e, l, a) {
    switch (Id(e)) {
      case 2:
        var n = lv;
        break;
      case 8:
        n = av;
        break;
      default:
        n = Mf;
    }
    ((l = n.bind(null, e, l, t)),
      (n = void 0),
      !Hi ||
        (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') ||
        (n = !0),
      a ?
        n !== void 0 ?
          t.addEventListener(e, l, { capture: !0, passive: n })
        : t.addEventListener(e, l, !0)
      : n !== void 0 ? t.addEventListener(e, l, { passive: n })
      : t.addEventListener(e, l, !1));
  }
  function gf(t, e, l, a, n) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var d = i.tag;
              if ((d === 3 || d === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; s !== null; ) {
            if (((i = na(s)), i === null)) return;
            if (((d = i.tag), d === 5 || d === 6 || d === 26 || d === 27)) {
              a = u = i;
              continue t;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    Ns(function () {
      var T = u,
        j = Di(l),
        C = [];
      t: {
        var z = eo.get(t);
        if (z !== void 0) {
          var x = iu,
            Y = t;
          switch (t) {
            case 'keypress':
              if (nu(l) === 0) break t;
            case 'keydown':
            case 'keyup':
              x = bm;
              break;
            case 'focusin':
              ((Y = 'focus'), (x = Li));
              break;
            case 'focusout':
              ((Y = 'blur'), (x = Li));
              break;
            case 'beforeblur':
            case 'afterblur':
              x = Li;
              break;
            case 'click':
              if (l.button === 2) break t;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              x = Os;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              x = sm;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              x = zm;
              break;
            case Fs:
            case Is:
            case Ps:
              x = dm;
              break;
            case to:
              x = Am;
              break;
            case 'scroll':
            case 'scrollend':
              x = cm;
              break;
            case 'wheel':
              x = jm;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              x = mm;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              x = Cs;
              break;
            case 'toggle':
            case 'beforetoggle':
              x = Om;
          }
          var $ = (e & 4) !== 0,
            pt = !$ && (t === 'scroll' || t === 'scrollend'),
            _ =
              $ ?
                z !== null ?
                  z + 'Capture'
                : null
              : z;
          $ = [];
          for (var g = T, E; g !== null; ) {
            var M = g;
            if (
              ((E = M.stateNode),
              (M = M.tag),
              (M !== 5 && M !== 26 && M !== 27) ||
                E === null ||
                _ === null ||
                ((M = ka(g, _)), M != null && $.push(On(g, M, E))),
              pt)
            )
              break;
            g = g.return;
          }
          0 < $.length &&
            ((z = new x(z, Y, null, l, j)), C.push({ event: z, listeners: $ }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((z = t === 'mouseover' || t === 'pointerover'),
            (x = t === 'mouseout' || t === 'pointerout'),
            z &&
              l !== Ci &&
              (Y = l.relatedTarget || l.fromElement) &&
              (na(Y) || Y[aa]))
          )
            break t;
          if (
            (x || z) &&
            ((z =
              j.window === j ? j
              : (z = j.ownerDocument) ? z.defaultView || z.parentWindow
              : window),
            x ?
              ((Y = l.relatedTarget || l.toElement),
              (x = T),
              (Y = Y ? na(Y) : null),
              Y !== null &&
                ((pt = y(Y)),
                ($ = Y.tag),
                Y !== pt || ($ !== 5 && $ !== 27 && $ !== 6)) &&
                (Y = null))
            : ((x = null), (Y = T)),
            x !== Y)
          ) {
            if (
              (($ = Os),
              (M = 'onMouseLeave'),
              (_ = 'onMouseEnter'),
              (g = 'mouse'),
              (t === 'pointerout' || t === 'pointerover') &&
                (($ = Cs),
                (M = 'onPointerLeave'),
                (_ = 'onPointerEnter'),
                (g = 'pointer')),
              (pt = x == null ? z : Wa(x)),
              (E = Y == null ? z : Wa(Y)),
              (z = new $(M, g + 'leave', x, l, j)),
              (z.target = pt),
              (z.relatedTarget = E),
              (M = null),
              na(j) === T &&
                (($ = new $(_, g + 'enter', Y, l, j)),
                ($.target = E),
                ($.relatedTarget = pt),
                (M = $)),
              (pt = M),
              x && Y)
            )
              e: {
                for ($ = Ry, _ = x, g = Y, E = 0, M = _; M; M = $(M)) E++;
                M = 0;
                for (var K = g; K; K = $(K)) M++;
                for (; 0 < E - M; ) ((_ = $(_)), E--);
                for (; 0 < M - E; ) ((g = $(g)), M--);
                for (; E--; ) {
                  if (_ === g || (g !== null && _ === g.alternate)) {
                    $ = _;
                    break e;
                  }
                  ((_ = $(_)), (g = $(g)));
                }
                $ = null;
              }
            else $ = null;
            (x !== null && zd(C, z, x, $, !1),
              Y !== null && pt !== null && zd(C, pt, Y, $, !0));
          }
        }
        t: {
          if (
            ((z = T ? Wa(T) : window),
            (x = z.nodeName && z.nodeName.toLowerCase()),
            x === 'select' || (x === 'input' && z.type === 'file'))
          )
            var st = Gs;
          else if (Ys(z))
            if (Xs) st = Gm;
            else {
              st = Ym;
              var Q = qm;
            }
          else
            ((x = z.nodeName),
              (
                !x ||
                x.toLowerCase() !== 'input' ||
                (z.type !== 'checkbox' && z.type !== 'radio')
              ) ?
                T && Mi(T.elementType) && (st = Gs)
              : (st = Lm));
          if (st && (st = st(t, T))) {
            Ls(C, st, l, j);
            break t;
          }
          (Q && Q(t, z, T),
            t === 'focusout' &&
              T &&
              z.type === 'number' &&
              T.memoizedProps.value != null &&
              Oi(z, 'number', z.value));
        }
        switch (((Q = T ? Wa(T) : window), t)) {
          case 'focusin':
            (Ys(Q) || Q.contentEditable === 'true') &&
              ((ha = Q), (Ki = T), (nn = null));
            break;
          case 'focusout':
            nn = Ki = ha = null;
            break;
          case 'mousedown':
            wi = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((wi = !1), Ws(C, l, j));
            break;
          case 'selectionchange':
            if (Qm) break;
          case 'keydown':
          case 'keyup':
            Ws(C, l, j);
        }
        var lt;
        if (Xi)
          t: {
            switch (t) {
              case 'compositionstart':
                var ct = 'onCompositionStart';
                break t;
              case 'compositionend':
                ct = 'onCompositionEnd';
                break t;
              case 'compositionupdate':
                ct = 'onCompositionUpdate';
                break t;
            }
            ct = void 0;
          }
        else
          da ?
            Bs(t, l) && (ct = 'onCompositionEnd')
          : t === 'keydown' && l.keyCode === 229 && (ct = 'onCompositionStart');
        (ct &&
          (Ds &&
            l.locale !== 'ko' &&
            (da || ct !== 'onCompositionStart' ?
              ct === 'onCompositionEnd' && da && (lt = js())
            : ((rl = j),
              (Bi = 'value' in rl ? rl.value : rl.textContent),
              (da = !0))),
          (Q = ku(T, ct)),
          0 < Q.length &&
            ((ct = new Ms(ct, t, null, l, j)),
            C.push({ event: ct, listeners: Q }),
            lt ?
              (ct.data = lt)
            : ((lt = qs(l)), lt !== null && (ct.data = lt)))),
          (lt = Cm ? Dm(t, l) : Um(t, l)) &&
            ((ct = ku(T, 'onBeforeInput')),
            0 < ct.length &&
              ((Q = new Ms('onBeforeInput', 'beforeinput', null, l, j)),
              C.push({ event: Q, listeners: ct }),
              (Q.data = lt))),
          xy(C, t, T, l, j));
      }
      Ed(C, e);
    });
  }
  function On(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function ku(t, e) {
    for (var l = e + 'Capture', a = []; t !== null; ) {
      var n = t,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = ka(t, l)),
          n != null && a.unshift(On(t, n, u)),
          (n = ka(t, e)),
          n != null && a.push(On(t, n, u))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function Ry(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function zd(t, e, l, a, n) {
    for (var u = e._reactName, i = []; l !== null && l !== a; ) {
      var s = l,
        d = s.alternate,
        T = s.stateNode;
      if (((s = s.tag), d !== null && d === a)) break;
      ((s !== 5 && s !== 26 && s !== 27) ||
        T === null ||
        ((d = T),
        n ?
          ((T = ka(l, u)), T != null && i.unshift(On(l, T, d)))
        : n || ((T = ka(l, u)), T != null && i.push(On(l, T, d)))),
        (l = l.return));
    }
    i.length !== 0 && t.push({ event: e, listeners: i });
  }
  var Oy = /\r\n?/g,
    My = /\u0000|\uFFFD/g;
  function xd(t) {
    return (typeof t == 'string' ? t : '' + t)
      .replace(
        Oy,
        `
`,
      )
      .replace(My, '');
  }
  function Ad(t, e) {
    return ((e = xd(e)), xd(t) === e);
  }
  function gt(t, e, l, a, n, u) {
    switch (l) {
      case 'children':
        typeof a == 'string' ?
          e === 'body' || (e === 'textarea' && a === '') || sa(t, a)
        : (typeof a == 'number' || typeof a == 'bigint') &&
          e !== 'body' &&
          sa(t, '' + a);
        break;
      case 'className':
        tu(t, 'class', a);
        break;
      case 'tabIndex':
        tu(t, 'tabindex', a);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        tu(t, l, a);
        break;
      case 'style':
        xs(t, a, u);
        break;
      case 'data':
        if (e !== 'object') {
          tu(t, 'data', a);
          break;
        }
      case 'src':
      case 'href':
        if (a === '' && (e !== 'a' || l !== 'href')) {
          t.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == 'function' ||
          typeof a == 'symbol' ||
          typeof a == 'boolean'
        ) {
          t.removeAttribute(l);
          break;
        }
        ((a = lu('' + a)), t.setAttribute(l, a));
        break;
      case 'action':
      case 'formAction':
        if (typeof a == 'function') {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == 'function' &&
            (l === 'formAction' ?
              (e !== 'input' && gt(t, e, 'name', n.name, n, null),
              gt(t, e, 'formEncType', n.formEncType, n, null),
              gt(t, e, 'formMethod', n.formMethod, n, null),
              gt(t, e, 'formTarget', n.formTarget, n, null))
            : (gt(t, e, 'encType', n.encType, n, null),
              gt(t, e, 'method', n.method, n, null),
              gt(t, e, 'target', n.target, n, null)));
        if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
          t.removeAttribute(l);
          break;
        }
        ((a = lu('' + a)), t.setAttribute(l, a));
        break;
      case 'onClick':
        a != null && (t.onclick = Qe);
        break;
      case 'onScroll':
        a != null && ut('scroll', t);
        break;
      case 'onScrollEnd':
        a != null && ut('scrollend', t);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case 'multiple':
        t.multiple = a && typeof a != 'function' && typeof a != 'symbol';
        break;
      case 'muted':
        t.muted = a && typeof a != 'function' && typeof a != 'symbol';
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
          t.removeAttribute('xlink:href');
          break;
        }
        ((l = lu('' + a)),
          t.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l));
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
          t.setAttribute(l, '' + a)
        : t.removeAttribute(l);
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
          t.setAttribute(l, '')
        : t.removeAttribute(l);
        break;
      case 'capture':
      case 'download':
        a === !0 ? t.setAttribute(l, '')
        : (
          a !== !1 &&
          a != null &&
          typeof a != 'function' &&
          typeof a != 'symbol'
        ) ?
          t.setAttribute(l, a)
        : t.removeAttribute(l);
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
          t.setAttribute(l, a)
        : t.removeAttribute(l);
        break;
      case 'rowSpan':
      case 'start':
        (
          a == null ||
          typeof a == 'function' ||
          typeof a == 'symbol' ||
          isNaN(a)
        ) ?
          t.removeAttribute(l)
        : t.setAttribute(l, a);
        break;
      case 'popover':
        (ut('beforetoggle', t), ut('toggle', t), Pn(t, 'popover', a));
        break;
      case 'xlinkActuate':
        Xe(t, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
        break;
      case 'xlinkArcrole':
        Xe(t, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
        break;
      case 'xlinkRole':
        Xe(t, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
        break;
      case 'xlinkShow':
        Xe(t, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
        break;
      case 'xlinkTitle':
        Xe(t, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
        break;
      case 'xlinkType':
        Xe(t, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
        break;
      case 'xmlBase':
        Xe(t, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
        break;
      case 'xmlLang':
        Xe(t, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
        break;
      case 'xmlSpace':
        Xe(t, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
        break;
      case 'is':
        Pn(t, 'is', a);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== 'o' && l[0] !== 'O') ||
          (l[1] !== 'n' && l[1] !== 'N')) &&
          ((l = um.get(l) || l), Pn(t, l, a));
    }
  }
  function pf(t, e, l, a, n, u) {
    switch (l) {
      case 'style':
        xs(t, a, u);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case 'children':
        typeof a == 'string' ?
          sa(t, a)
        : (typeof a == 'number' || typeof a == 'bigint') && sa(t, '' + a);
        break;
      case 'onScroll':
        a != null && ut('scroll', t);
        break;
      case 'onScrollEnd':
        a != null && ut('scrollend', t);
        break;
      case 'onClick':
        a != null && (t.onclick = Qe);
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
        if (!vs.hasOwnProperty(l))
          t: {
            if (
              l[0] === 'o' &&
              l[1] === 'n' &&
              ((n = l.endsWith('Capture')),
              (e = l.slice(2, n ? l.length - 7 : void 0)),
              (u = t[Ft] || null),
              (u = u != null ? u[l] : null),
              typeof u == 'function' && t.removeEventListener(e, u, n),
              typeof a == 'function')
            ) {
              (typeof u != 'function' &&
                u !== null &&
                (l in t ?
                  (t[l] = null)
                : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, a, n));
              break t;
            }
            l in t ? (t[l] = a)
            : a === !0 ? t.setAttribute(l, '')
            : Pn(t, l, a);
          }
    }
  }
  function wt(t, e, l) {
    switch (e) {
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
        (ut('error', t), ut('load', t));
        var a = !1,
          n = !1,
          u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var i = l[u];
            if (i != null)
              switch (u) {
                case 'src':
                  a = !0;
                  break;
                case 'srcSet':
                  n = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(f(137, e));
                default:
                  gt(t, e, u, i, l, null);
              }
          }
        (n && gt(t, e, 'srcSet', l.srcSet, l, null),
          a && gt(t, e, 'src', l.src, l, null));
        return;
      case 'input':
        ut('invalid', t);
        var s = (u = i = n = null),
          d = null,
          T = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var j = l[a];
            if (j != null)
              switch (a) {
                case 'name':
                  n = j;
                  break;
                case 'type':
                  i = j;
                  break;
                case 'checked':
                  d = j;
                  break;
                case 'defaultChecked':
                  T = j;
                  break;
                case 'value':
                  u = j;
                  break;
                case 'defaultValue':
                  s = j;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (j != null) throw Error(f(137, e));
                  break;
                default:
                  gt(t, e, a, j, l, null);
              }
          }
        bs(t, u, s, d, T, i, n, !1);
        return;
      case 'select':
        (ut('invalid', t), (a = i = u = null));
        for (n in l)
          if (l.hasOwnProperty(n) && ((s = l[n]), s != null))
            switch (n) {
              case 'value':
                u = s;
                break;
              case 'defaultValue':
                i = s;
                break;
              case 'multiple':
                a = s;
              default:
                gt(t, e, n, s, l, null);
            }
        ((e = u),
          (l = i),
          (t.multiple = !!a),
          e != null ? fa(t, !!a, e, !1) : l != null && fa(t, !!a, l, !0));
        return;
      case 'textarea':
        (ut('invalid', t), (u = n = a = null));
        for (i in l)
          if (l.hasOwnProperty(i) && ((s = l[i]), s != null))
            switch (i) {
              case 'value':
                a = s;
                break;
              case 'defaultValue':
                n = s;
                break;
              case 'children':
                u = s;
                break;
              case 'dangerouslySetInnerHTML':
                if (s != null) throw Error(f(91));
                break;
              default:
                gt(t, e, i, s, l, null);
            }
        Ts(t, a, n, u);
        return;
      case 'option':
        for (d in l)
          l.hasOwnProperty(d) &&
            ((a = l[d]), a != null) &&
            (d === 'selected' ?
              (t.selected = a && typeof a != 'function' && typeof a != 'symbol')
            : gt(t, e, d, a, l, null));
        return;
      case 'dialog':
        (ut('beforetoggle', t),
          ut('toggle', t),
          ut('cancel', t),
          ut('close', t));
        break;
      case 'iframe':
      case 'object':
        ut('load', t);
        break;
      case 'video':
      case 'audio':
        for (a = 0; a < Rn.length; a++) ut(Rn[a], t);
        break;
      case 'image':
        (ut('error', t), ut('load', t));
        break;
      case 'details':
        ut('toggle', t);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (ut('error', t), ut('load', t));
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
                throw Error(f(137, e));
              default:
                gt(t, e, T, a, l, null);
            }
        return;
      default:
        if (Mi(e)) {
          for (j in l)
            l.hasOwnProperty(j) &&
              ((a = l[j]), a !== void 0 && pf(t, e, j, a, l, void 0));
          return;
        }
    }
    for (s in l)
      l.hasOwnProperty(s) && ((a = l[s]), a != null && gt(t, e, s, a, l, null));
  }
  function Cy(t, e, l, a) {
    switch (e) {
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
          i = null,
          s = null,
          d = null,
          T = null,
          j = null;
        for (x in l) {
          var C = l[x];
          if (l.hasOwnProperty(x) && C != null)
            switch (x) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                d = C;
              default:
                a.hasOwnProperty(x) || gt(t, e, x, null, a, C);
            }
        }
        for (var z in a) {
          var x = a[z];
          if (((C = l[z]), a.hasOwnProperty(z) && (x != null || C != null)))
            switch (z) {
              case 'type':
                u = x;
                break;
              case 'name':
                n = x;
                break;
              case 'checked':
                T = x;
                break;
              case 'defaultChecked':
                j = x;
                break;
              case 'value':
                i = x;
                break;
              case 'defaultValue':
                s = x;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (x != null) throw Error(f(137, e));
                break;
              default:
                x !== C && gt(t, e, z, x, a, C);
            }
        }
        Ri(t, i, s, d, T, j, u, n);
        return;
      case 'select':
        x = i = s = z = null;
        for (u in l)
          if (((d = l[u]), l.hasOwnProperty(u) && d != null))
            switch (u) {
              case 'value':
                break;
              case 'multiple':
                x = d;
              default:
                a.hasOwnProperty(u) || gt(t, e, u, null, a, d);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (d = l[n]),
            a.hasOwnProperty(n) && (u != null || d != null))
          )
            switch (n) {
              case 'value':
                z = u;
                break;
              case 'defaultValue':
                s = u;
                break;
              case 'multiple':
                i = u;
              default:
                u !== d && gt(t, e, n, u, a, d);
            }
        ((e = s),
          (l = i),
          (a = x),
          z != null ?
            fa(t, !!l, z, !1)
          : !!a != !!l &&
            (e != null ? fa(t, !!l, e, !0) : fa(t, !!l, l ? [] : '', !1)));
        return;
      case 'textarea':
        x = z = null;
        for (s in l)
          if (
            ((n = l[s]),
            l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
          )
            switch (s) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                gt(t, e, s, null, a, n);
            }
        for (i in a)
          if (
            ((n = a[i]),
            (u = l[i]),
            a.hasOwnProperty(i) && (n != null || u != null))
          )
            switch (i) {
              case 'value':
                z = n;
                break;
              case 'defaultValue':
                x = n;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (n != null) throw Error(f(91));
                break;
              default:
                n !== u && gt(t, e, i, n, a, u);
            }
        Es(t, z, x);
        return;
      case 'option':
        for (var Y in l)
          ((z = l[Y]),
            l.hasOwnProperty(Y) &&
              z != null &&
              !a.hasOwnProperty(Y) &&
              (Y === 'selected' ? (t.selected = !1) : gt(t, e, Y, null, a, z)));
        for (d in a)
          ((z = a[d]),
            (x = l[d]),
            a.hasOwnProperty(d) &&
              z !== x &&
              (z != null || x != null) &&
              (d === 'selected' ?
                (t.selected =
                  z && typeof z != 'function' && typeof z != 'symbol')
              : gt(t, e, d, z, a, x)));
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
              gt(t, e, $, null, a, z));
        for (T in a)
          if (
            ((z = a[T]),
            (x = l[T]),
            a.hasOwnProperty(T) && z !== x && (z != null || x != null))
          )
            switch (T) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (z != null) throw Error(f(137, e));
                break;
              default:
                gt(t, e, T, z, a, x);
            }
        return;
      default:
        if (Mi(e)) {
          for (var pt in l)
            ((z = l[pt]),
              l.hasOwnProperty(pt) &&
                z !== void 0 &&
                !a.hasOwnProperty(pt) &&
                pf(t, e, pt, void 0, a, z));
          for (j in a)
            ((z = a[j]),
              (x = l[j]),
              !a.hasOwnProperty(j) ||
                z === x ||
                (z === void 0 && x === void 0) ||
                pf(t, e, j, z, a, x));
          return;
        }
    }
    for (var _ in l)
      ((z = l[_]),
        l.hasOwnProperty(_) &&
          z != null &&
          !a.hasOwnProperty(_) &&
          gt(t, e, _, null, a, z));
    for (C in a)
      ((z = a[C]),
        (x = l[C]),
        !a.hasOwnProperty(C) ||
          z === x ||
          (z == null && x == null) ||
          gt(t, e, C, z, a, x));
  }
  function Nd(t) {
    switch (t) {
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
  function Dy() {
    if (typeof performance.getEntriesByType == 'function') {
      for (
        var t = 0, e = 0, l = performance.getEntriesByType('resource'), a = 0;
        a < l.length;
        a++
      ) {
        var n = l[a],
          u = n.transferSize,
          i = n.initiatorType,
          s = n.duration;
        if (u && s && Nd(i)) {
          for (i = 0, s = n.responseEnd, a += 1; a < l.length; a++) {
            var d = l[a],
              T = d.startTime;
            if (T > s) break;
            var j = d.transferSize,
              C = d.initiatorType;
            j &&
              Nd(C) &&
              ((d = d.responseEnd), (i += j * (d < s ? 1 : (s - T) / (d - T))));
          }
          if ((--a, (e += (8 * (u + i)) / (n.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return (
        navigator.connection &&
          ((t = navigator.connection.downlink), typeof t == 'number')
      ) ?
        t
      : 5;
  }
  var _f = null,
    Sf = null;
  function Fu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function jd(t) {
    switch (t) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Rd(t, e) {
    if (t === 0)
      switch (e) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === 'foreignObject' ? 0 : t;
  }
  function bf(t, e) {
    return (
      t === 'textarea' ||
      t === 'noscript' ||
      typeof e.children == 'string' ||
      typeof e.children == 'number' ||
      typeof e.children == 'bigint' ||
      (typeof e.dangerouslySetInnerHTML == 'object' &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ef = null;
  function Uy() {
    var t = window.event;
    return (
      t && t.type === 'popstate' ?
        t === Ef ?
          !1
        : ((Ef = t), !0)
      : ((Ef = null), !1)
    );
  }
  var Od = typeof setTimeout == 'function' ? setTimeout : void 0,
    Hy = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Md = typeof Promise == 'function' ? Promise : void 0,
    By =
      typeof queueMicrotask == 'function' ? queueMicrotask
      : typeof Md < 'u' ?
        function (t) {
          return Md.resolve(null).then(t).catch(qy);
        }
      : Od;
  function qy(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function jl(t) {
    return t === 'head';
  }
  function Cd(t, e) {
    var l = e,
      a = 0;
    do {
      var n = l.nextSibling;
      if ((t.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === '/$' || l === '/&')) {
          if (a === 0) {
            (t.removeChild(n), Ga(e));
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
        else if (l === 'html') Mn(t.ownerDocument.documentElement);
        else if (l === 'head') {
          ((l = t.ownerDocument.head), Mn(l));
          for (var u = l.firstChild; u; ) {
            var i = u.nextSibling,
              s = u.nodeName;
            (u[$a] ||
              s === 'SCRIPT' ||
              s === 'STYLE' ||
              (s === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
              l.removeChild(u),
              (u = i));
          }
        } else l === 'body' && Mn(t.ownerDocument.body);
      l = n;
    } while (l);
    Ga(e);
  }
  function Dd(t, e) {
    var l = t;
    t = 0;
    do {
      var a = l.nextSibling;
      if (
        (l.nodeType === 1 ?
          e ?
            ((l._stashedDisplay = l.style.display), (l.style.display = 'none'))
          : ((l.style.display = l._stashedDisplay || ''),
            l.getAttribute('style') === '' && l.removeAttribute('style'))
        : l.nodeType === 3 &&
          (e ?
            ((l._stashedText = l.nodeValue), (l.nodeValue = ''))
          : (l.nodeValue = l._stashedText || '')),
        a && a.nodeType === 8)
      )
        if (((l = a.data), l === '/$')) {
          if (t === 0) break;
          t--;
        } else (l !== '$' && l !== '$?' && l !== '$~' && l !== '$!') || t++;
      l = a;
    } while (l);
  }
  function Tf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (Tf(l), Ni(l));
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (l.rel.toLowerCase() === 'stylesheet') continue;
      }
      t.removeChild(l);
    }
  }
  function Yy(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== 'INPUT' || t.type !== 'hidden')) break;
      } else if (a) {
        if (!t[$a])
          switch (e) {
            case 'meta':
              if (!t.hasAttribute('itemprop')) break;
              return t;
            case 'link':
              if (
                ((u = t.getAttribute('rel')),
                u === 'stylesheet' && t.hasAttribute('data-precedence'))
              )
                break;
              if (
                u !== n.rel ||
                t.getAttribute('href') !==
                  (n.href == null || n.href === '' ? null : n.href) ||
                t.getAttribute('crossorigin') !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                t.getAttribute('title') !== (n.title == null ? null : n.title)
              )
                break;
              return t;
            case 'style':
              if (t.hasAttribute('data-precedence')) break;
              return t;
            case 'script':
              if (
                ((u = t.getAttribute('src')),
                (u !== (n.src == null ? null : n.src) ||
                  t.getAttribute('type') !== (n.type == null ? null : n.type) ||
                  t.getAttribute('crossorigin') !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  t.hasAttribute('async') &&
                  !t.hasAttribute('itemprop'))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === 'input' && t.type === 'hidden') {
        var u = n.name == null ? null : '' + n.name;
        if (n.type === 'hidden' && t.getAttribute('name') === u) return t;
      } else return t;
      if (((t = Ae(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Ly(t, e, l) {
    if (e === '') return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') &&
          !l) ||
        ((t = Ae(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Ud(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') &&
          !e) ||
        ((t = Ae(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function zf(t) {
    return t.data === '$?' || t.data === '$~';
  }
  function xf(t) {
    return (
      t.data === '$!' ||
      (t.data === '$?' && t.ownerDocument.readyState !== 'loading')
    );
  }
  function Gy(t, e) {
    var l = t.ownerDocument;
    if (t.data === '$~') t._reactRetry = e;
    else if (t.data !== '$?' || l.readyState !== 'loading') e();
    else {
      var a = function () {
        (e(), l.removeEventListener('DOMContentLoaded', a));
      };
      (l.addEventListener('DOMContentLoaded', a), (t._reactRetry = a));
    }
  }
  function Ae(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === '$' ||
            e === '$!' ||
            e === '$?' ||
            e === '$~' ||
            e === '&' ||
            e === 'F!' ||
            e === 'F')
        )
          break;
        if (e === '/$' || e === '/&') return null;
      }
    }
    return t;
  }
  var Af = null;
  function Hd(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === '/$' || l === '/&') {
          if (e === 0) return Ae(t.nextSibling);
          e--;
        } else
          (l !== '$' && l !== '$!' && l !== '$?' && l !== '$~' && l !== '&') ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Bd(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === '$' || l === '$!' || l === '$?' || l === '$~' || l === '&') {
          if (e === 0) return t;
          e--;
        } else (l !== '/$' && l !== '/&') || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function qd(t, e, l) {
    switch (((e = Fu(l)), t)) {
      case 'html':
        if (((t = e.documentElement), !t)) throw Error(f(452));
        return t;
      case 'head':
        if (((t = e.head), !t)) throw Error(f(453));
        return t;
      case 'body':
        if (((t = e.body), !t)) throw Error(f(454));
        return t;
      default:
        throw Error(f(451));
    }
  }
  function Mn(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Ni(t);
  }
  var Ne = new Map(),
    Yd = new Set();
  function Iu(t) {
    return (
      typeof t.getRootNode == 'function' ? t.getRootNode()
      : t.nodeType === 9 ? t
      : t.ownerDocument
    );
  }
  var nl = H.d;
  H.d = { f: Xy, r: Qy, D: Zy, C: Vy, L: Ky, m: wy, X: $y, S: Jy, M: Wy };
  function Xy() {
    var t = nl.f(),
      e = Zu();
    return t || e;
  }
  function Qy(t) {
    var e = ua(t);
    e !== null && e.tag === 5 && e.type === 'form' ? er(e) : nl.r(t);
  }
  var qa = typeof document > 'u' ? null : document;
  function Ld(t, e, l) {
    var a = qa;
    if (a && typeof e == 'string' && e) {
      var n = _e(e);
      ((n = 'link[rel="' + t + '"][href="' + n + '"]'),
        typeof l == 'string' && (n += '[crossorigin="' + l + '"]'),
        Yd.has(n) ||
          (Yd.add(n),
          (t = { rel: t, crossOrigin: l, href: e }),
          a.querySelector(n) === null &&
            ((e = a.createElement('link')),
            wt(e, 'link', t),
            Lt(e),
            a.head.appendChild(e))));
    }
  }
  function Zy(t) {
    (nl.D(t), Ld('dns-prefetch', t, null));
  }
  function Vy(t, e) {
    (nl.C(t, e), Ld('preconnect', t, e));
  }
  function Ky(t, e, l) {
    nl.L(t, e, l);
    var a = qa;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + _e(e) + '"]';
      e === 'image' && l && l.imageSrcSet ?
        ((n += '[imagesrcset="' + _e(l.imageSrcSet) + '"]'),
        typeof l.imageSizes == 'string' &&
          (n += '[imagesizes="' + _e(l.imageSizes) + '"]'))
      : (n += '[href="' + _e(t) + '"]');
      var u = n;
      switch (e) {
        case 'style':
          u = Ya(t);
          break;
        case 'script':
          u = La(t);
      }
      Ne.has(u) ||
        ((t = A(
          {
            rel: 'preload',
            href: e === 'image' && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l,
        )),
        Ne.set(u, t),
        a.querySelector(n) !== null ||
          (e === 'style' && a.querySelector(Cn(u))) ||
          (e === 'script' && a.querySelector(Dn(u))) ||
          ((e = a.createElement('link')),
          wt(e, 'link', t),
          Lt(e),
          a.head.appendChild(e)));
    }
  }
  function wy(t, e) {
    nl.m(t, e);
    var l = qa;
    if (l && t) {
      var a = e && typeof e.as == 'string' ? e.as : 'script',
        n =
          'link[rel="modulepreload"][as="' + _e(a) + '"][href="' + _e(t) + '"]',
        u = n;
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = La(t);
      }
      if (
        !Ne.has(u) &&
        ((t = A({ rel: 'modulepreload', href: t }, e)),
        Ne.set(u, t),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (l.querySelector(Dn(u))) return;
        }
        ((a = l.createElement('link')),
          wt(a, 'link', t),
          Lt(a),
          l.head.appendChild(a));
      }
    }
  }
  function Jy(t, e, l) {
    nl.S(t, e, l);
    var a = qa;
    if (a && t) {
      var n = ia(a).hoistableStyles,
        u = Ya(t);
      e = e || 'default';
      var i = n.get(u);
      if (!i) {
        var s = { loading: 0, preload: null };
        if ((i = a.querySelector(Cn(u)))) s.loading = 5;
        else {
          ((t = A({ 'rel': 'stylesheet', 'href': t, 'data-precedence': e }, l)),
            (l = Ne.get(u)) && Nf(t, l));
          var d = (i = a.createElement('link'));
          (Lt(d),
            wt(d, 'link', t),
            (d._p = new Promise(function (T, j) {
              ((d.onload = T), (d.onerror = j));
            })),
            d.addEventListener('load', function () {
              s.loading |= 1;
            }),
            d.addEventListener('error', function () {
              s.loading |= 2;
            }),
            (s.loading |= 4),
            Pu(i, e, a));
        }
        ((i = { type: 'stylesheet', instance: i, count: 1, state: s }),
          n.set(u, i));
      }
    }
  }
  function $y(t, e) {
    nl.X(t, e);
    var l = qa;
    if (l && t) {
      var a = ia(l).hoistableScripts,
        n = La(t),
        u = a.get(n);
      u ||
        ((u = l.querySelector(Dn(n))),
        u ||
          ((t = A({ src: t, async: !0 }, e)),
          (e = Ne.get(n)) && jf(t, e),
          (u = l.createElement('script')),
          Lt(u),
          wt(u, 'link', t),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function Wy(t, e) {
    nl.M(t, e);
    var l = qa;
    if (l && t) {
      var a = ia(l).hoistableScripts,
        n = La(t),
        u = a.get(n);
      u ||
        ((u = l.querySelector(Dn(n))),
        u ||
          ((t = A({ src: t, async: !0, type: 'module' }, e)),
          (e = Ne.get(n)) && jf(t, e),
          (u = l.createElement('script')),
          Lt(u),
          wt(u, 'link', t),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function Gd(t, e, l, a) {
    var n = (n = at.current) ? Iu(n) : null;
    if (!n) throw Error(f(446));
    switch (t) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof l.precedence == 'string' && typeof l.href == 'string' ?
            ((e = Ya(l.href)),
            (l = ia(n).hoistableStyles),
            (a = l.get(e)),
            a ||
              ((a = { type: 'style', instance: null, count: 0, state: null }),
              l.set(e, a)),
            a)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          l.rel === 'stylesheet' &&
          typeof l.href == 'string' &&
          typeof l.precedence == 'string'
        ) {
          t = Ya(l.href);
          var u = ia(n).hoistableStyles,
            i = u.get(t);
          if (
            (i ||
              ((n = n.ownerDocument || n),
              (i = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(t, i),
              (u = n.querySelector(Cn(t))) &&
                !u._p &&
                ((i.instance = u), (i.state.loading = 5)),
              Ne.has(t) ||
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
                Ne.set(t, l),
                u || ky(n, t, l, i.state))),
            e && a === null)
          )
            throw Error(f(528, ''));
          return i;
        }
        if (e && a !== null) throw Error(f(529, ''));
        return null;
      case 'script':
        return (
          (e = l.async),
          (l = l.src),
          (
            typeof l == 'string' &&
            e &&
            typeof e != 'function' &&
            typeof e != 'symbol'
          ) ?
            ((e = La(l)),
            (l = ia(n).hoistableScripts),
            (a = l.get(e)),
            a ||
              ((a = { type: 'script', instance: null, count: 0, state: null }),
              l.set(e, a)),
            a)
          : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(f(444, t));
    }
  }
  function Ya(t) {
    return 'href="' + _e(t) + '"';
  }
  function Cn(t) {
    return 'link[rel="stylesheet"][' + t + ']';
  }
  function Xd(t) {
    return A({}, t, { 'data-precedence': t.precedence, 'precedence': null });
  }
  function ky(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + ']') ?
      (a.loading = 1)
    : ((e = t.createElement('link')),
      (a.preload = e),
      e.addEventListener('load', function () {
        return (a.loading |= 1);
      }),
      e.addEventListener('error', function () {
        return (a.loading |= 2);
      }),
      wt(e, 'link', l),
      Lt(e),
      t.head.appendChild(e));
  }
  function La(t) {
    return '[src="' + _e(t) + '"]';
  }
  function Dn(t) {
    return 'script[async]' + t;
  }
  function Qd(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case 'style':
          var a = t.querySelector('style[data-href~="' + _e(l.href) + '"]');
          if (a) return ((e.instance = a), Lt(a), a);
          var n = A({}, l, {
            'data-href': l.href,
            'data-precedence': l.precedence,
            'href': null,
            'precedence': null,
          });
          return (
            (a = (t.ownerDocument || t).createElement('style')),
            Lt(a),
            wt(a, 'style', n),
            Pu(a, l.precedence, t),
            (e.instance = a)
          );
        case 'stylesheet':
          n = Ya(l.href);
          var u = t.querySelector(Cn(n));
          if (u) return ((e.state.loading |= 4), (e.instance = u), Lt(u), u);
          ((a = Xd(l)),
            (n = Ne.get(n)) && Nf(a, n),
            (u = (t.ownerDocument || t).createElement('link')),
            Lt(u));
          var i = u;
          return (
            (i._p = new Promise(function (s, d) {
              ((i.onload = s), (i.onerror = d));
            })),
            wt(u, 'link', a),
            (e.state.loading |= 4),
            Pu(u, l.precedence, t),
            (e.instance = u)
          );
        case 'script':
          return (
            (u = La(l.src)),
            (n = t.querySelector(Dn(u))) ?
              ((e.instance = n), Lt(n), n)
            : ((a = l),
              (n = Ne.get(u)) && ((a = A({}, l)), jf(a, n)),
              (t = t.ownerDocument || t),
              (n = t.createElement('script')),
              Lt(n),
              wt(n, 'link', a),
              t.head.appendChild(n),
              (e.instance = n))
          );
        case 'void':
          return null;
        default:
          throw Error(f(443, e.type));
      }
    else
      e.type === 'stylesheet' &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), Pu(a, l.precedence, t));
    return e.instance;
  }
  function Pu(t, e, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        i = 0;
      i < a.length;
      i++
    ) {
      var s = a[i];
      if (s.dataset.precedence === e) u = s;
      else if (u !== n) break;
    }
    u ?
      u.parentNode.insertBefore(t, u.nextSibling)
    : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function Nf(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function jf(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var ti = null;
  function Zd(t, e, l) {
    if (ti === null) {
      var a = new Map(),
        n = (ti = new Map());
      n.set(l, a);
    } else ((n = ti), (a = n.get(l)), a || ((a = new Map()), n.set(l, a)));
    if (a.has(t)) return a;
    for (
      a.set(t, null), l = l.getElementsByTagName(t), n = 0;
      n < l.length;
      n++
    ) {
      var u = l[n];
      if (
        !(
          u[$a] ||
          u[Qt] ||
          (t === 'link' && u.getAttribute('rel') === 'stylesheet')
        ) &&
        u.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var i = u.getAttribute(e) || '';
        i = t + i;
        var s = a.get(i);
        s ? s.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function Vd(t, e, l) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === 'title' ? t.querySelector('head > title') : null,
      ));
  }
  function Fy(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (
          typeof e.precedence != 'string' ||
          typeof e.href != 'string' ||
          e.href === ''
        )
          break;
        return !0;
      case 'link':
        if (
          typeof e.rel != 'string' ||
          typeof e.href != 'string' ||
          e.href === '' ||
          e.onLoad ||
          e.onError
        )
          break;
        return e.rel === 'stylesheet' ?
            ((t = e.disabled), typeof e.precedence == 'string' && t == null)
          : !0;
      case 'script':
        if (
          e.async &&
          typeof e.async != 'function' &&
          typeof e.async != 'symbol' &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function Kd(t) {
    return !(t.type === 'stylesheet' && (t.state.loading & 3) === 0);
  }
  function Iy(t, e, l, a) {
    if (
      l.type === 'stylesheet' &&
      (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var n = Ya(a.href),
          u = e.querySelector(Cn(n));
        if (u) {
          ((e = u._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (t.count++, (t = ei.bind(t)), e.then(t, t)),
            (l.state.loading |= 4),
            (l.instance = u),
            Lt(u));
          return;
        }
        ((u = e.ownerDocument || e),
          (a = Xd(a)),
          (n = Ne.get(n)) && Nf(a, n),
          (u = u.createElement('link')),
          Lt(u));
        var i = u;
        ((i._p = new Promise(function (s, d) {
          ((i.onload = s), (i.onerror = d));
        })),
          wt(u, 'link', a),
          (l.instance = u));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(l, e),
        (e = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (t.count++,
          (l = ei.bind(t)),
          e.addEventListener('load', l),
          e.addEventListener('error', l)));
    }
  }
  var Rf = 0;
  function Py(t, e) {
    return (
      t.stylesheets && t.count === 0 && ai(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount ?
        function (l) {
          var a = setTimeout(function () {
            if ((t.stylesheets && ai(t, t.stylesheets), t.unsuspend)) {
              var u = t.unsuspend;
              ((t.unsuspend = null), u());
            }
          }, 6e4 + e);
          0 < t.imgBytes && Rf === 0 && (Rf = 62500 * Dy());
          var n = setTimeout(
            function () {
              if (
                ((t.waitingForImages = !1),
                t.count === 0 &&
                  (t.stylesheets && ai(t, t.stylesheets), t.unsuspend))
              ) {
                var u = t.unsuspend;
                ((t.unsuspend = null), u());
              }
            },
            (t.imgBytes > Rf ? 50 : 800) + e,
          );
          return (
            (t.unsuspend = l),
            function () {
              ((t.unsuspend = null), clearTimeout(a), clearTimeout(n));
            }
          );
        }
      : null
    );
  }
  function ei() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) ai(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var li = null;
  function ai(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (li = new Map()),
        e.forEach(tv, t),
        (li = null),
        ei.call(t)));
  }
  function tv(t, e) {
    if (!(e.state.loading & 4)) {
      var l = li.get(t);
      if (l) var a = l.get(null);
      else {
        ((l = new Map()), li.set(t, l));
        for (
          var n = t.querySelectorAll(
              'link[data-precedence],style[data-precedence]',
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var i = n[u];
          (i.nodeName === 'LINK' || i.getAttribute('media') !== 'not all') &&
            (l.set(i.dataset.precedence, i), (a = i));
        }
        a && l.set(null, a);
      }
      ((n = e.instance),
        (i = n.getAttribute('data-precedence')),
        (u = l.get(i) || a),
        u === a && l.set(null, n),
        l.set(i, n),
        this.count++,
        (a = ei.bind(this)),
        n.addEventListener('load', a),
        n.addEventListener('error', a),
        u ?
          u.parentNode.insertBefore(n, u.nextSibling)
        : ((t = t.nodeType === 9 ? t.head : t),
          t.insertBefore(n, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var Un = {
    $$typeof: W,
    Provider: null,
    Consumer: null,
    _currentValue: k,
    _currentValue2: k,
    _threadCount: 0,
  };
  function ev(t, e, l, a, n, u, i, s, d) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Ti(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ti(0)),
      (this.hiddenUpdates = Ti(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = d),
      (this.incompleteTransitions = new Map()));
  }
  function wd(t, e, l, a, n, u, i, s, d, T, j, C) {
    return (
      (t = new ev(t, e, l, i, d, T, j, C, s)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = fe(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = cc()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: e }),
      rc(u),
      t
    );
  }
  function Jd(t) {
    return t ? ((t = va), t) : va;
  }
  function $d(t, e, l, a, n, u) {
    ((n = Jd(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = gl(e)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = pl(t, a, e)),
      l !== null && (ae(l, t, e), dn(l, t, e)));
  }
  function Wd(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Of(t, e) {
    (Wd(t, e), (t = t.alternate) && Wd(t, e));
  }
  function kd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ql(t, 67108864);
      (e !== null && ae(e, t, 67108864), Of(t, 67108864));
    }
  }
  function Fd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = he();
      e = zi(e);
      var l = Ql(t, e);
      (l !== null && ae(l, t, e), Of(t, e));
    }
  }
  var ni = !0;
  function lv(t, e, l, a) {
    var n = O.T;
    O.T = null;
    var u = H.p;
    try {
      ((H.p = 2), Mf(t, e, l, a));
    } finally {
      ((H.p = u), (O.T = n));
    }
  }
  function av(t, e, l, a) {
    var n = O.T;
    O.T = null;
    var u = H.p;
    try {
      ((H.p = 8), Mf(t, e, l, a));
    } finally {
      ((H.p = u), (O.T = n));
    }
  }
  function Mf(t, e, l, a) {
    if (ni) {
      var n = Cf(a);
      if (n === null) (gf(t, e, a, ui, l), Pd(t, a));
      else if (uv(n, t, e, l, a)) a.stopPropagation();
      else if ((Pd(t, a), e & 4 && -1 < nv.indexOf(t))) {
        for (; n !== null; ) {
          var u = ua(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var i = ql(u.pendingLanes);
                  if (i !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; i; ) {
                      var d = 1 << (31 - ie(i));
                      ((s.entanglements[1] |= d), (i &= ~d));
                    }
                    (Le(u), (rt & 6) === 0 && ((Xu = ne() + 500), jn(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((s = Ql(u, 2)), s !== null && ae(s, u, 2), Zu(), Of(u, 2));
            }
          if (((u = Cf(a)), u === null && gf(t, e, a, ui, l), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else gf(t, e, a, null, l);
    }
  }
  function Cf(t) {
    return ((t = Di(t)), Df(t));
  }
  var ui = null;
  function Df(t) {
    if (((ui = null), (t = na(t)), t !== null)) {
      var e = y(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = S(e)), t !== null)) return t;
          t = null;
        } else if (l === 31) {
          if (((t = R(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((ui = t), null);
  }
  function Id(t) {
    switch (t) {
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
        switch (Zh()) {
          case us:
            return 2;
          case is:
            return 8;
          case $n:
          case Vh:
            return 32;
          case cs:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Uf = !1,
    Rl = null,
    Ol = null,
    Ml = null,
    Hn = new Map(),
    Bn = new Map(),
    Cl = [],
    nv =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      );
  function Pd(t, e) {
    switch (t) {
      case 'focusin':
      case 'focusout':
        Rl = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Ol = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Ml = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Hn.delete(e.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Bn.delete(e.pointerId);
    }
  }
  function qn(t, e, l, a, n, u) {
    return t === null || t.nativeEvent !== u ?
        ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        e !== null && ((e = ua(e)), e !== null && kd(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        n !== null && e.indexOf(n) === -1 && e.push(n),
        t);
  }
  function uv(t, e, l, a, n) {
    switch (e) {
      case 'focusin':
        return ((Rl = qn(Rl, t, e, l, a, n)), !0);
      case 'dragenter':
        return ((Ol = qn(Ol, t, e, l, a, n)), !0);
      case 'mouseover':
        return ((Ml = qn(Ml, t, e, l, a, n)), !0);
      case 'pointerover':
        var u = n.pointerId;
        return (Hn.set(u, qn(Hn.get(u) || null, t, e, l, a, n)), !0);
      case 'gotpointercapture':
        return (
          (u = n.pointerId),
          Bn.set(u, qn(Bn.get(u) || null, t, e, l, a, n)),
          !0
        );
    }
    return !1;
  }
  function th(t) {
    var e = na(t.target);
    if (e !== null) {
      var l = y(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = S(l)), e !== null)) {
            ((t.blockedOn = e),
              hs(t.priority, function () {
                Fd(l);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = R(l)), e !== null)) {
            ((t.blockedOn = e),
              hs(t.priority, function () {
                Fd(l);
              }));
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function ii(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = Cf(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        ((Ci = a), l.target.dispatchEvent(a), (Ci = null));
      } else return ((e = ua(l)), e !== null && kd(e), (t.blockedOn = l), !1);
      e.shift();
    }
    return !0;
  }
  function eh(t, e, l) {
    ii(t) && l.delete(e);
  }
  function iv() {
    ((Uf = !1),
      Rl !== null && ii(Rl) && (Rl = null),
      Ol !== null && ii(Ol) && (Ol = null),
      Ml !== null && ii(Ml) && (Ml = null),
      Hn.forEach(eh),
      Bn.forEach(eh));
  }
  function ci(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Uf ||
        ((Uf = !0),
        c.unstable_scheduleCallback(c.unstable_NormalPriority, iv)));
  }
  var fi = null;
  function lh(t) {
    fi !== t &&
      ((fi = t),
      c.unstable_scheduleCallback(c.unstable_NormalPriority, function () {
        fi === t && (fi = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            n = t[e + 2];
          if (typeof a != 'function') {
            if (Df(a || l) === null) continue;
            break;
          }
          var u = ua(l);
          u !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Mc(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function Ga(t) {
    function e(d) {
      return ci(d, t);
    }
    (Rl !== null && ci(Rl, t),
      Ol !== null && ci(Ol, t),
      Ml !== null && ci(Ml, t),
      Hn.forEach(e),
      Bn.forEach(e));
    for (var l = 0; l < Cl.length; l++) {
      var a = Cl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Cl.length && ((l = Cl[0]), l.blockedOn === null); )
      (th(l), l.blockedOn === null && Cl.shift());
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          i = n[Ft] || null;
        if (typeof u == 'function') i || lh(l);
        else if (i) {
          var s = null;
          if (u && u.hasAttribute('formAction')) {
            if (((n = u), (i = u[Ft] || null))) s = i.formAction;
            else if (Df(n) !== null) continue;
          } else s = i.action;
          (typeof s == 'function' ? (l[a + 1] = s) : (l.splice(a, 3), (a -= 3)),
            lh(l));
        }
      }
  }
  function ah() {
    function t(u) {
      u.canIntercept &&
        u.info === 'react-transition' &&
        u.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (n = i);
            });
          },
          focusReset: 'manual',
          scroll: 'manual',
        });
    }
    function e() {
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
        navigation.addEventListener('navigate', t),
        navigation.addEventListener('navigatesuccess', e),
        navigation.addEventListener('navigateerror', e),
        setTimeout(l, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener('navigate', t),
            navigation.removeEventListener('navigatesuccess', e),
            navigation.removeEventListener('navigateerror', e),
            n !== null && (n(), (n = null)));
        }
      );
    }
  }
  function Hf(t) {
    this._internalRoot = t;
  }
  ((si.prototype.render = Hf.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(f(409));
      var l = e.current,
        a = he();
      $d(l, a, t, e, null, null);
    }),
    (si.prototype.unmount = Hf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          ($d(t.current, 2, null, t, null, null), Zu(), (e[aa] = null));
        }
      }));
  function si(t) {
    this._internalRoot = t;
  }
  si.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = ds();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Cl.length && e !== 0 && e < Cl[l].priority; l++);
      (Cl.splice(l, 0, t), l === 0 && th(t));
    }
  };
  var nh = o.version;
  if (nh !== '19.2.4') throw Error(f(527, nh, '19.2.4'));
  H.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == 'function' ?
          Error(f(188))
        : ((t = Object.keys(t).join(',')), Error(f(268, t)));
    return (
      (t = v(e)),
      (t = t !== null ? D(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var cv = {
    bundleType: 0,
    version: '19.2.4',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: O,
    reconcilerVersion: '19.2.4',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var oi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!oi.isDisabled && oi.supportsFiber)
      try {
        ((Ka = oi.inject(cv)), (ue = oi));
      } catch {}
  }
  return (
    (Ln.createRoot = function (t, e) {
      if (!m(t)) throw Error(f(299));
      var l = !1,
        a = '',
        n = rr,
        u = dr,
        i = hr;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
        (e = wd(t, 1, !1, null, null, l, a, null, n, u, i, ah)),
        (t[aa] = e.current),
        vf(t),
        new Hf(e)
      );
    }),
    (Ln.hydrateRoot = function (t, e, l) {
      if (!m(t)) throw Error(f(299));
      var a = !1,
        n = '',
        u = rr,
        i = dr,
        s = hr,
        d = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (i = l.onCaughtError),
          l.onRecoverableError !== void 0 && (s = l.onRecoverableError),
          l.formState !== void 0 && (d = l.formState)),
        (e = wd(t, 1, !0, e, l ?? null, a, n, d, u, i, s, ah)),
        (e.context = Jd(null)),
        (l = e.current),
        (a = he()),
        (a = zi(a)),
        (n = gl(a)),
        (n.callback = null),
        pl(l, n, a),
        (l = a),
        (e.current.lanes = l),
        Ja(e, l),
        Le(e),
        (t[aa] = e.current),
        vf(t),
        new si(e)
      );
    }),
    (Ln.version = '19.2.4'),
    Ln
  );
}
var mh;
function gv() {
  if (mh) return qf.exports;
  mh = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (o) {
        console.error(o);
      }
  }
  return (c(), (qf.exports = vv()), qf.exports);
}
var pv = gv(),
  N = $f();
var yh = 'popstate';
function _v(c = {}) {
  function o(m, y) {
    let {
      pathname: S = '/',
      search: R = '',
      hash: b = '',
    } = ea(m.location.hash.substring(1));
    return (
      !S.startsWith('/') && !S.startsWith('.') && (S = '/' + S),
      wf(
        '',
        { pathname: S, search: R, hash: b },
        (y.state && y.state.usr) || null,
        (y.state && y.state.key) || 'default',
      )
    );
  }
  function r(m, y) {
    let S = m.document.querySelector('base'),
      R = '';
    if (S && S.getAttribute('href')) {
      let b = m.location.href,
        v = b.indexOf('#');
      R = v === -1 ? b : b.slice(0, v);
    }
    return R + '#' + (typeof y == 'string' ? y : Zn(y));
  }
  function f(m, y) {
    Ue(
      m.pathname.charAt(0) === '/',
      `relative pathnames are not supported in hash history.push(${JSON.stringify(y)})`,
    );
  }
  return bv(o, r, f, c);
}
function At(c, o) {
  if (c === !1 || c === null || typeof c > 'u') throw new Error(o);
}
function Ue(c, o) {
  if (!c) {
    typeof console < 'u' && console.warn(o);
    try {
      throw new Error(o);
    } catch {}
  }
}
function Sv() {
  return Math.random().toString(36).substring(2, 10);
}
function vh(c, o) {
  return { usr: c.state, key: c.key, idx: o };
}
function wf(c, o, r = null, f) {
  return {
    pathname: typeof c == 'string' ? c : c.pathname,
    search: '',
    hash: '',
    ...(typeof o == 'string' ? ea(o) : o),
    state: r,
    key: (o && o.key) || f || Sv(),
  };
}
function Zn({ pathname: c = '/', search: o = '', hash: r = '' }) {
  return (
    o && o !== '?' && (c += o.charAt(0) === '?' ? o : '?' + o),
    r && r !== '#' && (c += r.charAt(0) === '#' ? r : '#' + r),
    c
  );
}
function ea(c) {
  let o = {};
  if (c) {
    let r = c.indexOf('#');
    r >= 0 && ((o.hash = c.substring(r)), (c = c.substring(0, r)));
    let f = c.indexOf('?');
    (f >= 0 && ((o.search = c.substring(f)), (c = c.substring(0, f))),
      c && (o.pathname = c));
  }
  return o;
}
function bv(c, o, r, f = {}) {
  let { window: m = document.defaultView, v5Compat: y = !1 } = f,
    S = m.history,
    R = 'POP',
    b = null,
    v = D();
  v == null && ((v = 0), S.replaceState({ ...S.state, idx: v }, ''));
  function D() {
    return (S.state || { idx: null }).idx;
  }
  function A() {
    R = 'POP';
    let G = D(),
      w = G == null ? null : G - v;
    ((v = G), b && b({ action: R, location: V.location, delta: w }));
  }
  function q(G, w) {
    R = 'PUSH';
    let L = wf(V.location, G, w);
    (r && r(L, G), (v = D() + 1));
    let W = vh(L, v),
      Et = V.createHref(L);
    try {
      S.pushState(W, '', Et);
    } catch (bt) {
      if (bt instanceof DOMException && bt.name === 'DataCloneError') throw bt;
      m.location.assign(Et);
    }
    y && b && b({ action: R, location: V.location, delta: 1 });
  }
  function Z(G, w) {
    R = 'REPLACE';
    let L = wf(V.location, G, w);
    (r && r(L, G), (v = D()));
    let W = vh(L, v),
      Et = V.createHref(L);
    (S.replaceState(W, '', Et),
      y && b && b({ action: R, location: V.location, delta: 0 }));
  }
  function F(G) {
    return Ev(G);
  }
  let V = {
    get action() {
      return R;
    },
    get location() {
      return c(m, S);
    },
    listen(G) {
      if (b) throw new Error('A history only accepts one active listener');
      return (
        m.addEventListener(yh, A),
        (b = G),
        () => {
          (m.removeEventListener(yh, A), (b = null));
        }
      );
    },
    createHref(G) {
      return o(m, G);
    },
    createURL: F,
    encodeLocation(G) {
      let w = F(G);
      return { pathname: w.pathname, search: w.search, hash: w.hash };
    },
    push: q,
    replace: Z,
    go(G) {
      return S.go(G);
    },
  };
  return V;
}
function Ev(c, o = !1) {
  let r = 'http://localhost';
  (typeof window < 'u' &&
    (r =
      window.location.origin !== 'null' ?
        window.location.origin
      : window.location.href),
    At(r, 'No window.location.(origin|href) available to create URL'));
  let f = typeof c == 'string' ? c : Zn(c);
  return (
    (f = f.replace(/ $/, '%20')),
    !o && f.startsWith('//') && (f = r + f),
    new URL(f, r)
  );
}
function bh(c, o, r = '/') {
  return Tv(c, o, r, !1);
}
function Tv(c, o, r, f) {
  let m = typeof o == 'string' ? ea(o) : o,
    y = cl(m.pathname || '/', r);
  if (y == null) return null;
  let S = Eh(c);
  zv(S);
  let R = null;
  for (let b = 0; R == null && b < S.length; ++b) {
    let v = Hv(y);
    R = Dv(S[b], v, f);
  }
  return R;
}
function Eh(c, o = [], r = [], f = '', m = !1) {
  let y = (S, R, b = m, v) => {
    let D = {
      relativePath: v === void 0 ? S.path || '' : v,
      caseSensitive: S.caseSensitive === !0,
      childrenIndex: R,
      route: S,
    };
    if (D.relativePath.startsWith('/')) {
      if (!D.relativePath.startsWith(f) && b) return;
      (At(
        D.relativePath.startsWith(f),
        `Absolute route path "${D.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (D.relativePath = D.relativePath.slice(f.length)));
    }
    let A = il([f, D.relativePath]),
      q = r.concat(D);
    (S.children &&
      S.children.length > 0 &&
      (At(
        S.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${A}".`,
      ),
      Eh(S.children, o, q, A, b)),
      !(S.path == null && !S.index) &&
        o.push({ path: A, score: Mv(A, S.index), routesMeta: q }));
  };
  return (
    c.forEach((S, R) => {
      if (S.path === '' || !S.path?.includes('?')) y(S, R);
      else for (let b of Th(S.path)) y(S, R, !0, b);
    }),
    o
  );
}
function Th(c) {
  let o = c.split('/');
  if (o.length === 0) return [];
  let [r, ...f] = o,
    m = r.endsWith('?'),
    y = r.replace(/\?$/, '');
  if (f.length === 0) return m ? [y, ''] : [y];
  let S = Th(f.join('/')),
    R = [];
  return (
    R.push(...S.map((b) => (b === '' ? y : [y, b].join('/')))),
    m && R.push(...S),
    R.map((b) => (c.startsWith('/') && b === '' ? '/' : b))
  );
}
function zv(c) {
  c.sort((o, r) =>
    o.score !== r.score ?
      r.score - o.score
    : Cv(
        o.routesMeta.map((f) => f.childrenIndex),
        r.routesMeta.map((f) => f.childrenIndex),
      ),
  );
}
var xv = /^:[\w-]+$/,
  Av = 3,
  Nv = 2,
  jv = 1,
  Rv = 10,
  Ov = -2,
  gh = (c) => c === '*';
function Mv(c, o) {
  let r = c.split('/'),
    f = r.length;
  return (
    r.some(gh) && (f += Ov),
    o && (f += Nv),
    r
      .filter((m) => !gh(m))
      .reduce(
        (m, y) =>
          m +
          (xv.test(y) ? Av
          : y === '' ? jv
          : Rv),
        f,
      )
  );
}
function Cv(c, o) {
  return c.length === o.length && c.slice(0, -1).every((f, m) => f === o[m]) ?
      c[c.length - 1] - o[o.length - 1]
    : 0;
}
function Dv(c, o, r = !1) {
  let { routesMeta: f } = c,
    m = {},
    y = '/',
    S = [];
  for (let R = 0; R < f.length; ++R) {
    let b = f[R],
      v = R === f.length - 1,
      D = y === '/' ? o : o.slice(y.length) || '/',
      A = mi(
        { path: b.relativePath, caseSensitive: b.caseSensitive, end: v },
        D,
      ),
      q = b.route;
    if (
      (!A &&
        v &&
        r &&
        !f[f.length - 1].route.index &&
        (A = mi(
          { path: b.relativePath, caseSensitive: b.caseSensitive, end: !1 },
          D,
        )),
      !A)
    )
      return null;
    (Object.assign(m, A.params),
      S.push({
        params: m,
        pathname: il([y, A.pathname]),
        pathnameBase: Lv(il([y, A.pathnameBase])),
        route: q,
      }),
      A.pathnameBase !== '/' && (y = il([y, A.pathnameBase])));
  }
  return S;
}
function mi(c, o) {
  typeof c == 'string' && (c = { path: c, caseSensitive: !1, end: !0 });
  let [r, f] = Uv(c.path, c.caseSensitive, c.end),
    m = o.match(r);
  if (!m) return null;
  let y = m[0],
    S = y.replace(/(.)\/+$/, '$1'),
    R = m.slice(1);
  return {
    params: f.reduce((v, { paramName: D, isOptional: A }, q) => {
      if (D === '*') {
        let F = R[q] || '';
        S = y.slice(0, y.length - F.length).replace(/(.)\/+$/, '$1');
      }
      const Z = R[q];
      return (
        A && !Z ? (v[D] = void 0) : (v[D] = (Z || '').replace(/%2F/g, '/')),
        v
      );
    }, {}),
    pathname: y,
    pathnameBase: S,
    pattern: c,
  };
}
function Uv(c, o = !1, r = !0) {
  Ue(
    c === '*' || !c.endsWith('*') || c.endsWith('/*'),
    `Route path "${c}" will be treated as if it were "${c.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/, '/*')}".`,
  );
  let f = [],
    m =
      '^' +
      c
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (S, R, b) => (
            f.push({ paramName: R, isOptional: b != null }),
            b ? '/?([^\\/]+)?' : '/([^\\/]+)'
          ),
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2');
  return (
    c.endsWith('*') ?
      (f.push({ paramName: '*' }),
      (m += c === '*' || c === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
    : r ? (m += '\\/*$')
    : c !== '' && c !== '/' && (m += '(?:(?=\\/|$))'),
    [new RegExp(m, o ? void 0 : 'i'), f]
  );
}
function Hv(c) {
  try {
    return c
      .split('/')
      .map((o) => decodeURIComponent(o).replace(/\//g, '%2F'))
      .join('/');
  } catch (o) {
    return (
      Ue(
        !1,
        `The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`,
      ),
      c
    );
  }
}
function cl(c, o) {
  if (o === '/') return c;
  if (!c.toLowerCase().startsWith(o.toLowerCase())) return null;
  let r = o.endsWith('/') ? o.length - 1 : o.length,
    f = c.charAt(r);
  return f && f !== '/' ? null : c.slice(r) || '/';
}
var Bv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function qv(c, o = '/') {
  let {
      pathname: r,
      search: f = '',
      hash: m = '',
    } = typeof c == 'string' ? ea(c) : c,
    y;
  return (
    r ?
      ((r = r.replace(/\/\/+/g, '/')),
      r.startsWith('/') ? (y = ph(r.substring(1), '/')) : (y = ph(r, o)))
    : (y = o),
    { pathname: y, search: Gv(f), hash: Xv(m) }
  );
}
function ph(c, o) {
  let r = o.replace(/\/+$/, '').split('/');
  return (
    c.split('/').forEach((m) => {
      m === '..' ? r.length > 1 && r.pop() : m !== '.' && r.push(m);
    }),
    r.length > 1 ? r.join('/') : '/'
  );
}
function Qf(c, o, r, f) {
  return `Cannot include a '${c}' character in a manually specified \`to.${o}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Yv(c) {
  return c.filter(
    (o, r) => r === 0 || (o.route.path && o.route.path.length > 0),
  );
}
function zh(c) {
  let o = Yv(c);
  return o.map((r, f) => (f === o.length - 1 ? r.pathname : r.pathnameBase));
}
function xh(c, o, r, f = !1) {
  let m;
  typeof c == 'string' ?
    (m = ea(c))
  : ((m = { ...c }),
    At(
      !m.pathname || !m.pathname.includes('?'),
      Qf('?', 'pathname', 'search', m),
    ),
    At(
      !m.pathname || !m.pathname.includes('#'),
      Qf('#', 'pathname', 'hash', m),
    ),
    At(!m.search || !m.search.includes('#'), Qf('#', 'search', 'hash', m)));
  let y = c === '' || m.pathname === '',
    S = y ? '/' : m.pathname,
    R;
  if (S == null) R = r;
  else {
    let A = o.length - 1;
    if (!f && S.startsWith('..')) {
      let q = S.split('/');
      for (; q[0] === '..'; ) (q.shift(), (A -= 1));
      m.pathname = q.join('/');
    }
    R = A >= 0 ? o[A] : '/';
  }
  let b = qv(m, R),
    v = S && S !== '/' && S.endsWith('/'),
    D = (y || S === '.') && r.endsWith('/');
  return (!b.pathname.endsWith('/') && (v || D) && (b.pathname += '/'), b);
}
var il = (c) => c.join('/').replace(/\/\/+/g, '/'),
  Lv = (c) => c.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Gv = (c) =>
    !c || c === '?' ? ''
    : c.startsWith('?') ? c
    : '?' + c,
  Xv = (c) =>
    !c || c === '#' ? ''
    : c.startsWith('#') ? c
    : '#' + c,
  Qv = class {
    constructor(c, o, r, f = !1) {
      ((this.status = c),
        (this.statusText = o || ''),
        (this.internal = f),
        r instanceof Error ?
          ((this.data = r.toString()), (this.error = r))
        : (this.data = r));
    }
  };
function Zv(c) {
  return (
    c != null &&
    typeof c.status == 'number' &&
    typeof c.statusText == 'string' &&
    typeof c.internal == 'boolean' &&
    'data' in c
  );
}
function Vv(c) {
  return (
    c
      .map((o) => o.route.path)
      .filter(Boolean)
      .join('/')
      .replace(/\/\/*/g, '/') || '/'
  );
}
var Ah =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
function Nh(c, o) {
  let r = c;
  if (typeof r != 'string' || !Bv.test(r))
    return { absoluteURL: void 0, isExternal: !1, to: r };
  let f = r,
    m = !1;
  if (Ah)
    try {
      let y = new URL(window.location.href),
        S = r.startsWith('//') ? new URL(y.protocol + r) : new URL(r),
        R = cl(S.pathname, o);
      S.origin === y.origin && R != null ?
        (r = R + S.search + S.hash)
      : (m = !0);
    } catch {
      Ue(
        !1,
        `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: f, isExternal: m, to: r };
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var jh = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(jh);
var Kv = ['GET', ...jh];
new Set(Kv);
var Za = N.createContext(null);
Za.displayName = 'DataRouter';
var yi = N.createContext(null);
yi.displayName = 'DataRouterState';
var wv = N.createContext(!1),
  Rh = N.createContext({ isTransitioning: !1 });
Rh.displayName = 'ViewTransition';
var Jv = N.createContext(new Map());
Jv.displayName = 'Fetchers';
var $v = N.createContext(null);
$v.displayName = 'Await';
var Re = N.createContext(null);
Re.displayName = 'Navigation';
var Vn = N.createContext(null);
Vn.displayName = 'Location';
var fl = N.createContext({ outlet: null, matches: [], isDataRoute: !1 });
fl.displayName = 'Route';
var Wf = N.createContext(null);
Wf.displayName = 'RouteError';
var Oh = 'REACT_ROUTER_ERROR',
  Wv = 'REDIRECT',
  kv = 'ROUTE_ERROR_RESPONSE';
function Fv(c) {
  if (c.startsWith(`${Oh}:${Wv}:{`))
    try {
      let o = JSON.parse(c.slice(28));
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
function Iv(c) {
  if (c.startsWith(`${Oh}:${kv}:{`))
    try {
      let o = JSON.parse(c.slice(40));
      if (
        typeof o == 'object' &&
        o &&
        typeof o.status == 'number' &&
        typeof o.statusText == 'string'
      )
        return new Qv(o.status, o.statusText, o.data);
    } catch {}
}
function Pv(c, { relative: o } = {}) {
  At(
    Kn(),
    'useHref() may be used only in the context of a <Router> component.',
  );
  let { basename: r, navigator: f } = N.useContext(Re),
    { hash: m, pathname: y, search: S } = wn(c, { relative: o }),
    R = y;
  return (
    r !== '/' && (R = y === '/' ? r : il([r, y])),
    f.createHref({ pathname: R, search: S, hash: m })
  );
}
function Kn() {
  return N.useContext(Vn) != null;
}
function la() {
  return (
    At(
      Kn(),
      'useLocation() may be used only in the context of a <Router> component.',
    ),
    N.useContext(Vn).location
  );
}
var Mh =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Ch(c) {
  N.useContext(Re).static || N.useLayoutEffect(c);
}
function t0() {
  let { isDataRoute: c } = N.useContext(fl);
  return c ? h0() : e0();
}
function e0() {
  At(
    Kn(),
    'useNavigate() may be used only in the context of a <Router> component.',
  );
  let c = N.useContext(Za),
    { basename: o, navigator: r } = N.useContext(Re),
    { matches: f } = N.useContext(fl),
    { pathname: m } = la(),
    y = JSON.stringify(zh(f)),
    S = N.useRef(!1);
  return (
    Ch(() => {
      S.current = !0;
    }),
    N.useCallback(
      (b, v = {}) => {
        if ((Ue(S.current, Mh), !S.current)) return;
        if (typeof b == 'number') {
          r.go(b);
          return;
        }
        let D = xh(b, JSON.parse(y), m, v.relative === 'path');
        (c == null &&
          o !== '/' &&
          (D.pathname = D.pathname === '/' ? o : il([o, D.pathname])),
          (v.replace ? r.replace : r.push)(D, v.state, v));
      },
      [o, r, y, m, c],
    )
  );
}
N.createContext(null);
function wn(c, { relative: o } = {}) {
  let { matches: r } = N.useContext(fl),
    { pathname: f } = la(),
    m = JSON.stringify(zh(r));
  return N.useMemo(() => xh(c, JSON.parse(m), f, o === 'path'), [c, m, f, o]);
}
function l0(c, o) {
  return Dh(c, o);
}
function Dh(c, o, r, f, m) {
  At(
    Kn(),
    'useRoutes() may be used only in the context of a <Router> component.',
  );
  let { navigator: y } = N.useContext(Re),
    { matches: S } = N.useContext(fl),
    R = S[S.length - 1],
    b = R ? R.params : {},
    v = R ? R.pathname : '/',
    D = R ? R.pathnameBase : '/',
    A = R && R.route;
  {
    let L = (A && A.path) || '';
    Hh(
      v,
      !A || L.endsWith('*') || L.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L === '/' ? '*' : `${L}/*`}">.`,
    );
  }
  let q = la(),
    Z;
  if (o) {
    let L = typeof o == 'string' ? ea(o) : o;
    (At(
      D === '/' || L.pathname?.startsWith(D),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${D}" but pathname "${L.pathname}" was given in the \`location\` prop.`,
    ),
      (Z = L));
  } else Z = q;
  let F = Z.pathname || '/',
    V = F;
  if (D !== '/') {
    let L = D.replace(/^\//, '').split('/');
    V = '/' + F.replace(/^\//, '').split('/').slice(L.length).join('/');
  }
  let G = bh(c, { pathname: V });
  (Ue(
    A || G != null,
    `No routes matched location "${Z.pathname}${Z.search}${Z.hash}" `,
  ),
    Ue(
      G == null ||
        G[G.length - 1].route.element !== void 0 ||
        G[G.length - 1].route.Component !== void 0 ||
        G[G.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${Z.pathname}${Z.search}${Z.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let w = c0(
    G &&
      G.map((L) =>
        Object.assign({}, L, {
          params: Object.assign({}, b, L.params),
          pathname: il([
            D,
            y.encodeLocation ?
              y.encodeLocation(
                L.pathname.replace(/\?/g, '%3F').replace(/#/g, '%23'),
              ).pathname
            : L.pathname,
          ]),
          pathnameBase:
            L.pathnameBase === '/' ?
              D
            : il([
                D,
                y.encodeLocation ?
                  y.encodeLocation(
                    L.pathnameBase.replace(/\?/g, '%3F').replace(/#/g, '%23'),
                  ).pathname
                : L.pathnameBase,
              ]),
        }),
      ),
    S,
    r,
    f,
    m,
  );
  return o && w ?
      N.createElement(
        Vn.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              ...Z,
            },
            navigationType: 'POP',
          },
        },
        w,
      )
    : w;
}
function a0() {
  let c = d0(),
    o =
      Zv(c) ? `${c.status} ${c.statusText}`
      : c instanceof Error ? c.message
      : JSON.stringify(c),
    r = c instanceof Error ? c.stack : null,
    f = 'rgba(200,200,200, 0.5)',
    m = { padding: '0.5rem', backgroundColor: f },
    y = { padding: '2px 4px', backgroundColor: f },
    S = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', c),
    (S = N.createElement(
      N.Fragment,
      null,
      N.createElement('p', null, '💿 Hey developer 👋'),
      N.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        N.createElement('code', { style: y }, 'ErrorBoundary'),
        ' or',
        ' ',
        N.createElement('code', { style: y }, 'errorElement'),
        ' prop on your route.',
      ),
    )),
    N.createElement(
      N.Fragment,
      null,
      N.createElement('h2', null, 'Unexpected Application Error!'),
      N.createElement('h3', { style: { fontStyle: 'italic' } }, o),
      r ? N.createElement('pre', { style: m }, r) : null,
      S,
    )
  );
}
var n0 = N.createElement(a0, null),
  Uh = class extends N.Component {
    constructor(c) {
      (super(c),
        (this.state = {
          location: c.location,
          revalidation: c.revalidation,
          error: c.error,
        }));
    }
    static getDerivedStateFromError(c) {
      return { error: c };
    }
    static getDerivedStateFromProps(c, o) {
      return (
          o.location !== c.location ||
            (o.revalidation !== 'idle' && c.revalidation === 'idle')
        ) ?
          { error: c.error, location: c.location, revalidation: c.revalidation }
        : {
            error: c.error !== void 0 ? c.error : o.error,
            location: o.location,
            revalidation: c.revalidation || o.revalidation,
          };
    }
    componentDidCatch(c, o) {
      this.props.onError ?
        this.props.onError(c, o)
      : console.error(
          'React Router caught the following error during render',
          c,
        );
    }
    render() {
      let c = this.state.error;
      if (
        this.context &&
        typeof c == 'object' &&
        c &&
        'digest' in c &&
        typeof c.digest == 'string'
      ) {
        const r = Iv(c.digest);
        r && (c = r);
      }
      let o =
        c !== void 0 ?
          N.createElement(
            fl.Provider,
            { value: this.props.routeContext },
            N.createElement(Wf.Provider, {
              value: c,
              children: this.props.component,
            }),
          )
        : this.props.children;
      return this.context ? N.createElement(u0, { error: c }, o) : o;
    }
  };
Uh.contextType = wv;
var Zf = new WeakMap();
function u0({ children: c, error: o }) {
  let { basename: r } = N.useContext(Re);
  if (
    typeof o == 'object' &&
    o &&
    'digest' in o &&
    typeof o.digest == 'string'
  ) {
    let f = Fv(o.digest);
    if (f) {
      let m = Zf.get(o);
      if (m) throw m;
      let y = Nh(f.location, r);
      if (Ah && !Zf.get(o))
        if (y.isExternal || f.reloadDocument)
          window.location.href = y.absoluteURL || y.to;
        else {
          const S = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(y.to, {
              replace: f.replace,
            }),
          );
          throw (Zf.set(o, S), S);
        }
      return N.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${y.absoluteURL || y.to}`,
      });
    }
  }
  return c;
}
function i0({ routeContext: c, match: o, children: r }) {
  let f = N.useContext(Za);
  return (
    f &&
      f.static &&
      f.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (f.staticContext._deepestRenderedBoundaryId = o.route.id),
    N.createElement(fl.Provider, { value: c }, r)
  );
}
function c0(c, o = [], r = null, f = null, m = null) {
  if (c == null) {
    if (!r) return null;
    if (r.errors) c = r.matches;
    else if (o.length === 0 && !r.initialized && r.matches.length > 0)
      c = r.matches;
    else return null;
  }
  let y = c,
    S = r?.errors;
  if (S != null) {
    let D = y.findIndex((A) => A.route.id && S?.[A.route.id] !== void 0);
    (At(
      D >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(S).join(',')}`,
    ),
      (y = y.slice(0, Math.min(y.length, D + 1))));
  }
  let R = !1,
    b = -1;
  if (r)
    for (let D = 0; D < y.length; D++) {
      let A = y[D];
      if (
        ((A.route.HydrateFallback || A.route.hydrateFallbackElement) && (b = D),
        A.route.id)
      ) {
        let { loaderData: q, errors: Z } = r,
          F =
            A.route.loader &&
            !q.hasOwnProperty(A.route.id) &&
            (!Z || Z[A.route.id] === void 0);
        if (A.route.lazy || F) {
          ((R = !0), b >= 0 ? (y = y.slice(0, b + 1)) : (y = [y[0]]));
          break;
        }
      }
    }
  let v =
    r && f ?
      (D, A) => {
        f(D, {
          location: r.location,
          params: r.matches?.[0]?.params ?? {},
          unstable_pattern: Vv(r.matches),
          errorInfo: A,
        });
      }
    : void 0;
  return y.reduceRight((D, A, q) => {
    let Z,
      F = !1,
      V = null,
      G = null;
    r &&
      ((Z = S && A.route.id ? S[A.route.id] : void 0),
      (V = A.route.errorElement || n0),
      R &&
        (b < 0 && q === 0 ?
          (Hh(
            'route-fallback',
            !1,
            'No `HydrateFallback` element provided to render during initial hydration',
          ),
          (F = !0),
          (G = null))
        : b === q && ((F = !0), (G = A.route.hydrateFallbackElement || null))));
    let w = o.concat(y.slice(0, q + 1)),
      L = () => {
        let W;
        return (
          Z ? (W = V)
          : F ? (W = G)
          : A.route.Component ? (W = N.createElement(A.route.Component, null))
          : A.route.element ? (W = A.route.element)
          : (W = D),
          N.createElement(i0, {
            match: A,
            routeContext: { outlet: D, matches: w, isDataRoute: r != null },
            children: W,
          })
        );
      };
    return r && (A.route.ErrorBoundary || A.route.errorElement || q === 0) ?
        N.createElement(Uh, {
          location: r.location,
          revalidation: r.revalidation,
          component: V,
          error: Z,
          children: L(),
          routeContext: { outlet: null, matches: w, isDataRoute: !0 },
          onError: v,
        })
      : L();
  }, null);
}
function kf(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function f0(c) {
  let o = N.useContext(Za);
  return (At(o, kf(c)), o);
}
function s0(c) {
  let o = N.useContext(yi);
  return (At(o, kf(c)), o);
}
function o0(c) {
  let o = N.useContext(fl);
  return (At(o, kf(c)), o);
}
function Ff(c) {
  let o = o0(c),
    r = o.matches[o.matches.length - 1];
  return (
    At(
      r.route.id,
      `${c} can only be used on routes that contain a unique "id"`,
    ),
    r.route.id
  );
}
function r0() {
  return Ff('useRouteId');
}
function d0() {
  let c = N.useContext(Wf),
    o = s0('useRouteError'),
    r = Ff('useRouteError');
  return c !== void 0 ? c : o.errors?.[r];
}
function h0() {
  let { router: c } = f0('useNavigate'),
    o = Ff('useNavigate'),
    r = N.useRef(!1);
  return (
    Ch(() => {
      r.current = !0;
    }),
    N.useCallback(
      async (m, y = {}) => {
        (Ue(r.current, Mh),
          r.current &&
            (typeof m == 'number' ?
              await c.navigate(m)
            : await c.navigate(m, { fromRouteId: o, ...y })));
      },
      [c, o],
    )
  );
}
var _h = {};
function Hh(c, o, r) {
  !o && !_h[c] && ((_h[c] = !0), Ue(!1, r));
}
N.memo(m0);
function m0({ routes: c, future: o, state: r, onError: f }) {
  return Dh(c, void 0, r, f, o);
}
function ul(c) {
  At(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.',
  );
}
function y0({
  basename: c = '/',
  children: o = null,
  location: r,
  navigationType: f = 'POP',
  navigator: m,
  static: y = !1,
  unstable_useTransitions: S,
}) {
  At(
    !Kn(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.',
  );
  let R = c.replace(/^\/*/, '/'),
    b = N.useMemo(
      () => ({
        basename: R,
        navigator: m,
        static: y,
        unstable_useTransitions: S,
        future: {},
      }),
      [R, m, y, S],
    );
  typeof r == 'string' && (r = ea(r));
  let {
      pathname: v = '/',
      search: D = '',
      hash: A = '',
      state: q = null,
      key: Z = 'default',
    } = r,
    F = N.useMemo(() => {
      let V = cl(v, R);
      return V == null ? null : (
          {
            location: { pathname: V, search: D, hash: A, state: q, key: Z },
            navigationType: f,
          }
        );
    }, [R, v, D, A, q, Z, f]);
  return (
    Ue(
      F != null,
      `<Router basename="${R}"> is not able to match the URL "${v}${D}${A}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    F == null ? null : (
      N.createElement(
        Re.Provider,
        { value: b },
        N.createElement(Vn.Provider, { children: o, value: F }),
      )
    )
  );
}
function v0({ children: c, location: o }) {
  return l0(Jf(c), o);
}
function Jf(c, o = []) {
  let r = [];
  return (
    N.Children.forEach(c, (f, m) => {
      if (!N.isValidElement(f)) return;
      let y = [...o, m];
      if (f.type === N.Fragment) {
        r.push.apply(r, Jf(f.props.children, y));
        return;
      }
      (At(
        f.type === ul,
        `[${typeof f.type == 'string' ? f.type : f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        At(
          !f.props.index || !f.props.children,
          'An index route cannot have child routes.',
        ));
      let S = {
        id: f.props.id || y.join('-'),
        caseSensitive: f.props.caseSensitive,
        element: f.props.element,
        Component: f.props.Component,
        index: f.props.index,
        path: f.props.path,
        middleware: f.props.middleware,
        loader: f.props.loader,
        action: f.props.action,
        hydrateFallbackElement: f.props.hydrateFallbackElement,
        HydrateFallback: f.props.HydrateFallback,
        errorElement: f.props.errorElement,
        ErrorBoundary: f.props.ErrorBoundary,
        hasErrorBoundary:
          f.props.hasErrorBoundary === !0 ||
          f.props.ErrorBoundary != null ||
          f.props.errorElement != null,
        shouldRevalidate: f.props.shouldRevalidate,
        handle: f.props.handle,
        lazy: f.props.lazy,
      };
      (f.props.children && (S.children = Jf(f.props.children, y)), r.push(S));
    }),
    r
  );
}
var di = 'get',
  hi = 'application/x-www-form-urlencoded';
function vi(c) {
  return typeof HTMLElement < 'u' && c instanceof HTMLElement;
}
function g0(c) {
  return vi(c) && c.tagName.toLowerCase() === 'button';
}
function p0(c) {
  return vi(c) && c.tagName.toLowerCase() === 'form';
}
function _0(c) {
  return vi(c) && c.tagName.toLowerCase() === 'input';
}
function S0(c) {
  return !!(c.metaKey || c.altKey || c.ctrlKey || c.shiftKey);
}
function b0(c, o) {
  return c.button === 0 && (!o || o === '_self') && !S0(c);
}
var ri = null;
function E0() {
  if (ri === null)
    try {
      (new FormData(document.createElement('form'), 0), (ri = !1));
    } catch {
      ri = !0;
    }
  return ri;
}
var T0 = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function Vf(c) {
  return c != null && !T0.has(c) ?
      (Ue(
        !1,
        `"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${hi}"`,
      ),
      null)
    : c;
}
function z0(c, o) {
  let r, f, m, y, S;
  if (p0(c)) {
    let R = c.getAttribute('action');
    ((f = R ? cl(R, o) : null),
      (r = c.getAttribute('method') || di),
      (m = Vf(c.getAttribute('enctype')) || hi),
      (y = new FormData(c)));
  } else if (g0(c) || (_0(c) && (c.type === 'submit' || c.type === 'image'))) {
    let R = c.form;
    if (R == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let b = c.getAttribute('formaction') || R.getAttribute('action');
    if (
      ((f = b ? cl(b, o) : null),
      (r = c.getAttribute('formmethod') || R.getAttribute('method') || di),
      (m =
        Vf(c.getAttribute('formenctype')) ||
        Vf(R.getAttribute('enctype')) ||
        hi),
      (y = new FormData(R, c)),
      !E0())
    ) {
      let { name: v, type: D, value: A } = c;
      if (D === 'image') {
        let q = v ? `${v}.` : '';
        (y.append(`${q}x`, '0'), y.append(`${q}y`, '0'));
      } else v && y.append(v, A);
    }
  } else {
    if (vi(c))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((r = di), (f = null), (m = hi), (S = c));
  }
  return (
    y && m === 'text/plain' && ((S = y), (y = void 0)),
    { action: f, method: r.toLowerCase(), encType: m, formData: y, body: S }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function If(c, o) {
  if (c === !1 || c === null || typeof c > 'u') throw new Error(o);
}
function x0(c, o, r, f) {
  let m =
    typeof c == 'string' ?
      new URL(
        c,
        typeof window > 'u' ? 'server://singlefetch/' : window.location.origin,
      )
    : c;
  return (
    r ?
      m.pathname.endsWith('/') ?
        (m.pathname = `${m.pathname}_.${f}`)
      : (m.pathname = `${m.pathname}.${f}`)
    : m.pathname === '/' ? (m.pathname = `_root.${f}`)
    : o && cl(m.pathname, o) === '/' ?
      (m.pathname = `${o.replace(/\/$/, '')}/_root.${f}`)
    : (m.pathname = `${m.pathname.replace(/\/$/, '')}.${f}`),
    m
  );
}
async function A0(c, o) {
  if (c.id in o) return o[c.id];
  try {
    let r = await import(c.module);
    return ((o[c.id] = r), r);
  } catch (r) {
    return (
      console.error(
        `Error loading route module \`${c.module}\`, reloading page...`,
      ),
      console.error(r),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function N0(c) {
  return (
    c == null ? !1
    : c.href == null ?
      c.rel === 'preload' &&
      typeof c.imageSrcSet == 'string' &&
      typeof c.imageSizes == 'string'
    : typeof c.rel == 'string' && typeof c.href == 'string'
  );
}
async function j0(c, o, r) {
  let f = await Promise.all(
    c.map(async (m) => {
      let y = o.routes[m.route.id];
      if (y) {
        let S = await A0(y, r);
        return S.links ? S.links() : [];
      }
      return [];
    }),
  );
  return C0(
    f
      .flat(1)
      .filter(N0)
      .filter((m) => m.rel === 'stylesheet' || m.rel === 'preload')
      .map((m) =>
        m.rel === 'stylesheet' ?
          { ...m, rel: 'prefetch', as: 'style' }
        : { ...m, rel: 'prefetch' },
      ),
  );
}
function Sh(c, o, r, f, m, y) {
  let S = (b, v) => (r[v] ? b.route.id !== r[v].route.id : !0),
    R = (b, v) =>
      r[v].pathname !== b.pathname ||
      (r[v].route.path?.endsWith('*') && r[v].params['*'] !== b.params['*']);
  return (
    y === 'assets' ? o.filter((b, v) => S(b, v) || R(b, v))
    : y === 'data' ?
      o.filter((b, v) => {
        let D = f.routes[b.route.id];
        if (!D || !D.hasLoader) return !1;
        if (S(b, v) || R(b, v)) return !0;
        if (b.route.shouldRevalidate) {
          let A = b.route.shouldRevalidate({
            currentUrl: new URL(m.pathname + m.search + m.hash, window.origin),
            currentParams: r[0]?.params || {},
            nextUrl: new URL(c, window.origin),
            nextParams: b.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof A == 'boolean') return A;
        }
        return !0;
      })
    : []
  );
}
function R0(c, o, { includeHydrateFallback: r } = {}) {
  return O0(
    c
      .map((f) => {
        let m = o.routes[f.route.id];
        if (!m) return [];
        let y = [m.module];
        return (
          m.clientActionModule && (y = y.concat(m.clientActionModule)),
          m.clientLoaderModule && (y = y.concat(m.clientLoaderModule)),
          r &&
            m.hydrateFallbackModule &&
            (y = y.concat(m.hydrateFallbackModule)),
          m.imports && (y = y.concat(m.imports)),
          y
        );
      })
      .flat(1),
  );
}
function O0(c) {
  return [...new Set(c)];
}
function M0(c) {
  let o = {},
    r = Object.keys(c).sort();
  for (let f of r) o[f] = c[f];
  return o;
}
function C0(c, o) {
  let r = new Set();
  return (
    new Set(o),
    c.reduce((f, m) => {
      let y = JSON.stringify(M0(m));
      return (r.has(y) || (r.add(y), f.push({ key: y, link: m })), f);
    }, [])
  );
}
function Bh() {
  let c = N.useContext(Za);
  return (
    If(
      c,
      'You must render this element inside a <DataRouterContext.Provider> element',
    ),
    c
  );
}
function D0() {
  let c = N.useContext(yi);
  return (
    If(
      c,
      'You must render this element inside a <DataRouterStateContext.Provider> element',
    ),
    c
  );
}
var Pf = N.createContext(void 0);
Pf.displayName = 'FrameworkContext';
function qh() {
  let c = N.useContext(Pf);
  return (
    If(c, 'You must render this element inside a <HydratedRouter> element'),
    c
  );
}
function U0(c, o) {
  let r = N.useContext(Pf),
    [f, m] = N.useState(!1),
    [y, S] = N.useState(!1),
    {
      onFocus: R,
      onBlur: b,
      onMouseEnter: v,
      onMouseLeave: D,
      onTouchStart: A,
    } = o,
    q = N.useRef(null);
  (N.useEffect(() => {
    if ((c === 'render' && S(!0), c === 'viewport')) {
      let V = (w) => {
          w.forEach((L) => {
            S(L.isIntersecting);
          });
        },
        G = new IntersectionObserver(V, { threshold: 0.5 });
      return (
        q.current && G.observe(q.current),
        () => {
          G.disconnect();
        }
      );
    }
  }, [c]),
    N.useEffect(() => {
      if (f) {
        let V = setTimeout(() => {
          S(!0);
        }, 100);
        return () => {
          clearTimeout(V);
        };
      }
    }, [f]));
  let Z = () => {
      m(!0);
    },
    F = () => {
      (m(!1), S(!1));
    };
  return (
    r ?
      c !== 'intent' ?
        [y, q, {}]
      : [
          y,
          q,
          {
            onFocus: Gn(R, Z),
            onBlur: Gn(b, F),
            onMouseEnter: Gn(v, Z),
            onMouseLeave: Gn(D, F),
            onTouchStart: Gn(A, Z),
          },
        ]
    : [!1, q, {}]
  );
}
function Gn(c, o) {
  return (r) => {
    (c && c(r), r.defaultPrevented || o(r));
  };
}
function H0({ page: c, ...o }) {
  let { router: r } = Bh(),
    f = N.useMemo(() => bh(r.routes, c, r.basename), [r.routes, c, r.basename]);
  return f ? N.createElement(q0, { page: c, matches: f, ...o }) : null;
}
function B0(c) {
  let { manifest: o, routeModules: r } = qh(),
    [f, m] = N.useState([]);
  return (
    N.useEffect(() => {
      let y = !1;
      return (
        j0(c, o, r).then((S) => {
          y || m(S);
        }),
        () => {
          y = !0;
        }
      );
    }, [c, o, r]),
    f
  );
}
function q0({ page: c, matches: o, ...r }) {
  let f = la(),
    { future: m, manifest: y, routeModules: S } = qh(),
    { basename: R } = Bh(),
    { loaderData: b, matches: v } = D0(),
    D = N.useMemo(() => Sh(c, o, v, y, f, 'data'), [c, o, v, y, f]),
    A = N.useMemo(() => Sh(c, o, v, y, f, 'assets'), [c, o, v, y, f]),
    q = N.useMemo(() => {
      if (c === f.pathname + f.search + f.hash) return [];
      let V = new Set(),
        G = !1;
      if (
        (o.forEach((L) => {
          let W = y.routes[L.route.id];
          !W ||
            !W.hasLoader ||
            ((
              (!D.some((Et) => Et.route.id === L.route.id) &&
                L.route.id in b &&
                S[L.route.id]?.shouldRevalidate) ||
              W.hasClientLoader
            ) ?
              (G = !0)
            : V.add(L.route.id));
        }),
        V.size === 0)
      )
        return [];
      let w = x0(c, R, m.unstable_trailingSlashAwareDataRequests, 'data');
      return (
        G &&
          V.size > 0 &&
          w.searchParams.set(
            '_routes',
            o
              .filter((L) => V.has(L.route.id))
              .map((L) => L.route.id)
              .join(','),
          ),
        [w.pathname + w.search]
      );
    }, [R, m.unstable_trailingSlashAwareDataRequests, b, f, y, D, o, c, S]),
    Z = N.useMemo(() => R0(A, y), [A, y]),
    F = B0(A);
  return N.createElement(
    N.Fragment,
    null,
    q.map((V) =>
      N.createElement('link', {
        key: V,
        rel: 'prefetch',
        as: 'fetch',
        href: V,
        ...r,
      }),
    ),
    Z.map((V) =>
      N.createElement('link', { key: V, rel: 'modulepreload', href: V, ...r }),
    ),
    F.map(({ key: V, link: G }) =>
      N.createElement('link', {
        key: V,
        nonce: r.nonce,
        ...G,
        crossOrigin: G.crossOrigin ?? r.crossOrigin,
      }),
    ),
  );
}
function Y0(...c) {
  return (o) => {
    c.forEach((r) => {
      typeof r == 'function' ? r(o) : r != null && (r.current = o);
    });
  };
}
var L0 =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  L0 && (window.__reactRouterVersion = '7.13.0');
} catch {}
function G0({
  basename: c,
  children: o,
  unstable_useTransitions: r,
  window: f,
}) {
  let m = N.useRef();
  m.current == null && (m.current = _v({ window: f, v5Compat: !0 }));
  let y = m.current,
    [S, R] = N.useState({ action: y.action, location: y.location }),
    b = N.useCallback(
      (v) => {
        r === !1 ? R(v) : N.startTransition(() => R(v));
      },
      [r],
    );
  return (
    N.useLayoutEffect(() => y.listen(b), [y, b]),
    N.createElement(y0, {
      basename: c,
      children: o,
      location: S.location,
      navigationType: S.action,
      navigator: y,
      unstable_useTransitions: r,
    })
  );
}
var Yh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ul = N.forwardRef(function (
    {
      onClick: o,
      discover: r = 'render',
      prefetch: f = 'none',
      relative: m,
      reloadDocument: y,
      replace: S,
      state: R,
      target: b,
      to: v,
      preventScrollReset: D,
      viewTransition: A,
      unstable_defaultShouldRevalidate: q,
      ...Z
    },
    F,
  ) {
    let { basename: V, unstable_useTransitions: G } = N.useContext(Re),
      w = typeof v == 'string' && Yh.test(v),
      L = Nh(v, V);
    v = L.to;
    let W = Pv(v, { relative: m }),
      [Et, bt, Nt] = U0(f, Z),
      P = V0(v, {
        replace: S,
        state: R,
        target: b,
        preventScrollReset: D,
        relative: m,
        viewTransition: A,
        unstable_defaultShouldRevalidate: q,
        unstable_useTransitions: G,
      });
    function Ot(ge) {
      (o && o(ge), ge.defaultPrevented || P(ge));
    }
    let Xt = N.createElement('a', {
      ...Z,
      ...Nt,
      'href': L.absoluteURL || W,
      'onClick': L.isExternal || y ? o : Ot,
      'ref': Y0(F, bt),
      'target': b,
      'data-discover': !w && r === 'render' ? 'true' : void 0,
    });
    return Et && !w ?
        N.createElement(N.Fragment, null, Xt, N.createElement(H0, { page: W }))
      : Xt;
  });
Ul.displayName = 'Link';
var X0 = N.forwardRef(function (
  {
    'aria-current': o = 'page',
    'caseSensitive': r = !1,
    'className': f = '',
    'end': m = !1,
    'style': y,
    'to': S,
    'viewTransition': R,
    'children': b,
    ...v
  },
  D,
) {
  let A = wn(S, { relative: v.relative }),
    q = la(),
    Z = N.useContext(yi),
    { navigator: F, basename: V } = N.useContext(Re),
    G = Z != null && W0(A) && R === !0,
    w = F.encodeLocation ? F.encodeLocation(A).pathname : A.pathname,
    L = q.pathname,
    W =
      Z && Z.navigation && Z.navigation.location ?
        Z.navigation.location.pathname
      : null;
  (r ||
    ((L = L.toLowerCase()),
    (W = W ? W.toLowerCase() : null),
    (w = w.toLowerCase())),
    W && V && (W = cl(W, V) || W));
  const Et = w !== '/' && w.endsWith('/') ? w.length - 1 : w.length;
  let bt = L === w || (!m && L.startsWith(w) && L.charAt(Et) === '/'),
    Nt =
      W != null &&
      (W === w || (!m && W.startsWith(w) && W.charAt(w.length) === '/')),
    P = { isActive: bt, isPending: Nt, isTransitioning: G },
    Ot = bt ? o : void 0,
    Xt;
  typeof f == 'function' ?
    (Xt = f(P))
  : (Xt = [
      f,
      bt ? 'active' : null,
      Nt ? 'pending' : null,
      G ? 'transitioning' : null,
    ]
      .filter(Boolean)
      .join(' '));
  let ge = typeof y == 'function' ? y(P) : y;
  return N.createElement(
    Ul,
    {
      ...v,
      'aria-current': Ot,
      'className': Xt,
      'ref': D,
      'style': ge,
      'to': S,
      'viewTransition': R,
    },
    typeof b == 'function' ? b(P) : b,
  );
});
X0.displayName = 'NavLink';
var Q0 = N.forwardRef(
  (
    {
      discover: c = 'render',
      fetcherKey: o,
      navigate: r,
      reloadDocument: f,
      replace: m,
      state: y,
      method: S = di,
      action: R,
      onSubmit: b,
      relative: v,
      preventScrollReset: D,
      viewTransition: A,
      unstable_defaultShouldRevalidate: q,
      ...Z
    },
    F,
  ) => {
    let { unstable_useTransitions: V } = N.useContext(Re),
      G = J0(),
      w = $0(R, { relative: v }),
      L = S.toLowerCase() === 'get' ? 'get' : 'post',
      W = typeof R == 'string' && Yh.test(R),
      Et = (bt) => {
        if ((b && b(bt), bt.defaultPrevented)) return;
        bt.preventDefault();
        let Nt = bt.nativeEvent.submitter,
          P = Nt?.getAttribute('formmethod') || S,
          Ot = () =>
            G(Nt || bt.currentTarget, {
              fetcherKey: o,
              method: P,
              navigate: r,
              replace: m,
              state: y,
              relative: v,
              preventScrollReset: D,
              viewTransition: A,
              unstable_defaultShouldRevalidate: q,
            });
        V && r !== !1 ? N.startTransition(() => Ot()) : Ot();
      };
    return N.createElement('form', {
      'ref': F,
      'method': L,
      'action': w,
      'onSubmit': f ? b : Et,
      ...Z,
      'data-discover': !W && c === 'render' ? 'true' : void 0,
    });
  },
);
Q0.displayName = 'Form';
function Z0(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Lh(c) {
  let o = N.useContext(Za);
  return (At(o, Z0(c)), o);
}
function V0(
  c,
  {
    target: o,
    replace: r,
    state: f,
    preventScrollReset: m,
    relative: y,
    viewTransition: S,
    unstable_defaultShouldRevalidate: R,
    unstable_useTransitions: b,
  } = {},
) {
  let v = t0(),
    D = la(),
    A = wn(c, { relative: y });
  return N.useCallback(
    (q) => {
      if (b0(q, o)) {
        q.preventDefault();
        let Z = r !== void 0 ? r : Zn(D) === Zn(A),
          F = () =>
            v(c, {
              replace: Z,
              state: f,
              preventScrollReset: m,
              relative: y,
              viewTransition: S,
              unstable_defaultShouldRevalidate: R,
            });
        b ? N.startTransition(() => F()) : F();
      }
    },
    [D, v, A, r, f, o, c, m, y, S, R, b],
  );
}
var K0 = 0,
  w0 = () => `__${String(++K0)}__`;
function J0() {
  let { router: c } = Lh('useSubmit'),
    { basename: o } = N.useContext(Re),
    r = r0(),
    f = c.fetch,
    m = c.navigate;
  return N.useCallback(
    async (y, S = {}) => {
      let { action: R, method: b, encType: v, formData: D, body: A } = z0(y, o);
      if (S.navigate === !1) {
        let q = S.fetcherKey || w0();
        await f(q, r, S.action || R, {
          unstable_defaultShouldRevalidate: S.unstable_defaultShouldRevalidate,
          preventScrollReset: S.preventScrollReset,
          formData: D,
          body: A,
          formMethod: S.method || b,
          formEncType: S.encType || v,
          flushSync: S.flushSync,
        });
      } else
        await m(S.action || R, {
          unstable_defaultShouldRevalidate: S.unstable_defaultShouldRevalidate,
          preventScrollReset: S.preventScrollReset,
          formData: D,
          body: A,
          formMethod: S.method || b,
          formEncType: S.encType || v,
          replace: S.replace,
          state: S.state,
          fromRouteId: r,
          flushSync: S.flushSync,
          viewTransition: S.viewTransition,
        });
    },
    [f, m, o, r],
  );
}
function $0(c, { relative: o } = {}) {
  let { basename: r } = N.useContext(Re),
    f = N.useContext(fl);
  At(f, 'useFormAction must be used inside a RouteContext');
  let [m] = f.matches.slice(-1),
    y = { ...wn(c || '.', { relative: o }) },
    S = la();
  if (c == null) {
    y.search = S.search;
    let R = new URLSearchParams(y.search),
      b = R.getAll('index');
    if (b.some((D) => D === '')) {
      (R.delete('index'),
        b.filter((A) => A).forEach((A) => R.append('index', A)));
      let D = R.toString();
      y.search = D ? `?${D}` : '';
    }
  }
  return (
    (!c || c === '.') &&
      m.route.index &&
      (y.search = y.search ? y.search.replace(/^\?/, '?index&') : '?index'),
    r !== '/' && (y.pathname = y.pathname === '/' ? r : il([r, y.pathname])),
    Zn(y)
  );
}
function W0(c, { relative: o } = {}) {
  let r = N.useContext(Rh);
  At(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: f } = Lh('useViewTransitionState'),
    m = wn(c, { relative: o });
  if (!r.isTransitioning) return !1;
  let y = cl(r.currentLocation.pathname, f) || r.currentLocation.pathname,
    S = cl(r.nextLocation.pathname, f) || r.nextLocation.pathname;
  return mi(m.pathname, S) != null || mi(m.pathname, y) != null;
}
const k0 = () =>
    h.jsxs('nav', {
      style: {
        display: 'flex',
        gap: '20px',
        padding: '20px',
        borderBottom: '1px solid #ddd',
      },
      children: [
        h.jsx(Ul, { to: '/', children: 'Home' }),
        h.jsx(Ul, { to: '/phones', children: 'Phones' }),
        h.jsx(Ul, { to: '/tablets', children: 'Tablets' }),
        h.jsx(Ul, { to: '/accessories', children: 'Accessories' }),
        h.jsx(Ul, { to: '/favorites', children: 'Favorites' }),
        h.jsx(Ul, { to: '/cart', children: 'Cart' }),
      ],
    }),
  F0 = '_footer_7q96a_1',
  I0 = '_container_7q96a_7',
  P0 = '_logo_7q96a_13',
  tg = '_nav_7q96a_19',
  eg = '_back_7q96a_37',
  lg = '_arrow_7q96a_47',
  Xa = { footer: F0, container: I0, logo: P0, nav: tg, back: eg, arrow: lg },
  ag = '/assets/Logo-BX5z9YCI.svg',
  ng = () => {
    const c = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return h.jsx('footer', {
      className: Xa.footer,
      children: h.jsxs('div', {
        className: Xa.container,
        children: [
          h.jsx('img', { src: ag, alt: 'Nice Gadgets', className: Xa.logo }),
          h.jsxs('nav', {
            className: Xa.nav,
            children: [
              h.jsx('a', {
                href: 'https://github.com/Team-Project-Phone-catalog/phone-catalog-frontend',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: 'GITHUB',
              }),
              h.jsx('a', { href: '#', children: 'CONTACTS' }),
              h.jsx('a', { href: '#', children: 'RIGHTS' }),
            ],
          }),
          h.jsxs('div', {
            className: Xa.back,
            children: [
              h.jsx('span', { children: 'Back to top' }),
              h.jsx('button', {
                type: 'button',
                onClick: c,
                className: Xa.arrow,
                children: '↑',
              }),
            ],
          }),
        ],
      }),
    });
  },
  ts = () => fetch('/api/phones.json').then((c) => c.json()),
  es = () => fetch('/api/tablets.json').then((c) => c.json()),
  ls = () => fetch('/api/accessories.json').then((c) => c.json()),
  ug = ({ currentPrice: c, fullPrice: o }) =>
    h.jsxs('p', {
      className: 'product-price',
      children: [
        h.jsxs('span', {
          className: 'product-price__current',
          children: ['$', c],
        }),
        h.jsxs('span', {
          className: 'product-price__full',
          children: ['$', o],
        }),
      ],
    }),
  ig = ({
    screen: c,
    capacity: o,
    ram: r,
    resolution: f,
    showTopLine: m = !0,
  }) =>
    h.jsxs('div', {
      className: `product-features ${m ? '' : 'product-features--no-line'}`,
      children: [
        h.jsxs('p', {
          className: 'product-features__item',
          children: [
            h.jsx('span', {
              className: 'product-features__name',
              children: 'Screen',
            }),
            h.jsx('span', {
              className: 'product-features__value',
              children: c,
            }),
          ],
        }),
        f &&
          h.jsxs('p', {
            className: 'product-features__item',
            children: [
              h.jsx('span', {
                className: 'product-features__name',
                children: 'Resolution',
              }),
              h.jsx('span', {
                className: 'product-features__value',
                children: f,
              }),
            ],
          }),
        h.jsxs('p', {
          className: 'product-features__item',
          children: [
            h.jsx('span', {
              className: 'product-features__name',
              children: 'Capacity',
            }),
            h.jsx('span', {
              className: 'product-features__value',
              children: o,
            }),
          ],
        }),
        h.jsxs('p', {
          className: 'product-features__item',
          children: [
            h.jsx('span', {
              className: 'product-features__name',
              children: 'RAM',
            }),
            h.jsx('span', {
              className: 'product-features__value',
              children: r,
            }),
          ],
        }),
      ],
    }),
  cg = ({ onAddToCart: c, onToggleFavorite: o, isFavorite: r }) =>
    h.jsxs('div', {
      className: 'product-actions',
      children: [
        h.jsx('button', {
          type: 'button',
          className: 'product-actions__add-to-cart',
          onClick: c,
          children: 'Add to cart',
        }),
        h.jsx('button', {
          'type': 'button',
          'className': 'product-actions__favorites',
          'onClick': o,
          'aria-label': r ? 'Remove from favorites' : 'Add to favorites',
        }),
      ],
    }),
  Qa = ({ product: c }) => {
    if (!c) return null;
    const o = 'priceDiscount' in c ? c.priceDiscount : c.price,
      r = 'priceRegular' in c ? c.priceRegular : c.fullPrice,
      f = 'images' in c ? c.images[0] : c.image,
      m = f ? `/${f}` : null;
    return h.jsxs('div', {
      className: 'card',
      children: [
        h.jsx('div', {
          className: 'card__img-container',
          children:
            m &&
            h.jsx('img', {
              className: 'card__image',
              src: m,
              alt: c.name,
              width: '208px',
              height: '196px',
            }),
        }),
        h.jsx('h2', { className: 'card__title', children: c.name }),
        h.jsx(ug, { currentPrice: o, fullPrice: r }),
        h.jsx(ig, { screen: c.screen, capacity: c.capacity, ram: c.ram }),
        h.jsx(cg, {
          onAddToCart: () => console.log('Added'),
          onToggleFavorite: () => console.log('Fav'),
        }),
      ],
    });
  },
  fg = '_title_rkc0s_19',
  sg = '_modelsCount_rkc0s_30',
  og = '_controls_rkc0s_38',
  rg = '_control_rkc0s_38',
  dg = '_label_rkc0s_47',
  hg = '_select_rkc0s_51',
  me = {
    'phones-page': '_phones-page_rkc0s_1',
    'title': fg,
    'modelsCount': sg,
    'phones-page__controls': '_phones-page__controls_rkc0s_35',
    'controls': og,
    'control': rg,
    'label': dg,
    'select': hg,
    'phones-page__list': '_phones-page__list_rkc0s_65',
  },
  mg = () => {
    const [c, o] = N.useState([]);
    return (
      N.useEffect(() => {
        (async () => {
          const f = await ts();
          o(f);
        })();
      }, []),
      h.jsxs('div', {
        className: me['phones-page'],
        children: [
          h.jsx('h1', { className: me.title, children: 'Mobile phones' }),
          h.jsxs('p', {
            className: me.modelsCount,
            children: [c.length, ' models'],
          }),
          h.jsx('section', {
            className: me['phones-page__controls'],
            children: h.jsxs('div', {
              className: me.controls,
              children: [
                h.jsxs('div', {
                  className: me.control,
                  children: [
                    h.jsx('label', {
                      className: me.label,
                      children: 'Sort by',
                    }),
                    h.jsxs('select', {
                      className: me.select,
                      children: [
                        h.jsx('option', { children: 'Newest' }),
                        h.jsx('option', { children: 'Alphabetically' }),
                        h.jsx('option', { children: 'Cheapest' }),
                      ],
                    }),
                  ],
                }),
                h.jsxs('div', {
                  className: me.control,
                  children: [
                    h.jsx('label', {
                      className: me.label,
                      children: 'Items on page',
                    }),
                    h.jsxs('select', {
                      className: me.select,
                      children: [
                        h.jsx('option', { children: '16' }),
                        h.jsx('option', { children: '32' }),
                        h.jsx('option', { children: '64' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          h.jsx('section', {
            className: me['phones-page__list'],
            children: c.map((r) => h.jsx(Qa, { product: r }, r.id)),
          }),
          h.jsx('section', { className: me['phones-page__pagination'] }),
        ],
      })
    );
  },
  yg = '_title_19a6y_19',
  vg = '_modelsCount_19a6y_29',
  gg = '_controls_19a6y_37',
  pg = '_control_19a6y_37',
  _g = '_label_19a6y_46',
  Sg = '_select_19a6y_50',
  ye = {
    'accessories-page': '_accessories-page_19a6y_1',
    'title': yg,
    'modelsCount': vg,
    'accessories-page__controls': '_accessories-page__controls_19a6y_34',
    'controls': gg,
    'control': pg,
    'label': _g,
    'select': Sg,
    'accessories-page__list': '_accessories-page__list_19a6y_64',
  },
  bg = () => {
    const [c, o] = N.useState([]);
    return (
      N.useEffect(() => {
        (async () => {
          const f = await ls();
          o(f);
        })();
      }, []),
      h.jsxs('div', {
        className: ye['accessories-page'],
        children: [
          h.jsx('h1', { className: ye.title, children: 'Accessories' }),
          h.jsxs('p', {
            className: ye.modelsCount,
            children: [c.length, ' models'],
          }),
          h.jsx('section', {
            className: ye['accessories-page__controls'],
            children: h.jsxs('div', {
              className: ye.controls,
              children: [
                h.jsxs('div', {
                  className: ye.control,
                  children: [
                    h.jsx('label', {
                      className: ye.label,
                      children: 'Sort by',
                    }),
                    h.jsxs('select', {
                      className: ye.select,
                      children: [
                        h.jsx('option', { children: 'Newest' }),
                        h.jsx('option', { children: 'Alphabetically' }),
                        h.jsx('option', { children: 'Cheapest' }),
                      ],
                    }),
                  ],
                }),
                h.jsxs('div', {
                  className: ye.control,
                  children: [
                    h.jsx('label', {
                      className: ye.label,
                      children: 'Items on page',
                    }),
                    h.jsxs('select', {
                      className: ye.select,
                      children: [
                        h.jsx('option', { children: '16' }),
                        h.jsx('option', { children: '32' }),
                        h.jsx('option', { children: '64' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          h.jsx('section', {
            className: ye['accessories-page__list'],
            children: c.map((r) => h.jsx(Qa, { product: r }, r.id)),
          }),
          h.jsx('section', { className: ye['accessories-page__pagination'] }),
        ],
      })
    );
  },
  Eg = '_cart_1xti1_8',
  Tg = '_title_1xti1_24',
  zg = '_cartContent_1xti1_44',
  xg = '_products_1xti1_70',
  Ag = '_summary_1xti1_81',
  Xn = { cart: Eg, title: Tg, cartContent: zg, products: xg, summary: Ag },
  Ng = '_block_1xzjy_1',
  jg = '_price_1xzjy_7',
  Rg = '_info_1xzjy_17',
  Og = '_button_1xzjy_24',
  Mg = '_buttonCheck_1xzjy_33',
  Qn = { block: Ng, price: jg, info: Rg, button: Og, buttonCheck: Mg },
  Cg = () =>
    h.jsxs('div', {
      className: Qn.block,
      children: [
        h.jsx('h2', { className: Qn.price, children: '$2656' }),
        h.jsx('p', { className: Qn.info, children: 'Total for 3 items' }),
        h.jsx('div', {
          className: Qn.button,
          children: h.jsx('button', {
            className: Qn.buttonCheck,
            children: 'Checkout',
          }),
        }),
      ],
    }),
  Dg = '_item_18h8g_1',
  Ug = '_remove_18h8g_19',
  Hg = '_imageWrapper_18h8g_37',
  Bg = '_image_18h8g_37',
  qg = '_details_18h8g_57',
  Yg = '_name_18h8g_68',
  Lg = '_controls_18h8g_76',
  Gg = '_quantity_18h8g_91',
  Xg = '_btnPlus_18h8g_102',
  Qg = '_btnMinus_18h8g_112',
  Zg = '_count_18h8g_122',
  Vg = '_price_18h8g_128',
  je = {
    item: Dg,
    remove: Ug,
    imageWrapper: Hg,
    image: Bg,
    details: qg,
    name: Yg,
    controls: Lg,
    quantity: Gg,
    btnPlus: Xg,
    btnMinus: Qg,
    count: Zg,
    price: Vg,
  },
  Kf = () =>
    h.jsxs('div', {
      className: je.item,
      children: [
        h.jsx('button', {
          className: je.remove,
          type: 'button',
          children: 'x',
        }),
        h.jsx('div', {
          className: je.imageWrapper,
          children: h.jsx('img', {
            src: '/img/phones/apple-iphone-14-pro/spaceblack/00.webp',
            alt: 'Apple iPhone 14 Pro',
            className: je.image,
          }),
        }),
        h.jsx('div', {
          className: je.details,
          children: h.jsx('h3', {
            className: je.name,
            children: 'Apple iPhone 14 Pro 128GB Silver (MQ023)',
          }),
        }),
        h.jsxs('div', {
          className: je.controls,
          children: [
            h.jsxs('div', {
              className: je.quantity,
              children: [
                h.jsx('button', { className: je.btnMinus, children: '-' }),
                h.jsx('span', { className: je.count, children: '1' }),
                h.jsx('button', { className: je.btnPlus, children: '+' }),
              ],
            }),
            h.jsx('p', { className: je.price, children: '$999' }),
          ],
        }),
      ],
    }),
  Kg = () =>
    h.jsx('div', {
      className: 'buttonBack',
      children: h.jsx('a', {
        className: 'buttonBackLink',
        href: '#',
        children: 'Back',
      }),
    }),
  wg = () =>
    h.jsxs('div', {
      className: Xn.cart,
      children: [
        h.jsx(Kg, {}),
        h.jsx('div', {
          className: Xn.title,
          children: h.jsx('h1', { children: 'Cart' }),
        }),
        h.jsxs('div', {
          className: Xn.cartContent,
          children: [
            h.jsxs('div', {
              className: Xn.products,
              children: [h.jsx(Kf, {}), h.jsx(Kf, {}), h.jsx(Kf, {})],
            }),
            h.jsx('div', { className: Xn.summary, children: h.jsx(Cg, {}) }),
          ],
        }),
      ],
    }),
  Jg = () =>
    h.jsxs('div', {
      className: 'notFound',
      children: [
        h.jsx('h1', { className: 'title', children: 'Помилка 404' }),
        h.jsx('h2', {
          className: 'title__message',
          children: 'Сторінка не знайдена',
        }),
      ],
    }),
  $g = '_title_n89p7_19',
  Wg = '_modelsCount_n89p7_29',
  kg = '_controls_n89p7_37',
  Fg = '_control_n89p7_37',
  Ig = '_label_n89p7_46',
  Pg = '_select_n89p7_50',
  ve = {
    'tablets-page': '_tablets-page_n89p7_1',
    'title': $g,
    'modelsCount': Wg,
    'tablets-page__controls': '_tablets-page__controls_n89p7_34',
    'controls': kg,
    'control': Fg,
    'label': Ig,
    'select': Pg,
    'tablets-page__list': '_tablets-page__list_n89p7_64',
  },
  t1 = () => {
    const [c, o] = N.useState([]);
    return (
      N.useEffect(() => {
        (async () => {
          const f = await es();
          o(f);
        })();
      }, []),
      h.jsxs('div', {
        className: ve['tablets-page'],
        children: [
          h.jsx('h1', { className: ve.title, children: 'Tablets' }),
          h.jsxs('p', {
            className: ve.modelsCount,
            children: [c.length, ' models'],
          }),
          h.jsx('section', {
            className: ve['tablets-page__controls'],
            children: h.jsxs('div', {
              className: ve.controls,
              children: [
                h.jsxs('div', {
                  className: ve.control,
                  children: [
                    h.jsx('label', {
                      className: ve.label,
                      children: 'Sort by',
                    }),
                    h.jsxs('select', {
                      className: ve.select,
                      children: [
                        h.jsx('option', { children: 'Newest' }),
                        h.jsx('option', { children: 'Alphabetically' }),
                        h.jsx('option', { children: 'Cheapest' }),
                      ],
                    }),
                  ],
                }),
                h.jsxs('div', {
                  className: ve.control,
                  children: [
                    h.jsx('label', {
                      className: ve.label,
                      children: 'Items on page',
                    }),
                    h.jsxs('select', {
                      className: ve.select,
                      children: [
                        h.jsx('option', { children: '16' }),
                        h.jsx('option', { children: '32' }),
                        h.jsx('option', { children: '64' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          h.jsx('section', {
            className: ve['tablets-page__list'],
            children: c.map((r) => h.jsx(Qa, { product: r }, r.id)),
          }),
          h.jsx('section', { className: ve['tablets-page__pagination'] }),
        ],
      })
    );
  },
  e1 = '_home_7gjmc_1',
  l1 = '_container_7gjmc_12',
  a1 = '_hero_7gjmc_28',
  n1 = '_hero__title_7gjmc_41',
  u1 = '_hero__slider_7gjmc_59',
  i1 = '_hero__arrow_7gjmc_63',
  c1 = '_hero__banner_7gjmc_98',
  f1 = '_hero__dots_7gjmc_207',
  s1 = '_hero__dot_7gjmc_207',
  o1 = '_section_7gjmc_236',
  r1 = '_section__header_7gjmc_249',
  d1 = '_section__title_7gjmc_260',
  h1 = '_section__arrows_7gjmc_275',
  m1 = '_categories_7gjmc_333',
  J = {
    'home': e1,
    'container': l1,
    'hero': a1,
    'hero__title': n1,
    'hero__slider': u1,
    'hero__arrow': i1,
    'hero__arrow--left': '_hero__arrow--left_7gjmc_89',
    'hero__arrow--right': '_hero__arrow--right_7gjmc_94',
    'hero__banner': c1,
    'hero__banner-img': '_hero__banner-img_7gjmc_117',
    'hero__dots': f1,
    'hero__dot': s1,
    'hero__dot--active': '_hero__dot--active_7gjmc_228',
    'section': o1,
    'section__header': r1,
    'section__title': d1,
    'section__arrows': h1,
    'arrow-btn': '_arrow-btn_7gjmc_280',
    'products-slider': '_products-slider_7gjmc_303',
    'products-slider__track': '_products-slider__track_7gjmc_328',
    'categories': m1,
    'category-card': '_category-card_7gjmc_351',
    'category-card__image': '_category-card__image_7gjmc_357',
    'category-card__image-wrapper': '_category-card__image-wrapper_7gjmc_360',
    'category-card__info': '_category-card__info_7gjmc_384',
    'category-card__title': '_category-card__title_7gjmc_388',
    'category-card__count': '_category-card__count_7gjmc_404',
  },
  y1 = (c) => [...c].sort((o, r) => r.year - o.year),
  v1 = (c) =>
    [...c].sort((o, r) => {
      const f = o.fullPrice - o.price;
      return r.fullPrice - r.price - f;
    }),
  g1 = () => {
    const [c, o] = N.useState([]),
      [r, f] = N.useState([]),
      [m, y] = N.useState([]),
      S = [...c, ...r, ...m],
      R = y1(S).slice(0, 12),
      b = v1(S).slice(0, 12);
    return (
      N.useEffect(() => {
        (ts()
          .then(o)
          .catch((v) => console.error('Error loading phones:', v)),
          es()
            .then(f)
            .catch((v) => console.error('Error loading tablets:', v)),
          ls()
            .then(y)
            .catch((v) => console.error('Error loading accessories:', v)));
      }, []),
      h.jsx('main', {
        className: J.home,
        children: h.jsxs('div', {
          className: J.container,
          children: [
            h.jsxs('section', {
              className: J.hero,
              children: [
                h.jsx('h1', {
                  className: J.hero__title,
                  children: 'Welcome to Nice Gadgets store!',
                }),
                h.jsxs('div', {
                  className: J.hero__slider,
                  children: [
                    h.jsx('button', {
                      'className': `${J.hero__arrow} ${J['hero__arrow--left']}`,
                      'aria-label': 'Previous slide',
                    }),
                    h.jsx('div', {
                      className: J.hero__banner,
                      children: h.jsx('img', {
                        src: '/img/main-banner.png',
                        alt: 'iPhone 14 Pro promotion',
                        className: J['hero__banner-img'],
                      }),
                    }),
                    h.jsx('button', {
                      'className': `${J.hero__arrow} ${J['hero__arrow--right']}`,
                      'aria-label': 'Next slide',
                    }),
                  ],
                }),
                h.jsxs('div', {
                  className: J.hero__dots,
                  children: [
                    h.jsx('button', {
                      'className': `${J.hero__dot} ${J['hero__dot--active']}`,
                      'aria-label': 'Slide 1',
                    }),
                    h.jsx('button', {
                      'className': J.hero__dot,
                      'aria-label': 'Slide 2',
                    }),
                    h.jsx('button', {
                      'className': J.hero__dot,
                      'aria-label': 'Slide 3',
                    }),
                  ],
                }),
              ],
            }),
            h.jsxs('section', {
              className: J.section,
              children: [
                h.jsxs('div', {
                  className: J.section__header,
                  children: [
                    h.jsx('h2', {
                      className: J.section__title,
                      children: 'Brand new models',
                    }),
                    h.jsxs('div', {
                      className: J.section__arrows,
                      children: [
                        h.jsx('button', {
                          'className': J['arrow-btn'],
                          'aria-label': 'Previous',
                        }),
                        h.jsx('button', {
                          'className': J['arrow-btn'],
                          'aria-label': 'Next',
                        }),
                      ],
                    }),
                  ],
                }),
                h.jsx('div', {
                  className: J['products-slider'],
                  children: h.jsx('div', {
                    className: J['products-slider__track'],
                    children: R.map((v) => h.jsx(Qa, { product: v }, v.id)),
                  }),
                }),
              ],
            }),
            h.jsxs('section', {
              className: J.section,
              children: [
                h.jsx('h2', {
                  className: J.section__title,
                  children: 'Shop by category',
                }),
                h.jsxs('div', {
                  className: J.categories,
                  children: [
                    h.jsxs('article', {
                      className: J['category-card'],
                      children: [
                        h.jsx('div', {
                          className: J['category-card__image-wrapper'],
                          children: h.jsx('img', {
                            src: '/img/category-phones.jpg',
                            alt: 'Mobile phones',
                            className: J['category-card__image'],
                          }),
                        }),
                        h.jsxs('div', {
                          className: J['category-card__info'],
                          children: [
                            h.jsx('h3', {
                              className: J['category-card__title'],
                              children: 'Mobile phones',
                            }),
                            h.jsxs('p', {
                              className: J['category-card__count'],
                              children: [c.length, ' models'],
                            }),
                          ],
                        }),
                      ],
                    }),
                    h.jsxs('article', {
                      className: J['category-card'],
                      children: [
                        h.jsx('div', {
                          className: J['category-card__image-wrapper'],
                          children: h.jsx('img', {
                            src: '/img/category-tablets.jpg',
                            alt: 'Tablets',
                            className: J['category-card__image'],
                          }),
                        }),
                        h.jsxs('div', {
                          className: J['category-card__info'],
                          children: [
                            h.jsx('h3', {
                              className: J['category-card__title'],
                              children: 'Tablets',
                            }),
                            h.jsxs('p', {
                              className: J['category-card__count'],
                              children: [r.length, ' models'],
                            }),
                          ],
                        }),
                      ],
                    }),
                    h.jsxs('article', {
                      className: J['category-card'],
                      children: [
                        h.jsx('div', {
                          className: J['category-card__image-wrapper'],
                          children: h.jsx('img', {
                            src: '/img/category-accessories.jpg',
                            alt: 'Accessories',
                            className: J['category-card__image'],
                          }),
                        }),
                        h.jsxs('div', {
                          className: J['category-card__info'],
                          children: [
                            h.jsx('h3', {
                              className: J['category-card__title'],
                              children: 'Accessories',
                            }),
                            h.jsxs('p', {
                              className: J['category-card__count'],
                              children: [m.length, ' models'],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            h.jsxs('section', {
              className: J.section,
              children: [
                h.jsxs('div', {
                  className: J.section__header,
                  children: [
                    h.jsx('h2', {
                      className: J.section__title,
                      children: 'Hot prices',
                    }),
                    h.jsxs('div', {
                      className: J.section__arrows,
                      children: [
                        h.jsx('button', {
                          'className': J['arrow-btn'],
                          'aria-label': 'Previous',
                        }),
                        h.jsx('button', {
                          'className': J['arrow-btn'],
                          'aria-label': 'Next',
                        }),
                      ],
                    }),
                  ],
                }),
                h.jsx('div', {
                  className: J['products-slider'],
                  children: h.jsx('div', {
                    className: J['products-slider__track'],
                    children: b.map((v) => h.jsx(Qa, { product: v }, v.id)),
                  }),
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  p1 = () => {
    const [c, o] = N.useState([]);
    return (
      N.useEffect(() => {
        (async () => {
          const f = JSON.parse(localStorage.getItem('favorites') || '[]'),
            [m, y, S] = await Promise.all([ts(), es(), ls()]),
            b = [...m, ...y, ...S].filter((v) => f.includes(v.itemId));
          o(b);
        })();
      }, []),
      h.jsx(h.Fragment, {
        children: h.jsxs('div', {
          className: 'favorites-page',
          children: [
            h.jsx('div', {
              className: 'favorites-page__container',
              children: h.jsxs('div', {
                className: 'favorites-page__text',
                children: [
                  h.jsx('div', {
                    className: 'favorites-page__title',
                    children: 'Favourites',
                  }),
                  h.jsxs('div', {
                    className: 'favorites-page__items-number',
                    children: [c.length, ' items'],
                  }),
                ],
              }),
            }),
            h.jsx('div', {
              className: 'favorites-page__all-favorites',
              children: c.map((r) => h.jsx(Qa, { product: r }, r.itemId)),
            }),
          ],
        }),
      })
    );
  },
  _1 = () =>
    h.jsxs('div', {
      className: 'App',
      children: [
        h.jsx(k0, {}),
        h.jsx('div', {
          className: 'container',
          children: h.jsxs(v0, {
            children: [
              h.jsx(ul, { path: '/', element: h.jsx(g1, {}) }),
              h.jsx(ul, { path: '/phones', element: h.jsx(mg, {}) }),
              h.jsx(ul, { path: '/tablets', element: h.jsx(t1, {}) }),
              h.jsx(ul, { path: '/accessories', element: h.jsx(bg, {}) }),
              h.jsx(ul, { path: '/cart', element: h.jsx(wg, {}) }),
              h.jsx(ul, { path: '/favorites', element: h.jsx(p1, {}) }),
              h.jsx(ul, {
                path: '/product/:productId',
                element: h.jsx('h1', {
                  className: 'title',
                  children: 'Product Details',
                }),
              }),
              h.jsx(ul, { path: '*', element: h.jsx(Jg, {}) }),
            ],
          }),
        }),
        h.jsx(ng, {}),
      ],
    });
pv.createRoot(document.getElementById('root')).render(
  h.jsx(G0, { children: h.jsx(_1, {}) }),
);
