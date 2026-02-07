import * as u from "react";
import ie, { forwardRef as Vn, createElement as Wr, useContext as Vr, createContext as la, useId as Nl, useState as qe, useCallback as ye, useMemo as rt, useRef as an, useReducer as Il, useEffect as wn, useImperativeHandle as Ll, Fragment as Fl, useLayoutEffect as zl } from "react";
import * as Bn from "react-dom";
import $l from "react-dom";
function lo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var sn = { exports: {} }, $t = {};
var $o;
function Wl() {
  if ($o) return $t;
  $o = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function t(r, o, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), o.key !== void 0 && (a = "" + o.key), "key" in o) {
      i = {};
      for (var s in o)
        s !== "key" && (i[s] = o[s]);
    } else i = o;
    return o = i.ref, {
      $$typeof: e,
      type: r,
      key: a,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return $t.Fragment = n, $t.jsx = t, $t.jsxs = t, $t;
}
var Wt = {};
var Wo;
function Vl() {
  return Wo || (Wo = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(b) {
      if (b == null) return null;
      if (typeof b == "function")
        return b.$$typeof === X ? null : b.displayName || b.name || null;
      if (typeof b == "string") return b;
      switch (b) {
        case g:
          return "Fragment";
        case C:
          return "Profiler";
        case y:
          return "StrictMode";
        case N:
          return "Suspense";
        case j:
          return "SuspenseList";
        case V:
          return "Activity";
      }
      if (typeof b == "object")
        switch (typeof b.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), b.$$typeof) {
          case m:
            return "Portal";
          case E:
            return b.displayName || "Context";
          case S:
            return (b._context.displayName || "Context") + ".Consumer";
          case w:
            var O = b.render;
            return b = b.displayName, b || (b = O.displayName || O.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
          case P:
            return O = b.displayName || null, O !== null ? O : e(b.type) || "Memo";
          case I:
            O = b._payload, b = b._init;
            try {
              return e(b(O));
            } catch {
            }
        }
      return null;
    }
    function n(b) {
      return "" + b;
    }
    function t(b) {
      try {
        n(b);
        var O = !1;
      } catch {
        O = !0;
      }
      if (O) {
        O = console;
        var D = O.error, T = typeof Symbol == "function" && Symbol.toStringTag && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return D.call(
          O,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          T
        ), n(b);
      }
    }
    function r(b) {
      if (b === g) return "<>";
      if (typeof b == "object" && b !== null && b.$$typeof === I)
        return "<...>";
      try {
        var O = e(b);
        return O ? "<" + O + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var b = q.A;
      return b === null ? null : b.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(b) {
      if (U.call(b, "key")) {
        var O = Object.getOwnPropertyDescriptor(b, "key").get;
        if (O && O.isReactWarning) return !1;
      }
      return b.key !== void 0;
    }
    function s(b, O) {
      function D() {
        L || (L = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          O
        ));
      }
      D.isReactWarning = !0, Object.defineProperty(b, "key", {
        get: D,
        configurable: !0
      });
    }
    function c() {
      var b = e(this.type);
      return J[b] || (J[b] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), b = this.props.ref, b !== void 0 ? b : null;
    }
    function d(b, O, D, T, Z, G) {
      var k = D.ref;
      return b = {
        $$typeof: x,
        type: b,
        key: O,
        props: D,
        _owner: T
      }, (k !== void 0 ? k : null) !== null ? Object.defineProperty(b, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(b, "ref", { enumerable: !1, value: null }), b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(b, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(b, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.defineProperty(b, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    }
    function p(b, O, D, T, Z, G) {
      var k = O.children;
      if (k !== void 0)
        if (T)
          if (H(k)) {
            for (T = 0; T < k.length; T++)
              f(k[T]);
            Object.freeze && Object.freeze(k);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(k);
      if (U.call(O, "key")) {
        k = e(b);
        var W = Object.keys(O).filter(function(B) {
          return B !== "key";
        });
        T = 0 < W.length ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}", _[k + T] || (W = 0 < W.length ? "{" + W.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          T,
          k,
          W,
          k
        ), _[k + T] = !0);
      }
      if (k = null, D !== void 0 && (t(D), k = "" + D), a(O) && (t(O.key), k = "" + O.key), "key" in O) {
        D = {};
        for (var Q in O)
          Q !== "key" && (D[Q] = O[Q]);
      } else D = O;
      return k && s(
        D,
        typeof b == "function" ? b.displayName || b.name || "Unknown" : b
      ), d(
        b,
        k,
        D,
        o(),
        Z,
        G
      );
    }
    function f(b) {
      v(b) ? b._store && (b._store.validated = 1) : typeof b == "object" && b !== null && b.$$typeof === I && (b._payload.status === "fulfilled" ? v(b._payload.value) && b._payload.value._store && (b._payload.value._store.validated = 1) : b._store && (b._store.validated = 1));
    }
    function v(b) {
      return typeof b == "object" && b !== null && b.$$typeof === x;
    }
    var h = ie, x = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), E = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), V = Symbol.for("react.activity"), X = Symbol.for("react.client.reference"), q = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, H = Array.isArray, $ = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(b) {
        return b();
      }
    };
    var L, J = {}, R = h.react_stack_bottom_frame.bind(
      h,
      i
    )(), M = $(r(i)), _ = {};
    Wt.Fragment = g, Wt.jsx = function(b, O, D) {
      var T = 1e4 > q.recentlyCreatedOwnerStacks++;
      return p(
        b,
        O,
        D,
        !1,
        T ? Error("react-stack-top-frame") : R,
        T ? $(r(b)) : M
      );
    }, Wt.jsxs = function(b, O, D) {
      var T = 1e4 > q.recentlyCreatedOwnerStacks++;
      return p(
        b,
        O,
        D,
        !0,
        T ? Error("react-stack-top-frame") : R,
        T ? $(r(b)) : M
      );
    };
  })()), Wt;
}
var Vo;
function Bl() {
  return Vo || (Vo = 1, process.env.NODE_ENV === "production" ? sn.exports = Wl() : sn.exports = Vl()), sn.exports;
}
var l = Bl();
function da(e) {
  var n, t, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (n = 0; n < o; n++) e[n] && (t = da(e[n])) && (r && (r += " "), r += t);
  } else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function ua() {
  for (var e, n, t = 0, r = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (n = da(e)) && (r && (r += " "), r += n);
  return r;
}
const Bo = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ho = ua, Hn = (e, n) => (t) => {
  var r;
  if (n?.variants == null) return Ho(e, t?.class, t?.className);
  const { variants: o, defaultVariants: i } = n, a = Object.keys(o).map((d) => {
    const p = t?.[d], f = i?.[d];
    if (p === null) return null;
    const v = Bo(p) || Bo(f);
    return o[d][v];
  }), s = t && Object.entries(t).reduce((d, p) => {
    let [f, v] = p;
    return v === void 0 || (d[f] = v), d;
  }, {}), c = n == null || (r = n.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((d, p) => {
    let { class: f, className: v, ...h } = p;
    return Object.entries(h).every((x) => {
      let [m, g] = x;
      return Array.isArray(g) ? g.includes({
        ...i,
        ...s
      }[m]) : {
        ...i,
        ...s
      }[m] === g;
    }) ? [
      ...d,
      f,
      v
    ] : d;
  }, []);
  return Ho(e, a, c, t?.class, t?.className);
}, Hl = (e, n) => {
  const t = new Array(e.length + n.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e[r];
  for (let r = 0; r < n.length; r++)
    t[e.length + r] = n[r];
  return t;
}, Ul = (e, n) => ({
  classGroupId: e,
  validator: n
}), pa = (e = /* @__PURE__ */ new Map(), n = null, t) => ({
  nextPart: e,
  validators: n,
  classGroupId: t
}), _n = "-", Uo = [], Gl = "arbitrary..", ql = (e) => {
  const n = Kl(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      if (a.startsWith("[") && a.endsWith("]"))
        return Yl(a);
      const s = a.split(_n), c = s[0] === "" && s.length > 1 ? 1 : 0;
      return fa(s, c, n);
    },
    getConflictingClassGroupIds: (a, s) => {
      if (s) {
        const c = r[a], d = t[a];
        return c ? d ? Hl(d, c) : c : d || Uo;
      }
      return t[a] || Uo;
    }
  };
}, fa = (e, n, t) => {
  if (e.length - n === 0)
    return t.classGroupId;
  const o = e[n], i = t.nextPart.get(o);
  if (i) {
    const d = fa(e, n + 1, i);
    if (d) return d;
  }
  const a = t.validators;
  if (a === null)
    return;
  const s = n === 0 ? e.join(_n) : e.slice(n).join(_n), c = a.length;
  for (let d = 0; d < c; d++) {
    const p = a[d];
    if (p.validator(s))
      return p.classGroupId;
  }
}, Yl = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const n = e.slice(1, -1), t = n.indexOf(":"), r = n.slice(0, t);
  return r ? Gl + r : void 0;
})(), Kl = (e) => {
  const {
    theme: n,
    classGroups: t
  } = e;
  return Zl(t, n);
}, Zl = (e, n) => {
  const t = pa();
  for (const r in e) {
    const o = e[r];
    uo(o, t, r, n);
  }
  return t;
}, uo = (e, n, t, r) => {
  const o = e.length;
  for (let i = 0; i < o; i++) {
    const a = e[i];
    Xl(a, n, t, r);
  }
}, Xl = (e, n, t, r) => {
  if (typeof e == "string") {
    Jl(e, n, t);
    return;
  }
  if (typeof e == "function") {
    Ql(e, n, t, r);
    return;
  }
  ed(e, n, t, r);
}, Jl = (e, n, t) => {
  const r = e === "" ? n : ma(n, e);
  r.classGroupId = t;
}, Ql = (e, n, t, r) => {
  if (td(e)) {
    uo(e(r), n, t, r);
    return;
  }
  n.validators === null && (n.validators = []), n.validators.push(Ul(t, e));
}, ed = (e, n, t, r) => {
  const o = Object.entries(e), i = o.length;
  for (let a = 0; a < i; a++) {
    const [s, c] = o[a];
    uo(c, ma(n, s), t, r);
  }
}, ma = (e, n) => {
  let t = e;
  const r = n.split(_n), o = r.length;
  for (let i = 0; i < o; i++) {
    const a = r[i];
    let s = t.nextPart.get(a);
    s || (s = pa(), t.nextPart.set(a, s)), t = s;
  }
  return t;
}, td = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, nd = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, t = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const o = (i, a) => {
    t[i] = a, n++, n > e && (n = 0, r = t, t = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(i) {
      let a = t[i];
      if (a !== void 0)
        return a;
      if ((a = r[i]) !== void 0)
        return o(i, a), a;
    },
    set(i, a) {
      i in t ? t[i] = a : o(i, a);
    }
  };
}, Br = "!", Go = ":", rd = [], qo = (e, n, t, r, o) => ({
  modifiers: e,
  hasImportantModifier: n,
  baseClassName: t,
  maybePostfixModifierPosition: r,
  isExternal: o
}), od = (e) => {
  const {
    prefix: n,
    experimentalParseClassName: t
  } = e;
  let r = (o) => {
    const i = [];
    let a = 0, s = 0, c = 0, d;
    const p = o.length;
    for (let m = 0; m < p; m++) {
      const g = o[m];
      if (a === 0 && s === 0) {
        if (g === Go) {
          i.push(o.slice(c, m)), c = m + 1;
          continue;
        }
        if (g === "/") {
          d = m;
          continue;
        }
      }
      g === "[" ? a++ : g === "]" ? a-- : g === "(" ? s++ : g === ")" && s--;
    }
    const f = i.length === 0 ? o : o.slice(c);
    let v = f, h = !1;
    f.endsWith(Br) ? (v = f.slice(0, -1), h = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      f.startsWith(Br) && (v = f.slice(1), h = !0)
    );
    const x = d && d > c ? d - c : void 0;
    return qo(i, h, v, x);
  };
  if (n) {
    const o = n + Go, i = r;
    r = (a) => a.startsWith(o) ? i(a.slice(o.length)) : qo(rd, !1, a, void 0, !0);
  }
  if (t) {
    const o = r;
    r = (i) => t({
      className: i,
      parseClassName: o
    });
  }
  return r;
}, id = (e) => {
  const n = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((t, r) => {
    n.set(t, 1e6 + r);
  }), (t) => {
    const r = [];
    let o = [];
    for (let i = 0; i < t.length; i++) {
      const a = t[i], s = a[0] === "[", c = n.has(a);
      s || c ? (o.length > 0 && (o.sort(), r.push(...o), o = []), r.push(a)) : o.push(a);
    }
    return o.length > 0 && (o.sort(), r.push(...o)), r;
  };
}, ad = (e) => ({
  cache: nd(e.cacheSize),
  parseClassName: od(e),
  sortModifiers: id(e),
  ...ql(e)
}), sd = /\s+/, cd = (e, n) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = n, a = [], s = e.trim().split(sd);
  let c = "";
  for (let d = s.length - 1; d >= 0; d -= 1) {
    const p = s[d], {
      isExternal: f,
      modifiers: v,
      hasImportantModifier: h,
      baseClassName: x,
      maybePostfixModifierPosition: m
    } = t(p);
    if (f) {
      c = p + (c.length > 0 ? " " + c : c);
      continue;
    }
    let g = !!m, y = r(g ? x.substring(0, m) : x);
    if (!y) {
      if (!g) {
        c = p + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (y = r(x), !y) {
        c = p + (c.length > 0 ? " " + c : c);
        continue;
      }
      g = !1;
    }
    const C = v.length === 0 ? "" : v.length === 1 ? v[0] : i(v).join(":"), S = h ? C + Br : C, E = S + y;
    if (a.indexOf(E) > -1)
      continue;
    a.push(E);
    const w = o(y, g);
    for (let N = 0; N < w.length; ++N) {
      const j = w[N];
      a.push(S + j);
    }
    c = p + (c.length > 0 ? " " + c : c);
  }
  return c;
}, ld = (...e) => {
  let n = 0, t, r, o = "";
  for (; n < e.length; )
    (t = e[n++]) && (r = va(t)) && (o && (o += " "), o += r);
  return o;
}, va = (e) => {
  if (typeof e == "string")
    return e;
  let n, t = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (n = va(e[r])) && (t && (t += " "), t += n);
  return t;
}, dd = (e, ...n) => {
  let t, r, o, i;
  const a = (c) => {
    const d = n.reduce((p, f) => f(p), e());
    return t = ad(d), r = t.cache.get, o = t.cache.set, i = s, s(c);
  }, s = (c) => {
    const d = r(c);
    if (d)
      return d;
    const p = cd(c, t);
    return o(c, p), p;
  };
  return i = a, (...c) => i(ld(...c));
}, ud = [], we = (e) => {
  const n = (t) => t[e] || ud;
  return n.isThemeGetter = !0, n;
}, ha = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ga = /^\((?:(\w[\w-]*):)?(.+)\)$/i, pd = /^\d+\/\d+$/, fd = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, md = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, vd = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, hd = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, gd = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, wt = (e) => pd.test(e), ae = (e) => !!e && !Number.isNaN(Number(e)), tt = (e) => !!e && Number.isInteger(Number(e)), vr = (e) => e.endsWith("%") && ae(e.slice(0, -1)), Ge = (e) => fd.test(e), xd = () => !0, bd = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  md.test(e) && !vd.test(e)
), xa = () => !1, yd = (e) => hd.test(e), wd = (e) => gd.test(e), Cd = (e) => !Y(e) && !K(e), Sd = (e) => Tt(e, wa, xa), Y = (e) => ha.test(e), dt = (e) => Tt(e, Ca, bd), hr = (e) => Tt(e, Pd, ae), Yo = (e) => Tt(e, ba, xa), Ed = (e) => Tt(e, ya, wd), cn = (e) => Tt(e, Sa, yd), K = (e) => ga.test(e), Vt = (e) => Mt(e, Ca), kd = (e) => Mt(e, jd), Ko = (e) => Mt(e, ba), _d = (e) => Mt(e, wa), Rd = (e) => Mt(e, ya), ln = (e) => Mt(e, Sa, !0), Tt = (e, n, t) => {
  const r = ha.exec(e);
  return r ? r[1] ? n(r[1]) : t(r[2]) : !1;
}, Mt = (e, n, t = !1) => {
  const r = ga.exec(e);
  return r ? r[1] ? n(r[1]) : t : !1;
}, ba = (e) => e === "position" || e === "percentage", ya = (e) => e === "image" || e === "url", wa = (e) => e === "length" || e === "size" || e === "bg-size", Ca = (e) => e === "length", Pd = (e) => e === "number", jd = (e) => e === "family-name", Sa = (e) => e === "shadow", Ad = () => {
  const e = we("color"), n = we("font"), t = we("text"), r = we("font-weight"), o = we("tracking"), i = we("leading"), a = we("breakpoint"), s = we("container"), c = we("spacing"), d = we("radius"), p = we("shadow"), f = we("inset-shadow"), v = we("text-shadow"), h = we("drop-shadow"), x = we("blur"), m = we("perspective"), g = we("aspect"), y = we("ease"), C = we("animate"), S = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], E = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], w = () => [...E(), K, Y], N = () => ["auto", "hidden", "clip", "visible", "scroll"], j = () => ["auto", "contain", "none"], P = () => [K, Y, c], I = () => [wt, "full", "auto", ...P()], V = () => [tt, "none", "subgrid", K, Y], X = () => ["auto", {
    span: ["full", tt, K, Y]
  }, tt, K, Y], q = () => [tt, "auto", K, Y], U = () => ["auto", "min", "max", "fr", K, Y], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], $ = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], L = () => ["auto", ...P()], J = () => [wt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...P()], R = () => [e, K, Y], M = () => [...E(), Ko, Yo, {
    position: [K, Y]
  }], _ = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], b = () => ["auto", "cover", "contain", _d, Sd, {
    size: [K, Y]
  }], O = () => [vr, Vt, dt], D = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    K,
    Y
  ], T = () => ["", ae, Vt, dt], Z = () => ["solid", "dashed", "dotted", "double"], G = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], k = () => [ae, vr, Ko, Yo], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    K,
    Y
  ], Q = () => ["none", ae, K, Y], B = () => ["none", ae, K, Y], re = () => [ae, K, Y], A = () => [wt, "full", ...P()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ge],
      breakpoint: [Ge],
      color: [xd],
      container: [Ge],
      "drop-shadow": [Ge],
      ease: ["in", "out", "in-out"],
      font: [Cd],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Ge],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Ge],
      shadow: [Ge],
      spacing: ["px", ae],
      text: [Ge],
      "text-shadow": [Ge],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", wt, Y, K, g]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ae, Y, K, s]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": S()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": S()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: w()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: N()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": N()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": N()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: j()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": j()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": j()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: I()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": I()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": I()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: I()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: I()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: I()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: I()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: I()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: I()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [tt, "auto", K, Y]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [wt, "full", "auto", s, ...P()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [ae, wt, "auto", "initial", "none", Y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ae, K, Y]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ae, K, Y]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [tt, "first", "last", "none", K, Y]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": V()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: X()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": q()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": q()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": V()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: X()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": q()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": q()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": U()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": U()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: P()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": P()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": P()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...H(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...$(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...$()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...H()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...$(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...$(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": H()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...$(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...$()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: P()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: P()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: P()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: P()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: P()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: P()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: P()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: P()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: P()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: L()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: L()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: L()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: L()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: L()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: L()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: L()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: L()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: L()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": P()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": P()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: J()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [s, "screen", ...J()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          s,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...J()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          s,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
          },
          ...J()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...J()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...J()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...J()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, Vt, dt]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, K, hr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", vr, Y]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [kd, Y, n]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [o, K, Y]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ae, "none", K, hr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...P()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", K, Y]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", K, Y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: R()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: R()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Z(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ae, "from-font", "auto", K, dt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: R()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ae, "auto", K, Y]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: P()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", K, Y]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", K, Y]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: M()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: _()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: b()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, tt, K, Y],
          radial: ["", K, Y],
          conic: [tt, K, Y]
        }, Rd, Ed]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: R()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: O()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: O()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: O()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: R()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: R()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: R()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: D()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": D()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": D()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": D()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": D()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": D()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": D()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": D()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": D()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": D()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": D()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": D()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": D()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": D()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": D()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: T()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": T()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": T()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": T()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": T()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": T()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": T()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": T()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": T()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": T()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": T()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Z(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Z(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: R()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": R()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": R()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": R()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": R()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": R()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": R()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": R()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": R()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: R()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Z(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ae, K, Y]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ae, Vt, dt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: R()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          p,
          ln,
          cn
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: R()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, ln, cn]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": R()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: T()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: R()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ae, dt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": R()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": T()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": R()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", v, ln, cn]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": R()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ae, K, Y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...G(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": G()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [ae]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": k()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": k()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": R()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": R()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": k()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": k()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": R()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": R()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": k()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": k()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": R()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": R()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": k()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": k()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": R()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": R()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": k()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": k()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": R()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": R()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": k()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": k()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": R()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": R()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": k()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": k()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": R()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": R()
      }],
      "mask-image-radial": [{
        "mask-radial": [K, Y]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": k()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": k()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": R()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": R()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": E()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ae]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": k()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": k()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": R()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": R()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: M()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: _()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: b()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", K, Y]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          K,
          Y
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: W()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ae, K, Y]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ae, K, Y]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          h,
          ln,
          cn
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": R()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ae, K, Y]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ae, K, Y]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ae, K, Y]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ae, K, Y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ae, K, Y]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          K,
          Y
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": W()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ae, K, Y]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ae, K, Y]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ae, K, Y]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ae, K, Y]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ae, K, Y]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ae, K, Y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ae, K, Y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ae, K, Y]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": P()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": P()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": P()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", K, Y]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [ae, "initial", K, Y]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", y, K, Y]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ae, K, Y]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", C, K, Y]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [m, K, Y]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": w()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Q()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Q()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Q()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Q()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: B()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": B()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": B()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": B()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: re()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": re()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": re()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [K, Y, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: w()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: A()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": A()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": A()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": A()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: R()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: R()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", K, Y]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": P()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": P()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": P()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": P()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": P()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": P()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": P()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": P()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": P()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": P()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": P()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": P()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": P()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": P()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": P()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": P()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": P()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": P()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", K, Y]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...R()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ae, Vt, dt, hr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...R()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Od = /* @__PURE__ */ dd(Ad);
function z(...e) {
  return Od(ua(e));
}
const Td = Hn(
  "inline-flex items-center justify-center px-2.5 font-sans text-xs font-normal gap-2 whitespace-nowrap transition-all disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        "default-filled": "bg-gray-50 hover:bg-gray-100 focus-visible:bg-gray-200 text-gray-700 disabled:text-gray-200",
        "default-outline": "border border-gray-50 bg-transparent hover:bg-white hover:border-gray-100 text-gray-700 focus-visible:bg-gray-100 disabled:text-gray-200 disabled:border-gray-100",
        "primary-filled": "bg-blue-hepatica-600 hover:bg-blue-hepatica-700 focus-visible:bg-blue-hepatica-800 text-white disabled:bg-blue-hepatica-200",
        "primary-outline": "border border-blue-hepatica-600 text-blue-hepatica-600 bg-transparent hover:bg-blue-hepatica-100 hover:border-blue-hepatica-700 hover:text-blue-hepatica-700 focus-visible:bg-blue-hepatica-200 hover:border-blue-hepatica-700 hover:text-blue-hepatica-700 disabled:text-blue-hepatica-100 disabled:border-blue-hepatica-100",
        "error-filled": "bg-bright-red-600 hover:bg-bright-red-700 focus-visible:bg-bright-red-800 text-white disabled:bg-bright-red-200",
        "error-outline": "border border-bright-red-600 text-bright-red-600 bg-transparent hover:bg-bright-red-100 hover:border-bright-red-700 hover:text-bright-red-700 focus-visible:bg-bright-red-200 hover:border-bright-red-700 hover:text-bright-red-700 disabled:text-bright-red-100 disabled:border-bright-red-100",
        "warning-filled": "bg-vivid-orange-600 hover:bg-vivid-orange-700 focus-visible:bg-vivid-orange-800 text-white disabled:bg-vivid-orange-200",
        "warning-outline": "border border-vivid-orange-600 text-vivid-orange-600 bg-transparent hover:bg-vivid-orange-100 hover:border-vivid-orange-700 hover:text-vivid-orange-700 focus-visible:bg-vivid-orange-200 hover:border-vivid-orange-700 hover:text-vivid-orange-700 disabled:text-vivid-orange-100 disabled:border-vivid-orange-100",
        "success-filled": "bg-turquoise-green-600 hover:bg-turquoise-green-800 focus-visible:bg-turquoise-green-900 text-white disabled:bg-turquoise-green-200",
        "success-outline": "border border-turquoise-green-700 text-turquoise-green-700 bg-transparent hover:bg-turquoise-green-100 hover:border-turquoise-green-800 hover:text-turquoise-green-800 focus-visible:bg-turquoise-green-200 hover:border-turquoise-green-800 hover:text-turquoise-green-800 disabled:text-turquoise-green-100 disabled:border-turquoise-green-100"
      },
      size: {
        sm: "h-6 rounded-[.75rem]",
        md: "h-8 rounded-[1rem]"
      }
    },
    defaultVariants: {
      variant: "default-filled",
      size: "sm"
    }
  }
);
function $0({
  className: e,
  variant: n,
  size: t,
  ...r
}) {
  return /* @__PURE__ */ l.jsx(
    "span",
    {
      "data-slot": "badge",
      role: "status",
      className: z(Td({ variant: n, size: t, className: e })),
      ...r
    }
  );
}
const Md = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Dd = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, t, r) => r ? r.toUpperCase() : t.toLowerCase()
), Zo = (e) => {
  const n = Dd(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, Ea = (...e) => e.filter((n, t, r) => !!n && n.trim() !== "" && r.indexOf(n) === t).join(" ").trim(), Nd = (e) => {
  for (const n in e)
    if (n.startsWith("aria-") || n === "role" || n === "title")
      return !0;
};
var Id = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Ld = Vn(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: a,
    ...s
  }, c) => Wr(
    "svg",
    {
      ref: c,
      ...Id,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: r ? Number(t) * 24 / Number(n) : t,
      className: Ea("lucide", o),
      ...!i && !Nd(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...a.map(([d, p]) => Wr(d, p)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
const Le = (e, n) => {
  const t = Vn(
    ({ className: r, ...o }, i) => Wr(Ld, {
      ref: i,
      iconNode: n,
      className: Ea(
        `lucide-${Md(Zo(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return t.displayName = Zo(e), t;
};
const Fd = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], ka = Le("check", Fd);
const zd = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], _a = Le("chevron-down", zd);
const $d = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Ra = Le("chevron-right", $d);
const Wd = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Vd = Le("chevron-left", Wd);
const Bd = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Hd = Le("chevron-up", Bd);
const Ud = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], Gd = Le("eye-off", Ud);
const qd = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Yd = Le("eye", qd);
const Kd = [["path", { d: "M5 12h14", key: "1ays0h" }]], Zd = Le("minus", Kd);
const Xd = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Jd = Le("trash-2", Xd);
const Qd = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], Pa = Le("upload", Qd);
const eu = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ja = Le("x", eu);
function Xo(e, n) {
  if (typeof e == "function")
    return e(n);
  e != null && (e.current = n);
}
function en(...e) {
  return (n) => {
    let t = !1;
    const r = e.map((o) => {
      const i = Xo(o, n);
      return !t && typeof i == "function" && (t = !0), i;
    });
    if (t)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : Xo(e[o], null);
        }
      };
  };
}
function ue(...e) {
  return u.useCallback(en(...e), e);
}
var tu = Symbol.for("react.lazy"), Rn = u[" use ".trim().toString()];
function nu(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function Aa(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === tu && "_payload" in e && nu(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Oa(e) {
  const n = /* @__PURE__ */ ru(e), t = u.forwardRef((r, o) => {
    let { children: i, ...a } = r;
    Aa(i) && typeof Rn == "function" && (i = Rn(i._payload));
    const s = u.Children.toArray(i), c = s.find(iu);
    if (c) {
      const d = c.props.children, p = s.map((f) => f === c ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : f);
      return /* @__PURE__ */ l.jsx(n, { ...a, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, p) : null });
    }
    return /* @__PURE__ */ l.jsx(n, { ...a, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
var Un = /* @__PURE__ */ Oa("Slot");
// @__NO_SIDE_EFFECTS__
function ru(e) {
  const n = u.forwardRef((t, r) => {
    let { children: o, ...i } = t;
    if (Aa(o) && typeof Rn == "function" && (o = Rn(o._payload)), u.isValidElement(o)) {
      const a = su(o), s = au(i, o.props);
      return o.type !== u.Fragment && (s.ref = r ? en(r, a) : a), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var ou = Symbol("radix.slottable");
function iu(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ou;
}
function au(e, n) {
  const t = { ...n };
  for (const r in n) {
    const o = e[r], i = n[r];
    /^on[A-Z]/.test(r) ? o && i ? t[r] = (...s) => {
      const c = i(...s);
      return o(...s), c;
    } : o && (t[r] = o) : r === "style" ? t[r] = { ...o, ...i } : r === "className" && (t[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function su(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
function W0({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ l.jsx(
    "nav",
    {
      "aria-label": "Breadcrumb",
      "data-slot": "breadcrumb",
      className: z("w-full", e),
      ...n
    }
  );
}
function V0({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: z("flex items-center justify-start gap-2", e),
      ...n
    }
  );
}
function B0({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: z("flex justify-start items-center gap-x-1", e),
      ...n
    }
  );
}
function H0({
  asChild: e,
  className: n,
  ...t
}) {
  const r = e ? Un : "a";
  return /* @__PURE__ */ l.jsx(
    r,
    {
      "data-slot": "breadcrumb-link",
      className: z(
        "flex w-fit font-sans text-sm font-normal leading-4.5 text-gray-200 hover:text-gray-600 hover:underline transition-all",
        n
      ),
      ...t
    }
  );
}
function U0({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ l.jsx(
    "span",
    {
      "data-slot": "breadcrumb-page",
      "aria-current": "page",
      className: z(
        "font-sans text-sm font-semibold text-blue-hepatica-600 leading-4",
        e
      ),
      ...n
    }
  );
}
function G0() {
  return /* @__PURE__ */ l.jsx(
    Ra,
    {
      "data-slot": "breadcrumb-separator",
      "aria-hidden": "true",
      className: "size-4 text-gray-300 shrink-0"
    }
  );
}
const cu = Hn(
  "inline-flex w-fit items-center justify-center px-4 font-sans font-semibold gap-2 whitespace-nowrap transition-all disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus:shadow-button",
  {
    variants: {
      variant: {
        "blue-hepatica-solid": "bg-blue-hepatica-600 hover:bg-blue-hepatica-700 text-white disabled:bg-gray-100",
        "blue-hepatica-outline": "bg-transparent border border-blue-hepatica-600 hover:border-blue-hepatica-700 hover:bg-blue-hepatica-100 text-blue-hepatica-600 focus:bg-white disabled:border-gray-100 disabled:text-gray-100",
        "blue-hepatica-ghost": "bg-transparent hover:bg-blue-hepatica-100 text-blue-hepatica-600 focus:bg-white disabled:text-gray-100",
        "gray-solid": "bg-gray-700 hover:bg-gray-900 text-white disabled:bg-gray-100",
        "gray-outline": "bg-transparent border border-gray-700 hover:border-gray-900 hover:bg-gray-25 text-gray-700 focus:bg-white disabled:border-gray-100 disabled:text-gray-100",
        "gray-ghost": "bg-transparent hover:bg-gray-25 text-gray-700 focus:bg-white disabled:text-gray-100",
        "bright-red-solid": "bg-bright-red-600 hover:bg-bright-red-800 text-white disabled:bg-gray-100",
        "bright-red-outline": "bg-transparent border border-bright-red-600 hover:border-bright-red-800 hover:bg-bright-red-100 text-bright-red-600 focus:bg-white disabled:border-gray-100 disabled:text-gray-100",
        "bright-red-ghost": "bg-transparent hover:bg-bright-red-100 text-bright-red-600 focus:bg-white disabled:text-gray-100"
      },
      size: {
        sm: "h-8 rounded-[1rem] text-xs",
        md: "h-10 rounded-[1.25rem] text-sm",
        lg: "h-12 rounded-[1.5rem] text-base",
        icon: "size-9 rounded-full"
      }
    },
    defaultVariants: {
      variant: "blue-hepatica-ghost",
      size: "md"
    }
  }
);
function lu({
  className: e,
  variant: n,
  size: t,
  asChild: r = !1,
  ...o
}) {
  const i = r ? Un : "button";
  return /* @__PURE__ */ l.jsx(
    i,
    {
      "data-slot": "button",
      className: z(cu({ variant: n, size: t, className: e })),
      ...o
    }
  );
}
function q0({
  className: e,
  checked: n,
  disabled: t = !1,
  name: r,
  value: o,
  onChange: i,
  ...a
}) {
  const s = `${r ?? "checkbox"}-${String(o ?? "value")}`;
  return /* @__PURE__ */ l.jsxs(
    "label",
    {
      htmlFor: s,
      "data-slot": "checkbox-label",
      className: z(
        "inline-flex size-9.5 items-center justify-center rounded-full",
        "bg-transparent transition-colors duration-200",
        "hover:bg-blue-hepatica-100 focus-within:bg-gray-100",
        {
          "cursor-not-allowed": t
        }
      ),
      children: [
        /* @__PURE__ */ l.jsx(
          "div",
          {
            "data-slot": "checkbox-box",
            "aria-hidden": "true",
            className: z(
              "size-4 rounded-xs transition-all duration-200 flex items-center justify-center",
              {
                "border-2 border-gray-600": !n && !t,
                "bg-blue-hepatica-600": n && !t,
                "border-2 border-gray-200": !n && t,
                "bg-gray-200": n && t
              },
              e
            ),
            children: /* @__PURE__ */ l.jsx(
              ka,
              {
                className: z("size-3 text-transparent", {
                  "text-white": n
                })
              }
            )
          }
        ),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            id: s,
            type: "checkbox",
            "data-slot": "checkbox",
            className: "sr-only",
            name: r,
            value: o,
            checked: n,
            disabled: t,
            onChange: (c) => i?.(c.target.checked),
            ...a
          }
        )
      ]
    }
  );
}
var du = (e) => e.type === "checkbox", Ut = (e) => e instanceof Date, po = (e) => e == null;
const Ta = (e) => typeof e == "object";
var pt = (e) => !po(e) && !Array.isArray(e) && Ta(e) && !Ut(e), uu = (e) => pt(e) && e.target ? du(e.target) ? e.target.checked : e.target.value : e, pu = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, fu = (e, n) => e.has(pu(n)), mu = (e) => {
  const n = e.constructor && e.constructor.prototype;
  return pt(n) && n.hasOwnProperty("isPrototypeOf");
}, vu = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Ma(e) {
  let n;
  const t = Array.isArray(e), r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    n = new Date(e);
  else if (!(vu && (e instanceof Blob || r)) && (t || pt(e)))
    if (n = t ? [] : Object.create(Object.getPrototypeOf(e)), !t && !mu(e))
      n = e;
    else
      for (const o in e)
        e.hasOwnProperty(o) && (n[o] = Ma(e[o]));
  else
    return e;
  return n;
}
var Da = (e) => /^\w*$/.test(e), Hr = (e) => e === void 0, hu = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Na = (e) => hu(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Pe = (e, n, t) => {
  if (!n || !pt(e))
    return t;
  const r = (Da(n) ? [n] : Na(n)).reduce((o, i) => po(o) ? o : o[i], e);
  return Hr(r) || r === e ? Hr(e[n]) ? t : e[n] : r;
}, gr = (e) => typeof e == "boolean", Jo = (e, n, t) => {
  let r = -1;
  const o = Da(n) ? [n] : Na(n), i = o.length, a = i - 1;
  for (; ++r < i; ) {
    const s = o[r];
    let c = t;
    if (r !== a) {
      const d = e[s];
      c = pt(d) || Array.isArray(d) ? d : isNaN(+o[r + 1]) ? {} : [];
    }
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return;
    e[s] = c, e = e[s];
  }
};
const Qo = {
  BLUR: "blur",
  CHANGE: "change"
}, ei = {
  all: "all"
}, fo = ie.createContext(null);
fo.displayName = "HookFormContext";
const Gn = () => ie.useContext(fo), gu = (e) => {
  const { children: n, ...t } = e;
  return ie.createElement(fo.Provider, { value: t }, n);
};
var xu = (e, n, t, r = !0) => {
  const o = {
    defaultValues: n._defaultValues
  };
  for (const i in e)
    Object.defineProperty(o, i, {
      get: () => {
        const a = i;
        return n._proxyFormState[a] !== ei.all && (n._proxyFormState[a] = !r || ei.all), t && (t[a] = !0), e[a];
      }
    });
  return o;
};
const Ia = typeof window < "u" ? ie.useLayoutEffect : ie.useEffect;
function La(e) {
  const n = Gn(), { control: t = n.control, disabled: r, name: o, exact: i } = e || {}, [a, s] = ie.useState(t._formState), c = ie.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return Ia(() => t._subscribe({
    name: o,
    formState: c.current,
    exact: i,
    callback: (d) => {
      !r && s({
        ...t._formState,
        ...d
      });
    }
  }), [o, r, i]), ie.useEffect(() => {
    c.current.isValid && t._setValid(!0);
  }, [t]), ie.useMemo(() => xu(a, t, c.current, !1), [a, t]);
}
var bu = (e) => typeof e == "string", ti = (e, n, t, r, o) => bu(e) ? Pe(t, e, o) : Array.isArray(e) ? e.map((i) => Pe(t, i)) : t, ni = (e) => po(e) || !Ta(e);
function Cn(e, n, t = /* @__PURE__ */ new WeakSet()) {
  if (ni(e) || ni(n))
    return Object.is(e, n);
  if (Ut(e) && Ut(n))
    return e.getTime() === n.getTime();
  const r = Object.keys(e), o = Object.keys(n);
  if (r.length !== o.length)
    return !1;
  if (t.has(e) || t.has(n))
    return !0;
  t.add(e), t.add(n);
  for (const i of r) {
    const a = e[i];
    if (!o.includes(i))
      return !1;
    if (i !== "ref") {
      const s = n[i];
      if (Ut(a) && Ut(s) || pt(a) && pt(s) || Array.isArray(a) && Array.isArray(s) ? !Cn(a, s, t) : !Object.is(a, s))
        return !1;
    }
  }
  return !0;
}
function yu(e) {
  const n = Gn(), { control: t = n.control, name: r, defaultValue: o, disabled: i, exact: a, compute: s } = e || {}, c = ie.useRef(o), d = ie.useRef(s), p = ie.useRef(void 0), f = ie.useRef(t), v = ie.useRef(r);
  d.current = s;
  const [h, x] = ie.useState(() => {
    const E = t._getWatch(r, c.current);
    return d.current ? d.current(E) : E;
  }), m = ie.useCallback((E) => {
    const w = ti(r, t._names, E || t._formValues, !1, c.current);
    return d.current ? d.current(w) : w;
  }, [t._formValues, t._names, r]), g = ie.useCallback((E) => {
    if (!i) {
      const w = ti(r, t._names, E || t._formValues, !1, c.current);
      if (d.current) {
        const N = d.current(w);
        Cn(N, p.current) || (x(N), p.current = N);
      } else
        x(w);
    }
  }, [t._formValues, t._names, i, r]);
  Ia(() => ((f.current !== t || !Cn(v.current, r)) && (f.current = t, v.current = r, g()), t._subscribe({
    name: r,
    formState: {
      values: !0
    },
    exact: a,
    callback: (E) => {
      g(E.values);
    }
  })), [t, a, r, g]), ie.useEffect(() => t._removeUnmounted());
  const y = f.current !== t, C = v.current, S = ie.useMemo(() => {
    if (i)
      return null;
    const E = !y && !Cn(C, r);
    return y || E ? m() : null;
  }, [i, y, r, C, m]);
  return S !== null ? S : h;
}
function wu(e) {
  const n = Gn(), { name: t, disabled: r, control: o = n.control, shouldUnregister: i, defaultValue: a, exact: s = !0 } = e, c = fu(o._names.array, t), d = ie.useMemo(() => Pe(o._formValues, t, Pe(o._defaultValues, t, a)), [o, t, a]), p = yu({
    control: o,
    name: t,
    defaultValue: d,
    exact: s
  }), f = La({
    control: o,
    name: t,
    exact: s
  }), v = ie.useRef(e), h = ie.useRef(void 0), x = ie.useRef(o.register(t, {
    ...e.rules,
    value: p,
    ...gr(e.disabled) ? { disabled: e.disabled } : {}
  }));
  v.current = e;
  const m = ie.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!Pe(f.errors, t)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!Pe(f.dirtyFields, t)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!Pe(f.touchedFields, t)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!Pe(f.validatingFields, t)
    },
    error: {
      enumerable: !0,
      get: () => Pe(f.errors, t)
    }
  }), [f, t]), g = ie.useCallback((E) => x.current.onChange({
    target: {
      value: uu(E),
      name: t
    },
    type: Qo.CHANGE
  }), [t]), y = ie.useCallback(() => x.current.onBlur({
    target: {
      value: Pe(o._formValues, t),
      name: t
    },
    type: Qo.BLUR
  }), [t, o._formValues]), C = ie.useCallback((E) => {
    const w = Pe(o._fields, t);
    w && E && (w._f.ref = {
      focus: () => E.focus && E.focus(),
      select: () => E.select && E.select(),
      setCustomValidity: (N) => E.setCustomValidity(N),
      reportValidity: () => E.reportValidity()
    });
  }, [o._fields, t]), S = ie.useMemo(() => ({
    name: t,
    value: p,
    ...gr(r) || f.disabled ? { disabled: f.disabled || r } : {},
    onChange: g,
    onBlur: y,
    ref: C
  }), [t, r, f.disabled, g, y, C, p]);
  return ie.useEffect(() => {
    const E = o._options.shouldUnregister || i, w = h.current;
    w && w !== t && !c && o.unregister(w), o.register(t, {
      ...v.current.rules,
      ...gr(v.current.disabled) ? { disabled: v.current.disabled } : {}
    });
    const N = (j, P) => {
      const I = Pe(o._fields, j);
      I && I._f && (I._f.mount = P);
    };
    if (N(t, !0), E) {
      const j = Ma(Pe(o._options.defaultValues, t, v.current.defaultValue));
      Jo(o._defaultValues, t, j), Hr(Pe(o._formValues, t)) && Jo(o._formValues, t, j);
    }
    return !c && o.register(t), h.current = t, () => {
      (c ? E && !o._state.action : E) ? o.unregister(t) : N(t, !1);
    };
  }, [t, o, c, i]), ie.useEffect(() => {
    o._setDisabledField({
      disabled: r,
      name: t
    });
  }, [r, t, o]), ie.useMemo(() => ({
    field: S,
    formState: f,
    fieldState: m
  }), [S, f, m]);
}
const Cu = (e) => e.render(wu(e)), Fa = Vn(
  ({ className: e, children: n, required: t, ...r }, o) => /* @__PURE__ */ l.jsxs(
    "label",
    {
      ref: o,
      "data-slot": "label",
      className: z("font-sans font-medium text-sm text-gray-700", e),
      ...r,
      children: [
        /* @__PURE__ */ l.jsx("span", { children: n }),
        t ? /* @__PURE__ */ l.jsx("span", { className: "text-base font-normal text-bright-red-600 ml-1 leading-[22px]", children: "*" }) : null
      ]
    }
  )
);
Fa.displayName = "Label";
const Y0 = gu, za = la(
  {}
), K0 = ({
  ...e
}) => /* @__PURE__ */ l.jsx(za.Provider, { value: { name: e.name }, children: /* @__PURE__ */ l.jsx(Cu, { ...e }) }), qn = () => {
  const e = Vr(za), n = Vr($a), { getFieldState: t } = Gn(), r = La({ name: e.name }), o = t(e.name, r);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: i } = n;
  return {
    id: i,
    name: e.name,
    formItemId: `${i}-form-item`,
    formDescriptionId: `${i}-form-item-description`,
    formMessageId: `${i}-form-item-message`,
    ...o
  };
}, $a = la(
  {}
);
function Z0({ className: e, ...n }) {
  const t = Nl();
  return /* @__PURE__ */ l.jsx($a.Provider, { value: { id: t }, children: /* @__PURE__ */ l.jsx(
    "div",
    {
      "data-slot": "form-item",
      className: z("grid gap-2", e),
      ...n
    }
  ) });
}
function X0({
  className: e,
  ...n
}) {
  const { error: t, formItemId: r } = qn();
  return /* @__PURE__ */ l.jsx(
    Fa,
    {
      "data-slot": "form-label",
      "data-error": !!t,
      className: e,
      htmlFor: r,
      ...n
    }
  );
}
function J0({ ...e }) {
  const { error: n, formItemId: t, formDescriptionId: r, formMessageId: o } = qn();
  return /* @__PURE__ */ l.jsx(
    Un,
    {
      "data-slot": "form-control",
      id: t,
      "aria-describedby": n ? `${r} ${o}` : `${r}`,
      "aria-invalid": !!n,
      ...e
    }
  );
}
function Q0({ className: e, ...n }) {
  const { formDescriptionId: t } = qn();
  return /* @__PURE__ */ l.jsx(
    "p",
    {
      "data-slot": "form-description",
      id: t,
      className: z("text-muted-foreground text-sm", e),
      ...n
    }
  );
}
function eb({ className: e, ...n }) {
  const { error: t, formMessageId: r } = qn(), o = t ? String(t?.message ?? "") : n.children;
  return o ? /* @__PURE__ */ l.jsx(
    "p",
    {
      "data-slot": "form-message",
      id: r,
      className: z("text-destructive text-sm", e),
      ...n,
      children: o
    }
  ) : null;
}
function _e(e, n = {}) {
  const t = typeof e == "number" ? `${e}` : e ?? "24", r = typeof n["aria-label"] == "string";
  return {
    width: t,
    height: t,
    role: r ? "img" : "presentation",
    "aria-hidden": r ? void 0 : !0,
    ...n
  };
}
function Su({ size: e, className: n, ...t }) {
  const r = _e(e, t);
  return /* @__PURE__ */ l.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: z("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M11.1111 6.52632C13.8146 6.59229 16.4568 5.7579 18.5778 4.16842C18.7098 4.07459 18.8669 4.01745 19.0313 4.0034C19.1957 3.98936 19.361 4.01896 19.5086 4.0889C19.6563 4.15884 19.7805 4.26635 19.8672 4.39938C19.954 4.53242 20 4.68572 20 4.84211V14.9474C20 15.1038 19.954 15.2571 19.8672 15.3901C19.7805 15.5231 19.6563 15.6306 19.5086 15.7006C19.361 15.7705 19.1957 15.8001 19.0313 15.7861C18.8669 15.772 18.7098 15.7149 18.5778 15.621C16.4568 14.0316 13.8146 13.1972 11.1111 13.2632H5.77778C5.30628 13.2632 4.8541 13.0857 4.5207 12.7699C4.1873 12.454 4 12.0256 4 11.5789V8.21052C4 7.76384 4.1873 7.33546 4.5207 7.01961C4.8541 6.70376 5.30628 6.52632 5.77778 6.52632H11.1111Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M6.66675 13.2632C6.66675 15.4496 7.41531 17.5771 8.80008 19.3263C9.08298 19.6837 9.50413 19.9199 9.97089 19.9831C10.4376 20.0462 10.9118 19.9312 11.289 19.6632C11.6662 19.3951 11.9155 18.9962 11.9822 18.554C12.0489 18.1118 11.9274 17.6626 11.6445 17.3053C10.7213 16.1391 10.2223 14.7208 10.2223 13.2632",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M8.44458 6.52631V13.2632",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
function Eu({ size: e, className: n, ...t }) {
  const r = _e(e, t);
  return /* @__PURE__ */ l.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: z("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M5.76123 9.17699V22H18.239V9.17699C18.239 8.35073 17.8982 7.56104 17.2971 6.99422L14.0582 3.94042C12.9025 2.85078 11.0978 2.85078 9.9421 3.94042L6.7032 6.99422C6.10202 7.56104 5.76123 8.35073 5.76123 9.17699Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M20.3964 12.2174L18.239 10.9483V22H19.8754C20.98 22 21.8754 21.1046 21.8754 20V14.8032C21.8754 13.7401 21.3128 12.7564 20.3964 12.2174Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M3.6038 12.2174L5.76123 10.9483V22H4.12486C3.02029 22 2.12486 21.1046 2.12486 20V14.8032C2.12486 13.7401 2.68748 12.7564 3.6038 12.2174Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M12.0002 7.28268V12",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M13.9609 9.15826H10.0393",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M9.72412 18.6074C9.72412 17.3505 10.7431 16.3316 12 16.3316C13.2569 16.3316 14.2759 17.3505 14.2759 18.6074V22H9.72412V18.6074Z",
            stroke: "currentColor",
            strokeWidth: "1.5"
          }
        )
      ]
    }
  );
}
function ku({ size: e, className: n, ...t }) {
  const r = _e(e, t);
  return /* @__PURE__ */ l.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: z("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
function _u({ size: e, className: n, ...t }) {
  const r = _e(e, t);
  return /* @__PURE__ */ l.jsx("svg", { viewBox: "0 0 20 20", fill: "none", className: z("inline-block", n), ...r, children: /* @__PURE__ */ l.jsx(
    "path",
    {
      d: "M10.6517 3.73292C10.3353 3.1997 9.64138 3.1997 9.32503 3.73292L6.86562 7.83985C6.68193 8.13482 6.36558 8.29365 6.04922 8.21424L2.62035 7.46546C2.03866 7.34067 1.54882 7.93061 1.69169 8.56594L3.3449 15.6112C3.43675 15.9856 3.72249 16.2466 4.06946 16.2693C4.06946 16.2693 5.34508 16.6663 9.99856 16.6663C14.652 16.6663 15.9277 16.2693 15.9277 16.2693C16.1828 16.2012 16.5604 15.9743 16.6522 15.6112L18.3054 8.56594C18.4585 7.93061 17.9584 7.34067 17.3768 7.46546L13.9479 8.21424C13.6315 8.28231 13.305 8.13482 13.1315 7.83985L10.6517 3.73292Z",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeMiterlimit: "10"
    }
  ) });
}
function Ru({ size: e, className: n, ...t }) {
  const r = _e(e, t);
  return /* @__PURE__ */ l.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: z("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M16 2V6",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M8 2V6",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M3 10H21",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
function Pu({ size: e, className: n, ...t }) {
  const r = _e(e, t);
  return /* @__PURE__ */ l.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: z("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M20 12V22H4V12",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M22 7H2V12H22V7Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M12 22V7",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
function ju({ size: e, className: n, ...t }) {
  const r = _e(e, t);
  return /* @__PURE__ */ l.jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: z("inline-block", n),
      ...r,
      children: /* @__PURE__ */ l.jsx(
        "path",
        {
          d: "M2 20V13.1757C2 12.6578 2.20091 12.16 2.56045 11.7873L10.5604 3.49258C11.3469 2.67713 12.6531 2.67713 13.4396 3.49258L21.4396 11.7873C21.7991 12.16 22 12.6578 22 13.1757V20C22 21.1046 21.1046 22 20 22H15.4053C14.9053 22 14.5 21.5947 14.5 21.0947V19.0682C14.5 17.6875 13.3807 16.5682 12 16.5682C10.6193 16.5682 9.5 17.6875 9.5 19.0682V21.0947C9.5 21.5947 9.09468 22 8.5947 22H4C2.89543 22 2 21.1046 2 20Z",
          stroke: "currentColor",
          strokeWidth: "1.5"
        }
      )
    }
  );
}
function Au({ size: e, className: n, ...t }) {
  const r = _e(e, t);
  return /* @__PURE__ */ l.jsx("svg", { viewBox: "0 0 20 20", fill: "none", className: z("inline-block", n), ...r, children: /* @__PURE__ */ l.jsx(
    "path",
    {
      d: "M15 7.08333H14.1667V5.41667C14.1667 3.11667 12.3 1.25 10 1.25C7.70001 1.25 5.83334 3.11667 5.83334 5.41667V7.08333H5.00001C4.08334 7.08333 3.33334 7.83333 3.33334 8.75V17.0833C3.33334 18 4.08334 18.75 5.00001 18.75H15C15.9167 18.75 16.6667 18 16.6667 17.0833V8.75C16.6667 7.83333 15.9167 7.08333 15 7.08333ZM7.50001 5.41667C7.50001 4.03333 8.61668 2.91667 10 2.91667C11.3833 2.91667 12.5 4.03333 12.5 5.41667V7.08333H7.50001V5.41667ZM15 17.0833H5.00001V8.75H15V17.0833ZM10 14.5833C10.9167 14.5833 11.6667 13.8333 11.6667 12.9167C11.6667 12 10.9167 11.25 10 11.25C9.08334 11.25 8.33334 12 8.33334 12.9167C8.33334 13.8333 9.08334 14.5833 10 14.5833Z",
      fill: "currentColor"
    }
  ) });
}
function Ou({ size: e, className: n, ...t }) {
  const r = _e(e, t);
  return /* @__PURE__ */ l.jsx("svg", { viewBox: "0 0 20 20", fill: "none", className: z("inline-block", n), ...r, children: /* @__PURE__ */ l.jsx(
    "path",
    {
      d: "M15 7.08333H14.1667V5.41667C14.1667 3.11667 12.3 1.25 10 1.25C7.70001 1.25 5.83334 3.11667 5.83334 5.41667H7.50001C7.50001 4.03333 8.61668 2.91667 10 2.91667C11.3833 2.91667 12.5 4.03333 12.5 5.41667V7.08333H5.00001C4.08334 7.08333 3.33334 7.83333 3.33334 8.75V17.0833C3.33334 18 4.08334 18.75 5.00001 18.75H15C15.9167 18.75 16.6667 18 16.6667 17.0833V8.75C16.6667 7.83333 15.9167 7.08333 15 7.08333ZM15 17.0833H5.00001V8.75H15V17.0833ZM10 14.5833C10.9167 14.5833 11.6667 13.8333 11.6667 12.9167C11.6667 12 10.9167 11.25 10 11.25C9.08334 11.25 8.33334 12 8.33334 12.9167C8.33334 13.8333 9.08334 14.5833 10 14.5833Z",
      fill: "currentColor"
    }
  ) });
}
function Tu({ size: e, className: n, ...t }) {
  const r = _e(e, t);
  return /* @__PURE__ */ l.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: z("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M4 20C4 18.8954 4.89543 18 6 18H20V22H6C4.89543 22 4 21.1046 4 20V20Z",
            stroke: "currentColor",
            strokeWidth: "1.5"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M4 4C4 2.89543 4.89543 2 6 2H20V22H6C4.89543 22 4 21.1046 4 20V4Z",
            stroke: "currentColor",
            strokeWidth: "1.5"
          }
        ),
        /* @__PURE__ */ l.jsx("path", { d: "M12 6.16666L12 14.5", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ l.jsx("path", { d: "M9 9.08334L15 9.08334", stroke: "currentColor", strokeWidth: "1.5" })
      ]
    }
  );
}
function Mu({ size: e, className: n, ...t }) {
  const r = _e(e, t);
  return /* @__PURE__ */ l.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: z("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V19ZM3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H6C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V19Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
function Du({ size: e, className: n, ...t }) {
  const r = _e(e, t);
  return /* @__PURE__ */ l.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: z("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M21.791 9.85414C21.6806 9.41327 21.4559 9.00933 21.1395 8.68312C20.823 8.3569 20.4261 8.11997 19.9888 7.99625C18.3911 7.60609 11.9999 7.60609 11.9999 7.60609C11.9999 7.60609 5.60879 7.60609 4.011 8.03341C3.5737 8.15713 3.17679 8.39406 2.86036 8.72028C2.54394 9.04649 2.3192 9.45043 2.20885 9.8913C1.91643 11.5128 1.7734 13.1577 1.78154 14.8054C1.77111 16.4655 1.91416 18.1229 2.20885 19.7567C2.3305 20.1839 2.56028 20.5724 2.87597 20.8849C3.19166 21.1973 3.58259 21.423 4.011 21.5402C5.60879 21.9676 11.9999 21.9676 11.9999 21.9676C11.9999 21.9676 18.3911 21.9676 19.9888 21.5402C20.4261 21.4165 20.823 21.1796 21.1395 20.8534C21.4559 20.5272 21.6806 20.1232 21.791 19.6824C22.0811 18.073 22.2242 16.4407 22.2183 14.8054C22.2287 13.1453 22.0857 11.4879 21.791 9.85414Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M3.09961 8.09392V6.89661C3.19992 6.49584 3.40422 6.12864 3.69186 5.8321C3.97951 5.53556 4.34032 5.32017 4.73784 5.20771C6.1903 4.81926 12.0001 4.81926 12.0001 4.81926C12.0001 4.81926 17.8099 4.81926 19.2624 5.17393C19.6599 5.2864 20.0207 5.50178 20.3084 5.79832C20.596 6.09486 20.8003 6.46206 20.9006 6.86283V8.09392",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M3.9895 5.40155V3.90205C4.07978 3.54135 4.26365 3.21088 4.52253 2.94399C4.78141 2.6771 5.10614 2.48326 5.46391 2.38204C6.77112 2.03243 12 2.03243 12 2.03243C12 2.03243 17.2288 2.03243 18.536 2.35163C18.8938 2.45286 19.2185 2.6467 19.4774 2.91359C19.7363 3.18048 19.9201 3.51095 20.0104 3.87165V5.40155",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M9.90991 17.8431L15.2513 14.8054L9.90991 11.7678V17.8431Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
function Nu({ size: e, className: n, ...t }) {
  const r = _e(e, t);
  return /* @__PURE__ */ l.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: z("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M14.022 10.9211L12.4757 4.09878C12.232 3.02346 13.0494 2 14.152 2C14.8038 2 15.3995 2.36863 15.6903 2.95192L21.2123 14.0276C21.7141 15.0341 21.769 16.2053 21.3635 17.2544L20.518 19.442C19.9222 20.9836 18.4397 22 16.787 22H16C13.7909 22 12 20.2091 12 18V12.9603C12 11.8341 12.913 10.9211 14.0392 10.9211C15.1654 10.9211 16.0784 11.8341 16.0784 12.9603V17.0633",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M9.97805 10.9211L11.5243 4.09878C11.768 3.02346 10.9506 2 9.84798 2C9.19622 2 8.60053 2.36863 8.30972 2.95192L2.78773 14.0276C2.28593 15.0341 2.23102 16.2053 2.63645 17.2544L3.48195 19.442C4.07775 20.9836 5.56028 22 7.21299 22H8C10.2091 22 12 20.2091 12 18V12.9603C12 11.8341 11.087 10.9211 9.96078 10.9211C8.83456 10.9211 7.92157 11.8341 7.92157 12.9603V17.0633",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        )
      ]
    }
  );
}
function Iu({ size: e, className: n, ...t }) {
  const r = _e(e, t);
  return /* @__PURE__ */ l.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: z("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M3 10H21",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M19.2 6H4.8C3.80589 6 3 6.76751 3 7.71429V16.2857C3 17.2325 3.80589 18 4.8 18H19.2C20.1941 18 21 17.2325 21 16.2857V7.71429C21 6.76751 20.1941 6 19.2 6Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M3 10.285H21",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
function Lu({ size: e, className: n, ...t }) {
  const r = _e(e, t);
  return /* @__PURE__ */ l.jsx("svg", { viewBox: "0 0 48 48", fill: "none", className: z("inline-block", n), ...r, children: /* @__PURE__ */ l.jsx(
    "path",
    {
      d: "M30 16V32H10V16H30ZM32 12H8C6.9 12 6 12.9 6 14V34C6 35.1 6.9 36 8 36H32C33.1 36 34 35.1 34 34V27L42 35V13L34 21V14C34 12.9 33.1 12 32 12Z",
      fill: "currentColor"
    }
  ) });
}
const Fu = {
  announcement: Su,
  church: Eu,
  class: ku,
  crown: _u,
  event: Ru,
  gift: Pu,
  home: ju,
  "lock-closed": Au,
  "lock-open": Ou,
  ministry: Tu,
  podcast: Mu,
  series: Du,
  sermon: Nu,
  subscription: Iu,
  video: Lu
};
function tb({ name: e, ...n }) {
  const t = Fu[e];
  return /* @__PURE__ */ l.jsx(t, { ...n });
}
function zu({ className: e, type: n, ...t }) {
  return /* @__PURE__ */ l.jsx(
    "input",
    {
      type: n,
      "data-slot": "input",
      className: z(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
        "border border-gray-200 h-10 w-full min-w-0 rounded-sm bg-transparent px-3 text-base font-sans transition-[color,box-shadow]",
        "outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "hover:border-blue-hepatica-700 focus-visible:border-2 focus-visible:border-blue-hepatica-600",
        "focus-visible:shadow-button focus-visible:ring-0 focus-visible:bg-blue-hepatica-50",
        "aria-invalid:border-bright-red-600 aria-invalid:focus-visible:border-bright-red-600",
        e
      ),
      ...t
    }
  );
}
function nb({
  className: e,
  ...n
}) {
  const [t, r] = qe(!1), o = ye(() => {
    r((i) => !i);
  }, []);
  return /* @__PURE__ */ l.jsxs("div", { className: "relative w-full", children: [
    /* @__PURE__ */ l.jsx(
      zu,
      {
        ...n,
        "data-slot": "input",
        className: z(e, "pr-10"),
        type: t ? "text" : "password"
      }
    ),
    /* @__PURE__ */ l.jsxs(
      "button",
      {
        type: "button",
        className: "absolute right-0 top-0 size-10 flex items-center justify-center",
        onClick: o,
        children: [
          t && /* @__PURE__ */ l.jsx(Gd, { className: "size-4 text-gray-300" }),
          !t && /* @__PURE__ */ l.jsx(Yd, { className: "size-4 text-gray-300" })
        ]
      }
    )
  ] });
}
var $u = Object.defineProperty, Wu = Object.defineProperties, Vu = Object.getOwnPropertyDescriptors, Pn = Object.getOwnPropertySymbols, Wa = Object.prototype.hasOwnProperty, Va = Object.prototype.propertyIsEnumerable, ri = (e, n, t) => n in e ? $u(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Bu = (e, n) => {
  for (var t in n || (n = {})) Wa.call(n, t) && ri(e, t, n[t]);
  if (Pn) for (var t of Pn(n)) Va.call(n, t) && ri(e, t, n[t]);
  return e;
}, Hu = (e, n) => Wu(e, Vu(n)), Uu = (e, n) => {
  var t = {};
  for (var r in e) Wa.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && Pn) for (var r of Pn(e)) n.indexOf(r) < 0 && Va.call(e, r) && (t[r] = e[r]);
  return t;
};
function Gu(e) {
  let n = setTimeout(e, 0), t = setTimeout(e, 10), r = setTimeout(e, 50);
  return [n, t, r];
}
function qu(e) {
  let n = u.useRef();
  return u.useEffect(() => {
    n.current = e;
  }), n.current;
}
var Yu = 18, Ba = 40, Ku = `${Ba}px`, Zu = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function Xu({ containerRef: e, inputRef: n, pushPasswordManagerStrategy: t, isFocused: r }) {
  let [o, i] = u.useState(!1), [a, s] = u.useState(!1), [c, d] = u.useState(!1), p = u.useMemo(() => t === "none" ? !1 : (t === "increase-width" || t === "experimental-no-flickering") && o && a, [o, a, t]), f = u.useCallback(() => {
    let v = e.current, h = n.current;
    if (!v || !h || c || t === "none") return;
    let x = v, m = x.getBoundingClientRect().left + x.offsetWidth, g = x.getBoundingClientRect().top + x.offsetHeight / 2, y = m - Yu, C = g;
    document.querySelectorAll(Zu).length === 0 && document.elementFromPoint(y, C) === v || (i(!0), d(!0));
  }, [e, n, c, t]);
  return u.useEffect(() => {
    let v = e.current;
    if (!v || t === "none") return;
    function h() {
      let m = window.innerWidth - v.getBoundingClientRect().right;
      s(m >= Ba);
    }
    h();
    let x = setInterval(h, 1e3);
    return () => {
      clearInterval(x);
    };
  }, [e, t]), u.useEffect(() => {
    let v = r || document.activeElement === n.current;
    if (t === "none" || !v) return;
    let h = setTimeout(f, 0), x = setTimeout(f, 2e3), m = setTimeout(f, 5e3), g = setTimeout(() => {
      d(!0);
    }, 6e3);
    return () => {
      clearTimeout(h), clearTimeout(x), clearTimeout(m), clearTimeout(g);
    };
  }, [n, r, t, f]), { hasPWMBadge: o, willPushPWMBadge: p, PWM_BADGE_SPACE_WIDTH: Ku };
}
var Ha = u.createContext({}), Ua = u.forwardRef((e, n) => {
  var t = e, { value: r, onChange: o, maxLength: i, textAlign: a = "left", pattern: s, placeholder: c, inputMode: d = "numeric", onComplete: p, pushPasswordManagerStrategy: f = "increase-width", pasteTransformer: v, containerClassName: h, noScriptCSSFallback: x = Ju, render: m, children: g } = t, y = Uu(t, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "render", "children"]), C, S, E, w, N;
  let [j, P] = u.useState(typeof y.defaultValue == "string" ? y.defaultValue : ""), I = r ?? j, V = qu(I), X = u.useCallback((ee) => {
    o?.(ee), P(ee);
  }, [o]), q = u.useMemo(() => s ? typeof s == "string" ? new RegExp(s) : s : null, [s]), U = u.useRef(null), H = u.useRef(null), $ = u.useRef({ value: I, onChange: X, isIOS: typeof window < "u" && ((S = (C = window?.CSS) == null ? void 0 : C.supports) == null ? void 0 : S.call(C, "-webkit-touch-callout", "none")) }), L = u.useRef({ prev: [(E = U.current) == null ? void 0 : E.selectionStart, (w = U.current) == null ? void 0 : w.selectionEnd, (N = U.current) == null ? void 0 : N.selectionDirection] });
  u.useImperativeHandle(n, () => U.current, []), u.useEffect(() => {
    let ee = U.current, oe = H.current;
    if (!ee || !oe) return;
    $.current.value !== ee.value && $.current.onChange(ee.value), L.current.prev = [ee.selectionStart, ee.selectionEnd, ee.selectionDirection];
    function be() {
      if (document.activeElement !== ee) {
        O(null), T(null);
        return;
      }
      let fe = ee.selectionStart, Ce = ee.selectionEnd, yt = ee.selectionDirection, je = ee.maxLength, Ue = ee.value, F = L.current.prev, te = -1, de = -1, ve;
      if (Ue.length !== 0 && fe !== null && Ce !== null) {
        let Lt = fe === Ce, Ft = fe === Ue.length && Ue.length < je;
        if (Lt && !Ft) {
          let Me = fe;
          if (Me === 0) te = 0, de = 1, ve = "forward";
          else if (Me === je) te = Me - 1, de = Me, ve = "backward";
          else if (je > 1 && Ue.length > 1) {
            let et = 0;
            if (F[0] !== null && F[1] !== null) {
              ve = Me < F[1] ? "backward" : "forward";
              let zt = F[0] === F[1] && F[0] < je;
              ve === "backward" && !zt && (et = -1);
            }
            te = et + Me, de = et + Me + 1;
          }
        }
        te !== -1 && de !== -1 && te !== de && U.current.setSelectionRange(te, de, ve);
      }
      let Ee = te !== -1 ? te : fe, Je = de !== -1 ? de : Ce, Qe = ve ?? yt;
      O(Ee), T(Je), L.current.prev = [Ee, Je, Qe];
    }
    if (document.addEventListener("selectionchange", be, { capture: !0 }), be(), document.activeElement === ee && _(!0), !document.getElementById("input-otp-style")) {
      let fe = document.createElement("style");
      if (fe.id = "input-otp-style", document.head.appendChild(fe), fe.sheet) {
        let Ce = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        Bt(fe.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), Bt(fe.sheet, `[data-input-otp]:autofill { ${Ce} }`), Bt(fe.sheet, `[data-input-otp]:-webkit-autofill { ${Ce} }`), Bt(fe.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), Bt(fe.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let ge = () => {
      oe && oe.style.setProperty("--root-height", `${ee.clientHeight}px`);
    };
    ge();
    let Se = new ResizeObserver(ge);
    return Se.observe(ee), () => {
      document.removeEventListener("selectionchange", be, { capture: !0 }), Se.disconnect();
    };
  }, []);
  let [J, R] = u.useState(!1), [M, _] = u.useState(!1), [b, O] = u.useState(null), [D, T] = u.useState(null);
  u.useEffect(() => {
    Gu(() => {
      var ee, oe, be, ge;
      (ee = U.current) == null || ee.dispatchEvent(new Event("input"));
      let Se = (oe = U.current) == null ? void 0 : oe.selectionStart, fe = (be = U.current) == null ? void 0 : be.selectionEnd, Ce = (ge = U.current) == null ? void 0 : ge.selectionDirection;
      Se !== null && fe !== null && (O(Se), T(fe), L.current.prev = [Se, fe, Ce]);
    });
  }, [I, M]), u.useEffect(() => {
    V !== void 0 && I !== V && V.length < i && I.length === i && p?.(I);
  }, [i, p, V, I]);
  let Z = Xu({ containerRef: H, inputRef: U, pushPasswordManagerStrategy: f, isFocused: M }), G = u.useCallback((ee) => {
    let oe = ee.currentTarget.value.slice(0, i);
    if (oe.length > 0 && q && !q.test(oe)) {
      ee.preventDefault();
      return;
    }
    typeof V == "string" && oe.length < V.length && document.dispatchEvent(new Event("selectionchange")), X(oe);
  }, [i, X, V, q]), k = u.useCallback(() => {
    var ee;
    if (U.current) {
      let oe = Math.min(U.current.value.length, i - 1), be = U.current.value.length;
      (ee = U.current) == null || ee.setSelectionRange(oe, be), O(oe), T(be);
    }
    _(!0);
  }, [i]), W = u.useCallback((ee) => {
    var oe, be;
    let ge = U.current;
    if (!v && (!$.current.isIOS || !ee.clipboardData || !ge)) return;
    let Se = ee.clipboardData.getData("text/plain"), fe = v ? v(Se) : Se;
    ee.preventDefault();
    let Ce = (oe = U.current) == null ? void 0 : oe.selectionStart, yt = (be = U.current) == null ? void 0 : be.selectionEnd, je = (Ce !== yt ? I.slice(0, Ce) + fe + I.slice(yt) : I.slice(0, Ce) + fe + I.slice(Ce)).slice(0, i);
    if (je.length > 0 && q && !q.test(je)) return;
    ge.value = je, X(je);
    let Ue = Math.min(je.length, i - 1), F = je.length;
    ge.setSelectionRange(Ue, F), O(Ue), T(F);
  }, [i, X, q, I]), Q = u.useMemo(() => ({ position: "relative", cursor: y.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [y.disabled]), B = u.useMemo(() => ({ position: "absolute", inset: 0, width: Z.willPushPWMBadge ? `calc(100% + ${Z.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: Z.willPushPWMBadge ? `inset(0 ${Z.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: a, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [Z.PWM_BADGE_SPACE_WIDTH, Z.willPushPWMBadge, a]), re = u.useMemo(() => u.createElement("input", Hu(Bu({ autoComplete: y.autoComplete || "one-time-code" }, y), { "data-input-otp": !0, "data-input-otp-placeholder-shown": I.length === 0 || void 0, "data-input-otp-mss": b, "data-input-otp-mse": D, inputMode: d, pattern: q?.source, "aria-placeholder": c, style: B, maxLength: i, value: I, ref: U, onPaste: (ee) => {
    var oe;
    W(ee), (oe = y.onPaste) == null || oe.call(y, ee);
  }, onChange: G, onMouseOver: (ee) => {
    var oe;
    R(!0), (oe = y.onMouseOver) == null || oe.call(y, ee);
  }, onMouseLeave: (ee) => {
    var oe;
    R(!1), (oe = y.onMouseLeave) == null || oe.call(y, ee);
  }, onFocus: (ee) => {
    var oe;
    k(), (oe = y.onFocus) == null || oe.call(y, ee);
  }, onBlur: (ee) => {
    var oe;
    _(!1), (oe = y.onBlur) == null || oe.call(y, ee);
  } })), [G, k, W, d, B, i, D, b, y, q?.source, I]), A = u.useMemo(() => ({ slots: Array.from({ length: i }).map((ee, oe) => {
    var be;
    let ge = M && b !== null && D !== null && (b === D && oe === b || oe >= b && oe < D), Se = I[oe] !== void 0 ? I[oe] : null, fe = I[0] !== void 0 ? null : (be = c?.[oe]) != null ? be : null;
    return { char: Se, placeholderChar: fe, isActive: ge, hasFakeCaret: ge && Se === null };
  }), isFocused: M, isHovering: !y.disabled && J }), [M, J, i, D, b, y.disabled, I]), pe = u.useMemo(() => m ? m(A) : u.createElement(Ha.Provider, { value: A }, g), [g, A, m]);
  return u.createElement(u.Fragment, null, x !== null && u.createElement("noscript", null, u.createElement("style", null, x)), u.createElement("div", { ref: H, "data-input-otp-container": !0, style: Q, className: h }, pe, u.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, re)));
});
Ua.displayName = "Input";
function Bt(e, n) {
  try {
    e.insertRule(n);
  } catch {
    console.error("input-otp could not insert CSS rule:", n);
  }
}
var Ju = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;
function rb({
  className: e,
  containerClassName: n,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    Ua,
    {
      "data-slot": "input-otp",
      containerClassName: z(
        "flex items-center gap-2 has-disabled:opacity-50",
        n
      ),
      className: z("disabled:cursor-not-allowed", e),
      ...t
    }
  );
}
function ob({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      "data-slot": "input-otp-group",
      className: z("flex items-center gap-2", e),
      ...n
    }
  );
}
function ib({
  index: e,
  className: n,
  ...t
}) {
  const r = Vr(Ha), { char: o, hasFakeCaret: i, isActive: a } = r?.slots[e] ?? {};
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": a,
      className: z(
        "data-[active=true]:bg-white data-[active=true]:shadow-button data-[active=true]:ring-0",
        "data-[active=true]:border-blue-hepatica-600 data-[active=true]:aria-invalid:border-bright-red-600",
        "border border-gray-200 relative flex size-10 items-center justify-center",
        " rounded-sm text-base font-sans bg-transparent transition-all outline-none",
        "data-[active=true]:z-10",
        n
      ),
      ...t,
      children: [
        o,
        i && /* @__PURE__ */ l.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ l.jsx("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function ab({ ...e }) {
  return /* @__PURE__ */ l.jsx("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ l.jsx(Zd, {}) });
}
function Qu({ size: e = 48, className: n, ...t }) {
  const r = typeof e == "number" ? `${e}` : e, o = typeof t["aria-label"] == "string";
  return /* @__PURE__ */ l.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 47 48",
      width: r,
      height: r,
      className: z("inline-block", n),
      "aria-hidden": o ? void 0 : !0,
      role: o ? "img" : "presentation",
      ...t,
      children: [
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M19.2133 35.3017C18.2492 38.5617 18.6978 42.077 20.4506 44.9899L20.4943 45.0635L13.8785 40.431L20.4869 30.9956L19.2133 35.3017ZM20.7073 24.9743C21.9138 25.819 22.2068 27.482 21.3622 28.6884L13.3829 40.0841L11.1984 38.5544L20.7073 24.9743ZM20.7056 18.0024C22.241 19.0776 22.6141 21.1938 21.5391 22.7293L10.7017 38.2067L9.50708 37.3701C8.96698 36.992 8.46813 36.5767 8.00954 36.1319L20.7056 18.0024ZM20.7058 9.75901C22.5703 11.0646 23.0234 13.635 21.718 15.4996L7.57802 35.6923C6.53641 34.5734 5.73826 33.2869 5.19379 31.9112L20.7058 9.75901ZM20.7043 0.246588C22.8979 1.78253 23.4309 4.80619 21.8951 6.99983L4.93983 31.2132C3.80636 27.7434 4.24748 23.8057 6.47085 20.5729L20.7043 0.246588Z",
            fill: "#BF3535"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M27.3872 35.3012C28.3515 38.5614 27.9018 42.0772 26.1488 44.9902L26.1093 45.0566L32.7196 40.4281L26.1137 30.9951L27.3872 35.3012ZM25.8921 24.9746C24.686 25.8194 24.3926 27.4824 25.2372 28.6887L33.2151 40.0811L35.3996 38.5515L25.8921 24.9746ZM25.894 18.0018C24.3585 19.077 23.9852 21.1941 25.0604 22.7296L35.8963 38.2037L37.0864 37.3704C37.6279 36.9913 38.128 36.5748 38.5875 36.1288L25.894 18.0018ZM25.8937 9.75931C24.0293 11.0649 23.5762 13.6344 24.8816 15.4989L39.0192 35.6883C40.0603 34.5689 40.8578 33.2819 41.4017 31.9058L25.8937 9.75931ZM25.8931 0.24751C23.6994 1.78353 23.1662 4.8071 24.7023 7.00075L41.6553 31.2098C42.7973 27.7103 42.3374 23.7349 40.0634 20.4873L28.6573 4.19768L28.6592 4.19802L25.8931 0.24751Z",
            fill: "#BF3535"
          }
        )
      ]
    }
  );
}
function ep({
  size: e = 32,
  className: n,
  ...t
}) {
  return /* @__PURE__ */ l.jsxs("div", { className: z("inline-flex items-center gap-2", n), ...t, children: [
    /* @__PURE__ */ l.jsx(Qu, { size: e }),
    /* @__PURE__ */ l.jsx("span", { className: "font-sans text-base font-normal leading-none text-white", children: "MercySeat" })
  ] });
}
var dn = { exports: {} }, un = { exports: {} }, ce = {};
var oi;
function tp() {
  if (oi) return ce;
  oi = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function S(w) {
    if (typeof w == "object" && w !== null) {
      var N = w.$$typeof;
      switch (N) {
        case n:
          switch (w = w.type, w) {
            case c:
            case d:
            case r:
            case i:
            case o:
            case f:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case s:
                case p:
                case x:
                case h:
                case a:
                  return w;
                default:
                  return N;
              }
          }
        case t:
          return N;
      }
    }
  }
  function E(w) {
    return S(w) === d;
  }
  return ce.AsyncMode = c, ce.ConcurrentMode = d, ce.ContextConsumer = s, ce.ContextProvider = a, ce.Element = n, ce.ForwardRef = p, ce.Fragment = r, ce.Lazy = x, ce.Memo = h, ce.Portal = t, ce.Profiler = i, ce.StrictMode = o, ce.Suspense = f, ce.isAsyncMode = function(w) {
    return E(w) || S(w) === c;
  }, ce.isConcurrentMode = E, ce.isContextConsumer = function(w) {
    return S(w) === s;
  }, ce.isContextProvider = function(w) {
    return S(w) === a;
  }, ce.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === n;
  }, ce.isForwardRef = function(w) {
    return S(w) === p;
  }, ce.isFragment = function(w) {
    return S(w) === r;
  }, ce.isLazy = function(w) {
    return S(w) === x;
  }, ce.isMemo = function(w) {
    return S(w) === h;
  }, ce.isPortal = function(w) {
    return S(w) === t;
  }, ce.isProfiler = function(w) {
    return S(w) === i;
  }, ce.isStrictMode = function(w) {
    return S(w) === o;
  }, ce.isSuspense = function(w) {
    return S(w) === f;
  }, ce.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === d || w === i || w === o || w === f || w === v || typeof w == "object" && w !== null && (w.$$typeof === x || w.$$typeof === h || w.$$typeof === a || w.$$typeof === s || w.$$typeof === p || w.$$typeof === g || w.$$typeof === y || w.$$typeof === C || w.$$typeof === m);
  }, ce.typeOf = S, ce;
}
var le = {};
var ii;
function np() {
  return ii || (ii = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function S(A) {
      return typeof A == "string" || typeof A == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      A === r || A === d || A === i || A === o || A === f || A === v || typeof A == "object" && A !== null && (A.$$typeof === x || A.$$typeof === h || A.$$typeof === a || A.$$typeof === s || A.$$typeof === p || A.$$typeof === g || A.$$typeof === y || A.$$typeof === C || A.$$typeof === m);
    }
    function E(A) {
      if (typeof A == "object" && A !== null) {
        var pe = A.$$typeof;
        switch (pe) {
          case n:
            var ee = A.type;
            switch (ee) {
              case c:
              case d:
              case r:
              case i:
              case o:
              case f:
                return ee;
              default:
                var oe = ee && ee.$$typeof;
                switch (oe) {
                  case s:
                  case p:
                  case x:
                  case h:
                  case a:
                    return oe;
                  default:
                    return pe;
                }
            }
          case t:
            return pe;
        }
      }
    }
    var w = c, N = d, j = s, P = a, I = n, V = p, X = r, q = x, U = h, H = t, $ = i, L = o, J = f, R = !1;
    function M(A) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(A) || E(A) === c;
    }
    function _(A) {
      return E(A) === d;
    }
    function b(A) {
      return E(A) === s;
    }
    function O(A) {
      return E(A) === a;
    }
    function D(A) {
      return typeof A == "object" && A !== null && A.$$typeof === n;
    }
    function T(A) {
      return E(A) === p;
    }
    function Z(A) {
      return E(A) === r;
    }
    function G(A) {
      return E(A) === x;
    }
    function k(A) {
      return E(A) === h;
    }
    function W(A) {
      return E(A) === t;
    }
    function Q(A) {
      return E(A) === i;
    }
    function B(A) {
      return E(A) === o;
    }
    function re(A) {
      return E(A) === f;
    }
    le.AsyncMode = w, le.ConcurrentMode = N, le.ContextConsumer = j, le.ContextProvider = P, le.Element = I, le.ForwardRef = V, le.Fragment = X, le.Lazy = q, le.Memo = U, le.Portal = H, le.Profiler = $, le.StrictMode = L, le.Suspense = J, le.isAsyncMode = M, le.isConcurrentMode = _, le.isContextConsumer = b, le.isContextProvider = O, le.isElement = D, le.isForwardRef = T, le.isFragment = Z, le.isLazy = G, le.isMemo = k, le.isPortal = W, le.isProfiler = Q, le.isStrictMode = B, le.isSuspense = re, le.isValidElementType = S, le.typeOf = E;
  })()), le;
}
var ai;
function Ga() {
  return ai || (ai = 1, process.env.NODE_ENV === "production" ? un.exports = tp() : un.exports = np()), un.exports;
}
var xr, si;
function rp() {
  if (si) return xr;
  si = 1;
  var e = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var c = Object.getOwnPropertyNames(a).map(function(p) {
        return a[p];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        d[p] = p;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return xr = o() ? Object.assign : function(i, a) {
    for (var s, c = r(i), d, p = 1; p < arguments.length; p++) {
      s = Object(arguments[p]);
      for (var f in s)
        n.call(s, f) && (c[f] = s[f]);
      if (e) {
        d = e(s);
        for (var v = 0; v < d.length; v++)
          t.call(s, d[v]) && (c[d[v]] = s[d[v]]);
      }
    }
    return c;
  }, xr;
}
var br, ci;
function mo() {
  if (ci) return br;
  ci = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return br = e, br;
}
var yr, li;
function qa() {
  return li || (li = 1, yr = Function.call.bind(Object.prototype.hasOwnProperty)), yr;
}
var wr, di;
function op() {
  if (di) return wr;
  di = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = /* @__PURE__ */ mo(), t = {}, r = /* @__PURE__ */ qa();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, c, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in i)
        if (r(i, p)) {
          var f;
          try {
            if (typeof i[p] != "function") {
              var v = Error(
                (c || "React class") + ": " + s + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            f = i[p](a, p, c, s, null, n);
          } catch (x) {
            f = x;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in t)) {
            t[f.message] = !0;
            var h = d ? d() : "";
            e(
              "Failed " + s + " type: " + f.message + (h ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, wr = o, wr;
}
var Cr, ui;
function ip() {
  if (ui) return Cr;
  ui = 1;
  var e = Ga(), n = rp(), t = /* @__PURE__ */ mo(), r = /* @__PURE__ */ qa(), o = /* @__PURE__ */ op(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var c = "Warning: " + s;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Cr = function(s, c) {
    var d = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function f(_) {
      var b = _ && (d && _[d] || _[p]);
      if (typeof b == "function")
        return b;
    }
    var v = "<<anonymous>>", h = {
      array: y("array"),
      bigint: y("bigint"),
      bool: y("boolean"),
      func: y("function"),
      number: y("number"),
      object: y("object"),
      string: y("string"),
      symbol: y("symbol"),
      any: C(),
      arrayOf: S,
      element: E(),
      elementType: w(),
      instanceOf: N,
      node: V(),
      objectOf: P,
      oneOf: j,
      oneOfType: I,
      shape: q,
      exact: U
    };
    function x(_, b) {
      return _ === b ? _ !== 0 || 1 / _ === 1 / b : _ !== _ && b !== b;
    }
    function m(_, b) {
      this.message = _, this.data = b && typeof b == "object" ? b : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function g(_) {
      if (process.env.NODE_ENV !== "production")
        var b = {}, O = 0;
      function D(Z, G, k, W, Q, B, re) {
        if (W = W || v, B = B || k, re !== t) {
          if (c) {
            var A = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw A.name = "Invariant Violation", A;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var pe = W + ":" + k;
            !b[pe] && // Avoid spamming the console because they are often not actionable except for lib authors
            O < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + B + "` prop on `" + W + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), b[pe] = !0, O++);
          }
        }
        return G[k] == null ? Z ? G[k] === null ? new m("The " + Q + " `" + B + "` is marked as required " + ("in `" + W + "`, but its value is `null`.")) : new m("The " + Q + " `" + B + "` is marked as required in " + ("`" + W + "`, but its value is `undefined`.")) : null : _(G, k, W, Q, B);
      }
      var T = D.bind(null, !1);
      return T.isRequired = D.bind(null, !0), T;
    }
    function y(_) {
      function b(O, D, T, Z, G, k) {
        var W = O[D], Q = L(W);
        if (Q !== _) {
          var B = J(W);
          return new m(
            "Invalid " + Z + " `" + G + "` of type " + ("`" + B + "` supplied to `" + T + "`, expected ") + ("`" + _ + "`."),
            { expectedType: _ }
          );
        }
        return null;
      }
      return g(b);
    }
    function C() {
      return g(a);
    }
    function S(_) {
      function b(O, D, T, Z, G) {
        if (typeof _ != "function")
          return new m("Property `" + G + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
        var k = O[D];
        if (!Array.isArray(k)) {
          var W = L(k);
          return new m("Invalid " + Z + " `" + G + "` of type " + ("`" + W + "` supplied to `" + T + "`, expected an array."));
        }
        for (var Q = 0; Q < k.length; Q++) {
          var B = _(k, Q, T, Z, G + "[" + Q + "]", t);
          if (B instanceof Error)
            return B;
        }
        return null;
      }
      return g(b);
    }
    function E() {
      function _(b, O, D, T, Z) {
        var G = b[O];
        if (!s(G)) {
          var k = L(G);
          return new m("Invalid " + T + " `" + Z + "` of type " + ("`" + k + "` supplied to `" + D + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(_);
    }
    function w() {
      function _(b, O, D, T, Z) {
        var G = b[O];
        if (!e.isValidElementType(G)) {
          var k = L(G);
          return new m("Invalid " + T + " `" + Z + "` of type " + ("`" + k + "` supplied to `" + D + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(_);
    }
    function N(_) {
      function b(O, D, T, Z, G) {
        if (!(O[D] instanceof _)) {
          var k = _.name || v, W = M(O[D]);
          return new m("Invalid " + Z + " `" + G + "` of type " + ("`" + W + "` supplied to `" + T + "`, expected ") + ("instance of `" + k + "`."));
        }
        return null;
      }
      return g(b);
    }
    function j(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function b(O, D, T, Z, G) {
        for (var k = O[D], W = 0; W < _.length; W++)
          if (x(k, _[W]))
            return null;
        var Q = JSON.stringify(_, function(re, A) {
          var pe = J(A);
          return pe === "symbol" ? String(A) : A;
        });
        return new m("Invalid " + Z + " `" + G + "` of value `" + String(k) + "` " + ("supplied to `" + T + "`, expected one of " + Q + "."));
      }
      return g(b);
    }
    function P(_) {
      function b(O, D, T, Z, G) {
        if (typeof _ != "function")
          return new m("Property `" + G + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
        var k = O[D], W = L(k);
        if (W !== "object")
          return new m("Invalid " + Z + " `" + G + "` of type " + ("`" + W + "` supplied to `" + T + "`, expected an object."));
        for (var Q in k)
          if (r(k, Q)) {
            var B = _(k, Q, T, Z, G + "." + Q, t);
            if (B instanceof Error)
              return B;
          }
        return null;
      }
      return g(b);
    }
    function I(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var b = 0; b < _.length; b++) {
        var O = _[b];
        if (typeof O != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + R(O) + " at index " + b + "."
          ), a;
      }
      function D(T, Z, G, k, W) {
        for (var Q = [], B = 0; B < _.length; B++) {
          var re = _[B], A = re(T, Z, G, k, W, t);
          if (A == null)
            return null;
          A.data && r(A.data, "expectedType") && Q.push(A.data.expectedType);
        }
        var pe = Q.length > 0 ? ", expected one of type [" + Q.join(", ") + "]" : "";
        return new m("Invalid " + k + " `" + W + "` supplied to " + ("`" + G + "`" + pe + "."));
      }
      return g(D);
    }
    function V() {
      function _(b, O, D, T, Z) {
        return H(b[O]) ? null : new m("Invalid " + T + " `" + Z + "` supplied to " + ("`" + D + "`, expected a ReactNode."));
      }
      return g(_);
    }
    function X(_, b, O, D, T) {
      return new m(
        (_ || "React class") + ": " + b + " type `" + O + "." + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
      );
    }
    function q(_) {
      function b(O, D, T, Z, G) {
        var k = O[D], W = L(k);
        if (W !== "object")
          return new m("Invalid " + Z + " `" + G + "` of type `" + W + "` " + ("supplied to `" + T + "`, expected `object`."));
        for (var Q in _) {
          var B = _[Q];
          if (typeof B != "function")
            return X(T, Z, G, Q, J(B));
          var re = B(k, Q, T, Z, G + "." + Q, t);
          if (re)
            return re;
        }
        return null;
      }
      return g(b);
    }
    function U(_) {
      function b(O, D, T, Z, G) {
        var k = O[D], W = L(k);
        if (W !== "object")
          return new m("Invalid " + Z + " `" + G + "` of type `" + W + "` " + ("supplied to `" + T + "`, expected `object`."));
        var Q = n({}, O[D], _);
        for (var B in Q) {
          var re = _[B];
          if (r(_, B) && typeof re != "function")
            return X(T, Z, G, B, J(re));
          if (!re)
            return new m(
              "Invalid " + Z + " `" + G + "` key `" + B + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(O[D], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(_), null, "  ")
            );
          var A = re(k, B, T, Z, G + "." + B, t);
          if (A)
            return A;
        }
        return null;
      }
      return g(b);
    }
    function H(_) {
      switch (typeof _) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !_;
        case "object":
          if (Array.isArray(_))
            return _.every(H);
          if (_ === null || s(_))
            return !0;
          var b = f(_);
          if (b) {
            var O = b.call(_), D;
            if (b !== _.entries) {
              for (; !(D = O.next()).done; )
                if (!H(D.value))
                  return !1;
            } else
              for (; !(D = O.next()).done; ) {
                var T = D.value;
                if (T && !H(T[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function $(_, b) {
      return _ === "symbol" ? !0 : b ? b["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && b instanceof Symbol : !1;
    }
    function L(_) {
      var b = typeof _;
      return Array.isArray(_) ? "array" : _ instanceof RegExp ? "object" : $(b, _) ? "symbol" : b;
    }
    function J(_) {
      if (typeof _ > "u" || _ === null)
        return "" + _;
      var b = L(_);
      if (b === "object") {
        if (_ instanceof Date)
          return "date";
        if (_ instanceof RegExp)
          return "regexp";
      }
      return b;
    }
    function R(_) {
      var b = J(_);
      switch (b) {
        case "array":
        case "object":
          return "an " + b;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + b;
        default:
          return b;
      }
    }
    function M(_) {
      return !_.constructor || !_.constructor.name ? v : _.constructor.name;
    }
    return h.checkPropTypes = o, h.resetWarningCache = o.resetWarningCache, h.PropTypes = h, h;
  }, Cr;
}
var Sr, pi;
function ap() {
  if (pi) return Sr;
  pi = 1;
  var e = /* @__PURE__ */ mo();
  function n() {
  }
  function t() {
  }
  return t.resetWarningCache = n, Sr = function() {
    function r(a, s, c, d, p, f) {
      if (f !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: n
    };
    return i.PropTypes = i, i;
  }, Sr;
}
var fi;
function sp() {
  if (fi) return dn.exports;
  if (fi = 1, process.env.NODE_ENV !== "production") {
    var e = Ga(), n = !0;
    dn.exports = /* @__PURE__ */ ip()(e.isElement, n);
  } else
    dn.exports = /* @__PURE__ */ ap()();
  return dn.exports;
}
var cp = /* @__PURE__ */ sp();
const me = /* @__PURE__ */ lo(cp);
var Ur = function(e, n) {
  return Ur = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
  }, Ur(e, n);
};
function lp(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
  Ur(e, n);
  function t() {
    this.constructor = e;
  }
  e.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t());
}
var he = function() {
  return he = Object.assign || function(n) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
    }
    return n;
  }, he.apply(this, arguments);
};
function Ya(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
}
function gt(e, n, t, r) {
  function o(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function s(p) {
      try {
        d(r.next(p));
      } catch (f) {
        a(f);
      }
    }
    function c(p) {
      try {
        d(r.throw(p));
      } catch (f) {
        a(f);
      }
    }
    function d(p) {
      p.done ? i(p.value) : o(p.value).then(s, c);
    }
    d((r = r.apply(e, n || [])).next());
  });
}
function dp(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, o = n.length, i; r < o; r++)
    (i || !(r in n)) && (i || (i = Array.prototype.slice.call(n, 0, r)), i[r] = n[r]);
  return e.concat(i || Array.prototype.slice.call(n));
}
const up = /* @__PURE__ */ new Map([
  // https://github.com/guzzle/psr7/blob/2d9260799e713f1c475d3c5fdc3d6561ff7441b2/src/MimeType.php
  ["1km", "application/vnd.1000minds.decision-model+xml"],
  ["3dml", "text/vnd.in3d.3dml"],
  ["3ds", "image/x-3ds"],
  ["3g2", "video/3gpp2"],
  ["3gp", "video/3gp"],
  ["3gpp", "video/3gpp"],
  ["3mf", "model/3mf"],
  ["7z", "application/x-7z-compressed"],
  ["7zip", "application/x-7z-compressed"],
  ["123", "application/vnd.lotus-1-2-3"],
  ["aab", "application/x-authorware-bin"],
  ["aac", "audio/x-acc"],
  ["aam", "application/x-authorware-map"],
  ["aas", "application/x-authorware-seg"],
  ["abw", "application/x-abiword"],
  ["ac", "application/vnd.nokia.n-gage.ac+xml"],
  ["ac3", "audio/ac3"],
  ["acc", "application/vnd.americandynamics.acc"],
  ["ace", "application/x-ace-compressed"],
  ["acu", "application/vnd.acucobol"],
  ["acutc", "application/vnd.acucorp"],
  ["adp", "audio/adpcm"],
  ["aep", "application/vnd.audiograph"],
  ["afm", "application/x-font-type1"],
  ["afp", "application/vnd.ibm.modcap"],
  ["ahead", "application/vnd.ahead.space"],
  ["ai", "application/pdf"],
  ["aif", "audio/x-aiff"],
  ["aifc", "audio/x-aiff"],
  ["aiff", "audio/x-aiff"],
  ["air", "application/vnd.adobe.air-application-installer-package+zip"],
  ["ait", "application/vnd.dvb.ait"],
  ["ami", "application/vnd.amiga.ami"],
  ["amr", "audio/amr"],
  ["apk", "application/vnd.android.package-archive"],
  ["apng", "image/apng"],
  ["appcache", "text/cache-manifest"],
  ["application", "application/x-ms-application"],
  ["apr", "application/vnd.lotus-approach"],
  ["arc", "application/x-freearc"],
  ["arj", "application/x-arj"],
  ["asc", "application/pgp-signature"],
  ["asf", "video/x-ms-asf"],
  ["asm", "text/x-asm"],
  ["aso", "application/vnd.accpac.simply.aso"],
  ["asx", "video/x-ms-asf"],
  ["atc", "application/vnd.acucorp"],
  ["atom", "application/atom+xml"],
  ["atomcat", "application/atomcat+xml"],
  ["atomdeleted", "application/atomdeleted+xml"],
  ["atomsvc", "application/atomsvc+xml"],
  ["atx", "application/vnd.antix.game-component"],
  ["au", "audio/x-au"],
  ["avi", "video/x-msvideo"],
  ["avif", "image/avif"],
  ["aw", "application/applixware"],
  ["azf", "application/vnd.airzip.filesecure.azf"],
  ["azs", "application/vnd.airzip.filesecure.azs"],
  ["azv", "image/vnd.airzip.accelerator.azv"],
  ["azw", "application/vnd.amazon.ebook"],
  ["b16", "image/vnd.pco.b16"],
  ["bat", "application/x-msdownload"],
  ["bcpio", "application/x-bcpio"],
  ["bdf", "application/x-font-bdf"],
  ["bdm", "application/vnd.syncml.dm+wbxml"],
  ["bdoc", "application/x-bdoc"],
  ["bed", "application/vnd.realvnc.bed"],
  ["bh2", "application/vnd.fujitsu.oasysprs"],
  ["bin", "application/octet-stream"],
  ["blb", "application/x-blorb"],
  ["blorb", "application/x-blorb"],
  ["bmi", "application/vnd.bmi"],
  ["bmml", "application/vnd.balsamiq.bmml+xml"],
  ["bmp", "image/bmp"],
  ["book", "application/vnd.framemaker"],
  ["box", "application/vnd.previewsystems.box"],
  ["boz", "application/x-bzip2"],
  ["bpk", "application/octet-stream"],
  ["bpmn", "application/octet-stream"],
  ["bsp", "model/vnd.valve.source.compiled-map"],
  ["btif", "image/prs.btif"],
  ["buffer", "application/octet-stream"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["c", "text/x-c"],
  ["c4d", "application/vnd.clonk.c4group"],
  ["c4f", "application/vnd.clonk.c4group"],
  ["c4g", "application/vnd.clonk.c4group"],
  ["c4p", "application/vnd.clonk.c4group"],
  ["c4u", "application/vnd.clonk.c4group"],
  ["c11amc", "application/vnd.cluetrust.cartomobile-config"],
  ["c11amz", "application/vnd.cluetrust.cartomobile-config-pkg"],
  ["cab", "application/vnd.ms-cab-compressed"],
  ["caf", "audio/x-caf"],
  ["cap", "application/vnd.tcpdump.pcap"],
  ["car", "application/vnd.curl.car"],
  ["cat", "application/vnd.ms-pki.seccat"],
  ["cb7", "application/x-cbr"],
  ["cba", "application/x-cbr"],
  ["cbr", "application/x-cbr"],
  ["cbt", "application/x-cbr"],
  ["cbz", "application/x-cbr"],
  ["cc", "text/x-c"],
  ["cco", "application/x-cocoa"],
  ["cct", "application/x-director"],
  ["ccxml", "application/ccxml+xml"],
  ["cdbcmsg", "application/vnd.contact.cmsg"],
  ["cda", "application/x-cdf"],
  ["cdf", "application/x-netcdf"],
  ["cdfx", "application/cdfx+xml"],
  ["cdkey", "application/vnd.mediastation.cdkey"],
  ["cdmia", "application/cdmi-capability"],
  ["cdmic", "application/cdmi-container"],
  ["cdmid", "application/cdmi-domain"],
  ["cdmio", "application/cdmi-object"],
  ["cdmiq", "application/cdmi-queue"],
  ["cdr", "application/cdr"],
  ["cdx", "chemical/x-cdx"],
  ["cdxml", "application/vnd.chemdraw+xml"],
  ["cdy", "application/vnd.cinderella"],
  ["cer", "application/pkix-cert"],
  ["cfs", "application/x-cfs-compressed"],
  ["cgm", "image/cgm"],
  ["chat", "application/x-chat"],
  ["chm", "application/vnd.ms-htmlhelp"],
  ["chrt", "application/vnd.kde.kchart"],
  ["cif", "chemical/x-cif"],
  ["cii", "application/vnd.anser-web-certificate-issue-initiation"],
  ["cil", "application/vnd.ms-artgalry"],
  ["cjs", "application/node"],
  ["cla", "application/vnd.claymore"],
  ["class", "application/octet-stream"],
  ["clkk", "application/vnd.crick.clicker.keyboard"],
  ["clkp", "application/vnd.crick.clicker.palette"],
  ["clkt", "application/vnd.crick.clicker.template"],
  ["clkw", "application/vnd.crick.clicker.wordbank"],
  ["clkx", "application/vnd.crick.clicker"],
  ["clp", "application/x-msclip"],
  ["cmc", "application/vnd.cosmocaller"],
  ["cmdf", "chemical/x-cmdf"],
  ["cml", "chemical/x-cml"],
  ["cmp", "application/vnd.yellowriver-custom-menu"],
  ["cmx", "image/x-cmx"],
  ["cod", "application/vnd.rim.cod"],
  ["coffee", "text/coffeescript"],
  ["com", "application/x-msdownload"],
  ["conf", "text/plain"],
  ["cpio", "application/x-cpio"],
  ["cpp", "text/x-c"],
  ["cpt", "application/mac-compactpro"],
  ["crd", "application/x-mscardfile"],
  ["crl", "application/pkix-crl"],
  ["crt", "application/x-x509-ca-cert"],
  ["crx", "application/x-chrome-extension"],
  ["cryptonote", "application/vnd.rig.cryptonote"],
  ["csh", "application/x-csh"],
  ["csl", "application/vnd.citationstyles.style+xml"],
  ["csml", "chemical/x-csml"],
  ["csp", "application/vnd.commonspace"],
  ["csr", "application/octet-stream"],
  ["css", "text/css"],
  ["cst", "application/x-director"],
  ["csv", "text/csv"],
  ["cu", "application/cu-seeme"],
  ["curl", "text/vnd.curl"],
  ["cww", "application/prs.cww"],
  ["cxt", "application/x-director"],
  ["cxx", "text/x-c"],
  ["dae", "model/vnd.collada+xml"],
  ["daf", "application/vnd.mobius.daf"],
  ["dart", "application/vnd.dart"],
  ["dataless", "application/vnd.fdsn.seed"],
  ["davmount", "application/davmount+xml"],
  ["dbf", "application/vnd.dbf"],
  ["dbk", "application/docbook+xml"],
  ["dcr", "application/x-director"],
  ["dcurl", "text/vnd.curl.dcurl"],
  ["dd2", "application/vnd.oma.dd2+xml"],
  ["ddd", "application/vnd.fujixerox.ddd"],
  ["ddf", "application/vnd.syncml.dmddf+xml"],
  ["dds", "image/vnd.ms-dds"],
  ["deb", "application/x-debian-package"],
  ["def", "text/plain"],
  ["deploy", "application/octet-stream"],
  ["der", "application/x-x509-ca-cert"],
  ["dfac", "application/vnd.dreamfactory"],
  ["dgc", "application/x-dgc-compressed"],
  ["dic", "text/x-c"],
  ["dir", "application/x-director"],
  ["dis", "application/vnd.mobius.dis"],
  ["disposition-notification", "message/disposition-notification"],
  ["dist", "application/octet-stream"],
  ["distz", "application/octet-stream"],
  ["djv", "image/vnd.djvu"],
  ["djvu", "image/vnd.djvu"],
  ["dll", "application/octet-stream"],
  ["dmg", "application/x-apple-diskimage"],
  ["dmn", "application/octet-stream"],
  ["dmp", "application/vnd.tcpdump.pcap"],
  ["dms", "application/octet-stream"],
  ["dna", "application/vnd.dna"],
  ["doc", "application/msword"],
  ["docm", "application/vnd.ms-word.template.macroEnabled.12"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["dot", "application/msword"],
  ["dotm", "application/vnd.ms-word.template.macroEnabled.12"],
  ["dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template"],
  ["dp", "application/vnd.osgi.dp"],
  ["dpg", "application/vnd.dpgraph"],
  ["dra", "audio/vnd.dra"],
  ["drle", "image/dicom-rle"],
  ["dsc", "text/prs.lines.tag"],
  ["dssc", "application/dssc+der"],
  ["dtb", "application/x-dtbook+xml"],
  ["dtd", "application/xml-dtd"],
  ["dts", "audio/vnd.dts"],
  ["dtshd", "audio/vnd.dts.hd"],
  ["dump", "application/octet-stream"],
  ["dvb", "video/vnd.dvb.file"],
  ["dvi", "application/x-dvi"],
  ["dwd", "application/atsc-dwd+xml"],
  ["dwf", "model/vnd.dwf"],
  ["dwg", "image/vnd.dwg"],
  ["dxf", "image/vnd.dxf"],
  ["dxp", "application/vnd.spotfire.dxp"],
  ["dxr", "application/x-director"],
  ["ear", "application/java-archive"],
  ["ecelp4800", "audio/vnd.nuera.ecelp4800"],
  ["ecelp7470", "audio/vnd.nuera.ecelp7470"],
  ["ecelp9600", "audio/vnd.nuera.ecelp9600"],
  ["ecma", "application/ecmascript"],
  ["edm", "application/vnd.novadigm.edm"],
  ["edx", "application/vnd.novadigm.edx"],
  ["efif", "application/vnd.picsel"],
  ["ei6", "application/vnd.pg.osasli"],
  ["elc", "application/octet-stream"],
  ["emf", "image/emf"],
  ["eml", "message/rfc822"],
  ["emma", "application/emma+xml"],
  ["emotionml", "application/emotionml+xml"],
  ["emz", "application/x-msmetafile"],
  ["eol", "audio/vnd.digital-winds"],
  ["eot", "application/vnd.ms-fontobject"],
  ["eps", "application/postscript"],
  ["epub", "application/epub+zip"],
  ["es", "application/ecmascript"],
  ["es3", "application/vnd.eszigno3+xml"],
  ["esa", "application/vnd.osgi.subsystem"],
  ["esf", "application/vnd.epson.esf"],
  ["et3", "application/vnd.eszigno3+xml"],
  ["etx", "text/x-setext"],
  ["eva", "application/x-eva"],
  ["evy", "application/x-envoy"],
  ["exe", "application/octet-stream"],
  ["exi", "application/exi"],
  ["exp", "application/express"],
  ["exr", "image/aces"],
  ["ext", "application/vnd.novadigm.ext"],
  ["ez", "application/andrew-inset"],
  ["ez2", "application/vnd.ezpix-album"],
  ["ez3", "application/vnd.ezpix-package"],
  ["f", "text/x-fortran"],
  ["f4v", "video/mp4"],
  ["f77", "text/x-fortran"],
  ["f90", "text/x-fortran"],
  ["fbs", "image/vnd.fastbidsheet"],
  ["fcdt", "application/vnd.adobe.formscentral.fcdt"],
  ["fcs", "application/vnd.isac.fcs"],
  ["fdf", "application/vnd.fdf"],
  ["fdt", "application/fdt+xml"],
  ["fe_launch", "application/vnd.denovo.fcselayout-link"],
  ["fg5", "application/vnd.fujitsu.oasysgp"],
  ["fgd", "application/x-director"],
  ["fh", "image/x-freehand"],
  ["fh4", "image/x-freehand"],
  ["fh5", "image/x-freehand"],
  ["fh7", "image/x-freehand"],
  ["fhc", "image/x-freehand"],
  ["fig", "application/x-xfig"],
  ["fits", "image/fits"],
  ["flac", "audio/x-flac"],
  ["fli", "video/x-fli"],
  ["flo", "application/vnd.micrografx.flo"],
  ["flv", "video/x-flv"],
  ["flw", "application/vnd.kde.kivio"],
  ["flx", "text/vnd.fmi.flexstor"],
  ["fly", "text/vnd.fly"],
  ["fm", "application/vnd.framemaker"],
  ["fnc", "application/vnd.frogans.fnc"],
  ["fo", "application/vnd.software602.filler.form+xml"],
  ["for", "text/x-fortran"],
  ["fpx", "image/vnd.fpx"],
  ["frame", "application/vnd.framemaker"],
  ["fsc", "application/vnd.fsc.weblaunch"],
  ["fst", "image/vnd.fst"],
  ["ftc", "application/vnd.fluxtime.clip"],
  ["fti", "application/vnd.anser-web-funds-transfer-initiation"],
  ["fvt", "video/vnd.fvt"],
  ["fxp", "application/vnd.adobe.fxp"],
  ["fxpl", "application/vnd.adobe.fxp"],
  ["fzs", "application/vnd.fuzzysheet"],
  ["g2w", "application/vnd.geoplan"],
  ["g3", "image/g3fax"],
  ["g3w", "application/vnd.geospace"],
  ["gac", "application/vnd.groove-account"],
  ["gam", "application/x-tads"],
  ["gbr", "application/rpki-ghostbusters"],
  ["gca", "application/x-gca-compressed"],
  ["gdl", "model/vnd.gdl"],
  ["gdoc", "application/vnd.google-apps.document"],
  ["geo", "application/vnd.dynageo"],
  ["geojson", "application/geo+json"],
  ["gex", "application/vnd.geometry-explorer"],
  ["ggb", "application/vnd.geogebra.file"],
  ["ggt", "application/vnd.geogebra.tool"],
  ["ghf", "application/vnd.groove-help"],
  ["gif", "image/gif"],
  ["gim", "application/vnd.groove-identity-message"],
  ["glb", "model/gltf-binary"],
  ["gltf", "model/gltf+json"],
  ["gml", "application/gml+xml"],
  ["gmx", "application/vnd.gmx"],
  ["gnumeric", "application/x-gnumeric"],
  ["gpg", "application/gpg-keys"],
  ["gph", "application/vnd.flographit"],
  ["gpx", "application/gpx+xml"],
  ["gqf", "application/vnd.grafeq"],
  ["gqs", "application/vnd.grafeq"],
  ["gram", "application/srgs"],
  ["gramps", "application/x-gramps-xml"],
  ["gre", "application/vnd.geometry-explorer"],
  ["grv", "application/vnd.groove-injector"],
  ["grxml", "application/srgs+xml"],
  ["gsf", "application/x-font-ghostscript"],
  ["gsheet", "application/vnd.google-apps.spreadsheet"],
  ["gslides", "application/vnd.google-apps.presentation"],
  ["gtar", "application/x-gtar"],
  ["gtm", "application/vnd.groove-tool-message"],
  ["gtw", "model/vnd.gtw"],
  ["gv", "text/vnd.graphviz"],
  ["gxf", "application/gxf"],
  ["gxt", "application/vnd.geonext"],
  ["gz", "application/gzip"],
  ["gzip", "application/gzip"],
  ["h", "text/x-c"],
  ["h261", "video/h261"],
  ["h263", "video/h263"],
  ["h264", "video/h264"],
  ["hal", "application/vnd.hal+xml"],
  ["hbci", "application/vnd.hbci"],
  ["hbs", "text/x-handlebars-template"],
  ["hdd", "application/x-virtualbox-hdd"],
  ["hdf", "application/x-hdf"],
  ["heic", "image/heic"],
  ["heics", "image/heic-sequence"],
  ["heif", "image/heif"],
  ["heifs", "image/heif-sequence"],
  ["hej2", "image/hej2k"],
  ["held", "application/atsc-held+xml"],
  ["hh", "text/x-c"],
  ["hjson", "application/hjson"],
  ["hlp", "application/winhlp"],
  ["hpgl", "application/vnd.hp-hpgl"],
  ["hpid", "application/vnd.hp-hpid"],
  ["hps", "application/vnd.hp-hps"],
  ["hqx", "application/mac-binhex40"],
  ["hsj2", "image/hsj2"],
  ["htc", "text/x-component"],
  ["htke", "application/vnd.kenameaapp"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["hvd", "application/vnd.yamaha.hv-dic"],
  ["hvp", "application/vnd.yamaha.hv-voice"],
  ["hvs", "application/vnd.yamaha.hv-script"],
  ["i2g", "application/vnd.intergeo"],
  ["icc", "application/vnd.iccprofile"],
  ["ice", "x-conference/x-cooltalk"],
  ["icm", "application/vnd.iccprofile"],
  ["ico", "image/x-icon"],
  ["ics", "text/calendar"],
  ["ief", "image/ief"],
  ["ifb", "text/calendar"],
  ["ifm", "application/vnd.shana.informed.formdata"],
  ["iges", "model/iges"],
  ["igl", "application/vnd.igloader"],
  ["igm", "application/vnd.insors.igm"],
  ["igs", "model/iges"],
  ["igx", "application/vnd.micrografx.igx"],
  ["iif", "application/vnd.shana.informed.interchange"],
  ["img", "application/octet-stream"],
  ["imp", "application/vnd.accpac.simply.imp"],
  ["ims", "application/vnd.ms-ims"],
  ["in", "text/plain"],
  ["ini", "text/plain"],
  ["ink", "application/inkml+xml"],
  ["inkml", "application/inkml+xml"],
  ["install", "application/x-install-instructions"],
  ["iota", "application/vnd.astraea-software.iota"],
  ["ipfix", "application/ipfix"],
  ["ipk", "application/vnd.shana.informed.package"],
  ["irm", "application/vnd.ibm.rights-management"],
  ["irp", "application/vnd.irepository.package+xml"],
  ["iso", "application/x-iso9660-image"],
  ["itp", "application/vnd.shana.informed.formtemplate"],
  ["its", "application/its+xml"],
  ["ivp", "application/vnd.immervision-ivp"],
  ["ivu", "application/vnd.immervision-ivu"],
  ["jad", "text/vnd.sun.j2me.app-descriptor"],
  ["jade", "text/jade"],
  ["jam", "application/vnd.jam"],
  ["jar", "application/java-archive"],
  ["jardiff", "application/x-java-archive-diff"],
  ["java", "text/x-java-source"],
  ["jhc", "image/jphc"],
  ["jisp", "application/vnd.jisp"],
  ["jls", "image/jls"],
  ["jlt", "application/vnd.hp-jlyt"],
  ["jng", "image/x-jng"],
  ["jnlp", "application/x-java-jnlp-file"],
  ["joda", "application/vnd.joost.joda-archive"],
  ["jp2", "image/jp2"],
  ["jpe", "image/jpeg"],
  ["jpeg", "image/jpeg"],
  ["jpf", "image/jpx"],
  ["jpg", "image/jpeg"],
  ["jpg2", "image/jp2"],
  ["jpgm", "video/jpm"],
  ["jpgv", "video/jpeg"],
  ["jph", "image/jph"],
  ["jpm", "video/jpm"],
  ["jpx", "image/jpx"],
  ["js", "application/javascript"],
  ["json", "application/json"],
  ["json5", "application/json5"],
  ["jsonld", "application/ld+json"],
  // https://jsonlines.org/
  ["jsonl", "application/jsonl"],
  ["jsonml", "application/jsonml+json"],
  ["jsx", "text/jsx"],
  ["jxr", "image/jxr"],
  ["jxra", "image/jxra"],
  ["jxrs", "image/jxrs"],
  ["jxs", "image/jxs"],
  ["jxsc", "image/jxsc"],
  ["jxsi", "image/jxsi"],
  ["jxss", "image/jxss"],
  ["kar", "audio/midi"],
  ["karbon", "application/vnd.kde.karbon"],
  ["kdb", "application/octet-stream"],
  ["kdbx", "application/x-keepass2"],
  ["key", "application/x-iwork-keynote-sffkey"],
  ["kfo", "application/vnd.kde.kformula"],
  ["kia", "application/vnd.kidspiration"],
  ["kml", "application/vnd.google-earth.kml+xml"],
  ["kmz", "application/vnd.google-earth.kmz"],
  ["kne", "application/vnd.kinar"],
  ["knp", "application/vnd.kinar"],
  ["kon", "application/vnd.kde.kontour"],
  ["kpr", "application/vnd.kde.kpresenter"],
  ["kpt", "application/vnd.kde.kpresenter"],
  ["kpxx", "application/vnd.ds-keypoint"],
  ["ksp", "application/vnd.kde.kspread"],
  ["ktr", "application/vnd.kahootz"],
  ["ktx", "image/ktx"],
  ["ktx2", "image/ktx2"],
  ["ktz", "application/vnd.kahootz"],
  ["kwd", "application/vnd.kde.kword"],
  ["kwt", "application/vnd.kde.kword"],
  ["lasxml", "application/vnd.las.las+xml"],
  ["latex", "application/x-latex"],
  ["lbd", "application/vnd.llamagraphics.life-balance.desktop"],
  ["lbe", "application/vnd.llamagraphics.life-balance.exchange+xml"],
  ["les", "application/vnd.hhe.lesson-player"],
  ["less", "text/less"],
  ["lgr", "application/lgr+xml"],
  ["lha", "application/octet-stream"],
  ["link66", "application/vnd.route66.link66+xml"],
  ["list", "text/plain"],
  ["list3820", "application/vnd.ibm.modcap"],
  ["listafp", "application/vnd.ibm.modcap"],
  ["litcoffee", "text/coffeescript"],
  ["lnk", "application/x-ms-shortcut"],
  ["log", "text/plain"],
  ["lostxml", "application/lost+xml"],
  ["lrf", "application/octet-stream"],
  ["lrm", "application/vnd.ms-lrm"],
  ["ltf", "application/vnd.frogans.ltf"],
  ["lua", "text/x-lua"],
  ["luac", "application/x-lua-bytecode"],
  ["lvp", "audio/vnd.lucent.voice"],
  ["lwp", "application/vnd.lotus-wordpro"],
  ["lzh", "application/octet-stream"],
  ["m1v", "video/mpeg"],
  ["m2a", "audio/mpeg"],
  ["m2v", "video/mpeg"],
  ["m3a", "audio/mpeg"],
  ["m3u", "text/plain"],
  ["m3u8", "application/vnd.apple.mpegurl"],
  ["m4a", "audio/x-m4a"],
  ["m4p", "application/mp4"],
  ["m4s", "video/iso.segment"],
  ["m4u", "application/vnd.mpegurl"],
  ["m4v", "video/x-m4v"],
  ["m13", "application/x-msmediaview"],
  ["m14", "application/x-msmediaview"],
  ["m21", "application/mp21"],
  ["ma", "application/mathematica"],
  ["mads", "application/mads+xml"],
  ["maei", "application/mmt-aei+xml"],
  ["mag", "application/vnd.ecowin.chart"],
  ["maker", "application/vnd.framemaker"],
  ["man", "text/troff"],
  ["manifest", "text/cache-manifest"],
  ["map", "application/json"],
  ["mar", "application/octet-stream"],
  ["markdown", "text/markdown"],
  ["mathml", "application/mathml+xml"],
  ["mb", "application/mathematica"],
  ["mbk", "application/vnd.mobius.mbk"],
  ["mbox", "application/mbox"],
  ["mc1", "application/vnd.medcalcdata"],
  ["mcd", "application/vnd.mcd"],
  ["mcurl", "text/vnd.curl.mcurl"],
  ["md", "text/markdown"],
  ["mdb", "application/x-msaccess"],
  ["mdi", "image/vnd.ms-modi"],
  ["mdx", "text/mdx"],
  ["me", "text/troff"],
  ["mesh", "model/mesh"],
  ["meta4", "application/metalink4+xml"],
  ["metalink", "application/metalink+xml"],
  ["mets", "application/mets+xml"],
  ["mfm", "application/vnd.mfmp"],
  ["mft", "application/rpki-manifest"],
  ["mgp", "application/vnd.osgeo.mapguide.package"],
  ["mgz", "application/vnd.proteus.magazine"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mie", "application/x-mie"],
  ["mif", "application/vnd.mif"],
  ["mime", "message/rfc822"],
  ["mj2", "video/mj2"],
  ["mjp2", "video/mj2"],
  ["mjs", "application/javascript"],
  ["mk3d", "video/x-matroska"],
  ["mka", "audio/x-matroska"],
  ["mkd", "text/x-markdown"],
  ["mks", "video/x-matroska"],
  ["mkv", "video/x-matroska"],
  ["mlp", "application/vnd.dolby.mlp"],
  ["mmd", "application/vnd.chipnuts.karaoke-mmd"],
  ["mmf", "application/vnd.smaf"],
  ["mml", "text/mathml"],
  ["mmr", "image/vnd.fujixerox.edmics-mmr"],
  ["mng", "video/x-mng"],
  ["mny", "application/x-msmoney"],
  ["mobi", "application/x-mobipocket-ebook"],
  ["mods", "application/mods+xml"],
  ["mov", "video/quicktime"],
  ["movie", "video/x-sgi-movie"],
  ["mp2", "audio/mpeg"],
  ["mp2a", "audio/mpeg"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mp4a", "audio/mp4"],
  ["mp4s", "application/mp4"],
  ["mp4v", "video/mp4"],
  ["mp21", "application/mp21"],
  ["mpc", "application/vnd.mophun.certificate"],
  ["mpd", "application/dash+xml"],
  ["mpe", "video/mpeg"],
  ["mpeg", "video/mpeg"],
  ["mpg", "video/mpeg"],
  ["mpg4", "video/mp4"],
  ["mpga", "audio/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["mpm", "application/vnd.blueice.multipass"],
  ["mpn", "application/vnd.mophun.application"],
  ["mpp", "application/vnd.ms-project"],
  ["mpt", "application/vnd.ms-project"],
  ["mpy", "application/vnd.ibm.minipay"],
  ["mqy", "application/vnd.mobius.mqy"],
  ["mrc", "application/marc"],
  ["mrcx", "application/marcxml+xml"],
  ["ms", "text/troff"],
  ["mscml", "application/mediaservercontrol+xml"],
  ["mseed", "application/vnd.fdsn.mseed"],
  ["mseq", "application/vnd.mseq"],
  ["msf", "application/vnd.epson.msf"],
  ["msg", "application/vnd.ms-outlook"],
  ["msh", "model/mesh"],
  ["msi", "application/x-msdownload"],
  ["msl", "application/vnd.mobius.msl"],
  ["msm", "application/octet-stream"],
  ["msp", "application/octet-stream"],
  ["msty", "application/vnd.muvee.style"],
  ["mtl", "model/mtl"],
  ["mts", "model/vnd.mts"],
  ["mus", "application/vnd.musician"],
  ["musd", "application/mmt-usd+xml"],
  ["musicxml", "application/vnd.recordare.musicxml+xml"],
  ["mvb", "application/x-msmediaview"],
  ["mvt", "application/vnd.mapbox-vector-tile"],
  ["mwf", "application/vnd.mfer"],
  ["mxf", "application/mxf"],
  ["mxl", "application/vnd.recordare.musicxml"],
  ["mxmf", "audio/mobile-xmf"],
  ["mxml", "application/xv+xml"],
  ["mxs", "application/vnd.triscape.mxs"],
  ["mxu", "video/vnd.mpegurl"],
  ["n-gage", "application/vnd.nokia.n-gage.symbian.install"],
  ["n3", "text/n3"],
  ["nb", "application/mathematica"],
  ["nbp", "application/vnd.wolfram.player"],
  ["nc", "application/x-netcdf"],
  ["ncx", "application/x-dtbncx+xml"],
  ["nfo", "text/x-nfo"],
  ["ngdat", "application/vnd.nokia.n-gage.data"],
  ["nitf", "application/vnd.nitf"],
  ["nlu", "application/vnd.neurolanguage.nlu"],
  ["nml", "application/vnd.enliven"],
  ["nnd", "application/vnd.noblenet-directory"],
  ["nns", "application/vnd.noblenet-sealer"],
  ["nnw", "application/vnd.noblenet-web"],
  ["npx", "image/vnd.net-fpx"],
  ["nq", "application/n-quads"],
  ["nsc", "application/x-conference"],
  ["nsf", "application/vnd.lotus-notes"],
  ["nt", "application/n-triples"],
  ["ntf", "application/vnd.nitf"],
  ["numbers", "application/x-iwork-numbers-sffnumbers"],
  ["nzb", "application/x-nzb"],
  ["oa2", "application/vnd.fujitsu.oasys2"],
  ["oa3", "application/vnd.fujitsu.oasys3"],
  ["oas", "application/vnd.fujitsu.oasys"],
  ["obd", "application/x-msbinder"],
  ["obgx", "application/vnd.openblox.game+xml"],
  ["obj", "model/obj"],
  ["oda", "application/oda"],
  ["odb", "application/vnd.oasis.opendocument.database"],
  ["odc", "application/vnd.oasis.opendocument.chart"],
  ["odf", "application/vnd.oasis.opendocument.formula"],
  ["odft", "application/vnd.oasis.opendocument.formula-template"],
  ["odg", "application/vnd.oasis.opendocument.graphics"],
  ["odi", "application/vnd.oasis.opendocument.image"],
  ["odm", "application/vnd.oasis.opendocument.text-master"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogex", "model/vnd.opengex"],
  ["ogg", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["omdoc", "application/omdoc+xml"],
  ["onepkg", "application/onenote"],
  ["onetmp", "application/onenote"],
  ["onetoc", "application/onenote"],
  ["onetoc2", "application/onenote"],
  ["opf", "application/oebps-package+xml"],
  ["opml", "text/x-opml"],
  ["oprc", "application/vnd.palm"],
  ["opus", "audio/ogg"],
  ["org", "text/x-org"],
  ["osf", "application/vnd.yamaha.openscoreformat"],
  ["osfpvg", "application/vnd.yamaha.openscoreformat.osfpvg+xml"],
  ["osm", "application/vnd.openstreetmap.data+xml"],
  ["otc", "application/vnd.oasis.opendocument.chart-template"],
  ["otf", "font/otf"],
  ["otg", "application/vnd.oasis.opendocument.graphics-template"],
  ["oth", "application/vnd.oasis.opendocument.text-web"],
  ["oti", "application/vnd.oasis.opendocument.image-template"],
  ["otp", "application/vnd.oasis.opendocument.presentation-template"],
  ["ots", "application/vnd.oasis.opendocument.spreadsheet-template"],
  ["ott", "application/vnd.oasis.opendocument.text-template"],
  ["ova", "application/x-virtualbox-ova"],
  ["ovf", "application/x-virtualbox-ovf"],
  ["owl", "application/rdf+xml"],
  ["oxps", "application/oxps"],
  ["oxt", "application/vnd.openofficeorg.extension"],
  ["p", "text/x-pascal"],
  ["p7a", "application/x-pkcs7-signature"],
  ["p7b", "application/x-pkcs7-certificates"],
  ["p7c", "application/pkcs7-mime"],
  ["p7m", "application/pkcs7-mime"],
  ["p7r", "application/x-pkcs7-certreqresp"],
  ["p7s", "application/pkcs7-signature"],
  ["p8", "application/pkcs8"],
  ["p10", "application/x-pkcs10"],
  ["p12", "application/x-pkcs12"],
  ["pac", "application/x-ns-proxy-autoconfig"],
  ["pages", "application/x-iwork-pages-sffpages"],
  ["pas", "text/x-pascal"],
  ["paw", "application/vnd.pawaafile"],
  ["pbd", "application/vnd.powerbuilder6"],
  ["pbm", "image/x-portable-bitmap"],
  ["pcap", "application/vnd.tcpdump.pcap"],
  ["pcf", "application/x-font-pcf"],
  ["pcl", "application/vnd.hp-pcl"],
  ["pclxl", "application/vnd.hp-pclxl"],
  ["pct", "image/x-pict"],
  ["pcurl", "application/vnd.curl.pcurl"],
  ["pcx", "image/x-pcx"],
  ["pdb", "application/x-pilot"],
  ["pde", "text/x-processing"],
  ["pdf", "application/pdf"],
  ["pem", "application/x-x509-user-cert"],
  ["pfa", "application/x-font-type1"],
  ["pfb", "application/x-font-type1"],
  ["pfm", "application/x-font-type1"],
  ["pfr", "application/font-tdpfr"],
  ["pfx", "application/x-pkcs12"],
  ["pgm", "image/x-portable-graymap"],
  ["pgn", "application/x-chess-pgn"],
  ["pgp", "application/pgp"],
  ["php", "application/x-httpd-php"],
  ["php3", "application/x-httpd-php"],
  ["php4", "application/x-httpd-php"],
  ["phps", "application/x-httpd-php-source"],
  ["phtml", "application/x-httpd-php"],
  ["pic", "image/x-pict"],
  ["pkg", "application/octet-stream"],
  ["pki", "application/pkixcmp"],
  ["pkipath", "application/pkix-pkipath"],
  ["pkpass", "application/vnd.apple.pkpass"],
  ["pl", "application/x-perl"],
  ["plb", "application/vnd.3gpp.pic-bw-large"],
  ["plc", "application/vnd.mobius.plc"],
  ["plf", "application/vnd.pocketlearn"],
  ["pls", "application/pls+xml"],
  ["pm", "application/x-perl"],
  ["pml", "application/vnd.ctc-posml"],
  ["png", "image/png"],
  ["pnm", "image/x-portable-anymap"],
  ["portpkg", "application/vnd.macports.portpkg"],
  ["pot", "application/vnd.ms-powerpoint"],
  ["potm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
  ["potx", "application/vnd.openxmlformats-officedocument.presentationml.template"],
  ["ppa", "application/vnd.ms-powerpoint"],
  ["ppam", "application/vnd.ms-powerpoint.addin.macroEnabled.12"],
  ["ppd", "application/vnd.cups-ppd"],
  ["ppm", "image/x-portable-pixmap"],
  ["pps", "application/vnd.ms-powerpoint"],
  ["ppsm", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],
  ["ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow"],
  ["ppt", "application/powerpoint"],
  ["pptm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
  ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  ["pqa", "application/vnd.palm"],
  ["prc", "application/x-pilot"],
  ["pre", "application/vnd.lotus-freelance"],
  ["prf", "application/pics-rules"],
  ["provx", "application/provenance+xml"],
  ["ps", "application/postscript"],
  ["psb", "application/vnd.3gpp.pic-bw-small"],
  ["psd", "application/x-photoshop"],
  ["psf", "application/x-font-linux-psf"],
  ["pskcxml", "application/pskc+xml"],
  ["pti", "image/prs.pti"],
  ["ptid", "application/vnd.pvi.ptid1"],
  ["pub", "application/x-mspublisher"],
  ["pvb", "application/vnd.3gpp.pic-bw-var"],
  ["pwn", "application/vnd.3m.post-it-notes"],
  ["pya", "audio/vnd.ms-playready.media.pya"],
  ["pyv", "video/vnd.ms-playready.media.pyv"],
  ["qam", "application/vnd.epson.quickanime"],
  ["qbo", "application/vnd.intu.qbo"],
  ["qfx", "application/vnd.intu.qfx"],
  ["qps", "application/vnd.publishare-delta-tree"],
  ["qt", "video/quicktime"],
  ["qwd", "application/vnd.quark.quarkxpress"],
  ["qwt", "application/vnd.quark.quarkxpress"],
  ["qxb", "application/vnd.quark.quarkxpress"],
  ["qxd", "application/vnd.quark.quarkxpress"],
  ["qxl", "application/vnd.quark.quarkxpress"],
  ["qxt", "application/vnd.quark.quarkxpress"],
  ["ra", "audio/x-realaudio"],
  ["ram", "audio/x-pn-realaudio"],
  ["raml", "application/raml+yaml"],
  ["rapd", "application/route-apd+xml"],
  ["rar", "application/x-rar"],
  ["ras", "image/x-cmu-raster"],
  ["rcprofile", "application/vnd.ipunplugged.rcprofile"],
  ["rdf", "application/rdf+xml"],
  ["rdz", "application/vnd.data-vision.rdz"],
  ["relo", "application/p2p-overlay+xml"],
  ["rep", "application/vnd.businessobjects"],
  ["res", "application/x-dtbresource+xml"],
  ["rgb", "image/x-rgb"],
  ["rif", "application/reginfo+xml"],
  ["rip", "audio/vnd.rip"],
  ["ris", "application/x-research-info-systems"],
  ["rl", "application/resource-lists+xml"],
  ["rlc", "image/vnd.fujixerox.edmics-rlc"],
  ["rld", "application/resource-lists-diff+xml"],
  ["rm", "audio/x-pn-realaudio"],
  ["rmi", "audio/midi"],
  ["rmp", "audio/x-pn-realaudio-plugin"],
  ["rms", "application/vnd.jcp.javame.midlet-rms"],
  ["rmvb", "application/vnd.rn-realmedia-vbr"],
  ["rnc", "application/relax-ng-compact-syntax"],
  ["rng", "application/xml"],
  ["roa", "application/rpki-roa"],
  ["roff", "text/troff"],
  ["rp9", "application/vnd.cloanto.rp9"],
  ["rpm", "audio/x-pn-realaudio-plugin"],
  ["rpss", "application/vnd.nokia.radio-presets"],
  ["rpst", "application/vnd.nokia.radio-preset"],
  ["rq", "application/sparql-query"],
  ["rs", "application/rls-services+xml"],
  ["rsa", "application/x-pkcs7"],
  ["rsat", "application/atsc-rsat+xml"],
  ["rsd", "application/rsd+xml"],
  ["rsheet", "application/urc-ressheet+xml"],
  ["rss", "application/rss+xml"],
  ["rtf", "text/rtf"],
  ["rtx", "text/richtext"],
  ["run", "application/x-makeself"],
  ["rusd", "application/route-usd+xml"],
  ["rv", "video/vnd.rn-realvideo"],
  ["s", "text/x-asm"],
  ["s3m", "audio/s3m"],
  ["saf", "application/vnd.yamaha.smaf-audio"],
  ["sass", "text/x-sass"],
  ["sbml", "application/sbml+xml"],
  ["sc", "application/vnd.ibm.secure-container"],
  ["scd", "application/x-msschedule"],
  ["scm", "application/vnd.lotus-screencam"],
  ["scq", "application/scvp-cv-request"],
  ["scs", "application/scvp-cv-response"],
  ["scss", "text/x-scss"],
  ["scurl", "text/vnd.curl.scurl"],
  ["sda", "application/vnd.stardivision.draw"],
  ["sdc", "application/vnd.stardivision.calc"],
  ["sdd", "application/vnd.stardivision.impress"],
  ["sdkd", "application/vnd.solent.sdkm+xml"],
  ["sdkm", "application/vnd.solent.sdkm+xml"],
  ["sdp", "application/sdp"],
  ["sdw", "application/vnd.stardivision.writer"],
  ["sea", "application/octet-stream"],
  ["see", "application/vnd.seemail"],
  ["seed", "application/vnd.fdsn.seed"],
  ["sema", "application/vnd.sema"],
  ["semd", "application/vnd.semd"],
  ["semf", "application/vnd.semf"],
  ["senmlx", "application/senml+xml"],
  ["sensmlx", "application/sensml+xml"],
  ["ser", "application/java-serialized-object"],
  ["setpay", "application/set-payment-initiation"],
  ["setreg", "application/set-registration-initiation"],
  ["sfd-hdstx", "application/vnd.hydrostatix.sof-data"],
  ["sfs", "application/vnd.spotfire.sfs"],
  ["sfv", "text/x-sfv"],
  ["sgi", "image/sgi"],
  ["sgl", "application/vnd.stardivision.writer-global"],
  ["sgm", "text/sgml"],
  ["sgml", "text/sgml"],
  ["sh", "application/x-sh"],
  ["shar", "application/x-shar"],
  ["shex", "text/shex"],
  ["shf", "application/shf+xml"],
  ["shtml", "text/html"],
  ["sid", "image/x-mrsid-image"],
  ["sieve", "application/sieve"],
  ["sig", "application/pgp-signature"],
  ["sil", "audio/silk"],
  ["silo", "model/mesh"],
  ["sis", "application/vnd.symbian.install"],
  ["sisx", "application/vnd.symbian.install"],
  ["sit", "application/x-stuffit"],
  ["sitx", "application/x-stuffitx"],
  ["siv", "application/sieve"],
  ["skd", "application/vnd.koan"],
  ["skm", "application/vnd.koan"],
  ["skp", "application/vnd.koan"],
  ["skt", "application/vnd.koan"],
  ["sldm", "application/vnd.ms-powerpoint.slide.macroenabled.12"],
  ["sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide"],
  ["slim", "text/slim"],
  ["slm", "text/slim"],
  ["sls", "application/route-s-tsid+xml"],
  ["slt", "application/vnd.epson.salt"],
  ["sm", "application/vnd.stepmania.stepchart"],
  ["smf", "application/vnd.stardivision.math"],
  ["smi", "application/smil"],
  ["smil", "application/smil"],
  ["smv", "video/x-smv"],
  ["smzip", "application/vnd.stepmania.package"],
  ["snd", "audio/basic"],
  ["snf", "application/x-font-snf"],
  ["so", "application/octet-stream"],
  ["spc", "application/x-pkcs7-certificates"],
  ["spdx", "text/spdx"],
  ["spf", "application/vnd.yamaha.smaf-phrase"],
  ["spl", "application/x-futuresplash"],
  ["spot", "text/vnd.in3d.spot"],
  ["spp", "application/scvp-vp-response"],
  ["spq", "application/scvp-vp-request"],
  ["spx", "audio/ogg"],
  ["sql", "application/x-sql"],
  ["src", "application/x-wais-source"],
  ["srt", "application/x-subrip"],
  ["sru", "application/sru+xml"],
  ["srx", "application/sparql-results+xml"],
  ["ssdl", "application/ssdl+xml"],
  ["sse", "application/vnd.kodak-descriptor"],
  ["ssf", "application/vnd.epson.ssf"],
  ["ssml", "application/ssml+xml"],
  ["sst", "application/octet-stream"],
  ["st", "application/vnd.sailingtracker.track"],
  ["stc", "application/vnd.sun.xml.calc.template"],
  ["std", "application/vnd.sun.xml.draw.template"],
  ["stf", "application/vnd.wt.stf"],
  ["sti", "application/vnd.sun.xml.impress.template"],
  ["stk", "application/hyperstudio"],
  ["stl", "model/stl"],
  ["stpx", "model/step+xml"],
  ["stpxz", "model/step-xml+zip"],
  ["stpz", "model/step+zip"],
  ["str", "application/vnd.pg.format"],
  ["stw", "application/vnd.sun.xml.writer.template"],
  ["styl", "text/stylus"],
  ["stylus", "text/stylus"],
  ["sub", "text/vnd.dvb.subtitle"],
  ["sus", "application/vnd.sus-calendar"],
  ["susp", "application/vnd.sus-calendar"],
  ["sv4cpio", "application/x-sv4cpio"],
  ["sv4crc", "application/x-sv4crc"],
  ["svc", "application/vnd.dvb.service"],
  ["svd", "application/vnd.svd"],
  ["svg", "image/svg+xml"],
  ["svgz", "image/svg+xml"],
  ["swa", "application/x-director"],
  ["swf", "application/x-shockwave-flash"],
  ["swi", "application/vnd.aristanetworks.swi"],
  ["swidtag", "application/swid+xml"],
  ["sxc", "application/vnd.sun.xml.calc"],
  ["sxd", "application/vnd.sun.xml.draw"],
  ["sxg", "application/vnd.sun.xml.writer.global"],
  ["sxi", "application/vnd.sun.xml.impress"],
  ["sxm", "application/vnd.sun.xml.math"],
  ["sxw", "application/vnd.sun.xml.writer"],
  ["t", "text/troff"],
  ["t3", "application/x-t3vm-image"],
  ["t38", "image/t38"],
  ["taglet", "application/vnd.mynfc"],
  ["tao", "application/vnd.tao.intent-module-archive"],
  ["tap", "image/vnd.tencent.tap"],
  ["tar", "application/x-tar"],
  ["tcap", "application/vnd.3gpp2.tcap"],
  ["tcl", "application/x-tcl"],
  ["td", "application/urc-targetdesc+xml"],
  ["teacher", "application/vnd.smart.teacher"],
  ["tei", "application/tei+xml"],
  ["teicorpus", "application/tei+xml"],
  ["tex", "application/x-tex"],
  ["texi", "application/x-texinfo"],
  ["texinfo", "application/x-texinfo"],
  ["text", "text/plain"],
  ["tfi", "application/thraud+xml"],
  ["tfm", "application/x-tex-tfm"],
  ["tfx", "image/tiff-fx"],
  ["tga", "image/x-tga"],
  ["tgz", "application/x-tar"],
  ["thmx", "application/vnd.ms-officetheme"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["tk", "application/x-tcl"],
  ["tmo", "application/vnd.tmobile-livetv"],
  ["toml", "application/toml"],
  ["torrent", "application/x-bittorrent"],
  ["tpl", "application/vnd.groove-tool-template"],
  ["tpt", "application/vnd.trid.tpt"],
  ["tr", "text/troff"],
  ["tra", "application/vnd.trueapp"],
  ["trig", "application/trig"],
  ["trm", "application/x-msterminal"],
  ["ts", "video/mp2t"],
  ["tsd", "application/timestamped-data"],
  ["tsv", "text/tab-separated-values"],
  ["ttc", "font/collection"],
  ["ttf", "font/ttf"],
  ["ttl", "text/turtle"],
  ["ttml", "application/ttml+xml"],
  ["twd", "application/vnd.simtech-mindmapper"],
  ["twds", "application/vnd.simtech-mindmapper"],
  ["txd", "application/vnd.genomatix.tuxedo"],
  ["txf", "application/vnd.mobius.txf"],
  ["txt", "text/plain"],
  ["u8dsn", "message/global-delivery-status"],
  ["u8hdr", "message/global-headers"],
  ["u8mdn", "message/global-disposition-notification"],
  ["u8msg", "message/global"],
  ["u32", "application/x-authorware-bin"],
  ["ubj", "application/ubjson"],
  ["udeb", "application/x-debian-package"],
  ["ufd", "application/vnd.ufdl"],
  ["ufdl", "application/vnd.ufdl"],
  ["ulx", "application/x-glulx"],
  ["umj", "application/vnd.umajin"],
  ["unityweb", "application/vnd.unity"],
  ["uoml", "application/vnd.uoml+xml"],
  ["uri", "text/uri-list"],
  ["uris", "text/uri-list"],
  ["urls", "text/uri-list"],
  ["usdz", "model/vnd.usdz+zip"],
  ["ustar", "application/x-ustar"],
  ["utz", "application/vnd.uiq.theme"],
  ["uu", "text/x-uuencode"],
  ["uva", "audio/vnd.dece.audio"],
  ["uvd", "application/vnd.dece.data"],
  ["uvf", "application/vnd.dece.data"],
  ["uvg", "image/vnd.dece.graphic"],
  ["uvh", "video/vnd.dece.hd"],
  ["uvi", "image/vnd.dece.graphic"],
  ["uvm", "video/vnd.dece.mobile"],
  ["uvp", "video/vnd.dece.pd"],
  ["uvs", "video/vnd.dece.sd"],
  ["uvt", "application/vnd.dece.ttml+xml"],
  ["uvu", "video/vnd.uvvu.mp4"],
  ["uvv", "video/vnd.dece.video"],
  ["uvva", "audio/vnd.dece.audio"],
  ["uvvd", "application/vnd.dece.data"],
  ["uvvf", "application/vnd.dece.data"],
  ["uvvg", "image/vnd.dece.graphic"],
  ["uvvh", "video/vnd.dece.hd"],
  ["uvvi", "image/vnd.dece.graphic"],
  ["uvvm", "video/vnd.dece.mobile"],
  ["uvvp", "video/vnd.dece.pd"],
  ["uvvs", "video/vnd.dece.sd"],
  ["uvvt", "application/vnd.dece.ttml+xml"],
  ["uvvu", "video/vnd.uvvu.mp4"],
  ["uvvv", "video/vnd.dece.video"],
  ["uvvx", "application/vnd.dece.unspecified"],
  ["uvvz", "application/vnd.dece.zip"],
  ["uvx", "application/vnd.dece.unspecified"],
  ["uvz", "application/vnd.dece.zip"],
  ["vbox", "application/x-virtualbox-vbox"],
  ["vbox-extpack", "application/x-virtualbox-vbox-extpack"],
  ["vcard", "text/vcard"],
  ["vcd", "application/x-cdlink"],
  ["vcf", "text/x-vcard"],
  ["vcg", "application/vnd.groove-vcard"],
  ["vcs", "text/x-vcalendar"],
  ["vcx", "application/vnd.vcx"],
  ["vdi", "application/x-virtualbox-vdi"],
  ["vds", "model/vnd.sap.vds"],
  ["vhd", "application/x-virtualbox-vhd"],
  ["vis", "application/vnd.visionary"],
  ["viv", "video/vnd.vivo"],
  ["vlc", "application/videolan"],
  ["vmdk", "application/x-virtualbox-vmdk"],
  ["vob", "video/x-ms-vob"],
  ["vor", "application/vnd.stardivision.writer"],
  ["vox", "application/x-authorware-bin"],
  ["vrml", "model/vrml"],
  ["vsd", "application/vnd.visio"],
  ["vsf", "application/vnd.vsf"],
  ["vss", "application/vnd.visio"],
  ["vst", "application/vnd.visio"],
  ["vsw", "application/vnd.visio"],
  ["vtf", "image/vnd.valve.source.texture"],
  ["vtt", "text/vtt"],
  ["vtu", "model/vnd.vtu"],
  ["vxml", "application/voicexml+xml"],
  ["w3d", "application/x-director"],
  ["wad", "application/x-doom"],
  ["wadl", "application/vnd.sun.wadl+xml"],
  ["war", "application/java-archive"],
  ["wasm", "application/wasm"],
  ["wav", "audio/x-wav"],
  ["wax", "audio/x-ms-wax"],
  ["wbmp", "image/vnd.wap.wbmp"],
  ["wbs", "application/vnd.criticaltools.wbs+xml"],
  ["wbxml", "application/wbxml"],
  ["wcm", "application/vnd.ms-works"],
  ["wdb", "application/vnd.ms-works"],
  ["wdp", "image/vnd.ms-photo"],
  ["weba", "audio/webm"],
  ["webapp", "application/x-web-app-manifest+json"],
  ["webm", "video/webm"],
  ["webmanifest", "application/manifest+json"],
  ["webp", "image/webp"],
  ["wg", "application/vnd.pmi.widget"],
  ["wgt", "application/widget"],
  ["wks", "application/vnd.ms-works"],
  ["wm", "video/x-ms-wm"],
  ["wma", "audio/x-ms-wma"],
  ["wmd", "application/x-ms-wmd"],
  ["wmf", "image/wmf"],
  ["wml", "text/vnd.wap.wml"],
  ["wmlc", "application/wmlc"],
  ["wmls", "text/vnd.wap.wmlscript"],
  ["wmlsc", "application/vnd.wap.wmlscriptc"],
  ["wmv", "video/x-ms-wmv"],
  ["wmx", "video/x-ms-wmx"],
  ["wmz", "application/x-msmetafile"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["word", "application/msword"],
  ["wpd", "application/vnd.wordperfect"],
  ["wpl", "application/vnd.ms-wpl"],
  ["wps", "application/vnd.ms-works"],
  ["wqd", "application/vnd.wqd"],
  ["wri", "application/x-mswrite"],
  ["wrl", "model/vrml"],
  ["wsc", "message/vnd.wfa.wsc"],
  ["wsdl", "application/wsdl+xml"],
  ["wspolicy", "application/wspolicy+xml"],
  ["wtb", "application/vnd.webturbo"],
  ["wvx", "video/x-ms-wvx"],
  ["x3d", "model/x3d+xml"],
  ["x3db", "model/x3d+fastinfoset"],
  ["x3dbz", "model/x3d+binary"],
  ["x3dv", "model/x3d-vrml"],
  ["x3dvz", "model/x3d+vrml"],
  ["x3dz", "model/x3d+xml"],
  ["x32", "application/x-authorware-bin"],
  ["x_b", "model/vnd.parasolid.transmit.binary"],
  ["x_t", "model/vnd.parasolid.transmit.text"],
  ["xaml", "application/xaml+xml"],
  ["xap", "application/x-silverlight-app"],
  ["xar", "application/vnd.xara"],
  ["xav", "application/xcap-att+xml"],
  ["xbap", "application/x-ms-xbap"],
  ["xbd", "application/vnd.fujixerox.docuworks.binder"],
  ["xbm", "image/x-xbitmap"],
  ["xca", "application/xcap-caps+xml"],
  ["xcs", "application/calendar+xml"],
  ["xdf", "application/xcap-diff+xml"],
  ["xdm", "application/vnd.syncml.dm+xml"],
  ["xdp", "application/vnd.adobe.xdp+xml"],
  ["xdssc", "application/dssc+xml"],
  ["xdw", "application/vnd.fujixerox.docuworks"],
  ["xel", "application/xcap-el+xml"],
  ["xenc", "application/xenc+xml"],
  ["xer", "application/patch-ops-error+xml"],
  ["xfdf", "application/vnd.adobe.xfdf"],
  ["xfdl", "application/vnd.xfdl"],
  ["xht", "application/xhtml+xml"],
  ["xhtml", "application/xhtml+xml"],
  ["xhvml", "application/xv+xml"],
  ["xif", "image/vnd.xiff"],
  ["xl", "application/excel"],
  ["xla", "application/vnd.ms-excel"],
  ["xlam", "application/vnd.ms-excel.addin.macroEnabled.12"],
  ["xlc", "application/vnd.ms-excel"],
  ["xlf", "application/xliff+xml"],
  ["xlm", "application/vnd.ms-excel"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsb", "application/vnd.ms-excel.sheet.binary.macroEnabled.12"],
  ["xlsm", "application/vnd.ms-excel.sheet.macroEnabled.12"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xlt", "application/vnd.ms-excel"],
  ["xltm", "application/vnd.ms-excel.template.macroEnabled.12"],
  ["xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template"],
  ["xlw", "application/vnd.ms-excel"],
  ["xm", "audio/xm"],
  ["xml", "application/xml"],
  ["xns", "application/xcap-ns+xml"],
  ["xo", "application/vnd.olpc-sugar"],
  ["xop", "application/xop+xml"],
  ["xpi", "application/x-xpinstall"],
  ["xpl", "application/xproc+xml"],
  ["xpm", "image/x-xpixmap"],
  ["xpr", "application/vnd.is-xpr"],
  ["xps", "application/vnd.ms-xpsdocument"],
  ["xpw", "application/vnd.intercon.formnet"],
  ["xpx", "application/vnd.intercon.formnet"],
  ["xsd", "application/xml"],
  ["xsl", "application/xml"],
  ["xslt", "application/xslt+xml"],
  ["xsm", "application/vnd.syncml+xml"],
  ["xspf", "application/xspf+xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["xvm", "application/xv+xml"],
  ["xvml", "application/xv+xml"],
  ["xwd", "image/x-xwindowdump"],
  ["xyz", "chemical/x-xyz"],
  ["xz", "application/x-xz"],
  ["yaml", "text/yaml"],
  ["yang", "application/yang"],
  ["yin", "application/yin+xml"],
  ["yml", "text/yaml"],
  ["ymp", "text/x-suse-ymp"],
  ["z", "application/x-compress"],
  ["z1", "application/x-zmachine"],
  ["z2", "application/x-zmachine"],
  ["z3", "application/x-zmachine"],
  ["z4", "application/x-zmachine"],
  ["z5", "application/x-zmachine"],
  ["z6", "application/x-zmachine"],
  ["z7", "application/x-zmachine"],
  ["z8", "application/x-zmachine"],
  ["zaz", "application/vnd.zzazz.deck+xml"],
  ["zip", "application/zip"],
  ["zir", "application/vnd.zul"],
  ["zirz", "application/vnd.zul"],
  ["zmm", "application/vnd.handheld-entertainment+xml"],
  ["zsh", "text/x-scriptzsh"]
]);
function Pt(e, n, t) {
  const r = pp(e), { webkitRelativePath: o } = e, i = typeof n == "string" ? n : typeof o == "string" && o.length > 0 ? o : `./${e.name}`;
  return typeof r.path != "string" && mi(r, "path", i), mi(r, "relativePath", i), r;
}
function pp(e) {
  const { name: n } = e;
  if (n && n.lastIndexOf(".") !== -1 && !e.type) {
    const r = n.split(".").pop().toLowerCase(), o = up.get(r);
    o && Object.defineProperty(e, "type", {
      value: o,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function mi(e, n, t) {
  Object.defineProperty(e, n, {
    value: t,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const fp = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function mp(e) {
  return gt(this, void 0, void 0, function* () {
    return jn(e) && vp(e.dataTransfer) ? bp(e.dataTransfer, e.type) : hp(e) ? gp(e) : Array.isArray(e) && e.every((n) => "getFile" in n && typeof n.getFile == "function") ? xp(e) : [];
  });
}
function vp(e) {
  return jn(e);
}
function hp(e) {
  return jn(e) && jn(e.target);
}
function jn(e) {
  return typeof e == "object" && e !== null;
}
function gp(e) {
  return Gr(e.target.files).map((n) => Pt(n));
}
function xp(e) {
  return gt(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((t) => t.getFile()))).map((t) => Pt(t));
  });
}
function bp(e, n) {
  return gt(this, void 0, void 0, function* () {
    if (e.items) {
      const t = Gr(e.items).filter((o) => o.kind === "file");
      if (n !== "drop")
        return t;
      const r = yield Promise.all(t.map(yp));
      return vi(Ka(r));
    }
    return vi(Gr(e.files).map((t) => Pt(t)));
  });
}
function vi(e) {
  return e.filter((n) => fp.indexOf(n.name) === -1);
}
function Gr(e) {
  if (e === null)
    return [];
  const n = [];
  for (let t = 0; t < e.length; t++) {
    const r = e[t];
    n.push(r);
  }
  return n;
}
function yp(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return hi(e);
  const n = e.webkitGetAsEntry();
  return n && n.isDirectory ? Za(n) : hi(e, n);
}
function Ka(e) {
  return e.reduce((n, t) => [
    ...n,
    ...Array.isArray(t) ? Ka(t) : [t]
  ], []);
}
function hi(e, n) {
  return gt(this, void 0, void 0, function* () {
    var t;
    if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
      const i = yield e.getAsFileSystemHandle();
      if (i === null)
        throw new Error(`${e} is not a File`);
      if (i !== void 0) {
        const a = yield i.getFile();
        return a.handle = i, Pt(a);
      }
    }
    const r = e.getAsFile();
    if (!r)
      throw new Error(`${e} is not a File`);
    return Pt(r, (t = n?.fullPath) !== null && t !== void 0 ? t : void 0);
  });
}
function wp(e) {
  return gt(this, void 0, void 0, function* () {
    return e.isDirectory ? Za(e) : Cp(e);
  });
}
function Za(e) {
  const n = e.createReader();
  return new Promise((t, r) => {
    const o = [];
    function i() {
      n.readEntries((a) => gt(this, void 0, void 0, function* () {
        if (a.length) {
          const s = Promise.all(a.map(wp));
          o.push(s), i();
        } else
          try {
            const s = yield Promise.all(o);
            t(s);
          } catch (s) {
            r(s);
          }
      }), (a) => {
        r(a);
      });
    }
    i();
  });
}
function Cp(e) {
  return gt(this, void 0, void 0, function* () {
    return new Promise((n, t) => {
      e.file((r) => {
        const o = Pt(r, e.fullPath);
        n(o);
      }, (r) => {
        t(r);
      });
    });
  });
}
var pn = {}, gi;
function Sp() {
  return gi || (gi = 1, pn.__esModule = !0, pn.default = function(e, n) {
    if (e && n) {
      var t = Array.isArray(n) ? n : n.split(",");
      if (t.length === 0)
        return !0;
      var r = e.name || "", o = (e.type || "").toLowerCase(), i = o.replace(/\/.*$/, "");
      return t.some(function(a) {
        var s = a.trim().toLowerCase();
        return s.charAt(0) === "." ? r.toLowerCase().endsWith(s) : s.endsWith("/*") ? i === s.replace(/\/.*$/, "") : o === s;
      });
    }
    return !0;
  }), pn;
}
var Ep = Sp();
const Er = /* @__PURE__ */ lo(Ep);
function xi(e) {
  return Rp(e) || _p(e) || Ja(e) || kp();
}
function kp() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _p(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Rp(e) {
  if (Array.isArray(e)) return qr(e);
}
function bi(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function yi(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? bi(Object(t), !0).forEach(function(r) {
      Xa(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : bi(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Xa(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function Yt(e, n) {
  return Ap(e) || jp(e, n) || Ja(e, n) || Pp();
}
function Pp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ja(e, n) {
  if (e) {
    if (typeof e == "string") return qr(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return qr(e, n);
  }
}
function qr(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function jp(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r = [], o = !0, i = !1, a, s;
    try {
      for (t = t.call(e); !(o = (a = t.next()).done) && (r.push(a.value), !(n && r.length === n)); o = !0)
        ;
    } catch (c) {
      i = !0, s = c;
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (i) throw s;
      }
    }
    return r;
  }
}
function Ap(e) {
  if (Array.isArray(e)) return e;
}
var Op = typeof Er == "function" ? Er : Er.default, Tp = "file-invalid-type", Mp = "file-too-large", Dp = "file-too-small", Np = "too-many-files", Ip = function() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = n.split(","), r = t.length > 1 ? "one of ".concat(t.join(", ")) : t[0];
  return {
    code: Tp,
    message: "File type must be ".concat(r)
  };
}, wi = function(n) {
  return {
    code: Mp,
    message: "File is larger than ".concat(n, " ").concat(n === 1 ? "byte" : "bytes")
  };
}, Ci = function(n) {
  return {
    code: Dp,
    message: "File is smaller than ".concat(n, " ").concat(n === 1 ? "byte" : "bytes")
  };
}, Lp = {
  code: Np,
  message: "Too many files"
};
function Qa(e, n) {
  var t = e.type === "application/x-moz-file" || Op(e, n);
  return [t, t ? null : Ip(n)];
}
function es(e, n, t) {
  if (ut(e.size))
    if (ut(n) && ut(t)) {
      if (e.size > t) return [!1, wi(t)];
      if (e.size < n) return [!1, Ci(n)];
    } else {
      if (ut(n) && e.size < n) return [!1, Ci(n)];
      if (ut(t) && e.size > t) return [!1, wi(t)];
    }
  return [!0, null];
}
function ut(e) {
  return e != null;
}
function Fp(e) {
  var n = e.files, t = e.accept, r = e.minSize, o = e.maxSize, i = e.multiple, a = e.maxFiles, s = e.validator;
  return !i && n.length > 1 || i && a >= 1 && n.length > a ? !1 : n.every(function(c) {
    var d = Qa(c, t), p = Yt(d, 1), f = p[0], v = es(c, r, o), h = Yt(v, 1), x = h[0], m = s ? s(c) : null;
    return f && x && !m;
  });
}
function An(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function fn(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(n) {
    return n === "Files" || n === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function Si(e) {
  e.preventDefault();
}
function zp(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function $p(e) {
  return e.indexOf("Edge/") !== -1;
}
function Wp() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return zp(e) || $p(e);
}
function ze() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  return function(r) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
      i[a - 1] = arguments[a];
    return n.some(function(s) {
      return !An(r) && s && s.apply(void 0, [r].concat(i)), An(r);
    });
  };
}
function Vp() {
  return "showOpenFilePicker" in window;
}
function Bp(e) {
  if (ut(e)) {
    var n = Object.entries(e).filter(function(t) {
      var r = Yt(t, 2), o = r[0], i = r[1], a = !0;
      return ts(o) || (console.warn('Skipped "'.concat(o, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), a = !1), (!Array.isArray(i) || !i.every(ns)) && (console.warn('Skipped "'.concat(o, '" because an invalid file extension was provided.')), a = !1), a;
    }).reduce(function(t, r) {
      var o = Yt(r, 2), i = o[0], a = o[1];
      return yi(yi({}, t), {}, Xa({}, i, a));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: n
    }];
  }
  return e;
}
function Hp(e) {
  if (ut(e))
    return Object.entries(e).reduce(function(n, t) {
      var r = Yt(t, 2), o = r[0], i = r[1];
      return [].concat(xi(n), [o], xi(i));
    }, []).filter(function(n) {
      return ts(n) || ns(n);
    }).join(",");
}
function Up(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function Gp(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function ts(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function ns(e) {
  return /^.*\.[\w]+$/.test(e);
}
var qp = ["children"], Yp = ["open"], Kp = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], Zp = ["refKey", "onChange", "onClick"];
function Xp(e) {
  return ef(e) || Qp(e) || rs(e) || Jp();
}
function Jp() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qp(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ef(e) {
  if (Array.isArray(e)) return Yr(e);
}
function kr(e, n) {
  return rf(e) || nf(e, n) || rs(e, n) || tf();
}
function tf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rs(e, n) {
  if (e) {
    if (typeof e == "string") return Yr(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Yr(e, n);
  }
}
function Yr(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function nf(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r = [], o = !0, i = !1, a, s;
    try {
      for (t = t.call(e); !(o = (a = t.next()).done) && (r.push(a.value), !(n && r.length === n)); o = !0)
        ;
    } catch (c) {
      i = !0, s = c;
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (i) throw s;
      }
    }
    return r;
  }
}
function rf(e) {
  if (Array.isArray(e)) return e;
}
function Ei(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function xe(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ei(Object(t), !0).forEach(function(r) {
      Kr(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ei(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Kr(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function On(e, n) {
  if (e == null) return {};
  var t = of(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function of(e, n) {
  if (e == null) return {};
  var t = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(n.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
var vo = /* @__PURE__ */ Vn(function(e, n) {
  var t = e.children, r = On(e, qp), o = ho(r), i = o.open, a = On(o, Yp);
  return Ll(n, function() {
    return {
      open: i
    };
  }, [i]), /* @__PURE__ */ ie.createElement(Fl, null, t(xe(xe({}, a), {}, {
    open: i
  })));
});
vo.displayName = "Dropzone";
var os = {
  disabled: !1,
  getFilesFromEvent: mp,
  maxSize: 1 / 0,
  minSize: 0,
  multiple: !0,
  maxFiles: 0,
  preventDropOnDocument: !0,
  noClick: !1,
  noKeyboard: !1,
  noDrag: !1,
  noDragEventsBubbling: !1,
  validator: null,
  useFsAccessApi: !1,
  autoFocus: !1
};
vo.defaultProps = os;
vo.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: me.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: me.objectOf(me.arrayOf(me.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: me.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: me.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: me.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: me.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: me.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: me.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: me.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: me.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: me.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: me.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event|Array<FileSystemFileHandle>)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: me.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: me.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: me.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: me.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: me.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: me.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: me.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: me.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: me.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: me.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: me.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: me.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: me.func
};
var Zr = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function ho() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = xe(xe({}, os), e), t = n.accept, r = n.disabled, o = n.getFilesFromEvent, i = n.maxSize, a = n.minSize, s = n.multiple, c = n.maxFiles, d = n.onDragEnter, p = n.onDragLeave, f = n.onDragOver, v = n.onDrop, h = n.onDropAccepted, x = n.onDropRejected, m = n.onFileDialogCancel, g = n.onFileDialogOpen, y = n.useFsAccessApi, C = n.autoFocus, S = n.preventDropOnDocument, E = n.noClick, w = n.noKeyboard, N = n.noDrag, j = n.noDragEventsBubbling, P = n.onError, I = n.validator, V = rt(function() {
    return Hp(t);
  }, [t]), X = rt(function() {
    return Bp(t);
  }, [t]), q = rt(function() {
    return typeof g == "function" ? g : ki;
  }, [g]), U = rt(function() {
    return typeof m == "function" ? m : ki;
  }, [m]), H = an(null), $ = an(null), L = Il(af, Zr), J = kr(L, 2), R = J[0], M = J[1], _ = R.isFocused, b = R.isFileDialogActive, O = an(typeof window < "u" && window.isSecureContext && y && Vp()), D = function() {
    !O.current && b && setTimeout(function() {
      if ($.current) {
        var te = $.current.files;
        te.length || (M({
          type: "closeDialog"
        }), U());
      }
    }, 300);
  };
  wn(function() {
    return window.addEventListener("focus", D, !1), function() {
      window.removeEventListener("focus", D, !1);
    };
  }, [$, b, U, O]);
  var T = an([]), Z = function(te) {
    H.current && H.current.contains(te.target) || (te.preventDefault(), T.current = []);
  };
  wn(function() {
    return S && (document.addEventListener("dragover", Si, !1), document.addEventListener("drop", Z, !1)), function() {
      S && (document.removeEventListener("dragover", Si), document.removeEventListener("drop", Z));
    };
  }, [H, S]), wn(function() {
    return !r && C && H.current && H.current.focus(), function() {
    };
  }, [H, C, r]);
  var G = ye(function(F) {
    P ? P(F) : console.error(F);
  }, [P]), k = ye(function(F) {
    F.preventDefault(), F.persist(), Ce(F), T.current = [].concat(Xp(T.current), [F.target]), fn(F) && Promise.resolve(o(F)).then(function(te) {
      if (!(An(F) && !j)) {
        var de = te.length, ve = de > 0 && Fp({
          files: te,
          accept: V,
          minSize: a,
          maxSize: i,
          multiple: s,
          maxFiles: c,
          validator: I
        }), Ee = de > 0 && !ve;
        M({
          isDragAccept: ve,
          isDragReject: Ee,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), d && d(F);
      }
    }).catch(function(te) {
      return G(te);
    });
  }, [o, d, G, j, V, a, i, s, c, I]), W = ye(function(F) {
    F.preventDefault(), F.persist(), Ce(F);
    var te = fn(F);
    if (te && F.dataTransfer)
      try {
        F.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return te && f && f(F), !1;
  }, [f, j]), Q = ye(function(F) {
    F.preventDefault(), F.persist(), Ce(F);
    var te = T.current.filter(function(ve) {
      return H.current && H.current.contains(ve);
    }), de = te.indexOf(F.target);
    de !== -1 && te.splice(de, 1), T.current = te, !(te.length > 0) && (M({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), fn(F) && p && p(F));
  }, [H, p, j]), B = ye(function(F, te) {
    var de = [], ve = [];
    F.forEach(function(Ee) {
      var Je = Qa(Ee, V), Qe = kr(Je, 2), Lt = Qe[0], Ft = Qe[1], Me = es(Ee, a, i), et = kr(Me, 2), zt = et[0], pr = et[1], fr = I ? I(Ee) : null;
      if (Lt && zt && !fr)
        de.push(Ee);
      else {
        var mr = [Ft, pr];
        fr && (mr = mr.concat(fr)), ve.push({
          file: Ee,
          errors: mr.filter(function(Dl) {
            return Dl;
          })
        });
      }
    }), (!s && de.length > 1 || s && c >= 1 && de.length > c) && (de.forEach(function(Ee) {
      ve.push({
        file: Ee,
        errors: [Lp]
      });
    }), de.splice(0)), M({
      acceptedFiles: de,
      fileRejections: ve,
      isDragReject: ve.length > 0,
      type: "setFiles"
    }), v && v(de, ve, te), ve.length > 0 && x && x(ve, te), de.length > 0 && h && h(de, te);
  }, [M, s, V, a, i, c, v, h, x, I]), re = ye(function(F) {
    F.preventDefault(), F.persist(), Ce(F), T.current = [], fn(F) && Promise.resolve(o(F)).then(function(te) {
      An(F) && !j || B(te, F);
    }).catch(function(te) {
      return G(te);
    }), M({
      type: "reset"
    });
  }, [o, B, G, j]), A = ye(function() {
    if (O.current) {
      M({
        type: "openDialog"
      }), q();
      var F = {
        multiple: s,
        types: X
      };
      window.showOpenFilePicker(F).then(function(te) {
        return o(te);
      }).then(function(te) {
        B(te, null), M({
          type: "closeDialog"
        });
      }).catch(function(te) {
        Up(te) ? (U(te), M({
          type: "closeDialog"
        })) : Gp(te) ? (O.current = !1, $.current ? ($.current.value = null, $.current.click()) : G(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : G(te);
      });
      return;
    }
    $.current && (M({
      type: "openDialog"
    }), q(), $.current.value = null, $.current.click());
  }, [M, q, U, y, B, G, X, s]), pe = ye(function(F) {
    !H.current || !H.current.isEqualNode(F.target) || (F.key === " " || F.key === "Enter" || F.keyCode === 32 || F.keyCode === 13) && (F.preventDefault(), A());
  }, [H, A]), ee = ye(function() {
    M({
      type: "focus"
    });
  }, []), oe = ye(function() {
    M({
      type: "blur"
    });
  }, []), be = ye(function() {
    E || (Wp() ? setTimeout(A, 0) : A());
  }, [E, A]), ge = function(te) {
    return r ? null : te;
  }, Se = function(te) {
    return w ? null : ge(te);
  }, fe = function(te) {
    return N ? null : ge(te);
  }, Ce = function(te) {
    j && te.stopPropagation();
  }, yt = rt(function() {
    return function() {
      var F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, te = F.refKey, de = te === void 0 ? "ref" : te, ve = F.role, Ee = F.onKeyDown, Je = F.onFocus, Qe = F.onBlur, Lt = F.onClick, Ft = F.onDragEnter, Me = F.onDragOver, et = F.onDragLeave, zt = F.onDrop, pr = On(F, Kp);
      return xe(xe(Kr({
        onKeyDown: Se(ze(Ee, pe)),
        onFocus: Se(ze(Je, ee)),
        onBlur: Se(ze(Qe, oe)),
        onClick: ge(ze(Lt, be)),
        onDragEnter: fe(ze(Ft, k)),
        onDragOver: fe(ze(Me, W)),
        onDragLeave: fe(ze(et, Q)),
        onDrop: fe(ze(zt, re)),
        role: typeof ve == "string" && ve !== "" ? ve : "presentation"
      }, de, H), !r && !w ? {
        tabIndex: 0
      } : {}), pr);
    };
  }, [H, pe, ee, oe, be, k, W, Q, re, w, N, r]), je = ye(function(F) {
    F.stopPropagation();
  }, []), Ue = rt(function() {
    return function() {
      var F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, te = F.refKey, de = te === void 0 ? "ref" : te, ve = F.onChange, Ee = F.onClick, Je = On(F, Zp), Qe = Kr({
        accept: V,
        multiple: s,
        type: "file",
        style: {
          border: 0,
          clip: "rect(0, 0, 0, 0)",
          clipPath: "inset(50%)",
          height: "1px",
          margin: "0 -1px -1px 0",
          overflow: "hidden",
          padding: 0,
          position: "absolute",
          width: "1px",
          whiteSpace: "nowrap"
        },
        onChange: ge(ze(ve, re)),
        onClick: ge(ze(Ee, je)),
        tabIndex: -1
      }, de, $);
      return xe(xe({}, Qe), Je);
    };
  }, [$, t, s, re, r]);
  return xe(xe({}, R), {}, {
    isFocused: _ && !r,
    getRootProps: yt,
    getInputProps: Ue,
    rootRef: H,
    inputRef: $,
    open: ge(A)
  });
}
function af(e, n) {
  switch (n.type) {
    case "focus":
      return xe(xe({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return xe(xe({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return xe(xe({}, Zr), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return xe(xe({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return xe(xe({}, e), {}, {
        isDragActive: n.isDragActive,
        isDragAccept: n.isDragAccept,
        isDragReject: n.isDragReject
      });
    case "setFiles":
      return xe(xe({}, e), {}, {
        acceptedFiles: n.acceptedFiles,
        fileRejections: n.fileRejections,
        isDragReject: n.isDragReject
      });
    case "reset":
      return xe({}, Zr);
    default:
      return e;
  }
}
function ki() {
}
function sf(e) {
  return new Promise((n, t) => {
    const r = URL.createObjectURL(e), o = document.createElement(
      e.type.startsWith("video/") ? "video" : "audio"
    );
    o.preload = "metadata", o.src = r, o.onloadedmetadata = () => {
      const i = o.duration;
      URL.revokeObjectURL(r), n(i);
    }, o.onerror = () => {
      URL.revokeObjectURL(r), t(new Error("Failed to load media metadata"));
    };
  });
}
function cf(e) {
  return ["mp4", "webm", "ogg", "mov", "m4v"].includes(e) ? `video/${e === "mov" ? "quicktime" : e}` : ["mp3", "wav", "ogg", "aac", "flac", "m4a"].includes(e) ? `audio/${e === "mp3" ? "mpeg" : e === "m4a" ? "mp4" : e}` : null;
}
function lf(e) {
  const n = {};
  for (const t of e) {
    const r = t.toLowerCase().replace(/^\./, ""), o = cf(r);
    o && (n[o] ??= [], n[o].push(`.${r}`));
  }
  return n;
}
function df({ extensions: e, placeholder: n, onDropFile: t }) {
  const r = rt(() => lf(e), [e]), o = ye(
    async (p) => {
      const f = p[0] || null;
      if (f && !(!f.type.startsWith("video/") && !f.type.startsWith("audio/")))
        try {
          const v = await sf(f);
          t({
            file: f,
            meta: {
              duration: v,
              type: f.type.startsWith("video/") ? "video" : "audio",
              extension: f.name.split(".").pop() || "",
              previewUrl: URL.createObjectURL(f)
            }
          });
        } catch (v) {
          console.error("Failed to read media duration", v);
        }
    },
    [t]
  ), { getRootProps: i, getInputProps: a, isDragActive: s, fileRejections: c } = ho({
    onDrop: o,
    accept: r,
    maxFiles: 1
  }), d = c.flatMap(
    (p) => p.errors.map((f) => f.code === "file-invalid-type" ? `Invalid file type. Allowed types: ${e.join(", ")}` : f.message)
  );
  return /* @__PURE__ */ l.jsxs("div", { className: "space-y-2 w-full", children: [
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ...i(),
        className: z(
          "relative flex flex-col items-center justify-center w-full min-h-38.5 border border-gray-50 rounded-[0.625rem] cursor-pointer transition-colors bg-white",
          s && "border-blue-hepatica-600"
        ),
        children: [
          /* @__PURE__ */ l.jsx("input", { ...a() }),
          /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
            /* @__PURE__ */ l.jsx("div", { className: "size-12 flex items-center justify-center rounded-full bg-gray-25 mb-4", children: /* @__PURE__ */ l.jsx(Pa, { className: "size-6 text-blue-hepatica-600" }) }),
            /* @__PURE__ */ l.jsx("p", { className: "mb-2 text-sm text-gray-700 font-medium", children: "Click to upload or drag and drop" }),
            !!n && /* @__PURE__ */ l.jsx("p", { className: "text-xs text-gray-500 text-center", children: n })
          ] })
        ]
      }
    ),
    d.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "space-y-1", children: d.map((p, f) => /* @__PURE__ */ l.jsx("p", { className: "text-sm text-bright-red-600", children: p }, f)) })
  ] });
}
function uf({ file: e, onChange: n }) {
  const t = ye(() => {
    n(null);
  }, [n]), r = e.type.startsWith("video/") ? "Video" : "Audio";
  return /* @__PURE__ */ l.jsxs("div", { className: "w-full p-4 flex justify-between items-center bg-white border border-gray-50 rounded-lg", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-x-3", children: [
      /* @__PURE__ */ l.jsx("div", { className: "size-10 bg-gray-25 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ l.jsx(Pa, { className: "size-6 text-blue-hepatica-600" }) }),
      /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ l.jsx("h3", { className: "text-sm leading-4.5 font-medium text-gray-700 tracking-[0.02em]", children: e.name }),
        /* @__PURE__ */ l.jsxs("span", { className: "text-xs font-normal leading-4 text-gray-100 tracking-[0.02em]", children: [
          r,
          " file uploaded"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        onClick: t,
        className: "size-10 flex items-center justify-center rounded-lg bg-white hover:bg-bright-red-100 transition-colors duration-200",
        children: /* @__PURE__ */ l.jsx(Jd, { className: "size-4 text-bright-red-600" })
      }
    )
  ] });
}
function sb({
  accepts: e,
  onChange: n,
  value: t,
  placeholder: r = ""
}) {
  return t ? /* @__PURE__ */ l.jsx(uf, { file: t, onChange: n }) : /* @__PURE__ */ l.jsx(
    df,
    {
      extensions: e,
      onDropFile: n,
      placeholder: r
    }
  );
}
function cb({
  active: e,
  children: n,
  collapsed: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ l.jsx(
    Un,
    {
      className: z(
        "flex w-full h-10 items-center justify-start gap-x-3 px-3 text-sm font-sans font-semibold text-white bg-transparent [&>svg:size-4] hover:bg-blue-hepatica-600 rounded-lg transition-all duration-200",
        {
          "[&>span]:hidden w-10": t,
          "bg-blue-hepatica-800": e,
          "disabled:text-gray-600 disabled:pointer-events-none": r
        }
      ),
      children: n
    }
  );
}
function _i(e, [n, t]) {
  return Math.min(t, Math.max(n, e));
}
function ne(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
  return function(o) {
    if (e?.(o), t === !1 || !o.defaultPrevented)
      return n?.(o);
  };
}
function pf(e, n) {
  const t = u.createContext(n), r = (i) => {
    const { children: a, ...s } = i, c = u.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ l.jsx(t.Provider, { value: c, children: a });
  };
  r.displayName = e + "Provider";
  function o(i) {
    const a = u.useContext(t);
    if (a) return a;
    if (n !== void 0) return n;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function at(e, n = []) {
  let t = [];
  function r(i, a) {
    const s = u.createContext(a), c = t.length;
    t = [...t, a];
    const d = (f) => {
      const { scope: v, children: h, ...x } = f, m = v?.[e]?.[c] || s, g = u.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ l.jsx(m.Provider, { value: g, children: h });
    };
    d.displayName = i + "Provider";
    function p(f, v) {
      const h = v?.[e]?.[c] || s, x = u.useContext(h);
      if (x) return x;
      if (a !== void 0) return a;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [d, p];
  }
  const o = () => {
    const i = t.map((a) => u.createContext(a));
    return function(s) {
      const c = s?.[e] || i;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: c } }),
        [s, c]
      );
    };
  };
  return o.scopeName = e, [r, ff(o, ...n)];
}
function ff(...e) {
  const n = e[0];
  if (e.length === 1) return n;
  const t = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const a = r.reduce((s, { useScope: c, scopeName: d }) => {
        const f = c(i)[`__scope${d}`];
        return { ...s, ...f };
      }, {});
      return u.useMemo(() => ({ [`__scope${n.scopeName}`]: a }), [a]);
    };
  };
  return t.scopeName = n.scopeName, t;
}
// @__NO_SIDE_EFFECTS__
function jt(e) {
  const n = /* @__PURE__ */ mf(e), t = u.forwardRef((r, o) => {
    const { children: i, ...a } = r, s = u.Children.toArray(i), c = s.find(hf);
    if (c) {
      const d = c.props.children, p = s.map((f) => f === c ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : f);
      return /* @__PURE__ */ l.jsx(n, { ...a, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, p) : null });
    }
    return /* @__PURE__ */ l.jsx(n, { ...a, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function mf(e) {
  const n = u.forwardRef((t, r) => {
    const { children: o, ...i } = t;
    if (u.isValidElement(o)) {
      const a = xf(o), s = gf(i, o.props);
      return o.type !== u.Fragment && (s.ref = r ? en(r, a) : a), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var is = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function vf(e) {
  const n = ({ children: t }) => /* @__PURE__ */ l.jsx(l.Fragment, { children: t });
  return n.displayName = `${e}.Slottable`, n.__radixId = is, n;
}
function hf(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === is;
}
function gf(e, n) {
  const t = { ...n };
  for (const r in n) {
    const o = e[r], i = n[r];
    /^on[A-Z]/.test(r) ? o && i ? t[r] = (...s) => {
      const c = i(...s);
      return o(...s), c;
    } : o && (t[r] = o) : r === "style" ? t[r] = { ...o, ...i } : r === "className" && (t[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function xf(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
function go(e) {
  const n = e + "CollectionProvider", [t, r] = at(n), [o, i] = t(
    n,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (m) => {
    const { scope: g, children: y } = m, C = ie.useRef(null), S = ie.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ l.jsx(o, { scope: g, itemMap: S, collectionRef: C, children: y });
  };
  a.displayName = n;
  const s = e + "CollectionSlot", c = /* @__PURE__ */ jt(s), d = ie.forwardRef(
    (m, g) => {
      const { scope: y, children: C } = m, S = i(s, y), E = ue(g, S.collectionRef);
      return /* @__PURE__ */ l.jsx(c, { ref: E, children: C });
    }
  );
  d.displayName = s;
  const p = e + "CollectionItemSlot", f = "data-radix-collection-item", v = /* @__PURE__ */ jt(p), h = ie.forwardRef(
    (m, g) => {
      const { scope: y, children: C, ...S } = m, E = ie.useRef(null), w = ue(g, E), N = i(p, y);
      return ie.useEffect(() => (N.itemMap.set(E, { ref: E, ...S }), () => void N.itemMap.delete(E))), /* @__PURE__ */ l.jsx(v, { [f]: "", ref: w, children: C });
    }
  );
  h.displayName = p;
  function x(m) {
    const g = i(e + "CollectionConsumer", m);
    return ie.useCallback(() => {
      const C = g.collectionRef.current;
      if (!C) return [];
      const S = Array.from(C.querySelectorAll(`[${f}]`));
      return Array.from(g.itemMap.values()).sort(
        (N, j) => S.indexOf(N.ref.current) - S.indexOf(j.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: a, Slot: d, ItemSlot: h },
    x,
    r
  ];
}
var bf = u.createContext(void 0);
function xo(e) {
  const n = u.useContext(bf);
  return e || n || "ltr";
}
var yf = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], se = yf.reduce((e, n) => {
  const t = /* @__PURE__ */ jt(`Primitive.${n}`), r = u.forwardRef((o, i) => {
    const { asChild: a, ...s } = o, c = a ? t : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l.jsx(c, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {});
function as(e, n) {
  e && Bn.flushSync(() => e.dispatchEvent(n));
}
function Ve(e) {
  const n = u.useRef(e);
  return u.useEffect(() => {
    n.current = e;
  }), u.useMemo(() => (...t) => n.current?.(...t), []);
}
function wf(e, n = globalThis?.document) {
  const t = Ve(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && t(o);
    };
    return n.addEventListener("keydown", r, { capture: !0 }), () => n.removeEventListener("keydown", r, { capture: !0 });
  }, [t, n]);
}
var Cf = "DismissableLayer", Xr = "dismissableLayer.update", Sf = "dismissableLayer.pointerDownOutside", Ef = "dismissableLayer.focusOutside", Ri, ss = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Yn = u.forwardRef(
  (e, n) => {
    const {
      disableOutsidePointerEvents: t = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: a,
      onDismiss: s,
      ...c
    } = e, d = u.useContext(ss), [p, f] = u.useState(null), v = p?.ownerDocument ?? globalThis?.document, [, h] = u.useState({}), x = ue(n, (j) => f(j)), m = Array.from(d.layers), [g] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), y = m.indexOf(g), C = p ? m.indexOf(p) : -1, S = d.layersWithOutsidePointerEventsDisabled.size > 0, E = C >= y, w = Rf((j) => {
      const P = j.target, I = [...d.branches].some((V) => V.contains(P));
      !E || I || (o?.(j), a?.(j), j.defaultPrevented || s?.());
    }, v), N = Pf((j) => {
      const P = j.target;
      [...d.branches].some((V) => V.contains(P)) || (i?.(j), a?.(j), j.defaultPrevented || s?.());
    }, v);
    return wf((j) => {
      C === d.layers.size - 1 && (r?.(j), !j.defaultPrevented && s && (j.preventDefault(), s()));
    }, v), u.useEffect(() => {
      if (p)
        return t && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Ri = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(p)), d.layers.add(p), Pi(), () => {
          t && d.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = Ri);
        };
    }, [p, v, t, d]), u.useEffect(() => () => {
      p && (d.layers.delete(p), d.layersWithOutsidePointerEventsDisabled.delete(p), Pi());
    }, [p, d]), u.useEffect(() => {
      const j = () => h({});
      return document.addEventListener(Xr, j), () => document.removeEventListener(Xr, j);
    }, []), /* @__PURE__ */ l.jsx(
      se.div,
      {
        ...c,
        ref: x,
        style: {
          pointerEvents: S ? E ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: ne(e.onFocusCapture, N.onFocusCapture),
        onBlurCapture: ne(e.onBlurCapture, N.onBlurCapture),
        onPointerDownCapture: ne(
          e.onPointerDownCapture,
          w.onPointerDownCapture
        )
      }
    );
  }
);
Yn.displayName = Cf;
var kf = "DismissableLayerBranch", _f = u.forwardRef((e, n) => {
  const t = u.useContext(ss), r = u.useRef(null), o = ue(n, r);
  return u.useEffect(() => {
    const i = r.current;
    if (i)
      return t.branches.add(i), () => {
        t.branches.delete(i);
      };
  }, [t.branches]), /* @__PURE__ */ l.jsx(se.div, { ...e, ref: o });
});
_f.displayName = kf;
function Rf(e, n = globalThis?.document) {
  const t = Ve(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let c = function() {
          cs(
            Sf,
            t,
            d,
            { discrete: !0 }
          );
        };
        const d = { originalEvent: s };
        s.pointerType === "touch" ? (n.removeEventListener("click", o.current), o.current = c, n.addEventListener("click", o.current, { once: !0 })) : c();
      } else
        n.removeEventListener("click", o.current);
      r.current = !1;
    }, a = window.setTimeout(() => {
      n.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(a), n.removeEventListener("pointerdown", i), n.removeEventListener("click", o.current);
    };
  }, [n, t]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Pf(e, n = globalThis?.document) {
  const t = Ve(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && cs(Ef, t, { originalEvent: i }, {
        discrete: !1
      });
    };
    return n.addEventListener("focusin", o), () => n.removeEventListener("focusin", o);
  }, [n, t]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Pi() {
  const e = new CustomEvent(Xr);
  document.dispatchEvent(e);
}
function cs(e, n, t, { discrete: r }) {
  const o = t.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: t });
  n && o.addEventListener(e, n, { once: !0 }), r ? as(o, i) : o.dispatchEvent(i);
}
var _r = 0;
function bo() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? ji()), document.body.insertAdjacentElement("beforeend", e[1] ?? ji()), _r++, () => {
      _r === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), _r--;
    };
  }, []);
}
function ji() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Rr = "focusScope.autoFocusOnMount", Pr = "focusScope.autoFocusOnUnmount", Ai = { bubbles: !1, cancelable: !0 }, jf = "FocusScope", Kn = u.forwardRef((e, n) => {
  const {
    loop: t = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...a
  } = e, [s, c] = u.useState(null), d = Ve(o), p = Ve(i), f = u.useRef(null), v = ue(n, (m) => c(m)), h = u.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  u.useEffect(() => {
    if (r) {
      let m = function(S) {
        if (h.paused || !s) return;
        const E = S.target;
        s.contains(E) ? f.current = E : nt(f.current, { select: !0 });
      }, g = function(S) {
        if (h.paused || !s) return;
        const E = S.relatedTarget;
        E !== null && (s.contains(E) || nt(f.current, { select: !0 }));
      }, y = function(S) {
        if (document.activeElement === document.body)
          for (const w of S)
            w.removedNodes.length > 0 && nt(s);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", g);
      const C = new MutationObserver(y);
      return s && C.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", g), C.disconnect();
      };
    }
  }, [r, s, h.paused]), u.useEffect(() => {
    if (s) {
      Ti.add(h);
      const m = document.activeElement;
      if (!s.contains(m)) {
        const y = new CustomEvent(Rr, Ai);
        s.addEventListener(Rr, d), s.dispatchEvent(y), y.defaultPrevented || (Af(Nf(ls(s)), { select: !0 }), document.activeElement === m && nt(s));
      }
      return () => {
        s.removeEventListener(Rr, d), setTimeout(() => {
          const y = new CustomEvent(Pr, Ai);
          s.addEventListener(Pr, p), s.dispatchEvent(y), y.defaultPrevented || nt(m ?? document.body, { select: !0 }), s.removeEventListener(Pr, p), Ti.remove(h);
        }, 0);
      };
    }
  }, [s, d, p, h]);
  const x = u.useCallback(
    (m) => {
      if (!t && !r || h.paused) return;
      const g = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, y = document.activeElement;
      if (g && y) {
        const C = m.currentTarget, [S, E] = Of(C);
        S && E ? !m.shiftKey && y === E ? (m.preventDefault(), t && nt(S, { select: !0 })) : m.shiftKey && y === S && (m.preventDefault(), t && nt(E, { select: !0 })) : y === C && m.preventDefault();
      }
    },
    [t, r, h.paused]
  );
  return /* @__PURE__ */ l.jsx(se.div, { tabIndex: -1, ...a, ref: v, onKeyDown: x });
});
Kn.displayName = jf;
function Af(e, { select: n = !1 } = {}) {
  const t = document.activeElement;
  for (const r of e)
    if (nt(r, { select: n }), document.activeElement !== t) return;
}
function Of(e) {
  const n = ls(e), t = Oi(n, e), r = Oi(n.reverse(), e);
  return [t, r];
}
function ls(e) {
  const n = [], t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; t.nextNode(); ) n.push(t.currentNode);
  return n;
}
function Oi(e, n) {
  for (const t of e)
    if (!Tf(t, { upTo: n })) return t;
}
function Tf(e, { upTo: n }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (n !== void 0 && e === n) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Mf(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function nt(e, { select: n = !1 } = {}) {
  if (e && e.focus) {
    const t = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== t && Mf(e) && n && e.select();
  }
}
var Ti = Df();
function Df() {
  let e = [];
  return {
    add(n) {
      const t = e[0];
      n !== t && t?.pause(), e = Mi(e, n), e.unshift(n);
    },
    remove(n) {
      e = Mi(e, n), e[0]?.resume();
    }
  };
}
function Mi(e, n) {
  const t = [...e], r = t.indexOf(n);
  return r !== -1 && t.splice(r, 1), t;
}
function Nf(e) {
  return e.filter((n) => n.tagName !== "A");
}
var ke = globalThis?.document ? u.useLayoutEffect : () => {
}, If = u[" useId ".trim().toString()] || (() => {
}), Lf = 0;
function Ye(e) {
  const [n, t] = u.useState(If());
  return ke(() => {
    t((r) => r ?? String(Lf++));
  }, [e]), e || (n ? `radix-${n}` : "");
}
const Ff = ["top", "right", "bottom", "left"], ot = Math.min, Ae = Math.max, Tn = Math.round, mn = Math.floor, We = (e) => ({
  x: e,
  y: e
}), zf = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, $f = {
  start: "end",
  end: "start"
};
function Jr(e, n, t) {
  return Ae(e, ot(n, t));
}
function Ke(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function Ze(e) {
  return e.split("-")[0];
}
function Dt(e) {
  return e.split("-")[1];
}
function yo(e) {
  return e === "x" ? "y" : "x";
}
function wo(e) {
  return e === "y" ? "height" : "width";
}
const Wf = /* @__PURE__ */ new Set(["top", "bottom"]);
function $e(e) {
  return Wf.has(Ze(e)) ? "y" : "x";
}
function Co(e) {
  return yo($e(e));
}
function Vf(e, n, t) {
  t === void 0 && (t = !1);
  const r = Dt(e), o = Co(e), i = wo(o);
  let a = o === "x" ? r === (t ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return n.reference[i] > n.floating[i] && (a = Mn(a)), [a, Mn(a)];
}
function Bf(e) {
  const n = Mn(e);
  return [Qr(e), n, Qr(n)];
}
function Qr(e) {
  return e.replace(/start|end/g, (n) => $f[n]);
}
const Di = ["left", "right"], Ni = ["right", "left"], Hf = ["top", "bottom"], Uf = ["bottom", "top"];
function Gf(e, n, t) {
  switch (e) {
    case "top":
    case "bottom":
      return t ? n ? Ni : Di : n ? Di : Ni;
    case "left":
    case "right":
      return n ? Hf : Uf;
    default:
      return [];
  }
}
function qf(e, n, t, r) {
  const o = Dt(e);
  let i = Gf(Ze(e), t === "start", r);
  return o && (i = i.map((a) => a + "-" + o), n && (i = i.concat(i.map(Qr)))), i;
}
function Mn(e) {
  return e.replace(/left|right|bottom|top/g, (n) => zf[n]);
}
function Yf(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ds(e) {
  return typeof e != "number" ? Yf(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Dn(e) {
  const {
    x: n,
    y: t,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: t,
    left: n,
    right: n + r,
    bottom: t + o,
    x: n,
    y: t
  };
}
function Ii(e, n, t) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = $e(n), a = Co(n), s = wo(a), c = Ze(n), d = i === "y", p = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, v = r[s] / 2 - o[s] / 2;
  let h;
  switch (c) {
    case "top":
      h = {
        x: p,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: p,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (Dt(n)) {
    case "start":
      h[a] -= v * (t && d ? -1 : 1);
      break;
    case "end":
      h[a] += v * (t && d ? -1 : 1);
      break;
  }
  return h;
}
const Kf = async (e, n, t) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = t, s = i.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(n));
  let d = await a.getElementRects({
    reference: e,
    floating: n,
    strategy: o
  }), {
    x: p,
    y: f
  } = Ii(d, r, c), v = r, h = {}, x = 0;
  for (let m = 0; m < s.length; m++) {
    const {
      name: g,
      fn: y
    } = s[m], {
      x: C,
      y: S,
      data: E,
      reset: w
    } = await y({
      x: p,
      y: f,
      initialPlacement: r,
      placement: v,
      strategy: o,
      middlewareData: h,
      rects: d,
      platform: a,
      elements: {
        reference: e,
        floating: n
      }
    });
    p = C ?? p, f = S ?? f, h = {
      ...h,
      [g]: {
        ...h[g],
        ...E
      }
    }, w && x <= 50 && (x++, typeof w == "object" && (w.placement && (v = w.placement), w.rects && (d = w.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: n,
      strategy: o
    }) : w.rects), {
      x: p,
      y: f
    } = Ii(d, v, c)), m = -1);
  }
  return {
    x: p,
    y: f,
    placement: v,
    strategy: o,
    middlewareData: h
  };
};
async function Kt(e, n) {
  var t;
  n === void 0 && (n = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: a,
    elements: s,
    strategy: c
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: f = "floating",
    altBoundary: v = !1,
    padding: h = 0
  } = Ke(n, e), x = ds(h), g = s[v ? f === "floating" ? "reference" : "floating" : f], y = Dn(await i.getClippingRect({
    element: (t = await (i.isElement == null ? void 0 : i.isElement(g))) == null || t ? g : g.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: d,
    rootBoundary: p,
    strategy: c
  })), C = f === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), E = await (i.isElement == null ? void 0 : i.isElement(S)) ? await (i.getScale == null ? void 0 : i.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = Dn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: C,
    offsetParent: S,
    strategy: c
  }) : C);
  return {
    top: (y.top - w.top + x.top) / E.y,
    bottom: (w.bottom - y.bottom + x.bottom) / E.y,
    left: (y.left - w.left + x.left) / E.x,
    right: (w.right - y.right + x.right) / E.x
  };
}
const Zf = (e) => ({
  name: "arrow",
  options: e,
  async fn(n) {
    const {
      x: t,
      y: r,
      placement: o,
      rects: i,
      platform: a,
      elements: s,
      middlewareData: c
    } = n, {
      element: d,
      padding: p = 0
    } = Ke(e, n) || {};
    if (d == null)
      return {};
    const f = ds(p), v = {
      x: t,
      y: r
    }, h = Co(o), x = wo(h), m = await a.getDimensions(d), g = h === "y", y = g ? "top" : "left", C = g ? "bottom" : "right", S = g ? "clientHeight" : "clientWidth", E = i.reference[x] + i.reference[h] - v[h] - i.floating[x], w = v[h] - i.reference[h], N = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(d));
    let j = N ? N[S] : 0;
    (!j || !await (a.isElement == null ? void 0 : a.isElement(N))) && (j = s.floating[S] || i.floating[x]);
    const P = E / 2 - w / 2, I = j / 2 - m[x] / 2 - 1, V = ot(f[y], I), X = ot(f[C], I), q = V, U = j - m[x] - X, H = j / 2 - m[x] / 2 + P, $ = Jr(q, H, U), L = !c.arrow && Dt(o) != null && H !== $ && i.reference[x] / 2 - (H < q ? V : X) - m[x] / 2 < 0, J = L ? H < q ? H - q : H - U : 0;
    return {
      [h]: v[h] + J,
      data: {
        [h]: $,
        centerOffset: H - $ - J,
        ...L && {
          alignmentOffset: J
        }
      },
      reset: L
    };
  }
}), Xf = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(n) {
      var t, r;
      const {
        placement: o,
        middlewareData: i,
        rects: a,
        initialPlacement: s,
        platform: c,
        elements: d
      } = n, {
        mainAxis: p = !0,
        crossAxis: f = !0,
        fallbackPlacements: v,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: m = !0,
        ...g
      } = Ke(e, n);
      if ((t = i.arrow) != null && t.alignmentOffset)
        return {};
      const y = Ze(o), C = $e(s), S = Ze(s) === s, E = await (c.isRTL == null ? void 0 : c.isRTL(d.floating)), w = v || (S || !m ? [Mn(s)] : Bf(s)), N = x !== "none";
      !v && N && w.push(...qf(s, m, x, E));
      const j = [s, ...w], P = await Kt(n, g), I = [];
      let V = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (p && I.push(P[y]), f) {
        const H = Vf(o, a, E);
        I.push(P[H[0]], P[H[1]]);
      }
      if (V = [...V, {
        placement: o,
        overflows: I
      }], !I.every((H) => H <= 0)) {
        var X, q;
        const H = (((X = i.flip) == null ? void 0 : X.index) || 0) + 1, $ = j[H];
        if ($ && (!(f === "alignment" ? C !== $e($) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        V.every((R) => $e(R.placement) === C ? R.overflows[0] > 0 : !0)))
          return {
            data: {
              index: H,
              overflows: V
            },
            reset: {
              placement: $
            }
          };
        let L = (q = V.filter((J) => J.overflows[0] <= 0).sort((J, R) => J.overflows[1] - R.overflows[1])[0]) == null ? void 0 : q.placement;
        if (!L)
          switch (h) {
            case "bestFit": {
              var U;
              const J = (U = V.filter((R) => {
                if (N) {
                  const M = $e(R.placement);
                  return M === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((M) => M > 0).reduce((M, _) => M + _, 0)]).sort((R, M) => R[1] - M[1])[0]) == null ? void 0 : U[0];
              J && (L = J);
              break;
            }
            case "initialPlacement":
              L = s;
              break;
          }
        if (o !== L)
          return {
            reset: {
              placement: L
            }
          };
      }
      return {};
    }
  };
};
function Li(e, n) {
  return {
    top: e.top - n.height,
    right: e.right - n.width,
    bottom: e.bottom - n.height,
    left: e.left - n.width
  };
}
function Fi(e) {
  return Ff.some((n) => e[n] >= 0);
}
const Jf = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(n) {
      const {
        rects: t
      } = n, {
        strategy: r = "referenceHidden",
        ...o
      } = Ke(e, n);
      switch (r) {
        case "referenceHidden": {
          const i = await Kt(n, {
            ...o,
            elementContext: "reference"
          }), a = Li(i, t.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Fi(a)
            }
          };
        }
        case "escaped": {
          const i = await Kt(n, {
            ...o,
            altBoundary: !0
          }), a = Li(i, t.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Fi(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, us = /* @__PURE__ */ new Set(["left", "top"]);
async function Qf(e, n) {
  const {
    placement: t,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Ze(t), s = Dt(t), c = $e(t) === "y", d = us.has(a) ? -1 : 1, p = i && c ? -1 : 1, f = Ke(n, e);
  let {
    mainAxis: v,
    crossAxis: h,
    alignmentAxis: x
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return s && typeof x == "number" && (h = s === "end" ? x * -1 : x), c ? {
    x: h * p,
    y: v * d
  } : {
    x: v * d,
    y: h * p
  };
}
const em = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(n) {
      var t, r;
      const {
        x: o,
        y: i,
        placement: a,
        middlewareData: s
      } = n, c = await Qf(n, e);
      return a === ((t = s.offset) == null ? void 0 : t.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: i + c.y,
        data: {
          ...c,
          placement: a
        }
      };
    }
  };
}, tm = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(n) {
      const {
        x: t,
        y: r,
        placement: o
      } = n, {
        mainAxis: i = !0,
        crossAxis: a = !1,
        limiter: s = {
          fn: (g) => {
            let {
              x: y,
              y: C
            } = g;
            return {
              x: y,
              y: C
            };
          }
        },
        ...c
      } = Ke(e, n), d = {
        x: t,
        y: r
      }, p = await Kt(n, c), f = $e(Ze(o)), v = yo(f);
      let h = d[v], x = d[f];
      if (i) {
        const g = v === "y" ? "top" : "left", y = v === "y" ? "bottom" : "right", C = h + p[g], S = h - p[y];
        h = Jr(C, h, S);
      }
      if (a) {
        const g = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", C = x + p[g], S = x - p[y];
        x = Jr(C, x, S);
      }
      const m = s.fn({
        ...n,
        [v]: h,
        [f]: x
      });
      return {
        ...m,
        data: {
          x: m.x - t,
          y: m.y - r,
          enabled: {
            [v]: i,
            [f]: a
          }
        }
      };
    }
  };
}, nm = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(n) {
      const {
        x: t,
        y: r,
        placement: o,
        rects: i,
        middlewareData: a
      } = n, {
        offset: s = 0,
        mainAxis: c = !0,
        crossAxis: d = !0
      } = Ke(e, n), p = {
        x: t,
        y: r
      }, f = $e(o), v = yo(f);
      let h = p[v], x = p[f];
      const m = Ke(s, n), g = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (c) {
        const S = v === "y" ? "height" : "width", E = i.reference[v] - i.floating[S] + g.mainAxis, w = i.reference[v] + i.reference[S] - g.mainAxis;
        h < E ? h = E : h > w && (h = w);
      }
      if (d) {
        var y, C;
        const S = v === "y" ? "width" : "height", E = us.has(Ze(o)), w = i.reference[f] - i.floating[S] + (E && ((y = a.offset) == null ? void 0 : y[f]) || 0) + (E ? 0 : g.crossAxis), N = i.reference[f] + i.reference[S] + (E ? 0 : ((C = a.offset) == null ? void 0 : C[f]) || 0) - (E ? g.crossAxis : 0);
        x < w ? x = w : x > N && (x = N);
      }
      return {
        [v]: h,
        [f]: x
      };
    }
  };
}, rm = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(n) {
      var t, r;
      const {
        placement: o,
        rects: i,
        platform: a,
        elements: s
      } = n, {
        apply: c = () => {
        },
        ...d
      } = Ke(e, n), p = await Kt(n, d), f = Ze(o), v = Dt(o), h = $e(o) === "y", {
        width: x,
        height: m
      } = i.floating;
      let g, y;
      f === "top" || f === "bottom" ? (g = f, y = v === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = f, g = v === "end" ? "top" : "bottom");
      const C = m - p.top - p.bottom, S = x - p.left - p.right, E = ot(m - p[g], C), w = ot(x - p[y], S), N = !n.middlewareData.shift;
      let j = E, P = w;
      if ((t = n.middlewareData.shift) != null && t.enabled.x && (P = S), (r = n.middlewareData.shift) != null && r.enabled.y && (j = C), N && !v) {
        const V = Ae(p.left, 0), X = Ae(p.right, 0), q = Ae(p.top, 0), U = Ae(p.bottom, 0);
        h ? P = x - 2 * (V !== 0 || X !== 0 ? V + X : Ae(p.left, p.right)) : j = m - 2 * (q !== 0 || U !== 0 ? q + U : Ae(p.top, p.bottom));
      }
      await c({
        ...n,
        availableWidth: P,
        availableHeight: j
      });
      const I = await a.getDimensions(s.floating);
      return x !== I.width || m !== I.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Zn() {
  return typeof window < "u";
}
function Nt(e) {
  return ps(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Oe(e) {
  var n;
  return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function He(e) {
  var n;
  return (n = (ps(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement;
}
function ps(e) {
  return Zn() ? e instanceof Node || e instanceof Oe(e).Node : !1;
}
function Ne(e) {
  return Zn() ? e instanceof Element || e instanceof Oe(e).Element : !1;
}
function Be(e) {
  return Zn() ? e instanceof HTMLElement || e instanceof Oe(e).HTMLElement : !1;
}
function zi(e) {
  return !Zn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Oe(e).ShadowRoot;
}
const om = /* @__PURE__ */ new Set(["inline", "contents"]);
function tn(e) {
  const {
    overflow: n,
    overflowX: t,
    overflowY: r,
    display: o
  } = Ie(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + r + t) && !om.has(o);
}
const im = /* @__PURE__ */ new Set(["table", "td", "th"]);
function am(e) {
  return im.has(Nt(e));
}
const sm = [":popover-open", ":modal"];
function Xn(e) {
  return sm.some((n) => {
    try {
      return e.matches(n);
    } catch {
      return !1;
    }
  });
}
const cm = ["transform", "translate", "scale", "rotate", "perspective"], lm = ["transform", "translate", "scale", "rotate", "perspective", "filter"], dm = ["paint", "layout", "strict", "content"];
function So(e) {
  const n = Eo(), t = Ne(e) ? Ie(e) : e;
  return cm.some((r) => t[r] ? t[r] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !n && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !n && (t.filter ? t.filter !== "none" : !1) || lm.some((r) => (t.willChange || "").includes(r)) || dm.some((r) => (t.contain || "").includes(r));
}
function um(e) {
  let n = it(e);
  for (; Be(n) && !At(n); ) {
    if (So(n))
      return n;
    if (Xn(n))
      return null;
    n = it(n);
  }
  return null;
}
function Eo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const pm = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function At(e) {
  return pm.has(Nt(e));
}
function Ie(e) {
  return Oe(e).getComputedStyle(e);
}
function Jn(e) {
  return Ne(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function it(e) {
  if (Nt(e) === "html")
    return e;
  const n = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    zi(e) && e.host || // Fallback.
    He(e)
  );
  return zi(n) ? n.host : n;
}
function fs(e) {
  const n = it(e);
  return At(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : Be(n) && tn(n) ? n : fs(n);
}
function Zt(e, n, t) {
  var r;
  n === void 0 && (n = []), t === void 0 && (t = !0);
  const o = fs(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Oe(o);
  if (i) {
    const s = eo(a);
    return n.concat(a, a.visualViewport || [], tn(o) ? o : [], s && t ? Zt(s) : []);
  }
  return n.concat(o, Zt(o, [], t));
}
function eo(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ms(e) {
  const n = Ie(e);
  let t = parseFloat(n.width) || 0, r = parseFloat(n.height) || 0;
  const o = Be(e), i = o ? e.offsetWidth : t, a = o ? e.offsetHeight : r, s = Tn(t) !== i || Tn(r) !== a;
  return s && (t = i, r = a), {
    width: t,
    height: r,
    $: s
  };
}
function ko(e) {
  return Ne(e) ? e : e.contextElement;
}
function kt(e) {
  const n = ko(e);
  if (!Be(n))
    return We(1);
  const t = n.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = ms(n);
  let a = (i ? Tn(t.width) : t.width) / r, s = (i ? Tn(t.height) : t.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const fm = /* @__PURE__ */ We(0);
function vs(e) {
  const n = Oe(e);
  return !Eo() || !n.visualViewport ? fm : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function mm(e, n, t) {
  return n === void 0 && (n = !1), !t || n && t !== Oe(e) ? !1 : n;
}
function ft(e, n, t, r) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const o = e.getBoundingClientRect(), i = ko(e);
  let a = We(1);
  n && (r ? Ne(r) && (a = kt(r)) : a = kt(e));
  const s = mm(i, t, r) ? vs(i) : We(0);
  let c = (o.left + s.x) / a.x, d = (o.top + s.y) / a.y, p = o.width / a.x, f = o.height / a.y;
  if (i) {
    const v = Oe(i), h = r && Ne(r) ? Oe(r) : r;
    let x = v, m = eo(x);
    for (; m && r && h !== x; ) {
      const g = kt(m), y = m.getBoundingClientRect(), C = Ie(m), S = y.left + (m.clientLeft + parseFloat(C.paddingLeft)) * g.x, E = y.top + (m.clientTop + parseFloat(C.paddingTop)) * g.y;
      c *= g.x, d *= g.y, p *= g.x, f *= g.y, c += S, d += E, x = Oe(m), m = eo(x);
    }
  }
  return Dn({
    width: p,
    height: f,
    x: c,
    y: d
  });
}
function Qn(e, n) {
  const t = Jn(e).scrollLeft;
  return n ? n.left + t : ft(He(e)).left + t;
}
function hs(e, n) {
  const t = e.getBoundingClientRect(), r = t.left + n.scrollLeft - Qn(e, t), o = t.top + n.scrollTop;
  return {
    x: r,
    y: o
  };
}
function vm(e) {
  let {
    elements: n,
    rect: t,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = He(r), s = n ? Xn(n.floating) : !1;
  if (r === a || s && i)
    return t;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = We(1);
  const p = We(0), f = Be(r);
  if ((f || !f && !i) && ((Nt(r) !== "body" || tn(a)) && (c = Jn(r)), Be(r))) {
    const h = ft(r);
    d = kt(r), p.x = h.x + r.clientLeft, p.y = h.y + r.clientTop;
  }
  const v = a && !f && !i ? hs(a, c) : We(0);
  return {
    width: t.width * d.x,
    height: t.height * d.y,
    x: t.x * d.x - c.scrollLeft * d.x + p.x + v.x,
    y: t.y * d.y - c.scrollTop * d.y + p.y + v.y
  };
}
function hm(e) {
  return Array.from(e.getClientRects());
}
function gm(e) {
  const n = He(e), t = Jn(e), r = e.ownerDocument.body, o = Ae(n.scrollWidth, n.clientWidth, r.scrollWidth, r.clientWidth), i = Ae(n.scrollHeight, n.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -t.scrollLeft + Qn(e);
  const s = -t.scrollTop;
  return Ie(r).direction === "rtl" && (a += Ae(n.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
const $i = 25;
function xm(e, n) {
  const t = Oe(e), r = He(e), o = t.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, c = 0;
  if (o) {
    i = o.width, a = o.height;
    const p = Eo();
    (!p || p && n === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  const d = Qn(r);
  if (d <= 0) {
    const p = r.ownerDocument, f = p.body, v = getComputedStyle(f), h = p.compatMode === "CSS1Compat" && parseFloat(v.marginLeft) + parseFloat(v.marginRight) || 0, x = Math.abs(r.clientWidth - f.clientWidth - h);
    x <= $i && (i -= x);
  } else d <= $i && (i += d);
  return {
    width: i,
    height: a,
    x: s,
    y: c
  };
}
const bm = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function ym(e, n) {
  const t = ft(e, !0, n === "fixed"), r = t.top + e.clientTop, o = t.left + e.clientLeft, i = Be(e) ? kt(e) : We(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, c = o * i.x, d = r * i.y;
  return {
    width: a,
    height: s,
    x: c,
    y: d
  };
}
function Wi(e, n, t) {
  let r;
  if (n === "viewport")
    r = xm(e, t);
  else if (n === "document")
    r = gm(He(e));
  else if (Ne(n))
    r = ym(n, t);
  else {
    const o = vs(e);
    r = {
      x: n.x - o.x,
      y: n.y - o.y,
      width: n.width,
      height: n.height
    };
  }
  return Dn(r);
}
function gs(e, n) {
  const t = it(e);
  return t === n || !Ne(t) || At(t) ? !1 : Ie(t).position === "fixed" || gs(t, n);
}
function wm(e, n) {
  const t = n.get(e);
  if (t)
    return t;
  let r = Zt(e, [], !1).filter((s) => Ne(s) && Nt(s) !== "body"), o = null;
  const i = Ie(e).position === "fixed";
  let a = i ? it(e) : e;
  for (; Ne(a) && !At(a); ) {
    const s = Ie(a), c = So(a);
    !c && s.position === "fixed" && (o = null), (i ? !c && !o : !c && s.position === "static" && !!o && bm.has(o.position) || tn(a) && !c && gs(e, a)) ? r = r.filter((p) => p !== a) : o = s, a = it(a);
  }
  return n.set(e, r), r;
}
function Cm(e) {
  let {
    element: n,
    boundary: t,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...t === "clippingAncestors" ? Xn(n) ? [] : wm(n, this._c) : [].concat(t), r], s = a[0], c = a.reduce((d, p) => {
    const f = Wi(n, p, o);
    return d.top = Ae(f.top, d.top), d.right = ot(f.right, d.right), d.bottom = ot(f.bottom, d.bottom), d.left = Ae(f.left, d.left), d;
  }, Wi(n, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Sm(e) {
  const {
    width: n,
    height: t
  } = ms(e);
  return {
    width: n,
    height: t
  };
}
function Em(e, n, t) {
  const r = Be(n), o = He(n), i = t === "fixed", a = ft(e, !0, i, n);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = We(0);
  function d() {
    c.x = Qn(o);
  }
  if (r || !r && !i)
    if ((Nt(n) !== "body" || tn(o)) && (s = Jn(n)), r) {
      const h = ft(n, !0, i, n);
      c.x = h.x + n.clientLeft, c.y = h.y + n.clientTop;
    } else o && d();
  i && !r && o && d();
  const p = o && !r && !i ? hs(o, s) : We(0), f = a.left + s.scrollLeft - c.x - p.x, v = a.top + s.scrollTop - c.y - p.y;
  return {
    x: f,
    y: v,
    width: a.width,
    height: a.height
  };
}
function jr(e) {
  return Ie(e).position === "static";
}
function Vi(e, n) {
  if (!Be(e) || Ie(e).position === "fixed")
    return null;
  if (n)
    return n(e);
  let t = e.offsetParent;
  return He(e) === t && (t = t.ownerDocument.body), t;
}
function xs(e, n) {
  const t = Oe(e);
  if (Xn(e))
    return t;
  if (!Be(e)) {
    let o = it(e);
    for (; o && !At(o); ) {
      if (Ne(o) && !jr(o))
        return o;
      o = it(o);
    }
    return t;
  }
  let r = Vi(e, n);
  for (; r && am(r) && jr(r); )
    r = Vi(r, n);
  return r && At(r) && jr(r) && !So(r) ? t : r || um(e) || t;
}
const km = async function(e) {
  const n = this.getOffsetParent || xs, t = this.getDimensions, r = await t(e.floating);
  return {
    reference: Em(e.reference, await n(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function _m(e) {
  return Ie(e).direction === "rtl";
}
const Rm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: vm,
  getDocumentElement: He,
  getClippingRect: Cm,
  getOffsetParent: xs,
  getElementRects: km,
  getClientRects: hm,
  getDimensions: Sm,
  getScale: kt,
  isElement: Ne,
  isRTL: _m
};
function bs(e, n) {
  return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height;
}
function Pm(e, n) {
  let t = null, r;
  const o = He(e);
  function i() {
    var s;
    clearTimeout(r), (s = t) == null || s.disconnect(), t = null;
  }
  function a(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), i();
    const d = e.getBoundingClientRect(), {
      left: p,
      top: f,
      width: v,
      height: h
    } = d;
    if (s || n(), !v || !h)
      return;
    const x = mn(f), m = mn(o.clientWidth - (p + v)), g = mn(o.clientHeight - (f + h)), y = mn(p), S = {
      rootMargin: -x + "px " + -m + "px " + -g + "px " + -y + "px",
      threshold: Ae(0, ot(1, c)) || 1
    };
    let E = !0;
    function w(N) {
      const j = N[0].intersectionRatio;
      if (j !== c) {
        if (!E)
          return a();
        j ? a(!1, j) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      j === 1 && !bs(d, e.getBoundingClientRect()) && a(), E = !1;
    }
    try {
      t = new IntersectionObserver(w, {
        ...S,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(w, S);
    }
    t.observe(e);
  }
  return a(!0), i;
}
function jm(e, n, t, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, d = ko(e), p = o || i ? [...d ? Zt(d) : [], ...Zt(n)] : [];
  p.forEach((y) => {
    o && y.addEventListener("scroll", t, {
      passive: !0
    }), i && y.addEventListener("resize", t);
  });
  const f = d && s ? Pm(d, t) : null;
  let v = -1, h = null;
  a && (h = new ResizeObserver((y) => {
    let [C] = y;
    C && C.target === d && h && (h.unobserve(n), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var S;
      (S = h) == null || S.observe(n);
    })), t();
  }), d && !c && h.observe(d), h.observe(n));
  let x, m = c ? ft(e) : null;
  c && g();
  function g() {
    const y = ft(e);
    m && !bs(m, y) && t(), m = y, x = requestAnimationFrame(g);
  }
  return t(), () => {
    var y;
    p.forEach((C) => {
      o && C.removeEventListener("scroll", t), i && C.removeEventListener("resize", t);
    }), f?.(), (y = h) == null || y.disconnect(), h = null, c && cancelAnimationFrame(x);
  };
}
const Am = em, Om = tm, Tm = Xf, Mm = rm, Dm = Jf, Bi = Zf, Nm = nm, Im = (e, n, t) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Rm,
    ...t
  }, i = {
    ...o.platform,
    _c: r
  };
  return Kf(e, n, {
    ...o,
    platform: i
  });
};
var Lm = typeof document < "u", Fm = function() {
}, Sn = Lm ? zl : Fm;
function Nn(e, n) {
  if (e === n)
    return !0;
  if (typeof e != typeof n)
    return !1;
  if (typeof e == "function" && e.toString() === n.toString())
    return !0;
  let t, r, o;
  if (e && n && typeof e == "object") {
    if (Array.isArray(e)) {
      if (t = e.length, t !== n.length) return !1;
      for (r = t; r-- !== 0; )
        if (!Nn(e[r], n[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), t = o.length, t !== Object.keys(n).length)
      return !1;
    for (r = t; r-- !== 0; )
      if (!{}.hasOwnProperty.call(n, o[r]))
        return !1;
    for (r = t; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Nn(e[i], n[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && n !== n;
}
function ys(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Hi(e, n) {
  const t = ys(e);
  return Math.round(n * t) / t;
}
function Ar(e) {
  const n = u.useRef(e);
  return Sn(() => {
    n.current = e;
  }), n;
}
function zm(e) {
  e === void 0 && (e = {});
  const {
    placement: n = "bottom",
    strategy: t = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: a
    } = {},
    transform: s = !0,
    whileElementsMounted: c,
    open: d
  } = e, [p, f] = u.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: n,
    middlewareData: {},
    isPositioned: !1
  }), [v, h] = u.useState(r);
  Nn(v, r) || h(r);
  const [x, m] = u.useState(null), [g, y] = u.useState(null), C = u.useCallback((R) => {
    R !== N.current && (N.current = R, m(R));
  }, []), S = u.useCallback((R) => {
    R !== j.current && (j.current = R, y(R));
  }, []), E = i || x, w = a || g, N = u.useRef(null), j = u.useRef(null), P = u.useRef(p), I = c != null, V = Ar(c), X = Ar(o), q = Ar(d), U = u.useCallback(() => {
    if (!N.current || !j.current)
      return;
    const R = {
      placement: n,
      strategy: t,
      middleware: v
    };
    X.current && (R.platform = X.current), Im(N.current, j.current, R).then((M) => {
      const _ = {
        ...M,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: q.current !== !1
      };
      H.current && !Nn(P.current, _) && (P.current = _, Bn.flushSync(() => {
        f(_);
      }));
    });
  }, [v, n, t, X, q]);
  Sn(() => {
    d === !1 && P.current.isPositioned && (P.current.isPositioned = !1, f((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [d]);
  const H = u.useRef(!1);
  Sn(() => (H.current = !0, () => {
    H.current = !1;
  }), []), Sn(() => {
    if (E && (N.current = E), w && (j.current = w), E && w) {
      if (V.current)
        return V.current(E, w, U);
      U();
    }
  }, [E, w, U, V, I]);
  const $ = u.useMemo(() => ({
    reference: N,
    floating: j,
    setReference: C,
    setFloating: S
  }), [C, S]), L = u.useMemo(() => ({
    reference: E,
    floating: w
  }), [E, w]), J = u.useMemo(() => {
    const R = {
      position: t,
      left: 0,
      top: 0
    };
    if (!L.floating)
      return R;
    const M = Hi(L.floating, p.x), _ = Hi(L.floating, p.y);
    return s ? {
      ...R,
      transform: "translate(" + M + "px, " + _ + "px)",
      ...ys(L.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: M,
      top: _
    };
  }, [t, s, L.floating, p.x, p.y]);
  return u.useMemo(() => ({
    ...p,
    update: U,
    refs: $,
    elements: L,
    floatingStyles: J
  }), [p, U, $, L, J]);
}
const $m = (e) => {
  function n(t) {
    return {}.hasOwnProperty.call(t, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(t) : e;
      return r && n(r) ? r.current != null ? Bi({
        element: r.current,
        padding: o
      }).fn(t) : {} : r ? Bi({
        element: r,
        padding: o
      }).fn(t) : {};
    }
  };
}, Wm = (e, n) => ({
  ...Am(e),
  options: [e, n]
}), Vm = (e, n) => ({
  ...Om(e),
  options: [e, n]
}), Bm = (e, n) => ({
  ...Nm(e),
  options: [e, n]
}), Hm = (e, n) => ({
  ...Tm(e),
  options: [e, n]
}), Um = (e, n) => ({
  ...Mm(e),
  options: [e, n]
}), Gm = (e, n) => ({
  ...Dm(e),
  options: [e, n]
}), qm = (e, n) => ({
  ...$m(e),
  options: [e, n]
});
var Ym = "Arrow", ws = u.forwardRef((e, n) => {
  const { children: t, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ l.jsx(
    se.svg,
    {
      ...i,
      ref: n,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? t : /* @__PURE__ */ l.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
ws.displayName = Ym;
var Km = ws;
function Zm(e) {
  const [n, t] = u.useState(void 0);
  return ke(() => {
    if (e) {
      t({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let a, s;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, d = Array.isArray(c) ? c[0] : c;
          a = d.inlineSize, s = d.blockSize;
        } else
          a = e.offsetWidth, s = e.offsetHeight;
        t({ width: a, height: s });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      t(void 0);
  }, [e]), n;
}
var _o = "Popper", [Cs, er] = at(_o), [Xm, Ss] = Cs(_o), Es = (e) => {
  const { __scopePopper: n, children: t } = e, [r, o] = u.useState(null);
  return /* @__PURE__ */ l.jsx(Xm, { scope: n, anchor: r, onAnchorChange: o, children: t });
};
Es.displayName = _o;
var ks = "PopperAnchor", _s = u.forwardRef(
  (e, n) => {
    const { __scopePopper: t, virtualRef: r, ...o } = e, i = Ss(ks, t), a = u.useRef(null), s = ue(n, a), c = u.useRef(null);
    return u.useEffect(() => {
      const d = c.current;
      c.current = r?.current || a.current, d !== c.current && i.onAnchorChange(c.current);
    }), r ? null : /* @__PURE__ */ l.jsx(se.div, { ...o, ref: s });
  }
);
_s.displayName = ks;
var Ro = "PopperContent", [Jm, Qm] = Cs(Ro), Rs = u.forwardRef(
  (e, n) => {
    const {
      __scopePopper: t,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: a = 0,
      arrowPadding: s = 0,
      avoidCollisions: c = !0,
      collisionBoundary: d = [],
      collisionPadding: p = 0,
      sticky: f = "partial",
      hideWhenDetached: v = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: x,
      ...m
    } = e, g = Ss(Ro, t), [y, C] = u.useState(null), S = ue(n, (k) => C(k)), [E, w] = u.useState(null), N = Zm(E), j = N?.width ?? 0, P = N?.height ?? 0, I = r + (i !== "center" ? "-" + i : ""), V = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, X = Array.isArray(d) ? d : [d], q = X.length > 0, U = {
      padding: V,
      boundary: X.filter(tv),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: q
    }, { refs: H, floatingStyles: $, placement: L, isPositioned: J, middlewareData: R } = zm({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: I,
      whileElementsMounted: (...k) => jm(...k, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        Wm({ mainAxis: o + P, alignmentAxis: a }),
        c && Vm({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? Bm() : void 0,
          ...U
        }),
        c && Hm({ ...U }),
        Um({
          ...U,
          apply: ({ elements: k, rects: W, availableWidth: Q, availableHeight: B }) => {
            const { width: re, height: A } = W.reference, pe = k.floating.style;
            pe.setProperty("--radix-popper-available-width", `${Q}px`), pe.setProperty("--radix-popper-available-height", `${B}px`), pe.setProperty("--radix-popper-anchor-width", `${re}px`), pe.setProperty("--radix-popper-anchor-height", `${A}px`);
          }
        }),
        E && qm({ element: E, padding: s }),
        nv({ arrowWidth: j, arrowHeight: P }),
        v && Gm({ strategy: "referenceHidden", ...U })
      ]
    }), [M, _] = As(L), b = Ve(x);
    ke(() => {
      J && b?.();
    }, [J, b]);
    const O = R.arrow?.x, D = R.arrow?.y, T = R.arrow?.centerOffset !== 0, [Z, G] = u.useState();
    return ke(() => {
      y && G(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ l.jsx(
      "div",
      {
        ref: H.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...$,
          transform: J ? $.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Z,
          "--radix-popper-transform-origin": [
            R.transformOrigin?.x,
            R.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...R.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ l.jsx(
          Jm,
          {
            scope: t,
            placedSide: M,
            onArrowChange: w,
            arrowX: O,
            arrowY: D,
            shouldHideArrow: T,
            children: /* @__PURE__ */ l.jsx(
              se.div,
              {
                "data-side": M,
                "data-align": _,
                ...m,
                ref: S,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: J ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Rs.displayName = Ro;
var Ps = "PopperArrow", ev = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, js = u.forwardRef(function(n, t) {
  const { __scopePopper: r, ...o } = n, i = Qm(Ps, r), a = ev[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ l.jsx(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ l.jsx(
          Km,
          {
            ...o,
            ref: t,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
js.displayName = Ps;
function tv(e) {
  return e !== null;
}
var nv = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(n) {
    const { placement: t, rects: r, middlewareData: o } = n, a = o.arrow?.centerOffset !== 0, s = a ? 0 : e.arrowWidth, c = a ? 0 : e.arrowHeight, [d, p] = As(t), f = { start: "0%", center: "50%", end: "100%" }[p], v = (o.arrow?.x ?? 0) + s / 2, h = (o.arrow?.y ?? 0) + c / 2;
    let x = "", m = "";
    return d === "bottom" ? (x = a ? f : `${v}px`, m = `${-c}px`) : d === "top" ? (x = a ? f : `${v}px`, m = `${r.floating.height + c}px`) : d === "right" ? (x = `${-c}px`, m = a ? f : `${h}px`) : d === "left" && (x = `${r.floating.width + c}px`, m = a ? f : `${h}px`), { data: { x, y: m } };
  }
});
function As(e) {
  const [n, t = "center"] = e.split("-");
  return [n, t];
}
var Os = Es, Ts = _s, Ms = Rs, Ds = js, rv = "Portal", tr = u.forwardRef((e, n) => {
  const { container: t, ...r } = e, [o, i] = u.useState(!1);
  ke(() => i(!0), []);
  const a = t || o && globalThis?.document?.body;
  return a ? $l.createPortal(/* @__PURE__ */ l.jsx(se.div, { ...r, ref: n }), a) : null;
});
tr.displayName = rv;
var ov = u[" useInsertionEffect ".trim().toString()] || ke;
function Xt({
  prop: e,
  defaultProp: n,
  onChange: t = () => {
  },
  caller: r
}) {
  const [o, i, a] = iv({
    defaultProp: n,
    onChange: t
  }), s = e !== void 0, c = s ? e : o;
  {
    const p = u.useRef(e !== void 0);
    u.useEffect(() => {
      const f = p.current;
      f !== s && console.warn(
        `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), p.current = s;
    }, [s, r]);
  }
  const d = u.useCallback(
    (p) => {
      if (s) {
        const f = av(p) ? p(e) : p;
        f !== e && a.current?.(f);
      } else
        i(p);
    },
    [s, e, i, a]
  );
  return [c, d];
}
function iv({
  defaultProp: e,
  onChange: n
}) {
  const [t, r] = u.useState(e), o = u.useRef(t), i = u.useRef(n);
  return ov(() => {
    i.current = n;
  }, [n]), u.useEffect(() => {
    o.current !== t && (i.current?.(t), o.current = t);
  }, [t, o]), [t, r, i];
}
function av(e) {
  return typeof e == "function";
}
function sv(e) {
  const n = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (n.current.value !== e && (n.current.previous = n.current.value, n.current.value = e), n.current.previous), [e]);
}
var Ns = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), cv = "VisuallyHidden", lv = u.forwardRef(
  (e, n) => /* @__PURE__ */ l.jsx(
    se.span,
    {
      ...e,
      ref: n,
      style: { ...Ns, ...e.style }
    }
  )
);
lv.displayName = cv;
var dv = function(e) {
  if (typeof document > "u")
    return null;
  var n = Array.isArray(e) ? e[0] : e;
  return n.ownerDocument.body;
}, Ct = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap(), hn = {}, Or = 0, Is = function(e) {
  return e && (e.host || Is(e.parentNode));
}, uv = function(e, n) {
  return n.map(function(t) {
    if (e.contains(t))
      return t;
    var r = Is(t);
    return r && e.contains(r) ? r : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(t) {
    return !!t;
  });
}, pv = function(e, n, t, r) {
  var o = uv(n, Array.isArray(e) ? e : [e]);
  hn[t] || (hn[t] = /* @__PURE__ */ new WeakMap());
  var i = hn[t], a = [], s = /* @__PURE__ */ new Set(), c = new Set(o), d = function(f) {
    !f || s.has(f) || (s.add(f), d(f.parentNode));
  };
  o.forEach(d);
  var p = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(v) {
      if (s.has(v))
        p(v);
      else
        try {
          var h = v.getAttribute(r), x = h !== null && h !== "false", m = (Ct.get(v) || 0) + 1, g = (i.get(v) || 0) + 1;
          Ct.set(v, m), i.set(v, g), a.push(v), m === 1 && x && vn.set(v, !0), g === 1 && v.setAttribute(t, "true"), x || v.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", v, y);
        }
    });
  };
  return p(n), s.clear(), Or++, function() {
    a.forEach(function(f) {
      var v = Ct.get(f) - 1, h = i.get(f) - 1;
      Ct.set(f, v), i.set(f, h), v || (vn.has(f) || f.removeAttribute(r), vn.delete(f)), h || f.removeAttribute(t);
    }), Or--, Or || (Ct = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap(), hn = {});
  };
}, Po = function(e, n, t) {
  t === void 0 && (t = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = dv(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), pv(r, o, t, "aria-hidden")) : function() {
    return null;
  };
}, En = "right-scroll-bar-position", kn = "width-before-scroll-bar", fv = "with-scroll-bars-hidden", mv = "--removed-body-scroll-bar-size";
function Tr(e, n) {
  return typeof e == "function" ? e(n) : e && (e.current = n), e;
}
function vv(e, n) {
  var t = qe(function() {
    return {
      // value
      value: e,
      // last callback
      callback: n,
      // "memoized" public interface
      facade: {
        get current() {
          return t.value;
        },
        set current(r) {
          var o = t.value;
          o !== r && (t.value = r, t.callback(r, o));
        }
      }
    };
  })[0];
  return t.callback = n, t.facade;
}
var hv = typeof window < "u" ? u.useLayoutEffect : u.useEffect, Ui = /* @__PURE__ */ new WeakMap();
function gv(e, n) {
  var t = vv(null, function(r) {
    return e.forEach(function(o) {
      return Tr(o, r);
    });
  });
  return hv(function() {
    var r = Ui.get(t);
    if (r) {
      var o = new Set(r), i = new Set(e), a = t.current;
      o.forEach(function(s) {
        i.has(s) || Tr(s, null);
      }), i.forEach(function(s) {
        o.has(s) || Tr(s, a);
      });
    }
    Ui.set(t, e);
  }, [e]), t;
}
function xv(e) {
  return e;
}
function bv(e, n) {
  n === void 0 && (n = xv);
  var t = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return t.length ? t[t.length - 1] : e;
    },
    useMedium: function(i) {
      var a = n(i, r);
      return t.push(a), function() {
        t = t.filter(function(s) {
          return s !== a;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; t.length; ) {
        var a = t;
        t = [], a.forEach(i);
      }
      t = {
        push: function(s) {
          return i(s);
        },
        filter: function() {
          return t;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var a = [];
      if (t.length) {
        var s = t;
        t = [], s.forEach(i), a = t;
      }
      var c = function() {
        var p = a;
        a = [], p.forEach(i);
      }, d = function() {
        return Promise.resolve().then(c);
      };
      d(), t = {
        push: function(p) {
          a.push(p), d();
        },
        filter: function(p) {
          return a = a.filter(p), t;
        }
      };
    }
  };
  return o;
}
function yv(e) {
  e === void 0 && (e = {});
  var n = bv(null);
  return n.options = he({ async: !0, ssr: !1 }, e), n;
}
var Ls = function(e) {
  var n = e.sideCar, t = Ya(e, ["sideCar"]);
  if (!n)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = n.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, he({}, t));
};
Ls.isSideCarExport = !0;
function wv(e, n) {
  return e.useMedium(n), Ls;
}
var Fs = yv(), Mr = function() {
}, nr = u.forwardRef(function(e, n) {
  var t = u.useRef(null), r = u.useState({
    onScrollCapture: Mr,
    onWheelCapture: Mr,
    onTouchMoveCapture: Mr
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, c = e.className, d = e.removeScrollBar, p = e.enabled, f = e.shards, v = e.sideCar, h = e.noRelative, x = e.noIsolation, m = e.inert, g = e.allowPinchZoom, y = e.as, C = y === void 0 ? "div" : y, S = e.gapMode, E = Ya(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = v, N = gv([t, n]), j = he(he({}, E), o);
  return u.createElement(
    u.Fragment,
    null,
    p && u.createElement(w, { sideCar: Fs, removeScrollBar: d, shards: f, noRelative: h, noIsolation: x, inert: m, setCallbacks: i, allowPinchZoom: !!g, lockRef: t, gapMode: S }),
    a ? u.cloneElement(u.Children.only(s), he(he({}, j), { ref: N })) : u.createElement(C, he({}, j, { className: c, ref: N }), s)
  );
});
nr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
nr.classNames = {
  fullWidth: kn,
  zeroRight: En
};
var Cv = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Sv() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var n = Cv();
  return n && e.setAttribute("nonce", n), e;
}
function Ev(e, n) {
  e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(document.createTextNode(n));
}
function kv(e) {
  var n = document.head || document.getElementsByTagName("head")[0];
  n.appendChild(e);
}
var _v = function() {
  var e = 0, n = null;
  return {
    add: function(t) {
      e == 0 && (n = Sv()) && (Ev(n, t), kv(n)), e++;
    },
    remove: function() {
      e--, !e && n && (n.parentNode && n.parentNode.removeChild(n), n = null);
    }
  };
}, Rv = function() {
  var e = _v();
  return function(n, t) {
    u.useEffect(function() {
      return e.add(n), function() {
        e.remove();
      };
    }, [n && t]);
  };
}, zs = function() {
  var e = Rv(), n = function(t) {
    var r = t.styles, o = t.dynamic;
    return e(r, o), null;
  };
  return n;
}, Pv = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Dr = function(e) {
  return parseInt(e || "", 10) || 0;
}, jv = function(e) {
  var n = window.getComputedStyle(document.body), t = n[e === "padding" ? "paddingLeft" : "marginLeft"], r = n[e === "padding" ? "paddingTop" : "marginTop"], o = n[e === "padding" ? "paddingRight" : "marginRight"];
  return [Dr(t), Dr(r), Dr(o)];
}, Av = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Pv;
  var n = jv(e), t = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: n[0],
    top: n[1],
    right: n[2],
    gap: Math.max(0, r - t + n[2] - n[0])
  };
}, Ov = zs(), _t = "data-scroll-locked", Tv = function(e, n, t, r) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return t === void 0 && (t = "margin"), `
  .`.concat(fv, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(_t, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    n && "position: relative ".concat(r, ";"),
    t === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    t === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(En, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(kn, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(En, " .").concat(En, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(kn, " .").concat(kn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(_t, `] {
    `).concat(mv, ": ").concat(s, `px;
  }
`);
}, Gi = function() {
  var e = parseInt(document.body.getAttribute(_t) || "0", 10);
  return isFinite(e) ? e : 0;
}, Mv = function() {
  u.useEffect(function() {
    return document.body.setAttribute(_t, (Gi() + 1).toString()), function() {
      var e = Gi() - 1;
      e <= 0 ? document.body.removeAttribute(_t) : document.body.setAttribute(_t, e.toString());
    };
  }, []);
}, Dv = function(e) {
  var n = e.noRelative, t = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Mv();
  var i = u.useMemo(function() {
    return Av(o);
  }, [o]);
  return u.createElement(Ov, { styles: Tv(i, !n, o, t ? "" : "!important") });
}, to = !1;
if (typeof window < "u")
  try {
    var gn = Object.defineProperty({}, "passive", {
      get: function() {
        return to = !0, !0;
      }
    });
    window.addEventListener("test", gn, gn), window.removeEventListener("test", gn, gn);
  } catch {
    to = !1;
  }
var St = to ? { passive: !1 } : !1, Nv = function(e) {
  return e.tagName === "TEXTAREA";
}, $s = function(e, n) {
  if (!(e instanceof Element))
    return !1;
  var t = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    t[n] !== "hidden" && // contains scroll inside self
    !(t.overflowY === t.overflowX && !Nv(e) && t[n] === "visible")
  );
}, Iv = function(e) {
  return $s(e, "overflowY");
}, Lv = function(e) {
  return $s(e, "overflowX");
}, qi = function(e, n) {
  var t = n.ownerDocument, r = n;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Ws(e, r);
    if (o) {
      var i = Vs(e, r), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== t.body);
  return !1;
}, Fv = function(e) {
  var n = e.scrollTop, t = e.scrollHeight, r = e.clientHeight;
  return [
    n,
    t,
    r
  ];
}, zv = function(e) {
  var n = e.scrollLeft, t = e.scrollWidth, r = e.clientWidth;
  return [
    n,
    t,
    r
  ];
}, Ws = function(e, n) {
  return e === "v" ? Iv(n) : Lv(n);
}, Vs = function(e, n) {
  return e === "v" ? Fv(n) : zv(n);
}, $v = function(e, n) {
  return e === "h" && n === "rtl" ? -1 : 1;
}, Wv = function(e, n, t, r, o) {
  var i = $v(e, window.getComputedStyle(n).direction), a = i * r, s = t.target, c = n.contains(s), d = !1, p = a > 0, f = 0, v = 0;
  do {
    if (!s)
      break;
    var h = Vs(e, s), x = h[0], m = h[1], g = h[2], y = m - g - i * x;
    (x || y) && Ws(e, s) && (f += y, v += x);
    var C = s.parentNode;
    s = C && C.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? C.host : C;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (n.contains(s) || n === s)
  );
  return (p && Math.abs(f) < 1 || !p && Math.abs(v) < 1) && (d = !0), d;
}, xn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Yi = function(e) {
  return [e.deltaX, e.deltaY];
}, Ki = function(e) {
  return e && "current" in e ? e.current : e;
}, Vv = function(e, n) {
  return e[0] === n[0] && e[1] === n[1];
}, Bv = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Hv = 0, Et = [];
function Uv(e) {
  var n = u.useRef([]), t = u.useRef([0, 0]), r = u.useRef(), o = u.useState(Hv++)[0], i = u.useState(zs)[0], a = u.useRef(e);
  u.useEffect(function() {
    a.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = dp([e.lockRef.current], (e.shards || []).map(Ki), !0).filter(Boolean);
      return m.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = u.useCallback(function(m, g) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !a.current.allowPinchZoom;
    var y = xn(m), C = t.current, S = "deltaX" in m ? m.deltaX : C[0] - y[0], E = "deltaY" in m ? m.deltaY : C[1] - y[1], w, N = m.target, j = Math.abs(S) > Math.abs(E) ? "h" : "v";
    if ("touches" in m && j === "h" && N.type === "range")
      return !1;
    var P = window.getSelection(), I = P && P.anchorNode, V = I ? I === N || I.contains(N) : !1;
    if (V)
      return !1;
    var X = qi(j, N);
    if (!X)
      return !0;
    if (X ? w = j : (w = j === "v" ? "h" : "v", X = qi(j, N)), !X)
      return !1;
    if (!r.current && "changedTouches" in m && (S || E) && (r.current = w), !w)
      return !0;
    var q = r.current || w;
    return Wv(q, g, m, q === "h" ? S : E);
  }, []), c = u.useCallback(function(m) {
    var g = m;
    if (!(!Et.length || Et[Et.length - 1] !== i)) {
      var y = "deltaY" in g ? Yi(g) : xn(g), C = n.current.filter(function(w) {
        return w.name === g.type && (w.target === g.target || g.target === w.shadowParent) && Vv(w.delta, y);
      })[0];
      if (C && C.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!C) {
        var S = (a.current.shards || []).map(Ki).filter(Boolean).filter(function(w) {
          return w.contains(g.target);
        }), E = S.length > 0 ? s(g, S[0]) : !a.current.noIsolation;
        E && g.cancelable && g.preventDefault();
      }
    }
  }, []), d = u.useCallback(function(m, g, y, C) {
    var S = { name: m, delta: g, target: y, should: C, shadowParent: Gv(y) };
    n.current.push(S), setTimeout(function() {
      n.current = n.current.filter(function(E) {
        return E !== S;
      });
    }, 1);
  }, []), p = u.useCallback(function(m) {
    t.current = xn(m), r.current = void 0;
  }, []), f = u.useCallback(function(m) {
    d(m.type, Yi(m), m.target, s(m, e.lockRef.current));
  }, []), v = u.useCallback(function(m) {
    d(m.type, xn(m), m.target, s(m, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return Et.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", c, St), document.addEventListener("touchmove", c, St), document.addEventListener("touchstart", p, St), function() {
      Et = Et.filter(function(m) {
        return m !== i;
      }), document.removeEventListener("wheel", c, St), document.removeEventListener("touchmove", c, St), document.removeEventListener("touchstart", p, St);
    };
  }, []);
  var h = e.removeScrollBar, x = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    x ? u.createElement(i, { styles: Bv(o) }) : null,
    h ? u.createElement(Dv, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Gv(e) {
  for (var n = null; e !== null; )
    e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
  return n;
}
const qv = wv(Fs, Uv);
var rr = u.forwardRef(function(e, n) {
  return u.createElement(nr, he({}, e, { ref: n, sideCar: qv }));
});
rr.classNames = nr.classNames;
var Yv = [" ", "Enter", "ArrowUp", "ArrowDown"], Kv = [" ", "Enter"], mt = "Select", [or, ir, Zv] = go(mt), [It] = at(mt, [
  Zv,
  er
]), ar = er(), [Xv, st] = It(mt), [Jv, Qv] = It(mt), Bs = (e) => {
  const {
    __scopeSelect: n,
    children: t,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    value: a,
    defaultValue: s,
    onValueChange: c,
    dir: d,
    name: p,
    autoComplete: f,
    disabled: v,
    required: h,
    form: x
  } = e, m = ar(n), [g, y] = u.useState(null), [C, S] = u.useState(null), [E, w] = u.useState(!1), N = xo(d), [j, P] = Xt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: mt
  }), [I, V] = Xt({
    prop: a,
    defaultProp: s,
    onChange: c,
    caller: mt
  }), X = u.useRef(null), q = g ? x || !!g.closest("form") : !0, [U, H] = u.useState(/* @__PURE__ */ new Set()), $ = Array.from(U).map((L) => L.props.value).join(";");
  return /* @__PURE__ */ l.jsx(Os, { ...m, children: /* @__PURE__ */ l.jsxs(
    Xv,
    {
      required: h,
      scope: n,
      trigger: g,
      onTriggerChange: y,
      valueNode: C,
      onValueNodeChange: S,
      valueNodeHasChildren: E,
      onValueNodeHasChildrenChange: w,
      contentId: Ye(),
      value: I,
      onValueChange: V,
      open: j,
      onOpenChange: P,
      dir: N,
      triggerPointerDownPosRef: X,
      disabled: v,
      children: [
        /* @__PURE__ */ l.jsx(or.Provider, { scope: n, children: /* @__PURE__ */ l.jsx(
          Jv,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: u.useCallback((L) => {
              H((J) => new Set(J).add(L));
            }, []),
            onNativeOptionRemove: u.useCallback((L) => {
              H((J) => {
                const R = new Set(J);
                return R.delete(L), R;
              });
            }, []),
            children: t
          }
        ) }),
        q ? /* @__PURE__ */ l.jsxs(
          mc,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: p,
            autoComplete: f,
            value: I,
            onChange: (L) => V(L.target.value),
            disabled: v,
            form: x,
            children: [
              I === void 0 ? /* @__PURE__ */ l.jsx("option", { value: "" }) : null,
              Array.from(U)
            ]
          },
          $
        ) : null
      ]
    }
  ) });
};
Bs.displayName = mt;
var Hs = "SelectTrigger", Us = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, disabled: r = !1, ...o } = e, i = ar(t), a = st(Hs, t), s = a.disabled || r, c = ue(n, a.onTriggerChange), d = ir(t), p = u.useRef("touch"), [f, v, h] = hc((m) => {
      const g = d().filter((S) => !S.disabled), y = g.find((S) => S.value === a.value), C = gc(g, m, y);
      C !== void 0 && a.onValueChange(C.value);
    }), x = (m) => {
      s || (a.onOpenChange(!0), h()), m && (a.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      });
    };
    return /* @__PURE__ */ l.jsx(Ts, { asChild: !0, ...i, children: /* @__PURE__ */ l.jsx(
      se.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": a.contentId,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: s,
        "data-disabled": s ? "" : void 0,
        "data-placeholder": vc(a.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: ne(o.onClick, (m) => {
          m.currentTarget.focus(), p.current !== "mouse" && x(m);
        }),
        onPointerDown: ne(o.onPointerDown, (m) => {
          p.current = m.pointerType;
          const g = m.target;
          g.hasPointerCapture(m.pointerId) && g.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && m.pointerType === "mouse" && (x(m), m.preventDefault());
        }),
        onKeyDown: ne(o.onKeyDown, (m) => {
          const g = f.current !== "";
          !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && v(m.key), !(g && m.key === " ") && Yv.includes(m.key) && (x(), m.preventDefault());
        })
      }
    ) });
  }
);
Us.displayName = Hs;
var Gs = "SelectValue", qs = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, className: r, style: o, children: i, placeholder: a = "", ...s } = e, c = st(Gs, t), { onValueNodeHasChildrenChange: d } = c, p = i !== void 0, f = ue(n, c.onValueNodeChange);
    return ke(() => {
      d(p);
    }, [d, p]), /* @__PURE__ */ l.jsx(
      se.span,
      {
        ...s,
        ref: f,
        style: { pointerEvents: "none" },
        children: vc(c.value) ? /* @__PURE__ */ l.jsx(l.Fragment, { children: a }) : i
      }
    );
  }
);
qs.displayName = Gs;
var eh = "SelectIcon", Ys = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, children: r, ...o } = e;
    return /* @__PURE__ */ l.jsx(se.span, { "aria-hidden": !0, ...o, ref: n, children: r || "▼" });
  }
);
Ys.displayName = eh;
var th = "SelectPortal", Ks = (e) => /* @__PURE__ */ l.jsx(tr, { asChild: !0, ...e });
Ks.displayName = th;
var vt = "SelectContent", Zs = u.forwardRef(
  (e, n) => {
    const t = st(vt, e.__scopeSelect), [r, o] = u.useState();
    if (ke(() => {
      o(new DocumentFragment());
    }, []), !t.open) {
      const i = r;
      return i ? Bn.createPortal(
        /* @__PURE__ */ l.jsx(Xs, { scope: e.__scopeSelect, children: /* @__PURE__ */ l.jsx(or.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ l.jsx("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ l.jsx(Js, { ...e, ref: n });
  }
);
Zs.displayName = vt;
var De = 10, [Xs, ct] = It(vt), nh = "SelectContentImpl", rh = /* @__PURE__ */ jt("SelectContent.RemoveScroll"), Js = u.forwardRef(
  (e, n) => {
    const {
      __scopeSelect: t,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: i,
      onPointerDownOutside: a,
      //
      // PopperContent props
      side: s,
      sideOffset: c,
      align: d,
      alignOffset: p,
      arrowPadding: f,
      collisionBoundary: v,
      collisionPadding: h,
      sticky: x,
      hideWhenDetached: m,
      avoidCollisions: g,
      //
      ...y
    } = e, C = st(vt, t), [S, E] = u.useState(null), [w, N] = u.useState(null), j = ue(n, (k) => E(k)), [P, I] = u.useState(null), [V, X] = u.useState(
      null
    ), q = ir(t), [U, H] = u.useState(!1), $ = u.useRef(!1);
    u.useEffect(() => {
      if (S) return Po(S);
    }, [S]), bo();
    const L = u.useCallback(
      (k) => {
        const [W, ...Q] = q().map((A) => A.ref.current), [B] = Q.slice(-1), re = document.activeElement;
        for (const A of k)
          if (A === re || (A?.scrollIntoView({ block: "nearest" }), A === W && w && (w.scrollTop = 0), A === B && w && (w.scrollTop = w.scrollHeight), A?.focus(), document.activeElement !== re)) return;
      },
      [q, w]
    ), J = u.useCallback(
      () => L([P, S]),
      [L, P, S]
    );
    u.useEffect(() => {
      U && J();
    }, [U, J]);
    const { onOpenChange: R, triggerPointerDownPosRef: M } = C;
    u.useEffect(() => {
      if (S) {
        let k = { x: 0, y: 0 };
        const W = (B) => {
          k = {
            x: Math.abs(Math.round(B.pageX) - (M.current?.x ?? 0)),
            y: Math.abs(Math.round(B.pageY) - (M.current?.y ?? 0))
          };
        }, Q = (B) => {
          k.x <= 10 && k.y <= 10 ? B.preventDefault() : S.contains(B.target) || R(!1), document.removeEventListener("pointermove", W), M.current = null;
        };
        return M.current !== null && (document.addEventListener("pointermove", W), document.addEventListener("pointerup", Q, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", W), document.removeEventListener("pointerup", Q, { capture: !0 });
        };
      }
    }, [S, R, M]), u.useEffect(() => {
      const k = () => R(!1);
      return window.addEventListener("blur", k), window.addEventListener("resize", k), () => {
        window.removeEventListener("blur", k), window.removeEventListener("resize", k);
      };
    }, [R]);
    const [_, b] = hc((k) => {
      const W = q().filter((re) => !re.disabled), Q = W.find((re) => re.ref.current === document.activeElement), B = gc(W, k, Q);
      B && setTimeout(() => B.ref.current.focus());
    }), O = u.useCallback(
      (k, W, Q) => {
        const B = !$.current && !Q;
        (C.value !== void 0 && C.value === W || B) && (I(k), B && ($.current = !0));
      },
      [C.value]
    ), D = u.useCallback(() => S?.focus(), [S]), T = u.useCallback(
      (k, W, Q) => {
        const B = !$.current && !Q;
        (C.value !== void 0 && C.value === W || B) && X(k);
      },
      [C.value]
    ), Z = r === "popper" ? no : Qs, G = Z === no ? {
      side: s,
      sideOffset: c,
      align: d,
      alignOffset: p,
      arrowPadding: f,
      collisionBoundary: v,
      collisionPadding: h,
      sticky: x,
      hideWhenDetached: m,
      avoidCollisions: g
    } : {};
    return /* @__PURE__ */ l.jsx(
      Xs,
      {
        scope: t,
        content: S,
        viewport: w,
        onViewportChange: N,
        itemRefCallback: O,
        selectedItem: P,
        onItemLeave: D,
        itemTextRefCallback: T,
        focusSelectedItem: J,
        selectedItemText: V,
        position: r,
        isPositioned: U,
        searchRef: _,
        children: /* @__PURE__ */ l.jsx(rr, { as: rh, allowPinchZoom: !0, children: /* @__PURE__ */ l.jsx(
          Kn,
          {
            asChild: !0,
            trapped: C.open,
            onMountAutoFocus: (k) => {
              k.preventDefault();
            },
            onUnmountAutoFocus: ne(o, (k) => {
              C.trigger?.focus({ preventScroll: !0 }), k.preventDefault();
            }),
            children: /* @__PURE__ */ l.jsx(
              Yn,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: a,
                onFocusOutside: (k) => k.preventDefault(),
                onDismiss: () => C.onOpenChange(!1),
                children: /* @__PURE__ */ l.jsx(
                  Z,
                  {
                    role: "listbox",
                    id: C.contentId,
                    "data-state": C.open ? "open" : "closed",
                    dir: C.dir,
                    onContextMenu: (k) => k.preventDefault(),
                    ...y,
                    ...G,
                    onPlaced: () => H(!0),
                    ref: j,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: ne(y.onKeyDown, (k) => {
                      const W = k.ctrlKey || k.altKey || k.metaKey;
                      if (k.key === "Tab" && k.preventDefault(), !W && k.key.length === 1 && b(k.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(k.key)) {
                        let B = q().filter((re) => !re.disabled).map((re) => re.ref.current);
                        if (["ArrowUp", "End"].includes(k.key) && (B = B.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(k.key)) {
                          const re = k.target, A = B.indexOf(re);
                          B = B.slice(A + 1);
                        }
                        setTimeout(() => L(B)), k.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Js.displayName = nh;
var oh = "SelectItemAlignedPosition", Qs = u.forwardRef((e, n) => {
  const { __scopeSelect: t, onPlaced: r, ...o } = e, i = st(vt, t), a = ct(vt, t), [s, c] = u.useState(null), [d, p] = u.useState(null), f = ue(n, (j) => p(j)), v = ir(t), h = u.useRef(!1), x = u.useRef(!0), { viewport: m, selectedItem: g, selectedItemText: y, focusSelectedItem: C } = a, S = u.useCallback(() => {
    if (i.trigger && i.valueNode && s && d && m && g && y) {
      const j = i.trigger.getBoundingClientRect(), P = d.getBoundingClientRect(), I = i.valueNode.getBoundingClientRect(), V = y.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const re = V.left - P.left, A = I.left - re, pe = j.left - A, ee = j.width + pe, oe = Math.max(ee, P.width), be = window.innerWidth - De, ge = _i(A, [
          De,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(De, be - oe)
        ]);
        s.style.minWidth = ee + "px", s.style.left = ge + "px";
      } else {
        const re = P.right - V.right, A = window.innerWidth - I.right - re, pe = window.innerWidth - j.right - A, ee = j.width + pe, oe = Math.max(ee, P.width), be = window.innerWidth - De, ge = _i(A, [
          De,
          Math.max(De, be - oe)
        ]);
        s.style.minWidth = ee + "px", s.style.right = ge + "px";
      }
      const X = v(), q = window.innerHeight - De * 2, U = m.scrollHeight, H = window.getComputedStyle(d), $ = parseInt(H.borderTopWidth, 10), L = parseInt(H.paddingTop, 10), J = parseInt(H.borderBottomWidth, 10), R = parseInt(H.paddingBottom, 10), M = $ + L + U + R + J, _ = Math.min(g.offsetHeight * 5, M), b = window.getComputedStyle(m), O = parseInt(b.paddingTop, 10), D = parseInt(b.paddingBottom, 10), T = j.top + j.height / 2 - De, Z = q - T, G = g.offsetHeight / 2, k = g.offsetTop + G, W = $ + L + k, Q = M - W;
      if (W <= T) {
        const re = X.length > 0 && g === X[X.length - 1].ref.current;
        s.style.bottom = "0px";
        const A = d.clientHeight - m.offsetTop - m.offsetHeight, pe = Math.max(
          Z,
          G + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (re ? D : 0) + A + J
        ), ee = W + pe;
        s.style.height = ee + "px";
      } else {
        const re = X.length > 0 && g === X[0].ref.current;
        s.style.top = "0px";
        const pe = Math.max(
          T,
          $ + m.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (re ? O : 0) + G
        ) + Q;
        s.style.height = pe + "px", m.scrollTop = W - T + m.offsetTop;
      }
      s.style.margin = `${De}px 0`, s.style.minHeight = _ + "px", s.style.maxHeight = q + "px", r?.(), requestAnimationFrame(() => h.current = !0);
    }
  }, [
    v,
    i.trigger,
    i.valueNode,
    s,
    d,
    m,
    g,
    y,
    i.dir,
    r
  ]);
  ke(() => S(), [S]);
  const [E, w] = u.useState();
  ke(() => {
    d && w(window.getComputedStyle(d).zIndex);
  }, [d]);
  const N = u.useCallback(
    (j) => {
      j && x.current === !0 && (S(), C?.(), x.current = !1);
    },
    [S, C]
  );
  return /* @__PURE__ */ l.jsx(
    ah,
    {
      scope: t,
      contentWrapper: s,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: N,
      children: /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: E
          },
          children: /* @__PURE__ */ l.jsx(
            se.div,
            {
              ...o,
              ref: f,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
Qs.displayName = oh;
var ih = "SelectPopperPosition", no = u.forwardRef((e, n) => {
  const {
    __scopeSelect: t,
    align: r = "start",
    collisionPadding: o = De,
    ...i
  } = e, a = ar(t);
  return /* @__PURE__ */ l.jsx(
    Ms,
    {
      ...a,
      ...i,
      ref: n,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...i.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
no.displayName = ih;
var [ah, jo] = It(vt, {}), ro = "SelectViewport", ec = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, nonce: r, ...o } = e, i = ct(ro, t), a = jo(ro, t), s = ue(n, i.onViewportChange), c = u.useRef(0);
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ l.jsx(or.Slot, { scope: t, children: /* @__PURE__ */ l.jsx(
        se.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: s,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: ne(o.onScroll, (d) => {
            const p = d.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: v } = a;
            if (v?.current && f) {
              const h = Math.abs(c.current - p.scrollTop);
              if (h > 0) {
                const x = window.innerHeight - De * 2, m = parseFloat(f.style.minHeight), g = parseFloat(f.style.height), y = Math.max(m, g);
                if (y < x) {
                  const C = y + h, S = Math.min(x, C), E = C - S;
                  f.style.height = S + "px", f.style.bottom === "0px" && (p.scrollTop = E > 0 ? E : 0, f.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = p.scrollTop;
          })
        }
      ) })
    ] });
  }
);
ec.displayName = ro;
var tc = "SelectGroup", [sh, ch] = It(tc), nc = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e, o = Ye();
    return /* @__PURE__ */ l.jsx(sh, { scope: t, id: o, children: /* @__PURE__ */ l.jsx(se.div, { role: "group", "aria-labelledby": o, ...r, ref: n }) });
  }
);
nc.displayName = tc;
var rc = "SelectLabel", oc = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e, o = ch(rc, t);
    return /* @__PURE__ */ l.jsx(se.div, { id: o.id, ...r, ref: n });
  }
);
oc.displayName = rc;
var In = "SelectItem", [lh, ic] = It(In), ac = u.forwardRef(
  (e, n) => {
    const {
      __scopeSelect: t,
      value: r,
      disabled: o = !1,
      textValue: i,
      ...a
    } = e, s = st(In, t), c = ct(In, t), d = s.value === r, [p, f] = u.useState(i ?? ""), [v, h] = u.useState(!1), x = ue(
      n,
      (C) => c.itemRefCallback?.(C, r, o)
    ), m = Ye(), g = u.useRef("touch"), y = () => {
      o || (s.onValueChange(r), s.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ l.jsx(
      lh,
      {
        scope: t,
        value: r,
        disabled: o,
        textId: m,
        isSelected: d,
        onItemTextChange: u.useCallback((C) => {
          f((S) => S || (C?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ l.jsx(
          or.ItemSlot,
          {
            scope: t,
            value: r,
            disabled: o,
            textValue: p,
            children: /* @__PURE__ */ l.jsx(
              se.div,
              {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": v ? "" : void 0,
                "aria-selected": d && v,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: x,
                onFocus: ne(a.onFocus, () => h(!0)),
                onBlur: ne(a.onBlur, () => h(!1)),
                onClick: ne(a.onClick, () => {
                  g.current !== "mouse" && y();
                }),
                onPointerUp: ne(a.onPointerUp, () => {
                  g.current === "mouse" && y();
                }),
                onPointerDown: ne(a.onPointerDown, (C) => {
                  g.current = C.pointerType;
                }),
                onPointerMove: ne(a.onPointerMove, (C) => {
                  g.current = C.pointerType, o ? c.onItemLeave?.() : g.current === "mouse" && C.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: ne(a.onPointerLeave, (C) => {
                  C.currentTarget === document.activeElement && c.onItemLeave?.();
                }),
                onKeyDown: ne(a.onKeyDown, (C) => {
                  c.searchRef?.current !== "" && C.key === " " || (Kv.includes(C.key) && y(), C.key === " " && C.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
ac.displayName = In;
var Gt = "SelectItemText", sc = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, className: r, style: o, ...i } = e, a = st(Gt, t), s = ct(Gt, t), c = ic(Gt, t), d = Qv(Gt, t), [p, f] = u.useState(null), v = ue(
      n,
      (y) => f(y),
      c.onItemTextChange,
      (y) => s.itemTextRefCallback?.(y, c.value, c.disabled)
    ), h = p?.textContent, x = u.useMemo(
      () => /* @__PURE__ */ l.jsx("option", { value: c.value, disabled: c.disabled, children: h }, c.value),
      [c.disabled, c.value, h]
    ), { onNativeOptionAdd: m, onNativeOptionRemove: g } = d;
    return ke(() => (m(x), () => g(x)), [m, g, x]), /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(se.span, { id: c.textId, ...i, ref: v }),
      c.isSelected && a.valueNode && !a.valueNodeHasChildren ? Bn.createPortal(i.children, a.valueNode) : null
    ] });
  }
);
sc.displayName = Gt;
var cc = "SelectItemIndicator", lc = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e;
    return ic(cc, t).isSelected ? /* @__PURE__ */ l.jsx(se.span, { "aria-hidden": !0, ...r, ref: n }) : null;
  }
);
lc.displayName = cc;
var oo = "SelectScrollUpButton", dc = u.forwardRef((e, n) => {
  const t = ct(oo, e.__scopeSelect), r = jo(oo, e.__scopeSelect), [o, i] = u.useState(!1), a = ue(n, r.onScrollButtonChange);
  return ke(() => {
    if (t.viewport && t.isPositioned) {
      let s = function() {
        const d = c.scrollTop > 0;
        i(d);
      };
      const c = t.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [t.viewport, t.isPositioned]), o ? /* @__PURE__ */ l.jsx(
    pc,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: c } = t;
        s && c && (s.scrollTop = s.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
dc.displayName = oo;
var io = "SelectScrollDownButton", uc = u.forwardRef((e, n) => {
  const t = ct(io, e.__scopeSelect), r = jo(io, e.__scopeSelect), [o, i] = u.useState(!1), a = ue(n, r.onScrollButtonChange);
  return ke(() => {
    if (t.viewport && t.isPositioned) {
      let s = function() {
        const d = c.scrollHeight - c.clientHeight, p = Math.ceil(c.scrollTop) < d;
        i(p);
      };
      const c = t.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [t.viewport, t.isPositioned]), o ? /* @__PURE__ */ l.jsx(
    pc,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: c } = t;
        s && c && (s.scrollTop = s.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
uc.displayName = io;
var pc = u.forwardRef((e, n) => {
  const { __scopeSelect: t, onAutoScroll: r, ...o } = e, i = ct("SelectScrollButton", t), a = u.useRef(null), s = ir(t), c = u.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return u.useEffect(() => () => c(), [c]), ke(() => {
    s().find((p) => p.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ l.jsx(
    se.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: n,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: ne(o.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerMove: ne(o.onPointerMove, () => {
        i.onItemLeave?.(), a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerLeave: ne(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), dh = "SelectSeparator", fc = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e;
    return /* @__PURE__ */ l.jsx(se.div, { "aria-hidden": !0, ...r, ref: n });
  }
);
fc.displayName = dh;
var ao = "SelectArrow", uh = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e, o = ar(t), i = st(ao, t), a = ct(ao, t);
    return i.open && a.position === "popper" ? /* @__PURE__ */ l.jsx(Ds, { ...o, ...r, ref: n }) : null;
  }
);
uh.displayName = ao;
var ph = "SelectBubbleInput", mc = u.forwardRef(
  ({ __scopeSelect: e, value: n, ...t }, r) => {
    const o = u.useRef(null), i = ue(r, o), a = sv(n);
    return u.useEffect(() => {
      const s = o.current;
      if (!s) return;
      const c = window.HTMLSelectElement.prototype, p = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (a !== n && p) {
        const f = new Event("change", { bubbles: !0 });
        p.call(s, n), s.dispatchEvent(f);
      }
    }, [a, n]), /* @__PURE__ */ l.jsx(
      se.select,
      {
        ...t,
        style: { ...Ns, ...t.style },
        ref: i,
        defaultValue: n
      }
    );
  }
);
mc.displayName = ph;
function vc(e) {
  return e === "" || e === void 0;
}
function hc(e) {
  const n = Ve(e), t = u.useRef(""), r = u.useRef(0), o = u.useCallback(
    (a) => {
      const s = t.current + a;
      n(s), (function c(d) {
        t.current = d, window.clearTimeout(r.current), d !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      })(s);
    },
    [n]
  ), i = u.useCallback(() => {
    t.current = "", window.clearTimeout(r.current);
  }, []);
  return u.useEffect(() => () => window.clearTimeout(r.current), []), [t, o, i];
}
function gc(e, n, t) {
  const o = n.length > 1 && Array.from(n).every((d) => d === n[0]) ? n[0] : n, i = t ? e.indexOf(t) : -1;
  let a = fh(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((d) => d !== t));
  const c = a.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== t ? c : void 0;
}
function fh(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
var mh = Bs, vh = Us, hh = qs, gh = Ys, xh = Ks, bh = Zs, yh = ec, wh = nc, Ch = oc, Sh = ac, Eh = sc, kh = lc, _h = dc, Rh = uc, Ph = fc;
function jh({ ...e }) {
  return /* @__PURE__ */ l.jsx(mh, { "data-slot": "select", ...e });
}
function lb({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(wh, { "data-slot": "select-group", ...e });
}
function Ah({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(hh, { "data-slot": "select-value", ...e });
}
function Oh({
  className: e,
  size: n = "default",
  variant: t = "default",
  children: r,
  ...o
}) {
  return /* @__PURE__ */ l.jsxs(
    vh,
    {
      "data-slot": "select-trigger",
      "data-size": n,
      className: z(
        "flex w-full items-center justify-between gap-2 font-sans bg-white whitespace-nowrap data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        {
          "border border-gray-50 h-10 rounded-sm text-base px-3 py-2 hover:border-blue-hepatica-700 focus-visible:border-2 focus-visible:border-blue-hepatica-600 focus-visible:shadow-button aria-invalid:border-bright-red-600 aria-invalid:focus-visible:border-bright-red-600": t === "default",
          "border-none h-6 text-xs px-2 text-gray-700": t === "ghost"
        },
        "",
        e
      ),
      ...o,
      children: [
        r,
        /* @__PURE__ */ l.jsx(gh, { asChild: !0, children: /* @__PURE__ */ l.jsx(
          _a,
          {
            className: z({
              "size-6 text-gray-300": t === "default",
              "size-4 text-gray-600": t === "ghost"
            })
          }
        ) })
      ]
    }
  );
}
function Th({
  className: e,
  children: n,
  position: t = "popper",
  align: r = "center",
  ...o
}) {
  return /* @__PURE__ */ l.jsx(xh, { children: /* @__PURE__ */ l.jsxs(
    bh,
    {
      "data-slot": "select-content",
      className: z(
        "bg-white font-sans text-gray-700 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height)  origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border border-gray-25 shadow-md",
        t === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: t,
      align: r,
      ...o,
      children: [
        /* @__PURE__ */ l.jsx(Dh, {}),
        /* @__PURE__ */ l.jsx(
          yh,
          {
            className: z(
              "p-1",
              t === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: n
          }
        ),
        /* @__PURE__ */ l.jsx(Nh, {})
      ]
    }
  ) });
}
function db({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ l.jsx(
    Ch,
    {
      "data-slot": "select-label",
      className: z("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...n
    }
  );
}
function Mh({
  className: e,
  children: n,
  ...t
}) {
  return /* @__PURE__ */ l.jsxs(
    Sh,
    {
      "data-slot": "select-item",
      className: z(
        "focus:bg-gray-25 focus:text-blue-hepatica-600 [&_svg:not([class*='text-'])]:text-gray-300 relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...t,
      children: [
        /* @__PURE__ */ l.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(kh, { children: /* @__PURE__ */ l.jsx(ka, { className: "size-4" }) }) }),
        /* @__PURE__ */ l.jsx(Eh, { children: n })
      ]
    }
  );
}
function ub({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ l.jsx(
    Ph,
    {
      "data-slot": "select-separator",
      className: z("bg-border pointer-events-none -mx-1 my-1 h-px", e),
      ...n
    }
  );
}
function Dh({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ l.jsx(
    _h,
    {
      "data-slot": "select-scroll-up-button",
      className: z(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...n,
      children: /* @__PURE__ */ l.jsx(Hd, { className: "size-4" })
    }
  );
}
function Nh({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ l.jsx(
    Rh,
    {
      "data-slot": "select-scroll-down-button",
      className: z(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...n,
      children: /* @__PURE__ */ l.jsx(_a, { className: "size-4" })
    }
  );
}
function pb({
  page: e,
  pageSize: n,
  totalItems: t,
  pageSizeOptions: r = [5, 10, 25, 50],
  onPageChange: o,
  onPageSizeChange: i,
  disabled: a = !1,
  className: s,
  ...c
}) {
  const d = Math.max(1, Math.ceil(t / Math.max(n, 1))), p = Math.min(Math.max(e, 1), d), f = t === 0 ? 0 : (p - 1) * n + 1, v = t === 0 ? 0 : Math.min(t, p * n), h = !a && p > 1, x = !a && p < d, m = () => {
    h && o(p - 1);
  }, g = () => {
    x && o(p + 1);
  }, y = (C) => {
    Number.isNaN(Number(C)) || i?.(Number(C));
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      "data-slot": "pagination",
      className: z(
        "flex w-full items-center justify-end gap-4 py-3 text-sm text-gray-700",
        "border-t border-gray-50",
        s
      ),
      ...c,
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ l.jsx("span", { className: "font-sans text-xs text-gray-700", children: "Rows per page:" }),
          /* @__PURE__ */ l.jsx("div", { className: "w-16", children: /* @__PURE__ */ l.jsxs(
            jh,
            {
              disabled: a || !i,
              defaultValue: `${n}`,
              onValueChange: y,
              "data-testid": "pagination--items-per-page",
              children: [
                /* @__PURE__ */ l.jsx(Oh, { variant: "ghost", disabled: a, children: /* @__PURE__ */ l.jsx(Ah, { placeholder: "Theme" }) }),
                /* @__PURE__ */ l.jsx(Th, { children: r.map((C) => /* @__PURE__ */ l.jsx(Mh, { value: `${C}`, children: C }, C)) })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ l.jsx(
            "p",
            {
              "data-slot": "pagination-range",
              className: "text-xs text-gray-600 whitespace-nowrap",
              children: t === 0 ? "0 of 0" : `${f} – ${v} of ${t}`
            }
          ),
          /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-x-1", children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                "data-slot": "pagination-prev",
                type: "button",
                onClick: m,
                disabled: !h,
                "aria-label": "Previous page",
                className: "size-10 border-none flex items-center justify-center rounded-md hover:bg-gray-25 transition-colors disabled:opacity-45",
                children: /* @__PURE__ */ l.jsx(Vd, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                "data-slot": "pagination-next",
                type: "button",
                onClick: g,
                disabled: !x,
                "aria-label": "Next page",
                className: "size-10 border-none flex items-center justify-center rounded-md hover:bg-gray-25 transition-colors disabled:opacity-45",
                children: /* @__PURE__ */ l.jsx(Ra, { className: "size-4" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function fb({
  checked: e,
  children: n,
  name: t,
  onChange: r,
  value: o,
  disabled: i = !1
}) {
  const a = `${t}-${o}`;
  return /* @__PURE__ */ l.jsxs(
    "label",
    {
      htmlFor: a,
      className: z(
        "group w-full p-4 gap-1 flex items-start justify-start rounded-lg border border-gray-50 bg-white transition-colors",
        "focus-within:ring-2 focus-within:ring-blue-hepatica-300",
        {
          "border-2 border-blue-hepatica-600 bg-blue-hepatica-100": e,
          "opacity-60 cursor-not-allowed": i
        }
      ),
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "size-10 flex justify-center items-center", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "radio",
              id: a,
              name: t,
              value: o,
              checked: e,
              onChange: () => r(o),
              className: "sr-only",
              disabled: i
            }
          ),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: z(
                "pointer-events-none size-4 border border-gray-700 rounded-full flex items-center justify-center",
                {
                  "border-2 border-blue-hepatica-600": e
                }
              ),
              children: /* @__PURE__ */ l.jsx(
                "div",
                {
                  className: z("size-2 rounded-full bg-transparent", {
                    "bg-blue-hepatica-600": e
                  })
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ l.jsx("div", { className: "", children: n })
      ]
    }
  );
}
const Ih = Hn("bg-white rounded-2xl overflow-hidden flex flex-col w-full", {
  variants: {
    elevation: {
      "elevation-0": "shadow-none",
      "elevation-1": "shadow-[0px_1px_1px_rgba(0,0,0,0.14),0px_2px_1px_-1px_rgba(0,0,0,0.2)]",
      "elevation-2": "shadow-[0px_2px_2px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)]",
      "elevation-3": "shadow-[0px_3px_4px_rgba(0,0,0,0.14),0px_3px_3px_-2px_rgba(0,0,0,0.2)]",
      "elevation-4": "shadow-[0px_4px_5px_rgba(0,0,0,0.14),0px_2px_4px_-1px_rgba(0,0,0,0.2)]",
      "elevation-5": "shadow-[0px_5px_8px_rgba(0,0,0,0.14),0px_3px_5px_-1px_rgba(0,0,0,0.2)]",
      "elevation-6": "shadow-[0px_6px_10px_rgba(0,0,0,0.14),0px_3px_5px_-1px_rgba(0,0,0,0.2)]",
      "elevation-7": "shadow-[0px_7px_10px_1px_rgba(0,0,0,0.14),0px_4px_5px_-2px_rgba(0,0,0,0.2)]",
      "elevation-8": "shadow-[0px_8px_10px_1px_rgba(0,0,0,0.14),0px_5px_5px_-3px_rgba(0,0,0,0.2)]"
    }
  },
  defaultVariants: {
    elevation: "elevation-1"
  }
});
function mb({
  title: e,
  children: n,
  footer: t,
  elevation: r = "elevation-0",
  className: o,
  ...i
}) {
  return /* @__PURE__ */ l.jsxs("section", { ...i, className: z(Ih({ elevation: r, className: o })), children: [
    !!e && /* @__PURE__ */ l.jsx("header", { className: "h-15 flex items-center px-8 border-b border-b-gray-25", children: /* @__PURE__ */ l.jsx("h3", { className: "font-sans font-semibold text-base text-gray-900 leading-5", children: e }) }),
    /* @__PURE__ */ l.jsx("div", { className: "flex flex-col p-4 md:p-8!", children: n }),
    !!t && /* @__PURE__ */ l.jsx("footer", { className: "px-4 md:px-8! py-4 md:py-6! border-t border-t-gray-25", children: t })
  ] });
}
var xc = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Zi = ie.createContext && /* @__PURE__ */ ie.createContext(xc), Lh = ["attr", "size", "title"];
function Fh(e, n) {
  if (e == null) return {};
  var t = zh(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function zh(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (n.indexOf(r) >= 0) continue;
      t[r] = e[r];
    }
  return t;
}
function Ln() {
  return Ln = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, Ln.apply(this, arguments);
}
function Xi(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Fn(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Xi(Object(t), !0).forEach(function(r) {
      $h(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Xi(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function $h(e, n, t) {
  return n = Wh(n), n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function Wh(e) {
  var n = Vh(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function Vh(e, n) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function bc(e) {
  return e && e.map((n, t) => /* @__PURE__ */ ie.createElement(n.tag, Fn({
    key: t
  }, n.attr), bc(n.child)));
}
function Bh(e) {
  return (n) => /* @__PURE__ */ ie.createElement(Hh, Ln({
    attr: Fn({}, e.attr)
  }, n), bc(e.child));
}
function Hh(e) {
  var n = (t) => {
    var {
      attr: r,
      size: o,
      title: i
    } = e, a = Fh(e, Lh), s = o || t.size || "1em", c;
    return t.className && (c = t.className), e.className && (c = (c ? c + " " : "") + e.className), /* @__PURE__ */ ie.createElement("svg", Ln({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, a, {
      className: c,
      style: Fn(Fn({
        color: e.color || t.color
      }, t.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && /* @__PURE__ */ ie.createElement("title", null, i), e.children);
  };
  return Zi !== void 0 ? /* @__PURE__ */ ie.createElement(Zi.Consumer, null, (t) => n(t)) : n(xc);
}
function Uh(e) {
  return Bh({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M17 4H3V6H17V4ZM13 11H3V13H13V11ZM17 18H3V20H17V18ZM22.0104 8.81412L20.5962 7.3999L16 11.9961L20.5962 16.5923L22.0104 15.1781L18.8284 11.9961L22.0104 8.81412Z" }, child: [] }] })(e);
}
const Gh = new URL("data:image/svg+xml,%3csvg%20width='247'%20height='980'%20viewBox='0%200%20247%20980'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9467_2027)'%3e%3crect%20width='247'%20height='983'%20fill='black'/%3e%3cg%20opacity='0.3'%20filter='url(%23filter0_f_9467_2027)'%3e%3cellipse%20cx='-129.135'%20cy='1014.17'%20rx='162.01'%20ry='485.827'%20transform='rotate(180%20-129.135%201014.17)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.3'%20filter='url(%23filter1_f_9467_2027)'%3e%3cellipse%20cx='450.01'%20cy='1514.17'%20rx='162.01'%20ry='485.827'%20transform='rotate(180%20450.01%201514.17)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter2_f_9467_2027)'%3e%3cellipse%20cx='119.407'%20cy='-84.3658'%20rx='364.442'%20ry='193.158'%20fill='%230B495D'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter3_f_9467_2027)'%3e%3cellipse%20cx='399.478'%20cy='-0.360779'%20rx='364.442'%20ry='193.158'%20transform='rotate(30%20399.478%20-0.360779)'%20fill='%23BF3535'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter4_f_9467_2027)'%3e%3cellipse%20cx='-312.773'%20cy='835'%20rx='434.874'%20ry='485.827'%20transform='rotate(-136.998%20-312.773%20835)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter5_f_9467_2027)'%3e%3cellipse%20cx='336.608'%20cy='1039.65'%20rx='553.734'%20ry='293.484'%20transform='rotate(7.13051%20336.608%201039.65)'%20fill='%23660000'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_9467_2027'%20x='-691.145'%20y='128.346'%20width='1124.02'%20height='1771.65'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter1_f_9467_2027'%20x='-112'%20y='628.346'%20width='1124.02'%20height='1771.65'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter2_f_9467_2027'%20x='-453.839'%20y='-486.327'%20width='1146.49'%20height='803.922'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='104.402'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter3_f_9467_2027'%20x='-139.475'%20y='-456.526'%20width='1077.91'%20height='912.33'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='104.402'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter4_f_9467_2027'%20x='-1172.05'%20y='-27.8358'%20width='1718.56'%20height='1725.67'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter5_f_9467_2027'%20x='-531.326'%20y='423.111'%20width='1735.87'%20height='1233.08'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='158.628'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cclipPath%20id='clip0_9467_2027'%3e%3crect%20width='247'%20height='983'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", import.meta.url).href;
function vb({ children: e }) {
  const [n, t] = qe(!1), r = ye(() => t((i) => !i), []), o = ye(() => t(!1), []);
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        onClick: r,
        className: z(
          "fixed left-4 top-4 z-40 inline-flex size-12 items-center justify-center",
          "rounded-lg bg-black",
          "lg:hidden"
          // hide the button when viewport >= 912px
        ),
        "aria-label": n ? "Close sidebar" : "Open sidebar",
        children: /* @__PURE__ */ l.jsx(Uh, { className: "size-6 text-white" })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: z(
          "fixed inset-0 z-30 bg-black/40 transition-opacity sidebar:hidden lg:hidden",
          n ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ),
        onClick: o
      }
    ),
    /* @__PURE__ */ l.jsxs(
      "aside",
      {
        className: z(
          "relative",
          "fixed inset-y-0 left-0 z-40 w-[315px]",
          "bg-no-repeat bg-cover bg-top",
          "transition-transform duration-200 ease-out",
          n ? "translate-x-0" : "-translate-x-full",
          // desktop (>= 912px): always visible, static, no transform
          "lg:relative! lg:translate-x-0 lg:shadow-none",
          "lg:flex lg:flex-col px-6 overflow-hidden"
        ),
        children: [
          /* @__PURE__ */ l.jsx(
            "img",
            {
              src: Gh,
              alt: "",
              "aria-hidden": "true",
              className: "pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-top"
            }
          ),
          /* @__PURE__ */ l.jsxs("div", { className: "w-full flex flex-1 flex-col", children: [
            /* @__PURE__ */ l.jsx("div", { className: "flex justify-center pt-7 pb-12 border-b border-b-white/15 mb-6", children: /* @__PURE__ */ l.jsx("div", { className: "w-35 flex items-center gap-x-1", children: /* @__PURE__ */ l.jsx(ep, { size: 32 }) }) }),
            /* @__PURE__ */ l.jsx("div", { className: "flex flex-1", children: e })
          ] })
        ]
      }
    )
  ] });
}
function qh({
  index: e,
  label: n,
  current: t,
  disabled: r = !1,
  onClick: o
}) {
  return /* @__PURE__ */ l.jsxs("li", { className: "flex flex-col justify-start items-center gap-4 w-fit px-4 bg-gray-25 relative", children: [
    /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        "data-slot": "step",
        "data-current": t,
        disabled: r,
        "aria-current": t ? "step" : void 0,
        onClick: () => {
          t || r || o();
        },
        className: z(
          "w-8 h-8 rounded-full flex justify-center items-center",
          "border border-gray-50 bg-gray-25",
          {
            "bg-blue-hepatica-600 text-white border-none hover:bg-blue-hepatica-700": t,
            "cursor-not-allowed": r
          }
        ),
        children: /* @__PURE__ */ l.jsx(
          "span",
          {
            className: z("font-semibold text-sm text-gray-300", {
              "text-white": t
            }),
            children: e + 1
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      "span",
      {
        className: z(
          "whitespace-nowrap text-sm font-semibold leading-4 text-gray-300 text-center",
          {
            "text-gray-900": t
          }
        ),
        children: n
      }
    )
  ] });
}
function hb({
  steps: e,
  currentId: n,
  onStepChange: t,
  className: r
}) {
  return /* @__PURE__ */ l.jsx(
    "nav",
    {
      "aria-label": "Steps",
      "data-slot": "steps",
      className: z("w-full", r),
      children: /* @__PURE__ */ l.jsxs("ol", { className: "flex items-center justify-between gap-2 relative", children: [
        /* @__PURE__ */ l.jsx("span", { className: "absolute border-b border-b-gray-50 top-1/2 left-0 right-0" }),
        e.map((o, i) => /* @__PURE__ */ l.jsx(
          qh,
          {
            current: o.id === n,
            disabled: o.disabled,
            index: i,
            label: o.label,
            onClick: () => t(o.id)
          },
          o.id
        ))
      ] })
    }
  );
}
function Yh(e, n) {
  return u.useReducer((t, r) => n[t][r] ?? t, e);
}
var lt = (e) => {
  const { present: n, children: t } = e, r = Kh(n), o = typeof t == "function" ? t({ present: r.isPresent }) : u.Children.only(t), i = ue(r.ref, Zh(o));
  return typeof t == "function" || r.isPresent ? u.cloneElement(o, { ref: i }) : null;
};
lt.displayName = "Presence";
function Kh(e) {
  const [n, t] = u.useState(), r = u.useRef(null), o = u.useRef(e), i = u.useRef("none"), a = e ? "mounted" : "unmounted", [s, c] = Yh(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return u.useEffect(() => {
    const d = bn(r.current);
    i.current = s === "mounted" ? d : "none";
  }, [s]), ke(() => {
    const d = r.current, p = o.current;
    if (p !== e) {
      const v = i.current, h = bn(d);
      e ? c("MOUNT") : h === "none" || d?.display === "none" ? c("UNMOUNT") : c(p && v !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), ke(() => {
    if (n) {
      let d;
      const p = n.ownerDocument.defaultView ?? window, f = (h) => {
        const m = bn(r.current).includes(CSS.escape(h.animationName));
        if (h.target === n && m && (c("ANIMATION_END"), !o.current)) {
          const g = n.style.animationFillMode;
          n.style.animationFillMode = "forwards", d = p.setTimeout(() => {
            n.style.animationFillMode === "forwards" && (n.style.animationFillMode = g);
          });
        }
      }, v = (h) => {
        h.target === n && (i.current = bn(r.current));
      };
      return n.addEventListener("animationstart", v), n.addEventListener("animationcancel", f), n.addEventListener("animationend", f), () => {
        p.clearTimeout(d), n.removeEventListener("animationstart", v), n.removeEventListener("animationcancel", f), n.removeEventListener("animationend", f);
      };
    } else
      c("ANIMATION_END");
  }, [n, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: u.useCallback((d) => {
      r.current = d ? getComputedStyle(d) : null, t(d);
    }, [])
  };
}
function bn(e) {
  return e?.animationName || "none";
}
function Zh(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var Nr = "rovingFocusGroup.onEntryFocus", Xh = { bubbles: !1, cancelable: !0 }, nn = "RovingFocusGroup", [so, yc, Jh] = go(nn), [Qh, wc] = at(
  nn,
  [Jh]
), [eg, tg] = Qh(nn), Cc = u.forwardRef(
  (e, n) => /* @__PURE__ */ l.jsx(so.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ l.jsx(so.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ l.jsx(ng, { ...e, ref: n }) }) })
);
Cc.displayName = nn;
var ng = u.forwardRef((e, n) => {
  const {
    __scopeRovingFocusGroup: t,
    orientation: r,
    loop: o = !1,
    dir: i,
    currentTabStopId: a,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: c,
    onEntryFocus: d,
    preventScrollOnEntryFocus: p = !1,
    ...f
  } = e, v = u.useRef(null), h = ue(n, v), x = xo(i), [m, g] = Xt({
    prop: a,
    defaultProp: s ?? null,
    onChange: c,
    caller: nn
  }), [y, C] = u.useState(!1), S = Ve(d), E = yc(t), w = u.useRef(!1), [N, j] = u.useState(0);
  return u.useEffect(() => {
    const P = v.current;
    if (P)
      return P.addEventListener(Nr, S), () => P.removeEventListener(Nr, S);
  }, [S]), /* @__PURE__ */ l.jsx(
    eg,
    {
      scope: t,
      orientation: r,
      dir: x,
      loop: o,
      currentTabStopId: m,
      onItemFocus: u.useCallback(
        (P) => g(P),
        [g]
      ),
      onItemShiftTab: u.useCallback(() => C(!0), []),
      onFocusableItemAdd: u.useCallback(
        () => j((P) => P + 1),
        []
      ),
      onFocusableItemRemove: u.useCallback(
        () => j((P) => P - 1),
        []
      ),
      children: /* @__PURE__ */ l.jsx(
        se.div,
        {
          tabIndex: y || N === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: ne(e.onMouseDown, () => {
            w.current = !0;
          }),
          onFocus: ne(e.onFocus, (P) => {
            const I = !w.current;
            if (P.target === P.currentTarget && I && !y) {
              const V = new CustomEvent(Nr, Xh);
              if (P.currentTarget.dispatchEvent(V), !V.defaultPrevented) {
                const X = E().filter((L) => L.focusable), q = X.find((L) => L.active), U = X.find((L) => L.id === m), $ = [q, U, ...X].filter(
                  Boolean
                ).map((L) => L.ref.current);
                kc($, p);
              }
            }
            w.current = !1;
          }),
          onBlur: ne(e.onBlur, () => C(!1))
        }
      )
    }
  );
}), Sc = "RovingFocusGroupItem", Ec = u.forwardRef(
  (e, n) => {
    const {
      __scopeRovingFocusGroup: t,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      children: a,
      ...s
    } = e, c = Ye(), d = i || c, p = tg(Sc, t), f = p.currentTabStopId === d, v = yc(t), { onFocusableItemAdd: h, onFocusableItemRemove: x, currentTabStopId: m } = p;
    return u.useEffect(() => {
      if (r)
        return h(), () => x();
    }, [r, h, x]), /* @__PURE__ */ l.jsx(
      so.ItemSlot,
      {
        scope: t,
        id: d,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ l.jsx(
          se.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": p.orientation,
            ...s,
            ref: n,
            onMouseDown: ne(e.onMouseDown, (g) => {
              r ? p.onItemFocus(d) : g.preventDefault();
            }),
            onFocus: ne(e.onFocus, () => p.onItemFocus(d)),
            onKeyDown: ne(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                p.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const y = ig(g, p.orientation, p.dir);
              if (y !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let S = v().filter((E) => E.focusable).map((E) => E.ref.current);
                if (y === "last") S.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && S.reverse();
                  const E = S.indexOf(g.currentTarget);
                  S = p.loop ? ag(S, E + 1) : S.slice(E + 1);
                }
                setTimeout(() => kc(S));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: f, hasTabStop: m != null }) : a
          }
        )
      }
    );
  }
);
Ec.displayName = Sc;
var rg = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function og(e, n) {
  return n !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function ig(e, n, t) {
  const r = og(e.key, t);
  if (!(n === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(n === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return rg[r];
}
function kc(e, n = !1) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus({ preventScroll: n }), document.activeElement !== t)) return;
}
function ag(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
var sg = Cc, cg = Ec, co = ["Enter", " "], lg = ["ArrowDown", "PageUp", "Home"], _c = ["ArrowUp", "PageDown", "End"], dg = [...lg, ..._c], ug = {
  ltr: [...co, "ArrowRight"],
  rtl: [...co, "ArrowLeft"]
}, pg = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, rn = "Menu", [Jt, fg, mg] = go(rn), [xt, Rc] = at(rn, [
  mg,
  er,
  wc
]), sr = er(), Pc = wc(), [vg, bt] = xt(rn), [hg, on] = xt(rn), jc = (e) => {
  const { __scopeMenu: n, open: t = !1, children: r, dir: o, onOpenChange: i, modal: a = !0 } = e, s = sr(n), [c, d] = u.useState(null), p = u.useRef(!1), f = Ve(i), v = xo(o);
  return u.useEffect(() => {
    const h = () => {
      p.current = !0, document.addEventListener("pointerdown", x, { capture: !0, once: !0 }), document.addEventListener("pointermove", x, { capture: !0, once: !0 });
    }, x = () => p.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", x, { capture: !0 }), document.removeEventListener("pointermove", x, { capture: !0 });
    };
  }, []), /* @__PURE__ */ l.jsx(Os, { ...s, children: /* @__PURE__ */ l.jsx(
    vg,
    {
      scope: n,
      open: t,
      onOpenChange: f,
      content: c,
      onContentChange: d,
      children: /* @__PURE__ */ l.jsx(
        hg,
        {
          scope: n,
          onClose: u.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: p,
          dir: v,
          modal: a,
          children: r
        }
      )
    }
  ) });
};
jc.displayName = rn;
var gg = "MenuAnchor", Ao = u.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e, o = sr(t);
    return /* @__PURE__ */ l.jsx(Ts, { ...o, ...r, ref: n });
  }
);
Ao.displayName = gg;
var Oo = "MenuPortal", [xg, Ac] = xt(Oo, {
  forceMount: void 0
}), Oc = (e) => {
  const { __scopeMenu: n, forceMount: t, children: r, container: o } = e, i = bt(Oo, n);
  return /* @__PURE__ */ l.jsx(xg, { scope: n, forceMount: t, children: /* @__PURE__ */ l.jsx(lt, { present: t || i.open, children: /* @__PURE__ */ l.jsx(tr, { asChild: !0, container: o, children: r }) }) });
};
Oc.displayName = Oo;
var Te = "MenuContent", [bg, To] = xt(Te), Tc = u.forwardRef(
  (e, n) => {
    const t = Ac(Te, e.__scopeMenu), { forceMount: r = t.forceMount, ...o } = e, i = bt(Te, e.__scopeMenu), a = on(Te, e.__scopeMenu);
    return /* @__PURE__ */ l.jsx(Jt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(lt, { present: r || i.open, children: /* @__PURE__ */ l.jsx(Jt.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ l.jsx(yg, { ...o, ref: n }) : /* @__PURE__ */ l.jsx(wg, { ...o, ref: n }) }) }) });
  }
), yg = u.forwardRef(
  (e, n) => {
    const t = bt(Te, e.__scopeMenu), r = u.useRef(null), o = ue(n, r);
    return u.useEffect(() => {
      const i = r.current;
      if (i) return Po(i);
    }, []), /* @__PURE__ */ l.jsx(
      Mo,
      {
        ...e,
        ref: o,
        trapFocus: t.open,
        disableOutsidePointerEvents: t.open,
        disableOutsideScroll: !0,
        onFocusOutside: ne(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => t.onOpenChange(!1)
      }
    );
  }
), wg = u.forwardRef((e, n) => {
  const t = bt(Te, e.__scopeMenu);
  return /* @__PURE__ */ l.jsx(
    Mo,
    {
      ...e,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => t.onOpenChange(!1)
    }
  );
}), Cg = /* @__PURE__ */ jt("MenuContent.ScrollLock"), Mo = u.forwardRef(
  (e, n) => {
    const {
      __scopeMenu: t,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: i,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: s,
      onEntryFocus: c,
      onEscapeKeyDown: d,
      onPointerDownOutside: p,
      onFocusOutside: f,
      onInteractOutside: v,
      onDismiss: h,
      disableOutsideScroll: x,
      ...m
    } = e, g = bt(Te, t), y = on(Te, t), C = sr(t), S = Pc(t), E = fg(t), [w, N] = u.useState(null), j = u.useRef(null), P = ue(n, j, g.onContentChange), I = u.useRef(0), V = u.useRef(""), X = u.useRef(0), q = u.useRef(null), U = u.useRef("right"), H = u.useRef(0), $ = x ? rr : u.Fragment, L = x ? { as: Cg, allowPinchZoom: !0 } : void 0, J = (M) => {
      const _ = V.current + M, b = E().filter((k) => !k.disabled), O = document.activeElement, D = b.find((k) => k.ref.current === O)?.textValue, T = b.map((k) => k.textValue), Z = Dg(T, _, D), G = b.find((k) => k.textValue === Z)?.ref.current;
      (function k(W) {
        V.current = W, window.clearTimeout(I.current), W !== "" && (I.current = window.setTimeout(() => k(""), 1e3));
      })(_), G && setTimeout(() => G.focus());
    };
    u.useEffect(() => () => window.clearTimeout(I.current), []), bo();
    const R = u.useCallback((M) => U.current === q.current?.side && Ig(M, q.current?.area), []);
    return /* @__PURE__ */ l.jsx(
      bg,
      {
        scope: t,
        searchRef: V,
        onItemEnter: u.useCallback(
          (M) => {
            R(M) && M.preventDefault();
          },
          [R]
        ),
        onItemLeave: u.useCallback(
          (M) => {
            R(M) || (j.current?.focus(), N(null));
          },
          [R]
        ),
        onTriggerLeave: u.useCallback(
          (M) => {
            R(M) && M.preventDefault();
          },
          [R]
        ),
        pointerGraceTimerRef: X,
        onPointerGraceIntentChange: u.useCallback((M) => {
          q.current = M;
        }, []),
        children: /* @__PURE__ */ l.jsx($, { ...L, children: /* @__PURE__ */ l.jsx(
          Kn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: ne(i, (M) => {
              M.preventDefault(), j.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ l.jsx(
              Yn,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: d,
                onPointerDownOutside: p,
                onFocusOutside: f,
                onInteractOutside: v,
                onDismiss: h,
                children: /* @__PURE__ */ l.jsx(
                  sg,
                  {
                    asChild: !0,
                    ...S,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: w,
                    onCurrentTabStopIdChange: N,
                    onEntryFocus: ne(c, (M) => {
                      y.isUsingKeyboardRef.current || M.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ l.jsx(
                      Ms,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Yc(g.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...C,
                        ...m,
                        ref: P,
                        style: { outline: "none", ...m.style },
                        onKeyDown: ne(m.onKeyDown, (M) => {
                          const b = M.target.closest("[data-radix-menu-content]") === M.currentTarget, O = M.ctrlKey || M.altKey || M.metaKey, D = M.key.length === 1;
                          b && (M.key === "Tab" && M.preventDefault(), !O && D && J(M.key));
                          const T = j.current;
                          if (M.target !== T || !dg.includes(M.key)) return;
                          M.preventDefault();
                          const G = E().filter((k) => !k.disabled).map((k) => k.ref.current);
                          _c.includes(M.key) && G.reverse(), Tg(G);
                        }),
                        onBlur: ne(e.onBlur, (M) => {
                          M.currentTarget.contains(M.target) || (window.clearTimeout(I.current), V.current = "");
                        }),
                        onPointerMove: ne(
                          e.onPointerMove,
                          Qt((M) => {
                            const _ = M.target, b = H.current !== M.clientX;
                            if (M.currentTarget.contains(_) && b) {
                              const O = M.clientX > H.current ? "right" : "left";
                              U.current = O, H.current = M.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Tc.displayName = Te;
var Sg = "MenuGroup", Do = u.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e;
    return /* @__PURE__ */ l.jsx(se.div, { role: "group", ...r, ref: n });
  }
);
Do.displayName = Sg;
var Eg = "MenuLabel", Mc = u.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e;
    return /* @__PURE__ */ l.jsx(se.div, { ...r, ref: n });
  }
);
Mc.displayName = Eg;
var zn = "MenuItem", Ji = "menu.itemSelect", cr = u.forwardRef(
  (e, n) => {
    const { disabled: t = !1, onSelect: r, ...o } = e, i = u.useRef(null), a = on(zn, e.__scopeMenu), s = To(zn, e.__scopeMenu), c = ue(n, i), d = u.useRef(!1), p = () => {
      const f = i.current;
      if (!t && f) {
        const v = new CustomEvent(Ji, { bubbles: !0, cancelable: !0 });
        f.addEventListener(Ji, (h) => r?.(h), { once: !0 }), as(f, v), v.defaultPrevented ? d.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ l.jsx(
      Dc,
      {
        ...o,
        ref: c,
        disabled: t,
        onClick: ne(e.onClick, p),
        onPointerDown: (f) => {
          e.onPointerDown?.(f), d.current = !0;
        },
        onPointerUp: ne(e.onPointerUp, (f) => {
          d.current || f.currentTarget?.click();
        }),
        onKeyDown: ne(e.onKeyDown, (f) => {
          const v = s.searchRef.current !== "";
          t || v && f.key === " " || co.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
cr.displayName = zn;
var Dc = u.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, disabled: r = !1, textValue: o, ...i } = e, a = To(zn, t), s = Pc(t), c = u.useRef(null), d = ue(n, c), [p, f] = u.useState(!1), [v, h] = u.useState("");
    return u.useEffect(() => {
      const x = c.current;
      x && h((x.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ l.jsx(
      Jt.ItemSlot,
      {
        scope: t,
        disabled: r,
        textValue: o ?? v,
        children: /* @__PURE__ */ l.jsx(cg, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ l.jsx(
          se.div,
          {
            role: "menuitem",
            "data-highlighted": p ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: d,
            onPointerMove: ne(
              e.onPointerMove,
              Qt((x) => {
                r ? a.onItemLeave(x) : (a.onItemEnter(x), x.defaultPrevented || x.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: ne(
              e.onPointerLeave,
              Qt((x) => a.onItemLeave(x))
            ),
            onFocus: ne(e.onFocus, () => f(!0)),
            onBlur: ne(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), kg = "MenuCheckboxItem", Nc = u.forwardRef(
  (e, n) => {
    const { checked: t = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ l.jsx($c, { scope: e.__scopeMenu, checked: t, children: /* @__PURE__ */ l.jsx(
      cr,
      {
        role: "menuitemcheckbox",
        "aria-checked": $n(t) ? "mixed" : t,
        ...o,
        ref: n,
        "data-state": Io(t),
        onSelect: ne(
          o.onSelect,
          () => r?.($n(t) ? !0 : !t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Nc.displayName = kg;
var Ic = "MenuRadioGroup", [_g, Rg] = xt(
  Ic,
  { value: void 0, onValueChange: () => {
  } }
), Lc = u.forwardRef(
  (e, n) => {
    const { value: t, onValueChange: r, ...o } = e, i = Ve(r);
    return /* @__PURE__ */ l.jsx(_g, { scope: e.__scopeMenu, value: t, onValueChange: i, children: /* @__PURE__ */ l.jsx(Do, { ...o, ref: n }) });
  }
);
Lc.displayName = Ic;
var Fc = "MenuRadioItem", zc = u.forwardRef(
  (e, n) => {
    const { value: t, ...r } = e, o = Rg(Fc, e.__scopeMenu), i = t === o.value;
    return /* @__PURE__ */ l.jsx($c, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ l.jsx(
      cr,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: n,
        "data-state": Io(i),
        onSelect: ne(
          r.onSelect,
          () => o.onValueChange?.(t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
zc.displayName = Fc;
var No = "MenuItemIndicator", [$c, Pg] = xt(
  No,
  { checked: !1 }
), Wc = u.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, forceMount: r, ...o } = e, i = Pg(No, t);
    return /* @__PURE__ */ l.jsx(
      lt,
      {
        present: r || $n(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ l.jsx(
          se.span,
          {
            ...o,
            ref: n,
            "data-state": Io(i.checked)
          }
        )
      }
    );
  }
);
Wc.displayName = No;
var jg = "MenuSeparator", Vc = u.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e;
    return /* @__PURE__ */ l.jsx(
      se.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: n
      }
    );
  }
);
Vc.displayName = jg;
var Ag = "MenuArrow", Bc = u.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e, o = sr(t);
    return /* @__PURE__ */ l.jsx(Ds, { ...o, ...r, ref: n });
  }
);
Bc.displayName = Ag;
var Og = "MenuSub", [gb, Hc] = xt(Og), qt = "MenuSubTrigger", Uc = u.forwardRef(
  (e, n) => {
    const t = bt(qt, e.__scopeMenu), r = on(qt, e.__scopeMenu), o = Hc(qt, e.__scopeMenu), i = To(qt, e.__scopeMenu), a = u.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = i, d = { __scopeMenu: e.__scopeMenu }, p = u.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return u.useEffect(() => p, [p]), u.useEffect(() => {
      const f = s.current;
      return () => {
        window.clearTimeout(f), c(null);
      };
    }, [s, c]), /* @__PURE__ */ l.jsx(Ao, { asChild: !0, ...d, children: /* @__PURE__ */ l.jsx(
      Dc,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": t.open,
        "aria-controls": o.contentId,
        "data-state": Yc(t.open),
        ...e,
        ref: en(n, o.onTriggerChange),
        onClick: (f) => {
          e.onClick?.(f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), t.open || t.onOpenChange(!0));
        },
        onPointerMove: ne(
          e.onPointerMove,
          Qt((f) => {
            i.onItemEnter(f), !f.defaultPrevented && !e.disabled && !t.open && !a.current && (i.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              t.onOpenChange(!0), p();
            }, 100));
          })
        ),
        onPointerLeave: ne(
          e.onPointerLeave,
          Qt((f) => {
            p();
            const v = t.content?.getBoundingClientRect();
            if (v) {
              const h = t.content?.dataset.side, x = h === "right", m = x ? -5 : 5, g = v[x ? "left" : "right"], y = v[x ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: f.clientX + m, y: f.clientY },
                  { x: g, y: v.top },
                  { x: y, y: v.top },
                  { x: y, y: v.bottom },
                  { x: g, y: v.bottom }
                ],
                side: h
              }), window.clearTimeout(s.current), s.current = window.setTimeout(
                () => i.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (i.onTriggerLeave(f), f.defaultPrevented) return;
              i.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: ne(e.onKeyDown, (f) => {
          const v = i.searchRef.current !== "";
          e.disabled || v && f.key === " " || ug[r.dir].includes(f.key) && (t.onOpenChange(!0), t.content?.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
Uc.displayName = qt;
var Gc = "MenuSubContent", qc = u.forwardRef(
  (e, n) => {
    const t = Ac(Te, e.__scopeMenu), { forceMount: r = t.forceMount, ...o } = e, i = bt(Te, e.__scopeMenu), a = on(Te, e.__scopeMenu), s = Hc(Gc, e.__scopeMenu), c = u.useRef(null), d = ue(n, c);
    return /* @__PURE__ */ l.jsx(Jt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(lt, { present: r || i.open, children: /* @__PURE__ */ l.jsx(Jt.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(
      Mo,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...o,
        ref: d,
        align: "start",
        side: a.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (p) => {
          a.isUsingKeyboardRef.current && c.current?.focus(), p.preventDefault();
        },
        onCloseAutoFocus: (p) => p.preventDefault(),
        onFocusOutside: ne(e.onFocusOutside, (p) => {
          p.target !== s.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: ne(e.onEscapeKeyDown, (p) => {
          a.onClose(), p.preventDefault();
        }),
        onKeyDown: ne(e.onKeyDown, (p) => {
          const f = p.currentTarget.contains(p.target), v = pg[a.dir].includes(p.key);
          f && v && (i.onOpenChange(!1), s.trigger?.focus(), p.preventDefault());
        })
      }
    ) }) }) });
  }
);
qc.displayName = Gc;
function Yc(e) {
  return e ? "open" : "closed";
}
function $n(e) {
  return e === "indeterminate";
}
function Io(e) {
  return $n(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Tg(e) {
  const n = document.activeElement;
  for (const t of e)
    if (t === n || (t.focus(), document.activeElement !== n)) return;
}
function Mg(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
function Dg(e, n, t) {
  const o = n.length > 1 && Array.from(n).every((d) => d === n[0]) ? n[0] : n, i = t ? e.indexOf(t) : -1;
  let a = Mg(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((d) => d !== t));
  const c = a.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== t ? c : void 0;
}
function Ng(e, n) {
  const { x: t, y: r } = e;
  let o = !1;
  for (let i = 0, a = n.length - 1; i < n.length; a = i++) {
    const s = n[i], c = n[a], d = s.x, p = s.y, f = c.x, v = c.y;
    p > r != v > r && t < (f - d) * (r - p) / (v - p) + d && (o = !o);
  }
  return o;
}
function Ig(e, n) {
  if (!n) return !1;
  const t = { x: e.clientX, y: e.clientY };
  return Ng(t, n);
}
function Qt(e) {
  return (n) => n.pointerType === "mouse" ? e(n) : void 0;
}
var Lg = jc, Fg = Ao, zg = Oc, $g = Tc, Wg = Do, Vg = Mc, Bg = cr, Hg = Nc, Ug = Lc, Gg = zc, qg = Wc, Yg = Vc, Kg = Bc, Zg = Uc, Xg = qc, lr = "DropdownMenu", [Jg] = at(
  lr,
  [Rc]
), Re = Rc(), [Qg, Kc] = Jg(lr), Zc = (e) => {
  const {
    __scopeDropdownMenu: n,
    children: t,
    dir: r,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    modal: s = !0
  } = e, c = Re(n), d = u.useRef(null), [p, f] = Xt({
    prop: o,
    defaultProp: i ?? !1,
    onChange: a,
    caller: lr
  });
  return /* @__PURE__ */ l.jsx(
    Qg,
    {
      scope: n,
      triggerId: Ye(),
      triggerRef: d,
      contentId: Ye(),
      open: p,
      onOpenChange: f,
      onOpenToggle: u.useCallback(() => f((v) => !v), [f]),
      modal: s,
      children: /* @__PURE__ */ l.jsx(Lg, { ...c, open: p, onOpenChange: f, dir: r, modal: s, children: t })
    }
  );
};
Zc.displayName = lr;
var Xc = "DropdownMenuTrigger", Jc = u.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, disabled: r = !1, ...o } = e, i = Kc(Xc, t), a = Re(t);
    return /* @__PURE__ */ l.jsx(Fg, { asChild: !0, ...a, children: /* @__PURE__ */ l.jsx(
      se.button,
      {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: en(n, i.triggerRef),
        onPointerDown: ne(e.onPointerDown, (s) => {
          !r && s.button === 0 && s.ctrlKey === !1 && (i.onOpenToggle(), i.open || s.preventDefault());
        }),
        onKeyDown: ne(e.onKeyDown, (s) => {
          r || (["Enter", " "].includes(s.key) && i.onOpenToggle(), s.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
Jc.displayName = Xc;
var ex = "DropdownMenuPortal", Qc = (e) => {
  const { __scopeDropdownMenu: n, ...t } = e, r = Re(n);
  return /* @__PURE__ */ l.jsx(zg, { ...r, ...t });
};
Qc.displayName = ex;
var el = "DropdownMenuContent", tl = u.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = Kc(el, t), i = Re(t), a = u.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      $g,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...i,
        ...r,
        ref: n,
        onCloseAutoFocus: ne(e.onCloseAutoFocus, (s) => {
          a.current || o.triggerRef.current?.focus(), a.current = !1, s.preventDefault();
        }),
        onInteractOutside: ne(e.onInteractOutside, (s) => {
          const c = s.detail.originalEvent, d = c.button === 0 && c.ctrlKey === !0, p = c.button === 2 || d;
          (!o.modal || p) && (a.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
tl.displayName = el;
var tx = "DropdownMenuGroup", nx = u.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
    return /* @__PURE__ */ l.jsx(Wg, { ...o, ...r, ref: n });
  }
);
nx.displayName = tx;
var rx = "DropdownMenuLabel", ox = u.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
    return /* @__PURE__ */ l.jsx(Vg, { ...o, ...r, ref: n });
  }
);
ox.displayName = rx;
var ix = "DropdownMenuItem", nl = u.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
    return /* @__PURE__ */ l.jsx(Bg, { ...o, ...r, ref: n });
  }
);
nl.displayName = ix;
var ax = "DropdownMenuCheckboxItem", sx = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ l.jsx(Hg, { ...o, ...r, ref: n });
});
sx.displayName = ax;
var cx = "DropdownMenuRadioGroup", lx = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ l.jsx(Ug, { ...o, ...r, ref: n });
});
lx.displayName = cx;
var dx = "DropdownMenuRadioItem", ux = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ l.jsx(Gg, { ...o, ...r, ref: n });
});
ux.displayName = dx;
var px = "DropdownMenuItemIndicator", fx = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ l.jsx(qg, { ...o, ...r, ref: n });
});
fx.displayName = px;
var mx = "DropdownMenuSeparator", vx = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ l.jsx(Yg, { ...o, ...r, ref: n });
});
vx.displayName = mx;
var hx = "DropdownMenuArrow", gx = u.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
    return /* @__PURE__ */ l.jsx(Kg, { ...o, ...r, ref: n });
  }
);
gx.displayName = hx;
var xx = "DropdownMenuSubTrigger", bx = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ l.jsx(Zg, { ...o, ...r, ref: n });
});
bx.displayName = xx;
var yx = "DropdownMenuSubContent", wx = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ l.jsx(
    Xg,
    {
      ...o,
      ...r,
      ref: n,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
wx.displayName = yx;
var Cx = Zc, Sx = Jc, Ex = Qc, kx = tl, _x = nl;
function xb({ children: e, items: n, className: t, align: r = "end", side: o = "bottom" }) {
  return /* @__PURE__ */ l.jsxs(Cx, { children: [
    /* @__PURE__ */ l.jsx(Sx, { asChild: !0, children: e }),
    /* @__PURE__ */ l.jsx(Ex, { children: /* @__PURE__ */ l.jsx(
      kx,
      {
        className: z(
          "min-w-[180px] rounded-md bg-white border border-gray-100 shadow-md p-1 z-50",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2",
          "data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2",
          "data-[side=top]:slide-in-from-bottom-2",
          t
        ),
        align: r,
        side: o,
        sideOffset: 4,
        children: n.map((i, a) => /* @__PURE__ */ l.jsxs(
          _x,
          {
            className: z(
              "relative flex items-center gap-2 px-3 py-2 text-sm rounded-sm outline-none cursor-pointer",
              "focus:bg-gray-25 data-disabled:pointer-events-none data-disabled:opacity-50",
              "transition-colors",
              i.variant === "destructive" ? "text-bright-red-600 focus:text-bright-red-700" : "text-gray-700 focus:text-gray-900"
            ),
            disabled: i.disabled,
            onSelect: () => {
              i.onClick && !i.disabled && i.onClick();
            },
            children: [
              i.icon && /* @__PURE__ */ l.jsx("span", { className: "shrink-0 w-4 h-4 flex items-center justify-center", children: i.icon }),
              /* @__PURE__ */ l.jsx("span", { children: i.label })
            ]
          },
          a
        ))
      }
    ) })
  ] });
}
function bb({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ l.jsx(
        "table",
        {
          "data-slot": "table",
          className: z("w-full caption-bottom text-sm", e),
          ...n
        }
      )
    }
  );
}
function yb({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "thead",
    {
      "data-slot": "table-header",
      className: z("border-b-2 border-b-gray-50", e),
      ...n
    }
  );
}
function wb({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "tbody",
    {
      "data-slot": "table-body",
      className: z("[&_tr:last-child]:border-0", e),
      ...n
    }
  );
}
function Cb({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: z(
        "bg-white border-t border-t-gray-50 font-medium [&>tr]:last:border-b-0",
        e
      ),
      ...n
    }
  );
}
function Sb({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "tr",
    {
      "data-slot": "table-row",
      className: z(
        "hover:bg-blue-hepatica-100 data-[state=selected]:bg-blue-hepatica-100 border-b border-b-gray-50 transition-colors",
        e
      ),
      ...n
    }
  );
}
function Eb({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "th",
    {
      "data-slot": "table-head",
      className: z(
        "font-sans text-sm text-gray-900 tracking-[0.02em] h-12 px-4 text-left align-middle font-semibold whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...n
    }
  );
}
function kb({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "td",
    {
      "data-slot": "table-cell",
      className: z(
        "px-4 py-2 font-sans align-middle whitespace-nowrap text-sm tracking-[0.02em] text-gray-700 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...n
    }
  );
}
function _b({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ l.jsx(
    "caption",
    {
      "data-slot": "table-caption",
      className: z("text-muted-foreground mt-4 text-sm", e),
      ...n
    }
  );
}
function Rb({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: z(
        "bg-transparent border-gray-200 placeholder:text-muted-foreground focus-visible:border-2",
        "focus-visible:ring-0 focus-visible:border-blue-hepatica-600 hover:border-blue-hepatica-700",
        "focus-visible:shadow-button focus-visible:bg-blue-hepatica-50",
        "aria-invalid:ring-0 aria-invalid:border-bright-red-600 flex field-sizing-content",
        "min-h-16 w-full rounded-sm border px-3 py-2 text-base shadow-xs transition-[color,box-shadow]",
        "outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e
      ),
      ...n
    }
  );
}
const Rx = Hn("font-sans text-gray-900", {
  variants: {
    variant: {
      "heading-1": (
        // 40px / 48px
        "font-semibold text-[2.5rem] leading-[3rem]"
      ),
      "heading-2": (
        // 32px / 36px
        "font-bold text-[2rem] leading-[2.25rem]"
      ),
      "heading-3": (
        // 24px / 28px
        "font-bold text-[1.5rem] leading-[1.75rem]"
      ),
      "heading-4": (
        // 20px / 24px
        "font-semibold text-[1.25rem] leading-[1.5rem]"
      ),
      "heading-5": (
        // 16px / 20px
        "font-semibold text-[1rem] leading-[1.25rem]"
      ),
      "heading-6": (
        // 14px / 16px
        "font-semibold text-[0.875rem] leading-[1rem]"
      ),
      "body-lg": (
        // 18px, lh 1.5, letter-spacing 0.15px
        "font-normal text-[1.125rem] leading-[1.5] tracking-[0.009375rem]"
      ),
      "body-md": (
        // 16px, lh 1.5, letter-spacing 0.15px
        "font-normal text-[1rem] leading-[1.5] tracking-[0.009375rem]"
      ),
      "body-sm": (
        // 14px, lh 1.5, letter-spacing 0.15px
        "font-normal text-[0.875rem] leading-[1.5] tracking-[0.009375rem]"
      ),
      caption: (
        // 12px, lh 1.66, letter-spacing 0.4px
        "font-normal text-[0.75rem] leading-[1.66] tracking-[0.025rem]"
      ),
      overline: (
        // 12px, lh 2.66, letter-spacing 1px, uppercase
        "font-normal text-[0.75rem] leading-[2.66] tracking-[0.0625rem] uppercase"
      )
    }
  },
  defaultVariants: {
    variant: "body-md"
  }
}), Px = {
  "heading-1": "h1",
  "heading-2": "h2",
  "heading-3": "h3",
  "heading-4": "h4",
  "heading-5": "h5",
  "heading-6": "h6",
  "body-lg": "p",
  "body-md": "p",
  "body-sm": "p",
  caption: "span",
  overline: "span"
};
function Pb(e) {
  const { as: n, variant: t, className: r, children: o, ...i } = e, a = t ?? "body-md", s = n ?? Px[a];
  return /* @__PURE__ */ l.jsx(
    s,
    {
      className: z(
        Rx({ variant: a }),
        r
      ),
      ...i,
      children: o
    }
  );
}
const jx = "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2024C0%2010.7452%2010.7452%200%2024%200C37.2548%200%2048%2010.7452%2048%2024C48%2037.2548%2037.2548%2048%2024%2048C10.7452%2048%200%2037.2548%200%2024Z'%20fill='%23EFF1F5'/%3e%3cpath%20d='M31%2017V31H17V17H31ZM31%2015H17C15.9%2015%2015%2015.9%2015%2017V31C15%2032.1%2015.9%2033%2017%2033H31C32.1%2033%2033%2032.1%2033%2031V17C33%2015.9%2032.1%2015%2031%2015ZM26.14%2023.86L23.14%2027.73L21%2025.14L18%2029H30L26.14%2023.86Z'%20fill='%233F465B'/%3e%3c/svg%3e";
var Ir, Qi;
function Ax() {
  if (Qi) return Ir;
  Qi = 1;
  var e = !1, n, t, r, o, i, a, s, c, d, p, f, v, h, x, m;
  function g() {
    if (!e) {
      e = !0;
      var C = navigator.userAgent, S = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(C), E = /(Mac OS X)|(Windows)|(Linux)/.exec(C);
      if (v = /\b(iPhone|iP[ao]d)/.exec(C), h = /\b(iP[ao]d)/.exec(C), p = /Android/i.exec(C), x = /FBAN\/\w+;/i.exec(C), m = /Mobile/i.exec(C), f = !!/Win64/.exec(C), S) {
        n = S[1] ? parseFloat(S[1]) : S[5] ? parseFloat(S[5]) : NaN, n && document && document.documentMode && (n = document.documentMode);
        var w = /(?:Trident\/(\d+.\d+))/.exec(C);
        a = w ? parseFloat(w[1]) + 4 : n, t = S[2] ? parseFloat(S[2]) : NaN, r = S[3] ? parseFloat(S[3]) : NaN, o = S[4] ? parseFloat(S[4]) : NaN, o ? (S = /(?:Chrome\/(\d+\.\d+))/.exec(C), i = S && S[1] ? parseFloat(S[1]) : NaN) : i = NaN;
      } else
        n = t = r = i = o = NaN;
      if (E) {
        if (E[1]) {
          var N = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(C);
          s = N ? parseFloat(N[1].replace("_", ".")) : !0;
        } else
          s = !1;
        c = !!E[2], d = !!E[3];
      } else
        s = c = d = !1;
    }
  }
  var y = {
    /**
     *  Check if the UA is Internet Explorer.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    ie: function() {
      return g() || n;
    },
    /**
     * Check if we're in Internet Explorer compatibility mode.
     *
     * @return bool true if in compatibility mode, false if
     * not compatibility mode or not ie
     */
    ieCompatibilityMode: function() {
      return g() || a > n;
    },
    /**
     * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
     * only need this because Skype can't handle 64-bit IE yet.  We need to remove
     * this when we don't need it -- tracked by #601957.
     */
    ie64: function() {
      return y.ie() && f;
    },
    /**
     *  Check if the UA is Firefox.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    firefox: function() {
      return g() || t;
    },
    /**
     *  Check if the UA is Opera.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    opera: function() {
      return g() || r;
    },
    /**
     *  Check if the UA is WebKit.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    webkit: function() {
      return g() || o;
    },
    /**
     *  For Push
     *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
     */
    safari: function() {
      return y.webkit();
    },
    /**
     *  Check if the UA is a Chrome browser.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    chrome: function() {
      return g() || i;
    },
    /**
     *  Check if the user is running Windows.
     *
     *  @return bool `true' if the user's OS is Windows.
     */
    windows: function() {
      return g() || c;
    },
    /**
     *  Check if the user is running Mac OS X.
     *
     *  @return float|bool   Returns a float if a version number is detected,
     *                       otherwise true/false.
     */
    osx: function() {
      return g() || s;
    },
    /**
     * Check if the user is running Linux.
     *
     * @return bool `true' if the user's OS is some flavor of Linux.
     */
    linux: function() {
      return g() || d;
    },
    /**
     * Check if the user is running on an iPhone or iPod platform.
     *
     * @return bool `true' if the user is running some flavor of the
     *    iPhone OS.
     */
    iphone: function() {
      return g() || v;
    },
    mobile: function() {
      return g() || v || h || p || m;
    },
    nativeApp: function() {
      return g() || x;
    },
    android: function() {
      return g() || p;
    },
    ipad: function() {
      return g() || h;
    }
  };
  return Ir = y, Ir;
}
var Lr, ea;
function Ox() {
  if (ea) return Lr;
  ea = 1;
  var e = !!(typeof window < "u" && window.document && window.document.createElement), n = {
    canUseDOM: e,
    canUseWorkers: typeof Worker < "u",
    canUseEventListeners: e && !!(window.addEventListener || window.attachEvent),
    canUseViewport: e && !!window.screen,
    isInWorker: !e
    // For now, this is true - might change in the future.
  };
  return Lr = n, Lr;
}
var Fr, ta;
function Tx() {
  if (ta) return Fr;
  ta = 1;
  var e = Ox(), n;
  e.canUseDOM && (n = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  document.implementation.hasFeature("", "") !== !0);
  function t(r, o) {
    if (!e.canUseDOM || o && !("addEventListener" in document))
      return !1;
    var i = "on" + r, a = i in document;
    if (!a) {
      var s = document.createElement("div");
      s.setAttribute(i, "return;"), a = typeof s[i] == "function";
    }
    return !a && n && r === "wheel" && (a = document.implementation.hasFeature("Events.wheel", "3.0")), a;
  }
  return Fr = t, Fr;
}
var zr, na;
function Mx() {
  if (na) return zr;
  na = 1;
  var e = Ax(), n = Tx(), t = 10, r = 40, o = 800;
  function i(a) {
    var s = 0, c = 0, d = 0, p = 0;
    return "detail" in a && (c = a.detail), "wheelDelta" in a && (c = -a.wheelDelta / 120), "wheelDeltaY" in a && (c = -a.wheelDeltaY / 120), "wheelDeltaX" in a && (s = -a.wheelDeltaX / 120), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (s = c, c = 0), d = s * t, p = c * t, "deltaY" in a && (p = a.deltaY), "deltaX" in a && (d = a.deltaX), (d || p) && a.deltaMode && (a.deltaMode == 1 ? (d *= r, p *= r) : (d *= o, p *= o)), d && !s && (s = d < 1 ? -1 : 1), p && !c && (c = p < 1 ? -1 : 1), {
      spinX: s,
      spinY: c,
      pixelX: d,
      pixelY: p
    };
  }
  return i.getEventType = function() {
    return e.firefox() ? "DOMMouseScroll" : n("wheel") ? "wheel" : "mousewheel";
  }, zr = i, zr;
}
var $r, ra;
function Dx() {
  return ra || (ra = 1, $r = Mx()), $r;
}
var Nx = Dx();
const Ix = /* @__PURE__ */ lo(Nx);
function Lx(e, n, t, r, o, i) {
  i === void 0 && (i = 0);
  var a = Ot(e, n, i), s = a.width, c = a.height, d = Math.min(s, t), p = Math.min(c, r);
  return d > p * o ? {
    width: p * o,
    height: p
  } : {
    width: d,
    height: d / o
  };
}
function Fx(e) {
  return e.width > e.height ? e.width / e.naturalWidth : e.height / e.naturalHeight;
}
function Ht(e, n, t, r, o) {
  o === void 0 && (o = 0);
  var i = Ot(n.width, n.height, o), a = i.width, s = i.height;
  return {
    x: oa(e.x, a, t.width, r),
    y: oa(e.y, s, t.height, r)
  };
}
function oa(e, n, t, r) {
  var o = n * r / 2 - t / 2;
  return dr(e, -o, o);
}
function ia(e, n) {
  return Math.sqrt(Math.pow(e.y - n.y, 2) + Math.pow(e.x - n.x, 2));
}
function aa(e, n) {
  return Math.atan2(n.y - e.y, n.x - e.x) * 180 / Math.PI;
}
function zx(e, n, t, r, o, i, a) {
  i === void 0 && (i = 0), a === void 0 && (a = !0);
  var s = a ? $x : Wx, c = Ot(n.width, n.height, i), d = Ot(n.naturalWidth, n.naturalHeight, i), p = {
    x: s(100, ((c.width - t.width / o) / 2 - e.x / o) / c.width * 100),
    y: s(100, ((c.height - t.height / o) / 2 - e.y / o) / c.height * 100),
    width: s(100, t.width / c.width * 100 / o),
    height: s(100, t.height / c.height * 100 / o)
  }, f = Math.round(s(d.width, p.width * d.width / 100)), v = Math.round(s(d.height, p.height * d.height / 100)), h = d.width >= d.height * r, x = h ? {
    width: Math.round(v * r),
    height: v
  } : {
    width: f,
    height: Math.round(f / r)
  }, m = he(he({}, x), {
    x: Math.round(s(d.width - x.width, p.x * d.width / 100)),
    y: Math.round(s(d.height - x.height, p.y * d.height / 100))
  });
  return {
    croppedAreaPercentages: p,
    croppedAreaPixels: m
  };
}
function $x(e, n) {
  return Math.min(e, Math.max(0, n));
}
function Wx(e, n) {
  return n;
}
function Vx(e, n, t, r, o, i) {
  var a = Ot(n.width, n.height, t), s = dr(r.width / a.width * (100 / e.width), o, i), c = {
    x: s * a.width / 2 - r.width / 2 - a.width * s * (e.x / 100),
    y: s * a.height / 2 - r.height / 2 - a.height * s * (e.y / 100)
  };
  return {
    crop: c,
    zoom: s
  };
}
function Bx(e, n, t) {
  var r = Fx(n);
  return t.height > t.width ? t.height / (e.height * r) : t.width / (e.width * r);
}
function Hx(e, n, t, r, o, i) {
  t === void 0 && (t = 0);
  var a = Ot(n.naturalWidth, n.naturalHeight, t), s = dr(Bx(e, n, r), o, i), c = r.height > r.width ? r.height / e.height : r.width / e.width, d = {
    x: ((a.width - e.width) / 2 - e.x) * c,
    y: ((a.height - e.height) / 2 - e.y) * c
  };
  return {
    crop: d,
    zoom: s
  };
}
function sa(e, n) {
  return {
    x: (n.x + e.x) / 2,
    y: (n.y + e.y) / 2
  };
}
function Ux(e) {
  return e * Math.PI / 180;
}
function Ot(e, n, t) {
  var r = Ux(t);
  return {
    width: Math.abs(Math.cos(r) * e) + Math.abs(Math.sin(r) * n),
    height: Math.abs(Math.sin(r) * e) + Math.abs(Math.cos(r) * n)
  };
}
function dr(e, n, t) {
  return Math.min(Math.max(e, n), t);
}
function yn() {
  for (var e = [], n = 0; n < arguments.length; n++)
    e[n] = arguments[n];
  return e.filter(function(t) {
    return typeof t == "string" && t.length > 0;
  }).join(" ").trim();
}
var Gx = `.reactEasyCrop_Container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  user-select: none;
  touch-action: none;
  cursor: move;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reactEasyCrop_Image,
.reactEasyCrop_Video {
  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */
}

.reactEasyCrop_Contain {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.reactEasyCrop_Cover_Horizontal {
  width: 100%;
  height: auto;
}
.reactEasyCrop_Cover_Vertical {
  width: auto;
  height: 100%;
}

.reactEasyCrop_CropArea {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0 0 0 9999em;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.reactEasyCrop_CropAreaRound {
  border-radius: 50%;
}

.reactEasyCrop_CropAreaGrid::before {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 0;
  bottom: 0;
  left: 33.33%;
  right: 33.33%;
  border-top: 0;
  border-bottom: 0;
}

.reactEasyCrop_CropAreaGrid::after {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 33.33%;
  bottom: 33.33%;
  left: 0;
  right: 0;
  border-left: 0;
  border-right: 0;
}
`, qx = 1, Yx = 3, Kx = 1, Zx = (
  /** @class */
  (function(e) {
    lp(n, e);
    function n() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.cropperRef = u.createRef(), t.imageRef = u.createRef(), t.videoRef = u.createRef(), t.containerPosition = {
        x: 0,
        y: 0
      }, t.containerRef = null, t.styleRef = null, t.containerRect = null, t.mediaSize = {
        width: 0,
        height: 0,
        naturalWidth: 0,
        naturalHeight: 0
      }, t.dragStartPosition = {
        x: 0,
        y: 0
      }, t.dragStartCrop = {
        x: 0,
        y: 0
      }, t.gestureZoomStart = 0, t.gestureRotationStart = 0, t.isTouching = !1, t.lastPinchDistance = 0, t.lastPinchRotation = 0, t.rafDragTimeout = null, t.rafPinchTimeout = null, t.wheelTimer = null, t.currentDoc = typeof document < "u" ? document : null, t.currentWindow = typeof window < "u" ? window : null, t.resizeObserver = null, t.previousCropSize = null, t.isInitialized = !1, t.state = {
        cropSize: null,
        hasWheelJustStarted: !1,
        mediaObjectFit: void 0
      }, t.initResizeObserver = function() {
        if (!(typeof window.ResizeObserver > "u" || !t.containerRef)) {
          var r = !0;
          t.resizeObserver = new window.ResizeObserver(function(o) {
            if (r) {
              r = !1;
              return;
            }
            t.computeSizes();
          }), t.resizeObserver.observe(t.containerRef);
        }
      }, t.preventZoomSafari = function(r) {
        return r.preventDefault();
      }, t.cleanEvents = function() {
        t.currentDoc && (t.currentDoc.removeEventListener("mousemove", t.onMouseMove), t.currentDoc.removeEventListener("mouseup", t.onDragStopped), t.currentDoc.removeEventListener("touchmove", t.onTouchMove), t.currentDoc.removeEventListener("touchend", t.onDragStopped), t.currentDoc.removeEventListener("gesturechange", t.onGestureChange), t.currentDoc.removeEventListener("gestureend", t.onGestureEnd), t.currentDoc.removeEventListener("scroll", t.onScroll));
      }, t.clearScrollEvent = function() {
        t.containerRef && t.containerRef.removeEventListener("wheel", t.onWheel), t.wheelTimer && clearTimeout(t.wheelTimer);
      }, t.onMediaLoad = function() {
        var r = t.computeSizes();
        r && (t.previousCropSize = r, t.emitCropData(), t.setInitialCrop(r), t.isInitialized = !0), t.props.onMediaLoaded && t.props.onMediaLoaded(t.mediaSize);
      }, t.setInitialCrop = function(r) {
        if (t.props.initialCroppedAreaPercentages) {
          var o = Vx(t.props.initialCroppedAreaPercentages, t.mediaSize, t.props.rotation, r, t.props.minZoom, t.props.maxZoom), i = o.crop, a = o.zoom;
          t.props.onCropChange(i), t.props.onZoomChange && t.props.onZoomChange(a);
        } else if (t.props.initialCroppedAreaPixels) {
          var s = Hx(t.props.initialCroppedAreaPixels, t.mediaSize, t.props.rotation, r, t.props.minZoom, t.props.maxZoom), i = s.crop, a = s.zoom;
          t.props.onCropChange(i), t.props.onZoomChange && t.props.onZoomChange(a);
        }
      }, t.computeSizes = function() {
        var r, o, i, a, s, c, d = t.imageRef.current || t.videoRef.current;
        if (d && t.containerRef) {
          t.containerRect = t.containerRef.getBoundingClientRect(), t.saveContainerPosition();
          var p = t.containerRect.width / t.containerRect.height, f = ((r = t.imageRef.current) === null || r === void 0 ? void 0 : r.naturalWidth) || ((o = t.videoRef.current) === null || o === void 0 ? void 0 : o.videoWidth) || 0, v = ((i = t.imageRef.current) === null || i === void 0 ? void 0 : i.naturalHeight) || ((a = t.videoRef.current) === null || a === void 0 ? void 0 : a.videoHeight) || 0, h = d.offsetWidth < f || d.offsetHeight < v, x = f / v, m = void 0;
          if (h)
            switch (t.state.mediaObjectFit) {
              default:
              case "contain":
                m = p > x ? {
                  width: t.containerRect.height * x,
                  height: t.containerRect.height
                } : {
                  width: t.containerRect.width,
                  height: t.containerRect.width / x
                };
                break;
              case "horizontal-cover":
                m = {
                  width: t.containerRect.width,
                  height: t.containerRect.width / x
                };
                break;
              case "vertical-cover":
                m = {
                  width: t.containerRect.height * x,
                  height: t.containerRect.height
                };
                break;
            }
          else
            m = {
              width: d.offsetWidth,
              height: d.offsetHeight
            };
          t.mediaSize = he(he({}, m), {
            naturalWidth: f,
            naturalHeight: v
          }), t.props.setMediaSize && t.props.setMediaSize(t.mediaSize);
          var g = t.props.cropSize ? t.props.cropSize : Lx(t.mediaSize.width, t.mediaSize.height, t.containerRect.width, t.containerRect.height, t.props.aspect, t.props.rotation);
          return (((s = t.state.cropSize) === null || s === void 0 ? void 0 : s.height) !== g.height || ((c = t.state.cropSize) === null || c === void 0 ? void 0 : c.width) !== g.width) && t.props.onCropSizeChange && t.props.onCropSizeChange(g), t.setState({
            cropSize: g
          }, t.recomputeCropPosition), t.props.setCropSize && t.props.setCropSize(g), g;
        }
      }, t.saveContainerPosition = function() {
        if (t.containerRef) {
          var r = t.containerRef.getBoundingClientRect();
          t.containerPosition = {
            x: r.left,
            y: r.top
          };
        }
      }, t.onMouseDown = function(r) {
        t.currentDoc && (r.preventDefault(), t.currentDoc.addEventListener("mousemove", t.onMouseMove), t.currentDoc.addEventListener("mouseup", t.onDragStopped), t.saveContainerPosition(), t.onDragStart(n.getMousePoint(r)));
      }, t.onMouseMove = function(r) {
        return t.onDrag(n.getMousePoint(r));
      }, t.onScroll = function(r) {
        t.currentDoc && (r.preventDefault(), t.saveContainerPosition());
      }, t.onTouchStart = function(r) {
        t.currentDoc && (t.isTouching = !0, !(t.props.onTouchRequest && !t.props.onTouchRequest(r)) && (t.currentDoc.addEventListener("touchmove", t.onTouchMove, {
          passive: !1
        }), t.currentDoc.addEventListener("touchend", t.onDragStopped), t.saveContainerPosition(), r.touches.length === 2 ? t.onPinchStart(r) : r.touches.length === 1 && t.onDragStart(n.getTouchPoint(r.touches[0]))));
      }, t.onTouchMove = function(r) {
        r.preventDefault(), r.touches.length === 2 ? t.onPinchMove(r) : r.touches.length === 1 && t.onDrag(n.getTouchPoint(r.touches[0]));
      }, t.onGestureStart = function(r) {
        t.currentDoc && (r.preventDefault(), t.currentDoc.addEventListener("gesturechange", t.onGestureChange), t.currentDoc.addEventListener("gestureend", t.onGestureEnd), t.gestureZoomStart = t.props.zoom, t.gestureRotationStart = t.props.rotation);
      }, t.onGestureChange = function(r) {
        if (r.preventDefault(), !t.isTouching) {
          var o = n.getMousePoint(r), i = t.gestureZoomStart - 1 + r.scale;
          if (t.setNewZoom(i, o, {
            shouldUpdatePosition: !0
          }), t.props.onRotationChange) {
            var a = t.gestureRotationStart + r.rotation;
            t.props.onRotationChange(a);
          }
        }
      }, t.onGestureEnd = function(r) {
        t.cleanEvents();
      }, t.onDragStart = function(r) {
        var o, i, a = r.x, s = r.y;
        t.dragStartPosition = {
          x: a,
          y: s
        }, t.dragStartCrop = he({}, t.props.crop), (i = (o = t.props).onInteractionStart) === null || i === void 0 || i.call(o);
      }, t.onDrag = function(r) {
        var o = r.x, i = r.y;
        t.currentWindow && (t.rafDragTimeout && t.currentWindow.cancelAnimationFrame(t.rafDragTimeout), t.rafDragTimeout = t.currentWindow.requestAnimationFrame(function() {
          if (t.state.cropSize && !(o === void 0 || i === void 0)) {
            var a = o - t.dragStartPosition.x, s = i - t.dragStartPosition.y, c = {
              x: t.dragStartCrop.x + a,
              y: t.dragStartCrop.y + s
            }, d = t.props.restrictPosition ? Ht(c, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : c;
            t.props.onCropChange(d);
          }
        }));
      }, t.onDragStopped = function() {
        var r, o;
        t.isTouching = !1, t.cleanEvents(), t.emitCropData(), (o = (r = t.props).onInteractionEnd) === null || o === void 0 || o.call(r);
      }, t.onWheel = function(r) {
        if (t.currentWindow && !(t.props.onWheelRequest && !t.props.onWheelRequest(r))) {
          r.preventDefault();
          var o = n.getMousePoint(r), i = Ix(r).pixelY, a = t.props.zoom - i * t.props.zoomSpeed / 200;
          t.setNewZoom(a, o, {
            shouldUpdatePosition: !0
          }), t.state.hasWheelJustStarted || t.setState({
            hasWheelJustStarted: !0
          }, function() {
            var s, c;
            return (c = (s = t.props).onInteractionStart) === null || c === void 0 ? void 0 : c.call(s);
          }), t.wheelTimer && clearTimeout(t.wheelTimer), t.wheelTimer = t.currentWindow.setTimeout(function() {
            return t.setState({
              hasWheelJustStarted: !1
            }, function() {
              var s, c;
              return (c = (s = t.props).onInteractionEnd) === null || c === void 0 ? void 0 : c.call(s);
            });
          }, 250);
        }
      }, t.getPointOnContainer = function(r, o) {
        var i = r.x, a = r.y;
        if (!t.containerRect)
          throw new Error("The Cropper is not mounted");
        return {
          x: t.containerRect.width / 2 - (i - o.x),
          y: t.containerRect.height / 2 - (a - o.y)
        };
      }, t.getPointOnMedia = function(r) {
        var o = r.x, i = r.y, a = t.props, s = a.crop, c = a.zoom;
        return {
          x: (o + s.x) / c,
          y: (i + s.y) / c
        };
      }, t.setNewZoom = function(r, o, i) {
        var a = i === void 0 ? {} : i, s = a.shouldUpdatePosition, c = s === void 0 ? !0 : s;
        if (!(!t.state.cropSize || !t.props.onZoomChange)) {
          var d = dr(r, t.props.minZoom, t.props.maxZoom);
          if (c) {
            var p = t.getPointOnContainer(o, t.containerPosition), f = t.getPointOnMedia(p), v = {
              x: f.x * d - p.x,
              y: f.y * d - p.y
            }, h = t.props.restrictPosition ? Ht(v, t.mediaSize, t.state.cropSize, d, t.props.rotation) : v;
            t.props.onCropChange(h);
          }
          t.props.onZoomChange(d);
        }
      }, t.getCropData = function() {
        if (!t.state.cropSize)
          return null;
        var r = t.props.restrictPosition ? Ht(t.props.crop, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : t.props.crop;
        return zx(r, t.mediaSize, t.state.cropSize, t.getAspect(), t.props.zoom, t.props.rotation, t.props.restrictPosition);
      }, t.emitCropData = function() {
        var r = t.getCropData();
        if (r) {
          var o = r.croppedAreaPercentages, i = r.croppedAreaPixels;
          t.props.onCropComplete && t.props.onCropComplete(o, i), t.props.onCropAreaChange && t.props.onCropAreaChange(o, i);
        }
      }, t.emitCropAreaChange = function() {
        var r = t.getCropData();
        if (r) {
          var o = r.croppedAreaPercentages, i = r.croppedAreaPixels;
          t.props.onCropAreaChange && t.props.onCropAreaChange(o, i);
        }
      }, t.recomputeCropPosition = function() {
        var r, o;
        if (t.state.cropSize) {
          var i = t.props.crop;
          if (t.isInitialized && (!((r = t.previousCropSize) === null || r === void 0) && r.width) && (!((o = t.previousCropSize) === null || o === void 0) && o.height)) {
            var a = Math.abs(t.previousCropSize.width - t.state.cropSize.width) > 1e-6 || Math.abs(t.previousCropSize.height - t.state.cropSize.height) > 1e-6;
            if (a) {
              var s = t.state.cropSize.width / t.previousCropSize.width, c = t.state.cropSize.height / t.previousCropSize.height;
              i = {
                x: t.props.crop.x * s,
                y: t.props.crop.y * c
              };
            }
          }
          var d = t.props.restrictPosition ? Ht(i, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : i;
          t.previousCropSize = t.state.cropSize, t.props.onCropChange(d), t.emitCropData();
        }
      }, t.onKeyDown = function(r) {
        var o, i, a = t.props, s = a.crop, c = a.onCropChange, d = a.keyboardStep, p = a.zoom, f = a.rotation, v = d;
        if (t.state.cropSize) {
          r.shiftKey && (v *= 0.2);
          var h = he({}, s);
          switch (r.key) {
            case "ArrowUp":
              h.y -= v, r.preventDefault();
              break;
            case "ArrowDown":
              h.y += v, r.preventDefault();
              break;
            case "ArrowLeft":
              h.x -= v, r.preventDefault();
              break;
            case "ArrowRight":
              h.x += v, r.preventDefault();
              break;
            default:
              return;
          }
          t.props.restrictPosition && (h = Ht(h, t.mediaSize, t.state.cropSize, p, f)), r.repeat || (i = (o = t.props).onInteractionStart) === null || i === void 0 || i.call(o), c(h);
        }
      }, t.onKeyUp = function(r) {
        var o, i;
        switch (r.key) {
          case "ArrowUp":
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
            r.preventDefault();
            break;
          default:
            return;
        }
        t.emitCropData(), (i = (o = t.props).onInteractionEnd) === null || i === void 0 || i.call(o);
      }, t;
    }
    return n.prototype.componentDidMount = function() {
      !this.currentDoc || !this.currentWindow || (this.containerRef && (this.containerRef.ownerDocument && (this.currentDoc = this.containerRef.ownerDocument), this.currentDoc.defaultView && (this.currentWindow = this.currentDoc.defaultView), this.initResizeObserver(), typeof window.ResizeObserver > "u" && this.currentWindow.addEventListener("resize", this.computeSizes), this.props.zoomWithScroll && this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = Gx, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef));
    }, n.prototype.componentWillUnmount = function() {
      var t, r;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (t = this.resizeObserver) === null || t === void 0 || t.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((r = this.styleRef.parentNode) === null || r === void 0 || r.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, n.prototype.componentDidUpdate = function(t) {
      var r, o, i, a, s, c, d, p, f;
      t.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : t.aspect !== this.props.aspect ? this.computeSizes() : t.objectFit !== this.props.objectFit ? this.computeSizes() : t.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((r = t.cropSize) === null || r === void 0 ? void 0 : r.height) !== ((o = this.props.cropSize) === null || o === void 0 ? void 0 : o.height) || ((i = t.cropSize) === null || i === void 0 ? void 0 : i.width) !== ((a = this.props.cropSize) === null || a === void 0 ? void 0 : a.width) ? this.computeSizes() : (((s = t.crop) === null || s === void 0 ? void 0 : s.x) !== ((c = this.props.crop) === null || c === void 0 ? void 0 : c.x) || ((d = t.crop) === null || d === void 0 ? void 0 : d.y) !== ((p = this.props.crop) === null || p === void 0 ? void 0 : p.y)) && this.emitCropAreaChange(), t.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }) : this.clearScrollEvent()), t.video !== this.props.video && ((f = this.videoRef.current) === null || f === void 0 || f.load());
      var v = this.getObjectFit();
      v !== this.state.mediaObjectFit && this.setState({
        mediaObjectFit: v
      }, this.computeSizes);
    }, n.prototype.getAspect = function() {
      var t = this.props, r = t.cropSize, o = t.aspect;
      return r ? r.width / r.height : o;
    }, n.prototype.getObjectFit = function() {
      var t, r, o, i;
      if (this.props.objectFit === "cover") {
        var a = this.imageRef.current || this.videoRef.current;
        if (a && this.containerRef) {
          this.containerRect = this.containerRef.getBoundingClientRect();
          var s = this.containerRect.width / this.containerRect.height, c = ((t = this.imageRef.current) === null || t === void 0 ? void 0 : t.naturalWidth) || ((r = this.videoRef.current) === null || r === void 0 ? void 0 : r.videoWidth) || 0, d = ((o = this.imageRef.current) === null || o === void 0 ? void 0 : o.naturalHeight) || ((i = this.videoRef.current) === null || i === void 0 ? void 0 : i.videoHeight) || 0, p = c / d;
          return p < s ? "horizontal-cover" : "vertical-cover";
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    }, n.prototype.onPinchStart = function(t) {
      var r = n.getTouchPoint(t.touches[0]), o = n.getTouchPoint(t.touches[1]);
      this.lastPinchDistance = ia(r, o), this.lastPinchRotation = aa(r, o), this.onDragStart(sa(r, o));
    }, n.prototype.onPinchMove = function(t) {
      var r = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var o = n.getTouchPoint(t.touches[0]), i = n.getTouchPoint(t.touches[1]), a = sa(o, i);
        this.onDrag(a), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var s = ia(o, i), c = r.props.zoom * (s / r.lastPinchDistance);
          r.setNewZoom(c, a, {
            shouldUpdatePosition: !1
          }), r.lastPinchDistance = s;
          var d = aa(o, i), p = r.props.rotation + (d - r.lastPinchRotation);
          r.props.onRotationChange && r.props.onRotationChange(p), r.lastPinchRotation = d;
        });
      }
    }, n.prototype.render = function() {
      var t = this, r, o = this.props, i = o.image, a = o.video, s = o.mediaProps, c = o.cropperProps, d = o.transform, p = o.crop, f = p.x, v = p.y, h = o.rotation, x = o.zoom, m = o.cropShape, g = o.showGrid, y = o.roundCropAreaPixels, C = o.style, S = C.containerStyle, E = C.cropAreaStyle, w = C.mediaStyle, N = o.classes, j = N.containerClassName, P = N.cropAreaClassName, I = N.mediaClassName, V = (r = this.state.mediaObjectFit) !== null && r !== void 0 ? r : this.getObjectFit();
      return u.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(q) {
          return t.containerRef = q;
        },
        "data-testid": "container",
        style: S,
        className: yn("reactEasyCrop_Container", j)
      }, i ? u.createElement("img", he({
        alt: "",
        className: yn("reactEasyCrop_Image", V === "contain" && "reactEasyCrop_Contain", V === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", V === "vertical-cover" && "reactEasyCrop_Cover_Vertical", I)
      }, s, {
        src: i,
        ref: this.imageRef,
        style: he(he({}, w), {
          transform: d || "translate(".concat(f, "px, ").concat(v, "px) rotate(").concat(h, "deg) scale(").concat(x, ")")
        }),
        onLoad: this.onMediaLoad
      })) : a && u.createElement("video", he({
        autoPlay: !0,
        playsInline: !0,
        loop: !0,
        muted: !0,
        className: yn("reactEasyCrop_Video", V === "contain" && "reactEasyCrop_Contain", V === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", V === "vertical-cover" && "reactEasyCrop_Cover_Vertical", I)
      }, s, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: he(he({}, w), {
          transform: d || "translate(".concat(f, "px, ").concat(v, "px) rotate(").concat(h, "deg) scale(").concat(x, ")")
        }),
        controls: !1
      }), (Array.isArray(a) ? a : [{
        src: a
      }]).map(function(X) {
        return u.createElement("source", he({
          key: X.src
        }, X));
      })), this.state.cropSize && u.createElement("div", he({
        ref: this.cropperRef,
        style: he(he({}, E), {
          width: y ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
          height: y ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
        }),
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        "data-testid": "cropper",
        className: yn("reactEasyCrop_CropArea", m === "round" && "reactEasyCrop_CropAreaRound", g && "reactEasyCrop_CropAreaGrid", P)
      }, c)));
    }, n.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: Yx,
      minZoom: qx,
      cropShape: "rect",
      objectFit: "contain",
      showGrid: !0,
      style: {},
      classes: {},
      mediaProps: {},
      cropperProps: {},
      zoomSpeed: 1,
      restrictPosition: !0,
      zoomWithScroll: !0,
      keyboardStep: Kx
    }, n.getMousePoint = function(t) {
      return {
        x: Number(t.clientX),
        y: Number(t.clientY)
      };
    }, n.getTouchPoint = function(t) {
      return {
        x: Number(t.clientX),
        y: Number(t.clientY)
      };
    }, n;
  })(u.Component)
);
function Xx({
  imageUrl: e,
  aspect: n,
  rounded: t,
  crop: r,
  zoom: o,
  onCropChange: i,
  onZoomChange: a,
  onCropComplete: s,
  onClose: c,
  onConfirm: d
}) {
  const p = ye(
    (f, v) => s(v),
    [s]
  );
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 sm:p-6",
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "Crop image",
      children: /* @__PURE__ */ l.jsxs("div", { className: "w-full sm:max-w-2xl bg-white sm:rounded-lg max-h-[95dvh] sm:max-h-[90vh] overflow-hidden flex flex-col", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-gray-200 bg-white px-4 py-3 sm:px-6 sm:py-4", children: [
          /* @__PURE__ */ l.jsx("h2", { className: "text-base sm:text-lg font-semibold text-gray-900", children: "Crop image" }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              onClick: c,
              className: "inline-flex size-10 items-center justify-center rounded-md hover:bg-gray-25 transition-colors",
              "aria-label": "Close crop modal",
              children: /* @__PURE__ */ l.jsx(ja, { className: "size-5 text-gray-700" })
            }
          )
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "flex-1 overflow-auto px-4 py-4 sm:px-6 sm:py-6", children: [
          /* @__PURE__ */ l.jsx("div", { className: "relative w-full overflow-hidden rounded-lg bg-gray-900", children: /* @__PURE__ */ l.jsx("div", { className: "relative h-[60dvh] sm:h-[420px] w-full", children: /* @__PURE__ */ l.jsx(
            Zx,
            {
              image: e,
              crop: r,
              zoom: o,
              aspect: n,
              cropShape: t ? "round" : "rect",
              onCropChange: i,
              onCropComplete: p,
              onZoomChange: a
            }
          ) }) }),
          /* @__PURE__ */ l.jsxs("div", { className: "mt-4 space-y-2", children: [
            /* @__PURE__ */ l.jsxs("label", { className: "text-sm font-medium text-gray-700", children: [
              "Zoom: ",
              o.toFixed(1),
              "x"
            ] }),
            /* @__PURE__ */ l.jsx(
              "input",
              {
                type: "range",
                min: 1,
                max: 3,
                step: 0.1,
                value: o,
                onChange: (f) => a(parseFloat(f.target.value)),
                className: "w-full cursor-pointer",
                "aria-label": "Zoom"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ l.jsx("div", { className: "sticky bottom-0 z-10 border-t border-gray-200 bg-white px-4 py-3 sm:px-6 sm:py-4", children: /* @__PURE__ */ l.jsx("div", { className: "flex flex-col-reverse sm:flex-row gap-2 sm:justify-end", children: /* @__PURE__ */ l.jsx(
          lu,
          {
            type: "button",
            variant: "blue-hepatica-solid",
            onClick: d,
            className: "w-full sm:w-auto",
            children: "Crop"
          }
        ) }) })
      ] })
    }
  );
}
function Jx(e) {
  const n = {};
  for (const t of e) {
    const r = t.toLowerCase().replace(/^\./, ""), o = `image/${r === "jpg" ? "jpeg" : r}`;
    n[o] ??= [], n[o].push(`.${r}`);
  }
  return n;
}
function Qx(e) {
  return new Promise((n, t) => {
    const r = new Image();
    r.addEventListener("load", () => n(r)), r.addEventListener("error", (o) => t(o)), r.setAttribute("crossOrigin", "anonymous"), r.src = e;
  });
}
async function e0(e, n, t) {
  const r = await Qx(e), o = document.createElement("canvas"), i = o.getContext("2d");
  if (!i) throw new Error("Could not get canvas context");
  o.width = Math.max(1, Math.round(n.width)), o.height = Math.max(1, Math.round(n.height)), i.drawImage(
    r,
    n.x,
    n.y,
    n.width,
    n.height,
    0,
    0,
    o.width,
    o.height
  );
  const a = await new Promise((s, c) => {
    o.toBlob(
      (d) => d ? s(d) : c(new Error("Canvas is empty")),
      t.fileType || "image/png",
      0.92
    );
  });
  return new File([a], t.fileName, { type: t.fileType || a.type });
}
function jb({
  value: e,
  onChange: n,
  aspectRatio: t,
  extensions: r,
  rounded: o = !1,
  maxSize: i = 5 * 1024 * 1024,
  placeholder: a = "Accepted files jpg, png and webp",
  className: s
}) {
  const [c, d] = qe(null), [p, f] = qe(!1), [v, h] = qe(null), [x, m] = qe({ x: 0, y: 0 }), [g, y] = qe(1), [C, S] = qe(null), E = rt(() => Jx(r), [r]);
  wn(() => {
    if (!e) {
      c && URL.revokeObjectURL(c), d(null);
      return;
    }
    const $ = URL.createObjectURL(e);
    return c && URL.revokeObjectURL(c), d($), () => {
      URL.revokeObjectURL($);
    };
  }, [e]);
  const w = ye(($) => {
    const L = $[0];
    if (!L) return;
    const J = URL.createObjectURL(L);
    h(J), f(!0), m({ x: 0, y: 0 }), y(1), S(null);
  }, []), { getRootProps: N, getInputProps: j, isDragActive: P, fileRejections: I } = ho({
    onDrop: w,
    accept: E,
    maxSize: i,
    multiple: !1
  }), V = I.flatMap(
    ($) => $.errors.map((L) => L.code === "file-too-large" ? `File is too large. Max size is ${(i / 1048576).toFixed(
      0
    )}MB` : L.code === "file-invalid-type" ? `Invalid file type. Allowed types: ${r.join(", ")}` : L.message)
  ), X = ye(() => {
    f(!1), v && URL.revokeObjectURL(v), h(null);
  }, [v]), q = ye(async () => {
    if (!(!v || !C))
      try {
        const $ = await e0(v, C, {
          fileName: e?.name ?? "image.png",
          fileType: e?.type ?? "image/png"
        });
        n($), f(!1), URL.revokeObjectURL(v), h(null);
      } catch ($) {
        console.error("Error cropping image:", $);
      }
  }, [C, n, v, e?.name, e?.type]), U = ye(() => {
    c && URL.revokeObjectURL(c), d(null), n(null);
  }, [n, c]), H = o ? { aspectRatio: "1 / 1" } : { aspectRatio: `${t}` };
  return /* @__PURE__ */ l.jsxs("div", { className: z("w-full space-y-2", s), children: [
    c ? /* @__PURE__ */ l.jsxs("div", { className: "relative w-fit max-h-[11rem]", children: [
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: z(
            "h-[11rem] overflow-hidden border border-gray-50 bg-white shadow-lg",
            o ? "rounded-full" : "rounded-lg"
          ),
          style: H,
          children: /* @__PURE__ */ l.jsx(
            "img",
            {
              src: c,
              alt: "Preview",
              className: "object-contain",
              style: { maxHeight: "11rem" }
            }
          )
        }
      ),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          onClick: U,
          "aria-label": "Remove image",
          className: z(
            "absolute right-1 top-1 inline-flex items-center justify-center",
            "size-10 rounded-full bg-gray-600 text-white border border-white",
            "hover:bg-gray-700 transition-colors"
          ),
          children: /* @__PURE__ */ l.jsx(ja, { className: "size-4" })
        }
      )
    ] }) : /* @__PURE__ */ l.jsxs(
      "div",
      {
        ...N(),
        className: z(
          "relative flex w-full items-center justify-center",
          "rounded-[0.625rem] border border-gray-50 bg-white",
          "min-h-[11rem]",
          "cursor-pointer transition-colors",
          P && "border-blue-hepatica-600"
        ),
        children: [
          /* @__PURE__ */ l.jsx("input", { ...j() }),
          /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-center justify-center px-4 text-center gap-y-3", children: [
            /* @__PURE__ */ l.jsx("img", { src: jx, alt: "" }),
            /* @__PURE__ */ l.jsx("p", { className: "text-sm font-sans font-medium text-gray-700", children: "Click to upload or drag and drop" }),
            !!a && /* @__PURE__ */ l.jsx("p", { className: "text-xs text-gray-500", children: a })
          ] })
        ]
      }
    ),
    V.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "space-y-1", children: V.map(($, L) => /* @__PURE__ */ l.jsx("p", { className: "text-sm text-bright-red-600", children: $ }, L)) }),
    p && v && /* @__PURE__ */ l.jsx(
      Xx,
      {
        imageUrl: v,
        aspect: t,
        rounded: o,
        crop: x,
        zoom: g,
        onCropChange: m,
        onZoomChange: y,
        onCropComplete: ($) => S($),
        onClose: X,
        onConfirm: q
      }
    )
  ] });
}
var ur = "Dialog", [rl, ol] = at(ur), [t0, Fe] = rl(ur), il = (e) => {
  const {
    __scopeDialog: n,
    children: t,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: a = !0
  } = e, s = u.useRef(null), c = u.useRef(null), [d, p] = Xt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: ur
  });
  return /* @__PURE__ */ l.jsx(
    t0,
    {
      scope: n,
      triggerRef: s,
      contentRef: c,
      contentId: Ye(),
      titleId: Ye(),
      descriptionId: Ye(),
      open: d,
      onOpenChange: p,
      onOpenToggle: u.useCallback(() => p((f) => !f), [p]),
      modal: a,
      children: t
    }
  );
};
il.displayName = ur;
var al = "DialogTrigger", sl = u.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = Fe(al, t), i = ue(n, o.triggerRef);
    return /* @__PURE__ */ l.jsx(
      se.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": zo(o.open),
        ...r,
        ref: i,
        onClick: ne(e.onClick, o.onOpenToggle)
      }
    );
  }
);
sl.displayName = al;
var Lo = "DialogPortal", [n0, cl] = rl(Lo, {
  forceMount: void 0
}), ll = (e) => {
  const { __scopeDialog: n, forceMount: t, children: r, container: o } = e, i = Fe(Lo, n);
  return /* @__PURE__ */ l.jsx(n0, { scope: n, forceMount: t, children: u.Children.map(r, (a) => /* @__PURE__ */ l.jsx(lt, { present: t || i.open, children: /* @__PURE__ */ l.jsx(tr, { asChild: !0, container: o, children: a }) })) });
};
ll.displayName = Lo;
var Wn = "DialogOverlay", dl = u.forwardRef(
  (e, n) => {
    const t = cl(Wn, e.__scopeDialog), { forceMount: r = t.forceMount, ...o } = e, i = Fe(Wn, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ l.jsx(lt, { present: r || i.open, children: /* @__PURE__ */ l.jsx(o0, { ...o, ref: n }) }) : null;
  }
);
dl.displayName = Wn;
var r0 = /* @__PURE__ */ jt("DialogOverlay.RemoveScroll"), o0 = u.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = Fe(Wn, t);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ l.jsx(rr, { as: r0, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ l.jsx(
        se.div,
        {
          "data-state": zo(o.open),
          ...r,
          ref: n,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), ht = "DialogContent", ul = u.forwardRef(
  (e, n) => {
    const t = cl(ht, e.__scopeDialog), { forceMount: r = t.forceMount, ...o } = e, i = Fe(ht, e.__scopeDialog);
    return /* @__PURE__ */ l.jsx(lt, { present: r || i.open, children: i.modal ? /* @__PURE__ */ l.jsx(i0, { ...o, ref: n }) : /* @__PURE__ */ l.jsx(a0, { ...o, ref: n }) });
  }
);
ul.displayName = ht;
var i0 = u.forwardRef(
  (e, n) => {
    const t = Fe(ht, e.__scopeDialog), r = u.useRef(null), o = ue(n, t.contentRef, r);
    return u.useEffect(() => {
      const i = r.current;
      if (i) return Po(i);
    }, []), /* @__PURE__ */ l.jsx(
      pl,
      {
        ...e,
        ref: o,
        trapFocus: t.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ne(e.onCloseAutoFocus, (i) => {
          i.preventDefault(), t.triggerRef.current?.focus();
        }),
        onPointerDownOutside: ne(e.onPointerDownOutside, (i) => {
          const a = i.detail.originalEvent, s = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || s) && i.preventDefault();
        }),
        onFocusOutside: ne(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), a0 = u.forwardRef(
  (e, n) => {
    const t = Fe(ht, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      pl,
      {
        ...e,
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          e.onCloseAutoFocus?.(i), i.defaultPrevented || (r.current || t.triggerRef.current?.focus(), i.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (i) => {
          e.onInteractOutside?.(i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const a = i.target;
          t.triggerRef.current?.contains(a) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), pl = u.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...a } = e, s = Fe(ht, t), c = u.useRef(null), d = ue(n, c);
    return bo(), /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        Kn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ l.jsx(
            Yn,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": zo(s.open),
              ...a,
              ref: d,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(c0, { titleId: s.titleId }),
        /* @__PURE__ */ l.jsx(d0, { contentRef: c, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Fo = "DialogTitle", fl = u.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = Fe(Fo, t);
    return /* @__PURE__ */ l.jsx(se.h2, { id: o.titleId, ...r, ref: n });
  }
);
fl.displayName = Fo;
var ml = "DialogDescription", vl = u.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = Fe(ml, t);
    return /* @__PURE__ */ l.jsx(se.p, { id: o.descriptionId, ...r, ref: n });
  }
);
vl.displayName = ml;
var hl = "DialogClose", gl = u.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = Fe(hl, t);
    return /* @__PURE__ */ l.jsx(
      se.button,
      {
        type: "button",
        ...r,
        ref: n,
        onClick: ne(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
gl.displayName = hl;
function zo(e) {
  return e ? "open" : "closed";
}
var xl = "DialogTitleWarning", [s0, bl] = pf(xl, {
  contentName: ht,
  titleName: Fo,
  docsSlug: "dialog"
}), c0 = ({ titleId: e }) => {
  const n = bl(xl), t = `\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(t));
  }, [t, e]), null;
}, l0 = "DialogDescriptionWarning", d0 = ({ contentRef: e, descriptionId: n }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${bl(l0).contentName}}.`;
  return u.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    n && o && (document.getElementById(n) || console.warn(r));
  }, [r, e, n]), null;
}, u0 = il, p0 = sl, f0 = ll, m0 = dl, v0 = ul, h0 = fl, g0 = vl, yl = gl, wl = "AlertDialog", [x0] = at(wl, [
  ol
]), Xe = ol(), Cl = (e) => {
  const { __scopeAlertDialog: n, ...t } = e, r = Xe(n);
  return /* @__PURE__ */ l.jsx(u0, { ...r, ...t, modal: !0 });
};
Cl.displayName = wl;
var b0 = "AlertDialogTrigger", y0 = u.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = Xe(t);
    return /* @__PURE__ */ l.jsx(p0, { ...o, ...r, ref: n });
  }
);
y0.displayName = b0;
var w0 = "AlertDialogPortal", Sl = (e) => {
  const { __scopeAlertDialog: n, ...t } = e, r = Xe(n);
  return /* @__PURE__ */ l.jsx(f0, { ...r, ...t });
};
Sl.displayName = w0;
var C0 = "AlertDialogOverlay", El = u.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = Xe(t);
    return /* @__PURE__ */ l.jsx(m0, { ...o, ...r, ref: n });
  }
);
El.displayName = C0;
var Rt = "AlertDialogContent", [S0, E0] = x0(Rt), k0 = /* @__PURE__ */ vf("AlertDialogContent"), kl = u.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, children: r, ...o } = e, i = Xe(t), a = u.useRef(null), s = ue(n, a), c = u.useRef(null);
    return /* @__PURE__ */ l.jsx(
      s0,
      {
        contentName: Rt,
        titleName: _l,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ l.jsx(S0, { scope: t, cancelRef: c, children: /* @__PURE__ */ l.jsxs(
          v0,
          {
            role: "alertdialog",
            ...i,
            ...o,
            ref: s,
            onOpenAutoFocus: ne(o.onOpenAutoFocus, (d) => {
              d.preventDefault(), c.current?.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (d) => d.preventDefault(),
            onInteractOutside: (d) => d.preventDefault(),
            children: [
              /* @__PURE__ */ l.jsx(k0, { children: r }),
              /* @__PURE__ */ l.jsx(R0, { contentRef: a })
            ]
          }
        ) })
      }
    );
  }
);
kl.displayName = Rt;
var _l = "AlertDialogTitle", Rl = u.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = Xe(t);
    return /* @__PURE__ */ l.jsx(h0, { ...o, ...r, ref: n });
  }
);
Rl.displayName = _l;
var Pl = "AlertDialogDescription", jl = u.forwardRef((e, n) => {
  const { __scopeAlertDialog: t, ...r } = e, o = Xe(t);
  return /* @__PURE__ */ l.jsx(g0, { ...o, ...r, ref: n });
});
jl.displayName = Pl;
var _0 = "AlertDialogAction", Al = u.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = Xe(t);
    return /* @__PURE__ */ l.jsx(yl, { ...o, ...r, ref: n });
  }
);
Al.displayName = _0;
var Ol = "AlertDialogCancel", Tl = u.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, { cancelRef: o } = E0(Ol, t), i = Xe(t), a = ue(n, o);
    return /* @__PURE__ */ l.jsx(yl, { ...i, ...r, ref: a });
  }
);
Tl.displayName = Ol;
var R0 = ({ contentRef: e }) => {
  const n = `\`${Rt}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Rt}\` by passing a \`${Pl}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Rt}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return u.useEffect(() => {
    document.getElementById(
      e.current?.getAttribute("aria-describedby")
    ) || console.warn(n);
  }, [n, e]), null;
}, P0 = Cl, j0 = Sl, A0 = El, O0 = kl, Ab = Al, Ob = Tl, T0 = Rl, ca = jl, M0 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], D0 = M0.reduce((e, n) => {
  const t = /* @__PURE__ */ Oa(`Primitive.${n}`), r = u.forwardRef((o, i) => {
    const { asChild: a, ...s } = o, c = a ? t : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l.jsx(c, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {}), N0 = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), I0 = "VisuallyHidden", Ml = u.forwardRef(
  (e, n) => /* @__PURE__ */ l.jsx(
    D0.span,
    {
      ...e,
      ref: n,
      style: { ...N0, ...e.style }
    }
  )
);
Ml.displayName = I0;
var L0 = Ml;
function Tb({
  open: e,
  onOpenChange: n,
  header: t,
  content: r,
  actions: o,
  className: i
}) {
  return /* @__PURE__ */ l.jsx(P0, { open: e, onOpenChange: n, children: /* @__PURE__ */ l.jsxs(j0, { children: [
    /* @__PURE__ */ l.jsx(A0, { className: "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
    /* @__PURE__ */ l.jsxs(
      O0,
      {
        className: z(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
          i
        ),
        children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col space-y-2", children: [
            /* @__PURE__ */ l.jsx(T0, { className: "text-lg font-semibold text-gray-900", children: t }),
            typeof r == "string" ? /* @__PURE__ */ l.jsx(ca, { className: "text-sm text-gray-600", children: r }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
              /* @__PURE__ */ l.jsx(ca, { asChild: !0, children: /* @__PURE__ */ l.jsx(L0, { children: /* @__PURE__ */ l.jsx("span", { children: "Confirmation dialog content" }) }) }),
              /* @__PURE__ */ l.jsx("div", { className: "text-sm text-gray-600", children: r })
            ] })
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 space-y-2 space-y-reverse sm:space-y-0", children: o })
        ]
      }
    )
  ] }) });
}
export {
  Tb as AlertDialog,
  Su as AnnouncementIcon,
  $0 as Badge,
  W0 as Breadcrumb,
  B0 as BreadcrumbItem,
  H0 as BreadcrumbLink,
  V0 as BreadcrumbList,
  U0 as BreadcrumbPage,
  G0 as BreadcrumbSeparator,
  lu as Button,
  q0 as Checkbox,
  Eu as ChurchIcon,
  ku as ClassIcon,
  _u as CrownIcon,
  Ab as DialogAction,
  Ob as DialogCancel,
  Ru as EventIcon,
  Y0 as Form,
  J0 as FormControl,
  Q0 as FormDescription,
  K0 as FormField,
  Z0 as FormItem,
  X0 as FormLabel,
  eb as FormMessage,
  Pu as GiftIcon,
  ju as HomeIcon,
  tb as Icon,
  jb as ImageUploader,
  zu as Input,
  rb as InputOTP,
  ob as InputOTPGroup,
  ab as InputOTPSeparator,
  ib as InputOTPSlot,
  Fa as Label,
  Au as LockClosedIcon,
  Ou as LockOpenIcon,
  Qu as Logo,
  ep as LogoLockup,
  sb as MediaUploader,
  cb as MenuItem,
  Tu as MinistryIcon,
  pb as Pagination,
  nb as PasswordInput,
  Mu as PodcastIcon,
  fb as RadioButton,
  mb as Section,
  jh as Select,
  Th as SelectContent,
  lb as SelectGroup,
  Mh as SelectItem,
  db as SelectLabel,
  Nh as SelectScrollDownButton,
  Dh as SelectScrollUpButton,
  ub as SelectSeparator,
  Oh as SelectTrigger,
  Ah as SelectValue,
  Du as SeriesIcon,
  Nu as SermonIcon,
  vb as Sidebar,
  hb as Stepper,
  Iu as SubscriptionIcon,
  xb as SuspendedMenu,
  bb as Table,
  wb as TableBody,
  _b as TableCaption,
  kb as TableCell,
  Cb as TableFooter,
  Eb as TableHead,
  yb as TableHeader,
  Sb as TableRow,
  Rb as Textarea,
  Pb as Typography,
  Lu as VideoIcon,
  Td as badgeVariants,
  cu as buttonVariants,
  Rx as typographyVariants,
  qn as useFormField
};
