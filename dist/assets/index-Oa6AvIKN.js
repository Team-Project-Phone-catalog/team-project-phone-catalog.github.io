(function () {
  const o = document.createElement('link').relList;
  if (o && o.supports && o.supports('modulepreload')) return;
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) s(h);
  new MutationObserver((h) => {
    for (const m of h)
      if (m.type === 'childList')
        for (const S of m.addedNodes)
          S.tagName === 'LINK' && S.rel === 'modulepreload' && s(S);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(h) {
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
    const m = r(h);
    fetch(h.href, m);
  }
})();
var Uf = { exports: {} },
  Cu = {};
var th;
function uv() {
  if (th) return Cu;
  th = 1;
  var c = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.fragment');
  function r(s, h, m) {
    var S = null;
    if (
      (m !== void 0 && (S = '' + m),
      h.key !== void 0 && (S = '' + h.key),
      'key' in h)
    ) {
      m = {};
      for (var x in h) x !== 'key' && (m[x] = h[x]);
    } else m = h;
    return (
      (h = m.ref),
      { $$typeof: c, type: s, key: S, ref: h !== void 0 ? h : null, props: m }
    );
  }
  return ((Cu.Fragment = o), (Cu.jsx = r), (Cu.jsxs = r), Cu);
}
var eh;
function nv() {
  return (eh || ((eh = 1), (Uf.exports = uv())), Uf.exports);
}
var N = nv(),
  jf = { exports: {} },
  Uu = {},
  Hf = { exports: {} },
  Bf = {};
var lh;
function iv() {
  return (
    lh ||
      ((lh = 1),
      (function (c) {
        function o(O, H) {
          var W = O.length;
          O.push(H);
          t: for (; 0 < W; ) {
            var mt = (W - 1) >>> 1,
              pt = O[mt];
            if (0 < h(pt, H)) ((O[mt] = H), (O[W] = pt), (W = mt));
            else break t;
          }
        }
        function r(O) {
          return O.length === 0 ? null : O[0];
        }
        function s(O) {
          if (O.length === 0) return null;
          var H = O[0],
            W = O.pop();
          if (W !== H) {
            O[0] = W;
            t: for (var mt = 0, pt = O.length, v = pt >>> 1; mt < v; ) {
              var j = 2 * (mt + 1) - 1,
                B = O[j],
                X = j + 1,
                P = O[X];
              if (0 > h(B, W))
                X < pt && 0 > h(P, B) ?
                  ((O[mt] = P), (O[X] = W), (mt = X))
                : ((O[mt] = B), (O[j] = W), (mt = j));
              else if (X < pt && 0 > h(P, W))
                ((O[mt] = P), (O[X] = W), (mt = X));
              else break t;
            }
          }
          return H;
        }
        function h(O, H) {
          var W = O.sortIndex - H.sortIndex;
          return W !== 0 ? W : O.id - H.id;
        }
        if (
          ((c.unstable_now = void 0),
          typeof performance == 'object' &&
            typeof performance.now == 'function')
        ) {
          var m = performance;
          c.unstable_now = function () {
            return m.now();
          };
        } else {
          var S = Date,
            x = S.now();
          c.unstable_now = function () {
            return S.now() - x;
          };
        }
        var E = [],
          g = [],
          U = 1,
          A = null,
          q = 3,
          Z = !1,
          k = !1,
          V = !1,
          G = !1,
          J = typeof setTimeout == 'function' ? setTimeout : null,
          L = typeof clearTimeout == 'function' ? clearTimeout : null,
          $ = typeof setImmediate < 'u' ? setImmediate : null;
        function Et(O) {
          for (var H = r(g); H !== null; ) {
            if (H.callback === null) s(g);
            else if (H.startTime <= O)
              (s(g), (H.sortIndex = H.expirationTime), o(E, H));
            else break;
            H = r(g);
          }
        }
        function bt(O) {
          if (((V = !1), Et(O), !k))
            if (r(E) !== null) ((k = !0), Rt || ((Rt = !0), Wt()));
            else {
              var H = r(g);
              H !== null && Oe(bt, H.startTime - O);
            }
        }
        var Rt = !1,
          I = -1,
          xt = 5,
          Gt = -1;
        function he() {
          return G ? !0 : !(c.unstable_now() - Gt < xt);
        }
        function Ce() {
          if (((G = !1), Rt)) {
            var O = c.unstable_now();
            Gt = O;
            var H = !0;
            try {
              t: {
                ((k = !1), V && ((V = !1), L(I), (I = -1)), (Z = !0));
                var W = q;
                try {
                  e: {
                    for (
                      Et(O), A = r(E);
                      A !== null && !(A.expirationTime > O && he());
                    ) {
                      var mt = A.callback;
                      if (typeof mt == 'function') {
                        ((A.callback = null), (q = A.priorityLevel));
                        var pt = mt(A.expirationTime <= O);
                        if (((O = c.unstable_now()), typeof pt == 'function')) {
                          ((A.callback = pt), Et(O), (H = !0));
                          break e;
                        }
                        (A === r(E) && s(E), Et(O));
                      } else s(E);
                      A = r(E);
                    }
                    if (A !== null) H = !0;
                    else {
                      var v = r(g);
                      (v !== null && Oe(bt, v.startTime - O), (H = !1));
                    }
                  }
                  break t;
                } finally {
                  ((A = null), (q = W), (Z = !1));
                }
                H = void 0;
              }
            } finally {
              H ? Wt() : (Rt = !1);
            }
          }
        }
        var Wt;
        if (typeof $ == 'function')
          Wt = function () {
            $(Ce);
          };
        else if (typeof MessageChannel < 'u') {
          var Cl = new MessageChannel(),
            qe = Cl.port2;
          ((Cl.port1.onmessage = Ce),
            (Wt = function () {
              qe.postMessage(null);
            }));
        } else
          Wt = function () {
            J(Ce, 0);
          };
        function Oe(O, H) {
          I = J(function () {
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
            : (xt = 0 < O ? Math.floor(1e3 / O) : 5);
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
            var W = q;
            q = H;
            try {
              return O();
            } finally {
              q = W;
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
            var W = q;
            q = O;
            try {
              return H();
            } finally {
              q = W;
            }
          }),
          (c.unstable_scheduleCallback = function (O, H, W) {
            var mt = c.unstable_now();
            switch (
              (typeof W == 'object' && W !== null ?
                ((W = W.delay),
                (W = typeof W == 'number' && 0 < W ? mt + W : mt))
              : (W = mt),
              O)
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
              (pt = W + pt),
              (O = {
                id: U++,
                callback: H,
                priorityLevel: O,
                startTime: W,
                expirationTime: pt,
                sortIndex: -1,
              }),
              W > mt ?
                ((O.sortIndex = W),
                o(g, O),
                r(E) === null &&
                  O === r(g) &&
                  (V ? (L(I), (I = -1)) : (V = !0), Oe(bt, W - mt)))
              : ((O.sortIndex = pt),
                o(E, O),
                k || Z || ((k = !0), Rt || ((Rt = !0), Wt()))),
              O
            );
          }),
          (c.unstable_shouldYield = he),
          (c.unstable_wrapCallback = function (O) {
            var H = q;
            return function () {
              var W = q;
              q = H;
              try {
                return O.apply(this, arguments);
              } finally {
                q = W;
              }
            };
          }));
      })(Bf)),
    Bf
  );
}
var ah;
function cv() {
  return (ah || ((ah = 1), (Hf.exports = iv())), Hf.exports);
}
var qf = { exports: {} },
  F = {};
var uh;
function fv() {
  if (uh) return F;
  uh = 1;
  var c = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.portal'),
    r = Symbol.for('react.fragment'),
    s = Symbol.for('react.strict_mode'),
    h = Symbol.for('react.profiler'),
    m = Symbol.for('react.consumer'),
    S = Symbol.for('react.context'),
    x = Symbol.for('react.forward_ref'),
    E = Symbol.for('react.suspense'),
    g = Symbol.for('react.memo'),
    U = Symbol.for('react.lazy'),
    A = Symbol.for('react.activity'),
    q = Symbol.iterator;
  function Z(v) {
    return v === null || typeof v != 'object' ?
        null
      : ((v = (q && v[q]) || v['@@iterator']),
        typeof v == 'function' ? v : null);
  }
  var k = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    V = Object.assign,
    G = {};
  function J(v, j, B) {
    ((this.props = v),
      (this.context = j),
      (this.refs = G),
      (this.updater = B || k));
  }
  ((J.prototype.isReactComponent = {}),
    (J.prototype.setState = function (v, j) {
      if (typeof v != 'object' && typeof v != 'function' && v != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, v, j, 'setState');
    }),
    (J.prototype.forceUpdate = function (v) {
      this.updater.enqueueForceUpdate(this, v, 'forceUpdate');
    }));
  function L() {}
  L.prototype = J.prototype;
  function $(v, j, B) {
    ((this.props = v),
      (this.context = j),
      (this.refs = G),
      (this.updater = B || k));
  }
  var Et = ($.prototype = new L());
  ((Et.constructor = $), V(Et, J.prototype), (Et.isPureReactComponent = !0));
  var bt = Array.isArray;
  function Rt() {}
  var I = { H: null, A: null, T: null, S: null },
    xt = Object.prototype.hasOwnProperty;
  function Gt(v, j, B) {
    var X = B.ref;
    return {
      $$typeof: c,
      type: v,
      key: j,
      ref: X !== void 0 ? X : null,
      props: B,
    };
  }
  function he(v, j) {
    return Gt(v.type, j, v.props);
  }
  function Ce(v) {
    return typeof v == 'object' && v !== null && v.$$typeof === c;
  }
  function Wt(v) {
    var j = { '=': '=0', ':': '=2' };
    return (
      '$' +
      v.replace(/[=:]/g, function (B) {
        return j[B];
      })
    );
  }
  var Cl = /\/+/g;
  function qe(v, j) {
    return typeof v == 'object' && v !== null && v.key != null ?
        Wt('' + v.key)
      : j.toString(36);
  }
  function Oe(v) {
    switch (v.status) {
      case 'fulfilled':
        return v.value;
      case 'rejected':
        throw v.reason;
      default:
        switch (
          (typeof v.status == 'string' ?
            v.then(Rt, Rt)
          : ((v.status = 'pending'),
            v.then(
              function (j) {
                v.status === 'pending' &&
                  ((v.status = 'fulfilled'), (v.value = j));
              },
              function (j) {
                v.status === 'pending' &&
                  ((v.status = 'rejected'), (v.reason = j));
              },
            )),
          v.status)
        ) {
          case 'fulfilled':
            return v.value;
          case 'rejected':
            throw v.reason;
        }
    }
    throw v;
  }
  function O(v, j, B, X, P) {
    var lt = typeof v;
    (lt === 'undefined' || lt === 'boolean') && (v = null);
    var rt = !1;
    if (v === null) rt = !0;
    else
      switch (lt) {
        case 'bigint':
        case 'string':
        case 'number':
          rt = !0;
          break;
        case 'object':
          switch (v.$$typeof) {
            case c:
            case o:
              rt = !0;
              break;
            case U:
              return ((rt = v._init), O(rt(v._payload), j, B, X, P));
          }
      }
    if (rt)
      return (
        (P = P(v)),
        (rt = X === '' ? '.' + qe(v, 0) : X),
        bt(P) ?
          ((B = ''),
          rt != null && (B = rt.replace(Cl, '$&/') + '/'),
          O(P, j, B, '', function (La) {
            return La;
          }))
        : P != null &&
          (Ce(P) &&
            (P = he(
              P,
              B +
                (P.key == null || (v && v.key === P.key) ?
                  ''
                : ('' + P.key).replace(Cl, '$&/') + '/') +
                rt,
            )),
          j.push(P)),
        1
      );
    rt = 0;
    var wt = X === '' ? '.' : X + ':';
    if (bt(v))
      for (var Dt = 0; Dt < v.length; Dt++)
        ((X = v[Dt]), (lt = wt + qe(X, Dt)), (rt += O(X, j, B, lt, P)));
    else if (((Dt = Z(v)), typeof Dt == 'function'))
      for (v = Dt.call(v), Dt = 0; !(X = v.next()).done; )
        ((X = X.value), (lt = wt + qe(X, Dt++)), (rt += O(X, j, B, lt, P)));
    else if (lt === 'object') {
      if (typeof v.then == 'function') return O(Oe(v), j, B, X, P);
      throw (
        (j = String(v)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (j === '[object Object]' ?
              'object with keys {' + Object.keys(v).join(', ') + '}'
            : j) +
            '). If you meant to render a collection of children, use an array instead.',
        )
      );
    }
    return rt;
  }
  function H(v, j, B) {
    if (v == null) return v;
    var X = [],
      P = 0;
    return (
      O(v, X, '', '', function (lt) {
        return j.call(B, lt, P++);
      }),
      X
    );
  }
  function W(v) {
    if (v._status === -1) {
      var j = v._result;
      ((j = j()),
        j.then(
          function (B) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 1), (v._result = B));
          },
          function (B) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 2), (v._result = B));
          },
        ),
        v._status === -1 && ((v._status = 0), (v._result = j)));
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var mt =
      typeof reportError == 'function' ? reportError : (
        function (v) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var j = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                (
                  typeof v == 'object' &&
                  v !== null &&
                  typeof v.message == 'string'
                ) ?
                  String(v.message)
                : String(v),
              error: v,
            });
            if (!window.dispatchEvent(j)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', v);
            return;
          }
          console.error(v);
        }
      ),
    pt = {
      map: H,
      forEach: function (v, j, B) {
        H(
          v,
          function () {
            j.apply(this, arguments);
          },
          B,
        );
      },
      count: function (v) {
        var j = 0;
        return (
          H(v, function () {
            j++;
          }),
          j
        );
      },
      toArray: function (v) {
        return (
          H(v, function (j) {
            return j;
          }) || []
        );
      },
      only: function (v) {
        if (!Ce(v))
          throw Error(
            'React.Children.only expected to receive a single React element child.',
          );
        return v;
      },
    };
  return (
    (F.Activity = A),
    (F.Children = pt),
    (F.Component = J),
    (F.Fragment = r),
    (F.Profiler = h),
    (F.PureComponent = $),
    (F.StrictMode = s),
    (F.Suspense = E),
    (F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I),
    (F.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (v) {
        return I.H.useMemoCache(v);
      },
    }),
    (F.cache = function (v) {
      return function () {
        return v.apply(null, arguments);
      };
    }),
    (F.cacheSignal = function () {
      return null;
    }),
    (F.cloneElement = function (v, j, B) {
      if (v == null)
        throw Error(
          'The argument must be a React element, but you passed ' + v + '.',
        );
      var X = V({}, v.props),
        P = v.key;
      if (j != null)
        for (lt in (j.key !== void 0 && (P = '' + j.key), j))
          !xt.call(j, lt) ||
            lt === 'key' ||
            lt === '__self' ||
            lt === '__source' ||
            (lt === 'ref' && j.ref === void 0) ||
            (X[lt] = j[lt]);
      var lt = arguments.length - 2;
      if (lt === 1) X.children = B;
      else if (1 < lt) {
        for (var rt = Array(lt), wt = 0; wt < lt; wt++)
          rt[wt] = arguments[wt + 2];
        X.children = rt;
      }
      return Gt(v.type, P, X);
    }),
    (F.createContext = function (v) {
      return (
        (v = {
          $$typeof: S,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (v.Provider = v),
        (v.Consumer = { $$typeof: m, _context: v }),
        v
      );
    }),
    (F.createElement = function (v, j, B) {
      var X,
        P = {},
        lt = null;
      if (j != null)
        for (X in (j.key !== void 0 && (lt = '' + j.key), j))
          xt.call(j, X) &&
            X !== 'key' &&
            X !== '__self' &&
            X !== '__source' &&
            (P[X] = j[X]);
      var rt = arguments.length - 2;
      if (rt === 1) P.children = B;
      else if (1 < rt) {
        for (var wt = Array(rt), Dt = 0; Dt < rt; Dt++)
          wt[Dt] = arguments[Dt + 2];
        P.children = wt;
      }
      if (v && v.defaultProps)
        for (X in ((rt = v.defaultProps), rt))
          P[X] === void 0 && (P[X] = rt[X]);
      return Gt(v, lt, P);
    }),
    (F.createRef = function () {
      return { current: null };
    }),
    (F.forwardRef = function (v) {
      return { $$typeof: x, render: v };
    }),
    (F.isValidElement = Ce),
    (F.lazy = function (v) {
      return { $$typeof: U, _payload: { _status: -1, _result: v }, _init: W };
    }),
    (F.memo = function (v, j) {
      return { $$typeof: g, type: v, compare: j === void 0 ? null : j };
    }),
    (F.startTransition = function (v) {
      var j = I.T,
        B = {};
      I.T = B;
      try {
        var X = v(),
          P = I.S;
        (P !== null && P(B, X),
          typeof X == 'object' &&
            X !== null &&
            typeof X.then == 'function' &&
            X.then(Rt, mt));
      } catch (lt) {
        mt(lt);
      } finally {
        (j !== null && B.types !== null && (j.types = B.types), (I.T = j));
      }
    }),
    (F.unstable_useCacheRefresh = function () {
      return I.H.useCacheRefresh();
    }),
    (F.use = function (v) {
      return I.H.use(v);
    }),
    (F.useActionState = function (v, j, B) {
      return I.H.useActionState(v, j, B);
    }),
    (F.useCallback = function (v, j) {
      return I.H.useCallback(v, j);
    }),
    (F.useContext = function (v) {
      return I.H.useContext(v);
    }),
    (F.useDebugValue = function () {}),
    (F.useDeferredValue = function (v, j) {
      return I.H.useDeferredValue(v, j);
    }),
    (F.useEffect = function (v, j) {
      return I.H.useEffect(v, j);
    }),
    (F.useEffectEvent = function (v) {
      return I.H.useEffectEvent(v);
    }),
    (F.useId = function () {
      return I.H.useId();
    }),
    (F.useImperativeHandle = function (v, j, B) {
      return I.H.useImperativeHandle(v, j, B);
    }),
    (F.useInsertionEffect = function (v, j) {
      return I.H.useInsertionEffect(v, j);
    }),
    (F.useLayoutEffect = function (v, j) {
      return I.H.useLayoutEffect(v, j);
    }),
    (F.useMemo = function (v, j) {
      return I.H.useMemo(v, j);
    }),
    (F.useOptimistic = function (v, j) {
      return I.H.useOptimistic(v, j);
    }),
    (F.useReducer = function (v, j, B) {
      return I.H.useReducer(v, j, B);
    }),
    (F.useRef = function (v) {
      return I.H.useRef(v);
    }),
    (F.useState = function (v) {
      return I.H.useState(v);
    }),
    (F.useSyncExternalStore = function (v, j, B) {
      return I.H.useSyncExternalStore(v, j, B);
    }),
    (F.useTransition = function () {
      return I.H.useTransition();
    }),
    (F.version = '19.2.4'),
    F
  );
}
var nh;
function Kf() {
  return (nh || ((nh = 1), (qf.exports = fv())), qf.exports);
}
var Yf = { exports: {} },
  Jt = {};
var ih;
function sv() {
  if (ih) return Jt;
  ih = 1;
  var c = Kf();
  function o(E) {
    var g = 'https://react.dev/errors/' + E;
    if (1 < arguments.length) {
      g += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var U = 2; U < arguments.length; U++)
        g += '&args[]=' + encodeURIComponent(arguments[U]);
    }
    return (
      'Minified React error #' +
      E +
      '; visit ' +
      g +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function r() {}
  var s = {
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
    h = Symbol.for('react.portal');
  function m(E, g, U) {
    var A =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: A == null ? null : '' + A,
      children: E,
      containerInfo: g,
      implementation: U,
    };
  }
  var S = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function x(E, g) {
    if (E === 'font') return '';
    if (typeof g == 'string') return g === 'use-credentials' ? g : '';
  }
  return (
    (Jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (Jt.createPortal = function (E, g) {
      var U =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(o(299));
      return m(E, g, null, U);
    }),
    (Jt.flushSync = function (E) {
      var g = S.T,
        U = s.p;
      try {
        if (((S.T = null), (s.p = 2), E)) return E();
      } finally {
        ((S.T = g), (s.p = U), s.d.f());
      }
    }),
    (Jt.preconnect = function (E, g) {
      typeof E == 'string' &&
        (g ?
          ((g = g.crossOrigin),
          (g =
            typeof g == 'string' ?
              g === 'use-credentials' ?
                g
              : ''
            : void 0))
        : (g = null),
        s.d.C(E, g));
    }),
    (Jt.prefetchDNS = function (E) {
      typeof E == 'string' && s.d.D(E);
    }),
    (Jt.preinit = function (E, g) {
      if (typeof E == 'string' && g && typeof g.as == 'string') {
        var U = g.as,
          A = x(U, g.crossOrigin),
          q = typeof g.integrity == 'string' ? g.integrity : void 0,
          Z = typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0;
        U === 'style' ?
          s.d.S(E, typeof g.precedence == 'string' ? g.precedence : void 0, {
            crossOrigin: A,
            integrity: q,
            fetchPriority: Z,
          })
        : U === 'script' &&
          s.d.X(E, {
            crossOrigin: A,
            integrity: q,
            fetchPriority: Z,
            nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
          });
      }
    }),
    (Jt.preinitModule = function (E, g) {
      if (typeof E == 'string')
        if (typeof g == 'object' && g !== null) {
          if (g.as == null || g.as === 'script') {
            var U = x(g.as, g.crossOrigin);
            s.d.M(E, {
              crossOrigin: U,
              integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
              nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
            });
          }
        } else g == null && s.d.M(E);
    }),
    (Jt.preload = function (E, g) {
      if (
        typeof E == 'string' &&
        typeof g == 'object' &&
        g !== null &&
        typeof g.as == 'string'
      ) {
        var U = g.as,
          A = x(U, g.crossOrigin);
        s.d.L(E, U, {
          crossOrigin: A,
          integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
          nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
          type: typeof g.type == 'string' ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == 'string' ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == 'string' ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == 'string' ? g.imageSizes : void 0,
          media: typeof g.media == 'string' ? g.media : void 0,
        });
      }
    }),
    (Jt.preloadModule = function (E, g) {
      if (typeof E == 'string')
        if (g) {
          var U = x(g.as, g.crossOrigin);
          s.d.m(E, {
            as: typeof g.as == 'string' && g.as !== 'script' ? g.as : void 0,
            crossOrigin: U,
            integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
          });
        } else s.d.m(E);
    }),
    (Jt.requestFormReset = function (E) {
      s.d.r(E);
    }),
    (Jt.unstable_batchedUpdates = function (E, g) {
      return E(g);
    }),
    (Jt.useFormState = function (E, g, U) {
      return S.H.useFormState(E, g, U);
    }),
    (Jt.useFormStatus = function () {
      return S.H.useHostTransitionStatus();
    }),
    (Jt.version = '19.2.4'),
    Jt
  );
}
var ch;
function ov() {
  if (ch) return Yf.exports;
  ch = 1;
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
  return (c(), (Yf.exports = sv()), Yf.exports);
}
var fh;
function rv() {
  if (fh) return Uu;
  fh = 1;
  var c = cv(),
    o = Kf(),
    r = ov();
  function s(t) {
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
  function h(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function m(t) {
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
  function x(t) {
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
  function E(t) {
    if (m(t) !== t) throw Error(s(188));
  }
  function g(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = m(t)), e === null)) throw Error(s(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var u = l.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((a = u.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === l) return (E(u), t);
          if (n === a) return (E(u), e);
          n = n.sibling;
        }
        throw Error(s(188));
      }
      if (l.return !== a.return) ((l = u), (a = n));
      else {
        for (var i = !1, f = u.child; f; ) {
          if (f === l) {
            ((i = !0), (l = u), (a = n));
            break;
          }
          if (f === a) {
            ((i = !0), (a = u), (l = n));
            break;
          }
          f = f.sibling;
        }
        if (!i) {
          for (f = n.child; f; ) {
            if (f === l) {
              ((i = !0), (l = n), (a = u));
              break;
            }
            if (f === a) {
              ((i = !0), (a = n), (l = u));
              break;
            }
            f = f.sibling;
          }
          if (!i) throw Error(s(189));
        }
      }
      if (l.alternate !== a) throw Error(s(190));
    }
    if (l.tag !== 3) throw Error(s(188));
    return l.stateNode.current === l ? t : e;
  }
  function U(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = U(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var A = Object.assign,
    q = Symbol.for('react.element'),
    Z = Symbol.for('react.transitional.element'),
    k = Symbol.for('react.portal'),
    V = Symbol.for('react.fragment'),
    G = Symbol.for('react.strict_mode'),
    J = Symbol.for('react.profiler'),
    L = Symbol.for('react.consumer'),
    $ = Symbol.for('react.context'),
    Et = Symbol.for('react.forward_ref'),
    bt = Symbol.for('react.suspense'),
    Rt = Symbol.for('react.suspense_list'),
    I = Symbol.for('react.memo'),
    xt = Symbol.for('react.lazy'),
    Gt = Symbol.for('react.activity'),
    he = Symbol.for('react.memo_cache_sentinel'),
    Ce = Symbol.iterator;
  function Wt(t) {
    return t === null || typeof t != 'object' ?
        null
      : ((t = (Ce && t[Ce]) || t['@@iterator']),
        typeof t == 'function' ? t : null);
  }
  var Cl = Symbol.for('react.client.reference');
  function qe(t) {
    if (t == null) return null;
    if (typeof t == 'function')
      return t.$$typeof === Cl ? null : t.displayName || t.name || null;
    if (typeof t == 'string') return t;
    switch (t) {
      case V:
        return 'Fragment';
      case J:
        return 'Profiler';
      case G:
        return 'StrictMode';
      case bt:
        return 'Suspense';
      case Rt:
        return 'SuspenseList';
      case Gt:
        return 'Activity';
    }
    if (typeof t == 'object')
      switch (t.$$typeof) {
        case k:
          return 'Portal';
        case $:
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
        case I:
          return (
            (e = t.displayName || null),
            e !== null ? e : qe(t.type) || 'Memo'
          );
        case xt:
          ((e = t._payload), (t = t._init));
          try {
            return qe(t(e));
          } catch {}
      }
    return null;
  }
  var Oe = Array.isArray,
    O = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    H = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    W = { pending: !1, data: null, method: null, action: null },
    mt = [],
    pt = -1;
  function v(t) {
    return { current: t };
  }
  function j(t) {
    0 > pt || ((t.current = mt[pt]), (mt[pt] = null), pt--);
  }
  function B(t, e) {
    (pt++, (mt[pt] = t.current), (t.current = e));
  }
  var X = v(null),
    P = v(null),
    lt = v(null),
    rt = v(null);
  function wt(t, e) {
    switch ((B(lt, e), B(P, t), B(X, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Td(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = Td(e)), (t = zd(e, t)));
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
    (j(X), B(X, t));
  }
  function Dt() {
    (j(X), j(P), j(lt));
  }
  function La(t) {
    t.memoizedState !== null && B(rt, t);
    var e = X.current,
      l = zd(e, t.type);
    e !== l && (B(P, t), B(X, l));
  }
  function Zu(t) {
    (P.current === t && (j(X), j(P)),
      rt.current === t && (j(rt), (Mu._currentValue = W)));
  }
  var mi, If;
  function Ul(t) {
    if (mi === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        ((mi = (e && e[1]) || ''),
          (If =
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
      mi +
      t +
      If
    );
  }
  var yi = !1;
  function vi(t, e) {
    if (!t || yi) return '';
    yi = !0;
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
                } catch (z) {
                  var T = z;
                }
                Reflect.construct(t, [], C);
              } else {
                try {
                  C.call();
                } catch (z) {
                  T = z;
                }
                t.call(C.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                T = z;
              }
              (C = t()) &&
                typeof C.catch == 'function' &&
                C.catch(function () {});
            }
          } catch (z) {
            if (z && T && typeof z.stack == 'string') return [z.stack, T.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        'name',
      );
      u &&
        u.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var n = a.DetermineComponentFrameRoot(),
        i = n[0],
        f = n[1];
      if (i && f) {
        var d = i.split(`
`),
          _ = f.split(`
`);
        for (
          u = a = 0;
          a < d.length && !d[a].includes('DetermineComponentFrameRoot');
        )
          a++;
        for (; u < _.length && !_[u].includes('DetermineComponentFrameRoot'); )
          u++;
        if (a === d.length || u === _.length)
          for (
            a = d.length - 1, u = _.length - 1;
            1 <= a && 0 <= u && d[a] !== _[u];
          )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (d[a] !== _[u]) {
            if (a !== 1 || u !== 1)
              do
                if ((a--, u--, 0 > u || d[a] !== _[u])) {
                  var R =
                    `
` + d[a].replace(' at new ', ' at ');
                  return (
                    t.displayName &&
                      R.includes('<anonymous>') &&
                      (R = R.replace('<anonymous>', t.displayName)),
                    R
                  );
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      ((yi = !1), (Error.prepareStackTrace = l));
    }
    return (l = t ? t.displayName || t.name : '') ? Ul(l) : '';
  }
  function Hh(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ul(t.type);
      case 16:
        return Ul('Lazy');
      case 13:
        return t.child !== e && e !== null ?
            Ul('Suspense Fallback')
          : Ul('Suspense');
      case 19:
        return Ul('SuspenseList');
      case 0:
      case 15:
        return vi(t.type, !1);
      case 11:
        return vi(t.type.render, !1);
      case 1:
        return vi(t.type, !0);
      case 31:
        return Ul('Activity');
      default:
        return '';
    }
  }
  function Pf(t) {
    try {
      var e = '',
        l = null;
      do ((e += Hh(t, l)), (l = t), (t = t.return));
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
  var gi = Object.prototype.hasOwnProperty,
    pi = c.unstable_scheduleCallback,
    Si = c.unstable_cancelCallback,
    Bh = c.unstable_shouldYield,
    qh = c.unstable_requestPaint,
    ae = c.unstable_now,
    Yh = c.unstable_getCurrentPriorityLevel,
    ts = c.unstable_ImmediatePriority,
    es = c.unstable_UserBlockingPriority,
    Vu = c.unstable_NormalPriority,
    Lh = c.unstable_LowPriority,
    ls = c.unstable_IdlePriority,
    Gh = c.log,
    Xh = c.unstable_setDisableYieldValue,
    Ga = null,
    ue = null;
  function il(t) {
    if (
      (typeof Gh == 'function' && Xh(t),
      ue && typeof ue.setStrictMode == 'function')
    )
      try {
        ue.setStrictMode(Ga, t);
      } catch {}
  }
  var ne = Math.clz32 ? Math.clz32 : Vh,
    Qh = Math.log,
    Zh = Math.LN2;
  function Vh(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Qh(t) / Zh) | 0)) | 0);
  }
  var Ku = 256,
    Ju = 262144,
    wu = 4194304;
  function jl(t) {
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
  function $u(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      n = t.suspendedLanes,
      i = t.pingedLanes;
    t = t.warmLanes;
    var f = a & 134217727;
    return (
      f !== 0 ?
        ((a = f & ~n),
        a !== 0 ?
          (u = jl(a))
        : ((i &= f),
          i !== 0 ? (u = jl(i)) : l || ((l = f & ~t), l !== 0 && (u = jl(l)))))
      : ((f = a & ~n),
        f !== 0 ? (u = jl(f))
        : i !== 0 ? (u = jl(i))
        : l || ((l = a & ~t), l !== 0 && (u = jl(l)))),
      u === 0 ? 0
      : (
        e !== 0 &&
        e !== u &&
        (e & n) === 0 &&
        ((n = u & -u),
        (l = e & -e),
        n >= l || (n === 32 && (l & 4194048) !== 0))
      ) ?
        e
      : u
    );
  }
  function Xa(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Kh(t, e) {
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
  function as() {
    var t = wu;
    return ((wu <<= 1), (wu & 62914560) === 0 && (wu = 4194304), t);
  }
  function bi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Qa(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function Jh(t, e, l, a, u, n) {
    var i = t.pendingLanes;
    ((t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0));
    var f = t.entanglements,
      d = t.expirationTimes,
      _ = t.hiddenUpdates;
    for (l = i & ~l; 0 < l; ) {
      var R = 31 - ne(l),
        C = 1 << R;
      ((f[R] = 0), (d[R] = -1));
      var T = _[R];
      if (T !== null)
        for (_[R] = null, R = 0; R < T.length; R++) {
          var z = T[R];
          z !== null && (z.lane &= -536870913);
        }
      l &= ~C;
    }
    (a !== 0 && us(t, a, 0),
      n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(i & ~e)));
  }
  function us(t, e, l) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var a = 31 - ne(e);
    ((t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 261930)));
  }
  function ns(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var a = 31 - ne(l),
        u = 1 << a;
      ((u & e) | (t[a] & e) && (t[a] |= e), (l &= ~u));
    }
  }
  function is(t, e) {
    var l = e & -e;
    return (
      (l = (l & 42) !== 0 ? 1 : Ei(l)),
      (l & (t.suspendedLanes | e)) !== 0 ? 0 : l
    );
  }
  function Ei(t) {
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
  function _i(t) {
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
  function cs() {
    var t = H.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : wd(t.type));
  }
  function fs(t, e) {
    var l = H.p;
    try {
      return ((H.p = t), e());
    } finally {
      H.p = l;
    }
  }
  var cl = Math.random().toString(36).slice(2),
    Xt = '__reactFiber$' + cl,
    kt = '__reactProps$' + cl,
    ta = '__reactContainer$' + cl,
    Ti = '__reactEvents$' + cl,
    wh = '__reactListeners$' + cl,
    $h = '__reactHandles$' + cl,
    ss = '__reactResources$' + cl,
    Za = '__reactMarker$' + cl;
  function zi(t) {
    (delete t[Xt], delete t[kt], delete t[Ti], delete t[wh], delete t[$h]);
  }
  function ea(t) {
    var e = t[Xt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[ta] || l[Xt])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = Nd(t); t !== null; ) {
            if ((l = t[Xt])) return l;
            t = Nd(t);
          }
        return e;
      }
      ((t = l), (l = t.parentNode));
    }
    return null;
  }
  function la(t) {
    if ((t = t[Xt] || t[ta])) {
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
  function Va(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(s(33));
  }
  function aa(t) {
    var e = t[ss];
    return (
      e ||
        (e = t[ss] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Yt(t) {
    t[Za] = !0;
  }
  var os = new Set(),
    rs = {};
  function Hl(t, e) {
    (ua(t, e), ua(t + 'Capture', e));
  }
  function ua(t, e) {
    for (rs[t] = e, t = 0; t < e.length; t++) os.add(e[t]);
  }
  var Wh = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    ds = {},
    hs = {};
  function kh(t) {
    return (
      gi.call(hs, t) ? !0
      : gi.call(ds, t) ? !1
      : Wh.test(t) ? (hs[t] = !0)
      : ((ds[t] = !0), !1)
    );
  }
  function Wu(t, e, l) {
    if (kh(e))
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
  function ku(t, e, l) {
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
  function Ye(t, e, l, a) {
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
  function me(t) {
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
  function ms(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === 'input' &&
      (e === 'checkbox' || e === 'radio')
    );
  }
  function Fh(t, e, l) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof a < 'u' &&
      typeof a.get == 'function' &&
      typeof a.set == 'function'
    ) {
      var u = a.get,
        n = a.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (i) {
            ((l = '' + i), n.call(this, i));
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
  function Ai(t) {
    if (!t._valueTracker) {
      var e = ms(t) ? 'checked' : 'value';
      t._valueTracker = Fh(t, e, '' + t[e]);
    }
  }
  function ys(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      a = '';
    return (
      t &&
        (a =
          ms(t) ?
            t.checked ?
              'true'
            : 'false'
          : t.value),
      (t = a),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function Fu(t) {
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
  var Ih = /[\n"\\]/g;
  function ye(t) {
    return t.replace(Ih, function (e) {
      return '\\' + e.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Ri(t, e, l, a, u, n, i, f) {
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
          (t.value = '' + me(e))
        : t.value !== '' + me(e) && (t.value = '' + me(e))
      : (i !== 'submit' && i !== 'reset') || t.removeAttribute('value'),
      e != null ? Oi(t, i, me(e))
      : l != null ? Oi(t, i, me(l))
      : a != null && t.removeAttribute('value'),
      u == null && n != null && (t.defaultChecked = !!n),
      u != null &&
        (t.checked = u && typeof u != 'function' && typeof u != 'symbol'),
      (
        f != null &&
        typeof f != 'function' &&
        typeof f != 'symbol' &&
        typeof f != 'boolean'
      ) ?
        (t.name = '' + me(f))
      : t.removeAttribute('name'));
  }
  function vs(t, e, l, a, u, n, i, f) {
    if (
      (n != null &&
        typeof n != 'function' &&
        typeof n != 'symbol' &&
        typeof n != 'boolean' &&
        (t.type = n),
      e != null || l != null)
    ) {
      if (!((n !== 'submit' && n !== 'reset') || e != null)) {
        Ai(t);
        return;
      }
      ((l = l != null ? '' + me(l) : ''),
        (e = e != null ? '' + me(e) : l),
        f || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((a = a ?? u),
      (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
      (t.checked = f ? t.checked : !!a),
      (t.defaultChecked = !!a),
      i != null &&
        typeof i != 'function' &&
        typeof i != 'symbol' &&
        typeof i != 'boolean' &&
        (t.name = i),
      Ai(t));
  }
  function Oi(t, e, l) {
    (e === 'number' && Fu(t.ownerDocument) === t) ||
      t.defaultValue === '' + l ||
      (t.defaultValue = '' + l);
  }
  function na(t, e, l, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var u = 0; u < l.length; u++) e['$' + l[u]] = !0;
      for (l = 0; l < t.length; l++)
        ((u = e.hasOwnProperty('$' + t[l].value)),
          t[l].selected !== u && (t[l].selected = u),
          u && a && (t[l].defaultSelected = !0));
    } else {
      for (l = '' + me(l), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === l) {
          ((t[u].selected = !0), a && (t[u].defaultSelected = !0));
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function gs(t, e, l) {
    if (
      e != null &&
      ((e = '' + me(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? '' + me(l) : '';
  }
  function ps(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(s(92));
        if (Oe(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        l = a;
      }
      (l == null && (l = ''), (e = l));
    }
    ((l = me(e)),
      (t.defaultValue = l),
      (a = t.textContent),
      a === l && a !== '' && a !== null && (t.value = a),
      Ai(t));
  }
  function ia(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Ph = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' ',
    ),
  );
  function Ss(t, e, l) {
    var a = e.indexOf('--') === 0;
    l == null || typeof l == 'boolean' || l === '' ?
      a ? t.setProperty(e, '')
      : e === 'float' ? (t.cssFloat = '')
      : (t[e] = '')
    : a ? t.setProperty(e, l)
    : typeof l != 'number' || l === 0 || Ph.has(e) ?
      e === 'float' ?
        (t.cssFloat = l)
      : (t[e] = ('' + l).trim())
    : (t[e] = l + 'px');
  }
  function bs(t, e, l) {
    if (e != null && typeof e != 'object') throw Error(s(62));
    if (((t = t.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf('--') === 0 ? t.setProperty(a, '')
          : a === 'float' ? (t.cssFloat = '')
          : (t[a] = ''));
      for (var u in e)
        ((a = e[u]), e.hasOwnProperty(u) && l[u] !== a && Ss(t, u, a));
    } else for (var n in e) e.hasOwnProperty(n) && Ss(t, n, e[n]);
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
  var tm = new Map([
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
    em =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Iu(t) {
    return em.test('' + t) ?
        "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Le() {}
  var xi = null;
  function Di(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var ca = null,
    fa = null;
  function Es(t) {
    var e = la(t);
    if (e && (t = e.stateNode)) {
      var l = t[kt] || null;
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
                'input[name="' + ye('' + e) + '"][type="radio"]',
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var u = a[kt] || null;
                if (!u) throw Error(s(90));
                Ri(
                  a,
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
            for (e = 0; e < l.length; e++)
              ((a = l[e]), a.form === t.form && ys(a));
          }
          break t;
        case 'textarea':
          gs(t, l.value, l.defaultValue);
          break t;
        case 'select':
          ((e = l.value), e != null && na(t, !!l.multiple, e, !1));
      }
    }
  }
  var Ni = !1;
  function _s(t, e, l) {
    if (Ni) return t(e, l);
    Ni = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((Ni = !1),
        (ca !== null || fa !== null) &&
          (Gn(), ca && ((e = ca), (t = fa), (fa = ca = null), Es(e), t)))
      )
        for (e = 0; e < t.length; e++) Es(t[e]);
    }
  }
  function Ka(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[kt] || null;
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
    if (l && typeof l != 'function') throw Error(s(231, e, typeof l));
    return l;
  }
  var Ge = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Ci = !1;
  if (Ge)
    try {
      var Ja = {};
      (Object.defineProperty(Ja, 'passive', {
        get: function () {
          Ci = !0;
        },
      }),
        window.addEventListener('test', Ja, Ja),
        window.removeEventListener('test', Ja, Ja));
    } catch {
      Ci = !1;
    }
  var fl = null,
    Ui = null,
    Pu = null;
  function Ts() {
    if (Pu) return Pu;
    var t,
      e = Ui,
      l = e.length,
      a,
      u = 'value' in fl ? fl.value : fl.textContent,
      n = u.length;
    for (t = 0; t < l && e[t] === u[t]; t++);
    var i = l - t;
    for (a = 1; a <= i && e[l - a] === u[n - a]; a++);
    return (Pu = u.slice(t, 1 < a ? 1 - a : void 0));
  }
  function tn(t) {
    var e = t.keyCode;
    return (
      'charCode' in t ?
        ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function en() {
    return !0;
  }
  function zs() {
    return !1;
  }
  function Ft(t) {
    function e(l, a, u, n, i) {
      ((this._reactName = l),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null));
      for (var f in t)
        t.hasOwnProperty(f) && ((l = t[f]), (this[f] = l ? l(n) : n[f]));
      return (
        (this.isDefaultPrevented =
          (
            n.defaultPrevented != null ?
              n.defaultPrevented
            : n.returnValue === !1
          ) ?
            en
          : zs),
        (this.isPropagationStopped = zs),
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
            (this.isDefaultPrevented = en));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation ?
              l.stopPropagation()
            : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
            (this.isPropagationStopped = en));
        },
        persist: function () {},
        isPersistent: en,
      }),
      e
    );
  }
  var Bl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ln = Ft(Bl),
    wa = A({}, Bl, { view: 0, detail: 0 }),
    lm = Ft(wa),
    ji,
    Hi,
    $a,
    an = A({}, wa, {
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
      getModifierState: qi,
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
          : (t !== $a &&
              ($a && t.type === 'mousemove' ?
                ((ji = t.screenX - $a.screenX), (Hi = t.screenY - $a.screenY))
              : (Hi = ji = 0),
              ($a = t)),
            ji);
      },
      movementY: function (t) {
        return 'movementY' in t ? t.movementY : Hi;
      },
    }),
    As = Ft(an),
    am = A({}, an, { dataTransfer: 0 }),
    um = Ft(am),
    nm = A({}, wa, { relatedTarget: 0 }),
    Bi = Ft(nm),
    im = A({}, Bl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    cm = Ft(im),
    fm = A({}, Bl, {
      clipboardData: function (t) {
        return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
      },
    }),
    sm = Ft(fm),
    om = A({}, Bl, { data: 0 }),
    Rs = Ft(om),
    rm = {
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
    dm = {
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
    hm = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function mm(t) {
    var e = this.nativeEvent;
    return (
      e.getModifierState ? e.getModifierState(t)
      : (t = hm[t]) ? !!e[t]
      : !1
    );
  }
  function qi() {
    return mm;
  }
  var ym = A({}, wa, {
      key: function (t) {
        if (t.key) {
          var e = rm[t.key] || t.key;
          if (e !== 'Unidentified') return e;
        }
        return (
          t.type === 'keypress' ?
            ((t = tn(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
          : t.type === 'keydown' || t.type === 'keyup' ?
            dm[t.keyCode] || 'Unidentified'
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
      getModifierState: qi,
      charCode: function (t) {
        return t.type === 'keypress' ? tn(t) : 0;
      },
      keyCode: function (t) {
        return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
      },
      which: function (t) {
        return (
          t.type === 'keypress' ? tn(t)
          : t.type === 'keydown' || t.type === 'keyup' ? t.keyCode
          : 0
        );
      },
    }),
    vm = Ft(ym),
    gm = A({}, an, {
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
    Os = Ft(gm),
    pm = A({}, wa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: qi,
    }),
    Sm = Ft(pm),
    bm = A({}, Bl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Em = Ft(bm),
    _m = A({}, an, {
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
    Tm = Ft(_m),
    zm = A({}, Bl, { newState: 0, oldState: 0 }),
    Am = Ft(zm),
    Rm = [9, 13, 27, 32],
    Yi = Ge && 'CompositionEvent' in window,
    Wa = null;
  Ge && 'documentMode' in document && (Wa = document.documentMode);
  var Om = Ge && 'TextEvent' in window && !Wa,
    Ms = Ge && (!Yi || (Wa && 8 < Wa && 11 >= Wa)),
    xs = ' ',
    Ds = !1;
  function Ns(t, e) {
    switch (t) {
      case 'keyup':
        return Rm.indexOf(e.keyCode) !== -1;
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
  function Cs(t) {
    return (
      (t = t.detail),
      typeof t == 'object' && 'data' in t ? t.data : null
    );
  }
  var sa = !1;
  function Mm(t, e) {
    switch (t) {
      case 'compositionend':
        return Cs(e);
      case 'keypress':
        return e.which !== 32 ? null : ((Ds = !0), xs);
      case 'textInput':
        return ((t = e.data), t === xs && Ds ? null : t);
      default:
        return null;
    }
  }
  function xm(t, e) {
    if (sa)
      return t === 'compositionend' || (!Yi && Ns(t, e)) ?
          ((t = Ts()), (Pu = Ui = fl = null), (sa = !1), t)
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
        return Ms && e.locale !== 'ko' ? null : e.data;
      default:
        return null;
    }
  }
  var Dm = {
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
  function Us(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === 'input' ? !!Dm[t.type] : e === 'textarea';
  }
  function js(t, e, l, a) {
    (ca ?
      fa ? fa.push(a)
      : (fa = [a])
    : (ca = a),
      (e = wn(e, 'onChange')),
      0 < e.length &&
        ((l = new ln('onChange', 'change', null, l, a)),
        t.push({ event: l, listeners: e })));
  }
  var ka = null,
    Fa = null;
  function Nm(t) {
    gd(t, 0);
  }
  function un(t) {
    var e = Va(t);
    if (ys(e)) return t;
  }
  function Hs(t, e) {
    if (t === 'change') return e;
  }
  var Bs = !1;
  if (Ge) {
    var Li;
    if (Ge) {
      var Gi = 'oninput' in document;
      if (!Gi) {
        var qs = document.createElement('div');
        (qs.setAttribute('oninput', 'return;'),
          (Gi = typeof qs.oninput == 'function'));
      }
      Li = Gi;
    } else Li = !1;
    Bs = Li && (!document.documentMode || 9 < document.documentMode);
  }
  function Ys() {
    ka && (ka.detachEvent('onpropertychange', Ls), (Fa = ka = null));
  }
  function Ls(t) {
    if (t.propertyName === 'value' && un(Fa)) {
      var e = [];
      (js(e, Fa, t, Di(t)), _s(Nm, e));
    }
  }
  function Cm(t, e, l) {
    t === 'focusin' ?
      (Ys(), (ka = e), (Fa = l), ka.attachEvent('onpropertychange', Ls))
    : t === 'focusout' && Ys();
  }
  function Um(t) {
    if (t === 'selectionchange' || t === 'keyup' || t === 'keydown')
      return un(Fa);
  }
  function jm(t, e) {
    if (t === 'click') return un(e);
  }
  function Hm(t, e) {
    if (t === 'input' || t === 'change') return un(e);
  }
  function Bm(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var ie = typeof Object.is == 'function' ? Object.is : Bm;
  function Ia(t, e) {
    if (ie(t, e)) return !0;
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
      var u = l[a];
      if (!gi.call(e, u) || !ie(t[u], e[u])) return !1;
    }
    return !0;
  }
  function Gs(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Xs(t, e) {
    var l = Gs(t);
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
      l = Gs(l);
    }
  }
  function Qs(t, e) {
    return (
      t && e ?
        t === e ? !0
        : t && t.nodeType === 3 ? !1
        : e && e.nodeType === 3 ? Qs(t, e.parentNode)
        : 'contains' in t ? t.contains(e)
        : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1
    );
  }
  function Zs(t) {
    t =
      (
        t != null &&
        t.ownerDocument != null &&
        t.ownerDocument.defaultView != null
      ) ?
        t.ownerDocument.defaultView
      : window;
    for (var e = Fu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == 'string';
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Fu(t.document);
    }
    return e;
  }
  function Xi(t) {
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
  var qm = Ge && 'documentMode' in document && 11 >= document.documentMode,
    oa = null,
    Qi = null,
    Pa = null,
    Zi = !1;
  function Vs(t, e, l) {
    var a =
      l.window === l ? l.document
      : l.nodeType === 9 ? l
      : l.ownerDocument;
    Zi ||
      oa == null ||
      oa !== Fu(a) ||
      ((a = oa),
      'selectionStart' in a && Xi(a) ?
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
      (Pa && Ia(Pa, a)) ||
        ((Pa = a),
        (a = wn(Qi, 'onSelect')),
        0 < a.length &&
          ((e = new ln('onSelect', 'select', null, e, l)),
          t.push({ event: e, listeners: a }),
          (e.target = oa))));
  }
  function ql(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l['Webkit' + t] = 'webkit' + e),
      (l['Moz' + t] = 'moz' + e),
      l
    );
  }
  var ra = {
      animationend: ql('Animation', 'AnimationEnd'),
      animationiteration: ql('Animation', 'AnimationIteration'),
      animationstart: ql('Animation', 'AnimationStart'),
      transitionrun: ql('Transition', 'TransitionRun'),
      transitionstart: ql('Transition', 'TransitionStart'),
      transitioncancel: ql('Transition', 'TransitionCancel'),
      transitionend: ql('Transition', 'TransitionEnd'),
    },
    Vi = {},
    Ks = {};
  Ge &&
    ((Ks = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete ra.animationend.animation,
      delete ra.animationiteration.animation,
      delete ra.animationstart.animation),
    'TransitionEvent' in window || delete ra.transitionend.transition);
  function Yl(t) {
    if (Vi[t]) return Vi[t];
    if (!ra[t]) return t;
    var e = ra[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in Ks) return (Vi[t] = e[l]);
    return t;
  }
  var Js = Yl('animationend'),
    ws = Yl('animationiteration'),
    $s = Yl('animationstart'),
    Ym = Yl('transitionrun'),
    Lm = Yl('transitionstart'),
    Gm = Yl('transitioncancel'),
    Ws = Yl('transitionend'),
    ks = new Map(),
    Ki =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  Ki.push('scrollEnd');
  function Me(t, e) {
    (ks.set(t, e), Hl(e, [t]));
  }
  var nn =
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
    ve = [],
    da = 0,
    Ji = 0;
  function cn() {
    for (var t = da, e = (Ji = da = 0); e < t; ) {
      var l = ve[e];
      ve[e++] = null;
      var a = ve[e];
      ve[e++] = null;
      var u = ve[e];
      ve[e++] = null;
      var n = ve[e];
      if (((ve[e++] = null), a !== null && u !== null)) {
        var i = a.pending;
        (i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)),
          (a.pending = u));
      }
      n !== 0 && Fs(l, u, n);
    }
  }
  function fn(t, e, l, a) {
    ((ve[da++] = t),
      (ve[da++] = e),
      (ve[da++] = l),
      (ve[da++] = a),
      (Ji |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a));
  }
  function wi(t, e, l, a) {
    return (fn(t, e, l, a), sn(t));
  }
  function Ll(t, e) {
    return (fn(t, null, null, e), sn(t));
  }
  function Fs(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var u = !1, n = t.return; n !== null; )
      ((n.childLanes |= l),
        (a = n.alternate),
        a !== null && (a.childLanes |= l),
        n.tag === 22 &&
          ((t = n.stateNode), t === null || t._visibility & 1 || (u = !0)),
        (t = n),
        (n = n.return));
    return t.tag === 3 ?
        ((n = t.stateNode),
        u &&
          e !== null &&
          ((u = 31 - ne(l)),
          (t = n.hiddenUpdates),
          (a = t[u]),
          a === null ? (t[u] = [e]) : a.push(e),
          (e.lane = l | 536870912)),
        n)
      : null;
  }
  function sn(t) {
    if (50 < Eu) throw ((Eu = 0), (lf = null), Error(s(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var ha = {};
  function Xm(t, e, l, a) {
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
  function ce(t, e, l, a) {
    return new Xm(t, e, l, a);
  }
  function $i(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function Xe(t, e) {
    var l = t.alternate;
    return (
      l === null ?
        ((l = ce(t.tag, e, t.key, t.mode)),
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
  function Is(t, e) {
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
  function on(t, e, l, a, u, n) {
    var i = 0;
    if (((a = t), typeof t == 'function')) $i(t) && (i = 1);
    else if (typeof t == 'string')
      i =
        Jy(t, l, X.current) ? 26
        : t === 'html' || t === 'head' || t === 'body' ? 27
        : 5;
    else
      t: switch (t) {
        case Gt:
          return (
            (t = ce(31, l, e, u)),
            (t.elementType = Gt),
            (t.lanes = n),
            t
          );
        case V:
          return Gl(l.children, u, n, e);
        case G:
          ((i = 8), (u |= 24));
          break;
        case J:
          return (
            (t = ce(12, l, e, u | 2)),
            (t.elementType = J),
            (t.lanes = n),
            t
          );
        case bt:
          return (
            (t = ce(13, l, e, u)),
            (t.elementType = bt),
            (t.lanes = n),
            t
          );
        case Rt:
          return (
            (t = ce(19, l, e, u)),
            (t.elementType = Rt),
            (t.lanes = n),
            t
          );
        default:
          if (typeof t == 'object' && t !== null)
            switch (t.$$typeof) {
              case $:
                i = 10;
                break t;
              case L:
                i = 9;
                break t;
              case Et:
                i = 11;
                break t;
              case I:
                i = 14;
                break t;
              case xt:
                ((i = 16), (a = null));
                break t;
            }
          ((i = 29),
            (l = Error(s(130, t === null ? 'null' : typeof t, ''))),
            (a = null));
      }
    return (
      (e = ce(i, l, e, u)),
      (e.elementType = t),
      (e.type = a),
      (e.lanes = n),
      e
    );
  }
  function Gl(t, e, l, a) {
    return ((t = ce(7, t, a, e)), (t.lanes = l), t);
  }
  function Wi(t, e, l) {
    return ((t = ce(6, t, null, e)), (t.lanes = l), t);
  }
  function Ps(t) {
    var e = ce(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function ki(t, e, l) {
    return (
      (e = ce(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var to = new WeakMap();
  function ge(t, e) {
    if (typeof t == 'object' && t !== null) {
      var l = to.get(t);
      return l !== void 0 ? l : (
          ((e = { value: t, source: e, stack: Pf(e) }), to.set(t, e), e)
        );
    }
    return { value: t, source: e, stack: Pf(e) };
  }
  var ma = [],
    ya = 0,
    rn = null,
    tu = 0,
    pe = [],
    Se = 0,
    sl = null,
    Ue = 1,
    je = '';
  function Qe(t, e) {
    ((ma[ya++] = tu), (ma[ya++] = rn), (rn = t), (tu = e));
  }
  function eo(t, e, l) {
    ((pe[Se++] = Ue), (pe[Se++] = je), (pe[Se++] = sl), (sl = t));
    var a = Ue;
    t = je;
    var u = 32 - ne(a) - 1;
    ((a &= ~(1 << u)), (l += 1));
    var n = 32 - ne(e) + u;
    if (30 < n) {
      var i = u - (u % 5);
      ((n = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (u -= i),
        (Ue = (1 << (32 - ne(e) + u)) | (l << u) | a),
        (je = n + t));
    } else ((Ue = (1 << n) | (l << u) | a), (je = t));
  }
  function Fi(t) {
    t.return !== null && (Qe(t, 1), eo(t, 1, 0));
  }
  function Ii(t) {
    for (; t === rn; )
      ((rn = ma[--ya]), (ma[ya] = null), (tu = ma[--ya]), (ma[ya] = null));
    for (; t === sl; )
      ((sl = pe[--Se]),
        (pe[Se] = null),
        (je = pe[--Se]),
        (pe[Se] = null),
        (Ue = pe[--Se]),
        (pe[Se] = null));
  }
  function lo(t, e) {
    ((pe[Se++] = Ue),
      (pe[Se++] = je),
      (pe[Se++] = sl),
      (Ue = e.id),
      (je = e.overflow),
      (sl = t));
  }
  var Qt = null,
    _t = null,
    ct = !1,
    ol = null,
    be = !1,
    Pi = Error(s(519));
  function rl(t) {
    var e = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ?
          'text'
        : 'HTML',
        '',
      ),
    );
    throw (eu(ge(e, t)), Pi);
  }
  function ao(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps;
    switch (((e[Xt] = t), (e[kt] = a), l)) {
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
        for (l = 0; l < Tu.length; l++) ut(Tu[l], e);
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
          vs(
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
        (ut('invalid', e), ps(e, a.value, a.defaultValue, a.children));
    }
    ((l = a.children),
      (
        (typeof l != 'string' &&
          typeof l != 'number' &&
          typeof l != 'bigint') ||
        e.textContent === '' + l ||
        a.suppressHydrationWarning === !0 ||
        Ed(e.textContent, l)
      ) ?
        (a.popover != null && (ut('beforetoggle', e), ut('toggle', e)),
        a.onScroll != null && ut('scroll', e),
        a.onScrollEnd != null && ut('scrollend', e),
        a.onClick != null && (e.onclick = Le),
        (e = !0))
      : (e = !1),
      e || rl(t, !0));
  }
  function uo(t) {
    for (Qt = t.return; Qt; )
      switch (Qt.tag) {
        case 5:
        case 31:
        case 13:
          be = !1;
          return;
        case 27:
        case 3:
          be = !0;
          return;
        default:
          Qt = Qt.return;
      }
  }
  function va(t) {
    if (t !== Qt) return !1;
    if (!ct) return (uo(t), (ct = !0), !1);
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== 'form' && l !== 'button') || pf(t.type, t.memoizedProps))),
        (l = !l)),
      l && _t && rl(t),
      uo(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(s(317));
      _t = Dd(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(s(317));
      _t = Dd(t);
    } else
      e === 27 ?
        ((e = _t), Al(t.type) ? ((t = Tf), (Tf = null), (_t = t)) : (_t = e))
      : (_t = Qt ? _e(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Xl() {
    ((_t = Qt = null), (ct = !1));
  }
  function tc() {
    var t = ol;
    return (
      t !== null &&
        (ee === null ? (ee = t) : ee.push.apply(ee, t), (ol = null)),
      t
    );
  }
  function eu(t) {
    ol === null ? (ol = [t]) : ol.push(t);
  }
  var ec = v(null),
    Ql = null,
    Ze = null;
  function dl(t, e, l) {
    (B(ec, e._currentValue), (e._currentValue = l));
  }
  function Ve(t) {
    ((t._currentValue = ec.current), j(ec));
  }
  function lc(t, e, l) {
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
  function ac(t, e, l, a) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var f = n;
          n = u;
          for (var d = 0; d < e.length; d++)
            if (f.context === e[d]) {
              ((n.lanes |= l),
                (f = n.alternate),
                f !== null && (f.lanes |= l),
                lc(n.return, l, t),
                a || (i = null));
              break t;
            }
          n = f.next;
        }
      } else if (u.tag === 18) {
        if (((i = u.return), i === null)) throw Error(s(341));
        ((i.lanes |= l),
          (n = i.alternate),
          n !== null && (n.lanes |= l),
          lc(i, l, t),
          (i = null));
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (((u = i.sibling), u !== null)) {
            ((u.return = i.return), (i = u));
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function ga(t, e, l, a) {
    t = null;
    for (var u = e, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(s(387));
        if (((i = i.memoizedProps), i !== null)) {
          var f = u.type;
          ie(u.pendingProps.value, i.value) ||
            (t !== null ? t.push(f) : (t = [f]));
        }
      } else if (u === rt.current) {
        if (((i = u.alternate), i === null)) throw Error(s(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (t !== null ? t.push(Mu) : (t = [Mu]));
      }
      u = u.return;
    }
    (t !== null && ac(e, t, l, a), (e.flags |= 262144));
  }
  function dn(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ie(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Zl(t) {
    ((Ql = t),
      (Ze = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function Zt(t) {
    return no(Ql, t);
  }
  function hn(t, e) {
    return (Ql === null && Zl(t), no(t, e));
  }
  function no(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), Ze === null)) {
      if (t === null) throw Error(s(308));
      ((Ze = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else Ze = Ze.next = e;
    return l;
  }
  var Qm =
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
    Zm = c.unstable_scheduleCallback,
    Vm = c.unstable_NormalPriority,
    Ut = {
      $$typeof: $,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function uc() {
    return { controller: new Qm(), data: new Map(), refCount: 0 };
  }
  function lu(t) {
    (t.refCount--,
      t.refCount === 0 &&
        Zm(Vm, function () {
          t.controller.abort();
        }));
  }
  var au = null,
    nc = 0,
    pa = 0,
    Sa = null;
  function Km(t, e) {
    if (au === null) {
      var l = (au = []);
      ((nc = 0),
        (pa = sf()),
        (Sa = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        }));
    }
    return (nc++, e.then(io, io), e);
  }
  function io() {
    if (--nc === 0 && au !== null) {
      Sa !== null && (Sa.status = 'fulfilled');
      var t = au;
      ((au = null), (pa = 0), (Sa = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Jm(t, e) {
    var l = [],
      a = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (u) {
          l.push(u);
        },
      };
    return (
      t.then(
        function () {
          ((a.status = 'fulfilled'), (a.value = e));
          for (var u = 0; u < l.length; u++) (0, l[u])(e);
        },
        function (u) {
          for (a.status = 'rejected', a.reason = u, u = 0; u < l.length; u++)
            (0, l[u])(void 0);
        },
      ),
      a
    );
  }
  var co = O.S;
  O.S = function (t, e) {
    ((Kr = ae()),
      typeof e == 'object' &&
        e !== null &&
        typeof e.then == 'function' &&
        Km(t, e),
      co !== null && co(t, e));
  };
  var Vl = v(null);
  function ic() {
    var t = Vl.current;
    return t !== null ? t : St.pooledCache;
  }
  function mn(t, e) {
    e === null ? B(Vl, Vl.current) : B(Vl, e.pool);
  }
  function fo() {
    var t = ic();
    return t === null ? null : { parent: Ut._currentValue, pool: t };
  }
  var ba = Error(s(460)),
    cc = Error(s(474)),
    yn = Error(s(542)),
    vn = { then: function () {} };
  function so(t) {
    return ((t = t.status), t === 'fulfilled' || t === 'rejected');
  }
  function oo(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(Le, Le), (e = l)),
      e.status)
    ) {
      case 'fulfilled':
        return e.value;
      case 'rejected':
        throw ((t = e.reason), ho(t), t);
      default:
        if (typeof e.status == 'string') e.then(Le, Le);
        else {
          if (((t = St), t !== null && 100 < t.shellSuspendCounter))
            throw Error(s(482));
          ((t = e),
            (t.status = 'pending'),
            t.then(
              function (a) {
                if (e.status === 'pending') {
                  var u = e;
                  ((u.status = 'fulfilled'), (u.value = a));
                }
              },
              function (a) {
                if (e.status === 'pending') {
                  var u = e;
                  ((u.status = 'rejected'), (u.reason = a));
                }
              },
            ));
        }
        switch (e.status) {
          case 'fulfilled':
            return e.value;
          case 'rejected':
            throw ((t = e.reason), ho(t), t);
        }
        throw ((Jl = e), ba);
    }
  }
  function Kl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == 'object' && typeof l.then == 'function' ?
          ((Jl = l), ba)
        : l;
    }
  }
  var Jl = null;
  function ro() {
    if (Jl === null) throw Error(s(459));
    var t = Jl;
    return ((Jl = null), t);
  }
  function ho(t) {
    if (t === ba || t === yn) throw Error(s(483));
  }
  var Ea = null,
    uu = 0;
  function gn(t) {
    var e = uu;
    return ((uu += 1), Ea === null && (Ea = []), oo(Ea, t, e));
  }
  function nu(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function pn(t, e) {
    throw e.$$typeof === q ?
        Error(s(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          s(
            31,
            t === '[object Object]' ?
              'object with keys {' + Object.keys(e).join(', ') + '}'
            : t,
          ),
        ));
  }
  function mo(t) {
    function e(p, y) {
      if (t) {
        var b = p.deletions;
        b === null ? ((p.deletions = [y]), (p.flags |= 16)) : b.push(y);
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
    function u(p, y) {
      return ((p = Xe(p, y)), (p.index = 0), (p.sibling = null), p);
    }
    function n(p, y, b) {
      return (
        (p.index = b),
        t ?
          ((b = p.alternate),
          b !== null ?
            ((b = b.index), b < y ? ((p.flags |= 67108866), y) : b)
          : ((p.flags |= 67108866), y))
        : ((p.flags |= 1048576), y)
      );
    }
    function i(p) {
      return (t && p.alternate === null && (p.flags |= 67108866), p);
    }
    function f(p, y, b, D) {
      return y === null || y.tag !== 6 ?
          ((y = Wi(b, p.mode, D)), (y.return = p), y)
        : ((y = u(y, b)), (y.return = p), y);
    }
    function d(p, y, b, D) {
      var K = b.type;
      return (
        K === V ? R(p, y, b.props.children, D, b.key)
        : (
          y !== null &&
          (y.elementType === K ||
            (typeof K == 'object' &&
              K !== null &&
              K.$$typeof === xt &&
              Kl(K) === y.type))
        ) ?
          ((y = u(y, b.props)), nu(y, b), (y.return = p), y)
        : ((y = on(b.type, b.key, b.props, null, p.mode, D)),
          nu(y, b),
          (y.return = p),
          y)
      );
    }
    function _(p, y, b, D) {
      return (
          y === null ||
            y.tag !== 4 ||
            y.stateNode.containerInfo !== b.containerInfo ||
            y.stateNode.implementation !== b.implementation
        ) ?
          ((y = ki(b, p.mode, D)), (y.return = p), y)
        : ((y = u(y, b.children || [])), (y.return = p), y);
    }
    function R(p, y, b, D, K) {
      return y === null || y.tag !== 7 ?
          ((y = Gl(b, p.mode, D, K)), (y.return = p), y)
        : ((y = u(y, b)), (y.return = p), y);
    }
    function C(p, y, b) {
      if (
        (typeof y == 'string' && y !== '') ||
        typeof y == 'number' ||
        typeof y == 'bigint'
      )
        return ((y = Wi('' + y, p.mode, b)), (y.return = p), y);
      if (typeof y == 'object' && y !== null) {
        switch (y.$$typeof) {
          case Z:
            return (
              (b = on(y.type, y.key, y.props, null, p.mode, b)),
              nu(b, y),
              (b.return = p),
              b
            );
          case k:
            return ((y = ki(y, p.mode, b)), (y.return = p), y);
          case xt:
            return ((y = Kl(y)), C(p, y, b));
        }
        if (Oe(y) || Wt(y))
          return ((y = Gl(y, p.mode, b, null)), (y.return = p), y);
        if (typeof y.then == 'function') return C(p, gn(y), b);
        if (y.$$typeof === $) return C(p, hn(p, y), b);
        pn(p, y);
      }
      return null;
    }
    function T(p, y, b, D) {
      var K = y !== null ? y.key : null;
      if (
        (typeof b == 'string' && b !== '') ||
        typeof b == 'number' ||
        typeof b == 'bigint'
      )
        return K !== null ? null : f(p, y, '' + b, D);
      if (typeof b == 'object' && b !== null) {
        switch (b.$$typeof) {
          case Z:
            return b.key === K ? d(p, y, b, D) : null;
          case k:
            return b.key === K ? _(p, y, b, D) : null;
          case xt:
            return ((b = Kl(b)), T(p, y, b, D));
        }
        if (Oe(b) || Wt(b)) return K !== null ? null : R(p, y, b, D, null);
        if (typeof b.then == 'function') return T(p, y, gn(b), D);
        if (b.$$typeof === $) return T(p, y, hn(p, b), D);
        pn(p, b);
      }
      return null;
    }
    function z(p, y, b, D, K) {
      if (
        (typeof D == 'string' && D !== '') ||
        typeof D == 'number' ||
        typeof D == 'bigint'
      )
        return ((p = p.get(b) || null), f(y, p, '' + D, K));
      if (typeof D == 'object' && D !== null) {
        switch (D.$$typeof) {
          case Z:
            return (
              (p = p.get(D.key === null ? b : D.key) || null),
              d(y, p, D, K)
            );
          case k:
            return (
              (p = p.get(D.key === null ? b : D.key) || null),
              _(y, p, D, K)
            );
          case xt:
            return ((D = Kl(D)), z(p, y, b, D, K));
        }
        if (Oe(D) || Wt(D))
          return ((p = p.get(b) || null), R(y, p, D, K, null));
        if (typeof D.then == 'function') return z(p, y, b, gn(D), K);
        if (D.$$typeof === $) return z(p, y, b, hn(y, D), K);
        pn(y, D);
      }
      return null;
    }
    function Y(p, y, b, D) {
      for (
        var K = null, ft = null, Q = y, et = (y = 0), it = null;
        Q !== null && et < b.length;
        et++
      ) {
        Q.index > et ? ((it = Q), (Q = null)) : (it = Q.sibling);
        var st = T(p, Q, b[et], D);
        if (st === null) {
          Q === null && (Q = it);
          break;
        }
        (t && Q && st.alternate === null && e(p, Q),
          (y = n(st, y, et)),
          ft === null ? (K = st) : (ft.sibling = st),
          (ft = st),
          (Q = it));
      }
      if (et === b.length) return (l(p, Q), ct && Qe(p, et), K);
      if (Q === null) {
        for (; et < b.length; et++)
          ((Q = C(p, b[et], D)),
            Q !== null &&
              ((y = n(Q, y, et)),
              ft === null ? (K = Q) : (ft.sibling = Q),
              (ft = Q)));
        return (ct && Qe(p, et), K);
      }
      for (Q = a(Q); et < b.length; et++)
        ((it = z(Q, p, et, b[et], D)),
          it !== null &&
            (t &&
              it.alternate !== null &&
              Q.delete(it.key === null ? et : it.key),
            (y = n(it, y, et)),
            ft === null ? (K = it) : (ft.sibling = it),
            (ft = it)));
      return (
        t &&
          Q.forEach(function (Dl) {
            return e(p, Dl);
          }),
        ct && Qe(p, et),
        K
      );
    }
    function w(p, y, b, D) {
      if (b == null) throw Error(s(151));
      for (
        var K = null, ft = null, Q = y, et = (y = 0), it = null, st = b.next();
        Q !== null && !st.done;
        et++, st = b.next()
      ) {
        Q.index > et ? ((it = Q), (Q = null)) : (it = Q.sibling);
        var Dl = T(p, Q, st.value, D);
        if (Dl === null) {
          Q === null && (Q = it);
          break;
        }
        (t && Q && Dl.alternate === null && e(p, Q),
          (y = n(Dl, y, et)),
          ft === null ? (K = Dl) : (ft.sibling = Dl),
          (ft = Dl),
          (Q = it));
      }
      if (st.done) return (l(p, Q), ct && Qe(p, et), K);
      if (Q === null) {
        for (; !st.done; et++, st = b.next())
          ((st = C(p, st.value, D)),
            st !== null &&
              ((y = n(st, y, et)),
              ft === null ? (K = st) : (ft.sibling = st),
              (ft = st)));
        return (ct && Qe(p, et), K);
      }
      for (Q = a(Q); !st.done; et++, st = b.next())
        ((st = z(Q, p, et, st.value, D)),
          st !== null &&
            (t &&
              st.alternate !== null &&
              Q.delete(st.key === null ? et : st.key),
            (y = n(st, y, et)),
            ft === null ? (K = st) : (ft.sibling = st),
            (ft = st)));
      return (
        t &&
          Q.forEach(function (av) {
            return e(p, av);
          }),
        ct && Qe(p, et),
        K
      );
    }
    function gt(p, y, b, D) {
      if (
        (typeof b == 'object' &&
          b !== null &&
          b.type === V &&
          b.key === null &&
          (b = b.props.children),
        typeof b == 'object' && b !== null)
      ) {
        switch (b.$$typeof) {
          case Z:
            t: {
              for (var K = b.key; y !== null; ) {
                if (y.key === K) {
                  if (((K = b.type), K === V)) {
                    if (y.tag === 7) {
                      (l(p, y.sibling),
                        (D = u(y, b.props.children)),
                        (D.return = p),
                        (p = D));
                      break t;
                    }
                  } else if (
                    y.elementType === K ||
                    (typeof K == 'object' &&
                      K !== null &&
                      K.$$typeof === xt &&
                      Kl(K) === y.type)
                  ) {
                    (l(p, y.sibling),
                      (D = u(y, b.props)),
                      nu(D, b),
                      (D.return = p),
                      (p = D));
                    break t;
                  }
                  l(p, y);
                  break;
                } else e(p, y);
                y = y.sibling;
              }
              b.type === V ?
                ((D = Gl(b.props.children, p.mode, D, b.key)),
                (D.return = p),
                (p = D))
              : ((D = on(b.type, b.key, b.props, null, p.mode, D)),
                nu(D, b),
                (D.return = p),
                (p = D));
            }
            return i(p);
          case k:
            t: {
              for (K = b.key; y !== null; ) {
                if (y.key === K)
                  if (
                    y.tag === 4 &&
                    y.stateNode.containerInfo === b.containerInfo &&
                    y.stateNode.implementation === b.implementation
                  ) {
                    (l(p, y.sibling),
                      (D = u(y, b.children || [])),
                      (D.return = p),
                      (p = D));
                    break t;
                  } else {
                    l(p, y);
                    break;
                  }
                else e(p, y);
                y = y.sibling;
              }
              ((D = ki(b, p.mode, D)), (D.return = p), (p = D));
            }
            return i(p);
          case xt:
            return ((b = Kl(b)), gt(p, y, b, D));
        }
        if (Oe(b)) return Y(p, y, b, D);
        if (Wt(b)) {
          if (((K = Wt(b)), typeof K != 'function')) throw Error(s(150));
          return ((b = K.call(b)), w(p, y, b, D));
        }
        if (typeof b.then == 'function') return gt(p, y, gn(b), D);
        if (b.$$typeof === $) return gt(p, y, hn(p, b), D);
        pn(p, b);
      }
      return (
          (typeof b == 'string' && b !== '') ||
            typeof b == 'number' ||
            typeof b == 'bigint'
        ) ?
          ((b = '' + b),
          y !== null && y.tag === 6 ?
            (l(p, y.sibling), (D = u(y, b)), (D.return = p), (p = D))
          : (l(p, y), (D = Wi(b, p.mode, D)), (D.return = p), (p = D)),
          i(p))
        : l(p, y);
    }
    return function (p, y, b, D) {
      try {
        uu = 0;
        var K = gt(p, y, b, D);
        return ((Ea = null), K);
      } catch (Q) {
        if (Q === ba || Q === yn) throw Q;
        var ft = ce(29, Q, null, p.mode);
        return ((ft.lanes = D), (ft.return = p), ft);
      }
    };
  }
  var wl = mo(!0),
    yo = mo(!1),
    hl = !1;
  function fc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function sc(t, e) {
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
  function ml(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function yl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (ot & 2) !== 0)) {
      var u = a.pending;
      return (
        u === null ? (e.next = e) : ((e.next = u.next), (u.next = e)),
        (a.pending = e),
        (e = sn(t)),
        Fs(t, null, l),
        e
      );
    }
    return (fn(t, a, e, l), sn(t));
  }
  function iu(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
    ) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (l |= a), (e.lanes = l), ns(t, l));
    }
  }
  function oc(t, e) {
    var l = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var u = null,
        n = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var i = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (n === null ? (u = n = i) : (n = n.next = i), (l = l.next));
        } while (l !== null);
        n === null ? (u = n = e) : (n = n.next = e);
      } else u = n = e;
      ((l = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
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
  var rc = !1;
  function cu() {
    if (rc) {
      var t = Sa;
      if (t !== null) throw t;
    }
  }
  function fu(t, e, l, a) {
    rc = !1;
    var u = t.updateQueue;
    hl = !1;
    var n = u.firstBaseUpdate,
      i = u.lastBaseUpdate,
      f = u.shared.pending;
    if (f !== null) {
      u.shared.pending = null;
      var d = f,
        _ = d.next;
      ((d.next = null), i === null ? (n = _) : (i.next = _), (i = d));
      var R = t.alternate;
      R !== null &&
        ((R = R.updateQueue),
        (f = R.lastBaseUpdate),
        f !== i &&
          (f === null ? (R.firstBaseUpdate = _) : (f.next = _),
          (R.lastBaseUpdate = d)));
    }
    if (n !== null) {
      var C = u.baseState;
      ((i = 0), (R = _ = d = null), (f = n));
      do {
        var T = f.lane & -536870913,
          z = T !== f.lane;
        if (z ? (nt & T) === T : (a & T) === T) {
          (T !== 0 && T === pa && (rc = !0),
            R !== null &&
              (R = R.next =
                {
                  lane: 0,
                  tag: f.tag,
                  payload: f.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var Y = t,
              w = f;
            T = e;
            var gt = l;
            switch (w.tag) {
              case 1:
                if (((Y = w.payload), typeof Y == 'function')) {
                  C = Y.call(gt, C, T);
                  break t;
                }
                C = Y;
                break t;
              case 3:
                Y.flags = (Y.flags & -65537) | 128;
              case 0:
                if (
                  ((Y = w.payload),
                  (T = typeof Y == 'function' ? Y.call(gt, C, T) : Y),
                  T == null)
                )
                  break t;
                C = A({}, C, T);
                break t;
              case 2:
                hl = !0;
            }
          }
          ((T = f.callback),
            T !== null &&
              ((t.flags |= 64),
              z && (t.flags |= 8192),
              (z = u.callbacks),
              z === null ? (u.callbacks = [T]) : z.push(T)));
        } else
          ((z = {
            lane: T,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            R === null ? ((_ = R = z), (d = C)) : (R = R.next = z),
            (i |= T));
        if (((f = f.next), f === null)) {
          if (((f = u.shared.pending), f === null)) break;
          ((z = f),
            (f = z.next),
            (z.next = null),
            (u.lastBaseUpdate = z),
            (u.shared.pending = null));
        }
      } while (!0);
      (R === null && (d = C),
        (u.baseState = d),
        (u.firstBaseUpdate = _),
        (u.lastBaseUpdate = R),
        n === null && (u.shared.lanes = 0),
        (bl |= i),
        (t.lanes = i),
        (t.memoizedState = C));
    }
  }
  function vo(t, e) {
    if (typeof t != 'function') throw Error(s(191, t));
    t.call(e);
  }
  function go(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) vo(l[t], e);
  }
  var _a = v(null),
    Sn = v(0);
  function po(t, e) {
    ((t = Pe), B(Sn, t), B(_a, e), (Pe = t | e.baseLanes));
  }
  function dc() {
    (B(Sn, Pe), B(_a, _a.current));
  }
  function hc() {
    ((Pe = Sn.current), j(_a), j(Sn));
  }
  var fe = v(null),
    Ee = null;
  function vl(t) {
    var e = t.alternate;
    (B(Nt, Nt.current & 1),
      B(fe, t),
      Ee === null &&
        (e === null || _a.current !== null || e.memoizedState !== null) &&
        (Ee = t));
  }
  function mc(t) {
    (B(Nt, Nt.current), B(fe, t), Ee === null && (Ee = t));
  }
  function So(t) {
    t.tag === 22 ?
      (B(Nt, Nt.current), B(fe, t), Ee === null && (Ee = t))
    : gl();
  }
  function gl() {
    (B(Nt, Nt.current), B(fe, fe.current));
  }
  function se(t) {
    (j(fe), Ee === t && (Ee = null), j(Nt));
  }
  var Nt = v(0);
  function bn(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || Ef(l) || _f(l)))
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
  var Ke = 0,
    tt = null,
    yt = null,
    jt = null,
    En = !1,
    Ta = !1,
    $l = !1,
    _n = 0,
    su = 0,
    za = null,
    wm = 0;
  function Ot() {
    throw Error(s(321));
  }
  function yc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!ie(t[l], e[l])) return !1;
    return !0;
  }
  function vc(t, e, l, a, u, n) {
    return (
      (Ke = n),
      (tt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (O.H = t === null || t.memoizedState === null ? lr : Nc),
      ($l = !1),
      (n = l(a, u)),
      ($l = !1),
      Ta && (n = Eo(e, l, a, u)),
      bo(t),
      n
    );
  }
  function bo(t) {
    O.H = du;
    var e = yt !== null && yt.next !== null;
    if (((Ke = 0), (jt = yt = tt = null), (En = !1), (su = 0), (za = null), e))
      throw Error(s(300));
    t === null ||
      Ht ||
      ((t = t.dependencies), t !== null && dn(t) && (Ht = !0));
  }
  function Eo(t, e, l, a) {
    tt = t;
    var u = 0;
    do {
      if ((Ta && (za = null), (su = 0), (Ta = !1), 25 <= u))
        throw Error(s(301));
      if (((u += 1), (jt = yt = null), t.updateQueue != null)) {
        var n = t.updateQueue;
        ((n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0));
      }
      ((O.H = ar), (n = e(l, a)));
    } while (Ta);
    return n;
  }
  function $m() {
    var t = O.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == 'function' ? ou(e) : e),
      (t = t.useState()[0]),
      (yt !== null ? yt.memoizedState : null) !== t && (tt.flags |= 1024),
      e
    );
  }
  function gc() {
    var t = _n !== 0;
    return ((_n = 0), t);
  }
  function pc(t, e, l) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l));
  }
  function Sc(t) {
    if (En) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      En = !1;
    }
    ((Ke = 0), (jt = yt = tt = null), (Ta = !1), (su = _n = 0), (za = null));
  }
  function $t() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (jt === null ? (tt.memoizedState = jt = t) : (jt = jt.next = t), jt);
  }
  function Ct() {
    if (yt === null) {
      var t = tt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = yt.next;
    var e = jt === null ? tt.memoizedState : jt.next;
    if (e !== null) ((jt = e), (yt = t));
    else {
      if (t === null)
        throw tt.alternate === null ? Error(s(467)) : Error(s(310));
      ((yt = t),
        (t = {
          memoizedState: yt.memoizedState,
          baseState: yt.baseState,
          baseQueue: yt.baseQueue,
          queue: yt.queue,
          next: null,
        }),
        jt === null ? (tt.memoizedState = jt = t) : (jt = jt.next = t));
    }
    return jt;
  }
  function Tn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ou(t) {
    var e = su;
    return (
      (su += 1),
      za === null && (za = []),
      (t = oo(za, t, e)),
      (e = tt),
      (jt === null ? e.memoizedState : jt.next) === null &&
        ((e = e.alternate),
        (O.H = e === null || e.memoizedState === null ? lr : Nc)),
      t
    );
  }
  function zn(t) {
    if (t !== null && typeof t == 'object') {
      if (typeof t.then == 'function') return ou(t);
      if (t.$$typeof === $) return Zt(t);
    }
    throw Error(s(438, String(t)));
  }
  function bc(t) {
    var e = null,
      l = tt.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var a = tt.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = Tn()), (tt.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = he;
    return (e.index++, l);
  }
  function Je(t, e) {
    return typeof e == 'function' ? e(t) : e;
  }
  function An(t) {
    var e = Ct();
    return Ec(e, yt, t);
  }
  function Ec(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = l;
    var u = t.baseQueue,
      n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        ((u.next = n.next), (n.next = i));
      }
      ((e.baseQueue = u = n), (a.pending = null));
    }
    if (((n = t.baseState), u === null)) t.memoizedState = n;
    else {
      e = u.next;
      var f = (i = null),
        d = null,
        _ = e,
        R = !1;
      do {
        var C = _.lane & -536870913;
        if (C !== _.lane ? (nt & C) === C : (Ke & C) === C) {
          var T = _.revertLane;
          if (T === 0)
            (d !== null &&
              (d = d.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: _.action,
                  hasEagerState: _.hasEagerState,
                  eagerState: _.eagerState,
                  next: null,
                }),
              C === pa && (R = !0));
          else if ((Ke & T) === T) {
            ((_ = _.next), T === pa && (R = !0));
            continue;
          } else
            ((C = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null,
            }),
              d === null ? ((f = d = C), (i = n)) : (d = d.next = C),
              (tt.lanes |= T),
              (bl |= T));
          ((C = _.action),
            $l && l(n, C),
            (n = _.hasEagerState ? _.eagerState : l(n, C)));
        } else
          ((T = {
            lane: C,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null,
          }),
            d === null ? ((f = d = T), (i = n)) : (d = d.next = T),
            (tt.lanes |= C),
            (bl |= C));
        _ = _.next;
      } while (_ !== null && _ !== e);
      if (
        (d === null ? (i = n) : (d.next = f),
        !ie(n, t.memoizedState) && ((Ht = !0), R && ((l = Sa), l !== null)))
      )
        throw l;
      ((t.memoizedState = n),
        (t.baseState = i),
        (t.baseQueue = d),
        (a.lastRenderedState = n));
    }
    return (u === null && (a.lanes = 0), [t.memoizedState, a.dispatch]);
  }
  function _c(t) {
    var e = Ct(),
      l = e.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch,
      u = l.pending,
      n = e.memoizedState;
    if (u !== null) {
      l.pending = null;
      var i = (u = u.next);
      do ((n = t(n, i.action)), (i = i.next));
      while (i !== u);
      (ie(n, e.memoizedState) || (Ht = !0),
        (e.memoizedState = n),
        e.baseQueue === null && (e.baseState = n),
        (l.lastRenderedState = n));
    }
    return [n, a];
  }
  function _o(t, e, l) {
    var a = tt,
      u = Ct(),
      n = ct;
    if (n) {
      if (l === void 0) throw Error(s(407));
      l = l();
    } else l = e();
    var i = !ie((yt || u).memoizedState, l);
    if (
      (i && ((u.memoizedState = l), (Ht = !0)),
      (u = u.queue),
      Ac(Ao.bind(null, a, u, t), [t]),
      u.getSnapshot !== e || i || (jt !== null && jt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Aa(9, { destroy: void 0 }, zo.bind(null, a, u, l, e), null),
        St === null)
      )
        throw Error(s(349));
      n || (Ke & 127) !== 0 || To(a, e, l);
    }
    return l;
  }
  function To(t, e, l) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = tt.updateQueue),
      e === null ?
        ((e = Tn()), (tt.updateQueue = e), (e.stores = [t]))
      : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t)));
  }
  function zo(t, e, l, a) {
    ((e.value = l), (e.getSnapshot = a), Ro(e) && Oo(t));
  }
  function Ao(t, e, l) {
    return l(function () {
      Ro(e) && Oo(t);
    });
  }
  function Ro(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ie(t, l);
    } catch {
      return !0;
    }
  }
  function Oo(t) {
    var e = Ll(t, 2);
    e !== null && le(e, t, 2);
  }
  function Tc(t) {
    var e = $t();
    if (typeof t == 'function') {
      var l = t;
      if (((t = l()), $l)) {
        il(!0);
        try {
          l();
        } finally {
          il(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Je,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Mo(t, e, l, a) {
    return ((t.baseState = l), Ec(t, yt, typeof a == 'function' ? a : Je));
  }
  function Wm(t, e, l, a, u) {
    if (Mn(t)) throw Error(s(485));
    if (((t = e.action), t !== null)) {
      var n = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i);
        },
      };
      (O.T !== null ? l(!0) : (n.isTransition = !1),
        a(n),
        (l = e.pending),
        l === null ?
          ((n.next = e.pending = n), xo(e, n))
        : ((n.next = l.next), (e.pending = l.next = n)));
    }
  }
  function xo(t, e) {
    var l = e.action,
      a = e.payload,
      u = t.state;
    if (e.isTransition) {
      var n = O.T,
        i = {};
      O.T = i;
      try {
        var f = l(u, a),
          d = O.S;
        (d !== null && d(i, f), Do(t, e, f));
      } catch (_) {
        zc(t, e, _);
      } finally {
        (n !== null && i.types !== null && (n.types = i.types), (O.T = n));
      }
    } else
      try {
        ((n = l(u, a)), Do(t, e, n));
      } catch (_) {
        zc(t, e, _);
      }
  }
  function Do(t, e, l) {
    l !== null && typeof l == 'object' && typeof l.then == 'function' ?
      l.then(
        function (a) {
          No(t, e, a);
        },
        function (a) {
          return zc(t, e, a);
        },
      )
    : No(t, e, l);
  }
  function No(t, e, l) {
    ((e.status = 'fulfilled'),
      (e.value = l),
      Co(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), xo(t, l))));
  }
  function zc(t, e, l) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do ((e.status = 'rejected'), (e.reason = l), Co(e), (e = e.next));
      while (e !== a);
    }
    t.action = null;
  }
  function Co(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Uo(t, e) {
    return e;
  }
  function jo(t, e) {
    if (ct) {
      var l = St.formState;
      if (l !== null) {
        t: {
          var a = tt;
          if (ct) {
            if (_t) {
              e: {
                for (var u = _t, n = be; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break e;
                  }
                  if (((u = _e(u.nextSibling)), u === null)) {
                    u = null;
                    break e;
                  }
                }
                ((n = u.data), (u = n === 'F!' || n === 'F' ? u : null));
              }
              if (u) {
                ((_t = _e(u.nextSibling)), (a = u.data === 'F!'));
                break t;
              }
            }
            rl(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return (
      (l = $t()),
      (l.memoizedState = l.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Uo,
        lastRenderedState: e,
      }),
      (l.queue = a),
      (l = Po.bind(null, tt, a)),
      (a.dispatch = l),
      (a = Tc(!1)),
      (n = Dc.bind(null, tt, !1, a.queue)),
      (a = $t()),
      (u = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = u),
      (l = Wm.bind(null, tt, u, n, l)),
      (u.dispatch = l),
      (a.memoizedState = t),
      [e, l, !1]
    );
  }
  function Ho(t) {
    var e = Ct();
    return Bo(e, yt, t);
  }
  function Bo(t, e, l) {
    if (
      ((e = Ec(t, e, Uo)[0]),
      (t = An(Je)[0]),
      typeof e == 'object' && e !== null && typeof e.then == 'function')
    )
      try {
        var a = ou(e);
      } catch (i) {
        throw i === ba ? yn : i;
      }
    else a = e;
    e = Ct();
    var u = e.queue,
      n = u.dispatch;
    return (
      l !== e.memoizedState &&
        ((tt.flags |= 2048),
        Aa(9, { destroy: void 0 }, km.bind(null, u, l), null)),
      [a, n, t]
    );
  }
  function km(t, e) {
    t.action = e;
  }
  function qo(t) {
    var e = Ct(),
      l = yt;
    if (l !== null) return Bo(e, l, t);
    (Ct(), (e = e.memoizedState), (l = Ct()));
    var a = l.queue.dispatch;
    return ((l.memoizedState = t), [e, a, !1]);
  }
  function Aa(t, e, l, a) {
    return (
      (t = { tag: t, create: l, deps: a, inst: e, next: null }),
      (e = tt.updateQueue),
      e === null && ((e = Tn()), (tt.updateQueue = e)),
      (l = e.lastEffect),
      l === null ?
        (e.lastEffect = t.next = t)
      : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function Yo() {
    return Ct().memoizedState;
  }
  function Rn(t, e, l, a) {
    var u = $t();
    ((tt.flags |= t),
      (u.memoizedState = Aa(
        1 | e,
        { destroy: void 0 },
        l,
        a === void 0 ? null : a,
      )));
  }
  function On(t, e, l, a) {
    var u = Ct();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    yt !== null && a !== null && yc(a, yt.memoizedState.deps) ?
      (u.memoizedState = Aa(e, n, l, a))
    : ((tt.flags |= t), (u.memoizedState = Aa(1 | e, n, l, a)));
  }
  function Lo(t, e) {
    Rn(8390656, 8, t, e);
  }
  function Ac(t, e) {
    On(2048, 8, t, e);
  }
  function Fm(t) {
    tt.flags |= 4;
    var e = tt.updateQueue;
    if (e === null) ((e = Tn()), (tt.updateQueue = e), (e.events = [t]));
    else {
      var l = e.events;
      l === null ? (e.events = [t]) : l.push(t);
    }
  }
  function Go(t) {
    var e = Ct().memoizedState;
    return (
      Fm({ ref: e, nextImpl: t }),
      function () {
        if ((ot & 2) !== 0) throw Error(s(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function Xo(t, e) {
    return On(4, 2, t, e);
  }
  function Qo(t, e) {
    return On(4, 4, t, e);
  }
  function Zo(t, e) {
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
  function Vo(t, e, l) {
    ((l = l != null ? l.concat([t]) : null), On(4, 4, Zo.bind(null, e, t), l));
  }
  function Rc() {}
  function Ko(t, e) {
    var l = Ct();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && yc(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
  }
  function Jo(t, e) {
    var l = Ct();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && yc(e, a[1])) return a[0];
    if (((a = t()), $l)) {
      il(!0);
      try {
        t();
      } finally {
        il(!1);
      }
    }
    return ((l.memoizedState = [a, e]), a);
  }
  function Oc(t, e, l) {
    return l === void 0 || ((Ke & 1073741824) !== 0 && (nt & 261930) === 0) ?
        (t.memoizedState = e)
      : ((t.memoizedState = l), (t = wr()), (tt.lanes |= t), (bl |= t), l);
  }
  function wo(t, e, l, a) {
    return (
      ie(l, e) ? l
      : _a.current !== null ? ((t = Oc(t, l, a)), ie(t, e) || (Ht = !0), t)
      : (Ke & 42) === 0 || ((Ke & 1073741824) !== 0 && (nt & 261930) === 0) ?
        ((Ht = !0), (t.memoizedState = l))
      : ((t = wr()), (tt.lanes |= t), (bl |= t), e)
    );
  }
  function $o(t, e, l, a, u) {
    var n = H.p;
    H.p = n !== 0 && 8 > n ? n : 8;
    var i = O.T,
      f = {};
    ((O.T = f), Dc(t, !1, e, l));
    try {
      var d = u(),
        _ = O.S;
      if (
        (_ !== null && _(f, d),
        d !== null && typeof d == 'object' && typeof d.then == 'function')
      ) {
        var R = Jm(d, a);
        ru(t, e, R, de(t));
      } else ru(t, e, a, de(t));
    } catch (C) {
      ru(t, e, { then: function () {}, status: 'rejected', reason: C }, de());
    } finally {
      ((H.p = n),
        i !== null && f.types !== null && (i.types = f.types),
        (O.T = i));
    }
  }
  function Im() {}
  function Mc(t, e, l, a) {
    if (t.tag !== 5) throw Error(s(476));
    var u = Wo(t).queue;
    $o(
      t,
      u,
      e,
      W,
      l === null ? Im : (
        function () {
          return (ko(t), l(a));
        }
      ),
    );
  }
  function Wo(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: W,
      baseState: W,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Je,
        lastRenderedState: W,
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
          lastRenderedReducer: Je,
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
  function ko(t) {
    var e = Wo(t);
    (e.next === null && (e = t.alternate.memoizedState),
      ru(t, e.next.queue, {}, de()));
  }
  function xc() {
    return Zt(Mu);
  }
  function Fo() {
    return Ct().memoizedState;
  }
  function Io() {
    return Ct().memoizedState;
  }
  function Pm(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = de();
          t = ml(l);
          var a = yl(e, t, l);
          (a !== null && (le(a, e, l), iu(a, e, l)),
            (e = { cache: uc() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function ty(t, e, l) {
    var a = de();
    ((l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Mn(t) ?
        tr(e, l)
      : ((l = wi(t, e, l, a)), l !== null && (le(l, t, a), er(l, e, a))));
  }
  function Po(t, e, l) {
    var a = de();
    ru(t, e, l, a);
  }
  function ru(t, e, l, a) {
    var u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Mn(t)) tr(e, u);
    else {
      var n = t.alternate;
      if (
        t.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = e.lastRenderedReducer), n !== null)
      )
        try {
          var i = e.lastRenderedState,
            f = n(i, l);
          if (((u.hasEagerState = !0), (u.eagerState = f), ie(f, i)))
            return (fn(t, e, u, 0), St === null && cn(), !1);
        } catch {}
      if (((l = wi(t, e, u, a)), l !== null))
        return (le(l, t, a), er(l, e, a), !0);
    }
    return !1;
  }
  function Dc(t, e, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: sf(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Mn(t))
    ) {
      if (e) throw Error(s(479));
    } else ((e = wi(t, l, a, 2)), e !== null && le(e, t, 2));
  }
  function Mn(t) {
    var e = t.alternate;
    return t === tt || (e !== null && e === tt);
  }
  function tr(t, e) {
    Ta = En = !0;
    var l = t.pending;
    (l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e));
  }
  function er(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (l |= a), (e.lanes = l), ns(t, l));
    }
  }
  var du = {
    readContext: Zt,
    use: zn,
    useCallback: Ot,
    useContext: Ot,
    useEffect: Ot,
    useImperativeHandle: Ot,
    useLayoutEffect: Ot,
    useInsertionEffect: Ot,
    useMemo: Ot,
    useReducer: Ot,
    useRef: Ot,
    useState: Ot,
    useDebugValue: Ot,
    useDeferredValue: Ot,
    useTransition: Ot,
    useSyncExternalStore: Ot,
    useId: Ot,
    useHostTransitionStatus: Ot,
    useFormState: Ot,
    useActionState: Ot,
    useOptimistic: Ot,
    useMemoCache: Ot,
    useCacheRefresh: Ot,
  };
  du.useEffectEvent = Ot;
  var lr = {
      readContext: Zt,
      use: zn,
      useCallback: function (t, e) {
        return (($t().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: Zt,
      useEffect: Lo,
      useImperativeHandle: function (t, e, l) {
        ((l = l != null ? l.concat([t]) : null),
          Rn(4194308, 4, Zo.bind(null, e, t), l));
      },
      useLayoutEffect: function (t, e) {
        return Rn(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        Rn(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = $t();
        e = e === void 0 ? null : e;
        var a = t();
        if ($l) {
          il(!0);
          try {
            t();
          } finally {
            il(!1);
          }
        }
        return ((l.memoizedState = [a, e]), a);
      },
      useReducer: function (t, e, l) {
        var a = $t();
        if (l !== void 0) {
          var u = l(e);
          if ($l) {
            il(!0);
            try {
              l(e);
            } finally {
              il(!1);
            }
          }
        } else u = e;
        return (
          (a.memoizedState = a.baseState = u),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: u,
          }),
          (a.queue = t),
          (t = t.dispatch = ty.bind(null, tt, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = $t();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = Tc(t);
        var e = t.queue,
          l = Po.bind(null, tt, e);
        return ((e.dispatch = l), [t.memoizedState, l]);
      },
      useDebugValue: Rc,
      useDeferredValue: function (t, e) {
        var l = $t();
        return Oc(l, t, e);
      },
      useTransition: function () {
        var t = Tc(!1);
        return (
          (t = $o.bind(null, tt, t.queue, !0, !1)),
          ($t().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, l) {
        var a = tt,
          u = $t();
        if (ct) {
          if (l === void 0) throw Error(s(407));
          l = l();
        } else {
          if (((l = e()), St === null)) throw Error(s(349));
          (nt & 127) !== 0 || To(a, e, l);
        }
        u.memoizedState = l;
        var n = { value: l, getSnapshot: e };
        return (
          (u.queue = n),
          Lo(Ao.bind(null, a, n, t), [t]),
          (a.flags |= 2048),
          Aa(9, { destroy: void 0 }, zo.bind(null, a, n, l, e), null),
          l
        );
      },
      useId: function () {
        var t = $t(),
          e = St.identifierPrefix;
        if (ct) {
          var l = je,
            a = Ue;
          ((l = (a & ~(1 << (32 - ne(a) - 1))).toString(32) + l),
            (e = '_' + e + 'R_' + l),
            (l = _n++),
            0 < l && (e += 'H' + l.toString(32)),
            (e += '_'));
        } else ((l = wm++), (e = '_' + e + 'r_' + l.toString(32) + '_'));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: xc,
      useFormState: jo,
      useActionState: jo,
      useOptimistic: function (t) {
        var e = $t();
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
          (e = Dc.bind(null, tt, !0, l)),
          (l.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: bc,
      useCacheRefresh: function () {
        return ($t().memoizedState = Pm.bind(null, tt));
      },
      useEffectEvent: function (t) {
        var e = $t(),
          l = { impl: t };
        return (
          (e.memoizedState = l),
          function () {
            if ((ot & 2) !== 0) throw Error(s(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Nc = {
      readContext: Zt,
      use: zn,
      useCallback: Ko,
      useContext: Zt,
      useEffect: Ac,
      useImperativeHandle: Vo,
      useInsertionEffect: Xo,
      useLayoutEffect: Qo,
      useMemo: Jo,
      useReducer: An,
      useRef: Yo,
      useState: function () {
        return An(Je);
      },
      useDebugValue: Rc,
      useDeferredValue: function (t, e) {
        var l = Ct();
        return wo(l, yt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = An(Je)[0],
          e = Ct().memoizedState;
        return [typeof t == 'boolean' ? t : ou(t), e];
      },
      useSyncExternalStore: _o,
      useId: Fo,
      useHostTransitionStatus: xc,
      useFormState: Ho,
      useActionState: Ho,
      useOptimistic: function (t, e) {
        var l = Ct();
        return Mo(l, yt, t, e);
      },
      useMemoCache: bc,
      useCacheRefresh: Io,
    };
  Nc.useEffectEvent = Go;
  var ar = {
    readContext: Zt,
    use: zn,
    useCallback: Ko,
    useContext: Zt,
    useEffect: Ac,
    useImperativeHandle: Vo,
    useInsertionEffect: Xo,
    useLayoutEffect: Qo,
    useMemo: Jo,
    useReducer: _c,
    useRef: Yo,
    useState: function () {
      return _c(Je);
    },
    useDebugValue: Rc,
    useDeferredValue: function (t, e) {
      var l = Ct();
      return yt === null ? Oc(l, t, e) : wo(l, yt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = _c(Je)[0],
        e = Ct().memoizedState;
      return [typeof t == 'boolean' ? t : ou(t), e];
    },
    useSyncExternalStore: _o,
    useId: Fo,
    useHostTransitionStatus: xc,
    useFormState: qo,
    useActionState: qo,
    useOptimistic: function (t, e) {
      var l = Ct();
      return yt !== null ?
          Mo(l, yt, t, e)
        : ((l.baseState = t), [t, l.queue.dispatch]);
    },
    useMemoCache: bc,
    useCacheRefresh: Io,
  };
  ar.useEffectEvent = Go;
  function Cc(t, e, l, a) {
    ((e = t.memoizedState),
      (l = l(a, e)),
      (l = l == null ? e : A({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l));
  }
  var Uc = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var a = de(),
        u = ml(a);
      ((u.payload = e),
        l != null && (u.callback = l),
        (e = yl(t, u, a)),
        e !== null && (le(e, t, a), iu(e, t, a)));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var a = de(),
        u = ml(a);
      ((u.tag = 1),
        (u.payload = e),
        l != null && (u.callback = l),
        (e = yl(t, u, a)),
        e !== null && (le(e, t, a), iu(e, t, a)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = de(),
        a = ml(l);
      ((a.tag = 2),
        e != null && (a.callback = e),
        (e = yl(t, a, l)),
        e !== null && (le(e, t, l), iu(e, t, l)));
    },
  };
  function ur(t, e, l, a, u, n, i) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == 'function' ?
        t.shouldComponentUpdate(a, n, i)
      : e.prototype && e.prototype.isPureReactComponent ? !Ia(l, a) || !Ia(u, n)
      : !0
    );
  }
  function nr(t, e, l, a) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == 'function' &&
        e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
        e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && Uc.enqueueReplaceState(e, e.state, null));
  }
  function Wl(t, e) {
    var l = e;
    if ('ref' in e) {
      l = {};
      for (var a in e) a !== 'ref' && (l[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = A({}, l));
      for (var u in t) l[u] === void 0 && (l[u] = t[u]);
    }
    return l;
  }
  function ir(t) {
    nn(t);
  }
  function cr(t) {
    console.error(t);
  }
  function fr(t) {
    nn(t);
  }
  function xn(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function sr(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function jc(t, e, l) {
    return (
      (l = ml(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        xn(t, e);
      }),
      l
    );
  }
  function or(t) {
    return ((t = ml(t)), (t.tag = 3), t);
  }
  function rr(t, e, l, a) {
    var u = l.type.getDerivedStateFromError;
    if (typeof u == 'function') {
      var n = a.value;
      ((t.payload = function () {
        return u(n);
      }),
        (t.callback = function () {
          sr(e, l, a);
        }));
    }
    var i = l.stateNode;
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (t.callback = function () {
        (sr(e, l, a),
          typeof u != 'function' &&
            (El === null ? (El = new Set([this])) : El.add(this)));
        var f = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: f !== null ? f : '',
        });
      });
  }
  function ey(t, e, l, a, u) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == 'object' && typeof a.then == 'function')
    ) {
      if (
        ((e = l.alternate),
        e !== null && ga(e, l, u, !0),
        (l = fe.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              Ee === null ? Xn() : l.alternate === null && Mt === 0 && (Mt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = u),
              a === vn ?
                (l.flags |= 16384)
              : ((e = l.updateQueue),
                e === null ? (l.updateQueue = new Set([a])) : e.add(a),
                nf(t, a, u)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === vn ?
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
                nf(t, a, u)),
              !1
            );
        }
        throw Error(s(435, l.tag));
      }
      return (nf(t, a, u), Xn(), !1);
    }
    if (ct)
      return (
        (e = fe.current),
        e !== null ?
          ((e.flags & 65536) === 0 && (e.flags |= 256),
          (e.flags |= 65536),
          (e.lanes = u),
          a !== Pi && ((t = Error(s(422), { cause: a })), eu(ge(t, l))))
        : (a !== Pi && ((e = Error(s(423), { cause: a })), eu(ge(e, l))),
          (t = t.current.alternate),
          (t.flags |= 65536),
          (u &= -u),
          (t.lanes |= u),
          (a = ge(a, l)),
          (u = jc(t.stateNode, a, u)),
          oc(t, u),
          Mt !== 4 && (Mt = 2)),
        !1
      );
    var n = Error(s(520), { cause: a });
    if (
      ((n = ge(n, l)),
      bu === null ? (bu = [n]) : bu.push(n),
      Mt !== 4 && (Mt = 2),
      e === null)
    )
      return !0;
    ((a = ge(a, l)), (l = e));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = u & -u),
            (l.lanes |= t),
            (t = jc(l.stateNode, a, t)),
            oc(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (n = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == 'function' ||
                (n !== null &&
                  typeof n.componentDidCatch == 'function' &&
                  (El === null || !El.has(n)))))
          )
            return (
              (l.flags |= 65536),
              (u &= -u),
              (l.lanes |= u),
              (u = or(u)),
              rr(u, t, l, a),
              oc(l, u),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Hc = Error(s(461)),
    Ht = !1;
  function Vt(t, e, l, a) {
    e.child = t === null ? yo(e, null, l, a) : wl(e, t.child, l, a);
  }
  function dr(t, e, l, a, u) {
    l = l.render;
    var n = e.ref;
    if ('ref' in a) {
      var i = {};
      for (var f in a) f !== 'ref' && (i[f] = a[f]);
    } else i = a;
    return (
      Zl(e),
      (a = vc(t, e, l, i, n, u)),
      (f = gc()),
      t !== null && !Ht ?
        (pc(t, e, u), we(t, e, u))
      : (ct && f && Fi(e), (e.flags |= 1), Vt(t, e, a, u), e.child)
    );
  }
  function hr(t, e, l, a, u) {
    if (t === null) {
      var n = l.type;
      return (
          typeof n == 'function' &&
            !$i(n) &&
            n.defaultProps === void 0 &&
            l.compare === null
        ) ?
          ((e.tag = 15), (e.type = n), mr(t, e, n, a, u))
        : ((t = on(l.type, null, a, e, e.mode, u)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((n = t.child), !Zc(t, u))) {
      var i = n.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Ia), l(i, a) && t.ref === e.ref)
      )
        return we(t, e, u);
    }
    return (
      (e.flags |= 1),
      (t = Xe(n, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function mr(t, e, l, a, u) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (Ia(n, a) && t.ref === e.ref)
        if (((Ht = !1), (e.pendingProps = a = n), Zc(t, u)))
          (t.flags & 131072) !== 0 && (Ht = !0);
        else return ((e.lanes = t.lanes), we(t, e, u));
    }
    return Bc(t, e, l, a, u);
  }
  function yr(t, e, l, a) {
    var u = a.children,
      n = t !== null ? t.memoizedState : null;
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
        if (((n = n !== null ? n.baseLanes | l : l), t !== null)) {
          for (a = e.child = t.child, u = 0; a !== null; )
            ((u = u | a.lanes | a.childLanes), (a = a.sibling));
          a = u & ~n;
        } else ((a = 0), (e.child = null));
        return vr(t, e, n, l, a);
      }
      if ((l & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && mn(e, n !== null ? n.cachePool : null),
          n !== null ? po(e, n) : dc(),
          So(e));
      else
        return (
          (a = e.lanes = 536870912),
          vr(t, e, n !== null ? n.baseLanes | l : l, l, a)
        );
    } else
      n !== null ?
        (mn(e, n.cachePool), po(e, n), gl(), (e.memoizedState = null))
      : (t !== null && mn(e, null), dc(), gl());
    return (Vt(t, e, u, l), e.child);
  }
  function hu(t, e) {
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
  function vr(t, e, l, a, u) {
    var n = ic();
    return (
      (n = n === null ? null : { parent: Ut._currentValue, pool: n }),
      (e.memoizedState = { baseLanes: l, cachePool: n }),
      t !== null && mn(e, null),
      dc(),
      So(e),
      t !== null && ga(t, e, a, !0),
      (e.childLanes = u),
      null
    );
  }
  function Dn(t, e) {
    return (
      (e = Cn({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function gr(t, e, l) {
    return (
      wl(e, t.child, null, l),
      (t = Dn(e, e.pendingProps)),
      (t.flags |= 2),
      se(e),
      (e.memoizedState = null),
      t
    );
  }
  function ly(t, e, l) {
    var a = e.pendingProps,
      u = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (ct) {
        if (a.mode === 'hidden')
          return ((t = Dn(e, a)), (e.lanes = 536870912), hu(null, t));
        if (
          (mc(e),
          (t = _t) ?
            ((t = xd(t, be)),
            (t = t !== null && t.data === '&' ? t : null),
            t !== null &&
              ((e.memoizedState = {
                dehydrated: t,
                treeContext: sl !== null ? { id: Ue, overflow: je } : null,
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (l = Ps(t)),
              (l.return = e),
              (e.child = l),
              (Qt = e),
              (_t = null)))
          : (t = null),
          t === null)
        )
          throw rl(e);
        return ((e.lanes = 536870912), null);
      }
      return Dn(e, a);
    }
    var n = t.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if ((mc(e), u))
        if (e.flags & 256) ((e.flags &= -257), (e = gr(t, e, l)));
        else if (e.memoizedState !== null)
          ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(s(558));
      else if (
        (Ht || ga(t, e, l, !1), (u = (l & t.childLanes) !== 0), Ht || u)
      ) {
        if (
          ((a = St),
          a !== null && ((i = is(a, l)), i !== 0 && i !== n.retryLane))
        )
          throw ((n.retryLane = i), Ll(t, i), le(a, t, i), Hc);
        (Xn(), (e = gr(t, e, l)));
      } else
        ((t = n.treeContext),
          (_t = _e(i.nextSibling)),
          (Qt = e),
          (ct = !0),
          (ol = null),
          (be = !1),
          t !== null && lo(e, t),
          (e = Dn(e, a)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = Xe(t.child, { mode: a.mode, children: a.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Nn(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != 'function' && typeof l != 'object') throw Error(s(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Bc(t, e, l, a, u) {
    return (
      Zl(e),
      (l = vc(t, e, l, a, void 0, u)),
      (a = gc()),
      t !== null && !Ht ?
        (pc(t, e, u), we(t, e, u))
      : (ct && a && Fi(e), (e.flags |= 1), Vt(t, e, l, u), e.child)
    );
  }
  function pr(t, e, l, a, u, n) {
    return (
      Zl(e),
      (e.updateQueue = null),
      (l = Eo(e, a, l, u)),
      bo(t),
      (a = gc()),
      t !== null && !Ht ?
        (pc(t, e, n), we(t, e, n))
      : (ct && a && Fi(e), (e.flags |= 1), Vt(t, e, l, n), e.child)
    );
  }
  function Sr(t, e, l, a, u) {
    if ((Zl(e), e.stateNode === null)) {
      var n = ha,
        i = l.contextType;
      (typeof i == 'object' && i !== null && (n = Zt(i)),
        (n = new l(a, n)),
        (e.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = Uc),
        (e.stateNode = n),
        (n._reactInternals = e),
        (n = e.stateNode),
        (n.props = a),
        (n.state = e.memoizedState),
        (n.refs = {}),
        fc(e),
        (i = l.contextType),
        (n.context = typeof i == 'object' && i !== null ? Zt(i) : ha),
        (n.state = e.memoizedState),
        (i = l.getDerivedStateFromProps),
        typeof i == 'function' && (Cc(e, l, i, a), (n.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == 'function' ||
          typeof n.getSnapshotBeforeUpdate == 'function' ||
          (typeof n.UNSAFE_componentWillMount != 'function' &&
            typeof n.componentWillMount != 'function') ||
          ((i = n.state),
          typeof n.componentWillMount == 'function' && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == 'function' &&
            n.UNSAFE_componentWillMount(),
          i !== n.state && Uc.enqueueReplaceState(n, n.state, null),
          fu(e, a, n, u),
          cu(),
          (n.state = e.memoizedState)),
        typeof n.componentDidMount == 'function' && (e.flags |= 4194308),
        (a = !0));
    } else if (t === null) {
      n = e.stateNode;
      var f = e.memoizedProps,
        d = Wl(l, f);
      n.props = d;
      var _ = n.context,
        R = l.contextType;
      ((i = ha), typeof R == 'object' && R !== null && (i = Zt(R)));
      var C = l.getDerivedStateFromProps;
      ((R =
        typeof C == 'function' ||
        typeof n.getSnapshotBeforeUpdate == 'function'),
        (f = e.pendingProps !== f),
        R ||
          (typeof n.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof n.componentWillReceiveProps != 'function') ||
          ((f || _ !== i) && nr(e, n, a, i)),
        (hl = !1));
      var T = e.memoizedState;
      ((n.state = T),
        fu(e, a, n, u),
        cu(),
        (_ = e.memoizedState),
        f || T !== _ || hl ?
          (typeof C == 'function' && (Cc(e, l, C, a), (_ = e.memoizedState)),
          (d = hl || ur(e, l, d, a, T, _, i)) ?
            (R ||
              (typeof n.UNSAFE_componentWillMount != 'function' &&
                typeof n.componentWillMount != 'function') ||
              (typeof n.componentWillMount == 'function' &&
                n.componentWillMount(),
              typeof n.UNSAFE_componentWillMount == 'function' &&
                n.UNSAFE_componentWillMount()),
            typeof n.componentDidMount == 'function' && (e.flags |= 4194308))
          : (typeof n.componentDidMount == 'function' && (e.flags |= 4194308),
            (e.memoizedProps = a),
            (e.memoizedState = _)),
          (n.props = a),
          (n.state = _),
          (n.context = i),
          (a = d))
        : (typeof n.componentDidMount == 'function' && (e.flags |= 4194308),
          (a = !1)));
    } else {
      ((n = e.stateNode),
        sc(t, e),
        (i = e.memoizedProps),
        (R = Wl(l, i)),
        (n.props = R),
        (C = e.pendingProps),
        (T = n.context),
        (_ = l.contextType),
        (d = ha),
        typeof _ == 'object' && _ !== null && (d = Zt(_)),
        (f = l.getDerivedStateFromProps),
        (_ =
          typeof f == 'function' ||
          typeof n.getSnapshotBeforeUpdate == 'function') ||
          (typeof n.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof n.componentWillReceiveProps != 'function') ||
          ((i !== C || T !== d) && nr(e, n, a, d)),
        (hl = !1),
        (T = e.memoizedState),
        (n.state = T),
        fu(e, a, n, u),
        cu());
      var z = e.memoizedState;
      (
        i !== C ||
        T !== z ||
        hl ||
        (t !== null && t.dependencies !== null && dn(t.dependencies))
      ) ?
        (typeof f == 'function' && (Cc(e, l, f, a), (z = e.memoizedState)),
        (
          (R =
            hl ||
            ur(e, l, R, a, T, z, d) ||
            (t !== null && t.dependencies !== null && dn(t.dependencies)))
        ) ?
          (_ ||
            (typeof n.UNSAFE_componentWillUpdate != 'function' &&
              typeof n.componentWillUpdate != 'function') ||
            (typeof n.componentWillUpdate == 'function' &&
              n.componentWillUpdate(a, z, d),
            typeof n.UNSAFE_componentWillUpdate == 'function' &&
              n.UNSAFE_componentWillUpdate(a, z, d)),
          typeof n.componentDidUpdate == 'function' && (e.flags |= 4),
          typeof n.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
        : (typeof n.componentDidUpdate != 'function' ||
            (i === t.memoizedProps && T === t.memoizedState) ||
            (e.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != 'function' ||
            (i === t.memoizedProps && T === t.memoizedState) ||
            (e.flags |= 1024),
          (e.memoizedProps = a),
          (e.memoizedState = z)),
        (n.props = a),
        (n.state = z),
        (n.context = d),
        (a = R))
      : (typeof n.componentDidUpdate != 'function' ||
          (i === t.memoizedProps && T === t.memoizedState) ||
          (e.flags |= 4),
        typeof n.getSnapshotBeforeUpdate != 'function' ||
          (i === t.memoizedProps && T === t.memoizedState) ||
          (e.flags |= 1024),
        (a = !1));
    }
    return (
      (n = a),
      Nn(t, e),
      (a = (e.flags & 128) !== 0),
      n || a ?
        ((n = e.stateNode),
        (l =
          a && typeof l.getDerivedStateFromError != 'function' ?
            null
          : n.render()),
        (e.flags |= 1),
        t !== null && a ?
          ((e.child = wl(e, t.child, null, u)), (e.child = wl(e, null, l, u)))
        : Vt(t, e, l, u),
        (e.memoizedState = n.state),
        (t = e.child))
      : (t = we(t, e, u)),
      t
    );
  }
  function br(t, e, l, a) {
    return (Xl(), (e.flags |= 256), Vt(t, e, l, a), e.child);
  }
  var qc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Yc(t) {
    return { baseLanes: t, cachePool: fo() };
  }
  function Lc(t, e, l) {
    return ((t = t !== null ? t.childLanes & ~l : 0), e && (t |= re), t);
  }
  function Er(t, e, l) {
    var a = e.pendingProps,
      u = !1,
      n = (e.flags & 128) !== 0,
      i;
    if (
      ((i = n) ||
        (i =
          t !== null && t.memoizedState === null ? !1 : (Nt.current & 2) !== 0),
      i && ((u = !0), (e.flags &= -129)),
      (i = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (ct) {
        if (
          (u ? vl(e) : gl(),
          (t = _t) ?
            ((t = xd(t, be)),
            (t = t !== null && t.data !== '&' ? t : null),
            t !== null &&
              ((e.memoizedState = {
                dehydrated: t,
                treeContext: sl !== null ? { id: Ue, overflow: je } : null,
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (l = Ps(t)),
              (l.return = e),
              (e.child = l),
              (Qt = e),
              (_t = null)))
          : (t = null),
          t === null)
        )
          throw rl(e);
        return (_f(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var f = a.children;
      return (
        (a = a.fallback),
        u ?
          (gl(),
          (u = e.mode),
          (f = Cn({ mode: 'hidden', children: f }, u)),
          (a = Gl(a, u, l, null)),
          (f.return = e),
          (a.return = e),
          (f.sibling = a),
          (e.child = f),
          (a = e.child),
          (a.memoizedState = Yc(l)),
          (a.childLanes = Lc(t, i, l)),
          (e.memoizedState = qc),
          hu(null, a))
        : (vl(e), Gc(e, f))
      );
    }
    var d = t.memoizedState;
    if (d !== null && ((f = d.dehydrated), f !== null)) {
      if (n)
        e.flags & 256 ? (vl(e), (e.flags &= -257), (e = Xc(t, e, l)))
        : e.memoizedState !== null ?
          (gl(), (e.child = t.child), (e.flags |= 128), (e = null))
        : (gl(),
          (f = a.fallback),
          (u = e.mode),
          (a = Cn({ mode: 'visible', children: a.children }, u)),
          (f = Gl(f, u, l, null)),
          (f.flags |= 2),
          (a.return = e),
          (f.return = e),
          (a.sibling = f),
          (e.child = a),
          wl(e, t.child, null, l),
          (a = e.child),
          (a.memoizedState = Yc(l)),
          (a.childLanes = Lc(t, i, l)),
          (e.memoizedState = qc),
          (e = hu(null, a)));
      else if ((vl(e), _f(f))) {
        if (((i = f.nextSibling && f.nextSibling.dataset), i)) var _ = i.dgst;
        ((i = _),
          (a = Error(s(419))),
          (a.stack = ''),
          (a.digest = i),
          eu({ value: a, source: null, stack: null }),
          (e = Xc(t, e, l)));
      } else if (
        (Ht || ga(t, e, l, !1), (i = (l & t.childLanes) !== 0), Ht || i)
      ) {
        if (
          ((i = St),
          i !== null && ((a = is(i, l)), a !== 0 && a !== d.retryLane))
        )
          throw ((d.retryLane = a), Ll(t, a), le(i, t, a), Hc);
        (Ef(f) || Xn(), (e = Xc(t, e, l)));
      } else
        Ef(f) ?
          ((e.flags |= 192), (e.child = t.child), (e = null))
        : ((t = d.treeContext),
          (_t = _e(f.nextSibling)),
          (Qt = e),
          (ct = !0),
          (ol = null),
          (be = !1),
          t !== null && lo(e, t),
          (e = Gc(e, a.children)),
          (e.flags |= 4096));
      return e;
    }
    return u ?
        (gl(),
        (f = a.fallback),
        (u = e.mode),
        (d = t.child),
        (_ = d.sibling),
        (a = Xe(d, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = d.subtreeFlags & 65011712),
        _ !== null ? (f = Xe(_, f)) : ((f = Gl(f, u, l, null)), (f.flags |= 2)),
        (f.return = e),
        (a.return = e),
        (a.sibling = f),
        (e.child = a),
        hu(null, a),
        (a = e.child),
        (f = t.child.memoizedState),
        f === null ?
          (f = Yc(l))
        : ((u = f.cachePool),
          u !== null ?
            ((d = Ut._currentValue),
            (u = u.parent !== d ? { parent: d, pool: d } : u))
          : (u = fo()),
          (f = { baseLanes: f.baseLanes | l, cachePool: u })),
        (a.memoizedState = f),
        (a.childLanes = Lc(t, i, l)),
        (e.memoizedState = qc),
        hu(t.child, a))
      : (vl(e),
        (l = t.child),
        (t = l.sibling),
        (l = Xe(l, { mode: 'visible', children: a.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((i = e.deletions),
          i === null ? ((e.deletions = [t]), (e.flags |= 16)) : i.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function Gc(t, e) {
    return (
      (e = Cn({ mode: 'visible', children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Cn(t, e) {
    return ((t = ce(22, t, null, e)), (t.lanes = 0), t);
  }
  function Xc(t, e, l) {
    return (
      wl(e, t.child, null, l),
      (t = Gc(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function _r(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    (a !== null && (a.lanes |= e), lc(t.return, e, l));
  }
  function Qc(t, e, l, a, u, n) {
    var i = t.memoizedState;
    i === null ?
      (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: l,
        tailMode: u,
        treeForkCount: n,
      })
    : ((i.isBackwards = e),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = a),
      (i.tail = l),
      (i.tailMode = u),
      (i.treeForkCount = n));
  }
  function Tr(t, e, l) {
    var a = e.pendingProps,
      u = a.revealOrder,
      n = a.tail;
    a = a.children;
    var i = Nt.current,
      f = (i & 2) !== 0;
    if (
      (f ? ((i = (i & 1) | 2), (e.flags |= 128)) : (i &= 1),
      B(Nt, i),
      Vt(t, e, a, l),
      (a = ct ? tu : 0),
      !f && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && _r(t, l, e);
        else if (t.tag === 19) _r(t, l, e);
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
    switch (u) {
      case 'forwards':
        for (l = e.child, u = null; l !== null; )
          ((t = l.alternate),
            t !== null && bn(t) === null && (u = l),
            (l = l.sibling));
        ((l = u),
          l === null ?
            ((u = e.child), (e.child = null))
          : ((u = l.sibling), (l.sibling = null)),
          Qc(e, !1, u, l, n, a));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (l = null, u = e.child, e.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && bn(t) === null)) {
            e.child = u;
            break;
          }
          ((t = u.sibling), (u.sibling = l), (l = u), (u = t));
        }
        Qc(e, !0, l, null, n, a);
        break;
      case 'together':
        Qc(e, !1, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function we(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (bl |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((ga(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(s(153));
    if (e.child !== null) {
      for (
        t = e.child, l = Xe(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (l = l.sibling = Xe(t, t.pendingProps)),
          (l.return = e));
      l.sibling = null;
    }
    return e.child;
  }
  function Zc(t, e) {
    return (t.lanes & e) !== 0 ?
        !0
      : ((t = t.dependencies), !!(t !== null && dn(t)));
  }
  function ay(t, e, l) {
    switch (e.tag) {
      case 3:
        (wt(e, e.stateNode.containerInfo),
          dl(e, Ut, t.memoizedState.cache),
          Xl());
        break;
      case 27:
      case 5:
        La(e);
        break;
      case 4:
        wt(e, e.stateNode.containerInfo);
        break;
      case 10:
        dl(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), mc(e), null);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return (
            a.dehydrated !== null ? (vl(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0 ? Er(t, e, l)
            : (vl(e), (t = we(t, e, l)), t !== null ? t.sibling : null)
          );
        vl(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (
          ((a = (l & e.childLanes) !== 0),
          a || (ga(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
          u)
        ) {
          if (a) return Tr(t, e, l);
          e.flags |= 128;
        }
        if (
          ((u = e.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          B(Nt, Nt.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), yr(t, e, l, e.pendingProps));
      case 24:
        dl(e, Ut, t.memoizedState.cache);
    }
    return we(t, e, l);
  }
  function zr(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Ht = !0;
      else {
        if (!Zc(t, l) && (e.flags & 128) === 0) return ((Ht = !1), ay(t, e, l));
        Ht = (t.flags & 131072) !== 0;
      }
    else ((Ht = !1), ct && (e.flags & 1048576) !== 0 && eo(e, tu, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (((t = Kl(e.elementType)), (e.type = t), typeof t == 'function'))
            $i(t) ?
              ((a = Wl(t, a)), (e.tag = 1), (e = Sr(null, e, t, a, l)))
            : ((e.tag = 0), (e = Bc(null, e, t, a, l)));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === Et) {
                ((e.tag = 11), (e = dr(null, e, t, a, l)));
                break t;
              } else if (u === I) {
                ((e.tag = 14), (e = hr(null, e, t, a, l)));
                break t;
              }
            }
            throw ((e = qe(t) || t), Error(s(306, e, '')));
          }
        }
        return e;
      case 0:
        return Bc(t, e, e.type, e.pendingProps, l);
      case 1:
        return ((a = e.type), (u = Wl(a, e.pendingProps)), Sr(t, e, a, u, l));
      case 3:
        t: {
          if ((wt(e, e.stateNode.containerInfo), t === null))
            throw Error(s(387));
          a = e.pendingProps;
          var n = e.memoizedState;
          ((u = n.element), sc(t, e), fu(e, a, null, l));
          var i = e.memoizedState;
          if (
            ((a = i.cache),
            dl(e, Ut, a),
            a !== n.cache && ac(e, [Ut], l, !0),
            cu(),
            (a = i.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: a, isDehydrated: !1, cache: i.cache }),
              (e.updateQueue.baseState = n),
              (e.memoizedState = n),
              e.flags & 256)
            ) {
              e = br(t, e, a, l);
              break t;
            } else if (a !== u) {
              ((u = ge(Error(s(424)), e)), eu(u), (e = br(t, e, a, l)));
              break t;
            } else
              for (
                t = e.stateNode.containerInfo,
                  t.nodeType === 9 ?
                    (t = t.body)
                  : (t = t.nodeName === 'HTML' ? t.ownerDocument.body : t),
                  _t = _e(t.firstChild),
                  Qt = e,
                  ct = !0,
                  ol = null,
                  be = !0,
                  l = yo(e, null, a, l),
                  e.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
          else {
            if ((Xl(), a === u)) {
              e = we(t, e, l);
              break t;
            }
            Vt(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Nn(t, e),
          t === null ?
            (l = Hd(e.type, null, e.pendingProps, null)) ?
              (e.memoizedState = l)
            : ct ||
              ((l = e.type),
              (t = e.pendingProps),
              (a = $n(lt.current).createElement(l)),
              (a[Xt] = e),
              (a[kt] = t),
              Kt(a, l, t),
              Yt(a),
              (e.stateNode = a))
          : (e.memoizedState = Hd(
              e.type,
              t.memoizedProps,
              e.pendingProps,
              t.memoizedState,
            )),
          null
        );
      case 27:
        return (
          La(e),
          t === null &&
            ct &&
            ((a = e.stateNode = Cd(e.type, e.pendingProps, lt.current)),
            (Qt = e),
            (be = !0),
            (u = _t),
            Al(e.type) ? ((Tf = u), (_t = _e(a.firstChild))) : (_t = u)),
          Vt(t, e, e.pendingProps.children, l),
          Nn(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            ct &&
            ((u = a = _t) &&
              ((a = Uy(a, e.type, e.pendingProps, be)),
              a !== null ?
                ((e.stateNode = a),
                (Qt = e),
                (_t = _e(a.firstChild)),
                (be = !1),
                (u = !0))
              : (u = !1)),
            u || rl(e)),
          La(e),
          (u = e.type),
          (n = e.pendingProps),
          (i = t !== null ? t.memoizedProps : null),
          (a = n.children),
          pf(u, n) ? (a = null) : i !== null && pf(u, i) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((u = vc(t, e, $m, null, null, l)), (Mu._currentValue = u)),
          Nn(t, e),
          Vt(t, e, a, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            ct &&
            ((t = l = _t) &&
              ((l = jy(l, e.pendingProps, be)),
              l !== null ?
                ((e.stateNode = l), (Qt = e), (_t = null), (t = !0))
              : (t = !1)),
            t || rl(e)),
          null
        );
      case 13:
        return Er(t, e, l);
      case 4:
        return (
          wt(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = wl(e, null, a, l)) : Vt(t, e, a, l),
          e.child
        );
      case 11:
        return dr(t, e, e.type, e.pendingProps, l);
      case 7:
        return (Vt(t, e, e.pendingProps, l), e.child);
      case 8:
        return (Vt(t, e, e.pendingProps.children, l), e.child);
      case 12:
        return (Vt(t, e, e.pendingProps.children, l), e.child);
      case 10:
        return (
          (a = e.pendingProps),
          dl(e, e.type, a.value),
          Vt(t, e, a.children, l),
          e.child
        );
      case 9:
        return (
          (u = e.type._context),
          (a = e.pendingProps.children),
          Zl(e),
          (u = Zt(u)),
          (a = a(u)),
          (e.flags |= 1),
          Vt(t, e, a, l),
          e.child
        );
      case 14:
        return hr(t, e, e.type, e.pendingProps, l);
      case 15:
        return mr(t, e, e.type, e.pendingProps, l);
      case 19:
        return Tr(t, e, l);
      case 31:
        return ly(t, e, l);
      case 22:
        return yr(t, e, l, e.pendingProps);
      case 24:
        return (
          Zl(e),
          (a = Zt(Ut)),
          t === null ?
            ((u = ic()),
            u === null &&
              ((u = St),
              (n = uc()),
              (u.pooledCache = n),
              n.refCount++,
              n !== null && (u.pooledCacheLanes |= l),
              (u = n)),
            (e.memoizedState = { parent: a, cache: u }),
            fc(e),
            dl(e, Ut, u))
          : ((t.lanes & l) !== 0 && (sc(t, e), fu(e, null, null, l), cu()),
            (u = t.memoizedState),
            (n = e.memoizedState),
            u.parent !== a ?
              ((u = { parent: a, cache: a }),
              (e.memoizedState = u),
              e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u),
              dl(e, Ut, a))
            : ((a = n.cache),
              dl(e, Ut, a),
              a !== u.cache && ac(e, [Ut], l, !0))),
          Vt(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(s(156, e.tag));
  }
  function $e(t) {
    t.flags |= 4;
  }
  function Vc(t, e, l, a, u) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (u & 335544128) === u))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Fr()) t.flags |= 8192;
        else throw ((Jl = vn), cc);
    } else t.flags &= -16777217;
  }
  function Ar(t, e) {
    if (e.type !== 'stylesheet' || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Gd(e)))
      if (Fr()) t.flags |= 8192;
      else throw ((Jl = vn), cc);
  }
  function Un(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? as() : 536870912), (t.lanes |= e), (xa |= e)));
  }
  function mu(t, e) {
    if (!ct)
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
      for (var u = t.child; u !== null; )
        ((l |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 65011712),
          (a |= u.flags & 65011712),
          (u.return = t),
          (u = u.sibling));
    else
      for (u = t.child; u !== null; )
        ((l |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = t),
          (u = u.sibling));
    return ((t.subtreeFlags |= a), (t.childLanes = l), e);
  }
  function uy(t, e, l) {
    var a = e.pendingProps;
    switch ((Ii(e), e.tag)) {
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
          Ve(Ut),
          Dt(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (va(e) ?
              $e(e)
            : t === null ||
              (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
              ((e.flags |= 1024), tc())),
          Tt(e),
          null
        );
      case 26:
        var u = e.type,
          n = e.memoizedState;
        return (
          t === null ?
            ($e(e),
            n !== null ? (Tt(e), Ar(e, n)) : (Tt(e), Vc(e, u, null, a, l)))
          : n ?
            n !== t.memoizedState ?
              ($e(e), Tt(e), Ar(e, n))
            : (Tt(e), (e.flags &= -16777217))
          : ((t = t.memoizedProps), t !== a && $e(e), Tt(e), Vc(e, u, t, a, l)),
          null
        );
      case 27:
        if (
          (Zu(e),
          (l = lt.current),
          (u = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== a && $e(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(s(166));
            return (Tt(e), null);
          }
          ((t = X.current),
            va(e) ? ao(e) : ((t = Cd(u, a, l)), (e.stateNode = t), $e(e)));
        }
        return (Tt(e), null);
      case 5:
        if ((Zu(e), (u = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && $e(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(s(166));
            return (Tt(e), null);
          }
          if (((n = X.current), va(e))) ao(e);
          else {
            var i = $n(lt.current);
            switch (n) {
              case 1:
                n = i.createElementNS('http://www.w3.org/2000/svg', u);
                break;
              case 2:
                n = i.createElementNS('http://www.w3.org/1998/Math/MathML', u);
                break;
              default:
                switch (u) {
                  case 'svg':
                    n = i.createElementNS('http://www.w3.org/2000/svg', u);
                    break;
                  case 'math':
                    n = i.createElementNS(
                      'http://www.w3.org/1998/Math/MathML',
                      u,
                    );
                    break;
                  case 'script':
                    ((n = i.createElement('div')),
                      (n.innerHTML = '<script><\/script>'),
                      (n = n.removeChild(n.firstChild)));
                    break;
                  case 'select':
                    ((n =
                      typeof a.is == 'string' ?
                        i.createElement('select', { is: a.is })
                      : i.createElement('select')),
                      a.multiple ?
                        (n.multiple = !0)
                      : a.size && (n.size = a.size));
                    break;
                  default:
                    n =
                      typeof a.is == 'string' ?
                        i.createElement(u, { is: a.is })
                      : i.createElement(u);
                }
            }
            ((n[Xt] = e), (n[kt] = a));
            t: for (i = e.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
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
            e.stateNode = n;
            t: switch ((Kt(n, u, a), u)) {
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
            a && $e(e);
          }
        }
        return (
          Tt(e),
          Vc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && $e(e);
        else {
          if (typeof a != 'string' && e.stateNode === null) throw Error(s(166));
          if (((t = lt.current), va(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (a = null),
              (u = Qt),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            ((t[Xt] = e),
              (t = !!(
                t.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Ed(t.nodeValue, l)
              )),
              t || rl(e, !0));
          } else
            ((t = $n(t).createTextNode(a)), (t[Xt] = e), (e.stateNode = t));
        }
        return (Tt(e), null);
      case 31:
        if (((l = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((a = va(e)), l !== null)) {
            if (t === null) {
              if (!a) throw Error(s(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(s(557));
              t[Xt] = e;
            } else
              (Xl(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Tt(e), (t = !1));
          } else
            ((l = tc()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = l),
              (t = !0));
          if (!t) return e.flags & 256 ? (se(e), e) : (se(e), null);
          if ((e.flags & 128) !== 0) throw Error(s(558));
        }
        return (Tt(e), null);
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((u = va(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(s(318));
              if (
                ((u = e.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(s(317));
              u[Xt] = e;
            } else
              (Xl(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Tt(e), (u = !1));
          } else
            ((u = tc()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return e.flags & 256 ? (se(e), e) : (se(e), null);
        }
        return (
          se(e),
          (e.flags & 128) !== 0 ?
            ((e.lanes = l), e)
          : ((l = a !== null),
            (t = t !== null && t.memoizedState !== null),
            l &&
              ((a = e.child),
              (u = null),
              a.alternate !== null &&
                a.alternate.memoizedState !== null &&
                a.alternate.memoizedState.cachePool !== null &&
                (u = a.alternate.memoizedState.cachePool.pool),
              (n = null),
              a.memoizedState !== null &&
                a.memoizedState.cachePool !== null &&
                (n = a.memoizedState.cachePool.pool),
              n !== u && (a.flags |= 2048)),
            l !== t && l && (e.child.flags |= 8192),
            Un(e, e.updateQueue),
            Tt(e),
            null)
        );
      case 4:
        return (Dt(), t === null && hf(e.stateNode.containerInfo), Tt(e), null);
      case 10:
        return (Ve(e.type), Tt(e), null);
      case 19:
        if ((j(Nt), (a = e.memoizedState), a === null)) return (Tt(e), null);
        if (((u = (e.flags & 128) !== 0), (n = a.rendering), n === null))
          if (u) mu(a, !1);
          else {
            if (Mt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((n = bn(t)), n !== null)) {
                  for (
                    e.flags |= 128,
                      mu(a, !1),
                      t = n.updateQueue,
                      e.updateQueue = t,
                      Un(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;
                  )
                    (Is(l, t), (l = l.sibling));
                  return (
                    B(Nt, (Nt.current & 1) | 2),
                    ct && Qe(e, a.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            a.tail !== null &&
              ae() > Yn &&
              ((e.flags |= 128), (u = !0), mu(a, !1), (e.lanes = 4194304));
          }
        else {
          if (!u)
            if (((t = bn(n)), t !== null)) {
              if (
                ((e.flags |= 128),
                (u = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Un(e, t),
                mu(a, !0),
                a.tail === null &&
                  a.tailMode === 'hidden' &&
                  !n.alternate &&
                  !ct)
              )
                return (Tt(e), null);
            } else
              2 * ae() - a.renderingStartTime > Yn &&
                l !== 536870912 &&
                ((e.flags |= 128), (u = !0), mu(a, !1), (e.lanes = 4194304));
          a.isBackwards ?
            ((n.sibling = e.child), (e.child = n))
          : ((t = a.last),
            t !== null ? (t.sibling = n) : (e.child = n),
            (a.last = n));
        }
        return a.tail !== null ?
            ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = ae()),
            (t.sibling = null),
            (l = Nt.current),
            B(Nt, u ? (l & 1) | 2 : l & 1),
            ct && Qe(e, a.treeForkCount),
            t)
          : (Tt(e), null);
      case 22:
      case 23:
        return (
          se(e),
          hc(),
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
          l !== null && Un(e, l.retryQueue),
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
          t !== null && j(Vl),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          Ve(Ut),
          Tt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, e.tag));
  }
  function ny(t, e) {
    switch ((Ii(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          Ve(Ut),
          Dt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0 ?
            ((e.flags = (t & -65537) | 128), e)
          : null
        );
      case 26:
      case 27:
      case 5:
        return (Zu(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((se(e), e.alternate === null)) throw Error(s(340));
          Xl();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (se(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(s(340));
          Xl();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (j(Nt), null);
      case 4:
        return (Dt(), null);
      case 10:
        return (Ve(e.type), null);
      case 22:
      case 23:
        return (
          se(e),
          hc(),
          t !== null && j(Vl),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (Ve(Ut), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Rr(t, e) {
    switch ((Ii(e), e.tag)) {
      case 3:
        (Ve(Ut), Dt());
        break;
      case 26:
      case 27:
      case 5:
        Zu(e);
        break;
      case 4:
        Dt();
        break;
      case 31:
        e.memoizedState !== null && se(e);
        break;
      case 13:
        se(e);
        break;
      case 19:
        j(Nt);
        break;
      case 10:
        Ve(e.type);
        break;
      case 22:
      case 23:
        (se(e), hc(), t !== null && j(Vl));
        break;
      case 24:
        Ve(Ut);
    }
  }
  function yu(t, e) {
    try {
      var l = e.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        l = u;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var n = l.create,
              i = l.inst;
            ((a = n()), (i.destroy = a));
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (f) {
      ht(e, e.return, f);
    }
  }
  function pl(t, e, l) {
    try {
      var a = e.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst,
              f = i.destroy;
            if (f !== void 0) {
              ((i.destroy = void 0), (u = e));
              var d = l,
                _ = f;
              try {
                _();
              } catch (R) {
                ht(u, d, R);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (R) {
      ht(e, e.return, R);
    }
  }
  function Or(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        go(e, l);
      } catch (a) {
        ht(t, t.return, a);
      }
    }
  }
  function Mr(t, e, l) {
    ((l.props = Wl(t.type, t.memoizedProps)), (l.state = t.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (a) {
      ht(t, e, a);
    }
  }
  function vu(t, e) {
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
    } catch (u) {
      ht(t, e, u);
    }
  }
  function He(t, e) {
    var l = t.ref,
      a = t.refCleanup;
    if (l !== null)
      if (typeof a == 'function')
        try {
          a();
        } catch (u) {
          ht(t, e, u);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof l == 'function')
        try {
          l(null);
        } catch (u) {
          ht(t, e, u);
        }
      else l.current = null;
  }
  function xr(t) {
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
    } catch (u) {
      ht(t, t.return, u);
    }
  }
  function Kc(t, e, l) {
    try {
      var a = t.stateNode;
      (Oy(a, t.type, l, e), (a[kt] = e));
    } catch (u) {
      ht(t, t.return, u);
    }
  }
  function Dr(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Al(t.type)) ||
      t.tag === 4
    );
  }
  function Jc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Dr(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && Al(t.type)) ||
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
  function wc(t, e, l) {
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
          l != null || e.onclick !== null || (e.onclick = Le)));
    else if (
      a !== 4 &&
      (a === 27 && Al(t.type) && ((l = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (wc(t, e, l), t = t.sibling; t !== null; )
        (wc(t, e, l), (t = t.sibling));
  }
  function jn(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      ((t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t));
    else if (
      a !== 4 &&
      (a === 27 && Al(t.type) && (l = t.stateNode), (t = t.child), t !== null)
    )
      for (jn(t, e, l), t = t.sibling; t !== null; )
        (jn(t, e, l), (t = t.sibling));
  }
  function Nr(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var a = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      (Kt(e, a, l), (e[Xt] = t), (e[kt] = l));
    } catch (n) {
      ht(t, t.return, n);
    }
  }
  var We = !1,
    Bt = !1,
    $c = !1,
    Cr = typeof WeakSet == 'function' ? WeakSet : Set,
    Lt = null;
  function iy(t, e) {
    if (((t = t.containerInfo), (vf = ei), (t = Zs(t)), Xi(t))) {
      if ('selectionStart' in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var u = a.anchorOffset,
              n = a.focusNode;
            a = a.focusOffset;
            try {
              (l.nodeType, n.nodeType);
            } catch {
              l = null;
              break t;
            }
            var i = 0,
              f = -1,
              d = -1,
              _ = 0,
              R = 0,
              C = t,
              T = null;
            e: for (;;) {
              for (
                var z;
                C !== l || (u !== 0 && C.nodeType !== 3) || (f = i + u),
                  C !== n || (a !== 0 && C.nodeType !== 3) || (d = i + a),
                  C.nodeType === 3 && (i += C.nodeValue.length),
                  (z = C.firstChild) !== null;
              )
                ((T = C), (C = z));
              for (;;) {
                if (C === t) break e;
                if (
                  (T === l && ++_ === u && (f = i),
                  T === n && ++R === a && (d = i),
                  (z = C.nextSibling) !== null)
                )
                  break;
                ((C = T), (T = C.parentNode));
              }
              C = z;
            }
            l = f === -1 || d === -1 ? null : { start: f, end: d };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      gf = { focusedElem: t, selectionRange: l }, ei = !1, Lt = e;
      Lt !== null;
    )
      if (
        ((e = Lt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        ((t.return = e), (Lt = t));
      else
        for (; Lt !== null; ) {
          switch (((e = Lt), (n = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (l = 0; l < t.length; l++)
                  ((u = t[l]), (u.ref.impl = u.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && n !== null) {
                ((t = void 0),
                  (l = e),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (a = l.stateNode));
                try {
                  var Y = Wl(l.type, u);
                  ((t = a.getSnapshotBeforeUpdate(Y, n)),
                    (a.__reactInternalSnapshotBeforeUpdate = t));
                } catch (w) {
                  ht(l, l.return, w);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  bf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      bf(t);
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
              if ((t & 1024) !== 0) throw Error(s(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (Lt = t));
            break;
          }
          Lt = e.return;
        }
  }
  function Ur(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (Fe(t, l), a & 4 && yu(5, l));
        break;
      case 1:
        if ((Fe(t, l), a & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (i) {
              ht(l, l.return, i);
            }
          else {
            var u = Wl(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              ht(l, l.return, i);
            }
          }
        (a & 64 && Or(l), a & 512 && vu(l, l.return));
        break;
      case 3:
        if ((Fe(t, l), a & 64 && ((t = l.updateQueue), t !== null))) {
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
            go(t, e);
          } catch (i) {
            ht(l, l.return, i);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Nr(l);
      case 26:
      case 5:
        (Fe(t, l), e === null && a & 4 && xr(l), a & 512 && vu(l, l.return));
        break;
      case 12:
        Fe(t, l);
        break;
      case 31:
        (Fe(t, l), a & 4 && Br(t, l));
        break;
      case 13:
        (Fe(t, l),
          a & 4 && qr(t, l),
          a & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = yy.bind(null, l)), Hy(t, l)))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || We), !a)) {
          ((e = (e !== null && e.memoizedState !== null) || Bt), (u = We));
          var n = Bt;
          ((We = a),
            (Bt = e) && !n ? Ie(t, l, (l.subtreeFlags & 8772) !== 0) : Fe(t, l),
            (We = u),
            (Bt = n));
        }
        break;
      case 30:
        break;
      default:
        Fe(t, l);
    }
  }
  function jr(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), jr(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && zi(e)),
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
    It = !1;
  function ke(t, e, l) {
    for (l = l.child; l !== null; ) (Hr(t, e, l), (l = l.sibling));
  }
  function Hr(t, e, l) {
    if (ue && typeof ue.onCommitFiberUnmount == 'function')
      try {
        ue.onCommitFiberUnmount(Ga, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (Bt || He(l, e),
          ke(t, e, l),
          l.memoizedState ?
            l.memoizedState.count--
          : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        Bt || He(l, e);
        var a = zt,
          u = It;
        (Al(l.type) && ((zt = l.stateNode), (It = !1)),
          ke(t, e, l),
          Au(l.stateNode),
          (zt = a),
          (It = u));
        break;
      case 5:
        Bt || He(l, e);
      case 6:
        if (
          ((a = zt),
          (u = It),
          (zt = null),
          ke(t, e, l),
          (zt = a),
          (It = u),
          zt !== null)
        )
          if (It)
            try {
              (zt.nodeType === 9 ? zt.body
              : zt.nodeName === 'HTML' ? zt.ownerDocument.body
              : zt
              ).removeChild(l.stateNode);
            } catch (n) {
              ht(l, e, n);
            }
          else
            try {
              zt.removeChild(l.stateNode);
            } catch (n) {
              ht(l, e, n);
            }
        break;
      case 18:
        zt !== null &&
          (It ?
            ((t = zt),
            Od(
              t.nodeType === 9 ? t.body
              : t.nodeName === 'HTML' ? t.ownerDocument.body
              : t,
              l.stateNode,
            ),
            qa(t))
          : Od(zt, l.stateNode));
        break;
      case 4:
        ((a = zt),
          (u = It),
          (zt = l.stateNode.containerInfo),
          (It = !0),
          ke(t, e, l),
          (zt = a),
          (It = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (pl(2, l, e), Bt || pl(4, l, e), ke(t, e, l));
        break;
      case 1:
        (Bt ||
          (He(l, e),
          (a = l.stateNode),
          typeof a.componentWillUnmount == 'function' && Mr(l, e, a)),
          ke(t, e, l));
        break;
      case 21:
        ke(t, e, l);
        break;
      case 22:
        ((Bt = (a = Bt) || l.memoizedState !== null), ke(t, e, l), (Bt = a));
        break;
      default:
        ke(t, e, l);
    }
  }
  function Br(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        qa(t);
      } catch (l) {
        ht(e, e.return, l);
      }
    }
  }
  function qr(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        qa(t);
      } catch (l) {
        ht(e, e.return, l);
      }
  }
  function cy(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new Cr()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Cr()),
          e
        );
      default:
        throw Error(s(435, t.tag));
    }
  }
  function Hn(t, e) {
    var l = cy(t);
    e.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var u = vy.bind(null, t, a);
        a.then(u, u);
      }
    });
  }
  function Pt(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var u = l[a],
          n = t,
          i = e,
          f = i;
        t: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (Al(f.type)) {
                ((zt = f.stateNode), (It = !1));
                break t;
              }
              break;
            case 5:
              ((zt = f.stateNode), (It = !1));
              break t;
            case 3:
            case 4:
              ((zt = f.stateNode.containerInfo), (It = !0));
              break t;
          }
          f = f.return;
        }
        if (zt === null) throw Error(s(160));
        (Hr(n, i, u),
          (zt = null),
          (It = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) (Yr(e, t), (e = e.sibling));
  }
  var xe = null;
  function Yr(t, e) {
    var l = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Pt(e, t),
          te(t),
          a & 4 && (pl(3, t, t.return), yu(3, t), pl(5, t, t.return)));
        break;
      case 1:
        (Pt(e, t),
          te(t),
          a & 512 && (Bt || l === null || He(l, l.return)),
          a & 64 &&
            We &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? a : l.concat(a))))));
        break;
      case 26:
        var u = xe;
        if (
          (Pt(e, t),
          te(t),
          a & 512 && (Bt || l === null || He(l, l.return)),
          a & 4)
        ) {
          var n = l !== null ? l.memoizedState : null;
          if (((a = t.memoizedState), l === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  ((a = t.type),
                    (l = t.memoizedProps),
                    (u = u.ownerDocument || u));
                  e: switch (a) {
                    case 'title':
                      ((n = u.getElementsByTagName('title')[0]),
                        (!n ||
                          n[Za] ||
                          n[Xt] ||
                          n.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          n.hasAttribute('itemprop')) &&
                          ((n = u.createElement(a)),
                          u.head.insertBefore(
                            n,
                            u.querySelector('head > title'),
                          )),
                        Kt(n, a, l),
                        (n[Xt] = t),
                        Yt(n),
                        (a = n));
                      break t;
                    case 'link':
                      var i = Yd('link', 'href', u).get(a + (l.href || ''));
                      if (i) {
                        for (var f = 0; f < i.length; f++)
                          if (
                            ((n = i[f]),
                            n.getAttribute('href') ===
                              (l.href == null || l.href === '' ?
                                null
                              : l.href) &&
                              n.getAttribute('rel') ===
                                (l.rel == null ? null : l.rel) &&
                              n.getAttribute('title') ===
                                (l.title == null ? null : l.title) &&
                              n.getAttribute('crossorigin') ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            i.splice(f, 1);
                            break e;
                          }
                      }
                      ((n = u.createElement(a)),
                        Kt(n, a, l),
                        u.head.appendChild(n));
                      break;
                    case 'meta':
                      if (
                        (i = Yd('meta', 'content', u).get(
                          a + (l.content || ''),
                        ))
                      ) {
                        for (f = 0; f < i.length; f++)
                          if (
                            ((n = i[f]),
                            n.getAttribute('content') ===
                              (l.content == null ? null : '' + l.content) &&
                              n.getAttribute('name') ===
                                (l.name == null ? null : l.name) &&
                              n.getAttribute('property') ===
                                (l.property == null ? null : l.property) &&
                              n.getAttribute('http-equiv') ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              n.getAttribute('charset') ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            i.splice(f, 1);
                            break e;
                          }
                      }
                      ((n = u.createElement(a)),
                        Kt(n, a, l),
                        u.head.appendChild(n));
                      break;
                    default:
                      throw Error(s(468, a));
                  }
                  ((n[Xt] = t), Yt(n), (a = n));
                }
                t.stateNode = a;
              } else Ld(u, t.type, t.stateNode);
            else t.stateNode = qd(u, a, t.memoizedProps);
          else
            n !== a ?
              (n === null ?
                l.stateNode !== null &&
                ((l = l.stateNode), l.parentNode.removeChild(l))
              : n.count--,
              a === null ?
                Ld(u, t.type, t.stateNode)
              : qd(u, a, t.memoizedProps))
            : a === null &&
              t.stateNode !== null &&
              Kc(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (Pt(e, t),
          te(t),
          a & 512 && (Bt || l === null || He(l, l.return)),
          l !== null && a & 4 && Kc(t, t.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (Pt(e, t),
          te(t),
          a & 512 && (Bt || l === null || He(l, l.return)),
          t.flags & 32)
        ) {
          u = t.stateNode;
          try {
            ia(u, '');
          } catch (Y) {
            ht(t, t.return, Y);
          }
        }
        (a & 4 &&
          t.stateNode != null &&
          ((u = t.memoizedProps), Kc(t, u, l !== null ? l.memoizedProps : u)),
          a & 1024 && ($c = !0));
        break;
      case 6:
        if ((Pt(e, t), te(t), a & 4)) {
          if (t.stateNode === null) throw Error(s(162));
          ((a = t.memoizedProps), (l = t.stateNode));
          try {
            l.nodeValue = a;
          } catch (Y) {
            ht(t, t.return, Y);
          }
        }
        break;
      case 3:
        if (
          ((Fn = null),
          (u = xe),
          (xe = Wn(e.containerInfo)),
          Pt(e, t),
          (xe = u),
          te(t),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            qa(e.containerInfo);
          } catch (Y) {
            ht(t, t.return, Y);
          }
        $c && (($c = !1), Lr(t));
        break;
      case 4:
        ((a = xe),
          (xe = Wn(t.stateNode.containerInfo)),
          Pt(e, t),
          te(t),
          (xe = a));
        break;
      case 12:
        (Pt(e, t), te(t));
        break;
      case 31:
        (Pt(e, t),
          te(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Hn(t, a))));
        break;
      case 13:
        (Pt(e, t),
          te(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (qn = ae()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Hn(t, a))));
        break;
      case 22:
        u = t.memoizedState !== null;
        var d = l !== null && l.memoizedState !== null,
          _ = We,
          R = Bt;
        if (
          ((We = _ || u),
          (Bt = R || d),
          Pt(e, t),
          (Bt = R),
          (We = _),
          te(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = u ? e._visibility & -2 : e._visibility | 1,
              u && (l === null || d || We || Bt || kl(t)),
              l = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                d = l = e;
                try {
                  if (((n = d.stateNode), u))
                    ((i = n.style),
                      typeof i.setProperty == 'function' ?
                        i.setProperty('display', 'none', 'important')
                      : (i.display = 'none'));
                  else {
                    f = d.stateNode;
                    var C = d.memoizedProps.style,
                      T =
                        C != null && C.hasOwnProperty('display') ?
                          C.display
                        : null;
                    f.style.display =
                      T == null || typeof T == 'boolean' ? '' : ('' + T).trim();
                  }
                } catch (Y) {
                  ht(d, d.return, Y);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                d = e;
                try {
                  d.stateNode.nodeValue = u ? '' : d.memoizedProps;
                } catch (Y) {
                  ht(d, d.return, Y);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                d = e;
                try {
                  var z = d.stateNode;
                  u ? Md(z, !0) : Md(d.stateNode, !1);
                } catch (Y) {
                  ht(d, d.return, Y);
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
            l !== null && ((a.retryQueue = null), Hn(t, l))));
        break;
      case 19:
        (Pt(e, t),
          te(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Hn(t, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Pt(e, t), te(t));
    }
  }
  function te(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (Dr(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(s(160));
        switch (l.tag) {
          case 27:
            var u = l.stateNode,
              n = Jc(t);
            jn(t, n, u);
            break;
          case 5:
            var i = l.stateNode;
            l.flags & 32 && (ia(i, ''), (l.flags &= -33));
            var f = Jc(t);
            jn(t, f, i);
            break;
          case 3:
          case 4:
            var d = l.stateNode.containerInfo,
              _ = Jc(t);
            wc(t, _, d);
            break;
          default:
            throw Error(s(161));
        }
      } catch (R) {
        ht(t, t.return, R);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Lr(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (Lr(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function Fe(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (Ur(t, e.alternate, e), (e = e.sibling));
  }
  function kl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (pl(4, e, e.return), kl(e));
          break;
        case 1:
          He(e, e.return);
          var l = e.stateNode;
          (typeof l.componentWillUnmount == 'function' && Mr(e, e.return, l),
            kl(e));
          break;
        case 27:
          Au(e.stateNode);
        case 26:
        case 5:
          (He(e, e.return), kl(e));
          break;
        case 22:
          e.memoizedState === null && kl(e);
          break;
        case 30:
          kl(e);
          break;
        default:
          kl(e);
      }
      t = t.sibling;
    }
  }
  function Ie(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        u = t,
        n = e,
        i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (Ie(u, n, l), yu(4, n));
          break;
        case 1:
          if (
            (Ie(u, n, l),
            (a = n),
            (u = a.stateNode),
            typeof u.componentDidMount == 'function')
          )
            try {
              u.componentDidMount();
            } catch (_) {
              ht(a, a.return, _);
            }
          if (((a = n), (u = a.updateQueue), u !== null)) {
            var f = a.stateNode;
            try {
              var d = u.shared.hiddenCallbacks;
              if (d !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < d.length; u++)
                  vo(d[u], f);
            } catch (_) {
              ht(a, a.return, _);
            }
          }
          (l && i & 64 && Or(n), vu(n, n.return));
          break;
        case 27:
          Nr(n);
        case 26:
        case 5:
          (Ie(u, n, l), l && a === null && i & 4 && xr(n), vu(n, n.return));
          break;
        case 12:
          Ie(u, n, l);
          break;
        case 31:
          (Ie(u, n, l), l && i & 4 && Br(u, n));
          break;
        case 13:
          (Ie(u, n, l), l && i & 4 && qr(u, n));
          break;
        case 22:
          (n.memoizedState === null && Ie(u, n, l), vu(n, n.return));
          break;
        case 30:
          break;
        default:
          Ie(u, n, l);
      }
      e = e.sibling;
    }
  }
  function Wc(t, e) {
    var l = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && lu(l)));
  }
  function kc(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && lu(t)));
  }
  function De(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Gr(t, e, l, a), (e = e.sibling));
  }
  function Gr(t, e, l, a) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (De(t, e, l, a), u & 2048 && yu(9, e));
        break;
      case 1:
        De(t, e, l, a);
        break;
      case 3:
        (De(t, e, l, a),
          u & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && lu(t))));
        break;
      case 12:
        if (u & 2048) {
          (De(t, e, l, a), (t = e.stateNode));
          try {
            var n = e.memoizedProps,
              i = n.id,
              f = n.onPostCommit;
            typeof f == 'function' &&
              f(
                i,
                e.alternate === null ? 'mount' : 'update',
                t.passiveEffectDuration,
                -0,
              );
          } catch (d) {
            ht(e, e.return, d);
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
        ((n = e.stateNode),
          (i = e.alternate),
          e.memoizedState !== null ?
            n._visibility & 2 ?
              De(t, e, l, a)
            : gu(t, e)
          : n._visibility & 2 ? De(t, e, l, a)
          : ((n._visibility |= 2),
            Ra(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && Wc(i, e));
        break;
      case 24:
        (De(t, e, l, a), u & 2048 && kc(e.alternate, e));
        break;
      default:
        De(t, e, l, a);
    }
  }
  function Ra(t, e, l, a, u) {
    for (
      u = u && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;
    ) {
      var n = t,
        i = e,
        f = l,
        d = a,
        _ = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (Ra(n, i, f, d, u), yu(8, i));
          break;
        case 23:
          break;
        case 22:
          var R = i.stateNode;
          (i.memoizedState !== null ?
            R._visibility & 2 ?
              Ra(n, i, f, d, u)
            : gu(n, i)
          : ((R._visibility |= 2), Ra(n, i, f, d, u)),
            u && _ & 2048 && Wc(i.alternate, i));
          break;
        case 24:
          (Ra(n, i, f, d, u), u && _ & 2048 && kc(i.alternate, i));
          break;
        default:
          Ra(n, i, f, d, u);
      }
      e = e.sibling;
    }
  }
  function gu(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          a = e,
          u = a.flags;
        switch (a.tag) {
          case 22:
            (gu(l, a), u & 2048 && Wc(a.alternate, a));
            break;
          case 24:
            (gu(l, a), u & 2048 && kc(a.alternate, a));
            break;
          default:
            gu(l, a);
        }
        e = e.sibling;
      }
  }
  var pu = 8192;
  function Oa(t, e, l) {
    if (t.subtreeFlags & pu)
      for (t = t.child; t !== null; ) (Xr(t, e, l), (t = t.sibling));
  }
  function Xr(t, e, l) {
    switch (t.tag) {
      case 26:
        (Oa(t, e, l),
          t.flags & pu &&
            t.memoizedState !== null &&
            wy(l, xe, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        Oa(t, e, l);
        break;
      case 3:
      case 4:
        var a = xe;
        ((xe = Wn(t.stateNode.containerInfo)), Oa(t, e, l), (xe = a));
        break;
      case 22:
        t.memoizedState === null &&
          ((a = t.alternate),
          a !== null && a.memoizedState !== null ?
            ((a = pu), (pu = 16777216), Oa(t, e, l), (pu = a))
          : Oa(t, e, l));
        break;
      default:
        Oa(t, e, l);
    }
  }
  function Qr(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function Su(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          ((Lt = a), Vr(a, t));
        }
      Qr(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Zr(t), (t = t.sibling));
  }
  function Zr(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Su(t), t.flags & 2048 && pl(9, t, t.return));
        break;
      case 3:
        Su(t);
        break;
      case 12:
        Su(t);
        break;
      case 22:
        var e = t.stateNode;
        (
          t.memoizedState !== null &&
          e._visibility & 2 &&
          (t.return === null || t.return.tag !== 13)
        ) ?
          ((e._visibility &= -3), Bn(t))
        : Su(t);
        break;
      default:
        Su(t);
    }
  }
  function Bn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          ((Lt = a), Vr(a, t));
        }
      Qr(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (pl(8, e, e.return), Bn(e));
          break;
        case 22:
          ((l = e.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Bn(e)));
          break;
        default:
          Bn(e);
      }
      t = t.sibling;
    }
  }
  function Vr(t, e) {
    for (; Lt !== null; ) {
      var l = Lt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          pl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          lu(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) ((a.return = l), (Lt = a));
      else
        t: for (l = t; Lt !== null; ) {
          a = Lt;
          var u = a.sibling,
            n = a.return;
          if ((jr(a), a === l)) {
            Lt = null;
            break t;
          }
          if (u !== null) {
            ((u.return = n), (Lt = u));
            break t;
          }
          Lt = n;
        }
    }
  }
  var fy = {
      getCacheForType: function (t) {
        var e = Zt(Ut),
          l = e.data.get(t);
        return (l === void 0 && ((l = t()), e.data.set(t, l)), l);
      },
      cacheSignal: function () {
        return Zt(Ut).controller.signal;
      },
    },
    sy = typeof WeakMap == 'function' ? WeakMap : Map,
    ot = 0,
    St = null,
    at = null,
    nt = 0,
    dt = 0,
    oe = null,
    Sl = !1,
    Ma = !1,
    Fc = !1,
    Pe = 0,
    Mt = 0,
    bl = 0,
    Fl = 0,
    Ic = 0,
    re = 0,
    xa = 0,
    bu = null,
    ee = null,
    Pc = !1,
    qn = 0,
    Kr = 0,
    Yn = 1 / 0,
    Ln = null,
    El = null,
    qt = 0,
    _l = null,
    Da = null,
    tl = 0,
    tf = 0,
    ef = null,
    Jr = null,
    Eu = 0,
    lf = null;
  function de() {
    return (
      (ot & 2) !== 0 && nt !== 0 ? nt & -nt
      : O.T !== null ? sf()
      : cs()
    );
  }
  function wr() {
    if (re === 0)
      if ((nt & 536870912) === 0 || ct) {
        var t = Ju;
        ((Ju <<= 1), (Ju & 3932160) === 0 && (Ju = 262144), (re = t));
      } else re = 536870912;
    return ((t = fe.current), t !== null && (t.flags |= 32), re);
  }
  function le(t, e, l) {
    (((t === St && (dt === 2 || dt === 9)) || t.cancelPendingCommit !== null) &&
      (Na(t, 0), Tl(t, nt, re, !1)),
      Qa(t, l),
      ((ot & 2) === 0 || t !== St) &&
        (t === St &&
          ((ot & 2) === 0 && (Fl |= l), Mt === 4 && Tl(t, nt, re, !1)),
        Be(t)));
  }
  function $r(t, e, l) {
    if ((ot & 6) !== 0) throw Error(s(327));
    var a = (!l && (e & 127) === 0 && (e & t.expiredLanes) === 0) || Xa(t, e),
      u = a ? dy(t, e) : uf(t, e, !0),
      n = a;
    do {
      if (u === 0) {
        Ma && !a && Tl(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), n && !oy(l))) {
          ((u = uf(t, e, !1)), (n = !1));
          continue;
        }
        if (u === 2) {
          if (((n = e), t.errorRecoveryDisabledLanes & n)) var i = 0;
          else
            ((i = t.pendingLanes & -536870913),
              (i =
                i !== 0 ? i
                : i & 536870912 ? 536870912
                : 0));
          if (i !== 0) {
            e = i;
            t: {
              var f = t;
              u = bu;
              var d = f.current.memoizedState.isDehydrated;
              if ((d && (Na(f, i).flags |= 256), (i = uf(f, i, !1)), i !== 2)) {
                if (Fc && !d) {
                  ((f.errorRecoveryDisabledLanes |= n), (Fl |= n), (u = 4));
                  break t;
                }
                ((n = ee),
                  (ee = u),
                  n !== null &&
                    (ee === null ? (ee = n) : ee.push.apply(ee, n)));
              }
              u = i;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (Na(t, 0), Tl(t, e, 0, !0));
          break;
        }
        t: {
          switch (((a = t), (n = u), n)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Tl(a, e, re, !Sl);
              break t;
            case 2:
              ee = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((e & 62914560) === e && ((u = qn + 300 - ae()), 10 < u)) {
            if ((Tl(a, e, re, !Sl), $u(a, 0, !0) !== 0)) break t;
            ((tl = e),
              (a.timeoutHandle = Ad(
                Wr.bind(
                  null,
                  a,
                  l,
                  ee,
                  Ln,
                  Pc,
                  e,
                  re,
                  Fl,
                  xa,
                  Sl,
                  n,
                  'Throttled',
                  -0,
                  0,
                ),
                u,
              )));
            break t;
          }
          Wr(a, l, ee, Ln, Pc, e, re, Fl, xa, Sl, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Be(t);
  }
  function Wr(t, e, l, a, u, n, i, f, d, _, R, C, T, z) {
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
        unsuspend: Le,
      }),
        Xr(e, n, C));
      var Y =
        (n & 62914560) === n ? qn - ae()
        : (n & 4194048) === n ? Kr - ae()
        : 0;
      if (((Y = $y(C, Y)), Y !== null)) {
        ((tl = n),
          (t.cancelPendingCommit = Y(
            ad.bind(null, t, e, n, l, a, u, i, f, d, R, C, null, T, z),
          )),
          Tl(t, n, i, !_));
        return;
      }
    }
    ad(t, e, n, l, a, u, i, f, d);
  }
  function oy(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var u = l[a],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!ie(n(), u)) return !1;
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
  function Tl(t, e, l, a) {
    ((e &= ~Ic),
      (e &= ~Fl),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes));
    for (var u = e; 0 < u; ) {
      var n = 31 - ne(u),
        i = 1 << n;
      ((a[n] = -1), (u &= ~i));
    }
    l !== 0 && us(t, l, e);
  }
  function Gn() {
    return (ot & 6) === 0 ? (_u(0), !1) : !0;
  }
  function af() {
    if (at !== null) {
      if (dt === 0) var t = at.return;
      else ((t = at), (Ze = Ql = null), Sc(t), (Ea = null), (uu = 0), (t = at));
      for (; t !== null; ) (Rr(t.alternate, t), (t = t.return));
      at = null;
    }
  }
  function Na(t, e) {
    var l = t.timeoutHandle;
    (l !== -1 && ((t.timeoutHandle = -1), Dy(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      (tl = 0),
      af(),
      (St = t),
      (at = l = Xe(t.current, null)),
      (nt = e),
      (dt = 0),
      (oe = null),
      (Sl = !1),
      (Ma = Xa(t, e)),
      (Fc = !1),
      (xa = re = Ic = Fl = bl = Mt = 0),
      (ee = bu = null),
      (Pc = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var u = 31 - ne(a),
          n = 1 << u;
        ((e |= t[u]), (a &= ~n));
      }
    return ((Pe = e), cn(), l);
  }
  function kr(t, e) {
    ((tt = null),
      (O.H = du),
      e === ba || e === yn ? ((e = ro()), (dt = 3))
      : e === cc ? ((e = ro()), (dt = 4))
      : (dt =
          e === Hc ? 8
          : e !== null && typeof e == 'object' && typeof e.then == 'function' ?
            6
          : 1),
      (oe = e),
      at === null && ((Mt = 1), xn(t, ge(e, t.current))));
  }
  function Fr() {
    var t = fe.current;
    return (
      t === null ? !0
      : (nt & 4194048) === nt ? Ee === null
      : (nt & 62914560) === nt || (nt & 536870912) !== 0 ? t === Ee
      : !1
    );
  }
  function Ir() {
    var t = O.H;
    return ((O.H = du), t === null ? du : t);
  }
  function Pr() {
    var t = O.A;
    return ((O.A = fy), t);
  }
  function Xn() {
    ((Mt = 4),
      Sl || ((nt & 4194048) !== nt && fe.current !== null) || (Ma = !0),
      ((bl & 134217727) === 0 && (Fl & 134217727) === 0) ||
        St === null ||
        Tl(St, nt, re, !1));
  }
  function uf(t, e, l) {
    var a = ot;
    ot |= 2;
    var u = Ir(),
      n = Pr();
    ((St !== t || nt !== e) && ((Ln = null), Na(t, e)), (e = !1));
    var i = Mt;
    t: do
      try {
        if (dt !== 0 && at !== null) {
          var f = at,
            d = oe;
          switch (dt) {
            case 8:
              (af(), (i = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              fe.current === null && (e = !0);
              var _ = dt;
              if (((dt = 0), (oe = null), Ca(t, f, d, _), l && Ma)) {
                i = 0;
                break t;
              }
              break;
            default:
              ((_ = dt), (dt = 0), (oe = null), Ca(t, f, d, _));
          }
        }
        (ry(), (i = Mt));
        break;
      } catch (R) {
        kr(t, R);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Ze = Ql = null),
      (ot = a),
      (O.H = u),
      (O.A = n),
      at === null && ((St = null), (nt = 0), cn()),
      i
    );
  }
  function ry() {
    for (; at !== null; ) td(at);
  }
  function dy(t, e) {
    var l = ot;
    ot |= 2;
    var a = Ir(),
      u = Pr();
    St !== t || nt !== e ?
      ((Ln = null), (Yn = ae() + 500), Na(t, e))
    : (Ma = Xa(t, e));
    t: do
      try {
        if (dt !== 0 && at !== null) {
          e = at;
          var n = oe;
          e: switch (dt) {
            case 1:
              ((dt = 0), (oe = null), Ca(t, e, n, 1));
              break;
            case 2:
            case 9:
              if (so(n)) {
                ((dt = 0), (oe = null), ed(e));
                break;
              }
              ((e = function () {
                ((dt !== 2 && dt !== 9) || St !== t || (dt = 7), Be(t));
              }),
                n.then(e, e));
              break t;
            case 3:
              dt = 7;
              break t;
            case 4:
              dt = 5;
              break t;
            case 7:
              so(n) ?
                ((dt = 0), (oe = null), ed(e))
              : ((dt = 0), (oe = null), Ca(t, e, n, 7));
              break;
            case 5:
              var i = null;
              switch (at.tag) {
                case 26:
                  i = at.memoizedState;
                case 5:
                case 27:
                  var f = at;
                  if (i ? Gd(i) : f.stateNode.complete) {
                    ((dt = 0), (oe = null));
                    var d = f.sibling;
                    if (d !== null) at = d;
                    else {
                      var _ = f.return;
                      _ !== null ? ((at = _), Qn(_)) : (at = null);
                    }
                    break e;
                  }
              }
              ((dt = 0), (oe = null), Ca(t, e, n, 5));
              break;
            case 6:
              ((dt = 0), (oe = null), Ca(t, e, n, 6));
              break;
            case 8:
              (af(), (Mt = 6));
              break t;
            default:
              throw Error(s(462));
          }
        }
        hy();
        break;
      } catch (R) {
        kr(t, R);
      }
    while (!0);
    return (
      (Ze = Ql = null),
      (O.H = a),
      (O.A = u),
      (ot = l),
      at !== null ? 0 : ((St = null), (nt = 0), cn(), Mt)
    );
  }
  function hy() {
    for (; at !== null && !Bh(); ) td(at);
  }
  function td(t) {
    var e = zr(t.alternate, t, Pe);
    ((t.memoizedProps = t.pendingProps), e === null ? Qn(t) : (at = e));
  }
  function ed(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = pr(l, e, e.pendingProps, e.type, void 0, nt);
        break;
      case 11:
        e = pr(l, e, e.pendingProps, e.type.render, e.ref, nt);
        break;
      case 5:
        Sc(e);
      default:
        (Rr(l, e), (e = at = Is(e, Pe)), (e = zr(l, e, Pe)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Qn(t) : (at = e));
  }
  function Ca(t, e, l, a) {
    ((Ze = Ql = null), Sc(e), (Ea = null), (uu = 0));
    var u = e.return;
    try {
      if (ey(t, u, e, l, nt)) {
        ((Mt = 1), xn(t, ge(l, t.current)), (at = null));
        return;
      }
    } catch (n) {
      if (u !== null) throw ((at = u), n);
      ((Mt = 1), xn(t, ge(l, t.current)), (at = null));
      return;
    }
    e.flags & 32768 ?
      (ct || a === 1 ? (t = !0)
      : Ma || (nt & 536870912) !== 0 ? (t = !1)
      : ((Sl = t = !0),
        (a === 2 || a === 9 || a === 3 || a === 6) &&
          ((a = fe.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
      ld(e, t))
    : Qn(e);
  }
  function Qn(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        ld(e, Sl);
        return;
      }
      t = e.return;
      var l = uy(e.alternate, e, Pe);
      if (l !== null) {
        at = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        at = e;
        return;
      }
      at = e = t;
    } while (e !== null);
    Mt === 0 && (Mt = 5);
  }
  function ld(t, e) {
    do {
      var l = ny(t.alternate, t);
      if (l !== null) {
        ((l.flags &= 32767), (at = l));
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        at = t;
        return;
      }
      at = t = l;
    } while (t !== null);
    ((Mt = 6), (at = null));
  }
  function ad(t, e, l, a, u, n, i, f, d) {
    t.cancelPendingCommit = null;
    do Zn();
    while (qt !== 0);
    if ((ot & 6) !== 0) throw Error(s(327));
    if (e !== null) {
      if (e === t.current) throw Error(s(177));
      if (
        ((n = e.lanes | e.childLanes),
        (n |= Ji),
        Jh(t, l, n, i, f, d),
        t === St && ((at = St = null), (nt = 0)),
        (Da = e),
        (_l = t),
        (tl = l),
        (tf = n),
        (ef = u),
        (Jr = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ?
          ((t.callbackNode = null),
          (t.callbackPriority = 0),
          gy(Vu, function () {
            return (fd(), null);
          }))
        : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = O.T), (O.T = null), (u = H.p), (H.p = 2), (i = ot), (ot |= 4));
        try {
          iy(t, e, l);
        } finally {
          ((ot = i), (H.p = u), (O.T = a));
        }
      }
      ((qt = 1), ud(), nd(), id());
    }
  }
  function ud() {
    if (qt === 1) {
      qt = 0;
      var t = _l,
        e = Da,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        ((l = O.T), (O.T = null));
        var a = H.p;
        H.p = 2;
        var u = ot;
        ot |= 4;
        try {
          Yr(e, t);
          var n = gf,
            i = Zs(t.containerInfo),
            f = n.focusedElem,
            d = n.selectionRange;
          if (
            i !== f &&
            f &&
            f.ownerDocument &&
            Qs(f.ownerDocument.documentElement, f)
          ) {
            if (d !== null && Xi(f)) {
              var _ = d.start,
                R = d.end;
              if ((R === void 0 && (R = _), 'selectionStart' in f))
                ((f.selectionStart = _),
                  (f.selectionEnd = Math.min(R, f.value.length)));
              else {
                var C = f.ownerDocument || document,
                  T = (C && C.defaultView) || window;
                if (T.getSelection) {
                  var z = T.getSelection(),
                    Y = f.textContent.length,
                    w = Math.min(d.start, Y),
                    gt = d.end === void 0 ? w : Math.min(d.end, Y);
                  !z.extend && w > gt && ((i = gt), (gt = w), (w = i));
                  var p = Xs(f, w),
                    y = Xs(f, gt);
                  if (
                    p &&
                    y &&
                    (z.rangeCount !== 1 ||
                      z.anchorNode !== p.node ||
                      z.anchorOffset !== p.offset ||
                      z.focusNode !== y.node ||
                      z.focusOffset !== y.offset)
                  ) {
                    var b = C.createRange();
                    (b.setStart(p.node, p.offset),
                      z.removeAllRanges(),
                      w > gt ?
                        (z.addRange(b), z.extend(y.node, y.offset))
                      : (b.setEnd(y.node, y.offset), z.addRange(b)));
                  }
                }
              }
            }
            for (C = [], z = f; (z = z.parentNode); )
              z.nodeType === 1 &&
                C.push({ element: z, left: z.scrollLeft, top: z.scrollTop });
            for (
              typeof f.focus == 'function' && f.focus(), f = 0;
              f < C.length;
              f++
            ) {
              var D = C[f];
              ((D.element.scrollLeft = D.left), (D.element.scrollTop = D.top));
            }
          }
          ((ei = !!vf), (gf = vf = null));
        } finally {
          ((ot = u), (H.p = a), (O.T = l));
        }
      }
      ((t.current = e), (qt = 2));
    }
  }
  function nd() {
    if (qt === 2) {
      qt = 0;
      var t = _l,
        e = Da,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        ((l = O.T), (O.T = null));
        var a = H.p;
        H.p = 2;
        var u = ot;
        ot |= 4;
        try {
          Ur(t, e.alternate, e);
        } finally {
          ((ot = u), (H.p = a), (O.T = l));
        }
      }
      qt = 3;
    }
  }
  function id() {
    if (qt === 4 || qt === 3) {
      ((qt = 0), qh());
      var t = _l,
        e = Da,
        l = tl,
        a = Jr;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ?
        (qt = 5)
      : ((qt = 0), (Da = _l = null), cd(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (
        (u === 0 && (El = null),
        _i(l),
        (e = e.stateNode),
        ue && typeof ue.onCommitFiberRoot == 'function')
      )
        try {
          ue.onCommitFiberRoot(Ga, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((e = O.T), (u = H.p), (H.p = 2), (O.T = null));
        try {
          for (var n = t.onRecoverableError, i = 0; i < a.length; i++) {
            var f = a[i];
            n(f.value, { componentStack: f.stack });
          }
        } finally {
          ((O.T = e), (H.p = u));
        }
      }
      ((tl & 3) !== 0 && Zn(),
        Be(t),
        (u = t.pendingLanes),
        (l & 261930) !== 0 && (u & 42) !== 0 ?
          t === lf ?
            Eu++
          : ((Eu = 0), (lf = t))
        : (Eu = 0),
        _u(0));
    }
  }
  function cd(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), lu(e)));
  }
  function Zn() {
    return (ud(), nd(), id(), fd());
  }
  function fd() {
    if (qt !== 5) return !1;
    var t = _l,
      e = tf;
    tf = 0;
    var l = _i(tl),
      a = O.T,
      u = H.p;
    try {
      ((H.p = 32 > l ? 32 : l), (O.T = null), (l = ef), (ef = null));
      var n = _l,
        i = tl;
      if (((qt = 0), (Da = _l = null), (tl = 0), (ot & 6) !== 0))
        throw Error(s(331));
      var f = ot;
      if (
        ((ot |= 4),
        Zr(n.current),
        Gr(n, n.current, i, l),
        (ot = f),
        _u(0, !1),
        ue && typeof ue.onPostCommitFiberRoot == 'function')
      )
        try {
          ue.onPostCommitFiberRoot(Ga, n);
        } catch {}
      return !0;
    } finally {
      ((H.p = u), (O.T = a), cd(t, e));
    }
  }
  function sd(t, e, l) {
    ((e = ge(l, e)),
      (e = jc(t.stateNode, e, 2)),
      (t = yl(t, e, 2)),
      t !== null && (Qa(t, 2), Be(t)));
  }
  function ht(t, e, l) {
    if (t.tag === 3) sd(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          sd(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' &&
              (El === null || !El.has(a)))
          ) {
            ((t = ge(l, t)),
              (l = or(2)),
              (a = yl(e, l, 2)),
              a !== null && (rr(l, a, e, t), Qa(a, 2), Be(a)));
            break;
          }
        }
        e = e.return;
      }
  }
  function nf(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new sy();
      var u = new Set();
      a.set(e, u);
    } else ((u = a.get(e)), u === void 0 && ((u = new Set()), a.set(e, u)));
    u.has(l) ||
      ((Fc = !0), u.add(l), (t = my.bind(null, t, e, l)), e.then(t, t));
  }
  function my(t, e, l) {
    var a = t.pingCache;
    (a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      St === t &&
        (nt & l) === l &&
        (Mt === 4 || (Mt === 3 && (nt & 62914560) === nt && 300 > ae() - qn) ?
          (ot & 2) === 0 && Na(t, 0)
        : (Ic |= l),
        xa === nt && (xa = 0)),
      Be(t));
  }
  function od(t, e) {
    (e === 0 && (e = as()), (t = Ll(t, e)), t !== null && (Qa(t, e), Be(t)));
  }
  function yy(t) {
    var e = t.memoizedState,
      l = 0;
    (e !== null && (l = e.retryLane), od(t, l));
  }
  function vy(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode,
          u = t.memoizedState;
        u !== null && (l = u.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    (a !== null && a.delete(e), od(t, l));
  }
  function gy(t, e) {
    return pi(t, e);
  }
  var Vn = null,
    Ua = null,
    cf = !1,
    Kn = !1,
    ff = !1,
    zl = 0;
  function Be(t) {
    (t !== Ua &&
      t.next === null &&
      (Ua === null ? (Vn = Ua = t) : (Ua = Ua.next = t)),
      (Kn = !0),
      cf || ((cf = !0), Sy()));
  }
  function _u(t, e) {
    if (!ff && Kn) {
      ff = !0;
      do
        for (var l = !1, a = Vn; a !== null; ) {
          if (t !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = a.suspendedLanes,
                f = a.pingedLanes;
              ((n = (1 << (31 - ne(42 | t) + 1)) - 1),
                (n &= u & ~(i & ~f)),
                (n =
                  n & 201326741 ? (n & 201326741) | 1
                  : n ? n | 2
                  : 0));
            }
            n !== 0 && ((l = !0), md(a, n));
          } else
            ((n = nt),
              (n = $u(
                a,
                a === St ? n : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (n & 3) === 0 || Xa(a, n) || ((l = !0), md(a, n)));
          a = a.next;
        }
      while (l);
      ff = !1;
    }
  }
  function py() {
    rd();
  }
  function rd() {
    Kn = cf = !1;
    var t = 0;
    zl !== 0 && xy() && (t = zl);
    for (var e = ae(), l = null, a = Vn; a !== null; ) {
      var u = a.next,
        n = dd(a, e);
      (n === 0 ?
        ((a.next = null),
        l === null ? (Vn = u) : (l.next = u),
        u === null && (Ua = l))
      : ((l = a), (t !== 0 || (n & 3) !== 0) && (Kn = !0)),
        (a = u));
    }
    ((qt !== 0 && qt !== 5) || _u(t), zl !== 0 && (zl = 0));
  }
  function dd(t, e) {
    for (
      var l = t.suspendedLanes,
        a = t.pingedLanes,
        u = t.expirationTimes,
        n = t.pendingLanes & -62914561;
      0 < n;
    ) {
      var i = 31 - ne(n),
        f = 1 << i,
        d = u[i];
      (d === -1 ?
        ((f & l) === 0 || (f & a) !== 0) && (u[i] = Kh(f, e))
      : d <= e && (t.expiredLanes |= f),
        (n &= ~f));
    }
    if (
      ((e = St),
      (l = nt),
      (l = $u(
        t,
        t === e ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (a = t.callbackNode),
      l === 0 ||
        (t === e && (dt === 2 || dt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Si(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Xa(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((a !== null && Si(a), _i(l))) {
        case 2:
        case 8:
          l = es;
          break;
        case 32:
          l = Vu;
          break;
        case 268435456:
          l = ls;
          break;
        default:
          l = Vu;
      }
      return (
        (a = hd.bind(null, t)),
        (l = pi(l, a)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      a !== null && a !== null && Si(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function hd(t, e) {
    if (qt !== 0 && qt !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var l = t.callbackNode;
    if (Zn() && t.callbackNode !== l) return null;
    var a = nt;
    return (
      (a = $u(
        t,
        t === St ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      a === 0 ? null : (
        ($r(t, a, e),
        dd(t, ae()),
        t.callbackNode != null && t.callbackNode === l ?
          hd.bind(null, t)
        : null)
      )
    );
  }
  function md(t, e) {
    if (Zn()) return null;
    $r(t, e, !0);
  }
  function Sy() {
    Ny(function () {
      (ot & 6) !== 0 ? pi(ts, py) : rd();
    });
  }
  function sf() {
    if (zl === 0) {
      var t = pa;
      (t === 0 && ((t = Ku), (Ku <<= 1), (Ku & 261888) === 0 && (Ku = 256)),
        (zl = t));
    }
    return zl;
  }
  function yd(t) {
    return (
      t == null || typeof t == 'symbol' || typeof t == 'boolean' ? null
      : typeof t == 'function' ? t
      : Iu('' + t)
    );
  }
  function vd(t, e) {
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
  function by(t, e, l, a, u) {
    if (e === 'submit' && l && l.stateNode === u) {
      var n = yd((u[kt] || null).action),
        i = a.submitter;
      i &&
        ((e =
          (e = i[kt] || null) ?
            yd(e.formAction)
          : i.getAttribute('formAction')),
        e !== null && ((n = e), (i = null)));
      var f = new ln('action', 'action', null, a, u);
      t.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (zl !== 0) {
                  var d = i ? vd(u, i) : new FormData(u);
                  Mc(
                    l,
                    { pending: !0, data: d, method: u.method, action: n },
                    null,
                    d,
                  );
                }
              } else
                typeof n == 'function' &&
                  (f.preventDefault(),
                  (d = i ? vd(u, i) : new FormData(u)),
                  Mc(
                    l,
                    { pending: !0, data: d, method: u.method, action: n },
                    n,
                    d,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var of = 0; of < Ki.length; of++) {
    var rf = Ki[of],
      Ey = rf.toLowerCase(),
      _y = rf[0].toUpperCase() + rf.slice(1);
    Me(Ey, 'on' + _y);
  }
  (Me(Js, 'onAnimationEnd'),
    Me(ws, 'onAnimationIteration'),
    Me($s, 'onAnimationStart'),
    Me('dblclick', 'onDoubleClick'),
    Me('focusin', 'onFocus'),
    Me('focusout', 'onBlur'),
    Me(Ym, 'onTransitionRun'),
    Me(Lm, 'onTransitionStart'),
    Me(Gm, 'onTransitionCancel'),
    Me(Ws, 'onTransitionEnd'),
    ua('onMouseEnter', ['mouseout', 'mouseover']),
    ua('onMouseLeave', ['mouseout', 'mouseover']),
    ua('onPointerEnter', ['pointerout', 'pointerover']),
    ua('onPointerLeave', ['pointerout', 'pointerover']),
    Hl(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' ',
      ),
    ),
    Hl(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    Hl('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Hl(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Hl(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Hl(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    ));
  var Tu =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    Ty = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'
        .split(' ')
        .concat(Tu),
    );
  function gd(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l],
        u = a.event;
      a = a.listeners;
      t: {
        var n = void 0;
        if (e)
          for (var i = a.length - 1; 0 <= i; i--) {
            var f = a[i],
              d = f.instance,
              _ = f.currentTarget;
            if (((f = f.listener), d !== n && u.isPropagationStopped()))
              break t;
            ((n = f), (u.currentTarget = _));
            try {
              n(u);
            } catch (R) {
              nn(R);
            }
            ((u.currentTarget = null), (n = d));
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((f = a[i]),
              (d = f.instance),
              (_ = f.currentTarget),
              (f = f.listener),
              d !== n && u.isPropagationStopped())
            )
              break t;
            ((n = f), (u.currentTarget = _));
            try {
              n(u);
            } catch (R) {
              nn(R);
            }
            ((u.currentTarget = null), (n = d));
          }
      }
    }
  }
  function ut(t, e) {
    var l = e[Ti];
    l === void 0 && (l = e[Ti] = new Set());
    var a = t + '__bubble';
    l.has(a) || (pd(e, t, 2, !1), l.add(a));
  }
  function df(t, e, l) {
    var a = 0;
    (e && (a |= 4), pd(l, t, a, e));
  }
  var Jn = '_reactListening' + Math.random().toString(36).slice(2);
  function hf(t) {
    if (!t[Jn]) {
      ((t[Jn] = !0),
        os.forEach(function (l) {
          l !== 'selectionchange' && (Ty.has(l) || df(l, !1, t), df(l, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Jn] || ((e[Jn] = !0), df('selectionchange', !1, e));
    }
  }
  function pd(t, e, l, a) {
    switch (wd(e)) {
      case 2:
        var u = Fy;
        break;
      case 8:
        u = Iy;
        break;
      default:
        u = Mf;
    }
    ((l = u.bind(null, e, l, t)),
      (u = void 0),
      !Ci ||
        (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') ||
        (u = !0),
      a ?
        u !== void 0 ?
          t.addEventListener(e, l, { capture: !0, passive: u })
        : t.addEventListener(e, l, !0)
      : u !== void 0 ? t.addEventListener(e, l, { passive: u })
      : t.addEventListener(e, l, !1));
  }
  function mf(t, e, l, a, u) {
    var n = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var f = a.stateNode.containerInfo;
          if (f === u) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var d = i.tag;
              if ((d === 3 || d === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; f !== null; ) {
            if (((i = ea(f)), i === null)) return;
            if (((d = i.tag), d === 5 || d === 6 || d === 26 || d === 27)) {
              a = n = i;
              continue t;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    _s(function () {
      var _ = n,
        R = Di(l),
        C = [];
      t: {
        var T = ks.get(t);
        if (T !== void 0) {
          var z = ln,
            Y = t;
          switch (t) {
            case 'keypress':
              if (tn(l) === 0) break t;
            case 'keydown':
            case 'keyup':
              z = vm;
              break;
            case 'focusin':
              ((Y = 'focus'), (z = Bi));
              break;
            case 'focusout':
              ((Y = 'blur'), (z = Bi));
              break;
            case 'beforeblur':
            case 'afterblur':
              z = Bi;
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
              z = As;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              z = um;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              z = Sm;
              break;
            case Js:
            case ws:
            case $s:
              z = cm;
              break;
            case Ws:
              z = Em;
              break;
            case 'scroll':
            case 'scrollend':
              z = lm;
              break;
            case 'wheel':
              z = Tm;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              z = sm;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              z = Os;
              break;
            case 'toggle':
            case 'beforetoggle':
              z = Am;
          }
          var w = (e & 4) !== 0,
            gt = !w && (t === 'scroll' || t === 'scrollend'),
            p =
              w ?
                T !== null ?
                  T + 'Capture'
                : null
              : T;
          w = [];
          for (var y = _, b; y !== null; ) {
            var D = y;
            if (
              ((b = D.stateNode),
              (D = D.tag),
              (D !== 5 && D !== 26 && D !== 27) ||
                b === null ||
                p === null ||
                ((D = Ka(y, p)), D != null && w.push(zu(y, D, b))),
              gt)
            )
              break;
            y = y.return;
          }
          0 < w.length &&
            ((T = new z(T, Y, null, l, R)), C.push({ event: T, listeners: w }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((T = t === 'mouseover' || t === 'pointerover'),
            (z = t === 'mouseout' || t === 'pointerout'),
            T &&
              l !== xi &&
              (Y = l.relatedTarget || l.fromElement) &&
              (ea(Y) || Y[ta]))
          )
            break t;
          if (
            (z || T) &&
            ((T =
              R.window === R ? R
              : (T = R.ownerDocument) ? T.defaultView || T.parentWindow
              : window),
            z ?
              ((Y = l.relatedTarget || l.toElement),
              (z = _),
              (Y = Y ? ea(Y) : null),
              Y !== null &&
                ((gt = m(Y)),
                (w = Y.tag),
                Y !== gt || (w !== 5 && w !== 27 && w !== 6)) &&
                (Y = null))
            : ((z = null), (Y = _)),
            z !== Y)
          ) {
            if (
              ((w = As),
              (D = 'onMouseLeave'),
              (p = 'onMouseEnter'),
              (y = 'mouse'),
              (t === 'pointerout' || t === 'pointerover') &&
                ((w = Os),
                (D = 'onPointerLeave'),
                (p = 'onPointerEnter'),
                (y = 'pointer')),
              (gt = z == null ? T : Va(z)),
              (b = Y == null ? T : Va(Y)),
              (T = new w(D, y + 'leave', z, l, R)),
              (T.target = gt),
              (T.relatedTarget = b),
              (D = null),
              ea(R) === _ &&
                ((w = new w(p, y + 'enter', Y, l, R)),
                (w.target = b),
                (w.relatedTarget = gt),
                (D = w)),
              (gt = D),
              z && Y)
            )
              e: {
                for (w = zy, p = z, y = Y, b = 0, D = p; D; D = w(D)) b++;
                D = 0;
                for (var K = y; K; K = w(K)) D++;
                for (; 0 < b - D; ) ((p = w(p)), b--);
                for (; 0 < D - b; ) ((y = w(y)), D--);
                for (; b--; ) {
                  if (p === y || (y !== null && p === y.alternate)) {
                    w = p;
                    break e;
                  }
                  ((p = w(p)), (y = w(y)));
                }
                w = null;
              }
            else w = null;
            (z !== null && Sd(C, T, z, w, !1),
              Y !== null && gt !== null && Sd(C, gt, Y, w, !0));
          }
        }
        t: {
          if (
            ((T = _ ? Va(_) : window),
            (z = T.nodeName && T.nodeName.toLowerCase()),
            z === 'select' || (z === 'input' && T.type === 'file'))
          )
            var ft = Hs;
          else if (Us(T))
            if (Bs) ft = Hm;
            else {
              ft = Um;
              var Q = Cm;
            }
          else
            ((z = T.nodeName),
              (
                !z ||
                z.toLowerCase() !== 'input' ||
                (T.type !== 'checkbox' && T.type !== 'radio')
              ) ?
                _ && Mi(_.elementType) && (ft = Hs)
              : (ft = jm));
          if (ft && (ft = ft(t, _))) {
            js(C, ft, l, R);
            break t;
          }
          (Q && Q(t, T, _),
            t === 'focusout' &&
              _ &&
              T.type === 'number' &&
              _.memoizedProps.value != null &&
              Oi(T, 'number', T.value));
        }
        switch (((Q = _ ? Va(_) : window), t)) {
          case 'focusin':
            (Us(Q) || Q.contentEditable === 'true') &&
              ((oa = Q), (Qi = _), (Pa = null));
            break;
          case 'focusout':
            Pa = Qi = oa = null;
            break;
          case 'mousedown':
            Zi = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Zi = !1), Vs(C, l, R));
            break;
          case 'selectionchange':
            if (qm) break;
          case 'keydown':
          case 'keyup':
            Vs(C, l, R);
        }
        var et;
        if (Yi)
          t: {
            switch (t) {
              case 'compositionstart':
                var it = 'onCompositionStart';
                break t;
              case 'compositionend':
                it = 'onCompositionEnd';
                break t;
              case 'compositionupdate':
                it = 'onCompositionUpdate';
                break t;
            }
            it = void 0;
          }
        else
          sa ?
            Ns(t, l) && (it = 'onCompositionEnd')
          : t === 'keydown' && l.keyCode === 229 && (it = 'onCompositionStart');
        (it &&
          (Ms &&
            l.locale !== 'ko' &&
            (sa || it !== 'onCompositionStart' ?
              it === 'onCompositionEnd' && sa && (et = Ts())
            : ((fl = R),
              (Ui = 'value' in fl ? fl.value : fl.textContent),
              (sa = !0))),
          (Q = wn(_, it)),
          0 < Q.length &&
            ((it = new Rs(it, t, null, l, R)),
            C.push({ event: it, listeners: Q }),
            et ?
              (it.data = et)
            : ((et = Cs(l)), et !== null && (it.data = et)))),
          (et = Om ? Mm(t, l) : xm(t, l)) &&
            ((it = wn(_, 'onBeforeInput')),
            0 < it.length &&
              ((Q = new Rs('onBeforeInput', 'beforeinput', null, l, R)),
              C.push({ event: Q, listeners: it }),
              (Q.data = et))),
          by(C, t, _, l, R));
      }
      gd(C, e);
    });
  }
  function zu(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function wn(t, e) {
    for (var l = e + 'Capture', a = []; t !== null; ) {
      var u = t,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = Ka(t, l)),
          u != null && a.unshift(zu(t, u, n)),
          (u = Ka(t, e)),
          u != null && a.push(zu(t, u, n))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function zy(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Sd(t, e, l, a, u) {
    for (var n = e._reactName, i = []; l !== null && l !== a; ) {
      var f = l,
        d = f.alternate,
        _ = f.stateNode;
      if (((f = f.tag), d !== null && d === a)) break;
      ((f !== 5 && f !== 26 && f !== 27) ||
        _ === null ||
        ((d = _),
        u ?
          ((_ = Ka(l, n)), _ != null && i.unshift(zu(l, _, d)))
        : u || ((_ = Ka(l, n)), _ != null && i.push(zu(l, _, d)))),
        (l = l.return));
    }
    i.length !== 0 && t.push({ event: e, listeners: i });
  }
  var Ay = /\r\n?/g,
    Ry = /\u0000|\uFFFD/g;
  function bd(t) {
    return (typeof t == 'string' ? t : '' + t)
      .replace(
        Ay,
        `
`,
      )
      .replace(Ry, '');
  }
  function Ed(t, e) {
    return ((e = bd(e)), bd(t) === e);
  }
  function vt(t, e, l, a, u, n) {
    switch (l) {
      case 'children':
        typeof a == 'string' ?
          e === 'body' || (e === 'textarea' && a === '') || ia(t, a)
        : (typeof a == 'number' || typeof a == 'bigint') &&
          e !== 'body' &&
          ia(t, '' + a);
        break;
      case 'className':
        ku(t, 'class', a);
        break;
      case 'tabIndex':
        ku(t, 'tabindex', a);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        ku(t, l, a);
        break;
      case 'style':
        bs(t, a, n);
        break;
      case 'data':
        if (e !== 'object') {
          ku(t, 'data', a);
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
        ((a = Iu('' + a)), t.setAttribute(l, a));
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
          typeof n == 'function' &&
            (l === 'formAction' ?
              (e !== 'input' && vt(t, e, 'name', u.name, u, null),
              vt(t, e, 'formEncType', u.formEncType, u, null),
              vt(t, e, 'formMethod', u.formMethod, u, null),
              vt(t, e, 'formTarget', u.formTarget, u, null))
            : (vt(t, e, 'encType', u.encType, u, null),
              vt(t, e, 'method', u.method, u, null),
              vt(t, e, 'target', u.target, u, null)));
        if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
          t.removeAttribute(l);
          break;
        }
        ((a = Iu('' + a)), t.setAttribute(l, a));
        break;
      case 'onClick':
        a != null && (t.onclick = Le);
        break;
      case 'onScroll':
        a != null && ut('scroll', t);
        break;
      case 'onScrollEnd':
        a != null && ut('scrollend', t);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(s(61));
          if (((l = a.__html), l != null)) {
            if (u.children != null) throw Error(s(60));
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
        ((l = Iu('' + a)),
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
        (ut('beforetoggle', t), ut('toggle', t), Wu(t, 'popover', a));
        break;
      case 'xlinkActuate':
        Ye(t, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
        break;
      case 'xlinkArcrole':
        Ye(t, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
        break;
      case 'xlinkRole':
        Ye(t, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
        break;
      case 'xlinkShow':
        Ye(t, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
        break;
      case 'xlinkTitle':
        Ye(t, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
        break;
      case 'xlinkType':
        Ye(t, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
        break;
      case 'xmlBase':
        Ye(t, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
        break;
      case 'xmlLang':
        Ye(t, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
        break;
      case 'xmlSpace':
        Ye(t, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
        break;
      case 'is':
        Wu(t, 'is', a);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== 'o' && l[0] !== 'O') ||
          (l[1] !== 'n' && l[1] !== 'N')) &&
          ((l = tm.get(l) || l), Wu(t, l, a));
    }
  }
  function yf(t, e, l, a, u, n) {
    switch (l) {
      case 'style':
        bs(t, a, n);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(s(61));
          if (((l = a.__html), l != null)) {
            if (u.children != null) throw Error(s(60));
            t.innerHTML = l;
          }
        }
        break;
      case 'children':
        typeof a == 'string' ?
          ia(t, a)
        : (typeof a == 'number' || typeof a == 'bigint') && ia(t, '' + a);
        break;
      case 'onScroll':
        a != null && ut('scroll', t);
        break;
      case 'onScrollEnd':
        a != null && ut('scrollend', t);
        break;
      case 'onClick':
        a != null && (t.onclick = Le);
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
        if (!rs.hasOwnProperty(l))
          t: {
            if (
              l[0] === 'o' &&
              l[1] === 'n' &&
              ((u = l.endsWith('Capture')),
              (e = l.slice(2, u ? l.length - 7 : void 0)),
              (n = t[kt] || null),
              (n = n != null ? n[l] : null),
              typeof n == 'function' && t.removeEventListener(e, n, u),
              typeof a == 'function')
            ) {
              (typeof n != 'function' &&
                n !== null &&
                (l in t ?
                  (t[l] = null)
                : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, a, u));
              break t;
            }
            l in t ? (t[l] = a)
            : a === !0 ? t.setAttribute(l, '')
            : Wu(t, l, a);
          }
    }
  }
  function Kt(t, e, l) {
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
          u = !1,
          n;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var i = l[n];
            if (i != null)
              switch (n) {
                case 'src':
                  a = !0;
                  break;
                case 'srcSet':
                  u = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(s(137, e));
                default:
                  vt(t, e, n, i, l, null);
              }
          }
        (u && vt(t, e, 'srcSet', l.srcSet, l, null),
          a && vt(t, e, 'src', l.src, l, null));
        return;
      case 'input':
        ut('invalid', t);
        var f = (n = i = u = null),
          d = null,
          _ = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var R = l[a];
            if (R != null)
              switch (a) {
                case 'name':
                  u = R;
                  break;
                case 'type':
                  i = R;
                  break;
                case 'checked':
                  d = R;
                  break;
                case 'defaultChecked':
                  _ = R;
                  break;
                case 'value':
                  n = R;
                  break;
                case 'defaultValue':
                  f = R;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (R != null) throw Error(s(137, e));
                  break;
                default:
                  vt(t, e, a, R, l, null);
              }
          }
        vs(t, n, f, d, _, i, u, !1);
        return;
      case 'select':
        (ut('invalid', t), (a = i = n = null));
        for (u in l)
          if (l.hasOwnProperty(u) && ((f = l[u]), f != null))
            switch (u) {
              case 'value':
                n = f;
                break;
              case 'defaultValue':
                i = f;
                break;
              case 'multiple':
                a = f;
              default:
                vt(t, e, u, f, l, null);
            }
        ((e = n),
          (l = i),
          (t.multiple = !!a),
          e != null ? na(t, !!a, e, !1) : l != null && na(t, !!a, l, !0));
        return;
      case 'textarea':
        (ut('invalid', t), (n = u = a = null));
        for (i in l)
          if (l.hasOwnProperty(i) && ((f = l[i]), f != null))
            switch (i) {
              case 'value':
                a = f;
                break;
              case 'defaultValue':
                u = f;
                break;
              case 'children':
                n = f;
                break;
              case 'dangerouslySetInnerHTML':
                if (f != null) throw Error(s(91));
                break;
              default:
                vt(t, e, i, f, l, null);
            }
        ps(t, a, u, n);
        return;
      case 'option':
        for (d in l)
          l.hasOwnProperty(d) &&
            ((a = l[d]), a != null) &&
            (d === 'selected' ?
              (t.selected = a && typeof a != 'function' && typeof a != 'symbol')
            : vt(t, e, d, a, l, null));
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
        for (a = 0; a < Tu.length; a++) ut(Tu[a], t);
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
        for (_ in l)
          if (l.hasOwnProperty(_) && ((a = l[_]), a != null))
            switch (_) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(s(137, e));
              default:
                vt(t, e, _, a, l, null);
            }
        return;
      default:
        if (Mi(e)) {
          for (R in l)
            l.hasOwnProperty(R) &&
              ((a = l[R]), a !== void 0 && yf(t, e, R, a, l, void 0));
          return;
        }
    }
    for (f in l)
      l.hasOwnProperty(f) && ((a = l[f]), a != null && vt(t, e, f, a, l, null));
  }
  function Oy(t, e, l, a) {
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
        var u = null,
          n = null,
          i = null,
          f = null,
          d = null,
          _ = null,
          R = null;
        for (z in l) {
          var C = l[z];
          if (l.hasOwnProperty(z) && C != null)
            switch (z) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                d = C;
              default:
                a.hasOwnProperty(z) || vt(t, e, z, null, a, C);
            }
        }
        for (var T in a) {
          var z = a[T];
          if (((C = l[T]), a.hasOwnProperty(T) && (z != null || C != null)))
            switch (T) {
              case 'type':
                n = z;
                break;
              case 'name':
                u = z;
                break;
              case 'checked':
                _ = z;
                break;
              case 'defaultChecked':
                R = z;
                break;
              case 'value':
                i = z;
                break;
              case 'defaultValue':
                f = z;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (z != null) throw Error(s(137, e));
                break;
              default:
                z !== C && vt(t, e, T, z, a, C);
            }
        }
        Ri(t, i, f, d, _, R, n, u);
        return;
      case 'select':
        z = i = f = T = null;
        for (n in l)
          if (((d = l[n]), l.hasOwnProperty(n) && d != null))
            switch (n) {
              case 'value':
                break;
              case 'multiple':
                z = d;
              default:
                a.hasOwnProperty(n) || vt(t, e, n, null, a, d);
            }
        for (u in a)
          if (
            ((n = a[u]),
            (d = l[u]),
            a.hasOwnProperty(u) && (n != null || d != null))
          )
            switch (u) {
              case 'value':
                T = n;
                break;
              case 'defaultValue':
                f = n;
                break;
              case 'multiple':
                i = n;
              default:
                n !== d && vt(t, e, u, n, a, d);
            }
        ((e = f),
          (l = i),
          (a = z),
          T != null ?
            na(t, !!l, T, !1)
          : !!a != !!l &&
            (e != null ? na(t, !!l, e, !0) : na(t, !!l, l ? [] : '', !1)));
        return;
      case 'textarea':
        z = T = null;
        for (f in l)
          if (
            ((u = l[f]),
            l.hasOwnProperty(f) && u != null && !a.hasOwnProperty(f))
          )
            switch (f) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                vt(t, e, f, null, a, u);
            }
        for (i in a)
          if (
            ((u = a[i]),
            (n = l[i]),
            a.hasOwnProperty(i) && (u != null || n != null))
          )
            switch (i) {
              case 'value':
                T = u;
                break;
              case 'defaultValue':
                z = u;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (u != null) throw Error(s(91));
                break;
              default:
                u !== n && vt(t, e, i, u, a, n);
            }
        gs(t, T, z);
        return;
      case 'option':
        for (var Y in l)
          ((T = l[Y]),
            l.hasOwnProperty(Y) &&
              T != null &&
              !a.hasOwnProperty(Y) &&
              (Y === 'selected' ? (t.selected = !1) : vt(t, e, Y, null, a, T)));
        for (d in a)
          ((T = a[d]),
            (z = l[d]),
            a.hasOwnProperty(d) &&
              T !== z &&
              (T != null || z != null) &&
              (d === 'selected' ?
                (t.selected =
                  T && typeof T != 'function' && typeof T != 'symbol')
              : vt(t, e, d, T, a, z)));
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
        for (var w in l)
          ((T = l[w]),
            l.hasOwnProperty(w) &&
              T != null &&
              !a.hasOwnProperty(w) &&
              vt(t, e, w, null, a, T));
        for (_ in a)
          if (
            ((T = a[_]),
            (z = l[_]),
            a.hasOwnProperty(_) && T !== z && (T != null || z != null))
          )
            switch (_) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (T != null) throw Error(s(137, e));
                break;
              default:
                vt(t, e, _, T, a, z);
            }
        return;
      default:
        if (Mi(e)) {
          for (var gt in l)
            ((T = l[gt]),
              l.hasOwnProperty(gt) &&
                T !== void 0 &&
                !a.hasOwnProperty(gt) &&
                yf(t, e, gt, void 0, a, T));
          for (R in a)
            ((T = a[R]),
              (z = l[R]),
              !a.hasOwnProperty(R) ||
                T === z ||
                (T === void 0 && z === void 0) ||
                yf(t, e, R, T, a, z));
          return;
        }
    }
    for (var p in l)
      ((T = l[p]),
        l.hasOwnProperty(p) &&
          T != null &&
          !a.hasOwnProperty(p) &&
          vt(t, e, p, null, a, T));
    for (C in a)
      ((T = a[C]),
        (z = l[C]),
        !a.hasOwnProperty(C) ||
          T === z ||
          (T == null && z == null) ||
          vt(t, e, C, T, a, z));
  }
  function _d(t) {
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
  function My() {
    if (typeof performance.getEntriesByType == 'function') {
      for (
        var t = 0, e = 0, l = performance.getEntriesByType('resource'), a = 0;
        a < l.length;
        a++
      ) {
        var u = l[a],
          n = u.transferSize,
          i = u.initiatorType,
          f = u.duration;
        if (n && f && _d(i)) {
          for (i = 0, f = u.responseEnd, a += 1; a < l.length; a++) {
            var d = l[a],
              _ = d.startTime;
            if (_ > f) break;
            var R = d.transferSize,
              C = d.initiatorType;
            R &&
              _d(C) &&
              ((d = d.responseEnd), (i += R * (d < f ? 1 : (f - _) / (d - _))));
          }
          if ((--a, (e += (8 * (n + i)) / (u.duration / 1e3)), t++, 10 < t))
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
  var vf = null,
    gf = null;
  function $n(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Td(t) {
    switch (t) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function zd(t, e) {
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
  function pf(t, e) {
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
  var Sf = null;
  function xy() {
    var t = window.event;
    return (
      t && t.type === 'popstate' ?
        t === Sf ?
          !1
        : ((Sf = t), !0)
      : ((Sf = null), !1)
    );
  }
  var Ad = typeof setTimeout == 'function' ? setTimeout : void 0,
    Dy = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Rd = typeof Promise == 'function' ? Promise : void 0,
    Ny =
      typeof queueMicrotask == 'function' ? queueMicrotask
      : typeof Rd < 'u' ?
        function (t) {
          return Rd.resolve(null).then(t).catch(Cy);
        }
      : Ad;
  function Cy(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Al(t) {
    return t === 'head';
  }
  function Od(t, e) {
    var l = e,
      a = 0;
    do {
      var u = l.nextSibling;
      if ((t.removeChild(l), u && u.nodeType === 8))
        if (((l = u.data), l === '/$' || l === '/&')) {
          if (a === 0) {
            (t.removeChild(u), qa(e));
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
        else if (l === 'html') Au(t.ownerDocument.documentElement);
        else if (l === 'head') {
          ((l = t.ownerDocument.head), Au(l));
          for (var n = l.firstChild; n; ) {
            var i = n.nextSibling,
              f = n.nodeName;
            (n[Za] ||
              f === 'SCRIPT' ||
              f === 'STYLE' ||
              (f === 'LINK' && n.rel.toLowerCase() === 'stylesheet') ||
              l.removeChild(n),
              (n = i));
          }
        } else l === 'body' && Au(t.ownerDocument.body);
      l = u;
    } while (l);
    qa(e);
  }
  function Md(t, e) {
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
  function bf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (bf(l), zi(l));
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
  function Uy(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var u = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== 'INPUT' || t.type !== 'hidden')) break;
      } else if (a) {
        if (!t[Za])
          switch (e) {
            case 'meta':
              if (!t.hasAttribute('itemprop')) break;
              return t;
            case 'link':
              if (
                ((n = t.getAttribute('rel')),
                n === 'stylesheet' && t.hasAttribute('data-precedence'))
              )
                break;
              if (
                n !== u.rel ||
                t.getAttribute('href') !==
                  (u.href == null || u.href === '' ? null : u.href) ||
                t.getAttribute('crossorigin') !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                t.getAttribute('title') !== (u.title == null ? null : u.title)
              )
                break;
              return t;
            case 'style':
              if (t.hasAttribute('data-precedence')) break;
              return t;
            case 'script':
              if (
                ((n = t.getAttribute('src')),
                (n !== (u.src == null ? null : u.src) ||
                  t.getAttribute('type') !== (u.type == null ? null : u.type) ||
                  t.getAttribute('crossorigin') !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  t.hasAttribute('async') &&
                  !t.hasAttribute('itemprop'))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === 'input' && t.type === 'hidden') {
        var n = u.name == null ? null : '' + u.name;
        if (u.type === 'hidden' && t.getAttribute('name') === n) return t;
      } else return t;
      if (((t = _e(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function jy(t, e, l) {
    if (e === '') return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') &&
          !l) ||
        ((t = _e(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function xd(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') &&
          !e) ||
        ((t = _e(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Ef(t) {
    return t.data === '$?' || t.data === '$~';
  }
  function _f(t) {
    return (
      t.data === '$!' ||
      (t.data === '$?' && t.ownerDocument.readyState !== 'loading')
    );
  }
  function Hy(t, e) {
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
  function _e(t) {
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
  var Tf = null;
  function Dd(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === '/$' || l === '/&') {
          if (e === 0) return _e(t.nextSibling);
          e--;
        } else
          (l !== '$' && l !== '$!' && l !== '$?' && l !== '$~' && l !== '&') ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Nd(t) {
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
  function Cd(t, e, l) {
    switch (((e = $n(l)), t)) {
      case 'html':
        if (((t = e.documentElement), !t)) throw Error(s(452));
        return t;
      case 'head':
        if (((t = e.head), !t)) throw Error(s(453));
        return t;
      case 'body':
        if (((t = e.body), !t)) throw Error(s(454));
        return t;
      default:
        throw Error(s(451));
    }
  }
  function Au(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    zi(t);
  }
  var Te = new Map(),
    Ud = new Set();
  function Wn(t) {
    return (
      typeof t.getRootNode == 'function' ? t.getRootNode()
      : t.nodeType === 9 ? t
      : t.ownerDocument
    );
  }
  var el = H.d;
  H.d = { f: By, r: qy, D: Yy, C: Ly, L: Gy, m: Xy, X: Zy, S: Qy, M: Vy };
  function By() {
    var t = el.f(),
      e = Gn();
    return t || e;
  }
  function qy(t) {
    var e = la(t);
    e !== null && e.tag === 5 && e.type === 'form' ? ko(e) : el.r(t);
  }
  var ja = typeof document > 'u' ? null : document;
  function jd(t, e, l) {
    var a = ja;
    if (a && typeof e == 'string' && e) {
      var u = ye(e);
      ((u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof l == 'string' && (u += '[crossorigin="' + l + '"]'),
        Ud.has(u) ||
          (Ud.add(u),
          (t = { rel: t, crossOrigin: l, href: e }),
          a.querySelector(u) === null &&
            ((e = a.createElement('link')),
            Kt(e, 'link', t),
            Yt(e),
            a.head.appendChild(e))));
    }
  }
  function Yy(t) {
    (el.D(t), jd('dns-prefetch', t, null));
  }
  function Ly(t, e) {
    (el.C(t, e), jd('preconnect', t, e));
  }
  function Gy(t, e, l) {
    el.L(t, e, l);
    var a = ja;
    if (a && t && e) {
      var u = 'link[rel="preload"][as="' + ye(e) + '"]';
      e === 'image' && l && l.imageSrcSet ?
        ((u += '[imagesrcset="' + ye(l.imageSrcSet) + '"]'),
        typeof l.imageSizes == 'string' &&
          (u += '[imagesizes="' + ye(l.imageSizes) + '"]'))
      : (u += '[href="' + ye(t) + '"]');
      var n = u;
      switch (e) {
        case 'style':
          n = Ha(t);
          break;
        case 'script':
          n = Ba(t);
      }
      Te.has(n) ||
        ((t = A(
          {
            rel: 'preload',
            href: e === 'image' && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l,
        )),
        Te.set(n, t),
        a.querySelector(u) !== null ||
          (e === 'style' && a.querySelector(Ru(n))) ||
          (e === 'script' && a.querySelector(Ou(n))) ||
          ((e = a.createElement('link')),
          Kt(e, 'link', t),
          Yt(e),
          a.head.appendChild(e)));
    }
  }
  function Xy(t, e) {
    el.m(t, e);
    var l = ja;
    if (l && t) {
      var a = e && typeof e.as == 'string' ? e.as : 'script',
        u =
          'link[rel="modulepreload"][as="' + ye(a) + '"][href="' + ye(t) + '"]',
        n = u;
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          n = Ba(t);
      }
      if (
        !Te.has(n) &&
        ((t = A({ rel: 'modulepreload', href: t }, e)),
        Te.set(n, t),
        l.querySelector(u) === null)
      ) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (l.querySelector(Ou(n))) return;
        }
        ((a = l.createElement('link')),
          Kt(a, 'link', t),
          Yt(a),
          l.head.appendChild(a));
      }
    }
  }
  function Qy(t, e, l) {
    el.S(t, e, l);
    var a = ja;
    if (a && t) {
      var u = aa(a).hoistableStyles,
        n = Ha(t);
      e = e || 'default';
      var i = u.get(n);
      if (!i) {
        var f = { loading: 0, preload: null };
        if ((i = a.querySelector(Ru(n)))) f.loading = 5;
        else {
          ((t = A({ 'rel': 'stylesheet', 'href': t, 'data-precedence': e }, l)),
            (l = Te.get(n)) && zf(t, l));
          var d = (i = a.createElement('link'));
          (Yt(d),
            Kt(d, 'link', t),
            (d._p = new Promise(function (_, R) {
              ((d.onload = _), (d.onerror = R));
            })),
            d.addEventListener('load', function () {
              f.loading |= 1;
            }),
            d.addEventListener('error', function () {
              f.loading |= 2;
            }),
            (f.loading |= 4),
            kn(i, e, a));
        }
        ((i = { type: 'stylesheet', instance: i, count: 1, state: f }),
          u.set(n, i));
      }
    }
  }
  function Zy(t, e) {
    el.X(t, e);
    var l = ja;
    if (l && t) {
      var a = aa(l).hoistableScripts,
        u = Ba(t),
        n = a.get(u);
      n ||
        ((n = l.querySelector(Ou(u))),
        n ||
          ((t = A({ src: t, async: !0 }, e)),
          (e = Te.get(u)) && Af(t, e),
          (n = l.createElement('script')),
          Yt(n),
          Kt(n, 'link', t),
          l.head.appendChild(n)),
        (n = { type: 'script', instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function Vy(t, e) {
    el.M(t, e);
    var l = ja;
    if (l && t) {
      var a = aa(l).hoistableScripts,
        u = Ba(t),
        n = a.get(u);
      n ||
        ((n = l.querySelector(Ou(u))),
        n ||
          ((t = A({ src: t, async: !0, type: 'module' }, e)),
          (e = Te.get(u)) && Af(t, e),
          (n = l.createElement('script')),
          Yt(n),
          Kt(n, 'link', t),
          l.head.appendChild(n)),
        (n = { type: 'script', instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function Hd(t, e, l, a) {
    var u = (u = lt.current) ? Wn(u) : null;
    if (!u) throw Error(s(446));
    switch (t) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof l.precedence == 'string' && typeof l.href == 'string' ?
            ((e = Ha(l.href)),
            (l = aa(u).hoistableStyles),
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
          t = Ha(l.href);
          var n = aa(u).hoistableStyles,
            i = n.get(t);
          if (
            (i ||
              ((u = u.ownerDocument || u),
              (i = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(t, i),
              (n = u.querySelector(Ru(t))) &&
                !n._p &&
                ((i.instance = n), (i.state.loading = 5)),
              Te.has(t) ||
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
                Te.set(t, l),
                n || Ky(u, t, l, i.state))),
            e && a === null)
          )
            throw Error(s(528, ''));
          return i;
        }
        if (e && a !== null) throw Error(s(529, ''));
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
            ((e = Ba(l)),
            (l = aa(u).hoistableScripts),
            (a = l.get(e)),
            a ||
              ((a = { type: 'script', instance: null, count: 0, state: null }),
              l.set(e, a)),
            a)
          : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, t));
    }
  }
  function Ha(t) {
    return 'href="' + ye(t) + '"';
  }
  function Ru(t) {
    return 'link[rel="stylesheet"][' + t + ']';
  }
  function Bd(t) {
    return A({}, t, { 'data-precedence': t.precedence, 'precedence': null });
  }
  function Ky(t, e, l, a) {
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
      Kt(e, 'link', l),
      Yt(e),
      t.head.appendChild(e));
  }
  function Ba(t) {
    return '[src="' + ye(t) + '"]';
  }
  function Ou(t) {
    return 'script[async]' + t;
  }
  function qd(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case 'style':
          var a = t.querySelector('style[data-href~="' + ye(l.href) + '"]');
          if (a) return ((e.instance = a), Yt(a), a);
          var u = A({}, l, {
            'data-href': l.href,
            'data-precedence': l.precedence,
            'href': null,
            'precedence': null,
          });
          return (
            (a = (t.ownerDocument || t).createElement('style')),
            Yt(a),
            Kt(a, 'style', u),
            kn(a, l.precedence, t),
            (e.instance = a)
          );
        case 'stylesheet':
          u = Ha(l.href);
          var n = t.querySelector(Ru(u));
          if (n) return ((e.state.loading |= 4), (e.instance = n), Yt(n), n);
          ((a = Bd(l)),
            (u = Te.get(u)) && zf(a, u),
            (n = (t.ownerDocument || t).createElement('link')),
            Yt(n));
          var i = n;
          return (
            (i._p = new Promise(function (f, d) {
              ((i.onload = f), (i.onerror = d));
            })),
            Kt(n, 'link', a),
            (e.state.loading |= 4),
            kn(n, l.precedence, t),
            (e.instance = n)
          );
        case 'script':
          return (
            (n = Ba(l.src)),
            (u = t.querySelector(Ou(n))) ?
              ((e.instance = u), Yt(u), u)
            : ((a = l),
              (u = Te.get(n)) && ((a = A({}, l)), Af(a, u)),
              (t = t.ownerDocument || t),
              (u = t.createElement('script')),
              Yt(u),
              Kt(u, 'link', a),
              t.head.appendChild(u),
              (e.instance = u))
          );
        case 'void':
          return null;
        default:
          throw Error(s(443, e.type));
      }
    else
      e.type === 'stylesheet' &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), kn(a, l.precedence, t));
    return e.instance;
  }
  function kn(t, e, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = a.length ? a[a.length - 1] : null,
        n = u,
        i = 0;
      i < a.length;
      i++
    ) {
      var f = a[i];
      if (f.dataset.precedence === e) n = f;
      else if (n !== u) break;
    }
    n ?
      n.parentNode.insertBefore(t, n.nextSibling)
    : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function zf(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Af(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var Fn = null;
  function Yd(t, e, l) {
    if (Fn === null) {
      var a = new Map(),
        u = (Fn = new Map());
      u.set(l, a);
    } else ((u = Fn), (a = u.get(l)), a || ((a = new Map()), u.set(l, a)));
    if (a.has(t)) return a;
    for (
      a.set(t, null), l = l.getElementsByTagName(t), u = 0;
      u < l.length;
      u++
    ) {
      var n = l[u];
      if (
        !(
          n[Za] ||
          n[Xt] ||
          (t === 'link' && n.getAttribute('rel') === 'stylesheet')
        ) &&
        n.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var i = n.getAttribute(e) || '';
        i = t + i;
        var f = a.get(i);
        f ? f.push(n) : a.set(i, [n]);
      }
    }
    return a;
  }
  function Ld(t, e, l) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === 'title' ? t.querySelector('head > title') : null,
      ));
  }
  function Jy(t, e, l) {
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
  function Gd(t) {
    return !(t.type === 'stylesheet' && (t.state.loading & 3) === 0);
  }
  function wy(t, e, l, a) {
    if (
      l.type === 'stylesheet' &&
      (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var u = Ha(a.href),
          n = e.querySelector(Ru(u));
        if (n) {
          ((e = n._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (t.count++, (t = In.bind(t)), e.then(t, t)),
            (l.state.loading |= 4),
            (l.instance = n),
            Yt(n));
          return;
        }
        ((n = e.ownerDocument || e),
          (a = Bd(a)),
          (u = Te.get(u)) && zf(a, u),
          (n = n.createElement('link')),
          Yt(n));
        var i = n;
        ((i._p = new Promise(function (f, d) {
          ((i.onload = f), (i.onerror = d));
        })),
          Kt(n, 'link', a),
          (l.instance = n));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(l, e),
        (e = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (t.count++,
          (l = In.bind(t)),
          e.addEventListener('load', l),
          e.addEventListener('error', l)));
    }
  }
  var Rf = 0;
  function $y(t, e) {
    return (
      t.stylesheets && t.count === 0 && ti(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount ?
        function (l) {
          var a = setTimeout(function () {
            if ((t.stylesheets && ti(t, t.stylesheets), t.unsuspend)) {
              var n = t.unsuspend;
              ((t.unsuspend = null), n());
            }
          }, 6e4 + e);
          0 < t.imgBytes && Rf === 0 && (Rf = 62500 * My());
          var u = setTimeout(
            function () {
              if (
                ((t.waitingForImages = !1),
                t.count === 0 &&
                  (t.stylesheets && ti(t, t.stylesheets), t.unsuspend))
              ) {
                var n = t.unsuspend;
                ((t.unsuspend = null), n());
              }
            },
            (t.imgBytes > Rf ? 50 : 800) + e,
          );
          return (
            (t.unsuspend = l),
            function () {
              ((t.unsuspend = null), clearTimeout(a), clearTimeout(u));
            }
          );
        }
      : null
    );
  }
  function In() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) ti(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var Pn = null;
  function ti(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Pn = new Map()),
        e.forEach(Wy, t),
        (Pn = null),
        In.call(t)));
  }
  function Wy(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Pn.get(t);
      if (l) var a = l.get(null);
      else {
        ((l = new Map()), Pn.set(t, l));
        for (
          var u = t.querySelectorAll(
              'link[data-precedence],style[data-precedence]',
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var i = u[n];
          (i.nodeName === 'LINK' || i.getAttribute('media') !== 'not all') &&
            (l.set(i.dataset.precedence, i), (a = i));
        }
        a && l.set(null, a);
      }
      ((u = e.instance),
        (i = u.getAttribute('data-precedence')),
        (n = l.get(i) || a),
        n === a && l.set(null, u),
        l.set(i, u),
        this.count++,
        (a = In.bind(this)),
        u.addEventListener('load', a),
        u.addEventListener('error', a),
        n ?
          n.parentNode.insertBefore(u, n.nextSibling)
        : ((t = t.nodeType === 9 ? t.head : t),
          t.insertBefore(u, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var Mu = {
    $$typeof: $,
    Provider: null,
    Consumer: null,
    _currentValue: W,
    _currentValue2: W,
    _threadCount: 0,
  };
  function ky(t, e, l, a, u, n, i, f, d) {
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
      (this.expirationTimes = bi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = bi(0)),
      (this.hiddenUpdates = bi(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = d),
      (this.incompleteTransitions = new Map()));
  }
  function Xd(t, e, l, a, u, n, i, f, d, _, R, C) {
    return (
      (t = new ky(t, e, l, i, d, _, R, C, f)),
      (e = 1),
      n === !0 && (e |= 24),
      (n = ce(3, null, null, e)),
      (t.current = n),
      (n.stateNode = t),
      (e = uc()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (n.memoizedState = { element: a, isDehydrated: l, cache: e }),
      fc(n),
      t
    );
  }
  function Qd(t) {
    return t ? ((t = ha), t) : ha;
  }
  function Zd(t, e, l, a, u, n) {
    ((u = Qd(u)),
      a.context === null ? (a.context = u) : (a.pendingContext = u),
      (a = ml(e)),
      (a.payload = { element: l }),
      (n = n === void 0 ? null : n),
      n !== null && (a.callback = n),
      (l = yl(t, a, e)),
      l !== null && (le(l, t, e), iu(l, t, e)));
  }
  function Vd(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Of(t, e) {
    (Vd(t, e), (t = t.alternate) && Vd(t, e));
  }
  function Kd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ll(t, 67108864);
      (e !== null && le(e, t, 67108864), Of(t, 67108864));
    }
  }
  function Jd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = de();
      e = Ei(e);
      var l = Ll(t, e);
      (l !== null && le(l, t, e), Of(t, e));
    }
  }
  var ei = !0;
  function Fy(t, e, l, a) {
    var u = O.T;
    O.T = null;
    var n = H.p;
    try {
      ((H.p = 2), Mf(t, e, l, a));
    } finally {
      ((H.p = n), (O.T = u));
    }
  }
  function Iy(t, e, l, a) {
    var u = O.T;
    O.T = null;
    var n = H.p;
    try {
      ((H.p = 8), Mf(t, e, l, a));
    } finally {
      ((H.p = n), (O.T = u));
    }
  }
  function Mf(t, e, l, a) {
    if (ei) {
      var u = xf(a);
      if (u === null) (mf(t, e, a, li, l), $d(t, a));
      else if (tv(u, t, e, l, a)) a.stopPropagation();
      else if (($d(t, a), e & 4 && -1 < Py.indexOf(t))) {
        for (; u !== null; ) {
          var n = la(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = jl(n.pendingLanes);
                  if (i !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; i; ) {
                      var d = 1 << (31 - ne(i));
                      ((f.entanglements[1] |= d), (i &= ~d));
                    }
                    (Be(n), (ot & 6) === 0 && ((Yn = ae() + 500), _u(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((f = Ll(n, 2)), f !== null && le(f, n, 2), Gn(), Of(n, 2));
            }
          if (((n = xf(a)), n === null && mf(t, e, a, li, l), n === u)) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else mf(t, e, a, null, l);
    }
  }
  function xf(t) {
    return ((t = Di(t)), Df(t));
  }
  var li = null;
  function Df(t) {
    if (((li = null), (t = ea(t)), t !== null)) {
      var e = m(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = S(e)), t !== null)) return t;
          t = null;
        } else if (l === 31) {
          if (((t = x(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((li = t), null);
  }
  function wd(t) {
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
        switch (Yh()) {
          case ts:
            return 2;
          case es:
            return 8;
          case Vu:
          case Lh:
            return 32;
          case ls:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Nf = !1,
    Rl = null,
    Ol = null,
    Ml = null,
    xu = new Map(),
    Du = new Map(),
    xl = [],
    Py =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      );
  function $d(t, e) {
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
        xu.delete(e.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Du.delete(e.pointerId);
    }
  }
  function Nu(t, e, l, a, u, n) {
    return t === null || t.nativeEvent !== n ?
        ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: n,
          targetContainers: [u],
        }),
        e !== null && ((e = la(e)), e !== null && Kd(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        u !== null && e.indexOf(u) === -1 && e.push(u),
        t);
  }
  function tv(t, e, l, a, u) {
    switch (e) {
      case 'focusin':
        return ((Rl = Nu(Rl, t, e, l, a, u)), !0);
      case 'dragenter':
        return ((Ol = Nu(Ol, t, e, l, a, u)), !0);
      case 'mouseover':
        return ((Ml = Nu(Ml, t, e, l, a, u)), !0);
      case 'pointerover':
        var n = u.pointerId;
        return (xu.set(n, Nu(xu.get(n) || null, t, e, l, a, u)), !0);
      case 'gotpointercapture':
        return (
          (n = u.pointerId),
          Du.set(n, Nu(Du.get(n) || null, t, e, l, a, u)),
          !0
        );
    }
    return !1;
  }
  function Wd(t) {
    var e = ea(t.target);
    if (e !== null) {
      var l = m(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = S(l)), e !== null)) {
            ((t.blockedOn = e),
              fs(t.priority, function () {
                Jd(l);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = x(l)), e !== null)) {
            ((t.blockedOn = e),
              fs(t.priority, function () {
                Jd(l);
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
  function ai(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = xf(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        ((xi = a), l.target.dispatchEvent(a), (xi = null));
      } else return ((e = la(l)), e !== null && Kd(e), (t.blockedOn = l), !1);
      e.shift();
    }
    return !0;
  }
  function kd(t, e, l) {
    ai(t) && l.delete(e);
  }
  function ev() {
    ((Nf = !1),
      Rl !== null && ai(Rl) && (Rl = null),
      Ol !== null && ai(Ol) && (Ol = null),
      Ml !== null && ai(Ml) && (Ml = null),
      xu.forEach(kd),
      Du.forEach(kd));
  }
  function ui(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Nf ||
        ((Nf = !0),
        c.unstable_scheduleCallback(c.unstable_NormalPriority, ev)));
  }
  var ni = null;
  function Fd(t) {
    ni !== t &&
      ((ni = t),
      c.unstable_scheduleCallback(c.unstable_NormalPriority, function () {
        ni === t && (ni = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            u = t[e + 2];
          if (typeof a != 'function') {
            if (Df(a || l) === null) continue;
            break;
          }
          var n = la(l);
          n !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Mc(n, { pending: !0, data: u, method: l.method, action: a }, a, u));
        }
      }));
  }
  function qa(t) {
    function e(d) {
      return ui(d, t);
    }
    (Rl !== null && ui(Rl, t),
      Ol !== null && ui(Ol, t),
      Ml !== null && ui(Ml, t),
      xu.forEach(e),
      Du.forEach(e));
    for (var l = 0; l < xl.length; l++) {
      var a = xl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < xl.length && ((l = xl[0]), l.blockedOn === null); )
      (Wd(l), l.blockedOn === null && xl.shift());
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var u = l[a],
          n = l[a + 1],
          i = u[kt] || null;
        if (typeof n == 'function') i || Fd(l);
        else if (i) {
          var f = null;
          if (n && n.hasAttribute('formAction')) {
            if (((u = n), (i = n[kt] || null))) f = i.formAction;
            else if (Df(u) !== null) continue;
          } else f = i.action;
          (typeof f == 'function' ? (l[a + 1] = f) : (l.splice(a, 3), (a -= 3)),
            Fd(l));
        }
      }
  }
  function Id() {
    function t(n) {
      n.canIntercept &&
        n.info === 'react-transition' &&
        n.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (u = i);
            });
          },
          focusReset: 'manual',
          scroll: 'manual',
        });
    }
    function e() {
      (u !== null && (u(), (u = null)), a || setTimeout(l, 20));
    }
    function l() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n &&
          n.url != null &&
          navigation.navigate(n.url, {
            state: n.getState(),
            info: 'react-transition',
            history: 'replace',
          });
      }
    }
    if (typeof navigation == 'object') {
      var a = !1,
        u = null;
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
            u !== null && (u(), (u = null)));
        }
      );
    }
  }
  function Cf(t) {
    this._internalRoot = t;
  }
  ((ii.prototype.render = Cf.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(s(409));
      var l = e.current,
        a = de();
      Zd(l, a, t, e, null, null);
    }),
    (ii.prototype.unmount = Cf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (Zd(t.current, 2, null, t, null, null), Gn(), (e[ta] = null));
        }
      }));
  function ii(t) {
    this._internalRoot = t;
  }
  ii.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = cs();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < xl.length && e !== 0 && e < xl[l].priority; l++);
      (xl.splice(l, 0, t), l === 0 && Wd(t));
    }
  };
  var Pd = o.version;
  if (Pd !== '19.2.4') throw Error(s(527, Pd, '19.2.4'));
  H.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == 'function' ?
          Error(s(188))
        : ((t = Object.keys(t).join(',')), Error(s(268, t)));
    return (
      (t = g(e)),
      (t = t !== null ? U(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var lv = {
    bundleType: 0,
    version: '19.2.4',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: O,
    reconcilerVersion: '19.2.4',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var ci = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ci.isDisabled && ci.supportsFiber)
      try {
        ((Ga = ci.inject(lv)), (ue = ci));
      } catch {}
  }
  return (
    (Uu.createRoot = function (t, e) {
      if (!h(t)) throw Error(s(299));
      var l = !1,
        a = '',
        u = ir,
        n = cr,
        i = fr;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
          e.onCaughtError !== void 0 && (n = e.onCaughtError),
          e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
        (e = Xd(t, 1, !1, null, null, l, a, null, u, n, i, Id)),
        (t[ta] = e.current),
        hf(t),
        new Cf(e)
      );
    }),
    (Uu.hydrateRoot = function (t, e, l) {
      if (!h(t)) throw Error(s(299));
      var a = !1,
        u = '',
        n = ir,
        i = cr,
        f = fr,
        d = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (u = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (n = l.onUncaughtError),
          l.onCaughtError !== void 0 && (i = l.onCaughtError),
          l.onRecoverableError !== void 0 && (f = l.onRecoverableError),
          l.formState !== void 0 && (d = l.formState)),
        (e = Xd(t, 1, !0, e, l ?? null, a, u, d, n, i, f, Id)),
        (e.context = Qd(null)),
        (l = e.current),
        (a = de()),
        (a = Ei(a)),
        (u = ml(a)),
        (u.callback = null),
        yl(l, u, a),
        (l = a),
        (e.current.lanes = l),
        Qa(e, l),
        Be(e),
        (t[ta] = e.current),
        hf(t),
        new ii(e)
      );
    }),
    (Uu.version = '19.2.4'),
    Uu
  );
}
var sh;
function dv() {
  if (sh) return jf.exports;
  sh = 1;
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
  return (c(), (jf.exports = rv()), jf.exports);
}
var hv = dv(),
  M = Kf();
var oh = 'popstate';
function mv(c = {}) {
  function o(h, m) {
    let {
      pathname: S = '/',
      search: x = '',
      hash: E = '',
    } = Il(h.location.hash.substring(1));
    return (
      !S.startsWith('/') && !S.startsWith('.') && (S = '/' + S),
      Zf(
        '',
        { pathname: S, search: x, hash: E },
        (m.state && m.state.usr) || null,
        (m.state && m.state.key) || 'default',
      )
    );
  }
  function r(h, m) {
    let S = h.document.querySelector('base'),
      x = '';
    if (S && S.getAttribute('href')) {
      let E = h.location.href,
        g = E.indexOf('#');
      x = g === -1 ? E : E.slice(0, g);
    }
    return x + '#' + (typeof m == 'string' ? m : Lu(m));
  }
  function s(h, m) {
    Ne(
      h.pathname.charAt(0) === '/',
      `relative pathnames are not supported in hash history.push(${JSON.stringify(m)})`,
    );
  }
  return vv(o, r, s, c);
}
function At(c, o) {
  if (c === !1 || c === null || typeof c > 'u') throw new Error(o);
}
function Ne(c, o) {
  if (!c) {
    typeof console < 'u' && console.warn(o);
    try {
      throw new Error(o);
    } catch {}
  }
}
function yv() {
  return Math.random().toString(36).substring(2, 10);
}
function rh(c, o) {
  return { usr: c.state, key: c.key, idx: o };
}
function Zf(c, o, r = null, s) {
  return {
    pathname: typeof c == 'string' ? c : c.pathname,
    search: '',
    hash: '',
    ...(typeof o == 'string' ? Il(o) : o),
    state: r,
    key: (o && o.key) || s || yv(),
  };
}
function Lu({ pathname: c = '/', search: o = '', hash: r = '' }) {
  return (
    o && o !== '?' && (c += o.charAt(0) === '?' ? o : '?' + o),
    r && r !== '#' && (c += r.charAt(0) === '#' ? r : '#' + r),
    c
  );
}
function Il(c) {
  let o = {};
  if (c) {
    let r = c.indexOf('#');
    r >= 0 && ((o.hash = c.substring(r)), (c = c.substring(0, r)));
    let s = c.indexOf('?');
    (s >= 0 && ((o.search = c.substring(s)), (c = c.substring(0, s))),
      c && (o.pathname = c));
  }
  return o;
}
function vv(c, o, r, s = {}) {
  let { window: h = document.defaultView, v5Compat: m = !1 } = s,
    S = h.history,
    x = 'POP',
    E = null,
    g = U();
  g == null && ((g = 0), S.replaceState({ ...S.state, idx: g }, ''));
  function U() {
    return (S.state || { idx: null }).idx;
  }
  function A() {
    x = 'POP';
    let G = U(),
      J = G == null ? null : G - g;
    ((g = G), E && E({ action: x, location: V.location, delta: J }));
  }
  function q(G, J) {
    x = 'PUSH';
    let L = Zf(V.location, G, J);
    (r && r(L, G), (g = U() + 1));
    let $ = rh(L, g),
      Et = V.createHref(L);
    try {
      S.pushState($, '', Et);
    } catch (bt) {
      if (bt instanceof DOMException && bt.name === 'DataCloneError') throw bt;
      h.location.assign(Et);
    }
    m && E && E({ action: x, location: V.location, delta: 1 });
  }
  function Z(G, J) {
    x = 'REPLACE';
    let L = Zf(V.location, G, J);
    (r && r(L, G), (g = U()));
    let $ = rh(L, g),
      Et = V.createHref(L);
    (S.replaceState($, '', Et),
      m && E && E({ action: x, location: V.location, delta: 0 }));
  }
  function k(G) {
    return gv(G);
  }
  let V = {
    get action() {
      return x;
    },
    get location() {
      return c(h, S);
    },
    listen(G) {
      if (E) throw new Error('A history only accepts one active listener');
      return (
        h.addEventListener(oh, A),
        (E = G),
        () => {
          (h.removeEventListener(oh, A), (E = null));
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
    push: q,
    replace: Z,
    go(G) {
      return S.go(G);
    },
  };
  return V;
}
function gv(c, o = !1) {
  let r = 'http://localhost';
  (typeof window < 'u' &&
    (r =
      window.location.origin !== 'null' ?
        window.location.origin
      : window.location.href),
    At(r, 'No window.location.(origin|href) available to create URL'));
  let s = typeof c == 'string' ? c : Lu(c);
  return (
    (s = s.replace(/ $/, '%20')),
    !o && s.startsWith('//') && (s = r + s),
    new URL(s, r)
  );
}
function vh(c, o, r = '/') {
  return pv(c, o, r, !1);
}
function pv(c, o, r, s) {
  let h = typeof o == 'string' ? Il(o) : o,
    m = ul(h.pathname || '/', r);
  if (m == null) return null;
  let S = gh(c);
  Sv(S);
  let x = null;
  for (let E = 0; x == null && E < S.length; ++E) {
    let g = Dv(m);
    x = Mv(S[E], g, s);
  }
  return x;
}
function gh(c, o = [], r = [], s = '', h = !1) {
  let m = (S, x, E = h, g) => {
    let U = {
      relativePath: g === void 0 ? S.path || '' : g,
      caseSensitive: S.caseSensitive === !0,
      childrenIndex: x,
      route: S,
    };
    if (U.relativePath.startsWith('/')) {
      if (!U.relativePath.startsWith(s) && E) return;
      (At(
        U.relativePath.startsWith(s),
        `Absolute route path "${U.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (U.relativePath = U.relativePath.slice(s.length)));
    }
    let A = al([s, U.relativePath]),
      q = r.concat(U);
    (S.children &&
      S.children.length > 0 &&
      (At(
        S.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${A}".`,
      ),
      gh(S.children, o, q, A, E)),
      !(S.path == null && !S.index) &&
        o.push({ path: A, score: Rv(A, S.index), routesMeta: q }));
  };
  return (
    c.forEach((S, x) => {
      if (S.path === '' || !S.path?.includes('?')) m(S, x);
      else for (let E of ph(S.path)) m(S, x, !0, E);
    }),
    o
  );
}
function ph(c) {
  let o = c.split('/');
  if (o.length === 0) return [];
  let [r, ...s] = o,
    h = r.endsWith('?'),
    m = r.replace(/\?$/, '');
  if (s.length === 0) return h ? [m, ''] : [m];
  let S = ph(s.join('/')),
    x = [];
  return (
    x.push(...S.map((E) => (E === '' ? m : [m, E].join('/')))),
    h && x.push(...S),
    x.map((E) => (c.startsWith('/') && E === '' ? '/' : E))
  );
}
function Sv(c) {
  c.sort((o, r) =>
    o.score !== r.score ?
      r.score - o.score
    : Ov(
        o.routesMeta.map((s) => s.childrenIndex),
        r.routesMeta.map((s) => s.childrenIndex),
      ),
  );
}
var bv = /^:[\w-]+$/,
  Ev = 3,
  _v = 2,
  Tv = 1,
  zv = 10,
  Av = -2,
  dh = (c) => c === '*';
function Rv(c, o) {
  let r = c.split('/'),
    s = r.length;
  return (
    r.some(dh) && (s += Av),
    o && (s += _v),
    r
      .filter((h) => !dh(h))
      .reduce(
        (h, m) =>
          h +
          (bv.test(m) ? Ev
          : m === '' ? Tv
          : zv),
        s,
      )
  );
}
function Ov(c, o) {
  return c.length === o.length && c.slice(0, -1).every((s, h) => s === o[h]) ?
      c[c.length - 1] - o[o.length - 1]
    : 0;
}
function Mv(c, o, r = !1) {
  let { routesMeta: s } = c,
    h = {},
    m = '/',
    S = [];
  for (let x = 0; x < s.length; ++x) {
    let E = s[x],
      g = x === s.length - 1,
      U = m === '/' ? o : o.slice(m.length) || '/',
      A = ri(
        { path: E.relativePath, caseSensitive: E.caseSensitive, end: g },
        U,
      ),
      q = E.route;
    if (
      (!A &&
        g &&
        r &&
        !s[s.length - 1].route.index &&
        (A = ri(
          { path: E.relativePath, caseSensitive: E.caseSensitive, end: !1 },
          U,
        )),
      !A)
    )
      return null;
    (Object.assign(h, A.params),
      S.push({
        params: h,
        pathname: al([m, A.pathname]),
        pathnameBase: jv(al([m, A.pathnameBase])),
        route: q,
      }),
      A.pathnameBase !== '/' && (m = al([m, A.pathnameBase])));
  }
  return S;
}
function ri(c, o) {
  typeof c == 'string' && (c = { path: c, caseSensitive: !1, end: !0 });
  let [r, s] = xv(c.path, c.caseSensitive, c.end),
    h = o.match(r);
  if (!h) return null;
  let m = h[0],
    S = m.replace(/(.)\/+$/, '$1'),
    x = h.slice(1);
  return {
    params: s.reduce((g, { paramName: U, isOptional: A }, q) => {
      if (U === '*') {
        let k = x[q] || '';
        S = m.slice(0, m.length - k.length).replace(/(.)\/+$/, '$1');
      }
      const Z = x[q];
      return (
        A && !Z ? (g[U] = void 0) : (g[U] = (Z || '').replace(/%2F/g, '/')),
        g
      );
    }, {}),
    pathname: m,
    pathnameBase: S,
    pattern: c,
  };
}
function xv(c, o = !1, r = !0) {
  Ne(
    c === '*' || !c.endsWith('*') || c.endsWith('/*'),
    `Route path "${c}" will be treated as if it were "${c.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/, '/*')}".`,
  );
  let s = [],
    h =
      '^' +
      c
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (S, x, E) => (
            s.push({ paramName: x, isOptional: E != null }),
            E ? '/?([^\\/]+)?' : '/([^\\/]+)'
          ),
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2');
  return (
    c.endsWith('*') ?
      (s.push({ paramName: '*' }),
      (h += c === '*' || c === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
    : r ? (h += '\\/*$')
    : c !== '' && c !== '/' && (h += '(?:(?=\\/|$))'),
    [new RegExp(h, o ? void 0 : 'i'), s]
  );
}
function Dv(c) {
  try {
    return c
      .split('/')
      .map((o) => decodeURIComponent(o).replace(/\//g, '%2F'))
      .join('/');
  } catch (o) {
    return (
      Ne(
        !1,
        `The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`,
      ),
      c
    );
  }
}
function ul(c, o) {
  if (o === '/') return c;
  if (!c.toLowerCase().startsWith(o.toLowerCase())) return null;
  let r = o.endsWith('/') ? o.length - 1 : o.length,
    s = c.charAt(r);
  return s && s !== '/' ? null : c.slice(r) || '/';
}
var Nv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Cv(c, o = '/') {
  let {
      pathname: r,
      search: s = '',
      hash: h = '',
    } = typeof c == 'string' ? Il(c) : c,
    m;
  return (
    r ?
      ((r = r.replace(/\/\/+/g, '/')),
      r.startsWith('/') ? (m = hh(r.substring(1), '/')) : (m = hh(r, o)))
    : (m = o),
    { pathname: m, search: Hv(s), hash: Bv(h) }
  );
}
function hh(c, o) {
  let r = o.replace(/\/+$/, '').split('/');
  return (
    c.split('/').forEach((h) => {
      h === '..' ? r.length > 1 && r.pop() : h !== '.' && r.push(h);
    }),
    r.length > 1 ? r.join('/') : '/'
  );
}
function Lf(c, o, r, s) {
  return `Cannot include a '${c}' character in a manually specified \`to.${o}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Uv(c) {
  return c.filter(
    (o, r) => r === 0 || (o.route.path && o.route.path.length > 0),
  );
}
function Sh(c) {
  let o = Uv(c);
  return o.map((r, s) => (s === o.length - 1 ? r.pathname : r.pathnameBase));
}
function bh(c, o, r, s = !1) {
  let h;
  typeof c == 'string' ?
    (h = Il(c))
  : ((h = { ...c }),
    At(
      !h.pathname || !h.pathname.includes('?'),
      Lf('?', 'pathname', 'search', h),
    ),
    At(
      !h.pathname || !h.pathname.includes('#'),
      Lf('#', 'pathname', 'hash', h),
    ),
    At(!h.search || !h.search.includes('#'), Lf('#', 'search', 'hash', h)));
  let m = c === '' || h.pathname === '',
    S = m ? '/' : h.pathname,
    x;
  if (S == null) x = r;
  else {
    let A = o.length - 1;
    if (!s && S.startsWith('..')) {
      let q = S.split('/');
      for (; q[0] === '..'; ) (q.shift(), (A -= 1));
      h.pathname = q.join('/');
    }
    x = A >= 0 ? o[A] : '/';
  }
  let E = Cv(h, x),
    g = S && S !== '/' && S.endsWith('/'),
    U = (m || S === '.') && r.endsWith('/');
  return (!E.pathname.endsWith('/') && (g || U) && (E.pathname += '/'), E);
}
var al = (c) => c.join('/').replace(/\/\/+/g, '/'),
  jv = (c) => c.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Hv = (c) =>
    !c || c === '?' ? ''
    : c.startsWith('?') ? c
    : '?' + c,
  Bv = (c) =>
    !c || c === '#' ? ''
    : c.startsWith('#') ? c
    : '#' + c,
  qv = class {
    constructor(c, o, r, s = !1) {
      ((this.status = c),
        (this.statusText = o || ''),
        (this.internal = s),
        r instanceof Error ?
          ((this.data = r.toString()), (this.error = r))
        : (this.data = r));
    }
  };
function Yv(c) {
  return (
    c != null &&
    typeof c.status == 'number' &&
    typeof c.statusText == 'string' &&
    typeof c.internal == 'boolean' &&
    'data' in c
  );
}
function Lv(c) {
  return (
    c
      .map((o) => o.route.path)
      .filter(Boolean)
      .join('/')
      .replace(/\/\/*/g, '/') || '/'
  );
}
var Eh =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
function _h(c, o) {
  let r = c;
  if (typeof r != 'string' || !Nv.test(r))
    return { absoluteURL: void 0, isExternal: !1, to: r };
  let s = r,
    h = !1;
  if (Eh)
    try {
      let m = new URL(window.location.href),
        S = r.startsWith('//') ? new URL(m.protocol + r) : new URL(r),
        x = ul(S.pathname, o);
      S.origin === m.origin && x != null ?
        (r = x + S.search + S.hash)
      : (h = !0);
    } catch {
      Ne(
        !1,
        `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: s, isExternal: h, to: r };
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var Th = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(Th);
var Gv = ['GET', ...Th];
new Set(Gv);
var Ya = M.createContext(null);
Ya.displayName = 'DataRouter';
var di = M.createContext(null);
di.displayName = 'DataRouterState';
var Xv = M.createContext(!1),
  zh = M.createContext({ isTransitioning: !1 });
zh.displayName = 'ViewTransition';
var Qv = M.createContext(new Map());
Qv.displayName = 'Fetchers';
var Zv = M.createContext(null);
Zv.displayName = 'Await';
var Re = M.createContext(null);
Re.displayName = 'Navigation';
var Gu = M.createContext(null);
Gu.displayName = 'Location';
var nl = M.createContext({ outlet: null, matches: [], isDataRoute: !1 });
nl.displayName = 'Route';
var Jf = M.createContext(null);
Jf.displayName = 'RouteError';
var Ah = 'REACT_ROUTER_ERROR',
  Vv = 'REDIRECT',
  Kv = 'ROUTE_ERROR_RESPONSE';
function Jv(c) {
  if (c.startsWith(`${Ah}:${Vv}:{`))
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
function wv(c) {
  if (c.startsWith(`${Ah}:${Kv}:{`))
    try {
      let o = JSON.parse(c.slice(40));
      if (
        typeof o == 'object' &&
        o &&
        typeof o.status == 'number' &&
        typeof o.statusText == 'string'
      )
        return new qv(o.status, o.statusText, o.data);
    } catch {}
}
function $v(c, { relative: o } = {}) {
  At(
    Xu(),
    'useHref() may be used only in the context of a <Router> component.',
  );
  let { basename: r, navigator: s } = M.useContext(Re),
    { hash: h, pathname: m, search: S } = Qu(c, { relative: o }),
    x = m;
  return (
    r !== '/' && (x = m === '/' ? r : al([r, m])),
    s.createHref({ pathname: x, search: S, hash: h })
  );
}
function Xu() {
  return M.useContext(Gu) != null;
}
function Pl() {
  return (
    At(
      Xu(),
      'useLocation() may be used only in the context of a <Router> component.',
    ),
    M.useContext(Gu).location
  );
}
var Rh =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Oh(c) {
  M.useContext(Re).static || M.useLayoutEffect(c);
}
function Wv() {
  let { isDataRoute: c } = M.useContext(nl);
  return c ? f0() : kv();
}
function kv() {
  At(
    Xu(),
    'useNavigate() may be used only in the context of a <Router> component.',
  );
  let c = M.useContext(Ya),
    { basename: o, navigator: r } = M.useContext(Re),
    { matches: s } = M.useContext(nl),
    { pathname: h } = Pl(),
    m = JSON.stringify(Sh(s)),
    S = M.useRef(!1);
  return (
    Oh(() => {
      S.current = !0;
    }),
    M.useCallback(
      (E, g = {}) => {
        if ((Ne(S.current, Rh), !S.current)) return;
        if (typeof E == 'number') {
          r.go(E);
          return;
        }
        let U = bh(E, JSON.parse(m), h, g.relative === 'path');
        (c == null &&
          o !== '/' &&
          (U.pathname = U.pathname === '/' ? o : al([o, U.pathname])),
          (g.replace ? r.replace : r.push)(U, g.state, g));
      },
      [o, r, m, h, c],
    )
  );
}
M.createContext(null);
function Qu(c, { relative: o } = {}) {
  let { matches: r } = M.useContext(nl),
    { pathname: s } = Pl(),
    h = JSON.stringify(Sh(r));
  return M.useMemo(() => bh(c, JSON.parse(h), s, o === 'path'), [c, h, s, o]);
}
function Fv(c, o) {
  return Mh(c, o);
}
function Mh(c, o, r, s, h) {
  At(
    Xu(),
    'useRoutes() may be used only in the context of a <Router> component.',
  );
  let { navigator: m } = M.useContext(Re),
    { matches: S } = M.useContext(nl),
    x = S[S.length - 1],
    E = x ? x.params : {},
    g = x ? x.pathname : '/',
    U = x ? x.pathnameBase : '/',
    A = x && x.route;
  {
    let L = (A && A.path) || '';
    Dh(
      g,
      !A || L.endsWith('*') || L.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L === '/' ? '*' : `${L}/*`}">.`,
    );
  }
  let q = Pl(),
    Z;
  if (o) {
    let L = typeof o == 'string' ? Il(o) : o;
    (At(
      U === '/' || L.pathname?.startsWith(U),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${U}" but pathname "${L.pathname}" was given in the \`location\` prop.`,
    ),
      (Z = L));
  } else Z = q;
  let k = Z.pathname || '/',
    V = k;
  if (U !== '/') {
    let L = U.replace(/^\//, '').split('/');
    V = '/' + k.replace(/^\//, '').split('/').slice(L.length).join('/');
  }
  let G = vh(c, { pathname: V });
  (Ne(
    A || G != null,
    `No routes matched location "${Z.pathname}${Z.search}${Z.hash}" `,
  ),
    Ne(
      G == null ||
        G[G.length - 1].route.element !== void 0 ||
        G[G.length - 1].route.Component !== void 0 ||
        G[G.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${Z.pathname}${Z.search}${Z.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let J = l0(
    G &&
      G.map((L) =>
        Object.assign({}, L, {
          params: Object.assign({}, E, L.params),
          pathname: al([
            U,
            m.encodeLocation ?
              m.encodeLocation(
                L.pathname.replace(/\?/g, '%3F').replace(/#/g, '%23'),
              ).pathname
            : L.pathname,
          ]),
          pathnameBase:
            L.pathnameBase === '/' ?
              U
            : al([
                U,
                m.encodeLocation ?
                  m.encodeLocation(
                    L.pathnameBase.replace(/\?/g, '%3F').replace(/#/g, '%23'),
                  ).pathname
                : L.pathnameBase,
              ]),
        }),
      ),
    S,
    r,
    s,
    h,
  );
  return o && J ?
      M.createElement(
        Gu.Provider,
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
        J,
      )
    : J;
}
function Iv() {
  let c = c0(),
    o =
      Yv(c) ? `${c.status} ${c.statusText}`
      : c instanceof Error ? c.message
      : JSON.stringify(c),
    r = c instanceof Error ? c.stack : null,
    s = 'rgba(200,200,200, 0.5)',
    h = { padding: '0.5rem', backgroundColor: s },
    m = { padding: '2px 4px', backgroundColor: s },
    S = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', c),
    (S = M.createElement(
      M.Fragment,
      null,
      M.createElement('p', null, '💿 Hey developer 👋'),
      M.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        M.createElement('code', { style: m }, 'ErrorBoundary'),
        ' or',
        ' ',
        M.createElement('code', { style: m }, 'errorElement'),
        ' prop on your route.',
      ),
    )),
    M.createElement(
      M.Fragment,
      null,
      M.createElement('h2', null, 'Unexpected Application Error!'),
      M.createElement('h3', { style: { fontStyle: 'italic' } }, o),
      r ? M.createElement('pre', { style: h }, r) : null,
      S,
    )
  );
}
var Pv = M.createElement(Iv, null),
  xh = class extends M.Component {
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
        const r = wv(c.digest);
        r && (c = r);
      }
      let o =
        c !== void 0 ?
          M.createElement(
            nl.Provider,
            { value: this.props.routeContext },
            M.createElement(Jf.Provider, {
              value: c,
              children: this.props.component,
            }),
          )
        : this.props.children;
      return this.context ? M.createElement(t0, { error: c }, o) : o;
    }
  };
xh.contextType = Xv;
var Gf = new WeakMap();
function t0({ children: c, error: o }) {
  let { basename: r } = M.useContext(Re);
  if (
    typeof o == 'object' &&
    o &&
    'digest' in o &&
    typeof o.digest == 'string'
  ) {
    let s = Jv(o.digest);
    if (s) {
      let h = Gf.get(o);
      if (h) throw h;
      let m = _h(s.location, r);
      if (Eh && !Gf.get(o))
        if (m.isExternal || s.reloadDocument)
          window.location.href = m.absoluteURL || m.to;
        else {
          const S = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(m.to, {
              replace: s.replace,
            }),
          );
          throw (Gf.set(o, S), S);
        }
      return M.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${m.absoluteURL || m.to}`,
      });
    }
  }
  return c;
}
function e0({ routeContext: c, match: o, children: r }) {
  let s = M.useContext(Ya);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = o.route.id),
    M.createElement(nl.Provider, { value: c }, r)
  );
}
function l0(c, o = [], r = null, s = null, h = null) {
  if (c == null) {
    if (!r) return null;
    if (r.errors) c = r.matches;
    else if (o.length === 0 && !r.initialized && r.matches.length > 0)
      c = r.matches;
    else return null;
  }
  let m = c,
    S = r?.errors;
  if (S != null) {
    let U = m.findIndex((A) => A.route.id && S?.[A.route.id] !== void 0);
    (At(
      U >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(S).join(',')}`,
    ),
      (m = m.slice(0, Math.min(m.length, U + 1))));
  }
  let x = !1,
    E = -1;
  if (r)
    for (let U = 0; U < m.length; U++) {
      let A = m[U];
      if (
        ((A.route.HydrateFallback || A.route.hydrateFallbackElement) && (E = U),
        A.route.id)
      ) {
        let { loaderData: q, errors: Z } = r,
          k =
            A.route.loader &&
            !q.hasOwnProperty(A.route.id) &&
            (!Z || Z[A.route.id] === void 0);
        if (A.route.lazy || k) {
          ((x = !0), E >= 0 ? (m = m.slice(0, E + 1)) : (m = [m[0]]));
          break;
        }
      }
    }
  let g =
    r && s ?
      (U, A) => {
        s(U, {
          location: r.location,
          params: r.matches?.[0]?.params ?? {},
          unstable_pattern: Lv(r.matches),
          errorInfo: A,
        });
      }
    : void 0;
  return m.reduceRight((U, A, q) => {
    let Z,
      k = !1,
      V = null,
      G = null;
    r &&
      ((Z = S && A.route.id ? S[A.route.id] : void 0),
      (V = A.route.errorElement || Pv),
      x &&
        (E < 0 && q === 0 ?
          (Dh(
            'route-fallback',
            !1,
            'No `HydrateFallback` element provided to render during initial hydration',
          ),
          (k = !0),
          (G = null))
        : E === q && ((k = !0), (G = A.route.hydrateFallbackElement || null))));
    let J = o.concat(m.slice(0, q + 1)),
      L = () => {
        let $;
        return (
          Z ? ($ = V)
          : k ? ($ = G)
          : A.route.Component ? ($ = M.createElement(A.route.Component, null))
          : A.route.element ? ($ = A.route.element)
          : ($ = U),
          M.createElement(e0, {
            match: A,
            routeContext: { outlet: U, matches: J, isDataRoute: r != null },
            children: $,
          })
        );
      };
    return r && (A.route.ErrorBoundary || A.route.errorElement || q === 0) ?
        M.createElement(xh, {
          location: r.location,
          revalidation: r.revalidation,
          component: V,
          error: Z,
          children: L(),
          routeContext: { outlet: null, matches: J, isDataRoute: !0 },
          onError: g,
        })
      : L();
  }, null);
}
function wf(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function a0(c) {
  let o = M.useContext(Ya);
  return (At(o, wf(c)), o);
}
function u0(c) {
  let o = M.useContext(di);
  return (At(o, wf(c)), o);
}
function n0(c) {
  let o = M.useContext(nl);
  return (At(o, wf(c)), o);
}
function $f(c) {
  let o = n0(c),
    r = o.matches[o.matches.length - 1];
  return (
    At(
      r.route.id,
      `${c} can only be used on routes that contain a unique "id"`,
    ),
    r.route.id
  );
}
function i0() {
  return $f('useRouteId');
}
function c0() {
  let c = M.useContext(Jf),
    o = u0('useRouteError'),
    r = $f('useRouteError');
  return c !== void 0 ? c : o.errors?.[r];
}
function f0() {
  let { router: c } = a0('useNavigate'),
    o = $f('useNavigate'),
    r = M.useRef(!1);
  return (
    Oh(() => {
      r.current = !0;
    }),
    M.useCallback(
      async (h, m = {}) => {
        (Ne(r.current, Rh),
          r.current &&
            (typeof h == 'number' ?
              await c.navigate(h)
            : await c.navigate(h, { fromRouteId: o, ...m })));
      },
      [c, o],
    )
  );
}
var mh = {};
function Dh(c, o, r) {
  !o && !mh[c] && ((mh[c] = !0), Ne(!1, r));
}
M.memo(s0);
function s0({ routes: c, future: o, state: r, onError: s }) {
  return Mh(c, void 0, r, s, o);
}
function ll(c) {
  At(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.',
  );
}
function o0({
  basename: c = '/',
  children: o = null,
  location: r,
  navigationType: s = 'POP',
  navigator: h,
  static: m = !1,
  unstable_useTransitions: S,
}) {
  At(
    !Xu(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.',
  );
  let x = c.replace(/^\/*/, '/'),
    E = M.useMemo(
      () => ({
        basename: x,
        navigator: h,
        static: m,
        unstable_useTransitions: S,
        future: {},
      }),
      [x, h, m, S],
    );
  typeof r == 'string' && (r = Il(r));
  let {
      pathname: g = '/',
      search: U = '',
      hash: A = '',
      state: q = null,
      key: Z = 'default',
    } = r,
    k = M.useMemo(() => {
      let V = ul(g, x);
      return V == null ? null : (
          {
            location: { pathname: V, search: U, hash: A, state: q, key: Z },
            navigationType: s,
          }
        );
    }, [x, g, U, A, q, Z, s]);
  return (
    Ne(
      k != null,
      `<Router basename="${x}"> is not able to match the URL "${g}${U}${A}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    k == null ? null : (
      M.createElement(
        Re.Provider,
        { value: E },
        M.createElement(Gu.Provider, { children: o, value: k }),
      )
    )
  );
}
function r0({ children: c, location: o }) {
  return Fv(Vf(c), o);
}
function Vf(c, o = []) {
  let r = [];
  return (
    M.Children.forEach(c, (s, h) => {
      if (!M.isValidElement(s)) return;
      let m = [...o, h];
      if (s.type === M.Fragment) {
        r.push.apply(r, Vf(s.props.children, m));
        return;
      }
      (At(
        s.type === ll,
        `[${typeof s.type == 'string' ? s.type : s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        At(
          !s.props.index || !s.props.children,
          'An index route cannot have child routes.',
        ));
      let S = {
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
      (s.props.children && (S.children = Vf(s.props.children, m)), r.push(S));
    }),
    r
  );
}
var si = 'get',
  oi = 'application/x-www-form-urlencoded';
function hi(c) {
  return typeof HTMLElement < 'u' && c instanceof HTMLElement;
}
function d0(c) {
  return hi(c) && c.tagName.toLowerCase() === 'button';
}
function h0(c) {
  return hi(c) && c.tagName.toLowerCase() === 'form';
}
function m0(c) {
  return hi(c) && c.tagName.toLowerCase() === 'input';
}
function y0(c) {
  return !!(c.metaKey || c.altKey || c.ctrlKey || c.shiftKey);
}
function v0(c, o) {
  return c.button === 0 && (!o || o === '_self') && !y0(c);
}
var fi = null;
function g0() {
  if (fi === null)
    try {
      (new FormData(document.createElement('form'), 0), (fi = !1));
    } catch {
      fi = !0;
    }
  return fi;
}
var p0 = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function Xf(c) {
  return c != null && !p0.has(c) ?
      (Ne(
        !1,
        `"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${oi}"`,
      ),
      null)
    : c;
}
function S0(c, o) {
  let r, s, h, m, S;
  if (h0(c)) {
    let x = c.getAttribute('action');
    ((s = x ? ul(x, o) : null),
      (r = c.getAttribute('method') || si),
      (h = Xf(c.getAttribute('enctype')) || oi),
      (m = new FormData(c)));
  } else if (d0(c) || (m0(c) && (c.type === 'submit' || c.type === 'image'))) {
    let x = c.form;
    if (x == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let E = c.getAttribute('formaction') || x.getAttribute('action');
    if (
      ((s = E ? ul(E, o) : null),
      (r = c.getAttribute('formmethod') || x.getAttribute('method') || si),
      (h =
        Xf(c.getAttribute('formenctype')) ||
        Xf(x.getAttribute('enctype')) ||
        oi),
      (m = new FormData(x, c)),
      !g0())
    ) {
      let { name: g, type: U, value: A } = c;
      if (U === 'image') {
        let q = g ? `${g}.` : '';
        (m.append(`${q}x`, '0'), m.append(`${q}y`, '0'));
      } else g && m.append(g, A);
    }
  } else {
    if (hi(c))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((r = si), (s = null), (h = oi), (S = c));
  }
  return (
    m && h === 'text/plain' && ((S = m), (m = void 0)),
    { action: s, method: r.toLowerCase(), encType: h, formData: m, body: S }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function Wf(c, o) {
  if (c === !1 || c === null || typeof c > 'u') throw new Error(o);
}
function b0(c, o, r, s) {
  let h =
    typeof c == 'string' ?
      new URL(
        c,
        typeof window > 'u' ? 'server://singlefetch/' : window.location.origin,
      )
    : c;
  return (
    r ?
      h.pathname.endsWith('/') ?
        (h.pathname = `${h.pathname}_.${s}`)
      : (h.pathname = `${h.pathname}.${s}`)
    : h.pathname === '/' ? (h.pathname = `_root.${s}`)
    : o && ul(h.pathname, o) === '/' ?
      (h.pathname = `${o.replace(/\/$/, '')}/_root.${s}`)
    : (h.pathname = `${h.pathname.replace(/\/$/, '')}.${s}`),
    h
  );
}
async function E0(c, o) {
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
function _0(c) {
  return (
    c == null ? !1
    : c.href == null ?
      c.rel === 'preload' &&
      typeof c.imageSrcSet == 'string' &&
      typeof c.imageSizes == 'string'
    : typeof c.rel == 'string' && typeof c.href == 'string'
  );
}
async function T0(c, o, r) {
  let s = await Promise.all(
    c.map(async (h) => {
      let m = o.routes[h.route.id];
      if (m) {
        let S = await E0(m, r);
        return S.links ? S.links() : [];
      }
      return [];
    }),
  );
  return O0(
    s
      .flat(1)
      .filter(_0)
      .filter((h) => h.rel === 'stylesheet' || h.rel === 'preload')
      .map((h) =>
        h.rel === 'stylesheet' ?
          { ...h, rel: 'prefetch', as: 'style' }
        : { ...h, rel: 'prefetch' },
      ),
  );
}
function yh(c, o, r, s, h, m) {
  let S = (E, g) => (r[g] ? E.route.id !== r[g].route.id : !0),
    x = (E, g) =>
      r[g].pathname !== E.pathname ||
      (r[g].route.path?.endsWith('*') && r[g].params['*'] !== E.params['*']);
  return (
    m === 'assets' ? o.filter((E, g) => S(E, g) || x(E, g))
    : m === 'data' ?
      o.filter((E, g) => {
        let U = s.routes[E.route.id];
        if (!U || !U.hasLoader) return !1;
        if (S(E, g) || x(E, g)) return !0;
        if (E.route.shouldRevalidate) {
          let A = E.route.shouldRevalidate({
            currentUrl: new URL(h.pathname + h.search + h.hash, window.origin),
            currentParams: r[0]?.params || {},
            nextUrl: new URL(c, window.origin),
            nextParams: E.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof A == 'boolean') return A;
        }
        return !0;
      })
    : []
  );
}
function z0(c, o, { includeHydrateFallback: r } = {}) {
  return A0(
    c
      .map((s) => {
        let h = o.routes[s.route.id];
        if (!h) return [];
        let m = [h.module];
        return (
          h.clientActionModule && (m = m.concat(h.clientActionModule)),
          h.clientLoaderModule && (m = m.concat(h.clientLoaderModule)),
          r &&
            h.hydrateFallbackModule &&
            (m = m.concat(h.hydrateFallbackModule)),
          h.imports && (m = m.concat(h.imports)),
          m
        );
      })
      .flat(1),
  );
}
function A0(c) {
  return [...new Set(c)];
}
function R0(c) {
  let o = {},
    r = Object.keys(c).sort();
  for (let s of r) o[s] = c[s];
  return o;
}
function O0(c, o) {
  let r = new Set();
  return (
    new Set(o),
    c.reduce((s, h) => {
      let m = JSON.stringify(R0(h));
      return (r.has(m) || (r.add(m), s.push({ key: m, link: h })), s);
    }, [])
  );
}
function Nh() {
  let c = M.useContext(Ya);
  return (
    Wf(
      c,
      'You must render this element inside a <DataRouterContext.Provider> element',
    ),
    c
  );
}
function M0() {
  let c = M.useContext(di);
  return (
    Wf(
      c,
      'You must render this element inside a <DataRouterStateContext.Provider> element',
    ),
    c
  );
}
var kf = M.createContext(void 0);
kf.displayName = 'FrameworkContext';
function Ch() {
  let c = M.useContext(kf);
  return (
    Wf(c, 'You must render this element inside a <HydratedRouter> element'),
    c
  );
}
function x0(c, o) {
  let r = M.useContext(kf),
    [s, h] = M.useState(!1),
    [m, S] = M.useState(!1),
    {
      onFocus: x,
      onBlur: E,
      onMouseEnter: g,
      onMouseLeave: U,
      onTouchStart: A,
    } = o,
    q = M.useRef(null);
  (M.useEffect(() => {
    if ((c === 'render' && S(!0), c === 'viewport')) {
      let V = (J) => {
          J.forEach((L) => {
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
    M.useEffect(() => {
      if (s) {
        let V = setTimeout(() => {
          S(!0);
        }, 100);
        return () => {
          clearTimeout(V);
        };
      }
    }, [s]));
  let Z = () => {
      h(!0);
    },
    k = () => {
      (h(!1), S(!1));
    };
  return (
    r ?
      c !== 'intent' ?
        [m, q, {}]
      : [
          m,
          q,
          {
            onFocus: ju(x, Z),
            onBlur: ju(E, k),
            onMouseEnter: ju(g, Z),
            onMouseLeave: ju(U, k),
            onTouchStart: ju(A, Z),
          },
        ]
    : [!1, q, {}]
  );
}
function ju(c, o) {
  return (r) => {
    (c && c(r), r.defaultPrevented || o(r));
  };
}
function D0({ page: c, ...o }) {
  let { router: r } = Nh(),
    s = M.useMemo(() => vh(r.routes, c, r.basename), [r.routes, c, r.basename]);
  return s ? M.createElement(C0, { page: c, matches: s, ...o }) : null;
}
function N0(c) {
  let { manifest: o, routeModules: r } = Ch(),
    [s, h] = M.useState([]);
  return (
    M.useEffect(() => {
      let m = !1;
      return (
        T0(c, o, r).then((S) => {
          m || h(S);
        }),
        () => {
          m = !0;
        }
      );
    }, [c, o, r]),
    s
  );
}
function C0({ page: c, matches: o, ...r }) {
  let s = Pl(),
    { future: h, manifest: m, routeModules: S } = Ch(),
    { basename: x } = Nh(),
    { loaderData: E, matches: g } = M0(),
    U = M.useMemo(() => yh(c, o, g, m, s, 'data'), [c, o, g, m, s]),
    A = M.useMemo(() => yh(c, o, g, m, s, 'assets'), [c, o, g, m, s]),
    q = M.useMemo(() => {
      if (c === s.pathname + s.search + s.hash) return [];
      let V = new Set(),
        G = !1;
      if (
        (o.forEach((L) => {
          let $ = m.routes[L.route.id];
          !$ ||
            !$.hasLoader ||
            ((
              (!U.some((Et) => Et.route.id === L.route.id) &&
                L.route.id in E &&
                S[L.route.id]?.shouldRevalidate) ||
              $.hasClientLoader
            ) ?
              (G = !0)
            : V.add(L.route.id));
        }),
        V.size === 0)
      )
        return [];
      let J = b0(c, x, h.unstable_trailingSlashAwareDataRequests, 'data');
      return (
        G &&
          V.size > 0 &&
          J.searchParams.set(
            '_routes',
            o
              .filter((L) => V.has(L.route.id))
              .map((L) => L.route.id)
              .join(','),
          ),
        [J.pathname + J.search]
      );
    }, [x, h.unstable_trailingSlashAwareDataRequests, E, s, m, U, o, c, S]),
    Z = M.useMemo(() => z0(A, m), [A, m]),
    k = N0(A);
  return M.createElement(
    M.Fragment,
    null,
    q.map((V) =>
      M.createElement('link', {
        key: V,
        rel: 'prefetch',
        as: 'fetch',
        href: V,
        ...r,
      }),
    ),
    Z.map((V) =>
      M.createElement('link', { key: V, rel: 'modulepreload', href: V, ...r }),
    ),
    k.map(({ key: V, link: G }) =>
      M.createElement('link', {
        key: V,
        nonce: r.nonce,
        ...G,
        crossOrigin: G.crossOrigin ?? r.crossOrigin,
      }),
    ),
  );
}
function U0(...c) {
  return (o) => {
    c.forEach((r) => {
      typeof r == 'function' ? r(o) : r != null && (r.current = o);
    });
  };
}
var j0 =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  j0 && (window.__reactRouterVersion = '7.13.0');
} catch {}
function H0({
  basename: c,
  children: o,
  unstable_useTransitions: r,
  window: s,
}) {
  let h = M.useRef();
  h.current == null && (h.current = mv({ window: s, v5Compat: !0 }));
  let m = h.current,
    [S, x] = M.useState({ action: m.action, location: m.location }),
    E = M.useCallback(
      (g) => {
        r === !1 ? x(g) : M.startTransition(() => x(g));
      },
      [r],
    );
  return (
    M.useLayoutEffect(() => m.listen(E), [m, E]),
    M.createElement(o0, {
      basename: c,
      children: o,
      location: S.location,
      navigationType: S.action,
      navigator: m,
      unstable_useTransitions: r,
    })
  );
}
var Uh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Nl = M.forwardRef(function (
    {
      onClick: o,
      discover: r = 'render',
      prefetch: s = 'none',
      relative: h,
      reloadDocument: m,
      replace: S,
      state: x,
      target: E,
      to: g,
      preventScrollReset: U,
      viewTransition: A,
      unstable_defaultShouldRevalidate: q,
      ...Z
    },
    k,
  ) {
    let { basename: V, unstable_useTransitions: G } = M.useContext(Re),
      J = typeof g == 'string' && Uh.test(g),
      L = _h(g, V);
    g = L.to;
    let $ = $v(g, { relative: h }),
      [Et, bt, Rt] = x0(s, Z),
      I = L0(g, {
        replace: S,
        state: x,
        target: E,
        preventScrollReset: U,
        relative: h,
        viewTransition: A,
        unstable_defaultShouldRevalidate: q,
        unstable_useTransitions: G,
      });
    function xt(he) {
      (o && o(he), he.defaultPrevented || I(he));
    }
    let Gt = M.createElement('a', {
      ...Z,
      ...Rt,
      'href': L.absoluteURL || $,
      'onClick': L.isExternal || m ? o : xt,
      'ref': U0(k, bt),
      'target': E,
      'data-discover': !J && r === 'render' ? 'true' : void 0,
    });
    return Et && !J ?
        M.createElement(M.Fragment, null, Gt, M.createElement(D0, { page: $ }))
      : Gt;
  });
Nl.displayName = 'Link';
var B0 = M.forwardRef(function (
  {
    'aria-current': o = 'page',
    'caseSensitive': r = !1,
    'className': s = '',
    'end': h = !1,
    'style': m,
    'to': S,
    'viewTransition': x,
    'children': E,
    ...g
  },
  U,
) {
  let A = Qu(S, { relative: g.relative }),
    q = Pl(),
    Z = M.useContext(di),
    { navigator: k, basename: V } = M.useContext(Re),
    G = Z != null && V0(A) && x === !0,
    J = k.encodeLocation ? k.encodeLocation(A).pathname : A.pathname,
    L = q.pathname,
    $ =
      Z && Z.navigation && Z.navigation.location ?
        Z.navigation.location.pathname
      : null;
  (r ||
    ((L = L.toLowerCase()),
    ($ = $ ? $.toLowerCase() : null),
    (J = J.toLowerCase())),
    $ && V && ($ = ul($, V) || $));
  const Et = J !== '/' && J.endsWith('/') ? J.length - 1 : J.length;
  let bt = L === J || (!h && L.startsWith(J) && L.charAt(Et) === '/'),
    Rt =
      $ != null &&
      ($ === J || (!h && $.startsWith(J) && $.charAt(J.length) === '/')),
    I = { isActive: bt, isPending: Rt, isTransitioning: G },
    xt = bt ? o : void 0,
    Gt;
  typeof s == 'function' ?
    (Gt = s(I))
  : (Gt = [
      s,
      bt ? 'active' : null,
      Rt ? 'pending' : null,
      G ? 'transitioning' : null,
    ]
      .filter(Boolean)
      .join(' '));
  let he = typeof m == 'function' ? m(I) : m;
  return M.createElement(
    Nl,
    {
      ...g,
      'aria-current': xt,
      'className': Gt,
      'ref': U,
      'style': he,
      'to': S,
      'viewTransition': x,
    },
    typeof E == 'function' ? E(I) : E,
  );
});
B0.displayName = 'NavLink';
var q0 = M.forwardRef(
  (
    {
      discover: c = 'render',
      fetcherKey: o,
      navigate: r,
      reloadDocument: s,
      replace: h,
      state: m,
      method: S = si,
      action: x,
      onSubmit: E,
      relative: g,
      preventScrollReset: U,
      viewTransition: A,
      unstable_defaultShouldRevalidate: q,
      ...Z
    },
    k,
  ) => {
    let { unstable_useTransitions: V } = M.useContext(Re),
      G = Q0(),
      J = Z0(x, { relative: g }),
      L = S.toLowerCase() === 'get' ? 'get' : 'post',
      $ = typeof x == 'string' && Uh.test(x),
      Et = (bt) => {
        if ((E && E(bt), bt.defaultPrevented)) return;
        bt.preventDefault();
        let Rt = bt.nativeEvent.submitter,
          I = Rt?.getAttribute('formmethod') || S,
          xt = () =>
            G(Rt || bt.currentTarget, {
              fetcherKey: o,
              method: I,
              navigate: r,
              replace: h,
              state: m,
              relative: g,
              preventScrollReset: U,
              viewTransition: A,
              unstable_defaultShouldRevalidate: q,
            });
        V && r !== !1 ? M.startTransition(() => xt()) : xt();
      };
    return M.createElement('form', {
      'ref': k,
      'method': L,
      'action': J,
      'onSubmit': s ? E : Et,
      ...Z,
      'data-discover': !$ && c === 'render' ? 'true' : void 0,
    });
  },
);
q0.displayName = 'Form';
function Y0(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function jh(c) {
  let o = M.useContext(Ya);
  return (At(o, Y0(c)), o);
}
function L0(
  c,
  {
    target: o,
    replace: r,
    state: s,
    preventScrollReset: h,
    relative: m,
    viewTransition: S,
    unstable_defaultShouldRevalidate: x,
    unstable_useTransitions: E,
  } = {},
) {
  let g = Wv(),
    U = Pl(),
    A = Qu(c, { relative: m });
  return M.useCallback(
    (q) => {
      if (v0(q, o)) {
        q.preventDefault();
        let Z = r !== void 0 ? r : Lu(U) === Lu(A),
          k = () =>
            g(c, {
              replace: Z,
              state: s,
              preventScrollReset: h,
              relative: m,
              viewTransition: S,
              unstable_defaultShouldRevalidate: x,
            });
        E ? M.startTransition(() => k()) : k();
      }
    },
    [U, g, A, r, s, o, c, h, m, S, x, E],
  );
}
var G0 = 0,
  X0 = () => `__${String(++G0)}__`;
function Q0() {
  let { router: c } = jh('useSubmit'),
    { basename: o } = M.useContext(Re),
    r = i0(),
    s = c.fetch,
    h = c.navigate;
  return M.useCallback(
    async (m, S = {}) => {
      let { action: x, method: E, encType: g, formData: U, body: A } = S0(m, o);
      if (S.navigate === !1) {
        let q = S.fetcherKey || X0();
        await s(q, r, S.action || x, {
          unstable_defaultShouldRevalidate: S.unstable_defaultShouldRevalidate,
          preventScrollReset: S.preventScrollReset,
          formData: U,
          body: A,
          formMethod: S.method || E,
          formEncType: S.encType || g,
          flushSync: S.flushSync,
        });
      } else
        await h(S.action || x, {
          unstable_defaultShouldRevalidate: S.unstable_defaultShouldRevalidate,
          preventScrollReset: S.preventScrollReset,
          formData: U,
          body: A,
          formMethod: S.method || E,
          formEncType: S.encType || g,
          replace: S.replace,
          state: S.state,
          fromRouteId: r,
          flushSync: S.flushSync,
          viewTransition: S.viewTransition,
        });
    },
    [s, h, o, r],
  );
}
function Z0(c, { relative: o } = {}) {
  let { basename: r } = M.useContext(Re),
    s = M.useContext(nl);
  At(s, 'useFormAction must be used inside a RouteContext');
  let [h] = s.matches.slice(-1),
    m = { ...Qu(c || '.', { relative: o }) },
    S = Pl();
  if (c == null) {
    m.search = S.search;
    let x = new URLSearchParams(m.search),
      E = x.getAll('index');
    if (E.some((U) => U === '')) {
      (x.delete('index'),
        E.filter((A) => A).forEach((A) => x.append('index', A)));
      let U = x.toString();
      m.search = U ? `?${U}` : '';
    }
  }
  return (
    (!c || c === '.') &&
      h.route.index &&
      (m.search = m.search ? m.search.replace(/^\?/, '?index&') : '?index'),
    r !== '/' && (m.pathname = m.pathname === '/' ? r : al([r, m.pathname])),
    Lu(m)
  );
}
function V0(c, { relative: o } = {}) {
  let r = M.useContext(zh);
  At(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: s } = jh('useViewTransitionState'),
    h = Qu(c, { relative: o });
  if (!r.isTransitioning) return !1;
  let m = ul(r.currentLocation.pathname, s) || r.currentLocation.pathname,
    S = ul(r.nextLocation.pathname, s) || r.nextLocation.pathname;
  return ri(h.pathname, S) != null || ri(h.pathname, m) != null;
}
const K0 = () =>
    N.jsxs('nav', {
      style: {
        display: 'flex',
        gap: '20px',
        padding: '20px',
        borderBottom: '1px solid #ddd',
      },
      children: [
        N.jsx(Nl, { to: '/', children: 'Home' }),
        N.jsx(Nl, { to: '/phones', children: 'Phones' }),
        N.jsx(Nl, { to: '/tablets', children: 'Tablets' }),
        N.jsx(Nl, { to: '/accessories', children: 'Accessories' }),
        N.jsx(Nl, { to: '/favorites', children: 'Favorites' }),
        N.jsx(Nl, { to: '/cart', children: 'Cart' }),
      ],
    }),
  J0 = () => fetch('/api/phones.json').then((c) => c.json()),
  w0 = () => fetch('/api/tablets.json').then((c) => c.json()),
  $0 = () => fetch('/api/accessories.json').then((c) => c.json()),
  W0 = ({ currentPrice: c, fullPrice: o }) =>
    N.jsxs('p', {
      className: 'product-price',
      children: [
        N.jsxs('span', {
          className: 'product-price__current',
          children: ['$', c],
        }),
        N.jsxs('span', {
          className: 'product-price__full',
          children: ['$', o],
        }),
      ],
    }),
  k0 = ({
    screen: c,
    capacity: o,
    ram: r,
    resolution: s,
    showTopLine: h = !0,
  }) =>
    N.jsxs('div', {
      className: `product-features ${h ? '' : 'product-features--no-line'}`,
      children: [
        N.jsxs('p', {
          className: 'product-features__item',
          children: [
            N.jsx('span', {
              className: 'product-features__name',
              children: 'Screen',
            }),
            N.jsx('span', {
              className: 'product-features__value',
              children: c,
            }),
          ],
        }),
        s &&
          N.jsxs('p', {
            className: 'product-features__item',
            children: [
              N.jsx('span', {
                className: 'product-features__name',
                children: 'Resolution',
              }),
              N.jsx('span', {
                className: 'product-features__value',
                children: s,
              }),
            ],
          }),
        N.jsxs('p', {
          className: 'product-features__item',
          children: [
            N.jsx('span', {
              className: 'product-features__name',
              children: 'Capacity',
            }),
            N.jsx('span', {
              className: 'product-features__value',
              children: o,
            }),
          ],
        }),
        N.jsxs('p', {
          className: 'product-features__item',
          children: [
            N.jsx('span', {
              className: 'product-features__name',
              children: 'RAM',
            }),
            N.jsx('span', {
              className: 'product-features__value',
              children: r,
            }),
          ],
        }),
      ],
    }),
  F0 = ({ onAddToCart: c, onToggleFavorite: o, isFavorite: r }) =>
    N.jsxs('div', {
      className: 'product-actions',
      children: [
        N.jsx('button', {
          type: 'button',
          className: 'product-actions__add-to-cart',
          onClick: c,
          children: 'Add to cart',
        }),
        N.jsx('button', {
          'type': 'button',
          'className': 'product-actions__favorites',
          'onClick': o,
          'aria-label': r ? 'Remove from favorites' : 'Add to favorites',
        }),
      ],
    }),
  Ff = ({ product: c }) => {
    const o = c || {
      name: 'Apple iPhone 14 Pro 128GB Silver (MQ023)',
      fullPrice: 1199,
      price: 999,
      screen: '6.1" OLED',
      capacity: '128 GB',
      ram: '6 GB',
      image: '../../img/phones/apple-iphone-14-pro/spaceblack/00.webp',
    };
    return N.jsxs('div', {
      className: 'card',
      children: [
        N.jsx('div', {
          className: 'card__img-container',
          children: N.jsx('img', {
            className: 'card__image',
            src:
              o.image ||
              '../../img/phones/apple-iphone-14-pro/spaceblack/00.webp',
            alt: o.name,
            width: '208px',
            height: '196px',
          }),
        }),
        N.jsx('h2', { className: 'card__title', children: o.name }),
        N.jsx(W0, { currentPrice: o.price, fullPrice: o.fullPrice }),
        N.jsx(k0, { screen: o.screen, capacity: o.capacity, ram: o.ram }),
        N.jsx(F0, {
          onAddToCart: () => console.log('Added to cart'),
          onToggleFavorite: () => console.log('Toggled favorite'),
        }),
      ],
    });
  },
  I0 = '_title_1fpwi_21',
  Hu = {
    'phones-page': '_phones-page_1fpwi_1',
    'phones-page__list': '_phones-page__list_1fpwi_4',
    'title': I0,
  },
  P0 = () => {
    const [c, o] = M.useState([]);
    return (
      M.useEffect(() => {
        (async () => {
          const s = await J0();
          o(s);
        })();
      }, []),
      N.jsxs('div', {
        className: Hu['phones-page'],
        children: [
          N.jsx('h1', { className: Hu.title, children: 'Mobile phones' }),
          N.jsx('section', { className: Hu['phones-page__controls'] }),
          N.jsx('section', {
            className: Hu['phones-page__list'],
            children: c.map((r) => N.jsx(Ff, {}, r.id)),
          }),
          N.jsx('section', { className: Hu['phones-page__pagination'] }),
        ],
      })
    );
  },
  t1 = '_title_16mok_21',
  Bu = {
    'accessories-page': '_accessories-page_16mok_1',
    'accessories-page__list': '_accessories-page__list_16mok_4',
    'title': t1,
  },
  e1 = () => {
    const [c, o] = M.useState([]);
    return (
      M.useEffect(() => {
        (async () => {
          const s = await $0();
          o(s);
        })();
      }, []),
      N.jsxs('div', {
        className: Bu['accessories-page'],
        children: [
          N.jsx('h1', { className: Bu.title, children: 'Accessories' }),
          N.jsx('section', { className: Bu['accessories-page__controls'] }),
          N.jsx('section', {
            className: Bu['accessories-page__list'],
            children: c.map((r) => N.jsx(Ff, {}, r.id)),
          }),
          N.jsx('section', { className: Bu['accessories-page__pagination'] }),
        ],
      })
    );
  },
  l1 = '_cart_1fr8z_8',
  a1 = '_title_1fr8z_25',
  u1 = '_cartContent_1fr8z_45',
  n1 = '_products_1fr8z_71',
  i1 = '_summary_1fr8z_82',
  qu = { cart: l1, title: a1, cartContent: u1, products: n1, summary: i1 },
  c1 = '_block_1xzjy_1',
  f1 = '_price_1xzjy_7',
  s1 = '_info_1xzjy_17',
  o1 = '_button_1xzjy_24',
  r1 = '_buttonCheck_1xzjy_33',
  Yu = { block: c1, price: f1, info: s1, button: o1, buttonCheck: r1 },
  d1 = () =>
    N.jsxs('div', {
      className: Yu.block,
      children: [
        N.jsx('h2', { className: Yu.price, children: '$2656' }),
        N.jsx('p', { className: Yu.info, children: 'Total for 3 items' }),
        N.jsx('div', {
          className: Yu.button,
          children: N.jsx('button', {
            className: Yu.buttonCheck,
            children: 'Checkout',
          }),
        }),
      ],
    }),
  h1 = '_item_18h8g_1',
  m1 = '_remove_18h8g_19',
  y1 = '_imageWrapper_18h8g_37',
  v1 = '_image_18h8g_37',
  g1 = '_details_18h8g_57',
  p1 = '_name_18h8g_68',
  S1 = '_controls_18h8g_76',
  b1 = '_quantity_18h8g_91',
  E1 = '_btnPlus_18h8g_102',
  _1 = '_btnMinus_18h8g_112',
  T1 = '_count_18h8g_122',
  z1 = '_price_18h8g_128',
  ze = {
    item: h1,
    remove: m1,
    imageWrapper: y1,
    image: v1,
    details: g1,
    name: p1,
    controls: S1,
    quantity: b1,
    btnPlus: E1,
    btnMinus: _1,
    count: T1,
    price: z1,
  },
  Qf = () =>
    N.jsxs('div', {
      className: ze.item,
      children: [
        N.jsx('button', {
          className: ze.remove,
          type: 'button',
          children: 'x',
        }),
        N.jsx('div', {
          className: ze.imageWrapper,
          children: N.jsx('img', {
            src: '/img/phones/apple-iphone-14-pro/spaceblack/00.webp',
            alt: 'Apple iPhone 14 Pro',
            className: ze.image,
          }),
        }),
        N.jsx('div', {
          className: ze.details,
          children: N.jsx('h3', {
            className: ze.name,
            children: 'Apple iPhone 14 Pro 128GB Silver (MQ023)',
          }),
        }),
        N.jsxs('div', {
          className: ze.controls,
          children: [
            N.jsxs('div', {
              className: ze.quantity,
              children: [
                N.jsx('button', { className: ze.btnMinus, children: '-' }),
                N.jsx('span', { className: ze.count, children: '1' }),
                N.jsx('button', { className: ze.btnPlus, children: '+' }),
              ],
            }),
            N.jsx('p', { className: ze.price, children: '$999' }),
          ],
        }),
      ],
    }),
  A1 = () =>
    N.jsx('div', {
      className: 'buttonBack',
      children: N.jsx('a', {
        className: 'buttonBackLink',
        href: '#',
        children: 'Back',
      }),
    }),
  R1 = () =>
    N.jsxs('div', {
      className: qu.cart,
      children: [
        N.jsx(A1, {}),
        N.jsx('div', {
          className: qu.title,
          children: N.jsx('h1', { children: 'Cart' }),
        }),
        N.jsxs('div', {
          className: qu.cartContent,
          children: [
            N.jsxs('div', {
              className: qu.products,
              children: [N.jsx(Qf, {}), N.jsx(Qf, {}), N.jsx(Qf, {})],
            }),
            N.jsx('div', { className: qu.summary, children: N.jsx(d1, {}) }),
          ],
        }),
      ],
    }),
  O1 = () =>
    N.jsxs('div', {
      className: 'notFound',
      children: [
        N.jsx('h1', { className: 'title', children: 'Помилка 404' }),
        N.jsx('h2', {
          className: 'title__message',
          children: 'Сторінка не знайдена',
        }),
      ],
    }),
  M1 = '_title_v3hkh_4',
  x1 = '_controls_v3hkh_17',
  D1 = '_control_v3hkh_17',
  N1 = '_label_v3hkh_26',
  C1 = '_select_v3hkh_30',
  Ae = {
    'tablets-page': '_tablets-page_v3hkh_1',
    'title': M1,
    'tablets-page__controls': '_tablets-page__controls_v3hkh_14',
    'controls': x1,
    'control': D1,
    'label': N1,
    'select': C1,
    'tablets-page__list': '_tablets-page__list_v3hkh_40',
  },
  U1 = () => {
    const [c, o] = M.useState([]);
    return (
      M.useEffect(() => {
        (async () => {
          const s = await w0();
          o(s);
        })();
      }, []),
      N.jsxs('div', {
        className: Ae['tablets-page'],
        children: [
          N.jsx('h1', { className: Ae.title, children: 'Tablets' }),
          N.jsx('section', {
            className: Ae['tablets-page__controls'],
            children: N.jsxs('div', {
              className: Ae.controls,
              children: [
                N.jsxs('div', {
                  className: Ae.control,
                  children: [
                    N.jsx('label', {
                      className: Ae.label,
                      children: 'Sort by',
                    }),
                    N.jsxs('select', {
                      className: Ae.select,
                      children: [
                        N.jsx('option', { children: 'Newest' }),
                        N.jsx('option', { children: 'Alphabetically' }),
                        N.jsx('option', { children: 'Cheapest' }),
                      ],
                    }),
                  ],
                }),
                N.jsxs('div', {
                  className: Ae.control,
                  children: [
                    N.jsx('label', {
                      className: Ae.label,
                      children: 'Items on page',
                    }),
                    N.jsxs('select', {
                      className: Ae.select,
                      children: [
                        N.jsx('option', { children: '16' }),
                        N.jsx('option', { children: '32' }),
                        N.jsx('option', { children: '64' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          N.jsx('section', {
            className: Ae['tablets-page__list'],
            children: c.map((r) => N.jsx(Ff, {}, r.id)),
          }),
          N.jsx('section', { className: Ae['tablets-page__pagination'] }),
        ],
      })
    );
  },
  j1 = () =>
    N.jsxs('div', {
      className: 'App',
      children: [
        N.jsx(K0, {}),
        N.jsx('div', {
          className: 'container',
          children: N.jsxs(r0, {
            children: [
              N.jsx(ll, {
                path: '/',
                element: N.jsx('h1', { children: 'Home Page (Coming soon)' }),
              }),
              N.jsx(ll, { path: '/phones', element: N.jsx(P0, {}) }),
              N.jsx(ll, { path: '/tablets', element: N.jsx(U1, {}) }),
              N.jsx(ll, { path: '/accessories', element: N.jsx(e1, {}) }),
              N.jsx(ll, { path: '/cart', element: N.jsx(R1, {}) }),
              N.jsx(ll, {
                path: '/favorites',
                element: N.jsx('h1', {
                  className: 'title',
                  children: 'Favorites',
                }),
              }),
              N.jsx(ll, {
                path: '/product/:productId',
                element: N.jsx('h1', {
                  className: 'title',
                  children: 'Product Details',
                }),
              }),
              N.jsx(ll, { path: '*', element: N.jsx(O1, {}) }),
            ],
          }),
        }),
      ],
    });
hv.createRoot(document.getElementById('root')).render(
  N.jsx(H0, { children: N.jsx(j1, {}) }),
);
