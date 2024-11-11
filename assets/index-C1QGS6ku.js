(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity),
        i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
}
)();
function Hm(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Qd = {
    exports: {}
}
  , Do = {}
  , Yd = {
    exports: {}
}
  , j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oi = Symbol.for("react.element")
  , Km = Symbol.for("react.portal")
  , Gm = Symbol.for("react.fragment")
  , Qm = Symbol.for("react.strict_mode")
  , Ym = Symbol.for("react.profiler")
  , Xm = Symbol.for("react.provider")
  , Zm = Symbol.for("react.context")
  , qm = Symbol.for("react.forward_ref")
  , Jm = Symbol.for("react.suspense")
  , bm = Symbol.for("react.memo")
  , e0 = Symbol.for("react.lazy")
  , Pu = Symbol.iterator;
function t0(e) {
    return e === null || typeof e != "object" ? null : (e = Pu && e[Pu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Xd = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Zd = Object.assign
  , qd = {};
function ir(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = qd,
    this.updater = n || Xd
}
ir.prototype.isReactComponent = {};
ir.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
ir.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Jd() {}
Jd.prototype = ir.prototype;
function Jl(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = qd,
    this.updater = n || Xd
}
var bl = Jl.prototype = new Jd;
bl.constructor = Jl;
Zd(bl, ir.prototype);
bl.isPureReactComponent = !0;
var ku = Array.isArray
  , bd = Object.prototype.hasOwnProperty
  , ea = {
    current: null
}
  , ef = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function tf(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            bd.call(t, r) && !ef.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        i.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        i.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            i[r] === void 0 && (i[r] = l[r]);
    return {
        $$typeof: oi,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: ea.current
    }
}
function n0(e, t) {
    return {
        $$typeof: oi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function ta(e) {
    return typeof e == "object" && e !== null && e.$$typeof === oi
}
function r0(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Cu = /\/+/g;
function ns(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? r0("" + e.key) : t.toString(36)
}
function Fi(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case oi:
            case Km:
                s = !0
            }
        }
    if (s)
        return s = e,
        i = i(s),
        e = r === "" ? "." + ns(s, 0) : r,
        ku(i) ? (n = "",
        e != null && (n = e.replace(Cu, "$&/") + "/"),
        Fi(i, t, n, "", function(u) {
            return u
        })) : i != null && (ta(i) && (i = n0(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Cu, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    ku(e))
        for (var l = 0; l < e.length; l++) {
            o = e[l];
            var a = r + ns(o, l);
            s += Fi(o, t, n, a, i)
        }
    else if (a = t0(e),
    typeof a == "function")
        for (e = a.call(e),
        l = 0; !(o = e.next()).done; )
            o = o.value,
            a = r + ns(o, l++),
            s += Fi(o, t, n, a, i);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function pi(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return Fi(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }),
    r
}
function i0(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Ce = {
    current: null
}
  , Oi = {
    transition: null
}
  , o0 = {
    ReactCurrentDispatcher: Ce,
    ReactCurrentBatchConfig: Oi,
    ReactCurrentOwner: ea
};
function nf() {
    throw Error("act(...) is not supported in production builds of React.")
}
j.Children = {
    map: pi,
    forEach: function(e, t, n) {
        pi(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return pi(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return pi(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!ta(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
j.Component = ir;
j.Fragment = Gm;
j.Profiler = Ym;
j.PureComponent = Jl;
j.StrictMode = Qm;
j.Suspense = Jm;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = o0;
j.act = nf;
j.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Zd({}, e.props)
      , i = e.key
      , o = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        s = ea.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (a in t)
            bd.call(t, a) && !ef.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: oi,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
}
;
j.createContext = function(e) {
    return e = {
        $$typeof: Zm,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Xm,
        _context: e
    },
    e.Consumer = e
}
;
j.createElement = tf;
j.createFactory = function(e) {
    var t = tf.bind(null, e);
    return t.type = e,
    t
}
;
j.createRef = function() {
    return {
        current: null
    }
}
;
j.forwardRef = function(e) {
    return {
        $$typeof: qm,
        render: e
    }
}
;
j.isValidElement = ta;
j.lazy = function(e) {
    return {
        $$typeof: e0,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: i0
    }
}
;
j.memo = function(e, t) {
    return {
        $$typeof: bm,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
j.startTransition = function(e) {
    var t = Oi.transition;
    Oi.transition = {};
    try {
        e()
    } finally {
        Oi.transition = t
    }
}
;
j.unstable_act = nf;
j.useCallback = function(e, t) {
    return Ce.current.useCallback(e, t)
}
;
j.useContext = function(e) {
    return Ce.current.useContext(e)
}
;
j.useDebugValue = function() {}
;
j.useDeferredValue = function(e) {
    return Ce.current.useDeferredValue(e)
}
;
j.useEffect = function(e, t) {
    return Ce.current.useEffect(e, t)
}
;
j.useId = function() {
    return Ce.current.useId()
}
;
j.useImperativeHandle = function(e, t, n) {
    return Ce.current.useImperativeHandle(e, t, n)
}
;
j.useInsertionEffect = function(e, t) {
    return Ce.current.useInsertionEffect(e, t)
}
;
j.useLayoutEffect = function(e, t) {
    return Ce.current.useLayoutEffect(e, t)
}
;
j.useMemo = function(e, t) {
    return Ce.current.useMemo(e, t)
}
;
j.useReducer = function(e, t, n) {
    return Ce.current.useReducer(e, t, n)
}
;
j.useRef = function(e) {
    return Ce.current.useRef(e)
}
;
j.useState = function(e) {
    return Ce.current.useState(e)
}
;
j.useSyncExternalStore = function(e, t, n) {
    return Ce.current.useSyncExternalStore(e, t, n)
}
;
j.useTransition = function() {
    return Ce.current.useTransition()
}
;
j.version = "18.3.1";
Yd.exports = j;
var L = Yd.exports;
const U = Hm(L);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var s0 = L
  , l0 = Symbol.for("react.element")
  , a0 = Symbol.for("react.fragment")
  , u0 = Object.prototype.hasOwnProperty
  , c0 = s0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , d0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function rf(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        u0.call(t, r) && !d0.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: l0,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: c0.current
    }
}
Do.Fragment = a0;
Do.jsx = rf;
Do.jsxs = rf;
Qd.exports = Do;
var S = Qd.exports
  , of = {
    exports: {}
}
  , $e = {}
  , sf = {
    exports: {}
}
  , lf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(_, D) {
        var V = _.length;
        _.push(D);
        e: for (; 0 < V; ) {
            var O = V - 1 >>> 1
              , z = _[O];
            if (0 < i(z, D))
                _[O] = D,
                _[V] = z,
                V = O;
            else
                break e
        }
    }
    function n(_) {
        return _.length === 0 ? null : _[0]
    }
    function r(_) {
        if (_.length === 0)
            return null;
        var D = _[0]
          , V = _.pop();
        if (V !== D) {
            _[0] = V;
            e: for (var O = 0, z = _.length, ue = z >>> 1; O < ue; ) {
                var re = 2 * (O + 1) - 1
                  , Ae = _[re]
                  , Se = re + 1
                  , it = _[Se];
                if (0 > i(Ae, V))
                    Se < z && 0 > i(it, Ae) ? (_[O] = it,
                    _[Se] = V,
                    O = Se) : (_[O] = Ae,
                    _[re] = V,
                    O = re);
                else if (Se < z && 0 > i(it, V))
                    _[O] = it,
                    _[Se] = V,
                    O = Se;
                else
                    break e
            }
        }
        return D
    }
    function i(_, D) {
        var V = _.sortIndex - D.sortIndex;
        return V !== 0 ? V : _.id - D.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date
          , l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = []
      , u = []
      , c = 1
      , d = null
      , f = 3
      , g = !1
      , y = !1
      , v = !1
      , T = typeof setTimeout == "function" ? setTimeout : null
      , p = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(_) {
        for (var D = n(u); D !== null; ) {
            if (D.callback === null)
                r(u);
            else if (D.startTime <= _)
                r(u),
                D.sortIndex = D.expirationTime,
                t(a, D);
            else
                break;
            D = n(u)
        }
    }
    function x(_) {
        if (v = !1,
        m(_),
        !y)
            if (n(a) !== null)
                y = !0,
                ht(P);
            else {
                var D = n(u);
                D !== null && F(x, D.startTime - _)
            }
    }
    function P(_, D) {
        y = !1,
        v && (v = !1,
        p(w),
        w = -1),
        g = !0;
        var V = f;
        try {
            for (m(D),
            d = n(a); d !== null && (!(d.expirationTime > D) || _ && !$()); ) {
                var O = d.callback;
                if (typeof O == "function") {
                    d.callback = null,
                    f = d.priorityLevel;
                    var z = O(d.expirationTime <= D);
                    D = e.unstable_now(),
                    typeof z == "function" ? d.callback = z : d === n(a) && r(a),
                    m(D)
                } else
                    r(a);
                d = n(a)
            }
            if (d !== null)
                var ue = !0;
            else {
                var re = n(u);
                re !== null && F(x, re.startTime - D),
                ue = !1
            }
            return ue
        } finally {
            d = null,
            f = V,
            g = !1
        }
    }
    var C = !1
      , E = null
      , w = -1
      , M = 5
      , N = -1;
    function $() {
        return !(e.unstable_now() - N < M)
    }
    function ae() {
        if (E !== null) {
            var _ = e.unstable_now();
            N = _;
            var D = !0;
            try {
                D = E(!0, _)
            } finally {
                D ? _e() : (C = !1,
                E = null)
            }
        } else
            C = !1
    }
    var _e;
    if (typeof h == "function")
        _e = function() {
            h(ae)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var Le = new MessageChannel
          , ft = Le.port2;
        Le.port1.onmessage = ae,
        _e = function() {
            ft.postMessage(null)
        }
    } else
        _e = function() {
            T(ae, 0)
        }
        ;
    function ht(_) {
        E = _,
        C || (C = !0,
        _e())
    }
    function F(_, D) {
        w = T(function() {
            _(e.unstable_now())
        }, D)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(_) {
        _.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        y || g || (y = !0,
        ht(P))
    }
    ,
    e.unstable_forceFrameRate = function(_) {
        0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < _ ? Math.floor(1e3 / _) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(_) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var D = 3;
            break;
        default:
            D = f
        }
        var V = f;
        f = D;
        try {
            return _()
        } finally {
            f = V
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(_, D) {
        switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            _ = 3
        }
        var V = f;
        f = _;
        try {
            return D()
        } finally {
            f = V
        }
    }
    ,
    e.unstable_scheduleCallback = function(_, D, V) {
        var O = e.unstable_now();
        switch (typeof V == "object" && V !== null ? (V = V.delay,
        V = typeof V == "number" && 0 < V ? O + V : O) : V = O,
        _) {
        case 1:
            var z = -1;
            break;
        case 2:
            z = 250;
            break;
        case 5:
            z = 1073741823;
            break;
        case 4:
            z = 1e4;
            break;
        default:
            z = 5e3
        }
        return z = V + z,
        _ = {
            id: c++,
            callback: D,
            priorityLevel: _,
            startTime: V,
            expirationTime: z,
            sortIndex: -1
        },
        V > O ? (_.sortIndex = V,
        t(u, _),
        n(a) === null && _ === n(u) && (v ? (p(w),
        w = -1) : v = !0,
        F(x, V - O))) : (_.sortIndex = z,
        t(a, _),
        y || g || (y = !0,
        ht(P))),
        _
    }
    ,
    e.unstable_shouldYield = $,
    e.unstable_wrapCallback = function(_) {
        var D = f;
        return function() {
            var V = f;
            f = D;
            try {
                return _.apply(this, arguments)
            } finally {
                f = V
            }
        }
    }
}
)(lf);
sf.exports = lf;
var f0 = sf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h0 = L
  , ze = f0;
function k(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var af = new Set
  , Ir = {};
function Sn(e, t) {
    Yn(e, t),
    Yn(e + "Capture", t)
}
function Yn(e, t) {
    for (Ir[e] = t,
    e = 0; e < t.length; e++)
        af.add(t[e])
}
var kt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Us = Object.prototype.hasOwnProperty
  , p0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Eu = {}
  , _u = {};
function m0(e) {
    return Us.call(_u, e) ? !0 : Us.call(Eu, e) ? !1 : p0.test(e) ? _u[e] = !0 : (Eu[e] = !0,
    !1)
}
function g0(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function y0(e, t, n, r) {
    if (t === null || typeof t > "u" || g0(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Ee(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = s
}
var he = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    he[e] = new Ee(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    he[t] = new Ee(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    he[e] = new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    he[e] = new Ee(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    he[e] = new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    he[e] = new Ee(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    he[e] = new Ee(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    he[e] = new Ee(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    he[e] = new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var na = /[\-:]([a-z])/g;
function ra(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(na, ra);
    he[t] = new Ee(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(na, ra);
    he[t] = new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(na, ra);
    he[t] = new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    he[e] = new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)
});
he.xlinkHref = new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    he[e] = new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function ia(e, t, n, r) {
    var i = he.hasOwnProperty(t) ? he[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (y0(t, n, i, r) && (n = null),
    r || i === null ? m0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Lt = h0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , mi = Symbol.for("react.element")
  , Cn = Symbol.for("react.portal")
  , En = Symbol.for("react.fragment")
  , oa = Symbol.for("react.strict_mode")
  , Ws = Symbol.for("react.profiler")
  , uf = Symbol.for("react.provider")
  , cf = Symbol.for("react.context")
  , sa = Symbol.for("react.forward_ref")
  , Hs = Symbol.for("react.suspense")
  , Ks = Symbol.for("react.suspense_list")
  , la = Symbol.for("react.memo")
  , Mt = Symbol.for("react.lazy")
  , df = Symbol.for("react.offscreen")
  , Lu = Symbol.iterator;
function ar(e) {
    return e === null || typeof e != "object" ? null : (e = Lu && e[Lu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var J = Object.assign, rs;
function yr(e) {
    if (rs === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            rs = t && t[1] || ""
        }
    return `
` + rs + e
}
var is = !1;
function os(e, t) {
    if (!e || is)
        return "";
    is = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, l = o.length - 1; 1 <= s && 0 <= l && i[s] !== o[l]; )
                l--;
            for (; 1 <= s && 0 <= l; s--,
            l--)
                if (i[s] !== o[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--,
                            l--,
                            0 > l || i[s] !== o[l]) {
                                var a = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        is = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? yr(e) : ""
}
function v0(e) {
    switch (e.tag) {
    case 5:
        return yr(e.type);
    case 16:
        return yr("Lazy");
    case 13:
        return yr("Suspense");
    case 19:
        return yr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = os(e.type, !1),
        e;
    case 11:
        return e = os(e.type.render, !1),
        e;
    case 1:
        return e = os(e.type, !0),
        e;
    default:
        return ""
    }
}
function Gs(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case En:
        return "Fragment";
    case Cn:
        return "Portal";
    case Ws:
        return "Profiler";
    case oa:
        return "StrictMode";
    case Hs:
        return "Suspense";
    case Ks:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case cf:
            return (e.displayName || "Context") + ".Consumer";
        case uf:
            return (e._context.displayName || "Context") + ".Provider";
        case sa:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case la:
            return t = e.displayName || null,
            t !== null ? t : Gs(e.type) || "Memo";
        case Mt:
            t = e._payload,
            e = e._init;
            try {
                return Gs(e(t))
            } catch {}
        }
    return null
}
function x0(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Gs(t);
    case 8:
        return t === oa ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Qt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function ff(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function w0(e) {
    var t = ff(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s,
                o.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function gi(e) {
    e._valueTracker || (e._valueTracker = w0(e))
}
function hf(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = ff(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function bi(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Qs(e, t) {
    var n = t.checked;
    return J({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Au(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Qt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function pf(e, t) {
    t = t.checked,
    t != null && ia(e, "checked", t, !1)
}
function Ys(e, t) {
    pf(e, t);
    var n = Qt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Xs(e, t.type, n) : t.hasOwnProperty("defaultValue") && Xs(e, t.type, Qt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Nu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Xs(e, t, n) {
    (t !== "number" || bi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var vr = Array.isArray;
function Un(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Qt(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Zs(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(k(91));
    return J({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Mu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(k(92));
            if (vr(n)) {
                if (1 < n.length)
                    throw Error(k(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Qt(n)
    }
}
function mf(e, t) {
    var n = Qt(t.value)
      , r = Qt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Du(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function gf(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function qs(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? gf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var yi, yf = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (yi = yi || document.createElement("div"),
        yi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = yi.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Fr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Pr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , S0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pr).forEach(function(e) {
    S0.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Pr[t] = Pr[e]
    })
});
function vf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Pr.hasOwnProperty(e) && Pr[e] ? ("" + t).trim() : t + "px"
}
function xf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = vf(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var T0 = J({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Js(e, t) {
    if (t) {
        if (T0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(k(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(k(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(k(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(k(62))
    }
}
function bs(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var el = null;
function aa(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var tl = null
  , Wn = null
  , Hn = null;
function Ru(e) {
    if (e = ai(e)) {
        if (typeof tl != "function")
            throw Error(k(280));
        var t = e.stateNode;
        t && (t = Fo(t),
        tl(e.stateNode, e.type, t))
    }
}
function wf(e) {
    Wn ? Hn ? Hn.push(e) : Hn = [e] : Wn = e
}
function Sf() {
    if (Wn) {
        var e = Wn
          , t = Hn;
        if (Hn = Wn = null,
        Ru(e),
        t)
            for (e = 0; e < t.length; e++)
                Ru(t[e])
    }
}
function Tf(e, t) {
    return e(t)
}
function Pf() {}
var ss = !1;
function kf(e, t, n) {
    if (ss)
        return e(t, n);
    ss = !0;
    try {
        return Tf(e, t, n)
    } finally {
        ss = !1,
        (Wn !== null || Hn !== null) && (Pf(),
        Sf())
    }
}
function Or(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Fo(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(k(231, t, typeof n));
    return n
}
var nl = !1;
if (kt)
    try {
        var ur = {};
        Object.defineProperty(ur, "passive", {
            get: function() {
                nl = !0
            }
        }),
        window.addEventListener("test", ur, ur),
        window.removeEventListener("test", ur, ur)
    } catch {
        nl = !1
    }
function P0(e, t, n, r, i, o, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var kr = !1
  , eo = null
  , to = !1
  , rl = null
  , k0 = {
    onError: function(e) {
        kr = !0,
        eo = e
    }
};
function C0(e, t, n, r, i, o, s, l, a) {
    kr = !1,
    eo = null,
    P0.apply(k0, arguments)
}
function E0(e, t, n, r, i, o, s, l, a) {
    if (C0.apply(this, arguments),
    kr) {
        if (kr) {
            var u = eo;
            kr = !1,
            eo = null
        } else
            throw Error(k(198));
        to || (to = !0,
        rl = u)
    }
}
function Tn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Cf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Vu(e) {
    if (Tn(e) !== e)
        throw Error(k(188))
}
function _0(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Tn(e),
        t === null)
            throw Error(k(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n)
                    return Vu(i),
                    e;
                if (o === r)
                    return Vu(i),
                    t;
                o = o.sibling
            }
            throw Error(k(188))
        }
        if (n.return !== r.return)
            n = i,
            r = o;
        else {
            for (var s = !1, l = i.child; l; ) {
                if (l === n) {
                    s = !0,
                    n = i,
                    r = o;
                    break
                }
                if (l === r) {
                    s = !0,
                    r = i,
                    n = o;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = o.child; l; ) {
                    if (l === n) {
                        s = !0,
                        n = o,
                        r = i;
                        break
                    }
                    if (l === r) {
                        s = !0,
                        r = o,
                        n = i;
                        break
                    }
                    l = l.sibling
                }
                if (!s)
                    throw Error(k(189))
            }
        }
        if (n.alternate !== r)
            throw Error(k(190))
    }
    if (n.tag !== 3)
        throw Error(k(188));
    return n.stateNode.current === n ? e : t
}
function Ef(e) {
    return e = _0(e),
    e !== null ? _f(e) : null
}
function _f(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = _f(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Lf = ze.unstable_scheduleCallback
  , ju = ze.unstable_cancelCallback
  , L0 = ze.unstable_shouldYield
  , A0 = ze.unstable_requestPaint
  , te = ze.unstable_now
  , N0 = ze.unstable_getCurrentPriorityLevel
  , ua = ze.unstable_ImmediatePriority
  , Af = ze.unstable_UserBlockingPriority
  , no = ze.unstable_NormalPriority
  , M0 = ze.unstable_LowPriority
  , Nf = ze.unstable_IdlePriority
  , Ro = null
  , at = null;
function D0(e) {
    if (at && typeof at.onCommitFiberRoot == "function")
        try {
            at.onCommitFiberRoot(Ro, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var tt = Math.clz32 ? Math.clz32 : j0
  , R0 = Math.log
  , V0 = Math.LN2;
function j0(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (R0(e) / V0 | 0) | 0
}
var vi = 64
  , xi = 4194304;
function xr(e) {
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
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function ro(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , o = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var l = s & ~i;
        l !== 0 ? r = xr(l) : (o &= s,
        o !== 0 && (r = xr(o)))
    } else
        s = n & ~i,
        s !== 0 ? r = xr(s) : o !== 0 && (r = xr(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    o = t & -t,
    i >= o || i === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - tt(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function I0(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function F0(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var s = 31 - tt(o)
          , l = 1 << s
          , a = i[s];
        a === -1 ? (!(l & n) || l & r) && (i[s] = I0(l, t)) : a <= t && (e.expiredLanes |= l),
        o &= ~l
    }
}
function il(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Mf() {
    var e = vi;
    return vi <<= 1,
    !(vi & 4194240) && (vi = 64),
    e
}
function ls(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function si(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - tt(t),
    e[t] = n
}
function O0(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - tt(n)
          , o = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~o
    }
}
function ca(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - tt(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var B = 0;
function Df(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Rf, da, Vf, jf, If, ol = !1, wi = [], Ot = null, zt = null, Bt = null, zr = new Map, Br = new Map, Rt = [], z0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Iu(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Ot = null;
        break;
    case "dragenter":
    case "dragleave":
        zt = null;
        break;
    case "mouseover":
    case "mouseout":
        Bt = null;
        break;
    case "pointerover":
    case "pointerout":
        zr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Br.delete(t.pointerId)
    }
}
function cr(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
    t !== null && (t = ai(t),
    t !== null && da(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function B0(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Ot = cr(Ot, e, t, n, r, i),
        !0;
    case "dragenter":
        return zt = cr(zt, e, t, n, r, i),
        !0;
    case "mouseover":
        return Bt = cr(Bt, e, t, n, r, i),
        !0;
    case "pointerover":
        var o = i.pointerId;
        return zr.set(o, cr(zr.get(o) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return o = i.pointerId,
        Br.set(o, cr(Br.get(o) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function Ff(e) {
    var t = an(e.target);
    if (t !== null) {
        var n = Tn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Cf(n),
                t !== null) {
                    e.blockedOn = t,
                    If(e.priority, function() {
                        Vf(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function zi(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = sl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            el = r,
            n.target.dispatchEvent(r),
            el = null
        } else
            return t = ai(n),
            t !== null && da(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Fu(e, t, n) {
    zi(e) && n.delete(t)
}
function $0() {
    ol = !1,
    Ot !== null && zi(Ot) && (Ot = null),
    zt !== null && zi(zt) && (zt = null),
    Bt !== null && zi(Bt) && (Bt = null),
    zr.forEach(Fu),
    Br.forEach(Fu)
}
function dr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    ol || (ol = !0,
    ze.unstable_scheduleCallback(ze.unstable_NormalPriority, $0)))
}
function $r(e) {
    function t(i) {
        return dr(i, e)
    }
    if (0 < wi.length) {
        dr(wi[0], e);
        for (var n = 1; n < wi.length; n++) {
            var r = wi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Ot !== null && dr(Ot, e),
    zt !== null && dr(zt, e),
    Bt !== null && dr(Bt, e),
    zr.forEach(t),
    Br.forEach(t),
    n = 0; n < Rt.length; n++)
        r = Rt[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Rt.length && (n = Rt[0],
    n.blockedOn === null); )
        Ff(n),
        n.blockedOn === null && Rt.shift()
}
var Kn = Lt.ReactCurrentBatchConfig
  , io = !0;
function U0(e, t, n, r) {
    var i = B
      , o = Kn.transition;
    Kn.transition = null;
    try {
        B = 1,
        fa(e, t, n, r)
    } finally {
        B = i,
        Kn.transition = o
    }
}
function W0(e, t, n, r) {
    var i = B
      , o = Kn.transition;
    Kn.transition = null;
    try {
        B = 4,
        fa(e, t, n, r)
    } finally {
        B = i,
        Kn.transition = o
    }
}
function fa(e, t, n, r) {
    if (io) {
        var i = sl(e, t, n, r);
        if (i === null)
            ys(e, t, r, oo, n),
            Iu(e, r);
        else if (B0(i, e, t, n, r))
            r.stopPropagation();
        else if (Iu(e, r),
        t & 4 && -1 < z0.indexOf(e)) {
            for (; i !== null; ) {
                var o = ai(i);
                if (o !== null && Rf(o),
                o = sl(e, t, n, r),
                o === null && ys(e, t, r, oo, n),
                o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            ys(e, t, r, null, n)
    }
}
var oo = null;
function sl(e, t, n, r) {
    if (oo = null,
    e = aa(r),
    e = an(e),
    e !== null)
        if (t = Tn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Cf(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return oo = e,
    null
}
function Of(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (N0()) {
        case ua:
            return 1;
        case Af:
            return 4;
        case no:
        case M0:
            return 16;
        case Nf:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var jt = null
  , ha = null
  , Bi = null;
function zf() {
    if (Bi)
        return Bi;
    var e, t = ha, n = t.length, r, i = "value"in jt ? jt.value : jt.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
        ;
    return Bi = i.slice(e, 1 < r ? 1 - r : void 0)
}
function $i(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Si() {
    return !0
}
function Ou() {
    return !1
}
function Ue(e) {
    function t(n, r, i, o, s) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = o,
        this.target = s,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(o) : o[l]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Si : Ou,
        this.isPropagationStopped = Ou,
        this
    }
    return J(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Si)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Si)
        },
        persist: function() {},
        isPersistent: Si
    }),
    t
}
var or = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, pa = Ue(or), li = J({}, or, {
    view: 0,
    detail: 0
}), H0 = Ue(li), as, us, fr, Vo = J({}, li, {
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
    getModifierState: ma,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== fr && (fr && e.type === "mousemove" ? (as = e.screenX - fr.screenX,
        us = e.screenY - fr.screenY) : us = as = 0,
        fr = e),
        as)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : us
    }
}), zu = Ue(Vo), K0 = J({}, Vo, {
    dataTransfer: 0
}), G0 = Ue(K0), Q0 = J({}, li, {
    relatedTarget: 0
}), cs = Ue(Q0), Y0 = J({}, or, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), X0 = Ue(Y0), Z0 = J({}, or, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), q0 = Ue(Z0), J0 = J({}, or, {
    data: 0
}), Bu = Ue(J0), b0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, eg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, tg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function ng(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = tg[e]) ? !!t[e] : !1
}
function ma() {
    return ng
}
var rg = J({}, li, {
    key: function(e) {
        if (e.key) {
            var t = b0[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = $i(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? eg[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ma,
    charCode: function(e) {
        return e.type === "keypress" ? $i(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? $i(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , ig = Ue(rg)
  , og = J({}, Vo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , $u = Ue(og)
  , sg = J({}, li, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ma
})
  , lg = Ue(sg)
  , ag = J({}, or, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , ug = Ue(ag)
  , cg = J({}, Vo, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , dg = Ue(cg)
  , fg = [9, 13, 27, 32]
  , ga = kt && "CompositionEvent"in window
  , Cr = null;
kt && "documentMode"in document && (Cr = document.documentMode);
var hg = kt && "TextEvent"in window && !Cr
  , Bf = kt && (!ga || Cr && 8 < Cr && 11 >= Cr)
  , Uu = " "
  , Wu = !1;
function $f(e, t) {
    switch (e) {
    case "keyup":
        return fg.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Uf(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var _n = !1;
function pg(e, t) {
    switch (e) {
    case "compositionend":
        return Uf(t);
    case "keypress":
        return t.which !== 32 ? null : (Wu = !0,
        Uu);
    case "textInput":
        return e = t.data,
        e === Uu && Wu ? null : e;
    default:
        return null
    }
}
function mg(e, t) {
    if (_n)
        return e === "compositionend" || !ga && $f(e, t) ? (e = zf(),
        Bi = ha = jt = null,
        _n = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Bf && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var gg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Hu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!gg[e.type] : t === "textarea"
}
function Wf(e, t, n, r) {
    wf(r),
    t = so(t, "onChange"),
    0 < t.length && (n = new pa("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Er = null
  , Ur = null;
function yg(e) {
    eh(e, 0)
}
function jo(e) {
    var t = Nn(e);
    if (hf(t))
        return e
}
function vg(e, t) {
    if (e === "change")
        return t
}
var Hf = !1;
if (kt) {
    var ds;
    if (kt) {
        var fs = "oninput"in document;
        if (!fs) {
            var Ku = document.createElement("div");
            Ku.setAttribute("oninput", "return;"),
            fs = typeof Ku.oninput == "function"
        }
        ds = fs
    } else
        ds = !1;
    Hf = ds && (!document.documentMode || 9 < document.documentMode)
}
function Gu() {
    Er && (Er.detachEvent("onpropertychange", Kf),
    Ur = Er = null)
}
function Kf(e) {
    if (e.propertyName === "value" && jo(Ur)) {
        var t = [];
        Wf(t, Ur, e, aa(e)),
        kf(yg, t)
    }
}
function xg(e, t, n) {
    e === "focusin" ? (Gu(),
    Er = t,
    Ur = n,
    Er.attachEvent("onpropertychange", Kf)) : e === "focusout" && Gu()
}
function wg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return jo(Ur)
}
function Sg(e, t) {
    if (e === "click")
        return jo(t)
}
function Tg(e, t) {
    if (e === "input" || e === "change")
        return jo(t)
}
function Pg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var rt = typeof Object.is == "function" ? Object.is : Pg;
function Wr(e, t) {
    if (rt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Us.call(t, i) || !rt(e[i], t[i]))
            return !1
    }
    return !0
}
function Qu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Yu(e, t) {
    var n = Qu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Qu(n)
    }
}
function Gf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Gf(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Qf() {
    for (var e = window, t = bi(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = bi(e.document)
    }
    return t
}
function ya(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function kg(e) {
    var t = Qf()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Gf(n.ownerDocument.documentElement, n)) {
        if (r !== null && ya(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                !e.extend && o > r && (i = r,
                r = o,
                o = i),
                i = Yu(n, o);
                var s = Yu(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Cg = kt && "documentMode"in document && 11 >= document.documentMode
  , Ln = null
  , ll = null
  , _r = null
  , al = !1;
function Xu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    al || Ln == null || Ln !== bi(r) || (r = Ln,
    "selectionStart"in r && ya(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    _r && Wr(_r, r) || (_r = r,
    r = so(ll, "onSelect"),
    0 < r.length && (t = new pa("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Ln)))
}
function Ti(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var An = {
    animationend: Ti("Animation", "AnimationEnd"),
    animationiteration: Ti("Animation", "AnimationIteration"),
    animationstart: Ti("Animation", "AnimationStart"),
    transitionend: Ti("Transition", "TransitionEnd")
}
  , hs = {}
  , Yf = {};
kt && (Yf = document.createElement("div").style,
"AnimationEvent"in window || (delete An.animationend.animation,
delete An.animationiteration.animation,
delete An.animationstart.animation),
"TransitionEvent"in window || delete An.transitionend.transition);
function Io(e) {
    if (hs[e])
        return hs[e];
    if (!An[e])
        return e;
    var t = An[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Yf)
            return hs[e] = t[n];
    return e
}
var Xf = Io("animationend")
  , Zf = Io("animationiteration")
  , qf = Io("animationstart")
  , Jf = Io("transitionend")
  , bf = new Map
  , Zu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Jt(e, t) {
    bf.set(e, t),
    Sn(t, [e])
}
for (var ps = 0; ps < Zu.length; ps++) {
    var ms = Zu[ps]
      , Eg = ms.toLowerCase()
      , _g = ms[0].toUpperCase() + ms.slice(1);
    Jt(Eg, "on" + _g)
}
Jt(Xf, "onAnimationEnd");
Jt(Zf, "onAnimationIteration");
Jt(qf, "onAnimationStart");
Jt("dblclick", "onDoubleClick");
Jt("focusin", "onFocus");
Jt("focusout", "onBlur");
Jt(Jf, "onTransitionEnd");
Yn("onMouseEnter", ["mouseout", "mouseover"]);
Yn("onMouseLeave", ["mouseout", "mouseover"]);
Yn("onPointerEnter", ["pointerout", "pointerover"]);
Yn("onPointerLeave", ["pointerout", "pointerover"]);
Sn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Sn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Sn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Sn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Sn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var wr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Lg = new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));
function qu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    E0(r, t, void 0, e),
    e.currentTarget = null
}
function eh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== o && i.isPropagationStopped())
                        break e;
                    qu(i, l, u),
                    o = a
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (l = r[s],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== o && i.isPropagationStopped())
                        break e;
                    qu(i, l, u),
                    o = a
                }
        }
    }
    if (to)
        throw e = rl,
        to = !1,
        rl = null,
        e
}
function G(e, t) {
    var n = t[hl];
    n === void 0 && (n = t[hl] = new Set);
    var r = e + "__bubble";
    n.has(r) || (th(t, e, 2, !1),
    n.add(r))
}
function gs(e, t, n) {
    var r = 0;
    t && (r |= 4),
    th(n, e, r, t)
}
var Pi = "_reactListening" + Math.random().toString(36).slice(2);
function Hr(e) {
    if (!e[Pi]) {
        e[Pi] = !0,
        af.forEach(function(n) {
            n !== "selectionchange" && (Lg.has(n) || gs(n, !1, e),
            gs(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Pi] || (t[Pi] = !0,
        gs("selectionchange", !1, t))
    }
}
function th(e, t, n, r) {
    switch (Of(t)) {
    case 1:
        var i = U0;
        break;
    case 4:
        i = W0;
        break;
    default:
        i = fa
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !nl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function ys(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var l = r.stateNode.containerInfo;
                if (l === i || l.nodeType === 8 && l.parentNode === i)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var a = s.tag;
                        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo,
                        a === i || a.nodeType === 8 && a.parentNode === i))
                            return;
                        s = s.return
                    }
                for (; l !== null; ) {
                    if (s = an(l),
                    s === null)
                        return;
                    if (a = s.tag,
                    a === 5 || a === 6) {
                        r = o = s;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    kf(function() {
        var u = o
          , c = aa(n)
          , d = [];
        e: {
            var f = bf.get(e);
            if (f !== void 0) {
                var g = pa
                  , y = e;
                switch (e) {
                case "keypress":
                    if ($i(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    g = ig;
                    break;
                case "focusin":
                    y = "focus",
                    g = cs;
                    break;
                case "focusout":
                    y = "blur",
                    g = cs;
                    break;
                case "beforeblur":
                case "afterblur":
                    g = cs;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    g = zu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    g = G0;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    g = lg;
                    break;
                case Xf:
                case Zf:
                case qf:
                    g = X0;
                    break;
                case Jf:
                    g = ug;
                    break;
                case "scroll":
                    g = H0;
                    break;
                case "wheel":
                    g = dg;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    g = q0;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    g = $u
                }
                var v = (t & 4) !== 0
                  , T = !v && e === "scroll"
                  , p = v ? f !== null ? f + "Capture" : null : f;
                v = [];
                for (var h = u, m; h !== null; ) {
                    m = h;
                    var x = m.stateNode;
                    if (m.tag === 5 && x !== null && (m = x,
                    p !== null && (x = Or(h, p),
                    x != null && v.push(Kr(h, x, m)))),
                    T)
                        break;
                    h = h.return
                }
                0 < v.length && (f = new g(f,y,null,n,c),
                d.push({
                    event: f,
                    listeners: v
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                g = e === "mouseout" || e === "pointerout",
                f && n !== el && (y = n.relatedTarget || n.fromElement) && (an(y) || y[Ct]))
                    break e;
                if ((g || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window,
                g ? (y = n.relatedTarget || n.toElement,
                g = u,
                y = y ? an(y) : null,
                y !== null && (T = Tn(y),
                y !== T || y.tag !== 5 && y.tag !== 6) && (y = null)) : (g = null,
                y = u),
                g !== y)) {
                    if (v = zu,
                    x = "onMouseLeave",
                    p = "onMouseEnter",
                    h = "mouse",
                    (e === "pointerout" || e === "pointerover") && (v = $u,
                    x = "onPointerLeave",
                    p = "onPointerEnter",
                    h = "pointer"),
                    T = g == null ? f : Nn(g),
                    m = y == null ? f : Nn(y),
                    f = new v(x,h + "leave",g,n,c),
                    f.target = T,
                    f.relatedTarget = m,
                    x = null,
                    an(c) === u && (v = new v(p,h + "enter",y,n,c),
                    v.target = m,
                    v.relatedTarget = T,
                    x = v),
                    T = x,
                    g && y)
                        t: {
                            for (v = g,
                            p = y,
                            h = 0,
                            m = v; m; m = kn(m))
                                h++;
                            for (m = 0,
                            x = p; x; x = kn(x))
                                m++;
                            for (; 0 < h - m; )
                                v = kn(v),
                                h--;
                            for (; 0 < m - h; )
                                p = kn(p),
                                m--;
                            for (; h--; ) {
                                if (v === p || p !== null && v === p.alternate)
                                    break t;
                                v = kn(v),
                                p = kn(p)
                            }
                            v = null
                        }
                    else
                        v = null;
                    g !== null && Ju(d, f, g, v, !1),
                    y !== null && T !== null && Ju(d, T, y, v, !0)
                }
            }
            e: {
                if (f = u ? Nn(u) : window,
                g = f.nodeName && f.nodeName.toLowerCase(),
                g === "select" || g === "input" && f.type === "file")
                    var P = vg;
                else if (Hu(f))
                    if (Hf)
                        P = Tg;
                    else {
                        P = wg;
                        var C = xg
                    }
                else
                    (g = f.nodeName) && g.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (P = Sg);
                if (P && (P = P(e, u))) {
                    Wf(d, P, n, c);
                    break e
                }
                C && C(e, f, u),
                e === "focusout" && (C = f._wrapperState) && C.controlled && f.type === "number" && Xs(f, "number", f.value)
            }
            switch (C = u ? Nn(u) : window,
            e) {
            case "focusin":
                (Hu(C) || C.contentEditable === "true") && (Ln = C,
                ll = u,
                _r = null);
                break;
            case "focusout":
                _r = ll = Ln = null;
                break;
            case "mousedown":
                al = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                al = !1,
                Xu(d, n, c);
                break;
            case "selectionchange":
                if (Cg)
                    break;
            case "keydown":
            case "keyup":
                Xu(d, n, c)
            }
            var E;
            if (ga)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var w = "onCompositionStart";
                        break e;
                    case "compositionend":
                        w = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        w = "onCompositionUpdate";
                        break e
                    }
                    w = void 0
                }
            else
                _n ? $f(e, n) && (w = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (w = "onCompositionStart");
            w && (Bf && n.locale !== "ko" && (_n || w !== "onCompositionStart" ? w === "onCompositionEnd" && _n && (E = zf()) : (jt = c,
            ha = "value"in jt ? jt.value : jt.textContent,
            _n = !0)),
            C = so(u, w),
            0 < C.length && (w = new Bu(w,e,null,n,c),
            d.push({
                event: w,
                listeners: C
            }),
            E ? w.data = E : (E = Uf(n),
            E !== null && (w.data = E)))),
            (E = hg ? pg(e, n) : mg(e, n)) && (u = so(u, "onBeforeInput"),
            0 < u.length && (c = new Bu("onBeforeInput","beforeinput",null,n,c),
            d.push({
                event: c,
                listeners: u
            }),
            c.data = E))
        }
        eh(d, t)
    })
}
function Kr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function so(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
        o = Or(e, n),
        o != null && r.unshift(Kr(e, o, i)),
        o = Or(e, t),
        o != null && r.push(Kr(e, o, i))),
        e = e.return
    }
    return r
}
function kn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Ju(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        i ? (a = Or(n, o),
        a != null && s.unshift(Kr(n, a, l))) : i || (a = Or(n, o),
        a != null && s.push(Kr(n, a, l)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var Ag = /\r\n?/g
  , Ng = /\u0000|\uFFFD/g;
function bu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Ag, `
`).replace(Ng, "")
}
function ki(e, t, n) {
    if (t = bu(t),
    bu(e) !== t && n)
        throw Error(k(425))
}
function lo() {}
var ul = null
  , cl = null;
function dl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var fl = typeof setTimeout == "function" ? setTimeout : void 0
  , Mg = typeof clearTimeout == "function" ? clearTimeout : void 0
  , ec = typeof Promise == "function" ? Promise : void 0
  , Dg = typeof queueMicrotask == "function" ? queueMicrotask : typeof ec < "u" ? function(e) {
    return ec.resolve(null).then(e).catch(Rg)
}
: fl;
function Rg(e) {
    setTimeout(function() {
        throw e
    })
}
function vs(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    $r(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    $r(t)
}
function $t(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function tc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var sr = Math.random().toString(36).slice(2)
  , lt = "__reactFiber$" + sr
  , Gr = "__reactProps$" + sr
  , Ct = "__reactContainer$" + sr
  , hl = "__reactEvents$" + sr
  , Vg = "__reactListeners$" + sr
  , jg = "__reactHandles$" + sr;
function an(e) {
    var t = e[lt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Ct] || n[lt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = tc(e); e !== null; ) {
                    if (n = e[lt])
                        return n;
                    e = tc(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function ai(e) {
    return e = e[lt] || e[Ct],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Nn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(k(33))
}
function Fo(e) {
    return e[Gr] || null
}
var pl = []
  , Mn = -1;
function bt(e) {
    return {
        current: e
    }
}
function Q(e) {
    0 > Mn || (e.current = pl[Mn],
    pl[Mn] = null,
    Mn--)
}
function K(e, t) {
    Mn++,
    pl[Mn] = e.current,
    e.current = t
}
var Yt = {}
  , we = bt(Yt)
  , De = bt(!1)
  , gn = Yt;
function Xn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Yt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
        i[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function Re(e) {
    return e = e.childContextTypes,
    e != null
}
function ao() {
    Q(De),
    Q(we)
}
function nc(e, t, n) {
    if (we.current !== Yt)
        throw Error(k(168));
    K(we, t),
    K(De, n)
}
function nh(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(k(108, x0(e) || "Unknown", i));
    return J({}, n, r)
}
function uo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Yt,
    gn = we.current,
    K(we, e),
    K(De, De.current),
    !0
}
function rc(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(k(169));
    n ? (e = nh(e, t, gn),
    r.__reactInternalMemoizedMergedChildContext = e,
    Q(De),
    Q(we),
    K(we, e)) : Q(De),
    K(De, n)
}
var mt = null
  , Oo = !1
  , xs = !1;
function rh(e) {
    mt === null ? mt = [e] : mt.push(e)
}
function Ig(e) {
    Oo = !0,
    rh(e)
}
function en() {
    if (!xs && mt !== null) {
        xs = !0;
        var e = 0
          , t = B;
        try {
            var n = mt;
            for (B = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            mt = null,
            Oo = !1
        } catch (i) {
            throw mt !== null && (mt = mt.slice(e + 1)),
            Lf(ua, en),
            i
        } finally {
            B = t,
            xs = !1
        }
    }
    return null
}
var Dn = []
  , Rn = 0
  , co = null
  , fo = 0
  , Ke = []
  , Ge = 0
  , yn = null
  , gt = 1
  , yt = "";
function rn(e, t) {
    Dn[Rn++] = fo,
    Dn[Rn++] = co,
    co = e,
    fo = t
}
function ih(e, t, n) {
    Ke[Ge++] = gt,
    Ke[Ge++] = yt,
    Ke[Ge++] = yn,
    yn = e;
    var r = gt;
    e = yt;
    var i = 32 - tt(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var o = 32 - tt(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32),
        r >>= s,
        i -= s,
        gt = 1 << 32 - tt(t) + i | n << i | r,
        yt = o + e
    } else
        gt = 1 << o | n << i | r,
        yt = e
}
function va(e) {
    e.return !== null && (rn(e, 1),
    ih(e, 1, 0))
}
function xa(e) {
    for (; e === co; )
        co = Dn[--Rn],
        Dn[Rn] = null,
        fo = Dn[--Rn],
        Dn[Rn] = null;
    for (; e === yn; )
        yn = Ke[--Ge],
        Ke[Ge] = null,
        yt = Ke[--Ge],
        Ke[Ge] = null,
        gt = Ke[--Ge],
        Ke[Ge] = null
}
var Oe = null
  , Ie = null
  , Y = !1
  , et = null;
function oh(e, t) {
    var n = Qe(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function ic(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Oe = e,
        Ie = $t(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Oe = e,
        Ie = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = yn !== null ? {
            id: gt,
            overflow: yt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Qe(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Oe = e,
        Ie = null,
        !0) : !1;
    default:
        return !1
    }
}
function ml(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function gl(e) {
    if (Y) {
        var t = Ie;
        if (t) {
            var n = t;
            if (!ic(e, t)) {
                if (ml(e))
                    throw Error(k(418));
                t = $t(n.nextSibling);
                var r = Oe;
                t && ic(e, t) ? oh(r, n) : (e.flags = e.flags & -4097 | 2,
                Y = !1,
                Oe = e)
            }
        } else {
            if (ml(e))
                throw Error(k(418));
            e.flags = e.flags & -4097 | 2,
            Y = !1,
            Oe = e
        }
    }
}
function oc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Oe = e
}
function Ci(e) {
    if (e !== Oe)
        return !1;
    if (!Y)
        return oc(e),
        Y = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !dl(e.type, e.memoizedProps)),
    t && (t = Ie)) {
        if (ml(e))
            throw sh(),
            Error(k(418));
        for (; t; )
            oh(e, t),
            t = $t(t.nextSibling)
    }
    if (oc(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(k(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ie = $t(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ie = null
        }
    } else
        Ie = Oe ? $t(e.stateNode.nextSibling) : null;
    return !0
}
function sh() {
    for (var e = Ie; e; )
        e = $t(e.nextSibling)
}
function Zn() {
    Ie = Oe = null,
    Y = !1
}
function wa(e) {
    et === null ? et = [e] : et.push(e)
}
var Fg = Lt.ReactCurrentBatchConfig;
function hr(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(k(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(k(147, e));
            var i = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
                var l = i.refs;
                s === null ? delete l[o] : l[o] = s
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(k(284));
        if (!n._owner)
            throw Error(k(290, e))
    }
    return e
}
function Ei(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function sc(e) {
    var t = e._init;
    return t(e._payload)
}
function lh(e) {
    function t(p, h) {
        if (e) {
            var m = p.deletions;
            m === null ? (p.deletions = [h],
            p.flags |= 16) : m.push(h)
        }
    }
    function n(p, h) {
        if (!e)
            return null;
        for (; h !== null; )
            t(p, h),
            h = h.sibling;
        return null
    }
    function r(p, h) {
        for (p = new Map; h !== null; )
            h.key !== null ? p.set(h.key, h) : p.set(h.index, h),
            h = h.sibling;
        return p
    }
    function i(p, h) {
        return p = Kt(p, h),
        p.index = 0,
        p.sibling = null,
        p
    }
    function o(p, h, m) {
        return p.index = m,
        e ? (m = p.alternate,
        m !== null ? (m = m.index,
        m < h ? (p.flags |= 2,
        h) : m) : (p.flags |= 2,
        h)) : (p.flags |= 1048576,
        h)
    }
    function s(p) {
        return e && p.alternate === null && (p.flags |= 2),
        p
    }
    function l(p, h, m, x) {
        return h === null || h.tag !== 6 ? (h = Es(m, p.mode, x),
        h.return = p,
        h) : (h = i(h, m),
        h.return = p,
        h)
    }
    function a(p, h, m, x) {
        var P = m.type;
        return P === En ? c(p, h, m.props.children, x, m.key) : h !== null && (h.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Mt && sc(P) === h.type) ? (x = i(h, m.props),
        x.ref = hr(p, h, m),
        x.return = p,
        x) : (x = Yi(m.type, m.key, m.props, null, p.mode, x),
        x.ref = hr(p, h, m),
        x.return = p,
        x)
    }
    function u(p, h, m, x) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = _s(m, p.mode, x),
        h.return = p,
        h) : (h = i(h, m.children || []),
        h.return = p,
        h)
    }
    function c(p, h, m, x, P) {
        return h === null || h.tag !== 7 ? (h = hn(m, p.mode, x, P),
        h.return = p,
        h) : (h = i(h, m),
        h.return = p,
        h)
    }
    function d(p, h, m) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = Es("" + h, p.mode, m),
            h.return = p,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case mi:
                return m = Yi(h.type, h.key, h.props, null, p.mode, m),
                m.ref = hr(p, null, h),
                m.return = p,
                m;
            case Cn:
                return h = _s(h, p.mode, m),
                h.return = p,
                h;
            case Mt:
                var x = h._init;
                return d(p, x(h._payload), m)
            }
            if (vr(h) || ar(h))
                return h = hn(h, p.mode, m, null),
                h.return = p,
                h;
            Ei(p, h)
        }
        return null
    }
    function f(p, h, m, x) {
        var P = h !== null ? h.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return P !== null ? null : l(p, h, "" + m, x);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case mi:
                return m.key === P ? a(p, h, m, x) : null;
            case Cn:
                return m.key === P ? u(p, h, m, x) : null;
            case Mt:
                return P = m._init,
                f(p, h, P(m._payload), x)
            }
            if (vr(m) || ar(m))
                return P !== null ? null : c(p, h, m, x, null);
            Ei(p, m)
        }
        return null
    }
    function g(p, h, m, x, P) {
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return p = p.get(m) || null,
            l(h, p, "" + x, P);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case mi:
                return p = p.get(x.key === null ? m : x.key) || null,
                a(h, p, x, P);
            case Cn:
                return p = p.get(x.key === null ? m : x.key) || null,
                u(h, p, x, P);
            case Mt:
                var C = x._init;
                return g(p, h, m, C(x._payload), P)
            }
            if (vr(x) || ar(x))
                return p = p.get(m) || null,
                c(h, p, x, P, null);
            Ei(h, x)
        }
        return null
    }
    function y(p, h, m, x) {
        for (var P = null, C = null, E = h, w = h = 0, M = null; E !== null && w < m.length; w++) {
            E.index > w ? (M = E,
            E = null) : M = E.sibling;
            var N = f(p, E, m[w], x);
            if (N === null) {
                E === null && (E = M);
                break
            }
            e && E && N.alternate === null && t(p, E),
            h = o(N, h, w),
            C === null ? P = N : C.sibling = N,
            C = N,
            E = M
        }
        if (w === m.length)
            return n(p, E),
            Y && rn(p, w),
            P;
        if (E === null) {
            for (; w < m.length; w++)
                E = d(p, m[w], x),
                E !== null && (h = o(E, h, w),
                C === null ? P = E : C.sibling = E,
                C = E);
            return Y && rn(p, w),
            P
        }
        for (E = r(p, E); w < m.length; w++)
            M = g(E, p, w, m[w], x),
            M !== null && (e && M.alternate !== null && E.delete(M.key === null ? w : M.key),
            h = o(M, h, w),
            C === null ? P = M : C.sibling = M,
            C = M);
        return e && E.forEach(function($) {
            return t(p, $)
        }),
        Y && rn(p, w),
        P
    }
    function v(p, h, m, x) {
        var P = ar(m);
        if (typeof P != "function")
            throw Error(k(150));
        if (m = P.call(m),
        m == null)
            throw Error(k(151));
        for (var C = P = null, E = h, w = h = 0, M = null, N = m.next(); E !== null && !N.done; w++,
        N = m.next()) {
            E.index > w ? (M = E,
            E = null) : M = E.sibling;
            var $ = f(p, E, N.value, x);
            if ($ === null) {
                E === null && (E = M);
                break
            }
            e && E && $.alternate === null && t(p, E),
            h = o($, h, w),
            C === null ? P = $ : C.sibling = $,
            C = $,
            E = M
        }
        if (N.done)
            return n(p, E),
            Y && rn(p, w),
            P;
        if (E === null) {
            for (; !N.done; w++,
            N = m.next())
                N = d(p, N.value, x),
                N !== null && (h = o(N, h, w),
                C === null ? P = N : C.sibling = N,
                C = N);
            return Y && rn(p, w),
            P
        }
        for (E = r(p, E); !N.done; w++,
        N = m.next())
            N = g(E, p, w, N.value, x),
            N !== null && (e && N.alternate !== null && E.delete(N.key === null ? w : N.key),
            h = o(N, h, w),
            C === null ? P = N : C.sibling = N,
            C = N);
        return e && E.forEach(function(ae) {
            return t(p, ae)
        }),
        Y && rn(p, w),
        P
    }
    function T(p, h, m, x) {
        if (typeof m == "object" && m !== null && m.type === En && m.key === null && (m = m.props.children),
        typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case mi:
                e: {
                    for (var P = m.key, C = h; C !== null; ) {
                        if (C.key === P) {
                            if (P = m.type,
                            P === En) {
                                if (C.tag === 7) {
                                    n(p, C.sibling),
                                    h = i(C, m.props.children),
                                    h.return = p,
                                    p = h;
                                    break e
                                }
                            } else if (C.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Mt && sc(P) === C.type) {
                                n(p, C.sibling),
                                h = i(C, m.props),
                                h.ref = hr(p, C, m),
                                h.return = p,
                                p = h;
                                break e
                            }
                            n(p, C);
                            break
                        } else
                            t(p, C);
                        C = C.sibling
                    }
                    m.type === En ? (h = hn(m.props.children, p.mode, x, m.key),
                    h.return = p,
                    p = h) : (x = Yi(m.type, m.key, m.props, null, p.mode, x),
                    x.ref = hr(p, h, m),
                    x.return = p,
                    p = x)
                }
                return s(p);
            case Cn:
                e: {
                    for (C = m.key; h !== null; ) {
                        if (h.key === C)
                            if (h.tag === 4 && h.stateNode.containerInfo === m.containerInfo && h.stateNode.implementation === m.implementation) {
                                n(p, h.sibling),
                                h = i(h, m.children || []),
                                h.return = p,
                                p = h;
                                break e
                            } else {
                                n(p, h);
                                break
                            }
                        else
                            t(p, h);
                        h = h.sibling
                    }
                    h = _s(m, p.mode, x),
                    h.return = p,
                    p = h
                }
                return s(p);
            case Mt:
                return C = m._init,
                T(p, h, C(m._payload), x)
            }
            if (vr(m))
                return y(p, h, m, x);
            if (ar(m))
                return v(p, h, m, x);
            Ei(p, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
        h !== null && h.tag === 6 ? (n(p, h.sibling),
        h = i(h, m),
        h.return = p,
        p = h) : (n(p, h),
        h = Es(m, p.mode, x),
        h.return = p,
        p = h),
        s(p)) : n(p, h)
    }
    return T
}
var qn = lh(!0)
  , ah = lh(!1)
  , ho = bt(null)
  , po = null
  , Vn = null
  , Sa = null;
function Ta() {
    Sa = Vn = po = null
}
function Pa(e) {
    var t = ho.current;
    Q(ho),
    e._currentValue = t
}
function yl(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Gn(e, t) {
    po = e,
    Sa = Vn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Me = !0),
    e.firstContext = null)
}
function Xe(e) {
    var t = e._currentValue;
    if (Sa !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Vn === null) {
            if (po === null)
                throw Error(k(308));
            Vn = e,
            po.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Vn = Vn.next = e;
    return t
}
var un = null;
function ka(e) {
    un === null ? un = [e] : un.push(e)
}
function uh(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    ka(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    Et(e, r)
}
function Et(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Dt = !1;
function Ca(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function ch(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function xt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Ut(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    I & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        Et(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    ka(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    Et(e, n)
}
function Ui(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        ca(e, n)
    }
}
function lc(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s,
                n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else
            i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function mo(e, t, n, r) {
    var i = e.updateQueue;
    Dt = !1;
    var o = i.firstBaseUpdate
      , s = i.lastBaseUpdate
      , l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        s === null ? o = u : s.next = u,
        s = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        l = c.lastBaseUpdate,
        l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u,
        c.lastBaseUpdate = a))
    }
    if (o !== null) {
        var d = i.baseState;
        s = 0,
        c = u = a = null,
        l = o;
        do {
            var f = l.lane
              , g = l.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: g,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var y = e
                      , v = l;
                    switch (f = t,
                    g = n,
                    v.tag) {
                    case 1:
                        if (y = v.payload,
                        typeof y == "function") {
                            d = y.call(g, d, f);
                            break e
                        }
                        d = y;
                        break e;
                    case 3:
                        y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = v.payload,
                        f = typeof y == "function" ? y.call(g, d, f) : y,
                        f == null)
                            break e;
                        d = J({}, d, f);
                        break e;
                    case 2:
                        Dt = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                f = i.effects,
                f === null ? i.effects = [l] : f.push(l))
            } else
                g = {
                    eventTime: g,
                    lane: f,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                c === null ? (u = c = g,
                a = d) : c = c.next = g,
                s |= f;
            if (l = l.next,
            l === null) {
                if (l = i.shared.pending,
                l === null)
                    break;
                f = l,
                l = f.next,
                f.next = null,
                i.lastBaseUpdate = f,
                i.shared.pending = null
            }
        } while (!0);
        if (c === null && (a = d),
        i.baseState = a,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = c,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                s |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            o === null && (i.shared.lanes = 0);
        xn |= s,
        e.lanes = s,
        e.memoizedState = d
    }
}
function ac(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(k(191, i));
                i.call(r)
            }
        }
}
var ui = {}
  , ut = bt(ui)
  , Qr = bt(ui)
  , Yr = bt(ui);
function cn(e) {
    if (e === ui)
        throw Error(k(174));
    return e
}
function Ea(e, t) {
    switch (K(Yr, t),
    K(Qr, e),
    K(ut, ui),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : qs(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = qs(t, e)
    }
    Q(ut),
    K(ut, t)
}
function Jn() {
    Q(ut),
    Q(Qr),
    Q(Yr)
}
function dh(e) {
    cn(Yr.current);
    var t = cn(ut.current)
      , n = qs(t, e.type);
    t !== n && (K(Qr, e),
    K(ut, n))
}
function _a(e) {
    Qr.current === e && (Q(ut),
    Q(Qr))
}
var X = bt(0);
function go(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var ws = [];
function La() {
    for (var e = 0; e < ws.length; e++)
        ws[e]._workInProgressVersionPrimary = null;
    ws.length = 0
}
var Wi = Lt.ReactCurrentDispatcher
  , Ss = Lt.ReactCurrentBatchConfig
  , vn = 0
  , q = null
  , ie = null
  , se = null
  , yo = !1
  , Lr = !1
  , Xr = 0
  , Og = 0;
function pe() {
    throw Error(k(321))
}
function Aa(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!rt(e[n], t[n]))
            return !1;
    return !0
}
function Na(e, t, n, r, i, o) {
    if (vn = o,
    q = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Wi.current = e === null || e.memoizedState === null ? Ug : Wg,
    e = n(r, i),
    Lr) {
        o = 0;
        do {
            if (Lr = !1,
            Xr = 0,
            25 <= o)
                throw Error(k(301));
            o += 1,
            se = ie = null,
            t.updateQueue = null,
            Wi.current = Hg,
            e = n(r, i)
        } while (Lr)
    }
    if (Wi.current = vo,
    t = ie !== null && ie.next !== null,
    vn = 0,
    se = ie = q = null,
    yo = !1,
    t)
        throw Error(k(300));
    return e
}
function Ma() {
    var e = Xr !== 0;
    return Xr = 0,
    e
}
function st() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return se === null ? q.memoizedState = se = e : se = se.next = e,
    se
}
function Ze() {
    if (ie === null) {
        var e = q.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ie.next;
    var t = se === null ? q.memoizedState : se.next;
    if (t !== null)
        se = t,
        ie = e;
    else {
        if (e === null)
            throw Error(k(310));
        ie = e,
        e = {
            memoizedState: ie.memoizedState,
            baseState: ie.baseState,
            baseQueue: ie.baseQueue,
            queue: ie.queue,
            next: null
        },
        se === null ? q.memoizedState = se = e : se = se.next = e
    }
    return se
}
function Zr(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Ts(e) {
    var t = Ze()
      , n = t.queue;
    if (n === null)
        throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = ie
      , i = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next,
            o.next = s
        }
        r.baseQueue = i = o,
        n.pending = null
    }
    if (i !== null) {
        o = i.next,
        r = r.baseState;
        var l = s = null
          , a = null
          , u = o;
        do {
            var c = u.lane;
            if ((vn & c) === c)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = d,
                s = r) : a = a.next = d,
                q.lanes |= c,
                xn |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        a === null ? s = r : a.next = l,
        rt(r, t.memoizedState) || (Me = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            o = i.lane,
            q.lanes |= o,
            xn |= o,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Ps(e) {
    var t = Ze()
      , n = t.queue;
    if (n === null)
        throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do
            o = e(o, s.action),
            s = s.next;
        while (s !== i);
        rt(o, t.memoizedState) || (Me = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function fh() {}
function hh(e, t) {
    var n = q
      , r = Ze()
      , i = t()
      , o = !rt(r.memoizedState, i);
    if (o && (r.memoizedState = i,
    Me = !0),
    r = r.queue,
    Da(gh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || se !== null && se.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        qr(9, mh.bind(null, n, r, i, t), void 0, null),
        le === null)
            throw Error(k(349));
        vn & 30 || ph(n, t, i)
    }
    return i
}
function ph(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = q.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    q.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function mh(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    yh(t) && vh(e)
}
function gh(e, t, n) {
    return n(function() {
        yh(t) && vh(e)
    })
}
function yh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !rt(e, n)
    } catch {
        return !0
    }
}
function vh(e) {
    var t = Et(e, 1);
    t !== null && nt(t, e, 1, -1)
}
function uc(e) {
    var t = st();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zr,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = $g.bind(null, q, e),
    [t.memoizedState, e]
}
function qr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = q.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    q.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function xh() {
    return Ze().memoizedState
}
function Hi(e, t, n, r) {
    var i = st();
    q.flags |= e,
    i.memoizedState = qr(1 | t, n, void 0, r === void 0 ? null : r)
}
function zo(e, t, n, r) {
    var i = Ze();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ie !== null) {
        var s = ie.memoizedState;
        if (o = s.destroy,
        r !== null && Aa(r, s.deps)) {
            i.memoizedState = qr(t, n, o, r);
            return
        }
    }
    q.flags |= e,
    i.memoizedState = qr(1 | t, n, o, r)
}
function cc(e, t) {
    return Hi(8390656, 8, e, t)
}
function Da(e, t) {
    return zo(2048, 8, e, t)
}
function wh(e, t) {
    return zo(4, 2, e, t)
}
function Sh(e, t) {
    return zo(4, 4, e, t)
}
function Th(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Ph(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    zo(4, 4, Th.bind(null, t, e), n)
}
function Ra() {}
function kh(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Aa(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Ch(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Aa(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Eh(e, t, n) {
    return vn & 21 ? (rt(n, t) || (n = Mf(),
    q.lanes |= n,
    xn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Me = !0),
    e.memoizedState = n)
}
function zg(e, t) {
    var n = B;
    B = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Ss.transition;
    Ss.transition = {};
    try {
        e(!1),
        t()
    } finally {
        B = n,
        Ss.transition = r
    }
}
function _h() {
    return Ze().memoizedState
}
function Bg(e, t, n) {
    var r = Ht(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Lh(e))
        Ah(t, n);
    else if (n = uh(e, t, n, r),
    n !== null) {
        var i = ke();
        nt(n, e, r, i),
        Nh(n, t, r)
    }
}
function $g(e, t, n) {
    var r = Ht(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Lh(e))
        Ah(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var s = t.lastRenderedState
                  , l = o(s, n);
                if (i.hasEagerState = !0,
                i.eagerState = l,
                rt(l, s)) {
                    var a = t.interleaved;
                    a === null ? (i.next = i,
                    ka(t)) : (i.next = a.next,
                    a.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = uh(e, t, i, r),
        n !== null && (i = ke(),
        nt(n, e, r, i),
        Nh(n, t, r))
    }
}
function Lh(e) {
    var t = e.alternate;
    return e === q || t !== null && t === q
}
function Ah(e, t) {
    Lr = yo = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Nh(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        ca(e, n)
    }
}
var vo = {
    readContext: Xe,
    useCallback: pe,
    useContext: pe,
    useEffect: pe,
    useImperativeHandle: pe,
    useInsertionEffect: pe,
    useLayoutEffect: pe,
    useMemo: pe,
    useReducer: pe,
    useRef: pe,
    useState: pe,
    useDebugValue: pe,
    useDeferredValue: pe,
    useTransition: pe,
    useMutableSource: pe,
    useSyncExternalStore: pe,
    useId: pe,
    unstable_isNewReconciler: !1
}
  , Ug = {
    readContext: Xe,
    useCallback: function(e, t) {
        return st().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Xe,
    useEffect: cc,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Hi(4194308, 4, Th.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Hi(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Hi(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = st();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = st();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Bg.bind(null, q, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = st();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: uc,
    useDebugValue: Ra,
    useDeferredValue: function(e) {
        return st().memoizedState = e
    },
    useTransition: function() {
        var e = uc(!1)
          , t = e[0];
        return e = zg.bind(null, e[1]),
        st().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = q
          , i = st();
        if (Y) {
            if (n === void 0)
                throw Error(k(407));
            n = n()
        } else {
            if (n = t(),
            le === null)
                throw Error(k(349));
            vn & 30 || ph(r, t, n)
        }
        i.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return i.queue = o,
        cc(gh.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        qr(9, mh.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = st()
          , t = le.identifierPrefix;
        if (Y) {
            var n = yt
              , r = gt;
            n = (r & ~(1 << 32 - tt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Xr++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = Og++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Wg = {
    readContext: Xe,
    useCallback: kh,
    useContext: Xe,
    useEffect: Da,
    useImperativeHandle: Ph,
    useInsertionEffect: wh,
    useLayoutEffect: Sh,
    useMemo: Ch,
    useReducer: Ts,
    useRef: xh,
    useState: function() {
        return Ts(Zr)
    },
    useDebugValue: Ra,
    useDeferredValue: function(e) {
        var t = Ze();
        return Eh(t, ie.memoizedState, e)
    },
    useTransition: function() {
        var e = Ts(Zr)[0]
          , t = Ze().memoizedState;
        return [e, t]
    },
    useMutableSource: fh,
    useSyncExternalStore: hh,
    useId: _h,
    unstable_isNewReconciler: !1
}
  , Hg = {
    readContext: Xe,
    useCallback: kh,
    useContext: Xe,
    useEffect: Da,
    useImperativeHandle: Ph,
    useInsertionEffect: wh,
    useLayoutEffect: Sh,
    useMemo: Ch,
    useReducer: Ps,
    useRef: xh,
    useState: function() {
        return Ps(Zr)
    },
    useDebugValue: Ra,
    useDeferredValue: function(e) {
        var t = Ze();
        return ie === null ? t.memoizedState = e : Eh(t, ie.memoizedState, e)
    },
    useTransition: function() {
        var e = Ps(Zr)[0]
          , t = Ze().memoizedState;
        return [e, t]
    },
    useMutableSource: fh,
    useSyncExternalStore: hh,
    useId: _h,
    unstable_isNewReconciler: !1
};
function Je(e, t) {
    if (e && e.defaultProps) {
        t = J({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function vl(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : J({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Bo = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Tn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ke()
          , i = Ht(e)
          , o = xt(r, i);
        o.payload = t,
        n != null && (o.callback = n),
        t = Ut(e, o, i),
        t !== null && (nt(t, e, i, r),
        Ui(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ke()
          , i = Ht(e)
          , o = xt(r, i);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = Ut(e, o, i),
        t !== null && (nt(t, e, i, r),
        Ui(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ke()
          , r = Ht(e)
          , i = xt(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = Ut(e, i, r),
        t !== null && (nt(t, e, r, n),
        Ui(t, e, r))
    }
};
function dc(e, t, n, r, i, o, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Wr(n, r) || !Wr(i, o) : !0
}
function Mh(e, t, n) {
    var r = !1
      , i = Yt
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = Xe(o) : (i = Re(t) ? gn : we.current,
    r = t.contextTypes,
    o = (r = r != null) ? Xn(e, i) : Yt),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Bo,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function fc(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Bo.enqueueReplaceState(t, t.state, null)
}
function xl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = {},
    Ca(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Xe(o) : (o = Re(t) ? gn : we.current,
    i.context = Xn(e, o)),
    i.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (vl(e, t, o, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && Bo.enqueueReplaceState(i, i.state, null),
    mo(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function bn(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += v0(r),
            r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function ks(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function wl(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Kg = typeof WeakMap == "function" ? WeakMap : Map;
function Dh(e, t, n) {
    n = xt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        wo || (wo = !0,
        Nl = r),
        wl(e, t)
    }
    ,
    n
}
function Rh(e, t, n) {
    n = xt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            wl(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        wl(e, t),
        typeof r != "function" && (Wt === null ? Wt = new Set([this]) : Wt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function hc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Kg;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = oy.bind(null, e, t, n),
    t.then(e, e))
}
function pc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function mc(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = xt(-1, 1),
    t.tag = 2,
    Ut(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Gg = Lt.ReactCurrentOwner
  , Me = !1;
function Te(e, t, n, r) {
    t.child = e === null ? ah(t, null, n, r) : qn(t, e.child, n, r)
}
function gc(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Gn(t, i),
    r = Na(e, t, n, r, o, i),
    n = Ma(),
    e !== null && !Me ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    _t(e, t, i)) : (Y && n && va(t),
    t.flags |= 1,
    Te(e, t, r, i),
    t.child)
}
function yc(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !$a(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        Vh(e, t, o, r, i)) : (e = Yi(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Wr,
        n(s, r) && e.ref === t.ref)
            return _t(e, t, i)
    }
    return t.flags |= 1,
    e = Kt(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Vh(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Wr(o, r) && e.ref === t.ref)
            if (Me = !1,
            t.pendingProps = r = o,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (Me = !0);
            else
                return t.lanes = e.lanes,
                _t(e, t, i)
    }
    return Sl(e, t, n, r, i)
}
function jh(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            K(In, je),
            je |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                K(In, je),
                je |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            K(In, je),
            je |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        K(In, je),
        je |= r;
    return Te(e, t, i, n),
    t.child
}
function Ih(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Sl(e, t, n, r, i) {
    var o = Re(n) ? gn : we.current;
    return o = Xn(t, o),
    Gn(t, i),
    n = Na(e, t, n, r, o, i),
    r = Ma(),
    e !== null && !Me ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    _t(e, t, i)) : (Y && r && va(t),
    t.flags |= 1,
    Te(e, t, n, i),
    t.child)
}
function vc(e, t, n, r, i) {
    if (Re(n)) {
        var o = !0;
        uo(t)
    } else
        o = !1;
    if (Gn(t, i),
    t.stateNode === null)
        Ki(e, t),
        Mh(t, n, r),
        xl(t, n, r, i),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , l = t.memoizedProps;
        s.props = l;
        var a = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = Xe(u) : (u = Re(n) ? gn : we.current,
        u = Xn(t, u));
        var c = n.getDerivedStateFromProps
          , d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && fc(t, s, r, u),
        Dt = !1;
        var f = t.memoizedState;
        s.state = f,
        mo(t, r, s, i),
        a = t.memoizedState,
        l !== r || f !== a || De.current || Dt ? (typeof c == "function" && (vl(t, n, c, r),
        a = t.memoizedState),
        (l = Dt || dc(t, n, l, r, f, a, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        s.props = r,
        s.state = a,
        s.context = u,
        r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        ch(e, t),
        l = t.memoizedProps,
        u = t.type === t.elementType ? l : Je(t.type, l),
        s.props = u,
        d = t.pendingProps,
        f = s.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = Xe(a) : (a = Re(n) ? gn : we.current,
        a = Xn(t, a));
        var g = n.getDerivedStateFromProps;
        (c = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== d || f !== a) && fc(t, s, r, a),
        Dt = !1,
        f = t.memoizedState,
        s.state = f,
        mo(t, r, s, i);
        var y = t.memoizedState;
        l !== d || f !== y || De.current || Dt ? (typeof g == "function" && (vl(t, n, g, r),
        y = t.memoizedState),
        (u = Dt || dc(t, n, u, r, f, y, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, a),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, a)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = y),
        s.props = r,
        s.state = y,
        s.context = a,
        r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Tl(e, t, n, r, o, i)
}
function Tl(e, t, n, r, i, o) {
    Ih(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return i && rc(t, n, !1),
        _t(e, t, o);
    r = t.stateNode,
    Gg.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = qn(t, e.child, null, o),
    t.child = qn(t, null, l, o)) : Te(e, t, l, o),
    t.memoizedState = r.state,
    i && rc(t, n, !0),
    t.child
}
function Fh(e) {
    var t = e.stateNode;
    t.pendingContext ? nc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && nc(e, t.context, !1),
    Ea(e, t.containerInfo)
}
function xc(e, t, n, r, i) {
    return Zn(),
    wa(i),
    t.flags |= 256,
    Te(e, t, n, r),
    t.child
}
var Pl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function kl(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Oh(e, t, n) {
    var r = t.pendingProps, i = X.current, o = !1, s = (t.flags & 128) !== 0, l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    K(X, i & 1),
    e === null)
        return gl(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = s) : o = Wo(s, r, 0, null),
        e = hn(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = kl(n),
        t.memoizedState = Pl,
        e) : Va(t, s));
    if (i = e.memoizedState,
    i !== null && (l = i.dehydrated,
    l !== null))
        return Qg(e, t, s, r, l, i, n);
    if (o) {
        o = r.fallback,
        s = t.mode,
        i = e.child,
        l = i.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = Kt(i, a),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        l !== null ? o = Kt(l, o) : (o = hn(o, s, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        s = e.child.memoizedState,
        s = s === null ? kl(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        o.memoizedState = s,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = Pl,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = Kt(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Va(e, t) {
    return t = Wo({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function _i(e, t, n, r) {
    return r !== null && wa(r),
    qn(t, e.child, null, n),
    e = Va(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Qg(e, t, n, r, i, o, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = ks(Error(k(422))),
        _i(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        i = t.mode,
        r = Wo({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        o = hn(o, i, s, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && qn(t, e.child, null, s),
        t.child.memoizedState = kl(s),
        t.memoizedState = Pl,
        o);
    if (!(t.mode & 1))
        return _i(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        o = Error(k(419)),
        r = ks(o, r, void 0),
        _i(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0,
    Me || l) {
        if (r = le,
        r !== null) {
            switch (s & -s) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
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
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i,
            i !== 0 && i !== o.retryLane && (o.retryLane = i,
            Et(e, i),
            nt(r, e, i, -1))
        }
        return Ba(),
        r = ks(Error(k(421))),
        _i(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = sy.bind(null, e),
    i._reactRetry = t,
    null) : (e = o.treeContext,
    Ie = $t(i.nextSibling),
    Oe = t,
    Y = !0,
    et = null,
    e !== null && (Ke[Ge++] = gt,
    Ke[Ge++] = yt,
    Ke[Ge++] = yn,
    gt = e.id,
    yt = e.overflow,
    yn = t),
    t = Va(t, r.children),
    t.flags |= 4096,
    t)
}
function wc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    yl(e.return, t, n)
}
function Cs(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = i)
}
function zh(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , o = r.tail;
    if (Te(e, t, r.children, n),
    r = X.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && wc(e, n, t);
                else if (e.tag === 19)
                    wc(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (K(X, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && go(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            Cs(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && go(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            Cs(t, !0, n, null, o);
            break;
        case "together":
            Cs(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Ki(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function _t(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    xn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(k(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Kt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Kt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Yg(e, t, n) {
    switch (t.tag) {
    case 3:
        Fh(t),
        Zn();
        break;
    case 5:
        dh(t);
        break;
    case 1:
        Re(t.type) && uo(t);
        break;
    case 4:
        Ea(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        K(ho, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (K(X, X.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Oh(e, t, n) : (K(X, X.current & 1),
            e = _t(e, t, n),
            e !== null ? e.sibling : null);
        K(X, X.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return zh(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        K(X, X.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        jh(e, t, n)
    }
    return _t(e, t, n)
}
var Bh, Cl, $h, Uh;
Bh = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Cl = function() {}
;
$h = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        cn(ut.current);
        var o = null;
        switch (n) {
        case "input":
            i = Qs(e, i),
            r = Qs(e, r),
            o = [];
            break;
        case "select":
            i = J({}, i, {
                value: void 0
            }),
            r = J({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            i = Zs(e, i),
            r = Zs(e, r),
            o = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = lo)
        }
        Js(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var l = i[u];
                    for (s in l)
                        l.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ir.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l)
                            !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in a)
                            a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}),
                            n[s] = a[s])
                    } else
                        n || (o || (o = []),
                        o.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ir.hasOwnProperty(u) ? (a != null && u === "onScroll" && G("scroll", e),
                    o || l === a || (o = [])) : (o = o || []).push(u, a))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
Uh = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function pr(e, t) {
    if (!Y)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function me(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Xg(e, t, n) {
    var r = t.pendingProps;
    switch (xa(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return me(t),
        null;
    case 1:
        return Re(t.type) && ao(),
        me(t),
        null;
    case 3:
        return r = t.stateNode,
        Jn(),
        Q(De),
        Q(we),
        La(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Ci(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        et !== null && (Rl(et),
        et = null))),
        Cl(e, t),
        me(t),
        null;
    case 5:
        _a(t);
        var i = cn(Yr.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            $h(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(k(166));
                return me(t),
                null
            }
            if (e = cn(ut.current),
            Ci(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[lt] = t,
                r[Gr] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    G("cancel", r),
                    G("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    G("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < wr.length; i++)
                        G(wr[i], r);
                    break;
                case "source":
                    G("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    G("error", r),
                    G("load", r);
                    break;
                case "details":
                    G("toggle", r);
                    break;
                case "input":
                    Au(r, o),
                    G("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    G("invalid", r);
                    break;
                case "textarea":
                    Mu(r, o),
                    G("invalid", r)
                }
                Js(n, o),
                i = null;
                for (var s in o)
                    if (o.hasOwnProperty(s)) {
                        var l = o[s];
                        s === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && ki(r.textContent, l, e),
                        i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && ki(r.textContent, l, e),
                        i = ["children", "" + l]) : Ir.hasOwnProperty(s) && l != null && s === "onScroll" && G("scroll", r)
                    }
                switch (n) {
                case "input":
                    gi(r),
                    Nu(r, o, !0);
                    break;
                case "textarea":
                    gi(r),
                    Du(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = lo)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = gf(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[lt] = t,
                e[Gr] = r,
                Bh(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = bs(n, r),
                    n) {
                    case "dialog":
                        G("cancel", e),
                        G("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        G("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < wr.length; i++)
                            G(wr[i], e);
                        i = r;
                        break;
                    case "source":
                        G("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        G("error", e),
                        G("load", e),
                        i = r;
                        break;
                    case "details":
                        G("toggle", e),
                        i = r;
                        break;
                    case "input":
                        Au(e, r),
                        i = Qs(e, r),
                        G("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = J({}, r, {
                            value: void 0
                        }),
                        G("invalid", e);
                        break;
                    case "textarea":
                        Mu(e, r),
                        i = Zs(e, r),
                        G("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    Js(n, i),
                    l = i;
                    for (o in l)
                        if (l.hasOwnProperty(o)) {
                            var a = l[o];
                            o === "style" ? xf(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && yf(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Fr(e, a) : typeof a == "number" && Fr(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Ir.hasOwnProperty(o) ? a != null && o === "onScroll" && G("scroll", e) : a != null && ia(e, o, a, s))
                        }
                    switch (n) {
                    case "input":
                        gi(e),
                        Nu(e, r, !1);
                        break;
                    case "textarea":
                        gi(e),
                        Du(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Qt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? Un(e, !!r.multiple, o, !1) : r.defaultValue != null && Un(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = lo)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return me(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Uh(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(k(166));
            if (n = cn(Yr.current),
            cn(ut.current),
            Ci(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[lt] = t,
                (o = r.nodeValue !== n) && (e = Oe,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        ki(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && ki(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[lt] = t,
                t.stateNode = r
        }
        return me(t),
        null;
    case 13:
        if (Q(X),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (Y && Ie !== null && t.mode & 1 && !(t.flags & 128))
                sh(),
                Zn(),
                t.flags |= 98560,
                o = !1;
            else if (o = Ci(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(k(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(k(317));
                    o[lt] = t
                } else
                    Zn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                me(t),
                o = !1
            } else
                et !== null && (Rl(et),
                et = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || X.current & 1 ? oe === 0 && (oe = 3) : Ba())),
        t.updateQueue !== null && (t.flags |= 4),
        me(t),
        null);
    case 4:
        return Jn(),
        Cl(e, t),
        e === null && Hr(t.stateNode.containerInfo),
        me(t),
        null;
    case 10:
        return Pa(t.type._context),
        me(t),
        null;
    case 17:
        return Re(t.type) && ao(),
        me(t),
        null;
    case 19:
        if (Q(X),
        o = t.memoizedState,
        o === null)
            return me(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = o.rendering,
        s === null)
            if (r)
                pr(o, !1);
            else {
                if (oe !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = go(e),
                        s !== null) {
                            for (t.flags |= 128,
                            pr(o, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                s = o.alternate,
                                s === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = s.childLanes,
                                o.lanes = s.lanes,
                                o.child = s.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = s.memoizedProps,
                                o.memoizedState = s.memoizedState,
                                o.updateQueue = s.updateQueue,
                                o.type = s.type,
                                e = s.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return K(X, X.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && te() > er && (t.flags |= 128,
                r = !0,
                pr(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = go(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    pr(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !s.alternate && !Y)
                        return me(t),
                        null
                } else
                    2 * te() - o.renderingStartTime > er && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    pr(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = o.last,
            n !== null ? n.sibling = s : t.child = s,
            o.last = s)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = te(),
        t.sibling = null,
        n = X.current,
        K(X, r ? n & 1 | 2 : n & 1),
        t) : (me(t),
        null);
    case 22:
    case 23:
        return za(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? je & 1073741824 && (me(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : me(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(k(156, t.tag))
}
function Zg(e, t) {
    switch (xa(t),
    t.tag) {
    case 1:
        return Re(t.type) && ao(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Jn(),
        Q(De),
        Q(we),
        La(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return _a(t),
        null;
    case 13:
        if (Q(X),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(k(340));
            Zn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return Q(X),
        null;
    case 4:
        return Jn(),
        null;
    case 10:
        return Pa(t.type._context),
        null;
    case 22:
    case 23:
        return za(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Li = !1
  , ye = !1
  , qg = typeof WeakSet == "function" ? WeakSet : Set
  , A = null;
function jn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                b(e, t, r)
            }
        else
            n.current = null
}
function El(e, t, n) {
    try {
        n()
    } catch (r) {
        b(e, t, r)
    }
}
var Sc = !1;
function Jg(e, t) {
    if (ul = io,
    e = Qf(),
    ya(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , c = 0
                      , d = e
                      , f = null;
                    t: for (; ; ) {
                        for (var g; d !== n || i !== 0 && d.nodeType !== 3 || (l = s + i),
                        d !== o || r !== 0 && d.nodeType !== 3 || (a = s + r),
                        d.nodeType === 3 && (s += d.nodeValue.length),
                        (g = d.firstChild) !== null; )
                            f = d,
                            d = g;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (f === n && ++u === i && (l = s),
                            f === o && ++c === r && (a = s),
                            (g = d.nextSibling) !== null)
                                break;
                            d = f,
                            f = d.parentNode
                        }
                        d = g
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (cl = {
        focusedElem: e,
        selectionRange: n
    },
    io = !1,
    A = t; A !== null; )
        if (t = A,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            A = e;
        else
            for (; A !== null; ) {
                t = A;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var v = y.memoizedProps
                                  , T = y.memoizedState
                                  , p = t.stateNode
                                  , h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Je(t.type, v), T);
                                p.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(k(163))
                        }
                } catch (x) {
                    b(t, t.return, x)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    A = e;
                    break
                }
                A = t.return
            }
    return y = Sc,
    Sc = !1,
    y
}
function Ar(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0,
                o !== void 0 && El(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function $o(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function _l(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Wh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Wh(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[lt],
    delete t[Gr],
    delete t[hl],
    delete t[Vg],
    delete t[jg])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Hh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Tc(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Hh(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Ll(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = lo));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ll(e, t, n),
        e = e.sibling; e !== null; )
            Ll(e, t, n),
            e = e.sibling
}
function Al(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Al(e, t, n),
        e = e.sibling; e !== null; )
            Al(e, t, n),
            e = e.sibling
}
var ce = null
  , be = !1;
function At(e, t, n) {
    for (n = n.child; n !== null; )
        Kh(e, t, n),
        n = n.sibling
}
function Kh(e, t, n) {
    if (at && typeof at.onCommitFiberUnmount == "function")
        try {
            at.onCommitFiberUnmount(Ro, n)
        } catch {}
    switch (n.tag) {
    case 5:
        ye || jn(n, t);
    case 6:
        var r = ce
          , i = be;
        ce = null,
        At(e, t, n),
        ce = r,
        be = i,
        ce !== null && (be ? (e = ce,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ce.removeChild(n.stateNode));
        break;
    case 18:
        ce !== null && (be ? (e = ce,
        n = n.stateNode,
        e.nodeType === 8 ? vs(e.parentNode, n) : e.nodeType === 1 && vs(e, n),
        $r(e)) : vs(ce, n.stateNode));
        break;
    case 4:
        r = ce,
        i = be,
        ce = n.stateNode.containerInfo,
        be = !0,
        At(e, t, n),
        ce = r,
        be = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!ye && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var o = i
                  , s = o.destroy;
                o = o.tag,
                s !== void 0 && (o & 2 || o & 4) && El(n, t, s),
                i = i.next
            } while (i !== r)
        }
        At(e, t, n);
        break;
    case 1:
        if (!ye && (jn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                b(n, t, l)
            }
        At(e, t, n);
        break;
    case 21:
        At(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (ye = (r = ye) || n.memoizedState !== null,
        At(e, t, n),
        ye = r) : At(e, t, n);
        break;
    default:
        At(e, t, n)
    }
}
function Pc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new qg),
        t.forEach(function(r) {
            var i = ly.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function qe(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e
                  , s = t
                  , l = s;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        ce = l.stateNode,
                        be = !1;
                        break e;
                    case 3:
                        ce = l.stateNode.containerInfo,
                        be = !0;
                        break e;
                    case 4:
                        ce = l.stateNode.containerInfo,
                        be = !0;
                        break e
                    }
                    l = l.return
                }
                if (ce === null)
                    throw Error(k(160));
                Kh(o, s, i),
                ce = null,
                be = !1;
                var a = i.alternate;
                a !== null && (a.return = null),
                i.return = null
            } catch (u) {
                b(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Gh(t, e),
            t = t.sibling
}
function Gh(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (qe(t, e),
        ot(e),
        r & 4) {
            try {
                Ar(3, e, e.return),
                $o(3, e)
            } catch (v) {
                b(e, e.return, v)
            }
            try {
                Ar(5, e, e.return)
            } catch (v) {
                b(e, e.return, v)
            }
        }
        break;
    case 1:
        qe(t, e),
        ot(e),
        r & 512 && n !== null && jn(n, n.return);
        break;
    case 5:
        if (qe(t, e),
        ot(e),
        r & 512 && n !== null && jn(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                Fr(i, "")
            } catch (v) {
                b(e, e.return, v)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var o = e.memoizedProps
              , s = n !== null ? n.memoizedProps : o
              , l = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    l === "input" && o.type === "radio" && o.name != null && pf(i, o),
                    bs(l, s);
                    var u = bs(l, o);
                    for (s = 0; s < a.length; s += 2) {
                        var c = a[s]
                          , d = a[s + 1];
                        c === "style" ? xf(i, d) : c === "dangerouslySetInnerHTML" ? yf(i, d) : c === "children" ? Fr(i, d) : ia(i, c, d, u)
                    }
                    switch (l) {
                    case "input":
                        Ys(i, o);
                        break;
                    case "textarea":
                        mf(i, o);
                        break;
                    case "select":
                        var f = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var g = o.value;
                        g != null ? Un(i, !!o.multiple, g, !1) : f !== !!o.multiple && (o.defaultValue != null ? Un(i, !!o.multiple, o.defaultValue, !0) : Un(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[Gr] = o
                } catch (v) {
                    b(e, e.return, v)
                }
        }
        break;
    case 6:
        if (qe(t, e),
        ot(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(k(162));
            i = e.stateNode,
            o = e.memoizedProps;
            try {
                i.nodeValue = o
            } catch (v) {
                b(e, e.return, v)
            }
        }
        break;
    case 3:
        if (qe(t, e),
        ot(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                $r(t.containerInfo)
            } catch (v) {
                b(e, e.return, v)
            }
        break;
    case 4:
        qe(t, e),
        ot(e);
        break;
    case 13:
        qe(t, e),
        ot(e),
        i = e.child,
        i.flags & 8192 && (o = i.memoizedState !== null,
        i.stateNode.isHidden = o,
        !o || i.alternate !== null && i.alternate.memoizedState !== null || (Fa = te())),
        r & 4 && Pc(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (ye = (u = ye) || c,
        qe(t, e),
        ye = u) : qe(t, e),
        ot(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (A = e,
                c = e.child; c !== null; ) {
                    for (d = A = c; A !== null; ) {
                        switch (f = A,
                        g = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Ar(4, f, f.return);
                            break;
                        case 1:
                            jn(f, f.return);
                            var y = f.stateNode;
                            if (typeof y.componentWillUnmount == "function") {
                                r = f,
                                n = f.return;
                                try {
                                    t = r,
                                    y.props = t.memoizedProps,
                                    y.state = t.memoizedState,
                                    y.componentWillUnmount()
                                } catch (v) {
                                    b(r, n, v)
                                }
                            }
                            break;
                        case 5:
                            jn(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                Cc(d);
                                continue
                            }
                        }
                        g !== null ? (g.return = f,
                        A = g) : Cc(d)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (c === null) {
                        c = d;
                        try {
                            i = d.stateNode,
                            u ? (o = i.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = d.stateNode,
                            a = d.memoizedProps.style,
                            s = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = vf("display", s))
                        } catch (v) {
                            b(e, e.return, v)
                        }
                    }
                } else if (d.tag === 6) {
                    if (c === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (v) {
                            b(e, e.return, v)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    c === d && (c = null),
                    d = d.return
                }
                c === d && (c = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        qe(t, e),
        ot(e),
        r & 4 && Pc(e);
        break;
    case 21:
        break;
    default:
        qe(t, e),
        ot(e)
    }
}
function ot(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Hh(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(k(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (Fr(i, ""),
                r.flags &= -33);
                var o = Tc(e);
                Al(e, o, i);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , l = Tc(e);
                Ll(e, l, s);
                break;
            default:
                throw Error(k(161))
            }
        } catch (a) {
            b(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function bg(e, t, n) {
    A = e,
    Qh(e)
}
function Qh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; A !== null; ) {
        var i = A
          , o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || Li;
            if (!s) {
                var l = i.alternate
                  , a = l !== null && l.memoizedState !== null || ye;
                l = Li;
                var u = ye;
                if (Li = s,
                (ye = a) && !u)
                    for (A = i; A !== null; )
                        s = A,
                        a = s.child,
                        s.tag === 22 && s.memoizedState !== null ? Ec(i) : a !== null ? (a.return = s,
                        A = a) : Ec(i);
                for (; o !== null; )
                    A = o,
                    Qh(o),
                    o = o.sibling;
                A = i,
                Li = l,
                ye = u
            }
            kc(e)
        } else
            i.subtreeFlags & 8772 && o !== null ? (o.return = i,
            A = o) : kc(e)
    }
}
function kc(e) {
    for (; A !== null; ) {
        var t = A;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ye || $o(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ye)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Je(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && ac(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            ac(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && $r(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(k(163))
                    }
                ye || t.flags & 512 && _l(t)
            } catch (f) {
                b(t, t.return, f)
            }
        }
        if (t === e) {
            A = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            A = n;
            break
        }
        A = t.return
    }
}
function Cc(e) {
    for (; A !== null; ) {
        var t = A;
        if (t === e) {
            A = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            A = n;
            break
        }
        A = t.return
    }
}
function Ec(e) {
    for (; A !== null; ) {
        var t = A;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    $o(4, t)
                } catch (a) {
                    b(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        b(t, i, a)
                    }
                }
                var o = t.return;
                try {
                    _l(t)
                } catch (a) {
                    b(t, o, a)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    _l(t)
                } catch (a) {
                    b(t, s, a)
                }
            }
        } catch (a) {
            b(t, t.return, a)
        }
        if (t === e) {
            A = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            A = l;
            break
        }
        A = t.return
    }
}
var ey = Math.ceil
  , xo = Lt.ReactCurrentDispatcher
  , ja = Lt.ReactCurrentOwner
  , Ye = Lt.ReactCurrentBatchConfig
  , I = 0
  , le = null
  , ne = null
  , fe = 0
  , je = 0
  , In = bt(0)
  , oe = 0
  , Jr = null
  , xn = 0
  , Uo = 0
  , Ia = 0
  , Nr = null
  , Ne = null
  , Fa = 0
  , er = 1 / 0
  , pt = null
  , wo = !1
  , Nl = null
  , Wt = null
  , Ai = !1
  , It = null
  , So = 0
  , Mr = 0
  , Ml = null
  , Gi = -1
  , Qi = 0;
function ke() {
    return I & 6 ? te() : Gi !== -1 ? Gi : Gi = te()
}
function Ht(e) {
    return e.mode & 1 ? I & 2 && fe !== 0 ? fe & -fe : Fg.transition !== null ? (Qi === 0 && (Qi = Mf()),
    Qi) : (e = B,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Of(e.type)),
    e) : 1
}
function nt(e, t, n, r) {
    if (50 < Mr)
        throw Mr = 0,
        Ml = null,
        Error(k(185));
    si(e, n, r),
    (!(I & 2) || e !== le) && (e === le && (!(I & 2) && (Uo |= n),
    oe === 4 && Vt(e, fe)),
    Ve(e, r),
    n === 1 && I === 0 && !(t.mode & 1) && (er = te() + 500,
    Oo && en()))
}
function Ve(e, t) {
    var n = e.callbackNode;
    F0(e, t);
    var r = ro(e, e === le ? fe : 0);
    if (r === 0)
        n !== null && ju(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && ju(n),
        t === 1)
            e.tag === 0 ? Ig(_c.bind(null, e)) : rh(_c.bind(null, e)),
            Dg(function() {
                !(I & 6) && en()
            }),
            n = null;
        else {
            switch (Df(r)) {
            case 1:
                n = ua;
                break;
            case 4:
                n = Af;
                break;
            case 16:
                n = no;
                break;
            case 536870912:
                n = Nf;
                break;
            default:
                n = no
            }
            n = tp(n, Yh.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Yh(e, t) {
    if (Gi = -1,
    Qi = 0,
    I & 6)
        throw Error(k(327));
    var n = e.callbackNode;
    if (Qn() && e.callbackNode !== n)
        return null;
    var r = ro(e, e === le ? fe : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = To(e, r);
    else {
        t = r;
        var i = I;
        I |= 2;
        var o = Zh();
        (le !== e || fe !== t) && (pt = null,
        er = te() + 500,
        fn(e, t));
        do
            try {
                ry();
                break
            } catch (l) {
                Xh(e, l)
            }
        while (!0);
        Ta(),
        xo.current = o,
        I = i,
        ne !== null ? t = 0 : (le = null,
        fe = 0,
        t = oe)
    }
    if (t !== 0) {
        if (t === 2 && (i = il(e),
        i !== 0 && (r = i,
        t = Dl(e, i))),
        t === 1)
            throw n = Jr,
            fn(e, 0),
            Vt(e, r),
            Ve(e, te()),
            n;
        if (t === 6)
            Vt(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !ty(i) && (t = To(e, r),
            t === 2 && (o = il(e),
            o !== 0 && (r = o,
            t = Dl(e, o))),
            t === 1))
                throw n = Jr,
                fn(e, 0),
                Vt(e, r),
                Ve(e, te()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(k(345));
            case 2:
                on(e, Ne, pt);
                break;
            case 3:
                if (Vt(e, r),
                (r & 130023424) === r && (t = Fa + 500 - te(),
                10 < t)) {
                    if (ro(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        ke(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = fl(on.bind(null, e, Ne, pt), t);
                    break
                }
                on(e, Ne, pt);
                break;
            case 4:
                if (Vt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var s = 31 - tt(r);
                    o = 1 << s,
                    s = t[s],
                    s > i && (i = s),
                    r &= ~o
                }
                if (r = i,
                r = te() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ey(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = fl(on.bind(null, e, Ne, pt), r);
                    break
                }
                on(e, Ne, pt);
                break;
            case 5:
                on(e, Ne, pt);
                break;
            default:
                throw Error(k(329))
            }
        }
    }
    return Ve(e, te()),
    e.callbackNode === n ? Yh.bind(null, e) : null
}
function Dl(e, t) {
    var n = Nr;
    return e.current.memoizedState.isDehydrated && (fn(e, t).flags |= 256),
    e = To(e, t),
    e !== 2 && (t = Ne,
    Ne = n,
    t !== null && Rl(t)),
    e
}
function Rl(e) {
    Ne === null ? Ne = e : Ne.push.apply(Ne, e)
}
function ty(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!rt(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Vt(e, t) {
    for (t &= ~Ia,
    t &= ~Uo,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - tt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function _c(e) {
    if (I & 6)
        throw Error(k(327));
    Qn();
    var t = ro(e, 0);
    if (!(t & 1))
        return Ve(e, te()),
        null;
    var n = To(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = il(e);
        r !== 0 && (t = r,
        n = Dl(e, r))
    }
    if (n === 1)
        throw n = Jr,
        fn(e, 0),
        Vt(e, t),
        Ve(e, te()),
        n;
    if (n === 6)
        throw Error(k(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    on(e, Ne, pt),
    Ve(e, te()),
    null
}
function Oa(e, t) {
    var n = I;
    I |= 1;
    try {
        return e(t)
    } finally {
        I = n,
        I === 0 && (er = te() + 500,
        Oo && en())
    }
}
function wn(e) {
    It !== null && It.tag === 0 && !(I & 6) && Qn();
    var t = I;
    I |= 1;
    var n = Ye.transition
      , r = B;
    try {
        if (Ye.transition = null,
        B = 1,
        e)
            return e()
    } finally {
        B = r,
        Ye.transition = n,
        I = t,
        !(I & 6) && en()
    }
}
function za() {
    je = In.current,
    Q(In)
}
function fn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Mg(n)),
    ne !== null)
        for (n = ne.return; n !== null; ) {
            var r = n;
            switch (xa(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && ao();
                break;
            case 3:
                Jn(),
                Q(De),
                Q(we),
                La();
                break;
            case 5:
                _a(r);
                break;
            case 4:
                Jn();
                break;
            case 13:
                Q(X);
                break;
            case 19:
                Q(X);
                break;
            case 10:
                Pa(r.type._context);
                break;
            case 22:
            case 23:
                za()
            }
            n = n.return
        }
    if (le = e,
    ne = e = Kt(e.current, null),
    fe = je = t,
    oe = 0,
    Jr = null,
    Ia = Uo = xn = 0,
    Ne = Nr = null,
    un !== null) {
        for (t = 0; t < un.length; t++)
            if (n = un[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i,
                    r.next = s
                }
                n.pending = r
            }
        un = null
    }
    return e
}
function Xh(e, t) {
    do {
        var n = ne;
        try {
            if (Ta(),
            Wi.current = vo,
            yo) {
                for (var r = q.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                yo = !1
            }
            if (vn = 0,
            se = ie = q = null,
            Lr = !1,
            Xr = 0,
            ja.current = null,
            n === null || n.return === null) {
                oe = 1,
                Jr = t,
                ne = null;
                break
            }
            e: {
                var o = e
                  , s = n.return
                  , l = n
                  , a = t;
                if (t = fe,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , c = l
                      , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue,
                        c.memoizedState = f.memoizedState,
                        c.lanes = f.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var g = pc(s);
                    if (g !== null) {
                        g.flags &= -257,
                        mc(g, s, l, o, t),
                        g.mode & 1 && hc(o, u, t),
                        t = g,
                        a = u;
                        var y = t.updateQueue;
                        if (y === null) {
                            var v = new Set;
                            v.add(a),
                            t.updateQueue = v
                        } else
                            y.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            hc(o, u, t),
                            Ba();
                            break e
                        }
                        a = Error(k(426))
                    }
                } else if (Y && l.mode & 1) {
                    var T = pc(s);
                    if (T !== null) {
                        !(T.flags & 65536) && (T.flags |= 256),
                        mc(T, s, l, o, t),
                        wa(bn(a, l));
                        break e
                    }
                }
                o = a = bn(a, l),
                oe !== 4 && (oe = 2),
                Nr === null ? Nr = [o] : Nr.push(o),
                o = s;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var p = Dh(o, a, t);
                        lc(o, p);
                        break e;
                    case 1:
                        l = a;
                        var h = o.type
                          , m = o.stateNode;
                        if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Wt === null || !Wt.has(m)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var x = Rh(o, l, t);
                            lc(o, x);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            Jh(n)
        } catch (P) {
            t = P,
            ne === n && n !== null && (ne = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Zh() {
    var e = xo.current;
    return xo.current = vo,
    e === null ? vo : e
}
function Ba() {
    (oe === 0 || oe === 3 || oe === 2) && (oe = 4),
    le === null || !(xn & 268435455) && !(Uo & 268435455) || Vt(le, fe)
}
function To(e, t) {
    var n = I;
    I |= 2;
    var r = Zh();
    (le !== e || fe !== t) && (pt = null,
    fn(e, t));
    do
        try {
            ny();
            break
        } catch (i) {
            Xh(e, i)
        }
    while (!0);
    if (Ta(),
    I = n,
    xo.current = r,
    ne !== null)
        throw Error(k(261));
    return le = null,
    fe = 0,
    oe
}
function ny() {
    for (; ne !== null; )
        qh(ne)
}
function ry() {
    for (; ne !== null && !L0(); )
        qh(ne)
}
function qh(e) {
    var t = ep(e.alternate, e, je);
    e.memoizedProps = e.pendingProps,
    t === null ? Jh(e) : ne = t,
    ja.current = null
}
function Jh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Zg(n, t),
            n !== null) {
                n.flags &= 32767,
                ne = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                oe = 6,
                ne = null;
                return
            }
        } else if (n = Xg(n, t, je),
        n !== null) {
            ne = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            ne = t;
            return
        }
        ne = t = e
    } while (t !== null);
    oe === 0 && (oe = 5)
}
function on(e, t, n) {
    var r = B
      , i = Ye.transition;
    try {
        Ye.transition = null,
        B = 1,
        iy(e, t, n, r)
    } finally {
        Ye.transition = i,
        B = r
    }
    return null
}
function iy(e, t, n, r) {
    do
        Qn();
    while (It !== null);
    if (I & 6)
        throw Error(k(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(k(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (O0(e, o),
    e === le && (ne = le = null,
    fe = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ai || (Ai = !0,
    tp(no, function() {
        return Qn(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = Ye.transition,
        Ye.transition = null;
        var s = B;
        B = 1;
        var l = I;
        I |= 4,
        ja.current = null,
        Jg(e, n),
        Gh(n, e),
        kg(cl),
        io = !!ul,
        cl = ul = null,
        e.current = n,
        bg(n),
        A0(),
        I = l,
        B = s,
        Ye.transition = o
    } else
        e.current = n;
    if (Ai && (Ai = !1,
    It = e,
    So = i),
    o = e.pendingLanes,
    o === 0 && (Wt = null),
    D0(n.stateNode),
    Ve(e, te()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (wo)
        throw wo = !1,
        e = Nl,
        Nl = null,
        e;
    return So & 1 && e.tag !== 0 && Qn(),
    o = e.pendingLanes,
    o & 1 ? e === Ml ? Mr++ : (Mr = 0,
    Ml = e) : Mr = 0,
    en(),
    null
}
function Qn() {
    if (It !== null) {
        var e = Df(So)
          , t = Ye.transition
          , n = B;
        try {
            if (Ye.transition = null,
            B = 16 > e ? 16 : e,
            It === null)
                var r = !1;
            else {
                if (e = It,
                It = null,
                So = 0,
                I & 6)
                    throw Error(k(331));
                var i = I;
                for (I |= 4,
                A = e.current; A !== null; ) {
                    var o = A
                      , s = o.child;
                    if (A.flags & 16) {
                        var l = o.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (A = u; A !== null; ) {
                                    var c = A;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ar(8, c, o)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                        A = d;
                                    else
                                        for (; A !== null; ) {
                                            c = A;
                                            var f = c.sibling
                                              , g = c.return;
                                            if (Wh(c),
                                            c === u) {
                                                A = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = g,
                                                A = f;
                                                break
                                            }
                                            A = g
                                        }
                                }
                            }
                            var y = o.alternate;
                            if (y !== null) {
                                var v = y.child;
                                if (v !== null) {
                                    y.child = null;
                                    do {
                                        var T = v.sibling;
                                        v.sibling = null,
                                        v = T
                                    } while (v !== null)
                                }
                            }
                            A = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null)
                        s.return = o,
                        A = s;
                    else
                        e: for (; A !== null; ) {
                            if (o = A,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ar(9, o, o.return)
                                }
                            var p = o.sibling;
                            if (p !== null) {
                                p.return = o.return,
                                A = p;
                                break e
                            }
                            A = o.return
                        }
                }
                var h = e.current;
                for (A = h; A !== null; ) {
                    s = A;
                    var m = s.child;
                    if (s.subtreeFlags & 2064 && m !== null)
                        m.return = s,
                        A = m;
                    else
                        e: for (s = h; A !== null; ) {
                            if (l = A,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        $o(9, l)
                                    }
                                } catch (P) {
                                    b(l, l.return, P)
                                }
                            if (l === s) {
                                A = null;
                                break e
                            }
                            var x = l.sibling;
                            if (x !== null) {
                                x.return = l.return,
                                A = x;
                                break e
                            }
                            A = l.return
                        }
                }
                if (I = i,
                en(),
                at && typeof at.onPostCommitFiberRoot == "function")
                    try {
                        at.onPostCommitFiberRoot(Ro, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            B = n,
            Ye.transition = t
        }
    }
    return !1
}
function Lc(e, t, n) {
    t = bn(n, t),
    t = Dh(e, t, 1),
    e = Ut(e, t, 1),
    t = ke(),
    e !== null && (si(e, 1, t),
    Ve(e, t))
}
function b(e, t, n) {
    if (e.tag === 3)
        Lc(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Lc(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Wt === null || !Wt.has(r))) {
                    e = bn(n, e),
                    e = Rh(t, e, 1),
                    t = Ut(t, e, 1),
                    e = ke(),
                    t !== null && (si(t, 1, e),
                    Ve(t, e));
                    break
                }
            }
            t = t.return
        }
}
function oy(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = ke(),
    e.pingedLanes |= e.suspendedLanes & n,
    le === e && (fe & n) === n && (oe === 4 || oe === 3 && (fe & 130023424) === fe && 500 > te() - Fa ? fn(e, 0) : Ia |= n),
    Ve(e, t)
}
function bh(e, t) {
    t === 0 && (e.mode & 1 ? (t = xi,
    xi <<= 1,
    !(xi & 130023424) && (xi = 4194304)) : t = 1);
    var n = ke();
    e = Et(e, t),
    e !== null && (si(e, t, n),
    Ve(e, n))
}
function sy(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    bh(e, n)
}
function ly(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(k(314))
    }
    r !== null && r.delete(t),
    bh(e, n)
}
var ep;
ep = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || De.current)
            Me = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Me = !1,
                Yg(e, t, n);
            Me = !!(e.flags & 131072)
        }
    else
        Me = !1,
        Y && t.flags & 1048576 && ih(t, fo, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Ki(e, t),
        e = t.pendingProps;
        var i = Xn(t, we.current);
        Gn(t, n),
        i = Na(null, t, r, e, i, n);
        var o = Ma();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Re(r) ? (o = !0,
        uo(t)) : o = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        Ca(t),
        i.updater = Bo,
        t.stateNode = i,
        i._reactInternals = t,
        xl(t, r, e, n),
        t = Tl(null, t, r, !0, o, n)) : (t.tag = 0,
        Y && o && va(t),
        Te(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Ki(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = uy(r),
            e = Je(r, e),
            i) {
            case 0:
                t = Sl(null, t, r, e, n);
                break e;
            case 1:
                t = vc(null, t, r, e, n);
                break e;
            case 11:
                t = gc(null, t, r, e, n);
                break e;
            case 14:
                t = yc(null, t, r, Je(r.type, e), n);
                break e
            }
            throw Error(k(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Je(r, i),
        Sl(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Je(r, i),
        vc(e, t, r, i, n);
    case 3:
        e: {
            if (Fh(t),
            e === null)
                throw Error(k(387));
            r = t.pendingProps,
            o = t.memoizedState,
            i = o.element,
            ch(e, t),
            mo(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    i = bn(Error(k(423)), t),
                    t = xc(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = bn(Error(k(424)), t),
                    t = xc(e, t, r, n, i);
                    break e
                } else
                    for (Ie = $t(t.stateNode.containerInfo.firstChild),
                    Oe = t,
                    Y = !0,
                    et = null,
                    n = ah(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Zn(),
                r === i) {
                    t = _t(e, t, n);
                    break e
                }
                Te(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return dh(t),
        e === null && gl(t),
        r = t.type,
        i = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        s = i.children,
        dl(r, i) ? s = null : o !== null && dl(r, o) && (t.flags |= 32),
        Ih(e, t),
        Te(e, t, s, n),
        t.child;
    case 6:
        return e === null && gl(t),
        null;
    case 13:
        return Oh(e, t, n);
    case 4:
        return Ea(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = qn(t, null, r, n) : Te(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Je(r, i),
        gc(e, t, r, i, n);
    case 7:
        return Te(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Te(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Te(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            o = t.memoizedProps,
            s = i.value,
            K(ho, r._currentValue),
            r._currentValue = s,
            o !== null)
                if (rt(o.value, s)) {
                    if (o.children === i.children && !De.current) {
                        t = _t(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var l = o.dependencies;
                        if (l !== null) {
                            s = o.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (o.tag === 1) {
                                        a = xt(-1, n & -n),
                                        a.tag = 2;
                                        var u = o.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? a.next = a : (a.next = c.next,
                                            c.next = a),
                                            u.pending = a
                                        }
                                    }
                                    o.lanes |= n,
                                    a = o.alternate,
                                    a !== null && (a.lanes |= n),
                                    yl(o.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (o.tag === 10)
                            s = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (s = o.return,
                            s === null)
                                throw Error(k(341));
                            s.lanes |= n,
                            l = s.alternate,
                            l !== null && (l.lanes |= n),
                            yl(s, n, t),
                            s = o.sibling
                        } else
                            s = o.child;
                        if (s !== null)
                            s.return = o;
                        else
                            for (s = o; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (o = s.sibling,
                                o !== null) {
                                    o.return = s.return,
                                    s = o;
                                    break
                                }
                                s = s.return
                            }
                        o = s
                    }
            Te(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        Gn(t, n),
        i = Xe(i),
        r = r(i),
        t.flags |= 1,
        Te(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = Je(r, t.pendingProps),
        i = Je(r.type, i),
        yc(e, t, r, i, n);
    case 15:
        return Vh(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Je(r, i),
        Ki(e, t),
        t.tag = 1,
        Re(r) ? (e = !0,
        uo(t)) : e = !1,
        Gn(t, n),
        Mh(t, r, i),
        xl(t, r, i, n),
        Tl(null, t, r, !0, e, n);
    case 19:
        return zh(e, t, n);
    case 22:
        return jh(e, t, n)
    }
    throw Error(k(156, t.tag))
}
;
function tp(e, t) {
    return Lf(e, t)
}
function ay(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Qe(e, t, n, r) {
    return new ay(e,t,n,r)
}
function $a(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function uy(e) {
    if (typeof e == "function")
        return $a(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === sa)
            return 11;
        if (e === la)
            return 14
    }
    return 2
}
function Kt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Qe(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Yi(e, t, n, r, i, o) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        $a(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case En:
            return hn(n.children, i, o, t);
        case oa:
            s = 8,
            i |= 8;
            break;
        case Ws:
            return e = Qe(12, n, t, i | 2),
            e.elementType = Ws,
            e.lanes = o,
            e;
        case Hs:
            return e = Qe(13, n, t, i),
            e.elementType = Hs,
            e.lanes = o,
            e;
        case Ks:
            return e = Qe(19, n, t, i),
            e.elementType = Ks,
            e.lanes = o,
            e;
        case df:
            return Wo(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case uf:
                    s = 10;
                    break e;
                case cf:
                    s = 9;
                    break e;
                case sa:
                    s = 11;
                    break e;
                case la:
                    s = 14;
                    break e;
                case Mt:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(k(130, e == null ? e : typeof e, ""))
        }
    return t = Qe(s, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function hn(e, t, n, r) {
    return e = Qe(7, e, r, t),
    e.lanes = n,
    e
}
function Wo(e, t, n, r) {
    return e = Qe(22, e, r, t),
    e.elementType = df,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Es(e, t, n) {
    return e = Qe(6, e, null, t),
    e.lanes = n,
    e
}
function _s(e, t, n) {
    return t = Qe(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function cy(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = ls(0),
    this.expirationTimes = ls(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = ls(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function Ua(e, t, n, r, i, o, s, l, a) {
    return e = new cy(e,t,n,l,a),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = Qe(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Ca(o),
    e
}
function dy(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Cn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function np(e) {
    if (!e)
        return Yt;
    e = e._reactInternals;
    e: {
        if (Tn(e) !== e || e.tag !== 1)
            throw Error(k(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Re(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(k(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Re(n))
            return nh(e, n, t)
    }
    return t
}
function rp(e, t, n, r, i, o, s, l, a) {
    return e = Ua(n, r, !0, e, i, o, s, l, a),
    e.context = np(null),
    n = e.current,
    r = ke(),
    i = Ht(n),
    o = xt(r, i),
    o.callback = t ?? null,
    Ut(n, o, i),
    e.current.lanes = i,
    si(e, i, r),
    Ve(e, r),
    e
}
function Ho(e, t, n, r) {
    var i = t.current
      , o = ke()
      , s = Ht(i);
    return n = np(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = xt(o, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Ut(i, t, s),
    e !== null && (nt(e, i, s, o),
    Ui(e, i, s)),
    s
}
function Po(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Ac(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Wa(e, t) {
    Ac(e, t),
    (e = e.alternate) && Ac(e, t)
}
function fy() {
    return null
}
var ip = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Ha(e) {
    this._internalRoot = e
}
Ko.prototype.render = Ha.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(k(409));
    Ho(e, t, null, null)
}
;
Ko.prototype.unmount = Ha.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        wn(function() {
            Ho(null, e, null, null)
        }),
        t[Ct] = null
    }
}
;
function Ko(e) {
    this._internalRoot = e
}
Ko.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = jf();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++)
            ;
        Rt.splice(n, 0, e),
        n === 0 && Ff(e)
    }
}
;
function Ka(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Go(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Nc() {}
function hy(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = Po(s);
                o.call(u)
            }
        }
        var s = rp(t, r, e, 0, null, !1, !1, "", Nc);
        return e._reactRootContainer = s,
        e[Ct] = s.current,
        Hr(e.nodeType === 8 ? e.parentNode : e),
        wn(),
        s
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = Po(a);
            l.call(u)
        }
    }
    var a = Ua(e, 0, !1, null, null, !1, !1, "", Nc);
    return e._reactRootContainer = a,
    e[Ct] = a.current,
    Hr(e.nodeType === 8 ? e.parentNode : e),
    wn(function() {
        Ho(t, a, n, r)
    }),
    a
}
function Qo(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var l = i;
            i = function() {
                var a = Po(s);
                l.call(a)
            }
        }
        Ho(t, s, e, i)
    } else
        s = hy(n, t, e, i, r);
    return Po(s)
}
Rf = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = xr(t.pendingLanes);
            n !== 0 && (ca(t, n | 1),
            Ve(t, te()),
            !(I & 6) && (er = te() + 500,
            en()))
        }
        break;
    case 13:
        wn(function() {
            var r = Et(e, 1);
            if (r !== null) {
                var i = ke();
                nt(r, e, 1, i)
            }
        }),
        Wa(e, 1)
    }
}
;
da = function(e) {
    if (e.tag === 13) {
        var t = Et(e, 134217728);
        if (t !== null) {
            var n = ke();
            nt(t, e, 134217728, n)
        }
        Wa(e, 134217728)
    }
}
;
Vf = function(e) {
    if (e.tag === 13) {
        var t = Ht(e)
          , n = Et(e, t);
        if (n !== null) {
            var r = ke();
            nt(n, e, t, r)
        }
        Wa(e, t)
    }
}
;
jf = function() {
    return B
}
;
If = function(e, t) {
    var n = B;
    try {
        return B = e,
        t()
    } finally {
        B = n
    }
}
;
tl = function(e, t, n) {
    switch (t) {
    case "input":
        if (Ys(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = Fo(r);
                    if (!i)
                        throw Error(k(90));
                    hf(r),
                    Ys(r, i)
                }
            }
        }
        break;
    case "textarea":
        mf(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Un(e, !!n.multiple, t, !1)
    }
}
;
Tf = Oa;
Pf = wn;
var py = {
    usingClientEntryPoint: !1,
    Events: [ai, Nn, Fo, wf, Sf, Oa]
}
  , mr = {
    findFiberByHostInstance: an,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , my = {
    bundleType: mr.bundleType,
    version: mr.version,
    rendererPackageName: mr.rendererPackageName,
    rendererConfig: mr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Lt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Ef(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: mr.findFiberByHostInstance || fy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ni.isDisabled && Ni.supportsFiber)
        try {
            Ro = Ni.inject(my),
            at = Ni
        } catch {}
}
$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = py;
$e.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ka(t))
        throw Error(k(200));
    return dy(e, t, null, n)
}
;
$e.createRoot = function(e, t) {
    if (!Ka(e))
        throw Error(k(299));
    var n = !1
      , r = ""
      , i = ip;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = Ua(e, 1, !1, null, null, n, !1, r, i),
    e[Ct] = t.current,
    Hr(e.nodeType === 8 ? e.parentNode : e),
    new Ha(t)
}
;
$e.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","),
        Error(k(268, e)));
    return e = Ef(t),
    e = e === null ? null : e.stateNode,
    e
}
;
$e.flushSync = function(e) {
    return wn(e)
}
;
$e.hydrate = function(e, t, n) {
    if (!Go(t))
        throw Error(k(200));
    return Qo(null, e, t, !0, n)
}
;
$e.hydrateRoot = function(e, t, n) {
    if (!Ka(e))
        throw Error(k(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , o = ""
      , s = ip;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = rp(t, null, e, 1, n ?? null, i, !1, o, s),
    e[Ct] = t.current,
    Hr(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Ko(t)
}
;
$e.render = function(e, t, n) {
    if (!Go(t))
        throw Error(k(200));
    return Qo(null, e, t, !1, n)
}
;
$e.unmountComponentAtNode = function(e) {
    if (!Go(e))
        throw Error(k(40));
    return e._reactRootContainer ? (wn(function() {
        Qo(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Ct] = null
        })
    }),
    !0) : !1
}
;
$e.unstable_batchedUpdates = Oa;
$e.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Go(n))
        throw Error(k(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(k(38));
    return Qo(e, t, n, !1, r)
}
;
$e.version = "18.3.1-next-f1338f8080-20240426";
function op() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(op)
        } catch (e) {
            console.error(e)
        }
}
op(),
of.exports = $e;
var gy = of.exports, sp, Mc = gy;
sp = Mc.createRoot,
Mc.hydrateRoot;
const yy = "/assets/logo-CfQex_Go.svg"
  , vy = "/assets/logo_dark-BlEproOr.svg"
  , xy = "data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_7625_1251)'%3e%3cpath%20d='M46.6175%200L25%2021.6902L3.38257%200L0.0722656%203.29969L21.7009%2025.0004L0.0722656%2046.7018L3.38257%2050L25%2028.3105L46.6175%2050L49.9278%2046.7018L28.2991%2025.0004L49.9278%203.29969L46.6175%200Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_7625_1251'%3e%3crect%20width='50'%20height='50'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
  , wy = "data:image/svg+xml,%3csvg%20width='36'%20height='29'%20viewBox='0%200%2036%2029'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='35.9988'%20height='4'%20rx='2'%20fill='white'/%3e%3crect%20x='13.0898'%20y='12.5'%20width='22.9083'%20height='4'%20rx='2'%20fill='white'/%3e%3crect%20x='4.91016'%20y='25'%20width='31.0899'%20height='4'%20rx='2'%20fill='white'/%3e%3c/svg%3e"
  , Sy = "data:image/svg+xml,%3csvg%20width='16'%20height='15'%20viewBox='0%200%2016%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.52447%200.463526C7.67415%200.0028708%208.32585%200.00286996%208.47553%200.463525L9.90837%204.87336C9.97531%205.07937%2010.1673%205.21885%2010.3839%205.21885H15.0207C15.505%205.21885%2015.7064%205.83865%2015.3146%206.12336L11.5633%208.84878C11.3881%208.9761%2011.3148%209.20179%2011.3817%209.4078L12.8145%2013.8176C12.9642%2014.2783%2012.437%2014.6613%2012.0451%2014.3766L8.29389%2011.6512C8.11865%2011.5239%207.88135%2011.5239%207.70611%2011.6512L3.95488%2014.3766C3.56303%2014.6613%203.03578%2014.2783%203.18546%2013.8176L4.6183%209.4078C4.68524%209.20179%204.61191%208.9761%204.43667%208.84878L0.685441%206.12336C0.293584%205.83866%200.494972%205.21885%200.979333%205.21885H5.6161C5.83272%205.21885%206.02469%205.07937%206.09163%204.87336L7.52447%200.463526Z'%20fill='%23FF532E'/%3e%3c/svg%3e"
  , Ty = "data:image/svg+xml,%3csvg%20width='9'%20height='14'%20viewBox='0%200%209%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%201L1%207L8%2013'%20stroke='%232563EB'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
  , Py = "data:image/svg+xml,%3csvg%20width='9'%20height='14'%20viewBox='0%200%209%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%201L8%207L1%2013'%20stroke='%232563EB'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
  , ky = "/assets/header_img-DRVN05CJ.png"
  , Cy = "/assets/brand_img-DEuaOSfY.png"
  , lp = "/assets/project_img_1-3elwKRsQ.jpg"
  , ap = "/assets/project_img_2-DnQUAazb.jpg"
  , up = "/assets/project_img_3-3sNYAKXT.jpg"
  , cp = "/assets/project_img_4-C5CE8mdZ.jpg"
  , Ey = "/assets/project_img_5-DXUdfqvc.jpg"
  , _y = "/assets/project_img_6-PJDGxfJF.jpg"
  , Ly = "/assets/profile_img_1-zaNAVS_M.png"
  , Ay = "/assets/profile_img_2-dUNED7vt.png"
  , Ny = "/assets/profile_img_3-JahKdPEp.png"
  , Gt = {
    logo: yy,
    logo_dark: vy,
    cross_icon: xy,
    menu_icon: wy,
    star_icon: Sy,
    header_img: ky,
    brand_img: Cy,
    project_img_1: lp,
    project_img_2: ap,
    project_img_3: up,
    project_img_4: cp,
    left_arrow: Ty,
    right_arrow: Py
}
  , Mi = [{
    title: "Skyline Haven",
    price: "$2,50,000",
    location: "California",
    image: lp
}, {
    title: "Vista Verde",
    price: "$2,50,000",
    location: "San Francisco",
    image: ap
}, {
    title: "Serenity Suites",
    price: "$2,50,000",
    location: "Chicago",
    image: up
}, {
    title: "Central Square",
    price: "$2,50,000",
    location: "Los Angeles",
    image: cp
}, {
    title: "Vista Verde",
    price: "$2,50,000",
    location: "San Francisco",
    image: Ey
}, {
    title: "Serenity Suites",
    price: "$2,50,000",
    location: "Chicago",
    image: _y
}]
  , My = [{
    name: "Donald Jackman",
    title: "Marketing Manager",
    image: Ly,
    alt: "Portrait of Donald Jackman",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
}, {
    name: "Richard Nelson",
    title: "UI/UX Designer",
    image: Ay,
    alt: "Portrait of Richard Nelson",
    rating: 4,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
}, {
    name: "James Washington",
    title: "Co-Founder",
    image: Ny,
    alt: "Portrait of James Washington",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
}]
  , Dy = () => {
    const [e,t] = L.useState(!1);
    return L.useEffect( () => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto",
    () => {
        document.body.style.overflow = "auto"
    }
    ), [e]),
    S.jsxs("div", {
        className: "absolute top-0 left-0 w-full z-10",
        children: [S.jsxs("div", {
            className: "container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent",
            children: [S.jsx("img", {
                src: Gt.logo,
                alt: ""
            }), S.jsxs("ul", {
                className: "hidden md:flex gap-7 text-white",
                children: [S.jsx("a", {
                    href: "#Header",
                    className: "cursor-pointer hover:text-gray-400",
                    children: "Home"
                }), S.jsx("a", {
                    href: "#About",
                    className: "cursor-pointer hover:text-gray-400",
                    children: "About"
                }), S.jsx("a", {
                    href: "#Projects",
                    className: "cursor-pointer hover:text-gray-400",
                    children: "Projects"
                }), S.jsx("a", {
                    href: "#Testimonials",
                    className: "cursor-pointer hover:text-gray-400",
                    children: "Testimonials"
                })]
            }), S.jsx("button", {
                className: "hidden md:block bg-white px-8 py-2 rounded-full",
                children: "Sign up"
            }), S.jsx("img", {
                onClick: () => t(!0),
                src: Gt.menu_icon,
                className: "md:hidden w-7 cursor-pointer",
                alt: ""
            })]
        }), S.jsxs("div", {
            className: `md:hidden ${e ? "fixed w-full" : "h-0 w-0"}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`,
            children: [S.jsx("div", {
                className: "flex justify-end p-6 cursor-pointer",
                children: S.jsx("img", {
                    onClick: () => t(!1),
                    src: Gt.cross_icon,
                    className: "w-6",
                    alt: ""
                })
            }), S.jsxs("ul", {
                className: "flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium",
                children: [S.jsx("a", {
                    onClick: () => t(!1),
                    href: "#Header",
                    className: "px-4 py2 rounded-full inline-block",
                    children: "Home"
                }), S.jsx("a", {
                    onClick: () => t(!1),
                    href: "#About",
                    className: "px-4 py2 rounded-full inline-block",
                    children: "About"
                }), S.jsx("a", {
                    onClick: () => t(!1),
                    href: "#Projects",
                    className: "px-4 py2 rounded-full inline-block",
                    children: "Projects"
                }), S.jsx("a", {
                    onClick: () => t(!1),
                    href: "#Testimonails",
                    className: "px-4 py2 rounded-full inline-block",
                    children: "Testimonails"
                })]
            })]
        })]
    })
}
;
function Ry(e) {
    if (typeof Proxy > "u")
        return e;
    const t = new Map
      , n = (...r) => e(...r);
    return new Proxy(n,{
        get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)),
        t.get(i))
    })
}
function Yo(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const Vl = e => Array.isArray(e);
function dp(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function br(e) {
    return typeof e == "string" || Array.isArray(e)
}
function Dc(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach( (n, r) => {
        t[0][r] = n.get(),
        t[1][r] = n.getVelocity()
    }
    ),
    t
}
function Ga(e, t, n, r) {
    if (typeof t == "function") {
        const [i,o] = Dc(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
        const [i,o] = Dc(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    return t
}
function Xo(e, t, n) {
    const r = e.getProps();
    return Ga(r, t, n !== void 0 ? n : r.custom, e)
}
const Qa = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Ya = ["initial", ...Qa]
  , ci = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , Pn = new Set(ci)
  , wt = e => e * 1e3
  , St = e => e / 1e3
  , Vy = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , jy = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , Iy = {
    type: "keyframes",
    duration: .8
}
  , Fy = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , Oy = (e, {keyframes: t}) => t.length > 2 ? Iy : Pn.has(e) ? e.startsWith("scale") ? jy(t[1]) : Vy : Fy;
function Xa(e, t) {
    return e ? e[t] || e.default || e : void 0
}
const zy = {
    skipAnimations: !1,
    useManualTiming: !1
}
  , By = e => e !== null;
function Zo(e, {repeat: t, repeatType: n="loop"}, r) {
    const i = e.filter(By)
      , o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !o || r === void 0 ? i[o] : r
}
const xe = e => e;
function $y(e) {
    let t = new Set
      , n = new Set
      , r = !1
      , i = !1;
    const o = new WeakSet;
    let s = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function l(u) {
        o.has(u) && (a.schedule(u),
        e()),
        u(s)
    }
    const a = {
        schedule: (u, c=!1, d=!1) => {
            const g = d && r ? t : n;
            return c && o.add(u),
            g.has(u) || g.add(u),
            u
        }
        ,
        cancel: u => {
            n.delete(u),
            o.delete(u)
        }
        ,
        process: u => {
            if (s = u,
            r) {
                i = !0;
                return
            }
            r = !0,
            [t,n] = [n, t],
            n.clear(),
            t.forEach(l),
            r = !1,
            i && (i = !1,
            a.process(u))
        }
    };
    return a
}
const Di = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , Uy = 40;
function fp(e, t) {
    let n = !1
      , r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , o = () => n = !0
      , s = Di.reduce( (p, h) => (p[h] = $y(o),
    p), {})
      , {read: l, resolveKeyframes: a, update: u, preRender: c, render: d, postRender: f} = s
      , g = () => {
        const p = performance.now();
        n = !1,
        i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, Uy), 1),
        i.timestamp = p,
        i.isProcessing = !0,
        l.process(i),
        a.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        i.isProcessing = !1,
        n && t && (r = !1,
        e(g))
    }
      , y = () => {
        n = !0,
        r = !0,
        i.isProcessing || e(g)
    }
    ;
    return {
        schedule: Di.reduce( (p, h) => {
            const m = s[h];
            return p[h] = (x, P=!1, C=!1) => (n || y(),
            m.schedule(x, P, C)),
            p
        }
        , {}),
        cancel: p => {
            for (let h = 0; h < Di.length; h++)
                s[Di[h]].cancel(p)
        }
        ,
        state: i,
        steps: s
    }
}
const {schedule: W, cancel: Xt, state: de, steps: Ls} = fp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : xe, !0)
  , hp = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , Wy = 1e-7
  , Hy = 12;
function Ky(e, t, n, r, i) {
    let o, s, l = 0;
    do
        s = t + (n - t) / 2,
        o = hp(s, r, i) - e,
        o > 0 ? n = s : t = s;
    while (Math.abs(o) > Wy && ++l < Hy);
    return s
}
function di(e, t, n, r) {
    if (e === t && n === r)
        return xe;
    const i = o => Ky(o, 0, 1, e, n);
    return o => o === 0 || o === 1 ? o : hp(i(o), t, r)
}
const pp = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , mp = e => t => 1 - e(1 - t)
  , gp = di(.33, 1.53, .69, .99)
  , Za = mp(gp)
  , yp = pp(Za)
  , vp = e => (e *= 2) < 1 ? .5 * Za(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , qa = e => 1 - Math.sin(Math.acos(e))
  , xp = mp(qa)
  , wp = pp(qa)
  , Sp = e => /^0[^.\s]+$/u.test(e);
function Gy(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Sp(e) : !0
}
let jl = xe;
const Tp = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
  , Pp = e => t => typeof t == "string" && t.startsWith(e)
  , kp = Pp("--")
  , Qy = Pp("var(--")
  , Ja = e => Qy(e) ? Yy.test(e.split("/*")[0].trim()) : !1
  , Yy = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , Xy = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Zy(e) {
    const t = Xy.exec(e);
    if (!t)
        return [, ];
    const [,n,r,i] = t;
    return [`--${n ?? r}`, i]
}
function Cp(e, t, n=1) {
    const [r,i] = Zy(e);
    if (!r)
        return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    if (o) {
        const s = o.trim();
        return Tp(s) ? parseFloat(s) : s
    }
    return Ja(i) ? Cp(i, t, n + 1) : i
}
const Zt = (e, t, n) => n > t ? t : n < e ? e : n
  , lr = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , ei = {
    ...lr,
    transform: e => Zt(0, 1, e)
}
  , Ri = {
    ...lr,
    default: 1
}
  , fi = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , Nt = fi("deg")
  , ct = fi("%")
  , R = fi("px")
  , qy = fi("vh")
  , Jy = fi("vw")
  , Rc = {
    ...ct,
    parse: e => ct.parse(e) / 100,
    transform: e => ct.transform(e * 100)
}
  , by = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , Vc = e => e === lr || e === R
  , jc = (e, t) => parseFloat(e.split(", ")[t])
  , Ic = (e, t) => (n, {transform: r}) => {
    if (r === "none" || !r)
        return 0;
    const i = r.match(/^matrix3d\((.+)\)$/u);
    if (i)
        return jc(i[1], t);
    {
        const o = r.match(/^matrix\((.+)\)$/u);
        return o ? jc(o[1], e) : 0
    }
}
  , ev = new Set(["x", "y", "z"])
  , tv = ci.filter(e => !ev.has(e));
function nv(e) {
    const t = [];
    return tv.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
const tr = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: Ic(4, 13),
    y: Ic(5, 14)
};
tr.translateX = tr.x;
tr.translateY = tr.y;
const Ep = e => t => t.test(e)
  , rv = {
    test: e => e === "auto",
    parse: e => e
}
  , _p = [lr, R, ct, Nt, Jy, qy, rv]
  , Fc = e => _p.find(Ep(e))
  , pn = new Set;
let Il = !1
  , Fl = !1;
function Lp() {
    if (Fl) {
        const e = Array.from(pn).filter(r => r.needsMeasurement)
          , t = new Set(e.map(r => r.element))
          , n = new Map;
        t.forEach(r => {
            const i = nv(r);
            i.length && (n.set(r, i),
            r.render())
        }
        ),
        e.forEach(r => r.measureInitialState()),
        t.forEach(r => {
            r.render();
            const i = n.get(r);
            i && i.forEach( ([o,s]) => {
                var l;
                (l = r.getValue(o)) === null || l === void 0 || l.set(s)
            }
            )
        }
        ),
        e.forEach(r => r.measureEndState()),
        e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    Fl = !1,
    Il = !1,
    pn.forEach(e => e.complete()),
    pn.clear()
}
function Ap() {
    pn.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (Fl = !0)
    }
    )
}
function iv() {
    Ap(),
    Lp()
}
class ba {
    constructor(t, n, r, i, o, s=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = n,
        this.name = r,
        this.motionValue = i,
        this.element = o,
        this.isAsync = s
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (pn.add(this),
        Il || (Il = !0,
        W.read(Ap),
        W.resolveKeyframes(Lp))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: n, element: r, motionValue: i} = this;
        for (let o = 0; o < t.length; o++)
            if (t[o] === null)
                if (o === 0) {
                    const s = i == null ? void 0 : i.get()
                      , l = t[t.length - 1];
                    if (s !== void 0)
                        t[0] = s;
                    else if (r && n) {
                        const a = r.readValue(n, l);
                        a != null && (t[0] = a)
                    }
                    t[0] === void 0 && (t[0] = l),
                    i && s === void 0 && i.set(t[0])
                } else
                    t[o] = t[o - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        pn.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        pn.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Dr = e => Math.round(e * 1e5) / 1e5
  , eu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function ov(e) {
    return e == null
}
const sv = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , tu = (e, t) => n => !!(typeof n == "string" && sv.test(n) && n.startsWith(e) || t && !ov(n) && Object.prototype.hasOwnProperty.call(n, t))
  , Np = (e, t, n) => r => {
    if (typeof r != "string")
        return r;
    const [i,o,s,l] = r.match(eu);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(o),
        [n]: parseFloat(s),
        alpha: l !== void 0 ? parseFloat(l) : 1
    }
}
  , lv = e => Zt(0, 255, e)
  , As = {
    ...lr,
    transform: e => Math.round(lv(e))
}
  , dn = {
    test: tu("rgb", "red"),
    parse: Np("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + As.transform(e) + ", " + As.transform(t) + ", " + As.transform(n) + ", " + Dr(ei.transform(r)) + ")"
};
function av(e) {
    let t = ""
      , n = ""
      , r = ""
      , i = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    i = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    i = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Ol = {
    test: tu("#"),
    parse: av,
    transform: dn.transform
}
  , Fn = {
    test: tu("hsl", "hue"),
    parse: Np("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + ct.transform(Dr(t)) + ", " + ct.transform(Dr(n)) + ", " + Dr(ei.transform(r)) + ")"
}
  , ge = {
    test: e => dn.test(e) || Ol.test(e) || Fn.test(e),
    parse: e => dn.test(e) ? dn.parse(e) : Fn.test(e) ? Fn.parse(e) : Ol.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? dn.transform(e) : Fn.transform(e)
}
  , uv = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function cv(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(eu)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(uv)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Mp = "number"
  , Dp = "color"
  , dv = "var"
  , fv = "var("
  , Oc = "${}"
  , hv = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ti(e) {
    const t = e.toString()
      , n = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , i = [];
    let o = 0;
    const l = t.replace(hv, a => (ge.test(a) ? (r.color.push(o),
    i.push(Dp),
    n.push(ge.parse(a))) : a.startsWith(fv) ? (r.var.push(o),
    i.push(dv),
    n.push(a)) : (r.number.push(o),
    i.push(Mp),
    n.push(parseFloat(a))),
    ++o,
    Oc)).split(Oc);
    return {
        values: n,
        split: l,
        indexes: r,
        types: i
    }
}
function Rp(e) {
    return ti(e).values
}
function Vp(e) {
    const {split: t, types: n} = ti(e)
      , r = t.length;
    return i => {
        let o = "";
        for (let s = 0; s < r; s++)
            if (o += t[s],
            i[s] !== void 0) {
                const l = n[s];
                l === Mp ? o += Dr(i[s]) : l === Dp ? o += ge.transform(i[s]) : o += i[s]
            }
        return o
    }
}
const pv = e => typeof e == "number" ? 0 : e;
function mv(e) {
    const t = Rp(e);
    return Vp(e)(t.map(pv))
}
const qt = {
    test: cv,
    parse: Rp,
    createTransformer: Vp,
    getAnimatableNone: mv
}
  , gv = new Set(["brightness", "contrast", "saturate", "opacity"]);
function yv(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(eu) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let o = gv.has(t) ? 1 : 0;
    return r !== n && (o *= 100),
    t + "(" + o + i + ")"
}
const vv = /\b([a-z-]*)\(.*?\)/gu
  , zl = {
    ...qt,
    getAnimatableNone: e => {
        const t = e.match(vv);
        return t ? t.map(yv).join(" ") : e
    }
}
  , xv = {
    borderWidth: R,
    borderTopWidth: R,
    borderRightWidth: R,
    borderBottomWidth: R,
    borderLeftWidth: R,
    borderRadius: R,
    radius: R,
    borderTopLeftRadius: R,
    borderTopRightRadius: R,
    borderBottomRightRadius: R,
    borderBottomLeftRadius: R,
    width: R,
    maxWidth: R,
    height: R,
    maxHeight: R,
    top: R,
    right: R,
    bottom: R,
    left: R,
    padding: R,
    paddingTop: R,
    paddingRight: R,
    paddingBottom: R,
    paddingLeft: R,
    margin: R,
    marginTop: R,
    marginRight: R,
    marginBottom: R,
    marginLeft: R,
    backgroundPositionX: R,
    backgroundPositionY: R
}
  , wv = {
    rotate: Nt,
    rotateX: Nt,
    rotateY: Nt,
    rotateZ: Nt,
    scale: Ri,
    scaleX: Ri,
    scaleY: Ri,
    scaleZ: Ri,
    skew: Nt,
    skewX: Nt,
    skewY: Nt,
    distance: R,
    translateX: R,
    translateY: R,
    translateZ: R,
    x: R,
    y: R,
    z: R,
    perspective: R,
    transformPerspective: R,
    opacity: ei,
    originX: Rc,
    originY: Rc,
    originZ: R
}
  , zc = {
    ...lr,
    transform: Math.round
}
  , nu = {
    ...xv,
    ...wv,
    zIndex: zc,
    size: R,
    fillOpacity: ei,
    strokeOpacity: ei,
    numOctaves: zc
}
  , Sv = {
    ...nu,
    color: ge,
    backgroundColor: ge,
    outlineColor: ge,
    fill: ge,
    stroke: ge,
    borderColor: ge,
    borderTopColor: ge,
    borderRightColor: ge,
    borderBottomColor: ge,
    borderLeftColor: ge,
    filter: zl,
    WebkitFilter: zl
}
  , ru = e => Sv[e];
function jp(e, t) {
    let n = ru(e);
    return n !== zl && (n = qt),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const Tv = new Set(["auto", "none", "0"]);
function Pv(e, t, n) {
    let r = 0, i;
    for (; r < e.length && !i; ) {
        const o = e[r];
        typeof o == "string" && !Tv.has(o) && ti(o).values.length && (i = e[r]),
        r++
    }
    if (i && n)
        for (const o of t)
            e[o] = jp(n, i)
}
class Ip extends ba {
    constructor(t, n, r, i, o) {
        super(t, n, r, i, o, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: n, name: r} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let a = 0; a < t.length; a++) {
            let u = t[a];
            if (typeof u == "string" && (u = u.trim(),
            Ja(u))) {
                const c = Cp(u, n.current);
                c !== void 0 && (t[a] = c),
                a === t.length - 1 && (this.finalKeyframe = u)
            }
        }
        if (this.resolveNoneKeyframes(),
        !by.has(r) || t.length !== 2)
            return;
        const [i,o] = t
          , s = Fc(i)
          , l = Fc(o);
        if (s !== l)
            if (Vc(s) && Vc(l))
                for (let a = 0; a < t.length; a++) {
                    const u = t[a];
                    typeof u == "string" && (t[a] = parseFloat(u))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: n} = this
          , r = [];
        for (let i = 0; i < t.length; i++)
            Gy(t[i]) && r.push(i);
        r.length && Pv(t, r, n)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: n, name: r} = this;
        if (!t || !t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = tr[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
        n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var t;
        const {element: n, name: r, unresolvedKeyframes: i} = this;
        if (!n || !n.current)
            return;
        const o = n.getValue(r);
        o && o.jump(this.measuredOrigin, !1);
        const s = i.length - 1
          , l = i[s];
        i[s] = tr[r](n.measureViewportBox(), window.getComputedStyle(n.current)),
        l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
        !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach( ([a,u]) => {
            n.getValue(a).set(u)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function iu(e) {
    return typeof e == "function"
}
let Xi;
function kv() {
    Xi = void 0
}
const dt = {
    now: () => (Xi === void 0 && dt.set(de.isProcessing || zy.useManualTiming ? de.timestamp : performance.now()),
    Xi),
    set: e => {
        Xi = e,
        queueMicrotask(kv)
    }
}
  , Bc = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (qt.test(e) || e === "0") && !e.startsWith("url("));
function Cv(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function Ev(e, t, n, r) {
    const i = e[0];
    if (i === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const o = e[e.length - 1]
      , s = Bc(i, t)
      , l = Bc(o, t);
    return !s || !l ? !1 : Cv(e) || (n === "spring" || iu(n)) && r
}
const _v = 40;
class Fp {
    constructor({autoplay: t=!0, delay: n=0, type: r="keyframes", repeat: i=0, repeatDelay: o=0, repeatType: s="loop", ...l}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = dt.now(),
        this.options = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: o,
            repeatType: s,
            ...l
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > _v ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && iv(),
        this._resolved
    }
    onKeyframesResolved(t, n) {
        this.resolvedAt = dt.now(),
        this.hasAttemptedResolve = !0;
        const {name: r, type: i, velocity: o, delay: s, onComplete: l, onUpdate: a, isGenerator: u} = this.options;
        if (!u && !Ev(t, r, i, o))
            if (s)
                this.options.duration = 0;
            else {
                a == null || a(Zo(t, this.options, n)),
                l == null || l(),
                this.resolveFinishedPromise();
                return
            }
        const c = this.initPlayback(t, n);
        c !== !1 && (this._resolved = {
            keyframes: t,
            finalKeyframe: n,
            ...c
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(t, n) {
        return this.currentFinishedPromise.then(t, n)
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t => {
            this.resolveFinishedPromise = t
        }
        )
    }
}
function Op(e, t) {
    return t ? e * (1e3 / t) : 0
}
const Lv = 5;
function zp(e, t, n) {
    const r = Math.max(t - Lv, 0);
    return Op(n - e(r), t - r)
}
const Ns = .001
  , Av = .01
  , Nv = 10
  , Mv = .05
  , Dv = 1;
function Rv({duration: e=800, bounce: t=.25, velocity: n=0, mass: r=1}) {
    let i, o, s = 1 - t;
    s = Zt(Mv, Dv, s),
    e = Zt(Av, Nv, St(e)),
    s < 1 ? (i = u => {
        const c = u * s
          , d = c * e
          , f = c - n
          , g = Bl(u, s)
          , y = Math.exp(-d);
        return Ns - f / g * y
    }
    ,
    o = u => {
        const d = u * s * e
          , f = d * n + n
          , g = Math.pow(s, 2) * Math.pow(u, 2) * e
          , y = Math.exp(-d)
          , v = Bl(Math.pow(u, 2), s);
        return (-i(u) + Ns > 0 ? -1 : 1) * ((f - g) * y) / v
    }
    ) : (i = u => {
        const c = Math.exp(-u * e)
          , d = (u - n) * e + 1;
        return -Ns + c * d
    }
    ,
    o = u => {
        const c = Math.exp(-u * e)
          , d = (n - u) * (e * e);
        return c * d
    }
    );
    const l = 5 / e
      , a = jv(i, o, l);
    if (e = wt(e),
    isNaN(a))
        return {
            stiffness: 100,
            damping: 10,
            duration: e
        };
    {
        const u = Math.pow(a, 2) * r;
        return {
            stiffness: u,
            damping: s * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const Vv = 12;
function jv(e, t, n) {
    let r = n;
    for (let i = 1; i < Vv; i++)
        r = r - e(r) / t(r);
    return r
}
function Bl(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const Iv = ["duration", "bounce"]
  , Fv = ["stiffness", "damping", "mass"];
function $c(e, t) {
    return t.some(n => e[n] !== void 0)
}
function Ov(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!$c(e, Fv) && $c(e, Iv)) {
        const n = Rv(e);
        t = {
            ...t,
            ...n,
            mass: 1
        },
        t.isResolvedFromDuration = !0
    }
    return t
}
function Bp({keyframes: e, restDelta: t, restSpeed: n, ...r}) {
    const i = e[0]
      , o = e[e.length - 1]
      , s = {
        done: !1,
        value: i
    }
      , {stiffness: l, damping: a, mass: u, duration: c, velocity: d, isResolvedFromDuration: f} = Ov({
        ...r,
        velocity: -St(r.velocity || 0)
    })
      , g = d || 0
      , y = a / (2 * Math.sqrt(l * u))
      , v = o - i
      , T = St(Math.sqrt(l / u))
      , p = Math.abs(v) < 5;
    n || (n = p ? .01 : 2),
    t || (t = p ? .005 : .5);
    let h;
    if (y < 1) {
        const m = Bl(T, y);
        h = x => {
            const P = Math.exp(-y * T * x);
            return o - P * ((g + y * T * v) / m * Math.sin(m * x) + v * Math.cos(m * x))
        }
    } else if (y === 1)
        h = m => o - Math.exp(-T * m) * (v + (g + T * v) * m);
    else {
        const m = T * Math.sqrt(y * y - 1);
        h = x => {
            const P = Math.exp(-y * T * x)
              , C = Math.min(m * x, 300);
            return o - P * ((g + y * T * v) * Math.sinh(C) + m * v * Math.cosh(C)) / m
        }
    }
    return {
        calculatedDuration: f && c || null,
        next: m => {
            const x = h(m);
            if (f)
                s.done = m >= c;
            else {
                let P = 0;
                y < 1 && (P = m === 0 ? wt(g) : zp(h, m, x));
                const C = Math.abs(P) <= n
                  , E = Math.abs(o - x) <= t;
                s.done = C && E
            }
            return s.value = s.done ? o : x,
            s
        }
    }
}
function Uc({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: o=500, modifyTarget: s, min: l, max: a, restDelta: u=.5, restSpeed: c}) {
    const d = e[0]
      , f = {
        done: !1,
        value: d
    }
      , g = w => l !== void 0 && w < l || a !== void 0 && w > a
      , y = w => l === void 0 ? a : a === void 0 || Math.abs(l - w) < Math.abs(a - w) ? l : a;
    let v = n * t;
    const T = d + v
      , p = s === void 0 ? T : s(T);
    p !== T && (v = p - d);
    const h = w => -v * Math.exp(-w / r)
      , m = w => p + h(w)
      , x = w => {
        const M = h(w)
          , N = m(w);
        f.done = Math.abs(M) <= u,
        f.value = f.done ? p : N
    }
    ;
    let P, C;
    const E = w => {
        g(f.value) && (P = w,
        C = Bp({
            keyframes: [f.value, y(f.value)],
            velocity: zp(m, w, f.value),
            damping: i,
            stiffness: o,
            restDelta: u,
            restSpeed: c
        }))
    }
    ;
    return E(0),
    {
        calculatedDuration: null,
        next: w => {
            let M = !1;
            return !C && P === void 0 && (M = !0,
            x(w),
            E(w)),
            P !== void 0 && w >= P ? C.next(w - P) : (!M && x(w),
            f)
        }
    }
}
const zv = di(.42, 0, 1, 1)
  , Bv = di(0, 0, .58, 1)
  , $p = di(.42, 0, .58, 1)
  , $v = e => Array.isArray(e) && typeof e[0] != "number"
  , ou = e => Array.isArray(e) && typeof e[0] == "number"
  , Wc = {
    linear: xe,
    easeIn: zv,
    easeInOut: $p,
    easeOut: Bv,
    circIn: qa,
    circInOut: wp,
    circOut: xp,
    backIn: Za,
    backInOut: yp,
    backOut: gp,
    anticipate: vp
}
  , Hc = e => {
    if (ou(e)) {
        jl(e.length === 4);
        const [t,n,r,i] = e;
        return di(t, n, r, i)
    } else if (typeof e == "string")
        return jl(Wc[e] !== void 0),
        Wc[e];
    return e
}
  , Uv = (e, t) => n => t(e(n))
  , Tt = (...e) => e.reduce(Uv)
  , nr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , Z = (e, t, n) => e + (t - e) * n;
function Ms(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function Wv({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let i = 0
      , o = 0
      , s = 0;
    if (!t)
        i = o = s = n;
    else {
        const l = n < .5 ? n * (1 + t) : n + t - n * t
          , a = 2 * n - l;
        i = Ms(a, l, e + 1 / 3),
        o = Ms(a, l, e),
        s = Ms(a, l, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
function ko(e, t) {
    return n => n > 0 ? t : e
}
const Ds = (e, t, n) => {
    const r = e * e
      , i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i)
}
  , Hv = [Ol, dn, Fn]
  , Kv = e => Hv.find(t => t.test(e));
function Kc(e) {
    const t = Kv(e);
    if (!t)
        return !1;
    let n = t.parse(e);
    return t === Fn && (n = Wv(n)),
    n
}
const Gc = (e, t) => {
    const n = Kc(e)
      , r = Kc(t);
    if (!n || !r)
        return ko(e, t);
    const i = {
        ...n
    };
    return o => (i.red = Ds(n.red, r.red, o),
    i.green = Ds(n.green, r.green, o),
    i.blue = Ds(n.blue, r.blue, o),
    i.alpha = Z(n.alpha, r.alpha, o),
    dn.transform(i))
}
  , $l = new Set(["none", "hidden"]);
function Gv(e, t) {
    return $l.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function Qv(e, t) {
    return n => Z(e, t, n)
}
function su(e) {
    return typeof e == "number" ? Qv : typeof e == "string" ? Ja(e) ? ko : ge.test(e) ? Gc : Zv : Array.isArray(e) ? Up : typeof e == "object" ? ge.test(e) ? Gc : Yv : ko
}
function Up(e, t) {
    const n = [...e]
      , r = n.length
      , i = e.map( (o, s) => su(o)(o, t[s]));
    return o => {
        for (let s = 0; s < r; s++)
            n[s] = i[s](o);
        return n
    }
}
function Yv(e, t) {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = su(e[i])(e[i], t[i]));
    return i => {
        for (const o in r)
            n[o] = r[o](i);
        return n
    }
}
function Xv(e, t) {
    var n;
    const r = []
      , i = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let o = 0; o < t.values.length; o++) {
        const s = t.types[o]
          , l = e.indexes[s][i[s]]
          , a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
        r[o] = a,
        i[s]++
    }
    return r
}
const Zv = (e, t) => {
    const n = qt.createTransformer(t)
      , r = ti(e)
      , i = ti(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? $l.has(e) && !i.values.length || $l.has(t) && !r.values.length ? Gv(e, t) : Tt(Up(Xv(r, i), i.values), n) : ko(e, t)
}
;
function Wp(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Z(e, t, n) : su(e)(e, t)
}
function qv(e, t, n) {
    const r = []
      , i = n || Wp
      , o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let l = i(e[s], e[s + 1]);
        if (t) {
            const a = Array.isArray(t) ? t[s] || xe : t;
            l = Tt(a, l)
        }
        r.push(l)
    }
    return r
}
function Jv(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const o = e.length;
    if (jl(o === t.length),
    o === 1)
        return () => t[0];
    if (o === 2 && e[0] === e[1])
        return () => t[1];
    e[0] > e[o - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const s = qv(t, r, i)
      , l = s.length
      , a = u => {
        let c = 0;
        if (l > 1)
            for (; c < e.length - 2 && !(u < e[c + 1]); c++)
                ;
        const d = nr(e[c], e[c + 1], u);
        return s[c](d)
    }
    ;
    return n ? u => a(Zt(e[0], e[o - 1], u)) : a
}
function bv(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = nr(0, t, r);
        e.push(Z(n, 1, i))
    }
}
function e1(e) {
    const t = [0];
    return bv(t, e.length - 1),
    t
}
function t1(e, t) {
    return e.map(n => n * t)
}
function n1(e, t) {
    return e.map( () => t || $p).splice(0, e.length - 1)
}
function Co({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const i = $v(r) ? r.map(Hc) : Hc(r)
      , o = {
        done: !1,
        value: t[0]
    }
      , s = t1(n && n.length === t.length ? n : e1(t), e)
      , l = Jv(s, t, {
        ease: Array.isArray(i) ? i : n1(t, i)
    });
    return {
        calculatedDuration: e,
        next: a => (o.value = l(a),
        o.done = a >= e,
        o)
    }
}
const Qc = 2e4;
function r1(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Qc; )
        t += n,
        r = e.next(t);
    return t >= Qc ? 1 / 0 : t
}
const i1 = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: () => W.update(t, !0),
        stop: () => Xt(t),
        now: () => de.isProcessing ? de.timestamp : dt.now()
    }
}
  , o1 = {
    decay: Uc,
    inertia: Uc,
    tween: Co,
    keyframes: Co,
    spring: Bp
}
  , s1 = e => e / 100;
class lu extends Fp {
    constructor(t) {
        super(t),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = () => {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: a} = this.options;
            a && a()
        }
        ;
        const {name: n, motionValue: r, element: i, keyframes: o} = this.options
          , s = (i == null ? void 0 : i.KeyframeResolver) || ba
          , l = (a, u) => this.onKeyframesResolved(a, u);
        this.resolver = new s(o,l,n,r,i),
        this.resolver.scheduleResolve()
    }
    initPlayback(t) {
        const {type: n="keyframes", repeat: r=0, repeatDelay: i=0, repeatType: o, velocity: s=0} = this.options
          , l = iu(n) ? n : o1[n] || Co;
        let a, u;
        l !== Co && typeof t[0] != "number" && (a = Tt(s1, Wp(t[0], t[1])),
        t = [0, 100]);
        const c = l({
            ...this.options,
            keyframes: t
        });
        o === "mirror" && (u = l({
            ...this.options,
            keyframes: [...t].reverse(),
            velocity: -s
        })),
        c.calculatedDuration === null && (c.calculatedDuration = r1(c));
        const {calculatedDuration: d} = c
          , f = d + i
          , g = f * (r + 1) - i;
        return {
            generator: c,
            mirroredGenerator: u,
            mapPercentToKeyframes: a,
            calculatedDuration: d,
            resolvedDuration: f,
            totalDuration: g
        }
    }
    onPostResolved() {
        const {autoplay: t=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
    }
    tick(t, n=!1) {
        const {resolved: r} = this;
        if (!r) {
            const {keyframes: w} = this.options;
            return {
                done: !0,
                value: w[w.length - 1]
            }
        }
        const {finalKeyframe: i, generator: o, mirroredGenerator: s, mapPercentToKeyframes: l, keyframes: a, calculatedDuration: u, totalDuration: c, resolvedDuration: d} = r;
        if (this.startTime === null)
            return o.next(0);
        const {delay: f, repeat: g, repeatType: y, repeatDelay: v, onUpdate: T} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)),
        n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const p = this.currentTime - f * (this.speed >= 0 ? 1 : -1)
          , h = this.speed >= 0 ? p < 0 : p > c;
        this.currentTime = Math.max(p, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let m = this.currentTime
          , x = o;
        if (g) {
            const w = Math.min(this.currentTime, c) / d;
            let M = Math.floor(w)
              , N = w % 1;
            !N && w >= 1 && (N = 1),
            N === 1 && M--,
            M = Math.min(M, g + 1),
            !!(M % 2) && (y === "reverse" ? (N = 1 - N,
            v && (N -= v / d)) : y === "mirror" && (x = s)),
            m = Zt(0, 1, N) * d
        }
        const P = h ? {
            done: !1,
            value: a[0]
        } : x.next(m);
        l && (P.value = l(P.value));
        let {done: C} = P;
        !h && u !== null && (C = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const E = this.holdTime === null && (this.state === "finished" || this.state === "running" && C);
        return E && i !== void 0 && (P.value = Zo(a, this.options, i)),
        T && T(P.value),
        E && this.finish(),
        P
    }
    get duration() {
        const {resolved: t} = this;
        return t ? St(t.calculatedDuration) : 0
    }
    get time() {
        return St(this.currentTime)
    }
    set time(t) {
        t = wt(t),
        this.currentTime = t,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t,
        n && (this.time = St(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: t=i1, onPlay: n, startTime: r} = this.options;
        this.driver || (this.driver = t(o => this.tick(o))),
        n && n();
        const i = this.driver.now();
        this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = r ?? this.calcStartTime(),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: t} = this.options;
        t && t()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
}
const l1 = new Set(["opacity", "clipPath", "filter", "transform"])
  , a1 = 10
  , u1 = (e, t) => {
    let n = "";
    const r = Math.max(Math.round(t / a1), 2);
    for (let i = 0; i < r; i++)
        n += e(nr(0, r - 1, i)) + ", ";
    return `linear(${n.substring(0, n.length - 2)})`
}
;
function au(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const c1 = {
    linearEasing: void 0
};
function d1(e, t) {
    const n = au(e);
    return () => {
        var r;
        return (r = c1[t]) !== null && r !== void 0 ? r : n()
    }
}
const Eo = d1( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing");
function Hp(e) {
    return !!(typeof e == "function" && Eo() || !e || typeof e == "string" && (e in Ul || Eo()) || ou(e) || Array.isArray(e) && e.every(Hp))
}
const Sr = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , Ul = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Sr([0, .65, .55, 1]),
    circOut: Sr([.55, 0, 1, .45]),
    backIn: Sr([.31, .01, .66, -.59]),
    backOut: Sr([.33, 1.53, .69, .99])
};
function Kp(e, t) {
    if (e)
        return typeof e == "function" && Eo() ? u1(e, t) : ou(e) ? Sr(e) : Array.isArray(e) ? e.map(n => Kp(n, t) || Ul.easeOut) : Ul[e]
}
function f1(e, t, n, {delay: r=0, duration: i=300, repeat: o=0, repeatType: s="loop", ease: l, times: a}={}) {
    const u = {
        [t]: n
    };
    a && (u.offset = a);
    const c = Kp(l, i);
    return Array.isArray(c) && (u.easing = c),
    e.animate(u, {
        delay: r,
        duration: i,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: o + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    })
}
function Yc(e, t) {
    e.timeline = t,
    e.onfinish = null
}
const h1 = au( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , _o = 10
  , p1 = 2e4;
function m1(e) {
    return iu(e.type) || e.type === "spring" || !Hp(e.ease)
}
function g1(e, t) {
    const n = new lu({
        ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let r = {
        done: !1,
        value: e[0]
    };
    const i = [];
    let o = 0;
    for (; !r.done && o < p1; )
        r = n.sample(o),
        i.push(r.value),
        o += _o;
    return {
        times: void 0,
        keyframes: i,
        duration: o - _o,
        ease: "linear"
    }
}
const Gp = {
    anticipate: vp,
    backInOut: yp,
    circInOut: wp
};
function y1(e) {
    return e in Gp
}
class Xc extends Fp {
    constructor(t) {
        super(t);
        const {name: n, motionValue: r, element: i, keyframes: o} = this.options;
        this.resolver = new Ip(o, (s, l) => this.onKeyframesResolved(s, l),n,r,i),
        this.resolver.scheduleResolve()
    }
    initPlayback(t, n) {
        var r;
        let {duration: i=300, times: o, ease: s, type: l, motionValue: a, name: u, startTime: c} = this.options;
        if (!(!((r = a.owner) === null || r === void 0) && r.current))
            return !1;
        if (typeof s == "string" && Eo() && y1(s) && (s = Gp[s]),
        m1(this.options)) {
            const {onComplete: f, onUpdate: g, motionValue: y, element: v, ...T} = this.options
              , p = g1(t, T);
            t = p.keyframes,
            t.length === 1 && (t[1] = t[0]),
            i = p.duration,
            o = p.times,
            s = p.ease,
            l = "keyframes"
        }
        const d = f1(a.owner.current, u, t, {
            ...this.options,
            duration: i,
            times: o,
            ease: s
        });
        return d.startTime = c ?? this.calcStartTime(),
        this.pendingTimeline ? (Yc(d, this.pendingTimeline),
        this.pendingTimeline = void 0) : d.onfinish = () => {
            const {onComplete: f} = this.options;
            a.set(Zo(t, this.options, n)),
            f && f(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: d,
            duration: i,
            times: o,
            type: l,
            ease: s,
            keyframes: t
        }
    }
    get duration() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {duration: n} = t;
        return St(n)
    }
    get time() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {animation: n} = t;
        return St(n.currentTime || 0)
    }
    set time(t) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: r} = n;
        r.currentTime = wt(t)
    }
    get speed() {
        const {resolved: t} = this;
        if (!t)
            return 1;
        const {animation: n} = t;
        return n.playbackRate
    }
    set speed(t) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: r} = n;
        r.playbackRate = t
    }
    get state() {
        const {resolved: t} = this;
        if (!t)
            return "idle";
        const {animation: n} = t;
        return n.playState
    }
    get startTime() {
        const {resolved: t} = this;
        if (!t)
            return null;
        const {animation: n} = t;
        return n.startTime
    }
    attachTimeline(t) {
        if (!this._resolved)
            this.pendingTimeline = t;
        else {
            const {resolved: n} = this;
            if (!n)
                return xe;
            const {animation: r} = n;
            Yc(r, t)
        }
        return xe
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.playState === "finished" && this.updateFinishedPromise(),
        n.play()
    }
    pause() {
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n, keyframes: r, duration: i, type: o, ease: s, times: l} = t;
        if (n.playState === "idle" || n.playState === "finished")
            return;
        if (this.time) {
            const {motionValue: u, onUpdate: c, onComplete: d, element: f, ...g} = this.options
              , y = new lu({
                ...g,
                keyframes: r,
                duration: i,
                type: o,
                ease: s,
                times: l,
                isGenerator: !0
            })
              , v = wt(this.time);
            u.setWithVelocity(y.sample(v - _o).value, y.sample(v).value, _o)
        }
        const {onStop: a} = this.options;
        a && a(),
        this.cancel()
    }
    complete() {
        const {resolved: t} = this;
        t && t.animation.finish()
    }
    cancel() {
        const {resolved: t} = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {motionValue: n, name: r, repeatDelay: i, repeatType: o, damping: s, type: l} = t;
        return h1() && r && l1.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate && !i && o !== "mirror" && s !== 0 && l !== "inertia"
    }
}
const v1 = au( () => window.ScrollTimeline !== void 0);
class x1 {
    constructor(t) {
        this.stop = () => this.runAll("stop"),
        this.animations = t.filter(Boolean)
    }
    then(t, n) {
        return Promise.all(this.animations).then(t).catch(n)
    }
    getAll(t) {
        return this.animations[0][t]
    }
    setAll(t, n) {
        for (let r = 0; r < this.animations.length; r++)
            this.animations[r][t] = n
    }
    attachTimeline(t, n) {
        const r = this.animations.map(i => v1() && i.attachTimeline ? i.attachTimeline(t) : n(i));
        return () => {
            r.forEach( (i, o) => {
                i && i(),
                this.animations[o].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(t) {
        this.setAll("time", t)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(t) {
        this.setAll("speed", t)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let t = 0;
        for (let n = 0; n < this.animations.length; n++)
            t = Math.max(t, this.animations[n].duration);
        return t
    }
    runAll(t) {
        this.animations.forEach(n => n[t]())
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
function w1({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: l, from: a, elapsed: u, ...c}) {
    return !!Object.keys(c).length
}
const uu = (e, t, n, r={}, i, o) => s => {
    const l = Xa(r, e) || {}
      , a = l.delay || r.delay || 0;
    let {elapsed: u=0} = r;
    u = u - wt(a);
    let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...l,
        delay: -u,
        onUpdate: f => {
            t.set(f),
            l.onUpdate && l.onUpdate(f)
        }
        ,
        onComplete: () => {
            s(),
            l.onComplete && l.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: o ? void 0 : i
    };
    w1(l) || (c = {
        ...c,
        ...Oy(e, c)
    }),
    c.duration && (c.duration = wt(c.duration)),
    c.repeatDelay && (c.repeatDelay = wt(c.repeatDelay)),
    c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0,
    c.delay === 0 && (d = !0)),
    d && !o && t.get() !== void 0) {
        const f = Zo(c.keyframes, l);
        if (f !== void 0)
            return W.update( () => {
                c.onUpdate(f),
                c.onComplete()
            }
            ),
            new x1([])
    }
    return !o && Xc.supports(c) ? new Xc(c) : new lu(c)
}
  , S1 = e => !!(e && typeof e == "object" && e.mix && e.toValue)
  , T1 = e => Vl(e) ? e[e.length - 1] || 0 : e;
function cu(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function du(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class fu {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return cu(this.subscriptions, t),
        () => du(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let o = 0; o < i; o++) {
                    const s = this.subscriptions[o];
                    s && s(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Zc = 30
  , P1 = e => !isNaN(parseFloat(e));
class k1 {
    constructor(t, n={}) {
        this.version = "11.11.11",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (r, i=!0) => {
            const o = dt.now();
            this.updatedAt !== o && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = dt.now(),
        this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = P1(this.current))
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new fu);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            W.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = dt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Zc)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Zc);
        return Op(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function ni(e, t) {
    return new k1(e,t)
}
function C1(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ni(n))
}
function E1(e, t) {
    const n = Xo(e, t);
    let {transitionEnd: r={}, transition: i={}, ...o} = n || {};
    o = {
        ...o,
        ...r
    };
    for (const s in o) {
        const l = T1(o[s]);
        C1(e, s, l)
    }
}
const hu = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , _1 = "framerAppearId"
  , Qp = "data-" + hu(_1);
function Yp(e) {
    return e.props[Qp]
}
const ve = e => !!(e && e.getVelocity);
function L1(e) {
    return !!(ve(e) && e.add)
}
function Wl(e, t) {
    const n = e.getValue("willChange");
    if (L1(n))
        return n.add(t)
}
function A1({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function Xp(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
    var o;
    let {transition: s=e.getDefaultTransition(), transitionEnd: l, ...a} = t;
    r && (s = r);
    const u = []
      , c = i && e.animationState && e.animationState.getState()[i];
    for (const d in a) {
        const f = e.getValue(d, (o = e.latestValues[d]) !== null && o !== void 0 ? o : null)
          , g = a[d];
        if (g === void 0 || c && A1(c, d))
            continue;
        const y = {
            delay: n,
            ...Xa(s || {}, d)
        };
        let v = !1;
        if (window.MotionHandoffAnimation) {
            const p = Yp(e);
            if (p) {
                const h = window.MotionHandoffAnimation(p, d, W);
                h !== null && (y.startTime = h,
                v = !0)
            }
        }
        Wl(e, d),
        f.start(uu(d, f, g, e.shouldReduceMotion && Pn.has(d) ? {
            type: !1
        } : y, e, v));
        const T = f.animation;
        T && u.push(T)
    }
    return l && Promise.all(u).then( () => {
        W.update( () => {
            l && E1(e, l)
        }
        )
    }
    ),
    u
}
function Hl(e, t, n={}) {
    var r;
    const i = Xo(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
    let {transition: o=e.getDefaultTransition() || {}} = i || {};
    n.transitionOverride && (o = n.transitionOverride);
    const s = i ? () => Promise.all(Xp(e, i, n)) : () => Promise.resolve()
      , l = e.variantChildren && e.variantChildren.size ? (u=0) => {
        const {delayChildren: c=0, staggerChildren: d, staggerDirection: f} = o;
        return N1(e, t, c + u, d, f, n)
    }
    : () => Promise.resolve()
      , {when: a} = o;
    if (a) {
        const [u,c] = a === "beforeChildren" ? [s, l] : [l, s];
        return u().then( () => c())
    } else
        return Promise.all([s(), l(n.delay)])
}
function N1(e, t, n=0, r=0, i=1, o) {
    const s = []
      , l = (e.variantChildren.size - 1) * r
      , a = i === 1 ? (u=0) => u * r : (u=0) => l - u * r;
    return Array.from(e.variantChildren).sort(M1).forEach( (u, c) => {
        u.notify("AnimationStart", t),
        s.push(Hl(u, t, {
            ...o,
            delay: n + a(c)
        }).then( () => u.notify("AnimationComplete", t)))
    }
    ),
    Promise.all(s)
}
function M1(e, t) {
    return e.sortNodePosition(t)
}
function D1(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(o => Hl(e, o, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = Hl(e, t, n);
    else {
        const i = typeof t == "function" ? Xo(e, t, n.custom) : t;
        r = Promise.all(Xp(e, i, n))
    }
    return r.then( () => {
        e.notify("AnimationComplete", t)
    }
    )
}
const R1 = Ya.length;
function Zp(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const n = e.parent ? Zp(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial),
        n
    }
    const t = {};
    for (let n = 0; n < R1; n++) {
        const r = Ya[n]
          , i = e.props[r];
        (br(i) || i === !1) && (t[r] = i)
    }
    return t
}
const V1 = [...Qa].reverse()
  , j1 = Qa.length;
function I1(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => D1(e, n, r)))
}
function F1(e) {
    let t = I1(e)
      , n = qc()
      , r = !0;
    const i = a => (u, c) => {
        var d;
        const f = Xo(e, c, a === "exit" ? (d = e.presenceContext) === null || d === void 0 ? void 0 : d.custom : void 0);
        if (f) {
            const {transition: g, transitionEnd: y, ...v} = f;
            u = {
                ...u,
                ...v,
                ...y
            }
        }
        return u
    }
    ;
    function o(a) {
        t = a(e)
    }
    function s(a) {
        const {props: u} = e
          , c = Zp(e.parent) || {}
          , d = []
          , f = new Set;
        let g = {}
          , y = 1 / 0;
        for (let T = 0; T < j1; T++) {
            const p = V1[T]
              , h = n[p]
              , m = u[p] !== void 0 ? u[p] : c[p]
              , x = br(m)
              , P = p === a ? h.isActive : null;
            P === !1 && (y = T);
            let C = m === c[p] && m !== u[p] && x;
            if (C && r && e.manuallyAnimateOnMount && (C = !1),
            h.protectedKeys = {
                ...g
            },
            !h.isActive && P === null || !m && !h.prevProp || Yo(m) || typeof m == "boolean")
                continue;
            const E = O1(h.prevProp, m);
            let w = E || p === a && h.isActive && !C && x || T > y && x
              , M = !1;
            const N = Array.isArray(m) ? m : [m];
            let $ = N.reduce(i(p), {});
            P === !1 && ($ = {});
            const {prevResolvedValues: ae={}} = h
              , _e = {
                ...ae,
                ...$
            }
              , Le = F => {
                w = !0,
                f.has(F) && (M = !0,
                f.delete(F)),
                h.needsAnimating[F] = !0;
                const _ = e.getValue(F);
                _ && (_.liveStyle = !1)
            }
            ;
            for (const F in _e) {
                const _ = $[F]
                  , D = ae[F];
                if (g.hasOwnProperty(F))
                    continue;
                let V = !1;
                Vl(_) && Vl(D) ? V = !dp(_, D) : V = _ !== D,
                V ? _ != null ? Le(F) : f.add(F) : _ !== void 0 && f.has(F) ? Le(F) : h.protectedKeys[F] = !0
            }
            h.prevProp = m,
            h.prevResolvedValues = $,
            h.isActive && (g = {
                ...g,
                ...$
            }),
            r && e.blockInitialAnimation && (w = !1),
            w && (!(C && E) || M) && d.push(...N.map(F => ({
                animation: F,
                options: {
                    type: p
                }
            })))
        }
        if (f.size) {
            const T = {};
            f.forEach(p => {
                const h = e.getBaseTarget(p)
                  , m = e.getValue(p);
                m && (m.liveStyle = !0),
                T[p] = h ?? null
            }
            ),
            d.push({
                animation: T
            })
        }
        let v = !!d.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (v = !1),
        r = !1,
        v ? t(d) : Promise.resolve()
    }
    function l(a, u) {
        var c;
        if (n[a].isActive === u)
            return Promise.resolve();
        (c = e.variantChildren) === null || c === void 0 || c.forEach(f => {
            var g;
            return (g = f.animationState) === null || g === void 0 ? void 0 : g.setActive(a, u)
        }
        ),
        n[a].isActive = u;
        const d = s(a);
        for (const f in n)
            n[f].protectedKeys = {};
        return d
    }
    return {
        animateChanges: s,
        setActive: l,
        setAnimateFunction: o,
        getState: () => n,
        reset: () => {
            n = qc(),
            r = !0
        }
    }
}
function O1(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !dp(t, e) : !1
}
function nn(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function qc() {
    return {
        animate: nn(!0),
        whileInView: nn(),
        whileHover: nn(),
        whileTap: nn(),
        whileDrag: nn(),
        whileFocus: nn(),
        exit: nn()
    }
}
class tn {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
class z1 extends tn {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = F1(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        Yo(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
        (t = this.unmountControls) === null || t === void 0 || t.call(this)
    }
}
let B1 = 0;
class $1 extends tn {
    constructor() {
        super(...arguments),
        this.id = B1++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then( () => n(this.id))
    }
    mount() {
        const {register: t} = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const U1 = {
    animation: {
        Feature: z1
    },
    exit: {
        Feature: $1
    }
}
  , qp = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function qo(e, t="page") {
    return {
        point: {
            x: e[`${t}X`],
            y: e[`${t}Y`]
        }
    }
}
const W1 = e => t => qp(t) && e(t, qo(t));
function vt(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
function Pt(e, t, n, r) {
    return vt(e, t, W1(n), r)
}
const Jc = (e, t) => Math.abs(e - t);
function H1(e, t) {
    const n = Jc(e.x, t.x)
      , r = Jc(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class Jp {
    constructor(t, n, {transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const d = Vs(this.lastMoveEventInfo, this.history)
              , f = this.startEvent !== null
              , g = H1(d.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!f && !g)
                return;
            const {point: y} = d
              , {timestamp: v} = de;
            this.history.push({
                ...y,
                timestamp: v
            });
            const {onStart: T, onMove: p} = this.handlers;
            f || (T && T(this.lastMoveEvent, d),
            this.startEvent = this.lastMoveEvent),
            p && p(this.lastMoveEvent, d)
        }
        ,
        this.handlePointerMove = (d, f) => {
            this.lastMoveEvent = d,
            this.lastMoveEventInfo = Rs(f, this.transformPagePoint),
            W.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (d, f) => {
            this.end();
            const {onEnd: g, onSessionEnd: y, resumeAnimation: v} = this.handlers;
            if (this.dragSnapToOrigin && v && v(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const T = Vs(d.type === "pointercancel" ? this.lastMoveEventInfo : Rs(f, this.transformPagePoint), this.history);
            this.startEvent && g && g(d, T),
            y && y(d, T)
        }
        ,
        !qp(t))
            return;
        this.dragSnapToOrigin = o,
        this.handlers = n,
        this.transformPagePoint = r,
        this.contextWindow = i || window;
        const s = qo(t)
          , l = Rs(s, this.transformPagePoint)
          , {point: a} = l
          , {timestamp: u} = de;
        this.history = [{
            ...a,
            timestamp: u
        }];
        const {onSessionStart: c} = n;
        c && c(t, Vs(l, this.history)),
        this.removeListeners = Tt(Pt(this.contextWindow, "pointermove", this.handlePointerMove), Pt(this.contextWindow, "pointerup", this.handlePointerUp), Pt(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Xt(this.updatePoint)
    }
}
function Rs(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function bc(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Vs({point: e}, t) {
    return {
        point: e,
        delta: bc(e, bp(t)),
        offset: bc(e, K1(t)),
        velocity: G1(t, .1)
    }
}
function K1(e) {
    return e[0]
}
function bp(e) {
    return e[e.length - 1]
}
function G1(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const i = bp(e);
    for (; n >= 0 && (r = e[n],
    !(i.timestamp - r.timestamp > wt(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const o = St(i.timestamp - r.timestamp);
    if (o === 0)
        return {
            x: 0,
            y: 0
        };
    const s = {
        x: (i.x - r.x) / o,
        y: (i.y - r.y) / o
    };
    return s.x === 1 / 0 && (s.x = 0),
    s.y === 1 / 0 && (s.y = 0),
    s
}
function em(e) {
    let t = null;
    return () => {
        const n = () => {
            t = null
        }
        ;
        return t === null ? (t = e,
        n) : !1
    }
}
const ed = em("dragHorizontal")
  , td = em("dragVertical");
function tm(e) {
    let t = !1;
    if (e === "y")
        t = td();
    else if (e === "x")
        t = ed();
    else {
        const n = ed()
          , r = td();
        n && r ? t = () => {
            n(),
            r()
        }
        : (n && n(),
        r && r())
    }
    return t
}
function nm() {
    const e = tm(!0);
    return e ? (e(),
    !1) : !0
}
function On(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
const rm = 1e-4
  , Q1 = 1 - rm
  , Y1 = 1 + rm
  , im = .01
  , X1 = 0 - im
  , Z1 = 0 + im;
function Be(e) {
    return e.max - e.min
}
function q1(e, t, n) {
    return Math.abs(e - t) <= n
}
function nd(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = Z(t.min, t.max, e.origin),
    e.scale = Be(n) / Be(t),
    e.translate = Z(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= Q1 && e.scale <= Y1 || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= X1 && e.translate <= Z1 || isNaN(e.translate)) && (e.translate = 0)
}
function Rr(e, t, n, r) {
    nd(e.x, t.x, n.x, r ? r.originX : void 0),
    nd(e.y, t.y, n.y, r ? r.originY : void 0)
}
function rd(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + Be(t)
}
function J1(e, t, n) {
    rd(e.x, t.x, n.x),
    rd(e.y, t.y, n.y)
}
function id(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + Be(t)
}
function Vr(e, t, n) {
    id(e.x, t.x, n.x),
    id(e.y, t.y, n.y)
}
function b1(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? Z(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Z(n, e, r.max) : Math.min(e, n)),
    e
}
function od(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function ex(e, {top: t, left: n, bottom: r, right: i}) {
    return {
        x: od(e.x, n, i),
        y: od(e.y, t, r)
    }
}
function sd(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function tx(e, t) {
    return {
        x: sd(e.x, t.x),
        y: sd(e.y, t.y)
    }
}
function nx(e, t) {
    let n = .5;
    const r = Be(e)
      , i = Be(t);
    return i > r ? n = nr(t.min, t.max - r, e.min) : r > i && (n = nr(e.min, e.max - i, t.min)),
    Zt(0, 1, n)
}
function rx(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const Kl = .35;
function ix(e=Kl) {
    return e === !1 ? e = 0 : e === !0 && (e = Kl),
    {
        x: ld(e, "left", "right"),
        y: ld(e, "top", "bottom")
    }
}
function ld(e, t, n) {
    return {
        min: ad(e, t),
        max: ad(e, n)
    }
}
function ad(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const ud = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , zn = () => ({
    x: ud(),
    y: ud()
})
  , cd = () => ({
    min: 0,
    max: 0
})
  , ee = () => ({
    x: cd(),
    y: cd()
});
function He(e) {
    return [e("x"), e("y")]
}
function om({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function ox({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function sx(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function js(e) {
    return e === void 0 || e === 1
}
function Gl({scale: e, scaleX: t, scaleY: n}) {
    return !js(e) || !js(t) || !js(n)
}
function sn(e) {
    return Gl(e) || sm(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function sm(e) {
    return dd(e.x) || dd(e.y)
}
function dd(e) {
    return e && e !== "0%"
}
function Lo(e, t, n) {
    const r = e - n
      , i = t * r;
    return n + i
}
function fd(e, t, n, r, i) {
    return i !== void 0 && (e = Lo(e, i, r)),
    Lo(e, n, r) + t
}
function Ql(e, t=0, n=1, r, i) {
    e.min = fd(e.min, t, n, r, i),
    e.max = fd(e.max, t, n, r, i)
}
function lm(e, {x: t, y: n}) {
    Ql(e.x, t.translate, t.scale, t.originPoint),
    Ql(e.y, n.translate, n.scale, n.originPoint)
}
const hd = .999999999999
  , pd = 1.0000000000001;
function lx(e, t, n, r=!1) {
    const i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let o, s;
    for (let l = 0; l < i; l++) {
        o = n[l],
        s = o.projectionDelta;
        const {visualElement: a} = o.options;
        a && a.props.style && a.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && $n(e, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }),
        s && (t.x *= s.x.scale,
        t.y *= s.y.scale,
        lm(e, s)),
        r && sn(o.latestValues) && $n(e, o.latestValues))
    }
    t.x < pd && t.x > hd && (t.x = 1),
    t.y < pd && t.y > hd && (t.y = 1)
}
function Bn(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function md(e, t, n, r, i=.5) {
    const o = Z(e.min, e.max, i);
    Ql(e, t, n, o, r)
}
function $n(e, t) {
    md(e.x, t.x, t.scaleX, t.scale, t.originX),
    md(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function am(e, t) {
    return om(sx(e.getBoundingClientRect(), t))
}
function ax(e, t, n) {
    const r = am(e, n)
      , {scroll: i} = t;
    return i && (Bn(r.x, i.offset.x),
    Bn(r.y, i.offset.y)),
    r
}
const um = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , ux = new WeakMap;
class cx {
    constructor(t) {
        this.openGlobalLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = ee(),
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1}={}) {
        const {presenceContext: r} = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const i = c => {
            const {dragSnapToOrigin: d} = this.getProps();
            d ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(qo(c, "page").point)
        }
          , o = (c, d) => {
            const {drag: f, dragPropagation: g, onDragStart: y} = this.getProps();
            if (f && !g && (this.openGlobalLock && this.openGlobalLock(),
            this.openGlobalLock = tm(f),
            !this.openGlobalLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            He(T => {
                let p = this.getAxisMotionValue(T).get() || 0;
                if (ct.test(p)) {
                    const {projection: h} = this.visualElement;
                    if (h && h.layout) {
                        const m = h.layout.layoutBox[T];
                        m && (p = Be(m) * (parseFloat(p) / 100))
                    }
                }
                this.originPoint[T] = p
            }
            ),
            y && W.postRender( () => y(c, d)),
            Wl(this.visualElement, "transform");
            const {animationState: v} = this.visualElement;
            v && v.setActive("whileDrag", !0)
        }
          , s = (c, d) => {
            const {dragPropagation: f, dragDirectionLock: g, onDirectionLock: y, onDrag: v} = this.getProps();
            if (!f && !this.openGlobalLock)
                return;
            const {offset: T} = d;
            if (g && this.currentDirection === null) {
                this.currentDirection = dx(T),
                this.currentDirection !== null && y && y(this.currentDirection);
                return
            }
            this.updateAxis("x", d.point, T),
            this.updateAxis("y", d.point, T),
            this.visualElement.render(),
            v && v(c, d)
        }
          , l = (c, d) => this.stop(c, d)
          , a = () => He(c => {
            var d;
            return this.getAnimationState(c) === "paused" && ((d = this.getAxisMotionValue(c).animation) === null || d === void 0 ? void 0 : d.play())
        }
        )
          , {dragSnapToOrigin: u} = this.getProps();
        this.panSession = new Jp(t,{
            onSessionStart: i,
            onStart: o,
            onMove: s,
            onSessionEnd: l,
            resumeAnimation: a
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: um(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(),
        !r)
            return;
        const {velocity: i} = n;
        this.startAnimation(i);
        const {onDragEnd: o} = this.getProps();
        o && W.postRender( () => o(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(),
        this.openGlobalLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {drag: i} = this.getProps();
        if (!r || !Vi(t, i, this.currentDirection))
            return;
        const o = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (s = b1(s, this.constraints[t], this.elastic[t])),
        o.set(s)
    }
    resolveConstraints() {
        var t;
        const {dragConstraints: n, dragElastic: r} = this.getProps()
          , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout
          , o = this.constraints;
        n && On(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = ex(i.layoutBox, n) : this.constraints = !1,
        this.elastic = ix(r),
        o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && He(s => {
            this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = rx(i.layoutBox[s], this.constraints[s]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !On(t))
            return !1;
        const r = t.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const o = ax(r, i.root, this.visualElement.getTransformPagePoint());
        let s = tx(i.layout.layoutBox, o);
        if (n) {
            const l = n(ox(s));
            this.hasMutatedConstraints = !!l,
            l && (s = om(l))
        }
        return s
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: l} = this.getProps()
          , a = this.constraints || {}
          , u = He(c => {
            if (!Vi(c, n, this.currentDirection))
                return;
            let d = a && a[c] || {};
            s && (d = {
                min: 0,
                max: 0
            });
            const f = i ? 200 : 1e6
              , g = i ? 40 : 1e7
              , y = {
                type: "inertia",
                velocity: r ? t[c] : 0,
                bounceStiffness: f,
                bounceDamping: g,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...o,
                ...d
            };
            return this.startAxisValueAnimation(c, y)
        }
        );
        return Promise.all(u).then(l)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return Wl(this.visualElement, t),
        r.start(uu(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        He(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        He(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
          , r = this.visualElement.getProps()
          , i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        He(n => {
            const {drag: r} = this.getProps();
            if (!Vi(n, r, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: s, max: l} = i.layout.layoutBox[n];
                o.set(t[n] - Z(s, l, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!On(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        He(s => {
            const l = this.getAxisMotionValue(s);
            if (l && this.constraints !== !1) {
                const a = l.get();
                i[s] = nx({
                    min: a,
                    max: a
                }, this.constraints[s])
            }
        }
        );
        const {transformTemplate: o} = this.visualElement.getProps();
        this.visualElement.current.style.transform = o ? o({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        He(s => {
            if (!Vi(s, t, null))
                return;
            const l = this.getAxisMotionValue(s)
              , {min: a, max: u} = this.constraints[s];
            l.set(Z(a, u, i[s]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        ux.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = Pt(t, "pointerdown", a => {
            const {drag: u, dragListener: c=!0} = this.getProps();
            u && c && this.start(a)
        }
        )
          , r = () => {
            const {dragConstraints: a} = this.getProps();
            On(a) && a.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: i} = this.visualElement
          , o = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(),
        i.updateLayout()),
        W.read(r);
        const s = vt(window, "resize", () => this.scalePositionWithinConstraints())
          , l = i.addEventListener("didUpdate", ({delta: a, hasLayoutChanged: u}) => {
            this.isDragging && u && (He(c => {
                const d = this.getAxisMotionValue(c);
                d && (this.originPoint[c] += a[c].translate,
                d.set(d.get() + a[c].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            s(),
            n(),
            o(),
            l && l()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: o=!1, dragElastic: s=Kl, dragMomentum: l=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: s,
            dragMomentum: l
        }
    }
}
function Vi(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function dx(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class fx extends tn {
    constructor(t) {
        super(t),
        this.removeGroupControls = xe,
        this.removeListeners = xe,
        this.controls = new cx(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || xe
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const gd = e => (t, n) => {
    e && W.postRender( () => e(t, n))
}
;
class hx extends tn {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = xe
    }
    onPointerDown(t) {
        this.session = new Jp(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: um(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: gd(t),
            onStart: gd(n),
            onMove: r,
            onEnd: (o, s) => {
                delete this.session,
                i && W.postRender( () => i(o, s))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Pt(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const pu = L.createContext(null);
function px() {
    const e = L.useContext(pu);
    if (e === null)
        return [!0, null];
    const {isPresent: t, onExitComplete: n, register: r} = e
      , i = L.useId();
    L.useEffect( () => r(i), []);
    const o = L.useCallback( () => n && n(i), [i, n]);
    return !t && n ? [!1, o] : [!0]
}
const cm = L.createContext({})
  , dm = L.createContext({})
  , Zi = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function yd(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const gr = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (R.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = yd(e, t.target.x)
          , r = yd(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , mx = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e
          , i = qt.parse(e);
        if (i.length > 5)
            return r;
        const o = qt.createTransformer(e)
          , s = typeof i[0] != "number" ? 1 : 0
          , l = n.x.scale * t.x
          , a = n.y.scale * t.y;
        i[0 + s] /= l,
        i[1 + s] /= a;
        const u = Z(l, a, .5);
        return typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
    }
}
  , Ao = {};
function gx(e) {
    Object.assign(Ao, e)
}
const {schedule: mu, cancel: S2} = fp(queueMicrotask, !1);
class yx extends L.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props
          , {projection: o} = t;
        gx(vx),
        o && (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        o.setOptions({
            ...o.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Zi.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: i, isPresent: o} = this.props
          , s = r.projection;
        return s && (s.isPresent = o,
        i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(),
        t.isPresent !== o && (o ? s.promote() : s.relegate() || W.postRender( () => {
            const l = s.getStack();
            (!l || !l.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        mu.postRender( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: i} = t;
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function fm(e) {
    const [t,n] = px()
      , r = L.useContext(cm);
    return S.jsx(yx, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: L.useContext(dm),
        isPresent: t,
        safeToRemove: n
    })
}
const vx = {
    borderRadius: {
        ...gr,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: gr,
    borderTopRightRadius: gr,
    borderBottomLeftRadius: gr,
    borderBottomRightRadius: gr,
    boxShadow: mx
}
  , hm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , xx = hm.length
  , vd = e => typeof e == "string" ? parseFloat(e) : e
  , xd = e => typeof e == "number" || R.test(e);
function wx(e, t, n, r, i, o) {
    i ? (e.opacity = Z(0, n.opacity !== void 0 ? n.opacity : 1, Sx(r)),
    e.opacityExit = Z(t.opacity !== void 0 ? t.opacity : 1, 0, Tx(r))) : o && (e.opacity = Z(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < xx; s++) {
        const l = `border${hm[s]}Radius`;
        let a = wd(t, l)
          , u = wd(n, l);
        if (a === void 0 && u === void 0)
            continue;
        a || (a = 0),
        u || (u = 0),
        a === 0 || u === 0 || xd(a) === xd(u) ? (e[l] = Math.max(Z(vd(a), vd(u), r), 0),
        (ct.test(u) || ct.test(a)) && (e[l] += "%")) : e[l] = u
    }
    (t.rotate || n.rotate) && (e.rotate = Z(t.rotate || 0, n.rotate || 0, r))
}
function wd(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const Sx = pm(0, .5, xp)
  , Tx = pm(.5, .95, xe);
function pm(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(nr(e, t, r))
}
function Sd(e, t) {
    e.min = t.min,
    e.max = t.max
}
function We(e, t) {
    Sd(e.x, t.x),
    Sd(e.y, t.y)
}
function Td(e, t) {
    e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
function Pd(e, t, n, r, i) {
    return e -= t,
    e = Lo(e, 1 / n, r),
    i !== void 0 && (e = Lo(e, 1 / i, r)),
    e
}
function Px(e, t=0, n=1, r=.5, i, o=e, s=e) {
    if (ct.test(t) && (t = parseFloat(t),
    t = Z(s.min, s.max, t / 100) - s.min),
    typeof t != "number")
        return;
    let l = Z(o.min, o.max, r);
    e === o && (l -= t),
    e.min = Pd(e.min, t, n, l, i),
    e.max = Pd(e.max, t, n, l, i)
}
function kd(e, t, [n,r,i], o, s) {
    Px(e, t[n], t[r], t[i], t.scale, o, s)
}
const kx = ["x", "scaleX", "originX"]
  , Cx = ["y", "scaleY", "originY"];
function Cd(e, t, n, r) {
    kd(e.x, t, kx, n ? n.x : void 0, r ? r.x : void 0),
    kd(e.y, t, Cx, n ? n.y : void 0, r ? r.y : void 0)
}
function Ed(e) {
    return e.translate === 0 && e.scale === 1
}
function mm(e) {
    return Ed(e.x) && Ed(e.y)
}
function _d(e, t) {
    return e.min === t.min && e.max === t.max
}
function Ex(e, t) {
    return _d(e.x, t.x) && _d(e.y, t.y)
}
function Ld(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function gm(e, t) {
    return Ld(e.x, t.x) && Ld(e.y, t.y)
}
function Ad(e) {
    return Be(e.x) / Be(e.y)
}
function Nd(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class _x {
    constructor() {
        this.members = []
    }
    add(t) {
        cu(this.members, t),
        t.scheduleRender()
    }
    remove(t) {
        if (du(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0)
            return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== !1) {
                r = o;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender(),
            t.resumeFrom = r,
            n && (t.resumeFrom.preserveOpacity = !0),
            r.snapshot && (t.snapshot = r.snapshot,
            t.snapshot.latestValues = r.animationValues || r.latestValues),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: i} = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function Lx(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x
      , o = e.y.translate / t.y
      , s = (n == null ? void 0 : n.z) || 0;
    if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {transformPerspective: u, rotate: c, rotateX: d, rotateY: f, skewX: g, skewY: y} = n;
        u && (r = `perspective(${u}px) ${r}`),
        c && (r += `rotate(${c}deg) `),
        d && (r += `rotateX(${d}deg) `),
        f && (r += `rotateY(${f}deg) `),
        g && (r += `skewX(${g}deg) `),
        y && (r += `skewY(${y}deg) `)
    }
    const l = e.x.scale * t.x
      , a = e.y.scale * t.y;
    return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`),
    r || "none"
}
const Ax = (e, t) => e.depth - t.depth;
class Nx {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        cu(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        du(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(Ax),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function qi(e) {
    const t = ve(e) ? e.get() : e;
    return S1(t) ? t.toValue() : t
}
function Mx(e, t) {
    const n = dt.now()
      , r = ({timestamp: i}) => {
        const o = i - n;
        o >= t && (Xt(r),
        e(o - t))
    }
    ;
    return W.read(r, !0),
    () => Xt(r)
}
function Dx(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
function Rx(e, t, n) {
    const r = ve(e) ? e : ni(e);
    return r.start(uu("", r, t, n)),
    r.animation
}
const ln = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
}
  , Tr = typeof window < "u" && window.MotionDebug !== void 0
  , Is = ["", "X", "Y", "Z"]
  , Vx = {
    visibility: "hidden"
}
  , Md = 1e3;
let jx = 0;
function Fs(e, t, n, r) {
    const {latestValues: i} = t;
    i[e] && (n[e] = i[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function ym(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: t} = e.options;
    if (!t)
        return;
    const n = Yp(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: i, layoutId: o} = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", W, !(i || o))
    }
    const {parent: r} = e;
    r && !r.hasCheckedOptimisedAppear && ym(r)
}
function vm({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(s={}, l=t == null ? void 0 : t()) {
            this.id = jx++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                Tr && (ln.totalNodes = ln.resolvedTargetDeltas = ln.recalculatedProjection = 0),
                this.nodes.forEach(Ox),
                this.nodes.forEach(Wx),
                this.nodes.forEach(Hx),
                this.nodes.forEach(zx),
                Tr && window.MotionDebug.record(ln)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = s,
            this.root = l ? l.root || l : this,
            this.path = l ? [...l.path, l] : [],
            this.parent = l,
            this.depth = l ? l.depth + 1 : 0;
            for (let a = 0; a < this.path.length; a++)
                this.path[a].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Nx)
        }
        addEventListener(s, l) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new fu),
            this.eventHandlers.get(s).add(l)
        }
        notifyListeners(s, ...l) {
            const a = this.eventHandlers.get(s);
            a && a.notify(...l)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        mount(s, l=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = Dx(s),
            this.instance = s;
            const {layoutId: a, layout: u, visualElement: c} = this.options;
            if (c && !c.current && c.mount(s),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            l && (u || a) && (this.isLayoutDirty = !0),
            e) {
                let d;
                const f = () => this.root.updateBlockedByResize = !1;
                e(s, () => {
                    this.root.updateBlockedByResize = !0,
                    d && d(),
                    d = Mx(f, 250),
                    Zi.hasAnimatedSinceResize && (Zi.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Rd))
                }
                )
            }
            a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 && c && (a || u) && this.addEventListener("didUpdate", ({delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: g, layout: y}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const v = this.options.transition || c.getDefaultTransition() || Xx
                  , {onLayoutAnimationStart: T, onLayoutAnimationComplete: p} = c.getProps()
                  , h = !this.targetLayout || !gm(this.targetLayout, y) || g
                  , m = !f && g;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || m || f && (h || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(d, m);
                    const x = {
                        ...Xa(v, "layout"),
                        onPlay: T,
                        onComplete: p
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0,
                    x.type = !1),
                    this.startAnimation(x)
                } else
                    f || Rd(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = y
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            Xt(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(Kx),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: s} = this.options;
            return s && s.getProps().transformTemplate
        }
        willUpdate(s=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && ym(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0,
                d.updateScroll("snapshot"),
                d.options.layoutRoot && d.willUpdate(!1)
            }
            const {layoutId: l, layout: a} = this.options;
            if (l === void 0 && !a)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            s && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Dd);
                return
            }
            this.isUpdating || this.nodes.forEach($x),
            this.isUpdating = !1,
            this.nodes.forEach(Ux),
            this.nodes.forEach(Ix),
            this.nodes.forEach(Fx),
            this.clearAllSnapshots();
            const l = dt.now();
            de.delta = Zt(0, 1e3 / 60, l - de.timestamp),
            de.timestamp = l,
            de.isProcessing = !0,
            Ls.update.process(de),
            Ls.preRender.process(de),
            Ls.render.process(de),
            de.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            mu.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Bx),
            this.sharedNodes.forEach(Gx)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            W.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            W.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let a = 0; a < this.path.length; a++)
                    this.path[a].updateScroll();
            const s = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = ee(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: l} = this.options;
            l && l.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s="measure") {
            let l = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (l = !1),
            l) {
                const a = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: s,
                    isRoot: a,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : a
                }
            }
        }
        resetTransform() {
            if (!i)
                return;
            const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , l = this.projectionDelta && !mm(this.projectionDelta)
              , a = this.getTransformTemplate()
              , u = a ? a(this.latestValues, "") : void 0
              , c = u !== this.prevTransformTemplateValue;
            s && (l || sn(this.latestValues) || c) && (i(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(s=!0) {
            const l = this.measurePageBox();
            let a = this.removeElementScroll(l);
            return s && (a = this.removeTransform(a)),
            Zx(a),
            {
                animationId: this.root.animationId,
                measuredBox: l,
                layoutBox: a,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var s;
            const {visualElement: l} = this.options;
            if (!l)
                return ee();
            const a = l.measureViewportBox();
            if (!(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(qx))) {
                const {scroll: c} = this.root;
                c && (Bn(a.x, c.offset.x),
                Bn(a.y, c.offset.y))
            }
            return a
        }
        removeElementScroll(s) {
            var l;
            const a = ee();
            if (We(a, s),
            !((l = this.scroll) === null || l === void 0) && l.wasRoot)
                return a;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u]
                  , {scroll: d, options: f} = c;
                c !== this.root && d && f.layoutScroll && (d.wasRoot && We(a, s),
                Bn(a.x, d.offset.x),
                Bn(a.y, d.offset.y))
            }
            return a
        }
        applyTransform(s, l=!1) {
            const a = ee();
            We(a, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !l && c.options.layoutScroll && c.scroll && c !== c.root && $n(a, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }),
                sn(c.latestValues) && $n(a, c.latestValues)
            }
            return sn(this.latestValues) && $n(a, this.latestValues),
            a
        }
        removeTransform(s) {
            const l = ee();
            We(l, s);
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a];
                if (!u.instance || !sn(u.latestValues))
                    continue;
                Gl(u.latestValues) && u.updateSnapshot();
                const c = ee()
                  , d = u.measurePageBox();
                We(c, d),
                Cd(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return sn(this.latestValues) && Cd(l, this.latestValues),
            l
        }
        setTargetDelta(s) {
            this.targetDelta = s,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(s) {
            this.options = {
                ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== de.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(s=!1) {
            var l;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== a;
            if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: d, layoutId: f} = this.options;
            if (!(!this.layout || !(d || f))) {
                if (this.resolvedRelativeTargetAt = de.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const g = this.getClosestProjectingParent();
                    g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = ee(),
                    this.relativeTargetOrigin = ee(),
                    Vr(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox),
                    We(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = ee(),
                    this.targetWithTransforms = ee()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    J1(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : We(this.target, this.layout.layoutBox),
                    lm(this.target, this.targetDelta)) : We(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const g = this.getClosestProjectingParent();
                        g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = ee(),
                        this.relativeTargetOrigin = ee(),
                        Vr(this.relativeTargetOrigin, this.target, g.target),
                        We(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    Tr && ln.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Gl(this.parent.latestValues) || sm(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var s;
            const l = this.getLead()
              , a = !!this.resumingFrom || this !== l;
            let u = !0;
            if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1),
            a && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
            this.resolvedRelativeTargetAt === de.timestamp && (u = !1),
            u)
                return;
            const {layout: c, layoutId: d} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(c || d))
                return;
            We(this.layoutCorrected, this.layout.layoutBox);
            const f = this.treeScale.x
              , g = this.treeScale.y;
            lx(this.layoutCorrected, this.treeScale, this.path, a),
            l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox,
            l.targetWithTransforms = ee());
            const {target: y} = l;
            if (!y) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Td(this.prevProjectionDelta.x, this.projectionDelta.x),
            Td(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Rr(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
            (this.treeScale.x !== f || this.treeScale.y !== g || !Nd(this.projectionDelta.x, this.prevProjectionDelta.x) || !Nd(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", y)),
            Tr && ln.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s=!0) {
            var l;
            if ((l = this.options.visualElement) === null || l === void 0 || l.scheduleRender(),
            s) {
                const a = this.getStack();
                a && a.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = zn(),
            this.projectionDelta = zn(),
            this.projectionDeltaWithTransform = zn()
        }
        setAnimationOrigin(s, l=!1) {
            const a = this.snapshot
              , u = a ? a.latestValues : {}
              , c = {
                ...this.latestValues
            }
              , d = zn();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !l;
            const f = ee()
              , g = a ? a.source : void 0
              , y = this.layout ? this.layout.source : void 0
              , v = g !== y
              , T = this.getStack()
              , p = !T || T.members.length <= 1
              , h = !!(v && !p && this.options.crossfade === !0 && !this.path.some(Yx));
            this.animationProgress = 0;
            let m;
            this.mixTargetDelta = x => {
                const P = x / 1e3;
                Vd(d.x, s.x, P),
                Vd(d.y, s.y, P),
                this.setTargetDelta(d),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Vr(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                Qx(this.relativeTarget, this.relativeTargetOrigin, f, P),
                m && Ex(this.relativeTarget, m) && (this.isProjectionDirty = !1),
                m || (m = ee()),
                We(m, this.relativeTarget)),
                v && (this.animationValues = c,
                wx(c, u, this.latestValues, P, h, p)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = P
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (Xt(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = W.update( () => {
                Zi.hasAnimatedSinceResize = !0,
                this.currentAnimation = Rx(0, Md, {
                    ...s,
                    onUpdate: l => {
                        this.mixTargetDelta(l),
                        s.onUpdate && s.onUpdate(l)
                    }
                    ,
                    onComplete: () => {
                        s.onComplete && s.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const s = this.getStack();
            s && s.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Md),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let {targetWithTransforms: l, target: a, layout: u, latestValues: c} = s;
            if (!(!l || !a || !u)) {
                if (this !== s && this.layout && u && xm(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    a = this.target || ee();
                    const d = Be(this.layout.layoutBox.x);
                    a.x.min = s.target.x.min,
                    a.x.max = a.x.min + d;
                    const f = Be(this.layout.layoutBox.y);
                    a.y.min = s.target.y.min,
                    a.y.max = a.y.min + f
                }
                We(l, a),
                $n(l, c),
                Rr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c)
            }
        }
        registerSharedNode(s, l) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new _x),
            this.sharedNodes.get(s).add(l);
            const u = l.options.initialPromotionConfig;
            l.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0
            })
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var s;
            const {layoutId: l} = this.options;
            return l ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
        }
        getPrevLead() {
            var s;
            const {layoutId: l} = this.options;
            return l ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
        }
        getStack() {
            const {layoutId: s} = this.options;
            if (s)
                return this.root.sharedNodes.get(s)
        }
        promote({needsReset: s, transition: l, preserveFollowOpacity: a}={}) {
            const u = this.getStack();
            u && u.promote(this, a),
            s && (this.projectionDelta = void 0,
            this.needsReset = !0),
            l && this.setOptions({
                transition: l
            })
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: s} = this.options;
            if (!s)
                return;
            let l = !1;
            const {latestValues: a} = s;
            if ((a.z || a.rotate || a.rotateX || a.rotateY || a.rotateZ || a.skewX || a.skewY) && (l = !0),
            !l)
                return;
            const u = {};
            a.z && Fs("z", s, u, this.animationValues);
            for (let c = 0; c < Is.length; c++)
                Fs(`rotate${Is[c]}`, s, u, this.animationValues),
                Fs(`skew${Is[c]}`, s, u, this.animationValues);
            s.render();
            for (const c in u)
                s.setStaticValue(c, u[c]),
                this.animationValues && (this.animationValues[c] = u[c]);
            s.scheduleRender()
        }
        getProjectionStyles(s) {
            var l, a;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return Vx;
            const u = {
                visibility: ""
            }
              , c = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                u.opacity = "",
                u.pointerEvents = qi(s == null ? void 0 : s.pointerEvents) || "",
                u.transform = c ? c(this.latestValues, "") : "none",
                u;
            const d = this.getLead();
            if (!this.projectionDelta || !this.layout || !d.target) {
                const v = {};
                return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                v.pointerEvents = qi(s == null ? void 0 : s.pointerEvents) || ""),
                this.hasProjected && !sn(this.latestValues) && (v.transform = c ? c({}, "") : "none",
                this.hasProjected = !1),
                v
            }
            const f = d.animationValues || d.latestValues;
            this.applyTransformsToTarget(),
            u.transform = Lx(this.projectionDeltaWithTransform, this.treeScale, f),
            c && (u.transform = c(f, u.transform));
            const {x: g, y} = this.projectionDelta;
            u.transformOrigin = `${g.origin * 100}% ${y.origin * 100}% 0`,
            d.animationValues ? u.opacity = d === this ? (a = (l = f.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && a !== void 0 ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
            for (const v in Ao) {
                if (f[v] === void 0)
                    continue;
                const {correct: T, applyTo: p} = Ao[v]
                  , h = u.transform === "none" ? f[v] : T(f[v], d);
                if (p) {
                    const m = p.length;
                    for (let x = 0; x < m; x++)
                        u[p[x]] = h
                } else
                    u[v] = h
            }
            return this.options.layoutId && (u.pointerEvents = d === this ? qi(s == null ? void 0 : s.pointerEvents) || "" : "none"),
            u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s => {
                var l;
                return (l = s.currentAnimation) === null || l === void 0 ? void 0 : l.stop()
            }
            ),
            this.root.nodes.forEach(Dd),
            this.root.sharedNodes.clear()
        }
    }
}
function Ix(e) {
    e.updateLayout()
}
function Fx(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: i} = e.layout
          , {animationType: o} = e.options
          , s = n.source !== e.layout.source;
        o === "size" ? He(d => {
            const f = s ? n.measuredBox[d] : n.layoutBox[d]
              , g = Be(f);
            f.min = r[d].min,
            f.max = f.min + g
        }
        ) : xm(o, n.layoutBox, r) && He(d => {
            const f = s ? n.measuredBox[d] : n.layoutBox[d]
              , g = Be(r[d]);
            f.max = f.min + g,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[d].max = e.relativeTarget[d].min + g)
        }
        );
        const l = zn();
        Rr(l, r, n.layoutBox);
        const a = zn();
        s ? Rr(a, e.applyTransform(i, !0), n.measuredBox) : Rr(a, r, n.layoutBox);
        const u = !mm(l);
        let c = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const {snapshot: f, layout: g} = d;
                if (f && g) {
                    const y = ee();
                    Vr(y, n.layoutBox, f.layoutBox);
                    const v = ee();
                    Vr(v, r, g.layoutBox),
                    gm(y, v) || (c = !0),
                    d.options.layoutRoot && (e.relativeTarget = v,
                    e.relativeTargetOrigin = y,
                    e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: a,
            layoutDelta: l,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function Ox(e) {
    Tr && ln.totalNodes++,
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function zx(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function Bx(e) {
    e.clearSnapshot()
}
function Dd(e) {
    e.clearMeasurements()
}
function $x(e) {
    e.isLayoutDirty = !1
}
function Ux(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function Rd(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function Wx(e) {
    e.resolveTargetDelta()
}
function Hx(e) {
    e.calcProjection()
}
function Kx(e) {
    e.resetSkewAndRotation()
}
function Gx(e) {
    e.removeLeadSnapshot()
}
function Vd(e, t, n) {
    e.translate = Z(t.translate, 0, n),
    e.scale = Z(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function jd(e, t, n, r) {
    e.min = Z(t.min, n.min, r),
    e.max = Z(t.max, n.max, r)
}
function Qx(e, t, n, r) {
    jd(e.x, t.x, n.x, r),
    jd(e.y, t.y, n.y, r)
}
function Yx(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const Xx = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Id = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , Fd = Id("applewebkit/") && !Id("chrome/") ? Math.round : xe;
function Od(e) {
    e.min = Fd(e.min),
    e.max = Fd(e.max)
}
function Zx(e) {
    Od(e.x),
    Od(e.y)
}
function xm(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !q1(Ad(t), Ad(n), .2)
}
function qx(e) {
    var t;
    return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}
const Jx = vm({
    attachResizeListener: (e, t) => vt(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , Os = {
    current: void 0
}
  , wm = vm({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!Os.current) {
            const e = new Jx({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            Os.current = e
        }
        return Os.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , bx = {
    pan: {
        Feature: hx
    },
    drag: {
        Feature: fx,
        ProjectionNode: wm,
        MeasureLayout: fm
    }
};
function zd(e, t) {
    const n = t ? "pointerenter" : "pointerleave"
      , r = t ? "onHoverStart" : "onHoverEnd"
      , i = (o, s) => {
        if (o.pointerType === "touch" || nm())
            return;
        const l = e.getProps();
        e.animationState && l.whileHover && e.animationState.setActive("whileHover", t);
        const a = l[r];
        a && W.postRender( () => a(o, s))
    }
    ;
    return Pt(e.current, n, i, {
        passive: !e.getProps()[r]
    })
}
class ew extends tn {
    mount() {
        this.unmount = Tt(zd(this.node, !0), zd(this.node, !1))
    }
    unmount() {}
}
class tw extends tn {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Tt(vt(this.node.current, "focus", () => this.onFocus()), vt(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const Sm = (e, t) => t ? e === t ? !0 : Sm(e, t.parentElement) : !1;
function zs(e, t) {
    if (!t)
        return;
    const n = new PointerEvent("pointer" + e);
    t(n, qo(n))
}
class nw extends tn {
    constructor() {
        super(...arguments),
        this.removeStartListeners = xe,
        this.removeEndListeners = xe,
        this.removeAccessibleListeners = xe,
        this.startPointerPress = (t, n) => {
            if (this.isPressing)
                return;
            this.removeEndListeners();
            const r = this.node.getProps()
              , o = Pt(window, "pointerup", (l, a) => {
                if (!this.checkPressEnd())
                    return;
                const {onTap: u, onTapCancel: c, globalTapTarget: d} = this.node.getProps()
                  , f = !d && !Sm(this.node.current, l.target) ? c : u;
                f && W.update( () => f(l, a))
            }
            , {
                passive: !(r.onTap || r.onPointerUp)
            })
              , s = Pt(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
                passive: !(r.onTapCancel || r.onPointerCancel)
            });
            this.removeEndListeners = Tt(o, s),
            this.startPress(t, n)
        }
        ,
        this.startAccessiblePress = () => {
            const t = o => {
                if (o.key !== "Enter" || this.isPressing)
                    return;
                const s = l => {
                    l.key !== "Enter" || !this.checkPressEnd() || zs("up", (a, u) => {
                        const {onTap: c} = this.node.getProps();
                        c && W.postRender( () => c(a, u))
                    }
                    )
                }
                ;
                this.removeEndListeners(),
                this.removeEndListeners = vt(this.node.current, "keyup", s),
                zs("down", (l, a) => {
                    this.startPress(l, a)
                }
                )
            }
              , n = vt(this.node.current, "keydown", t)
              , r = () => {
                this.isPressing && zs("cancel", (o, s) => this.cancelPress(o, s))
            }
              , i = vt(this.node.current, "blur", r);
            this.removeAccessibleListeners = Tt(n, i)
        }
    }
    startPress(t, n) {
        this.isPressing = !0;
        const {onTapStart: r, whileTap: i} = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
        r && W.postRender( () => r(t, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(),
        this.isPressing = !1,
        this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
        !nm()
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd())
            return;
        const {onTapCancel: r} = this.node.getProps();
        r && W.postRender( () => r(t, n))
    }
    mount() {
        const t = this.node.getProps()
          , n = Pt(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
            passive: !(t.onTapStart || t.onPointerStart)
        })
          , r = vt(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = Tt(n, r)
    }
    unmount() {
        this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners()
    }
}
const Yl = new WeakMap
  , Bs = new WeakMap
  , rw = e => {
    const t = Yl.get(e.target);
    t && t(e)
}
  , iw = e => {
    e.forEach(rw)
}
;
function ow({root: e, ...t}) {
    const n = e || document;
    Bs.has(n) || Bs.set(n, {});
    const r = Bs.get(n)
      , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(iw,{
        root: e,
        ...t
    })),
    r[i]
}
function sw(e, t, n) {
    const r = ow(t);
    return Yl.set(e, n),
    r.observe(e),
    () => {
        Yl.delete(e),
        r.unobserve(e)
    }
}
const lw = {
    some: 0,
    all: 1
};
class aw extends tn {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: i="some", once: o} = t
          , s = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : lw[i]
        }
          , l = a => {
            const {isIntersecting: u} = a;
            if (this.isInView === u || (this.isInView = u,
            o && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: c, onViewportLeave: d} = this.node.getProps()
              , f = u ? c : d;
            f && f(a)
        }
        ;
        return sw(this.node.current, s, l)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(uw(t, n)) && this.startObserver()
    }
    unmount() {}
}
function uw({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const cw = {
    inView: {
        Feature: aw
    },
    tap: {
        Feature: nw
    },
    focus: {
        Feature: tw
    },
    hover: {
        Feature: ew
    }
}
  , dw = {
    layout: {
        ProjectionNode: wm,
        MeasureLayout: fm
    }
}
  , Tm = L.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
})
  , Jo = L.createContext({})
  , gu = typeof window < "u"
  , fw = gu ? L.useLayoutEffect : L.useEffect
  , Pm = L.createContext({
    strict: !1
});
function hw(e, t, n, r, i) {
    var o, s;
    const {visualElement: l} = L.useContext(Jo)
      , a = L.useContext(Pm)
      , u = L.useContext(pu)
      , c = L.useContext(Tm).reducedMotion
      , d = L.useRef();
    r = r || a.renderer,
    !d.current && r && (d.current = r(e, {
        visualState: t,
        parent: l,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c
    }));
    const f = d.current
      , g = L.useContext(dm);
    f && !f.projection && i && (f.type === "html" || f.type === "svg") && pw(d.current, n, i, g);
    const y = L.useRef(!1);
    L.useInsertionEffect( () => {
        f && y.current && f.update(n, u)
    }
    );
    const v = n[Qp]
      , T = L.useRef(!!v && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, v)) && ((s = window.MotionHasOptimisedAnimation) === null || s === void 0 ? void 0 : s.call(window, v)));
    return fw( () => {
        f && (y.current = !0,
        window.MotionIsMounted = !0,
        f.updateFeatures(),
        mu.render(f.render),
        T.current && f.animationState && f.animationState.animateChanges())
    }
    ),
    L.useEffect( () => {
        f && (!T.current && f.animationState && f.animationState.animateChanges(),
        T.current && (queueMicrotask( () => {
            var p;
            (p = window.MotionHandoffMarkAsComplete) === null || p === void 0 || p.call(window, v)
        }
        ),
        T.current = !1))
    }
    ),
    f
}
function pw(e, t, n, r) {
    const {layoutId: i, layout: o, drag: s, dragConstraints: l, layoutScroll: a, layoutRoot: u} = t;
    e.projection = new n(e.latestValues,t["data-framer-portal-id"] ? void 0 : km(e.parent)),
    e.projection.setOptions({
        layoutId: i,
        layout: o,
        alwaysMeasureLayout: !!s || l && On(l),
        visualElement: e,
        animationType: typeof o == "string" ? o : "both",
        initialPromotionConfig: r,
        layoutScroll: a,
        layoutRoot: u
    })
}
function km(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : km(e.parent)
}
function mw(e, t, n) {
    return L.useCallback(r => {
        r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : On(n) && (n.current = r))
    }
    , [t])
}
function bo(e) {
    return Yo(e.animate) || Ya.some(t => br(e[t]))
}
function Cm(e) {
    return !!(bo(e) || e.variants)
}
function gw(e, t) {
    if (bo(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || br(n) ? n : void 0,
            animate: br(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function yw(e) {
    const {initial: t, animate: n} = gw(e, L.useContext(Jo));
    return L.useMemo( () => ({
        initial: t,
        animate: n
    }), [Bd(t), Bd(n)])
}
function Bd(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const $d = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , rr = {};
for (const e in $d)
    rr[e] = {
        isEnabled: t => $d[e].some(n => !!t[n])
    };
function vw(e) {
    for (const t in e)
        rr[t] = {
            ...rr[t],
            ...e[t]
        }
}
const xw = Symbol.for("motionComponentSymbol");
function ww({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i}) {
    e && vw(e);
    function o(l, a) {
        let u;
        const c = {
            ...L.useContext(Tm),
            ...l,
            layoutId: Sw(l)
        }
          , {isStatic: d} = c
          , f = yw(l)
          , g = r(l, d);
        if (!d && gu) {
            Tw();
            const y = Pw(c);
            u = y.MeasureLayout,
            f.visualElement = hw(i, g, c, t, y.ProjectionNode)
        }
        return S.jsxs(Jo.Provider, {
            value: f,
            children: [u && f.visualElement ? S.jsx(u, {
                visualElement: f.visualElement,
                ...c
            }) : null, n(i, l, mw(g, f.visualElement, a), g, d, f.visualElement)]
        })
    }
    const s = L.forwardRef(o);
    return s[xw] = i,
    s
}
function Sw({layoutId: e}) {
    const t = L.useContext(cm).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function Tw(e, t) {
    L.useContext(Pm).strict
}
function Pw(e) {
    const {drag: t, layout: n} = rr;
    if (!t && !n)
        return {};
    const r = {
        ...t,
        ...n
    };
    return {
        MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}
const kw = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function yu(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(kw.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function Em(e, {style: t, vars: n}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const o in n)
        e.style.setProperty(o, n[o])
}
const _m = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function Lm(e, t, n, r) {
    Em(e, t, void 0, r);
    for (const i in t.attrs)
        e.setAttribute(_m.has(i) ? i : hu(i), t.attrs[i])
}
function Am(e, {layout: t, layoutId: n}) {
    return Pn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Ao[e] || e === "opacity")
}
function vu(e, t, n) {
    var r;
    const {style: i} = e
      , o = {};
    for (const s in i)
        (ve(i[s]) || t.style && ve(t.style[s]) || Am(s, e) || ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[s] = i[s]);
    return o
}
function Nm(e, t, n) {
    const r = vu(e, t, n);
    for (const i in e)
        if (ve(e[i]) || ve(t[i])) {
            const o = ci.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[o] = e[i]
        }
    return r
}
function Cw(e) {
    const t = L.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
function Ew({scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n}, r, i, o) {
    const s = {
        latestValues: _w(r, i, o, e),
        renderState: t()
    };
    return n && (s.mount = l => n(r, l, s)),
    s
}
const Mm = e => (t, n) => {
    const r = L.useContext(Jo)
      , i = L.useContext(pu)
      , o = () => Ew(e, t, r, i);
    return n ? o() : Cw(o)
}
;
function _w(e, t, n, r) {
    const i = {}
      , o = r(e, {});
    for (const f in o)
        i[f] = qi(o[f]);
    let {initial: s, animate: l} = e;
    const a = bo(e)
      , u = Cm(e);
    t && u && !a && e.inherit !== !1 && (s === void 0 && (s = t.initial),
    l === void 0 && (l = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const d = c ? l : s;
    if (d && typeof d != "boolean" && !Yo(d)) {
        const f = Array.isArray(d) ? d : [d];
        for (let g = 0; g < f.length; g++) {
            const y = Ga(e, f[g]);
            if (y) {
                const {transitionEnd: v, transition: T, ...p} = y;
                for (const h in p) {
                    let m = p[h];
                    if (Array.isArray(m)) {
                        const x = c ? m.length - 1 : 0;
                        m = m[x]
                    }
                    m !== null && (i[h] = m)
                }
                for (const h in v)
                    i[h] = v[h]
            }
        }
    }
    return i
}
const xu = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
})
  , Dm = () => ({
    ...xu(),
    attrs: {}
})
  , Rm = (e, t) => t && typeof e == "number" ? t.transform(e) : e
  , Lw = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , Aw = ci.length;
function Nw(e, t, n) {
    let r = ""
      , i = !0;
    for (let o = 0; o < Aw; o++) {
        const s = ci[o]
          , l = e[s];
        if (l === void 0)
            continue;
        let a = !0;
        if (typeof l == "number" ? a = l === (s.startsWith("scale") ? 1 : 0) : a = parseFloat(l) === 0,
        !a || n) {
            const u = Rm(l, nu[s]);
            if (!a) {
                i = !1;
                const c = Lw[s] || s;
                r += `${c}(${u}) `
            }
            n && (t[s] = u)
        }
    }
    return r = r.trim(),
    n ? r = n(t, i ? "" : r) : i && (r = "none"),
    r
}
function wu(e, t, n) {
    const {style: r, vars: i, transformOrigin: o} = e;
    let s = !1
      , l = !1;
    for (const a in t) {
        const u = t[a];
        if (Pn.has(a)) {
            s = !0;
            continue
        } else if (kp(a)) {
            i[a] = u;
            continue
        } else {
            const c = Rm(u, nu[a]);
            a.startsWith("origin") ? (l = !0,
            o[a] = c) : r[a] = c
        }
    }
    if (t.transform || (s || n ? r.transform = Nw(t, e.transform, n) : r.transform && (r.transform = "none")),
    l) {
        const {originX: a="50%", originY: u="50%", originZ: c=0} = o;
        r.transformOrigin = `${a} ${u} ${c}`
    }
}
function Ud(e, t, n) {
    return typeof e == "string" ? e : R.transform(t + n * e)
}
function Mw(e, t, n) {
    const r = Ud(t, e.x, e.width)
      , i = Ud(n, e.y, e.height);
    return `${r} ${i}`
}
const Dw = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , Rw = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function Vw(e, t, n=1, r=0, i=!0) {
    e.pathLength = 1;
    const o = i ? Dw : Rw;
    e[o.offset] = R.transform(-r);
    const s = R.transform(t)
      , l = R.transform(n);
    e[o.array] = `${s} ${l}`
}
function Su(e, {attrX: t, attrY: n, attrScale: r, originX: i, originY: o, pathLength: s, pathSpacing: l=1, pathOffset: a=0, ...u}, c, d) {
    if (wu(e, u, d),
    c) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: f, style: g, dimensions: y} = e;
    f.transform && (y && (g.transform = f.transform),
    delete f.transform),
    y && (i !== void 0 || o !== void 0 || g.transform) && (g.transformOrigin = Mw(y, i !== void 0 ? i : .5, o !== void 0 ? o : .5)),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    s !== void 0 && Vw(f, s, l, a, !1)
}
const Tu = e => typeof e == "string" && e.toLowerCase() === "svg"
  , jw = {
    useVisualState: Mm({
        scrapeMotionValuesFromProps: Nm,
        createRenderState: Dm,
        onMount: (e, t, {renderState: n, latestValues: r}) => {
            W.read( () => {
                try {
                    n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
            ),
            W.render( () => {
                Su(n, r, Tu(t.tagName), e.transformTemplate),
                Lm(t, n)
            }
            )
        }
    })
}
  , Iw = {
    useVisualState: Mm({
        scrapeMotionValuesFromProps: vu,
        createRenderState: xu
    })
};
function Vm(e, t, n) {
    for (const r in t)
        !ve(t[r]) && !Am(r, n) && (e[r] = t[r])
}
function Fw({transformTemplate: e}, t) {
    return L.useMemo( () => {
        const n = xu();
        return wu(n, t, e),
        Object.assign({}, n.vars, n.style)
    }
    , [t])
}
function Ow(e, t) {
    const n = e.style || {}
      , r = {};
    return Vm(r, n, e),
    Object.assign(r, Fw(e, t)),
    r
}
function zw(e, t) {
    const n = {}
      , r = Ow(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    n.style = r,
    n
}
const Bw = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function No(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Bw.has(e)
}
let jm = e => !No(e);
function $w(e) {
    e && (jm = t => t.startsWith("on") ? !No(t) : e(t))
}
try {
    $w(require("@emotion/is-prop-valid").default)
} catch {}
function Uw(e, t, n) {
    const r = {};
    for (const i in e)
        i === "values" && typeof e.values == "object" || (jm(i) || n === !0 && No(i) || !t && !No(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
function Ww(e, t, n, r) {
    const i = L.useMemo( () => {
        const o = Dm();
        return Su(o, t, Tu(r), e.transformTemplate),
        {
            ...o.attrs,
            style: {
                ...o.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const o = {};
        Vm(o, e.style, e),
        i.style = {
            ...o,
            ...i.style
        }
    }
    return i
}
function Hw(e=!1) {
    return (n, r, i, {latestValues: o}, s) => {
        const a = (yu(n) ? Ww : zw)(r, o, s, n)
          , u = Uw(r, typeof n == "string", e)
          , c = n !== L.Fragment ? {
            ...u,
            ...a,
            ref: i
        } : {}
          , {children: d} = r
          , f = L.useMemo( () => ve(d) ? d.get() : d, [d]);
        return L.createElement(n, {
            ...c,
            children: f
        })
    }
}
function Kw(e, t) {
    return function(r, {forwardMotionProps: i}={
        forwardMotionProps: !1
    }) {
        const s = {
            ...yu(r) ? jw : Iw,
            preloadedFeatures: e,
            useRender: Hw(i),
            createVisualElement: t,
            Component: r
        };
        return ww(s)
    }
}
const Xl = {
    current: null
}
  , Im = {
    current: !1
};
function Gw() {
    if (Im.current = !0,
    !!gu)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => Xl.current = e.matches;
            e.addListener(t),
            t()
        } else
            Xl.current = !1
}
function Qw(e, t, n) {
    for (const r in t) {
        const i = t[r]
          , o = n[r];
        if (ve(i))
            e.addValue(r, i);
        else if (ve(o))
            e.addValue(r, ni(i, {
                owner: e
            }));
        else if (o !== i)
            if (e.hasValue(r)) {
                const s = e.getValue(r);
                s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i)
            } else {
                const s = e.getStaticValue(r);
                e.addValue(r, ni(s !== void 0 ? s : i, {
                    owner: e
                }))
            }
    }
    for (const r in n)
        t[r] === void 0 && e.removeValue(r);
    return t
}
const Wd = new WeakMap
  , Yw = [..._p, ge, qt]
  , Xw = e => Yw.find(Ep(e))
  , Hd = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class Zw {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: o, visualState: s}, l={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = ba,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const f = dt.now();
            this.renderScheduledAt < f && (this.renderScheduledAt = f,
            W.render(this.render, !1, !0))
        }
        ;
        const {latestValues: a, renderState: u} = s;
        this.latestValues = a,
        this.baseTarget = {
            ...a
        },
        this.initialValues = n.initial ? {
            ...a
        } : {},
        this.renderState = u,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.options = l,
        this.blockInitialAnimation = !!o,
        this.isControllingVariants = bo(n),
        this.isVariantNode = Cm(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: c, ...d} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const f in d) {
            const g = d[f];
            a[f] !== void 0 && ve(g) && g.set(a[f], !1)
        }
    }
    mount(t) {
        this.current = t,
        Wd.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (n, r) => this.bindToMotionValue(r, n)),
        Im.current || Gw(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Xl.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        Wd.delete(this.current),
        this.projection && this.projection.unmount(),
        Xt(this.notifyUpdate),
        Xt(this.render),
        this.valueSubscriptions.forEach(t => t()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const t in this.events)
            this.events[t].clear();
        for (const t in this.features) {
            const n = this.features[t];
            n && (n.unmount(),
            n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = Pn.has(t)
          , i = n.on("change", l => {
            this.latestValues[t] = l,
            this.props.onUpdate && W.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , o = n.on("renderRequest", this.scheduleRender);
        let s;
        window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)),
        this.valueSubscriptions.set(t, () => {
            i(),
            o(),
            s && s(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in rr) {
            const n = rr[t];
            if (!n)
                continue;
            const {isEnabled: r, Feature: i} = n;
            if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)),
            this.features[t]) {
                const o = this.features[t];
                o.isMounted ? o.update() : (o.mount(),
                o.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ee()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < Hd.length; r++) {
            const i = Hd[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const o = "on" + i
              , s = t[o];
            s && (this.propEventSubscriptions[i] = this.on(i, s))
        }
        this.prevMotionValues = Qw(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = ni(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t, n) {
        var r;
        let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
        return i != null && (typeof i == "string" && (Tp(i) || Sp(i)) ? i = parseFloat(i) : !Xw(i) && qt.test(n) && (i = jp(t, n)),
        this.setBaseTarget(t, ve(i) ? i.get() : i)),
        ve(i) ? i.get() : i
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {initial: r} = this.props;
        let i;
        if (typeof r == "string" || typeof r == "object") {
            const s = Ga(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            s && (i = s[t])
        }
        if (r && i !== void 0)
            return i;
        const o = this.getBaseTargetFromProps(this.props, t);
        return o !== void 0 && !ve(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new fu),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class Fm extends Zw {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = Ip
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
}
function qw(e) {
    return window.getComputedStyle(e)
}
class Jw extends Fm {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = Em
    }
    readValueFromInstance(t, n) {
        if (Pn.has(n)) {
            const r = ru(n);
            return r && r.default || 0
        } else {
            const r = qw(t)
              , i = (kp(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return am(t, n)
    }
    build(t, n, r) {
        wu(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return vu(t, n, r)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        ve(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
class bw extends Fm {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = ee
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (Pn.has(n)) {
            const r = ru(n);
            return r && r.default || 0
        }
        return n = _m.has(n) ? n : hu(n),
        t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Nm(t, n, r)
    }
    build(t, n, r) {
        Su(t, n, this.isSVGTag, r.transformTemplate)
    }
    renderInstance(t, n, r, i) {
        Lm(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = Tu(t.tagName),
        super.mount(t)
    }
}
const e2 = (e, t) => yu(e) ? new bw(t) : new Jw(t,{
    allowProjection: e !== L.Fragment
})
  , t2 = Kw({
    ...U1,
    ...cw,
    ...bx,
    ...dw
}, e2)
  , hi = Ry(t2)
  , n2 = () => S.jsxs("div", {
    className: "min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden",
    style: {
        backgroundImage: "url('/header_img.png')"
    },
    id: "Header",
    children: [S.jsx(Dy, {}), S.jsxs(hi.div, {
        initial: {
            opacity: 0,
            y: 100
        },
        transition: {
            duration: 1.5
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: !0
        },
        className: "container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white",
        children: [S.jsx("h2", {
            className: "text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20",
            children: "Explore homes that fit your dreams"
        }), S.jsxs("div", {
            className: "space-x-6 mt-16",
            children: [S.jsx("a", {
                href: "#Projects",
                className: "border border-white px-8 py-3 rounded",
                children: "Projects"
            }), S.jsx("a", {
                href: "#Contact",
                className: "bg-blue-500 px-8 py-3 rounded",
                children: "Contact Us"
            })]
        })]
    })]
})
  , r2 = () => S.jsxs(hi.div, {
    initial: {
        opacity: 0,
        x: 200
    },
    transition: {
        duration: 1
    },
    whileInView: {
        opacity: 1,
        x: 0
    },
    viewport: {
        once: !0
    },
    className: "flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden",
    id: "About",
    children: [S.jsxs("h1", {
        className: "text-2xl sm:text-4xl font-bold mb-2",
        children: ["About ", S.jsx("span", {
            className: "underline underline-offset-4 decoration-1 under font-light",
            children: "Our Brand"
        })]
    }), S.jsx("p", {
        className: "text-gray-500 max-w-80 text-center mb-8",
        children: "Passionate About Properties, Dedicated to Your Vision"
    }), S.jsxs("div", {
        className: "flex flex-col md:flex-row items-center md:items-start md:gap-20",
        children: [S.jsx("img", {
            src: Gt.brand_img,
            alt: "",
            className: "w-full sm:w-1/2 max-w-lg"
        }), S.jsxs("div", {
            className: "flex flex-col items-center md:items-start mt-10 text-gray-600",
            children: [S.jsxs("div", {
                className: "grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28",
                children: [S.jsxs("div", {
                    children: [S.jsx("p", {
                        className: "text-4xl font-medium text-gray-800",
                        children: "10+"
                    }), S.jsx("p", {
                        children: "Years of Excellence"
                    })]
                }), S.jsxs("div", {
                    children: [S.jsx("p", {
                        className: "text-4xl font-medium text-gray-800",
                        children: "12+"
                    }), S.jsx("p", {
                        children: "Projects Completed"
                    })]
                }), S.jsxs("div", {
                    children: [S.jsx("p", {
                        className: "text-4xl font-medium text-gray-800",
                        children: "20+"
                    }), S.jsx("p", {
                        children: "Mn. Sq. Ft. Delivered"
                    })]
                }), S.jsxs("div", {
                    children: [S.jsx("p", {
                        className: "text-4xl font-medium text-gray-800",
                        children: "25+"
                    }), S.jsx("p", {
                        children: "Ongoing Projects"
                    })]
                })]
            }), S.jsx("p", {
                className: "my-10 max-w-lg",
                children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }), S.jsx("button", {
                className: "bg-blue-600 text-white px-8 py-2 rounded",
                children: "Learn more"
            })]
        })]
    })]
})
  , i2 = () => {
    const [e,t] = L.useState(0)
      , [n,r] = L.useState(1);
    L.useEffect( () => {
        const s = () => {
            window.innerWidth >= 1024 ? r(Mi.length) : r(1)
        }
        ;
        return s(),
        window.addEventListener("resize", s),
        () => window.removeEventListener("resize", s)
    }
    , []);
    const i = () => {
        t(s => (s + 1) % Mi.length)
    }
      , o = () => {
        t(s => s === 0 ? Mi.length - 1 : s - 1)
    }
    ;
    return S.jsxs(hi.div, {
        initial: {
            opacity: 0,
            x: -200
        },
        transition: {
            duration: 1
        },
        whileInView: {
            opacity: 1,
            x: 0
        },
        viewport: {
            once: !0
        },
        className: "container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden",
        id: "Projects",
        children: [S.jsxs("h1", {
            className: "text-2xl sm:text-4xl font-bold mb-2 text-center",
            children: ["Projects ", S.jsx("span", {
                className: "underline underline-offset-4 decoration-1 under font-light",
                children: "Completed"
            })]
        }), S.jsx("p", {
            className: "text-center text-gray-500 mb-8 max-w-80 mx-auto",
            children: "Crafting Spaces, Building Legacies—Explore Our Portfolio"
        }), S.jsxs("div", {
            className: "flex justify-end items-center mb-8",
            children: [S.jsx("button", {
                onClick: o,
                className: "p-3 bg-gray-200 rounded mr-2",
                "aria-label": "Previous Project",
                children: S.jsx("img", {
                    src: Gt.left_arrow,
                    alt: "Previous"
                })
            }), S.jsx("button", {
                onClick: i,
                className: "p-3 bg-gray-200 rounded mr-2",
                "aria-label": "Next Project",
                children: S.jsx("img", {
                    src: Gt.right_arrow,
                    alt: "Next"
                })
            })]
        }), S.jsx("div", {
            className: "overflow-hidden",
            children: S.jsx("div", {
                className: "flex gap-8 transition-transform duration-500 ease-in-out",
                style: {
                    transform: `translateX(-${e * 100 / n}%)`
                },
                children: Mi.map( (s, l) => S.jsxs("div", {
                    className: "relative flex-shrink-0 w-full sm:w-1/4",
                    children: [S.jsx("img", {
                        src: s.image,
                        alt: s.title,
                        className: "w-full h-auto mb-14"
                    }), S.jsx("div", {
                        className: "absolute left-0 right-0 bottom-5 flex justify-center",
                        children: S.jsxs("div", {
                            className: "inline-block bg-white w-3/4 px-4 py-2 shadow-md",
                            children: [S.jsx("h2", {
                                className: "text-xl font-semibold text-gray-800",
                                children: s.title
                            }), S.jsxs("p", {
                                className: "text-gray-500 text-sm",
                                children: [s.price, " ", S.jsx("span", {
                                    className: "px-1",
                                    children: "|"
                                }), " ", s.location]
                            })]
                        })
                    })]
                }, l))
            })
        })]
    })
}
  , o2 = () => S.jsxs(hi.div, {
    initial: {
        opacity: 0,
        x: 100
    },
    transition: {
        duration: 1
    },
    whileInView: {
        opacity: 1,
        x: 0
    },
    viewport: {
        once: !0
    },
    className: "container mx-auto py-10 lg:px-32 w-full overflow-hidden",
    id: "Testimonials",
    children: [S.jsxs("h1", {
        className: "text-2xl sm:text-4xl font-bold mb-2 text-center",
        children: ["Customer ", S.jsx("span", {
            className: "underline underline-offset-4 decoration-1 under font-light",
            children: "Testimonials"
        })]
    }), S.jsx("p", {
        className: "text-center text-gray-500 mb-12 max-w-80 mx-auto",
        children: "Real Stories from Those Who Found Home with Us"
    }), S.jsx("div", {
        className: "flex flex-wrap justify-center gap-8",
        children: My.map( (e, t) => S.jsxs("div", {
            className: "max-w-[340px] border shadow-lg rounded px-8 py-12 text-center",
            children: [S.jsx("img", {
                className: "w-20 h-20 rounded-full mx-auto mb-4",
                src: e.image,
                alt: e.alt
            }), S.jsx("h2", {
                className: "text-xl text-gray-700 font-medium",
                children: e.name
            }), S.jsx("p", {
                className: "text-gray-500 mb-4 text-sm",
                children: e.title
            }), S.jsx("div", {
                className: "flex justify-center gap-1 text-red-500 mb-4",
                children: Array.from({
                    length: e.rating
                }, (n, r) => S.jsx("img", {
                    src: Gt.star_icon,
                    alt: ""
                }, r))
            }), S.jsx("p", {
                className: "text-gray-600",
                children: e.text
            })]
        }, t))
    })]
});
function Om(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++)
                e[t] && (n = Om(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function Ft() {
    for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
        (e = arguments[n]) && (t = Om(e)) && (r && (r += " "),
        r += t);
    return r
}
const ri = e => typeof e == "number" && !isNaN(e)
  , mn = e => typeof e == "string"
  , Fe = e => typeof e == "function"
  , Ji = e => mn(e) || Fe(e) ? e : null
  , Zl = e => L.isValidElement(e) || mn(e) || Fe(e) || ri(e);
function s2(e, t, n) {
    n === void 0 && (n = 300);
    const {scrollHeight: r, style: i} = e;
    requestAnimationFrame( () => {
        i.minHeight = "initial",
        i.height = r + "px",
        i.transition = `all ${n}ms`,
        requestAnimationFrame( () => {
            i.height = "0",
            i.padding = "0",
            i.margin = "0",
            setTimeout(t, n)
        }
        )
    }
    )
}
function es(e) {
    let {enter: t, exit: n, appendPosition: r=!1, collapse: i=!0, collapseDuration: o=300} = e;
    return function(s) {
        let {children: l, position: a, preventExitTransition: u, done: c, nodeRef: d, isIn: f, playToast: g} = s;
        const y = r ? `${t}--${a}` : t
          , v = r ? `${n}--${a}` : n
          , T = L.useRef(0);
        return L.useLayoutEffect( () => {
            const p = d.current
              , h = y.split(" ")
              , m = x => {
                x.target === d.current && (g(),
                p.removeEventListener("animationend", m),
                p.removeEventListener("animationcancel", m),
                T.current === 0 && x.type !== "animationcancel" && p.classList.remove(...h))
            }
            ;
            p.classList.add(...h),
            p.addEventListener("animationend", m),
            p.addEventListener("animationcancel", m)
        }
        , []),
        L.useEffect( () => {
            const p = d.current
              , h = () => {
                p.removeEventListener("animationend", h),
                i ? s2(p, c, o) : c()
            }
            ;
            f || (u ? h() : (T.current = 1,
            p.className += ` ${v}`,
            p.addEventListener("animationend", h)))
        }
        , [f]),
        U.createElement(U.Fragment, null, l)
    }
}
function Kd(e, t) {
    return e != null ? {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t
    } : {}
}
const Pe = new Map;
let ii = [];
const ql = new Set
  , l2 = e => ql.forEach(t => t(e))
  , zm = () => Pe.size > 0;
function Bm(e, t) {
    var n;
    if (t)
        return !((n = Pe.get(t)) == null || !n.isToastActive(e));
    let r = !1;
    return Pe.forEach(i => {
        i.isToastActive(e) && (r = !0)
    }
    ),
    r
}
function $m(e, t) {
    Zl(e) && (zm() || ii.push({
        content: e,
        options: t
    }),
    Pe.forEach(n => {
        n.buildToast(e, t)
    }
    ))
}
function Gd(e, t) {
    Pe.forEach(n => {
        t != null && t != null && t.containerId ? (t == null ? void 0 : t.containerId) === n.id && n.toggle(e, t == null ? void 0 : t.id) : n.toggle(e, t == null ? void 0 : t.id)
    }
    )
}
function a2(e) {
    const {subscribe: t, getSnapshot: n, setProps: r} = L.useRef(function(o) {
        const s = o.containerId || 1;
        return {
            subscribe(l) {
                const a = function(c, d, f) {
                    let g = 1
                      , y = 0
                      , v = []
                      , T = []
                      , p = []
                      , h = d;
                    const m = new Map
                      , x = new Set
                      , P = () => {
                        p = Array.from(m.values()),
                        x.forEach(w => w())
                    }
                      , C = w => {
                        T = w == null ? [] : T.filter(M => M !== w),
                        P()
                    }
                      , E = w => {
                        const {toastId: M, onOpen: N, updateId: $, children: ae} = w.props
                          , _e = $ == null;
                        w.staleId && m.delete(w.staleId),
                        m.set(M, w),
                        T = [...T, w.props.toastId].filter(Le => Le !== w.staleId),
                        P(),
                        f(Kd(w, _e ? "added" : "updated")),
                        _e && Fe(N) && N(L.isValidElement(ae) && ae.props)
                    }
                    ;
                    return {
                        id: c,
                        props: h,
                        observe: w => (x.add(w),
                        () => x.delete(w)),
                        toggle: (w, M) => {
                            m.forEach(N => {
                                M != null && M !== N.props.toastId || Fe(N.toggle) && N.toggle(w)
                            }
                            )
                        }
                        ,
                        removeToast: C,
                        toasts: m,
                        clearQueue: () => {
                            y -= v.length,
                            v = []
                        }
                        ,
                        buildToast: (w, M) => {
                            if ((z => {
                                let {containerId: ue, toastId: re, updateId: Ae} = z;
                                const Se = ue ? ue !== c : c !== 1
                                  , it = m.has(re) && Ae == null;
                                return Se || it
                            }
                            )(M))
                                return;
                            const {toastId: N, updateId: $, data: ae, staleId: _e, delay: Le} = M
                              , ft = () => {
                                C(N)
                            }
                              , ht = $ == null;
                            ht && y++;
                            const F = {
                                ...h,
                                style: h.toastStyle,
                                key: g++,
                                ...Object.fromEntries(Object.entries(M).filter(z => {
                                    let[ue,re] = z;
                                    return re != null
                                }
                                )),
                                toastId: N,
                                updateId: $,
                                data: ae,
                                closeToast: ft,
                                isIn: !1,
                                className: Ji(M.className || h.toastClassName),
                                bodyClassName: Ji(M.bodyClassName || h.bodyClassName),
                                progressClassName: Ji(M.progressClassName || h.progressClassName),
                                autoClose: !M.isLoading && (_ = M.autoClose,
                                D = h.autoClose,
                                _ === !1 || ri(_) && _ > 0 ? _ : D),
                                deleteToast() {
                                    const z = m.get(N)
                                      , {onClose: ue, children: re} = z.props;
                                    Fe(ue) && ue(L.isValidElement(re) && re.props),
                                    f(Kd(z, "removed")),
                                    m.delete(N),
                                    y--,
                                    y < 0 && (y = 0),
                                    v.length > 0 ? E(v.shift()) : P()
                                }
                            };
                            var _, D;
                            F.closeButton = h.closeButton,
                            M.closeButton === !1 || Zl(M.closeButton) ? F.closeButton = M.closeButton : M.closeButton === !0 && (F.closeButton = !Zl(h.closeButton) || h.closeButton);
                            let V = w;
                            L.isValidElement(w) && !mn(w.type) ? V = L.cloneElement(w, {
                                closeToast: ft,
                                toastProps: F,
                                data: ae
                            }) : Fe(w) && (V = w({
                                closeToast: ft,
                                toastProps: F,
                                data: ae
                            }));
                            const O = {
                                content: V,
                                props: F,
                                staleId: _e
                            };
                            h.limit && h.limit > 0 && y > h.limit && ht ? v.push(O) : ri(Le) ? setTimeout( () => {
                                E(O)
                            }
                            , Le) : E(O)
                        }
                        ,
                        setProps(w) {
                            h = w
                        },
                        setToggle: (w, M) => {
                            m.get(w).toggle = M
                        }
                        ,
                        isToastActive: w => T.some(M => M === w),
                        getSnapshot: () => p
                    }
                }(s, o, l2);
                Pe.set(s, a);
                const u = a.observe(l);
                return ii.forEach(c => $m(c.content, c.options)),
                ii = [],
                () => {
                    u(),
                    Pe.delete(s)
                }
            },
            setProps(l) {
                var a;
                (a = Pe.get(s)) == null || a.setProps(l)
            },
            getSnapshot() {
                var l;
                return (l = Pe.get(s)) == null ? void 0 : l.getSnapshot()
            }
        }
    }(e)).current;
    r(e);
    const i = L.useSyncExternalStore(t, n, n);
    return {
        getToastToRender: function(o) {
            if (!i)
                return [];
            const s = new Map;
            return e.newestOnTop && i.reverse(),
            i.forEach(l => {
                const {position: a} = l.props;
                s.has(a) || s.set(a, []),
                s.get(a).push(l)
            }
            ),
            Array.from(s, l => o(l[0], l[1]))
        },
        isToastActive: Bm,
        count: i == null ? void 0 : i.length
    }
}
function u2(e) {
    const [t,n] = L.useState(!1)
      , [r,i] = L.useState(!1)
      , o = L.useRef(null)
      , s = L.useRef({
        start: 0,
        delta: 0,
        removalDistance: 0,
        canCloseOnClick: !0,
        canDrag: !1,
        didMove: !1
    }).current
      , {autoClose: l, pauseOnHover: a, closeToast: u, onClick: c, closeOnClick: d} = e;
    var f, g;
    function y() {
        n(!0)
    }
    function v() {
        n(!1)
    }
    function T(m) {
        const x = o.current;
        s.canDrag && x && (s.didMove = !0,
        t && v(),
        s.delta = e.draggableDirection === "x" ? m.clientX - s.start : m.clientY - s.start,
        s.start !== m.clientX && (s.canCloseOnClick = !1),
        x.style.transform = `translate3d(${e.draggableDirection === "x" ? `${s.delta}px, var(--y)` : `0, calc(${s.delta}px + var(--y))`},0)`,
        x.style.opacity = "" + (1 - Math.abs(s.delta / s.removalDistance)))
    }
    function p() {
        document.removeEventListener("pointermove", T),
        document.removeEventListener("pointerup", p);
        const m = o.current;
        if (s.canDrag && s.didMove && m) {
            if (s.canDrag = !1,
            Math.abs(s.delta) > s.removalDistance)
                return i(!0),
                e.closeToast(),
                void e.collapseAll();
            m.style.transition = "transform 0.2s, opacity 0.2s",
            m.style.removeProperty("transform"),
            m.style.removeProperty("opacity")
        }
    }
    (g = Pe.get((f = {
        id: e.toastId,
        containerId: e.containerId,
        fn: n
    }).containerId || 1)) == null || g.setToggle(f.id, f.fn),
    L.useEffect( () => {
        if (e.pauseOnFocusLoss)
            return document.hasFocus() || v(),
            window.addEventListener("focus", y),
            window.addEventListener("blur", v),
            () => {
                window.removeEventListener("focus", y),
                window.removeEventListener("blur", v)
            }
    }
    , [e.pauseOnFocusLoss]);
    const h = {
        onPointerDown: function(m) {
            if (e.draggable === !0 || e.draggable === m.pointerType) {
                s.didMove = !1,
                document.addEventListener("pointermove", T),
                document.addEventListener("pointerup", p);
                const x = o.current;
                s.canCloseOnClick = !0,
                s.canDrag = !0,
                x.style.transition = "none",
                e.draggableDirection === "x" ? (s.start = m.clientX,
                s.removalDistance = x.offsetWidth * (e.draggablePercent / 100)) : (s.start = m.clientY,
                s.removalDistance = x.offsetHeight * (e.draggablePercent === 80 ? 1.5 * e.draggablePercent : e.draggablePercent) / 100)
            }
        },
        onPointerUp: function(m) {
            const {top: x, bottom: P, left: C, right: E} = o.current.getBoundingClientRect();
            m.nativeEvent.type !== "touchend" && e.pauseOnHover && m.clientX >= C && m.clientX <= E && m.clientY >= x && m.clientY <= P ? v() : y()
        }
    };
    return l && a && (h.onMouseEnter = v,
    e.stacked || (h.onMouseLeave = y)),
    d && (h.onClick = m => {
        c && c(m),
        s.canCloseOnClick && u()
    }
    ),
    {
        playToast: y,
        pauseToast: v,
        isRunning: t,
        preventExitTransition: r,
        toastRef: o,
        eventHandlers: h
    }
}
function c2(e) {
    let {delay: t, isRunning: n, closeToast: r, type: i="default", hide: o, className: s, style: l, controlledProgress: a, progress: u, rtl: c, isIn: d, theme: f} = e;
    const g = o || a && u === 0
      , y = {
        ...l,
        animationDuration: `${t}ms`,
        animationPlayState: n ? "running" : "paused"
    };
    a && (y.transform = `scaleX(${u})`);
    const v = Ft("Toastify__progress-bar", a ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${f}`, `Toastify__progress-bar--${i}`, {
        "Toastify__progress-bar--rtl": c
    })
      , T = Fe(s) ? s({
        rtl: c,
        type: i,
        defaultClassName: v
    }) : Ft(v, s)
      , p = {
        [a && u >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: a && u < 1 ? null : () => {
            d && r()
        }
    };
    return U.createElement("div", {
        className: "Toastify__progress-bar--wrp",
        "data-hidden": g
    }, U.createElement("div", {
        className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${i}`
    }), U.createElement("div", {
        role: "progressbar",
        "aria-hidden": g ? "true" : "false",
        "aria-label": "notification timer",
        className: T,
        style: y,
        ...p
    }))
}
let d2 = 1;
const Um = () => "" + d2++;
function f2(e) {
    return e && (mn(e.toastId) || ri(e.toastId)) ? e.toastId : Um()
}
function jr(e, t) {
    return $m(e, t),
    t.toastId
}
function Mo(e, t) {
    return {
        ...t,
        type: t && t.type || e,
        toastId: f2(t)
    }
}
function ji(e) {
    return (t, n) => jr(t, Mo(e, n))
}
function H(e, t) {
    return jr(e, Mo("default", t))
}
H.loading = (e, t) => jr(e, Mo("default", {
    isLoading: !0,
    autoClose: !1,
    closeOnClick: !1,
    closeButton: !1,
    draggable: !1,
    ...t
})),
H.promise = function(e, t, n) {
    let r, {pending: i, error: o, success: s} = t;
    i && (r = mn(i) ? H.loading(i, n) : H.loading(i.render, {
        ...n,
        ...i
    }));
    const l = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null
    }
      , a = (c, d, f) => {
        if (d == null)
            return void H.dismiss(r);
        const g = {
            type: c,
            ...l,
            ...n,
            data: f
        }
          , y = mn(d) ? {
            render: d
        } : d;
        return r ? H.update(r, {
            ...g,
            ...y
        }) : H(y.render, {
            ...g,
            ...y
        }),
        f
    }
      , u = Fe(e) ? e() : e;
    return u.then(c => a("success", s, c)).catch(c => a("error", o, c)),
    u
}
,
H.success = ji("success"),
H.info = ji("info"),
H.error = ji("error"),
H.warning = ji("warning"),
H.warn = H.warning,
H.dark = (e, t) => jr(e, Mo("default", {
    theme: "dark",
    ...t
})),
H.dismiss = function(e) {
    (function(t) {
        var n;
        if (zm()) {
            if (t == null || mn(n = t) || ri(n))
                Pe.forEach(r => {
                    r.removeToast(t)
                }
                );
            else if (t && ("containerId"in t || "id"in t)) {
                const r = Pe.get(t.containerId);
                r ? r.removeToast(t.id) : Pe.forEach(i => {
                    i.removeToast(t.id)
                }
                )
            }
        } else
            ii = ii.filter(r => t != null && r.options.toastId !== t)
    }
    )(e)
}
,
H.clearWaitingQueue = function(e) {
    e === void 0 && (e = {}),
    Pe.forEach(t => {
        !t.props.limit || e.containerId && t.id !== e.containerId || t.clearQueue()
    }
    )
}
,
H.isActive = Bm,
H.update = function(e, t) {
    t === void 0 && (t = {});
    const n = ( (r, i) => {
        var o;
        let {containerId: s} = i;
        return (o = Pe.get(s || 1)) == null ? void 0 : o.toasts.get(r)
    }
    )(e, t);
    if (n) {
        const {props: r, content: i} = n
          , o = {
            delay: 100,
            ...r,
            ...t,
            toastId: t.toastId || e,
            updateId: Um()
        };
        o.toastId !== e && (o.staleId = e);
        const s = o.render || i;
        delete o.render,
        jr(s, o)
    }
}
,
H.done = e => {
    H.update(e, {
        progress: 1
    })
}
,
H.onChange = function(e) {
    return ql.add(e),
    () => {
        ql.delete(e)
    }
}
,
H.play = e => Gd(!0, e),
H.pause = e => Gd(!1, e);
const h2 = typeof window < "u" ? L.useLayoutEffect : L.useEffect
  , Ii = e => {
    let {theme: t, type: n, isLoading: r, ...i} = e;
    return U.createElement("svg", {
        viewBox: "0 0 24 24",
        width: "100%",
        height: "100%",
        fill: t === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`,
        ...i
    })
}
  , $s = {
    info: function(e) {
        return U.createElement(Ii, {
            ...e
        }, U.createElement("path", {
            d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
        }))
    },
    warning: function(e) {
        return U.createElement(Ii, {
            ...e
        }, U.createElement("path", {
            d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
        }))
    },
    success: function(e) {
        return U.createElement(Ii, {
            ...e
        }, U.createElement("path", {
            d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
        }))
    },
    error: function(e) {
        return U.createElement(Ii, {
            ...e
        }, U.createElement("path", {
            d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
        }))
    },
    spinner: function() {
        return U.createElement("div", {
            className: "Toastify__spinner"
        })
    }
}
  , p2 = e => {
    const {isRunning: t, preventExitTransition: n, toastRef: r, eventHandlers: i, playToast: o} = u2(e)
      , {closeButton: s, children: l, autoClose: a, onClick: u, type: c, hideProgressBar: d, closeToast: f, transition: g, position: y, className: v, style: T, bodyClassName: p, bodyStyle: h, progressClassName: m, progressStyle: x, updateId: P, role: C, progress: E, rtl: w, toastId: M, deleteToast: N, isIn: $, isLoading: ae, closeOnClick: _e, theme: Le} = e
      , ft = Ft("Toastify__toast", `Toastify__toast-theme--${Le}`, `Toastify__toast--${c}`, {
        "Toastify__toast--rtl": w
    }, {
        "Toastify__toast--close-on-click": _e
    })
      , ht = Fe(v) ? v({
        rtl: w,
        position: y,
        type: c,
        defaultClassName: ft
    }) : Ft(ft, v)
      , F = function(O) {
        let {theme: z, type: ue, isLoading: re, icon: Ae} = O
          , Se = null;
        const it = {
            theme: z,
            type: ue
        };
        return Ae === !1 || (Fe(Ae) ? Se = Ae({
            ...it,
            isLoading: re
        }) : L.isValidElement(Ae) ? Se = L.cloneElement(Ae, it) : re ? Se = $s.spinner() : (Wm => Wm in $s)(ue) && (Se = $s[ue](it))),
        Se
    }(e)
      , _ = !!E || !a
      , D = {
        closeToast: f,
        type: c,
        theme: Le
    };
    let V = null;
    return s === !1 || (V = Fe(s) ? s(D) : L.isValidElement(s) ? L.cloneElement(s, D) : function(O) {
        let {closeToast: z, theme: ue, ariaLabel: re="close"} = O;
        return U.createElement("button", {
            className: `Toastify__close-button Toastify__close-button--${ue}`,
            type: "button",
            onClick: Ae => {
                Ae.stopPropagation(),
                z(Ae)
            }
            ,
            "aria-label": re
        }, U.createElement("svg", {
            "aria-hidden": "true",
            viewBox: "0 0 14 16"
        }, U.createElement("path", {
            fillRule: "evenodd",
            d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
        })))
    }(D)),
    U.createElement(g, {
        isIn: $,
        done: N,
        position: y,
        preventExitTransition: n,
        nodeRef: r,
        playToast: o
    }, U.createElement("div", {
        id: M,
        onClick: u,
        "data-in": $,
        className: ht,
        ...i,
        style: T,
        ref: r
    }, U.createElement("div", {
        ...$ && {
            role: C
        },
        className: Fe(p) ? p({
            type: c
        }) : Ft("Toastify__toast-body", p),
        style: h
    }, F != null && U.createElement("div", {
        className: Ft("Toastify__toast-icon", {
            "Toastify--animate-icon Toastify__zoom-enter": !ae
        })
    }, F), U.createElement("div", null, l)), V, U.createElement(c2, {
        ...P && !_ ? {
            key: `pb-${P}`
        } : {},
        rtl: w,
        theme: Le,
        delay: a,
        isRunning: t,
        isIn: $,
        closeToast: f,
        hide: d,
        type: c,
        style: x,
        className: m,
        controlledProgress: _,
        progress: E || 0
    })))
}
  , ts = function(e, t) {
    return t === void 0 && (t = !1),
    {
        enter: `Toastify--animate Toastify__${e}-enter`,
        exit: `Toastify--animate Toastify__${e}-exit`,
        appendPosition: t
    }
}
  , m2 = es(ts("bounce", !0));
es(ts("slide", !0));
es(ts("zoom"));
es(ts("flip"));
const g2 = {
    position: "top-right",
    transition: m2,
    autoClose: 5e3,
    closeButton: !0,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    draggable: "touch",
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light"
};
function y2(e) {
    let t = {
        ...g2,
        ...e
    };
    const n = e.stacked
      , [r,i] = L.useState(!0)
      , o = L.useRef(null)
      , {getToastToRender: s, isToastActive: l, count: a} = a2(t)
      , {className: u, style: c, rtl: d, containerId: f} = t;
    function g(v) {
        const T = Ft("Toastify__toast-container", `Toastify__toast-container--${v}`, {
            "Toastify__toast-container--rtl": d
        });
        return Fe(u) ? u({
            position: v,
            rtl: d,
            defaultClassName: T
        }) : Ft(T, Ji(u))
    }
    function y() {
        n && (i(!0),
        H.play())
    }
    return h2( () => {
        if (n) {
            var v;
            const T = o.current.querySelectorAll('[data-in="true"]')
              , p = 12
              , h = (v = t.position) == null ? void 0 : v.includes("top");
            let m = 0
              , x = 0;
            Array.from(T).reverse().forEach( (P, C) => {
                const E = P;
                E.classList.add("Toastify__toast--stacked"),
                C > 0 && (E.dataset.collapsed = `${r}`),
                E.dataset.pos || (E.dataset.pos = h ? "top" : "bot");
                const w = m * (r ? .2 : 1) + (r ? 0 : p * C);
                E.style.setProperty("--y", `${h ? w : -1 * w}px`),
                E.style.setProperty("--g", `${p}`),
                E.style.setProperty("--s", "" + (1 - (r ? x : 0))),
                m += E.offsetHeight,
                x += .025
            }
            )
        }
    }
    , [r, a, n]),
    U.createElement("div", {
        ref: o,
        className: "Toastify",
        id: f,
        onMouseEnter: () => {
            n && (i(!1),
            H.pause())
        }
        ,
        onMouseLeave: y
    }, s( (v, T) => {
        const p = T.length ? {
            ...c
        } : {
            ...c,
            pointerEvents: "none"
        };
        return U.createElement("div", {
            className: g(v),
            style: p,
            key: `container-${v}`
        }, T.map(h => {
            let {content: m, props: x} = h;
            return U.createElement(p2, {
                ...x,
                stacked: n,
                collapseAll: y,
                isIn: l(x.toastId, x.containerId),
                style: x.style,
                key: `toast-${x.key}`
            }, m)
        }
        ))
    }
    ))
}
const v2 = () => {
    const [e,t] = U.useState("")
      , n = async r => {
        r.preventDefault(),
        t("Sending....");
        const i = new FormData(r.target);
        i.append("access_key", "b4287e95-78e7-471b-86c2-31da0db0ff2b");
        const s = await (await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: i
        })).json();
        s.success ? (t(""),
        H.success("Form Submitted Successfully"),
        r.target.reset()) : (console.log("Error", s),
        H.error(s.message),
        t(""))
    }
    ;
    return S.jsxs(hi.div, {
        initial: {
            opacity: 0,
            x: -200
        },
        transition: {
            duration: 1
        },
        whileInView: {
            opacity: 1,
            x: 0
        },
        viewport: {
            once: !0
        },
        className: "text-center p-6 py-20 lg:px-32 w-full overflow-hidden",
        id: "Contact",
        children: [S.jsxs("h1", {
            className: "text-2xl sm:text-4xl font-bold mb-2 text-center",
            children: ["Contact ", S.jsx("span", {
                className: "underline underline-offset-4 decoration-1 under font-light",
                children: "With Us"
            })]
        }), S.jsx("p", {
            className: "text-center text-gray-500 mb-12 max-w-80 mx-auto",
            children: "Ready to Make a Move? Let’s Build Your Future Together"
        }), S.jsxs("form", {
            onSubmit: n,
            className: "max-w-2xl mx-auto text-gray-600 pt-8",
            children: [S.jsxs("div", {
                className: "flex flex-wrap",
                children: [S.jsxs("div", {
                    className: "w-full md:w-1/2 text-left",
                    children: ["Your Name", S.jsx("input", {
                        className: "w-full border border-gray-300 rounded py-3 px-4 mt-2",
                        type: "text",
                        name: "Name",
                        placeholder: "Your Name",
                        required: !0
                    })]
                }), S.jsxs("div", {
                    className: "w-full md:w-1/2 text-left md:pl-4",
                    children: ["Your Email", S.jsx("input", {
                        className: "w-full border border-gray-300 rounded py-3 px-4 mt-2",
                        type: "email",
                        name: "Email",
                        placeholder: "Your Email",
                        required: !0
                    })]
                })]
            }), S.jsxs("div", {
                className: "my-6 text-left",
                children: ["Message", S.jsx("textarea", {
                    className: "w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none",
                    name: "Message",
                    placeholder: "Message",
                    required: !0
                })]
            }), S.jsx("button", {
                className: "bg-blue-600 text-white py-2 px-12 mb-10 rounded",
                children: e || "Send Message"
            })]
        })]
    })
}
  , x2 = () => S.jsxs("div", {
    className: "pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden",
    id: "Footer",
    children: [S.jsxs("div", {
        className: "container mx-auto flex flex-col md:flex-row justify-between items-start",
        children: [S.jsxs("div", {
            className: "w-full md:w-1/3 mb-8 md:mb-0",
            children: [S.jsx("img", {
                src: Gt.logo_dark,
                alt: ""
            }), S.jsx("p", {
                className: "text-gray-400 mt-4",
                children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
            })]
        }), S.jsxs("div", {
            className: "w-full md:w-1/5 mb-8 md:mb-0",
            children: [S.jsx("h3", {
                className: "text-white text-lg font-bold mb-4",
                children: "Company"
            }), S.jsxs("ul", {
                className: "flex flex-col gap-2 text-gray-400",
                children: [S.jsx("a", {
                    href: "#Header",
                    className: "hover:text-white",
                    children: "Home"
                }), S.jsx("a", {
                    href: "#About",
                    className: "hover:text-white",
                    children: "About us"
                }), S.jsx("a", {
                    href: "#Contact",
                    className: "hover:text-white",
                    children: "Contact us"
                }), S.jsx("a", {
                    href: "#",
                    className: "hover:text-white",
                    children: "Privacy policy"
                })]
            })]
        }), S.jsxs("div", {
            className: "w-full md:w-1/3",
            children: [S.jsx("h3", {
                className: "text-white text-lg font-bold mb-4",
                children: "Subscribe to our newsletter"
            }), S.jsx("p", {
                className: "text-gray-400 mb-4 max-w-80",
                children: "The latest news, articles, and resources, sent to your inbox weekly."
            }), S.jsxs("div", {
                className: "flex gap-2",
                children: [S.jsx("input", {
                    type: "email",
                    placeholder: "Enter your email",
                    className: "p-2 rounded bg-gray-800 text-gray-400 broder border-gray-700 focus:outline-none w-full md:w-auto"
                }), S.jsx("button", {
                    className: "py-2 px-4 rounded bg-blue-500 text-white",
                    children: "Subscribe"
                })]
            })]
        })]
    }), S.jsx("div", {
        className: "border-t border-gray-700 py-4 mt-10  text-center text-gray-500",
        children: "Copyright 2024 © GreatStack. All Right Reserved."
    })]
})
  , w2 = () => S.jsxs("div", {
    className: "w-full overflow-hidden",
    children: [S.jsx(y2, {}), S.jsx(n2, {}), S.jsx(r2, {}), S.jsx(i2, {}), S.jsx(o2, {}), S.jsx(v2, {}), S.jsx(x2, {})]
});
sp(document.getElementById("root")).render(S.jsx(L.StrictMode, {
    children: S.jsx(w2, {})
}));
