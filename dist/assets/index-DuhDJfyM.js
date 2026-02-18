(function () {
  const a = document.createElement('link').relList;
  if (a && a.supports && a.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) l(o);
  new MutationObserver((o) => {
    for (const u of o)
      if (u.type === 'childList')
        for (const f of u.addedNodes)
          f.tagName === 'LINK' && f.rel === 'modulepreload' && l(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(o) {
    const u = {};
    return (
      o.integrity && (u.integrity = o.integrity),
      o.referrerPolicy && (u.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials' ? (u.credentials = 'include')
      : o.crossOrigin === 'anonymous' ? (u.credentials = 'omit')
      : (u.credentials = 'same-origin'),
      u
    );
  }
  function l(o) {
    if (o.ep) return;
    o.ep = !0;
    const u = s(o);
    fetch(o.href, u);
  }
})();
function by(t) {
  return (
      t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default')
    ) ?
      t.default
    : t;
}
var Uc = { exports: {} },
  Ps = {};
var Lg;
function xx() {
  if (Lg) return Ps;
  Lg = 1;
  var t = Symbol.for('react.transitional.element'),
    a = Symbol.for('react.fragment');
  function s(l, o, u) {
    var f = null;
    if (
      (u !== void 0 && (f = '' + u),
      o.key !== void 0 && (f = '' + o.key),
      'key' in o)
    ) {
      u = {};
      for (var p in o) p !== 'key' && (u[p] = o[p]);
    } else u = o;
    return (
      (o = u.ref),
      { $$typeof: t, type: l, key: f, ref: o !== void 0 ? o : null, props: u }
    );
  }
  return ((Ps.Fragment = a), (Ps.jsx = s), (Ps.jsxs = s), Ps);
}
var zg;
function Tx() {
  return (zg || ((zg = 1), (Uc.exports = xx())), Uc.exports);
}
var S = Tx(),
  Hc = { exports: {} },
  Gs = {},
  Pc = { exports: {} },
  Gc = {};
var Vg;
function _x() {
  return (
    Vg ||
      ((Vg = 1),
      (function (t) {
        function a(G, k) {
          var q = G.length;
          G.push(k);
          e: for (; 0 < q; ) {
            var ee = (q - 1) >>> 1,
              re = G[ee];
            if (0 < o(re, k)) ((G[ee] = k), (G[q] = re), (q = ee));
            else break e;
          }
        }
        function s(G) {
          return G.length === 0 ? null : G[0];
        }
        function l(G) {
          if (G.length === 0) return null;
          var k = G[0],
            q = G.pop();
          if (q !== k) {
            G[0] = q;
            e: for (var ee = 0, re = G.length, N = re >>> 1; ee < N; ) {
              var F = 2 * (ee + 1) - 1,
                te = G[F],
                ie = F + 1,
                me = G[ie];
              if (0 > o(te, q))
                ie < re && 0 > o(me, te) ?
                  ((G[ee] = me), (G[ie] = q), (ee = ie))
                : ((G[ee] = te), (G[F] = q), (ee = F));
              else if (ie < re && 0 > o(me, q))
                ((G[ee] = me), (G[ie] = q), (ee = ie));
              else break e;
            }
          }
          return k;
        }
        function o(G, k) {
          var q = G.sortIndex - k.sortIndex;
          return q !== 0 ? q : G.id - k.id;
        }
        if (
          ((t.unstable_now = void 0),
          typeof performance == 'object' &&
            typeof performance.now == 'function')
        ) {
          var u = performance;
          t.unstable_now = function () {
            return u.now();
          };
        } else {
          var f = Date,
            p = f.now();
          t.unstable_now = function () {
            return f.now() - p;
          };
        }
        var h = [],
          m = [],
          v = 1,
          g = null,
          x = 3,
          b = !1,
          A = !1,
          E = !1,
          M = !1,
          _ = typeof setTimeout == 'function' ? setTimeout : null,
          C = typeof clearTimeout == 'function' ? clearTimeout : null,
          w = typeof setImmediate < 'u' ? setImmediate : null;
        function U(G) {
          for (var k = s(m); k !== null; ) {
            if (k.callback === null) l(m);
            else if (k.startTime <= G)
              (l(m), (k.sortIndex = k.expirationTime), a(h, k));
            else break;
            k = s(m);
          }
        }
        function V(G) {
          if (((E = !1), U(G), !A))
            if (s(h) !== null) ((A = !0), $ || (($ = !0), J()));
            else {
              var k = s(m);
              k !== null && de(V, k.startTime - G);
            }
        }
        var $ = !1,
          X = -1,
          L = 5,
          W = -1;
        function Z() {
          return M ? !0 : !(t.unstable_now() - W < L);
        }
        function I() {
          if (((M = !1), $)) {
            var G = t.unstable_now();
            W = G;
            var k = !0;
            try {
              e: {
                ((A = !1), E && ((E = !1), C(X), (X = -1)), (b = !0));
                var q = x;
                try {
                  t: {
                    for (
                      U(G), g = s(h);
                      g !== null && !(g.expirationTime > G && Z());
                    ) {
                      var ee = g.callback;
                      if (typeof ee == 'function') {
                        ((g.callback = null), (x = g.priorityLevel));
                        var re = ee(g.expirationTime <= G);
                        if (((G = t.unstable_now()), typeof re == 'function')) {
                          ((g.callback = re), U(G), (k = !0));
                          break t;
                        }
                        (g === s(h) && l(h), U(G));
                      } else l(h);
                      g = s(h);
                    }
                    if (g !== null) k = !0;
                    else {
                      var N = s(m);
                      (N !== null && de(V, N.startTime - G), (k = !1));
                    }
                  }
                  break e;
                } finally {
                  ((g = null), (x = q), (b = !1));
                }
                k = void 0;
              }
            } finally {
              k ? J() : ($ = !1);
            }
          }
        }
        var J;
        if (typeof w == 'function')
          J = function () {
            w(I);
          };
        else if (typeof MessageChannel < 'u') {
          var ce = new MessageChannel(),
            oe = ce.port2;
          ((ce.port1.onmessage = I),
            (J = function () {
              oe.postMessage(null);
            }));
        } else
          J = function () {
            _(I, 0);
          };
        function de(G, k) {
          X = _(function () {
            G(t.unstable_now());
          }, k);
        }
        ((t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (G) {
            G.callback = null;
          }),
          (t.unstable_forceFrameRate = function (G) {
            0 > G || 125 < G ?
              console.error(
                'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
              )
            : (L = 0 < G ? Math.floor(1e3 / G) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (t.unstable_next = function (G) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var k = 3;
                break;
              default:
                k = x;
            }
            var q = x;
            x = k;
            try {
              return G();
            } finally {
              x = q;
            }
          }),
          (t.unstable_requestPaint = function () {
            M = !0;
          }),
          (t.unstable_runWithPriority = function (G, k) {
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
            var q = x;
            x = G;
            try {
              return k();
            } finally {
              x = q;
            }
          }),
          (t.unstable_scheduleCallback = function (G, k, q) {
            var ee = t.unstable_now();
            switch (
              (typeof q == 'object' && q !== null ?
                ((q = q.delay),
                (q = typeof q == 'number' && 0 < q ? ee + q : ee))
              : (q = ee),
              G)
            ) {
              case 1:
                var re = -1;
                break;
              case 2:
                re = 250;
                break;
              case 5:
                re = 1073741823;
                break;
              case 4:
                re = 1e4;
                break;
              default:
                re = 5e3;
            }
            return (
              (re = q + re),
              (G = {
                id: v++,
                callback: k,
                priorityLevel: G,
                startTime: q,
                expirationTime: re,
                sortIndex: -1,
              }),
              q > ee ?
                ((G.sortIndex = q),
                a(m, G),
                s(h) === null &&
                  G === s(m) &&
                  (E ? (C(X), (X = -1)) : (E = !0), de(V, q - ee)))
              : ((G.sortIndex = re),
                a(h, G),
                A || b || ((A = !0), $ || (($ = !0), J()))),
              G
            );
          }),
          (t.unstable_shouldYield = Z),
          (t.unstable_wrapCallback = function (G) {
            var k = x;
            return function () {
              var q = x;
              x = k;
              try {
                return G.apply(this, arguments);
              } finally {
                x = q;
              }
            };
          }));
      })(Gc)),
    Gc
  );
}
var Bg;
function Ex() {
  return (Bg || ((Bg = 1), (Pc.exports = _x())), Pc.exports);
}
var kc = { exports: {} },
  fe = {};
var Ug;
function Cx() {
  if (Ug) return fe;
  Ug = 1;
  var t = Symbol.for('react.transitional.element'),
    a = Symbol.for('react.portal'),
    s = Symbol.for('react.fragment'),
    l = Symbol.for('react.strict_mode'),
    o = Symbol.for('react.profiler'),
    u = Symbol.for('react.consumer'),
    f = Symbol.for('react.context'),
    p = Symbol.for('react.forward_ref'),
    h = Symbol.for('react.suspense'),
    m = Symbol.for('react.memo'),
    v = Symbol.for('react.lazy'),
    g = Symbol.for('react.activity'),
    x = Symbol.iterator;
  function b(N) {
    return N === null || typeof N != 'object' ?
        null
      : ((N = (x && N[x]) || N['@@iterator']),
        typeof N == 'function' ? N : null);
  }
  var A = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    E = Object.assign,
    M = {};
  function _(N, F, te) {
    ((this.props = N),
      (this.context = F),
      (this.refs = M),
      (this.updater = te || A));
  }
  ((_.prototype.isReactComponent = {}),
    (_.prototype.setState = function (N, F) {
      if (typeof N != 'object' && typeof N != 'function' && N != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, N, F, 'setState');
    }),
    (_.prototype.forceUpdate = function (N) {
      this.updater.enqueueForceUpdate(this, N, 'forceUpdate');
    }));
  function C() {}
  C.prototype = _.prototype;
  function w(N, F, te) {
    ((this.props = N),
      (this.context = F),
      (this.refs = M),
      (this.updater = te || A));
  }
  var U = (w.prototype = new C());
  ((U.constructor = w), E(U, _.prototype), (U.isPureReactComponent = !0));
  var V = Array.isArray;
  function $() {}
  var X = { H: null, A: null, T: null, S: null },
    L = Object.prototype.hasOwnProperty;
  function W(N, F, te) {
    var ie = te.ref;
    return {
      $$typeof: t,
      type: N,
      key: F,
      ref: ie !== void 0 ? ie : null,
      props: te,
    };
  }
  function Z(N, F) {
    return W(N.type, F, N.props);
  }
  function I(N) {
    return typeof N == 'object' && N !== null && N.$$typeof === t;
  }
  function J(N) {
    var F = { '=': '=0', ':': '=2' };
    return (
      '$' +
      N.replace(/[=:]/g, function (te) {
        return F[te];
      })
    );
  }
  var ce = /\/+/g;
  function oe(N, F) {
    return typeof N == 'object' && N !== null && N.key != null ?
        J('' + N.key)
      : F.toString(36);
  }
  function de(N) {
    switch (N.status) {
      case 'fulfilled':
        return N.value;
      case 'rejected':
        throw N.reason;
      default:
        switch (
          (typeof N.status == 'string' ?
            N.then($, $)
          : ((N.status = 'pending'),
            N.then(
              function (F) {
                N.status === 'pending' &&
                  ((N.status = 'fulfilled'), (N.value = F));
              },
              function (F) {
                N.status === 'pending' &&
                  ((N.status = 'rejected'), (N.reason = F));
              },
            )),
          N.status)
        ) {
          case 'fulfilled':
            return N.value;
          case 'rejected':
            throw N.reason;
        }
    }
    throw N;
  }
  function G(N, F, te, ie, me) {
    var ve = typeof N;
    (ve === 'undefined' || ve === 'boolean') && (N = null);
    var Ae = !1;
    if (N === null) Ae = !0;
    else
      switch (ve) {
        case 'bigint':
        case 'string':
        case 'number':
          Ae = !0;
          break;
        case 'object':
          switch (N.$$typeof) {
            case t:
            case a:
              Ae = !0;
              break;
            case v:
              return ((Ae = N._init), G(Ae(N._payload), F, te, ie, me));
          }
      }
    if (Ae)
      return (
        (me = me(N)),
        (Ae = ie === '' ? '.' + oe(N, 0) : ie),
        V(me) ?
          ((te = ''),
          Ae != null && (te = Ae.replace(ce, '$&/') + '/'),
          G(me, F, te, '', function (Ki) {
            return Ki;
          }))
        : me != null &&
          (I(me) &&
            (me = Z(
              me,
              te +
                (me.key == null || (N && N.key === me.key) ?
                  ''
                : ('' + me.key).replace(ce, '$&/') + '/') +
                Ae,
            )),
          F.push(me)),
        1
      );
    Ae = 0;
    var mt = ie === '' ? '.' : ie + ':';
    if (V(N))
      for (var ke = 0; ke < N.length; ke++)
        ((ie = N[ke]), (ve = mt + oe(ie, ke)), (Ae += G(ie, F, te, ve, me)));
    else if (((ke = b(N)), typeof ke == 'function'))
      for (N = ke.call(N), ke = 0; !(ie = N.next()).done; )
        ((ie = ie.value),
          (ve = mt + oe(ie, ke++)),
          (Ae += G(ie, F, te, ve, me)));
    else if (ve === 'object') {
      if (typeof N.then == 'function') return G(de(N), F, te, ie, me);
      throw (
        (F = String(N)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (F === '[object Object]' ?
              'object with keys {' + Object.keys(N).join(', ') + '}'
            : F) +
            '). If you meant to render a collection of children, use an array instead.',
        )
      );
    }
    return Ae;
  }
  function k(N, F, te) {
    if (N == null) return N;
    var ie = [],
      me = 0;
    return (
      G(N, ie, '', '', function (ve) {
        return F.call(te, ve, me++);
      }),
      ie
    );
  }
  function q(N) {
    if (N._status === -1) {
      var F = N._result;
      ((F = F()),
        F.then(
          function (te) {
            (N._status === 0 || N._status === -1) &&
              ((N._status = 1), (N._result = te));
          },
          function (te) {
            (N._status === 0 || N._status === -1) &&
              ((N._status = 2), (N._result = te));
          },
        ),
        N._status === -1 && ((N._status = 0), (N._result = F)));
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var ee =
      typeof reportError == 'function' ? reportError : (
        function (N) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var F = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                (
                  typeof N == 'object' &&
                  N !== null &&
                  typeof N.message == 'string'
                ) ?
                  String(N.message)
                : String(N),
              error: N,
            });
            if (!window.dispatchEvent(F)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', N);
            return;
          }
          console.error(N);
        }
      ),
    re = {
      map: k,
      forEach: function (N, F, te) {
        k(
          N,
          function () {
            F.apply(this, arguments);
          },
          te,
        );
      },
      count: function (N) {
        var F = 0;
        return (
          k(N, function () {
            F++;
          }),
          F
        );
      },
      toArray: function (N) {
        return (
          k(N, function (F) {
            return F;
          }) || []
        );
      },
      only: function (N) {
        if (!I(N))
          throw Error(
            'React.Children.only expected to receive a single React element child.',
          );
        return N;
      },
    };
  return (
    (fe.Activity = g),
    (fe.Children = re),
    (fe.Component = _),
    (fe.Fragment = s),
    (fe.Profiler = o),
    (fe.PureComponent = w),
    (fe.StrictMode = l),
    (fe.Suspense = h),
    (fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X),
    (fe.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (N) {
        return X.H.useMemoCache(N);
      },
    }),
    (fe.cache = function (N) {
      return function () {
        return N.apply(null, arguments);
      };
    }),
    (fe.cacheSignal = function () {
      return null;
    }),
    (fe.cloneElement = function (N, F, te) {
      if (N == null)
        throw Error(
          'The argument must be a React element, but you passed ' + N + '.',
        );
      var ie = E({}, N.props),
        me = N.key;
      if (F != null)
        for (ve in (F.key !== void 0 && (me = '' + F.key), F))
          !L.call(F, ve) ||
            ve === 'key' ||
            ve === '__self' ||
            ve === '__source' ||
            (ve === 'ref' && F.ref === void 0) ||
            (ie[ve] = F[ve]);
      var ve = arguments.length - 2;
      if (ve === 1) ie.children = te;
      else if (1 < ve) {
        for (var Ae = Array(ve), mt = 0; mt < ve; mt++)
          Ae[mt] = arguments[mt + 2];
        ie.children = Ae;
      }
      return W(N.type, me, ie);
    }),
    (fe.createContext = function (N) {
      return (
        (N = {
          $$typeof: f,
          _currentValue: N,
          _currentValue2: N,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (N.Provider = N),
        (N.Consumer = { $$typeof: u, _context: N }),
        N
      );
    }),
    (fe.createElement = function (N, F, te) {
      var ie,
        me = {},
        ve = null;
      if (F != null)
        for (ie in (F.key !== void 0 && (ve = '' + F.key), F))
          L.call(F, ie) &&
            ie !== 'key' &&
            ie !== '__self' &&
            ie !== '__source' &&
            (me[ie] = F[ie]);
      var Ae = arguments.length - 2;
      if (Ae === 1) me.children = te;
      else if (1 < Ae) {
        for (var mt = Array(Ae), ke = 0; ke < Ae; ke++)
          mt[ke] = arguments[ke + 2];
        me.children = mt;
      }
      if (N && N.defaultProps)
        for (ie in ((Ae = N.defaultProps), Ae))
          me[ie] === void 0 && (me[ie] = Ae[ie]);
      return W(N, ve, me);
    }),
    (fe.createRef = function () {
      return { current: null };
    }),
    (fe.forwardRef = function (N) {
      return { $$typeof: p, render: N };
    }),
    (fe.isValidElement = I),
    (fe.lazy = function (N) {
      return { $$typeof: v, _payload: { _status: -1, _result: N }, _init: q };
    }),
    (fe.memo = function (N, F) {
      return { $$typeof: m, type: N, compare: F === void 0 ? null : F };
    }),
    (fe.startTransition = function (N) {
      var F = X.T,
        te = {};
      X.T = te;
      try {
        var ie = N(),
          me = X.S;
        (me !== null && me(te, ie),
          typeof ie == 'object' &&
            ie !== null &&
            typeof ie.then == 'function' &&
            ie.then($, ee));
      } catch (ve) {
        ee(ve);
      } finally {
        (F !== null && te.types !== null && (F.types = te.types), (X.T = F));
      }
    }),
    (fe.unstable_useCacheRefresh = function () {
      return X.H.useCacheRefresh();
    }),
    (fe.use = function (N) {
      return X.H.use(N);
    }),
    (fe.useActionState = function (N, F, te) {
      return X.H.useActionState(N, F, te);
    }),
    (fe.useCallback = function (N, F) {
      return X.H.useCallback(N, F);
    }),
    (fe.useContext = function (N) {
      return X.H.useContext(N);
    }),
    (fe.useDebugValue = function () {}),
    (fe.useDeferredValue = function (N, F) {
      return X.H.useDeferredValue(N, F);
    }),
    (fe.useEffect = function (N, F) {
      return X.H.useEffect(N, F);
    }),
    (fe.useEffectEvent = function (N) {
      return X.H.useEffectEvent(N);
    }),
    (fe.useId = function () {
      return X.H.useId();
    }),
    (fe.useImperativeHandle = function (N, F, te) {
      return X.H.useImperativeHandle(N, F, te);
    }),
    (fe.useInsertionEffect = function (N, F) {
      return X.H.useInsertionEffect(N, F);
    }),
    (fe.useLayoutEffect = function (N, F) {
      return X.H.useLayoutEffect(N, F);
    }),
    (fe.useMemo = function (N, F) {
      return X.H.useMemo(N, F);
    }),
    (fe.useOptimistic = function (N, F) {
      return X.H.useOptimistic(N, F);
    }),
    (fe.useReducer = function (N, F, te) {
      return X.H.useReducer(N, F, te);
    }),
    (fe.useRef = function (N) {
      return X.H.useRef(N);
    }),
    (fe.useState = function (N) {
      return X.H.useState(N);
    }),
    (fe.useSyncExternalStore = function (N, F, te) {
      return X.H.useSyncExternalStore(N, F, te);
    }),
    (fe.useTransition = function () {
      return X.H.useTransition();
    }),
    (fe.version = '19.2.4'),
    fe
  );
}
var Hg;
function Kf() {
  return (Hg || ((Hg = 1), (kc.exports = Cx())), kc.exports);
}
var qc = { exports: {} },
  dt = {};
var Pg;
function Ax() {
  if (Pg) return dt;
  Pg = 1;
  var t = Kf();
  function a(h) {
    var m = 'https://react.dev/errors/' + h;
    if (1 < arguments.length) {
      m += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        m += '&args[]=' + encodeURIComponent(arguments[v]);
    }
    return (
      'Minified React error #' +
      h +
      '; visit ' +
      m +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function s() {}
  var l = {
      d: {
        f: s,
        r: function () {
          throw Error(a(522));
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
    o = Symbol.for('react.portal');
  function u(h, m, v) {
    var g =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: g == null ? null : '' + g,
      children: h,
      containerInfo: m,
      implementation: v,
    };
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(h, m) {
    if (h === 'font') return '';
    if (typeof m == 'string') return m === 'use-credentials' ? m : '';
  }
  return (
    (dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l),
    (dt.createPortal = function (h, m) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(a(299));
      return u(h, m, null, v);
    }),
    (dt.flushSync = function (h) {
      var m = f.T,
        v = l.p;
      try {
        if (((f.T = null), (l.p = 2), h)) return h();
      } finally {
        ((f.T = m), (l.p = v), l.d.f());
      }
    }),
    (dt.preconnect = function (h, m) {
      typeof h == 'string' &&
        (m ?
          ((m = m.crossOrigin),
          (m =
            typeof m == 'string' ?
              m === 'use-credentials' ?
                m
              : ''
            : void 0))
        : (m = null),
        l.d.C(h, m));
    }),
    (dt.prefetchDNS = function (h) {
      typeof h == 'string' && l.d.D(h);
    }),
    (dt.preinit = function (h, m) {
      if (typeof h == 'string' && m && typeof m.as == 'string') {
        var v = m.as,
          g = p(v, m.crossOrigin),
          x = typeof m.integrity == 'string' ? m.integrity : void 0,
          b = typeof m.fetchPriority == 'string' ? m.fetchPriority : void 0;
        v === 'style' ?
          l.d.S(h, typeof m.precedence == 'string' ? m.precedence : void 0, {
            crossOrigin: g,
            integrity: x,
            fetchPriority: b,
          })
        : v === 'script' &&
          l.d.X(h, {
            crossOrigin: g,
            integrity: x,
            fetchPriority: b,
            nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
          });
      }
    }),
    (dt.preinitModule = function (h, m) {
      if (typeof h == 'string')
        if (typeof m == 'object' && m !== null) {
          if (m.as == null || m.as === 'script') {
            var v = p(m.as, m.crossOrigin);
            l.d.M(h, {
              crossOrigin: v,
              integrity: typeof m.integrity == 'string' ? m.integrity : void 0,
              nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
            });
          }
        } else m == null && l.d.M(h);
    }),
    (dt.preload = function (h, m) {
      if (
        typeof h == 'string' &&
        typeof m == 'object' &&
        m !== null &&
        typeof m.as == 'string'
      ) {
        var v = m.as,
          g = p(v, m.crossOrigin);
        l.d.L(h, v, {
          crossOrigin: g,
          integrity: typeof m.integrity == 'string' ? m.integrity : void 0,
          nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
          type: typeof m.type == 'string' ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == 'string' ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == 'string' ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == 'string' ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == 'string' ? m.imageSizes : void 0,
          media: typeof m.media == 'string' ? m.media : void 0,
        });
      }
    }),
    (dt.preloadModule = function (h, m) {
      if (typeof h == 'string')
        if (m) {
          var v = p(m.as, m.crossOrigin);
          l.d.m(h, {
            as: typeof m.as == 'string' && m.as !== 'script' ? m.as : void 0,
            crossOrigin: v,
            integrity: typeof m.integrity == 'string' ? m.integrity : void 0,
          });
        } else l.d.m(h);
    }),
    (dt.requestFormReset = function (h) {
      l.d.r(h);
    }),
    (dt.unstable_batchedUpdates = function (h, m) {
      return h(m);
    }),
    (dt.useFormState = function (h, m, v) {
      return f.H.useFormState(h, m, v);
    }),
    (dt.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (dt.version = '19.2.4'),
    dt
  );
}
var Gg;
function Mx() {
  if (Gg) return qc.exports;
  Gg = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (a) {
        console.error(a);
      }
  }
  return (t(), (qc.exports = Ax()), qc.exports);
}
var kg;
function wx() {
  if (kg) return Gs;
  kg = 1;
  var t = Ex(),
    a = Kf(),
    s = Mx();
  function l(e) {
    var n = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      n += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++)
        n += '&args[]=' + encodeURIComponent(arguments[i]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      n +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function o(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function u(e) {
    var n = e,
      i = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do ((n = e), (n.flags & 4098) !== 0 && (i = n.return), (e = n.return));
      while (e);
    }
    return n.tag === 3 ? i : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (e.tag === 31) {
      var n = e.memoizedState;
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (u(e) !== e) throw Error(l(188));
  }
  function m(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = u(e)), n === null)) throw Error(l(188));
      return n !== e ? null : e;
    }
    for (var i = e, r = n; ; ) {
      var c = i.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (((r = c.return), r !== null)) {
          i = r;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === i) return (h(c), e);
          if (d === r) return (h(c), n);
          d = d.sibling;
        }
        throw Error(l(188));
      }
      if (i.return !== r.return) ((i = c), (r = d));
      else {
        for (var y = !1, T = c.child; T; ) {
          if (T === i) {
            ((y = !0), (i = c), (r = d));
            break;
          }
          if (T === r) {
            ((y = !0), (r = c), (i = d));
            break;
          }
          T = T.sibling;
        }
        if (!y) {
          for (T = d.child; T; ) {
            if (T === i) {
              ((y = !0), (i = d), (r = c));
              break;
            }
            if (T === r) {
              ((y = !0), (r = d), (i = c));
              break;
            }
            T = T.sibling;
          }
          if (!y) throw Error(l(189));
        }
      }
      if (i.alternate !== r) throw Error(l(190));
    }
    if (i.tag !== 3) throw Error(l(188));
    return i.stateNode.current === i ? e : n;
  }
  function v(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((n = v(e)), n !== null)) return n;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign,
    x = Symbol.for('react.element'),
    b = Symbol.for('react.transitional.element'),
    A = Symbol.for('react.portal'),
    E = Symbol.for('react.fragment'),
    M = Symbol.for('react.strict_mode'),
    _ = Symbol.for('react.profiler'),
    C = Symbol.for('react.consumer'),
    w = Symbol.for('react.context'),
    U = Symbol.for('react.forward_ref'),
    V = Symbol.for('react.suspense'),
    $ = Symbol.for('react.suspense_list'),
    X = Symbol.for('react.memo'),
    L = Symbol.for('react.lazy'),
    W = Symbol.for('react.activity'),
    Z = Symbol.for('react.memo_cache_sentinel'),
    I = Symbol.iterator;
  function J(e) {
    return e === null || typeof e != 'object' ?
        null
      : ((e = (I && e[I]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var ce = Symbol.for('react.client.reference');
  function oe(e) {
    if (e == null) return null;
    if (typeof e == 'function')
      return e.$$typeof === ce ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case E:
        return 'Fragment';
      case _:
        return 'Profiler';
      case M:
        return 'StrictMode';
      case V:
        return 'Suspense';
      case $:
        return 'SuspenseList';
      case W:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case A:
          return 'Portal';
        case w:
          return e.displayName || 'Context';
        case C:
          return (e._context.displayName || 'Context') + '.Consumer';
        case U:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case X:
          return (
            (n = e.displayName || null),
            n !== null ? n : oe(e.type) || 'Memo'
          );
        case L:
          ((n = e._payload), (e = e._init));
          try {
            return oe(e(n));
          } catch {}
      }
    return null;
  }
  var de = Array.isArray,
    G = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    k = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    q = { pending: !1, data: null, method: null, action: null },
    ee = [],
    re = -1;
  function N(e) {
    return { current: e };
  }
  function F(e) {
    0 > re || ((e.current = ee[re]), (ee[re] = null), re--);
  }
  function te(e, n) {
    (re++, (ee[re] = e.current), (e.current = n));
  }
  var ie = N(null),
    me = N(null),
    ve = N(null),
    Ae = N(null);
  function mt(e, n) {
    switch ((te(ve, n), te(me, e), te(ie, null), n.nodeType)) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? ag(e) : 0;
        break;
      default:
        if (((e = n.tagName), (n = n.namespaceURI)))
          ((n = ag(n)), (e = ig(n, e)));
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
    (F(ie), te(ie, e));
  }
  function ke() {
    (F(ie), F(me), F(ve));
  }
  function Ki(e) {
    e.memoizedState !== null && te(Ae, e);
    var n = ie.current,
      i = ig(n, e.type);
    n !== i && (te(me, e), te(ie, i));
  }
  function ml(e) {
    (me.current === e && (F(ie), F(me)),
      Ae.current === e && (F(Ae), (Vs._currentValue = q)));
  }
  var So, jd;
  function ya(e) {
    if (So === void 0)
      try {
        throw Error();
      } catch (i) {
        var n = i.stack.trim().match(/\n( *(at )?)/);
        ((So = (n && n[1]) || ''),
          (jd =
            (
              -1 <
              i.stack.indexOf(`
    at`)
            ) ?
              ' (<anonymous>)'
            : -1 < i.stack.indexOf('@') ? '@unknown:0:0'
            : ''));
      }
    return (
      `
` +
      So +
      e +
      jd
    );
  }
  var xo = !1;
  function To(e, n) {
    if (!e || xo) return '';
    xo = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var K = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(K.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(K, []);
                } catch (P) {
                  var H = P;
                }
                Reflect.construct(e, [], K);
              } else {
                try {
                  K.call();
                } catch (P) {
                  H = P;
                }
                e.call(K.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (P) {
                H = P;
              }
              (K = e()) &&
                typeof K.catch == 'function' &&
                K.catch(function () {});
            }
          } catch (P) {
            if (P && H && typeof P.stack == 'string') return [P.stack, H.stack];
          }
          return [null, null];
        },
      };
      r.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var c = Object.getOwnPropertyDescriptor(
        r.DetermineComponentFrameRoot,
        'name',
      );
      c &&
        c.configurable &&
        Object.defineProperty(r.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var d = r.DetermineComponentFrameRoot(),
        y = d[0],
        T = d[1];
      if (y && T) {
        var O = y.split(`
`),
          B = T.split(`
`);
        for (
          c = r = 0;
          r < O.length && !O[r].includes('DetermineComponentFrameRoot');
        )
          r++;
        for (; c < B.length && !B[c].includes('DetermineComponentFrameRoot'); )
          c++;
        if (r === O.length || c === B.length)
          for (
            r = O.length - 1, c = B.length - 1;
            1 <= r && 0 <= c && O[r] !== B[c];
          )
            c--;
        for (; 1 <= r && 0 <= c; r--, c--)
          if (O[r] !== B[c]) {
            if (r !== 1 || c !== 1)
              do
                if ((r--, c--, 0 > c || O[r] !== B[c])) {
                  var Y =
                    `
` + O[r].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      Y.includes('<anonymous>') &&
                      (Y = Y.replace('<anonymous>', e.displayName)),
                    Y
                  );
                }
              while (1 <= r && 0 <= c);
            break;
          }
      }
    } finally {
      ((xo = !1), (Error.prepareStackTrace = i));
    }
    return (i = e ? e.displayName || e.name : '') ? ya(i) : '';
  }
  function J1(e, n) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ya(e.type);
      case 16:
        return ya('Lazy');
      case 13:
        return e.child !== n && n !== null ?
            ya('Suspense Fallback')
          : ya('Suspense');
      case 19:
        return ya('SuspenseList');
      case 0:
      case 15:
        return To(e.type, !1);
      case 11:
        return To(e.type.render, !1);
      case 1:
        return To(e.type, !0);
      case 31:
        return ya('Activity');
      default:
        return '';
    }
  }
  function Ld(e) {
    try {
      var n = '',
        i = null;
      do ((n += J1(e, i)), (i = e), (e = e.return));
      while (e);
      return n;
    } catch (r) {
      return (
        `
Error generating stack: ` +
        r.message +
        `
` +
        r.stack
      );
    }
  }
  var _o = Object.prototype.hasOwnProperty,
    Eo = t.unstable_scheduleCallback,
    Co = t.unstable_cancelCallback,
    W1 = t.unstable_shouldYield,
    eb = t.unstable_requestPaint,
    Mt = t.unstable_now,
    tb = t.unstable_getCurrentPriorityLevel,
    zd = t.unstable_ImmediatePriority,
    Vd = t.unstable_UserBlockingPriority,
    pl = t.unstable_NormalPriority,
    nb = t.unstable_LowPriority,
    Bd = t.unstable_IdlePriority,
    ab = t.log,
    ib = t.unstable_setDisableYieldValue,
    Fi = null,
    wt = null;
  function Gn(e) {
    if (
      (typeof ab == 'function' && ib(e),
      wt && typeof wt.setStrictMode == 'function')
    )
      try {
        wt.setStrictMode(Fi, e);
      } catch {}
  }
  var Dt = Math.clz32 ? Math.clz32 : rb,
    sb = Math.log,
    lb = Math.LN2;
  function rb(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((sb(e) / lb) | 0)) | 0);
  }
  var gl = 256,
    vl = 262144,
    yl = 4194304;
  function ba(e) {
    var n = e & 42;
    if (n !== 0) return n;
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
  function bl(e, n, i) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var c = 0,
      d = e.suspendedLanes,
      y = e.pingedLanes;
    e = e.warmLanes;
    var T = r & 134217727;
    return (
      T !== 0 ?
        ((r = T & ~d),
        r !== 0 ?
          (c = ba(r))
        : ((y &= T),
          y !== 0 ? (c = ba(y)) : i || ((i = T & ~e), i !== 0 && (c = ba(i)))))
      : ((T = r & ~d),
        T !== 0 ? (c = ba(T))
        : y !== 0 ? (c = ba(y))
        : i || ((i = r & ~e), i !== 0 && (c = ba(i)))),
      c === 0 ? 0
      : (
        n !== 0 &&
        n !== c &&
        (n & d) === 0 &&
        ((d = c & -c),
        (i = n & -n),
        d >= i || (d === 32 && (i & 4194048) !== 0))
      ) ?
        n
      : c
    );
  }
  function Zi(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function ob(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
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
        return n + 5e3;
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
  function Ud() {
    var e = yl;
    return ((yl <<= 1), (yl & 62914560) === 0 && (yl = 4194304), e);
  }
  function Ao(e) {
    for (var n = [], i = 0; 31 > i; i++) n.push(e);
    return n;
  }
  function $i(e, n) {
    ((e.pendingLanes |= n),
      n !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function ub(e, n, i, r, c, d) {
    var y = e.pendingLanes;
    ((e.pendingLanes = i),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= i),
      (e.entangledLanes &= i),
      (e.errorRecoveryDisabledLanes &= i),
      (e.shellSuspendCounter = 0));
    var T = e.entanglements,
      O = e.expirationTimes,
      B = e.hiddenUpdates;
    for (i = y & ~i; 0 < i; ) {
      var Y = 31 - Dt(i),
        K = 1 << Y;
      ((T[Y] = 0), (O[Y] = -1));
      var H = B[Y];
      if (H !== null)
        for (B[Y] = null, Y = 0; Y < H.length; Y++) {
          var P = H[Y];
          P !== null && (P.lane &= -536870913);
        }
      i &= ~K;
    }
    (r !== 0 && Hd(e, r, 0),
      d !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(y & ~n)));
  }
  function Hd(e, n, i) {
    ((e.pendingLanes |= n), (e.suspendedLanes &= ~n));
    var r = 31 - Dt(n);
    ((e.entangledLanes |= n),
      (e.entanglements[r] = e.entanglements[r] | 1073741824 | (i & 261930)));
  }
  function Pd(e, n) {
    var i = (e.entangledLanes |= n);
    for (e = e.entanglements; i; ) {
      var r = 31 - Dt(i),
        c = 1 << r;
      ((c & n) | (e[r] & n) && (e[r] |= n), (i &= ~c));
    }
  }
  function Gd(e, n) {
    var i = n & -n;
    return (
      (i = (i & 42) !== 0 ? 1 : Mo(i)),
      (i & (e.suspendedLanes | n)) !== 0 ? 0 : i
    );
  }
  function Mo(e) {
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
  function wo(e) {
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
  function kd() {
    var e = k.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Mg(e.type));
  }
  function qd(e, n) {
    var i = k.p;
    try {
      return ((k.p = e), n());
    } finally {
      k.p = i;
    }
  }
  var kn = Math.random().toString(36).slice(2),
    it = '__reactFiber$' + kn,
    St = '__reactProps$' + kn,
    Fa = '__reactContainer$' + kn,
    Do = '__reactEvents$' + kn,
    cb = '__reactListeners$' + kn,
    fb = '__reactHandles$' + kn,
    Yd = '__reactResources$' + kn,
    Ii = '__reactMarker$' + kn;
  function Oo(e) {
    (delete e[it], delete e[St], delete e[Do], delete e[cb], delete e[fb]);
  }
  function Za(e) {
    var n = e[it];
    if (n) return n;
    for (var i = e.parentNode; i; ) {
      if ((n = i[Fa] || i[it])) {
        if (
          ((i = n.alternate),
          n.child !== null || (i !== null && i.child !== null))
        )
          for (e = fg(e); e !== null; ) {
            if ((i = e[it])) return i;
            e = fg(e);
          }
        return n;
      }
      ((e = i), (i = e.parentNode));
    }
    return null;
  }
  function $a(e) {
    if ((e = e[it] || e[Fa])) {
      var n = e.tag;
      if (
        n === 5 ||
        n === 6 ||
        n === 13 ||
        n === 31 ||
        n === 26 ||
        n === 27 ||
        n === 3
      )
        return e;
    }
    return null;
  }
  function Ji(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(l(33));
  }
  function Ia(e) {
    var n = e[Yd];
    return (
      n ||
        (n = e[Yd] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      n
    );
  }
  function et(e) {
    e[Ii] = !0;
  }
  var Xd = new Set(),
    Qd = {};
  function Sa(e, n) {
    (Ja(e, n), Ja(e + 'Capture', n));
  }
  function Ja(e, n) {
    for (Qd[e] = n, e = 0; e < n.length; e++) Xd.add(n[e]);
  }
  var db = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    Kd = {},
    Fd = {};
  function hb(e) {
    return (
      _o.call(Fd, e) ? !0
      : _o.call(Kd, e) ? !1
      : db.test(e) ? (Fd[e] = !0)
      : ((Kd[e] = !0), !1)
    );
  }
  function Sl(e, n, i) {
    if (hb(n))
      if (i === null) e.removeAttribute(n);
      else {
        switch (typeof i) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(n);
            return;
          case 'boolean':
            var r = n.toLowerCase().slice(0, 5);
            if (r !== 'data-' && r !== 'aria-') {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, '' + i);
      }
  }
  function xl(e, n, i) {
    if (i === null) e.removeAttribute(n);
    else {
      switch (typeof i) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, '' + i);
    }
  }
  function yn(e, n, i, r) {
    if (r === null) e.removeAttribute(i);
    else {
      switch (typeof r) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(i);
          return;
      }
      e.setAttributeNS(n, i, '' + r);
    }
  }
  function Ut(e) {
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
  function Zd(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (n === 'checkbox' || n === 'radio')
    );
  }
  function mb(e, n, i) {
    var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, n);
    if (
      !e.hasOwnProperty(n) &&
      typeof r < 'u' &&
      typeof r.get == 'function' &&
      typeof r.set == 'function'
    ) {
      var c = r.get,
        d = r.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (y) {
            ((i = '' + y), d.call(this, y));
          },
        }),
        Object.defineProperty(e, n, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (y) {
            i = '' + y;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[n]);
          },
        }
      );
    }
  }
  function No(e) {
    if (!e._valueTracker) {
      var n = Zd(e) ? 'checked' : 'value';
      e._valueTracker = mb(e, n, '' + e[n]);
    }
  }
  function $d(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var i = n.getValue(),
      r = '';
    return (
      e &&
        (r =
          Zd(e) ?
            e.checked ?
              'true'
            : 'false'
          : e.value),
      (e = r),
      e !== i ? (n.setValue(e), !0) : !1
    );
  }
  function Tl(e) {
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
  var pb = /[\n"\\]/g;
  function Ht(e) {
    return e.replace(pb, function (n) {
      return '\\' + n.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Ro(e, n, i, r, c, d, y, T) {
    ((e.name = ''),
      (
        y != null &&
        typeof y != 'function' &&
        typeof y != 'symbol' &&
        typeof y != 'boolean'
      ) ?
        (e.type = y)
      : e.removeAttribute('type'),
      n != null ?
        y === 'number' ?
          ((n === 0 && e.value === '') || e.value != n) &&
          (e.value = '' + Ut(n))
        : e.value !== '' + Ut(n) && (e.value = '' + Ut(n))
      : (y !== 'submit' && y !== 'reset') || e.removeAttribute('value'),
      n != null ? jo(e, y, Ut(n))
      : i != null ? jo(e, y, Ut(i))
      : r != null && e.removeAttribute('value'),
      c == null && d != null && (e.defaultChecked = !!d),
      c != null &&
        (e.checked = c && typeof c != 'function' && typeof c != 'symbol'),
      (
        T != null &&
        typeof T != 'function' &&
        typeof T != 'symbol' &&
        typeof T != 'boolean'
      ) ?
        (e.name = '' + Ut(T))
      : e.removeAttribute('name'));
  }
  function Id(e, n, i, r, c, d, y, T) {
    if (
      (d != null &&
        typeof d != 'function' &&
        typeof d != 'symbol' &&
        typeof d != 'boolean' &&
        (e.type = d),
      n != null || i != null)
    ) {
      if (!((d !== 'submit' && d !== 'reset') || n != null)) {
        No(e);
        return;
      }
      ((i = i != null ? '' + Ut(i) : ''),
        (n = n != null ? '' + Ut(n) : i),
        T || n === e.value || (e.value = n),
        (e.defaultValue = n));
    }
    ((r = r ?? c),
      (r = typeof r != 'function' && typeof r != 'symbol' && !!r),
      (e.checked = T ? e.checked : !!r),
      (e.defaultChecked = !!r),
      y != null &&
        typeof y != 'function' &&
        typeof y != 'symbol' &&
        typeof y != 'boolean' &&
        (e.name = y),
      No(e));
  }
  function jo(e, n, i) {
    (n === 'number' && Tl(e.ownerDocument) === e) ||
      e.defaultValue === '' + i ||
      (e.defaultValue = '' + i);
  }
  function Wa(e, n, i, r) {
    if (((e = e.options), n)) {
      n = {};
      for (var c = 0; c < i.length; c++) n['$' + i[c]] = !0;
      for (i = 0; i < e.length; i++)
        ((c = n.hasOwnProperty('$' + e[i].value)),
          e[i].selected !== c && (e[i].selected = c),
          c && r && (e[i].defaultSelected = !0));
    } else {
      for (i = '' + Ut(i), n = null, c = 0; c < e.length; c++) {
        if (e[c].value === i) {
          ((e[c].selected = !0), r && (e[c].defaultSelected = !0));
          return;
        }
        n !== null || e[c].disabled || (n = e[c]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Jd(e, n, i) {
    if (
      n != null &&
      ((n = '' + Ut(n)), n !== e.value && (e.value = n), i == null)
    ) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = i != null ? '' + Ut(i) : '';
  }
  function Wd(e, n, i, r) {
    if (n == null) {
      if (r != null) {
        if (i != null) throw Error(l(92));
        if (de(r)) {
          if (1 < r.length) throw Error(l(93));
          r = r[0];
        }
        i = r;
      }
      (i == null && (i = ''), (n = i));
    }
    ((i = Ut(n)),
      (e.defaultValue = i),
      (r = e.textContent),
      r === i && r !== '' && r !== null && (e.value = r),
      No(e));
  }
  function ei(e, n) {
    if (n) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var gb = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' ',
    ),
  );
  function eh(e, n, i) {
    var r = n.indexOf('--') === 0;
    i == null || typeof i == 'boolean' || i === '' ?
      r ? e.setProperty(n, '')
      : n === 'float' ? (e.cssFloat = '')
      : (e[n] = '')
    : r ? e.setProperty(n, i)
    : typeof i != 'number' || i === 0 || gb.has(n) ?
      n === 'float' ?
        (e.cssFloat = i)
      : (e[n] = ('' + i).trim())
    : (e[n] = i + 'px');
  }
  function th(e, n, i) {
    if (n != null && typeof n != 'object') throw Error(l(62));
    if (((e = e.style), i != null)) {
      for (var r in i)
        !i.hasOwnProperty(r) ||
          (n != null && n.hasOwnProperty(r)) ||
          (r.indexOf('--') === 0 ? e.setProperty(r, '')
          : r === 'float' ? (e.cssFloat = '')
          : (e[r] = ''));
      for (var c in n)
        ((r = n[c]), n.hasOwnProperty(c) && i[c] !== r && eh(e, c, r));
    } else for (var d in n) n.hasOwnProperty(d) && eh(e, d, n[d]);
  }
  function Lo(e) {
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
  var vb = new Map([
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
    yb =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function _l(e) {
    return yb.test('' + e) ?
        "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function bn() {}
  var zo = null;
  function Vo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ti = null,
    ni = null;
  function nh(e) {
    var n = $a(e);
    if (n && (e = n.stateNode)) {
      var i = e[St] || null;
      e: switch (((e = n.stateNode), n.type)) {
        case 'input':
          if (
            (Ro(
              e,
              i.value,
              i.defaultValue,
              i.defaultValue,
              i.checked,
              i.defaultChecked,
              i.type,
              i.name,
            ),
            (n = i.name),
            i.type === 'radio' && n != null)
          ) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (
              i = i.querySelectorAll(
                'input[name="' + Ht('' + n) + '"][type="radio"]',
              ),
                n = 0;
              n < i.length;
              n++
            ) {
              var r = i[n];
              if (r !== e && r.form === e.form) {
                var c = r[St] || null;
                if (!c) throw Error(l(90));
                Ro(
                  r,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name,
                );
              }
            }
            for (n = 0; n < i.length; n++)
              ((r = i[n]), r.form === e.form && $d(r));
          }
          break e;
        case 'textarea':
          Jd(e, i.value, i.defaultValue);
          break e;
        case 'select':
          ((n = i.value), n != null && Wa(e, !!i.multiple, n, !1));
      }
    }
  }
  var Bo = !1;
  function ah(e, n, i) {
    if (Bo) return e(n, i);
    Bo = !0;
    try {
      var r = e(n);
      return r;
    } finally {
      if (
        ((Bo = !1),
        (ti !== null || ni !== null) &&
          (cr(), ti && ((n = ti), (e = ni), (ni = ti = null), nh(n), e)))
      )
        for (n = 0; n < e.length; n++) nh(e[n]);
    }
  }
  function Wi(e, n) {
    var i = e.stateNode;
    if (i === null) return null;
    var r = i[St] || null;
    if (r === null) return null;
    i = r[n];
    e: switch (n) {
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
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != 'function') throw Error(l(231, n, typeof i));
    return i;
  }
  var Sn = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Uo = !1;
  if (Sn)
    try {
      var es = {};
      (Object.defineProperty(es, 'passive', {
        get: function () {
          Uo = !0;
        },
      }),
        window.addEventListener('test', es, es),
        window.removeEventListener('test', es, es));
    } catch {
      Uo = !1;
    }
  var qn = null,
    Ho = null,
    El = null;
  function ih() {
    if (El) return El;
    var e,
      n = Ho,
      i = n.length,
      r,
      c = 'value' in qn ? qn.value : qn.textContent,
      d = c.length;
    for (e = 0; e < i && n[e] === c[e]; e++);
    var y = i - e;
    for (r = 1; r <= y && n[i - r] === c[d - r]; r++);
    return (El = c.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Cl(e) {
    var n = e.keyCode;
    return (
      'charCode' in e ?
        ((e = e.charCode), e === 0 && n === 13 && (e = 13))
      : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Al() {
    return !0;
  }
  function sh() {
    return !1;
  }
  function xt(e) {
    function n(i, r, c, d, y) {
      ((this._reactName = i),
        (this._targetInst = c),
        (this.type = r),
        (this.nativeEvent = d),
        (this.target = y),
        (this.currentTarget = null));
      for (var T in e)
        e.hasOwnProperty(T) && ((i = e[T]), (this[T] = i ? i(d) : d[T]));
      return (
        (this.isDefaultPrevented =
          (
            d.defaultPrevented != null ?
              d.defaultPrevented
            : d.returnValue === !1
          ) ?
            Al
          : sh),
        (this.isPropagationStopped = sh),
        this
      );
    }
    return (
      g(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault ?
              i.preventDefault()
            : typeof i.returnValue != 'unknown' && (i.returnValue = !1),
            (this.isDefaultPrevented = Al));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation ?
              i.stopPropagation()
            : typeof i.cancelBubble != 'unknown' && (i.cancelBubble = !0),
            (this.isPropagationStopped = Al));
        },
        persist: function () {},
        isPersistent: Al,
      }),
      n
    );
  }
  var xa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ml = xt(xa),
    ts = g({}, xa, { view: 0, detail: 0 }),
    bb = xt(ts),
    Po,
    Go,
    ns,
    wl = g({}, ts, {
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
      getModifierState: qo,
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
          : (e !== ns &&
              (ns && e.type === 'mousemove' ?
                ((Po = e.screenX - ns.screenX), (Go = e.screenY - ns.screenY))
              : (Go = Po = 0),
              (ns = e)),
            Po);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Go;
      },
    }),
    lh = xt(wl),
    Sb = g({}, wl, { dataTransfer: 0 }),
    xb = xt(Sb),
    Tb = g({}, ts, { relatedTarget: 0 }),
    ko = xt(Tb),
    _b = g({}, xa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Eb = xt(_b),
    Cb = g({}, xa, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Ab = xt(Cb),
    Mb = g({}, xa, { data: 0 }),
    rh = xt(Mb),
    wb = {
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
    Db = {
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
    Ob = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function Nb(e) {
    var n = this.nativeEvent;
    return (
      n.getModifierState ? n.getModifierState(e)
      : (e = Ob[e]) ? !!n[e]
      : !1
    );
  }
  function qo() {
    return Nb;
  }
  var Rb = g({}, ts, {
      key: function (e) {
        if (e.key) {
          var n = wb[e.key] || e.key;
          if (n !== 'Unidentified') return n;
        }
        return (
          e.type === 'keypress' ?
            ((e = Cl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup' ?
            Db[e.keyCode] || 'Unidentified'
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
      getModifierState: qo,
      charCode: function (e) {
        return e.type === 'keypress' ? Cl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return (
          e.type === 'keypress' ? Cl(e)
          : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode
          : 0
        );
      },
    }),
    jb = xt(Rb),
    Lb = g({}, wl, {
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
    oh = xt(Lb),
    zb = g({}, ts, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: qo,
    }),
    Vb = xt(zb),
    Bb = g({}, xa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ub = xt(Bb),
    Hb = g({}, wl, {
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
    Pb = xt(Hb),
    Gb = g({}, xa, { newState: 0, oldState: 0 }),
    kb = xt(Gb),
    qb = [9, 13, 27, 32],
    Yo = Sn && 'CompositionEvent' in window,
    as = null;
  Sn && 'documentMode' in document && (as = document.documentMode);
  var Yb = Sn && 'TextEvent' in window && !as,
    uh = Sn && (!Yo || (as && 8 < as && 11 >= as)),
    ch = ' ',
    fh = !1;
  function dh(e, n) {
    switch (e) {
      case 'keyup':
        return qb.indexOf(n.keyCode) !== -1;
      case 'keydown':
        return n.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function hh(e) {
    return (
      (e = e.detail),
      typeof e == 'object' && 'data' in e ? e.data : null
    );
  }
  var ai = !1;
  function Xb(e, n) {
    switch (e) {
      case 'compositionend':
        return hh(n);
      case 'keypress':
        return n.which !== 32 ? null : ((fh = !0), ch);
      case 'textInput':
        return ((e = n.data), e === ch && fh ? null : e);
      default:
        return null;
    }
  }
  function Qb(e, n) {
    if (ai)
      return e === 'compositionend' || (!Yo && dh(e, n)) ?
          ((e = ih()), (El = Ho = qn = null), (ai = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case 'compositionend':
        return uh && n.locale !== 'ko' ? null : n.data;
      default:
        return null;
    }
  }
  var Kb = {
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
  function mh(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === 'input' ? !!Kb[e.type] : n === 'textarea';
  }
  function ph(e, n, i, r) {
    (ti ?
      ni ? ni.push(r)
      : (ni = [r])
    : (ti = r),
      (n = vr(n, 'onChange')),
      0 < n.length &&
        ((i = new Ml('onChange', 'change', null, i, r)),
        e.push({ event: i, listeners: n })));
  }
  var is = null,
    ss = null;
  function Fb(e) {
    Ip(e, 0);
  }
  function Dl(e) {
    var n = Ji(e);
    if ($d(n)) return e;
  }
  function gh(e, n) {
    if (e === 'change') return n;
  }
  var vh = !1;
  if (Sn) {
    var Xo;
    if (Sn) {
      var Qo = 'oninput' in document;
      if (!Qo) {
        var yh = document.createElement('div');
        (yh.setAttribute('oninput', 'return;'),
          (Qo = typeof yh.oninput == 'function'));
      }
      Xo = Qo;
    } else Xo = !1;
    vh = Xo && (!document.documentMode || 9 < document.documentMode);
  }
  function bh() {
    is && (is.detachEvent('onpropertychange', Sh), (ss = is = null));
  }
  function Sh(e) {
    if (e.propertyName === 'value' && Dl(ss)) {
      var n = [];
      (ph(n, ss, e, Vo(e)), ah(Fb, n));
    }
  }
  function Zb(e, n, i) {
    e === 'focusin' ?
      (bh(), (is = n), (ss = i), is.attachEvent('onpropertychange', Sh))
    : e === 'focusout' && bh();
  }
  function $b(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return Dl(ss);
  }
  function Ib(e, n) {
    if (e === 'click') return Dl(n);
  }
  function Jb(e, n) {
    if (e === 'input' || e === 'change') return Dl(n);
  }
  function Wb(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var Ot = typeof Object.is == 'function' ? Object.is : Wb;
  function ls(e, n) {
    if (Ot(e, n)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof n != 'object' ||
      n === null
    )
      return !1;
    var i = Object.keys(e),
      r = Object.keys(n);
    if (i.length !== r.length) return !1;
    for (r = 0; r < i.length; r++) {
      var c = i[r];
      if (!_o.call(n, c) || !Ot(e[c], n[c])) return !1;
    }
    return !0;
  }
  function xh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Th(e, n) {
    var i = xh(e);
    e = 0;
    for (var r; i; ) {
      if (i.nodeType === 3) {
        if (((r = e + i.textContent.length), e <= n && r >= n))
          return { node: i, offset: n - e };
        e = r;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = xh(i);
    }
  }
  function _h(e, n) {
    return (
      e && n ?
        e === n ? !0
        : e && e.nodeType === 3 ? !1
        : n && n.nodeType === 3 ? _h(e, n.parentNode)
        : 'contains' in e ? e.contains(n)
        : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16)
        : !1
      : !1
    );
  }
  function Eh(e) {
    e =
      (
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
      ) ?
        e.ownerDocument.defaultView
      : window;
    for (var n = Tl(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof n.contentWindow.location.href == 'string';
      } catch {
        i = !1;
      }
      if (i) e = n.contentWindow;
      else break;
      n = Tl(e.document);
    }
    return n;
  }
  function Ko(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        n === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  var eS = Sn && 'documentMode' in document && 11 >= document.documentMode,
    ii = null,
    Fo = null,
    rs = null,
    Zo = !1;
  function Ch(e, n, i) {
    var r =
      i.window === i ? i.document
      : i.nodeType === 9 ? i
      : i.ownerDocument;
    Zo ||
      ii == null ||
      ii !== Tl(r) ||
      ((r = ii),
      'selectionStart' in r && Ko(r) ?
        (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
      (rs && ls(rs, r)) ||
        ((rs = r),
        (r = vr(Fo, 'onSelect')),
        0 < r.length &&
          ((n = new Ml('onSelect', 'select', null, n, i)),
          e.push({ event: n, listeners: r }),
          (n.target = ii))));
  }
  function Ta(e, n) {
    var i = {};
    return (
      (i[e.toLowerCase()] = n.toLowerCase()),
      (i['Webkit' + e] = 'webkit' + n),
      (i['Moz' + e] = 'moz' + n),
      i
    );
  }
  var si = {
      animationend: Ta('Animation', 'AnimationEnd'),
      animationiteration: Ta('Animation', 'AnimationIteration'),
      animationstart: Ta('Animation', 'AnimationStart'),
      transitionrun: Ta('Transition', 'TransitionRun'),
      transitionstart: Ta('Transition', 'TransitionStart'),
      transitioncancel: Ta('Transition', 'TransitionCancel'),
      transitionend: Ta('Transition', 'TransitionEnd'),
    },
    $o = {},
    Ah = {};
  Sn &&
    ((Ah = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete si.animationend.animation,
      delete si.animationiteration.animation,
      delete si.animationstart.animation),
    'TransitionEvent' in window || delete si.transitionend.transition);
  function _a(e) {
    if ($o[e]) return $o[e];
    if (!si[e]) return e;
    var n = si[e],
      i;
    for (i in n) if (n.hasOwnProperty(i) && i in Ah) return ($o[e] = n[i]);
    return e;
  }
  var Mh = _a('animationend'),
    wh = _a('animationiteration'),
    Dh = _a('animationstart'),
    tS = _a('transitionrun'),
    nS = _a('transitionstart'),
    aS = _a('transitioncancel'),
    Oh = _a('transitionend'),
    Nh = new Map(),
    Io =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  Io.push('scrollEnd');
  function Jt(e, n) {
    (Nh.set(e, n), Sa(n, [e]));
  }
  var Ol =
      typeof reportError == 'function' ? reportError : (
        function (e) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var n = new window.ErrorEvent('error', {
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
            if (!window.dispatchEvent(n)) return;
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
    Pt = [],
    li = 0,
    Jo = 0;
  function Nl() {
    for (var e = li, n = (Jo = li = 0); n < e; ) {
      var i = Pt[n];
      Pt[n++] = null;
      var r = Pt[n];
      Pt[n++] = null;
      var c = Pt[n];
      Pt[n++] = null;
      var d = Pt[n];
      if (((Pt[n++] = null), r !== null && c !== null)) {
        var y = r.pending;
        (y === null ? (c.next = c) : ((c.next = y.next), (y.next = c)),
          (r.pending = c));
      }
      d !== 0 && Rh(i, c, d);
    }
  }
  function Rl(e, n, i, r) {
    ((Pt[li++] = e),
      (Pt[li++] = n),
      (Pt[li++] = i),
      (Pt[li++] = r),
      (Jo |= r),
      (e.lanes |= r),
      (e = e.alternate),
      e !== null && (e.lanes |= r));
  }
  function Wo(e, n, i, r) {
    return (Rl(e, n, i, r), jl(e));
  }
  function Ea(e, n) {
    return (Rl(e, null, null, n), jl(e));
  }
  function Rh(e, n, i) {
    e.lanes |= i;
    var r = e.alternate;
    r !== null && (r.lanes |= i);
    for (var c = !1, d = e.return; d !== null; )
      ((d.childLanes |= i),
        (r = d.alternate),
        r !== null && (r.childLanes |= i),
        d.tag === 22 &&
          ((e = d.stateNode), e === null || e._visibility & 1 || (c = !0)),
        (e = d),
        (d = d.return));
    return e.tag === 3 ?
        ((d = e.stateNode),
        c &&
          n !== null &&
          ((c = 31 - Dt(i)),
          (e = d.hiddenUpdates),
          (r = e[c]),
          r === null ? (e[c] = [n]) : r.push(n),
          (n.lane = i | 536870912)),
        d)
      : null;
  }
  function jl(e) {
    if (50 < Ds) throw ((Ds = 0), (oc = null), Error(l(185)));
    for (var n = e.return; n !== null; ) ((e = n), (n = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var ri = {};
  function iS(e, n, i, r) {
    ((this.tag = e),
      (this.key = i),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Nt(e, n, i, r) {
    return new iS(e, n, i, r);
  }
  function eu(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function xn(e, n) {
    var i = e.alternate;
    return (
      i === null ?
        ((i = Nt(e.tag, n, e.key, e.mode)),
        (i.elementType = e.elementType),
        (i.type = e.type),
        (i.stateNode = e.stateNode),
        (i.alternate = e),
        (e.alternate = i))
      : ((i.pendingProps = n),
        (i.type = e.type),
        (i.flags = 0),
        (i.subtreeFlags = 0),
        (i.deletions = null)),
      (i.flags = e.flags & 65011712),
      (i.childLanes = e.childLanes),
      (i.lanes = e.lanes),
      (i.child = e.child),
      (i.memoizedProps = e.memoizedProps),
      (i.memoizedState = e.memoizedState),
      (i.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (i.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (i.sibling = e.sibling),
      (i.index = e.index),
      (i.ref = e.ref),
      (i.refCleanup = e.refCleanup),
      i
    );
  }
  function jh(e, n) {
    e.flags &= 65011714;
    var i = e.alternate;
    return (
      i === null ?
        ((e.childLanes = 0),
        (e.lanes = n),
        (e.child = null),
        (e.subtreeFlags = 0),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.updateQueue = null),
        (e.dependencies = null),
        (e.stateNode = null))
      : ((e.childLanes = i.childLanes),
        (e.lanes = i.lanes),
        (e.child = i.child),
        (e.subtreeFlags = 0),
        (e.deletions = null),
        (e.memoizedProps = i.memoizedProps),
        (e.memoizedState = i.memoizedState),
        (e.updateQueue = i.updateQueue),
        (e.type = i.type),
        (n = i.dependencies),
        (e.dependencies =
          n === null ? null : (
            { lanes: n.lanes, firstContext: n.firstContext }
          ))),
      e
    );
  }
  function Ll(e, n, i, r, c, d) {
    var y = 0;
    if (((r = e), typeof e == 'function')) eu(e) && (y = 1);
    else if (typeof e == 'string')
      y =
        ux(e, i, ie.current) ? 26
        : e === 'html' || e === 'head' || e === 'body' ? 27
        : 5;
    else
      e: switch (e) {
        case W:
          return ((e = Nt(31, i, n, c)), (e.elementType = W), (e.lanes = d), e);
        case E:
          return Ca(i.children, c, d, n);
        case M:
          ((y = 8), (c |= 24));
          break;
        case _:
          return (
            (e = Nt(12, i, n, c | 2)),
            (e.elementType = _),
            (e.lanes = d),
            e
          );
        case V:
          return ((e = Nt(13, i, n, c)), (e.elementType = V), (e.lanes = d), e);
        case $:
          return ((e = Nt(19, i, n, c)), (e.elementType = $), (e.lanes = d), e);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case w:
                y = 10;
                break e;
              case C:
                y = 9;
                break e;
              case U:
                y = 11;
                break e;
              case X:
                y = 14;
                break e;
              case L:
                ((y = 16), (r = null));
                break e;
            }
          ((y = 29),
            (i = Error(l(130, e === null ? 'null' : typeof e, ''))),
            (r = null));
      }
    return (
      (n = Nt(y, i, n, c)),
      (n.elementType = e),
      (n.type = r),
      (n.lanes = d),
      n
    );
  }
  function Ca(e, n, i, r) {
    return ((e = Nt(7, e, r, n)), (e.lanes = i), e);
  }
  function tu(e, n, i) {
    return ((e = Nt(6, e, null, n)), (e.lanes = i), e);
  }
  function Lh(e) {
    var n = Nt(18, null, null, 0);
    return ((n.stateNode = e), n);
  }
  function nu(e, n, i) {
    return (
      (n = Nt(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = i),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  var zh = new WeakMap();
  function Gt(e, n) {
    if (typeof e == 'object' && e !== null) {
      var i = zh.get(e);
      return i !== void 0 ? i : (
          ((n = { value: e, source: n, stack: Ld(n) }), zh.set(e, n), n)
        );
    }
    return { value: e, source: n, stack: Ld(n) };
  }
  var oi = [],
    ui = 0,
    zl = null,
    os = 0,
    kt = [],
    qt = 0,
    Yn = null,
    on = 1,
    un = '';
  function Tn(e, n) {
    ((oi[ui++] = os), (oi[ui++] = zl), (zl = e), (os = n));
  }
  function Vh(e, n, i) {
    ((kt[qt++] = on), (kt[qt++] = un), (kt[qt++] = Yn), (Yn = e));
    var r = on;
    e = un;
    var c = 32 - Dt(r) - 1;
    ((r &= ~(1 << c)), (i += 1));
    var d = 32 - Dt(n) + c;
    if (30 < d) {
      var y = c - (c % 5);
      ((d = (r & ((1 << y) - 1)).toString(32)),
        (r >>= y),
        (c -= y),
        (on = (1 << (32 - Dt(n) + c)) | (i << c) | r),
        (un = d + e));
    } else ((on = (1 << d) | (i << c) | r), (un = e));
  }
  function au(e) {
    e.return !== null && (Tn(e, 1), Vh(e, 1, 0));
  }
  function iu(e) {
    for (; e === zl; )
      ((zl = oi[--ui]), (oi[ui] = null), (os = oi[--ui]), (oi[ui] = null));
    for (; e === Yn; )
      ((Yn = kt[--qt]),
        (kt[qt] = null),
        (un = kt[--qt]),
        (kt[qt] = null),
        (on = kt[--qt]),
        (kt[qt] = null));
  }
  function Bh(e, n) {
    ((kt[qt++] = on),
      (kt[qt++] = un),
      (kt[qt++] = Yn),
      (on = n.id),
      (un = n.overflow),
      (Yn = e));
  }
  var st = null,
    Le = null,
    Te = !1,
    Xn = null,
    Yt = !1,
    su = Error(l(519));
  function Qn(e) {
    var n = Error(
      l(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ?
          'text'
        : 'HTML',
        '',
      ),
    );
    throw (us(Gt(n, e)), su);
  }
  function Uh(e) {
    var n = e.stateNode,
      i = e.type,
      r = e.memoizedProps;
    switch (((n[it] = e), (n[St] = r), i)) {
      case 'dialog':
        (be('cancel', n), be('close', n));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        be('load', n);
        break;
      case 'video':
      case 'audio':
        for (i = 0; i < Ns.length; i++) be(Ns[i], n);
        break;
      case 'source':
        be('error', n);
        break;
      case 'img':
      case 'image':
      case 'link':
        (be('error', n), be('load', n));
        break;
      case 'details':
        be('toggle', n);
        break;
      case 'input':
        (be('invalid', n),
          Id(
            n,
            r.value,
            r.defaultValue,
            r.checked,
            r.defaultChecked,
            r.type,
            r.name,
            !0,
          ));
        break;
      case 'select':
        be('invalid', n);
        break;
      case 'textarea':
        (be('invalid', n), Wd(n, r.value, r.defaultValue, r.children));
    }
    ((i = r.children),
      (
        (typeof i != 'string' &&
          typeof i != 'number' &&
          typeof i != 'bigint') ||
        n.textContent === '' + i ||
        r.suppressHydrationWarning === !0 ||
        tg(n.textContent, i)
      ) ?
        (r.popover != null && (be('beforetoggle', n), be('toggle', n)),
        r.onScroll != null && be('scroll', n),
        r.onScrollEnd != null && be('scrollend', n),
        r.onClick != null && (n.onclick = bn),
        (n = !0))
      : (n = !1),
      n || Qn(e, !0));
  }
  function Hh(e) {
    for (st = e.return; st; )
      switch (st.tag) {
        case 5:
        case 31:
        case 13:
          Yt = !1;
          return;
        case 27:
        case 3:
          Yt = !0;
          return;
        default:
          st = st.return;
      }
  }
  function ci(e) {
    if (e !== st) return !1;
    if (!Te) return (Hh(e), (Te = !0), !1);
    var n = e.tag,
      i;
    if (
      ((i = n !== 3 && n !== 27) &&
        ((i = n === 5) &&
          ((i = e.type),
          (i =
            !(i !== 'form' && i !== 'button') || _c(e.type, e.memoizedProps))),
        (i = !i)),
      i && Le && Qn(e),
      Hh(e),
      n === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(l(317));
      Le = cg(e);
    } else if (n === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(l(317));
      Le = cg(e);
    } else
      n === 27 ?
        ((n = Le), la(e.type) ? ((e = wc), (wc = null), (Le = e)) : (Le = n))
      : (Le = st ? Qt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Aa() {
    ((Le = st = null), (Te = !1));
  }
  function lu() {
    var e = Xn;
    return (
      e !== null &&
        (Ct === null ? (Ct = e) : Ct.push.apply(Ct, e), (Xn = null)),
      e
    );
  }
  function us(e) {
    Xn === null ? (Xn = [e]) : Xn.push(e);
  }
  var ru = N(null),
    Ma = null,
    _n = null;
  function Kn(e, n, i) {
    (te(ru, n._currentValue), (n._currentValue = i));
  }
  function En(e) {
    ((e._currentValue = ru.current), F(ru));
  }
  function ou(e, n, i) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & n) !== n ?
          ((e.childLanes |= n), r !== null && (r.childLanes |= n))
        : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
        e === i)
      )
        break;
      e = e.return;
    }
  }
  function uu(e, n, i, r) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var d = c.dependencies;
      if (d !== null) {
        var y = c.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var T = d;
          d = c;
          for (var O = 0; O < n.length; O++)
            if (T.context === n[O]) {
              ((d.lanes |= i),
                (T = d.alternate),
                T !== null && (T.lanes |= i),
                ou(d.return, i, e),
                r || (y = null));
              break e;
            }
          d = T.next;
        }
      } else if (c.tag === 18) {
        if (((y = c.return), y === null)) throw Error(l(341));
        ((y.lanes |= i),
          (d = y.alternate),
          d !== null && (d.lanes |= i),
          ou(y, i, e),
          (y = null));
      } else y = c.child;
      if (y !== null) y.return = c;
      else
        for (y = c; y !== null; ) {
          if (y === e) {
            y = null;
            break;
          }
          if (((c = y.sibling), c !== null)) {
            ((c.return = y.return), (y = c));
            break;
          }
          y = y.return;
        }
      c = y;
    }
  }
  function fi(e, n, i, r) {
    e = null;
    for (var c = n, d = !1; c !== null; ) {
      if (!d) {
        if ((c.flags & 524288) !== 0) d = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var y = c.alternate;
        if (y === null) throw Error(l(387));
        if (((y = y.memoizedProps), y !== null)) {
          var T = c.type;
          Ot(c.pendingProps.value, y.value) ||
            (e !== null ? e.push(T) : (e = [T]));
        }
      } else if (c === Ae.current) {
        if (((y = c.alternate), y === null)) throw Error(l(387));
        y.memoizedState.memoizedState !== c.memoizedState.memoizedState &&
          (e !== null ? e.push(Vs) : (e = [Vs]));
      }
      c = c.return;
    }
    (e !== null && uu(n, e, i, r), (n.flags |= 262144));
  }
  function Vl(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ot(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function wa(e) {
    ((Ma = e),
      (_n = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function lt(e) {
    return Ph(Ma, e);
  }
  function Bl(e, n) {
    return (Ma === null && wa(e), Ph(e, n));
  }
  function Ph(e, n) {
    var i = n._currentValue;
    if (((n = { context: n, memoizedValue: i, next: null }), _n === null)) {
      if (e === null) throw Error(l(308));
      ((_n = n),
        (e.dependencies = { lanes: 0, firstContext: n }),
        (e.flags |= 524288));
    } else _n = _n.next = n;
    return i;
  }
  var sS =
      typeof AbortController < 'u' ? AbortController : (
        function () {
          var e = [],
            n = (this.signal = {
              aborted: !1,
              addEventListener: function (i, r) {
                e.push(r);
              },
            });
          this.abort = function () {
            ((n.aborted = !0),
              e.forEach(function (i) {
                return i();
              }));
          };
        }
      ),
    lS = t.unstable_scheduleCallback,
    rS = t.unstable_NormalPriority,
    Qe = {
      $$typeof: w,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function cu() {
    return { controller: new sS(), data: new Map(), refCount: 0 };
  }
  function cs(e) {
    (e.refCount--,
      e.refCount === 0 &&
        lS(rS, function () {
          e.controller.abort();
        }));
  }
  var fs = null,
    fu = 0,
    di = 0,
    hi = null;
  function oS(e, n) {
    if (fs === null) {
      var i = (fs = []);
      ((fu = 0),
        (di = mc()),
        (hi = {
          status: 'pending',
          value: void 0,
          then: function (r) {
            i.push(r);
          },
        }));
    }
    return (fu++, n.then(Gh, Gh), n);
  }
  function Gh() {
    if (--fu === 0 && fs !== null) {
      hi !== null && (hi.status = 'fulfilled');
      var e = fs;
      ((fs = null), (di = 0), (hi = null));
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function uS(e, n) {
    var i = [],
      r = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (c) {
          i.push(c);
        },
      };
    return (
      e.then(
        function () {
          ((r.status = 'fulfilled'), (r.value = n));
          for (var c = 0; c < i.length; c++) (0, i[c])(n);
        },
        function (c) {
          for (r.status = 'rejected', r.reason = c, c = 0; c < i.length; c++)
            (0, i[c])(void 0);
        },
      ),
      r
    );
  }
  var kh = G.S;
  G.S = function (e, n) {
    ((Cp = Mt()),
      typeof n == 'object' &&
        n !== null &&
        typeof n.then == 'function' &&
        oS(e, n),
      kh !== null && kh(e, n));
  };
  var Da = N(null);
  function du() {
    var e = Da.current;
    return e !== null ? e : Re.pooledCache;
  }
  function Ul(e, n) {
    n === null ? te(Da, Da.current) : te(Da, n.pool);
  }
  function qh() {
    var e = du();
    return e === null ? null : { parent: Qe._currentValue, pool: e };
  }
  var mi = Error(l(460)),
    hu = Error(l(474)),
    Hl = Error(l(542)),
    Pl = { then: function () {} };
  function Yh(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function Xh(e, n, i) {
    switch (
      ((i = e[i]),
      i === void 0 ? e.push(n) : i !== n && (n.then(bn, bn), (n = i)),
      n.status)
    ) {
      case 'fulfilled':
        return n.value;
      case 'rejected':
        throw ((e = n.reason), Kh(e), e);
      default:
        if (typeof n.status == 'string') n.then(bn, bn);
        else {
          if (((e = Re), e !== null && 100 < e.shellSuspendCounter))
            throw Error(l(482));
          ((e = n),
            (e.status = 'pending'),
            e.then(
              function (r) {
                if (n.status === 'pending') {
                  var c = n;
                  ((c.status = 'fulfilled'), (c.value = r));
                }
              },
              function (r) {
                if (n.status === 'pending') {
                  var c = n;
                  ((c.status = 'rejected'), (c.reason = r));
                }
              },
            ));
        }
        switch (n.status) {
          case 'fulfilled':
            return n.value;
          case 'rejected':
            throw ((e = n.reason), Kh(e), e);
        }
        throw ((Na = n), mi);
    }
  }
  function Oa(e) {
    try {
      var n = e._init;
      return n(e._payload);
    } catch (i) {
      throw i !== null && typeof i == 'object' && typeof i.then == 'function' ?
          ((Na = i), mi)
        : i;
    }
  }
  var Na = null;
  function Qh() {
    if (Na === null) throw Error(l(459));
    var e = Na;
    return ((Na = null), e);
  }
  function Kh(e) {
    if (e === mi || e === Hl) throw Error(l(483));
  }
  var pi = null,
    ds = 0;
  function Gl(e) {
    var n = ds;
    return ((ds += 1), pi === null && (pi = []), Xh(pi, e, n));
  }
  function hs(e, n) {
    ((n = n.props.ref), (e.ref = n !== void 0 ? n : null));
  }
  function kl(e, n) {
    throw n.$$typeof === x ?
        Error(l(525))
      : ((e = Object.prototype.toString.call(n)),
        Error(
          l(
            31,
            e === '[object Object]' ?
              'object with keys {' + Object.keys(n).join(', ') + '}'
            : e,
          ),
        ));
  }
  function Fh(e) {
    function n(j, R) {
      if (e) {
        var z = j.deletions;
        z === null ? ((j.deletions = [R]), (j.flags |= 16)) : z.push(R);
      }
    }
    function i(j, R) {
      if (!e) return null;
      for (; R !== null; ) (n(j, R), (R = R.sibling));
      return null;
    }
    function r(j) {
      for (var R = new Map(); j !== null; )
        (j.key !== null ? R.set(j.key, j) : R.set(j.index, j), (j = j.sibling));
      return R;
    }
    function c(j, R) {
      return ((j = xn(j, R)), (j.index = 0), (j.sibling = null), j);
    }
    function d(j, R, z) {
      return (
        (j.index = z),
        e ?
          ((z = j.alternate),
          z !== null ?
            ((z = z.index), z < R ? ((j.flags |= 67108866), R) : z)
          : ((j.flags |= 67108866), R))
        : ((j.flags |= 1048576), R)
      );
    }
    function y(j) {
      return (e && j.alternate === null && (j.flags |= 67108866), j);
    }
    function T(j, R, z, Q) {
      return R === null || R.tag !== 6 ?
          ((R = tu(z, j.mode, Q)), (R.return = j), R)
        : ((R = c(R, z)), (R.return = j), R);
    }
    function O(j, R, z, Q) {
      var le = z.type;
      return (
        le === E ? Y(j, R, z.props.children, Q, z.key)
        : (
          R !== null &&
          (R.elementType === le ||
            (typeof le == 'object' &&
              le !== null &&
              le.$$typeof === L &&
              Oa(le) === R.type))
        ) ?
          ((R = c(R, z.props)), hs(R, z), (R.return = j), R)
        : ((R = Ll(z.type, z.key, z.props, null, j.mode, Q)),
          hs(R, z),
          (R.return = j),
          R)
      );
    }
    function B(j, R, z, Q) {
      return (
          R === null ||
            R.tag !== 4 ||
            R.stateNode.containerInfo !== z.containerInfo ||
            R.stateNode.implementation !== z.implementation
        ) ?
          ((R = nu(z, j.mode, Q)), (R.return = j), R)
        : ((R = c(R, z.children || [])), (R.return = j), R);
    }
    function Y(j, R, z, Q, le) {
      return R === null || R.tag !== 7 ?
          ((R = Ca(z, j.mode, Q, le)), (R.return = j), R)
        : ((R = c(R, z)), (R.return = j), R);
    }
    function K(j, R, z) {
      if (
        (typeof R == 'string' && R !== '') ||
        typeof R == 'number' ||
        typeof R == 'bigint'
      )
        return ((R = tu('' + R, j.mode, z)), (R.return = j), R);
      if (typeof R == 'object' && R !== null) {
        switch (R.$$typeof) {
          case b:
            return (
              (z = Ll(R.type, R.key, R.props, null, j.mode, z)),
              hs(z, R),
              (z.return = j),
              z
            );
          case A:
            return ((R = nu(R, j.mode, z)), (R.return = j), R);
          case L:
            return ((R = Oa(R)), K(j, R, z));
        }
        if (de(R) || J(R))
          return ((R = Ca(R, j.mode, z, null)), (R.return = j), R);
        if (typeof R.then == 'function') return K(j, Gl(R), z);
        if (R.$$typeof === w) return K(j, Bl(j, R), z);
        kl(j, R);
      }
      return null;
    }
    function H(j, R, z, Q) {
      var le = R !== null ? R.key : null;
      if (
        (typeof z == 'string' && z !== '') ||
        typeof z == 'number' ||
        typeof z == 'bigint'
      )
        return le !== null ? null : T(j, R, '' + z, Q);
      if (typeof z == 'object' && z !== null) {
        switch (z.$$typeof) {
          case b:
            return z.key === le ? O(j, R, z, Q) : null;
          case A:
            return z.key === le ? B(j, R, z, Q) : null;
          case L:
            return ((z = Oa(z)), H(j, R, z, Q));
        }
        if (de(z) || J(z)) return le !== null ? null : Y(j, R, z, Q, null);
        if (typeof z.then == 'function') return H(j, R, Gl(z), Q);
        if (z.$$typeof === w) return H(j, R, Bl(j, z), Q);
        kl(j, z);
      }
      return null;
    }
    function P(j, R, z, Q, le) {
      if (
        (typeof Q == 'string' && Q !== '') ||
        typeof Q == 'number' ||
        typeof Q == 'bigint'
      )
        return ((j = j.get(z) || null), T(R, j, '' + Q, le));
      if (typeof Q == 'object' && Q !== null) {
        switch (Q.$$typeof) {
          case b:
            return (
              (j = j.get(Q.key === null ? z : Q.key) || null),
              O(R, j, Q, le)
            );
          case A:
            return (
              (j = j.get(Q.key === null ? z : Q.key) || null),
              B(R, j, Q, le)
            );
          case L:
            return ((Q = Oa(Q)), P(j, R, z, Q, le));
        }
        if (de(Q) || J(Q))
          return ((j = j.get(z) || null), Y(R, j, Q, le, null));
        if (typeof Q.then == 'function') return P(j, R, z, Gl(Q), le);
        if (Q.$$typeof === w) return P(j, R, z, Bl(R, Q), le);
        kl(R, Q);
      }
      return null;
    }
    function ne(j, R, z, Q) {
      for (
        var le = null, _e = null, se = R, ge = (R = 0), xe = null;
        se !== null && ge < z.length;
        ge++
      ) {
        se.index > ge ? ((xe = se), (se = null)) : (xe = se.sibling);
        var Ee = H(j, se, z[ge], Q);
        if (Ee === null) {
          se === null && (se = xe);
          break;
        }
        (e && se && Ee.alternate === null && n(j, se),
          (R = d(Ee, R, ge)),
          _e === null ? (le = Ee) : (_e.sibling = Ee),
          (_e = Ee),
          (se = xe));
      }
      if (ge === z.length) return (i(j, se), Te && Tn(j, ge), le);
      if (se === null) {
        for (; ge < z.length; ge++)
          ((se = K(j, z[ge], Q)),
            se !== null &&
              ((R = d(se, R, ge)),
              _e === null ? (le = se) : (_e.sibling = se),
              (_e = se)));
        return (Te && Tn(j, ge), le);
      }
      for (se = r(se); ge < z.length; ge++)
        ((xe = P(se, j, ge, z[ge], Q)),
          xe !== null &&
            (e &&
              xe.alternate !== null &&
              se.delete(xe.key === null ? ge : xe.key),
            (R = d(xe, R, ge)),
            _e === null ? (le = xe) : (_e.sibling = xe),
            (_e = xe)));
      return (
        e &&
          se.forEach(function (fa) {
            return n(j, fa);
          }),
        Te && Tn(j, ge),
        le
      );
    }
    function ue(j, R, z, Q) {
      if (z == null) throw Error(l(151));
      for (
        var le = null,
          _e = null,
          se = R,
          ge = (R = 0),
          xe = null,
          Ee = z.next();
        se !== null && !Ee.done;
        ge++, Ee = z.next()
      ) {
        se.index > ge ? ((xe = se), (se = null)) : (xe = se.sibling);
        var fa = H(j, se, Ee.value, Q);
        if (fa === null) {
          se === null && (se = xe);
          break;
        }
        (e && se && fa.alternate === null && n(j, se),
          (R = d(fa, R, ge)),
          _e === null ? (le = fa) : (_e.sibling = fa),
          (_e = fa),
          (se = xe));
      }
      if (Ee.done) return (i(j, se), Te && Tn(j, ge), le);
      if (se === null) {
        for (; !Ee.done; ge++, Ee = z.next())
          ((Ee = K(j, Ee.value, Q)),
            Ee !== null &&
              ((R = d(Ee, R, ge)),
              _e === null ? (le = Ee) : (_e.sibling = Ee),
              (_e = Ee)));
        return (Te && Tn(j, ge), le);
      }
      for (se = r(se); !Ee.done; ge++, Ee = z.next())
        ((Ee = P(se, j, ge, Ee.value, Q)),
          Ee !== null &&
            (e &&
              Ee.alternate !== null &&
              se.delete(Ee.key === null ? ge : Ee.key),
            (R = d(Ee, R, ge)),
            _e === null ? (le = Ee) : (_e.sibling = Ee),
            (_e = Ee)));
      return (
        e &&
          se.forEach(function (Sx) {
            return n(j, Sx);
          }),
        Te && Tn(j, ge),
        le
      );
    }
    function Ne(j, R, z, Q) {
      if (
        (typeof z == 'object' &&
          z !== null &&
          z.type === E &&
          z.key === null &&
          (z = z.props.children),
        typeof z == 'object' && z !== null)
      ) {
        switch (z.$$typeof) {
          case b:
            e: {
              for (var le = z.key; R !== null; ) {
                if (R.key === le) {
                  if (((le = z.type), le === E)) {
                    if (R.tag === 7) {
                      (i(j, R.sibling),
                        (Q = c(R, z.props.children)),
                        (Q.return = j),
                        (j = Q));
                      break e;
                    }
                  } else if (
                    R.elementType === le ||
                    (typeof le == 'object' &&
                      le !== null &&
                      le.$$typeof === L &&
                      Oa(le) === R.type)
                  ) {
                    (i(j, R.sibling),
                      (Q = c(R, z.props)),
                      hs(Q, z),
                      (Q.return = j),
                      (j = Q));
                    break e;
                  }
                  i(j, R);
                  break;
                } else n(j, R);
                R = R.sibling;
              }
              z.type === E ?
                ((Q = Ca(z.props.children, j.mode, Q, z.key)),
                (Q.return = j),
                (j = Q))
              : ((Q = Ll(z.type, z.key, z.props, null, j.mode, Q)),
                hs(Q, z),
                (Q.return = j),
                (j = Q));
            }
            return y(j);
          case A:
            e: {
              for (le = z.key; R !== null; ) {
                if (R.key === le)
                  if (
                    R.tag === 4 &&
                    R.stateNode.containerInfo === z.containerInfo &&
                    R.stateNode.implementation === z.implementation
                  ) {
                    (i(j, R.sibling),
                      (Q = c(R, z.children || [])),
                      (Q.return = j),
                      (j = Q));
                    break e;
                  } else {
                    i(j, R);
                    break;
                  }
                else n(j, R);
                R = R.sibling;
              }
              ((Q = nu(z, j.mode, Q)), (Q.return = j), (j = Q));
            }
            return y(j);
          case L:
            return ((z = Oa(z)), Ne(j, R, z, Q));
        }
        if (de(z)) return ne(j, R, z, Q);
        if (J(z)) {
          if (((le = J(z)), typeof le != 'function')) throw Error(l(150));
          return ((z = le.call(z)), ue(j, R, z, Q));
        }
        if (typeof z.then == 'function') return Ne(j, R, Gl(z), Q);
        if (z.$$typeof === w) return Ne(j, R, Bl(j, z), Q);
        kl(j, z);
      }
      return (
          (typeof z == 'string' && z !== '') ||
            typeof z == 'number' ||
            typeof z == 'bigint'
        ) ?
          ((z = '' + z),
          R !== null && R.tag === 6 ?
            (i(j, R.sibling), (Q = c(R, z)), (Q.return = j), (j = Q))
          : (i(j, R), (Q = tu(z, j.mode, Q)), (Q.return = j), (j = Q)),
          y(j))
        : i(j, R);
    }
    return function (j, R, z, Q) {
      try {
        ds = 0;
        var le = Ne(j, R, z, Q);
        return ((pi = null), le);
      } catch (se) {
        if (se === mi || se === Hl) throw se;
        var _e = Nt(29, se, null, j.mode);
        return ((_e.lanes = Q), (_e.return = j), _e);
      }
    };
  }
  var Ra = Fh(!0),
    Zh = Fh(!1),
    Fn = !1;
  function mu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function pu(e, n) {
    ((e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function Zn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function $n(e, n, i) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (Ce & 2) !== 0)) {
      var c = r.pending;
      return (
        c === null ? (n.next = n) : ((n.next = c.next), (c.next = n)),
        (r.pending = n),
        (n = jl(e)),
        Rh(e, null, i),
        n
      );
    }
    return (Rl(e, r, n, i), jl(e));
  }
  function ms(e, n, i) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (i & 4194048) !== 0))
    ) {
      var r = n.lanes;
      ((r &= e.pendingLanes), (i |= r), (n.lanes = i), Pd(e, i));
    }
  }
  function gu(e, n) {
    var i = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), i === r)) {
      var c = null,
        d = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var y = {
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null,
          };
          (d === null ? (c = d = y) : (d = d.next = y), (i = i.next));
        } while (i !== null);
        d === null ? (c = d = n) : (d = d.next = n);
      } else c = d = n;
      ((i = {
        baseState: r.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: d,
        shared: r.shared,
        callbacks: r.callbacks,
      }),
        (e.updateQueue = i));
      return;
    }
    ((e = i.lastBaseUpdate),
      e === null ? (i.firstBaseUpdate = n) : (e.next = n),
      (i.lastBaseUpdate = n));
  }
  var vu = !1;
  function ps() {
    if (vu) {
      var e = hi;
      if (e !== null) throw e;
    }
  }
  function gs(e, n, i, r) {
    vu = !1;
    var c = e.updateQueue;
    Fn = !1;
    var d = c.firstBaseUpdate,
      y = c.lastBaseUpdate,
      T = c.shared.pending;
    if (T !== null) {
      c.shared.pending = null;
      var O = T,
        B = O.next;
      ((O.next = null), y === null ? (d = B) : (y.next = B), (y = O));
      var Y = e.alternate;
      Y !== null &&
        ((Y = Y.updateQueue),
        (T = Y.lastBaseUpdate),
        T !== y &&
          (T === null ? (Y.firstBaseUpdate = B) : (T.next = B),
          (Y.lastBaseUpdate = O)));
    }
    if (d !== null) {
      var K = c.baseState;
      ((y = 0), (Y = B = O = null), (T = d));
      do {
        var H = T.lane & -536870913,
          P = H !== T.lane;
        if (P ? (Se & H) === H : (r & H) === H) {
          (H !== 0 && H === di && (vu = !0),
            Y !== null &&
              (Y = Y.next =
                {
                  lane: 0,
                  tag: T.tag,
                  payload: T.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var ne = e,
              ue = T;
            H = n;
            var Ne = i;
            switch (ue.tag) {
              case 1:
                if (((ne = ue.payload), typeof ne == 'function')) {
                  K = ne.call(Ne, K, H);
                  break e;
                }
                K = ne;
                break e;
              case 3:
                ne.flags = (ne.flags & -65537) | 128;
              case 0:
                if (
                  ((ne = ue.payload),
                  (H = typeof ne == 'function' ? ne.call(Ne, K, H) : ne),
                  H == null)
                )
                  break e;
                K = g({}, K, H);
                break e;
              case 2:
                Fn = !0;
            }
          }
          ((H = T.callback),
            H !== null &&
              ((e.flags |= 64),
              P && (e.flags |= 8192),
              (P = c.callbacks),
              P === null ? (c.callbacks = [H]) : P.push(H)));
        } else
          ((P = {
            lane: H,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null,
          }),
            Y === null ? ((B = Y = P), (O = K)) : (Y = Y.next = P),
            (y |= H));
        if (((T = T.next), T === null)) {
          if (((T = c.shared.pending), T === null)) break;
          ((P = T),
            (T = P.next),
            (P.next = null),
            (c.lastBaseUpdate = P),
            (c.shared.pending = null));
        }
      } while (!0);
      (Y === null && (O = K),
        (c.baseState = O),
        (c.firstBaseUpdate = B),
        (c.lastBaseUpdate = Y),
        d === null && (c.shared.lanes = 0),
        (ta |= y),
        (e.lanes = y),
        (e.memoizedState = K));
    }
  }
  function $h(e, n) {
    if (typeof e != 'function') throw Error(l(191, e));
    e.call(n);
  }
  function Ih(e, n) {
    var i = e.callbacks;
    if (i !== null)
      for (e.callbacks = null, e = 0; e < i.length; e++) $h(i[e], n);
  }
  var gi = N(null),
    ql = N(0);
  function Jh(e, n) {
    ((e = jn), te(ql, e), te(gi, n), (jn = e | n.baseLanes));
  }
  function yu() {
    (te(ql, jn), te(gi, gi.current));
  }
  function bu() {
    ((jn = ql.current), F(gi), F(ql));
  }
  var Rt = N(null),
    Xt = null;
  function In(e) {
    var n = e.alternate;
    (te(qe, qe.current & 1),
      te(Rt, e),
      Xt === null &&
        (n === null || gi.current !== null || n.memoizedState !== null) &&
        (Xt = e));
  }
  function Su(e) {
    (te(qe, qe.current), te(Rt, e), Xt === null && (Xt = e));
  }
  function Wh(e) {
    e.tag === 22 ?
      (te(qe, qe.current), te(Rt, e), Xt === null && (Xt = e))
    : Jn();
  }
  function Jn() {
    (te(qe, qe.current), te(Rt, Rt.current));
  }
  function jt(e) {
    (F(Rt), Xt === e && (Xt = null), F(qe));
  }
  var qe = N(0);
  function Yl(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var i = n.memoizedState;
        if (i !== null && ((i = i.dehydrated), i === null || Ac(i) || Mc(i)))
          return n;
      } else if (
        n.tag === 19 &&
        (n.memoizedProps.revealOrder === 'forwards' ||
          n.memoizedProps.revealOrder === 'backwards' ||
          n.memoizedProps.revealOrder === 'unstable_legacy-backwards' ||
          n.memoizedProps.revealOrder === 'together')
      ) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
    return null;
  }
  var Cn = 0,
    pe = null,
    De = null,
    Ke = null,
    Xl = !1,
    vi = !1,
    ja = !1,
    Ql = 0,
    vs = 0,
    yi = null,
    cS = 0;
  function He() {
    throw Error(l(321));
  }
  function xu(e, n) {
    if (n === null) return !1;
    for (var i = 0; i < n.length && i < e.length; i++)
      if (!Ot(e[i], n[i])) return !1;
    return !0;
  }
  function Tu(e, n, i, r, c, d) {
    return (
      (Cn = d),
      (pe = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (G.H = e === null || e.memoizedState === null ? Vm : Bu),
      (ja = !1),
      (d = i(r, c)),
      (ja = !1),
      vi && (d = tm(n, i, r, c)),
      em(e),
      d
    );
  }
  function em(e) {
    G.H = Ss;
    var n = De !== null && De.next !== null;
    if (((Cn = 0), (Ke = De = pe = null), (Xl = !1), (vs = 0), (yi = null), n))
      throw Error(l(300));
    e === null ||
      Fe ||
      ((e = e.dependencies), e !== null && Vl(e) && (Fe = !0));
  }
  function tm(e, n, i, r) {
    pe = e;
    var c = 0;
    do {
      if ((vi && (yi = null), (vs = 0), (vi = !1), 25 <= c))
        throw Error(l(301));
      if (((c += 1), (Ke = De = null), e.updateQueue != null)) {
        var d = e.updateQueue;
        ((d.lastEffect = null),
          (d.events = null),
          (d.stores = null),
          d.memoCache != null && (d.memoCache.index = 0));
      }
      ((G.H = Bm), (d = n(i, r)));
    } while (vi);
    return d;
  }
  function fS() {
    var e = G.H,
      n = e.useState()[0];
    return (
      (n = typeof n.then == 'function' ? ys(n) : n),
      (e = e.useState()[0]),
      (De !== null ? De.memoizedState : null) !== e && (pe.flags |= 1024),
      n
    );
  }
  function _u() {
    var e = Ql !== 0;
    return ((Ql = 0), e);
  }
  function Eu(e, n, i) {
    ((n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~i));
  }
  function Cu(e) {
    if (Xl) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        (n !== null && (n.pending = null), (e = e.next));
      }
      Xl = !1;
    }
    ((Cn = 0), (Ke = De = pe = null), (vi = !1), (vs = Ql = 0), (yi = null));
  }
  function pt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ke === null ? (pe.memoizedState = Ke = e) : (Ke = Ke.next = e), Ke);
  }
  function Ye() {
    if (De === null) {
      var e = pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = De.next;
    var n = Ke === null ? pe.memoizedState : Ke.next;
    if (n !== null) ((Ke = n), (De = e));
    else {
      if (e === null)
        throw pe.alternate === null ? Error(l(467)) : Error(l(310));
      ((De = e),
        (e = {
          memoizedState: De.memoizedState,
          baseState: De.baseState,
          baseQueue: De.baseQueue,
          queue: De.queue,
          next: null,
        }),
        Ke === null ? (pe.memoizedState = Ke = e) : (Ke = Ke.next = e));
    }
    return Ke;
  }
  function Kl() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ys(e) {
    var n = vs;
    return (
      (vs += 1),
      yi === null && (yi = []),
      (e = Xh(yi, e, n)),
      (n = pe),
      (Ke === null ? n.memoizedState : Ke.next) === null &&
        ((n = n.alternate),
        (G.H = n === null || n.memoizedState === null ? Vm : Bu)),
      e
    );
  }
  function Fl(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return ys(e);
      if (e.$$typeof === w) return lt(e);
    }
    throw Error(l(438, String(e)));
  }
  function Au(e) {
    var n = null,
      i = pe.updateQueue;
    if ((i !== null && (n = i.memoCache), n == null)) {
      var r = pe.alternate;
      r !== null &&
        ((r = r.updateQueue),
        r !== null &&
          ((r = r.memoCache),
          r != null &&
            (n = {
              data: r.data.map(function (c) {
                return c.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      i === null && ((i = Kl()), (pe.updateQueue = i)),
      (i.memoCache = n),
      (i = n.data[n.index]),
      i === void 0)
    )
      for (i = n.data[n.index] = Array(e), r = 0; r < e; r++) i[r] = Z;
    return (n.index++, i);
  }
  function An(e, n) {
    return typeof n == 'function' ? n(e) : n;
  }
  function Zl(e) {
    var n = Ye();
    return Mu(n, De, e);
  }
  function Mu(e, n, i) {
    var r = e.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = i;
    var c = e.baseQueue,
      d = r.pending;
    if (d !== null) {
      if (c !== null) {
        var y = c.next;
        ((c.next = d.next), (d.next = y));
      }
      ((n.baseQueue = c = d), (r.pending = null));
    }
    if (((d = e.baseState), c === null)) e.memoizedState = d;
    else {
      n = c.next;
      var T = (y = null),
        O = null,
        B = n,
        Y = !1;
      do {
        var K = B.lane & -536870913;
        if (K !== B.lane ? (Se & K) === K : (Cn & K) === K) {
          var H = B.revertLane;
          if (H === 0)
            (O !== null &&
              (O = O.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: B.action,
                  hasEagerState: B.hasEagerState,
                  eagerState: B.eagerState,
                  next: null,
                }),
              K === di && (Y = !0));
          else if ((Cn & H) === H) {
            ((B = B.next), H === di && (Y = !0));
            continue;
          } else
            ((K = {
              lane: 0,
              revertLane: B.revertLane,
              gesture: null,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null,
            }),
              O === null ? ((T = O = K), (y = d)) : (O = O.next = K),
              (pe.lanes |= H),
              (ta |= H));
          ((K = B.action),
            ja && i(d, K),
            (d = B.hasEagerState ? B.eagerState : i(d, K)));
        } else
          ((H = {
            lane: K,
            revertLane: B.revertLane,
            gesture: B.gesture,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null,
          }),
            O === null ? ((T = O = H), (y = d)) : (O = O.next = H),
            (pe.lanes |= K),
            (ta |= K));
        B = B.next;
      } while (B !== null && B !== n);
      if (
        (O === null ? (y = d) : (O.next = T),
        !Ot(d, e.memoizedState) && ((Fe = !0), Y && ((i = hi), i !== null)))
      )
        throw i;
      ((e.memoizedState = d),
        (e.baseState = y),
        (e.baseQueue = O),
        (r.lastRenderedState = d));
    }
    return (c === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
  }
  function wu(e) {
    var n = Ye(),
      i = n.queue;
    if (i === null) throw Error(l(311));
    i.lastRenderedReducer = e;
    var r = i.dispatch,
      c = i.pending,
      d = n.memoizedState;
    if (c !== null) {
      i.pending = null;
      var y = (c = c.next);
      do ((d = e(d, y.action)), (y = y.next));
      while (y !== c);
      (Ot(d, n.memoizedState) || (Fe = !0),
        (n.memoizedState = d),
        n.baseQueue === null && (n.baseState = d),
        (i.lastRenderedState = d));
    }
    return [d, r];
  }
  function nm(e, n, i) {
    var r = pe,
      c = Ye(),
      d = Te;
    if (d) {
      if (i === void 0) throw Error(l(407));
      i = i();
    } else i = n();
    var y = !Ot((De || c).memoizedState, i);
    if (
      (y && ((c.memoizedState = i), (Fe = !0)),
      (c = c.queue),
      Nu(sm.bind(null, r, c, e), [e]),
      c.getSnapshot !== n || y || (Ke !== null && Ke.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        bi(9, { destroy: void 0 }, im.bind(null, r, c, i, n), null),
        Re === null)
      )
        throw Error(l(349));
      d || (Cn & 127) !== 0 || am(r, n, i);
    }
    return i;
  }
  function am(e, n, i) {
    ((e.flags |= 16384),
      (e = { getSnapshot: n, value: i }),
      (n = pe.updateQueue),
      n === null ?
        ((n = Kl()), (pe.updateQueue = n), (n.stores = [e]))
      : ((i = n.stores), i === null ? (n.stores = [e]) : i.push(e)));
  }
  function im(e, n, i, r) {
    ((n.value = i), (n.getSnapshot = r), lm(n) && rm(e));
  }
  function sm(e, n, i) {
    return i(function () {
      lm(n) && rm(e);
    });
  }
  function lm(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var i = n();
      return !Ot(e, i);
    } catch {
      return !0;
    }
  }
  function rm(e) {
    var n = Ea(e, 2);
    n !== null && At(n, e, 2);
  }
  function Du(e) {
    var n = pt();
    if (typeof e == 'function') {
      var i = e;
      if (((e = i()), ja)) {
        Gn(!0);
        try {
          i();
        } finally {
          Gn(!1);
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = e),
      (n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: An,
        lastRenderedState: e,
      }),
      n
    );
  }
  function om(e, n, i, r) {
    return ((e.baseState = i), Mu(e, De, typeof r == 'function' ? r : An));
  }
  function dS(e, n, i, r, c) {
    if (Jl(e)) throw Error(l(485));
    if (((e = n.action), e !== null)) {
      var d = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (y) {
          d.listeners.push(y);
        },
      };
      (G.T !== null ? i(!0) : (d.isTransition = !1),
        r(d),
        (i = n.pending),
        i === null ?
          ((d.next = n.pending = d), um(n, d))
        : ((d.next = i.next), (n.pending = i.next = d)));
    }
  }
  function um(e, n) {
    var i = n.action,
      r = n.payload,
      c = e.state;
    if (n.isTransition) {
      var d = G.T,
        y = {};
      G.T = y;
      try {
        var T = i(c, r),
          O = G.S;
        (O !== null && O(y, T), cm(e, n, T));
      } catch (B) {
        Ou(e, n, B);
      } finally {
        (d !== null && y.types !== null && (d.types = y.types), (G.T = d));
      }
    } else
      try {
        ((d = i(c, r)), cm(e, n, d));
      } catch (B) {
        Ou(e, n, B);
      }
  }
  function cm(e, n, i) {
    i !== null && typeof i == 'object' && typeof i.then == 'function' ?
      i.then(
        function (r) {
          fm(e, n, r);
        },
        function (r) {
          return Ou(e, n, r);
        },
      )
    : fm(e, n, i);
  }
  function fm(e, n, i) {
    ((n.status = 'fulfilled'),
      (n.value = i),
      dm(n),
      (e.state = i),
      (n = e.pending),
      n !== null &&
        ((i = n.next),
        i === n ? (e.pending = null) : ((i = i.next), (n.next = i), um(e, i))));
  }
  function Ou(e, n, i) {
    var r = e.pending;
    if (((e.pending = null), r !== null)) {
      r = r.next;
      do ((n.status = 'rejected'), (n.reason = i), dm(n), (n = n.next));
      while (n !== r);
    }
    e.action = null;
  }
  function dm(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function hm(e, n) {
    return n;
  }
  function mm(e, n) {
    if (Te) {
      var i = Re.formState;
      if (i !== null) {
        e: {
          var r = pe;
          if (Te) {
            if (Le) {
              t: {
                for (var c = Le, d = Yt; c.nodeType !== 8; ) {
                  if (!d) {
                    c = null;
                    break t;
                  }
                  if (((c = Qt(c.nextSibling)), c === null)) {
                    c = null;
                    break t;
                  }
                }
                ((d = c.data), (c = d === 'F!' || d === 'F' ? c : null));
              }
              if (c) {
                ((Le = Qt(c.nextSibling)), (r = c.data === 'F!'));
                break e;
              }
            }
            Qn(r);
          }
          r = !1;
        }
        r && (n = i[0]);
      }
    }
    return (
      (i = pt()),
      (i.memoizedState = i.baseState = n),
      (r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hm,
        lastRenderedState: n,
      }),
      (i.queue = r),
      (i = jm.bind(null, pe, r)),
      (r.dispatch = i),
      (r = Du(!1)),
      (d = Vu.bind(null, pe, !1, r.queue)),
      (r = pt()),
      (c = { state: n, dispatch: null, action: e, pending: null }),
      (r.queue = c),
      (i = dS.bind(null, pe, c, d, i)),
      (c.dispatch = i),
      (r.memoizedState = e),
      [n, i, !1]
    );
  }
  function pm(e) {
    var n = Ye();
    return gm(n, De, e);
  }
  function gm(e, n, i) {
    if (
      ((n = Mu(e, n, hm)[0]),
      (e = Zl(An)[0]),
      typeof n == 'object' && n !== null && typeof n.then == 'function')
    )
      try {
        var r = ys(n);
      } catch (y) {
        throw y === mi ? Hl : y;
      }
    else r = n;
    n = Ye();
    var c = n.queue,
      d = c.dispatch;
    return (
      i !== n.memoizedState &&
        ((pe.flags |= 2048),
        bi(9, { destroy: void 0 }, hS.bind(null, c, i), null)),
      [r, d, e]
    );
  }
  function hS(e, n) {
    e.action = n;
  }
  function vm(e) {
    var n = Ye(),
      i = De;
    if (i !== null) return gm(n, i, e);
    (Ye(), (n = n.memoizedState), (i = Ye()));
    var r = i.queue.dispatch;
    return ((i.memoizedState = e), [n, r, !1]);
  }
  function bi(e, n, i, r) {
    return (
      (e = { tag: e, create: i, deps: r, inst: n, next: null }),
      (n = pe.updateQueue),
      n === null && ((n = Kl()), (pe.updateQueue = n)),
      (i = n.lastEffect),
      i === null ?
        (n.lastEffect = e.next = e)
      : ((r = i.next), (i.next = e), (e.next = r), (n.lastEffect = e)),
      e
    );
  }
  function ym() {
    return Ye().memoizedState;
  }
  function $l(e, n, i, r) {
    var c = pt();
    ((pe.flags |= e),
      (c.memoizedState = bi(
        1 | n,
        { destroy: void 0 },
        i,
        r === void 0 ? null : r,
      )));
  }
  function Il(e, n, i, r) {
    var c = Ye();
    r = r === void 0 ? null : r;
    var d = c.memoizedState.inst;
    De !== null && r !== null && xu(r, De.memoizedState.deps) ?
      (c.memoizedState = bi(n, d, i, r))
    : ((pe.flags |= e), (c.memoizedState = bi(1 | n, d, i, r)));
  }
  function bm(e, n) {
    $l(8390656, 8, e, n);
  }
  function Nu(e, n) {
    Il(2048, 8, e, n);
  }
  function mS(e) {
    pe.flags |= 4;
    var n = pe.updateQueue;
    if (n === null) ((n = Kl()), (pe.updateQueue = n), (n.events = [e]));
    else {
      var i = n.events;
      i === null ? (n.events = [e]) : i.push(e);
    }
  }
  function Sm(e) {
    var n = Ye().memoizedState;
    return (
      mS({ ref: n, nextImpl: e }),
      function () {
        if ((Ce & 2) !== 0) throw Error(l(440));
        return n.impl.apply(void 0, arguments);
      }
    );
  }
  function xm(e, n) {
    return Il(4, 2, e, n);
  }
  function Tm(e, n) {
    return Il(4, 4, e, n);
  }
  function _m(e, n) {
    if (typeof n == 'function') {
      e = e();
      var i = n(e);
      return function () {
        typeof i == 'function' ? i() : n(null);
      };
    }
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function Em(e, n, i) {
    ((i = i != null ? i.concat([e]) : null), Il(4, 4, _m.bind(null, n, e), i));
  }
  function Ru() {}
  function Cm(e, n) {
    var i = Ye();
    n = n === void 0 ? null : n;
    var r = i.memoizedState;
    return n !== null && xu(n, r[1]) ? r[0] : ((i.memoizedState = [e, n]), e);
  }
  function Am(e, n) {
    var i = Ye();
    n = n === void 0 ? null : n;
    var r = i.memoizedState;
    if (n !== null && xu(n, r[1])) return r[0];
    if (((r = e()), ja)) {
      Gn(!0);
      try {
        e();
      } finally {
        Gn(!1);
      }
    }
    return ((i.memoizedState = [r, n]), r);
  }
  function ju(e, n, i) {
    return i === void 0 || ((Cn & 1073741824) !== 0 && (Se & 261930) === 0) ?
        (e.memoizedState = n)
      : ((e.memoizedState = i), (e = Mp()), (pe.lanes |= e), (ta |= e), i);
  }
  function Mm(e, n, i, r) {
    return (
      Ot(i, n) ? i
      : gi.current !== null ? ((e = ju(e, i, r)), Ot(e, n) || (Fe = !0), e)
      : (Cn & 42) === 0 || ((Cn & 1073741824) !== 0 && (Se & 261930) === 0) ?
        ((Fe = !0), (e.memoizedState = i))
      : ((e = Mp()), (pe.lanes |= e), (ta |= e), n)
    );
  }
  function wm(e, n, i, r, c) {
    var d = k.p;
    k.p = d !== 0 && 8 > d ? d : 8;
    var y = G.T,
      T = {};
    ((G.T = T), Vu(e, !1, n, i));
    try {
      var O = c(),
        B = G.S;
      if (
        (B !== null && B(T, O),
        O !== null && typeof O == 'object' && typeof O.then == 'function')
      ) {
        var Y = uS(O, r);
        bs(e, n, Y, Vt(e));
      } else bs(e, n, r, Vt(e));
    } catch (K) {
      bs(e, n, { then: function () {}, status: 'rejected', reason: K }, Vt());
    } finally {
      ((k.p = d),
        y !== null && T.types !== null && (y.types = T.types),
        (G.T = y));
    }
  }
  function pS() {}
  function Lu(e, n, i, r) {
    if (e.tag !== 5) throw Error(l(476));
    var c = Dm(e).queue;
    wm(
      e,
      c,
      n,
      q,
      i === null ? pS : (
        function () {
          return (Om(e), i(r));
        }
      ),
    );
  }
  function Dm(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: q,
      baseState: q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: An,
        lastRenderedState: q,
      },
      next: null,
    };
    var i = {};
    return (
      (n.next = {
        memoizedState: i,
        baseState: i,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: An,
          lastRenderedState: i,
        },
        next: null,
      }),
      (e.memoizedState = n),
      (e = e.alternate),
      e !== null && (e.memoizedState = n),
      n
    );
  }
  function Om(e) {
    var n = Dm(e);
    (n.next === null && (n = e.alternate.memoizedState),
      bs(e, n.next.queue, {}, Vt()));
  }
  function zu() {
    return lt(Vs);
  }
  function Nm() {
    return Ye().memoizedState;
  }
  function Rm() {
    return Ye().memoizedState;
  }
  function gS(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var i = Vt();
          e = Zn(i);
          var r = $n(n, e, i);
          (r !== null && (At(r, n, i), ms(r, n, i)),
            (n = { cache: cu() }),
            (e.payload = n));
          return;
      }
      n = n.return;
    }
  }
  function vS(e, n, i) {
    var r = Vt();
    ((i = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Jl(e) ?
        Lm(n, i)
      : ((i = Wo(e, n, i, r)), i !== null && (At(i, e, r), zm(i, n, r))));
  }
  function jm(e, n, i) {
    var r = Vt();
    bs(e, n, i, r);
  }
  function bs(e, n, i, r) {
    var c = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Jl(e)) Lm(n, c);
    else {
      var d = e.alternate;
      if (
        e.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = n.lastRenderedReducer), d !== null)
      )
        try {
          var y = n.lastRenderedState,
            T = d(y, i);
          if (((c.hasEagerState = !0), (c.eagerState = T), Ot(T, y)))
            return (Rl(e, n, c, 0), Re === null && Nl(), !1);
        } catch {}
      if (((i = Wo(e, n, c, r)), i !== null))
        return (At(i, e, r), zm(i, n, r), !0);
    }
    return !1;
  }
  function Vu(e, n, i, r) {
    if (
      ((r = {
        lane: 2,
        revertLane: mc(),
        gesture: null,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Jl(e))
    ) {
      if (n) throw Error(l(479));
    } else ((n = Wo(e, i, r, 2)), n !== null && At(n, e, 2));
  }
  function Jl(e) {
    var n = e.alternate;
    return e === pe || (n !== null && n === pe);
  }
  function Lm(e, n) {
    vi = Xl = !0;
    var i = e.pending;
    (i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
      (e.pending = n));
  }
  function zm(e, n, i) {
    if ((i & 4194048) !== 0) {
      var r = n.lanes;
      ((r &= e.pendingLanes), (i |= r), (n.lanes = i), Pd(e, i));
    }
  }
  var Ss = {
    readContext: lt,
    use: Fl,
    useCallback: He,
    useContext: He,
    useEffect: He,
    useImperativeHandle: He,
    useLayoutEffect: He,
    useInsertionEffect: He,
    useMemo: He,
    useReducer: He,
    useRef: He,
    useState: He,
    useDebugValue: He,
    useDeferredValue: He,
    useTransition: He,
    useSyncExternalStore: He,
    useId: He,
    useHostTransitionStatus: He,
    useFormState: He,
    useActionState: He,
    useOptimistic: He,
    useMemoCache: He,
    useCacheRefresh: He,
  };
  Ss.useEffectEvent = He;
  var Vm = {
      readContext: lt,
      use: Fl,
      useCallback: function (e, n) {
        return ((pt().memoizedState = [e, n === void 0 ? null : n]), e);
      },
      useContext: lt,
      useEffect: bm,
      useImperativeHandle: function (e, n, i) {
        ((i = i != null ? i.concat([e]) : null),
          $l(4194308, 4, _m.bind(null, n, e), i));
      },
      useLayoutEffect: function (e, n) {
        return $l(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        $l(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var i = pt();
        n = n === void 0 ? null : n;
        var r = e();
        if (ja) {
          Gn(!0);
          try {
            e();
          } finally {
            Gn(!1);
          }
        }
        return ((i.memoizedState = [r, n]), r);
      },
      useReducer: function (e, n, i) {
        var r = pt();
        if (i !== void 0) {
          var c = i(n);
          if (ja) {
            Gn(!0);
            try {
              i(n);
            } finally {
              Gn(!1);
            }
          }
        } else c = n;
        return (
          (r.memoizedState = r.baseState = c),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: c,
          }),
          (r.queue = e),
          (e = e.dispatch = vS.bind(null, pe, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = pt();
        return ((e = { current: e }), (n.memoizedState = e));
      },
      useState: function (e) {
        e = Du(e);
        var n = e.queue,
          i = jm.bind(null, pe, n);
        return ((n.dispatch = i), [e.memoizedState, i]);
      },
      useDebugValue: Ru,
      useDeferredValue: function (e, n) {
        var i = pt();
        return ju(i, e, n);
      },
      useTransition: function () {
        var e = Du(!1);
        return (
          (e = wm.bind(null, pe, e.queue, !0, !1)),
          (pt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, n, i) {
        var r = pe,
          c = pt();
        if (Te) {
          if (i === void 0) throw Error(l(407));
          i = i();
        } else {
          if (((i = n()), Re === null)) throw Error(l(349));
          (Se & 127) !== 0 || am(r, n, i);
        }
        c.memoizedState = i;
        var d = { value: i, getSnapshot: n };
        return (
          (c.queue = d),
          bm(sm.bind(null, r, d, e), [e]),
          (r.flags |= 2048),
          bi(9, { destroy: void 0 }, im.bind(null, r, d, i, n), null),
          i
        );
      },
      useId: function () {
        var e = pt(),
          n = Re.identifierPrefix;
        if (Te) {
          var i = un,
            r = on;
          ((i = (r & ~(1 << (32 - Dt(r) - 1))).toString(32) + i),
            (n = '_' + n + 'R_' + i),
            (i = Ql++),
            0 < i && (n += 'H' + i.toString(32)),
            (n += '_'));
        } else ((i = cS++), (n = '_' + n + 'r_' + i.toString(32) + '_'));
        return (e.memoizedState = n);
      },
      useHostTransitionStatus: zu,
      useFormState: mm,
      useActionState: mm,
      useOptimistic: function (e) {
        var n = pt();
        n.memoizedState = n.baseState = e;
        var i = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (n.queue = i),
          (n = Vu.bind(null, pe, !0, i)),
          (i.dispatch = n),
          [e, n]
        );
      },
      useMemoCache: Au,
      useCacheRefresh: function () {
        return (pt().memoizedState = gS.bind(null, pe));
      },
      useEffectEvent: function (e) {
        var n = pt(),
          i = { impl: e };
        return (
          (n.memoizedState = i),
          function () {
            if ((Ce & 2) !== 0) throw Error(l(440));
            return i.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Bu = {
      readContext: lt,
      use: Fl,
      useCallback: Cm,
      useContext: lt,
      useEffect: Nu,
      useImperativeHandle: Em,
      useInsertionEffect: xm,
      useLayoutEffect: Tm,
      useMemo: Am,
      useReducer: Zl,
      useRef: ym,
      useState: function () {
        return Zl(An);
      },
      useDebugValue: Ru,
      useDeferredValue: function (e, n) {
        var i = Ye();
        return Mm(i, De.memoizedState, e, n);
      },
      useTransition: function () {
        var e = Zl(An)[0],
          n = Ye().memoizedState;
        return [typeof e == 'boolean' ? e : ys(e), n];
      },
      useSyncExternalStore: nm,
      useId: Nm,
      useHostTransitionStatus: zu,
      useFormState: pm,
      useActionState: pm,
      useOptimistic: function (e, n) {
        var i = Ye();
        return om(i, De, e, n);
      },
      useMemoCache: Au,
      useCacheRefresh: Rm,
    };
  Bu.useEffectEvent = Sm;
  var Bm = {
    readContext: lt,
    use: Fl,
    useCallback: Cm,
    useContext: lt,
    useEffect: Nu,
    useImperativeHandle: Em,
    useInsertionEffect: xm,
    useLayoutEffect: Tm,
    useMemo: Am,
    useReducer: wu,
    useRef: ym,
    useState: function () {
      return wu(An);
    },
    useDebugValue: Ru,
    useDeferredValue: function (e, n) {
      var i = Ye();
      return De === null ? ju(i, e, n) : Mm(i, De.memoizedState, e, n);
    },
    useTransition: function () {
      var e = wu(An)[0],
        n = Ye().memoizedState;
      return [typeof e == 'boolean' ? e : ys(e), n];
    },
    useSyncExternalStore: nm,
    useId: Nm,
    useHostTransitionStatus: zu,
    useFormState: vm,
    useActionState: vm,
    useOptimistic: function (e, n) {
      var i = Ye();
      return De !== null ?
          om(i, De, e, n)
        : ((i.baseState = e), [e, i.queue.dispatch]);
    },
    useMemoCache: Au,
    useCacheRefresh: Rm,
  };
  Bm.useEffectEvent = Sm;
  function Uu(e, n, i, r) {
    ((n = e.memoizedState),
      (i = i(r, n)),
      (i = i == null ? n : g({}, n, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i));
  }
  var Hu = {
    enqueueSetState: function (e, n, i) {
      e = e._reactInternals;
      var r = Vt(),
        c = Zn(r);
      ((c.payload = n),
        i != null && (c.callback = i),
        (n = $n(e, c, r)),
        n !== null && (At(n, e, r), ms(n, e, r)));
    },
    enqueueReplaceState: function (e, n, i) {
      e = e._reactInternals;
      var r = Vt(),
        c = Zn(r);
      ((c.tag = 1),
        (c.payload = n),
        i != null && (c.callback = i),
        (n = $n(e, c, r)),
        n !== null && (At(n, e, r), ms(n, e, r)));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var i = Vt(),
        r = Zn(i);
      ((r.tag = 2),
        n != null && (r.callback = n),
        (n = $n(e, r, i)),
        n !== null && (At(n, e, i), ms(n, e, i)));
    },
  };
  function Um(e, n, i, r, c, d, y) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function' ?
        e.shouldComponentUpdate(r, d, y)
      : n.prototype && n.prototype.isPureReactComponent ? !ls(i, r) || !ls(c, d)
      : !0
    );
  }
  function Hm(e, n, i, r) {
    ((e = n.state),
      typeof n.componentWillReceiveProps == 'function' &&
        n.componentWillReceiveProps(i, r),
      typeof n.UNSAFE_componentWillReceiveProps == 'function' &&
        n.UNSAFE_componentWillReceiveProps(i, r),
      n.state !== e && Hu.enqueueReplaceState(n, n.state, null));
  }
  function La(e, n) {
    var i = n;
    if ('ref' in n) {
      i = {};
      for (var r in n) r !== 'ref' && (i[r] = n[r]);
    }
    if ((e = e.defaultProps)) {
      i === n && (i = g({}, i));
      for (var c in e) i[c] === void 0 && (i[c] = e[c]);
    }
    return i;
  }
  function Pm(e) {
    Ol(e);
  }
  function Gm(e) {
    console.error(e);
  }
  function km(e) {
    Ol(e);
  }
  function Wl(e, n) {
    try {
      var i = e.onUncaughtError;
      i(n.value, { componentStack: n.stack });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function qm(e, n, i) {
    try {
      var r = e.onCaughtError;
      r(i.value, {
        componentStack: i.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null,
      });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function Pu(e, n, i) {
    return (
      (i = Zn(i)),
      (i.tag = 3),
      (i.payload = { element: null }),
      (i.callback = function () {
        Wl(e, n);
      }),
      i
    );
  }
  function Ym(e) {
    return ((e = Zn(e)), (e.tag = 3), e);
  }
  function Xm(e, n, i, r) {
    var c = i.type.getDerivedStateFromError;
    if (typeof c == 'function') {
      var d = r.value;
      ((e.payload = function () {
        return c(d);
      }),
        (e.callback = function () {
          qm(n, i, r);
        }));
    }
    var y = i.stateNode;
    y !== null &&
      typeof y.componentDidCatch == 'function' &&
      (e.callback = function () {
        (qm(n, i, r),
          typeof c != 'function' &&
            (na === null ? (na = new Set([this])) : na.add(this)));
        var T = r.stack;
        this.componentDidCatch(r.value, {
          componentStack: T !== null ? T : '',
        });
      });
  }
  function yS(e, n, i, r, c) {
    if (
      ((i.flags |= 32768),
      r !== null && typeof r == 'object' && typeof r.then == 'function')
    ) {
      if (
        ((n = i.alternate),
        n !== null && fi(n, i, c, !0),
        (i = Rt.current),
        i !== null)
      ) {
        switch (i.tag) {
          case 31:
          case 13:
            return (
              Xt === null ? fr() : i.alternate === null && Pe === 0 && (Pe = 3),
              (i.flags &= -257),
              (i.flags |= 65536),
              (i.lanes = c),
              r === Pl ?
                (i.flags |= 16384)
              : ((n = i.updateQueue),
                n === null ? (i.updateQueue = new Set([r])) : n.add(r),
                fc(e, r, c)),
              !1
            );
          case 22:
            return (
              (i.flags |= 65536),
              r === Pl ?
                (i.flags |= 16384)
              : ((n = i.updateQueue),
                n === null ?
                  ((n = {
                    transitions: null,
                    markerInstances: null,
                    retryQueue: new Set([r]),
                  }),
                  (i.updateQueue = n))
                : ((i = n.retryQueue),
                  i === null ? (n.retryQueue = new Set([r])) : i.add(r)),
                fc(e, r, c)),
              !1
            );
        }
        throw Error(l(435, i.tag));
      }
      return (fc(e, r, c), fr(), !1);
    }
    if (Te)
      return (
        (n = Rt.current),
        n !== null ?
          ((n.flags & 65536) === 0 && (n.flags |= 256),
          (n.flags |= 65536),
          (n.lanes = c),
          r !== su && ((e = Error(l(422), { cause: r })), us(Gt(e, i))))
        : (r !== su && ((n = Error(l(423), { cause: r })), us(Gt(n, i))),
          (e = e.current.alternate),
          (e.flags |= 65536),
          (c &= -c),
          (e.lanes |= c),
          (r = Gt(r, i)),
          (c = Pu(e.stateNode, r, c)),
          gu(e, c),
          Pe !== 4 && (Pe = 2)),
        !1
      );
    var d = Error(l(520), { cause: r });
    if (
      ((d = Gt(d, i)),
      ws === null ? (ws = [d]) : ws.push(d),
      Pe !== 4 && (Pe = 2),
      n === null)
    )
      return !0;
    ((r = Gt(r, i)), (i = n));
    do {
      switch (i.tag) {
        case 3:
          return (
            (i.flags |= 65536),
            (e = c & -c),
            (i.lanes |= e),
            (e = Pu(i.stateNode, r, e)),
            gu(i, e),
            !1
          );
        case 1:
          if (
            ((n = i.type),
            (d = i.stateNode),
            (i.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == 'function' ||
                (d !== null &&
                  typeof d.componentDidCatch == 'function' &&
                  (na === null || !na.has(d)))))
          )
            return (
              (i.flags |= 65536),
              (c &= -c),
              (i.lanes |= c),
              (c = Ym(c)),
              Xm(c, e, i, r),
              gu(i, c),
              !1
            );
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var Gu = Error(l(461)),
    Fe = !1;
  function rt(e, n, i, r) {
    n.child = e === null ? Zh(n, null, i, r) : Ra(n, e.child, i, r);
  }
  function Qm(e, n, i, r, c) {
    i = i.render;
    var d = n.ref;
    if ('ref' in r) {
      var y = {};
      for (var T in r) T !== 'ref' && (y[T] = r[T]);
    } else y = r;
    return (
      wa(n),
      (r = Tu(e, n, i, y, d, c)),
      (T = _u()),
      e !== null && !Fe ?
        (Eu(e, n, c), Mn(e, n, c))
      : (Te && T && au(n), (n.flags |= 1), rt(e, n, r, c), n.child)
    );
  }
  function Km(e, n, i, r, c) {
    if (e === null) {
      var d = i.type;
      return (
          typeof d == 'function' &&
            !eu(d) &&
            d.defaultProps === void 0 &&
            i.compare === null
        ) ?
          ((n.tag = 15), (n.type = d), Fm(e, n, d, r, c))
        : ((e = Ll(i.type, null, r, n, n.mode, c)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((d = e.child), !Zu(e, c))) {
      var y = d.memoizedProps;
      if (
        ((i = i.compare), (i = i !== null ? i : ls), i(y, r) && e.ref === n.ref)
      )
        return Mn(e, n, c);
    }
    return (
      (n.flags |= 1),
      (e = xn(d, r)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function Fm(e, n, i, r, c) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (ls(d, r) && e.ref === n.ref)
        if (((Fe = !1), (n.pendingProps = r = d), Zu(e, c)))
          (e.flags & 131072) !== 0 && (Fe = !0);
        else return ((n.lanes = e.lanes), Mn(e, n, c));
    }
    return ku(e, n, i, r, c);
  }
  function Zm(e, n, i, r) {
    var c = r.children,
      d = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        n.stateNode === null &&
        (n.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      r.mode === 'hidden')
    ) {
      if ((n.flags & 128) !== 0) {
        if (((d = d !== null ? d.baseLanes | i : i), e !== null)) {
          for (r = n.child = e.child, c = 0; r !== null; )
            ((c = c | r.lanes | r.childLanes), (r = r.sibling));
          r = c & ~d;
        } else ((r = 0), (n.child = null));
        return $m(e, n, d, i, r);
      }
      if ((i & 536870912) !== 0)
        ((n.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Ul(n, d !== null ? d.cachePool : null),
          d !== null ? Jh(n, d) : yu(),
          Wh(n));
      else
        return (
          (r = n.lanes = 536870912),
          $m(e, n, d !== null ? d.baseLanes | i : i, i, r)
        );
    } else
      d !== null ?
        (Ul(n, d.cachePool), Jh(n, d), Jn(), (n.memoizedState = null))
      : (e !== null && Ul(n, null), yu(), Jn());
    return (rt(e, n, c, i), n.child);
  }
  function xs(e, n) {
    return (
      (e !== null && e.tag === 22) ||
        n.stateNode !== null ||
        (n.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      n.sibling
    );
  }
  function $m(e, n, i, r, c) {
    var d = du();
    return (
      (d = d === null ? null : { parent: Qe._currentValue, pool: d }),
      (n.memoizedState = { baseLanes: i, cachePool: d }),
      e !== null && Ul(n, null),
      yu(),
      Wh(n),
      e !== null && fi(e, n, r, !0),
      (n.childLanes = c),
      null
    );
  }
  function er(e, n) {
    return (
      (n = nr({ mode: n.mode, children: n.children }, e.mode)),
      (n.ref = e.ref),
      (e.child = n),
      (n.return = e),
      n
    );
  }
  function Im(e, n, i) {
    return (
      Ra(n, e.child, null, i),
      (e = er(n, n.pendingProps)),
      (e.flags |= 2),
      jt(n),
      (n.memoizedState = null),
      e
    );
  }
  function bS(e, n, i) {
    var r = n.pendingProps,
      c = (n.flags & 128) !== 0;
    if (((n.flags &= -129), e === null)) {
      if (Te) {
        if (r.mode === 'hidden')
          return ((e = er(n, r)), (n.lanes = 536870912), xs(null, e));
        if (
          (Su(n),
          (e = Le) ?
            ((e = ug(e, Yt)),
            (e = e !== null && e.data === '&' ? e : null),
            e !== null &&
              ((n.memoizedState = {
                dehydrated: e,
                treeContext: Yn !== null ? { id: on, overflow: un } : null,
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (i = Lh(e)),
              (i.return = n),
              (n.child = i),
              (st = n),
              (Le = null)))
          : (e = null),
          e === null)
        )
          throw Qn(n);
        return ((n.lanes = 536870912), null);
      }
      return er(n, r);
    }
    var d = e.memoizedState;
    if (d !== null) {
      var y = d.dehydrated;
      if ((Su(n), c))
        if (n.flags & 256) ((n.flags &= -257), (n = Im(e, n, i)));
        else if (n.memoizedState !== null)
          ((n.child = e.child), (n.flags |= 128), (n = null));
        else throw Error(l(558));
      else if (
        (Fe || fi(e, n, i, !1), (c = (i & e.childLanes) !== 0), Fe || c)
      ) {
        if (
          ((r = Re),
          r !== null && ((y = Gd(r, i)), y !== 0 && y !== d.retryLane))
        )
          throw ((d.retryLane = y), Ea(e, y), At(r, e, y), Gu);
        (fr(), (n = Im(e, n, i)));
      } else
        ((e = d.treeContext),
          (Le = Qt(y.nextSibling)),
          (st = n),
          (Te = !0),
          (Xn = null),
          (Yt = !1),
          e !== null && Bh(n, e),
          (n = er(n, r)),
          (n.flags |= 4096));
      return n;
    }
    return (
      (e = xn(e.child, { mode: r.mode, children: r.children })),
      (e.ref = n.ref),
      (n.child = e),
      (e.return = n),
      e
    );
  }
  function tr(e, n) {
    var i = n.ref;
    if (i === null) e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof i != 'function' && typeof i != 'object') throw Error(l(284));
      (e === null || e.ref !== i) && (n.flags |= 4194816);
    }
  }
  function ku(e, n, i, r, c) {
    return (
      wa(n),
      (i = Tu(e, n, i, r, void 0, c)),
      (r = _u()),
      e !== null && !Fe ?
        (Eu(e, n, c), Mn(e, n, c))
      : (Te && r && au(n), (n.flags |= 1), rt(e, n, i, c), n.child)
    );
  }
  function Jm(e, n, i, r, c, d) {
    return (
      wa(n),
      (n.updateQueue = null),
      (i = tm(n, r, i, c)),
      em(e),
      (r = _u()),
      e !== null && !Fe ?
        (Eu(e, n, d), Mn(e, n, d))
      : (Te && r && au(n), (n.flags |= 1), rt(e, n, i, d), n.child)
    );
  }
  function Wm(e, n, i, r, c) {
    if ((wa(n), n.stateNode === null)) {
      var d = ri,
        y = i.contextType;
      (typeof y == 'object' && y !== null && (d = lt(y)),
        (d = new i(r, d)),
        (n.memoizedState =
          d.state !== null && d.state !== void 0 ? d.state : null),
        (d.updater = Hu),
        (n.stateNode = d),
        (d._reactInternals = n),
        (d = n.stateNode),
        (d.props = r),
        (d.state = n.memoizedState),
        (d.refs = {}),
        mu(n),
        (y = i.contextType),
        (d.context = typeof y == 'object' && y !== null ? lt(y) : ri),
        (d.state = n.memoizedState),
        (y = i.getDerivedStateFromProps),
        typeof y == 'function' && (Uu(n, i, y, r), (d.state = n.memoizedState)),
        typeof i.getDerivedStateFromProps == 'function' ||
          typeof d.getSnapshotBeforeUpdate == 'function' ||
          (typeof d.UNSAFE_componentWillMount != 'function' &&
            typeof d.componentWillMount != 'function') ||
          ((y = d.state),
          typeof d.componentWillMount == 'function' && d.componentWillMount(),
          typeof d.UNSAFE_componentWillMount == 'function' &&
            d.UNSAFE_componentWillMount(),
          y !== d.state && Hu.enqueueReplaceState(d, d.state, null),
          gs(n, r, d, c),
          ps(),
          (d.state = n.memoizedState)),
        typeof d.componentDidMount == 'function' && (n.flags |= 4194308),
        (r = !0));
    } else if (e === null) {
      d = n.stateNode;
      var T = n.memoizedProps,
        O = La(i, T);
      d.props = O;
      var B = d.context,
        Y = i.contextType;
      ((y = ri), typeof Y == 'object' && Y !== null && (y = lt(Y)));
      var K = i.getDerivedStateFromProps;
      ((Y =
        typeof K == 'function' ||
        typeof d.getSnapshotBeforeUpdate == 'function'),
        (T = n.pendingProps !== T),
        Y ||
          (typeof d.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof d.componentWillReceiveProps != 'function') ||
          ((T || B !== y) && Hm(n, d, r, y)),
        (Fn = !1));
      var H = n.memoizedState;
      ((d.state = H),
        gs(n, r, d, c),
        ps(),
        (B = n.memoizedState),
        T || H !== B || Fn ?
          (typeof K == 'function' && (Uu(n, i, K, r), (B = n.memoizedState)),
          (O = Fn || Um(n, i, O, r, H, B, y)) ?
            (Y ||
              (typeof d.UNSAFE_componentWillMount != 'function' &&
                typeof d.componentWillMount != 'function') ||
              (typeof d.componentWillMount == 'function' &&
                d.componentWillMount(),
              typeof d.UNSAFE_componentWillMount == 'function' &&
                d.UNSAFE_componentWillMount()),
            typeof d.componentDidMount == 'function' && (n.flags |= 4194308))
          : (typeof d.componentDidMount == 'function' && (n.flags |= 4194308),
            (n.memoizedProps = r),
            (n.memoizedState = B)),
          (d.props = r),
          (d.state = B),
          (d.context = y),
          (r = O))
        : (typeof d.componentDidMount == 'function' && (n.flags |= 4194308),
          (r = !1)));
    } else {
      ((d = n.stateNode),
        pu(e, n),
        (y = n.memoizedProps),
        (Y = La(i, y)),
        (d.props = Y),
        (K = n.pendingProps),
        (H = d.context),
        (B = i.contextType),
        (O = ri),
        typeof B == 'object' && B !== null && (O = lt(B)),
        (T = i.getDerivedStateFromProps),
        (B =
          typeof T == 'function' ||
          typeof d.getSnapshotBeforeUpdate == 'function') ||
          (typeof d.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof d.componentWillReceiveProps != 'function') ||
          ((y !== K || H !== O) && Hm(n, d, r, O)),
        (Fn = !1),
        (H = n.memoizedState),
        (d.state = H),
        gs(n, r, d, c),
        ps());
      var P = n.memoizedState;
      (
        y !== K ||
        H !== P ||
        Fn ||
        (e !== null && e.dependencies !== null && Vl(e.dependencies))
      ) ?
        (typeof T == 'function' && (Uu(n, i, T, r), (P = n.memoizedState)),
        (
          (Y =
            Fn ||
            Um(n, i, Y, r, H, P, O) ||
            (e !== null && e.dependencies !== null && Vl(e.dependencies)))
        ) ?
          (B ||
            (typeof d.UNSAFE_componentWillUpdate != 'function' &&
              typeof d.componentWillUpdate != 'function') ||
            (typeof d.componentWillUpdate == 'function' &&
              d.componentWillUpdate(r, P, O),
            typeof d.UNSAFE_componentWillUpdate == 'function' &&
              d.UNSAFE_componentWillUpdate(r, P, O)),
          typeof d.componentDidUpdate == 'function' && (n.flags |= 4),
          typeof d.getSnapshotBeforeUpdate == 'function' && (n.flags |= 1024))
        : (typeof d.componentDidUpdate != 'function' ||
            (y === e.memoizedProps && H === e.memoizedState) ||
            (n.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != 'function' ||
            (y === e.memoizedProps && H === e.memoizedState) ||
            (n.flags |= 1024),
          (n.memoizedProps = r),
          (n.memoizedState = P)),
        (d.props = r),
        (d.state = P),
        (d.context = O),
        (r = Y))
      : (typeof d.componentDidUpdate != 'function' ||
          (y === e.memoizedProps && H === e.memoizedState) ||
          (n.flags |= 4),
        typeof d.getSnapshotBeforeUpdate != 'function' ||
          (y === e.memoizedProps && H === e.memoizedState) ||
          (n.flags |= 1024),
        (r = !1));
    }
    return (
      (d = r),
      tr(e, n),
      (r = (n.flags & 128) !== 0),
      d || r ?
        ((d = n.stateNode),
        (i =
          r && typeof i.getDerivedStateFromError != 'function' ?
            null
          : d.render()),
        (n.flags |= 1),
        e !== null && r ?
          ((n.child = Ra(n, e.child, null, c)), (n.child = Ra(n, null, i, c)))
        : rt(e, n, i, c),
        (n.memoizedState = d.state),
        (e = n.child))
      : (e = Mn(e, n, c)),
      e
    );
  }
  function ep(e, n, i, r) {
    return (Aa(), (n.flags |= 256), rt(e, n, i, r), n.child);
  }
  var qu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Yu(e) {
    return { baseLanes: e, cachePool: qh() };
  }
  function Xu(e, n, i) {
    return ((e = e !== null ? e.childLanes & ~i : 0), n && (e |= zt), e);
  }
  function tp(e, n, i) {
    var r = n.pendingProps,
      c = !1,
      d = (n.flags & 128) !== 0,
      y;
    if (
      ((y = d) ||
        (y =
          e !== null && e.memoizedState === null ? !1 : (qe.current & 2) !== 0),
      y && ((c = !0), (n.flags &= -129)),
      (y = (n.flags & 32) !== 0),
      (n.flags &= -33),
      e === null)
    ) {
      if (Te) {
        if (
          (c ? In(n) : Jn(),
          (e = Le) ?
            ((e = ug(e, Yt)),
            (e = e !== null && e.data !== '&' ? e : null),
            e !== null &&
              ((n.memoizedState = {
                dehydrated: e,
                treeContext: Yn !== null ? { id: on, overflow: un } : null,
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (i = Lh(e)),
              (i.return = n),
              (n.child = i),
              (st = n),
              (Le = null)))
          : (e = null),
          e === null)
        )
          throw Qn(n);
        return (Mc(e) ? (n.lanes = 32) : (n.lanes = 536870912), null);
      }
      var T = r.children;
      return (
        (r = r.fallback),
        c ?
          (Jn(),
          (c = n.mode),
          (T = nr({ mode: 'hidden', children: T }, c)),
          (r = Ca(r, c, i, null)),
          (T.return = n),
          (r.return = n),
          (T.sibling = r),
          (n.child = T),
          (r = n.child),
          (r.memoizedState = Yu(i)),
          (r.childLanes = Xu(e, y, i)),
          (n.memoizedState = qu),
          xs(null, r))
        : (In(n), Qu(n, T))
      );
    }
    var O = e.memoizedState;
    if (O !== null && ((T = O.dehydrated), T !== null)) {
      if (d)
        n.flags & 256 ? (In(n), (n.flags &= -257), (n = Ku(e, n, i)))
        : n.memoizedState !== null ?
          (Jn(), (n.child = e.child), (n.flags |= 128), (n = null))
        : (Jn(),
          (T = r.fallback),
          (c = n.mode),
          (r = nr({ mode: 'visible', children: r.children }, c)),
          (T = Ca(T, c, i, null)),
          (T.flags |= 2),
          (r.return = n),
          (T.return = n),
          (r.sibling = T),
          (n.child = r),
          Ra(n, e.child, null, i),
          (r = n.child),
          (r.memoizedState = Yu(i)),
          (r.childLanes = Xu(e, y, i)),
          (n.memoizedState = qu),
          (n = xs(null, r)));
      else if ((In(n), Mc(T))) {
        if (((y = T.nextSibling && T.nextSibling.dataset), y)) var B = y.dgst;
        ((y = B),
          (r = Error(l(419))),
          (r.stack = ''),
          (r.digest = y),
          us({ value: r, source: null, stack: null }),
          (n = Ku(e, n, i)));
      } else if (
        (Fe || fi(e, n, i, !1), (y = (i & e.childLanes) !== 0), Fe || y)
      ) {
        if (
          ((y = Re),
          y !== null && ((r = Gd(y, i)), r !== 0 && r !== O.retryLane))
        )
          throw ((O.retryLane = r), Ea(e, r), At(y, e, r), Gu);
        (Ac(T) || fr(), (n = Ku(e, n, i)));
      } else
        Ac(T) ?
          ((n.flags |= 192), (n.child = e.child), (n = null))
        : ((e = O.treeContext),
          (Le = Qt(T.nextSibling)),
          (st = n),
          (Te = !0),
          (Xn = null),
          (Yt = !1),
          e !== null && Bh(n, e),
          (n = Qu(n, r.children)),
          (n.flags |= 4096));
      return n;
    }
    return c ?
        (Jn(),
        (T = r.fallback),
        (c = n.mode),
        (O = e.child),
        (B = O.sibling),
        (r = xn(O, { mode: 'hidden', children: r.children })),
        (r.subtreeFlags = O.subtreeFlags & 65011712),
        B !== null ? (T = xn(B, T)) : ((T = Ca(T, c, i, null)), (T.flags |= 2)),
        (T.return = n),
        (r.return = n),
        (r.sibling = T),
        (n.child = r),
        xs(null, r),
        (r = n.child),
        (T = e.child.memoizedState),
        T === null ?
          (T = Yu(i))
        : ((c = T.cachePool),
          c !== null ?
            ((O = Qe._currentValue),
            (c = c.parent !== O ? { parent: O, pool: O } : c))
          : (c = qh()),
          (T = { baseLanes: T.baseLanes | i, cachePool: c })),
        (r.memoizedState = T),
        (r.childLanes = Xu(e, y, i)),
        (n.memoizedState = qu),
        xs(e.child, r))
      : (In(n),
        (i = e.child),
        (e = i.sibling),
        (i = xn(i, { mode: 'visible', children: r.children })),
        (i.return = n),
        (i.sibling = null),
        e !== null &&
          ((y = n.deletions),
          y === null ? ((n.deletions = [e]), (n.flags |= 16)) : y.push(e)),
        (n.child = i),
        (n.memoizedState = null),
        i);
  }
  function Qu(e, n) {
    return (
      (n = nr({ mode: 'visible', children: n }, e.mode)),
      (n.return = e),
      (e.child = n)
    );
  }
  function nr(e, n) {
    return ((e = Nt(22, e, null, n)), (e.lanes = 0), e);
  }
  function Ku(e, n, i) {
    return (
      Ra(n, e.child, null, i),
      (e = Qu(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function np(e, n, i) {
    e.lanes |= n;
    var r = e.alternate;
    (r !== null && (r.lanes |= n), ou(e.return, n, i));
  }
  function Fu(e, n, i, r, c, d) {
    var y = e.memoizedState;
    y === null ?
      (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: i,
        tailMode: c,
        treeForkCount: d,
      })
    : ((y.isBackwards = n),
      (y.rendering = null),
      (y.renderingStartTime = 0),
      (y.last = r),
      (y.tail = i),
      (y.tailMode = c),
      (y.treeForkCount = d));
  }
  function ap(e, n, i) {
    var r = n.pendingProps,
      c = r.revealOrder,
      d = r.tail;
    r = r.children;
    var y = qe.current,
      T = (y & 2) !== 0;
    if (
      (T ? ((y = (y & 1) | 2), (n.flags |= 128)) : (y &= 1),
      te(qe, y),
      rt(e, n, r, i),
      (r = Te ? os : 0),
      !T && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && np(e, i, n);
        else if (e.tag === 19) np(e, i, n);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (c) {
      case 'forwards':
        for (i = n.child, c = null; i !== null; )
          ((e = i.alternate),
            e !== null && Yl(e) === null && (c = i),
            (i = i.sibling));
        ((i = c),
          i === null ?
            ((c = n.child), (n.child = null))
          : ((c = i.sibling), (i.sibling = null)),
          Fu(n, !1, c, i, d, r));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (i = null, c = n.child, n.child = null; c !== null; ) {
          if (((e = c.alternate), e !== null && Yl(e) === null)) {
            n.child = c;
            break;
          }
          ((e = c.sibling), (c.sibling = i), (i = c), (c = e));
        }
        Fu(n, !0, i, null, d, r);
        break;
      case 'together':
        Fu(n, !1, null, null, void 0, r);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Mn(e, n, i) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      (ta |= n.lanes),
      (i & n.childLanes) === 0)
    )
      if (e !== null) {
        if ((fi(e, n, i, !1), (i & n.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && n.child !== e.child) throw Error(l(153));
    if (n.child !== null) {
      for (
        e = n.child, i = xn(e, e.pendingProps), n.child = i, i.return = n;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (i = i.sibling = xn(e, e.pendingProps)),
          (i.return = n));
      i.sibling = null;
    }
    return n.child;
  }
  function Zu(e, n) {
    return (e.lanes & n) !== 0 ?
        !0
      : ((e = e.dependencies), !!(e !== null && Vl(e)));
  }
  function SS(e, n, i) {
    switch (n.tag) {
      case 3:
        (mt(n, n.stateNode.containerInfo),
          Kn(n, Qe, e.memoizedState.cache),
          Aa());
        break;
      case 27:
      case 5:
        Ki(n);
        break;
      case 4:
        mt(n, n.stateNode.containerInfo);
        break;
      case 10:
        Kn(n, n.type, n.memoizedProps.value);
        break;
      case 31:
        if (n.memoizedState !== null) return ((n.flags |= 128), Su(n), null);
        break;
      case 13:
        var r = n.memoizedState;
        if (r !== null)
          return (
            r.dehydrated !== null ? (In(n), (n.flags |= 128), null)
            : (i & n.child.childLanes) !== 0 ? tp(e, n, i)
            : (In(n), (e = Mn(e, n, i)), e !== null ? e.sibling : null)
          );
        In(n);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (
          ((r = (i & n.childLanes) !== 0),
          r || (fi(e, n, i, !1), (r = (i & n.childLanes) !== 0)),
          c)
        ) {
          if (r) return ap(e, n, i);
          n.flags |= 128;
        }
        if (
          ((c = n.memoizedState),
          c !== null &&
            ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          te(qe, qe.current),
          r)
        )
          break;
        return null;
      case 22:
        return ((n.lanes = 0), Zm(e, n, i, n.pendingProps));
      case 24:
        Kn(n, Qe, e.memoizedState.cache);
    }
    return Mn(e, n, i);
  }
  function ip(e, n, i) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps) Fe = !0;
      else {
        if (!Zu(e, i) && (n.flags & 128) === 0) return ((Fe = !1), SS(e, n, i));
        Fe = (e.flags & 131072) !== 0;
      }
    else ((Fe = !1), Te && (n.flags & 1048576) !== 0 && Vh(n, os, n.index));
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        e: {
          var r = n.pendingProps;
          if (((e = Oa(n.elementType)), (n.type = e), typeof e == 'function'))
            eu(e) ?
              ((r = La(e, r)), (n.tag = 1), (n = Wm(null, n, e, r, i)))
            : ((n.tag = 0), (n = ku(null, n, e, r, i)));
          else {
            if (e != null) {
              var c = e.$$typeof;
              if (c === U) {
                ((n.tag = 11), (n = Qm(null, n, e, r, i)));
                break e;
              } else if (c === X) {
                ((n.tag = 14), (n = Km(null, n, e, r, i)));
                break e;
              }
            }
            throw ((n = oe(e) || e), Error(l(306, n, '')));
          }
        }
        return n;
      case 0:
        return ku(e, n, n.type, n.pendingProps, i);
      case 1:
        return ((r = n.type), (c = La(r, n.pendingProps)), Wm(e, n, r, c, i));
      case 3:
        e: {
          if ((mt(n, n.stateNode.containerInfo), e === null))
            throw Error(l(387));
          r = n.pendingProps;
          var d = n.memoizedState;
          ((c = d.element), pu(e, n), gs(n, r, null, i));
          var y = n.memoizedState;
          if (
            ((r = y.cache),
            Kn(n, Qe, r),
            r !== d.cache && uu(n, [Qe], i, !0),
            ps(),
            (r = y.element),
            d.isDehydrated)
          )
            if (
              ((d = { element: r, isDehydrated: !1, cache: y.cache }),
              (n.updateQueue.baseState = d),
              (n.memoizedState = d),
              n.flags & 256)
            ) {
              n = ep(e, n, r, i);
              break e;
            } else if (r !== c) {
              ((c = Gt(Error(l(424)), n)), us(c), (n = ep(e, n, r, i)));
              break e;
            } else
              for (
                e = n.stateNode.containerInfo,
                  e.nodeType === 9 ?
                    (e = e.body)
                  : (e = e.nodeName === 'HTML' ? e.ownerDocument.body : e),
                  Le = Qt(e.firstChild),
                  st = n,
                  Te = !0,
                  Xn = null,
                  Yt = !0,
                  i = Zh(n, null, r, i),
                  n.child = i;
                i;
              )
                ((i.flags = (i.flags & -3) | 4096), (i = i.sibling));
          else {
            if ((Aa(), r === c)) {
              n = Mn(e, n, i);
              break e;
            }
            rt(e, n, r, i);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          tr(e, n),
          e === null ?
            (i = pg(n.type, null, n.pendingProps, null)) ?
              (n.memoizedState = i)
            : Te ||
              ((i = n.type),
              (e = n.pendingProps),
              (r = yr(ve.current).createElement(i)),
              (r[it] = n),
              (r[St] = e),
              ot(r, i, e),
              et(r),
              (n.stateNode = r))
          : (n.memoizedState = pg(
              n.type,
              e.memoizedProps,
              n.pendingProps,
              e.memoizedState,
            )),
          null
        );
      case 27:
        return (
          Ki(n),
          e === null &&
            Te &&
            ((r = n.stateNode = dg(n.type, n.pendingProps, ve.current)),
            (st = n),
            (Yt = !0),
            (c = Le),
            la(n.type) ? ((wc = c), (Le = Qt(r.firstChild))) : (Le = c)),
          rt(e, n, n.pendingProps.children, i),
          tr(e, n),
          e === null && (n.flags |= 4194304),
          n.child
        );
      case 5:
        return (
          e === null &&
            Te &&
            ((c = r = Le) &&
              ((r = $S(r, n.type, n.pendingProps, Yt)),
              r !== null ?
                ((n.stateNode = r),
                (st = n),
                (Le = Qt(r.firstChild)),
                (Yt = !1),
                (c = !0))
              : (c = !1)),
            c || Qn(n)),
          Ki(n),
          (c = n.type),
          (d = n.pendingProps),
          (y = e !== null ? e.memoizedProps : null),
          (r = d.children),
          _c(c, d) ? (r = null) : y !== null && _c(c, y) && (n.flags |= 32),
          n.memoizedState !== null &&
            ((c = Tu(e, n, fS, null, null, i)), (Vs._currentValue = c)),
          tr(e, n),
          rt(e, n, r, i),
          n.child
        );
      case 6:
        return (
          e === null &&
            Te &&
            ((e = i = Le) &&
              ((i = IS(i, n.pendingProps, Yt)),
              i !== null ?
                ((n.stateNode = i), (st = n), (Le = null), (e = !0))
              : (e = !1)),
            e || Qn(n)),
          null
        );
      case 13:
        return tp(e, n, i);
      case 4:
        return (
          mt(n, n.stateNode.containerInfo),
          (r = n.pendingProps),
          e === null ? (n.child = Ra(n, null, r, i)) : rt(e, n, r, i),
          n.child
        );
      case 11:
        return Qm(e, n, n.type, n.pendingProps, i);
      case 7:
        return (rt(e, n, n.pendingProps, i), n.child);
      case 8:
        return (rt(e, n, n.pendingProps.children, i), n.child);
      case 12:
        return (rt(e, n, n.pendingProps.children, i), n.child);
      case 10:
        return (
          (r = n.pendingProps),
          Kn(n, n.type, r.value),
          rt(e, n, r.children, i),
          n.child
        );
      case 9:
        return (
          (c = n.type._context),
          (r = n.pendingProps.children),
          wa(n),
          (c = lt(c)),
          (r = r(c)),
          (n.flags |= 1),
          rt(e, n, r, i),
          n.child
        );
      case 14:
        return Km(e, n, n.type, n.pendingProps, i);
      case 15:
        return Fm(e, n, n.type, n.pendingProps, i);
      case 19:
        return ap(e, n, i);
      case 31:
        return bS(e, n, i);
      case 22:
        return Zm(e, n, i, n.pendingProps);
      case 24:
        return (
          wa(n),
          (r = lt(Qe)),
          e === null ?
            ((c = du()),
            c === null &&
              ((c = Re),
              (d = cu()),
              (c.pooledCache = d),
              d.refCount++,
              d !== null && (c.pooledCacheLanes |= i),
              (c = d)),
            (n.memoizedState = { parent: r, cache: c }),
            mu(n),
            Kn(n, Qe, c))
          : ((e.lanes & i) !== 0 && (pu(e, n), gs(n, null, null, i), ps()),
            (c = e.memoizedState),
            (d = n.memoizedState),
            c.parent !== r ?
              ((c = { parent: r, cache: r }),
              (n.memoizedState = c),
              n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c),
              Kn(n, Qe, r))
            : ((r = d.cache),
              Kn(n, Qe, r),
              r !== c.cache && uu(n, [Qe], i, !0))),
          rt(e, n, n.pendingProps.children, i),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(l(156, n.tag));
  }
  function wn(e) {
    e.flags |= 4;
  }
  function $u(e, n, i, r, c) {
    if (((n = (e.mode & 32) !== 0) && (n = !1), n)) {
      if (((e.flags |= 16777216), (c & 335544128) === c))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Np()) e.flags |= 8192;
        else throw ((Na = Pl), hu);
    } else e.flags &= -16777217;
  }
  function sp(e, n) {
    if (n.type !== 'stylesheet' || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Sg(n)))
      if (Np()) e.flags |= 8192;
      else throw ((Na = Pl), hu);
  }
  function ar(e, n) {
    (n !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((n = e.tag !== 22 ? Ud() : 536870912), (e.lanes |= n), (_i |= n)));
  }
  function Ts(e, n) {
    if (!Te)
      switch (e.tailMode) {
        case 'hidden':
          n = e.tail;
          for (var i = null; n !== null; )
            (n.alternate !== null && (i = n), (n = n.sibling));
          i === null ? (e.tail = null) : (i.sibling = null);
          break;
        case 'collapsed':
          i = e.tail;
          for (var r = null; i !== null; )
            (i.alternate !== null && (r = i), (i = i.sibling));
          r === null ?
            n || e.tail === null ?
              (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
      }
  }
  function ze(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      i = 0,
      r = 0;
    if (n)
      for (var c = e.child; c !== null; )
        ((i |= c.lanes | c.childLanes),
          (r |= c.subtreeFlags & 65011712),
          (r |= c.flags & 65011712),
          (c.return = e),
          (c = c.sibling));
    else
      for (c = e.child; c !== null; )
        ((i |= c.lanes | c.childLanes),
          (r |= c.subtreeFlags),
          (r |= c.flags),
          (c.return = e),
          (c = c.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = i), n);
  }
  function xS(e, n, i) {
    var r = n.pendingProps;
    switch ((iu(n), n.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (ze(n), null);
      case 1:
        return (ze(n), null);
      case 3:
        return (
          (i = n.stateNode),
          (r = null),
          e !== null && (r = e.memoizedState.cache),
          n.memoizedState.cache !== r && (n.flags |= 2048),
          En(Qe),
          ke(),
          i.pendingContext &&
            ((i.context = i.pendingContext), (i.pendingContext = null)),
          (e === null || e.child === null) &&
            (ci(n) ?
              wn(n)
            : e === null ||
              (e.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
              ((n.flags |= 1024), lu())),
          ze(n),
          null
        );
      case 26:
        var c = n.type,
          d = n.memoizedState;
        return (
          e === null ?
            (wn(n),
            d !== null ? (ze(n), sp(n, d)) : (ze(n), $u(n, c, null, r, i)))
          : d ?
            d !== e.memoizedState ?
              (wn(n), ze(n), sp(n, d))
            : (ze(n), (n.flags &= -16777217))
          : ((e = e.memoizedProps), e !== r && wn(n), ze(n), $u(n, c, e, r, i)),
          null
        );
      case 27:
        if (
          (ml(n),
          (i = ve.current),
          (c = n.type),
          e !== null && n.stateNode != null)
        )
          e.memoizedProps !== r && wn(n);
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(l(166));
            return (ze(n), null);
          }
          ((e = ie.current),
            ci(n) ? Uh(n) : ((e = dg(c, r, i)), (n.stateNode = e), wn(n)));
        }
        return (ze(n), null);
      case 5:
        if ((ml(n), (c = n.type), e !== null && n.stateNode != null))
          e.memoizedProps !== r && wn(n);
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(l(166));
            return (ze(n), null);
          }
          if (((d = ie.current), ci(n))) Uh(n);
          else {
            var y = yr(ve.current);
            switch (d) {
              case 1:
                d = y.createElementNS('http://www.w3.org/2000/svg', c);
                break;
              case 2:
                d = y.createElementNS('http://www.w3.org/1998/Math/MathML', c);
                break;
              default:
                switch (c) {
                  case 'svg':
                    d = y.createElementNS('http://www.w3.org/2000/svg', c);
                    break;
                  case 'math':
                    d = y.createElementNS(
                      'http://www.w3.org/1998/Math/MathML',
                      c,
                    );
                    break;
                  case 'script':
                    ((d = y.createElement('div')),
                      (d.innerHTML = '<script><\/script>'),
                      (d = d.removeChild(d.firstChild)));
                    break;
                  case 'select':
                    ((d =
                      typeof r.is == 'string' ?
                        y.createElement('select', { is: r.is })
                      : y.createElement('select')),
                      r.multiple ?
                        (d.multiple = !0)
                      : r.size && (d.size = r.size));
                    break;
                  default:
                    d =
                      typeof r.is == 'string' ?
                        y.createElement(c, { is: r.is })
                      : y.createElement(c);
                }
            }
            ((d[it] = n), (d[St] = r));
            e: for (y = n.child; y !== null; ) {
              if (y.tag === 5 || y.tag === 6) d.appendChild(y.stateNode);
              else if (y.tag !== 4 && y.tag !== 27 && y.child !== null) {
                ((y.child.return = y), (y = y.child));
                continue;
              }
              if (y === n) break e;
              for (; y.sibling === null; ) {
                if (y.return === null || y.return === n) break e;
                y = y.return;
              }
              ((y.sibling.return = y.return), (y = y.sibling));
            }
            n.stateNode = d;
            e: switch ((ot(d, c, r), c)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
            r && wn(n);
          }
        }
        return (
          ze(n),
          $u(n, n.type, e === null ? null : e.memoizedProps, n.pendingProps, i),
          null
        );
      case 6:
        if (e && n.stateNode != null) e.memoizedProps !== r && wn(n);
        else {
          if (typeof r != 'string' && n.stateNode === null) throw Error(l(166));
          if (((e = ve.current), ci(n))) {
            if (
              ((e = n.stateNode),
              (i = n.memoizedProps),
              (r = null),
              (c = st),
              c !== null)
            )
              switch (c.tag) {
                case 27:
                case 5:
                  r = c.memoizedProps;
              }
            ((e[it] = n),
              (e = !!(
                e.nodeValue === i ||
                (r !== null && r.suppressHydrationWarning === !0) ||
                tg(e.nodeValue, i)
              )),
              e || Qn(n, !0));
          } else
            ((e = yr(e).createTextNode(r)), (e[it] = n), (n.stateNode = e));
        }
        return (ze(n), null);
      case 31:
        if (((i = n.memoizedState), e === null || e.memoizedState !== null)) {
          if (((r = ci(n)), i !== null)) {
            if (e === null) {
              if (!r) throw Error(l(318));
              if (
                ((e = n.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(l(557));
              e[it] = n;
            } else
              (Aa(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4));
            (ze(n), (e = !1));
          } else
            ((i = lu()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = i),
              (e = !0));
          if (!e) return n.flags & 256 ? (jt(n), n) : (jt(n), null);
          if ((n.flags & 128) !== 0) throw Error(l(558));
        }
        return (ze(n), null);
      case 13:
        if (
          ((r = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((c = ci(n)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(l(318));
              if (
                ((c = n.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(l(317));
              c[it] = n;
            } else
              (Aa(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4));
            (ze(n), (c = !1));
          } else
            ((c = lu()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = c),
              (c = !0));
          if (!c) return n.flags & 256 ? (jt(n), n) : (jt(n), null);
        }
        return (
          jt(n),
          (n.flags & 128) !== 0 ?
            ((n.lanes = i), n)
          : ((i = r !== null),
            (e = e !== null && e.memoizedState !== null),
            i &&
              ((r = n.child),
              (c = null),
              r.alternate !== null &&
                r.alternate.memoizedState !== null &&
                r.alternate.memoizedState.cachePool !== null &&
                (c = r.alternate.memoizedState.cachePool.pool),
              (d = null),
              r.memoizedState !== null &&
                r.memoizedState.cachePool !== null &&
                (d = r.memoizedState.cachePool.pool),
              d !== c && (r.flags |= 2048)),
            i !== e && i && (n.child.flags |= 8192),
            ar(n, n.updateQueue),
            ze(n),
            null)
        );
      case 4:
        return (ke(), e === null && yc(n.stateNode.containerInfo), ze(n), null);
      case 10:
        return (En(n.type), ze(n), null);
      case 19:
        if ((F(qe), (r = n.memoizedState), r === null)) return (ze(n), null);
        if (((c = (n.flags & 128) !== 0), (d = r.rendering), d === null))
          if (c) Ts(r, !1);
          else {
            if (Pe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = n.child; e !== null; ) {
                if (((d = Yl(e)), d !== null)) {
                  for (
                    n.flags |= 128,
                      Ts(r, !1),
                      e = d.updateQueue,
                      n.updateQueue = e,
                      ar(n, e),
                      n.subtreeFlags = 0,
                      e = i,
                      i = n.child;
                    i !== null;
                  )
                    (jh(i, e), (i = i.sibling));
                  return (
                    te(qe, (qe.current & 1) | 2),
                    Te && Tn(n, r.treeForkCount),
                    n.child
                  );
                }
                e = e.sibling;
              }
            r.tail !== null &&
              Mt() > or &&
              ((n.flags |= 128), (c = !0), Ts(r, !1), (n.lanes = 4194304));
          }
        else {
          if (!c)
            if (((e = Yl(d)), e !== null)) {
              if (
                ((n.flags |= 128),
                (c = !0),
                (e = e.updateQueue),
                (n.updateQueue = e),
                ar(n, e),
                Ts(r, !0),
                r.tail === null &&
                  r.tailMode === 'hidden' &&
                  !d.alternate &&
                  !Te)
              )
                return (ze(n), null);
            } else
              2 * Mt() - r.renderingStartTime > or &&
                i !== 536870912 &&
                ((n.flags |= 128), (c = !0), Ts(r, !1), (n.lanes = 4194304));
          r.isBackwards ?
            ((d.sibling = n.child), (n.child = d))
          : ((e = r.last),
            e !== null ? (e.sibling = d) : (n.child = d),
            (r.last = d));
        }
        return r.tail !== null ?
            ((e = r.tail),
            (r.rendering = e),
            (r.tail = e.sibling),
            (r.renderingStartTime = Mt()),
            (e.sibling = null),
            (i = qe.current),
            te(qe, c ? (i & 1) | 2 : i & 1),
            Te && Tn(n, r.treeForkCount),
            e)
          : (ze(n), null);
      case 22:
      case 23:
        return (
          jt(n),
          bu(),
          (r = n.memoizedState !== null),
          e !== null ?
            (e.memoizedState !== null) !== r && (n.flags |= 8192)
          : r && (n.flags |= 8192),
          r ?
            (i & 536870912) !== 0 &&
            (n.flags & 128) === 0 &&
            (ze(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : ze(n),
          (i = n.updateQueue),
          i !== null && ar(n, i.retryQueue),
          (i = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (i = e.memoizedState.cachePool.pool),
          (r = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (r = n.memoizedState.cachePool.pool),
          r !== i && (n.flags |= 2048),
          e !== null && F(Da),
          null
        );
      case 24:
        return (
          (i = null),
          e !== null && (i = e.memoizedState.cache),
          n.memoizedState.cache !== i && (n.flags |= 2048),
          En(Qe),
          ze(n),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(l(156, n.tag));
  }
  function TS(e, n) {
    switch ((iu(n), n.tag)) {
      case 1:
        return (
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          En(Qe),
          ke(),
          (e = n.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ?
            ((n.flags = (e & -65537) | 128), n)
          : null
        );
      case 26:
      case 27:
      case 5:
        return (ml(n), null);
      case 31:
        if (n.memoizedState !== null) {
          if ((jt(n), n.alternate === null)) throw Error(l(340));
          Aa();
        }
        return (
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 13:
        if (
          (jt(n), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(l(340));
          Aa();
        }
        return (
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 19:
        return (F(qe), null);
      case 4:
        return (ke(), null);
      case 10:
        return (En(n.type), null);
      case 22:
      case 23:
        return (
          jt(n),
          bu(),
          e !== null && F(Da),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 24:
        return (En(Qe), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function lp(e, n) {
    switch ((iu(n), n.tag)) {
      case 3:
        (En(Qe), ke());
        break;
      case 26:
      case 27:
      case 5:
        ml(n);
        break;
      case 4:
        ke();
        break;
      case 31:
        n.memoizedState !== null && jt(n);
        break;
      case 13:
        jt(n);
        break;
      case 19:
        F(qe);
        break;
      case 10:
        En(n.type);
        break;
      case 22:
      case 23:
        (jt(n), bu(), e !== null && F(Da));
        break;
      case 24:
        En(Qe);
    }
  }
  function _s(e, n) {
    try {
      var i = n.updateQueue,
        r = i !== null ? i.lastEffect : null;
      if (r !== null) {
        var c = r.next;
        i = c;
        do {
          if ((i.tag & e) === e) {
            r = void 0;
            var d = i.create,
              y = i.inst;
            ((r = d()), (y.destroy = r));
          }
          i = i.next;
        } while (i !== c);
      }
    } catch (T) {
      we(n, n.return, T);
    }
  }
  function Wn(e, n, i) {
    try {
      var r = n.updateQueue,
        c = r !== null ? r.lastEffect : null;
      if (c !== null) {
        var d = c.next;
        r = d;
        do {
          if ((r.tag & e) === e) {
            var y = r.inst,
              T = y.destroy;
            if (T !== void 0) {
              ((y.destroy = void 0), (c = n));
              var O = i,
                B = T;
              try {
                B();
              } catch (Y) {
                we(c, O, Y);
              }
            }
          }
          r = r.next;
        } while (r !== d);
      }
    } catch (Y) {
      we(n, n.return, Y);
    }
  }
  function rp(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var i = e.stateNode;
      try {
        Ih(n, i);
      } catch (r) {
        we(e, e.return, r);
      }
    }
  }
  function op(e, n, i) {
    ((i.props = La(e.type, e.memoizedProps)), (i.state = e.memoizedState));
    try {
      i.componentWillUnmount();
    } catch (r) {
      we(e, n, r);
    }
  }
  function Es(e, n) {
    try {
      var i = e.ref;
      if (i !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var r = e.stateNode;
            break;
          case 30:
            r = e.stateNode;
            break;
          default:
            r = e.stateNode;
        }
        typeof i == 'function' ? (e.refCleanup = i(r)) : (i.current = r);
      }
    } catch (c) {
      we(e, n, c);
    }
  }
  function cn(e, n) {
    var i = e.ref,
      r = e.refCleanup;
    if (i !== null)
      if (typeof r == 'function')
        try {
          r();
        } catch (c) {
          we(e, n, c);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof i == 'function')
        try {
          i(null);
        } catch (c) {
          we(e, n, c);
        }
      else i.current = null;
  }
  function up(e) {
    var n = e.type,
      i = e.memoizedProps,
      r = e.stateNode;
    try {
      e: switch (n) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          i.autoFocus && r.focus();
          break e;
        case 'img':
          i.src ? (r.src = i.src) : i.srcSet && (r.srcset = i.srcSet);
      }
    } catch (c) {
      we(e, e.return, c);
    }
  }
  function Iu(e, n, i) {
    try {
      var r = e.stateNode;
      (YS(r, e.type, i, n), (r[St] = n));
    } catch (c) {
      we(e, e.return, c);
    }
  }
  function cp(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && la(e.type)) ||
      e.tag === 4
    );
  }
  function Ju(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || cp(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && la(e.type)) ||
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
  function Wu(e, n, i) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        n ?
          (i.nodeType === 9 ? i.body
          : i.nodeName === 'HTML' ? i.ownerDocument.body
          : i
          ).insertBefore(e, n)
        : ((n =
            i.nodeType === 9 ? i.body
            : i.nodeName === 'HTML' ? i.ownerDocument.body
            : i),
          n.appendChild(e),
          (i = i._reactRootContainer),
          i != null || n.onclick !== null || (n.onclick = bn)));
    else if (
      r !== 4 &&
      (r === 27 && la(e.type) && ((i = e.stateNode), (n = null)),
      (e = e.child),
      e !== null)
    )
      for (Wu(e, n, i), e = e.sibling; e !== null; )
        (Wu(e, n, i), (e = e.sibling));
  }
  function ir(e, n, i) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), n ? i.insertBefore(e, n) : i.appendChild(e));
    else if (
      r !== 4 &&
      (r === 27 && la(e.type) && (i = e.stateNode), (e = e.child), e !== null)
    )
      for (ir(e, n, i), e = e.sibling; e !== null; )
        (ir(e, n, i), (e = e.sibling));
  }
  function fp(e) {
    var n = e.stateNode,
      i = e.memoizedProps;
    try {
      for (var r = e.type, c = n.attributes; c.length; )
        n.removeAttributeNode(c[0]);
      (ot(n, r, i), (n[it] = e), (n[St] = i));
    } catch (d) {
      we(e, e.return, d);
    }
  }
  var Dn = !1,
    Ze = !1,
    ec = !1,
    dp = typeof WeakSet == 'function' ? WeakSet : Set,
    tt = null;
  function _S(e, n) {
    if (((e = e.containerInfo), (xc = Cr), (e = Eh(e)), Ko(e))) {
      if ('selectionStart' in e)
        var i = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          i = ((i = e.ownerDocument) && i.defaultView) || window;
          var r = i.getSelection && i.getSelection();
          if (r && r.rangeCount !== 0) {
            i = r.anchorNode;
            var c = r.anchorOffset,
              d = r.focusNode;
            r = r.focusOffset;
            try {
              (i.nodeType, d.nodeType);
            } catch {
              i = null;
              break e;
            }
            var y = 0,
              T = -1,
              O = -1,
              B = 0,
              Y = 0,
              K = e,
              H = null;
            t: for (;;) {
              for (
                var P;
                K !== i || (c !== 0 && K.nodeType !== 3) || (T = y + c),
                  K !== d || (r !== 0 && K.nodeType !== 3) || (O = y + r),
                  K.nodeType === 3 && (y += K.nodeValue.length),
                  (P = K.firstChild) !== null;
              )
                ((H = K), (K = P));
              for (;;) {
                if (K === e) break t;
                if (
                  (H === i && ++B === c && (T = y),
                  H === d && ++Y === r && (O = y),
                  (P = K.nextSibling) !== null)
                )
                  break;
                ((K = H), (H = K.parentNode));
              }
              K = P;
            }
            i = T === -1 || O === -1 ? null : { start: T, end: O };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (
      Tc = { focusedElem: e, selectionRange: i }, Cr = !1, tt = n;
      tt !== null;
    )
      if (
        ((n = tt), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = n), (tt = e));
      else
        for (; tt !== null; ) {
          switch (((n = tt), (d = n.alternate), (e = n.flags), n.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = n.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (i = 0; i < e.length; i++)
                  ((c = e[i]), (c.ref.impl = c.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && d !== null) {
                ((e = void 0),
                  (i = n),
                  (c = d.memoizedProps),
                  (d = d.memoizedState),
                  (r = i.stateNode));
                try {
                  var ne = La(i.type, c);
                  ((e = r.getSnapshotBeforeUpdate(ne, d)),
                    (r.__reactInternalSnapshotBeforeUpdate = e));
                } catch (ue) {
                  we(i, i.return, ue);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = n.stateNode.containerInfo), (i = e.nodeType), i === 9)
                )
                  Cc(e);
                else if (i === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Cc(e);
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
              if ((e & 1024) !== 0) throw Error(l(163));
          }
          if (((e = n.sibling), e !== null)) {
            ((e.return = n.return), (tt = e));
            break;
          }
          tt = n.return;
        }
  }
  function hp(e, n, i) {
    var r = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        (Nn(e, i), r & 4 && _s(5, i));
        break;
      case 1:
        if ((Nn(e, i), r & 4))
          if (((e = i.stateNode), n === null))
            try {
              e.componentDidMount();
            } catch (y) {
              we(i, i.return, y);
            }
          else {
            var c = La(i.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              e.componentDidUpdate(c, n, e.__reactInternalSnapshotBeforeUpdate);
            } catch (y) {
              we(i, i.return, y);
            }
          }
        (r & 64 && rp(i), r & 512 && Es(i, i.return));
        break;
      case 3:
        if ((Nn(e, i), r & 64 && ((e = i.updateQueue), e !== null))) {
          if (((n = null), i.child !== null))
            switch (i.child.tag) {
              case 27:
              case 5:
                n = i.child.stateNode;
                break;
              case 1:
                n = i.child.stateNode;
            }
          try {
            Ih(e, n);
          } catch (y) {
            we(i, i.return, y);
          }
        }
        break;
      case 27:
        n === null && r & 4 && fp(i);
      case 26:
      case 5:
        (Nn(e, i), n === null && r & 4 && up(i), r & 512 && Es(i, i.return));
        break;
      case 12:
        Nn(e, i);
        break;
      case 31:
        (Nn(e, i), r & 4 && gp(e, i));
        break;
      case 13:
        (Nn(e, i),
          r & 4 && vp(e, i),
          r & 64 &&
            ((e = i.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((i = RS.bind(null, i)), JS(e, i)))));
        break;
      case 22:
        if (((r = i.memoizedState !== null || Dn), !r)) {
          ((n = (n !== null && n.memoizedState !== null) || Ze), (c = Dn));
          var d = Ze;
          ((Dn = r),
            (Ze = n) && !d ? Rn(e, i, (i.subtreeFlags & 8772) !== 0) : Nn(e, i),
            (Dn = c),
            (Ze = d));
        }
        break;
      case 30:
        break;
      default:
        Nn(e, i);
    }
  }
  function mp(e) {
    var n = e.alternate;
    (n !== null && ((e.alternate = null), mp(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((n = e.stateNode), n !== null && Oo(n)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Ve = null,
    Tt = !1;
  function On(e, n, i) {
    for (i = i.child; i !== null; ) (pp(e, n, i), (i = i.sibling));
  }
  function pp(e, n, i) {
    if (wt && typeof wt.onCommitFiberUnmount == 'function')
      try {
        wt.onCommitFiberUnmount(Fi, i);
      } catch {}
    switch (i.tag) {
      case 26:
        (Ze || cn(i, n),
          On(e, n, i),
          i.memoizedState ?
            i.memoizedState.count--
          : i.stateNode && ((i = i.stateNode), i.parentNode.removeChild(i)));
        break;
      case 27:
        Ze || cn(i, n);
        var r = Ve,
          c = Tt;
        (la(i.type) && ((Ve = i.stateNode), (Tt = !1)),
          On(e, n, i),
          js(i.stateNode),
          (Ve = r),
          (Tt = c));
        break;
      case 5:
        Ze || cn(i, n);
      case 6:
        if (
          ((r = Ve),
          (c = Tt),
          (Ve = null),
          On(e, n, i),
          (Ve = r),
          (Tt = c),
          Ve !== null)
        )
          if (Tt)
            try {
              (Ve.nodeType === 9 ? Ve.body
              : Ve.nodeName === 'HTML' ? Ve.ownerDocument.body
              : Ve
              ).removeChild(i.stateNode);
            } catch (d) {
              we(i, n, d);
            }
          else
            try {
              Ve.removeChild(i.stateNode);
            } catch (d) {
              we(i, n, d);
            }
        break;
      case 18:
        Ve !== null &&
          (Tt ?
            ((e = Ve),
            rg(
              e.nodeType === 9 ? e.body
              : e.nodeName === 'HTML' ? e.ownerDocument.body
              : e,
              i.stateNode,
            ),
            Ni(e))
          : rg(Ve, i.stateNode));
        break;
      case 4:
        ((r = Ve),
          (c = Tt),
          (Ve = i.stateNode.containerInfo),
          (Tt = !0),
          On(e, n, i),
          (Ve = r),
          (Tt = c));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Wn(2, i, n), Ze || Wn(4, i, n), On(e, n, i));
        break;
      case 1:
        (Ze ||
          (cn(i, n),
          (r = i.stateNode),
          typeof r.componentWillUnmount == 'function' && op(i, n, r)),
          On(e, n, i));
        break;
      case 21:
        On(e, n, i);
        break;
      case 22:
        ((Ze = (r = Ze) || i.memoizedState !== null), On(e, n, i), (Ze = r));
        break;
      default:
        On(e, n, i);
    }
  }
  function gp(e, n) {
    if (
      n.memoizedState === null &&
      ((e = n.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Ni(e);
      } catch (i) {
        we(n, n.return, i);
      }
    }
  }
  function vp(e, n) {
    if (
      n.memoizedState === null &&
      ((e = n.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ni(e);
      } catch (i) {
        we(n, n.return, i);
      }
  }
  function ES(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var n = e.stateNode;
        return (n === null && (n = e.stateNode = new dp()), n);
      case 22:
        return (
          (e = e.stateNode),
          (n = e._retryCache),
          n === null && (n = e._retryCache = new dp()),
          n
        );
      default:
        throw Error(l(435, e.tag));
    }
  }
  function sr(e, n) {
    var i = ES(e);
    n.forEach(function (r) {
      if (!i.has(r)) {
        i.add(r);
        var c = jS.bind(null, e, r);
        r.then(c, c);
      }
    });
  }
  function _t(e, n) {
    var i = n.deletions;
    if (i !== null)
      for (var r = 0; r < i.length; r++) {
        var c = i[r],
          d = e,
          y = n,
          T = y;
        e: for (; T !== null; ) {
          switch (T.tag) {
            case 27:
              if (la(T.type)) {
                ((Ve = T.stateNode), (Tt = !1));
                break e;
              }
              break;
            case 5:
              ((Ve = T.stateNode), (Tt = !1));
              break e;
            case 3:
            case 4:
              ((Ve = T.stateNode.containerInfo), (Tt = !0));
              break e;
          }
          T = T.return;
        }
        if (Ve === null) throw Error(l(160));
        (pp(d, y, c),
          (Ve = null),
          (Tt = !1),
          (d = c.alternate),
          d !== null && (d.return = null),
          (c.return = null));
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; ) (yp(n, e), (n = n.sibling));
  }
  var Wt = null;
  function yp(e, n) {
    var i = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (_t(n, e),
          Et(e),
          r & 4 && (Wn(3, e, e.return), _s(3, e), Wn(5, e, e.return)));
        break;
      case 1:
        (_t(n, e),
          Et(e),
          r & 512 && (Ze || i === null || cn(i, i.return)),
          r & 64 &&
            Dn &&
            ((e = e.updateQueue),
            e !== null &&
              ((r = e.callbacks),
              r !== null &&
                ((i = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = i === null ? r : i.concat(r))))));
        break;
      case 26:
        var c = Wt;
        if (
          (_t(n, e),
          Et(e),
          r & 512 && (Ze || i === null || cn(i, i.return)),
          r & 4)
        ) {
          var d = i !== null ? i.memoizedState : null;
          if (((r = e.memoizedState), i === null))
            if (r === null)
              if (e.stateNode === null) {
                e: {
                  ((r = e.type),
                    (i = e.memoizedProps),
                    (c = c.ownerDocument || c));
                  t: switch (r) {
                    case 'title':
                      ((d = c.getElementsByTagName('title')[0]),
                        (!d ||
                          d[Ii] ||
                          d[it] ||
                          d.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          d.hasAttribute('itemprop')) &&
                          ((d = c.createElement(r)),
                          c.head.insertBefore(
                            d,
                            c.querySelector('head > title'),
                          )),
                        ot(d, r, i),
                        (d[it] = e),
                        et(d),
                        (r = d));
                      break e;
                    case 'link':
                      var y = yg('link', 'href', c).get(r + (i.href || ''));
                      if (y) {
                        for (var T = 0; T < y.length; T++)
                          if (
                            ((d = y[T]),
                            d.getAttribute('href') ===
                              (i.href == null || i.href === '' ?
                                null
                              : i.href) &&
                              d.getAttribute('rel') ===
                                (i.rel == null ? null : i.rel) &&
                              d.getAttribute('title') ===
                                (i.title == null ? null : i.title) &&
                              d.getAttribute('crossorigin') ===
                                (i.crossOrigin == null ? null : i.crossOrigin))
                          ) {
                            y.splice(T, 1);
                            break t;
                          }
                      }
                      ((d = c.createElement(r)),
                        ot(d, r, i),
                        c.head.appendChild(d));
                      break;
                    case 'meta':
                      if (
                        (y = yg('meta', 'content', c).get(
                          r + (i.content || ''),
                        ))
                      ) {
                        for (T = 0; T < y.length; T++)
                          if (
                            ((d = y[T]),
                            d.getAttribute('content') ===
                              (i.content == null ? null : '' + i.content) &&
                              d.getAttribute('name') ===
                                (i.name == null ? null : i.name) &&
                              d.getAttribute('property') ===
                                (i.property == null ? null : i.property) &&
                              d.getAttribute('http-equiv') ===
                                (i.httpEquiv == null ? null : i.httpEquiv) &&
                              d.getAttribute('charset') ===
                                (i.charSet == null ? null : i.charSet))
                          ) {
                            y.splice(T, 1);
                            break t;
                          }
                      }
                      ((d = c.createElement(r)),
                        ot(d, r, i),
                        c.head.appendChild(d));
                      break;
                    default:
                      throw Error(l(468, r));
                  }
                  ((d[it] = e), et(d), (r = d));
                }
                e.stateNode = r;
              } else bg(c, e.type, e.stateNode);
            else e.stateNode = vg(c, r, e.memoizedProps);
          else
            d !== r ?
              (d === null ?
                i.stateNode !== null &&
                ((i = i.stateNode), i.parentNode.removeChild(i))
              : d.count--,
              r === null ?
                bg(c, e.type, e.stateNode)
              : vg(c, r, e.memoizedProps))
            : r === null &&
              e.stateNode !== null &&
              Iu(e, e.memoizedProps, i.memoizedProps);
        }
        break;
      case 27:
        (_t(n, e),
          Et(e),
          r & 512 && (Ze || i === null || cn(i, i.return)),
          i !== null && r & 4 && Iu(e, e.memoizedProps, i.memoizedProps));
        break;
      case 5:
        if (
          (_t(n, e),
          Et(e),
          r & 512 && (Ze || i === null || cn(i, i.return)),
          e.flags & 32)
        ) {
          c = e.stateNode;
          try {
            ei(c, '');
          } catch (ne) {
            we(e, e.return, ne);
          }
        }
        (r & 4 &&
          e.stateNode != null &&
          ((c = e.memoizedProps), Iu(e, c, i !== null ? i.memoizedProps : c)),
          r & 1024 && (ec = !0));
        break;
      case 6:
        if ((_t(n, e), Et(e), r & 4)) {
          if (e.stateNode === null) throw Error(l(162));
          ((r = e.memoizedProps), (i = e.stateNode));
          try {
            i.nodeValue = r;
          } catch (ne) {
            we(e, e.return, ne);
          }
        }
        break;
      case 3:
        if (
          ((xr = null),
          (c = Wt),
          (Wt = br(n.containerInfo)),
          _t(n, e),
          (Wt = c),
          Et(e),
          r & 4 && i !== null && i.memoizedState.isDehydrated)
        )
          try {
            Ni(n.containerInfo);
          } catch (ne) {
            we(e, e.return, ne);
          }
        ec && ((ec = !1), bp(e));
        break;
      case 4:
        ((r = Wt),
          (Wt = br(e.stateNode.containerInfo)),
          _t(n, e),
          Et(e),
          (Wt = r));
        break;
      case 12:
        (_t(n, e), Et(e));
        break;
      case 31:
        (_t(n, e),
          Et(e),
          r & 4 &&
            ((r = e.updateQueue),
            r !== null && ((e.updateQueue = null), sr(e, r))));
        break;
      case 13:
        (_t(n, e),
          Et(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (i !== null && i.memoizedState !== null) &&
            (rr = Mt()),
          r & 4 &&
            ((r = e.updateQueue),
            r !== null && ((e.updateQueue = null), sr(e, r))));
        break;
      case 22:
        c = e.memoizedState !== null;
        var O = i !== null && i.memoizedState !== null,
          B = Dn,
          Y = Ze;
        if (
          ((Dn = B || c),
          (Ze = Y || O),
          _t(n, e),
          (Ze = Y),
          (Dn = B),
          Et(e),
          r & 8192)
        )
          e: for (
            n = e.stateNode,
              n._visibility = c ? n._visibility & -2 : n._visibility | 1,
              c && (i === null || O || Dn || Ze || za(e)),
              i = null,
              n = e;
            ;
          ) {
            if (n.tag === 5 || n.tag === 26) {
              if (i === null) {
                O = i = n;
                try {
                  if (((d = O.stateNode), c))
                    ((y = d.style),
                      typeof y.setProperty == 'function' ?
                        y.setProperty('display', 'none', 'important')
                      : (y.display = 'none'));
                  else {
                    T = O.stateNode;
                    var K = O.memoizedProps.style,
                      H =
                        K != null && K.hasOwnProperty('display') ?
                          K.display
                        : null;
                    T.style.display =
                      H == null || typeof H == 'boolean' ? '' : ('' + H).trim();
                  }
                } catch (ne) {
                  we(O, O.return, ne);
                }
              }
            } else if (n.tag === 6) {
              if (i === null) {
                O = n;
                try {
                  O.stateNode.nodeValue = c ? '' : O.memoizedProps;
                } catch (ne) {
                  we(O, O.return, ne);
                }
              }
            } else if (n.tag === 18) {
              if (i === null) {
                O = n;
                try {
                  var P = O.stateNode;
                  c ? og(P, !0) : og(O.stateNode, !1);
                } catch (ne) {
                  we(O, O.return, ne);
                }
              }
            } else if (
              ((n.tag !== 22 && n.tag !== 23) ||
                n.memoizedState === null ||
                n === e) &&
              n.child !== null
            ) {
              ((n.child.return = n), (n = n.child));
              continue;
            }
            if (n === e) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) break e;
              (i === n && (i = null), (n = n.return));
            }
            (i === n && (i = null),
              (n.sibling.return = n.return),
              (n = n.sibling));
          }
        r & 4 &&
          ((r = e.updateQueue),
          r !== null &&
            ((i = r.retryQueue),
            i !== null && ((r.retryQueue = null), sr(e, i))));
        break;
      case 19:
        (_t(n, e),
          Et(e),
          r & 4 &&
            ((r = e.updateQueue),
            r !== null && ((e.updateQueue = null), sr(e, r))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (_t(n, e), Et(e));
    }
  }
  function Et(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var i, r = e.return; r !== null; ) {
          if (cp(r)) {
            i = r;
            break;
          }
          r = r.return;
        }
        if (i == null) throw Error(l(160));
        switch (i.tag) {
          case 27:
            var c = i.stateNode,
              d = Ju(e);
            ir(e, d, c);
            break;
          case 5:
            var y = i.stateNode;
            i.flags & 32 && (ei(y, ''), (i.flags &= -33));
            var T = Ju(e);
            ir(e, T, y);
            break;
          case 3:
          case 4:
            var O = i.stateNode.containerInfo,
              B = Ju(e);
            Wu(e, B, O);
            break;
          default:
            throw Error(l(161));
        }
      } catch (Y) {
        we(e, e.return, Y);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function bp(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        (bp(n),
          n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function Nn(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) (hp(e, n.alternate, n), (n = n.sibling));
  }
  function za(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Wn(4, n, n.return), za(n));
          break;
        case 1:
          cn(n, n.return);
          var i = n.stateNode;
          (typeof i.componentWillUnmount == 'function' && op(n, n.return, i),
            za(n));
          break;
        case 27:
          js(n.stateNode);
        case 26:
        case 5:
          (cn(n, n.return), za(n));
          break;
        case 22:
          n.memoizedState === null && za(n);
          break;
        case 30:
          za(n);
          break;
        default:
          za(n);
      }
      e = e.sibling;
    }
  }
  function Rn(e, n, i) {
    for (i = i && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var r = n.alternate,
        c = e,
        d = n,
        y = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          (Rn(c, d, i), _s(4, d));
          break;
        case 1:
          if (
            (Rn(c, d, i),
            (r = d),
            (c = r.stateNode),
            typeof c.componentDidMount == 'function')
          )
            try {
              c.componentDidMount();
            } catch (B) {
              we(r, r.return, B);
            }
          if (((r = d), (c = r.updateQueue), c !== null)) {
            var T = r.stateNode;
            try {
              var O = c.shared.hiddenCallbacks;
              if (O !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < O.length; c++)
                  $h(O[c], T);
            } catch (B) {
              we(r, r.return, B);
            }
          }
          (i && y & 64 && rp(d), Es(d, d.return));
          break;
        case 27:
          fp(d);
        case 26:
        case 5:
          (Rn(c, d, i), i && r === null && y & 4 && up(d), Es(d, d.return));
          break;
        case 12:
          Rn(c, d, i);
          break;
        case 31:
          (Rn(c, d, i), i && y & 4 && gp(c, d));
          break;
        case 13:
          (Rn(c, d, i), i && y & 4 && vp(c, d));
          break;
        case 22:
          (d.memoizedState === null && Rn(c, d, i), Es(d, d.return));
          break;
        case 30:
          break;
        default:
          Rn(c, d, i);
      }
      n = n.sibling;
    }
  }
  function tc(e, n) {
    var i = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (i = e.memoizedState.cachePool.pool),
      (e = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (e = n.memoizedState.cachePool.pool),
      e !== i && (e != null && e.refCount++, i != null && cs(i)));
  }
  function nc(e, n) {
    ((e = null),
      n.alternate !== null && (e = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== e && (n.refCount++, e != null && cs(e)));
  }
  function en(e, n, i, r) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) (Sp(e, n, i, r), (n = n.sibling));
  }
  function Sp(e, n, i, r) {
    var c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (en(e, n, i, r), c & 2048 && _s(9, n));
        break;
      case 1:
        en(e, n, i, r);
        break;
      case 3:
        (en(e, n, i, r),
          c & 2048 &&
            ((e = null),
            n.alternate !== null && (e = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== e && (n.refCount++, e != null && cs(e))));
        break;
      case 12:
        if (c & 2048) {
          (en(e, n, i, r), (e = n.stateNode));
          try {
            var d = n.memoizedProps,
              y = d.id,
              T = d.onPostCommit;
            typeof T == 'function' &&
              T(
                y,
                n.alternate === null ? 'mount' : 'update',
                e.passiveEffectDuration,
                -0,
              );
          } catch (O) {
            we(n, n.return, O);
          }
        } else en(e, n, i, r);
        break;
      case 31:
        en(e, n, i, r);
        break;
      case 13:
        en(e, n, i, r);
        break;
      case 23:
        break;
      case 22:
        ((d = n.stateNode),
          (y = n.alternate),
          n.memoizedState !== null ?
            d._visibility & 2 ?
              en(e, n, i, r)
            : Cs(e, n)
          : d._visibility & 2 ? en(e, n, i, r)
          : ((d._visibility |= 2),
            Si(e, n, i, r, (n.subtreeFlags & 10256) !== 0 || !1)),
          c & 2048 && tc(y, n));
        break;
      case 24:
        (en(e, n, i, r), c & 2048 && nc(n.alternate, n));
        break;
      default:
        en(e, n, i, r);
    }
  }
  function Si(e, n, i, r, c) {
    for (
      c = c && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child;
      n !== null;
    ) {
      var d = e,
        y = n,
        T = i,
        O = r,
        B = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          (Si(d, y, T, O, c), _s(8, y));
          break;
        case 23:
          break;
        case 22:
          var Y = y.stateNode;
          (y.memoizedState !== null ?
            Y._visibility & 2 ?
              Si(d, y, T, O, c)
            : Cs(d, y)
          : ((Y._visibility |= 2), Si(d, y, T, O, c)),
            c && B & 2048 && tc(y.alternate, y));
          break;
        case 24:
          (Si(d, y, T, O, c), c && B & 2048 && nc(y.alternate, y));
          break;
        default:
          Si(d, y, T, O, c);
      }
      n = n.sibling;
    }
  }
  function Cs(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var i = e,
          r = n,
          c = r.flags;
        switch (r.tag) {
          case 22:
            (Cs(i, r), c & 2048 && tc(r.alternate, r));
            break;
          case 24:
            (Cs(i, r), c & 2048 && nc(r.alternate, r));
            break;
          default:
            Cs(i, r);
        }
        n = n.sibling;
      }
  }
  var As = 8192;
  function xi(e, n, i) {
    if (e.subtreeFlags & As)
      for (e = e.child; e !== null; ) (xp(e, n, i), (e = e.sibling));
  }
  function xp(e, n, i) {
    switch (e.tag) {
      case 26:
        (xi(e, n, i),
          e.flags & As &&
            e.memoizedState !== null &&
            cx(i, Wt, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        xi(e, n, i);
        break;
      case 3:
      case 4:
        var r = Wt;
        ((Wt = br(e.stateNode.containerInfo)), xi(e, n, i), (Wt = r));
        break;
      case 22:
        e.memoizedState === null &&
          ((r = e.alternate),
          r !== null && r.memoizedState !== null ?
            ((r = As), (As = 16777216), xi(e, n, i), (As = r))
          : xi(e, n, i));
        break;
      default:
        xi(e, n, i);
    }
  }
  function Tp(e) {
    var n = e.alternate;
    if (n !== null && ((e = n.child), e !== null)) {
      n.child = null;
      do ((n = e.sibling), (e.sibling = null), (e = n));
      while (e !== null);
    }
  }
  function Ms(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var r = n[i];
          ((tt = r), Ep(r, e));
        }
      Tp(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (_p(e), (e = e.sibling));
  }
  function _p(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Ms(e), e.flags & 2048 && Wn(9, e, e.return));
        break;
      case 3:
        Ms(e);
        break;
      case 12:
        Ms(e);
        break;
      case 22:
        var n = e.stateNode;
        (
          e.memoizedState !== null &&
          n._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
        ) ?
          ((n._visibility &= -3), lr(e))
        : Ms(e);
        break;
      default:
        Ms(e);
    }
  }
  function lr(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var r = n[i];
          ((tt = r), Ep(r, e));
        }
      Tp(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((n = e), n.tag)) {
        case 0:
        case 11:
        case 15:
          (Wn(8, n, n.return), lr(n));
          break;
        case 22:
          ((i = n.stateNode),
            i._visibility & 2 && ((i._visibility &= -3), lr(n)));
          break;
        default:
          lr(n);
      }
      e = e.sibling;
    }
  }
  function Ep(e, n) {
    for (; tt !== null; ) {
      var i = tt;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Wn(8, i, n);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var r = i.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          cs(i.memoizedState.cache);
      }
      if (((r = i.child), r !== null)) ((r.return = i), (tt = r));
      else
        e: for (i = e; tt !== null; ) {
          r = tt;
          var c = r.sibling,
            d = r.return;
          if ((mp(r), r === i)) {
            tt = null;
            break e;
          }
          if (c !== null) {
            ((c.return = d), (tt = c));
            break e;
          }
          tt = d;
        }
    }
  }
  var CS = {
      getCacheForType: function (e) {
        var n = lt(Qe),
          i = n.data.get(e);
        return (i === void 0 && ((i = e()), n.data.set(e, i)), i);
      },
      cacheSignal: function () {
        return lt(Qe).controller.signal;
      },
    },
    AS = typeof WeakMap == 'function' ? WeakMap : Map,
    Ce = 0,
    Re = null,
    ye = null,
    Se = 0,
    Me = 0,
    Lt = null,
    ea = !1,
    Ti = !1,
    ac = !1,
    jn = 0,
    Pe = 0,
    ta = 0,
    Va = 0,
    ic = 0,
    zt = 0,
    _i = 0,
    ws = null,
    Ct = null,
    sc = !1,
    rr = 0,
    Cp = 0,
    or = 1 / 0,
    ur = null,
    na = null,
    Ie = 0,
    aa = null,
    Ei = null,
    Ln = 0,
    lc = 0,
    rc = null,
    Ap = null,
    Ds = 0,
    oc = null;
  function Vt() {
    return (
      (Ce & 2) !== 0 && Se !== 0 ? Se & -Se
      : G.T !== null ? mc()
      : kd()
    );
  }
  function Mp() {
    if (zt === 0)
      if ((Se & 536870912) === 0 || Te) {
        var e = vl;
        ((vl <<= 1), (vl & 3932160) === 0 && (vl = 262144), (zt = e));
      } else zt = 536870912;
    return ((e = Rt.current), e !== null && (e.flags |= 32), zt);
  }
  function At(e, n, i) {
    (((e === Re && (Me === 2 || Me === 9)) || e.cancelPendingCommit !== null) &&
      (Ci(e, 0), ia(e, Se, zt, !1)),
      $i(e, i),
      ((Ce & 2) === 0 || e !== Re) &&
        (e === Re &&
          ((Ce & 2) === 0 && (Va |= i), Pe === 4 && ia(e, Se, zt, !1)),
        fn(e)));
  }
  function wp(e, n, i) {
    if ((Ce & 6) !== 0) throw Error(l(327));
    var r = (!i && (n & 127) === 0 && (n & e.expiredLanes) === 0) || Zi(e, n),
      c = r ? DS(e, n) : cc(e, n, !0),
      d = r;
    do {
      if (c === 0) {
        Ti && !r && ia(e, n, 0, !1);
        break;
      } else {
        if (((i = e.current.alternate), d && !MS(i))) {
          ((c = cc(e, n, !1)), (d = !1));
          continue;
        }
        if (c === 2) {
          if (((d = n), e.errorRecoveryDisabledLanes & d)) var y = 0;
          else
            ((y = e.pendingLanes & -536870913),
              (y =
                y !== 0 ? y
                : y & 536870912 ? 536870912
                : 0));
          if (y !== 0) {
            n = y;
            e: {
              var T = e;
              c = ws;
              var O = T.current.memoizedState.isDehydrated;
              if ((O && (Ci(T, y).flags |= 256), (y = cc(T, y, !1)), y !== 2)) {
                if (ac && !O) {
                  ((T.errorRecoveryDisabledLanes |= d), (Va |= d), (c = 4));
                  break e;
                }
                ((d = Ct),
                  (Ct = c),
                  d !== null &&
                    (Ct === null ? (Ct = d) : Ct.push.apply(Ct, d)));
              }
              c = y;
            }
            if (((d = !1), c !== 2)) continue;
          }
        }
        if (c === 1) {
          (Ci(e, 0), ia(e, n, 0, !0));
          break;
        }
        e: {
          switch (((r = e), (d = c), d)) {
            case 0:
            case 1:
              throw Error(l(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              ia(r, n, zt, !ea);
              break e;
            case 2:
              Ct = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(l(329));
          }
          if ((n & 62914560) === n && ((c = rr + 300 - Mt()), 10 < c)) {
            if ((ia(r, n, zt, !ea), bl(r, 0, !0) !== 0)) break e;
            ((Ln = n),
              (r.timeoutHandle = sg(
                Dp.bind(
                  null,
                  r,
                  i,
                  Ct,
                  ur,
                  sc,
                  n,
                  zt,
                  Va,
                  _i,
                  ea,
                  d,
                  'Throttled',
                  -0,
                  0,
                ),
                c,
              )));
            break e;
          }
          Dp(r, i, Ct, ur, sc, n, zt, Va, _i, ea, d, null, -0, 0);
        }
      }
      break;
    } while (!0);
    fn(e);
  }
  function Dp(e, n, i, r, c, d, y, T, O, B, Y, K, H, P) {
    if (
      ((e.timeoutHandle = -1),
      (K = n.subtreeFlags),
      K & 8192 || (K & 16785408) === 16785408)
    ) {
      ((K = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: bn,
      }),
        xp(n, d, K));
      var ne =
        (d & 62914560) === d ? rr - Mt()
        : (d & 4194048) === d ? Cp - Mt()
        : 0;
      if (((ne = fx(K, ne)), ne !== null)) {
        ((Ln = d),
          (e.cancelPendingCommit = ne(
            Bp.bind(null, e, n, d, i, r, c, y, T, O, Y, K, null, H, P),
          )),
          ia(e, d, y, !B));
        return;
      }
    }
    Bp(e, n, d, i, r, c, y, T, O);
  }
  function MS(e) {
    for (var n = e; ; ) {
      var i = n.tag;
      if (
        (i === 0 || i === 11 || i === 15) &&
        n.flags & 16384 &&
        ((i = n.updateQueue), i !== null && ((i = i.stores), i !== null))
      )
        for (var r = 0; r < i.length; r++) {
          var c = i[r],
            d = c.getSnapshot;
          c = c.value;
          try {
            if (!Ot(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (((i = n.child), n.subtreeFlags & 16384 && i !== null))
        ((i.return = n), (n = i));
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        ((n.sibling.return = n.return), (n = n.sibling));
      }
    }
    return !0;
  }
  function ia(e, n, i, r) {
    ((n &= ~ic),
      (n &= ~Va),
      (e.suspendedLanes |= n),
      (e.pingedLanes &= ~n),
      r && (e.warmLanes |= n),
      (r = e.expirationTimes));
    for (var c = n; 0 < c; ) {
      var d = 31 - Dt(c),
        y = 1 << d;
      ((r[d] = -1), (c &= ~y));
    }
    i !== 0 && Hd(e, i, n);
  }
  function cr() {
    return (Ce & 6) === 0 ? (Os(0), !1) : !0;
  }
  function uc() {
    if (ye !== null) {
      if (Me === 0) var e = ye.return;
      else ((e = ye), (_n = Ma = null), Cu(e), (pi = null), (ds = 0), (e = ye));
      for (; e !== null; ) (lp(e.alternate, e), (e = e.return));
      ye = null;
    }
  }
  function Ci(e, n) {
    var i = e.timeoutHandle;
    (i !== -1 && ((e.timeoutHandle = -1), KS(i)),
      (i = e.cancelPendingCommit),
      i !== null && ((e.cancelPendingCommit = null), i()),
      (Ln = 0),
      uc(),
      (Re = e),
      (ye = i = xn(e.current, null)),
      (Se = n),
      (Me = 0),
      (Lt = null),
      (ea = !1),
      (Ti = Zi(e, n)),
      (ac = !1),
      (_i = zt = ic = Va = ta = Pe = 0),
      (Ct = ws = null),
      (sc = !1),
      (n & 8) !== 0 && (n |= n & 32));
    var r = e.entangledLanes;
    if (r !== 0)
      for (e = e.entanglements, r &= n; 0 < r; ) {
        var c = 31 - Dt(r),
          d = 1 << c;
        ((n |= e[c]), (r &= ~d));
      }
    return ((jn = n), Nl(), i);
  }
  function Op(e, n) {
    ((pe = null),
      (G.H = Ss),
      n === mi || n === Hl ? ((n = Qh()), (Me = 3))
      : n === hu ? ((n = Qh()), (Me = 4))
      : (Me =
          n === Gu ? 8
          : n !== null && typeof n == 'object' && typeof n.then == 'function' ?
            6
          : 1),
      (Lt = n),
      ye === null && ((Pe = 1), Wl(e, Gt(n, e.current))));
  }
  function Np() {
    var e = Rt.current;
    return (
      e === null ? !0
      : (Se & 4194048) === Se ? Xt === null
      : (Se & 62914560) === Se || (Se & 536870912) !== 0 ? e === Xt
      : !1
    );
  }
  function Rp() {
    var e = G.H;
    return ((G.H = Ss), e === null ? Ss : e);
  }
  function jp() {
    var e = G.A;
    return ((G.A = CS), e);
  }
  function fr() {
    ((Pe = 4),
      ea || ((Se & 4194048) !== Se && Rt.current !== null) || (Ti = !0),
      ((ta & 134217727) === 0 && (Va & 134217727) === 0) ||
        Re === null ||
        ia(Re, Se, zt, !1));
  }
  function cc(e, n, i) {
    var r = Ce;
    Ce |= 2;
    var c = Rp(),
      d = jp();
    ((Re !== e || Se !== n) && ((ur = null), Ci(e, n)), (n = !1));
    var y = Pe;
    e: do
      try {
        if (Me !== 0 && ye !== null) {
          var T = ye,
            O = Lt;
          switch (Me) {
            case 8:
              (uc(), (y = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Rt.current === null && (n = !0);
              var B = Me;
              if (((Me = 0), (Lt = null), Ai(e, T, O, B), i && Ti)) {
                y = 0;
                break e;
              }
              break;
            default:
              ((B = Me), (Me = 0), (Lt = null), Ai(e, T, O, B));
          }
        }
        (wS(), (y = Pe));
        break;
      } catch (Y) {
        Op(e, Y);
      }
    while (!0);
    return (
      n && e.shellSuspendCounter++,
      (_n = Ma = null),
      (Ce = r),
      (G.H = c),
      (G.A = d),
      ye === null && ((Re = null), (Se = 0), Nl()),
      y
    );
  }
  function wS() {
    for (; ye !== null; ) Lp(ye);
  }
  function DS(e, n) {
    var i = Ce;
    Ce |= 2;
    var r = Rp(),
      c = jp();
    Re !== e || Se !== n ?
      ((ur = null), (or = Mt() + 500), Ci(e, n))
    : (Ti = Zi(e, n));
    e: do
      try {
        if (Me !== 0 && ye !== null) {
          n = ye;
          var d = Lt;
          t: switch (Me) {
            case 1:
              ((Me = 0), (Lt = null), Ai(e, n, d, 1));
              break;
            case 2:
            case 9:
              if (Yh(d)) {
                ((Me = 0), (Lt = null), zp(n));
                break;
              }
              ((n = function () {
                ((Me !== 2 && Me !== 9) || Re !== e || (Me = 7), fn(e));
              }),
                d.then(n, n));
              break e;
            case 3:
              Me = 7;
              break e;
            case 4:
              Me = 5;
              break e;
            case 7:
              Yh(d) ?
                ((Me = 0), (Lt = null), zp(n))
              : ((Me = 0), (Lt = null), Ai(e, n, d, 7));
              break;
            case 5:
              var y = null;
              switch (ye.tag) {
                case 26:
                  y = ye.memoizedState;
                case 5:
                case 27:
                  var T = ye;
                  if (y ? Sg(y) : T.stateNode.complete) {
                    ((Me = 0), (Lt = null));
                    var O = T.sibling;
                    if (O !== null) ye = O;
                    else {
                      var B = T.return;
                      B !== null ? ((ye = B), dr(B)) : (ye = null);
                    }
                    break t;
                  }
              }
              ((Me = 0), (Lt = null), Ai(e, n, d, 5));
              break;
            case 6:
              ((Me = 0), (Lt = null), Ai(e, n, d, 6));
              break;
            case 8:
              (uc(), (Pe = 6));
              break e;
            default:
              throw Error(l(462));
          }
        }
        OS();
        break;
      } catch (Y) {
        Op(e, Y);
      }
    while (!0);
    return (
      (_n = Ma = null),
      (G.H = r),
      (G.A = c),
      (Ce = i),
      ye !== null ? 0 : ((Re = null), (Se = 0), Nl(), Pe)
    );
  }
  function OS() {
    for (; ye !== null && !W1(); ) Lp(ye);
  }
  function Lp(e) {
    var n = ip(e.alternate, e, jn);
    ((e.memoizedProps = e.pendingProps), n === null ? dr(e) : (ye = n));
  }
  function zp(e) {
    var n = e,
      i = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Jm(i, n, n.pendingProps, n.type, void 0, Se);
        break;
      case 11:
        n = Jm(i, n, n.pendingProps, n.type.render, n.ref, Se);
        break;
      case 5:
        Cu(n);
      default:
        (lp(i, n), (n = ye = jh(n, jn)), (n = ip(i, n, jn)));
    }
    ((e.memoizedProps = e.pendingProps), n === null ? dr(e) : (ye = n));
  }
  function Ai(e, n, i, r) {
    ((_n = Ma = null), Cu(n), (pi = null), (ds = 0));
    var c = n.return;
    try {
      if (yS(e, c, n, i, Se)) {
        ((Pe = 1), Wl(e, Gt(i, e.current)), (ye = null));
        return;
      }
    } catch (d) {
      if (c !== null) throw ((ye = c), d);
      ((Pe = 1), Wl(e, Gt(i, e.current)), (ye = null));
      return;
    }
    n.flags & 32768 ?
      (Te || r === 1 ? (e = !0)
      : Ti || (Se & 536870912) !== 0 ? (e = !1)
      : ((ea = e = !0),
        (r === 2 || r === 9 || r === 3 || r === 6) &&
          ((r = Rt.current), r !== null && r.tag === 13 && (r.flags |= 16384))),
      Vp(n, e))
    : dr(n);
  }
  function dr(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        Vp(n, ea);
        return;
      }
      e = n.return;
      var i = xS(n.alternate, n, jn);
      if (i !== null) {
        ye = i;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        ye = n;
        return;
      }
      ye = n = e;
    } while (n !== null);
    Pe === 0 && (Pe = 5);
  }
  function Vp(e, n) {
    do {
      var i = TS(e.alternate, e);
      if (i !== null) {
        ((i.flags &= 32767), (ye = i));
        return;
      }
      if (
        ((i = e.return),
        i !== null &&
          ((i.flags |= 32768), (i.subtreeFlags = 0), (i.deletions = null)),
        !n && ((e = e.sibling), e !== null))
      ) {
        ye = e;
        return;
      }
      ye = e = i;
    } while (e !== null);
    ((Pe = 6), (ye = null));
  }
  function Bp(e, n, i, r, c, d, y, T, O) {
    e.cancelPendingCommit = null;
    do hr();
    while (Ie !== 0);
    if ((Ce & 6) !== 0) throw Error(l(327));
    if (n !== null) {
      if (n === e.current) throw Error(l(177));
      if (
        ((d = n.lanes | n.childLanes),
        (d |= Jo),
        ub(e, i, d, y, T, O),
        e === Re && ((ye = Re = null), (Se = 0)),
        (Ei = n),
        (aa = e),
        (Ln = i),
        (lc = d),
        (rc = c),
        (Ap = r),
        (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ?
          ((e.callbackNode = null),
          (e.callbackPriority = 0),
          LS(pl, function () {
            return (kp(), null);
          }))
        : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (r = (n.flags & 13878) !== 0),
        (n.subtreeFlags & 13878) !== 0 || r)
      ) {
        ((r = G.T), (G.T = null), (c = k.p), (k.p = 2), (y = Ce), (Ce |= 4));
        try {
          _S(e, n, i);
        } finally {
          ((Ce = y), (k.p = c), (G.T = r));
        }
      }
      ((Ie = 1), Up(), Hp(), Pp());
    }
  }
  function Up() {
    if (Ie === 1) {
      Ie = 0;
      var e = aa,
        n = Ei,
        i = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || i) {
        ((i = G.T), (G.T = null));
        var r = k.p;
        k.p = 2;
        var c = Ce;
        Ce |= 4;
        try {
          yp(n, e);
          var d = Tc,
            y = Eh(e.containerInfo),
            T = d.focusedElem,
            O = d.selectionRange;
          if (
            y !== T &&
            T &&
            T.ownerDocument &&
            _h(T.ownerDocument.documentElement, T)
          ) {
            if (O !== null && Ko(T)) {
              var B = O.start,
                Y = O.end;
              if ((Y === void 0 && (Y = B), 'selectionStart' in T))
                ((T.selectionStart = B),
                  (T.selectionEnd = Math.min(Y, T.value.length)));
              else {
                var K = T.ownerDocument || document,
                  H = (K && K.defaultView) || window;
                if (H.getSelection) {
                  var P = H.getSelection(),
                    ne = T.textContent.length,
                    ue = Math.min(O.start, ne),
                    Ne = O.end === void 0 ? ue : Math.min(O.end, ne);
                  !P.extend && ue > Ne && ((y = Ne), (Ne = ue), (ue = y));
                  var j = Th(T, ue),
                    R = Th(T, Ne);
                  if (
                    j &&
                    R &&
                    (P.rangeCount !== 1 ||
                      P.anchorNode !== j.node ||
                      P.anchorOffset !== j.offset ||
                      P.focusNode !== R.node ||
                      P.focusOffset !== R.offset)
                  ) {
                    var z = K.createRange();
                    (z.setStart(j.node, j.offset),
                      P.removeAllRanges(),
                      ue > Ne ?
                        (P.addRange(z), P.extend(R.node, R.offset))
                      : (z.setEnd(R.node, R.offset), P.addRange(z)));
                  }
                }
              }
            }
            for (K = [], P = T; (P = P.parentNode); )
              P.nodeType === 1 &&
                K.push({ element: P, left: P.scrollLeft, top: P.scrollTop });
            for (
              typeof T.focus == 'function' && T.focus(), T = 0;
              T < K.length;
              T++
            ) {
              var Q = K[T];
              ((Q.element.scrollLeft = Q.left), (Q.element.scrollTop = Q.top));
            }
          }
          ((Cr = !!xc), (Tc = xc = null));
        } finally {
          ((Ce = c), (k.p = r), (G.T = i));
        }
      }
      ((e.current = n), (Ie = 2));
    }
  }
  function Hp() {
    if (Ie === 2) {
      Ie = 0;
      var e = aa,
        n = Ei,
        i = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || i) {
        ((i = G.T), (G.T = null));
        var r = k.p;
        k.p = 2;
        var c = Ce;
        Ce |= 4;
        try {
          hp(e, n.alternate, n);
        } finally {
          ((Ce = c), (k.p = r), (G.T = i));
        }
      }
      Ie = 3;
    }
  }
  function Pp() {
    if (Ie === 4 || Ie === 3) {
      ((Ie = 0), eb());
      var e = aa,
        n = Ei,
        i = Ln,
        r = Ap;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ?
        (Ie = 5)
      : ((Ie = 0), (Ei = aa = null), Gp(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (
        (c === 0 && (na = null),
        wo(i),
        (n = n.stateNode),
        wt && typeof wt.onCommitFiberRoot == 'function')
      )
        try {
          wt.onCommitFiberRoot(Fi, n, void 0, (n.current.flags & 128) === 128);
        } catch {}
      if (r !== null) {
        ((n = G.T), (c = k.p), (k.p = 2), (G.T = null));
        try {
          for (var d = e.onRecoverableError, y = 0; y < r.length; y++) {
            var T = r[y];
            d(T.value, { componentStack: T.stack });
          }
        } finally {
          ((G.T = n), (k.p = c));
        }
      }
      ((Ln & 3) !== 0 && hr(),
        fn(e),
        (c = e.pendingLanes),
        (i & 261930) !== 0 && (c & 42) !== 0 ?
          e === oc ?
            Ds++
          : ((Ds = 0), (oc = e))
        : (Ds = 0),
        Os(0));
    }
  }
  function Gp(e, n) {
    (e.pooledCacheLanes &= n) === 0 &&
      ((n = e.pooledCache), n != null && ((e.pooledCache = null), cs(n)));
  }
  function hr() {
    return (Up(), Hp(), Pp(), kp());
  }
  function kp() {
    if (Ie !== 5) return !1;
    var e = aa,
      n = lc;
    lc = 0;
    var i = wo(Ln),
      r = G.T,
      c = k.p;
    try {
      ((k.p = 32 > i ? 32 : i), (G.T = null), (i = rc), (rc = null));
      var d = aa,
        y = Ln;
      if (((Ie = 0), (Ei = aa = null), (Ln = 0), (Ce & 6) !== 0))
        throw Error(l(331));
      var T = Ce;
      if (
        ((Ce |= 4),
        _p(d.current),
        Sp(d, d.current, y, i),
        (Ce = T),
        Os(0, !1),
        wt && typeof wt.onPostCommitFiberRoot == 'function')
      )
        try {
          wt.onPostCommitFiberRoot(Fi, d);
        } catch {}
      return !0;
    } finally {
      ((k.p = c), (G.T = r), Gp(e, n));
    }
  }
  function qp(e, n, i) {
    ((n = Gt(i, n)),
      (n = Pu(e.stateNode, n, 2)),
      (e = $n(e, n, 2)),
      e !== null && ($i(e, 2), fn(e)));
  }
  function we(e, n, i) {
    if (e.tag === 3) qp(e, e, i);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          qp(n, e, i);
          break;
        } else if (n.tag === 1) {
          var r = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' &&
              (na === null || !na.has(r)))
          ) {
            ((e = Gt(i, e)),
              (i = Ym(2)),
              (r = $n(n, i, 2)),
              r !== null && (Xm(i, r, n, e), $i(r, 2), fn(r)));
            break;
          }
        }
        n = n.return;
      }
  }
  function fc(e, n, i) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new AS();
      var c = new Set();
      r.set(n, c);
    } else ((c = r.get(n)), c === void 0 && ((c = new Set()), r.set(n, c)));
    c.has(i) ||
      ((ac = !0), c.add(i), (e = NS.bind(null, e, n, i)), n.then(e, e));
  }
  function NS(e, n, i) {
    var r = e.pingCache;
    (r !== null && r.delete(n),
      (e.pingedLanes |= e.suspendedLanes & i),
      (e.warmLanes &= ~i),
      Re === e &&
        (Se & i) === i &&
        (Pe === 4 || (Pe === 3 && (Se & 62914560) === Se && 300 > Mt() - rr) ?
          (Ce & 2) === 0 && Ci(e, 0)
        : (ic |= i),
        _i === Se && (_i = 0)),
      fn(e));
  }
  function Yp(e, n) {
    (n === 0 && (n = Ud()), (e = Ea(e, n)), e !== null && ($i(e, n), fn(e)));
  }
  function RS(e) {
    var n = e.memoizedState,
      i = 0;
    (n !== null && (i = n.retryLane), Yp(e, i));
  }
  function jS(e, n) {
    var i = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var r = e.stateNode,
          c = e.memoizedState;
        c !== null && (i = c.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      case 22:
        r = e.stateNode._retryCache;
        break;
      default:
        throw Error(l(314));
    }
    (r !== null && r.delete(n), Yp(e, i));
  }
  function LS(e, n) {
    return Eo(e, n);
  }
  var mr = null,
    Mi = null,
    dc = !1,
    pr = !1,
    hc = !1,
    sa = 0;
  function fn(e) {
    (e !== Mi &&
      e.next === null &&
      (Mi === null ? (mr = Mi = e) : (Mi = Mi.next = e)),
      (pr = !0),
      dc || ((dc = !0), VS()));
  }
  function Os(e, n) {
    if (!hc && pr) {
      hc = !0;
      do
        for (var i = !1, r = mr; r !== null; ) {
          if (e !== 0) {
            var c = r.pendingLanes;
            if (c === 0) var d = 0;
            else {
              var y = r.suspendedLanes,
                T = r.pingedLanes;
              ((d = (1 << (31 - Dt(42 | e) + 1)) - 1),
                (d &= c & ~(y & ~T)),
                (d =
                  d & 201326741 ? (d & 201326741) | 1
                  : d ? d | 2
                  : 0));
            }
            d !== 0 && ((i = !0), Fp(r, d));
          } else
            ((d = Se),
              (d = bl(
                r,
                r === Re ? d : 0,
                r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
              )),
              (d & 3) === 0 || Zi(r, d) || ((i = !0), Fp(r, d)));
          r = r.next;
        }
      while (i);
      hc = !1;
    }
  }
  function zS() {
    Xp();
  }
  function Xp() {
    pr = dc = !1;
    var e = 0;
    sa !== 0 && QS() && (e = sa);
    for (var n = Mt(), i = null, r = mr; r !== null; ) {
      var c = r.next,
        d = Qp(r, n);
      (d === 0 ?
        ((r.next = null),
        i === null ? (mr = c) : (i.next = c),
        c === null && (Mi = i))
      : ((i = r), (e !== 0 || (d & 3) !== 0) && (pr = !0)),
        (r = c));
    }
    ((Ie !== 0 && Ie !== 5) || Os(e), sa !== 0 && (sa = 0));
  }
  function Qp(e, n) {
    for (
      var i = e.suspendedLanes,
        r = e.pingedLanes,
        c = e.expirationTimes,
        d = e.pendingLanes & -62914561;
      0 < d;
    ) {
      var y = 31 - Dt(d),
        T = 1 << y,
        O = c[y];
      (O === -1 ?
        ((T & i) === 0 || (T & r) !== 0) && (c[y] = ob(T, n))
      : O <= n && (e.expiredLanes |= T),
        (d &= ~T));
    }
    if (
      ((n = Re),
      (i = Se),
      (i = bl(
        e,
        e === n ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (r = e.callbackNode),
      i === 0 ||
        (e === n && (Me === 2 || Me === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        r !== null && r !== null && Co(r),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((i & 3) === 0 || Zi(e, i)) {
      if (((n = i & -i), n === e.callbackPriority)) return n;
      switch ((r !== null && Co(r), wo(i))) {
        case 2:
        case 8:
          i = Vd;
          break;
        case 32:
          i = pl;
          break;
        case 268435456:
          i = Bd;
          break;
        default:
          i = pl;
      }
      return (
        (r = Kp.bind(null, e)),
        (i = Eo(i, r)),
        (e.callbackPriority = n),
        (e.callbackNode = i),
        n
      );
    }
    return (
      r !== null && r !== null && Co(r),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Kp(e, n) {
    if (Ie !== 0 && Ie !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var i = e.callbackNode;
    if (hr() && e.callbackNode !== i) return null;
    var r = Se;
    return (
      (r = bl(
        e,
        e === Re ? r : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      r === 0 ? null : (
        (wp(e, r, n),
        Qp(e, Mt()),
        e.callbackNode != null && e.callbackNode === i ?
          Kp.bind(null, e)
        : null)
      )
    );
  }
  function Fp(e, n) {
    if (hr()) return null;
    wp(e, n, !0);
  }
  function VS() {
    FS(function () {
      (Ce & 6) !== 0 ? Eo(zd, zS) : Xp();
    });
  }
  function mc() {
    if (sa === 0) {
      var e = di;
      (e === 0 && ((e = gl), (gl <<= 1), (gl & 261888) === 0 && (gl = 256)),
        (sa = e));
    }
    return sa;
  }
  function Zp(e) {
    return (
      e == null || typeof e == 'symbol' || typeof e == 'boolean' ? null
      : typeof e == 'function' ? e
      : _l('' + e)
    );
  }
  function $p(e, n) {
    var i = n.ownerDocument.createElement('input');
    return (
      (i.name = n.name),
      (i.value = n.value),
      e.id && i.setAttribute('form', e.id),
      n.parentNode.insertBefore(i, n),
      (e = new FormData(e)),
      i.parentNode.removeChild(i),
      e
    );
  }
  function BS(e, n, i, r, c) {
    if (n === 'submit' && i && i.stateNode === c) {
      var d = Zp((c[St] || null).action),
        y = r.submitter;
      y &&
        ((n =
          (n = y[St] || null) ?
            Zp(n.formAction)
          : y.getAttribute('formAction')),
        n !== null && ((d = n), (y = null)));
      var T = new Ml('action', 'action', null, r, c);
      e.push({
        event: T,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (r.defaultPrevented) {
                if (sa !== 0) {
                  var O = y ? $p(c, y) : new FormData(c);
                  Lu(
                    i,
                    { pending: !0, data: O, method: c.method, action: d },
                    null,
                    O,
                  );
                }
              } else
                typeof d == 'function' &&
                  (T.preventDefault(),
                  (O = y ? $p(c, y) : new FormData(c)),
                  Lu(
                    i,
                    { pending: !0, data: O, method: c.method, action: d },
                    d,
                    O,
                  ));
            },
            currentTarget: c,
          },
        ],
      });
    }
  }
  for (var pc = 0; pc < Io.length; pc++) {
    var gc = Io[pc],
      US = gc.toLowerCase(),
      HS = gc[0].toUpperCase() + gc.slice(1);
    Jt(US, 'on' + HS);
  }
  (Jt(Mh, 'onAnimationEnd'),
    Jt(wh, 'onAnimationIteration'),
    Jt(Dh, 'onAnimationStart'),
    Jt('dblclick', 'onDoubleClick'),
    Jt('focusin', 'onFocus'),
    Jt('focusout', 'onBlur'),
    Jt(tS, 'onTransitionRun'),
    Jt(nS, 'onTransitionStart'),
    Jt(aS, 'onTransitionCancel'),
    Jt(Oh, 'onTransitionEnd'),
    Ja('onMouseEnter', ['mouseout', 'mouseover']),
    Ja('onMouseLeave', ['mouseout', 'mouseover']),
    Ja('onPointerEnter', ['pointerout', 'pointerover']),
    Ja('onPointerLeave', ['pointerout', 'pointerover']),
    Sa(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' ',
      ),
    ),
    Sa(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    Sa('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Sa(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Sa(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Sa(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    ));
  var Ns =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    PS = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'
        .split(' ')
        .concat(Ns),
    );
  function Ip(e, n) {
    n = (n & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var r = e[i],
        c = r.event;
      r = r.listeners;
      e: {
        var d = void 0;
        if (n)
          for (var y = r.length - 1; 0 <= y; y--) {
            var T = r[y],
              O = T.instance,
              B = T.currentTarget;
            if (((T = T.listener), O !== d && c.isPropagationStopped()))
              break e;
            ((d = T), (c.currentTarget = B));
            try {
              d(c);
            } catch (Y) {
              Ol(Y);
            }
            ((c.currentTarget = null), (d = O));
          }
        else
          for (y = 0; y < r.length; y++) {
            if (
              ((T = r[y]),
              (O = T.instance),
              (B = T.currentTarget),
              (T = T.listener),
              O !== d && c.isPropagationStopped())
            )
              break e;
            ((d = T), (c.currentTarget = B));
            try {
              d(c);
            } catch (Y) {
              Ol(Y);
            }
            ((c.currentTarget = null), (d = O));
          }
      }
    }
  }
  function be(e, n) {
    var i = n[Do];
    i === void 0 && (i = n[Do] = new Set());
    var r = e + '__bubble';
    i.has(r) || (Jp(n, e, 2, !1), i.add(r));
  }
  function vc(e, n, i) {
    var r = 0;
    (n && (r |= 4), Jp(i, e, r, n));
  }
  var gr = '_reactListening' + Math.random().toString(36).slice(2);
  function yc(e) {
    if (!e[gr]) {
      ((e[gr] = !0),
        Xd.forEach(function (i) {
          i !== 'selectionchange' && (PS.has(i) || vc(i, !1, e), vc(i, !0, e));
        }));
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[gr] || ((n[gr] = !0), vc('selectionchange', !1, n));
    }
  }
  function Jp(e, n, i, r) {
    switch (Mg(n)) {
      case 2:
        var c = mx;
        break;
      case 8:
        c = px;
        break;
      default:
        c = jc;
    }
    ((i = c.bind(null, n, i, e)),
      (c = void 0),
      !Uo ||
        (n !== 'touchstart' && n !== 'touchmove' && n !== 'wheel') ||
        (c = !0),
      r ?
        c !== void 0 ?
          e.addEventListener(n, i, { capture: !0, passive: c })
        : e.addEventListener(n, i, !0)
      : c !== void 0 ? e.addEventListener(n, i, { passive: c })
      : e.addEventListener(n, i, !1));
  }
  function bc(e, n, i, r, c) {
    var d = r;
    if ((n & 1) === 0 && (n & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var y = r.tag;
        if (y === 3 || y === 4) {
          var T = r.stateNode.containerInfo;
          if (T === c) break;
          if (y === 4)
            for (y = r.return; y !== null; ) {
              var O = y.tag;
              if ((O === 3 || O === 4) && y.stateNode.containerInfo === c)
                return;
              y = y.return;
            }
          for (; T !== null; ) {
            if (((y = Za(T)), y === null)) return;
            if (((O = y.tag), O === 5 || O === 6 || O === 26 || O === 27)) {
              r = d = y;
              continue e;
            }
            T = T.parentNode;
          }
        }
        r = r.return;
      }
    ah(function () {
      var B = d,
        Y = Vo(i),
        K = [];
      e: {
        var H = Nh.get(e);
        if (H !== void 0) {
          var P = Ml,
            ne = e;
          switch (e) {
            case 'keypress':
              if (Cl(i) === 0) break e;
            case 'keydown':
            case 'keyup':
              P = jb;
              break;
            case 'focusin':
              ((ne = 'focus'), (P = ko));
              break;
            case 'focusout':
              ((ne = 'blur'), (P = ko));
              break;
            case 'beforeblur':
            case 'afterblur':
              P = ko;
              break;
            case 'click':
              if (i.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              P = lh;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              P = xb;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              P = Vb;
              break;
            case Mh:
            case wh:
            case Dh:
              P = Eb;
              break;
            case Oh:
              P = Ub;
              break;
            case 'scroll':
            case 'scrollend':
              P = bb;
              break;
            case 'wheel':
              P = Pb;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              P = Ab;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              P = oh;
              break;
            case 'toggle':
            case 'beforetoggle':
              P = kb;
          }
          var ue = (n & 4) !== 0,
            Ne = !ue && (e === 'scroll' || e === 'scrollend'),
            j =
              ue ?
                H !== null ?
                  H + 'Capture'
                : null
              : H;
          ue = [];
          for (var R = B, z; R !== null; ) {
            var Q = R;
            if (
              ((z = Q.stateNode),
              (Q = Q.tag),
              (Q !== 5 && Q !== 26 && Q !== 27) ||
                z === null ||
                j === null ||
                ((Q = Wi(R, j)), Q != null && ue.push(Rs(R, Q, z))),
              Ne)
            )
              break;
            R = R.return;
          }
          0 < ue.length &&
            ((H = new P(H, ne, null, i, Y)),
            K.push({ event: H, listeners: ue }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (
            ((H = e === 'mouseover' || e === 'pointerover'),
            (P = e === 'mouseout' || e === 'pointerout'),
            H &&
              i !== zo &&
              (ne = i.relatedTarget || i.fromElement) &&
              (Za(ne) || ne[Fa]))
          )
            break e;
          if (
            (P || H) &&
            ((H =
              Y.window === Y ? Y
              : (H = Y.ownerDocument) ? H.defaultView || H.parentWindow
              : window),
            P ?
              ((ne = i.relatedTarget || i.toElement),
              (P = B),
              (ne = ne ? Za(ne) : null),
              ne !== null &&
                ((Ne = u(ne)),
                (ue = ne.tag),
                ne !== Ne || (ue !== 5 && ue !== 27 && ue !== 6)) &&
                (ne = null))
            : ((P = null), (ne = B)),
            P !== ne)
          ) {
            if (
              ((ue = lh),
              (Q = 'onMouseLeave'),
              (j = 'onMouseEnter'),
              (R = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((ue = oh),
                (Q = 'onPointerLeave'),
                (j = 'onPointerEnter'),
                (R = 'pointer')),
              (Ne = P == null ? H : Ji(P)),
              (z = ne == null ? H : Ji(ne)),
              (H = new ue(Q, R + 'leave', P, i, Y)),
              (H.target = Ne),
              (H.relatedTarget = z),
              (Q = null),
              Za(Y) === B &&
                ((ue = new ue(j, R + 'enter', ne, i, Y)),
                (ue.target = z),
                (ue.relatedTarget = Ne),
                (Q = ue)),
              (Ne = Q),
              P && ne)
            )
              t: {
                for (ue = GS, j = P, R = ne, z = 0, Q = j; Q; Q = ue(Q)) z++;
                Q = 0;
                for (var le = R; le; le = ue(le)) Q++;
                for (; 0 < z - Q; ) ((j = ue(j)), z--);
                for (; 0 < Q - z; ) ((R = ue(R)), Q--);
                for (; z--; ) {
                  if (j === R || (R !== null && j === R.alternate)) {
                    ue = j;
                    break t;
                  }
                  ((j = ue(j)), (R = ue(R)));
                }
                ue = null;
              }
            else ue = null;
            (P !== null && Wp(K, H, P, ue, !1),
              ne !== null && Ne !== null && Wp(K, Ne, ne, ue, !0));
          }
        }
        e: {
          if (
            ((H = B ? Ji(B) : window),
            (P = H.nodeName && H.nodeName.toLowerCase()),
            P === 'select' || (P === 'input' && H.type === 'file'))
          )
            var _e = gh;
          else if (mh(H))
            if (vh) _e = Jb;
            else {
              _e = $b;
              var se = Zb;
            }
          else
            ((P = H.nodeName),
              (
                !P ||
                P.toLowerCase() !== 'input' ||
                (H.type !== 'checkbox' && H.type !== 'radio')
              ) ?
                B && Lo(B.elementType) && (_e = gh)
              : (_e = Ib));
          if (_e && (_e = _e(e, B))) {
            ph(K, _e, i, Y);
            break e;
          }
          (se && se(e, H, B),
            e === 'focusout' &&
              B &&
              H.type === 'number' &&
              B.memoizedProps.value != null &&
              jo(H, 'number', H.value));
        }
        switch (((se = B ? Ji(B) : window), e)) {
          case 'focusin':
            (mh(se) || se.contentEditable === 'true') &&
              ((ii = se), (Fo = B), (rs = null));
            break;
          case 'focusout':
            rs = Fo = ii = null;
            break;
          case 'mousedown':
            Zo = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Zo = !1), Ch(K, i, Y));
            break;
          case 'selectionchange':
            if (eS) break;
          case 'keydown':
          case 'keyup':
            Ch(K, i, Y);
        }
        var ge;
        if (Yo)
          e: {
            switch (e) {
              case 'compositionstart':
                var xe = 'onCompositionStart';
                break e;
              case 'compositionend':
                xe = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                xe = 'onCompositionUpdate';
                break e;
            }
            xe = void 0;
          }
        else
          ai ?
            dh(e, i) && (xe = 'onCompositionEnd')
          : e === 'keydown' && i.keyCode === 229 && (xe = 'onCompositionStart');
        (xe &&
          (uh &&
            i.locale !== 'ko' &&
            (ai || xe !== 'onCompositionStart' ?
              xe === 'onCompositionEnd' && ai && (ge = ih())
            : ((qn = Y),
              (Ho = 'value' in qn ? qn.value : qn.textContent),
              (ai = !0))),
          (se = vr(B, xe)),
          0 < se.length &&
            ((xe = new rh(xe, e, null, i, Y)),
            K.push({ event: xe, listeners: se }),
            ge ?
              (xe.data = ge)
            : ((ge = hh(i)), ge !== null && (xe.data = ge)))),
          (ge = Yb ? Xb(e, i) : Qb(e, i)) &&
            ((xe = vr(B, 'onBeforeInput')),
            0 < xe.length &&
              ((se = new rh('onBeforeInput', 'beforeinput', null, i, Y)),
              K.push({ event: se, listeners: xe }),
              (se.data = ge))),
          BS(K, e, B, i, Y));
      }
      Ip(K, n);
    });
  }
  function Rs(e, n, i) {
    return { instance: e, listener: n, currentTarget: i };
  }
  function vr(e, n) {
    for (var i = n + 'Capture', r = []; e !== null; ) {
      var c = e,
        d = c.stateNode;
      if (
        ((c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          d === null ||
          ((c = Wi(e, i)),
          c != null && r.unshift(Rs(e, c, d)),
          (c = Wi(e, n)),
          c != null && r.push(Rs(e, c, d))),
        e.tag === 3)
      )
        return r;
      e = e.return;
    }
    return [];
  }
  function GS(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Wp(e, n, i, r, c) {
    for (var d = n._reactName, y = []; i !== null && i !== r; ) {
      var T = i,
        O = T.alternate,
        B = T.stateNode;
      if (((T = T.tag), O !== null && O === r)) break;
      ((T !== 5 && T !== 26 && T !== 27) ||
        B === null ||
        ((O = B),
        c ?
          ((B = Wi(i, d)), B != null && y.unshift(Rs(i, B, O)))
        : c || ((B = Wi(i, d)), B != null && y.push(Rs(i, B, O)))),
        (i = i.return));
    }
    y.length !== 0 && e.push({ event: n, listeners: y });
  }
  var kS = /\r\n?/g,
    qS = /\u0000|\uFFFD/g;
  function eg(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        kS,
        `
`,
      )
      .replace(qS, '');
  }
  function tg(e, n) {
    return ((n = eg(n)), eg(e) === n);
  }
  function Oe(e, n, i, r, c, d) {
    switch (i) {
      case 'children':
        typeof r == 'string' ?
          n === 'body' || (n === 'textarea' && r === '') || ei(e, r)
        : (typeof r == 'number' || typeof r == 'bigint') &&
          n !== 'body' &&
          ei(e, '' + r);
        break;
      case 'className':
        xl(e, 'class', r);
        break;
      case 'tabIndex':
        xl(e, 'tabindex', r);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        xl(e, i, r);
        break;
      case 'style':
        th(e, r, d);
        break;
      case 'data':
        if (n !== 'object') {
          xl(e, 'data', r);
          break;
        }
      case 'src':
      case 'href':
        if (r === '' && (n !== 'a' || i !== 'href')) {
          e.removeAttribute(i);
          break;
        }
        if (
          r == null ||
          typeof r == 'function' ||
          typeof r == 'symbol' ||
          typeof r == 'boolean'
        ) {
          e.removeAttribute(i);
          break;
        }
        ((r = _l('' + r)), e.setAttribute(i, r));
        break;
      case 'action':
      case 'formAction':
        if (typeof r == 'function') {
          e.setAttribute(
            i,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof d == 'function' &&
            (i === 'formAction' ?
              (n !== 'input' && Oe(e, n, 'name', c.name, c, null),
              Oe(e, n, 'formEncType', c.formEncType, c, null),
              Oe(e, n, 'formMethod', c.formMethod, c, null),
              Oe(e, n, 'formTarget', c.formTarget, c, null))
            : (Oe(e, n, 'encType', c.encType, c, null),
              Oe(e, n, 'method', c.method, c, null),
              Oe(e, n, 'target', c.target, c, null)));
        if (r == null || typeof r == 'symbol' || typeof r == 'boolean') {
          e.removeAttribute(i);
          break;
        }
        ((r = _l('' + r)), e.setAttribute(i, r));
        break;
      case 'onClick':
        r != null && (e.onclick = bn);
        break;
      case 'onScroll':
        r != null && be('scroll', e);
        break;
      case 'onScrollEnd':
        r != null && be('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (r != null) {
          if (typeof r != 'object' || !('__html' in r)) throw Error(l(61));
          if (((i = r.__html), i != null)) {
            if (c.children != null) throw Error(l(60));
            e.innerHTML = i;
          }
        }
        break;
      case 'multiple':
        e.multiple = r && typeof r != 'function' && typeof r != 'symbol';
        break;
      case 'muted':
        e.muted = r && typeof r != 'function' && typeof r != 'symbol';
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
          r == null ||
          typeof r == 'function' ||
          typeof r == 'boolean' ||
          typeof r == 'symbol'
        ) {
          e.removeAttribute('xlink:href');
          break;
        }
        ((i = _l('' + r)),
          e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', i));
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        r != null && typeof r != 'function' && typeof r != 'symbol' ?
          e.setAttribute(i, '' + r)
        : e.removeAttribute(i);
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
        r && typeof r != 'function' && typeof r != 'symbol' ?
          e.setAttribute(i, '')
        : e.removeAttribute(i);
        break;
      case 'capture':
      case 'download':
        r === !0 ? e.setAttribute(i, '')
        : (
          r !== !1 &&
          r != null &&
          typeof r != 'function' &&
          typeof r != 'symbol'
        ) ?
          e.setAttribute(i, r)
        : e.removeAttribute(i);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        (
          r != null &&
          typeof r != 'function' &&
          typeof r != 'symbol' &&
          !isNaN(r) &&
          1 <= r
        ) ?
          e.setAttribute(i, r)
        : e.removeAttribute(i);
        break;
      case 'rowSpan':
      case 'start':
        (
          r == null ||
          typeof r == 'function' ||
          typeof r == 'symbol' ||
          isNaN(r)
        ) ?
          e.removeAttribute(i)
        : e.setAttribute(i, r);
        break;
      case 'popover':
        (be('beforetoggle', e), be('toggle', e), Sl(e, 'popover', r));
        break;
      case 'xlinkActuate':
        yn(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', r);
        break;
      case 'xlinkArcrole':
        yn(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', r);
        break;
      case 'xlinkRole':
        yn(e, 'http://www.w3.org/1999/xlink', 'xlink:role', r);
        break;
      case 'xlinkShow':
        yn(e, 'http://www.w3.org/1999/xlink', 'xlink:show', r);
        break;
      case 'xlinkTitle':
        yn(e, 'http://www.w3.org/1999/xlink', 'xlink:title', r);
        break;
      case 'xlinkType':
        yn(e, 'http://www.w3.org/1999/xlink', 'xlink:type', r);
        break;
      case 'xmlBase':
        yn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', r);
        break;
      case 'xmlLang':
        yn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', r);
        break;
      case 'xmlSpace':
        yn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', r);
        break;
      case 'is':
        Sl(e, 'is', r);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < i.length) ||
          (i[0] !== 'o' && i[0] !== 'O') ||
          (i[1] !== 'n' && i[1] !== 'N')) &&
          ((i = vb.get(i) || i), Sl(e, i, r));
    }
  }
  function Sc(e, n, i, r, c, d) {
    switch (i) {
      case 'style':
        th(e, r, d);
        break;
      case 'dangerouslySetInnerHTML':
        if (r != null) {
          if (typeof r != 'object' || !('__html' in r)) throw Error(l(61));
          if (((i = r.__html), i != null)) {
            if (c.children != null) throw Error(l(60));
            e.innerHTML = i;
          }
        }
        break;
      case 'children':
        typeof r == 'string' ?
          ei(e, r)
        : (typeof r == 'number' || typeof r == 'bigint') && ei(e, '' + r);
        break;
      case 'onScroll':
        r != null && be('scroll', e);
        break;
      case 'onScrollEnd':
        r != null && be('scrollend', e);
        break;
      case 'onClick':
        r != null && (e.onclick = bn);
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
        if (!Qd.hasOwnProperty(i))
          e: {
            if (
              i[0] === 'o' &&
              i[1] === 'n' &&
              ((c = i.endsWith('Capture')),
              (n = i.slice(2, c ? i.length - 7 : void 0)),
              (d = e[St] || null),
              (d = d != null ? d[i] : null),
              typeof d == 'function' && e.removeEventListener(n, d, c),
              typeof r == 'function')
            ) {
              (typeof d != 'function' &&
                d !== null &&
                (i in e ?
                  (e[i] = null)
                : e.hasAttribute(i) && e.removeAttribute(i)),
                e.addEventListener(n, r, c));
              break e;
            }
            i in e ? (e[i] = r)
            : r === !0 ? e.setAttribute(i, '')
            : Sl(e, i, r);
          }
    }
  }
  function ot(e, n, i) {
    switch (n) {
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
        (be('error', e), be('load', e));
        var r = !1,
          c = !1,
          d;
        for (d in i)
          if (i.hasOwnProperty(d)) {
            var y = i[d];
            if (y != null)
              switch (d) {
                case 'src':
                  r = !0;
                  break;
                case 'srcSet':
                  c = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(l(137, n));
                default:
                  Oe(e, n, d, y, i, null);
              }
          }
        (c && Oe(e, n, 'srcSet', i.srcSet, i, null),
          r && Oe(e, n, 'src', i.src, i, null));
        return;
      case 'input':
        be('invalid', e);
        var T = (d = y = c = null),
          O = null,
          B = null;
        for (r in i)
          if (i.hasOwnProperty(r)) {
            var Y = i[r];
            if (Y != null)
              switch (r) {
                case 'name':
                  c = Y;
                  break;
                case 'type':
                  y = Y;
                  break;
                case 'checked':
                  O = Y;
                  break;
                case 'defaultChecked':
                  B = Y;
                  break;
                case 'value':
                  d = Y;
                  break;
                case 'defaultValue':
                  T = Y;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (Y != null) throw Error(l(137, n));
                  break;
                default:
                  Oe(e, n, r, Y, i, null);
              }
          }
        Id(e, d, T, O, B, y, c, !1);
        return;
      case 'select':
        (be('invalid', e), (r = y = d = null));
        for (c in i)
          if (i.hasOwnProperty(c) && ((T = i[c]), T != null))
            switch (c) {
              case 'value':
                d = T;
                break;
              case 'defaultValue':
                y = T;
                break;
              case 'multiple':
                r = T;
              default:
                Oe(e, n, c, T, i, null);
            }
        ((n = d),
          (i = y),
          (e.multiple = !!r),
          n != null ? Wa(e, !!r, n, !1) : i != null && Wa(e, !!r, i, !0));
        return;
      case 'textarea':
        (be('invalid', e), (d = c = r = null));
        for (y in i)
          if (i.hasOwnProperty(y) && ((T = i[y]), T != null))
            switch (y) {
              case 'value':
                r = T;
                break;
              case 'defaultValue':
                c = T;
                break;
              case 'children':
                d = T;
                break;
              case 'dangerouslySetInnerHTML':
                if (T != null) throw Error(l(91));
                break;
              default:
                Oe(e, n, y, T, i, null);
            }
        Wd(e, r, c, d);
        return;
      case 'option':
        for (O in i)
          i.hasOwnProperty(O) &&
            ((r = i[O]), r != null) &&
            (O === 'selected' ?
              (e.selected = r && typeof r != 'function' && typeof r != 'symbol')
            : Oe(e, n, O, r, i, null));
        return;
      case 'dialog':
        (be('beforetoggle', e),
          be('toggle', e),
          be('cancel', e),
          be('close', e));
        break;
      case 'iframe':
      case 'object':
        be('load', e);
        break;
      case 'video':
      case 'audio':
        for (r = 0; r < Ns.length; r++) be(Ns[r], e);
        break;
      case 'image':
        (be('error', e), be('load', e));
        break;
      case 'details':
        be('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (be('error', e), be('load', e));
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
        for (B in i)
          if (i.hasOwnProperty(B) && ((r = i[B]), r != null))
            switch (B) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(l(137, n));
              default:
                Oe(e, n, B, r, i, null);
            }
        return;
      default:
        if (Lo(n)) {
          for (Y in i)
            i.hasOwnProperty(Y) &&
              ((r = i[Y]), r !== void 0 && Sc(e, n, Y, r, i, void 0));
          return;
        }
    }
    for (T in i)
      i.hasOwnProperty(T) && ((r = i[T]), r != null && Oe(e, n, T, r, i, null));
  }
  function YS(e, n, i, r) {
    switch (n) {
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
        var c = null,
          d = null,
          y = null,
          T = null,
          O = null,
          B = null,
          Y = null;
        for (P in i) {
          var K = i[P];
          if (i.hasOwnProperty(P) && K != null)
            switch (P) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                O = K;
              default:
                r.hasOwnProperty(P) || Oe(e, n, P, null, r, K);
            }
        }
        for (var H in r) {
          var P = r[H];
          if (((K = i[H]), r.hasOwnProperty(H) && (P != null || K != null)))
            switch (H) {
              case 'type':
                d = P;
                break;
              case 'name':
                c = P;
                break;
              case 'checked':
                B = P;
                break;
              case 'defaultChecked':
                Y = P;
                break;
              case 'value':
                y = P;
                break;
              case 'defaultValue':
                T = P;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (P != null) throw Error(l(137, n));
                break;
              default:
                P !== K && Oe(e, n, H, P, r, K);
            }
        }
        Ro(e, y, T, O, B, Y, d, c);
        return;
      case 'select':
        P = y = T = H = null;
        for (d in i)
          if (((O = i[d]), i.hasOwnProperty(d) && O != null))
            switch (d) {
              case 'value':
                break;
              case 'multiple':
                P = O;
              default:
                r.hasOwnProperty(d) || Oe(e, n, d, null, r, O);
            }
        for (c in r)
          if (
            ((d = r[c]),
            (O = i[c]),
            r.hasOwnProperty(c) && (d != null || O != null))
          )
            switch (c) {
              case 'value':
                H = d;
                break;
              case 'defaultValue':
                T = d;
                break;
              case 'multiple':
                y = d;
              default:
                d !== O && Oe(e, n, c, d, r, O);
            }
        ((n = T),
          (i = y),
          (r = P),
          H != null ?
            Wa(e, !!i, H, !1)
          : !!r != !!i &&
            (n != null ? Wa(e, !!i, n, !0) : Wa(e, !!i, i ? [] : '', !1)));
        return;
      case 'textarea':
        P = H = null;
        for (T in i)
          if (
            ((c = i[T]),
            i.hasOwnProperty(T) && c != null && !r.hasOwnProperty(T))
          )
            switch (T) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                Oe(e, n, T, null, r, c);
            }
        for (y in r)
          if (
            ((c = r[y]),
            (d = i[y]),
            r.hasOwnProperty(y) && (c != null || d != null))
          )
            switch (y) {
              case 'value':
                H = c;
                break;
              case 'defaultValue':
                P = c;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (c != null) throw Error(l(91));
                break;
              default:
                c !== d && Oe(e, n, y, c, r, d);
            }
        Jd(e, H, P);
        return;
      case 'option':
        for (var ne in i)
          ((H = i[ne]),
            i.hasOwnProperty(ne) &&
              H != null &&
              !r.hasOwnProperty(ne) &&
              (ne === 'selected' ?
                (e.selected = !1)
              : Oe(e, n, ne, null, r, H)));
        for (O in r)
          ((H = r[O]),
            (P = i[O]),
            r.hasOwnProperty(O) &&
              H !== P &&
              (H != null || P != null) &&
              (O === 'selected' ?
                (e.selected =
                  H && typeof H != 'function' && typeof H != 'symbol')
              : Oe(e, n, O, H, r, P)));
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
        for (var ue in i)
          ((H = i[ue]),
            i.hasOwnProperty(ue) &&
              H != null &&
              !r.hasOwnProperty(ue) &&
              Oe(e, n, ue, null, r, H));
        for (B in r)
          if (
            ((H = r[B]),
            (P = i[B]),
            r.hasOwnProperty(B) && H !== P && (H != null || P != null))
          )
            switch (B) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (H != null) throw Error(l(137, n));
                break;
              default:
                Oe(e, n, B, H, r, P);
            }
        return;
      default:
        if (Lo(n)) {
          for (var Ne in i)
            ((H = i[Ne]),
              i.hasOwnProperty(Ne) &&
                H !== void 0 &&
                !r.hasOwnProperty(Ne) &&
                Sc(e, n, Ne, void 0, r, H));
          for (Y in r)
            ((H = r[Y]),
              (P = i[Y]),
              !r.hasOwnProperty(Y) ||
                H === P ||
                (H === void 0 && P === void 0) ||
                Sc(e, n, Y, H, r, P));
          return;
        }
    }
    for (var j in i)
      ((H = i[j]),
        i.hasOwnProperty(j) &&
          H != null &&
          !r.hasOwnProperty(j) &&
          Oe(e, n, j, null, r, H));
    for (K in r)
      ((H = r[K]),
        (P = i[K]),
        !r.hasOwnProperty(K) ||
          H === P ||
          (H == null && P == null) ||
          Oe(e, n, K, H, r, P));
  }
  function ng(e) {
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
  function XS() {
    if (typeof performance.getEntriesByType == 'function') {
      for (
        var e = 0, n = 0, i = performance.getEntriesByType('resource'), r = 0;
        r < i.length;
        r++
      ) {
        var c = i[r],
          d = c.transferSize,
          y = c.initiatorType,
          T = c.duration;
        if (d && T && ng(y)) {
          for (y = 0, T = c.responseEnd, r += 1; r < i.length; r++) {
            var O = i[r],
              B = O.startTime;
            if (B > T) break;
            var Y = O.transferSize,
              K = O.initiatorType;
            Y &&
              ng(K) &&
              ((O = O.responseEnd), (y += Y * (O < T ? 1 : (T - B) / (O - B))));
          }
          if ((--r, (n += (8 * (d + y)) / (c.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return n / e / 1e6;
    }
    return (
        navigator.connection &&
          ((e = navigator.connection.downlink), typeof e == 'number')
      ) ?
        e
      : 5;
  }
  var xc = null,
    Tc = null;
  function yr(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function ag(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function ig(e, n) {
    if (e === 0)
      switch (n) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return e === 1 && n === 'foreignObject' ? 0 : e;
  }
  function _c(e, n) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof n.children == 'string' ||
      typeof n.children == 'number' ||
      typeof n.children == 'bigint' ||
      (typeof n.dangerouslySetInnerHTML == 'object' &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ec = null;
  function QS() {
    var e = window.event;
    return (
      e && e.type === 'popstate' ?
        e === Ec ?
          !1
        : ((Ec = e), !0)
      : ((Ec = null), !1)
    );
  }
  var sg = typeof setTimeout == 'function' ? setTimeout : void 0,
    KS = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    lg = typeof Promise == 'function' ? Promise : void 0,
    FS =
      typeof queueMicrotask == 'function' ? queueMicrotask
      : typeof lg < 'u' ?
        function (e) {
          return lg.resolve(null).then(e).catch(ZS);
        }
      : sg;
  function ZS(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function la(e) {
    return e === 'head';
  }
  function rg(e, n) {
    var i = n,
      r = 0;
    do {
      var c = i.nextSibling;
      if ((e.removeChild(i), c && c.nodeType === 8))
        if (((i = c.data), i === '/$' || i === '/&')) {
          if (r === 0) {
            (e.removeChild(c), Ni(n));
            return;
          }
          r--;
        } else if (
          i === '$' ||
          i === '$?' ||
          i === '$~' ||
          i === '$!' ||
          i === '&'
        )
          r++;
        else if (i === 'html') js(e.ownerDocument.documentElement);
        else if (i === 'head') {
          ((i = e.ownerDocument.head), js(i));
          for (var d = i.firstChild; d; ) {
            var y = d.nextSibling,
              T = d.nodeName;
            (d[Ii] ||
              T === 'SCRIPT' ||
              T === 'STYLE' ||
              (T === 'LINK' && d.rel.toLowerCase() === 'stylesheet') ||
              i.removeChild(d),
              (d = y));
          }
        } else i === 'body' && js(e.ownerDocument.body);
      i = c;
    } while (i);
    Ni(n);
  }
  function og(e, n) {
    var i = e;
    e = 0;
    do {
      var r = i.nextSibling;
      if (
        (i.nodeType === 1 ?
          n ?
            ((i._stashedDisplay = i.style.display), (i.style.display = 'none'))
          : ((i.style.display = i._stashedDisplay || ''),
            i.getAttribute('style') === '' && i.removeAttribute('style'))
        : i.nodeType === 3 &&
          (n ?
            ((i._stashedText = i.nodeValue), (i.nodeValue = ''))
          : (i.nodeValue = i._stashedText || '')),
        r && r.nodeType === 8)
      )
        if (((i = r.data), i === '/$')) {
          if (e === 0) break;
          e--;
        } else (i !== '$' && i !== '$?' && i !== '$~' && i !== '$!') || e++;
      i = r;
    } while (i);
  }
  function Cc(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var i = n;
      switch (((n = n.nextSibling), i.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (Cc(i), Oo(i));
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (i.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(i);
    }
  }
  function $S(e, n, i, r) {
    for (; e.nodeType === 1; ) {
      var c = i;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!r && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (r) {
        if (!e[Ii])
          switch (n) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (
                ((d = e.getAttribute('rel')),
                d === 'stylesheet' && e.hasAttribute('data-precedence'))
              )
                break;
              if (
                d !== c.rel ||
                e.getAttribute('href') !==
                  (c.href == null || c.href === '' ? null : c.href) ||
                e.getAttribute('crossorigin') !==
                  (c.crossOrigin == null ? null : c.crossOrigin) ||
                e.getAttribute('title') !== (c.title == null ? null : c.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((d = e.getAttribute('src')),
                (d !== (c.src == null ? null : c.src) ||
                  e.getAttribute('type') !== (c.type == null ? null : c.type) ||
                  e.getAttribute('crossorigin') !==
                    (c.crossOrigin == null ? null : c.crossOrigin)) &&
                  d &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (n === 'input' && e.type === 'hidden') {
        var d = c.name == null ? null : '' + c.name;
        if (c.type === 'hidden' && e.getAttribute('name') === d) return e;
      } else return e;
      if (((e = Qt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function IS(e, n, i) {
    if (n === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !i) ||
        ((e = Qt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function ug(e, n) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !n) ||
        ((e = Qt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Ac(e) {
    return e.data === '$?' || e.data === '$~';
  }
  function Mc(e) {
    return (
      e.data === '$!' ||
      (e.data === '$?' && e.ownerDocument.readyState !== 'loading')
    );
  }
  function JS(e, n) {
    var i = e.ownerDocument;
    if (e.data === '$~') e._reactRetry = n;
    else if (e.data !== '$?' || i.readyState !== 'loading') n();
    else {
      var r = function () {
        (n(), i.removeEventListener('DOMContentLoaded', r));
      };
      (i.addEventListener('DOMContentLoaded', r), (e._reactRetry = r));
    }
  }
  function Qt(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (
          ((n = e.data),
          n === '$' ||
            n === '$!' ||
            n === '$?' ||
            n === '$~' ||
            n === '&' ||
            n === 'F!' ||
            n === 'F')
        )
          break;
        if (n === '/$' || n === '/&') return null;
      }
    }
    return e;
  }
  var wc = null;
  function cg(e) {
    e = e.nextSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === '/$' || i === '/&') {
          if (n === 0) return Qt(e.nextSibling);
          n--;
        } else
          (i !== '$' && i !== '$!' && i !== '$?' && i !== '$~' && i !== '&') ||
            n++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function fg(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === '$' || i === '$!' || i === '$?' || i === '$~' || i === '&') {
          if (n === 0) return e;
          n--;
        } else (i !== '/$' && i !== '/&') || n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function dg(e, n, i) {
    switch (((n = yr(i)), e)) {
      case 'html':
        if (((e = n.documentElement), !e)) throw Error(l(452));
        return e;
      case 'head':
        if (((e = n.head), !e)) throw Error(l(453));
        return e;
      case 'body':
        if (((e = n.body), !e)) throw Error(l(454));
        return e;
      default:
        throw Error(l(451));
    }
  }
  function js(e) {
    for (var n = e.attributes; n.length; ) e.removeAttributeNode(n[0]);
    Oo(e);
  }
  var Kt = new Map(),
    hg = new Set();
  function br(e) {
    return (
      typeof e.getRootNode == 'function' ? e.getRootNode()
      : e.nodeType === 9 ? e
      : e.ownerDocument
    );
  }
  var zn = k.d;
  k.d = { f: WS, r: ex, D: tx, C: nx, L: ax, m: ix, X: lx, S: sx, M: rx };
  function WS() {
    var e = zn.f(),
      n = cr();
    return e || n;
  }
  function ex(e) {
    var n = $a(e);
    n !== null && n.tag === 5 && n.type === 'form' ? Om(n) : zn.r(e);
  }
  var wi = typeof document > 'u' ? null : document;
  function mg(e, n, i) {
    var r = wi;
    if (r && typeof n == 'string' && n) {
      var c = Ht(n);
      ((c = 'link[rel="' + e + '"][href="' + c + '"]'),
        typeof i == 'string' && (c += '[crossorigin="' + i + '"]'),
        hg.has(c) ||
          (hg.add(c),
          (e = { rel: e, crossOrigin: i, href: n }),
          r.querySelector(c) === null &&
            ((n = r.createElement('link')),
            ot(n, 'link', e),
            et(n),
            r.head.appendChild(n))));
    }
  }
  function tx(e) {
    (zn.D(e), mg('dns-prefetch', e, null));
  }
  function nx(e, n) {
    (zn.C(e, n), mg('preconnect', e, n));
  }
  function ax(e, n, i) {
    zn.L(e, n, i);
    var r = wi;
    if (r && e && n) {
      var c = 'link[rel="preload"][as="' + Ht(n) + '"]';
      n === 'image' && i && i.imageSrcSet ?
        ((c += '[imagesrcset="' + Ht(i.imageSrcSet) + '"]'),
        typeof i.imageSizes == 'string' &&
          (c += '[imagesizes="' + Ht(i.imageSizes) + '"]'))
      : (c += '[href="' + Ht(e) + '"]');
      var d = c;
      switch (n) {
        case 'style':
          d = Di(e);
          break;
        case 'script':
          d = Oi(e);
      }
      Kt.has(d) ||
        ((e = g(
          {
            rel: 'preload',
            href: n === 'image' && i && i.imageSrcSet ? void 0 : e,
            as: n,
          },
          i,
        )),
        Kt.set(d, e),
        r.querySelector(c) !== null ||
          (n === 'style' && r.querySelector(Ls(d))) ||
          (n === 'script' && r.querySelector(zs(d))) ||
          ((n = r.createElement('link')),
          ot(n, 'link', e),
          et(n),
          r.head.appendChild(n)));
    }
  }
  function ix(e, n) {
    zn.m(e, n);
    var i = wi;
    if (i && e) {
      var r = n && typeof n.as == 'string' ? n.as : 'script',
        c =
          'link[rel="modulepreload"][as="' + Ht(r) + '"][href="' + Ht(e) + '"]',
        d = c;
      switch (r) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          d = Oi(e);
      }
      if (
        !Kt.has(d) &&
        ((e = g({ rel: 'modulepreload', href: e }, n)),
        Kt.set(d, e),
        i.querySelector(c) === null)
      ) {
        switch (r) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (i.querySelector(zs(d))) return;
        }
        ((r = i.createElement('link')),
          ot(r, 'link', e),
          et(r),
          i.head.appendChild(r));
      }
    }
  }
  function sx(e, n, i) {
    zn.S(e, n, i);
    var r = wi;
    if (r && e) {
      var c = Ia(r).hoistableStyles,
        d = Di(e);
      n = n || 'default';
      var y = c.get(d);
      if (!y) {
        var T = { loading: 0, preload: null };
        if ((y = r.querySelector(Ls(d)))) T.loading = 5;
        else {
          ((e = g({ 'rel': 'stylesheet', 'href': e, 'data-precedence': n }, i)),
            (i = Kt.get(d)) && Dc(e, i));
          var O = (y = r.createElement('link'));
          (et(O),
            ot(O, 'link', e),
            (O._p = new Promise(function (B, Y) {
              ((O.onload = B), (O.onerror = Y));
            })),
            O.addEventListener('load', function () {
              T.loading |= 1;
            }),
            O.addEventListener('error', function () {
              T.loading |= 2;
            }),
            (T.loading |= 4),
            Sr(y, n, r));
        }
        ((y = { type: 'stylesheet', instance: y, count: 1, state: T }),
          c.set(d, y));
      }
    }
  }
  function lx(e, n) {
    zn.X(e, n);
    var i = wi;
    if (i && e) {
      var r = Ia(i).hoistableScripts,
        c = Oi(e),
        d = r.get(c);
      d ||
        ((d = i.querySelector(zs(c))),
        d ||
          ((e = g({ src: e, async: !0 }, n)),
          (n = Kt.get(c)) && Oc(e, n),
          (d = i.createElement('script')),
          et(d),
          ot(d, 'link', e),
          i.head.appendChild(d)),
        (d = { type: 'script', instance: d, count: 1, state: null }),
        r.set(c, d));
    }
  }
  function rx(e, n) {
    zn.M(e, n);
    var i = wi;
    if (i && e) {
      var r = Ia(i).hoistableScripts,
        c = Oi(e),
        d = r.get(c);
      d ||
        ((d = i.querySelector(zs(c))),
        d ||
          ((e = g({ src: e, async: !0, type: 'module' }, n)),
          (n = Kt.get(c)) && Oc(e, n),
          (d = i.createElement('script')),
          et(d),
          ot(d, 'link', e),
          i.head.appendChild(d)),
        (d = { type: 'script', instance: d, count: 1, state: null }),
        r.set(c, d));
    }
  }
  function pg(e, n, i, r) {
    var c = (c = ve.current) ? br(c) : null;
    if (!c) throw Error(l(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof i.precedence == 'string' && typeof i.href == 'string' ?
            ((n = Di(i.href)),
            (i = Ia(c).hoistableStyles),
            (r = i.get(n)),
            r ||
              ((r = { type: 'style', instance: null, count: 0, state: null }),
              i.set(n, r)),
            r)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          i.rel === 'stylesheet' &&
          typeof i.href == 'string' &&
          typeof i.precedence == 'string'
        ) {
          e = Di(i.href);
          var d = Ia(c).hoistableStyles,
            y = d.get(e);
          if (
            (y ||
              ((c = c.ownerDocument || c),
              (y = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              d.set(e, y),
              (d = c.querySelector(Ls(e))) &&
                !d._p &&
                ((y.instance = d), (y.state.loading = 5)),
              Kt.has(e) ||
                ((i = {
                  rel: 'preload',
                  as: 'style',
                  href: i.href,
                  crossOrigin: i.crossOrigin,
                  integrity: i.integrity,
                  media: i.media,
                  hrefLang: i.hrefLang,
                  referrerPolicy: i.referrerPolicy,
                }),
                Kt.set(e, i),
                d || ox(c, e, i, y.state))),
            n && r === null)
          )
            throw Error(l(528, ''));
          return y;
        }
        if (n && r !== null) throw Error(l(529, ''));
        return null;
      case 'script':
        return (
          (n = i.async),
          (i = i.src),
          (
            typeof i == 'string' &&
            n &&
            typeof n != 'function' &&
            typeof n != 'symbol'
          ) ?
            ((n = Oi(i)),
            (i = Ia(c).hoistableScripts),
            (r = i.get(n)),
            r ||
              ((r = { type: 'script', instance: null, count: 0, state: null }),
              i.set(n, r)),
            r)
          : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(l(444, e));
    }
  }
  function Di(e) {
    return 'href="' + Ht(e) + '"';
  }
  function Ls(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function gg(e) {
    return g({}, e, { 'data-precedence': e.precedence, 'precedence': null });
  }
  function ox(e, n, i, r) {
    e.querySelector('link[rel="preload"][as="style"][' + n + ']') ?
      (r.loading = 1)
    : ((n = e.createElement('link')),
      (r.preload = n),
      n.addEventListener('load', function () {
        return (r.loading |= 1);
      }),
      n.addEventListener('error', function () {
        return (r.loading |= 2);
      }),
      ot(n, 'link', i),
      et(n),
      e.head.appendChild(n));
  }
  function Oi(e) {
    return '[src="' + Ht(e) + '"]';
  }
  function zs(e) {
    return 'script[async]' + e;
  }
  function vg(e, n, i) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case 'style':
          var r = e.querySelector('style[data-href~="' + Ht(i.href) + '"]');
          if (r) return ((n.instance = r), et(r), r);
          var c = g({}, i, {
            'data-href': i.href,
            'data-precedence': i.precedence,
            'href': null,
            'precedence': null,
          });
          return (
            (r = (e.ownerDocument || e).createElement('style')),
            et(r),
            ot(r, 'style', c),
            Sr(r, i.precedence, e),
            (n.instance = r)
          );
        case 'stylesheet':
          c = Di(i.href);
          var d = e.querySelector(Ls(c));
          if (d) return ((n.state.loading |= 4), (n.instance = d), et(d), d);
          ((r = gg(i)),
            (c = Kt.get(c)) && Dc(r, c),
            (d = (e.ownerDocument || e).createElement('link')),
            et(d));
          var y = d;
          return (
            (y._p = new Promise(function (T, O) {
              ((y.onload = T), (y.onerror = O));
            })),
            ot(d, 'link', r),
            (n.state.loading |= 4),
            Sr(d, i.precedence, e),
            (n.instance = d)
          );
        case 'script':
          return (
            (d = Oi(i.src)),
            (c = e.querySelector(zs(d))) ?
              ((n.instance = c), et(c), c)
            : ((r = i),
              (c = Kt.get(d)) && ((r = g({}, i)), Oc(r, c)),
              (e = e.ownerDocument || e),
              (c = e.createElement('script')),
              et(c),
              ot(c, 'link', r),
              e.head.appendChild(c),
              (n.instance = c))
          );
        case 'void':
          return null;
        default:
          throw Error(l(443, n.type));
      }
    else
      n.type === 'stylesheet' &&
        (n.state.loading & 4) === 0 &&
        ((r = n.instance), (n.state.loading |= 4), Sr(r, i.precedence, e));
    return n.instance;
  }
  function Sr(e, n, i) {
    for (
      var r = i.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        c = r.length ? r[r.length - 1] : null,
        d = c,
        y = 0;
      y < r.length;
      y++
    ) {
      var T = r[y];
      if (T.dataset.precedence === n) d = T;
      else if (d !== c) break;
    }
    d ?
      d.parentNode.insertBefore(e, d.nextSibling)
    : ((n = i.nodeType === 9 ? i.head : i), n.insertBefore(e, n.firstChild));
  }
  function Dc(e, n) {
    (e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.title == null && (e.title = n.title));
  }
  function Oc(e, n) {
    (e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.integrity == null && (e.integrity = n.integrity));
  }
  var xr = null;
  function yg(e, n, i) {
    if (xr === null) {
      var r = new Map(),
        c = (xr = new Map());
      c.set(i, r);
    } else ((c = xr), (r = c.get(i)), r || ((r = new Map()), c.set(i, r)));
    if (r.has(e)) return r;
    for (
      r.set(e, null), i = i.getElementsByTagName(e), c = 0;
      c < i.length;
      c++
    ) {
      var d = i[c];
      if (
        !(
          d[Ii] ||
          d[it] ||
          (e === 'link' && d.getAttribute('rel') === 'stylesheet')
        ) &&
        d.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var y = d.getAttribute(n) || '';
        y = e + y;
        var T = r.get(y);
        T ? T.push(d) : r.set(y, [d]);
      }
    }
    return r;
  }
  function bg(e, n, i) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        i,
        n === 'title' ? e.querySelector('head > title') : null,
      ));
  }
  function ux(e, n, i) {
    if (i === 1 || n.itemProp != null) return !1;
    switch (e) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (
          typeof n.precedence != 'string' ||
          typeof n.href != 'string' ||
          n.href === ''
        )
          break;
        return !0;
      case 'link':
        if (
          typeof n.rel != 'string' ||
          typeof n.href != 'string' ||
          n.href === '' ||
          n.onLoad ||
          n.onError
        )
          break;
        return n.rel === 'stylesheet' ?
            ((e = n.disabled), typeof n.precedence == 'string' && e == null)
          : !0;
      case 'script':
        if (
          n.async &&
          typeof n.async != 'function' &&
          typeof n.async != 'symbol' &&
          !n.onLoad &&
          !n.onError &&
          n.src &&
          typeof n.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function Sg(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  function cx(e, n, i, r) {
    if (
      i.type === 'stylesheet' &&
      (typeof r.media != 'string' || matchMedia(r.media).matches !== !1) &&
      (i.state.loading & 4) === 0
    ) {
      if (i.instance === null) {
        var c = Di(r.href),
          d = n.querySelector(Ls(c));
        if (d) {
          ((n = d._p),
            n !== null &&
              typeof n == 'object' &&
              typeof n.then == 'function' &&
              (e.count++, (e = Tr.bind(e)), n.then(e, e)),
            (i.state.loading |= 4),
            (i.instance = d),
            et(d));
          return;
        }
        ((d = n.ownerDocument || n),
          (r = gg(r)),
          (c = Kt.get(c)) && Dc(r, c),
          (d = d.createElement('link')),
          et(d));
        var y = d;
        ((y._p = new Promise(function (T, O) {
          ((y.onload = T), (y.onerror = O));
        })),
          ot(d, 'link', r),
          (i.instance = d));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(i, n),
        (n = i.state.preload) &&
          (i.state.loading & 3) === 0 &&
          (e.count++,
          (i = Tr.bind(e)),
          n.addEventListener('load', i),
          n.addEventListener('error', i)));
    }
  }
  var Nc = 0;
  function fx(e, n) {
    return (
      e.stylesheets && e.count === 0 && Er(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount ?
        function (i) {
          var r = setTimeout(function () {
            if ((e.stylesheets && Er(e, e.stylesheets), e.unsuspend)) {
              var d = e.unsuspend;
              ((e.unsuspend = null), d());
            }
          }, 6e4 + n);
          0 < e.imgBytes && Nc === 0 && (Nc = 62500 * XS());
          var c = setTimeout(
            function () {
              if (
                ((e.waitingForImages = !1),
                e.count === 0 &&
                  (e.stylesheets && Er(e, e.stylesheets), e.unsuspend))
              ) {
                var d = e.unsuspend;
                ((e.unsuspend = null), d());
              }
            },
            (e.imgBytes > Nc ? 50 : 800) + n,
          );
          return (
            (e.unsuspend = i),
            function () {
              ((e.unsuspend = null), clearTimeout(r), clearTimeout(c));
            }
          );
        }
      : null
    );
  }
  function Tr() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Er(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var _r = null;
  function Er(e, n) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (_r = new Map()),
        n.forEach(dx, e),
        (_r = null),
        Tr.call(e)));
  }
  function dx(e, n) {
    if (!(n.state.loading & 4)) {
      var i = _r.get(e);
      if (i) var r = i.get(null);
      else {
        ((i = new Map()), _r.set(e, i));
        for (
          var c = e.querySelectorAll(
              'link[data-precedence],style[data-precedence]',
            ),
            d = 0;
          d < c.length;
          d++
        ) {
          var y = c[d];
          (y.nodeName === 'LINK' || y.getAttribute('media') !== 'not all') &&
            (i.set(y.dataset.precedence, y), (r = y));
        }
        r && i.set(null, r);
      }
      ((c = n.instance),
        (y = c.getAttribute('data-precedence')),
        (d = i.get(y) || r),
        d === r && i.set(null, c),
        i.set(y, c),
        this.count++,
        (r = Tr.bind(this)),
        c.addEventListener('load', r),
        c.addEventListener('error', r),
        d ?
          d.parentNode.insertBefore(c, d.nextSibling)
        : ((e = e.nodeType === 9 ? e.head : e),
          e.insertBefore(c, e.firstChild)),
        (n.state.loading |= 4));
    }
  }
  var Vs = {
    $$typeof: w,
    Provider: null,
    Consumer: null,
    _currentValue: q,
    _currentValue2: q,
    _threadCount: 0,
  };
  function hx(e, n, i, r, c, d, y, T, O) {
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
      (this.expirationTimes = Ao(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ao(0)),
      (this.hiddenUpdates = Ao(null)),
      (this.identifierPrefix = r),
      (this.onUncaughtError = c),
      (this.onCaughtError = d),
      (this.onRecoverableError = y),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = O),
      (this.incompleteTransitions = new Map()));
  }
  function xg(e, n, i, r, c, d, y, T, O, B, Y, K) {
    return (
      (e = new hx(e, n, i, y, O, B, Y, K, T)),
      (n = 1),
      d === !0 && (n |= 24),
      (d = Nt(3, null, null, n)),
      (e.current = d),
      (d.stateNode = e),
      (n = cu()),
      n.refCount++,
      (e.pooledCache = n),
      n.refCount++,
      (d.memoizedState = { element: r, isDehydrated: i, cache: n }),
      mu(d),
      e
    );
  }
  function Tg(e) {
    return e ? ((e = ri), e) : ri;
  }
  function _g(e, n, i, r, c, d) {
    ((c = Tg(c)),
      r.context === null ? (r.context = c) : (r.pendingContext = c),
      (r = Zn(n)),
      (r.payload = { element: i }),
      (d = d === void 0 ? null : d),
      d !== null && (r.callback = d),
      (i = $n(e, r, n)),
      i !== null && (At(i, e, n), ms(i, e, n)));
  }
  function Eg(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < n ? i : n;
    }
  }
  function Rc(e, n) {
    (Eg(e, n), (e = e.alternate) && Eg(e, n));
  }
  function Cg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var n = Ea(e, 67108864);
      (n !== null && At(n, e, 67108864), Rc(e, 67108864));
    }
  }
  function Ag(e) {
    if (e.tag === 13 || e.tag === 31) {
      var n = Vt();
      n = Mo(n);
      var i = Ea(e, n);
      (i !== null && At(i, e, n), Rc(e, n));
    }
  }
  var Cr = !0;
  function mx(e, n, i, r) {
    var c = G.T;
    G.T = null;
    var d = k.p;
    try {
      ((k.p = 2), jc(e, n, i, r));
    } finally {
      ((k.p = d), (G.T = c));
    }
  }
  function px(e, n, i, r) {
    var c = G.T;
    G.T = null;
    var d = k.p;
    try {
      ((k.p = 8), jc(e, n, i, r));
    } finally {
      ((k.p = d), (G.T = c));
    }
  }
  function jc(e, n, i, r) {
    if (Cr) {
      var c = Lc(r);
      if (c === null) (bc(e, n, r, Ar, i), wg(e, r));
      else if (vx(c, e, n, i, r)) r.stopPropagation();
      else if ((wg(e, r), n & 4 && -1 < gx.indexOf(e))) {
        for (; c !== null; ) {
          var d = $a(c);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (((d = d.stateNode), d.current.memoizedState.isDehydrated)) {
                  var y = ba(d.pendingLanes);
                  if (y !== 0) {
                    var T = d;
                    for (T.pendingLanes |= 2, T.entangledLanes |= 2; y; ) {
                      var O = 1 << (31 - Dt(y));
                      ((T.entanglements[1] |= O), (y &= ~O));
                    }
                    (fn(d), (Ce & 6) === 0 && ((or = Mt() + 500), Os(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((T = Ea(d, 2)), T !== null && At(T, d, 2), cr(), Rc(d, 2));
            }
          if (((d = Lc(r)), d === null && bc(e, n, r, Ar, i), d === c)) break;
          c = d;
        }
        c !== null && r.stopPropagation();
      } else bc(e, n, r, null, i);
    }
  }
  function Lc(e) {
    return ((e = Vo(e)), zc(e));
  }
  var Ar = null;
  function zc(e) {
    if (((Ar = null), (e = Za(e)), e !== null)) {
      var n = u(e);
      if (n === null) e = null;
      else {
        var i = n.tag;
        if (i === 13) {
          if (((e = f(n)), e !== null)) return e;
          e = null;
        } else if (i === 31) {
          if (((e = p(n)), e !== null)) return e;
          e = null;
        } else if (i === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return ((Ar = e), null);
  }
  function Mg(e) {
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
        switch (tb()) {
          case zd:
            return 2;
          case Vd:
            return 8;
          case pl:
          case nb:
            return 32;
          case Bd:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Vc = !1,
    ra = null,
    oa = null,
    ua = null,
    Bs = new Map(),
    Us = new Map(),
    ca = [],
    gx =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      );
  function wg(e, n) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        ra = null;
        break;
      case 'dragenter':
      case 'dragleave':
        oa = null;
        break;
      case 'mouseover':
      case 'mouseout':
        ua = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Bs.delete(n.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Us.delete(n.pointerId);
    }
  }
  function Hs(e, n, i, r, c, d) {
    return e === null || e.nativeEvent !== d ?
        ((e = {
          blockedOn: n,
          domEventName: i,
          eventSystemFlags: r,
          nativeEvent: d,
          targetContainers: [c],
        }),
        n !== null && ((n = $a(n)), n !== null && Cg(n)),
        e)
      : ((e.eventSystemFlags |= r),
        (n = e.targetContainers),
        c !== null && n.indexOf(c) === -1 && n.push(c),
        e);
  }
  function vx(e, n, i, r, c) {
    switch (n) {
      case 'focusin':
        return ((ra = Hs(ra, e, n, i, r, c)), !0);
      case 'dragenter':
        return ((oa = Hs(oa, e, n, i, r, c)), !0);
      case 'mouseover':
        return ((ua = Hs(ua, e, n, i, r, c)), !0);
      case 'pointerover':
        var d = c.pointerId;
        return (Bs.set(d, Hs(Bs.get(d) || null, e, n, i, r, c)), !0);
      case 'gotpointercapture':
        return (
          (d = c.pointerId),
          Us.set(d, Hs(Us.get(d) || null, e, n, i, r, c)),
          !0
        );
    }
    return !1;
  }
  function Dg(e) {
    var n = Za(e.target);
    if (n !== null) {
      var i = u(n);
      if (i !== null) {
        if (((n = i.tag), n === 13)) {
          if (((n = f(i)), n !== null)) {
            ((e.blockedOn = n),
              qd(e.priority, function () {
                Ag(i);
              }));
            return;
          }
        } else if (n === 31) {
          if (((n = p(i)), n !== null)) {
            ((e.blockedOn = n),
              qd(e.priority, function () {
                Ag(i);
              }));
            return;
          }
        } else if (n === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Mr(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var i = Lc(e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var r = new i.constructor(i.type, i);
        ((zo = r), i.target.dispatchEvent(r), (zo = null));
      } else return ((n = $a(i)), n !== null && Cg(n), (e.blockedOn = i), !1);
      n.shift();
    }
    return !0;
  }
  function Og(e, n, i) {
    Mr(e) && i.delete(n);
  }
  function yx() {
    ((Vc = !1),
      ra !== null && Mr(ra) && (ra = null),
      oa !== null && Mr(oa) && (oa = null),
      ua !== null && Mr(ua) && (ua = null),
      Bs.forEach(Og),
      Us.forEach(Og));
  }
  function wr(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      Vc ||
        ((Vc = !0),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, yx)));
  }
  var Dr = null;
  function Ng(e) {
    Dr !== e &&
      ((Dr = e),
      t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
        Dr === e && (Dr = null);
        for (var n = 0; n < e.length; n += 3) {
          var i = e[n],
            r = e[n + 1],
            c = e[n + 2];
          if (typeof r != 'function') {
            if (zc(r || i) === null) continue;
            break;
          }
          var d = $a(i);
          d !== null &&
            (e.splice(n, 3),
            (n -= 3),
            Lu(d, { pending: !0, data: c, method: i.method, action: r }, r, c));
        }
      }));
  }
  function Ni(e) {
    function n(O) {
      return wr(O, e);
    }
    (ra !== null && wr(ra, e),
      oa !== null && wr(oa, e),
      ua !== null && wr(ua, e),
      Bs.forEach(n),
      Us.forEach(n));
    for (var i = 0; i < ca.length; i++) {
      var r = ca[i];
      r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < ca.length && ((i = ca[0]), i.blockedOn === null); )
      (Dg(i), i.blockedOn === null && ca.shift());
    if (((i = (e.ownerDocument || e).$$reactFormReplay), i != null))
      for (r = 0; r < i.length; r += 3) {
        var c = i[r],
          d = i[r + 1],
          y = c[St] || null;
        if (typeof d == 'function') y || Ng(i);
        else if (y) {
          var T = null;
          if (d && d.hasAttribute('formAction')) {
            if (((c = d), (y = d[St] || null))) T = y.formAction;
            else if (zc(c) !== null) continue;
          } else T = y.action;
          (typeof T == 'function' ? (i[r + 1] = T) : (i.splice(r, 3), (r -= 3)),
            Ng(i));
        }
      }
  }
  function Rg() {
    function e(d) {
      d.canIntercept &&
        d.info === 'react-transition' &&
        d.intercept({
          handler: function () {
            return new Promise(function (y) {
              return (c = y);
            });
          },
          focusReset: 'manual',
          scroll: 'manual',
        });
    }
    function n() {
      (c !== null && (c(), (c = null)), r || setTimeout(i, 20));
    }
    function i() {
      if (!r && !navigation.transition) {
        var d = navigation.currentEntry;
        d &&
          d.url != null &&
          navigation.navigate(d.url, {
            state: d.getState(),
            info: 'react-transition',
            history: 'replace',
          });
      }
    }
    if (typeof navigation == 'object') {
      var r = !1,
        c = null;
      return (
        navigation.addEventListener('navigate', e),
        navigation.addEventListener('navigatesuccess', n),
        navigation.addEventListener('navigateerror', n),
        setTimeout(i, 100),
        function () {
          ((r = !0),
            navigation.removeEventListener('navigate', e),
            navigation.removeEventListener('navigatesuccess', n),
            navigation.removeEventListener('navigateerror', n),
            c !== null && (c(), (c = null)));
        }
      );
    }
  }
  function Bc(e) {
    this._internalRoot = e;
  }
  ((Or.prototype.render = Bc.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(l(409));
      var i = n.current,
        r = Vt();
      _g(i, r, e, n, null, null);
    }),
    (Or.prototype.unmount = Bc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          (_g(e.current, 2, null, e, null, null), cr(), (n[Fa] = null));
        }
      }));
  function Or(e) {
    this._internalRoot = e;
  }
  Or.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = kd();
      e = { blockedOn: null, target: e, priority: n };
      for (var i = 0; i < ca.length && n !== 0 && n < ca[i].priority; i++);
      (ca.splice(i, 0, e), i === 0 && Dg(e));
    }
  };
  var jg = a.version;
  if (jg !== '19.2.4') throw Error(l(527, jg, '19.2.4'));
  k.findDOMNode = function (e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == 'function' ?
          Error(l(188))
        : ((e = Object.keys(e).join(',')), Error(l(268, e)));
    return (
      (e = m(n)),
      (e = e !== null ? v(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var bx = {
    bundleType: 0,
    version: '19.2.4',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: G,
    reconcilerVersion: '19.2.4',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Nr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Nr.isDisabled && Nr.supportsFiber)
      try {
        ((Fi = Nr.inject(bx)), (wt = Nr));
      } catch {}
  }
  return (
    (Gs.createRoot = function (e, n) {
      if (!o(e)) throw Error(l(299));
      var i = !1,
        r = '',
        c = Pm,
        d = Gm,
        y = km;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (c = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (y = n.onRecoverableError)),
        (n = xg(e, 1, !1, null, null, i, r, null, c, d, y, Rg)),
        (e[Fa] = n.current),
        yc(e),
        new Bc(n)
      );
    }),
    (Gs.hydrateRoot = function (e, n, i) {
      if (!o(e)) throw Error(l(299));
      var r = !1,
        c = '',
        d = Pm,
        y = Gm,
        T = km,
        O = null;
      return (
        i != null &&
          (i.unstable_strictMode === !0 && (r = !0),
          i.identifierPrefix !== void 0 && (c = i.identifierPrefix),
          i.onUncaughtError !== void 0 && (d = i.onUncaughtError),
          i.onCaughtError !== void 0 && (y = i.onCaughtError),
          i.onRecoverableError !== void 0 && (T = i.onRecoverableError),
          i.formState !== void 0 && (O = i.formState)),
        (n = xg(e, 1, !0, n, i ?? null, r, c, O, d, y, T, Rg)),
        (n.context = Tg(null)),
        (i = n.current),
        (r = Vt()),
        (r = Mo(r)),
        (c = Zn(r)),
        (c.callback = null),
        $n(i, c, r),
        (i = r),
        (n.current.lanes = i),
        $i(n, i),
        fn(n),
        (e[Fa] = n.current),
        yc(e),
        new Or(n)
      );
    }),
    (Gs.version = '19.2.4'),
    Gs
  );
}
var qg;
function Dx() {
  if (qg) return Hc.exports;
  qg = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (a) {
        console.error(a);
      }
  }
  return (t(), (Hc.exports = wx()), Hc.exports);
}
var Ox = Dx(),
  D = Kf();
const We = by(D);
var Yg = 'popstate';
function Nx(t = {}) {
  function a(o, u) {
    let {
      pathname: f = '/',
      search: p = '',
      hash: h = '',
    } = Ka(o.location.hash.substring(1));
    return (
      !f.startsWith('/') && !f.startsWith('.') && (f = '/' + f),
      bf(
        '',
        { pathname: f, search: p, hash: h },
        (u.state && u.state.usr) || null,
        (u.state && u.state.key) || 'default',
      )
    );
  }
  function s(o, u) {
    let f = o.document.querySelector('base'),
      p = '';
    if (f && f.getAttribute('href')) {
      let h = o.location.href,
        m = h.indexOf('#');
      p = m === -1 ? h : h.slice(0, m);
    }
    return p + '#' + (typeof u == 'string' ? u : Ws(u));
  }
  function l(o, u) {
    rn(
      o.pathname.charAt(0) === '/',
      `relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`,
    );
  }
  return jx(a, s, l, t);
}
function Ue(t, a) {
  if (t === !1 || t === null || typeof t > 'u') throw new Error(a);
}
function rn(t, a) {
  if (!t) {
    typeof console < 'u' && console.warn(a);
    try {
      throw new Error(a);
    } catch {}
  }
}
function Rx() {
  return Math.random().toString(36).substring(2, 10);
}
function Xg(t, a) {
  return { usr: t.state, key: t.key, idx: a };
}
function bf(t, a, s = null, l) {
  return {
    pathname: typeof t == 'string' ? t : t.pathname,
    search: '',
    hash: '',
    ...(typeof a == 'string' ? Ka(a) : a),
    state: s,
    key: (a && a.key) || l || Rx(),
  };
}
function Ws({ pathname: t = '/', search: a = '', hash: s = '' }) {
  return (
    a && a !== '?' && (t += a.charAt(0) === '?' ? a : '?' + a),
    s && s !== '#' && (t += s.charAt(0) === '#' ? s : '#' + s),
    t
  );
}
function Ka(t) {
  let a = {};
  if (t) {
    let s = t.indexOf('#');
    s >= 0 && ((a.hash = t.substring(s)), (t = t.substring(0, s)));
    let l = t.indexOf('?');
    (l >= 0 && ((a.search = t.substring(l)), (t = t.substring(0, l))),
      t && (a.pathname = t));
  }
  return a;
}
function jx(t, a, s, l = {}) {
  let { window: o = document.defaultView, v5Compat: u = !1 } = l,
    f = o.history,
    p = 'POP',
    h = null,
    m = v();
  m == null && ((m = 0), f.replaceState({ ...f.state, idx: m }, ''));
  function v() {
    return (f.state || { idx: null }).idx;
  }
  function g() {
    p = 'POP';
    let M = v(),
      _ = M == null ? null : M - m;
    ((m = M), h && h({ action: p, location: E.location, delta: _ }));
  }
  function x(M, _) {
    p = 'PUSH';
    let C = bf(E.location, M, _);
    (s && s(C, M), (m = v() + 1));
    let w = Xg(C, m),
      U = E.createHref(C);
    try {
      f.pushState(w, '', U);
    } catch (V) {
      if (V instanceof DOMException && V.name === 'DataCloneError') throw V;
      o.location.assign(U);
    }
    u && h && h({ action: p, location: E.location, delta: 1 });
  }
  function b(M, _) {
    p = 'REPLACE';
    let C = bf(E.location, M, _);
    (s && s(C, M), (m = v()));
    let w = Xg(C, m),
      U = E.createHref(C);
    (f.replaceState(w, '', U),
      u && h && h({ action: p, location: E.location, delta: 0 }));
  }
  function A(M) {
    return Lx(M);
  }
  let E = {
    get action() {
      return p;
    },
    get location() {
      return t(o, f);
    },
    listen(M) {
      if (h) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(Yg, g),
        (h = M),
        () => {
          (o.removeEventListener(Yg, g), (h = null));
        }
      );
    },
    createHref(M) {
      return a(o, M);
    },
    createURL: A,
    encodeLocation(M) {
      let _ = A(M);
      return { pathname: _.pathname, search: _.search, hash: _.hash };
    },
    push: x,
    replace: b,
    go(M) {
      return f.go(M);
    },
  };
  return E;
}
function Lx(t, a = !1) {
  let s = 'http://localhost';
  (typeof window < 'u' &&
    (s =
      window.location.origin !== 'null' ?
        window.location.origin
      : window.location.href),
    Ue(s, 'No window.location.(origin|href) available to create URL'));
  let l = typeof t == 'string' ? t : Ws(t);
  return (
    (l = l.replace(/ $/, '%20')),
    !a && l.startsWith('//') && (l = s + l),
    new URL(l, s)
  );
}
function Sy(t, a, s = '/') {
  return zx(t, a, s, !1);
}
function zx(t, a, s, l) {
  let o = typeof a == 'string' ? Ka(a) : a,
    u = Hn(o.pathname || '/', s);
  if (u == null) return null;
  let f = xy(t);
  Vx(f);
  let p = null;
  for (let h = 0; p == null && h < f.length; ++h) {
    let m = Kx(u);
    p = Xx(f[h], m, l);
  }
  return p;
}
function xy(t, a = [], s = [], l = '', o = !1) {
  let u = (f, p, h = o, m) => {
    let v = {
      relativePath: m === void 0 ? f.path || '' : m,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: p,
      route: f,
    };
    if (v.relativePath.startsWith('/')) {
      if (!v.relativePath.startsWith(l) && h) return;
      (Ue(
        v.relativePath.startsWith(l),
        `Absolute route path "${v.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (v.relativePath = v.relativePath.slice(l.length)));
    }
    let g = Un([l, v.relativePath]),
      x = s.concat(v);
    (f.children &&
      f.children.length > 0 &&
      (Ue(
        f.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${g}".`,
      ),
      xy(f.children, a, x, g, h)),
      !(f.path == null && !f.index) &&
        a.push({ path: g, score: qx(g, f.index), routesMeta: x }));
  };
  return (
    t.forEach((f, p) => {
      if (f.path === '' || !f.path?.includes('?')) u(f, p);
      else for (let h of Ty(f.path)) u(f, p, !0, h);
    }),
    a
  );
}
function Ty(t) {
  let a = t.split('/');
  if (a.length === 0) return [];
  let [s, ...l] = a,
    o = s.endsWith('?'),
    u = s.replace(/\?$/, '');
  if (l.length === 0) return o ? [u, ''] : [u];
  let f = Ty(l.join('/')),
    p = [];
  return (
    p.push(...f.map((h) => (h === '' ? u : [u, h].join('/')))),
    o && p.push(...f),
    p.map((h) => (t.startsWith('/') && h === '' ? '/' : h))
  );
}
function Vx(t) {
  t.sort((a, s) =>
    a.score !== s.score ?
      s.score - a.score
    : Yx(
        a.routesMeta.map((l) => l.childrenIndex),
        s.routesMeta.map((l) => l.childrenIndex),
      ),
  );
}
var Bx = /^:[\w-]+$/,
  Ux = 3,
  Hx = 2,
  Px = 1,
  Gx = 10,
  kx = -2,
  Qg = (t) => t === '*';
function qx(t, a) {
  let s = t.split('/'),
    l = s.length;
  return (
    s.some(Qg) && (l += kx),
    a && (l += Hx),
    s
      .filter((o) => !Qg(o))
      .reduce(
        (o, u) =>
          o +
          (Bx.test(u) ? Ux
          : u === '' ? Px
          : Gx),
        l,
      )
  );
}
function Yx(t, a) {
  return t.length === a.length && t.slice(0, -1).every((l, o) => l === a[o]) ?
      t[t.length - 1] - a[a.length - 1]
    : 0;
}
function Xx(t, a, s = !1) {
  let { routesMeta: l } = t,
    o = {},
    u = '/',
    f = [];
  for (let p = 0; p < l.length; ++p) {
    let h = l[p],
      m = p === l.length - 1,
      v = u === '/' ? a : a.slice(u.length) || '/',
      g = $r(
        { path: h.relativePath, caseSensitive: h.caseSensitive, end: m },
        v,
      ),
      x = h.route;
    if (
      (!g &&
        m &&
        s &&
        !l[l.length - 1].route.index &&
        (g = $r(
          { path: h.relativePath, caseSensitive: h.caseSensitive, end: !1 },
          v,
        )),
      !g)
    )
      return null;
    (Object.assign(o, g.params),
      f.push({
        params: o,
        pathname: Un([u, g.pathname]),
        pathnameBase: Ix(Un([u, g.pathnameBase])),
        route: x,
      }),
      g.pathnameBase !== '/' && (u = Un([u, g.pathnameBase])));
  }
  return f;
}
function $r(t, a) {
  typeof t == 'string' && (t = { path: t, caseSensitive: !1, end: !0 });
  let [s, l] = Qx(t.path, t.caseSensitive, t.end),
    o = a.match(s);
  if (!o) return null;
  let u = o[0],
    f = u.replace(/(.)\/+$/, '$1'),
    p = o.slice(1);
  return {
    params: l.reduce((m, { paramName: v, isOptional: g }, x) => {
      if (v === '*') {
        let A = p[x] || '';
        f = u.slice(0, u.length - A.length).replace(/(.)\/+$/, '$1');
      }
      const b = p[x];
      return (
        g && !b ? (m[v] = void 0) : (m[v] = (b || '').replace(/%2F/g, '/')),
        m
      );
    }, {}),
    pathname: u,
    pathnameBase: f,
    pattern: t,
  };
}
function Qx(t, a = !1, s = !0) {
  rn(
    t === '*' || !t.endsWith('*') || t.endsWith('/*'),
    `Route path "${t}" will be treated as if it were "${t.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/, '/*')}".`,
  );
  let l = [],
    o =
      '^' +
      t
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (f, p, h) => (
            l.push({ paramName: p, isOptional: h != null }),
            h ? '/?([^\\/]+)?' : '/([^\\/]+)'
          ),
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2');
  return (
    t.endsWith('*') ?
      (l.push({ paramName: '*' }),
      (o += t === '*' || t === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
    : s ? (o += '\\/*$')
    : t !== '' && t !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, a ? void 0 : 'i'), l]
  );
}
function Kx(t) {
  try {
    return t
      .split('/')
      .map((a) => decodeURIComponent(a).replace(/\//g, '%2F'))
      .join('/');
  } catch (a) {
    return (
      rn(
        !1,
        `The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`,
      ),
      t
    );
  }
}
function Hn(t, a) {
  if (a === '/') return t;
  if (!t.toLowerCase().startsWith(a.toLowerCase())) return null;
  let s = a.endsWith('/') ? a.length - 1 : a.length,
    l = t.charAt(s);
  return l && l !== '/' ? null : t.slice(s) || '/';
}
var Fx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Zx(t, a = '/') {
  let {
      pathname: s,
      search: l = '',
      hash: o = '',
    } = typeof t == 'string' ? Ka(t) : t,
    u;
  return (
    s ?
      ((s = s.replace(/\/\/+/g, '/')),
      s.startsWith('/') ? (u = Kg(s.substring(1), '/')) : (u = Kg(s, a)))
    : (u = a),
    { pathname: u, search: Jx(l), hash: Wx(o) }
  );
}
function Kg(t, a) {
  let s = a.replace(/\/+$/, '').split('/');
  return (
    t.split('/').forEach((o) => {
      o === '..' ? s.length > 1 && s.pop() : o !== '.' && s.push(o);
    }),
    s.length > 1 ? s.join('/') : '/'
  );
}
function Yc(t, a, s, l) {
  return `Cannot include a '${t}' character in a manually specified \`to.${a}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function $x(t) {
  return t.filter(
    (a, s) => s === 0 || (a.route.path && a.route.path.length > 0),
  );
}
function _y(t) {
  let a = $x(t);
  return a.map((s, l) => (l === a.length - 1 ? s.pathname : s.pathnameBase));
}
function Ey(t, a, s, l = !1) {
  let o;
  typeof t == 'string' ?
    (o = Ka(t))
  : ((o = { ...t }),
    Ue(
      !o.pathname || !o.pathname.includes('?'),
      Yc('?', 'pathname', 'search', o),
    ),
    Ue(
      !o.pathname || !o.pathname.includes('#'),
      Yc('#', 'pathname', 'hash', o),
    ),
    Ue(!o.search || !o.search.includes('#'), Yc('#', 'search', 'hash', o)));
  let u = t === '' || o.pathname === '',
    f = u ? '/' : o.pathname,
    p;
  if (f == null) p = s;
  else {
    let g = a.length - 1;
    if (!l && f.startsWith('..')) {
      let x = f.split('/');
      for (; x[0] === '..'; ) (x.shift(), (g -= 1));
      o.pathname = x.join('/');
    }
    p = g >= 0 ? a[g] : '/';
  }
  let h = Zx(o, p),
    m = f && f !== '/' && f.endsWith('/'),
    v = (u || f === '.') && s.endsWith('/');
  return (!h.pathname.endsWith('/') && (m || v) && (h.pathname += '/'), h);
}
var Un = (t) => t.join('/').replace(/\/\/+/g, '/'),
  Ix = (t) => t.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Jx = (t) =>
    !t || t === '?' ? ''
    : t.startsWith('?') ? t
    : '?' + t,
  Wx = (t) =>
    !t || t === '#' ? ''
    : t.startsWith('#') ? t
    : '#' + t,
  eT = class {
    constructor(t, a, s, l = !1) {
      ((this.status = t),
        (this.statusText = a || ''),
        (this.internal = l),
        s instanceof Error ?
          ((this.data = s.toString()), (this.error = s))
        : (this.data = s));
    }
  };
function tT(t) {
  return (
    t != null &&
    typeof t.status == 'number' &&
    typeof t.statusText == 'string' &&
    typeof t.internal == 'boolean' &&
    'data' in t
  );
}
function nT(t) {
  return (
    t
      .map((a) => a.route.path)
      .filter(Boolean)
      .join('/')
      .replace(/\/\/*/g, '/') || '/'
  );
}
var Cy =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
function Ay(t, a) {
  let s = t;
  if (typeof s != 'string' || !Fx.test(s))
    return { absoluteURL: void 0, isExternal: !1, to: s };
  let l = s,
    o = !1;
  if (Cy)
    try {
      let u = new URL(window.location.href),
        f = s.startsWith('//') ? new URL(u.protocol + s) : new URL(s),
        p = Hn(f.pathname, a);
      f.origin === u.origin && p != null ?
        (s = p + f.search + f.hash)
      : (o = !0);
    } catch {
      rn(
        !1,
        `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: l, isExternal: o, to: s };
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var My = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(My);
var aT = ['GET', ...My];
new Set(aT);
var qi = D.createContext(null);
qi.displayName = 'DataRouter';
var co = D.createContext(null);
co.displayName = 'DataRouterState';
var iT = D.createContext(!1),
  wy = D.createContext({ isTransitioning: !1 });
wy.displayName = 'ViewTransition';
var sT = D.createContext(new Map());
sT.displayName = 'Fetchers';
var lT = D.createContext(null);
lT.displayName = 'Await';
var It = D.createContext(null);
It.displayName = 'Navigation';
var ll = D.createContext(null);
ll.displayName = 'Location';
var vn = D.createContext({ outlet: null, matches: [], isDataRoute: !1 });
vn.displayName = 'Route';
var Ff = D.createContext(null);
Ff.displayName = 'RouteError';
var Dy = 'REACT_ROUTER_ERROR',
  rT = 'REDIRECT',
  oT = 'ROUTE_ERROR_RESPONSE';
function uT(t) {
  if (t.startsWith(`${Dy}:${rT}:{`))
    try {
      let a = JSON.parse(t.slice(28));
      if (
        typeof a == 'object' &&
        a &&
        typeof a.status == 'number' &&
        typeof a.statusText == 'string' &&
        typeof a.location == 'string' &&
        typeof a.reloadDocument == 'boolean' &&
        typeof a.replace == 'boolean'
      )
        return a;
    } catch {}
}
function cT(t) {
  if (t.startsWith(`${Dy}:${oT}:{`))
    try {
      let a = JSON.parse(t.slice(40));
      if (
        typeof a == 'object' &&
        a &&
        typeof a.status == 'number' &&
        typeof a.statusText == 'string'
      )
        return new eT(a.status, a.statusText, a.data);
    } catch {}
}
function fT(t, { relative: a } = {}) {
  Ue(
    rl(),
    'useHref() may be used only in the context of a <Router> component.',
  );
  let { basename: s, navigator: l } = D.useContext(It),
    { hash: o, pathname: u, search: f } = ol(t, { relative: a }),
    p = u;
  return (
    s !== '/' && (p = u === '/' ? s : Un([s, u])),
    l.createHref({ pathname: p, search: f, hash: o })
  );
}
function rl() {
  return D.useContext(ll) != null;
}
function ga() {
  return (
    Ue(
      rl(),
      'useLocation() may be used only in the context of a <Router> component.',
    ),
    D.useContext(ll).location
  );
}
var Oy =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Ny(t) {
  D.useContext(It).static || D.useLayoutEffect(t);
}
function Ry() {
  let { isDataRoute: t } = D.useContext(vn);
  return t ? ET() : dT();
}
function dT() {
  Ue(
    rl(),
    'useNavigate() may be used only in the context of a <Router> component.',
  );
  let t = D.useContext(qi),
    { basename: a, navigator: s } = D.useContext(It),
    { matches: l } = D.useContext(vn),
    { pathname: o } = ga(),
    u = JSON.stringify(_y(l)),
    f = D.useRef(!1);
  return (
    Ny(() => {
      f.current = !0;
    }),
    D.useCallback(
      (h, m = {}) => {
        if ((rn(f.current, Oy), !f.current)) return;
        if (typeof h == 'number') {
          s.go(h);
          return;
        }
        let v = Ey(h, JSON.parse(u), o, m.relative === 'path');
        (t == null &&
          a !== '/' &&
          (v.pathname = v.pathname === '/' ? a : Un([a, v.pathname])),
          (m.replace ? s.replace : s.push)(v, m.state, m));
      },
      [a, s, u, o, t],
    )
  );
}
D.createContext(null);
function Zf() {
  let { matches: t } = D.useContext(vn),
    a = t[t.length - 1];
  return a ? a.params : {};
}
function ol(t, { relative: a } = {}) {
  let { matches: s } = D.useContext(vn),
    { pathname: l } = ga(),
    o = JSON.stringify(_y(s));
  return D.useMemo(() => Ey(t, JSON.parse(o), l, a === 'path'), [t, o, l, a]);
}
function hT(t, a) {
  return jy(t, a);
}
function jy(t, a, s, l, o) {
  Ue(
    rl(),
    'useRoutes() may be used only in the context of a <Router> component.',
  );
  let { navigator: u } = D.useContext(It),
    { matches: f } = D.useContext(vn),
    p = f[f.length - 1],
    h = p ? p.params : {},
    m = p ? p.pathname : '/',
    v = p ? p.pathnameBase : '/',
    g = p && p.route;
  {
    let C = (g && g.path) || '';
    zy(
      m,
      !g || C.endsWith('*') || C.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C === '/' ? '*' : `${C}/*`}">.`,
    );
  }
  let x = ga(),
    b;
  if (a) {
    let C = typeof a == 'string' ? Ka(a) : a;
    (Ue(
      v === '/' || C.pathname?.startsWith(v),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${C.pathname}" was given in the \`location\` prop.`,
    ),
      (b = C));
  } else b = x;
  let A = b.pathname || '/',
    E = A;
  if (v !== '/') {
    let C = v.replace(/^\//, '').split('/');
    E = '/' + A.replace(/^\//, '').split('/').slice(C.length).join('/');
  }
  let M = Sy(t, { pathname: E });
  (rn(
    g || M != null,
    `No routes matched location "${b.pathname}${b.search}${b.hash}" `,
  ),
    rn(
      M == null ||
        M[M.length - 1].route.element !== void 0 ||
        M[M.length - 1].route.Component !== void 0 ||
        M[M.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let _ = yT(
    M &&
      M.map((C) =>
        Object.assign({}, C, {
          params: Object.assign({}, h, C.params),
          pathname: Un([
            v,
            u.encodeLocation ?
              u.encodeLocation(
                C.pathname.replace(/\?/g, '%3F').replace(/#/g, '%23'),
              ).pathname
            : C.pathname,
          ]),
          pathnameBase:
            C.pathnameBase === '/' ?
              v
            : Un([
                v,
                u.encodeLocation ?
                  u.encodeLocation(
                    C.pathnameBase.replace(/\?/g, '%3F').replace(/#/g, '%23'),
                  ).pathname
                : C.pathnameBase,
              ]),
        }),
      ),
    f,
    s,
    l,
    o,
  );
  return a && _ ?
      D.createElement(
        ll.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              ...b,
            },
            navigationType: 'POP',
          },
        },
        _,
      )
    : _;
}
function mT() {
  let t = _T(),
    a =
      tT(t) ? `${t.status} ${t.statusText}`
      : t instanceof Error ? t.message
      : JSON.stringify(t),
    s = t instanceof Error ? t.stack : null,
    l = 'rgba(200,200,200, 0.5)',
    o = { padding: '0.5rem', backgroundColor: l },
    u = { padding: '2px 4px', backgroundColor: l },
    f = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', t),
    (f = D.createElement(
      D.Fragment,
      null,
      D.createElement('p', null, '💿 Hey developer 👋'),
      D.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        D.createElement('code', { style: u }, 'ErrorBoundary'),
        ' or',
        ' ',
        D.createElement('code', { style: u }, 'errorElement'),
        ' prop on your route.',
      ),
    )),
    D.createElement(
      D.Fragment,
      null,
      D.createElement('h2', null, 'Unexpected Application Error!'),
      D.createElement('h3', { style: { fontStyle: 'italic' } }, a),
      s ? D.createElement('pre', { style: o }, s) : null,
      f,
    )
  );
}
var pT = D.createElement(mT, null),
  Ly = class extends D.Component {
    constructor(t) {
      (super(t),
        (this.state = {
          location: t.location,
          revalidation: t.revalidation,
          error: t.error,
        }));
    }
    static getDerivedStateFromError(t) {
      return { error: t };
    }
    static getDerivedStateFromProps(t, a) {
      return (
          a.location !== t.location ||
            (a.revalidation !== 'idle' && t.revalidation === 'idle')
        ) ?
          { error: t.error, location: t.location, revalidation: t.revalidation }
        : {
            error: t.error !== void 0 ? t.error : a.error,
            location: a.location,
            revalidation: t.revalidation || a.revalidation,
          };
    }
    componentDidCatch(t, a) {
      this.props.onError ?
        this.props.onError(t, a)
      : console.error(
          'React Router caught the following error during render',
          t,
        );
    }
    render() {
      let t = this.state.error;
      if (
        this.context &&
        typeof t == 'object' &&
        t &&
        'digest' in t &&
        typeof t.digest == 'string'
      ) {
        const s = cT(t.digest);
        s && (t = s);
      }
      let a =
        t !== void 0 ?
          D.createElement(
            vn.Provider,
            { value: this.props.routeContext },
            D.createElement(Ff.Provider, {
              value: t,
              children: this.props.component,
            }),
          )
        : this.props.children;
      return this.context ? D.createElement(gT, { error: t }, a) : a;
    }
  };
Ly.contextType = iT;
var Xc = new WeakMap();
function gT({ children: t, error: a }) {
  let { basename: s } = D.useContext(It);
  if (
    typeof a == 'object' &&
    a &&
    'digest' in a &&
    typeof a.digest == 'string'
  ) {
    let l = uT(a.digest);
    if (l) {
      let o = Xc.get(a);
      if (o) throw o;
      let u = Ay(l.location, s);
      if (Cy && !Xc.get(a))
        if (u.isExternal || l.reloadDocument)
          window.location.href = u.absoluteURL || u.to;
        else {
          const f = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(u.to, {
              replace: l.replace,
            }),
          );
          throw (Xc.set(a, f), f);
        }
      return D.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${u.absoluteURL || u.to}`,
      });
    }
  }
  return t;
}
function vT({ routeContext: t, match: a, children: s }) {
  let l = D.useContext(qi);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (a.route.errorElement || a.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = a.route.id),
    D.createElement(vn.Provider, { value: t }, s)
  );
}
function yT(t, a = [], s = null, l = null, o = null) {
  if (t == null) {
    if (!s) return null;
    if (s.errors) t = s.matches;
    else if (a.length === 0 && !s.initialized && s.matches.length > 0)
      t = s.matches;
    else return null;
  }
  let u = t,
    f = s?.errors;
  if (f != null) {
    let v = u.findIndex((g) => g.route.id && f?.[g.route.id] !== void 0);
    (Ue(
      v >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(',')}`,
    ),
      (u = u.slice(0, Math.min(u.length, v + 1))));
  }
  let p = !1,
    h = -1;
  if (s)
    for (let v = 0; v < u.length; v++) {
      let g = u[v];
      if (
        ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (h = v),
        g.route.id)
      ) {
        let { loaderData: x, errors: b } = s,
          A =
            g.route.loader &&
            !x.hasOwnProperty(g.route.id) &&
            (!b || b[g.route.id] === void 0);
        if (g.route.lazy || A) {
          ((p = !0), h >= 0 ? (u = u.slice(0, h + 1)) : (u = [u[0]]));
          break;
        }
      }
    }
  let m =
    s && l ?
      (v, g) => {
        l(v, {
          location: s.location,
          params: s.matches?.[0]?.params ?? {},
          unstable_pattern: nT(s.matches),
          errorInfo: g,
        });
      }
    : void 0;
  return u.reduceRight((v, g, x) => {
    let b,
      A = !1,
      E = null,
      M = null;
    s &&
      ((b = f && g.route.id ? f[g.route.id] : void 0),
      (E = g.route.errorElement || pT),
      p &&
        (h < 0 && x === 0 ?
          (zy(
            'route-fallback',
            !1,
            'No `HydrateFallback` element provided to render during initial hydration',
          ),
          (A = !0),
          (M = null))
        : h === x && ((A = !0), (M = g.route.hydrateFallbackElement || null))));
    let _ = a.concat(u.slice(0, x + 1)),
      C = () => {
        let w;
        return (
          b ? (w = E)
          : A ? (w = M)
          : g.route.Component ? (w = D.createElement(g.route.Component, null))
          : g.route.element ? (w = g.route.element)
          : (w = v),
          D.createElement(vT, {
            match: g,
            routeContext: { outlet: v, matches: _, isDataRoute: s != null },
            children: w,
          })
        );
      };
    return s && (g.route.ErrorBoundary || g.route.errorElement || x === 0) ?
        D.createElement(Ly, {
          location: s.location,
          revalidation: s.revalidation,
          component: E,
          error: b,
          children: C(),
          routeContext: { outlet: null, matches: _, isDataRoute: !0 },
          onError: m,
        })
      : C();
  }, null);
}
function $f(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function bT(t) {
  let a = D.useContext(qi);
  return (Ue(a, $f(t)), a);
}
function ST(t) {
  let a = D.useContext(co);
  return (Ue(a, $f(t)), a);
}
function xT(t) {
  let a = D.useContext(vn);
  return (Ue(a, $f(t)), a);
}
function If(t) {
  let a = xT(t),
    s = a.matches[a.matches.length - 1];
  return (
    Ue(
      s.route.id,
      `${t} can only be used on routes that contain a unique "id"`,
    ),
    s.route.id
  );
}
function TT() {
  return If('useRouteId');
}
function _T() {
  let t = D.useContext(Ff),
    a = ST('useRouteError'),
    s = If('useRouteError');
  return t !== void 0 ? t : a.errors?.[s];
}
function ET() {
  let { router: t } = bT('useNavigate'),
    a = If('useNavigate'),
    s = D.useRef(!1);
  return (
    Ny(() => {
      s.current = !0;
    }),
    D.useCallback(
      async (o, u = {}) => {
        (rn(s.current, Oy),
          s.current &&
            (typeof o == 'number' ?
              await t.navigate(o)
            : await t.navigate(o, { fromRouteId: a, ...u })));
      },
      [t, a],
    )
  );
}
var Fg = {};
function zy(t, a, s) {
  !a && !Fg[t] && ((Fg[t] = !0), rn(!1, s));
}
D.memo(CT);
function CT({ routes: t, future: a, state: s, onError: l }) {
  return jy(t, void 0, s, l, a);
}
function Vn(t) {
  Ue(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.',
  );
}
function AT({
  basename: t = '/',
  children: a = null,
  location: s,
  navigationType: l = 'POP',
  navigator: o,
  static: u = !1,
  unstable_useTransitions: f,
}) {
  Ue(
    !rl(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.',
  );
  let p = t.replace(/^\/*/, '/'),
    h = D.useMemo(
      () => ({
        basename: p,
        navigator: o,
        static: u,
        unstable_useTransitions: f,
        future: {},
      }),
      [p, o, u, f],
    );
  typeof s == 'string' && (s = Ka(s));
  let {
      pathname: m = '/',
      search: v = '',
      hash: g = '',
      state: x = null,
      key: b = 'default',
    } = s,
    A = D.useMemo(() => {
      let E = Hn(m, p);
      return E == null ? null : (
          {
            location: { pathname: E, search: v, hash: g, state: x, key: b },
            navigationType: l,
          }
        );
    }, [p, m, v, g, x, b, l]);
  return (
    rn(
      A != null,
      `<Router basename="${p}"> is not able to match the URL "${m}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    A == null ? null : (
      D.createElement(
        It.Provider,
        { value: h },
        D.createElement(ll.Provider, { children: a, value: A }),
      )
    )
  );
}
function MT({ children: t, location: a }) {
  return hT(Sf(t), a);
}
function Sf(t, a = []) {
  let s = [];
  return (
    D.Children.forEach(t, (l, o) => {
      if (!D.isValidElement(l)) return;
      let u = [...a, o];
      if (l.type === D.Fragment) {
        s.push.apply(s, Sf(l.props.children, u));
        return;
      }
      (Ue(
        l.type === Vn,
        `[${typeof l.type == 'string' ? l.type : l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        Ue(
          !l.props.index || !l.props.children,
          'An index route cannot have child routes.',
        ));
      let f = {
        id: l.props.id || u.join('-'),
        caseSensitive: l.props.caseSensitive,
        element: l.props.element,
        Component: l.props.Component,
        index: l.props.index,
        path: l.props.path,
        middleware: l.props.middleware,
        loader: l.props.loader,
        action: l.props.action,
        hydrateFallbackElement: l.props.hydrateFallbackElement,
        HydrateFallback: l.props.HydrateFallback,
        errorElement: l.props.errorElement,
        ErrorBoundary: l.props.ErrorBoundary,
        hasErrorBoundary:
          l.props.hasErrorBoundary === !0 ||
          l.props.ErrorBoundary != null ||
          l.props.errorElement != null,
        shouldRevalidate: l.props.shouldRevalidate,
        handle: l.props.handle,
        lazy: l.props.lazy,
      };
      (l.props.children && (f.children = Sf(l.props.children, u)), s.push(f));
    }),
    s
  );
}
var Hr = 'get',
  Pr = 'application/x-www-form-urlencoded';
function fo(t) {
  return typeof HTMLElement < 'u' && t instanceof HTMLElement;
}
function wT(t) {
  return fo(t) && t.tagName.toLowerCase() === 'button';
}
function DT(t) {
  return fo(t) && t.tagName.toLowerCase() === 'form';
}
function OT(t) {
  return fo(t) && t.tagName.toLowerCase() === 'input';
}
function NT(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function RT(t, a) {
  return t.button === 0 && (!a || a === '_self') && !NT(t);
}
var Rr = null;
function jT() {
  if (Rr === null)
    try {
      (new FormData(document.createElement('form'), 0), (Rr = !1));
    } catch {
      Rr = !0;
    }
  return Rr;
}
var LT = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function Qc(t) {
  return t != null && !LT.has(t) ?
      (rn(
        !1,
        `"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Pr}"`,
      ),
      null)
    : t;
}
function zT(t, a) {
  let s, l, o, u, f;
  if (DT(t)) {
    let p = t.getAttribute('action');
    ((l = p ? Hn(p, a) : null),
      (s = t.getAttribute('method') || Hr),
      (o = Qc(t.getAttribute('enctype')) || Pr),
      (u = new FormData(t)));
  } else if (wT(t) || (OT(t) && (t.type === 'submit' || t.type === 'image'))) {
    let p = t.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let h = t.getAttribute('formaction') || p.getAttribute('action');
    if (
      ((l = h ? Hn(h, a) : null),
      (s = t.getAttribute('formmethod') || p.getAttribute('method') || Hr),
      (o =
        Qc(t.getAttribute('formenctype')) ||
        Qc(p.getAttribute('enctype')) ||
        Pr),
      (u = new FormData(p, t)),
      !jT())
    ) {
      let { name: m, type: v, value: g } = t;
      if (v === 'image') {
        let x = m ? `${m}.` : '';
        (u.append(`${x}x`, '0'), u.append(`${x}y`, '0'));
      } else m && u.append(m, g);
    }
  } else {
    if (fo(t))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((s = Hr), (l = null), (o = Pr), (f = t));
  }
  return (
    u && o === 'text/plain' && ((f = u), (u = void 0)),
    { action: l, method: s.toLowerCase(), encType: o, formData: u, body: f }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function Jf(t, a) {
  if (t === !1 || t === null || typeof t > 'u') throw new Error(a);
}
function VT(t, a, s, l) {
  let o =
    typeof t == 'string' ?
      new URL(
        t,
        typeof window > 'u' ? 'server://singlefetch/' : window.location.origin,
      )
    : t;
  return (
    s ?
      o.pathname.endsWith('/') ?
        (o.pathname = `${o.pathname}_.${l}`)
      : (o.pathname = `${o.pathname}.${l}`)
    : o.pathname === '/' ? (o.pathname = `_root.${l}`)
    : a && Hn(o.pathname, a) === '/' ?
      (o.pathname = `${a.replace(/\/$/, '')}/_root.${l}`)
    : (o.pathname = `${o.pathname.replace(/\/$/, '')}.${l}`),
    o
  );
}
async function BT(t, a) {
  if (t.id in a) return a[t.id];
  try {
    let s = await import(t.module);
    return ((a[t.id] = s), s);
  } catch (s) {
    return (
      console.error(
        `Error loading route module \`${t.module}\`, reloading page...`,
      ),
      console.error(s),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function UT(t) {
  return (
    t == null ? !1
    : t.href == null ?
      t.rel === 'preload' &&
      typeof t.imageSrcSet == 'string' &&
      typeof t.imageSizes == 'string'
    : typeof t.rel == 'string' && typeof t.href == 'string'
  );
}
async function HT(t, a, s) {
  let l = await Promise.all(
    t.map(async (o) => {
      let u = a.routes[o.route.id];
      if (u) {
        let f = await BT(u, s);
        return f.links ? f.links() : [];
      }
      return [];
    }),
  );
  return qT(
    l
      .flat(1)
      .filter(UT)
      .filter((o) => o.rel === 'stylesheet' || o.rel === 'preload')
      .map((o) =>
        o.rel === 'stylesheet' ?
          { ...o, rel: 'prefetch', as: 'style' }
        : { ...o, rel: 'prefetch' },
      ),
  );
}
function Zg(t, a, s, l, o, u) {
  let f = (h, m) => (s[m] ? h.route.id !== s[m].route.id : !0),
    p = (h, m) =>
      s[m].pathname !== h.pathname ||
      (s[m].route.path?.endsWith('*') && s[m].params['*'] !== h.params['*']);
  return (
    u === 'assets' ? a.filter((h, m) => f(h, m) || p(h, m))
    : u === 'data' ?
      a.filter((h, m) => {
        let v = l.routes[h.route.id];
        if (!v || !v.hasLoader) return !1;
        if (f(h, m) || p(h, m)) return !0;
        if (h.route.shouldRevalidate) {
          let g = h.route.shouldRevalidate({
            currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
            currentParams: s[0]?.params || {},
            nextUrl: new URL(t, window.origin),
            nextParams: h.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof g == 'boolean') return g;
        }
        return !0;
      })
    : []
  );
}
function PT(t, a, { includeHydrateFallback: s } = {}) {
  return GT(
    t
      .map((l) => {
        let o = a.routes[l.route.id];
        if (!o) return [];
        let u = [o.module];
        return (
          o.clientActionModule && (u = u.concat(o.clientActionModule)),
          o.clientLoaderModule && (u = u.concat(o.clientLoaderModule)),
          s &&
            o.hydrateFallbackModule &&
            (u = u.concat(o.hydrateFallbackModule)),
          o.imports && (u = u.concat(o.imports)),
          u
        );
      })
      .flat(1),
  );
}
function GT(t) {
  return [...new Set(t)];
}
function kT(t) {
  let a = {},
    s = Object.keys(t).sort();
  for (let l of s) a[l] = t[l];
  return a;
}
function qT(t, a) {
  let s = new Set();
  return (
    new Set(a),
    t.reduce((l, o) => {
      let u = JSON.stringify(kT(o));
      return (s.has(u) || (s.add(u), l.push({ key: u, link: o })), l);
    }, [])
  );
}
function Vy() {
  let t = D.useContext(qi);
  return (
    Jf(
      t,
      'You must render this element inside a <DataRouterContext.Provider> element',
    ),
    t
  );
}
function YT() {
  let t = D.useContext(co);
  return (
    Jf(
      t,
      'You must render this element inside a <DataRouterStateContext.Provider> element',
    ),
    t
  );
}
var Wf = D.createContext(void 0);
Wf.displayName = 'FrameworkContext';
function By() {
  let t = D.useContext(Wf);
  return (
    Jf(t, 'You must render this element inside a <HydratedRouter> element'),
    t
  );
}
function XT(t, a) {
  let s = D.useContext(Wf),
    [l, o] = D.useState(!1),
    [u, f] = D.useState(!1),
    {
      onFocus: p,
      onBlur: h,
      onMouseEnter: m,
      onMouseLeave: v,
      onTouchStart: g,
    } = a,
    x = D.useRef(null);
  (D.useEffect(() => {
    if ((t === 'render' && f(!0), t === 'viewport')) {
      let E = (_) => {
          _.forEach((C) => {
            f(C.isIntersecting);
          });
        },
        M = new IntersectionObserver(E, { threshold: 0.5 });
      return (
        x.current && M.observe(x.current),
        () => {
          M.disconnect();
        }
      );
    }
  }, [t]),
    D.useEffect(() => {
      if (l) {
        let E = setTimeout(() => {
          f(!0);
        }, 100);
        return () => {
          clearTimeout(E);
        };
      }
    }, [l]));
  let b = () => {
      o(!0);
    },
    A = () => {
      (o(!1), f(!1));
    };
  return (
    s ?
      t !== 'intent' ?
        [u, x, {}]
      : [
          u,
          x,
          {
            onFocus: ks(p, b),
            onBlur: ks(h, A),
            onMouseEnter: ks(m, b),
            onMouseLeave: ks(v, A),
            onTouchStart: ks(g, b),
          },
        ]
    : [!1, x, {}]
  );
}
function ks(t, a) {
  return (s) => {
    (t && t(s), s.defaultPrevented || a(s));
  };
}
function QT({ page: t, ...a }) {
  let { router: s } = Vy(),
    l = D.useMemo(() => Sy(s.routes, t, s.basename), [s.routes, t, s.basename]);
  return l ? D.createElement(FT, { page: t, matches: l, ...a }) : null;
}
function KT(t) {
  let { manifest: a, routeModules: s } = By(),
    [l, o] = D.useState([]);
  return (
    D.useEffect(() => {
      let u = !1;
      return (
        HT(t, a, s).then((f) => {
          u || o(f);
        }),
        () => {
          u = !0;
        }
      );
    }, [t, a, s]),
    l
  );
}
function FT({ page: t, matches: a, ...s }) {
  let l = ga(),
    { future: o, manifest: u, routeModules: f } = By(),
    { basename: p } = Vy(),
    { loaderData: h, matches: m } = YT(),
    v = D.useMemo(() => Zg(t, a, m, u, l, 'data'), [t, a, m, u, l]),
    g = D.useMemo(() => Zg(t, a, m, u, l, 'assets'), [t, a, m, u, l]),
    x = D.useMemo(() => {
      if (t === l.pathname + l.search + l.hash) return [];
      let E = new Set(),
        M = !1;
      if (
        (a.forEach((C) => {
          let w = u.routes[C.route.id];
          !w ||
            !w.hasLoader ||
            ((
              (!v.some((U) => U.route.id === C.route.id) &&
                C.route.id in h &&
                f[C.route.id]?.shouldRevalidate) ||
              w.hasClientLoader
            ) ?
              (M = !0)
            : E.add(C.route.id));
        }),
        E.size === 0)
      )
        return [];
      let _ = VT(t, p, o.unstable_trailingSlashAwareDataRequests, 'data');
      return (
        M &&
          E.size > 0 &&
          _.searchParams.set(
            '_routes',
            a
              .filter((C) => E.has(C.route.id))
              .map((C) => C.route.id)
              .join(','),
          ),
        [_.pathname + _.search]
      );
    }, [p, o.unstable_trailingSlashAwareDataRequests, h, l, u, v, a, t, f]),
    b = D.useMemo(() => PT(g, u), [g, u]),
    A = KT(g);
  return D.createElement(
    D.Fragment,
    null,
    x.map((E) =>
      D.createElement('link', {
        key: E,
        rel: 'prefetch',
        as: 'fetch',
        href: E,
        ...s,
      }),
    ),
    b.map((E) =>
      D.createElement('link', { key: E, rel: 'modulepreload', href: E, ...s }),
    ),
    A.map(({ key: E, link: M }) =>
      D.createElement('link', {
        key: E,
        nonce: s.nonce,
        ...M,
        crossOrigin: M.crossOrigin ?? s.crossOrigin,
      }),
    ),
  );
}
function ZT(...t) {
  return (a) => {
    t.forEach((s) => {
      typeof s == 'function' ? s(a) : s != null && (s.current = a);
    });
  };
}
var $T =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  $T && (window.__reactRouterVersion = '7.13.0');
} catch {}
function IT({
  basename: t,
  children: a,
  unstable_useTransitions: s,
  window: l,
}) {
  let o = D.useRef();
  o.current == null && (o.current = Nx({ window: l, v5Compat: !0 }));
  let u = o.current,
    [f, p] = D.useState({ action: u.action, location: u.location }),
    h = D.useCallback(
      (m) => {
        s === !1 ? p(m) : D.startTransition(() => p(m));
      },
      [s],
    );
  return (
    D.useLayoutEffect(() => u.listen(h), [u, h]),
    D.createElement(AT, {
      basename: t,
      children: a,
      location: f.location,
      navigationType: f.action,
      navigator: u,
      unstable_useTransitions: s,
    })
  );
}
var Uy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  an = D.forwardRef(function (
    {
      onClick: a,
      discover: s = 'render',
      prefetch: l = 'none',
      relative: o,
      reloadDocument: u,
      replace: f,
      state: p,
      target: h,
      to: m,
      preventScrollReset: v,
      viewTransition: g,
      unstable_defaultShouldRevalidate: x,
      ...b
    },
    A,
  ) {
    let { basename: E, unstable_useTransitions: M } = D.useContext(It),
      _ = typeof m == 'string' && Uy.test(m),
      C = Ay(m, E);
    m = C.to;
    let w = fT(m, { relative: o }),
      [U, V, $] = XT(l, b),
      X = e_(m, {
        replace: f,
        state: p,
        target: h,
        preventScrollReset: v,
        relative: o,
        viewTransition: g,
        unstable_defaultShouldRevalidate: x,
        unstable_useTransitions: M,
      });
    function L(Z) {
      (a && a(Z), Z.defaultPrevented || X(Z));
    }
    let W = D.createElement('a', {
      ...b,
      ...$,
      'href': C.absoluteURL || w,
      'onClick': C.isExternal || u ? a : L,
      'ref': ZT(A, V),
      'target': h,
      'data-discover': !_ && s === 'render' ? 'true' : void 0,
    });
    return U && !_ ?
        D.createElement(D.Fragment, null, W, D.createElement(QT, { page: w }))
      : W;
  });
an.displayName = 'Link';
var qa = D.forwardRef(function (
  {
    'aria-current': a = 'page',
    'caseSensitive': s = !1,
    'className': l = '',
    'end': o = !1,
    'style': u,
    'to': f,
    'viewTransition': p,
    'children': h,
    ...m
  },
  v,
) {
  let g = ol(f, { relative: m.relative }),
    x = ga(),
    b = D.useContext(co),
    { navigator: A, basename: E } = D.useContext(It),
    M = b != null && s_(g) && p === !0,
    _ = A.encodeLocation ? A.encodeLocation(g).pathname : g.pathname,
    C = x.pathname,
    w =
      b && b.navigation && b.navigation.location ?
        b.navigation.location.pathname
      : null;
  (s ||
    ((C = C.toLowerCase()),
    (w = w ? w.toLowerCase() : null),
    (_ = _.toLowerCase())),
    w && E && (w = Hn(w, E) || w));
  const U = _ !== '/' && _.endsWith('/') ? _.length - 1 : _.length;
  let V = C === _ || (!o && C.startsWith(_) && C.charAt(U) === '/'),
    $ =
      w != null &&
      (w === _ || (!o && w.startsWith(_) && w.charAt(_.length) === '/')),
    X = { isActive: V, isPending: $, isTransitioning: M },
    L = V ? a : void 0,
    W;
  typeof l == 'function' ?
    (W = l(X))
  : (W = [
      l,
      V ? 'active' : null,
      $ ? 'pending' : null,
      M ? 'transitioning' : null,
    ]
      .filter(Boolean)
      .join(' '));
  let Z = typeof u == 'function' ? u(X) : u;
  return D.createElement(
    an,
    {
      ...m,
      'aria-current': L,
      'className': W,
      'ref': v,
      'style': Z,
      'to': f,
      'viewTransition': p,
    },
    typeof h == 'function' ? h(X) : h,
  );
});
qa.displayName = 'NavLink';
var JT = D.forwardRef(
  (
    {
      discover: t = 'render',
      fetcherKey: a,
      navigate: s,
      reloadDocument: l,
      replace: o,
      state: u,
      method: f = Hr,
      action: p,
      onSubmit: h,
      relative: m,
      preventScrollReset: v,
      viewTransition: g,
      unstable_defaultShouldRevalidate: x,
      ...b
    },
    A,
  ) => {
    let { unstable_useTransitions: E } = D.useContext(It),
      M = a_(),
      _ = i_(p, { relative: m }),
      C = f.toLowerCase() === 'get' ? 'get' : 'post',
      w = typeof p == 'string' && Uy.test(p),
      U = (V) => {
        if ((h && h(V), V.defaultPrevented)) return;
        V.preventDefault();
        let $ = V.nativeEvent.submitter,
          X = $?.getAttribute('formmethod') || f,
          L = () =>
            M($ || V.currentTarget, {
              fetcherKey: a,
              method: X,
              navigate: s,
              replace: o,
              state: u,
              relative: m,
              preventScrollReset: v,
              viewTransition: g,
              unstable_defaultShouldRevalidate: x,
            });
        E && s !== !1 ? D.startTransition(() => L()) : L();
      };
    return D.createElement('form', {
      'ref': A,
      'method': C,
      'action': _,
      'onSubmit': l ? h : U,
      ...b,
      'data-discover': !w && t === 'render' ? 'true' : void 0,
    });
  },
);
JT.displayName = 'Form';
function WT(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Hy(t) {
  let a = D.useContext(qi);
  return (Ue(a, WT(t)), a);
}
function e_(
  t,
  {
    target: a,
    replace: s,
    state: l,
    preventScrollReset: o,
    relative: u,
    viewTransition: f,
    unstable_defaultShouldRevalidate: p,
    unstable_useTransitions: h,
  } = {},
) {
  let m = Ry(),
    v = ga(),
    g = ol(t, { relative: u });
  return D.useCallback(
    (x) => {
      if (RT(x, a)) {
        x.preventDefault();
        let b = s !== void 0 ? s : Ws(v) === Ws(g),
          A = () =>
            m(t, {
              replace: b,
              state: l,
              preventScrollReset: o,
              relative: u,
              viewTransition: f,
              unstable_defaultShouldRevalidate: p,
            });
        h ? D.startTransition(() => A()) : A();
      }
    },
    [v, m, g, s, l, a, t, o, u, f, p, h],
  );
}
var t_ = 0,
  n_ = () => `__${String(++t_)}__`;
function a_() {
  let { router: t } = Hy('useSubmit'),
    { basename: a } = D.useContext(It),
    s = TT(),
    l = t.fetch,
    o = t.navigate;
  return D.useCallback(
    async (u, f = {}) => {
      let { action: p, method: h, encType: m, formData: v, body: g } = zT(u, a);
      if (f.navigate === !1) {
        let x = f.fetcherKey || n_();
        await l(x, s, f.action || p, {
          unstable_defaultShouldRevalidate: f.unstable_defaultShouldRevalidate,
          preventScrollReset: f.preventScrollReset,
          formData: v,
          body: g,
          formMethod: f.method || h,
          formEncType: f.encType || m,
          flushSync: f.flushSync,
        });
      } else
        await o(f.action || p, {
          unstable_defaultShouldRevalidate: f.unstable_defaultShouldRevalidate,
          preventScrollReset: f.preventScrollReset,
          formData: v,
          body: g,
          formMethod: f.method || h,
          formEncType: f.encType || m,
          replace: f.replace,
          state: f.state,
          fromRouteId: s,
          flushSync: f.flushSync,
          viewTransition: f.viewTransition,
        });
    },
    [l, o, a, s],
  );
}
function i_(t, { relative: a } = {}) {
  let { basename: s } = D.useContext(It),
    l = D.useContext(vn);
  Ue(l, 'useFormAction must be used inside a RouteContext');
  let [o] = l.matches.slice(-1),
    u = { ...ol(t || '.', { relative: a }) },
    f = ga();
  if (t == null) {
    u.search = f.search;
    let p = new URLSearchParams(u.search),
      h = p.getAll('index');
    if (h.some((v) => v === '')) {
      (p.delete('index'),
        h.filter((g) => g).forEach((g) => p.append('index', g)));
      let v = p.toString();
      u.search = v ? `?${v}` : '';
    }
  }
  return (
    (!t || t === '.') &&
      o.route.index &&
      (u.search = u.search ? u.search.replace(/^\?/, '?index&') : '?index'),
    s !== '/' && (u.pathname = u.pathname === '/' ? s : Un([s, u.pathname])),
    Ws(u)
  );
}
function s_(t, { relative: a } = {}) {
  let s = D.useContext(wy);
  Ue(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: l } = Hy('useViewTransitionState'),
    o = ol(t, { relative: a });
  if (!s.isTransitioning) return !1;
  let u = Hn(s.currentLocation.pathname, l) || s.currentLocation.pathname,
    f = Hn(s.nextLocation.pathname, l) || s.nextLocation.pathname;
  return $r(o.pathname, f) != null || $r(o.pathname, u) != null;
}
const l_ = '_menu_fvuuk_1',
  r_ = '_menu__nav_fvuuk_17',
  o_ = '_menu__list_fvuuk_24',
  u_ = '_menu__link_fvuuk_33',
  c_ = '_menu__footer_fvuuk_59',
  f_ = '_footer_btn_fvuuk_66',
  gt = {
    'menu': l_,
    'menu--open': '_menu--open_fvuuk_14',
    'menu__nav': r_,
    'menu__list': o_,
    'menu__link': u_,
    'menu__link--active': '_menu__link--active_fvuuk_49',
    'menu__footer': c_,
    'footer_btn': f_,
    'footer_btn--active': '_footer_btn--active_fvuuk_87',
  },
  Py =
    "data:image/svg+xml,%3csvg%20width='16'%20height='14'%20viewBox='0%200%2016%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.296%200.332589C9.82592%200.113015%2010.3939%200%2010.9675%200C11.5411%200%2012.1091%200.113015%2012.6391%200.332589C13.169%200.552163%2013.6504%200.873992%2014.056%201.27969C14.4615%201.68515%2014.7833%202.16654%2015.0028%202.69636C15.2224%203.22628%2015.3354%203.79427%2015.3354%204.36788C15.3354%204.9415%2015.2224%205.50949%2015.0028%206.03941C14.7833%206.56928%2014.4615%207.05071%2014.0558%207.45619C14.0558%207.45623%2014.0559%207.45615%2014.0558%207.45619L8.1625%2013.3495C7.88913%2013.6229%207.44592%2013.6229%207.17255%2013.3495L1.27922%207.45619C0.460149%206.63712%200%205.52622%200%204.36788C0%203.20954%200.460149%202.09865%201.27922%201.27958C2.09829%200.460505%203.20919%200.000356495%204.36753%200.000356495C5.52587%200.000356495%206.63676%200.460505%207.45583%201.27958L7.66753%201.49127L7.8791%201.27969C7.87906%201.27973%207.87914%201.27965%207.8791%201.27969C8.28459%200.874047%208.76613%200.552142%209.296%200.332589ZM13.0658%202.26941C12.7903%201.99378%2012.4632%201.77513%2012.1031%201.62596C11.7431%201.47678%2011.3572%201.4%2010.9675%201.4C10.5778%201.4%2010.1919%201.47678%209.83191%201.62596C9.47189%201.77513%209.14478%201.99378%208.86928%202.26941L8.1625%202.97619C7.88913%203.24956%207.44592%203.24956%207.17255%202.97619L6.46589%202.26953C5.90937%201.71301%205.15456%201.40036%204.36753%201.40036C3.58049%201.40036%202.82569%201.71301%202.26917%202.26953C1.71265%202.82604%201.4%203.58085%201.4%204.36788C1.4%205.15492%201.71265%205.90972%202.26917%206.46624L7.66753%2011.8646L13.0659%206.46624C13.3415%206.19074%2013.5603%205.86352%2013.7095%205.5035C13.8586%205.14347%2013.9354%204.75759%2013.9354%204.36788C13.9354%203.97818%2013.8586%203.59229%2013.7095%203.23227C13.5603%202.87224%2013.3414%202.54491%2013.0658%202.26941Z'%20fill='%23F1F2F9'/%3e%3c/svg%3e",
  Gy =
    "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.46683%200.933323C3.59273%200.765453%203.79032%200.666656%204.00016%200.666656H12.0002C12.21%200.666656%2012.4076%200.765453%2012.5335%200.933323L14.5335%203.59999C14.62%203.71539%2014.6668%203.85574%2014.6668%203.99999V13.3333C14.6668%2013.8638%2014.4561%2014.3725%2014.081%2014.7475C13.706%2015.1226%2013.1973%2015.3333%2012.6668%2015.3333H3.3335C2.80306%2015.3333%202.29436%2015.1226%201.91928%2014.7475C1.54421%2014.3725%201.3335%2013.8638%201.3335%2013.3333V3.99999C1.3335%203.85574%201.38028%203.71539%201.46683%203.59999L3.46683%200.933323ZM4.3335%201.99999L2.66683%204.22221V13.3333C2.66683%2013.5101%202.73707%2013.6797%202.86209%2013.8047C2.98712%2013.9298%203.15669%2014%203.3335%2014H12.6668C12.8436%2014%2013.0132%2013.9298%2013.1382%2013.8047C13.2633%2013.6797%2013.3335%2013.5101%2013.3335%2013.3333V4.22221L11.6668%201.99999H4.3335Z'%20fill='%23F1F2F9'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M1.3335%204.00001C1.3335%203.63182%201.63197%203.33334%202.00016%203.33334H14.0002C14.3684%203.33334%2014.6668%203.63182%2014.6668%204.00001C14.6668%204.3682%2014.3684%204.66668%2014.0002%204.66668H2.00016C1.63197%204.66668%201.3335%204.3682%201.3335%204.00001Z'%20fill='%23F1F2F9'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.33341%206C5.7016%206%206.00008%206.29848%206.00008%206.66667C6.00008%207.1971%206.21079%207.70581%206.58587%208.08088C6.96094%208.45595%207.46965%208.66667%208.00008%208.66667C8.53051%208.66667%209.03922%208.45595%209.41429%208.08088C9.78937%207.70581%2010.0001%207.1971%2010.0001%206.66667C10.0001%206.29848%2010.2986%206%2010.6667%206C11.0349%206%2011.3334%206.29848%2011.3334%206.66667C11.3334%207.55072%2010.9822%208.39857%2010.3571%209.02369C9.73198%209.64881%208.88414%2010%208.00008%2010C7.11603%2010%206.26818%209.64881%205.64306%209.02369C5.01794%208.39857%204.66675%207.55072%204.66675%206.66667C4.66675%206.29848%204.96522%206%205.33341%206Z'%20fill='%23F1F2F9'/%3e%3c/svg%3e",
  d_ = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Phones', path: '/phones' },
    { id: 3, name: 'Tablets', path: '/tablets' },
    { id: 4, name: 'Accessories', path: '/accessories' },
  ],
  h_ = ({ isOpen: t, onClose: a }) =>
    S.jsxs('div', {
      className: `${gt.menu} ${t ? gt['menu--open'] : ''}`,
      children: [
        S.jsx('nav', {
          className: gt.menu__nav,
          children: S.jsx('ul', {
            className: gt.menu__list,
            children: d_.map((s) =>
              S.jsx(
                'li',
                {
                  className: gt.menu__item,
                  children: S.jsx(qa, {
                    to: s.path,
                    className: ({ isActive: l }) =>
                      l ?
                        `${gt.menu__link} ${gt['menu__link--active']}`
                      : gt.menu__link,
                    onClick: a,
                    children: s.name,
                  }),
                },
                s.id,
              ),
            ),
          }),
        }),
        S.jsxs('div', {
          className: gt.menu__footer,
          children: [
            S.jsx(qa, {
              to: '/favorites',
              className: ({ isActive: s }) =>
                s ?
                  `${gt.footer_btn} ${gt['footer_btn--active']}`
                : gt.footer_btn,
              onClick: a,
              children: S.jsx('img', { src: Py, alt: 'Favorites' }),
            }),
            S.jsx(qa, {
              to: '/cart',
              className: ({ isActive: s }) =>
                s ?
                  `${gt.footer_btn} ${gt['footer_btn--active']}`
                : gt.footer_btn,
              onClick: a,
              children: S.jsx('img', { src: Gy, alt: 'Cart' }),
            }),
          ],
        }),
      ],
    }),
  m_ = '_header_b09b7_14',
  p_ = '_header__container_b09b7_29',
  g_ = '_header__left_b09b7_36',
  v_ = '_header__right_b09b7_36',
  y_ = '_header__logo_b09b7_40',
  b_ = '_header__nav_b09b7_62',
  S_ = '_header__icons_b09b7_77',
  x_ = '_header__burger_b09b7_85',
  T_ = '_nav_list_b09b7_105',
  __ = '_nav_list__item_b09b7_122',
  E_ = '_nav_list__link_b09b7_126',
  C_ = '_icon_btn_b09b7_154',
  A_ = '_burger_icon_b09b7_190',
  Xe = {
    'header': m_,
    'header__container': p_,
    'header__left': g_,
    'header__right': v_,
    'header__logo': y_,
    'header__nav': b_,
    'header__icons': S_,
    'header__burger': x_,
    'nav_list': T_,
    'nav_list__item': __,
    'nav_list__link': E_,
    'nav_list__link--active': '_nav_list__link--active_b09b7_141',
    'icon_btn': C_,
    'icon_btn--active': '_icon_btn--active_b09b7_173',
    'burger_icon': A_,
    'burger_icon--active': '_burger_icon--active_b09b7_207',
  },
  M_ = '/assets/logo-CxS9TFyQ.svg',
  w_ = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Phones', path: '/phones' },
    { id: 3, name: 'Tablets', path: '/tablets' },
    { id: 4, name: 'Accessories', path: '/accessories' },
  ],
  D_ = () => {
    const [t, a] = D.useState(!1);
    D.useEffect(
      () => (
        t ?
          (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'unset'),
        () => {
          document.body.style.overflow = 'unset';
        }
      ),
      [t],
    );
    const s = () => {
      a((l) => !l);
    };
    return S.jsxs(S.Fragment, {
      children: [
        S.jsx('header', {
          className: Xe.header,
          children: S.jsxs('div', {
            className: Xe.header__container,
            children: [
              S.jsxs('div', {
                className: Xe.header__left,
                children: [
                  S.jsx(an, {
                    to: '/',
                    className: Xe.header__logo,
                    onClick: () => a(!1),
                    children: S.jsx('img', { src: M_, alt: 'Nice Gadgets' }),
                  }),
                  S.jsx('nav', {
                    className: Xe.header__nav,
                    children: S.jsx('ul', {
                      className: Xe.nav_list,
                      children: w_.map((l) =>
                        S.jsx(
                          'li',
                          {
                            className: Xe.nav_list__item,
                            children: S.jsx(qa, {
                              to: l.path,
                              className: ({ isActive: o }) =>
                                o ?
                                  `${Xe.nav_list__link} ${Xe['nav_list__link--active']}`
                                : Xe.nav_list__link,
                              children: l.name,
                            }),
                          },
                          l.id,
                        ),
                      ),
                    }),
                  }),
                ],
              }),
              S.jsxs('div', {
                className: Xe.header__right,
                children: [
                  S.jsxs('div', {
                    className: Xe.header__icons,
                    children: [
                      S.jsx(qa, {
                        to: '/favorites',
                        className: ({ isActive: l }) =>
                          l ?
                            `${Xe.icon_btn} ${Xe['icon_btn--active']}`
                          : Xe.icon_btn,
                        children: S.jsx('img', { src: Py, alt: 'Favorites' }),
                      }),
                      S.jsx(qa, {
                        to: '/cart',
                        className: ({ isActive: l }) =>
                          l ?
                            `${Xe.icon_btn} ${Xe['icon_btn--active']}`
                          : Xe.icon_btn,
                        children: S.jsx('img', { src: Gy, alt: 'Cart' }),
                      }),
                    ],
                  }),
                  S.jsx('button', {
                    'className': Xe.header__burger,
                    'onClick': s,
                    'aria-label': 'Toggle menu',
                    'children': S.jsxs('div', {
                      className: `${Xe.burger_icon} ${t ? Xe['burger_icon--active'] : ''}`,
                      children: [
                        S.jsx('span', {}),
                        S.jsx('span', {}),
                        S.jsx('span', {}),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        S.jsx(h_, { isOpen: t, onClose: () => a(!1) }),
      ],
    });
  },
  O_ = '_footer_1p3ra_2',
  N_ = '_container_1p3ra_19',
  R_ = '_logo_1p3ra_25',
  j_ = '_nav_1p3ra_29',
  L_ = '_back_1p3ra_47',
  z_ = '_arrow_1p3ra_57',
  V_ = '_logoLink_1p3ra_96',
  Ba = {
    footer: O_,
    container: N_,
    logo: R_,
    nav: j_,
    back: L_,
    arrow: z_,
    logoLink: V_,
  },
  B_ = '/assets/logo-BX5z9YCI.svg',
  U_ = () => {
    const t = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return S.jsx('footer', {
      className: Ba.footer,
      children: S.jsxs('div', {
        className: Ba.container,
        children: [
          S.jsx(an, {
            to: '/',
            className: Ba.logoLink,
            children: S.jsx('img', {
              src: B_,
              alt: 'Nice Gadgets',
              className: Ba.logo,
            }),
          }),
          S.jsxs('nav', {
            className: Ba.nav,
            children: [
              S.jsx('a', {
                href: 'https://github.com/Team-Project-Phone-catalog/phone-catalog-frontend',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: 'GITHUB',
              }),
              S.jsx('a', { href: '#', children: 'CONTACTS' }),
              S.jsx('a', { href: '#', children: 'RIGHTS' }),
            ],
          }),
          S.jsxs('div', {
            className: Ba.back,
            children: [
              S.jsx('span', { children: 'Back to top' }),
              S.jsx('button', {
                type: 'button',
                onClick: t,
                className: Ba.arrow,
                children: '↑',
              }),
            ],
          }),
        ],
      }),
    });
  },
  ho = () => fetch('/api/phones.json').then((t) => t.json()),
  mo = () => fetch('/api/tablets.json').then((t) => t.json()),
  po = () => fetch('/api/accessories.json').then((t) => t.json()),
  H_ = () => fetch('/api/products.json').then((t) => t.json()),
  P_ = async (t, a) => {
    const s = await fetch(`/api/${t}.json`);
    if (!s.ok) throw new Error(`Category not found: ${t}`);
    const o = (await s.json()).find((u) => u.id === a);
    if (!o) throw new Error(`Product not found: ${a}`);
    return o;
  },
  G_ = ({ currentPrice: t, fullPrice: a }) =>
    S.jsxs('p', {
      className: 'product-price',
      children: [
        S.jsxs('span', {
          className: 'product-price__current',
          children: ['$', t],
        }),
        S.jsxs('span', {
          className: 'product-price__full',
          children: ['$', a],
        }),
      ],
    }),
  jr = (t) => t.split(' ').slice(0, 2).join(' '),
  ky = ({
    screen: t,
    capacity: a,
    ram: s,
    resolution: l,
    showTopLine: o = !0,
  }) =>
    S.jsxs('div', {
      className: `product-features ${o ? '' : 'product-features--no-line'}`,
      children: [
        S.jsxs('p', {
          className: 'product-features__item',
          children: [
            S.jsx('span', {
              className: 'product-features__name',
              children: 'Screen',
            }),
            S.jsx('span', {
              className: 'product-features__value',
              children: jr(t),
            }),
          ],
        }),
        l &&
          S.jsxs('p', {
            className: 'product-features__item',
            children: [
              S.jsx('span', {
                className: 'product-features__name',
                children: 'Resolution',
              }),
              S.jsx('span', {
                className: 'product-features__value',
                children: jr(l),
              }),
            ],
          }),
        S.jsxs('p', {
          className: 'product-features__item',
          children: [
            S.jsx('span', {
              className: 'product-features__name',
              children: 'Capacity',
            }),
            S.jsx('span', {
              className: 'product-features__value',
              children: jr(a),
            }),
          ],
        }),
        S.jsxs('p', {
          className: 'product-features__item',
          children: [
            S.jsx('span', {
              className: 'product-features__name',
              children: 'RAM',
            }),
            S.jsx('span', {
              className: 'product-features__value',
              children: jr(s),
            }),
          ],
        }),
      ],
    }),
  qy = ({ onAddToCart: t, onToggleFavorite: a, isFavorite: s, isInCart: l }) =>
    S.jsxs('div', {
      className: 'product-actions',
      children: [
        S.jsx('button', {
          type: 'button',
          className: 'product-actions__add-to-cart',
          onClick: t,
          disabled: l,
          children: l ? 'Added' : 'Add to cart',
        }),
        S.jsx('button', {
          'type': 'button',
          'className': `product-actions__favorites ${s ? 'product-actions__favorites--active' : ''}`,
          'onClick': a,
          'aria-label': s ? 'Remove from favorites' : 'Add to favorites',
        }),
      ],
    }),
  Yy = D.createContext(void 0),
  Xy = () => {
    const t = D.useContext(Yy);
    if (!t) throw new Error('useAppContext must be used within AppProvider');
    return t;
  },
  Qy = D.createContext({});
function k_(t) {
  const a = D.useRef(null);
  return (a.current === null && (a.current = t()), a.current);
}
const Ky = typeof window < 'u',
  q_ = Ky ? D.useLayoutEffect : D.useEffect,
  ed = D.createContext(null);
function td(t, a) {
  t.indexOf(a) === -1 && t.push(a);
}
function Ir(t, a) {
  const s = t.indexOf(a);
  s > -1 && t.splice(s, 1);
}
const gn = (t, a, s) =>
  s > a ? a
  : s < t ? t
  : s;
let nd = () => {};
const Pn = {},
  Fy = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function Zy(t) {
  return typeof t == 'object' && t !== null;
}
const $y = (t) => /^0[^.\s]+$/u.test(t);
function Iy(t) {
  let a;
  return () => (a === void 0 && (a = t()), a);
}
const $t = (t) => t,
  Y_ = (t, a) => (s) => a(t(s)),
  ul = (...t) => t.reduce(Y_),
  el = (t, a, s) => {
    const l = a - t;
    return l === 0 ? 1 : (s - t) / l;
  };
class ad {
  constructor() {
    this.subscriptions = [];
  }
  add(a) {
    return (td(this.subscriptions, a), () => Ir(this.subscriptions, a));
  }
  notify(a, s, l) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](a, s, l);
      else
        for (let u = 0; u < o; u++) {
          const f = this.subscriptions[u];
          f && f(a, s, l);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const sn = (t) => t * 1e3,
  Zt = (t) => t / 1e3;
function Jy(t, a) {
  return a ? t * (1e3 / a) : 0;
}
const Wy = (t, a, s) =>
    (((1 - 3 * s + 3 * a) * t + (3 * s - 6 * a)) * t + 3 * a) * t,
  X_ = 1e-7,
  Q_ = 12;
function K_(t, a, s, l, o) {
  let u,
    f,
    p = 0;
  do ((f = a + (s - a) / 2), (u = Wy(f, l, o) - t), u > 0 ? (s = f) : (a = f));
  while (Math.abs(u) > X_ && ++p < Q_);
  return f;
}
function cl(t, a, s, l) {
  if (t === a && s === l) return $t;
  const o = (u) => K_(u, 0, 1, t, s);
  return (u) => (u === 0 || u === 1 ? u : Wy(o(u), a, l));
}
const e0 = (t) => (a) => (a <= 0.5 ? t(2 * a) / 2 : (2 - t(2 * (1 - a))) / 2),
  t0 = (t) => (a) => 1 - t(1 - a),
  n0 = cl(0.33, 1.53, 0.69, 0.99),
  id = t0(n0),
  a0 = e0(id),
  i0 = (t) =>
    (t *= 2) < 1 ? 0.5 * id(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
  sd = (t) => 1 - Math.sin(Math.acos(t)),
  s0 = t0(sd),
  l0 = e0(sd),
  F_ = cl(0.42, 0, 1, 1),
  Z_ = cl(0, 0, 0.58, 1),
  r0 = cl(0.42, 0, 0.58, 1),
  $_ = (t) => Array.isArray(t) && typeof t[0] != 'number',
  o0 = (t) => Array.isArray(t) && typeof t[0] == 'number',
  I_ = {
    linear: $t,
    easeIn: F_,
    easeInOut: r0,
    easeOut: Z_,
    circIn: sd,
    circInOut: l0,
    circOut: s0,
    backIn: id,
    backInOut: a0,
    backOut: n0,
    anticipate: i0,
  },
  J_ = (t) => typeof t == 'string',
  $g = (t) => {
    if (o0(t)) {
      nd(t.length === 4);
      const [a, s, l, o] = t;
      return cl(a, s, l, o);
    } else if (J_(t)) return I_[t];
    return t;
  },
  Lr = [
    'setup',
    'read',
    'resolveKeyframes',
    'preUpdate',
    'update',
    'preRender',
    'render',
    'postRender',
  ];
function W_(t, a) {
  let s = new Set(),
    l = new Set(),
    o = !1,
    u = !1;
  const f = new WeakSet();
  let p = { delta: 0, timestamp: 0, isProcessing: !1 };
  function h(v) {
    (f.has(v) && (m.schedule(v), t()), v(p));
  }
  const m = {
    schedule: (v, g = !1, x = !1) => {
      const A = x && o ? s : l;
      return (g && f.add(v), A.has(v) || A.add(v), v);
    },
    cancel: (v) => {
      (l.delete(v), f.delete(v));
    },
    process: (v) => {
      if (((p = v), o)) {
        u = !0;
        return;
      }
      ((o = !0),
        ([s, l] = [l, s]),
        s.forEach(h),
        s.clear(),
        (o = !1),
        u && ((u = !1), m.process(v)));
    },
  };
  return m;
}
const e2 = 40;
function u0(t, a) {
  let s = !1,
    l = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    u = () => (s = !0),
    f = Lr.reduce((w, U) => ((w[U] = W_(u)), w), {}),
    {
      setup: p,
      read: h,
      resolveKeyframes: m,
      preUpdate: v,
      update: g,
      preRender: x,
      render: b,
      postRender: A,
    } = f,
    E = () => {
      const w = Pn.useManualTiming ? o.timestamp : performance.now();
      ((s = !1),
        Pn.useManualTiming ||
          (o.delta = l ? 1e3 / 60 : Math.max(Math.min(w - o.timestamp, e2), 1)),
        (o.timestamp = w),
        (o.isProcessing = !0),
        p.process(o),
        h.process(o),
        m.process(o),
        v.process(o),
        g.process(o),
        x.process(o),
        b.process(o),
        A.process(o),
        (o.isProcessing = !1),
        s && a && ((l = !1), t(E)));
    },
    M = () => {
      ((s = !0), (l = !0), o.isProcessing || t(E));
    };
  return {
    schedule: Lr.reduce((w, U) => {
      const V = f[U];
      return (
        (w[U] = ($, X = !1, L = !1) => (s || M(), V.schedule($, X, L))),
        w
      );
    }, {}),
    cancel: (w) => {
      for (let U = 0; U < Lr.length; U++) f[Lr[U]].cancel(w);
    },
    state: o,
    steps: f,
  };
}
const {
  schedule: je,
  cancel: pa,
  state: ft,
  steps: Kc,
} = u0(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : $t, !0);
let Gr;
function t2() {
  Gr = void 0;
}
const vt = {
    now: () => (
      Gr === void 0 &&
        vt.set(
          ft.isProcessing || Pn.useManualTiming ?
            ft.timestamp
          : performance.now(),
        ),
      Gr
    ),
    set: (t) => {
      ((Gr = t), queueMicrotask(t2));
    },
  },
  c0 = (t) => (a) => typeof a == 'string' && a.startsWith(t),
  f0 = c0('--'),
  n2 = c0('var(--'),
  ld = (t) => (n2(t) ? a2.test(t.split('/*')[0].trim()) : !1),
  a2 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Ig(t) {
  return typeof t != 'string' ? !1 : t.split('/*')[0].includes('var(--');
}
const Yi = {
    test: (t) => typeof t == 'number',
    parse: parseFloat,
    transform: (t) => t,
  },
  tl = { ...Yi, transform: (t) => gn(0, 1, t) },
  zr = { ...Yi, default: 1 },
  Fs = (t) => Math.round(t * 1e5) / 1e5,
  rd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function i2(t) {
  return t == null;
}
const s2 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  od = (t, a) => (s) =>
    !!(
      (typeof s == 'string' && s2.test(s) && s.startsWith(t)) ||
      (a && !i2(s) && Object.prototype.hasOwnProperty.call(s, a))
    ),
  d0 = (t, a, s) => (l) => {
    if (typeof l != 'string') return l;
    const [o, u, f, p] = l.match(rd);
    return {
      [t]: parseFloat(o),
      [a]: parseFloat(u),
      [s]: parseFloat(f),
      alpha: p !== void 0 ? parseFloat(p) : 1,
    };
  },
  l2 = (t) => gn(0, 255, t),
  Fc = { ...Yi, transform: (t) => Math.round(l2(t)) },
  Ga = {
    test: od('rgb', 'red'),
    parse: d0('red', 'green', 'blue'),
    transform: ({ red: t, green: a, blue: s, alpha: l = 1 }) =>
      'rgba(' +
      Fc.transform(t) +
      ', ' +
      Fc.transform(a) +
      ', ' +
      Fc.transform(s) +
      ', ' +
      Fs(tl.transform(l)) +
      ')',
  };
function r2(t) {
  let a = '',
    s = '',
    l = '',
    o = '';
  return (
    t.length > 5 ?
      ((a = t.substring(1, 3)),
      (s = t.substring(3, 5)),
      (l = t.substring(5, 7)),
      (o = t.substring(7, 9)))
    : ((a = t.substring(1, 2)),
      (s = t.substring(2, 3)),
      (l = t.substring(3, 4)),
      (o = t.substring(4, 5)),
      (a += a),
      (s += s),
      (l += l),
      (o += o)),
    {
      red: parseInt(a, 16),
      green: parseInt(s, 16),
      blue: parseInt(l, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const xf = { test: od('#'), parse: r2, transform: Ga.transform },
  fl = (t) => ({
    test: (a) =>
      typeof a == 'string' && a.endsWith(t) && a.split(' ').length === 1,
    parse: parseFloat,
    transform: (a) => `${a}${t}`,
  }),
  da = fl('deg'),
  mn = fl('%'),
  ae = fl('px'),
  o2 = fl('vh'),
  u2 = fl('vw'),
  Jg = {
    ...mn,
    parse: (t) => mn.parse(t) / 100,
    transform: (t) => mn.transform(t * 100),
  },
  Li = {
    test: od('hsl', 'hue'),
    parse: d0('hue', 'saturation', 'lightness'),
    transform: ({ hue: t, saturation: a, lightness: s, alpha: l = 1 }) =>
      'hsla(' +
      Math.round(t) +
      ', ' +
      mn.transform(Fs(a)) +
      ', ' +
      mn.transform(Fs(s)) +
      ', ' +
      Fs(tl.transform(l)) +
      ')',
  },
  $e = {
    test: (t) => Ga.test(t) || xf.test(t) || Li.test(t),
    parse: (t) =>
      Ga.test(t) ? Ga.parse(t)
      : Li.test(t) ? Li.parse(t)
      : xf.parse(t),
    transform: (t) =>
      typeof t == 'string' ? t
      : t.hasOwnProperty('red') ? Ga.transform(t)
      : Li.transform(t),
    getAnimatableNone: (t) => {
      const a = $e.parse(t);
      return ((a.alpha = 0), $e.transform(a));
    },
  },
  c2 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function f2(t) {
  return (
    isNaN(t) &&
    typeof t == 'string' &&
    (t.match(rd)?.length || 0) + (t.match(c2)?.length || 0) > 0
  );
}
const h0 = 'number',
  m0 = 'color',
  d2 = 'var',
  h2 = 'var(',
  Wg = '${}',
  m2 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function nl(t) {
  const a = t.toString(),
    s = [],
    l = { color: [], number: [], var: [] },
    o = [];
  let u = 0;
  const p = a
    .replace(
      m2,
      (h) => (
        $e.test(h) ? (l.color.push(u), o.push(m0), s.push($e.parse(h)))
        : h.startsWith(h2) ? (l.var.push(u), o.push(d2), s.push(h))
        : (l.number.push(u), o.push(h0), s.push(parseFloat(h))),
        ++u,
        Wg
      ),
    )
    .split(Wg);
  return { values: s, split: p, indexes: l, types: o };
}
function p0(t) {
  return nl(t).values;
}
function g0(t) {
  const { split: a, types: s } = nl(t),
    l = a.length;
  return (o) => {
    let u = '';
    for (let f = 0; f < l; f++)
      if (((u += a[f]), o[f] !== void 0)) {
        const p = s[f];
        p === h0 ? (u += Fs(o[f]))
        : p === m0 ? (u += $e.transform(o[f]))
        : (u += o[f]);
      }
    return u;
  };
}
const p2 = (t) =>
  typeof t == 'number' ? 0
  : $e.test(t) ? $e.getAnimatableNone(t)
  : t;
function g2(t) {
  const a = p0(t);
  return g0(t)(a.map(p2));
}
const ln = {
  test: f2,
  parse: p0,
  createTransformer: g0,
  getAnimatableNone: g2,
};
function Zc(t, a, s) {
  return (
    s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6 ? t + (a - t) * 6 * s
    : s < 1 / 2 ? a
    : s < 2 / 3 ? t + (a - t) * (2 / 3 - s) * 6
    : t
  );
}
function v2({ hue: t, saturation: a, lightness: s, alpha: l }) {
  ((t /= 360), (a /= 100), (s /= 100));
  let o = 0,
    u = 0,
    f = 0;
  if (!a) o = u = f = s;
  else {
    const p = s < 0.5 ? s * (1 + a) : s + a - s * a,
      h = 2 * s - p;
    ((o = Zc(h, p, t + 1 / 3)), (u = Zc(h, p, t)), (f = Zc(h, p, t - 1 / 3)));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(u * 255),
    blue: Math.round(f * 255),
    alpha: l,
  };
}
function Jr(t, a) {
  return (s) => (s > 0 ? a : t);
}
const Be = (t, a, s) => t + (a - t) * s,
  $c = (t, a, s) => {
    const l = t * t,
      o = s * (a * a - l) + l;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  y2 = [xf, Ga, Li],
  b2 = (t) => y2.find((a) => a.test(t));
function ev(t) {
  const a = b2(t);
  if (!a) return !1;
  let s = a.parse(t);
  return (a === Li && (s = v2(s)), s);
}
const tv = (t, a) => {
    const s = ev(t),
      l = ev(a);
    if (!s || !l) return Jr(t, a);
    const o = { ...s };
    return (u) => (
      (o.red = $c(s.red, l.red, u)),
      (o.green = $c(s.green, l.green, u)),
      (o.blue = $c(s.blue, l.blue, u)),
      (o.alpha = Be(s.alpha, l.alpha, u)),
      Ga.transform(o)
    );
  },
  Tf = new Set(['none', 'hidden']);
function S2(t, a) {
  return Tf.has(t) ? (s) => (s <= 0 ? t : a) : (s) => (s >= 1 ? a : t);
}
function x2(t, a) {
  return (s) => Be(t, a, s);
}
function ud(t) {
  return (
    typeof t == 'number' ? x2
    : typeof t == 'string' ?
      ld(t) ? Jr
      : $e.test(t) ? tv
      : E2
    : Array.isArray(t) ? v0
    : typeof t == 'object' ?
      $e.test(t) ?
        tv
      : T2
    : Jr
  );
}
function v0(t, a) {
  const s = [...t],
    l = s.length,
    o = t.map((u, f) => ud(u)(u, a[f]));
  return (u) => {
    for (let f = 0; f < l; f++) s[f] = o[f](u);
    return s;
  };
}
function T2(t, a) {
  const s = { ...t, ...a },
    l = {};
  for (const o in s)
    t[o] !== void 0 && a[o] !== void 0 && (l[o] = ud(t[o])(t[o], a[o]));
  return (o) => {
    for (const u in l) s[u] = l[u](o);
    return s;
  };
}
function _2(t, a) {
  const s = [],
    l = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < a.values.length; o++) {
    const u = a.types[o],
      f = t.indexes[u][l[u]],
      p = t.values[f] ?? 0;
    ((s[o] = p), l[u]++);
  }
  return s;
}
const E2 = (t, a) => {
  const s = ln.createTransformer(a),
    l = nl(t),
    o = nl(a);
  return (
    (
      l.indexes.var.length === o.indexes.var.length &&
        l.indexes.color.length === o.indexes.color.length &&
        l.indexes.number.length >= o.indexes.number.length
    ) ?
      (Tf.has(t) && !o.values.length) || (Tf.has(a) && !l.values.length) ?
        S2(t, a)
      : ul(v0(_2(l, o), o.values), s)
    : Jr(t, a)
  );
};
function y0(t, a, s) {
  return typeof t == 'number' && typeof a == 'number' && typeof s == 'number' ?
      Be(t, a, s)
    : ud(t)(t, a);
}
const C2 = (t) => {
    const a = ({ timestamp: s }) => t(s);
    return {
      start: (s = !0) => je.update(a, s),
      stop: () => pa(a),
      now: () => (ft.isProcessing ? ft.timestamp : vt.now()),
    };
  },
  b0 = (t, a, s = 10) => {
    let l = '';
    const o = Math.max(Math.round(a / s), 2);
    for (let u = 0; u < o; u++)
      l += Math.round(t(u / (o - 1)) * 1e4) / 1e4 + ', ';
    return `linear(${l.substring(0, l.length - 2)})`;
  },
  Wr = 2e4;
function cd(t) {
  let a = 0;
  const s = 50;
  let l = t.next(a);
  for (; !l.done && a < Wr; ) ((a += s), (l = t.next(a)));
  return a >= Wr ? 1 / 0 : a;
}
function A2(t, a = 100, s) {
  const l = s({ ...t, keyframes: [0, a] }),
    o = Math.min(cd(l), Wr);
  return {
    type: 'keyframes',
    ease: (u) => l.next(o * u).value / a,
    duration: Zt(o),
  };
}
const M2 = 5;
function S0(t, a, s) {
  const l = Math.max(a - M2, 0);
  return Jy(s - t(l), a - l);
}
const Ge = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Ic = 0.001;
function w2({
  duration: t = Ge.duration,
  bounce: a = Ge.bounce,
  velocity: s = Ge.velocity,
  mass: l = Ge.mass,
}) {
  let o,
    u,
    f = 1 - a;
  ((f = gn(Ge.minDamping, Ge.maxDamping, f)),
    (t = gn(Ge.minDuration, Ge.maxDuration, Zt(t))),
    f < 1 ?
      ((o = (m) => {
        const v = m * f,
          g = v * t,
          x = v - s,
          b = _f(m, f),
          A = Math.exp(-g);
        return Ic - (x / b) * A;
      }),
      (u = (m) => {
        const g = m * f * t,
          x = g * s + s,
          b = Math.pow(f, 2) * Math.pow(m, 2) * t,
          A = Math.exp(-g),
          E = _f(Math.pow(m, 2), f);
        return ((-o(m) + Ic > 0 ? -1 : 1) * ((x - b) * A)) / E;
      }))
    : ((o = (m) => {
        const v = Math.exp(-m * t),
          g = (m - s) * t + 1;
        return -Ic + v * g;
      }),
      (u = (m) => {
        const v = Math.exp(-m * t),
          g = (s - m) * (t * t);
        return v * g;
      })));
  const p = 5 / t,
    h = O2(o, u, p);
  if (((t = sn(t)), isNaN(h)))
    return { stiffness: Ge.stiffness, damping: Ge.damping, duration: t };
  {
    const m = Math.pow(h, 2) * l;
    return { stiffness: m, damping: f * 2 * Math.sqrt(l * m), duration: t };
  }
}
const D2 = 12;
function O2(t, a, s) {
  let l = s;
  for (let o = 1; o < D2; o++) l = l - t(l) / a(l);
  return l;
}
function _f(t, a) {
  return t * Math.sqrt(1 - a * a);
}
const N2 = ['duration', 'bounce'],
  R2 = ['stiffness', 'damping', 'mass'];
function nv(t, a) {
  return a.some((s) => t[s] !== void 0);
}
function j2(t) {
  let a = {
    velocity: Ge.velocity,
    stiffness: Ge.stiffness,
    damping: Ge.damping,
    mass: Ge.mass,
    isResolvedFromDuration: !1,
    ...t,
  };
  if (!nv(t, R2) && nv(t, N2))
    if (t.visualDuration) {
      const s = t.visualDuration,
        l = (2 * Math.PI) / (s * 1.2),
        o = l * l,
        u = 2 * gn(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(o);
      a = { ...a, mass: Ge.mass, stiffness: o, damping: u };
    } else {
      const s = w2(t);
      ((a = { ...a, ...s, mass: Ge.mass }), (a.isResolvedFromDuration = !0));
    }
  return a;
}
function eo(t = Ge.visualDuration, a = Ge.bounce) {
  const s =
    typeof t != 'object' ?
      { visualDuration: t, keyframes: [0, 1], bounce: a }
    : t;
  let { restSpeed: l, restDelta: o } = s;
  const u = s.keyframes[0],
    f = s.keyframes[s.keyframes.length - 1],
    p = { done: !1, value: u },
    {
      stiffness: h,
      damping: m,
      mass: v,
      duration: g,
      velocity: x,
      isResolvedFromDuration: b,
    } = j2({ ...s, velocity: -Zt(s.velocity || 0) }),
    A = x || 0,
    E = m / (2 * Math.sqrt(h * v)),
    M = f - u,
    _ = Zt(Math.sqrt(h / v)),
    C = Math.abs(M) < 5;
  (l || (l = C ? Ge.restSpeed.granular : Ge.restSpeed.default),
    o || (o = C ? Ge.restDelta.granular : Ge.restDelta.default));
  let w;
  if (E < 1) {
    const V = _f(_, E);
    w = ($) => {
      const X = Math.exp(-E * _ * $);
      return (
        f - X * (((A + E * _ * M) / V) * Math.sin(V * $) + M * Math.cos(V * $))
      );
    };
  } else if (E === 1) w = (V) => f - Math.exp(-_ * V) * (M + (A + _ * M) * V);
  else {
    const V = _ * Math.sqrt(E * E - 1);
    w = ($) => {
      const X = Math.exp(-E * _ * $),
        L = Math.min(V * $, 300);
      return (
        f - (X * ((A + E * _ * M) * Math.sinh(L) + V * M * Math.cosh(L))) / V
      );
    };
  }
  const U = {
    calculatedDuration: (b && g) || null,
    next: (V) => {
      const $ = w(V);
      if (b) p.done = V >= g;
      else {
        let X = V === 0 ? A : 0;
        E < 1 && (X = V === 0 ? sn(A) : S0(w, V, $));
        const L = Math.abs(X) <= l,
          W = Math.abs(f - $) <= o;
        p.done = L && W;
      }
      return ((p.value = p.done ? f : $), p);
    },
    toString: () => {
      const V = Math.min(cd(U), Wr),
        $ = b0((X) => U.next(V * X).value, V, 30);
      return V + 'ms ' + $;
    },
    toTransition: () => {},
  };
  return U;
}
eo.applyToOptions = (t) => {
  const a = A2(t, 100, eo);
  return (
    (t.ease = a.ease),
    (t.duration = sn(a.duration)),
    (t.type = 'keyframes'),
    t
  );
};
function Ef({
  keyframes: t,
  velocity: a = 0,
  power: s = 0.8,
  timeConstant: l = 325,
  bounceDamping: o = 10,
  bounceStiffness: u = 500,
  modifyTarget: f,
  min: p,
  max: h,
  restDelta: m = 0.5,
  restSpeed: v,
}) {
  const g = t[0],
    x = { done: !1, value: g },
    b = (L) => (p !== void 0 && L < p) || (h !== void 0 && L > h),
    A = (L) =>
      p === void 0 ? h
      : h === void 0 || Math.abs(p - L) < Math.abs(h - L) ? p
      : h;
  let E = s * a;
  const M = g + E,
    _ = f === void 0 ? M : f(M);
  _ !== M && (E = _ - g);
  const C = (L) => -E * Math.exp(-L / l),
    w = (L) => _ + C(L),
    U = (L) => {
      const W = C(L),
        Z = w(L);
      ((x.done = Math.abs(W) <= m), (x.value = x.done ? _ : Z));
    };
  let V, $;
  const X = (L) => {
    b(x.value) &&
      ((V = L),
      ($ = eo({
        keyframes: [x.value, A(x.value)],
        velocity: S0(w, L, x.value),
        damping: o,
        stiffness: u,
        restDelta: m,
        restSpeed: v,
      })));
  };
  return (
    X(0),
    {
      calculatedDuration: null,
      next: (L) => {
        let W = !1;
        return (
          !$ && V === void 0 && ((W = !0), U(L), X(L)),
          V !== void 0 && L >= V ? $.next(L - V) : (!W && U(L), x)
        );
      },
    }
  );
}
function L2(t, a, s) {
  const l = [],
    o = s || Pn.mix || y0,
    u = t.length - 1;
  for (let f = 0; f < u; f++) {
    let p = o(t[f], t[f + 1]);
    if (a) {
      const h = Array.isArray(a) ? a[f] || $t : a;
      p = ul(h, p);
    }
    l.push(p);
  }
  return l;
}
function z2(t, a, { clamp: s = !0, ease: l, mixer: o } = {}) {
  const u = t.length;
  if ((nd(u === a.length), u === 1)) return () => a[0];
  if (u === 2 && a[0] === a[1]) return () => a[1];
  const f = t[0] === t[1];
  t[0] > t[u - 1] && ((t = [...t].reverse()), (a = [...a].reverse()));
  const p = L2(a, l, o),
    h = p.length,
    m = (v) => {
      if (f && v < t[0]) return a[0];
      let g = 0;
      if (h > 1) for (; g < t.length - 2 && !(v < t[g + 1]); g++);
      const x = el(t[g], t[g + 1], v);
      return p[g](x);
    };
  return s ? (v) => m(gn(t[0], t[u - 1], v)) : m;
}
function V2(t, a) {
  const s = t[t.length - 1];
  for (let l = 1; l <= a; l++) {
    const o = el(0, a, l);
    t.push(Be(s, 1, o));
  }
}
function B2(t) {
  const a = [0];
  return (V2(a, t.length - 1), a);
}
function U2(t, a) {
  return t.map((s) => s * a);
}
function H2(t, a) {
  return t.map(() => a || r0).splice(0, t.length - 1);
}
function Zs({
  duration: t = 300,
  keyframes: a,
  times: s,
  ease: l = 'easeInOut',
}) {
  const o = $_(l) ? l.map($g) : $g(l),
    u = { done: !1, value: a[0] },
    f = U2(s && s.length === a.length ? s : B2(a), t),
    p = z2(f, a, { ease: Array.isArray(o) ? o : H2(a, o) });
  return {
    calculatedDuration: t,
    next: (h) => ((u.value = p(h)), (u.done = h >= t), u),
  };
}
const P2 = (t) => t !== null;
function fd(t, { repeat: a, repeatType: s = 'loop' }, l, o = 1) {
  const u = t.filter(P2),
    p = o < 0 || (a && s !== 'loop' && a % 2 === 1) ? 0 : u.length - 1;
  return !p || l === void 0 ? u[p] : l;
}
const G2 = { decay: Ef, inertia: Ef, tween: Zs, keyframes: Zs, spring: eo };
function x0(t) {
  typeof t.type == 'string' && (t.type = G2[t.type]);
}
class dd {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((a) => {
      this.resolve = a;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(a, s) {
    return this.finished.then(a, s);
  }
}
const k2 = (t) => t / 100;
class hd extends dd {
  constructor(a) {
    (super(),
      (this.state = 'idle'),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        const { motionValue: s } = this.options;
        (s && s.updatedAt !== vt.now() && this.tick(vt.now()),
          (this.isStopped = !0),
          this.state !== 'idle' && (this.teardown(), this.options.onStop?.()));
      }),
      (this.options = a),
      this.initAnimation(),
      this.play(),
      a.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: a } = this;
    x0(a);
    const {
      type: s = Zs,
      repeat: l = 0,
      repeatDelay: o = 0,
      repeatType: u,
      velocity: f = 0,
    } = a;
    let { keyframes: p } = a;
    const h = s || Zs;
    h !== Zs &&
      typeof p[0] != 'number' &&
      ((this.mixKeyframes = ul(k2, y0(p[0], p[1]))), (p = [0, 100]));
    const m = h({ ...a, keyframes: p });
    (u === 'mirror' &&
      (this.mirroredGenerator = h({
        ...a,
        keyframes: [...p].reverse(),
        velocity: -f,
      })),
      m.calculatedDuration === null && (m.calculatedDuration = cd(m)));
    const { calculatedDuration: v } = m;
    ((this.calculatedDuration = v),
      (this.resolvedDuration = v + o),
      (this.totalDuration = this.resolvedDuration * (l + 1) - o),
      (this.generator = m));
  }
  updateTime(a) {
    const s = Math.round(a - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ?
      (this.currentTime = this.holdTime)
    : (this.currentTime = s);
  }
  tick(a, s = !1) {
    const {
      generator: l,
      totalDuration: o,
      mixKeyframes: u,
      mirroredGenerator: f,
      resolvedDuration: p,
      calculatedDuration: h,
    } = this;
    if (this.startTime === null) return l.next(0);
    const {
      delay: m = 0,
      keyframes: v,
      repeat: g,
      repeatType: x,
      repeatDelay: b,
      type: A,
      onUpdate: E,
      finalKeyframe: M,
    } = this.options;
    (this.speed > 0 ?
      (this.startTime = Math.min(this.startTime, a))
    : this.speed < 0 &&
      (this.startTime = Math.min(a - o / this.speed, this.startTime)),
      s ? (this.currentTime = a) : this.updateTime(a));
    const _ = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1),
      C = this.playbackSpeed >= 0 ? _ < 0 : _ > o;
    ((this.currentTime = Math.max(_, 0)),
      this.state === 'finished' &&
        this.holdTime === null &&
        (this.currentTime = o));
    let w = this.currentTime,
      U = l;
    if (g) {
      const L = Math.min(this.currentTime, o) / p;
      let W = Math.floor(L),
        Z = L % 1;
      (!Z && L >= 1 && (Z = 1),
        Z === 1 && W--,
        (W = Math.min(W, g + 1)),
        W % 2 &&
          (x === 'reverse' ?
            ((Z = 1 - Z), b && (Z -= b / p))
          : x === 'mirror' && (U = f)),
        (w = gn(0, 1, Z) * p));
    }
    const V = C ? { done: !1, value: v[0] } : U.next(w);
    u && (V.value = u(V.value));
    let { done: $ } = V;
    !C &&
      h !== null &&
      ($ =
        this.playbackSpeed >= 0 ?
          this.currentTime >= o
        : this.currentTime <= 0);
    const X =
      this.holdTime === null &&
      (this.state === 'finished' || (this.state === 'running' && $));
    return (
      X && A !== Ef && (V.value = fd(v, this.options, M, this.speed)),
      E && E(V.value),
      X && this.finish(),
      V
    );
  }
  then(a, s) {
    return this.finished.then(a, s);
  }
  get duration() {
    return Zt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: a = 0 } = this.options || {};
    return this.duration + Zt(a);
  }
  get time() {
    return Zt(this.currentTime);
  }
  set time(a) {
    ((a = sn(a)),
      (this.currentTime = a),
      (
        this.startTime === null ||
        this.holdTime !== null ||
        this.playbackSpeed === 0
      ) ?
        (this.holdTime = a)
      : this.driver &&
        (this.startTime = this.driver.now() - a / this.playbackSpeed),
      this.driver?.start(!1));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(a) {
    this.updateTime(vt.now());
    const s = this.playbackSpeed !== a;
    ((this.playbackSpeed = a), s && (this.time = Zt(this.currentTime)));
  }
  play() {
    if (this.isStopped) return;
    const { driver: a = C2, startTime: s } = this.options;
    (this.driver || (this.driver = a((o) => this.tick(o))),
      this.options.onPlay?.());
    const l = this.driver.now();
    (this.state === 'finished' ? (this.updateFinished(), (this.startTime = l))
    : this.holdTime !== null ? (this.startTime = l - this.holdTime)
    : this.startTime || (this.startTime = s ?? l),
      this.state === 'finished' &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = 'running'),
      this.driver.start());
  }
  pause() {
    ((this.state = 'paused'),
      this.updateTime(vt.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== 'running' && this.play(),
      (this.state = 'finished'),
      (this.holdTime = null));
  }
  finish() {
    (this.notifyFinished(),
      this.teardown(),
      (this.state = 'finished'),
      this.options.onComplete?.());
  }
  cancel() {
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      this.options.onCancel?.());
  }
  teardown() {
    ((this.state = 'idle'),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(a) {
    return ((this.startTime = 0), this.tick(a, !0));
  }
  attachTimeline(a) {
    return (
      this.options.allowFlatten &&
        ((this.options.type = 'keyframes'),
        (this.options.ease = 'linear'),
        this.initAnimation()),
      this.driver?.stop(),
      a.observe(this)
    );
  }
}
function q2(t) {
  for (let a = 1; a < t.length; a++) t[a] ?? (t[a] = t[a - 1]);
}
const ka = (t) => (t * 180) / Math.PI,
  Cf = (t) => {
    const a = ka(Math.atan2(t[1], t[0]));
    return Af(a);
  },
  Y2 = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: Cf,
    rotateZ: Cf,
    skewX: (t) => ka(Math.atan(t[1])),
    skewY: (t) => ka(Math.atan(t[2])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
  },
  Af = (t) => ((t = t % 360), t < 0 && (t += 360), t),
  av = Cf,
  iv = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
  sv = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
  X2 = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: iv,
    scaleY: sv,
    scale: (t) => (iv(t) + sv(t)) / 2,
    rotateX: (t) => Af(ka(Math.atan2(t[6], t[5]))),
    rotateY: (t) => Af(ka(Math.atan2(-t[2], t[0]))),
    rotateZ: av,
    rotate: av,
    skewX: (t) => ka(Math.atan(t[4])),
    skewY: (t) => ka(Math.atan(t[1])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
  };
function Mf(t) {
  return t.includes('scale') ? 1 : 0;
}
function wf(t, a) {
  if (!t || t === 'none') return Mf(a);
  const s = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let l, o;
  if (s) ((l = X2), (o = s));
  else {
    const p = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((l = Y2), (o = p));
  }
  if (!o) return Mf(a);
  const u = l[a],
    f = o[1].split(',').map(K2);
  return typeof u == 'function' ? u(f) : f[u];
}
const Q2 = (t, a) => {
  const { transform: s = 'none' } = getComputedStyle(t);
  return wf(s, a);
};
function K2(t) {
  return parseFloat(t.trim());
}
const Xi = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY',
  ],
  Qi = new Set(Xi),
  lv = (t) => t === Yi || t === ae,
  F2 = new Set(['x', 'y', 'z']),
  Z2 = Xi.filter((t) => !F2.has(t));
function $2(t) {
  const a = [];
  return (
    Z2.forEach((s) => {
      const l = t.getValue(s);
      l !== void 0 &&
        (a.push([s, l.get()]), l.set(s.startsWith('scale') ? 1 : 0));
    }),
    a
  );
}
const ha = {
  width: ({ x: t }, { paddingLeft: a = '0', paddingRight: s = '0' }) =>
    t.max - t.min - parseFloat(a) - parseFloat(s),
  height: ({ y: t }, { paddingTop: a = '0', paddingBottom: s = '0' }) =>
    t.max - t.min - parseFloat(a) - parseFloat(s),
  top: (t, { top: a }) => parseFloat(a),
  left: (t, { left: a }) => parseFloat(a),
  bottom: ({ y: t }, { top: a }) => parseFloat(a) + (t.max - t.min),
  right: ({ x: t }, { left: a }) => parseFloat(a) + (t.max - t.min),
  x: (t, { transform: a }) => wf(a, 'x'),
  y: (t, { transform: a }) => wf(a, 'y'),
};
ha.translateX = ha.x;
ha.translateY = ha.y;
const Ya = new Set();
let Df = !1,
  Of = !1,
  Nf = !1;
function T0() {
  if (Of) {
    const t = Array.from(Ya).filter((l) => l.needsMeasurement),
      a = new Set(t.map((l) => l.element)),
      s = new Map();
    (a.forEach((l) => {
      const o = $2(l);
      o.length && (s.set(l, o), l.render());
    }),
      t.forEach((l) => l.measureInitialState()),
      a.forEach((l) => {
        l.render();
        const o = s.get(l);
        o &&
          o.forEach(([u, f]) => {
            l.getValue(u)?.set(f);
          });
      }),
      t.forEach((l) => l.measureEndState()),
      t.forEach((l) => {
        l.suspendedScrollY !== void 0 && window.scrollTo(0, l.suspendedScrollY);
      }));
  }
  ((Of = !1), (Df = !1), Ya.forEach((t) => t.complete(Nf)), Ya.clear());
}
function _0() {
  Ya.forEach((t) => {
    (t.readKeyframes(), t.needsMeasurement && (Of = !0));
  });
}
function I2() {
  ((Nf = !0), _0(), T0(), (Nf = !1));
}
class md {
  constructor(a, s, l, o, u, f = !1) {
    ((this.state = 'pending'),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...a]),
      (this.onComplete = s),
      (this.name = l),
      (this.motionValue = o),
      (this.element = u),
      (this.isAsync = f));
  }
  scheduleResolve() {
    ((this.state = 'scheduled'),
      this.isAsync ?
        (Ya.add(this), Df || ((Df = !0), je.read(_0), je.resolveKeyframes(T0)))
      : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: a,
      name: s,
      element: l,
      motionValue: o,
    } = this;
    if (a[0] === null) {
      const u = o?.get(),
        f = a[a.length - 1];
      if (u !== void 0) a[0] = u;
      else if (l && s) {
        const p = l.readValue(s, f);
        p != null && (a[0] = p);
      }
      (a[0] === void 0 && (a[0] = f), o && u === void 0 && o.set(a[0]));
    }
    q2(a);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(a = !1) {
    ((this.state = 'complete'),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, a),
      Ya.delete(this));
  }
  cancel() {
    this.state === 'scheduled' && (Ya.delete(this), (this.state = 'pending'));
  }
  resume() {
    this.state === 'pending' && this.scheduleResolve();
  }
}
const J2 = (t) => t.startsWith('--');
function W2(t, a, s) {
  J2(a) ? t.style.setProperty(a, s) : (t.style[a] = s);
}
const eE = {};
function E0(t, a) {
  const s = Iy(t);
  return () => eE[a] ?? s();
}
const tE = E0(() => window.ScrollTimeline !== void 0, 'scrollTimeline'),
  C0 = E0(() => {
    try {
      document
        .createElement('div')
        .animate({ opacity: 0 }, { easing: 'linear(0, 1)' });
    } catch {
      return !1;
    }
    return !0;
  }, 'linearEasing'),
  Ks = ([t, a, s, l]) => `cubic-bezier(${t}, ${a}, ${s}, ${l})`,
  rv = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: Ks([0, 0.65, 0.55, 1]),
    circOut: Ks([0.55, 0, 1, 0.45]),
    backIn: Ks([0.31, 0.01, 0.66, -0.59]),
    backOut: Ks([0.33, 1.53, 0.69, 0.99]),
  };
function A0(t, a) {
  if (t)
    return (
      typeof t == 'function' ?
        C0() ? b0(t, a)
        : 'ease-out'
      : o0(t) ? Ks(t)
      : Array.isArray(t) ? t.map((s) => A0(s, a) || rv.easeOut)
      : rv[t]
    );
}
function nE(
  t,
  a,
  s,
  {
    delay: l = 0,
    duration: o = 300,
    repeat: u = 0,
    repeatType: f = 'loop',
    ease: p = 'easeOut',
    times: h,
  } = {},
  m = void 0,
) {
  const v = { [a]: s };
  h && (v.offset = h);
  const g = A0(p, o);
  Array.isArray(g) && (v.easing = g);
  const x = {
    delay: l,
    duration: o,
    easing: Array.isArray(g) ? 'linear' : g,
    fill: 'both',
    iterations: u + 1,
    direction: f === 'reverse' ? 'alternate' : 'normal',
  };
  return (m && (x.pseudoElement = m), t.animate(v, x));
}
function M0(t) {
  return typeof t == 'function' && 'applyToOptions' in t;
}
function aE({ type: t, ...a }) {
  return M0(t) && C0() ?
      t.applyToOptions(a)
    : (a.duration ?? (a.duration = 300), a.ease ?? (a.ease = 'easeOut'), a);
}
class w0 extends dd {
  constructor(a) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !a)
    )
      return;
    const {
      element: s,
      name: l,
      keyframes: o,
      pseudoElement: u,
      allowFlatten: f = !1,
      finalKeyframe: p,
      onComplete: h,
    } = a;
    ((this.isPseudoElement = !!u),
      (this.allowFlatten = f),
      (this.options = a),
      nd(typeof a.type != 'string'));
    const m = aE(a);
    ((this.animation = nE(s, l, o, m, u)),
      m.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !u)) {
          const v = fd(o, this.options, p, this.speed);
          (this.updateMotionValue ? this.updateMotionValue(v) : W2(s, l, v),
            this.animation.cancel());
        }
        (h?.(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === 'finished' && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: a } = this;
    a === 'idle' ||
      a === 'finished' ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    const a = this.options?.element;
    !this.isPseudoElement && a?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const a = this.animation.effect?.getComputedTiming?.().duration || 0;
    return Zt(Number(a));
  }
  get iterationDuration() {
    const { delay: a = 0 } = this.options || {};
    return this.duration + Zt(a);
  }
  get time() {
    return Zt(Number(this.animation.currentTime) || 0);
  }
  set time(a) {
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = sn(a)));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(a) {
    (a < 0 && (this.finishedTime = null), (this.animation.playbackRate = a));
  }
  get state() {
    return this.finishedTime !== null ? 'finished' : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(a) {
    this.manualStartTime = this.animation.startTime = a;
  }
  attachTimeline({ timeline: a, observe: s }) {
    return (
      this.allowFlatten &&
        this.animation.effect?.updateTiming({ easing: 'linear' }),
      (this.animation.onfinish = null),
      a && tE() ? ((this.animation.timeline = a), $t) : s(this)
    );
  }
}
const D0 = { anticipate: i0, backInOut: a0, circInOut: l0 };
function iE(t) {
  return t in D0;
}
function sE(t) {
  typeof t.ease == 'string' && iE(t.ease) && (t.ease = D0[t.ease]);
}
const Jc = 10;
class lE extends w0 {
  constructor(a) {
    (sE(a),
      x0(a),
      super(a),
      a.startTime !== void 0 && (this.startTime = a.startTime),
      (this.options = a));
  }
  updateMotionValue(a) {
    const {
      motionValue: s,
      onUpdate: l,
      onComplete: o,
      element: u,
      ...f
    } = this.options;
    if (!s) return;
    if (a !== void 0) {
      s.set(a);
      return;
    }
    const p = new hd({ ...f, autoplay: !1 }),
      h = Math.max(Jc, vt.now() - this.startTime),
      m = gn(0, Jc, h - Jc);
    (s.setWithVelocity(
      p.sample(Math.max(0, h - m)).value,
      p.sample(h).value,
      m,
    ),
      p.stop());
  }
}
const ov = (t, a) =>
  a === 'zIndex' ? !1 : (
    !!(
      typeof t == 'number' ||
      Array.isArray(t) ||
      (typeof t == 'string' &&
        (ln.test(t) || t === '0') &&
        !t.startsWith('url('))
    )
  );
function rE(t) {
  const a = t[0];
  if (t.length === 1) return !0;
  for (let s = 0; s < t.length; s++) if (t[s] !== a) return !0;
}
function oE(t, a, s, l) {
  const o = t[0];
  if (o === null) return !1;
  if (a === 'display' || a === 'visibility') return !0;
  const u = t[t.length - 1],
    f = ov(o, a),
    p = ov(u, a);
  return !f || !p ? !1 : rE(t) || ((s === 'spring' || M0(s)) && l);
}
function Rf(t) {
  ((t.duration = 0), (t.type = 'keyframes'));
}
const uE = new Set(['opacity', 'clipPath', 'filter', 'transform']),
  cE = Iy(() => Object.hasOwnProperty.call(Element.prototype, 'animate'));
function fE(t) {
  const {
    motionValue: a,
    name: s,
    repeatDelay: l,
    repeatType: o,
    damping: u,
    type: f,
  } = t;
  if (!(a?.owner?.current instanceof HTMLElement)) return !1;
  const { onUpdate: h, transformTemplate: m } = a.owner.getProps();
  return (
    cE() &&
    s &&
    uE.has(s) &&
    (s !== 'transform' || !m) &&
    !h &&
    !l &&
    o !== 'mirror' &&
    u !== 0 &&
    f !== 'inertia'
  );
}
const dE = 40;
class hE extends dd {
  constructor({
    autoplay: a = !0,
    delay: s = 0,
    type: l = 'keyframes',
    repeat: o = 0,
    repeatDelay: u = 0,
    repeatType: f = 'loop',
    keyframes: p,
    name: h,
    motionValue: m,
    element: v,
    ...g
  }) {
    (super(),
      (this.stop = () => {
        (this._animation && (this._animation.stop(), this.stopTimeline?.()),
          this.keyframeResolver?.cancel());
      }),
      (this.createdAt = vt.now()));
    const x = {
        autoplay: a,
        delay: s,
        type: l,
        repeat: o,
        repeatDelay: u,
        repeatType: f,
        name: h,
        motionValue: m,
        element: v,
        ...g,
      },
      b = v?.KeyframeResolver || md;
    ((this.keyframeResolver = new b(
      p,
      (A, E, M) => this.onKeyframesResolved(A, E, x, !M),
      h,
      m,
      v,
    )),
      this.keyframeResolver?.scheduleResolve());
  }
  onKeyframesResolved(a, s, l, o) {
    this.keyframeResolver = void 0;
    const {
      name: u,
      type: f,
      velocity: p,
      delay: h,
      isHandoff: m,
      onUpdate: v,
    } = l;
    ((this.resolvedAt = vt.now()),
      oE(a, u, f, p) ||
        ((Pn.instantAnimations || !h) && v?.(fd(a, l, s)),
        (a[0] = a[a.length - 1]),
        Rf(l),
        (l.repeat = 0)));
    const x = {
        startTime:
          o ?
            this.resolvedAt ?
              this.resolvedAt - this.createdAt > dE ?
                this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: s,
        ...l,
        keyframes: a,
      },
      b = !m && fE(x),
      A = x.motionValue?.owner?.current,
      E = b ? new lE({ ...x, element: A }) : new hd(x);
    (E.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch($t),
      this.pendingTimeline &&
        ((this.stopTimeline = E.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = E));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(a, s) {
    return this.finished.finally(a).then(() => {});
  }
  get animation() {
    return (
      this._animation || (this.keyframeResolver?.resume(), I2()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(a) {
    this.animation.time = a;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(a) {
    this.animation.speed = a;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(a) {
    return (
      this._animation ?
        (this.stopTimeline = this.animation.attachTimeline(a))
      : (this.pendingTimeline = a),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    (this._animation && this.animation.cancel(),
      this.keyframeResolver?.cancel());
  }
}
function O0(t, a, s, l = 0, o = 1) {
  const u = Array.from(t)
      .sort((m, v) => m.sortNodePosition(v))
      .indexOf(a),
    f = t.size,
    p = (f - 1) * l;
  return (
    typeof s == 'function' ? s(u, f)
    : o === 1 ? u * l
    : p - u * l
  );
}
const mE = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function pE(t) {
  const a = mE.exec(t);
  if (!a) return [,];
  const [, s, l, o] = a;
  return [`--${s ?? l}`, o];
}
function N0(t, a, s = 1) {
  const [l, o] = pE(t);
  if (!l) return;
  const u = window.getComputedStyle(a).getPropertyValue(l);
  if (u) {
    const f = u.trim();
    return Fy(f) ? parseFloat(f) : f;
  }
  return ld(o) ? N0(o, a, s + 1) : o;
}
const gE = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  vE = (t) => ({
    type: 'spring',
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  yE = { type: 'keyframes', duration: 0.8 },
  bE = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  SE = (t, { keyframes: a }) =>
    a.length > 2 ? yE
    : Qi.has(t) ?
      t.startsWith('scale') ?
        vE(a[1])
      : gE
    : bE,
  xE = (t) => t !== null;
function TE(t, { repeat: a, repeatType: s = 'loop' }, l) {
  const o = t.filter(xE),
    u = a && s !== 'loop' && a % 2 === 1 ? 0 : o.length - 1;
  return o[u];
}
function R0(t, a) {
  if (t?.inherit && a) {
    const { inherit: s, ...l } = t;
    return { ...a, ...l };
  }
  return t;
}
function pd(t, a) {
  const s = t?.[a] ?? t?.default ?? t;
  return s !== t ? R0(s, t) : s;
}
function _E({
  when: t,
  delay: a,
  delayChildren: s,
  staggerChildren: l,
  staggerDirection: o,
  repeat: u,
  repeatType: f,
  repeatDelay: p,
  from: h,
  elapsed: m,
  ...v
}) {
  return !!Object.keys(v).length;
}
const gd =
  (t, a, s, l = {}, o, u) =>
  (f) => {
    const p = pd(l, t) || {},
      h = p.delay || l.delay || 0;
    let { elapsed: m = 0 } = l;
    m = m - sn(h);
    const v = {
      keyframes: Array.isArray(s) ? s : [null, s],
      ease: 'easeOut',
      velocity: a.getVelocity(),
      ...p,
      delay: -m,
      onUpdate: (x) => {
        (a.set(x), p.onUpdate && p.onUpdate(x));
      },
      onComplete: () => {
        (f(), p.onComplete && p.onComplete());
      },
      name: t,
      motionValue: a,
      element: u ? void 0 : o,
    };
    (_E(p) || Object.assign(v, SE(t, v)),
      v.duration && (v.duration = sn(v.duration)),
      v.repeatDelay && (v.repeatDelay = sn(v.repeatDelay)),
      v.from !== void 0 && (v.keyframes[0] = v.from));
    let g = !1;
    if (
      ((v.type === !1 || (v.duration === 0 && !v.repeatDelay)) &&
        (Rf(v), v.delay === 0 && (g = !0)),
      (Pn.instantAnimations || Pn.skipAnimations || o?.shouldSkipAnimations) &&
        ((g = !0), Rf(v), (v.delay = 0)),
      (v.allowFlatten = !p.type && !p.ease),
      g && !u && a.get() !== void 0)
    ) {
      const x = TE(v.keyframes, p);
      if (x !== void 0) {
        je.update(() => {
          (v.onUpdate(x), v.onComplete());
        });
        return;
      }
    }
    return p.isSync ? new hd(v) : new hE(v);
  };
function uv(t) {
  const a = [{}, {}];
  return (
    t?.values.forEach((s, l) => {
      ((a[0][l] = s.get()), (a[1][l] = s.getVelocity()));
    }),
    a
  );
}
function vd(t, a, s, l) {
  if (typeof a == 'function') {
    const [o, u] = uv(l);
    a = a(s !== void 0 ? s : t.custom, o, u);
  }
  if (
    (typeof a == 'string' && (a = t.variants && t.variants[a]),
    typeof a == 'function')
  ) {
    const [o, u] = uv(l);
    a = a(s !== void 0 ? s : t.custom, o, u);
  }
  return a;
}
function Hi(t, a, s) {
  const l = t.getProps();
  return vd(l, a, s !== void 0 ? s : l.custom, t);
}
const j0 = new Set([
    'width',
    'height',
    'top',
    'left',
    'right',
    'bottom',
    ...Xi,
  ]),
  cv = 30,
  EE = (t) => !isNaN(parseFloat(t));
class CE {
  constructor(a, s = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (l) => {
        const o = vt.now();
        if (
          (this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(l),
          this.current !== this.prev &&
            (this.events.change?.notify(this.current), this.dependents))
        )
          for (const u of this.dependents) u.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(a),
      (this.owner = s.owner));
  }
  setCurrent(a) {
    ((this.current = a),
      (this.updatedAt = vt.now()),
      this.canTrackVelocity === null &&
        a !== void 0 &&
        (this.canTrackVelocity = EE(this.current)));
  }
  setPrevFrameValue(a = this.current) {
    ((this.prevFrameValue = a), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(a) {
    return this.on('change', a);
  }
  on(a, s) {
    this.events[a] || (this.events[a] = new ad());
    const l = this.events[a].add(s);
    return a === 'change' ?
        () => {
          (l(),
            je.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : l;
  }
  clearListeners() {
    for (const a in this.events) this.events[a].clear();
  }
  attach(a, s) {
    ((this.passiveEffect = a), (this.stopPassiveEffect = s));
  }
  set(a) {
    this.passiveEffect ?
      this.passiveEffect(a, this.updateAndNotify)
    : this.updateAndNotify(a);
  }
  setWithVelocity(a, s, l) {
    (this.set(s),
      (this.prev = void 0),
      (this.prevFrameValue = a),
      (this.prevUpdatedAt = this.updatedAt - l));
  }
  jump(a, s = !0) {
    (this.updateAndNotify(a),
      (this.prev = a),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      s && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(a) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(a));
  }
  removeDependent(a) {
    this.dependents && this.dependents.delete(a);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const a = vt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      a - this.updatedAt > cv
    )
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, cv);
    return Jy(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
  }
  start(a) {
    return (
      this.stop(),
      new Promise((s) => {
        ((this.hasAnimated = !0),
          (this.animation = a(s)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.dependents?.clear(),
      this.events.destroy?.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function Gi(t, a) {
  return new CE(t, a);
}
const jf = (t) => Array.isArray(t);
function AE(t, a, s) {
  t.hasValue(a) ? t.getValue(a).set(s) : t.addValue(a, Gi(s));
}
function ME(t) {
  return jf(t) ? t[t.length - 1] || 0 : t;
}
function wE(t, a) {
  const s = Hi(t, a);
  let { transitionEnd: l = {}, transition: o = {}, ...u } = s || {};
  u = { ...u, ...l };
  for (const f in u) {
    const p = ME(u[f]);
    AE(t, f, p);
  }
}
const ht = (t) => !!(t && t.getVelocity);
function DE(t) {
  return !!(ht(t) && t.add);
}
function Lf(t, a) {
  const s = t.getValue('willChange');
  if (DE(s)) return s.add(a);
  if (!s && Pn.WillChange) {
    const l = new Pn.WillChange('auto');
    (t.addValue('willChange', l), l.add(a));
  }
}
function yd(t) {
  return t.replace(/([A-Z])/g, (a) => `-${a.toLowerCase()}`);
}
const OE = 'framerAppearId',
  L0 = 'data-' + yd(OE);
function z0(t) {
  return t.props[L0];
}
function NE({ protectedKeys: t, needsAnimating: a }, s) {
  const l = t.hasOwnProperty(s) && a[s] !== !0;
  return ((a[s] = !1), l);
}
function V0(t, a, { delay: s = 0, transitionOverride: l, type: o } = {}) {
  let { transition: u, transitionEnd: f, ...p } = a;
  const h = t.getDefaultTransition();
  u = u ? R0(u, h) : h;
  const m = u?.reduceMotion;
  l && (u = l);
  const v = [],
    g = o && t.animationState && t.animationState.getState()[o];
  for (const x in p) {
    const b = t.getValue(x, t.latestValues[x] ?? null),
      A = p[x];
    if (A === void 0 || (g && NE(g, x))) continue;
    const E = { delay: s, ...pd(u || {}, x) },
      M = b.get();
    if (
      M !== void 0 &&
      !b.isAnimating &&
      !Array.isArray(A) &&
      A === M &&
      !E.velocity
    )
      continue;
    let _ = !1;
    if (window.MotionHandoffAnimation) {
      const U = z0(t);
      if (U) {
        const V = window.MotionHandoffAnimation(U, x, je);
        V !== null && ((E.startTime = V), (_ = !0));
      }
    }
    Lf(t, x);
    const C = m ?? t.shouldReduceMotion;
    b.start(gd(x, b, A, C && j0.has(x) ? { type: !1 } : E, t, _));
    const w = b.animation;
    w && v.push(w);
  }
  if (f) {
    const x = () =>
      je.update(() => {
        f && wE(t, f);
      });
    v.length ? Promise.all(v).then(x) : x();
  }
  return v;
}
function zf(t, a, s = {}) {
  const l = Hi(t, a, s.type === 'exit' ? t.presenceContext?.custom : void 0);
  let { transition: o = t.getDefaultTransition() || {} } = l || {};
  s.transitionOverride && (o = s.transitionOverride);
  const u = l ? () => Promise.all(V0(t, l, s)) : () => Promise.resolve(),
    f =
      t.variantChildren && t.variantChildren.size ?
        (h = 0) => {
          const {
            delayChildren: m = 0,
            staggerChildren: v,
            staggerDirection: g,
          } = o;
          return RE(t, a, h, m, v, g, s);
        }
      : () => Promise.resolve(),
    { when: p } = o;
  if (p) {
    const [h, m] = p === 'beforeChildren' ? [u, f] : [f, u];
    return h().then(() => m());
  } else return Promise.all([u(), f(s.delay)]);
}
function RE(t, a, s = 0, l = 0, o = 0, u = 1, f) {
  const p = [];
  for (const h of t.variantChildren)
    (h.notify('AnimationStart', a),
      p.push(
        zf(h, a, {
          ...f,
          delay:
            s +
            (typeof l == 'function' ? 0 : l) +
            O0(t.variantChildren, h, l, o, u),
        }).then(() => h.notify('AnimationComplete', a)),
      ));
  return Promise.all(p);
}
function jE(t, a, s = {}) {
  t.notify('AnimationStart', a);
  let l;
  if (Array.isArray(a)) {
    const o = a.map((u) => zf(t, u, s));
    l = Promise.all(o);
  } else if (typeof a == 'string') l = zf(t, a, s);
  else {
    const o = typeof a == 'function' ? Hi(t, a, s.custom) : a;
    l = Promise.all(V0(t, o, s));
  }
  return l.then(() => {
    t.notify('AnimationComplete', a);
  });
}
const LE = { test: (t) => t === 'auto', parse: (t) => t },
  B0 = (t) => (a) => a.test(t),
  U0 = [Yi, ae, mn, da, u2, o2, LE],
  fv = (t) => U0.find(B0(t));
function zE(t) {
  return (
    typeof t == 'number' ? t === 0
    : t !== null ? t === 'none' || t === '0' || $y(t)
    : !0
  );
}
const VE = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function BE(t) {
  const [a, s] = t.slice(0, -1).split('(');
  if (a === 'drop-shadow') return t;
  const [l] = s.match(rd) || [];
  if (!l) return t;
  const o = s.replace(l, '');
  let u = VE.has(a) ? 1 : 0;
  return (l !== s && (u *= 100), a + '(' + u + o + ')');
}
const UE = /\b([a-z-]*)\(.*?\)/gu,
  Vf = {
    ...ln,
    getAnimatableNone: (t) => {
      const a = t.match(UE);
      return a ? a.map(BE).join(' ') : t;
    },
  },
  Bf = {
    ...ln,
    getAnimatableNone: (t) => {
      const a = ln.parse(t);
      return ln.createTransformer(t)(
        a.map((l) =>
          typeof l == 'number' ? 0
          : typeof l == 'object' ? { ...l, alpha: 1 }
          : l,
        ),
      );
    },
  },
  dv = { ...Yi, transform: Math.round },
  HE = {
    rotate: da,
    rotateX: da,
    rotateY: da,
    rotateZ: da,
    scale: zr,
    scaleX: zr,
    scaleY: zr,
    scaleZ: zr,
    skew: da,
    skewX: da,
    skewY: da,
    distance: ae,
    translateX: ae,
    translateY: ae,
    translateZ: ae,
    x: ae,
    y: ae,
    z: ae,
    perspective: ae,
    transformPerspective: ae,
    opacity: tl,
    originX: Jg,
    originY: Jg,
    originZ: ae,
  },
  bd = {
    borderWidth: ae,
    borderTopWidth: ae,
    borderRightWidth: ae,
    borderBottomWidth: ae,
    borderLeftWidth: ae,
    borderRadius: ae,
    borderTopLeftRadius: ae,
    borderTopRightRadius: ae,
    borderBottomRightRadius: ae,
    borderBottomLeftRadius: ae,
    width: ae,
    maxWidth: ae,
    height: ae,
    maxHeight: ae,
    top: ae,
    right: ae,
    bottom: ae,
    left: ae,
    inset: ae,
    insetBlock: ae,
    insetBlockStart: ae,
    insetBlockEnd: ae,
    insetInline: ae,
    insetInlineStart: ae,
    insetInlineEnd: ae,
    padding: ae,
    paddingTop: ae,
    paddingRight: ae,
    paddingBottom: ae,
    paddingLeft: ae,
    paddingBlock: ae,
    paddingBlockStart: ae,
    paddingBlockEnd: ae,
    paddingInline: ae,
    paddingInlineStart: ae,
    paddingInlineEnd: ae,
    margin: ae,
    marginTop: ae,
    marginRight: ae,
    marginBottom: ae,
    marginLeft: ae,
    marginBlock: ae,
    marginBlockStart: ae,
    marginBlockEnd: ae,
    marginInline: ae,
    marginInlineStart: ae,
    marginInlineEnd: ae,
    fontSize: ae,
    backgroundPositionX: ae,
    backgroundPositionY: ae,
    ...HE,
    zIndex: dv,
    fillOpacity: tl,
    strokeOpacity: tl,
    numOctaves: dv,
  },
  PE = {
    ...bd,
    color: $e,
    backgroundColor: $e,
    outlineColor: $e,
    fill: $e,
    stroke: $e,
    borderColor: $e,
    borderTopColor: $e,
    borderRightColor: $e,
    borderBottomColor: $e,
    borderLeftColor: $e,
    filter: Vf,
    WebkitFilter: Vf,
    mask: Bf,
    WebkitMask: Bf,
  },
  H0 = (t) => PE[t],
  GE = new Set([Vf, Bf]);
function P0(t, a) {
  let s = H0(t);
  return (
    GE.has(s) || (s = ln),
    s.getAnimatableNone ? s.getAnimatableNone(a) : void 0
  );
}
const kE = new Set(['auto', 'none', '0']);
function qE(t, a, s) {
  let l = 0,
    o;
  for (; l < t.length && !o; ) {
    const u = t[l];
    (typeof u == 'string' && !kE.has(u) && nl(u).values.length && (o = t[l]),
      l++);
  }
  if (o && s) for (const u of a) t[u] = P0(s, o);
}
class YE extends md {
  constructor(a, s, l, o, u) {
    super(a, s, l, o, u, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: a, element: s, name: l } = this;
    if (!s || !s.current) return;
    super.readKeyframes();
    for (let v = 0; v < a.length; v++) {
      let g = a[v];
      if (typeof g == 'string' && ((g = g.trim()), ld(g))) {
        const x = N0(g, s.current);
        (x !== void 0 && (a[v] = x),
          v === a.length - 1 && (this.finalKeyframe = g));
      }
    }
    if ((this.resolveNoneKeyframes(), !j0.has(l) || a.length !== 2)) return;
    const [o, u] = a,
      f = fv(o),
      p = fv(u),
      h = Ig(o),
      m = Ig(u);
    if (h !== m && ha[l]) {
      this.needsMeasurement = !0;
      return;
    }
    if (f !== p)
      if (lv(f) && lv(p))
        for (let v = 0; v < a.length; v++) {
          const g = a[v];
          typeof g == 'string' && (a[v] = parseFloat(g));
        }
      else ha[l] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: a, name: s } = this,
      l = [];
    for (let o = 0; o < a.length; o++) (a[o] === null || zE(a[o])) && l.push(o);
    l.length && qE(a, l, s);
  }
  measureInitialState() {
    const { element: a, unresolvedKeyframes: s, name: l } = this;
    if (!a || !a.current) return;
    (l === 'height' && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ha[l](
        a.measureViewportBox(),
        window.getComputedStyle(a.current),
      )),
      (s[0] = this.measuredOrigin));
    const o = s[s.length - 1];
    o !== void 0 && a.getValue(l, o).jump(o, !1);
  }
  measureEndState() {
    const { element: a, name: s, unresolvedKeyframes: l } = this;
    if (!a || !a.current) return;
    const o = a.getValue(s);
    o && o.jump(this.measuredOrigin, !1);
    const u = l.length - 1,
      f = l[u];
    ((l[u] = ha[s](a.measureViewportBox(), window.getComputedStyle(a.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([p, h]) => {
          a.getValue(p).set(h);
        }),
      this.resolveNoneKeyframes());
  }
}
const XE = new Set(['opacity', 'clipPath', 'filter', 'transform']);
function G0(t, a, s) {
  if (t == null) return [];
  if (t instanceof EventTarget) return [t];
  if (typeof t == 'string') {
    let l = document;
    const o = s?.[t] ?? l.querySelectorAll(t);
    return o ? Array.from(o) : [];
  }
  return Array.from(t).filter((l) => l != null);
}
const k0 = (t, a) => (a && typeof t == 'number' ? a.transform(t) : t);
function QE(t) {
  return Zy(t) && 'offsetHeight' in t;
}
const { schedule: Sd } = u0(queueMicrotask, !1),
  nn = { x: !1, y: !1 };
function q0() {
  return nn.x || nn.y;
}
function KE(t) {
  return (
    t === 'x' || t === 'y' ?
      nn[t] ?
        null
      : ((nn[t] = !0),
        () => {
          nn[t] = !1;
        })
    : nn.x || nn.y ? null
    : ((nn.x = nn.y = !0),
      () => {
        nn.x = nn.y = !1;
      })
  );
}
function Y0(t, a) {
  const s = G0(t),
    l = new AbortController(),
    o = { passive: !0, ...a, signal: l.signal };
  return [s, o, () => l.abort()];
}
function FE(t) {
  return !(t.pointerType === 'touch' || q0());
}
function ZE(t, a, s = {}) {
  const [l, o, u] = Y0(t, s);
  return (
    l.forEach((f) => {
      let p = !1,
        h = !1,
        m;
      const v = () => {
          f.removeEventListener('pointerleave', A);
        },
        g = (M) => {
          (m && (m(M), (m = void 0)), v());
        },
        x = (M) => {
          ((p = !1),
            window.removeEventListener('pointerup', x),
            window.removeEventListener('pointercancel', x),
            h && ((h = !1), g(M)));
        },
        b = () => {
          ((p = !0),
            window.addEventListener('pointerup', x, o),
            window.addEventListener('pointercancel', x, o));
        },
        A = (M) => {
          if (M.pointerType !== 'touch') {
            if (p) {
              h = !0;
              return;
            }
            g(M);
          }
        },
        E = (M) => {
          if (!FE(M)) return;
          h = !1;
          const _ = a(f, M);
          typeof _ == 'function' &&
            ((m = _), f.addEventListener('pointerleave', A, o));
        };
      (f.addEventListener('pointerenter', E, o),
        f.addEventListener('pointerdown', b, o));
    }),
    u
  );
}
const X0 = (t, a) =>
    a ?
      t === a ?
        !0
      : X0(t, a.parentElement)
    : !1,
  xd = (t) =>
    t.pointerType === 'mouse' ?
      typeof t.button != 'number' || t.button <= 0
    : t.isPrimary !== !1,
  $E = new Set(['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'A']);
function IE(t) {
  return $E.has(t.tagName) || t.isContentEditable === !0;
}
const JE = new Set(['INPUT', 'SELECT', 'TEXTAREA']);
function WE(t) {
  return JE.has(t.tagName) || t.isContentEditable === !0;
}
const kr = new WeakSet();
function hv(t) {
  return (a) => {
    a.key === 'Enter' && t(a);
  };
}
function Wc(t, a) {
  t.dispatchEvent(
    new PointerEvent('pointer' + a, { isPrimary: !0, bubbles: !0 }),
  );
}
const eC = (t, a) => {
  const s = t.currentTarget;
  if (!s) return;
  const l = hv(() => {
    if (kr.has(s)) return;
    Wc(s, 'down');
    const o = hv(() => {
        Wc(s, 'up');
      }),
      u = () => Wc(s, 'cancel');
    (s.addEventListener('keyup', o, a), s.addEventListener('blur', u, a));
  });
  (s.addEventListener('keydown', l, a),
    s.addEventListener('blur', () => s.removeEventListener('keydown', l), a));
};
function mv(t) {
  return xd(t) && !q0();
}
const pv = new WeakSet();
function tC(t, a, s = {}) {
  const [l, o, u] = Y0(t, s),
    f = (p) => {
      const h = p.currentTarget;
      if (!mv(p) || pv.has(p)) return;
      (kr.add(h), s.stopPropagation && pv.add(p));
      const m = a(h, p),
        v = (b, A) => {
          (window.removeEventListener('pointerup', g),
            window.removeEventListener('pointercancel', x),
            kr.has(h) && kr.delete(h),
            mv(b) && typeof m == 'function' && m(b, { success: A }));
        },
        g = (b) => {
          v(
            b,
            h === window ||
              h === document ||
              s.useGlobalTarget ||
              X0(h, b.target),
          );
        },
        x = (b) => {
          v(b, !1);
        };
      (window.addEventListener('pointerup', g, o),
        window.addEventListener('pointercancel', x, o));
    };
  return (
    l.forEach((p) => {
      ((s.useGlobalTarget ? window : p).addEventListener('pointerdown', f, o),
        QE(p) &&
          (p.addEventListener('focus', (m) => eC(m, o)),
          !IE(p) && !p.hasAttribute('tabindex') && (p.tabIndex = 0)));
    }),
    u
  );
}
function Td(t) {
  return Zy(t) && 'ownerSVGElement' in t;
}
const qr = new WeakMap();
let Yr;
const Q0 = (t, a, s) => (l, o) =>
    o && o[0] ? o[0][t + 'Size']
    : Td(l) && 'getBBox' in l ? l.getBBox()[a]
    : l[s],
  nC = Q0('inline', 'width', 'offsetWidth'),
  aC = Q0('block', 'height', 'offsetHeight');
function iC({ target: t, borderBoxSize: a }) {
  qr.get(t)?.forEach((s) => {
    s(t, {
      get width() {
        return nC(t, a);
      },
      get height() {
        return aC(t, a);
      },
    });
  });
}
function sC(t) {
  t.forEach(iC);
}
function lC() {
  typeof ResizeObserver > 'u' || (Yr = new ResizeObserver(sC));
}
function rC(t, a) {
  Yr || lC();
  const s = G0(t);
  return (
    s.forEach((l) => {
      let o = qr.get(l);
      (o || ((o = new Set()), qr.set(l, o)), o.add(a), Yr?.observe(l));
    }),
    () => {
      s.forEach((l) => {
        const o = qr.get(l);
        (o?.delete(a), o?.size || Yr?.unobserve(l));
      });
    }
  );
}
const Xr = new Set();
let zi;
function oC() {
  ((zi = () => {
    const t = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    Xr.forEach((a) => a(t));
  }),
    window.addEventListener('resize', zi));
}
function uC(t) {
  return (
    Xr.add(t),
    zi || oC(),
    () => {
      (Xr.delete(t),
        !Xr.size &&
          typeof zi == 'function' &&
          (window.removeEventListener('resize', zi), (zi = void 0)));
    }
  );
}
function gv(t, a) {
  return typeof t == 'function' ? uC(t) : rC(t, a);
}
function cC(t) {
  return Td(t) && t.tagName === 'svg';
}
const fC = [...U0, $e, ln],
  dC = (t) => fC.find(B0(t)),
  vv = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Vi = () => ({ x: vv(), y: vv() }),
  yv = () => ({ min: 0, max: 0 }),
  Je = () => ({ x: yv(), y: yv() }),
  hC = new WeakMap();
function go(t) {
  return t !== null && typeof t == 'object' && typeof t.start == 'function';
}
function al(t) {
  return typeof t == 'string' || Array.isArray(t);
}
const _d = [
    'animate',
    'whileInView',
    'whileFocus',
    'whileHover',
    'whileTap',
    'whileDrag',
    'exit',
  ],
  Ed = ['initial', ..._d];
function vo(t) {
  return go(t.animate) || Ed.some((a) => al(t[a]));
}
function K0(t) {
  return !!(vo(t) || t.variants);
}
function mC(t, a, s) {
  for (const l in a) {
    const o = a[l],
      u = s[l];
    if (ht(o)) t.addValue(l, o);
    else if (ht(u)) t.addValue(l, Gi(o, { owner: t }));
    else if (u !== o)
      if (t.hasValue(l)) {
        const f = t.getValue(l);
        f.liveStyle === !0 ? f.jump(o) : f.hasAnimated || f.set(o);
      } else {
        const f = t.getStaticValue(l);
        t.addValue(l, Gi(f !== void 0 ? f : o, { owner: t }));
      }
  }
  for (const l in s) a[l] === void 0 && t.removeValue(l);
  return a;
}
const Uf = { current: null },
  F0 = { current: !1 },
  pC = typeof window < 'u';
function gC() {
  if (((F0.current = !0), !!pC))
    if (window.matchMedia) {
      const t = window.matchMedia('(prefers-reduced-motion)'),
        a = () => (Uf.current = t.matches);
      (t.addEventListener('change', a), a());
    } else Uf.current = !1;
}
const bv = [
  'AnimationStart',
  'AnimationComplete',
  'Update',
  'BeforeLayoutMeasure',
  'LayoutMeasure',
  'LayoutAnimationStart',
  'LayoutAnimationComplete',
];
let to = {};
function Z0(t) {
  to = t;
}
function vC() {
  return to;
}
class yC {
  scrapeMotionValuesFromProps(a, s, l) {
    return {};
  }
  constructor(
    {
      parent: a,
      props: s,
      presenceContext: l,
      reducedMotionConfig: o,
      skipAnimations: u,
      blockInitialAnimation: f,
      visualState: p,
    },
    h = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = md),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const b = vt.now();
        this.renderScheduledAt < b &&
          ((this.renderScheduledAt = b), je.render(this.render, !1, !0));
      }));
    const { latestValues: m, renderState: v } = p;
    ((this.latestValues = m),
      (this.baseTarget = { ...m }),
      (this.initialValues = s.initial ? { ...m } : {}),
      (this.renderState = v),
      (this.parent = a),
      (this.props = s),
      (this.presenceContext = l),
      (this.depth = a ? a.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.skipAnimationsConfig = u),
      (this.options = h),
      (this.blockInitialAnimation = !!f),
      (this.isControllingVariants = vo(s)),
      (this.isVariantNode = K0(s)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(a && a.current)));
    const { willChange: g, ...x } = this.scrapeMotionValuesFromProps(
      s,
      {},
      this,
    );
    for (const b in x) {
      const A = x[b];
      m[b] !== void 0 && ht(A) && A.set(m[b]);
    }
  }
  mount(a) {
    if (this.hasBeenMounted)
      for (const s in this.initialValues)
        (this.values.get(s)?.jump(this.initialValues[s]),
          (this.latestValues[s] = this.initialValues[s]));
    ((this.current = a),
      hC.set(a, this),
      this.projection && !this.projection.instance && this.projection.mount(a),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((s, l) => this.bindToMotionValue(l, s)),
      this.reducedMotionConfig === 'never' ? (this.shouldReduceMotion = !1)
      : this.reducedMotionConfig === 'always' ? (this.shouldReduceMotion = !0)
      : (F0.current || gC(), (this.shouldReduceMotion = Uf.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    (this.projection && this.projection.unmount(),
      pa(this.notifyUpdate),
      pa(this.render),
      this.valueSubscriptions.forEach((a) => a()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this));
    for (const a in this.events) this.events[a].clear();
    for (const a in this.features) {
      const s = this.features[a];
      s && (s.unmount(), (s.isMounted = !1));
    }
    this.current = null;
  }
  addChild(a) {
    (this.children.add(a),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(a));
  }
  removeChild(a) {
    (this.children.delete(a),
      this.enteringChildren && this.enteringChildren.delete(a));
  }
  bindToMotionValue(a, s) {
    if (
      (this.valueSubscriptions.has(a) && this.valueSubscriptions.get(a)(),
      s.accelerate && XE.has(a) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: f,
          keyframes: p,
          times: h,
          ease: m,
          duration: v,
        } = s.accelerate,
        g = new w0({
          element: this.current,
          name: a,
          keyframes: p,
          times: h,
          ease: m,
          duration: sn(v),
        }),
        x = f(g);
      this.valueSubscriptions.set(a, () => {
        (x(), g.cancel());
      });
      return;
    }
    const l = Qi.has(a);
    l && this.onBindTransform && this.onBindTransform();
    const o = s.on('change', (f) => {
      ((this.latestValues[a] = f),
        this.props.onUpdate && je.preRender(this.notifyUpdate),
        l && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let u;
    (typeof window < 'u' &&
      window.MotionCheckAppearSync &&
      (u = window.MotionCheckAppearSync(this, a, s)),
      this.valueSubscriptions.set(a, () => {
        (o(), u && u(), s.owner && s.stop());
      }));
  }
  sortNodePosition(a) {
    return (
        !this.current || !this.sortInstanceNodePosition || this.type !== a.type
      ) ?
        0
      : this.sortInstanceNodePosition(this.current, a.current);
  }
  updateFeatures() {
    let a = 'animation';
    for (a in to) {
      const s = to[a];
      if (!s) continue;
      const { isEnabled: l, Feature: o } = s;
      if (
        (!this.features[a] &&
          o &&
          l(this.props) &&
          (this.features[a] = new o(this)),
        this.features[a])
      ) {
        const u = this.features[a];
        u.isMounted ? u.update() : (u.mount(), (u.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ?
        this.measureInstanceViewportBox(this.current, this.props)
      : Je();
  }
  getStaticValue(a) {
    return this.latestValues[a];
  }
  setStaticValue(a, s) {
    this.latestValues[a] = s;
  }
  update(a, s) {
    ((a.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = a),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = s));
    for (let l = 0; l < bv.length; l++) {
      const o = bv[l];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const u = 'on' + o,
        f = a[u];
      f && (this.propEventSubscriptions[o] = this.on(o, f));
    }
    ((this.prevMotionValues = mC(
      this,
      this.scrapeMotionValuesFromProps(a, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(a) {
    return this.props.variants ? this.props.variants[a] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return (
      this.isVariantNode ? this
      : this.parent ? this.parent.getClosestVariantNode()
      : void 0
    );
  }
  addVariantChild(a) {
    const s = this.getClosestVariantNode();
    if (s)
      return (
        s.variantChildren && s.variantChildren.add(a),
        () => s.variantChildren.delete(a)
      );
  }
  addValue(a, s) {
    const l = this.values.get(a);
    s !== l &&
      (l && this.removeValue(a),
      this.bindToMotionValue(a, s),
      this.values.set(a, s),
      (this.latestValues[a] = s.get()));
  }
  removeValue(a) {
    this.values.delete(a);
    const s = this.valueSubscriptions.get(a);
    (s && (s(), this.valueSubscriptions.delete(a)),
      delete this.latestValues[a],
      this.removeValueFromRenderState(a, this.renderState));
  }
  hasValue(a) {
    return this.values.has(a);
  }
  getValue(a, s) {
    if (this.props.values && this.props.values[a]) return this.props.values[a];
    let l = this.values.get(a);
    return (
      l === void 0 &&
        s !== void 0 &&
        ((l = Gi(s === null ? void 0 : s, { owner: this })),
        this.addValue(a, l)),
      l
    );
  }
  readValue(a, s) {
    let l =
      this.latestValues[a] !== void 0 || !this.current ?
        this.latestValues[a]
      : (this.getBaseTargetFromProps(this.props, a) ??
        this.readValueFromInstance(this.current, a, this.options));
    return (
      l != null &&
        (typeof l == 'string' && (Fy(l) || $y(l)) ?
          (l = parseFloat(l))
        : !dC(l) && ln.test(s) && (l = P0(a, s)),
        this.setBaseTarget(a, ht(l) ? l.get() : l)),
      ht(l) ? l.get() : l
    );
  }
  setBaseTarget(a, s) {
    this.baseTarget[a] = s;
  }
  getBaseTarget(a) {
    const { initial: s } = this.props;
    let l;
    if (typeof s == 'string' || typeof s == 'object') {
      const u = vd(this.props, s, this.presenceContext?.custom);
      u && (l = u[a]);
    }
    if (s && l !== void 0) return l;
    const o = this.getBaseTargetFromProps(this.props, a);
    return (
      o !== void 0 && !ht(o) ? o
      : this.initialValues[a] !== void 0 && l === void 0 ? void 0
      : this.baseTarget[a]
    );
  }
  on(a, s) {
    return (
      this.events[a] || (this.events[a] = new ad()),
      this.events[a].add(s)
    );
  }
  notify(a, ...s) {
    this.events[a] && this.events[a].notify(...s);
  }
  scheduleRenderMicrotask() {
    Sd.render(this.render);
  }
}
class $0 extends yC {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = YE));
  }
  sortInstanceNodePosition(a, s) {
    return a.compareDocumentPosition(s) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(a, s) {
    const l = a.style;
    return l ? l[s] : void 0;
  }
  removeValueFromRenderState(a, { vars: s, style: l }) {
    (delete s[a], delete l[a]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: a } = this.props;
    ht(a) &&
      (this.childSubscription = a.on('change', (s) => {
        this.current && (this.current.textContent = `${s}`);
      }));
  }
}
class va {
  constructor(a) {
    ((this.isMounted = !1), (this.node = a));
  }
  update() {}
}
function I0({ top: t, left: a, right: s, bottom: l }) {
  return { x: { min: a, max: s }, y: { min: t, max: l } };
}
function bC({ x: t, y: a }) {
  return { top: a.min, right: t.max, bottom: a.max, left: t.min };
}
function SC(t, a) {
  if (!a) return t;
  const s = a({ x: t.left, y: t.top }),
    l = a({ x: t.right, y: t.bottom });
  return { top: s.y, left: s.x, bottom: l.y, right: l.x };
}
function ef(t) {
  return t === void 0 || t === 1;
}
function Hf({ scale: t, scaleX: a, scaleY: s }) {
  return !ef(t) || !ef(a) || !ef(s);
}
function Pa(t) {
  return (
    Hf(t) ||
    J0(t) ||
    t.z ||
    t.rotate ||
    t.rotateX ||
    t.rotateY ||
    t.skewX ||
    t.skewY
  );
}
function J0(t) {
  return Sv(t.x) || Sv(t.y);
}
function Sv(t) {
  return t && t !== '0%';
}
function no(t, a, s) {
  const l = t - s,
    o = a * l;
  return s + o;
}
function xv(t, a, s, l, o) {
  return (o !== void 0 && (t = no(t, o, l)), no(t, s, l) + a);
}
function Pf(t, a = 0, s = 1, l, o) {
  ((t.min = xv(t.min, a, s, l, o)), (t.max = xv(t.max, a, s, l, o)));
}
function W0(t, { x: a, y: s }) {
  (Pf(t.x, a.translate, a.scale, a.originPoint),
    Pf(t.y, s.translate, s.scale, s.originPoint));
}
const Tv = 0.999999999999,
  _v = 1.0000000000001;
function xC(t, a, s, l = !1) {
  const o = s.length;
  if (!o) return;
  a.x = a.y = 1;
  let u, f;
  for (let p = 0; p < o; p++) {
    ((u = s[p]), (f = u.projectionDelta));
    const { visualElement: h } = u.options;
    (h && h.props.style && h.props.style.display === 'contents') ||
      (l &&
        u.options.layoutScroll &&
        u.scroll &&
        u !== u.root &&
        Ui(t, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
      f && ((a.x *= f.x.scale), (a.y *= f.y.scale), W0(t, f)),
      l && Pa(u.latestValues) && Ui(t, u.latestValues));
  }
  (a.x < _v && a.x > Tv && (a.x = 1), a.y < _v && a.y > Tv && (a.y = 1));
}
function Bi(t, a) {
  ((t.min = t.min + a), (t.max = t.max + a));
}
function Ev(t, a, s, l, o = 0.5) {
  const u = Be(t.min, t.max, o);
  Pf(t, a, s, u, l);
}
function Ui(t, a) {
  (Ev(t.x, a.x, a.scaleX, a.scale, a.originX),
    Ev(t.y, a.y, a.scaleY, a.scale, a.originY));
}
function e1(t, a) {
  return I0(SC(t.getBoundingClientRect(), a));
}
function TC(t, a, s) {
  const l = e1(t, s),
    { scroll: o } = a;
  return (o && (Bi(l.x, o.offset.x), Bi(l.y, o.offset.y)), l);
}
const _C = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    transformPerspective: 'perspective',
  },
  EC = Xi.length;
function CC(t, a, s) {
  let l = '',
    o = !0;
  for (let u = 0; u < EC; u++) {
    const f = Xi[u],
      p = t[f];
    if (p === void 0) continue;
    let h = !0;
    if (typeof p == 'number') h = p === (f.startsWith('scale') ? 1 : 0);
    else {
      const m = parseFloat(p);
      h = f.startsWith('scale') ? m === 1 : m === 0;
    }
    if (!h || s) {
      const m = k0(p, bd[f]);
      if (!h) {
        o = !1;
        const v = _C[f] || f;
        l += `${v}(${m}) `;
      }
      s && (a[f] = m);
    }
  }
  return ((l = l.trim()), s ? (l = s(a, o ? '' : l)) : o && (l = 'none'), l);
}
function Cd(t, a, s) {
  const { style: l, vars: o, transformOrigin: u } = t;
  let f = !1,
    p = !1;
  for (const h in a) {
    const m = a[h];
    if (Qi.has(h)) {
      f = !0;
      continue;
    } else if (f0(h)) {
      o[h] = m;
      continue;
    } else {
      const v = k0(m, bd[h]);
      h.startsWith('origin') ? ((p = !0), (u[h] = v)) : (l[h] = v);
    }
  }
  if (
    (a.transform ||
      (f || s ?
        (l.transform = CC(a, t.transform, s))
      : l.transform && (l.transform = 'none')),
    p)
  ) {
    const { originX: h = '50%', originY: m = '50%', originZ: v = 0 } = u;
    l.transformOrigin = `${h} ${m} ${v}`;
  }
}
function t1(t, { style: a, vars: s }, l, o) {
  const u = t.style;
  let f;
  for (f in a) u[f] = a[f];
  o?.applyProjectionStyles(u, l);
  for (f in s) u.setProperty(f, s[f]);
}
function Cv(t, a) {
  return a.max === a.min ? 0 : (t / (a.max - a.min)) * 100;
}
const qs = {
    correct: (t, a) => {
      if (!a.target) return t;
      if (typeof t == 'string')
        if (ae.test(t)) t = parseFloat(t);
        else return t;
      const s = Cv(t, a.target.x),
        l = Cv(t, a.target.y);
      return `${s}% ${l}%`;
    },
  },
  AC = {
    correct: (t, { treeScale: a, projectionDelta: s }) => {
      const l = t,
        o = ln.parse(t);
      if (o.length > 5) return l;
      const u = ln.createTransformer(t),
        f = typeof o[0] != 'number' ? 1 : 0,
        p = s.x.scale * a.x,
        h = s.y.scale * a.y;
      ((o[0 + f] /= p), (o[1 + f] /= h));
      const m = Be(p, h, 0.5);
      return (
        typeof o[2 + f] == 'number' && (o[2 + f] /= m),
        typeof o[3 + f] == 'number' && (o[3 + f] /= m),
        u(o)
      );
    },
  },
  Gf = {
    borderRadius: {
      ...qs,
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
      ],
    },
    borderTopLeftRadius: qs,
    borderTopRightRadius: qs,
    borderBottomLeftRadius: qs,
    borderBottomRightRadius: qs,
    boxShadow: AC,
  };
function n1(t, { layout: a, layoutId: s }) {
  return (
    Qi.has(t) ||
    t.startsWith('origin') ||
    ((a || s !== void 0) && (!!Gf[t] || t === 'opacity'))
  );
}
function Ad(t, a, s) {
  const l = t.style,
    o = a?.style,
    u = {};
  if (!l) return u;
  for (const f in l)
    (ht(l[f]) ||
      (o && ht(o[f])) ||
      n1(f, t) ||
      s?.getValue(f)?.liveStyle !== void 0) &&
      (u[f] = l[f]);
  return u;
}
function MC(t) {
  return window.getComputedStyle(t);
}
class wC extends $0 {
  constructor() {
    (super(...arguments), (this.type = 'html'), (this.renderInstance = t1));
  }
  readValueFromInstance(a, s) {
    if (Qi.has(s)) return this.projection?.isProjecting ? Mf(s) : Q2(a, s);
    {
      const l = MC(a),
        o = (f0(s) ? l.getPropertyValue(s) : l[s]) || 0;
      return typeof o == 'string' ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(a, { transformPagePoint: s }) {
    return e1(a, s);
  }
  build(a, s, l) {
    Cd(a, s, l.transformTemplate);
  }
  scrapeMotionValuesFromProps(a, s, l) {
    return Ad(a, s, l);
  }
}
const DC = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  OC = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function NC(t, a, s = 1, l = 0, o = !0) {
  t.pathLength = 1;
  const u = o ? DC : OC;
  ((t[u.offset] = `${-l}`), (t[u.array] = `${a} ${s}`));
}
const RC = ['offsetDistance', 'offsetPath', 'offsetRotate', 'offsetAnchor'];
function a1(
  t,
  {
    attrX: a,
    attrY: s,
    attrScale: l,
    pathLength: o,
    pathSpacing: u = 1,
    pathOffset: f = 0,
    ...p
  },
  h,
  m,
  v,
) {
  if ((Cd(t, p, m), h)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  ((t.attrs = t.style), (t.style = {}));
  const { attrs: g, style: x } = t;
  (g.transform && ((x.transform = g.transform), delete g.transform),
    (x.transform || g.transformOrigin) &&
      ((x.transformOrigin = g.transformOrigin ?? '50% 50%'),
      delete g.transformOrigin),
    x.transform &&
      ((x.transformBox = v?.transformBox ?? 'fill-box'),
      delete g.transformBox));
  for (const b of RC) g[b] !== void 0 && ((x[b] = g[b]), delete g[b]);
  (a !== void 0 && (g.x = a),
    s !== void 0 && (g.y = s),
    l !== void 0 && (g.scale = l),
    o !== void 0 && NC(g, o, u, f, !1));
}
const i1 = new Set([
    'baseFrequency',
    'diffuseConstant',
    'kernelMatrix',
    'kernelUnitLength',
    'keySplines',
    'keyTimes',
    'limitingConeAngle',
    'markerHeight',
    'markerWidth',
    'numOctaves',
    'targetX',
    'targetY',
    'surfaceScale',
    'specularConstant',
    'specularExponent',
    'stdDeviation',
    'tableValues',
    'viewBox',
    'gradientTransform',
    'pathLength',
    'startOffset',
    'textLength',
    'lengthAdjust',
  ]),
  s1 = (t) => typeof t == 'string' && t.toLowerCase() === 'svg';
function jC(t, a, s, l) {
  t1(t, a, void 0, l);
  for (const o in a.attrs) t.setAttribute(i1.has(o) ? o : yd(o), a.attrs[o]);
}
function l1(t, a, s) {
  const l = Ad(t, a, s);
  for (const o in t)
    if (ht(t[o]) || ht(a[o])) {
      const u =
        Xi.indexOf(o) !== -1 ?
          'attr' + o.charAt(0).toUpperCase() + o.substring(1)
        : o;
      l[u] = t[o];
    }
  return l;
}
class LC extends $0 {
  constructor() {
    (super(...arguments),
      (this.type = 'svg'),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Je));
  }
  getBaseTargetFromProps(a, s) {
    return a[s];
  }
  readValueFromInstance(a, s) {
    if (Qi.has(s)) {
      const l = H0(s);
      return (l && l.default) || 0;
    }
    return ((s = i1.has(s) ? s : yd(s)), a.getAttribute(s));
  }
  scrapeMotionValuesFromProps(a, s, l) {
    return l1(a, s, l);
  }
  build(a, s, l) {
    a1(a, s, this.isSVGTag, l.transformTemplate, l.style);
  }
  renderInstance(a, s, l, o) {
    jC(a, s, l, o);
  }
  mount(a) {
    ((this.isSVGTag = s1(a.tagName)), super.mount(a));
  }
}
const zC = Ed.length;
function r1(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const s = t.parent ? r1(t.parent) || {} : {};
    return (t.props.initial !== void 0 && (s.initial = t.props.initial), s);
  }
  const a = {};
  for (let s = 0; s < zC; s++) {
    const l = Ed[s],
      o = t.props[l];
    (al(o) || o === !1) && (a[l] = o);
  }
  return a;
}
function o1(t, a) {
  if (!Array.isArray(a)) return !1;
  const s = a.length;
  if (s !== t.length) return !1;
  for (let l = 0; l < s; l++) if (a[l] !== t[l]) return !1;
  return !0;
}
const VC = [..._d].reverse(),
  BC = _d.length;
function UC(t) {
  return (a) =>
    Promise.all(a.map(({ animation: s, options: l }) => jE(t, s, l)));
}
function HC(t) {
  let a = UC(t),
    s = Av(),
    l = !0;
  const o = (h) => (m, v) => {
    const g = Hi(t, v, h === 'exit' ? t.presenceContext?.custom : void 0);
    if (g) {
      const { transition: x, transitionEnd: b, ...A } = g;
      m = { ...m, ...A, ...b };
    }
    return m;
  };
  function u(h) {
    a = h(t);
  }
  function f(h) {
    const { props: m } = t,
      v = r1(t.parent) || {},
      g = [],
      x = new Set();
    let b = {},
      A = 1 / 0;
    for (let M = 0; M < BC; M++) {
      const _ = VC[M],
        C = s[_],
        w = m[_] !== void 0 ? m[_] : v[_],
        U = al(w),
        V = _ === h ? C.isActive : null;
      V === !1 && (A = M);
      let $ = w === v[_] && w !== m[_] && U;
      if (
        ($ && l && t.manuallyAnimateOnMount && ($ = !1),
        (C.protectedKeys = { ...b }),
        (!C.isActive && V === null) ||
          (!w && !C.prevProp) ||
          go(w) ||
          typeof w == 'boolean')
      )
        continue;
      if (_ === 'exit' && C.isActive && V !== !0) {
        C.prevResolvedValues && (b = { ...b, ...C.prevResolvedValues });
        continue;
      }
      const X = PC(C.prevProp, w);
      let L = X || (_ === h && C.isActive && !$ && U) || (M > A && U),
        W = !1;
      const Z = Array.isArray(w) ? w : [w];
      let I = Z.reduce(o(_), {});
      V === !1 && (I = {});
      const { prevResolvedValues: J = {} } = C,
        ce = { ...J, ...I },
        oe = (k) => {
          ((L = !0),
            x.has(k) && ((W = !0), x.delete(k)),
            (C.needsAnimating[k] = !0));
          const q = t.getValue(k);
          q && (q.liveStyle = !1);
        };
      for (const k in ce) {
        const q = I[k],
          ee = J[k];
        if (b.hasOwnProperty(k)) continue;
        let re = !1;
        (jf(q) && jf(ee) ? (re = !o1(q, ee)) : (re = q !== ee),
          re ?
            q != null ?
              oe(k)
            : x.add(k)
          : q !== void 0 && x.has(k) ? oe(k)
          : (C.protectedKeys[k] = !0));
      }
      ((C.prevProp = w),
        (C.prevResolvedValues = I),
        C.isActive && (b = { ...b, ...I }),
        l && t.blockInitialAnimation && (L = !1));
      const de = $ && X;
      L &&
        (!de || W) &&
        g.push(
          ...Z.map((k) => {
            const q = { type: _ };
            if (
              typeof k == 'string' &&
              l &&
              !de &&
              t.manuallyAnimateOnMount &&
              t.parent
            ) {
              const { parent: ee } = t,
                re = Hi(ee, k);
              if (ee.enteringChildren && re) {
                const { delayChildren: N } = re.transition || {};
                q.delay = O0(ee.enteringChildren, t, N);
              }
            }
            return { animation: k, options: q };
          }),
        );
    }
    if (x.size) {
      const M = {};
      if (typeof m.initial != 'boolean') {
        const _ = Hi(t, Array.isArray(m.initial) ? m.initial[0] : m.initial);
        _ && _.transition && (M.transition = _.transition);
      }
      (x.forEach((_) => {
        const C = t.getBaseTarget(_),
          w = t.getValue(_);
        (w && (w.liveStyle = !0), (M[_] = C ?? null));
      }),
        g.push({ animation: M }));
    }
    let E = !!g.length;
    return (
      l &&
        (m.initial === !1 || m.initial === m.animate) &&
        !t.manuallyAnimateOnMount &&
        (E = !1),
      (l = !1),
      E ? a(g) : Promise.resolve()
    );
  }
  function p(h, m) {
    if (s[h].isActive === m) return Promise.resolve();
    (t.variantChildren?.forEach((g) => g.animationState?.setActive(h, m)),
      (s[h].isActive = m));
    const v = f(h);
    for (const g in s) s[g].protectedKeys = {};
    return v;
  }
  return {
    animateChanges: f,
    setActive: p,
    setAnimateFunction: u,
    getState: () => s,
    reset: () => {
      s = Av();
    },
  };
}
function PC(t, a) {
  return (
    typeof a == 'string' ? a !== t
    : Array.isArray(a) ? !o1(a, t)
    : !1
  );
}
function Ua(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Av() {
  return {
    animate: Ua(!0),
    whileInView: Ua(),
    whileHover: Ua(),
    whileTap: Ua(),
    whileDrag: Ua(),
    whileFocus: Ua(),
    exit: Ua(),
  };
}
function Mv(t, a) {
  ((t.min = a.min), (t.max = a.max));
}
function tn(t, a) {
  (Mv(t.x, a.x), Mv(t.y, a.y));
}
function wv(t, a) {
  ((t.translate = a.translate),
    (t.scale = a.scale),
    (t.originPoint = a.originPoint),
    (t.origin = a.origin));
}
const u1 = 1e-4,
  GC = 1 - u1,
  kC = 1 + u1,
  c1 = 0.01,
  qC = 0 - c1,
  YC = 0 + c1;
function yt(t) {
  return t.max - t.min;
}
function XC(t, a, s) {
  return Math.abs(t - a) <= s;
}
function Dv(t, a, s, l = 0.5) {
  ((t.origin = l),
    (t.originPoint = Be(a.min, a.max, t.origin)),
    (t.scale = yt(s) / yt(a)),
    (t.translate = Be(s.min, s.max, t.origin) - t.originPoint),
    ((t.scale >= GC && t.scale <= kC) || isNaN(t.scale)) && (t.scale = 1),
    ((t.translate >= qC && t.translate <= YC) || isNaN(t.translate)) &&
      (t.translate = 0));
}
function $s(t, a, s, l) {
  (Dv(t.x, a.x, s.x, l ? l.originX : void 0),
    Dv(t.y, a.y, s.y, l ? l.originY : void 0));
}
function Ov(t, a, s) {
  ((t.min = s.min + a.min), (t.max = t.min + yt(a)));
}
function QC(t, a, s) {
  (Ov(t.x, a.x, s.x), Ov(t.y, a.y, s.y));
}
function Nv(t, a, s) {
  ((t.min = a.min - s.min), (t.max = t.min + yt(a)));
}
function ao(t, a, s) {
  (Nv(t.x, a.x, s.x), Nv(t.y, a.y, s.y));
}
function Rv(t, a, s, l, o) {
  return (
    (t -= a),
    (t = no(t, 1 / s, l)),
    o !== void 0 && (t = no(t, 1 / o, l)),
    t
  );
}
function KC(t, a = 0, s = 1, l = 0.5, o, u = t, f = t) {
  if (
    (mn.test(a) &&
      ((a = parseFloat(a)), (a = Be(f.min, f.max, a / 100) - f.min)),
    typeof a != 'number')
  )
    return;
  let p = Be(u.min, u.max, l);
  (t === u && (p -= a),
    (t.min = Rv(t.min, a, s, p, o)),
    (t.max = Rv(t.max, a, s, p, o)));
}
function jv(t, a, [s, l, o], u, f) {
  KC(t, a[s], a[l], a[o], a.scale, u, f);
}
const FC = ['x', 'scaleX', 'originX'],
  ZC = ['y', 'scaleY', 'originY'];
function Lv(t, a, s, l) {
  (jv(t.x, a, FC, s ? s.x : void 0, l ? l.x : void 0),
    jv(t.y, a, ZC, s ? s.y : void 0, l ? l.y : void 0));
}
function zv(t) {
  return t.translate === 0 && t.scale === 1;
}
function f1(t) {
  return zv(t.x) && zv(t.y);
}
function Vv(t, a) {
  return t.min === a.min && t.max === a.max;
}
function $C(t, a) {
  return Vv(t.x, a.x) && Vv(t.y, a.y);
}
function Bv(t, a) {
  return (
    Math.round(t.min) === Math.round(a.min) &&
    Math.round(t.max) === Math.round(a.max)
  );
}
function d1(t, a) {
  return Bv(t.x, a.x) && Bv(t.y, a.y);
}
function Uv(t) {
  return yt(t.x) / yt(t.y);
}
function Hv(t, a) {
  return (
    t.translate === a.translate &&
    t.scale === a.scale &&
    t.originPoint === a.originPoint
  );
}
function dn(t) {
  return [t('x'), t('y')];
}
function IC(t, a, s) {
  let l = '';
  const o = t.x.translate / a.x,
    u = t.y.translate / a.y,
    f = s?.z || 0;
  if (
    ((o || u || f) && (l = `translate3d(${o}px, ${u}px, ${f}px) `),
    (a.x !== 1 || a.y !== 1) && (l += `scale(${1 / a.x}, ${1 / a.y}) `),
    s)
  ) {
    const {
      transformPerspective: m,
      rotate: v,
      rotateX: g,
      rotateY: x,
      skewX: b,
      skewY: A,
    } = s;
    (m && (l = `perspective(${m}px) ${l}`),
      v && (l += `rotate(${v}deg) `),
      g && (l += `rotateX(${g}deg) `),
      x && (l += `rotateY(${x}deg) `),
      b && (l += `skewX(${b}deg) `),
      A && (l += `skewY(${A}deg) `));
  }
  const p = t.x.scale * a.x,
    h = t.y.scale * a.y;
  return ((p !== 1 || h !== 1) && (l += `scale(${p}, ${h})`), l || 'none');
}
const h1 = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  JC = h1.length,
  Pv = (t) => (typeof t == 'string' ? parseFloat(t) : t),
  Gv = (t) => typeof t == 'number' || ae.test(t);
function WC(t, a, s, l, o, u) {
  o ?
    ((t.opacity = Be(0, s.opacity ?? 1, e3(l))),
    (t.opacityExit = Be(a.opacity ?? 1, 0, t3(l))))
  : u && (t.opacity = Be(a.opacity ?? 1, s.opacity ?? 1, l));
  for (let f = 0; f < JC; f++) {
    const p = `border${h1[f]}Radius`;
    let h = kv(a, p),
      m = kv(s, p);
    if (h === void 0 && m === void 0) continue;
    (h || (h = 0),
      m || (m = 0),
      h === 0 || m === 0 || Gv(h) === Gv(m) ?
        ((t[p] = Math.max(Be(Pv(h), Pv(m), l), 0)),
        (mn.test(m) || mn.test(h)) && (t[p] += '%'))
      : (t[p] = m));
  }
  (a.rotate || s.rotate) && (t.rotate = Be(a.rotate || 0, s.rotate || 0, l));
}
function kv(t, a) {
  return t[a] !== void 0 ? t[a] : t.borderRadius;
}
const e3 = m1(0, 0.5, s0),
  t3 = m1(0.5, 0.95, $t);
function m1(t, a, s) {
  return (l) =>
    l < t ? 0
    : l > a ? 1
    : s(el(t, a, l));
}
function n3(t, a, s) {
  const l = ht(t) ? t : Gi(t);
  return (l.start(gd('', l, a, s)), l.animation);
}
function il(t, a, s, l = { passive: !0 }) {
  return (t.addEventListener(a, s, l), () => t.removeEventListener(a, s));
}
const a3 = (t, a) => t.depth - a.depth;
class i3 {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(a) {
    (td(this.children, a), (this.isDirty = !0));
  }
  remove(a) {
    (Ir(this.children, a), (this.isDirty = !0));
  }
  forEach(a) {
    (this.isDirty && this.children.sort(a3),
      (this.isDirty = !1),
      this.children.forEach(a));
  }
}
function s3(t, a) {
  const s = vt.now(),
    l = ({ timestamp: o }) => {
      const u = o - s;
      u >= a && (pa(l), t(u - a));
    };
  return (je.setup(l, !0), () => pa(l));
}
function Qr(t) {
  return ht(t) ? t.get() : t;
}
class l3 {
  constructor() {
    this.members = [];
  }
  add(a) {
    td(this.members, a);
    for (let s = this.members.length - 1; s >= 0; s--) {
      const l = this.members[s];
      if (l === a || l === this.lead || l === this.prevLead) continue;
      const o = l.instance;
      o &&
        o.isConnected === !1 &&
        l.isPresent !== !1 &&
        !l.snapshot &&
        Ir(this.members, l);
    }
    a.scheduleRender();
  }
  remove(a) {
    if (
      (Ir(this.members, a),
      a === this.prevLead && (this.prevLead = void 0),
      a === this.lead)
    ) {
      const s = this.members[this.members.length - 1];
      s && this.promote(s);
    }
  }
  relegate(a) {
    const s = this.members.findIndex((o) => a === o);
    if (s === 0) return !1;
    let l;
    for (let o = s; o >= 0; o--) {
      const u = this.members[o],
        f = u.instance;
      if (u.isPresent !== !1 && (!f || f.isConnected !== !1)) {
        l = u;
        break;
      }
    }
    return l ? (this.promote(l), !0) : !1;
  }
  promote(a, s) {
    const l = this.lead;
    if (a !== l && ((this.prevLead = l), (this.lead = a), a.show(), l)) {
      (l.instance && l.scheduleRender(), a.scheduleRender());
      const o = l.options.layoutDependency,
        u = a.options.layoutDependency;
      if (!(o !== void 0 && u !== void 0 && o === u)) {
        const h = l.instance;
        (h && h.isConnected === !1 && !l.snapshot) ||
          ((a.resumeFrom = l),
          s && (a.resumeFrom.preserveOpacity = !0),
          l.snapshot &&
            ((a.snapshot = l.snapshot),
            (a.snapshot.latestValues = l.animationValues || l.latestValues)),
          a.root && a.root.isUpdating && (a.isLayoutDirty = !0));
      }
      const { crossfade: p } = a.options;
      p === !1 && l.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((a) => {
      const { options: s, resumingFrom: l } = a;
      (s.onExitComplete && s.onExitComplete(),
        l && l.options.onExitComplete && l.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((a) => {
      a.instance && a.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
const Kr = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  tf = ['', 'X', 'Y', 'Z'],
  r3 = 1e3;
let o3 = 0;
function nf(t, a, s, l) {
  const { latestValues: o } = a;
  o[t] && ((s[t] = o[t]), a.setStaticValue(t, 0), l && (l[t] = 0));
}
function p1(t) {
  if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
  const { visualElement: a } = t.options;
  if (!a) return;
  const s = z0(a);
  if (window.MotionHasOptimisedAnimation(s, 'transform')) {
    const { layout: o, layoutId: u } = t.options;
    window.MotionCancelOptimisedAnimation(s, 'transform', je, !(o || u));
  }
  const { parent: l } = t;
  l && !l.hasCheckedOptimisedAppear && p1(l);
}
function g1({
  attachResizeListener: t,
  defaultParent: a,
  measureScroll: s,
  checkIsScrollRoot: l,
  resetTransform: o,
}) {
  return class {
    constructor(f = {}, p = a?.()) {
      ((this.id = o3++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(f3),
            this.nodes.forEach(p3),
            this.nodes.forEach(g3),
            this.nodes.forEach(d3));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = p ? p.root || p : this),
        (this.path = p ? [...p.path, p] : []),
        (this.parent = p),
        (this.depth = p ? p.depth + 1 : 0));
      for (let h = 0; h < this.path.length; h++)
        this.path[h].shouldResetTransform = !0;
      this.root === this && (this.nodes = new i3());
    }
    addEventListener(f, p) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new ad()),
        this.eventHandlers.get(f).add(p)
      );
    }
    notifyListeners(f, ...p) {
      const h = this.eventHandlers.get(f);
      h && h.notify(...p);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f) {
      if (this.instance) return;
      ((this.isSVG = Td(f) && !cC(f)), (this.instance = f));
      const { layoutId: p, layout: h, visualElement: m } = this.options;
      if (
        (m && !m.current && m.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (h || p) && (this.isLayoutDirty = !0),
        t)
      ) {
        let v,
          g = 0;
        const x = () => (this.root.updateBlockedByResize = !1);
        (je.read(() => {
          g = window.innerWidth;
        }),
          t(f, () => {
            const b = window.innerWidth;
            b !== g &&
              ((g = b),
              (this.root.updateBlockedByResize = !0),
              v && v(),
              (v = s3(x, 250)),
              Kr.hasAnimatedSinceResize &&
                ((Kr.hasAnimatedSinceResize = !1), this.nodes.forEach(Xv)));
          }));
      }
      (p && this.root.registerSharedNode(p, this),
        this.options.animate !== !1 &&
          m &&
          (p || h) &&
          this.addEventListener(
            'didUpdate',
            ({
              delta: v,
              hasLayoutChanged: g,
              hasRelativeLayoutChanged: x,
              layout: b,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const A =
                  this.options.transition || m.getDefaultTransition() || x3,
                { onLayoutAnimationStart: E, onLayoutAnimationComplete: M } =
                  m.getProps(),
                _ = !this.targetLayout || !d1(this.targetLayout, b),
                C = !g && x;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                C ||
                (g && (_ || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const w = { ...pd(A, 'layout'), onPlay: E, onComplete: M };
                ((m.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w),
                  this.setAnimationOrigin(v, C));
              } else
                (g || Xv(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = b;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const f = this.getStack();
      (f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        pa(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(v3),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          p1(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const g = this.path[v];
        ((g.shouldResetTransform = !0),
          g.updateScroll('snapshot'),
          g.options.layoutRoot && g.willUpdate(!1));
      }
      const { layoutId: p, layout: h } = this.options;
      if (p === void 0 && !h) return;
      const m = this.getTransformTemplate();
      ((this.prevTransformTemplateValue =
        m ? m(this.latestValues, '') : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners('willUpdate'));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(qv));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Yv);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating ?
          ((this.isUpdating = !1),
          this.nodes.forEach(m3),
          this.nodes.forEach(u3),
          this.nodes.forEach(c3))
        : this.nodes.forEach(Yv),
        this.clearAllSnapshots());
      const p = vt.now();
      ((ft.delta = gn(0, 1e3 / 60, p - ft.timestamp)),
        (ft.timestamp = p),
        (ft.isProcessing = !0),
        Kc.update.process(ft),
        Kc.preRender.process(ft),
        Kc.render.process(ft),
        (ft.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Sd.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(h3), this.sharedNodes.forEach(y3));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        je.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      je.postRender(() => {
        this.isLayoutDirty ?
          this.root.didUpdate()
        : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !yt(this.snapshot.measuredBox.x) &&
          !yt(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let h = 0; h < this.path.length; h++) this.path[h].updateScroll();
      const f = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        (this.layoutCorrected = Je()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox));
      const { visualElement: p } = this.options;
      p &&
        p.notify(
          'LayoutMeasure',
          this.layout.layoutBox,
          f ? f.layoutBox : void 0,
        );
    }
    updateScroll(f = 'measure') {
      let p = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (p = !1),
        p && this.instance)
      ) {
        const h = l(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: h,
          offset: s(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : h,
        };
      }
    }
    resetTransform() {
      if (!o) return;
      const f =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        p = this.projectionDelta && !f1(this.projectionDelta),
        h = this.getTransformTemplate(),
        m = h ? h(this.latestValues, '') : void 0,
        v = m !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (p || Pa(this.latestValues) || v) &&
        (o(this.instance, m),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(f = !0) {
      const p = this.measurePageBox();
      let h = this.removeElementScroll(p);
      return (
        f && (h = this.removeTransform(h)),
        T3(h),
        {
          animationId: this.root.animationId,
          measuredBox: p,
          layoutBox: h,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: f } = this.options;
      if (!f) return Je();
      const p = f.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(_3))) {
        const { scroll: m } = this.root;
        m && (Bi(p.x, m.offset.x), Bi(p.y, m.offset.y));
      }
      return p;
    }
    removeElementScroll(f) {
      const p = Je();
      if ((tn(p, f), this.scroll?.wasRoot)) return p;
      for (let h = 0; h < this.path.length; h++) {
        const m = this.path[h],
          { scroll: v, options: g } = m;
        m !== this.root &&
          v &&
          g.layoutScroll &&
          (v.wasRoot && tn(p, f), Bi(p.x, v.offset.x), Bi(p.y, v.offset.y));
      }
      return p;
    }
    applyTransform(f, p = !1) {
      const h = Je();
      tn(h, f);
      for (let m = 0; m < this.path.length; m++) {
        const v = this.path[m];
        (!p &&
          v.options.layoutScroll &&
          v.scroll &&
          v !== v.root &&
          Ui(h, { x: -v.scroll.offset.x, y: -v.scroll.offset.y }),
          Pa(v.latestValues) && Ui(h, v.latestValues));
      }
      return (Pa(this.latestValues) && Ui(h, this.latestValues), h);
    }
    removeTransform(f) {
      const p = Je();
      tn(p, f);
      for (let h = 0; h < this.path.length; h++) {
        const m = this.path[h];
        if (!m.instance || !Pa(m.latestValues)) continue;
        Hf(m.latestValues) && m.updateSnapshot();
        const v = Je(),
          g = m.measurePageBox();
        (tn(v, g),
          Lv(p, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, v));
      }
      return (Pa(this.latestValues) && Lv(p, this.latestValues), p);
    }
    setTargetDelta(f) {
      ((this.targetDelta = f),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ft.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      const p = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = p.isSharedProjectionDirty));
      const h = !!this.resumingFrom || this !== p;
      if (
        !(
          f ||
          (h && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: v, layoutId: g } = this.options;
      if (!this.layout || !(v || g)) return;
      this.resolvedRelativeTargetAt = ft.timestamp;
      const x = this.getClosestProjectingParent();
      (x &&
        this.linkedParentVersion !== x.layoutVersion &&
        !x.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (x && x.layout ?
            this.createRelativeTarget(
              x,
              this.layout.layoutBox,
              x.layout.layoutBox,
            )
          : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Je()), (this.targetWithTransforms = Je())),
          (
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
          ) ?
            (this.forceRelativeParentToResolveTarget(),
            QC(this.target, this.relativeTarget, this.relativeParent.target))
          : this.targetDelta ?
            (this.resumingFrom ?
              (this.target = this.applyTransform(this.layout.layoutBox))
            : tn(this.target, this.layout.layoutBox),
            W0(this.target, this.targetDelta))
          : tn(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            (
              x &&
              !!x.resumingFrom == !!this.resumingFrom &&
              !x.options.layoutScroll &&
              x.target &&
              this.animationProgress !== 1
            ) ?
              this.createRelativeTarget(x, this.target, x.target)
            : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Hf(this.parent.latestValues) ||
          J0(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting() ?
            this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(f, p, h) {
      ((this.relativeParent = f),
        (this.linkedParentVersion = f.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Je()),
        (this.relativeTargetOrigin = Je()),
        ao(this.relativeTargetOrigin, p, h),
        tn(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const f = this.getLead(),
        p = !!this.resumingFrom || this !== f;
      let h = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (h = !1),
        p &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (h = !1),
        this.resolvedRelativeTargetAt === ft.timestamp && (h = !1),
        h)
      )
        return;
      const { layout: m, layoutId: v } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(m || v))
      )
        return;
      tn(this.layoutCorrected, this.layout.layoutBox);
      const g = this.treeScale.x,
        x = this.treeScale.y;
      (xC(this.layoutCorrected, this.treeScale, this.path, p),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = Je())));
      const { target: b } = f;
      if (!b) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta ?
        this.createProjectionDeltas()
      : (wv(this.prevProjectionDelta.x, this.projectionDelta.x),
        wv(this.prevProjectionDelta.y, this.projectionDelta.y)),
        $s(this.projectionDelta, this.layoutCorrected, b, this.latestValues),
        (this.treeScale.x !== g ||
          this.treeScale.y !== x ||
          !Hv(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Hv(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', b)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      if ((this.options.visualElement?.scheduleRender(), f)) {
        const p = this.getStack();
        p && p.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = Vi()),
        (this.projectionDelta = Vi()),
        (this.projectionDeltaWithTransform = Vi()));
    }
    setAnimationOrigin(f, p = !1) {
      const h = this.snapshot,
        m = h ? h.latestValues : {},
        v = { ...this.latestValues },
        g = Vi();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !p));
      const x = Je(),
        b = h ? h.source : void 0,
        A = this.layout ? this.layout.source : void 0,
        E = b !== A,
        M = this.getStack(),
        _ = !M || M.members.length <= 1,
        C = !!(E && !_ && this.options.crossfade === !0 && !this.path.some(S3));
      this.animationProgress = 0;
      let w;
      ((this.mixTargetDelta = (U) => {
        const V = U / 1e3;
        (Qv(g.x, f.x, V),
          Qv(g.y, f.y, V),
          this.setTargetDelta(g),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (ao(x, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            b3(this.relativeTarget, this.relativeTargetOrigin, x, V),
            w && $C(this.relativeTarget, w) && (this.isProjectionDirty = !1),
            w || (w = Je()),
            tn(w, this.relativeTarget)),
          E &&
            ((this.animationValues = v), WC(v, m, this.latestValues, V, C, _)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = V));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(f) {
      (this.notifyListeners('animationStart'),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation &&
          (pa(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = je.update(() => {
          ((Kr.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = Gi(0)),
            (this.currentAnimation = n3(this.motionValue, [0, 1e3], {
              ...f,
              velocity: 0,
              isSync: !0,
              onUpdate: (p) => {
                (this.mixTargetDelta(p), f.onUpdate && f.onUpdate(p));
              },
              onStop: () => {},
              onComplete: () => {
                (f.onComplete && f.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const f = this.getStack();
      (f && f.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners('animationComplete'));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(r3),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let {
        targetWithTransforms: p,
        target: h,
        layout: m,
        latestValues: v,
      } = f;
      if (!(!p || !h || !m)) {
        if (
          this !== f &&
          this.layout &&
          m &&
          v1(this.options.animationType, this.layout.layoutBox, m.layoutBox)
        ) {
          h = this.target || Je();
          const g = yt(this.layout.layoutBox.x);
          ((h.x.min = f.target.x.min), (h.x.max = h.x.min + g));
          const x = yt(this.layout.layoutBox.y);
          ((h.y.min = f.target.y.min), (h.y.max = h.y.min + x));
        }
        (tn(p, h),
          Ui(p, v),
          $s(this.projectionDeltaWithTransform, this.layoutCorrected, p, v));
      }
    }
    registerSharedNode(f, p) {
      (this.sharedNodes.has(f) || this.sharedNodes.set(f, new l3()),
        this.sharedNodes.get(f).add(p));
      const m = p.options.initialPromotionConfig;
      p.promote({
        transition: m ? m.transition : void 0,
        preserveFollowOpacity:
          m && m.shouldPreserveFollowOpacity ?
            m.shouldPreserveFollowOpacity(p)
          : void 0,
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f) return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: p, preserveFollowOpacity: h } = {}) {
      const m = this.getStack();
      (m && m.promote(this, h),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        p && this.setOptions({ transition: p }));
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f) return;
      let p = !1;
      const { latestValues: h } = f;
      if (
        ((h.z ||
          h.rotate ||
          h.rotateX ||
          h.rotateY ||
          h.rotateZ ||
          h.skewX ||
          h.skewY) &&
          (p = !0),
        !p)
      )
        return;
      const m = {};
      h.z && nf('z', f, m, this.animationValues);
      for (let v = 0; v < tf.length; v++)
        (nf(`rotate${tf[v]}`, f, m, this.animationValues),
          nf(`skew${tf[v]}`, f, m, this.animationValues));
      f.render();
      for (const v in m)
        (f.setStaticValue(v, m[v]),
          this.animationValues && (this.animationValues[v] = m[v]));
      f.scheduleRender();
    }
    applyProjectionStyles(f, p) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        f.visibility = 'hidden';
        return;
      }
      const h = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (f.visibility = ''),
          (f.opacity = ''),
          (f.pointerEvents = Qr(p?.pointerEvents) || ''),
          (f.transform = h ? h(this.latestValues, '') : 'none'));
        return;
      }
      const m = this.getLead();
      if (!this.projectionDelta || !this.layout || !m.target) {
        (this.options.layoutId &&
          ((f.opacity =
            this.latestValues.opacity !== void 0 ?
              this.latestValues.opacity
            : 1),
          (f.pointerEvents = Qr(p?.pointerEvents) || '')),
          this.hasProjected &&
            !Pa(this.latestValues) &&
            ((f.transform = h ? h({}, '') : 'none'), (this.hasProjected = !1)));
        return;
      }
      f.visibility = '';
      const v = m.animationValues || m.latestValues;
      this.applyTransformsToTarget();
      let g = IC(this.projectionDeltaWithTransform, this.treeScale, v);
      (h && (g = h(v, g)), (f.transform = g));
      const { x, y: b } = this.projectionDelta;
      ((f.transformOrigin = `${x.origin * 100}% ${b.origin * 100}% 0`),
        m.animationValues ?
          (f.opacity =
            m === this ? (v.opacity ?? this.latestValues.opacity ?? 1)
            : this.preserveOpacity ? this.latestValues.opacity
            : v.opacityExit)
        : (f.opacity =
            m === this ?
              v.opacity !== void 0 ?
                v.opacity
              : ''
            : v.opacityExit !== void 0 ? v.opacityExit
            : 0));
      for (const A in Gf) {
        if (v[A] === void 0) continue;
        const { correct: E, applyTo: M, isCSSVariable: _ } = Gf[A],
          C = g === 'none' ? v[A] : E(v[A], m);
        if (M) {
          const w = M.length;
          for (let U = 0; U < w; U++) f[M[U]] = C;
        } else
          _ ? (this.options.visualElement.renderState.vars[A] = C) : (f[A] = C);
      }
      this.options.layoutId &&
        (f.pointerEvents = m === this ? Qr(p?.pointerEvents) || '' : 'none');
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((f) => f.currentAnimation?.stop()),
        this.root.nodes.forEach(qv),
        this.root.sharedNodes.clear());
    }
  };
}
function u3(t) {
  t.updateLayout();
}
function c3(t) {
  const a = t.resumeFrom?.snapshot || t.snapshot;
  if (t.isLead() && t.layout && a && t.hasListeners('didUpdate')) {
    const { layoutBox: s, measuredBox: l } = t.layout,
      { animationType: o } = t.options,
      u = a.source !== t.layout.source;
    o === 'size' ?
      dn((v) => {
        const g = u ? a.measuredBox[v] : a.layoutBox[v],
          x = yt(g);
        ((g.min = s[v].min), (g.max = g.min + x));
      })
    : v1(o, a.layoutBox, s) &&
      dn((v) => {
        const g = u ? a.measuredBox[v] : a.layoutBox[v],
          x = yt(s[v]);
        ((g.max = g.min + x),
          t.relativeTarget &&
            !t.currentAnimation &&
            ((t.isProjectionDirty = !0),
            (t.relativeTarget[v].max = t.relativeTarget[v].min + x)));
      });
    const f = Vi();
    $s(f, s, a.layoutBox);
    const p = Vi();
    u ? $s(p, t.applyTransform(l, !0), a.measuredBox) : $s(p, s, a.layoutBox);
    const h = !f1(f);
    let m = !1;
    if (!t.resumeFrom) {
      const v = t.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: g, layout: x } = v;
        if (g && x) {
          const b = Je();
          ao(b, a.layoutBox, g.layoutBox);
          const A = Je();
          (ao(A, s, x.layoutBox),
            d1(b, A) || (m = !0),
            v.options.layoutRoot &&
              ((t.relativeTarget = A),
              (t.relativeTargetOrigin = b),
              (t.relativeParent = v)));
        }
      }
    }
    t.notifyListeners('didUpdate', {
      layout: s,
      snapshot: a,
      delta: p,
      layoutDelta: f,
      hasLayoutChanged: h,
      hasRelativeLayoutChanged: m,
    });
  } else if (t.isLead()) {
    const { onExitComplete: s } = t.options;
    s && s();
  }
  t.options.transition = void 0;
}
function f3(t) {
  t.parent &&
    (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty ||
      (t.isSharedProjectionDirty = !!(
        t.isProjectionDirty ||
        t.parent.isProjectionDirty ||
        t.parent.isSharedProjectionDirty
      )),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function d3(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function h3(t) {
  t.clearSnapshot();
}
function qv(t) {
  t.clearMeasurements();
}
function Yv(t) {
  t.isLayoutDirty = !1;
}
function m3(t) {
  const { visualElement: a } = t.options;
  (a && a.getProps().onBeforeLayoutMeasure && a.notify('BeforeLayoutMeasure'),
    t.resetTransform());
}
function Xv(t) {
  (t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0));
}
function p3(t) {
  t.resolveTargetDelta();
}
function g3(t) {
  t.calcProjection();
}
function v3(t) {
  t.resetSkewAndRotation();
}
function y3(t) {
  t.removeLeadSnapshot();
}
function Qv(t, a, s) {
  ((t.translate = Be(a.translate, 0, s)),
    (t.scale = Be(a.scale, 1, s)),
    (t.origin = a.origin),
    (t.originPoint = a.originPoint));
}
function Kv(t, a, s, l) {
  ((t.min = Be(a.min, s.min, l)), (t.max = Be(a.max, s.max, l)));
}
function b3(t, a, s, l) {
  (Kv(t.x, a.x, s.x, l), Kv(t.y, a.y, s.y, l));
}
function S3(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const x3 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Fv = (t) =>
    typeof navigator < 'u' &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(t),
  Zv = Fv('applewebkit/') && !Fv('chrome/') ? Math.round : $t;
function $v(t) {
  ((t.min = Zv(t.min)), (t.max = Zv(t.max)));
}
function T3(t) {
  ($v(t.x), $v(t.y));
}
function v1(t, a, s) {
  return (
    t === 'position' || (t === 'preserve-aspect' && !XC(Uv(a), Uv(s), 0.2))
  );
}
function _3(t) {
  return t !== t.root && t.scroll?.wasRoot;
}
const E3 = g1({
    attachResizeListener: (t, a) => il(t, 'resize', a),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
    }),
    checkIsScrollRoot: () => !0,
  }),
  af = { current: void 0 },
  y1 = g1({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!af.current) {
        const t = new E3({});
        (t.mount(window), t.setOptions({ layoutScroll: !0 }), (af.current = t));
      }
      return af.current;
    },
    resetTransform: (t, a) => {
      t.style.transform = a !== void 0 ? a : 'none';
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === 'fixed',
  }),
  b1 = D.createContext({
    transformPagePoint: (t) => t,
    isStatic: !1,
    reducedMotion: 'never',
  });
function C3(t = !0) {
  const a = D.useContext(ed);
  if (a === null) return [!0, null];
  const { isPresent: s, onExitComplete: l, register: o } = a,
    u = D.useId();
  D.useEffect(() => {
    if (t) return o(u);
  }, [t]);
  const f = D.useCallback(() => t && l && l(u), [u, l, t]);
  return !s && l ? [!1, f] : [!0];
}
const S1 = D.createContext({ strict: !1 }),
  Iv = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag',
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId'],
  };
let Jv = !1;
function A3() {
  if (Jv) return;
  const t = {};
  for (const a in Iv) t[a] = { isEnabled: (s) => Iv[a].some((l) => !!s[l]) };
  (Z0(t), (Jv = !0));
}
function x1() {
  return (A3(), vC());
}
function M3(t) {
  const a = x1();
  for (const s in t) a[s] = { ...a[s], ...t[s] };
  Z0(a);
}
const w3 = new Set([
  'animate',
  'exit',
  'variants',
  'initial',
  'style',
  'values',
  'variants',
  'transition',
  'transformTemplate',
  'custom',
  'inherit',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  '_dragX',
  '_dragY',
  'onHoverStart',
  'onHoverEnd',
  'onViewportEnter',
  'onViewportLeave',
  'globalTapTarget',
  'propagate',
  'ignoreStrict',
  'viewport',
]);
function io(t) {
  return (
    t.startsWith('while') ||
    (t.startsWith('drag') && t !== 'draggable') ||
    t.startsWith('layout') ||
    t.startsWith('onTap') ||
    t.startsWith('onPan') ||
    t.startsWith('onLayout') ||
    w3.has(t)
  );
}
let T1 = (t) => !io(t);
function D3(t) {
  typeof t == 'function' && (T1 = (a) => (a.startsWith('on') ? !io(a) : t(a)));
}
try {
  D3(require('@emotion/is-prop-valid').default);
} catch {}
function O3(t, a, s) {
  const l = {};
  for (const o in t)
    (o === 'values' && typeof t.values == 'object') ||
      ((T1(o) ||
        (s === !0 && io(o)) ||
        (!a && !io(o)) ||
        (t.draggable && o.startsWith('onDrag'))) &&
        (l[o] = t[o]));
  return l;
}
const yo = D.createContext({});
function N3(t, a) {
  if (vo(t)) {
    const { initial: s, animate: l } = t;
    return {
      initial: s === !1 || al(s) ? s : void 0,
      animate: al(l) ? l : void 0,
    };
  }
  return t.inherit !== !1 ? a : {};
}
function R3(t) {
  const { initial: a, animate: s } = N3(t, D.useContext(yo));
  return D.useMemo(() => ({ initial: a, animate: s }), [Wv(a), Wv(s)]);
}
function Wv(t) {
  return Array.isArray(t) ? t.join(' ') : t;
}
const Md = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function _1(t, a, s) {
  for (const l in a) !ht(a[l]) && !n1(l, s) && (t[l] = a[l]);
}
function j3({ transformTemplate: t }, a) {
  return D.useMemo(() => {
    const s = Md();
    return (Cd(s, a, t), Object.assign({}, s.vars, s.style));
  }, [a]);
}
function L3(t, a) {
  const s = t.style || {},
    l = {};
  return (_1(l, s, t), Object.assign(l, j3(t, a)), l);
}
function z3(t, a) {
  const s = {},
    l = L3(t, a);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((s.draggable = !1),
      (l.userSelect = l.WebkitUserSelect = l.WebkitTouchCallout = 'none'),
      (l.touchAction =
        t.drag === !0 ? 'none' : `pan-${t.drag === 'x' ? 'y' : 'x'}`)),
    t.tabIndex === void 0 &&
      (t.onTap || t.onTapStart || t.whileTap) &&
      (s.tabIndex = 0),
    (s.style = l),
    s
  );
}
const E1 = () => ({ ...Md(), attrs: {} });
function V3(t, a, s, l) {
  const o = D.useMemo(() => {
    const u = E1();
    return (
      a1(u, a, s1(l), t.transformTemplate, t.style),
      { ...u.attrs, style: { ...u.style } }
    );
  }, [a]);
  if (t.style) {
    const u = {};
    (_1(u, t.style, t), (o.style = { ...u, ...o.style }));
  }
  return o;
}
const B3 = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view',
];
function wd(t) {
  return typeof t != 'string' || t.includes('-') ?
      !1
    : !!(B3.indexOf(t) > -1 || /[A-Z]/u.test(t));
}
function U3(t, a, s, { latestValues: l }, o, u = !1, f) {
  const h = ((f ?? wd(t)) ? V3 : z3)(a, l, o, t),
    m = O3(a, typeof t == 'string', u),
    v = t !== D.Fragment ? { ...m, ...h, ref: s } : {},
    { children: g } = a,
    x = D.useMemo(() => (ht(g) ? g.get() : g), [g]);
  return D.createElement(t, { ...v, children: x });
}
function H3({ scrapeMotionValuesFromProps: t, createRenderState: a }, s, l, o) {
  return { latestValues: P3(s, l, o, t), renderState: a() };
}
function P3(t, a, s, l) {
  const o = {},
    u = l(t, {});
  for (const x in u) o[x] = Qr(u[x]);
  let { initial: f, animate: p } = t;
  const h = vo(t),
    m = K0(t);
  a &&
    m &&
    !h &&
    t.inherit !== !1 &&
    (f === void 0 && (f = a.initial), p === void 0 && (p = a.animate));
  let v = s ? s.initial === !1 : !1;
  v = v || f === !1;
  const g = v ? p : f;
  if (g && typeof g != 'boolean' && !go(g)) {
    const x = Array.isArray(g) ? g : [g];
    for (let b = 0; b < x.length; b++) {
      const A = vd(t, x[b]);
      if (A) {
        const { transitionEnd: E, transition: M, ..._ } = A;
        for (const C in _) {
          let w = _[C];
          if (Array.isArray(w)) {
            const U = v ? w.length - 1 : 0;
            w = w[U];
          }
          w !== null && (o[C] = w);
        }
        for (const C in E) o[C] = E[C];
      }
    }
  }
  return o;
}
const C1 = (t) => (a, s) => {
    const l = D.useContext(yo),
      o = D.useContext(ed),
      u = () => H3(t, a, l, o);
    return s ? u() : k_(u);
  },
  G3 = C1({ scrapeMotionValuesFromProps: Ad, createRenderState: Md }),
  k3 = C1({ scrapeMotionValuesFromProps: l1, createRenderState: E1 }),
  q3 = Symbol.for('motionComponentSymbol');
function Y3(t, a, s) {
  const l = D.useRef(s);
  D.useInsertionEffect(() => {
    l.current = s;
  });
  const o = D.useRef(null);
  return D.useCallback(
    (u) => {
      (u && t.onMount?.(u), a && (u ? a.mount(u) : a.unmount()));
      const f = l.current;
      if (typeof f == 'function')
        if (u) {
          const p = f(u);
          typeof p == 'function' && (o.current = p);
        } else o.current ? (o.current(), (o.current = null)) : f(u);
      else f && (f.current = u);
    },
    [a],
  );
}
const A1 = D.createContext({});
function ji(t) {
  return (
    t &&
    typeof t == 'object' &&
    Object.prototype.hasOwnProperty.call(t, 'current')
  );
}
function X3(t, a, s, l, o, u) {
  const { visualElement: f } = D.useContext(yo),
    p = D.useContext(S1),
    h = D.useContext(ed),
    m = D.useContext(b1),
    v = m.reducedMotion,
    g = m.skipAnimations,
    x = D.useRef(null),
    b = D.useRef(!1);
  ((l = l || p.renderer),
    !x.current &&
      l &&
      ((x.current = l(t, {
        visualState: a,
        parent: f,
        props: s,
        presenceContext: h,
        blockInitialAnimation: h ? h.initial === !1 : !1,
        reducedMotionConfig: v,
        skipAnimations: g,
        isSVG: u,
      })),
      b.current && x.current && (x.current.manuallyAnimateOnMount = !0)));
  const A = x.current,
    E = D.useContext(A1);
  A &&
    !A.projection &&
    o &&
    (A.type === 'html' || A.type === 'svg') &&
    Q3(x.current, s, o, E);
  const M = D.useRef(!1);
  D.useInsertionEffect(() => {
    A && M.current && A.update(s, h);
  });
  const _ = s[L0],
    C = D.useRef(
      !!_ &&
        !window.MotionHandoffIsComplete?.(_) &&
        window.MotionHasOptimisedAnimation?.(_),
    );
  return (
    q_(() => {
      ((b.current = !0),
        A &&
          ((M.current = !0),
          (window.MotionIsMounted = !0),
          A.updateFeatures(),
          A.scheduleRenderMicrotask(),
          C.current && A.animationState && A.animationState.animateChanges()));
    }),
    D.useEffect(() => {
      A &&
        (!C.current && A.animationState && A.animationState.animateChanges(),
        C.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(_);
          }),
          (C.current = !1)),
        (A.enteringChildren = void 0));
    }),
    A
  );
}
function Q3(t, a, s, l) {
  const {
    layoutId: o,
    layout: u,
    drag: f,
    dragConstraints: p,
    layoutScroll: h,
    layoutRoot: m,
    layoutCrossfade: v,
  } = a;
  ((t.projection = new s(
    t.latestValues,
    a['data-framer-portal-id'] ? void 0 : M1(t.parent),
  )),
    t.projection.setOptions({
      layoutId: o,
      layout: u,
      alwaysMeasureLayout: !!f || (p && ji(p)),
      visualElement: t,
      animationType: typeof u == 'string' ? u : 'both',
      initialPromotionConfig: l,
      crossfade: v,
      layoutScroll: h,
      layoutRoot: m,
    }));
}
function M1(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : M1(t.parent);
}
function sf(t, { forwardMotionProps: a = !1, type: s } = {}, l, o) {
  l && M3(l);
  const u = s ? s === 'svg' : wd(t),
    f = u ? k3 : G3;
  function p(m, v) {
    let g;
    const x = { ...D.useContext(b1), ...m, layoutId: K3(m) },
      { isStatic: b } = x,
      A = R3(m),
      E = f(m, b);
    if (!b && Ky) {
      F3();
      const M = Z3(x);
      ((g = M.MeasureLayout),
        (A.visualElement = X3(t, E, x, o, M.ProjectionNode, u)));
    }
    return S.jsxs(yo.Provider, {
      value: A,
      children: [
        g && A.visualElement ?
          S.jsx(g, { visualElement: A.visualElement, ...x })
        : null,
        U3(t, m, Y3(E, A.visualElement, v), E, b, a, u),
      ],
    });
  }
  p.displayName = `motion.${typeof t == 'string' ? t : `create(${t.displayName ?? t.name ?? ''})`}`;
  const h = D.forwardRef(p);
  return ((h[q3] = t), h);
}
function K3({ layoutId: t }) {
  const a = D.useContext(Qy).id;
  return a && t !== void 0 ? a + '-' + t : t;
}
function F3(t, a) {
  D.useContext(S1).strict;
}
function Z3(t) {
  const a = x1(),
    { drag: s, layout: l } = a;
  if (!s && !l) return {};
  const o = { ...s, ...l };
  return {
    MeasureLayout:
      s?.isEnabled(t) || l?.isEnabled(t) ? o.MeasureLayout : void 0,
    ProjectionNode: o.ProjectionNode,
  };
}
function $3(t, a) {
  if (typeof Proxy > 'u') return sf;
  const s = new Map(),
    l = (u, f) => sf(u, f, t, a),
    o = (u, f) => l(u, f);
  return new Proxy(o, {
    get: (u, f) =>
      f === 'create' ? l : (
        (s.has(f) || s.set(f, sf(f, void 0, t, a)), s.get(f))
      ),
  });
}
const I3 = (t, a) =>
  (a.isSVG ?? wd(t)) ?
    new LC(a)
  : new wC(a, { allowProjection: t !== D.Fragment });
class J3 extends va {
  constructor(a) {
    (super(a), a.animationState || (a.animationState = HC(a)));
  }
  updateAnimationControlsSubscription() {
    const { animate: a } = this.node.getProps();
    go(a) && (this.unmountControls = a.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: a } = this.node.getProps(),
      { animate: s } = this.node.prevProps || {};
    a !== s && this.updateAnimationControlsSubscription();
  }
  unmount() {
    (this.node.animationState.reset(), this.unmountControls?.());
  }
}
let W3 = 0;
class eA extends va {
  constructor() {
    (super(...arguments), (this.id = W3++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: a, onExitComplete: s } = this.node.presenceContext,
      { isPresent: l } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || a === l) return;
    const o = this.node.animationState.setActive('exit', !a);
    s &&
      !a &&
      o.then(() => {
        s(this.id);
      });
  }
  mount() {
    const { register: a, onExitComplete: s } = this.node.presenceContext || {};
    (s && s(this.id), a && (this.unmount = a(this.id)));
  }
  unmount() {}
}
const tA = { animation: { Feature: J3 }, exit: { Feature: eA } };
function dl(t) {
  return { point: { x: t.pageX, y: t.pageY } };
}
const nA = (t) => (a) => xd(a) && t(a, dl(a));
function Is(t, a, s, l) {
  return il(t, a, nA(s), l);
}
const w1 = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
  ey = (t, a) => Math.abs(t - a);
function aA(t, a) {
  const s = ey(t.x, a.x),
    l = ey(t.y, a.y);
  return Math.sqrt(s ** 2 + l ** 2);
}
const ty = new Set(['auto', 'scroll']);
class D1 {
  constructor(
    a,
    s,
    {
      transformPagePoint: l,
      contextWindow: o = window,
      dragSnapToOrigin: u = !1,
      distanceThreshold: f = 3,
      element: p,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (b) => {
        this.handleScroll(b.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const b = rf(this.lastMoveEventInfo, this.history),
          A = this.startEvent !== null,
          E = aA(b.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!A && !E) return;
        const { point: M } = b,
          { timestamp: _ } = ft;
        this.history.push({ ...M, timestamp: _ });
        const { onStart: C, onMove: w } = this.handlers;
        (A ||
          (C && C(this.lastMoveEvent, b),
          (this.startEvent = this.lastMoveEvent)),
          w && w(this.lastMoveEvent, b));
      }),
      (this.handlePointerMove = (b, A) => {
        ((this.lastMoveEvent = b),
          (this.lastMoveEventInfo = lf(A, this.transformPagePoint)),
          je.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (b, A) => {
        this.end();
        const { onEnd: E, onSessionEnd: M, resumeAnimation: _ } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && _ && _(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const C = rf(
          b.type === 'pointercancel' ?
            this.lastMoveEventInfo
          : lf(A, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && E && E(b, C), M && M(b, C));
      }),
      !xd(a))
    )
      return;
    ((this.dragSnapToOrigin = u),
      (this.handlers = s),
      (this.transformPagePoint = l),
      (this.distanceThreshold = f),
      (this.contextWindow = o || window));
    const h = dl(a),
      m = lf(h, this.transformPagePoint),
      { point: v } = m,
      { timestamp: g } = ft;
    this.history = [{ ...v, timestamp: g }];
    const { onSessionStart: x } = s;
    (x && x(a, rf(m, this.history)),
      (this.removeListeners = ul(
        Is(this.contextWindow, 'pointermove', this.handlePointerMove),
        Is(this.contextWindow, 'pointerup', this.handlePointerUp),
        Is(this.contextWindow, 'pointercancel', this.handlePointerUp),
      )),
      p && this.startScrollTracking(p));
  }
  startScrollTracking(a) {
    let s = a.parentElement;
    for (; s; ) {
      const l = getComputedStyle(s);
      ((ty.has(l.overflowX) || ty.has(l.overflowY)) &&
        this.scrollPositions.set(s, { x: s.scrollLeft, y: s.scrollTop }),
        (s = s.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener('scroll', this.onElementScroll, {
        capture: !0,
        passive: !0,
      }),
      window.addEventListener('scroll', this.onWindowScroll, { passive: !0 }),
      (this.removeScrollListeners = () => {
        (window.removeEventListener('scroll', this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener('scroll', this.onWindowScroll));
      }));
  }
  handleScroll(a) {
    const s = this.scrollPositions.get(a);
    if (!s) return;
    const l = a === window,
      o =
        l ?
          { x: window.scrollX, y: window.scrollY }
        : { x: a.scrollLeft, y: a.scrollTop },
      u = { x: o.x - s.x, y: o.y - s.y };
    (u.x === 0 && u.y === 0) ||
      (l ?
        this.lastMoveEventInfo &&
        ((this.lastMoveEventInfo.point.x += u.x),
        (this.lastMoveEventInfo.point.y += u.y))
      : this.history.length > 0 &&
        ((this.history[0].x -= u.x), (this.history[0].y -= u.y)),
      this.scrollPositions.set(a, o),
      je.update(this.updatePoint, !0));
  }
  updateHandlers(a) {
    this.handlers = a;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      pa(this.updatePoint));
  }
}
function lf(t, a) {
  return a ? { point: a(t.point) } : t;
}
function ny(t, a) {
  return { x: t.x - a.x, y: t.y - a.y };
}
function rf({ point: t }, a) {
  return {
    point: t,
    delta: ny(t, O1(a)),
    offset: ny(t, iA(a)),
    velocity: sA(a, 0.1),
  };
}
function iA(t) {
  return t[0];
}
function O1(t) {
  return t[t.length - 1];
}
function sA(t, a) {
  if (t.length < 2) return { x: 0, y: 0 };
  let s = t.length - 1,
    l = null;
  const o = O1(t);
  for (; s >= 0 && ((l = t[s]), !(o.timestamp - l.timestamp > sn(a))); ) s--;
  if (!l) return { x: 0, y: 0 };
  l === t[0] &&
    t.length > 2 &&
    o.timestamp - l.timestamp > sn(a) * 2 &&
    (l = t[1]);
  const u = Zt(o.timestamp - l.timestamp);
  if (u === 0) return { x: 0, y: 0 };
  const f = { x: (o.x - l.x) / u, y: (o.y - l.y) / u };
  return (f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f);
}
function lA(t, { min: a, max: s }, l) {
  return (
    a !== void 0 && t < a ?
      (t = l ? Be(a, t, l.min) : Math.max(t, a))
    : s !== void 0 && t > s && (t = l ? Be(s, t, l.max) : Math.min(t, s)),
    t
  );
}
function ay(t, a, s) {
  return {
    min: a !== void 0 ? t.min + a : void 0,
    max: s !== void 0 ? t.max + s - (t.max - t.min) : void 0,
  };
}
function rA(t, { top: a, left: s, bottom: l, right: o }) {
  return { x: ay(t.x, s, o), y: ay(t.y, a, l) };
}
function iy(t, a) {
  let s = a.min - t.min,
    l = a.max - t.max;
  return (
    a.max - a.min < t.max - t.min && ([s, l] = [l, s]),
    { min: s, max: l }
  );
}
function oA(t, a) {
  return { x: iy(t.x, a.x), y: iy(t.y, a.y) };
}
function uA(t, a) {
  let s = 0.5;
  const l = yt(t),
    o = yt(a);
  return (
    o > l ?
      (s = el(a.min, a.max - l, t.min))
    : l > o && (s = el(t.min, t.max - o, a.min)),
    gn(0, 1, s)
  );
}
function cA(t, a) {
  const s = {};
  return (
    a.min !== void 0 && (s.min = a.min - t.min),
    a.max !== void 0 && (s.max = a.max - t.min),
    s
  );
}
const kf = 0.35;
function fA(t = kf) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = kf),
    { x: sy(t, 'left', 'right'), y: sy(t, 'top', 'bottom') }
  );
}
function sy(t, a, s) {
  return { min: ly(t, a), max: ly(t, s) };
}
function ly(t, a) {
  return typeof t == 'number' ? t : t[a] || 0;
}
const dA = new WeakMap();
class hA {
  constructor(a) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Je()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = a));
  }
  start(a, { snapToCursor: s = !1, distanceThreshold: l } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1) return;
    const u = (g) => {
        (s && this.snapToCursor(dl(g).point), this.stopAnimation());
      },
      f = (g, x) => {
        const { drag: b, dragPropagation: A, onDragStart: E } = this.getProps();
        if (
          b &&
          !A &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = KE(b)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = g),
          (this.latestPanInfo = x),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          dn((_) => {
            let C = this.getAxisMotionValue(_).get() || 0;
            if (mn.test(C)) {
              const { projection: w } = this.visualElement;
              if (w && w.layout) {
                const U = w.layout.layoutBox[_];
                U && (C = yt(U) * (parseFloat(C) / 100));
              }
            }
            this.originPoint[_] = C;
          }),
          E && je.update(() => E(g, x), !1, !0),
          Lf(this.visualElement, 'transform'));
        const { animationState: M } = this.visualElement;
        M && M.setActive('whileDrag', !0);
      },
      p = (g, x) => {
        ((this.latestPointerEvent = g), (this.latestPanInfo = x));
        const {
          dragPropagation: b,
          dragDirectionLock: A,
          onDirectionLock: E,
          onDrag: M,
        } = this.getProps();
        if (!b && !this.openDragLock) return;
        const { offset: _ } = x;
        if (A && this.currentDirection === null) {
          ((this.currentDirection = pA(_)),
            this.currentDirection !== null && E && E(this.currentDirection));
          return;
        }
        (this.updateAxis('x', x.point, _),
          this.updateAxis('y', x.point, _),
          this.visualElement.render(),
          M && je.update(() => M(g, x), !1, !0));
      },
      h = (g, x) => {
        ((this.latestPointerEvent = g),
          (this.latestPanInfo = x),
          this.stop(g, x),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      m = () => {
        const { dragSnapToOrigin: g } = this.getProps();
        (g || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: v } = this.getProps();
    this.panSession = new D1(
      a,
      {
        onSessionStart: u,
        onStart: f,
        onMove: p,
        onSessionEnd: h,
        resumeAnimation: m,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: v,
        distanceThreshold: l,
        contextWindow: w1(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(a, s) {
    const l = a || this.latestPointerEvent,
      o = s || this.latestPanInfo,
      u = this.isDragging;
    if ((this.cancel(), !u || !o || !l)) return;
    const { velocity: f } = o;
    this.startAnimation(f);
    const { onDragEnd: p } = this.getProps();
    p && je.postRender(() => p(l, o));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: a, animationState: s } = this.visualElement;
    (a && (a.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: l } = this.getProps();
    (!l &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      s && s.setActive('whileDrag', !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(a, s, l) {
    const { drag: o } = this.getProps();
    if (!l || !Vr(a, o, this.currentDirection)) return;
    const u = this.getAxisMotionValue(a);
    let f = this.originPoint[a] + l[a];
    (this.constraints &&
      this.constraints[a] &&
      (f = lA(f, this.constraints[a], this.elastic[a])),
      u.set(f));
  }
  resolveConstraints() {
    const { dragConstraints: a, dragElastic: s } = this.getProps(),
      l =
        this.visualElement.projection && !this.visualElement.projection.layout ?
          this.visualElement.projection.measure(!1)
        : this.visualElement.projection?.layout,
      o = this.constraints;
    (a && ji(a) ?
      this.constraints || (this.constraints = this.resolveRefConstraints())
    : a && l ? (this.constraints = rA(l.layoutBox, a))
    : (this.constraints = !1),
      (this.elastic = fA(s)),
      o !== this.constraints &&
        !ji(a) &&
        l &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        dn((u) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(u) &&
            (this.constraints[u] = cA(l.layoutBox[u], this.constraints[u]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: a, onMeasureDragConstraints: s } = this.getProps();
    if (!a || !ji(a)) return !1;
    const l = a.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const u = TC(l, o.root, this.visualElement.getTransformPagePoint());
    let f = oA(o.layout.layoutBox, u);
    if (s) {
      const p = s(bC(f));
      ((this.hasMutatedConstraints = !!p), p && (f = I0(p)));
    }
    return f;
  }
  startAnimation(a) {
    const {
        drag: s,
        dragMomentum: l,
        dragElastic: o,
        dragTransition: u,
        dragSnapToOrigin: f,
        onDragTransitionEnd: p,
      } = this.getProps(),
      h = this.constraints || {},
      m = dn((v) => {
        if (!Vr(v, s, this.currentDirection)) return;
        let g = (h && h[v]) || {};
        f && (g = { min: 0, max: 0 });
        const x = o ? 200 : 1e6,
          b = o ? 40 : 1e7,
          A = {
            type: 'inertia',
            velocity: l ? a[v] : 0,
            bounceStiffness: x,
            bounceDamping: b,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...u,
            ...g,
          };
        return this.startAxisValueAnimation(v, A);
      });
    return Promise.all(m).then(p);
  }
  startAxisValueAnimation(a, s) {
    const l = this.getAxisMotionValue(a);
    return (
      Lf(this.visualElement, a),
      l.start(gd(a, l, 0, s, this.visualElement, !1))
    );
  }
  stopAnimation() {
    dn((a) => this.getAxisMotionValue(a).stop());
  }
  getAxisMotionValue(a) {
    const s = `_drag${a.toUpperCase()}`,
      l = this.visualElement.getProps(),
      o = l[s];
    return (
      o ||
      this.visualElement.getValue(a, (l.initial ? l.initial[a] : void 0) || 0)
    );
  }
  snapToCursor(a) {
    dn((s) => {
      const { drag: l } = this.getProps();
      if (!Vr(s, l, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        u = this.getAxisMotionValue(s);
      if (o && o.layout) {
        const { min: f, max: p } = o.layout.layoutBox[s],
          h = u.get() || 0;
        u.set(a[s] - Be(f, p, 0.5) + h);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: a, dragConstraints: s } = this.getProps(),
      { projection: l } = this.visualElement;
    if (!ji(s) || !l || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    dn((f) => {
      const p = this.getAxisMotionValue(f);
      if (p && this.constraints !== !1) {
        const h = p.get();
        o[f] = uA({ min: h, max: h }, this.constraints[f]);
      }
    });
    const { transformTemplate: u } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = u ? u({}, '') : 'none'),
      l.root && l.root.updateScroll(),
      l.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      dn((f) => {
        if (!Vr(f, a, null)) return;
        const p = this.getAxisMotionValue(f),
          { min: h, max: m } = this.constraints[f];
        p.set(Be(h, m, o[f]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    dA.set(this.visualElement, this);
    const a = this.visualElement.current,
      s = Is(a, 'pointerdown', (m) => {
        const { drag: v, dragListener: g = !0 } = this.getProps(),
          x = m.target,
          b = x !== a && WE(x);
        v && g && !b && this.start(m);
      });
    let l;
    const o = () => {
        const { dragConstraints: m } = this.getProps();
        ji(m) &&
          m.current &&
          ((this.constraints = this.resolveRefConstraints()),
          l ||
            (l = mA(a, m.current, () =>
              this.scalePositionWithinConstraints(),
            )));
      },
      { projection: u } = this.visualElement,
      f = u.addEventListener('measure', o);
    (u && !u.layout && (u.root && u.root.updateScroll(), u.updateLayout()),
      je.read(o));
    const p = il(window, 'resize', () => this.scalePositionWithinConstraints()),
      h = u.addEventListener(
        'didUpdate',
        ({ delta: m, hasLayoutChanged: v }) => {
          this.isDragging &&
            v &&
            (dn((g) => {
              const x = this.getAxisMotionValue(g);
              x &&
                ((this.originPoint[g] += m[g].translate),
                x.set(x.get() + m[g].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (p(), s(), f(), h && h(), l && l());
    };
  }
  getProps() {
    const a = this.visualElement.getProps(),
      {
        drag: s = !1,
        dragDirectionLock: l = !1,
        dragPropagation: o = !1,
        dragConstraints: u = !1,
        dragElastic: f = kf,
        dragMomentum: p = !0,
      } = a;
    return {
      ...a,
      drag: s,
      dragDirectionLock: l,
      dragPropagation: o,
      dragConstraints: u,
      dragElastic: f,
      dragMomentum: p,
    };
  }
}
function ry(t) {
  let a = !0;
  return () => {
    if (a) {
      a = !1;
      return;
    }
    t();
  };
}
function mA(t, a, s) {
  const l = gv(t, ry(s)),
    o = gv(a, ry(s));
  return () => {
    (l(), o());
  };
}
function Vr(t, a, s) {
  return (a === !0 || a === t) && (s === null || s === t);
}
function pA(t, a = 10) {
  let s = null;
  return (Math.abs(t.y) > a ? (s = 'y') : Math.abs(t.x) > a && (s = 'x'), s);
}
class gA extends va {
  constructor(a) {
    (super(a),
      (this.removeGroupControls = $t),
      (this.removeListeners = $t),
      (this.controls = new hA(a)));
  }
  mount() {
    const { dragControls: a } = this.node.getProps();
    (a && (this.removeGroupControls = a.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || $t));
  }
  update() {
    const { dragControls: a } = this.node.getProps(),
      { dragControls: s } = this.node.prevProps || {};
    a !== s &&
      (this.removeGroupControls(),
      a && (this.removeGroupControls = a.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const of = (t) => (a, s) => {
  t && je.update(() => t(a, s), !1, !0);
};
class vA extends va {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = $t));
  }
  onPointerDown(a) {
    this.session = new D1(a, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: w1(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: a,
      onPanStart: s,
      onPan: l,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: of(a),
      onStart: of(s),
      onMove: of(l),
      onEnd: (u, f) => {
        (delete this.session, o && je.postRender(() => o(u, f)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Is(this.node.current, 'pointerdown', (a) =>
      this.onPointerDown(a),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let uf = !1;
class yA extends D.Component {
  componentDidMount() {
    const {
        visualElement: a,
        layoutGroup: s,
        switchLayoutGroup: l,
        layoutId: o,
      } = this.props,
      { projection: u } = a;
    (u &&
      (s.group && s.group.add(u),
      l && l.register && o && l.register(u),
      uf && u.root.didUpdate(),
      u.addEventListener('animationComplete', () => {
        this.safeToRemove();
      }),
      u.setOptions({
        ...u.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (Kr.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(a) {
    const {
        layoutDependency: s,
        visualElement: l,
        drag: o,
        isPresent: u,
      } = this.props,
      { projection: f } = l;
    return (
      f &&
        ((f.isPresent = u),
        a.layoutDependency !== s &&
          f.setOptions({ ...f.options, layoutDependency: s }),
        (uf = !0),
        o || a.layoutDependency !== s || s === void 0 || a.isPresent !== u ?
          f.willUpdate()
        : this.safeToRemove(),
        a.isPresent !== u &&
          (u ?
            f.promote()
          : f.relegate() ||
            je.postRender(() => {
              const p = f.getStack();
              (!p || !p.members.length) && this.safeToRemove();
            }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: a } = this.props.visualElement;
    a &&
      (a.root.didUpdate(),
      Sd.postRender(() => {
        !a.currentAnimation && a.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: a,
        layoutGroup: s,
        switchLayoutGroup: l,
      } = this.props,
      { projection: o } = a;
    ((uf = !0),
      o &&
        (o.scheduleCheckAfterUnmount(),
        s && s.group && s.group.remove(o),
        l && l.deregister && l.deregister(o)));
  }
  safeToRemove() {
    const { safeToRemove: a } = this.props;
    a && a();
  }
  render() {
    return null;
  }
}
function N1(t) {
  const [a, s] = C3(),
    l = D.useContext(Qy);
  return S.jsx(yA, {
    ...t,
    layoutGroup: l,
    switchLayoutGroup: D.useContext(A1),
    isPresent: a,
    safeToRemove: s,
  });
}
const bA = {
  pan: { Feature: vA },
  drag: { Feature: gA, ProjectionNode: y1, MeasureLayout: N1 },
};
function oy(t, a, s) {
  const { props: l } = t;
  t.animationState &&
    l.whileHover &&
    t.animationState.setActive('whileHover', s === 'Start');
  const o = 'onHover' + s,
    u = l[o];
  u && je.postRender(() => u(a, dl(a)));
}
class SA extends va {
  mount() {
    const { current: a } = this.node;
    a &&
      (this.unmount = ZE(
        a,
        (s, l) => (oy(this.node, l, 'Start'), (o) => oy(this.node, o, 'End')),
      ));
  }
  unmount() {}
}
class xA extends va {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let a = !1;
    try {
      a = this.node.current.matches(':focus-visible');
    } catch {
      a = !0;
    }
    !a ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = ul(
      il(this.node.current, 'focus', () => this.onFocus()),
      il(this.node.current, 'blur', () => this.onBlur()),
    );
  }
  unmount() {}
}
function uy(t, a, s) {
  const { props: l } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
  t.animationState &&
    l.whileTap &&
    t.animationState.setActive('whileTap', s === 'Start');
  const o = 'onTap' + (s === 'End' ? '' : s),
    u = l[o];
  u && je.postRender(() => u(a, dl(a)));
}
class TA extends va {
  mount() {
    const { current: a } = this.node;
    if (!a) return;
    const { globalTapTarget: s, propagate: l } = this.node.props;
    this.unmount = tC(
      a,
      (o, u) => (
        uy(this.node, u, 'Start'),
        (f, { success: p }) => uy(this.node, f, p ? 'End' : 'Cancel')
      ),
      { useGlobalTarget: s, stopPropagation: l?.tap === !1 },
    );
  }
  unmount() {}
}
const qf = new WeakMap(),
  cf = new WeakMap(),
  _A = (t) => {
    const a = qf.get(t.target);
    a && a(t);
  },
  EA = (t) => {
    t.forEach(_A);
  };
function CA({ root: t, ...a }) {
  const s = t || document;
  cf.has(s) || cf.set(s, {});
  const l = cf.get(s),
    o = JSON.stringify(a);
  return (
    l[o] || (l[o] = new IntersectionObserver(EA, { root: t, ...a })),
    l[o]
  );
}
function AA(t, a, s) {
  const l = CA(a);
  return (
    qf.set(t, s),
    l.observe(t),
    () => {
      (qf.delete(t), l.unobserve(t));
    }
  );
}
const MA = { some: 0, all: 1 };
class wA extends va {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: a = {} } = this.node.getProps(),
      { root: s, margin: l, amount: o = 'some', once: u } = a,
      f = {
        root: s ? s.current : void 0,
        rootMargin: l,
        threshold: typeof o == 'number' ? o : MA[o],
      },
      p = (h) => {
        const { isIntersecting: m } = h;
        if (
          this.isInView === m ||
          ((this.isInView = m), u && !m && this.hasEnteredView)
        )
          return;
        (m && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive('whileInView', m));
        const { onViewportEnter: v, onViewportLeave: g } = this.node.getProps(),
          x = m ? v : g;
        x && x(h);
      };
    return AA(this.node.current, f, p);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > 'u') return;
    const { props: a, prevProps: s } = this.node;
    ['amount', 'margin', 'root'].some(DA(a, s)) && this.startObserver();
  }
  unmount() {}
}
function DA({ viewport: t = {} }, { viewport: a = {} } = {}) {
  return (s) => t[s] !== a[s];
}
const OA = {
    inView: { Feature: wA },
    tap: { Feature: TA },
    focus: { Feature: xA },
    hover: { Feature: SA },
  },
  NA = { layout: { ProjectionNode: y1, MeasureLayout: N1 } },
  RA = { ...tA, ...OA, ...bA, ...NA },
  jA = $3(RA, I3),
  Xa = ({ product: t, onFavoriteChange: a }) => {
    const { addToCart: s, isInCart: l } = Xy(),
      o = () => {
        t && s(t);
      },
      [u, f] = D.useState(() =>
        t ?
          JSON.parse(localStorage.getItem('favorites') || '[]').includes(
            String(t.id),
          )
        : !1,
      );
    if (!t) return null;
    const p = t.priceDiscount ?? ('price' in t ? t.price : void 0),
      h = t.priceRegular ?? ('fullPrice' in t ? t.fullPrice : void 0),
      m = 'images' in t ? t.images[0] : t.image,
      v = m ? `/${m}` : null,
      g = 'itemId' in t ? t.itemId : t.id,
      x = String(g).toLowerCase();
    let b = 'phones';
    x.includes('ipad') ? (b = 'tablets')
    : x.includes('watch') ? (b = 'accessories')
    : 'category' in t && t.category && (b = t.category);
    const A = `/${b}/${g}`,
      E = () => {
        const M = JSON.parse(localStorage.getItem('favorites') || '[]');
        let _;
        (M.includes(String(t.id)) ?
          (_ = M.filter((C) => C !== String(t.id)))
        : (_ = [...M, String(t.id)]),
          localStorage.setItem('favorites', JSON.stringify(_)),
          f(!u),
          a?.());
      };
    return S.jsx(jA.div, {
      className: 'card',
      whileHover: { scale: 1.02, y: -4 },
      transition: { type: 'spring', stiffness: 300 },
      children: S.jsxs('div', {
        className: 'card__container',
        children: [
          S.jsxs(an, {
            to: A,
            className: 'card__link',
            children: [
              S.jsx('div', {
                className: 'card__img-container',
                children:
                  v &&
                  S.jsx('img', {
                    className: 'card__image',
                    src: v,
                    alt: t.name,
                  }),
              }),
              S.jsx('div', {
                className: 'card__title-wrapper',
                children: S.jsx('h2', {
                  className: 'card__title',
                  children: t.name,
                }),
              }),
            ],
          }),
          S.jsx(G_, { currentPrice: p, fullPrice: h }),
          S.jsx(ky, { screen: t.screen, capacity: t.capacity, ram: t.ram }),
          S.jsx(qy, {
            onAddToCart: (M) => {
              (M.preventDefault(), M.stopPropagation(), o());
            },
            onToggleFavorite: (M) => {
              (M.preventDefault(), M.stopPropagation(), E());
            },
            isFavorite: u,
            isInCart: l(t),
          }),
        ],
      }),
    });
  },
  bo = (t) => [...t].sort((a, s) => (s.year || 0) - (a.year || 0)),
  hl = (t) =>
    [...t].sort((a, s) => {
      const l = (a.priceRegular || 0) - (a.priceDiscount || 0);
      return (s.priceRegular || 0) - (s.priceDiscount || 0) - l;
    }),
  LA = '_search_1flgh_19',
  zA = '_title_1flgh_34',
  VA = '_modelsCount_1flgh_44',
  BA = '_controls_1flgh_52',
  UA = '_controlsLeft_1flgh_59',
  HA = '_control_1flgh_52',
  PA = '_label_1flgh_69',
  GA = '_select_1flgh_73',
  kA = '_searchInput_1flgh_94',
  nt = {
    'phones-page__container': '_phones-page__container_1flgh_9',
    'search': LA,
    'phones-page': '_phones-page_1flgh_9',
    'title': zA,
    'modelsCount': VA,
    'phones-page__controls': '_phones-page__controls_1flgh_49',
    'controls': BA,
    'controlsLeft': UA,
    'control': HA,
    'label': PA,
    'select': GA,
    'searchInput': kA,
    'phones-page__list': '_phones-page__list_1flgh_105',
  },
  qA = '_breadcrumbs_1s9hk_14',
  YA = '_breadcrumbs__home_1s9hk_20',
  XA = '_breadcrumbs__separator_1s9hk_29',
  QA = '_breadcrumbs__link_1s9hk_33',
  KA = '_breadcrumbs__current_1s9hk_44',
  Ha = {
    breadcrumbs: qA,
    breadcrumbs__home: YA,
    breadcrumbs__separator: XA,
    breadcrumbs__link: QA,
    breadcrumbs__current: KA,
  },
  ki = () => {
    const t = ga(),
      { productId: a } = Zf(),
      s = t.pathname.split('/').filter(Boolean);
    if (s.length === 0) return null;
    const l = s[0],
      o = (f) => f.charAt(0).toUpperCase() + f.slice(1),
      u = (f) =>
        f
          .split('-')
          .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
          .join(' ');
    return S.jsxs('nav', {
      className: Ha.breadcrumbs,
      children: [
        S.jsx(an, {
          to: '/',
          className: Ha.breadcrumbs__home,
          children: S.jsx('img', { src: '/img/icons/Home.svg', alt: 'Home' }),
        }),
        S.jsx('span', { className: Ha.breadcrumbs__separator, children: '>' }),
        a ?
          S.jsx(an, {
            to: `/${l}`,
            className: Ha.breadcrumbs__link,
            children: o(l),
          })
        : S.jsx('span', { className: Ha.breadcrumbs__current, children: o(l) }),
        a &&
          S.jsxs(S.Fragment, {
            children: [
              S.jsx('span', {
                className: Ha.breadcrumbs__separator,
                children: '>',
              }),
              S.jsx('span', {
                className: Ha.breadcrumbs__current,
                children: u(a),
              }),
            ],
          }),
      ],
    });
  },
  Dd = () =>
    S.jsxs('div', {
      className: 'card-skeleton',
      children: [
        S.jsx('div', { className: 'card-skeleton__img' }),
        S.jsx('div', { className: 'card-skeleton__title' }),
        S.jsx('div', { className: 'card-skeleton__price' }),
        S.jsxs('div', {
          className: 'card-skeleton__features',
          children: [
            S.jsx('div', { className: 'card-skeleton__features-line' }),
            S.jsx('div', { className: 'card-skeleton__features-line' }),
            S.jsx('div', { className: 'card-skeleton__features-line' }),
          ],
        }),
        S.jsxs('div', {
          className: 'card-skeleton__actions',
          children: [
            S.jsx('div', { className: 'card-skeleton__actions-btn' }),
            S.jsx('div', { className: 'card-skeleton__actions-fav' }),
          ],
        }),
      ],
    }),
  FA = '_wrapper_13m91_14',
  ZA = '_icon_13m91_24',
  $A = '_title_13m91_31',
  IA = '_message_13m91_38',
  Br = { wrapper: FA, icon: ZA, title: $A, message: IA },
  JA =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='34'%20height='34'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23fdfdfd'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='lucide%20lucide-search-x'%20%3e%3cpath%20d='m13.5%208.5-5%205'/%3e%3cpath%20d='m8.5%208.5%205%205'/%3e%3ccircle%20cx='11'%20cy='11'%20r='8'/%3e%3cpath%20d='m21%2021-4.3-4.3'/%3e%3c/svg%3e",
  Od = ({ category: t = 'products' }) =>
    S.jsxs('div', {
      className: Br.wrapper,
      children: [
        S.jsx('img', { src: JA, alt: 'No results found', className: Br.icon }),
        S.jsxs('h2', { className: Br.title, children: ['No ', t, ' found'] }),
        S.jsx('p', {
          className: Br.message,
          children: 'We couldnt find any results matching your search query.',
        }),
      ],
    }),
  WA = () => {
    const [t, a] = D.useState([]),
      [s, l] = D.useState('newest'),
      [o, u] = D.useState(16),
      [f, p] = D.useState(!0),
      [h, m] = D.useState(''),
      [v, g] = D.useState('');
    (D.useEffect(() => {
      (async () => {
        p(!0);
        try {
          const M = await ho();
          a(M.map((_) => ({ ..._, category: 'phones' })));
        } finally {
          setTimeout(() => p(!1), 600);
        }
      })();
    }, []),
      D.useEffect(() => {
        const E = setTimeout(() => {
          g(h);
        }, 300);
        return () => clearTimeout(E);
      }, [h]),
      D.useEffect(() => {
        if (h.length === 0 && v.length > 0) {
          p(!0);
          const E = setTimeout(() => {
            p(!1);
          }, 500);
          return () => clearTimeout(E);
        }
      }, [h]));
    const x = D.useMemo(() => {
        const E = v.toLowerCase().trim();
        return t.filter((M) => M.name.toLowerCase().includes(E));
      }, [t, v]),
      b = D.useMemo(() => {
        const E = [...x];
        switch (s) {
          case 'alphabetically':
            return E.sort((M, _) => M.name.localeCompare(_.name));
          case 'bestPrice':
            return hl(E);
          default:
            return bo(E);
        }
      }, [x, s]),
      A = D.useMemo(() => b.slice(0, o), [b, o]);
    return S.jsx('div', {
      className: nt['phones-page'],
      children: S.jsxs('div', {
        className: nt['phones-page__container'],
        children: [
          S.jsx(ki, {}),
          S.jsx('h1', { className: nt.title, children: 'Mobile phones' }),
          !f &&
            S.jsxs('p', {
              className: nt.modelsCount,
              children: [x.length, ' models'],
            }),
          S.jsx('section', {
            className: nt['phones-page__controls'],
            children: S.jsxs('div', {
              className: nt.controls,
              children: [
                S.jsxs('div', {
                  className: nt.controlsLeft,
                  children: [
                    S.jsxs('div', {
                      className: nt.control,
                      children: [
                        S.jsx('label', {
                          className: nt.label,
                          children: 'Sort by',
                        }),
                        S.jsxs('select', {
                          className: nt.select,
                          value: s,
                          onChange: (E) => l(E.target.value),
                          children: [
                            S.jsx('option', {
                              value: 'newest',
                              children: 'Newest',
                            }),
                            S.jsx('option', {
                              value: 'alphabetically',
                              children: 'Alphabetically',
                            }),
                            S.jsx('option', {
                              value: 'bestPrice',
                              children: 'Best price',
                            }),
                          ],
                        }),
                      ],
                    }),
                    S.jsxs('div', {
                      className: nt.control,
                      children: [
                        S.jsx('label', {
                          className: nt.label,
                          children: 'Items on page',
                        }),
                        S.jsxs('select', {
                          className: nt.select,
                          value: o,
                          onChange: (E) => u(+E.target.value),
                          children: [
                            S.jsx('option', { value: 16, children: '16' }),
                            S.jsx('option', { value: 32, children: '32' }),
                            S.jsx('option', { value: 64, children: '64' }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                S.jsxs('div', {
                  className: nt.search,
                  children: [
                    S.jsx('label', {
                      className: nt.label,
                      htmlFor: 'search-input',
                      children: 'Looking for something?',
                    }),
                    S.jsx('input', {
                      id: 'search-input',
                      type: 'text',
                      placeholder: 'Type here',
                      className: nt.searchInput,
                      value: h,
                      onChange: (E) => m(E.target.value),
                    }),
                  ],
                }),
              ],
            }),
          }),
          S.jsx('section', {
            className: nt['phones-page__list'],
            children:
              f ? Array.from({ length: 8 }).map((E, M) => S.jsx(Dd, {}, M))
              : A.length > 0 ? A.map((E) => S.jsx(Xa, { product: E }, E.id))
              : S.jsx(Od, { category: 'phones' }),
          }),
          S.jsx('section', { className: nt['phones-page__pagination'] }),
        ],
      }),
    });
  },
  eM = '_search_6oh3h_19',
  tM = '_title_6oh3h_34',
  nM = '_modelsCount_6oh3h_44',
  aM = '_controls_6oh3h_52',
  iM = '_controlsLeft_6oh3h_59',
  sM = '_control_6oh3h_52',
  lM = '_label_6oh3h_69',
  rM = '_select_6oh3h_73',
  oM = '_searchInput_6oh3h_95',
  ut = {
    'accessories-page__container': '_accessories-page__container_6oh3h_9',
    'search': eM,
    'accessories-page': '_accessories-page_6oh3h_9',
    'title': tM,
    'modelsCount': nM,
    'accessories-page__controls': '_accessories-page__controls_6oh3h_49',
    'controls': aM,
    'controlsLeft': iM,
    'control': sM,
    'label': lM,
    'select': rM,
    'searchInput': oM,
    'accessories-page__list': '_accessories-page__list_6oh3h_106',
  },
  uM = () => {
    const [t, a] = D.useState([]),
      [s, l] = D.useState('newest'),
      [o, u] = D.useState(16),
      [f, p] = D.useState(!0),
      [h, m] = D.useState(''),
      [v, g] = D.useState('');
    (D.useEffect(() => {
      (async () => {
        p(!0);
        try {
          const M = await po();
          a(M.map((_) => ({ ..._, category: 'accessories' })));
        } finally {
          setTimeout(() => p(!1), 600);
        }
      })();
    }, []),
      D.useEffect(() => {
        const E = setTimeout(() => {
          g(h);
        }, 300);
        return () => clearTimeout(E);
      }, [h]),
      D.useEffect(() => {
        if (h.length === 0 && v.length > 0) {
          p(!0);
          const E = setTimeout(() => {
            p(!1);
          }, 500);
          return () => clearTimeout(E);
        }
      }, [h]));
    const x = D.useMemo(() => {
        const E = v.toLowerCase().trim();
        return t.filter((M) => M.name.toLowerCase().includes(E));
      }, [t, v]),
      b = D.useMemo(() => {
        const E = [...x];
        switch (s) {
          case 'alphabetically':
            return E.sort((M, _) => M.name.localeCompare(_.name));
          case 'bestPrice':
            return hl(E);
          default:
            return bo(E);
        }
      }, [x, s]),
      A = D.useMemo(() => b.slice(0, o), [b, o]);
    return S.jsx('div', {
      className: ut['accessories-page'],
      children: S.jsxs('div', {
        className: ut['accessories-page__container'],
        children: [
          S.jsx(ki, {}),
          S.jsx('h1', { className: ut.title, children: 'Accessories' }),
          !f &&
            S.jsxs('p', {
              className: ut.modelsCount,
              children: [x.length, ' models'],
            }),
          S.jsx('section', {
            className: ut['accessories-page__controls'],
            children: S.jsxs('div', {
              className: ut.controls,
              children: [
                S.jsxs('div', {
                  className: ut.controlsLeft,
                  children: [
                    S.jsxs('div', {
                      className: ut.control,
                      children: [
                        S.jsx('label', {
                          className: ut.label,
                          children: 'Sort by',
                        }),
                        S.jsxs('select', {
                          className: ut.select,
                          value: s,
                          onChange: (E) => l(E.target.value),
                          children: [
                            S.jsx('option', {
                              value: 'newest',
                              children: 'Newest',
                            }),
                            S.jsx('option', {
                              value: 'alphabetically',
                              children: 'Alphabetically',
                            }),
                            S.jsx('option', {
                              value: 'bestPrice',
                              children: 'Best price',
                            }),
                          ],
                        }),
                      ],
                    }),
                    S.jsxs('div', {
                      className: ut.control,
                      children: [
                        S.jsx('label', {
                          className: ut.label,
                          children: 'Items on page',
                        }),
                        S.jsxs('select', {
                          className: ut.select,
                          value: o,
                          onChange: (E) => u(+E.target.value),
                          children: [
                            S.jsx('option', { value: 16, children: '16' }),
                            S.jsx('option', { value: 32, children: '32' }),
                            S.jsx('option', { value: 64, children: '64' }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                S.jsxs('div', {
                  className: ut.search,
                  children: [
                    S.jsx('label', {
                      className: ut.label,
                      children: 'Looking for something?',
                    }),
                    S.jsx('input', {
                      type: 'text',
                      placeholder: 'Type here',
                      className: ut.searchInput,
                      value: h,
                      onChange: (E) => m(E.target.value),
                    }),
                  ],
                }),
              ],
            }),
          }),
          S.jsx('section', {
            className: ut['accessories-page__list'],
            children:
              f ? Array.from({ length: 8 }).map((E, M) => S.jsx(Dd, {}, M))
              : A.length > 0 ? A.map((E) => S.jsx(Xa, { product: E }, E.id))
              : S.jsx(Od, { category: 'accessories' }),
          }),
        ],
      }),
    });
  },
  cM = '_cart_1nbcg_8',
  fM = '_title_1nbcg_27',
  dM = '_cartContent_1nbcg_41',
  hM = '_products_1nbcg_66',
  mM = '_summary_1nbcg_77',
  Ys = { cart: cM, title: fM, cartContent: dM, products: hM, summary: mM },
  pM = '_block_1iu3g_14',
  gM = '_price_1iu3g_20',
  vM = '_info_1iu3g_30',
  yM = '_button_1iu3g_37',
  bM = '_buttonCheck_1iu3g_46',
  Xs = { block: pM, price: gM, info: vM, button: yM, buttonCheck: bM },
  SM = ({ totalPrice: t, totalItems: a }) =>
    S.jsxs('div', {
      className: Xs.block,
      children: [
        S.jsx('h2', { className: Xs.price, children: t }),
        S.jsxs('p', {
          className: Xs.info,
          children: ['Total for ', a, ' ', a === 1 ? 'item' : 'items'],
        }),
        S.jsx('div', {
          className: Xs.button,
          children: S.jsx('button', {
            className: Xs.buttonCheck,
            children: 'Checkout',
          }),
        }),
      ],
    }),
  xM = '_item_bhsm7_14',
  TM = '_remove_bhsm7_32',
  _M = '_imageWrapper_bhsm7_50',
  EM = '_image_bhsm7_50',
  CM = '_details_bhsm7_70',
  AM = '_name_bhsm7_81',
  MM = '_controls_bhsm7_89',
  wM = '_quantity_bhsm7_104',
  DM = '_btnPlus_bhsm7_115',
  OM = '_btnMinus_bhsm7_125',
  NM = '_count_bhsm7_135',
  RM = '_price_bhsm7_141',
  Ft = {
    item: xM,
    remove: TM,
    imageWrapper: _M,
    image: EM,
    details: CM,
    name: AM,
    controls: MM,
    quantity: wM,
    btnPlus: DM,
    btnMinus: OM,
    count: NM,
    price: RM,
  },
  jM = ({ product: t, onRemove: a, onIncrease: s, onDecrease: l }) =>
    S.jsxs('div', {
      className: Ft.item,
      children: [
        S.jsx('button', {
          className: Ft.remove,
          type: 'button',
          onClick: a,
          children: 'x',
        }),
        S.jsx('div', {
          className: Ft.imageWrapper,
          children: S.jsx('img', {
            src: 'img/phones/apple-iphone-11/black/00.webp',
            alt: 'Apple iPhone 14 Pro',
            className: Ft.image,
          }),
        }),
        S.jsx('div', {
          className: Ft.details,
          children: S.jsx('h3', { className: Ft.name, children: t.name }),
        }),
        S.jsxs('div', {
          className: Ft.controls,
          children: [
            S.jsxs('div', {
              className: Ft.quantity,
              children: [
                S.jsx('button', {
                  className: Ft.btnMinus,
                  onClick: l,
                  children: '-',
                }),
                S.jsx('span', { className: Ft.count, children: t.quantity }),
                S.jsx('button', {
                  className: Ft.btnPlus,
                  onClick: s,
                  children: '+',
                }),
              ],
            }),
            S.jsx('p', { className: Ft.price, children: t.priceDiscount }),
          ],
        }),
      ],
    }),
  R1 = () =>
    S.jsx('div', {
      className: 'buttonBack',
      children: S.jsx('a', {
        className: 'buttonBackLink',
        href: '#',
        children: 'Back',
      }),
    }),
  LM = () => {
    const {
      cartItems: t,
      removeFromCart: a,
      updateQuantity: s,
      getTotalPrice: l,
      getTotalItems: o,
    } = Xy();
    return S.jsxs('div', {
      className: Ys.cart,
      children: [
        S.jsx(R1, {}),
        S.jsx('div', {
          className: Ys.title,
          children: S.jsx('h1', { children: 'Cart' }),
        }),
        S.jsxs('div', {
          className: Ys.cartContent,
          children: [
            S.jsxs('div', {
              className: Ys.products,
              children: [
                t.length === 0 &&
                  S.jsx('p', { children: 'Your cart is empty' }),
                t.map((u) =>
                  S.jsx(
                    jM,
                    {
                      product: u,
                      onRemove: () => a(u.itemUniqueId),
                      onIncrease: () => s(u.itemUniqueId, u.quantity + 1),
                      onDecrease: () => s(u.itemUniqueId, u.quantity - 1),
                    },
                    u.itemUniqueId,
                  ),
                ),
              ],
            }),
            S.jsx('div', {
              className: Ys.summary,
              children: S.jsx(SM, { totalPrice: l(), totalItems: o() }),
            }),
          ],
        }),
      ],
    });
  },
  zM = () =>
    S.jsxs('div', {
      className: 'notFound',
      children: [
        S.jsx('h1', { className: 'title', children: 'Помилка 404' }),
        S.jsx('h2', {
          className: 'title__message',
          children: 'Сторінка не знайдена',
        }),
      ],
    }),
  VM = '_search_clix4_19',
  BM = '_title_clix4_34',
  UM = '_modelsCount_clix4_44',
  HM = '_controls_clix4_52',
  PM = '_controlsLeft_clix4_59',
  GM = '_control_clix4_52',
  kM = '_label_clix4_69',
  qM = '_select_clix4_73',
  YM = '_searchInput_clix4_94',
  ct = {
    'tablets-page__container': '_tablets-page__container_clix4_9',
    'search': VM,
    'tablets-page': '_tablets-page_clix4_9',
    'title': BM,
    'modelsCount': UM,
    'tablets-page__controls': '_tablets-page__controls_clix4_49',
    'controls': HM,
    'controlsLeft': PM,
    'control': GM,
    'label': kM,
    'select': qM,
    'searchInput': YM,
    'tablets-page__list': '_tablets-page__list_clix4_105',
  },
  XM = () => {
    const [t, a] = D.useState([]),
      [s, l] = D.useState('newest'),
      [o, u] = D.useState(16),
      [f, p] = D.useState(!0),
      [h, m] = D.useState(''),
      [v, g] = D.useState('');
    (D.useEffect(() => {
      (async () => {
        p(!0);
        try {
          const M = await mo();
          a(M.map((_) => ({ ..._, category: 'tablets' })));
        } finally {
          setTimeout(() => p(!1), 600);
        }
      })();
    }, []),
      D.useEffect(() => {
        const E = setTimeout(() => {
          g(h);
        }, 300);
        return () => clearTimeout(E);
      }, [h]),
      D.useEffect(() => {
        if (h.length === 0 && v.length > 0) {
          p(!0);
          const E = setTimeout(() => {
            p(!1);
          }, 500);
          return () => clearTimeout(E);
        }
      }, [h]));
    const x = D.useMemo(() => {
        const E = v.toLowerCase().trim();
        return t.filter((M) => M.name.toLowerCase().includes(E));
      }, [t, v]),
      b = D.useMemo(() => {
        const E = [...x];
        switch (s) {
          case 'alphabetically':
            return E.sort((M, _) => M.name.localeCompare(_.name));
          case 'bestPrice':
            return hl(E);
          default:
            return bo(E);
        }
      }, [x, s]),
      A = D.useMemo(() => b.slice(0, o), [b, o]);
    return S.jsx('div', {
      className: ct['tablets-page'],
      children: S.jsxs('div', {
        className: ct['tablets-page__container'],
        children: [
          S.jsx(ki, {}),
          S.jsx('h1', { className: ct.title, children: 'Tablets' }),
          !f &&
            S.jsxs('p', {
              className: ct.modelsCount,
              children: [x.length, ' models'],
            }),
          S.jsx('section', {
            className: ct['tablets-page__controls'],
            children: S.jsxs('div', {
              className: ct.controls,
              children: [
                S.jsxs('div', {
                  className: ct.controlsLeft,
                  children: [
                    S.jsxs('div', {
                      className: ct.control,
                      children: [
                        S.jsx('label', {
                          className: ct.label,
                          children: 'Sort by',
                        }),
                        S.jsxs('select', {
                          className: ct.select,
                          value: s,
                          onChange: (E) => l(E.target.value),
                          children: [
                            S.jsx('option', {
                              value: 'newest',
                              children: 'Newest',
                            }),
                            S.jsx('option', {
                              value: 'alphabetically',
                              children: 'Alphabetically',
                            }),
                            S.jsx('option', {
                              value: 'bestPrice',
                              children: 'Best price',
                            }),
                          ],
                        }),
                      ],
                    }),
                    S.jsxs('div', {
                      className: ct.control,
                      children: [
                        S.jsx('label', {
                          className: ct.label,
                          children: 'Items on page',
                        }),
                        S.jsxs('select', {
                          className: ct.select,
                          value: o,
                          onChange: (E) => u(+E.target.value),
                          children: [
                            S.jsx('option', { value: 16, children: '16' }),
                            S.jsx('option', { value: 32, children: '32' }),
                            S.jsx('option', { value: 64, children: '64' }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                S.jsxs('div', {
                  className: ct.search,
                  children: [
                    S.jsx('label', {
                      className: ct.label,
                      htmlFor: 'search-input',
                      children: 'Looking for something?',
                    }),
                    S.jsx('input', {
                      id: 'search-input',
                      type: 'text',
                      placeholder: 'Type here',
                      className: ct.searchInput,
                      value: h,
                      onChange: (E) => m(E.target.value),
                    }),
                  ],
                }),
              ],
            }),
          }),
          S.jsx('section', {
            className: ct['tablets-page__list'],
            children:
              f ? Array.from({ length: 8 }).map((E, M) => S.jsx(Dd, {}, M))
              : A.length > 0 ? A.map((E) => S.jsx(Xa, { product: E }, E.id))
              : S.jsx(Od, { category: 'tablets' }),
          }),
        ],
      }),
    });
  },
  QM = '_home_1koo9_9',
  KM = '_container_1koo9_20',
  FM = '_hero_1koo9_36',
  ZM = '_hero__title_1koo9_49',
  $M = '_section_1koo9_68',
  IM = '_section__header_1koo9_81',
  JM = '_section__title_1koo9_92',
  WM = '_section__arrows_1koo9_107',
  ew = '_categories_1koo9_182',
  he = {
    'loader-wrapper': '_loader-wrapper_1koo9_1',
    'home': QM,
    'container': KM,
    'hero': FM,
    'hero__title': ZM,
    'section': $M,
    'section__header': IM,
    'section__title': JM,
    'section__arrows': WM,
    'arrow-btn': '_arrow-btn_1koo9_112',
    'products-slider': '_products-slider_1koo9_139',
    'products-slider__track': '_products-slider__track_1koo9_164',
    'categories': ew,
    'category-card': '_category-card_1koo9_200',
    'category-card__image-wrapper': '_category-card__image-wrapper_1koo9_207',
    'category-card__image': '_category-card__image_1koo9_207',
    'category-card__image-tablets': '_category-card__image-tablets_1koo9_232',
    'category-card__image-access': '_category-card__image-access_1koo9_239',
    'category-card__info': '_category-card__info_1koo9_246',
    'category-card__title': '_category-card__title_1koo9_250',
    'category-card__count': '_category-card__count_1koo9_266',
  };
function cy(t) {
  return (
    t !== null &&
    typeof t == 'object' &&
    'constructor' in t &&
    t.constructor === Object
  );
}
function Nd(t = {}, a = {}) {
  const s = ['__proto__', 'constructor', 'prototype'];
  Object.keys(a)
    .filter((l) => s.indexOf(l) < 0)
    .forEach((l) => {
      typeof t[l] > 'u' ?
        (t[l] = a[l])
      : cy(a[l]) && cy(t[l]) && Object.keys(a[l]).length > 0 && Nd(t[l], a[l]);
    });
}
const j1 = {
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
function pn() {
  const t = typeof document < 'u' ? document : {};
  return (Nd(t, j1), t);
}
const tw = {
  document: j1,
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
  requestAnimationFrame(t) {
    return typeof setTimeout > 'u' ? (t(), null) : setTimeout(t, 0);
  },
  cancelAnimationFrame(t) {
    typeof setTimeout > 'u' || clearTimeout(t);
  },
};
function bt() {
  const t = typeof window < 'u' ? window : {};
  return (Nd(t, tw), t);
}
function nw(t = '') {
  return t
    .trim()
    .split(' ')
    .filter((a) => !!a.trim());
}
function aw(t) {
  const a = t;
  Object.keys(a).forEach((s) => {
    try {
      a[s] = null;
    } catch {}
    try {
      delete a[s];
    } catch {}
  });
}
function L1(t, a = 0) {
  return setTimeout(t, a);
}
function so() {
  return Date.now();
}
function iw(t) {
  const a = bt();
  let s;
  return (
    a.getComputedStyle && (s = a.getComputedStyle(t, null)),
    !s && t.currentStyle && (s = t.currentStyle),
    s || (s = t.style),
    s
  );
}
function sw(t, a = 'x') {
  const s = bt();
  let l, o, u;
  const f = iw(t);
  return (
    s.WebKitCSSMatrix ?
      ((o = f.transform || f.webkitTransform),
      o.split(',').length > 6 &&
        (o = o
          .split(', ')
          .map((p) => p.replace(',', '.'))
          .join(', ')),
      (u = new s.WebKitCSSMatrix(o === 'none' ? '' : o)))
    : ((u =
        f.MozTransform ||
        f.OTransform ||
        f.MsTransform ||
        f.msTransform ||
        f.transform ||
        f
          .getPropertyValue('transform')
          .replace('translate(', 'matrix(1, 0, 0, 1,')),
      (l = u.toString().split(','))),
    a === 'x' &&
      (s.WebKitCSSMatrix ? (o = u.m41)
      : l.length === 16 ? (o = parseFloat(l[12]))
      : (o = parseFloat(l[4]))),
    a === 'y' &&
      (s.WebKitCSSMatrix ? (o = u.m42)
      : l.length === 16 ? (o = parseFloat(l[13]))
      : (o = parseFloat(l[5]))),
    o || 0
  );
}
function Ur(t) {
  return (
    typeof t == 'object' &&
    t !== null &&
    t.constructor &&
    Object.prototype.toString.call(t).slice(8, -1) === 'Object'
  );
}
function lw(t) {
  return typeof window < 'u' && typeof window.HTMLElement < 'u' ?
      t instanceof HTMLElement
    : t && (t.nodeType === 1 || t.nodeType === 11);
}
function Bt(...t) {
  const a = Object(t[0]),
    s = ['__proto__', 'constructor', 'prototype'];
  for (let l = 1; l < t.length; l += 1) {
    const o = t[l];
    if (o != null && !lw(o)) {
      const u = Object.keys(Object(o)).filter((f) => s.indexOf(f) < 0);
      for (let f = 0, p = u.length; f < p; f += 1) {
        const h = u[f],
          m = Object.getOwnPropertyDescriptor(o, h);
        m !== void 0 &&
          m.enumerable &&
          (Ur(a[h]) && Ur(o[h]) ?
            o[h].__swiper__ ?
              (a[h] = o[h])
            : Bt(a[h], o[h])
          : !Ur(a[h]) && Ur(o[h]) ?
            ((a[h] = {}), o[h].__swiper__ ? (a[h] = o[h]) : Bt(a[h], o[h]))
          : (a[h] = o[h]));
      }
    }
  }
  return a;
}
function Ri(t, a, s) {
  t.style.setProperty(a, s);
}
function z1({ swiper: t, targetPosition: a, side: s }) {
  const l = bt(),
    o = -t.translate;
  let u = null,
    f;
  const p = t.params.speed;
  ((t.wrapperEl.style.scrollSnapType = 'none'),
    l.cancelAnimationFrame(t.cssModeFrameID));
  const h = a > o ? 'next' : 'prev',
    m = (g, x) => (h === 'next' && g >= x) || (h === 'prev' && g <= x),
    v = () => {
      ((f = new Date().getTime()), u === null && (u = f));
      const g = Math.max(Math.min((f - u) / p, 1), 0),
        x = 0.5 - Math.cos(g * Math.PI) / 2;
      let b = o + x * (a - o);
      if ((m(b, a) && (b = a), t.wrapperEl.scrollTo({ [s]: b }), m(b, a))) {
        ((t.wrapperEl.style.overflow = 'hidden'),
          (t.wrapperEl.style.scrollSnapType = ''),
          setTimeout(() => {
            ((t.wrapperEl.style.overflow = ''),
              t.wrapperEl.scrollTo({ [s]: b }));
          }),
          l.cancelAnimationFrame(t.cssModeFrameID));
        return;
      }
      t.cssModeFrameID = l.requestAnimationFrame(v);
    };
  v();
}
function hn(t, a = '') {
  const s = bt(),
    l = [...t.children];
  return (
    s.HTMLSlotElement &&
      t instanceof HTMLSlotElement &&
      l.push(...t.assignedElements()),
    a ? l.filter((o) => o.matches(a)) : l
  );
}
function rw(t, a) {
  const s = [a];
  for (; s.length > 0; ) {
    const l = s.shift();
    if (t === l) return !0;
    s.push(
      ...l.children,
      ...(l.shadowRoot ? l.shadowRoot.children : []),
      ...(l.assignedElements ? l.assignedElements() : []),
    );
  }
}
function ow(t, a) {
  const s = bt();
  let l = a.contains(t);
  return (
    !l &&
      s.HTMLSlotElement &&
      a instanceof HTMLSlotElement &&
      ((l = [...a.assignedElements()].includes(t)), l || (l = rw(t, a))),
    l
  );
}
function lo(t) {
  try {
    console.warn(t);
    return;
  } catch {}
}
function ro(t, a = []) {
  const s = document.createElement(t);
  return (s.classList.add(...(Array.isArray(a) ? a : nw(a))), s);
}
function uw(t, a) {
  const s = [];
  for (; t.previousElementSibling; ) {
    const l = t.previousElementSibling;
    (a ? l.matches(a) && s.push(l) : s.push(l), (t = l));
  }
  return s;
}
function cw(t, a) {
  const s = [];
  for (; t.nextElementSibling; ) {
    const l = t.nextElementSibling;
    (a ? l.matches(a) && s.push(l) : s.push(l), (t = l));
  }
  return s;
}
function ma(t, a) {
  return bt().getComputedStyle(t, null).getPropertyValue(a);
}
function oo(t) {
  let a = t,
    s;
  if (a) {
    for (s = 0; (a = a.previousSibling) !== null; )
      a.nodeType === 1 && (s += 1);
    return s;
  }
}
function V1(t, a) {
  const s = [];
  let l = t.parentElement;
  for (; l; )
    (a ? l.matches(a) && s.push(l) : s.push(l), (l = l.parentElement));
  return s;
}
function Yf(t, a, s) {
  const l = bt();
  return (
    t[a === 'width' ? 'offsetWidth' : 'offsetHeight'] +
    parseFloat(
      l
        .getComputedStyle(t, null)
        .getPropertyValue(a === 'width' ? 'margin-right' : 'margin-top'),
    ) +
    parseFloat(
      l
        .getComputedStyle(t, null)
        .getPropertyValue(a === 'width' ? 'margin-left' : 'margin-bottom'),
    )
  );
}
function at(t) {
  return (Array.isArray(t) ? t : [t]).filter((a) => !!a);
}
function sl(t, a = '') {
  typeof trustedTypes < 'u' ?
    (t.innerHTML = trustedTypes
      .createPolicy('html', { createHTML: (s) => s })
      .createHTML(a))
  : (t.innerHTML = a);
}
let ff;
function fw() {
  const t = bt(),
    a = pn();
  return {
    smoothScroll:
      a.documentElement &&
      a.documentElement.style &&
      'scrollBehavior' in a.documentElement.style,
    touch: !!(
      'ontouchstart' in t ||
      (t.DocumentTouch && a instanceof t.DocumentTouch)
    ),
  };
}
function B1() {
  return (ff || (ff = fw()), ff);
}
let df;
function dw({ userAgent: t } = {}) {
  const a = B1(),
    s = bt(),
    l = s.navigator.platform,
    o = t || s.navigator.userAgent,
    u = { ios: !1, android: !1 },
    f = s.screen.width,
    p = s.screen.height,
    h = o.match(/(Android);?[\s\/]+([\d.]+)?/);
  let m = o.match(/(iPad)(?!\1).*OS\s([\d_]+)/);
  const v = o.match(/(iPod)(.*OS\s([\d_]+))?/),
    g = !m && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    x = l === 'Win32';
  let b = l === 'MacIntel';
  const A = [
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
    !m &&
      b &&
      a.touch &&
      A.indexOf(`${f}x${p}`) >= 0 &&
      ((m = o.match(/(Version)\/([\d.]+)/)),
      m || (m = [0, 1, '13_0_0']),
      (b = !1)),
    h && !x && ((u.os = 'android'), (u.android = !0)),
    (m || g || v) && ((u.os = 'ios'), (u.ios = !0)),
    u
  );
}
function U1(t = {}) {
  return (df || (df = dw(t)), df);
}
let hf;
function hw() {
  const t = bt(),
    a = U1();
  let s = !1;
  function l() {
    const p = t.navigator.userAgent.toLowerCase();
    return (
      p.indexOf('safari') >= 0 &&
      p.indexOf('chrome') < 0 &&
      p.indexOf('android') < 0
    );
  }
  if (l()) {
    const p = String(t.navigator.userAgent);
    if (p.includes('Version/')) {
      const [h, m] = p
        .split('Version/')[1]
        .split(' ')[0]
        .split('.')
        .map((v) => Number(v));
      s = h < 16 || (h === 16 && m < 2);
    }
  }
  const o = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      t.navigator.userAgent,
    ),
    u = l(),
    f = u || (o && a.ios);
  return {
    isSafari: s || u,
    needPerspectiveFix: s,
    need3dFix: f,
    isWebView: o,
  };
}
function H1() {
  return (hf || (hf = hw()), hf);
}
function mw({ swiper: t, on: a, emit: s }) {
  const l = bt();
  let o = null,
    u = null;
  const f = () => {
      !t || t.destroyed || !t.initialized || (s('beforeResize'), s('resize'));
    },
    p = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((o = new ResizeObserver((v) => {
          u = l.requestAnimationFrame(() => {
            const { width: g, height: x } = t;
            let b = g,
              A = x;
            (v.forEach(({ contentBoxSize: E, contentRect: M, target: _ }) => {
              (_ && _ !== t.el) ||
                ((b = M ? M.width : (E[0] || E).inlineSize),
                (A = M ? M.height : (E[0] || E).blockSize));
            }),
              (b !== g || A !== x) && f());
          });
        })),
        o.observe(t.el));
    },
    h = () => {
      (u && l.cancelAnimationFrame(u),
        o && o.unobserve && t.el && (o.unobserve(t.el), (o = null)));
    },
    m = () => {
      !t || t.destroyed || !t.initialized || s('orientationchange');
    };
  (a('init', () => {
    if (t.params.resizeObserver && typeof l.ResizeObserver < 'u') {
      p();
      return;
    }
    (l.addEventListener('resize', f),
      l.addEventListener('orientationchange', m));
  }),
    a('destroy', () => {
      (h(),
        l.removeEventListener('resize', f),
        l.removeEventListener('orientationchange', m));
    }));
}
function pw({ swiper: t, extendParams: a, on: s, emit: l }) {
  const o = [],
    u = bt(),
    f = (m, v = {}) => {
      const g = u.MutationObserver || u.WebkitMutationObserver,
        x = new g((b) => {
          if (t.__preventObserver__) return;
          if (b.length === 1) {
            l('observerUpdate', b[0]);
            return;
          }
          const A = function () {
            l('observerUpdate', b[0]);
          };
          u.requestAnimationFrame ?
            u.requestAnimationFrame(A)
          : u.setTimeout(A, 0);
        });
      (x.observe(m, {
        attributes: typeof v.attributes > 'u' ? !0 : v.attributes,
        childList: t.isElement || (typeof v.childList > 'u' ? !0 : v).childList,
        characterData: typeof v.characterData > 'u' ? !0 : v.characterData,
      }),
        o.push(x));
    },
    p = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const m = V1(t.hostEl);
          for (let v = 0; v < m.length; v += 1) f(m[v]);
        }
        (f(t.hostEl, { childList: t.params.observeSlideChildren }),
          f(t.wrapperEl, { attributes: !1 }));
      }
    },
    h = () => {
      (o.forEach((m) => {
        m.disconnect();
      }),
        o.splice(0, o.length));
    };
  (a({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    s('init', p),
    s('destroy', h));
}
var gw = {
  on(t, a, s) {
    const l = this;
    if (!l.eventsListeners || l.destroyed || typeof a != 'function') return l;
    const o = s ? 'unshift' : 'push';
    return (
      t.split(' ').forEach((u) => {
        (l.eventsListeners[u] || (l.eventsListeners[u] = []),
          l.eventsListeners[u][o](a));
      }),
      l
    );
  },
  once(t, a, s) {
    const l = this;
    if (!l.eventsListeners || l.destroyed || typeof a != 'function') return l;
    function o(...u) {
      (l.off(t, o), o.__emitterProxy && delete o.__emitterProxy, a.apply(l, u));
    }
    return ((o.__emitterProxy = a), l.on(t, o, s));
  },
  onAny(t, a) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof t != 'function') return s;
    const l = a ? 'unshift' : 'push';
    return (
      s.eventsAnyListeners.indexOf(t) < 0 && s.eventsAnyListeners[l](t),
      s
    );
  },
  offAny(t) {
    const a = this;
    if (!a.eventsListeners || a.destroyed || !a.eventsAnyListeners) return a;
    const s = a.eventsAnyListeners.indexOf(t);
    return (s >= 0 && a.eventsAnyListeners.splice(s, 1), a);
  },
  off(t, a) {
    const s = this;
    return (
      !s.eventsListeners ||
        s.destroyed ||
        !s.eventsListeners ||
        t.split(' ').forEach((l) => {
          typeof a > 'u' ?
            (s.eventsListeners[l] = [])
          : s.eventsListeners[l] &&
            s.eventsListeners[l].forEach((o, u) => {
              (o === a || (o.__emitterProxy && o.__emitterProxy === a)) &&
                s.eventsListeners[l].splice(u, 1);
            });
        }),
      s
    );
  },
  emit(...t) {
    const a = this;
    if (!a.eventsListeners || a.destroyed || !a.eventsListeners) return a;
    let s, l, o;
    return (
      typeof t[0] == 'string' || Array.isArray(t[0]) ?
        ((s = t[0]), (l = t.slice(1, t.length)), (o = a))
      : ((s = t[0].events), (l = t[0].data), (o = t[0].context || a)),
      l.unshift(o),
      (Array.isArray(s) ? s : s.split(' ')).forEach((f) => {
        (a.eventsAnyListeners &&
          a.eventsAnyListeners.length &&
          a.eventsAnyListeners.forEach((p) => {
            p.apply(o, [f, ...l]);
          }),
          a.eventsListeners &&
            a.eventsListeners[f] &&
            a.eventsListeners[f].forEach((p) => {
              p.apply(o, l);
            }));
      }),
      a
    );
  },
};
function vw() {
  const t = this;
  let a, s;
  const l = t.el;
  (typeof t.params.width < 'u' && t.params.width !== null ?
    (a = t.params.width)
  : (a = l.clientWidth),
    typeof t.params.height < 'u' && t.params.height !== null ?
      (s = t.params.height)
    : (s = l.clientHeight),
    !((a === 0 && t.isHorizontal()) || (s === 0 && t.isVertical())) &&
      ((a =
        a -
        parseInt(ma(l, 'padding-left') || 0, 10) -
        parseInt(ma(l, 'padding-right') || 0, 10)),
      (s =
        s -
        parseInt(ma(l, 'padding-top') || 0, 10) -
        parseInt(ma(l, 'padding-bottom') || 0, 10)),
      Number.isNaN(a) && (a = 0),
      Number.isNaN(s) && (s = 0),
      Object.assign(t, {
        width: a,
        height: s,
        size: t.isHorizontal() ? a : s,
      })));
}
function yw() {
  const t = this;
  function a(Z, I) {
    return parseFloat(Z.getPropertyValue(t.getDirectionLabel(I)) || 0);
  }
  const s = t.params,
    { wrapperEl: l, slidesEl: o, rtlTranslate: u, wrongRTL: f } = t,
    p = t.virtual && s.virtual.enabled,
    h = p ? t.virtual.slides.length : t.slides.length,
    m = hn(o, `.${t.params.slideClass}, swiper-slide`),
    v = p ? t.virtual.slides.length : m.length;
  let g = [];
  const x = [],
    b = [];
  let A = s.slidesOffsetBefore;
  typeof A == 'function' && (A = s.slidesOffsetBefore.call(t));
  let E = s.slidesOffsetAfter;
  typeof E == 'function' && (E = s.slidesOffsetAfter.call(t));
  const M = t.snapGrid.length,
    _ = t.slidesGrid.length,
    C = t.size - A - E;
  let w = s.spaceBetween,
    U = -A,
    V = 0,
    $ = 0;
  if (typeof C > 'u') return;
  (typeof w == 'string' && w.indexOf('%') >= 0 ?
    (w = (parseFloat(w.replace('%', '')) / 100) * C)
  : typeof w == 'string' && (w = parseFloat(w)),
    (t.virtualSize = -w - A - E),
    m.forEach((Z) => {
      (u ? (Z.style.marginLeft = '') : (Z.style.marginRight = ''),
        (Z.style.marginBottom = ''),
        (Z.style.marginTop = ''));
    }),
    s.centeredSlides &&
      s.cssMode &&
      (Ri(l, '--swiper-centered-offset-before', ''),
      Ri(l, '--swiper-centered-offset-after', '')),
    s.cssMode &&
      (Ri(l, '--swiper-slides-offset-before', `${A}px`),
      Ri(l, '--swiper-slides-offset-after', `${E}px`)));
  const X = s.grid && s.grid.rows > 1 && t.grid;
  X ? t.grid.initSlides(m) : t.grid && t.grid.unsetSlides();
  let L;
  const W =
    s.slidesPerView === 'auto' &&
    s.breakpoints &&
    Object.keys(s.breakpoints).filter(
      (Z) => typeof s.breakpoints[Z].slidesPerView < 'u',
    ).length > 0;
  for (let Z = 0; Z < v; Z += 1) {
    L = 0;
    const I = m[Z];
    if (
      !(I && (X && t.grid.updateSlide(Z, I, m), ma(I, 'display') === 'none'))
    ) {
      if (p && s.slidesPerView === 'auto')
        (s.virtual.slidesPerViewAutoSlideSize &&
          (L = s.virtual.slidesPerViewAutoSlideSize),
          L &&
            I &&
            (s.roundLengths && (L = Math.floor(L)),
            (I.style[t.getDirectionLabel('width')] = `${L}px`)));
      else if (s.slidesPerView === 'auto') {
        W && (I.style[t.getDirectionLabel('width')] = '');
        const J = getComputedStyle(I),
          ce = I.style.transform,
          oe = I.style.webkitTransform;
        if (
          (ce && (I.style.transform = 'none'),
          oe && (I.style.webkitTransform = 'none'),
          s.roundLengths)
        )
          L = t.isHorizontal() ? Yf(I, 'width') : Yf(I, 'height');
        else {
          const de = a(J, 'width'),
            G = a(J, 'padding-left'),
            k = a(J, 'padding-right'),
            q = a(J, 'margin-left'),
            ee = a(J, 'margin-right'),
            re = J.getPropertyValue('box-sizing');
          if (re && re === 'border-box') L = de + q + ee;
          else {
            const { clientWidth: N, offsetWidth: F } = I;
            L = de + G + k + q + ee + (F - N);
          }
        }
        (ce && (I.style.transform = ce),
          oe && (I.style.webkitTransform = oe),
          s.roundLengths && (L = Math.floor(L)));
      } else
        ((L = (C - (s.slidesPerView - 1) * w) / s.slidesPerView),
          s.roundLengths && (L = Math.floor(L)),
          I && (I.style[t.getDirectionLabel('width')] = `${L}px`));
      (I && (I.swiperSlideSize = L),
        b.push(L),
        s.centeredSlides ?
          ((U = U + L / 2 + V / 2 + w),
          V === 0 && Z !== 0 && (U = U - C / 2 - w),
          Z === 0 && (U = U - C / 2 - w),
          Math.abs(U) < 1 / 1e3 && (U = 0),
          s.roundLengths && (U = Math.floor(U)),
          $ % s.slidesPerGroup === 0 && g.push(U),
          x.push(U))
        : (s.roundLengths && (U = Math.floor(U)),
          ($ - Math.min(t.params.slidesPerGroupSkip, $)) %
            t.params.slidesPerGroup ===
            0 && g.push(U),
          x.push(U),
          (U = U + L + w)),
        (t.virtualSize += L + w),
        (V = L),
        ($ += 1));
    }
  }
  if (
    ((t.virtualSize = Math.max(t.virtualSize, C) + E),
    u &&
      f &&
      (s.effect === 'slide' || s.effect === 'coverflow') &&
      (l.style.width = `${t.virtualSize + w}px`),
    s.setWrapperSize &&
      (l.style[t.getDirectionLabel('width')] = `${t.virtualSize + w}px`),
    X && t.grid.updateWrapperSize(L, g),
    !s.centeredSlides)
  ) {
    const Z = s.slidesPerView !== 'auto' && s.slidesPerView % 1 !== 0,
      I = s.snapToSlideEdge && !s.loop && (s.slidesPerView === 'auto' || Z);
    let J = g.length;
    if (I) {
      let oe;
      if (s.slidesPerView === 'auto') {
        oe = 1;
        let de = 0;
        for (
          let G = b.length - 1;
          G >= 0 && ((de += b[G] + (G < b.length - 1 ? w : 0)), de <= C);
          G -= 1
        )
          oe = b.length - G;
      } else oe = Math.floor(s.slidesPerView);
      J = Math.max(v - oe, 0);
    }
    const ce = [];
    for (let oe = 0; oe < g.length; oe += 1) {
      let de = g[oe];
      (s.roundLengths && (de = Math.floor(de)),
        I ? oe <= J && ce.push(de) : g[oe] <= t.virtualSize - C && ce.push(de));
    }
    ((g = ce),
      Math.floor(t.virtualSize - C) - Math.floor(g[g.length - 1]) > 1 &&
        (I || g.push(t.virtualSize - C)));
  }
  if (p && s.loop) {
    const Z = b[0] + w;
    if (s.slidesPerGroup > 1) {
      const I = Math.ceil(
          (t.virtual.slidesBefore + t.virtual.slidesAfter) / s.slidesPerGroup,
        ),
        J = Z * s.slidesPerGroup;
      for (let ce = 0; ce < I; ce += 1) g.push(g[g.length - 1] + J);
    }
    for (let I = 0; I < t.virtual.slidesBefore + t.virtual.slidesAfter; I += 1)
      (s.slidesPerGroup === 1 && g.push(g[g.length - 1] + Z),
        x.push(x[x.length - 1] + Z),
        (t.virtualSize += Z));
  }
  if ((g.length === 0 && (g = [0]), w !== 0)) {
    const Z =
      t.isHorizontal() && u ? 'marginLeft' : t.getDirectionLabel('marginRight');
    m.filter((I, J) =>
      !s.cssMode || s.loop ? !0 : J !== m.length - 1,
    ).forEach((I) => {
      I.style[Z] = `${w}px`;
    });
  }
  if (s.centeredSlides && s.centeredSlidesBounds) {
    let Z = 0;
    (b.forEach((J) => {
      Z += J + (w || 0);
    }),
      (Z -= w));
    const I = Z > C ? Z - C : 0;
    g = g.map((J) =>
      J <= 0 ? -A
      : J > I ? I + E
      : J,
    );
  }
  if (s.centerInsufficientSlides) {
    let Z = 0;
    if (
      (b.forEach((I) => {
        Z += I + (w || 0);
      }),
      (Z -= w),
      Z < C)
    ) {
      const I = (C - Z) / 2;
      (g.forEach((J, ce) => {
        g[ce] = J - I;
      }),
        x.forEach((J, ce) => {
          x[ce] = J + I;
        }));
    }
  }
  if (
    (Object.assign(t, {
      slides: m,
      snapGrid: g,
      slidesGrid: x,
      slidesSizesGrid: b,
    }),
    s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
  ) {
    (Ri(l, '--swiper-centered-offset-before', `${-g[0]}px`),
      Ri(
        l,
        '--swiper-centered-offset-after',
        `${t.size / 2 - b[b.length - 1] / 2}px`,
      ));
    const Z = -t.snapGrid[0],
      I = -t.slidesGrid[0];
    ((t.snapGrid = t.snapGrid.map((J) => J + Z)),
      (t.slidesGrid = t.slidesGrid.map((J) => J + I)));
  }
  if (
    (v !== h && t.emit('slidesLengthChange'),
    g.length !== M &&
      (t.params.watchOverflow && t.checkOverflow(),
      t.emit('snapGridLengthChange')),
    x.length !== _ && t.emit('slidesGridLengthChange'),
    s.watchSlidesProgress && t.updateSlidesOffset(),
    t.emit('slidesUpdated'),
    !p && !s.cssMode && (s.effect === 'slide' || s.effect === 'fade'))
  ) {
    const Z = `${s.containerModifierClass}backface-hidden`,
      I = t.el.classList.contains(Z);
    v <= s.maxBackfaceHiddenSlides ?
      I || t.el.classList.add(Z)
    : I && t.el.classList.remove(Z);
  }
}
function bw(t) {
  const a = this,
    s = [],
    l = a.virtual && a.params.virtual.enabled;
  let o = 0,
    u;
  typeof t == 'number' ?
    a.setTransition(t)
  : t === !0 && a.setTransition(a.params.speed);
  const f = (p) => (l ? a.slides[a.getSlideIndexByData(p)] : a.slides[p]);
  if (a.params.slidesPerView !== 'auto' && a.params.slidesPerView > 1)
    if (a.params.centeredSlides)
      (a.visibleSlides || []).forEach((p) => {
        s.push(p);
      });
    else
      for (u = 0; u < Math.ceil(a.params.slidesPerView); u += 1) {
        const p = a.activeIndex + u;
        if (p > a.slides.length && !l) break;
        s.push(f(p));
      }
  else s.push(f(a.activeIndex));
  for (u = 0; u < s.length; u += 1)
    if (typeof s[u] < 'u') {
      const p = s[u].offsetHeight;
      o = p > o ? p : o;
    }
  (o || o === 0) && (a.wrapperEl.style.height = `${o}px`);
}
function Sw() {
  const t = this,
    a = t.slides,
    s =
      t.isElement ?
        t.isHorizontal() ?
          t.wrapperEl.offsetLeft
        : t.wrapperEl.offsetTop
      : 0;
  for (let l = 0; l < a.length; l += 1)
    a[l].swiperSlideOffset =
      (t.isHorizontal() ? a[l].offsetLeft : a[l].offsetTop) -
      s -
      t.cssOverflowAdjustment();
}
const fy = (t, a, s) => {
  a && !t.classList.contains(s) ?
    t.classList.add(s)
  : !a && t.classList.contains(s) && t.classList.remove(s);
};
function xw(t = (this && this.translate) || 0) {
  const a = this,
    s = a.params,
    { slides: l, rtlTranslate: o, snapGrid: u } = a;
  if (l.length === 0) return;
  typeof l[0].swiperSlideOffset > 'u' && a.updateSlidesOffset();
  let f = -t;
  (o && (f = t), (a.visibleSlidesIndexes = []), (a.visibleSlides = []));
  let p = s.spaceBetween;
  typeof p == 'string' && p.indexOf('%') >= 0 ?
    (p = (parseFloat(p.replace('%', '')) / 100) * a.size)
  : typeof p == 'string' && (p = parseFloat(p));
  for (let h = 0; h < l.length; h += 1) {
    const m = l[h];
    let v = m.swiperSlideOffset;
    s.cssMode && s.centeredSlides && (v -= l[0].swiperSlideOffset);
    const g =
        (f + (s.centeredSlides ? a.minTranslate() : 0) - v) /
        (m.swiperSlideSize + p),
      x =
        (f - u[0] + (s.centeredSlides ? a.minTranslate() : 0) - v) /
        (m.swiperSlideSize + p),
      b = -(f - v),
      A = b + a.slidesSizesGrid[h],
      E = b >= 0 && b <= a.size - a.slidesSizesGrid[h],
      M =
        (b >= 0 && b < a.size - 1) ||
        (A > 1 && A <= a.size) ||
        (b <= 0 && A >= a.size);
    (M && (a.visibleSlides.push(m), a.visibleSlidesIndexes.push(h)),
      fy(m, M, s.slideVisibleClass),
      fy(m, E, s.slideFullyVisibleClass),
      (m.progress = o ? -g : g),
      (m.originalProgress = o ? -x : x));
  }
}
function Tw(t) {
  const a = this;
  if (typeof t > 'u') {
    const v = a.rtlTranslate ? -1 : 1;
    t = (a && a.translate && a.translate * v) || 0;
  }
  const s = a.params,
    l = a.maxTranslate() - a.minTranslate();
  let { progress: o, isBeginning: u, isEnd: f, progressLoop: p } = a;
  const h = u,
    m = f;
  if (l === 0) ((o = 0), (u = !0), (f = !0));
  else {
    o = (t - a.minTranslate()) / l;
    const v = Math.abs(t - a.minTranslate()) < 1,
      g = Math.abs(t - a.maxTranslate()) < 1;
    ((u = v || o <= 0), (f = g || o >= 1), v && (o = 0), g && (o = 1));
  }
  if (s.loop) {
    const v = a.getSlideIndexByData(0),
      g = a.getSlideIndexByData(a.slides.length - 1),
      x = a.slidesGrid[v],
      b = a.slidesGrid[g],
      A = a.slidesGrid[a.slidesGrid.length - 1],
      E = Math.abs(t);
    (E >= x ? (p = (E - x) / A) : (p = (E + A - b) / A), p > 1 && (p -= 1));
  }
  (Object.assign(a, { progress: o, progressLoop: p, isBeginning: u, isEnd: f }),
    (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
      a.updateSlidesProgress(t),
    u && !h && a.emit('reachBeginning toEdge'),
    f && !m && a.emit('reachEnd toEdge'),
    ((h && !u) || (m && !f)) && a.emit('fromEdge'),
    a.emit('progress', o));
}
const mf = (t, a, s) => {
  a && !t.classList.contains(s) ?
    t.classList.add(s)
  : !a && t.classList.contains(s) && t.classList.remove(s);
};
function _w() {
  const t = this,
    { slides: a, params: s, slidesEl: l, activeIndex: o } = t,
    u = t.virtual && s.virtual.enabled,
    f = t.grid && s.grid && s.grid.rows > 1,
    p = (g) => hn(l, `.${s.slideClass}${g}, swiper-slide${g}`)[0];
  let h, m, v;
  if (u)
    if (s.loop) {
      let g = o - t.virtual.slidesBefore;
      (g < 0 && (g = t.virtual.slides.length + g),
        g >= t.virtual.slides.length && (g -= t.virtual.slides.length),
        (h = p(`[data-swiper-slide-index="${g}"]`)));
    } else h = p(`[data-swiper-slide-index="${o}"]`);
  else
    f ?
      ((h = a.find((g) => g.column === o)),
      (v = a.find((g) => g.column === o + 1)),
      (m = a.find((g) => g.column === o - 1)))
    : (h = a[o]);
  (h &&
    (f ||
      ((v = cw(h, `.${s.slideClass}, swiper-slide`)[0]),
      s.loop && !v && (v = a[0]),
      (m = uw(h, `.${s.slideClass}, swiper-slide`)[0]),
      s.loop && !m === 0 && (m = a[a.length - 1]))),
    a.forEach((g) => {
      (mf(g, g === h, s.slideActiveClass),
        mf(g, g === v, s.slideNextClass),
        mf(g, g === m, s.slidePrevClass));
    }),
    t.emitSlidesClasses());
}
const Fr = (t, a) => {
    if (!t || t.destroyed || !t.params) return;
    const s = () => (t.isElement ? 'swiper-slide' : `.${t.params.slideClass}`),
      l = a.closest(s());
    if (l) {
      let o = l.querySelector(`.${t.params.lazyPreloaderClass}`);
      (!o &&
        t.isElement &&
        (l.shadowRoot ?
          (o = l.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`))
        : requestAnimationFrame(() => {
            l.shadowRoot &&
              ((o = l.shadowRoot.querySelector(
                `.${t.params.lazyPreloaderClass}`,
              )),
              o && !o.lazyPreloaderManaged && o.remove());
          })),
        o && !o.lazyPreloaderManaged && o.remove());
    }
  },
  pf = (t, a) => {
    if (!t.slides[a]) return;
    const s = t.slides[a].querySelector('[loading="lazy"]');
    s && s.removeAttribute('loading');
  },
  Xf = (t) => {
    if (!t || t.destroyed || !t.params) return;
    let a = t.params.lazyPreloadPrevNext;
    const s = t.slides.length;
    if (!s || !a || a < 0) return;
    a = Math.min(a, s);
    const l =
        t.params.slidesPerView === 'auto' ?
          t.slidesPerViewDynamic()
        : Math.ceil(t.params.slidesPerView),
      o = t.activeIndex;
    if (t.params.grid && t.params.grid.rows > 1) {
      const f = o,
        p = [f - a];
      (p.push(...Array.from({ length: a }).map((h, m) => f + l + m)),
        t.slides.forEach((h, m) => {
          p.includes(h.column) && pf(t, m);
        }));
      return;
    }
    const u = o + l - 1;
    if (t.params.rewind || t.params.loop)
      for (let f = o - a; f <= u + a; f += 1) {
        const p = ((f % s) + s) % s;
        (p < o || p > u) && pf(t, p);
      }
    else
      for (let f = Math.max(o - a, 0); f <= Math.min(u + a, s - 1); f += 1)
        f !== o && (f > u || f < o) && pf(t, f);
  };
function Ew(t) {
  const { slidesGrid: a, params: s } = t,
    l = t.rtlTranslate ? t.translate : -t.translate;
  let o;
  for (let u = 0; u < a.length; u += 1)
    typeof a[u + 1] < 'u' ?
      l >= a[u] && l < a[u + 1] - (a[u + 1] - a[u]) / 2 ?
        (o = u)
      : l >= a[u] && l < a[u + 1] && (o = u + 1)
    : l >= a[u] && (o = u);
  return (s.normalizeSlideIndex && (o < 0 || typeof o > 'u') && (o = 0), o);
}
function Cw(t) {
  const a = this,
    s = a.rtlTranslate ? a.translate : -a.translate,
    { snapGrid: l, params: o, activeIndex: u, realIndex: f, snapIndex: p } = a;
  let h = t,
    m;
  const v = (b) => {
    let A = b - a.virtual.slidesBefore;
    return (
      A < 0 && (A = a.virtual.slides.length + A),
      A >= a.virtual.slides.length && (A -= a.virtual.slides.length),
      A
    );
  };
  if ((typeof h > 'u' && (h = Ew(a)), l.indexOf(s) >= 0)) m = l.indexOf(s);
  else {
    const b = Math.min(o.slidesPerGroupSkip, h);
    m = b + Math.floor((h - b) / o.slidesPerGroup);
  }
  if ((m >= l.length && (m = l.length - 1), h === u && !a.params.loop)) {
    m !== p && ((a.snapIndex = m), a.emit('snapIndexChange'));
    return;
  }
  if (h === u && a.params.loop && a.virtual && a.params.virtual.enabled) {
    a.realIndex = v(h);
    return;
  }
  const g = a.grid && o.grid && o.grid.rows > 1;
  let x;
  if (a.virtual && o.virtual.enabled) o.loop ? (x = v(h)) : (x = h);
  else if (g) {
    const b = a.slides.find((E) => E.column === h);
    let A = parseInt(b.getAttribute('data-swiper-slide-index'), 10);
    (Number.isNaN(A) && (A = Math.max(a.slides.indexOf(b), 0)),
      (x = Math.floor(A / o.grid.rows)));
  } else if (a.slides[h]) {
    const b = a.slides[h].getAttribute('data-swiper-slide-index');
    b ? (x = parseInt(b, 10)) : (x = h);
  } else x = h;
  (Object.assign(a, {
    previousSnapIndex: p,
    snapIndex: m,
    previousRealIndex: f,
    realIndex: x,
    previousIndex: u,
    activeIndex: h,
  }),
    a.initialized && Xf(a),
    a.emit('activeIndexChange'),
    a.emit('snapIndexChange'),
    (a.initialized || a.params.runCallbacksOnInit) &&
      (f !== x && a.emit('realIndexChange'), a.emit('slideChange')));
}
function Aw(t, a) {
  const s = this,
    l = s.params;
  let o = t.closest(`.${l.slideClass}, swiper-slide`);
  !o &&
    s.isElement &&
    a &&
    a.length > 1 &&
    a.includes(t) &&
    [...a.slice(a.indexOf(t) + 1, a.length)].forEach((p) => {
      !o && p.matches && p.matches(`.${l.slideClass}, swiper-slide`) && (o = p);
    });
  let u = !1,
    f;
  if (o) {
    for (let p = 0; p < s.slides.length; p += 1)
      if (s.slides[p] === o) {
        ((u = !0), (f = p));
        break;
      }
  }
  if (o && u)
    ((s.clickedSlide = o),
      s.virtual && s.params.virtual.enabled ?
        (s.clickedIndex = parseInt(
          o.getAttribute('data-swiper-slide-index'),
          10,
        ))
      : (s.clickedIndex = f));
  else {
    ((s.clickedSlide = void 0), (s.clickedIndex = void 0));
    return;
  }
  l.slideToClickedSlide &&
    s.clickedIndex !== void 0 &&
    s.clickedIndex !== s.activeIndex &&
    s.slideToClickedSlide();
}
var Mw = {
  updateSize: vw,
  updateSlides: yw,
  updateAutoHeight: bw,
  updateSlidesOffset: Sw,
  updateSlidesProgress: xw,
  updateProgress: Tw,
  updateSlidesClasses: _w,
  updateActiveIndex: Cw,
  updateClickedSlide: Aw,
};
function ww(t = this.isHorizontal() ? 'x' : 'y') {
  const a = this,
    { params: s, rtlTranslate: l, translate: o, wrapperEl: u } = a;
  if (s.virtualTranslate) return l ? -o : o;
  if (s.cssMode) return o;
  let f = sw(u, t);
  return ((f += a.cssOverflowAdjustment()), l && (f = -f), f || 0);
}
function Dw(t, a) {
  const s = this,
    { rtlTranslate: l, params: o, wrapperEl: u, progress: f } = s;
  let p = 0,
    h = 0;
  const m = 0;
  (s.isHorizontal() ? (p = l ? -t : t) : (h = t),
    o.roundLengths && ((p = Math.floor(p)), (h = Math.floor(h))),
    (s.previousTranslate = s.translate),
    (s.translate = s.isHorizontal() ? p : h),
    o.cssMode ?
      (u[s.isHorizontal() ? 'scrollLeft' : 'scrollTop'] =
        s.isHorizontal() ? -p : -h)
    : o.virtualTranslate ||
      (s.isHorizontal() ?
        (p -= s.cssOverflowAdjustment())
      : (h -= s.cssOverflowAdjustment()),
      (u.style.transform = `translate3d(${p}px, ${h}px, ${m}px)`)));
  let v;
  const g = s.maxTranslate() - s.minTranslate();
  (g === 0 ? (v = 0) : (v = (t - s.minTranslate()) / g),
    v !== f && s.updateProgress(t),
    s.emit('setTranslate', s.translate, a));
}
function Ow() {
  return -this.snapGrid[0];
}
function Nw() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Rw(t = 0, a = this.params.speed, s = !0, l = !0, o) {
  const u = this,
    { params: f, wrapperEl: p } = u;
  if (u.animating && f.preventInteractionOnTransition) return !1;
  const h = u.minTranslate(),
    m = u.maxTranslate();
  let v;
  if (
    (l && t > h ? (v = h)
    : l && t < m ? (v = m)
    : (v = t),
    u.updateProgress(v),
    f.cssMode)
  ) {
    const g = u.isHorizontal();
    if (a === 0) p[g ? 'scrollLeft' : 'scrollTop'] = -v;
    else {
      if (!u.support.smoothScroll)
        return (
          z1({ swiper: u, targetPosition: -v, side: g ? 'left' : 'top' }),
          !0
        );
      p.scrollTo({ [g ? 'left' : 'top']: -v, behavior: 'smooth' });
    }
    return !0;
  }
  return (
    a === 0 ?
      (u.setTransition(0),
      u.setTranslate(v),
      s && (u.emit('beforeTransitionStart', a, o), u.emit('transitionEnd')))
    : (u.setTransition(a),
      u.setTranslate(v),
      s && (u.emit('beforeTransitionStart', a, o), u.emit('transitionStart')),
      u.animating ||
        ((u.animating = !0),
        u.onTranslateToWrapperTransitionEnd ||
          (u.onTranslateToWrapperTransitionEnd = function (x) {
            !u ||
              u.destroyed ||
              (x.target === this &&
                (u.wrapperEl.removeEventListener(
                  'transitionend',
                  u.onTranslateToWrapperTransitionEnd,
                ),
                (u.onTranslateToWrapperTransitionEnd = null),
                delete u.onTranslateToWrapperTransitionEnd,
                (u.animating = !1),
                s && u.emit('transitionEnd')));
          }),
        u.wrapperEl.addEventListener(
          'transitionend',
          u.onTranslateToWrapperTransitionEnd,
        ))),
    !0
  );
}
var jw = {
  getTranslate: ww,
  setTranslate: Dw,
  minTranslate: Ow,
  maxTranslate: Nw,
  translateTo: Rw,
};
function Lw(t, a) {
  const s = this;
  (s.params.cssMode ||
    ((s.wrapperEl.style.transitionDuration = `${t}ms`),
    (s.wrapperEl.style.transitionDelay = t === 0 ? '0ms' : '')),
    s.emit('setTransition', t, a));
}
function P1({ swiper: t, runCallbacks: a, direction: s, step: l }) {
  const { activeIndex: o, previousIndex: u } = t;
  let f = s;
  (f ||
    (o > u ? (f = 'next')
    : o < u ? (f = 'prev')
    : (f = 'reset')),
    t.emit(`transition${l}`),
    a && f === 'reset' ?
      t.emit(`slideResetTransition${l}`)
    : a &&
      o !== u &&
      (t.emit(`slideChangeTransition${l}`),
      f === 'next' ?
        t.emit(`slideNextTransition${l}`)
      : t.emit(`slidePrevTransition${l}`)));
}
function zw(t = !0, a) {
  const s = this,
    { params: l } = s;
  l.cssMode ||
    (l.autoHeight && s.updateAutoHeight(),
    P1({ swiper: s, runCallbacks: t, direction: a, step: 'Start' }));
}
function Vw(t = !0, a) {
  const s = this,
    { params: l } = s;
  ((s.animating = !1),
    !l.cssMode &&
      (s.setTransition(0),
      P1({ swiper: s, runCallbacks: t, direction: a, step: 'End' })));
}
var Bw = { setTransition: Lw, transitionStart: zw, transitionEnd: Vw };
function Uw(t = 0, a, s = !0, l, o) {
  typeof t == 'string' && (t = parseInt(t, 10));
  const u = this;
  let f = t;
  f < 0 && (f = 0);
  const {
    params: p,
    snapGrid: h,
    slidesGrid: m,
    previousIndex: v,
    activeIndex: g,
    rtlTranslate: x,
    wrapperEl: b,
    enabled: A,
  } = u;
  if (
    (!A && !l && !o) ||
    u.destroyed ||
    (u.animating && p.preventInteractionOnTransition)
  )
    return !1;
  typeof a > 'u' && (a = u.params.speed);
  const E = Math.min(u.params.slidesPerGroupSkip, f);
  let M = E + Math.floor((f - E) / u.params.slidesPerGroup);
  M >= h.length && (M = h.length - 1);
  const _ = -h[M];
  if (p.normalizeSlideIndex)
    for (let X = 0; X < m.length; X += 1) {
      const L = -Math.floor(_ * 100),
        W = Math.floor(m[X] * 100),
        Z = Math.floor(m[X + 1] * 100);
      typeof m[X + 1] < 'u' ?
        L >= W && L < Z - (Z - W) / 2 ?
          (f = X)
        : L >= W && L < Z && (f = X + 1)
      : L >= W && (f = X);
    }
  if (
    u.initialized &&
    f !== g &&
    ((!u.allowSlideNext &&
      (x ?
        _ > u.translate && _ > u.minTranslate()
      : _ < u.translate && _ < u.minTranslate())) ||
      (!u.allowSlidePrev &&
        _ > u.translate &&
        _ > u.maxTranslate() &&
        (g || 0) !== f))
  )
    return !1;
  (f !== (v || 0) && s && u.emit('beforeSlideChangeStart'),
    u.updateProgress(_));
  let C;
  f > g ? (C = 'next')
  : f < g ? (C = 'prev')
  : (C = 'reset');
  const w = u.virtual && u.params.virtual.enabled;
  if (!(w && o) && ((x && -_ === u.translate) || (!x && _ === u.translate)))
    return (
      u.updateActiveIndex(f),
      p.autoHeight && u.updateAutoHeight(),
      u.updateSlidesClasses(),
      p.effect !== 'slide' && u.setTranslate(_),
      C !== 'reset' && (u.transitionStart(s, C), u.transitionEnd(s, C)),
      !1
    );
  if (p.cssMode) {
    const X = u.isHorizontal(),
      L = x ? _ : -_;
    if (a === 0)
      (w &&
        ((u.wrapperEl.style.scrollSnapType = 'none'),
        (u._immediateVirtual = !0)),
        w && !u._cssModeVirtualInitialSet && u.params.initialSlide > 0 ?
          ((u._cssModeVirtualInitialSet = !0),
          requestAnimationFrame(() => {
            b[X ? 'scrollLeft' : 'scrollTop'] = L;
          }))
        : (b[X ? 'scrollLeft' : 'scrollTop'] = L),
        w &&
          requestAnimationFrame(() => {
            ((u.wrapperEl.style.scrollSnapType = ''),
              (u._immediateVirtual = !1));
          }));
    else {
      if (!u.support.smoothScroll)
        return (
          z1({ swiper: u, targetPosition: L, side: X ? 'left' : 'top' }),
          !0
        );
      b.scrollTo({ [X ? 'left' : 'top']: L, behavior: 'smooth' });
    }
    return !0;
  }
  const $ = H1().isSafari;
  return (
    w && !o && $ && u.isElement && u.virtual.update(!1, !1, f),
    u.setTransition(a),
    u.setTranslate(_),
    u.updateActiveIndex(f),
    u.updateSlidesClasses(),
    u.emit('beforeTransitionStart', a, l),
    u.transitionStart(s, C),
    a === 0 ?
      u.transitionEnd(s, C)
    : u.animating ||
      ((u.animating = !0),
      u.onSlideToWrapperTransitionEnd ||
        (u.onSlideToWrapperTransitionEnd = function (L) {
          !u ||
            u.destroyed ||
            (L.target === this &&
              (u.wrapperEl.removeEventListener(
                'transitionend',
                u.onSlideToWrapperTransitionEnd,
              ),
              (u.onSlideToWrapperTransitionEnd = null),
              delete u.onSlideToWrapperTransitionEnd,
              u.transitionEnd(s, C)));
        }),
      u.wrapperEl.addEventListener(
        'transitionend',
        u.onSlideToWrapperTransitionEnd,
      )),
    !0
  );
}
function Hw(t = 0, a, s = !0, l) {
  typeof t == 'string' && (t = parseInt(t, 10));
  const o = this;
  if (o.destroyed) return;
  typeof a > 'u' && (a = o.params.speed);
  const u = o.grid && o.params.grid && o.params.grid.rows > 1;
  let f = t;
  if (o.params.loop)
    if (o.virtual && o.params.virtual.enabled) f = f + o.virtual.slidesBefore;
    else {
      let p;
      if (u) {
        const E = f * o.params.grid.rows;
        p = o.slides.find(
          (M) => M.getAttribute('data-swiper-slide-index') * 1 === E,
        ).column;
      } else p = o.getSlideIndexByData(f);
      const h =
          u ? Math.ceil(o.slides.length / o.params.grid.rows) : o.slides.length,
        {
          centeredSlides: m,
          slidesOffsetBefore: v,
          slidesOffsetAfter: g,
        } = o.params,
        x = m || !!v || !!g;
      let b = o.params.slidesPerView;
      b === 'auto' ?
        (b = o.slidesPerViewDynamic())
      : ((b = Math.ceil(parseFloat(o.params.slidesPerView, 10))),
        x && b % 2 === 0 && (b = b + 1));
      let A = h - p < b;
      if (
        (x && (A = A || p < Math.ceil(b / 2)),
        l && x && o.params.slidesPerView !== 'auto' && !u && (A = !1),
        A)
      ) {
        const E =
          x ?
            p < o.activeIndex ?
              'prev'
            : 'next'
          : p - o.activeIndex - 1 < o.params.slidesPerView ? 'next'
          : 'prev';
        o.loopFix({
          direction: E,
          slideTo: !0,
          activeSlideIndex: E === 'next' ? p + 1 : p - h + 1,
          slideRealIndex: E === 'next' ? o.realIndex : void 0,
        });
      }
      if (u) {
        const E = f * o.params.grid.rows;
        f = o.slides.find(
          (M) => M.getAttribute('data-swiper-slide-index') * 1 === E,
        ).column;
      } else f = o.getSlideIndexByData(f);
    }
  return (
    requestAnimationFrame(() => {
      o.slideTo(f, a, s, l);
    }),
    o
  );
}
function Pw(t, a = !0, s) {
  const l = this,
    { enabled: o, params: u, animating: f } = l;
  if (!o || l.destroyed) return l;
  typeof t > 'u' && (t = l.params.speed);
  let p = u.slidesPerGroup;
  u.slidesPerView === 'auto' &&
    u.slidesPerGroup === 1 &&
    u.slidesPerGroupAuto &&
    (p = Math.max(l.slidesPerViewDynamic('current', !0), 1));
  const h = l.activeIndex < u.slidesPerGroupSkip ? 1 : p,
    m = l.virtual && u.virtual.enabled;
  if (u.loop) {
    if (f && !m && u.loopPreventsSliding) return !1;
    if (
      (l.loopFix({ direction: 'next' }),
      (l._clientLeft = l.wrapperEl.clientLeft),
      l.activeIndex === l.slides.length - 1 && u.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          l.slideTo(l.activeIndex + h, t, a, s);
        }),
        !0
      );
  }
  return u.rewind && l.isEnd ?
      l.slideTo(0, t, a, s)
    : l.slideTo(l.activeIndex + h, t, a, s);
}
function Gw(t, a = !0, s) {
  const l = this,
    {
      params: o,
      snapGrid: u,
      slidesGrid: f,
      rtlTranslate: p,
      enabled: h,
      animating: m,
    } = l;
  if (!h || l.destroyed) return l;
  typeof t > 'u' && (t = l.params.speed);
  const v = l.virtual && o.virtual.enabled;
  if (o.loop) {
    if (m && !v && o.loopPreventsSliding) return !1;
    (l.loopFix({ direction: 'prev' }),
      (l._clientLeft = l.wrapperEl.clientLeft));
  }
  const g = p ? l.translate : -l.translate;
  function x(C) {
    return C < 0 ? -Math.floor(Math.abs(C)) : Math.floor(C);
  }
  const b = x(g),
    A = u.map((C) => x(C)),
    E = o.freeMode && o.freeMode.enabled;
  let M = u[A.indexOf(b) - 1];
  if (typeof M > 'u' && (o.cssMode || E)) {
    let C;
    (u.forEach((w, U) => {
      b >= w && (C = U);
    }),
      typeof C < 'u' && (M = E ? u[C] : u[C > 0 ? C - 1 : C]));
  }
  let _ = 0;
  if (
    (typeof M < 'u' &&
      ((_ = f.indexOf(M)),
      _ < 0 && (_ = l.activeIndex - 1),
      o.slidesPerView === 'auto' &&
        o.slidesPerGroup === 1 &&
        o.slidesPerGroupAuto &&
        ((_ = _ - l.slidesPerViewDynamic('previous', !0) + 1),
        (_ = Math.max(_, 0)))),
    o.rewind && l.isBeginning)
  ) {
    const C =
      l.params.virtual && l.params.virtual.enabled && l.virtual ?
        l.virtual.slides.length - 1
      : l.slides.length - 1;
    return l.slideTo(C, t, a, s);
  } else if (o.loop && l.activeIndex === 0 && o.cssMode)
    return (
      requestAnimationFrame(() => {
        l.slideTo(_, t, a, s);
      }),
      !0
    );
  return l.slideTo(_, t, a, s);
}
function kw(t, a = !0, s) {
  const l = this;
  if (!l.destroyed)
    return (
      typeof t > 'u' && (t = l.params.speed),
      l.slideTo(l.activeIndex, t, a, s)
    );
}
function qw(t, a = !0, s, l = 0.5) {
  const o = this;
  if (o.destroyed) return;
  typeof t > 'u' && (t = o.params.speed);
  let u = o.activeIndex;
  const f = Math.min(o.params.slidesPerGroupSkip, u),
    p = f + Math.floor((u - f) / o.params.slidesPerGroup),
    h = o.rtlTranslate ? o.translate : -o.translate;
  if (h >= o.snapGrid[p]) {
    const m = o.snapGrid[p],
      v = o.snapGrid[p + 1];
    h - m > (v - m) * l && (u += o.params.slidesPerGroup);
  } else {
    const m = o.snapGrid[p - 1],
      v = o.snapGrid[p];
    h - m <= (v - m) * l && (u -= o.params.slidesPerGroup);
  }
  return (
    (u = Math.max(u, 0)),
    (u = Math.min(u, o.slidesGrid.length - 1)),
    o.slideTo(u, t, a, s)
  );
}
function Yw() {
  const t = this;
  if (t.destroyed) return;
  const { params: a, slidesEl: s } = t,
    l = a.slidesPerView === 'auto' ? t.slidesPerViewDynamic() : a.slidesPerView;
  let o = t.getSlideIndexWhenGrid(t.clickedIndex),
    u;
  const f = t.isElement ? 'swiper-slide' : `.${a.slideClass}`,
    p = t.grid && t.params.grid && t.params.grid.rows > 1;
  if (a.loop) {
    if (t.animating) return;
    ((u = parseInt(t.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
      a.centeredSlides ? t.slideToLoop(u)
      : (
        o >
        (p ?
          (t.slides.length - l) / 2 - (t.params.grid.rows - 1)
        : t.slides.length - l)
      ) ?
        (t.loopFix(),
        (o = t.getSlideIndex(hn(s, `${f}[data-swiper-slide-index="${u}"]`)[0])),
        L1(() => {
          t.slideTo(o);
        }))
      : t.slideTo(o));
  } else t.slideTo(o);
}
var Xw = {
  slideTo: Uw,
  slideToLoop: Hw,
  slideNext: Pw,
  slidePrev: Gw,
  slideReset: kw,
  slideToClosest: qw,
  slideToClickedSlide: Yw,
};
function Qw(t, a) {
  const s = this,
    { params: l, slidesEl: o } = s;
  if (!l.loop || (s.virtual && s.params.virtual.enabled)) return;
  const u = () => {
      hn(o, `.${l.slideClass}, swiper-slide`).forEach((A, E) => {
        A.setAttribute('data-swiper-slide-index', E);
      });
    },
    f = () => {
      const b = hn(o, `.${l.slideBlankClass}`);
      (b.forEach((A) => {
        A.remove();
      }),
        b.length > 0 && (s.recalcSlides(), s.updateSlides()));
    },
    p = s.grid && l.grid && l.grid.rows > 1;
  l.loopAddBlankSlides && (l.slidesPerGroup > 1 || p) && f();
  const h = l.slidesPerGroup * (p ? l.grid.rows : 1),
    m = s.slides.length % h !== 0,
    v = p && s.slides.length % l.grid.rows !== 0,
    g = (b) => {
      for (let A = 0; A < b; A += 1) {
        const E =
          s.isElement ?
            ro('swiper-slide', [l.slideBlankClass])
          : ro('div', [l.slideClass, l.slideBlankClass]);
        s.slidesEl.append(E);
      }
    };
  if (m) {
    if (l.loopAddBlankSlides) {
      const b = h - (s.slides.length % h);
      (g(b), s.recalcSlides(), s.updateSlides());
    } else
      lo(
        'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)',
      );
    u();
  } else if (v) {
    if (l.loopAddBlankSlides) {
      const b = l.grid.rows - (s.slides.length % l.grid.rows);
      (g(b), s.recalcSlides(), s.updateSlides());
    } else
      lo(
        'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)',
      );
    u();
  } else u();
  const x = l.centeredSlides || !!l.slidesOffsetBefore || !!l.slidesOffsetAfter;
  s.loopFix({ slideRealIndex: t, direction: x ? void 0 : 'next', initial: a });
}
function Kw({
  slideRealIndex: t,
  slideTo: a = !0,
  direction: s,
  setTranslate: l,
  activeSlideIndex: o,
  initial: u,
  byController: f,
  byMousewheel: p,
} = {}) {
  const h = this;
  if (!h.params.loop) return;
  h.emit('beforeLoopFix');
  const {
      slides: m,
      allowSlidePrev: v,
      allowSlideNext: g,
      slidesEl: x,
      params: b,
    } = h,
    {
      centeredSlides: A,
      slidesOffsetBefore: E,
      slidesOffsetAfter: M,
      initialSlide: _,
    } = b,
    C = A || !!E || !!M;
  if (
    ((h.allowSlidePrev = !0),
    (h.allowSlideNext = !0),
    h.virtual && b.virtual.enabled)
  ) {
    (a &&
      (!C && h.snapIndex === 0 ? h.slideTo(h.virtual.slides.length, 0, !1, !0)
      : C && h.snapIndex < b.slidesPerView ?
        h.slideTo(h.virtual.slides.length + h.snapIndex, 0, !1, !0)
      : h.snapIndex === h.snapGrid.length - 1 &&
        h.slideTo(h.virtual.slidesBefore, 0, !1, !0)),
      (h.allowSlidePrev = v),
      (h.allowSlideNext = g),
      h.emit('loopFix'));
    return;
  }
  let w = b.slidesPerView;
  w === 'auto' ?
    (w = h.slidesPerViewDynamic())
  : ((w = Math.ceil(parseFloat(b.slidesPerView, 10))),
    C && w % 2 === 0 && (w = w + 1));
  const U = b.slidesPerGroupAuto ? w : b.slidesPerGroup;
  let V = C ? Math.max(U, Math.ceil(w / 2)) : U;
  (V % U !== 0 && (V += U - (V % U)),
    (V += b.loopAdditionalSlides),
    (h.loopedSlides = V));
  const $ = h.grid && b.grid && b.grid.rows > 1;
  m.length < w + V || (h.params.effect === 'cards' && m.length < w + V * 2) ?
    lo(
      'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters',
    )
  : $ &&
    b.grid.fill === 'row' &&
    lo(
      'Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`',
    );
  const X = [],
    L = [],
    W = $ ? Math.ceil(m.length / b.grid.rows) : m.length,
    Z = u && W - _ < w && !C;
  let I = Z ? _ : h.activeIndex;
  typeof o > 'u' ?
    (o = h.getSlideIndex(
      m.find((q) => q.classList.contains(b.slideActiveClass)),
    ))
  : (I = o);
  const J = s === 'next' || !s,
    ce = s === 'prev' || !s;
  let oe = 0,
    de = 0;
  const k = ($ ? m[o].column : o) + (C && typeof l > 'u' ? -w / 2 + 0.5 : 0);
  if (k < V) {
    oe = Math.max(V - k, U);
    for (let q = 0; q < V - k; q += 1) {
      const ee = q - Math.floor(q / W) * W;
      if ($) {
        const re = W - ee - 1;
        for (let N = m.length - 1; N >= 0; N -= 1)
          m[N].column === re && X.push(N);
      } else X.push(W - ee - 1);
    }
  } else if (k + w > W - V) {
    ((de = Math.max(k - (W - V * 2), U)),
      Z && (de = Math.max(de, w - W + _ + 1)));
    for (let q = 0; q < de; q += 1) {
      const ee = q - Math.floor(q / W) * W;
      $ ?
        m.forEach((re, N) => {
          re.column === ee && L.push(N);
        })
      : L.push(ee);
    }
  }
  if (
    ((h.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      h.__preventObserver__ = !1;
    }),
    h.params.effect === 'cards' &&
      m.length < w + V * 2 &&
      (L.includes(o) && L.splice(L.indexOf(o), 1),
      X.includes(o) && X.splice(X.indexOf(o), 1)),
    ce &&
      X.forEach((q) => {
        ((m[q].swiperLoopMoveDOM = !0),
          x.prepend(m[q]),
          (m[q].swiperLoopMoveDOM = !1));
      }),
    J &&
      L.forEach((q) => {
        ((m[q].swiperLoopMoveDOM = !0),
          x.append(m[q]),
          (m[q].swiperLoopMoveDOM = !1));
      }),
    h.recalcSlides(),
    b.slidesPerView === 'auto' ?
      h.updateSlides()
    : $ &&
      ((X.length > 0 && ce) || (L.length > 0 && J)) &&
      h.slides.forEach((q, ee) => {
        h.grid.updateSlide(ee, q, h.slides);
      }),
    b.watchSlidesProgress && h.updateSlidesOffset(),
    a)
  ) {
    if (X.length > 0 && ce) {
      if (typeof t > 'u') {
        const q = h.slidesGrid[I],
          re = h.slidesGrid[I + oe] - q;
        p ?
          h.setTranslate(h.translate - re)
        : (h.slideTo(I + Math.ceil(oe), 0, !1, !0),
          l &&
            ((h.touchEventsData.startTranslate =
              h.touchEventsData.startTranslate - re),
            (h.touchEventsData.currentTranslate =
              h.touchEventsData.currentTranslate - re)));
      } else if (l) {
        const q = $ ? X.length / b.grid.rows : X.length;
        (h.slideTo(h.activeIndex + q, 0, !1, !0),
          (h.touchEventsData.currentTranslate = h.translate));
      }
    } else if (L.length > 0 && J)
      if (typeof t > 'u') {
        const q = h.slidesGrid[I],
          re = h.slidesGrid[I - de] - q;
        p ?
          h.setTranslate(h.translate - re)
        : (h.slideTo(I - de, 0, !1, !0),
          l &&
            ((h.touchEventsData.startTranslate =
              h.touchEventsData.startTranslate - re),
            (h.touchEventsData.currentTranslate =
              h.touchEventsData.currentTranslate - re)));
      } else {
        const q = $ ? L.length / b.grid.rows : L.length;
        h.slideTo(h.activeIndex - q, 0, !1, !0);
      }
  }
  if (
    ((h.allowSlidePrev = v),
    (h.allowSlideNext = g),
    h.controller && h.controller.control && !f)
  ) {
    const q = {
      slideRealIndex: t,
      direction: s,
      setTranslate: l,
      activeSlideIndex: o,
      byController: !0,
    };
    Array.isArray(h.controller.control) ?
      h.controller.control.forEach((ee) => {
        !ee.destroyed &&
          ee.params.loop &&
          ee.loopFix({
            ...q,
            slideTo: ee.params.slidesPerView === b.slidesPerView ? a : !1,
          });
      })
    : h.controller.control instanceof h.constructor &&
      h.controller.control.params.loop &&
      h.controller.control.loopFix({
        ...q,
        slideTo:
          h.controller.control.params.slidesPerView === b.slidesPerView ?
            a
          : !1,
      });
  }
  h.emit('loopFix');
}
function Fw() {
  const t = this,
    { params: a, slidesEl: s } = t;
  if (!a.loop || !s || (t.virtual && t.params.virtual.enabled)) return;
  t.recalcSlides();
  const l = [];
  (t.slides.forEach((o) => {
    const u =
      typeof o.swiperSlideIndex > 'u' ?
        o.getAttribute('data-swiper-slide-index') * 1
      : o.swiperSlideIndex;
    l[u] = o;
  }),
    t.slides.forEach((o) => {
      o.removeAttribute('data-swiper-slide-index');
    }),
    l.forEach((o) => {
      s.append(o);
    }),
    t.recalcSlides(),
    t.slideTo(t.realIndex, 0));
}
var Zw = { loopCreate: Qw, loopFix: Kw, loopDestroy: Fw };
function $w(t) {
  const a = this;
  if (
    !a.params.simulateTouch ||
    (a.params.watchOverflow && a.isLocked) ||
    a.params.cssMode
  )
    return;
  const s = a.params.touchEventsTarget === 'container' ? a.el : a.wrapperEl;
  (a.isElement && (a.__preventObserver__ = !0),
    (s.style.cursor = 'move'),
    (s.style.cursor = t ? 'grabbing' : 'grab'),
    a.isElement &&
      requestAnimationFrame(() => {
        a.__preventObserver__ = !1;
      }));
}
function Iw() {
  const t = this;
  (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode ||
    (t.isElement && (t.__preventObserver__ = !0),
    (t[
      t.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'
    ].style.cursor = ''),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      }));
}
var Jw = { setGrabCursor: $w, unsetGrabCursor: Iw };
function Ww(t, a = this) {
  function s(l) {
    if (!l || l === pn() || l === bt()) return null;
    l.assignedSlot && (l = l.assignedSlot);
    const o = l.closest(t);
    return !o && !l.getRootNode ? null : o || s(l.getRootNode().host);
  }
  return s(a);
}
function dy(t, a, s) {
  const l = bt(),
    { params: o } = t,
    u = o.edgeSwipeDetection,
    f = o.edgeSwipeThreshold;
  return (
    u && (s <= f || s >= l.innerWidth - f) ?
      u === 'prevent' ?
        (a.preventDefault(), !0)
      : !1
    : !0
  );
}
function eD(t) {
  const a = this,
    s = pn();
  let l = t;
  l.originalEvent && (l = l.originalEvent);
  const o = a.touchEventsData;
  if (l.type === 'pointerdown') {
    if (o.pointerId !== null && o.pointerId !== l.pointerId) return;
    o.pointerId = l.pointerId;
  } else
    l.type === 'touchstart' &&
      l.targetTouches.length === 1 &&
      (o.touchId = l.targetTouches[0].identifier);
  if (l.type === 'touchstart') {
    dy(a, l, l.targetTouches[0].pageX);
    return;
  }
  const { params: u, touches: f, enabled: p } = a;
  if (
    !p ||
    (!u.simulateTouch && l.pointerType === 'mouse') ||
    (a.animating && u.preventInteractionOnTransition)
  )
    return;
  !a.animating && u.cssMode && u.loop && a.loopFix();
  let h = l.target;
  if (
    (u.touchEventsTarget === 'wrapper' && !ow(h, a.wrapperEl)) ||
    ('which' in l && l.which === 3) ||
    ('button' in l && l.button > 0) ||
    (o.isTouched && o.isMoved)
  )
    return;
  const m = !!u.noSwipingClass && u.noSwipingClass !== '',
    v = l.composedPath ? l.composedPath() : l.path;
  m && l.target && l.target.shadowRoot && v && (h = v[0]);
  const g = u.noSwipingSelector ? u.noSwipingSelector : `.${u.noSwipingClass}`,
    x = !!(l.target && l.target.shadowRoot);
  if (u.noSwiping && (x ? Ww(g, h) : h.closest(g))) {
    a.allowClick = !0;
    return;
  }
  if (u.swipeHandler && !h.closest(u.swipeHandler)) return;
  ((f.currentX = l.pageX), (f.currentY = l.pageY));
  const b = f.currentX,
    A = f.currentY;
  if (!dy(a, l, b)) return;
  (Object.assign(o, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (f.startX = b),
    (f.startY = A),
    (o.touchStartTime = so()),
    (a.allowClick = !0),
    a.updateSize(),
    (a.swipeDirection = void 0),
    u.threshold > 0 && (o.allowThresholdMove = !1));
  let E = !0;
  (h.matches(o.focusableElements) &&
    ((E = !1), h.nodeName === 'SELECT' && (o.isTouched = !1)),
    s.activeElement &&
      s.activeElement.matches(o.focusableElements) &&
      s.activeElement !== h &&
      (l.pointerType === 'mouse' ||
        (l.pointerType !== 'mouse' && !h.matches(o.focusableElements))) &&
      s.activeElement.blur());
  const M = E && a.allowTouchMove && u.touchStartPreventDefault;
  ((u.touchStartForcePreventDefault || M) &&
    !h.isContentEditable &&
    l.preventDefault(),
    u.freeMode &&
      u.freeMode.enabled &&
      a.freeMode &&
      a.animating &&
      !u.cssMode &&
      a.freeMode.onTouchStart(),
    a.emit('touchStart', l));
}
function tD(t) {
  const a = pn(),
    s = this,
    l = s.touchEventsData,
    { params: o, touches: u, rtlTranslate: f, enabled: p } = s;
  if (!p || (!o.simulateTouch && t.pointerType === 'mouse')) return;
  let h = t;
  if (
    (h.originalEvent && (h = h.originalEvent),
    h.type === 'pointermove' &&
      (l.touchId !== null || h.pointerId !== l.pointerId))
  )
    return;
  let m;
  if (h.type === 'touchmove') {
    if (
      ((m = [...h.changedTouches].find((V) => V.identifier === l.touchId)),
      !m || m.identifier !== l.touchId)
    )
      return;
  } else m = h;
  if (!l.isTouched) {
    l.startMoving && l.isScrolling && s.emit('touchMoveOpposite', h);
    return;
  }
  const v = m.pageX,
    g = m.pageY;
  if (h.preventedByNestedSwiper) {
    ((u.startX = v), (u.startY = g));
    return;
  }
  if (!s.allowTouchMove) {
    (h.target.matches(l.focusableElements) || (s.allowClick = !1),
      l.isTouched &&
        (Object.assign(u, { startX: v, startY: g, currentX: v, currentY: g }),
        (l.touchStartTime = so())));
    return;
  }
  if (o.touchReleaseOnEdges && !o.loop)
    if (s.isVertical()) {
      if (
        (g < u.startY && s.translate <= s.maxTranslate()) ||
        (g > u.startY && s.translate >= s.minTranslate())
      ) {
        ((l.isTouched = !1), (l.isMoved = !1));
        return;
      }
    } else {
      if (
        f &&
        ((v > u.startX && -s.translate <= s.maxTranslate()) ||
          (v < u.startX && -s.translate >= s.minTranslate()))
      )
        return;
      if (
        !f &&
        ((v < u.startX && s.translate <= s.maxTranslate()) ||
          (v > u.startX && s.translate >= s.minTranslate()))
      )
        return;
    }
  if (
    (a.activeElement &&
      a.activeElement.matches(l.focusableElements) &&
      a.activeElement !== h.target &&
      h.pointerType !== 'mouse' &&
      a.activeElement.blur(),
    a.activeElement &&
      h.target === a.activeElement &&
      h.target.matches(l.focusableElements))
  ) {
    ((l.isMoved = !0), (s.allowClick = !1));
    return;
  }
  (l.allowTouchCallbacks && s.emit('touchMove', h),
    (u.previousX = u.currentX),
    (u.previousY = u.currentY),
    (u.currentX = v),
    (u.currentY = g));
  const x = u.currentX - u.startX,
    b = u.currentY - u.startY;
  if (s.params.threshold && Math.sqrt(x ** 2 + b ** 2) < s.params.threshold)
    return;
  if (typeof l.isScrolling > 'u') {
    let V;
    (
      (s.isHorizontal() && u.currentY === u.startY) ||
      (s.isVertical() && u.currentX === u.startX)
    ) ?
      (l.isScrolling = !1)
    : x * x + b * b >= 25 &&
      ((V = (Math.atan2(Math.abs(b), Math.abs(x)) * 180) / Math.PI),
      (l.isScrolling =
        s.isHorizontal() ? V > o.touchAngle : 90 - V > o.touchAngle));
  }
  if (
    (l.isScrolling && s.emit('touchMoveOpposite', h),
    typeof l.startMoving > 'u' &&
      (u.currentX !== u.startX || u.currentY !== u.startY) &&
      (l.startMoving = !0),
    l.isScrolling ||
      (h.type === 'touchmove' && l.preventTouchMoveFromPointerMove))
  ) {
    l.isTouched = !1;
    return;
  }
  if (!l.startMoving) return;
  ((s.allowClick = !1),
    !o.cssMode && h.cancelable && h.preventDefault(),
    o.touchMoveStopPropagation && !o.nested && h.stopPropagation());
  let A = s.isHorizontal() ? x : b,
    E = s.isHorizontal() ? u.currentX - u.previousX : u.currentY - u.previousY;
  (o.oneWayMovement &&
    ((A = Math.abs(A) * (f ? 1 : -1)), (E = Math.abs(E) * (f ? 1 : -1))),
    (u.diff = A),
    (A *= o.touchRatio),
    f && ((A = -A), (E = -E)));
  const M = s.touchesDirection;
  ((s.swipeDirection = A > 0 ? 'prev' : 'next'),
    (s.touchesDirection = E > 0 ? 'prev' : 'next'));
  const _ = s.params.loop && !o.cssMode,
    C =
      (s.touchesDirection === 'next' && s.allowSlideNext) ||
      (s.touchesDirection === 'prev' && s.allowSlidePrev);
  if (!l.isMoved) {
    if (
      (_ && C && s.loopFix({ direction: s.swipeDirection }),
      (l.startTranslate = s.getTranslate()),
      s.setTransition(0),
      s.animating)
    ) {
      const V = new window.CustomEvent('transitionend', {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      s.wrapperEl.dispatchEvent(V);
    }
    ((l.allowMomentumBounce = !1),
      o.grabCursor &&
        (s.allowSlideNext === !0 || s.allowSlidePrev === !0) &&
        s.setGrabCursor(!0),
      s.emit('sliderFirstMove', h));
  }
  if (
    (new Date().getTime(),
    o._loopSwapReset !== !1 &&
      l.isMoved &&
      l.allowThresholdMove &&
      M !== s.touchesDirection &&
      _ &&
      C &&
      Math.abs(A) >= 1)
  ) {
    (Object.assign(u, {
      startX: v,
      startY: g,
      currentX: v,
      currentY: g,
      startTranslate: l.currentTranslate,
    }),
      (l.loopSwapReset = !0),
      (l.startTranslate = l.currentTranslate));
    return;
  }
  (s.emit('sliderMove', h),
    (l.isMoved = !0),
    (l.currentTranslate = A + l.startTranslate));
  let w = !0,
    U = o.resistanceRatio;
  if (
    (o.touchReleaseOnEdges && (U = 0),
    A > 0 ?
      (_ &&
        C &&
        l.allowThresholdMove &&
        l.currentTranslate >
          (o.centeredSlides ?
            s.minTranslate() -
            s.slidesSizesGrid[s.activeIndex + 1] -
            ((
              o.slidesPerView !== 'auto' &&
              s.slides.length - o.slidesPerView >= 2
            ) ?
              s.slidesSizesGrid[s.activeIndex + 1] + s.params.spaceBetween
            : 0) -
            s.params.spaceBetween
          : s.minTranslate()) &&
        s.loopFix({ direction: 'prev', setTranslate: !0, activeSlideIndex: 0 }),
      l.currentTranslate > s.minTranslate() &&
        ((w = !1),
        o.resistance &&
          (l.currentTranslate =
            s.minTranslate() -
            1 +
            (-s.minTranslate() + l.startTranslate + A) ** U)))
    : A < 0 &&
      (_ &&
        C &&
        l.allowThresholdMove &&
        l.currentTranslate <
          (o.centeredSlides ?
            s.maxTranslate() +
            s.slidesSizesGrid[s.slidesSizesGrid.length - 1] +
            s.params.spaceBetween +
            ((
              o.slidesPerView !== 'auto' &&
              s.slides.length - o.slidesPerView >= 2
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
            (o.slidesPerView === 'auto' ?
              s.slidesPerViewDynamic()
            : Math.ceil(parseFloat(o.slidesPerView, 10))),
        }),
      l.currentTranslate < s.maxTranslate() &&
        ((w = !1),
        o.resistance &&
          (l.currentTranslate =
            s.maxTranslate() +
            1 -
            (s.maxTranslate() - l.startTranslate - A) ** U))),
    w && (h.preventedByNestedSwiper = !0),
    !s.allowSlideNext &&
      s.swipeDirection === 'next' &&
      l.currentTranslate < l.startTranslate &&
      (l.currentTranslate = l.startTranslate),
    !s.allowSlidePrev &&
      s.swipeDirection === 'prev' &&
      l.currentTranslate > l.startTranslate &&
      (l.currentTranslate = l.startTranslate),
    !s.allowSlidePrev &&
      !s.allowSlideNext &&
      (l.currentTranslate = l.startTranslate),
    o.threshold > 0)
  )
    if (Math.abs(A) > o.threshold || l.allowThresholdMove) {
      if (!l.allowThresholdMove) {
        ((l.allowThresholdMove = !0),
          (u.startX = u.currentX),
          (u.startY = u.currentY),
          (l.currentTranslate = l.startTranslate),
          (u.diff =
            s.isHorizontal() ? u.currentX - u.startX : u.currentY - u.startY));
        return;
      }
    } else {
      l.currentTranslate = l.startTranslate;
      return;
    }
  !o.followFinger ||
    o.cssMode ||
    (((o.freeMode && o.freeMode.enabled && s.freeMode) ||
      o.watchSlidesProgress) &&
      (s.updateActiveIndex(), s.updateSlidesClasses()),
    o.freeMode && o.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
    s.updateProgress(l.currentTranslate),
    s.setTranslate(l.currentTranslate));
}
function nD(t) {
  const a = this,
    s = a.touchEventsData;
  let l = t;
  l.originalEvent && (l = l.originalEvent);
  let o;
  if (l.type === 'touchend' || l.type === 'touchcancel') {
    if (
      ((o = [...l.changedTouches].find((V) => V.identifier === s.touchId)),
      !o || o.identifier !== s.touchId)
    )
      return;
  } else {
    if (s.touchId !== null || l.pointerId !== s.pointerId) return;
    o = l;
  }
  if (
    ['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(
      l.type,
    ) &&
    !(
      ['pointercancel', 'contextmenu'].includes(l.type) &&
      (a.browser.isSafari || a.browser.isWebView)
    )
  )
    return;
  ((s.pointerId = null), (s.touchId = null));
  const {
    params: f,
    touches: p,
    rtlTranslate: h,
    slidesGrid: m,
    enabled: v,
  } = a;
  if (!v || (!f.simulateTouch && l.pointerType === 'mouse')) return;
  if (
    (s.allowTouchCallbacks && a.emit('touchEnd', l),
    (s.allowTouchCallbacks = !1),
    !s.isTouched)
  ) {
    (s.isMoved && f.grabCursor && a.setGrabCursor(!1),
      (s.isMoved = !1),
      (s.startMoving = !1));
    return;
  }
  f.grabCursor &&
    s.isMoved &&
    s.isTouched &&
    (a.allowSlideNext === !0 || a.allowSlidePrev === !0) &&
    a.setGrabCursor(!1);
  const g = so(),
    x = g - s.touchStartTime;
  if (a.allowClick) {
    const V = l.path || (l.composedPath && l.composedPath());
    (a.updateClickedSlide((V && V[0]) || l.target, V),
      a.emit('tap click', l),
      x < 300 &&
        g - s.lastClickTime < 300 &&
        a.emit('doubleTap doubleClick', l));
  }
  if (
    ((s.lastClickTime = so()),
    L1(() => {
      a.destroyed || (a.allowClick = !0);
    }),
    !s.isTouched ||
      !s.isMoved ||
      !a.swipeDirection ||
      (p.diff === 0 && !s.loopSwapReset) ||
      (s.currentTranslate === s.startTranslate && !s.loopSwapReset))
  ) {
    ((s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1));
    return;
  }
  ((s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1));
  let b;
  if (
    (f.followFinger ?
      (b = h ? a.translate : -a.translate)
    : (b = -s.currentTranslate),
    f.cssMode)
  )
    return;
  if (f.freeMode && f.freeMode.enabled) {
    a.freeMode.onTouchEnd({ currentPos: b });
    return;
  }
  const A = b >= -a.maxTranslate() && !a.params.loop;
  let E = 0,
    M = a.slidesSizesGrid[0];
  for (
    let V = 0;
    V < m.length;
    V += V < f.slidesPerGroupSkip ? 1 : f.slidesPerGroup
  ) {
    const $ = V < f.slidesPerGroupSkip - 1 ? 1 : f.slidesPerGroup;
    typeof m[V + $] < 'u' ?
      (A || (b >= m[V] && b < m[V + $])) && ((E = V), (M = m[V + $] - m[V]))
    : (A || b >= m[V]) && ((E = V), (M = m[m.length - 1] - m[m.length - 2]));
  }
  let _ = null,
    C = null;
  f.rewind &&
    (a.isBeginning ?
      (C =
        f.virtual && f.virtual.enabled && a.virtual ?
          a.virtual.slides.length - 1
        : a.slides.length - 1)
    : a.isEnd && (_ = 0));
  const w = (b - m[E]) / M,
    U = E < f.slidesPerGroupSkip - 1 ? 1 : f.slidesPerGroup;
  if (x > f.longSwipesMs) {
    if (!f.longSwipes) {
      a.slideTo(a.activeIndex);
      return;
    }
    (a.swipeDirection === 'next' &&
      (w >= f.longSwipesRatio ?
        a.slideTo(f.rewind && a.isEnd ? _ : E + U)
      : a.slideTo(E)),
      a.swipeDirection === 'prev' &&
        (w > 1 - f.longSwipesRatio ? a.slideTo(E + U)
        : C !== null && w < 0 && Math.abs(w) > f.longSwipesRatio ? a.slideTo(C)
        : a.slideTo(E)));
  } else {
    if (!f.shortSwipes) {
      a.slideTo(a.activeIndex);
      return;
    }
    (
      a.navigation &&
      (l.target === a.navigation.nextEl || l.target === a.navigation.prevEl)
    ) ?
      l.target === a.navigation.nextEl ?
        a.slideTo(E + U)
      : a.slideTo(E)
    : (a.swipeDirection === 'next' && a.slideTo(_ !== null ? _ : E + U),
      a.swipeDirection === 'prev' && a.slideTo(C !== null ? C : E));
  }
}
function hy() {
  const t = this,
    { params: a, el: s } = t;
  if (s && s.offsetWidth === 0) return;
  a.breakpoints && t.setBreakpoint();
  const { allowSlideNext: l, allowSlidePrev: o, snapGrid: u } = t,
    f = t.virtual && t.params.virtual.enabled;
  ((t.allowSlideNext = !0),
    (t.allowSlidePrev = !0),
    t.updateSize(),
    t.updateSlides(),
    t.updateSlidesClasses());
  const p = f && a.loop;
  ((
    (a.slidesPerView === 'auto' || a.slidesPerView > 1) &&
    t.isEnd &&
    !t.isBeginning &&
    !t.params.centeredSlides &&
    !p
  ) ?
    t.slideTo(t.slides.length - 1, 0, !1, !0)
  : t.params.loop && !f ? t.slideToLoop(t.realIndex, 0, !1, !0)
  : t.slideTo(t.activeIndex, 0, !1, !0),
    t.autoplay &&
      t.autoplay.running &&
      t.autoplay.paused &&
      (clearTimeout(t.autoplay.resizeTimeout),
      (t.autoplay.resizeTimeout = setTimeout(() => {
        t.autoplay &&
          t.autoplay.running &&
          t.autoplay.paused &&
          t.autoplay.resume();
      }, 500))),
    (t.allowSlidePrev = o),
    (t.allowSlideNext = l),
    t.params.watchOverflow && u !== t.snapGrid && t.checkOverflow());
}
function aD(t) {
  const a = this;
  a.enabled &&
    (a.allowClick ||
      (a.params.preventClicks && t.preventDefault(),
      a.params.preventClicksPropagation &&
        a.animating &&
        (t.stopPropagation(), t.stopImmediatePropagation())));
}
function iD() {
  const t = this,
    { wrapperEl: a, rtlTranslate: s, enabled: l } = t;
  if (!l) return;
  ((t.previousTranslate = t.translate),
    t.isHorizontal() ?
      (t.translate = -a.scrollLeft)
    : (t.translate = -a.scrollTop),
    t.translate === 0 && (t.translate = 0),
    t.updateActiveIndex(),
    t.updateSlidesClasses());
  let o;
  const u = t.maxTranslate() - t.minTranslate();
  (u === 0 ? (o = 0) : (o = (t.translate - t.minTranslate()) / u),
    o !== t.progress && t.updateProgress(s ? -t.translate : t.translate),
    t.emit('setTranslate', t.translate, !1));
}
function sD(t) {
  const a = this;
  (Fr(a, t.target),
    !(
      a.params.cssMode ||
      (a.params.slidesPerView !== 'auto' && !a.params.autoHeight)
    ) && a.update());
}
function lD() {
  const t = this;
  t.documentTouchHandlerProceeded ||
    ((t.documentTouchHandlerProceeded = !0),
    t.params.touchReleaseOnEdges && (t.el.style.touchAction = 'auto'));
}
const G1 = (t, a) => {
  const s = pn(),
    { params: l, el: o, wrapperEl: u, device: f } = t,
    p = !!l.nested,
    h = a === 'on' ? 'addEventListener' : 'removeEventListener',
    m = a;
  !o ||
    typeof o == 'string' ||
    (s[h]('touchstart', t.onDocumentTouchStart, { passive: !1, capture: p }),
    o[h]('touchstart', t.onTouchStart, { passive: !1 }),
    o[h]('pointerdown', t.onTouchStart, { passive: !1 }),
    s[h]('touchmove', t.onTouchMove, { passive: !1, capture: p }),
    s[h]('pointermove', t.onTouchMove, { passive: !1, capture: p }),
    s[h]('touchend', t.onTouchEnd, { passive: !0 }),
    s[h]('pointerup', t.onTouchEnd, { passive: !0 }),
    s[h]('pointercancel', t.onTouchEnd, { passive: !0 }),
    s[h]('touchcancel', t.onTouchEnd, { passive: !0 }),
    s[h]('pointerout', t.onTouchEnd, { passive: !0 }),
    s[h]('pointerleave', t.onTouchEnd, { passive: !0 }),
    s[h]('contextmenu', t.onTouchEnd, { passive: !0 }),
    (l.preventClicks || l.preventClicksPropagation) &&
      o[h]('click', t.onClick, !0),
    l.cssMode && u[h]('scroll', t.onScroll),
    l.updateOnWindowResize ?
      t[m](
        f.ios || f.android ?
          'resize orientationchange observerUpdate'
        : 'resize observerUpdate',
        hy,
        !0,
      )
    : t[m]('observerUpdate', hy, !0),
    o[h]('load', t.onLoad, { capture: !0 }));
};
function rD() {
  const t = this,
    { params: a } = t;
  ((t.onTouchStart = eD.bind(t)),
    (t.onTouchMove = tD.bind(t)),
    (t.onTouchEnd = nD.bind(t)),
    (t.onDocumentTouchStart = lD.bind(t)),
    a.cssMode && (t.onScroll = iD.bind(t)),
    (t.onClick = aD.bind(t)),
    (t.onLoad = sD.bind(t)),
    G1(t, 'on'));
}
function oD() {
  G1(this, 'off');
}
var uD = { attachEvents: rD, detachEvents: oD };
const my = (t, a) => t.grid && a.grid && a.grid.rows > 1;
function cD() {
  const t = this,
    { realIndex: a, initialized: s, params: l, el: o } = t,
    u = l.breakpoints;
  if (!u || (u && Object.keys(u).length === 0)) return;
  const f = pn(),
    p =
      l.breakpointsBase === 'window' || !l.breakpointsBase ?
        l.breakpointsBase
      : 'container',
    h =
      (
        ['window', 'container'].includes(l.breakpointsBase) ||
        !l.breakpointsBase
      ) ?
        t.el
      : f.querySelector(l.breakpointsBase),
    m = t.getBreakpoint(u, p, h);
  if (!m || t.currentBreakpoint === m) return;
  const g = (m in u ? u[m] : void 0) || t.originalParams,
    x = my(t, l),
    b = my(t, g),
    A = t.params.grabCursor,
    E = g.grabCursor,
    M = l.enabled;
  (x && !b ?
    (o.classList.remove(
      `${l.containerModifierClass}grid`,
      `${l.containerModifierClass}grid-column`,
    ),
    t.emitContainerClasses())
  : !x &&
    b &&
    (o.classList.add(`${l.containerModifierClass}grid`),
    ((g.grid.fill && g.grid.fill === 'column') ||
      (!g.grid.fill && l.grid.fill === 'column')) &&
      o.classList.add(`${l.containerModifierClass}grid-column`),
    t.emitContainerClasses()),
    A && !E ? t.unsetGrabCursor() : !A && E && t.setGrabCursor(),
    ['navigation', 'pagination', 'scrollbar'].forEach(($) => {
      if (typeof g[$] > 'u') return;
      const X = l[$] && l[$].enabled,
        L = g[$] && g[$].enabled;
      (X && !L && t[$].disable(), !X && L && t[$].enable());
    }));
  const _ = g.direction && g.direction !== l.direction,
    C = l.loop && (g.slidesPerView !== l.slidesPerView || _),
    w = l.loop;
  (_ && s && t.changeDirection(), Bt(t.params, g));
  const U = t.params.enabled,
    V = t.params.loop;
  (Object.assign(t, {
    allowTouchMove: t.params.allowTouchMove,
    allowSlideNext: t.params.allowSlideNext,
    allowSlidePrev: t.params.allowSlidePrev,
  }),
    M && !U ? t.disable() : !M && U && t.enable(),
    (t.currentBreakpoint = m),
    t.emit('_beforeBreakpoint', g),
    s &&
      (C ? (t.loopDestroy(), t.loopCreate(a), t.updateSlides())
      : !w && V ? (t.loopCreate(a), t.updateSlides())
      : w && !V && t.loopDestroy()),
    t.emit('breakpoint', g));
}
function fD(t, a = 'window', s) {
  if (!t || (a === 'container' && !s)) return;
  let l = !1;
  const o = bt(),
    u = a === 'window' ? o.innerHeight : s.clientHeight,
    f = Object.keys(t).map((p) => {
      if (typeof p == 'string' && p.indexOf('@') === 0) {
        const h = parseFloat(p.substr(1));
        return { value: u * h, point: p };
      }
      return { value: p, point: p };
    });
  f.sort((p, h) => parseInt(p.value, 10) - parseInt(h.value, 10));
  for (let p = 0; p < f.length; p += 1) {
    const { point: h, value: m } = f[p];
    a === 'window' ?
      o.matchMedia(`(min-width: ${m}px)`).matches && (l = h)
    : m <= s.clientWidth && (l = h);
  }
  return l || 'max';
}
var dD = { setBreakpoint: cD, getBreakpoint: fD };
function hD(t, a) {
  const s = [];
  return (
    t.forEach((l) => {
      typeof l == 'object' ?
        Object.keys(l).forEach((o) => {
          l[o] && s.push(a + o);
        })
      : typeof l == 'string' && s.push(a + l);
    }),
    s
  );
}
function mD() {
  const t = this,
    { classNames: a, params: s, rtl: l, el: o, device: u } = t,
    f = hD(
      [
        'initialized',
        s.direction,
        { 'free-mode': t.params.freeMode && s.freeMode.enabled },
        { autoheight: s.autoHeight },
        { rtl: l },
        { grid: s.grid && s.grid.rows > 1 },
        {
          'grid-column': s.grid && s.grid.rows > 1 && s.grid.fill === 'column',
        },
        { android: u.android },
        { ios: u.ios },
        { 'css-mode': s.cssMode },
        { centered: s.cssMode && s.centeredSlides },
        { 'watch-progress': s.watchSlidesProgress },
      ],
      s.containerModifierClass,
    );
  (a.push(...f), o.classList.add(...a), t.emitContainerClasses());
}
function pD() {
  const t = this,
    { el: a, classNames: s } = t;
  !a ||
    typeof a == 'string' ||
    (a.classList.remove(...s), t.emitContainerClasses());
}
var gD = { addClasses: mD, removeClasses: pD };
function vD() {
  const t = this,
    { isLocked: a, params: s } = t,
    { slidesOffsetBefore: l } = s;
  if (l) {
    const o = t.slides.length - 1,
      u = t.slidesGrid[o] + t.slidesSizesGrid[o] + l * 2;
    t.isLocked = t.size > u;
  } else t.isLocked = t.snapGrid.length === 1;
  (s.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked),
    s.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked),
    a && a !== t.isLocked && (t.isEnd = !1),
    a !== t.isLocked && t.emit(t.isLocked ? 'lock' : 'unlock'));
}
var yD = { checkOverflow: vD },
  Qf = {
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
function bD(t, a) {
  return function (l = {}) {
    const o = Object.keys(l)[0],
      u = l[o];
    if (typeof u != 'object' || u === null) {
      Bt(a, l);
      return;
    }
    if (
      (t[o] === !0 && (t[o] = { enabled: !0 }),
      o === 'navigation' &&
        t[o] &&
        t[o].enabled &&
        !t[o].prevEl &&
        !t[o].nextEl &&
        (t[o].auto = !0),
      ['pagination', 'scrollbar'].indexOf(o) >= 0 &&
        t[o] &&
        t[o].enabled &&
        !t[o].el &&
        (t[o].auto = !0),
      !(o in t && 'enabled' in u))
    ) {
      Bt(a, l);
      return;
    }
    (typeof t[o] == 'object' && !('enabled' in t[o]) && (t[o].enabled = !0),
      t[o] || (t[o] = { enabled: !1 }),
      Bt(a, l));
  };
}
const gf = {
    eventsEmitter: gw,
    update: Mw,
    translate: jw,
    transition: Bw,
    slide: Xw,
    loop: Zw,
    grabCursor: Jw,
    events: uD,
    breakpoints: dD,
    checkOverflow: yD,
    classes: gD,
  },
  vf = {};
let Rd = class Bn {
  constructor(...a) {
    let s, l;
    ((
      a.length === 1 &&
      a[0].constructor &&
      Object.prototype.toString.call(a[0]).slice(8, -1) === 'Object'
    ) ?
      (l = a[0])
    : ([s, l] = a),
      l || (l = {}),
      (l = Bt({}, l)),
      s && !l.el && (l.el = s));
    const o = pn();
    if (
      l.el &&
      typeof l.el == 'string' &&
      o.querySelectorAll(l.el).length > 1
    ) {
      const h = [];
      return (
        o.querySelectorAll(l.el).forEach((m) => {
          const v = Bt({}, l, { el: m });
          h.push(new Bn(v));
        }),
        h
      );
    }
    const u = this;
    ((u.__swiper__ = !0),
      (u.support = B1()),
      (u.device = U1({ userAgent: l.userAgent })),
      (u.browser = H1()),
      (u.eventsListeners = {}),
      (u.eventsAnyListeners = []),
      (u.modules = [...u.__modules__]),
      l.modules &&
        Array.isArray(l.modules) &&
        l.modules.forEach((h) => {
          typeof h == 'function' &&
            u.modules.indexOf(h) < 0 &&
            u.modules.push(h);
        }));
    const f = {};
    u.modules.forEach((h) => {
      h({
        params: l,
        swiper: u,
        extendParams: bD(l, f),
        on: u.on.bind(u),
        once: u.once.bind(u),
        off: u.off.bind(u),
        emit: u.emit.bind(u),
      });
    });
    const p = Bt({}, Qf, f);
    return (
      (u.params = Bt({}, p, vf, l)),
      (u.originalParams = Bt({}, u.params)),
      (u.passedParams = Bt({}, l)),
      u.params &&
        u.params.on &&
        Object.keys(u.params.on).forEach((h) => {
          u.on(h, u.params.on[h]);
        }),
      u.params && u.params.onAny && u.onAny(u.params.onAny),
      Object.assign(u, {
        enabled: u.params.enabled,
        el: s,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return u.params.direction === 'horizontal';
        },
        isVertical() {
          return u.params.direction === 'vertical';
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
        allowSlideNext: u.params.allowSlideNext,
        allowSlidePrev: u.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: u.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: u.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      u.emit('_swiper'),
      u.params.init && u.init(),
      u
    );
  }
  getDirectionLabel(a) {
    return this.isHorizontal() ? a : (
        {
          'width': 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          'marginRight': 'marginBottom',
        }[a]
      );
  }
  getSlideIndex(a) {
    const { slidesEl: s, params: l } = this,
      o = hn(s, `.${l.slideClass}, swiper-slide`),
      u = oo(o[0]);
    return oo(a) - u;
  }
  getSlideIndexByData(a) {
    return this.getSlideIndex(
      this.slides.find(
        (s) => s.getAttribute('data-swiper-slide-index') * 1 === a,
      ),
    );
  }
  getSlideIndexWhenGrid(a) {
    return (
      this.grid &&
        this.params.grid &&
        this.params.grid.rows > 1 &&
        (this.params.grid.fill === 'column' ?
          (a = Math.floor(a / this.params.grid.rows))
        : this.params.grid.fill === 'row' &&
          (a = a % Math.ceil(this.slides.length / this.params.grid.rows))),
      a
    );
  }
  recalcSlides() {
    const a = this,
      { slidesEl: s, params: l } = a;
    a.slides = hn(s, `.${l.slideClass}, swiper-slide`);
  }
  enable() {
    const a = this;
    a.enabled ||
      ((a.enabled = !0),
      a.params.grabCursor && a.setGrabCursor(),
      a.emit('enable'));
  }
  disable() {
    const a = this;
    a.enabled &&
      ((a.enabled = !1),
      a.params.grabCursor && a.unsetGrabCursor(),
      a.emit('disable'));
  }
  setProgress(a, s) {
    const l = this;
    a = Math.min(Math.max(a, 0), 1);
    const o = l.minTranslate(),
      f = (l.maxTranslate() - o) * a + o;
    (l.translateTo(f, typeof s > 'u' ? 0 : s),
      l.updateActiveIndex(),
      l.updateSlidesClasses());
  }
  emitContainerClasses() {
    const a = this;
    if (!a.params._emitClasses || !a.el) return;
    const s = a.el.className
      .split(' ')
      .filter(
        (l) =>
          l.indexOf('swiper') === 0 ||
          l.indexOf(a.params.containerModifierClass) === 0,
      );
    a.emit('_containerClasses', s.join(' '));
  }
  getSlideClasses(a) {
    const s = this;
    return s.destroyed ? '' : (
        a.className
          .split(' ')
          .filter(
            (l) =>
              l.indexOf('swiper-slide') === 0 ||
              l.indexOf(s.params.slideClass) === 0,
          )
          .join(' ')
      );
  }
  emitSlidesClasses() {
    const a = this;
    if (!a.params._emitClasses || !a.el) return;
    const s = [];
    (a.slides.forEach((l) => {
      const o = a.getSlideClasses(l);
      (s.push({ slideEl: l, classNames: o }), a.emit('_slideClass', l, o));
    }),
      a.emit('_slideClasses', s));
  }
  slidesPerViewDynamic(a = 'current', s = !1) {
    const l = this,
      {
        params: o,
        slides: u,
        slidesGrid: f,
        slidesSizesGrid: p,
        size: h,
        activeIndex: m,
      } = l;
    let v = 1;
    if (typeof o.slidesPerView == 'number') return o.slidesPerView;
    if (o.centeredSlides) {
      let g = u[m] ? Math.ceil(u[m].swiperSlideSize) : 0,
        x;
      for (let b = m + 1; b < u.length; b += 1)
        u[b] &&
          !x &&
          ((g += Math.ceil(u[b].swiperSlideSize)), (v += 1), g > h && (x = !0));
      for (let b = m - 1; b >= 0; b -= 1)
        u[b] &&
          !x &&
          ((g += u[b].swiperSlideSize), (v += 1), g > h && (x = !0));
    } else if (a === 'current')
      for (let g = m + 1; g < u.length; g += 1)
        (s ? f[g] + p[g] - f[m] < h : f[g] - f[m] < h) && (v += 1);
    else for (let g = m - 1; g >= 0; g -= 1) f[m] - f[g] < h && (v += 1);
    return v;
  }
  update() {
    const a = this;
    if (!a || a.destroyed) return;
    const { snapGrid: s, params: l } = a;
    (l.breakpoints && a.setBreakpoint(),
      [...a.el.querySelectorAll('[loading="lazy"]')].forEach((f) => {
        f.complete && Fr(a, f);
      }),
      a.updateSize(),
      a.updateSlides(),
      a.updateProgress(),
      a.updateSlidesClasses());
    function o() {
      const f = a.rtlTranslate ? a.translate * -1 : a.translate,
        p = Math.min(Math.max(f, a.maxTranslate()), a.minTranslate());
      (a.setTranslate(p), a.updateActiveIndex(), a.updateSlidesClasses());
    }
    let u;
    if (l.freeMode && l.freeMode.enabled && !l.cssMode)
      (o(), l.autoHeight && a.updateAutoHeight());
    else {
      if (
        (l.slidesPerView === 'auto' || l.slidesPerView > 1) &&
        a.isEnd &&
        !l.centeredSlides
      ) {
        const f = a.virtual && l.virtual.enabled ? a.virtual.slides : a.slides;
        u = a.slideTo(f.length - 1, 0, !1, !0);
      } else u = a.slideTo(a.activeIndex, 0, !1, !0);
      u || o();
    }
    (l.watchOverflow && s !== a.snapGrid && a.checkOverflow(),
      a.emit('update'));
  }
  changeDirection(a, s = !0) {
    const l = this,
      o = l.params.direction;
    return (
      a || (a = o === 'horizontal' ? 'vertical' : 'horizontal'),
      a === o ||
        (a !== 'horizontal' && a !== 'vertical') ||
        (l.el.classList.remove(`${l.params.containerModifierClass}${o}`),
        l.el.classList.add(`${l.params.containerModifierClass}${a}`),
        l.emitContainerClasses(),
        (l.params.direction = a),
        l.slides.forEach((u) => {
          a === 'vertical' ? (u.style.width = '') : (u.style.height = '');
        }),
        l.emit('changeDirection'),
        s && l.update()),
      l
    );
  }
  changeLanguageDirection(a) {
    const s = this;
    (s.rtl && a === 'rtl') ||
      (!s.rtl && a === 'ltr') ||
      ((s.rtl = a === 'rtl'),
      (s.rtlTranslate = s.params.direction === 'horizontal' && s.rtl),
      s.rtl ?
        (s.el.classList.add(`${s.params.containerModifierClass}rtl`),
        (s.el.dir = 'rtl'))
      : (s.el.classList.remove(`${s.params.containerModifierClass}rtl`),
        (s.el.dir = 'ltr')),
      s.update());
  }
  mount(a) {
    const s = this;
    if (s.mounted) return !0;
    let l = a || s.params.el;
    if ((typeof l == 'string' && (l = document.querySelector(l)), !l))
      return !1;
    ((l.swiper = s),
      l.parentNode &&
        l.parentNode.host &&
        l.parentNode.host.nodeName ===
          s.params.swiperElementNodeName.toUpperCase() &&
        (s.isElement = !0));
    const o = () =>
      `.${(s.params.wrapperClass || '').trim().split(' ').join('.')}`;
    let f =
      l && l.shadowRoot && l.shadowRoot.querySelector ?
        l.shadowRoot.querySelector(o())
      : hn(l, o())[0];
    return (
      !f &&
        s.params.createElements &&
        ((f = ro('div', s.params.wrapperClass)),
        l.append(f),
        hn(l, `.${s.params.slideClass}`).forEach((p) => {
          f.append(p);
        })),
      Object.assign(s, {
        el: l,
        wrapperEl: f,
        slidesEl:
          s.isElement && !l.parentNode.host.slideSlots ? l.parentNode.host : f,
        hostEl: s.isElement ? l.parentNode.host : l,
        mounted: !0,
        rtl: l.dir.toLowerCase() === 'rtl' || ma(l, 'direction') === 'rtl',
        rtlTranslate:
          s.params.direction === 'horizontal' &&
          (l.dir.toLowerCase() === 'rtl' || ma(l, 'direction') === 'rtl'),
        wrongRTL: ma(f, 'display') === '-webkit-box',
      }),
      !0
    );
  }
  init(a) {
    const s = this;
    if (s.initialized || s.mount(a) === !1) return s;
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
    const o = [...s.el.querySelectorAll('[loading="lazy"]')];
    return (
      s.isElement && o.push(...s.hostEl.querySelectorAll('[loading="lazy"]')),
      o.forEach((u) => {
        u.complete ?
          Fr(s, u)
        : u.addEventListener('load', (f) => {
            Fr(s, f.target);
          });
      }),
      Xf(s),
      (s.initialized = !0),
      Xf(s),
      s.emit('init'),
      s.emit('afterInit'),
      s
    );
  }
  destroy(a = !0, s = !0) {
    const l = this,
      { params: o, el: u, wrapperEl: f, slides: p } = l;
    return (
      typeof l.params > 'u' ||
        l.destroyed ||
        (l.emit('beforeDestroy'),
        (l.initialized = !1),
        l.detachEvents(),
        o.loop && l.loopDestroy(),
        s &&
          (l.removeClasses(),
          u && typeof u != 'string' && u.removeAttribute('style'),
          f && f.removeAttribute('style'),
          p &&
            p.length &&
            p.forEach((h) => {
              (h.classList.remove(
                o.slideVisibleClass,
                o.slideFullyVisibleClass,
                o.slideActiveClass,
                o.slideNextClass,
                o.slidePrevClass,
              ),
                h.removeAttribute('style'),
                h.removeAttribute('data-swiper-slide-index'));
            })),
        l.emit('destroy'),
        Object.keys(l.eventsListeners).forEach((h) => {
          l.off(h);
        }),
        a !== !1 &&
          (l.el && typeof l.el != 'string' && (l.el.swiper = null), aw(l)),
        (l.destroyed = !0)),
      null
    );
  }
  static extendDefaults(a) {
    Bt(vf, a);
  }
  static get extendedDefaults() {
    return vf;
  }
  static get defaults() {
    return Qf;
  }
  static installModule(a) {
    Bn.prototype.__modules__ || (Bn.prototype.__modules__ = []);
    const s = Bn.prototype.__modules__;
    typeof a == 'function' && s.indexOf(a) < 0 && s.push(a);
  }
  static use(a) {
    return Array.isArray(a) ?
        (a.forEach((s) => Bn.installModule(s)), Bn)
      : (Bn.installModule(a), Bn);
  }
};
Object.keys(gf).forEach((t) => {
  Object.keys(gf[t]).forEach((a) => {
    Rd.prototype[a] = gf[t][a];
  });
});
Rd.use([mw, pw]);
const k1 = [
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
function Qa(t) {
  return (
    typeof t == 'object' &&
    t !== null &&
    t.constructor &&
    Object.prototype.toString.call(t).slice(8, -1) === 'Object' &&
    !t.__swiper__
  );
}
function Pi(t, a) {
  const s = ['__proto__', 'constructor', 'prototype'];
  Object.keys(a)
    .filter((l) => s.indexOf(l) < 0)
    .forEach((l) => {
      typeof t[l] > 'u' ? (t[l] = a[l])
      : Qa(a[l]) && Qa(t[l]) && Object.keys(a[l]).length > 0 ?
        a[l].__swiper__ ?
          (t[l] = a[l])
        : Pi(t[l], a[l])
      : (t[l] = a[l]);
    });
}
function q1(t = {}) {
  return (
    t.navigation &&
    typeof t.navigation.nextEl > 'u' &&
    typeof t.navigation.prevEl > 'u'
  );
}
function Y1(t = {}) {
  return t.pagination && typeof t.pagination.el > 'u';
}
function X1(t = {}) {
  return t.scrollbar && typeof t.scrollbar.el > 'u';
}
function Q1(t = '') {
  const a = t
      .split(' ')
      .map((l) => l.trim())
      .filter((l) => !!l),
    s = [];
  return (
    a.forEach((l) => {
      s.indexOf(l) < 0 && s.push(l);
    }),
    s.join(' ')
  );
}
function SD(t = '') {
  return (
    t ?
      t.includes('swiper-wrapper') ?
        t
      : `swiper-wrapper ${t}`
    : 'swiper-wrapper'
  );
}
function xD({
  swiper: t,
  slides: a,
  passedParams: s,
  changedParams: l,
  nextEl: o,
  prevEl: u,
  scrollbarEl: f,
  paginationEl: p,
}) {
  const h = l.filter(
      (L) => L !== 'children' && L !== 'direction' && L !== 'wrapperClass',
    ),
    {
      params: m,
      pagination: v,
      navigation: g,
      scrollbar: x,
      virtual: b,
      thumbs: A,
    } = t;
  let E, M, _, C, w, U, V, $;
  (l.includes('thumbs') &&
    s.thumbs &&
    s.thumbs.swiper &&
    !s.thumbs.swiper.destroyed &&
    m.thumbs &&
    (!m.thumbs.swiper || m.thumbs.swiper.destroyed) &&
    (E = !0),
    l.includes('controller') &&
      s.controller &&
      s.controller.control &&
      m.controller &&
      !m.controller.control &&
      (M = !0),
    l.includes('pagination') &&
      s.pagination &&
      (s.pagination.el || p) &&
      (m.pagination || m.pagination === !1) &&
      v &&
      !v.el &&
      (_ = !0),
    l.includes('scrollbar') &&
      s.scrollbar &&
      (s.scrollbar.el || f) &&
      (m.scrollbar || m.scrollbar === !1) &&
      x &&
      !x.el &&
      (C = !0),
    l.includes('navigation') &&
      s.navigation &&
      (s.navigation.prevEl || u) &&
      (s.navigation.nextEl || o) &&
      (m.navigation || m.navigation === !1) &&
      g &&
      !g.prevEl &&
      !g.nextEl &&
      (w = !0));
  const X = (L) => {
    t[L] &&
      (t[L].destroy(),
      L === 'navigation' ?
        (t.isElement && (t[L].prevEl.remove(), t[L].nextEl.remove()),
        (m[L].prevEl = void 0),
        (m[L].nextEl = void 0),
        (t[L].prevEl = void 0),
        (t[L].nextEl = void 0))
      : (t.isElement && t[L].el.remove(),
        (m[L].el = void 0),
        (t[L].el = void 0)));
  };
  (l.includes('loop') &&
    t.isElement &&
    (m.loop && !s.loop ? (U = !0)
    : !m.loop && s.loop ? (V = !0)
    : ($ = !0)),
    h.forEach((L) => {
      if (Qa(m[L]) && Qa(s[L]))
        (Object.assign(m[L], s[L]),
          (L === 'navigation' || L === 'pagination' || L === 'scrollbar') &&
            'enabled' in s[L] &&
            !s[L].enabled &&
            X(L));
      else {
        const W = s[L];
        (
          (W === !0 || W === !1) &&
          (L === 'navigation' || L === 'pagination' || L === 'scrollbar')
        ) ?
          W === !1 && X(L)
        : (m[L] = s[L]);
      }
    }),
    h.includes('controller') &&
      !M &&
      t.controller &&
      t.controller.control &&
      m.controller &&
      m.controller.control &&
      (t.controller.control = m.controller.control),
    l.includes('children') && a && b && m.virtual.enabled ?
      ((b.slides = a), b.update(!0))
    : l.includes('virtual') &&
      b &&
      m.virtual.enabled &&
      (a && (b.slides = a), b.update(!0)),
    l.includes('children') && a && m.loop && ($ = !0),
    E && A.init() && A.update(!0),
    M && (t.controller.control = m.controller.control),
    _ &&
      (t.isElement &&
        (!p || typeof p == 'string') &&
        ((p = document.createElement('div')),
        p.classList.add('swiper-pagination'),
        p.part.add('pagination'),
        t.el.appendChild(p)),
      p && (m.pagination.el = p),
      v.init(),
      v.render(),
      v.update()),
    C &&
      (t.isElement &&
        (!f || typeof f == 'string') &&
        ((f = document.createElement('div')),
        f.classList.add('swiper-scrollbar'),
        f.part.add('scrollbar'),
        t.el.appendChild(f)),
      f && (m.scrollbar.el = f),
      x.init(),
      x.updateSize(),
      x.setTranslate()),
    w &&
      (t.isElement &&
        ((!o || typeof o == 'string') &&
          ((o = document.createElement('div')),
          o.classList.add('swiper-button-next'),
          sl(o, t.navigation.arrowSvg),
          o.part.add('button-next'),
          t.el.appendChild(o)),
        (!u || typeof u == 'string') &&
          ((u = document.createElement('div')),
          u.classList.add('swiper-button-prev'),
          sl(u, t.navigation.arrowSvg),
          u.part.add('button-prev'),
          t.el.appendChild(u))),
      o && (m.navigation.nextEl = o),
      u && (m.navigation.prevEl = u),
      g.init(),
      g.update()),
    l.includes('allowSlideNext') && (t.allowSlideNext = s.allowSlideNext),
    l.includes('allowSlidePrev') && (t.allowSlidePrev = s.allowSlidePrev),
    l.includes('direction') && t.changeDirection(s.direction, !1),
    (U || $) && t.loopDestroy(),
    (V || $) && t.loopCreate(),
    t.update());
}
function TD(t = {}, a = !0) {
  const s = { on: {} },
    l = {},
    o = {};
  (Pi(s, Qf), (s._emitClasses = !0), (s.init = !1));
  const u = {},
    f = k1.map((h) => h.replace(/_/, '')),
    p = Object.assign({}, t);
  return (
    Object.keys(p).forEach((h) => {
      typeof t[h] > 'u' ||
        (f.indexOf(h) >= 0 ?
          Qa(t[h]) ? ((s[h] = {}), (o[h] = {}), Pi(s[h], t[h]), Pi(o[h], t[h]))
          : ((s[h] = t[h]), (o[h] = t[h]))
        : h.search(/on[A-Z]/) === 0 && typeof t[h] == 'function' ?
          a ? (l[`${h[2].toLowerCase()}${h.substr(3)}`] = t[h])
          : (s.on[`${h[2].toLowerCase()}${h.substr(3)}`] = t[h])
        : (u[h] = t[h]));
    }),
    ['navigation', 'pagination', 'scrollbar'].forEach((h) => {
      (s[h] === !0 && (s[h] = {}), s[h] === !1 && delete s[h]);
    }),
    { params: s, passedParams: o, rest: u, events: l }
  );
}
function _D(
  { el: t, nextEl: a, prevEl: s, paginationEl: l, scrollbarEl: o, swiper: u },
  f,
) {
  (q1(f) &&
    a &&
    s &&
    ((u.params.navigation.nextEl = a),
    (u.originalParams.navigation.nextEl = a),
    (u.params.navigation.prevEl = s),
    (u.originalParams.navigation.prevEl = s)),
    Y1(f) &&
      l &&
      ((u.params.pagination.el = l), (u.originalParams.pagination.el = l)),
    X1(f) &&
      o &&
      ((u.params.scrollbar.el = o), (u.originalParams.scrollbar.el = o)),
    u.init(t));
}
function ED(t, a, s, l, o) {
  const u = [];
  if (!a) return u;
  const f = (h) => {
    u.indexOf(h) < 0 && u.push(h);
  };
  if (s && l) {
    const h = l.map(o),
      m = s.map(o);
    (h.join('') !== m.join('') && f('children'),
      l.length !== s.length && f('children'));
  }
  return (
    k1
      .filter((h) => h[0] === '_')
      .map((h) => h.replace(/_/, ''))
      .forEach((h) => {
        if (h in t && h in a)
          if (Qa(t[h]) && Qa(a[h])) {
            const m = Object.keys(t[h]),
              v = Object.keys(a[h]);
            m.length !== v.length ?
              f(h)
            : (m.forEach((g) => {
                t[h][g] !== a[h][g] && f(h);
              }),
              v.forEach((g) => {
                t[h][g] !== a[h][g] && f(h);
              }));
          } else t[h] !== a[h] && f(h);
      }),
    u
  );
}
const CD = (t) => {
  !t ||
    t.destroyed ||
    !t.params.virtual ||
    (t.params.virtual && !t.params.virtual.enabled) ||
    (t.updateSlides(),
    t.updateProgress(),
    t.updateSlidesClasses(),
    t.emit('_virtualUpdated'),
    t.parallax &&
      t.params.parallax &&
      t.params.parallax.enabled &&
      t.parallax.setTranslate());
};
function uo() {
  return (
    (uo =
      Object.assign ?
        Object.assign.bind()
      : function (t) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var l in s)
              Object.prototype.hasOwnProperty.call(s, l) && (t[l] = s[l]);
          }
          return t;
        }),
    uo.apply(this, arguments)
  );
}
function K1(t) {
  return (
    t.type && t.type.displayName && t.type.displayName.includes('SwiperSlide')
  );
}
function F1(t) {
  const a = [];
  return (
    We.Children.toArray(t).forEach((s) => {
      K1(s) ?
        a.push(s)
      : s.props &&
        s.props.children &&
        F1(s.props.children).forEach((l) => a.push(l));
    }),
    a
  );
}
function AD(t) {
  const a = [],
    s = {
      'container-start': [],
      'container-end': [],
      'wrapper-start': [],
      'wrapper-end': [],
    };
  return (
    We.Children.toArray(t).forEach((l) => {
      if (K1(l)) a.push(l);
      else if (l.props && l.props.slot && s[l.props.slot])
        s[l.props.slot].push(l);
      else if (l.props && l.props.children) {
        const o = F1(l.props.children);
        o.length > 0 ? o.forEach((u) => a.push(u)) : s['container-end'].push(l);
      } else s['container-end'].push(l);
    }),
    { slides: a, slots: s }
  );
}
function MD(t, a, s) {
  if (!s) return null;
  const l = (v) => {
      let g = v;
      return (
        v < 0 ? (g = a.length + v) : g >= a.length && (g = g - a.length),
        g
      );
    },
    o =
      t.isHorizontal() ?
        { [t.rtlTranslate ? 'right' : 'left']: `${s.offset}px` }
      : { top: `${s.offset}px` },
    { from: u, to: f } = s,
    p = t.params.loop ? -a.length : 0,
    h = t.params.loop ? a.length * 2 : a.length,
    m = [];
  for (let v = p; v < h; v += 1) v >= u && v <= f && m.push(a[l(v)]);
  return m.map((v, g) =>
    We.cloneElement(v, {
      swiper: t,
      style: o,
      key: v.props.virtualIndex || v.key || `slide-${g}`,
    }),
  );
}
function Js(t, a) {
  return typeof window > 'u' ? D.useEffect(t, a) : D.useLayoutEffect(t, a);
}
const py = D.createContext(null),
  wD = D.createContext(null),
  Z1 = D.forwardRef(
    (
      {
        className: t,
        tag: a = 'div',
        wrapperTag: s = 'div',
        children: l,
        onSwiper: o,
        ...u
      } = {},
      f,
    ) => {
      let p = !1;
      const [h, m] = D.useState('swiper'),
        [v, g] = D.useState(null),
        [x, b] = D.useState(!1),
        A = D.useRef(!1),
        E = D.useRef(null),
        M = D.useRef(null),
        _ = D.useRef(null),
        C = D.useRef(null),
        w = D.useRef(null),
        U = D.useRef(null),
        V = D.useRef(null),
        $ = D.useRef(null),
        { params: X, passedParams: L, rest: W, events: Z } = TD(u),
        { slides: I, slots: J } = AD(l),
        ce = () => {
          b(!x);
        };
      Object.assign(X.on, {
        _containerClasses(q, ee) {
          m(ee);
        },
      });
      const oe = () => {
        (Object.assign(X.on, Z), (p = !0));
        const q = { ...X };
        if (
          (delete q.wrapperClass,
          (M.current = new Rd(q)),
          M.current.virtual && M.current.params.virtual.enabled)
        ) {
          M.current.virtual.slides = I;
          const ee = {
            cache: !1,
            slides: I,
            renderExternal: g,
            renderExternalUpdate: !1,
          };
          (Pi(M.current.params.virtual, ee),
            Pi(M.current.originalParams.virtual, ee));
        }
      };
      (E.current || oe(), M.current && M.current.on('_beforeBreakpoint', ce));
      const de = () => {
          p ||
            !Z ||
            !M.current ||
            Object.keys(Z).forEach((q) => {
              M.current.on(q, Z[q]);
            });
        },
        G = () => {
          !Z ||
            !M.current ||
            Object.keys(Z).forEach((q) => {
              M.current.off(q, Z[q]);
            });
        };
      (D.useEffect(() => () => {
        M.current && M.current.off('_beforeBreakpoint', ce);
      }),
        D.useEffect(() => {
          !A.current &&
            M.current &&
            (M.current.emitSlidesClasses(), (A.current = !0));
        }),
        Js(() => {
          if ((f && (f.current = E.current), !!E.current))
            return (
              M.current.destroyed && oe(),
              _D(
                {
                  el: E.current,
                  nextEl: w.current,
                  prevEl: U.current,
                  paginationEl: V.current,
                  scrollbarEl: $.current,
                  swiper: M.current,
                },
                X,
              ),
              o && !M.current.destroyed && o(M.current),
              () => {
                M.current && !M.current.destroyed && M.current.destroy(!0, !1);
              }
            );
        }, []),
        Js(() => {
          de();
          const q = ED(L, _.current, I, C.current, (ee) => ee.key);
          return (
            (_.current = L),
            (C.current = I),
            q.length &&
              M.current &&
              !M.current.destroyed &&
              xD({
                swiper: M.current,
                slides: I,
                passedParams: L,
                changedParams: q,
                nextEl: w.current,
                prevEl: U.current,
                scrollbarEl: $.current,
                paginationEl: V.current,
              }),
            () => {
              G();
            }
          );
        }),
        Js(() => {
          CD(M.current);
        }, [v]));
      function k() {
        return X.virtual ?
            MD(M.current, I, v)
          : I.map((q, ee) =>
              We.cloneElement(q, { swiper: M.current, swiperSlideIndex: ee }),
            );
      }
      return We.createElement(
        a,
        uo({ ref: E, className: Q1(`${h}${t ? ` ${t}` : ''}`) }, W),
        We.createElement(
          wD.Provider,
          { value: M.current },
          J['container-start'],
          We.createElement(
            s,
            { className: SD(X.wrapperClass) },
            J['wrapper-start'],
            k(),
            J['wrapper-end'],
          ),
          q1(X) &&
            We.createElement(
              We.Fragment,
              null,
              We.createElement('div', {
                ref: U,
                className: 'swiper-button-prev',
              }),
              We.createElement('div', {
                ref: w,
                className: 'swiper-button-next',
              }),
            ),
          X1(X) &&
            We.createElement('div', { ref: $, className: 'swiper-scrollbar' }),
          Y1(X) &&
            We.createElement('div', { ref: V, className: 'swiper-pagination' }),
          J['container-end'],
        ),
      );
    },
  );
Z1.displayName = 'Swiper';
const Zr = D.forwardRef(
  (
    {
      tag: t = 'div',
      children: a,
      className: s = '',
      swiper: l,
      zoom: o,
      lazy: u,
      virtualIndex: f,
      swiperSlideIndex: p,
      ...h
    } = {},
    m,
  ) => {
    const v = D.useRef(null),
      [g, x] = D.useState('swiper-slide'),
      [b, A] = D.useState(!1);
    function E(w, U, V) {
      U === v.current && x(V);
    }
    (Js(() => {
      if (
        (typeof p < 'u' && (v.current.swiperSlideIndex = p),
        m && (m.current = v.current),
        !(!v.current || !l))
      ) {
        if (l.destroyed) {
          g !== 'swiper-slide' && x('swiper-slide');
          return;
        }
        return (
          l.on('_slideClass', E),
          () => {
            l && l.off('_slideClass', E);
          }
        );
      }
    }),
      Js(() => {
        l && v.current && !l.destroyed && x(l.getSlideClasses(v.current));
      }, [l]));
    const M = {
        isActive: g.indexOf('swiper-slide-active') >= 0,
        isVisible: g.indexOf('swiper-slide-visible') >= 0,
        isPrev: g.indexOf('swiper-slide-prev') >= 0,
        isNext: g.indexOf('swiper-slide-next') >= 0,
      },
      _ = () => (typeof a == 'function' ? a(M) : a),
      C = () => {
        A(!0);
      };
    return We.createElement(
      t,
      uo(
        {
          'ref': v,
          'className': Q1(`${g}${s ? ` ${s}` : ''}`),
          'data-swiper-slide-index': f,
          'onLoad': C,
        },
        h,
      ),
      o &&
        We.createElement(
          py.Provider,
          { value: M },
          We.createElement(
            'div',
            {
              'className': 'swiper-zoom-container',
              'data-swiper-zoom': typeof o == 'number' ? o : void 0,
            },
            _(),
            u &&
              !b &&
              We.createElement('div', {
                className: 'swiper-lazy-preloader',
                ref: (w) => {
                  w && (w.lazyPreloaderManaged = !0);
                },
              }),
          ),
        ),
      !o &&
        We.createElement(
          py.Provider,
          { value: M },
          _(),
          u &&
            !b &&
            We.createElement('div', {
              className: 'swiper-lazy-preloader',
              ref: (w) => {
                w && (w.lazyPreloaderManaged = !0);
              },
            }),
        ),
    );
  },
);
Zr.displayName = 'SwiperSlide';
function $1(t, a, s, l) {
  return (
    t.params.createElements &&
      Object.keys(l).forEach((o) => {
        if (!s[o] && s.auto === !0) {
          let u = hn(t.el, `.${l[o]}`)[0];
          (u || ((u = ro('div', l[o])), (u.className = l[o]), t.el.append(u)),
            (s[o] = u),
            (a[o] = u));
        }
      }),
    s
  );
}
const gy =
  '<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';
function DD({ swiper: t, extendParams: a, on: s, emit: l }) {
  (a({
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
    (t.navigation = { nextEl: null, prevEl: null, arrowSvg: gy }));
  function o(b) {
    let A;
    return (
        b &&
          typeof b == 'string' &&
          t.isElement &&
          ((A = t.el.querySelector(b) || t.hostEl.querySelector(b)), A)
      ) ?
        A
      : (b &&
          (typeof b == 'string' && (A = [...document.querySelectorAll(b)]),
          (
            t.params.uniqueNavElements &&
            typeof b == 'string' &&
            A &&
            A.length > 1 &&
            t.el.querySelectorAll(b).length === 1
          ) ?
            (A = t.el.querySelector(b))
          : A && A.length === 1 && (A = A[0])),
        b && !A ? b : A);
  }
  function u(b, A) {
    const E = t.params.navigation;
    ((b = at(b)),
      b.forEach((M) => {
        M &&
          (M.classList[A ? 'add' : 'remove'](...E.disabledClass.split(' ')),
          M.tagName === 'BUTTON' && (M.disabled = A),
          t.params.watchOverflow &&
            t.enabled &&
            M.classList[t.isLocked ? 'add' : 'remove'](E.lockClass));
      }));
  }
  function f() {
    const { nextEl: b, prevEl: A } = t.navigation;
    if (t.params.loop) {
      (u(A, !1), u(b, !1));
      return;
    }
    (u(A, t.isBeginning && !t.params.rewind),
      u(b, t.isEnd && !t.params.rewind));
  }
  function p(b) {
    (b.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), l('navigationPrev')));
  }
  function h(b) {
    (b.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) &&
        (t.slideNext(), l('navigationNext')));
  }
  function m() {
    const b = t.params.navigation;
    if (
      ((t.params.navigation = $1(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        { nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' },
      )),
      !(b.nextEl || b.prevEl))
    )
      return;
    let A = o(b.nextEl),
      E = o(b.prevEl);
    (Object.assign(t.navigation, { nextEl: A, prevEl: E }),
      (A = at(A)),
      (E = at(E)));
    const M = (_, C) => {
      if (_) {
        if (
          b.addIcons &&
          _.matches('.swiper-button-next,.swiper-button-prev') &&
          !_.querySelector('svg')
        ) {
          const w = document.createElement('div');
          (sl(w, gy), _.appendChild(w.querySelector('svg')), w.remove());
        }
        _.addEventListener('click', C === 'next' ? h : p);
      }
      !t.enabled && _ && _.classList.add(...b.lockClass.split(' '));
    };
    (A.forEach((_) => M(_, 'next')), E.forEach((_) => M(_, 'prev')));
  }
  function v() {
    let { nextEl: b, prevEl: A } = t.navigation;
    ((b = at(b)), (A = at(A)));
    const E = (M, _) => {
      (M.removeEventListener('click', _ === 'next' ? h : p),
        M.classList.remove(...t.params.navigation.disabledClass.split(' ')));
    };
    (b.forEach((M) => E(M, 'next')), A.forEach((M) => E(M, 'prev')));
  }
  (s('init', () => {
    t.params.navigation.enabled === !1 ? x() : (m(), f());
  }),
    s('toEdge fromEdge lock unlock', () => {
      f();
    }),
    s('destroy', () => {
      v();
    }),
    s('enable disable', () => {
      let { nextEl: b, prevEl: A } = t.navigation;
      if (((b = at(b)), (A = at(A)), t.enabled)) {
        f();
        return;
      }
      [...b, ...A]
        .filter((E) => !!E)
        .forEach((E) => E.classList.add(t.params.navigation.lockClass));
    }),
    s('click', (b, A) => {
      let { nextEl: E, prevEl: M } = t.navigation;
      ((E = at(E)), (M = at(M)));
      const _ = A.target;
      let C = M.includes(_) || E.includes(_);
      if (t.isElement && !C) {
        const w = A.path || (A.composedPath && A.composedPath());
        w && (C = w.find((U) => E.includes(U) || M.includes(U)));
      }
      if (t.params.navigation.hideOnClick && !C) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === _ || t.pagination.el.contains(_))
        )
          return;
        let w;
        (E.length ?
          (w = E[0].classList.contains(t.params.navigation.hiddenClass))
        : M.length &&
          (w = M[0].classList.contains(t.params.navigation.hiddenClass)),
          l(w === !0 ? 'navigationShow' : 'navigationHide'),
          [...E, ...M]
            .filter((U) => !!U)
            .forEach((U) =>
              U.classList.toggle(t.params.navigation.hiddenClass),
            ));
      }
    }));
  const g = () => {
      (t.el.classList.remove(
        ...t.params.navigation.navigationDisabledClass.split(' '),
      ),
        m(),
        f());
    },
    x = () => {
      (t.el.classList.add(
        ...t.params.navigation.navigationDisabledClass.split(' '),
      ),
        v());
    };
  Object.assign(t.navigation, {
    enable: g,
    disable: x,
    update: f,
    init: m,
    destroy: v,
  });
}
function Qs(t = '') {
  return `.${t
    .trim()
    .replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g, '\\$1')
    .replace(/ /g, '.')}`;
}
function OD({ swiper: t, extendParams: a, on: s, emit: l }) {
  const o = 'swiper-pagination';
  (a({
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
      formatFractionCurrent: (_) => _,
      formatFractionTotal: (_) => _,
      bulletClass: `${o}-bullet`,
      bulletActiveClass: `${o}-bullet-active`,
      modifierClass: `${o}-`,
      currentClass: `${o}-current`,
      totalClass: `${o}-total`,
      hiddenClass: `${o}-hidden`,
      progressbarFillClass: `${o}-progressbar-fill`,
      progressbarOppositeClass: `${o}-progressbar-opposite`,
      clickableClass: `${o}-clickable`,
      lockClass: `${o}-lock`,
      horizontalClass: `${o}-horizontal`,
      verticalClass: `${o}-vertical`,
      paginationDisabledClass: `${o}-disabled`,
    },
  }),
    (t.pagination = { el: null, bullets: [] }));
  let u,
    f = 0;
  function p() {
    return (
      !t.params.pagination.el ||
      !t.pagination.el ||
      (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
    );
  }
  function h(_, C) {
    const { bulletActiveClass: w } = t.params.pagination;
    _ &&
      ((_ = _[`${C === 'prev' ? 'previous' : 'next'}ElementSibling`]),
      _ &&
        (_.classList.add(`${w}-${C}`),
        (_ = _[`${C === 'prev' ? 'previous' : 'next'}ElementSibling`]),
        _ && _.classList.add(`${w}-${C}-${C}`)));
  }
  function m(_, C, w) {
    if (((_ = _ % w), (C = C % w), C === _ + 1)) return 'next';
    if (C === _ - 1) return 'previous';
  }
  function v(_) {
    const C = _.target.closest(Qs(t.params.pagination.bulletClass));
    if (!C) return;
    _.preventDefault();
    const w = oo(C) * t.params.slidesPerGroup;
    if (t.params.loop) {
      if (t.realIndex === w) return;
      const U = m(t.realIndex, w, t.slides.length);
      U === 'next' ? t.slideNext()
      : U === 'previous' ? t.slidePrev()
      : t.slideToLoop(w);
    } else t.slideTo(w);
  }
  function g() {
    const _ = t.rtl,
      C = t.params.pagination;
    if (p()) return;
    let w = t.pagination.el;
    w = at(w);
    let U, V;
    const $ =
        t.virtual && t.params.virtual.enabled ?
          t.virtual.slides.length
        : t.slides.length,
      X =
        t.params.loop ?
          Math.ceil($ / t.params.slidesPerGroup)
        : t.snapGrid.length;
    if (
      (t.params.loop ?
        ((V = t.previousRealIndex || 0),
        (U =
          t.params.slidesPerGroup > 1 ?
            Math.floor(t.realIndex / t.params.slidesPerGroup)
          : t.realIndex))
      : typeof t.snapIndex < 'u' ?
        ((U = t.snapIndex), (V = t.previousSnapIndex))
      : ((V = t.previousIndex || 0), (U = t.activeIndex || 0)),
      C.type === 'bullets' &&
        t.pagination.bullets &&
        t.pagination.bullets.length > 0)
    ) {
      const L = t.pagination.bullets;
      let W, Z, I;
      if (
        (C.dynamicBullets &&
          ((u = Yf(L[0], t.isHorizontal() ? 'width' : 'height')),
          w.forEach((J) => {
            J.style[t.isHorizontal() ? 'width' : 'height'] =
              `${u * (C.dynamicMainBullets + 4)}px`;
          }),
          C.dynamicMainBullets > 1 &&
            V !== void 0 &&
            ((f += U - (V || 0)),
            f > C.dynamicMainBullets - 1 ?
              (f = C.dynamicMainBullets - 1)
            : f < 0 && (f = 0)),
          (W = Math.max(U - f, 0)),
          (Z = W + (Math.min(L.length, C.dynamicMainBullets) - 1)),
          (I = (Z + W) / 2)),
        L.forEach((J) => {
          const ce = [
            ...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(
              (oe) => `${C.bulletActiveClass}${oe}`,
            ),
          ]
            .map((oe) =>
              typeof oe == 'string' && oe.includes(' ') ? oe.split(' ') : oe,
            )
            .flat();
          J.classList.remove(...ce);
        }),
        w.length > 1)
      )
        L.forEach((J) => {
          const ce = oo(J);
          (ce === U ?
            J.classList.add(...C.bulletActiveClass.split(' '))
          : t.isElement && J.setAttribute('part', 'bullet'),
            C.dynamicBullets &&
              (ce >= W &&
                ce <= Z &&
                J.classList.add(...`${C.bulletActiveClass}-main`.split(' ')),
              ce === W && h(J, 'prev'),
              ce === Z && h(J, 'next')));
        });
      else {
        const J = L[U];
        if (
          (J && J.classList.add(...C.bulletActiveClass.split(' ')),
          t.isElement &&
            L.forEach((ce, oe) => {
              ce.setAttribute('part', oe === U ? 'bullet-active' : 'bullet');
            }),
          C.dynamicBullets)
        ) {
          const ce = L[W],
            oe = L[Z];
          for (let de = W; de <= Z; de += 1)
            L[de] &&
              L[de].classList.add(...`${C.bulletActiveClass}-main`.split(' '));
          (h(ce, 'prev'), h(oe, 'next'));
        }
      }
      if (C.dynamicBullets) {
        const J = Math.min(L.length, C.dynamicMainBullets + 4),
          ce = (u * J - u) / 2 - I * u,
          oe = _ ? 'right' : 'left';
        L.forEach((de) => {
          de.style[t.isHorizontal() ? oe : 'top'] = `${ce}px`;
        });
      }
    }
    w.forEach((L, W) => {
      if (
        (C.type === 'fraction' &&
          (L.querySelectorAll(Qs(C.currentClass)).forEach((Z) => {
            Z.textContent = C.formatFractionCurrent(U + 1);
          }),
          L.querySelectorAll(Qs(C.totalClass)).forEach((Z) => {
            Z.textContent = C.formatFractionTotal(X);
          })),
        C.type === 'progressbar')
      ) {
        let Z;
        C.progressbarOpposite ?
          (Z = t.isHorizontal() ? 'vertical' : 'horizontal')
        : (Z = t.isHorizontal() ? 'horizontal' : 'vertical');
        const I = (U + 1) / X;
        let J = 1,
          ce = 1;
        (Z === 'horizontal' ? (J = I) : (ce = I),
          L.querySelectorAll(Qs(C.progressbarFillClass)).forEach((oe) => {
            ((oe.style.transform = `translate3d(0,0,0) scaleX(${J}) scaleY(${ce})`),
              (oe.style.transitionDuration = `${t.params.speed}ms`));
          }));
      }
      (C.type === 'custom' && C.renderCustom ?
        (sl(L, C.renderCustom(t, U + 1, X)),
        W === 0 && l('paginationRender', L))
      : (W === 0 && l('paginationRender', L), l('paginationUpdate', L)),
        t.params.watchOverflow &&
          t.enabled &&
          L.classList[t.isLocked ? 'add' : 'remove'](C.lockClass));
    });
  }
  function x() {
    const _ = t.params.pagination;
    if (p()) return;
    const C =
      t.virtual && t.params.virtual.enabled ? t.virtual.slides.length
      : t.grid && t.params.grid.rows > 1 ?
        t.slides.length / Math.ceil(t.params.grid.rows)
      : t.slides.length;
    let w = t.pagination.el;
    w = at(w);
    let U = '';
    if (_.type === 'bullets') {
      let V =
        t.params.loop ?
          Math.ceil(C / t.params.slidesPerGroup)
        : t.snapGrid.length;
      t.params.freeMode && t.params.freeMode.enabled && V > C && (V = C);
      for (let $ = 0; $ < V; $ += 1)
        _.renderBullet ?
          (U += _.renderBullet.call(t, $, _.bulletClass))
        : (U += `<${_.bulletElement} ${t.isElement ? 'part="bullet"' : ''} class="${_.bulletClass}"></${_.bulletElement}>`);
    }
    (_.type === 'fraction' &&
      (_.renderFraction ?
        (U = _.renderFraction.call(t, _.currentClass, _.totalClass))
      : (U = `<span class="${_.currentClass}"></span> / <span class="${_.totalClass}"></span>`)),
      _.type === 'progressbar' &&
        (_.renderProgressbar ?
          (U = _.renderProgressbar.call(t, _.progressbarFillClass))
        : (U = `<span class="${_.progressbarFillClass}"></span>`)),
      (t.pagination.bullets = []),
      w.forEach((V) => {
        (_.type !== 'custom' && sl(V, U || ''),
          _.type === 'bullets' &&
            t.pagination.bullets.push(
              ...V.querySelectorAll(Qs(_.bulletClass)),
            ));
      }),
      _.type !== 'custom' && l('paginationRender', w[0]));
  }
  function b() {
    t.params.pagination = $1(
      t,
      t.originalParams.pagination,
      t.params.pagination,
      { el: 'swiper-pagination' },
    );
    const _ = t.params.pagination;
    if (!_.el) return;
    let C;
    (typeof _.el == 'string' && t.isElement && (C = t.el.querySelector(_.el)),
      !C &&
        typeof _.el == 'string' &&
        (C = [...document.querySelectorAll(_.el)]),
      C || (C = _.el),
      !(!C || C.length === 0) &&
        (t.params.uniqueNavElements &&
          typeof _.el == 'string' &&
          Array.isArray(C) &&
          C.length > 1 &&
          ((C = [...t.el.querySelectorAll(_.el)]),
          C.length > 1 && (C = C.find((w) => V1(w, '.swiper')[0] === t.el))),
        Array.isArray(C) && C.length === 1 && (C = C[0]),
        Object.assign(t.pagination, { el: C }),
        (C = at(C)),
        C.forEach((w) => {
          (_.type === 'bullets' &&
            _.clickable &&
            w.classList.add(...(_.clickableClass || '').split(' ')),
            w.classList.add(_.modifierClass + _.type),
            w.classList.add(
              t.isHorizontal() ? _.horizontalClass : _.verticalClass,
            ),
            _.type === 'bullets' &&
              _.dynamicBullets &&
              (w.classList.add(`${_.modifierClass}${_.type}-dynamic`),
              (f = 0),
              _.dynamicMainBullets < 1 && (_.dynamicMainBullets = 1)),
            _.type === 'progressbar' &&
              _.progressbarOpposite &&
              w.classList.add(_.progressbarOppositeClass),
            _.clickable && w.addEventListener('click', v),
            t.enabled || w.classList.add(_.lockClass));
        })));
  }
  function A() {
    const _ = t.params.pagination;
    if (p()) return;
    let C = t.pagination.el;
    (C &&
      ((C = at(C)),
      C.forEach((w) => {
        (w.classList.remove(_.hiddenClass),
          w.classList.remove(_.modifierClass + _.type),
          w.classList.remove(
            t.isHorizontal() ? _.horizontalClass : _.verticalClass,
          ),
          _.clickable &&
            (w.classList.remove(...(_.clickableClass || '').split(' ')),
            w.removeEventListener('click', v)));
      })),
      t.pagination.bullets &&
        t.pagination.bullets.forEach((w) =>
          w.classList.remove(..._.bulletActiveClass.split(' ')),
        ));
  }
  (s('changeDirection', () => {
    if (!t.pagination || !t.pagination.el) return;
    const _ = t.params.pagination;
    let { el: C } = t.pagination;
    ((C = at(C)),
      C.forEach((w) => {
        (w.classList.remove(_.horizontalClass, _.verticalClass),
          w.classList.add(
            t.isHorizontal() ? _.horizontalClass : _.verticalClass,
          ));
      }));
  }),
    s('init', () => {
      t.params.pagination.enabled === !1 ? M() : (b(), x(), g());
    }),
    s('activeIndexChange', () => {
      typeof t.snapIndex > 'u' && g();
    }),
    s('snapIndexChange', () => {
      g();
    }),
    s('snapGridLengthChange', () => {
      (x(), g());
    }),
    s('destroy', () => {
      A();
    }),
    s('enable disable', () => {
      let { el: _ } = t.pagination;
      _ &&
        ((_ = at(_)),
        _.forEach((C) =>
          C.classList[t.enabled ? 'remove' : 'add'](
            t.params.pagination.lockClass,
          ),
        ));
    }),
    s('lock unlock', () => {
      g();
    }),
    s('click', (_, C) => {
      const w = C.target,
        U = at(t.pagination.el);
      if (
        t.params.pagination.el &&
        t.params.pagination.hideOnClick &&
        U &&
        U.length > 0 &&
        !w.classList.contains(t.params.pagination.bulletClass)
      ) {
        if (
          t.navigation &&
          ((t.navigation.nextEl && w === t.navigation.nextEl) ||
            (t.navigation.prevEl && w === t.navigation.prevEl))
        )
          return;
        const V = U[0].classList.contains(t.params.pagination.hiddenClass);
        (l(V === !0 ? 'paginationShow' : 'paginationHide'),
          U.forEach(($) =>
            $.classList.toggle(t.params.pagination.hiddenClass),
          ));
      }
    }));
  const E = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass);
      let { el: _ } = t.pagination;
      (_ &&
        ((_ = at(_)),
        _.forEach((C) =>
          C.classList.remove(t.params.pagination.paginationDisabledClass),
        )),
        b(),
        x(),
        g());
    },
    M = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass);
      let { el: _ } = t.pagination;
      (_ &&
        ((_ = at(_)),
        _.forEach((C) =>
          C.classList.add(t.params.pagination.paginationDisabledClass),
        )),
        A());
    };
  Object.assign(t.pagination, {
    enable: E,
    disable: M,
    render: x,
    update: g,
    init: b,
    destroy: A,
  });
}
function ND({ swiper: t, extendParams: a, on: s, emit: l, params: o }) {
  ((t.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    a({
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
  let u,
    f,
    p = o && o.autoplay ? o.autoplay.delay : 3e3,
    h = o && o.autoplay ? o.autoplay.delay : 3e3,
    m,
    v = new Date().getTime(),
    g,
    x,
    b,
    A,
    E,
    M;
  function _(k) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (k.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener('transitionend', _),
        !(M || (k.detail && k.detail.bySwiperTouchMove)) && W()));
  }
  const C = () => {
      if (t.destroyed || !t.autoplay.running) return;
      t.autoplay.paused ? (g = !0) : g && ((h = m), (g = !1));
      const k = t.autoplay.paused ? m : v + h - new Date().getTime();
      ((t.autoplay.timeLeft = k),
        l('autoplayTimeLeft', k, k / p),
        (f = requestAnimationFrame(() => {
          C();
        })));
    },
    w = () => {
      let k;
      return (
        t.virtual && t.params.virtual.enabled ?
          (k = t.slides.find((ee) =>
            ee.classList.contains('swiper-slide-active'),
          ))
        : (k = t.slides[t.activeIndex]),
        k ? parseInt(k.getAttribute('data-swiper-autoplay'), 10) : void 0
      );
    },
    U = () => {
      let k = t.params.autoplay.delay;
      const q = w();
      return (!Number.isNaN(q) && q > 0 && (k = q), k);
    },
    V = (k) => {
      if (t.destroyed || !t.autoplay.running) return;
      (cancelAnimationFrame(f), C());
      let q = k;
      (typeof q > 'u' && ((q = U()), (p = q), (h = q)), (m = q));
      const ee = t.params.speed,
        re = () => {
          !t ||
            t.destroyed ||
            (t.params.autoplay.reverseDirection ?
              !t.isBeginning || t.params.loop || t.params.rewind ?
                (t.slidePrev(ee, !0, !0), l('autoplay'))
              : t.params.autoplay.stopOnLastSlide ||
                (t.slideTo(t.slides.length - 1, ee, !0, !0), l('autoplay'))
            : !t.isEnd || t.params.loop || t.params.rewind ?
              (t.slideNext(ee, !0, !0), l('autoplay'))
            : t.params.autoplay.stopOnLastSlide ||
              (t.slideTo(0, ee, !0, !0), l('autoplay')),
            t.params.cssMode &&
              ((v = new Date().getTime()),
              requestAnimationFrame(() => {
                V();
              })));
        };
      return (
        q > 0 ?
          (clearTimeout(u),
          (u = setTimeout(() => {
            re();
          }, q)))
        : requestAnimationFrame(() => {
            re();
          }),
        q
      );
    },
    $ = () => {
      ((v = new Date().getTime()),
        (t.autoplay.running = !0),
        V(),
        l('autoplayStart'));
    },
    X = () => {
      ((t.autoplay.running = !1),
        clearTimeout(u),
        cancelAnimationFrame(f),
        l('autoplayStop'));
    },
    L = (k, q) => {
      if (t.destroyed || !t.autoplay.running) return;
      (clearTimeout(u), k || (E = !0));
      const ee = () => {
        (l('autoplayPause'),
          t.params.autoplay.waitForTransition ?
            t.wrapperEl.addEventListener('transitionend', _)
          : W());
      };
      if (((t.autoplay.paused = !0), q)) {
        ee();
        return;
      }
      ((m = (m || t.params.autoplay.delay) - (new Date().getTime() - v)),
        !(t.isEnd && m < 0 && !t.params.loop) && (m < 0 && (m = 0), ee()));
    },
    W = () => {
      (t.isEnd && m < 0 && !t.params.loop) ||
        t.destroyed ||
        !t.autoplay.running ||
        ((v = new Date().getTime()),
        E ? ((E = !1), V(m)) : V(),
        (t.autoplay.paused = !1),
        l('autoplayResume'));
    },
    Z = () => {
      if (t.destroyed || !t.autoplay.running) return;
      const k = pn();
      (k.visibilityState === 'hidden' && ((E = !0), L(!0)),
        k.visibilityState === 'visible' && W());
    },
    I = (k) => {
      k.pointerType === 'mouse' &&
        ((E = !0), (M = !0), !(t.animating || t.autoplay.paused) && L(!0));
    },
    J = (k) => {
      k.pointerType === 'mouse' && ((M = !1), t.autoplay.paused && W());
    },
    ce = () => {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.el.addEventListener('pointerenter', I),
        t.el.addEventListener('pointerleave', J));
    },
    oe = () => {
      t.el &&
        typeof t.el != 'string' &&
        (t.el.removeEventListener('pointerenter', I),
        t.el.removeEventListener('pointerleave', J));
    },
    de = () => {
      pn().addEventListener('visibilitychange', Z);
    },
    G = () => {
      pn().removeEventListener('visibilitychange', Z);
    };
  (s('init', () => {
    t.params.autoplay.enabled && (ce(), de(), $());
  }),
    s('destroy', () => {
      (oe(), G(), t.autoplay.running && X());
    }),
    s('_freeModeStaticRelease', () => {
      (b || E) && W();
    }),
    s('_freeModeNoMomentumRelease', () => {
      t.params.autoplay.disableOnInteraction ? X() : L(!0, !0);
    }),
    s('beforeTransitionStart', (k, q, ee) => {
      t.destroyed ||
        !t.autoplay.running ||
        (ee || !t.params.autoplay.disableOnInteraction ? L(!0, !0) : X());
    }),
    s('sliderFirstMove', () => {
      if (!(t.destroyed || !t.autoplay.running)) {
        if (t.params.autoplay.disableOnInteraction) {
          X();
          return;
        }
        ((x = !0),
          (b = !1),
          (E = !1),
          (A = setTimeout(() => {
            ((E = !0), (b = !0), L(!0));
          }, 200)));
      }
    }),
    s('touchEnd', () => {
      if (!(t.destroyed || !t.autoplay.running || !x)) {
        if (
          (clearTimeout(A),
          clearTimeout(u),
          t.params.autoplay.disableOnInteraction)
        ) {
          ((b = !1), (x = !1));
          return;
        }
        (b && t.params.cssMode && W(), (b = !1), (x = !1));
      }
    }),
    s('slideChange', () => {
      t.destroyed ||
        !t.autoplay.running ||
        (t.autoplay.paused && ((m = U()), (p = U())));
    }),
    Object.assign(t.autoplay, { start: $, stop: X, pause: L, resume: W }));
}
const RD = () =>
    S.jsxs('div', {
      className: 'banner',
      children: [
        S.jsx('button', {
          className: 'banner__arrow banner__arrow--prev swiper-btn-prev',
          children: '<',
        }),
        S.jsx('div', {
          className: 'banner__slider',
          children: S.jsxs(Z1, {
            modules: [ND, OD, DD],
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
              S.jsx(Zr, {
                children: S.jsx('img', {
                  src: 'img/main-banner.png',
                  alt: 'iPhone 14 Pro',
                  className: 'banner__image',
                }),
              }),
              S.jsx(Zr, {
                children: S.jsx('img', {
                  src: 'img/banner-phones.png',
                  alt: 'Phones',
                  className: 'banner__image',
                }),
              }),
              S.jsx(Zr, {
                children: S.jsx('img', {
                  src: 'img/banner-accessories.png',
                  alt: 'Accessories',
                  className: 'banner__image',
                }),
              }),
            ],
          }),
        }),
        S.jsx('button', {
          className: 'banner__arrow banner__arrow--next swiper-btn-next',
          children: '>',
        }),
        S.jsx('div', { className: 'banner__pagination' }),
      ],
    }),
  jD = '_loader_104cg_14',
  LD = { loader: jD },
  I1 = () => S.jsx('span', { className: LD.loader }),
  zD = () => {
    const [t, a] = D.useState([]),
      [s, l] = D.useState([]),
      [o, u] = D.useState([]),
      [f, p] = D.useState([]),
      [h, m] = D.useState(!0),
      v = D.useRef(null),
      g = D.useRef(null),
      x = [...t, ...s, ...o],
      b = bo(f).slice(0, 12),
      A = hl(x).slice(0, 12),
      E = (M, _) => {
        if (M.current) {
          const U =
            (M.current.querySelector('article')?.offsetWidth || 272) + 16;
          M.current.scrollBy({
            left: _ === 'left' ? -U : U,
            behavior: 'smooth',
          });
        }
      };
    return (
      D.useEffect(() => {
        Promise.all([
          ho(),
          mo(),
          po(),
          H_(),
          new Promise((M) => setTimeout(M, 1e3)),
        ])
          .then(([M, _, C, w]) => {
            (a(M), l(_), u(C), p(w));
          })
          .catch((M) => console.error('Error loading data:', M))
          .finally(() => m(!1));
      }, []),
      h ?
        S.jsx('main', {
          className: he.home,
          children: S.jsx('div', {
            className: he['loader-wrapper'],
            children: S.jsx(I1, {}),
          }),
        })
      : S.jsx('main', {
          className: he.home,
          children: S.jsxs('div', {
            className: he.container,
            children: [
              S.jsxs('section', {
                className: he.hero,
                children: [
                  S.jsx('h1', {
                    className: he.hero__title,
                    children: 'Welcome to Nice Gadgets store!',
                  }),
                  S.jsx(RD, {}),
                ],
              }),
              S.jsxs('section', {
                className: he.section,
                children: [
                  S.jsxs('div', {
                    className: he.section__header,
                    children: [
                      S.jsx('h2', {
                        className: he.section__title,
                        children: 'Brand new models',
                      }),
                      S.jsxs('div', {
                        className: he.section__arrows,
                        children: [
                          S.jsx('button', {
                            'className': he['arrow-btn'],
                            'aria-label': 'Previous',
                            'onClick': () => E(v, 'left'),
                            'children': '<',
                          }),
                          S.jsx('button', {
                            'className': he['arrow-btn'],
                            'aria-label': 'Next',
                            'onClick': () => E(v, 'right'),
                            'children': '>',
                          }),
                        ],
                      }),
                    ],
                  }),
                  S.jsx('div', {
                    className: he['products-slider'],
                    ref: v,
                    children: S.jsx('div', {
                      className: he['products-slider__track'],
                      children: b.map((M) => S.jsx(Xa, { product: M }, M.id)),
                    }),
                  }),
                ],
              }),
              S.jsxs('section', {
                className: he.section,
                children: [
                  S.jsx('h2', {
                    className: he.section__title,
                    children: 'Shop by category',
                  }),
                  S.jsxs('div', {
                    className: he.categories,
                    children: [
                      S.jsxs(an, {
                        to: '/phones',
                        className: he['category-card'],
                        children: [
                          S.jsx('div', {
                            className: he['category-card__image-wrapper'],
                            children: S.jsx('img', {
                              src: '/img/category-phones.png',
                              alt: 'Mobile phones',
                              className: he['category-card__image'],
                            }),
                          }),
                          S.jsxs('div', {
                            className: he['category-card__info'],
                            children: [
                              S.jsx('h3', {
                                className: he['category-card__title'],
                                children: 'Mobile phones',
                              }),
                              S.jsxs('p', {
                                className: he['category-card__count'],
                                children: [t.length, ' models'],
                              }),
                            ],
                          }),
                        ],
                      }),
                      S.jsxs(an, {
                        to: '/tablets',
                        className: he['category-card'],
                        children: [
                          S.jsx('div', {
                            className: he['category-card__image-wrapper'],
                            children: S.jsx('img', {
                              src: '/img/category-tablets.png',
                              alt: 'Tablets',
                              className: he['category-card__image-tablets'],
                            }),
                          }),
                          S.jsxs('div', {
                            className: he['category-card__info'],
                            children: [
                              S.jsx('h3', {
                                className: he['category-card__title'],
                                children: 'Tablets',
                              }),
                              S.jsxs('p', {
                                className: he['category-card__count'],
                                children: [s.length, ' models'],
                              }),
                            ],
                          }),
                        ],
                      }),
                      S.jsxs(an, {
                        to: '/accessories',
                        className: he['category-card'],
                        children: [
                          S.jsx('div', {
                            className: he['category-card__image-wrapper'],
                            children: S.jsx('img', {
                              src: '/img/category-accessories.png',
                              alt: 'Accessories',
                              className: he['category-card__image-access'],
                            }),
                          }),
                          S.jsxs('div', {
                            className: he['category-card__info'],
                            children: [
                              S.jsx('h3', {
                                className: he['category-card__title'],
                                children: 'Accessories',
                              }),
                              S.jsxs('p', {
                                className: he['category-card__count'],
                                children: [o.length, ' models'],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              S.jsxs('section', {
                className: he.section,
                children: [
                  S.jsxs('div', {
                    className: he.section__header,
                    children: [
                      S.jsx('h2', {
                        className: he.section__title,
                        children: 'Hot prices',
                      }),
                      S.jsxs('div', {
                        className: he.section__arrows,
                        children: [
                          S.jsx('button', {
                            'className': he['arrow-btn'],
                            'aria-label': 'Previous',
                            'onClick': () => E(g, 'left'),
                            'children': '<',
                          }),
                          S.jsx('button', {
                            'className': he['arrow-btn'],
                            'aria-label': 'Next',
                            'onClick': () => E(g, 'right'),
                            'children': '>',
                          }),
                        ],
                      }),
                    ],
                  }),
                  S.jsx('div', {
                    className: he['products-slider'],
                    ref: g,
                    children: S.jsx('div', {
                      className: he['products-slider__track'],
                      children: A.map((M) => S.jsx(Xa, { product: M }, M.id)),
                    }),
                  }),
                ],
              }),
            ],
          }),
        })
    );
  },
  VD = () => {
    const [t, a] = D.useState([]),
      [, s] = D.useState(!0),
      l = async () => {
        s(!0);
        try {
          const o = JSON.parse(localStorage.getItem('favorites') || '[]'),
            [u, f, p] = await Promise.all([ho(), mo(), po()]),
            m = [...u, ...f, ...p].filter((v) => o.includes('' + v.id));
          a(m);
        } catch (o) {
          console.error('Failed to load favorites:', o);
        } finally {
          s(!1);
        }
      };
    return (
      D.useEffect(() => {
        l();
      }, []),
      S.jsx(S.Fragment, {
        children: S.jsx('div', {
          className: 'favorites-page',
          children: S.jsxs('div', {
            className: 'favorites-page__container',
            children: [
              S.jsx(ki, {}),
              S.jsxs('div', {
                className: 'favorites-page__text',
                children: [
                  S.jsx('h1', {
                    className: 'favorites-page__title',
                    children: 'Favourites',
                  }),
                  S.jsxs('div', {
                    className: 'favorites-page__items-number',
                    children: [t.length, ' items'],
                  }),
                ],
              }),
              S.jsx('div', {
                className: 'favorites-page__all-favorites',
                children: t.map((o) =>
                  S.jsx(Xa, { product: o, onFavoriteChange: l }, o.id),
                ),
              }),
            ],
          }),
        }),
      })
    );
  },
  BD = ({ images: t, name: a }) => {
    const [s, l] = D.useState(t[0]);
    return (
      D.useEffect(() => {
        l(t[0]);
      }, [t]),
      S.jsxs('div', {
        className: 'gallery',
        children: [
          S.jsx('div', {
            className: 'gallery__thumbs',
            children: t.map((o, u) =>
              S.jsx(
                'div',
                {
                  className: `thumb ${s === o ? 'active' : ''}`,
                  onClick: () => l(o),
                  children: S.jsx('img', {
                    src: `/${o}`,
                    alt: `${a} thumbnail ${u + 1}`,
                  }),
                },
                u,
              ),
            ),
          }),
          S.jsx('div', {
            className: 'gallery__main',
            children: S.jsx('img', { src: `/${s}`, alt: a }),
          }),
        ],
      })
    );
  };
var yf = { exports: {} };
var vy;
function UD() {
  return (
    vy ||
      ((vy = 1),
      (function (t) {
        (function () {
          var a = {}.hasOwnProperty;
          function s() {
            for (var u = '', f = 0; f < arguments.length; f++) {
              var p = arguments[f];
              p && (u = o(u, l(p)));
            }
            return u;
          }
          function l(u) {
            if (typeof u == 'string' || typeof u == 'number') return u;
            if (typeof u != 'object') return '';
            if (Array.isArray(u)) return s.apply(null, u);
            if (
              u.toString !== Object.prototype.toString &&
              !u.toString.toString().includes('[native code]')
            )
              return u.toString();
            var f = '';
            for (var p in u) a.call(u, p) && u[p] && (f = o(f, p));
            return f;
          }
          function o(u, f) {
            return (
              f ?
                u ? u + ' ' + f
                : u + f
              : u
            );
          }
          t.exports ?
            ((s.default = s), (t.exports = s))
          : (window.classNames = s);
        })();
      })(yf)),
    yf.exports
  );
}
var HD = UD();
const yy = by(HD),
  PD = (t) => {
    const { color: a, to: s, selected: l = !1 } = t;
    return S.jsx(an, {
      to: s,
      className: yy('color-link', { 'color-link--active': l }),
      children: S.jsx('span', {
        className: yy('color-link__circle', {
          'color-link--green': a === 'green',
          'color-link--black': a === 'black',
          'color-link--purple': a === 'purple',
          'color-link--red': a === 'red',
          'color-link--white': a === 'white',
          'color-link--yellow': a === 'yellow',
          'color-link--gold': a === 'gold',
          'color-link--midnightgreen': a === 'midnightgreen',
          'color-link--silver': a === 'silver',
          'color-link--spacegray': a === 'spacegray',
          'color-link--rosegold': a === 'rosegold',
          'color-link--coral': a === 'coral',
          'color-link--spaceblack': a === 'spaceblack',
          'color-link--midnight': a === 'midnight',
          'color-link--pink': a === 'pink',
          'color-link--blue': a === 'blue',
          'color-link--sierrablue': a === 'sierrablue',
          'color-link--graphite': a === 'graphite',
        }),
      }),
    });
  },
  GD = ({
    namespaceId: t,
    colorsAvailable: a,
    currentColor: s,
    capacityAvailable: l,
    currentCapacity: o,
    onCapacityChange: u,
  }) => {
    const { category: f } = Zf(),
      p = (h, m) => {
        const v = h.toLowerCase().replace(/\s+/g, '-'),
          g = m.toLowerCase().replace(/\s+/g, '-');
        return `${t}-${v}-${g}`;
      };
    return S.jsxs('div', {
      className: 'product-options',
      children: [
        S.jsx('div', {
          className: 'product-options__title',
          children: 'Available colors',
        }),
        S.jsx('div', {
          className: 'product-options__colors',
          children: S.jsx('ul', {
            className: 'product-options__list',
            children: a.map((h) => {
              const m = p(o, h),
                v = `/${f}/${m}`,
                g = h.toLowerCase().replace(/\s+/g, '');
              return S.jsx(
                'li',
                {
                  className: 'product-options__item',
                  children: S.jsx(PD, { to: v, color: g, selected: s === h }),
                },
                h,
              );
            }),
          }),
        }),
        S.jsx('div', {
          className: 'product-options__title--capacity',
          children: 'Select capacity',
        }),
        S.jsx('div', {
          className: 'product-options__ram',
          children: l.map((h) =>
            S.jsx(
              'button',
              {
                type: 'button',
                className: `product-options__ram-item ${o === h ? 'product-options__ram-item--active' : ''}`,
                onClick: () => u(p(h, s)),
                children: h,
              },
              h,
            ),
          ),
        }),
      ],
    });
  },
  kD = ({ priceRegular: t, priceDiscount: a }) =>
    S.jsxs('div', {
      className: 'purchase',
      children: [
        S.jsxs('div', {
          className: 'purchase-price',
          children: [
            S.jsxs('span', {
              className: 'purchase-price__current',
              children: ['$', a],
            }),
            S.jsxs('span', {
              className: 'purchase-price__full',
              children: ['$', t],
            }),
          ],
        }),
        S.jsx('div', {
          className: 'purchase__buttons',
          children: S.jsx(qy, {
            onAddToCart: () => console.log('Added to cart'),
            onToggleFavorite: () => console.log('Toggled favorite'),
          }),
        }),
      ],
    }),
  qD = ({ description: t }) =>
    S.jsx('div', {
      className: 'ProductDetail',
      children: S.jsxs('div', {
        className: 'ProductDetail__about',
        children: [
          S.jsx('h3', {
            className: 'ProductDetail__about-title',
            children: 'About',
          }),
          S.jsx('div', {
            className: 'ProductDetail__about-main',
            children: t.map((a, s) =>
              S.jsxs(
                'div',
                {
                  className: 'ProductDetail__about-main',
                  children: [
                    S.jsx('h4', {
                      className: 'ProductDetail__about-main-title',
                      children: a.title,
                    }),
                    a.text.map((l, o) =>
                      S.jsx(
                        'span',
                        {
                          className: 'ProductDetail__about-main-second',
                          children: l,
                        },
                        o,
                      ),
                    ),
                  ],
                },
                s,
              ),
            ),
          }),
        ],
      }),
    }),
  YD = ({
    screen: t,
    resolution: a,
    processor: s,
    ram: l,
    capacity: o,
    camera: u,
    zoom: f,
    cell: p,
  }) => {
    const h = [
      { label: 'Screen', value: t },
      { label: 'Resolution', value: a },
      { label: 'Processor', value: s },
      { label: 'RAM', value: l },
      { label: 'Built in memory', value: o },
      { label: 'Camera', value: u },
      { label: 'Zoom', value: f },
      { label: 'Cell', value: String(p) },
    ];
    return S.jsxs('div', {
      className: 'TechSpecs',
      children: [
        S.jsx('h3', { className: 'TechSpecs__title', children: 'Tech specs' }),
        h.map(
          (m) =>
            m.value &&
            S.jsxs(
              'p',
              {
                className: 'TechSpecs__item',
                children: [
                  S.jsx('span', {
                    className: 'TechSpecs__name',
                    children: m.label,
                  }),
                  S.jsx('span', {
                    className: 'TechSpecs__value',
                    children: m.value,
                  }),
                ],
              },
              m.label,
            ),
        ),
      ],
    });
  },
  XD = () => {
    const [t, a] = D.useState([]),
      [s, l] = D.useState([]),
      [o, u] = D.useState([]),
      f = [...t, ...s, ...o],
      p = hl(f).slice(0, 24);
    return (
      D.useEffect(() => {
        (ho()
          .then(a)
          .catch((h) => console.error('Error loading phones:', h)),
          mo()
            .then(l)
            .catch((h) => console.error('Error loading tablets:', h)),
          po()
            .then(u)
            .catch((h) => console.error('Error loading accessories:', h)));
      }, []),
      S.jsxs('div', {
        className: 'AlsoLike',
        children: [
          S.jsxs('div', {
            className: 'AlsoLike__header',
            children: [
              S.jsx('h3', {
                className: 'AlsoLike__title',
                children: 'You may also like',
              }),
              S.jsxs('div', {
                className: 'AlsoLike__arrows',
                children: [
                  S.jsx('button', {
                    className: 'AlsoLike__arrow-btn',
                    children: '‹',
                  }),
                  S.jsx('button', {
                    className: 'AlsoLike__arrow-btn',
                    children: '›',
                  }),
                ],
              }),
            ],
          }),
          S.jsx('div', {
            className: 'AlsoLike__slider',
            children: S.jsx('div', {
              className: 'AlsoLike__track',
              children: p.map((h) => S.jsx(Xa, { product: h }, h.id)),
            }),
          }),
        ],
      })
    );
  },
  QD = ({ product: t, onCapacityChange: a }) =>
    S.jsxs('div', {
      className: 'product-card',
      children: [
        S.jsx('div', {
          className: 'product-card__gallery',
          children: S.jsx(BD, { images: t.images, name: t.name }),
        }),
        S.jsxs('div', {
          className: 'product-card__sidebar',
          children: [
            S.jsxs('div', {
              className: 'product-card__options',
              children: [
                S.jsx(GD, {
                  itemId: t.id,
                  namespaceId: t.namespaceId,
                  colorsAvailable: t.colorsAvailable,
                  currentColor: t.color,
                  capacityAvailable: t.capacityAvailable,
                  currentCapacity: t.capacity,
                  onCapacityChange: a,
                }),
                S.jsx(kD, {
                  priceDiscount: t.priceDiscount,
                  priceRegular: t.priceRegular,
                }),
              ],
            }),
            S.jsx('div', {
              className: 'product-card__about',
              children: S.jsx(ky, {
                screen: t.screen,
                resolution: t.resolution,
                capacity: t.capacity,
                ram: t.ram,
                showTopLine: !1,
              }),
            }),
          ],
        }),
        S.jsx('div', {
          className: 'product-card__description',
          children: S.jsx(qD, { description: t.description }),
        }),
        S.jsx('div', {
          className: 'product-card__tech-specs',
          children: S.jsx(YD, {
            screen: t.screen,
            resolution: t.resolution,
            processor: t.processor,
            ram: t.ram,
            capacity: t.capacity,
            camera: t.camera,
            zoom: t.zoom,
            cell: t.cell,
          }),
        }),
        S.jsx('div', {
          className: 'product-card__related',
          children: S.jsx(XD, {}),
        }),
      ],
    }),
  KD = () => {
    const { category: t, productId: a } = Zf(),
      s = Ry(),
      [l, o] = D.useState(null),
      [u, f] = D.useState(!0),
      [p, h] = D.useState(!1),
      m = (g, x = !1) => {
        t &&
          (x || f(!0),
          h(!1),
          P_(t, g)
            .then((b) => {
              o(b);
            })
            .catch(() => {
              h(!0);
            })
            .finally(() => {
              f(!1);
            }));
      };
    D.useEffect(() => {
      if (!a) return;
      const g = setTimeout(() => {
        m(a, !1);
      }, 1e3);
      return () => clearTimeout(g);
    }, [t, a]);
    const v = (g) => {
      m(g, !0);
    };
    return (
      u ? S.jsx('div', { className: 'loader-wrapper', children: S.jsx(I1, {}) })
      : p || !l ?
        S.jsx('div', {
          className: 'product-details-page',
          children: S.jsxs('div', {
            className: 'product-not-found',
            children: [
              S.jsx(ki, {}),
              S.jsxs('div', {
                className: 'product-not-found__content',
                children: [
                  S.jsx('h1', {
                    className: 'product-not-found__title',
                    children: 'Unfortunately, the product is unknown.',
                  }),
                  S.jsx('p', {
                    className: 'product-not-found__text',
                    children:
                      'We couldnt find the product youre looking for. It may have been removed or the link is outdated.',
                  }),
                  S.jsx('button', {
                    className: 'product-not-found__button',
                    onClick: () => s(-1),
                    children: 'Go back',
                  }),
                ],
              }),
            ],
          }),
        })
      : S.jsxs('div', {
          className: 'product-details-page',
          children: [
            S.jsx(ki, {}),
            S.jsx(R1, {}),
            S.jsx('div', {
              className: 'product-header',
              children: S.jsx('h1', {
                className: 'product-title',
                children: l.name,
              }),
            }),
            S.jsx(QD, { product: l, onCapacityChange: v }),
          ],
        })
    );
  },
  FD = () =>
    S.jsxs('div', {
      className: 'App',
      children: [
        S.jsx(D_, {}),
        S.jsx('div', {
          className: 'container',
          children: S.jsxs(MT, {
            children: [
              S.jsx(Vn, { path: '/', element: S.jsx(zD, {}) }),
              S.jsx(Vn, { path: '/phones', element: S.jsx(WA, {}) }),
              S.jsx(Vn, { path: '/tablets', element: S.jsx(XM, {}) }),
              S.jsx(Vn, { path: '/accessories', element: S.jsx(uM, {}) }),
              S.jsx(Vn, { path: '/cart', element: S.jsx(LM, {}) }),
              S.jsx(Vn, { path: '/favorites', element: S.jsx(VD, {}) }),
              S.jsx(Vn, {
                path: '/:category/:productId',
                element: S.jsx(KD, {}),
              }),
              S.jsx(Vn, { path: '*', element: S.jsx(zM, {}) }),
            ],
          }),
        }),
        S.jsx(U_, {}),
      ],
    }),
  ZD = ({ children: t }) => {
    const [a, s] = D.useState([]),
      l = (g) => `${g.itemId}_${g.color}_${g.capacity}`,
      o = (g) => {
        const x = l(g);
        s((b) =>
          b.find((E) => E.itemUniqueId === x) ?
            b.map((E) =>
              E.itemUniqueId === x ? { ...E, quantity: E.quantity + 1 } : E,
            )
          : [...b, { ...g, quantity: 1, itemUniqueId: x }],
        );
      },
      u = (g) => {
        s((x) => x.filter((b) => b.itemUniqueId !== g));
      },
      f = (g, x) => {
        if (x <= 0) {
          u(g);
          return;
        }
        s((b) =>
          b.map((A) => (A.itemUniqueId === g ? { ...A, quantity: x } : A)),
        );
      },
      p = () => s([]),
      h = D.useCallback(
        () =>
          a.reduce(
            (g, x) => g + (x.priceDiscount ?? x.priceRegular) * x.quantity,
            0,
          ),
        [a],
      ),
      m = D.useCallback(() => a.reduce((g, x) => g + x.quantity, 0), [a]),
      v = (g) => {
        const x = l(g);
        return a.some((b) => b.itemUniqueId === x);
      };
    return S.jsx(Yy.Provider, {
      value: {
        cartItems: a,
        addToCart: o,
        removeFromCart: u,
        updateQuantity: f,
        clearCart: p,
        getTotalPrice: h,
        getTotalItems: m,
        isInCart: v,
      },
      children: t,
    });
  };
Ox.createRoot(document.getElementById('root')).render(
  S.jsx(IT, { children: S.jsx(ZD, { children: S.jsx(FD, {}) }) }),
);
