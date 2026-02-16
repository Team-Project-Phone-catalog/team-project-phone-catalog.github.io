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
var Yf = { exports: {} },
  Gn = {};
var fh;
function m1() {
  if (fh) return Gn;
  fh = 1;
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
var sh;
function v1() {
  return (sh || ((sh = 1), (Yf.exports = m1())), Yf.exports);
}
var d = v1(),
  Lf = { exports: {} },
  Xn = {},
  Gf = { exports: {} },
  Xf = {};
var oh;
function y1() {
  return (
    oh ||
      ((oh = 1),
      (function (c) {
        function o(R, H) {
          var W = R.length;
          R.push(H);
          t: for (; 0 < W; ) {
            var vt = (W - 1) >>> 1,
              pt = R[vt];
            if (0 < m(pt, H)) ((R[vt] = H), (R[W] = pt), (W = vt));
            else break t;
          }
        }
        function r(R) {
          return R.length === 0 ? null : R[0];
        }
        function f(R) {
          if (R.length === 0) return null;
          var H = R[0],
            W = R.pop();
          if (W !== H) {
            R[0] = W;
            t: for (var vt = 0, pt = R.length, _ = pt >>> 1; vt < _; ) {
              var U = 2 * (vt + 1) - 1,
                B = R[U],
                X = U + 1,
                tt = R[X];
              if (0 > m(B, W))
                X < pt && 0 > m(tt, B) ?
                  ((R[vt] = tt), (R[X] = W), (vt = X))
                : ((R[vt] = B), (R[U] = W), (vt = U));
              else if (X < pt && 0 > m(tt, W))
                ((R[vt] = tt), (R[X] = W), (vt = X));
              else break t;
            }
          }
          return H;
        }
        function m(R, H) {
          var W = R.sortIndex - H.sortIndex;
          return W !== 0 ? W : R.id - H.id;
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
          g = [],
          D = 1,
          z = null,
          q = 3,
          Z = !1,
          F = !1,
          V = !1,
          G = !1,
          K = typeof setTimeout == 'function' ? setTimeout : null,
          L = typeof clearTimeout == 'function' ? clearTimeout : null,
          k = typeof setImmediate < 'u' ? setImmediate : null;
        function Et(R) {
          for (var H = r(g); H !== null; ) {
            if (H.callback === null) f(g);
            else if (H.startTime <= R)
              (f(g), (H.sortIndex = H.expirationTime), o(S, H));
            else break;
            H = r(g);
          }
        }
        function St(R) {
          if (((V = !1), Et(R), !F))
            if (r(S) !== null) ((F = !0), At || ((At = !0), It()));
            else {
              var H = r(g);
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
                ((F = !1), V && ((V = !1), L(P), (P = -1)), (Z = !0));
                var W = q;
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
                      var _ = r(g);
                      (_ !== null && Me(St, _.startTime - R), (H = !1));
                    }
                  }
                  break t;
                } finally {
                  ((z = null), (q = W), (Z = !1));
                }
                H = void 0;
              }
            } finally {
              H ? It() : (At = !1);
            }
          }
        }
        var It;
        if (typeof k == 'function')
          It = function () {
            k(qe);
          };
        else if (typeof MessageChannel < 'u') {
          var Bl = new MessageChannel(),
            Qe = Bl.port2;
          ((Bl.port1.onmessage = qe),
            (It = function () {
              Qe.postMessage(null);
            }));
        } else
          It = function () {
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
            var W = q;
            q = H;
            try {
              return R();
            } finally {
              q = W;
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
            var W = q;
            q = R;
            try {
              return H();
            } finally {
              q = W;
            }
          }),
          (c.unstable_scheduleCallback = function (R, H, W) {
            var vt = c.unstable_now();
            switch (
              (typeof W == 'object' && W !== null ?
                ((W = W.delay),
                (W = typeof W == 'number' && 0 < W ? vt + W : vt))
              : (W = vt),
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
              (pt = W + pt),
              (R = {
                id: D++,
                callback: H,
                priorityLevel: R,
                startTime: W,
                expirationTime: pt,
                sortIndex: -1,
              }),
              W > vt ?
                ((R.sortIndex = W),
                o(g, R),
                r(S) === null &&
                  R === r(g) &&
                  (V ? (L(P), (P = -1)) : (V = !0), Me(St, W - vt)))
              : ((R.sortIndex = pt),
                o(S, R),
                F || Z || ((F = !0), At || ((At = !0), It()))),
              R
            );
          }),
          (c.unstable_shouldYield = pe),
          (c.unstable_wrapCallback = function (R) {
            var H = q;
            return function () {
              var W = q;
              q = H;
              try {
                return R.apply(this, arguments);
              } finally {
                q = W;
              }
            };
          }));
      })(Xf)),
    Xf
  );
}
var rh;
function _1() {
  return (rh || ((rh = 1), (Gf.exports = y1())), Gf.exports);
}
var Qf = { exports: {} },
  I = {};
var dh;
function g1() {
  if (dh) return I;
  dh = 1;
  var c = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.portal'),
    r = Symbol.for('react.fragment'),
    f = Symbol.for('react.strict_mode'),
    m = Symbol.for('react.profiler'),
    v = Symbol.for('react.consumer'),
    b = Symbol.for('react.context'),
    j = Symbol.for('react.forward_ref'),
    S = Symbol.for('react.suspense'),
    g = Symbol.for('react.memo'),
    D = Symbol.for('react.lazy'),
    z = Symbol.for('react.activity'),
    q = Symbol.iterator;
  function Z(_) {
    return _ === null || typeof _ != 'object' ?
        null
      : ((_ = (q && _[q]) || _['@@iterator']),
        typeof _ == 'function' ? _ : null);
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
  function K(_, U, B) {
    ((this.props = _),
      (this.context = U),
      (this.refs = G),
      (this.updater = B || F));
  }
  ((K.prototype.isReactComponent = {}),
    (K.prototype.setState = function (_, U) {
      if (typeof _ != 'object' && typeof _ != 'function' && _ != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, _, U, 'setState');
    }),
    (K.prototype.forceUpdate = function (_) {
      this.updater.enqueueForceUpdate(this, _, 'forceUpdate');
    }));
  function L() {}
  L.prototype = K.prototype;
  function k(_, U, B) {
    ((this.props = _),
      (this.context = U),
      (this.refs = G),
      (this.updater = B || F));
  }
  var Et = (k.prototype = new L());
  ((Et.constructor = k), V(Et, K.prototype), (Et.isPureReactComponent = !0));
  var St = Array.isArray;
  function At() {}
  var P = { H: null, A: null, T: null, S: null },
    Rt = Object.prototype.hasOwnProperty;
  function Qt(_, U, B) {
    var X = B.ref;
    return {
      $$typeof: c,
      type: _,
      key: U,
      ref: X !== void 0 ? X : null,
      props: B,
    };
  }
  function pe(_, U) {
    return Qt(_.type, U, _.props);
  }
  function qe(_) {
    return typeof _ == 'object' && _ !== null && _.$$typeof === c;
  }
  function It(_) {
    var U = { '=': '=0', ':': '=2' };
    return (
      '$' +
      _.replace(/[=:]/g, function (B) {
        return U[B];
      })
    );
  }
  var Bl = /\/+/g;
  function Qe(_, U) {
    return typeof _ == 'object' && _ !== null && _.key != null ?
        It('' + _.key)
      : U.toString(36);
  }
  function Me(_) {
    switch (_.status) {
      case 'fulfilled':
        return _.value;
      case 'rejected':
        throw _.reason;
      default:
        switch (
          (typeof _.status == 'string' ?
            _.then(At, At)
          : ((_.status = 'pending'),
            _.then(
              function (U) {
                _.status === 'pending' &&
                  ((_.status = 'fulfilled'), (_.value = U));
              },
              function (U) {
                _.status === 'pending' &&
                  ((_.status = 'rejected'), (_.reason = U));
              },
            )),
          _.status)
        ) {
          case 'fulfilled':
            return _.value;
          case 'rejected':
            throw _.reason;
        }
    }
    throw _;
  }
  function R(_, U, B, X, tt) {
    var at = typeof _;
    (at === 'undefined' || at === 'boolean') && (_ = null);
    var dt = !1;
    if (_ === null) dt = !0;
    else
      switch (at) {
        case 'bigint':
        case 'string':
        case 'number':
          dt = !0;
          break;
        case 'object':
          switch (_.$$typeof) {
            case c:
            case o:
              dt = !0;
              break;
            case D:
              return ((dt = _._init), R(dt(_._payload), U, B, X, tt));
          }
      }
    if (dt)
      return (
        (tt = tt(_)),
        (dt = X === '' ? '.' + Qe(_, 0) : X),
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
                (tt.key == null || (_ && _.key === tt.key) ?
                  ''
                : ('' + tt.key).replace(Bl, '$&/') + '/') +
                dt,
            )),
          U.push(tt)),
        1
      );
    dt = 0;
    var kt = X === '' ? '.' : X + ':';
    if (St(_))
      for (var Ot = 0; Ot < _.length; Ot++)
        ((X = _[Ot]), (at = kt + Qe(X, Ot)), (dt += R(X, U, B, at, tt)));
    else if (((Ot = Z(_)), typeof Ot == 'function'))
      for (_ = Ot.call(_), Ot = 0; !(X = _.next()).done; )
        ((X = X.value), (at = kt + Qe(X, Ot++)), (dt += R(X, U, B, at, tt)));
    else if (at === 'object') {
      if (typeof _.then == 'function') return R(Me(_), U, B, X, tt);
      throw (
        (U = String(_)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (U === '[object Object]' ?
              'object with keys {' + Object.keys(_).join(', ') + '}'
            : U) +
            '). If you meant to render a collection of children, use an array instead.',
        )
      );
    }
    return dt;
  }
  function H(_, U, B) {
    if (_ == null) return _;
    var X = [],
      tt = 0;
    return (
      R(_, X, '', '', function (at) {
        return U.call(B, at, tt++);
      }),
      X
    );
  }
  function W(_) {
    if (_._status === -1) {
      var U = _._result;
      ((U = U()),
        U.then(
          function (B) {
            (_._status === 0 || _._status === -1) &&
              ((_._status = 1), (_._result = B));
          },
          function (B) {
            (_._status === 0 || _._status === -1) &&
              ((_._status = 2), (_._result = B));
          },
        ),
        _._status === -1 && ((_._status = 0), (_._result = U)));
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var vt =
      typeof reportError == 'function' ? reportError : (
        function (_) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var U = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                (
                  typeof _ == 'object' &&
                  _ !== null &&
                  typeof _.message == 'string'
                ) ?
                  String(_.message)
                : String(_),
              error: _,
            });
            if (!window.dispatchEvent(U)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', _);
            return;
          }
          console.error(_);
        }
      ),
    pt = {
      map: H,
      forEach: function (_, U, B) {
        H(
          _,
          function () {
            U.apply(this, arguments);
          },
          B,
        );
      },
      count: function (_) {
        var U = 0;
        return (
          H(_, function () {
            U++;
          }),
          U
        );
      },
      toArray: function (_) {
        return (
          H(_, function (U) {
            return U;
          }) || []
        );
      },
      only: function (_) {
        if (!qe(_))
          throw Error(
            'React.Children.only expected to receive a single React element child.',
          );
        return _;
      },
    };
  return (
    (I.Activity = z),
    (I.Children = pt),
    (I.Component = K),
    (I.Fragment = r),
    (I.Profiler = m),
    (I.PureComponent = k),
    (I.StrictMode = f),
    (I.Suspense = S),
    (I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P),
    (I.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (_) {
        return P.H.useMemoCache(_);
      },
    }),
    (I.cache = function (_) {
      return function () {
        return _.apply(null, arguments);
      };
    }),
    (I.cacheSignal = function () {
      return null;
    }),
    (I.cloneElement = function (_, U, B) {
      if (_ == null)
        throw Error(
          'The argument must be a React element, but you passed ' + _ + '.',
        );
      var X = V({}, _.props),
        tt = _.key;
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
        for (var dt = Array(at), kt = 0; kt < at; kt++)
          dt[kt] = arguments[kt + 2];
        X.children = dt;
      }
      return Qt(_.type, tt, X);
    }),
    (I.createContext = function (_) {
      return (
        (_ = {
          $$typeof: b,
          _currentValue: _,
          _currentValue2: _,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (_.Provider = _),
        (_.Consumer = { $$typeof: v, _context: _ }),
        _
      );
    }),
    (I.createElement = function (_, U, B) {
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
        for (var kt = Array(dt), Ot = 0; Ot < dt; Ot++)
          kt[Ot] = arguments[Ot + 2];
        tt.children = kt;
      }
      if (_ && _.defaultProps)
        for (X in ((dt = _.defaultProps), dt))
          tt[X] === void 0 && (tt[X] = dt[X]);
      return Qt(_, at, tt);
    }),
    (I.createRef = function () {
      return { current: null };
    }),
    (I.forwardRef = function (_) {
      return { $$typeof: j, render: _ };
    }),
    (I.isValidElement = qe),
    (I.lazy = function (_) {
      return { $$typeof: D, _payload: { _status: -1, _result: _ }, _init: W };
    }),
    (I.memo = function (_, U) {
      return { $$typeof: g, type: _, compare: U === void 0 ? null : U };
    }),
    (I.startTransition = function (_) {
      var U = P.T,
        B = {};
      P.T = B;
      try {
        var X = _(),
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
    (I.use = function (_) {
      return P.H.use(_);
    }),
    (I.useActionState = function (_, U, B) {
      return P.H.useActionState(_, U, B);
    }),
    (I.useCallback = function (_, U) {
      return P.H.useCallback(_, U);
    }),
    (I.useContext = function (_) {
      return P.H.useContext(_);
    }),
    (I.useDebugValue = function () {}),
    (I.useDeferredValue = function (_, U) {
      return P.H.useDeferredValue(_, U);
    }),
    (I.useEffect = function (_, U) {
      return P.H.useEffect(_, U);
    }),
    (I.useEffectEvent = function (_) {
      return P.H.useEffectEvent(_);
    }),
    (I.useId = function () {
      return P.H.useId();
    }),
    (I.useImperativeHandle = function (_, U, B) {
      return P.H.useImperativeHandle(_, U, B);
    }),
    (I.useInsertionEffect = function (_, U) {
      return P.H.useInsertionEffect(_, U);
    }),
    (I.useLayoutEffect = function (_, U) {
      return P.H.useLayoutEffect(_, U);
    }),
    (I.useMemo = function (_, U) {
      return P.H.useMemo(_, U);
    }),
    (I.useOptimistic = function (_, U) {
      return P.H.useOptimistic(_, U);
    }),
    (I.useReducer = function (_, U, B) {
      return P.H.useReducer(_, U, B);
    }),
    (I.useRef = function (_) {
      return P.H.useRef(_);
    }),
    (I.useState = function (_) {
      return P.H.useState(_);
    }),
    (I.useSyncExternalStore = function (_, U, B) {
      return P.H.useSyncExternalStore(_, U, B);
    }),
    (I.useTransition = function () {
      return P.H.useTransition();
    }),
    (I.version = '19.2.4'),
    I
  );
}
var hh;
function Wf() {
  return (hh || ((hh = 1), (Qf.exports = g1())), Qf.exports);
}
var Zf = { exports: {} },
  $t = {};
var mh;
function p1() {
  if (mh) return $t;
  mh = 1;
  var c = Wf();
  function o(S) {
    var g = 'https://react.dev/errors/' + S;
    if (1 < arguments.length) {
      g += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var D = 2; D < arguments.length; D++)
        g += '&args[]=' + encodeURIComponent(arguments[D]);
    }
    return (
      'Minified React error #' +
      S +
      '; visit ' +
      g +
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
  function v(S, g, D) {
    var z =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: m,
      key: z == null ? null : '' + z,
      children: S,
      containerInfo: g,
      implementation: D,
    };
  }
  var b = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function j(S, g) {
    if (S === 'font') return '';
    if (typeof g == 'string') return g === 'use-credentials' ? g : '';
  }
  return (
    ($t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
    ($t.createPortal = function (S, g) {
      var D =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(o(299));
      return v(S, g, null, D);
    }),
    ($t.flushSync = function (S) {
      var g = b.T,
        D = f.p;
      try {
        if (((b.T = null), (f.p = 2), S)) return S();
      } finally {
        ((b.T = g), (f.p = D), f.d.f());
      }
    }),
    ($t.preconnect = function (S, g) {
      typeof S == 'string' &&
        (g ?
          ((g = g.crossOrigin),
          (g =
            typeof g == 'string' ?
              g === 'use-credentials' ?
                g
              : ''
            : void 0))
        : (g = null),
        f.d.C(S, g));
    }),
    ($t.prefetchDNS = function (S) {
      typeof S == 'string' && f.d.D(S);
    }),
    ($t.preinit = function (S, g) {
      if (typeof S == 'string' && g && typeof g.as == 'string') {
        var D = g.as,
          z = j(D, g.crossOrigin),
          q = typeof g.integrity == 'string' ? g.integrity : void 0,
          Z = typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0;
        D === 'style' ?
          f.d.S(S, typeof g.precedence == 'string' ? g.precedence : void 0, {
            crossOrigin: z,
            integrity: q,
            fetchPriority: Z,
          })
        : D === 'script' &&
          f.d.X(S, {
            crossOrigin: z,
            integrity: q,
            fetchPriority: Z,
            nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
          });
      }
    }),
    ($t.preinitModule = function (S, g) {
      if (typeof S == 'string')
        if (typeof g == 'object' && g !== null) {
          if (g.as == null || g.as === 'script') {
            var D = j(g.as, g.crossOrigin);
            f.d.M(S, {
              crossOrigin: D,
              integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
              nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
            });
          }
        } else g == null && f.d.M(S);
    }),
    ($t.preload = function (S, g) {
      if (
        typeof S == 'string' &&
        typeof g == 'object' &&
        g !== null &&
        typeof g.as == 'string'
      ) {
        var D = g.as,
          z = j(D, g.crossOrigin);
        f.d.L(S, D, {
          crossOrigin: z,
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
    ($t.preloadModule = function (S, g) {
      if (typeof S == 'string')
        if (g) {
          var D = j(g.as, g.crossOrigin);
          f.d.m(S, {
            as: typeof g.as == 'string' && g.as !== 'script' ? g.as : void 0,
            crossOrigin: D,
            integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
          });
        } else f.d.m(S);
    }),
    ($t.requestFormReset = function (S) {
      f.d.r(S);
    }),
    ($t.unstable_batchedUpdates = function (S, g) {
      return S(g);
    }),
    ($t.useFormState = function (S, g, D) {
      return b.H.useFormState(S, g, D);
    }),
    ($t.useFormStatus = function () {
      return b.H.useHostTransitionStatus();
    }),
    ($t.version = '19.2.4'),
    $t
  );
}
var vh;
function b1() {
  if (vh) return Zf.exports;
  vh = 1;
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
  return (c(), (Zf.exports = p1()), Zf.exports);
}
var yh;
function S1() {
  if (yh) return Xn;
  yh = 1;
  var c = _1(),
    o = Wf(),
    r = b1();
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
  function g(t) {
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
  function D(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = D(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var z = Object.assign,
    q = Symbol.for('react.element'),
    Z = Symbol.for('react.transitional.element'),
    F = Symbol.for('react.portal'),
    V = Symbol.for('react.fragment'),
    G = Symbol.for('react.strict_mode'),
    K = Symbol.for('react.profiler'),
    L = Symbol.for('react.consumer'),
    k = Symbol.for('react.context'),
    Et = Symbol.for('react.forward_ref'),
    St = Symbol.for('react.suspense'),
    At = Symbol.for('react.suspense_list'),
    P = Symbol.for('react.memo'),
    Rt = Symbol.for('react.lazy'),
    Qt = Symbol.for('react.activity'),
    pe = Symbol.for('react.memo_cache_sentinel'),
    qe = Symbol.iterator;
  function It(t) {
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
      case V:
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
        case k:
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
    W = { pending: !1, data: null, method: null, action: null },
    vt = [],
    pt = -1;
  function _(t) {
    return { current: t };
  }
  function U(t) {
    0 > pt || ((t.current = vt[pt]), (vt[pt] = null), pt--);
  }
  function B(t, e) {
    (pt++, (vt[pt] = t.current), (t.current = e));
  }
  var X = _(null),
    tt = _(null),
    at = _(null),
    dt = _(null);
  function kt(t, e) {
    switch ((B(at, e), B(tt, t), B(X, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Od(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = Od(e)), (t = Md(e, t)));
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
      l = Md(e, t.type);
    e !== l && (B(tt, t), B(X, l));
  }
  function kn(t) {
    (tt.current === t && (U(X), U(tt)),
      dt.current === t && (U(dt), (Bn._currentValue = W)));
  }
  var pi, is;
  function ql(t) {
    if (pi === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        ((pi = (e && e[1]) || ''),
          (is =
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
      pi +
      t +
      is
    );
  }
  var bi = !1;
  function Si(t, e) {
    if (!t || bi) return '';
    bi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var M = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(M.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(M, []);
                } catch (N) {
                  var T = N;
                }
                Reflect.construct(t, [], M);
              } else {
                try {
                  M.call();
                } catch (N) {
                  T = N;
                }
                t.call(M.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                T = N;
              }
              (M = t()) &&
                typeof M.catch == 'function' &&
                M.catch(function () {});
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
      ((bi = !1), (Error.prepareStackTrace = l));
    }
    return (l = t ? t.displayName || t.name : '') ? ql(l) : '';
  }
  function wh(t, e) {
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
        return Si(t.type, !1);
      case 11:
        return Si(t.type.render, !1);
      case 1:
        return Si(t.type, !0);
      case 31:
        return ql('Activity');
      default:
        return '';
    }
  }
  function cs(t) {
    try {
      var e = '',
        l = null;
      do ((e += wh(t, l)), (l = t), (t = t.return));
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
  var Ei = Object.prototype.hasOwnProperty,
    xi = c.unstable_scheduleCallback,
    Ti = c.unstable_cancelCallback,
    Kh = c.unstable_shouldYield,
    Jh = c.unstable_requestPaint,
    ie = c.unstable_now,
    $h = c.unstable_getCurrentPriorityLevel,
    fs = c.unstable_ImmediatePriority,
    ss = c.unstable_UserBlockingPriority,
    Wn = c.unstable_NormalPriority,
    kh = c.unstable_LowPriority,
    os = c.unstable_IdlePriority,
    Wh = c.log,
    Fh = c.unstable_setDisableYieldValue,
    Ja = null,
    ce = null;
  function rl(t) {
    if (
      (typeof Wh == 'function' && Fh(t),
      ce && typeof ce.setStrictMode == 'function')
    )
      try {
        ce.setStrictMode(Ja, t);
      } catch {}
  }
  var fe = Math.clz32 ? Math.clz32 : t0,
    Ih = Math.log,
    Ph = Math.LN2;
  function t0(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Ih(t) / Ph) | 0)) | 0);
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
  function e0(t, e) {
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
  function rs() {
    var t = Pn;
    return ((Pn <<= 1), (Pn & 62914560) === 0 && (Pn = 4194304), t);
  }
  function zi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function ka(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function l0(t, e, l, a, n, u) {
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
      var C = 31 - fe(l),
        M = 1 << C;
      ((s[C] = 0), (h[C] = -1));
      var T = x[C];
      if (T !== null)
        for (x[C] = null, C = 0; C < T.length; C++) {
          var N = T[C];
          N !== null && (N.lane &= -536870913);
        }
      l &= ~M;
    }
    (a !== 0 && ds(t, a, 0),
      u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e)));
  }
  function ds(t, e, l) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var a = 31 - fe(e);
    ((t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 261930)));
  }
  function hs(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var a = 31 - fe(l),
        n = 1 << a;
      ((n & e) | (t[a] & e) && (t[a] |= e), (l &= ~n));
    }
  }
  function ms(t, e) {
    var l = e & -e;
    return (
      (l = (l & 42) !== 0 ? 1 : Ni(l)),
      (l & (t.suspendedLanes | e)) !== 0 ? 0 : l
    );
  }
  function Ni(t) {
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
  function Ai(t) {
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
  function vs() {
    var t = H.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : eh(t.type));
  }
  function ys(t, e) {
    var l = H.p;
    try {
      return ((H.p = t), e());
    } finally {
      H.p = l;
    }
  }
  var dl = Math.random().toString(36).slice(2),
    Zt = '__reactFiber$' + dl,
    Pt = '__reactProps$' + dl,
    ua = '__reactContainer$' + dl,
    Ci = '__reactEvents$' + dl,
    a0 = '__reactListeners$' + dl,
    n0 = '__reactHandles$' + dl,
    _s = '__reactResources$' + dl,
    Wa = '__reactMarker$' + dl;
  function ji(t) {
    (delete t[Zt], delete t[Pt], delete t[Ci], delete t[a0], delete t[n0]);
  }
  function ia(t) {
    var e = t[Zt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[ua] || l[Zt])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = Ld(t); t !== null; ) {
            if ((l = t[Zt])) return l;
            t = Ld(t);
          }
        return e;
      }
      ((t = l), (l = t.parentNode));
    }
    return null;
  }
  function ca(t) {
    if ((t = t[Zt] || t[ua])) {
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
    var e = t[_s];
    return (
      e ||
        (e = t[_s] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Gt(t) {
    t[Wa] = !0;
  }
  var gs = new Set(),
    ps = {};
  function Ll(t, e) {
    (sa(t, e), sa(t + 'Capture', e));
  }
  function sa(t, e) {
    for (ps[t] = e, t = 0; t < e.length; t++) gs.add(e[t]);
  }
  var u0 = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    bs = {},
    Ss = {};
  function i0(t) {
    return (
      Ei.call(Ss, t) ? !0
      : Ei.call(bs, t) ? !1
      : u0.test(t) ? (Ss[t] = !0)
      : ((bs[t] = !0), !1)
    );
  }
  function eu(t, e, l) {
    if (i0(e))
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
  function Ze(t, e, l, a) {
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
  function Es(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === 'input' &&
      (e === 'checkbox' || e === 'radio')
    );
  }
  function c0(t, e, l) {
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
  function Ri(t) {
    if (!t._valueTracker) {
      var e = Es(t) ? 'checked' : 'value';
      t._valueTracker = c0(t, e, '' + t[e]);
    }
  }
  function xs(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      a = '';
    return (
      t &&
        (a =
          Es(t) ?
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
  var f0 = /[\n"\\]/g;
  function Se(t) {
    return t.replace(f0, function (e) {
      return '\\' + e.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Oi(t, e, l, a, n, u, i, s) {
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
      e != null ? Mi(t, i, be(e))
      : l != null ? Mi(t, i, be(l))
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
  function Ts(t, e, l, a, n, u, i, s) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (t.type = u),
      e != null || l != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || e != null)) {
        Ri(t);
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
      Ri(t));
  }
  function Mi(t, e, l) {
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
  function zs(t, e, l) {
    if (
      e != null &&
      ((e = '' + be(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? '' + be(l) : '';
  }
  function Ns(t, e, l, a) {
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
      Ri(t));
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
  var s0 = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' ',
    ),
  );
  function As(t, e, l) {
    var a = e.indexOf('--') === 0;
    l == null || typeof l == 'boolean' || l === '' ?
      a ? t.setProperty(e, '')
      : e === 'float' ? (t.cssFloat = '')
      : (t[e] = '')
    : a ? t.setProperty(e, l)
    : typeof l != 'number' || l === 0 || s0.has(e) ?
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
        ((a = e[n]), e.hasOwnProperty(n) && l[n] !== a && As(t, n, a));
    } else for (var u in e) e.hasOwnProperty(u) && As(t, u, e[u]);
  }
  function Di(t) {
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
  var o0 = new Map([
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
    r0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function nu(t) {
    return r0.test('' + t) ?
        "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Ve() {}
  var Ui = null;
  function Hi(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var da = null,
    ha = null;
  function js(t) {
    var e = ca(t);
    if (e && (t = e.stateNode)) {
      var l = t[Pt] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case 'input':
          if (
            (Oi(
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
                var n = a[Pt] || null;
                if (!n) throw Error(f(90));
                Oi(
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
              ((a = l[e]), a.form === t.form && xs(a));
          }
          break t;
        case 'textarea':
          zs(t, l.value, l.defaultValue);
          break t;
        case 'select':
          ((e = l.value), e != null && oa(t, !!l.multiple, e, !1));
      }
    }
  }
  var Bi = !1;
  function Rs(t, e, l) {
    if (Bi) return t(e, l);
    Bi = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((Bi = !1),
        (da !== null || ha !== null) &&
          (wu(), da && ((e = da), (t = ha), (ha = da = null), js(e), t)))
      )
        for (e = 0; e < t.length; e++) js(t[e]);
    }
  }
  function Ia(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[Pt] || null;
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
  var we = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    qi = !1;
  if (we)
    try {
      var Pa = {};
      (Object.defineProperty(Pa, 'passive', {
        get: function () {
          qi = !0;
        },
      }),
        window.addEventListener('test', Pa, Pa),
        window.removeEventListener('test', Pa, Pa));
    } catch {
      qi = !1;
    }
  var hl = null,
    Yi = null,
    uu = null;
  function Os() {
    if (uu) return uu;
    var t,
      e = Yi,
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
  function Ms() {
    return !1;
  }
  function te(t) {
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
          : Ms),
        (this.isPropagationStopped = Ms),
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
    fu = te(Gl),
    tn = z({}, Gl, { view: 0, detail: 0 }),
    d0 = te(tn),
    Li,
    Gi,
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
      getModifierState: Qi,
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
                ((Li = t.screenX - en.screenX), (Gi = t.screenY - en.screenY))
              : (Gi = Li = 0),
              (en = t)),
            Li);
      },
      movementY: function (t) {
        return 'movementY' in t ? t.movementY : Gi;
      },
    }),
    Ds = te(su),
    h0 = z({}, su, { dataTransfer: 0 }),
    m0 = te(h0),
    v0 = z({}, tn, { relatedTarget: 0 }),
    Xi = te(v0),
    y0 = z({}, Gl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    _0 = te(y0),
    g0 = z({}, Gl, {
      clipboardData: function (t) {
        return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
      },
    }),
    p0 = te(g0),
    b0 = z({}, Gl, { data: 0 }),
    Us = te(b0),
    S0 = {
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
    E0 = {
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
    x0 = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function T0(t) {
    var e = this.nativeEvent;
    return (
      e.getModifierState ? e.getModifierState(t)
      : (t = x0[t]) ? !!e[t]
      : !1
    );
  }
  function Qi() {
    return T0;
  }
  var z0 = z({}, tn, {
      key: function (t) {
        if (t.key) {
          var e = S0[t.key] || t.key;
          if (e !== 'Unidentified') return e;
        }
        return (
          t.type === 'keypress' ?
            ((t = iu(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
          : t.type === 'keydown' || t.type === 'keyup' ?
            E0[t.keyCode] || 'Unidentified'
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
      getModifierState: Qi,
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
    N0 = te(z0),
    A0 = z({}, su, {
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
    Hs = te(A0),
    C0 = z({}, tn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Qi,
    }),
    j0 = te(C0),
    R0 = z({}, Gl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    O0 = te(R0),
    M0 = z({}, su, {
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
    D0 = te(M0),
    U0 = z({}, Gl, { newState: 0, oldState: 0 }),
    H0 = te(U0),
    B0 = [9, 13, 27, 32],
    Zi = we && 'CompositionEvent' in window,
    ln = null;
  we && 'documentMode' in document && (ln = document.documentMode);
  var q0 = we && 'TextEvent' in window && !ln,
    Bs = we && (!Zi || (ln && 8 < ln && 11 >= ln)),
    qs = ' ',
    Ys = !1;
  function Ls(t, e) {
    switch (t) {
      case 'keyup':
        return B0.indexOf(e.keyCode) !== -1;
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
  function Gs(t) {
    return (
      (t = t.detail),
      typeof t == 'object' && 'data' in t ? t.data : null
    );
  }
  var ma = !1;
  function Y0(t, e) {
    switch (t) {
      case 'compositionend':
        return Gs(e);
      case 'keypress':
        return e.which !== 32 ? null : ((Ys = !0), qs);
      case 'textInput':
        return ((t = e.data), t === qs && Ys ? null : t);
      default:
        return null;
    }
  }
  function L0(t, e) {
    if (ma)
      return t === 'compositionend' || (!Zi && Ls(t, e)) ?
          ((t = Os()), (uu = Yi = hl = null), (ma = !1), t)
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
        return Bs && e.locale !== 'ko' ? null : e.data;
      default:
        return null;
    }
  }
  var G0 = {
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
  function Xs(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === 'input' ? !!G0[t.type] : e === 'textarea';
  }
  function Qs(t, e, l, a) {
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
  function X0(t) {
    zd(t, 0);
  }
  function ou(t) {
    var e = Fa(t);
    if (xs(e)) return t;
  }
  function Zs(t, e) {
    if (t === 'change') return e;
  }
  var Vs = !1;
  if (we) {
    var Vi;
    if (we) {
      var wi = 'oninput' in document;
      if (!wi) {
        var ws = document.createElement('div');
        (ws.setAttribute('oninput', 'return;'),
          (wi = typeof ws.oninput == 'function'));
      }
      Vi = wi;
    } else Vi = !1;
    Vs = Vi && (!document.documentMode || 9 < document.documentMode);
  }
  function Ks() {
    an && (an.detachEvent('onpropertychange', Js), (nn = an = null));
  }
  function Js(t) {
    if (t.propertyName === 'value' && ou(nn)) {
      var e = [];
      (Qs(e, nn, t, Hi(t)), Rs(X0, e));
    }
  }
  function Q0(t, e, l) {
    t === 'focusin' ?
      (Ks(), (an = e), (nn = l), an.attachEvent('onpropertychange', Js))
    : t === 'focusout' && Ks();
  }
  function Z0(t) {
    if (t === 'selectionchange' || t === 'keyup' || t === 'keydown')
      return ou(nn);
  }
  function V0(t, e) {
    if (t === 'click') return ou(e);
  }
  function w0(t, e) {
    if (t === 'input' || t === 'change') return ou(e);
  }
  function K0(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var se = typeof Object.is == 'function' ? Object.is : K0;
  function un(t, e) {
    if (se(t, e)) return !0;
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
      if (!Ei.call(e, n) || !se(t[n], e[n])) return !1;
    }
    return !0;
  }
  function $s(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function ks(t, e) {
    var l = $s(t);
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
      l = $s(l);
    }
  }
  function Ws(t, e) {
    return (
      t && e ?
        t === e ? !0
        : t && t.nodeType === 3 ? !1
        : e && e.nodeType === 3 ? Ws(t, e.parentNode)
        : 'contains' in t ? t.contains(e)
        : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1
    );
  }
  function Fs(t) {
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
  function Ki(t) {
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
  var J0 = we && 'documentMode' in document && 11 >= document.documentMode,
    va = null,
    Ji = null,
    cn = null,
    $i = !1;
  function Is(t, e, l) {
    var a =
      l.window === l ? l.document
      : l.nodeType === 9 ? l
      : l.ownerDocument;
    $i ||
      va == null ||
      va !== au(a) ||
      ((a = va),
      'selectionStart' in a && Ki(a) ?
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
        (a = Iu(Ji, 'onSelect')),
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
    Ps = {};
  we &&
    ((Ps = document.createElement('div').style),
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
    for (l in e) if (e.hasOwnProperty(l) && l in Ps) return (ki[t] = e[l]);
    return t;
  }
  var to = Ql('animationend'),
    eo = Ql('animationiteration'),
    lo = Ql('animationstart'),
    $0 = Ql('transitionrun'),
    k0 = Ql('transitionstart'),
    W0 = Ql('transitioncancel'),
    ao = Ql('transitionend'),
    no = new Map(),
    Wi =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  Wi.push('scrollEnd');
  function De(t, e) {
    (no.set(t, e), Ll(e, [t]));
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
    Fi = 0;
  function du() {
    for (var t = _a, e = (Fi = _a = 0); e < t; ) {
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
      u !== 0 && uo(l, n, u);
    }
  }
  function hu(t, e, l, a) {
    ((Ee[_a++] = t),
      (Ee[_a++] = e),
      (Ee[_a++] = l),
      (Ee[_a++] = a),
      (Fi |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a));
  }
  function Ii(t, e, l, a) {
    return (hu(t, e, l, a), mu(t));
  }
  function Zl(t, e) {
    return (hu(t, null, null, e), mu(t));
  }
  function uo(t, e, l) {
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
          ((n = 31 - fe(l)),
          (t = u.hiddenUpdates),
          (a = t[n]),
          a === null ? (t[n] = [e]) : a.push(e),
          (e.lane = l | 536870912)),
        u)
      : null;
  }
  function mu(t) {
    if (50 < jn) throw ((jn = 0), (ff = null), Error(f(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var ga = {};
  function F0(t, e, l, a) {
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
  function oe(t, e, l, a) {
    return new F0(t, e, l, a);
  }
  function Pi(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function Ke(t, e) {
    var l = t.alternate;
    return (
      l === null ?
        ((l = oe(t.tag, e, t.key, t.mode)),
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
  function io(t, e) {
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
    if (((a = t), typeof t == 'function')) Pi(t) && (i = 1);
    else if (typeof t == 'string')
      i =
        l1(t, l, X.current) ? 26
        : t === 'html' || t === 'head' || t === 'body' ? 27
        : 5;
    else
      t: switch (t) {
        case Qt:
          return (
            (t = oe(31, l, e, n)),
            (t.elementType = Qt),
            (t.lanes = u),
            t
          );
        case V:
          return Vl(l.children, n, u, e);
        case G:
          ((i = 8), (n |= 24));
          break;
        case K:
          return (
            (t = oe(12, l, e, n | 2)),
            (t.elementType = K),
            (t.lanes = u),
            t
          );
        case St:
          return (
            (t = oe(13, l, e, n)),
            (t.elementType = St),
            (t.lanes = u),
            t
          );
        case At:
          return (
            (t = oe(19, l, e, n)),
            (t.elementType = At),
            (t.lanes = u),
            t
          );
        default:
          if (typeof t == 'object' && t !== null)
            switch (t.$$typeof) {
              case k:
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
      (e = oe(i, l, e, n)),
      (e.elementType = t),
      (e.type = a),
      (e.lanes = u),
      e
    );
  }
  function Vl(t, e, l, a) {
    return ((t = oe(7, t, a, e)), (t.lanes = l), t);
  }
  function tc(t, e, l) {
    return ((t = oe(6, t, null, e)), (t.lanes = l), t);
  }
  function co(t) {
    var e = oe(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function ec(t, e, l) {
    return (
      (e = oe(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var fo = new WeakMap();
  function xe(t, e) {
    if (typeof t == 'object' && t !== null) {
      var l = fo.get(t);
      return l !== void 0 ? l : (
          ((e = { value: t, source: e, stack: cs(e) }), fo.set(t, e), e)
        );
    }
    return { value: t, source: e, stack: cs(e) };
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
  function so(t, e, l) {
    ((Te[ze++] = Ye), (Te[ze++] = Le), (Te[ze++] = ml), (ml = t));
    var a = Ye;
    t = Le;
    var n = 32 - fe(a) - 1;
    ((a &= ~(1 << n)), (l += 1));
    var u = 32 - fe(e) + n;
    if (30 < u) {
      var i = n - (n % 5);
      ((u = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (n -= i),
        (Ye = (1 << (32 - fe(e) + n)) | (l << n) | a),
        (Le = u + t));
    } else ((Ye = (1 << u) | (l << n) | a), (Le = t));
  }
  function lc(t) {
    t.return !== null && (Je(t, 1), so(t, 1, 0));
  }
  function ac(t) {
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
  function oo(t, e) {
    ((Te[ze++] = Ye),
      (Te[ze++] = Le),
      (Te[ze++] = ml),
      (Ye = e.id),
      (Le = e.overflow),
      (ml = t));
  }
  var Vt = null,
    xt = null,
    ft = !1,
    vl = null,
    Ne = !1,
    nc = Error(f(519));
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
    throw (sn(xe(e, t)), nc);
  }
  function ro(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps;
    switch (((e[Zt] = t), (e[Pt] = a), l)) {
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
          Ts(
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
        (ut('invalid', e), Ns(e, a.value, a.defaultValue, a.children));
    }
    ((l = a.children),
      (
        (typeof l != 'string' &&
          typeof l != 'number' &&
          typeof l != 'bigint') ||
        e.textContent === '' + l ||
        a.suppressHydrationWarning === !0 ||
        jd(e.textContent, l)
      ) ?
        (a.popover != null && (ut('beforetoggle', e), ut('toggle', e)),
        a.onScroll != null && ut('scroll', e),
        a.onScrollEnd != null && ut('scrollend', e),
        a.onClick != null && (e.onclick = Ve),
        (e = !0))
      : (e = !1),
      e || yl(t, !0));
  }
  function ho(t) {
    for (Vt = t.return; Vt; )
      switch (Vt.tag) {
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
          Vt = Vt.return;
      }
  }
  function Sa(t) {
    if (t !== Vt) return !1;
    if (!ft) return (ho(t), (ft = !0), !1);
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== 'form' && l !== 'button') || xf(t.type, t.memoizedProps))),
        (l = !l)),
      l && xt && yl(t),
      ho(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(f(317));
      xt = Yd(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(f(317));
      xt = Yd(t);
    } else
      e === 27 ?
        ((e = xt), Rl(t.type) ? ((t = Cf), (Cf = null), (xt = t)) : (xt = e))
      : (xt = Vt ? Ce(t.stateNode.nextSibling) : null);
    return !0;
  }
  function wl() {
    ((xt = Vt = null), (ft = !1));
  }
  function uc() {
    var t = vl;
    return (
      t !== null &&
        (ne === null ? (ne = t) : ne.push.apply(ne, t), (vl = null)),
      t
    );
  }
  function sn(t) {
    vl === null ? (vl = [t]) : vl.push(t);
  }
  var ic = _(null),
    Kl = null,
    $e = null;
  function _l(t, e, l) {
    (B(ic, e._currentValue), (e._currentValue = l));
  }
  function ke(t) {
    ((t._currentValue = ic.current), U(ic));
  }
  function cc(t, e, l) {
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
  function fc(t, e, l, a) {
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
                cc(u.return, l, t),
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
          cc(i, l, t),
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
          se(n.pendingProps.value, i.value) ||
            (t !== null ? t.push(s) : (t = [s]));
        }
      } else if (n === dt.current) {
        if (((i = n.alternate), i === null)) throw Error(f(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (t !== null ? t.push(Bn) : (t = [Bn]));
      }
      n = n.return;
    }
    (t !== null && fc(e, t, l, a), (e.flags |= 262144));
  }
  function _u(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!se(t.context._currentValue, t.memoizedValue)) return !0;
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
  function wt(t) {
    return mo(Kl, t);
  }
  function gu(t, e) {
    return (Kl === null && Jl(t), mo(t, e));
  }
  function mo(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), $e === null)) {
      if (t === null) throw Error(f(308));
      (($e = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else $e = $e.next = e;
    return l;
  }
  var I0 =
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
    P0 = c.unstable_scheduleCallback,
    tm = c.unstable_NormalPriority,
    Ht = {
      $$typeof: k,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function sc() {
    return { controller: new I0(), data: new Map(), refCount: 0 };
  }
  function on(t) {
    (t.refCount--,
      t.refCount === 0 &&
        P0(tm, function () {
          t.controller.abort();
        }));
  }
  var rn = null,
    oc = 0,
    xa = 0,
    Ta = null;
  function em(t, e) {
    if (rn === null) {
      var l = (rn = []);
      ((oc = 0),
        (xa = mf()),
        (Ta = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        }));
    }
    return (oc++, e.then(vo, vo), e);
  }
  function vo() {
    if (--oc === 0 && rn !== null) {
      Ta !== null && (Ta.status = 'fulfilled');
      var t = rn;
      ((rn = null), (xa = 0), (Ta = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function lm(t, e) {
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
  var yo = R.S;
  R.S = function (t, e) {
    ((Pr = ie()),
      typeof e == 'object' &&
        e !== null &&
        typeof e.then == 'function' &&
        em(t, e),
      yo !== null && yo(t, e));
  };
  var $l = _(null);
  function rc() {
    var t = $l.current;
    return t !== null ? t : bt.pooledCache;
  }
  function pu(t, e) {
    e === null ? B($l, $l.current) : B($l, e.pool);
  }
  function _o() {
    var t = rc();
    return t === null ? null : { parent: Ht._currentValue, pool: t };
  }
  var za = Error(f(460)),
    dc = Error(f(474)),
    bu = Error(f(542)),
    Su = { then: function () {} };
  function go(t) {
    return ((t = t.status), t === 'fulfilled' || t === 'rejected');
  }
  function po(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(Ve, Ve), (e = l)),
      e.status)
    ) {
      case 'fulfilled':
        return e.value;
      case 'rejected':
        throw ((t = e.reason), So(t), t);
      default:
        if (typeof e.status == 'string') e.then(Ve, Ve);
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
            throw ((t = e.reason), So(t), t);
        }
        throw ((Wl = e), za);
    }
  }
  function kl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == 'object' && typeof l.then == 'function' ?
          ((Wl = l), za)
        : l;
    }
  }
  var Wl = null;
  function bo() {
    if (Wl === null) throw Error(f(459));
    var t = Wl;
    return ((Wl = null), t);
  }
  function So(t) {
    if (t === za || t === bu) throw Error(f(483));
  }
  var Na = null,
    dn = 0;
  function Eu(t) {
    var e = dn;
    return ((dn += 1), Na === null && (Na = []), po(Na, t, e));
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
  function Eo(t) {
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
    function s(p, y, E, O) {
      return y === null || y.tag !== 6 ?
          ((y = tc(E, p.mode, O)), (y.return = p), y)
        : ((y = n(y, E)), (y.return = p), y);
    }
    function h(p, y, E, O) {
      var w = E.type;
      return (
        w === V ? C(p, y, E.props.children, O, E.key)
        : (
          y !== null &&
          (y.elementType === w ||
            (typeof w == 'object' &&
              w !== null &&
              w.$$typeof === Rt &&
              kl(w) === y.type))
        ) ?
          ((y = n(y, E.props)), hn(y, E), (y.return = p), y)
        : ((y = vu(E.type, E.key, E.props, null, p.mode, O)),
          hn(y, E),
          (y.return = p),
          y)
      );
    }
    function x(p, y, E, O) {
      return (
          y === null ||
            y.tag !== 4 ||
            y.stateNode.containerInfo !== E.containerInfo ||
            y.stateNode.implementation !== E.implementation
        ) ?
          ((y = ec(E, p.mode, O)), (y.return = p), y)
        : ((y = n(y, E.children || [])), (y.return = p), y);
    }
    function C(p, y, E, O, w) {
      return y === null || y.tag !== 7 ?
          ((y = Vl(E, p.mode, O, w)), (y.return = p), y)
        : ((y = n(y, E)), (y.return = p), y);
    }
    function M(p, y, E) {
      if (
        (typeof y == 'string' && y !== '') ||
        typeof y == 'number' ||
        typeof y == 'bigint'
      )
        return ((y = tc('' + y, p.mode, E)), (y.return = p), y);
      if (typeof y == 'object' && y !== null) {
        switch (y.$$typeof) {
          case Z:
            return (
              (E = vu(y.type, y.key, y.props, null, p.mode, E)),
              hn(E, y),
              (E.return = p),
              E
            );
          case F:
            return ((y = ec(y, p.mode, E)), (y.return = p), y);
          case Rt:
            return ((y = kl(y)), M(p, y, E));
        }
        if (Me(y) || It(y))
          return ((y = Vl(y, p.mode, E, null)), (y.return = p), y);
        if (typeof y.then == 'function') return M(p, Eu(y), E);
        if (y.$$typeof === k) return M(p, gu(p, y), E);
        xu(p, y);
      }
      return null;
    }
    function T(p, y, E, O) {
      var w = y !== null ? y.key : null;
      if (
        (typeof E == 'string' && E !== '') ||
        typeof E == 'number' ||
        typeof E == 'bigint'
      )
        return w !== null ? null : s(p, y, '' + E, O);
      if (typeof E == 'object' && E !== null) {
        switch (E.$$typeof) {
          case Z:
            return E.key === w ? h(p, y, E, O) : null;
          case F:
            return E.key === w ? x(p, y, E, O) : null;
          case Rt:
            return ((E = kl(E)), T(p, y, E, O));
        }
        if (Me(E) || It(E)) return w !== null ? null : C(p, y, E, O, null);
        if (typeof E.then == 'function') return T(p, y, Eu(E), O);
        if (E.$$typeof === k) return T(p, y, gu(p, E), O);
        xu(p, E);
      }
      return null;
    }
    function N(p, y, E, O, w) {
      if (
        (typeof O == 'string' && O !== '') ||
        typeof O == 'number' ||
        typeof O == 'bigint'
      )
        return ((p = p.get(E) || null), s(y, p, '' + O, w));
      if (typeof O == 'object' && O !== null) {
        switch (O.$$typeof) {
          case Z:
            return (
              (p = p.get(O.key === null ? E : O.key) || null),
              h(y, p, O, w)
            );
          case F:
            return (
              (p = p.get(O.key === null ? E : O.key) || null),
              x(y, p, O, w)
            );
          case Rt:
            return ((O = kl(O)), N(p, y, E, O, w));
        }
        if (Me(O) || It(O))
          return ((p = p.get(E) || null), C(y, p, O, w, null));
        if (typeof O.then == 'function') return N(p, y, E, Eu(O), w);
        if (O.$$typeof === k) return N(p, y, E, gu(y, O), w);
        xu(y, O);
      }
      return null;
    }
    function Y(p, y, E, O) {
      for (
        var w = null, st = null, Q = y, lt = (y = 0), ct = null;
        Q !== null && lt < E.length;
        lt++
      ) {
        Q.index > lt ? ((ct = Q), (Q = null)) : (ct = Q.sibling);
        var ot = T(p, Q, E[lt], O);
        if (ot === null) {
          Q === null && (Q = ct);
          break;
        }
        (t && Q && ot.alternate === null && e(p, Q),
          (y = u(ot, y, lt)),
          st === null ? (w = ot) : (st.sibling = ot),
          (st = ot),
          (Q = ct));
      }
      if (lt === E.length) return (l(p, Q), ft && Je(p, lt), w);
      if (Q === null) {
        for (; lt < E.length; lt++)
          ((Q = M(p, E[lt], O)),
            Q !== null &&
              ((y = u(Q, y, lt)),
              st === null ? (w = Q) : (st.sibling = Q),
              (st = Q)));
        return (ft && Je(p, lt), w);
      }
      for (Q = a(Q); lt < E.length; lt++)
        ((ct = N(Q, p, lt, E[lt], O)),
          ct !== null &&
            (t &&
              ct.alternate !== null &&
              Q.delete(ct.key === null ? lt : ct.key),
            (y = u(ct, y, lt)),
            st === null ? (w = ct) : (st.sibling = ct),
            (st = ct)));
      return (
        t &&
          Q.forEach(function (Hl) {
            return e(p, Hl);
          }),
        ft && Je(p, lt),
        w
      );
    }
    function $(p, y, E, O) {
      if (E == null) throw Error(f(151));
      for (
        var w = null, st = null, Q = y, lt = (y = 0), ct = null, ot = E.next();
        Q !== null && !ot.done;
        lt++, ot = E.next()
      ) {
        Q.index > lt ? ((ct = Q), (Q = null)) : (ct = Q.sibling);
        var Hl = T(p, Q, ot.value, O);
        if (Hl === null) {
          Q === null && (Q = ct);
          break;
        }
        (t && Q && Hl.alternate === null && e(p, Q),
          (y = u(Hl, y, lt)),
          st === null ? (w = Hl) : (st.sibling = Hl),
          (st = Hl),
          (Q = ct));
      }
      if (ot.done) return (l(p, Q), ft && Je(p, lt), w);
      if (Q === null) {
        for (; !ot.done; lt++, ot = E.next())
          ((ot = M(p, ot.value, O)),
            ot !== null &&
              ((y = u(ot, y, lt)),
              st === null ? (w = ot) : (st.sibling = ot),
              (st = ot)));
        return (ft && Je(p, lt), w);
      }
      for (Q = a(Q); !ot.done; lt++, ot = E.next())
        ((ot = N(Q, p, lt, ot.value, O)),
          ot !== null &&
            (t &&
              ot.alternate !== null &&
              Q.delete(ot.key === null ? lt : ot.key),
            (y = u(ot, y, lt)),
            st === null ? (w = ot) : (st.sibling = ot),
            (st = ot)));
      return (
        t &&
          Q.forEach(function (h1) {
            return e(p, h1);
          }),
        ft && Je(p, lt),
        w
      );
    }
    function gt(p, y, E, O) {
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
              for (var w = E.key; y !== null; ) {
                if (y.key === w) {
                  if (((w = E.type), w === V)) {
                    if (y.tag === 7) {
                      (l(p, y.sibling),
                        (O = n(y, E.props.children)),
                        (O.return = p),
                        (p = O));
                      break t;
                    }
                  } else if (
                    y.elementType === w ||
                    (typeof w == 'object' &&
                      w !== null &&
                      w.$$typeof === Rt &&
                      kl(w) === y.type)
                  ) {
                    (l(p, y.sibling),
                      (O = n(y, E.props)),
                      hn(O, E),
                      (O.return = p),
                      (p = O));
                    break t;
                  }
                  l(p, y);
                  break;
                } else e(p, y);
                y = y.sibling;
              }
              E.type === V ?
                ((O = Vl(E.props.children, p.mode, O, E.key)),
                (O.return = p),
                (p = O))
              : ((O = vu(E.type, E.key, E.props, null, p.mode, O)),
                hn(O, E),
                (O.return = p),
                (p = O));
            }
            return i(p);
          case F:
            t: {
              for (w = E.key; y !== null; ) {
                if (y.key === w)
                  if (
                    y.tag === 4 &&
                    y.stateNode.containerInfo === E.containerInfo &&
                    y.stateNode.implementation === E.implementation
                  ) {
                    (l(p, y.sibling),
                      (O = n(y, E.children || [])),
                      (O.return = p),
                      (p = O));
                    break t;
                  } else {
                    l(p, y);
                    break;
                  }
                else e(p, y);
                y = y.sibling;
              }
              ((O = ec(E, p.mode, O)), (O.return = p), (p = O));
            }
            return i(p);
          case Rt:
            return ((E = kl(E)), gt(p, y, E, O));
        }
        if (Me(E)) return Y(p, y, E, O);
        if (It(E)) {
          if (((w = It(E)), typeof w != 'function')) throw Error(f(150));
          return ((E = w.call(E)), $(p, y, E, O));
        }
        if (typeof E.then == 'function') return gt(p, y, Eu(E), O);
        if (E.$$typeof === k) return gt(p, y, gu(p, E), O);
        xu(p, E);
      }
      return (
          (typeof E == 'string' && E !== '') ||
            typeof E == 'number' ||
            typeof E == 'bigint'
        ) ?
          ((E = '' + E),
          y !== null && y.tag === 6 ?
            (l(p, y.sibling), (O = n(y, E)), (O.return = p), (p = O))
          : (l(p, y), (O = tc(E, p.mode, O)), (O.return = p), (p = O)),
          i(p))
        : l(p, y);
    }
    return function (p, y, E, O) {
      try {
        dn = 0;
        var w = gt(p, y, E, O);
        return ((Na = null), w);
      } catch (Q) {
        if (Q === za || Q === bu) throw Q;
        var st = oe(29, Q, null, p.mode);
        return ((st.lanes = O), (st.return = p), st);
      }
    };
  }
  var Fl = Eo(!0),
    xo = Eo(!1),
    gl = !1;
  function hc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function mc(t, e) {
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
        uo(t, null, l),
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
      ((a &= t.pendingLanes), (l |= a), (e.lanes = l), hs(t, l));
    }
  }
  function vc(t, e) {
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
  var yc = !1;
  function vn() {
    if (yc) {
      var t = Ta;
      if (t !== null) throw t;
    }
  }
  function yn(t, e, l, a) {
    yc = !1;
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
      var M = n.baseState;
      ((i = 0), (C = x = h = null), (s = u));
      do {
        var T = s.lane & -536870913,
          N = T !== s.lane;
        if (N ? (it & T) === T : (a & T) === T) {
          (T !== 0 && T === xa && (yc = !0),
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
                  M = Y.call(gt, M, T);
                  break t;
                }
                M = Y;
                break t;
              case 3:
                Y.flags = (Y.flags & -65537) | 128;
              case 0:
                if (
                  ((Y = $.payload),
                  (T = typeof Y == 'function' ? Y.call(gt, M, T) : Y),
                  T == null)
                )
                  break t;
                M = z({}, M, T);
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
            C === null ? ((x = C = N), (h = M)) : (C = C.next = N),
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
      (C === null && (h = M),
        (n.baseState = h),
        (n.firstBaseUpdate = x),
        (n.lastBaseUpdate = C),
        u === null && (n.shared.lanes = 0),
        (zl |= i),
        (t.lanes = i),
        (t.memoizedState = M));
    }
  }
  function To(t, e) {
    if (typeof t != 'function') throw Error(f(191, t));
    t.call(e);
  }
  function zo(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) To(l[t], e);
  }
  var Aa = _(null),
    Tu = _(0);
  function No(t, e) {
    ((t = nl), B(Tu, t), B(Aa, e), (nl = t | e.baseLanes));
  }
  function _c() {
    (B(Tu, nl), B(Aa, Aa.current));
  }
  function gc() {
    ((nl = Tu.current), U(Aa), U(Tu));
  }
  var re = _(null),
    Ae = null;
  function Sl(t) {
    var e = t.alternate;
    (B(Mt, Mt.current & 1),
      B(re, t),
      Ae === null &&
        (e === null || Aa.current !== null || e.memoizedState !== null) &&
        (Ae = t));
  }
  function pc(t) {
    (B(Mt, Mt.current), B(re, t), Ae === null && (Ae = t));
  }
  function Ao(t) {
    t.tag === 22 ?
      (B(Mt, Mt.current), B(re, t), Ae === null && (Ae = t))
    : El();
  }
  function El() {
    (B(Mt, Mt.current), B(re, re.current));
  }
  function de(t) {
    (U(re), Ae === t && (Ae = null), U(Mt));
  }
  var Mt = _(0);
  function zu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || Nf(l) || Af(l)))
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
  var We = 0,
    et = null,
    yt = null,
    Bt = null,
    Nu = !1,
    Ca = !1,
    Il = !1,
    Au = 0,
    _n = 0,
    ja = null,
    am = 0;
  function Ct() {
    throw Error(f(321));
  }
  function bc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!se(t[l], e[l])) return !1;
    return !0;
  }
  function Sc(t, e, l, a, n, u) {
    return (
      (We = u),
      (et = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (R.H = t === null || t.memoizedState === null ? or : Bc),
      (Il = !1),
      (u = l(a, n)),
      (Il = !1),
      Ca && (u = jo(e, l, a, n)),
      Co(t),
      u
    );
  }
  function Co(t) {
    R.H = bn;
    var e = yt !== null && yt.next !== null;
    if (((We = 0), (Bt = yt = et = null), (Nu = !1), (_n = 0), (ja = null), e))
      throw Error(f(300));
    t === null ||
      qt ||
      ((t = t.dependencies), t !== null && _u(t) && (qt = !0));
  }
  function jo(t, e, l, a) {
    et = t;
    var n = 0;
    do {
      if ((Ca && (ja = null), (_n = 0), (Ca = !1), 25 <= n))
        throw Error(f(301));
      if (((n += 1), (Bt = yt = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((R.H = rr), (u = e(l, a)));
    } while (Ca);
    return u;
  }
  function nm() {
    var t = R.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == 'function' ? gn(e) : e),
      (t = t.useState()[0]),
      (yt !== null ? yt.memoizedState : null) !== t && (et.flags |= 1024),
      e
    );
  }
  function Ec() {
    var t = Au !== 0;
    return ((Au = 0), t);
  }
  function xc(t, e, l) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l));
  }
  function Tc(t) {
    if (Nu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      Nu = !1;
    }
    ((We = 0), (Bt = yt = et = null), (Ca = !1), (_n = Au = 0), (ja = null));
  }
  function Wt() {
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
  function Cu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function gn(t) {
    var e = _n;
    return (
      (_n += 1),
      ja === null && (ja = []),
      (t = po(ja, t, e)),
      (e = et),
      (Bt === null ? e.memoizedState : Bt.next) === null &&
        ((e = e.alternate),
        (R.H = e === null || e.memoizedState === null ? or : Bc)),
      t
    );
  }
  function ju(t) {
    if (t !== null && typeof t == 'object') {
      if (typeof t.then == 'function') return gn(t);
      if (t.$$typeof === k) return wt(t);
    }
    throw Error(f(438, String(t)));
  }
  function zc(t) {
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
      l === null && ((l = Cu()), (et.updateQueue = l)),
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
    return Nc(e, yt, t);
  }
  function Nc(t, e, l) {
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
        var M = x.lane & -536870913;
        if (M !== x.lane ? (it & M) === M : (We & M) === M) {
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
              M === xa && (C = !0));
          else if ((We & T) === T) {
            ((x = x.next), T === xa && (C = !0));
            continue;
          } else
            ((M = {
              lane: 0,
              revertLane: x.revertLane,
              gesture: null,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null,
            }),
              h === null ? ((s = h = M), (i = u)) : (h = h.next = M),
              (et.lanes |= T),
              (zl |= T));
          ((M = x.action),
            Il && l(u, M),
            (u = x.hasEagerState ? x.eagerState : l(u, M)));
        } else
          ((T = {
            lane: M,
            revertLane: x.revertLane,
            gesture: x.gesture,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null,
          }),
            h === null ? ((s = h = T), (i = u)) : (h = h.next = T),
            (et.lanes |= M),
            (zl |= M));
        x = x.next;
      } while (x !== null && x !== e);
      if (
        (h === null ? (i = u) : (h.next = s),
        !se(u, t.memoizedState) && ((qt = !0), C && ((l = Ta), l !== null)))
      )
        throw l;
      ((t.memoizedState = u),
        (t.baseState = i),
        (t.baseQueue = h),
        (a.lastRenderedState = u));
    }
    return (n === null && (a.lanes = 0), [t.memoizedState, a.dispatch]);
  }
  function Ac(t) {
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
      (se(u, e.memoizedState) || (qt = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (l.lastRenderedState = u));
    }
    return [u, a];
  }
  function Ro(t, e, l) {
    var a = et,
      n = Dt(),
      u = ft;
    if (u) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = e();
    var i = !se((yt || n).memoizedState, l);
    if (
      (i && ((n.memoizedState = l), (qt = !0)),
      (n = n.queue),
      Rc(Do.bind(null, a, n, t), [t]),
      n.getSnapshot !== e || i || (Bt !== null && Bt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Ra(9, { destroy: void 0 }, Mo.bind(null, a, n, l, e), null),
        bt === null)
      )
        throw Error(f(349));
      u || (We & 127) !== 0 || Oo(a, e, l);
    }
    return l;
  }
  function Oo(t, e, l) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = et.updateQueue),
      e === null ?
        ((e = Cu()), (et.updateQueue = e), (e.stores = [t]))
      : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t)));
  }
  function Mo(t, e, l, a) {
    ((e.value = l), (e.getSnapshot = a), Uo(e) && Ho(t));
  }
  function Do(t, e, l) {
    return l(function () {
      Uo(e) && Ho(t);
    });
  }
  function Uo(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !se(t, l);
    } catch {
      return !0;
    }
  }
  function Ho(t) {
    var e = Zl(t, 2);
    e !== null && ue(e, t, 2);
  }
  function Cc(t) {
    var e = Wt();
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
  function Bo(t, e, l, a) {
    return ((t.baseState = l), Nc(t, yt, typeof a == 'function' ? a : Fe));
  }
  function um(t, e, l, a, n) {
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
          ((u.next = e.pending = u), qo(e, u))
        : ((u.next = l.next), (e.pending = l.next = u)));
    }
  }
  function qo(t, e) {
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
        (h !== null && h(i, s), Yo(t, e, s));
      } catch (x) {
        jc(t, e, x);
      } finally {
        (u !== null && i.types !== null && (u.types = i.types), (R.T = u));
      }
    } else
      try {
        ((u = l(n, a)), Yo(t, e, u));
      } catch (x) {
        jc(t, e, x);
      }
  }
  function Yo(t, e, l) {
    l !== null && typeof l == 'object' && typeof l.then == 'function' ?
      l.then(
        function (a) {
          Lo(t, e, a);
        },
        function (a) {
          return jc(t, e, a);
        },
      )
    : Lo(t, e, l);
  }
  function Lo(t, e, l) {
    ((e.status = 'fulfilled'),
      (e.value = l),
      Go(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), qo(t, l))));
  }
  function jc(t, e, l) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do ((e.status = 'rejected'), (e.reason = l), Go(e), (e = e.next));
      while (e !== a);
    }
    t.action = null;
  }
  function Go(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Xo(t, e) {
    return e;
  }
  function Qo(t, e) {
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
                  if (((n = Ce(n.nextSibling)), n === null)) {
                    n = null;
                    break e;
                  }
                }
                ((u = n.data), (n = u === 'F!' || u === 'F' ? n : null));
              }
              if (n) {
                ((xt = Ce(n.nextSibling)), (a = n.data === 'F!'));
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
      (l = Wt()),
      (l.memoizedState = l.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xo,
        lastRenderedState: e,
      }),
      (l.queue = a),
      (l = cr.bind(null, et, a)),
      (a.dispatch = l),
      (a = Cc(!1)),
      (u = Hc.bind(null, et, !1, a.queue)),
      (a = Wt()),
      (n = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = n),
      (l = um.bind(null, et, n, u, l)),
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
      ((e = Nc(t, e, Xo)[0]),
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
        Ra(9, { destroy: void 0 }, im.bind(null, n, l), null)),
      [a, u, t]
    );
  }
  function im(t, e) {
    t.action = e;
  }
  function wo(t) {
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
      e === null && ((e = Cu()), (et.updateQueue = e)),
      (l = e.lastEffect),
      l === null ?
        (e.lastEffect = t.next = t)
      : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function Ko() {
    return Dt().memoizedState;
  }
  function Ou(t, e, l, a) {
    var n = Wt();
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
    yt !== null && a !== null && bc(a, yt.memoizedState.deps) ?
      (n.memoizedState = Ra(e, u, l, a))
    : ((et.flags |= t), (n.memoizedState = Ra(1 | e, u, l, a)));
  }
  function Jo(t, e) {
    Ou(8390656, 8, t, e);
  }
  function Rc(t, e) {
    Mu(2048, 8, t, e);
  }
  function cm(t) {
    et.flags |= 4;
    var e = et.updateQueue;
    if (e === null) ((e = Cu()), (et.updateQueue = e), (e.events = [t]));
    else {
      var l = e.events;
      l === null ? (e.events = [t]) : l.push(t);
    }
  }
  function $o(t) {
    var e = Dt().memoizedState;
    return (
      cm({ ref: e, nextImpl: t }),
      function () {
        if ((rt & 2) !== 0) throw Error(f(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function ko(t, e) {
    return Mu(4, 2, t, e);
  }
  function Wo(t, e) {
    return Mu(4, 4, t, e);
  }
  function Fo(t, e) {
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
  function Io(t, e, l) {
    ((l = l != null ? l.concat([t]) : null), Mu(4, 4, Fo.bind(null, e, t), l));
  }
  function Oc() {}
  function Po(t, e) {
    var l = Dt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && bc(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
  }
  function tr(t, e) {
    var l = Dt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && bc(e, a[1])) return a[0];
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
  function Mc(t, e, l) {
    return l === void 0 || ((We & 1073741824) !== 0 && (it & 261930) === 0) ?
        (t.memoizedState = e)
      : ((t.memoizedState = l), (t = ed()), (et.lanes |= t), (zl |= t), l);
  }
  function er(t, e, l, a) {
    return (
      se(l, e) ? l
      : Aa.current !== null ? ((t = Mc(t, l, a)), se(t, e) || (qt = !0), t)
      : (We & 42) === 0 || ((We & 1073741824) !== 0 && (it & 261930) === 0) ?
        ((qt = !0), (t.memoizedState = l))
      : ((t = ed()), (et.lanes |= t), (zl |= t), e)
    );
  }
  function lr(t, e, l, a, n) {
    var u = H.p;
    H.p = u !== 0 && 8 > u ? u : 8;
    var i = R.T,
      s = {};
    ((R.T = s), Hc(t, !1, e, l));
    try {
      var h = n(),
        x = R.S;
      if (
        (x !== null && x(s, h),
        h !== null && typeof h == 'object' && typeof h.then == 'function')
      ) {
        var C = lm(h, a);
        pn(t, e, C, ve(t));
      } else pn(t, e, a, ve(t));
    } catch (M) {
      pn(t, e, { then: function () {}, status: 'rejected', reason: M }, ve());
    } finally {
      ((H.p = u),
        i !== null && s.types !== null && (i.types = s.types),
        (R.T = i));
    }
  }
  function fm() {}
  function Dc(t, e, l, a) {
    if (t.tag !== 5) throw Error(f(476));
    var n = ar(t).queue;
    lr(
      t,
      n,
      e,
      W,
      l === null ? fm : (
        function () {
          return (nr(t), l(a));
        }
      ),
    );
  }
  function ar(t) {
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
        lastRenderedReducer: Fe,
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
  function nr(t) {
    var e = ar(t);
    (e.next === null && (e = t.alternate.memoizedState),
      pn(t, e.next.queue, {}, ve()));
  }
  function Uc() {
    return wt(Bn);
  }
  function ur() {
    return Dt().memoizedState;
  }
  function ir() {
    return Dt().memoizedState;
  }
  function sm(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = ve();
          t = pl(l);
          var a = bl(e, t, l);
          (a !== null && (ue(a, e, l), mn(a, e, l)),
            (e = { cache: sc() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function om(t, e, l) {
    var a = ve();
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
        fr(e, l)
      : ((l = Ii(t, e, l, a)), l !== null && (ue(l, t, a), sr(l, e, a))));
  }
  function cr(t, e, l) {
    var a = ve();
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
    if (Du(t)) fr(e, n);
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
          if (((n.hasEagerState = !0), (n.eagerState = s), se(s, i)))
            return (hu(t, e, n, 0), bt === null && du(), !1);
        } catch {}
      if (((l = Ii(t, e, n, a)), l !== null))
        return (ue(l, t, a), sr(l, e, a), !0);
    }
    return !1;
  }
  function Hc(t, e, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: mf(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Du(t))
    ) {
      if (e) throw Error(f(479));
    } else ((e = Ii(t, l, a, 2)), e !== null && ue(e, t, 2));
  }
  function Du(t) {
    var e = t.alternate;
    return t === et || (e !== null && e === et);
  }
  function fr(t, e) {
    Ca = Nu = !0;
    var l = t.pending;
    (l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e));
  }
  function sr(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (l |= a), (e.lanes = l), hs(t, l));
    }
  }
  var bn = {
    readContext: wt,
    use: ju,
    useCallback: Ct,
    useContext: Ct,
    useEffect: Ct,
    useImperativeHandle: Ct,
    useLayoutEffect: Ct,
    useInsertionEffect: Ct,
    useMemo: Ct,
    useReducer: Ct,
    useRef: Ct,
    useState: Ct,
    useDebugValue: Ct,
    useDeferredValue: Ct,
    useTransition: Ct,
    useSyncExternalStore: Ct,
    useId: Ct,
    useHostTransitionStatus: Ct,
    useFormState: Ct,
    useActionState: Ct,
    useOptimistic: Ct,
    useMemoCache: Ct,
    useCacheRefresh: Ct,
  };
  bn.useEffectEvent = Ct;
  var or = {
      readContext: wt,
      use: ju,
      useCallback: function (t, e) {
        return ((Wt().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: wt,
      useEffect: Jo,
      useImperativeHandle: function (t, e, l) {
        ((l = l != null ? l.concat([t]) : null),
          Ou(4194308, 4, Fo.bind(null, e, t), l));
      },
      useLayoutEffect: function (t, e) {
        return Ou(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        Ou(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = Wt();
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
        var a = Wt();
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
          (t = t.dispatch = om.bind(null, et, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Wt();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = Cc(t);
        var e = t.queue,
          l = cr.bind(null, et, e);
        return ((e.dispatch = l), [t.memoizedState, l]);
      },
      useDebugValue: Oc,
      useDeferredValue: function (t, e) {
        var l = Wt();
        return Mc(l, t, e);
      },
      useTransition: function () {
        var t = Cc(!1);
        return (
          (t = lr.bind(null, et, t.queue, !0, !1)),
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
          if (((l = e()), bt === null)) throw Error(f(349));
          (it & 127) !== 0 || Oo(a, e, l);
        }
        n.memoizedState = l;
        var u = { value: l, getSnapshot: e };
        return (
          (n.queue = u),
          Jo(Do.bind(null, a, u, t), [t]),
          (a.flags |= 2048),
          Ra(9, { destroy: void 0 }, Mo.bind(null, a, u, l, e), null),
          l
        );
      },
      useId: function () {
        var t = Wt(),
          e = bt.identifierPrefix;
        if (ft) {
          var l = Le,
            a = Ye;
          ((l = (a & ~(1 << (32 - fe(a) - 1))).toString(32) + l),
            (e = '_' + e + 'R_' + l),
            (l = Au++),
            0 < l && (e += 'H' + l.toString(32)),
            (e += '_'));
        } else ((l = am++), (e = '_' + e + 'r_' + l.toString(32) + '_'));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Uc,
      useFormState: Qo,
      useActionState: Qo,
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
          (e = Hc.bind(null, et, !0, l)),
          (l.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: zc,
      useCacheRefresh: function () {
        return (Wt().memoizedState = sm.bind(null, et));
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
    Bc = {
      readContext: wt,
      use: ju,
      useCallback: Po,
      useContext: wt,
      useEffect: Rc,
      useImperativeHandle: Io,
      useInsertionEffect: ko,
      useLayoutEffect: Wo,
      useMemo: tr,
      useReducer: Ru,
      useRef: Ko,
      useState: function () {
        return Ru(Fe);
      },
      useDebugValue: Oc,
      useDeferredValue: function (t, e) {
        var l = Dt();
        return er(l, yt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Ru(Fe)[0],
          e = Dt().memoizedState;
        return [typeof t == 'boolean' ? t : gn(t), e];
      },
      useSyncExternalStore: Ro,
      useId: ur,
      useHostTransitionStatus: Uc,
      useFormState: Zo,
      useActionState: Zo,
      useOptimistic: function (t, e) {
        var l = Dt();
        return Bo(l, yt, t, e);
      },
      useMemoCache: zc,
      useCacheRefresh: ir,
    };
  Bc.useEffectEvent = $o;
  var rr = {
    readContext: wt,
    use: ju,
    useCallback: Po,
    useContext: wt,
    useEffect: Rc,
    useImperativeHandle: Io,
    useInsertionEffect: ko,
    useLayoutEffect: Wo,
    useMemo: tr,
    useReducer: Ac,
    useRef: Ko,
    useState: function () {
      return Ac(Fe);
    },
    useDebugValue: Oc,
    useDeferredValue: function (t, e) {
      var l = Dt();
      return yt === null ? Mc(l, t, e) : er(l, yt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Ac(Fe)[0],
        e = Dt().memoizedState;
      return [typeof t == 'boolean' ? t : gn(t), e];
    },
    useSyncExternalStore: Ro,
    useId: ur,
    useHostTransitionStatus: Uc,
    useFormState: wo,
    useActionState: wo,
    useOptimistic: function (t, e) {
      var l = Dt();
      return yt !== null ?
          Bo(l, yt, t, e)
        : ((l.baseState = t), [t, l.queue.dispatch]);
    },
    useMemoCache: zc,
    useCacheRefresh: ir,
  };
  rr.useEffectEvent = $o;
  function qc(t, e, l, a) {
    ((e = t.memoizedState),
      (l = l(a, e)),
      (l = l == null ? e : z({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l));
  }
  var Yc = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var a = ve(),
        n = pl(a);
      ((n.payload = e),
        l != null && (n.callback = l),
        (e = bl(t, n, a)),
        e !== null && (ue(e, t, a), mn(e, t, a)));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var a = ve(),
        n = pl(a);
      ((n.tag = 1),
        (n.payload = e),
        l != null && (n.callback = l),
        (e = bl(t, n, a)),
        e !== null && (ue(e, t, a), mn(e, t, a)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = ve(),
        a = pl(l);
      ((a.tag = 2),
        e != null && (a.callback = e),
        (e = bl(t, a, l)),
        e !== null && (ue(e, t, l), mn(e, t, l)));
    },
  };
  function dr(t, e, l, a, n, u, i) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == 'function' ?
        t.shouldComponentUpdate(a, u, i)
      : e.prototype && e.prototype.isPureReactComponent ? !un(l, a) || !un(n, u)
      : !0
    );
  }
  function hr(t, e, l, a) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == 'function' &&
        e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
        e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && Yc.enqueueReplaceState(e, e.state, null));
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
  function mr(t) {
    ru(t);
  }
  function vr(t) {
    console.error(t);
  }
  function yr(t) {
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
  function _r(t, e, l) {
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
  function Lc(t, e, l) {
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
  function gr(t) {
    return ((t = pl(t)), (t.tag = 3), t);
  }
  function pr(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == 'function') {
      var u = a.value;
      ((t.payload = function () {
        return n(u);
      }),
        (t.callback = function () {
          _r(e, l, a);
        }));
    }
    var i = l.stateNode;
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (t.callback = function () {
        (_r(e, l, a),
          typeof n != 'function' &&
            (Nl === null ? (Nl = new Set([this])) : Nl.add(this)));
        var s = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: s !== null ? s : '',
        });
      });
  }
  function rm(t, e, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == 'object' && typeof a.then == 'function')
    ) {
      if (
        ((e = l.alternate),
        e !== null && Ea(e, l, n, !0),
        (l = re.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              Ae === null ? Ku() : l.alternate === null && jt === 0 && (jt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === Su ?
                (l.flags |= 16384)
              : ((e = l.updateQueue),
                e === null ? (l.updateQueue = new Set([a])) : e.add(a),
                rf(t, a, n)),
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
                rf(t, a, n)),
              !1
            );
        }
        throw Error(f(435, l.tag));
      }
      return (rf(t, a, n), Ku(), !1);
    }
    if (ft)
      return (
        (e = re.current),
        e !== null ?
          ((e.flags & 65536) === 0 && (e.flags |= 256),
          (e.flags |= 65536),
          (e.lanes = n),
          a !== nc && ((t = Error(f(422), { cause: a })), sn(xe(t, l))))
        : (a !== nc && ((e = Error(f(423), { cause: a })), sn(xe(e, l))),
          (t = t.current.alternate),
          (t.flags |= 65536),
          (n &= -n),
          (t.lanes |= n),
          (a = xe(a, l)),
          (n = Lc(t.stateNode, a, n)),
          vc(t, n),
          jt !== 4 && (jt = 2)),
        !1
      );
    var u = Error(f(520), { cause: a });
    if (
      ((u = xe(u, l)),
      Cn === null ? (Cn = [u]) : Cn.push(u),
      jt !== 4 && (jt = 2),
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
            (t = Lc(l.stateNode, a, t)),
            vc(l, t),
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
              (n = gr(n)),
              pr(n, t, l, a),
              vc(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Gc = Error(f(461)),
    qt = !1;
  function Kt(t, e, l, a) {
    e.child = t === null ? xo(e, null, l, a) : Fl(e, t.child, l, a);
  }
  function br(t, e, l, a, n) {
    l = l.render;
    var u = e.ref;
    if ('ref' in a) {
      var i = {};
      for (var s in a) s !== 'ref' && (i[s] = a[s]);
    } else i = a;
    return (
      Jl(e),
      (a = Sc(t, e, l, i, u, n)),
      (s = Ec()),
      t !== null && !qt ?
        (xc(t, e, n), Ie(t, e, n))
      : (ft && s && lc(e), (e.flags |= 1), Kt(t, e, a, n), e.child)
    );
  }
  function Sr(t, e, l, a, n) {
    if (t === null) {
      var u = l.type;
      return (
          typeof u == 'function' &&
            !Pi(u) &&
            u.defaultProps === void 0 &&
            l.compare === null
        ) ?
          ((e.tag = 15), (e.type = u), Er(t, e, u, a, n))
        : ((t = vu(l.type, null, a, e, e.mode, n)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((u = t.child), !$c(t, n))) {
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
  function Er(t, e, l, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (un(u, a) && t.ref === e.ref)
        if (((qt = !1), (e.pendingProps = a = u), $c(t, n)))
          (t.flags & 131072) !== 0 && (qt = !0);
        else return ((e.lanes = t.lanes), Ie(t, e, n));
    }
    return Xc(t, e, l, a, n);
  }
  function xr(t, e, l, a) {
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
        return Tr(t, e, u, l, a);
      }
      if ((l & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && pu(e, u !== null ? u.cachePool : null),
          u !== null ? No(e, u) : _c(),
          Ao(e));
      else
        return (
          (a = e.lanes = 536870912),
          Tr(t, e, u !== null ? u.baseLanes | l : l, l, a)
        );
    } else
      u !== null ?
        (pu(e, u.cachePool), No(e, u), El(), (e.memoizedState = null))
      : (t !== null && pu(e, null), _c(), El());
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
  function Tr(t, e, l, a, n) {
    var u = rc();
    return (
      (u = u === null ? null : { parent: Ht._currentValue, pool: u }),
      (e.memoizedState = { baseLanes: l, cachePool: u }),
      t !== null && pu(e, null),
      _c(),
      Ao(e),
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
  function zr(t, e, l) {
    return (
      Fl(e, t.child, null, l),
      (t = Hu(e, e.pendingProps)),
      (t.flags |= 2),
      de(e),
      (e.memoizedState = null),
      t
    );
  }
  function dm(t, e, l) {
    var a = e.pendingProps,
      n = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (ft) {
        if (a.mode === 'hidden')
          return ((t = Hu(e, a)), (e.lanes = 536870912), Sn(null, t));
        if (
          (pc(e),
          (t = xt) ?
            ((t = qd(t, Ne)),
            (t = t !== null && t.data === '&' ? t : null),
            t !== null &&
              ((e.memoizedState = {
                dehydrated: t,
                treeContext: ml !== null ? { id: Ye, overflow: Le } : null,
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (l = co(t)),
              (l.return = e),
              (e.child = l),
              (Vt = e),
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
      if ((pc(e), n))
        if (e.flags & 256) ((e.flags &= -257), (e = zr(t, e, l)));
        else if (e.memoizedState !== null)
          ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(f(558));
      else if (
        (qt || Ea(t, e, l, !1), (n = (l & t.childLanes) !== 0), qt || n)
      ) {
        if (
          ((a = bt),
          a !== null && ((i = ms(a, l)), i !== 0 && i !== u.retryLane))
        )
          throw ((u.retryLane = i), Zl(t, i), ue(a, t, i), Gc);
        (Ku(), (e = zr(t, e, l)));
      } else
        ((t = u.treeContext),
          (xt = Ce(i.nextSibling)),
          (Vt = e),
          (ft = !0),
          (vl = null),
          (Ne = !1),
          t !== null && oo(e, t),
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
  function Xc(t, e, l, a, n) {
    return (
      Jl(e),
      (l = Sc(t, e, l, a, void 0, n)),
      (a = Ec()),
      t !== null && !qt ?
        (xc(t, e, n), Ie(t, e, n))
      : (ft && a && lc(e), (e.flags |= 1), Kt(t, e, l, n), e.child)
    );
  }
  function Nr(t, e, l, a, n, u) {
    return (
      Jl(e),
      (e.updateQueue = null),
      (l = jo(e, a, l, n)),
      Co(t),
      (a = Ec()),
      t !== null && !qt ?
        (xc(t, e, u), Ie(t, e, u))
      : (ft && a && lc(e), (e.flags |= 1), Kt(t, e, l, u), e.child)
    );
  }
  function Ar(t, e, l, a, n) {
    if ((Jl(e), e.stateNode === null)) {
      var u = ga,
        i = l.contextType;
      (typeof i == 'object' && i !== null && (u = wt(i)),
        (u = new l(a, u)),
        (e.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Yc),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = a),
        (u.state = e.memoizedState),
        (u.refs = {}),
        hc(e),
        (i = l.contextType),
        (u.context = typeof i == 'object' && i !== null ? wt(i) : ga),
        (u.state = e.memoizedState),
        (i = l.getDerivedStateFromProps),
        typeof i == 'function' && (qc(e, l, i, a), (u.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((i = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' &&
            u.UNSAFE_componentWillMount(),
          i !== u.state && Yc.enqueueReplaceState(u, u.state, null),
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
      ((i = ga), typeof C == 'object' && C !== null && (i = wt(C)));
      var M = l.getDerivedStateFromProps;
      ((C =
        typeof M == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function'),
        (s = e.pendingProps !== s),
        C ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((s || x !== i) && hr(e, u, a, i)),
        (gl = !1));
      var T = e.memoizedState;
      ((u.state = T),
        yn(e, a, u, n),
        vn(),
        (x = e.memoizedState),
        s || T !== x || gl ?
          (typeof M == 'function' && (qc(e, l, M, a), (x = e.memoizedState)),
          (h = gl || dr(e, l, h, a, T, x, i)) ?
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
        mc(t, e),
        (i = e.memoizedProps),
        (C = Pl(l, i)),
        (u.props = C),
        (M = e.pendingProps),
        (T = u.context),
        (x = l.contextType),
        (h = ga),
        typeof x == 'object' && x !== null && (h = wt(x)),
        (s = l.getDerivedStateFromProps),
        (x =
          typeof s == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((i !== M || T !== h) && hr(e, u, a, h)),
        (gl = !1),
        (T = e.memoizedState),
        (u.state = T),
        yn(e, a, u, n),
        vn());
      var N = e.memoizedState;
      (
        i !== M ||
        T !== N ||
        gl ||
        (t !== null && t.dependencies !== null && _u(t.dependencies))
      ) ?
        (typeof s == 'function' && (qc(e, l, s, a), (N = e.memoizedState)),
        (
          (C =
            gl ||
            dr(e, l, C, a, T, N, h) ||
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
    return (wl(), (e.flags |= 256), Kt(t, e, l, a), e.child);
  }
  var Qc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Zc(t) {
    return { baseLanes: t, cachePool: _o() };
  }
  function Vc(t, e, l) {
    return ((t = t !== null ? t.childLanes & ~l : 0), e && (t |= me), t);
  }
  function jr(t, e, l) {
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
            ((t = qd(t, Ne)),
            (t = t !== null && t.data !== '&' ? t : null),
            t !== null &&
              ((e.memoizedState = {
                dehydrated: t,
                treeContext: ml !== null ? { id: Ye, overflow: Le } : null,
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (l = co(t)),
              (l.return = e),
              (e.child = l),
              (Vt = e),
              (xt = null)))
          : (t = null),
          t === null)
        )
          throw yl(e);
        return (Af(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var s = a.children;
      return (
        (a = a.fallback),
        n ?
          (El(),
          (n = e.mode),
          (s = qu({ mode: 'hidden', children: s }, n)),
          (a = Vl(a, n, l, null)),
          (s.return = e),
          (a.return = e),
          (s.sibling = a),
          (e.child = s),
          (a = e.child),
          (a.memoizedState = Zc(l)),
          (a.childLanes = Vc(t, i, l)),
          (e.memoizedState = Qc),
          Sn(null, a))
        : (Sl(e), wc(e, s))
      );
    }
    var h = t.memoizedState;
    if (h !== null && ((s = h.dehydrated), s !== null)) {
      if (u)
        e.flags & 256 ? (Sl(e), (e.flags &= -257), (e = Kc(t, e, l)))
        : e.memoizedState !== null ?
          (El(), (e.child = t.child), (e.flags |= 128), (e = null))
        : (El(),
          (s = a.fallback),
          (n = e.mode),
          (a = qu({ mode: 'visible', children: a.children }, n)),
          (s = Vl(s, n, l, null)),
          (s.flags |= 2),
          (a.return = e),
          (s.return = e),
          (a.sibling = s),
          (e.child = a),
          Fl(e, t.child, null, l),
          (a = e.child),
          (a.memoizedState = Zc(l)),
          (a.childLanes = Vc(t, i, l)),
          (e.memoizedState = Qc),
          (e = Sn(null, a)));
      else if ((Sl(e), Af(s))) {
        if (((i = s.nextSibling && s.nextSibling.dataset), i)) var x = i.dgst;
        ((i = x),
          (a = Error(f(419))),
          (a.stack = ''),
          (a.digest = i),
          sn({ value: a, source: null, stack: null }),
          (e = Kc(t, e, l)));
      } else if (
        (qt || Ea(t, e, l, !1), (i = (l & t.childLanes) !== 0), qt || i)
      ) {
        if (
          ((i = bt),
          i !== null && ((a = ms(i, l)), a !== 0 && a !== h.retryLane))
        )
          throw ((h.retryLane = a), Zl(t, a), ue(i, t, a), Gc);
        (Nf(s) || Ku(), (e = Kc(t, e, l)));
      } else
        Nf(s) ?
          ((e.flags |= 192), (e.child = t.child), (e = null))
        : ((t = h.treeContext),
          (xt = Ce(s.nextSibling)),
          (Vt = e),
          (ft = !0),
          (vl = null),
          (Ne = !1),
          t !== null && oo(e, t),
          (e = wc(e, a.children)),
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
        x !== null ? (s = Ke(x, s)) : ((s = Vl(s, n, l, null)), (s.flags |= 2)),
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
          : (n = _o()),
          (s = { baseLanes: s.baseLanes | l, cachePool: n })),
        (a.memoizedState = s),
        (a.childLanes = Vc(t, i, l)),
        (e.memoizedState = Qc),
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
  function wc(t, e) {
    return (
      (e = qu({ mode: 'visible', children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function qu(t, e) {
    return ((t = oe(22, t, null, e)), (t.lanes = 0), t);
  }
  function Kc(t, e, l) {
    return (
      Fl(e, t.child, null, l),
      (t = wc(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Rr(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    (a !== null && (a.lanes |= e), cc(t.return, e, l));
  }
  function Jc(t, e, l, a, n, u) {
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
  function Or(t, e, l) {
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
        if (t.tag === 13) t.memoizedState !== null && Rr(t, l, e);
        else if (t.tag === 19) Rr(t, l, e);
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
          Jc(e, !1, n, l, u, a));
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
        Jc(e, !0, l, null, u, a);
        break;
      case 'together':
        Jc(e, !1, null, null, void 0, a);
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
  function $c(t, e) {
    return (t.lanes & e) !== 0 ?
        !0
      : ((t = t.dependencies), !!(t !== null && _u(t)));
  }
  function hm(t, e, l) {
    switch (e.tag) {
      case 3:
        (kt(e, e.stateNode.containerInfo),
          _l(e, Ht, t.memoizedState.cache),
          wl());
        break;
      case 27:
      case 5:
        Ka(e);
        break;
      case 4:
        kt(e, e.stateNode.containerInfo);
        break;
      case 10:
        _l(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), pc(e), null);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return (
            a.dehydrated !== null ? (Sl(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0 ? jr(t, e, l)
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
          if (a) return Or(t, e, l);
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
        return ((e.lanes = 0), xr(t, e, l, e.pendingProps));
      case 24:
        _l(e, Ht, t.memoizedState.cache);
    }
    return Ie(t, e, l);
  }
  function Mr(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) qt = !0;
      else {
        if (!$c(t, l) && (e.flags & 128) === 0) return ((qt = !1), hm(t, e, l));
        qt = (t.flags & 131072) !== 0;
      }
    else ((qt = !1), ft && (e.flags & 1048576) !== 0 && so(e, fn, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (((t = kl(e.elementType)), (e.type = t), typeof t == 'function'))
            Pi(t) ?
              ((a = Pl(t, a)), (e.tag = 1), (e = Ar(null, e, t, a, l)))
            : ((e.tag = 0), (e = Xc(null, e, t, a, l)));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === Et) {
                ((e.tag = 11), (e = br(null, e, t, a, l)));
                break t;
              } else if (n === P) {
                ((e.tag = 14), (e = Sr(null, e, t, a, l)));
                break t;
              }
            }
            throw ((e = Qe(t) || t), Error(f(306, e, '')));
          }
        }
        return e;
      case 0:
        return Xc(t, e, e.type, e.pendingProps, l);
      case 1:
        return ((a = e.type), (n = Pl(a, e.pendingProps)), Ar(t, e, a, n, l));
      case 3:
        t: {
          if ((kt(e, e.stateNode.containerInfo), t === null))
            throw Error(f(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          ((n = u.element), mc(t, e), yn(e, a, null, l));
          var i = e.memoizedState;
          if (
            ((a = i.cache),
            _l(e, Ht, a),
            a !== u.cache && fc(e, [Ht], l, !0),
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
                  xt = Ce(t.firstChild),
                  Vt = e,
                  ft = !0,
                  vl = null,
                  Ne = !0,
                  l = xo(e, null, a, l),
                  e.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
          else {
            if ((wl(), a === n)) {
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
              (a[Zt] = e),
              (a[Pt] = t),
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
            ((a = e.stateNode = Gd(e.type, e.pendingProps, at.current)),
            (Vt = e),
            (Ne = !0),
            (n = xt),
            Rl(e.type) ? ((Cf = n), (xt = Ce(a.firstChild))) : (xt = n)),
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
                (Vt = e),
                (xt = Ce(a.firstChild)),
                (Ne = !1),
                (n = !0))
              : (n = !1)),
            n || yl(e)),
          Ka(e),
          (n = e.type),
          (u = e.pendingProps),
          (i = t !== null ? t.memoizedProps : null),
          (a = u.children),
          xf(n, u) ? (a = null) : i !== null && xf(n, i) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((n = Sc(t, e, nm, null, null, l)), (Bn._currentValue = n)),
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
                ((e.stateNode = l), (Vt = e), (xt = null), (t = !0))
              : (t = !1)),
            t || yl(e)),
          null
        );
      case 13:
        return jr(t, e, l);
      case 4:
        return (
          kt(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = Fl(e, null, a, l)) : Kt(t, e, a, l),
          e.child
        );
      case 11:
        return br(t, e, e.type, e.pendingProps, l);
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
          (n = wt(n)),
          (a = a(n)),
          (e.flags |= 1),
          Kt(t, e, a, l),
          e.child
        );
      case 14:
        return Sr(t, e, e.type, e.pendingProps, l);
      case 15:
        return Er(t, e, e.type, e.pendingProps, l);
      case 19:
        return Or(t, e, l);
      case 31:
        return dm(t, e, l);
      case 22:
        return xr(t, e, l, e.pendingProps);
      case 24:
        return (
          Jl(e),
          (a = wt(Ht)),
          t === null ?
            ((n = rc()),
            n === null &&
              ((n = bt),
              (u = sc()),
              (n.pooledCache = u),
              u.refCount++,
              u !== null && (n.pooledCacheLanes |= l),
              (n = u)),
            (e.memoizedState = { parent: a, cache: n }),
            hc(e),
            _l(e, Ht, n))
          : ((t.lanes & l) !== 0 && (mc(t, e), yn(e, null, null, l), vn()),
            (n = t.memoizedState),
            (u = e.memoizedState),
            n.parent !== a ?
              ((n = { parent: a, cache: a }),
              (e.memoizedState = n),
              e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n),
              _l(e, Ht, a))
            : ((a = u.cache),
              _l(e, Ht, a),
              a !== n.cache && fc(e, [Ht], l, !0))),
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
        else if (ud()) t.flags |= 8192;
        else throw ((Wl = Su), dc);
    } else t.flags &= -16777217;
  }
  function Dr(t, e) {
    if (e.type !== 'stylesheet' || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !$d(e)))
      if (ud()) t.flags |= 8192;
      else throw ((Wl = Su), dc);
  }
  function Yu(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? rs() : 536870912), (t.lanes |= e), (Ua |= e)));
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
  function mm(t, e, l) {
    var a = e.pendingProps;
    switch ((ac(e), e.tag)) {
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
          ke(Ht),
          Ot(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (Sa(e) ?
              Pe(e)
            : t === null ||
              (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
              ((e.flags |= 1024), uc())),
          Tt(e),
          null
        );
      case 26:
        var n = e.type,
          u = e.memoizedState;
        return (
          t === null ?
            (Pe(e),
            u !== null ? (Tt(e), Dr(e, u)) : (Tt(e), kc(e, n, null, a, l)))
          : u ?
            u !== t.memoizedState ?
              (Pe(e), Tt(e), Dr(e, u))
            : (Tt(e), (e.flags &= -16777217))
          : ((t = t.memoizedProps), t !== a && Pe(e), Tt(e), kc(e, n, t, a, l)),
          null
        );
      case 27:
        if (
          (kn(e),
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
            Sa(e) ? ro(e) : ((t = Gd(n, a, l)), (e.stateNode = t), Pe(e)));
        }
        return (Tt(e), null);
      case 5:
        if ((kn(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && Pe(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return (Tt(e), null);
          }
          if (((u = X.current), Sa(e))) ro(e);
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
            ((u[Zt] = e), (u[Pt] = a));
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
              (n = Vt),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            ((t[Zt] = e),
              (t = !!(
                t.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                jd(t.nodeValue, l)
              )),
              t || yl(e, !0));
          } else
            ((t = Pu(t).createTextNode(a)), (t[Zt] = e), (e.stateNode = t));
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
              t[Zt] = e;
            } else
              (wl(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Tt(e), (t = !1));
          } else
            ((l = uc()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = l),
              (t = !0));
          if (!t) return e.flags & 256 ? (de(e), e) : (de(e), null);
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
              n[Zt] = e;
            } else
              (wl(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Tt(e), (n = !1));
          } else
            ((n = uc()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (n = !0));
          if (!n) return e.flags & 256 ? (de(e), e) : (de(e), null);
        }
        return (
          de(e),
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
        return (Ot(), t === null && gf(e.stateNode.containerInfo), Tt(e), null);
      case 10:
        return (ke(e.type), Tt(e), null);
      case 19:
        if ((U(Mt), (a = e.memoizedState), a === null)) return (Tt(e), null);
        if (((n = (e.flags & 128) !== 0), (u = a.rendering), u === null))
          if (n) En(a, !1);
          else {
            if (jt !== 0 || (t !== null && (t.flags & 128) !== 0))
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
                    (io(l, t), (l = l.sibling));
                  return (
                    B(Mt, (Mt.current & 1) | 2),
                    ft && Je(e, a.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            a.tail !== null &&
              ie() > Zu &&
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
              2 * ie() - a.renderingStartTime > Zu &&
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
            (a.renderingStartTime = ie()),
            (t.sibling = null),
            (l = Mt.current),
            B(Mt, n ? (l & 1) | 2 : l & 1),
            ft && Je(e, a.treeForkCount),
            t)
          : (Tt(e), null);
      case 22:
      case 23:
        return (
          de(e),
          gc(),
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
          ke(Ht),
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
  function vm(t, e) {
    switch ((ac(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          ke(Ht),
          Ot(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0 ?
            ((e.flags = (t & -65537) | 128), e)
          : null
        );
      case 26:
      case 27:
      case 5:
        return (kn(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((de(e), e.alternate === null)) throw Error(f(340));
          wl();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (de(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(f(340));
          wl();
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
        return (ke(e.type), null);
      case 22:
      case 23:
        return (
          de(e),
          gc(),
          t !== null && U($l),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (ke(Ht), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ur(t, e) {
    switch ((ac(e), e.tag)) {
      case 3:
        (ke(Ht), Ot());
        break;
      case 26:
      case 27:
      case 5:
        kn(e);
        break;
      case 4:
        Ot();
        break;
      case 31:
        e.memoizedState !== null && de(e);
        break;
      case 13:
        de(e);
        break;
      case 19:
        U(Mt);
        break;
      case 10:
        ke(e.type);
        break;
      case 22:
      case 23:
        (de(e), gc(), t !== null && U($l));
        break;
      case 24:
        ke(Ht);
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
  function Hr(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        zo(e, l);
      } catch (a) {
        mt(t, t.return, a);
      }
    }
  }
  function Br(t, e, l) {
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
  function qr(t) {
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
  function Wc(t, e, l) {
    try {
      var a = t.stateNode;
      (qm(a, t.type, l, e), (a[Pt] = e));
    } catch (n) {
      mt(t, t.return, n);
    }
  }
  function Yr(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Rl(t.type)) ||
      t.tag === 4
    );
  }
  function Fc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Yr(t.return)) return null;
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
  function Ic(t, e, l) {
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
          l != null || e.onclick !== null || (e.onclick = Ve)));
    else if (
      a !== 4 &&
      (a === 27 && Rl(t.type) && ((l = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Ic(t, e, l), t = t.sibling; t !== null; )
        (Ic(t, e, l), (t = t.sibling));
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
  function Lr(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      (Jt(e, a, l), (e[Zt] = t), (e[Pt] = l));
    } catch (u) {
      mt(t, t.return, u);
    }
  }
  var tl = !1,
    Yt = !1,
    Pc = !1,
    Gr = typeof WeakSet == 'function' ? WeakSet : Set,
    Xt = null;
  function ym(t, e) {
    if (((t = t.containerInfo), (Sf = ii), (t = Fs(t)), Ki(t))) {
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
              M = t,
              T = null;
            e: for (;;) {
              for (
                var N;
                M !== l || (n !== 0 && M.nodeType !== 3) || (s = i + n),
                  M !== u || (a !== 0 && M.nodeType !== 3) || (h = i + a),
                  M.nodeType === 3 && (i += M.nodeValue.length),
                  (N = M.firstChild) !== null;
              )
                ((T = M), (M = N));
              for (;;) {
                if (M === t) break e;
                if (
                  (T === l && ++x === n && (s = i),
                  T === u && ++C === a && (h = i),
                  (N = M.nextSibling) !== null)
                )
                  break;
                ((M = T), (T = M.parentNode));
              }
              M = N;
            }
            l = s === -1 || h === -1 ? null : { start: s, end: h };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      Ef = { focusedElem: t, selectionRange: l }, ii = !1, Xt = e;
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
                  zf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      zf(t);
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
  function Xr(t, e, l) {
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
        (a & 64 && Hr(l), a & 512 && Tn(l, l.return));
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
            zo(t, e);
          } catch (i) {
            mt(l, l.return, i);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Lr(l);
      case 26:
      case 5:
        (ll(t, l), e === null && a & 4 && qr(l), a & 512 && Tn(l, l.return));
        break;
      case 12:
        ll(t, l);
        break;
      case 31:
        (ll(t, l), a & 4 && Vr(t, l));
        break;
      case 13:
        (ll(t, l),
          a & 4 && wr(t, l),
          a & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = zm.bind(null, l)), wm(t, l)))));
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
  function Qr(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), Qr(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && ji(e)),
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
    ee = !1;
  function el(t, e, l) {
    for (l = l.child; l !== null; ) (Zr(t, e, l), (l = l.sibling));
  }
  function Zr(t, e, l) {
    if (ce && typeof ce.onCommitFiberUnmount == 'function')
      try {
        ce.onCommitFiberUnmount(Ja, l);
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
          n = ee;
        (Rl(l.type) && ((zt = l.stateNode), (ee = !1)),
          el(t, e, l),
          Dn(l.stateNode),
          (zt = a),
          (ee = n));
        break;
      case 5:
        Yt || Ge(l, e);
      case 6:
        if (
          ((a = zt),
          (n = ee),
          (zt = null),
          el(t, e, l),
          (zt = a),
          (ee = n),
          zt !== null)
        )
          if (ee)
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
          (ee ?
            ((t = zt),
            Hd(
              t.nodeType === 9 ? t.body
              : t.nodeName === 'HTML' ? t.ownerDocument.body
              : t,
              l.stateNode,
            ),
            Qa(t))
          : Hd(zt, l.stateNode));
        break;
      case 4:
        ((a = zt),
          (n = ee),
          (zt = l.stateNode.containerInfo),
          (ee = !0),
          el(t, e, l),
          (zt = a),
          (ee = n));
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
          typeof a.componentWillUnmount == 'function' && Br(l, e, a)),
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
  function wr(t, e) {
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
  function _m(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new Gr()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Gr()),
          e
        );
      default:
        throw Error(f(435, t.tag));
    }
  }
  function Gu(t, e) {
    var l = _m(t);
    e.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var n = Nm.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function le(t, e) {
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
                ((zt = s.stateNode), (ee = !1));
                break t;
              }
              break;
            case 5:
              ((zt = s.stateNode), (ee = !1));
              break t;
            case 3:
            case 4:
              ((zt = s.stateNode.containerInfo), (ee = !0));
              break t;
          }
          s = s.return;
        }
        if (zt === null) throw Error(f(160));
        (Zr(u, i, n),
          (zt = null),
          (ee = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) (Kr(e, t), (e = e.sibling));
  }
  var Ue = null;
  function Kr(t, e) {
    var l = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (le(e, t),
          ae(t),
          a & 4 && (xl(3, t, t.return), xn(3, t), xl(5, t, t.return)));
        break;
      case 1:
        (le(e, t),
          ae(t),
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
          (le(e, t),
          ae(t),
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
                          u[Wa] ||
                          u[Zt] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector('head > title'),
                          )),
                        Jt(u, a, l),
                        (u[Zt] = t),
                        Gt(u),
                        (a = u));
                      break t;
                    case 'link':
                      var i = Kd('link', 'href', n).get(a + (l.href || ''));
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
                        (i = Kd('meta', 'content', n).get(
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
                  ((u[Zt] = t), Gt(u), (a = u));
                }
                t.stateNode = a;
              } else Jd(n, t.type, t.stateNode);
            else t.stateNode = wd(n, a, t.memoizedProps);
          else
            u !== a ?
              (u === null ?
                l.stateNode !== null &&
                ((l = l.stateNode), l.parentNode.removeChild(l))
              : u.count--,
              a === null ?
                Jd(n, t.type, t.stateNode)
              : wd(n, a, t.memoizedProps))
            : a === null &&
              t.stateNode !== null &&
              Wc(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (le(e, t),
          ae(t),
          a & 512 && (Yt || l === null || Ge(l, l.return)),
          l !== null && a & 4 && Wc(t, t.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (le(e, t),
          ae(t),
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
          ((n = t.memoizedProps), Wc(t, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (Pc = !0));
        break;
      case 6:
        if ((le(e, t), ae(t), a & 4)) {
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
          le(e, t),
          (Ue = n),
          ae(t),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Qa(e.containerInfo);
          } catch (Y) {
            mt(t, t.return, Y);
          }
        Pc && ((Pc = !1), Jr(t));
        break;
      case 4:
        ((a = Ue),
          (Ue = ti(t.stateNode.containerInfo)),
          le(e, t),
          ae(t),
          (Ue = a));
        break;
      case 12:
        (le(e, t), ae(t));
        break;
      case 31:
        (le(e, t),
          ae(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Gu(t, a))));
        break;
      case 13:
        (le(e, t),
          ae(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Qu = ie()),
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
          le(e, t),
          (Yt = C),
          (tl = x),
          ae(t),
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
                    var M = h.memoizedProps.style,
                      T =
                        M != null && M.hasOwnProperty('display') ?
                          M.display
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
                  n ? Bd(N, !0) : Bd(h.stateNode, !1);
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
        (le(e, t),
          ae(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Gu(t, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (le(e, t), ae(t));
    }
  }
  function ae(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (Yr(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              u = Fc(t);
            Lu(t, u, n);
            break;
          case 5:
            var i = l.stateNode;
            l.flags & 32 && (ra(i, ''), (l.flags &= -33));
            var s = Fc(t);
            Lu(t, s, i);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo,
              x = Fc(t);
            Ic(t, x, h);
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
  function Jr(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (Jr(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function ll(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (Xr(t, e.alternate, e), (e = e.sibling));
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
          (typeof l.componentWillUnmount == 'function' && Br(e, e.return, l),
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
                  To(h[n], s);
            } catch (x) {
              mt(a, a.return, x);
            }
          }
          (l && i & 64 && Hr(u), Tn(u, u.return));
          break;
        case 27:
          Lr(u);
        case 26:
        case 5:
          (al(n, u, l), l && a === null && i & 4 && qr(u), Tn(u, u.return));
          break;
        case 12:
          al(n, u, l);
          break;
        case 31:
          (al(n, u, l), l && i & 4 && Vr(n, u));
          break;
        case 13:
          (al(n, u, l), l && i & 4 && wr(n, u));
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
  function tf(t, e) {
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
  function ef(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && on(t)));
  }
  function He(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) ($r(t, e, l, a), (e = e.sibling));
  }
  function $r(t, e, l, a) {
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
          n & 2048 && tf(i, e));
        break;
      case 24:
        (He(t, e, l, a), n & 2048 && ef(e.alternate, e));
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
            n && x & 2048 && tf(i.alternate, i));
          break;
        case 24:
          (Oa(u, i, s, h, n), n && x & 2048 && ef(i.alternate, i));
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
            (zn(l, a), n & 2048 && tf(a.alternate, a));
            break;
          case 24:
            (zn(l, a), n & 2048 && ef(a.alternate, a));
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
            a1(l, Ue, t.memoizedState, t.memoizedProps));
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
  function Wr(t) {
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
          ((Xt = a), Ir(a, t));
        }
      Wr(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Fr(t), (t = t.sibling));
  }
  function Fr(t) {
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
          ((Xt = a), Ir(a, t));
        }
      Wr(t);
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
  function Ir(t, e) {
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
          if ((Qr(a), a === l)) {
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
  var gm = {
      getCacheForType: function (t) {
        var e = wt(Ht),
          l = e.data.get(t);
        return (l === void 0 && ((l = t()), e.data.set(t, l)), l);
      },
      cacheSignal: function () {
        return wt(Ht).controller.signal;
      },
    },
    pm = typeof WeakMap == 'function' ? WeakMap : Map,
    rt = 0,
    bt = null,
    nt = null,
    it = 0,
    ht = 0,
    he = null,
    Tl = !1,
    Da = !1,
    lf = !1,
    nl = 0,
    jt = 0,
    zl = 0,
    ea = 0,
    af = 0,
    me = 0,
    Ua = 0,
    Cn = null,
    ne = null,
    nf = !1,
    Qu = 0,
    Pr = 0,
    Zu = 1 / 0,
    Vu = null,
    Nl = null,
    Lt = 0,
    Al = null,
    Ha = null,
    ul = 0,
    uf = 0,
    cf = null,
    td = null,
    jn = 0,
    ff = null;
  function ve() {
    return (
      (rt & 2) !== 0 && it !== 0 ? it & -it
      : R.T !== null ? mf()
      : vs()
    );
  }
  function ed() {
    if (me === 0)
      if ((it & 536870912) === 0 || ft) {
        var t = In;
        ((In <<= 1), (In & 3932160) === 0 && (In = 262144), (me = t));
      } else me = 536870912;
    return ((t = re.current), t !== null && (t.flags |= 32), me);
  }
  function ue(t, e, l) {
    (((t === bt && (ht === 2 || ht === 9)) || t.cancelPendingCommit !== null) &&
      (Ba(t, 0), Cl(t, it, me, !1)),
      ka(t, l),
      ((rt & 2) === 0 || t !== bt) &&
        (t === bt &&
          ((rt & 2) === 0 && (ea |= l), jt === 4 && Cl(t, it, me, !1)),
        Xe(t)));
  }
  function ld(t, e, l) {
    if ((rt & 6) !== 0) throw Error(f(327));
    var a = (!l && (e & 127) === 0 && (e & t.expiredLanes) === 0) || $a(t, e),
      n = a ? Em(t, e) : of(t, e, !0),
      u = a;
    do {
      if (n === 0) {
        Da && !a && Cl(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), u && !bm(l))) {
          ((n = of(t, e, !1)), (u = !1));
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
              n = Cn;
              var h = s.current.memoizedState.isDehydrated;
              if ((h && (Ba(s, i).flags |= 256), (i = of(s, i, !1)), i !== 2)) {
                if (lf && !h) {
                  ((s.errorRecoveryDisabledLanes |= u), (ea |= u), (n = 4));
                  break t;
                }
                ((u = ne),
                  (ne = n),
                  u !== null &&
                    (ne === null ? (ne = u) : ne.push.apply(ne, u)));
              }
              n = i;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          (Ba(t, 0), Cl(t, e, 0, !0));
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
              Cl(a, e, me, !Tl);
              break t;
            case 2:
              ne = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && ((n = Qu + 300 - ie()), 10 < n)) {
            if ((Cl(a, e, me, !Tl), tu(a, 0, !0) !== 0)) break t;
            ((ul = e),
              (a.timeoutHandle = Dd(
                ad.bind(
                  null,
                  a,
                  l,
                  ne,
                  Vu,
                  nf,
                  e,
                  me,
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
          ad(a, l, ne, Vu, nf, e, me, ea, Ua, Tl, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Xe(t);
  }
  function ad(t, e, l, a, n, u, i, s, h, x, C, M, T, N) {
    if (
      ((t.timeoutHandle = -1),
      (M = e.subtreeFlags),
      M & 8192 || (M & 16785408) === 16785408)
    ) {
      ((M = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ve,
      }),
        kr(e, u, M));
      var Y =
        (u & 62914560) === u ? Qu - ie()
        : (u & 4194048) === u ? Pr - ie()
        : 0;
      if (((Y = n1(M, Y)), Y !== null)) {
        ((ul = u),
          (t.cancelPendingCommit = Y(
            rd.bind(null, t, e, u, l, a, n, i, s, h, C, M, null, T, N),
          )),
          Cl(t, u, i, !x));
        return;
      }
    }
    rd(t, e, u, l, a, n, i, s, h);
  }
  function bm(t) {
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
            if (!se(u(), n)) return !1;
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
  function Cl(t, e, l, a) {
    ((e &= ~af),
      (e &= ~ea),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes));
    for (var n = e; 0 < n; ) {
      var u = 31 - fe(n),
        i = 1 << u;
      ((a[u] = -1), (n &= ~i));
    }
    l !== 0 && ds(t, l, e);
  }
  function wu() {
    return (rt & 6) === 0 ? (Rn(0), !1) : !0;
  }
  function sf() {
    if (nt !== null) {
      if (ht === 0) var t = nt.return;
      else ((t = nt), ($e = Kl = null), Tc(t), (Na = null), (dn = 0), (t = nt));
      for (; t !== null; ) (Ur(t.alternate, t), (t = t.return));
      nt = null;
    }
  }
  function Ba(t, e) {
    var l = t.timeoutHandle;
    (l !== -1 && ((t.timeoutHandle = -1), Gm(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      (ul = 0),
      sf(),
      (bt = t),
      (nt = l = Ke(t.current, null)),
      (it = e),
      (ht = 0),
      (he = null),
      (Tl = !1),
      (Da = $a(t, e)),
      (lf = !1),
      (Ua = me = af = ea = zl = jt = 0),
      (ne = Cn = null),
      (nf = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - fe(a),
          u = 1 << n;
        ((e |= t[n]), (a &= ~u));
      }
    return ((nl = e), du(), l);
  }
  function nd(t, e) {
    ((et = null),
      (R.H = bn),
      e === za || e === bu ? ((e = bo()), (ht = 3))
      : e === dc ? ((e = bo()), (ht = 4))
      : (ht =
          e === Gc ? 8
          : e !== null && typeof e == 'object' && typeof e.then == 'function' ?
            6
          : 1),
      (he = e),
      nt === null && ((jt = 1), Uu(t, xe(e, t.current))));
  }
  function ud() {
    var t = re.current;
    return (
      t === null ? !0
      : (it & 4194048) === it ? Ae === null
      : (it & 62914560) === it || (it & 536870912) !== 0 ? t === Ae
      : !1
    );
  }
  function id() {
    var t = R.H;
    return ((R.H = bn), t === null ? bn : t);
  }
  function cd() {
    var t = R.A;
    return ((R.A = gm), t);
  }
  function Ku() {
    ((jt = 4),
      Tl || ((it & 4194048) !== it && re.current !== null) || (Da = !0),
      ((zl & 134217727) === 0 && (ea & 134217727) === 0) ||
        bt === null ||
        Cl(bt, it, me, !1));
  }
  function of(t, e, l) {
    var a = rt;
    rt |= 2;
    var n = id(),
      u = cd();
    ((bt !== t || it !== e) && ((Vu = null), Ba(t, e)), (e = !1));
    var i = jt;
    t: do
      try {
        if (ht !== 0 && nt !== null) {
          var s = nt,
            h = he;
          switch (ht) {
            case 8:
              (sf(), (i = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              re.current === null && (e = !0);
              var x = ht;
              if (((ht = 0), (he = null), qa(t, s, h, x), l && Da)) {
                i = 0;
                break t;
              }
              break;
            default:
              ((x = ht), (ht = 0), (he = null), qa(t, s, h, x));
          }
        }
        (Sm(), (i = jt));
        break;
      } catch (C) {
        nd(t, C);
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
  function Sm() {
    for (; nt !== null; ) fd(nt);
  }
  function Em(t, e) {
    var l = rt;
    rt |= 2;
    var a = id(),
      n = cd();
    bt !== t || it !== e ?
      ((Vu = null), (Zu = ie() + 500), Ba(t, e))
    : (Da = $a(t, e));
    t: do
      try {
        if (ht !== 0 && nt !== null) {
          e = nt;
          var u = he;
          e: switch (ht) {
            case 1:
              ((ht = 0), (he = null), qa(t, e, u, 1));
              break;
            case 2:
            case 9:
              if (go(u)) {
                ((ht = 0), (he = null), sd(e));
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
              go(u) ?
                ((ht = 0), (he = null), sd(e))
              : ((ht = 0), (he = null), qa(t, e, u, 7));
              break;
            case 5:
              var i = null;
              switch (nt.tag) {
                case 26:
                  i = nt.memoizedState;
                case 5:
                case 27:
                  var s = nt;
                  if (i ? $d(i) : s.stateNode.complete) {
                    ((ht = 0), (he = null));
                    var h = s.sibling;
                    if (h !== null) nt = h;
                    else {
                      var x = s.return;
                      x !== null ? ((nt = x), Ju(x)) : (nt = null);
                    }
                    break e;
                  }
              }
              ((ht = 0), (he = null), qa(t, e, u, 5));
              break;
            case 6:
              ((ht = 0), (he = null), qa(t, e, u, 6));
              break;
            case 8:
              (sf(), (jt = 6));
              break t;
            default:
              throw Error(f(462));
          }
        }
        xm();
        break;
      } catch (C) {
        nd(t, C);
      }
    while (!0);
    return (
      ($e = Kl = null),
      (R.H = a),
      (R.A = n),
      (rt = l),
      nt !== null ? 0 : ((bt = null), (it = 0), du(), jt)
    );
  }
  function xm() {
    for (; nt !== null && !Kh(); ) fd(nt);
  }
  function fd(t) {
    var e = Mr(t.alternate, t, nl);
    ((t.memoizedProps = t.pendingProps), e === null ? Ju(t) : (nt = e));
  }
  function sd(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Nr(l, e, e.pendingProps, e.type, void 0, it);
        break;
      case 11:
        e = Nr(l, e, e.pendingProps, e.type.render, e.ref, it);
        break;
      case 5:
        Tc(e);
      default:
        (Ur(l, e), (e = nt = io(e, nl)), (e = Mr(l, e, nl)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Ju(t) : (nt = e));
  }
  function qa(t, e, l, a) {
    (($e = Kl = null), Tc(e), (Na = null), (dn = 0));
    var n = e.return;
    try {
      if (rm(t, n, e, l, it)) {
        ((jt = 1), Uu(t, xe(l, t.current)), (nt = null));
        return;
      }
    } catch (u) {
      if (n !== null) throw ((nt = n), u);
      ((jt = 1), Uu(t, xe(l, t.current)), (nt = null));
      return;
    }
    e.flags & 32768 ?
      (ft || a === 1 ? (t = !0)
      : Da || (it & 536870912) !== 0 ? (t = !1)
      : ((Tl = t = !0),
        (a === 2 || a === 9 || a === 3 || a === 6) &&
          ((a = re.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
      od(e, t))
    : Ju(e);
  }
  function Ju(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        od(e, Tl);
        return;
      }
      t = e.return;
      var l = mm(e.alternate, e, nl);
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
    jt === 0 && (jt = 5);
  }
  function od(t, e) {
    do {
      var l = vm(t.alternate, t);
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
    ((jt = 6), (nt = null));
  }
  function rd(t, e, l, a, n, u, i, s, h) {
    t.cancelPendingCommit = null;
    do $u();
    while (Lt !== 0);
    if ((rt & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      if (
        ((u = e.lanes | e.childLanes),
        (u |= Fi),
        l0(t, l, u, i, s, h),
        t === bt && ((nt = bt = null), (it = 0)),
        (Ha = e),
        (Al = t),
        (ul = l),
        (uf = u),
        (cf = n),
        (td = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ?
          ((t.callbackNode = null),
          (t.callbackPriority = 0),
          Am(Wn, function () {
            return (yd(), null);
          }))
        : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = R.T), (R.T = null), (n = H.p), (H.p = 2), (i = rt), (rt |= 4));
        try {
          ym(t, e, l);
        } finally {
          ((rt = i), (H.p = n), (R.T = a));
        }
      }
      ((Lt = 1), dd(), hd(), md());
    }
  }
  function dd() {
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
          Kr(e, t);
          var u = Ef,
            i = Fs(t.containerInfo),
            s = u.focusedElem,
            h = u.selectionRange;
          if (
            i !== s &&
            s &&
            s.ownerDocument &&
            Ws(s.ownerDocument.documentElement, s)
          ) {
            if (h !== null && Ki(s)) {
              var x = h.start,
                C = h.end;
              if ((C === void 0 && (C = x), 'selectionStart' in s))
                ((s.selectionStart = x),
                  (s.selectionEnd = Math.min(C, s.value.length)));
              else {
                var M = s.ownerDocument || document,
                  T = (M && M.defaultView) || window;
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
                    var E = M.createRange();
                    (E.setStart(p.node, p.offset),
                      N.removeAllRanges(),
                      $ > gt ?
                        (N.addRange(E), N.extend(y.node, y.offset))
                      : (E.setEnd(y.node, y.offset), N.addRange(E)));
                  }
                }
              }
            }
            for (M = [], N = s; (N = N.parentNode); )
              N.nodeType === 1 &&
                M.push({ element: N, left: N.scrollLeft, top: N.scrollTop });
            for (
              typeof s.focus == 'function' && s.focus(), s = 0;
              s < M.length;
              s++
            ) {
              var O = M[s];
              ((O.element.scrollLeft = O.left), (O.element.scrollTop = O.top));
            }
          }
          ((ii = !!Sf), (Ef = Sf = null));
        } finally {
          ((rt = n), (H.p = a), (R.T = l));
        }
      }
      ((t.current = e), (Lt = 2));
    }
  }
  function hd() {
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
          Xr(t, e.alternate, e);
        } finally {
          ((rt = n), (H.p = a), (R.T = l));
        }
      }
      Lt = 3;
    }
  }
  function md() {
    if (Lt === 4 || Lt === 3) {
      ((Lt = 0), Jh());
      var t = Al,
        e = Ha,
        l = ul,
        a = td;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ?
        (Lt = 5)
      : ((Lt = 0), (Ha = Al = null), vd(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (
        (n === 0 && (Nl = null),
        Ai(l),
        (e = e.stateNode),
        ce && typeof ce.onCommitFiberRoot == 'function')
      )
        try {
          ce.onCommitFiberRoot(Ja, e, void 0, (e.current.flags & 128) === 128);
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
          t === ff ?
            jn++
          : ((jn = 0), (ff = t))
        : (jn = 0),
        Rn(0));
    }
  }
  function vd(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), on(e)));
  }
  function $u() {
    return (dd(), hd(), md(), yd());
  }
  function yd() {
    if (Lt !== 5) return !1;
    var t = Al,
      e = uf;
    uf = 0;
    var l = Ai(ul),
      a = R.T,
      n = H.p;
    try {
      ((H.p = 32 > l ? 32 : l), (R.T = null), (l = cf), (cf = null));
      var u = Al,
        i = ul;
      if (((Lt = 0), (Ha = Al = null), (ul = 0), (rt & 6) !== 0))
        throw Error(f(331));
      var s = rt;
      if (
        ((rt |= 4),
        Fr(u.current),
        $r(u, u.current, i, l),
        (rt = s),
        Rn(0, !1),
        ce && typeof ce.onPostCommitFiberRoot == 'function')
      )
        try {
          ce.onPostCommitFiberRoot(Ja, u);
        } catch {}
      return !0;
    } finally {
      ((H.p = n), (R.T = a), vd(t, e));
    }
  }
  function _d(t, e, l) {
    ((e = xe(l, e)),
      (e = Lc(t.stateNode, e, 2)),
      (t = bl(t, e, 2)),
      t !== null && (ka(t, 2), Xe(t)));
  }
  function mt(t, e, l) {
    if (t.tag === 3) _d(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          _d(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' &&
              (Nl === null || !Nl.has(a)))
          ) {
            ((t = xe(l, t)),
              (l = gr(2)),
              (a = bl(e, l, 2)),
              a !== null && (pr(l, a, e, t), ka(a, 2), Xe(a)));
            break;
          }
        }
        e = e.return;
      }
  }
  function rf(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new pm();
      var n = new Set();
      a.set(e, n);
    } else ((n = a.get(e)), n === void 0 && ((n = new Set()), a.set(e, n)));
    n.has(l) ||
      ((lf = !0), n.add(l), (t = Tm.bind(null, t, e, l)), e.then(t, t));
  }
  function Tm(t, e, l) {
    var a = t.pingCache;
    (a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      bt === t &&
        (it & l) === l &&
        (jt === 4 || (jt === 3 && (it & 62914560) === it && 300 > ie() - Qu) ?
          (rt & 2) === 0 && Ba(t, 0)
        : (af |= l),
        Ua === it && (Ua = 0)),
      Xe(t));
  }
  function gd(t, e) {
    (e === 0 && (e = rs()), (t = Zl(t, e)), t !== null && (ka(t, e), Xe(t)));
  }
  function zm(t) {
    var e = t.memoizedState,
      l = 0;
    (e !== null && (l = e.retryLane), gd(t, l));
  }
  function Nm(t, e) {
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
    (a !== null && a.delete(e), gd(t, l));
  }
  function Am(t, e) {
    return xi(t, e);
  }
  var ku = null,
    Ya = null,
    df = !1,
    Wu = !1,
    hf = !1,
    jl = 0;
  function Xe(t) {
    (t !== Ya &&
      t.next === null &&
      (Ya === null ? (ku = Ya = t) : (Ya = Ya.next = t)),
      (Wu = !0),
      df || ((df = !0), jm()));
  }
  function Rn(t, e) {
    if (!hf && Wu) {
      hf = !0;
      do
        for (var l = !1, a = ku; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes,
                s = a.pingedLanes;
              ((u = (1 << (31 - fe(42 | t) + 1)) - 1),
                (u &= n & ~(i & ~s)),
                (u =
                  u & 201326741 ? (u & 201326741) | 1
                  : u ? u | 2
                  : 0));
            }
            u !== 0 && ((l = !0), Ed(a, u));
          } else
            ((u = it),
              (u = tu(
                a,
                a === bt ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || $a(a, u) || ((l = !0), Ed(a, u)));
          a = a.next;
        }
      while (l);
      hf = !1;
    }
  }
  function Cm() {
    pd();
  }
  function pd() {
    Wu = df = !1;
    var t = 0;
    jl !== 0 && Lm() && (t = jl);
    for (var e = ie(), l = null, a = ku; a !== null; ) {
      var n = a.next,
        u = bd(a, e);
      (u === 0 ?
        ((a.next = null),
        l === null ? (ku = n) : (l.next = n),
        n === null && (Ya = l))
      : ((l = a), (t !== 0 || (u & 3) !== 0) && (Wu = !0)),
        (a = n));
    }
    ((Lt !== 0 && Lt !== 5) || Rn(t), jl !== 0 && (jl = 0));
  }
  function bd(t, e) {
    for (
      var l = t.suspendedLanes,
        a = t.pingedLanes,
        n = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;
    ) {
      var i = 31 - fe(u),
        s = 1 << i,
        h = n[i];
      (h === -1 ?
        ((s & l) === 0 || (s & a) !== 0) && (n[i] = e0(s, e))
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
        a !== null && a !== null && Ti(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || $a(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((a !== null && Ti(a), Ai(l))) {
        case 2:
        case 8:
          l = ss;
          break;
        case 32:
          l = Wn;
          break;
        case 268435456:
          l = os;
          break;
        default:
          l = Wn;
      }
      return (
        (a = Sd.bind(null, t)),
        (l = xi(l, a)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      a !== null && a !== null && Ti(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Sd(t, e) {
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
        (ld(t, a, e),
        bd(t, ie()),
        t.callbackNode != null && t.callbackNode === l ?
          Sd.bind(null, t)
        : null)
      )
    );
  }
  function Ed(t, e) {
    if ($u()) return null;
    ld(t, e, !0);
  }
  function jm() {
    Xm(function () {
      (rt & 6) !== 0 ? xi(fs, Cm) : pd();
    });
  }
  function mf() {
    if (jl === 0) {
      var t = xa;
      (t === 0 && ((t = Fn), (Fn <<= 1), (Fn & 261888) === 0 && (Fn = 256)),
        (jl = t));
    }
    return jl;
  }
  function xd(t) {
    return (
      t == null || typeof t == 'symbol' || typeof t == 'boolean' ? null
      : typeof t == 'function' ? t
      : nu('' + t)
    );
  }
  function Td(t, e) {
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
  function Rm(t, e, l, a, n) {
    if (e === 'submit' && l && l.stateNode === n) {
      var u = xd((n[Pt] || null).action),
        i = a.submitter;
      i &&
        ((e =
          (e = i[Pt] || null) ?
            xd(e.formAction)
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
                if (jl !== 0) {
                  var h = i ? Td(n, i) : new FormData(n);
                  Dc(
                    l,
                    { pending: !0, data: h, method: n.method, action: u },
                    null,
                    h,
                  );
                }
              } else
                typeof u == 'function' &&
                  (s.preventDefault(),
                  (h = i ? Td(n, i) : new FormData(n)),
                  Dc(
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
  for (var vf = 0; vf < Wi.length; vf++) {
    var yf = Wi[vf],
      Om = yf.toLowerCase(),
      Mm = yf[0].toUpperCase() + yf.slice(1);
    De(Om, 'on' + Mm);
  }
  (De(to, 'onAnimationEnd'),
    De(eo, 'onAnimationIteration'),
    De(lo, 'onAnimationStart'),
    De('dblclick', 'onDoubleClick'),
    De('focusin', 'onFocus'),
    De('focusout', 'onBlur'),
    De($0, 'onTransitionRun'),
    De(k0, 'onTransitionStart'),
    De(W0, 'onTransitionCancel'),
    De(ao, 'onTransitionEnd'),
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
    Dm = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'
        .split(' ')
        .concat(On),
    );
  function zd(t, e) {
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
    l.has(a) || (Nd(e, t, 2, !1), l.add(a));
  }
  function _f(t, e, l) {
    var a = 0;
    (e && (a |= 4), Nd(l, t, a, e));
  }
  var Fu = '_reactListening' + Math.random().toString(36).slice(2);
  function gf(t) {
    if (!t[Fu]) {
      ((t[Fu] = !0),
        gs.forEach(function (l) {
          l !== 'selectionchange' && (Dm.has(l) || _f(l, !1, t), _f(l, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Fu] || ((e[Fu] = !0), _f('selectionchange', !1, e));
    }
  }
  function Nd(t, e, l, a) {
    switch (eh(e)) {
      case 2:
        var n = c1;
        break;
      case 8:
        n = f1;
        break;
      default:
        n = Df;
    }
    ((l = n.bind(null, e, l, t)),
      (n = void 0),
      !qi ||
        (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') ||
        (n = !0),
      a ?
        n !== void 0 ?
          t.addEventListener(e, l, { capture: !0, passive: n })
        : t.addEventListener(e, l, !0)
      : n !== void 0 ? t.addEventListener(e, l, { passive: n })
      : t.addEventListener(e, l, !1));
  }
  function pf(t, e, l, a, n) {
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
    Rs(function () {
      var x = u,
        C = Hi(l),
        M = [];
      t: {
        var T = no.get(t);
        if (T !== void 0) {
          var N = fu,
            Y = t;
          switch (t) {
            case 'keypress':
              if (iu(l) === 0) break t;
            case 'keydown':
            case 'keyup':
              N = N0;
              break;
            case 'focusin':
              ((Y = 'focus'), (N = Xi));
              break;
            case 'focusout':
              ((Y = 'blur'), (N = Xi));
              break;
            case 'beforeblur':
            case 'afterblur':
              N = Xi;
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
              N = Ds;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              N = m0;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              N = j0;
              break;
            case to:
            case eo:
            case lo:
              N = _0;
              break;
            case ao:
              N = O0;
              break;
            case 'scroll':
            case 'scrollend':
              N = d0;
              break;
            case 'wheel':
              N = D0;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              N = p0;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              N = Hs;
              break;
            case 'toggle':
            case 'beforetoggle':
              N = H0;
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
            var O = y;
            if (
              ((E = O.stateNode),
              (O = O.tag),
              (O !== 5 && O !== 26 && O !== 27) ||
                E === null ||
                p === null ||
                ((O = Ia(y, p)), O != null && $.push(Mn(y, O, E))),
              gt)
            )
              break;
            y = y.return;
          }
          0 < $.length &&
            ((T = new N(T, Y, null, l, C)), M.push({ event: T, listeners: $ }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((T = t === 'mouseover' || t === 'pointerover'),
            (N = t === 'mouseout' || t === 'pointerout'),
            T &&
              l !== Ui &&
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
              (($ = Ds),
              (O = 'onMouseLeave'),
              (p = 'onMouseEnter'),
              (y = 'mouse'),
              (t === 'pointerout' || t === 'pointerover') &&
                (($ = Hs),
                (O = 'onPointerLeave'),
                (p = 'onPointerEnter'),
                (y = 'pointer')),
              (gt = N == null ? T : Fa(N)),
              (E = Y == null ? T : Fa(Y)),
              (T = new $(O, y + 'leave', N, l, C)),
              (T.target = gt),
              (T.relatedTarget = E),
              (O = null),
              ia(C) === x &&
                (($ = new $(p, y + 'enter', Y, l, C)),
                ($.target = E),
                ($.relatedTarget = gt),
                (O = $)),
              (gt = O),
              N && Y)
            )
              e: {
                for ($ = Um, p = N, y = Y, E = 0, O = p; O; O = $(O)) E++;
                O = 0;
                for (var w = y; w; w = $(w)) O++;
                for (; 0 < E - O; ) ((p = $(p)), E--);
                for (; 0 < O - E; ) ((y = $(y)), O--);
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
            (N !== null && Ad(M, T, N, $, !1),
              Y !== null && gt !== null && Ad(M, gt, Y, $, !0));
          }
        }
        t: {
          if (
            ((T = x ? Fa(x) : window),
            (N = T.nodeName && T.nodeName.toLowerCase()),
            N === 'select' || (N === 'input' && T.type === 'file'))
          )
            var st = Zs;
          else if (Xs(T))
            if (Vs) st = w0;
            else {
              st = Z0;
              var Q = Q0;
            }
          else
            ((N = T.nodeName),
              (
                !N ||
                N.toLowerCase() !== 'input' ||
                (T.type !== 'checkbox' && T.type !== 'radio')
              ) ?
                x && Di(x.elementType) && (st = Zs)
              : (st = V0));
          if (st && (st = st(t, x))) {
            Qs(M, st, l, C);
            break t;
          }
          (Q && Q(t, T, x),
            t === 'focusout' &&
              x &&
              T.type === 'number' &&
              x.memoizedProps.value != null &&
              Mi(T, 'number', T.value));
        }
        switch (((Q = x ? Fa(x) : window), t)) {
          case 'focusin':
            (Xs(Q) || Q.contentEditable === 'true') &&
              ((va = Q), (Ji = x), (cn = null));
            break;
          case 'focusout':
            cn = Ji = va = null;
            break;
          case 'mousedown':
            $i = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (($i = !1), Is(M, l, C));
            break;
          case 'selectionchange':
            if (J0) break;
          case 'keydown':
          case 'keyup':
            Is(M, l, C);
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
            Ls(t, l) && (ct = 'onCompositionEnd')
          : t === 'keydown' && l.keyCode === 229 && (ct = 'onCompositionStart');
        (ct &&
          (Bs &&
            l.locale !== 'ko' &&
            (ma || ct !== 'onCompositionStart' ?
              ct === 'onCompositionEnd' && ma && (lt = Os())
            : ((hl = C),
              (Yi = 'value' in hl ? hl.value : hl.textContent),
              (ma = !0))),
          (Q = Iu(x, ct)),
          0 < Q.length &&
            ((ct = new Us(ct, t, null, l, C)),
            M.push({ event: ct, listeners: Q }),
            lt ?
              (ct.data = lt)
            : ((lt = Gs(l)), lt !== null && (ct.data = lt)))),
          (lt = q0 ? Y0(t, l) : L0(t, l)) &&
            ((ct = Iu(x, 'onBeforeInput')),
            0 < ct.length &&
              ((Q = new Us('onBeforeInput', 'beforeinput', null, l, C)),
              M.push({ event: Q, listeners: ct }),
              (Q.data = lt))),
          Rm(M, t, x, l, C));
      }
      zd(M, e);
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
  function Um(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Ad(t, e, l, a, n) {
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
  var Hm = /\r\n?/g,
    Bm = /\u0000|\uFFFD/g;
  function Cd(t) {
    return (typeof t == 'string' ? t : '' + t)
      .replace(
        Hm,
        `
`,
      )
      .replace(Bm, '');
  }
  function jd(t, e) {
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
        a != null && (t.onclick = Ve);
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
        Ze(t, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
        break;
      case 'xlinkArcrole':
        Ze(t, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
        break;
      case 'xlinkRole':
        Ze(t, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
        break;
      case 'xlinkShow':
        Ze(t, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
        break;
      case 'xlinkTitle':
        Ze(t, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
        break;
      case 'xlinkType':
        Ze(t, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
        break;
      case 'xmlBase':
        Ze(t, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
        break;
      case 'xmlLang':
        Ze(t, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
        break;
      case 'xmlSpace':
        Ze(t, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
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
          ((l = o0.get(l) || l), eu(t, l, a));
    }
  }
  function bf(t, e, l, a, n, u) {
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
        a != null && (t.onclick = Ve);
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
        if (!ps.hasOwnProperty(l))
          t: {
            if (
              l[0] === 'o' &&
              l[1] === 'n' &&
              ((n = l.endsWith('Capture')),
              (e = l.slice(2, n ? l.length - 7 : void 0)),
              (u = t[Pt] || null),
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
        Ts(t, u, s, h, x, i, n, !1);
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
        Ns(t, a, n, u);
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
        if (Di(e)) {
          for (C in l)
            l.hasOwnProperty(C) &&
              ((a = l[C]), a !== void 0 && bf(t, e, C, a, l, void 0));
          return;
        }
    }
    for (s in l)
      l.hasOwnProperty(s) && ((a = l[s]), a != null && _t(t, e, s, a, l, null));
  }
  function qm(t, e, l, a) {
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
          var M = l[N];
          if (l.hasOwnProperty(N) && M != null)
            switch (N) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                h = M;
              default:
                a.hasOwnProperty(N) || _t(t, e, N, null, a, M);
            }
        }
        for (var T in a) {
          var N = a[T];
          if (((M = l[T]), a.hasOwnProperty(T) && (N != null || M != null)))
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
                N !== M && _t(t, e, T, N, a, M);
            }
        }
        Oi(t, i, s, h, x, C, u, n);
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
        zs(t, T, N);
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
        if (Di(e)) {
          for (var gt in l)
            ((T = l[gt]),
              l.hasOwnProperty(gt) &&
                T !== void 0 &&
                !a.hasOwnProperty(gt) &&
                bf(t, e, gt, void 0, a, T));
          for (C in a)
            ((T = a[C]),
              (N = l[C]),
              !a.hasOwnProperty(C) ||
                T === N ||
                (T === void 0 && N === void 0) ||
                bf(t, e, C, T, a, N));
          return;
        }
    }
    for (var p in l)
      ((T = l[p]),
        l.hasOwnProperty(p) &&
          T != null &&
          !a.hasOwnProperty(p) &&
          _t(t, e, p, null, a, T));
    for (M in a)
      ((T = a[M]),
        (N = l[M]),
        !a.hasOwnProperty(M) ||
          T === N ||
          (T == null && N == null) ||
          _t(t, e, M, T, a, N));
  }
  function Rd(t) {
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
  function Ym() {
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
        if (u && s && Rd(i)) {
          for (i = 0, s = n.responseEnd, a += 1; a < l.length; a++) {
            var h = l[a],
              x = h.startTime;
            if (x > s) break;
            var C = h.transferSize,
              M = h.initiatorType;
            C &&
              Rd(M) &&
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
  var Sf = null,
    Ef = null;
  function Pu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Od(t) {
    switch (t) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Md(t, e) {
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
  function xf(t, e) {
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
  var Tf = null;
  function Lm() {
    var t = window.event;
    return (
      t && t.type === 'popstate' ?
        t === Tf ?
          !1
        : ((Tf = t), !0)
      : ((Tf = null), !1)
    );
  }
  var Dd = typeof setTimeout == 'function' ? setTimeout : void 0,
    Gm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Ud = typeof Promise == 'function' ? Promise : void 0,
    Xm =
      typeof queueMicrotask == 'function' ? queueMicrotask
      : typeof Ud < 'u' ?
        function (t) {
          return Ud.resolve(null).then(t).catch(Qm);
        }
      : Dd;
  function Qm(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Rl(t) {
    return t === 'head';
  }
  function Hd(t, e) {
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
            (u[Wa] ||
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
  function Bd(t, e) {
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
  function zf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (zf(l), ji(l));
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
        if (!t[Wa])
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
      if (((t = Ce(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Vm(t, e, l) {
    if (e === '') return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') &&
          !l) ||
        ((t = Ce(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function qd(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') &&
          !e) ||
        ((t = Ce(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Nf(t) {
    return t.data === '$?' || t.data === '$~';
  }
  function Af(t) {
    return (
      t.data === '$!' ||
      (t.data === '$?' && t.ownerDocument.readyState !== 'loading')
    );
  }
  function wm(t, e) {
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
  function Ce(t) {
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
  function Yd(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === '/$' || l === '/&') {
          if (e === 0) return Ce(t.nextSibling);
          e--;
        } else
          (l !== '$' && l !== '$!' && l !== '$?' && l !== '$~' && l !== '&') ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Ld(t) {
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
  function Gd(t, e, l) {
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
    ji(t);
  }
  var je = new Map(),
    Xd = new Set();
  function ti(t) {
    return (
      typeof t.getRootNode == 'function' ? t.getRootNode()
      : t.nodeType === 9 ? t
      : t.ownerDocument
    );
  }
  var il = H.d;
  H.d = { f: Km, r: Jm, D: $m, C: km, L: Wm, m: Fm, X: Pm, S: Im, M: t1 };
  function Km() {
    var t = il.f(),
      e = wu();
    return t || e;
  }
  function Jm(t) {
    var e = ca(t);
    e !== null && e.tag === 5 && e.type === 'form' ? nr(e) : il.r(t);
  }
  var La = typeof document > 'u' ? null : document;
  function Qd(t, e, l) {
    var a = La;
    if (a && typeof e == 'string' && e) {
      var n = Se(e);
      ((n = 'link[rel="' + t + '"][href="' + n + '"]'),
        typeof l == 'string' && (n += '[crossorigin="' + l + '"]'),
        Xd.has(n) ||
          (Xd.add(n),
          (t = { rel: t, crossOrigin: l, href: e }),
          a.querySelector(n) === null &&
            ((e = a.createElement('link')),
            Jt(e, 'link', t),
            Gt(e),
            a.head.appendChild(e))));
    }
  }
  function $m(t) {
    (il.D(t), Qd('dns-prefetch', t, null));
  }
  function km(t, e) {
    (il.C(t, e), Qd('preconnect', t, e));
  }
  function Wm(t, e, l) {
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
      je.has(u) ||
        ((t = z(
          {
            rel: 'preload',
            href: e === 'image' && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l,
        )),
        je.set(u, t),
        a.querySelector(n) !== null ||
          (e === 'style' && a.querySelector(Un(u))) ||
          (e === 'script' && a.querySelector(Hn(u))) ||
          ((e = a.createElement('link')),
          Jt(e, 'link', t),
          Gt(e),
          a.head.appendChild(e)));
    }
  }
  function Fm(t, e) {
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
        !je.has(u) &&
        ((t = z({ rel: 'modulepreload', href: t }, e)),
        je.set(u, t),
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
  function Im(t, e, l) {
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
            (l = je.get(u)) && jf(t, l));
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
  function Pm(t, e) {
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
          (e = je.get(n)) && Rf(t, e),
          (u = l.createElement('script')),
          Gt(u),
          Jt(u, 'link', t),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function t1(t, e) {
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
          (e = je.get(n)) && Rf(t, e),
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
              je.has(t) ||
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
                je.set(t, l),
                u || e1(n, t, l, i.state))),
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
  function e1(t, e, l, a) {
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
  function wd(t, e, l) {
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
            (n = je.get(n)) && jf(a, n),
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
              (n = je.get(u)) && ((a = z({}, l)), Rf(a, n)),
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
  function jf(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Rf(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var li = null;
  function Kd(t, e, l) {
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
          u[Wa] ||
          u[Zt] ||
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
  function Jd(t, e, l) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === 'title' ? t.querySelector('head > title') : null,
      ));
  }
  function l1(t, e, l) {
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
  function $d(t) {
    return !(t.type === 'stylesheet' && (t.state.loading & 3) === 0);
  }
  function a1(t, e, l, a) {
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
          (n = je.get(n)) && jf(a, n),
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
  var Of = 0;
  function n1(t, e) {
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
          0 < t.imgBytes && Of === 0 && (Of = 62500 * Ym());
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
            (t.imgBytes > Of ? 50 : 800) + e,
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
        e.forEach(u1, t),
        (ni = null),
        ai.call(t)));
  }
  function u1(t, e) {
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
    $$typeof: k,
    Provider: null,
    Consumer: null,
    _currentValue: W,
    _currentValue2: W,
    _threadCount: 0,
  };
  function i1(t, e, l, a, n, u, i, s, h) {
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
      (this.expirationTimes = zi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = zi(0)),
      (this.hiddenUpdates = zi(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = h),
      (this.incompleteTransitions = new Map()));
  }
  function kd(t, e, l, a, n, u, i, s, h, x, C, M) {
    return (
      (t = new i1(t, e, l, i, h, x, C, M, s)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = oe(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = sc()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: e }),
      hc(u),
      t
    );
  }
  function Wd(t) {
    return t ? ((t = ga), t) : ga;
  }
  function Fd(t, e, l, a, n, u) {
    ((n = Wd(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = pl(e)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = bl(t, a, e)),
      l !== null && (ue(l, t, e), mn(l, t, e)));
  }
  function Id(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Mf(t, e) {
    (Id(t, e), (t = t.alternate) && Id(t, e));
  }
  function Pd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Zl(t, 67108864);
      (e !== null && ue(e, t, 67108864), Mf(t, 67108864));
    }
  }
  function th(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ve();
      e = Ni(e);
      var l = Zl(t, e);
      (l !== null && ue(l, t, e), Mf(t, e));
    }
  }
  var ii = !0;
  function c1(t, e, l, a) {
    var n = R.T;
    R.T = null;
    var u = H.p;
    try {
      ((H.p = 2), Df(t, e, l, a));
    } finally {
      ((H.p = u), (R.T = n));
    }
  }
  function f1(t, e, l, a) {
    var n = R.T;
    R.T = null;
    var u = H.p;
    try {
      ((H.p = 8), Df(t, e, l, a));
    } finally {
      ((H.p = u), (R.T = n));
    }
  }
  function Df(t, e, l, a) {
    if (ii) {
      var n = Uf(a);
      if (n === null) (pf(t, e, a, ci, l), lh(t, a));
      else if (o1(n, t, e, l, a)) a.stopPropagation();
      else if ((lh(t, a), e & 4 && -1 < s1.indexOf(t))) {
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
                      var h = 1 << (31 - fe(i));
                      ((s.entanglements[1] |= h), (i &= ~h));
                    }
                    (Xe(u), (rt & 6) === 0 && ((Zu = ie() + 500), Rn(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((s = Zl(u, 2)), s !== null && ue(s, u, 2), wu(), Mf(u, 2));
            }
          if (((u = Uf(a)), u === null && pf(t, e, a, ci, l), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else pf(t, e, a, null, l);
    }
  }
  function Uf(t) {
    return ((t = Hi(t)), Hf(t));
  }
  var ci = null;
  function Hf(t) {
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
  function eh(t) {
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
        switch ($h()) {
          case fs:
            return 2;
          case ss:
            return 8;
          case Wn:
          case kh:
            return 32;
          case os:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Bf = !1,
    Ol = null,
    Ml = null,
    Dl = null,
    qn = new Map(),
    Yn = new Map(),
    Ul = [],
    s1 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      );
  function lh(t, e) {
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
        e !== null && ((e = ca(e)), e !== null && Pd(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        n !== null && e.indexOf(n) === -1 && e.push(n),
        t);
  }
  function o1(t, e, l, a, n) {
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
  function ah(t) {
    var e = ia(t.target);
    if (e !== null) {
      var l = v(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = b(l)), e !== null)) {
            ((t.blockedOn = e),
              ys(t.priority, function () {
                th(l);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = j(l)), e !== null)) {
            ((t.blockedOn = e),
              ys(t.priority, function () {
                th(l);
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
      var l = Uf(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        ((Ui = a), l.target.dispatchEvent(a), (Ui = null));
      } else return ((e = ca(l)), e !== null && Pd(e), (t.blockedOn = l), !1);
      e.shift();
    }
    return !0;
  }
  function nh(t, e, l) {
    fi(t) && l.delete(e);
  }
  function r1() {
    ((Bf = !1),
      Ol !== null && fi(Ol) && (Ol = null),
      Ml !== null && fi(Ml) && (Ml = null),
      Dl !== null && fi(Dl) && (Dl = null),
      qn.forEach(nh),
      Yn.forEach(nh));
  }
  function si(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Bf ||
        ((Bf = !0),
        c.unstable_scheduleCallback(c.unstable_NormalPriority, r1)));
  }
  var oi = null;
  function uh(t) {
    oi !== t &&
      ((oi = t),
      c.unstable_scheduleCallback(c.unstable_NormalPriority, function () {
        oi === t && (oi = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            n = t[e + 2];
          if (typeof a != 'function') {
            if (Hf(a || l) === null) continue;
            break;
          }
          var u = ca(l);
          u !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Dc(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
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
      (ah(l), l.blockedOn === null && Ul.shift());
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          i = n[Pt] || null;
        if (typeof u == 'function') i || uh(l);
        else if (i) {
          var s = null;
          if (u && u.hasAttribute('formAction')) {
            if (((n = u), (i = u[Pt] || null))) s = i.formAction;
            else if (Hf(n) !== null) continue;
          } else s = i.action;
          (typeof s == 'function' ? (l[a + 1] = s) : (l.splice(a, 3), (a -= 3)),
            uh(l));
        }
      }
  }
  function ih() {
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
  function qf(t) {
    this._internalRoot = t;
  }
  ((ri.prototype.render = qf.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(f(409));
      var l = e.current,
        a = ve();
      Fd(l, a, t, e, null, null);
    }),
    (ri.prototype.unmount = qf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (Fd(t.current, 2, null, t, null, null), wu(), (e[ua] = null));
        }
      }));
  function ri(t) {
    this._internalRoot = t;
  }
  ri.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = vs();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Ul.length && e !== 0 && e < Ul[l].priority; l++);
      (Ul.splice(l, 0, t), l === 0 && ah(t));
    }
  };
  var ch = o.version;
  if (ch !== '19.2.4') throw Error(f(527, ch, '19.2.4'));
  H.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == 'function' ?
          Error(f(188))
        : ((t = Object.keys(t).join(',')), Error(f(268, t)));
    return (
      (t = g(e)),
      (t = t !== null ? D(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var d1 = {
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
        ((Ja = di.inject(d1)), (ce = di));
      } catch {}
  }
  return (
    (Xn.createRoot = function (t, e) {
      if (!m(t)) throw Error(f(299));
      var l = !1,
        a = '',
        n = mr,
        u = vr,
        i = yr;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
        (e = kd(t, 1, !1, null, null, l, a, null, n, u, i, ih)),
        (t[ua] = e.current),
        gf(t),
        new qf(e)
      );
    }),
    (Xn.hydrateRoot = function (t, e, l) {
      if (!m(t)) throw Error(f(299));
      var a = !1,
        n = '',
        u = mr,
        i = vr,
        s = yr,
        h = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (i = l.onCaughtError),
          l.onRecoverableError !== void 0 && (s = l.onRecoverableError),
          l.formState !== void 0 && (h = l.formState)),
        (e = kd(t, 1, !0, e, l ?? null, a, n, h, u, i, s, ih)),
        (e.context = Wd(null)),
        (l = e.current),
        (a = ve()),
        (a = Ni(a)),
        (n = pl(a)),
        (n.callback = null),
        bl(l, n, a),
        (l = a),
        (e.current.lanes = l),
        ka(e, l),
        Xe(e),
        (t[ua] = e.current),
        gf(t),
        new ri(e)
      );
    }),
    (Xn.version = '19.2.4'),
    Xn
  );
}
var _h;
function E1() {
  if (_h) return Lf.exports;
  _h = 1;
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
  return (c(), (Lf.exports = S1()), Lf.exports);
}
var x1 = E1(),
  A = Wf();
var gh = 'popstate';
function T1(c = {}) {
  function o(m, v) {
    let {
      pathname: b = '/',
      search: j = '',
      hash: S = '',
    } = aa(m.location.hash.substring(1));
    return (
      !b.startsWith('/') && !b.startsWith('.') && (b = '/' + b),
      $f(
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
        g = S.indexOf('#');
      j = g === -1 ? S : S.slice(0, g);
    }
    return j + '#' + (typeof v == 'string' ? v : wn(v));
  }
  function f(m, v) {
    Be(
      m.pathname.charAt(0) === '/',
      `relative pathnames are not supported in hash history.push(${JSON.stringify(v)})`,
    );
  }
  return N1(o, r, f, c);
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
function z1() {
  return Math.random().toString(36).substring(2, 10);
}
function ph(c, o) {
  return { usr: c.state, key: c.key, idx: o };
}
function $f(c, o, r = null, f) {
  return {
    pathname: typeof c == 'string' ? c : c.pathname,
    search: '',
    hash: '',
    ...(typeof o == 'string' ? aa(o) : o),
    state: r,
    key: (o && o.key) || f || z1(),
  };
}
function wn({ pathname: c = '/', search: o = '', hash: r = '' }) {
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
function N1(c, o, r, f = {}) {
  let { window: m = document.defaultView, v5Compat: v = !1 } = f,
    b = m.history,
    j = 'POP',
    S = null,
    g = D();
  g == null && ((g = 0), b.replaceState({ ...b.state, idx: g }, ''));
  function D() {
    return (b.state || { idx: null }).idx;
  }
  function z() {
    j = 'POP';
    let G = D(),
      K = G == null ? null : G - g;
    ((g = G), S && S({ action: j, location: V.location, delta: K }));
  }
  function q(G, K) {
    j = 'PUSH';
    let L = $f(V.location, G, K);
    (r && r(L, G), (g = D() + 1));
    let k = ph(L, g),
      Et = V.createHref(L);
    try {
      b.pushState(k, '', Et);
    } catch (St) {
      if (St instanceof DOMException && St.name === 'DataCloneError') throw St;
      m.location.assign(Et);
    }
    v && S && S({ action: j, location: V.location, delta: 1 });
  }
  function Z(G, K) {
    j = 'REPLACE';
    let L = $f(V.location, G, K);
    (r && r(L, G), (g = D()));
    let k = ph(L, g),
      Et = V.createHref(L);
    (b.replaceState(k, '', Et),
      v && S && S({ action: j, location: V.location, delta: 0 }));
  }
  function F(G) {
    return A1(G);
  }
  let V = {
    get action() {
      return j;
    },
    get location() {
      return c(m, b);
    },
    listen(G) {
      if (S) throw new Error('A history only accepts one active listener');
      return (
        m.addEventListener(gh, z),
        (S = G),
        () => {
          (m.removeEventListener(gh, z), (S = null));
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
    replace: Z,
    go(G) {
      return b.go(G);
    },
  };
  return V;
}
function A1(c, o = !1) {
  let r = 'http://localhost';
  (typeof window < 'u' &&
    (r =
      window.location.origin !== 'null' ?
        window.location.origin
      : window.location.href),
    Nt(r, 'No window.location.(origin|href) available to create URL'));
  let f = typeof c == 'string' ? c : wn(c);
  return (
    (f = f.replace(/ $/, '%20')),
    !o && f.startsWith('//') && (f = r + f),
    new URL(f, r)
  );
}
function Th(c, o, r = '/') {
  return C1(c, o, r, !1);
}
function C1(c, o, r, f) {
  let m = typeof o == 'string' ? aa(o) : o,
    v = sl(m.pathname || '/', r);
  if (v == null) return null;
  let b = zh(c);
  j1(b);
  let j = null;
  for (let S = 0; j == null && S < b.length; ++S) {
    let g = G1(v);
    j = Y1(b[S], g, f);
  }
  return j;
}
function zh(c, o = [], r = [], f = '', m = !1) {
  let v = (b, j, S = m, g) => {
    let D = {
      relativePath: g === void 0 ? b.path || '' : g,
      caseSensitive: b.caseSensitive === !0,
      childrenIndex: j,
      route: b,
    };
    if (D.relativePath.startsWith('/')) {
      if (!D.relativePath.startsWith(f) && S) return;
      (Nt(
        D.relativePath.startsWith(f),
        `Absolute route path "${D.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (D.relativePath = D.relativePath.slice(f.length)));
    }
    let z = fl([f, D.relativePath]),
      q = r.concat(D);
    (b.children &&
      b.children.length > 0 &&
      (Nt(
        b.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${z}".`,
      ),
      zh(b.children, o, q, z, S)),
      !(b.path == null && !b.index) &&
        o.push({ path: z, score: B1(z, b.index), routesMeta: q }));
  };
  return (
    c.forEach((b, j) => {
      if (b.path === '' || !b.path?.includes('?')) v(b, j);
      else for (let S of Nh(b.path)) v(b, j, !0, S);
    }),
    o
  );
}
function Nh(c) {
  let o = c.split('/');
  if (o.length === 0) return [];
  let [r, ...f] = o,
    m = r.endsWith('?'),
    v = r.replace(/\?$/, '');
  if (f.length === 0) return m ? [v, ''] : [v];
  let b = Nh(f.join('/')),
    j = [];
  return (
    j.push(...b.map((S) => (S === '' ? v : [v, S].join('/')))),
    m && j.push(...b),
    j.map((S) => (c.startsWith('/') && S === '' ? '/' : S))
  );
}
function j1(c) {
  c.sort((o, r) =>
    o.score !== r.score ?
      r.score - o.score
    : q1(
        o.routesMeta.map((f) => f.childrenIndex),
        r.routesMeta.map((f) => f.childrenIndex),
      ),
  );
}
var R1 = /^:[\w-]+$/,
  O1 = 3,
  M1 = 2,
  D1 = 1,
  U1 = 10,
  H1 = -2,
  bh = (c) => c === '*';
function B1(c, o) {
  let r = c.split('/'),
    f = r.length;
  return (
    r.some(bh) && (f += H1),
    o && (f += M1),
    r
      .filter((m) => !bh(m))
      .reduce(
        (m, v) =>
          m +
          (R1.test(v) ? O1
          : v === '' ? D1
          : U1),
        f,
      )
  );
}
function q1(c, o) {
  return c.length === o.length && c.slice(0, -1).every((f, m) => f === o[m]) ?
      c[c.length - 1] - o[o.length - 1]
    : 0;
}
function Y1(c, o, r = !1) {
  let { routesMeta: f } = c,
    m = {},
    v = '/',
    b = [];
  for (let j = 0; j < f.length; ++j) {
    let S = f[j],
      g = j === f.length - 1,
      D = v === '/' ? o : o.slice(v.length) || '/',
      z = yi(
        { path: S.relativePath, caseSensitive: S.caseSensitive, end: g },
        D,
      ),
      q = S.route;
    if (
      (!z &&
        g &&
        r &&
        !f[f.length - 1].route.index &&
        (z = yi(
          { path: S.relativePath, caseSensitive: S.caseSensitive, end: !1 },
          D,
        )),
      !z)
    )
      return null;
    (Object.assign(m, z.params),
      b.push({
        params: m,
        pathname: fl([v, z.pathname]),
        pathnameBase: V1(fl([v, z.pathnameBase])),
        route: q,
      }),
      z.pathnameBase !== '/' && (v = fl([v, z.pathnameBase])));
  }
  return b;
}
function yi(c, o) {
  typeof c == 'string' && (c = { path: c, caseSensitive: !1, end: !0 });
  let [r, f] = L1(c.path, c.caseSensitive, c.end),
    m = o.match(r);
  if (!m) return null;
  let v = m[0],
    b = v.replace(/(.)\/+$/, '$1'),
    j = m.slice(1);
  return {
    params: f.reduce((g, { paramName: D, isOptional: z }, q) => {
      if (D === '*') {
        let F = j[q] || '';
        b = v.slice(0, v.length - F.length).replace(/(.)\/+$/, '$1');
      }
      const Z = j[q];
      return (
        z && !Z ? (g[D] = void 0) : (g[D] = (Z || '').replace(/%2F/g, '/')),
        g
      );
    }, {}),
    pathname: v,
    pathnameBase: b,
    pattern: c,
  };
}
function L1(c, o = !1, r = !0) {
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
function G1(c) {
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
var X1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Q1(c, o = '/') {
  let {
      pathname: r,
      search: f = '',
      hash: m = '',
    } = typeof c == 'string' ? aa(c) : c,
    v;
  return (
    r ?
      ((r = r.replace(/\/\/+/g, '/')),
      r.startsWith('/') ? (v = Sh(r.substring(1), '/')) : (v = Sh(r, o)))
    : (v = o),
    { pathname: v, search: w1(f), hash: K1(m) }
  );
}
function Sh(c, o) {
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
function Z1(c) {
  return c.filter(
    (o, r) => r === 0 || (o.route.path && o.route.path.length > 0),
  );
}
function Ah(c) {
  let o = Z1(c);
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
  let S = Q1(m, j),
    g = b && b !== '/' && b.endsWith('/'),
    D = (v || b === '.') && r.endsWith('/');
  return (!S.pathname.endsWith('/') && (g || D) && (S.pathname += '/'), S);
}
var fl = (c) => c.join('/').replace(/\/\/+/g, '/'),
  V1 = (c) => c.replace(/\/+$/, '').replace(/^\/*/, '/'),
  w1 = (c) =>
    !c || c === '?' ? ''
    : c.startsWith('?') ? c
    : '?' + c,
  K1 = (c) =>
    !c || c === '#' ? ''
    : c.startsWith('#') ? c
    : '#' + c,
  J1 = class {
    constructor(c, o, r, f = !1) {
      ((this.status = c),
        (this.statusText = o || ''),
        (this.internal = f),
        r instanceof Error ?
          ((this.data = r.toString()), (this.error = r))
        : (this.data = r));
    }
  };
function $1(c) {
  return (
    c != null &&
    typeof c.status == 'number' &&
    typeof c.statusText == 'string' &&
    typeof c.internal == 'boolean' &&
    'data' in c
  );
}
function k1(c) {
  return (
    c
      .map((o) => o.route.path)
      .filter(Boolean)
      .join('/')
      .replace(/\/\/*/g, '/') || '/'
  );
}
var jh =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
function Rh(c, o) {
  let r = c;
  if (typeof r != 'string' || !X1.test(r))
    return { absoluteURL: void 0, isExternal: !1, to: r };
  let f = r,
    m = !1;
  if (jh)
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
var Oh = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(Oh);
var W1 = ['GET', ...Oh];
new Set(W1);
var wa = A.createContext(null);
wa.displayName = 'DataRouter';
var _i = A.createContext(null);
_i.displayName = 'DataRouterState';
var F1 = A.createContext(!1),
  Mh = A.createContext({ isTransitioning: !1 });
Mh.displayName = 'ViewTransition';
var I1 = A.createContext(new Map());
I1.displayName = 'Fetchers';
var P1 = A.createContext(null);
P1.displayName = 'Await';
var Oe = A.createContext(null);
Oe.displayName = 'Navigation';
var Kn = A.createContext(null);
Kn.displayName = 'Location';
var ol = A.createContext({ outlet: null, matches: [], isDataRoute: !1 });
ol.displayName = 'Route';
var Ff = A.createContext(null);
Ff.displayName = 'RouteError';
var Dh = 'REACT_ROUTER_ERROR',
  tv = 'REDIRECT',
  ev = 'ROUTE_ERROR_RESPONSE';
function lv(c) {
  if (c.startsWith(`${Dh}:${tv}:{`))
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
function av(c) {
  if (c.startsWith(`${Dh}:${ev}:{`))
    try {
      let o = JSON.parse(c.slice(40));
      if (
        typeof o == 'object' &&
        o &&
        typeof o.status == 'number' &&
        typeof o.statusText == 'string'
      )
        return new J1(o.status, o.statusText, o.data);
    } catch {}
}
function nv(c, { relative: o } = {}) {
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
var Uh =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Hh(c) {
  A.useContext(Oe).static || A.useLayoutEffect(c);
}
function uv() {
  let { isDataRoute: c } = A.useContext(ol);
  return c ? gv() : iv();
}
function iv() {
  Nt(
    Jn(),
    'useNavigate() may be used only in the context of a <Router> component.',
  );
  let c = A.useContext(wa),
    { basename: o, navigator: r } = A.useContext(Oe),
    { matches: f } = A.useContext(ol),
    { pathname: m } = na(),
    v = JSON.stringify(Ah(f)),
    b = A.useRef(!1);
  return (
    Hh(() => {
      b.current = !0;
    }),
    A.useCallback(
      (S, g = {}) => {
        if ((Be(b.current, Uh), !b.current)) return;
        if (typeof S == 'number') {
          r.go(S);
          return;
        }
        let D = Ch(S, JSON.parse(v), m, g.relative === 'path');
        (c == null &&
          o !== '/' &&
          (D.pathname = D.pathname === '/' ? o : fl([o, D.pathname])),
          (g.replace ? r.replace : r.push)(D, g.state, g));
      },
      [o, r, v, m, c],
    )
  );
}
A.createContext(null);
function $n(c, { relative: o } = {}) {
  let { matches: r } = A.useContext(ol),
    { pathname: f } = na(),
    m = JSON.stringify(Ah(r));
  return A.useMemo(() => Ch(c, JSON.parse(m), f, o === 'path'), [c, m, f, o]);
}
function cv(c, o) {
  return Bh(c, o);
}
function Bh(c, o, r, f, m) {
  Nt(
    Jn(),
    'useRoutes() may be used only in the context of a <Router> component.',
  );
  let { navigator: v } = A.useContext(Oe),
    { matches: b } = A.useContext(ol),
    j = b[b.length - 1],
    S = j ? j.params : {},
    g = j ? j.pathname : '/',
    D = j ? j.pathnameBase : '/',
    z = j && j.route;
  {
    let L = (z && z.path) || '';
    Yh(
      g,
      !z || L.endsWith('*') || L.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L === '/' ? '*' : `${L}/*`}">.`,
    );
  }
  let q = na(),
    Z;
  if (o) {
    let L = typeof o == 'string' ? aa(o) : o;
    (Nt(
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
  let G = Th(c, { pathname: V });
  (Be(
    z || G != null,
    `No routes matched location "${Z.pathname}${Z.search}${Z.hash}" `,
  ),
    Be(
      G == null ||
        G[G.length - 1].route.element !== void 0 ||
        G[G.length - 1].route.Component !== void 0 ||
        G[G.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${Z.pathname}${Z.search}${Z.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let K = dv(
    G &&
      G.map((L) =>
        Object.assign({}, L, {
          params: Object.assign({}, S, L.params),
          pathname: fl([
            D,
            v.encodeLocation ?
              v.encodeLocation(
                L.pathname.replace(/\?/g, '%3F').replace(/#/g, '%23'),
              ).pathname
            : L.pathname,
          ]),
          pathnameBase:
            L.pathnameBase === '/' ?
              D
            : fl([
                D,
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
              ...Z,
            },
            navigationType: 'POP',
          },
        },
        K,
      )
    : K;
}
function fv() {
  let c = _v(),
    o =
      $1(c) ? `${c.status} ${c.statusText}`
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
var sv = A.createElement(fv, null),
  qh = class extends A.Component {
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
        const r = av(c.digest);
        r && (c = r);
      }
      let o =
        c !== void 0 ?
          A.createElement(
            ol.Provider,
            { value: this.props.routeContext },
            A.createElement(Ff.Provider, {
              value: c,
              children: this.props.component,
            }),
          )
        : this.props.children;
      return this.context ? A.createElement(ov, { error: c }, o) : o;
    }
  };
qh.contextType = F1;
var wf = new WeakMap();
function ov({ children: c, error: o }) {
  let { basename: r } = A.useContext(Oe);
  if (
    typeof o == 'object' &&
    o &&
    'digest' in o &&
    typeof o.digest == 'string'
  ) {
    let f = lv(o.digest);
    if (f) {
      let m = wf.get(o);
      if (m) throw m;
      let v = Rh(f.location, r);
      if (jh && !wf.get(o))
        if (v.isExternal || f.reloadDocument)
          window.location.href = v.absoluteURL || v.to;
        else {
          const b = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(v.to, {
              replace: f.replace,
            }),
          );
          throw (wf.set(o, b), b);
        }
      return A.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${v.absoluteURL || v.to}`,
      });
    }
  }
  return c;
}
function rv({ routeContext: c, match: o, children: r }) {
  let f = A.useContext(wa);
  return (
    f &&
      f.static &&
      f.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (f.staticContext._deepestRenderedBoundaryId = o.route.id),
    A.createElement(ol.Provider, { value: c }, r)
  );
}
function dv(c, o = [], r = null, f = null, m = null) {
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
    let D = v.findIndex((z) => z.route.id && b?.[z.route.id] !== void 0);
    (Nt(
      D >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(b).join(',')}`,
    ),
      (v = v.slice(0, Math.min(v.length, D + 1))));
  }
  let j = !1,
    S = -1;
  if (r)
    for (let D = 0; D < v.length; D++) {
      let z = v[D];
      if (
        ((z.route.HydrateFallback || z.route.hydrateFallbackElement) && (S = D),
        z.route.id)
      ) {
        let { loaderData: q, errors: Z } = r,
          F =
            z.route.loader &&
            !q.hasOwnProperty(z.route.id) &&
            (!Z || Z[z.route.id] === void 0);
        if (z.route.lazy || F) {
          ((j = !0), S >= 0 ? (v = v.slice(0, S + 1)) : (v = [v[0]]));
          break;
        }
      }
    }
  let g =
    r && f ?
      (D, z) => {
        f(D, {
          location: r.location,
          params: r.matches?.[0]?.params ?? {},
          unstable_pattern: k1(r.matches),
          errorInfo: z,
        });
      }
    : void 0;
  return v.reduceRight((D, z, q) => {
    let Z,
      F = !1,
      V = null,
      G = null;
    r &&
      ((Z = b && z.route.id ? b[z.route.id] : void 0),
      (V = z.route.errorElement || sv),
      j &&
        (S < 0 && q === 0 ?
          (Yh(
            'route-fallback',
            !1,
            'No `HydrateFallback` element provided to render during initial hydration',
          ),
          (F = !0),
          (G = null))
        : S === q && ((F = !0), (G = z.route.hydrateFallbackElement || null))));
    let K = o.concat(v.slice(0, q + 1)),
      L = () => {
        let k;
        return (
          Z ? (k = V)
          : F ? (k = G)
          : z.route.Component ? (k = A.createElement(z.route.Component, null))
          : z.route.element ? (k = z.route.element)
          : (k = D),
          A.createElement(rv, {
            match: z,
            routeContext: { outlet: D, matches: K, isDataRoute: r != null },
            children: k,
          })
        );
      };
    return r && (z.route.ErrorBoundary || z.route.errorElement || q === 0) ?
        A.createElement(qh, {
          location: r.location,
          revalidation: r.revalidation,
          component: V,
          error: Z,
          children: L(),
          routeContext: { outlet: null, matches: K, isDataRoute: !0 },
          onError: g,
        })
      : L();
  }, null);
}
function If(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function hv(c) {
  let o = A.useContext(wa);
  return (Nt(o, If(c)), o);
}
function mv(c) {
  let o = A.useContext(_i);
  return (Nt(o, If(c)), o);
}
function vv(c) {
  let o = A.useContext(ol);
  return (Nt(o, If(c)), o);
}
function Pf(c) {
  let o = vv(c),
    r = o.matches[o.matches.length - 1];
  return (
    Nt(
      r.route.id,
      `${c} can only be used on routes that contain a unique "id"`,
    ),
    r.route.id
  );
}
function yv() {
  return Pf('useRouteId');
}
function _v() {
  let c = A.useContext(Ff),
    o = mv('useRouteError'),
    r = Pf('useRouteError');
  return c !== void 0 ? c : o.errors?.[r];
}
function gv() {
  let { router: c } = hv('useNavigate'),
    o = Pf('useNavigate'),
    r = A.useRef(!1);
  return (
    Hh(() => {
      r.current = !0;
    }),
    A.useCallback(
      async (m, v = {}) => {
        (Be(r.current, Uh),
          r.current &&
            (typeof m == 'number' ?
              await c.navigate(m)
            : await c.navigate(m, { fromRouteId: o, ...v })));
      },
      [c, o],
    )
  );
}
var Eh = {};
function Yh(c, o, r) {
  !o && !Eh[c] && ((Eh[c] = !0), Be(!1, r));
}
A.memo(pv);
function pv({ routes: c, future: o, state: r, onError: f }) {
  return Bh(c, void 0, r, f, o);
}
function cl(c) {
  Nt(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.',
  );
}
function bv({
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
      pathname: g = '/',
      search: D = '',
      hash: z = '',
      state: q = null,
      key: Z = 'default',
    } = r,
    F = A.useMemo(() => {
      let V = sl(g, j);
      return V == null ? null : (
          {
            location: { pathname: V, search: D, hash: z, state: q, key: Z },
            navigationType: f,
          }
        );
    }, [j, g, D, z, q, Z, f]);
  return (
    Be(
      F != null,
      `<Router basename="${j}"> is not able to match the URL "${g}${D}${z}" because it does not start with the basename, so the <Router> won't render anything.`,
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
function Sv({ children: c, location: o }) {
  return cv(kf(c), o);
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
var mi = 'get',
  vi = 'application/x-www-form-urlencoded';
function gi(c) {
  return typeof HTMLElement < 'u' && c instanceof HTMLElement;
}
function Ev(c) {
  return gi(c) && c.tagName.toLowerCase() === 'button';
}
function xv(c) {
  return gi(c) && c.tagName.toLowerCase() === 'form';
}
function Tv(c) {
  return gi(c) && c.tagName.toLowerCase() === 'input';
}
function zv(c) {
  return !!(c.metaKey || c.altKey || c.ctrlKey || c.shiftKey);
}
function Nv(c, o) {
  return c.button === 0 && (!o || o === '_self') && !zv(c);
}
var hi = null;
function Av() {
  if (hi === null)
    try {
      (new FormData(document.createElement('form'), 0), (hi = !1));
    } catch {
      hi = !0;
    }
  return hi;
}
var Cv = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function Kf(c) {
  return c != null && !Cv.has(c) ?
      (Be(
        !1,
        `"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${vi}"`,
      ),
      null)
    : c;
}
function jv(c, o) {
  let r, f, m, v, b;
  if (xv(c)) {
    let j = c.getAttribute('action');
    ((f = j ? sl(j, o) : null),
      (r = c.getAttribute('method') || mi),
      (m = Kf(c.getAttribute('enctype')) || vi),
      (v = new FormData(c)));
  } else if (Ev(c) || (Tv(c) && (c.type === 'submit' || c.type === 'image'))) {
    let j = c.form;
    if (j == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let S = c.getAttribute('formaction') || j.getAttribute('action');
    if (
      ((f = S ? sl(S, o) : null),
      (r = c.getAttribute('formmethod') || j.getAttribute('method') || mi),
      (m =
        Kf(c.getAttribute('formenctype')) ||
        Kf(j.getAttribute('enctype')) ||
        vi),
      (v = new FormData(j, c)),
      !Av())
    ) {
      let { name: g, type: D, value: z } = c;
      if (D === 'image') {
        let q = g ? `${g}.` : '';
        (v.append(`${q}x`, '0'), v.append(`${q}y`, '0'));
      } else g && v.append(g, z);
    }
  } else {
    if (gi(c))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((r = mi), (f = null), (m = vi), (b = c));
  }
  return (
    v && m === 'text/plain' && ((b = v), (v = void 0)),
    { action: f, method: r.toLowerCase(), encType: m, formData: v, body: b }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function ts(c, o) {
  if (c === !1 || c === null || typeof c > 'u') throw new Error(o);
}
function Rv(c, o, r, f) {
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
async function Ov(c, o) {
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
function Mv(c) {
  return (
    c == null ? !1
    : c.href == null ?
      c.rel === 'preload' &&
      typeof c.imageSrcSet == 'string' &&
      typeof c.imageSizes == 'string'
    : typeof c.rel == 'string' && typeof c.href == 'string'
  );
}
async function Dv(c, o, r) {
  let f = await Promise.all(
    c.map(async (m) => {
      let v = o.routes[m.route.id];
      if (v) {
        let b = await Ov(v, r);
        return b.links ? b.links() : [];
      }
      return [];
    }),
  );
  return qv(
    f
      .flat(1)
      .filter(Mv)
      .filter((m) => m.rel === 'stylesheet' || m.rel === 'preload')
      .map((m) =>
        m.rel === 'stylesheet' ?
          { ...m, rel: 'prefetch', as: 'style' }
        : { ...m, rel: 'prefetch' },
      ),
  );
}
function xh(c, o, r, f, m, v) {
  let b = (S, g) => (r[g] ? S.route.id !== r[g].route.id : !0),
    j = (S, g) =>
      r[g].pathname !== S.pathname ||
      (r[g].route.path?.endsWith('*') && r[g].params['*'] !== S.params['*']);
  return (
    v === 'assets' ? o.filter((S, g) => b(S, g) || j(S, g))
    : v === 'data' ?
      o.filter((S, g) => {
        let D = f.routes[S.route.id];
        if (!D || !D.hasLoader) return !1;
        if (b(S, g) || j(S, g)) return !0;
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
function Uv(c, o, { includeHydrateFallback: r } = {}) {
  return Hv(
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
function Hv(c) {
  return [...new Set(c)];
}
function Bv(c) {
  let o = {},
    r = Object.keys(c).sort();
  for (let f of r) o[f] = c[f];
  return o;
}
function qv(c, o) {
  let r = new Set();
  return (
    new Set(o),
    c.reduce((f, m) => {
      let v = JSON.stringify(Bv(m));
      return (r.has(v) || (r.add(v), f.push({ key: v, link: m })), f);
    }, [])
  );
}
function Lh() {
  let c = A.useContext(wa);
  return (
    ts(
      c,
      'You must render this element inside a <DataRouterContext.Provider> element',
    ),
    c
  );
}
function Yv() {
  let c = A.useContext(_i);
  return (
    ts(
      c,
      'You must render this element inside a <DataRouterStateContext.Provider> element',
    ),
    c
  );
}
var es = A.createContext(void 0);
es.displayName = 'FrameworkContext';
function Gh() {
  let c = A.useContext(es);
  return (
    ts(c, 'You must render this element inside a <HydratedRouter> element'),
    c
  );
}
function Lv(c, o) {
  let r = A.useContext(es),
    [f, m] = A.useState(!1),
    [v, b] = A.useState(!1),
    {
      onFocus: j,
      onBlur: S,
      onMouseEnter: g,
      onMouseLeave: D,
      onTouchStart: z,
    } = o,
    q = A.useRef(null);
  (A.useEffect(() => {
    if ((c === 'render' && b(!0), c === 'viewport')) {
      let V = (K) => {
          K.forEach((L) => {
            b(L.isIntersecting);
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
    A.useEffect(() => {
      if (f) {
        let V = setTimeout(() => {
          b(!0);
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
            onFocus: Qn(j, Z),
            onBlur: Qn(S, F),
            onMouseEnter: Qn(g, Z),
            onMouseLeave: Qn(D, F),
            onTouchStart: Qn(z, Z),
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
function Gv({ page: c, ...o }) {
  let { router: r } = Lh(),
    f = A.useMemo(() => Th(r.routes, c, r.basename), [r.routes, c, r.basename]);
  return f ? A.createElement(Qv, { page: c, matches: f, ...o }) : null;
}
function Xv(c) {
  let { manifest: o, routeModules: r } = Gh(),
    [f, m] = A.useState([]);
  return (
    A.useEffect(() => {
      let v = !1;
      return (
        Dv(c, o, r).then((b) => {
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
function Qv({ page: c, matches: o, ...r }) {
  let f = na(),
    { future: m, manifest: v, routeModules: b } = Gh(),
    { basename: j } = Lh(),
    { loaderData: S, matches: g } = Yv(),
    D = A.useMemo(() => xh(c, o, g, v, f, 'data'), [c, o, g, v, f]),
    z = A.useMemo(() => xh(c, o, g, v, f, 'assets'), [c, o, g, v, f]),
    q = A.useMemo(() => {
      if (c === f.pathname + f.search + f.hash) return [];
      let V = new Set(),
        G = !1;
      if (
        (o.forEach((L) => {
          let k = v.routes[L.route.id];
          !k ||
            !k.hasLoader ||
            ((
              (!D.some((Et) => Et.route.id === L.route.id) &&
                L.route.id in S &&
                b[L.route.id]?.shouldRevalidate) ||
              k.hasClientLoader
            ) ?
              (G = !0)
            : V.add(L.route.id));
        }),
        V.size === 0)
      )
        return [];
      let K = Rv(c, j, m.unstable_trailingSlashAwareDataRequests, 'data');
      return (
        G &&
          V.size > 0 &&
          K.searchParams.set(
            '_routes',
            o
              .filter((L) => V.has(L.route.id))
              .map((L) => L.route.id)
              .join(','),
          ),
        [K.pathname + K.search]
      );
    }, [j, m.unstable_trailingSlashAwareDataRequests, S, f, v, D, o, c, b]),
    Z = A.useMemo(() => Uv(z, v), [z, v]),
    F = Xv(z);
  return A.createElement(
    A.Fragment,
    null,
    q.map((V) =>
      A.createElement('link', {
        key: V,
        rel: 'prefetch',
        as: 'fetch',
        href: V,
        ...r,
      }),
    ),
    Z.map((V) =>
      A.createElement('link', { key: V, rel: 'modulepreload', href: V, ...r }),
    ),
    F.map(({ key: V, link: G }) =>
      A.createElement('link', {
        key: V,
        nonce: r.nonce,
        ...G,
        crossOrigin: G.crossOrigin ?? r.crossOrigin,
      }),
    ),
  );
}
function Zv(...c) {
  return (o) => {
    c.forEach((r) => {
      typeof r == 'function' ? r(o) : r != null && (r.current = o);
    });
  };
}
var Vv =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  Vv && (window.__reactRouterVersion = '7.13.0');
} catch {}
function wv({
  basename: c,
  children: o,
  unstable_useTransitions: r,
  window: f,
}) {
  let m = A.useRef();
  m.current == null && (m.current = T1({ window: f, v5Compat: !0 }));
  let v = m.current,
    [b, j] = A.useState({ action: v.action, location: v.location }),
    S = A.useCallback(
      (g) => {
        r === !1 ? j(g) : A.startTransition(() => j(g));
      },
      [r],
    );
  return (
    A.useLayoutEffect(() => v.listen(S), [v, S]),
    A.createElement(bv, {
      basename: c,
      children: o,
      location: b.location,
      navigationType: b.action,
      navigator: v,
      unstable_useTransitions: r,
    })
  );
}
var Xh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ls = A.forwardRef(function (
    {
      onClick: o,
      discover: r = 'render',
      prefetch: f = 'none',
      relative: m,
      reloadDocument: v,
      replace: b,
      state: j,
      target: S,
      to: g,
      preventScrollReset: D,
      viewTransition: z,
      unstable_defaultShouldRevalidate: q,
      ...Z
    },
    F,
  ) {
    let { basename: V, unstable_useTransitions: G } = A.useContext(Oe),
      K = typeof g == 'string' && Xh.test(g),
      L = Rh(g, V);
    g = L.to;
    let k = nv(g, { relative: m }),
      [Et, St, At] = Lv(f, Z),
      P = $v(g, {
        replace: b,
        state: j,
        target: S,
        preventScrollReset: D,
        relative: m,
        viewTransition: z,
        unstable_defaultShouldRevalidate: q,
        unstable_useTransitions: G,
      });
    function Rt(pe) {
      (o && o(pe), pe.defaultPrevented || P(pe));
    }
    let Qt = A.createElement('a', {
      ...Z,
      ...At,
      'href': L.absoluteURL || k,
      'onClick': L.isExternal || v ? o : Rt,
      'ref': Zv(F, St),
      'target': S,
      'data-discover': !K && r === 'render' ? 'true' : void 0,
    });
    return Et && !K ?
        A.createElement(A.Fragment, null, Qt, A.createElement(Gv, { page: k }))
      : Qt;
  });
ls.displayName = 'Link';
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
    ...g
  },
  D,
) {
  let z = $n(b, { relative: g.relative }),
    q = na(),
    Z = A.useContext(_i),
    { navigator: F, basename: V } = A.useContext(Oe),
    G = Z != null && Pv(z) && j === !0,
    K = F.encodeLocation ? F.encodeLocation(z).pathname : z.pathname,
    L = q.pathname,
    k =
      Z && Z.navigation && Z.navigation.location ?
        Z.navigation.location.pathname
      : null;
  (r ||
    ((L = L.toLowerCase()),
    (k = k ? k.toLowerCase() : null),
    (K = K.toLowerCase())),
    k && V && (k = sl(k, V) || k));
  const Et = K !== '/' && K.endsWith('/') ? K.length - 1 : K.length;
  let St = L === K || (!m && L.startsWith(K) && L.charAt(Et) === '/'),
    At =
      k != null &&
      (k === K || (!m && k.startsWith(K) && k.charAt(K.length) === '/')),
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
    ls,
    {
      ...g,
      'aria-current': Rt,
      'className': Qt,
      'ref': D,
      'style': pe,
      'to': b,
      'viewTransition': j,
    },
    typeof S == 'function' ? S(P) : S,
  );
});
la.displayName = 'NavLink';
var Kv = A.forwardRef(
  (
    {
      discover: c = 'render',
      fetcherKey: o,
      navigate: r,
      reloadDocument: f,
      replace: m,
      state: v,
      method: b = mi,
      action: j,
      onSubmit: S,
      relative: g,
      preventScrollReset: D,
      viewTransition: z,
      unstable_defaultShouldRevalidate: q,
      ...Z
    },
    F,
  ) => {
    let { unstable_useTransitions: V } = A.useContext(Oe),
      G = Fv(),
      K = Iv(j, { relative: g }),
      L = b.toLowerCase() === 'get' ? 'get' : 'post',
      k = typeof j == 'string' && Xh.test(j),
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
              relative: g,
              preventScrollReset: D,
              viewTransition: z,
              unstable_defaultShouldRevalidate: q,
            });
        V && r !== !1 ? A.startTransition(() => Rt()) : Rt();
      };
    return A.createElement('form', {
      'ref': F,
      'method': L,
      'action': K,
      'onSubmit': f ? S : Et,
      ...Z,
      'data-discover': !k && c === 'render' ? 'true' : void 0,
    });
  },
);
Kv.displayName = 'Form';
function Jv(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Qh(c) {
  let o = A.useContext(wa);
  return (Nt(o, Jv(c)), o);
}
function $v(
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
  let g = uv(),
    D = na(),
    z = $n(c, { relative: v });
  return A.useCallback(
    (q) => {
      if (Nv(q, o)) {
        q.preventDefault();
        let Z = r !== void 0 ? r : wn(D) === wn(z),
          F = () =>
            g(c, {
              replace: Z,
              state: f,
              preventScrollReset: m,
              relative: v,
              viewTransition: b,
              unstable_defaultShouldRevalidate: j,
            });
        S ? A.startTransition(() => F()) : F();
      }
    },
    [D, g, z, r, f, o, c, m, v, b, j, S],
  );
}
var kv = 0,
  Wv = () => `__${String(++kv)}__`;
function Fv() {
  let { router: c } = Qh('useSubmit'),
    { basename: o } = A.useContext(Oe),
    r = yv(),
    f = c.fetch,
    m = c.navigate;
  return A.useCallback(
    async (v, b = {}) => {
      let { action: j, method: S, encType: g, formData: D, body: z } = jv(v, o);
      if (b.navigate === !1) {
        let q = b.fetcherKey || Wv();
        await f(q, r, b.action || j, {
          unstable_defaultShouldRevalidate: b.unstable_defaultShouldRevalidate,
          preventScrollReset: b.preventScrollReset,
          formData: D,
          body: z,
          formMethod: b.method || S,
          formEncType: b.encType || g,
          flushSync: b.flushSync,
        });
      } else
        await m(b.action || j, {
          unstable_defaultShouldRevalidate: b.unstable_defaultShouldRevalidate,
          preventScrollReset: b.preventScrollReset,
          formData: D,
          body: z,
          formMethod: b.method || S,
          formEncType: b.encType || g,
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
function Iv(c, { relative: o } = {}) {
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
    if (S.some((D) => D === '')) {
      (j.delete('index'),
        S.filter((z) => z).forEach((z) => j.append('index', z)));
      let D = j.toString();
      v.search = D ? `?${D}` : '';
    }
  }
  return (
    (!c || c === '.') &&
      m.route.index &&
      (v.search = v.search ? v.search.replace(/^\?/, '?index&') : '?index'),
    r !== '/' && (v.pathname = v.pathname === '/' ? r : fl([r, v.pathname])),
    wn(v)
  );
}
function Pv(c, { relative: o } = {}) {
  let r = A.useContext(Mh);
  Nt(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: f } = Qh('useViewTransitionState'),
    m = $n(c, { relative: o });
  if (!r.isTransitioning) return !1;
  let v = sl(r.currentLocation.pathname, f) || r.currentLocation.pathname,
    b = sl(r.nextLocation.pathname, f) || r.nextLocation.pathname;
  return yi(m.pathname, b) != null || yi(m.pathname, v) != null;
}
const ty = '_menu_fvuuk_1',
  ey = '_menu__nav_fvuuk_17',
  ly = '_menu__list_fvuuk_24',
  ay = '_menu__link_fvuuk_33',
  ny = '_menu__footer_fvuuk_59',
  uy = '_footer_btn_fvuuk_66',
  Ft = {
    'menu': ty,
    'menu--open': '_menu--open_fvuuk_14',
    'menu__nav': ey,
    'menu__list': ly,
    'menu__link': ay,
    'menu__link--active': '_menu__link--active_fvuuk_49',
    'menu__footer': ny,
    'footer_btn': uy,
    'footer_btn--active': '_footer_btn--active_fvuuk_87',
  },
  Zh =
    "data:image/svg+xml,%3csvg%20width='16'%20height='14'%20viewBox='0%200%2016%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.296%200.332589C9.82592%200.113015%2010.3939%200%2010.9675%200C11.5411%200%2012.1091%200.113015%2012.6391%200.332589C13.169%200.552163%2013.6504%200.873992%2014.056%201.27969C14.4615%201.68515%2014.7833%202.16654%2015.0028%202.69636C15.2224%203.22628%2015.3354%203.79427%2015.3354%204.36788C15.3354%204.9415%2015.2224%205.50949%2015.0028%206.03941C14.7833%206.56928%2014.4615%207.05071%2014.0558%207.45619C14.0558%207.45623%2014.0559%207.45615%2014.0558%207.45619L8.1625%2013.3495C7.88913%2013.6229%207.44592%2013.6229%207.17255%2013.3495L1.27922%207.45619C0.460149%206.63712%200%205.52622%200%204.36788C0%203.20954%200.460149%202.09865%201.27922%201.27958C2.09829%200.460505%203.20919%200.000356495%204.36753%200.000356495C5.52587%200.000356495%206.63676%200.460505%207.45583%201.27958L7.66753%201.49127L7.8791%201.27969C7.87906%201.27973%207.87914%201.27965%207.8791%201.27969C8.28459%200.874047%208.76613%200.552142%209.296%200.332589ZM13.0658%202.26941C12.7903%201.99378%2012.4632%201.77513%2012.1031%201.62596C11.7431%201.47678%2011.3572%201.4%2010.9675%201.4C10.5778%201.4%2010.1919%201.47678%209.83191%201.62596C9.47189%201.77513%209.14478%201.99378%208.86928%202.26941L8.1625%202.97619C7.88913%203.24956%207.44592%203.24956%207.17255%202.97619L6.46589%202.26953C5.90937%201.71301%205.15456%201.40036%204.36753%201.40036C3.58049%201.40036%202.82569%201.71301%202.26917%202.26953C1.71265%202.82604%201.4%203.58085%201.4%204.36788C1.4%205.15492%201.71265%205.90972%202.26917%206.46624L7.66753%2011.8646L13.0659%206.46624C13.3415%206.19074%2013.5603%205.86352%2013.7095%205.5035C13.8586%205.14347%2013.9354%204.75759%2013.9354%204.36788C13.9354%203.97818%2013.8586%203.59229%2013.7095%203.23227C13.5603%202.87224%2013.3414%202.54491%2013.0658%202.26941Z'%20fill='%23F1F2F9'/%3e%3c/svg%3e",
  Vh =
    "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.46683%200.933323C3.59273%200.765453%203.79032%200.666656%204.00016%200.666656H12.0002C12.21%200.666656%2012.4076%200.765453%2012.5335%200.933323L14.5335%203.59999C14.62%203.71539%2014.6668%203.85574%2014.6668%203.99999V13.3333C14.6668%2013.8638%2014.4561%2014.3725%2014.081%2014.7475C13.706%2015.1226%2013.1973%2015.3333%2012.6668%2015.3333H3.3335C2.80306%2015.3333%202.29436%2015.1226%201.91928%2014.7475C1.54421%2014.3725%201.3335%2013.8638%201.3335%2013.3333V3.99999C1.3335%203.85574%201.38028%203.71539%201.46683%203.59999L3.46683%200.933323ZM4.3335%201.99999L2.66683%204.22221V13.3333C2.66683%2013.5101%202.73707%2013.6797%202.86209%2013.8047C2.98712%2013.9298%203.15669%2014%203.3335%2014H12.6668C12.8436%2014%2013.0132%2013.9298%2013.1382%2013.8047C13.2633%2013.6797%2013.3335%2013.5101%2013.3335%2013.3333V4.22221L11.6668%201.99999H4.3335Z'%20fill='%23F1F2F9'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M1.3335%204.00001C1.3335%203.63182%201.63197%203.33334%202.00016%203.33334H14.0002C14.3684%203.33334%2014.6668%203.63182%2014.6668%204.00001C14.6668%204.3682%2014.3684%204.66668%2014.0002%204.66668H2.00016C1.63197%204.66668%201.3335%204.3682%201.3335%204.00001Z'%20fill='%23F1F2F9'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.33341%206C5.7016%206%206.00008%206.29848%206.00008%206.66667C6.00008%207.1971%206.21079%207.70581%206.58587%208.08088C6.96094%208.45595%207.46965%208.66667%208.00008%208.66667C8.53051%208.66667%209.03922%208.45595%209.41429%208.08088C9.78937%207.70581%2010.0001%207.1971%2010.0001%206.66667C10.0001%206.29848%2010.2986%206%2010.6667%206C11.0349%206%2011.3334%206.29848%2011.3334%206.66667C11.3334%207.55072%2010.9822%208.39857%2010.3571%209.02369C9.73198%209.64881%208.88414%2010%208.00008%2010C7.11603%2010%206.26818%209.64881%205.64306%209.02369C5.01794%208.39857%204.66675%207.55072%204.66675%206.66667C4.66675%206.29848%204.96522%206%205.33341%206Z'%20fill='%23F1F2F9'/%3e%3c/svg%3e",
  iy = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Phones', path: '/phones' },
    { id: 3, name: 'Tablets', path: '/tablets' },
    { id: 4, name: 'Accessories', path: '/accessories' },
  ],
  cy = ({ isOpen: c, onClose: o }) =>
    d.jsxs('div', {
      className: `${Ft.menu} ${c ? Ft['menu--open'] : ''}`,
      children: [
        d.jsx('nav', {
          className: Ft.menu__nav,
          children: d.jsx('ul', {
            className: Ft.menu__list,
            children: iy.map((r) =>
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
  fy = '_header_17x9z_1',
  sy = '_header__container_17x9z_16',
  oy = '_header__left_17x9z_23',
  ry = '_header__right_17x9z_23',
  dy = '_header__logo_17x9z_27',
  hy = '_header__nav_17x9z_49',
  my = '_header__icons_17x9z_64',
  vy = '_header__burger_17x9z_72',
  yy = '_nav_list_17x9z_92',
  _y = '_nav_list__item_17x9z_109',
  gy = '_nav_list__link_17x9z_113',
  py = '_icon_btn_17x9z_141',
  by = '_burger_icon_17x9z_177',
  Ut = {
    'header': fy,
    'header__container': sy,
    'header__left': oy,
    'header__right': ry,
    'header__logo': dy,
    'header__nav': hy,
    'header__icons': my,
    'header__burger': vy,
    'nav_list': yy,
    'nav_list__item': _y,
    'nav_list__link': gy,
    'nav_list__link--active': '_nav_list__link--active_17x9z_128',
    'icon_btn': py,
    'icon_btn--active': '_icon_btn--active_17x9z_160',
    'burger_icon': by,
    'burger_icon--active': '_burger_icon--active_17x9z_194',
  },
  Sy = '/assets/logo-CxS9TFyQ.svg',
  Ey = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Phones', path: '/phones' },
    { id: 3, name: 'Tablets', path: '/tablets' },
    { id: 4, name: 'Accessories', path: '/accessories' },
  ],
  xy = () => {
    const [c, o] = A.useState(!1);
    A.useEffect(
      () => (
        c ?
          (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'auto'),
        () => {
          document.body.style.overflow = 'auto';
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
                  d.jsx(ls, {
                    to: '/',
                    className: Ut.header__logo,
                    onClick: () => o(!1),
                    children: d.jsx('img', { src: Sy, alt: 'Nice Gadgets' }),
                  }),
                  d.jsx('nav', {
                    className: Ut.header__nav,
                    children: d.jsx('ul', {
                      className: Ut.nav_list,
                      children: Ey.map((f) =>
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
        d.jsx(cy, { isOpen: c, onClose: () => o(!1) }),
      ],
    });
  },
  Ty = '_footer_7q96a_1',
  zy = '_container_7q96a_7',
  Ny = '_logo_7q96a_13',
  Ay = '_nav_7q96a_19',
  Cy = '_back_7q96a_37',
  jy = '_arrow_7q96a_47',
  Za = { footer: Ty, container: zy, logo: Ny, nav: Ay, back: Cy, arrow: jy },
  Ry = '/assets/logo-BX5z9YCI.svg',
  Oy = () => {
    const c = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return d.jsx('footer', {
      className: Za.footer,
      children: d.jsxs('div', {
        className: Za.container,
        children: [
          d.jsx('img', { src: Ry, alt: 'Nice Gadgets', className: Za.logo }),
          d.jsxs('nav', {
            className: Za.nav,
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
            className: Za.back,
            children: [
              d.jsx('span', { children: 'Back to top' }),
              d.jsx('button', {
                type: 'button',
                onClick: c,
                className: Za.arrow,
                children: '↑',
              }),
            ],
          }),
        ],
      }),
    });
  },
  as = () => fetch('/api/phones.json').then((c) => c.json()),
  ns = () => fetch('/api/tablets.json').then((c) => c.json()),
  us = () => fetch('/api/accessories.json').then((c) => c.json()),
  My = () => fetch('/api/products.json').then((c) => c.json()),
  Dy = ({ currentPrice: c, fullPrice: o }) =>
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
  Uy = ({
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
              children: c,
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
                children: f,
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
              children: o,
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
              children: r,
            }),
          ],
        }),
      ],
    }),
  Hy = ({ onAddToCart: c, onToggleFavorite: o, isFavorite: r }) =>
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
          'className': 'product-actions__favorites',
          'onClick': o,
          'aria-label': r ? 'Remove from favorites' : 'Add to favorites',
        }),
      ],
    }),
  Va = ({ product: c }) => {
    if (!c) return null;
    const o = c.priceDiscount ?? ('price' in c ? c.price : void 0),
      r = c.priceRegular ?? ('fullPrice' in c ? c.fullPrice : void 0),
      f = 'images' in c ? c.images[0] : c.image,
      m = f ? `/${f}` : null;
    return d.jsxs('div', {
      className: 'card',
      children: [
        d.jsx('div', {
          className: 'card__img-container',
          children:
            m &&
            d.jsx('img', {
              className: 'card__image',
              src: m,
              alt: c.name,
              width: '208',
              height: '196',
            }),
        }),
        d.jsx('h2', { className: 'card__title', children: c.name }),
        d.jsx(Dy, { currentPrice: o, fullPrice: r }),
        d.jsx(Uy, { screen: c.screen, capacity: c.capacity, ram: c.ram }),
        d.jsx(Hy, {
          onAddToCart: () => console.log('Added'),
          onToggleFavorite: () => console.log('Fav'),
        }),
      ],
    });
  },
  By = '_title_rkc0s_19',
  qy = '_modelsCount_rkc0s_30',
  Yy = '_controls_rkc0s_38',
  Ly = '_control_rkc0s_38',
  Gy = '_label_rkc0s_47',
  Xy = '_select_rkc0s_51',
  ye = {
    'phones-page': '_phones-page_rkc0s_1',
    'title': By,
    'modelsCount': qy,
    'phones-page__controls': '_phones-page__controls_rkc0s_35',
    'controls': Yy,
    'control': Ly,
    'label': Gy,
    'select': Xy,
    'phones-page__list': '_phones-page__list_rkc0s_65',
  },
  Qy = () => {
    const [c, o] = A.useState([]);
    return (
      A.useEffect(() => {
        (async () => {
          const f = await as();
          o(f);
        })();
      }, []),
      d.jsxs('div', {
        className: ye['phones-page'],
        children: [
          d.jsx('h1', { className: ye.title, children: 'Mobile phones' }),
          d.jsxs('p', {
            className: ye.modelsCount,
            children: [c.length, ' models'],
          }),
          d.jsx('section', {
            className: ye['phones-page__controls'],
            children: d.jsxs('div', {
              className: ye.controls,
              children: [
                d.jsxs('div', {
                  className: ye.control,
                  children: [
                    d.jsx('label', {
                      className: ye.label,
                      children: 'Sort by',
                    }),
                    d.jsxs('select', {
                      className: ye.select,
                      children: [
                        d.jsx('option', { children: 'Newest' }),
                        d.jsx('option', { children: 'Alphabetically' }),
                        d.jsx('option', { children: 'Cheapest' }),
                      ],
                    }),
                  ],
                }),
                d.jsxs('div', {
                  className: ye.control,
                  children: [
                    d.jsx('label', {
                      className: ye.label,
                      children: 'Items on page',
                    }),
                    d.jsxs('select', {
                      className: ye.select,
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
            className: ye['phones-page__list'],
            children: c.map((r) => d.jsx(Va, { product: r }, r.id)),
          }),
          d.jsx('section', { className: ye['phones-page__pagination'] }),
        ],
      })
    );
  },
  Zy = '_title_19a6y_19',
  Vy = '_modelsCount_19a6y_29',
  wy = '_controls_19a6y_37',
  Ky = '_control_19a6y_37',
  Jy = '_label_19a6y_46',
  $y = '_select_19a6y_50',
  _e = {
    'accessories-page': '_accessories-page_19a6y_1',
    'title': Zy,
    'modelsCount': Vy,
    'accessories-page__controls': '_accessories-page__controls_19a6y_34',
    'controls': wy,
    'control': Ky,
    'label': Jy,
    'select': $y,
    'accessories-page__list': '_accessories-page__list_19a6y_64',
  },
  ky = () => {
    const [c, o] = A.useState([]);
    return (
      A.useEffect(() => {
        (async () => {
          const f = await us();
          o(f);
        })();
      }, []),
      d.jsxs('div', {
        className: _e['accessories-page'],
        children: [
          d.jsx('h1', { className: _e.title, children: 'Accessories' }),
          d.jsxs('p', {
            className: _e.modelsCount,
            children: [c.length, ' models'],
          }),
          d.jsx('section', {
            className: _e['accessories-page__controls'],
            children: d.jsxs('div', {
              className: _e.controls,
              children: [
                d.jsxs('div', {
                  className: _e.control,
                  children: [
                    d.jsx('label', {
                      className: _e.label,
                      children: 'Sort by',
                    }),
                    d.jsxs('select', {
                      className: _e.select,
                      children: [
                        d.jsx('option', { children: 'Newest' }),
                        d.jsx('option', { children: 'Alphabetically' }),
                        d.jsx('option', { children: 'Cheapest' }),
                      ],
                    }),
                  ],
                }),
                d.jsxs('div', {
                  className: _e.control,
                  children: [
                    d.jsx('label', {
                      className: _e.label,
                      children: 'Items on page',
                    }),
                    d.jsxs('select', {
                      className: _e.select,
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
            className: _e['accessories-page__list'],
            children: c.map((r) => d.jsx(Va, { product: r }, r.id)),
          }),
          d.jsx('section', { className: _e['accessories-page__pagination'] }),
        ],
      })
    );
  },
  Wy = '_cart_1xti1_8',
  Fy = '_title_1xti1_24',
  Iy = '_cartContent_1xti1_44',
  Py = '_products_1xti1_70',
  t2 = '_summary_1xti1_81',
  Zn = { cart: Wy, title: Fy, cartContent: Iy, products: Py, summary: t2 },
  e2 = '_block_1xzjy_1',
  l2 = '_price_1xzjy_7',
  a2 = '_info_1xzjy_17',
  n2 = '_button_1xzjy_24',
  u2 = '_buttonCheck_1xzjy_33',
  Vn = { block: e2, price: l2, info: a2, button: n2, buttonCheck: u2 },
  i2 = () =>
    d.jsxs('div', {
      className: Vn.block,
      children: [
        d.jsx('h2', { className: Vn.price, children: '$2656' }),
        d.jsx('p', { className: Vn.info, children: 'Total for 3 items' }),
        d.jsx('div', {
          className: Vn.button,
          children: d.jsx('button', {
            className: Vn.buttonCheck,
            children: 'Checkout',
          }),
        }),
      ],
    }),
  c2 = '_item_18h8g_1',
  f2 = '_remove_18h8g_19',
  s2 = '_imageWrapper_18h8g_37',
  o2 = '_image_18h8g_37',
  r2 = '_details_18h8g_57',
  d2 = '_name_18h8g_68',
  h2 = '_controls_18h8g_76',
  m2 = '_quantity_18h8g_91',
  v2 = '_btnPlus_18h8g_102',
  y2 = '_btnMinus_18h8g_112',
  _2 = '_count_18h8g_122',
  g2 = '_price_18h8g_128',
  Re = {
    item: c2,
    remove: f2,
    imageWrapper: s2,
    image: o2,
    details: r2,
    name: d2,
    controls: h2,
    quantity: m2,
    btnPlus: v2,
    btnMinus: y2,
    count: _2,
    price: g2,
  },
  Jf = () =>
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
  p2 = () =>
    d.jsx('div', {
      className: 'buttonBack',
      children: d.jsx('a', {
        className: 'buttonBackLink',
        href: '#',
        children: 'Back',
      }),
    }),
  b2 = () =>
    d.jsxs('div', {
      className: Zn.cart,
      children: [
        d.jsx(p2, {}),
        d.jsx('div', {
          className: Zn.title,
          children: d.jsx('h1', { children: 'Cart' }),
        }),
        d.jsxs('div', {
          className: Zn.cartContent,
          children: [
            d.jsxs('div', {
              className: Zn.products,
              children: [d.jsx(Jf, {}), d.jsx(Jf, {}), d.jsx(Jf, {})],
            }),
            d.jsx('div', { className: Zn.summary, children: d.jsx(i2, {}) }),
          ],
        }),
      ],
    }),
  S2 = () =>
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
  E2 = '_title_n89p7_19',
  x2 = '_modelsCount_n89p7_29',
  T2 = '_controls_n89p7_37',
  z2 = '_control_n89p7_37',
  N2 = '_label_n89p7_46',
  A2 = '_select_n89p7_50',
  ge = {
    'tablets-page': '_tablets-page_n89p7_1',
    'title': E2,
    'modelsCount': x2,
    'tablets-page__controls': '_tablets-page__controls_n89p7_34',
    'controls': T2,
    'control': z2,
    'label': N2,
    'select': A2,
    'tablets-page__list': '_tablets-page__list_n89p7_64',
  },
  C2 = () => {
    const [c, o] = A.useState([]);
    return (
      A.useEffect(() => {
        (async () => {
          const f = await ns();
          o(f);
        })();
      }, []),
      d.jsxs('div', {
        className: ge['tablets-page'],
        children: [
          d.jsx('h1', { className: ge.title, children: 'Tablets' }),
          d.jsxs('p', {
            className: ge.modelsCount,
            children: [c.length, ' models'],
          }),
          d.jsx('section', {
            className: ge['tablets-page__controls'],
            children: d.jsxs('div', {
              className: ge.controls,
              children: [
                d.jsxs('div', {
                  className: ge.control,
                  children: [
                    d.jsx('label', {
                      className: ge.label,
                      children: 'Sort by',
                    }),
                    d.jsxs('select', {
                      className: ge.select,
                      children: [
                        d.jsx('option', { children: 'Newest' }),
                        d.jsx('option', { children: 'Alphabetically' }),
                        d.jsx('option', { children: 'Cheapest' }),
                      ],
                    }),
                  ],
                }),
                d.jsxs('div', {
                  className: ge.control,
                  children: [
                    d.jsx('label', {
                      className: ge.label,
                      children: 'Items on page',
                    }),
                    d.jsxs('select', {
                      className: ge.select,
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
            className: ge['tablets-page__list'],
            children: c.map((r) => d.jsx(Va, { product: r }, r.id)),
          }),
          d.jsx('section', { className: ge['tablets-page__pagination'] }),
        ],
      })
    );
  },
  j2 = '_home_1cw10_1',
  R2 = '_container_1cw10_12',
  O2 = '_hero_1cw10_28',
  M2 = '_hero__title_1cw10_41',
  D2 = '_hero__slider_1cw10_59',
  U2 = '_hero__arrow_1cw10_63',
  H2 = '_hero__banner_1cw10_98',
  B2 = '_hero__dots_1cw10_206',
  q2 = '_hero__dot_1cw10_206',
  Y2 = '_section_1cw10_235',
  L2 = '_section__header_1cw10_248',
  G2 = '_section__title_1cw10_259',
  X2 = '_section__arrows_1cw10_274',
  Q2 = '_categories_1cw10_332',
  J = {
    'home': j2,
    'container': R2,
    'hero': O2,
    'hero__title': M2,
    'hero__slider': D2,
    'hero__arrow': U2,
    'hero__arrow--left': '_hero__arrow--left_1cw10_89',
    'hero__arrow--right': '_hero__arrow--right_1cw10_94',
    'hero__banner': H2,
    'hero__banner-img': '_hero__banner-img_1cw10_116',
    'hero__dots': B2,
    'hero__dot': q2,
    'hero__dot--active': '_hero__dot--active_1cw10_227',
    'section': Y2,
    'section__header': L2,
    'section__title': G2,
    'section__arrows': X2,
    'arrow-btn': '_arrow-btn_1cw10_279',
    'products-slider': '_products-slider_1cw10_302',
    'products-slider__track': '_products-slider__track_1cw10_327',
    'categories': Q2,
    'category-card': '_category-card_1cw10_350',
    'category-card__image': '_category-card__image_1cw10_356',
    'category-card__image-wrapper': '_category-card__image-wrapper_1cw10_359',
    'category-card__info': '_category-card__info_1cw10_383',
    'category-card__title': '_category-card__title_1cw10_387',
    'category-card__count': '_category-card__count_1cw10_403',
  },
  Z2 = (c) => [...c].sort((o, r) => (r.year || 0) - (o.year || 0)),
  V2 = (c) =>
    [...c].sort((o, r) => {
      const f = (o.priceRegular || 0) - (o.priceDiscount || 0);
      return (r.priceRegular || 0) - (r.priceDiscount || 0) - f;
    }),
  w2 = () => {
    const [c, o] = A.useState([]),
      [r, f] = A.useState([]),
      [m, v] = A.useState([]),
      [b, j] = A.useState([]),
      S = [...c, ...r, ...m],
      g = Z2(b).slice(0, 12),
      D = V2(S).slice(0, 12);
    return (
      A.useEffect(() => {
        (as()
          .then(o)
          .catch((z) => console.error('Error loading phones:', z)),
          ns()
            .then(f)
            .catch((z) => console.error('Error loading tablets:', z)),
          us()
            .then(v)
            .catch((z) => console.error('Error loading accessories:', z)),
          My()
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
                    children: g.map((z) => d.jsx(Va, { product: z }, z.id)),
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
                            src: '/img/category-phones.jpg',
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
                            src: '/img/category-tablets.jpg',
                            alt: 'Tablets',
                            className: J['category-card__image'],
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
                            src: '/img/category-accessories.jpg',
                            alt: 'Accessories',
                            className: J['category-card__image'],
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
                    children: D.map((z) => d.jsx(Va, { product: z }, z.id)),
                  }),
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  K2 = () => {
    const [c, o] = A.useState([]);
    return (
      A.useEffect(() => {
        (async () => {
          const f = JSON.parse(localStorage.getItem('favorites') || '[]'),
            [m, v, b] = await Promise.all([as(), ns(), us()]),
            S = [...m, ...v, ...b].filter((g) => f.includes(g.itemId));
          o(S);
        })();
      }, []),
      d.jsx(d.Fragment, {
        children: d.jsxs('div', {
          className: 'favorites-page',
          children: [
            d.jsx('div', {
              className: 'favorites-page__container',
              children: d.jsxs('div', {
                className: 'favorites-page__text',
                children: [
                  d.jsx('div', {
                    className: 'favorites-page__title',
                    children: 'Favourites',
                  }),
                  d.jsxs('div', {
                    className: 'favorites-page__items-number',
                    children: [c.length, ' items'],
                  }),
                ],
              }),
            }),
            d.jsx('div', {
              className: 'favorites-page__all-favorites',
              children: c.map((r) => d.jsx(Va, { product: r }, r.itemId)),
            }),
          ],
        }),
      })
    );
  },
  J2 = () =>
    d.jsxs('div', {
      className: 'App',
      children: [
        d.jsx(xy, {}),
        d.jsx('div', {
          className: 'container',
          children: d.jsxs(Sv, {
            children: [
              d.jsx(cl, { path: '/', element: d.jsx(w2, {}) }),
              d.jsx(cl, { path: '/phones', element: d.jsx(Qy, {}) }),
              d.jsx(cl, { path: '/tablets', element: d.jsx(C2, {}) }),
              d.jsx(cl, { path: '/accessories', element: d.jsx(ky, {}) }),
              d.jsx(cl, { path: '/cart', element: d.jsx(b2, {}) }),
              d.jsx(cl, { path: '/favorites', element: d.jsx(K2, {}) }),
              d.jsx(cl, {
                path: '/product/:productId',
                element: d.jsx('h1', {
                  className: 'title',
                  children: 'Product Details',
                }),
              }),
              d.jsx(cl, { path: '*', element: d.jsx(S2, {}) }),
            ],
          }),
        }),
        d.jsx(Oy, {}),
      ],
    });
x1.createRoot(document.getElementById('root')).render(
  d.jsx(wv, { children: d.jsx(J2, {}) }),
);
