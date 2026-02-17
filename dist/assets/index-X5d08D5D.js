(function () {
  const o = document.createElement('link').relList;
  if (o && o.supports && o.supports('modulepreload')) return;
  for (const m of document.querySelectorAll('link[rel="modulepreload"]')) f(m);
  new MutationObserver((m) => {
    for (const v of m)
      if (v.type === 'childList')
        for (const b of v.addedNodes)
          b.tagName === 'LINK' && b.rel === 'modulepreload' && f(b);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(m) {
    const v = {};
    return (
      m.integrity && (v.integrity = m.integrity),
      m.referrerPolicy && (v.referrerPolicy = m.referrerPolicy),
      m.crossOrigin === 'use-credentials' ? (v.credentials = 'include')
      : m.crossOrigin === 'anonymous' ? (v.credentials = 'omit')
      : (v.credentials = 'same-origin'),
      v
    );
  }
  function f(m) {
    if (m.ep) return;
    m.ep = !0;
    const v = r(m);
    fetch(m.href, v);
  }
})();
var Lf = { exports: {} },
  Gn = {};
var sh;
function vv() {
  if (sh) return Gn;
  sh = 1;
  var c = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.fragment');
  function r(f, m, v) {
    var b = null;
    if (
      (v !== void 0 && (b = '' + v),
      m.key !== void 0 && (b = '' + m.key),
      'key' in m)
    ) {
      v = {};
      for (var j in m) j !== 'key' && (v[j] = m[j]);
    } else v = m;
    return (
      (m = v.ref),
      { $$typeof: c, type: f, key: b, ref: m !== void 0 ? m : null, props: v }
    );
  }
  return ((Gn.Fragment = o), (Gn.jsx = r), (Gn.jsxs = r), Gn);
}
var oh;
function yv() {
  return (oh || ((oh = 1), (Lf.exports = vv())), Lf.exports);
}
var d = yv(),
  Gf = { exports: {} },
  Xn = {},
  Xf = { exports: {} },
  Qf = {};
var rh;
function _v() {
  return (
    rh ||
      ((rh = 1),
      (function (c) {
        function o(R, H) {
          var k = R.length;
          R.push(H);
          t: for (; 0 < k; ) {
            var vt = (k - 1) >>> 1,
              pt = R[vt];
            if (0 < m(pt, H)) ((R[vt] = H), (R[k] = pt), (k = vt));
            else break t;
          }
        }
        function r(R) {
          return R.length === 0 ? null : R[0];
        }
        function f(R) {
          if (R.length === 0) return null;
          var H = R[0],
            k = R.pop();
          if (k !== H) {
            R[0] = k;
            t: for (var vt = 0, pt = R.length, g = pt >>> 1; vt < g; ) {
              var U = 2 * (vt + 1) - 1,
                B = R[U],
                X = U + 1,
                tt = R[X];
              if (0 > m(B, k))
                X < pt && 0 > m(tt, B) ?
                  ((R[vt] = tt), (R[X] = k), (vt = X))
                : ((R[vt] = B), (R[U] = k), (vt = U));
              else if (X < pt && 0 > m(tt, k))
                ((R[vt] = tt), (R[X] = k), (vt = X));
              else break t;
            }
          }
          return H;
        }
        function m(R, H) {
          var k = R.sortIndex - H.sortIndex;
          return k !== 0 ? k : R.id - H.id;
        }
        if (
          ((c.unstable_now = void 0),
          typeof performance == 'object' &&
            typeof performance.now == 'function')
        ) {
          var v = performance;
          c.unstable_now = function () {
            return v.now();
          };
        } else {
          var b = Date,
            j = b.now();
          c.unstable_now = function () {
            return b.now() - j;
          };
        }
        var S = [],
          _ = [],
          O = 1,
          z = null,
          q = 3,
          w = !1,
          F = !1,
          Z = !1,
          G = !1,
          K = typeof setTimeout == 'function' ? setTimeout : null,
          L = typeof clearTimeout == 'function' ? clearTimeout : null,
          W = typeof setImmediate < 'u' ? setImmediate : null;
        function Et(R) {
          for (var H = r(_); H !== null; ) {
            if (H.callback === null) f(_);
            else if (H.startTime <= R)
              (f(_), (H.sortIndex = H.expirationTime), o(S, H));
            else break;
            H = r(_);
          }
        }
        function St(R) {
          if (((Z = !1), Et(R), !F))
            if (r(S) !== null) ((F = !0), At || ((At = !0), Pt()));
            else {
              var H = r(_);
              H !== null && Me(St, H.startTime - R);
            }
        }
        var At = !1,
          P = -1,
          Rt = 5,
          Qt = -1;
        function pe() {
          return G ? !0 : !(c.unstable_now() - Qt < Rt);
        }
        function qe() {
          if (((G = !1), At)) {
            var R = c.unstable_now();
            Qt = R;
            var H = !0;
            try {
              t: {
                ((F = !1), Z && ((Z = !1), L(P), (P = -1)), (w = !0));
                var k = q;
                try {
                  e: {
                    for (
                      Et(R), z = r(S);
                      z !== null && !(z.expirationTime > R && pe());
                    ) {
                      var vt = z.callback;
                      if (typeof vt == 'function') {
                        ((z.callback = null), (q = z.priorityLevel));
                        var pt = vt(z.expirationTime <= R);
                        if (((R = c.unstable_now()), typeof pt == 'function')) {
                          ((z.callback = pt), Et(R), (H = !0));
                          break e;
                        }
                        (z === r(S) && f(S), Et(R));
                      } else f(S);
                      z = r(S);
                    }
                    if (z !== null) H = !0;
                    else {
                      var g = r(_);
                      (g !== null && Me(St, g.startTime - R), (H = !1));
                    }
                  }
                  break t;
                } finally {
                  ((z = null), (q = k), (w = !1));
                }
                H = void 0;
              }
            } finally {
              H ? Pt() : (At = !1);
            }
          }
        }
        var Pt;
        if (typeof W == 'function')
          Pt = function () {
            W(qe);
          };
        else if (typeof MessageChannel < 'u') {
          var Bl = new MessageChannel(),
            Qe = Bl.port2;
          ((Bl.port1.onmessage = qe),
            (Pt = function () {
              Qe.postMessage(null);
            }));
        } else
          Pt = function () {
            K(qe, 0);
          };
        function Me(R, H) {
          P = K(function () {
            R(c.unstable_now());
          }, H);
        }
        ((c.unstable_IdlePriority = 5),
          (c.unstable_ImmediatePriority = 1),
          (c.unstable_LowPriority = 4),
          (c.unstable_NormalPriority = 3),
          (c.unstable_Profiling = null),
          (c.unstable_UserBlockingPriority = 2),
          (c.unstable_cancelCallback = function (R) {
            R.callback = null;
          }),
          (c.unstable_forceFrameRate = function (R) {
            0 > R || 125 < R ?
              console.error(
                'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
              )
            : (Rt = 0 < R ? Math.floor(1e3 / R) : 5);
          }),
          (c.unstable_getCurrentPriorityLevel = function () {
            return q;
          }),
          (c.unstable_next = function (R) {
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
              return R();
            } finally {
              q = k;
            }
          }),
          (c.unstable_requestPaint = function () {
            G = !0;
          }),
          (c.unstable_runWithPriority = function (R, H) {
            switch (R) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                R = 3;
            }
            var k = q;
            q = R;
            try {
              return H();
            } finally {
              q = k;
            }
          }),
          (c.unstable_scheduleCallback = function (R, H, k) {
            var vt = c.unstable_now();
            switch (
              (typeof k == 'object' && k !== null ?
                ((k = k.delay),
                (k = typeof k == 'number' && 0 < k ? vt + k : vt))
              : (k = vt),
              R)
            ) {
              case 1:
                var pt = -1;
                break;
              case 2:
                pt = 250;
                break;
              case 5:
                pt = 1073741823;
                break;
              case 4:
                pt = 1e4;
                break;
              default:
                pt = 5e3;
            }
            return (
              (pt = k + pt),
              (R = {
                id: O++,
                callback: H,
                priorityLevel: R,
                startTime: k,
                expirationTime: pt,
                sortIndex: -1,
              }),
              k > vt ?
                ((R.sortIndex = k),
                o(_, R),
                r(S) === null &&
                  R === r(_) &&
                  (Z ? (L(P), (P = -1)) : (Z = !0), Me(St, k - vt)))
              : ((R.sortIndex = pt),
                o(S, R),
                F || w || ((F = !0), At || ((At = !0), Pt()))),
              R
            );
          }),
          (c.unstable_shouldYield = pe),
          (c.unstable_wrapCallback = function (R) {
            var H = q;
            return function () {
              var k = q;
              q = H;
              try {
                return R.apply(this, arguments);
              } finally {
                q = k;
              }
            };
          }));
      })(Qf)),
    Qf
  );
}
var dh;
function gv() {
  return (dh || ((dh = 1), (Xf.exports = _v())), Xf.exports);
}
var wf = { exports: {} },
  I = {};
var hh;
function pv() {
  if (hh) return I;
  hh = 1;
  var c = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.portal'),
    r = Symbol.for('react.fragment'),
    f = Symbol.for('react.strict_mode'),
    m = Symbol.for('react.profiler'),
    v = Symbol.for('react.consumer'),
    b = Symbol.for('react.context'),
    j = Symbol.for('react.forward_ref'),
    S = Symbol.for('react.suspense'),
    _ = Symbol.for('react.memo'),
    O = Symbol.for('react.lazy'),
    z = Symbol.for('react.activity'),
    q = Symbol.iterator;
  function w(g) {
    return g === null || typeof g != 'object' ?
        null
      : ((g = (q && g[q]) || g['@@iterator']),
        typeof g == 'function' ? g : null);
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
  function K(g, U, B) {
    ((this.props = g),
      (this.context = U),
      (this.refs = G),
      (this.updater = B || F));
  }
  ((K.prototype.isReactComponent = {}),
    (K.prototype.setState = function (g, U) {
      if (typeof g != 'object' && typeof g != 'function' && g != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, g, U, 'setState');
    }),
    (K.prototype.forceUpdate = function (g) {
      this.updater.enqueueForceUpdate(this, g, 'forceUpdate');
    }));
  function L() {}
  L.prototype = K.prototype;
  function W(g, U, B) {
    ((this.props = g),
      (this.context = U),
      (this.refs = G),
      (this.updater = B || F));
  }
  var Et = (W.prototype = new L());
  ((Et.constructor = W), Z(Et, K.prototype), (Et.isPureReactComponent = !0));
  var St = Array.isArray;
  function At() {}
  var P = { H: null, A: null, T: null, S: null },
    Rt = Object.prototype.hasOwnProperty;
  function Qt(g, U, B) {
    var X = B.ref;
    return {
      $$typeof: c,
      type: g,
      key: U,
      ref: X !== void 0 ? X : null,
      props: B,
    };
  }
  function pe(g, U) {
    return Qt(g.type, U, g.props);
  }
  function qe(g) {
    return typeof g == 'object' && g !== null && g.$$typeof === c;
  }
  function Pt(g) {
    var U = { '=': '=0', ':': '=2' };
    return (
      '$' +
      g.replace(/[=:]/g, function (B) {
        return U[B];
      })
    );
  }
  var Bl = /\/+/g;
  function Qe(g, U) {
    return typeof g == 'object' && g !== null && g.key != null ?
        Pt('' + g.key)
      : U.toString(36);
  }
  function Me(g) {
    switch (g.status) {
      case 'fulfilled':
        return g.value;
      case 'rejected':
        throw g.reason;
      default:
        switch (
          (typeof g.status == 'string' ?
            g.then(At, At)
          : ((g.status = 'pending'),
            g.then(
              function (U) {
                g.status === 'pending' &&
                  ((g.status = 'fulfilled'), (g.value = U));
              },
              function (U) {
                g.status === 'pending' &&
                  ((g.status = 'rejected'), (g.reason = U));
              },
            )),
          g.status)
        ) {
          case 'fulfilled':
            return g.value;
          case 'rejected':
            throw g.reason;
        }
    }
    throw g;
  }
  function R(g, U, B, X, tt) {
    var at = typeof g;
    (at === 'undefined' || at === 'boolean') && (g = null);
    var dt = !1;
    if (g === null) dt = !0;
    else
      switch (at) {
        case 'bigint':
        case 'string':
        case 'number':
          dt = !0;
          break;
        case 'object':
          switch (g.$$typeof) {
            case c:
            case o:
              dt = !0;
              break;
            case O:
              return ((dt = g._init), R(dt(g._payload), U, B, X, tt));
          }
      }
    if (dt)
      return (
        (tt = tt(g)),
        (dt = X === '' ? '.' + Qe(g, 0) : X),
        St(tt) ?
          ((B = ''),
          dt != null && (B = dt.replace(Bl, '$&/') + '/'),
          R(tt, U, B, '', function (Ka) {
            return Ka;
          }))
        : tt != null &&
          (qe(tt) &&
            (tt = pe(
              tt,
              B +
                (tt.key == null || (g && g.key === tt.key) ?
                  ''
                : ('' + tt.key).replace(Bl, '$&/') + '/') +
                dt,
            )),
          U.push(tt)),
        1
      );
    dt = 0;
    var Wt = X === '' ? '.' : X + ':';
    if (St(g))
      for (var Ot = 0; Ot < g.length; Ot++)
        ((X = g[Ot]), (at = Wt + Qe(X, Ot)), (dt += R(X, U, B, at, tt)));
    else if (((Ot = w(g)), typeof Ot == 'function'))
      for (g = Ot.call(g), Ot = 0; !(X = g.next()).done; )
        ((X = X.value), (at = Wt + Qe(X, Ot++)), (dt += R(X, U, B, at, tt)));
    else if (at === 'object') {
      if (typeof g.then == 'function') return R(Me(g), U, B, X, tt);
      throw (
        (U = String(g)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (U === '[object Object]' ?
              'object with keys {' + Object.keys(g).join(', ') + '}'
            : U) +
            '). If you meant to render a collection of children, use an array instead.',
        )
      );
    }
    return dt;
  }
  function H(g, U, B) {
    if (g == null) return g;
    var X = [],
      tt = 0;
    return (
      R(g, X, '', '', function (at) {
        return U.call(B, at, tt++);
      }),
      X
    );
  }
  function k(g) {
    if (g._status === -1) {
      var U = g._result;
      ((U = U()),
        U.then(
          function (B) {
            (g._status === 0 || g._status === -1) &&
              ((g._status = 1), (g._result = B));
          },
          function (B) {
            (g._status === 0 || g._status === -1) &&
              ((g._status = 2), (g._result = B));
          },
        ),
        g._status === -1 && ((g._status = 0), (g._result = U)));
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var vt =
      typeof reportError == 'function' ? reportError : (
        function (g) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var U = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                (
                  typeof g == 'object' &&
                  g !== null &&
                  typeof g.message == 'string'
                ) ?
                  String(g.message)
                : String(g),
              error: g,
            });
            if (!window.dispatchEvent(U)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', g);
            return;
          }
          console.error(g);
        }
      ),
    pt = {
      map: H,
      forEach: function (g, U, B) {
        H(
          g,
          function () {
            U.apply(this, arguments);
          },
          B,
        );
      },
      count: function (g) {
        var U = 0;
        return (
          H(g, function () {
            U++;
          }),
          U
        );
      },
      toArray: function (g) {
        return (
          H(g, function (U) {
            return U;
          }) || []
        );
      },
      only: function (g) {
        if (!qe(g))
          throw Error(
            'React.Children.only expected to receive a single React element child.',
          );
        return g;
      },
    };
  return (
    (I.Activity = z),
    (I.Children = pt),
    (I.Component = K),
    (I.Fragment = r),
    (I.Profiler = m),
    (I.PureComponent = W),
    (I.StrictMode = f),
    (I.Suspense = S),
    (I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P),
    (I.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (g) {
        return P.H.useMemoCache(g);
      },
    }),
    (I.cache = function (g) {
      return function () {
        return g.apply(null, arguments);
      };
    }),
    (I.cacheSignal = function () {
      return null;
    }),
    (I.cloneElement = function (g, U, B) {
      if (g == null)
        throw Error(
          'The argument must be a React element, but you passed ' + g + '.',
        );
      var X = Z({}, g.props),
        tt = g.key;
      if (U != null)
        for (at in (U.key !== void 0 && (tt = '' + U.key), U))
          !Rt.call(U, at) ||
            at === 'key' ||
            at === '__self' ||
            at === '__source' ||
            (at === 'ref' && U.ref === void 0) ||
            (X[at] = U[at]);
      var at = arguments.length - 2;
      if (at === 1) X.children = B;
      else if (1 < at) {
        for (var dt = Array(at), Wt = 0; Wt < at; Wt++)
          dt[Wt] = arguments[Wt + 2];
        X.children = dt;
      }
      return Qt(g.type, tt, X);
    }),
    (I.createContext = function (g) {
      return (
        (g = {
          $$typeof: b,
          _currentValue: g,
          _currentValue2: g,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (g.Provider = g),
        (g.Consumer = { $$typeof: v, _context: g }),
        g
      );
    }),
    (I.createElement = function (g, U, B) {
      var X,
        tt = {},
        at = null;
      if (U != null)
        for (X in (U.key !== void 0 && (at = '' + U.key), U))
          Rt.call(U, X) &&
            X !== 'key' &&
            X !== '__self' &&
            X !== '__source' &&
            (tt[X] = U[X]);
      var dt = arguments.length - 2;
      if (dt === 1) tt.children = B;
      else if (1 < dt) {
        for (var Wt = Array(dt), Ot = 0; Ot < dt; Ot++)
          Wt[Ot] = arguments[Ot + 2];
        tt.children = Wt;
      }
      if (g && g.defaultProps)
        for (X in ((dt = g.defaultProps), dt))
          tt[X] === void 0 && (tt[X] = dt[X]);
      return Qt(g, at, tt);
    }),
    (I.createRef = function () {
      return { current: null };
    }),
    (I.forwardRef = function (g) {
      return { $$typeof: j, render: g };
    }),
    (I.isValidElement = qe),
    (I.lazy = function (g) {
      return { $$typeof: O, _payload: { _status: -1, _result: g }, _init: k };
    }),
    (I.memo = function (g, U) {
      return { $$typeof: _, type: g, compare: U === void 0 ? null : U };
    }),
    (I.startTransition = function (g) {
      var U = P.T,
        B = {};
      P.T = B;
      try {
        var X = g(),
          tt = P.S;
        (tt !== null && tt(B, X),
          typeof X == 'object' &&
            X !== null &&
            typeof X.then == 'function' &&
            X.then(At, vt));
      } catch (at) {
        vt(at);
      } finally {
        (U !== null && B.types !== null && (U.types = B.types), (P.T = U));
      }
    }),
    (I.unstable_useCacheRefresh = function () {
      return P.H.useCacheRefresh();
    }),
    (I.use = function (g) {
      return P.H.use(g);
    }),
    (I.useActionState = function (g, U, B) {
      return P.H.useActionState(g, U, B);
    }),
    (I.useCallback = function (g, U) {
      return P.H.useCallback(g, U);
    }),
    (I.useContext = function (g) {
      return P.H.useContext(g);
    }),
    (I.useDebugValue = function () {}),
    (I.useDeferredValue = function (g, U) {
      return P.H.useDeferredValue(g, U);
    }),
    (I.useEffect = function (g, U) {
      return P.H.useEffect(g, U);
    }),
    (I.useEffectEvent = function (g) {
      return P.H.useEffectEvent(g);
    }),
    (I.useId = function () {
      return P.H.useId();
    }),
    (I.useImperativeHandle = function (g, U, B) {
      return P.H.useImperativeHandle(g, U, B);
    }),
    (I.useInsertionEffect = function (g, U) {
      return P.H.useInsertionEffect(g, U);
    }),
    (I.useLayoutEffect = function (g, U) {
      return P.H.useLayoutEffect(g, U);
    }),
    (I.useMemo = function (g, U) {
      return P.H.useMemo(g, U);
    }),
    (I.useOptimistic = function (g, U) {
      return P.H.useOptimistic(g, U);
    }),
    (I.useReducer = function (g, U, B) {
      return P.H.useReducer(g, U, B);
    }),
    (I.useRef = function (g) {
      return P.H.useRef(g);
    }),
    (I.useState = function (g) {
      return P.H.useState(g);
    }),
    (I.useSyncExternalStore = function (g, U, B) {
      return P.H.useSyncExternalStore(g, U, B);
    }),
    (I.useTransition = function () {
      return P.H.useTransition();
    }),
    (I.version = '19.2.4'),
    I
  );
}
var mh;
function Ff() {
  return (mh || ((mh = 1), (wf.exports = pv())), wf.exports);
}
var Zf = { exports: {} },
  $t = {};
var vh;
function bv() {
  if (vh) return $t;
  vh = 1;
  var c = Ff();
  function o(S) {
    var _ = 'https://react.dev/errors/' + S;
    if (1 < arguments.length) {
      _ += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var O = 2; O < arguments.length; O++)
        _ += '&args[]=' + encodeURIComponent(arguments[O]);
    }
    return (
      'Minified React error #' +
      S +
      '; visit ' +
      _ +
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
  function v(S, _, O) {
    var z =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: m,
      key: z == null ? null : '' + z,
      children: S,
      containerInfo: _,
      implementation: O,
    };
  }
  var b = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function j(S, _) {
    if (S === 'font') return '';
    if (typeof _ == 'string') return _ === 'use-credentials' ? _ : '';
  }
  return (
    ($t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
    ($t.createPortal = function (S, _) {
      var O =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_ || (_.nodeType !== 1 && _.nodeType !== 9 && _.nodeType !== 11))
        throw Error(o(299));
      return v(S, _, null, O);
    }),
    ($t.flushSync = function (S) {
      var _ = b.T,
        O = f.p;
      try {
        if (((b.T = null), (f.p = 2), S)) return S();
      } finally {
        ((b.T = _), (f.p = O), f.d.f());
      }
    }),
    ($t.preconnect = function (S, _) {
      typeof S == 'string' &&
        (_ ?
          ((_ = _.crossOrigin),
          (_ =
            typeof _ == 'string' ?
              _ === 'use-credentials' ?
                _
              : ''
            : void 0))
        : (_ = null),
        f.d.C(S, _));
    }),
    ($t.prefetchDNS = function (S) {
      typeof S == 'string' && f.d.D(S);
    }),
    ($t.preinit = function (S, _) {
      if (typeof S == 'string' && _ && typeof _.as == 'string') {
        var O = _.as,
          z = j(O, _.crossOrigin),
          q = typeof _.integrity == 'string' ? _.integrity : void 0,
          w = typeof _.fetchPriority == 'string' ? _.fetchPriority : void 0;
        O === 'style' ?
          f.d.S(S, typeof _.precedence == 'string' ? _.precedence : void 0, {
            crossOrigin: z,
            integrity: q,
            fetchPriority: w,
          })
        : O === 'script' &&
          f.d.X(S, {
            crossOrigin: z,
            integrity: q,
            fetchPriority: w,
            nonce: typeof _.nonce == 'string' ? _.nonce : void 0,
          });
      }
    }),
    ($t.preinitModule = function (S, _) {
      if (typeof S == 'string')
        if (typeof _ == 'object' && _ !== null) {
          if (_.as == null || _.as === 'script') {
            var O = j(_.as, _.crossOrigin);
            f.d.M(S, {
              crossOrigin: O,
              integrity: typeof _.integrity == 'string' ? _.integrity : void 0,
              nonce: typeof _.nonce == 'string' ? _.nonce : void 0,
            });
          }
        } else _ == null && f.d.M(S);
    }),
    ($t.preload = function (S, _) {
      if (
        typeof S == 'string' &&
        typeof _ == 'object' &&
        _ !== null &&
        typeof _.as == 'string'
      ) {
        var O = _.as,
          z = j(O, _.crossOrigin);
        f.d.L(S, O, {
          crossOrigin: z,
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
    ($t.preloadModule = function (S, _) {
      if (typeof S == 'string')
        if (_) {
          var O = j(_.as, _.crossOrigin);
          f.d.m(S, {
            as: typeof _.as == 'string' && _.as !== 'script' ? _.as : void 0,
            crossOrigin: O,
            integrity: typeof _.integrity == 'string' ? _.integrity : void 0,
          });
        } else f.d.m(S);
    }),
    ($t.requestFormReset = function (S) {
      f.d.r(S);
    }),
    ($t.unstable_batchedUpdates = function (S, _) {
      return S(_);
    }),
    ($t.useFormState = function (S, _, O) {
      return b.H.useFormState(S, _, O);
    }),
    ($t.useFormStatus = function () {
      return b.H.useHostTransitionStatus();
    }),
    ($t.version = '19.2.4'),
    $t
  );
}
var yh;
function Sv() {
  if (yh) return Zf.exports;
  yh = 1;
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
  return (c(), (Zf.exports = bv()), Zf.exports);
}
var _h;
function Ev() {
  if (_h) return Xn;
  _h = 1;
  var c = gv(),
    o = Ff(),
    r = Sv();
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
  function v(t) {
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
  function b(t) {
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
  function j(t) {
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
  function S(t) {
    if (v(t) !== t) throw Error(f(188));
  }
  function _(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = v(t)), e === null)) throw Error(f(188));
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
          if (u === l) return (S(n), t);
          if (u === a) return (S(n), e);
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
  function O(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = O(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var z = Object.assign,
    q = Symbol.for('react.element'),
    w = Symbol.for('react.transitional.element'),
    F = Symbol.for('react.portal'),
    Z = Symbol.for('react.fragment'),
    G = Symbol.for('react.strict_mode'),
    K = Symbol.for('react.profiler'),
    L = Symbol.for('react.consumer'),
    W = Symbol.for('react.context'),
    Et = Symbol.for('react.forward_ref'),
    St = Symbol.for('react.suspense'),
    At = Symbol.for('react.suspense_list'),
    P = Symbol.for('react.memo'),
    Rt = Symbol.for('react.lazy'),
    Qt = Symbol.for('react.activity'),
    pe = Symbol.for('react.memo_cache_sentinel'),
    qe = Symbol.iterator;
  function Pt(t) {
    return t === null || typeof t != 'object' ?
        null
      : ((t = (qe && t[qe]) || t['@@iterator']),
        typeof t == 'function' ? t : null);
  }
  var Bl = Symbol.for('react.client.reference');
  function Qe(t) {
    if (t == null) return null;
    if (typeof t == 'function')
      return t.$$typeof === Bl ? null : t.displayName || t.name || null;
    if (typeof t == 'string') return t;
    switch (t) {
      case Z:
        return 'Fragment';
      case K:
        return 'Profiler';
      case G:
        return 'StrictMode';
      case St:
        return 'Suspense';
      case At:
        return 'SuspenseList';
      case Qt:
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
            e !== null ? e : Qe(t.type) || 'Memo'
          );
        case Rt:
          ((e = t._payload), (t = t._init));
          try {
            return Qe(t(e));
          } catch {}
      }
    return null;
  }
  var Me = Array.isArray,
    R = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    H = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    k = { pending: !1, data: null, method: null, action: null },
    vt = [],
    pt = -1;
  function g(t) {
    return { current: t };
  }
  function U(t) {
    0 > pt || ((t.current = vt[pt]), (vt[pt] = null), pt--);
  }
  function B(t, e) {
    (pt++, (vt[pt] = t.current), (t.current = e));
  }
  var X = g(null),
    tt = g(null),
    at = g(null),
    dt = g(null);
  function Wt(t, e) {
    switch ((B(at, e), B(tt, t), B(X, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Md(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = Md(e)), (t = Dd(e, t)));
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
  function Ot() {
    (U(X), U(tt), U(at));
  }
  function Ka(t) {
    t.memoizedState !== null && B(dt, t);
    var e = X.current,
      l = Dd(e, t.type);
    e !== l && (B(tt, t), B(X, l));
  }
  function Wn(t) {
    (tt.current === t && (U(X), U(tt)),
      dt.current === t && (U(dt), (Bn._currentValue = k)));
  }
  var bi, cs;
  function ql(t) {
    if (bi === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        ((bi = (e && e[1]) || ''),
          (cs =
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
      bi +
      t +
      cs
    );
  }
  var Si = !1;
  function Ei(t, e) {
    if (!t || Si) return '';
    Si = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
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
                } catch (N) {
                  var T = N;
                }
                Reflect.construct(t, [], D);
              } else {
                try {
                  D.call();
                } catch (N) {
                  T = N;
                }
                t.call(D.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                T = N;
              }
              (D = t()) &&
                typeof D.catch == 'function' &&
                D.catch(function () {});
            }
          } catch (N) {
            if (N && T && typeof N.stack == 'string') return [N.stack, T.stack];
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
        var h = i.split(`
`),
          x = s.split(`
`);
        for (
          n = a = 0;
          a < h.length && !h[a].includes('DetermineComponentFrameRoot');
        )
          a++;
        for (; n < x.length && !x[n].includes('DetermineComponentFrameRoot'); )
          n++;
        if (a === h.length || n === x.length)
          for (
            a = h.length - 1, n = x.length - 1;
            1 <= a && 0 <= n && h[a] !== x[n];
          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (h[a] !== x[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || h[a] !== x[n])) {
                  var C =
                    `
` + h[a].replace(' at new ', ' at ');
                  return (
                    t.displayName &&
                      C.includes('<anonymous>') &&
                      (C = C.replace('<anonymous>', t.displayName)),
                    C
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ((Si = !1), (Error.prepareStackTrace = l));
    }
    return (l = t ? t.displayName || t.name : '') ? ql(l) : '';
  }
  function Kh(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ql(t.type);
      case 16:
        return ql('Lazy');
      case 13:
        return t.child !== e && e !== null ?
            ql('Suspense Fallback')
          : ql('Suspense');
      case 19:
        return ql('SuspenseList');
      case 0:
      case 15:
        return Ei(t.type, !1);
      case 11:
        return Ei(t.type.render, !1);
      case 1:
        return Ei(t.type, !0);
      case 31:
        return ql('Activity');
      default:
        return '';
    }
  }
  function fs(t) {
    try {
      var e = '',
        l = null;
      do ((e += Kh(t, l)), (l = t), (t = t.return));
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
  var xi = Object.prototype.hasOwnProperty,
    Ti = c.unstable_scheduleCallback,
    zi = c.unstable_cancelCallback,
    Jh = c.unstable_shouldYield,
    $h = c.unstable_requestPaint,
    se = c.unstable_now,
    Wh = c.unstable_getCurrentPriorityLevel,
    ss = c.unstable_ImmediatePriority,
    os = c.unstable_UserBlockingPriority,
    kn = c.unstable_NormalPriority,
    kh = c.unstable_LowPriority,
    rs = c.unstable_IdlePriority,
    Fh = c.log,
    Ih = c.unstable_setDisableYieldValue,
    Ja = null,
    oe = null;
  function rl(t) {
    if (
      (typeof Fh == 'function' && Ih(t),
      oe && typeof oe.setStrictMode == 'function')
    )
      try {
        oe.setStrictMode(Ja, t);
      } catch {}
  }
  var re = Math.clz32 ? Math.clz32 : e0,
    Ph = Math.log,
    t0 = Math.LN2;
  function e0(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Ph(t) / t0) | 0)) | 0);
  }
  var Fn = 256,
    In = 262144,
    Pn = 4194304;
  function Yl(t) {
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
  function tu(t, e, l) {
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
          (n = Yl(a))
        : ((i &= s),
          i !== 0 ? (n = Yl(i)) : l || ((l = s & ~t), l !== 0 && (n = Yl(l)))))
      : ((s = a & ~u),
        s !== 0 ? (n = Yl(s))
        : i !== 0 ? (n = Yl(i))
        : l || ((l = a & ~t), l !== 0 && (n = Yl(l)))),
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
  function $a(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function l0(t, e) {
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
  function ds() {
    var t = Pn;
    return ((Pn <<= 1), (Pn & 62914560) === 0 && (Pn = 4194304), t);
  }
  function Ni(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Wa(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function a0(t, e, l, a, n, u) {
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
      h = t.expirationTimes,
      x = t.hiddenUpdates;
    for (l = i & ~l; 0 < l; ) {
      var C = 31 - re(l),
        D = 1 << C;
      ((s[C] = 0), (h[C] = -1));
      var T = x[C];
      if (T !== null)
        for (x[C] = null, C = 0; C < T.length; C++) {
          var N = T[C];
          N !== null && (N.lane &= -536870913);
        }
      l &= ~D;
    }
    (a !== 0 && hs(t, a, 0),
      u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e)));
  }
  function hs(t, e, l) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var a = 31 - re(e);
    ((t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 261930)));
  }
  function ms(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var a = 31 - re(l),
        n = 1 << a;
      ((n & e) | (t[a] & e) && (t[a] |= e), (l &= ~n));
    }
  }
  function vs(t, e) {
    var l = e & -e;
    return (
      (l = (l & 42) !== 0 ? 1 : Ai(l)),
      (l & (t.suspendedLanes | e)) !== 0 ? 0 : l
    );
  }
  function Ai(t) {
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
  function ji(t) {
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
  function ys() {
    var t = H.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : lh(t.type));
  }
  function _s(t, e) {
    var l = H.p;
    try {
      return ((H.p = t), e());
    } finally {
      H.p = l;
    }
  }
  var dl = Math.random().toString(36).slice(2),
    wt = '__reactFiber$' + dl,
    te = '__reactProps$' + dl,
    ua = '__reactContainer$' + dl,
    Ci = '__reactEvents$' + dl,
    n0 = '__reactListeners$' + dl,
    u0 = '__reactHandles$' + dl,
    gs = '__reactResources$' + dl,
    ka = '__reactMarker$' + dl;
  function Ri(t) {
    (delete t[wt], delete t[te], delete t[Ci], delete t[n0], delete t[u0]);
  }
  function ia(t) {
    var e = t[wt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[ua] || l[wt])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = Gd(t); t !== null; ) {
            if ((l = t[wt])) return l;
            t = Gd(t);
          }
        return e;
      }
      ((t = l), (l = t.parentNode));
    }
    return null;
  }
  function ca(t) {
    if ((t = t[wt] || t[ua])) {
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
  function Fa(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function fa(t) {
    var e = t[gs];
    return (
      e ||
        (e = t[gs] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Gt(t) {
    t[ka] = !0;
  }
  var ps = new Set(),
    bs = {};
  function Ll(t, e) {
    (sa(t, e), sa(t + 'Capture', e));
  }
  function sa(t, e) {
    for (bs[t] = e, t = 0; t < e.length; t++) ps.add(e[t]);
  }
  var i0 = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    Ss = {},
    Es = {};
  function c0(t) {
    return (
      xi.call(Es, t) ? !0
      : xi.call(Ss, t) ? !1
      : i0.test(t) ? (Es[t] = !0)
      : ((Ss[t] = !0), !1)
    );
  }
  function eu(t, e, l) {
    if (c0(e))
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
  function lu(t, e, l) {
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
  function we(t, e, l, a) {
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
  function be(t) {
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
  function xs(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === 'input' &&
      (e === 'checkbox' || e === 'radio')
    );
  }
  function f0(t, e, l) {
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
  function Oi(t) {
    if (!t._valueTracker) {
      var e = xs(t) ? 'checked' : 'value';
      t._valueTracker = f0(t, e, '' + t[e]);
    }
  }
  function Ts(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      a = '';
    return (
      t &&
        (a =
          xs(t) ?
            t.checked ?
              'true'
            : 'false'
          : t.value),
      (t = a),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function au(t) {
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
  var s0 = /[\n"\\]/g;
  function Se(t) {
    return t.replace(s0, function (e) {
      return '\\' + e.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Mi(t, e, l, a, n, u, i, s) {
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
          (t.value = '' + be(e))
        : t.value !== '' + be(e) && (t.value = '' + be(e))
      : (i !== 'submit' && i !== 'reset') || t.removeAttribute('value'),
      e != null ? Di(t, i, be(e))
      : l != null ? Di(t, i, be(l))
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
        (t.name = '' + be(s))
      : t.removeAttribute('name'));
  }
  function zs(t, e, l, a, n, u, i, s) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (t.type = u),
      e != null || l != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || e != null)) {
        Oi(t);
        return;
      }
      ((l = l != null ? '' + be(l) : ''),
        (e = e != null ? '' + be(e) : l),
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
      Oi(t));
  }
  function Di(t, e, l) {
    (e === 'number' && au(t.ownerDocument) === t) ||
      t.defaultValue === '' + l ||
      (t.defaultValue = '' + l);
  }
  function oa(t, e, l, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var n = 0; n < l.length; n++) e['$' + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        ((n = e.hasOwnProperty('$' + t[l].value)),
          t[l].selected !== n && (t[l].selected = n),
          n && a && (t[l].defaultSelected = !0));
    } else {
      for (l = '' + be(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          ((t[n].selected = !0), a && (t[n].defaultSelected = !0));
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Ns(t, e, l) {
    if (
      e != null &&
      ((e = '' + be(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? '' + be(l) : '';
  }
  function As(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if (Me(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      (l == null && (l = ''), (e = l));
    }
    ((l = be(e)),
      (t.defaultValue = l),
      (a = t.textContent),
      a === l && a !== '' && a !== null && (t.value = a),
      Oi(t));
  }
  function ra(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var o0 = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' ',
    ),
  );
  function js(t, e, l) {
    var a = e.indexOf('--') === 0;
    l == null || typeof l == 'boolean' || l === '' ?
      a ? t.setProperty(e, '')
      : e === 'float' ? (t.cssFloat = '')
      : (t[e] = '')
    : a ? t.setProperty(e, l)
    : typeof l != 'number' || l === 0 || o0.has(e) ?
      e === 'float' ?
        (t.cssFloat = l)
      : (t[e] = ('' + l).trim())
    : (t[e] = l + 'px');
  }
  function Cs(t, e, l) {
    if (e != null && typeof e != 'object') throw Error(f(62));
    if (((t = t.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf('--') === 0 ? t.setProperty(a, '')
          : a === 'float' ? (t.cssFloat = '')
          : (t[a] = ''));
      for (var n in e)
        ((a = e[n]), e.hasOwnProperty(n) && l[n] !== a && js(t, n, a));
    } else for (var u in e) e.hasOwnProperty(u) && js(t, u, e[u]);
  }
  function Ui(t) {
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
  var r0 = new Map([
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
    d0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function nu(t) {
    return d0.test('' + t) ?
        "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Ze() {}
  var Hi = null;
  function Bi(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var da = null,
    ha = null;
  function Rs(t) {
    var e = ca(t);
    if (e && (t = e.stateNode)) {
      var l = t[te] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case 'input':
          if (
            (Mi(
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
                'input[name="' + Se('' + e) + '"][type="radio"]',
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[te] || null;
                if (!n) throw Error(f(90));
                Mi(
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
              ((a = l[e]), a.form === t.form && Ts(a));
          }
          break t;
        case 'textarea':
          Ns(t, l.value, l.defaultValue);
          break t;
        case 'select':
          ((e = l.value), e != null && oa(t, !!l.multiple, e, !1));
      }
    }
  }
  var qi = !1;
  function Os(t, e, l) {
    if (qi) return t(e, l);
    qi = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((qi = !1),
        (da !== null || ha !== null) &&
          (Vu(), da && ((e = da), (t = ha), (ha = da = null), Rs(e), t)))
      )
        for (e = 0; e < t.length; e++) Rs(t[e]);
    }
  }
  function Ia(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[te] || null;
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
  var Ve = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Yi = !1;
  if (Ve)
    try {
      var Pa = {};
      (Object.defineProperty(Pa, 'passive', {
        get: function () {
          Yi = !0;
        },
      }),
        window.addEventListener('test', Pa, Pa),
        window.removeEventListener('test', Pa, Pa));
    } catch {
      Yi = !1;
    }
  var hl = null,
    Li = null,
    uu = null;
  function Ms() {
    if (uu) return uu;
    var t,
      e = Li,
      l = e.length,
      a,
      n = 'value' in hl ? hl.value : hl.textContent,
      u = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++);
    var i = l - t;
    for (a = 1; a <= i && e[l - a] === n[u - a]; a++);
    return (uu = n.slice(t, 1 < a ? 1 - a : void 0));
  }
  function iu(t) {
    var e = t.keyCode;
    return (
      'charCode' in t ?
        ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function cu() {
    return !0;
  }
  function Ds() {
    return !1;
  }
  function ee(t) {
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
            cu
          : Ds),
        (this.isPropagationStopped = Ds),
        this
      );
    }
    return (
      z(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault ?
              l.preventDefault()
            : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
            (this.isDefaultPrevented = cu));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation ?
              l.stopPropagation()
            : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
            (this.isPropagationStopped = cu));
        },
        persist: function () {},
        isPersistent: cu,
      }),
      e
    );
  }
  var Gl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    fu = ee(Gl),
    tn = z({}, Gl, { view: 0, detail: 0 }),
    h0 = ee(tn),
    Gi,
    Xi,
    en,
    su = z({}, tn, {
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
      getModifierState: wi,
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
          : (t !== en &&
              (en && t.type === 'mousemove' ?
                ((Gi = t.screenX - en.screenX), (Xi = t.screenY - en.screenY))
              : (Xi = Gi = 0),
              (en = t)),
            Gi);
      },
      movementY: function (t) {
        return 'movementY' in t ? t.movementY : Xi;
      },
    }),
    Us = ee(su),
    m0 = z({}, su, { dataTransfer: 0 }),
    v0 = ee(m0),
    y0 = z({}, tn, { relatedTarget: 0 }),
    Qi = ee(y0),
    _0 = z({}, Gl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    g0 = ee(_0),
    p0 = z({}, Gl, {
      clipboardData: function (t) {
        return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
      },
    }),
    b0 = ee(p0),
    S0 = z({}, Gl, { data: 0 }),
    Hs = ee(S0),
    E0 = {
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
    x0 = {
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
    T0 = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function z0(t) {
    var e = this.nativeEvent;
    return (
      e.getModifierState ? e.getModifierState(t)
      : (t = T0[t]) ? !!e[t]
      : !1
    );
  }
  function wi() {
    return z0;
  }
  var N0 = z({}, tn, {
      key: function (t) {
        if (t.key) {
          var e = E0[t.key] || t.key;
          if (e !== 'Unidentified') return e;
        }
        return (
          t.type === 'keypress' ?
            ((t = iu(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
          : t.type === 'keydown' || t.type === 'keyup' ?
            x0[t.keyCode] || 'Unidentified'
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
      getModifierState: wi,
      charCode: function (t) {
        return t.type === 'keypress' ? iu(t) : 0;
      },
      keyCode: function (t) {
        return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
      },
      which: function (t) {
        return (
          t.type === 'keypress' ? iu(t)
          : t.type === 'keydown' || t.type === 'keyup' ? t.keyCode
          : 0
        );
      },
    }),
    A0 = ee(N0),
    j0 = z({}, su, {
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
    Bs = ee(j0),
    C0 = z({}, tn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: wi,
    }),
    R0 = ee(C0),
    O0 = z({}, Gl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    M0 = ee(O0),
    D0 = z({}, su, {
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
    U0 = ee(D0),
    H0 = z({}, Gl, { newState: 0, oldState: 0 }),
    B0 = ee(H0),
    q0 = [9, 13, 27, 32],
    Zi = Ve && 'CompositionEvent' in window,
    ln = null;
  Ve && 'documentMode' in document && (ln = document.documentMode);
  var Y0 = Ve && 'TextEvent' in window && !ln,
    qs = Ve && (!Zi || (ln && 8 < ln && 11 >= ln)),
    Ys = ' ',
    Ls = !1;
  function Gs(t, e) {
    switch (t) {
      case 'keyup':
        return q0.indexOf(e.keyCode) !== -1;
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
  function Xs(t) {
    return (
      (t = t.detail),
      typeof t == 'object' && 'data' in t ? t.data : null
    );
  }
  var ma = !1;
  function L0(t, e) {
    switch (t) {
      case 'compositionend':
        return Xs(e);
      case 'keypress':
        return e.which !== 32 ? null : ((Ls = !0), Ys);
      case 'textInput':
        return ((t = e.data), t === Ys && Ls ? null : t);
      default:
        return null;
    }
  }
  function G0(t, e) {
    if (ma)
      return t === 'compositionend' || (!Zi && Gs(t, e)) ?
          ((t = Ms()), (uu = Li = hl = null), (ma = !1), t)
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
        return qs && e.locale !== 'ko' ? null : e.data;
      default:
        return null;
    }
  }
  var X0 = {
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
  function Qs(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === 'input' ? !!X0[t.type] : e === 'textarea';
  }
  function ws(t, e, l, a) {
    (da ?
      ha ? ha.push(a)
      : (ha = [a])
    : (da = a),
      (e = Iu(e, 'onChange')),
      0 < e.length &&
        ((l = new fu('onChange', 'change', null, l, a)),
        t.push({ event: l, listeners: e })));
  }
  var an = null,
    nn = null;
  function Q0(t) {
    Nd(t, 0);
  }
  function ou(t) {
    var e = Fa(t);
    if (Ts(e)) return t;
  }
  function Zs(t, e) {
    if (t === 'change') return e;
  }
  var Vs = !1;
  if (Ve) {
    var Vi;
    if (Ve) {
      var Ki = 'oninput' in document;
      if (!Ki) {
        var Ks = document.createElement('div');
        (Ks.setAttribute('oninput', 'return;'),
          (Ki = typeof Ks.oninput == 'function'));
      }
      Vi = Ki;
    } else Vi = !1;
    Vs = Vi && (!document.documentMode || 9 < document.documentMode);
  }
  function Js() {
    an && (an.detachEvent('onpropertychange', $s), (nn = an = null));
  }
  function $s(t) {
    if (t.propertyName === 'value' && ou(nn)) {
      var e = [];
      (ws(e, nn, t, Bi(t)), Os(Q0, e));
    }
  }
  function w0(t, e, l) {
    t === 'focusin' ?
      (Js(), (an = e), (nn = l), an.attachEvent('onpropertychange', $s))
    : t === 'focusout' && Js();
  }
  function Z0(t) {
    if (t === 'selectionchange' || t === 'keyup' || t === 'keydown')
      return ou(nn);
  }
  function V0(t, e) {
    if (t === 'click') return ou(e);
  }
  function K0(t, e) {
    if (t === 'input' || t === 'change') return ou(e);
  }
  function J0(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var de = typeof Object.is == 'function' ? Object.is : J0;
  function un(t, e) {
    if (de(t, e)) return !0;
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
      if (!xi.call(e, n) || !de(t[n], e[n])) return !1;
    }
    return !0;
  }
  function Ws(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function ks(t, e) {
    var l = Ws(t);
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
      l = Ws(l);
    }
  }
  function Fs(t, e) {
    return (
      t && e ?
        t === e ? !0
        : t && t.nodeType === 3 ? !1
        : e && e.nodeType === 3 ? Fs(t, e.parentNode)
        : 'contains' in t ? t.contains(e)
        : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1
    );
  }
  function Is(t) {
    t =
      (
        t != null &&
        t.ownerDocument != null &&
        t.ownerDocument.defaultView != null
      ) ?
        t.ownerDocument.defaultView
      : window;
    for (var e = au(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == 'string';
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = au(t.document);
    }
    return e;
  }
  function Ji(t) {
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
  var $0 = Ve && 'documentMode' in document && 11 >= document.documentMode,
    va = null,
    $i = null,
    cn = null,
    Wi = !1;
  function Ps(t, e, l) {
    var a =
      l.window === l ? l.document
      : l.nodeType === 9 ? l
      : l.ownerDocument;
    Wi ||
      va == null ||
      va !== au(a) ||
      ((a = va),
      'selectionStart' in a && Ji(a) ?
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
      (cn && un(cn, a)) ||
        ((cn = a),
        (a = Iu($i, 'onSelect')),
        0 < a.length &&
          ((e = new fu('onSelect', 'select', null, e, l)),
          t.push({ event: e, listeners: a }),
          (e.target = va))));
  }
  function Xl(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l['Webkit' + t] = 'webkit' + e),
      (l['Moz' + t] = 'moz' + e),
      l
    );
  }
  var ya = {
      animationend: Xl('Animation', 'AnimationEnd'),
      animationiteration: Xl('Animation', 'AnimationIteration'),
      animationstart: Xl('Animation', 'AnimationStart'),
      transitionrun: Xl('Transition', 'TransitionRun'),
      transitionstart: Xl('Transition', 'TransitionStart'),
      transitioncancel: Xl('Transition', 'TransitionCancel'),
      transitionend: Xl('Transition', 'TransitionEnd'),
    },
    ki = {},
    to = {};
  Ve &&
    ((to = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete ya.animationend.animation,
      delete ya.animationiteration.animation,
      delete ya.animationstart.animation),
    'TransitionEvent' in window || delete ya.transitionend.transition);
  function Ql(t) {
    if (ki[t]) return ki[t];
    if (!ya[t]) return t;
    var e = ya[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in to) return (ki[t] = e[l]);
    return t;
  }
  var eo = Ql('animationend'),
    lo = Ql('animationiteration'),
    ao = Ql('animationstart'),
    W0 = Ql('transitionrun'),
    k0 = Ql('transitionstart'),
    F0 = Ql('transitioncancel'),
    no = Ql('transitionend'),
    uo = new Map(),
    Fi =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  Fi.push('scrollEnd');
  function De(t, e) {
    (uo.set(t, e), Ll(e, [t]));
  }
  var ru =
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
    Ee = [],
    _a = 0,
    Ii = 0;
  function du() {
    for (var t = _a, e = (Ii = _a = 0); e < t; ) {
      var l = Ee[e];
      Ee[e++] = null;
      var a = Ee[e];
      Ee[e++] = null;
      var n = Ee[e];
      Ee[e++] = null;
      var u = Ee[e];
      if (((Ee[e++] = null), a !== null && n !== null)) {
        var i = a.pending;
        (i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
          (a.pending = n));
      }
      u !== 0 && io(l, n, u);
    }
  }
  function hu(t, e, l, a) {
    ((Ee[_a++] = t),
      (Ee[_a++] = e),
      (Ee[_a++] = l),
      (Ee[_a++] = a),
      (Ii |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a));
  }
  function Pi(t, e, l, a) {
    return (hu(t, e, l, a), mu(t));
  }
  function wl(t, e) {
    return (hu(t, null, null, e), mu(t));
  }
  function io(t, e, l) {
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
          ((n = 31 - re(l)),
          (t = u.hiddenUpdates),
          (a = t[n]),
          a === null ? (t[n] = [e]) : a.push(e),
          (e.lane = l | 536870912)),
        u)
      : null;
  }
  function mu(t) {
    if (50 < Cn) throw ((Cn = 0), (sf = null), Error(f(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var ga = {};
  function I0(t, e, l, a) {
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
  function he(t, e, l, a) {
    return new I0(t, e, l, a);
  }
  function tc(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function Ke(t, e) {
    var l = t.alternate;
    return (
      l === null ?
        ((l = he(t.tag, e, t.key, t.mode)),
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
  function co(t, e) {
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
  function vu(t, e, l, a, n, u) {
    var i = 0;
    if (((a = t), typeof t == 'function')) tc(t) && (i = 1);
    else if (typeof t == 'string')
      i =
        av(t, l, X.current) ? 26
        : t === 'html' || t === 'head' || t === 'body' ? 27
        : 5;
    else
      t: switch (t) {
        case Qt:
          return (
            (t = he(31, l, e, n)),
            (t.elementType = Qt),
            (t.lanes = u),
            t
          );
        case Z:
          return Zl(l.children, n, u, e);
        case G:
          ((i = 8), (n |= 24));
          break;
        case K:
          return (
            (t = he(12, l, e, n | 2)),
            (t.elementType = K),
            (t.lanes = u),
            t
          );
        case St:
          return (
            (t = he(13, l, e, n)),
            (t.elementType = St),
            (t.lanes = u),
            t
          );
        case At:
          return (
            (t = he(19, l, e, n)),
            (t.elementType = At),
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
              case Rt:
                ((i = 16), (a = null));
                break t;
            }
          ((i = 29),
            (l = Error(f(130, t === null ? 'null' : typeof t, ''))),
            (a = null));
      }
    return (
      (e = he(i, l, e, n)),
      (e.elementType = t),
      (e.type = a),
      (e.lanes = u),
      e
    );
  }
  function Zl(t, e, l, a) {
    return ((t = he(7, t, a, e)), (t.lanes = l), t);
  }
  function ec(t, e, l) {
    return ((t = he(6, t, null, e)), (t.lanes = l), t);
  }
  function fo(t) {
    var e = he(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function lc(t, e, l) {
    return (
      (e = he(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var so = new WeakMap();
  function xe(t, e) {
    if (typeof t == 'object' && t !== null) {
      var l = so.get(t);
      return l !== void 0 ? l : (
          ((e = { value: t, source: e, stack: fs(e) }), so.set(t, e), e)
        );
    }
    return { value: t, source: e, stack: fs(e) };
  }
  var pa = [],
    ba = 0,
    yu = null,
    fn = 0,
    Te = [],
    ze = 0,
    ml = null,
    Ye = 1,
    Le = '';
  function Je(t, e) {
    ((pa[ba++] = fn), (pa[ba++] = yu), (yu = t), (fn = e));
  }
  function oo(t, e, l) {
    ((Te[ze++] = Ye), (Te[ze++] = Le), (Te[ze++] = ml), (ml = t));
    var a = Ye;
    t = Le;
    var n = 32 - re(a) - 1;
    ((a &= ~(1 << n)), (l += 1));
    var u = 32 - re(e) + n;
    if (30 < u) {
      var i = n - (n % 5);
      ((u = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (n -= i),
        (Ye = (1 << (32 - re(e) + n)) | (l << n) | a),
        (Le = u + t));
    } else ((Ye = (1 << u) | (l << n) | a), (Le = t));
  }
  function ac(t) {
    t.return !== null && (Je(t, 1), oo(t, 1, 0));
  }
  function nc(t) {
    for (; t === yu; )
      ((yu = pa[--ba]), (pa[ba] = null), (fn = pa[--ba]), (pa[ba] = null));
    for (; t === ml; )
      ((ml = Te[--ze]),
        (Te[ze] = null),
        (Le = Te[--ze]),
        (Te[ze] = null),
        (Ye = Te[--ze]),
        (Te[ze] = null));
  }
  function ro(t, e) {
    ((Te[ze++] = Ye),
      (Te[ze++] = Le),
      (Te[ze++] = ml),
      (Ye = e.id),
      (Le = e.overflow),
      (ml = t));
  }
  var Zt = null,
    xt = null,
    ft = !1,
    vl = null,
    Ne = !1,
    uc = Error(f(519));
  function yl(t) {
    var e = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ?
          'text'
        : 'HTML',
        '',
      ),
    );
    throw (sn(xe(e, t)), uc);
  }
  function ho(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps;
    switch (((e[wt] = t), (e[te] = a), l)) {
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
        for (l = 0; l < On.length; l++) ut(On[l], e);
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
          zs(
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
        (ut('invalid', e), As(e, a.value, a.defaultValue, a.children));
    }
    ((l = a.children),
      (
        (typeof l != 'string' &&
          typeof l != 'number' &&
          typeof l != 'bigint') ||
        e.textContent === '' + l ||
        a.suppressHydrationWarning === !0 ||
        Rd(e.textContent, l)
      ) ?
        (a.popover != null && (ut('beforetoggle', e), ut('toggle', e)),
        a.onScroll != null && ut('scroll', e),
        a.onScrollEnd != null && ut('scrollend', e),
        a.onClick != null && (e.onclick = Ze),
        (e = !0))
      : (e = !1),
      e || yl(t, !0));
  }
  function mo(t) {
    for (Zt = t.return; Zt; )
      switch (Zt.tag) {
        case 5:
        case 31:
        case 13:
          Ne = !1;
          return;
        case 27:
        case 3:
          Ne = !0;
          return;
        default:
          Zt = Zt.return;
      }
  }
  function Sa(t) {
    if (t !== Zt) return !1;
    if (!ft) return (mo(t), (ft = !0), !1);
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== 'form' && l !== 'button') || Tf(t.type, t.memoizedProps))),
        (l = !l)),
      l && xt && yl(t),
      mo(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(f(317));
      xt = Ld(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(f(317));
      xt = Ld(t);
    } else
      e === 27 ?
        ((e = xt), Rl(t.type) ? ((t = Cf), (Cf = null), (xt = t)) : (xt = e))
      : (xt = Zt ? je(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Vl() {
    ((xt = Zt = null), (ft = !1));
  }
  function ic() {
    var t = vl;
    return (
      t !== null &&
        (ue === null ? (ue = t) : ue.push.apply(ue, t), (vl = null)),
      t
    );
  }
  function sn(t) {
    vl === null ? (vl = [t]) : vl.push(t);
  }
  var cc = g(null),
    Kl = null,
    $e = null;
  function _l(t, e, l) {
    (B(cc, e._currentValue), (e._currentValue = l));
  }
  function We(t) {
    ((t._currentValue = cc.current), U(cc));
  }
  function fc(t, e, l) {
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
  function sc(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var s = u;
          u = n;
          for (var h = 0; h < e.length; h++)
            if (s.context === e[h]) {
              ((u.lanes |= l),
                (s = u.alternate),
                s !== null && (s.lanes |= l),
                fc(u.return, l, t),
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
          fc(i, l, t),
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
  function Ea(t, e, l, a) {
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
          de(n.pendingProps.value, i.value) ||
            (t !== null ? t.push(s) : (t = [s]));
        }
      } else if (n === dt.current) {
        if (((i = n.alternate), i === null)) throw Error(f(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (t !== null ? t.push(Bn) : (t = [Bn]));
      }
      n = n.return;
    }
    (t !== null && sc(e, t, l, a), (e.flags |= 262144));
  }
  function _u(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!de(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Jl(t) {
    ((Kl = t),
      ($e = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function Vt(t) {
    return vo(Kl, t);
  }
  function gu(t, e) {
    return (Kl === null && Jl(t), vo(t, e));
  }
  function vo(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), $e === null)) {
      if (t === null) throw Error(f(308));
      (($e = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else $e = $e.next = e;
    return l;
  }
  var P0 =
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
    tm = c.unstable_scheduleCallback,
    em = c.unstable_NormalPriority,
    Ht = {
      $$typeof: W,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function oc() {
    return { controller: new P0(), data: new Map(), refCount: 0 };
  }
  function on(t) {
    (t.refCount--,
      t.refCount === 0 &&
        tm(em, function () {
          t.controller.abort();
        }));
  }
  var rn = null,
    rc = 0,
    xa = 0,
    Ta = null;
  function lm(t, e) {
    if (rn === null) {
      var l = (rn = []);
      ((rc = 0),
        (xa = vf()),
        (Ta = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        }));
    }
    return (rc++, e.then(yo, yo), e);
  }
  function yo() {
    if (--rc === 0 && rn !== null) {
      Ta !== null && (Ta.status = 'fulfilled');
      var t = rn;
      ((rn = null), (xa = 0), (Ta = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function am(t, e) {
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
  var _o = R.S;
  R.S = function (t, e) {
    ((td = se()),
      typeof e == 'object' &&
        e !== null &&
        typeof e.then == 'function' &&
        lm(t, e),
      _o !== null && _o(t, e));
  };
  var $l = g(null);
  function dc() {
    var t = $l.current;
    return t !== null ? t : bt.pooledCache;
  }
  function pu(t, e) {
    e === null ? B($l, $l.current) : B($l, e.pool);
  }
  function go() {
    var t = dc();
    return t === null ? null : { parent: Ht._currentValue, pool: t };
  }
  var za = Error(f(460)),
    hc = Error(f(474)),
    bu = Error(f(542)),
    Su = { then: function () {} };
  function po(t) {
    return ((t = t.status), t === 'fulfilled' || t === 'rejected');
  }
  function bo(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(Ze, Ze), (e = l)),
      e.status)
    ) {
      case 'fulfilled':
        return e.value;
      case 'rejected':
        throw ((t = e.reason), Eo(t), t);
      default:
        if (typeof e.status == 'string') e.then(Ze, Ze);
        else {
          if (((t = bt), t !== null && 100 < t.shellSuspendCounter))
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
            throw ((t = e.reason), Eo(t), t);
        }
        throw ((kl = e), za);
    }
  }
  function Wl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == 'object' && typeof l.then == 'function' ?
          ((kl = l), za)
        : l;
    }
  }
  var kl = null;
  function So() {
    if (kl === null) throw Error(f(459));
    var t = kl;
    return ((kl = null), t);
  }
  function Eo(t) {
    if (t === za || t === bu) throw Error(f(483));
  }
  var Na = null,
    dn = 0;
  function Eu(t) {
    var e = dn;
    return ((dn += 1), Na === null && (Na = []), bo(Na, t, e));
  }
  function hn(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function xu(t, e) {
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
  function xo(t) {
    function e(p, y) {
      if (t) {
        var E = p.deletions;
        E === null ? ((p.deletions = [y]), (p.flags |= 16)) : E.push(y);
      }
    }
    function l(p, y) {
      if (!t) return null;
      for (; y !== null; ) (e(p, y), (y = y.sibling));
      return null;
    }
    function a(p) {
      for (var y = new Map(); p !== null; )
        (p.key !== null ? y.set(p.key, p) : y.set(p.index, p), (p = p.sibling));
      return y;
    }
    function n(p, y) {
      return ((p = Ke(p, y)), (p.index = 0), (p.sibling = null), p);
    }
    function u(p, y, E) {
      return (
        (p.index = E),
        t ?
          ((E = p.alternate),
          E !== null ?
            ((E = E.index), E < y ? ((p.flags |= 67108866), y) : E)
          : ((p.flags |= 67108866), y))
        : ((p.flags |= 1048576), y)
      );
    }
    function i(p) {
      return (t && p.alternate === null && (p.flags |= 67108866), p);
    }
    function s(p, y, E, M) {
      return y === null || y.tag !== 6 ?
          ((y = ec(E, p.mode, M)), (y.return = p), y)
        : ((y = n(y, E)), (y.return = p), y);
    }
    function h(p, y, E, M) {
      var V = E.type;
      return (
        V === Z ? C(p, y, E.props.children, M, E.key)
        : (
          y !== null &&
          (y.elementType === V ||
            (typeof V == 'object' &&
              V !== null &&
              V.$$typeof === Rt &&
              Wl(V) === y.type))
        ) ?
          ((y = n(y, E.props)), hn(y, E), (y.return = p), y)
        : ((y = vu(E.type, E.key, E.props, null, p.mode, M)),
          hn(y, E),
          (y.return = p),
          y)
      );
    }
    function x(p, y, E, M) {
      return (
          y === null ||
            y.tag !== 4 ||
            y.stateNode.containerInfo !== E.containerInfo ||
            y.stateNode.implementation !== E.implementation
        ) ?
          ((y = lc(E, p.mode, M)), (y.return = p), y)
        : ((y = n(y, E.children || [])), (y.return = p), y);
    }
    function C(p, y, E, M, V) {
      return y === null || y.tag !== 7 ?
          ((y = Zl(E, p.mode, M, V)), (y.return = p), y)
        : ((y = n(y, E)), (y.return = p), y);
    }
    function D(p, y, E) {
      if (
        (typeof y == 'string' && y !== '') ||
        typeof y == 'number' ||
        typeof y == 'bigint'
      )
        return ((y = ec('' + y, p.mode, E)), (y.return = p), y);
      if (typeof y == 'object' && y !== null) {
        switch (y.$$typeof) {
          case w:
            return (
              (E = vu(y.type, y.key, y.props, null, p.mode, E)),
              hn(E, y),
              (E.return = p),
              E
            );
          case F:
            return ((y = lc(y, p.mode, E)), (y.return = p), y);
          case Rt:
            return ((y = Wl(y)), D(p, y, E));
        }
        if (Me(y) || Pt(y))
          return ((y = Zl(y, p.mode, E, null)), (y.return = p), y);
        if (typeof y.then == 'function') return D(p, Eu(y), E);
        if (y.$$typeof === W) return D(p, gu(p, y), E);
        xu(p, y);
      }
      return null;
    }
    function T(p, y, E, M) {
      var V = y !== null ? y.key : null;
      if (
        (typeof E == 'string' && E !== '') ||
        typeof E == 'number' ||
        typeof E == 'bigint'
      )
        return V !== null ? null : s(p, y, '' + E, M);
      if (typeof E == 'object' && E !== null) {
        switch (E.$$typeof) {
          case w:
            return E.key === V ? h(p, y, E, M) : null;
          case F:
            return E.key === V ? x(p, y, E, M) : null;
          case Rt:
            return ((E = Wl(E)), T(p, y, E, M));
        }
        if (Me(E) || Pt(E)) return V !== null ? null : C(p, y, E, M, null);
        if (typeof E.then == 'function') return T(p, y, Eu(E), M);
        if (E.$$typeof === W) return T(p, y, gu(p, E), M);
        xu(p, E);
      }
      return null;
    }
    function N(p, y, E, M, V) {
      if (
        (typeof M == 'string' && M !== '') ||
        typeof M == 'number' ||
        typeof M == 'bigint'
      )
        return ((p = p.get(E) || null), s(y, p, '' + M, V));
      if (typeof M == 'object' && M !== null) {
        switch (M.$$typeof) {
          case w:
            return (
              (p = p.get(M.key === null ? E : M.key) || null),
              h(y, p, M, V)
            );
          case F:
            return (
              (p = p.get(M.key === null ? E : M.key) || null),
              x(y, p, M, V)
            );
          case Rt:
            return ((M = Wl(M)), N(p, y, E, M, V));
        }
        if (Me(M) || Pt(M))
          return ((p = p.get(E) || null), C(y, p, M, V, null));
        if (typeof M.then == 'function') return N(p, y, E, Eu(M), V);
        if (M.$$typeof === W) return N(p, y, E, gu(y, M), V);
        xu(y, M);
      }
      return null;
    }
    function Y(p, y, E, M) {
      for (
        var V = null, st = null, Q = y, lt = (y = 0), ct = null;
        Q !== null && lt < E.length;
        lt++
      ) {
        Q.index > lt ? ((ct = Q), (Q = null)) : (ct = Q.sibling);
        var ot = T(p, Q, E[lt], M);
        if (ot === null) {
          Q === null && (Q = ct);
          break;
        }
        (t && Q && ot.alternate === null && e(p, Q),
          (y = u(ot, y, lt)),
          st === null ? (V = ot) : (st.sibling = ot),
          (st = ot),
          (Q = ct));
      }
      if (lt === E.length) return (l(p, Q), ft && Je(p, lt), V);
      if (Q === null) {
        for (; lt < E.length; lt++)
          ((Q = D(p, E[lt], M)),
            Q !== null &&
              ((y = u(Q, y, lt)),
              st === null ? (V = Q) : (st.sibling = Q),
              (st = Q)));
        return (ft && Je(p, lt), V);
      }
      for (Q = a(Q); lt < E.length; lt++)
        ((ct = N(Q, p, lt, E[lt], M)),
          ct !== null &&
            (t &&
              ct.alternate !== null &&
              Q.delete(ct.key === null ? lt : ct.key),
            (y = u(ct, y, lt)),
            st === null ? (V = ct) : (st.sibling = ct),
            (st = ct)));
      return (
        t &&
          Q.forEach(function (Hl) {
            return e(p, Hl);
          }),
        ft && Je(p, lt),
        V
      );
    }
    function $(p, y, E, M) {
      if (E == null) throw Error(f(151));
      for (
        var V = null, st = null, Q = y, lt = (y = 0), ct = null, ot = E.next();
        Q !== null && !ot.done;
        lt++, ot = E.next()
      ) {
        Q.index > lt ? ((ct = Q), (Q = null)) : (ct = Q.sibling);
        var Hl = T(p, Q, ot.value, M);
        if (Hl === null) {
          Q === null && (Q = ct);
          break;
        }
        (t && Q && Hl.alternate === null && e(p, Q),
          (y = u(Hl, y, lt)),
          st === null ? (V = Hl) : (st.sibling = Hl),
          (st = Hl),
          (Q = ct));
      }
      if (ot.done) return (l(p, Q), ft && Je(p, lt), V);
      if (Q === null) {
        for (; !ot.done; lt++, ot = E.next())
          ((ot = D(p, ot.value, M)),
            ot !== null &&
              ((y = u(ot, y, lt)),
              st === null ? (V = ot) : (st.sibling = ot),
              (st = ot)));
        return (ft && Je(p, lt), V);
      }
      for (Q = a(Q); !ot.done; lt++, ot = E.next())
        ((ot = N(Q, p, lt, ot.value, M)),
          ot !== null &&
            (t &&
              ot.alternate !== null &&
              Q.delete(ot.key === null ? lt : ot.key),
            (y = u(ot, y, lt)),
            st === null ? (V = ot) : (st.sibling = ot),
            (st = ot)));
      return (
        t &&
          Q.forEach(function (mv) {
            return e(p, mv);
          }),
        ft && Je(p, lt),
        V
      );
    }
    function gt(p, y, E, M) {
      if (
        (typeof E == 'object' &&
          E !== null &&
          E.type === Z &&
          E.key === null &&
          (E = E.props.children),
        typeof E == 'object' && E !== null)
      ) {
        switch (E.$$typeof) {
          case w:
            t: {
              for (var V = E.key; y !== null; ) {
                if (y.key === V) {
                  if (((V = E.type), V === Z)) {
                    if (y.tag === 7) {
                      (l(p, y.sibling),
                        (M = n(y, E.props.children)),
                        (M.return = p),
                        (p = M));
                      break t;
                    }
                  } else if (
                    y.elementType === V ||
                    (typeof V == 'object' &&
                      V !== null &&
                      V.$$typeof === Rt &&
                      Wl(V) === y.type)
                  ) {
                    (l(p, y.sibling),
                      (M = n(y, E.props)),
                      hn(M, E),
                      (M.return = p),
                      (p = M));
                    break t;
                  }
                  l(p, y);
                  break;
                } else e(p, y);
                y = y.sibling;
              }
              E.type === Z ?
                ((M = Zl(E.props.children, p.mode, M, E.key)),
                (M.return = p),
                (p = M))
              : ((M = vu(E.type, E.key, E.props, null, p.mode, M)),
                hn(M, E),
                (M.return = p),
                (p = M));
            }
            return i(p);
          case F:
            t: {
              for (V = E.key; y !== null; ) {
                if (y.key === V)
                  if (
                    y.tag === 4 &&
                    y.stateNode.containerInfo === E.containerInfo &&
                    y.stateNode.implementation === E.implementation
                  ) {
                    (l(p, y.sibling),
                      (M = n(y, E.children || [])),
                      (M.return = p),
                      (p = M));
                    break t;
                  } else {
                    l(p, y);
                    break;
                  }
                else e(p, y);
                y = y.sibling;
              }
              ((M = lc(E, p.mode, M)), (M.return = p), (p = M));
            }
            return i(p);
          case Rt:
            return ((E = Wl(E)), gt(p, y, E, M));
        }
        if (Me(E)) return Y(p, y, E, M);
        if (Pt(E)) {
          if (((V = Pt(E)), typeof V != 'function')) throw Error(f(150));
          return ((E = V.call(E)), $(p, y, E, M));
        }
        if (typeof E.then == 'function') return gt(p, y, Eu(E), M);
        if (E.$$typeof === W) return gt(p, y, gu(p, E), M);
        xu(p, E);
      }
      return (
          (typeof E == 'string' && E !== '') ||
            typeof E == 'number' ||
            typeof E == 'bigint'
        ) ?
          ((E = '' + E),
          y !== null && y.tag === 6 ?
            (l(p, y.sibling), (M = n(y, E)), (M.return = p), (p = M))
          : (l(p, y), (M = ec(E, p.mode, M)), (M.return = p), (p = M)),
          i(p))
        : l(p, y);
    }
    return function (p, y, E, M) {
      try {
        dn = 0;
        var V = gt(p, y, E, M);
        return ((Na = null), V);
      } catch (Q) {
        if (Q === za || Q === bu) throw Q;
        var st = he(29, Q, null, p.mode);
        return ((st.lanes = M), (st.return = p), st);
      }
    };
  }
  var Fl = xo(!0),
    To = xo(!1),
    gl = !1;
  function mc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function vc(t, e) {
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
  function pl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function bl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (rt & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
        (a.pending = e),
        (e = mu(t)),
        io(t, null, l),
        e
      );
    }
    return (hu(t, a, e, l), mu(t));
  }
  function mn(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
    ) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (l |= a), (e.lanes = l), ms(t, l));
    }
  }
  function yc(t, e) {
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
  var _c = !1;
  function vn() {
    if (_c) {
      var t = Ta;
      if (t !== null) throw t;
    }
  }
  function yn(t, e, l, a) {
    _c = !1;
    var n = t.updateQueue;
    gl = !1;
    var u = n.firstBaseUpdate,
      i = n.lastBaseUpdate,
      s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var h = s,
        x = h.next;
      ((h.next = null), i === null ? (u = x) : (i.next = x), (i = h));
      var C = t.alternate;
      C !== null &&
        ((C = C.updateQueue),
        (s = C.lastBaseUpdate),
        s !== i &&
          (s === null ? (C.firstBaseUpdate = x) : (s.next = x),
          (C.lastBaseUpdate = h)));
    }
    if (u !== null) {
      var D = n.baseState;
      ((i = 0), (C = x = h = null), (s = u));
      do {
        var T = s.lane & -536870913,
          N = T !== s.lane;
        if (N ? (it & T) === T : (a & T) === T) {
          (T !== 0 && T === xa && (_c = !0),
            C !== null &&
              (C = C.next =
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
            T = e;
            var gt = l;
            switch ($.tag) {
              case 1:
                if (((Y = $.payload), typeof Y == 'function')) {
                  D = Y.call(gt, D, T);
                  break t;
                }
                D = Y;
                break t;
              case 3:
                Y.flags = (Y.flags & -65537) | 128;
              case 0:
                if (
                  ((Y = $.payload),
                  (T = typeof Y == 'function' ? Y.call(gt, D, T) : Y),
                  T == null)
                )
                  break t;
                D = z({}, D, T);
                break t;
              case 2:
                gl = !0;
            }
          }
          ((T = s.callback),
            T !== null &&
              ((t.flags |= 64),
              N && (t.flags |= 8192),
              (N = n.callbacks),
              N === null ? (n.callbacks = [T]) : N.push(T)));
        } else
          ((N = {
            lane: T,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            C === null ? ((x = C = N), (h = D)) : (C = C.next = N),
            (i |= T));
        if (((s = s.next), s === null)) {
          if (((s = n.shared.pending), s === null)) break;
          ((N = s),
            (s = N.next),
            (N.next = null),
            (n.lastBaseUpdate = N),
            (n.shared.pending = null));
        }
      } while (!0);
      (C === null && (h = D),
        (n.baseState = h),
        (n.firstBaseUpdate = x),
        (n.lastBaseUpdate = C),
        u === null && (n.shared.lanes = 0),
        (zl |= i),
        (t.lanes = i),
        (t.memoizedState = D));
    }
  }
  function zo(t, e) {
    if (typeof t != 'function') throw Error(f(191, t));
    t.call(e);
  }
  function No(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) zo(l[t], e);
  }
  var Aa = g(null),
    Tu = g(0);
  function Ao(t, e) {
    ((t = nl), B(Tu, t), B(Aa, e), (nl = t | e.baseLanes));
  }
  function gc() {
    (B(Tu, nl), B(Aa, Aa.current));
  }
  function pc() {
    ((nl = Tu.current), U(Aa), U(Tu));
  }
  var me = g(null),
    Ae = null;
  function Sl(t) {
    var e = t.alternate;
    (B(Mt, Mt.current & 1),
      B(me, t),
      Ae === null &&
        (e === null || Aa.current !== null || e.memoizedState !== null) &&
        (Ae = t));
  }
  function bc(t) {
    (B(Mt, Mt.current), B(me, t), Ae === null && (Ae = t));
  }
  function jo(t) {
    t.tag === 22 ?
      (B(Mt, Mt.current), B(me, t), Ae === null && (Ae = t))
    : El();
  }
  function El() {
    (B(Mt, Mt.current), B(me, me.current));
  }
  function ve(t) {
    (U(me), Ae === t && (Ae = null), U(Mt));
  }
  var Mt = g(0);
  function zu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || Af(l) || jf(l)))
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
  var ke = 0,
    et = null,
    yt = null,
    Bt = null,
    Nu = !1,
    ja = !1,
    Il = !1,
    Au = 0,
    _n = 0,
    Ca = null,
    nm = 0;
  function jt() {
    throw Error(f(321));
  }
  function Sc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!de(t[l], e[l])) return !1;
    return !0;
  }
  function Ec(t, e, l, a, n, u) {
    return (
      (ke = u),
      (et = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (R.H = t === null || t.memoizedState === null ? rr : qc),
      (Il = !1),
      (u = l(a, n)),
      (Il = !1),
      ja && (u = Ro(e, l, a, n)),
      Co(t),
      u
    );
  }
  function Co(t) {
    R.H = bn;
    var e = yt !== null && yt.next !== null;
    if (((ke = 0), (Bt = yt = et = null), (Nu = !1), (_n = 0), (Ca = null), e))
      throw Error(f(300));
    t === null ||
      qt ||
      ((t = t.dependencies), t !== null && _u(t) && (qt = !0));
  }
  function Ro(t, e, l, a) {
    et = t;
    var n = 0;
    do {
      if ((ja && (Ca = null), (_n = 0), (ja = !1), 25 <= n))
        throw Error(f(301));
      if (((n += 1), (Bt = yt = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((R.H = dr), (u = e(l, a)));
    } while (ja);
    return u;
  }
  function um() {
    var t = R.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == 'function' ? gn(e) : e),
      (t = t.useState()[0]),
      (yt !== null ? yt.memoizedState : null) !== t && (et.flags |= 1024),
      e
    );
  }
  function xc() {
    var t = Au !== 0;
    return ((Au = 0), t);
  }
  function Tc(t, e, l) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l));
  }
  function zc(t) {
    if (Nu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      Nu = !1;
    }
    ((ke = 0), (Bt = yt = et = null), (ja = !1), (_n = Au = 0), (Ca = null));
  }
  function kt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Bt === null ? (et.memoizedState = Bt = t) : (Bt = Bt.next = t), Bt);
  }
  function Dt() {
    if (yt === null) {
      var t = et.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = yt.next;
    var e = Bt === null ? et.memoizedState : Bt.next;
    if (e !== null) ((Bt = e), (yt = t));
    else {
      if (t === null)
        throw et.alternate === null ? Error(f(467)) : Error(f(310));
      ((yt = t),
        (t = {
          memoizedState: yt.memoizedState,
          baseState: yt.baseState,
          baseQueue: yt.baseQueue,
          queue: yt.queue,
          next: null,
        }),
        Bt === null ? (et.memoizedState = Bt = t) : (Bt = Bt.next = t));
    }
    return Bt;
  }
  function ju() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function gn(t) {
    var e = _n;
    return (
      (_n += 1),
      Ca === null && (Ca = []),
      (t = bo(Ca, t, e)),
      (e = et),
      (Bt === null ? e.memoizedState : Bt.next) === null &&
        ((e = e.alternate),
        (R.H = e === null || e.memoizedState === null ? rr : qc)),
      t
    );
  }
  function Cu(t) {
    if (t !== null && typeof t == 'object') {
      if (typeof t.then == 'function') return gn(t);
      if (t.$$typeof === W) return Vt(t);
    }
    throw Error(f(438, String(t)));
  }
  function Nc(t) {
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
      l === null && ((l = ju()), (et.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = pe;
    return (e.index++, l);
  }
  function Fe(t, e) {
    return typeof e == 'function' ? e(t) : e;
  }
  function Ru(t) {
    var e = Dt();
    return Ac(e, yt, t);
  }
  function Ac(t, e, l) {
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
        h = null,
        x = e,
        C = !1;
      do {
        var D = x.lane & -536870913;
        if (D !== x.lane ? (it & D) === D : (ke & D) === D) {
          var T = x.revertLane;
          if (T === 0)
            (h !== null &&
              (h = h.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: x.action,
                  hasEagerState: x.hasEagerState,
                  eagerState: x.eagerState,
                  next: null,
                }),
              D === xa && (C = !0));
          else if ((ke & T) === T) {
            ((x = x.next), T === xa && (C = !0));
            continue;
          } else
            ((D = {
              lane: 0,
              revertLane: x.revertLane,
              gesture: null,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null,
            }),
              h === null ? ((s = h = D), (i = u)) : (h = h.next = D),
              (et.lanes |= T),
              (zl |= T));
          ((D = x.action),
            Il && l(u, D),
            (u = x.hasEagerState ? x.eagerState : l(u, D)));
        } else
          ((T = {
            lane: D,
            revertLane: x.revertLane,
            gesture: x.gesture,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null,
          }),
            h === null ? ((s = h = T), (i = u)) : (h = h.next = T),
            (et.lanes |= D),
            (zl |= D));
        x = x.next;
      } while (x !== null && x !== e);
      if (
        (h === null ? (i = u) : (h.next = s),
        !de(u, t.memoizedState) && ((qt = !0), C && ((l = Ta), l !== null)))
      )
        throw l;
      ((t.memoizedState = u),
        (t.baseState = i),
        (t.baseQueue = h),
        (a.lastRenderedState = u));
    }
    return (n === null && (a.lanes = 0), [t.memoizedState, a.dispatch]);
  }
  function jc(t) {
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
      (de(u, e.memoizedState) || (qt = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (l.lastRenderedState = u));
    }
    return [u, a];
  }
  function Oo(t, e, l) {
    var a = et,
      n = Dt(),
      u = ft;
    if (u) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = e();
    var i = !de((yt || n).memoizedState, l);
    if (
      (i && ((n.memoizedState = l), (qt = !0)),
      (n = n.queue),
      Oc(Uo.bind(null, a, n, t), [t]),
      n.getSnapshot !== e || i || (Bt !== null && Bt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Ra(9, { destroy: void 0 }, Do.bind(null, a, n, l, e), null),
        bt === null)
      )
        throw Error(f(349));
      u || (ke & 127) !== 0 || Mo(a, e, l);
    }
    return l;
  }
  function Mo(t, e, l) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = et.updateQueue),
      e === null ?
        ((e = ju()), (et.updateQueue = e), (e.stores = [t]))
      : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t)));
  }
  function Do(t, e, l, a) {
    ((e.value = l), (e.getSnapshot = a), Ho(e) && Bo(t));
  }
  function Uo(t, e, l) {
    return l(function () {
      Ho(e) && Bo(t);
    });
  }
  function Ho(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !de(t, l);
    } catch {
      return !0;
    }
  }
  function Bo(t) {
    var e = wl(t, 2);
    e !== null && ie(e, t, 2);
  }
  function Cc(t) {
    var e = kt();
    if (typeof t == 'function') {
      var l = t;
      if (((t = l()), Il)) {
        rl(!0);
        try {
          l();
        } finally {
          rl(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fe,
        lastRenderedState: t,
      }),
      e
    );
  }
  function qo(t, e, l, a) {
    return ((t.baseState = l), Ac(t, yt, typeof a == 'function' ? a : Fe));
  }
  function im(t, e, l, a, n) {
    if (Du(t)) throw Error(f(485));
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
      (R.T !== null ? l(!0) : (u.isTransition = !1),
        a(u),
        (l = e.pending),
        l === null ?
          ((u.next = e.pending = u), Yo(e, u))
        : ((u.next = l.next), (e.pending = l.next = u)));
    }
  }
  function Yo(t, e) {
    var l = e.action,
      a = e.payload,
      n = t.state;
    if (e.isTransition) {
      var u = R.T,
        i = {};
      R.T = i;
      try {
        var s = l(n, a),
          h = R.S;
        (h !== null && h(i, s), Lo(t, e, s));
      } catch (x) {
        Rc(t, e, x);
      } finally {
        (u !== null && i.types !== null && (u.types = i.types), (R.T = u));
      }
    } else
      try {
        ((u = l(n, a)), Lo(t, e, u));
      } catch (x) {
        Rc(t, e, x);
      }
  }
  function Lo(t, e, l) {
    l !== null && typeof l == 'object' && typeof l.then == 'function' ?
      l.then(
        function (a) {
          Go(t, e, a);
        },
        function (a) {
          return Rc(t, e, a);
        },
      )
    : Go(t, e, l);
  }
  function Go(t, e, l) {
    ((e.status = 'fulfilled'),
      (e.value = l),
      Xo(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), Yo(t, l))));
  }
  function Rc(t, e, l) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do ((e.status = 'rejected'), (e.reason = l), Xo(e), (e = e.next));
      while (e !== a);
    }
    t.action = null;
  }
  function Xo(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Qo(t, e) {
    return e;
  }
  function wo(t, e) {
    if (ft) {
      var l = bt.formState;
      if (l !== null) {
        t: {
          var a = et;
          if (ft) {
            if (xt) {
              e: {
                for (var n = xt, u = Ne; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break e;
                  }
                  if (((n = je(n.nextSibling)), n === null)) {
                    n = null;
                    break e;
                  }
                }
                ((u = n.data), (n = u === 'F!' || u === 'F' ? n : null));
              }
              if (n) {
                ((xt = je(n.nextSibling)), (a = n.data === 'F!'));
                break t;
              }
            }
            yl(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return (
      (l = kt()),
      (l.memoizedState = l.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qo,
        lastRenderedState: e,
      }),
      (l.queue = a),
      (l = fr.bind(null, et, a)),
      (a.dispatch = l),
      (a = Cc(!1)),
      (u = Bc.bind(null, et, !1, a.queue)),
      (a = kt()),
      (n = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = n),
      (l = im.bind(null, et, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = t),
      [e, l, !1]
    );
  }
  function Zo(t) {
    var e = Dt();
    return Vo(e, yt, t);
  }
  function Vo(t, e, l) {
    if (
      ((e = Ac(t, e, Qo)[0]),
      (t = Ru(Fe)[0]),
      typeof e == 'object' && e !== null && typeof e.then == 'function')
    )
      try {
        var a = gn(e);
      } catch (i) {
        throw i === za ? bu : i;
      }
    else a = e;
    e = Dt();
    var n = e.queue,
      u = n.dispatch;
    return (
      l !== e.memoizedState &&
        ((et.flags |= 2048),
        Ra(9, { destroy: void 0 }, cm.bind(null, n, l), null)),
      [a, u, t]
    );
  }
  function cm(t, e) {
    t.action = e;
  }
  function Ko(t) {
    var e = Dt(),
      l = yt;
    if (l !== null) return Vo(e, l, t);
    (Dt(), (e = e.memoizedState), (l = Dt()));
    var a = l.queue.dispatch;
    return ((l.memoizedState = t), [e, a, !1]);
  }
  function Ra(t, e, l, a) {
    return (
      (t = { tag: t, create: l, deps: a, inst: e, next: null }),
      (e = et.updateQueue),
      e === null && ((e = ju()), (et.updateQueue = e)),
      (l = e.lastEffect),
      l === null ?
        (e.lastEffect = t.next = t)
      : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function Jo() {
    return Dt().memoizedState;
  }
  function Ou(t, e, l, a) {
    var n = kt();
    ((et.flags |= t),
      (n.memoizedState = Ra(
        1 | e,
        { destroy: void 0 },
        l,
        a === void 0 ? null : a,
      )));
  }
  function Mu(t, e, l, a) {
    var n = Dt();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    yt !== null && a !== null && Sc(a, yt.memoizedState.deps) ?
      (n.memoizedState = Ra(e, u, l, a))
    : ((et.flags |= t), (n.memoizedState = Ra(1 | e, u, l, a)));
  }
  function $o(t, e) {
    Ou(8390656, 8, t, e);
  }
  function Oc(t, e) {
    Mu(2048, 8, t, e);
  }
  function fm(t) {
    et.flags |= 4;
    var e = et.updateQueue;
    if (e === null) ((e = ju()), (et.updateQueue = e), (e.events = [t]));
    else {
      var l = e.events;
      l === null ? (e.events = [t]) : l.push(t);
    }
  }
  function Wo(t) {
    var e = Dt().memoizedState;
    return (
      fm({ ref: e, nextImpl: t }),
      function () {
        if ((rt & 2) !== 0) throw Error(f(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function ko(t, e) {
    return Mu(4, 2, t, e);
  }
  function Fo(t, e) {
    return Mu(4, 4, t, e);
  }
  function Io(t, e) {
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
  function Po(t, e, l) {
    ((l = l != null ? l.concat([t]) : null), Mu(4, 4, Io.bind(null, e, t), l));
  }
  function Mc() {}
  function tr(t, e) {
    var l = Dt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && Sc(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
  }
  function er(t, e) {
    var l = Dt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && Sc(e, a[1])) return a[0];
    if (((a = t()), Il)) {
      rl(!0);
      try {
        t();
      } finally {
        rl(!1);
      }
    }
    return ((l.memoizedState = [a, e]), a);
  }
  function Dc(t, e, l) {
    return l === void 0 || ((ke & 1073741824) !== 0 && (it & 261930) === 0) ?
        (t.memoizedState = e)
      : ((t.memoizedState = l), (t = ld()), (et.lanes |= t), (zl |= t), l);
  }
  function lr(t, e, l, a) {
    return (
      de(l, e) ? l
      : Aa.current !== null ? ((t = Dc(t, l, a)), de(t, e) || (qt = !0), t)
      : (ke & 42) === 0 || ((ke & 1073741824) !== 0 && (it & 261930) === 0) ?
        ((qt = !0), (t.memoizedState = l))
      : ((t = ld()), (et.lanes |= t), (zl |= t), e)
    );
  }
  function ar(t, e, l, a, n) {
    var u = H.p;
    H.p = u !== 0 && 8 > u ? u : 8;
    var i = R.T,
      s = {};
    ((R.T = s), Bc(t, !1, e, l));
    try {
      var h = n(),
        x = R.S;
      if (
        (x !== null && x(s, h),
        h !== null && typeof h == 'object' && typeof h.then == 'function')
      ) {
        var C = am(h, a);
        pn(t, e, C, ge(t));
      } else pn(t, e, a, ge(t));
    } catch (D) {
      pn(t, e, { then: function () {}, status: 'rejected', reason: D }, ge());
    } finally {
      ((H.p = u),
        i !== null && s.types !== null && (i.types = s.types),
        (R.T = i));
    }
  }
  function sm() {}
  function Uc(t, e, l, a) {
    if (t.tag !== 5) throw Error(f(476));
    var n = nr(t).queue;
    ar(
      t,
      n,
      e,
      k,
      l === null ? sm : (
        function () {
          return (ur(t), l(a));
        }
      ),
    );
  }
  function nr(t) {
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
        lastRenderedReducer: Fe,
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
          lastRenderedReducer: Fe,
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
  function ur(t) {
    var e = nr(t);
    (e.next === null && (e = t.alternate.memoizedState),
      pn(t, e.next.queue, {}, ge()));
  }
  function Hc() {
    return Vt(Bn);
  }
  function ir() {
    return Dt().memoizedState;
  }
  function cr() {
    return Dt().memoizedState;
  }
  function om(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = ge();
          t = pl(l);
          var a = bl(e, t, l);
          (a !== null && (ie(a, e, l), mn(a, e, l)),
            (e = { cache: oc() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function rm(t, e, l) {
    var a = ge();
    ((l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Du(t) ?
        sr(e, l)
      : ((l = Pi(t, e, l, a)), l !== null && (ie(l, t, a), or(l, e, a))));
  }
  function fr(t, e, l) {
    var a = ge();
    pn(t, e, l, a);
  }
  function pn(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Du(t)) sr(e, n);
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
          if (((n.hasEagerState = !0), (n.eagerState = s), de(s, i)))
            return (hu(t, e, n, 0), bt === null && du(), !1);
        } catch {}
      if (((l = Pi(t, e, n, a)), l !== null))
        return (ie(l, t, a), or(l, e, a), !0);
    }
    return !1;
  }
  function Bc(t, e, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: vf(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Du(t))
    ) {
      if (e) throw Error(f(479));
    } else ((e = Pi(t, l, a, 2)), e !== null && ie(e, t, 2));
  }
  function Du(t) {
    var e = t.alternate;
    return t === et || (e !== null && e === et);
  }
  function sr(t, e) {
    ja = Nu = !0;
    var l = t.pending;
    (l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e));
  }
  function or(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (l |= a), (e.lanes = l), ms(t, l));
    }
  }
  var bn = {
    readContext: Vt,
    use: Cu,
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
  bn.useEffectEvent = jt;
  var rr = {
      readContext: Vt,
      use: Cu,
      useCallback: function (t, e) {
        return ((kt().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: Vt,
      useEffect: $o,
      useImperativeHandle: function (t, e, l) {
        ((l = l != null ? l.concat([t]) : null),
          Ou(4194308, 4, Io.bind(null, e, t), l));
      },
      useLayoutEffect: function (t, e) {
        return Ou(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        Ou(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = kt();
        e = e === void 0 ? null : e;
        var a = t();
        if (Il) {
          rl(!0);
          try {
            t();
          } finally {
            rl(!1);
          }
        }
        return ((l.memoizedState = [a, e]), a);
      },
      useReducer: function (t, e, l) {
        var a = kt();
        if (l !== void 0) {
          var n = l(e);
          if (Il) {
            rl(!0);
            try {
              l(e);
            } finally {
              rl(!1);
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
          (t = t.dispatch = rm.bind(null, et, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = kt();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = Cc(t);
        var e = t.queue,
          l = fr.bind(null, et, e);
        return ((e.dispatch = l), [t.memoizedState, l]);
      },
      useDebugValue: Mc,
      useDeferredValue: function (t, e) {
        var l = kt();
        return Dc(l, t, e);
      },
      useTransition: function () {
        var t = Cc(!1);
        return (
          (t = ar.bind(null, et, t.queue, !0, !1)),
          (kt().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, l) {
        var a = et,
          n = kt();
        if (ft) {
          if (l === void 0) throw Error(f(407));
          l = l();
        } else {
          if (((l = e()), bt === null)) throw Error(f(349));
          (it & 127) !== 0 || Mo(a, e, l);
        }
        n.memoizedState = l;
        var u = { value: l, getSnapshot: e };
        return (
          (n.queue = u),
          $o(Uo.bind(null, a, u, t), [t]),
          (a.flags |= 2048),
          Ra(9, { destroy: void 0 }, Do.bind(null, a, u, l, e), null),
          l
        );
      },
      useId: function () {
        var t = kt(),
          e = bt.identifierPrefix;
        if (ft) {
          var l = Le,
            a = Ye;
          ((l = (a & ~(1 << (32 - re(a) - 1))).toString(32) + l),
            (e = '_' + e + 'R_' + l),
            (l = Au++),
            0 < l && (e += 'H' + l.toString(32)),
            (e += '_'));
        } else ((l = nm++), (e = '_' + e + 'r_' + l.toString(32) + '_'));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Hc,
      useFormState: wo,
      useActionState: wo,
      useOptimistic: function (t) {
        var e = kt();
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
          (e = Bc.bind(null, et, !0, l)),
          (l.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: Nc,
      useCacheRefresh: function () {
        return (kt().memoizedState = om.bind(null, et));
      },
      useEffectEvent: function (t) {
        var e = kt(),
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
    qc = {
      readContext: Vt,
      use: Cu,
      useCallback: tr,
      useContext: Vt,
      useEffect: Oc,
      useImperativeHandle: Po,
      useInsertionEffect: ko,
      useLayoutEffect: Fo,
      useMemo: er,
      useReducer: Ru,
      useRef: Jo,
      useState: function () {
        return Ru(Fe);
      },
      useDebugValue: Mc,
      useDeferredValue: function (t, e) {
        var l = Dt();
        return lr(l, yt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Ru(Fe)[0],
          e = Dt().memoizedState;
        return [typeof t == 'boolean' ? t : gn(t), e];
      },
      useSyncExternalStore: Oo,
      useId: ir,
      useHostTransitionStatus: Hc,
      useFormState: Zo,
      useActionState: Zo,
      useOptimistic: function (t, e) {
        var l = Dt();
        return qo(l, yt, t, e);
      },
      useMemoCache: Nc,
      useCacheRefresh: cr,
    };
  qc.useEffectEvent = Wo;
  var dr = {
    readContext: Vt,
    use: Cu,
    useCallback: tr,
    useContext: Vt,
    useEffect: Oc,
    useImperativeHandle: Po,
    useInsertionEffect: ko,
    useLayoutEffect: Fo,
    useMemo: er,
    useReducer: jc,
    useRef: Jo,
    useState: function () {
      return jc(Fe);
    },
    useDebugValue: Mc,
    useDeferredValue: function (t, e) {
      var l = Dt();
      return yt === null ? Dc(l, t, e) : lr(l, yt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = jc(Fe)[0],
        e = Dt().memoizedState;
      return [typeof t == 'boolean' ? t : gn(t), e];
    },
    useSyncExternalStore: Oo,
    useId: ir,
    useHostTransitionStatus: Hc,
    useFormState: Ko,
    useActionState: Ko,
    useOptimistic: function (t, e) {
      var l = Dt();
      return yt !== null ?
          qo(l, yt, t, e)
        : ((l.baseState = t), [t, l.queue.dispatch]);
    },
    useMemoCache: Nc,
    useCacheRefresh: cr,
  };
  dr.useEffectEvent = Wo;
  function Yc(t, e, l, a) {
    ((e = t.memoizedState),
      (l = l(a, e)),
      (l = l == null ? e : z({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l));
  }
  var Lc = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var a = ge(),
        n = pl(a);
      ((n.payload = e),
        l != null && (n.callback = l),
        (e = bl(t, n, a)),
        e !== null && (ie(e, t, a), mn(e, t, a)));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var a = ge(),
        n = pl(a);
      ((n.tag = 1),
        (n.payload = e),
        l != null && (n.callback = l),
        (e = bl(t, n, a)),
        e !== null && (ie(e, t, a), mn(e, t, a)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = ge(),
        a = pl(l);
      ((a.tag = 2),
        e != null && (a.callback = e),
        (e = bl(t, a, l)),
        e !== null && (ie(e, t, l), mn(e, t, l)));
    },
  };
  function hr(t, e, l, a, n, u, i) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == 'function' ?
        t.shouldComponentUpdate(a, u, i)
      : e.prototype && e.prototype.isPureReactComponent ? !un(l, a) || !un(n, u)
      : !0
    );
  }
  function mr(t, e, l, a) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == 'function' &&
        e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
        e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && Lc.enqueueReplaceState(e, e.state, null));
  }
  function Pl(t, e) {
    var l = e;
    if ('ref' in e) {
      l = {};
      for (var a in e) a !== 'ref' && (l[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = z({}, l));
      for (var n in t) l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  function vr(t) {
    ru(t);
  }
  function yr(t) {
    console.error(t);
  }
  function _r(t) {
    ru(t);
  }
  function Uu(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function gr(t, e, l) {
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
  function Gc(t, e, l) {
    return (
      (l = pl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Uu(t, e);
      }),
      l
    );
  }
  function pr(t) {
    return ((t = pl(t)), (t.tag = 3), t);
  }
  function br(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == 'function') {
      var u = a.value;
      ((t.payload = function () {
        return n(u);
      }),
        (t.callback = function () {
          gr(e, l, a);
        }));
    }
    var i = l.stateNode;
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (t.callback = function () {
        (gr(e, l, a),
          typeof n != 'function' &&
            (Nl === null ? (Nl = new Set([this])) : Nl.add(this)));
        var s = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: s !== null ? s : '',
        });
      });
  }
  function dm(t, e, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == 'object' && typeof a.then == 'function')
    ) {
      if (
        ((e = l.alternate),
        e !== null && Ea(e, l, n, !0),
        (l = me.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              Ae === null ? Ku() : l.alternate === null && Ct === 0 && (Ct = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === Su ?
                (l.flags |= 16384)
              : ((e = l.updateQueue),
                e === null ? (l.updateQueue = new Set([a])) : e.add(a),
                df(t, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === Su ?
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
                df(t, a, n)),
              !1
            );
        }
        throw Error(f(435, l.tag));
      }
      return (df(t, a, n), Ku(), !1);
    }
    if (ft)
      return (
        (e = me.current),
        e !== null ?
          ((e.flags & 65536) === 0 && (e.flags |= 256),
          (e.flags |= 65536),
          (e.lanes = n),
          a !== uc && ((t = Error(f(422), { cause: a })), sn(xe(t, l))))
        : (a !== uc && ((e = Error(f(423), { cause: a })), sn(xe(e, l))),
          (t = t.current.alternate),
          (t.flags |= 65536),
          (n &= -n),
          (t.lanes |= n),
          (a = xe(a, l)),
          (n = Gc(t.stateNode, a, n)),
          yc(t, n),
          Ct !== 4 && (Ct = 2)),
        !1
      );
    var u = Error(f(520), { cause: a });
    if (
      ((u = xe(u, l)),
      jn === null ? (jn = [u]) : jn.push(u),
      Ct !== 4 && (Ct = 2),
      e === null)
    )
      return !0;
    ((a = xe(a, l)), (l = e));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = n & -n),
            (l.lanes |= t),
            (t = Gc(l.stateNode, a, t)),
            yc(l, t),
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
                  (Nl === null || !Nl.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = pr(n)),
              br(n, t, l, a),
              yc(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Xc = Error(f(461)),
    qt = !1;
  function Kt(t, e, l, a) {
    e.child = t === null ? To(e, null, l, a) : Fl(e, t.child, l, a);
  }
  function Sr(t, e, l, a, n) {
    l = l.render;
    var u = e.ref;
    if ('ref' in a) {
      var i = {};
      for (var s in a) s !== 'ref' && (i[s] = a[s]);
    } else i = a;
    return (
      Jl(e),
      (a = Ec(t, e, l, i, u, n)),
      (s = xc()),
      t !== null && !qt ?
        (Tc(t, e, n), Ie(t, e, n))
      : (ft && s && ac(e), (e.flags |= 1), Kt(t, e, a, n), e.child)
    );
  }
  function Er(t, e, l, a, n) {
    if (t === null) {
      var u = l.type;
      return (
          typeof u == 'function' &&
            !tc(u) &&
            u.defaultProps === void 0 &&
            l.compare === null
        ) ?
          ((e.tag = 15), (e.type = u), xr(t, e, u, a, n))
        : ((t = vu(l.type, null, a, e, e.mode, n)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((u = t.child), !Wc(t, n))) {
      var i = u.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : un), l(i, a) && t.ref === e.ref)
      )
        return Ie(t, e, n);
    }
    return (
      (e.flags |= 1),
      (t = Ke(u, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function xr(t, e, l, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (un(u, a) && t.ref === e.ref)
        if (((qt = !1), (e.pendingProps = a = u), Wc(t, n)))
          (t.flags & 131072) !== 0 && (qt = !0);
        else return ((e.lanes = t.lanes), Ie(t, e, n));
    }
    return Qc(t, e, l, a, n);
  }
  function Tr(t, e, l, a) {
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
        return zr(t, e, u, l, a);
      }
      if ((l & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && pu(e, u !== null ? u.cachePool : null),
          u !== null ? Ao(e, u) : gc(),
          jo(e));
      else
        return (
          (a = e.lanes = 536870912),
          zr(t, e, u !== null ? u.baseLanes | l : l, l, a)
        );
    } else
      u !== null ?
        (pu(e, u.cachePool), Ao(e, u), El(), (e.memoizedState = null))
      : (t !== null && pu(e, null), gc(), El());
    return (Kt(t, e, n, l), e.child);
  }
  function Sn(t, e) {
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
  function zr(t, e, l, a, n) {
    var u = dc();
    return (
      (u = u === null ? null : { parent: Ht._currentValue, pool: u }),
      (e.memoizedState = { baseLanes: l, cachePool: u }),
      t !== null && pu(e, null),
      gc(),
      jo(e),
      t !== null && Ea(t, e, a, !0),
      (e.childLanes = n),
      null
    );
  }
  function Hu(t, e) {
    return (
      (e = qu({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Nr(t, e, l) {
    return (
      Fl(e, t.child, null, l),
      (t = Hu(e, e.pendingProps)),
      (t.flags |= 2),
      ve(e),
      (e.memoizedState = null),
      t
    );
  }
  function hm(t, e, l) {
    var a = e.pendingProps,
      n = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (ft) {
        if (a.mode === 'hidden')
          return ((t = Hu(e, a)), (e.lanes = 536870912), Sn(null, t));
        if (
          (bc(e),
          (t = xt) ?
            ((t = Yd(t, Ne)),
            (t = t !== null && t.data === '&' ? t : null),
            t !== null &&
              ((e.memoizedState = {
                dehydrated: t,
                treeContext: ml !== null ? { id: Ye, overflow: Le } : null,
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (l = fo(t)),
              (l.return = e),
              (e.child = l),
              (Zt = e),
              (xt = null)))
          : (t = null),
          t === null)
        )
          throw yl(e);
        return ((e.lanes = 536870912), null);
      }
      return Hu(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if ((bc(e), n))
        if (e.flags & 256) ((e.flags &= -257), (e = Nr(t, e, l)));
        else if (e.memoizedState !== null)
          ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(f(558));
      else if (
        (qt || Ea(t, e, l, !1), (n = (l & t.childLanes) !== 0), qt || n)
      ) {
        if (
          ((a = bt),
          a !== null && ((i = vs(a, l)), i !== 0 && i !== u.retryLane))
        )
          throw ((u.retryLane = i), wl(t, i), ie(a, t, i), Xc);
        (Ku(), (e = Nr(t, e, l)));
      } else
        ((t = u.treeContext),
          (xt = je(i.nextSibling)),
          (Zt = e),
          (ft = !0),
          (vl = null),
          (Ne = !1),
          t !== null && ro(e, t),
          (e = Hu(e, a)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = Ke(t.child, { mode: a.mode, children: a.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Bu(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != 'function' && typeof l != 'object') throw Error(f(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Qc(t, e, l, a, n) {
    return (
      Jl(e),
      (l = Ec(t, e, l, a, void 0, n)),
      (a = xc()),
      t !== null && !qt ?
        (Tc(t, e, n), Ie(t, e, n))
      : (ft && a && ac(e), (e.flags |= 1), Kt(t, e, l, n), e.child)
    );
  }
  function Ar(t, e, l, a, n, u) {
    return (
      Jl(e),
      (e.updateQueue = null),
      (l = Ro(e, a, l, n)),
      Co(t),
      (a = xc()),
      t !== null && !qt ?
        (Tc(t, e, u), Ie(t, e, u))
      : (ft && a && ac(e), (e.flags |= 1), Kt(t, e, l, u), e.child)
    );
  }
  function jr(t, e, l, a, n) {
    if ((Jl(e), e.stateNode === null)) {
      var u = ga,
        i = l.contextType;
      (typeof i == 'object' && i !== null && (u = Vt(i)),
        (u = new l(a, u)),
        (e.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Lc),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = a),
        (u.state = e.memoizedState),
        (u.refs = {}),
        mc(e),
        (i = l.contextType),
        (u.context = typeof i == 'object' && i !== null ? Vt(i) : ga),
        (u.state = e.memoizedState),
        (i = l.getDerivedStateFromProps),
        typeof i == 'function' && (Yc(e, l, i, a), (u.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((i = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' &&
            u.UNSAFE_componentWillMount(),
          i !== u.state && Lc.enqueueReplaceState(u, u.state, null),
          yn(e, a, u, n),
          vn(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == 'function' && (e.flags |= 4194308),
        (a = !0));
    } else if (t === null) {
      u = e.stateNode;
      var s = e.memoizedProps,
        h = Pl(l, s);
      u.props = h;
      var x = u.context,
        C = l.contextType;
      ((i = ga), typeof C == 'object' && C !== null && (i = Vt(C)));
      var D = l.getDerivedStateFromProps;
      ((C =
        typeof D == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function'),
        (s = e.pendingProps !== s),
        C ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((s || x !== i) && mr(e, u, a, i)),
        (gl = !1));
      var T = e.memoizedState;
      ((u.state = T),
        yn(e, a, u, n),
        vn(),
        (x = e.memoizedState),
        s || T !== x || gl ?
          (typeof D == 'function' && (Yc(e, l, D, a), (x = e.memoizedState)),
          (h = gl || hr(e, l, h, a, T, x, i)) ?
            (C ||
              (typeof u.UNSAFE_componentWillMount != 'function' &&
                typeof u.componentWillMount != 'function') ||
              (typeof u.componentWillMount == 'function' &&
                u.componentWillMount(),
              typeof u.UNSAFE_componentWillMount == 'function' &&
                u.UNSAFE_componentWillMount()),
            typeof u.componentDidMount == 'function' && (e.flags |= 4194308))
          : (typeof u.componentDidMount == 'function' && (e.flags |= 4194308),
            (e.memoizedProps = a),
            (e.memoizedState = x)),
          (u.props = a),
          (u.state = x),
          (u.context = i),
          (a = h))
        : (typeof u.componentDidMount == 'function' && (e.flags |= 4194308),
          (a = !1)));
    } else {
      ((u = e.stateNode),
        vc(t, e),
        (i = e.memoizedProps),
        (C = Pl(l, i)),
        (u.props = C),
        (D = e.pendingProps),
        (T = u.context),
        (x = l.contextType),
        (h = ga),
        typeof x == 'object' && x !== null && (h = Vt(x)),
        (s = l.getDerivedStateFromProps),
        (x =
          typeof s == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((i !== D || T !== h) && mr(e, u, a, h)),
        (gl = !1),
        (T = e.memoizedState),
        (u.state = T),
        yn(e, a, u, n),
        vn());
      var N = e.memoizedState;
      (
        i !== D ||
        T !== N ||
        gl ||
        (t !== null && t.dependencies !== null && _u(t.dependencies))
      ) ?
        (typeof s == 'function' && (Yc(e, l, s, a), (N = e.memoizedState)),
        (
          (C =
            gl ||
            hr(e, l, C, a, T, N, h) ||
            (t !== null && t.dependencies !== null && _u(t.dependencies)))
        ) ?
          (x ||
            (typeof u.UNSAFE_componentWillUpdate != 'function' &&
              typeof u.componentWillUpdate != 'function') ||
            (typeof u.componentWillUpdate == 'function' &&
              u.componentWillUpdate(a, N, h),
            typeof u.UNSAFE_componentWillUpdate == 'function' &&
              u.UNSAFE_componentWillUpdate(a, N, h)),
          typeof u.componentDidUpdate == 'function' && (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
        : (typeof u.componentDidUpdate != 'function' ||
            (i === t.memoizedProps && T === t.memoizedState) ||
            (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (i === t.memoizedProps && T === t.memoizedState) ||
            (e.flags |= 1024),
          (e.memoizedProps = a),
          (e.memoizedState = N)),
        (u.props = a),
        (u.state = N),
        (u.context = h),
        (a = C))
      : (typeof u.componentDidUpdate != 'function' ||
          (i === t.memoizedProps && T === t.memoizedState) ||
          (e.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != 'function' ||
          (i === t.memoizedProps && T === t.memoizedState) ||
          (e.flags |= 1024),
        (a = !1));
    }
    return (
      (u = a),
      Bu(t, e),
      (a = (e.flags & 128) !== 0),
      u || a ?
        ((u = e.stateNode),
        (l =
          a && typeof l.getDerivedStateFromError != 'function' ?
            null
          : u.render()),
        (e.flags |= 1),
        t !== null && a ?
          ((e.child = Fl(e, t.child, null, n)), (e.child = Fl(e, null, l, n)))
        : Kt(t, e, l, n),
        (e.memoizedState = u.state),
        (t = e.child))
      : (t = Ie(t, e, n)),
      t
    );
  }
  function Cr(t, e, l, a) {
    return (Vl(), (e.flags |= 256), Kt(t, e, l, a), e.child);
  }
  var wc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Zc(t) {
    return { baseLanes: t, cachePool: go() };
  }
  function Vc(t, e, l) {
    return ((t = t !== null ? t.childLanes & ~l : 0), e && (t |= _e), t);
  }
  function Rr(t, e, l) {
    var a = e.pendingProps,
      n = !1,
      u = (e.flags & 128) !== 0,
      i;
    if (
      ((i = u) ||
        (i =
          t !== null && t.memoizedState === null ? !1 : (Mt.current & 2) !== 0),
      i && ((n = !0), (e.flags &= -129)),
      (i = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (ft) {
        if (
          (n ? Sl(e) : El(),
          (t = xt) ?
            ((t = Yd(t, Ne)),
            (t = t !== null && t.data !== '&' ? t : null),
            t !== null &&
              ((e.memoizedState = {
                dehydrated: t,
                treeContext: ml !== null ? { id: Ye, overflow: Le } : null,
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (l = fo(t)),
              (l.return = e),
              (e.child = l),
              (Zt = e),
              (xt = null)))
          : (t = null),
          t === null)
        )
          throw yl(e);
        return (jf(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var s = a.children;
      return (
        (a = a.fallback),
        n ?
          (El(),
          (n = e.mode),
          (s = qu({ mode: 'hidden', children: s }, n)),
          (a = Zl(a, n, l, null)),
          (s.return = e),
          (a.return = e),
          (s.sibling = a),
          (e.child = s),
          (a = e.child),
          (a.memoizedState = Zc(l)),
          (a.childLanes = Vc(t, i, l)),
          (e.memoizedState = wc),
          Sn(null, a))
        : (Sl(e), Kc(e, s))
      );
    }
    var h = t.memoizedState;
    if (h !== null && ((s = h.dehydrated), s !== null)) {
      if (u)
        e.flags & 256 ? (Sl(e), (e.flags &= -257), (e = Jc(t, e, l)))
        : e.memoizedState !== null ?
          (El(), (e.child = t.child), (e.flags |= 128), (e = null))
        : (El(),
          (s = a.fallback),
          (n = e.mode),
          (a = qu({ mode: 'visible', children: a.children }, n)),
          (s = Zl(s, n, l, null)),
          (s.flags |= 2),
          (a.return = e),
          (s.return = e),
          (a.sibling = s),
          (e.child = a),
          Fl(e, t.child, null, l),
          (a = e.child),
          (a.memoizedState = Zc(l)),
          (a.childLanes = Vc(t, i, l)),
          (e.memoizedState = wc),
          (e = Sn(null, a)));
      else if ((Sl(e), jf(s))) {
        if (((i = s.nextSibling && s.nextSibling.dataset), i)) var x = i.dgst;
        ((i = x),
          (a = Error(f(419))),
          (a.stack = ''),
          (a.digest = i),
          sn({ value: a, source: null, stack: null }),
          (e = Jc(t, e, l)));
      } else if (
        (qt || Ea(t, e, l, !1), (i = (l & t.childLanes) !== 0), qt || i)
      ) {
        if (
          ((i = bt),
          i !== null && ((a = vs(i, l)), a !== 0 && a !== h.retryLane))
        )
          throw ((h.retryLane = a), wl(t, a), ie(i, t, a), Xc);
        (Af(s) || Ku(), (e = Jc(t, e, l)));
      } else
        Af(s) ?
          ((e.flags |= 192), (e.child = t.child), (e = null))
        : ((t = h.treeContext),
          (xt = je(s.nextSibling)),
          (Zt = e),
          (ft = !0),
          (vl = null),
          (Ne = !1),
          t !== null && ro(e, t),
          (e = Kc(e, a.children)),
          (e.flags |= 4096));
      return e;
    }
    return n ?
        (El(),
        (s = a.fallback),
        (n = e.mode),
        (h = t.child),
        (x = h.sibling),
        (a = Ke(h, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = h.subtreeFlags & 65011712),
        x !== null ? (s = Ke(x, s)) : ((s = Zl(s, n, l, null)), (s.flags |= 2)),
        (s.return = e),
        (a.return = e),
        (a.sibling = s),
        (e.child = a),
        Sn(null, a),
        (a = e.child),
        (s = t.child.memoizedState),
        s === null ?
          (s = Zc(l))
        : ((n = s.cachePool),
          n !== null ?
            ((h = Ht._currentValue),
            (n = n.parent !== h ? { parent: h, pool: h } : n))
          : (n = go()),
          (s = { baseLanes: s.baseLanes | l, cachePool: n })),
        (a.memoizedState = s),
        (a.childLanes = Vc(t, i, l)),
        (e.memoizedState = wc),
        Sn(t.child, a))
      : (Sl(e),
        (l = t.child),
        (t = l.sibling),
        (l = Ke(l, { mode: 'visible', children: a.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((i = e.deletions),
          i === null ? ((e.deletions = [t]), (e.flags |= 16)) : i.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function Kc(t, e) {
    return (
      (e = qu({ mode: 'visible', children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function qu(t, e) {
    return ((t = he(22, t, null, e)), (t.lanes = 0), t);
  }
  function Jc(t, e, l) {
    return (
      Fl(e, t.child, null, l),
      (t = Kc(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Or(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    (a !== null && (a.lanes |= e), fc(t.return, e, l));
  }
  function $c(t, e, l, a, n, u) {
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
  function Mr(t, e, l) {
    var a = e.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    a = a.children;
    var i = Mt.current,
      s = (i & 2) !== 0;
    if (
      (s ? ((i = (i & 1) | 2), (e.flags |= 128)) : (i &= 1),
      B(Mt, i),
      Kt(t, e, a, l),
      (a = ft ? fn : 0),
      !s && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Or(t, l, e);
        else if (t.tag === 19) Or(t, l, e);
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
            t !== null && zu(t) === null && (n = l),
            (l = l.sibling));
        ((l = n),
          l === null ?
            ((n = e.child), (e.child = null))
          : ((n = l.sibling), (l.sibling = null)),
          $c(e, !1, n, l, u, a));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (((t = n.alternate), t !== null && zu(t) === null)) {
            e.child = n;
            break;
          }
          ((t = n.sibling), (n.sibling = l), (l = n), (n = t));
        }
        $c(e, !0, l, null, u, a);
        break;
      case 'together':
        $c(e, !1, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Ie(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (zl |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Ea(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(f(153));
    if (e.child !== null) {
      for (
        t = e.child, l = Ke(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (l = l.sibling = Ke(t, t.pendingProps)),
          (l.return = e));
      l.sibling = null;
    }
    return e.child;
  }
  function Wc(t, e) {
    return (t.lanes & e) !== 0 ?
        !0
      : ((t = t.dependencies), !!(t !== null && _u(t)));
  }
  function mm(t, e, l) {
    switch (e.tag) {
      case 3:
        (Wt(e, e.stateNode.containerInfo),
          _l(e, Ht, t.memoizedState.cache),
          Vl());
        break;
      case 27:
      case 5:
        Ka(e);
        break;
      case 4:
        Wt(e, e.stateNode.containerInfo);
        break;
      case 10:
        _l(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), bc(e), null);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return (
            a.dehydrated !== null ? (Sl(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0 ? Rr(t, e, l)
            : (Sl(e), (t = Ie(t, e, l)), t !== null ? t.sibling : null)
          );
        Sl(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (
          ((a = (l & e.childLanes) !== 0),
          a || (Ea(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
          n)
        ) {
          if (a) return Mr(t, e, l);
          e.flags |= 128;
        }
        if (
          ((n = e.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          B(Mt, Mt.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), Tr(t, e, l, e.pendingProps));
      case 24:
        _l(e, Ht, t.memoizedState.cache);
    }
    return Ie(t, e, l);
  }
  function Dr(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) qt = !0;
      else {
        if (!Wc(t, l) && (e.flags & 128) === 0) return ((qt = !1), mm(t, e, l));
        qt = (t.flags & 131072) !== 0;
      }
    else ((qt = !1), ft && (e.flags & 1048576) !== 0 && oo(e, fn, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (((t = Wl(e.elementType)), (e.type = t), typeof t == 'function'))
            tc(t) ?
              ((a = Pl(t, a)), (e.tag = 1), (e = jr(null, e, t, a, l)))
            : ((e.tag = 0), (e = Qc(null, e, t, a, l)));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === Et) {
                ((e.tag = 11), (e = Sr(null, e, t, a, l)));
                break t;
              } else if (n === P) {
                ((e.tag = 14), (e = Er(null, e, t, a, l)));
                break t;
              }
            }
            throw ((e = Qe(t) || t), Error(f(306, e, '')));
          }
        }
        return e;
      case 0:
        return Qc(t, e, e.type, e.pendingProps, l);
      case 1:
        return ((a = e.type), (n = Pl(a, e.pendingProps)), jr(t, e, a, n, l));
      case 3:
        t: {
          if ((Wt(e, e.stateNode.containerInfo), t === null))
            throw Error(f(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          ((n = u.element), vc(t, e), yn(e, a, null, l));
          var i = e.memoizedState;
          if (
            ((a = i.cache),
            _l(e, Ht, a),
            a !== u.cache && sc(e, [Ht], l, !0),
            vn(),
            (a = i.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: i.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = Cr(t, e, a, l);
              break t;
            } else if (a !== n) {
              ((n = xe(Error(f(424)), e)), sn(n), (e = Cr(t, e, a, l)));
              break t;
            } else
              for (
                t = e.stateNode.containerInfo,
                  t.nodeType === 9 ?
                    (t = t.body)
                  : (t = t.nodeName === 'HTML' ? t.ownerDocument.body : t),
                  xt = je(t.firstChild),
                  Zt = e,
                  ft = !0,
                  vl = null,
                  Ne = !0,
                  l = To(e, null, a, l),
                  e.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
          else {
            if ((Vl(), a === n)) {
              e = Ie(t, e, l);
              break t;
            }
            Kt(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Bu(t, e),
          t === null ?
            (l = Zd(e.type, null, e.pendingProps, null)) ?
              (e.memoizedState = l)
            : ft ||
              ((l = e.type),
              (t = e.pendingProps),
              (a = Pu(at.current).createElement(l)),
              (a[wt] = e),
              (a[te] = t),
              Jt(a, l, t),
              Gt(a),
              (e.stateNode = a))
          : (e.memoizedState = Zd(
              e.type,
              t.memoizedProps,
              e.pendingProps,
              t.memoizedState,
            )),
          null
        );
      case 27:
        return (
          Ka(e),
          t === null &&
            ft &&
            ((a = e.stateNode = Xd(e.type, e.pendingProps, at.current)),
            (Zt = e),
            (Ne = !0),
            (n = xt),
            Rl(e.type) ? ((Cf = n), (xt = je(a.firstChild))) : (xt = n)),
          Kt(t, e, e.pendingProps.children, l),
          Bu(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            ft &&
            ((n = a = xt) &&
              ((a = Zm(a, e.type, e.pendingProps, Ne)),
              a !== null ?
                ((e.stateNode = a),
                (Zt = e),
                (xt = je(a.firstChild)),
                (Ne = !1),
                (n = !0))
              : (n = !1)),
            n || yl(e)),
          Ka(e),
          (n = e.type),
          (u = e.pendingProps),
          (i = t !== null ? t.memoizedProps : null),
          (a = u.children),
          Tf(n, u) ? (a = null) : i !== null && Tf(n, i) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((n = Ec(t, e, um, null, null, l)), (Bn._currentValue = n)),
          Bu(t, e),
          Kt(t, e, a, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            ft &&
            ((t = l = xt) &&
              ((l = Vm(l, e.pendingProps, Ne)),
              l !== null ?
                ((e.stateNode = l), (Zt = e), (xt = null), (t = !0))
              : (t = !1)),
            t || yl(e)),
          null
        );
      case 13:
        return Rr(t, e, l);
      case 4:
        return (
          Wt(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = Fl(e, null, a, l)) : Kt(t, e, a, l),
          e.child
        );
      case 11:
        return Sr(t, e, e.type, e.pendingProps, l);
      case 7:
        return (Kt(t, e, e.pendingProps, l), e.child);
      case 8:
        return (Kt(t, e, e.pendingProps.children, l), e.child);
      case 12:
        return (Kt(t, e, e.pendingProps.children, l), e.child);
      case 10:
        return (
          (a = e.pendingProps),
          _l(e, e.type, a.value),
          Kt(t, e, a.children, l),
          e.child
        );
      case 9:
        return (
          (n = e.type._context),
          (a = e.pendingProps.children),
          Jl(e),
          (n = Vt(n)),
          (a = a(n)),
          (e.flags |= 1),
          Kt(t, e, a, l),
          e.child
        );
      case 14:
        return Er(t, e, e.type, e.pendingProps, l);
      case 15:
        return xr(t, e, e.type, e.pendingProps, l);
      case 19:
        return Mr(t, e, l);
      case 31:
        return hm(t, e, l);
      case 22:
        return Tr(t, e, l, e.pendingProps);
      case 24:
        return (
          Jl(e),
          (a = Vt(Ht)),
          t === null ?
            ((n = dc()),
            n === null &&
              ((n = bt),
              (u = oc()),
              (n.pooledCache = u),
              u.refCount++,
              u !== null && (n.pooledCacheLanes |= l),
              (n = u)),
            (e.memoizedState = { parent: a, cache: n }),
            mc(e),
            _l(e, Ht, n))
          : ((t.lanes & l) !== 0 && (vc(t, e), yn(e, null, null, l), vn()),
            (n = t.memoizedState),
            (u = e.memoizedState),
            n.parent !== a ?
              ((n = { parent: a, cache: a }),
              (e.memoizedState = n),
              e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n),
              _l(e, Ht, a))
            : ((a = u.cache),
              _l(e, Ht, a),
              a !== n.cache && sc(e, [Ht], l, !0))),
          Kt(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(f(156, e.tag));
  }
  function Pe(t) {
    t.flags |= 4;
  }
  function kc(t, e, l, a, n) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (n & 335544128) === n))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (id()) t.flags |= 8192;
        else throw ((kl = Su), hc);
    } else t.flags &= -16777217;
  }
  function Ur(t, e) {
    if (e.type !== 'stylesheet' || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Wd(e)))
      if (id()) t.flags |= 8192;
      else throw ((kl = Su), hc);
  }
  function Yu(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? ds() : 536870912), (t.lanes |= e), (Ua |= e)));
  }
  function En(t, e) {
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
  function Tt(t) {
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
  function vm(t, e, l) {
    var a = e.pendingProps;
    switch ((nc(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Tt(e), null);
      case 1:
        return (Tt(e), null);
      case 3:
        return (
          (l = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          We(Ht),
          Ot(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (Sa(e) ?
              Pe(e)
            : t === null ||
              (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
              ((e.flags |= 1024), ic())),
          Tt(e),
          null
        );
      case 26:
        var n = e.type,
          u = e.memoizedState;
        return (
          t === null ?
            (Pe(e),
            u !== null ? (Tt(e), Ur(e, u)) : (Tt(e), kc(e, n, null, a, l)))
          : u ?
            u !== t.memoizedState ?
              (Pe(e), Tt(e), Ur(e, u))
            : (Tt(e), (e.flags &= -16777217))
          : ((t = t.memoizedProps), t !== a && Pe(e), Tt(e), kc(e, n, t, a, l)),
          null
        );
      case 27:
        if (
          (Wn(e),
          (l = at.current),
          (n = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== a && Pe(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return (Tt(e), null);
          }
          ((t = X.current),
            Sa(e) ? ho(e) : ((t = Xd(n, a, l)), (e.stateNode = t), Pe(e)));
        }
        return (Tt(e), null);
      case 5:
        if ((Wn(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && Pe(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return (Tt(e), null);
          }
          if (((u = X.current), Sa(e))) ho(e);
          else {
            var i = Pu(at.current);
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
            ((u[wt] = e), (u[te] = a));
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
            t: switch ((Jt(u, n, a), n)) {
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
            a && Pe(e);
          }
        }
        return (
          Tt(e),
          kc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && Pe(e);
        else {
          if (typeof a != 'string' && e.stateNode === null) throw Error(f(166));
          if (((t = at.current), Sa(e))) {
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
            ((t[wt] = e),
              (t = !!(
                t.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Rd(t.nodeValue, l)
              )),
              t || yl(e, !0));
          } else
            ((t = Pu(t).createTextNode(a)), (t[wt] = e), (e.stateNode = t));
        }
        return (Tt(e), null);
      case 31:
        if (((l = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((a = Sa(e)), l !== null)) {
            if (t === null) {
              if (!a) throw Error(f(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(f(557));
              t[wt] = e;
            } else
              (Vl(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Tt(e), (t = !1));
          } else
            ((l = ic()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = l),
              (t = !0));
          if (!t) return e.flags & 256 ? (ve(e), e) : (ve(e), null);
          if ((e.flags & 128) !== 0) throw Error(f(558));
        }
        return (Tt(e), null);
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((n = Sa(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!n) throw Error(f(318));
              if (
                ((n = e.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(f(317));
              n[wt] = e;
            } else
              (Vl(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Tt(e), (n = !1));
          } else
            ((n = ic()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (n = !0));
          if (!n) return e.flags & 256 ? (ve(e), e) : (ve(e), null);
        }
        return (
          ve(e),
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
            Yu(e, e.updateQueue),
            Tt(e),
            null)
        );
      case 4:
        return (Ot(), t === null && pf(e.stateNode.containerInfo), Tt(e), null);
      case 10:
        return (We(e.type), Tt(e), null);
      case 19:
        if ((U(Mt), (a = e.memoizedState), a === null)) return (Tt(e), null);
        if (((n = (e.flags & 128) !== 0), (u = a.rendering), u === null))
          if (n) En(a, !1);
          else {
            if (Ct !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((u = zu(t)), u !== null)) {
                  for (
                    e.flags |= 128,
                      En(a, !1),
                      t = u.updateQueue,
                      e.updateQueue = t,
                      Yu(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;
                  )
                    (co(l, t), (l = l.sibling));
                  return (
                    B(Mt, (Mt.current & 1) | 2),
                    ft && Je(e, a.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            a.tail !== null &&
              se() > wu &&
              ((e.flags |= 128), (n = !0), En(a, !1), (e.lanes = 4194304));
          }
        else {
          if (!n)
            if (((t = zu(u)), t !== null)) {
              if (
                ((e.flags |= 128),
                (n = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Yu(e, t),
                En(a, !0),
                a.tail === null &&
                  a.tailMode === 'hidden' &&
                  !u.alternate &&
                  !ft)
              )
                return (Tt(e), null);
            } else
              2 * se() - a.renderingStartTime > wu &&
                l !== 536870912 &&
                ((e.flags |= 128), (n = !0), En(a, !1), (e.lanes = 4194304));
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
            (a.renderingStartTime = se()),
            (t.sibling = null),
            (l = Mt.current),
            B(Mt, n ? (l & 1) | 2 : l & 1),
            ft && Je(e, a.treeForkCount),
            t)
          : (Tt(e), null);
      case 22:
      case 23:
        return (
          ve(e),
          pc(),
          (a = e.memoizedState !== null),
          t !== null ?
            (t.memoizedState !== null) !== a && (e.flags |= 8192)
          : a && (e.flags |= 8192),
          a ?
            (l & 536870912) !== 0 &&
            (e.flags & 128) === 0 &&
            (Tt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : Tt(e),
          (l = e.updateQueue),
          l !== null && Yu(e, l.retryQueue),
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
          t !== null && U($l),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          We(Ht),
          Tt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function ym(t, e) {
    switch ((nc(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          We(Ht),
          Ot(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0 ?
            ((e.flags = (t & -65537) | 128), e)
          : null
        );
      case 26:
      case 27:
      case 5:
        return (Wn(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((ve(e), e.alternate === null)) throw Error(f(340));
          Vl();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (ve(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(f(340));
          Vl();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (U(Mt), null);
      case 4:
        return (Ot(), null);
      case 10:
        return (We(e.type), null);
      case 22:
      case 23:
        return (
          ve(e),
          pc(),
          t !== null && U($l),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (We(Ht), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Hr(t, e) {
    switch ((nc(e), e.tag)) {
      case 3:
        (We(Ht), Ot());
        break;
      case 26:
      case 27:
      case 5:
        Wn(e);
        break;
      case 4:
        Ot();
        break;
      case 31:
        e.memoizedState !== null && ve(e);
        break;
      case 13:
        ve(e);
        break;
      case 19:
        U(Mt);
        break;
      case 10:
        We(e.type);
        break;
      case 22:
      case 23:
        (ve(e), pc(), t !== null && U($l));
        break;
      case 24:
        We(Ht);
    }
  }
  function xn(t, e) {
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
  function xl(t, e, l) {
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
              var h = l,
                x = s;
              try {
                x();
              } catch (C) {
                mt(n, h, C);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (C) {
      mt(e, e.return, C);
    }
  }
  function Br(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        No(e, l);
      } catch (a) {
        mt(t, t.return, a);
      }
    }
  }
  function qr(t, e, l) {
    ((l.props = Pl(t.type, t.memoizedProps)), (l.state = t.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (a) {
      mt(t, e, a);
    }
  }
  function Tn(t, e) {
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
  function Ge(t, e) {
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
  function Yr(t) {
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
  function Fc(t, e, l) {
    try {
      var a = t.stateNode;
      (Ym(a, t.type, l, e), (a[te] = e));
    } catch (n) {
      mt(t, t.return, n);
    }
  }
  function Lr(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Rl(t.type)) ||
      t.tag === 4
    );
  }
  function Ic(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Lr(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && Rl(t.type)) ||
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
  function Pc(t, e, l) {
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
          l != null || e.onclick !== null || (e.onclick = Ze)));
    else if (
      a !== 4 &&
      (a === 27 && Rl(t.type) && ((l = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Pc(t, e, l), t = t.sibling; t !== null; )
        (Pc(t, e, l), (t = t.sibling));
  }
  function Lu(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      ((t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t));
    else if (
      a !== 4 &&
      (a === 27 && Rl(t.type) && (l = t.stateNode), (t = t.child), t !== null)
    )
      for (Lu(t, e, l), t = t.sibling; t !== null; )
        (Lu(t, e, l), (t = t.sibling));
  }
  function Gr(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      (Jt(e, a, l), (e[wt] = t), (e[te] = l));
    } catch (u) {
      mt(t, t.return, u);
    }
  }
  var tl = !1,
    Yt = !1,
    tf = !1,
    Xr = typeof WeakSet == 'function' ? WeakSet : Set,
    Xt = null;
  function _m(t, e) {
    if (((t = t.containerInfo), (Ef = ii), (t = Is(t)), Ji(t))) {
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
              h = -1,
              x = 0,
              C = 0,
              D = t,
              T = null;
            e: for (;;) {
              for (
                var N;
                D !== l || (n !== 0 && D.nodeType !== 3) || (s = i + n),
                  D !== u || (a !== 0 && D.nodeType !== 3) || (h = i + a),
                  D.nodeType === 3 && (i += D.nodeValue.length),
                  (N = D.firstChild) !== null;
              )
                ((T = D), (D = N));
              for (;;) {
                if (D === t) break e;
                if (
                  (T === l && ++x === n && (s = i),
                  T === u && ++C === a && (h = i),
                  (N = D.nextSibling) !== null)
                )
                  break;
                ((D = T), (T = D.parentNode));
              }
              D = N;
            }
            l = s === -1 || h === -1 ? null : { start: s, end: h };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      xf = { focusedElem: t, selectionRange: l }, ii = !1, Xt = e;
      Xt !== null;
    )
      if (
        ((e = Xt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        ((t.return = e), (Xt = t));
      else
        for (; Xt !== null; ) {
          switch (((e = Xt), (u = e.alternate), (t = e.flags), e.tag)) {
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
                  var Y = Pl(l.type, n);
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
                  Nf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Nf(t);
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
            ((t.return = e.return), (Xt = t));
            break;
          }
          Xt = e.return;
        }
  }
  function Qr(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (ll(t, l), a & 4 && xn(5, l));
        break;
      case 1:
        if ((ll(t, l), a & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (i) {
              mt(l, l.return, i);
            }
          else {
            var n = Pl(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              mt(l, l.return, i);
            }
          }
        (a & 64 && Br(l), a & 512 && Tn(l, l.return));
        break;
      case 3:
        if ((ll(t, l), a & 64 && ((t = l.updateQueue), t !== null))) {
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
            No(t, e);
          } catch (i) {
            mt(l, l.return, i);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Gr(l);
      case 26:
      case 5:
        (ll(t, l), e === null && a & 4 && Yr(l), a & 512 && Tn(l, l.return));
        break;
      case 12:
        ll(t, l);
        break;
      case 31:
        (ll(t, l), a & 4 && Vr(t, l));
        break;
      case 13:
        (ll(t, l),
          a & 4 && Kr(t, l),
          a & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = Nm.bind(null, l)), Km(t, l)))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || tl), !a)) {
          ((e = (e !== null && e.memoizedState !== null) || Yt), (n = tl));
          var u = Yt;
          ((tl = a),
            (Yt = e) && !u ? al(t, l, (l.subtreeFlags & 8772) !== 0) : ll(t, l),
            (tl = n),
            (Yt = u));
        }
        break;
      case 30:
        break;
      default:
        ll(t, l);
    }
  }
  function wr(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), wr(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Ri(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var zt = null,
    le = !1;
  function el(t, e, l) {
    for (l = l.child; l !== null; ) (Zr(t, e, l), (l = l.sibling));
  }
  function Zr(t, e, l) {
    if (oe && typeof oe.onCommitFiberUnmount == 'function')
      try {
        oe.onCommitFiberUnmount(Ja, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (Yt || Ge(l, e),
          el(t, e, l),
          l.memoizedState ?
            l.memoizedState.count--
          : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        Yt || Ge(l, e);
        var a = zt,
          n = le;
        (Rl(l.type) && ((zt = l.stateNode), (le = !1)),
          el(t, e, l),
          Dn(l.stateNode),
          (zt = a),
          (le = n));
        break;
      case 5:
        Yt || Ge(l, e);
      case 6:
        if (
          ((a = zt),
          (n = le),
          (zt = null),
          el(t, e, l),
          (zt = a),
          (le = n),
          zt !== null)
        )
          if (le)
            try {
              (zt.nodeType === 9 ? zt.body
              : zt.nodeName === 'HTML' ? zt.ownerDocument.body
              : zt
              ).removeChild(l.stateNode);
            } catch (u) {
              mt(l, e, u);
            }
          else
            try {
              zt.removeChild(l.stateNode);
            } catch (u) {
              mt(l, e, u);
            }
        break;
      case 18:
        zt !== null &&
          (le ?
            ((t = zt),
            Bd(
              t.nodeType === 9 ? t.body
              : t.nodeName === 'HTML' ? t.ownerDocument.body
              : t,
              l.stateNode,
            ),
            Qa(t))
          : Bd(zt, l.stateNode));
        break;
      case 4:
        ((a = zt),
          (n = le),
          (zt = l.stateNode.containerInfo),
          (le = !0),
          el(t, e, l),
          (zt = a),
          (le = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (xl(2, l, e), Yt || xl(4, l, e), el(t, e, l));
        break;
      case 1:
        (Yt ||
          (Ge(l, e),
          (a = l.stateNode),
          typeof a.componentWillUnmount == 'function' && qr(l, e, a)),
          el(t, e, l));
        break;
      case 21:
        el(t, e, l);
        break;
      case 22:
        ((Yt = (a = Yt) || l.memoizedState !== null), el(t, e, l), (Yt = a));
        break;
      default:
        el(t, e, l);
    }
  }
  function Vr(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        Qa(t);
      } catch (l) {
        mt(e, e.return, l);
      }
    }
  }
  function Kr(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Qa(t);
      } catch (l) {
        mt(e, e.return, l);
      }
  }
  function gm(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new Xr()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Xr()),
          e
        );
      default:
        throw Error(f(435, t.tag));
    }
  }
  function Gu(t, e) {
    var l = gm(t);
    e.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var n = Am.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function ae(t, e) {
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
              if (Rl(s.type)) {
                ((zt = s.stateNode), (le = !1));
                break t;
              }
              break;
            case 5:
              ((zt = s.stateNode), (le = !1));
              break t;
            case 3:
            case 4:
              ((zt = s.stateNode.containerInfo), (le = !0));
              break t;
          }
          s = s.return;
        }
        if (zt === null) throw Error(f(160));
        (Zr(u, i, n),
          (zt = null),
          (le = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) (Jr(e, t), (e = e.sibling));
  }
  var Ue = null;
  function Jr(t, e) {
    var l = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ae(e, t),
          ne(t),
          a & 4 && (xl(3, t, t.return), xn(3, t), xl(5, t, t.return)));
        break;
      case 1:
        (ae(e, t),
          ne(t),
          a & 512 && (Yt || l === null || Ge(l, l.return)),
          a & 64 &&
            tl &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? a : l.concat(a))))));
        break;
      case 26:
        var n = Ue;
        if (
          (ae(e, t),
          ne(t),
          a & 512 && (Yt || l === null || Ge(l, l.return)),
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
                          u[ka] ||
                          u[wt] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector('head > title'),
                          )),
                        Jt(u, a, l),
                        (u[wt] = t),
                        Gt(u),
                        (a = u));
                      break t;
                    case 'link':
                      var i = Jd('link', 'href', n).get(a + (l.href || ''));
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
                        Jt(u, a, l),
                        n.head.appendChild(u));
                      break;
                    case 'meta':
                      if (
                        (i = Jd('meta', 'content', n).get(
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
                        Jt(u, a, l),
                        n.head.appendChild(u));
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  ((u[wt] = t), Gt(u), (a = u));
                }
                t.stateNode = a;
              } else $d(n, t.type, t.stateNode);
            else t.stateNode = Kd(n, a, t.memoizedProps);
          else
            u !== a ?
              (u === null ?
                l.stateNode !== null &&
                ((l = l.stateNode), l.parentNode.removeChild(l))
              : u.count--,
              a === null ?
                $d(n, t.type, t.stateNode)
              : Kd(n, a, t.memoizedProps))
            : a === null &&
              t.stateNode !== null &&
              Fc(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (ae(e, t),
          ne(t),
          a & 512 && (Yt || l === null || Ge(l, l.return)),
          l !== null && a & 4 && Fc(t, t.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (ae(e, t),
          ne(t),
          a & 512 && (Yt || l === null || Ge(l, l.return)),
          t.flags & 32)
        ) {
          n = t.stateNode;
          try {
            ra(n, '');
          } catch (Y) {
            mt(t, t.return, Y);
          }
        }
        (a & 4 &&
          t.stateNode != null &&
          ((n = t.memoizedProps), Fc(t, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (tf = !0));
        break;
      case 6:
        if ((ae(e, t), ne(t), a & 4)) {
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
          ((li = null),
          (n = Ue),
          (Ue = ti(e.containerInfo)),
          ae(e, t),
          (Ue = n),
          ne(t),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Qa(e.containerInfo);
          } catch (Y) {
            mt(t, t.return, Y);
          }
        tf && ((tf = !1), $r(t));
        break;
      case 4:
        ((a = Ue),
          (Ue = ti(t.stateNode.containerInfo)),
          ae(e, t),
          ne(t),
          (Ue = a));
        break;
      case 12:
        (ae(e, t), ne(t));
        break;
      case 31:
        (ae(e, t),
          ne(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Gu(t, a))));
        break;
      case 13:
        (ae(e, t),
          ne(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Qu = se()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Gu(t, a))));
        break;
      case 22:
        n = t.memoizedState !== null;
        var h = l !== null && l.memoizedState !== null,
          x = tl,
          C = Yt;
        if (
          ((tl = x || n),
          (Yt = C || h),
          ae(e, t),
          (Yt = C),
          (tl = x),
          ne(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = n ? e._visibility & -2 : e._visibility | 1,
              n && (l === null || h || tl || Yt || ta(t)),
              l = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                h = l = e;
                try {
                  if (((u = h.stateNode), n))
                    ((i = u.style),
                      typeof i.setProperty == 'function' ?
                        i.setProperty('display', 'none', 'important')
                      : (i.display = 'none'));
                  else {
                    s = h.stateNode;
                    var D = h.memoizedProps.style,
                      T =
                        D != null && D.hasOwnProperty('display') ?
                          D.display
                        : null;
                    s.style.display =
                      T == null || typeof T == 'boolean' ? '' : ('' + T).trim();
                  }
                } catch (Y) {
                  mt(h, h.return, Y);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                h = e;
                try {
                  h.stateNode.nodeValue = n ? '' : h.memoizedProps;
                } catch (Y) {
                  mt(h, h.return, Y);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                h = e;
                try {
                  var N = h.stateNode;
                  n ? qd(N, !0) : qd(h.stateNode, !1);
                } catch (Y) {
                  mt(h, h.return, Y);
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
            l !== null && ((a.retryQueue = null), Gu(t, l))));
        break;
      case 19:
        (ae(e, t),
          ne(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Gu(t, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ae(e, t), ne(t));
    }
  }
  function ne(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (Lr(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              u = Ic(t);
            Lu(t, u, n);
            break;
          case 5:
            var i = l.stateNode;
            l.flags & 32 && (ra(i, ''), (l.flags &= -33));
            var s = Ic(t);
            Lu(t, s, i);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo,
              x = Ic(t);
            Pc(t, x, h);
            break;
          default:
            throw Error(f(161));
        }
      } catch (C) {
        mt(t, t.return, C);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function $r(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        ($r(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function ll(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (Qr(t, e.alternate, e), (e = e.sibling));
  }
  function ta(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (xl(4, e, e.return), ta(e));
          break;
        case 1:
          Ge(e, e.return);
          var l = e.stateNode;
          (typeof l.componentWillUnmount == 'function' && qr(e, e.return, l),
            ta(e));
          break;
        case 27:
          Dn(e.stateNode);
        case 26:
        case 5:
          (Ge(e, e.return), ta(e));
          break;
        case 22:
          e.memoizedState === null && ta(e);
          break;
        case 30:
          ta(e);
          break;
        default:
          ta(e);
      }
      t = t.sibling;
    }
  }
  function al(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        n = t,
        u = e,
        i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (al(n, u, l), xn(4, u));
          break;
        case 1:
          if (
            (al(n, u, l),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == 'function')
          )
            try {
              n.componentDidMount();
            } catch (x) {
              mt(a, a.return, x);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var s = a.stateNode;
            try {
              var h = n.shared.hiddenCallbacks;
              if (h !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < h.length; n++)
                  zo(h[n], s);
            } catch (x) {
              mt(a, a.return, x);
            }
          }
          (l && i & 64 && Br(u), Tn(u, u.return));
          break;
        case 27:
          Gr(u);
        case 26:
        case 5:
          (al(n, u, l), l && a === null && i & 4 && Yr(u), Tn(u, u.return));
          break;
        case 12:
          al(n, u, l);
          break;
        case 31:
          (al(n, u, l), l && i & 4 && Vr(n, u));
          break;
        case 13:
          (al(n, u, l), l && i & 4 && Kr(n, u));
          break;
        case 22:
          (u.memoizedState === null && al(n, u, l), Tn(u, u.return));
          break;
        case 30:
          break;
        default:
          al(n, u, l);
      }
      e = e.sibling;
    }
  }
  function ef(t, e) {
    var l = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && on(l)));
  }
  function lf(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && on(t)));
  }
  function He(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Wr(t, e, l, a), (e = e.sibling));
  }
  function Wr(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (He(t, e, l, a), n & 2048 && xn(9, e));
        break;
      case 1:
        He(t, e, l, a);
        break;
      case 3:
        (He(t, e, l, a),
          n & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && on(t))));
        break;
      case 12:
        if (n & 2048) {
          (He(t, e, l, a), (t = e.stateNode));
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
          } catch (h) {
            mt(e, e.return, h);
          }
        } else He(t, e, l, a);
        break;
      case 31:
        He(t, e, l, a);
        break;
      case 13:
        He(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        ((u = e.stateNode),
          (i = e.alternate),
          e.memoizedState !== null ?
            u._visibility & 2 ?
              He(t, e, l, a)
            : zn(t, e)
          : u._visibility & 2 ? He(t, e, l, a)
          : ((u._visibility |= 2),
            Oa(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && ef(i, e));
        break;
      case 24:
        (He(t, e, l, a), n & 2048 && lf(e.alternate, e));
        break;
      default:
        He(t, e, l, a);
    }
  }
  function Oa(t, e, l, a, n) {
    for (
      n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;
    ) {
      var u = t,
        i = e,
        s = l,
        h = a,
        x = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (Oa(u, i, s, h, n), xn(8, i));
          break;
        case 23:
          break;
        case 22:
          var C = i.stateNode;
          (i.memoizedState !== null ?
            C._visibility & 2 ?
              Oa(u, i, s, h, n)
            : zn(u, i)
          : ((C._visibility |= 2), Oa(u, i, s, h, n)),
            n && x & 2048 && ef(i.alternate, i));
          break;
        case 24:
          (Oa(u, i, s, h, n), n && x & 2048 && lf(i.alternate, i));
          break;
        default:
          Oa(u, i, s, h, n);
      }
      e = e.sibling;
    }
  }
  function zn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          a = e,
          n = a.flags;
        switch (a.tag) {
          case 22:
            (zn(l, a), n & 2048 && ef(a.alternate, a));
            break;
          case 24:
            (zn(l, a), n & 2048 && lf(a.alternate, a));
            break;
          default:
            zn(l, a);
        }
        e = e.sibling;
      }
  }
  var Nn = 8192;
  function Ma(t, e, l) {
    if (t.subtreeFlags & Nn)
      for (t = t.child; t !== null; ) (kr(t, e, l), (t = t.sibling));
  }
  function kr(t, e, l) {
    switch (t.tag) {
      case 26:
        (Ma(t, e, l),
          t.flags & Nn &&
            t.memoizedState !== null &&
            nv(l, Ue, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        Ma(t, e, l);
        break;
      case 3:
      case 4:
        var a = Ue;
        ((Ue = ti(t.stateNode.containerInfo)), Ma(t, e, l), (Ue = a));
        break;
      case 22:
        t.memoizedState === null &&
          ((a = t.alternate),
          a !== null && a.memoizedState !== null ?
            ((a = Nn), (Nn = 16777216), Ma(t, e, l), (Nn = a))
          : Ma(t, e, l));
        break;
      default:
        Ma(t, e, l);
    }
  }
  function Fr(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function An(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          ((Xt = a), Pr(a, t));
        }
      Fr(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Ir(t), (t = t.sibling));
  }
  function Ir(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (An(t), t.flags & 2048 && xl(9, t, t.return));
        break;
      case 3:
        An(t);
        break;
      case 12:
        An(t);
        break;
      case 22:
        var e = t.stateNode;
        (
          t.memoizedState !== null &&
          e._visibility & 2 &&
          (t.return === null || t.return.tag !== 13)
        ) ?
          ((e._visibility &= -3), Xu(t))
        : An(t);
        break;
      default:
        An(t);
    }
  }
  function Xu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          ((Xt = a), Pr(a, t));
        }
      Fr(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (xl(8, e, e.return), Xu(e));
          break;
        case 22:
          ((l = e.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Xu(e)));
          break;
        default:
          Xu(e);
      }
      t = t.sibling;
    }
  }
  function Pr(t, e) {
    for (; Xt !== null; ) {
      var l = Xt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          xl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          on(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) ((a.return = l), (Xt = a));
      else
        t: for (l = t; Xt !== null; ) {
          a = Xt;
          var n = a.sibling,
            u = a.return;
          if ((wr(a), a === l)) {
            Xt = null;
            break t;
          }
          if (n !== null) {
            ((n.return = u), (Xt = n));
            break t;
          }
          Xt = u;
        }
    }
  }
  var pm = {
      getCacheForType: function (t) {
        var e = Vt(Ht),
          l = e.data.get(t);
        return (l === void 0 && ((l = t()), e.data.set(t, l)), l);
      },
      cacheSignal: function () {
        return Vt(Ht).controller.signal;
      },
    },
    bm = typeof WeakMap == 'function' ? WeakMap : Map,
    rt = 0,
    bt = null,
    nt = null,
    it = 0,
    ht = 0,
    ye = null,
    Tl = !1,
    Da = !1,
    af = !1,
    nl = 0,
    Ct = 0,
    zl = 0,
    ea = 0,
    nf = 0,
    _e = 0,
    Ua = 0,
    jn = null,
    ue = null,
    uf = !1,
    Qu = 0,
    td = 0,
    wu = 1 / 0,
    Zu = null,
    Nl = null,
    Lt = 0,
    Al = null,
    Ha = null,
    ul = 0,
    cf = 0,
    ff = null,
    ed = null,
    Cn = 0,
    sf = null;
  function ge() {
    return (
      (rt & 2) !== 0 && it !== 0 ? it & -it
      : R.T !== null ? vf()
      : ys()
    );
  }
  function ld() {
    if (_e === 0)
      if ((it & 536870912) === 0 || ft) {
        var t = In;
        ((In <<= 1), (In & 3932160) === 0 && (In = 262144), (_e = t));
      } else _e = 536870912;
    return ((t = me.current), t !== null && (t.flags |= 32), _e);
  }
  function ie(t, e, l) {
    (((t === bt && (ht === 2 || ht === 9)) || t.cancelPendingCommit !== null) &&
      (Ba(t, 0), jl(t, it, _e, !1)),
      Wa(t, l),
      ((rt & 2) === 0 || t !== bt) &&
        (t === bt &&
          ((rt & 2) === 0 && (ea |= l), Ct === 4 && jl(t, it, _e, !1)),
        Xe(t)));
  }
  function ad(t, e, l) {
    if ((rt & 6) !== 0) throw Error(f(327));
    var a = (!l && (e & 127) === 0 && (e & t.expiredLanes) === 0) || $a(t, e),
      n = a ? xm(t, e) : rf(t, e, !0),
      u = a;
    do {
      if (n === 0) {
        Da && !a && jl(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), u && !Sm(l))) {
          ((n = rf(t, e, !1)), (u = !1));
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
              n = jn;
              var h = s.current.memoizedState.isDehydrated;
              if ((h && (Ba(s, i).flags |= 256), (i = rf(s, i, !1)), i !== 2)) {
                if (af && !h) {
                  ((s.errorRecoveryDisabledLanes |= u), (ea |= u), (n = 4));
                  break t;
                }
                ((u = ue),
                  (ue = n),
                  u !== null &&
                    (ue === null ? (ue = u) : ue.push.apply(ue, u)));
              }
              n = i;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          (Ba(t, 0), jl(t, e, 0, !0));
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
              jl(a, e, _e, !Tl);
              break t;
            case 2:
              ue = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && ((n = Qu + 300 - se()), 10 < n)) {
            if ((jl(a, e, _e, !Tl), tu(a, 0, !0) !== 0)) break t;
            ((ul = e),
              (a.timeoutHandle = Ud(
                nd.bind(
                  null,
                  a,
                  l,
                  ue,
                  Zu,
                  uf,
                  e,
                  _e,
                  ea,
                  Ua,
                  Tl,
                  u,
                  'Throttled',
                  -0,
                  0,
                ),
                n,
              )));
            break t;
          }
          nd(a, l, ue, Zu, uf, e, _e, ea, Ua, Tl, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Xe(t);
  }
  function nd(t, e, l, a, n, u, i, s, h, x, C, D, T, N) {
    if (
      ((t.timeoutHandle = -1),
      (D = e.subtreeFlags),
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
        unsuspend: Ze,
      }),
        kr(e, u, D));
      var Y =
        (u & 62914560) === u ? Qu - se()
        : (u & 4194048) === u ? td - se()
        : 0;
      if (((Y = uv(D, Y)), Y !== null)) {
        ((ul = u),
          (t.cancelPendingCommit = Y(
            dd.bind(null, t, e, u, l, a, n, i, s, h, C, D, null, T, N),
          )),
          jl(t, u, i, !x));
        return;
      }
    }
    dd(t, e, u, l, a, n, i, s, h);
  }
  function Sm(t) {
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
            if (!de(u(), n)) return !1;
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
  function jl(t, e, l, a) {
    ((e &= ~nf),
      (e &= ~ea),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes));
    for (var n = e; 0 < n; ) {
      var u = 31 - re(n),
        i = 1 << u;
      ((a[u] = -1), (n &= ~i));
    }
    l !== 0 && hs(t, l, e);
  }
  function Vu() {
    return (rt & 6) === 0 ? (Rn(0), !1) : !0;
  }
  function of() {
    if (nt !== null) {
      if (ht === 0) var t = nt.return;
      else ((t = nt), ($e = Kl = null), zc(t), (Na = null), (dn = 0), (t = nt));
      for (; t !== null; ) (Hr(t.alternate, t), (t = t.return));
      nt = null;
    }
  }
  function Ba(t, e) {
    var l = t.timeoutHandle;
    (l !== -1 && ((t.timeoutHandle = -1), Xm(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      (ul = 0),
      of(),
      (bt = t),
      (nt = l = Ke(t.current, null)),
      (it = e),
      (ht = 0),
      (ye = null),
      (Tl = !1),
      (Da = $a(t, e)),
      (af = !1),
      (Ua = _e = nf = ea = zl = Ct = 0),
      (ue = jn = null),
      (uf = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - re(a),
          u = 1 << n;
        ((e |= t[n]), (a &= ~u));
      }
    return ((nl = e), du(), l);
  }
  function ud(t, e) {
    ((et = null),
      (R.H = bn),
      e === za || e === bu ? ((e = So()), (ht = 3))
      : e === hc ? ((e = So()), (ht = 4))
      : (ht =
          e === Xc ? 8
          : e !== null && typeof e == 'object' && typeof e.then == 'function' ?
            6
          : 1),
      (ye = e),
      nt === null && ((Ct = 1), Uu(t, xe(e, t.current))));
  }
  function id() {
    var t = me.current;
    return (
      t === null ? !0
      : (it & 4194048) === it ? Ae === null
      : (it & 62914560) === it || (it & 536870912) !== 0 ? t === Ae
      : !1
    );
  }
  function cd() {
    var t = R.H;
    return ((R.H = bn), t === null ? bn : t);
  }
  function fd() {
    var t = R.A;
    return ((R.A = pm), t);
  }
  function Ku() {
    ((Ct = 4),
      Tl || ((it & 4194048) !== it && me.current !== null) || (Da = !0),
      ((zl & 134217727) === 0 && (ea & 134217727) === 0) ||
        bt === null ||
        jl(bt, it, _e, !1));
  }
  function rf(t, e, l) {
    var a = rt;
    rt |= 2;
    var n = cd(),
      u = fd();
    ((bt !== t || it !== e) && ((Zu = null), Ba(t, e)), (e = !1));
    var i = Ct;
    t: do
      try {
        if (ht !== 0 && nt !== null) {
          var s = nt,
            h = ye;
          switch (ht) {
            case 8:
              (of(), (i = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              me.current === null && (e = !0);
              var x = ht;
              if (((ht = 0), (ye = null), qa(t, s, h, x), l && Da)) {
                i = 0;
                break t;
              }
              break;
            default:
              ((x = ht), (ht = 0), (ye = null), qa(t, s, h, x));
          }
        }
        (Em(), (i = Ct));
        break;
      } catch (C) {
        ud(t, C);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      ($e = Kl = null),
      (rt = a),
      (R.H = n),
      (R.A = u),
      nt === null && ((bt = null), (it = 0), du()),
      i
    );
  }
  function Em() {
    for (; nt !== null; ) sd(nt);
  }
  function xm(t, e) {
    var l = rt;
    rt |= 2;
    var a = cd(),
      n = fd();
    bt !== t || it !== e ?
      ((Zu = null), (wu = se() + 500), Ba(t, e))
    : (Da = $a(t, e));
    t: do
      try {
        if (ht !== 0 && nt !== null) {
          e = nt;
          var u = ye;
          e: switch (ht) {
            case 1:
              ((ht = 0), (ye = null), qa(t, e, u, 1));
              break;
            case 2:
            case 9:
              if (po(u)) {
                ((ht = 0), (ye = null), od(e));
                break;
              }
              ((e = function () {
                ((ht !== 2 && ht !== 9) || bt !== t || (ht = 7), Xe(t));
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
              po(u) ?
                ((ht = 0), (ye = null), od(e))
              : ((ht = 0), (ye = null), qa(t, e, u, 7));
              break;
            case 5:
              var i = null;
              switch (nt.tag) {
                case 26:
                  i = nt.memoizedState;
                case 5:
                case 27:
                  var s = nt;
                  if (i ? Wd(i) : s.stateNode.complete) {
                    ((ht = 0), (ye = null));
                    var h = s.sibling;
                    if (h !== null) nt = h;
                    else {
                      var x = s.return;
                      x !== null ? ((nt = x), Ju(x)) : (nt = null);
                    }
                    break e;
                  }
              }
              ((ht = 0), (ye = null), qa(t, e, u, 5));
              break;
            case 6:
              ((ht = 0), (ye = null), qa(t, e, u, 6));
              break;
            case 8:
              (of(), (Ct = 6));
              break t;
            default:
              throw Error(f(462));
          }
        }
        Tm();
        break;
      } catch (C) {
        ud(t, C);
      }
    while (!0);
    return (
      ($e = Kl = null),
      (R.H = a),
      (R.A = n),
      (rt = l),
      nt !== null ? 0 : ((bt = null), (it = 0), du(), Ct)
    );
  }
  function Tm() {
    for (; nt !== null && !Jh(); ) sd(nt);
  }
  function sd(t) {
    var e = Dr(t.alternate, t, nl);
    ((t.memoizedProps = t.pendingProps), e === null ? Ju(t) : (nt = e));
  }
  function od(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Ar(l, e, e.pendingProps, e.type, void 0, it);
        break;
      case 11:
        e = Ar(l, e, e.pendingProps, e.type.render, e.ref, it);
        break;
      case 5:
        zc(e);
      default:
        (Hr(l, e), (e = nt = co(e, nl)), (e = Dr(l, e, nl)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Ju(t) : (nt = e));
  }
  function qa(t, e, l, a) {
    (($e = Kl = null), zc(e), (Na = null), (dn = 0));
    var n = e.return;
    try {
      if (dm(t, n, e, l, it)) {
        ((Ct = 1), Uu(t, xe(l, t.current)), (nt = null));
        return;
      }
    } catch (u) {
      if (n !== null) throw ((nt = n), u);
      ((Ct = 1), Uu(t, xe(l, t.current)), (nt = null));
      return;
    }
    e.flags & 32768 ?
      (ft || a === 1 ? (t = !0)
      : Da || (it & 536870912) !== 0 ? (t = !1)
      : ((Tl = t = !0),
        (a === 2 || a === 9 || a === 3 || a === 6) &&
          ((a = me.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
      rd(e, t))
    : Ju(e);
  }
  function Ju(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        rd(e, Tl);
        return;
      }
      t = e.return;
      var l = vm(e.alternate, e, nl);
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
    Ct === 0 && (Ct = 5);
  }
  function rd(t, e) {
    do {
      var l = ym(t.alternate, t);
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
    ((Ct = 6), (nt = null));
  }
  function dd(t, e, l, a, n, u, i, s, h) {
    t.cancelPendingCommit = null;
    do $u();
    while (Lt !== 0);
    if ((rt & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      if (
        ((u = e.lanes | e.childLanes),
        (u |= Ii),
        a0(t, l, u, i, s, h),
        t === bt && ((nt = bt = null), (it = 0)),
        (Ha = e),
        (Al = t),
        (ul = l),
        (cf = u),
        (ff = n),
        (ed = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ?
          ((t.callbackNode = null),
          (t.callbackPriority = 0),
          jm(kn, function () {
            return (_d(), null);
          }))
        : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = R.T), (R.T = null), (n = H.p), (H.p = 2), (i = rt), (rt |= 4));
        try {
          _m(t, e, l);
        } finally {
          ((rt = i), (H.p = n), (R.T = a));
        }
      }
      ((Lt = 1), hd(), md(), vd());
    }
  }
  function hd() {
    if (Lt === 1) {
      Lt = 0;
      var t = Al,
        e = Ha,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        ((l = R.T), (R.T = null));
        var a = H.p;
        H.p = 2;
        var n = rt;
        rt |= 4;
        try {
          Jr(e, t);
          var u = xf,
            i = Is(t.containerInfo),
            s = u.focusedElem,
            h = u.selectionRange;
          if (
            i !== s &&
            s &&
            s.ownerDocument &&
            Fs(s.ownerDocument.documentElement, s)
          ) {
            if (h !== null && Ji(s)) {
              var x = h.start,
                C = h.end;
              if ((C === void 0 && (C = x), 'selectionStart' in s))
                ((s.selectionStart = x),
                  (s.selectionEnd = Math.min(C, s.value.length)));
              else {
                var D = s.ownerDocument || document,
                  T = (D && D.defaultView) || window;
                if (T.getSelection) {
                  var N = T.getSelection(),
                    Y = s.textContent.length,
                    $ = Math.min(h.start, Y),
                    gt = h.end === void 0 ? $ : Math.min(h.end, Y);
                  !N.extend && $ > gt && ((i = gt), (gt = $), ($ = i));
                  var p = ks(s, $),
                    y = ks(s, gt);
                  if (
                    p &&
                    y &&
                    (N.rangeCount !== 1 ||
                      N.anchorNode !== p.node ||
                      N.anchorOffset !== p.offset ||
                      N.focusNode !== y.node ||
                      N.focusOffset !== y.offset)
                  ) {
                    var E = D.createRange();
                    (E.setStart(p.node, p.offset),
                      N.removeAllRanges(),
                      $ > gt ?
                        (N.addRange(E), N.extend(y.node, y.offset))
                      : (E.setEnd(y.node, y.offset), N.addRange(E)));
                  }
                }
              }
            }
            for (D = [], N = s; (N = N.parentNode); )
              N.nodeType === 1 &&
                D.push({ element: N, left: N.scrollLeft, top: N.scrollTop });
            for (
              typeof s.focus == 'function' && s.focus(), s = 0;
              s < D.length;
              s++
            ) {
              var M = D[s];
              ((M.element.scrollLeft = M.left), (M.element.scrollTop = M.top));
            }
          }
          ((ii = !!Ef), (xf = Ef = null));
        } finally {
          ((rt = n), (H.p = a), (R.T = l));
        }
      }
      ((t.current = e), (Lt = 2));
    }
  }
  function md() {
    if (Lt === 2) {
      Lt = 0;
      var t = Al,
        e = Ha,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        ((l = R.T), (R.T = null));
        var a = H.p;
        H.p = 2;
        var n = rt;
        rt |= 4;
        try {
          Qr(t, e.alternate, e);
        } finally {
          ((rt = n), (H.p = a), (R.T = l));
        }
      }
      Lt = 3;
    }
  }
  function vd() {
    if (Lt === 4 || Lt === 3) {
      ((Lt = 0), $h());
      var t = Al,
        e = Ha,
        l = ul,
        a = ed;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ?
        (Lt = 5)
      : ((Lt = 0), (Ha = Al = null), yd(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (
        (n === 0 && (Nl = null),
        ji(l),
        (e = e.stateNode),
        oe && typeof oe.onCommitFiberRoot == 'function')
      )
        try {
          oe.onCommitFiberRoot(Ja, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((e = R.T), (n = H.p), (H.p = 2), (R.T = null));
        try {
          for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
            var s = a[i];
            u(s.value, { componentStack: s.stack });
          }
        } finally {
          ((R.T = e), (H.p = n));
        }
      }
      ((ul & 3) !== 0 && $u(),
        Xe(t),
        (n = t.pendingLanes),
        (l & 261930) !== 0 && (n & 42) !== 0 ?
          t === sf ?
            Cn++
          : ((Cn = 0), (sf = t))
        : (Cn = 0),
        Rn(0));
    }
  }
  function yd(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), on(e)));
  }
  function $u() {
    return (hd(), md(), vd(), _d());
  }
  function _d() {
    if (Lt !== 5) return !1;
    var t = Al,
      e = cf;
    cf = 0;
    var l = ji(ul),
      a = R.T,
      n = H.p;
    try {
      ((H.p = 32 > l ? 32 : l), (R.T = null), (l = ff), (ff = null));
      var u = Al,
        i = ul;
      if (((Lt = 0), (Ha = Al = null), (ul = 0), (rt & 6) !== 0))
        throw Error(f(331));
      var s = rt;
      if (
        ((rt |= 4),
        Ir(u.current),
        Wr(u, u.current, i, l),
        (rt = s),
        Rn(0, !1),
        oe && typeof oe.onPostCommitFiberRoot == 'function')
      )
        try {
          oe.onPostCommitFiberRoot(Ja, u);
        } catch {}
      return !0;
    } finally {
      ((H.p = n), (R.T = a), yd(t, e));
    }
  }
  function gd(t, e, l) {
    ((e = xe(l, e)),
      (e = Gc(t.stateNode, e, 2)),
      (t = bl(t, e, 2)),
      t !== null && (Wa(t, 2), Xe(t)));
  }
  function mt(t, e, l) {
    if (t.tag === 3) gd(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          gd(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' &&
              (Nl === null || !Nl.has(a)))
          ) {
            ((t = xe(l, t)),
              (l = pr(2)),
              (a = bl(e, l, 2)),
              a !== null && (br(l, a, e, t), Wa(a, 2), Xe(a)));
            break;
          }
        }
        e = e.return;
      }
  }
  function df(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new bm();
      var n = new Set();
      a.set(e, n);
    } else ((n = a.get(e)), n === void 0 && ((n = new Set()), a.set(e, n)));
    n.has(l) ||
      ((af = !0), n.add(l), (t = zm.bind(null, t, e, l)), e.then(t, t));
  }
  function zm(t, e, l) {
    var a = t.pingCache;
    (a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      bt === t &&
        (it & l) === l &&
        (Ct === 4 || (Ct === 3 && (it & 62914560) === it && 300 > se() - Qu) ?
          (rt & 2) === 0 && Ba(t, 0)
        : (nf |= l),
        Ua === it && (Ua = 0)),
      Xe(t));
  }
  function pd(t, e) {
    (e === 0 && (e = ds()), (t = wl(t, e)), t !== null && (Wa(t, e), Xe(t)));
  }
  function Nm(t) {
    var e = t.memoizedState,
      l = 0;
    (e !== null && (l = e.retryLane), pd(t, l));
  }
  function Am(t, e) {
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
    (a !== null && a.delete(e), pd(t, l));
  }
  function jm(t, e) {
    return Ti(t, e);
  }
  var Wu = null,
    Ya = null,
    hf = !1,
    ku = !1,
    mf = !1,
    Cl = 0;
  function Xe(t) {
    (t !== Ya &&
      t.next === null &&
      (Ya === null ? (Wu = Ya = t) : (Ya = Ya.next = t)),
      (ku = !0),
      hf || ((hf = !0), Rm()));
  }
  function Rn(t, e) {
    if (!mf && ku) {
      mf = !0;
      do
        for (var l = !1, a = Wu; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes,
                s = a.pingedLanes;
              ((u = (1 << (31 - re(42 | t) + 1)) - 1),
                (u &= n & ~(i & ~s)),
                (u =
                  u & 201326741 ? (u & 201326741) | 1
                  : u ? u | 2
                  : 0));
            }
            u !== 0 && ((l = !0), xd(a, u));
          } else
            ((u = it),
              (u = tu(
                a,
                a === bt ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || $a(a, u) || ((l = !0), xd(a, u)));
          a = a.next;
        }
      while (l);
      mf = !1;
    }
  }
  function Cm() {
    bd();
  }
  function bd() {
    ku = hf = !1;
    var t = 0;
    Cl !== 0 && Gm() && (t = Cl);
    for (var e = se(), l = null, a = Wu; a !== null; ) {
      var n = a.next,
        u = Sd(a, e);
      (u === 0 ?
        ((a.next = null),
        l === null ? (Wu = n) : (l.next = n),
        n === null && (Ya = l))
      : ((l = a), (t !== 0 || (u & 3) !== 0) && (ku = !0)),
        (a = n));
    }
    ((Lt !== 0 && Lt !== 5) || Rn(t), Cl !== 0 && (Cl = 0));
  }
  function Sd(t, e) {
    for (
      var l = t.suspendedLanes,
        a = t.pingedLanes,
        n = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;
    ) {
      var i = 31 - re(u),
        s = 1 << i,
        h = n[i];
      (h === -1 ?
        ((s & l) === 0 || (s & a) !== 0) && (n[i] = l0(s, e))
      : h <= e && (t.expiredLanes |= s),
        (u &= ~s));
    }
    if (
      ((e = bt),
      (l = it),
      (l = tu(
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
        a !== null && a !== null && zi(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || $a(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((a !== null && zi(a), ji(l))) {
        case 2:
        case 8:
          l = os;
          break;
        case 32:
          l = kn;
          break;
        case 268435456:
          l = rs;
          break;
        default:
          l = kn;
      }
      return (
        (a = Ed.bind(null, t)),
        (l = Ti(l, a)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      a !== null && a !== null && zi(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Ed(t, e) {
    if (Lt !== 0 && Lt !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var l = t.callbackNode;
    if ($u() && t.callbackNode !== l) return null;
    var a = it;
    return (
      (a = tu(
        t,
        t === bt ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      a === 0 ? null : (
        (ad(t, a, e),
        Sd(t, se()),
        t.callbackNode != null && t.callbackNode === l ?
          Ed.bind(null, t)
        : null)
      )
    );
  }
  function xd(t, e) {
    if ($u()) return null;
    ad(t, e, !0);
  }
  function Rm() {
    Qm(function () {
      (rt & 6) !== 0 ? Ti(ss, Cm) : bd();
    });
  }
  function vf() {
    if (Cl === 0) {
      var t = xa;
      (t === 0 && ((t = Fn), (Fn <<= 1), (Fn & 261888) === 0 && (Fn = 256)),
        (Cl = t));
    }
    return Cl;
  }
  function Td(t) {
    return (
      t == null || typeof t == 'symbol' || typeof t == 'boolean' ? null
      : typeof t == 'function' ? t
      : nu('' + t)
    );
  }
  function zd(t, e) {
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
  function Om(t, e, l, a, n) {
    if (e === 'submit' && l && l.stateNode === n) {
      var u = Td((n[te] || null).action),
        i = a.submitter;
      i &&
        ((e =
          (e = i[te] || null) ?
            Td(e.formAction)
          : i.getAttribute('formAction')),
        e !== null && ((u = e), (i = null)));
      var s = new fu('action', 'action', null, a, n);
      t.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Cl !== 0) {
                  var h = i ? zd(n, i) : new FormData(n);
                  Uc(
                    l,
                    { pending: !0, data: h, method: n.method, action: u },
                    null,
                    h,
                  );
                }
              } else
                typeof u == 'function' &&
                  (s.preventDefault(),
                  (h = i ? zd(n, i) : new FormData(n)),
                  Uc(
                    l,
                    { pending: !0, data: h, method: n.method, action: u },
                    u,
                    h,
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var yf = 0; yf < Fi.length; yf++) {
    var _f = Fi[yf],
      Mm = _f.toLowerCase(),
      Dm = _f[0].toUpperCase() + _f.slice(1);
    De(Mm, 'on' + Dm);
  }
  (De(eo, 'onAnimationEnd'),
    De(lo, 'onAnimationIteration'),
    De(ao, 'onAnimationStart'),
    De('dblclick', 'onDoubleClick'),
    De('focusin', 'onFocus'),
    De('focusout', 'onBlur'),
    De(W0, 'onTransitionRun'),
    De(k0, 'onTransitionStart'),
    De(F0, 'onTransitionCancel'),
    De(no, 'onTransitionEnd'),
    sa('onMouseEnter', ['mouseout', 'mouseover']),
    sa('onMouseLeave', ['mouseout', 'mouseover']),
    sa('onPointerEnter', ['pointerout', 'pointerover']),
    sa('onPointerLeave', ['pointerout', 'pointerover']),
    Ll(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' ',
      ),
    ),
    Ll(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    Ll('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Ll(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Ll(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Ll(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    ));
  var On =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    Um = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'
        .split(' ')
        .concat(On),
    );
  function Nd(t, e) {
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
              h = s.instance,
              x = s.currentTarget;
            if (((s = s.listener), h !== u && n.isPropagationStopped()))
              break t;
            ((u = s), (n.currentTarget = x));
            try {
              u(n);
            } catch (C) {
              ru(C);
            }
            ((n.currentTarget = null), (u = h));
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((s = a[i]),
              (h = s.instance),
              (x = s.currentTarget),
              (s = s.listener),
              h !== u && n.isPropagationStopped())
            )
              break t;
            ((u = s), (n.currentTarget = x));
            try {
              u(n);
            } catch (C) {
              ru(C);
            }
            ((n.currentTarget = null), (u = h));
          }
      }
    }
  }
  function ut(t, e) {
    var l = e[Ci];
    l === void 0 && (l = e[Ci] = new Set());
    var a = t + '__bubble';
    l.has(a) || (Ad(e, t, 2, !1), l.add(a));
  }
  function gf(t, e, l) {
    var a = 0;
    (e && (a |= 4), Ad(l, t, a, e));
  }
  var Fu = '_reactListening' + Math.random().toString(36).slice(2);
  function pf(t) {
    if (!t[Fu]) {
      ((t[Fu] = !0),
        ps.forEach(function (l) {
          l !== 'selectionchange' && (Um.has(l) || gf(l, !1, t), gf(l, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Fu] || ((e[Fu] = !0), gf('selectionchange', !1, e));
    }
  }
  function Ad(t, e, l, a) {
    switch (lh(e)) {
      case 2:
        var n = fv;
        break;
      case 8:
        n = sv;
        break;
      default:
        n = Uf;
    }
    ((l = n.bind(null, e, l, t)),
      (n = void 0),
      !Yi ||
        (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') ||
        (n = !0),
      a ?
        n !== void 0 ?
          t.addEventListener(e, l, { capture: !0, passive: n })
        : t.addEventListener(e, l, !0)
      : n !== void 0 ? t.addEventListener(e, l, { passive: n })
      : t.addEventListener(e, l, !1));
  }
  function bf(t, e, l, a, n) {
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
              var h = i.tag;
              if ((h === 3 || h === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; s !== null; ) {
            if (((i = ia(s)), i === null)) return;
            if (((h = i.tag), h === 5 || h === 6 || h === 26 || h === 27)) {
              a = u = i;
              continue t;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    Os(function () {
      var x = u,
        C = Bi(l),
        D = [];
      t: {
        var T = uo.get(t);
        if (T !== void 0) {
          var N = fu,
            Y = t;
          switch (t) {
            case 'keypress':
              if (iu(l) === 0) break t;
            case 'keydown':
            case 'keyup':
              N = A0;
              break;
            case 'focusin':
              ((Y = 'focus'), (N = Qi));
              break;
            case 'focusout':
              ((Y = 'blur'), (N = Qi));
              break;
            case 'beforeblur':
            case 'afterblur':
              N = Qi;
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
              N = Us;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              N = v0;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              N = R0;
              break;
            case eo:
            case lo:
            case ao:
              N = g0;
              break;
            case no:
              N = M0;
              break;
            case 'scroll':
            case 'scrollend':
              N = h0;
              break;
            case 'wheel':
              N = U0;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              N = b0;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              N = Bs;
              break;
            case 'toggle':
            case 'beforetoggle':
              N = B0;
          }
          var $ = (e & 4) !== 0,
            gt = !$ && (t === 'scroll' || t === 'scrollend'),
            p =
              $ ?
                T !== null ?
                  T + 'Capture'
                : null
              : T;
          $ = [];
          for (var y = x, E; y !== null; ) {
            var M = y;
            if (
              ((E = M.stateNode),
              (M = M.tag),
              (M !== 5 && M !== 26 && M !== 27) ||
                E === null ||
                p === null ||
                ((M = Ia(y, p)), M != null && $.push(Mn(y, M, E))),
              gt)
            )
              break;
            y = y.return;
          }
          0 < $.length &&
            ((T = new N(T, Y, null, l, C)), D.push({ event: T, listeners: $ }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((T = t === 'mouseover' || t === 'pointerover'),
            (N = t === 'mouseout' || t === 'pointerout'),
            T &&
              l !== Hi &&
              (Y = l.relatedTarget || l.fromElement) &&
              (ia(Y) || Y[ua]))
          )
            break t;
          if (
            (N || T) &&
            ((T =
              C.window === C ? C
              : (T = C.ownerDocument) ? T.defaultView || T.parentWindow
              : window),
            N ?
              ((Y = l.relatedTarget || l.toElement),
              (N = x),
              (Y = Y ? ia(Y) : null),
              Y !== null &&
                ((gt = v(Y)),
                ($ = Y.tag),
                Y !== gt || ($ !== 5 && $ !== 27 && $ !== 6)) &&
                (Y = null))
            : ((N = null), (Y = x)),
            N !== Y)
          ) {
            if (
              (($ = Us),
              (M = 'onMouseLeave'),
              (p = 'onMouseEnter'),
              (y = 'mouse'),
              (t === 'pointerout' || t === 'pointerover') &&
                (($ = Bs),
                (M = 'onPointerLeave'),
                (p = 'onPointerEnter'),
                (y = 'pointer')),
              (gt = N == null ? T : Fa(N)),
              (E = Y == null ? T : Fa(Y)),
              (T = new $(M, y + 'leave', N, l, C)),
              (T.target = gt),
              (T.relatedTarget = E),
              (M = null),
              ia(C) === x &&
                (($ = new $(p, y + 'enter', Y, l, C)),
                ($.target = E),
                ($.relatedTarget = gt),
                (M = $)),
              (gt = M),
              N && Y)
            )
              e: {
                for ($ = Hm, p = N, y = Y, E = 0, M = p; M; M = $(M)) E++;
                M = 0;
                for (var V = y; V; V = $(V)) M++;
                for (; 0 < E - M; ) ((p = $(p)), E--);
                for (; 0 < M - E; ) ((y = $(y)), M--);
                for (; E--; ) {
                  if (p === y || (y !== null && p === y.alternate)) {
                    $ = p;
                    break e;
                  }
                  ((p = $(p)), (y = $(y)));
                }
                $ = null;
              }
            else $ = null;
            (N !== null && jd(D, T, N, $, !1),
              Y !== null && gt !== null && jd(D, gt, Y, $, !0));
          }
        }
        t: {
          if (
            ((T = x ? Fa(x) : window),
            (N = T.nodeName && T.nodeName.toLowerCase()),
            N === 'select' || (N === 'input' && T.type === 'file'))
          )
            var st = Zs;
          else if (Qs(T))
            if (Vs) st = K0;
            else {
              st = Z0;
              var Q = w0;
            }
          else
            ((N = T.nodeName),
              (
                !N ||
                N.toLowerCase() !== 'input' ||
                (T.type !== 'checkbox' && T.type !== 'radio')
              ) ?
                x && Ui(x.elementType) && (st = Zs)
              : (st = V0));
          if (st && (st = st(t, x))) {
            ws(D, st, l, C);
            break t;
          }
          (Q && Q(t, T, x),
            t === 'focusout' &&
              x &&
              T.type === 'number' &&
              x.memoizedProps.value != null &&
              Di(T, 'number', T.value));
        }
        switch (((Q = x ? Fa(x) : window), t)) {
          case 'focusin':
            (Qs(Q) || Q.contentEditable === 'true') &&
              ((va = Q), ($i = x), (cn = null));
            break;
          case 'focusout':
            cn = $i = va = null;
            break;
          case 'mousedown':
            Wi = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Wi = !1), Ps(D, l, C));
            break;
          case 'selectionchange':
            if ($0) break;
          case 'keydown':
          case 'keyup':
            Ps(D, l, C);
        }
        var lt;
        if (Zi)
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
          ma ?
            Gs(t, l) && (ct = 'onCompositionEnd')
          : t === 'keydown' && l.keyCode === 229 && (ct = 'onCompositionStart');
        (ct &&
          (qs &&
            l.locale !== 'ko' &&
            (ma || ct !== 'onCompositionStart' ?
              ct === 'onCompositionEnd' && ma && (lt = Ms())
            : ((hl = C),
              (Li = 'value' in hl ? hl.value : hl.textContent),
              (ma = !0))),
          (Q = Iu(x, ct)),
          0 < Q.length &&
            ((ct = new Hs(ct, t, null, l, C)),
            D.push({ event: ct, listeners: Q }),
            lt ?
              (ct.data = lt)
            : ((lt = Xs(l)), lt !== null && (ct.data = lt)))),
          (lt = Y0 ? L0(t, l) : G0(t, l)) &&
            ((ct = Iu(x, 'onBeforeInput')),
            0 < ct.length &&
              ((Q = new Hs('onBeforeInput', 'beforeinput', null, l, C)),
              D.push({ event: Q, listeners: ct }),
              (Q.data = lt))),
          Om(D, t, x, l, C));
      }
      Nd(D, e);
    });
  }
  function Mn(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function Iu(t, e) {
    for (var l = e + 'Capture', a = []; t !== null; ) {
      var n = t,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = Ia(t, l)),
          n != null && a.unshift(Mn(t, n, u)),
          (n = Ia(t, e)),
          n != null && a.push(Mn(t, n, u))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function Hm(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function jd(t, e, l, a, n) {
    for (var u = e._reactName, i = []; l !== null && l !== a; ) {
      var s = l,
        h = s.alternate,
        x = s.stateNode;
      if (((s = s.tag), h !== null && h === a)) break;
      ((s !== 5 && s !== 26 && s !== 27) ||
        x === null ||
        ((h = x),
        n ?
          ((x = Ia(l, u)), x != null && i.unshift(Mn(l, x, h)))
        : n || ((x = Ia(l, u)), x != null && i.push(Mn(l, x, h)))),
        (l = l.return));
    }
    i.length !== 0 && t.push({ event: e, listeners: i });
  }
  var Bm = /\r\n?/g,
    qm = /\u0000|\uFFFD/g;
  function Cd(t) {
    return (typeof t == 'string' ? t : '' + t)
      .replace(
        Bm,
        `
`,
      )
      .replace(qm, '');
  }
  function Rd(t, e) {
    return ((e = Cd(e)), Cd(t) === e);
  }
  function _t(t, e, l, a, n, u) {
    switch (l) {
      case 'children':
        typeof a == 'string' ?
          e === 'body' || (e === 'textarea' && a === '') || ra(t, a)
        : (typeof a == 'number' || typeof a == 'bigint') &&
          e !== 'body' &&
          ra(t, '' + a);
        break;
      case 'className':
        lu(t, 'class', a);
        break;
      case 'tabIndex':
        lu(t, 'tabindex', a);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        lu(t, l, a);
        break;
      case 'style':
        Cs(t, a, u);
        break;
      case 'data':
        if (e !== 'object') {
          lu(t, 'data', a);
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
        ((a = nu('' + a)), t.setAttribute(l, a));
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
              (e !== 'input' && _t(t, e, 'name', n.name, n, null),
              _t(t, e, 'formEncType', n.formEncType, n, null),
              _t(t, e, 'formMethod', n.formMethod, n, null),
              _t(t, e, 'formTarget', n.formTarget, n, null))
            : (_t(t, e, 'encType', n.encType, n, null),
              _t(t, e, 'method', n.method, n, null),
              _t(t, e, 'target', n.target, n, null)));
        if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
          t.removeAttribute(l);
          break;
        }
        ((a = nu('' + a)), t.setAttribute(l, a));
        break;
      case 'onClick':
        a != null && (t.onclick = Ze);
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
        ((l = nu('' + a)),
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
        (ut('beforetoggle', t), ut('toggle', t), eu(t, 'popover', a));
        break;
      case 'xlinkActuate':
        we(t, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
        break;
      case 'xlinkArcrole':
        we(t, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
        break;
      case 'xlinkRole':
        we(t, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
        break;
      case 'xlinkShow':
        we(t, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
        break;
      case 'xlinkTitle':
        we(t, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
        break;
      case 'xlinkType':
        we(t, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
        break;
      case 'xmlBase':
        we(t, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
        break;
      case 'xmlLang':
        we(t, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
        break;
      case 'xmlSpace':
        we(t, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
        break;
      case 'is':
        eu(t, 'is', a);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== 'o' && l[0] !== 'O') ||
          (l[1] !== 'n' && l[1] !== 'N')) &&
          ((l = r0.get(l) || l), eu(t, l, a));
    }
  }
  function Sf(t, e, l, a, n, u) {
    switch (l) {
      case 'style':
        Cs(t, a, u);
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
          ra(t, a)
        : (typeof a == 'number' || typeof a == 'bigint') && ra(t, '' + a);
        break;
      case 'onScroll':
        a != null && ut('scroll', t);
        break;
      case 'onScrollEnd':
        a != null && ut('scrollend', t);
        break;
      case 'onClick':
        a != null && (t.onclick = Ze);
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
        if (!bs.hasOwnProperty(l))
          t: {
            if (
              l[0] === 'o' &&
              l[1] === 'n' &&
              ((n = l.endsWith('Capture')),
              (e = l.slice(2, n ? l.length - 7 : void 0)),
              (u = t[te] || null),
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
            : eu(t, l, a);
          }
    }
  }
  function Jt(t, e, l) {
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
                  _t(t, e, u, i, l, null);
              }
          }
        (n && _t(t, e, 'srcSet', l.srcSet, l, null),
          a && _t(t, e, 'src', l.src, l, null));
        return;
      case 'input':
        ut('invalid', t);
        var s = (u = i = n = null),
          h = null,
          x = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var C = l[a];
            if (C != null)
              switch (a) {
                case 'name':
                  n = C;
                  break;
                case 'type':
                  i = C;
                  break;
                case 'checked':
                  h = C;
                  break;
                case 'defaultChecked':
                  x = C;
                  break;
                case 'value':
                  u = C;
                  break;
                case 'defaultValue':
                  s = C;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (C != null) throw Error(f(137, e));
                  break;
                default:
                  _t(t, e, a, C, l, null);
              }
          }
        zs(t, u, s, h, x, i, n, !1);
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
                _t(t, e, n, s, l, null);
            }
        ((e = u),
          (l = i),
          (t.multiple = !!a),
          e != null ? oa(t, !!a, e, !1) : l != null && oa(t, !!a, l, !0));
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
                _t(t, e, i, s, l, null);
            }
        As(t, a, n, u);
        return;
      case 'option':
        for (h in l)
          l.hasOwnProperty(h) &&
            ((a = l[h]), a != null) &&
            (h === 'selected' ?
              (t.selected = a && typeof a != 'function' && typeof a != 'symbol')
            : _t(t, e, h, a, l, null));
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
        for (a = 0; a < On.length; a++) ut(On[a], t);
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
        for (x in l)
          if (l.hasOwnProperty(x) && ((a = l[x]), a != null))
            switch (x) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(f(137, e));
              default:
                _t(t, e, x, a, l, null);
            }
        return;
      default:
        if (Ui(e)) {
          for (C in l)
            l.hasOwnProperty(C) &&
              ((a = l[C]), a !== void 0 && Sf(t, e, C, a, l, void 0));
          return;
        }
    }
    for (s in l)
      l.hasOwnProperty(s) && ((a = l[s]), a != null && _t(t, e, s, a, l, null));
  }
  function Ym(t, e, l, a) {
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
          h = null,
          x = null,
          C = null;
        for (N in l) {
          var D = l[N];
          if (l.hasOwnProperty(N) && D != null)
            switch (N) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                h = D;
              default:
                a.hasOwnProperty(N) || _t(t, e, N, null, a, D);
            }
        }
        for (var T in a) {
          var N = a[T];
          if (((D = l[T]), a.hasOwnProperty(T) && (N != null || D != null)))
            switch (T) {
              case 'type':
                u = N;
                break;
              case 'name':
                n = N;
                break;
              case 'checked':
                x = N;
                break;
              case 'defaultChecked':
                C = N;
                break;
              case 'value':
                i = N;
                break;
              case 'defaultValue':
                s = N;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (N != null) throw Error(f(137, e));
                break;
              default:
                N !== D && _t(t, e, T, N, a, D);
            }
        }
        Mi(t, i, s, h, x, C, u, n);
        return;
      case 'select':
        N = i = s = T = null;
        for (u in l)
          if (((h = l[u]), l.hasOwnProperty(u) && h != null))
            switch (u) {
              case 'value':
                break;
              case 'multiple':
                N = h;
              default:
                a.hasOwnProperty(u) || _t(t, e, u, null, a, h);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (h = l[n]),
            a.hasOwnProperty(n) && (u != null || h != null))
          )
            switch (n) {
              case 'value':
                T = u;
                break;
              case 'defaultValue':
                s = u;
                break;
              case 'multiple':
                i = u;
              default:
                u !== h && _t(t, e, n, u, a, h);
            }
        ((e = s),
          (l = i),
          (a = N),
          T != null ?
            oa(t, !!l, T, !1)
          : !!a != !!l &&
            (e != null ? oa(t, !!l, e, !0) : oa(t, !!l, l ? [] : '', !1)));
        return;
      case 'textarea':
        N = T = null;
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
                _t(t, e, s, null, a, n);
            }
        for (i in a)
          if (
            ((n = a[i]),
            (u = l[i]),
            a.hasOwnProperty(i) && (n != null || u != null))
          )
            switch (i) {
              case 'value':
                T = n;
                break;
              case 'defaultValue':
                N = n;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (n != null) throw Error(f(91));
                break;
              default:
                n !== u && _t(t, e, i, n, a, u);
            }
        Ns(t, T, N);
        return;
      case 'option':
        for (var Y in l)
          ((T = l[Y]),
            l.hasOwnProperty(Y) &&
              T != null &&
              !a.hasOwnProperty(Y) &&
              (Y === 'selected' ? (t.selected = !1) : _t(t, e, Y, null, a, T)));
        for (h in a)
          ((T = a[h]),
            (N = l[h]),
            a.hasOwnProperty(h) &&
              T !== N &&
              (T != null || N != null) &&
              (h === 'selected' ?
                (t.selected =
                  T && typeof T != 'function' && typeof T != 'symbol')
              : _t(t, e, h, T, a, N)));
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
          ((T = l[$]),
            l.hasOwnProperty($) &&
              T != null &&
              !a.hasOwnProperty($) &&
              _t(t, e, $, null, a, T));
        for (x in a)
          if (
            ((T = a[x]),
            (N = l[x]),
            a.hasOwnProperty(x) && T !== N && (T != null || N != null))
          )
            switch (x) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (T != null) throw Error(f(137, e));
                break;
              default:
                _t(t, e, x, T, a, N);
            }
        return;
      default:
        if (Ui(e)) {
          for (var gt in l)
            ((T = l[gt]),
              l.hasOwnProperty(gt) &&
                T !== void 0 &&
                !a.hasOwnProperty(gt) &&
                Sf(t, e, gt, void 0, a, T));
          for (C in a)
            ((T = a[C]),
              (N = l[C]),
              !a.hasOwnProperty(C) ||
                T === N ||
                (T === void 0 && N === void 0) ||
                Sf(t, e, C, T, a, N));
          return;
        }
    }
    for (var p in l)
      ((T = l[p]),
        l.hasOwnProperty(p) &&
          T != null &&
          !a.hasOwnProperty(p) &&
          _t(t, e, p, null, a, T));
    for (D in a)
      ((T = a[D]),
        (N = l[D]),
        !a.hasOwnProperty(D) ||
          T === N ||
          (T == null && N == null) ||
          _t(t, e, D, T, a, N));
  }
  function Od(t) {
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
  function Lm() {
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
        if (u && s && Od(i)) {
          for (i = 0, s = n.responseEnd, a += 1; a < l.length; a++) {
            var h = l[a],
              x = h.startTime;
            if (x > s) break;
            var C = h.transferSize,
              D = h.initiatorType;
            C &&
              Od(D) &&
              ((h = h.responseEnd), (i += C * (h < s ? 1 : (s - x) / (h - x))));
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
  var Ef = null,
    xf = null;
  function Pu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Md(t) {
    switch (t) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Dd(t, e) {
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
  function Tf(t, e) {
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
  var zf = null;
  function Gm() {
    var t = window.event;
    return (
      t && t.type === 'popstate' ?
        t === zf ?
          !1
        : ((zf = t), !0)
      : ((zf = null), !1)
    );
  }
  var Ud = typeof setTimeout == 'function' ? setTimeout : void 0,
    Xm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Hd = typeof Promise == 'function' ? Promise : void 0,
    Qm =
      typeof queueMicrotask == 'function' ? queueMicrotask
      : typeof Hd < 'u' ?
        function (t) {
          return Hd.resolve(null).then(t).catch(wm);
        }
      : Ud;
  function wm(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Rl(t) {
    return t === 'head';
  }
  function Bd(t, e) {
    var l = e,
      a = 0;
    do {
      var n = l.nextSibling;
      if ((t.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === '/$' || l === '/&')) {
          if (a === 0) {
            (t.removeChild(n), Qa(e));
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
        else if (l === 'html') Dn(t.ownerDocument.documentElement);
        else if (l === 'head') {
          ((l = t.ownerDocument.head), Dn(l));
          for (var u = l.firstChild; u; ) {
            var i = u.nextSibling,
              s = u.nodeName;
            (u[ka] ||
              s === 'SCRIPT' ||
              s === 'STYLE' ||
              (s === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
              l.removeChild(u),
              (u = i));
          }
        } else l === 'body' && Dn(t.ownerDocument.body);
      l = n;
    } while (l);
    Qa(e);
  }
  function qd(t, e) {
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
  function Nf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (Nf(l), Ri(l));
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
  function Zm(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== 'INPUT' || t.type !== 'hidden')) break;
      } else if (a) {
        if (!t[ka])
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
      if (((t = je(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Vm(t, e, l) {
    if (e === '') return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') &&
          !l) ||
        ((t = je(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Yd(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') &&
          !e) ||
        ((t = je(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Af(t) {
    return t.data === '$?' || t.data === '$~';
  }
  function jf(t) {
    return (
      t.data === '$!' ||
      (t.data === '$?' && t.ownerDocument.readyState !== 'loading')
    );
  }
  function Km(t, e) {
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
  function je(t) {
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
  var Cf = null;
  function Ld(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === '/$' || l === '/&') {
          if (e === 0) return je(t.nextSibling);
          e--;
        } else
          (l !== '$' && l !== '$!' && l !== '$?' && l !== '$~' && l !== '&') ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Gd(t) {
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
  function Xd(t, e, l) {
    switch (((e = Pu(l)), t)) {
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
  function Dn(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Ri(t);
  }
  var Ce = new Map(),
    Qd = new Set();
  function ti(t) {
    return (
      typeof t.getRootNode == 'function' ? t.getRootNode()
      : t.nodeType === 9 ? t
      : t.ownerDocument
    );
  }
  var il = H.d;
  H.d = { f: Jm, r: $m, D: Wm, C: km, L: Fm, m: Im, X: tv, S: Pm, M: ev };
  function Jm() {
    var t = il.f(),
      e = Vu();
    return t || e;
  }
  function $m(t) {
    var e = ca(t);
    e !== null && e.tag === 5 && e.type === 'form' ? ur(e) : il.r(t);
  }
  var La = typeof document > 'u' ? null : document;
  function wd(t, e, l) {
    var a = La;
    if (a && typeof e == 'string' && e) {
      var n = Se(e);
      ((n = 'link[rel="' + t + '"][href="' + n + '"]'),
        typeof l == 'string' && (n += '[crossorigin="' + l + '"]'),
        Qd.has(n) ||
          (Qd.add(n),
          (t = { rel: t, crossOrigin: l, href: e }),
          a.querySelector(n) === null &&
            ((e = a.createElement('link')),
            Jt(e, 'link', t),
            Gt(e),
            a.head.appendChild(e))));
    }
  }
  function Wm(t) {
    (il.D(t), wd('dns-prefetch', t, null));
  }
  function km(t, e) {
    (il.C(t, e), wd('preconnect', t, e));
  }
  function Fm(t, e, l) {
    il.L(t, e, l);
    var a = La;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + Se(e) + '"]';
      e === 'image' && l && l.imageSrcSet ?
        ((n += '[imagesrcset="' + Se(l.imageSrcSet) + '"]'),
        typeof l.imageSizes == 'string' &&
          (n += '[imagesizes="' + Se(l.imageSizes) + '"]'))
      : (n += '[href="' + Se(t) + '"]');
      var u = n;
      switch (e) {
        case 'style':
          u = Ga(t);
          break;
        case 'script':
          u = Xa(t);
      }
      Ce.has(u) ||
        ((t = z(
          {
            rel: 'preload',
            href: e === 'image' && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l,
        )),
        Ce.set(u, t),
        a.querySelector(n) !== null ||
          (e === 'style' && a.querySelector(Un(u))) ||
          (e === 'script' && a.querySelector(Hn(u))) ||
          ((e = a.createElement('link')),
          Jt(e, 'link', t),
          Gt(e),
          a.head.appendChild(e)));
    }
  }
  function Im(t, e) {
    il.m(t, e);
    var l = La;
    if (l && t) {
      var a = e && typeof e.as == 'string' ? e.as : 'script',
        n =
          'link[rel="modulepreload"][as="' + Se(a) + '"][href="' + Se(t) + '"]',
        u = n;
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = Xa(t);
      }
      if (
        !Ce.has(u) &&
        ((t = z({ rel: 'modulepreload', href: t }, e)),
        Ce.set(u, t),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (l.querySelector(Hn(u))) return;
        }
        ((a = l.createElement('link')),
          Jt(a, 'link', t),
          Gt(a),
          l.head.appendChild(a));
      }
    }
  }
  function Pm(t, e, l) {
    il.S(t, e, l);
    var a = La;
    if (a && t) {
      var n = fa(a).hoistableStyles,
        u = Ga(t);
      e = e || 'default';
      var i = n.get(u);
      if (!i) {
        var s = { loading: 0, preload: null };
        if ((i = a.querySelector(Un(u)))) s.loading = 5;
        else {
          ((t = z({ 'rel': 'stylesheet', 'href': t, 'data-precedence': e }, l)),
            (l = Ce.get(u)) && Rf(t, l));
          var h = (i = a.createElement('link'));
          (Gt(h),
            Jt(h, 'link', t),
            (h._p = new Promise(function (x, C) {
              ((h.onload = x), (h.onerror = C));
            })),
            h.addEventListener('load', function () {
              s.loading |= 1;
            }),
            h.addEventListener('error', function () {
              s.loading |= 2;
            }),
            (s.loading |= 4),
            ei(i, e, a));
        }
        ((i = { type: 'stylesheet', instance: i, count: 1, state: s }),
          n.set(u, i));
      }
    }
  }
  function tv(t, e) {
    il.X(t, e);
    var l = La;
    if (l && t) {
      var a = fa(l).hoistableScripts,
        n = Xa(t),
        u = a.get(n);
      u ||
        ((u = l.querySelector(Hn(n))),
        u ||
          ((t = z({ src: t, async: !0 }, e)),
          (e = Ce.get(n)) && Of(t, e),
          (u = l.createElement('script')),
          Gt(u),
          Jt(u, 'link', t),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function ev(t, e) {
    il.M(t, e);
    var l = La;
    if (l && t) {
      var a = fa(l).hoistableScripts,
        n = Xa(t),
        u = a.get(n);
      u ||
        ((u = l.querySelector(Hn(n))),
        u ||
          ((t = z({ src: t, async: !0, type: 'module' }, e)),
          (e = Ce.get(n)) && Of(t, e),
          (u = l.createElement('script')),
          Gt(u),
          Jt(u, 'link', t),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function Zd(t, e, l, a) {
    var n = (n = at.current) ? ti(n) : null;
    if (!n) throw Error(f(446));
    switch (t) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof l.precedence == 'string' && typeof l.href == 'string' ?
            ((e = Ga(l.href)),
            (l = fa(n).hoistableStyles),
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
          t = Ga(l.href);
          var u = fa(n).hoistableStyles,
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
              (u = n.querySelector(Un(t))) &&
                !u._p &&
                ((i.instance = u), (i.state.loading = 5)),
              Ce.has(t) ||
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
                Ce.set(t, l),
                u || lv(n, t, l, i.state))),
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
            ((e = Xa(l)),
            (l = fa(n).hoistableScripts),
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
  function Ga(t) {
    return 'href="' + Se(t) + '"';
  }
  function Un(t) {
    return 'link[rel="stylesheet"][' + t + ']';
  }
  function Vd(t) {
    return z({}, t, { 'data-precedence': t.precedence, 'precedence': null });
  }
  function lv(t, e, l, a) {
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
      Jt(e, 'link', l),
      Gt(e),
      t.head.appendChild(e));
  }
  function Xa(t) {
    return '[src="' + Se(t) + '"]';
  }
  function Hn(t) {
    return 'script[async]' + t;
  }
  function Kd(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case 'style':
          var a = t.querySelector('style[data-href~="' + Se(l.href) + '"]');
          if (a) return ((e.instance = a), Gt(a), a);
          var n = z({}, l, {
            'data-href': l.href,
            'data-precedence': l.precedence,
            'href': null,
            'precedence': null,
          });
          return (
            (a = (t.ownerDocument || t).createElement('style')),
            Gt(a),
            Jt(a, 'style', n),
            ei(a, l.precedence, t),
            (e.instance = a)
          );
        case 'stylesheet':
          n = Ga(l.href);
          var u = t.querySelector(Un(n));
          if (u) return ((e.state.loading |= 4), (e.instance = u), Gt(u), u);
          ((a = Vd(l)),
            (n = Ce.get(n)) && Rf(a, n),
            (u = (t.ownerDocument || t).createElement('link')),
            Gt(u));
          var i = u;
          return (
            (i._p = new Promise(function (s, h) {
              ((i.onload = s), (i.onerror = h));
            })),
            Jt(u, 'link', a),
            (e.state.loading |= 4),
            ei(u, l.precedence, t),
            (e.instance = u)
          );
        case 'script':
          return (
            (u = Xa(l.src)),
            (n = t.querySelector(Hn(u))) ?
              ((e.instance = n), Gt(n), n)
            : ((a = l),
              (n = Ce.get(u)) && ((a = z({}, l)), Of(a, n)),
              (t = t.ownerDocument || t),
              (n = t.createElement('script')),
              Gt(n),
              Jt(n, 'link', a),
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
        ((a = e.instance), (e.state.loading |= 4), ei(a, l.precedence, t));
    return e.instance;
  }
  function ei(t, e, l) {
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
  function Rf(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Of(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var li = null;
  function Jd(t, e, l) {
    if (li === null) {
      var a = new Map(),
        n = (li = new Map());
      n.set(l, a);
    } else ((n = li), (a = n.get(l)), a || ((a = new Map()), n.set(l, a)));
    if (a.has(t)) return a;
    for (
      a.set(t, null), l = l.getElementsByTagName(t), n = 0;
      n < l.length;
      n++
    ) {
      var u = l[n];
      if (
        !(
          u[ka] ||
          u[wt] ||
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
  function $d(t, e, l) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === 'title' ? t.querySelector('head > title') : null,
      ));
  }
  function av(t, e, l) {
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
  function Wd(t) {
    return !(t.type === 'stylesheet' && (t.state.loading & 3) === 0);
  }
  function nv(t, e, l, a) {
    if (
      l.type === 'stylesheet' &&
      (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var n = Ga(a.href),
          u = e.querySelector(Un(n));
        if (u) {
          ((e = u._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (t.count++, (t = ai.bind(t)), e.then(t, t)),
            (l.state.loading |= 4),
            (l.instance = u),
            Gt(u));
          return;
        }
        ((u = e.ownerDocument || e),
          (a = Vd(a)),
          (n = Ce.get(n)) && Rf(a, n),
          (u = u.createElement('link')),
          Gt(u));
        var i = u;
        ((i._p = new Promise(function (s, h) {
          ((i.onload = s), (i.onerror = h));
        })),
          Jt(u, 'link', a),
          (l.instance = u));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(l, e),
        (e = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (t.count++,
          (l = ai.bind(t)),
          e.addEventListener('load', l),
          e.addEventListener('error', l)));
    }
  }
  var Mf = 0;
  function uv(t, e) {
    return (
      t.stylesheets && t.count === 0 && ui(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount ?
        function (l) {
          var a = setTimeout(function () {
            if ((t.stylesheets && ui(t, t.stylesheets), t.unsuspend)) {
              var u = t.unsuspend;
              ((t.unsuspend = null), u());
            }
          }, 6e4 + e);
          0 < t.imgBytes && Mf === 0 && (Mf = 62500 * Lm());
          var n = setTimeout(
            function () {
              if (
                ((t.waitingForImages = !1),
                t.count === 0 &&
                  (t.stylesheets && ui(t, t.stylesheets), t.unsuspend))
              ) {
                var u = t.unsuspend;
                ((t.unsuspend = null), u());
              }
            },
            (t.imgBytes > Mf ? 50 : 800) + e,
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
  function ai() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) ui(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var ni = null;
  function ui(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (ni = new Map()),
        e.forEach(iv, t),
        (ni = null),
        ai.call(t)));
  }
  function iv(t, e) {
    if (!(e.state.loading & 4)) {
      var l = ni.get(t);
      if (l) var a = l.get(null);
      else {
        ((l = new Map()), ni.set(t, l));
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
        (a = ai.bind(this)),
        n.addEventListener('load', a),
        n.addEventListener('error', a),
        u ?
          u.parentNode.insertBefore(n, u.nextSibling)
        : ((t = t.nodeType === 9 ? t.head : t),
          t.insertBefore(n, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var Bn = {
    $$typeof: W,
    Provider: null,
    Consumer: null,
    _currentValue: k,
    _currentValue2: k,
    _threadCount: 0,
  };
  function cv(t, e, l, a, n, u, i, s, h) {
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
      (this.expirationTimes = Ni(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ni(0)),
      (this.hiddenUpdates = Ni(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = h),
      (this.incompleteTransitions = new Map()));
  }
  function kd(t, e, l, a, n, u, i, s, h, x, C, D) {
    return (
      (t = new cv(t, e, l, i, h, x, C, D, s)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = he(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = oc()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: e }),
      mc(u),
      t
    );
  }
  function Fd(t) {
    return t ? ((t = ga), t) : ga;
  }
  function Id(t, e, l, a, n, u) {
    ((n = Fd(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = pl(e)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = bl(t, a, e)),
      l !== null && (ie(l, t, e), mn(l, t, e)));
  }
  function Pd(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Df(t, e) {
    (Pd(t, e), (t = t.alternate) && Pd(t, e));
  }
  function th(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = wl(t, 67108864);
      (e !== null && ie(e, t, 67108864), Df(t, 67108864));
    }
  }
  function eh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ge();
      e = Ai(e);
      var l = wl(t, e);
      (l !== null && ie(l, t, e), Df(t, e));
    }
  }
  var ii = !0;
  function fv(t, e, l, a) {
    var n = R.T;
    R.T = null;
    var u = H.p;
    try {
      ((H.p = 2), Uf(t, e, l, a));
    } finally {
      ((H.p = u), (R.T = n));
    }
  }
  function sv(t, e, l, a) {
    var n = R.T;
    R.T = null;
    var u = H.p;
    try {
      ((H.p = 8), Uf(t, e, l, a));
    } finally {
      ((H.p = u), (R.T = n));
    }
  }
  function Uf(t, e, l, a) {
    if (ii) {
      var n = Hf(a);
      if (n === null) (bf(t, e, a, ci, l), ah(t, a));
      else if (rv(n, t, e, l, a)) a.stopPropagation();
      else if ((ah(t, a), e & 4 && -1 < ov.indexOf(t))) {
        for (; n !== null; ) {
          var u = ca(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var i = Yl(u.pendingLanes);
                  if (i !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; i; ) {
                      var h = 1 << (31 - re(i));
                      ((s.entanglements[1] |= h), (i &= ~h));
                    }
                    (Xe(u), (rt & 6) === 0 && ((wu = se() + 500), Rn(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((s = wl(u, 2)), s !== null && ie(s, u, 2), Vu(), Df(u, 2));
            }
          if (((u = Hf(a)), u === null && bf(t, e, a, ci, l), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else bf(t, e, a, null, l);
    }
  }
  function Hf(t) {
    return ((t = Bi(t)), Bf(t));
  }
  var ci = null;
  function Bf(t) {
    if (((ci = null), (t = ia(t)), t !== null)) {
      var e = v(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = b(e)), t !== null)) return t;
          t = null;
        } else if (l === 31) {
          if (((t = j(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((ci = t), null);
  }
  function lh(t) {
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
        switch (Wh()) {
          case ss:
            return 2;
          case os:
            return 8;
          case kn:
          case kh:
            return 32;
          case rs:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var qf = !1,
    Ol = null,
    Ml = null,
    Dl = null,
    qn = new Map(),
    Yn = new Map(),
    Ul = [],
    ov =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      );
  function ah(t, e) {
    switch (t) {
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
        qn.delete(e.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Yn.delete(e.pointerId);
    }
  }
  function Ln(t, e, l, a, n, u) {
    return t === null || t.nativeEvent !== u ?
        ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        e !== null && ((e = ca(e)), e !== null && th(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        n !== null && e.indexOf(n) === -1 && e.push(n),
        t);
  }
  function rv(t, e, l, a, n) {
    switch (e) {
      case 'focusin':
        return ((Ol = Ln(Ol, t, e, l, a, n)), !0);
      case 'dragenter':
        return ((Ml = Ln(Ml, t, e, l, a, n)), !0);
      case 'mouseover':
        return ((Dl = Ln(Dl, t, e, l, a, n)), !0);
      case 'pointerover':
        var u = n.pointerId;
        return (qn.set(u, Ln(qn.get(u) || null, t, e, l, a, n)), !0);
      case 'gotpointercapture':
        return (
          (u = n.pointerId),
          Yn.set(u, Ln(Yn.get(u) || null, t, e, l, a, n)),
          !0
        );
    }
    return !1;
  }
  function nh(t) {
    var e = ia(t.target);
    if (e !== null) {
      var l = v(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = b(l)), e !== null)) {
            ((t.blockedOn = e),
              _s(t.priority, function () {
                eh(l);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = j(l)), e !== null)) {
            ((t.blockedOn = e),
              _s(t.priority, function () {
                eh(l);
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
  function fi(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = Hf(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        ((Hi = a), l.target.dispatchEvent(a), (Hi = null));
      } else return ((e = ca(l)), e !== null && th(e), (t.blockedOn = l), !1);
      e.shift();
    }
    return !0;
  }
  function uh(t, e, l) {
    fi(t) && l.delete(e);
  }
  function dv() {
    ((qf = !1),
      Ol !== null && fi(Ol) && (Ol = null),
      Ml !== null && fi(Ml) && (Ml = null),
      Dl !== null && fi(Dl) && (Dl = null),
      qn.forEach(uh),
      Yn.forEach(uh));
  }
  function si(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      qf ||
        ((qf = !0),
        c.unstable_scheduleCallback(c.unstable_NormalPriority, dv)));
  }
  var oi = null;
  function ih(t) {
    oi !== t &&
      ((oi = t),
      c.unstable_scheduleCallback(c.unstable_NormalPriority, function () {
        oi === t && (oi = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            n = t[e + 2];
          if (typeof a != 'function') {
            if (Bf(a || l) === null) continue;
            break;
          }
          var u = ca(l);
          u !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Uc(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function Qa(t) {
    function e(h) {
      return si(h, t);
    }
    (Ol !== null && si(Ol, t),
      Ml !== null && si(Ml, t),
      Dl !== null && si(Dl, t),
      qn.forEach(e),
      Yn.forEach(e));
    for (var l = 0; l < Ul.length; l++) {
      var a = Ul[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Ul.length && ((l = Ul[0]), l.blockedOn === null); )
      (nh(l), l.blockedOn === null && Ul.shift());
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          i = n[te] || null;
        if (typeof u == 'function') i || ih(l);
        else if (i) {
          var s = null;
          if (u && u.hasAttribute('formAction')) {
            if (((n = u), (i = u[te] || null))) s = i.formAction;
            else if (Bf(n) !== null) continue;
          } else s = i.action;
          (typeof s == 'function' ? (l[a + 1] = s) : (l.splice(a, 3), (a -= 3)),
            ih(l));
        }
      }
  }
  function ch() {
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
  function Yf(t) {
    this._internalRoot = t;
  }
  ((ri.prototype.render = Yf.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(f(409));
      var l = e.current,
        a = ge();
      Id(l, a, t, e, null, null);
    }),
    (ri.prototype.unmount = Yf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (Id(t.current, 2, null, t, null, null), Vu(), (e[ua] = null));
        }
      }));
  function ri(t) {
    this._internalRoot = t;
  }
  ri.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = ys();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Ul.length && e !== 0 && e < Ul[l].priority; l++);
      (Ul.splice(l, 0, t), l === 0 && nh(t));
    }
  };
  var fh = o.version;
  if (fh !== '19.2.4') throw Error(f(527, fh, '19.2.4'));
  H.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == 'function' ?
          Error(f(188))
        : ((t = Object.keys(t).join(',')), Error(f(268, t)));
    return (
      (t = _(e)),
      (t = t !== null ? O(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var hv = {
    bundleType: 0,
    version: '19.2.4',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: R,
    reconcilerVersion: '19.2.4',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var di = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!di.isDisabled && di.supportsFiber)
      try {
        ((Ja = di.inject(hv)), (oe = di));
      } catch {}
  }
  return (
    (Xn.createRoot = function (t, e) {
      if (!m(t)) throw Error(f(299));
      var l = !1,
        a = '',
        n = vr,
        u = yr,
        i = _r;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
        (e = kd(t, 1, !1, null, null, l, a, null, n, u, i, ch)),
        (t[ua] = e.current),
        pf(t),
        new Yf(e)
      );
    }),
    (Xn.hydrateRoot = function (t, e, l) {
      if (!m(t)) throw Error(f(299));
      var a = !1,
        n = '',
        u = vr,
        i = yr,
        s = _r,
        h = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (i = l.onCaughtError),
          l.onRecoverableError !== void 0 && (s = l.onRecoverableError),
          l.formState !== void 0 && (h = l.formState)),
        (e = kd(t, 1, !0, e, l ?? null, a, n, h, u, i, s, ch)),
        (e.context = Fd(null)),
        (l = e.current),
        (a = ge()),
        (a = Ai(a)),
        (n = pl(a)),
        (n.callback = null),
        bl(l, n, a),
        (l = a),
        (e.current.lanes = l),
        Wa(e, l),
        Xe(e),
        (t[ua] = e.current),
        pf(t),
        new ri(e)
      );
    }),
    (Xn.version = '19.2.4'),
    Xn
  );
}
var gh;
function xv() {
  if (gh) return Gf.exports;
  gh = 1;
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
  return (c(), (Gf.exports = Ev()), Gf.exports);
}
var Tv = xv(),
  A = Ff();
var ph = 'popstate';
function zv(c = {}) {
  function o(m, v) {
    let {
      pathname: b = '/',
      search: j = '',
      hash: S = '',
    } = aa(m.location.hash.substring(1));
    return (
      !b.startsWith('/') && !b.startsWith('.') && (b = '/' + b),
      Wf(
        '',
        { pathname: b, search: j, hash: S },
        (v.state && v.state.usr) || null,
        (v.state && v.state.key) || 'default',
      )
    );
  }
  function r(m, v) {
    let b = m.document.querySelector('base'),
      j = '';
    if (b && b.getAttribute('href')) {
      let S = m.location.href,
        _ = S.indexOf('#');
      j = _ === -1 ? S : S.slice(0, _);
    }
    return j + '#' + (typeof v == 'string' ? v : Vn(v));
  }
  function f(m, v) {
    Be(
      m.pathname.charAt(0) === '/',
      `relative pathnames are not supported in hash history.push(${JSON.stringify(v)})`,
    );
  }
  return Av(o, r, f, c);
}
function Nt(c, o) {
  if (c === !1 || c === null || typeof c > 'u') throw new Error(o);
}
function Be(c, o) {
  if (!c) {
    typeof console < 'u' && console.warn(o);
    try {
      throw new Error(o);
    } catch {}
  }
}
function Nv() {
  return Math.random().toString(36).substring(2, 10);
}
function bh(c, o) {
  return { usr: c.state, key: c.key, idx: o };
}
function Wf(c, o, r = null, f) {
  return {
    pathname: typeof c == 'string' ? c : c.pathname,
    search: '',
    hash: '',
    ...(typeof o == 'string' ? aa(o) : o),
    state: r,
    key: (o && o.key) || f || Nv(),
  };
}
function Vn({ pathname: c = '/', search: o = '', hash: r = '' }) {
  return (
    o && o !== '?' && (c += o.charAt(0) === '?' ? o : '?' + o),
    r && r !== '#' && (c += r.charAt(0) === '#' ? r : '#' + r),
    c
  );
}
function aa(c) {
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
function Av(c, o, r, f = {}) {
  let { window: m = document.defaultView, v5Compat: v = !1 } = f,
    b = m.history,
    j = 'POP',
    S = null,
    _ = O();
  _ == null && ((_ = 0), b.replaceState({ ...b.state, idx: _ }, ''));
  function O() {
    return (b.state || { idx: null }).idx;
  }
  function z() {
    j = 'POP';
    let G = O(),
      K = G == null ? null : G - _;
    ((_ = G), S && S({ action: j, location: Z.location, delta: K }));
  }
  function q(G, K) {
    j = 'PUSH';
    let L = Wf(Z.location, G, K);
    (r && r(L, G), (_ = O() + 1));
    let W = bh(L, _),
      Et = Z.createHref(L);
    try {
      b.pushState(W, '', Et);
    } catch (St) {
      if (St instanceof DOMException && St.name === 'DataCloneError') throw St;
      m.location.assign(Et);
    }
    v && S && S({ action: j, location: Z.location, delta: 1 });
  }
  function w(G, K) {
    j = 'REPLACE';
    let L = Wf(Z.location, G, K);
    (r && r(L, G), (_ = O()));
    let W = bh(L, _),
      Et = Z.createHref(L);
    (b.replaceState(W, '', Et),
      v && S && S({ action: j, location: Z.location, delta: 0 }));
  }
  function F(G) {
    return jv(G);
  }
  let Z = {
    get action() {
      return j;
    },
    get location() {
      return c(m, b);
    },
    listen(G) {
      if (S) throw new Error('A history only accepts one active listener');
      return (
        m.addEventListener(ph, z),
        (S = G),
        () => {
          (m.removeEventListener(ph, z), (S = null));
        }
      );
    },
    createHref(G) {
      return o(m, G);
    },
    createURL: F,
    encodeLocation(G) {
      let K = F(G);
      return { pathname: K.pathname, search: K.search, hash: K.hash };
    },
    push: q,
    replace: w,
    go(G) {
      return b.go(G);
    },
  };
  return Z;
}
function jv(c, o = !1) {
  let r = 'http://localhost';
  (typeof window < 'u' &&
    (r =
      window.location.origin !== 'null' ?
        window.location.origin
      : window.location.href),
    Nt(r, 'No window.location.(origin|href) available to create URL'));
  let f = typeof c == 'string' ? c : Vn(c);
  return (
    (f = f.replace(/ $/, '%20')),
    !o && f.startsWith('//') && (f = r + f),
    new URL(f, r)
  );
}
function zh(c, o, r = '/') {
  return Cv(c, o, r, !1);
}
function Cv(c, o, r, f) {
  let m = typeof o == 'string' ? aa(o) : o,
    v = sl(m.pathname || '/', r);
  if (v == null) return null;
  let b = Nh(c);
  Rv(b);
  let j = null;
  for (let S = 0; j == null && S < b.length; ++S) {
    let _ = Xv(v);
    j = Lv(b[S], _, f);
  }
  return j;
}
function Nh(c, o = [], r = [], f = '', m = !1) {
  let v = (b, j, S = m, _) => {
    let O = {
      relativePath: _ === void 0 ? b.path || '' : _,
      caseSensitive: b.caseSensitive === !0,
      childrenIndex: j,
      route: b,
    };
    if (O.relativePath.startsWith('/')) {
      if (!O.relativePath.startsWith(f) && S) return;
      (Nt(
        O.relativePath.startsWith(f),
        `Absolute route path "${O.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (O.relativePath = O.relativePath.slice(f.length)));
    }
    let z = fl([f, O.relativePath]),
      q = r.concat(O);
    (b.children &&
      b.children.length > 0 &&
      (Nt(
        b.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${z}".`,
      ),
      Nh(b.children, o, q, z, S)),
      !(b.path == null && !b.index) &&
        o.push({ path: z, score: qv(z, b.index), routesMeta: q }));
  };
  return (
    c.forEach((b, j) => {
      if (b.path === '' || !b.path?.includes('?')) v(b, j);
      else for (let S of Ah(b.path)) v(b, j, !0, S);
    }),
    o
  );
}
function Ah(c) {
  let o = c.split('/');
  if (o.length === 0) return [];
  let [r, ...f] = o,
    m = r.endsWith('?'),
    v = r.replace(/\?$/, '');
  if (f.length === 0) return m ? [v, ''] : [v];
  let b = Ah(f.join('/')),
    j = [];
  return (
    j.push(...b.map((S) => (S === '' ? v : [v, S].join('/')))),
    m && j.push(...b),
    j.map((S) => (c.startsWith('/') && S === '' ? '/' : S))
  );
}
function Rv(c) {
  c.sort((o, r) =>
    o.score !== r.score ?
      r.score - o.score
    : Yv(
        o.routesMeta.map((f) => f.childrenIndex),
        r.routesMeta.map((f) => f.childrenIndex),
      ),
  );
}
var Ov = /^:[\w-]+$/,
  Mv = 3,
  Dv = 2,
  Uv = 1,
  Hv = 10,
  Bv = -2,
  Sh = (c) => c === '*';
function qv(c, o) {
  let r = c.split('/'),
    f = r.length;
  return (
    r.some(Sh) && (f += Bv),
    o && (f += Dv),
    r
      .filter((m) => !Sh(m))
      .reduce(
        (m, v) =>
          m +
          (Ov.test(v) ? Mv
          : v === '' ? Uv
          : Hv),
        f,
      )
  );
}
function Yv(c, o) {
  return c.length === o.length && c.slice(0, -1).every((f, m) => f === o[m]) ?
      c[c.length - 1] - o[o.length - 1]
    : 0;
}
function Lv(c, o, r = !1) {
  let { routesMeta: f } = c,
    m = {},
    v = '/',
    b = [];
  for (let j = 0; j < f.length; ++j) {
    let S = f[j],
      _ = j === f.length - 1,
      O = v === '/' ? o : o.slice(v.length) || '/',
      z = _i(
        { path: S.relativePath, caseSensitive: S.caseSensitive, end: _ },
        O,
      ),
      q = S.route;
    if (
      (!z &&
        _ &&
        r &&
        !f[f.length - 1].route.index &&
        (z = _i(
          { path: S.relativePath, caseSensitive: S.caseSensitive, end: !1 },
          O,
        )),
      !z)
    )
      return null;
    (Object.assign(m, z.params),
      b.push({
        params: m,
        pathname: fl([v, z.pathname]),
        pathnameBase: Vv(fl([v, z.pathnameBase])),
        route: q,
      }),
      z.pathnameBase !== '/' && (v = fl([v, z.pathnameBase])));
  }
  return b;
}
function _i(c, o) {
  typeof c == 'string' && (c = { path: c, caseSensitive: !1, end: !0 });
  let [r, f] = Gv(c.path, c.caseSensitive, c.end),
    m = o.match(r);
  if (!m) return null;
  let v = m[0],
    b = v.replace(/(.)\/+$/, '$1'),
    j = m.slice(1);
  return {
    params: f.reduce((_, { paramName: O, isOptional: z }, q) => {
      if (O === '*') {
        let F = j[q] || '';
        b = v.slice(0, v.length - F.length).replace(/(.)\/+$/, '$1');
      }
      const w = j[q];
      return (
        z && !w ? (_[O] = void 0) : (_[O] = (w || '').replace(/%2F/g, '/')),
        _
      );
    }, {}),
    pathname: v,
    pathnameBase: b,
    pattern: c,
  };
}
function Gv(c, o = !1, r = !0) {
  Be(
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
          (b, j, S) => (
            f.push({ paramName: j, isOptional: S != null }),
            S ? '/?([^\\/]+)?' : '/([^\\/]+)'
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
function Xv(c) {
  try {
    return c
      .split('/')
      .map((o) => decodeURIComponent(o).replace(/\//g, '%2F'))
      .join('/');
  } catch (o) {
    return (
      Be(
        !1,
        `The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`,
      ),
      c
    );
  }
}
function sl(c, o) {
  if (o === '/') return c;
  if (!c.toLowerCase().startsWith(o.toLowerCase())) return null;
  let r = o.endsWith('/') ? o.length - 1 : o.length,
    f = c.charAt(r);
  return f && f !== '/' ? null : c.slice(r) || '/';
}
var Qv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function wv(c, o = '/') {
  let {
      pathname: r,
      search: f = '',
      hash: m = '',
    } = typeof c == 'string' ? aa(c) : c,
    v;
  return (
    r ?
      ((r = r.replace(/\/\/+/g, '/')),
      r.startsWith('/') ? (v = Eh(r.substring(1), '/')) : (v = Eh(r, o)))
    : (v = o),
    { pathname: v, search: Kv(f), hash: Jv(m) }
  );
}
function Eh(c, o) {
  let r = o.replace(/\/+$/, '').split('/');
  return (
    c.split('/').forEach((m) => {
      m === '..' ? r.length > 1 && r.pop() : m !== '.' && r.push(m);
    }),
    r.length > 1 ? r.join('/') : '/'
  );
}
function Vf(c, o, r, f) {
  return `Cannot include a '${c}' character in a manually specified \`to.${o}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Zv(c) {
  return c.filter(
    (o, r) => r === 0 || (o.route.path && o.route.path.length > 0),
  );
}
function jh(c) {
  let o = Zv(c);
  return o.map((r, f) => (f === o.length - 1 ? r.pathname : r.pathnameBase));
}
function Ch(c, o, r, f = !1) {
  let m;
  typeof c == 'string' ?
    (m = aa(c))
  : ((m = { ...c }),
    Nt(
      !m.pathname || !m.pathname.includes('?'),
      Vf('?', 'pathname', 'search', m),
    ),
    Nt(
      !m.pathname || !m.pathname.includes('#'),
      Vf('#', 'pathname', 'hash', m),
    ),
    Nt(!m.search || !m.search.includes('#'), Vf('#', 'search', 'hash', m)));
  let v = c === '' || m.pathname === '',
    b = v ? '/' : m.pathname,
    j;
  if (b == null) j = r;
  else {
    let z = o.length - 1;
    if (!f && b.startsWith('..')) {
      let q = b.split('/');
      for (; q[0] === '..'; ) (q.shift(), (z -= 1));
      m.pathname = q.join('/');
    }
    j = z >= 0 ? o[z] : '/';
  }
  let S = wv(m, j),
    _ = b && b !== '/' && b.endsWith('/'),
    O = (v || b === '.') && r.endsWith('/');
  return (!S.pathname.endsWith('/') && (_ || O) && (S.pathname += '/'), S);
}
var fl = (c) => c.join('/').replace(/\/\/+/g, '/'),
  Vv = (c) => c.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Kv = (c) =>
    !c || c === '?' ? ''
    : c.startsWith('?') ? c
    : '?' + c,
  Jv = (c) =>
    !c || c === '#' ? ''
    : c.startsWith('#') ? c
    : '#' + c,
  $v = class {
    constructor(c, o, r, f = !1) {
      ((this.status = c),
        (this.statusText = o || ''),
        (this.internal = f),
        r instanceof Error ?
          ((this.data = r.toString()), (this.error = r))
        : (this.data = r));
    }
  };
function Wv(c) {
  return (
    c != null &&
    typeof c.status == 'number' &&
    typeof c.statusText == 'string' &&
    typeof c.internal == 'boolean' &&
    'data' in c
  );
}
function kv(c) {
  return (
    c
      .map((o) => o.route.path)
      .filter(Boolean)
      .join('/')
      .replace(/\/\/*/g, '/') || '/'
  );
}
var Rh =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
function Oh(c, o) {
  let r = c;
  if (typeof r != 'string' || !Qv.test(r))
    return { absoluteURL: void 0, isExternal: !1, to: r };
  let f = r,
    m = !1;
  if (Rh)
    try {
      let v = new URL(window.location.href),
        b = r.startsWith('//') ? new URL(v.protocol + r) : new URL(r),
        j = sl(b.pathname, o);
      b.origin === v.origin && j != null ?
        (r = j + b.search + b.hash)
      : (m = !0);
    } catch {
      Be(
        !1,
        `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: f, isExternal: m, to: r };
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var Mh = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(Mh);
var Fv = ['GET', ...Mh];
new Set(Fv);
var Va = A.createContext(null);
Va.displayName = 'DataRouter';
var gi = A.createContext(null);
gi.displayName = 'DataRouterState';
var Iv = A.createContext(!1),
  Dh = A.createContext({ isTransitioning: !1 });
Dh.displayName = 'ViewTransition';
var Pv = A.createContext(new Map());
Pv.displayName = 'Fetchers';
var t1 = A.createContext(null);
t1.displayName = 'Await';
var Oe = A.createContext(null);
Oe.displayName = 'Navigation';
var Kn = A.createContext(null);
Kn.displayName = 'Location';
var ol = A.createContext({ outlet: null, matches: [], isDataRoute: !1 });
ol.displayName = 'Route';
var If = A.createContext(null);
If.displayName = 'RouteError';
var Uh = 'REACT_ROUTER_ERROR',
  e1 = 'REDIRECT',
  l1 = 'ROUTE_ERROR_RESPONSE';
function a1(c) {
  if (c.startsWith(`${Uh}:${e1}:{`))
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
function n1(c) {
  if (c.startsWith(`${Uh}:${l1}:{`))
    try {
      let o = JSON.parse(c.slice(40));
      if (
        typeof o == 'object' &&
        o &&
        typeof o.status == 'number' &&
        typeof o.statusText == 'string'
      )
        return new $v(o.status, o.statusText, o.data);
    } catch {}
}
function u1(c, { relative: o } = {}) {
  Nt(
    Jn(),
    'useHref() may be used only in the context of a <Router> component.',
  );
  let { basename: r, navigator: f } = A.useContext(Oe),
    { hash: m, pathname: v, search: b } = $n(c, { relative: o }),
    j = v;
  return (
    r !== '/' && (j = v === '/' ? r : fl([r, v])),
    f.createHref({ pathname: j, search: b, hash: m })
  );
}
function Jn() {
  return A.useContext(Kn) != null;
}
function na() {
  return (
    Nt(
      Jn(),
      'useLocation() may be used only in the context of a <Router> component.',
    ),
    A.useContext(Kn).location
  );
}
var Hh =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Bh(c) {
  A.useContext(Oe).static || A.useLayoutEffect(c);
}
function i1() {
  let { isDataRoute: c } = A.useContext(ol);
  return c ? p1() : c1();
}
function c1() {
  Nt(
    Jn(),
    'useNavigate() may be used only in the context of a <Router> component.',
  );
  let c = A.useContext(Va),
    { basename: o, navigator: r } = A.useContext(Oe),
    { matches: f } = A.useContext(ol),
    { pathname: m } = na(),
    v = JSON.stringify(jh(f)),
    b = A.useRef(!1);
  return (
    Bh(() => {
      b.current = !0;
    }),
    A.useCallback(
      (S, _ = {}) => {
        if ((Be(b.current, Hh), !b.current)) return;
        if (typeof S == 'number') {
          r.go(S);
          return;
        }
        let O = Ch(S, JSON.parse(v), m, _.relative === 'path');
        (c == null &&
          o !== '/' &&
          (O.pathname = O.pathname === '/' ? o : fl([o, O.pathname])),
          (_.replace ? r.replace : r.push)(O, _.state, _));
      },
      [o, r, v, m, c],
    )
  );
}
A.createContext(null);
function $n(c, { relative: o } = {}) {
  let { matches: r } = A.useContext(ol),
    { pathname: f } = na(),
    m = JSON.stringify(jh(r));
  return A.useMemo(() => Ch(c, JSON.parse(m), f, o === 'path'), [c, m, f, o]);
}
function f1(c, o) {
  return qh(c, o);
}
function qh(c, o, r, f, m) {
  Nt(
    Jn(),
    'useRoutes() may be used only in the context of a <Router> component.',
  );
  let { navigator: v } = A.useContext(Oe),
    { matches: b } = A.useContext(ol),
    j = b[b.length - 1],
    S = j ? j.params : {},
    _ = j ? j.pathname : '/',
    O = j ? j.pathnameBase : '/',
    z = j && j.route;
  {
    let L = (z && z.path) || '';
    Lh(
      _,
      !z || L.endsWith('*') || L.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${_}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L === '/' ? '*' : `${L}/*`}">.`,
    );
  }
  let q = na(),
    w;
  if (o) {
    let L = typeof o == 'string' ? aa(o) : o;
    (Nt(
      O === '/' || L.pathname?.startsWith(O),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${O}" but pathname "${L.pathname}" was given in the \`location\` prop.`,
    ),
      (w = L));
  } else w = q;
  let F = w.pathname || '/',
    Z = F;
  if (O !== '/') {
    let L = O.replace(/^\//, '').split('/');
    Z = '/' + F.replace(/^\//, '').split('/').slice(L.length).join('/');
  }
  let G = zh(c, { pathname: Z });
  (Be(
    z || G != null,
    `No routes matched location "${w.pathname}${w.search}${w.hash}" `,
  ),
    Be(
      G == null ||
        G[G.length - 1].route.element !== void 0 ||
        G[G.length - 1].route.Component !== void 0 ||
        G[G.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let K = h1(
    G &&
      G.map((L) =>
        Object.assign({}, L, {
          params: Object.assign({}, S, L.params),
          pathname: fl([
            O,
            v.encodeLocation ?
              v.encodeLocation(
                L.pathname.replace(/\?/g, '%3F').replace(/#/g, '%23'),
              ).pathname
            : L.pathname,
          ]),
          pathnameBase:
            L.pathnameBase === '/' ?
              O
            : fl([
                O,
                v.encodeLocation ?
                  v.encodeLocation(
                    L.pathnameBase.replace(/\?/g, '%3F').replace(/#/g, '%23'),
                  ).pathname
                : L.pathnameBase,
              ]),
        }),
      ),
    b,
    r,
    f,
    m,
  );
  return o && K ?
      A.createElement(
        Kn.Provider,
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
function s1() {
  let c = g1(),
    o =
      Wv(c) ? `${c.status} ${c.statusText}`
      : c instanceof Error ? c.message
      : JSON.stringify(c),
    r = c instanceof Error ? c.stack : null,
    f = 'rgba(200,200,200, 0.5)',
    m = { padding: '0.5rem', backgroundColor: f },
    v = { padding: '2px 4px', backgroundColor: f },
    b = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', c),
    (b = A.createElement(
      A.Fragment,
      null,
      A.createElement('p', null, '💿 Hey developer 👋'),
      A.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        A.createElement('code', { style: v }, 'ErrorBoundary'),
        ' or',
        ' ',
        A.createElement('code', { style: v }, 'errorElement'),
        ' prop on your route.',
      ),
    )),
    A.createElement(
      A.Fragment,
      null,
      A.createElement('h2', null, 'Unexpected Application Error!'),
      A.createElement('h3', { style: { fontStyle: 'italic' } }, o),
      r ? A.createElement('pre', { style: m }, r) : null,
      b,
    )
  );
}
var o1 = A.createElement(s1, null),
  Yh = class extends A.Component {
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
        const r = n1(c.digest);
        r && (c = r);
      }
      let o =
        c !== void 0 ?
          A.createElement(
            ol.Provider,
            { value: this.props.routeContext },
            A.createElement(If.Provider, {
              value: c,
              children: this.props.component,
            }),
          )
        : this.props.children;
      return this.context ? A.createElement(r1, { error: c }, o) : o;
    }
  };
Yh.contextType = Iv;
var Kf = new WeakMap();
function r1({ children: c, error: o }) {
  let { basename: r } = A.useContext(Oe);
  if (
    typeof o == 'object' &&
    o &&
    'digest' in o &&
    typeof o.digest == 'string'
  ) {
    let f = a1(o.digest);
    if (f) {
      let m = Kf.get(o);
      if (m) throw m;
      let v = Oh(f.location, r);
      if (Rh && !Kf.get(o))
        if (v.isExternal || f.reloadDocument)
          window.location.href = v.absoluteURL || v.to;
        else {
          const b = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(v.to, {
              replace: f.replace,
            }),
          );
          throw (Kf.set(o, b), b);
        }
      return A.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${v.absoluteURL || v.to}`,
      });
    }
  }
  return c;
}
function d1({ routeContext: c, match: o, children: r }) {
  let f = A.useContext(Va);
  return (
    f &&
      f.static &&
      f.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (f.staticContext._deepestRenderedBoundaryId = o.route.id),
    A.createElement(ol.Provider, { value: c }, r)
  );
}
function h1(c, o = [], r = null, f = null, m = null) {
  if (c == null) {
    if (!r) return null;
    if (r.errors) c = r.matches;
    else if (o.length === 0 && !r.initialized && r.matches.length > 0)
      c = r.matches;
    else return null;
  }
  let v = c,
    b = r?.errors;
  if (b != null) {
    let O = v.findIndex((z) => z.route.id && b?.[z.route.id] !== void 0);
    (Nt(
      O >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(b).join(',')}`,
    ),
      (v = v.slice(0, Math.min(v.length, O + 1))));
  }
  let j = !1,
    S = -1;
  if (r)
    for (let O = 0; O < v.length; O++) {
      let z = v[O];
      if (
        ((z.route.HydrateFallback || z.route.hydrateFallbackElement) && (S = O),
        z.route.id)
      ) {
        let { loaderData: q, errors: w } = r,
          F =
            z.route.loader &&
            !q.hasOwnProperty(z.route.id) &&
            (!w || w[z.route.id] === void 0);
        if (z.route.lazy || F) {
          ((j = !0), S >= 0 ? (v = v.slice(0, S + 1)) : (v = [v[0]]));
          break;
        }
      }
    }
  let _ =
    r && f ?
      (O, z) => {
        f(O, {
          location: r.location,
          params: r.matches?.[0]?.params ?? {},
          unstable_pattern: kv(r.matches),
          errorInfo: z,
        });
      }
    : void 0;
  return v.reduceRight((O, z, q) => {
    let w,
      F = !1,
      Z = null,
      G = null;
    r &&
      ((w = b && z.route.id ? b[z.route.id] : void 0),
      (Z = z.route.errorElement || o1),
      j &&
        (S < 0 && q === 0 ?
          (Lh(
            'route-fallback',
            !1,
            'No `HydrateFallback` element provided to render during initial hydration',
          ),
          (F = !0),
          (G = null))
        : S === q && ((F = !0), (G = z.route.hydrateFallbackElement || null))));
    let K = o.concat(v.slice(0, q + 1)),
      L = () => {
        let W;
        return (
          w ? (W = Z)
          : F ? (W = G)
          : z.route.Component ? (W = A.createElement(z.route.Component, null))
          : z.route.element ? (W = z.route.element)
          : (W = O),
          A.createElement(d1, {
            match: z,
            routeContext: { outlet: O, matches: K, isDataRoute: r != null },
            children: W,
          })
        );
      };
    return r && (z.route.ErrorBoundary || z.route.errorElement || q === 0) ?
        A.createElement(Yh, {
          location: r.location,
          revalidation: r.revalidation,
          component: Z,
          error: w,
          children: L(),
          routeContext: { outlet: null, matches: K, isDataRoute: !0 },
          onError: _,
        })
      : L();
  }, null);
}
function Pf(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function m1(c) {
  let o = A.useContext(Va);
  return (Nt(o, Pf(c)), o);
}
function v1(c) {
  let o = A.useContext(gi);
  return (Nt(o, Pf(c)), o);
}
function y1(c) {
  let o = A.useContext(ol);
  return (Nt(o, Pf(c)), o);
}
function ts(c) {
  let o = y1(c),
    r = o.matches[o.matches.length - 1];
  return (
    Nt(
      r.route.id,
      `${c} can only be used on routes that contain a unique "id"`,
    ),
    r.route.id
  );
}
function _1() {
  return ts('useRouteId');
}
function g1() {
  let c = A.useContext(If),
    o = v1('useRouteError'),
    r = ts('useRouteError');
  return c !== void 0 ? c : o.errors?.[r];
}
function p1() {
  let { router: c } = m1('useNavigate'),
    o = ts('useNavigate'),
    r = A.useRef(!1);
  return (
    Bh(() => {
      r.current = !0;
    }),
    A.useCallback(
      async (m, v = {}) => {
        (Be(r.current, Hh),
          r.current &&
            (typeof m == 'number' ?
              await c.navigate(m)
            : await c.navigate(m, { fromRouteId: o, ...v })));
      },
      [c, o],
    )
  );
}
var xh = {};
function Lh(c, o, r) {
  !o && !xh[c] && ((xh[c] = !0), Be(!1, r));
}
A.memo(b1);
function b1({ routes: c, future: o, state: r, onError: f }) {
  return qh(c, void 0, r, f, o);
}
function cl(c) {
  Nt(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.',
  );
}
function S1({
  basename: c = '/',
  children: o = null,
  location: r,
  navigationType: f = 'POP',
  navigator: m,
  static: v = !1,
  unstable_useTransitions: b,
}) {
  Nt(
    !Jn(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.',
  );
  let j = c.replace(/^\/*/, '/'),
    S = A.useMemo(
      () => ({
        basename: j,
        navigator: m,
        static: v,
        unstable_useTransitions: b,
        future: {},
      }),
      [j, m, v, b],
    );
  typeof r == 'string' && (r = aa(r));
  let {
      pathname: _ = '/',
      search: O = '',
      hash: z = '',
      state: q = null,
      key: w = 'default',
    } = r,
    F = A.useMemo(() => {
      let Z = sl(_, j);
      return Z == null ? null : (
          {
            location: { pathname: Z, search: O, hash: z, state: q, key: w },
            navigationType: f,
          }
        );
    }, [j, _, O, z, q, w, f]);
  return (
    Be(
      F != null,
      `<Router basename="${j}"> is not able to match the URL "${_}${O}${z}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    F == null ? null : (
      A.createElement(
        Oe.Provider,
        { value: S },
        A.createElement(Kn.Provider, { children: o, value: F }),
      )
    )
  );
}
function E1({ children: c, location: o }) {
  return f1(kf(c), o);
}
function kf(c, o = []) {
  let r = [];
  return (
    A.Children.forEach(c, (f, m) => {
      if (!A.isValidElement(f)) return;
      let v = [...o, m];
      if (f.type === A.Fragment) {
        r.push.apply(r, kf(f.props.children, v));
        return;
      }
      (Nt(
        f.type === cl,
        `[${typeof f.type == 'string' ? f.type : f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        Nt(
          !f.props.index || !f.props.children,
          'An index route cannot have child routes.',
        ));
      let b = {
        id: f.props.id || v.join('-'),
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
      (f.props.children && (b.children = kf(f.props.children, v)), r.push(b));
    }),
    r
  );
}
var vi = 'get',
  yi = 'application/x-www-form-urlencoded';
function pi(c) {
  return typeof HTMLElement < 'u' && c instanceof HTMLElement;
}
function x1(c) {
  return pi(c) && c.tagName.toLowerCase() === 'button';
}
function T1(c) {
  return pi(c) && c.tagName.toLowerCase() === 'form';
}
function z1(c) {
  return pi(c) && c.tagName.toLowerCase() === 'input';
}
function N1(c) {
  return !!(c.metaKey || c.altKey || c.ctrlKey || c.shiftKey);
}
function A1(c, o) {
  return c.button === 0 && (!o || o === '_self') && !N1(c);
}
var hi = null;
function j1() {
  if (hi === null)
    try {
      (new FormData(document.createElement('form'), 0), (hi = !1));
    } catch {
      hi = !0;
    }
  return hi;
}
var C1 = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function Jf(c) {
  return c != null && !C1.has(c) ?
      (Be(
        !1,
        `"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${yi}"`,
      ),
      null)
    : c;
}
function R1(c, o) {
  let r, f, m, v, b;
  if (T1(c)) {
    let j = c.getAttribute('action');
    ((f = j ? sl(j, o) : null),
      (r = c.getAttribute('method') || vi),
      (m = Jf(c.getAttribute('enctype')) || yi),
      (v = new FormData(c)));
  } else if (x1(c) || (z1(c) && (c.type === 'submit' || c.type === 'image'))) {
    let j = c.form;
    if (j == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let S = c.getAttribute('formaction') || j.getAttribute('action');
    if (
      ((f = S ? sl(S, o) : null),
      (r = c.getAttribute('formmethod') || j.getAttribute('method') || vi),
      (m =
        Jf(c.getAttribute('formenctype')) ||
        Jf(j.getAttribute('enctype')) ||
        yi),
      (v = new FormData(j, c)),
      !j1())
    ) {
      let { name: _, type: O, value: z } = c;
      if (O === 'image') {
        let q = _ ? `${_}.` : '';
        (v.append(`${q}x`, '0'), v.append(`${q}y`, '0'));
      } else _ && v.append(_, z);
    }
  } else {
    if (pi(c))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((r = vi), (f = null), (m = yi), (b = c));
  }
  return (
    v && m === 'text/plain' && ((b = v), (v = void 0)),
    { action: f, method: r.toLowerCase(), encType: m, formData: v, body: b }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function es(c, o) {
  if (c === !1 || c === null || typeof c > 'u') throw new Error(o);
}
function O1(c, o, r, f) {
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
    : o && sl(m.pathname, o) === '/' ?
      (m.pathname = `${o.replace(/\/$/, '')}/_root.${f}`)
    : (m.pathname = `${m.pathname.replace(/\/$/, '')}.${f}`),
    m
  );
}
async function M1(c, o) {
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
function D1(c) {
  return (
    c == null ? !1
    : c.href == null ?
      c.rel === 'preload' &&
      typeof c.imageSrcSet == 'string' &&
      typeof c.imageSizes == 'string'
    : typeof c.rel == 'string' && typeof c.href == 'string'
  );
}
async function U1(c, o, r) {
  let f = await Promise.all(
    c.map(async (m) => {
      let v = o.routes[m.route.id];
      if (v) {
        let b = await M1(v, r);
        return b.links ? b.links() : [];
      }
      return [];
    }),
  );
  return Y1(
    f
      .flat(1)
      .filter(D1)
      .filter((m) => m.rel === 'stylesheet' || m.rel === 'preload')
      .map((m) =>
        m.rel === 'stylesheet' ?
          { ...m, rel: 'prefetch', as: 'style' }
        : { ...m, rel: 'prefetch' },
      ),
  );
}
function Th(c, o, r, f, m, v) {
  let b = (S, _) => (r[_] ? S.route.id !== r[_].route.id : !0),
    j = (S, _) =>
      r[_].pathname !== S.pathname ||
      (r[_].route.path?.endsWith('*') && r[_].params['*'] !== S.params['*']);
  return (
    v === 'assets' ? o.filter((S, _) => b(S, _) || j(S, _))
    : v === 'data' ?
      o.filter((S, _) => {
        let O = f.routes[S.route.id];
        if (!O || !O.hasLoader) return !1;
        if (b(S, _) || j(S, _)) return !0;
        if (S.route.shouldRevalidate) {
          let z = S.route.shouldRevalidate({
            currentUrl: new URL(m.pathname + m.search + m.hash, window.origin),
            currentParams: r[0]?.params || {},
            nextUrl: new URL(c, window.origin),
            nextParams: S.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof z == 'boolean') return z;
        }
        return !0;
      })
    : []
  );
}
function H1(c, o, { includeHydrateFallback: r } = {}) {
  return B1(
    c
      .map((f) => {
        let m = o.routes[f.route.id];
        if (!m) return [];
        let v = [m.module];
        return (
          m.clientActionModule && (v = v.concat(m.clientActionModule)),
          m.clientLoaderModule && (v = v.concat(m.clientLoaderModule)),
          r &&
            m.hydrateFallbackModule &&
            (v = v.concat(m.hydrateFallbackModule)),
          m.imports && (v = v.concat(m.imports)),
          v
        );
      })
      .flat(1),
  );
}
function B1(c) {
  return [...new Set(c)];
}
function q1(c) {
  let o = {},
    r = Object.keys(c).sort();
  for (let f of r) o[f] = c[f];
  return o;
}
function Y1(c, o) {
  let r = new Set();
  return (
    new Set(o),
    c.reduce((f, m) => {
      let v = JSON.stringify(q1(m));
      return (r.has(v) || (r.add(v), f.push({ key: v, link: m })), f);
    }, [])
  );
}
function Gh() {
  let c = A.useContext(Va);
  return (
    es(
      c,
      'You must render this element inside a <DataRouterContext.Provider> element',
    ),
    c
  );
}
function L1() {
  let c = A.useContext(gi);
  return (
    es(
      c,
      'You must render this element inside a <DataRouterStateContext.Provider> element',
    ),
    c
  );
}
var ls = A.createContext(void 0);
ls.displayName = 'FrameworkContext';
function Xh() {
  let c = A.useContext(ls);
  return (
    es(c, 'You must render this element inside a <HydratedRouter> element'),
    c
  );
}
function G1(c, o) {
  let r = A.useContext(ls),
    [f, m] = A.useState(!1),
    [v, b] = A.useState(!1),
    {
      onFocus: j,
      onBlur: S,
      onMouseEnter: _,
      onMouseLeave: O,
      onTouchStart: z,
    } = o,
    q = A.useRef(null);
  (A.useEffect(() => {
    if ((c === 'render' && b(!0), c === 'viewport')) {
      let Z = (K) => {
          K.forEach((L) => {
            b(L.isIntersecting);
          });
        },
        G = new IntersectionObserver(Z, { threshold: 0.5 });
      return (
        q.current && G.observe(q.current),
        () => {
          G.disconnect();
        }
      );
    }
  }, [c]),
    A.useEffect(() => {
      if (f) {
        let Z = setTimeout(() => {
          b(!0);
        }, 100);
        return () => {
          clearTimeout(Z);
        };
      }
    }, [f]));
  let w = () => {
      m(!0);
    },
    F = () => {
      (m(!1), b(!1));
    };
  return (
    r ?
      c !== 'intent' ?
        [v, q, {}]
      : [
          v,
          q,
          {
            onFocus: Qn(j, w),
            onBlur: Qn(S, F),
            onMouseEnter: Qn(_, w),
            onMouseLeave: Qn(O, F),
            onTouchStart: Qn(z, w),
          },
        ]
    : [!1, q, {}]
  );
}
function Qn(c, o) {
  return (r) => {
    (c && c(r), r.defaultPrevented || o(r));
  };
}
function X1({ page: c, ...o }) {
  let { router: r } = Gh(),
    f = A.useMemo(() => zh(r.routes, c, r.basename), [r.routes, c, r.basename]);
  return f ? A.createElement(w1, { page: c, matches: f, ...o }) : null;
}
function Q1(c) {
  let { manifest: o, routeModules: r } = Xh(),
    [f, m] = A.useState([]);
  return (
    A.useEffect(() => {
      let v = !1;
      return (
        U1(c, o, r).then((b) => {
          v || m(b);
        }),
        () => {
          v = !0;
        }
      );
    }, [c, o, r]),
    f
  );
}
function w1({ page: c, matches: o, ...r }) {
  let f = na(),
    { future: m, manifest: v, routeModules: b } = Xh(),
    { basename: j } = Gh(),
    { loaderData: S, matches: _ } = L1(),
    O = A.useMemo(() => Th(c, o, _, v, f, 'data'), [c, o, _, v, f]),
    z = A.useMemo(() => Th(c, o, _, v, f, 'assets'), [c, o, _, v, f]),
    q = A.useMemo(() => {
      if (c === f.pathname + f.search + f.hash) return [];
      let Z = new Set(),
        G = !1;
      if (
        (o.forEach((L) => {
          let W = v.routes[L.route.id];
          !W ||
            !W.hasLoader ||
            ((
              (!O.some((Et) => Et.route.id === L.route.id) &&
                L.route.id in S &&
                b[L.route.id]?.shouldRevalidate) ||
              W.hasClientLoader
            ) ?
              (G = !0)
            : Z.add(L.route.id));
        }),
        Z.size === 0)
      )
        return [];
      let K = O1(c, j, m.unstable_trailingSlashAwareDataRequests, 'data');
      return (
        G &&
          Z.size > 0 &&
          K.searchParams.set(
            '_routes',
            o
              .filter((L) => Z.has(L.route.id))
              .map((L) => L.route.id)
              .join(','),
          ),
        [K.pathname + K.search]
      );
    }, [j, m.unstable_trailingSlashAwareDataRequests, S, f, v, O, o, c, b]),
    w = A.useMemo(() => H1(z, v), [z, v]),
    F = Q1(z);
  return A.createElement(
    A.Fragment,
    null,
    q.map((Z) =>
      A.createElement('link', {
        key: Z,
        rel: 'prefetch',
        as: 'fetch',
        href: Z,
        ...r,
      }),
    ),
    w.map((Z) =>
      A.createElement('link', { key: Z, rel: 'modulepreload', href: Z, ...r }),
    ),
    F.map(({ key: Z, link: G }) =>
      A.createElement('link', {
        key: Z,
        nonce: r.nonce,
        ...G,
        crossOrigin: G.crossOrigin ?? r.crossOrigin,
      }),
    ),
  );
}
function Z1(...c) {
  return (o) => {
    c.forEach((r) => {
      typeof r == 'function' ? r(o) : r != null && (r.current = o);
    });
  };
}
var V1 =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  V1 && (window.__reactRouterVersion = '7.13.0');
} catch {}
function K1({
  basename: c,
  children: o,
  unstable_useTransitions: r,
  window: f,
}) {
  let m = A.useRef();
  m.current == null && (m.current = zv({ window: f, v5Compat: !0 }));
  let v = m.current,
    [b, j] = A.useState({ action: v.action, location: v.location }),
    S = A.useCallback(
      (_) => {
        r === !1 ? j(_) : A.startTransition(() => j(_));
      },
      [r],
    );
  return (
    A.useLayoutEffect(() => v.listen(S), [v, S]),
    A.createElement(S1, {
      basename: c,
      children: o,
      location: b.location,
      navigationType: b.action,
      navigator: v,
      unstable_useTransitions: r,
    })
  );
}
var Qh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  as = A.forwardRef(function (
    {
      onClick: o,
      discover: r = 'render',
      prefetch: f = 'none',
      relative: m,
      reloadDocument: v,
      replace: b,
      state: j,
      target: S,
      to: _,
      preventScrollReset: O,
      viewTransition: z,
      unstable_defaultShouldRevalidate: q,
      ...w
    },
    F,
  ) {
    let { basename: Z, unstable_useTransitions: G } = A.useContext(Oe),
      K = typeof _ == 'string' && Qh.test(_),
      L = Oh(_, Z);
    _ = L.to;
    let W = u1(_, { relative: m }),
      [Et, St, At] = G1(f, w),
      P = W1(_, {
        replace: b,
        state: j,
        target: S,
        preventScrollReset: O,
        relative: m,
        viewTransition: z,
        unstable_defaultShouldRevalidate: q,
        unstable_useTransitions: G,
      });
    function Rt(pe) {
      (o && o(pe), pe.defaultPrevented || P(pe));
    }
    let Qt = A.createElement('a', {
      ...w,
      ...At,
      'href': L.absoluteURL || W,
      'onClick': L.isExternal || v ? o : Rt,
      'ref': Z1(F, St),
      'target': S,
      'data-discover': !K && r === 'render' ? 'true' : void 0,
    });
    return Et && !K ?
        A.createElement(A.Fragment, null, Qt, A.createElement(X1, { page: W }))
      : Qt;
  });
as.displayName = 'Link';
var la = A.forwardRef(function (
  {
    'aria-current': o = 'page',
    'caseSensitive': r = !1,
    'className': f = '',
    'end': m = !1,
    'style': v,
    'to': b,
    'viewTransition': j,
    'children': S,
    ..._
  },
  O,
) {
  let z = $n(b, { relative: _.relative }),
    q = na(),
    w = A.useContext(gi),
    { navigator: F, basename: Z } = A.useContext(Oe),
    G = w != null && ty(z) && j === !0,
    K = F.encodeLocation ? F.encodeLocation(z).pathname : z.pathname,
    L = q.pathname,
    W =
      w && w.navigation && w.navigation.location ?
        w.navigation.location.pathname
      : null;
  (r ||
    ((L = L.toLowerCase()),
    (W = W ? W.toLowerCase() : null),
    (K = K.toLowerCase())),
    W && Z && (W = sl(W, Z) || W));
  const Et = K !== '/' && K.endsWith('/') ? K.length - 1 : K.length;
  let St = L === K || (!m && L.startsWith(K) && L.charAt(Et) === '/'),
    At =
      W != null &&
      (W === K || (!m && W.startsWith(K) && W.charAt(K.length) === '/')),
    P = { isActive: St, isPending: At, isTransitioning: G },
    Rt = St ? o : void 0,
    Qt;
  typeof f == 'function' ?
    (Qt = f(P))
  : (Qt = [
      f,
      St ? 'active' : null,
      At ? 'pending' : null,
      G ? 'transitioning' : null,
    ]
      .filter(Boolean)
      .join(' '));
  let pe = typeof v == 'function' ? v(P) : v;
  return A.createElement(
    as,
    {
      ..._,
      'aria-current': Rt,
      'className': Qt,
      'ref': O,
      'style': pe,
      'to': b,
      'viewTransition': j,
    },
    typeof S == 'function' ? S(P) : S,
  );
});
la.displayName = 'NavLink';
var J1 = A.forwardRef(
  (
    {
      discover: c = 'render',
      fetcherKey: o,
      navigate: r,
      reloadDocument: f,
      replace: m,
      state: v,
      method: b = vi,
      action: j,
      onSubmit: S,
      relative: _,
      preventScrollReset: O,
      viewTransition: z,
      unstable_defaultShouldRevalidate: q,
      ...w
    },
    F,
  ) => {
    let { unstable_useTransitions: Z } = A.useContext(Oe),
      G = I1(),
      K = P1(j, { relative: _ }),
      L = b.toLowerCase() === 'get' ? 'get' : 'post',
      W = typeof j == 'string' && Qh.test(j),
      Et = (St) => {
        if ((S && S(St), St.defaultPrevented)) return;
        St.preventDefault();
        let At = St.nativeEvent.submitter,
          P = At?.getAttribute('formmethod') || b,
          Rt = () =>
            G(At || St.currentTarget, {
              fetcherKey: o,
              method: P,
              navigate: r,
              replace: m,
              state: v,
              relative: _,
              preventScrollReset: O,
              viewTransition: z,
              unstable_defaultShouldRevalidate: q,
            });
        Z && r !== !1 ? A.startTransition(() => Rt()) : Rt();
      };
    return A.createElement('form', {
      'ref': F,
      'method': L,
      'action': K,
      'onSubmit': f ? S : Et,
      ...w,
      'data-discover': !W && c === 'render' ? 'true' : void 0,
    });
  },
);
J1.displayName = 'Form';
function $1(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function wh(c) {
  let o = A.useContext(Va);
  return (Nt(o, $1(c)), o);
}
function W1(
  c,
  {
    target: o,
    replace: r,
    state: f,
    preventScrollReset: m,
    relative: v,
    viewTransition: b,
    unstable_defaultShouldRevalidate: j,
    unstable_useTransitions: S,
  } = {},
) {
  let _ = i1(),
    O = na(),
    z = $n(c, { relative: v });
  return A.useCallback(
    (q) => {
      if (A1(q, o)) {
        q.preventDefault();
        let w = r !== void 0 ? r : Vn(O) === Vn(z),
          F = () =>
            _(c, {
              replace: w,
              state: f,
              preventScrollReset: m,
              relative: v,
              viewTransition: b,
              unstable_defaultShouldRevalidate: j,
            });
        S ? A.startTransition(() => F()) : F();
      }
    },
    [O, _, z, r, f, o, c, m, v, b, j, S],
  );
}
var k1 = 0,
  F1 = () => `__${String(++k1)}__`;
function I1() {
  let { router: c } = wh('useSubmit'),
    { basename: o } = A.useContext(Oe),
    r = _1(),
    f = c.fetch,
    m = c.navigate;
  return A.useCallback(
    async (v, b = {}) => {
      let { action: j, method: S, encType: _, formData: O, body: z } = R1(v, o);
      if (b.navigate === !1) {
        let q = b.fetcherKey || F1();
        await f(q, r, b.action || j, {
          unstable_defaultShouldRevalidate: b.unstable_defaultShouldRevalidate,
          preventScrollReset: b.preventScrollReset,
          formData: O,
          body: z,
          formMethod: b.method || S,
          formEncType: b.encType || _,
          flushSync: b.flushSync,
        });
      } else
        await m(b.action || j, {
          unstable_defaultShouldRevalidate: b.unstable_defaultShouldRevalidate,
          preventScrollReset: b.preventScrollReset,
          formData: O,
          body: z,
          formMethod: b.method || S,
          formEncType: b.encType || _,
          replace: b.replace,
          state: b.state,
          fromRouteId: r,
          flushSync: b.flushSync,
          viewTransition: b.viewTransition,
        });
    },
    [f, m, o, r],
  );
}
function P1(c, { relative: o } = {}) {
  let { basename: r } = A.useContext(Oe),
    f = A.useContext(ol);
  Nt(f, 'useFormAction must be used inside a RouteContext');
  let [m] = f.matches.slice(-1),
    v = { ...$n(c || '.', { relative: o }) },
    b = na();
  if (c == null) {
    v.search = b.search;
    let j = new URLSearchParams(v.search),
      S = j.getAll('index');
    if (S.some((O) => O === '')) {
      (j.delete('index'),
        S.filter((z) => z).forEach((z) => j.append('index', z)));
      let O = j.toString();
      v.search = O ? `?${O}` : '';
    }
  }
  return (
    (!c || c === '.') &&
      m.route.index &&
      (v.search = v.search ? v.search.replace(/^\?/, '?index&') : '?index'),
    r !== '/' && (v.pathname = v.pathname === '/' ? r : fl([r, v.pathname])),
    Vn(v)
  );
}
function ty(c, { relative: o } = {}) {
  let r = A.useContext(Dh);
  Nt(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: f } = wh('useViewTransitionState'),
    m = $n(c, { relative: o });
  if (!r.isTransitioning) return !1;
  let v = sl(r.currentLocation.pathname, f) || r.currentLocation.pathname,
    b = sl(r.nextLocation.pathname, f) || r.nextLocation.pathname;
  return _i(m.pathname, b) != null || _i(m.pathname, v) != null;
}
const ey = '_menu_fvuuk_1',
  ly = '_menu__nav_fvuuk_17',
  ay = '_menu__list_fvuuk_24',
  ny = '_menu__link_fvuuk_33',
  uy = '_menu__footer_fvuuk_59',
  iy = '_footer_btn_fvuuk_66',
  Ft = {
    'menu': ey,
    'menu--open': '_menu--open_fvuuk_14',
    'menu__nav': ly,
    'menu__list': ay,
    'menu__link': ny,
    'menu__link--active': '_menu__link--active_fvuuk_49',
    'menu__footer': uy,
    'footer_btn': iy,
    'footer_btn--active': '_footer_btn--active_fvuuk_87',
  },
  Zh =
    "data:image/svg+xml,%3csvg%20width='16'%20height='14'%20viewBox='0%200%2016%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.296%200.332589C9.82592%200.113015%2010.3939%200%2010.9675%200C11.5411%200%2012.1091%200.113015%2012.6391%200.332589C13.169%200.552163%2013.6504%200.873992%2014.056%201.27969C14.4615%201.68515%2014.7833%202.16654%2015.0028%202.69636C15.2224%203.22628%2015.3354%203.79427%2015.3354%204.36788C15.3354%204.9415%2015.2224%205.50949%2015.0028%206.03941C14.7833%206.56928%2014.4615%207.05071%2014.0558%207.45619C14.0558%207.45623%2014.0559%207.45615%2014.0558%207.45619L8.1625%2013.3495C7.88913%2013.6229%207.44592%2013.6229%207.17255%2013.3495L1.27922%207.45619C0.460149%206.63712%200%205.52622%200%204.36788C0%203.20954%200.460149%202.09865%201.27922%201.27958C2.09829%200.460505%203.20919%200.000356495%204.36753%200.000356495C5.52587%200.000356495%206.63676%200.460505%207.45583%201.27958L7.66753%201.49127L7.8791%201.27969C7.87906%201.27973%207.87914%201.27965%207.8791%201.27969C8.28459%200.874047%208.76613%200.552142%209.296%200.332589ZM13.0658%202.26941C12.7903%201.99378%2012.4632%201.77513%2012.1031%201.62596C11.7431%201.47678%2011.3572%201.4%2010.9675%201.4C10.5778%201.4%2010.1919%201.47678%209.83191%201.62596C9.47189%201.77513%209.14478%201.99378%208.86928%202.26941L8.1625%202.97619C7.88913%203.24956%207.44592%203.24956%207.17255%202.97619L6.46589%202.26953C5.90937%201.71301%205.15456%201.40036%204.36753%201.40036C3.58049%201.40036%202.82569%201.71301%202.26917%202.26953C1.71265%202.82604%201.4%203.58085%201.4%204.36788C1.4%205.15492%201.71265%205.90972%202.26917%206.46624L7.66753%2011.8646L13.0659%206.46624C13.3415%206.19074%2013.5603%205.86352%2013.7095%205.5035C13.8586%205.14347%2013.9354%204.75759%2013.9354%204.36788C13.9354%203.97818%2013.8586%203.59229%2013.7095%203.23227C13.5603%202.87224%2013.3414%202.54491%2013.0658%202.26941Z'%20fill='%23F1F2F9'/%3e%3c/svg%3e",
  Vh =
    "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.46683%200.933323C3.59273%200.765453%203.79032%200.666656%204.00016%200.666656H12.0002C12.21%200.666656%2012.4076%200.765453%2012.5335%200.933323L14.5335%203.59999C14.62%203.71539%2014.6668%203.85574%2014.6668%203.99999V13.3333C14.6668%2013.8638%2014.4561%2014.3725%2014.081%2014.7475C13.706%2015.1226%2013.1973%2015.3333%2012.6668%2015.3333H3.3335C2.80306%2015.3333%202.29436%2015.1226%201.91928%2014.7475C1.54421%2014.3725%201.3335%2013.8638%201.3335%2013.3333V3.99999C1.3335%203.85574%201.38028%203.71539%201.46683%203.59999L3.46683%200.933323ZM4.3335%201.99999L2.66683%204.22221V13.3333C2.66683%2013.5101%202.73707%2013.6797%202.86209%2013.8047C2.98712%2013.9298%203.15669%2014%203.3335%2014H12.6668C12.8436%2014%2013.0132%2013.9298%2013.1382%2013.8047C13.2633%2013.6797%2013.3335%2013.5101%2013.3335%2013.3333V4.22221L11.6668%201.99999H4.3335Z'%20fill='%23F1F2F9'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M1.3335%204.00001C1.3335%203.63182%201.63197%203.33334%202.00016%203.33334H14.0002C14.3684%203.33334%2014.6668%203.63182%2014.6668%204.00001C14.6668%204.3682%2014.3684%204.66668%2014.0002%204.66668H2.00016C1.63197%204.66668%201.3335%204.3682%201.3335%204.00001Z'%20fill='%23F1F2F9'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.33341%206C5.7016%206%206.00008%206.29848%206.00008%206.66667C6.00008%207.1971%206.21079%207.70581%206.58587%208.08088C6.96094%208.45595%207.46965%208.66667%208.00008%208.66667C8.53051%208.66667%209.03922%208.45595%209.41429%208.08088C9.78937%207.70581%2010.0001%207.1971%2010.0001%206.66667C10.0001%206.29848%2010.2986%206%2010.6667%206C11.0349%206%2011.3334%206.29848%2011.3334%206.66667C11.3334%207.55072%2010.9822%208.39857%2010.3571%209.02369C9.73198%209.64881%208.88414%2010%208.00008%2010C7.11603%2010%206.26818%209.64881%205.64306%209.02369C5.01794%208.39857%204.66675%207.55072%204.66675%206.66667C4.66675%206.29848%204.96522%206%205.33341%206Z'%20fill='%23F1F2F9'/%3e%3c/svg%3e",
  cy = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Phones', path: '/phones' },
    { id: 3, name: 'Tablets', path: '/tablets' },
    { id: 4, name: 'Accessories', path: '/accessories' },
  ],
  fy = ({ isOpen: c, onClose: o }) =>
    d.jsxs('div', {
      className: `${Ft.menu} ${c ? Ft['menu--open'] : ''}`,
      children: [
        d.jsx('nav', {
          className: Ft.menu__nav,
          children: d.jsx('ul', {
            className: Ft.menu__list,
            children: cy.map((r) =>
              d.jsx(
                'li',
                {
                  className: Ft.menu__item,
                  children: d.jsx(la, {
                    to: r.path,
                    className: ({ isActive: f }) =>
                      f ?
                        `${Ft.menu__link} ${Ft['menu__link--active']}`
                      : Ft.menu__link,
                    onClick: o,
                    children: r.name,
                  }),
                },
                r.id,
              ),
            ),
          }),
        }),
        d.jsxs('div', {
          className: Ft.menu__footer,
          children: [
            d.jsx(la, {
              to: '/favorites',
              className: ({ isActive: r }) =>
                r ?
                  `${Ft.footer_btn} ${Ft['footer_btn--active']}`
                : Ft.footer_btn,
              onClick: o,
              children: d.jsx('img', { src: Zh, alt: 'Favorites' }),
            }),
            d.jsx(la, {
              to: '/cart',
              className: ({ isActive: r }) =>
                r ?
                  `${Ft.footer_btn} ${Ft['footer_btn--active']}`
                : Ft.footer_btn,
              onClick: o,
              children: d.jsx('img', { src: Vh, alt: 'Cart' }),
            }),
          ],
        }),
      ],
    }),
  sy = '_header_17x9z_1',
  oy = '_header__container_17x9z_16',
  ry = '_header__left_17x9z_23',
  dy = '_header__right_17x9z_23',
  hy = '_header__logo_17x9z_27',
  my = '_header__nav_17x9z_49',
  vy = '_header__icons_17x9z_64',
  yy = '_header__burger_17x9z_72',
  _y = '_nav_list_17x9z_92',
  gy = '_nav_list__item_17x9z_109',
  py = '_nav_list__link_17x9z_113',
  by = '_icon_btn_17x9z_141',
  Sy = '_burger_icon_17x9z_177',
  Ut = {
    'header': sy,
    'header__container': oy,
    'header__left': ry,
    'header__right': dy,
    'header__logo': hy,
    'header__nav': my,
    'header__icons': vy,
    'header__burger': yy,
    'nav_list': _y,
    'nav_list__item': gy,
    'nav_list__link': py,
    'nav_list__link--active': '_nav_list__link--active_17x9z_128',
    'icon_btn': by,
    'icon_btn--active': '_icon_btn--active_17x9z_160',
    'burger_icon': Sy,
    'burger_icon--active': '_burger_icon--active_17x9z_194',
  },
  Ey = '/assets/logo-CxS9TFyQ.svg',
  xy = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Phones', path: '/phones' },
    { id: 3, name: 'Tablets', path: '/tablets' },
    { id: 4, name: 'Accessories', path: '/accessories' },
  ],
  Ty = () => {
    const [c, o] = A.useState(!1);
    A.useEffect(
      () => (
        c ?
          (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'unset'),
        () => {
          document.body.style.overflow = 'unset';
        }
      ),
      [c],
    );
    const r = () => {
      o((f) => !f);
    };
    return d.jsxs(d.Fragment, {
      children: [
        d.jsx('header', {
          className: Ut.header,
          children: d.jsxs('div', {
            className: Ut.header__container,
            children: [
              d.jsxs('div', {
                className: Ut.header__left,
                children: [
                  d.jsx(as, {
                    to: '/',
                    className: Ut.header__logo,
                    onClick: () => o(!1),
                    children: d.jsx('img', { src: Ey, alt: 'Nice Gadgets' }),
                  }),
                  d.jsx('nav', {
                    className: Ut.header__nav,
                    children: d.jsx('ul', {
                      className: Ut.nav_list,
                      children: xy.map((f) =>
                        d.jsx(
                          'li',
                          {
                            className: Ut.nav_list__item,
                            children: d.jsx(la, {
                              to: f.path,
                              className: ({ isActive: m }) =>
                                m ?
                                  `${Ut.nav_list__link} ${Ut['nav_list__link--active']}`
                                : Ut.nav_list__link,
                              children: f.name,
                            }),
                          },
                          f.id,
                        ),
                      ),
                    }),
                  }),
                ],
              }),
              d.jsxs('div', {
                className: Ut.header__right,
                children: [
                  d.jsxs('div', {
                    className: Ut.header__icons,
                    children: [
                      d.jsx(la, {
                        to: '/favorites',
                        className: ({ isActive: f }) =>
                          f ?
                            `${Ut.icon_btn} ${Ut['icon_btn--active']}`
                          : Ut.icon_btn,
                        children: d.jsx('img', { src: Zh, alt: 'Favorites' }),
                      }),
                      d.jsx(la, {
                        to: '/cart',
                        className: ({ isActive: f }) =>
                          f ?
                            `${Ut.icon_btn} ${Ut['icon_btn--active']}`
                          : Ut.icon_btn,
                        children: d.jsx('img', { src: Vh, alt: 'Cart' }),
                      }),
                    ],
                  }),
                  d.jsx('button', {
                    'className': Ut.header__burger,
                    'onClick': r,
                    'aria-label': 'Toggle menu',
                    'children': d.jsxs('div', {
                      className: `${Ut.burger_icon} ${c ? Ut['burger_icon--active'] : ''}`,
                      children: [
                        d.jsx('span', {}),
                        d.jsx('span', {}),
                        d.jsx('span', {}),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        d.jsx(fy, { isOpen: c, onClose: () => o(!1) }),
      ],
    });
  },
  zy = '_footer_7q96a_1',
  Ny = '_container_7q96a_7',
  Ay = '_logo_7q96a_13',
  jy = '_nav_7q96a_19',
  Cy = '_back_7q96a_37',
  Ry = '_arrow_7q96a_47',
  wa = { footer: zy, container: Ny, logo: Ay, nav: jy, back: Cy, arrow: Ry },
  Oy = '/assets/logo-BX5z9YCI.svg',
  My = () => {
    const c = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return d.jsx('footer', {
      className: wa.footer,
      children: d.jsxs('div', {
        className: wa.container,
        children: [
          d.jsx('img', { src: Oy, alt: 'Nice Gadgets', className: wa.logo }),
          d.jsxs('nav', {
            className: wa.nav,
            children: [
              d.jsx('a', {
                href: 'https://github.com/Team-Project-Phone-catalog/phone-catalog-frontend',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: 'GITHUB',
              }),
              d.jsx('a', { href: '#', children: 'CONTACTS' }),
              d.jsx('a', { href: '#', children: 'RIGHTS' }),
            ],
          }),
          d.jsxs('div', {
            className: wa.back,
            children: [
              d.jsx('span', { children: 'Back to top' }),
              d.jsx('button', {
                type: 'button',
                onClick: c,
                className: wa.arrow,
                children: '↑',
              }),
            ],
          }),
        ],
      }),
    });
  },
  ns = () => fetch('/api/phones.json').then((c) => c.json()),
  us = () => fetch('/api/tablets.json').then((c) => c.json()),
  is = () => fetch('/api/accessories.json').then((c) => c.json()),
  Dy = () => fetch('/api/products.json').then((c) => c.json()),
  Uy = ({ currentPrice: c, fullPrice: o }) =>
    d.jsxs('p', {
      className: 'product-price',
      children: [
        d.jsxs('span', {
          className: 'product-price__current',
          children: ['$', c],
        }),
        d.jsxs('span', {
          className: 'product-price__full',
          children: ['$', o],
        }),
      ],
    }),
  mi = (c) => c.split(' ').slice(0, 2).join(' '),
  Hy = ({
    screen: c,
    capacity: o,
    ram: r,
    resolution: f,
    showTopLine: m = !0,
  }) =>
    d.jsxs('div', {
      className: `product-features ${m ? '' : 'product-features--no-line'}`,
      children: [
        d.jsxs('p', {
          className: 'product-features__item',
          children: [
            d.jsx('span', {
              className: 'product-features__name',
              children: 'Screen',
            }),
            d.jsx('span', {
              className: 'product-features__value',
              children: mi(c),
            }),
          ],
        }),
        f &&
          d.jsxs('p', {
            className: 'product-features__item',
            children: [
              d.jsx('span', {
                className: 'product-features__name',
                children: 'Resolution',
              }),
              d.jsx('span', {
                className: 'product-features__value',
                children: mi(f),
              }),
            ],
          }),
        d.jsxs('p', {
          className: 'product-features__item',
          children: [
            d.jsx('span', {
              className: 'product-features__name',
              children: 'Capacity',
            }),
            d.jsx('span', {
              className: 'product-features__value',
              children: mi(o),
            }),
          ],
        }),
        d.jsxs('p', {
          className: 'product-features__item',
          children: [
            d.jsx('span', {
              className: 'product-features__name',
              children: 'RAM',
            }),
            d.jsx('span', {
              className: 'product-features__value',
              children: mi(r),
            }),
          ],
        }),
      ],
    }),
  By = ({ onAddToCart: c, onToggleFavorite: o, isFavorite: r }) =>
    d.jsxs('div', {
      className: 'product-actions',
      children: [
        d.jsx('button', {
          type: 'button',
          className: 'product-actions__add-to-cart',
          onClick: c,
          children: 'Add to cart',
        }),
        d.jsx('button', {
          'type': 'button',
          'className': `product-actions__favorites ${r ? 'product-actions__favorites--active' : ''}`,
          'onClick': o,
          'aria-label': r ? 'Remove from favorites' : 'Add to favorites',
        }),
      ],
    }),
  Za = ({ product: c, onFavoriteChange: o }) => {
    const [r, f] = A.useState(() =>
      c ?
        JSON.parse(localStorage.getItem('favorites') || '[]').includes(
          String(c.id),
        )
      : !1,
    );
    if (!c) return null;
    const m = c.priceDiscount ?? ('price' in c ? c.price : void 0),
      v = c.priceRegular ?? ('fullPrice' in c ? c.fullPrice : void 0),
      b = 'images' in c ? c.images[0] : c.image,
      j = b ? `/${b}` : null,
      S = () => {
        const _ = JSON.parse(localStorage.getItem('favorites') || '[]');
        let O;
        (_.includes(String(c.id)) ?
          (O = _.filter((z) => z !== String(c.id)))
        : ((O = [..._, String(c.id)]), console.log('added')),
          localStorage.setItem('favorites', JSON.stringify(O)),
          f(!r),
          o?.());
      };
    return d.jsx('div', {
      className: 'card',
      children: d.jsxs('div', {
        className: 'card__container',
        children: [
          d.jsx('div', {
            className: 'card__img-container',
            children:
              j &&
              d.jsx('img', { className: 'card__image', src: j, alt: c.name }),
          }),
          d.jsx('div', {
            className: 'card__title-wrapper',
            children: d.jsx('h2', {
              className: 'card__title',
              children: c.name,
            }),
          }),
          d.jsx(Uy, { currentPrice: m, fullPrice: v }),
          d.jsx(Hy, { screen: c.screen, capacity: c.capacity, ram: c.ram }),
          d.jsx(By, {
            onAddToCart: () => console.log('Added to cart'),
            onToggleFavorite: S,
            isFavorite: r,
          }),
        ],
      }),
    });
  },
  qy = '_title_pc0jx_17',
  Yy = '_modelsCount_pc0jx_28',
  Ly = '_controls_pc0jx_36',
  Gy = '_control_pc0jx_36',
  Xy = '_label_pc0jx_45',
  Qy = '_select_pc0jx_49',
  It = {
    'phones-page__container': '_phones-page__container_pc0jx_1',
    'phones-page': '_phones-page_pc0jx_1',
    'title': qy,
    'modelsCount': Yy,
    'phones-page__controls': '_phones-page__controls_pc0jx_33',
    'controls': Ly,
    'control': Gy,
    'label': Xy,
    'select': Qy,
    'phones-page__list': '_phones-page__list_pc0jx_63',
  },
  wy = () => {
    const [c, o] = A.useState([]);
    return (
      A.useEffect(() => {
        (async () => {
          const f = await ns();
          o(f);
        })();
      }, []),
      d.jsx('div', {
        className: It['phones-page'],
        children: d.jsxs('div', {
          className: It['phones-page__container'],
          children: [
            d.jsx('h1', { className: It.title, children: 'Mobile phones' }),
            d.jsxs('p', {
              className: It.modelsCount,
              children: [c.length, ' models'],
            }),
            d.jsx('section', {
              className: It['phones-page__controls'],
              children: d.jsxs('div', {
                className: It.controls,
                children: [
                  d.jsxs('div', {
                    className: It.control,
                    children: [
                      d.jsx('label', {
                        className: It.label,
                        children: 'Sort by',
                      }),
                      d.jsxs('select', {
                        className: It.select,
                        children: [
                          d.jsx('option', { children: 'Newest' }),
                          d.jsx('option', { children: 'Alphabetically' }),
                          d.jsx('option', { children: 'Cheapest' }),
                        ],
                      }),
                    ],
                  }),
                  d.jsxs('div', {
                    className: It.control,
                    children: [
                      d.jsx('label', {
                        className: It.label,
                        children: 'Items on page',
                      }),
                      d.jsxs('select', {
                        className: It.select,
                        children: [
                          d.jsx('option', { children: '16' }),
                          d.jsx('option', { children: '32' }),
                          d.jsx('option', { children: '64' }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            d.jsx('section', {
              className: It['phones-page__list'],
              children: c.map((r) =>
                d.jsx(
                  'div',
                  {
                    className: It['phones-page__item'],
                    children: d.jsx(Za, { product: r }),
                  },
                  r.id,
                ),
              ),
            }),
            d.jsx('section', { className: It['phones-page__pagination'] }),
          ],
        }),
      })
    );
  },
  Zy = '_title_1vwnt_17',
  Vy = '_modelsCount_1vwnt_27',
  Ky = '_controls_1vwnt_35',
  Jy = '_control_1vwnt_35',
  $y = '_label_1vwnt_44',
  Wy = '_select_1vwnt_48',
  ce = {
    'accessories-page__container': '_accessories-page__container_1vwnt_1',
    'accessories-page': '_accessories-page_1vwnt_1',
    'title': Zy,
    'modelsCount': Vy,
    'accessories-page__controls': '_accessories-page__controls_1vwnt_32',
    'controls': Ky,
    'control': Jy,
    'label': $y,
    'select': Wy,
    'accessories-page__list': '_accessories-page__list_1vwnt_62',
  },
  ky = () => {
    const [c, o] = A.useState([]);
    return (
      A.useEffect(() => {
        (async () => {
          const f = await is();
          o(f);
        })();
      }, []),
      d.jsx('div', {
        className: ce['accessories-page'],
        children: d.jsxs('div', {
          className: ce['accessories-page__container'],
          children: [
            d.jsx('h1', { className: ce.title, children: 'Accessories' }),
            d.jsxs('p', {
              className: ce.modelsCount,
              children: [c.length, ' models'],
            }),
            d.jsx('section', {
              className: ce['accessories-page__controls'],
              children: d.jsxs('div', {
                className: ce.controls,
                children: [
                  d.jsxs('div', {
                    className: ce.control,
                    children: [
                      d.jsx('label', {
                        className: ce.label,
                        children: 'Sort by',
                      }),
                      d.jsxs('select', {
                        className: ce.select,
                        children: [
                          d.jsx('option', { children: 'Newest' }),
                          d.jsx('option', { children: 'Alphabetically' }),
                          d.jsx('option', { children: 'Cheapest' }),
                        ],
                      }),
                    ],
                  }),
                  d.jsxs('div', {
                    className: ce.control,
                    children: [
                      d.jsx('label', {
                        className: ce.label,
                        children: 'Items on page',
                      }),
                      d.jsxs('select', {
                        className: ce.select,
                        children: [
                          d.jsx('option', { children: '16' }),
                          d.jsx('option', { children: '32' }),
                          d.jsx('option', { children: '64' }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            d.jsx('section', {
              className: ce['accessories-page__list'],
              children: c.map((r) => d.jsx(Za, { product: r }, r.id)),
            }),
            d.jsx('section', { className: ce['accessories-page__pagination'] }),
          ],
        }),
      })
    );
  },
  Fy = '_cart_1xti1_8',
  Iy = '_title_1xti1_24',
  Py = '_cartContent_1xti1_44',
  t2 = '_products_1xti1_70',
  e2 = '_summary_1xti1_81',
  wn = { cart: Fy, title: Iy, cartContent: Py, products: t2, summary: e2 },
  l2 = '_block_1xzjy_1',
  a2 = '_price_1xzjy_7',
  n2 = '_info_1xzjy_17',
  u2 = '_button_1xzjy_24',
  i2 = '_buttonCheck_1xzjy_33',
  Zn = { block: l2, price: a2, info: n2, button: u2, buttonCheck: i2 },
  c2 = () =>
    d.jsxs('div', {
      className: Zn.block,
      children: [
        d.jsx('h2', { className: Zn.price, children: '$2656' }),
        d.jsx('p', { className: Zn.info, children: 'Total for 3 items' }),
        d.jsx('div', {
          className: Zn.button,
          children: d.jsx('button', {
            className: Zn.buttonCheck,
            children: 'Checkout',
          }),
        }),
      ],
    }),
  f2 = '_item_18h8g_1',
  s2 = '_remove_18h8g_19',
  o2 = '_imageWrapper_18h8g_37',
  r2 = '_image_18h8g_37',
  d2 = '_details_18h8g_57',
  h2 = '_name_18h8g_68',
  m2 = '_controls_18h8g_76',
  v2 = '_quantity_18h8g_91',
  y2 = '_btnPlus_18h8g_102',
  _2 = '_btnMinus_18h8g_112',
  g2 = '_count_18h8g_122',
  p2 = '_price_18h8g_128',
  Re = {
    item: f2,
    remove: s2,
    imageWrapper: o2,
    image: r2,
    details: d2,
    name: h2,
    controls: m2,
    quantity: v2,
    btnPlus: y2,
    btnMinus: _2,
    count: g2,
    price: p2,
  },
  $f = () =>
    d.jsxs('div', {
      className: Re.item,
      children: [
        d.jsx('button', {
          className: Re.remove,
          type: 'button',
          children: 'x',
        }),
        d.jsx('div', {
          className: Re.imageWrapper,
          children: d.jsx('img', {
            src: '/img/phones/apple-iphone-14-pro/spaceblack/00.webp',
            alt: 'Apple iPhone 14 Pro',
            className: Re.image,
          }),
        }),
        d.jsx('div', {
          className: Re.details,
          children: d.jsx('h3', {
            className: Re.name,
            children: 'Apple iPhone 14 Pro 128GB Silver (MQ023)',
          }),
        }),
        d.jsxs('div', {
          className: Re.controls,
          children: [
            d.jsxs('div', {
              className: Re.quantity,
              children: [
                d.jsx('button', { className: Re.btnMinus, children: '-' }),
                d.jsx('span', { className: Re.count, children: '1' }),
                d.jsx('button', { className: Re.btnPlus, children: '+' }),
              ],
            }),
            d.jsx('p', { className: Re.price, children: '$999' }),
          ],
        }),
      ],
    }),
  b2 = () =>
    d.jsx('div', {
      className: 'buttonBack',
      children: d.jsx('a', {
        className: 'buttonBackLink',
        href: '#',
        children: 'Back',
      }),
    }),
  S2 = () =>
    d.jsxs('div', {
      className: wn.cart,
      children: [
        d.jsx(b2, {}),
        d.jsx('div', {
          className: wn.title,
          children: d.jsx('h1', { children: 'Cart' }),
        }),
        d.jsxs('div', {
          className: wn.cartContent,
          children: [
            d.jsxs('div', {
              className: wn.products,
              children: [d.jsx($f, {}), d.jsx($f, {}), d.jsx($f, {})],
            }),
            d.jsx('div', { className: wn.summary, children: d.jsx(c2, {}) }),
          ],
        }),
      ],
    }),
  E2 = () =>
    d.jsxs('div', {
      className: 'notFound',
      children: [
        d.jsx('h1', { className: 'title', children: 'Помилка 404' }),
        d.jsx('h2', {
          className: 'title__message',
          children: 'Сторінка не знайдена',
        }),
      ],
    }),
  x2 = '_title_1bu0e_17',
  T2 = '_modelsCount_1bu0e_27',
  z2 = '_controls_1bu0e_35',
  N2 = '_control_1bu0e_35',
  A2 = '_label_1bu0e_44',
  j2 = '_select_1bu0e_48',
  fe = {
    'tablets-page__container': '_tablets-page__container_1bu0e_1',
    'tablets-page': '_tablets-page_1bu0e_1',
    'title': x2,
    'modelsCount': T2,
    'tablets-page__controls': '_tablets-page__controls_1bu0e_32',
    'controls': z2,
    'control': N2,
    'label': A2,
    'select': j2,
    'tablets-page__list': '_tablets-page__list_1bu0e_62',
  },
  C2 = () => {
    const [c, o] = A.useState([]);
    return (
      A.useEffect(() => {
        (async () => {
          const f = await us();
          o(f);
        })();
      }, []),
      d.jsx('div', {
        className: fe['tablets-page'],
        children: d.jsxs('div', {
          className: fe['tablets-page__container'],
          children: [
            d.jsx('h1', { className: fe.title, children: 'Tablets' }),
            d.jsxs('p', {
              className: fe.modelsCount,
              children: [c.length, ' models'],
            }),
            d.jsx('section', {
              className: fe['tablets-page__controls'],
              children: d.jsxs('div', {
                className: fe.controls,
                children: [
                  d.jsxs('div', {
                    className: fe.control,
                    children: [
                      d.jsx('label', {
                        className: fe.label,
                        children: 'Sort by',
                      }),
                      d.jsxs('select', {
                        className: fe.select,
                        children: [
                          d.jsx('option', { children: 'Newest' }),
                          d.jsx('option', { children: 'Alphabetically' }),
                          d.jsx('option', { children: 'Cheapest' }),
                        ],
                      }),
                    ],
                  }),
                  d.jsxs('div', {
                    className: fe.control,
                    children: [
                      d.jsx('label', {
                        className: fe.label,
                        children: 'Items on page',
                      }),
                      d.jsxs('select', {
                        className: fe.select,
                        children: [
                          d.jsx('option', { children: '16' }),
                          d.jsx('option', { children: '32' }),
                          d.jsx('option', { children: '64' }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            d.jsx('section', {
              className: fe['tablets-page__list'],
              children: c.map((r) => d.jsx(Za, { product: r }, r.id)),
            }),
            d.jsx('section', { className: fe['tablets-page__pagination'] }),
          ],
        }),
      })
    );
  },
  R2 = '_home_wddpw_1',
  O2 = '_container_wddpw_12',
  M2 = '_hero_wddpw_28',
  D2 = '_hero__title_wddpw_41',
  U2 = '_hero__slider_wddpw_59',
  H2 = '_hero__arrow_wddpw_63',
  B2 = '_hero__banner_wddpw_98',
  q2 = '_hero__dots_wddpw_206',
  Y2 = '_hero__dot_wddpw_206',
  L2 = '_section_wddpw_235',
  G2 = '_section__header_wddpw_248',
  X2 = '_section__title_wddpw_259',
  Q2 = '_section__arrows_wddpw_274',
  w2 = '_categories_wddpw_332',
  J = {
    'home': R2,
    'container': O2,
    'hero': M2,
    'hero__title': D2,
    'hero__slider': U2,
    'hero__arrow': H2,
    'hero__arrow--left': '_hero__arrow--left_wddpw_89',
    'hero__arrow--right': '_hero__arrow--right_wddpw_94',
    'hero__banner': B2,
    'hero__banner-img': '_hero__banner-img_wddpw_116',
    'hero__dots': q2,
    'hero__dot': Y2,
    'hero__dot--active': '_hero__dot--active_wddpw_227',
    'section': L2,
    'section__header': G2,
    'section__title': X2,
    'section__arrows': Q2,
    'arrow-btn': '_arrow-btn_wddpw_279',
    'products-slider': '_products-slider_wddpw_302',
    'products-slider__track': '_products-slider__track_wddpw_327',
    'categories': w2,
    'category-card': '_category-card_wddpw_350',
    'category-card__image': '_category-card__image_wddpw_356',
    'category-card__image-wrapper': '_category-card__image-wrapper_wddpw_359',
    'category-card__image-tablets': '_category-card__image-tablets_wddpw_385',
    'category-card__image-access': '_category-card__image-access_wddpw_393',
    'category-card__info': '_category-card__info_wddpw_401',
    'category-card__title': '_category-card__title_wddpw_405',
    'category-card__count': '_category-card__count_wddpw_421',
  },
  Z2 = (c) => [...c].sort((o, r) => (r.year || 0) - (o.year || 0)),
  V2 = (c) =>
    [...c].sort((o, r) => {
      const f = (o.priceRegular || 0) - (o.priceDiscount || 0);
      return (r.priceRegular || 0) - (r.priceDiscount || 0) - f;
    }),
  K2 = () => {
    const [c, o] = A.useState([]),
      [r, f] = A.useState([]),
      [m, v] = A.useState([]),
      [b, j] = A.useState([]),
      S = [...c, ...r, ...m],
      _ = Z2(b).slice(0, 12),
      O = V2(S).slice(0, 12);
    return (
      A.useEffect(() => {
        (ns()
          .then(o)
          .catch((z) => console.error('Error loading phones:', z)),
          us()
            .then(f)
            .catch((z) => console.error('Error loading tablets:', z)),
          is()
            .then(v)
            .catch((z) => console.error('Error loading accessories:', z)),
          Dy()
            .then(j)
            .catch((z) => console.error('Error loading accessories:', z)));
      }, []),
      d.jsx('main', {
        className: J.home,
        children: d.jsxs('div', {
          className: J.container,
          children: [
            d.jsxs('section', {
              className: J.hero,
              children: [
                d.jsx('h1', {
                  className: J.hero__title,
                  children: 'Welcome to Nice Gadgets store!',
                }),
                d.jsxs('div', {
                  className: J.hero__slider,
                  children: [
                    d.jsx('button', {
                      'className': `${J.hero__arrow} ${J['hero__arrow--left']}`,
                      'aria-label': 'Previous slide',
                    }),
                    d.jsx('div', {
                      className: J.hero__banner,
                      children: d.jsx('img', {
                        src: '/img/main-banner.png',
                        alt: 'iPhone 14 Pro promotion',
                        className: J['hero__banner-img'],
                      }),
                    }),
                    d.jsx('button', {
                      'className': `${J.hero__arrow} ${J['hero__arrow--right']}`,
                      'aria-label': 'Next slide',
                    }),
                  ],
                }),
                d.jsxs('div', {
                  className: J.hero__dots,
                  children: [
                    d.jsx('button', {
                      'className': `${J.hero__dot} ${J['hero__dot--active']}`,
                      'aria-label': 'Slide 1',
                    }),
                    d.jsx('button', {
                      'className': J.hero__dot,
                      'aria-label': 'Slide 2',
                    }),
                    d.jsx('button', {
                      'className': J.hero__dot,
                      'aria-label': 'Slide 3',
                    }),
                  ],
                }),
              ],
            }),
            d.jsxs('section', {
              className: J.section,
              children: [
                d.jsxs('div', {
                  className: J.section__header,
                  children: [
                    d.jsx('h2', {
                      className: J.section__title,
                      children: 'Brand new models',
                    }),
                    d.jsxs('div', {
                      className: J.section__arrows,
                      children: [
                        d.jsx('button', {
                          'className': J['arrow-btn'],
                          'aria-label': 'Previous',
                        }),
                        d.jsx('button', {
                          'className': J['arrow-btn'],
                          'aria-label': 'Next',
                        }),
                      ],
                    }),
                  ],
                }),
                d.jsx('div', {
                  className: J['products-slider'],
                  children: d.jsx('div', {
                    className: J['products-slider__track'],
                    children: _.map((z) => d.jsx(Za, { product: z }, z.id)),
                  }),
                }),
              ],
            }),
            d.jsxs('section', {
              className: J.section,
              children: [
                d.jsx('h2', {
                  className: J.section__title,
                  children: 'Shop by category',
                }),
                d.jsxs('div', {
                  className: J.categories,
                  children: [
                    d.jsxs('article', {
                      className: J['category-card'],
                      children: [
                        d.jsx('div', {
                          className: J['category-card__image-wrapper'],
                          children: d.jsx('img', {
                            src: '/img/category-phones.png',
                            alt: 'Mobile phones',
                            className: J['category-card__image'],
                          }),
                        }),
                        d.jsxs('div', {
                          className: J['category-card__info'],
                          children: [
                            d.jsx('h3', {
                              className: J['category-card__title'],
                              children: 'Mobile phones',
                            }),
                            d.jsxs('p', {
                              className: J['category-card__count'],
                              children: [c.length, ' models'],
                            }),
                          ],
                        }),
                      ],
                    }),
                    d.jsxs('article', {
                      className: J['category-card'],
                      children: [
                        d.jsx('div', {
                          className: J['category-card__image-wrapper'],
                          children: d.jsx('img', {
                            src: '/img/category-tablets.png',
                            alt: 'Tablets',
                            className: J['category-card__image-tablets'],
                          }),
                        }),
                        d.jsxs('div', {
                          className: J['category-card__info'],
                          children: [
                            d.jsx('h3', {
                              className: J['category-card__title'],
                              children: 'Tablets',
                            }),
                            d.jsxs('p', {
                              className: J['category-card__count'],
                              children: [r.length, ' models'],
                            }),
                          ],
                        }),
                      ],
                    }),
                    d.jsxs('article', {
                      className: J['category-card'],
                      children: [
                        d.jsx('div', {
                          className: J['category-card__image-wrapper'],
                          children: d.jsx('img', {
                            src: '/img/category-accessories.png',
                            alt: 'Accessories',
                            className: J['category-card__image-access'],
                          }),
                        }),
                        d.jsxs('div', {
                          className: J['category-card__info'],
                          children: [
                            d.jsx('h3', {
                              className: J['category-card__title'],
                              children: 'Accessories',
                            }),
                            d.jsxs('p', {
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
            d.jsxs('section', {
              className: J.section,
              children: [
                d.jsxs('div', {
                  className: J.section__header,
                  children: [
                    d.jsx('h2', {
                      className: J.section__title,
                      children: 'Hot prices',
                    }),
                    d.jsxs('div', {
                      className: J.section__arrows,
                      children: [
                        d.jsx('button', {
                          'className': J['arrow-btn'],
                          'aria-label': 'Previous',
                        }),
                        d.jsx('button', {
                          'className': J['arrow-btn'],
                          'aria-label': 'Next',
                        }),
                      ],
                    }),
                  ],
                }),
                d.jsx('div', {
                  className: J['products-slider'],
                  children: d.jsx('div', {
                    className: J['products-slider__track'],
                    children: O.map((z) => d.jsx(Za, { product: z }, z.id)),
                  }),
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  J2 = () => {
    const [c, o] = A.useState([]),
      [, r] = A.useState(!0),
      f = async () => {
        r(!0);
        try {
          const m = JSON.parse(localStorage.getItem('favorites') || '[]'),
            [v, b, j] = await Promise.all([ns(), us(), is()]),
            _ = [...v, ...b, ...j].filter((O) => m.includes('' + O.id));
          o(_);
        } catch (m) {
          console.error('Failed to load favorites:', m);
        } finally {
          r(!1);
        }
      };
    return (
      A.useEffect(() => {
        f();
      }, []),
      d.jsx(d.Fragment, {
        children: d.jsx('div', {
          className: 'favorites-page',
          children: d.jsxs('div', {
            className: 'favorites-page__container',
            children: [
              d.jsx('div', {
                className: 'favorites-page__history',
                children: 'Favourites',
              }),
              d.jsxs('div', {
                className: 'favorites-page__text',
                children: [
                  d.jsx('h1', {
                    className: 'favorites-page__title',
                    children: 'Favourites',
                  }),
                  d.jsxs('div', {
                    className: 'favorites-page__items-number',
                    children: [c.length, ' items'],
                  }),
                ],
              }),
              d.jsx('div', {
                className: 'favorites-page__all-favorites',
                children: c.map((m) =>
                  d.jsx(Za, { product: m, onFavoriteChange: f }, m.id),
                ),
              }),
            ],
          }),
        }),
      })
    );
  },
  $2 = () =>
    d.jsxs('div', {
      className: 'App',
      children: [
        d.jsx(Ty, {}),
        d.jsx('div', {
          className: 'container',
          children: d.jsxs(E1, {
            children: [
              d.jsx(cl, { path: '/', element: d.jsx(K2, {}) }),
              d.jsx(cl, { path: '/phones', element: d.jsx(wy, {}) }),
              d.jsx(cl, { path: '/tablets', element: d.jsx(C2, {}) }),
              d.jsx(cl, { path: '/accessories', element: d.jsx(ky, {}) }),
              d.jsx(cl, { path: '/cart', element: d.jsx(S2, {}) }),
              d.jsx(cl, { path: '/favorites', element: d.jsx(J2, {}) }),
              d.jsx(cl, {
                path: '/product/:productId',
                element: d.jsx('h1', {
                  className: 'title',
                  children: 'Product Details',
                }),
              }),
              d.jsx(cl, { path: '*', element: d.jsx(E2, {}) }),
            ],
          }),
        }),
        d.jsx(My, {}),
      ],
    });
Tv.createRoot(document.getElementById('root')).render(
  d.jsx(K1, { children: d.jsx($2, {}) }),
);
