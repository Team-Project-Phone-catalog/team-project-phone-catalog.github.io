(function () {
  const r = document.createElement('link').relList;
  if (r && r.supports && r.supports('modulepreload')) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) i(c);
  new MutationObserver((c) => {
    for (const f of c)
      if (f.type === 'childList')
        for (const h of f.addedNodes)
          h.tagName === 'LINK' && h.rel === 'modulepreload' && i(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(c) {
    const f = {};
    return (
      c.integrity && (f.integrity = c.integrity),
      c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === 'use-credentials' ? (f.credentials = 'include')
      : c.crossOrigin === 'anonymous' ? (f.credentials = 'omit')
      : (f.credentials = 'same-origin'),
      f
    );
  }
  function i(c) {
    if (c.ep) return;
    c.ep = !0;
    const f = s(c);
    fetch(c.href, f);
  }
})();
function bh(a) {
  return (
      a && a.__esModule && Object.prototype.hasOwnProperty.call(a, 'default')
    ) ?
      a.default
    : a;
}
var po = { exports: {} },
  ei = {};
var Jm;
function Bg() {
  if (Jm) return ei;
  Jm = 1;
  var a = Symbol.for('react.transitional.element'),
    r = Symbol.for('react.fragment');
  function s(i, c, f) {
    var h = null;
    if (
      (f !== void 0 && (h = '' + f),
      c.key !== void 0 && (h = '' + c.key),
      'key' in c)
    ) {
      f = {};
      for (var y in c) y !== 'key' && (f[y] = c[y]);
    } else f = c;
    return (
      (c = f.ref),
      { $$typeof: a, type: i, key: h, ref: c !== void 0 ? c : null, props: f }
    );
  }
  return ((ei.Fragment = r), (ei.jsx = s), (ei.jsxs = s), ei);
}
var Fm;
function Hg() {
  return (Fm || ((Fm = 1), (po.exports = Bg())), po.exports);
}
var g = Hg(),
  vo = { exports: {} },
  ti = {},
  go = { exports: {} },
  yo = {};
var Pm;
function Ug() {
  return (
    Pm ||
      ((Pm = 1),
      (function (a) {
        function r(G, Z) {
          var X = G.length;
          G.push(Z);
          e: for (; 0 < X; ) {
            var ee = (X - 1) >>> 1,
              oe = G[ee];
            if (0 < c(oe, Z)) ((G[ee] = Z), (G[X] = oe), (X = ee));
            else break e;
          }
        }
        function s(G) {
          return G.length === 0 ? null : G[0];
        }
        function i(G) {
          if (G.length === 0) return null;
          var Z = G[0],
            X = G.pop();
          if (X !== Z) {
            G[0] = X;
            e: for (var ee = 0, oe = G.length, M = oe >>> 1; ee < M; ) {
              var $ = 2 * (ee + 1) - 1,
                W = G[$],
                le = $ + 1,
                de = G[le];
              if (0 > c(W, X))
                le < oe && 0 > c(de, W) ?
                  ((G[ee] = de), (G[le] = X), (ee = le))
                : ((G[ee] = W), (G[$] = X), (ee = $));
              else if (le < oe && 0 > c(de, X))
                ((G[ee] = de), (G[le] = X), (ee = le));
              else break e;
            }
          }
          return Z;
        }
        function c(G, Z) {
          var X = G.sortIndex - Z.sortIndex;
          return X !== 0 ? X : G.id - Z.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == 'object' &&
            typeof performance.now == 'function')
        ) {
          var f = performance;
          a.unstable_now = function () {
            return f.now();
          };
        } else {
          var h = Date,
            y = h.now();
          a.unstable_now = function () {
            return h.now() - y;
          };
        }
        var d = [],
          p = [],
          b = 1,
          v = null,
          C = 3,
          S = !1,
          j = !1,
          D = !1,
          z = !1,
          x = typeof setTimeout == 'function' ? setTimeout : null,
          T = typeof clearTimeout == 'function' ? clearTimeout : null,
          O = typeof setImmediate < 'u' ? setImmediate : null;
        function V(G) {
          for (var Z = s(p); Z !== null; ) {
            if (Z.callback === null) i(p);
            else if (Z.startTime <= G)
              (i(p), (Z.sortIndex = Z.expirationTime), r(d, Z));
            else break;
            Z = s(p);
          }
        }
        function k(G) {
          if (((D = !1), V(G), !j))
            if (s(d) !== null) ((j = !0), I || ((I = !0), P()));
            else {
              var Z = s(p);
              Z !== null && pe(k, Z.startTime - G);
            }
        }
        var I = !1,
          K = -1,
          H = 5,
          ne = -1;
        function J() {
          return z ? !0 : !(a.unstable_now() - ne < H);
        }
        function F() {
          if (((z = !1), I)) {
            var G = a.unstable_now();
            ne = G;
            var Z = !0;
            try {
              e: {
                ((j = !1), D && ((D = !1), T(K), (K = -1)), (S = !0));
                var X = C;
                try {
                  t: {
                    for (
                      V(G), v = s(d);
                      v !== null && !(v.expirationTime > G && J());
                    ) {
                      var ee = v.callback;
                      if (typeof ee == 'function') {
                        ((v.callback = null), (C = v.priorityLevel));
                        var oe = ee(v.expirationTime <= G);
                        if (((G = a.unstable_now()), typeof oe == 'function')) {
                          ((v.callback = oe), V(G), (Z = !0));
                          break t;
                        }
                        (v === s(d) && i(d), V(G));
                      } else i(d);
                      v = s(d);
                    }
                    if (v !== null) Z = !0;
                    else {
                      var M = s(p);
                      (M !== null && pe(k, M.startTime - G), (Z = !1));
                    }
                  }
                  break e;
                } finally {
                  ((v = null), (C = X), (S = !1));
                }
                Z = void 0;
              }
            } finally {
              Z ? P() : (I = !1);
            }
          }
        }
        var P;
        if (typeof O == 'function')
          P = function () {
            O(F);
          };
        else if (typeof MessageChannel < 'u') {
          var ue = new MessageChannel(),
            re = ue.port2;
          ((ue.port1.onmessage = F),
            (P = function () {
              re.postMessage(null);
            }));
        } else
          P = function () {
            x(F, 0);
          };
        function pe(G, Z) {
          K = x(function () {
            G(a.unstable_now());
          }, Z);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (G) {
            G.callback = null;
          }),
          (a.unstable_forceFrameRate = function (G) {
            0 > G || 125 < G ?
              console.error(
                'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
              )
            : (H = 0 < G ? Math.floor(1e3 / G) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return C;
          }),
          (a.unstable_next = function (G) {
            switch (C) {
              case 1:
              case 2:
              case 3:
                var Z = 3;
                break;
              default:
                Z = C;
            }
            var X = C;
            C = Z;
            try {
              return G();
            } finally {
              C = X;
            }
          }),
          (a.unstable_requestPaint = function () {
            z = !0;
          }),
          (a.unstable_runWithPriority = function (G, Z) {
            switch (G) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                G = 3;
            }
            var X = C;
            C = G;
            try {
              return Z();
            } finally {
              C = X;
            }
          }),
          (a.unstable_scheduleCallback = function (G, Z, X) {
            var ee = a.unstable_now();
            switch (
              (typeof X == 'object' && X !== null ?
                ((X = X.delay),
                (X = typeof X == 'number' && 0 < X ? ee + X : ee))
              : (X = ee),
              G)
            ) {
              case 1:
                var oe = -1;
                break;
              case 2:
                oe = 250;
                break;
              case 5:
                oe = 1073741823;
                break;
              case 4:
                oe = 1e4;
                break;
              default:
                oe = 5e3;
            }
            return (
              (oe = X + oe),
              (G = {
                id: b++,
                callback: Z,
                priorityLevel: G,
                startTime: X,
                expirationTime: oe,
                sortIndex: -1,
              }),
              X > ee ?
                ((G.sortIndex = X),
                r(p, G),
                s(d) === null &&
                  G === s(p) &&
                  (D ? (T(K), (K = -1)) : (D = !0), pe(k, X - ee)))
              : ((G.sortIndex = oe),
                r(d, G),
                j || S || ((j = !0), I || ((I = !0), P()))),
              G
            );
          }),
          (a.unstable_shouldYield = J),
          (a.unstable_wrapCallback = function (G) {
            var Z = C;
            return function () {
              var X = C;
              C = Z;
              try {
                return G.apply(this, arguments);
              } finally {
                C = X;
              }
            };
          }));
      })(yo)),
    yo
  );
}
var Wm;
function Gg() {
  return (Wm || ((Wm = 1), (go.exports = Ug())), go.exports);
}
var _o = { exports: {} },
  ce = {};
var Im;
function qg() {
  if (Im) return ce;
  Im = 1;
  var a = Symbol.for('react.transitional.element'),
    r = Symbol.for('react.portal'),
    s = Symbol.for('react.fragment'),
    i = Symbol.for('react.strict_mode'),
    c = Symbol.for('react.profiler'),
    f = Symbol.for('react.consumer'),
    h = Symbol.for('react.context'),
    y = Symbol.for('react.forward_ref'),
    d = Symbol.for('react.suspense'),
    p = Symbol.for('react.memo'),
    b = Symbol.for('react.lazy'),
    v = Symbol.for('react.activity'),
    C = Symbol.iterator;
  function S(M) {
    return M === null || typeof M != 'object' ?
        null
      : ((M = (C && M[C]) || M['@@iterator']),
        typeof M == 'function' ? M : null);
  }
  var j = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    D = Object.assign,
    z = {};
  function x(M, $, W) {
    ((this.props = M),
      (this.context = $),
      (this.refs = z),
      (this.updater = W || j));
  }
  ((x.prototype.isReactComponent = {}),
    (x.prototype.setState = function (M, $) {
      if (typeof M != 'object' && typeof M != 'function' && M != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, M, $, 'setState');
    }),
    (x.prototype.forceUpdate = function (M) {
      this.updater.enqueueForceUpdate(this, M, 'forceUpdate');
    }));
  function T() {}
  T.prototype = x.prototype;
  function O(M, $, W) {
    ((this.props = M),
      (this.context = $),
      (this.refs = z),
      (this.updater = W || j));
  }
  var V = (O.prototype = new T());
  ((V.constructor = O), D(V, x.prototype), (V.isPureReactComponent = !0));
  var k = Array.isArray;
  function I() {}
  var K = { H: null, A: null, T: null, S: null },
    H = Object.prototype.hasOwnProperty;
  function ne(M, $, W) {
    var le = W.ref;
    return {
      $$typeof: a,
      type: M,
      key: $,
      ref: le !== void 0 ? le : null,
      props: W,
    };
  }
  function J(M, $) {
    return ne(M.type, $, M.props);
  }
  function F(M) {
    return typeof M == 'object' && M !== null && M.$$typeof === a;
  }
  function P(M) {
    var $ = { '=': '=0', ':': '=2' };
    return (
      '$' +
      M.replace(/[=:]/g, function (W) {
        return $[W];
      })
    );
  }
  var ue = /\/+/g;
  function re(M, $) {
    return typeof M == 'object' && M !== null && M.key != null ?
        P('' + M.key)
      : $.toString(36);
  }
  function pe(M) {
    switch (M.status) {
      case 'fulfilled':
        return M.value;
      case 'rejected':
        throw M.reason;
      default:
        switch (
          (typeof M.status == 'string' ?
            M.then(I, I)
          : ((M.status = 'pending'),
            M.then(
              function ($) {
                M.status === 'pending' &&
                  ((M.status = 'fulfilled'), (M.value = $));
              },
              function ($) {
                M.status === 'pending' &&
                  ((M.status = 'rejected'), (M.reason = $));
              },
            )),
          M.status)
        ) {
          case 'fulfilled':
            return M.value;
          case 'rejected':
            throw M.reason;
        }
    }
    throw M;
  }
  function G(M, $, W, le, de) {
    var ve = typeof M;
    (ve === 'undefined' || ve === 'boolean') && (M = null);
    var Ce = !1;
    if (M === null) Ce = !0;
    else
      switch (ve) {
        case 'bigint':
        case 'string':
        case 'number':
          Ce = !0;
          break;
        case 'object':
          switch (M.$$typeof) {
            case a:
            case r:
              Ce = !0;
              break;
            case b:
              return ((Ce = M._init), G(Ce(M._payload), $, W, le, de));
          }
      }
    if (Ce)
      return (
        (de = de(M)),
        (Ce = le === '' ? '.' + re(M, 0) : le),
        k(de) ?
          ((W = ''),
          Ce != null && (W = Ce.replace(ue, '$&/') + '/'),
          G(de, $, W, '', function (rn) {
            return rn;
          }))
        : de != null &&
          (F(de) &&
            (de = J(
              de,
              W +
                (de.key == null || (M && M.key === de.key) ?
                  ''
                : ('' + de.key).replace(ue, '$&/') + '/') +
                Ce,
            )),
          $.push(de)),
        1
      );
    Ce = 0;
    var st = le === '' ? '.' : le + ':';
    if (k(M))
      for (var Ue = 0; Ue < M.length; Ue++)
        ((le = M[Ue]), (ve = st + re(le, Ue)), (Ce += G(le, $, W, ve, de)));
    else if (((Ue = S(M)), typeof Ue == 'function'))
      for (M = Ue.call(M), Ue = 0; !(le = M.next()).done; )
        ((le = le.value),
          (ve = st + re(le, Ue++)),
          (Ce += G(le, $, W, ve, de)));
    else if (ve === 'object') {
      if (typeof M.then == 'function') return G(pe(M), $, W, le, de);
      throw (
        ($ = String(M)),
        Error(
          'Objects are not valid as a React child (found: ' +
            ($ === '[object Object]' ?
              'object with keys {' + Object.keys(M).join(', ') + '}'
            : $) +
            '). If you meant to render a collection of children, use an array instead.',
        )
      );
    }
    return Ce;
  }
  function Z(M, $, W) {
    if (M == null) return M;
    var le = [],
      de = 0;
    return (
      G(M, le, '', '', function (ve) {
        return $.call(W, ve, de++);
      }),
      le
    );
  }
  function X(M) {
    if (M._status === -1) {
      var $ = M._result;
      (($ = $()),
        $.then(
          function (W) {
            (M._status === 0 || M._status === -1) &&
              ((M._status = 1), (M._result = W));
          },
          function (W) {
            (M._status === 0 || M._status === -1) &&
              ((M._status = 2), (M._result = W));
          },
        ),
        M._status === -1 && ((M._status = 0), (M._result = $)));
    }
    if (M._status === 1) return M._result.default;
    throw M._result;
  }
  var ee =
      typeof reportError == 'function' ? reportError : (
        function (M) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var $ = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                (
                  typeof M == 'object' &&
                  M !== null &&
                  typeof M.message == 'string'
                ) ?
                  String(M.message)
                : String(M),
              error: M,
            });
            if (!window.dispatchEvent($)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', M);
            return;
          }
          console.error(M);
        }
      ),
    oe = {
      map: Z,
      forEach: function (M, $, W) {
        Z(
          M,
          function () {
            $.apply(this, arguments);
          },
          W,
        );
      },
      count: function (M) {
        var $ = 0;
        return (
          Z(M, function () {
            $++;
          }),
          $
        );
      },
      toArray: function (M) {
        return (
          Z(M, function ($) {
            return $;
          }) || []
        );
      },
      only: function (M) {
        if (!F(M))
          throw Error(
            'React.Children.only expected to receive a single React element child.',
          );
        return M;
      },
    };
  return (
    (ce.Activity = v),
    (ce.Children = oe),
    (ce.Component = x),
    (ce.Fragment = s),
    (ce.Profiler = c),
    (ce.PureComponent = O),
    (ce.StrictMode = i),
    (ce.Suspense = d),
    (ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K),
    (ce.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (M) {
        return K.H.useMemoCache(M);
      },
    }),
    (ce.cache = function (M) {
      return function () {
        return M.apply(null, arguments);
      };
    }),
    (ce.cacheSignal = function () {
      return null;
    }),
    (ce.cloneElement = function (M, $, W) {
      if (M == null)
        throw Error(
          'The argument must be a React element, but you passed ' + M + '.',
        );
      var le = D({}, M.props),
        de = M.key;
      if ($ != null)
        for (ve in ($.key !== void 0 && (de = '' + $.key), $))
          !H.call($, ve) ||
            ve === 'key' ||
            ve === '__self' ||
            ve === '__source' ||
            (ve === 'ref' && $.ref === void 0) ||
            (le[ve] = $[ve]);
      var ve = arguments.length - 2;
      if (ve === 1) le.children = W;
      else if (1 < ve) {
        for (var Ce = Array(ve), st = 0; st < ve; st++)
          Ce[st] = arguments[st + 2];
        le.children = Ce;
      }
      return ne(M.type, de, le);
    }),
    (ce.createContext = function (M) {
      return (
        (M = {
          $$typeof: h,
          _currentValue: M,
          _currentValue2: M,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (M.Provider = M),
        (M.Consumer = { $$typeof: f, _context: M }),
        M
      );
    }),
    (ce.createElement = function (M, $, W) {
      var le,
        de = {},
        ve = null;
      if ($ != null)
        for (le in ($.key !== void 0 && (ve = '' + $.key), $))
          H.call($, le) &&
            le !== 'key' &&
            le !== '__self' &&
            le !== '__source' &&
            (de[le] = $[le]);
      var Ce = arguments.length - 2;
      if (Ce === 1) de.children = W;
      else if (1 < Ce) {
        for (var st = Array(Ce), Ue = 0; Ue < Ce; Ue++)
          st[Ue] = arguments[Ue + 2];
        de.children = st;
      }
      if (M && M.defaultProps)
        for (le in ((Ce = M.defaultProps), Ce))
          de[le] === void 0 && (de[le] = Ce[le]);
      return ne(M, ve, de);
    }),
    (ce.createRef = function () {
      return { current: null };
    }),
    (ce.forwardRef = function (M) {
      return { $$typeof: y, render: M };
    }),
    (ce.isValidElement = F),
    (ce.lazy = function (M) {
      return { $$typeof: b, _payload: { _status: -1, _result: M }, _init: X };
    }),
    (ce.memo = function (M, $) {
      return { $$typeof: p, type: M, compare: $ === void 0 ? null : $ };
    }),
    (ce.startTransition = function (M) {
      var $ = K.T,
        W = {};
      K.T = W;
      try {
        var le = M(),
          de = K.S;
        (de !== null && de(W, le),
          typeof le == 'object' &&
            le !== null &&
            typeof le.then == 'function' &&
            le.then(I, ee));
      } catch (ve) {
        ee(ve);
      } finally {
        ($ !== null && W.types !== null && ($.types = W.types), (K.T = $));
      }
    }),
    (ce.unstable_useCacheRefresh = function () {
      return K.H.useCacheRefresh();
    }),
    (ce.use = function (M) {
      return K.H.use(M);
    }),
    (ce.useActionState = function (M, $, W) {
      return K.H.useActionState(M, $, W);
    }),
    (ce.useCallback = function (M, $) {
      return K.H.useCallback(M, $);
    }),
    (ce.useContext = function (M) {
      return K.H.useContext(M);
    }),
    (ce.useDebugValue = function () {}),
    (ce.useDeferredValue = function (M, $) {
      return K.H.useDeferredValue(M, $);
    }),
    (ce.useEffect = function (M, $) {
      return K.H.useEffect(M, $);
    }),
    (ce.useEffectEvent = function (M) {
      return K.H.useEffectEvent(M);
    }),
    (ce.useId = function () {
      return K.H.useId();
    }),
    (ce.useImperativeHandle = function (M, $, W) {
      return K.H.useImperativeHandle(M, $, W);
    }),
    (ce.useInsertionEffect = function (M, $) {
      return K.H.useInsertionEffect(M, $);
    }),
    (ce.useLayoutEffect = function (M, $) {
      return K.H.useLayoutEffect(M, $);
    }),
    (ce.useMemo = function (M, $) {
      return K.H.useMemo(M, $);
    }),
    (ce.useOptimistic = function (M, $) {
      return K.H.useOptimistic(M, $);
    }),
    (ce.useReducer = function (M, $, W) {
      return K.H.useReducer(M, $, W);
    }),
    (ce.useRef = function (M) {
      return K.H.useRef(M);
    }),
    (ce.useState = function (M) {
      return K.H.useState(M);
    }),
    (ce.useSyncExternalStore = function (M, $, W) {
      return K.H.useSyncExternalStore(M, $, W);
    }),
    (ce.useTransition = function () {
      return K.H.useTransition();
    }),
    (ce.version = '19.2.4'),
    ce
  );
}
var eh;
function Ho() {
  return (eh || ((eh = 1), (_o.exports = qg())), _o.exports);
}
var bo = { exports: {} },
  it = {};
var th;
function Yg() {
  if (th) return it;
  th = 1;
  var a = Ho();
  function r(d) {
    var p = 'https://react.dev/errors/' + d;
    if (1 < arguments.length) {
      p += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        p += '&args[]=' + encodeURIComponent(arguments[b]);
    }
    return (
      'Minified React error #' +
      d +
      '; visit ' +
      p +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function s() {}
  var i = {
      d: {
        f: s,
        r: function () {
          throw Error(r(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for('react.portal');
  function f(d, p, b) {
    var v =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: v == null ? null : '' + v,
      children: d,
      containerInfo: p,
      implementation: b,
    };
  }
  var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(d, p) {
    if (d === 'font') return '';
    if (typeof p == 'string') return p === 'use-credentials' ? p : '';
  }
  return (
    (it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (it.createPortal = function (d, p) {
      var b =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(r(299));
      return f(d, p, null, b);
    }),
    (it.flushSync = function (d) {
      var p = h.T,
        b = i.p;
      try {
        if (((h.T = null), (i.p = 2), d)) return d();
      } finally {
        ((h.T = p), (i.p = b), i.d.f());
      }
    }),
    (it.preconnect = function (d, p) {
      typeof d == 'string' &&
        (p ?
          ((p = p.crossOrigin),
          (p =
            typeof p == 'string' ?
              p === 'use-credentials' ?
                p
              : ''
            : void 0))
        : (p = null),
        i.d.C(d, p));
    }),
    (it.prefetchDNS = function (d) {
      typeof d == 'string' && i.d.D(d);
    }),
    (it.preinit = function (d, p) {
      if (typeof d == 'string' && p && typeof p.as == 'string') {
        var b = p.as,
          v = y(b, p.crossOrigin),
          C = typeof p.integrity == 'string' ? p.integrity : void 0,
          S = typeof p.fetchPriority == 'string' ? p.fetchPriority : void 0;
        b === 'style' ?
          i.d.S(d, typeof p.precedence == 'string' ? p.precedence : void 0, {
            crossOrigin: v,
            integrity: C,
            fetchPriority: S,
          })
        : b === 'script' &&
          i.d.X(d, {
            crossOrigin: v,
            integrity: C,
            fetchPriority: S,
            nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
          });
      }
    }),
    (it.preinitModule = function (d, p) {
      if (typeof d == 'string')
        if (typeof p == 'object' && p !== null) {
          if (p.as == null || p.as === 'script') {
            var b = y(p.as, p.crossOrigin);
            i.d.M(d, {
              crossOrigin: b,
              integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
              nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
            });
          }
        } else p == null && i.d.M(d);
    }),
    (it.preload = function (d, p) {
      if (
        typeof d == 'string' &&
        typeof p == 'object' &&
        p !== null &&
        typeof p.as == 'string'
      ) {
        var b = p.as,
          v = y(b, p.crossOrigin);
        i.d.L(d, b, {
          crossOrigin: v,
          integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
          nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
          type: typeof p.type == 'string' ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == 'string' ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == 'string' ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == 'string' ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == 'string' ? p.imageSizes : void 0,
          media: typeof p.media == 'string' ? p.media : void 0,
        });
      }
    }),
    (it.preloadModule = function (d, p) {
      if (typeof d == 'string')
        if (p) {
          var b = y(p.as, p.crossOrigin);
          i.d.m(d, {
            as: typeof p.as == 'string' && p.as !== 'script' ? p.as : void 0,
            crossOrigin: b,
            integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
          });
        } else i.d.m(d);
    }),
    (it.requestFormReset = function (d) {
      i.d.r(d);
    }),
    (it.unstable_batchedUpdates = function (d, p) {
      return d(p);
    }),
    (it.useFormState = function (d, p, b) {
      return h.H.useFormState(d, p, b);
    }),
    (it.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (it.version = '19.2.4'),
    it
  );
}
var lh;
function Vg() {
  if (lh) return bo.exports;
  lh = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return (a(), (bo.exports = Yg()), bo.exports);
}
var ah;
function Xg() {
  if (ah) return ti;
  ah = 1;
  var a = Gg(),
    r = Ho(),
    s = Vg();
  function i(e) {
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
  function c(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function f(e) {
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
  function h(e) {
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
  function y(e) {
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
  function d(e) {
    if (f(e) !== e) throw Error(i(188));
  }
  function p(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = f(e)), t === null)) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var l = e, n = t; ; ) {
      var u = l.return;
      if (u === null) break;
      var o = u.alternate;
      if (o === null) {
        if (((n = u.return), n !== null)) {
          l = n;
          continue;
        }
        break;
      }
      if (u.child === o.child) {
        for (o = u.child; o; ) {
          if (o === l) return (d(u), e);
          if (o === n) return (d(u), t);
          o = o.sibling;
        }
        throw Error(i(188));
      }
      if (l.return !== n.return) ((l = u), (n = o));
      else {
        for (var m = !1, _ = u.child; _; ) {
          if (_ === l) {
            ((m = !0), (l = u), (n = o));
            break;
          }
          if (_ === n) {
            ((m = !0), (n = u), (l = o));
            break;
          }
          _ = _.sibling;
        }
        if (!m) {
          for (_ = o.child; _; ) {
            if (_ === l) {
              ((m = !0), (l = o), (n = u));
              break;
            }
            if (_ === n) {
              ((m = !0), (n = o), (l = u));
              break;
            }
            _ = _.sibling;
          }
          if (!m) throw Error(i(189));
        }
      }
      if (l.alternate !== n) throw Error(i(190));
    }
    if (l.tag !== 3) throw Error(i(188));
    return l.stateNode.current === l ? e : t;
  }
  function b(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = b(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var v = Object.assign,
    C = Symbol.for('react.element'),
    S = Symbol.for('react.transitional.element'),
    j = Symbol.for('react.portal'),
    D = Symbol.for('react.fragment'),
    z = Symbol.for('react.strict_mode'),
    x = Symbol.for('react.profiler'),
    T = Symbol.for('react.consumer'),
    O = Symbol.for('react.context'),
    V = Symbol.for('react.forward_ref'),
    k = Symbol.for('react.suspense'),
    I = Symbol.for('react.suspense_list'),
    K = Symbol.for('react.memo'),
    H = Symbol.for('react.lazy'),
    ne = Symbol.for('react.activity'),
    J = Symbol.for('react.memo_cache_sentinel'),
    F = Symbol.iterator;
  function P(e) {
    return e === null || typeof e != 'object' ?
        null
      : ((e = (F && e[F]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var ue = Symbol.for('react.client.reference');
  function re(e) {
    if (e == null) return null;
    if (typeof e == 'function')
      return e.$$typeof === ue ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case D:
        return 'Fragment';
      case x:
        return 'Profiler';
      case z:
        return 'StrictMode';
      case k:
        return 'Suspense';
      case I:
        return 'SuspenseList';
      case ne:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case j:
          return 'Portal';
        case O:
          return e.displayName || 'Context';
        case T:
          return (e._context.displayName || 'Context') + '.Consumer';
        case V:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case K:
          return (
            (t = e.displayName || null),
            t !== null ? t : re(e.type) || 'Memo'
          );
        case H:
          ((t = e._payload), (e = e._init));
          try {
            return re(e(t));
          } catch {}
      }
    return null;
  }
  var pe = Array.isArray,
    G = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Z = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    X = { pending: !1, data: null, method: null, action: null },
    ee = [],
    oe = -1;
  function M(e) {
    return { current: e };
  }
  function $(e) {
    0 > oe || ((e.current = ee[oe]), (ee[oe] = null), oe--);
  }
  function W(e, t) {
    (oe++, (ee[oe] = e.current), (e.current = t));
  }
  var le = M(null),
    de = M(null),
    ve = M(null),
    Ce = M(null);
  function st(e, t) {
    switch ((W(ve, t), W(de, e), W(le, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? ym(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = ym(t)), (e = _m(t, e)));
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
    ($(le), W(le, e));
  }
  function Ue() {
    ($(le), $(de), $(ve));
  }
  function rn(e) {
    e.memoizedState !== null && W(Ce, e);
    var t = le.current,
      l = _m(t, e.type);
    t !== l && (W(de, e), W(le, l));
  }
  function mi(e) {
    (de.current === e && ($(le), $(de)),
      Ce.current === e && ($(Ce), (Fn._currentValue = X)));
  }
  var Fs, ko;
  function kl(e) {
    if (Fs === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        ((Fs = (t && t[1]) || ''),
          (ko =
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
      Fs +
      e +
      ko
    );
  }
  var Ps = !1;
  function Ws(e, t) {
    if (!e || Ps) return '';
    Ps = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var Q = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(Q.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Q, []);
                } catch (U) {
                  var B = U;
                }
                Reflect.construct(e, [], Q);
              } else {
                try {
                  Q.call();
                } catch (U) {
                  B = U;
                }
                e.call(Q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                B = U;
              }
              (Q = e()) &&
                typeof Q.catch == 'function' &&
                Q.catch(function () {});
            }
          } catch (U) {
            if (U && B && typeof U.stack == 'string') return [U.stack, B.stack];
          }
          return [null, null];
        },
      };
      n.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var u = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        'name',
      );
      u &&
        u.configurable &&
        Object.defineProperty(n.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var o = n.DetermineComponentFrameRoot(),
        m = o[0],
        _ = o[1];
      if (m && _) {
        var E = m.split(`
`),
          w = _.split(`
`);
        for (
          u = n = 0;
          n < E.length && !E[n].includes('DetermineComponentFrameRoot');
        )
          n++;
        for (; u < w.length && !w[u].includes('DetermineComponentFrameRoot'); )
          u++;
        if (n === E.length || u === w.length)
          for (
            n = E.length - 1, u = w.length - 1;
            1 <= n && 0 <= u && E[n] !== w[u];
          )
            u--;
        for (; 1 <= n && 0 <= u; n--, u--)
          if (E[n] !== w[u]) {
            if (n !== 1 || u !== 1)
              do
                if ((n--, u--, 0 > u || E[n] !== w[u])) {
                  var q =
                    `
` + E[n].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      q.includes('<anonymous>') &&
                      (q = q.replace('<anonymous>', e.displayName)),
                    q
                  );
                }
              while (1 <= n && 0 <= u);
            break;
          }
      }
    } finally {
      ((Ps = !1), (Error.prepareStackTrace = l));
    }
    return (l = e ? e.displayName || e.name : '') ? kl(l) : '';
  }
  function mp(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return kl(e.type);
      case 16:
        return kl('Lazy');
      case 13:
        return e.child !== t && t !== null ?
            kl('Suspense Fallback')
          : kl('Suspense');
      case 19:
        return kl('SuspenseList');
      case 0:
      case 15:
        return Ws(e.type, !1);
      case 11:
        return Ws(e.type.render, !1);
      case 1:
        return Ws(e.type, !0);
      case 31:
        return kl('Activity');
      default:
        return '';
    }
  }
  function Ko(e) {
    try {
      var t = '',
        l = null;
      do ((t += mp(e, l)), (l = e), (e = e.return));
      while (e);
      return t;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  var Is = Object.prototype.hasOwnProperty,
    er = a.unstable_scheduleCallback,
    tr = a.unstable_cancelCallback,
    hp = a.unstable_shouldYield,
    pp = a.unstable_requestPaint,
    gt = a.unstable_now,
    vp = a.unstable_getCurrentPriorityLevel,
    Jo = a.unstable_ImmediatePriority,
    Fo = a.unstable_UserBlockingPriority,
    hi = a.unstable_NormalPriority,
    gp = a.unstable_LowPriority,
    Po = a.unstable_IdlePriority,
    yp = a.log,
    _p = a.unstable_setDisableYieldValue,
    un = null,
    yt = null;
  function _l(e) {
    if (
      (typeof yp == 'function' && _p(e),
      yt && typeof yt.setStrictMode == 'function')
    )
      try {
        yt.setStrictMode(un, e);
      } catch {}
  }
  var _t = Math.clz32 ? Math.clz32 : xp,
    bp = Math.log,
    Sp = Math.LN2;
  function xp(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((bp(e) / Sp) | 0)) | 0);
  }
  var pi = 256,
    vi = 262144,
    gi = 4194304;
  function Kl(e) {
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
  function yi(e, t, l) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var u = 0,
      o = e.suspendedLanes,
      m = e.pingedLanes;
    e = e.warmLanes;
    var _ = n & 134217727;
    return (
      _ !== 0 ?
        ((n = _ & ~o),
        n !== 0 ?
          (u = Kl(n))
        : ((m &= _),
          m !== 0 ? (u = Kl(m)) : l || ((l = _ & ~e), l !== 0 && (u = Kl(l)))))
      : ((_ = n & ~o),
        _ !== 0 ? (u = Kl(_))
        : m !== 0 ? (u = Kl(m))
        : l || ((l = n & ~e), l !== 0 && (u = Kl(l)))),
      u === 0 ? 0
      : (
        t !== 0 &&
        t !== u &&
        (t & o) === 0 &&
        ((o = u & -u),
        (l = t & -t),
        o >= l || (o === 32 && (l & 4194048) !== 0))
      ) ?
        t
      : u
    );
  }
  function on(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Tp(e, t) {
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
  function Wo() {
    var e = gi;
    return ((gi <<= 1), (gi & 62914560) === 0 && (gi = 4194304), e);
  }
  function lr(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function cn(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Ep(e, t, l, n, u, o) {
    var m = e.pendingLanes;
    ((e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0));
    var _ = e.entanglements,
      E = e.expirationTimes,
      w = e.hiddenUpdates;
    for (l = m & ~l; 0 < l; ) {
      var q = 31 - _t(l),
        Q = 1 << q;
      ((_[q] = 0), (E[q] = -1));
      var B = w[q];
      if (B !== null)
        for (w[q] = null, q = 0; q < B.length; q++) {
          var U = B[q];
          U !== null && (U.lane &= -536870913);
        }
      l &= ~Q;
    }
    (n !== 0 && Io(e, n, 0),
      o !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= o & ~(m & ~t)));
  }
  function Io(e, t, l) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var n = 31 - _t(t);
    ((e.entangledLanes |= t),
      (e.entanglements[n] = e.entanglements[n] | 1073741824 | (l & 261930)));
  }
  function ec(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var n = 31 - _t(l),
        u = 1 << n;
      ((u & t) | (e[n] & t) && (e[n] |= t), (l &= ~u));
    }
  }
  function tc(e, t) {
    var l = t & -t;
    return (
      (l = (l & 42) !== 0 ? 1 : ar(l)),
      (l & (e.suspendedLanes | t)) !== 0 ? 0 : l
    );
  }
  function ar(e) {
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
  function nr(e) {
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
  function lc() {
    var e = Z.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Vm(e.type));
  }
  function ac(e, t) {
    var l = Z.p;
    try {
      return ((Z.p = e), t());
    } finally {
      Z.p = l;
    }
  }
  var bl = Math.random().toString(36).slice(2),
    et = '__reactFiber$' + bl,
    ct = '__reactProps$' + bl,
    ya = '__reactContainer$' + bl,
    ir = '__reactEvents$' + bl,
    Cp = '__reactListeners$' + bl,
    Mp = '__reactHandles$' + bl,
    nc = '__reactResources$' + bl,
    fn = '__reactMarker$' + bl;
  function sr(e) {
    (delete e[et], delete e[ct], delete e[ir], delete e[Cp], delete e[Mp]);
  }
  function _a(e) {
    var t = e[et];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[ya] || l[et])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = Mm(e); e !== null; ) {
            if ((l = e[et])) return l;
            e = Mm(e);
          }
        return t;
      }
      ((e = l), (l = e.parentNode));
    }
    return null;
  }
  function ba(e) {
    if ((e = e[et] || e[ya])) {
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
  function dn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Sa(e) {
    var t = e[nc];
    return (
      t ||
        (t = e[nc] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Ke(e) {
    e[fn] = !0;
  }
  var ic = new Set(),
    sc = {};
  function Jl(e, t) {
    (xa(e, t), xa(e + 'Capture', t));
  }
  function xa(e, t) {
    for (sc[e] = t, e = 0; e < t.length; e++) ic.add(t[e]);
  }
  var Ap = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    rc = {},
    uc = {};
  function zp(e) {
    return (
      Is.call(uc, e) ? !0
      : Is.call(rc, e) ? !1
      : Ap.test(e) ? (uc[e] = !0)
      : ((rc[e] = !0), !1)
    );
  }
  function _i(e, t, l) {
    if (zp(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t);
            return;
          case 'boolean':
            var n = t.toLowerCase().slice(0, 5);
            if (n !== 'data-' && n !== 'aria-') {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, '' + l);
      }
  }
  function bi(e, t, l) {
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
  function Pt(e, t, l, n) {
    if (n === null) e.removeAttribute(l);
    else {
      switch (typeof n) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, '' + n);
    }
  }
  function zt(e) {
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
  function oc(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    );
  }
  function Np(e, t, l) {
    var n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof n < 'u' &&
      typeof n.get == 'function' &&
      typeof n.set == 'function'
    ) {
      var u = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (m) {
            ((l = '' + m), o.call(this, m));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (m) {
            l = '' + m;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function rr(e) {
    if (!e._valueTracker) {
      var t = oc(e) ? 'checked' : 'value';
      e._valueTracker = Np(e, t, '' + e[t]);
    }
  }
  function cc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      n = '';
    return (
      e &&
        (n =
          oc(e) ?
            e.checked ?
              'true'
            : 'false'
          : e.value),
      (e = n),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function Si(e) {
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
  var Op = /[\n"\\]/g;
  function Nt(e) {
    return e.replace(Op, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function ur(e, t, l, n, u, o, m, _) {
    ((e.name = ''),
      (
        m != null &&
        typeof m != 'function' &&
        typeof m != 'symbol' &&
        typeof m != 'boolean'
      ) ?
        (e.type = m)
      : e.removeAttribute('type'),
      t != null ?
        m === 'number' ?
          ((t === 0 && e.value === '') || e.value != t) &&
          (e.value = '' + zt(t))
        : e.value !== '' + zt(t) && (e.value = '' + zt(t))
      : (m !== 'submit' && m !== 'reset') || e.removeAttribute('value'),
      t != null ? or(e, m, zt(t))
      : l != null ? or(e, m, zt(l))
      : n != null && e.removeAttribute('value'),
      u == null && o != null && (e.defaultChecked = !!o),
      u != null &&
        (e.checked = u && typeof u != 'function' && typeof u != 'symbol'),
      (
        _ != null &&
        typeof _ != 'function' &&
        typeof _ != 'symbol' &&
        typeof _ != 'boolean'
      ) ?
        (e.name = '' + zt(_))
      : e.removeAttribute('name'));
  }
  function fc(e, t, l, n, u, o, m, _) {
    if (
      (o != null &&
        typeof o != 'function' &&
        typeof o != 'symbol' &&
        typeof o != 'boolean' &&
        (e.type = o),
      t != null || l != null)
    ) {
      if (!((o !== 'submit' && o !== 'reset') || t != null)) {
        rr(e);
        return;
      }
      ((l = l != null ? '' + zt(l) : ''),
        (t = t != null ? '' + zt(t) : l),
        _ || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = n ?? u),
      (n = typeof n != 'function' && typeof n != 'symbol' && !!n),
      (e.checked = _ ? e.checked : !!n),
      (e.defaultChecked = !!n),
      m != null &&
        typeof m != 'function' &&
        typeof m != 'symbol' &&
        typeof m != 'boolean' &&
        (e.name = m),
      rr(e));
  }
  function or(e, t, l) {
    (t === 'number' && Si(e.ownerDocument) === e) ||
      e.defaultValue === '' + l ||
      (e.defaultValue = '' + l);
  }
  function Ta(e, t, l, n) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < l.length; u++) t['$' + l[u]] = !0;
      for (l = 0; l < e.length; l++)
        ((u = t.hasOwnProperty('$' + e[l].value)),
          e[l].selected !== u && (e[l].selected = u),
          u && n && (e[l].defaultSelected = !0));
    } else {
      for (l = '' + zt(l), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === l) {
          ((e[u].selected = !0), n && (e[u].defaultSelected = !0));
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function dc(e, t, l) {
    if (
      t != null &&
      ((t = '' + zt(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? '' + zt(l) : '';
  }
  function mc(e, t, l, n) {
    if (t == null) {
      if (n != null) {
        if (l != null) throw Error(i(92));
        if (pe(n)) {
          if (1 < n.length) throw Error(i(93));
          n = n[0];
        }
        l = n;
      }
      (l == null && (l = ''), (t = l));
    }
    ((l = zt(t)),
      (e.defaultValue = l),
      (n = e.textContent),
      n === l && n !== '' && n !== null && (e.value = n),
      rr(e));
  }
  function Ea(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var jp = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' ',
    ),
  );
  function hc(e, t, l) {
    var n = t.indexOf('--') === 0;
    l == null || typeof l == 'boolean' || l === '' ?
      n ? e.setProperty(t, '')
      : t === 'float' ? (e.cssFloat = '')
      : (e[t] = '')
    : n ? e.setProperty(t, l)
    : typeof l != 'number' || l === 0 || jp.has(t) ?
      t === 'float' ?
        (e.cssFloat = l)
      : (e[t] = ('' + l).trim())
    : (e[t] = l + 'px');
  }
  function pc(e, t, l) {
    if (t != null && typeof t != 'object') throw Error(i(62));
    if (((e = e.style), l != null)) {
      for (var n in l)
        !l.hasOwnProperty(n) ||
          (t != null && t.hasOwnProperty(n)) ||
          (n.indexOf('--') === 0 ? e.setProperty(n, '')
          : n === 'float' ? (e.cssFloat = '')
          : (e[n] = ''));
      for (var u in t)
        ((n = t[u]), t.hasOwnProperty(u) && l[u] !== n && hc(e, u, n));
    } else for (var o in t) t.hasOwnProperty(o) && hc(e, o, t[o]);
  }
  function cr(e) {
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
  var Dp = new Map([
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
    Rp =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function xi(e) {
    return Rp.test('' + e) ?
        "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Wt() {}
  var fr = null;
  function dr(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ca = null,
    Ma = null;
  function vc(e) {
    var t = ba(e);
    if (t && (e = t.stateNode)) {
      var l = e[ct] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (ur(
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
                'input[name="' + Nt('' + t) + '"][type="radio"]',
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var n = l[t];
              if (n !== e && n.form === e.form) {
                var u = n[ct] || null;
                if (!u) throw Error(i(90));
                ur(
                  n,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (t = 0; t < l.length; t++)
              ((n = l[t]), n.form === e.form && cc(n));
          }
          break e;
        case 'textarea':
          dc(e, l.value, l.defaultValue);
          break e;
        case 'select':
          ((t = l.value), t != null && Ta(e, !!l.multiple, t, !1));
      }
    }
  }
  var mr = !1;
  function gc(e, t, l) {
    if (mr) return e(t, l);
    mr = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (
        ((mr = !1),
        (Ca !== null || Ma !== null) &&
          (os(), Ca && ((t = Ca), (e = Ma), (Ma = Ca = null), vc(t), e)))
      )
        for (t = 0; t < e.length; t++) vc(e[t]);
    }
  }
  function mn(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var n = l[ct] || null;
    if (n === null) return null;
    l = n[t];
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
        ((n = !n.disabled) ||
          ((e = e.type),
          (n = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !n));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != 'function') throw Error(i(231, t, typeof l));
    return l;
  }
  var It = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    hr = !1;
  if (It)
    try {
      var hn = {};
      (Object.defineProperty(hn, 'passive', {
        get: function () {
          hr = !0;
        },
      }),
        window.addEventListener('test', hn, hn),
        window.removeEventListener('test', hn, hn));
    } catch {
      hr = !1;
    }
  var Sl = null,
    pr = null,
    Ti = null;
  function yc() {
    if (Ti) return Ti;
    var e,
      t = pr,
      l = t.length,
      n,
      u = 'value' in Sl ? Sl.value : Sl.textContent,
      o = u.length;
    for (e = 0; e < l && t[e] === u[e]; e++);
    var m = l - e;
    for (n = 1; n <= m && t[l - n] === u[o - n]; n++);
    return (Ti = u.slice(e, 1 < n ? 1 - n : void 0));
  }
  function Ei(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ?
        ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ci() {
    return !0;
  }
  function _c() {
    return !1;
  }
  function ft(e) {
    function t(l, n, u, o, m) {
      ((this._reactName = l),
        (this._targetInst = u),
        (this.type = n),
        (this.nativeEvent = o),
        (this.target = m),
        (this.currentTarget = null));
      for (var _ in e)
        e.hasOwnProperty(_) && ((l = e[_]), (this[_] = l ? l(o) : o[_]));
      return (
        (this.isDefaultPrevented =
          (
            o.defaultPrevented != null ?
              o.defaultPrevented
            : o.returnValue === !1
          ) ?
            Ci
          : _c),
        (this.isPropagationStopped = _c),
        this
      );
    }
    return (
      v(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault ?
              l.preventDefault()
            : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
            (this.isDefaultPrevented = Ci));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation ?
              l.stopPropagation()
            : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
            (this.isPropagationStopped = Ci));
        },
        persist: function () {},
        isPersistent: Ci,
      }),
      t
    );
  }
  var Fl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Mi = ft(Fl),
    pn = v({}, Fl, { view: 0, detail: 0 }),
    Lp = ft(pn),
    vr,
    gr,
    vn,
    Ai = v({}, pn, {
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
      getModifierState: _r,
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
          : (e !== vn &&
              (vn && e.type === 'mousemove' ?
                ((vr = e.screenX - vn.screenX), (gr = e.screenY - vn.screenY))
              : (gr = vr = 0),
              (vn = e)),
            vr);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : gr;
      },
    }),
    bc = ft(Ai),
    wp = v({}, Ai, { dataTransfer: 0 }),
    Bp = ft(wp),
    Hp = v({}, pn, { relatedTarget: 0 }),
    yr = ft(Hp),
    Up = v({}, Fl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Gp = ft(Up),
    qp = v({}, Fl, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Yp = ft(qp),
    Vp = v({}, Fl, { data: 0 }),
    Sc = ft(Vp),
    Xp = {
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
    Qp = {
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
    Zp = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function $p(e) {
    var t = this.nativeEvent;
    return (
      t.getModifierState ? t.getModifierState(e)
      : (e = Zp[e]) ? !!t[e]
      : !1
    );
  }
  function _r() {
    return $p;
  }
  var kp = v({}, pn, {
      key: function (e) {
        if (e.key) {
          var t = Xp[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return (
          e.type === 'keypress' ?
            ((e = Ei(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup' ?
            Qp[e.keyCode] || 'Unidentified'
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
      getModifierState: _r,
      charCode: function (e) {
        return e.type === 'keypress' ? Ei(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return (
          e.type === 'keypress' ? Ei(e)
          : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode
          : 0
        );
      },
    }),
    Kp = ft(kp),
    Jp = v({}, Ai, {
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
    xc = ft(Jp),
    Fp = v({}, pn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: _r,
    }),
    Pp = ft(Fp),
    Wp = v({}, Fl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ip = ft(Wp),
    ev = v({}, Ai, {
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
    tv = ft(ev),
    lv = v({}, Fl, { newState: 0, oldState: 0 }),
    av = ft(lv),
    nv = [9, 13, 27, 32],
    br = It && 'CompositionEvent' in window,
    gn = null;
  It && 'documentMode' in document && (gn = document.documentMode);
  var iv = It && 'TextEvent' in window && !gn,
    Tc = It && (!br || (gn && 8 < gn && 11 >= gn)),
    Ec = ' ',
    Cc = !1;
  function Mc(e, t) {
    switch (e) {
      case 'keyup':
        return nv.indexOf(t.keyCode) !== -1;
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
  function Ac(e) {
    return (
      (e = e.detail),
      typeof e == 'object' && 'data' in e ? e.data : null
    );
  }
  var Aa = !1;
  function sv(e, t) {
    switch (e) {
      case 'compositionend':
        return Ac(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Cc = !0), Ec);
      case 'textInput':
        return ((e = t.data), e === Ec && Cc ? null : e);
      default:
        return null;
    }
  }
  function rv(e, t) {
    if (Aa)
      return e === 'compositionend' || (!br && Mc(e, t)) ?
          ((e = yc()), (Ti = pr = Sl = null), (Aa = !1), e)
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
        return Tc && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var uv = {
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
  function zc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!uv[e.type] : t === 'textarea';
  }
  function Nc(e, t, l, n) {
    (Ca ?
      Ma ? Ma.push(n)
      : (Ma = [n])
    : (Ca = n),
      (t = vs(t, 'onChange')),
      0 < t.length &&
        ((l = new Mi('onChange', 'change', null, l, n)),
        e.push({ event: l, listeners: t })));
  }
  var yn = null,
    _n = null;
  function ov(e) {
    dm(e, 0);
  }
  function zi(e) {
    var t = dn(e);
    if (cc(t)) return e;
  }
  function Oc(e, t) {
    if (e === 'change') return t;
  }
  var jc = !1;
  if (It) {
    var Sr;
    if (It) {
      var xr = 'oninput' in document;
      if (!xr) {
        var Dc = document.createElement('div');
        (Dc.setAttribute('oninput', 'return;'),
          (xr = typeof Dc.oninput == 'function'));
      }
      Sr = xr;
    } else Sr = !1;
    jc = Sr && (!document.documentMode || 9 < document.documentMode);
  }
  function Rc() {
    yn && (yn.detachEvent('onpropertychange', Lc), (_n = yn = null));
  }
  function Lc(e) {
    if (e.propertyName === 'value' && zi(_n)) {
      var t = [];
      (Nc(t, _n, e, dr(e)), gc(ov, t));
    }
  }
  function cv(e, t, l) {
    e === 'focusin' ?
      (Rc(), (yn = t), (_n = l), yn.attachEvent('onpropertychange', Lc))
    : e === 'focusout' && Rc();
  }
  function fv(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return zi(_n);
  }
  function dv(e, t) {
    if (e === 'click') return zi(t);
  }
  function mv(e, t) {
    if (e === 'input' || e === 'change') return zi(t);
  }
  function hv(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var bt = typeof Object.is == 'function' ? Object.is : hv;
  function bn(e, t) {
    if (bt(e, t)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      n = Object.keys(t);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var u = l[n];
      if (!Is.call(t, u) || !bt(e[u], t[u])) return !1;
    }
    return !0;
  }
  function wc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Bc(e, t) {
    var l = wc(e);
    e = 0;
    for (var n; l; ) {
      if (l.nodeType === 3) {
        if (((n = e + l.textContent.length), e <= t && n >= t))
          return { node: l, offset: t - e };
        e = n;
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
      l = wc(l);
    }
  }
  function Hc(e, t) {
    return (
      e && t ?
        e === t ? !0
        : e && e.nodeType === 3 ? !1
        : t && t.nodeType === 3 ? Hc(e, t.parentNode)
        : 'contains' in e ? e.contains(t)
        : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1
    );
  }
  function Uc(e) {
    e =
      (
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
      ) ?
        e.ownerDocument.defaultView
      : window;
    for (var t = Si(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == 'string';
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = Si(e.document);
    }
    return t;
  }
  function Tr(e) {
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
  var pv = It && 'documentMode' in document && 11 >= document.documentMode,
    za = null,
    Er = null,
    Sn = null,
    Cr = !1;
  function Gc(e, t, l) {
    var n =
      l.window === l ? l.document
      : l.nodeType === 9 ? l
      : l.ownerDocument;
    Cr ||
      za == null ||
      za !== Si(n) ||
      ((n = za),
      'selectionStart' in n && Tr(n) ?
        (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
      (Sn && bn(Sn, n)) ||
        ((Sn = n),
        (n = vs(Er, 'onSelect')),
        0 < n.length &&
          ((t = new Mi('onSelect', 'select', null, t, l)),
          e.push({ event: t, listeners: n }),
          (t.target = za))));
  }
  function Pl(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l['Webkit' + e] = 'webkit' + t),
      (l['Moz' + e] = 'moz' + t),
      l
    );
  }
  var Na = {
      animationend: Pl('Animation', 'AnimationEnd'),
      animationiteration: Pl('Animation', 'AnimationIteration'),
      animationstart: Pl('Animation', 'AnimationStart'),
      transitionrun: Pl('Transition', 'TransitionRun'),
      transitionstart: Pl('Transition', 'TransitionStart'),
      transitioncancel: Pl('Transition', 'TransitionCancel'),
      transitionend: Pl('Transition', 'TransitionEnd'),
    },
    Mr = {},
    qc = {};
  It &&
    ((qc = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Na.animationend.animation,
      delete Na.animationiteration.animation,
      delete Na.animationstart.animation),
    'TransitionEvent' in window || delete Na.transitionend.transition);
  function Wl(e) {
    if (Mr[e]) return Mr[e];
    if (!Na[e]) return e;
    var t = Na[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in qc) return (Mr[e] = t[l]);
    return e;
  }
  var Yc = Wl('animationend'),
    Vc = Wl('animationiteration'),
    Xc = Wl('animationstart'),
    vv = Wl('transitionrun'),
    gv = Wl('transitionstart'),
    yv = Wl('transitioncancel'),
    Qc = Wl('transitionend'),
    Zc = new Map(),
    Ar =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  Ar.push('scrollEnd');
  function qt(e, t) {
    (Zc.set(e, t), Jl(t, [e]));
  }
  var Ni =
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
    Ot = [],
    Oa = 0,
    zr = 0;
  function Oi() {
    for (var e = Oa, t = (zr = Oa = 0); t < e; ) {
      var l = Ot[t];
      Ot[t++] = null;
      var n = Ot[t];
      Ot[t++] = null;
      var u = Ot[t];
      Ot[t++] = null;
      var o = Ot[t];
      if (((Ot[t++] = null), n !== null && u !== null)) {
        var m = n.pending;
        (m === null ? (u.next = u) : ((u.next = m.next), (m.next = u)),
          (n.pending = u));
      }
      o !== 0 && $c(l, u, o);
    }
  }
  function ji(e, t, l, n) {
    ((Ot[Oa++] = e),
      (Ot[Oa++] = t),
      (Ot[Oa++] = l),
      (Ot[Oa++] = n),
      (zr |= n),
      (e.lanes |= n),
      (e = e.alternate),
      e !== null && (e.lanes |= n));
  }
  function Nr(e, t, l, n) {
    return (ji(e, t, l, n), Di(e));
  }
  function Il(e, t) {
    return (ji(e, null, null, t), Di(e));
  }
  function $c(e, t, l) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l);
    for (var u = !1, o = e.return; o !== null; )
      ((o.childLanes |= l),
        (n = o.alternate),
        n !== null && (n.childLanes |= l),
        o.tag === 22 &&
          ((e = o.stateNode), e === null || e._visibility & 1 || (u = !0)),
        (e = o),
        (o = o.return));
    return e.tag === 3 ?
        ((o = e.stateNode),
        u &&
          t !== null &&
          ((u = 31 - _t(l)),
          (e = o.hiddenUpdates),
          (n = e[u]),
          n === null ? (e[u] = [t]) : n.push(t),
          (t.lane = l | 536870912)),
        o)
      : null;
  }
  function Di(e) {
    if (50 < Xn) throw ((Xn = 0), (Uu = null), Error(i(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var ja = {};
  function _v(e, t, l, n) {
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
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function St(e, t, l, n) {
    return new _v(e, t, l, n);
  }
  function Or(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function el(e, t) {
    var l = e.alternate;
    return (
      l === null ?
        ((l = St(e.tag, t, e.key, e.mode)),
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
  function kc(e, t) {
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
  function Ri(e, t, l, n, u, o) {
    var m = 0;
    if (((n = e), typeof e == 'function')) Or(e) && (m = 1);
    else if (typeof e == 'string')
      m =
        Eg(e, l, le.current) ? 26
        : e === 'html' || e === 'head' || e === 'body' ? 27
        : 5;
    else
      e: switch (e) {
        case ne:
          return (
            (e = St(31, l, t, u)),
            (e.elementType = ne),
            (e.lanes = o),
            e
          );
        case D:
          return ea(l.children, u, o, t);
        case z:
          ((m = 8), (u |= 24));
          break;
        case x:
          return (
            (e = St(12, l, t, u | 2)),
            (e.elementType = x),
            (e.lanes = o),
            e
          );
        case k:
          return ((e = St(13, l, t, u)), (e.elementType = k), (e.lanes = o), e);
        case I:
          return ((e = St(19, l, t, u)), (e.elementType = I), (e.lanes = o), e);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case O:
                m = 10;
                break e;
              case T:
                m = 9;
                break e;
              case V:
                m = 11;
                break e;
              case K:
                m = 14;
                break e;
              case H:
                ((m = 16), (n = null));
                break e;
            }
          ((m = 29),
            (l = Error(i(130, e === null ? 'null' : typeof e, ''))),
            (n = null));
      }
    return (
      (t = St(m, l, t, u)),
      (t.elementType = e),
      (t.type = n),
      (t.lanes = o),
      t
    );
  }
  function ea(e, t, l, n) {
    return ((e = St(7, e, n, t)), (e.lanes = l), e);
  }
  function jr(e, t, l) {
    return ((e = St(6, e, null, t)), (e.lanes = l), e);
  }
  function Kc(e) {
    var t = St(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Dr(e, t, l) {
    return (
      (t = St(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Jc = new WeakMap();
  function jt(e, t) {
    if (typeof e == 'object' && e !== null) {
      var l = Jc.get(e);
      return l !== void 0 ? l : (
          ((t = { value: e, source: t, stack: Ko(t) }), Jc.set(e, t), t)
        );
    }
    return { value: e, source: t, stack: Ko(t) };
  }
  var Da = [],
    Ra = 0,
    Li = null,
    xn = 0,
    Dt = [],
    Rt = 0,
    xl = null,
    Qt = 1,
    Zt = '';
  function tl(e, t) {
    ((Da[Ra++] = xn), (Da[Ra++] = Li), (Li = e), (xn = t));
  }
  function Fc(e, t, l) {
    ((Dt[Rt++] = Qt), (Dt[Rt++] = Zt), (Dt[Rt++] = xl), (xl = e));
    var n = Qt;
    e = Zt;
    var u = 32 - _t(n) - 1;
    ((n &= ~(1 << u)), (l += 1));
    var o = 32 - _t(t) + u;
    if (30 < o) {
      var m = u - (u % 5);
      ((o = (n & ((1 << m) - 1)).toString(32)),
        (n >>= m),
        (u -= m),
        (Qt = (1 << (32 - _t(t) + u)) | (l << u) | n),
        (Zt = o + e));
    } else ((Qt = (1 << o) | (l << u) | n), (Zt = e));
  }
  function Rr(e) {
    e.return !== null && (tl(e, 1), Fc(e, 1, 0));
  }
  function Lr(e) {
    for (; e === Li; )
      ((Li = Da[--Ra]), (Da[Ra] = null), (xn = Da[--Ra]), (Da[Ra] = null));
    for (; e === xl; )
      ((xl = Dt[--Rt]),
        (Dt[Rt] = null),
        (Zt = Dt[--Rt]),
        (Dt[Rt] = null),
        (Qt = Dt[--Rt]),
        (Dt[Rt] = null));
  }
  function Pc(e, t) {
    ((Dt[Rt++] = Qt),
      (Dt[Rt++] = Zt),
      (Dt[Rt++] = xl),
      (Qt = t.id),
      (Zt = t.overflow),
      (xl = e));
  }
  var tt = null,
    De = null,
    Se = !1,
    Tl = null,
    Lt = !1,
    wr = Error(i(519));
  function El(e) {
    var t = Error(
      i(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ?
          'text'
        : 'HTML',
        '',
      ),
    );
    throw (Tn(jt(t, e)), wr);
  }
  function Wc(e) {
    var t = e.stateNode,
      l = e.type,
      n = e.memoizedProps;
    switch (((t[et] = e), (t[ct] = n), l)) {
      case 'dialog':
        (ye('cancel', t), ye('close', t));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        ye('load', t);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < Zn.length; l++) ye(Zn[l], t);
        break;
      case 'source':
        ye('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        (ye('error', t), ye('load', t));
        break;
      case 'details':
        ye('toggle', t);
        break;
      case 'input':
        (ye('invalid', t),
          fc(
            t,
            n.value,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name,
            !0,
          ));
        break;
      case 'select':
        ye('invalid', t);
        break;
      case 'textarea':
        (ye('invalid', t), mc(t, n.value, n.defaultValue, n.children));
    }
    ((l = n.children),
      (
        (typeof l != 'string' &&
          typeof l != 'number' &&
          typeof l != 'bigint') ||
        t.textContent === '' + l ||
        n.suppressHydrationWarning === !0 ||
        vm(t.textContent, l)
      ) ?
        (n.popover != null && (ye('beforetoggle', t), ye('toggle', t)),
        n.onScroll != null && ye('scroll', t),
        n.onScrollEnd != null && ye('scrollend', t),
        n.onClick != null && (t.onclick = Wt),
        (t = !0))
      : (t = !1),
      t || El(e, !0));
  }
  function Ic(e) {
    for (tt = e.return; tt; )
      switch (tt.tag) {
        case 5:
        case 31:
        case 13:
          Lt = !1;
          return;
        case 27:
        case 3:
          Lt = !0;
          return;
        default:
          tt = tt.return;
      }
  }
  function La(e) {
    if (e !== tt) return !1;
    if (!Se) return (Ic(e), (Se = !0), !1);
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type),
          (l =
            !(l !== 'form' && l !== 'button') || Iu(e.type, e.memoizedProps))),
        (l = !l)),
      l && De && El(e),
      Ic(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(i(317));
      De = Cm(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(i(317));
      De = Cm(e);
    } else
      t === 27 ?
        ((t = De), Ul(e.type) ? ((e = no), (no = null), (De = e)) : (De = t))
      : (De = tt ? Bt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function ta() {
    ((De = tt = null), (Se = !1));
  }
  function Br() {
    var e = Tl;
    return (
      e !== null &&
        (pt === null ? (pt = e) : pt.push.apply(pt, e), (Tl = null)),
      e
    );
  }
  function Tn(e) {
    Tl === null ? (Tl = [e]) : Tl.push(e);
  }
  var Hr = M(null),
    la = null,
    ll = null;
  function Cl(e, t, l) {
    (W(Hr, t._currentValue), (t._currentValue = l));
  }
  function al(e) {
    ((e._currentValue = Hr.current), $(Hr));
  }
  function Ur(e, t, l) {
    for (; e !== null; ) {
      var n = e.alternate;
      if (
        ((e.childLanes & t) !== t ?
          ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function Gr(e, t, l, n) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var o = u.dependencies;
      if (o !== null) {
        var m = u.child;
        o = o.firstContext;
        e: for (; o !== null; ) {
          var _ = o;
          o = u;
          for (var E = 0; E < t.length; E++)
            if (_.context === t[E]) {
              ((o.lanes |= l),
                (_ = o.alternate),
                _ !== null && (_.lanes |= l),
                Ur(o.return, l, e),
                n || (m = null));
              break e;
            }
          o = _.next;
        }
      } else if (u.tag === 18) {
        if (((m = u.return), m === null)) throw Error(i(341));
        ((m.lanes |= l),
          (o = m.alternate),
          o !== null && (o.lanes |= l),
          Ur(m, l, e),
          (m = null));
      } else m = u.child;
      if (m !== null) m.return = u;
      else
        for (m = u; m !== null; ) {
          if (m === e) {
            m = null;
            break;
          }
          if (((u = m.sibling), u !== null)) {
            ((u.return = m.return), (m = u));
            break;
          }
          m = m.return;
        }
      u = m;
    }
  }
  function wa(e, t, l, n) {
    e = null;
    for (var u = t, o = !1; u !== null; ) {
      if (!o) {
        if ((u.flags & 524288) !== 0) o = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var m = u.alternate;
        if (m === null) throw Error(i(387));
        if (((m = m.memoizedProps), m !== null)) {
          var _ = u.type;
          bt(u.pendingProps.value, m.value) ||
            (e !== null ? e.push(_) : (e = [_]));
        }
      } else if (u === Ce.current) {
        if (((m = u.alternate), m === null)) throw Error(i(387));
        m.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (e !== null ? e.push(Fn) : (e = [Fn]));
      }
      u = u.return;
    }
    (e !== null && Gr(t, e, l, n), (t.flags |= 262144));
  }
  function wi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!bt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function aa(e) {
    ((la = e),
      (ll = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function lt(e) {
    return ef(la, e);
  }
  function Bi(e, t) {
    return (la === null && aa(e), ef(e, t));
  }
  function ef(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), ll === null)) {
      if (e === null) throw Error(i(308));
      ((ll = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else ll = ll.next = t;
    return l;
  }
  var bv =
      typeof AbortController < 'u' ? AbortController : (
        function () {
          var e = [],
            t = (this.signal = {
              aborted: !1,
              addEventListener: function (l, n) {
                e.push(n);
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
    Sv = a.unstable_scheduleCallback,
    xv = a.unstable_NormalPriority,
    Ve = {
      $$typeof: O,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function qr() {
    return { controller: new bv(), data: new Map(), refCount: 0 };
  }
  function En(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Sv(xv, function () {
          e.controller.abort();
        }));
  }
  var Cn = null,
    Yr = 0,
    Ba = 0,
    Ha = null;
  function Tv(e, t) {
    if (Cn === null) {
      var l = (Cn = []);
      ((Yr = 0),
        (Ba = Qu()),
        (Ha = {
          status: 'pending',
          value: void 0,
          then: function (n) {
            l.push(n);
          },
        }));
    }
    return (Yr++, t.then(tf, tf), t);
  }
  function tf() {
    if (--Yr === 0 && Cn !== null) {
      Ha !== null && (Ha.status = 'fulfilled');
      var e = Cn;
      ((Cn = null), (Ba = 0), (Ha = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Ev(e, t) {
    var l = [],
      n = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (u) {
          l.push(u);
        },
      };
    return (
      e.then(
        function () {
          ((n.status = 'fulfilled'), (n.value = t));
          for (var u = 0; u < l.length; u++) (0, l[u])(t);
        },
        function (u) {
          for (n.status = 'rejected', n.reason = u, u = 0; u < l.length; u++)
            (0, l[u])(void 0);
        },
      ),
      n
    );
  }
  var lf = G.S;
  G.S = function (e, t) {
    ((qd = gt()),
      typeof t == 'object' &&
        t !== null &&
        typeof t.then == 'function' &&
        Tv(e, t),
      lf !== null && lf(e, t));
  };
  var na = M(null);
  function Vr() {
    var e = na.current;
    return e !== null ? e : je.pooledCache;
  }
  function Hi(e, t) {
    t === null ? W(na, na.current) : W(na, t.pool);
  }
  function af() {
    var e = Vr();
    return e === null ? null : { parent: Ve._currentValue, pool: e };
  }
  var Ua = Error(i(460)),
    Xr = Error(i(474)),
    Ui = Error(i(542)),
    Gi = { then: function () {} };
  function nf(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function sf(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(Wt, Wt), (t = l)),
      t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), uf(e), e);
      default:
        if (typeof t.status == 'string') t.then(Wt, Wt);
        else {
          if (((e = je), e !== null && 100 < e.shellSuspendCounter))
            throw Error(i(482));
          ((e = t),
            (e.status = 'pending'),
            e.then(
              function (n) {
                if (t.status === 'pending') {
                  var u = t;
                  ((u.status = 'fulfilled'), (u.value = n));
                }
              },
              function (n) {
                if (t.status === 'pending') {
                  var u = t;
                  ((u.status = 'rejected'), (u.reason = n));
                }
              },
            ));
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((e = t.reason), uf(e), e);
        }
        throw ((sa = t), Ua);
    }
  }
  function ia(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == 'object' && typeof l.then == 'function' ?
          ((sa = l), Ua)
        : l;
    }
  }
  var sa = null;
  function rf() {
    if (sa === null) throw Error(i(459));
    var e = sa;
    return ((sa = null), e);
  }
  function uf(e) {
    if (e === Ua || e === Ui) throw Error(i(483));
  }
  var Ga = null,
    Mn = 0;
  function qi(e) {
    var t = Mn;
    return ((Mn += 1), Ga === null && (Ga = []), sf(Ga, e, t));
  }
  function An(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Yi(e, t) {
    throw t.$$typeof === C ?
        Error(i(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          i(
            31,
            e === '[object Object]' ?
              'object with keys {' + Object.keys(t).join(', ') + '}'
            : e,
          ),
        ));
  }
  function of(e) {
    function t(R, A) {
      if (e) {
        var L = R.deletions;
        L === null ? ((R.deletions = [A]), (R.flags |= 16)) : L.push(A);
      }
    }
    function l(R, A) {
      if (!e) return null;
      for (; A !== null; ) (t(R, A), (A = A.sibling));
      return null;
    }
    function n(R) {
      for (var A = new Map(); R !== null; )
        (R.key !== null ? A.set(R.key, R) : A.set(R.index, R), (R = R.sibling));
      return A;
    }
    function u(R, A) {
      return ((R = el(R, A)), (R.index = 0), (R.sibling = null), R);
    }
    function o(R, A, L) {
      return (
        (R.index = L),
        e ?
          ((L = R.alternate),
          L !== null ?
            ((L = L.index), L < A ? ((R.flags |= 67108866), A) : L)
          : ((R.flags |= 67108866), A))
        : ((R.flags |= 1048576), A)
      );
    }
    function m(R) {
      return (e && R.alternate === null && (R.flags |= 67108866), R);
    }
    function _(R, A, L, Y) {
      return A === null || A.tag !== 6 ?
          ((A = jr(L, R.mode, Y)), (A.return = R), A)
        : ((A = u(A, L)), (A.return = R), A);
    }
    function E(R, A, L, Y) {
      var ie = L.type;
      return (
        ie === D ? q(R, A, L.props.children, Y, L.key)
        : (
          A !== null &&
          (A.elementType === ie ||
            (typeof ie == 'object' &&
              ie !== null &&
              ie.$$typeof === H &&
              ia(ie) === A.type))
        ) ?
          ((A = u(A, L.props)), An(A, L), (A.return = R), A)
        : ((A = Ri(L.type, L.key, L.props, null, R.mode, Y)),
          An(A, L),
          (A.return = R),
          A)
      );
    }
    function w(R, A, L, Y) {
      return (
          A === null ||
            A.tag !== 4 ||
            A.stateNode.containerInfo !== L.containerInfo ||
            A.stateNode.implementation !== L.implementation
        ) ?
          ((A = Dr(L, R.mode, Y)), (A.return = R), A)
        : ((A = u(A, L.children || [])), (A.return = R), A);
    }
    function q(R, A, L, Y, ie) {
      return A === null || A.tag !== 7 ?
          ((A = ea(L, R.mode, Y, ie)), (A.return = R), A)
        : ((A = u(A, L)), (A.return = R), A);
    }
    function Q(R, A, L) {
      if (
        (typeof A == 'string' && A !== '') ||
        typeof A == 'number' ||
        typeof A == 'bigint'
      )
        return ((A = jr('' + A, R.mode, L)), (A.return = R), A);
      if (typeof A == 'object' && A !== null) {
        switch (A.$$typeof) {
          case S:
            return (
              (L = Ri(A.type, A.key, A.props, null, R.mode, L)),
              An(L, A),
              (L.return = R),
              L
            );
          case j:
            return ((A = Dr(A, R.mode, L)), (A.return = R), A);
          case H:
            return ((A = ia(A)), Q(R, A, L));
        }
        if (pe(A) || P(A))
          return ((A = ea(A, R.mode, L, null)), (A.return = R), A);
        if (typeof A.then == 'function') return Q(R, qi(A), L);
        if (A.$$typeof === O) return Q(R, Bi(R, A), L);
        Yi(R, A);
      }
      return null;
    }
    function B(R, A, L, Y) {
      var ie = A !== null ? A.key : null;
      if (
        (typeof L == 'string' && L !== '') ||
        typeof L == 'number' ||
        typeof L == 'bigint'
      )
        return ie !== null ? null : _(R, A, '' + L, Y);
      if (typeof L == 'object' && L !== null) {
        switch (L.$$typeof) {
          case S:
            return L.key === ie ? E(R, A, L, Y) : null;
          case j:
            return L.key === ie ? w(R, A, L, Y) : null;
          case H:
            return ((L = ia(L)), B(R, A, L, Y));
        }
        if (pe(L) || P(L)) return ie !== null ? null : q(R, A, L, Y, null);
        if (typeof L.then == 'function') return B(R, A, qi(L), Y);
        if (L.$$typeof === O) return B(R, A, Bi(R, L), Y);
        Yi(R, L);
      }
      return null;
    }
    function U(R, A, L, Y, ie) {
      if (
        (typeof Y == 'string' && Y !== '') ||
        typeof Y == 'number' ||
        typeof Y == 'bigint'
      )
        return ((R = R.get(L) || null), _(A, R, '' + Y, ie));
      if (typeof Y == 'object' && Y !== null) {
        switch (Y.$$typeof) {
          case S:
            return (
              (R = R.get(Y.key === null ? L : Y.key) || null),
              E(A, R, Y, ie)
            );
          case j:
            return (
              (R = R.get(Y.key === null ? L : Y.key) || null),
              w(A, R, Y, ie)
            );
          case H:
            return ((Y = ia(Y)), U(R, A, L, Y, ie));
        }
        if (pe(Y) || P(Y))
          return ((R = R.get(L) || null), q(A, R, Y, ie, null));
        if (typeof Y.then == 'function') return U(R, A, L, qi(Y), ie);
        if (Y.$$typeof === O) return U(R, A, L, Bi(A, Y), ie);
        Yi(A, Y);
      }
      return null;
    }
    function te(R, A, L, Y) {
      for (
        var ie = null, xe = null, ae = A, he = (A = 0), be = null;
        ae !== null && he < L.length;
        he++
      ) {
        ae.index > he ? ((be = ae), (ae = null)) : (be = ae.sibling);
        var Te = B(R, ae, L[he], Y);
        if (Te === null) {
          ae === null && (ae = be);
          break;
        }
        (e && ae && Te.alternate === null && t(R, ae),
          (A = o(Te, A, he)),
          xe === null ? (ie = Te) : (xe.sibling = Te),
          (xe = Te),
          (ae = be));
      }
      if (he === L.length) return (l(R, ae), Se && tl(R, he), ie);
      if (ae === null) {
        for (; he < L.length; he++)
          ((ae = Q(R, L[he], Y)),
            ae !== null &&
              ((A = o(ae, A, he)),
              xe === null ? (ie = ae) : (xe.sibling = ae),
              (xe = ae)));
        return (Se && tl(R, he), ie);
      }
      for (ae = n(ae); he < L.length; he++)
        ((be = U(ae, R, he, L[he], Y)),
          be !== null &&
            (e &&
              be.alternate !== null &&
              ae.delete(be.key === null ? he : be.key),
            (A = o(be, A, he)),
            xe === null ? (ie = be) : (xe.sibling = be),
            (xe = be)));
      return (
        e &&
          ae.forEach(function (Xl) {
            return t(R, Xl);
          }),
        Se && tl(R, he),
        ie
      );
    }
    function se(R, A, L, Y) {
      if (L == null) throw Error(i(151));
      for (
        var ie = null,
          xe = null,
          ae = A,
          he = (A = 0),
          be = null,
          Te = L.next();
        ae !== null && !Te.done;
        he++, Te = L.next()
      ) {
        ae.index > he ? ((be = ae), (ae = null)) : (be = ae.sibling);
        var Xl = B(R, ae, Te.value, Y);
        if (Xl === null) {
          ae === null && (ae = be);
          break;
        }
        (e && ae && Xl.alternate === null && t(R, ae),
          (A = o(Xl, A, he)),
          xe === null ? (ie = Xl) : (xe.sibling = Xl),
          (xe = Xl),
          (ae = be));
      }
      if (Te.done) return (l(R, ae), Se && tl(R, he), ie);
      if (ae === null) {
        for (; !Te.done; he++, Te = L.next())
          ((Te = Q(R, Te.value, Y)),
            Te !== null &&
              ((A = o(Te, A, he)),
              xe === null ? (ie = Te) : (xe.sibling = Te),
              (xe = Te)));
        return (Se && tl(R, he), ie);
      }
      for (ae = n(ae); !Te.done; he++, Te = L.next())
        ((Te = U(ae, R, he, Te.value, Y)),
          Te !== null &&
            (e &&
              Te.alternate !== null &&
              ae.delete(Te.key === null ? he : Te.key),
            (A = o(Te, A, he)),
            xe === null ? (ie = Te) : (xe.sibling = Te),
            (xe = Te)));
      return (
        e &&
          ae.forEach(function (wg) {
            return t(R, wg);
          }),
        Se && tl(R, he),
        ie
      );
    }
    function Oe(R, A, L, Y) {
      if (
        (typeof L == 'object' &&
          L !== null &&
          L.type === D &&
          L.key === null &&
          (L = L.props.children),
        typeof L == 'object' && L !== null)
      ) {
        switch (L.$$typeof) {
          case S:
            e: {
              for (var ie = L.key; A !== null; ) {
                if (A.key === ie) {
                  if (((ie = L.type), ie === D)) {
                    if (A.tag === 7) {
                      (l(R, A.sibling),
                        (Y = u(A, L.props.children)),
                        (Y.return = R),
                        (R = Y));
                      break e;
                    }
                  } else if (
                    A.elementType === ie ||
                    (typeof ie == 'object' &&
                      ie !== null &&
                      ie.$$typeof === H &&
                      ia(ie) === A.type)
                  ) {
                    (l(R, A.sibling),
                      (Y = u(A, L.props)),
                      An(Y, L),
                      (Y.return = R),
                      (R = Y));
                    break e;
                  }
                  l(R, A);
                  break;
                } else t(R, A);
                A = A.sibling;
              }
              L.type === D ?
                ((Y = ea(L.props.children, R.mode, Y, L.key)),
                (Y.return = R),
                (R = Y))
              : ((Y = Ri(L.type, L.key, L.props, null, R.mode, Y)),
                An(Y, L),
                (Y.return = R),
                (R = Y));
            }
            return m(R);
          case j:
            e: {
              for (ie = L.key; A !== null; ) {
                if (A.key === ie)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === L.containerInfo &&
                    A.stateNode.implementation === L.implementation
                  ) {
                    (l(R, A.sibling),
                      (Y = u(A, L.children || [])),
                      (Y.return = R),
                      (R = Y));
                    break e;
                  } else {
                    l(R, A);
                    break;
                  }
                else t(R, A);
                A = A.sibling;
              }
              ((Y = Dr(L, R.mode, Y)), (Y.return = R), (R = Y));
            }
            return m(R);
          case H:
            return ((L = ia(L)), Oe(R, A, L, Y));
        }
        if (pe(L)) return te(R, A, L, Y);
        if (P(L)) {
          if (((ie = P(L)), typeof ie != 'function')) throw Error(i(150));
          return ((L = ie.call(L)), se(R, A, L, Y));
        }
        if (typeof L.then == 'function') return Oe(R, A, qi(L), Y);
        if (L.$$typeof === O) return Oe(R, A, Bi(R, L), Y);
        Yi(R, L);
      }
      return (
          (typeof L == 'string' && L !== '') ||
            typeof L == 'number' ||
            typeof L == 'bigint'
        ) ?
          ((L = '' + L),
          A !== null && A.tag === 6 ?
            (l(R, A.sibling), (Y = u(A, L)), (Y.return = R), (R = Y))
          : (l(R, A), (Y = jr(L, R.mode, Y)), (Y.return = R), (R = Y)),
          m(R))
        : l(R, A);
    }
    return function (R, A, L, Y) {
      try {
        Mn = 0;
        var ie = Oe(R, A, L, Y);
        return ((Ga = null), ie);
      } catch (ae) {
        if (ae === Ua || ae === Ui) throw ae;
        var xe = St(29, ae, null, R.mode);
        return ((xe.lanes = Y), (xe.return = R), xe);
      }
    };
  }
  var ra = of(!0),
    cf = of(!1),
    Ml = !1;
  function Qr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Zr(e, t) {
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
  function Al(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function zl(e, t, l) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (((n = n.shared), (Ee & 2) !== 0)) {
      var u = n.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (n.pending = t),
        (t = Di(e)),
        $c(e, null, l),
        t
      );
    }
    return (ji(e, n, t, l), Di(e));
  }
  function zn(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var n = t.lanes;
      ((n &= e.pendingLanes), (l |= n), (t.lanes = l), ec(e, l));
    }
  }
  function $r(e, t) {
    var l = e.updateQueue,
      n = e.alternate;
    if (n !== null && ((n = n.updateQueue), l === n)) {
      var u = null,
        o = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var m = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (o === null ? (u = o = m) : (o = o.next = m), (l = l.next));
        } while (l !== null);
        o === null ? (u = o = t) : (o = o.next = t);
      } else u = o = t;
      ((l = {
        baseState: n.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: o,
        shared: n.shared,
        callbacks: n.callbacks,
      }),
        (e.updateQueue = l));
      return;
    }
    ((e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t));
  }
  var kr = !1;
  function Nn() {
    if (kr) {
      var e = Ha;
      if (e !== null) throw e;
    }
  }
  function On(e, t, l, n) {
    kr = !1;
    var u = e.updateQueue;
    Ml = !1;
    var o = u.firstBaseUpdate,
      m = u.lastBaseUpdate,
      _ = u.shared.pending;
    if (_ !== null) {
      u.shared.pending = null;
      var E = _,
        w = E.next;
      ((E.next = null), m === null ? (o = w) : (m.next = w), (m = E));
      var q = e.alternate;
      q !== null &&
        ((q = q.updateQueue),
        (_ = q.lastBaseUpdate),
        _ !== m &&
          (_ === null ? (q.firstBaseUpdate = w) : (_.next = w),
          (q.lastBaseUpdate = E)));
    }
    if (o !== null) {
      var Q = u.baseState;
      ((m = 0), (q = w = E = null), (_ = o));
      do {
        var B = _.lane & -536870913,
          U = B !== _.lane;
        if (U ? (_e & B) === B : (n & B) === B) {
          (B !== 0 && B === Ba && (kr = !0),
            q !== null &&
              (q = q.next =
                {
                  lane: 0,
                  tag: _.tag,
                  payload: _.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var te = e,
              se = _;
            B = t;
            var Oe = l;
            switch (se.tag) {
              case 1:
                if (((te = se.payload), typeof te == 'function')) {
                  Q = te.call(Oe, Q, B);
                  break e;
                }
                Q = te;
                break e;
              case 3:
                te.flags = (te.flags & -65537) | 128;
              case 0:
                if (
                  ((te = se.payload),
                  (B = typeof te == 'function' ? te.call(Oe, Q, B) : te),
                  B == null)
                )
                  break e;
                Q = v({}, Q, B);
                break e;
              case 2:
                Ml = !0;
            }
          }
          ((B = _.callback),
            B !== null &&
              ((e.flags |= 64),
              U && (e.flags |= 8192),
              (U = u.callbacks),
              U === null ? (u.callbacks = [B]) : U.push(B)));
        } else
          ((U = {
            lane: B,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null,
          }),
            q === null ? ((w = q = U), (E = Q)) : (q = q.next = U),
            (m |= B));
        if (((_ = _.next), _ === null)) {
          if (((_ = u.shared.pending), _ === null)) break;
          ((U = _),
            (_ = U.next),
            (U.next = null),
            (u.lastBaseUpdate = U),
            (u.shared.pending = null));
        }
      } while (!0);
      (q === null && (E = Q),
        (u.baseState = E),
        (u.firstBaseUpdate = w),
        (u.lastBaseUpdate = q),
        o === null && (u.shared.lanes = 0),
        (Rl |= m),
        (e.lanes = m),
        (e.memoizedState = Q));
    }
  }
  function ff(e, t) {
    if (typeof e != 'function') throw Error(i(191, e));
    e.call(t);
  }
  function df(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) ff(l[e], t);
  }
  var qa = M(null),
    Vi = M(0);
  function mf(e, t) {
    ((e = dl), W(Vi, e), W(qa, t), (dl = e | t.baseLanes));
  }
  function Kr() {
    (W(Vi, dl), W(qa, qa.current));
  }
  function Jr() {
    ((dl = Vi.current), $(qa), $(Vi));
  }
  var xt = M(null),
    wt = null;
  function Nl(e) {
    var t = e.alternate;
    (W(Ge, Ge.current & 1),
      W(xt, e),
      wt === null &&
        (t === null || qa.current !== null || t.memoizedState !== null) &&
        (wt = e));
  }
  function Fr(e) {
    (W(Ge, Ge.current), W(xt, e), wt === null && (wt = e));
  }
  function hf(e) {
    e.tag === 22 ?
      (W(Ge, Ge.current), W(xt, e), wt === null && (wt = e))
    : Ol();
  }
  function Ol() {
    (W(Ge, Ge.current), W(xt, xt.current));
  }
  function Tt(e) {
    ($(xt), wt === e && (wt = null), $(Ge));
  }
  var Ge = M(0);
  function Xi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || lo(l) || ao(l)))
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
  var nl = 0,
    me = null,
    ze = null,
    Xe = null,
    Qi = !1,
    Ya = !1,
    ua = !1,
    Zi = 0,
    jn = 0,
    Va = null,
    Cv = 0;
  function Be() {
    throw Error(i(321));
  }
  function Pr(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!bt(e[l], t[l])) return !1;
    return !0;
  }
  function Wr(e, t, l, n, u, o) {
    return (
      (nl = o),
      (me = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (G.H = e === null || e.memoizedState === null ? Pf : mu),
      (ua = !1),
      (o = l(n, u)),
      (ua = !1),
      Ya && (o = vf(t, l, n, u)),
      pf(e),
      o
    );
  }
  function pf(e) {
    G.H = Ln;
    var t = ze !== null && ze.next !== null;
    if (((nl = 0), (Xe = ze = me = null), (Qi = !1), (jn = 0), (Va = null), t))
      throw Error(i(300));
    e === null ||
      Qe ||
      ((e = e.dependencies), e !== null && wi(e) && (Qe = !0));
  }
  function vf(e, t, l, n) {
    me = e;
    var u = 0;
    do {
      if ((Ya && (Va = null), (jn = 0), (Ya = !1), 25 <= u))
        throw Error(i(301));
      if (((u += 1), (Xe = ze = null), e.updateQueue != null)) {
        var o = e.updateQueue;
        ((o.lastEffect = null),
          (o.events = null),
          (o.stores = null),
          o.memoCache != null && (o.memoCache.index = 0));
      }
      ((G.H = Wf), (o = t(l, n)));
    } while (Ya);
    return o;
  }
  function Mv() {
    var e = G.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? Dn(t) : t),
      (e = e.useState()[0]),
      (ze !== null ? ze.memoizedState : null) !== e && (me.flags |= 1024),
      t
    );
  }
  function Ir() {
    var e = Zi !== 0;
    return ((Zi = 0), e);
  }
  function eu(e, t, l) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l));
  }
  function tu(e) {
    if (Qi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      Qi = !1;
    }
    ((nl = 0), (Xe = ze = me = null), (Ya = !1), (jn = Zi = 0), (Va = null));
  }
  function rt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Xe === null ? (me.memoizedState = Xe = e) : (Xe = Xe.next = e), Xe);
  }
  function qe() {
    if (ze === null) {
      var e = me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ze.next;
    var t = Xe === null ? me.memoizedState : Xe.next;
    if (t !== null) ((Xe = t), (ze = e));
    else {
      if (e === null)
        throw me.alternate === null ? Error(i(467)) : Error(i(310));
      ((ze = e),
        (e = {
          memoizedState: ze.memoizedState,
          baseState: ze.baseState,
          baseQueue: ze.baseQueue,
          queue: ze.queue,
          next: null,
        }),
        Xe === null ? (me.memoizedState = Xe = e) : (Xe = Xe.next = e));
    }
    return Xe;
  }
  function $i() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Dn(e) {
    var t = jn;
    return (
      (jn += 1),
      Va === null && (Va = []),
      (e = sf(Va, e, t)),
      (t = me),
      (Xe === null ? t.memoizedState : Xe.next) === null &&
        ((t = t.alternate),
        (G.H = t === null || t.memoizedState === null ? Pf : mu)),
      e
    );
  }
  function ki(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return Dn(e);
      if (e.$$typeof === O) return lt(e);
    }
    throw Error(i(438, String(e)));
  }
  function lu(e) {
    var t = null,
      l = me.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var n = me.alternate;
      n !== null &&
        ((n = n.updateQueue),
        n !== null &&
          ((n = n.memoCache),
          n != null &&
            (t = {
              data: n.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = $i()), (me.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), n = 0; n < e; n++) l[n] = J;
    return (t.index++, l);
  }
  function il(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Ki(e) {
    var t = qe();
    return au(t, ze, e);
  }
  function au(e, t, l) {
    var n = e.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = l;
    var u = e.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (u !== null) {
        var m = u.next;
        ((u.next = o.next), (o.next = m));
      }
      ((t.baseQueue = u = o), (n.pending = null));
    }
    if (((o = e.baseState), u === null)) e.memoizedState = o;
    else {
      t = u.next;
      var _ = (m = null),
        E = null,
        w = t,
        q = !1;
      do {
        var Q = w.lane & -536870913;
        if (Q !== w.lane ? (_e & Q) === Q : (nl & Q) === Q) {
          var B = w.revertLane;
          if (B === 0)
            (E !== null &&
              (E = E.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: w.action,
                  hasEagerState: w.hasEagerState,
                  eagerState: w.eagerState,
                  next: null,
                }),
              Q === Ba && (q = !0));
          else if ((nl & B) === B) {
            ((w = w.next), B === Ba && (q = !0));
            continue;
          } else
            ((Q = {
              lane: 0,
              revertLane: w.revertLane,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null,
            }),
              E === null ? ((_ = E = Q), (m = o)) : (E = E.next = Q),
              (me.lanes |= B),
              (Rl |= B));
          ((Q = w.action),
            ua && l(o, Q),
            (o = w.hasEagerState ? w.eagerState : l(o, Q)));
        } else
          ((B = {
            lane: Q,
            revertLane: w.revertLane,
            gesture: w.gesture,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null,
          }),
            E === null ? ((_ = E = B), (m = o)) : (E = E.next = B),
            (me.lanes |= Q),
            (Rl |= Q));
        w = w.next;
      } while (w !== null && w !== t);
      if (
        (E === null ? (m = o) : (E.next = _),
        !bt(o, e.memoizedState) && ((Qe = !0), q && ((l = Ha), l !== null)))
      )
        throw l;
      ((e.memoizedState = o),
        (e.baseState = m),
        (e.baseQueue = E),
        (n.lastRenderedState = o));
    }
    return (u === null && (n.lanes = 0), [e.memoizedState, n.dispatch]);
  }
  function nu(e) {
    var t = qe(),
      l = t.queue;
    if (l === null) throw Error(i(311));
    l.lastRenderedReducer = e;
    var n = l.dispatch,
      u = l.pending,
      o = t.memoizedState;
    if (u !== null) {
      l.pending = null;
      var m = (u = u.next);
      do ((o = e(o, m.action)), (m = m.next));
      while (m !== u);
      (bt(o, t.memoizedState) || (Qe = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (l.lastRenderedState = o));
    }
    return [o, n];
  }
  function gf(e, t, l) {
    var n = me,
      u = qe(),
      o = Se;
    if (o) {
      if (l === void 0) throw Error(i(407));
      l = l();
    } else l = t();
    var m = !bt((ze || u).memoizedState, l);
    if (
      (m && ((u.memoizedState = l), (Qe = !0)),
      (u = u.queue),
      ru(bf.bind(null, n, u, e), [e]),
      u.getSnapshot !== t || m || (Xe !== null && Xe.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Xa(9, { destroy: void 0 }, _f.bind(null, n, u, l, t), null),
        je === null)
      )
        throw Error(i(349));
      o || (nl & 127) !== 0 || yf(n, t, l);
    }
    return l;
  }
  function yf(e, t, l) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = me.updateQueue),
      t === null ?
        ((t = $i()), (me.updateQueue = t), (t.stores = [e]))
      : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e)));
  }
  function _f(e, t, l, n) {
    ((t.value = l), (t.getSnapshot = n), Sf(t) && xf(e));
  }
  function bf(e, t, l) {
    return l(function () {
      Sf(t) && xf(e);
    });
  }
  function Sf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !bt(e, l);
    } catch {
      return !0;
    }
  }
  function xf(e) {
    var t = Il(e, 2);
    t !== null && vt(t, e, 2);
  }
  function iu(e) {
    var t = rt();
    if (typeof e == 'function') {
      var l = e;
      if (((e = l()), ua)) {
        _l(!0);
        try {
          l();
        } finally {
          _l(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: il,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Tf(e, t, l, n) {
    return ((e.baseState = l), au(e, ze, typeof n == 'function' ? n : il));
  }
  function Av(e, t, l, n, u) {
    if (Pi(e)) throw Error(i(485));
    if (((e = t.action), e !== null)) {
      var o = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (m) {
          o.listeners.push(m);
        },
      };
      (G.T !== null ? l(!0) : (o.isTransition = !1),
        n(o),
        (l = t.pending),
        l === null ?
          ((o.next = t.pending = o), Ef(t, o))
        : ((o.next = l.next), (t.pending = l.next = o)));
    }
  }
  function Ef(e, t) {
    var l = t.action,
      n = t.payload,
      u = e.state;
    if (t.isTransition) {
      var o = G.T,
        m = {};
      G.T = m;
      try {
        var _ = l(u, n),
          E = G.S;
        (E !== null && E(m, _), Cf(e, t, _));
      } catch (w) {
        su(e, t, w);
      } finally {
        (o !== null && m.types !== null && (o.types = m.types), (G.T = o));
      }
    } else
      try {
        ((o = l(u, n)), Cf(e, t, o));
      } catch (w) {
        su(e, t, w);
      }
  }
  function Cf(e, t, l) {
    l !== null && typeof l == 'object' && typeof l.then == 'function' ?
      l.then(
        function (n) {
          Mf(e, t, n);
        },
        function (n) {
          return su(e, t, n);
        },
      )
    : Mf(e, t, l);
  }
  function Mf(e, t, l) {
    ((t.status = 'fulfilled'),
      (t.value = l),
      Af(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), Ef(e, l))));
  }
  function su(e, t, l) {
    var n = e.pending;
    if (((e.pending = null), n !== null)) {
      n = n.next;
      do ((t.status = 'rejected'), (t.reason = l), Af(t), (t = t.next));
      while (t !== n);
    }
    e.action = null;
  }
  function Af(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function zf(e, t) {
    return t;
  }
  function Nf(e, t) {
    if (Se) {
      var l = je.formState;
      if (l !== null) {
        e: {
          var n = me;
          if (Se) {
            if (De) {
              t: {
                for (var u = De, o = Lt; u.nodeType !== 8; ) {
                  if (!o) {
                    u = null;
                    break t;
                  }
                  if (((u = Bt(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                ((o = u.data), (u = o === 'F!' || o === 'F' ? u : null));
              }
              if (u) {
                ((De = Bt(u.nextSibling)), (n = u.data === 'F!'));
                break e;
              }
            }
            El(n);
          }
          n = !1;
        }
        n && (t = l[0]);
      }
    }
    return (
      (l = rt()),
      (l.memoizedState = l.baseState = t),
      (n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zf,
        lastRenderedState: t,
      }),
      (l.queue = n),
      (l = Kf.bind(null, me, n)),
      (n.dispatch = l),
      (n = iu(!1)),
      (o = du.bind(null, me, !1, n.queue)),
      (n = rt()),
      (u = { state: t, dispatch: null, action: e, pending: null }),
      (n.queue = u),
      (l = Av.bind(null, me, u, o, l)),
      (u.dispatch = l),
      (n.memoizedState = e),
      [t, l, !1]
    );
  }
  function Of(e) {
    var t = qe();
    return jf(t, ze, e);
  }
  function jf(e, t, l) {
    if (
      ((t = au(e, t, zf)[0]),
      (e = Ki(il)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var n = Dn(t);
      } catch (m) {
        throw m === Ua ? Ui : m;
      }
    else n = t;
    t = qe();
    var u = t.queue,
      o = u.dispatch;
    return (
      l !== t.memoizedState &&
        ((me.flags |= 2048),
        Xa(9, { destroy: void 0 }, zv.bind(null, u, l), null)),
      [n, o, e]
    );
  }
  function zv(e, t) {
    e.action = t;
  }
  function Df(e) {
    var t = qe(),
      l = ze;
    if (l !== null) return jf(t, l, e);
    (qe(), (t = t.memoizedState), (l = qe()));
    var n = l.queue.dispatch;
    return ((l.memoizedState = e), [t, n, !1]);
  }
  function Xa(e, t, l, n) {
    return (
      (e = { tag: e, create: l, deps: n, inst: t, next: null }),
      (t = me.updateQueue),
      t === null && ((t = $i()), (me.updateQueue = t)),
      (l = t.lastEffect),
      l === null ?
        (t.lastEffect = e.next = e)
      : ((n = l.next), (l.next = e), (e.next = n), (t.lastEffect = e)),
      e
    );
  }
  function Rf() {
    return qe().memoizedState;
  }
  function Ji(e, t, l, n) {
    var u = rt();
    ((me.flags |= e),
      (u.memoizedState = Xa(
        1 | t,
        { destroy: void 0 },
        l,
        n === void 0 ? null : n,
      )));
  }
  function Fi(e, t, l, n) {
    var u = qe();
    n = n === void 0 ? null : n;
    var o = u.memoizedState.inst;
    ze !== null && n !== null && Pr(n, ze.memoizedState.deps) ?
      (u.memoizedState = Xa(t, o, l, n))
    : ((me.flags |= e), (u.memoizedState = Xa(1 | t, o, l, n)));
  }
  function Lf(e, t) {
    Ji(8390656, 8, e, t);
  }
  function ru(e, t) {
    Fi(2048, 8, e, t);
  }
  function Nv(e) {
    me.flags |= 4;
    var t = me.updateQueue;
    if (t === null) ((t = $i()), (me.updateQueue = t), (t.events = [e]));
    else {
      var l = t.events;
      l === null ? (t.events = [e]) : l.push(e);
    }
  }
  function wf(e) {
    var t = qe().memoizedState;
    return (
      Nv({ ref: t, nextImpl: e }),
      function () {
        if ((Ee & 2) !== 0) throw Error(i(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Bf(e, t) {
    return Fi(4, 2, e, t);
  }
  function Hf(e, t) {
    return Fi(4, 4, e, t);
  }
  function Uf(e, t) {
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
  function Gf(e, t, l) {
    ((l = l != null ? l.concat([e]) : null), Fi(4, 4, Uf.bind(null, t, e), l));
  }
  function uu() {}
  function qf(e, t) {
    var l = qe();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    return t !== null && Pr(t, n[1]) ? n[0] : ((l.memoizedState = [e, t]), e);
  }
  function Yf(e, t) {
    var l = qe();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    if (t !== null && Pr(t, n[1])) return n[0];
    if (((n = e()), ua)) {
      _l(!0);
      try {
        e();
      } finally {
        _l(!1);
      }
    }
    return ((l.memoizedState = [n, t]), n);
  }
  function ou(e, t, l) {
    return l === void 0 || ((nl & 1073741824) !== 0 && (_e & 261930) === 0) ?
        (e.memoizedState = t)
      : ((e.memoizedState = l), (e = Vd()), (me.lanes |= e), (Rl |= e), l);
  }
  function Vf(e, t, l, n) {
    return (
      bt(l, t) ? l
      : qa.current !== null ? ((e = ou(e, l, n)), bt(e, t) || (Qe = !0), e)
      : (nl & 42) === 0 || ((nl & 1073741824) !== 0 && (_e & 261930) === 0) ?
        ((Qe = !0), (e.memoizedState = l))
      : ((e = Vd()), (me.lanes |= e), (Rl |= e), t)
    );
  }
  function Xf(e, t, l, n, u) {
    var o = Z.p;
    Z.p = o !== 0 && 8 > o ? o : 8;
    var m = G.T,
      _ = {};
    ((G.T = _), du(e, !1, t, l));
    try {
      var E = u(),
        w = G.S;
      if (
        (w !== null && w(_, E),
        E !== null && typeof E == 'object' && typeof E.then == 'function')
      ) {
        var q = Ev(E, n);
        Rn(e, t, q, Mt(e));
      } else Rn(e, t, n, Mt(e));
    } catch (Q) {
      Rn(e, t, { then: function () {}, status: 'rejected', reason: Q }, Mt());
    } finally {
      ((Z.p = o),
        m !== null && _.types !== null && (m.types = _.types),
        (G.T = m));
    }
  }
  function Ov() {}
  function cu(e, t, l, n) {
    if (e.tag !== 5) throw Error(i(476));
    var u = Qf(e).queue;
    Xf(
      e,
      u,
      t,
      X,
      l === null ? Ov : (
        function () {
          return (Zf(e), l(n));
        }
      ),
    );
  }
  function Qf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: X,
      baseState: X,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: il,
        lastRenderedState: X,
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
          lastRenderedReducer: il,
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
  function Zf(e) {
    var t = Qf(e);
    (t.next === null && (t = e.alternate.memoizedState),
      Rn(e, t.next.queue, {}, Mt()));
  }
  function fu() {
    return lt(Fn);
  }
  function $f() {
    return qe().memoizedState;
  }
  function kf() {
    return qe().memoizedState;
  }
  function jv(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Mt();
          e = Al(l);
          var n = zl(t, e, l);
          (n !== null && (vt(n, t, l), zn(n, t, l)),
            (t = { cache: qr() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Dv(e, t, l) {
    var n = Mt();
    ((l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Pi(e) ?
        Jf(t, l)
      : ((l = Nr(e, t, l, n)), l !== null && (vt(l, e, n), Ff(l, t, n))));
  }
  function Kf(e, t, l) {
    var n = Mt();
    Rn(e, t, l, n);
  }
  function Rn(e, t, l, n) {
    var u = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Pi(e)) Jf(t, u);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var m = t.lastRenderedState,
            _ = o(m, l);
          if (((u.hasEagerState = !0), (u.eagerState = _), bt(_, m)))
            return (ji(e, t, u, 0), je === null && Oi(), !1);
        } catch {}
      if (((l = Nr(e, t, u, n)), l !== null))
        return (vt(l, e, n), Ff(l, t, n), !0);
    }
    return !1;
  }
  function du(e, t, l, n) {
    if (
      ((n = {
        lane: 2,
        revertLane: Qu(),
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Pi(e))
    ) {
      if (t) throw Error(i(479));
    } else ((t = Nr(e, l, n, 2)), t !== null && vt(t, e, 2));
  }
  function Pi(e) {
    var t = e.alternate;
    return e === me || (t !== null && t === me);
  }
  function Jf(e, t) {
    Ya = Qi = !0;
    var l = e.pending;
    (l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t));
  }
  function Ff(e, t, l) {
    if ((l & 4194048) !== 0) {
      var n = t.lanes;
      ((n &= e.pendingLanes), (l |= n), (t.lanes = l), ec(e, l));
    }
  }
  var Ln = {
    readContext: lt,
    use: ki,
    useCallback: Be,
    useContext: Be,
    useEffect: Be,
    useImperativeHandle: Be,
    useLayoutEffect: Be,
    useInsertionEffect: Be,
    useMemo: Be,
    useReducer: Be,
    useRef: Be,
    useState: Be,
    useDebugValue: Be,
    useDeferredValue: Be,
    useTransition: Be,
    useSyncExternalStore: Be,
    useId: Be,
    useHostTransitionStatus: Be,
    useFormState: Be,
    useActionState: Be,
    useOptimistic: Be,
    useMemoCache: Be,
    useCacheRefresh: Be,
  };
  Ln.useEffectEvent = Be;
  var Pf = {
      readContext: lt,
      use: ki,
      useCallback: function (e, t) {
        return ((rt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: lt,
      useEffect: Lf,
      useImperativeHandle: function (e, t, l) {
        ((l = l != null ? l.concat([e]) : null),
          Ji(4194308, 4, Uf.bind(null, t, e), l));
      },
      useLayoutEffect: function (e, t) {
        return Ji(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Ji(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = rt();
        t = t === void 0 ? null : t;
        var n = e();
        if (ua) {
          _l(!0);
          try {
            e();
          } finally {
            _l(!1);
          }
        }
        return ((l.memoizedState = [n, t]), n);
      },
      useReducer: function (e, t, l) {
        var n = rt();
        if (l !== void 0) {
          var u = l(t);
          if (ua) {
            _l(!0);
            try {
              l(t);
            } finally {
              _l(!1);
            }
          }
        } else u = t;
        return (
          (n.memoizedState = n.baseState = u),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: u,
          }),
          (n.queue = e),
          (e = e.dispatch = Dv.bind(null, me, e)),
          [n.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = rt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = iu(e);
        var t = e.queue,
          l = Kf.bind(null, me, t);
        return ((t.dispatch = l), [e.memoizedState, l]);
      },
      useDebugValue: uu,
      useDeferredValue: function (e, t) {
        var l = rt();
        return ou(l, e, t);
      },
      useTransition: function () {
        var e = iu(!1);
        return (
          (e = Xf.bind(null, me, e.queue, !0, !1)),
          (rt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, l) {
        var n = me,
          u = rt();
        if (Se) {
          if (l === void 0) throw Error(i(407));
          l = l();
        } else {
          if (((l = t()), je === null)) throw Error(i(349));
          (_e & 127) !== 0 || yf(n, t, l);
        }
        u.memoizedState = l;
        var o = { value: l, getSnapshot: t };
        return (
          (u.queue = o),
          Lf(bf.bind(null, n, o, e), [e]),
          (n.flags |= 2048),
          Xa(9, { destroy: void 0 }, _f.bind(null, n, o, l, t), null),
          l
        );
      },
      useId: function () {
        var e = rt(),
          t = je.identifierPrefix;
        if (Se) {
          var l = Zt,
            n = Qt;
          ((l = (n & ~(1 << (32 - _t(n) - 1))).toString(32) + l),
            (t = '_' + t + 'R_' + l),
            (l = Zi++),
            0 < l && (t += 'H' + l.toString(32)),
            (t += '_'));
        } else ((l = Cv++), (t = '_' + t + 'r_' + l.toString(32) + '_'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: fu,
      useFormState: Nf,
      useActionState: Nf,
      useOptimistic: function (e) {
        var t = rt();
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
          (t = du.bind(null, me, !0, l)),
          (l.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: lu,
      useCacheRefresh: function () {
        return (rt().memoizedState = jv.bind(null, me));
      },
      useEffectEvent: function (e) {
        var t = rt(),
          l = { impl: e };
        return (
          (t.memoizedState = l),
          function () {
            if ((Ee & 2) !== 0) throw Error(i(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    mu = {
      readContext: lt,
      use: ki,
      useCallback: qf,
      useContext: lt,
      useEffect: ru,
      useImperativeHandle: Gf,
      useInsertionEffect: Bf,
      useLayoutEffect: Hf,
      useMemo: Yf,
      useReducer: Ki,
      useRef: Rf,
      useState: function () {
        return Ki(il);
      },
      useDebugValue: uu,
      useDeferredValue: function (e, t) {
        var l = qe();
        return Vf(l, ze.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Ki(il)[0],
          t = qe().memoizedState;
        return [typeof e == 'boolean' ? e : Dn(e), t];
      },
      useSyncExternalStore: gf,
      useId: $f,
      useHostTransitionStatus: fu,
      useFormState: Of,
      useActionState: Of,
      useOptimistic: function (e, t) {
        var l = qe();
        return Tf(l, ze, e, t);
      },
      useMemoCache: lu,
      useCacheRefresh: kf,
    };
  mu.useEffectEvent = wf;
  var Wf = {
    readContext: lt,
    use: ki,
    useCallback: qf,
    useContext: lt,
    useEffect: ru,
    useImperativeHandle: Gf,
    useInsertionEffect: Bf,
    useLayoutEffect: Hf,
    useMemo: Yf,
    useReducer: nu,
    useRef: Rf,
    useState: function () {
      return nu(il);
    },
    useDebugValue: uu,
    useDeferredValue: function (e, t) {
      var l = qe();
      return ze === null ? ou(l, e, t) : Vf(l, ze.memoizedState, e, t);
    },
    useTransition: function () {
      var e = nu(il)[0],
        t = qe().memoizedState;
      return [typeof e == 'boolean' ? e : Dn(e), t];
    },
    useSyncExternalStore: gf,
    useId: $f,
    useHostTransitionStatus: fu,
    useFormState: Df,
    useActionState: Df,
    useOptimistic: function (e, t) {
      var l = qe();
      return ze !== null ?
          Tf(l, ze, e, t)
        : ((l.baseState = e), [e, l.queue.dispatch]);
    },
    useMemoCache: lu,
    useCacheRefresh: kf,
  };
  Wf.useEffectEvent = wf;
  function hu(e, t, l, n) {
    ((t = e.memoizedState),
      (l = l(n, t)),
      (l = l == null ? t : v({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l));
  }
  var pu = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var n = Mt(),
        u = Al(n);
      ((u.payload = t),
        l != null && (u.callback = l),
        (t = zl(e, u, n)),
        t !== null && (vt(t, e, n), zn(t, e, n)));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var n = Mt(),
        u = Al(n);
      ((u.tag = 1),
        (u.payload = t),
        l != null && (u.callback = l),
        (t = zl(e, u, n)),
        t !== null && (vt(t, e, n), zn(t, e, n)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = Mt(),
        n = Al(l);
      ((n.tag = 2),
        t != null && (n.callback = t),
        (t = zl(e, n, l)),
        t !== null && (vt(t, e, l), zn(t, e, l)));
    },
  };
  function If(e, t, l, n, u, o, m) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function' ?
        e.shouldComponentUpdate(n, o, m)
      : t.prototype && t.prototype.isPureReactComponent ? !bn(l, n) || !bn(u, o)
      : !0
    );
  }
  function ed(e, t, l, n) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(l, n),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(l, n),
      t.state !== e && pu.enqueueReplaceState(t, t.state, null));
  }
  function oa(e, t) {
    var l = t;
    if ('ref' in t) {
      l = {};
      for (var n in t) n !== 'ref' && (l[n] = t[n]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = v({}, l));
      for (var u in e) l[u] === void 0 && (l[u] = e[u]);
    }
    return l;
  }
  function td(e) {
    Ni(e);
  }
  function ld(e) {
    console.error(e);
  }
  function ad(e) {
    Ni(e);
  }
  function Wi(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function nd(e, t, l) {
    try {
      var n = e.onCaughtError;
      n(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function vu(e, t, l) {
    return (
      (l = Al(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Wi(e, t);
      }),
      l
    );
  }
  function id(e) {
    return ((e = Al(e)), (e.tag = 3), e);
  }
  function sd(e, t, l, n) {
    var u = l.type.getDerivedStateFromError;
    if (typeof u == 'function') {
      var o = n.value;
      ((e.payload = function () {
        return u(o);
      }),
        (e.callback = function () {
          nd(t, l, n);
        }));
    }
    var m = l.stateNode;
    m !== null &&
      typeof m.componentDidCatch == 'function' &&
      (e.callback = function () {
        (nd(t, l, n),
          typeof u != 'function' &&
            (Ll === null ? (Ll = new Set([this])) : Ll.add(this)));
        var _ = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: _ !== null ? _ : '',
        });
      });
  }
  function Rv(e, t, l, n, u) {
    if (
      ((l.flags |= 32768),
      n !== null && typeof n == 'object' && typeof n.then == 'function')
    ) {
      if (
        ((t = l.alternate),
        t !== null && wa(t, l, u, !0),
        (l = xt.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              wt === null ? cs() : l.alternate === null && He === 0 && (He = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = u),
              n === Gi ?
                (l.flags |= 16384)
              : ((t = l.updateQueue),
                t === null ? (l.updateQueue = new Set([n])) : t.add(n),
                Yu(e, n, u)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              n === Gi ?
                (l.flags |= 16384)
              : ((t = l.updateQueue),
                t === null ?
                  ((t = {
                    transitions: null,
                    markerInstances: null,
                    retryQueue: new Set([n]),
                  }),
                  (l.updateQueue = t))
                : ((l = t.retryQueue),
                  l === null ? (t.retryQueue = new Set([n])) : l.add(n)),
                Yu(e, n, u)),
              !1
            );
        }
        throw Error(i(435, l.tag));
      }
      return (Yu(e, n, u), cs(), !1);
    }
    if (Se)
      return (
        (t = xt.current),
        t !== null ?
          ((t.flags & 65536) === 0 && (t.flags |= 256),
          (t.flags |= 65536),
          (t.lanes = u),
          n !== wr && ((e = Error(i(422), { cause: n })), Tn(jt(e, l))))
        : (n !== wr && ((t = Error(i(423), { cause: n })), Tn(jt(t, l))),
          (e = e.current.alternate),
          (e.flags |= 65536),
          (u &= -u),
          (e.lanes |= u),
          (n = jt(n, l)),
          (u = vu(e.stateNode, n, u)),
          $r(e, u),
          He !== 4 && (He = 2)),
        !1
      );
    var o = Error(i(520), { cause: n });
    if (
      ((o = jt(o, l)),
      Vn === null ? (Vn = [o]) : Vn.push(o),
      He !== 4 && (He = 2),
      t === null)
    )
      return !0;
    ((n = jt(n, l)), (l = t));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = u & -u),
            (l.lanes |= e),
            (e = vu(l.stateNode, n, e)),
            $r(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (o = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (o !== null &&
                  typeof o.componentDidCatch == 'function' &&
                  (Ll === null || !Ll.has(o)))))
          )
            return (
              (l.flags |= 65536),
              (u &= -u),
              (l.lanes |= u),
              (u = id(u)),
              sd(u, e, l, n),
              $r(l, u),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var gu = Error(i(461)),
    Qe = !1;
  function at(e, t, l, n) {
    t.child = e === null ? cf(t, null, l, n) : ra(t, e.child, l, n);
  }
  function rd(e, t, l, n, u) {
    l = l.render;
    var o = t.ref;
    if ('ref' in n) {
      var m = {};
      for (var _ in n) _ !== 'ref' && (m[_] = n[_]);
    } else m = n;
    return (
      aa(t),
      (n = Wr(e, t, l, m, o, u)),
      (_ = Ir()),
      e !== null && !Qe ?
        (eu(e, t, u), sl(e, t, u))
      : (Se && _ && Rr(t), (t.flags |= 1), at(e, t, n, u), t.child)
    );
  }
  function ud(e, t, l, n, u) {
    if (e === null) {
      var o = l.type;
      return (
          typeof o == 'function' &&
            !Or(o) &&
            o.defaultProps === void 0 &&
            l.compare === null
        ) ?
          ((t.tag = 15), (t.type = o), od(e, t, o, n, u))
        : ((e = Ri(l.type, null, n, t, t.mode, u)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !Cu(e, u))) {
      var m = o.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : bn), l(m, n) && e.ref === t.ref)
      )
        return sl(e, t, u);
    }
    return (
      (t.flags |= 1),
      (e = el(o, n)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function od(e, t, l, n, u) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (bn(o, n) && e.ref === t.ref)
        if (((Qe = !1), (t.pendingProps = n = o), Cu(e, u)))
          (e.flags & 131072) !== 0 && (Qe = !0);
        else return ((t.lanes = e.lanes), sl(e, t, u));
    }
    return yu(e, t, l, n, u);
  }
  function cd(e, t, l, n) {
    var u = n.children,
      o = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      n.mode === 'hidden')
    ) {
      if ((t.flags & 128) !== 0) {
        if (((o = o !== null ? o.baseLanes | l : l), e !== null)) {
          for (n = t.child = e.child, u = 0; n !== null; )
            ((u = u | n.lanes | n.childLanes), (n = n.sibling));
          n = u & ~o;
        } else ((n = 0), (t.child = null));
        return fd(e, t, o, l, n);
      }
      if ((l & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Hi(t, o !== null ? o.cachePool : null),
          o !== null ? mf(t, o) : Kr(),
          hf(t));
      else
        return (
          (n = t.lanes = 536870912),
          fd(e, t, o !== null ? o.baseLanes | l : l, l, n)
        );
    } else
      o !== null ?
        (Hi(t, o.cachePool), mf(t, o), Ol(), (t.memoizedState = null))
      : (e !== null && Hi(t, null), Kr(), Ol());
    return (at(e, t, u, l), t.child);
  }
  function wn(e, t) {
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
  function fd(e, t, l, n, u) {
    var o = Vr();
    return (
      (o = o === null ? null : { parent: Ve._currentValue, pool: o }),
      (t.memoizedState = { baseLanes: l, cachePool: o }),
      e !== null && Hi(t, null),
      Kr(),
      hf(t),
      e !== null && wa(e, t, n, !0),
      (t.childLanes = u),
      null
    );
  }
  function Ii(e, t) {
    return (
      (t = ts({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function dd(e, t, l) {
    return (
      ra(t, e.child, null, l),
      (e = Ii(t, t.pendingProps)),
      (e.flags |= 2),
      Tt(t),
      (t.memoizedState = null),
      e
    );
  }
  function Lv(e, t, l) {
    var n = t.pendingProps,
      u = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Se) {
        if (n.mode === 'hidden')
          return ((e = Ii(t, n)), (t.lanes = 536870912), wn(null, e));
        if (
          (Fr(t),
          (e = De) ?
            ((e = Em(e, Lt)),
            (e = e !== null && e.data === '&' ? e : null),
            e !== null &&
              ((t.memoizedState = {
                dehydrated: e,
                treeContext: xl !== null ? { id: Qt, overflow: Zt } : null,
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (l = Kc(e)),
              (l.return = t),
              (t.child = l),
              (tt = t),
              (De = null)))
          : (e = null),
          e === null)
        )
          throw El(t);
        return ((t.lanes = 536870912), null);
      }
      return Ii(t, n);
    }
    var o = e.memoizedState;
    if (o !== null) {
      var m = o.dehydrated;
      if ((Fr(t), u))
        if (t.flags & 256) ((t.flags &= -257), (t = dd(e, t, l)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(i(558));
      else if (
        (Qe || wa(e, t, l, !1), (u = (l & e.childLanes) !== 0), Qe || u)
      ) {
        if (
          ((n = je),
          n !== null && ((m = tc(n, l)), m !== 0 && m !== o.retryLane))
        )
          throw ((o.retryLane = m), Il(e, m), vt(n, e, m), gu);
        (cs(), (t = dd(e, t, l)));
      } else
        ((e = o.treeContext),
          (De = Bt(m.nextSibling)),
          (tt = t),
          (Se = !0),
          (Tl = null),
          (Lt = !1),
          e !== null && Pc(t, e),
          (t = Ii(t, n)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = el(e.child, { mode: n.mode, children: n.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function es(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != 'function' && typeof l != 'object') throw Error(i(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function yu(e, t, l, n, u) {
    return (
      aa(t),
      (l = Wr(e, t, l, n, void 0, u)),
      (n = Ir()),
      e !== null && !Qe ?
        (eu(e, t, u), sl(e, t, u))
      : (Se && n && Rr(t), (t.flags |= 1), at(e, t, l, u), t.child)
    );
  }
  function md(e, t, l, n, u, o) {
    return (
      aa(t),
      (t.updateQueue = null),
      (l = vf(t, n, l, u)),
      pf(e),
      (n = Ir()),
      e !== null && !Qe ?
        (eu(e, t, o), sl(e, t, o))
      : (Se && n && Rr(t), (t.flags |= 1), at(e, t, l, o), t.child)
    );
  }
  function hd(e, t, l, n, u) {
    if ((aa(t), t.stateNode === null)) {
      var o = ja,
        m = l.contextType;
      (typeof m == 'object' && m !== null && (o = lt(m)),
        (o = new l(n, o)),
        (t.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = pu),
        (t.stateNode = o),
        (o._reactInternals = t),
        (o = t.stateNode),
        (o.props = n),
        (o.state = t.memoizedState),
        (o.refs = {}),
        Qr(t),
        (m = l.contextType),
        (o.context = typeof m == 'object' && m !== null ? lt(m) : ja),
        (o.state = t.memoizedState),
        (m = l.getDerivedStateFromProps),
        typeof m == 'function' && (hu(t, l, m, n), (o.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == 'function' ||
          typeof o.getSnapshotBeforeUpdate == 'function' ||
          (typeof o.UNSAFE_componentWillMount != 'function' &&
            typeof o.componentWillMount != 'function') ||
          ((m = o.state),
          typeof o.componentWillMount == 'function' && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == 'function' &&
            o.UNSAFE_componentWillMount(),
          m !== o.state && pu.enqueueReplaceState(o, o.state, null),
          On(t, n, o, u),
          Nn(),
          (o.state = t.memoizedState)),
        typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
        (n = !0));
    } else if (e === null) {
      o = t.stateNode;
      var _ = t.memoizedProps,
        E = oa(l, _);
      o.props = E;
      var w = o.context,
        q = l.contextType;
      ((m = ja), typeof q == 'object' && q !== null && (m = lt(q)));
      var Q = l.getDerivedStateFromProps;
      ((q =
        typeof Q == 'function' ||
        typeof o.getSnapshotBeforeUpdate == 'function'),
        (_ = t.pendingProps !== _),
        q ||
          (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof o.componentWillReceiveProps != 'function') ||
          ((_ || w !== m) && ed(t, o, n, m)),
        (Ml = !1));
      var B = t.memoizedState;
      ((o.state = B),
        On(t, n, o, u),
        Nn(),
        (w = t.memoizedState),
        _ || B !== w || Ml ?
          (typeof Q == 'function' && (hu(t, l, Q, n), (w = t.memoizedState)),
          (E = Ml || If(t, l, E, n, B, w, m)) ?
            (q ||
              (typeof o.UNSAFE_componentWillMount != 'function' &&
                typeof o.componentWillMount != 'function') ||
              (typeof o.componentWillMount == 'function' &&
                o.componentWillMount(),
              typeof o.UNSAFE_componentWillMount == 'function' &&
                o.UNSAFE_componentWillMount()),
            typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
          : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
            (t.memoizedProps = n),
            (t.memoizedState = w)),
          (o.props = n),
          (o.state = w),
          (o.context = m),
          (n = E))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
          (n = !1)));
    } else {
      ((o = t.stateNode),
        Zr(e, t),
        (m = t.memoizedProps),
        (q = oa(l, m)),
        (o.props = q),
        (Q = t.pendingProps),
        (B = o.context),
        (w = l.contextType),
        (E = ja),
        typeof w == 'object' && w !== null && (E = lt(w)),
        (_ = l.getDerivedStateFromProps),
        (w =
          typeof _ == 'function' ||
          typeof o.getSnapshotBeforeUpdate == 'function') ||
          (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof o.componentWillReceiveProps != 'function') ||
          ((m !== Q || B !== E) && ed(t, o, n, E)),
        (Ml = !1),
        (B = t.memoizedState),
        (o.state = B),
        On(t, n, o, u),
        Nn());
      var U = t.memoizedState;
      (
        m !== Q ||
        B !== U ||
        Ml ||
        (e !== null && e.dependencies !== null && wi(e.dependencies))
      ) ?
        (typeof _ == 'function' && (hu(t, l, _, n), (U = t.memoizedState)),
        (
          (q =
            Ml ||
            If(t, l, q, n, B, U, E) ||
            (e !== null && e.dependencies !== null && wi(e.dependencies)))
        ) ?
          (w ||
            (typeof o.UNSAFE_componentWillUpdate != 'function' &&
              typeof o.componentWillUpdate != 'function') ||
            (typeof o.componentWillUpdate == 'function' &&
              o.componentWillUpdate(n, U, E),
            typeof o.UNSAFE_componentWillUpdate == 'function' &&
              o.UNSAFE_componentWillUpdate(n, U, E)),
          typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
        : (typeof o.componentDidUpdate != 'function' ||
            (m === e.memoizedProps && B === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != 'function' ||
            (m === e.memoizedProps && B === e.memoizedState) ||
            (t.flags |= 1024),
          (t.memoizedProps = n),
          (t.memoizedState = U)),
        (o.props = n),
        (o.state = U),
        (o.context = E),
        (n = q))
      : (typeof o.componentDidUpdate != 'function' ||
          (m === e.memoizedProps && B === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (m === e.memoizedProps && B === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
    }
    return (
      (o = n),
      es(e, t),
      (n = (t.flags & 128) !== 0),
      o || n ?
        ((o = t.stateNode),
        (l =
          n && typeof l.getDerivedStateFromError != 'function' ?
            null
          : o.render()),
        (t.flags |= 1),
        e !== null && n ?
          ((t.child = ra(t, e.child, null, u)), (t.child = ra(t, null, l, u)))
        : at(e, t, l, u),
        (t.memoizedState = o.state),
        (e = t.child))
      : (e = sl(e, t, u)),
      e
    );
  }
  function pd(e, t, l, n) {
    return (ta(), (t.flags |= 256), at(e, t, l, n), t.child);
  }
  var _u = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function bu(e) {
    return { baseLanes: e, cachePool: af() };
  }
  function Su(e, t, l) {
    return ((e = e !== null ? e.childLanes & ~l : 0), t && (e |= Ct), e);
  }
  function vd(e, t, l) {
    var n = t.pendingProps,
      u = !1,
      o = (t.flags & 128) !== 0,
      m;
    if (
      ((m = o) ||
        (m =
          e !== null && e.memoizedState === null ? !1 : (Ge.current & 2) !== 0),
      m && ((u = !0), (t.flags &= -129)),
      (m = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Se) {
        if (
          (u ? Nl(t) : Ol(),
          (e = De) ?
            ((e = Em(e, Lt)),
            (e = e !== null && e.data !== '&' ? e : null),
            e !== null &&
              ((t.memoizedState = {
                dehydrated: e,
                treeContext: xl !== null ? { id: Qt, overflow: Zt } : null,
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (l = Kc(e)),
              (l.return = t),
              (t.child = l),
              (tt = t),
              (De = null)))
          : (e = null),
          e === null)
        )
          throw El(t);
        return (ao(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var _ = n.children;
      return (
        (n = n.fallback),
        u ?
          (Ol(),
          (u = t.mode),
          (_ = ts({ mode: 'hidden', children: _ }, u)),
          (n = ea(n, u, l, null)),
          (_.return = t),
          (n.return = t),
          (_.sibling = n),
          (t.child = _),
          (n = t.child),
          (n.memoizedState = bu(l)),
          (n.childLanes = Su(e, m, l)),
          (t.memoizedState = _u),
          wn(null, n))
        : (Nl(t), xu(t, _))
      );
    }
    var E = e.memoizedState;
    if (E !== null && ((_ = E.dehydrated), _ !== null)) {
      if (o)
        t.flags & 256 ? (Nl(t), (t.flags &= -257), (t = Tu(e, t, l)))
        : t.memoizedState !== null ?
          (Ol(), (t.child = e.child), (t.flags |= 128), (t = null))
        : (Ol(),
          (_ = n.fallback),
          (u = t.mode),
          (n = ts({ mode: 'visible', children: n.children }, u)),
          (_ = ea(_, u, l, null)),
          (_.flags |= 2),
          (n.return = t),
          (_.return = t),
          (n.sibling = _),
          (t.child = n),
          ra(t, e.child, null, l),
          (n = t.child),
          (n.memoizedState = bu(l)),
          (n.childLanes = Su(e, m, l)),
          (t.memoizedState = _u),
          (t = wn(null, n)));
      else if ((Nl(t), ao(_))) {
        if (((m = _.nextSibling && _.nextSibling.dataset), m)) var w = m.dgst;
        ((m = w),
          (n = Error(i(419))),
          (n.stack = ''),
          (n.digest = m),
          Tn({ value: n, source: null, stack: null }),
          (t = Tu(e, t, l)));
      } else if (
        (Qe || wa(e, t, l, !1), (m = (l & e.childLanes) !== 0), Qe || m)
      ) {
        if (
          ((m = je),
          m !== null && ((n = tc(m, l)), n !== 0 && n !== E.retryLane))
        )
          throw ((E.retryLane = n), Il(e, n), vt(m, e, n), gu);
        (lo(_) || cs(), (t = Tu(e, t, l)));
      } else
        lo(_) ?
          ((t.flags |= 192), (t.child = e.child), (t = null))
        : ((e = E.treeContext),
          (De = Bt(_.nextSibling)),
          (tt = t),
          (Se = !0),
          (Tl = null),
          (Lt = !1),
          e !== null && Pc(t, e),
          (t = xu(t, n.children)),
          (t.flags |= 4096));
      return t;
    }
    return u ?
        (Ol(),
        (_ = n.fallback),
        (u = t.mode),
        (E = e.child),
        (w = E.sibling),
        (n = el(E, { mode: 'hidden', children: n.children })),
        (n.subtreeFlags = E.subtreeFlags & 65011712),
        w !== null ? (_ = el(w, _)) : ((_ = ea(_, u, l, null)), (_.flags |= 2)),
        (_.return = t),
        (n.return = t),
        (n.sibling = _),
        (t.child = n),
        wn(null, n),
        (n = t.child),
        (_ = e.child.memoizedState),
        _ === null ?
          (_ = bu(l))
        : ((u = _.cachePool),
          u !== null ?
            ((E = Ve._currentValue),
            (u = u.parent !== E ? { parent: E, pool: E } : u))
          : (u = af()),
          (_ = { baseLanes: _.baseLanes | l, cachePool: u })),
        (n.memoizedState = _),
        (n.childLanes = Su(e, m, l)),
        (t.memoizedState = _u),
        wn(e.child, n))
      : (Nl(t),
        (l = e.child),
        (e = l.sibling),
        (l = el(l, { mode: 'visible', children: n.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((m = t.deletions),
          m === null ? ((t.deletions = [e]), (t.flags |= 16)) : m.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function xu(e, t) {
    return (
      (t = ts({ mode: 'visible', children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ts(e, t) {
    return ((e = St(22, e, null, t)), (e.lanes = 0), e);
  }
  function Tu(e, t, l) {
    return (
      ra(t, e.child, null, l),
      (e = xu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function gd(e, t, l) {
    e.lanes |= t;
    var n = e.alternate;
    (n !== null && (n.lanes |= t), Ur(e.return, t, l));
  }
  function Eu(e, t, l, n, u, o) {
    var m = e.memoizedState;
    m === null ?
      (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: l,
        tailMode: u,
        treeForkCount: o,
      })
    : ((m.isBackwards = t),
      (m.rendering = null),
      (m.renderingStartTime = 0),
      (m.last = n),
      (m.tail = l),
      (m.tailMode = u),
      (m.treeForkCount = o));
  }
  function yd(e, t, l) {
    var n = t.pendingProps,
      u = n.revealOrder,
      o = n.tail;
    n = n.children;
    var m = Ge.current,
      _ = (m & 2) !== 0;
    if (
      (_ ? ((m = (m & 1) | 2), (t.flags |= 128)) : (m &= 1),
      W(Ge, m),
      at(e, t, n, l),
      (n = Se ? xn : 0),
      !_ && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && gd(e, l, t);
        else if (e.tag === 19) gd(e, l, t);
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
    switch (u) {
      case 'forwards':
        for (l = t.child, u = null; l !== null; )
          ((e = l.alternate),
            e !== null && Xi(e) === null && (u = l),
            (l = l.sibling));
        ((l = u),
          l === null ?
            ((u = t.child), (t.child = null))
          : ((u = l.sibling), (l.sibling = null)),
          Eu(t, !1, u, l, o, n));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (l = null, u = t.child, t.child = null; u !== null; ) {
          if (((e = u.alternate), e !== null && Xi(e) === null)) {
            t.child = u;
            break;
          }
          ((e = u.sibling), (u.sibling = l), (l = u), (u = e));
        }
        Eu(t, !0, l, null, o, n);
        break;
      case 'together':
        Eu(t, !1, null, null, void 0, n);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function sl(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Rl |= t.lanes),
      (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((wa(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (
        e = t.child, l = el(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (l = l.sibling = el(e, e.pendingProps)),
          (l.return = t));
      l.sibling = null;
    }
    return t.child;
  }
  function Cu(e, t) {
    return (e.lanes & t) !== 0 ?
        !0
      : ((e = e.dependencies), !!(e !== null && wi(e)));
  }
  function wv(e, t, l) {
    switch (t.tag) {
      case 3:
        (st(t, t.stateNode.containerInfo),
          Cl(t, Ve, e.memoizedState.cache),
          ta());
        break;
      case 27:
      case 5:
        rn(t);
        break;
      case 4:
        st(t, t.stateNode.containerInfo);
        break;
      case 10:
        Cl(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Fr(t), null);
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return (
            n.dehydrated !== null ? (Nl(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0 ? vd(e, t, l)
            : (Nl(t), (e = sl(e, t, l)), e !== null ? e.sibling : null)
          );
        Nl(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (
          ((n = (l & t.childLanes) !== 0),
          n || (wa(e, t, l, !1), (n = (l & t.childLanes) !== 0)),
          u)
        ) {
          if (n) return yd(e, t, l);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          W(Ge, Ge.current),
          n)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), cd(e, t, l, t.pendingProps));
      case 24:
        Cl(t, Ve, e.memoizedState.cache);
    }
    return sl(e, t, l);
  }
  function _d(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Qe = !0;
      else {
        if (!Cu(e, l) && (t.flags & 128) === 0) return ((Qe = !1), wv(e, t, l));
        Qe = (e.flags & 131072) !== 0;
      }
    else ((Qe = !1), Se && (t.flags & 1048576) !== 0 && Fc(t, xn, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (((e = ia(t.elementType)), (t.type = e), typeof e == 'function'))
            Or(e) ?
              ((n = oa(e, n)), (t.tag = 1), (t = hd(null, t, e, n, l)))
            : ((t.tag = 0), (t = yu(null, t, e, n, l)));
          else {
            if (e != null) {
              var u = e.$$typeof;
              if (u === V) {
                ((t.tag = 11), (t = rd(null, t, e, n, l)));
                break e;
              } else if (u === K) {
                ((t.tag = 14), (t = ud(null, t, e, n, l)));
                break e;
              }
            }
            throw ((t = re(e) || e), Error(i(306, t, '')));
          }
        }
        return t;
      case 0:
        return yu(e, t, t.type, t.pendingProps, l);
      case 1:
        return ((n = t.type), (u = oa(n, t.pendingProps)), hd(e, t, n, u, l));
      case 3:
        e: {
          if ((st(t, t.stateNode.containerInfo), e === null))
            throw Error(i(387));
          n = t.pendingProps;
          var o = t.memoizedState;
          ((u = o.element), Zr(e, t), On(t, n, null, l));
          var m = t.memoizedState;
          if (
            ((n = m.cache),
            Cl(t, Ve, n),
            n !== o.cache && Gr(t, [Ve], l, !0),
            Nn(),
            (n = m.element),
            o.isDehydrated)
          )
            if (
              ((o = { element: n, isDehydrated: !1, cache: m.cache }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              t = pd(e, t, n, l);
              break e;
            } else if (n !== u) {
              ((u = jt(Error(i(424)), t)), Tn(u), (t = pd(e, t, n, l)));
              break e;
            } else
              for (
                e = t.stateNode.containerInfo,
                  e.nodeType === 9 ?
                    (e = e.body)
                  : (e = e.nodeName === 'HTML' ? e.ownerDocument.body : e),
                  De = Bt(e.firstChild),
                  tt = t,
                  Se = !0,
                  Tl = null,
                  Lt = !0,
                  l = cf(t, null, n, l),
                  t.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
          else {
            if ((ta(), n === u)) {
              t = sl(e, t, l);
              break e;
            }
            at(e, t, n, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          es(e, t),
          e === null ?
            (l = Om(t.type, null, t.pendingProps, null)) ?
              (t.memoizedState = l)
            : Se ||
              ((l = t.type),
              (e = t.pendingProps),
              (n = gs(ve.current).createElement(l)),
              (n[et] = t),
              (n[ct] = e),
              nt(n, l, e),
              Ke(n),
              (t.stateNode = n))
          : (t.memoizedState = Om(
              t.type,
              e.memoizedProps,
              t.pendingProps,
              e.memoizedState,
            )),
          null
        );
      case 27:
        return (
          rn(t),
          e === null &&
            Se &&
            ((n = t.stateNode = Am(t.type, t.pendingProps, ve.current)),
            (tt = t),
            (Lt = !0),
            (u = De),
            Ul(t.type) ? ((no = u), (De = Bt(n.firstChild))) : (De = u)),
          at(e, t, t.pendingProps.children, l),
          es(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Se &&
            ((u = n = De) &&
              ((n = fg(n, t.type, t.pendingProps, Lt)),
              n !== null ?
                ((t.stateNode = n),
                (tt = t),
                (De = Bt(n.firstChild)),
                (Lt = !1),
                (u = !0))
              : (u = !1)),
            u || El(t)),
          rn(t),
          (u = t.type),
          (o = t.pendingProps),
          (m = e !== null ? e.memoizedProps : null),
          (n = o.children),
          Iu(u, o) ? (n = null) : m !== null && Iu(u, m) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = Wr(e, t, Mv, null, null, l)), (Fn._currentValue = u)),
          es(e, t),
          at(e, t, n, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            Se &&
            ((e = l = De) &&
              ((l = dg(l, t.pendingProps, Lt)),
              l !== null ?
                ((t.stateNode = l), (tt = t), (De = null), (e = !0))
              : (e = !1)),
            e || El(t)),
          null
        );
      case 13:
        return vd(e, t, l);
      case 4:
        return (
          st(t, t.stateNode.containerInfo),
          (n = t.pendingProps),
          e === null ? (t.child = ra(t, null, n, l)) : at(e, t, n, l),
          t.child
        );
      case 11:
        return rd(e, t, t.type, t.pendingProps, l);
      case 7:
        return (at(e, t, t.pendingProps, l), t.child);
      case 8:
        return (at(e, t, t.pendingProps.children, l), t.child);
      case 12:
        return (at(e, t, t.pendingProps.children, l), t.child);
      case 10:
        return (
          (n = t.pendingProps),
          Cl(t, t.type, n.value),
          at(e, t, n.children, l),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (n = t.pendingProps.children),
          aa(t),
          (u = lt(u)),
          (n = n(u)),
          (t.flags |= 1),
          at(e, t, n, l),
          t.child
        );
      case 14:
        return ud(e, t, t.type, t.pendingProps, l);
      case 15:
        return od(e, t, t.type, t.pendingProps, l);
      case 19:
        return yd(e, t, l);
      case 31:
        return Lv(e, t, l);
      case 22:
        return cd(e, t, l, t.pendingProps);
      case 24:
        return (
          aa(t),
          (n = lt(Ve)),
          e === null ?
            ((u = Vr()),
            u === null &&
              ((u = je),
              (o = qr()),
              (u.pooledCache = o),
              o.refCount++,
              o !== null && (u.pooledCacheLanes |= l),
              (u = o)),
            (t.memoizedState = { parent: n, cache: u }),
            Qr(t),
            Cl(t, Ve, u))
          : ((e.lanes & l) !== 0 && (Zr(e, t), On(t, null, null, l), Nn()),
            (u = e.memoizedState),
            (o = t.memoizedState),
            u.parent !== n ?
              ((u = { parent: n, cache: n }),
              (t.memoizedState = u),
              t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u),
              Cl(t, Ve, n))
            : ((n = o.cache),
              Cl(t, Ve, n),
              n !== u.cache && Gr(t, [Ve], l, !0))),
          at(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(i(156, t.tag));
  }
  function rl(e) {
    e.flags |= 4;
  }
  function Mu(e, t, l, n, u) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (u & 335544128) === u))
        if (e.stateNode.complete) e.flags |= 8192;
        else if ($d()) e.flags |= 8192;
        else throw ((sa = Gi), Xr);
    } else e.flags &= -16777217;
  }
  function bd(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !wm(t)))
      if ($d()) e.flags |= 8192;
      else throw ((sa = Gi), Xr);
  }
  function ls(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Wo() : 536870912), (e.lanes |= t), (ka |= t)));
  }
  function Bn(e, t) {
    if (!Se)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var l = null; t !== null; )
            (t.alternate !== null && (l = t), (t = t.sibling));
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case 'collapsed':
          l = e.tail;
          for (var n = null; l !== null; )
            (l.alternate !== null && (n = l), (l = l.sibling));
          n === null ?
            t || e.tail === null ?
              (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
      }
  }
  function Re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      n = 0;
    if (t)
      for (var u = e.child; u !== null; )
        ((l |= u.lanes | u.childLanes),
          (n |= u.subtreeFlags & 65011712),
          (n |= u.flags & 65011712),
          (u.return = e),
          (u = u.sibling));
    else
      for (u = e.child; u !== null; )
        ((l |= u.lanes | u.childLanes),
          (n |= u.subtreeFlags),
          (n |= u.flags),
          (u.return = e),
          (u = u.sibling));
    return ((e.subtreeFlags |= n), (e.childLanes = l), t);
  }
  function Bv(e, t, l) {
    var n = t.pendingProps;
    switch ((Lr(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Re(t), null);
      case 1:
        return (Re(t), null);
      case 3:
        return (
          (l = t.stateNode),
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          al(Ve),
          Ue(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (La(t) ?
              rl(t)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), Br())),
          Re(t),
          null
        );
      case 26:
        var u = t.type,
          o = t.memoizedState;
        return (
          e === null ?
            (rl(t),
            o !== null ? (Re(t), bd(t, o)) : (Re(t), Mu(t, u, null, n, l)))
          : o ?
            o !== e.memoizedState ?
              (rl(t), Re(t), bd(t, o))
            : (Re(t), (t.flags &= -16777217))
          : ((e = e.memoizedProps), e !== n && rl(t), Re(t), Mu(t, u, e, n, l)),
          null
        );
      case 27:
        if (
          (mi(t),
          (l = ve.current),
          (u = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== n && rl(t);
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(i(166));
            return (Re(t), null);
          }
          ((e = le.current),
            La(t) ? Wc(t) : ((e = Am(u, n, l)), (t.stateNode = e), rl(t)));
        }
        return (Re(t), null);
      case 5:
        if ((mi(t), (u = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== n && rl(t);
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(i(166));
            return (Re(t), null);
          }
          if (((o = le.current), La(t))) Wc(t);
          else {
            var m = gs(ve.current);
            switch (o) {
              case 1:
                o = m.createElementNS('http://www.w3.org/2000/svg', u);
                break;
              case 2:
                o = m.createElementNS('http://www.w3.org/1998/Math/MathML', u);
                break;
              default:
                switch (u) {
                  case 'svg':
                    o = m.createElementNS('http://www.w3.org/2000/svg', u);
                    break;
                  case 'math':
                    o = m.createElementNS(
                      'http://www.w3.org/1998/Math/MathML',
                      u,
                    );
                    break;
                  case 'script':
                    ((o = m.createElement('div')),
                      (o.innerHTML = '<script><\/script>'),
                      (o = o.removeChild(o.firstChild)));
                    break;
                  case 'select':
                    ((o =
                      typeof n.is == 'string' ?
                        m.createElement('select', { is: n.is })
                      : m.createElement('select')),
                      n.multiple ?
                        (o.multiple = !0)
                      : n.size && (o.size = n.size));
                    break;
                  default:
                    o =
                      typeof n.is == 'string' ?
                        m.createElement(u, { is: n.is })
                      : m.createElement(u);
                }
            }
            ((o[et] = t), (o[ct] = n));
            e: for (m = t.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6) o.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                ((m.child.return = m), (m = m.child));
                continue;
              }
              if (m === t) break e;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === t) break e;
                m = m.return;
              }
              ((m.sibling.return = m.return), (m = m.sibling));
            }
            t.stateNode = o;
            e: switch ((nt(o, u, n), u)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                n = !!n.autoFocus;
                break e;
              case 'img':
                n = !0;
                break e;
              default:
                n = !1;
            }
            n && rl(t);
          }
        }
        return (
          Re(t),
          Mu(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== n && rl(t);
        else {
          if (typeof n != 'string' && t.stateNode === null) throw Error(i(166));
          if (((e = ve.current), La(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (n = null),
              (u = tt),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  n = u.memoizedProps;
              }
            ((e[et] = t),
              (e = !!(
                e.nodeValue === l ||
                (n !== null && n.suppressHydrationWarning === !0) ||
                vm(e.nodeValue, l)
              )),
              e || El(t, !0));
          } else
            ((e = gs(e).createTextNode(n)), (e[et] = t), (t.stateNode = e));
        }
        return (Re(t), null);
      case 31:
        if (((l = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((n = La(t)), l !== null)) {
            if (e === null) {
              if (!n) throw Error(i(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(i(557));
              e[et] = t;
            } else
              (ta(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Re(t), (e = !1));
          } else
            ((l = Br()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = l),
              (e = !0));
          if (!e) return t.flags & 256 ? (Tt(t), t) : (Tt(t), null);
          if ((t.flags & 128) !== 0) throw Error(i(558));
        }
        return (Re(t), null);
      case 13:
        if (
          ((n = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((u = La(t)), n !== null && n.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(i(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(i(317));
              u[et] = t;
            } else
              (ta(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Re(t), (u = !1));
          } else
            ((u = Br()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return t.flags & 256 ? (Tt(t), t) : (Tt(t), null);
        }
        return (
          Tt(t),
          (t.flags & 128) !== 0 ?
            ((t.lanes = l), t)
          : ((l = n !== null),
            (e = e !== null && e.memoizedState !== null),
            l &&
              ((n = t.child),
              (u = null),
              n.alternate !== null &&
                n.alternate.memoizedState !== null &&
                n.alternate.memoizedState.cachePool !== null &&
                (u = n.alternate.memoizedState.cachePool.pool),
              (o = null),
              n.memoizedState !== null &&
                n.memoizedState.cachePool !== null &&
                (o = n.memoizedState.cachePool.pool),
              o !== u && (n.flags |= 2048)),
            l !== e && l && (t.child.flags |= 8192),
            ls(t, t.updateQueue),
            Re(t),
            null)
        );
      case 4:
        return (Ue(), e === null && Ku(t.stateNode.containerInfo), Re(t), null);
      case 10:
        return (al(t.type), Re(t), null);
      case 19:
        if (($(Ge), (n = t.memoizedState), n === null)) return (Re(t), null);
        if (((u = (t.flags & 128) !== 0), (o = n.rendering), o === null))
          if (u) Bn(n, !1);
          else {
            if (He !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((o = Xi(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      Bn(n, !1),
                      e = o.updateQueue,
                      t.updateQueue = e,
                      ls(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;
                  )
                    (kc(l, e), (l = l.sibling));
                  return (
                    W(Ge, (Ge.current & 1) | 2),
                    Se && tl(t, n.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            n.tail !== null &&
              gt() > rs &&
              ((t.flags |= 128), (u = !0), Bn(n, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((e = Xi(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                ls(t, e),
                Bn(n, !0),
                n.tail === null &&
                  n.tailMode === 'hidden' &&
                  !o.alternate &&
                  !Se)
              )
                return (Re(t), null);
            } else
              2 * gt() - n.renderingStartTime > rs &&
                l !== 536870912 &&
                ((t.flags |= 128), (u = !0), Bn(n, !1), (t.lanes = 4194304));
          n.isBackwards ?
            ((o.sibling = t.child), (t.child = o))
          : ((e = n.last),
            e !== null ? (e.sibling = o) : (t.child = o),
            (n.last = o));
        }
        return n.tail !== null ?
            ((e = n.tail),
            (n.rendering = e),
            (n.tail = e.sibling),
            (n.renderingStartTime = gt()),
            (e.sibling = null),
            (l = Ge.current),
            W(Ge, u ? (l & 1) | 2 : l & 1),
            Se && tl(t, n.treeForkCount),
            e)
          : (Re(t), null);
      case 22:
      case 23:
        return (
          Tt(t),
          Jr(),
          (n = t.memoizedState !== null),
          e !== null ?
            (e.memoizedState !== null) !== n && (t.flags |= 8192)
          : n && (t.flags |= 8192),
          n ?
            (l & 536870912) !== 0 &&
            (t.flags & 128) === 0 &&
            (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Re(t),
          (l = t.updateQueue),
          l !== null && ls(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (n = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          n !== l && (t.flags |= 2048),
          e !== null && $(na),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          al(Ve),
          Re(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function Hv(e, t) {
    switch ((Lr(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          al(Ve),
          Ue(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ?
            ((t.flags = (e & -65537) | 128), t)
          : null
        );
      case 26:
      case 27:
      case 5:
        return (mi(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Tt(t), t.alternate === null)) throw Error(i(340));
          ta();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (Tt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(i(340));
          ta();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ($(Ge), null);
      case 4:
        return (Ue(), null);
      case 10:
        return (al(t.type), null);
      case 22:
      case 23:
        return (
          Tt(t),
          Jr(),
          e !== null && $(na),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (al(Ve), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Sd(e, t) {
    switch ((Lr(t), t.tag)) {
      case 3:
        (al(Ve), Ue());
        break;
      case 26:
      case 27:
      case 5:
        mi(t);
        break;
      case 4:
        Ue();
        break;
      case 31:
        t.memoizedState !== null && Tt(t);
        break;
      case 13:
        Tt(t);
        break;
      case 19:
        $(Ge);
        break;
      case 10:
        al(t.type);
        break;
      case 22:
      case 23:
        (Tt(t), Jr(), e !== null && $(na));
        break;
      case 24:
        al(Ve);
    }
  }
  function Hn(e, t) {
    try {
      var l = t.updateQueue,
        n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        l = u;
        do {
          if ((l.tag & e) === e) {
            n = void 0;
            var o = l.create,
              m = l.inst;
            ((n = o()), (m.destroy = n));
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (_) {
      Ae(t, t.return, _);
    }
  }
  function jl(e, t, l) {
    try {
      var n = t.updateQueue,
        u = n !== null ? n.lastEffect : null;
      if (u !== null) {
        var o = u.next;
        n = o;
        do {
          if ((n.tag & e) === e) {
            var m = n.inst,
              _ = m.destroy;
            if (_ !== void 0) {
              ((m.destroy = void 0), (u = t));
              var E = l,
                w = _;
              try {
                w();
              } catch (q) {
                Ae(u, E, q);
              }
            }
          }
          n = n.next;
        } while (n !== o);
      }
    } catch (q) {
      Ae(t, t.return, q);
    }
  }
  function xd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        df(t, l);
      } catch (n) {
        Ae(e, e.return, n);
      }
    }
  }
  function Td(e, t, l) {
    ((l.props = oa(e.type, e.memoizedProps)), (l.state = e.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (n) {
      Ae(e, t, n);
    }
  }
  function Un(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = e.stateNode;
            break;
          case 30:
            n = e.stateNode;
            break;
          default:
            n = e.stateNode;
        }
        typeof l == 'function' ? (e.refCleanup = l(n)) : (l.current = n);
      }
    } catch (u) {
      Ae(e, t, u);
    }
  }
  function $t(e, t) {
    var l = e.ref,
      n = e.refCleanup;
    if (l !== null)
      if (typeof n == 'function')
        try {
          n();
        } catch (u) {
          Ae(e, t, u);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof l == 'function')
        try {
          l(null);
        } catch (u) {
          Ae(e, t, u);
        }
      else l.current = null;
  }
  function Ed(e) {
    var t = e.type,
      l = e.memoizedProps,
      n = e.stateNode;
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          l.autoFocus && n.focus();
          break e;
        case 'img':
          l.src ? (n.src = l.src) : l.srcSet && (n.srcset = l.srcSet);
      }
    } catch (u) {
      Ae(e, e.return, u);
    }
  }
  function Au(e, t, l) {
    try {
      var n = e.stateNode;
      (ig(n, e.type, l, t), (n[ct] = t));
    } catch (u) {
      Ae(e, e.return, u);
    }
  }
  function Cd(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Ul(e.type)) ||
      e.tag === 4
    );
  }
  function zu(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Cd(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && Ul(e.type)) ||
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
  function Nu(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
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
          l != null || t.onclick !== null || (t.onclick = Wt)));
    else if (
      n !== 4 &&
      (n === 27 && Ul(e.type) && ((l = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Nu(e, t, l), e = e.sibling; e !== null; )
        (Nu(e, t, l), (e = e.sibling));
  }
  function as(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      ((e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e));
    else if (
      n !== 4 &&
      (n === 27 && Ul(e.type) && (l = e.stateNode), (e = e.child), e !== null)
    )
      for (as(e, t, l), e = e.sibling; e !== null; )
        (as(e, t, l), (e = e.sibling));
  }
  function Md(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var n = e.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      (nt(t, n, l), (t[et] = e), (t[ct] = l));
    } catch (o) {
      Ae(e, e.return, o);
    }
  }
  var ul = !1,
    Ze = !1,
    Ou = !1,
    Ad = typeof WeakSet == 'function' ? WeakSet : Set,
    Je = null;
  function Uv(e, t) {
    if (((e = e.containerInfo), (Pu = Es), (e = Uc(e)), Tr(e))) {
      if ('selectionStart' in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var n = l.getSelection && l.getSelection();
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode;
            var u = n.anchorOffset,
              o = n.focusNode;
            n = n.focusOffset;
            try {
              (l.nodeType, o.nodeType);
            } catch {
              l = null;
              break e;
            }
            var m = 0,
              _ = -1,
              E = -1,
              w = 0,
              q = 0,
              Q = e,
              B = null;
            t: for (;;) {
              for (
                var U;
                Q !== l || (u !== 0 && Q.nodeType !== 3) || (_ = m + u),
                  Q !== o || (n !== 0 && Q.nodeType !== 3) || (E = m + n),
                  Q.nodeType === 3 && (m += Q.nodeValue.length),
                  (U = Q.firstChild) !== null;
              )
                ((B = Q), (Q = U));
              for (;;) {
                if (Q === e) break t;
                if (
                  (B === l && ++w === u && (_ = m),
                  B === o && ++q === n && (E = m),
                  (U = Q.nextSibling) !== null)
                )
                  break;
                ((Q = B), (B = Q.parentNode));
              }
              Q = U;
            }
            l = _ === -1 || E === -1 ? null : { start: _, end: E };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      Wu = { focusedElem: e, selectionRange: l }, Es = !1, Je = t;
      Je !== null;
    )
      if (
        ((t = Je), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (Je = e));
      else
        for (; Je !== null; ) {
          switch (((t = Je), (o = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (l = 0; l < e.length; l++)
                  ((u = e[l]), (u.ref.impl = u.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && o !== null) {
                ((e = void 0),
                  (l = t),
                  (u = o.memoizedProps),
                  (o = o.memoizedState),
                  (n = l.stateNode));
                try {
                  var te = oa(l.type, u);
                  ((e = n.getSnapshotBeforeUpdate(te, o)),
                    (n.__reactInternalSnapshotBeforeUpdate = e));
                } catch (se) {
                  Ae(l, l.return, se);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  to(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      to(e);
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
              if ((e & 1024) !== 0) throw Error(i(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (Je = e));
            break;
          }
          Je = t.return;
        }
  }
  function zd(e, t, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (cl(e, l), n & 4 && Hn(5, l));
        break;
      case 1:
        if ((cl(e, l), n & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (m) {
              Ae(l, l.return, m);
            }
          else {
            var u = oa(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(u, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (m) {
              Ae(l, l.return, m);
            }
          }
        (n & 64 && xd(l), n & 512 && Un(l, l.return));
        break;
      case 3:
        if ((cl(e, l), n & 64 && ((e = l.updateQueue), e !== null))) {
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
            df(e, t);
          } catch (m) {
            Ae(l, l.return, m);
          }
        }
        break;
      case 27:
        t === null && n & 4 && Md(l);
      case 26:
      case 5:
        (cl(e, l), t === null && n & 4 && Ed(l), n & 512 && Un(l, l.return));
        break;
      case 12:
        cl(e, l);
        break;
      case 31:
        (cl(e, l), n & 4 && jd(e, l));
        break;
      case 13:
        (cl(e, l),
          n & 4 && Dd(e, l),
          n & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = kv.bind(null, l)), mg(e, l)))));
        break;
      case 22:
        if (((n = l.memoizedState !== null || ul), !n)) {
          ((t = (t !== null && t.memoizedState !== null) || Ze), (u = ul));
          var o = Ze;
          ((ul = n),
            (Ze = t) && !o ? fl(e, l, (l.subtreeFlags & 8772) !== 0) : cl(e, l),
            (ul = u),
            (Ze = o));
        }
        break;
      case 30:
        break;
      default:
        cl(e, l);
    }
  }
  function Nd(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Nd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && sr(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Le = null,
    dt = !1;
  function ol(e, t, l) {
    for (l = l.child; l !== null; ) (Od(e, t, l), (l = l.sibling));
  }
  function Od(e, t, l) {
    if (yt && typeof yt.onCommitFiberUnmount == 'function')
      try {
        yt.onCommitFiberUnmount(un, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (Ze || $t(l, t),
          ol(e, t, l),
          l.memoizedState ?
            l.memoizedState.count--
          : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        Ze || $t(l, t);
        var n = Le,
          u = dt;
        (Ul(l.type) && ((Le = l.stateNode), (dt = !1)),
          ol(e, t, l),
          kn(l.stateNode),
          (Le = n),
          (dt = u));
        break;
      case 5:
        Ze || $t(l, t);
      case 6:
        if (
          ((n = Le),
          (u = dt),
          (Le = null),
          ol(e, t, l),
          (Le = n),
          (dt = u),
          Le !== null)
        )
          if (dt)
            try {
              (Le.nodeType === 9 ? Le.body
              : Le.nodeName === 'HTML' ? Le.ownerDocument.body
              : Le
              ).removeChild(l.stateNode);
            } catch (o) {
              Ae(l, t, o);
            }
          else
            try {
              Le.removeChild(l.stateNode);
            } catch (o) {
              Ae(l, t, o);
            }
        break;
      case 18:
        Le !== null &&
          (dt ?
            ((e = Le),
            xm(
              e.nodeType === 9 ? e.body
              : e.nodeName === 'HTML' ? e.ownerDocument.body
              : e,
              l.stateNode,
            ),
            tn(e))
          : xm(Le, l.stateNode));
        break;
      case 4:
        ((n = Le),
          (u = dt),
          (Le = l.stateNode.containerInfo),
          (dt = !0),
          ol(e, t, l),
          (Le = n),
          (dt = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (jl(2, l, t), Ze || jl(4, l, t), ol(e, t, l));
        break;
      case 1:
        (Ze ||
          ($t(l, t),
          (n = l.stateNode),
          typeof n.componentWillUnmount == 'function' && Td(l, t, n)),
          ol(e, t, l));
        break;
      case 21:
        ol(e, t, l);
        break;
      case 22:
        ((Ze = (n = Ze) || l.memoizedState !== null), ol(e, t, l), (Ze = n));
        break;
      default:
        ol(e, t, l);
    }
  }
  function jd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        tn(e);
      } catch (l) {
        Ae(t, t.return, l);
      }
    }
  }
  function Dd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        tn(e);
      } catch (l) {
        Ae(t, t.return, l);
      }
  }
  function Gv(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Ad()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Ad()),
          t
        );
      default:
        throw Error(i(435, e.tag));
    }
  }
  function ns(e, t) {
    var l = Gv(e);
    t.forEach(function (n) {
      if (!l.has(n)) {
        l.add(n);
        var u = Kv.bind(null, e, n);
        n.then(u, u);
      }
    });
  }
  function mt(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var u = l[n],
          o = e,
          m = t,
          _ = m;
        e: for (; _ !== null; ) {
          switch (_.tag) {
            case 27:
              if (Ul(_.type)) {
                ((Le = _.stateNode), (dt = !1));
                break e;
              }
              break;
            case 5:
              ((Le = _.stateNode), (dt = !1));
              break e;
            case 3:
            case 4:
              ((Le = _.stateNode.containerInfo), (dt = !0));
              break e;
          }
          _ = _.return;
        }
        if (Le === null) throw Error(i(160));
        (Od(o, m, u),
          (Le = null),
          (dt = !1),
          (o = u.alternate),
          o !== null && (o.return = null),
          (u.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (Rd(t, e), (t = t.sibling));
  }
  var Yt = null;
  function Rd(e, t) {
    var l = e.alternate,
      n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (mt(t, e),
          ht(e),
          n & 4 && (jl(3, e, e.return), Hn(3, e), jl(5, e, e.return)));
        break;
      case 1:
        (mt(t, e),
          ht(e),
          n & 512 && (Ze || l === null || $t(l, l.return)),
          n & 64 &&
            ul &&
            ((e = e.updateQueue),
            e !== null &&
              ((n = e.callbacks),
              n !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? n : l.concat(n))))));
        break;
      case 26:
        var u = Yt;
        if (
          (mt(t, e),
          ht(e),
          n & 512 && (Ze || l === null || $t(l, l.return)),
          n & 4)
        ) {
          var o = l !== null ? l.memoizedState : null;
          if (((n = e.memoizedState), l === null))
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  ((n = e.type),
                    (l = e.memoizedProps),
                    (u = u.ownerDocument || u));
                  t: switch (n) {
                    case 'title':
                      ((o = u.getElementsByTagName('title')[0]),
                        (!o ||
                          o[fn] ||
                          o[et] ||
                          o.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          o.hasAttribute('itemprop')) &&
                          ((o = u.createElement(n)),
                          u.head.insertBefore(
                            o,
                            u.querySelector('head > title'),
                          )),
                        nt(o, n, l),
                        (o[et] = e),
                        Ke(o),
                        (n = o));
                      break e;
                    case 'link':
                      var m = Rm('link', 'href', u).get(n + (l.href || ''));
                      if (m) {
                        for (var _ = 0; _ < m.length; _++)
                          if (
                            ((o = m[_]),
                            o.getAttribute('href') ===
                              (l.href == null || l.href === '' ?
                                null
                              : l.href) &&
                              o.getAttribute('rel') ===
                                (l.rel == null ? null : l.rel) &&
                              o.getAttribute('title') ===
                                (l.title == null ? null : l.title) &&
                              o.getAttribute('crossorigin') ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            m.splice(_, 1);
                            break t;
                          }
                      }
                      ((o = u.createElement(n)),
                        nt(o, n, l),
                        u.head.appendChild(o));
                      break;
                    case 'meta':
                      if (
                        (m = Rm('meta', 'content', u).get(
                          n + (l.content || ''),
                        ))
                      ) {
                        for (_ = 0; _ < m.length; _++)
                          if (
                            ((o = m[_]),
                            o.getAttribute('content') ===
                              (l.content == null ? null : '' + l.content) &&
                              o.getAttribute('name') ===
                                (l.name == null ? null : l.name) &&
                              o.getAttribute('property') ===
                                (l.property == null ? null : l.property) &&
                              o.getAttribute('http-equiv') ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              o.getAttribute('charset') ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            m.splice(_, 1);
                            break t;
                          }
                      }
                      ((o = u.createElement(n)),
                        nt(o, n, l),
                        u.head.appendChild(o));
                      break;
                    default:
                      throw Error(i(468, n));
                  }
                  ((o[et] = e), Ke(o), (n = o));
                }
                e.stateNode = n;
              } else Lm(u, e.type, e.stateNode);
            else e.stateNode = Dm(u, n, e.memoizedProps);
          else
            o !== n ?
              (o === null ?
                l.stateNode !== null &&
                ((l = l.stateNode), l.parentNode.removeChild(l))
              : o.count--,
              n === null ?
                Lm(u, e.type, e.stateNode)
              : Dm(u, n, e.memoizedProps))
            : n === null &&
              e.stateNode !== null &&
              Au(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (mt(t, e),
          ht(e),
          n & 512 && (Ze || l === null || $t(l, l.return)),
          l !== null && n & 4 && Au(e, e.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (mt(t, e),
          ht(e),
          n & 512 && (Ze || l === null || $t(l, l.return)),
          e.flags & 32)
        ) {
          u = e.stateNode;
          try {
            Ea(u, '');
          } catch (te) {
            Ae(e, e.return, te);
          }
        }
        (n & 4 &&
          e.stateNode != null &&
          ((u = e.memoizedProps), Au(e, u, l !== null ? l.memoizedProps : u)),
          n & 1024 && (Ou = !0));
        break;
      case 6:
        if ((mt(t, e), ht(e), n & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          ((n = e.memoizedProps), (l = e.stateNode));
          try {
            l.nodeValue = n;
          } catch (te) {
            Ae(e, e.return, te);
          }
        }
        break;
      case 3:
        if (
          ((bs = null),
          (u = Yt),
          (Yt = ys(t.containerInfo)),
          mt(t, e),
          (Yt = u),
          ht(e),
          n & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            tn(t.containerInfo);
          } catch (te) {
            Ae(e, e.return, te);
          }
        Ou && ((Ou = !1), Ld(e));
        break;
      case 4:
        ((n = Yt),
          (Yt = ys(e.stateNode.containerInfo)),
          mt(t, e),
          ht(e),
          (Yt = n));
        break;
      case 12:
        (mt(t, e), ht(e));
        break;
      case 31:
        (mt(t, e),
          ht(e),
          n & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), ns(e, n))));
        break;
      case 13:
        (mt(t, e),
          ht(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (ss = gt()),
          n & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), ns(e, n))));
        break;
      case 22:
        u = e.memoizedState !== null;
        var E = l !== null && l.memoizedState !== null,
          w = ul,
          q = Ze;
        if (
          ((ul = w || u),
          (Ze = q || E),
          mt(t, e),
          (Ze = q),
          (ul = w),
          ht(e),
          n & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (l === null || E || ul || Ze || ca(e)),
              l = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                E = l = t;
                try {
                  if (((o = E.stateNode), u))
                    ((m = o.style),
                      typeof m.setProperty == 'function' ?
                        m.setProperty('display', 'none', 'important')
                      : (m.display = 'none'));
                  else {
                    _ = E.stateNode;
                    var Q = E.memoizedProps.style,
                      B =
                        Q != null && Q.hasOwnProperty('display') ?
                          Q.display
                        : null;
                    _.style.display =
                      B == null || typeof B == 'boolean' ? '' : ('' + B).trim();
                  }
                } catch (te) {
                  Ae(E, E.return, te);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                E = t;
                try {
                  E.stateNode.nodeValue = u ? '' : E.memoizedProps;
                } catch (te) {
                  Ae(E, E.return, te);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                E = t;
                try {
                  var U = E.stateNode;
                  u ? Tm(U, !0) : Tm(E.stateNode, !1);
                } catch (te) {
                  Ae(E, E.return, te);
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
        n & 4 &&
          ((n = e.updateQueue),
          n !== null &&
            ((l = n.retryQueue),
            l !== null && ((n.retryQueue = null), ns(e, l))));
        break;
      case 19:
        (mt(t, e),
          ht(e),
          n & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), ns(e, n))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (mt(t, e), ht(e));
    }
  }
  function ht(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, n = e.return; n !== null; ) {
          if (Cd(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(i(160));
        switch (l.tag) {
          case 27:
            var u = l.stateNode,
              o = zu(e);
            as(e, o, u);
            break;
          case 5:
            var m = l.stateNode;
            l.flags & 32 && (Ea(m, ''), (l.flags &= -33));
            var _ = zu(e);
            as(e, _, m);
            break;
          case 3:
          case 4:
            var E = l.stateNode.containerInfo,
              w = zu(e);
            Nu(e, w, E);
            break;
          default:
            throw Error(i(161));
        }
      } catch (q) {
        Ae(e, e.return, q);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ld(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Ld(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function cl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (zd(e, t.alternate, t), (t = t.sibling));
  }
  function ca(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (jl(4, t, t.return), ca(t));
          break;
        case 1:
          $t(t, t.return);
          var l = t.stateNode;
          (typeof l.componentWillUnmount == 'function' && Td(t, t.return, l),
            ca(t));
          break;
        case 27:
          kn(t.stateNode);
        case 26:
        case 5:
          ($t(t, t.return), ca(t));
          break;
        case 22:
          t.memoizedState === null && ca(t);
          break;
        case 30:
          ca(t);
          break;
        default:
          ca(t);
      }
      e = e.sibling;
    }
  }
  function fl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate,
        u = e,
        o = t,
        m = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          (fl(u, o, l), Hn(4, o));
          break;
        case 1:
          if (
            (fl(u, o, l),
            (n = o),
            (u = n.stateNode),
            typeof u.componentDidMount == 'function')
          )
            try {
              u.componentDidMount();
            } catch (w) {
              Ae(n, n.return, w);
            }
          if (((n = o), (u = n.updateQueue), u !== null)) {
            var _ = n.stateNode;
            try {
              var E = u.shared.hiddenCallbacks;
              if (E !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < E.length; u++)
                  ff(E[u], _);
            } catch (w) {
              Ae(n, n.return, w);
            }
          }
          (l && m & 64 && xd(o), Un(o, o.return));
          break;
        case 27:
          Md(o);
        case 26:
        case 5:
          (fl(u, o, l), l && n === null && m & 4 && Ed(o), Un(o, o.return));
          break;
        case 12:
          fl(u, o, l);
          break;
        case 31:
          (fl(u, o, l), l && m & 4 && jd(u, o));
          break;
        case 13:
          (fl(u, o, l), l && m & 4 && Dd(u, o));
          break;
        case 22:
          (o.memoizedState === null && fl(u, o, l), Un(o, o.return));
          break;
        case 30:
          break;
        default:
          fl(u, o, l);
      }
      t = t.sibling;
    }
  }
  function ju(e, t) {
    var l = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && En(l)));
  }
  function Du(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && En(e)));
  }
  function Vt(e, t, l, n) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (wd(e, t, l, n), (t = t.sibling));
  }
  function wd(e, t, l, n) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Vt(e, t, l, n), u & 2048 && Hn(9, t));
        break;
      case 1:
        Vt(e, t, l, n);
        break;
      case 3:
        (Vt(e, t, l, n),
          u & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && En(e))));
        break;
      case 12:
        if (u & 2048) {
          (Vt(e, t, l, n), (e = t.stateNode));
          try {
            var o = t.memoizedProps,
              m = o.id,
              _ = o.onPostCommit;
            typeof _ == 'function' &&
              _(
                m,
                t.alternate === null ? 'mount' : 'update',
                e.passiveEffectDuration,
                -0,
              );
          } catch (E) {
            Ae(t, t.return, E);
          }
        } else Vt(e, t, l, n);
        break;
      case 31:
        Vt(e, t, l, n);
        break;
      case 13:
        Vt(e, t, l, n);
        break;
      case 23:
        break;
      case 22:
        ((o = t.stateNode),
          (m = t.alternate),
          t.memoizedState !== null ?
            o._visibility & 2 ?
              Vt(e, t, l, n)
            : Gn(e, t)
          : o._visibility & 2 ? Vt(e, t, l, n)
          : ((o._visibility |= 2),
            Qa(e, t, l, n, (t.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && ju(m, t));
        break;
      case 24:
        (Vt(e, t, l, n), u & 2048 && Du(t.alternate, t));
        break;
      default:
        Vt(e, t, l, n);
    }
  }
  function Qa(e, t, l, n, u) {
    for (
      u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var o = e,
        m = t,
        _ = l,
        E = n,
        w = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          (Qa(o, m, _, E, u), Hn(8, m));
          break;
        case 23:
          break;
        case 22:
          var q = m.stateNode;
          (m.memoizedState !== null ?
            q._visibility & 2 ?
              Qa(o, m, _, E, u)
            : Gn(o, m)
          : ((q._visibility |= 2), Qa(o, m, _, E, u)),
            u && w & 2048 && ju(m.alternate, m));
          break;
        case 24:
          (Qa(o, m, _, E, u), u && w & 2048 && Du(m.alternate, m));
          break;
        default:
          Qa(o, m, _, E, u);
      }
      t = t.sibling;
    }
  }
  function Gn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          n = t,
          u = n.flags;
        switch (n.tag) {
          case 22:
            (Gn(l, n), u & 2048 && ju(n.alternate, n));
            break;
          case 24:
            (Gn(l, n), u & 2048 && Du(n.alternate, n));
            break;
          default:
            Gn(l, n);
        }
        t = t.sibling;
      }
  }
  var qn = 8192;
  function Za(e, t, l) {
    if (e.subtreeFlags & qn)
      for (e = e.child; e !== null; ) (Bd(e, t, l), (e = e.sibling));
  }
  function Bd(e, t, l) {
    switch (e.tag) {
      case 26:
        (Za(e, t, l),
          e.flags & qn &&
            e.memoizedState !== null &&
            Cg(l, Yt, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Za(e, t, l);
        break;
      case 3:
      case 4:
        var n = Yt;
        ((Yt = ys(e.stateNode.containerInfo)), Za(e, t, l), (Yt = n));
        break;
      case 22:
        e.memoizedState === null &&
          ((n = e.alternate),
          n !== null && n.memoizedState !== null ?
            ((n = qn), (qn = 16777216), Za(e, t, l), (qn = n))
          : Za(e, t, l));
        break;
      default:
        Za(e, t, l);
    }
  }
  function Hd(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function Yn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          ((Je = n), Gd(n, e));
        }
      Hd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Ud(e), (e = e.sibling));
  }
  function Ud(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Yn(e), e.flags & 2048 && jl(9, e, e.return));
        break;
      case 3:
        Yn(e);
        break;
      case 12:
        Yn(e);
        break;
      case 22:
        var t = e.stateNode;
        (
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
        ) ?
          ((t._visibility &= -3), is(e))
        : Yn(e);
        break;
      default:
        Yn(e);
    }
  }
  function is(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          ((Je = n), Gd(n, e));
        }
      Hd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (jl(8, t, t.return), is(t));
          break;
        case 22:
          ((l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), is(t)));
          break;
        default:
          is(t);
      }
      e = e.sibling;
    }
  }
  function Gd(e, t) {
    for (; Je !== null; ) {
      var l = Je;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          jl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          En(l.memoizedState.cache);
      }
      if (((n = l.child), n !== null)) ((n.return = l), (Je = n));
      else
        e: for (l = e; Je !== null; ) {
          n = Je;
          var u = n.sibling,
            o = n.return;
          if ((Nd(n), n === l)) {
            Je = null;
            break e;
          }
          if (u !== null) {
            ((u.return = o), (Je = u));
            break e;
          }
          Je = o;
        }
    }
  }
  var qv = {
      getCacheForType: function (e) {
        var t = lt(Ve),
          l = t.data.get(e);
        return (l === void 0 && ((l = e()), t.data.set(e, l)), l);
      },
      cacheSignal: function () {
        return lt(Ve).controller.signal;
      },
    },
    Yv = typeof WeakMap == 'function' ? WeakMap : Map,
    Ee = 0,
    je = null,
    ge = null,
    _e = 0,
    Me = 0,
    Et = null,
    Dl = !1,
    $a = !1,
    Ru = !1,
    dl = 0,
    He = 0,
    Rl = 0,
    fa = 0,
    Lu = 0,
    Ct = 0,
    ka = 0,
    Vn = null,
    pt = null,
    wu = !1,
    ss = 0,
    qd = 0,
    rs = 1 / 0,
    us = null,
    Ll = null,
    $e = 0,
    wl = null,
    Ka = null,
    ml = 0,
    Bu = 0,
    Hu = null,
    Yd = null,
    Xn = 0,
    Uu = null;
  function Mt() {
    return (
      (Ee & 2) !== 0 && _e !== 0 ? _e & -_e
      : G.T !== null ? Qu()
      : lc()
    );
  }
  function Vd() {
    if (Ct === 0)
      if ((_e & 536870912) === 0 || Se) {
        var e = vi;
        ((vi <<= 1), (vi & 3932160) === 0 && (vi = 262144), (Ct = e));
      } else Ct = 536870912;
    return ((e = xt.current), e !== null && (e.flags |= 32), Ct);
  }
  function vt(e, t, l) {
    (((e === je && (Me === 2 || Me === 9)) || e.cancelPendingCommit !== null) &&
      (Ja(e, 0), Bl(e, _e, Ct, !1)),
      cn(e, l),
      ((Ee & 2) === 0 || e !== je) &&
        (e === je &&
          ((Ee & 2) === 0 && (fa |= l), He === 4 && Bl(e, _e, Ct, !1)),
        kt(e)));
  }
  function Xd(e, t, l) {
    if ((Ee & 6) !== 0) throw Error(i(327));
    var n = (!l && (t & 127) === 0 && (t & e.expiredLanes) === 0) || on(e, t),
      u = n ? Qv(e, t) : qu(e, t, !0),
      o = n;
    do {
      if (u === 0) {
        $a && !n && Bl(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), o && !Vv(l))) {
          ((u = qu(e, t, !1)), (o = !1));
          continue;
        }
        if (u === 2) {
          if (((o = t), e.errorRecoveryDisabledLanes & o)) var m = 0;
          else
            ((m = e.pendingLanes & -536870913),
              (m =
                m !== 0 ? m
                : m & 536870912 ? 536870912
                : 0));
          if (m !== 0) {
            t = m;
            e: {
              var _ = e;
              u = Vn;
              var E = _.current.memoizedState.isDehydrated;
              if ((E && (Ja(_, m).flags |= 256), (m = qu(_, m, !1)), m !== 2)) {
                if (Ru && !E) {
                  ((_.errorRecoveryDisabledLanes |= o), (fa |= o), (u = 4));
                  break e;
                }
                ((o = pt),
                  (pt = u),
                  o !== null &&
                    (pt === null ? (pt = o) : pt.push.apply(pt, o)));
              }
              u = m;
            }
            if (((o = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (Ja(e, 0), Bl(e, t, 0, !0));
          break;
        }
        e: {
          switch (((n = e), (o = u), o)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Bl(n, t, Ct, !Dl);
              break e;
            case 2:
              pt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && ((u = ss + 300 - gt()), 10 < u)) {
            if ((Bl(n, t, Ct, !Dl), yi(n, 0, !0) !== 0)) break e;
            ((ml = t),
              (n.timeoutHandle = bm(
                Qd.bind(
                  null,
                  n,
                  l,
                  pt,
                  us,
                  wu,
                  t,
                  Ct,
                  fa,
                  ka,
                  Dl,
                  o,
                  'Throttled',
                  -0,
                  0,
                ),
                u,
              )));
            break e;
          }
          Qd(n, l, pt, us, wu, t, Ct, fa, ka, Dl, o, null, -0, 0);
        }
      }
      break;
    } while (!0);
    kt(e);
  }
  function Qd(e, t, l, n, u, o, m, _, E, w, q, Q, B, U) {
    if (
      ((e.timeoutHandle = -1),
      (Q = t.subtreeFlags),
      Q & 8192 || (Q & 16785408) === 16785408)
    ) {
      ((Q = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Wt,
      }),
        Bd(t, o, Q));
      var te =
        (o & 62914560) === o ? ss - gt()
        : (o & 4194048) === o ? qd - gt()
        : 0;
      if (((te = Mg(Q, te)), te !== null)) {
        ((ml = o),
          (e.cancelPendingCommit = te(
            Wd.bind(null, e, t, o, l, n, u, m, _, E, q, Q, null, B, U),
          )),
          Bl(e, o, m, !w));
        return;
      }
    }
    Wd(e, t, o, l, n, u, m, _, E);
  }
  function Vv(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var n = 0; n < l.length; n++) {
          var u = l[n],
            o = u.getSnapshot;
          u = u.value;
          try {
            if (!bt(o(), u)) return !1;
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
  function Bl(e, t, l, n) {
    ((t &= ~Lu),
      (t &= ~fa),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      n && (e.warmLanes |= t),
      (n = e.expirationTimes));
    for (var u = t; 0 < u; ) {
      var o = 31 - _t(u),
        m = 1 << o;
      ((n[o] = -1), (u &= ~m));
    }
    l !== 0 && Io(e, l, t);
  }
  function os() {
    return (Ee & 6) === 0 ? (Qn(0), !1) : !0;
  }
  function Gu() {
    if (ge !== null) {
      if (Me === 0) var e = ge.return;
      else ((e = ge), (ll = la = null), tu(e), (Ga = null), (Mn = 0), (e = ge));
      for (; e !== null; ) (Sd(e.alternate, e), (e = e.return));
      ge = null;
    }
  }
  function Ja(e, t) {
    var l = e.timeoutHandle;
    (l !== -1 && ((e.timeoutHandle = -1), ug(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      (ml = 0),
      Gu(),
      (je = e),
      (ge = l = el(e.current, null)),
      (_e = t),
      (Me = 0),
      (Et = null),
      (Dl = !1),
      ($a = on(e, t)),
      (Ru = !1),
      (ka = Ct = Lu = fa = Rl = He = 0),
      (pt = Vn = null),
      (wu = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var u = 31 - _t(n),
          o = 1 << u;
        ((t |= e[u]), (n &= ~o));
      }
    return ((dl = t), Oi(), l);
  }
  function Zd(e, t) {
    ((me = null),
      (G.H = Ln),
      t === Ua || t === Ui ? ((t = rf()), (Me = 3))
      : t === Xr ? ((t = rf()), (Me = 4))
      : (Me =
          t === gu ? 8
          : t !== null && typeof t == 'object' && typeof t.then == 'function' ?
            6
          : 1),
      (Et = t),
      ge === null && ((He = 1), Wi(e, jt(t, e.current))));
  }
  function $d() {
    var e = xt.current;
    return (
      e === null ? !0
      : (_e & 4194048) === _e ? wt === null
      : (_e & 62914560) === _e || (_e & 536870912) !== 0 ? e === wt
      : !1
    );
  }
  function kd() {
    var e = G.H;
    return ((G.H = Ln), e === null ? Ln : e);
  }
  function Kd() {
    var e = G.A;
    return ((G.A = qv), e);
  }
  function cs() {
    ((He = 4),
      Dl || ((_e & 4194048) !== _e && xt.current !== null) || ($a = !0),
      ((Rl & 134217727) === 0 && (fa & 134217727) === 0) ||
        je === null ||
        Bl(je, _e, Ct, !1));
  }
  function qu(e, t, l) {
    var n = Ee;
    Ee |= 2;
    var u = kd(),
      o = Kd();
    ((je !== e || _e !== t) && ((us = null), Ja(e, t)), (t = !1));
    var m = He;
    e: do
      try {
        if (Me !== 0 && ge !== null) {
          var _ = ge,
            E = Et;
          switch (Me) {
            case 8:
              (Gu(), (m = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              xt.current === null && (t = !0);
              var w = Me;
              if (((Me = 0), (Et = null), Fa(e, _, E, w), l && $a)) {
                m = 0;
                break e;
              }
              break;
            default:
              ((w = Me), (Me = 0), (Et = null), Fa(e, _, E, w));
          }
        }
        (Xv(), (m = He));
        break;
      } catch (q) {
        Zd(e, q);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (ll = la = null),
      (Ee = n),
      (G.H = u),
      (G.A = o),
      ge === null && ((je = null), (_e = 0), Oi()),
      m
    );
  }
  function Xv() {
    for (; ge !== null; ) Jd(ge);
  }
  function Qv(e, t) {
    var l = Ee;
    Ee |= 2;
    var n = kd(),
      u = Kd();
    je !== e || _e !== t ?
      ((us = null), (rs = gt() + 500), Ja(e, t))
    : ($a = on(e, t));
    e: do
      try {
        if (Me !== 0 && ge !== null) {
          t = ge;
          var o = Et;
          t: switch (Me) {
            case 1:
              ((Me = 0), (Et = null), Fa(e, t, o, 1));
              break;
            case 2:
            case 9:
              if (nf(o)) {
                ((Me = 0), (Et = null), Fd(t));
                break;
              }
              ((t = function () {
                ((Me !== 2 && Me !== 9) || je !== e || (Me = 7), kt(e));
              }),
                o.then(t, t));
              break e;
            case 3:
              Me = 7;
              break e;
            case 4:
              Me = 5;
              break e;
            case 7:
              nf(o) ?
                ((Me = 0), (Et = null), Fd(t))
              : ((Me = 0), (Et = null), Fa(e, t, o, 7));
              break;
            case 5:
              var m = null;
              switch (ge.tag) {
                case 26:
                  m = ge.memoizedState;
                case 5:
                case 27:
                  var _ = ge;
                  if (m ? wm(m) : _.stateNode.complete) {
                    ((Me = 0), (Et = null));
                    var E = _.sibling;
                    if (E !== null) ge = E;
                    else {
                      var w = _.return;
                      w !== null ? ((ge = w), fs(w)) : (ge = null);
                    }
                    break t;
                  }
              }
              ((Me = 0), (Et = null), Fa(e, t, o, 5));
              break;
            case 6:
              ((Me = 0), (Et = null), Fa(e, t, o, 6));
              break;
            case 8:
              (Gu(), (He = 6));
              break e;
            default:
              throw Error(i(462));
          }
        }
        Zv();
        break;
      } catch (q) {
        Zd(e, q);
      }
    while (!0);
    return (
      (ll = la = null),
      (G.H = n),
      (G.A = u),
      (Ee = l),
      ge !== null ? 0 : ((je = null), (_e = 0), Oi(), He)
    );
  }
  function Zv() {
    for (; ge !== null && !hp(); ) Jd(ge);
  }
  function Jd(e) {
    var t = _d(e.alternate, e, dl);
    ((e.memoizedProps = e.pendingProps), t === null ? fs(e) : (ge = t));
  }
  function Fd(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = md(l, t, t.pendingProps, t.type, void 0, _e);
        break;
      case 11:
        t = md(l, t, t.pendingProps, t.type.render, t.ref, _e);
        break;
      case 5:
        tu(t);
      default:
        (Sd(l, t), (t = ge = kc(t, dl)), (t = _d(l, t, dl)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? fs(e) : (ge = t));
  }
  function Fa(e, t, l, n) {
    ((ll = la = null), tu(t), (Ga = null), (Mn = 0));
    var u = t.return;
    try {
      if (Rv(e, u, t, l, _e)) {
        ((He = 1), Wi(e, jt(l, e.current)), (ge = null));
        return;
      }
    } catch (o) {
      if (u !== null) throw ((ge = u), o);
      ((He = 1), Wi(e, jt(l, e.current)), (ge = null));
      return;
    }
    t.flags & 32768 ?
      (Se || n === 1 ? (e = !0)
      : $a || (_e & 536870912) !== 0 ? (e = !1)
      : ((Dl = e = !0),
        (n === 2 || n === 9 || n === 3 || n === 6) &&
          ((n = xt.current), n !== null && n.tag === 13 && (n.flags |= 16384))),
      Pd(t, e))
    : fs(t);
  }
  function fs(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Pd(t, Dl);
        return;
      }
      e = t.return;
      var l = Bv(t.alternate, t, dl);
      if (l !== null) {
        ge = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ge = t;
        return;
      }
      ge = t = e;
    } while (t !== null);
    He === 0 && (He = 5);
  }
  function Pd(e, t) {
    do {
      var l = Hv(e.alternate, e);
      if (l !== null) {
        ((l.flags &= 32767), (ge = l));
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        ge = e;
        return;
      }
      ge = e = l;
    } while (e !== null);
    ((He = 6), (ge = null));
  }
  function Wd(e, t, l, n, u, o, m, _, E) {
    e.cancelPendingCommit = null;
    do ds();
    while ($e !== 0);
    if ((Ee & 6) !== 0) throw Error(i(327));
    if (t !== null) {
      if (t === e.current) throw Error(i(177));
      if (
        ((o = t.lanes | t.childLanes),
        (o |= zr),
        Ep(e, l, o, m, _, E),
        e === je && ((ge = je = null), (_e = 0)),
        (Ka = t),
        (wl = e),
        (ml = l),
        (Bu = o),
        (Hu = u),
        (Yd = n),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ?
          ((e.callbackNode = null),
          (e.callbackPriority = 0),
          Jv(hi, function () {
            return (am(), null);
          }))
        : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (n = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || n)
      ) {
        ((n = G.T), (G.T = null), (u = Z.p), (Z.p = 2), (m = Ee), (Ee |= 4));
        try {
          Uv(e, t, l);
        } finally {
          ((Ee = m), (Z.p = u), (G.T = n));
        }
      }
      (($e = 1), Id(), em(), tm());
    }
  }
  function Id() {
    if ($e === 1) {
      $e = 0;
      var e = wl,
        t = Ka,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        ((l = G.T), (G.T = null));
        var n = Z.p;
        Z.p = 2;
        var u = Ee;
        Ee |= 4;
        try {
          Rd(t, e);
          var o = Wu,
            m = Uc(e.containerInfo),
            _ = o.focusedElem,
            E = o.selectionRange;
          if (
            m !== _ &&
            _ &&
            _.ownerDocument &&
            Hc(_.ownerDocument.documentElement, _)
          ) {
            if (E !== null && Tr(_)) {
              var w = E.start,
                q = E.end;
              if ((q === void 0 && (q = w), 'selectionStart' in _))
                ((_.selectionStart = w),
                  (_.selectionEnd = Math.min(q, _.value.length)));
              else {
                var Q = _.ownerDocument || document,
                  B = (Q && Q.defaultView) || window;
                if (B.getSelection) {
                  var U = B.getSelection(),
                    te = _.textContent.length,
                    se = Math.min(E.start, te),
                    Oe = E.end === void 0 ? se : Math.min(E.end, te);
                  !U.extend && se > Oe && ((m = Oe), (Oe = se), (se = m));
                  var R = Bc(_, se),
                    A = Bc(_, Oe);
                  if (
                    R &&
                    A &&
                    (U.rangeCount !== 1 ||
                      U.anchorNode !== R.node ||
                      U.anchorOffset !== R.offset ||
                      U.focusNode !== A.node ||
                      U.focusOffset !== A.offset)
                  ) {
                    var L = Q.createRange();
                    (L.setStart(R.node, R.offset),
                      U.removeAllRanges(),
                      se > Oe ?
                        (U.addRange(L), U.extend(A.node, A.offset))
                      : (L.setEnd(A.node, A.offset), U.addRange(L)));
                  }
                }
              }
            }
            for (Q = [], U = _; (U = U.parentNode); )
              U.nodeType === 1 &&
                Q.push({ element: U, left: U.scrollLeft, top: U.scrollTop });
            for (
              typeof _.focus == 'function' && _.focus(), _ = 0;
              _ < Q.length;
              _++
            ) {
              var Y = Q[_];
              ((Y.element.scrollLeft = Y.left), (Y.element.scrollTop = Y.top));
            }
          }
          ((Es = !!Pu), (Wu = Pu = null));
        } finally {
          ((Ee = u), (Z.p = n), (G.T = l));
        }
      }
      ((e.current = t), ($e = 2));
    }
  }
  function em() {
    if ($e === 2) {
      $e = 0;
      var e = wl,
        t = Ka,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        ((l = G.T), (G.T = null));
        var n = Z.p;
        Z.p = 2;
        var u = Ee;
        Ee |= 4;
        try {
          zd(e, t.alternate, t);
        } finally {
          ((Ee = u), (Z.p = n), (G.T = l));
        }
      }
      $e = 3;
    }
  }
  function tm() {
    if ($e === 4 || $e === 3) {
      (($e = 0), pp());
      var e = wl,
        t = Ka,
        l = ml,
        n = Yd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ?
        ($e = 5)
      : (($e = 0), (Ka = wl = null), lm(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (
        (u === 0 && (Ll = null),
        nr(l),
        (t = t.stateNode),
        yt && typeof yt.onCommitFiberRoot == 'function')
      )
        try {
          yt.onCommitFiberRoot(un, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (n !== null) {
        ((t = G.T), (u = Z.p), (Z.p = 2), (G.T = null));
        try {
          for (var o = e.onRecoverableError, m = 0; m < n.length; m++) {
            var _ = n[m];
            o(_.value, { componentStack: _.stack });
          }
        } finally {
          ((G.T = t), (Z.p = u));
        }
      }
      ((ml & 3) !== 0 && ds(),
        kt(e),
        (u = e.pendingLanes),
        (l & 261930) !== 0 && (u & 42) !== 0 ?
          e === Uu ?
            Xn++
          : ((Xn = 0), (Uu = e))
        : (Xn = 0),
        Qn(0));
    }
  }
  function lm(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), En(t)));
  }
  function ds() {
    return (Id(), em(), tm(), am());
  }
  function am() {
    if ($e !== 5) return !1;
    var e = wl,
      t = Bu;
    Bu = 0;
    var l = nr(ml),
      n = G.T,
      u = Z.p;
    try {
      ((Z.p = 32 > l ? 32 : l), (G.T = null), (l = Hu), (Hu = null));
      var o = wl,
        m = ml;
      if ((($e = 0), (Ka = wl = null), (ml = 0), (Ee & 6) !== 0))
        throw Error(i(331));
      var _ = Ee;
      if (
        ((Ee |= 4),
        Ud(o.current),
        wd(o, o.current, m, l),
        (Ee = _),
        Qn(0, !1),
        yt && typeof yt.onPostCommitFiberRoot == 'function')
      )
        try {
          yt.onPostCommitFiberRoot(un, o);
        } catch {}
      return !0;
    } finally {
      ((Z.p = u), (G.T = n), lm(e, t));
    }
  }
  function nm(e, t, l) {
    ((t = jt(l, t)),
      (t = vu(e.stateNode, t, 2)),
      (e = zl(e, t, 2)),
      e !== null && (cn(e, 2), kt(e)));
  }
  function Ae(e, t, l) {
    if (e.tag === 3) nm(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          nm(t, e, l);
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof n.componentDidCatch == 'function' &&
              (Ll === null || !Ll.has(n)))
          ) {
            ((e = jt(l, e)),
              (l = id(2)),
              (n = zl(t, l, 2)),
              n !== null && (sd(l, n, t, e), cn(n, 2), kt(n)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Yu(e, t, l) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new Yv();
      var u = new Set();
      n.set(t, u);
    } else ((u = n.get(t)), u === void 0 && ((u = new Set()), n.set(t, u)));
    u.has(l) ||
      ((Ru = !0), u.add(l), (e = $v.bind(null, e, t, l)), t.then(e, e));
  }
  function $v(e, t, l) {
    var n = e.pingCache;
    (n !== null && n.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      je === e &&
        (_e & l) === l &&
        (He === 4 || (He === 3 && (_e & 62914560) === _e && 300 > gt() - ss) ?
          (Ee & 2) === 0 && Ja(e, 0)
        : (Lu |= l),
        ka === _e && (ka = 0)),
      kt(e));
  }
  function im(e, t) {
    (t === 0 && (t = Wo()), (e = Il(e, t)), e !== null && (cn(e, t), kt(e)));
  }
  function kv(e) {
    var t = e.memoizedState,
      l = 0;
    (t !== null && (l = t.retryLane), im(e, l));
  }
  function Kv(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var n = e.stateNode,
          u = e.memoizedState;
        u !== null && (l = u.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      case 22:
        n = e.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    (n !== null && n.delete(t), im(e, l));
  }
  function Jv(e, t) {
    return er(e, t);
  }
  var ms = null,
    Pa = null,
    Vu = !1,
    hs = !1,
    Xu = !1,
    Hl = 0;
  function kt(e) {
    (e !== Pa &&
      e.next === null &&
      (Pa === null ? (ms = Pa = e) : (Pa = Pa.next = e)),
      (hs = !0),
      Vu || ((Vu = !0), Pv()));
  }
  function Qn(e, t) {
    if (!Xu && hs) {
      Xu = !0;
      do
        for (var l = !1, n = ms; n !== null; ) {
          if (e !== 0) {
            var u = n.pendingLanes;
            if (u === 0) var o = 0;
            else {
              var m = n.suspendedLanes,
                _ = n.pingedLanes;
              ((o = (1 << (31 - _t(42 | e) + 1)) - 1),
                (o &= u & ~(m & ~_)),
                (o =
                  o & 201326741 ? (o & 201326741) | 1
                  : o ? o | 2
                  : 0));
            }
            o !== 0 && ((l = !0), om(n, o));
          } else
            ((o = _e),
              (o = yi(
                n,
                n === je ? o : 0,
                n.cancelPendingCommit !== null || n.timeoutHandle !== -1,
              )),
              (o & 3) === 0 || on(n, o) || ((l = !0), om(n, o)));
          n = n.next;
        }
      while (l);
      Xu = !1;
    }
  }
  function Fv() {
    sm();
  }
  function sm() {
    hs = Vu = !1;
    var e = 0;
    Hl !== 0 && rg() && (e = Hl);
    for (var t = gt(), l = null, n = ms; n !== null; ) {
      var u = n.next,
        o = rm(n, t);
      (o === 0 ?
        ((n.next = null),
        l === null ? (ms = u) : (l.next = u),
        u === null && (Pa = l))
      : ((l = n), (e !== 0 || (o & 3) !== 0) && (hs = !0)),
        (n = u));
    }
    (($e !== 0 && $e !== 5) || Qn(e), Hl !== 0 && (Hl = 0));
  }
  function rm(e, t) {
    for (
      var l = e.suspendedLanes,
        n = e.pingedLanes,
        u = e.expirationTimes,
        o = e.pendingLanes & -62914561;
      0 < o;
    ) {
      var m = 31 - _t(o),
        _ = 1 << m,
        E = u[m];
      (E === -1 ?
        ((_ & l) === 0 || (_ & n) !== 0) && (u[m] = Tp(_, t))
      : E <= t && (e.expiredLanes |= _),
        (o &= ~_));
    }
    if (
      ((t = je),
      (l = _e),
      (l = yi(
        e,
        e === t ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (n = e.callbackNode),
      l === 0 ||
        (e === t && (Me === 2 || Me === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        n !== null && n !== null && tr(n),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || on(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((n !== null && tr(n), nr(l))) {
        case 2:
        case 8:
          l = Fo;
          break;
        case 32:
          l = hi;
          break;
        case 268435456:
          l = Po;
          break;
        default:
          l = hi;
      }
      return (
        (n = um.bind(null, e)),
        (l = er(l, n)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      n !== null && n !== null && tr(n),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function um(e, t) {
    if ($e !== 0 && $e !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var l = e.callbackNode;
    if (ds() && e.callbackNode !== l) return null;
    var n = _e;
    return (
      (n = yi(
        e,
        e === je ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      n === 0 ? null : (
        (Xd(e, n, t),
        rm(e, gt()),
        e.callbackNode != null && e.callbackNode === l ?
          um.bind(null, e)
        : null)
      )
    );
  }
  function om(e, t) {
    if (ds()) return null;
    Xd(e, t, !0);
  }
  function Pv() {
    og(function () {
      (Ee & 6) !== 0 ? er(Jo, Fv) : sm();
    });
  }
  function Qu() {
    if (Hl === 0) {
      var e = Ba;
      (e === 0 && ((e = pi), (pi <<= 1), (pi & 261888) === 0 && (pi = 256)),
        (Hl = e));
    }
    return Hl;
  }
  function cm(e) {
    return (
      e == null || typeof e == 'symbol' || typeof e == 'boolean' ? null
      : typeof e == 'function' ? e
      : xi('' + e)
    );
  }
  function fm(e, t) {
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
  function Wv(e, t, l, n, u) {
    if (t === 'submit' && l && l.stateNode === u) {
      var o = cm((u[ct] || null).action),
        m = n.submitter;
      m &&
        ((t =
          (t = m[ct] || null) ?
            cm(t.formAction)
          : m.getAttribute('formAction')),
        t !== null && ((o = t), (m = null)));
      var _ = new Mi('action', 'action', null, n, u);
      e.push({
        event: _,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (n.defaultPrevented) {
                if (Hl !== 0) {
                  var E = m ? fm(u, m) : new FormData(u);
                  cu(
                    l,
                    { pending: !0, data: E, method: u.method, action: o },
                    null,
                    E,
                  );
                }
              } else
                typeof o == 'function' &&
                  (_.preventDefault(),
                  (E = m ? fm(u, m) : new FormData(u)),
                  cu(
                    l,
                    { pending: !0, data: E, method: u.method, action: o },
                    o,
                    E,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Zu = 0; Zu < Ar.length; Zu++) {
    var $u = Ar[Zu],
      Iv = $u.toLowerCase(),
      eg = $u[0].toUpperCase() + $u.slice(1);
    qt(Iv, 'on' + eg);
  }
  (qt(Yc, 'onAnimationEnd'),
    qt(Vc, 'onAnimationIteration'),
    qt(Xc, 'onAnimationStart'),
    qt('dblclick', 'onDoubleClick'),
    qt('focusin', 'onFocus'),
    qt('focusout', 'onBlur'),
    qt(vv, 'onTransitionRun'),
    qt(gv, 'onTransitionStart'),
    qt(yv, 'onTransitionCancel'),
    qt(Qc, 'onTransitionEnd'),
    xa('onMouseEnter', ['mouseout', 'mouseover']),
    xa('onMouseLeave', ['mouseout', 'mouseover']),
    xa('onPointerEnter', ['pointerout', 'pointerover']),
    xa('onPointerLeave', ['pointerout', 'pointerover']),
    Jl(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' ',
      ),
    ),
    Jl(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    Jl('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Jl(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Jl(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Jl(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    ));
  var Zn =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    tg = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'
        .split(' ')
        .concat(Zn),
    );
  function dm(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var n = e[l],
        u = n.event;
      n = n.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var m = n.length - 1; 0 <= m; m--) {
            var _ = n[m],
              E = _.instance,
              w = _.currentTarget;
            if (((_ = _.listener), E !== o && u.isPropagationStopped()))
              break e;
            ((o = _), (u.currentTarget = w));
            try {
              o(u);
            } catch (q) {
              Ni(q);
            }
            ((u.currentTarget = null), (o = E));
          }
        else
          for (m = 0; m < n.length; m++) {
            if (
              ((_ = n[m]),
              (E = _.instance),
              (w = _.currentTarget),
              (_ = _.listener),
              E !== o && u.isPropagationStopped())
            )
              break e;
            ((o = _), (u.currentTarget = w));
            try {
              o(u);
            } catch (q) {
              Ni(q);
            }
            ((u.currentTarget = null), (o = E));
          }
      }
    }
  }
  function ye(e, t) {
    var l = t[ir];
    l === void 0 && (l = t[ir] = new Set());
    var n = e + '__bubble';
    l.has(n) || (mm(t, e, 2, !1), l.add(n));
  }
  function ku(e, t, l) {
    var n = 0;
    (t && (n |= 4), mm(l, e, n, t));
  }
  var ps = '_reactListening' + Math.random().toString(36).slice(2);
  function Ku(e) {
    if (!e[ps]) {
      ((e[ps] = !0),
        ic.forEach(function (l) {
          l !== 'selectionchange' && (tg.has(l) || ku(l, !1, e), ku(l, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ps] || ((t[ps] = !0), ku('selectionchange', !1, t));
    }
  }
  function mm(e, t, l, n) {
    switch (Vm(t)) {
      case 2:
        var u = Ng;
        break;
      case 8:
        u = Og;
        break;
      default:
        u = oo;
    }
    ((l = u.bind(null, t, l, e)),
      (u = void 0),
      !hr ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (u = !0),
      n ?
        u !== void 0 ?
          e.addEventListener(t, l, { capture: !0, passive: u })
        : e.addEventListener(t, l, !0)
      : u !== void 0 ? e.addEventListener(t, l, { passive: u })
      : e.addEventListener(t, l, !1));
  }
  function Ju(e, t, l, n, u) {
    var o = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (;;) {
        if (n === null) return;
        var m = n.tag;
        if (m === 3 || m === 4) {
          var _ = n.stateNode.containerInfo;
          if (_ === u) break;
          if (m === 4)
            for (m = n.return; m !== null; ) {
              var E = m.tag;
              if ((E === 3 || E === 4) && m.stateNode.containerInfo === u)
                return;
              m = m.return;
            }
          for (; _ !== null; ) {
            if (((m = _a(_)), m === null)) return;
            if (((E = m.tag), E === 5 || E === 6 || E === 26 || E === 27)) {
              n = o = m;
              continue e;
            }
            _ = _.parentNode;
          }
        }
        n = n.return;
      }
    gc(function () {
      var w = o,
        q = dr(l),
        Q = [];
      e: {
        var B = Zc.get(e);
        if (B !== void 0) {
          var U = Mi,
            te = e;
          switch (e) {
            case 'keypress':
              if (Ei(l) === 0) break e;
            case 'keydown':
            case 'keyup':
              U = Kp;
              break;
            case 'focusin':
              ((te = 'focus'), (U = yr));
              break;
            case 'focusout':
              ((te = 'blur'), (U = yr));
              break;
            case 'beforeblur':
            case 'afterblur':
              U = yr;
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
              U = bc;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              U = Bp;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              U = Pp;
              break;
            case Yc:
            case Vc:
            case Xc:
              U = Gp;
              break;
            case Qc:
              U = Ip;
              break;
            case 'scroll':
            case 'scrollend':
              U = Lp;
              break;
            case 'wheel':
              U = tv;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              U = Yp;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              U = xc;
              break;
            case 'toggle':
            case 'beforetoggle':
              U = av;
          }
          var se = (t & 4) !== 0,
            Oe = !se && (e === 'scroll' || e === 'scrollend'),
            R =
              se ?
                B !== null ?
                  B + 'Capture'
                : null
              : B;
          se = [];
          for (var A = w, L; A !== null; ) {
            var Y = A;
            if (
              ((L = Y.stateNode),
              (Y = Y.tag),
              (Y !== 5 && Y !== 26 && Y !== 27) ||
                L === null ||
                R === null ||
                ((Y = mn(A, R)), Y != null && se.push($n(A, Y, L))),
              Oe)
            )
              break;
            A = A.return;
          }
          0 < se.length &&
            ((B = new U(B, te, null, l, q)),
            Q.push({ event: B, listeners: se }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((B = e === 'mouseover' || e === 'pointerover'),
            (U = e === 'mouseout' || e === 'pointerout'),
            B &&
              l !== fr &&
              (te = l.relatedTarget || l.fromElement) &&
              (_a(te) || te[ya]))
          )
            break e;
          if (
            (U || B) &&
            ((B =
              q.window === q ? q
              : (B = q.ownerDocument) ? B.defaultView || B.parentWindow
              : window),
            U ?
              ((te = l.relatedTarget || l.toElement),
              (U = w),
              (te = te ? _a(te) : null),
              te !== null &&
                ((Oe = f(te)),
                (se = te.tag),
                te !== Oe || (se !== 5 && se !== 27 && se !== 6)) &&
                (te = null))
            : ((U = null), (te = w)),
            U !== te)
          ) {
            if (
              ((se = bc),
              (Y = 'onMouseLeave'),
              (R = 'onMouseEnter'),
              (A = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((se = xc),
                (Y = 'onPointerLeave'),
                (R = 'onPointerEnter'),
                (A = 'pointer')),
              (Oe = U == null ? B : dn(U)),
              (L = te == null ? B : dn(te)),
              (B = new se(Y, A + 'leave', U, l, q)),
              (B.target = Oe),
              (B.relatedTarget = L),
              (Y = null),
              _a(q) === w &&
                ((se = new se(R, A + 'enter', te, l, q)),
                (se.target = L),
                (se.relatedTarget = Oe),
                (Y = se)),
              (Oe = Y),
              U && te)
            )
              t: {
                for (se = lg, R = U, A = te, L = 0, Y = R; Y; Y = se(Y)) L++;
                Y = 0;
                for (var ie = A; ie; ie = se(ie)) Y++;
                for (; 0 < L - Y; ) ((R = se(R)), L--);
                for (; 0 < Y - L; ) ((A = se(A)), Y--);
                for (; L--; ) {
                  if (R === A || (A !== null && R === A.alternate)) {
                    se = R;
                    break t;
                  }
                  ((R = se(R)), (A = se(A)));
                }
                se = null;
              }
            else se = null;
            (U !== null && hm(Q, B, U, se, !1),
              te !== null && Oe !== null && hm(Q, Oe, te, se, !0));
          }
        }
        e: {
          if (
            ((B = w ? dn(w) : window),
            (U = B.nodeName && B.nodeName.toLowerCase()),
            U === 'select' || (U === 'input' && B.type === 'file'))
          )
            var xe = Oc;
          else if (zc(B))
            if (jc) xe = mv;
            else {
              xe = fv;
              var ae = cv;
            }
          else
            ((U = B.nodeName),
              (
                !U ||
                U.toLowerCase() !== 'input' ||
                (B.type !== 'checkbox' && B.type !== 'radio')
              ) ?
                w && cr(w.elementType) && (xe = Oc)
              : (xe = dv));
          if (xe && (xe = xe(e, w))) {
            Nc(Q, xe, l, q);
            break e;
          }
          (ae && ae(e, B, w),
            e === 'focusout' &&
              w &&
              B.type === 'number' &&
              w.memoizedProps.value != null &&
              or(B, 'number', B.value));
        }
        switch (((ae = w ? dn(w) : window), e)) {
          case 'focusin':
            (zc(ae) || ae.contentEditable === 'true') &&
              ((za = ae), (Er = w), (Sn = null));
            break;
          case 'focusout':
            Sn = Er = za = null;
            break;
          case 'mousedown':
            Cr = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Cr = !1), Gc(Q, l, q));
            break;
          case 'selectionchange':
            if (pv) break;
          case 'keydown':
          case 'keyup':
            Gc(Q, l, q);
        }
        var he;
        if (br)
          e: {
            switch (e) {
              case 'compositionstart':
                var be = 'onCompositionStart';
                break e;
              case 'compositionend':
                be = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                be = 'onCompositionUpdate';
                break e;
            }
            be = void 0;
          }
        else
          Aa ?
            Mc(e, l) && (be = 'onCompositionEnd')
          : e === 'keydown' && l.keyCode === 229 && (be = 'onCompositionStart');
        (be &&
          (Tc &&
            l.locale !== 'ko' &&
            (Aa || be !== 'onCompositionStart' ?
              be === 'onCompositionEnd' && Aa && (he = yc())
            : ((Sl = q),
              (pr = 'value' in Sl ? Sl.value : Sl.textContent),
              (Aa = !0))),
          (ae = vs(w, be)),
          0 < ae.length &&
            ((be = new Sc(be, e, null, l, q)),
            Q.push({ event: be, listeners: ae }),
            he ?
              (be.data = he)
            : ((he = Ac(l)), he !== null && (be.data = he)))),
          (he = iv ? sv(e, l) : rv(e, l)) &&
            ((be = vs(w, 'onBeforeInput')),
            0 < be.length &&
              ((ae = new Sc('onBeforeInput', 'beforeinput', null, l, q)),
              Q.push({ event: ae, listeners: be }),
              (ae.data = he))),
          Wv(Q, e, w, l, q));
      }
      dm(Q, t);
    });
  }
  function $n(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function vs(e, t) {
    for (var l = t + 'Capture', n = []; e !== null; ) {
      var u = e,
        o = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          o === null ||
          ((u = mn(e, l)),
          u != null && n.unshift($n(e, u, o)),
          (u = mn(e, t)),
          u != null && n.push($n(e, u, o))),
        e.tag === 3)
      )
        return n;
      e = e.return;
    }
    return [];
  }
  function lg(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function hm(e, t, l, n, u) {
    for (var o = t._reactName, m = []; l !== null && l !== n; ) {
      var _ = l,
        E = _.alternate,
        w = _.stateNode;
      if (((_ = _.tag), E !== null && E === n)) break;
      ((_ !== 5 && _ !== 26 && _ !== 27) ||
        w === null ||
        ((E = w),
        u ?
          ((w = mn(l, o)), w != null && m.unshift($n(l, w, E)))
        : u || ((w = mn(l, o)), w != null && m.push($n(l, w, E)))),
        (l = l.return));
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var ag = /\r\n?/g,
    ng = /\u0000|\uFFFD/g;
  function pm(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        ag,
        `
`,
      )
      .replace(ng, '');
  }
  function vm(e, t) {
    return ((t = pm(t)), pm(e) === t);
  }
  function Ne(e, t, l, n, u, o) {
    switch (l) {
      case 'children':
        typeof n == 'string' ?
          t === 'body' || (t === 'textarea' && n === '') || Ea(e, n)
        : (typeof n == 'number' || typeof n == 'bigint') &&
          t !== 'body' &&
          Ea(e, '' + n);
        break;
      case 'className':
        bi(e, 'class', n);
        break;
      case 'tabIndex':
        bi(e, 'tabindex', n);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        bi(e, l, n);
        break;
      case 'style':
        pc(e, n, o);
        break;
      case 'data':
        if (t !== 'object') {
          bi(e, 'data', n);
          break;
        }
      case 'src':
      case 'href':
        if (n === '' && (t !== 'a' || l !== 'href')) {
          e.removeAttribute(l);
          break;
        }
        if (
          n == null ||
          typeof n == 'function' ||
          typeof n == 'symbol' ||
          typeof n == 'boolean'
        ) {
          e.removeAttribute(l);
          break;
        }
        ((n = xi('' + n)), e.setAttribute(l, n));
        break;
      case 'action':
      case 'formAction':
        if (typeof n == 'function') {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof o == 'function' &&
            (l === 'formAction' ?
              (t !== 'input' && Ne(e, t, 'name', u.name, u, null),
              Ne(e, t, 'formEncType', u.formEncType, u, null),
              Ne(e, t, 'formMethod', u.formMethod, u, null),
              Ne(e, t, 'formTarget', u.formTarget, u, null))
            : (Ne(e, t, 'encType', u.encType, u, null),
              Ne(e, t, 'method', u.method, u, null),
              Ne(e, t, 'target', u.target, u, null)));
        if (n == null || typeof n == 'symbol' || typeof n == 'boolean') {
          e.removeAttribute(l);
          break;
        }
        ((n = xi('' + n)), e.setAttribute(l, n));
        break;
      case 'onClick':
        n != null && (e.onclick = Wt);
        break;
      case 'onScroll':
        n != null && ye('scroll', e);
        break;
      case 'onScrollEnd':
        n != null && ye('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (n != null) {
          if (typeof n != 'object' || !('__html' in n)) throw Error(i(61));
          if (((l = n.__html), l != null)) {
            if (u.children != null) throw Error(i(60));
            e.innerHTML = l;
          }
        }
        break;
      case 'multiple':
        e.multiple = n && typeof n != 'function' && typeof n != 'symbol';
        break;
      case 'muted':
        e.muted = n && typeof n != 'function' && typeof n != 'symbol';
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
          n == null ||
          typeof n == 'function' ||
          typeof n == 'boolean' ||
          typeof n == 'symbol'
        ) {
          e.removeAttribute('xlink:href');
          break;
        }
        ((l = xi('' + n)),
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
        n != null && typeof n != 'function' && typeof n != 'symbol' ?
          e.setAttribute(l, '' + n)
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
        n && typeof n != 'function' && typeof n != 'symbol' ?
          e.setAttribute(l, '')
        : e.removeAttribute(l);
        break;
      case 'capture':
      case 'download':
        n === !0 ? e.setAttribute(l, '')
        : (
          n !== !1 &&
          n != null &&
          typeof n != 'function' &&
          typeof n != 'symbol'
        ) ?
          e.setAttribute(l, n)
        : e.removeAttribute(l);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        (
          n != null &&
          typeof n != 'function' &&
          typeof n != 'symbol' &&
          !isNaN(n) &&
          1 <= n
        ) ?
          e.setAttribute(l, n)
        : e.removeAttribute(l);
        break;
      case 'rowSpan':
      case 'start':
        (
          n == null ||
          typeof n == 'function' ||
          typeof n == 'symbol' ||
          isNaN(n)
        ) ?
          e.removeAttribute(l)
        : e.setAttribute(l, n);
        break;
      case 'popover':
        (ye('beforetoggle', e), ye('toggle', e), _i(e, 'popover', n));
        break;
      case 'xlinkActuate':
        Pt(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', n);
        break;
      case 'xlinkArcrole':
        Pt(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', n);
        break;
      case 'xlinkRole':
        Pt(e, 'http://www.w3.org/1999/xlink', 'xlink:role', n);
        break;
      case 'xlinkShow':
        Pt(e, 'http://www.w3.org/1999/xlink', 'xlink:show', n);
        break;
      case 'xlinkTitle':
        Pt(e, 'http://www.w3.org/1999/xlink', 'xlink:title', n);
        break;
      case 'xlinkType':
        Pt(e, 'http://www.w3.org/1999/xlink', 'xlink:type', n);
        break;
      case 'xmlBase':
        Pt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', n);
        break;
      case 'xmlLang':
        Pt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', n);
        break;
      case 'xmlSpace':
        Pt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', n);
        break;
      case 'is':
        _i(e, 'is', n);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== 'o' && l[0] !== 'O') ||
          (l[1] !== 'n' && l[1] !== 'N')) &&
          ((l = Dp.get(l) || l), _i(e, l, n));
    }
  }
  function Fu(e, t, l, n, u, o) {
    switch (l) {
      case 'style':
        pc(e, n, o);
        break;
      case 'dangerouslySetInnerHTML':
        if (n != null) {
          if (typeof n != 'object' || !('__html' in n)) throw Error(i(61));
          if (((l = n.__html), l != null)) {
            if (u.children != null) throw Error(i(60));
            e.innerHTML = l;
          }
        }
        break;
      case 'children':
        typeof n == 'string' ?
          Ea(e, n)
        : (typeof n == 'number' || typeof n == 'bigint') && Ea(e, '' + n);
        break;
      case 'onScroll':
        n != null && ye('scroll', e);
        break;
      case 'onScrollEnd':
        n != null && ye('scrollend', e);
        break;
      case 'onClick':
        n != null && (e.onclick = Wt);
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
        if (!sc.hasOwnProperty(l))
          e: {
            if (
              l[0] === 'o' &&
              l[1] === 'n' &&
              ((u = l.endsWith('Capture')),
              (t = l.slice(2, u ? l.length - 7 : void 0)),
              (o = e[ct] || null),
              (o = o != null ? o[l] : null),
              typeof o == 'function' && e.removeEventListener(t, o, u),
              typeof n == 'function')
            ) {
              (typeof o != 'function' &&
                o !== null &&
                (l in e ?
                  (e[l] = null)
                : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, n, u));
              break e;
            }
            l in e ? (e[l] = n)
            : n === !0 ? e.setAttribute(l, '')
            : _i(e, l, n);
          }
    }
  }
  function nt(e, t, l) {
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
        (ye('error', e), ye('load', e));
        var n = !1,
          u = !1,
          o;
        for (o in l)
          if (l.hasOwnProperty(o)) {
            var m = l[o];
            if (m != null)
              switch (o) {
                case 'src':
                  n = !0;
                  break;
                case 'srcSet':
                  u = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(i(137, t));
                default:
                  Ne(e, t, o, m, l, null);
              }
          }
        (u && Ne(e, t, 'srcSet', l.srcSet, l, null),
          n && Ne(e, t, 'src', l.src, l, null));
        return;
      case 'input':
        ye('invalid', e);
        var _ = (o = m = u = null),
          E = null,
          w = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var q = l[n];
            if (q != null)
              switch (n) {
                case 'name':
                  u = q;
                  break;
                case 'type':
                  m = q;
                  break;
                case 'checked':
                  E = q;
                  break;
                case 'defaultChecked':
                  w = q;
                  break;
                case 'value':
                  o = q;
                  break;
                case 'defaultValue':
                  _ = q;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (q != null) throw Error(i(137, t));
                  break;
                default:
                  Ne(e, t, n, q, l, null);
              }
          }
        fc(e, o, _, E, w, m, u, !1);
        return;
      case 'select':
        (ye('invalid', e), (n = m = o = null));
        for (u in l)
          if (l.hasOwnProperty(u) && ((_ = l[u]), _ != null))
            switch (u) {
              case 'value':
                o = _;
                break;
              case 'defaultValue':
                m = _;
                break;
              case 'multiple':
                n = _;
              default:
                Ne(e, t, u, _, l, null);
            }
        ((t = o),
          (l = m),
          (e.multiple = !!n),
          t != null ? Ta(e, !!n, t, !1) : l != null && Ta(e, !!n, l, !0));
        return;
      case 'textarea':
        (ye('invalid', e), (o = u = n = null));
        for (m in l)
          if (l.hasOwnProperty(m) && ((_ = l[m]), _ != null))
            switch (m) {
              case 'value':
                n = _;
                break;
              case 'defaultValue':
                u = _;
                break;
              case 'children':
                o = _;
                break;
              case 'dangerouslySetInnerHTML':
                if (_ != null) throw Error(i(91));
                break;
              default:
                Ne(e, t, m, _, l, null);
            }
        mc(e, n, u, o);
        return;
      case 'option':
        for (E in l)
          l.hasOwnProperty(E) &&
            ((n = l[E]), n != null) &&
            (E === 'selected' ?
              (e.selected = n && typeof n != 'function' && typeof n != 'symbol')
            : Ne(e, t, E, n, l, null));
        return;
      case 'dialog':
        (ye('beforetoggle', e),
          ye('toggle', e),
          ye('cancel', e),
          ye('close', e));
        break;
      case 'iframe':
      case 'object':
        ye('load', e);
        break;
      case 'video':
      case 'audio':
        for (n = 0; n < Zn.length; n++) ye(Zn[n], e);
        break;
      case 'image':
        (ye('error', e), ye('load', e));
        break;
      case 'details':
        ye('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (ye('error', e), ye('load', e));
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
        for (w in l)
          if (l.hasOwnProperty(w) && ((n = l[w]), n != null))
            switch (w) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(i(137, t));
              default:
                Ne(e, t, w, n, l, null);
            }
        return;
      default:
        if (cr(t)) {
          for (q in l)
            l.hasOwnProperty(q) &&
              ((n = l[q]), n !== void 0 && Fu(e, t, q, n, l, void 0));
          return;
        }
    }
    for (_ in l)
      l.hasOwnProperty(_) && ((n = l[_]), n != null && Ne(e, t, _, n, l, null));
  }
  function ig(e, t, l, n) {
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
        var u = null,
          o = null,
          m = null,
          _ = null,
          E = null,
          w = null,
          q = null;
        for (U in l) {
          var Q = l[U];
          if (l.hasOwnProperty(U) && Q != null)
            switch (U) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                E = Q;
              default:
                n.hasOwnProperty(U) || Ne(e, t, U, null, n, Q);
            }
        }
        for (var B in n) {
          var U = n[B];
          if (((Q = l[B]), n.hasOwnProperty(B) && (U != null || Q != null)))
            switch (B) {
              case 'type':
                o = U;
                break;
              case 'name':
                u = U;
                break;
              case 'checked':
                w = U;
                break;
              case 'defaultChecked':
                q = U;
                break;
              case 'value':
                m = U;
                break;
              case 'defaultValue':
                _ = U;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (U != null) throw Error(i(137, t));
                break;
              default:
                U !== Q && Ne(e, t, B, U, n, Q);
            }
        }
        ur(e, m, _, E, w, q, o, u);
        return;
      case 'select':
        U = m = _ = B = null;
        for (o in l)
          if (((E = l[o]), l.hasOwnProperty(o) && E != null))
            switch (o) {
              case 'value':
                break;
              case 'multiple':
                U = E;
              default:
                n.hasOwnProperty(o) || Ne(e, t, o, null, n, E);
            }
        for (u in n)
          if (
            ((o = n[u]),
            (E = l[u]),
            n.hasOwnProperty(u) && (o != null || E != null))
          )
            switch (u) {
              case 'value':
                B = o;
                break;
              case 'defaultValue':
                _ = o;
                break;
              case 'multiple':
                m = o;
              default:
                o !== E && Ne(e, t, u, o, n, E);
            }
        ((t = _),
          (l = m),
          (n = U),
          B != null ?
            Ta(e, !!l, B, !1)
          : !!n != !!l &&
            (t != null ? Ta(e, !!l, t, !0) : Ta(e, !!l, l ? [] : '', !1)));
        return;
      case 'textarea':
        U = B = null;
        for (_ in l)
          if (
            ((u = l[_]),
            l.hasOwnProperty(_) && u != null && !n.hasOwnProperty(_))
          )
            switch (_) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                Ne(e, t, _, null, n, u);
            }
        for (m in n)
          if (
            ((u = n[m]),
            (o = l[m]),
            n.hasOwnProperty(m) && (u != null || o != null))
          )
            switch (m) {
              case 'value':
                B = u;
                break;
              case 'defaultValue':
                U = u;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (u != null) throw Error(i(91));
                break;
              default:
                u !== o && Ne(e, t, m, u, n, o);
            }
        dc(e, B, U);
        return;
      case 'option':
        for (var te in l)
          ((B = l[te]),
            l.hasOwnProperty(te) &&
              B != null &&
              !n.hasOwnProperty(te) &&
              (te === 'selected' ?
                (e.selected = !1)
              : Ne(e, t, te, null, n, B)));
        for (E in n)
          ((B = n[E]),
            (U = l[E]),
            n.hasOwnProperty(E) &&
              B !== U &&
              (B != null || U != null) &&
              (E === 'selected' ?
                (e.selected =
                  B && typeof B != 'function' && typeof B != 'symbol')
              : Ne(e, t, E, B, n, U)));
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
        for (var se in l)
          ((B = l[se]),
            l.hasOwnProperty(se) &&
              B != null &&
              !n.hasOwnProperty(se) &&
              Ne(e, t, se, null, n, B));
        for (w in n)
          if (
            ((B = n[w]),
            (U = l[w]),
            n.hasOwnProperty(w) && B !== U && (B != null || U != null))
          )
            switch (w) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (B != null) throw Error(i(137, t));
                break;
              default:
                Ne(e, t, w, B, n, U);
            }
        return;
      default:
        if (cr(t)) {
          for (var Oe in l)
            ((B = l[Oe]),
              l.hasOwnProperty(Oe) &&
                B !== void 0 &&
                !n.hasOwnProperty(Oe) &&
                Fu(e, t, Oe, void 0, n, B));
          for (q in n)
            ((B = n[q]),
              (U = l[q]),
              !n.hasOwnProperty(q) ||
                B === U ||
                (B === void 0 && U === void 0) ||
                Fu(e, t, q, B, n, U));
          return;
        }
    }
    for (var R in l)
      ((B = l[R]),
        l.hasOwnProperty(R) &&
          B != null &&
          !n.hasOwnProperty(R) &&
          Ne(e, t, R, null, n, B));
    for (Q in n)
      ((B = n[Q]),
        (U = l[Q]),
        !n.hasOwnProperty(Q) ||
          B === U ||
          (B == null && U == null) ||
          Ne(e, t, Q, B, n, U));
  }
  function gm(e) {
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
  function sg() {
    if (typeof performance.getEntriesByType == 'function') {
      for (
        var e = 0, t = 0, l = performance.getEntriesByType('resource'), n = 0;
        n < l.length;
        n++
      ) {
        var u = l[n],
          o = u.transferSize,
          m = u.initiatorType,
          _ = u.duration;
        if (o && _ && gm(m)) {
          for (m = 0, _ = u.responseEnd, n += 1; n < l.length; n++) {
            var E = l[n],
              w = E.startTime;
            if (w > _) break;
            var q = E.transferSize,
              Q = E.initiatorType;
            q &&
              gm(Q) &&
              ((E = E.responseEnd), (m += q * (E < _ ? 1 : (_ - w) / (E - w))));
          }
          if ((--n, (t += (8 * (o + m)) / (u.duration / 1e3)), e++, 10 < e))
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
  var Pu = null,
    Wu = null;
  function gs(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function ym(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function _m(e, t) {
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
  function Iu(e, t) {
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
  var eo = null;
  function rg() {
    var e = window.event;
    return (
      e && e.type === 'popstate' ?
        e === eo ?
          !1
        : ((eo = e), !0)
      : ((eo = null), !1)
    );
  }
  var bm = typeof setTimeout == 'function' ? setTimeout : void 0,
    ug = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Sm = typeof Promise == 'function' ? Promise : void 0,
    og =
      typeof queueMicrotask == 'function' ? queueMicrotask
      : typeof Sm < 'u' ?
        function (e) {
          return Sm.resolve(null).then(e).catch(cg);
        }
      : bm;
  function cg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ul(e) {
    return e === 'head';
  }
  function xm(e, t) {
    var l = t,
      n = 0;
    do {
      var u = l.nextSibling;
      if ((e.removeChild(l), u && u.nodeType === 8))
        if (((l = u.data), l === '/$' || l === '/&')) {
          if (n === 0) {
            (e.removeChild(u), tn(t));
            return;
          }
          n--;
        } else if (
          l === '$' ||
          l === '$?' ||
          l === '$~' ||
          l === '$!' ||
          l === '&'
        )
          n++;
        else if (l === 'html') kn(e.ownerDocument.documentElement);
        else if (l === 'head') {
          ((l = e.ownerDocument.head), kn(l));
          for (var o = l.firstChild; o; ) {
            var m = o.nextSibling,
              _ = o.nodeName;
            (o[fn] ||
              _ === 'SCRIPT' ||
              _ === 'STYLE' ||
              (_ === 'LINK' && o.rel.toLowerCase() === 'stylesheet') ||
              l.removeChild(o),
              (o = m));
          }
        } else l === 'body' && kn(e.ownerDocument.body);
      l = u;
    } while (l);
    tn(t);
  }
  function Tm(e, t) {
    var l = e;
    e = 0;
    do {
      var n = l.nextSibling;
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
        n && n.nodeType === 8)
      )
        if (((l = n.data), l === '/$')) {
          if (e === 0) break;
          e--;
        } else (l !== '$' && l !== '$?' && l !== '$~' && l !== '$!') || e++;
      l = n;
    } while (l);
  }
  function to(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (to(l), sr(l));
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
  function fg(e, t, l, n) {
    for (; e.nodeType === 1; ) {
      var u = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!n && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (n) {
        if (!e[fn])
          switch (t) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (
                ((o = e.getAttribute('rel')),
                o === 'stylesheet' && e.hasAttribute('data-precedence'))
              )
                break;
              if (
                o !== u.rel ||
                e.getAttribute('href') !==
                  (u.href == null || u.href === '' ? null : u.href) ||
                e.getAttribute('crossorigin') !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                e.getAttribute('title') !== (u.title == null ? null : u.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((o = e.getAttribute('src')),
                (o !== (u.src == null ? null : u.src) ||
                  e.getAttribute('type') !== (u.type == null ? null : u.type) ||
                  e.getAttribute('crossorigin') !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  o &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === 'input' && e.type === 'hidden') {
        var o = u.name == null ? null : '' + u.name;
        if (u.type === 'hidden' && e.getAttribute('name') === o) return e;
      } else return e;
      if (((e = Bt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function dg(e, t, l) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !l) ||
        ((e = Bt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Em(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !t) ||
        ((e = Bt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function lo(e) {
    return e.data === '$?' || e.data === '$~';
  }
  function ao(e) {
    return (
      e.data === '$!' ||
      (e.data === '$?' && e.ownerDocument.readyState !== 'loading')
    );
  }
  function mg(e, t) {
    var l = e.ownerDocument;
    if (e.data === '$~') e._reactRetry = t;
    else if (e.data !== '$?' || l.readyState !== 'loading') t();
    else {
      var n = function () {
        (t(), l.removeEventListener('DOMContentLoaded', n));
      };
      (l.addEventListener('DOMContentLoaded', n), (e._reactRetry = n));
    }
  }
  function Bt(e) {
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
  var no = null;
  function Cm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === '/$' || l === '/&') {
          if (t === 0) return Bt(e.nextSibling);
          t--;
        } else
          (l !== '$' && l !== '$!' && l !== '$?' && l !== '$~' && l !== '&') ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Mm(e) {
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
  function Am(e, t, l) {
    switch (((t = gs(l)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(i(452));
        return e;
      case 'head':
        if (((e = t.head), !e)) throw Error(i(453));
        return e;
      case 'body':
        if (((e = t.body), !e)) throw Error(i(454));
        return e;
      default:
        throw Error(i(451));
    }
  }
  function kn(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    sr(e);
  }
  var Ht = new Map(),
    zm = new Set();
  function ys(e) {
    return (
      typeof e.getRootNode == 'function' ? e.getRootNode()
      : e.nodeType === 9 ? e
      : e.ownerDocument
    );
  }
  var hl = Z.d;
  Z.d = { f: hg, r: pg, D: vg, C: gg, L: yg, m: _g, X: Sg, S: bg, M: xg };
  function hg() {
    var e = hl.f(),
      t = os();
    return e || t;
  }
  function pg(e) {
    var t = ba(e);
    t !== null && t.tag === 5 && t.type === 'form' ? Zf(t) : hl.r(e);
  }
  var Wa = typeof document > 'u' ? null : document;
  function Nm(e, t, l) {
    var n = Wa;
    if (n && typeof t == 'string' && t) {
      var u = Nt(t);
      ((u = 'link[rel="' + e + '"][href="' + u + '"]'),
        typeof l == 'string' && (u += '[crossorigin="' + l + '"]'),
        zm.has(u) ||
          (zm.add(u),
          (e = { rel: e, crossOrigin: l, href: t }),
          n.querySelector(u) === null &&
            ((t = n.createElement('link')),
            nt(t, 'link', e),
            Ke(t),
            n.head.appendChild(t))));
    }
  }
  function vg(e) {
    (hl.D(e), Nm('dns-prefetch', e, null));
  }
  function gg(e, t) {
    (hl.C(e, t), Nm('preconnect', e, t));
  }
  function yg(e, t, l) {
    hl.L(e, t, l);
    var n = Wa;
    if (n && e && t) {
      var u = 'link[rel="preload"][as="' + Nt(t) + '"]';
      t === 'image' && l && l.imageSrcSet ?
        ((u += '[imagesrcset="' + Nt(l.imageSrcSet) + '"]'),
        typeof l.imageSizes == 'string' &&
          (u += '[imagesizes="' + Nt(l.imageSizes) + '"]'))
      : (u += '[href="' + Nt(e) + '"]');
      var o = u;
      switch (t) {
        case 'style':
          o = Ia(e);
          break;
        case 'script':
          o = en(e);
      }
      Ht.has(o) ||
        ((e = v(
          {
            rel: 'preload',
            href: t === 'image' && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l,
        )),
        Ht.set(o, e),
        n.querySelector(u) !== null ||
          (t === 'style' && n.querySelector(Kn(o))) ||
          (t === 'script' && n.querySelector(Jn(o))) ||
          ((t = n.createElement('link')),
          nt(t, 'link', e),
          Ke(t),
          n.head.appendChild(t)));
    }
  }
  function _g(e, t) {
    hl.m(e, t);
    var l = Wa;
    if (l && e) {
      var n = t && typeof t.as == 'string' ? t.as : 'script',
        u =
          'link[rel="modulepreload"][as="' + Nt(n) + '"][href="' + Nt(e) + '"]',
        o = u;
      switch (n) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          o = en(e);
      }
      if (
        !Ht.has(o) &&
        ((e = v({ rel: 'modulepreload', href: e }, t)),
        Ht.set(o, e),
        l.querySelector(u) === null)
      ) {
        switch (n) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (l.querySelector(Jn(o))) return;
        }
        ((n = l.createElement('link')),
          nt(n, 'link', e),
          Ke(n),
          l.head.appendChild(n));
      }
    }
  }
  function bg(e, t, l) {
    hl.S(e, t, l);
    var n = Wa;
    if (n && e) {
      var u = Sa(n).hoistableStyles,
        o = Ia(e);
      t = t || 'default';
      var m = u.get(o);
      if (!m) {
        var _ = { loading: 0, preload: null };
        if ((m = n.querySelector(Kn(o)))) _.loading = 5;
        else {
          ((e = v({ 'rel': 'stylesheet', 'href': e, 'data-precedence': t }, l)),
            (l = Ht.get(o)) && io(e, l));
          var E = (m = n.createElement('link'));
          (Ke(E),
            nt(E, 'link', e),
            (E._p = new Promise(function (w, q) {
              ((E.onload = w), (E.onerror = q));
            })),
            E.addEventListener('load', function () {
              _.loading |= 1;
            }),
            E.addEventListener('error', function () {
              _.loading |= 2;
            }),
            (_.loading |= 4),
            _s(m, t, n));
        }
        ((m = { type: 'stylesheet', instance: m, count: 1, state: _ }),
          u.set(o, m));
      }
    }
  }
  function Sg(e, t) {
    hl.X(e, t);
    var l = Wa;
    if (l && e) {
      var n = Sa(l).hoistableScripts,
        u = en(e),
        o = n.get(u);
      o ||
        ((o = l.querySelector(Jn(u))),
        o ||
          ((e = v({ src: e, async: !0 }, t)),
          (t = Ht.get(u)) && so(e, t),
          (o = l.createElement('script')),
          Ke(o),
          nt(o, 'link', e),
          l.head.appendChild(o)),
        (o = { type: 'script', instance: o, count: 1, state: null }),
        n.set(u, o));
    }
  }
  function xg(e, t) {
    hl.M(e, t);
    var l = Wa;
    if (l && e) {
      var n = Sa(l).hoistableScripts,
        u = en(e),
        o = n.get(u);
      o ||
        ((o = l.querySelector(Jn(u))),
        o ||
          ((e = v({ src: e, async: !0, type: 'module' }, t)),
          (t = Ht.get(u)) && so(e, t),
          (o = l.createElement('script')),
          Ke(o),
          nt(o, 'link', e),
          l.head.appendChild(o)),
        (o = { type: 'script', instance: o, count: 1, state: null }),
        n.set(u, o));
    }
  }
  function Om(e, t, l, n) {
    var u = (u = ve.current) ? ys(u) : null;
    if (!u) throw Error(i(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof l.precedence == 'string' && typeof l.href == 'string' ?
            ((t = Ia(l.href)),
            (l = Sa(u).hoistableStyles),
            (n = l.get(t)),
            n ||
              ((n = { type: 'style', instance: null, count: 0, state: null }),
              l.set(t, n)),
            n)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          l.rel === 'stylesheet' &&
          typeof l.href == 'string' &&
          typeof l.precedence == 'string'
        ) {
          e = Ia(l.href);
          var o = Sa(u).hoistableStyles,
            m = o.get(e);
          if (
            (m ||
              ((u = u.ownerDocument || u),
              (m = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              o.set(e, m),
              (o = u.querySelector(Kn(e))) &&
                !o._p &&
                ((m.instance = o), (m.state.loading = 5)),
              Ht.has(e) ||
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
                Ht.set(e, l),
                o || Tg(u, e, l, m.state))),
            t && n === null)
          )
            throw Error(i(528, ''));
          return m;
        }
        if (t && n !== null) throw Error(i(529, ''));
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
            ((t = en(l)),
            (l = Sa(u).hoistableScripts),
            (n = l.get(t)),
            n ||
              ((n = { type: 'script', instance: null, count: 0, state: null }),
              l.set(t, n)),
            n)
          : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, e));
    }
  }
  function Ia(e) {
    return 'href="' + Nt(e) + '"';
  }
  function Kn(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function jm(e) {
    return v({}, e, { 'data-precedence': e.precedence, 'precedence': null });
  }
  function Tg(e, t, l, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']') ?
      (n.loading = 1)
    : ((t = e.createElement('link')),
      (n.preload = t),
      t.addEventListener('load', function () {
        return (n.loading |= 1);
      }),
      t.addEventListener('error', function () {
        return (n.loading |= 2);
      }),
      nt(t, 'link', l),
      Ke(t),
      e.head.appendChild(t));
  }
  function en(e) {
    return '[src="' + Nt(e) + '"]';
  }
  function Jn(e) {
    return 'script[async]' + e;
  }
  function Dm(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var n = e.querySelector('style[data-href~="' + Nt(l.href) + '"]');
          if (n) return ((t.instance = n), Ke(n), n);
          var u = v({}, l, {
            'data-href': l.href,
            'data-precedence': l.precedence,
            'href': null,
            'precedence': null,
          });
          return (
            (n = (e.ownerDocument || e).createElement('style')),
            Ke(n),
            nt(n, 'style', u),
            _s(n, l.precedence, e),
            (t.instance = n)
          );
        case 'stylesheet':
          u = Ia(l.href);
          var o = e.querySelector(Kn(u));
          if (o) return ((t.state.loading |= 4), (t.instance = o), Ke(o), o);
          ((n = jm(l)),
            (u = Ht.get(u)) && io(n, u),
            (o = (e.ownerDocument || e).createElement('link')),
            Ke(o));
          var m = o;
          return (
            (m._p = new Promise(function (_, E) {
              ((m.onload = _), (m.onerror = E));
            })),
            nt(o, 'link', n),
            (t.state.loading |= 4),
            _s(o, l.precedence, e),
            (t.instance = o)
          );
        case 'script':
          return (
            (o = en(l.src)),
            (u = e.querySelector(Jn(o))) ?
              ((t.instance = u), Ke(u), u)
            : ((n = l),
              (u = Ht.get(o)) && ((n = v({}, l)), so(n, u)),
              (e = e.ownerDocument || e),
              (u = e.createElement('script')),
              Ke(u),
              nt(u, 'link', n),
              e.head.appendChild(u),
              (t.instance = u))
          );
        case 'void':
          return null;
        default:
          throw Error(i(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((n = t.instance), (t.state.loading |= 4), _s(n, l.precedence, e));
    return t.instance;
  }
  function _s(e, t, l) {
    for (
      var n = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = n.length ? n[n.length - 1] : null,
        o = u,
        m = 0;
      m < n.length;
      m++
    ) {
      var _ = n[m];
      if (_.dataset.precedence === t) o = _;
      else if (o !== u) break;
    }
    o ?
      o.parentNode.insertBefore(e, o.nextSibling)
    : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function io(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function so(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var bs = null;
  function Rm(e, t, l) {
    if (bs === null) {
      var n = new Map(),
        u = (bs = new Map());
      u.set(l, n);
    } else ((u = bs), (n = u.get(l)), n || ((n = new Map()), u.set(l, n)));
    if (n.has(e)) return n;
    for (
      n.set(e, null), l = l.getElementsByTagName(e), u = 0;
      u < l.length;
      u++
    ) {
      var o = l[u];
      if (
        !(
          o[fn] ||
          o[et] ||
          (e === 'link' && o.getAttribute('rel') === 'stylesheet')
        ) &&
        o.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var m = o.getAttribute(t) || '';
        m = e + m;
        var _ = n.get(m);
        _ ? _.push(o) : n.set(m, [o]);
      }
    }
    return n;
  }
  function Lm(e, t, l) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === 'title' ? e.querySelector('head > title') : null,
      ));
  }
  function Eg(e, t, l) {
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
  function wm(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  function Cg(e, t, l, n) {
    if (
      l.type === 'stylesheet' &&
      (typeof n.media != 'string' || matchMedia(n.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var u = Ia(n.href),
          o = t.querySelector(Kn(u));
        if (o) {
          ((t = o._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (e.count++, (e = Ss.bind(e)), t.then(e, e)),
            (l.state.loading |= 4),
            (l.instance = o),
            Ke(o));
          return;
        }
        ((o = t.ownerDocument || t),
          (n = jm(n)),
          (u = Ht.get(u)) && io(n, u),
          (o = o.createElement('link')),
          Ke(o));
        var m = o;
        ((m._p = new Promise(function (_, E) {
          ((m.onload = _), (m.onerror = E));
        })),
          nt(o, 'link', n),
          (l.instance = o));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (e.count++,
          (l = Ss.bind(e)),
          t.addEventListener('load', l),
          t.addEventListener('error', l)));
    }
  }
  var ro = 0;
  function Mg(e, t) {
    return (
      e.stylesheets && e.count === 0 && Ts(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount ?
        function (l) {
          var n = setTimeout(function () {
            if ((e.stylesheets && Ts(e, e.stylesheets), e.unsuspend)) {
              var o = e.unsuspend;
              ((e.unsuspend = null), o());
            }
          }, 6e4 + t);
          0 < e.imgBytes && ro === 0 && (ro = 62500 * sg());
          var u = setTimeout(
            function () {
              if (
                ((e.waitingForImages = !1),
                e.count === 0 &&
                  (e.stylesheets && Ts(e, e.stylesheets), e.unsuspend))
              ) {
                var o = e.unsuspend;
                ((e.unsuspend = null), o());
              }
            },
            (e.imgBytes > ro ? 50 : 800) + t,
          );
          return (
            (e.unsuspend = l),
            function () {
              ((e.unsuspend = null), clearTimeout(n), clearTimeout(u));
            }
          );
        }
      : null
    );
  }
  function Ss() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Ts(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var xs = null;
  function Ts(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (xs = new Map()),
        t.forEach(Ag, e),
        (xs = null),
        Ss.call(e)));
  }
  function Ag(e, t) {
    if (!(t.state.loading & 4)) {
      var l = xs.get(e);
      if (l) var n = l.get(null);
      else {
        ((l = new Map()), xs.set(e, l));
        for (
          var u = e.querySelectorAll(
              'link[data-precedence],style[data-precedence]',
            ),
            o = 0;
          o < u.length;
          o++
        ) {
          var m = u[o];
          (m.nodeName === 'LINK' || m.getAttribute('media') !== 'not all') &&
            (l.set(m.dataset.precedence, m), (n = m));
        }
        n && l.set(null, n);
      }
      ((u = t.instance),
        (m = u.getAttribute('data-precedence')),
        (o = l.get(m) || n),
        o === n && l.set(null, u),
        l.set(m, u),
        this.count++,
        (n = Ss.bind(this)),
        u.addEventListener('load', n),
        u.addEventListener('error', n),
        o ?
          o.parentNode.insertBefore(u, o.nextSibling)
        : ((e = e.nodeType === 9 ? e.head : e),
          e.insertBefore(u, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Fn = {
    $$typeof: O,
    Provider: null,
    Consumer: null,
    _currentValue: X,
    _currentValue2: X,
    _threadCount: 0,
  };
  function zg(e, t, l, n, u, o, m, _, E) {
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
      (this.expirationTimes = lr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = lr(0)),
      (this.hiddenUpdates = lr(null)),
      (this.identifierPrefix = n),
      (this.onUncaughtError = u),
      (this.onCaughtError = o),
      (this.onRecoverableError = m),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = E),
      (this.incompleteTransitions = new Map()));
  }
  function Bm(e, t, l, n, u, o, m, _, E, w, q, Q) {
    return (
      (e = new zg(e, t, l, m, E, w, q, Q, _)),
      (t = 1),
      o === !0 && (t |= 24),
      (o = St(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (t = qr()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (o.memoizedState = { element: n, isDehydrated: l, cache: t }),
      Qr(o),
      e
    );
  }
  function Hm(e) {
    return e ? ((e = ja), e) : ja;
  }
  function Um(e, t, l, n, u, o) {
    ((u = Hm(u)),
      n.context === null ? (n.context = u) : (n.pendingContext = u),
      (n = Al(t)),
      (n.payload = { element: l }),
      (o = o === void 0 ? null : o),
      o !== null && (n.callback = o),
      (l = zl(e, n, t)),
      l !== null && (vt(l, e, t), zn(l, e, t)));
  }
  function Gm(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function uo(e, t) {
    (Gm(e, t), (e = e.alternate) && Gm(e, t));
  }
  function qm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Il(e, 67108864);
      (t !== null && vt(t, e, 67108864), uo(e, 67108864));
    }
  }
  function Ym(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Mt();
      t = ar(t);
      var l = Il(e, t);
      (l !== null && vt(l, e, t), uo(e, t));
    }
  }
  var Es = !0;
  function Ng(e, t, l, n) {
    var u = G.T;
    G.T = null;
    var o = Z.p;
    try {
      ((Z.p = 2), oo(e, t, l, n));
    } finally {
      ((Z.p = o), (G.T = u));
    }
  }
  function Og(e, t, l, n) {
    var u = G.T;
    G.T = null;
    var o = Z.p;
    try {
      ((Z.p = 8), oo(e, t, l, n));
    } finally {
      ((Z.p = o), (G.T = u));
    }
  }
  function oo(e, t, l, n) {
    if (Es) {
      var u = co(n);
      if (u === null) (Ju(e, t, n, Cs, l), Xm(e, n));
      else if (Dg(u, e, t, l, n)) n.stopPropagation();
      else if ((Xm(e, n), t & 4 && -1 < jg.indexOf(e))) {
        for (; u !== null; ) {
          var o = ba(u);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var m = Kl(o.pendingLanes);
                  if (m !== 0) {
                    var _ = o;
                    for (_.pendingLanes |= 2, _.entangledLanes |= 2; m; ) {
                      var E = 1 << (31 - _t(m));
                      ((_.entanglements[1] |= E), (m &= ~E));
                    }
                    (kt(o), (Ee & 6) === 0 && ((rs = gt() + 500), Qn(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((_ = Il(o, 2)), _ !== null && vt(_, o, 2), os(), uo(o, 2));
            }
          if (((o = co(n)), o === null && Ju(e, t, n, Cs, l), o === u)) break;
          u = o;
        }
        u !== null && n.stopPropagation();
      } else Ju(e, t, n, null, l);
    }
  }
  function co(e) {
    return ((e = dr(e)), fo(e));
  }
  var Cs = null;
  function fo(e) {
    if (((Cs = null), (e = _a(e)), e !== null)) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = h(t)), e !== null)) return e;
          e = null;
        } else if (l === 31) {
          if (((e = y(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Cs = e), null);
  }
  function Vm(e) {
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
        switch (vp()) {
          case Jo:
            return 2;
          case Fo:
            return 8;
          case hi:
          case gp:
            return 32;
          case Po:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var mo = !1,
    Gl = null,
    ql = null,
    Yl = null,
    Pn = new Map(),
    Wn = new Map(),
    Vl = [],
    jg =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      );
  function Xm(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Gl = null;
        break;
      case 'dragenter':
      case 'dragleave':
        ql = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Yl = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Pn.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Wn.delete(t.pointerId);
    }
  }
  function In(e, t, l, n, u, o) {
    return e === null || e.nativeEvent !== o ?
        ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: n,
          nativeEvent: o,
          targetContainers: [u],
        }),
        t !== null && ((t = ba(t)), t !== null && qm(t)),
        e)
      : ((e.eventSystemFlags |= n),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function Dg(e, t, l, n, u) {
    switch (t) {
      case 'focusin':
        return ((Gl = In(Gl, e, t, l, n, u)), !0);
      case 'dragenter':
        return ((ql = In(ql, e, t, l, n, u)), !0);
      case 'mouseover':
        return ((Yl = In(Yl, e, t, l, n, u)), !0);
      case 'pointerover':
        var o = u.pointerId;
        return (Pn.set(o, In(Pn.get(o) || null, e, t, l, n, u)), !0);
      case 'gotpointercapture':
        return (
          (o = u.pointerId),
          Wn.set(o, In(Wn.get(o) || null, e, t, l, n, u)),
          !0
        );
    }
    return !1;
  }
  function Qm(e) {
    var t = _a(e.target);
    if (t !== null) {
      var l = f(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = h(l)), t !== null)) {
            ((e.blockedOn = t),
              ac(e.priority, function () {
                Ym(l);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = y(l)), t !== null)) {
            ((e.blockedOn = t),
              ac(e.priority, function () {
                Ym(l);
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
  function Ms(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = co(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var n = new l.constructor(l.type, l);
        ((fr = n), l.target.dispatchEvent(n), (fr = null));
      } else return ((t = ba(l)), t !== null && qm(t), (e.blockedOn = l), !1);
      t.shift();
    }
    return !0;
  }
  function Zm(e, t, l) {
    Ms(e) && l.delete(t);
  }
  function Rg() {
    ((mo = !1),
      Gl !== null && Ms(Gl) && (Gl = null),
      ql !== null && Ms(ql) && (ql = null),
      Yl !== null && Ms(Yl) && (Yl = null),
      Pn.forEach(Zm),
      Wn.forEach(Zm));
  }
  function As(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      mo ||
        ((mo = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, Rg)));
  }
  var zs = null;
  function $m(e) {
    zs !== e &&
      ((zs = e),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        zs === e && (zs = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            n = e[t + 1],
            u = e[t + 2];
          if (typeof n != 'function') {
            if (fo(n || l) === null) continue;
            break;
          }
          var o = ba(l);
          o !== null &&
            (e.splice(t, 3),
            (t -= 3),
            cu(o, { pending: !0, data: u, method: l.method, action: n }, n, u));
        }
      }));
  }
  function tn(e) {
    function t(E) {
      return As(E, e);
    }
    (Gl !== null && As(Gl, e),
      ql !== null && As(ql, e),
      Yl !== null && As(Yl, e),
      Pn.forEach(t),
      Wn.forEach(t));
    for (var l = 0; l < Vl.length; l++) {
      var n = Vl[l];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < Vl.length && ((l = Vl[0]), l.blockedOn === null); )
      (Qm(l), l.blockedOn === null && Vl.shift());
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (n = 0; n < l.length; n += 3) {
        var u = l[n],
          o = l[n + 1],
          m = u[ct] || null;
        if (typeof o == 'function') m || $m(l);
        else if (m) {
          var _ = null;
          if (o && o.hasAttribute('formAction')) {
            if (((u = o), (m = o[ct] || null))) _ = m.formAction;
            else if (fo(u) !== null) continue;
          } else _ = m.action;
          (typeof _ == 'function' ? (l[n + 1] = _) : (l.splice(n, 3), (n -= 3)),
            $m(l));
        }
      }
  }
  function km() {
    function e(o) {
      o.canIntercept &&
        o.info === 'react-transition' &&
        o.intercept({
          handler: function () {
            return new Promise(function (m) {
              return (u = m);
            });
          },
          focusReset: 'manual',
          scroll: 'manual',
        });
    }
    function t() {
      (u !== null && (u(), (u = null)), n || setTimeout(l, 20));
    }
    function l() {
      if (!n && !navigation.transition) {
        var o = navigation.currentEntry;
        o &&
          o.url != null &&
          navigation.navigate(o.url, {
            state: o.getState(),
            info: 'react-transition',
            history: 'replace',
          });
      }
    }
    if (typeof navigation == 'object') {
      var n = !1,
        u = null;
      return (
        navigation.addEventListener('navigate', e),
        navigation.addEventListener('navigatesuccess', t),
        navigation.addEventListener('navigateerror', t),
        setTimeout(l, 100),
        function () {
          ((n = !0),
            navigation.removeEventListener('navigate', e),
            navigation.removeEventListener('navigatesuccess', t),
            navigation.removeEventListener('navigateerror', t),
            u !== null && (u(), (u = null)));
        }
      );
    }
  }
  function ho(e) {
    this._internalRoot = e;
  }
  ((Ns.prototype.render = ho.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      var l = t.current,
        n = Mt();
      Um(l, n, e, t, null, null);
    }),
    (Ns.prototype.unmount = ho.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Um(e.current, 2, null, e, null, null), os(), (t[ya] = null));
        }
      }));
  function Ns(e) {
    this._internalRoot = e;
  }
  Ns.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = lc();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Vl.length && t !== 0 && t < Vl[l].priority; l++);
      (Vl.splice(l, 0, e), l === 0 && Qm(e));
    }
  };
  var Km = r.version;
  if (Km !== '19.2.4') throw Error(i(527, Km, '19.2.4'));
  Z.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function' ?
          Error(i(188))
        : ((e = Object.keys(e).join(',')), Error(i(268, e)));
    return (
      (e = p(t)),
      (e = e !== null ? b(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Lg = {
    bundleType: 0,
    version: '19.2.4',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: G,
    reconcilerVersion: '19.2.4',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Os = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Os.isDisabled && Os.supportsFiber)
      try {
        ((un = Os.inject(Lg)), (yt = Os));
      } catch {}
  }
  return (
    (ti.createRoot = function (e, t) {
      if (!c(e)) throw Error(i(299));
      var l = !1,
        n = '',
        u = td,
        o = ld,
        m = ad;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (o = t.onCaughtError),
          t.onRecoverableError !== void 0 && (m = t.onRecoverableError)),
        (t = Bm(e, 1, !1, null, null, l, n, null, u, o, m, km)),
        (e[ya] = t.current),
        Ku(e),
        new ho(t)
      );
    }),
    (ti.hydrateRoot = function (e, t, l) {
      if (!c(e)) throw Error(i(299));
      var n = !1,
        u = '',
        o = td,
        m = ld,
        _ = ad,
        E = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (n = !0),
          l.identifierPrefix !== void 0 && (u = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (o = l.onUncaughtError),
          l.onCaughtError !== void 0 && (m = l.onCaughtError),
          l.onRecoverableError !== void 0 && (_ = l.onRecoverableError),
          l.formState !== void 0 && (E = l.formState)),
        (t = Bm(e, 1, !0, t, l ?? null, n, u, E, o, m, _, km)),
        (t.context = Hm(null)),
        (l = t.current),
        (n = Mt()),
        (n = ar(n)),
        (u = Al(n)),
        (u.callback = null),
        zl(l, u, n),
        (l = n),
        (t.current.lanes = l),
        cn(t, l),
        kt(t),
        (e[ya] = t.current),
        Ku(e),
        new Ns(t)
      );
    }),
    (ti.version = '19.2.4'),
    ti
  );
}
var nh;
function Qg() {
  if (nh) return vo.exports;
  nh = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return (a(), (vo.exports = Xg()), vo.exports);
}
var Zg = Qg(),
  N = Ho();
const ke = bh(N);
var ih = 'popstate';
function $g(a = {}) {
  function r(c, f) {
    let {
      pathname: h = '/',
      search: y = '',
      hash: d = '',
    } = ga(c.location.hash.substring(1));
    return (
      !h.startsWith('/') && !h.startsWith('.') && (h = '/' + h),
      Do(
        '',
        { pathname: h, search: y, hash: d },
        (f.state && f.state.usr) || null,
        (f.state && f.state.key) || 'default',
      )
    );
  }
  function s(c, f) {
    let h = c.document.querySelector('base'),
      y = '';
    if (h && h.getAttribute('href')) {
      let d = c.location.href,
        p = d.indexOf('#');
      y = p === -1 ? d : d.slice(0, p);
    }
    return y + '#' + (typeof f == 'string' ? f : ri(f));
  }
  function i(c, f) {
    Xt(
      c.pathname.charAt(0) === '/',
      `relative pathnames are not supported in hash history.push(${JSON.stringify(f)})`,
    );
  }
  return Kg(r, s, i, a);
}
function we(a, r) {
  if (a === !1 || a === null || typeof a > 'u') throw new Error(r);
}
function Xt(a, r) {
  if (!a) {
    typeof console < 'u' && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function kg() {
  return Math.random().toString(36).substring(2, 10);
}
function sh(a, r) {
  return { usr: a.state, key: a.key, idx: r };
}
function Do(a, r, s = null, i) {
  return {
    pathname: typeof a == 'string' ? a : a.pathname,
    search: '',
    hash: '',
    ...(typeof r == 'string' ? ga(r) : r),
    state: s,
    key: (r && r.key) || i || kg(),
  };
}
function ri({ pathname: a = '/', search: r = '', hash: s = '' }) {
  return (
    r && r !== '?' && (a += r.charAt(0) === '?' ? r : '?' + r),
    s && s !== '#' && (a += s.charAt(0) === '#' ? s : '#' + s),
    a
  );
}
function ga(a) {
  let r = {};
  if (a) {
    let s = a.indexOf('#');
    s >= 0 && ((r.hash = a.substring(s)), (a = a.substring(0, s)));
    let i = a.indexOf('?');
    (i >= 0 && ((r.search = a.substring(i)), (a = a.substring(0, i))),
      a && (r.pathname = a));
  }
  return r;
}
function Kg(a, r, s, i = {}) {
  let { window: c = document.defaultView, v5Compat: f = !1 } = i,
    h = c.history,
    y = 'POP',
    d = null,
    p = b();
  p == null && ((p = 0), h.replaceState({ ...h.state, idx: p }, ''));
  function b() {
    return (h.state || { idx: null }).idx;
  }
  function v() {
    y = 'POP';
    let z = b(),
      x = z == null ? null : z - p;
    ((p = z), d && d({ action: y, location: D.location, delta: x }));
  }
  function C(z, x) {
    y = 'PUSH';
    let T = Do(D.location, z, x);
    (s && s(T, z), (p = b() + 1));
    let O = sh(T, p),
      V = D.createHref(T);
    try {
      h.pushState(O, '', V);
    } catch (k) {
      if (k instanceof DOMException && k.name === 'DataCloneError') throw k;
      c.location.assign(V);
    }
    f && d && d({ action: y, location: D.location, delta: 1 });
  }
  function S(z, x) {
    y = 'REPLACE';
    let T = Do(D.location, z, x);
    (s && s(T, z), (p = b()));
    let O = sh(T, p),
      V = D.createHref(T);
    (h.replaceState(O, '', V),
      f && d && d({ action: y, location: D.location, delta: 0 }));
  }
  function j(z) {
    return Jg(z);
  }
  let D = {
    get action() {
      return y;
    },
    get location() {
      return a(c, h);
    },
    listen(z) {
      if (d) throw new Error('A history only accepts one active listener');
      return (
        c.addEventListener(ih, v),
        (d = z),
        () => {
          (c.removeEventListener(ih, v), (d = null));
        }
      );
    },
    createHref(z) {
      return r(c, z);
    },
    createURL: j,
    encodeLocation(z) {
      let x = j(z);
      return { pathname: x.pathname, search: x.search, hash: x.hash };
    },
    push: C,
    replace: S,
    go(z) {
      return h.go(z);
    },
  };
  return D;
}
function Jg(a, r = !1) {
  let s = 'http://localhost';
  (typeof window < 'u' &&
    (s =
      window.location.origin !== 'null' ?
        window.location.origin
      : window.location.href),
    we(s, 'No window.location.(origin|href) available to create URL'));
  let i = typeof a == 'string' ? a : ri(a);
  return (
    (i = i.replace(/ $/, '%20')),
    !r && i.startsWith('//') && (i = s + i),
    new URL(i, s)
  );
}
function Sh(a, r, s = '/') {
  return Fg(a, r, s, !1);
}
function Fg(a, r, s, i) {
  let c = typeof r == 'string' ? ga(r) : r,
    f = yl(c.pathname || '/', s);
  if (f == null) return null;
  let h = xh(a);
  Pg(h);
  let y = null;
  for (let d = 0; y == null && d < h.length; ++d) {
    let p = u0(f);
    y = s0(h[d], p, i);
  }
  return y;
}
function xh(a, r = [], s = [], i = '', c = !1) {
  let f = (h, y, d = c, p) => {
    let b = {
      relativePath: p === void 0 ? h.path || '' : p,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: y,
      route: h,
    };
    if (b.relativePath.startsWith('/')) {
      if (!b.relativePath.startsWith(i) && d) return;
      (we(
        b.relativePath.startsWith(i),
        `Absolute route path "${b.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (b.relativePath = b.relativePath.slice(i.length)));
    }
    let v = gl([i, b.relativePath]),
      C = s.concat(b);
    (h.children &&
      h.children.length > 0 &&
      (we(
        h.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${v}".`,
      ),
      xh(h.children, r, C, v, d)),
      !(h.path == null && !h.index) &&
        r.push({ path: v, score: n0(v, h.index), routesMeta: C }));
  };
  return (
    a.forEach((h, y) => {
      if (h.path === '' || !h.path?.includes('?')) f(h, y);
      else for (let d of Th(h.path)) f(h, y, !0, d);
    }),
    r
  );
}
function Th(a) {
  let r = a.split('/');
  if (r.length === 0) return [];
  let [s, ...i] = r,
    c = s.endsWith('?'),
    f = s.replace(/\?$/, '');
  if (i.length === 0) return c ? [f, ''] : [f];
  let h = Th(i.join('/')),
    y = [];
  return (
    y.push(...h.map((d) => (d === '' ? f : [f, d].join('/')))),
    c && y.push(...h),
    y.map((d) => (a.startsWith('/') && d === '' ? '/' : d))
  );
}
function Pg(a) {
  a.sort((r, s) =>
    r.score !== s.score ?
      s.score - r.score
    : i0(
        r.routesMeta.map((i) => i.childrenIndex),
        s.routesMeta.map((i) => i.childrenIndex),
      ),
  );
}
var Wg = /^:[\w-]+$/,
  Ig = 3,
  e0 = 2,
  t0 = 1,
  l0 = 10,
  a0 = -2,
  rh = (a) => a === '*';
function n0(a, r) {
  let s = a.split('/'),
    i = s.length;
  return (
    s.some(rh) && (i += a0),
    r && (i += e0),
    s
      .filter((c) => !rh(c))
      .reduce(
        (c, f) =>
          c +
          (Wg.test(f) ? Ig
          : f === '' ? t0
          : l0),
        i,
      )
  );
}
function i0(a, r) {
  return a.length === r.length && a.slice(0, -1).every((i, c) => i === r[c]) ?
      a[a.length - 1] - r[r.length - 1]
    : 0;
}
function s0(a, r, s = !1) {
  let { routesMeta: i } = a,
    c = {},
    f = '/',
    h = [];
  for (let y = 0; y < i.length; ++y) {
    let d = i[y],
      p = y === i.length - 1,
      b = f === '/' ? r : r.slice(f.length) || '/',
      v = Us(
        { path: d.relativePath, caseSensitive: d.caseSensitive, end: p },
        b,
      ),
      C = d.route;
    if (
      (!v &&
        p &&
        s &&
        !i[i.length - 1].route.index &&
        (v = Us(
          { path: d.relativePath, caseSensitive: d.caseSensitive, end: !1 },
          b,
        )),
      !v)
    )
      return null;
    (Object.assign(c, v.params),
      h.push({
        params: c,
        pathname: gl([f, v.pathname]),
        pathnameBase: d0(gl([f, v.pathnameBase])),
        route: C,
      }),
      v.pathnameBase !== '/' && (f = gl([f, v.pathnameBase])));
  }
  return h;
}
function Us(a, r) {
  typeof a == 'string' && (a = { path: a, caseSensitive: !1, end: !0 });
  let [s, i] = r0(a.path, a.caseSensitive, a.end),
    c = r.match(s);
  if (!c) return null;
  let f = c[0],
    h = f.replace(/(.)\/+$/, '$1'),
    y = c.slice(1);
  return {
    params: i.reduce((p, { paramName: b, isOptional: v }, C) => {
      if (b === '*') {
        let j = y[C] || '';
        h = f.slice(0, f.length - j.length).replace(/(.)\/+$/, '$1');
      }
      const S = y[C];
      return (
        v && !S ? (p[b] = void 0) : (p[b] = (S || '').replace(/%2F/g, '/')),
        p
      );
    }, {}),
    pathname: f,
    pathnameBase: h,
    pattern: a,
  };
}
function r0(a, r = !1, s = !0) {
  Xt(
    a === '*' || !a.endsWith('*') || a.endsWith('/*'),
    `Route path "${a}" will be treated as if it were "${a.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/, '/*')}".`,
  );
  let i = [],
    c =
      '^' +
      a
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (h, y, d) => (
            i.push({ paramName: y, isOptional: d != null }),
            d ? '/?([^\\/]+)?' : '/([^\\/]+)'
          ),
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2');
  return (
    a.endsWith('*') ?
      (i.push({ paramName: '*' }),
      (c += a === '*' || a === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
    : s ? (c += '\\/*$')
    : a !== '' && a !== '/' && (c += '(?:(?=\\/|$))'),
    [new RegExp(c, r ? void 0 : 'i'), i]
  );
}
function u0(a) {
  try {
    return a
      .split('/')
      .map((r) => decodeURIComponent(r).replace(/\//g, '%2F'))
      .join('/');
  } catch (r) {
    return (
      Xt(
        !1,
        `The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`,
      ),
      a
    );
  }
}
function yl(a, r) {
  if (r === '/') return a;
  if (!a.toLowerCase().startsWith(r.toLowerCase())) return null;
  let s = r.endsWith('/') ? r.length - 1 : r.length,
    i = a.charAt(s);
  return i && i !== '/' ? null : a.slice(s) || '/';
}
var o0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function c0(a, r = '/') {
  let {
      pathname: s,
      search: i = '',
      hash: c = '',
    } = typeof a == 'string' ? ga(a) : a,
    f;
  return (
    s ?
      ((s = s.replace(/\/\/+/g, '/')),
      s.startsWith('/') ? (f = uh(s.substring(1), '/')) : (f = uh(s, r)))
    : (f = r),
    { pathname: f, search: m0(i), hash: h0(c) }
  );
}
function uh(a, r) {
  let s = r.replace(/\/+$/, '').split('/');
  return (
    a.split('/').forEach((c) => {
      c === '..' ? s.length > 1 && s.pop() : c !== '.' && s.push(c);
    }),
    s.length > 1 ? s.join('/') : '/'
  );
}
function So(a, r, s, i) {
  return `Cannot include a '${a}' character in a manually specified \`to.${r}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function f0(a) {
  return a.filter(
    (r, s) => s === 0 || (r.route.path && r.route.path.length > 0),
  );
}
function Eh(a) {
  let r = f0(a);
  return r.map((s, i) => (i === r.length - 1 ? s.pathname : s.pathnameBase));
}
function Ch(a, r, s, i = !1) {
  let c;
  typeof a == 'string' ?
    (c = ga(a))
  : ((c = { ...a }),
    we(
      !c.pathname || !c.pathname.includes('?'),
      So('?', 'pathname', 'search', c),
    ),
    we(
      !c.pathname || !c.pathname.includes('#'),
      So('#', 'pathname', 'hash', c),
    ),
    we(!c.search || !c.search.includes('#'), So('#', 'search', 'hash', c)));
  let f = a === '' || c.pathname === '',
    h = f ? '/' : c.pathname,
    y;
  if (h == null) y = s;
  else {
    let v = r.length - 1;
    if (!i && h.startsWith('..')) {
      let C = h.split('/');
      for (; C[0] === '..'; ) (C.shift(), (v -= 1));
      c.pathname = C.join('/');
    }
    y = v >= 0 ? r[v] : '/';
  }
  let d = c0(c, y),
    p = h && h !== '/' && h.endsWith('/'),
    b = (f || h === '.') && s.endsWith('/');
  return (!d.pathname.endsWith('/') && (p || b) && (d.pathname += '/'), d);
}
var gl = (a) => a.join('/').replace(/\/\/+/g, '/'),
  d0 = (a) => a.replace(/\/+$/, '').replace(/^\/*/, '/'),
  m0 = (a) =>
    !a || a === '?' ? ''
    : a.startsWith('?') ? a
    : '?' + a,
  h0 = (a) =>
    !a || a === '#' ? ''
    : a.startsWith('#') ? a
    : '#' + a,
  p0 = class {
    constructor(a, r, s, i = !1) {
      ((this.status = a),
        (this.statusText = r || ''),
        (this.internal = i),
        s instanceof Error ?
          ((this.data = s.toString()), (this.error = s))
        : (this.data = s));
    }
  };
function v0(a) {
  return (
    a != null &&
    typeof a.status == 'number' &&
    typeof a.statusText == 'string' &&
    typeof a.internal == 'boolean' &&
    'data' in a
  );
}
function g0(a) {
  return (
    a
      .map((r) => r.route.path)
      .filter(Boolean)
      .join('/')
      .replace(/\/\/*/g, '/') || '/'
  );
}
var Mh =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
function Ah(a, r) {
  let s = a;
  if (typeof s != 'string' || !o0.test(s))
    return { absoluteURL: void 0, isExternal: !1, to: s };
  let i = s,
    c = !1;
  if (Mh)
    try {
      let f = new URL(window.location.href),
        h = s.startsWith('//') ? new URL(f.protocol + s) : new URL(s),
        y = yl(h.pathname, r);
      h.origin === f.origin && y != null ?
        (s = y + h.search + h.hash)
      : (c = !0);
    } catch {
      Xt(
        !1,
        `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: i, isExternal: c, to: s };
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var zh = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(zh);
var y0 = ['GET', ...zh];
new Set(y0);
var sn = N.createContext(null);
sn.displayName = 'DataRouter';
var Qs = N.createContext(null);
Qs.displayName = 'DataRouterState';
var _0 = N.createContext(!1),
  Nh = N.createContext({ isTransitioning: !1 });
Nh.displayName = 'ViewTransition';
var b0 = N.createContext(new Map());
b0.displayName = 'Fetchers';
var S0 = N.createContext(null);
S0.displayName = 'Await';
var Gt = N.createContext(null);
Gt.displayName = 'Navigation';
var oi = N.createContext(null);
oi.displayName = 'Location';
var Ft = N.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Ft.displayName = 'Route';
var Uo = N.createContext(null);
Uo.displayName = 'RouteError';
var Oh = 'REACT_ROUTER_ERROR',
  x0 = 'REDIRECT',
  T0 = 'ROUTE_ERROR_RESPONSE';
function E0(a) {
  if (a.startsWith(`${Oh}:${x0}:{`))
    try {
      let r = JSON.parse(a.slice(28));
      if (
        typeof r == 'object' &&
        r &&
        typeof r.status == 'number' &&
        typeof r.statusText == 'string' &&
        typeof r.location == 'string' &&
        typeof r.reloadDocument == 'boolean' &&
        typeof r.replace == 'boolean'
      )
        return r;
    } catch {}
}
function C0(a) {
  if (a.startsWith(`${Oh}:${T0}:{`))
    try {
      let r = JSON.parse(a.slice(40));
      if (
        typeof r == 'object' &&
        r &&
        typeof r.status == 'number' &&
        typeof r.statusText == 'string'
      )
        return new p0(r.status, r.statusText, r.data);
    } catch {}
}
function M0(a, { relative: r } = {}) {
  we(
    ci(),
    'useHref() may be used only in the context of a <Router> component.',
  );
  let { basename: s, navigator: i } = N.useContext(Gt),
    { hash: c, pathname: f, search: h } = fi(a, { relative: r }),
    y = f;
  return (
    s !== '/' && (y = f === '/' ? s : gl([s, f])),
    i.createHref({ pathname: y, search: h, hash: c })
  );
}
function ci() {
  return N.useContext(oi) != null;
}
function $l() {
  return (
    we(
      ci(),
      'useLocation() may be used only in the context of a <Router> component.',
    ),
    N.useContext(oi).location
  );
}
var jh =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Dh(a) {
  N.useContext(Gt).static || N.useLayoutEffect(a);
}
function Rh() {
  let { isDataRoute: a } = N.useContext(Ft);
  return a ? G0() : A0();
}
function A0() {
  we(
    ci(),
    'useNavigate() may be used only in the context of a <Router> component.',
  );
  let a = N.useContext(sn),
    { basename: r, navigator: s } = N.useContext(Gt),
    { matches: i } = N.useContext(Ft),
    { pathname: c } = $l(),
    f = JSON.stringify(Eh(i)),
    h = N.useRef(!1);
  return (
    Dh(() => {
      h.current = !0;
    }),
    N.useCallback(
      (d, p = {}) => {
        if ((Xt(h.current, jh), !h.current)) return;
        if (typeof d == 'number') {
          s.go(d);
          return;
        }
        let b = Ch(d, JSON.parse(f), c, p.relative === 'path');
        (a == null &&
          r !== '/' &&
          (b.pathname = b.pathname === '/' ? r : gl([r, b.pathname])),
          (p.replace ? s.replace : s.push)(b, p.state, p));
      },
      [r, s, f, c, a],
    )
  );
}
N.createContext(null);
function Go() {
  let { matches: a } = N.useContext(Ft),
    r = a[a.length - 1];
  return r ? r.params : {};
}
function fi(a, { relative: r } = {}) {
  let { matches: s } = N.useContext(Ft),
    { pathname: i } = $l(),
    c = JSON.stringify(Eh(s));
  return N.useMemo(() => Ch(a, JSON.parse(c), i, r === 'path'), [a, c, i, r]);
}
function z0(a, r) {
  return Lh(a, r);
}
function Lh(a, r, s, i, c) {
  we(
    ci(),
    'useRoutes() may be used only in the context of a <Router> component.',
  );
  let { navigator: f } = N.useContext(Gt),
    { matches: h } = N.useContext(Ft),
    y = h[h.length - 1],
    d = y ? y.params : {},
    p = y ? y.pathname : '/',
    b = y ? y.pathnameBase : '/',
    v = y && y.route;
  {
    let T = (v && v.path) || '';
    Bh(
      p,
      !v || T.endsWith('*') || T.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T === '/' ? '*' : `${T}/*`}">.`,
    );
  }
  let C = $l(),
    S;
  if (r) {
    let T = typeof r == 'string' ? ga(r) : r;
    (we(
      b === '/' || T.pathname?.startsWith(b),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${T.pathname}" was given in the \`location\` prop.`,
    ),
      (S = T));
  } else S = C;
  let j = S.pathname || '/',
    D = j;
  if (b !== '/') {
    let T = b.replace(/^\//, '').split('/');
    D = '/' + j.replace(/^\//, '').split('/').slice(T.length).join('/');
  }
  let z = Sh(a, { pathname: D });
  (Xt(
    v || z != null,
    `No routes matched location "${S.pathname}${S.search}${S.hash}" `,
  ),
    Xt(
      z == null ||
        z[z.length - 1].route.element !== void 0 ||
        z[z.length - 1].route.Component !== void 0 ||
        z[z.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let x = R0(
    z &&
      z.map((T) =>
        Object.assign({}, T, {
          params: Object.assign({}, d, T.params),
          pathname: gl([
            b,
            f.encodeLocation ?
              f.encodeLocation(
                T.pathname.replace(/\?/g, '%3F').replace(/#/g, '%23'),
              ).pathname
            : T.pathname,
          ]),
          pathnameBase:
            T.pathnameBase === '/' ?
              b
            : gl([
                b,
                f.encodeLocation ?
                  f.encodeLocation(
                    T.pathnameBase.replace(/\?/g, '%3F').replace(/#/g, '%23'),
                  ).pathname
                : T.pathnameBase,
              ]),
        }),
      ),
    h,
    s,
    i,
    c,
  );
  return r && x ?
      N.createElement(
        oi.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              ...S,
            },
            navigationType: 'POP',
          },
        },
        x,
      )
    : x;
}
function N0() {
  let a = U0(),
    r =
      v0(a) ? `${a.status} ${a.statusText}`
      : a instanceof Error ? a.message
      : JSON.stringify(a),
    s = a instanceof Error ? a.stack : null,
    i = 'rgba(200,200,200, 0.5)',
    c = { padding: '0.5rem', backgroundColor: i },
    f = { padding: '2px 4px', backgroundColor: i },
    h = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', a),
    (h = N.createElement(
      N.Fragment,
      null,
      N.createElement('p', null, '💿 Hey developer 👋'),
      N.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        N.createElement('code', { style: f }, 'ErrorBoundary'),
        ' or',
        ' ',
        N.createElement('code', { style: f }, 'errorElement'),
        ' prop on your route.',
      ),
    )),
    N.createElement(
      N.Fragment,
      null,
      N.createElement('h2', null, 'Unexpected Application Error!'),
      N.createElement('h3', { style: { fontStyle: 'italic' } }, r),
      s ? N.createElement('pre', { style: c }, s) : null,
      h,
    )
  );
}
var O0 = N.createElement(N0, null),
  wh = class extends N.Component {
    constructor(a) {
      (super(a),
        (this.state = {
          location: a.location,
          revalidation: a.revalidation,
          error: a.error,
        }));
    }
    static getDerivedStateFromError(a) {
      return { error: a };
    }
    static getDerivedStateFromProps(a, r) {
      return (
          r.location !== a.location ||
            (r.revalidation !== 'idle' && a.revalidation === 'idle')
        ) ?
          { error: a.error, location: a.location, revalidation: a.revalidation }
        : {
            error: a.error !== void 0 ? a.error : r.error,
            location: r.location,
            revalidation: a.revalidation || r.revalidation,
          };
    }
    componentDidCatch(a, r) {
      this.props.onError ?
        this.props.onError(a, r)
      : console.error(
          'React Router caught the following error during render',
          a,
        );
    }
    render() {
      let a = this.state.error;
      if (
        this.context &&
        typeof a == 'object' &&
        a &&
        'digest' in a &&
        typeof a.digest == 'string'
      ) {
        const s = C0(a.digest);
        s && (a = s);
      }
      let r =
        a !== void 0 ?
          N.createElement(
            Ft.Provider,
            { value: this.props.routeContext },
            N.createElement(Uo.Provider, {
              value: a,
              children: this.props.component,
            }),
          )
        : this.props.children;
      return this.context ? N.createElement(j0, { error: a }, r) : r;
    }
  };
wh.contextType = _0;
var xo = new WeakMap();
function j0({ children: a, error: r }) {
  let { basename: s } = N.useContext(Gt);
  if (
    typeof r == 'object' &&
    r &&
    'digest' in r &&
    typeof r.digest == 'string'
  ) {
    let i = E0(r.digest);
    if (i) {
      let c = xo.get(r);
      if (c) throw c;
      let f = Ah(i.location, s);
      if (Mh && !xo.get(r))
        if (f.isExternal || i.reloadDocument)
          window.location.href = f.absoluteURL || f.to;
        else {
          const h = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(f.to, {
              replace: i.replace,
            }),
          );
          throw (xo.set(r, h), h);
        }
      return N.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${f.absoluteURL || f.to}`,
      });
    }
  }
  return a;
}
function D0({ routeContext: a, match: r, children: s }) {
  let i = N.useContext(sn);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = r.route.id),
    N.createElement(Ft.Provider, { value: a }, s)
  );
}
function R0(a, r = [], s = null, i = null, c = null) {
  if (a == null) {
    if (!s) return null;
    if (s.errors) a = s.matches;
    else if (r.length === 0 && !s.initialized && s.matches.length > 0)
      a = s.matches;
    else return null;
  }
  let f = a,
    h = s?.errors;
  if (h != null) {
    let b = f.findIndex((v) => v.route.id && h?.[v.route.id] !== void 0);
    (we(
      b >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(h).join(',')}`,
    ),
      (f = f.slice(0, Math.min(f.length, b + 1))));
  }
  let y = !1,
    d = -1;
  if (s)
    for (let b = 0; b < f.length; b++) {
      let v = f[b];
      if (
        ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (d = b),
        v.route.id)
      ) {
        let { loaderData: C, errors: S } = s,
          j =
            v.route.loader &&
            !C.hasOwnProperty(v.route.id) &&
            (!S || S[v.route.id] === void 0);
        if (v.route.lazy || j) {
          ((y = !0), d >= 0 ? (f = f.slice(0, d + 1)) : (f = [f[0]]));
          break;
        }
      }
    }
  let p =
    s && i ?
      (b, v) => {
        i(b, {
          location: s.location,
          params: s.matches?.[0]?.params ?? {},
          unstable_pattern: g0(s.matches),
          errorInfo: v,
        });
      }
    : void 0;
  return f.reduceRight((b, v, C) => {
    let S,
      j = !1,
      D = null,
      z = null;
    s &&
      ((S = h && v.route.id ? h[v.route.id] : void 0),
      (D = v.route.errorElement || O0),
      y &&
        (d < 0 && C === 0 ?
          (Bh(
            'route-fallback',
            !1,
            'No `HydrateFallback` element provided to render during initial hydration',
          ),
          (j = !0),
          (z = null))
        : d === C && ((j = !0), (z = v.route.hydrateFallbackElement || null))));
    let x = r.concat(f.slice(0, C + 1)),
      T = () => {
        let O;
        return (
          S ? (O = D)
          : j ? (O = z)
          : v.route.Component ? (O = N.createElement(v.route.Component, null))
          : v.route.element ? (O = v.route.element)
          : (O = b),
          N.createElement(D0, {
            match: v,
            routeContext: { outlet: b, matches: x, isDataRoute: s != null },
            children: O,
          })
        );
      };
    return s && (v.route.ErrorBoundary || v.route.errorElement || C === 0) ?
        N.createElement(wh, {
          location: s.location,
          revalidation: s.revalidation,
          component: D,
          error: S,
          children: T(),
          routeContext: { outlet: null, matches: x, isDataRoute: !0 },
          onError: p,
        })
      : T();
  }, null);
}
function qo(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function L0(a) {
  let r = N.useContext(sn);
  return (we(r, qo(a)), r);
}
function w0(a) {
  let r = N.useContext(Qs);
  return (we(r, qo(a)), r);
}
function B0(a) {
  let r = N.useContext(Ft);
  return (we(r, qo(a)), r);
}
function Yo(a) {
  let r = B0(a),
    s = r.matches[r.matches.length - 1];
  return (
    we(
      s.route.id,
      `${a} can only be used on routes that contain a unique "id"`,
    ),
    s.route.id
  );
}
function H0() {
  return Yo('useRouteId');
}
function U0() {
  let a = N.useContext(Uo),
    r = w0('useRouteError'),
    s = Yo('useRouteError');
  return a !== void 0 ? a : r.errors?.[s];
}
function G0() {
  let { router: a } = L0('useNavigate'),
    r = Yo('useNavigate'),
    s = N.useRef(!1);
  return (
    Dh(() => {
      s.current = !0;
    }),
    N.useCallback(
      async (c, f = {}) => {
        (Xt(s.current, jh),
          s.current &&
            (typeof c == 'number' ?
              await a.navigate(c)
            : await a.navigate(c, { fromRouteId: r, ...f })));
      },
      [a, r],
    )
  );
}
var oh = {};
function Bh(a, r, s) {
  !r && !oh[a] && ((oh[a] = !0), Xt(!1, s));
}
N.memo(q0);
function q0({ routes: a, future: r, state: s, onError: i }) {
  return Lh(a, void 0, s, i, r);
}
function pl(a) {
  we(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.',
  );
}
function Y0({
  basename: a = '/',
  children: r = null,
  location: s,
  navigationType: i = 'POP',
  navigator: c,
  static: f = !1,
  unstable_useTransitions: h,
}) {
  we(
    !ci(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.',
  );
  let y = a.replace(/^\/*/, '/'),
    d = N.useMemo(
      () => ({
        basename: y,
        navigator: c,
        static: f,
        unstable_useTransitions: h,
        future: {},
      }),
      [y, c, f, h],
    );
  typeof s == 'string' && (s = ga(s));
  let {
      pathname: p = '/',
      search: b = '',
      hash: v = '',
      state: C = null,
      key: S = 'default',
    } = s,
    j = N.useMemo(() => {
      let D = yl(p, y);
      return D == null ? null : (
          {
            location: { pathname: D, search: b, hash: v, state: C, key: S },
            navigationType: i,
          }
        );
    }, [y, p, b, v, C, S, i]);
  return (
    Xt(
      j != null,
      `<Router basename="${y}"> is not able to match the URL "${p}${b}${v}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    j == null ? null : (
      N.createElement(
        Gt.Provider,
        { value: d },
        N.createElement(oi.Provider, { children: r, value: j }),
      )
    )
  );
}
function V0({ children: a, location: r }) {
  return z0(Ro(a), r);
}
function Ro(a, r = []) {
  let s = [];
  return (
    N.Children.forEach(a, (i, c) => {
      if (!N.isValidElement(i)) return;
      let f = [...r, c];
      if (i.type === N.Fragment) {
        s.push.apply(s, Ro(i.props.children, f));
        return;
      }
      (we(
        i.type === pl,
        `[${typeof i.type == 'string' ? i.type : i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        we(
          !i.props.index || !i.props.children,
          'An index route cannot have child routes.',
        ));
      let h = {
        id: i.props.id || f.join('-'),
        caseSensitive: i.props.caseSensitive,
        element: i.props.element,
        Component: i.props.Component,
        index: i.props.index,
        path: i.props.path,
        middleware: i.props.middleware,
        loader: i.props.loader,
        action: i.props.action,
        hydrateFallbackElement: i.props.hydrateFallbackElement,
        HydrateFallback: i.props.HydrateFallback,
        errorElement: i.props.errorElement,
        ErrorBoundary: i.props.ErrorBoundary,
        hasErrorBoundary:
          i.props.hasErrorBoundary === !0 ||
          i.props.ErrorBoundary != null ||
          i.props.errorElement != null,
        shouldRevalidate: i.props.shouldRevalidate,
        handle: i.props.handle,
        lazy: i.props.lazy,
      };
      (i.props.children && (h.children = Ro(i.props.children, f)), s.push(h));
    }),
    s
  );
}
var Ls = 'get',
  ws = 'application/x-www-form-urlencoded';
function Zs(a) {
  return typeof HTMLElement < 'u' && a instanceof HTMLElement;
}
function X0(a) {
  return Zs(a) && a.tagName.toLowerCase() === 'button';
}
function Q0(a) {
  return Zs(a) && a.tagName.toLowerCase() === 'form';
}
function Z0(a) {
  return Zs(a) && a.tagName.toLowerCase() === 'input';
}
function $0(a) {
  return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
}
function k0(a, r) {
  return a.button === 0 && (!r || r === '_self') && !$0(a);
}
var js = null;
function K0() {
  if (js === null)
    try {
      (new FormData(document.createElement('form'), 0), (js = !1));
    } catch {
      js = !0;
    }
  return js;
}
var J0 = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function To(a) {
  return a != null && !J0.has(a) ?
      (Xt(
        !1,
        `"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ws}"`,
      ),
      null)
    : a;
}
function F0(a, r) {
  let s, i, c, f, h;
  if (Q0(a)) {
    let y = a.getAttribute('action');
    ((i = y ? yl(y, r) : null),
      (s = a.getAttribute('method') || Ls),
      (c = To(a.getAttribute('enctype')) || ws),
      (f = new FormData(a)));
  } else if (X0(a) || (Z0(a) && (a.type === 'submit' || a.type === 'image'))) {
    let y = a.form;
    if (y == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let d = a.getAttribute('formaction') || y.getAttribute('action');
    if (
      ((i = d ? yl(d, r) : null),
      (s = a.getAttribute('formmethod') || y.getAttribute('method') || Ls),
      (c =
        To(a.getAttribute('formenctype')) ||
        To(y.getAttribute('enctype')) ||
        ws),
      (f = new FormData(y, a)),
      !K0())
    ) {
      let { name: p, type: b, value: v } = a;
      if (b === 'image') {
        let C = p ? `${p}.` : '';
        (f.append(`${C}x`, '0'), f.append(`${C}y`, '0'));
      } else p && f.append(p, v);
    }
  } else {
    if (Zs(a))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((s = Ls), (i = null), (c = ws), (h = a));
  }
  return (
    f && c === 'text/plain' && ((h = f), (f = void 0)),
    { action: i, method: s.toLowerCase(), encType: c, formData: f, body: h }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function Vo(a, r) {
  if (a === !1 || a === null || typeof a > 'u') throw new Error(r);
}
function P0(a, r, s, i) {
  let c =
    typeof a == 'string' ?
      new URL(
        a,
        typeof window > 'u' ? 'server://singlefetch/' : window.location.origin,
      )
    : a;
  return (
    s ?
      c.pathname.endsWith('/') ?
        (c.pathname = `${c.pathname}_.${i}`)
      : (c.pathname = `${c.pathname}.${i}`)
    : c.pathname === '/' ? (c.pathname = `_root.${i}`)
    : r && yl(c.pathname, r) === '/' ?
      (c.pathname = `${r.replace(/\/$/, '')}/_root.${i}`)
    : (c.pathname = `${c.pathname.replace(/\/$/, '')}.${i}`),
    c
  );
}
async function W0(a, r) {
  if (a.id in r) return r[a.id];
  try {
    let s = await import(a.module);
    return ((r[a.id] = s), s);
  } catch (s) {
    return (
      console.error(
        `Error loading route module \`${a.module}\`, reloading page...`,
      ),
      console.error(s),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function I0(a) {
  return (
    a == null ? !1
    : a.href == null ?
      a.rel === 'preload' &&
      typeof a.imageSrcSet == 'string' &&
      typeof a.imageSizes == 'string'
    : typeof a.rel == 'string' && typeof a.href == 'string'
  );
}
async function ey(a, r, s) {
  let i = await Promise.all(
    a.map(async (c) => {
      let f = r.routes[c.route.id];
      if (f) {
        let h = await W0(f, s);
        return h.links ? h.links() : [];
      }
      return [];
    }),
  );
  return ny(
    i
      .flat(1)
      .filter(I0)
      .filter((c) => c.rel === 'stylesheet' || c.rel === 'preload')
      .map((c) =>
        c.rel === 'stylesheet' ?
          { ...c, rel: 'prefetch', as: 'style' }
        : { ...c, rel: 'prefetch' },
      ),
  );
}
function ch(a, r, s, i, c, f) {
  let h = (d, p) => (s[p] ? d.route.id !== s[p].route.id : !0),
    y = (d, p) =>
      s[p].pathname !== d.pathname ||
      (s[p].route.path?.endsWith('*') && s[p].params['*'] !== d.params['*']);
  return (
    f === 'assets' ? r.filter((d, p) => h(d, p) || y(d, p))
    : f === 'data' ?
      r.filter((d, p) => {
        let b = i.routes[d.route.id];
        if (!b || !b.hasLoader) return !1;
        if (h(d, p) || y(d, p)) return !0;
        if (d.route.shouldRevalidate) {
          let v = d.route.shouldRevalidate({
            currentUrl: new URL(c.pathname + c.search + c.hash, window.origin),
            currentParams: s[0]?.params || {},
            nextUrl: new URL(a, window.origin),
            nextParams: d.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof v == 'boolean') return v;
        }
        return !0;
      })
    : []
  );
}
function ty(a, r, { includeHydrateFallback: s } = {}) {
  return ly(
    a
      .map((i) => {
        let c = r.routes[i.route.id];
        if (!c) return [];
        let f = [c.module];
        return (
          c.clientActionModule && (f = f.concat(c.clientActionModule)),
          c.clientLoaderModule && (f = f.concat(c.clientLoaderModule)),
          s &&
            c.hydrateFallbackModule &&
            (f = f.concat(c.hydrateFallbackModule)),
          c.imports && (f = f.concat(c.imports)),
          f
        );
      })
      .flat(1),
  );
}
function ly(a) {
  return [...new Set(a)];
}
function ay(a) {
  let r = {},
    s = Object.keys(a).sort();
  for (let i of s) r[i] = a[i];
  return r;
}
function ny(a, r) {
  let s = new Set();
  return (
    new Set(r),
    a.reduce((i, c) => {
      let f = JSON.stringify(ay(c));
      return (s.has(f) || (s.add(f), i.push({ key: f, link: c })), i);
    }, [])
  );
}
function Hh() {
  let a = N.useContext(sn);
  return (
    Vo(
      a,
      'You must render this element inside a <DataRouterContext.Provider> element',
    ),
    a
  );
}
function iy() {
  let a = N.useContext(Qs);
  return (
    Vo(
      a,
      'You must render this element inside a <DataRouterStateContext.Provider> element',
    ),
    a
  );
}
var Xo = N.createContext(void 0);
Xo.displayName = 'FrameworkContext';
function Uh() {
  let a = N.useContext(Xo);
  return (
    Vo(a, 'You must render this element inside a <HydratedRouter> element'),
    a
  );
}
function sy(a, r) {
  let s = N.useContext(Xo),
    [i, c] = N.useState(!1),
    [f, h] = N.useState(!1),
    {
      onFocus: y,
      onBlur: d,
      onMouseEnter: p,
      onMouseLeave: b,
      onTouchStart: v,
    } = r,
    C = N.useRef(null);
  (N.useEffect(() => {
    if ((a === 'render' && h(!0), a === 'viewport')) {
      let D = (x) => {
          x.forEach((T) => {
            h(T.isIntersecting);
          });
        },
        z = new IntersectionObserver(D, { threshold: 0.5 });
      return (
        C.current && z.observe(C.current),
        () => {
          z.disconnect();
        }
      );
    }
  }, [a]),
    N.useEffect(() => {
      if (i) {
        let D = setTimeout(() => {
          h(!0);
        }, 100);
        return () => {
          clearTimeout(D);
        };
      }
    }, [i]));
  let S = () => {
      c(!0);
    },
    j = () => {
      (c(!1), h(!1));
    };
  return (
    s ?
      a !== 'intent' ?
        [f, C, {}]
      : [
          f,
          C,
          {
            onFocus: li(y, S),
            onBlur: li(d, j),
            onMouseEnter: li(p, S),
            onMouseLeave: li(b, j),
            onTouchStart: li(v, S),
          },
        ]
    : [!1, C, {}]
  );
}
function li(a, r) {
  return (s) => {
    (a && a(s), s.defaultPrevented || r(s));
  };
}
function ry({ page: a, ...r }) {
  let { router: s } = Hh(),
    i = N.useMemo(() => Sh(s.routes, a, s.basename), [s.routes, a, s.basename]);
  return i ? N.createElement(oy, { page: a, matches: i, ...r }) : null;
}
function uy(a) {
  let { manifest: r, routeModules: s } = Uh(),
    [i, c] = N.useState([]);
  return (
    N.useEffect(() => {
      let f = !1;
      return (
        ey(a, r, s).then((h) => {
          f || c(h);
        }),
        () => {
          f = !0;
        }
      );
    }, [a, r, s]),
    i
  );
}
function oy({ page: a, matches: r, ...s }) {
  let i = $l(),
    { future: c, manifest: f, routeModules: h } = Uh(),
    { basename: y } = Hh(),
    { loaderData: d, matches: p } = iy(),
    b = N.useMemo(() => ch(a, r, p, f, i, 'data'), [a, r, p, f, i]),
    v = N.useMemo(() => ch(a, r, p, f, i, 'assets'), [a, r, p, f, i]),
    C = N.useMemo(() => {
      if (a === i.pathname + i.search + i.hash) return [];
      let D = new Set(),
        z = !1;
      if (
        (r.forEach((T) => {
          let O = f.routes[T.route.id];
          !O ||
            !O.hasLoader ||
            ((
              (!b.some((V) => V.route.id === T.route.id) &&
                T.route.id in d &&
                h[T.route.id]?.shouldRevalidate) ||
              O.hasClientLoader
            ) ?
              (z = !0)
            : D.add(T.route.id));
        }),
        D.size === 0)
      )
        return [];
      let x = P0(a, y, c.unstable_trailingSlashAwareDataRequests, 'data');
      return (
        z &&
          D.size > 0 &&
          x.searchParams.set(
            '_routes',
            r
              .filter((T) => D.has(T.route.id))
              .map((T) => T.route.id)
              .join(','),
          ),
        [x.pathname + x.search]
      );
    }, [y, c.unstable_trailingSlashAwareDataRequests, d, i, f, b, r, a, h]),
    S = N.useMemo(() => ty(v, f), [v, f]),
    j = uy(v);
  return N.createElement(
    N.Fragment,
    null,
    C.map((D) =>
      N.createElement('link', {
        key: D,
        rel: 'prefetch',
        as: 'fetch',
        href: D,
        ...s,
      }),
    ),
    S.map((D) =>
      N.createElement('link', { key: D, rel: 'modulepreload', href: D, ...s }),
    ),
    j.map(({ key: D, link: z }) =>
      N.createElement('link', {
        key: D,
        nonce: s.nonce,
        ...z,
        crossOrigin: z.crossOrigin ?? s.crossOrigin,
      }),
    ),
  );
}
function cy(...a) {
  return (r) => {
    a.forEach((s) => {
      typeof s == 'function' ? s(r) : s != null && (s.current = r);
    });
  };
}
var fy =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  fy && (window.__reactRouterVersion = '7.13.0');
} catch {}
function dy({
  basename: a,
  children: r,
  unstable_useTransitions: s,
  window: i,
}) {
  let c = N.useRef();
  c.current == null && (c.current = $g({ window: i, v5Compat: !0 }));
  let f = c.current,
    [h, y] = N.useState({ action: f.action, location: f.location }),
    d = N.useCallback(
      (p) => {
        s === !1 ? y(p) : N.startTransition(() => y(p));
      },
      [s],
    );
  return (
    N.useLayoutEffect(() => f.listen(d), [f, d]),
    N.createElement(Y0, {
      basename: a,
      children: r,
      location: h.location,
      navigationType: h.action,
      navigator: f,
      unstable_useTransitions: s,
    })
  );
}
var Gh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Zl = N.forwardRef(function (
    {
      onClick: r,
      discover: s = 'render',
      prefetch: i = 'none',
      relative: c,
      reloadDocument: f,
      replace: h,
      state: y,
      target: d,
      to: p,
      preventScrollReset: b,
      viewTransition: v,
      unstable_defaultShouldRevalidate: C,
      ...S
    },
    j,
  ) {
    let { basename: D, unstable_useTransitions: z } = N.useContext(Gt),
      x = typeof p == 'string' && Gh.test(p),
      T = Ah(p, D);
    p = T.to;
    let O = M0(p, { relative: c }),
      [V, k, I] = sy(i, S),
      K = py(p, {
        replace: h,
        state: y,
        target: d,
        preventScrollReset: b,
        relative: c,
        viewTransition: v,
        unstable_defaultShouldRevalidate: C,
        unstable_useTransitions: z,
      });
    function H(J) {
      (r && r(J), J.defaultPrevented || K(J));
    }
    let ne = N.createElement('a', {
      ...S,
      ...I,
      'href': T.absoluteURL || O,
      'onClick': T.isExternal || f ? r : H,
      'ref': cy(j, k),
      'target': d,
      'data-discover': !x && s === 'render' ? 'true' : void 0,
    });
    return V && !x ?
        N.createElement(N.Fragment, null, ne, N.createElement(ry, { page: O }))
      : ne;
  });
Zl.displayName = 'Link';
var ha = N.forwardRef(function (
  {
    'aria-current': r = 'page',
    'caseSensitive': s = !1,
    'className': i = '',
    'end': c = !1,
    'style': f,
    'to': h,
    'viewTransition': y,
    'children': d,
    ...p
  },
  b,
) {
  let v = fi(h, { relative: p.relative }),
    C = $l(),
    S = N.useContext(Qs),
    { navigator: j, basename: D } = N.useContext(Gt),
    z = S != null && by(v) && y === !0,
    x = j.encodeLocation ? j.encodeLocation(v).pathname : v.pathname,
    T = C.pathname,
    O =
      S && S.navigation && S.navigation.location ?
        S.navigation.location.pathname
      : null;
  (s ||
    ((T = T.toLowerCase()),
    (O = O ? O.toLowerCase() : null),
    (x = x.toLowerCase())),
    O && D && (O = yl(O, D) || O));
  const V = x !== '/' && x.endsWith('/') ? x.length - 1 : x.length;
  let k = T === x || (!c && T.startsWith(x) && T.charAt(V) === '/'),
    I =
      O != null &&
      (O === x || (!c && O.startsWith(x) && O.charAt(x.length) === '/')),
    K = { isActive: k, isPending: I, isTransitioning: z },
    H = k ? r : void 0,
    ne;
  typeof i == 'function' ?
    (ne = i(K))
  : (ne = [
      i,
      k ? 'active' : null,
      I ? 'pending' : null,
      z ? 'transitioning' : null,
    ]
      .filter(Boolean)
      .join(' '));
  let J = typeof f == 'function' ? f(K) : f;
  return N.createElement(
    Zl,
    {
      ...p,
      'aria-current': H,
      'className': ne,
      'ref': b,
      'style': J,
      'to': h,
      'viewTransition': y,
    },
    typeof d == 'function' ? d(K) : d,
  );
});
ha.displayName = 'NavLink';
var my = N.forwardRef(
  (
    {
      discover: a = 'render',
      fetcherKey: r,
      navigate: s,
      reloadDocument: i,
      replace: c,
      state: f,
      method: h = Ls,
      action: y,
      onSubmit: d,
      relative: p,
      preventScrollReset: b,
      viewTransition: v,
      unstable_defaultShouldRevalidate: C,
      ...S
    },
    j,
  ) => {
    let { unstable_useTransitions: D } = N.useContext(Gt),
      z = yy(),
      x = _y(y, { relative: p }),
      T = h.toLowerCase() === 'get' ? 'get' : 'post',
      O = typeof y == 'string' && Gh.test(y),
      V = (k) => {
        if ((d && d(k), k.defaultPrevented)) return;
        k.preventDefault();
        let I = k.nativeEvent.submitter,
          K = I?.getAttribute('formmethod') || h,
          H = () =>
            z(I || k.currentTarget, {
              fetcherKey: r,
              method: K,
              navigate: s,
              replace: c,
              state: f,
              relative: p,
              preventScrollReset: b,
              viewTransition: v,
              unstable_defaultShouldRevalidate: C,
            });
        D && s !== !1 ? N.startTransition(() => H()) : H();
      };
    return N.createElement('form', {
      'ref': j,
      'method': T,
      'action': x,
      'onSubmit': i ? d : V,
      ...S,
      'data-discover': !O && a === 'render' ? 'true' : void 0,
    });
  },
);
my.displayName = 'Form';
function hy(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function qh(a) {
  let r = N.useContext(sn);
  return (we(r, hy(a)), r);
}
function py(
  a,
  {
    target: r,
    replace: s,
    state: i,
    preventScrollReset: c,
    relative: f,
    viewTransition: h,
    unstable_defaultShouldRevalidate: y,
    unstable_useTransitions: d,
  } = {},
) {
  let p = Rh(),
    b = $l(),
    v = fi(a, { relative: f });
  return N.useCallback(
    (C) => {
      if (k0(C, r)) {
        C.preventDefault();
        let S = s !== void 0 ? s : ri(b) === ri(v),
          j = () =>
            p(a, {
              replace: S,
              state: i,
              preventScrollReset: c,
              relative: f,
              viewTransition: h,
              unstable_defaultShouldRevalidate: y,
            });
        d ? N.startTransition(() => j()) : j();
      }
    },
    [b, p, v, s, i, r, a, c, f, h, y, d],
  );
}
var vy = 0,
  gy = () => `__${String(++vy)}__`;
function yy() {
  let { router: a } = qh('useSubmit'),
    { basename: r } = N.useContext(Gt),
    s = H0(),
    i = a.fetch,
    c = a.navigate;
  return N.useCallback(
    async (f, h = {}) => {
      let { action: y, method: d, encType: p, formData: b, body: v } = F0(f, r);
      if (h.navigate === !1) {
        let C = h.fetcherKey || gy();
        await i(C, s, h.action || y, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: b,
          body: v,
          formMethod: h.method || d,
          formEncType: h.encType || p,
          flushSync: h.flushSync,
        });
      } else
        await c(h.action || y, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: b,
          body: v,
          formMethod: h.method || d,
          formEncType: h.encType || p,
          replace: h.replace,
          state: h.state,
          fromRouteId: s,
          flushSync: h.flushSync,
          viewTransition: h.viewTransition,
        });
    },
    [i, c, r, s],
  );
}
function _y(a, { relative: r } = {}) {
  let { basename: s } = N.useContext(Gt),
    i = N.useContext(Ft);
  we(i, 'useFormAction must be used inside a RouteContext');
  let [c] = i.matches.slice(-1),
    f = { ...fi(a || '.', { relative: r }) },
    h = $l();
  if (a == null) {
    f.search = h.search;
    let y = new URLSearchParams(f.search),
      d = y.getAll('index');
    if (d.some((b) => b === '')) {
      (y.delete('index'),
        d.filter((v) => v).forEach((v) => y.append('index', v)));
      let b = y.toString();
      f.search = b ? `?${b}` : '';
    }
  }
  return (
    (!a || a === '.') &&
      c.route.index &&
      (f.search = f.search ? f.search.replace(/^\?/, '?index&') : '?index'),
    s !== '/' && (f.pathname = f.pathname === '/' ? s : gl([s, f.pathname])),
    ri(f)
  );
}
function by(a, { relative: r } = {}) {
  let s = N.useContext(Nh);
  we(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: i } = qh('useViewTransitionState'),
    c = fi(a, { relative: r });
  if (!s.isTransitioning) return !1;
  let f = yl(s.currentLocation.pathname, i) || s.currentLocation.pathname,
    h = yl(s.nextLocation.pathname, i) || s.nextLocation.pathname;
  return Us(c.pathname, h) != null || Us(c.pathname, f) != null;
}
const Sy = '_menu_fvuuk_1',
  xy = '_menu__nav_fvuuk_17',
  Ty = '_menu__list_fvuuk_24',
  Ey = '_menu__link_fvuuk_33',
  Cy = '_menu__footer_fvuuk_59',
  My = '_footer_btn_fvuuk_66',
  ut = {
    'menu': Sy,
    'menu--open': '_menu--open_fvuuk_14',
    'menu__nav': xy,
    'menu__list': Ty,
    'menu__link': Ey,
    'menu__link--active': '_menu__link--active_fvuuk_49',
    'menu__footer': Cy,
    'footer_btn': My,
    'footer_btn--active': '_footer_btn--active_fvuuk_87',
  },
  Yh =
    "data:image/svg+xml,%3csvg%20width='16'%20height='14'%20viewBox='0%200%2016%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.296%200.332589C9.82592%200.113015%2010.3939%200%2010.9675%200C11.5411%200%2012.1091%200.113015%2012.6391%200.332589C13.169%200.552163%2013.6504%200.873992%2014.056%201.27969C14.4615%201.68515%2014.7833%202.16654%2015.0028%202.69636C15.2224%203.22628%2015.3354%203.79427%2015.3354%204.36788C15.3354%204.9415%2015.2224%205.50949%2015.0028%206.03941C14.7833%206.56928%2014.4615%207.05071%2014.0558%207.45619C14.0558%207.45623%2014.0559%207.45615%2014.0558%207.45619L8.1625%2013.3495C7.88913%2013.6229%207.44592%2013.6229%207.17255%2013.3495L1.27922%207.45619C0.460149%206.63712%200%205.52622%200%204.36788C0%203.20954%200.460149%202.09865%201.27922%201.27958C2.09829%200.460505%203.20919%200.000356495%204.36753%200.000356495C5.52587%200.000356495%206.63676%200.460505%207.45583%201.27958L7.66753%201.49127L7.8791%201.27969C7.87906%201.27973%207.87914%201.27965%207.8791%201.27969C8.28459%200.874047%208.76613%200.552142%209.296%200.332589ZM13.0658%202.26941C12.7903%201.99378%2012.4632%201.77513%2012.1031%201.62596C11.7431%201.47678%2011.3572%201.4%2010.9675%201.4C10.5778%201.4%2010.1919%201.47678%209.83191%201.62596C9.47189%201.77513%209.14478%201.99378%208.86928%202.26941L8.1625%202.97619C7.88913%203.24956%207.44592%203.24956%207.17255%202.97619L6.46589%202.26953C5.90937%201.71301%205.15456%201.40036%204.36753%201.40036C3.58049%201.40036%202.82569%201.71301%202.26917%202.26953C1.71265%202.82604%201.4%203.58085%201.4%204.36788C1.4%205.15492%201.71265%205.90972%202.26917%206.46624L7.66753%2011.8646L13.0659%206.46624C13.3415%206.19074%2013.5603%205.86352%2013.7095%205.5035C13.8586%205.14347%2013.9354%204.75759%2013.9354%204.36788C13.9354%203.97818%2013.8586%203.59229%2013.7095%203.23227C13.5603%202.87224%2013.3414%202.54491%2013.0658%202.26941Z'%20fill='%23F1F2F9'/%3e%3c/svg%3e",
  Vh =
    "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.46683%200.933323C3.59273%200.765453%203.79032%200.666656%204.00016%200.666656H12.0002C12.21%200.666656%2012.4076%200.765453%2012.5335%200.933323L14.5335%203.59999C14.62%203.71539%2014.6668%203.85574%2014.6668%203.99999V13.3333C14.6668%2013.8638%2014.4561%2014.3725%2014.081%2014.7475C13.706%2015.1226%2013.1973%2015.3333%2012.6668%2015.3333H3.3335C2.80306%2015.3333%202.29436%2015.1226%201.91928%2014.7475C1.54421%2014.3725%201.3335%2013.8638%201.3335%2013.3333V3.99999C1.3335%203.85574%201.38028%203.71539%201.46683%203.59999L3.46683%200.933323ZM4.3335%201.99999L2.66683%204.22221V13.3333C2.66683%2013.5101%202.73707%2013.6797%202.86209%2013.8047C2.98712%2013.9298%203.15669%2014%203.3335%2014H12.6668C12.8436%2014%2013.0132%2013.9298%2013.1382%2013.8047C13.2633%2013.6797%2013.3335%2013.5101%2013.3335%2013.3333V4.22221L11.6668%201.99999H4.3335Z'%20fill='%23F1F2F9'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M1.3335%204.00001C1.3335%203.63182%201.63197%203.33334%202.00016%203.33334H14.0002C14.3684%203.33334%2014.6668%203.63182%2014.6668%204.00001C14.6668%204.3682%2014.3684%204.66668%2014.0002%204.66668H2.00016C1.63197%204.66668%201.3335%204.3682%201.3335%204.00001Z'%20fill='%23F1F2F9'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.33341%206C5.7016%206%206.00008%206.29848%206.00008%206.66667C6.00008%207.1971%206.21079%207.70581%206.58587%208.08088C6.96094%208.45595%207.46965%208.66667%208.00008%208.66667C8.53051%208.66667%209.03922%208.45595%209.41429%208.08088C9.78937%207.70581%2010.0001%207.1971%2010.0001%206.66667C10.0001%206.29848%2010.2986%206%2010.6667%206C11.0349%206%2011.3334%206.29848%2011.3334%206.66667C11.3334%207.55072%2010.9822%208.39857%2010.3571%209.02369C9.73198%209.64881%208.88414%2010%208.00008%2010C7.11603%2010%206.26818%209.64881%205.64306%209.02369C5.01794%208.39857%204.66675%207.55072%204.66675%206.66667C4.66675%206.29848%204.96522%206%205.33341%206Z'%20fill='%23F1F2F9'/%3e%3c/svg%3e",
  Ay = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Phones', path: '/phones' },
    { id: 3, name: 'Tablets', path: '/tablets' },
    { id: 4, name: 'Accessories', path: '/accessories' },
  ],
  zy = ({ isOpen: a, onClose: r }) =>
    g.jsxs('div', {
      className: `${ut.menu} ${a ? ut['menu--open'] : ''}`,
      children: [
        g.jsx('nav', {
          className: ut.menu__nav,
          children: g.jsx('ul', {
            className: ut.menu__list,
            children: Ay.map((s) =>
              g.jsx(
                'li',
                {
                  className: ut.menu__item,
                  children: g.jsx(ha, {
                    to: s.path,
                    className: ({ isActive: i }) =>
                      i ?
                        `${ut.menu__link} ${ut['menu__link--active']}`
                      : ut.menu__link,
                    onClick: r,
                    children: s.name,
                  }),
                },
                s.id,
              ),
            ),
          }),
        }),
        g.jsxs('div', {
          className: ut.menu__footer,
          children: [
            g.jsx(ha, {
              to: '/favorites',
              className: ({ isActive: s }) =>
                s ?
                  `${ut.footer_btn} ${ut['footer_btn--active']}`
                : ut.footer_btn,
              onClick: r,
              children: g.jsx('img', { src: Yh, alt: 'Favorites' }),
            }),
            g.jsx(ha, {
              to: '/cart',
              className: ({ isActive: s }) =>
                s ?
                  `${ut.footer_btn} ${ut['footer_btn--active']}`
                : ut.footer_btn,
              onClick: r,
              children: g.jsx('img', { src: Vh, alt: 'Cart' }),
            }),
          ],
        }),
      ],
    }),
  Ny = '_header_17x9z_1',
  Oy = '_header__container_17x9z_16',
  jy = '_header__left_17x9z_23',
  Dy = '_header__right_17x9z_23',
  Ry = '_header__logo_17x9z_27',
  Ly = '_header__nav_17x9z_49',
  wy = '_header__icons_17x9z_64',
  By = '_header__burger_17x9z_72',
  Hy = '_nav_list_17x9z_92',
  Uy = '_nav_list__item_17x9z_109',
  Gy = '_nav_list__link_17x9z_113',
  qy = '_icon_btn_17x9z_141',
  Yy = '_burger_icon_17x9z_177',
  Ye = {
    'header': Ny,
    'header__container': Oy,
    'header__left': jy,
    'header__right': Dy,
    'header__logo': Ry,
    'header__nav': Ly,
    'header__icons': wy,
    'header__burger': By,
    'nav_list': Hy,
    'nav_list__item': Uy,
    'nav_list__link': Gy,
    'nav_list__link--active': '_nav_list__link--active_17x9z_128',
    'icon_btn': qy,
    'icon_btn--active': '_icon_btn--active_17x9z_160',
    'burger_icon': Yy,
    'burger_icon--active': '_burger_icon--active_17x9z_194',
  },
  Vy = '/assets/logo-CxS9TFyQ.svg',
  Xy = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Phones', path: '/phones' },
    { id: 3, name: 'Tablets', path: '/tablets' },
    { id: 4, name: 'Accessories', path: '/accessories' },
  ],
  Qy = () => {
    const [a, r] = N.useState(!1);
    N.useEffect(
      () => (
        a ?
          (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'unset'),
        () => {
          document.body.style.overflow = 'unset';
        }
      ),
      [a],
    );
    const s = () => {
      r((i) => !i);
    };
    return g.jsxs(g.Fragment, {
      children: [
        g.jsx('header', {
          className: Ye.header,
          children: g.jsxs('div', {
            className: Ye.header__container,
            children: [
              g.jsxs('div', {
                className: Ye.header__left,
                children: [
                  g.jsx(Zl, {
                    to: '/',
                    className: Ye.header__logo,
                    onClick: () => r(!1),
                    children: g.jsx('img', { src: Vy, alt: 'Nice Gadgets' }),
                  }),
                  g.jsx('nav', {
                    className: Ye.header__nav,
                    children: g.jsx('ul', {
                      className: Ye.nav_list,
                      children: Xy.map((i) =>
                        g.jsx(
                          'li',
                          {
                            className: Ye.nav_list__item,
                            children: g.jsx(ha, {
                              to: i.path,
                              className: ({ isActive: c }) =>
                                c ?
                                  `${Ye.nav_list__link} ${Ye['nav_list__link--active']}`
                                : Ye.nav_list__link,
                              children: i.name,
                            }),
                          },
                          i.id,
                        ),
                      ),
                    }),
                  }),
                ],
              }),
              g.jsxs('div', {
                className: Ye.header__right,
                children: [
                  g.jsxs('div', {
                    className: Ye.header__icons,
                    children: [
                      g.jsx(ha, {
                        to: '/favorites',
                        className: ({ isActive: i }) =>
                          i ?
                            `${Ye.icon_btn} ${Ye['icon_btn--active']}`
                          : Ye.icon_btn,
                        children: g.jsx('img', { src: Yh, alt: 'Favorites' }),
                      }),
                      g.jsx(ha, {
                        to: '/cart',
                        className: ({ isActive: i }) =>
                          i ?
                            `${Ye.icon_btn} ${Ye['icon_btn--active']}`
                          : Ye.icon_btn,
                        children: g.jsx('img', { src: Vh, alt: 'Cart' }),
                      }),
                    ],
                  }),
                  g.jsx('button', {
                    'className': Ye.header__burger,
                    'onClick': s,
                    'aria-label': 'Toggle menu',
                    'children': g.jsxs('div', {
                      className: `${Ye.burger_icon} ${a ? Ye['burger_icon--active'] : ''}`,
                      children: [
                        g.jsx('span', {}),
                        g.jsx('span', {}),
                        g.jsx('span', {}),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        g.jsx(zy, { isOpen: a, onClose: () => r(!1) }),
      ],
    });
  },
  Zy = '_footer_1p3ra_2',
  $y = '_container_1p3ra_19',
  ky = '_logo_1p3ra_25',
  Ky = '_nav_1p3ra_29',
  Jy = '_back_1p3ra_47',
  Fy = '_arrow_1p3ra_57',
  Py = '_logoLink_1p3ra_96',
  da = {
    footer: Zy,
    container: $y,
    logo: ky,
    nav: Ky,
    back: Jy,
    arrow: Fy,
    logoLink: Py,
  },
  Wy = '/assets/logo-BX5z9YCI.svg',
  Iy = () => {
    const a = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return g.jsx('footer', {
      className: da.footer,
      children: g.jsxs('div', {
        className: da.container,
        children: [
          g.jsx(Zl, {
            to: '/',
            className: da.logoLink,
            children: g.jsx('img', {
              src: Wy,
              alt: 'Nice Gadgets',
              className: da.logo,
            }),
          }),
          g.jsxs('nav', {
            className: da.nav,
            children: [
              g.jsx('a', {
                href: 'https://github.com/Team-Project-Phone-catalog/phone-catalog-frontend',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: 'GITHUB',
              }),
              g.jsx('a', { href: '#', children: 'CONTACTS' }),
              g.jsx('a', { href: '#', children: 'RIGHTS' }),
            ],
          }),
          g.jsxs('div', {
            className: da.back,
            children: [
              g.jsx('span', { children: 'Back to top' }),
              g.jsx('button', {
                type: 'button',
                onClick: a,
                className: da.arrow,
                children: '↑',
              }),
            ],
          }),
        ],
      }),
    });
  },
  $s = () => fetch('/api/phones.json').then((a) => a.json()),
  ks = () => fetch('/api/tablets.json').then((a) => a.json()),
  Ks = () => fetch('/api/accessories.json').then((a) => a.json()),
  e1 = () => fetch('/api/products.json').then((a) => a.json()),
  t1 = async (a, r) => {
    const s = await fetch(`/api/${a}.json`);
    if (!s.ok) throw new Error(`Category not found: ${a}`);
    const c = (await s.json()).find((f) => f.id === r);
    if (!c) throw new Error(`Product not found: ${r}`);
    return c;
  },
  l1 = ({ currentPrice: a, fullPrice: r }) =>
    g.jsxs('p', {
      className: 'product-price',
      children: [
        g.jsxs('span', {
          className: 'product-price__current',
          children: ['$', a],
        }),
        g.jsxs('span', {
          className: 'product-price__full',
          children: ['$', r],
        }),
      ],
    }),
  Ds = (a) => a.split(' ').slice(0, 2).join(' '),
  Xh = ({
    screen: a,
    capacity: r,
    ram: s,
    resolution: i,
    showTopLine: c = !0,
  }) =>
    g.jsxs('div', {
      className: `product-features ${c ? '' : 'product-features--no-line'}`,
      children: [
        g.jsxs('p', {
          className: 'product-features__item',
          children: [
            g.jsx('span', {
              className: 'product-features__name',
              children: 'Screen',
            }),
            g.jsx('span', {
              className: 'product-features__value',
              children: Ds(a),
            }),
          ],
        }),
        i &&
          g.jsxs('p', {
            className: 'product-features__item',
            children: [
              g.jsx('span', {
                className: 'product-features__name',
                children: 'Resolution',
              }),
              g.jsx('span', {
                className: 'product-features__value',
                children: Ds(i),
              }),
            ],
          }),
        g.jsxs('p', {
          className: 'product-features__item',
          children: [
            g.jsx('span', {
              className: 'product-features__name',
              children: 'Capacity',
            }),
            g.jsx('span', {
              className: 'product-features__value',
              children: Ds(r),
            }),
          ],
        }),
        g.jsxs('p', {
          className: 'product-features__item',
          children: [
            g.jsx('span', {
              className: 'product-features__name',
              children: 'RAM',
            }),
            g.jsx('span', {
              className: 'product-features__value',
              children: Ds(s),
            }),
          ],
        }),
      ],
    }),
  Qh = ({ onAddToCart: a, onToggleFavorite: r, isFavorite: s, isInCart: i }) =>
    g.jsxs('div', {
      className: 'product-actions',
      children: [
        g.jsx('button', {
          type: 'button',
          className: 'product-actions__add-to-cart',
          onClick: a,
          disabled: i,
          children: i ? 'Added' : 'Add to cart',
        }),
        g.jsx('button', {
          'type': 'button',
          'className': `product-actions__favorites ${s ? 'product-actions__favorites--active' : ''}`,
          'onClick': r,
          'aria-label': s ? 'Remove from favorites' : 'Add to favorites',
        }),
      ],
    }),
  Zh = N.createContext(void 0),
  $h = () => {
    const a = N.useContext(Zh);
    if (!a) throw new Error('useAppContext must be used within AppProvider');
    return a;
  },
  pa = ({ product: a, onFavoriteChange: r }) => {
    const { addToCart: s, isInCart: i } = $h(),
      c = () => {
        a && s(a);
      },
      [f, h] = N.useState(() =>
        a ?
          JSON.parse(localStorage.getItem('favorites') || '[]').includes(
            String(a.id),
          )
        : !1,
      );
    if (!a) return null;
    const y = a.priceDiscount ?? ('price' in a ? a.price : void 0),
      d = a.priceRegular ?? ('fullPrice' in a ? a.fullPrice : void 0),
      p = 'images' in a ? a.images[0] : a.image,
      b = p ? `/${p}` : null,
      v = 'itemId' in a ? a.itemId : a.id,
      C = String(v).toLowerCase();
    let S = 'phones';
    C.includes('ipad') ? (S = 'tablets')
    : C.includes('watch') ? (S = 'accessories')
    : 'category' in a && a.category && (S = a.category);
    const j = `/${S}/${v}`,
      D = () => {
        const z = JSON.parse(localStorage.getItem('favorites') || '[]');
        let x;
        (z.includes(String(a.id)) ?
          (x = z.filter((T) => T !== String(a.id)))
        : (x = [...z, String(a.id)]),
          localStorage.setItem('favorites', JSON.stringify(x)),
          h(!f),
          r?.());
      };
    return g.jsx('div', {
      className: 'card',
      children: g.jsxs('div', {
        className: 'card__container',
        children: [
          g.jsxs(Zl, {
            to: j,
            className: 'card__link',
            children: [
              g.jsx('div', {
                className: 'card__img-container',
                children:
                  b &&
                  g.jsx('img', {
                    className: 'card__image',
                    src: b,
                    alt: a.name,
                  }),
              }),
              g.jsx('div', {
                className: 'card__title-wrapper',
                children: g.jsx('h2', {
                  className: 'card__title',
                  children: a.name,
                }),
              }),
            ],
          }),
          g.jsx(l1, { currentPrice: y, fullPrice: d }),
          g.jsx(Xh, { screen: a.screen, capacity: a.capacity, ram: a.ram }),
          g.jsx(Qh, {
            onAddToCart: (z) => {
              (z.preventDefault(), z.stopPropagation(), c());
            },
            onToggleFavorite: (z) => {
              (z.preventDefault(), z.stopPropagation(), D());
            },
            isFavorite: f,
            isInCart: i(a),
          }),
        ],
      }),
    });
  },
  Js = (a) => [...a].sort((r, s) => (s.year || 0) - (r.year || 0)),
  di = (a) =>
    [...a].sort((r, s) => {
      const i = (r.priceRegular || 0) - (r.priceDiscount || 0);
      return (s.priceRegular || 0) - (s.priceDiscount || 0) - i;
    }),
  a1 = '_search_1flgh_19',
  n1 = '_title_1flgh_34',
  i1 = '_modelsCount_1flgh_44',
  s1 = '_controls_1flgh_52',
  r1 = '_controlsLeft_1flgh_59',
  u1 = '_control_1flgh_52',
  o1 = '_label_1flgh_69',
  c1 = '_select_1flgh_73',
  f1 = '_searchInput_1flgh_94',
  Fe = {
    'phones-page__container': '_phones-page__container_1flgh_9',
    'search': a1,
    'phones-page': '_phones-page_1flgh_9',
    'title': n1,
    'modelsCount': i1,
    'phones-page__controls': '_phones-page__controls_1flgh_49',
    'controls': s1,
    'controlsLeft': r1,
    'control': u1,
    'label': o1,
    'select': c1,
    'searchInput': f1,
    'phones-page__list': '_phones-page__list_1flgh_105',
  },
  d1 = '_breadcrumbs_mu3xr_1',
  m1 = '_breadcrumbs__home_mu3xr_7',
  h1 = '_breadcrumbs__separator_mu3xr_16',
  p1 = '_breadcrumbs__link_mu3xr_20',
  v1 = '_breadcrumbs__current_mu3xr_31',
  ma = {
    breadcrumbs: d1,
    breadcrumbs__home: m1,
    breadcrumbs__separator: h1,
    breadcrumbs__link: p1,
    breadcrumbs__current: v1,
  },
  nn = () => {
    const a = $l(),
      { productId: r } = Go(),
      s = a.pathname.split('/').filter(Boolean);
    if (s.length === 0) return null;
    const i = s[0],
      c = (h) => h.charAt(0).toUpperCase() + h.slice(1),
      f = (h) =>
        h
          .split('-')
          .map((y) => y.charAt(0).toUpperCase() + y.slice(1))
          .join(' ');
    return g.jsxs('nav', {
      className: ma.breadcrumbs,
      children: [
        g.jsx(Zl, {
          to: '/',
          className: ma.breadcrumbs__home,
          children: g.jsx('img', { src: '/img/icons/Home.svg', alt: 'Home' }),
        }),
        g.jsx('span', { className: ma.breadcrumbs__separator, children: '>' }),
        r ?
          g.jsx(Zl, {
            to: `/${i}`,
            className: ma.breadcrumbs__link,
            children: c(i),
          })
        : g.jsx('span', { className: ma.breadcrumbs__current, children: c(i) }),
        r &&
          g.jsxs(g.Fragment, {
            children: [
              g.jsx('span', {
                className: ma.breadcrumbs__separator,
                children: '>',
              }),
              g.jsx('span', {
                className: ma.breadcrumbs__current,
                children: f(r),
              }),
            ],
          }),
      ],
    });
  },
  Qo = () =>
    g.jsxs('div', {
      className: 'card-skeleton',
      children: [
        g.jsx('div', { className: 'card-skeleton__img' }),
        g.jsx('div', { className: 'card-skeleton__title' }),
        g.jsx('div', { className: 'card-skeleton__price' }),
        g.jsxs('div', {
          className: 'card-skeleton__features',
          children: [
            g.jsx('div', { className: 'card-skeleton__features-line' }),
            g.jsx('div', { className: 'card-skeleton__features-line' }),
            g.jsx('div', { className: 'card-skeleton__features-line' }),
          ],
        }),
        g.jsxs('div', {
          className: 'card-skeleton__actions',
          children: [
            g.jsx('div', { className: 'card-skeleton__actions-btn' }),
            g.jsx('div', { className: 'card-skeleton__actions-fav' }),
          ],
        }),
      ],
    }),
  g1 = () => {
    const [a, r] = N.useState([]),
      [s, i] = N.useState('newest'),
      [c, f] = N.useState(16),
      [h, y] = N.useState(!0);
    N.useEffect(() => {
      (async () => {
        y(!0);
        const v = await $s();
        (r(v.map((C) => ({ ...C, category: 'phones' }))),
          setTimeout(() => {
            y(!1);
          }, 1e3));
      })();
    }, []);
    const d = N.useMemo(() => {
        switch (s) {
          case 'alphabetically':
            return [...a].sort((b, v) => b.name.localeCompare(v.name));
          case 'bestPrice':
            return di(a);
          default:
            return Js(a);
        }
      }, [a, s]),
      p = N.useMemo(() => d.slice(0, c), [d, c]);
    return g.jsx('div', {
      className: Fe['phones-page'],
      children: g.jsxs('div', {
        className: Fe['phones-page__container'],
        children: [
          g.jsx(nn, {}),
          g.jsx('h1', { className: Fe.title, children: 'Mobile phones' }),
          !h &&
            g.jsxs('p', {
              className: Fe.modelsCount,
              children: [a.length, ' models'],
            }),
          g.jsx('section', {
            className: Fe['phones-page__controls'],
            children: g.jsxs('div', {
              className: Fe.controls,
              children: [
                g.jsxs('div', {
                  className: Fe.controlsLeft,
                  children: [
                    g.jsxs('div', {
                      className: Fe.control,
                      children: [
                        g.jsx('label', {
                          className: Fe.label,
                          children: 'Sort by',
                        }),
                        g.jsxs('select', {
                          className: Fe.select,
                          value: s,
                          onChange: (b) => i(b.target.value),
                          children: [
                            g.jsx('option', {
                              value: 'newest',
                              children: 'Newest',
                            }),
                            g.jsx('option', {
                              value: 'alphabetically',
                              children: 'Alphabetically',
                            }),
                            g.jsx('option', {
                              value: 'bestPrice',
                              children: 'Best price',
                            }),
                          ],
                        }),
                      ],
                    }),
                    g.jsxs('div', {
                      className: Fe.control,
                      children: [
                        g.jsx('label', {
                          className: Fe.label,
                          children: 'Items on page',
                        }),
                        g.jsxs('select', {
                          className: Fe.select,
                          value: c,
                          onChange: (b) => f(+b.target.value),
                          children: [
                            g.jsx('option', { value: 16, children: '16' }),
                            g.jsx('option', { value: 32, children: '32' }),
                            g.jsx('option', { value: 64, children: '64' }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                g.jsxs('div', {
                  className: Fe.search,
                  children: [
                    g.jsx('label', {
                      className: Fe.label,
                      children: 'Looking for something?',
                    }),
                    g.jsx('input', {
                      type: 'text',
                      placeholder: 'Type here',
                      className: Fe.searchInput,
                    }),
                  ],
                }),
              ],
            }),
          }),
          g.jsx('section', {
            className: Fe['phones-page__list'],
            children:
              h ?
                Array.from({ length: c }).map((b, v) => g.jsx(Qo, {}, v))
              : p.map((b) => g.jsx(pa, { product: b }, b.id)),
          }),
          g.jsx('section', { className: Fe['phones-page__pagination'] }),
        ],
      }),
    });
  },
  y1 = '_search_6oh3h_19',
  _1 = '_title_6oh3h_34',
  b1 = '_modelsCount_6oh3h_44',
  S1 = '_controls_6oh3h_52',
  x1 = '_controlsLeft_6oh3h_59',
  T1 = '_control_6oh3h_52',
  E1 = '_label_6oh3h_69',
  C1 = '_select_6oh3h_73',
  M1 = '_searchInput_6oh3h_95',
  Pe = {
    'accessories-page__container': '_accessories-page__container_6oh3h_9',
    'search': y1,
    'accessories-page': '_accessories-page_6oh3h_9',
    'title': _1,
    'modelsCount': b1,
    'accessories-page__controls': '_accessories-page__controls_6oh3h_49',
    'controls': S1,
    'controlsLeft': x1,
    'control': T1,
    'label': E1,
    'select': C1,
    'searchInput': M1,
    'accessories-page__list': '_accessories-page__list_6oh3h_106',
  },
  A1 = () => {
    const [a, r] = N.useState([]),
      [s, i] = N.useState('newest'),
      [c, f] = N.useState(16),
      [h, y] = N.useState(!0);
    N.useEffect(() => {
      (async () => {
        y(!0);
        const v = await Ks();
        (r(v.map((C) => ({ ...C, category: 'accessories' }))),
          setTimeout(() => {
            y(!1);
          }, 1e3));
      })();
    }, []);
    const d = N.useMemo(() => {
        switch (s) {
          case 'alphabetically':
            return [...a].sort((b, v) => b.name.localeCompare(v.name));
          case 'bestPrice':
            return di(a);
          default:
            return Js(a);
        }
      }, [a, s]),
      p = N.useMemo(() => d.slice(0, c), [d, c]);
    return g.jsx('div', {
      className: Pe['accessories-page'],
      children: g.jsxs('div', {
        className: Pe['accessories-page__container'],
        children: [
          g.jsx(nn, {}),
          g.jsx('h1', { className: Pe.title, children: 'Accessories' }),
          !h &&
            g.jsxs('p', {
              className: Pe.modelsCount,
              children: [a.length, ' models'],
            }),
          g.jsx('section', {
            className: Pe['accessories-page__controls'],
            children: g.jsxs('div', {
              className: Pe.controls,
              children: [
                g.jsxs('div', {
                  className: Pe.controlsLeft,
                  children: [
                    g.jsxs('div', {
                      className: Pe.control,
                      children: [
                        g.jsx('label', {
                          className: Pe.label,
                          children: 'Sort by',
                        }),
                        g.jsxs('select', {
                          className: Pe.select,
                          value: s,
                          onChange: (b) => i(b.target.value),
                          children: [
                            g.jsx('option', {
                              value: 'newest',
                              children: 'Newest',
                            }),
                            g.jsx('option', {
                              value: 'alphabetically',
                              children: 'Alphabetically',
                            }),
                            g.jsx('option', {
                              value: 'bestPrice',
                              children: 'Best price',
                            }),
                          ],
                        }),
                      ],
                    }),
                    g.jsxs('div', {
                      className: Pe.control,
                      children: [
                        g.jsx('label', {
                          className: Pe.label,
                          children: 'Items on page',
                        }),
                        g.jsxs('select', {
                          className: Pe.select,
                          value: c,
                          onChange: (b) => f(+b.target.value),
                          children: [
                            g.jsx('option', { value: 16, children: '16' }),
                            g.jsx('option', { value: 32, children: '32' }),
                            g.jsx('option', { value: 64, children: '64' }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                g.jsxs('div', {
                  className: Pe.search,
                  children: [
                    g.jsx('label', {
                      className: Pe.label,
                      children: 'Looking for something?',
                    }),
                    g.jsx('input', {
                      type: 'text',
                      placeholder: 'Type here',
                      className: Pe.searchInput,
                    }),
                  ],
                }),
              ],
            }),
          }),
          g.jsx('section', {
            className: Pe['accessories-page__list'],
            children:
              h ?
                Array.from({ length: c }).map((b, v) => g.jsx(Qo, {}, v))
              : p.map((b) => g.jsx(pa, { product: b }, b.id)),
          }),
          g.jsx('section', { className: Pe['accessories-page__pagination'] }),
        ],
      }),
    });
  },
  z1 = '_cart_1nbcg_8',
  N1 = '_title_1nbcg_27',
  O1 = '_cartContent_1nbcg_41',
  j1 = '_products_1nbcg_66',
  D1 = '_summary_1nbcg_77',
  ai = { cart: z1, title: N1, cartContent: O1, products: j1, summary: D1 },
  R1 = '_block_1xzjy_1',
  L1 = '_price_1xzjy_7',
  w1 = '_info_1xzjy_17',
  B1 = '_button_1xzjy_24',
  H1 = '_buttonCheck_1xzjy_33',
  ni = { block: R1, price: L1, info: w1, button: B1, buttonCheck: H1 },
  U1 = ({ totalPrice: a, totalItems: r }) =>
    g.jsxs('div', {
      className: ni.block,
      children: [
        g.jsx('h2', { className: ni.price, children: a }),
        g.jsxs('p', {
          className: ni.info,
          children: ['Total for ', r, ' ', r === 1 ? 'item' : 'items'],
        }),
        g.jsx('div', {
          className: ni.button,
          children: g.jsx('button', {
            className: ni.buttonCheck,
            children: 'Checkout',
          }),
        }),
      ],
    }),
  G1 = '_item_18h8g_1',
  q1 = '_remove_18h8g_19',
  Y1 = '_imageWrapper_18h8g_37',
  V1 = '_image_18h8g_37',
  X1 = '_details_18h8g_57',
  Q1 = '_name_18h8g_68',
  Z1 = '_controls_18h8g_76',
  $1 = '_quantity_18h8g_91',
  k1 = '_btnPlus_18h8g_102',
  K1 = '_btnMinus_18h8g_112',
  J1 = '_count_18h8g_122',
  F1 = '_price_18h8g_128',
  Ut = {
    item: G1,
    remove: q1,
    imageWrapper: Y1,
    image: V1,
    details: X1,
    name: Q1,
    controls: Z1,
    quantity: $1,
    btnPlus: k1,
    btnMinus: K1,
    count: J1,
    price: F1,
  },
  P1 = ({ product: a, onRemove: r, onIncrease: s, onDecrease: i }) =>
    g.jsxs('div', {
      className: Ut.item,
      children: [
        g.jsx('button', {
          className: Ut.remove,
          type: 'button',
          onClick: r,
          children: 'x',
        }),
        g.jsx('div', {
          className: Ut.imageWrapper,
          children: g.jsx('img', {
            src: 'img/phones/apple-iphone-11/black/00.webp',
            alt: 'Apple iPhone 14 Pro',
            className: Ut.image,
          }),
        }),
        g.jsx('div', {
          className: Ut.details,
          children: g.jsx('h3', { className: Ut.name, children: a.name }),
        }),
        g.jsxs('div', {
          className: Ut.controls,
          children: [
            g.jsxs('div', {
              className: Ut.quantity,
              children: [
                g.jsx('button', {
                  className: Ut.btnMinus,
                  onClick: i,
                  children: '-',
                }),
                g.jsx('span', { className: Ut.count, children: a.quantity }),
                g.jsx('button', {
                  className: Ut.btnPlus,
                  onClick: s,
                  children: '+',
                }),
              ],
            }),
            g.jsx('p', { className: Ut.price, children: a.priceDiscount }),
          ],
        }),
      ],
    }),
  kh = () =>
    g.jsx('div', {
      className: 'buttonBack',
      children: g.jsx('a', {
        className: 'buttonBackLink',
        href: '#',
        children: 'Back',
      }),
    }),
  W1 = () => {
    const {
      cartItems: a,
      removeFromCart: r,
      updateQuantity: s,
      getTotalPrice: i,
      getTotalItems: c,
    } = $h();
    return g.jsxs('div', {
      className: ai.cart,
      children: [
        g.jsx(kh, {}),
        g.jsx('div', {
          className: ai.title,
          children: g.jsx('h1', { children: 'Cart' }),
        }),
        g.jsxs('div', {
          className: ai.cartContent,
          children: [
            g.jsxs('div', {
              className: ai.products,
              children: [
                a.length === 0 &&
                  g.jsx('p', { children: 'Your cart is empty' }),
                a.map((f) =>
                  g.jsx(
                    P1,
                    {
                      product: f,
                      onRemove: () => r(f.itemUniqueId),
                      onIncrease: () => s(f.itemUniqueId, f.quantity + 1),
                      onDecrease: () => s(f.itemUniqueId, f.quantity - 1),
                    },
                    f.itemUniqueId,
                  ),
                ),
              ],
            }),
            g.jsx('div', {
              className: ai.summary,
              children: g.jsx(U1, { totalPrice: i(), totalItems: c() }),
            }),
          ],
        }),
      ],
    });
  },
  I1 = () =>
    g.jsxs('div', {
      className: 'notFound',
      children: [
        g.jsx('h1', { className: 'title', children: 'Помилка 404' }),
        g.jsx('h2', {
          className: 'title__message',
          children: 'Сторінка не знайдена',
        }),
      ],
    }),
  e_ = '_search_clix4_19',
  t_ = '_title_clix4_34',
  l_ = '_modelsCount_clix4_44',
  a_ = '_controls_clix4_52',
  n_ = '_controlsLeft_clix4_59',
  i_ = '_control_clix4_52',
  s_ = '_label_clix4_69',
  r_ = '_select_clix4_73',
  u_ = '_searchInput_clix4_94',
  We = {
    'tablets-page__container': '_tablets-page__container_clix4_9',
    'search': e_,
    'tablets-page': '_tablets-page_clix4_9',
    'title': t_,
    'modelsCount': l_,
    'tablets-page__controls': '_tablets-page__controls_clix4_49',
    'controls': a_,
    'controlsLeft': n_,
    'control': i_,
    'label': s_,
    'select': r_,
    'searchInput': u_,
    'tablets-page__list': '_tablets-page__list_clix4_105',
  },
  o_ = () => {
    const [a, r] = N.useState([]),
      [s, i] = N.useState('newest'),
      [c, f] = N.useState(16),
      [h, y] = N.useState(!0);
    N.useEffect(() => {
      (async () => {
        y(!0);
        const v = await ks();
        (r(v.map((C) => ({ ...C, category: 'tablets' }))),
          setTimeout(() => {
            y(!1);
          }, 1e3));
      })();
    }, []);
    const d = N.useMemo(() => {
        switch (s) {
          case 'alphabetically':
            return [...a].sort((b, v) => b.name.localeCompare(v.name));
          case 'bestPrice':
            return di(a);
          default:
            return Js(a);
        }
      }, [a, s]),
      p = N.useMemo(() => d.slice(0, c), [d, c]);
    return g.jsx('div', {
      className: We['tablets-page'],
      children: g.jsxs('div', {
        className: We['tablets-page__container'],
        children: [
          g.jsx(nn, {}),
          g.jsx('h1', { className: We.title, children: 'Tablets' }),
          !h &&
            g.jsxs('p', {
              className: We.modelsCount,
              children: [a.length, ' models'],
            }),
          g.jsx('section', {
            className: We['tablets-page__controls'],
            children: g.jsxs('div', {
              className: We.controls,
              children: [
                g.jsxs('div', {
                  className: We.controlsLeft,
                  children: [
                    g.jsxs('div', {
                      className: We.control,
                      children: [
                        g.jsx('label', {
                          className: We.label,
                          children: 'Sort by',
                        }),
                        g.jsxs('select', {
                          className: We.select,
                          value: s,
                          onChange: (b) => i(b.target.value),
                          children: [
                            g.jsx('option', {
                              value: 'newest',
                              children: 'Newest',
                            }),
                            g.jsx('option', {
                              value: 'alphabetically',
                              children: 'Alphabetically',
                            }),
                            g.jsx('option', {
                              value: 'bestPrice',
                              children: 'Best price',
                            }),
                          ],
                        }),
                      ],
                    }),
                    g.jsxs('div', {
                      className: We.control,
                      children: [
                        g.jsx('label', {
                          className: We.label,
                          children: 'Items on page',
                        }),
                        g.jsxs('select', {
                          className: We.select,
                          value: c,
                          onChange: (b) => f(+b.target.value),
                          children: [
                            g.jsx('option', { value: 16, children: '16' }),
                            g.jsx('option', { value: 32, children: '32' }),
                            g.jsx('option', { value: 64, children: '64' }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                g.jsxs('div', {
                  className: We.search,
                  children: [
                    g.jsx('label', {
                      className: We.label,
                      children: 'Looking for something?',
                    }),
                    g.jsx('input', {
                      type: 'text',
                      placeholder: 'Type here',
                      className: We.searchInput,
                    }),
                  ],
                }),
              ],
            }),
          }),
          g.jsx('section', {
            className: We['tablets-page__list'],
            children:
              h ?
                Array.from({ length: c }).map((b, v) => g.jsx(Qo, {}, v))
              : p.map((b) => g.jsx(pa, { product: b }, b.id)),
          }),
          g.jsx('section', { className: We['tablets-page__pagination'] }),
        ],
      }),
    });
  },
  c_ = '_home_185n1_9',
  f_ = '_container_185n1_20',
  d_ = '_hero_185n1_36',
  m_ = '_hero__title_185n1_49',
  h_ = '_section_185n1_68',
  p_ = '_section__header_185n1_81',
  v_ = '_section__title_185n1_92',
  g_ = '_section__arrows_185n1_107',
  y_ = '_categories_185n1_178',
  fe = {
    'loader-wrapper': '_loader-wrapper_185n1_1',
    'home': c_,
    'container': f_,
    'hero': d_,
    'hero__title': m_,
    'section': h_,
    'section__header': p_,
    'section__title': v_,
    'section__arrows': g_,
    'arrow-btn': '_arrow-btn_185n1_112',
    'products-slider': '_products-slider_185n1_135',
    'products-slider__track': '_products-slider__track_185n1_160',
    'categories': y_,
    'category-card': '_category-card_185n1_196',
    'category-card__image': '_category-card__image_185n1_202',
    'category-card__image-wrapper': '_category-card__image-wrapper_185n1_205',
    'category-card__image-tablets': '_category-card__image-tablets_185n1_231',
    'category-card__image-access': '_category-card__image-access_185n1_239',
    'category-card__info': '_category-card__info_185n1_247',
    'category-card__title': '_category-card__title_185n1_251',
    'category-card__count': '_category-card__count_185n1_267',
  };
function fh(a) {
  return (
    a !== null &&
    typeof a == 'object' &&
    'constructor' in a &&
    a.constructor === Object
  );
}
function Zo(a = {}, r = {}) {
  const s = ['__proto__', 'constructor', 'prototype'];
  Object.keys(r)
    .filter((i) => s.indexOf(i) < 0)
    .forEach((i) => {
      typeof a[i] > 'u' ?
        (a[i] = r[i])
      : fh(r[i]) && fh(a[i]) && Object.keys(r[i]).length > 0 && Zo(a[i], r[i]);
    });
}
const Kh = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: '' },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: '',
  },
};
function Jt() {
  const a = typeof document < 'u' ? document : {};
  return (Zo(a, Kh), a);
}
const __ = {
  document: Kh,
  navigator: { userAgent: '' },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: '',
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return '';
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(a) {
    return typeof setTimeout > 'u' ? (a(), null) : setTimeout(a, 0);
  },
  cancelAnimationFrame(a) {
    typeof setTimeout > 'u' || clearTimeout(a);
  },
};
function ot() {
  const a = typeof window < 'u' ? window : {};
  return (Zo(a, __), a);
}
function b_(a = '') {
  return a
    .trim()
    .split(' ')
    .filter((r) => !!r.trim());
}
function S_(a) {
  const r = a;
  Object.keys(r).forEach((s) => {
    try {
      r[s] = null;
    } catch {}
    try {
      delete r[s];
    } catch {}
  });
}
function Jh(a, r = 0) {
  return setTimeout(a, r);
}
function Gs() {
  return Date.now();
}
function x_(a) {
  const r = ot();
  let s;
  return (
    r.getComputedStyle && (s = r.getComputedStyle(a, null)),
    !s && a.currentStyle && (s = a.currentStyle),
    s || (s = a.style),
    s
  );
}
function T_(a, r = 'x') {
  const s = ot();
  let i, c, f;
  const h = x_(a);
  return (
    s.WebKitCSSMatrix ?
      ((c = h.transform || h.webkitTransform),
      c.split(',').length > 6 &&
        (c = c
          .split(', ')
          .map((y) => y.replace(',', '.'))
          .join(', ')),
      (f = new s.WebKitCSSMatrix(c === 'none' ? '' : c)))
    : ((f =
        h.MozTransform ||
        h.OTransform ||
        h.MsTransform ||
        h.msTransform ||
        h.transform ||
        h
          .getPropertyValue('transform')
          .replace('translate(', 'matrix(1, 0, 0, 1,')),
      (i = f.toString().split(','))),
    r === 'x' &&
      (s.WebKitCSSMatrix ? (c = f.m41)
      : i.length === 16 ? (c = parseFloat(i[12]))
      : (c = parseFloat(i[4]))),
    r === 'y' &&
      (s.WebKitCSSMatrix ? (c = f.m42)
      : i.length === 16 ? (c = parseFloat(i[13]))
      : (c = parseFloat(i[5]))),
    c || 0
  );
}
function Rs(a) {
  return (
    typeof a == 'object' &&
    a !== null &&
    a.constructor &&
    Object.prototype.toString.call(a).slice(8, -1) === 'Object'
  );
}
function E_(a) {
  return typeof window < 'u' && typeof window.HTMLElement < 'u' ?
      a instanceof HTMLElement
    : a && (a.nodeType === 1 || a.nodeType === 11);
}
function At(...a) {
  const r = Object(a[0]),
    s = ['__proto__', 'constructor', 'prototype'];
  for (let i = 1; i < a.length; i += 1) {
    const c = a[i];
    if (c != null && !E_(c)) {
      const f = Object.keys(Object(c)).filter((h) => s.indexOf(h) < 0);
      for (let h = 0, y = f.length; h < y; h += 1) {
        const d = f[h],
          p = Object.getOwnPropertyDescriptor(c, d);
        p !== void 0 &&
          p.enumerable &&
          (Rs(r[d]) && Rs(c[d]) ?
            c[d].__swiper__ ?
              (r[d] = c[d])
            : At(r[d], c[d])
          : !Rs(r[d]) && Rs(c[d]) ?
            ((r[d] = {}), c[d].__swiper__ ? (r[d] = c[d]) : At(r[d], c[d]))
          : (r[d] = c[d]));
      }
    }
  }
  return r;
}
function ln(a, r, s) {
  a.style.setProperty(r, s);
}
function Fh({ swiper: a, targetPosition: r, side: s }) {
  const i = ot(),
    c = -a.translate;
  let f = null,
    h;
  const y = a.params.speed;
  ((a.wrapperEl.style.scrollSnapType = 'none'),
    i.cancelAnimationFrame(a.cssModeFrameID));
  const d = r > c ? 'next' : 'prev',
    p = (v, C) => (d === 'next' && v >= C) || (d === 'prev' && v <= C),
    b = () => {
      ((h = new Date().getTime()), f === null && (f = h));
      const v = Math.max(Math.min((h - f) / y, 1), 0),
        C = 0.5 - Math.cos(v * Math.PI) / 2;
      let S = c + C * (r - c);
      if ((p(S, r) && (S = r), a.wrapperEl.scrollTo({ [s]: S }), p(S, r))) {
        ((a.wrapperEl.style.overflow = 'hidden'),
          (a.wrapperEl.style.scrollSnapType = ''),
          setTimeout(() => {
            ((a.wrapperEl.style.overflow = ''),
              a.wrapperEl.scrollTo({ [s]: S }));
          }),
          i.cancelAnimationFrame(a.cssModeFrameID));
        return;
      }
      a.cssModeFrameID = i.requestAnimationFrame(b);
    };
  b();
}
function Kt(a, r = '') {
  const s = ot(),
    i = [...a.children];
  return (
    s.HTMLSlotElement &&
      a instanceof HTMLSlotElement &&
      i.push(...a.assignedElements()),
    r ? i.filter((c) => c.matches(r)) : i
  );
}
function C_(a, r) {
  const s = [r];
  for (; s.length > 0; ) {
    const i = s.shift();
    if (a === i) return !0;
    s.push(
      ...i.children,
      ...(i.shadowRoot ? i.shadowRoot.children : []),
      ...(i.assignedElements ? i.assignedElements() : []),
    );
  }
}
function M_(a, r) {
  const s = ot();
  let i = r.contains(a);
  return (
    !i &&
      s.HTMLSlotElement &&
      r instanceof HTMLSlotElement &&
      ((i = [...r.assignedElements()].includes(a)), i || (i = C_(a, r))),
    i
  );
}
function qs(a) {
  try {
    console.warn(a);
    return;
  } catch {}
}
function Ys(a, r = []) {
  const s = document.createElement(a);
  return (s.classList.add(...(Array.isArray(r) ? r : b_(r))), s);
}
function A_(a, r) {
  const s = [];
  for (; a.previousElementSibling; ) {
    const i = a.previousElementSibling;
    (r ? i.matches(r) && s.push(i) : s.push(i), (a = i));
  }
  return s;
}
function z_(a, r) {
  const s = [];
  for (; a.nextElementSibling; ) {
    const i = a.nextElementSibling;
    (r ? i.matches(r) && s.push(i) : s.push(i), (a = i));
  }
  return s;
}
function Ql(a, r) {
  return ot().getComputedStyle(a, null).getPropertyValue(r);
}
function Vs(a) {
  let r = a,
    s;
  if (r) {
    for (s = 0; (r = r.previousSibling) !== null; )
      r.nodeType === 1 && (s += 1);
    return s;
  }
}
function Ph(a, r) {
  const s = [];
  let i = a.parentElement;
  for (; i; )
    (r ? i.matches(r) && s.push(i) : s.push(i), (i = i.parentElement));
  return s;
}
function Lo(a, r, s) {
  const i = ot();
  return (
    a[r === 'width' ? 'offsetWidth' : 'offsetHeight'] +
    parseFloat(
      i
        .getComputedStyle(a, null)
        .getPropertyValue(r === 'width' ? 'margin-right' : 'margin-top'),
    ) +
    parseFloat(
      i
        .getComputedStyle(a, null)
        .getPropertyValue(r === 'width' ? 'margin-left' : 'margin-bottom'),
    )
  );
}
function Ie(a) {
  return (Array.isArray(a) ? a : [a]).filter((r) => !!r);
}
function ui(a, r = '') {
  typeof trustedTypes < 'u' ?
    (a.innerHTML = trustedTypes
      .createPolicy('html', { createHTML: (s) => s })
      .createHTML(r))
  : (a.innerHTML = r);
}
let Eo;
function N_() {
  const a = ot(),
    r = Jt();
  return {
    smoothScroll:
      r.documentElement &&
      r.documentElement.style &&
      'scrollBehavior' in r.documentElement.style,
    touch: !!(
      'ontouchstart' in a ||
      (a.DocumentTouch && r instanceof a.DocumentTouch)
    ),
  };
}
function Wh() {
  return (Eo || (Eo = N_()), Eo);
}
let Co;
function O_({ userAgent: a } = {}) {
  const r = Wh(),
    s = ot(),
    i = s.navigator.platform,
    c = a || s.navigator.userAgent,
    f = { ios: !1, android: !1 },
    h = s.screen.width,
    y = s.screen.height,
    d = c.match(/(Android);?[\s\/]+([\d.]+)?/);
  let p = c.match(/(iPad)(?!\1).*OS\s([\d_]+)/);
  const b = c.match(/(iPod)(.*OS\s([\d_]+))?/),
    v = !p && c.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    C = i === 'Win32';
  let S = i === 'MacIntel';
  const j = [
    '1024x1366',
    '1366x1024',
    '834x1194',
    '1194x834',
    '834x1112',
    '1112x834',
    '768x1024',
    '1024x768',
    '820x1180',
    '1180x820',
    '810x1080',
    '1080x810',
  ];
  return (
    !p &&
      S &&
      r.touch &&
      j.indexOf(`${h}x${y}`) >= 0 &&
      ((p = c.match(/(Version)\/([\d.]+)/)),
      p || (p = [0, 1, '13_0_0']),
      (S = !1)),
    d && !C && ((f.os = 'android'), (f.android = !0)),
    (p || v || b) && ((f.os = 'ios'), (f.ios = !0)),
    f
  );
}
function Ih(a = {}) {
  return (Co || (Co = O_(a)), Co);
}
let Mo;
function j_() {
  const a = ot(),
    r = Ih();
  let s = !1;
  function i() {
    const y = a.navigator.userAgent.toLowerCase();
    return (
      y.indexOf('safari') >= 0 &&
      y.indexOf('chrome') < 0 &&
      y.indexOf('android') < 0
    );
  }
  if (i()) {
    const y = String(a.navigator.userAgent);
    if (y.includes('Version/')) {
      const [d, p] = y
        .split('Version/')[1]
        .split(' ')[0]
        .split('.')
        .map((b) => Number(b));
      s = d < 16 || (d === 16 && p < 2);
    }
  }
  const c = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      a.navigator.userAgent,
    ),
    f = i(),
    h = f || (c && r.ios);
  return {
    isSafari: s || f,
    needPerspectiveFix: s,
    need3dFix: h,
    isWebView: c,
  };
}
function ep() {
  return (Mo || (Mo = j_()), Mo);
}
function D_({ swiper: a, on: r, emit: s }) {
  const i = ot();
  let c = null,
    f = null;
  const h = () => {
      !a || a.destroyed || !a.initialized || (s('beforeResize'), s('resize'));
    },
    y = () => {
      !a ||
        a.destroyed ||
        !a.initialized ||
        ((c = new ResizeObserver((b) => {
          f = i.requestAnimationFrame(() => {
            const { width: v, height: C } = a;
            let S = v,
              j = C;
            (b.forEach(({ contentBoxSize: D, contentRect: z, target: x }) => {
              (x && x !== a.el) ||
                ((S = z ? z.width : (D[0] || D).inlineSize),
                (j = z ? z.height : (D[0] || D).blockSize));
            }),
              (S !== v || j !== C) && h());
          });
        })),
        c.observe(a.el));
    },
    d = () => {
      (f && i.cancelAnimationFrame(f),
        c && c.unobserve && a.el && (c.unobserve(a.el), (c = null)));
    },
    p = () => {
      !a || a.destroyed || !a.initialized || s('orientationchange');
    };
  (r('init', () => {
    if (a.params.resizeObserver && typeof i.ResizeObserver < 'u') {
      y();
      return;
    }
    (i.addEventListener('resize', h),
      i.addEventListener('orientationchange', p));
  }),
    r('destroy', () => {
      (d(),
        i.removeEventListener('resize', h),
        i.removeEventListener('orientationchange', p));
    }));
}
function R_({ swiper: a, extendParams: r, on: s, emit: i }) {
  const c = [],
    f = ot(),
    h = (p, b = {}) => {
      const v = f.MutationObserver || f.WebkitMutationObserver,
        C = new v((S) => {
          if (a.__preventObserver__) return;
          if (S.length === 1) {
            i('observerUpdate', S[0]);
            return;
          }
          const j = function () {
            i('observerUpdate', S[0]);
          };
          f.requestAnimationFrame ?
            f.requestAnimationFrame(j)
          : f.setTimeout(j, 0);
        });
      (C.observe(p, {
        attributes: typeof b.attributes > 'u' ? !0 : b.attributes,
        childList: a.isElement || (typeof b.childList > 'u' ? !0 : b).childList,
        characterData: typeof b.characterData > 'u' ? !0 : b.characterData,
      }),
        c.push(C));
    },
    y = () => {
      if (a.params.observer) {
        if (a.params.observeParents) {
          const p = Ph(a.hostEl);
          for (let b = 0; b < p.length; b += 1) h(p[b]);
        }
        (h(a.hostEl, { childList: a.params.observeSlideChildren }),
          h(a.wrapperEl, { attributes: !1 }));
      }
    },
    d = () => {
      (c.forEach((p) => {
        p.disconnect();
      }),
        c.splice(0, c.length));
    };
  (r({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    s('init', y),
    s('destroy', d));
}
var L_ = {
  on(a, r, s) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof r != 'function') return i;
    const c = s ? 'unshift' : 'push';
    return (
      a.split(' ').forEach((f) => {
        (i.eventsListeners[f] || (i.eventsListeners[f] = []),
          i.eventsListeners[f][c](r));
      }),
      i
    );
  },
  once(a, r, s) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof r != 'function') return i;
    function c(...f) {
      (i.off(a, c), c.__emitterProxy && delete c.__emitterProxy, r.apply(i, f));
    }
    return ((c.__emitterProxy = r), i.on(a, c, s));
  },
  onAny(a, r) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof a != 'function') return s;
    const i = r ? 'unshift' : 'push';
    return (
      s.eventsAnyListeners.indexOf(a) < 0 && s.eventsAnyListeners[i](a),
      s
    );
  },
  offAny(a) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || !r.eventsAnyListeners) return r;
    const s = r.eventsAnyListeners.indexOf(a);
    return (s >= 0 && r.eventsAnyListeners.splice(s, 1), r);
  },
  off(a, r) {
    const s = this;
    return (
      !s.eventsListeners ||
        s.destroyed ||
        !s.eventsListeners ||
        a.split(' ').forEach((i) => {
          typeof r > 'u' ?
            (s.eventsListeners[i] = [])
          : s.eventsListeners[i] &&
            s.eventsListeners[i].forEach((c, f) => {
              (c === r || (c.__emitterProxy && c.__emitterProxy === r)) &&
                s.eventsListeners[i].splice(f, 1);
            });
        }),
      s
    );
  },
  emit(...a) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || !r.eventsListeners) return r;
    let s, i, c;
    return (
      typeof a[0] == 'string' || Array.isArray(a[0]) ?
        ((s = a[0]), (i = a.slice(1, a.length)), (c = r))
      : ((s = a[0].events), (i = a[0].data), (c = a[0].context || r)),
      i.unshift(c),
      (Array.isArray(s) ? s : s.split(' ')).forEach((h) => {
        (r.eventsAnyListeners &&
          r.eventsAnyListeners.length &&
          r.eventsAnyListeners.forEach((y) => {
            y.apply(c, [h, ...i]);
          }),
          r.eventsListeners &&
            r.eventsListeners[h] &&
            r.eventsListeners[h].forEach((y) => {
              y.apply(c, i);
            }));
      }),
      r
    );
  },
};
function w_() {
  const a = this;
  let r, s;
  const i = a.el;
  (typeof a.params.width < 'u' && a.params.width !== null ?
    (r = a.params.width)
  : (r = i.clientWidth),
    typeof a.params.height < 'u' && a.params.height !== null ?
      (s = a.params.height)
    : (s = i.clientHeight),
    !((r === 0 && a.isHorizontal()) || (s === 0 && a.isVertical())) &&
      ((r =
        r -
        parseInt(Ql(i, 'padding-left') || 0, 10) -
        parseInt(Ql(i, 'padding-right') || 0, 10)),
      (s =
        s -
        parseInt(Ql(i, 'padding-top') || 0, 10) -
        parseInt(Ql(i, 'padding-bottom') || 0, 10)),
      Number.isNaN(r) && (r = 0),
      Number.isNaN(s) && (s = 0),
      Object.assign(a, {
        width: r,
        height: s,
        size: a.isHorizontal() ? r : s,
      })));
}
function B_() {
  const a = this;
  function r(J, F) {
    return parseFloat(J.getPropertyValue(a.getDirectionLabel(F)) || 0);
  }
  const s = a.params,
    { wrapperEl: i, slidesEl: c, rtlTranslate: f, wrongRTL: h } = a,
    y = a.virtual && s.virtual.enabled,
    d = y ? a.virtual.slides.length : a.slides.length,
    p = Kt(c, `.${a.params.slideClass}, swiper-slide`),
    b = y ? a.virtual.slides.length : p.length;
  let v = [];
  const C = [],
    S = [];
  let j = s.slidesOffsetBefore;
  typeof j == 'function' && (j = s.slidesOffsetBefore.call(a));
  let D = s.slidesOffsetAfter;
  typeof D == 'function' && (D = s.slidesOffsetAfter.call(a));
  const z = a.snapGrid.length,
    x = a.slidesGrid.length,
    T = a.size - j - D;
  let O = s.spaceBetween,
    V = -j,
    k = 0,
    I = 0;
  if (typeof T > 'u') return;
  (typeof O == 'string' && O.indexOf('%') >= 0 ?
    (O = (parseFloat(O.replace('%', '')) / 100) * T)
  : typeof O == 'string' && (O = parseFloat(O)),
    (a.virtualSize = -O - j - D),
    p.forEach((J) => {
      (f ? (J.style.marginLeft = '') : (J.style.marginRight = ''),
        (J.style.marginBottom = ''),
        (J.style.marginTop = ''));
    }),
    s.centeredSlides &&
      s.cssMode &&
      (ln(i, '--swiper-centered-offset-before', ''),
      ln(i, '--swiper-centered-offset-after', '')),
    s.cssMode &&
      (ln(i, '--swiper-slides-offset-before', `${j}px`),
      ln(i, '--swiper-slides-offset-after', `${D}px`)));
  const K = s.grid && s.grid.rows > 1 && a.grid;
  K ? a.grid.initSlides(p) : a.grid && a.grid.unsetSlides();
  let H;
  const ne =
    s.slidesPerView === 'auto' &&
    s.breakpoints &&
    Object.keys(s.breakpoints).filter(
      (J) => typeof s.breakpoints[J].slidesPerView < 'u',
    ).length > 0;
  for (let J = 0; J < b; J += 1) {
    H = 0;
    const F = p[J];
    if (
      !(F && (K && a.grid.updateSlide(J, F, p), Ql(F, 'display') === 'none'))
    ) {
      if (y && s.slidesPerView === 'auto')
        (s.virtual.slidesPerViewAutoSlideSize &&
          (H = s.virtual.slidesPerViewAutoSlideSize),
          H &&
            F &&
            (s.roundLengths && (H = Math.floor(H)),
            (F.style[a.getDirectionLabel('width')] = `${H}px`)));
      else if (s.slidesPerView === 'auto') {
        ne && (F.style[a.getDirectionLabel('width')] = '');
        const P = getComputedStyle(F),
          ue = F.style.transform,
          re = F.style.webkitTransform;
        if (
          (ue && (F.style.transform = 'none'),
          re && (F.style.webkitTransform = 'none'),
          s.roundLengths)
        )
          H = a.isHorizontal() ? Lo(F, 'width') : Lo(F, 'height');
        else {
          const pe = r(P, 'width'),
            G = r(P, 'padding-left'),
            Z = r(P, 'padding-right'),
            X = r(P, 'margin-left'),
            ee = r(P, 'margin-right'),
            oe = P.getPropertyValue('box-sizing');
          if (oe && oe === 'border-box') H = pe + X + ee;
          else {
            const { clientWidth: M, offsetWidth: $ } = F;
            H = pe + G + Z + X + ee + ($ - M);
          }
        }
        (ue && (F.style.transform = ue),
          re && (F.style.webkitTransform = re),
          s.roundLengths && (H = Math.floor(H)));
      } else
        ((H = (T - (s.slidesPerView - 1) * O) / s.slidesPerView),
          s.roundLengths && (H = Math.floor(H)),
          F && (F.style[a.getDirectionLabel('width')] = `${H}px`));
      (F && (F.swiperSlideSize = H),
        S.push(H),
        s.centeredSlides ?
          ((V = V + H / 2 + k / 2 + O),
          k === 0 && J !== 0 && (V = V - T / 2 - O),
          J === 0 && (V = V - T / 2 - O),
          Math.abs(V) < 1 / 1e3 && (V = 0),
          s.roundLengths && (V = Math.floor(V)),
          I % s.slidesPerGroup === 0 && v.push(V),
          C.push(V))
        : (s.roundLengths && (V = Math.floor(V)),
          (I - Math.min(a.params.slidesPerGroupSkip, I)) %
            a.params.slidesPerGroup ===
            0 && v.push(V),
          C.push(V),
          (V = V + H + O)),
        (a.virtualSize += H + O),
        (k = H),
        (I += 1));
    }
  }
  if (
    ((a.virtualSize = Math.max(a.virtualSize, T) + D),
    f &&
      h &&
      (s.effect === 'slide' || s.effect === 'coverflow') &&
      (i.style.width = `${a.virtualSize + O}px`),
    s.setWrapperSize &&
      (i.style[a.getDirectionLabel('width')] = `${a.virtualSize + O}px`),
    K && a.grid.updateWrapperSize(H, v),
    !s.centeredSlides)
  ) {
    const J = s.slidesPerView !== 'auto' && s.slidesPerView % 1 !== 0,
      F = s.snapToSlideEdge && !s.loop && (s.slidesPerView === 'auto' || J);
    let P = v.length;
    if (F) {
      let re;
      if (s.slidesPerView === 'auto') {
        re = 1;
        let pe = 0;
        for (
          let G = S.length - 1;
          G >= 0 && ((pe += S[G] + (G < S.length - 1 ? O : 0)), pe <= T);
          G -= 1
        )
          re = S.length - G;
      } else re = Math.floor(s.slidesPerView);
      P = Math.max(b - re, 0);
    }
    const ue = [];
    for (let re = 0; re < v.length; re += 1) {
      let pe = v[re];
      (s.roundLengths && (pe = Math.floor(pe)),
        F ? re <= P && ue.push(pe) : v[re] <= a.virtualSize - T && ue.push(pe));
    }
    ((v = ue),
      Math.floor(a.virtualSize - T) - Math.floor(v[v.length - 1]) > 1 &&
        (F || v.push(a.virtualSize - T)));
  }
  if (y && s.loop) {
    const J = S[0] + O;
    if (s.slidesPerGroup > 1) {
      const F = Math.ceil(
          (a.virtual.slidesBefore + a.virtual.slidesAfter) / s.slidesPerGroup,
        ),
        P = J * s.slidesPerGroup;
      for (let ue = 0; ue < F; ue += 1) v.push(v[v.length - 1] + P);
    }
    for (let F = 0; F < a.virtual.slidesBefore + a.virtual.slidesAfter; F += 1)
      (s.slidesPerGroup === 1 && v.push(v[v.length - 1] + J),
        C.push(C[C.length - 1] + J),
        (a.virtualSize += J));
  }
  if ((v.length === 0 && (v = [0]), O !== 0)) {
    const J =
      a.isHorizontal() && f ? 'marginLeft' : a.getDirectionLabel('marginRight');
    p.filter((F, P) =>
      !s.cssMode || s.loop ? !0 : P !== p.length - 1,
    ).forEach((F) => {
      F.style[J] = `${O}px`;
    });
  }
  if (s.centeredSlides && s.centeredSlidesBounds) {
    let J = 0;
    (S.forEach((P) => {
      J += P + (O || 0);
    }),
      (J -= O));
    const F = J > T ? J - T : 0;
    v = v.map((P) =>
      P <= 0 ? -j
      : P > F ? F + D
      : P,
    );
  }
  if (s.centerInsufficientSlides) {
    let J = 0;
    if (
      (S.forEach((F) => {
        J += F + (O || 0);
      }),
      (J -= O),
      J < T)
    ) {
      const F = (T - J) / 2;
      (v.forEach((P, ue) => {
        v[ue] = P - F;
      }),
        C.forEach((P, ue) => {
          C[ue] = P + F;
        }));
    }
  }
  if (
    (Object.assign(a, {
      slides: p,
      snapGrid: v,
      slidesGrid: C,
      slidesSizesGrid: S,
    }),
    s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
  ) {
    (ln(i, '--swiper-centered-offset-before', `${-v[0]}px`),
      ln(
        i,
        '--swiper-centered-offset-after',
        `${a.size / 2 - S[S.length - 1] / 2}px`,
      ));
    const J = -a.snapGrid[0],
      F = -a.slidesGrid[0];
    ((a.snapGrid = a.snapGrid.map((P) => P + J)),
      (a.slidesGrid = a.slidesGrid.map((P) => P + F)));
  }
  if (
    (b !== d && a.emit('slidesLengthChange'),
    v.length !== z &&
      (a.params.watchOverflow && a.checkOverflow(),
      a.emit('snapGridLengthChange')),
    C.length !== x && a.emit('slidesGridLengthChange'),
    s.watchSlidesProgress && a.updateSlidesOffset(),
    a.emit('slidesUpdated'),
    !y && !s.cssMode && (s.effect === 'slide' || s.effect === 'fade'))
  ) {
    const J = `${s.containerModifierClass}backface-hidden`,
      F = a.el.classList.contains(J);
    b <= s.maxBackfaceHiddenSlides ?
      F || a.el.classList.add(J)
    : F && a.el.classList.remove(J);
  }
}
function H_(a) {
  const r = this,
    s = [],
    i = r.virtual && r.params.virtual.enabled;
  let c = 0,
    f;
  typeof a == 'number' ?
    r.setTransition(a)
  : a === !0 && r.setTransition(r.params.speed);
  const h = (y) => (i ? r.slides[r.getSlideIndexByData(y)] : r.slides[y]);
  if (r.params.slidesPerView !== 'auto' && r.params.slidesPerView > 1)
    if (r.params.centeredSlides)
      (r.visibleSlides || []).forEach((y) => {
        s.push(y);
      });
    else
      for (f = 0; f < Math.ceil(r.params.slidesPerView); f += 1) {
        const y = r.activeIndex + f;
        if (y > r.slides.length && !i) break;
        s.push(h(y));
      }
  else s.push(h(r.activeIndex));
  for (f = 0; f < s.length; f += 1)
    if (typeof s[f] < 'u') {
      const y = s[f].offsetHeight;
      c = y > c ? y : c;
    }
  (c || c === 0) && (r.wrapperEl.style.height = `${c}px`);
}
function U_() {
  const a = this,
    r = a.slides,
    s =
      a.isElement ?
        a.isHorizontal() ?
          a.wrapperEl.offsetLeft
        : a.wrapperEl.offsetTop
      : 0;
  for (let i = 0; i < r.length; i += 1)
    r[i].swiperSlideOffset =
      (a.isHorizontal() ? r[i].offsetLeft : r[i].offsetTop) -
      s -
      a.cssOverflowAdjustment();
}
const dh = (a, r, s) => {
  r && !a.classList.contains(s) ?
    a.classList.add(s)
  : !r && a.classList.contains(s) && a.classList.remove(s);
};
function G_(a = (this && this.translate) || 0) {
  const r = this,
    s = r.params,
    { slides: i, rtlTranslate: c, snapGrid: f } = r;
  if (i.length === 0) return;
  typeof i[0].swiperSlideOffset > 'u' && r.updateSlidesOffset();
  let h = -a;
  (c && (h = a), (r.visibleSlidesIndexes = []), (r.visibleSlides = []));
  let y = s.spaceBetween;
  typeof y == 'string' && y.indexOf('%') >= 0 ?
    (y = (parseFloat(y.replace('%', '')) / 100) * r.size)
  : typeof y == 'string' && (y = parseFloat(y));
  for (let d = 0; d < i.length; d += 1) {
    const p = i[d];
    let b = p.swiperSlideOffset;
    s.cssMode && s.centeredSlides && (b -= i[0].swiperSlideOffset);
    const v =
        (h + (s.centeredSlides ? r.minTranslate() : 0) - b) /
        (p.swiperSlideSize + y),
      C =
        (h - f[0] + (s.centeredSlides ? r.minTranslate() : 0) - b) /
        (p.swiperSlideSize + y),
      S = -(h - b),
      j = S + r.slidesSizesGrid[d],
      D = S >= 0 && S <= r.size - r.slidesSizesGrid[d],
      z =
        (S >= 0 && S < r.size - 1) ||
        (j > 1 && j <= r.size) ||
        (S <= 0 && j >= r.size);
    (z && (r.visibleSlides.push(p), r.visibleSlidesIndexes.push(d)),
      dh(p, z, s.slideVisibleClass),
      dh(p, D, s.slideFullyVisibleClass),
      (p.progress = c ? -v : v),
      (p.originalProgress = c ? -C : C));
  }
}
function q_(a) {
  const r = this;
  if (typeof a > 'u') {
    const b = r.rtlTranslate ? -1 : 1;
    a = (r && r.translate && r.translate * b) || 0;
  }
  const s = r.params,
    i = r.maxTranslate() - r.minTranslate();
  let { progress: c, isBeginning: f, isEnd: h, progressLoop: y } = r;
  const d = f,
    p = h;
  if (i === 0) ((c = 0), (f = !0), (h = !0));
  else {
    c = (a - r.minTranslate()) / i;
    const b = Math.abs(a - r.minTranslate()) < 1,
      v = Math.abs(a - r.maxTranslate()) < 1;
    ((f = b || c <= 0), (h = v || c >= 1), b && (c = 0), v && (c = 1));
  }
  if (s.loop) {
    const b = r.getSlideIndexByData(0),
      v = r.getSlideIndexByData(r.slides.length - 1),
      C = r.slidesGrid[b],
      S = r.slidesGrid[v],
      j = r.slidesGrid[r.slidesGrid.length - 1],
      D = Math.abs(a);
    (D >= C ? (y = (D - C) / j) : (y = (D + j - S) / j), y > 1 && (y -= 1));
  }
  (Object.assign(r, { progress: c, progressLoop: y, isBeginning: f, isEnd: h }),
    (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
      r.updateSlidesProgress(a),
    f && !d && r.emit('reachBeginning toEdge'),
    h && !p && r.emit('reachEnd toEdge'),
    ((d && !f) || (p && !h)) && r.emit('fromEdge'),
    r.emit('progress', c));
}
const Ao = (a, r, s) => {
  r && !a.classList.contains(s) ?
    a.classList.add(s)
  : !r && a.classList.contains(s) && a.classList.remove(s);
};
function Y_() {
  const a = this,
    { slides: r, params: s, slidesEl: i, activeIndex: c } = a,
    f = a.virtual && s.virtual.enabled,
    h = a.grid && s.grid && s.grid.rows > 1,
    y = (v) => Kt(i, `.${s.slideClass}${v}, swiper-slide${v}`)[0];
  let d, p, b;
  if (f)
    if (s.loop) {
      let v = c - a.virtual.slidesBefore;
      (v < 0 && (v = a.virtual.slides.length + v),
        v >= a.virtual.slides.length && (v -= a.virtual.slides.length),
        (d = y(`[data-swiper-slide-index="${v}"]`)));
    } else d = y(`[data-swiper-slide-index="${c}"]`);
  else
    h ?
      ((d = r.find((v) => v.column === c)),
      (b = r.find((v) => v.column === c + 1)),
      (p = r.find((v) => v.column === c - 1)))
    : (d = r[c]);
  (d &&
    (h ||
      ((b = z_(d, `.${s.slideClass}, swiper-slide`)[0]),
      s.loop && !b && (b = r[0]),
      (p = A_(d, `.${s.slideClass}, swiper-slide`)[0]),
      s.loop && !p === 0 && (p = r[r.length - 1]))),
    r.forEach((v) => {
      (Ao(v, v === d, s.slideActiveClass),
        Ao(v, v === b, s.slideNextClass),
        Ao(v, v === p, s.slidePrevClass));
    }),
    a.emitSlidesClasses());
}
const Bs = (a, r) => {
    if (!a || a.destroyed || !a.params) return;
    const s = () => (a.isElement ? 'swiper-slide' : `.${a.params.slideClass}`),
      i = r.closest(s());
    if (i) {
      let c = i.querySelector(`.${a.params.lazyPreloaderClass}`);
      (!c &&
        a.isElement &&
        (i.shadowRoot ?
          (c = i.shadowRoot.querySelector(`.${a.params.lazyPreloaderClass}`))
        : requestAnimationFrame(() => {
            i.shadowRoot &&
              ((c = i.shadowRoot.querySelector(
                `.${a.params.lazyPreloaderClass}`,
              )),
              c && !c.lazyPreloaderManaged && c.remove());
          })),
        c && !c.lazyPreloaderManaged && c.remove());
    }
  },
  zo = (a, r) => {
    if (!a.slides[r]) return;
    const s = a.slides[r].querySelector('[loading="lazy"]');
    s && s.removeAttribute('loading');
  },
  wo = (a) => {
    if (!a || a.destroyed || !a.params) return;
    let r = a.params.lazyPreloadPrevNext;
    const s = a.slides.length;
    if (!s || !r || r < 0) return;
    r = Math.min(r, s);
    const i =
        a.params.slidesPerView === 'auto' ?
          a.slidesPerViewDynamic()
        : Math.ceil(a.params.slidesPerView),
      c = a.activeIndex;
    if (a.params.grid && a.params.grid.rows > 1) {
      const h = c,
        y = [h - r];
      (y.push(...Array.from({ length: r }).map((d, p) => h + i + p)),
        a.slides.forEach((d, p) => {
          y.includes(d.column) && zo(a, p);
        }));
      return;
    }
    const f = c + i - 1;
    if (a.params.rewind || a.params.loop)
      for (let h = c - r; h <= f + r; h += 1) {
        const y = ((h % s) + s) % s;
        (y < c || y > f) && zo(a, y);
      }
    else
      for (let h = Math.max(c - r, 0); h <= Math.min(f + r, s - 1); h += 1)
        h !== c && (h > f || h < c) && zo(a, h);
  };
function V_(a) {
  const { slidesGrid: r, params: s } = a,
    i = a.rtlTranslate ? a.translate : -a.translate;
  let c;
  for (let f = 0; f < r.length; f += 1)
    typeof r[f + 1] < 'u' ?
      i >= r[f] && i < r[f + 1] - (r[f + 1] - r[f]) / 2 ?
        (c = f)
      : i >= r[f] && i < r[f + 1] && (c = f + 1)
    : i >= r[f] && (c = f);
  return (s.normalizeSlideIndex && (c < 0 || typeof c > 'u') && (c = 0), c);
}
function X_(a) {
  const r = this,
    s = r.rtlTranslate ? r.translate : -r.translate,
    { snapGrid: i, params: c, activeIndex: f, realIndex: h, snapIndex: y } = r;
  let d = a,
    p;
  const b = (S) => {
    let j = S - r.virtual.slidesBefore;
    return (
      j < 0 && (j = r.virtual.slides.length + j),
      j >= r.virtual.slides.length && (j -= r.virtual.slides.length),
      j
    );
  };
  if ((typeof d > 'u' && (d = V_(r)), i.indexOf(s) >= 0)) p = i.indexOf(s);
  else {
    const S = Math.min(c.slidesPerGroupSkip, d);
    p = S + Math.floor((d - S) / c.slidesPerGroup);
  }
  if ((p >= i.length && (p = i.length - 1), d === f && !r.params.loop)) {
    p !== y && ((r.snapIndex = p), r.emit('snapIndexChange'));
    return;
  }
  if (d === f && r.params.loop && r.virtual && r.params.virtual.enabled) {
    r.realIndex = b(d);
    return;
  }
  const v = r.grid && c.grid && c.grid.rows > 1;
  let C;
  if (r.virtual && c.virtual.enabled) c.loop ? (C = b(d)) : (C = d);
  else if (v) {
    const S = r.slides.find((D) => D.column === d);
    let j = parseInt(S.getAttribute('data-swiper-slide-index'), 10);
    (Number.isNaN(j) && (j = Math.max(r.slides.indexOf(S), 0)),
      (C = Math.floor(j / c.grid.rows)));
  } else if (r.slides[d]) {
    const S = r.slides[d].getAttribute('data-swiper-slide-index');
    S ? (C = parseInt(S, 10)) : (C = d);
  } else C = d;
  (Object.assign(r, {
    previousSnapIndex: y,
    snapIndex: p,
    previousRealIndex: h,
    realIndex: C,
    previousIndex: f,
    activeIndex: d,
  }),
    r.initialized && wo(r),
    r.emit('activeIndexChange'),
    r.emit('snapIndexChange'),
    (r.initialized || r.params.runCallbacksOnInit) &&
      (h !== C && r.emit('realIndexChange'), r.emit('slideChange')));
}
function Q_(a, r) {
  const s = this,
    i = s.params;
  let c = a.closest(`.${i.slideClass}, swiper-slide`);
  !c &&
    s.isElement &&
    r &&
    r.length > 1 &&
    r.includes(a) &&
    [...r.slice(r.indexOf(a) + 1, r.length)].forEach((y) => {
      !c && y.matches && y.matches(`.${i.slideClass}, swiper-slide`) && (c = y);
    });
  let f = !1,
    h;
  if (c) {
    for (let y = 0; y < s.slides.length; y += 1)
      if (s.slides[y] === c) {
        ((f = !0), (h = y));
        break;
      }
  }
  if (c && f)
    ((s.clickedSlide = c),
      s.virtual && s.params.virtual.enabled ?
        (s.clickedIndex = parseInt(
          c.getAttribute('data-swiper-slide-index'),
          10,
        ))
      : (s.clickedIndex = h));
  else {
    ((s.clickedSlide = void 0), (s.clickedIndex = void 0));
    return;
  }
  i.slideToClickedSlide &&
    s.clickedIndex !== void 0 &&
    s.clickedIndex !== s.activeIndex &&
    s.slideToClickedSlide();
}
var Z_ = {
  updateSize: w_,
  updateSlides: B_,
  updateAutoHeight: H_,
  updateSlidesOffset: U_,
  updateSlidesProgress: G_,
  updateProgress: q_,
  updateSlidesClasses: Y_,
  updateActiveIndex: X_,
  updateClickedSlide: Q_,
};
function $_(a = this.isHorizontal() ? 'x' : 'y') {
  const r = this,
    { params: s, rtlTranslate: i, translate: c, wrapperEl: f } = r;
  if (s.virtualTranslate) return i ? -c : c;
  if (s.cssMode) return c;
  let h = T_(f, a);
  return ((h += r.cssOverflowAdjustment()), i && (h = -h), h || 0);
}
function k_(a, r) {
  const s = this,
    { rtlTranslate: i, params: c, wrapperEl: f, progress: h } = s;
  let y = 0,
    d = 0;
  const p = 0;
  (s.isHorizontal() ? (y = i ? -a : a) : (d = a),
    c.roundLengths && ((y = Math.floor(y)), (d = Math.floor(d))),
    (s.previousTranslate = s.translate),
    (s.translate = s.isHorizontal() ? y : d),
    c.cssMode ?
      (f[s.isHorizontal() ? 'scrollLeft' : 'scrollTop'] =
        s.isHorizontal() ? -y : -d)
    : c.virtualTranslate ||
      (s.isHorizontal() ?
        (y -= s.cssOverflowAdjustment())
      : (d -= s.cssOverflowAdjustment()),
      (f.style.transform = `translate3d(${y}px, ${d}px, ${p}px)`)));
  let b;
  const v = s.maxTranslate() - s.minTranslate();
  (v === 0 ? (b = 0) : (b = (a - s.minTranslate()) / v),
    b !== h && s.updateProgress(a),
    s.emit('setTranslate', s.translate, r));
}
function K_() {
  return -this.snapGrid[0];
}
function J_() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function F_(a = 0, r = this.params.speed, s = !0, i = !0, c) {
  const f = this,
    { params: h, wrapperEl: y } = f;
  if (f.animating && h.preventInteractionOnTransition) return !1;
  const d = f.minTranslate(),
    p = f.maxTranslate();
  let b;
  if (
    (i && a > d ? (b = d)
    : i && a < p ? (b = p)
    : (b = a),
    f.updateProgress(b),
    h.cssMode)
  ) {
    const v = f.isHorizontal();
    if (r === 0) y[v ? 'scrollLeft' : 'scrollTop'] = -b;
    else {
      if (!f.support.smoothScroll)
        return (
          Fh({ swiper: f, targetPosition: -b, side: v ? 'left' : 'top' }),
          !0
        );
      y.scrollTo({ [v ? 'left' : 'top']: -b, behavior: 'smooth' });
    }
    return !0;
  }
  return (
    r === 0 ?
      (f.setTransition(0),
      f.setTranslate(b),
      s && (f.emit('beforeTransitionStart', r, c), f.emit('transitionEnd')))
    : (f.setTransition(r),
      f.setTranslate(b),
      s && (f.emit('beforeTransitionStart', r, c), f.emit('transitionStart')),
      f.animating ||
        ((f.animating = !0),
        f.onTranslateToWrapperTransitionEnd ||
          (f.onTranslateToWrapperTransitionEnd = function (C) {
            !f ||
              f.destroyed ||
              (C.target === this &&
                (f.wrapperEl.removeEventListener(
                  'transitionend',
                  f.onTranslateToWrapperTransitionEnd,
                ),
                (f.onTranslateToWrapperTransitionEnd = null),
                delete f.onTranslateToWrapperTransitionEnd,
                (f.animating = !1),
                s && f.emit('transitionEnd')));
          }),
        f.wrapperEl.addEventListener(
          'transitionend',
          f.onTranslateToWrapperTransitionEnd,
        ))),
    !0
  );
}
var P_ = {
  getTranslate: $_,
  setTranslate: k_,
  minTranslate: K_,
  maxTranslate: J_,
  translateTo: F_,
};
function W_(a, r) {
  const s = this;
  (s.params.cssMode ||
    ((s.wrapperEl.style.transitionDuration = `${a}ms`),
    (s.wrapperEl.style.transitionDelay = a === 0 ? '0ms' : '')),
    s.emit('setTransition', a, r));
}
function tp({ swiper: a, runCallbacks: r, direction: s, step: i }) {
  const { activeIndex: c, previousIndex: f } = a;
  let h = s;
  (h ||
    (c > f ? (h = 'next')
    : c < f ? (h = 'prev')
    : (h = 'reset')),
    a.emit(`transition${i}`),
    r && h === 'reset' ?
      a.emit(`slideResetTransition${i}`)
    : r &&
      c !== f &&
      (a.emit(`slideChangeTransition${i}`),
      h === 'next' ?
        a.emit(`slideNextTransition${i}`)
      : a.emit(`slidePrevTransition${i}`)));
}
function I_(a = !0, r) {
  const s = this,
    { params: i } = s;
  i.cssMode ||
    (i.autoHeight && s.updateAutoHeight(),
    tp({ swiper: s, runCallbacks: a, direction: r, step: 'Start' }));
}
function eb(a = !0, r) {
  const s = this,
    { params: i } = s;
  ((s.animating = !1),
    !i.cssMode &&
      (s.setTransition(0),
      tp({ swiper: s, runCallbacks: a, direction: r, step: 'End' })));
}
var tb = { setTransition: W_, transitionStart: I_, transitionEnd: eb };
function lb(a = 0, r, s = !0, i, c) {
  typeof a == 'string' && (a = parseInt(a, 10));
  const f = this;
  let h = a;
  h < 0 && (h = 0);
  const {
    params: y,
    snapGrid: d,
    slidesGrid: p,
    previousIndex: b,
    activeIndex: v,
    rtlTranslate: C,
    wrapperEl: S,
    enabled: j,
  } = f;
  if (
    (!j && !i && !c) ||
    f.destroyed ||
    (f.animating && y.preventInteractionOnTransition)
  )
    return !1;
  typeof r > 'u' && (r = f.params.speed);
  const D = Math.min(f.params.slidesPerGroupSkip, h);
  let z = D + Math.floor((h - D) / f.params.slidesPerGroup);
  z >= d.length && (z = d.length - 1);
  const x = -d[z];
  if (y.normalizeSlideIndex)
    for (let K = 0; K < p.length; K += 1) {
      const H = -Math.floor(x * 100),
        ne = Math.floor(p[K] * 100),
        J = Math.floor(p[K + 1] * 100);
      typeof p[K + 1] < 'u' ?
        H >= ne && H < J - (J - ne) / 2 ?
          (h = K)
        : H >= ne && H < J && (h = K + 1)
      : H >= ne && (h = K);
    }
  if (
    f.initialized &&
    h !== v &&
    ((!f.allowSlideNext &&
      (C ?
        x > f.translate && x > f.minTranslate()
      : x < f.translate && x < f.minTranslate())) ||
      (!f.allowSlidePrev &&
        x > f.translate &&
        x > f.maxTranslate() &&
        (v || 0) !== h))
  )
    return !1;
  (h !== (b || 0) && s && f.emit('beforeSlideChangeStart'),
    f.updateProgress(x));
  let T;
  h > v ? (T = 'next')
  : h < v ? (T = 'prev')
  : (T = 'reset');
  const O = f.virtual && f.params.virtual.enabled;
  if (!(O && c) && ((C && -x === f.translate) || (!C && x === f.translate)))
    return (
      f.updateActiveIndex(h),
      y.autoHeight && f.updateAutoHeight(),
      f.updateSlidesClasses(),
      y.effect !== 'slide' && f.setTranslate(x),
      T !== 'reset' && (f.transitionStart(s, T), f.transitionEnd(s, T)),
      !1
    );
  if (y.cssMode) {
    const K = f.isHorizontal(),
      H = C ? x : -x;
    if (r === 0)
      (O &&
        ((f.wrapperEl.style.scrollSnapType = 'none'),
        (f._immediateVirtual = !0)),
        O && !f._cssModeVirtualInitialSet && f.params.initialSlide > 0 ?
          ((f._cssModeVirtualInitialSet = !0),
          requestAnimationFrame(() => {
            S[K ? 'scrollLeft' : 'scrollTop'] = H;
          }))
        : (S[K ? 'scrollLeft' : 'scrollTop'] = H),
        O &&
          requestAnimationFrame(() => {
            ((f.wrapperEl.style.scrollSnapType = ''),
              (f._immediateVirtual = !1));
          }));
    else {
      if (!f.support.smoothScroll)
        return (
          Fh({ swiper: f, targetPosition: H, side: K ? 'left' : 'top' }),
          !0
        );
      S.scrollTo({ [K ? 'left' : 'top']: H, behavior: 'smooth' });
    }
    return !0;
  }
  const I = ep().isSafari;
  return (
    O && !c && I && f.isElement && f.virtual.update(!1, !1, h),
    f.setTransition(r),
    f.setTranslate(x),
    f.updateActiveIndex(h),
    f.updateSlidesClasses(),
    f.emit('beforeTransitionStart', r, i),
    f.transitionStart(s, T),
    r === 0 ?
      f.transitionEnd(s, T)
    : f.animating ||
      ((f.animating = !0),
      f.onSlideToWrapperTransitionEnd ||
        (f.onSlideToWrapperTransitionEnd = function (H) {
          !f ||
            f.destroyed ||
            (H.target === this &&
              (f.wrapperEl.removeEventListener(
                'transitionend',
                f.onSlideToWrapperTransitionEnd,
              ),
              (f.onSlideToWrapperTransitionEnd = null),
              delete f.onSlideToWrapperTransitionEnd,
              f.transitionEnd(s, T)));
        }),
      f.wrapperEl.addEventListener(
        'transitionend',
        f.onSlideToWrapperTransitionEnd,
      )),
    !0
  );
}
function ab(a = 0, r, s = !0, i) {
  typeof a == 'string' && (a = parseInt(a, 10));
  const c = this;
  if (c.destroyed) return;
  typeof r > 'u' && (r = c.params.speed);
  const f = c.grid && c.params.grid && c.params.grid.rows > 1;
  let h = a;
  if (c.params.loop)
    if (c.virtual && c.params.virtual.enabled) h = h + c.virtual.slidesBefore;
    else {
      let y;
      if (f) {
        const D = h * c.params.grid.rows;
        y = c.slides.find(
          (z) => z.getAttribute('data-swiper-slide-index') * 1 === D,
        ).column;
      } else y = c.getSlideIndexByData(h);
      const d =
          f ? Math.ceil(c.slides.length / c.params.grid.rows) : c.slides.length,
        {
          centeredSlides: p,
          slidesOffsetBefore: b,
          slidesOffsetAfter: v,
        } = c.params,
        C = p || !!b || !!v;
      let S = c.params.slidesPerView;
      S === 'auto' ?
        (S = c.slidesPerViewDynamic())
      : ((S = Math.ceil(parseFloat(c.params.slidesPerView, 10))),
        C && S % 2 === 0 && (S = S + 1));
      let j = d - y < S;
      if (
        (C && (j = j || y < Math.ceil(S / 2)),
        i && C && c.params.slidesPerView !== 'auto' && !f && (j = !1),
        j)
      ) {
        const D =
          C ?
            y < c.activeIndex ?
              'prev'
            : 'next'
          : y - c.activeIndex - 1 < c.params.slidesPerView ? 'next'
          : 'prev';
        c.loopFix({
          direction: D,
          slideTo: !0,
          activeSlideIndex: D === 'next' ? y + 1 : y - d + 1,
          slideRealIndex: D === 'next' ? c.realIndex : void 0,
        });
      }
      if (f) {
        const D = h * c.params.grid.rows;
        h = c.slides.find(
          (z) => z.getAttribute('data-swiper-slide-index') * 1 === D,
        ).column;
      } else h = c.getSlideIndexByData(h);
    }
  return (
    requestAnimationFrame(() => {
      c.slideTo(h, r, s, i);
    }),
    c
  );
}
function nb(a, r = !0, s) {
  const i = this,
    { enabled: c, params: f, animating: h } = i;
  if (!c || i.destroyed) return i;
  typeof a > 'u' && (a = i.params.speed);
  let y = f.slidesPerGroup;
  f.slidesPerView === 'auto' &&
    f.slidesPerGroup === 1 &&
    f.slidesPerGroupAuto &&
    (y = Math.max(i.slidesPerViewDynamic('current', !0), 1));
  const d = i.activeIndex < f.slidesPerGroupSkip ? 1 : y,
    p = i.virtual && f.virtual.enabled;
  if (f.loop) {
    if (h && !p && f.loopPreventsSliding) return !1;
    if (
      (i.loopFix({ direction: 'next' }),
      (i._clientLeft = i.wrapperEl.clientLeft),
      i.activeIndex === i.slides.length - 1 && f.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          i.slideTo(i.activeIndex + d, a, r, s);
        }),
        !0
      );
  }
  return f.rewind && i.isEnd ?
      i.slideTo(0, a, r, s)
    : i.slideTo(i.activeIndex + d, a, r, s);
}
function ib(a, r = !0, s) {
  const i = this,
    {
      params: c,
      snapGrid: f,
      slidesGrid: h,
      rtlTranslate: y,
      enabled: d,
      animating: p,
    } = i;
  if (!d || i.destroyed) return i;
  typeof a > 'u' && (a = i.params.speed);
  const b = i.virtual && c.virtual.enabled;
  if (c.loop) {
    if (p && !b && c.loopPreventsSliding) return !1;
    (i.loopFix({ direction: 'prev' }),
      (i._clientLeft = i.wrapperEl.clientLeft));
  }
  const v = y ? i.translate : -i.translate;
  function C(T) {
    return T < 0 ? -Math.floor(Math.abs(T)) : Math.floor(T);
  }
  const S = C(v),
    j = f.map((T) => C(T)),
    D = c.freeMode && c.freeMode.enabled;
  let z = f[j.indexOf(S) - 1];
  if (typeof z > 'u' && (c.cssMode || D)) {
    let T;
    (f.forEach((O, V) => {
      S >= O && (T = V);
    }),
      typeof T < 'u' && (z = D ? f[T] : f[T > 0 ? T - 1 : T]));
  }
  let x = 0;
  if (
    (typeof z < 'u' &&
      ((x = h.indexOf(z)),
      x < 0 && (x = i.activeIndex - 1),
      c.slidesPerView === 'auto' &&
        c.slidesPerGroup === 1 &&
        c.slidesPerGroupAuto &&
        ((x = x - i.slidesPerViewDynamic('previous', !0) + 1),
        (x = Math.max(x, 0)))),
    c.rewind && i.isBeginning)
  ) {
    const T =
      i.params.virtual && i.params.virtual.enabled && i.virtual ?
        i.virtual.slides.length - 1
      : i.slides.length - 1;
    return i.slideTo(T, a, r, s);
  } else if (c.loop && i.activeIndex === 0 && c.cssMode)
    return (
      requestAnimationFrame(() => {
        i.slideTo(x, a, r, s);
      }),
      !0
    );
  return i.slideTo(x, a, r, s);
}
function sb(a, r = !0, s) {
  const i = this;
  if (!i.destroyed)
    return (
      typeof a > 'u' && (a = i.params.speed),
      i.slideTo(i.activeIndex, a, r, s)
    );
}
function rb(a, r = !0, s, i = 0.5) {
  const c = this;
  if (c.destroyed) return;
  typeof a > 'u' && (a = c.params.speed);
  let f = c.activeIndex;
  const h = Math.min(c.params.slidesPerGroupSkip, f),
    y = h + Math.floor((f - h) / c.params.slidesPerGroup),
    d = c.rtlTranslate ? c.translate : -c.translate;
  if (d >= c.snapGrid[y]) {
    const p = c.snapGrid[y],
      b = c.snapGrid[y + 1];
    d - p > (b - p) * i && (f += c.params.slidesPerGroup);
  } else {
    const p = c.snapGrid[y - 1],
      b = c.snapGrid[y];
    d - p <= (b - p) * i && (f -= c.params.slidesPerGroup);
  }
  return (
    (f = Math.max(f, 0)),
    (f = Math.min(f, c.slidesGrid.length - 1)),
    c.slideTo(f, a, r, s)
  );
}
function ub() {
  const a = this;
  if (a.destroyed) return;
  const { params: r, slidesEl: s } = a,
    i = r.slidesPerView === 'auto' ? a.slidesPerViewDynamic() : r.slidesPerView;
  let c = a.getSlideIndexWhenGrid(a.clickedIndex),
    f;
  const h = a.isElement ? 'swiper-slide' : `.${r.slideClass}`,
    y = a.grid && a.params.grid && a.params.grid.rows > 1;
  if (r.loop) {
    if (a.animating) return;
    ((f = parseInt(a.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
      r.centeredSlides ? a.slideToLoop(f)
      : (
        c >
        (y ?
          (a.slides.length - i) / 2 - (a.params.grid.rows - 1)
        : a.slides.length - i)
      ) ?
        (a.loopFix(),
        (c = a.getSlideIndex(Kt(s, `${h}[data-swiper-slide-index="${f}"]`)[0])),
        Jh(() => {
          a.slideTo(c);
        }))
      : a.slideTo(c));
  } else a.slideTo(c);
}
var ob = {
  slideTo: lb,
  slideToLoop: ab,
  slideNext: nb,
  slidePrev: ib,
  slideReset: sb,
  slideToClosest: rb,
  slideToClickedSlide: ub,
};
function cb(a, r) {
  const s = this,
    { params: i, slidesEl: c } = s;
  if (!i.loop || (s.virtual && s.params.virtual.enabled)) return;
  const f = () => {
      Kt(c, `.${i.slideClass}, swiper-slide`).forEach((j, D) => {
        j.setAttribute('data-swiper-slide-index', D);
      });
    },
    h = () => {
      const S = Kt(c, `.${i.slideBlankClass}`);
      (S.forEach((j) => {
        j.remove();
      }),
        S.length > 0 && (s.recalcSlides(), s.updateSlides()));
    },
    y = s.grid && i.grid && i.grid.rows > 1;
  i.loopAddBlankSlides && (i.slidesPerGroup > 1 || y) && h();
  const d = i.slidesPerGroup * (y ? i.grid.rows : 1),
    p = s.slides.length % d !== 0,
    b = y && s.slides.length % i.grid.rows !== 0,
    v = (S) => {
      for (let j = 0; j < S; j += 1) {
        const D =
          s.isElement ?
            Ys('swiper-slide', [i.slideBlankClass])
          : Ys('div', [i.slideClass, i.slideBlankClass]);
        s.slidesEl.append(D);
      }
    };
  if (p) {
    if (i.loopAddBlankSlides) {
      const S = d - (s.slides.length % d);
      (v(S), s.recalcSlides(), s.updateSlides());
    } else
      qs(
        'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)',
      );
    f();
  } else if (b) {
    if (i.loopAddBlankSlides) {
      const S = i.grid.rows - (s.slides.length % i.grid.rows);
      (v(S), s.recalcSlides(), s.updateSlides());
    } else
      qs(
        'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)',
      );
    f();
  } else f();
  const C = i.centeredSlides || !!i.slidesOffsetBefore || !!i.slidesOffsetAfter;
  s.loopFix({ slideRealIndex: a, direction: C ? void 0 : 'next', initial: r });
}
function fb({
  slideRealIndex: a,
  slideTo: r = !0,
  direction: s,
  setTranslate: i,
  activeSlideIndex: c,
  initial: f,
  byController: h,
  byMousewheel: y,
} = {}) {
  const d = this;
  if (!d.params.loop) return;
  d.emit('beforeLoopFix');
  const {
      slides: p,
      allowSlidePrev: b,
      allowSlideNext: v,
      slidesEl: C,
      params: S,
    } = d,
    {
      centeredSlides: j,
      slidesOffsetBefore: D,
      slidesOffsetAfter: z,
      initialSlide: x,
    } = S,
    T = j || !!D || !!z;
  if (
    ((d.allowSlidePrev = !0),
    (d.allowSlideNext = !0),
    d.virtual && S.virtual.enabled)
  ) {
    (r &&
      (!T && d.snapIndex === 0 ? d.slideTo(d.virtual.slides.length, 0, !1, !0)
      : T && d.snapIndex < S.slidesPerView ?
        d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0)
      : d.snapIndex === d.snapGrid.length - 1 &&
        d.slideTo(d.virtual.slidesBefore, 0, !1, !0)),
      (d.allowSlidePrev = b),
      (d.allowSlideNext = v),
      d.emit('loopFix'));
    return;
  }
  let O = S.slidesPerView;
  O === 'auto' ?
    (O = d.slidesPerViewDynamic())
  : ((O = Math.ceil(parseFloat(S.slidesPerView, 10))),
    T && O % 2 === 0 && (O = O + 1));
  const V = S.slidesPerGroupAuto ? O : S.slidesPerGroup;
  let k = T ? Math.max(V, Math.ceil(O / 2)) : V;
  (k % V !== 0 && (k += V - (k % V)),
    (k += S.loopAdditionalSlides),
    (d.loopedSlides = k));
  const I = d.grid && S.grid && S.grid.rows > 1;
  p.length < O + k || (d.params.effect === 'cards' && p.length < O + k * 2) ?
    qs(
      'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters',
    )
  : I &&
    S.grid.fill === 'row' &&
    qs(
      'Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`',
    );
  const K = [],
    H = [],
    ne = I ? Math.ceil(p.length / S.grid.rows) : p.length,
    J = f && ne - x < O && !T;
  let F = J ? x : d.activeIndex;
  typeof c > 'u' ?
    (c = d.getSlideIndex(
      p.find((X) => X.classList.contains(S.slideActiveClass)),
    ))
  : (F = c);
  const P = s === 'next' || !s,
    ue = s === 'prev' || !s;
  let re = 0,
    pe = 0;
  const Z = (I ? p[c].column : c) + (T && typeof i > 'u' ? -O / 2 + 0.5 : 0);
  if (Z < k) {
    re = Math.max(k - Z, V);
    for (let X = 0; X < k - Z; X += 1) {
      const ee = X - Math.floor(X / ne) * ne;
      if (I) {
        const oe = ne - ee - 1;
        for (let M = p.length - 1; M >= 0; M -= 1)
          p[M].column === oe && K.push(M);
      } else K.push(ne - ee - 1);
    }
  } else if (Z + O > ne - k) {
    ((pe = Math.max(Z - (ne - k * 2), V)),
      J && (pe = Math.max(pe, O - ne + x + 1)));
    for (let X = 0; X < pe; X += 1) {
      const ee = X - Math.floor(X / ne) * ne;
      I ?
        p.forEach((oe, M) => {
          oe.column === ee && H.push(M);
        })
      : H.push(ee);
    }
  }
  if (
    ((d.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      d.__preventObserver__ = !1;
    }),
    d.params.effect === 'cards' &&
      p.length < O + k * 2 &&
      (H.includes(c) && H.splice(H.indexOf(c), 1),
      K.includes(c) && K.splice(K.indexOf(c), 1)),
    ue &&
      K.forEach((X) => {
        ((p[X].swiperLoopMoveDOM = !0),
          C.prepend(p[X]),
          (p[X].swiperLoopMoveDOM = !1));
      }),
    P &&
      H.forEach((X) => {
        ((p[X].swiperLoopMoveDOM = !0),
          C.append(p[X]),
          (p[X].swiperLoopMoveDOM = !1));
      }),
    d.recalcSlides(),
    S.slidesPerView === 'auto' ?
      d.updateSlides()
    : I &&
      ((K.length > 0 && ue) || (H.length > 0 && P)) &&
      d.slides.forEach((X, ee) => {
        d.grid.updateSlide(ee, X, d.slides);
      }),
    S.watchSlidesProgress && d.updateSlidesOffset(),
    r)
  ) {
    if (K.length > 0 && ue) {
      if (typeof a > 'u') {
        const X = d.slidesGrid[F],
          oe = d.slidesGrid[F + re] - X;
        y ?
          d.setTranslate(d.translate - oe)
        : (d.slideTo(F + Math.ceil(re), 0, !1, !0),
          i &&
            ((d.touchEventsData.startTranslate =
              d.touchEventsData.startTranslate - oe),
            (d.touchEventsData.currentTranslate =
              d.touchEventsData.currentTranslate - oe)));
      } else if (i) {
        const X = I ? K.length / S.grid.rows : K.length;
        (d.slideTo(d.activeIndex + X, 0, !1, !0),
          (d.touchEventsData.currentTranslate = d.translate));
      }
    } else if (H.length > 0 && P)
      if (typeof a > 'u') {
        const X = d.slidesGrid[F],
          oe = d.slidesGrid[F - pe] - X;
        y ?
          d.setTranslate(d.translate - oe)
        : (d.slideTo(F - pe, 0, !1, !0),
          i &&
            ((d.touchEventsData.startTranslate =
              d.touchEventsData.startTranslate - oe),
            (d.touchEventsData.currentTranslate =
              d.touchEventsData.currentTranslate - oe)));
      } else {
        const X = I ? H.length / S.grid.rows : H.length;
        d.slideTo(d.activeIndex - X, 0, !1, !0);
      }
  }
  if (
    ((d.allowSlidePrev = b),
    (d.allowSlideNext = v),
    d.controller && d.controller.control && !h)
  ) {
    const X = {
      slideRealIndex: a,
      direction: s,
      setTranslate: i,
      activeSlideIndex: c,
      byController: !0,
    };
    Array.isArray(d.controller.control) ?
      d.controller.control.forEach((ee) => {
        !ee.destroyed &&
          ee.params.loop &&
          ee.loopFix({
            ...X,
            slideTo: ee.params.slidesPerView === S.slidesPerView ? r : !1,
          });
      })
    : d.controller.control instanceof d.constructor &&
      d.controller.control.params.loop &&
      d.controller.control.loopFix({
        ...X,
        slideTo:
          d.controller.control.params.slidesPerView === S.slidesPerView ?
            r
          : !1,
      });
  }
  d.emit('loopFix');
}
function db() {
  const a = this,
    { params: r, slidesEl: s } = a;
  if (!r.loop || !s || (a.virtual && a.params.virtual.enabled)) return;
  a.recalcSlides();
  const i = [];
  (a.slides.forEach((c) => {
    const f =
      typeof c.swiperSlideIndex > 'u' ?
        c.getAttribute('data-swiper-slide-index') * 1
      : c.swiperSlideIndex;
    i[f] = c;
  }),
    a.slides.forEach((c) => {
      c.removeAttribute('data-swiper-slide-index');
    }),
    i.forEach((c) => {
      s.append(c);
    }),
    a.recalcSlides(),
    a.slideTo(a.realIndex, 0));
}
var mb = { loopCreate: cb, loopFix: fb, loopDestroy: db };
function hb(a) {
  const r = this;
  if (
    !r.params.simulateTouch ||
    (r.params.watchOverflow && r.isLocked) ||
    r.params.cssMode
  )
    return;
  const s = r.params.touchEventsTarget === 'container' ? r.el : r.wrapperEl;
  (r.isElement && (r.__preventObserver__ = !0),
    (s.style.cursor = 'move'),
    (s.style.cursor = a ? 'grabbing' : 'grab'),
    r.isElement &&
      requestAnimationFrame(() => {
        r.__preventObserver__ = !1;
      }));
}
function pb() {
  const a = this;
  (a.params.watchOverflow && a.isLocked) ||
    a.params.cssMode ||
    (a.isElement && (a.__preventObserver__ = !0),
    (a[
      a.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'
    ].style.cursor = ''),
    a.isElement &&
      requestAnimationFrame(() => {
        a.__preventObserver__ = !1;
      }));
}
var vb = { setGrabCursor: hb, unsetGrabCursor: pb };
function gb(a, r = this) {
  function s(i) {
    if (!i || i === Jt() || i === ot()) return null;
    i.assignedSlot && (i = i.assignedSlot);
    const c = i.closest(a);
    return !c && !i.getRootNode ? null : c || s(i.getRootNode().host);
  }
  return s(r);
}
function mh(a, r, s) {
  const i = ot(),
    { params: c } = a,
    f = c.edgeSwipeDetection,
    h = c.edgeSwipeThreshold;
  return (
    f && (s <= h || s >= i.innerWidth - h) ?
      f === 'prevent' ?
        (r.preventDefault(), !0)
      : !1
    : !0
  );
}
function yb(a) {
  const r = this,
    s = Jt();
  let i = a;
  i.originalEvent && (i = i.originalEvent);
  const c = r.touchEventsData;
  if (i.type === 'pointerdown') {
    if (c.pointerId !== null && c.pointerId !== i.pointerId) return;
    c.pointerId = i.pointerId;
  } else
    i.type === 'touchstart' &&
      i.targetTouches.length === 1 &&
      (c.touchId = i.targetTouches[0].identifier);
  if (i.type === 'touchstart') {
    mh(r, i, i.targetTouches[0].pageX);
    return;
  }
  const { params: f, touches: h, enabled: y } = r;
  if (
    !y ||
    (!f.simulateTouch && i.pointerType === 'mouse') ||
    (r.animating && f.preventInteractionOnTransition)
  )
    return;
  !r.animating && f.cssMode && f.loop && r.loopFix();
  let d = i.target;
  if (
    (f.touchEventsTarget === 'wrapper' && !M_(d, r.wrapperEl)) ||
    ('which' in i && i.which === 3) ||
    ('button' in i && i.button > 0) ||
    (c.isTouched && c.isMoved)
  )
    return;
  const p = !!f.noSwipingClass && f.noSwipingClass !== '',
    b = i.composedPath ? i.composedPath() : i.path;
  p && i.target && i.target.shadowRoot && b && (d = b[0]);
  const v = f.noSwipingSelector ? f.noSwipingSelector : `.${f.noSwipingClass}`,
    C = !!(i.target && i.target.shadowRoot);
  if (f.noSwiping && (C ? gb(v, d) : d.closest(v))) {
    r.allowClick = !0;
    return;
  }
  if (f.swipeHandler && !d.closest(f.swipeHandler)) return;
  ((h.currentX = i.pageX), (h.currentY = i.pageY));
  const S = h.currentX,
    j = h.currentY;
  if (!mh(r, i, S)) return;
  (Object.assign(c, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (h.startX = S),
    (h.startY = j),
    (c.touchStartTime = Gs()),
    (r.allowClick = !0),
    r.updateSize(),
    (r.swipeDirection = void 0),
    f.threshold > 0 && (c.allowThresholdMove = !1));
  let D = !0;
  (d.matches(c.focusableElements) &&
    ((D = !1), d.nodeName === 'SELECT' && (c.isTouched = !1)),
    s.activeElement &&
      s.activeElement.matches(c.focusableElements) &&
      s.activeElement !== d &&
      (i.pointerType === 'mouse' ||
        (i.pointerType !== 'mouse' && !d.matches(c.focusableElements))) &&
      s.activeElement.blur());
  const z = D && r.allowTouchMove && f.touchStartPreventDefault;
  ((f.touchStartForcePreventDefault || z) &&
    !d.isContentEditable &&
    i.preventDefault(),
    f.freeMode &&
      f.freeMode.enabled &&
      r.freeMode &&
      r.animating &&
      !f.cssMode &&
      r.freeMode.onTouchStart(),
    r.emit('touchStart', i));
}
function _b(a) {
  const r = Jt(),
    s = this,
    i = s.touchEventsData,
    { params: c, touches: f, rtlTranslate: h, enabled: y } = s;
  if (!y || (!c.simulateTouch && a.pointerType === 'mouse')) return;
  let d = a;
  if (
    (d.originalEvent && (d = d.originalEvent),
    d.type === 'pointermove' &&
      (i.touchId !== null || d.pointerId !== i.pointerId))
  )
    return;
  let p;
  if (d.type === 'touchmove') {
    if (
      ((p = [...d.changedTouches].find((k) => k.identifier === i.touchId)),
      !p || p.identifier !== i.touchId)
    )
      return;
  } else p = d;
  if (!i.isTouched) {
    i.startMoving && i.isScrolling && s.emit('touchMoveOpposite', d);
    return;
  }
  const b = p.pageX,
    v = p.pageY;
  if (d.preventedByNestedSwiper) {
    ((f.startX = b), (f.startY = v));
    return;
  }
  if (!s.allowTouchMove) {
    (d.target.matches(i.focusableElements) || (s.allowClick = !1),
      i.isTouched &&
        (Object.assign(f, { startX: b, startY: v, currentX: b, currentY: v }),
        (i.touchStartTime = Gs())));
    return;
  }
  if (c.touchReleaseOnEdges && !c.loop)
    if (s.isVertical()) {
      if (
        (v < f.startY && s.translate <= s.maxTranslate()) ||
        (v > f.startY && s.translate >= s.minTranslate())
      ) {
        ((i.isTouched = !1), (i.isMoved = !1));
        return;
      }
    } else {
      if (
        h &&
        ((b > f.startX && -s.translate <= s.maxTranslate()) ||
          (b < f.startX && -s.translate >= s.minTranslate()))
      )
        return;
      if (
        !h &&
        ((b < f.startX && s.translate <= s.maxTranslate()) ||
          (b > f.startX && s.translate >= s.minTranslate()))
      )
        return;
    }
  if (
    (r.activeElement &&
      r.activeElement.matches(i.focusableElements) &&
      r.activeElement !== d.target &&
      d.pointerType !== 'mouse' &&
      r.activeElement.blur(),
    r.activeElement &&
      d.target === r.activeElement &&
      d.target.matches(i.focusableElements))
  ) {
    ((i.isMoved = !0), (s.allowClick = !1));
    return;
  }
  (i.allowTouchCallbacks && s.emit('touchMove', d),
    (f.previousX = f.currentX),
    (f.previousY = f.currentY),
    (f.currentX = b),
    (f.currentY = v));
  const C = f.currentX - f.startX,
    S = f.currentY - f.startY;
  if (s.params.threshold && Math.sqrt(C ** 2 + S ** 2) < s.params.threshold)
    return;
  if (typeof i.isScrolling > 'u') {
    let k;
    (
      (s.isHorizontal() && f.currentY === f.startY) ||
      (s.isVertical() && f.currentX === f.startX)
    ) ?
      (i.isScrolling = !1)
    : C * C + S * S >= 25 &&
      ((k = (Math.atan2(Math.abs(S), Math.abs(C)) * 180) / Math.PI),
      (i.isScrolling =
        s.isHorizontal() ? k > c.touchAngle : 90 - k > c.touchAngle));
  }
  if (
    (i.isScrolling && s.emit('touchMoveOpposite', d),
    typeof i.startMoving > 'u' &&
      (f.currentX !== f.startX || f.currentY !== f.startY) &&
      (i.startMoving = !0),
    i.isScrolling ||
      (d.type === 'touchmove' && i.preventTouchMoveFromPointerMove))
  ) {
    i.isTouched = !1;
    return;
  }
  if (!i.startMoving) return;
  ((s.allowClick = !1),
    !c.cssMode && d.cancelable && d.preventDefault(),
    c.touchMoveStopPropagation && !c.nested && d.stopPropagation());
  let j = s.isHorizontal() ? C : S,
    D = s.isHorizontal() ? f.currentX - f.previousX : f.currentY - f.previousY;
  (c.oneWayMovement &&
    ((j = Math.abs(j) * (h ? 1 : -1)), (D = Math.abs(D) * (h ? 1 : -1))),
    (f.diff = j),
    (j *= c.touchRatio),
    h && ((j = -j), (D = -D)));
  const z = s.touchesDirection;
  ((s.swipeDirection = j > 0 ? 'prev' : 'next'),
    (s.touchesDirection = D > 0 ? 'prev' : 'next'));
  const x = s.params.loop && !c.cssMode,
    T =
      (s.touchesDirection === 'next' && s.allowSlideNext) ||
      (s.touchesDirection === 'prev' && s.allowSlidePrev);
  if (!i.isMoved) {
    if (
      (x && T && s.loopFix({ direction: s.swipeDirection }),
      (i.startTranslate = s.getTranslate()),
      s.setTransition(0),
      s.animating)
    ) {
      const k = new window.CustomEvent('transitionend', {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      s.wrapperEl.dispatchEvent(k);
    }
    ((i.allowMomentumBounce = !1),
      c.grabCursor &&
        (s.allowSlideNext === !0 || s.allowSlidePrev === !0) &&
        s.setGrabCursor(!0),
      s.emit('sliderFirstMove', d));
  }
  if (
    (new Date().getTime(),
    c._loopSwapReset !== !1 &&
      i.isMoved &&
      i.allowThresholdMove &&
      z !== s.touchesDirection &&
      x &&
      T &&
      Math.abs(j) >= 1)
  ) {
    (Object.assign(f, {
      startX: b,
      startY: v,
      currentX: b,
      currentY: v,
      startTranslate: i.currentTranslate,
    }),
      (i.loopSwapReset = !0),
      (i.startTranslate = i.currentTranslate));
    return;
  }
  (s.emit('sliderMove', d),
    (i.isMoved = !0),
    (i.currentTranslate = j + i.startTranslate));
  let O = !0,
    V = c.resistanceRatio;
  if (
    (c.touchReleaseOnEdges && (V = 0),
    j > 0 ?
      (x &&
        T &&
        i.allowThresholdMove &&
        i.currentTranslate >
          (c.centeredSlides ?
            s.minTranslate() -
            s.slidesSizesGrid[s.activeIndex + 1] -
            ((
              c.slidesPerView !== 'auto' &&
              s.slides.length - c.slidesPerView >= 2
            ) ?
              s.slidesSizesGrid[s.activeIndex + 1] + s.params.spaceBetween
            : 0) -
            s.params.spaceBetween
          : s.minTranslate()) &&
        s.loopFix({ direction: 'prev', setTranslate: !0, activeSlideIndex: 0 }),
      i.currentTranslate > s.minTranslate() &&
        ((O = !1),
        c.resistance &&
          (i.currentTranslate =
            s.minTranslate() -
            1 +
            (-s.minTranslate() + i.startTranslate + j) ** V)))
    : j < 0 &&
      (x &&
        T &&
        i.allowThresholdMove &&
        i.currentTranslate <
          (c.centeredSlides ?
            s.maxTranslate() +
            s.slidesSizesGrid[s.slidesSizesGrid.length - 1] +
            s.params.spaceBetween +
            ((
              c.slidesPerView !== 'auto' &&
              s.slides.length - c.slidesPerView >= 2
            ) ?
              s.slidesSizesGrid[s.slidesSizesGrid.length - 1] +
              s.params.spaceBetween
            : 0)
          : s.maxTranslate()) &&
        s.loopFix({
          direction: 'next',
          setTranslate: !0,
          activeSlideIndex:
            s.slides.length -
            (c.slidesPerView === 'auto' ?
              s.slidesPerViewDynamic()
            : Math.ceil(parseFloat(c.slidesPerView, 10))),
        }),
      i.currentTranslate < s.maxTranslate() &&
        ((O = !1),
        c.resistance &&
          (i.currentTranslate =
            s.maxTranslate() +
            1 -
            (s.maxTranslate() - i.startTranslate - j) ** V))),
    O && (d.preventedByNestedSwiper = !0),
    !s.allowSlideNext &&
      s.swipeDirection === 'next' &&
      i.currentTranslate < i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !s.allowSlidePrev &&
      s.swipeDirection === 'prev' &&
      i.currentTranslate > i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !s.allowSlidePrev &&
      !s.allowSlideNext &&
      (i.currentTranslate = i.startTranslate),
    c.threshold > 0)
  )
    if (Math.abs(j) > c.threshold || i.allowThresholdMove) {
      if (!i.allowThresholdMove) {
        ((i.allowThresholdMove = !0),
          (f.startX = f.currentX),
          (f.startY = f.currentY),
          (i.currentTranslate = i.startTranslate),
          (f.diff =
            s.isHorizontal() ? f.currentX - f.startX : f.currentY - f.startY));
        return;
      }
    } else {
      i.currentTranslate = i.startTranslate;
      return;
    }
  !c.followFinger ||
    c.cssMode ||
    (((c.freeMode && c.freeMode.enabled && s.freeMode) ||
      c.watchSlidesProgress) &&
      (s.updateActiveIndex(), s.updateSlidesClasses()),
    c.freeMode && c.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
    s.updateProgress(i.currentTranslate),
    s.setTranslate(i.currentTranslate));
}
function bb(a) {
  const r = this,
    s = r.touchEventsData;
  let i = a;
  i.originalEvent && (i = i.originalEvent);
  let c;
  if (i.type === 'touchend' || i.type === 'touchcancel') {
    if (
      ((c = [...i.changedTouches].find((k) => k.identifier === s.touchId)),
      !c || c.identifier !== s.touchId)
    )
      return;
  } else {
    if (s.touchId !== null || i.pointerId !== s.pointerId) return;
    c = i;
  }
  if (
    ['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(
      i.type,
    ) &&
    !(
      ['pointercancel', 'contextmenu'].includes(i.type) &&
      (r.browser.isSafari || r.browser.isWebView)
    )
  )
    return;
  ((s.pointerId = null), (s.touchId = null));
  const {
    params: h,
    touches: y,
    rtlTranslate: d,
    slidesGrid: p,
    enabled: b,
  } = r;
  if (!b || (!h.simulateTouch && i.pointerType === 'mouse')) return;
  if (
    (s.allowTouchCallbacks && r.emit('touchEnd', i),
    (s.allowTouchCallbacks = !1),
    !s.isTouched)
  ) {
    (s.isMoved && h.grabCursor && r.setGrabCursor(!1),
      (s.isMoved = !1),
      (s.startMoving = !1));
    return;
  }
  h.grabCursor &&
    s.isMoved &&
    s.isTouched &&
    (r.allowSlideNext === !0 || r.allowSlidePrev === !0) &&
    r.setGrabCursor(!1);
  const v = Gs(),
    C = v - s.touchStartTime;
  if (r.allowClick) {
    const k = i.path || (i.composedPath && i.composedPath());
    (r.updateClickedSlide((k && k[0]) || i.target, k),
      r.emit('tap click', i),
      C < 300 &&
        v - s.lastClickTime < 300 &&
        r.emit('doubleTap doubleClick', i));
  }
  if (
    ((s.lastClickTime = Gs()),
    Jh(() => {
      r.destroyed || (r.allowClick = !0);
    }),
    !s.isTouched ||
      !s.isMoved ||
      !r.swipeDirection ||
      (y.diff === 0 && !s.loopSwapReset) ||
      (s.currentTranslate === s.startTranslate && !s.loopSwapReset))
  ) {
    ((s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1));
    return;
  }
  ((s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1));
  let S;
  if (
    (h.followFinger ?
      (S = d ? r.translate : -r.translate)
    : (S = -s.currentTranslate),
    h.cssMode)
  )
    return;
  if (h.freeMode && h.freeMode.enabled) {
    r.freeMode.onTouchEnd({ currentPos: S });
    return;
  }
  const j = S >= -r.maxTranslate() && !r.params.loop;
  let D = 0,
    z = r.slidesSizesGrid[0];
  for (
    let k = 0;
    k < p.length;
    k += k < h.slidesPerGroupSkip ? 1 : h.slidesPerGroup
  ) {
    const I = k < h.slidesPerGroupSkip - 1 ? 1 : h.slidesPerGroup;
    typeof p[k + I] < 'u' ?
      (j || (S >= p[k] && S < p[k + I])) && ((D = k), (z = p[k + I] - p[k]))
    : (j || S >= p[k]) && ((D = k), (z = p[p.length - 1] - p[p.length - 2]));
  }
  let x = null,
    T = null;
  h.rewind &&
    (r.isBeginning ?
      (T =
        h.virtual && h.virtual.enabled && r.virtual ?
          r.virtual.slides.length - 1
        : r.slides.length - 1)
    : r.isEnd && (x = 0));
  const O = (S - p[D]) / z,
    V = D < h.slidesPerGroupSkip - 1 ? 1 : h.slidesPerGroup;
  if (C > h.longSwipesMs) {
    if (!h.longSwipes) {
      r.slideTo(r.activeIndex);
      return;
    }
    (r.swipeDirection === 'next' &&
      (O >= h.longSwipesRatio ?
        r.slideTo(h.rewind && r.isEnd ? x : D + V)
      : r.slideTo(D)),
      r.swipeDirection === 'prev' &&
        (O > 1 - h.longSwipesRatio ? r.slideTo(D + V)
        : T !== null && O < 0 && Math.abs(O) > h.longSwipesRatio ? r.slideTo(T)
        : r.slideTo(D)));
  } else {
    if (!h.shortSwipes) {
      r.slideTo(r.activeIndex);
      return;
    }
    (
      r.navigation &&
      (i.target === r.navigation.nextEl || i.target === r.navigation.prevEl)
    ) ?
      i.target === r.navigation.nextEl ?
        r.slideTo(D + V)
      : r.slideTo(D)
    : (r.swipeDirection === 'next' && r.slideTo(x !== null ? x : D + V),
      r.swipeDirection === 'prev' && r.slideTo(T !== null ? T : D));
  }
}
function hh() {
  const a = this,
    { params: r, el: s } = a;
  if (s && s.offsetWidth === 0) return;
  r.breakpoints && a.setBreakpoint();
  const { allowSlideNext: i, allowSlidePrev: c, snapGrid: f } = a,
    h = a.virtual && a.params.virtual.enabled;
  ((a.allowSlideNext = !0),
    (a.allowSlidePrev = !0),
    a.updateSize(),
    a.updateSlides(),
    a.updateSlidesClasses());
  const y = h && r.loop;
  ((
    (r.slidesPerView === 'auto' || r.slidesPerView > 1) &&
    a.isEnd &&
    !a.isBeginning &&
    !a.params.centeredSlides &&
    !y
  ) ?
    a.slideTo(a.slides.length - 1, 0, !1, !0)
  : a.params.loop && !h ? a.slideToLoop(a.realIndex, 0, !1, !0)
  : a.slideTo(a.activeIndex, 0, !1, !0),
    a.autoplay &&
      a.autoplay.running &&
      a.autoplay.paused &&
      (clearTimeout(a.autoplay.resizeTimeout),
      (a.autoplay.resizeTimeout = setTimeout(() => {
        a.autoplay &&
          a.autoplay.running &&
          a.autoplay.paused &&
          a.autoplay.resume();
      }, 500))),
    (a.allowSlidePrev = c),
    (a.allowSlideNext = i),
    a.params.watchOverflow && f !== a.snapGrid && a.checkOverflow());
}
function Sb(a) {
  const r = this;
  r.enabled &&
    (r.allowClick ||
      (r.params.preventClicks && a.preventDefault(),
      r.params.preventClicksPropagation &&
        r.animating &&
        (a.stopPropagation(), a.stopImmediatePropagation())));
}
function xb() {
  const a = this,
    { wrapperEl: r, rtlTranslate: s, enabled: i } = a;
  if (!i) return;
  ((a.previousTranslate = a.translate),
    a.isHorizontal() ?
      (a.translate = -r.scrollLeft)
    : (a.translate = -r.scrollTop),
    a.translate === 0 && (a.translate = 0),
    a.updateActiveIndex(),
    a.updateSlidesClasses());
  let c;
  const f = a.maxTranslate() - a.minTranslate();
  (f === 0 ? (c = 0) : (c = (a.translate - a.minTranslate()) / f),
    c !== a.progress && a.updateProgress(s ? -a.translate : a.translate),
    a.emit('setTranslate', a.translate, !1));
}
function Tb(a) {
  const r = this;
  (Bs(r, a.target),
    !(
      r.params.cssMode ||
      (r.params.slidesPerView !== 'auto' && !r.params.autoHeight)
    ) && r.update());
}
function Eb() {
  const a = this;
  a.documentTouchHandlerProceeded ||
    ((a.documentTouchHandlerProceeded = !0),
    a.params.touchReleaseOnEdges && (a.el.style.touchAction = 'auto'));
}
const lp = (a, r) => {
  const s = Jt(),
    { params: i, el: c, wrapperEl: f, device: h } = a,
    y = !!i.nested,
    d = r === 'on' ? 'addEventListener' : 'removeEventListener',
    p = r;
  !c ||
    typeof c == 'string' ||
    (s[d]('touchstart', a.onDocumentTouchStart, { passive: !1, capture: y }),
    c[d]('touchstart', a.onTouchStart, { passive: !1 }),
    c[d]('pointerdown', a.onTouchStart, { passive: !1 }),
    s[d]('touchmove', a.onTouchMove, { passive: !1, capture: y }),
    s[d]('pointermove', a.onTouchMove, { passive: !1, capture: y }),
    s[d]('touchend', a.onTouchEnd, { passive: !0 }),
    s[d]('pointerup', a.onTouchEnd, { passive: !0 }),
    s[d]('pointercancel', a.onTouchEnd, { passive: !0 }),
    s[d]('touchcancel', a.onTouchEnd, { passive: !0 }),
    s[d]('pointerout', a.onTouchEnd, { passive: !0 }),
    s[d]('pointerleave', a.onTouchEnd, { passive: !0 }),
    s[d]('contextmenu', a.onTouchEnd, { passive: !0 }),
    (i.preventClicks || i.preventClicksPropagation) &&
      c[d]('click', a.onClick, !0),
    i.cssMode && f[d]('scroll', a.onScroll),
    i.updateOnWindowResize ?
      a[p](
        h.ios || h.android ?
          'resize orientationchange observerUpdate'
        : 'resize observerUpdate',
        hh,
        !0,
      )
    : a[p]('observerUpdate', hh, !0),
    c[d]('load', a.onLoad, { capture: !0 }));
};
function Cb() {
  const a = this,
    { params: r } = a;
  ((a.onTouchStart = yb.bind(a)),
    (a.onTouchMove = _b.bind(a)),
    (a.onTouchEnd = bb.bind(a)),
    (a.onDocumentTouchStart = Eb.bind(a)),
    r.cssMode && (a.onScroll = xb.bind(a)),
    (a.onClick = Sb.bind(a)),
    (a.onLoad = Tb.bind(a)),
    lp(a, 'on'));
}
function Mb() {
  lp(this, 'off');
}
var Ab = { attachEvents: Cb, detachEvents: Mb };
const ph = (a, r) => a.grid && r.grid && r.grid.rows > 1;
function zb() {
  const a = this,
    { realIndex: r, initialized: s, params: i, el: c } = a,
    f = i.breakpoints;
  if (!f || (f && Object.keys(f).length === 0)) return;
  const h = Jt(),
    y =
      i.breakpointsBase === 'window' || !i.breakpointsBase ?
        i.breakpointsBase
      : 'container',
    d =
      (
        ['window', 'container'].includes(i.breakpointsBase) ||
        !i.breakpointsBase
      ) ?
        a.el
      : h.querySelector(i.breakpointsBase),
    p = a.getBreakpoint(f, y, d);
  if (!p || a.currentBreakpoint === p) return;
  const v = (p in f ? f[p] : void 0) || a.originalParams,
    C = ph(a, i),
    S = ph(a, v),
    j = a.params.grabCursor,
    D = v.grabCursor,
    z = i.enabled;
  (C && !S ?
    (c.classList.remove(
      `${i.containerModifierClass}grid`,
      `${i.containerModifierClass}grid-column`,
    ),
    a.emitContainerClasses())
  : !C &&
    S &&
    (c.classList.add(`${i.containerModifierClass}grid`),
    ((v.grid.fill && v.grid.fill === 'column') ||
      (!v.grid.fill && i.grid.fill === 'column')) &&
      c.classList.add(`${i.containerModifierClass}grid-column`),
    a.emitContainerClasses()),
    j && !D ? a.unsetGrabCursor() : !j && D && a.setGrabCursor(),
    ['navigation', 'pagination', 'scrollbar'].forEach((I) => {
      if (typeof v[I] > 'u') return;
      const K = i[I] && i[I].enabled,
        H = v[I] && v[I].enabled;
      (K && !H && a[I].disable(), !K && H && a[I].enable());
    }));
  const x = v.direction && v.direction !== i.direction,
    T = i.loop && (v.slidesPerView !== i.slidesPerView || x),
    O = i.loop;
  (x && s && a.changeDirection(), At(a.params, v));
  const V = a.params.enabled,
    k = a.params.loop;
  (Object.assign(a, {
    allowTouchMove: a.params.allowTouchMove,
    allowSlideNext: a.params.allowSlideNext,
    allowSlidePrev: a.params.allowSlidePrev,
  }),
    z && !V ? a.disable() : !z && V && a.enable(),
    (a.currentBreakpoint = p),
    a.emit('_beforeBreakpoint', v),
    s &&
      (T ? (a.loopDestroy(), a.loopCreate(r), a.updateSlides())
      : !O && k ? (a.loopCreate(r), a.updateSlides())
      : O && !k && a.loopDestroy()),
    a.emit('breakpoint', v));
}
function Nb(a, r = 'window', s) {
  if (!a || (r === 'container' && !s)) return;
  let i = !1;
  const c = ot(),
    f = r === 'window' ? c.innerHeight : s.clientHeight,
    h = Object.keys(a).map((y) => {
      if (typeof y == 'string' && y.indexOf('@') === 0) {
        const d = parseFloat(y.substr(1));
        return { value: f * d, point: y };
      }
      return { value: y, point: y };
    });
  h.sort((y, d) => parseInt(y.value, 10) - parseInt(d.value, 10));
  for (let y = 0; y < h.length; y += 1) {
    const { point: d, value: p } = h[y];
    r === 'window' ?
      c.matchMedia(`(min-width: ${p}px)`).matches && (i = d)
    : p <= s.clientWidth && (i = d);
  }
  return i || 'max';
}
var Ob = { setBreakpoint: zb, getBreakpoint: Nb };
function jb(a, r) {
  const s = [];
  return (
    a.forEach((i) => {
      typeof i == 'object' ?
        Object.keys(i).forEach((c) => {
          i[c] && s.push(r + c);
        })
      : typeof i == 'string' && s.push(r + i);
    }),
    s
  );
}
function Db() {
  const a = this,
    { classNames: r, params: s, rtl: i, el: c, device: f } = a,
    h = jb(
      [
        'initialized',
        s.direction,
        { 'free-mode': a.params.freeMode && s.freeMode.enabled },
        { autoheight: s.autoHeight },
        { rtl: i },
        { grid: s.grid && s.grid.rows > 1 },
        {
          'grid-column': s.grid && s.grid.rows > 1 && s.grid.fill === 'column',
        },
        { android: f.android },
        { ios: f.ios },
        { 'css-mode': s.cssMode },
        { centered: s.cssMode && s.centeredSlides },
        { 'watch-progress': s.watchSlidesProgress },
      ],
      s.containerModifierClass,
    );
  (r.push(...h), c.classList.add(...r), a.emitContainerClasses());
}
function Rb() {
  const a = this,
    { el: r, classNames: s } = a;
  !r ||
    typeof r == 'string' ||
    (r.classList.remove(...s), a.emitContainerClasses());
}
var Lb = { addClasses: Db, removeClasses: Rb };
function wb() {
  const a = this,
    { isLocked: r, params: s } = a,
    { slidesOffsetBefore: i } = s;
  if (i) {
    const c = a.slides.length - 1,
      f = a.slidesGrid[c] + a.slidesSizesGrid[c] + i * 2;
    a.isLocked = a.size > f;
  } else a.isLocked = a.snapGrid.length === 1;
  (s.allowSlideNext === !0 && (a.allowSlideNext = !a.isLocked),
    s.allowSlidePrev === !0 && (a.allowSlidePrev = !a.isLocked),
    r && r !== a.isLocked && (a.isEnd = !1),
    r !== a.isLocked && a.emit(a.isLocked ? 'lock' : 'unlock'));
}
var Bb = { checkOverflow: wb },
  Bo = {
    init: !0,
    direction: 'horizontal',
    oneWayMovement: !1,
    swiperElementNodeName: 'SWIPER-CONTAINER',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: 'swiper',
    enabled: !0,
    focusableElements: 'input, select, option, textarea, button, video, label',
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: 'slide',
    breakpoints: void 0,
    breakpointsBase: 'window',
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    snapToSlideEdge: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: 'swiper-',
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-blank',
    slideActiveClass: 'swiper-slide-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideFullyVisibleClass: 'swiper-slide-fully-visible',
    slideNextClass: 'swiper-slide-next',
    slidePrevClass: 'swiper-slide-prev',
    wrapperClass: 'swiper-wrapper',
    lazyPreloaderClass: 'swiper-lazy-preloader',
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Hb(a, r) {
  return function (i = {}) {
    const c = Object.keys(i)[0],
      f = i[c];
    if (typeof f != 'object' || f === null) {
      At(r, i);
      return;
    }
    if (
      (a[c] === !0 && (a[c] = { enabled: !0 }),
      c === 'navigation' &&
        a[c] &&
        a[c].enabled &&
        !a[c].prevEl &&
        !a[c].nextEl &&
        (a[c].auto = !0),
      ['pagination', 'scrollbar'].indexOf(c) >= 0 &&
        a[c] &&
        a[c].enabled &&
        !a[c].el &&
        (a[c].auto = !0),
      !(c in a && 'enabled' in f))
    ) {
      At(r, i);
      return;
    }
    (typeof a[c] == 'object' && !('enabled' in a[c]) && (a[c].enabled = !0),
      a[c] || (a[c] = { enabled: !1 }),
      At(r, i));
  };
}
const No = {
    eventsEmitter: L_,
    update: Z_,
    translate: P_,
    transition: tb,
    slide: ob,
    loop: mb,
    grabCursor: vb,
    events: Ab,
    breakpoints: Ob,
    checkOverflow: Bb,
    classes: Lb,
  },
  Oo = {};
let $o = class vl {
  constructor(...r) {
    let s, i;
    ((
      r.length === 1 &&
      r[0].constructor &&
      Object.prototype.toString.call(r[0]).slice(8, -1) === 'Object'
    ) ?
      (i = r[0])
    : ([s, i] = r),
      i || (i = {}),
      (i = At({}, i)),
      s && !i.el && (i.el = s));
    const c = Jt();
    if (
      i.el &&
      typeof i.el == 'string' &&
      c.querySelectorAll(i.el).length > 1
    ) {
      const d = [];
      return (
        c.querySelectorAll(i.el).forEach((p) => {
          const b = At({}, i, { el: p });
          d.push(new vl(b));
        }),
        d
      );
    }
    const f = this;
    ((f.__swiper__ = !0),
      (f.support = Wh()),
      (f.device = Ih({ userAgent: i.userAgent })),
      (f.browser = ep()),
      (f.eventsListeners = {}),
      (f.eventsAnyListeners = []),
      (f.modules = [...f.__modules__]),
      i.modules &&
        Array.isArray(i.modules) &&
        i.modules.forEach((d) => {
          typeof d == 'function' &&
            f.modules.indexOf(d) < 0 &&
            f.modules.push(d);
        }));
    const h = {};
    f.modules.forEach((d) => {
      d({
        params: i,
        swiper: f,
        extendParams: Hb(i, h),
        on: f.on.bind(f),
        once: f.once.bind(f),
        off: f.off.bind(f),
        emit: f.emit.bind(f),
      });
    });
    const y = At({}, Bo, h);
    return (
      (f.params = At({}, y, Oo, i)),
      (f.originalParams = At({}, f.params)),
      (f.passedParams = At({}, i)),
      f.params &&
        f.params.on &&
        Object.keys(f.params.on).forEach((d) => {
          f.on(d, f.params.on[d]);
        }),
      f.params && f.params.onAny && f.onAny(f.params.onAny),
      Object.assign(f, {
        enabled: f.params.enabled,
        el: s,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return f.params.direction === 'horizontal';
        },
        isVertical() {
          return f.params.direction === 'vertical';
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: f.params.allowSlideNext,
        allowSlidePrev: f.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: f.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: f.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      f.emit('_swiper'),
      f.params.init && f.init(),
      f
    );
  }
  getDirectionLabel(r) {
    return this.isHorizontal() ? r : (
        {
          'width': 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          'marginRight': 'marginBottom',
        }[r]
      );
  }
  getSlideIndex(r) {
    const { slidesEl: s, params: i } = this,
      c = Kt(s, `.${i.slideClass}, swiper-slide`),
      f = Vs(c[0]);
    return Vs(r) - f;
  }
  getSlideIndexByData(r) {
    return this.getSlideIndex(
      this.slides.find(
        (s) => s.getAttribute('data-swiper-slide-index') * 1 === r,
      ),
    );
  }
  getSlideIndexWhenGrid(r) {
    return (
      this.grid &&
        this.params.grid &&
        this.params.grid.rows > 1 &&
        (this.params.grid.fill === 'column' ?
          (r = Math.floor(r / this.params.grid.rows))
        : this.params.grid.fill === 'row' &&
          (r = r % Math.ceil(this.slides.length / this.params.grid.rows))),
      r
    );
  }
  recalcSlides() {
    const r = this,
      { slidesEl: s, params: i } = r;
    r.slides = Kt(s, `.${i.slideClass}, swiper-slide`);
  }
  enable() {
    const r = this;
    r.enabled ||
      ((r.enabled = !0),
      r.params.grabCursor && r.setGrabCursor(),
      r.emit('enable'));
  }
  disable() {
    const r = this;
    r.enabled &&
      ((r.enabled = !1),
      r.params.grabCursor && r.unsetGrabCursor(),
      r.emit('disable'));
  }
  setProgress(r, s) {
    const i = this;
    r = Math.min(Math.max(r, 0), 1);
    const c = i.minTranslate(),
      h = (i.maxTranslate() - c) * r + c;
    (i.translateTo(h, typeof s > 'u' ? 0 : s),
      i.updateActiveIndex(),
      i.updateSlidesClasses());
  }
  emitContainerClasses() {
    const r = this;
    if (!r.params._emitClasses || !r.el) return;
    const s = r.el.className
      .split(' ')
      .filter(
        (i) =>
          i.indexOf('swiper') === 0 ||
          i.indexOf(r.params.containerModifierClass) === 0,
      );
    r.emit('_containerClasses', s.join(' '));
  }
  getSlideClasses(r) {
    const s = this;
    return s.destroyed ? '' : (
        r.className
          .split(' ')
          .filter(
            (i) =>
              i.indexOf('swiper-slide') === 0 ||
              i.indexOf(s.params.slideClass) === 0,
          )
          .join(' ')
      );
  }
  emitSlidesClasses() {
    const r = this;
    if (!r.params._emitClasses || !r.el) return;
    const s = [];
    (r.slides.forEach((i) => {
      const c = r.getSlideClasses(i);
      (s.push({ slideEl: i, classNames: c }), r.emit('_slideClass', i, c));
    }),
      r.emit('_slideClasses', s));
  }
  slidesPerViewDynamic(r = 'current', s = !1) {
    const i = this,
      {
        params: c,
        slides: f,
        slidesGrid: h,
        slidesSizesGrid: y,
        size: d,
        activeIndex: p,
      } = i;
    let b = 1;
    if (typeof c.slidesPerView == 'number') return c.slidesPerView;
    if (c.centeredSlides) {
      let v = f[p] ? Math.ceil(f[p].swiperSlideSize) : 0,
        C;
      for (let S = p + 1; S < f.length; S += 1)
        f[S] &&
          !C &&
          ((v += Math.ceil(f[S].swiperSlideSize)), (b += 1), v > d && (C = !0));
      for (let S = p - 1; S >= 0; S -= 1)
        f[S] &&
          !C &&
          ((v += f[S].swiperSlideSize), (b += 1), v > d && (C = !0));
    } else if (r === 'current')
      for (let v = p + 1; v < f.length; v += 1)
        (s ? h[v] + y[v] - h[p] < d : h[v] - h[p] < d) && (b += 1);
    else for (let v = p - 1; v >= 0; v -= 1) h[p] - h[v] < d && (b += 1);
    return b;
  }
  update() {
    const r = this;
    if (!r || r.destroyed) return;
    const { snapGrid: s, params: i } = r;
    (i.breakpoints && r.setBreakpoint(),
      [...r.el.querySelectorAll('[loading="lazy"]')].forEach((h) => {
        h.complete && Bs(r, h);
      }),
      r.updateSize(),
      r.updateSlides(),
      r.updateProgress(),
      r.updateSlidesClasses());
    function c() {
      const h = r.rtlTranslate ? r.translate * -1 : r.translate,
        y = Math.min(Math.max(h, r.maxTranslate()), r.minTranslate());
      (r.setTranslate(y), r.updateActiveIndex(), r.updateSlidesClasses());
    }
    let f;
    if (i.freeMode && i.freeMode.enabled && !i.cssMode)
      (c(), i.autoHeight && r.updateAutoHeight());
    else {
      if (
        (i.slidesPerView === 'auto' || i.slidesPerView > 1) &&
        r.isEnd &&
        !i.centeredSlides
      ) {
        const h = r.virtual && i.virtual.enabled ? r.virtual.slides : r.slides;
        f = r.slideTo(h.length - 1, 0, !1, !0);
      } else f = r.slideTo(r.activeIndex, 0, !1, !0);
      f || c();
    }
    (i.watchOverflow && s !== r.snapGrid && r.checkOverflow(),
      r.emit('update'));
  }
  changeDirection(r, s = !0) {
    const i = this,
      c = i.params.direction;
    return (
      r || (r = c === 'horizontal' ? 'vertical' : 'horizontal'),
      r === c ||
        (r !== 'horizontal' && r !== 'vertical') ||
        (i.el.classList.remove(`${i.params.containerModifierClass}${c}`),
        i.el.classList.add(`${i.params.containerModifierClass}${r}`),
        i.emitContainerClasses(),
        (i.params.direction = r),
        i.slides.forEach((f) => {
          r === 'vertical' ? (f.style.width = '') : (f.style.height = '');
        }),
        i.emit('changeDirection'),
        s && i.update()),
      i
    );
  }
  changeLanguageDirection(r) {
    const s = this;
    (s.rtl && r === 'rtl') ||
      (!s.rtl && r === 'ltr') ||
      ((s.rtl = r === 'rtl'),
      (s.rtlTranslate = s.params.direction === 'horizontal' && s.rtl),
      s.rtl ?
        (s.el.classList.add(`${s.params.containerModifierClass}rtl`),
        (s.el.dir = 'rtl'))
      : (s.el.classList.remove(`${s.params.containerModifierClass}rtl`),
        (s.el.dir = 'ltr')),
      s.update());
  }
  mount(r) {
    const s = this;
    if (s.mounted) return !0;
    let i = r || s.params.el;
    if ((typeof i == 'string' && (i = document.querySelector(i)), !i))
      return !1;
    ((i.swiper = s),
      i.parentNode &&
        i.parentNode.host &&
        i.parentNode.host.nodeName ===
          s.params.swiperElementNodeName.toUpperCase() &&
        (s.isElement = !0));
    const c = () =>
      `.${(s.params.wrapperClass || '').trim().split(' ').join('.')}`;
    let h =
      i && i.shadowRoot && i.shadowRoot.querySelector ?
        i.shadowRoot.querySelector(c())
      : Kt(i, c())[0];
    return (
      !h &&
        s.params.createElements &&
        ((h = Ys('div', s.params.wrapperClass)),
        i.append(h),
        Kt(i, `.${s.params.slideClass}`).forEach((y) => {
          h.append(y);
        })),
      Object.assign(s, {
        el: i,
        wrapperEl: h,
        slidesEl:
          s.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : h,
        hostEl: s.isElement ? i.parentNode.host : i,
        mounted: !0,
        rtl: i.dir.toLowerCase() === 'rtl' || Ql(i, 'direction') === 'rtl',
        rtlTranslate:
          s.params.direction === 'horizontal' &&
          (i.dir.toLowerCase() === 'rtl' || Ql(i, 'direction') === 'rtl'),
        wrongRTL: Ql(h, 'display') === '-webkit-box',
      }),
      !0
    );
  }
  init(r) {
    const s = this;
    if (s.initialized || s.mount(r) === !1) return s;
    (s.emit('beforeInit'),
      s.params.breakpoints && s.setBreakpoint(),
      s.addClasses(),
      s.updateSize(),
      s.updateSlides(),
      s.params.watchOverflow && s.checkOverflow(),
      s.params.grabCursor && s.enabled && s.setGrabCursor(),
      s.params.loop && s.virtual && s.params.virtual.enabled ?
        s.slideTo(
          s.params.initialSlide + s.virtual.slidesBefore,
          0,
          s.params.runCallbacksOnInit,
          !1,
          !0,
        )
      : s.slideTo(
          s.params.initialSlide,
          0,
          s.params.runCallbacksOnInit,
          !1,
          !0,
        ),
      s.params.loop && s.loopCreate(void 0, !0),
      s.attachEvents());
    const c = [...s.el.querySelectorAll('[loading="lazy"]')];
    return (
      s.isElement && c.push(...s.hostEl.querySelectorAll('[loading="lazy"]')),
      c.forEach((f) => {
        f.complete ?
          Bs(s, f)
        : f.addEventListener('load', (h) => {
            Bs(s, h.target);
          });
      }),
      wo(s),
      (s.initialized = !0),
      wo(s),
      s.emit('init'),
      s.emit('afterInit'),
      s
    );
  }
  destroy(r = !0, s = !0) {
    const i = this,
      { params: c, el: f, wrapperEl: h, slides: y } = i;
    return (
      typeof i.params > 'u' ||
        i.destroyed ||
        (i.emit('beforeDestroy'),
        (i.initialized = !1),
        i.detachEvents(),
        c.loop && i.loopDestroy(),
        s &&
          (i.removeClasses(),
          f && typeof f != 'string' && f.removeAttribute('style'),
          h && h.removeAttribute('style'),
          y &&
            y.length &&
            y.forEach((d) => {
              (d.classList.remove(
                c.slideVisibleClass,
                c.slideFullyVisibleClass,
                c.slideActiveClass,
                c.slideNextClass,
                c.slidePrevClass,
              ),
                d.removeAttribute('style'),
                d.removeAttribute('data-swiper-slide-index'));
            })),
        i.emit('destroy'),
        Object.keys(i.eventsListeners).forEach((d) => {
          i.off(d);
        }),
        r !== !1 &&
          (i.el && typeof i.el != 'string' && (i.el.swiper = null), S_(i)),
        (i.destroyed = !0)),
      null
    );
  }
  static extendDefaults(r) {
    At(Oo, r);
  }
  static get extendedDefaults() {
    return Oo;
  }
  static get defaults() {
    return Bo;
  }
  static installModule(r) {
    vl.prototype.__modules__ || (vl.prototype.__modules__ = []);
    const s = vl.prototype.__modules__;
    typeof r == 'function' && s.indexOf(r) < 0 && s.push(r);
  }
  static use(r) {
    return Array.isArray(r) ?
        (r.forEach((s) => vl.installModule(s)), vl)
      : (vl.installModule(r), vl);
  }
};
Object.keys(No).forEach((a) => {
  Object.keys(No[a]).forEach((r) => {
    $o.prototype[r] = No[a][r];
  });
});
$o.use([D_, R_]);
const ap = [
  'eventsPrefix',
  'injectStyles',
  'injectStylesUrls',
  'modules',
  'init',
  '_direction',
  'oneWayMovement',
  'swiperElementNodeName',
  'touchEventsTarget',
  'initialSlide',
  '_speed',
  'cssMode',
  'updateOnWindowResize',
  'resizeObserver',
  'nested',
  'focusableElements',
  '_enabled',
  '_width',
  '_height',
  'preventInteractionOnTransition',
  'userAgent',
  'url',
  '_edgeSwipeDetection',
  '_edgeSwipeThreshold',
  '_freeMode',
  '_autoHeight',
  'setWrapperSize',
  'virtualTranslate',
  '_effect',
  'breakpoints',
  'breakpointsBase',
  '_spaceBetween',
  '_slidesPerView',
  'maxBackfaceHiddenSlides',
  '_grid',
  '_slidesPerGroup',
  '_slidesPerGroupSkip',
  '_slidesPerGroupAuto',
  '_centeredSlides',
  '_centeredSlidesBounds',
  '_slidesOffsetBefore',
  '_slidesOffsetAfter',
  'normalizeSlideIndex',
  '_centerInsufficientSlides',
  '_snapToSlideEdge',
  '_watchOverflow',
  'roundLengths',
  'touchRatio',
  'touchAngle',
  'simulateTouch',
  '_shortSwipes',
  '_longSwipes',
  'longSwipesRatio',
  'longSwipesMs',
  '_followFinger',
  'allowTouchMove',
  '_threshold',
  'touchMoveStopPropagation',
  'touchStartPreventDefault',
  'touchStartForcePreventDefault',
  'touchReleaseOnEdges',
  'uniqueNavElements',
  '_resistance',
  '_resistanceRatio',
  '_watchSlidesProgress',
  '_grabCursor',
  'preventClicks',
  'preventClicksPropagation',
  '_slideToClickedSlide',
  '_loop',
  'loopAdditionalSlides',
  'loopAddBlankSlides',
  'loopPreventsSliding',
  '_rewind',
  '_allowSlidePrev',
  '_allowSlideNext',
  '_swipeHandler',
  '_noSwiping',
  'noSwipingClass',
  'noSwipingSelector',
  'passiveListeners',
  'containerModifierClass',
  'slideClass',
  'slideActiveClass',
  'slideVisibleClass',
  'slideFullyVisibleClass',
  'slideNextClass',
  'slidePrevClass',
  'slideBlankClass',
  'wrapperClass',
  'lazyPreloaderClass',
  'lazyPreloadPrevNext',
  'runCallbacksOnInit',
  'observer',
  'observeParents',
  'observeSlideChildren',
  'a11y',
  '_autoplay',
  '_controller',
  'coverflowEffect',
  'cubeEffect',
  'fadeEffect',
  'flipEffect',
  'creativeEffect',
  'cardsEffect',
  'hashNavigation',
  'history',
  'keyboard',
  'mousewheel',
  '_navigation',
  '_pagination',
  'parallax',
  '_scrollbar',
  '_thumbs',
  'virtual',
  'zoom',
  'control',
];
function va(a) {
  return (
    typeof a == 'object' &&
    a !== null &&
    a.constructor &&
    Object.prototype.toString.call(a).slice(8, -1) === 'Object' &&
    !a.__swiper__
  );
}
function an(a, r) {
  const s = ['__proto__', 'constructor', 'prototype'];
  Object.keys(r)
    .filter((i) => s.indexOf(i) < 0)
    .forEach((i) => {
      typeof a[i] > 'u' ? (a[i] = r[i])
      : va(r[i]) && va(a[i]) && Object.keys(r[i]).length > 0 ?
        r[i].__swiper__ ?
          (a[i] = r[i])
        : an(a[i], r[i])
      : (a[i] = r[i]);
    });
}
function np(a = {}) {
  return (
    a.navigation &&
    typeof a.navigation.nextEl > 'u' &&
    typeof a.navigation.prevEl > 'u'
  );
}
function ip(a = {}) {
  return a.pagination && typeof a.pagination.el > 'u';
}
function sp(a = {}) {
  return a.scrollbar && typeof a.scrollbar.el > 'u';
}
function rp(a = '') {
  const r = a
      .split(' ')
      .map((i) => i.trim())
      .filter((i) => !!i),
    s = [];
  return (
    r.forEach((i) => {
      s.indexOf(i) < 0 && s.push(i);
    }),
    s.join(' ')
  );
}
function Ub(a = '') {
  return (
    a ?
      a.includes('swiper-wrapper') ?
        a
      : `swiper-wrapper ${a}`
    : 'swiper-wrapper'
  );
}
function Gb({
  swiper: a,
  slides: r,
  passedParams: s,
  changedParams: i,
  nextEl: c,
  prevEl: f,
  scrollbarEl: h,
  paginationEl: y,
}) {
  const d = i.filter(
      (H) => H !== 'children' && H !== 'direction' && H !== 'wrapperClass',
    ),
    {
      params: p,
      pagination: b,
      navigation: v,
      scrollbar: C,
      virtual: S,
      thumbs: j,
    } = a;
  let D, z, x, T, O, V, k, I;
  (i.includes('thumbs') &&
    s.thumbs &&
    s.thumbs.swiper &&
    !s.thumbs.swiper.destroyed &&
    p.thumbs &&
    (!p.thumbs.swiper || p.thumbs.swiper.destroyed) &&
    (D = !0),
    i.includes('controller') &&
      s.controller &&
      s.controller.control &&
      p.controller &&
      !p.controller.control &&
      (z = !0),
    i.includes('pagination') &&
      s.pagination &&
      (s.pagination.el || y) &&
      (p.pagination || p.pagination === !1) &&
      b &&
      !b.el &&
      (x = !0),
    i.includes('scrollbar') &&
      s.scrollbar &&
      (s.scrollbar.el || h) &&
      (p.scrollbar || p.scrollbar === !1) &&
      C &&
      !C.el &&
      (T = !0),
    i.includes('navigation') &&
      s.navigation &&
      (s.navigation.prevEl || f) &&
      (s.navigation.nextEl || c) &&
      (p.navigation || p.navigation === !1) &&
      v &&
      !v.prevEl &&
      !v.nextEl &&
      (O = !0));
  const K = (H) => {
    a[H] &&
      (a[H].destroy(),
      H === 'navigation' ?
        (a.isElement && (a[H].prevEl.remove(), a[H].nextEl.remove()),
        (p[H].prevEl = void 0),
        (p[H].nextEl = void 0),
        (a[H].prevEl = void 0),
        (a[H].nextEl = void 0))
      : (a.isElement && a[H].el.remove(),
        (p[H].el = void 0),
        (a[H].el = void 0)));
  };
  (i.includes('loop') &&
    a.isElement &&
    (p.loop && !s.loop ? (V = !0)
    : !p.loop && s.loop ? (k = !0)
    : (I = !0)),
    d.forEach((H) => {
      if (va(p[H]) && va(s[H]))
        (Object.assign(p[H], s[H]),
          (H === 'navigation' || H === 'pagination' || H === 'scrollbar') &&
            'enabled' in s[H] &&
            !s[H].enabled &&
            K(H));
      else {
        const ne = s[H];
        (
          (ne === !0 || ne === !1) &&
          (H === 'navigation' || H === 'pagination' || H === 'scrollbar')
        ) ?
          ne === !1 && K(H)
        : (p[H] = s[H]);
      }
    }),
    d.includes('controller') &&
      !z &&
      a.controller &&
      a.controller.control &&
      p.controller &&
      p.controller.control &&
      (a.controller.control = p.controller.control),
    i.includes('children') && r && S && p.virtual.enabled ?
      ((S.slides = r), S.update(!0))
    : i.includes('virtual') &&
      S &&
      p.virtual.enabled &&
      (r && (S.slides = r), S.update(!0)),
    i.includes('children') && r && p.loop && (I = !0),
    D && j.init() && j.update(!0),
    z && (a.controller.control = p.controller.control),
    x &&
      (a.isElement &&
        (!y || typeof y == 'string') &&
        ((y = document.createElement('div')),
        y.classList.add('swiper-pagination'),
        y.part.add('pagination'),
        a.el.appendChild(y)),
      y && (p.pagination.el = y),
      b.init(),
      b.render(),
      b.update()),
    T &&
      (a.isElement &&
        (!h || typeof h == 'string') &&
        ((h = document.createElement('div')),
        h.classList.add('swiper-scrollbar'),
        h.part.add('scrollbar'),
        a.el.appendChild(h)),
      h && (p.scrollbar.el = h),
      C.init(),
      C.updateSize(),
      C.setTranslate()),
    O &&
      (a.isElement &&
        ((!c || typeof c == 'string') &&
          ((c = document.createElement('div')),
          c.classList.add('swiper-button-next'),
          ui(c, a.navigation.arrowSvg),
          c.part.add('button-next'),
          a.el.appendChild(c)),
        (!f || typeof f == 'string') &&
          ((f = document.createElement('div')),
          f.classList.add('swiper-button-prev'),
          ui(f, a.navigation.arrowSvg),
          f.part.add('button-prev'),
          a.el.appendChild(f))),
      c && (p.navigation.nextEl = c),
      f && (p.navigation.prevEl = f),
      v.init(),
      v.update()),
    i.includes('allowSlideNext') && (a.allowSlideNext = s.allowSlideNext),
    i.includes('allowSlidePrev') && (a.allowSlidePrev = s.allowSlidePrev),
    i.includes('direction') && a.changeDirection(s.direction, !1),
    (V || I) && a.loopDestroy(),
    (k || I) && a.loopCreate(),
    a.update());
}
function qb(a = {}, r = !0) {
  const s = { on: {} },
    i = {},
    c = {};
  (an(s, Bo), (s._emitClasses = !0), (s.init = !1));
  const f = {},
    h = ap.map((d) => d.replace(/_/, '')),
    y = Object.assign({}, a);
  return (
    Object.keys(y).forEach((d) => {
      typeof a[d] > 'u' ||
        (h.indexOf(d) >= 0 ?
          va(a[d]) ? ((s[d] = {}), (c[d] = {}), an(s[d], a[d]), an(c[d], a[d]))
          : ((s[d] = a[d]), (c[d] = a[d]))
        : d.search(/on[A-Z]/) === 0 && typeof a[d] == 'function' ?
          r ? (i[`${d[2].toLowerCase()}${d.substr(3)}`] = a[d])
          : (s.on[`${d[2].toLowerCase()}${d.substr(3)}`] = a[d])
        : (f[d] = a[d]));
    }),
    ['navigation', 'pagination', 'scrollbar'].forEach((d) => {
      (s[d] === !0 && (s[d] = {}), s[d] === !1 && delete s[d]);
    }),
    { params: s, passedParams: c, rest: f, events: i }
  );
}
function Yb(
  { el: a, nextEl: r, prevEl: s, paginationEl: i, scrollbarEl: c, swiper: f },
  h,
) {
  (np(h) &&
    r &&
    s &&
    ((f.params.navigation.nextEl = r),
    (f.originalParams.navigation.nextEl = r),
    (f.params.navigation.prevEl = s),
    (f.originalParams.navigation.prevEl = s)),
    ip(h) &&
      i &&
      ((f.params.pagination.el = i), (f.originalParams.pagination.el = i)),
    sp(h) &&
      c &&
      ((f.params.scrollbar.el = c), (f.originalParams.scrollbar.el = c)),
    f.init(a));
}
function Vb(a, r, s, i, c) {
  const f = [];
  if (!r) return f;
  const h = (d) => {
    f.indexOf(d) < 0 && f.push(d);
  };
  if (s && i) {
    const d = i.map(c),
      p = s.map(c);
    (d.join('') !== p.join('') && h('children'),
      i.length !== s.length && h('children'));
  }
  return (
    ap
      .filter((d) => d[0] === '_')
      .map((d) => d.replace(/_/, ''))
      .forEach((d) => {
        if (d in a && d in r)
          if (va(a[d]) && va(r[d])) {
            const p = Object.keys(a[d]),
              b = Object.keys(r[d]);
            p.length !== b.length ?
              h(d)
            : (p.forEach((v) => {
                a[d][v] !== r[d][v] && h(d);
              }),
              b.forEach((v) => {
                a[d][v] !== r[d][v] && h(d);
              }));
          } else a[d] !== r[d] && h(d);
      }),
    f
  );
}
const Xb = (a) => {
  !a ||
    a.destroyed ||
    !a.params.virtual ||
    (a.params.virtual && !a.params.virtual.enabled) ||
    (a.updateSlides(),
    a.updateProgress(),
    a.updateSlidesClasses(),
    a.emit('_virtualUpdated'),
    a.parallax &&
      a.params.parallax &&
      a.params.parallax.enabled &&
      a.parallax.setTranslate());
};
function Xs() {
  return (
    (Xs =
      Object.assign ?
        Object.assign.bind()
      : function (a) {
          for (var r = 1; r < arguments.length; r++) {
            var s = arguments[r];
            for (var i in s)
              Object.prototype.hasOwnProperty.call(s, i) && (a[i] = s[i]);
          }
          return a;
        }),
    Xs.apply(this, arguments)
  );
}
function up(a) {
  return (
    a.type && a.type.displayName && a.type.displayName.includes('SwiperSlide')
  );
}
function op(a) {
  const r = [];
  return (
    ke.Children.toArray(a).forEach((s) => {
      up(s) ?
        r.push(s)
      : s.props &&
        s.props.children &&
        op(s.props.children).forEach((i) => r.push(i));
    }),
    r
  );
}
function Qb(a) {
  const r = [],
    s = {
      'container-start': [],
      'container-end': [],
      'wrapper-start': [],
      'wrapper-end': [],
    };
  return (
    ke.Children.toArray(a).forEach((i) => {
      if (up(i)) r.push(i);
      else if (i.props && i.props.slot && s[i.props.slot])
        s[i.props.slot].push(i);
      else if (i.props && i.props.children) {
        const c = op(i.props.children);
        c.length > 0 ? c.forEach((f) => r.push(f)) : s['container-end'].push(i);
      } else s['container-end'].push(i);
    }),
    { slides: r, slots: s }
  );
}
function Zb(a, r, s) {
  if (!s) return null;
  const i = (b) => {
      let v = b;
      return (
        b < 0 ? (v = r.length + b) : v >= r.length && (v = v - r.length),
        v
      );
    },
    c =
      a.isHorizontal() ?
        { [a.rtlTranslate ? 'right' : 'left']: `${s.offset}px` }
      : { top: `${s.offset}px` },
    { from: f, to: h } = s,
    y = a.params.loop ? -r.length : 0,
    d = a.params.loop ? r.length * 2 : r.length,
    p = [];
  for (let b = y; b < d; b += 1) b >= f && b <= h && p.push(r[i(b)]);
  return p.map((b, v) =>
    ke.cloneElement(b, {
      swiper: a,
      style: c,
      key: b.props.virtualIndex || b.key || `slide-${v}`,
    }),
  );
}
function si(a, r) {
  return typeof window > 'u' ? N.useEffect(a, r) : N.useLayoutEffect(a, r);
}
const vh = N.createContext(null),
  $b = N.createContext(null),
  cp = N.forwardRef(
    (
      {
        className: a,
        tag: r = 'div',
        wrapperTag: s = 'div',
        children: i,
        onSwiper: c,
        ...f
      } = {},
      h,
    ) => {
      let y = !1;
      const [d, p] = N.useState('swiper'),
        [b, v] = N.useState(null),
        [C, S] = N.useState(!1),
        j = N.useRef(!1),
        D = N.useRef(null),
        z = N.useRef(null),
        x = N.useRef(null),
        T = N.useRef(null),
        O = N.useRef(null),
        V = N.useRef(null),
        k = N.useRef(null),
        I = N.useRef(null),
        { params: K, passedParams: H, rest: ne, events: J } = qb(f),
        { slides: F, slots: P } = Qb(i),
        ue = () => {
          S(!C);
        };
      Object.assign(K.on, {
        _containerClasses(X, ee) {
          p(ee);
        },
      });
      const re = () => {
        (Object.assign(K.on, J), (y = !0));
        const X = { ...K };
        if (
          (delete X.wrapperClass,
          (z.current = new $o(X)),
          z.current.virtual && z.current.params.virtual.enabled)
        ) {
          z.current.virtual.slides = F;
          const ee = {
            cache: !1,
            slides: F,
            renderExternal: v,
            renderExternalUpdate: !1,
          };
          (an(z.current.params.virtual, ee),
            an(z.current.originalParams.virtual, ee));
        }
      };
      (D.current || re(), z.current && z.current.on('_beforeBreakpoint', ue));
      const pe = () => {
          y ||
            !J ||
            !z.current ||
            Object.keys(J).forEach((X) => {
              z.current.on(X, J[X]);
            });
        },
        G = () => {
          !J ||
            !z.current ||
            Object.keys(J).forEach((X) => {
              z.current.off(X, J[X]);
            });
        };
      (N.useEffect(() => () => {
        z.current && z.current.off('_beforeBreakpoint', ue);
      }),
        N.useEffect(() => {
          !j.current &&
            z.current &&
            (z.current.emitSlidesClasses(), (j.current = !0));
        }),
        si(() => {
          if ((h && (h.current = D.current), !!D.current))
            return (
              z.current.destroyed && re(),
              Yb(
                {
                  el: D.current,
                  nextEl: O.current,
                  prevEl: V.current,
                  paginationEl: k.current,
                  scrollbarEl: I.current,
                  swiper: z.current,
                },
                K,
              ),
              c && !z.current.destroyed && c(z.current),
              () => {
                z.current && !z.current.destroyed && z.current.destroy(!0, !1);
              }
            );
        }, []),
        si(() => {
          pe();
          const X = Vb(H, x.current, F, T.current, (ee) => ee.key);
          return (
            (x.current = H),
            (T.current = F),
            X.length &&
              z.current &&
              !z.current.destroyed &&
              Gb({
                swiper: z.current,
                slides: F,
                passedParams: H,
                changedParams: X,
                nextEl: O.current,
                prevEl: V.current,
                scrollbarEl: I.current,
                paginationEl: k.current,
              }),
            () => {
              G();
            }
          );
        }),
        si(() => {
          Xb(z.current);
        }, [b]));
      function Z() {
        return K.virtual ?
            Zb(z.current, F, b)
          : F.map((X, ee) =>
              ke.cloneElement(X, { swiper: z.current, swiperSlideIndex: ee }),
            );
      }
      return ke.createElement(
        r,
        Xs({ ref: D, className: rp(`${d}${a ? ` ${a}` : ''}`) }, ne),
        ke.createElement(
          $b.Provider,
          { value: z.current },
          P['container-start'],
          ke.createElement(
            s,
            { className: Ub(K.wrapperClass) },
            P['wrapper-start'],
            Z(),
            P['wrapper-end'],
          ),
          np(K) &&
            ke.createElement(
              ke.Fragment,
              null,
              ke.createElement('div', {
                ref: V,
                className: 'swiper-button-prev',
              }),
              ke.createElement('div', {
                ref: O,
                className: 'swiper-button-next',
              }),
            ),
          sp(K) &&
            ke.createElement('div', { ref: I, className: 'swiper-scrollbar' }),
          ip(K) &&
            ke.createElement('div', { ref: k, className: 'swiper-pagination' }),
          P['container-end'],
        ),
      );
    },
  );
cp.displayName = 'Swiper';
const Hs = N.forwardRef(
  (
    {
      tag: a = 'div',
      children: r,
      className: s = '',
      swiper: i,
      zoom: c,
      lazy: f,
      virtualIndex: h,
      swiperSlideIndex: y,
      ...d
    } = {},
    p,
  ) => {
    const b = N.useRef(null),
      [v, C] = N.useState('swiper-slide'),
      [S, j] = N.useState(!1);
    function D(O, V, k) {
      V === b.current && C(k);
    }
    (si(() => {
      if (
        (typeof y < 'u' && (b.current.swiperSlideIndex = y),
        p && (p.current = b.current),
        !(!b.current || !i))
      ) {
        if (i.destroyed) {
          v !== 'swiper-slide' && C('swiper-slide');
          return;
        }
        return (
          i.on('_slideClass', D),
          () => {
            i && i.off('_slideClass', D);
          }
        );
      }
    }),
      si(() => {
        i && b.current && !i.destroyed && C(i.getSlideClasses(b.current));
      }, [i]));
    const z = {
        isActive: v.indexOf('swiper-slide-active') >= 0,
        isVisible: v.indexOf('swiper-slide-visible') >= 0,
        isPrev: v.indexOf('swiper-slide-prev') >= 0,
        isNext: v.indexOf('swiper-slide-next') >= 0,
      },
      x = () => (typeof r == 'function' ? r(z) : r),
      T = () => {
        j(!0);
      };
    return ke.createElement(
      a,
      Xs(
        {
          'ref': b,
          'className': rp(`${v}${s ? ` ${s}` : ''}`),
          'data-swiper-slide-index': h,
          'onLoad': T,
        },
        d,
      ),
      c &&
        ke.createElement(
          vh.Provider,
          { value: z },
          ke.createElement(
            'div',
            {
              'className': 'swiper-zoom-container',
              'data-swiper-zoom': typeof c == 'number' ? c : void 0,
            },
            x(),
            f &&
              !S &&
              ke.createElement('div', {
                className: 'swiper-lazy-preloader',
                ref: (O) => {
                  O && (O.lazyPreloaderManaged = !0);
                },
              }),
          ),
        ),
      !c &&
        ke.createElement(
          vh.Provider,
          { value: z },
          x(),
          f &&
            !S &&
            ke.createElement('div', {
              className: 'swiper-lazy-preloader',
              ref: (O) => {
                O && (O.lazyPreloaderManaged = !0);
              },
            }),
        ),
    );
  },
);
Hs.displayName = 'SwiperSlide';
function fp(a, r, s, i) {
  return (
    a.params.createElements &&
      Object.keys(i).forEach((c) => {
        if (!s[c] && s.auto === !0) {
          let f = Kt(a.el, `.${i[c]}`)[0];
          (f || ((f = Ys('div', i[c])), (f.className = i[c]), a.el.append(f)),
            (s[c] = f),
            (r[c] = f));
        }
      }),
    s
  );
}
const gh =
  '<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';
function kb({ swiper: a, extendParams: r, on: s, emit: i }) {
  (r({
    navigation: {
      nextEl: null,
      prevEl: null,
      addIcons: !0,
      hideOnClick: !1,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled',
    },
  }),
    (a.navigation = { nextEl: null, prevEl: null, arrowSvg: gh }));
  function c(S) {
    let j;
    return (
        S &&
          typeof S == 'string' &&
          a.isElement &&
          ((j = a.el.querySelector(S) || a.hostEl.querySelector(S)), j)
      ) ?
        j
      : (S &&
          (typeof S == 'string' && (j = [...document.querySelectorAll(S)]),
          (
            a.params.uniqueNavElements &&
            typeof S == 'string' &&
            j &&
            j.length > 1 &&
            a.el.querySelectorAll(S).length === 1
          ) ?
            (j = a.el.querySelector(S))
          : j && j.length === 1 && (j = j[0])),
        S && !j ? S : j);
  }
  function f(S, j) {
    const D = a.params.navigation;
    ((S = Ie(S)),
      S.forEach((z) => {
        z &&
          (z.classList[j ? 'add' : 'remove'](...D.disabledClass.split(' ')),
          z.tagName === 'BUTTON' && (z.disabled = j),
          a.params.watchOverflow &&
            a.enabled &&
            z.classList[a.isLocked ? 'add' : 'remove'](D.lockClass));
      }));
  }
  function h() {
    const { nextEl: S, prevEl: j } = a.navigation;
    if (a.params.loop) {
      (f(j, !1), f(S, !1));
      return;
    }
    (f(j, a.isBeginning && !a.params.rewind),
      f(S, a.isEnd && !a.params.rewind));
  }
  function y(S) {
    (S.preventDefault(),
      !(a.isBeginning && !a.params.loop && !a.params.rewind) &&
        (a.slidePrev(), i('navigationPrev')));
  }
  function d(S) {
    (S.preventDefault(),
      !(a.isEnd && !a.params.loop && !a.params.rewind) &&
        (a.slideNext(), i('navigationNext')));
  }
  function p() {
    const S = a.params.navigation;
    if (
      ((a.params.navigation = fp(
        a,
        a.originalParams.navigation,
        a.params.navigation,
        { nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' },
      )),
      !(S.nextEl || S.prevEl))
    )
      return;
    let j = c(S.nextEl),
      D = c(S.prevEl);
    (Object.assign(a.navigation, { nextEl: j, prevEl: D }),
      (j = Ie(j)),
      (D = Ie(D)));
    const z = (x, T) => {
      if (x) {
        if (
          S.addIcons &&
          x.matches('.swiper-button-next,.swiper-button-prev') &&
          !x.querySelector('svg')
        ) {
          const O = document.createElement('div');
          (ui(O, gh), x.appendChild(O.querySelector('svg')), O.remove());
        }
        x.addEventListener('click', T === 'next' ? d : y);
      }
      !a.enabled && x && x.classList.add(...S.lockClass.split(' '));
    };
    (j.forEach((x) => z(x, 'next')), D.forEach((x) => z(x, 'prev')));
  }
  function b() {
    let { nextEl: S, prevEl: j } = a.navigation;
    ((S = Ie(S)), (j = Ie(j)));
    const D = (z, x) => {
      (z.removeEventListener('click', x === 'next' ? d : y),
        z.classList.remove(...a.params.navigation.disabledClass.split(' ')));
    };
    (S.forEach((z) => D(z, 'next')), j.forEach((z) => D(z, 'prev')));
  }
  (s('init', () => {
    a.params.navigation.enabled === !1 ? C() : (p(), h());
  }),
    s('toEdge fromEdge lock unlock', () => {
      h();
    }),
    s('destroy', () => {
      b();
    }),
    s('enable disable', () => {
      let { nextEl: S, prevEl: j } = a.navigation;
      if (((S = Ie(S)), (j = Ie(j)), a.enabled)) {
        h();
        return;
      }
      [...S, ...j]
        .filter((D) => !!D)
        .forEach((D) => D.classList.add(a.params.navigation.lockClass));
    }),
    s('click', (S, j) => {
      let { nextEl: D, prevEl: z } = a.navigation;
      ((D = Ie(D)), (z = Ie(z)));
      const x = j.target;
      let T = z.includes(x) || D.includes(x);
      if (a.isElement && !T) {
        const O = j.path || (j.composedPath && j.composedPath());
        O && (T = O.find((V) => D.includes(V) || z.includes(V)));
      }
      if (a.params.navigation.hideOnClick && !T) {
        if (
          a.pagination &&
          a.params.pagination &&
          a.params.pagination.clickable &&
          (a.pagination.el === x || a.pagination.el.contains(x))
        )
          return;
        let O;
        (D.length ?
          (O = D[0].classList.contains(a.params.navigation.hiddenClass))
        : z.length &&
          (O = z[0].classList.contains(a.params.navigation.hiddenClass)),
          i(O === !0 ? 'navigationShow' : 'navigationHide'),
          [...D, ...z]
            .filter((V) => !!V)
            .forEach((V) =>
              V.classList.toggle(a.params.navigation.hiddenClass),
            ));
      }
    }));
  const v = () => {
      (a.el.classList.remove(
        ...a.params.navigation.navigationDisabledClass.split(' '),
      ),
        p(),
        h());
    },
    C = () => {
      (a.el.classList.add(
        ...a.params.navigation.navigationDisabledClass.split(' '),
      ),
        b());
    };
  Object.assign(a.navigation, {
    enable: v,
    disable: C,
    update: h,
    init: p,
    destroy: b,
  });
}
function ii(a = '') {
  return `.${a
    .trim()
    .replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g, '\\$1')
    .replace(/ /g, '.')}`;
}
function Kb({ swiper: a, extendParams: r, on: s, emit: i }) {
  const c = 'swiper-pagination';
  (r({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: 'bullets',
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (x) => x,
      formatFractionTotal: (x) => x,
      bulletClass: `${c}-bullet`,
      bulletActiveClass: `${c}-bullet-active`,
      modifierClass: `${c}-`,
      currentClass: `${c}-current`,
      totalClass: `${c}-total`,
      hiddenClass: `${c}-hidden`,
      progressbarFillClass: `${c}-progressbar-fill`,
      progressbarOppositeClass: `${c}-progressbar-opposite`,
      clickableClass: `${c}-clickable`,
      lockClass: `${c}-lock`,
      horizontalClass: `${c}-horizontal`,
      verticalClass: `${c}-vertical`,
      paginationDisabledClass: `${c}-disabled`,
    },
  }),
    (a.pagination = { el: null, bullets: [] }));
  let f,
    h = 0;
  function y() {
    return (
      !a.params.pagination.el ||
      !a.pagination.el ||
      (Array.isArray(a.pagination.el) && a.pagination.el.length === 0)
    );
  }
  function d(x, T) {
    const { bulletActiveClass: O } = a.params.pagination;
    x &&
      ((x = x[`${T === 'prev' ? 'previous' : 'next'}ElementSibling`]),
      x &&
        (x.classList.add(`${O}-${T}`),
        (x = x[`${T === 'prev' ? 'previous' : 'next'}ElementSibling`]),
        x && x.classList.add(`${O}-${T}-${T}`)));
  }
  function p(x, T, O) {
    if (((x = x % O), (T = T % O), T === x + 1)) return 'next';
    if (T === x - 1) return 'previous';
  }
  function b(x) {
    const T = x.target.closest(ii(a.params.pagination.bulletClass));
    if (!T) return;
    x.preventDefault();
    const O = Vs(T) * a.params.slidesPerGroup;
    if (a.params.loop) {
      if (a.realIndex === O) return;
      const V = p(a.realIndex, O, a.slides.length);
      V === 'next' ? a.slideNext()
      : V === 'previous' ? a.slidePrev()
      : a.slideToLoop(O);
    } else a.slideTo(O);
  }
  function v() {
    const x = a.rtl,
      T = a.params.pagination;
    if (y()) return;
    let O = a.pagination.el;
    O = Ie(O);
    let V, k;
    const I =
        a.virtual && a.params.virtual.enabled ?
          a.virtual.slides.length
        : a.slides.length,
      K =
        a.params.loop ?
          Math.ceil(I / a.params.slidesPerGroup)
        : a.snapGrid.length;
    if (
      (a.params.loop ?
        ((k = a.previousRealIndex || 0),
        (V =
          a.params.slidesPerGroup > 1 ?
            Math.floor(a.realIndex / a.params.slidesPerGroup)
          : a.realIndex))
      : typeof a.snapIndex < 'u' ?
        ((V = a.snapIndex), (k = a.previousSnapIndex))
      : ((k = a.previousIndex || 0), (V = a.activeIndex || 0)),
      T.type === 'bullets' &&
        a.pagination.bullets &&
        a.pagination.bullets.length > 0)
    ) {
      const H = a.pagination.bullets;
      let ne, J, F;
      if (
        (T.dynamicBullets &&
          ((f = Lo(H[0], a.isHorizontal() ? 'width' : 'height')),
          O.forEach((P) => {
            P.style[a.isHorizontal() ? 'width' : 'height'] =
              `${f * (T.dynamicMainBullets + 4)}px`;
          }),
          T.dynamicMainBullets > 1 &&
            k !== void 0 &&
            ((h += V - (k || 0)),
            h > T.dynamicMainBullets - 1 ?
              (h = T.dynamicMainBullets - 1)
            : h < 0 && (h = 0)),
          (ne = Math.max(V - h, 0)),
          (J = ne + (Math.min(H.length, T.dynamicMainBullets) - 1)),
          (F = (J + ne) / 2)),
        H.forEach((P) => {
          const ue = [
            ...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(
              (re) => `${T.bulletActiveClass}${re}`,
            ),
          ]
            .map((re) =>
              typeof re == 'string' && re.includes(' ') ? re.split(' ') : re,
            )
            .flat();
          P.classList.remove(...ue);
        }),
        O.length > 1)
      )
        H.forEach((P) => {
          const ue = Vs(P);
          (ue === V ?
            P.classList.add(...T.bulletActiveClass.split(' '))
          : a.isElement && P.setAttribute('part', 'bullet'),
            T.dynamicBullets &&
              (ue >= ne &&
                ue <= J &&
                P.classList.add(...`${T.bulletActiveClass}-main`.split(' ')),
              ue === ne && d(P, 'prev'),
              ue === J && d(P, 'next')));
        });
      else {
        const P = H[V];
        if (
          (P && P.classList.add(...T.bulletActiveClass.split(' ')),
          a.isElement &&
            H.forEach((ue, re) => {
              ue.setAttribute('part', re === V ? 'bullet-active' : 'bullet');
            }),
          T.dynamicBullets)
        ) {
          const ue = H[ne],
            re = H[J];
          for (let pe = ne; pe <= J; pe += 1)
            H[pe] &&
              H[pe].classList.add(...`${T.bulletActiveClass}-main`.split(' '));
          (d(ue, 'prev'), d(re, 'next'));
        }
      }
      if (T.dynamicBullets) {
        const P = Math.min(H.length, T.dynamicMainBullets + 4),
          ue = (f * P - f) / 2 - F * f,
          re = x ? 'right' : 'left';
        H.forEach((pe) => {
          pe.style[a.isHorizontal() ? re : 'top'] = `${ue}px`;
        });
      }
    }
    O.forEach((H, ne) => {
      if (
        (T.type === 'fraction' &&
          (H.querySelectorAll(ii(T.currentClass)).forEach((J) => {
            J.textContent = T.formatFractionCurrent(V + 1);
          }),
          H.querySelectorAll(ii(T.totalClass)).forEach((J) => {
            J.textContent = T.formatFractionTotal(K);
          })),
        T.type === 'progressbar')
      ) {
        let J;
        T.progressbarOpposite ?
          (J = a.isHorizontal() ? 'vertical' : 'horizontal')
        : (J = a.isHorizontal() ? 'horizontal' : 'vertical');
        const F = (V + 1) / K;
        let P = 1,
          ue = 1;
        (J === 'horizontal' ? (P = F) : (ue = F),
          H.querySelectorAll(ii(T.progressbarFillClass)).forEach((re) => {
            ((re.style.transform = `translate3d(0,0,0) scaleX(${P}) scaleY(${ue})`),
              (re.style.transitionDuration = `${a.params.speed}ms`));
          }));
      }
      (T.type === 'custom' && T.renderCustom ?
        (ui(H, T.renderCustom(a, V + 1, K)),
        ne === 0 && i('paginationRender', H))
      : (ne === 0 && i('paginationRender', H), i('paginationUpdate', H)),
        a.params.watchOverflow &&
          a.enabled &&
          H.classList[a.isLocked ? 'add' : 'remove'](T.lockClass));
    });
  }
  function C() {
    const x = a.params.pagination;
    if (y()) return;
    const T =
      a.virtual && a.params.virtual.enabled ? a.virtual.slides.length
      : a.grid && a.params.grid.rows > 1 ?
        a.slides.length / Math.ceil(a.params.grid.rows)
      : a.slides.length;
    let O = a.pagination.el;
    O = Ie(O);
    let V = '';
    if (x.type === 'bullets') {
      let k =
        a.params.loop ?
          Math.ceil(T / a.params.slidesPerGroup)
        : a.snapGrid.length;
      a.params.freeMode && a.params.freeMode.enabled && k > T && (k = T);
      for (let I = 0; I < k; I += 1)
        x.renderBullet ?
          (V += x.renderBullet.call(a, I, x.bulletClass))
        : (V += `<${x.bulletElement} ${a.isElement ? 'part="bullet"' : ''} class="${x.bulletClass}"></${x.bulletElement}>`);
    }
    (x.type === 'fraction' &&
      (x.renderFraction ?
        (V = x.renderFraction.call(a, x.currentClass, x.totalClass))
      : (V = `<span class="${x.currentClass}"></span> / <span class="${x.totalClass}"></span>`)),
      x.type === 'progressbar' &&
        (x.renderProgressbar ?
          (V = x.renderProgressbar.call(a, x.progressbarFillClass))
        : (V = `<span class="${x.progressbarFillClass}"></span>`)),
      (a.pagination.bullets = []),
      O.forEach((k) => {
        (x.type !== 'custom' && ui(k, V || ''),
          x.type === 'bullets' &&
            a.pagination.bullets.push(
              ...k.querySelectorAll(ii(x.bulletClass)),
            ));
      }),
      x.type !== 'custom' && i('paginationRender', O[0]));
  }
  function S() {
    a.params.pagination = fp(
      a,
      a.originalParams.pagination,
      a.params.pagination,
      { el: 'swiper-pagination' },
    );
    const x = a.params.pagination;
    if (!x.el) return;
    let T;
    (typeof x.el == 'string' && a.isElement && (T = a.el.querySelector(x.el)),
      !T &&
        typeof x.el == 'string' &&
        (T = [...document.querySelectorAll(x.el)]),
      T || (T = x.el),
      !(!T || T.length === 0) &&
        (a.params.uniqueNavElements &&
          typeof x.el == 'string' &&
          Array.isArray(T) &&
          T.length > 1 &&
          ((T = [...a.el.querySelectorAll(x.el)]),
          T.length > 1 && (T = T.find((O) => Ph(O, '.swiper')[0] === a.el))),
        Array.isArray(T) && T.length === 1 && (T = T[0]),
        Object.assign(a.pagination, { el: T }),
        (T = Ie(T)),
        T.forEach((O) => {
          (x.type === 'bullets' &&
            x.clickable &&
            O.classList.add(...(x.clickableClass || '').split(' ')),
            O.classList.add(x.modifierClass + x.type),
            O.classList.add(
              a.isHorizontal() ? x.horizontalClass : x.verticalClass,
            ),
            x.type === 'bullets' &&
              x.dynamicBullets &&
              (O.classList.add(`${x.modifierClass}${x.type}-dynamic`),
              (h = 0),
              x.dynamicMainBullets < 1 && (x.dynamicMainBullets = 1)),
            x.type === 'progressbar' &&
              x.progressbarOpposite &&
              O.classList.add(x.progressbarOppositeClass),
            x.clickable && O.addEventListener('click', b),
            a.enabled || O.classList.add(x.lockClass));
        })));
  }
  function j() {
    const x = a.params.pagination;
    if (y()) return;
    let T = a.pagination.el;
    (T &&
      ((T = Ie(T)),
      T.forEach((O) => {
        (O.classList.remove(x.hiddenClass),
          O.classList.remove(x.modifierClass + x.type),
          O.classList.remove(
            a.isHorizontal() ? x.horizontalClass : x.verticalClass,
          ),
          x.clickable &&
            (O.classList.remove(...(x.clickableClass || '').split(' ')),
            O.removeEventListener('click', b)));
      })),
      a.pagination.bullets &&
        a.pagination.bullets.forEach((O) =>
          O.classList.remove(...x.bulletActiveClass.split(' ')),
        ));
  }
  (s('changeDirection', () => {
    if (!a.pagination || !a.pagination.el) return;
    const x = a.params.pagination;
    let { el: T } = a.pagination;
    ((T = Ie(T)),
      T.forEach((O) => {
        (O.classList.remove(x.horizontalClass, x.verticalClass),
          O.classList.add(
            a.isHorizontal() ? x.horizontalClass : x.verticalClass,
          ));
      }));
  }),
    s('init', () => {
      a.params.pagination.enabled === !1 ? z() : (S(), C(), v());
    }),
    s('activeIndexChange', () => {
      typeof a.snapIndex > 'u' && v();
    }),
    s('snapIndexChange', () => {
      v();
    }),
    s('snapGridLengthChange', () => {
      (C(), v());
    }),
    s('destroy', () => {
      j();
    }),
    s('enable disable', () => {
      let { el: x } = a.pagination;
      x &&
        ((x = Ie(x)),
        x.forEach((T) =>
          T.classList[a.enabled ? 'remove' : 'add'](
            a.params.pagination.lockClass,
          ),
        ));
    }),
    s('lock unlock', () => {
      v();
    }),
    s('click', (x, T) => {
      const O = T.target,
        V = Ie(a.pagination.el);
      if (
        a.params.pagination.el &&
        a.params.pagination.hideOnClick &&
        V &&
        V.length > 0 &&
        !O.classList.contains(a.params.pagination.bulletClass)
      ) {
        if (
          a.navigation &&
          ((a.navigation.nextEl && O === a.navigation.nextEl) ||
            (a.navigation.prevEl && O === a.navigation.prevEl))
        )
          return;
        const k = V[0].classList.contains(a.params.pagination.hiddenClass);
        (i(k === !0 ? 'paginationShow' : 'paginationHide'),
          V.forEach((I) =>
            I.classList.toggle(a.params.pagination.hiddenClass),
          ));
      }
    }));
  const D = () => {
      a.el.classList.remove(a.params.pagination.paginationDisabledClass);
      let { el: x } = a.pagination;
      (x &&
        ((x = Ie(x)),
        x.forEach((T) =>
          T.classList.remove(a.params.pagination.paginationDisabledClass),
        )),
        S(),
        C(),
        v());
    },
    z = () => {
      a.el.classList.add(a.params.pagination.paginationDisabledClass);
      let { el: x } = a.pagination;
      (x &&
        ((x = Ie(x)),
        x.forEach((T) =>
          T.classList.add(a.params.pagination.paginationDisabledClass),
        )),
        j());
    };
  Object.assign(a.pagination, {
    enable: D,
    disable: z,
    render: C,
    update: v,
    init: S,
    destroy: j,
  });
}
function Jb({ swiper: a, extendParams: r, on: s, emit: i, params: c }) {
  ((a.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    r({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    }));
  let f,
    h,
    y = c && c.autoplay ? c.autoplay.delay : 3e3,
    d = c && c.autoplay ? c.autoplay.delay : 3e3,
    p,
    b = new Date().getTime(),
    v,
    C,
    S,
    j,
    D,
    z;
  function x(Z) {
    !a ||
      a.destroyed ||
      !a.wrapperEl ||
      (Z.target === a.wrapperEl &&
        (a.wrapperEl.removeEventListener('transitionend', x),
        !(z || (Z.detail && Z.detail.bySwiperTouchMove)) && ne()));
  }
  const T = () => {
      if (a.destroyed || !a.autoplay.running) return;
      a.autoplay.paused ? (v = !0) : v && ((d = p), (v = !1));
      const Z = a.autoplay.paused ? p : b + d - new Date().getTime();
      ((a.autoplay.timeLeft = Z),
        i('autoplayTimeLeft', Z, Z / y),
        (h = requestAnimationFrame(() => {
          T();
        })));
    },
    O = () => {
      let Z;
      return (
        a.virtual && a.params.virtual.enabled ?
          (Z = a.slides.find((ee) =>
            ee.classList.contains('swiper-slide-active'),
          ))
        : (Z = a.slides[a.activeIndex]),
        Z ? parseInt(Z.getAttribute('data-swiper-autoplay'), 10) : void 0
      );
    },
    V = () => {
      let Z = a.params.autoplay.delay;
      const X = O();
      return (!Number.isNaN(X) && X > 0 && (Z = X), Z);
    },
    k = (Z) => {
      if (a.destroyed || !a.autoplay.running) return;
      (cancelAnimationFrame(h), T());
      let X = Z;
      (typeof X > 'u' && ((X = V()), (y = X), (d = X)), (p = X));
      const ee = a.params.speed,
        oe = () => {
          !a ||
            a.destroyed ||
            (a.params.autoplay.reverseDirection ?
              !a.isBeginning || a.params.loop || a.params.rewind ?
                (a.slidePrev(ee, !0, !0), i('autoplay'))
              : a.params.autoplay.stopOnLastSlide ||
                (a.slideTo(a.slides.length - 1, ee, !0, !0), i('autoplay'))
            : !a.isEnd || a.params.loop || a.params.rewind ?
              (a.slideNext(ee, !0, !0), i('autoplay'))
            : a.params.autoplay.stopOnLastSlide ||
              (a.slideTo(0, ee, !0, !0), i('autoplay')),
            a.params.cssMode &&
              ((b = new Date().getTime()),
              requestAnimationFrame(() => {
                k();
              })));
        };
      return (
        X > 0 ?
          (clearTimeout(f),
          (f = setTimeout(() => {
            oe();
          }, X)))
        : requestAnimationFrame(() => {
            oe();
          }),
        X
      );
    },
    I = () => {
      ((b = new Date().getTime()),
        (a.autoplay.running = !0),
        k(),
        i('autoplayStart'));
    },
    K = () => {
      ((a.autoplay.running = !1),
        clearTimeout(f),
        cancelAnimationFrame(h),
        i('autoplayStop'));
    },
    H = (Z, X) => {
      if (a.destroyed || !a.autoplay.running) return;
      (clearTimeout(f), Z || (D = !0));
      const ee = () => {
        (i('autoplayPause'),
          a.params.autoplay.waitForTransition ?
            a.wrapperEl.addEventListener('transitionend', x)
          : ne());
      };
      if (((a.autoplay.paused = !0), X)) {
        ee();
        return;
      }
      ((p = (p || a.params.autoplay.delay) - (new Date().getTime() - b)),
        !(a.isEnd && p < 0 && !a.params.loop) && (p < 0 && (p = 0), ee()));
    },
    ne = () => {
      (a.isEnd && p < 0 && !a.params.loop) ||
        a.destroyed ||
        !a.autoplay.running ||
        ((b = new Date().getTime()),
        D ? ((D = !1), k(p)) : k(),
        (a.autoplay.paused = !1),
        i('autoplayResume'));
    },
    J = () => {
      if (a.destroyed || !a.autoplay.running) return;
      const Z = Jt();
      (Z.visibilityState === 'hidden' && ((D = !0), H(!0)),
        Z.visibilityState === 'visible' && ne());
    },
    F = (Z) => {
      Z.pointerType === 'mouse' &&
        ((D = !0), (z = !0), !(a.animating || a.autoplay.paused) && H(!0));
    },
    P = (Z) => {
      Z.pointerType === 'mouse' && ((z = !1), a.autoplay.paused && ne());
    },
    ue = () => {
      a.params.autoplay.pauseOnMouseEnter &&
        (a.el.addEventListener('pointerenter', F),
        a.el.addEventListener('pointerleave', P));
    },
    re = () => {
      a.el &&
        typeof a.el != 'string' &&
        (a.el.removeEventListener('pointerenter', F),
        a.el.removeEventListener('pointerleave', P));
    },
    pe = () => {
      Jt().addEventListener('visibilitychange', J);
    },
    G = () => {
      Jt().removeEventListener('visibilitychange', J);
    };
  (s('init', () => {
    a.params.autoplay.enabled && (ue(), pe(), I());
  }),
    s('destroy', () => {
      (re(), G(), a.autoplay.running && K());
    }),
    s('_freeModeStaticRelease', () => {
      (S || D) && ne();
    }),
    s('_freeModeNoMomentumRelease', () => {
      a.params.autoplay.disableOnInteraction ? K() : H(!0, !0);
    }),
    s('beforeTransitionStart', (Z, X, ee) => {
      a.destroyed ||
        !a.autoplay.running ||
        (ee || !a.params.autoplay.disableOnInteraction ? H(!0, !0) : K());
    }),
    s('sliderFirstMove', () => {
      if (!(a.destroyed || !a.autoplay.running)) {
        if (a.params.autoplay.disableOnInteraction) {
          K();
          return;
        }
        ((C = !0),
          (S = !1),
          (D = !1),
          (j = setTimeout(() => {
            ((D = !0), (S = !0), H(!0));
          }, 200)));
      }
    }),
    s('touchEnd', () => {
      if (!(a.destroyed || !a.autoplay.running || !C)) {
        if (
          (clearTimeout(j),
          clearTimeout(f),
          a.params.autoplay.disableOnInteraction)
        ) {
          ((S = !1), (C = !1));
          return;
        }
        (S && a.params.cssMode && ne(), (S = !1), (C = !1));
      }
    }),
    s('slideChange', () => {
      a.destroyed ||
        !a.autoplay.running ||
        (a.autoplay.paused && ((p = V()), (y = V())));
    }),
    Object.assign(a.autoplay, { start: I, stop: K, pause: H, resume: ne }));
}
const Fb = () =>
    g.jsxs('div', {
      className: 'banner',
      children: [
        g.jsx('button', {
          className: 'banner__arrow banner__arrow--prev swiper-btn-prev',
          children: '<',
        }),
        g.jsx('div', {
          className: 'banner__slider',
          children: g.jsxs(cp, {
            modules: [Jb, Kb, kb],
            spaceBetween: 0,
            slidesPerView: 1,
            loop: !0,
            speed: 800,
            autoplay: {
              delay: 7e3,
              disableOnInteraction: !1,
              pauseOnMouseEnter: !0,
            },
            pagination: { clickable: !0, el: '.banner__pagination' },
            navigation: {
              prevEl: '.swiper-btn-prev',
              nextEl: '.swiper-btn-next',
            },
            children: [
              g.jsx(Hs, {
                children: g.jsx('img', {
                  src: 'img/main-banner.png',
                  alt: 'iPhone 14 Pro',
                  className: 'banner__image',
                }),
              }),
              g.jsx(Hs, {
                children: g.jsx('img', {
                  src: 'img/banner-phones.png',
                  alt: 'Phones',
                  className: 'banner__image',
                }),
              }),
              g.jsx(Hs, {
                children: g.jsx('img', {
                  src: 'img/banner-accessories.png',
                  alt: 'Accessories',
                  className: 'banner__image',
                }),
              }),
            ],
          }),
        }),
        g.jsx('button', {
          className: 'banner__arrow banner__arrow--next swiper-btn-next',
          children: '>',
        }),
        g.jsx('div', { className: 'banner__pagination' }),
      ],
    }),
  Pb = '_loader_16313_14',
  Wb = { loader: Pb },
  dp = () => g.jsx('span', { className: Wb.loader }),
  Ib = () => {
    const [a, r] = N.useState([]),
      [s, i] = N.useState([]),
      [c, f] = N.useState([]),
      [h, y] = N.useState([]),
      [d, p] = N.useState(!0),
      b = N.useRef(null),
      v = N.useRef(null),
      C = [...a, ...s, ...c],
      S = Js(h).slice(0, 12),
      j = di(C).slice(0, 12),
      D = (z, x) => {
        if (z.current) {
          const V =
            (z.current.querySelector('article')?.offsetWidth || 272) + 16;
          z.current.scrollBy({
            left: x === 'left' ? -V : V,
            behavior: 'smooth',
          });
        }
      };
    return (
      N.useEffect(() => {
        Promise.all([
          $s(),
          ks(),
          Ks(),
          e1(),
          new Promise((z) => setTimeout(z, 1e3)),
        ])
          .then(([z, x, T, O]) => {
            (r(z), i(x), f(T), y(O));
          })
          .catch((z) => console.error('Error loading data:', z))
          .finally(() => p(!1));
      }, []),
      d ?
        g.jsx('main', {
          className: fe.home,
          children: g.jsx('div', {
            className: fe['loader-wrapper'],
            children: g.jsx(dp, {}),
          }),
        })
      : g.jsx('main', {
          className: fe.home,
          children: g.jsxs('div', {
            className: fe.container,
            children: [
              g.jsxs('section', {
                className: fe.hero,
                children: [
                  g.jsx('h1', {
                    className: fe.hero__title,
                    children: 'Welcome to Nice Gadgets store!',
                  }),
                  g.jsx(Fb, {}),
                ],
              }),
              g.jsxs('section', {
                className: fe.section,
                children: [
                  g.jsxs('div', {
                    className: fe.section__header,
                    children: [
                      g.jsx('h2', {
                        className: fe.section__title,
                        children: 'Brand new models',
                      }),
                      g.jsxs('div', {
                        className: fe.section__arrows,
                        children: [
                          g.jsx('button', {
                            'className': fe['arrow-btn'],
                            'aria-label': 'Previous',
                            'onClick': () => D(b, 'left'),
                            'children': '<',
                          }),
                          g.jsx('button', {
                            'className': fe['arrow-btn'],
                            'aria-label': 'Next',
                            'onClick': () => D(b, 'right'),
                            'children': '>',
                          }),
                        ],
                      }),
                    ],
                  }),
                  g.jsx('div', {
                    className: fe['products-slider'],
                    ref: b,
                    children: g.jsx('div', {
                      className: fe['products-slider__track'],
                      children: S.map((z) => g.jsx(pa, { product: z }, z.id)),
                    }),
                  }),
                ],
              }),
              g.jsxs('section', {
                className: fe.section,
                children: [
                  g.jsx('h2', {
                    className: fe.section__title,
                    children: 'Shop by category',
                  }),
                  g.jsxs('div', {
                    className: fe.categories,
                    children: [
                      g.jsxs('article', {
                        className: fe['category-card'],
                        children: [
                          g.jsx('div', {
                            className: fe['category-card__image-wrapper'],
                            children: g.jsx('img', {
                              src: '/img/category-phones.png',
                              alt: 'Mobile phones',
                              className: fe['category-card__image'],
                            }),
                          }),
                          g.jsxs('div', {
                            className: fe['category-card__info'],
                            children: [
                              g.jsx('h3', {
                                className: fe['category-card__title'],
                                children: 'Mobile phones',
                              }),
                              g.jsxs('p', {
                                className: fe['category-card__count'],
                                children: [a.length, ' models'],
                              }),
                            ],
                          }),
                        ],
                      }),
                      g.jsxs('article', {
                        className: fe['category-card'],
                        children: [
                          g.jsx('div', {
                            className: fe['category-card__image-wrapper'],
                            children: g.jsx('img', {
                              src: '/img/category-tablets.png',
                              alt: 'Tablets',
                              className: fe['category-card__image-tablets'],
                            }),
                          }),
                          g.jsxs('div', {
                            className: fe['category-card__info'],
                            children: [
                              g.jsx('h3', {
                                className: fe['category-card__title'],
                                children: 'Tablets',
                              }),
                              g.jsxs('p', {
                                className: fe['category-card__count'],
                                children: [s.length, ' models'],
                              }),
                            ],
                          }),
                        ],
                      }),
                      g.jsxs('article', {
                        className: fe['category-card'],
                        children: [
                          g.jsx('div', {
                            className: fe['category-card__image-wrapper'],
                            children: g.jsx('img', {
                              src: '/img/category-accessories.png',
                              alt: 'Accessories',
                              className: fe['category-card__image-access'],
                            }),
                          }),
                          g.jsxs('div', {
                            className: fe['category-card__info'],
                            children: [
                              g.jsx('h3', {
                                className: fe['category-card__title'],
                                children: 'Accessories',
                              }),
                              g.jsxs('p', {
                                className: fe['category-card__count'],
                                children: [c.length, ' models'],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              g.jsxs('section', {
                className: fe.section,
                children: [
                  g.jsxs('div', {
                    className: fe.section__header,
                    children: [
                      g.jsx('h2', {
                        className: fe.section__title,
                        children: 'Hot prices',
                      }),
                      g.jsxs('div', {
                        className: fe.section__arrows,
                        children: [
                          g.jsx('button', {
                            'className': fe['arrow-btn'],
                            'aria-label': 'Previous',
                            'onClick': () => D(v, 'left'),
                            'children': '<',
                          }),
                          g.jsx('button', {
                            'className': fe['arrow-btn'],
                            'aria-label': 'Next',
                            'onClick': () => D(v, 'right'),
                            'children': '>',
                          }),
                        ],
                      }),
                    ],
                  }),
                  g.jsx('div', {
                    className: fe['products-slider'],
                    ref: v,
                    children: g.jsx('div', {
                      className: fe['products-slider__track'],
                      children: j.map((z) => g.jsx(pa, { product: z }, z.id)),
                    }),
                  }),
                ],
              }),
            ],
          }),
        })
    );
  },
  eS = () => {
    const [a, r] = N.useState([]),
      [, s] = N.useState(!0),
      i = async () => {
        s(!0);
        try {
          const c = JSON.parse(localStorage.getItem('favorites') || '[]'),
            [f, h, y] = await Promise.all([$s(), ks(), Ks()]),
            p = [...f, ...h, ...y].filter((b) => c.includes('' + b.id));
          r(p);
        } catch (c) {
          console.error('Failed to load favorites:', c);
        } finally {
          s(!1);
        }
      };
    return (
      N.useEffect(() => {
        i();
      }, []),
      g.jsx(g.Fragment, {
        children: g.jsx('div', {
          className: 'favorites-page',
          children: g.jsxs('div', {
            className: 'favorites-page__container',
            children: [
              g.jsx(nn, {}),
              g.jsxs('div', {
                className: 'favorites-page__text',
                children: [
                  g.jsx('h1', {
                    className: 'favorites-page__title',
                    children: 'Favourites',
                  }),
                  g.jsxs('div', {
                    className: 'favorites-page__items-number',
                    children: [a.length, ' items'],
                  }),
                ],
              }),
              g.jsx('div', {
                className: 'favorites-page__all-favorites',
                children: a.map((c) =>
                  g.jsx(pa, { product: c, onFavoriteChange: i }, c.id),
                ),
              }),
            ],
          }),
        }),
      })
    );
  },
  tS = ({ images: a, name: r }) => {
    const [s, i] = N.useState(a[0]);
    return (
      N.useEffect(() => {
        i(a[0]);
      }, [a]),
      g.jsxs('div', {
        className: 'gallery',
        children: [
          g.jsx('div', {
            className: 'gallery__main',
            children: g.jsx('img', { src: `/${s}`, alt: r }),
          }),
          g.jsx('div', {
            className: 'gallery__thumbs',
            children: a.map((c, f) =>
              g.jsx(
                'div',
                {
                  className: `thumb ${s === c ? 'active' : ''}`,
                  onClick: () => i(c),
                  children: g.jsx('img', {
                    src: `/${c}`,
                    alt: `${r} ${f + 1}`,
                  }),
                },
                f,
              ),
            ),
          }),
        ],
      })
    );
  };
var jo = { exports: {} };
var yh;
function lS() {
  return (
    yh ||
      ((yh = 1),
      (function (a) {
        (function () {
          var r = {}.hasOwnProperty;
          function s() {
            for (var f = '', h = 0; h < arguments.length; h++) {
              var y = arguments[h];
              y && (f = c(f, i(y)));
            }
            return f;
          }
          function i(f) {
            if (typeof f == 'string' || typeof f == 'number') return f;
            if (typeof f != 'object') return '';
            if (Array.isArray(f)) return s.apply(null, f);
            if (
              f.toString !== Object.prototype.toString &&
              !f.toString.toString().includes('[native code]')
            )
              return f.toString();
            var h = '';
            for (var y in f) r.call(f, y) && f[y] && (h = c(h, y));
            return h;
          }
          function c(f, h) {
            return (
              h ?
                f ? f + ' ' + h
                : f + h
              : f
            );
          }
          a.exports ?
            ((s.default = s), (a.exports = s))
          : (window.classNames = s);
        })();
      })(jo)),
    jo.exports
  );
}
var aS = lS();
const _h = bh(aS),
  nS = (a) => {
    const { color: r, to: s, selected: i = !1 } = a;
    return g.jsx(Zl, {
      to: s,
      className: _h('color-link', { 'color-link--active': i }),
      children: g.jsx('span', {
        className: _h('color-link__circle', {
          'color-link--green': r === 'green',
          'color-link--black': r === 'black',
          'color-link--purple': r === 'purple',
          'color-link--red': r === 'red',
          'color-link--white': r === 'white',
          'color-link--yellow': r === 'yellow',
          'color-link--gold': r === 'gold',
          'color-link--midnightgreen': r === 'midnightgreen',
          'color-link--silver': r === 'silver',
          'color-link--spacegray': r === 'spacegray',
          'color-link--rosegold': r === 'rosegold',
          'color-link--coral': r === 'coral',
          'color-link--spaceblack': r === 'spaceblack',
          'color-link--midnight': r === 'midnight',
          'color-link--pink': r === 'pink',
          'color-link--blue': r === 'blue',
          'color-link--sierrablue': r === 'sierrablue',
          'color-link--graphite': r === 'graphite',
        }),
      }),
    });
  },
  iS = ({
    namespaceId: a,
    colorsAvailable: r,
    currentColor: s,
    capacityAvailable: i,
    currentCapacity: c,
    onCapacityChange: f,
  }) => {
    const { category: h } = Go(),
      y = (d, p) => {
        const b = d.toLowerCase().replace(/\s+/g, '-'),
          v = p.toLowerCase().replace(/\s+/g, '-');
        return `${a}-${b}-${v}`;
      };
    return g.jsxs('div', {
      className: 'product-options',
      children: [
        g.jsx('div', {
          className: 'product-options__title',
          children: 'Available colors',
        }),
        g.jsx('div', {
          className: 'product-options__colors',
          children: g.jsx('ul', {
            className: 'product-options__list',
            children: r.map((d) => {
              const p = y(c, d),
                b = `/${h}/${p}`,
                v = d.toLowerCase().replace(/\s+/g, '');
              return g.jsx(
                'li',
                {
                  className: 'product-options__item',
                  children: g.jsx(nS, { to: b, color: v, selected: s === d }),
                },
                d,
              );
            }),
          }),
        }),
        g.jsx('div', {
          className: 'product-options__title--capacity',
          children: 'Select capacity',
        }),
        g.jsx('div', {
          className: 'product-options__ram',
          children: i.map((d) =>
            g.jsx(
              'button',
              {
                className: `product-options__ram-item ${c === d ? 'product-options__ram-item--active' : ''}`,
                onClick: () => f(y(d, s)),
                children: d,
              },
              d,
            ),
          ),
        }),
      ],
    });
  },
  sS = ({ priceRegular: a, priceDiscount: r }) =>
    g.jsxs('div', {
      className: 'purchase',
      children: [
        g.jsxs('div', {
          className: 'purchase-price',
          children: [
            g.jsxs('span', {
              className: 'purchase-price__current',
              children: ['$', r],
            }),
            g.jsxs('span', {
              className: 'purchase-price__full',
              children: ['$', a],
            }),
          ],
        }),
        g.jsx('div', {
          className: 'purchase__buttons',
          children: g.jsx(Qh, {
            onAddToCart: () => console.log('Added to cart'),
            onToggleFavorite: () => console.log('Toggled favorite'),
          }),
        }),
      ],
    }),
  rS = ({ description: a, screen: r, resolution: s, capacity: i, ram: c }) =>
    g.jsxs('div', {
      className: 'ProductDetail',
      children: [
        g.jsx('div', {
          className: 'ProductFeatures',
          children: g.jsx(Xh, {
            screen: r,
            resolution: s,
            capacity: i,
            ram: c,
            showTopLine: !1,
          }),
        }),
        g.jsxs('div', {
          className: 'ProductDetail__about',
          children: [
            g.jsx('h3', {
              className: 'ProductDetail__about-title',
              children: 'About',
            }),
            g.jsx('div', {
              className: 'ProductDetail__about-main',
              children: a.map((f, h) =>
                g.jsxs(
                  'div',
                  {
                    className: 'ProductDetail__about-main',
                    children: [
                      g.jsx('h4', {
                        className: 'ProductDetail__about-main-title',
                        children: f.title,
                      }),
                      f.text.map((y, d) =>
                        g.jsx(
                          'span',
                          {
                            className: 'ProductDetail__about-main-second',
                            children: y,
                          },
                          d,
                        ),
                      ),
                    ],
                  },
                  h,
                ),
              ),
            }),
          ],
        }),
      ],
    }),
  uS = ({
    screen: a,
    resolution: r,
    processor: s,
    ram: i,
    capacity: c,
    camera: f,
    zoom: h,
    cell: y,
  }) => {
    const d = [
      { label: 'Screen', value: a },
      { label: 'Resolution', value: r },
      { label: 'Processor', value: s },
      { label: 'RAM', value: i },
      { label: 'Built in memory', value: c },
      { label: 'Camera', value: f },
      { label: 'Zoom', value: h },
      { label: 'Cell', value: String(y) },
    ];
    return g.jsxs('div', {
      className: 'TechSpecs',
      children: [
        g.jsx('h3', { className: 'TechSpecs__title', children: 'Tech specs' }),
        d.map(
          (p) =>
            p.value &&
            g.jsxs(
              'p',
              {
                className: 'TechSpecs__item',
                children: [
                  g.jsx('span', {
                    className: 'TechSpecs__name',
                    children: p.label,
                  }),
                  g.jsx('span', {
                    className: 'TechSpecs__value',
                    children: p.value,
                  }),
                ],
              },
              p.label,
            ),
        ),
      ],
    });
  },
  oS = () => {
    const [a, r] = N.useState([]),
      [s, i] = N.useState([]),
      [c, f] = N.useState([]),
      h = [...a, ...s, ...c],
      y = di(h).slice(0, 24);
    return (
      N.useEffect(() => {
        ($s()
          .then(r)
          .catch((d) => console.error('Error loading phones:', d)),
          ks()
            .then(i)
            .catch((d) => console.error('Error loading tablets:', d)),
          Ks()
            .then(f)
            .catch((d) => console.error('Error loading accessories:', d)));
      }, []),
      g.jsxs('div', {
        className: 'AlsoLike',
        children: [
          g.jsxs('div', {
            className: 'AlsoLike__header',
            children: [
              g.jsx('h3', {
                className: 'AlsoLike__title',
                children: 'You may also like',
              }),
              g.jsxs('div', {
                className: 'AlsoLike__arrows',
                children: [
                  g.jsx('button', {
                    className: 'AlsoLike__arrow-btn',
                    children: '‹',
                  }),
                  g.jsx('button', {
                    className: 'AlsoLike__arrow-btn',
                    children: '›',
                  }),
                ],
              }),
            ],
          }),
          g.jsx('div', {
            className: 'AlsoLike__slider',
            children: g.jsx('div', {
              className: 'AlsoLike__track',
              children: y.map((d) => g.jsx(pa, { product: d }, d.id)),
            }),
          }),
        ],
      })
    );
  },
  cS = ({ product: a, onCapacityChange: r }) =>
    g.jsxs('div', {
      className: 'product-card',
      children: [
        g.jsx(tS, { images: a.images, name: a.name }),
        g.jsx(iS, {
          itemId: a.id,
          namespaceId: a.namespaceId,
          colorsAvailable: a.colorsAvailable,
          currentColor: a.color,
          capacityAvailable: a.capacityAvailable,
          currentCapacity: a.capacity,
          onCapacityChange: r,
        }),
        g.jsx(sS, {
          priceDiscount: a.priceDiscount,
          priceRegular: a.priceRegular,
        }),
        g.jsx(rS, {
          description: a.description,
          screen: a.screen,
          resolution: a.resolution,
          capacity: a.capacity,
          ram: a.ram,
        }),
        g.jsx(uS, {
          screen: a.screen,
          resolution: a.resolution,
          processor: a.processor,
          ram: a.ram,
          capacity: a.capacity,
          camera: a.camera,
          zoom: a.zoom,
          cell: a.cell,
        }),
        g.jsx(oS, {}),
      ],
    }),
  fS = () => {
    const { category: a, productId: r } = Go(),
      s = Rh(),
      [i, c] = N.useState(null),
      [f, h] = N.useState(!0),
      [y, d] = N.useState(!1),
      p = (v, C = !1) => {
        a &&
          (C || h(!0),
          d(!1),
          t1(a, v)
            .then((S) => {
              c(S);
            })
            .catch(() => {
              d(!0);
            })
            .finally(() => {
              h(!1);
            }));
      };
    N.useEffect(() => {
      if (!r) return;
      const v = setTimeout(() => {
        p(r, !1);
      }, 1e3);
      return () => clearTimeout(v);
    }, [a, r]);
    const b = (v) => {
      p(v, !0);
    };
    return (
      f ? g.jsx('div', { className: 'loader-wrapper', children: g.jsx(dp, {}) })
      : y || !i ?
        g.jsx('div', {
          className: 'product-details-page',
          children: g.jsxs('div', {
            className: 'product-not-found',
            children: [
              g.jsx(nn, {}),
              g.jsxs('div', {
                className: 'product-not-found__content',
                children: [
                  g.jsx('h1', {
                    className: 'product-not-found__title',
                    children: 'Unfortunately, the product is unknown.',
                  }),
                  g.jsx('p', {
                    className: 'product-not-found__text',
                    children:
                      'We couldnt find the product youre looking for. It may have been removed or the link is outdated.',
                  }),
                  g.jsx('button', {
                    className: 'product-not-found__button',
                    onClick: () => s(-1),
                    children: 'Go back',
                  }),
                ],
              }),
            ],
          }),
        })
      : g.jsxs('div', {
          className: 'product-details-page',
          children: [
            g.jsx(nn, {}),
            g.jsx(kh, {}),
            g.jsx('div', {
              className: 'product-header',
              children: g.jsx('h1', {
                className: 'product-title',
                children: i.name,
              }),
            }),
            g.jsx(cS, { product: i, onCapacityChange: b }),
          ],
        })
    );
  },
  dS = () =>
    g.jsxs('div', {
      className: 'App',
      children: [
        g.jsx(Qy, {}),
        g.jsx('div', {
          className: 'container',
          children: g.jsxs(V0, {
            children: [
              g.jsx(pl, { path: '/', element: g.jsx(Ib, {}) }),
              g.jsx(pl, { path: '/phones', element: g.jsx(g1, {}) }),
              g.jsx(pl, { path: '/tablets', element: g.jsx(o_, {}) }),
              g.jsx(pl, { path: '/accessories', element: g.jsx(A1, {}) }),
              g.jsx(pl, { path: '/cart', element: g.jsx(W1, {}) }),
              g.jsx(pl, { path: '/favorites', element: g.jsx(eS, {}) }),
              g.jsx(pl, {
                path: '/:category/:productId',
                element: g.jsx(fS, {}),
              }),
              g.jsx(pl, { path: '*', element: g.jsx(I1, {}) }),
            ],
          }),
        }),
        g.jsx(Iy, {}),
      ],
    }),
  mS = ({ children: a }) => {
    const [r, s] = N.useState([]),
      i = (v) => `${v.itemId}_${v.color}_${v.capacity}`,
      c = (v) => {
        const C = i(v);
        s((S) =>
          S.find((D) => D.itemUniqueId === C) ?
            S.map((D) =>
              D.itemUniqueId === C ? { ...D, quantity: D.quantity + 1 } : D,
            )
          : [...S, { ...v, quantity: 1, itemUniqueId: C }],
        );
      },
      f = (v) => {
        s((C) => C.filter((S) => S.itemUniqueId !== v));
      },
      h = (v, C) => {
        if (C <= 0) {
          f(v);
          return;
        }
        s((S) =>
          S.map((j) => (j.itemUniqueId === v ? { ...j, quantity: C } : j)),
        );
      },
      y = () => s([]),
      d = N.useCallback(
        () =>
          r.reduce(
            (v, C) => v + (C.priceDiscount ?? C.priceRegular) * C.quantity,
            0,
          ),
        [r],
      ),
      p = N.useCallback(() => r.reduce((v, C) => v + C.quantity, 0), [r]),
      b = (v) => {
        const C = i(v);
        return r.some((S) => S.itemUniqueId === C);
      };
    return g.jsx(Zh.Provider, {
      value: {
        cartItems: r,
        addToCart: c,
        removeFromCart: f,
        updateQuantity: h,
        clearCart: y,
        getTotalPrice: d,
        getTotalItems: p,
        isInCart: b,
      },
      children: a,
    });
  };
Zg.createRoot(document.getElementById('root')).render(
  g.jsx(dy, { children: g.jsx(mS, { children: g.jsx(dS, {}) }) }),
);
